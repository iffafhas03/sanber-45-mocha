//CreateUser

const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJlNTFjMDlhLTUyMTYtNGU2Zi1hODUwLTRkZmZjYmFkMTdlNCIsImNvbXBhbnlJZCI6Ijc3Y2EwMGNjLTc1OTMtNDNjZS1iMGUwLTc4ZmRiN2RhMWNjMyIsImlhdCI6MTY4NjQ5MTc1Mn0.QVwhEav4RlnoHzdUKB9-crTovxezsPANt6eqKRmYvZM";

//const respGetUser = getUser.getUserPages;
const dataRegis = {
  name: "GWI",
  email: "iffach@gmail.com",
  password: "1234",
};
describe("Create new member", function () {
  it("Success Registration", async function () {
    const response = await request.post("/registration").send({
      email: dataRegis.email,
      password: dataRegis.password,
      name: dataRegis.name,
    });

    console.log(response.body);
    expect(await response.statusCode).to.eql(201);
    expect(await response.body.email).to.eql("iffach@gmail.com");
    expect(await response.body.password).to.eql("1234");
  });
});
