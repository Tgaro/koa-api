exports.contentHeader = (res) => {

  if (!(res.header['content-type'] == 'application/json; charset=utf-8')) 
  	throw new Error("invalid format")
  if (!(parseInt(res.header['content-length']) > 0 )) 
  	throw new Error("nothing has returned");
}
