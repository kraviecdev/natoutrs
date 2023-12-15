const xssFilters = require("xss-filters");

function sanitizeInputData(req, res, next) {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      req.body[key] = xssFilters.inHTMLData(req.body[key]);
    });
  }

  next();
}

module.exports = sanitizeInputData;
