console.log('Script running')
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
    console.log('attaching listener')
    video.ontimeupdate = _ => {
        console.log('ontimeupdate')
        if (video.duration - video.currentTime <= threshold) {
            console.log('skipping video now.')
            document.dispatchEvent(keyDownEvent)
        }
    }
} else {
    console.log('listener not attached')
}