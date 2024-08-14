const threshold = 0.3;
const video = document.querySelector('video')
const keyDownEvent = new KeyboardEvent('keydown', {
    key: 'ArrowDown',
    code: 'ArrowDown',
    keyCode: 40,
    which: 40,
    bubbles: true
})

if (video) {
    video.ontimeupdate = event => {
        if (video.duration - video.currentTime <= threshold) {
            document.dispatchEvent(keyDownEvent)
        }
    }
}