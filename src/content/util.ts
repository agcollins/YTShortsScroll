export function isYouTubeShortsPage(): boolean {
    return window.location.pathname.startsWith('/shorts/');
}
