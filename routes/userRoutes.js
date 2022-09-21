const User = require('../models/user');
const express = require('express');
const router = express.Router();

// Use middleware to set the default Content - Type
router.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

router.post('/add-user', (req, res) => {
    const user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        dob: new Date(req.body.dob).getTime() + 86400000,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,

    });

    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

router.put('/update-user/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id,
        {
            fName: req.body.fName,
            lName: req.body.lName,
            dob: new Date(req.body.dob).getTime() + 86400000,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            accountType: req.body.accountType,
        },
        { new: true })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });

});

router.delete('/delete-user/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

router.get('/all-users', (req, res) => {
    User.find()
        .then((result) => {
            res.send(JSON.stringify(result, null, 10) + "\n")
        })
        .catch((err) => {
            console.log(err)
        });
});

router.get('/all-users/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

module.exports = router;