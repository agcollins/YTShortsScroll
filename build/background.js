chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    var _a;
    if (changeInfo.status === 'complete' && ((_a = tab.url) === null || _a === void 0 ? void 0 : _a.includes('youtube.com/shorts/'))) {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ['content.js']
        });
    }
});
//# sourceMappingURL=background.js.map