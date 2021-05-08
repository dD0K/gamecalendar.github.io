var newElement = document.createElement("p");
// newElement.innerHTML = "CONTENTS";
// document.getElementById("Title").appendChild(newElement);
// newElement.style.textAlign = "center";
$("#Title").css('text-align','center');
$("#Title").append(newElement);
var clientWidth = document.documentElement.clientWidth;
console.log(screen.width + " " + screen.height);
//$('#Body').css("font-size", "300%"); // Use this when doing the size thing
var Name = "Not known";
if (navigator.appVersion.indexOf("Win") != -1) Name = 
  "Windows OS";
if (navigator.appVersion.indexOf("Mac") != -1) Name = 
  "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) Name = 
  "UNIX OS";
if (navigator.appVersion.indexOf("Linux") != -1) Name = 
  "Linux OS";