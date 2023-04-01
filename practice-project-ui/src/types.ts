export type CalculationEntry = {
    id: number,
    first_value: number,
    second_value: number,
    operation: string,
    result: number,
    createdAt: Date,
    updatedAt: Date
}

export enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
};

export enum OperationFilter {
    None = "none",
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
};

export type inputValues = {
    firstValue: number,
    secondValue: number
}

export type ErrorItem = {
    location: string,
    msg: string,
    param: string,
    value: string
}

export type Valid = {
    firstValue: boolean,
    secondValue: boolean
}

export type CalculationInput = {
    operation: Operation,
    values: inputValues
}
