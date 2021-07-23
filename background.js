// chrome.runtime.onInstalled.addListener(() => {
//     console.log('Background script installed');
// })

// chrome.bookmarks.onCreated.addListener(() => {
//     alert("bookmark saved")
// })

// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
//   }

let url

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({url: 'popup.html'});
  });

// chrome.tabs.query({lastFocusedWindow: true, active: true}, function(tabs){
//     console.log(tabs[0].url);
//     url = tabs[0].url;
//     console.log(url);
// });

// var views = chrome.extension.getViews({
//     type: "popup"
// });

