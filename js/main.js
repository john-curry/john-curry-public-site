(function() {
    let burger = document.getElementById('burger-input')
    burger.addEventListener('click', (e) => {
        let dd = document.querySelector('.nav__dropdown')
        if(!dd.clicked) {
            dd.classList.add('hidden')
            dd.clicked = true
        }
        else {
            dd.classList.remove('hidden')
            dd.clicked = false
        }
    })
})()