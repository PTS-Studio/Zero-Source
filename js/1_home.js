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
};
closeModalButton1.onclick = function() {
  modal1.classList.remove('show');
  document.body.style.overflow = 'auto';
};

const openModalButton2 = document.getElementById('open_modal2');
const modal2 = document.getElementById('modal2');
const closeModalButton2 = document.getElementById('closeModal2');
openModalButton2.onclick = function() {
  modal2.classList.add('show');
  document.body.style.overflow = 'hidden';
};
closeModalButton2.onclick = function() {
  modal2.classList.remove('show');
  document.body.style.overflow = 'auto';
};