const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

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
require('./startup/prod')(app);
