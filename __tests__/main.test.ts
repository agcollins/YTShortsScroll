import { isYouTubeShortsPage } from '../src/content/util';

describe('YouTube Shorts Page Detection', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/shorts/some-video',
                hostname: 'www.youtube.com',
            },
            writable: true,
        });
    });

    test('should detect YouTube Shorts page', () => {
        expect(isYouTubeShortsPage()).toBe(true);
    });

    test('should not detect non-YouTube Shorts page', () => {
        window.location.pathname = '/watch?v=some-video';
        expect(isYouTubeShortsPage()).toBe(false);
    });
});