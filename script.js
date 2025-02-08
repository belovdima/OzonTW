let progressCircle = document.querySelector(".progress__bar");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumference;

function setProgress(percent) {
    progressCircle.style.strokeDashoffset =
        circumference - circumference * (percent / 100);
}

setProgress(25);
