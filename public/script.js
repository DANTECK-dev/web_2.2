
//Preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.querySelector('header').style.display = 'none'
        document.querySelector('footer').style.display = 'none'
        document.querySelector('.content').style.display = 'none'
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        document.querySelector('header').style.display = 'block'
        document.querySelector('footer').style.display = 'block'
        document.querySelector('.content').style.display = 'block'
        for (let i = 0; element.length > i; i++){
            Visible (element.item(i));
        }
    }, 500);
}

// Получаем нужный элемент
let element = document.getElementsByClassName(`list_container`).item(0).getElementsByTagName(`li`);

let Visible = function (target) {
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }
    // Получаем позиции окна
    let windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        target.style.opacity = `1`
    } else {
        target.style.opacity = `0`
    }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    for (let i = 0; element.length > i; i++){
        Visible (element.item(i));
    }

});

if(window.history.length > 2) {
    document.querySelectorAll('.Back').item(0).addEventListener('click', (e) => {
        history.back();
    })
    document.querySelectorAll('.Back').item(1).addEventListener('click', (e) => {
        history.back();
    })
} else {
    document.querySelectorAll('.Back').item(0).style.display = 'none'
    document.querySelectorAll('.Back').item(1).style.display = 'none'
}
document.querySelectorAll('.Next').item(0).addEventListener('click', (e)=>{
    history.forward();
})
document.querySelectorAll('.Next').item(1).addEventListener('click', (e)=>{
    history.forward();
})