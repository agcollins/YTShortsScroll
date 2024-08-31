export function isYouTubeShortsPage(): boolean {
    return window.location.pathname.startsWith('/shorts/');
}

/**
 * Observes URL changes and calls the callback with the new URL.
 * @param callback - The function to call with the new URL.
 */
export function handleUrlChanges(callback: (newUrl: string) => Promise<void>) {
    let lastUrl = location.href;
    new MutationObserver(async () => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            await callback(url);
        }
    }).observe(document, {subtree: true, childList: true});
}
