let progressCircle = document.querySelector(".progress__bar");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumference;

// Функция установки прогресса с ограничением 0-100
function setProgress(percent) {
    if (percent > 100) {
        percent = 100;
        inputField.value = 100;
    } else if (percent < 0 || inputField.value === "") {
        percent = 0;
        inputField.value = "";
    }

    progressCircle.style.strokeDashoffset =
        circumference - circumference * (percent / 100);
}

const inputField = document.querySelector(".progress__input-field"); // Получаем значение инпута

// Слушатель на изменение инпута
inputField.addEventListener("input", function () {
    setProgress(parseInt(inputField.value));
});

// Функция отображения компонентов при повороте экрана
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
