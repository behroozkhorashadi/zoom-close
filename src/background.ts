/**
 * This is a background script
 * It is running in the background process of chrome
 * You can debug it by clicking the "background page"
 * button in the extension settings
 *
 * Read more about background scripts:
 * https://developer.chrome.com/docs/extensions/mv2/background_pages/
 */

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
  if (sender.tab && sender.tab.id) {
    chrome.tabs.remove(sender.tab.id, function () {
      console.log("Tab closed: ", sender?.tab?.id);
    });
  }
  // sendResponse({ message: "hi to you" });
});
