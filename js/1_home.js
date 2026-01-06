let selectedRating = 0;
const boxes = document.querySelectorAll('.rating-box');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const ratingCard = document.querySelector('.rating-card');

boxes.forEach(box => {
  box.addEventListener('click', function() {
    const rating = parseInt(this.dataset.rating);
    selectedRating = rating;

    boxes.forEach(b => {
      b.classList.remove('selected', 'active');
    });

    boxes.forEach((b, index) => {
      if (index < rating) {
        b.classList.add('active');
      }
    });

    this.classList.add('selected');
    submitBtn.disabled = false;
  });

  box.addEventListener('mouseenter', function() {
    if (!this.classList.contains('selected')) {
      const rating = parseInt(this.dataset.rating);
      boxes.forEach((b, index) => {
        if (index < rating) {
          b.classList.add('hover');
        } else {
          b.classList.remove('hover');
        }
      });
    }
  });
});

document.getElementById('ratingBoxes').addEventListener('mouseleave', function() {
  boxes.forEach(b => b.classList.remove('hover'));
});

submitBtn.addEventListener('click', function() {
  if (selectedRating > 0) {
    this.classList.add('loading');
    this.disabled = true;

    setTimeout(() => {
      ratingCard.classList.add('submitted');

      setTimeout(() => {
        successMessage.classList.add('show');

        setTimeout(() => {
          boxes.forEach(b => {
            b.classList.remove('selected', 'active');
          });
          selectedRating = 0;
          submitBtn.classList.remove('loading');
          submitBtn.disabled = true;
          // ratingCard.classList.remove('submitted'); НЕ УДАЛЯТЬ!!!!!!!!!!!!!!!!!!!
          // successMessage.classList.remove('show');  НЕ УДАЛЯТЬ!!!!!!!!!!!!!!!!!!!
        }, 3000);
      }, 400);
    }, 1500);
  }
});
/*
=============================================================
    МОДАЛЬНЫЕ ОКНА
=============================================================
*/
const openModalButton1 = document.getElementById('open_modal1');
const modal1 = document.getElementById('modal1');
const closeModalButton1 = document.getElementById('closeModal1');
openModalButton1.onclick = function() {
  modal1.classList.add('show');
  document.body.style.overflow = 'hidden';

  window.scrollBy(0, -1);
};
closeModalButton1.onclick = function() {
  modal1.classList.remove('show');
  document.body.style.overflow = 'auto';

  window.scrollBy(0, 0);
};

const openModalButton2 = document.getElementById('open_modal2');
const modal2 = document.getElementById('modal2');
const closeModalButton2 = document.getElementById('closeModal2');
openModalButton2.onclick = function() {
  modal2.classList.add('show');
  document.body.style.overflow = 'hidden';

  window.scrollBy(0, -1);
};
closeModalButton2.onclick = function() {
  modal2.classList.remove('show');
  document.body.style.overflow = 'auto';

  window.scrollBy(0, 1);
};