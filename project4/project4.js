var weatherDataSF, weatherDataSR, weatherDataNP, weatherDataOL, weatherDataSJ;
var scene = 1;
var bgImg;
var baymap, sfAqiImg, srAqiImg, npAqiImg, olAqiImg, sjAqiImg, titleScreen;
var hr1, hr2, hr3, hr4, hr5;
var aqi1, aqi2, aqi3, aqi4, aqi5;
var inforPoor1, inforPoor2, inforModerate, inforHealthy;
var history, back;
var y1 = 1000;
var y2 = 1000;
var y3 = 1000;
var ySF, yOL, yNP, ySJ, ySR;
var aqi = 0;
var display = false;
var aniR1 = 50,
  aniR2 = 50,
  aniR3 = 50,
  aniR4 = 50,
  aniR5 = 50;
var speed = 1;
var rectWidth = 0;
var rectX = 1160;
var aniX = 0;
var sfAni1 = false;
var pai = 0;
var paiSpeed = 0.1;



function preload() {
  history = loadJSON("history.json");
}

function setup() {
  createCanvas(1224, 936);
  // frameRate(5);
  loadJSON('http://api.airvisual.com/v2/city?city=San%20Francisco&state=California&country=USA&key=47iYnAQsKXbMBNP77', gotData1); //asychronance
  loadJSON('http://api.airvisual.com/v2/city?city=Santa%20Rosa&state=California&country=USA&key=47iYnAQsKXbMBNP77', gotData2);
  loadJSON('http://api.airvisual.com/v2/city?city=Napa&state=California&country=USA&key=47iYnAQsKXbMBNP77', gotData3);
  loadJSON('http://api.airvisual.com/v2/city?city=Oakland&state=California&country=USA&key=47iYnAQsKXbMBNP77', gotData4);
  loadJSON('http://api.airvisual.com/v2/city?city=San%20Jose&state=California&country=USA&key=47iYnAQsKXbMBNP77', gotData5);


  textAlign(CENTER);
  baymap = loadImage("map_0.png");
  sfAqiImg = loadImage("map_2.png");
  srAqiImg = loadImage("map_1.png");
  npAqiImg = loadImage("map_3.png");
  olAqiImg = loadImage("map_4.png");
  sjAqiImg = loadImage("map_5.png");
  newmap = loadImage("map2.png");
  titleScreen = loadImage("titlescreen.png");
  inforPoor1 = loadImage("information1.png");
  inforPoor2 = loadImage("information2.png");
  inforModerate = loadImage("information3.png");
  inforHealthy = loadImage("information4.png");
  back = loadImage("back.png")
  colorMode(HSB, 360, 100, 100);

  ellipseMode(RADIUS);
  bgImg = newmap;

}

function gotData1(data) { //callBack functions
  weatherDataSF = data; // local to global
}

function gotData2(data) { //callBack functions
  weatherDataSR = data; // local to global
}

function gotData3(data) { //callBack functions
  weatherDataNP = data; // local to global
}

function gotData4(data) { //callBack functions
  weatherDataOL = data; // local to global
}

function gotData5(data) { //callBack functions
  weatherDataSJ = data; // local to global
}

function drawGradient(x, y, z, d) {
  var radius = d;
  for (var r = d; r > 0; r--) {
    fill(z, 100, 100, 0.05);
    ellipse(x, y, r, r);
    // arc(x,y,r,r,0,2*PI);
    z = (z + 0.5) % 360;
  }
}

function draw() {
  if (scene == 1) {
    background(255);
    image(titleScreen, 0, 0);
    if (mouseIsPressed) {
      scene = 2;
    }
  }
  // var y1=history.data1.current.pollution.aqius;
  if (scene == 2) {
    background(255);
    fill(248,50,57);
    rect(800,100,400,700);
    image(bgImg, 0, 0);


    if (dist(mouseX, mouseY, 375, 530) < 50 && aniR1 < 75) {
      aniR1 += speed;
    }
    if (dist(mouseX, mouseY, 375, 530) >= 50 && aniR1 > 50) {
      aniR1 -= speed;
    }

    if (dist(mouseX, mouseY, 265, 210) < 50 && aniR2 < 75) {
      aniR2 += speed;
    }
    if (dist(mouseX, mouseY, 265, 210) >= 50 && aniR2 > 50) {
      aniR2 -= speed;
    }
    if (dist(mouseX, mouseY, 410, 295) < 50 && aniR3 < 75) {
      aniR3 += speed;
    }
    if (dist(mouseX, mouseY, 410, 295) >= 50 && aniR3 > 50) {
      aniR3 -= speed;
    }
    if (dist(mouseX, mouseY, 480, 515) < 50 && aniR4 < 75) {
      aniR4 += speed;
    }
    if (dist(mouseX, mouseY, 480, 515) >= 50 && aniR4 > 50) {
      aniR4 -= speed;
    }
    if (dist(mouseX, mouseY, 555, 695) < 50 && aniR5 < 75) {
      aniR5 += speed;
    }
    if (dist(mouseX, mouseY, 555, 695) >= 50 && aniR5 > 50) {
      aniR5 -= speed;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 375, 530) < 50) {
      bgImg = sfAqiImg;
      rectX = 830;
      y1 = 380 - 61;
      y2 = 380 - 93;
      y3 = 380 - ySF;
      aqi = ySF;
      display = true;
      aniX = 3;
      sfAni1 = true;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 265, 210) < 50) {
      bgImg = srAqiImg;
      rectX = 830;
      y1 = 380 - 51;
      y2 = 380 - 63;
      y3 = 380 - ySR;
      aqi = ySR;
      display = true;
      aniX = 3;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 410, 295) < 50) {
      bgImg = npAqiImg;
      rectX = 830;
      y1 = 380 - 27;
      y2 = 380 - 72;
      y3 = 380 - yNP;
      aqi = yNP;
      display = true;
      aniX = 3;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 480, 515) < 50) {
      bgImg = olAqiImg;
      rectX = 830;
      y1 = 380 - 65;
      y2 = 380 - 99;
      y3 = 380 - yOL;
      aqi = yOL;
      display = true;
      aniX = 3;
    }
    if (mouseIsPressed && dist(mouseX, mouseY, 555, 695) < 50) {
      bgImg = sjAqiImg;
      rectX = 830;
      y1 = 380 - 55;
      y2 = 380 - 80;
      y3 = 380 - ySJ;
      aqi = ySJ;
      display = true;
      aniX = 3;
    }

    noStroke();
    if (weatherDataSF) { //weatherData = true when the data has been loaded
      // fill(255);
      // text("temperature",200,250);
      // ellipse(200,300,weatherData.data.current.weather.tp,weatherData.data.current.weather.tp);
      // text("pollution",300,250);
      var h1 = weatherDataSF.data.current.pollution.aqius;
      // var h1=200;
      ySF = weatherDataSF.data.current.pollution.aqius;
      // var h=200
      hr1 = map(h1, 0, 200, 100, 0);
      drawGradient(375, 530, hr1, aniR1);
      if (aniR1 > 74) {
        fill(0);
        textSize(32);
        text((weatherDataSF.data.current.weather.tp * 9 / 5) + 32 + "°F", 375, 540);
      }
      // ellipse(350,550,weatherDataSF.data.current.pollution.aqius,weatherDataSF.data.current.pollution.aqius);
    }

    if (weatherDataSR) {
      var h2 = weatherDataSR.data.current.pollution.aqius;
      ySR = weatherDataSR.data.current.pollution.aqius;
      // var h2=220;
      // ySR=220;
      hr2 = map(h2, 0, 200, 100, 0);
      drawGradient(265, 210, hr2, aniR2);
      if (aniR2 > 74) {
        fill(0);
        textSize(32);
        text((weatherDataSR.data.current.weather.tp * 9 / 5) + 32 + "°F", 265, 220);
      }
    }
    if (weatherDataNP) {
      var h3 = weatherDataNP.data.current.pollution.aqius;
      yNP = weatherDataNP.data.current.pollution.aqius;
      hr3 = map(h3, 0, 200, 100, 0);
      drawGradient(410, 295, hr3, aniR3);
      if (aniR3 > 74) {
        fill(0);
        textSize(32);
        text((weatherDataNP.data.current.weather.tp * 9 / 5) + 32 + "°F", 410, 305);
      }
    }
    if (weatherDataOL) {
      var h4 = weatherDataOL.data.current.pollution.aqius;
      yOL = weatherDataOL.data.current.pollution.aqius;
      hr4 = map(h4, 0, 200, 100, 0);
      drawGradient(480, 515, hr4, aniR4);
      if (aniR4 > 74) {
        fill(0);
        textSize(32);
        text((weatherDataOL.data.current.weather.tp * 9 / 5) + 32 + "°F", 480, 525);
      }
    }
    if (weatherDataSJ) {
      var h5 = weatherDataSJ.data.current.pollution.aqius;
      ySJ = weatherDataSJ.data.current.pollution.aqius;
      hr5 = map(h5, 0, 200, 100, 0);
      drawGradient(555, 695, hr5, aniR5);
      if (aniR5 > 74) {
        fill(0);
        textSize(32);
        text((weatherDataSJ.data.current.weather.tp * 9 / 5) + 32 + "°F", 555, 705);
      }
    }
    // if(mouseIsPressed){
    //   scene=2;
    // }
    if (display) {
    stroke(255);
    line(840, y1, 985, y2);
    line(985, y2, 1145, y3);


      textSize(60);
      fill(255);
      text(aqi, 900, 580);
    }

    //animation
    noStroke();
    fill(208, 35, 89);
    rect(rectX, 150, 1160 - rectX, 230);
    rectX += aniX;
    if (rectX >= 1160) {
      aniX = 0;
    }

    if (mouseIsPressed && mouseX > 855 && mouseX < 935 && mouseY > 525 && mouseY < 595) {
      if (aqi > 0 && aqi <= 100) {
        scene = 3;
      }
      if (aqi > 100 && aqi <= 200) {
        scene = 4;
      }
      if (aqi > 200) {
        scene = 5;
      }
    }
  }
  if (scene == 3) {
    background(255);
    bgImg = inforHealthy;
    image(bgImg, 0, 0);
    image(back, 820, 800, 50, 50);
    if (mouseIsPressed && mouseX > 820 && mouseX < 870 && mouseY > 800 && mouseY < 850) {
      scene = 2
      bgImg = newmap;
      display = false;
    }
  }
  if (scene == 4) {
    background(255);
    bgImg = inforModerate;
    image(bgImg, 0, 0);
    image(back, 820, 800, 50, 50);
    if (mouseIsPressed && mouseX > 820 && mouseX < 870 && mouseY > 800 && mouseY < 850) {
      scene = 2
      bgImg = newmap;
      display = false;
    }
  }
  if (scene == 5) {
    background(255);
    bgImg = inforPoor1;
    image(bgImg, 0, 0);
    if (mouseIsPressed && mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
      scene = 6
    }
  }
  if (scene == 6) {
    background(255);
    bgImg = inforPoor2;
    image(bgImg, 0, 0);
    image(back, 820, 800, 50, 50);
    if (mouseIsPressed && mouseX > 820 && mouseX < 870 && mouseY > 800 && mouseY < 850) {
      scene = 2
      bgImg = newmap;
      display = false;
    }
  }

  // if(sfAni1){
  //   arc(325,480,40,40,0,2*PI);
  //   pai+=paiSpeed;
  // }
  //
  // if(pai==PI){
  //   paiSpeed=0;
  // }

  // reference lines
  // stroke(0);
  // line(840,0,840,936);
  // line(985,0,985,936);
  // line(1145,0,1145,936);
  // line(0,150,1224,150);
  // line(0,420,1224,420);
  // line(855,525,855,595);
  // line(935,525,935,595);
}
