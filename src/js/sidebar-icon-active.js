


const targetEl = Array.from(document.querySelectorAll('.active-sidebar-menu'))

    targetEl.map(el => {
        const svg = el.querySelector('svg')
        const path = svg.querySelector('path')
        svg.setAttribute('stroke', '#FFD762')
        path.setAttribute('fill', '#FFD762')
    })
