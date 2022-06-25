const toggleEvent = () => {
    const toggleEls = document.querySelectorAll(".toggle")
    const canvasEl = document.querySelector(".canvas")

    for (const toggleEl of toggleEls) {
        toggleEl.addEventListener("click", () => {
            canvasEl.classList.toggle("collapse")
        })
    }
}

const init = () => {
    toggleEvent()
}

window.addEventListener("load", init())
