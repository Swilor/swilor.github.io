
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
  measurement.innerHTML = fromTop + "px";

  if(fromTop>0 && fromTop<400){
  jumpX=fromTop*0.92;
  jump.style.right=200+jumpX+"px";
  }
  if(fromTop>400 && fromTop<800){
    jumpY=fromTop*0.8-320;
    jump.style.top=700+jumpY+"px";
  }

  if(fromTop>450){
    dig1.style.top=fromTop-800+"px";
  }

  if(fromTop>700 && fromTop<=1200){
    textbox1.style.left=fromTop-1000+"px";
  }

  if(fromTop>1400 && fromTop<=1800){
    textbox1.style.left=(1500-fromTop)*2+"px";
  }

  if(fromTop>1800){
    dig2.style.top=fromTop-2302+"px";
  }
  if(fromTop>1900 && fromTop<=2400){
    textbox2.style.right=fromTop-2200+"px";
  }
  if(fromTop>2600 && fromTop<=2900){
    textbox2.style.right=(2700-fromTop)*2+"px";
  }
  if(fromTop>3600 && fromTop<=4200){
    textbox3.style.left=fromTop-4000+"px";
  }
  if(fromTop>4400 && fromTop<=4700){
    textbox3.style.left=(4500-fromTop)*2+"px";
  }
  if(fromTop>5200 && fromTop<=5800){
    textbox4.style.right=fromTop-5600+"px";
  }
  if(fromTop>6000 && fromTop<=6300){
    textbox4.style.right=(6100-fromTop)*2+"px";
  }
}
