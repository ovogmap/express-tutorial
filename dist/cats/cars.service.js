"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updateCat = exports.createCat = exports.readOnecat = exports.readAllcat = void 0;
var cats_models_1 = require("./cats.models");
var readAllcat = function (req, res) {
    try {
        var cats = cats_models_1.Cat;
        res.status(200).send({ success: true, data: cats });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            error: e.message,
        });
    }
};
exports.readAllcat = readAllcat;
var readOnecat = function (req, res) {
    try {
        var id_1 = req.params.id;
        if (!isNaN(parseInt(id_1, 10))) {
            res.status(400).send({
                success: false,
                error: 'id is not string',
                displayErrorMessage: '잘못된 아이디 값입니다.',
            });
        }
        console.log(isNaN(parseInt(id_1, 10)));
        var cat = cats_models_1.Cat.find(function (v) { return v.id === id_1; });
        res.status(200).send({ success: true, data: cat });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            error: e.message,
        });
    }
};
exports.readOnecat = readOnecat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        console.log('data', data);
        cats_models_1.Cat.push(data);
        res.status(200).send({ success: true, data: data });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            error: e.message,
        });
    }
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var id_2 = req.params.id;
        var body_1 = req.body;
        var result_1;
        cats_models_1.Cat.forEach(function (item) {
            if (item.id === id_2) {
                item = body_1;
                result_1 = item;
            }
        });
        res.send({
            success: true,
            data: {
                cat: result_1,
            },
        });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            error: e.massage,
        });
    }
};
exports.updateCat = updateCat;
var deleteCat = function (req, res) {
    try {
        var id_3 = req.params.id;
        var filterCats = cats_models_1.Cat.filter(function (item) { return item.id !== id_3; });
        res.send({
            success: true,
            data: filterCats,
        });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            error: e.massage,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cars.service.js.map