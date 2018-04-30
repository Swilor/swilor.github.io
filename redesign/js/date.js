var d = new Date(); //"=" assign opreator

  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


 var status = ["Open", "Closed"];




var hour = d.getHours();

//change default 24 hour time to 12 hour time
//   if (hour === 0){
//        hour = 12;
//     }else if (hour >= 13){
//        hour = hour - 12;
//     }else if (hour >= 1 && hour <= 9 ) {
//         hour = "0" + hour;
// }
// console.log(hour);


var n = day[d.getDay()];
var min = d.getMinutes();

// judge the status
var s = 1;

if (n === day[0]){
  var s = 1;
}
  else if(hour>=12 && hours <=15){
      var s = 0;
    }
  else if(hour>=17 && hours <20){
      var s = 0;
    }
  else if(hour=11 && min>=30 && min<=59 ){
      var s = 0;
    }
  else if(hour=16 && min>=30 && min<=59){
      var s = 0;
    }
  else if(hour=20 && min>=30 && min<=59){
      var s = 0;
    }


document.getElementById("today").innerHTML = "Hours" + ":" + "" + status[s];
//document.getElementById("time2").innerHTML = hour + ":" + min +" "+ amPm;
