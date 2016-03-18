console.log("Welcome")

   var username= prompt("Hello! What is your name?");
   alert("Welcome" + " " + username +"!");

console.log("guessing game answers");

// three questions, with two answers

     var age = 26;
     var town= "Newport, Oregon";
     var shoeSize= 7.5;
     var messageTrue="Whoa! You know so much about me.";
     var messageFalse="You know nohting about me";


console.log("if&else statements/promtpts");

var questionOne=prompt("Is my shoe size 7.5? (yes/no)");

if (questionOne === "yes") {
  document.getElementById("OneR").innerHTML=("X");
}
else {
  document.getElementById("OneW").innerHTML=("X");
}


     var questionThree=prompt("Am I 30 years old? (yes/no)");

     if (questionThree.toLowerCase() === "no"){
       alert (messageTrue);
     }
     else {
       alert (messageFalse);
     }

     var questionTwo=prompt("Did I grow up in Eugene, Oregon? (yes/no)");

     if (questionTwo.toLowerCase() === "no") {
       alert (messageTrue);
     }
     else {
       alert (messageFalse);
     }

     console.log("Trying for the While loop");

    var questionFour=parseInt(prompt("Guess the number I am thinking of between 1-5"));

    var i= 4;
    var trueMessage="Yay! You figured it out!";
    var falseMessage="Nope, guess again!";

      while (i != questionFour) {
        questionFour=parseInt(prompt(falseMessage));
      }
      alert(trueMessage);
