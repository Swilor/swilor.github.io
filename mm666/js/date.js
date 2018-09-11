function getStylesheet() {
      var currentTime = new Date().getHours();
  console.log(currentTime);

  // hour is between 0 and 5 - midnight to 4am
      if (0 <= currentTime && currentTime < 5) {
       document.write("<link rel='stylesheet' href='css/evening.css'>");
      }
  // hour is between 5 and 10 am inclusive
      if (5 <= currentTime && currentTime < 11) {
       document.write("<link rel='stylesheet' href='css/morning.css'>");
      }
  // hour is between 11 and 15 inclusive - 11am to 3pm
      if (11 <= currentTime && currentTime < 16) {
       document.write("<link rel='stylesheet' href='css/day.css'>");

      }
  // hour is between 16 and 21 - 4 to 9pm inclusive
      if (16 <= currentTime&&currentTime < 22) {
       document.write("<link rel='stylesheet' href='css/afternoon.css'>");
      }
  // hour is between 22 and 24 inclusive - 10pm to 12am
      if (22 <= currentTime&&currentTime <= 24) {
       document.write("<link rel='stylesheet' href='css/evening.css'>");
      }

}

getStylesheet();
