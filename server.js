const express = require("express");
const config = require("./config");
const app = express();
const port = config.PORT

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);