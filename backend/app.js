const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
