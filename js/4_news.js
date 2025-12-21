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
    БАЗА ДАННЫХ НОВОСТЕЙ / ОБНОВЛЕНИЙ / ИТОГОВ ГОДА
=============================================================
*/
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
    projectChange: +2,
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
    projectCount: 2,
    projectChange: "",
    articleCount: 1,
    articleChange: "",
    publicationCount: 1,
    publicationChange: "",
    informationUnavailable: "Информация недоступна",
    text1: "",
  },
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
    versionTitle: "Версия 25П2",
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
            <div class="toggler_heading" id="hm-1">
              <p>${dropdown.launchVersion}</p>
            </div>
            <div class="height-max2">
              <p>${dropdown.testStatus}</p>
            </div>
            <div class="height-max" id="hm-1">
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