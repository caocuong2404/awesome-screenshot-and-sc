function sendMessage(e, n) {
  chrome.runtime.sendMessage(e, n);
}
function b64toBlob(e, n, t) {
  (n = n || ""), (t = t || 512);
  for (var o = atob(e), s = [], a = 0; a < o.length; a += t) {
    for (
      var i = o.slice(a, a + t), r = new Array(i.length), c = 0;
      c < i.length;
      c++
    )
      r[c] = i.charCodeAt(c);
    var l = new Uint8Array(r);
    s.push(l);
  }
  return new Blob(s, { type: n });
}
chrome.runtime.sendMessage({ action: "gmail-btn" }, function (e) {
  if (1 == e) {
    var n = null;
    InboxSDK.load("1", "sdk_awesome123_c41e75c401").then(function (e) {
      e.Compose.registerComposeViewHandler(function (e) {
        (n = e),
          e.addButton({
            title: "Insert a screen shot",
            iconUrl:
              "https://www.awesomescreenshot.com/awesomescreenshot_icon_64.png",
            onClick: function (e) {
              sendMessage({ action: "desktop", type: "gmail" });
            },
          });
      });
    }),
      chrome.runtime.onMessage.addListener(function (e, t, o) {
        if ("insertImage" == e.action) {
          var s = [
            b64toBlob(
              e.dataURL.split(",")[1],
              e.dataURL.split(",")[0].split(":")[1].split(";")[0]
            ),
          ];
          n.attachInlineFiles(s).then(function () { });
        }
      });
  }
});
