const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient =require('mongodb').MongoClient
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");

// let db,
//     dbConnectionString = process.env.DB_STRING,
//     dbName = 'field-guide',
//     collection

// MongoClient.connect(dbConnectionString)
//     .then(client => {
//         console.log('Connected to Database')
//         db = client.db(dbName)
//         collection = db.collection('native-flowers')
//     })

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    db.collection('native-flowers').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.get('/api/:plantName', (request, response) => {
    const plantName = request.params.plantName.toLowerCase()
    console.log(plantName)
    collection.find({name: plantName}).toArray()
        .then(results => {
            console.log(results)
            response.json(results[0])
        })
        .catch(error => console.error(error))
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port`)
})