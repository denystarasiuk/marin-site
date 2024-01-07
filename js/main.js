let commentText = document.querySelectorAll('.comment__text')
let controls = document.querySelectorAll('.controls')
let commentTextIndex = 0

function showSlide(index) {
    commentText[commentTextIndex].classList.remove('active')
    commentText[index].classList.add('active')
    commentTextIndex = index
}

controls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = commentTextIndex - 1;

            if (index < 0) {
                index = commentText.length - 1;
            }

            showSlide(index);
        } else if (event.target.classList.contains('next')) {
            let index = commentTextIndex + 1;
            if (index >= commentText.length) {
                index = 0;
            }
            showSlide(index);
        }
    })
})

showSlide(commentTextIndex);