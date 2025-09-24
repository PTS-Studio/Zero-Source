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
        let offset = window.innerWidth >= 850 ? 20 : 10; // 20 - отступ на ПК; 10 - отступ для MOBILE

        // Плавно прокручиваем страницу к блоку с отступом
        const blockPosition = selectedBlock.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: blockPosition - offset,
            behavior: 'smooth'
        });
    });
});