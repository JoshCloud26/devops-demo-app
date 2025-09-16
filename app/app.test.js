const request = require("supertest");
const app = require("./server"); // export the app from server.js

describe("GET /", () => {
  it("should return Hello, DevOps World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello, DevOps World!");
  });
});
