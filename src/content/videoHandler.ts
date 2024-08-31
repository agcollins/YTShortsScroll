import { isYouTubeShortsPage } from './util';
import { getIsRunning, setIsRunning } from './state';

export function skipShort() {
    const keyDownEvent = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        code: 'ArrowDown',
        keyCode: 40,
        which: 40,
        bubbles: true
    });
    document.dispatchEvent(keyDownEvent);
}

export function waitForVideo(timeout = 10000): Promise<HTMLVideoElement> {
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

export async function checkVideoProgress() {
    if (!isYouTubeShortsPage()) {
        setIsRunning(false);
        return;
    }

    try {
        const video = await waitForVideo();
        const timeLeft = video.duration - video.currentTime;
        
        if (timeLeft <= 0.3) {
            skipShort();
        }
        if (getIsRunning()) {
            requestAnimationFrame(checkVideoProgress);
        }
    } catch (error) {
        if (getIsRunning()) {
            setTimeout(checkVideoProgress, 500);
        }
    }
}
