let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
let circumferense = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumferense;

function setProgress(percent) {
    progressCircle.style.strokeDashoffset =
        circumferense - circumferense * (percent / 100);
}

setProgress(50);
