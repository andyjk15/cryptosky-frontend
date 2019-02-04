let {PythonShell} = require('python-shell');
let app_root = require('app-root-path');

let options = {
  mode: 'text',
  pythonPath: 'path/to/python',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'path/to/my/scripts',
  args: ['value1', 'value2', 'value3']
};

function get_sentiment() {
    alert("BOOP")
}

function startTweetCollector() {

  //PythonShell.run('../cryptosky-backend/cryptosky-backend/data_collector/twitter/tweet_collector.py', options, function (err, results) {  //../cryptosky-backend/data_collector/twitter/tweet_collector.py
  //  if (err) throw err;
    // results is an array consisting of messages collected during execution
  //  console.log('results: %j', results);
  //});

  let process = require('child_process').spawn('python', [app_root + '../cryptosky-backend/cryptosky-backend/data_collector/twitter/tweet_collector']);
  process.stdout.on('data', function(data){
    console.log("data: ", data.toString('utf8'));
    //Get element IDs and regex the start of the logs for 'Console:' etc and filter to relevent elements
    let split = data.toString('utf8').split(":");
    switch(split[0]) {
      case 'Console':
        break;
      case '':

      default:
        break;
    }

  });
}

function startSentimentCollector() {
  let process = require('child_process').spawn('python3', [app_root + '../cryptosky-backend/cryptosky-backend/analysis_engine/sentiment_analysis.py']);
  process.stdout.on('data', function(data) {
    console.log("Sentiment: ", data.toString('utf8'));
  });
}

function startPriceCollector() {
  
}

function stopSentimentCollector() {

}
  //var python = require("python-shell")
  //  var path = require("path")
  
  //  var city = document.getElementById("city").value
  //  document.getElementById("city").value = "";
  
  //  var options = {
  //    scriptPath : path.join(__dirname, '/../engine/'),
  //    args : [city]
  //  }
  
  //  var weather = new python('weather_engine.py', options);
  
  //  weather.on('message', function(message) {
  //    swal(message);
  //  })