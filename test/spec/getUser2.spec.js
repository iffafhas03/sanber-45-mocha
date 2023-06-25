const request = require("supertest")("https://petstore.swagger.io");
//Import chai
const expect = require("chai").expect;

//const req = require("supertest")("baseURL")

describe("Get User List Page 2", () => {
  it("returns all user in page 2", async function () {
    const response = await request.get("/v2/user/2"); // page=2 adalah query params
    //console.log(JSON.stringify(response.body));
    console.log(await response);

    //Assert
    expect(await response.status).to.equal(200);
  });
});
