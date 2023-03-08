const hamburgerBtn = document.querySelector('#hamburgerBtn');
const dropdown = document.querySelector('#dropdownMenu');


hamburgerBtn.addEventListener('click', function() {
  dropdown.classList.toggle('dropdown');
  dropdown.classList.toggle('hide');
});