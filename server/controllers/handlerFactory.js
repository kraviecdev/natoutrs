const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data,
    });
  });

exports.getOne = (Model, popOpt) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOpt) query = query.populate(popOpt);

    const data = await query;

    if (!data) {
      return next(new AppError("Cannot find that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: data.length,
      data,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return next(new AppError("Cannot find that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
      return next(new AppError("Cannot find that ID", 404));
    }

    res.status(204).json({
      status: "success",
    });
  });
