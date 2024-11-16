let currentPage = 1;

function goToPage(page) {
  document.querySelector(`.page-${currentPage}`).classList.remove('active');
  currentPage = page;
  document.querySelector(`.page-${currentPage}`).classList.add('active');
}
