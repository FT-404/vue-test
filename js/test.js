fetch('base.json')
    .then(response => response.json())
    .then(json => console.log(json))

let cards = document.querySelectorAll('.card');
cards.forEach(i => {
    i.addEventListener('click', () => {
        console.log('gg')

    })
})