"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var cats_router_1 = require("./cats/cats.router");
exports.app = express();
var port = 8000;
var data = [1, 2, 3, 4];
exports.app.use(express.json());
exports.app.use(cats_router_1.default);
exports.app.use(function (req, res, next) {
    console.log('middleware', req.rawHeaders[1]);
    res.status(400).send({ error: '404 not found error' });
});
exports.app.listen(port, function () {
    console.log('...start server');
});
//# sourceMappingURL=app.js.map