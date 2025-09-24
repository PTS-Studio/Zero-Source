const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const mainContent = document.querySelector('main');


const menuIcon = menuBtn.querySelector('menu-icon');

menuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

// Функция для управления прокруткой
function toggleScroll(shouldDisable) {
    if (shouldDisable) {
        document.body.style.overflow = 'hidden'; // отключить скролл
        // Сохраняем текущую позицию прокрутки
        const scrollY = window.scrollY;
        document.body.dataset.scrollY = scrollY; // сохраняем
    } else {
        document.body.style.overflow = ''; // вернуть прокрутку
        // Восстановить позицию прогрутки
        const scrollY = document.body.dataset.scrollY;
        if (scrollY !== undefined) {
            window.scrollTo(0, parseInt(scrollY));
        }
        delete document.body.dataset.scrollY;
    }
}
// Функция для плавного скрытия/показа основного контента
function fadeMainContent(show) {
    if (show) {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '1';
      mainContent.style.pointerEvents = 'auto';
    } else {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '0';
      mainContent.style.pointerEvents = 'none';
    }
}
// Переключение меню и управление скроллом/анимацией
menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    if (isOpen) {
        toggleScroll(true);
        fadeMainContent(false);
    } else {
        toggleScroll(false);
        fadeMainContent(true);
    }
});

/*
=============================================================
    АНИМАЦИЯ ЗАПОЛНЕНИЯ ASIDE
=============================================================
*/

document.addEventListener('DOMContentLoaded', function() {
const asideBlock = document.querySelector('.aside_block');
let lastScrollTop = 0;
const scrollThreshold = 1;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
    return;
    }

    if (scrollTop > lastScrollTop) {
    // Вниз
    asideBlock.classList.add('scrolled');
    } else {
    // Вверх
    asideBlock.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
});
});

/*
=============================================================
    АНИМАЦИЯ СКРЫТИЯ HEADER
=============================================================
*/

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
    // Пользователь листает вниз
    header.classList.add('hidden');
  } else {
    // Пользователь листает вверх
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/*
=============================================================
    МОДАЛЬНОЕ ОКНО
=============================================================
*/

const openModalButton = document.getElementById('open_modal1');
const modal = document.getElementById('modal1');
const closeModalButton = document.getElementById('closeModal1');
openModalButton.onclick = function() {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
};
closeModalButton.onclick = function() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
};

const openModalButton2 = document.getElementById('open_modal2');
const modal2 = document.getElementById('modal2');
const closeModalButton2 = document.getElementById('closeModal2');
openModalButton2.onclick = function() {
  modal2.classList.add('show');
  document.body.style.overflow = 'hidden';
};
closeModalButton2.onclick = function() {
  modal2.classList.remove('show');
  document.body.style.overflow = 'auto';
};

// const openModalButton3 = document.getElementById('open_modal3');
// const modal3 = document.getElementById('modal_block');
// const closeModalButton3 = document.getElementById('closeModal3');
// openModalButton3.onclick = function() {
//   modal3.classList.add('show');
//   document.body.style.overflow = 'hidden';
// };
// closeModalButton3.onclick = function() {
//   modal3.classList.remove('show');
//   document.body.style.overflow = 'auto';
// };