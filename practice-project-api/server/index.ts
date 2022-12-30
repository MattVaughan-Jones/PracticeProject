//requires
const express = require("express");

const calculate = require('./../routes/calculate.ts');
const PORT = process.env.PORT || 3001;
const app = express();

//use the /calculate.ts file to handle endpoints starting with /calculate
app.use('/calculate', calculate);

app.get('/', (req, res) => {
    res.send('<h1>first middleware: Hello world!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
