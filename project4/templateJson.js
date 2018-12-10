// the way of getting live data

var jsonFile;

function setup() {
  loadJSON('url',gotdata,'jsonp');
}

function gotdata(data){
  jsonFile=data;

}

function draw(){
  if(jsonFile){
  ellipse(100,100,jsonFile.data1.location.coordinates[0],jsonFile.data1.location.coordinates[0]);
  text(jsonFile.data1.location.coordinates[0])
}
}


// the way of getting local json file
var jsonFile;

function setup() {
  jsonFile=loadJSON('filepath');
}


function draw(){

  ellipse(100,100,jsonFile.data1.location.coordinates[0],jsonFile.data1.location.coordinates[0]);
  text(jsonFile.data1.location.coordinates[0])

}
