"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cars_service_1 = require("./cars.service");
var router = express_1.Router();
router.get('/cats', cars_service_1.readAllcat);
router.get('/cats/:id', cars_service_1.readOnecat);
router.post('/cat', cars_service_1.createCat);
router.put('/cats/:id', cars_service_1.updateCat);
router.delete('cats/:id', cars_service_1.updateCat);
exports.default = router;
//# sourceMappingURL=cats.router.js.map