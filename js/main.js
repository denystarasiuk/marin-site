function initSlider(sliderSelector) {
    let slides = document.querySelector(sliderSelector).children
    let sliderLenght = slides.length

    addSlidesClasses(slides)
    buttons(sliderSelector)
    changeActiveSlide()

}

function addSlidesClasses(slides) {
    Array.from(slides).forEach((slide) => {
        slide.classList.add('slider-slide')
    })
    slides[0].classList.add('active')
}

function buttons(slider) {
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')

    prev.addEventListener('click', ()=> {changeActiveSlide('prev')})
    next.addEventListener('click', ()=> {changeActiveSlide('next')})
}

function changeActiveSlide(direction) {
    if(direction === 'prev') {
        console.log('попередній слайд')
    } else if(direction === 'next') {
        console.log(slider.querySelectorAll('.slider-slide'))
    } else {
        console.error('не вибрано напрямок')
    }
    //Array.from(slider.querySelectorAll('.slider-slide')).forEach(slide, index) => {
      //  if(slide.classList.contains('active')) {
        //    console.log(slide, index)
          //  slide.classList.remove('active')
        //}
    //}
}

initSlider('.slider')