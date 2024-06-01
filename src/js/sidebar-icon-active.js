


const targetEl = Array.from(document.querySelectorAll('.active-sidebar-menu'))

    targetEl.map(el => {
        const nodeEl = el.querySelector('svg')
        return nodeEl.setAttribute('stroke', '#FFD762')
    })

