const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const AddressService = require("../services/AddressService");

const addressService = new AddressService();

// Handle get and post requests here

router.get("/address/:postcode?", async (request, response, next) => {
  // const postcode = request.params.postcode;
  try {
    const addresses = await addressService.getAddress(request);

    if (addresses && addresses.data && addresses.data.error) {
      request.session.indexDetails = {
        errors: [{ msg: addresses.data.error.message }],
      };
      return response.redirect("/");
    }
    response.render("addresses", { addresses: addresses.data.results });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
