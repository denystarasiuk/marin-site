let counterNumber = document.querySelectorAll('.statistics span')
let container = document.querySelector('.statistics')
let isAnimated = false

document.addEventListener('scroll', () => {
    if(scrollY > container.offsetTop - container.offsetHeight - 200 && isAnimated === false) {
        counterNumber.forEach(statistics__item => {
            statistics__item.innerText = 0
            let count = 0

            function updateCount() {
                let target = parseInt(statistics__item.dataset.value)
                if(count < target) {
                    count++
                    statistics__item.innerText = count
                    setTimeout(updateCount, 2000 / target)
                } else {
                    statistics__item.innerText = target
                }
            }
            updateCount()
            isAnimated = true
        })
    } else if(scrollY < container.offsetTop - container.offsetHeight - 500 || scrollY === 0 && isAnimated === true) {
        counterNumber.forEach(statistics__item => {
            statistics__item.innerText = 0
        })
        isAnimated = false
    }
})