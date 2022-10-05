const util = require("util");
// Class to handle all the service calls related to Address
const MakeCall = require("./makeCall");

const makeCall = new MakeCall();

class AddressService {
  constructor() {}
  async getAddress(request) {
    const postcode = request.query.postcode;
    try {
      // console.log(`Postcode : ${postcode}`);
      const url =
        "https://api.os.uk/search/places/v1/postcode?postcode=" + postcode;
      const addresses = await makeCall.makeCall(url);
      return addresses;
    } catch (err) {
      return err;
    }
  }
}

module.exports = AddressService;
