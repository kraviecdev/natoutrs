const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res) => {
  // Get tour data from collection
  const tours = await Tour.find();

  res.status(200).json({
    title: "All tours",
    tours,
  });
});

exports.getTourView = catchAsync(async (req, res) => {
  // Get data for the requested tour (including guides and reviews)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "user review rating photo",
  });

  res.status(200).json({
    title: tour.name,
    tour,
  });
});
