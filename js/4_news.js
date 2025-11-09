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
    МОДАЛЬНОЕ ОКНО
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


const projectdata = [
  {
    id: 1,
    title: "Система технической поддержки",
    category: "Веб-разработка",
    date: "31 Августа 2025",
    description: "Мы рады сообщить о запуске нашего нового приложения, разработанного специально для того, чтобы сделать процесс обращения в техподдержку максимально удобным и эффективным",
    technologies: ["С#", "SQL"],
    link: "1_home.html",
  },
  {
    id: 2,
    title: "Сайт портфолио",
    category: "Веб-разработка",
    date: "31 Августа 2025",
    description: "В результате работы я создал цифровой Сайт-портфолио, который является интерактивной средой хранения моих проектов и достижений в сфере дизайна и разработки.",
    technologies: ["Figma", "HTML", "CSS", "JS"],
    link: "1_home.html",
  },
  
];

function createProjectCard(project) {
  return `
    <a href="${project.link}" class="relize_card">
      <div class="column-left">
        <div class="years">
          <p class="date">${project.date}</p>
        </div>
      </div>
      <div class="column-right">
        <div class="name">
          <h1 class="h2-1" style="padding-top: 0;">${project.title}</h1>
        </div>
        <div class="description">
          <p>${project.description}</p>
        </div>
        <div class="technologies">
          ${project.technologies.map(tech => `<div class="tech"><p>${tech}</p></div>`).join('')}
        </div>
      </div>
    </a>
  `;
}
// Пример использования:
const projectCardsHTML = projectdata.map(project => createProjectCard(project)).join('');
// Вставляем сгенерированный HTML в элемент с id="np_page2"
document.getElementById('np_page2').innerHTML = projectCardsHTML;




const project2 = [
  {
    id: 1,
    year1: "np_11",
    year: "2025",
    projectCount: 0,
    projectChange: 2,
    articleCount: 0,
    articleChange: 1,
    publicationCount: 0,
    publicationChange: 1,
    informationUnavailable: "Информация недоступна",
    text1: "",
  },
  {
    id: 2,
    year1: "np_12",
    year: "2026",
    projectCount: 0,
    projectChange: "",
    articleCount: 0,
    articleChange: "",
    publicationCount: 0,
    publicationChange: "",
    informationUnavailable: "Информация недоступна",
    text1: "",
  }
];
function createDropdownHTML(project2) {
  return `
    <div class="dropdown2">
      <input type="checkbox" id="checkbox-np${project2.year1}" class="dropdown_up">
      <label for="checkbox-np${project2.year1}" class="dropdown_label">
        <div class="height-max" id="re">
          <p>Итоги ${project2.year} года</p>
        </div>
        <div class="height-max" id="hm-1">
          <div class="hh4" id="img-b1"></div>
          <p>Проекты:</p>
          <p>${project2.projectCount}</p>
          <p class="${project2.projectChange > 0 ? 'green' : 'red'}">${project2.projectChange > 0 ? '+' : ''}${project2.projectChange}</p>
        </div>
        <div class="height-max" id="hm-1">
          <div class="hh4" id="img-b3"></div>
          <p>Статьи:</p>
          <p>${project2.articleCount}</p>
          <p class="${project2.articleChange > 0 ? 'green' : 'red'}">${project2.articleChange > 0 ? '+' : ''}${project2.articleChange}</p>
        </div>
        <div class="height-max" id="hm-1">
          <div class="hh4" id="img-b2"></div>
          <p>Публикации:</p>
          <p>${project2.publicationCount}</p>
          <p class="${project2.publicationChange > 0 ? 'green' : 'red'}">${project2.publicationChange > 0 ? '+' : ''}${project2.publicationChange}</p>
        </div>
        <div class="fg2">
          <div class="img-strelka"></div>
        </div>
      </label>
      <span class="dropdown_contentbox2">
        <div class="jcsb">
          <div class="lala">
            <p class="h2-19">${project2.informationUnavailable}</p>
            <p>${project2.text1}</p>
          </div>
        </div>
      </span>
    </div>
  `;
}
// Пример использования:
const dropdownsHTML = project2.map(project2 => createDropdownHTML(project2)).join('');
// Вставляем сгенерированный HTML в элемент с id="np_page2"
document.getElementById('np_page3').innerHTML = dropdownsHTML;





const updates = [
  {
    id: 1,
    versionTitle: "Версия 25П2 - Локальная (Первый запуск)",
    dropdowns: [
      {
        idDropdown: "npm1",
        launchVersion: "Запуск 0.1.1",
        testStatus: "Тестирование",
        date: "31.08.2025",
        description: "Запуск и новые возможности:",
        changes: [
          {
            column: 1,
            items: [
              "Разработан основной макет сайта.",
              "Добавлена навигация по разделам.",
              "Созданы базовые страницы."
            ]
          },
          {
            column: 2,
            items: [
              "Реализована адаптивная верстка для разных устройств.",
              "Установлены начальные анимации для контента.",
              "Оформлены текстовые блоки."
            ]
          }
        ]
      },
      {
        idDropdown: "npm2",
        launchVersion: "Запуск 0.1.2",
        testStatus: "Альфа-тестирование",
        date: "07.09.2025",
        description: "Исправления и улучшения:",
        changes: [
          {
            column: 1,
            items: [
              "Исправлены ошибки верстки.",
              "Добавлена поддержка новых браузеров."
            ]
          },
          {
            column: 2,
            items: [
              "Оптимизирована производительность сайта.",
              "Улучшена адаптивность на мобильных устройствах."
            ]
          }
        ]
      }
    ]
  },
];


function createUpdateHTML(update) {
  return `
    <div class="website_updates_block">
      <div class="ew_heading_block">
        <h1 class="h2-3">${update.versionTitle}</h1>
      </div>
      ${update.dropdowns.map(dropdown => `
        <div class="dropdown">
          <input type="checkbox" id="checkbox-np${dropdown.idDropdown}" class="dropdown_up">
          <label for="checkbox-np${dropdown.idDropdown}" class="dropdown_label" id="lab-t">
            <div class="toggler_heading">
              <p>${dropdown.launchVersion}</p>
            </div>
            <div class="height-max" id="hm-2">
              <p>${dropdown.testStatus}</p>
            </div>
            <div class="height-max">
              <p>${dropdown.date}</p>
            </div>
            <div class="fg">
              <div class="img-strelka"></div>
            </div>
          </label>
          <span class="dropdown_contentbox">
            <p>${dropdown.description}</p>
            <div class="oooppp" style="display: flex; flex-wrap: wrap;">
              ${dropdown.changes.map(col => `
                <div class="column_block">
                  <ul class="list-style2">
                    ${col.items.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </span>
        </div>
      `).join('')}
    </div>
  `;
}

const updatesHTML = updates.map(update => createUpdateHTML(update)).join('');
document.getElementById('np_page1').innerHTML = updatesHTML;