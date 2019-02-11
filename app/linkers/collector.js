let app_root = require('app-root-path');
let utility_funcs = require('./utility_funcs');

function startCollectors() {
  alert("Boop");
  startTweetCollector();
}

function startTweetCollector() {

  try {
    let process = require('child_process').spawn('python', ['../../tweet_collector.py']);
    //utility_funcs.sendToConsole("Process started on - ", process.pid);
    process.stdout.on('data', function(data){
      console.log(data.toString('utf8'));
      //utility_funcs.sendToConsole("Data: ", data.toString('utf8'));

      //Get element IDs and regex the start of the logs for 'Console:' etc and filter to relevent elements
      let split = data.toString('utf8').split(":");
      switch(split[0]) {
        case 'Console':
          break;
        case 'Uncleaned Tweet':
          break;
        case 'Cleaned Tweet':
         break;

        default:
          break;
      }
    });
  } catch (e) {
    console.log("Error: %s", e);
    process.exit();
  }
  
}

function startSentimentCollector() {
  let process = require('child_process').spawn('python3', [app_root + '../cryptosky-backend/analysis_engine/sentiment_analysis.py']);
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