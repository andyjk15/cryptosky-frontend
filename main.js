const {app, BrowserWindow} = require('electron')
const utility_funcs = require('./app/linkers/utility_funcs');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1600, height: 1000})

  mainWindow.loadFile('app/sentiment.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', function() {

  //Start tweet collector
  try {
    let process = require('child_process').spawn('python', ['../cryptosky-backend/cryptosky-backend/data_collector/twitter/tweet_collector.py']); //../cryptosky_backend/data_collector/twitter/tweet_collector.py
    
    //utility_funcs.sendToConsole("Process started on - ", process.pid);

    process.stdout.on('data', function(data){
      //console.log(data.toString('utf8'));
      utility_funcs.sendToConsole("Data: " + data.toString('utf8'));

      //Get element IDs and regex the start of the logs for 'Console:' etc and filter to relevent elements
      let split = data.toString('utf8').split(":");
      switch(split[0]) {
        case 'Console':
          utility_funcs.sendToConsole("Tweet Collector: " + split[1]);
          break;
        case 'Uncleaned Tweet':
          //utility_funcs.sendToUncleaned("Tweet Collector: ", split[1]);
          break;
        case 'Cleaned Tweet':
          //utility_funcs.sendToCleaned("Tweet Collector: ", split[1]);
          break;

        default:
          break;
      }
    });
  } catch (tweet_error) {
    console.log("Error: %s", tweet_error);
    process.exit();
  }

  //Start sentiment process
  /*try {
    let process = require('child_process').spawn('python', ['../cryptosky_backend/analysis_engine/sentiment_analysis.py']);
    
    utility_funcs.sendToConsole("Process started on - ", process.pid);

    process.stdout.on('data', function(data){
      console.log(data.toString('utf8'));
      utility_funcs.sendToConsole("Data: ", data.toString('utf8'));

      //Get element IDs and regex the start of the logs for 'Console:' etc and filter to relevent elements
      let split = data.toString('utf8').split(":");
      switch(split[0]) {
        case 'Console':
          break;
        case 'Vadar':
          break;
        case 'TextBlob':
         break;

        default:
          break;
      }
    });
  } catch (sentiment_error) {
    console.log("Error: %s", sentiment_error);
    process.exit();
  }*/

  //Start price process
  /*try {
    let process = require('child_process').spawn('python', ['../cryptosky_backend/data_collector/prices/price_collector.py']);
    
    utility_funcs.sendToConsole("Process started on - ", process.pid);

    process.stdout.on('data', function(data){
      //console.log(data.toString('utf8'));
      utility_funcs.sendToConsole("Data: ", data.toString('utf8'));

      //Get element IDs and regex the start of the logs for 'Console:' etc and filter to relevent elements
      let split = data.toString('utf8').split(":");
      switch(split[0]) {
        case 'Console':
          break;
        case 'Vadar':
          break;
        case 'TextBlob':
         break;

        default:
          break;
      }
    });
  } catch (price_error) {
    console.log("Error: %s", price_error);
    process.exit();
  }*/

  createWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  //if (process.platform !== 'darwin') {
    app.quit()
  //}
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.