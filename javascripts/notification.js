var Bg = chrome.extension.getBackgroundPage(),
  time = 60,
  interval = null;
function stop() {
  Bg.stopStream(), window.close();
}
(interval = setInterval(function () {
  time--,
    (document.querySelector("#timer").innerText = "00:" + time),
    0 === time && stop();
}, 1e3)),
  document.querySelector("#btn").addEventListener(
    "click",
    function () {
      clearInterval(interval), (interval = null), window.close();
    },
    !1
  );
