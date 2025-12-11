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
/*
=============================================================
    Выбор способа связи
=============================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="contact-method"]');
    const emailContent = document.getElementById('email-content');
    const phoneContent = document.getElementById('phone-content');
    const messengerContent = document.getElementById('messenger-content');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            emailContent.classList.remove('active');
            phoneContent.classList.remove('active');
            messengerContent.classList.remove('active');

            switch (radio.value) {
                case 'email':
                    emailContent.classList.add('active');
                    break;
                case 'phone':
                    phoneContent.classList.add('active');
                    break;
                case 'messenger':
                    messengerContent.classList.add('active');
                    break;
            }
        });
    });
});

/*
=============================================================
    САМОЕ ГЛАВНОЕ
=============================================================
*/
let currentStep = 1;
const formData = {};

function updateProgressBar() {
  const progressSteps = document.querySelectorAll('.progress-step');

  progressSteps.forEach((step, index) => {
      const stepNumber = index + 1;
      step.classList.remove('active', 'completed');

      if (stepNumber < currentStep) {
          step.classList.add('completed');
      } else if (stepNumber === currentStep) {
          step.classList.add('active');
      }
  });
}

function validateStep(step) {
  const currentFormStep = document.querySelector(`.form-step[data-step="${step}"]`);
  const inputs = currentFormStep.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
      const errorMessage = input.parentElement.querySelector('.error-message');

      if (!input.value.trim()) {
          input.classList.add('error');
          errorMessage.textContent = 'Это поле обязательно для заполнения';
          isValid = false;
      } else if (input.type === 'email' && !isValidEmail(input.value)) {
          input.classList.add('error');
          errorMessage.textContent = 'Введите корректный email адрес';
          isValid = false;
      } else if (input.type === 'tel' && !isValidPhone(input.value)) {
          input.classList.add('error');
          errorMessage.textContent = 'Введите корректный номер телефона';
          isValid = false;
      } else {
          input.classList.remove('error');
          errorMessage.textContent = '';
      }

      input.addEventListener('input', () => {
          input.classList.remove('error');
          errorMessage.textContent = '';
      });
  });

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
}

function collectFormData() {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
      if (input.name) {
          formData[input.name] = input.value;
      }
  });
}

function displaySummary() {
  const preferredContactMap = {
      'email': 'Email',
      'phone': 'Телефон',
      'any': 'Любой'
  };

  const subjectMap = {
      'general': 'Общий вопрос',
      'support': 'Техническая поддержка',
      'sales': 'Коммерческое предложение',
      'partnership': 'Партнерство'
  };

  document.getElementById('summaryFirstName').textContent = formData.firstName || '';
  document.getElementById('summaryLastName').textContent = formData.lastName || '';
  document.getElementById('summaryCompany').textContent = formData.company || 'Не указано';
  document.getElementById('summaryEmail').textContent = formData.email || '';
  document.getElementById('summaryPhone').textContent = formData.phone || '';
  document.getElementById('summaryPreferredContact').textContent = preferredContactMap[formData.preferredContact] || '';
  document.getElementById('summarySubject').textContent = subjectMap[formData.subject] || '';
  document.getElementById('summaryMessage').textContent = formData.message || '';

  if (!formData.company) {
      document.getElementById('summaryCompanyItem').style.display = 'none';
  } else {
      document.getElementById('summaryCompanyItem').style.display = 'flex';
  }
}

function goToStep(newStep, direction) {
  const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  const newFormStep = document.querySelector(`.form-step[data-step="${newStep}"]`);

  if (direction === 'next') {
      currentFormStep.classList.add('slide-out-left');
  } else {
      currentFormStep.classList.add('slide-out-right');
  }

  setTimeout(() => {
      currentFormStep.classList.remove('active', 'slide-out-left', 'slide-out-right');
      currentStep = newStep;
      newFormStep.classList.add('active');
      updateProgressBar();

      if (currentStep === 4) {
          collectFormData();
          displaySummary();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 400);
}

function setupEventListeners() {
  const nextButtons = document.querySelectorAll('.btn-next');
  nextButtons.forEach(button => {
      button.addEventListener('click', () => {
          if (validateStep(currentStep)) {
              goToStep(currentStep + 1, 'next');
          }
      });
  });

  const prevButtons = document.querySelectorAll('.btn-prev');
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        goToStep(currentStep - 1, 'prev');
    });
  });

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (validateStep(currentStep)) {
          collectFormData();
          console.log('Form submitted:', formData);
          alert('Форма отправлена! Данные:\n' + JSON.stringify(formData, null, 2));

          form.style.display = 'none';
          document.querySelector('.progress-bar').style.display = 'none';
          document.getElementById('successMessage').classList.add('show');
      }
  });

  document.getElementById('resetForm').addEventListener('click', () => {
      form.reset();
      currentStep = 1;

      document.getElementById('successMessage').classList.remove('show');
      document.querySelector('.progress-bar').style.display = 'flex';
      form.style.display = 'block';

      document.querySelectorAll('.form-step').forEach(step => {
          step.classList.remove('active');
      });
      document.querySelector('.form-step[data-step="1"]').classList.add('active');

      updateProgressBar();

      for (let key in formData) {
          delete formData[key];
      }
  });

  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
      input.addEventListener('input', () => {
          input.classList.remove('error');
          const errorMessage = input.parentElement.querySelector('.error-message');
          if (errorMessage) {
              errorMessage.textContent = '';
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updateProgressBar();
});