let progressCircle = document.querySelector(".progress__bar");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumference;

function setProgress(percent) {
    progressCircle.style.strokeDashoffset =
        circumference - circumference * (percent / 100);
}

setProgress(50);

function handleOrientationChange() {
    const progress = document.querySelector(".progress");

    if (window.matchMedia("(orientation: landscape)").matches) {
        progress.classList.add("progress--horizontal");
        progress.classList.remove("progress--vertical");
    } else {
        progress.classList.add("progress--vertical");
        progress.classList.remove("progress--horizontal");
    }
}

handleOrientationChange();

window
    .matchMedia("(orientation: landscape)")
    .addEventListener("change", handleOrientationChange);
