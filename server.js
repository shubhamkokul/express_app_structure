const express = require("express")
const app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get("/", (req, res) => {
    res.render('views/index')
})

app.listen(3000)