const toggleEvent = () => {
    const toggleEls = document.querySelectorAll(".toggle")
    const canvasEl = document.querySelector(".canvas")

    toggleEls.forEach((item) => {
        item.addEventListener("click", () => {
            canvasEl.classList.toggle("collapse")
        })
    })
}

const navMenuIssue = () => {
    window.addEventListener("scroll", () => {})
}

const malingPangsitAudio = () => {
    const audio = new Audio("src/audios/maling-pangsit.mp3")
    audio.play()
}

const init = () => {
    toggleEvent()
    navMenuIssue()
    malingPangsitAudio()
    AOS.init({
        offset: 270,
        once: true,
    })
}

window.addEventListener("DOMContentLoaded", init())
