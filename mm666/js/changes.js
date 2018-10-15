


  var d = new Date(); //"=" assign opreator

  console.log(d);



  var day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];



console.log("day number: " + d.getDay());



console.log(day[d.getDay()]);



console.log("month number: " + d.getMonth());



var month = []; // modern way of writing: var month =new Array();

month[0] = "一月";

month[1] = "二月";

month[2] = "三月";

month[3] = "四月";

month[4] = "五月";

month[5] = "六月";

month[6] = "七月";

month[7] = "八月";

month[8] = "九月";

month[9] = "十月";

month[10] = "十一月";

month[11] = "十二月";





console.log(month[d.getMonth()]);



console.log("hour: " + d.getHours());



console.log("date: " + d.getDate());



console.log(d.getFullYear());



console.log(d.getMonth());



console.log(d.toLocaleDateString());



//change default 24 hour time to 12 hour time

var hour = (d.getHours());



console.log(hour);



var amPm = " ";



if (hour >= 11){

  amPm = " pm";

}else {

  amPm = " am";

}

console.log(amPm);



  if (hour === 0){

       hour = 12;

    }else if (hour >= 13){

       hour = hour - 12;

    }else if (hour >= 1 && hour <= 9 ) {

        hour = "0" + hour;

}

console.log(hour);





var n = day[d.getDay()];

var m = month[d.getMonth()];

var min = d.getMinutes();

var dateNum = d.getDate();

console.log(dateNum);



if ( min >= 0 && min <= 9){

  min = "0" + min;

} else {

  min = min;

}

console.log (min);

//http://www.w3schools.com/jsref/met_document_getelementbyid.asp



document.getElementById("today").innerHTML =

  n + ", " + dateNum +" " + m + " " + d.getFullYear()+" "+ hour + ":" + min +" "+ amPm;;



//document.getElementById("time2").innerHTML = hour + ":" + min +" "+ amPm;
