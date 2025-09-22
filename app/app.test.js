const request = require("supertest");
const app = require("./server"); // export the app from server.js

describe("GET /", () => {
  it("should return This is Hellen's completed DevOps app for my demo presentation", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("This is Hellen's completed simple DevOps app for my demo presentation");
  });
});
