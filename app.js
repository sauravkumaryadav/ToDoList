const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
const items = ["Wake up", "Take Bath", "Do Breakfast"];
const workItems = [];
app.get("/", function (req, res) {

    const day = date.getDate();

    res.render('lists', {
        day: day,
        items: items
    });

});

app.post("/", function (req, res) {
    if (req.body.list === "Work-List") {
        workItems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render('lists', {
        day: "Work-List",
        items: workItems
    });
});

app.get("/about", function (req, res) {
    res.render('about');
})

app.listen(5000, function () {
    console.log("server is listening on port 5000");
});