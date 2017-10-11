window.setInterval(function(){
var time = new Date();
var date = time.toDateString();
var amOrPm = "";  
var hours = time.getHours();
  if(hours>12){
    hours -= 12;
    amOrPm = " P.M.";
  }else{
    amOrPm = " A.M.";
  }
var mins = time.getMinutes();
var secs = time.getSeconds();


  document.getElementById("time").innerHTML = hours + ":" + mins + ":" + secs + amOrPm;
  document.getElementById("date").innerHTML = date;
}, 1000);

