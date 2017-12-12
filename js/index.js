var correctAnswerCount = 0;

for (i = 0; i < 5; i++) {
var randomNum1 = Math.ceil(Math.random() * 100);

var randomNum2 = Math.floor(Math.random() * 100);
  
var userAnswer = prompt("Solve the equation: " + randomNum1 + "+" + randomNum2);
var answer = randomNum1 + randomNum2;
if (userAnswer == answer) {
  correctAnswerCount ++;
}
}
console.log("Correct answer count: " + correctAnswerCount);

switch(correctAnswerCount) {
  case 0:
    alert("You need to brush up on your skills! You got " + correctAnswerCount + " problems correct.");
    break;
  case 1:
    alert("Well, at least you got " + correctAnswerCount + "problems correct");
    break;
  case 2:
    alert(correctAnswerCount + " out of 5 isn't great.");
    break;
  case 3:
    alert(correctAnswerCount + " out of 5 is still failing.");
    break;
  case 4:
    alert(correctAnswerCount + " out of 5... we'll pretend that last one was a typo.");
    break;
  case 5:
    alert("Good job! You got all elementary school level addition problems correct!");
    break;
  default:
    alert("Congratulations on breaking my program! Please send me specific steps on how you did it to scgordon@gmail.com");
    break;
}