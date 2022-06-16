// Фильтр на мобильных устройствах 
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия/показа фильтра и изменения иконки
sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

// Клик по кнопке и показ ещё трёх скрытых карточек
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function() {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    });
});

// Показать/Скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget');

// Находим все виджеты на странице
widgets.forEach(function(widget) {

    // Слушаем клик внутри виждета
    widget.addEventListener('click', function(e) {
        // Если клик по заголовку, то скрываем/показываем тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
        
    });
});

// Location - кнопка Любая
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-location-param]');

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topLocationCheckBoxes.forEach(function(item) {
            item.checked = false;
        }); 
    }
});

// Отключаем кнопку  'Любая', при выборе других параметров
topLocationCheckBoxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
});

// Показать ещё 3 доп. опциии с чекбоксами в фильтре
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(e) {
    e.preventDefault();

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';
    }
    // Если блоки были видны - скрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }
}