$('.dropdown-toggle').dropdown()

const container = document.querySelector('.selected-dropdown-item')

$('.dropdown-menu').on('click', function (e) {
    container.textContent = e.target.textContent
  })