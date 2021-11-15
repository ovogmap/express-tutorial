"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_router_1 = require("./cats/cats.router");
var port = 8000;
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRouter = function () {
        this.app.use(cats_router_1.default);
    };
    Server.prototype.setmiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log('middleware', req.rawHeaders[1]);
            next();
        });
        this.app.use(express.json());
        this.app.use(function (req, res, next) {
            console.log('middleware', req.rawHeaders[1]);
            res.status(400).send({ error: '404 not found error' });
        });
    };
    Server.prototype.listen = function () {
        this.setRouter();
        this.setmiddleware();
        this.app.listen(port, function () {
            console.log('...start server');
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map