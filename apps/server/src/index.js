"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Prabhat lodu');
});
app.listen(8080);
