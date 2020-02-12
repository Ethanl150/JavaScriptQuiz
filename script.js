var start = document.querySelector("#start");
var h1 = document.querySelector("h1");
var choice1 = document.querySelector("#button1");
var choice2 = document.querySelector("#button2");
var choice3 = document.querySelector("#button3");
var choice4 = document.querySelector("#button4");
var choices = document.querySelector("#choices");
var info = document.querySelector("#info");
var timeLeft = document.querySelector("span");
var rightOrWrong = document.querySelector("#right-or-wrong");
var enterInitials = document.querySelector("#form");
var submit = document.querySelector("#submit");
var timer = 60; // how much time left
var scores = []; // array for holding scores
var storedScores = JSON.parse(localStorage.getItem("score"));
var endTimer = false; // when endTimer becomes true, the timer stops

if (storedScores !== null) {
    scores = storedScores; // the array will hold the stored scores
}

var questionArr = [{
    q: "Commonly used data types DO NOT include:",
    a: "1. strings",
    b: "2. booleans",
    c: "3. alerts",
    d: "4. numbers"
},
{
    q: "The condition in an if / else statement is enclosed within ___.",
    a: "1. parentheses",
    b: "2. curly brackets",
    c: "3. quotation marks",
    d: "4. square brackets"
},
{
    q: "Arrays in JavaScript can be used to store ___.",
    a: "1. numbers and strings",
    b: "2. other arrays",
    c: "3. booleans",
    d: "4. all of the above"
},
{
    q: "String values must be enclosed within ___ when being assigned to variables.",
    a: "1. commas",
    b: "2. quotation marks",
    c: "3. curly brackets",
    d: "4. parentheses"
},
{
    q: "A very useful tool used during web development and debugging for printing content to the debugger is:",
    a: "1. JavaScript",
    b: "2. terminal / bash",
    c: "3. for loops",
    d: "4. console.log"
}];

function correct() {
    rightOrWrong.style.display = "flex";
    rightOrWrong.style.color = "#26eb29";
    rightOrWrong.textContent = "Correct!";
    setTimeout(function () {
        rightOrWrong.style.display = "none";
    }, 1000);
}

function wrong() {
    timeLeft.textContent = timer;
    rightOrWrong.style.display = "flex";
    rightOrWrong.style.color = "#e01d34";
    rightOrWrong.textContent = "Wrong!";
    setTimeout(function () {
        rightOrWrong.style.display = "none";
    }, 1000);
}

function question1(event) {
    event.preventDefault();
    start.style.display = "none";
    info.style.display = "none";
    h1.style.textAlign = "left";

    h1.textContent = questionArr[0].q;
    choices.style.display = "flex";
    choice1.textContent = questionArr[0].a;
    choice2.textContent = questionArr[0].b;
    choice3.textContent = questionArr[0].c;
    choice4.textContent = questionArr[0].d;
    
        choice1.addEventListener("click", function () {
            wrong();
            question2();
        });
        choice2.addEventListener("click", function () {
            wrong();
            question2();
        });
        choice3.addEventListener("click", function () {
            correct()
            question2();
        });
        choice4.addEventListener("click", function () {
            wrong();
            question2();
        });
    }

function question2() {
    h1.textContent = questionArr[1].q;
    choice1.textContent = questionArr[1].a;
    choice2.textContent = questionArr[1].b;
    choice3.textContent = questionArr[1].c;
    choice4.textContent = questionArr[1].d;

        choice1.addEventListener("click", function () {
            correct();
            question3();
        });
        choice2.addEventListener("click", function () {
            wrong();
            question3();
        });
        choice3.addEventListener("click", function () {
            wrong();
            question3();
        });
        choice4.addEventListener("click", function () {
            wrong();
            question3();
        });
    }

function question3() {
    h1.textContent = questionArr[2].q;
    choice1.textContent = questionArr[2].a;
    choice2.textContent = questionArr[2].b;
    choice3.textContent = questionArr[2].c;
    choice4.textContent = questionArr[2].d;

        choice1.addEventListener("click", function () {
            wrong();
            question4();
        });
        choice2.addEventListener("click", function () {
            wrong();
            question4();
        });
        choice3.addEventListener("click", function () {
            wrong();
            question4();
        });
        choice4.addEventListener("click", function () {
            correct();
            question4();
        });
    }

function question4() {
    h1.textContent = questionArr[3].q;
    choice1.textContent = questionArr[3].a;
    choice2.textContent = questionArr[3].b;
    choice3.textContent = questionArr[3].c;
    choice4.textContent = questionArr[3].d;

        choice1.addEventListener("click", function () {
            wrong();
            question5();
        });
        choice2.addEventListener("click", function () {
            correct();
            question5();
        });
        choice3.addEventListener("click", function () {
            wrong();
            question5();
        });
        choice4.addEventListener("click", function () {
            wrong();
            question5();
        });
    }

function question5() {
    h1.textContent = questionArr[4].q;
    choice1.textContent = questionArr[4].a;
    choice2.textContent = questionArr[4].b;
    choice3.textContent = questionArr[4].c;
    choice4.textContent = questionArr[4].d;

        choice1.addEventListener("click", function () {
            wrong();
            finalScore();
        });
        choice2.addEventListener("click", function () {
            wrong();
            finalScore();
        });
        choice3.addEventListener("click", function () {
            wrong();
            finalScore();
        });
        choice4.addEventListener("click", function () {
            correct();
            finalScore();
        });
    }

function finalScore() {
    choices.style.display = "none";
    h1.textContent = "All done!";
    info.style.display = "block";
    info.style.textAlign = "left";
    info.textContent = "Your final score is " + timer;
    enterInitials.style.display = "flex";
    endTimer = true;

    submit.addEventListener("click", function (event) {
        event.preventDefault();
        var initials = document.querySelector("#initials").value;

        if (initials.length < 1) {
            initials = "N/A";
        }
        var quizScore = initials + " --- " + (timer + 1); // +1 to fix inaccurate highscore display
        scores.push(quizScore);
        localStorage.setItem("score", JSON.stringify(scores));
        location.reload();
    });

}

start.addEventListener("click", question1);

start.addEventListener("click", function () {
    var timerID = setInterval(function () {
        timer--;
        timeLeft.textContent = timer;
        if (endTimer) {
            timeLeft.textContent = "60";
            clearInterval(timerID);
        } else if (timer == 0) {
            alert("You ran out of time!");
            location.reload();
        }
    }, 1000)
});


