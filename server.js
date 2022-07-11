const express = require("express");
const config = require("./config");
const cors = require("cors")
const port = config.PORT

const app = express();

app.use(express.json())

app.use("/", routes);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);