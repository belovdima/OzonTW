let progressCircle = document.querySelector(".progress__bar");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumference;
//формула расчёта в процентах
function setProgress(percent) {
    progressCircle.style.strokeDashoffset =
        circumference - circumference * (percent / 100);
}

const inputField = document.querySelector(".progress__input-field"); //получаем значение инпута
//меняем значение инпута при его изменении
inputField.addEventListener("input", function () {
    let currentValue = inputField.value;
    setProgress(currentValue);
});
//не позволяем больше 100 вводить
inputField.addEventListener("input", function () {
    if (parseInt(inputField.value) > 100) {
        inputField.value = 100;
    }
});

// функция отображения компонентов при повороте экрана
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
