
var readlineSync = require("readline-sync");
var score = 0;
var que = [
  {
    question : "How many players are present in each team?",
    answer : "11"
  },
  {
    question : "Who is the best player in football?",
    answer : "Messi"
  },
  {
    question : "In which club Messi played for 21 years?",
    answer : "FCB"
  },

  {
    question : "What is the Jersey Number of Ronaldo?",
    answer : "7"
  },
   {
    question : "which country won the worldcup in 2018?",
    answer : "France"
  }

];

welcome();
quiz();
finalScore();

function quiz(){
  for(var i=0 ;i<que.length; i++){
    var currentQue = que[i].question;

    var ans = readlineSync.question(currentQue);
    if(ans.toUpperCase() === que[i].answer.toUpperCase()){
      console.log("Correct Answer!!");
      score = score+1;
    }else{
      console.log("Wrong Answer!! its "+que[i].answer);
    }
    console.log("---------");
    console.log("current score :"+score);

  }
}

function welcome(){
  var username = readlineSync.question("What is your name?");
  console.log("Welcome "+username + "!");
  var ans = readlineSync.question(" Do you know football?");
  console.log("Let's see");
  console.log("----------------------");
}
function finalScore(){
  console.log("----------------------");
  console.log("Final score : "+score);
}