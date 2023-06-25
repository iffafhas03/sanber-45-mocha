//get Unit detail

const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2MGFlNzIzLWM1NjUtNGY1OS04ODNjLTdkMTdlOWU1Mjg4ZSIsImNvbXBhbnlJZCI6ImVmOTlkMGY3LTc2YjgtNDM2OC05YWZjLTA5NTUxYjBiZTNkOCIsImlhdCI6MTY4NzcxMTA2N30.fujb0hxzSz5QhCbQndwe5Zx-44ilAw4ued0eYO6u8wE";

describe("Get Unit details", function () {
  it("valid token", async function () {
    const response = await request
      .get("/units/625bdb9e-8b79-4cea-8d49-d3de8638952a")
      .set({
        Authorization: AUTH,
        Accept: "application/json",
      });
    console.log(response);
    expect(await response.statusCode).to.eql(200);
  });
});
