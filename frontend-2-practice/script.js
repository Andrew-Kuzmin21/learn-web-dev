// JavaScript для страницы выбора даты и времени.
//
// ЗАДАНИЕ
// ========
// Оживить свою свёрстанную страницу. Скорее всего на ней будет работать:
//   1. При открытии страницы выбрать день по умолчанию.
//   2. По клику на день — день становится выбранным,
//      слоты обновляются.
//   3. По клику на слот — время становится выбранным,
//      попадает в нижнюю панель.
//   4. Стрелки «‹» и «›» листают месяцы.
//   5. Дни раньше «сегодня» нельзя выбрать.
//   6. Нижняя панель обновляется при выборе дня и времени.
//
// ГДЕ ЖИВУТ ДАННЫЕ
// ----------------
// Слотов пока нет с сервера. Захардкодьте массив в этом файле.
// Формат слота: { time: "10:00", available: true }.
// «Сегодня» можно взять из new Date() или захардкодить —
// как удобнее для проверки.
//
// СТРУКТУРА КОДА
// --------------
// Разделите код на смысловые части комментариями:
//   1. Данные (слоты, «сегодня»).
//   2. Состояние (месяц, день, время, слоты).
//   3. Чистые функции (для работы с датами).
//   4. Отрисовка и обработчики.
//   5. Инициализация.
//
// ЧИСТЫЕ ФУНКЦИИ
// --------------
// Если понадобится строить сетку календаря — вот функция,
// которую можно использовать. Она не зависит от DOM,
// просто принимает год и месяц и возвращает массив недель.
//
// function buildCalendarGrid(year, month) {
//   const firstDay = new Date(year, month, 1);
//   const lastDay = new Date(year, month + 1, 0);
//   const daysInMonth = lastDay.getDate();
//   const startDayOfWeek = firstDay.getDay();
//   const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
//   const prevMonthLastDay = new Date(year, month, 0).getDate();
//
//   const cells = [];
//
//   for (let i = offset - 1; i >= 0; i--) {
//     cells.push({ day: prevMonthLastDay - i, otherMonth: true });
//   }
//   for (let d = 1; d <= daysInMonth; d++) {
//     cells.push({ day: d, otherMonth: false });
//   }
//   const totalCells = Math.ceil(cells.length / 7) * 7;
//   let nextDay = 1;
//   while (cells.length < totalCells) {
//     cells.push({ day: nextDay, otherMonth: true });
//     nextDay++;
//   }
//
//   const weeks = [];
//   for (let i = 0; i < cells.length; i += 7) {
//     weeks.push(cells.slice(i, i + 7));
//   }
//   return weeks;
// }

// Начните писать код здесь.

const dateGrid = document.querySelector('.main__date__grid');
const dateTitle = document.querySelector('.main__date__header__title');

const nextButton = document.querySelector('.main__next__button');

const prevMonthButton = document.querySelector('#prevMonth');
const nextMonthButton = document.querySelector('#nextMonth');

const today = new Date();
today.setHours(0, 0, 0, 0);

let currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = new Date(today);

const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

const dayNames = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];


// ОТРИСОВКА КАЛЕНДАРЯ
function renderCalendar() {
    const oldDays = dateGrid.querySelectorAll('.main__date__grid__day');

    oldDays.forEach((day) => {
        day.remove();
    });

    dateTitle.textContent =
        `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;


    const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();
    
    let firstDayOfWeek = firstDay.getDay();

    if (firstDayOfWeek === 0) {
        firstDayOfWeek = 6;
    } else {
        firstDayOfWeek--;
    }

    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDay = document.createElement('div');

        emptyDay.classList.add('main__date__grid__day', 'main__date__grid__day_empty');

        dateGrid.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const button = document.createElement('div');
        button.classList.add('main__date__grid__day');
        button.textContent = day;

        const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        );

        date.setHours(0, 0, 0, 0);

        if (date < today) {
            button.classList.add('main__date__grid__day_disable');
        }

        if (isSameDate(date, today)) {
            button.classList.add('main__date__grid__day_today');
        }

        if (isSameDate(date, selectedDate)) {
            button.classList.add('main__date__grid__day_selected');
        }

        button.addEventListener('click', () => {
            if (date < today) {
                return;
            }

            dateGrid
                .querySelectorAll('.main__date__grid__day_selected')
                .forEach((item) => {
                    item.classList.remove('main__date__grid__day_selected');
                });

            button.classList.add('main__date__grid__day_selected');

            selectedDate = date;

            buttonTime.forEach((item) => {
                item.classList.remove('main__time__grid__cell_selected');
            });

            nextButton.classList.add('main__next__button_disable');

            updateNextTitle();
        });
        dateGrid.appendChild(button);
    }
}


// СРАВНЕНИЕ ДАТ
function isSameDate(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}


// ПЕРЕКЛЮЧЕНИЕ МЕСЯЦЕВ
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});


// ВРЕМЯ
const buttonTime = document.querySelectorAll('.main__time__grid__cell');
buttonTime.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('main__time__grid__cell_disable')) {
            return;
        }

        buttonTime.forEach((item) => {
            item.classList.remove('main__time__grid__cell_selected');
        });

        button.classList.add('main__time__grid__cell_selected');

        nextButton.classList.remove('main__next__button_disable');

        updateNextTitle();
    });
});


// ТЕКСТ ВНИЗУ
const nextTitle = document.querySelector('.main__next__title');


function updateNextTitle() {
    const selectedTime = document.querySelector('.main__time__grid__cell_selected');

    const day = selectedDate.getDate();
    const month = monthNames[selectedDate.getMonth()];
    const weekDay = dayNames[selectedDate.getDay()];

    if (selectedTime) {
        const time = selectedTime.textContent.trim();

        nextTitle.textContent = `${day} ${month}, ${weekDay} — ${time}`;
    } else {
        nextTitle.textContent = `${day} ${month}, ${weekDay}`;
    }
}


// Запуск
renderCalendar();
updateNextTitle();