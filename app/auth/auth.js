const jsonwebtoken = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'koaapitest'
const expirationTime = 60

const validate = async (router, ctx) => {

  let pwd
  const userModel = router.app.models.user.model
  await userModel.findOne(ctx.request.body, {'pass': 1}, (err, result) => {
    
    err
    ? pwd = `Can't complete query due error: ${err}`
    : pwd = result.pass
  })

  console.log(pwd)

  if (ctx.request.body.pass === pwd) {
    ctx.status = 200
    ctx.body = {
      token: jsonwebtoken.sign({ exp: Math.floor(Date.now() / 1000) - (60 * expirationTime)}, secret),
      message: "Successfully logged in!"
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    }
  }
  return ctx;
}

module.exports = {validate}