const https = require('https');
const express = require('express');
const mAuth = require('../middleware/mAuth');
const mAdmin = require('../middleware/mAdmin');
const router = express.Router();
const Plan = require('./../models/plan');
require('dotenv').config();

// params for monthly subscription
const m_params = JSON.stringify({
    "name": "Monthly Infinity",
    "interval": "monthly",
    "invoice_limit": 1,
    "amount": 40000
});

// params for bi-annually subscription
const bi_params = JSON.stringify({
    "name": "Bi-Annual Infinity",
    "interval": "biannually",
    "invoice_limit": 6,
    "amount": 40000
});

// params for annually subscription
const a_params = JSON.stringify({
    "name": "Annual Infinity",
    "interval": "annually",
    "invoice_limit": 12,
    "amount": 40000
});

const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/plan',
    method: 'POST',
    headers: {
        Authorization: process.env.SECRET_KEY,
        'Content-Type': 'application/json'
    }
}

router.post('/add-monthly-plan', [mAdmin, mAuth], (req, _res) => {
    req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk;
            const plan = new Plan({ plan: JSON.parse(data) });
            plan.save() // iAmNotInTheSchema is now saved to the db!!
        });

        res.on('end', () => {
            _res.send(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(m_params)
    req.end()
});

router.post('/add-biAnnual-plan', [mAdmin, mAuth], (req, _res) => {
    req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk;
            const plan = new Plan({ plan: JSON.parse(data) });
            plan.save()
        });

        res.on('end', () => {
            _res.send(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(bi_params)
    req.end()
});

router.post('/add-annual-plan', [mAdmin, mAuth], (req, _res) => {
    req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk;
            const plan = new Plan({ plan: JSON.parse(data) });
            plan.save()
        });

        res.on('end', () => {
            _res.send(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(a_params)
    req.end()
});


module.exports = router;
