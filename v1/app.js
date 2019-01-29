var express = require("express");
var app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/campgrounds", function(req, res)
{
    var camps = [
        {name: "Camp1", image = "https://goo.gl/images/KfqKKR"}
    ]
    res.render("campgrounds");
});

app.get("/", function(req, res)
{
    res.render("landing");
});

app.listen(port, process.env.IP, function()
{
    console.log("app connected, YelpCamp server started");
});