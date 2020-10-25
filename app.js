// Movement animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
// Items
const sneaker = document.querySelector('.sneaker img')
const title = document.querySelector('.title')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase button')

// Moving animation event
container.addEventListener('mousemove', (e) => {
    const intensity = 50

    let xAxis = (window.innerWidth / 2 - e.pageX) / intensity
    let yAxis = (window.innerHeight / 2 - e.pageY) / intensity

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
})

// Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.2s ease'

    const intensity = 75;
    // Popout
    sneaker.style.transform = `translateZ(${intensity*2}px) rotateZ(-25deg)`
    title.style.transform = `translateZ(${intensity*1.5}px)`
    description.style.transform = `translateZ(${intensity*1.25}px)`
    sizes.style.transform = `translateZ(${intensity*1}px)`
    purchase.style.transform = `translateZ(${intensity*0.75}px)`
})

// Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.7s ease'
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'

    // Popback
    sneaker.style.transform = 'translateZ(0) rotateZ(0)'
    title.style.transform = 'translateZ(0)'
    description.style.transform = 'translateZ(0)'
    sizes.style.transform = 'translateZ(0)'
    purchase.style.transform = 'translateZ(0)'
})