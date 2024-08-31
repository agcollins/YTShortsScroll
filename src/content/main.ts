import { waitForVideo, checkVideoProgress } from './videoHandler';
import { isYouTubeShortsPage, handleUrlChanges } from './util';
import { getIsRunning, setIsRunning } from './state';

async function startChecking() {
    if (!getIsRunning()) {
        setIsRunning(true);
        await waitForVideo();
        checkVideoProgress();
    }
}

function stopChecking() {
    setIsRunning(false);
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
handleUrlChanges(onUrlChange);