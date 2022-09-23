const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const auth = require('./routes/auth');
const app = express();

app.use(express.json());
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const port = process.env.PORT || 3000;

// connect to mongodb
const dbURI = 'mongodb+srv://aynstein:aynstein123@nodetuts.52zrahp.mongodb.net/infinityTrendz?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, () => {
        console.log(`Listening on port ${port}...`)
        console.log(`connected to db...`)
    }))
    .catch((err) => console.log(err))

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/auth', auth);
require('./startup/prod')(app);

// hello world