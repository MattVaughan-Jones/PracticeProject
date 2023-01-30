"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoute = void 0;
const express_1 = require("express");
exports.calculateRoute = (0, express_1.Router)();
var CalculatorOperation;
(function (CalculatorOperation) {
    CalculatorOperation["Multiply"] = "*";
    CalculatorOperation["Divide"] = "/";
    CalculatorOperation["Add"] = "+";
    CalculatorOperation["Subtract"] = "-";
})(CalculatorOperation || (CalculatorOperation = {}));
exports.calculateRoute.post("/calculate", (req, res, next) => {
    const firstValue = req.body.firstValue;
    const secondValue = req.body.secondValue;
    const operation = req.body.operation;
    let output;
    switch (operation) {
        case CalculatorOperation.Multiply: {
            output = { result: firstValue * secondValue };
            break;
        }
        case CalculatorOperation.Divide: {
            output = { result: firstValue / secondValue };
            break;
        }
        case CalculatorOperation.Add: {
            output = { result: firstValue + secondValue };
            break;
        }
        case CalculatorOperation.Subtract: {
            output = { result: firstValue - secondValue };
            break;
        }
    }
    res.send(output);
});
