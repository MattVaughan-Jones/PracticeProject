const express = require("express");
const router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.send('this is the /calculate route');
});

export { router };
