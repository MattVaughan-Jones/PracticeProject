"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoute = void 0;
const express_1 = require("express");
exports.calculateRoute = (0, express_1.Router)();
exports.calculateRoute.get("/calculate", (req, res, next) => {
    res.send("this is the /calculate route");
});
exports.calculateRoute.post("/calculate", (req, res, next) => {
    ;
    const input = {
        firstNumber: req.body.firstNumber,
        secondNumber: req.body.firstNumber,
        operation: req.body.operation,
    };
    let calculate = (firstNumber, operation, secondNumber) => {
        switch (operation) {
            case '*': return firstNumber * secondNumber;
            case '/': return firstNumber / secondNumber;
            case '+': return firstNumber + secondNumber;
            case '-': return firstNumber - secondNumber;
        }
    };
    const output = calculate(input.firstNumber, input.operation, input.secondNumber);
    console.log(output);
    res.end(JSON.stringify(output));
});
