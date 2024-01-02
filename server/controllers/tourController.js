const factory = require("./handlerFactory");
const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};

exports.createTour = factory.createOne(Tour);
exports.getTour = factory.getOne(Tour, { path: "reviews" });
exports.getAllTours = factory.getAll(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { searchRadius, latlon } = req.params;

  const [lat, lon] = latlon.split(",");
  const radius = searchRadius * 1000; //radius in km
  const referencePoint = {
    type: "Point",
    coordinates: [parseFloat(lon), parseFloat(lat)],
  };

  if (!lat || !lon) {
    next(
      new AppError(
        "Please provide latitude and longitude in correct format (lat,lon)",
        400,
      ),
    );
  }

  const tours = await Tour.find({
    startLocation: {
      $near: {
        $geometry: referencePoint,
        $maxDistance: parseFloat(radius),
      },
    },
  });

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlon } = req.params;
  const [lat, lon] = latlon.split(",");
  const referencePoint = {
    type: "Point",
    coordinates: [parseFloat(lon), parseFloat(lat)],
  };

  if (!lat || !lon) {
    next(
      new AppError(
        "Please provide latitude and longitude in correct format (lat,lon)",
        400,
      ),
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: referencePoint,
        distanceField: "distance",
        distanceMultiplier: 0.001,
        spherical: true,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data: distances,
    },
  });
});

exports.getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: "$difficulty",
        numTours: { $sum: 1 },
        numRatings: { $sum: "$ratingsQuantity" },
        avgRating: { $avg: "$ratingsAverage" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    { $sort: { avgPrice: 1 } },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;

  const plan = await Tour.aggregate([
    {
      $unwind: "$startDates",
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$startDates" },
        toursCount: { $sum: 1 },
        tours: {
          $push: "$name",
        },
      },
    },
    { $addFields: { month: "$_id" } },
    {
      $project: {
        _id: 0,
      },
    },
    { $sort: { toursCount: -1 } },
    { $limit: 12 },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      plan,
    },
  });
});
