/*
=============================================================
    АНИМАЦИЯ ЗАГРУЗКИ СТРАНИЦЫ
=============================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const content = document.getElementById('content');

    function hideSplashScreen() {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }

    setTimeout(hideSplashScreen, 2500);
});
window.addEventListener('load', function() {
    const logo = document.querySelector('.logo'); // Получаем ссылку на элемент логотипа

    function toggleAnimation() {
        if (logo.classList.contains('static')) {
            logo.classList.remove('static'); // Включаем анимацию
        } else {
            logo.classList.add('static'); // Отключаем анимацию
        }
    }

    // Функция для задержки смены анимации
    function delay(ms) {
      return new Promise(res => setTimeout(res, ms));
    }

    async function animateLogo() {
      while(true) {
        logo.classList.remove('static');
        await delay(3000);
        logo.classList.add('static');
        await delay(3000);
      }
    }

    animateLogo();


    setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.style.overflow = 'auto';
    }, 6000); // Показать контент после 6 секунд (общее время пульсации + статики)
});

/*
=============================================================
    ДР
=============================================================
*/

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
    ПРОКРУТКА СТРАНИЦЫ ДО НОВОСТЕЙ
=============================================================
*/

const buttons = document.querySelectorAll('.np_category');
const blocks = document.querySelectorAll('.news_page_block');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const blockId = this.getAttribute('data-block');

        // Скрываем все блоки
        blocks.forEach(block => {
            block.style.display = 'none';
            block.classList.remove('fade-in'); // Удаляем класс анимации
        });

        // Отображаем выбранный блок
        const selectedBlock = document.getElementById(blockId);
        selectedBlock.style.display = 'flex';
        selectedBlock.classList.add('fade-in'); // Добавляем класс анимации

        // Определяем отступ в зависимости от ширины экрана
        let offset = window.innerWidth >= 950 ? 20 : 10; // 20 - отступ на ПК; 10 - отступ для MOBILE

        // Плавно прокручиваем страницу к блоку с отступом
        const blockPosition = selectedBlock.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: blockPosition - offset,
            behavior: 'smooth'
        });
    });
});

/*
=============================================================
    АНИМАЦИЯ ЗАПОЛНЕНИЯ ASIDE
=============================================================
*/
const mobilePanelButton = document.querySelector('.mobile_panel');
const modalAside = document.querySelector('.modal_aside');

mobilePanelButton.addEventListener('click', () => {
  modalAside.classList.toggle('show');
});


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
    АНИМАЦИЯ СКРЫТИЯ MOBILE PANEL
=============================================================
*/

document.addEventListener('DOMContentLoaded', function() {
const openAsideButton = document.getElementById('open_aside');
let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Прокрутка вниз
    openAsideButton.style.left = '-80px';
    } else {
    // Прокрутка вверх
    openAsideButton.style.left = '0';
    }
    lastScrollTop = scrollTop;
  });
});

/*
=============================================================
    АНИМАЦИЯ ЗАПОЛНЕНИЯ ASIDE
=============================================================
*/

const openModalButton = document.getElementById('open_aside');
const modal = document.getElementById('modal2');
const modalContentAside = document.querySelector('.modal_content_aside'); // Более надежный селектор
const closeModalButton = document.getElementById('closeModal2');

openModalButton.addEventListener('click', function() {
  modal.classList.add('show');
  modalContentAside.classList.add('show'); // Добавляем класс и к content
  document.body.style.overflow = 'hidden';
});

closeModalButton.addEventListener('click', function() {
  modal.classList.remove('show');
  modalContentAside.classList.remove('show'); // Удаляем класс и у content
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {  // Строгое сравнение
    modal.classList.remove('show');
    modalContentAside.classList.remove('show'); // И здесь
    document.body.style.overflow = 'auto';
  }
});