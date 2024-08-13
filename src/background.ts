chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url?.includes('youtube.com/shorts/')) {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ['content.js']
        })
    }
})
