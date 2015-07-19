
// Reference to interval timer for pulling stock data from source
var datasetPullInterval;
	
module.exports = {
	
	start: function(){
		// Kick off recurrence of grabbing stock data
		datasetPullInterval = setInterval(pullData, 10000);
	},

	stop: function(){
		// Stop recurrence of grabbing stock data
		clearInterval(datasetPullInterval);
	}

};

function pullData(){

	// Pull stock data from Yahoo Finance APIs
	console.log('pulling');

}

function saveData(){
	
}