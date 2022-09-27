const config = require('config');
const winston = require('winston');
const express = require('express');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const plans = require('./routes/plansRoutes');
const subscriptions = require('./routes/subscriptionRoutes');
const auth = require('./routes/auth');
const app = express();

require('./startup/prod')(app);
require('./startup/db')();


if (!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined!");
    process.exit(1);
}

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

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/plans', plans);
app.use('/subscriptions', subscriptions);
app.use('/auth', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
