//Add Units

const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2MGFlNzIzLWM1NjUtNGY1OS04ODNjLTdkMTdlOWU1Mjg4ZSIsImNvbXBhbnlJZCI6ImVmOTlkMGY3LTc2YjgtNDM2OC05YWZjLTA5NTUxYjBiZTNkOCIsImlhdCI6MTY4NzcxMTA2N30.fujb0hxzSz5QhCbQndwe5Zx-44ilAw4ued0eYO6u8wE";

//const respGetUser = getUser.getUserPages;
const dataUnits = {
  name: "gram",
  description: "weight measurement",
};
describe("Create units without token", function () {
  it("create new units", async function () {
    const response = await request.post("/units").send({
      name: dataUnits.name,
      job: dataUnits.description,
    });

    expect(await response.statusCode).to.eql(201);
    expect(await response.body.name).to.eql("gram");
    expect(await response.body.description).to.eql("weight measurement");
  });

  it("add units and valid token", async function () {
    const response = await request
      .post("/units")
      .send({
        name: "gram",
        description: "weight measurement",
      })
      .set({
        Authorization: AUTH,
        Accept: "application/json",
      });
    console.log(response);
    expect(await response.statusCode).to.eql(201);
  });
});
