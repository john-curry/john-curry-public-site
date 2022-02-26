function setHash(hash) {
    let url = new URL(document.URL)
    url.hash = document.getElementById(hash)
    document.URL = url
    console.log(hash)
}

(function() {
    document.querySelectorAll(".showcase [data-showcase]").forEach((nav) => {
        nav.addEventListener('click', function() {
            setHash(nav.dataset.showcase)
        })
    })

    document.querySelectorAll("[data-role=card]").forEach((card) => {
        let header = document.querySelector('#showcase-'+card.id +' .showcase-title')
        if (header) {
            header.innerHTML = card.id
            header.style.textTransform = 'capitalize'
        }

        card.querySelector('button').addEventListener('click', (button) => {
            button.preventDefault()
            document.getElementById("showcase-"+ card.id).scrollIntoView()
        })
    })
})()