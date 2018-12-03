const koa = require('koa')
const session = require('koa-session2')
const bodyParser = require('koa-parser')
const mongoose = require('mongoose')
const router = require('./routes/index')

const app = new koa()

app.use(bodyParser())

app.keys = ['koa-api-testing'];
app.use(session(app))

app.use(router())

module.exports = app