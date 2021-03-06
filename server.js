const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(_, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(5000, function() {
  console.log("App is running on port 5000!");
});
