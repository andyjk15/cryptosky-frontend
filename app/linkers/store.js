const fs = require('fs');
const app_root = require('app-root-path');

function getPreferences() {

}

function setPreference() {

}

function checkThemeState(event) {
    let target = event.target;

    if (target.getAttribute("aria-pressed") === "true") {
        console.log("Light Theme to be applied")
        
    } else {
        console.log("Dark Theme to be applied")
    }
    //let element = document.getElementById('audio');
}