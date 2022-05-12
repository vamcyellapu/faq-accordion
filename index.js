'use strict';

const qa = document.querySelectorAll('.qa');
const a = document.querySelectorAll('.a');

qa.forEach((item) => {
  item.addEventListener('click', function (e) {
    qa.forEach((question) => {
      if (question !== item) {
        question.classList.remove('bold');
        question.classList.add('hidden');
      }
      item.classList.toggle('bold');
      item.classList.toggle('hidden');
    });
  });
});
