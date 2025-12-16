document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
        // Скролл вниз
        sidebar.style.transition = 'top 0.2s ease'; // Добавляем плавную анимацию
        sidebar.style.top = '20px';
        } else {
        // Скролл вверх
        sidebar.style.transition = 'top 0.2s ease'; // Добавляем плавную анимацию
        sidebar.style.top = '100px';
        }

        lastScrollTop = scrollTop;
    });
});