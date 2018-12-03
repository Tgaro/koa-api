const userModel = require('../models/user').model

module.exports = validate = async ctx => {

  let pass
  await userModel.findOne(ctx.request.body, {'pass': 1}, (err, result) => {
    
    err
    ? pass = `Can't complete query due error: ${err}`
    : pass = result.pass
  })

  if (ctx.request.body.pass === pass) {
    ctx.status = 200
    ctx.session.status = 'logged'
    ctx.redirect('/users')
  } else {
    ctx.status = 401;
    ctx.redirect('/login')
  }
  return ctx;

}