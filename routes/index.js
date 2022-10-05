var express = require("express");
const { check, validationResult } = require("express-validator");

const addressRoute = require("./addresses");
const AddressService = require("../services/AddressService");

const addressService = new AddressService();

var router = express.Router();

// Handle get and post requests here

router.get("/", (request, response, next) => {
  try {
    const errors = request.session.indexDetails
      ? request.session.indexDetails.errors
      : false;

    // console.log(errors);

    request.session.indexDetails = {};

    return response.render("index", { errors: errors });
  } catch (err) {
    return next(err);
  }
});

router.post(
  "/",
  [check("postcode").trim().isLength({ min: 3 })],
  async (request, response) => {
    const errors = validationResult(request);
    //console.log(errors);
    if (!errors.isEmpty()) {
      // console.log(errors.array());
      request.session.indexDetails = {
        errors: errors.array(),
      };
      return response.redirect("/");
    }

    return response.redirect("/address/?postcode=" + request.body.postcode);
  }
);

module.exports = router;
