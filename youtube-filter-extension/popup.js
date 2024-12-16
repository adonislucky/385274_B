document.getElementById("filterButton").addEventListener("click", () => {
  const keyword = document.getElementById("keywordInput").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "filterRecommendations",
      keyword,
    });
  });
});
