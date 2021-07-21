chrome.runtime.onInstalled.addListener(() => {
    console.log('Background script installed');
})

chrome.bookmarks.onCreated.addListener(() => {
    alert("bookmark saved")
})