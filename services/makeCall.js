/* Generic class to handle API calls.
   The makeCall function can be modified to handle generic http methods to make it more dynamic.
 */
const axios = require("axios");

const addresses = {};

const apiKey = "gLfSz6lFO7CVKDABcxg96TSAf4DK5YNQ";

class makeCall {
  constructor() {}
  async makeCall(url) {
    url = url + "&key=" + apiKey;
    try {
      return await axios.get(url);
    } catch (error) {
      // console.log(error);
      return error.response;
    }
  }
}

module.exports = makeCall;
