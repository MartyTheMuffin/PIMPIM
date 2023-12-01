const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pumpkinData = require('./data/pumpkin.json');
const broccoliData = require('./data/broccoli.json');
const nodejsData = require('./data/nodejs.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length);
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({randomDrinkRecipe});
});

app.get('/pumpkin', (req, res) => {
    res.status(200).json({message: "Pumpkin? Pumpkin!"});
});

app.get('/rke143', (req, res) => {
    res.status(200).json({message: "RKE143"});
});

app.post('/pumpkin', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'admin' || req.body.password !== "1234") {
        res.status(200).json({broccoliData});
    } else {
        res.status(200).json({pumpkinData});
    }
    res.status(200).json({message: "I WANT TO ORDER DA PIMPIMPIE!"});
});

app.post('/rke143', (req, res) => {
    console.log(req.body);

    if(req.body.nimi !== 'rke' || req.body.kood !== "143") {
        res.status(200).json({message: "Invalid credentials."});
    } else {
        res.status(200).json({nodejsData});
    }
    res.status(200).json({message: "It's RKE143 my dudes"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});