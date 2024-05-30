let wrapper = Array.from(document.querySelectorAll('.left-container-player-info'))
let btn = Array.from(document.querySelectorAll('.detailed-info-show'))
let insertEl = Array.from(document.querySelectorAll('.detailed-info'))

btn.forEach((el, id) => {
    const mainEl = wrapper[id]

    el.addEventListener('click', () => {
        if (mainEl.querySelector('.detailed-info-show').classList.contains('rotate')) {
            insertEl[id].classList.add('detailed-info-inactive')
            mainEl.querySelector('.detailed-info-show').classList.remove('rotate')
        } else {
        mainEl.after(insertEl[id])
        insertEl[id].classList.remove('detailed-info-inactive')
        mainEl.querySelector('.detailed-info-show').classList.add('rotate')
        }
        })
})



