const express = require("express");
const app = express();
const port = 8000;

app.use("/", require("./src/routes/root"))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);