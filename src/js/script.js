
const arr = Array.from(document.querySelectorAll('.social-media_page'))
const btn = document.querySelector('.social-close_btn')
const container = document.querySelector('.social-media')


btn.addEventListener('click', () => {
    arr.map(el => el.classList.toggle('icon-active'))
    btn.classList.toggle('rotate')
    container.classList.toggle('decrease')
})


