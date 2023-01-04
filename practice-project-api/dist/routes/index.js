"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const calculateRoutes_1 = require("./calculateRoutes");
exports.routes = (0, express_1.Router)();
exports.routes.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
exports.routes.use(calculateRoutes_1.calculateRoute);
