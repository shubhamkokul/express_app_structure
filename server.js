const express = require("express");
const config = require("./src/configs/config");
const app = express();

app.use("/", require("./src/routes/root"))

app.listen(config.PORT, () =>
    console.log(`App listening at http://localhost:${config.PORT}`)
);