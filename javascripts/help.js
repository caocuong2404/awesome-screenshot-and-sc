var a = document.getElementById("ext-page-link");
a.addEventListener("click", function () {
  chrome.tabs.create({ url: "chrome://extensions/?id=" + chrome.runtime.id });
});
