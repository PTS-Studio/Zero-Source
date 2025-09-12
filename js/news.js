// const buttons = document.querySelectorAll('.news_category');
// const blocks = document.querySelectorAll('.block');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const blockId = this.getAttribute('data-block');

//         // Скрываем все блоки
//         blocks.forEach(block => {
//             block.style.display = 'none';
//             block.classList.remove('fade-in'); // Удаляем класс анимации
//         });

//         // Отображаем выбранный блок
//         const selectedBlock = document.getElementById(blockId);
//         selectedBlock.style.display = 'block';
//         selectedBlock.classList.add('fade-in'); // Добавляем класс анимации

//         // Плавно прокручиваем страницу к блоку (если нужно)
//         selectedBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     });
// });

// const buttons = document.querySelectorAll('.news_category');
// const blocks = document.querySelectorAll('.block');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const blockId = this.getAttribute('data-block');

//         // Скрываем все блоки
//         blocks.forEach(block => {
//             block.style.display = 'none';
//             block.classList.remove('fade-in'); // Удаляем класс анимации
//         });

//         // Отображаем выбранный блок
//         const selectedBlock = document.getElementById(blockId);
//         selectedBlock.style.display = 'block';
//         selectedBlock.classList.add('fade-in'); // Добавляем класс анимации

//         // Плавно прокручиваем страницу к блоку с отступом 80px
//         const blockPosition = selectedBlock.getBoundingClientRect().top + window.pageYOffset;
//         const offset = 100;
//         window.scrollTo({
//             top: blockPosition - offset,
//             behavior: 'smooth'
//         });
//     });
// });

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
        let offset = window.innerWidth >= 850 ? 100 : 70;

        // Плавно прокручиваем страницу к блоку с отступом
        const blockPosition = selectedBlock.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: blockPosition - offset,
            behavior: 'smooth'
        });
    });
});