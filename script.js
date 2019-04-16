
alert("Welcome to JC's Trivia Game!");
document.write("<h2>Instructions</h2>");
document.write("1. You will be asked 5 trivia questions. <br/> 2. If you get an answer correct you will earn one point. <br/> 3. At the end of the game your score will be reported.");

// question and answer combos for the quiz using regex's for the answers
correctAnswers = [
              ["Famous cathedral in Paris", /Notre Dame/i],
              ["World's longest river", /Nile/i],
              ["World's widest river", /Amazon/i], 
              ["The straight that separates the Atlantic from the Mediterranean", /Gibraltor/i],
              ["Vice President to Nixon", /Spiro Agnew/i]
                ]

if (prompt("Ready? Y or N") === "Y") {
   alert("First Question!");
} else {
  alert("Too bad, we are getting this show on the road!");
}
  
// variables needed to Setup the while loop and track the points for the user
var i = 0;
var pointCounter = 0;

// 
while (i < 5) {
  var answer = prompt("What is " + correctAnswers[i][0] + "?")
  if (correctAnswers[i][1].test(answer)) {
      pointCounter++;
      i++;
  } else {
    i++;
  }

}

document.write("<br/><br/><h2>You got " + pointCounter + " questions correct out of five total.<h2/>");

if (pointCounter === 0) {
    alert("You suck, you got no Crown");
} else if (pointCounter <= 2) {
    document.write("Congrats! You got a <p style= color:brown>BRONZE Crown!<p/>");
} else if (pointCounter < 5) {
    document.write("Congrats! You got a <p style= color:silver>SILVER Crown!<p/>");
} else {
    document.write("Congrats! You got a <p style= color:gold>GOLD Crown!<p/>");
}

