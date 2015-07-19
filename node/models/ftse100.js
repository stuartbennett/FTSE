/* Schema for the FTSE100 market summary data */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ftse100Schema = new Schema({
name: String,

});

// Create model from schema
var Ftse100 = mongoose.model('Ftse100', ftse100Schema);

module.exports = Ftse100;