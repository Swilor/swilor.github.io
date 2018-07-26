PImage apple;
void setup(){
  size(400,400);
  background(255);

}

void draw(){
  apple=loadImage("apple.png");
  
  line(random(400),random(400),mouseX,mouseY);
  image(apple,0,0);
}
