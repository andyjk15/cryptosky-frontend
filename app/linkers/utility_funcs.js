function alertShow(id) {
    var x = document.getElementById(id);   //alert-start, alert-error, alert-stopped --- Pass in the id for the alert
    x.className = "show";
    x.style.visibility = "visible";
    setTimeout(function(){ x.className = x.className.replace("show", ""); x.style.visibility = "hidden";}, 3000);
}

//Functions needed by other files - to-be exported

module.exports = {
    sendToConsole: function(message) {
        console.log(message)
    }
}