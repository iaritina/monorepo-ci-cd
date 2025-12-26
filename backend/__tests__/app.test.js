const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("responds with JSON status ok", async () => {
    const res = await request(app).get("/").expect(200);
    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("uptime");
  });
});
