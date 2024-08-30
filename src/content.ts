let isRunning = false;

function isYouTubeShortsPage(): boolean {
    return window.location.pathname.startsWith('/shorts/');
}

function skipShort() {
    const keyDownEvent = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        code: 'ArrowDown',
        keyCode: 40,
        which: 40,
        bubbles: true
    });
    document.dispatchEvent(keyDownEvent);
}

function waitForVideo(timeout = 10000): Promise<HTMLVideoElement> {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkForVideo = () => {
            const videos = document.querySelectorAll('video');
            const mainVideo = Array.from(videos).find(video => {
                return video.readyState >= 2 && video.videoWidth > 0;
            });

            if (mainVideo) {
                resolve(mainVideo);
                return;
            }
            if (Date.now() - startTime < timeout) {
                setTimeout(checkForVideo, 100);
            } else {
                reject(new Error('Timeout waiting for suitable video'));
            }
        };
        checkForVideo();
    });
}

async function checkVideoProgress() {
    if (!isYouTubeShortsPage()) {
        isRunning = false;
        return;
    }

    try {
        const video = await waitForVideo();
        const timeLeft = video.duration - video.currentTime;
        
        if (timeLeft <= 0.3) {
            skipShort();
        }
        if (isRunning) {
            requestAnimationFrame(checkVideoProgress);
        }
    } catch (error) {
        if (isRunning) {
            setTimeout(checkVideoProgress, 500);
        }
    }
}

async function startChecking() {
    if (!isRunning) {
        isRunning = true;
        await waitForVideo();
        checkVideoProgress();
    }
}

function stopChecking() {
    isRunning = false;
}

async function onUrlChange() {
    if (isYouTubeShortsPage()) {
        await startChecking();
    } else {
        stopChecking();
    }
}

// Initial check
onUrlChange();

// Listen for URL changes
let lastUrl = location.href;
new MutationObserver(async () => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        await onUrlChange();
    }
}).observe(document, {subtree: true, childList: true});

// Periodically check for Shorts page (in case URL doesn't change)
setInterval(async () => {
    if (isYouTubeShortsPage() && !isRunning) {
        await startChecking();
    }
}, 1000);
