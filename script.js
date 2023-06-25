const elements = document.querySelectorAll(".hidden")
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const body = document.body

// const options = {
//   rootMargin: '10vh',
// }

const observerOne = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible')
    }
    else{
      entry.target.classList.remove('visible')
    }
  })
})

const options = {
  rootMargin: '-100px 0px 0px 0px',
}

const observerTwo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      nav.classList.add('nav-scrolled')
    }
    else{
      nav.classList.remove('nav-scrolled')
    }
  })
}, options)

elements.forEach((el) => {
  observerOne.observe(el)
})

observerTwo.observe(header)

///hamburger menu

const navItems = document.querySelectorAll('nav > a'
)

console.log(navItems);

const hamburger = document.querySelector('.ham')
isOpen = false

hamburger.addEventListener('click', () => {
  isOpen = true
  hamburger.classList.toggle('active')
  console.log('clicked');
  nav.classList.toggle('nav-active')
  document.body.body.style.overflowY = 'hidden'
})

navItems.forEach((navItem) => {
  navItem.addEventListener('click', ()=> {
    nav.classList.remove('nav-active')
  })
})
