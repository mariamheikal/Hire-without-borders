
const express = require('express')
const mongoose = require('mongoose')

// DB Config
const db = require('./config/keys').mongoURI

//Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

const app = express()
app.use(express.json())
const users =require('./routes/api/user');
app.use('/users',users);
app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server on ${port}`))
