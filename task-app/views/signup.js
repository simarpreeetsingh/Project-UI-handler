const Joi = require("joi")

const signup = function (req, res) {
  const { error, value } = validator.validate(req.body)
  if (error) {
    console.log(error)
    message = error.details[0].message
    id = message.split(" ")[0]
    locals = { id: id, message: message, values: error._original }
    res.render("signup", locals)
  }
}

const validator = Joi.object().keys({
  username: Joi.string().min(5).max(15).required(),
  sex: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(5).max(20).required(),
  confirm_password: Joi.any().valid(Joi.ref('password')).required().options({}),
  dp: Joi.any()
})

module.exports = signup