var phone, logo, clock;
var back, forward, play, music, phonecall, guide;
var backgroundColor = 255;
var level = 1;
var songX = 200;
var songY = 600;
var r = 40;
var h = 10;
var col;
var rectArrayX = [];
var rectArrayY = [];
var rectArrayColor = [];
var sj;
var logoY = 400;
var timer = 0;
var phoneTimer = 0;
var songSpeed = 0;
var goNext = false;
var hr, mn, sec;
var dotTimer = 0;

function setup() {
  createCanvas(400, 800);
  background(0);
  phone = loadImage("frame.png");
  logo = loadImage("logo.png");
  back = loadImage("back.png");
  play = loadImage("play.png");
  forward = loadImage("forward.png");
  music = loadImage("music.png");
  clock = loadImage("clock1.png");
  phonecall = loadImage("phonecall1.png");
  guide = loadImage("guide.png");


  colorMode(HSB, 360, 100, 100);
  for (var i = 0; i < 500; i++) {
    rectArrayX[i] = 200 + i * 2;
    rectArrayY[i] = random(0, 50);
    h = random(0, 37);
    rectArrayColor[i] = color(h, 79, 97);
  }
  sj = loadImage("sj.png");
}


function draw() {
  if (level == 1) {
    timer++;
    background(backgroundColor);
    image(sj, 80, logoY, 240, 120);
    image(phone, 0, 0);
    if (logoY > 250) {
      logoY -= 1;
    }
    if (timer > 180) {
      ellipse(200, 500, r, r);
      r += 0.5;
      if (r > 50) {
        r = 40
      }
    }
    // if (keyIsPressed) {
    //   if (key == 'w') {
    //     backgroundColor = 125;
    //   }
    // }
    if (keyIsPressed && key == 'a') {
      level = 2;
    }
    // if(keyIsPressed==false && goNext==true){
    // level=2;
    // }

  }

  // if(level == 2){
  //   background(255);
  //   text("The Greatest -- Sia & Kendrick Lamar",songX,songY);
  //   songX-=2;
  //   if(songX<-100){
  //     songX=400
  //   }
  //   image(phone, 0, 0);
  //   ellipse(200,400,r,r);
  //   r+=0.5;
  //   if(r>50){
  //     r=40
  //   }
  // }

  if (level == 2) {
    goNext = false;
    background(255);
    noStroke();
    // image(sj,75,200,250,125);
    fill(0, 0, 92);
    rect(0, 80, 400, 630);
    image(sj, 30, 100, 120, 60);

    for (var i = 0; i < 500; i++) {
      fill(rectArrayColor[i]);
      rect(rectArrayX[i], 420, 1.5, -rectArrayY[i])
      rect(rectArrayX[i], 420, 1.5, rectArrayY[i])
    }

    image(back, 65, 240, 100, 90);
    image(play, 153, 241, 100, 93);
    image(forward, 235, 240, 100, 90);
    if (keyIsPressed && key == 'a') {
      songSpeed = 2;
    }
    if (keyIsPressed && key == 'd') {
      songSpeed = 0;
    }
    for (var i = 0; i < 500; i++) {
      rectArrayX[i] -= songSpeed;
    }
    for (var u = 0; u < 500; u++) {
      if (rectArrayX[u] == -598) {
        rectArrayX[u] = 400;
      }
    }
    fill(107, 75, 54);
    textSize(16);
    textAlign(CENTER);
    text("The Greatest -- Sia & Kendrick Lamar", songX, songY);
    // songX-=2;
    // if(songX<-100){
    //   songX=400
    // }
    image(phone, 0, 0);
    stroke(10);
    if (keyIsPressed) {
      if (key == ' ') {
        level = 3;
      }
    }
  }
  if (level == 3) {
    background(255);
    noStroke();
    // image(sj,75,200,250,125);
    fill(0, 0, 92);
    rect(0, 80, 400, 630);
    image(sj, 30, 100, 120, 60);
    image(clock, 100, 200, 200, 200);

    hr = hour();
    mn = minute();
    sec = second();

    if (keyIsPressed && key == 'd' && mn>=10) {
      fill(0);
      text(hr + ":" + mn + ":" + sec, 200, 500);
    }
    // if (keyIsPressed && key == 'd' && 0<mn<10) {
    //   fill(0);
    //   text(hr + ":" + "0"+  mn + ":" + sec, 200, 500);
    // }
    image(phone, 0, 0);

    if (keyIsPressed && key == 'a') {
      level = 4;
    }
  }

  if (level == 4) {
    background(255);
    noStroke();
    // image(sj,75,200,250,125);
    fill(0, 0, 92);
    rect(0, 80, 400, 630);
    image(sj, 30, 100, 120, 60);

    image(phonecall, 180, 300);

    if (keyIsPressed) {
      if (key == 'd') {
        phoneTimer++;
      }
    }
    if (phoneTimer > 240) {
      fill(0);
      textSize(42);
      text("Calling", 180, 500);
      dotTimer += 1;
    }

    if (dotTimer > 60) {
      ellipse(270, 500, 10, 10);
    }
    if (dotTimer > 120) {
      ellipse(300, 500, 10, 10);
    }
    if (dotTimer > 180) {
      ellipse(330, 500, 10, 10);
    }
    if (dotTimer == 240) {
      dotTimer = 0;
    }

    image(phone, 0, 0);

    if (keyIsPressed && key == ' ') {
      level = 5;
    }
  }

  if (level == 5) {
    background(255);
    image(guide, 0, 0);

  }

}
