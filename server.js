'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

var sub = require('./subtract');

const app = express();
app.get('/', (req,res) => {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*')

    var output = {
        'error': false,
        'string': '',
        'answer': 0
    };

    var x = req.query.x;
    var y = req.query.y;

    // ensure x and y params exist
    if (!x || x == "") {
        output.error = true;
        output.string = "Param x is missing";
        res.end(JSON.stringify(output));
        return;
    }
    if (!y || y == "") {
        output.error = true;
        output.string = "Param y is missing";
        res.end(JSON.stringify(output));
        return;
    }

    // ensure x and y are integers
    if (isNaN(x)) {
        output.error = true;
        output.string = "Param x is not an integer";
        res.end(JSON.stringify(output));
        return;
    }
    if (isNaN(y)) {
        output.error = true;
        output.string = "Param y is not an integer";
        res.end(JSON.stringify(output));
        return;
    }

    var answer = sub.subtract(x,y);

    output.string = x + '-' + y + '=' + answer;
    output.answer = answer;

    res.end(JSON.stringify(output));
    return;
});

app.listen(PORT, HOST);

module.exports = app