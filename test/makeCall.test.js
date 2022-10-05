const MakeCall = require("../services/makeCall");
const makecall = new MakeCall();

test("Get Addresses for PR1", async () => {
  const url = "https://api.os.uk/search/places/v1/postcode?postcode=PR1";
  const response = await makecall.makeCall(url);
  expect(response.status).toBe(200);
});

test("Get Addresses for no postcode", async () => {
  const url = "https://api.os.uk/search/places/v1/postcode?postcode=";
  const response = await makecall.makeCall(url);
  expect(response.status).toBe(400);
});

test("Get Addresses for wrong postcode", async () => {
  const url = "https://api.os.uk/search/places/v1/postcode?postcode=PRb";
  const response = await makecall.makeCall(url);
  expect(response.status).toBe(400);
});
