var start = document.querySelector("#start");
var h1 = document.querySelector("h1");
var choice1 = document.querySelector("#button1");
var choice2 = document.querySelector("#button2");
var choice3 = document.querySelector("#button3");
var choice4 = document.querySelector("#button4");
var choicesDiv = document.querySelector("#choices");
var info = document.querySelector("#info");
var timeLeft = document.querySelector("span");
var rightOrWrong = document.querySelector("#right-or-wrong");
var enterInitials = document.querySelector("#form");
var timer = 76;

// function timleft(event) {
//     setInterval(function () {
//     timer--;
//     time.innerHTML = timer;
// }, 1000);
// }


function question1(event) {
    event.preventDefault();
    start.style.display = "none";
    info.style.display = "none";
    h1.style.textAlign = "left";
    h1.innerHTML = "Commonly used data types DO NOT include:";
    choicesDiv.style.display = "flex";
    choice1.innerHTML = "1. strings";
    choice2.innerHTML = "2. booleans";
    choice3.innerHTML = "3. alerts";
    choice4.innerHTML = "4. numbers";

    choicesDiv.addEventListener("click", function () {
        // if (event.target.matches('button')) {

            if (event.target.matches('#button1') || event.target.matches('#button2') || event.target.matches('#button4')) {
                console.log('wrong button targeted')
                timeLeft.innerHTML = timer -= 15;
                rightOrWrong.style.display = "flex";
                rightOrWrong.style.color = "#e01d34";
                rightOrWrong.innerHTML = "Wrong!";
                setTimeout(function () {
                    rightOrWrong.style.display = "none";
                }, 1000);
                question2();
            } else if (event.target.matches('#button3')) {
                console.log('correct button 3 targeted')
                rightOrWrong.style.display = "flex";
                rightOrWrong.style.color = "#26eb29";
                rightOrWrong.innerHTML = "Correct!";
                setTimeout(function () {
                    rightOrWrong.style.display = "none";
                }, 1000);
                question2();
            } else if (event.target.matches('#start')) {
                console.log('start button targeted')
            }
            



    });
    // if time runs out, alert "You ran out of time. Game over!"
}

function question2() {
    console.log('hello')
    if (event.target.matches('button')) {
        h1.innerHTML = "The condition in an if / else statement is enclosed within ___.";
        choicesDiv.style.width = "25%";
        choice1.innerHTML = "1. quotation marks";
        choice2.innerHTML = "2. curly brackets";
        choice3.innerHTML = "3. parentheses";
        choice4.innerHTML = "4. square brackets";
    }
    // if (event.target.matches('#button1') || event.target.matches('#button2') || event.target.matches('#button4')) {
    //     timeLeft.innerHTML = timer -= 15;
    //     rightOrWrong.style.display = "flex";
    //     rightOrWrong.style.color = "#e01d34";
    //     rightOrWrong.innerHTML = "Wrong!";
    //     setTimeout(function () {
    //         rightOrWrong.style.display = "none";
    //     }, 1000);
    // } else {
    //     rightOrWrong.style.display = "flex";
    //     rightOrWrong.style.color = "#26eb29";
    //     rightOrWrong.innerHTML = "Correct!";
    //     setTimeout(function () {
    //         rightOrWrong.style.display = "none";
    //     }, 1000);
    // }
    choicesDiv.addEventListener("click", question3);
}

function question3(event) {
    event.preventDefault();
    if (event.target.matches('button')) {
        h1.innerHTML = "Arrays in JavaScript can be used to store ___.";
        choicesDiv.style.width = "30%";
        choice1.innerHTML = "1. numbers and strings";
        choice2.innerHTML = "2. other arrays";
        choice3.innerHTML = "3. booleans";
        choice4.innerHTML = "4. all of the above";
    }
    if (event.target.matches('#button1') || event.target.matches('#button2') || event.target.matches('#button4')) {
        timeLeft.innerHTML = timer -= 15;
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#e01d34";
        rightOrWrong.innerHTML = "Wrong!";
        setTimeout(function () {
            rightOrWrong.style.display = "none";
        }, 1000);
    } else {
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#26eb29";
        rightOrWrong.innerHTML = "Correct!";
        setTimeout(function () {
            rightOrWrong.style.display = "none";
        }, 1000);
    }
    choicesDiv.addEventListener("click", question4);
}

function question4(event) {
    event.preventDefault();
    if (event.target.matches('button')) {
        h1.innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
        choicesDiv.style.width = "25%";
        choice1.innerHTML = "1. commas";
        choice2.innerHTML = "2. curly brackets";
        choice3.innerHTML = "3. quotation marks";
        choice4.innerHTML = "4. parentheses";
    }
    if (event.target.matches('#button1') || event.target.matches('#button2') || event.target.matches('#button3')) {
        timeLeft.innerHTML = timer -= 15;
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#e01d34";
        rightOrWrong.innerHTML = "Wrong!";
        setTimeout(function () {
            rightOrWrong.style.display = "none"
        }, 1000);
    } else {
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#26eb29";
        rightOrWrong.innerHTML = "Correct!";
        setTimeout(function () {
            rightOrWrong.style.display = "none"
        }, 1000);
    }
    choicesDiv.addEventListener("click", question5);
}

function question5(event) {
    event.preventDefault();
    if (event.target.matches('button')) {
        h1.innerHTML = "A very useful tool used during web development and debugging for printing content to the debugger is:";
        choicesDiv.style.width = "25%";
        choice1.innerHTML = "1. JavaScript";
        choice2.innerHTML = "2. terminal / bash";
        choice3.innerHTML = "3. for loops";
        choice4.innerHTML = "4. console.log";
    }
    if (event.target.matches('#button1') || event.target.matches('#button2') || event.target.matches('#button3')) {
        timeLeft.innerHTML = timer -= 15;
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#e01d34";
        rightOrWrong.innerHTML = "Wrong!";
        setTimeout(function () {
            rightOrWrong.style.display = "none"
        }, 1000);
    } else {
        rightOrWrong.style.display = "flex";
        rightOrWrong.style.color = "#26eb29";
        rightOrWrong.innerHTML = "Correct!";
        setTimeout(function () {
            rightOrWrong.style.display = "none"
        }, 1000);
    }
    choicesDiv.addEventListener("click", finalScore);
}

function finalScore(event) {
    event.preventDefault();
    if (event.target.matches('button')) {
        clearInterval(timeTest);
        choicesDiv.style.display = "none";
        h1.innerHTML = "All done!";
        info.style.display = "block";
        info.style.textAlign = "left";
        info.innerHTML = "Your final score is " + timer;
        enterInitials.style.display = "flex";
    }

}









start.addEventListener("click", question1)
var timeTest = start.addEventListener("click", function () {
    setInterval(function () {
        timer--;
        timeLeft.innerHTML = timer;
    }, 1000)
});