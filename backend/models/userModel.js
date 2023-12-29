const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String},
  acctNumber: { type: String},
  username: { type: String},
  password: { type: String},
  role: [{ type: String}],
  blacklist: { type: Boolean },
  status: { type: String }
});


module.exports = model('employees', userSchema);