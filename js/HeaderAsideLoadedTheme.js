/*
=============================================================
    УПРАВЛЕНИЕ ЦВЕТОВОЙ ТЕМОЙ
=============================================================
*/
document.addEventListener('DOMContentLoaded', () => {
  const lightBtn = document.getElementById('lightBtn');
  const darkBtn = document.getElementById('darkBtn');
  const systemBtn = document.getElementById('systemBtn');
  const body = document.body;

  // Получаем ссылки на новые div элементы
  const lightThemeDiv = document.querySelector('.img-light-theme');
  const darkThemeDiv = document.querySelector('.img-dark-theme');
  const systemThemeDiv = document.querySelector('.img-system-theme');

  // Функция для отображения одного div и скрытия остальных
  function showDiv(divToShow) {
      lightThemeDiv.style.display = 'none';
      darkThemeDiv.style.display = 'none';
      systemThemeDiv.style.display = 'none';
      divToShow.style.display = 'block';
  }

  function setTheme(theme) {
      if (theme === 'light') {
          body.classList.remove('dark');
          showDiv(lightThemeDiv); // Показываем светлую тему
      } else if (theme === 'dark') {
          body.classList.add('dark');
          showDiv(darkThemeDiv); // Показываем темную тему
      } else {
          // System theme
          showDiv(systemThemeDiv); // Всегда показываем иконку системной темы
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              body.classList.add('dark');
          } else {
              body.classList.remove('dark');
          }
      }

      // Save theme to localStorage
      localStorage.setItem('theme', theme);
  }

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      setTheme(savedTheme);
  } else {
      // If no theme is saved, default to system theme
      setTheme('system');
  }

  lightBtn.addEventListener('click', () => {
      setTheme('light');
  });

  darkBtn.addEventListener('click', () => {
      setTheme('dark');
  });

  systemBtn.addEventListener('click', () => {
      setTheme('system');
  });

  // Listen for changes in system theme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (localStorage.getItem('theme') === 'system') {
          showDiv(systemThemeDiv); // Всегда показываем иконку системной темы

          if (event.matches) {
              body.classList.add('dark');
          } else {
              body.classList.remove('dark');
          }
      }
  });
});
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
    }, 6000);
});
/*
=============================================================
    БОКОВАЯ ПАНЕЛЬ
=============================================================
*/
const mobile_panel_header = document.getElementById('open_aside')
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

      mobile_panel_header.style.transition = 'opacity 0.5s ease';
      mobile_panel_header.style.opacity = '1';
      mobile_panel_header.style.pointerEvents = 'auto';
    } else {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '0';
      mainContent.style.pointerEvents = 'none';

      mobile_panel_header.style.transition = 'opacity 0.5s ease';
      mobile_panel_header.style.opacity = '0';
      mobile_panel_header.style.pointerEvents = 'auto';
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
    ВЫПОДАЮЩЕЕ БОКОВОЕ МЕНЮ
=============================================================
*/
const openModalButton = document.getElementById('open_aside');
const modal = document.getElementById('modal2');
const modalContentAside = document.querySelector('.modal_content_aside');
const closeModalButton = document.getElementById('closeModal2');

openModalButton.addEventListener('click', function() {
  modal.classList.add('show');
  modalContentAside.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeModalButton.addEventListener('click', function() {
  modal.classList.remove('show');
  modalContentAside.classList.remove('show');
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    modalContentAside.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});
