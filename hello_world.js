//Start of JS

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

    if (questionOne.toLowerCase() === "yes") {
      document.getElementById("OneR").innerHTML="<img src='Thumb-up.png' class='answer-icon'>";
    }
    else {
      document.getElementById("OneW").innerHTML="<img src='thumbs.down.png' class='answer-icon'>";
    }


     var questionThree=prompt("Am I 30 years old? (yes/no)");

     if (questionThree.toLowerCase() === "no"){
       document.getElementById("TwoR").innerHTML="<img src='Thumb-up.png' class='answer-icon'>";
     }
     else {
       document.getElementById("TwoW").innerHTML="<img src='thumbs.down.png' class='answer-icon'>";
     }

     var questionTwo=prompt("Did I grow up in Eugene, Oregon? (yes/no)");

     if (questionTwo.toLowerCase() === "no") {
       document.getElementById("ThreeR").innerHTML="<img src='Thumb-up.png' class='answer-icon'>";
     }
     else {
       document.getElementById("ThreeW").innerHTML="<img src='thumbs.down.png' class='answer-icon'>";
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
