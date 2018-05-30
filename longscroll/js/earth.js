
var jumpX=document.getElementById('jump');
var jumpY=document.getElementById('jump');
var depth;
var i=0;

// for(i==0,i<=10,i=i+1){
//   if(i>=0 && i<=5){
//     img_earth.style.top=i*10+"px";
//   }
//   if(i>5 && i<10){
//     img_earth.style.top=i*10-50+"px";
//   }
//   if(i===10){
//     img_earth.style.top=0+"px";
//     i=0;
//   }
// }

window.onscroll = function(){
  var fromTop = window.pageYOffset;
  depth=fromTop*0.4
  measurement.innerHTML = fromTop + "px" +" " +depth + "km";

  if(fromTop>0 && fromTop<400){
  jumpX=fromTop*0.8;
  jump.style.right=200+jumpX+"px";
  }
  if(fromTop>400 && fromTop<800){
    jumpY=fromTop*0.8-320;
    jump.style.top=700+jumpY+"px";
  }

  if(fromTop>450){
    dig1.style.top=fromTop-700+"px";
  }

  if(fromTop>800 && fromTop<=1200){
    textbox1.style.left=fromTop-1000+"px";
  }

  if(fromTop>1400 && fromTop<=1800){
    textbox1.style.left=(1500-fromTop)*2+"px";
  }
}
