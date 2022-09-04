const express = require("express");
const config = require("./config");
const cors = require("cors")
const port = config.PORT;

const app = express();

app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);
app.use(express.json())

app.use("/", require("./src/routes/routes"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);