const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Hello, Server!",
    uptime: process.uptime(),
  });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Hello, Server listening on http://localhost:${port}`);
  });
}
