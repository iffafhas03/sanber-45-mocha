const request = require("supertest")("https://reqres.in/api");

const expect = require("chai").expect;

//const req = require("supertest")("baseURL")

async function getUserPages(page) {
  const response = await request.get(`/users?page=${page}`); // page=2 adalah query params
  return response;
}

describe("Get User List Page 2", () => {
  it("returns all user in page 2", async function () {
    const query1 = "2";
    const response = await getUserPages(query1);

    //const response = await request.get(`/users?page=${query1}`); // page=2 adalah query params
    //const response1 = await request.get("/users?page=" + query1); // page=2 adalah query params

    //console.log(JSON.stringify(response.body));
    //console.log(await response.body);

    //Assert
    expect(await response.status).to.eql(200);
    expect(await response.body.data.length).to.eql(6);
  });

  it("returns all user in page 3", async function () {
    const query1 = "3";
    const response = await getUserPages(query1);
    //Assert
    expect(await response.status).to.eql(200);
    expect(await response.body.data.length).to.eql(0);
  });
});

exports.getUserPages = { getUserPages };
