var listOfScores = document.querySelector("#list-of-scores");
var score = JSON.parse(localStorage.getItem("score"));
var clear = document.querySelector("#clear");
var arr = [];

if (score != null) {
    for (i = 0; i < score.length; i++) {
        var li = document.createElement("li");
        li.textContent = score[i];
        var num = score[i].match(/\d+/)[0];
        arr.push(num);
        if (num == Math.max.apply(Math, arr)) {
            listOfScores.insertBefore(li, listOfScores.firstChild);
        } else {
            listOfScores.appendChild(li);
        }
    };
};

clear.addEventListener("click", function () {
    localStorage.removeItem("score");
    location.reload();
});
