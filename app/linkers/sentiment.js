let {PythonShell} = require('python-shell');

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

function startSentimentCollector() {

  PythonShell.run('my_script.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });

  //var python = require('child_process').spawn('python', ['./hello.py']);
  //python.stdout.on('data',function(data){
  //console.log("data: ",data.toString('utf8'));
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