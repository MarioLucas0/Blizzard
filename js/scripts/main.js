var slide_thumbnail = new Swiper('.slide-thumbnail', {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 37,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal'
    },
    991: {
      direction: 'vertical'
    }
  }
})

var slide_hero = new Swiper('.slide-principal', {
  effect: 'fade',
  thumbs: {
    swiper: slide_thumbnail
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
})

const allFilters = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelectorAll('.tab-pane-games')
allFilters.forEach((filter, index) => {
  filter.addEventListener('click', event => {
    event.preventDefault()
    allFilters.forEach(item => {
      item.classList.remove('active')
    })
    tabPane.forEach(item => {
      item.classList.remove('active')
    })

    tabPane[index].classList.add('active')
    filter.classList.add('active')
  })
})
const btnOpenModal = document.querySelector('.js-open-modal')
const closeModal = document.querySelector('.js-close-modal')

btnOpenModal.addEventListener('click', event => {
  event.preventDefault()
  let html = document.documentElement
  html.classList.add('show-modal')
  console.log('foda-se')
})

const btnCloseModal = document.querySelector('.js-close')

closeModal.addEventListener('mouseleave', () => {
  let html = document.documentElement
  html.classList.remove('show-modal')
})

btnCloseModal.addEventListener('click', event => {
  event.preventDefault()
  let html = document.documentElement
  html.classList.remove('show-modal')
})

const btnMenu = document.querySelectorAll('.js-btn-menu')
const MenuSite = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', event => {
    event.preventDefault()

    MenuSite.forEach(itemMenu => {
      itemMenu.classList.remove('active')
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active')
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active')
        })
      })
    })

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active')
    })
    btn.classList.add('active')
    MenuSite[index].classList.add('active')
  })
})
