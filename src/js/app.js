const toggleEvent = () => {
    const toggleEls = document.querySelectorAll(".toggle")
    const canvasEl = document.querySelector(".canvas")

    toggleEls.forEach((item) => {
        item.addEventListener("click", () => {
            canvasEl.classList.toggle("collapse")
        })
    })
}

const malingPangsitAudio = () => {
    const audio = new Audio("src/audios/maling-pangsit.mp3")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 9) {
            audio.play()
        }
    })
}

const init = () => {
    toggleEvent()
    malingPangsitAudio()
    AOS.init({
        offset: 270,
        once: true,
    })
}

window.addEventListener("load", init())
