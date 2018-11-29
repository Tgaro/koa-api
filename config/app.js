const koa = require('koa')
const koaRouter = require('koa-router')
const bodyParser = require('koa-parser')
const mongoose = require('mongoose')
const consign = require('consign')
const app = new koa()
const router = new koaRouter()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/koa-apiDB', { useNewUrlParser: true })

app.use(bodyParser())

consign()
	.include('./app/controllers')
	.then('./app/models')
	.then('./app/routes')
	.into(router)

app.use(router.routes()).use(router.allowedMethods())

module.exports = app