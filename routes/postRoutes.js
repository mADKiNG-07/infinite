const Post = require('../models/post');
const express = require('express');
const { time } = require('console');
const router = express.Router();

router.post('/add-post', (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        imgUrl: req.body.imgUrl,
        timeFrame: req.body.timeFrame
    });

    post.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

// router.put('/update-blog/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findByIdAndUpdate(id, 
//         { 
//             title: req.body.title,
//             snippet: req.body.snippet,
//             body: req.body.body },
//             {new: true})
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });

// });

router.delete('/delete-post/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

router.get('/all-posts', (req, res) => {
    Post.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

router.get('/all-post/:id', (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});



module.exports = router;