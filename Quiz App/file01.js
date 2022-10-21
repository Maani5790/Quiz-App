const quizAR = [
{
    question : "Q1: What is the full form of HTML?",
    a: "Hello to My Land",
    b: " Hey text mark up language",
    c: "Hyper text make up language",
    d: "Hypertext markup language",
    ans: "ans4"
},
{
    question : "Q2: What is the full form of CSS?",
    a: "Cascading style sheet",
    b: " cascading style sheep",
    c: "cartoon style sheet",
    d: "cascading super sheet",
    ans: "ans1"
},
{
    question : "Q3: What is the full form of HTTP?",
    a: "Hello transfer protocol",
    b: " Hello test protocol",
    c: "Hey transfer protocol",
    d: "Hypertext transfer protocol",
    ans: "ans4"
},
{
    question : "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: " javaSuper",
    c: "justScript",
    d: "jordanShoe",
    ans: "ans1"  
}
];


 const question = document.querySelector(".question");
 const option1 = document.querySelector("#option1");
 const option2 = document.querySelector("#option2");
 const option3 = document.querySelector("#option3");
 const option4 = document.querySelector("#option4");
 const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer")
const showScore = document.querySelector("#showScore")

let questionCount = 0;
let score = 0;
 const loadQuestion = () =>{
    const questionList = quizAR[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
 }

 loadQuestion();

 const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem)=>{
     if(curAnsElem.checked){
        answer = curAnsElem.id;
      }
    
    });
return answer;
};

const deslectAll = () =>{
answers.forEach((curAnsElem) => curAnsElem.checked = false );


}
 submit.addEventListener('click' , () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
if(checkedAnswer === quizAR[questionCount].ans){
    score++;
};

questionCount++;

deslectAll()


if(questionCount<quizAR.length){
    loadQuestion();
}else{
showScore.innerHTML =
 `<h3> you scored  ${score}/${quizAR.length} </h3>
 <button class="btn" onclick="location.reload()">Play  Again </button>`;


 showScore.classList.remove("scoreArea");
}


 });
 