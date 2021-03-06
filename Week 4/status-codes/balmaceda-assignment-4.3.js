/*
============================================
; Title:  Assignment 4.3
; Author: Griselda Balmaceda
; Date:   15 March 2019
; Description: Status Code
;===========================================
*/
//require needed modules
var express = require("express");
var http = require("http");
var app = express();
app.get("/not-found", function (request, response) {

    //making the statuses and their response messages
    response.status(404);
    response.json({
        error: "Page not found :("
    });

});

app.get("/ok", function (request, response) {
    response.status(200);
    response.json({
        message: "Page loaded :)"
    })
});

app.get("/not-implemented", function (request, response) {
    response.status(501);
    response.json({
        message: "Page not implemented"
    })
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080")
});