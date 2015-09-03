//
// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     var newURL = "http://www.google.com";
//     chrome.tabs.create({ "url": newURL });
// });
//
// function onAttach(tabId) {
//   if (chrome.runtime.lastError) {
//     alert(chrome.runtime.lastError.message);
//     return;
//   }
//
//   chrome.windows.create(
//         {url: "headers.html?" + tabId, type: "popup", width: 800, height: 600});
// }
