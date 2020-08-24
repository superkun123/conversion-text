document.addEventListener('DOMContentLoaded', function() {
    let playBtn = document.querySelector('.controls')
    let video = document.querySelector('.video')
    playBtn.addEventListener('click', function() {
        video.play()
        playBtn.style.display = "none"
    })
})