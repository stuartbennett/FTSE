/* Schema for the stock summary data */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
symbol: String,
name: String,
market: String,
performance: {
	1week: String,
	1month: String,
	3months: String,
	6months: String,
	1year: String
},
modified: Date,
});

// Create model from schema
var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;