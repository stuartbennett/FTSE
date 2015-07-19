/* Schema for the daily stock summary data */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockDailySchema = new Schema({
symbol: String,
prices: {
	open: String,
	close: String,
	high: String,
	low: String,
	ticks: [
		{
			timestamp: Date,
			price: String
		}
	]
},
volume: String,
performance: {
	1week: String,
	1month: String,
	3months: String,
	6months: String,
	1year: String
},
date: Date,
});

// Create model from schema
var StockDaily = mongoose.model('StockDaily', stockDailySchema);

module.exports = StockDaily;