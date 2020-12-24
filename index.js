var readlineSync = require("readline-sync");
const chalk = require("chalk")
var score = 0;
console.log(chalk.black.bgYellow.bold("Hiiii, Welcome to the BIT quizz"));
console.log("*************************************************")
console.log(" ")

var questions = [
  {
    ques: "Where is BIT?",
    a: "Jharkhand",
    b: "Assam",
    c: "Kolkata",
    ans: "a"
  },
  {
    ques: "BIT Sindri was established in",
    a: "1985",
    b: "1962",
    c: "1949",
    ans: "c"
  },
  {
    ques: "First year students are called?",
    a: "Bakris",
    b: "Murgas",
    c: "Chellas",
    ans: "b"
  },
  {
    ques: "Who are the babas of the college?",
    a: "Final year students",
    b: "Professors",
    c: "First year students",
    ans: "a"
  },
  {
    ques: "Which of these branches is not in the academics?",
    a: "Metallurgy",
    b: "Print Technology",
    c: "Mining Engineering",
    ans: "b"
  }
]

function ask(ques, ans, i) {
  console.log(ques)
  console.log("a : " + questions[i].a)
  console.log("b : " + questions[i].b)
  console.log("c : " + questions[i].c)
  console.log(" ")
  var userAnswer = readlineSync.question("Ans: ");
  if(userAnswer.toLowerCase() === ans){
    console.log(chalk.green("You are correct"))
    score += 1;
    console.log(chalk.blue("Score = " + score));
  }
  else {
    console.log(chalk.red("SORRY! you are wrong"));
    console.log(chalk.blue("Score = " + score))
  }
  console.log(chalk.yellow("--------------"))
  console.log(" ")
}

for(var i = 0; i<questions.length; i++){
  ask(questions[i].ques,questions[i].ans, i)
}
console.log("YAY!...you score " +chalk.black.bgYellow.bold(score));
if(score>= 4){
  console.log("WOW! you know BIT so well")
}
else if(score >=2 && score <4){
  console.log("You know BIT a little bit. Go and search BIT on google further more...")
}
else{
  console.log("LOL you don't know BIT")
}