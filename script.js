// Круг прогресса
const progressCircle = document.querySelector(".progress__bar");
const radius = progressCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

// Круг
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

//Для изменения ориентации
const progressContainer = document.querySelector(".progress");

//Функция установки прогресса
function setProgress(percent) {
    // Если NaN или пусто, то ставим 0
    if (isNaN(percent) || percent === "") {
        percent = 0;
        inputField.value = "";
    } else if (percent > 100) {
        percent = 100;
        inputField.value = 100;
    } else if (percent < 0 || inputField.value === "") {
        percent = 0;
        inputField.value = "";
    }

    progressCircle.style.strokeDashoffset =
        circumference - circumference * (percent / 100);
}

// Устанавливаем начальное значение 0 по дефолту
setProgress(0);

inputField.addEventListener("input", function () {
    // Разрешаем ввод только цифр, запятой и точки
    this.value = this.value.replace(/[^0-9.,]/g, "");

    // Заменяем запятую на точку
    this.value = this.value.replace(",", ".");

    // Разрешаем только одну точку
    if ((this.value.match(/\./g) || []).length > 1) {
        this.value = this.value.slice(0, this.value.lastIndexOf("."));
    }
    // Изменение значения в инпуте
    let progressValue = parseFloat(this.value);
    setProgress(isNaN(progressValue) ? 0 : progressValue);
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

//API для управления
const ProgressAPI = {
    setValue(value) {
        let progressValue = parseFloat(value);

        if (isNaN(progressValue) || progressValue < 0) progressValue = 0;
        if (progressValue > 100) progressValue = 100;

        inputField.value = progressValue;
        setProgress(progressValue);
    },

    setAnimated(state) {
        animateToggle.checked = state;
        progressCircleContainer.classList.toggle(
            "progress__circle--animated",
            state
        );
    },

    setHidden(state) {
        hideToggle.checked = state;
        progressCircleContainer.classList.toggle(
            "progress__circle--hidden",
            state
        );
    },
};
