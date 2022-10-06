const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4545;

//using public folder via static middleware and public
//because public has style.css file here css file included.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyparser middleware

// console.log(__dirname);
        app.get('/', (req, res) => {
          res.sendFile(__dirname + "/index.html");
        });

        
        app.post('/index.html', (req, res) => {

                // console.log(req.body);
                var no1 = parseFloat(req.body.num1);
                var no2 = parseFloat(req.body.num2);
                var result = no1 / (no2 * no2);
                res.send(`<h1>Your BMI is: ${result}</h1>`);


        });


        app.listen(port, () => {
                console.log(`you are listening at port: ${port}`);
        });