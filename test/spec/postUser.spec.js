//CreateUser

const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

const getUser = require("./getUser.spec");

//const respGetUser = getUser.getUserPages;

describe("Post /users", function () {
  it("create new user", async function () {
    const response = await request.post("/users").send({
      name: "morpheus",
      job: "leader",
    });
    expect(await response.statusCode).to.eql(201);
    expect(await response.body.name).to.eql("morpheus");
    expect(await response.body.job).to.eql("leader");

    const resp2 = await getUser.getUserPages(2);
  });
});
