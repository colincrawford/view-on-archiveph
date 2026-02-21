chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) return;

  const archiveUrl = `https://archive.ph/${tab.url}`;

  chrome.tabs.create({
    url: archiveUrl,
    index: tab.index + 1,
  });
});
