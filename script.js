// Круг прогресса
const progressCircle = document.querySelector(".progress__bar");
const radius = progressCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

// Контейнер с кругом
const progressCircleContainer = document.querySelector(".progress__circle");

// Инпут для изменения прогресса
const inputField = document.querySelector(".progress__input-field");

// Переключатели
const animateToggle = document.querySelector(
    ".progress__switch--animate .switch__input"
);
const hideToggle = document.querySelector(
    ".progress__switch--hide .switch__input"
);

// Контейнер прогресса (для изменения ориентации)
const progressContainer = document.querySelector(".progress");

//Функция установки прогресса
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

// Устанавливаем начальное значение 0
setProgress(0);

// Изменение значения в инпуте
inputField.addEventListener("input", function () {
    setProgress(parseInt(inputField.value));
});

// Включение/выключение анимации
animateToggle.addEventListener("change", function () {
    progressCircleContainer.classList.toggle(
        "progress__circle--animated",
        animateToggle.checked
    );
});

// Скрытие/показ круга
hideToggle.addEventListener("change", function () {
    progressCircleContainer.classList.toggle(
        "progress__circle--hidden",
        hideToggle.checked
    );
});

//Обработка поворота экрана
function handleOrientationChange() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        progressContainer.classList.add("progress--horizontal");
        progressContainer.classList.remove("progress--vertical");
    } else {
        progressContainer.classList.add("progress--vertical");
        progressContainer.classList.remove("progress--horizontal");
    }
}

// Запускаем проверку ориентации при загрузке
handleOrientationChange();

// Слушатель события на изменение ориентации
window
    .matchMedia("(orientation: landscape)")
    .addEventListener("change", handleOrientationChange);
