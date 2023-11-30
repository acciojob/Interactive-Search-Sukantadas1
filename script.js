    document.addEventListener('DOMContentLoaded', function () {
      const searchDiv = document.querySelector('.search');
      const inputElement = document.querySelector('.input');
      const btnElement = document.querySelector('.btn');

      btnElement.addEventListener('click', function () {
        searchDiv.classList.add('active');
        inputElement.focus();
      });
    });
