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
          document.getElementById('successMessage2').classList.add('show');
      }
  });

  document.getElementById('resetForm').addEventListener('click', () => {
      form.reset();
      currentStep = 1;

      document.getElementById('successMessage2').classList.remove('show');
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