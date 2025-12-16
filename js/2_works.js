/*
=============================================================
  БАЗА ДАННЫХ ПРОЕКТОВ
=============================================================
*/
const projects = [
    {
        id: 1,
        title: "Сайт-Портфолио",
        category: "веб-разработка",
        description: "Динамичная платформа для показа профессиональных навыков, проектов и достижений.",
        technologies: ["HTML", "CSS", "JS"],
        link: "https://github.com/PTS-Studio",
    },
    {
        id: 2,
        title: "Система технической поддержки",
        category: "мобильные приложения",
        description: "Приложение, помогающее организовать систему технической поддержки внутри предприятия",
        technologies: ["C#", "SQL"],
        link: "https://github.com/PTS-Studio",
    },
    // {
    //     id: 1,
    //     title: "E-commerce платформа",
    //     category: "веб-разработка",
    //     description: "Современная платформа для онлайн-торговли с интеграцией платежных систем и системой управления заказами.",
    //     technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    //     link: "#"
    // },
    // {
    //     id: 2,
    //     title: "Мобильное приложение для фитнеса",
    //     category: "мобильные приложения",
    //     description: "Приложение для отслеживания тренировок, питания и прогресса с социальными функциями.",
    //     technologies: ["React Native", "Firebase", "Redux"],
    //     link: "#"
    // },
    // {
    //     id: 3,
    //     title: "Чат-бот с ИИ",
    //     category: "искусственный интеллект",
    //     description: "Интеллектуальный чат-бот для автоматизации клиентской поддержки с обработкой естественного языка.",
    //     technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
    //     link: "#"
    // },
    // {
    //     id: 4,
    //     title: "2D платформер",
    //     category: "игры",
    //     description: "Увлекательная 2D игра-платформер с уникальной механикой и красочной графикой.",
    //     technologies: ["Unity", "C#", "Photoshop"],
    //     link: "#"
    // },
    // {
    //     id: 5,
    //     title: "Система дизайна",
    //     category: "дизайн",
    //     description: "Комплексная система дизайна для корпоративных приложений с библиотекой компонентов.",
    //     technologies: ["Figma", "Sketch", "Storybook", "CSS"],
    //     link: "#"
    // },
    // {
    //     id: 6,
    //     title: "DeFi протокол",
    //     category: "блокчейн",
    //     description: "Децентрализованный протокол для кредитования и заимствования криптовалют.",
    //     technologies: ["Solidity", "Web3.js", "Ethereum", "React"],
    //     link: "#"
    // },
    // {
    //     id: 7,
    //     title: "CRM система",
    //     category: "веб-разработка",
    //     description: "Система управления взаимоотношениями с клиентами для малого и среднего бизнеса.",
    //     technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    //     link: "#"
    // },
    // {
    //     id: 8,
    //     title: "Приложение для медитации",
    //     category: "мобильные приложения",
    //     description: "Мобильное приложение с гайдами по медитации, звуками природы и трекингом прогресса.",
    //     technologies: ["Flutter", "Dart", "Firebase"],
    //     link: "#"
    // },
    // {
    //     id: 9,
    //     title: "Система распознавания изображений",
    //     category: "искусственный интеллект",
    //     description: "ИИ-система для автоматического распознавания и классификации изображений в реальном времени.",
    //     technologies: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    //     link: "#"
    // },
    // {
    //     id: 10,
    //     title: "Многопользовательская онлайн-игра",
    //     category: "игры",
    //     description: "MMO игра с открытым миром, системой гильдий и PvP сражениями.",
    //     technologies: ["Unreal Engine", "C++", "PostgreSQL"],
    //     link: "#"
    // },
    // {
    //     id: 11,
    //     title: "UI Kit для мобильных приложений",
    //     category: "дизайн",
    //     description: "Набор готовых UI компонентов и шаблонов для быстрой разработки мобильных приложений.",
    //     technologies: ["Figma", "Principle", "Adobe XD"],
    //     link: "#"
    // },
    // {
    //     id: 12,
    //     title: "NFT маркетплейс",
    //     category: "блокчейн",
    //     description: "Платформа для создания, покупки и продажи NFT с интеграцией различных блокчейнов.",
    //     technologies: ["Solidity", "React", "IPFS", "Polygon"],
    //     link: "#"
    // }
];

// Элементы DOM
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const projectsGrid = document.getElementById('projectsGrid');
const resultsInfo = document.getElementById('resultsInfo');
const noResults = document.getElementById('noResults');

function showTab(tabId) {
    // Сначала скрываем все вкладки
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
}

// Показать первую вкладку при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    showTab('content-1'); // По умолчанию отображаем content-1
});

// Функция создания карточки проекта
function createProjectCard(project) {
    return `
        <a href="${project.link}" class="project-card" data-category="${project.category}" data-title="${project.title.toLowerCase()}" data-description="${project.description.toLowerCase()}">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-category">${project.category}</span>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </a href="">
    `;
}

// Функция отображения проектов
function displayProjects(projectsToShow = projects) {
    projectsGrid.innerHTML = projectsToShow.map(createProjectCard).join('');
}


// Функция поиска и фильтрации
function searchAndFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    let filteredProjects = projects;

    // Фильтрация по категории
    if (selectedCategory) {
        filteredProjects = filteredProjects.filter(project => 
            project.category === selectedCategory
        );
    }

    // Поиск по тексту
    if (searchTerm) {
        filteredProjects = filteredProjects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }

    displayProjects(filteredProjects);
}

// Функция очистки поиска
function clearSearch() {
    searchInput.value = '';
    categorySelect.value = '';
    displayProjects();
}

// Обработчики событий
searchBtn.addEventListener('click', searchAndFilter);
clearBtn.addEventListener('click', clearSearch);

// Поиск в реальном времени при вводе текста
searchInput.addEventListener('input', searchAndFilter);
categorySelect.addEventListener('change', searchAndFilter);

// Поиск по Enter
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchAndFilter();
    }
});

// Инициализация - показать все проекты
displayProjects();

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