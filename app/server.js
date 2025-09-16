const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, DevOps World!");
});

if (require.main === module) {
app.listen(3000, () => {
  console.log("App listening on 3000");
});
}

module.exports = app; // export the app for testing