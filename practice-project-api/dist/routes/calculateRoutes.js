"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoute = void 0;
const express_1 = require("express");
exports.calculateRoute = (0, express_1.Router)();
exports.calculateRoute.get("/calculate", (req, res, next) => {
    res.send("this is the /calculate route");
});
