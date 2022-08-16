
const express = require('express')
const app = express()
const parkings = require('./parkings.json')


const database = require('./database')
//connection a mongodb
database.connectDB()

