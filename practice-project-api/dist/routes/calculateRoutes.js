"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoute = void 0;
const express_1 = require("express");
exports.calculateRoute = (0, express_1.Router)();
exports.calculateRoute.use(express.json());
exports.calculateRoute.get("/calculate", (req, res, next) => {
    res.send("this is the /calculate route");
});
exports.calculateRoute.post("/calculate", (req, res, next) => {
    ;
    // const input: Calculate = {
    //   firstNumber: req.body.firstNumber,
    //   secondNumber: req.body.firstNumber,
    //   operation: req.body.operation,
    // };
    // let calculate = (firstNumber: number, operation: calculatorOperation, secondNumber: number): number => {
    //   switch (operation) {
    //     case '*': return firstNumber * secondNumber;
    //     case '/': return firstNumber / secondNumber;
    //     case '+': return firstNumber + secondNumber;
    //     case '-': return firstNumber - secondNumber;
    //   }
    // };
    // const output: Number = calculate(input.firstNumber, input.operation, input.secondNumber);
    if (req.body) {
        res.send(201);
    }
    else {
        res.send(200);
    }
});
