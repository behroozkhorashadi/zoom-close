/**
 * This is a content script
 * It is used to inject other scripts into
 * the opened windows
 *
 * Read more about content scripts:
 * https://developer.chrome.com/docs/extensions/mv2/content_scripts/
 */
console.log("Behrooz'ss content script");
// Function to send a message to the background script
function sendMessageToBackground() {
  chrome.runtime.sendMessage({ text: "hey" }, function (response) {
    console.log("Response: ", response);
  });
}

// Wait for 6 seconds before sending the message to the background script
setTimeout(sendMessageToBackground, 6000);
