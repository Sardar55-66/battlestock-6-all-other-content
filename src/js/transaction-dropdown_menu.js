
const dropdowns = Array.from(document.querySelectorAll('.dropdown-menu'))


const itemsStyleHandler = (colCount) => {
    for (let i = 1; i <= colCount; i++) {
        const column = document.querySelector(`.column-${i}`)
        const itemsFromColumn = Array.from(column.querySelectorAll('.dropdown-item'))
        itemsFromColumn.forEach(el => {
            el.addEventListener('click', (e) => {
                const prev = Array.from(column.querySelectorAll('.selected'))
                prev.forEach(el => el.classList.remove('selected'))
                el.classList.add('selected')
            })
        })
    }
}

itemsStyleHandler(4)


function clickHandler (e) {
    const text = e.target.textContent
    const parent = e.target.closest('div')  
    const targetElement = parent.querySelector('button')
    targetElement.textContent = text    
}

dropdowns.map(el => {
    el.addEventListener('click', (e) => clickHandler(e));
})




$(".arrow-4").click(function() {
    $(this).toggleClass("open");
});

const infoPanels = Array.from(document.querySelectorAll('.mobile-table-stock-info_panel'))
const clickBtn = Array.from(document.querySelectorAll('.arrow-4'))
infoPanels.forEach((el, id) => {
    clickBtn[id].addEventListener('click', () => {
        el.classList.toggle('activate-info-panel')
    })
})
