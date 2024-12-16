chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "filterRecommendations") {
    const keyword = request.keyword;
    const videos = document.querySelectorAll(
      "ytd-video-renderer, ytd-grid-video-renderer"
    );

    videos.forEach((video) => {
      const titleElement = video.querySelector("#video-title");
      const title = titleElement ? titleElement.textContent.toLowerCase() : "";
      if (!title.includes(keyword.toLowerCase())) {
        video.style.display = "none";
      } else {
        video.style.display = "block";
      }
    });
  }
});
