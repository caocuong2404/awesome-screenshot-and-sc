var urlObj = new URLSearchParams(window.location.search),
  os = urlObj.get("os"),
  type = urlObj.get("type");
function showMessage(e, t, o) {
  var s = "";
  switch (t) {
    case "success":
      s =
        '<div class="success-message" style="box-sizing:content-box;padding: 10px 30px;height: 36px;text-align: center;background-color:rgba(0,0,0,.9);;color: white;position: fixed;left: 50%;top: 20px;transform:translateX(-50%);line-height: 36px;font-size:16px;font-weight:bold;border-radius: 4px;z-index: 9999;box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);">\n    <span class="mes-text">' +
        e +
        "</span></div>";
      break;
    case "error":
      s =
        '<div class="error-message" style="padding:0 20px;height: 40px;text-align: center;background-color: #FF7474;color: #FFFFFF;position: fixed;left: calc(50% - 184px);top: 80px;font-size:16px;line-height: 40px;border-radius: 8px;;z-index: 9999">\n    <span class="mes-text">' +
        e +
        "</span></div>";
  }
  var r = document.createElement("div");
  (r.innerHTML = s),
    document.body.appendChild(r),
    setTimeout(function () {
      document.querySelector("." + t + "-message").remove();
    }, o);
}
"browser_issue" === type
  ? ((document.querySelector("#restart-browser").style.display = "block"),
    document
      .querySelector("#click-copy")
      .addEventListener("click", function () {
        navigator.clipboard.writeText("chrome://restart"),
          showMessage("Copied to clipboard!", "success", 600);
      }))
  : "mac" === os
    ? (document.querySelector("#mac-content").style.display = "block")
    : "win" === os &&
    (document.querySelector("#win-content").style.display = "block");
