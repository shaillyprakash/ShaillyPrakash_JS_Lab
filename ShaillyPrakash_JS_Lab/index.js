function Quiz(questions) {
    this.score = 0;
    this.questions = questions
    this.questionIndex = 0
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.isEnded = function() {
    return this. questionIndex === this.questions.length
}

let questions = [    
    new Question("JavaScript Supports", ["Functions", "XHTML", "XML", "CSS"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JS Framework?", ["Python", "JQuery", "Django", "Node.js"], "Python"),
    new Question("Which option is used to connect with Database", ["PHP", "HTML", "JS", "CSS"], "PHP"),
    new Question("Which defines structure of webpage?", ["HTML", "JS", "XML", "CSS"], "HTML")

]

Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex]
}

Question.prototype.isCorrectAnswer= function(choice) {
    return this.answer === choice
}
Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
let quiz = new Quiz(questions);
function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        let questionText = document.getElementById("question")
        questionText.innerHTML= quiz.getQuestionByIndex().text
        let choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice"+i)
            element.innerHTML = choices[i];
            handleOptionButton("btn"+i, choices[i])
        }
        showProgress();
    }
}

function handleOptionButton(id, choice) {
    let btn = document.getElementById(id)
    btn.onclick= function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }

};
function showProgress() {
    let currntQues = quiz.questionIndex +1;
    let elem = document.getElementById("progress")
    elem.innerHTML =`Question ${currntQues} of ${quiz.question.length}`
}
function showScores() {
let gameEnded = "<h1>Result</h1>"
gameEnded += "<h2> Your scores :" +quiz.score +" and Percentage is "+ (quiz.score/questions.length*100)  + "</h2>"
document.getElementById("quiz").innerHTML = gameEnded
}
loadQuestions();