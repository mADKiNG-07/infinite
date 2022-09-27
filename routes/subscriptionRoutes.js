const https = require('https');
const express = require('express');
const mAuth = require('../middleware/mAuth');
const mAdmin = require('../middleware/mAdmin');
const router = express.Router();
const Subscription = require('./../models/subscription');
require('dotenv').config();


const params = JSON.stringify({
    "customer": "CUS_yfodeplkefmt33g",
    "plan": "PLN_ef9ofwicty67ttr",
})

const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/subscription',
    method: 'POST',
    headers: {
        Authorization: process.env.SECRET_KEY,
        'Content-Type': 'application/json'
    }
}

router.post('/addSub', (req, res) => {

    req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            console.log(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(params)
    req.end()

});







module.exports = router;
