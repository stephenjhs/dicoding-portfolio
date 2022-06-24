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
    // const audio = new Audio("src/audios/maling-pangsit.mp3")
    // audio.play()

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const source = audioCtx.createBufferSource()
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "src/audios/maling-pangsit.mp3")
    xhr.responseType = "arraybuffer"
    xhr.addEventListener("load", function (r) {
        let playsound = (audioBuffer) => {
            let source = audioCtx.createBufferSource()
            source.buffer = audioBuffer
            source.connect(audioCtx.destination)
            source.loop = false
            source.start()
        }

        audioCtx.decodeAudioData(xhr.response).then(playsound)
    })
    xhr.send()
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
