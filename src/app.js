const koa = require('koa')
const session = require('koa-session2')
const bodyParser = require('koa-parser')
const mongoose = require('mongoose')
const router = require('./routes/index')
const db = require('./db/dbConnection')
const url = 'mongodb://localhost/koa-apiDB'

const app = new koa()

db.connect(url)

app.keys = ['koa-api-testing']
app.use(bodyParser())
app.use(session(app))
app.use(router())

module.exports = app