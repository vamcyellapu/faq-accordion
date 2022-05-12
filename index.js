'use strict';

const qa = document.querySelectorAll('.qa');

qa.forEach((item) => {
  item.addEventListener('click', function (e) {
    qa.forEach((question) => {
      if (question !== item) {
        question.classList.remove('bold');
        question.classList.add('hidden');
        question.classList.remove('btn-transform');
      }

      item.classList.toggle('bold');
      item.classList.toggle('hidden');
      item.classList.toggle('btn-transform');
    });
  });
});
