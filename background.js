console.log("CADO Extention -> background.js loaded");

chrome.runtime.onInstalled.addListener((tab) => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  const nextState = prevState === "ON" ? "OFF" : "ON";

  // Set the action badge to the next state
  chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });
});
