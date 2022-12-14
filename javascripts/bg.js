var win,
  menuType,
  type,
  tabid,
  taburl,
  tabtitle,
  zoomLevel,
  counter,
  ratio,
  scrollBar,
  data,
  tempDataUrl,
  currentWindowId,
  currentTabId,
  currentTabIndex,
  request,
  dataURL = [],
  newClickVersion = "4.3.45",
  centerW = 0,
  centerH = 0,
  cameraStream = null,
  cameraDeviceId = "",
  currentRecordingTabId = "",
  currentRecordingTabTitle = "",
  currentRecordingTabUrl = "",
  tabCameraClosedManually = !1,
  isEmbedCamera = !1,
  isShowToolbar = !1,
  isShowAnn = !1,
  currentversion = chrome.runtime.getManifest().version,
  tabids = {},
  recordType = "",
  recordingStatus = "",
  cVideo = null,
  isShowAlertFeature = !1,
  customRecordOption = null,
  crop = null,
  recordRatio = 0,
  centerOffX = 0,
  centerOffY = 0,
  isCopyAction = !1,
  userAction = "annotate",
  desktopCaptureInterval = null,
  uploadQueues = {},
  isSaveOnLine = !1,
  temImageId = 1,
  personType = 0,
  isScrollCapturing = !1,
  curentCaptureTabid = -1,
  currentWindowHeight = 0,
  currentTemId = 0,
  userStop = !1,
  contentCanScroll = !1;
const maxCaptureHeight = 1e5;
var actionFrom = "",
  bgRegions = [],
  bottomClip = null,
  contentClip = null,
  topCapturePostion = null,
  devicePixelRatio = window.devicePixelRatio,
  scrollCatureTimes = [],
  contentInsertStatus = {},
  currentTabid = -1,
  premiumLevel_ = 0,
  isSignIn = !1,
  isIncognito = !1,
  toolbarSettings = {
    mouseMode: "mouse",
    currentMouse: "default",
    drawMode: "freeline",
    currentColor: "red",
    isCollapse: !1,
    isPaused: !1,
  },
  baseUrl = "https://www.awesomescreenshot.com";
function resetToolbarSettings() {
  toolbarSettings = {
    mouseMode: "mouse",
    currentMouse: "default",
    drawMode: "freeline",
    currentColor: "red",
    isCollapse: !1,
    isPaused: !1,
  };
}
function isBeforeVersion(e) {
  var t = localStorage.version,
    a = !1;
  if (t)
    for (var o = t.split("."), r = e.split("."), n = 0; n < o.length; n++)
      if (o[n] < r[n]) {
        a = !0;
        break;
      }
  return a;
}
function sendMessageToTab(e, t, a) {
  e && chrome.tabs.sendMessage(e, t, { frameId: 0 }, a);
}
function sendMessage(e, t) {
  chrome.runtime.sendMessage(e, t);
}
function getCurrentTab(e) {
  chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
    e(t[0]);
  });
}
(window.onload = function () {
  ((cVideo = document.querySelector("#camera-video")).onloadedmetadata =
    function () {
      cVideo.requestPictureInPicture();
    }),
    (cVideo.onleavepictureinpicture = function () {
      stopCameraStream();
    }),
    (cVideo.onemptied = function () {
      document.exitPictureInPicture().catch(function (e) { });
    });
}),
  getPersonType();
var isWindows = navigator.userAgent.indexOf("Windows") > 0;
if (localStorage.msObj) {
  var options = JSON.parse(localStorage.msObj),
    resetKey = !1;
  "R" == options.visible.key && ((options.visible.key = "V"), (resetKey = !0)),
    isWindows &&
    "V" == options.visible.key &&
    isBeforeVersion("4.3.40") &&
    ((options.visible.key = "1"), (resetKey = !0)),
    "R" == options.selected.key &&
    ((options.selected.key = "S"), (resetKey = !0)),
    "R" == options.entire.key && ((options.entire.key = "E"), (resetKey = !0)),
    resetKey && (localStorage.msObj = JSON.stringify(options));
} else
  localStorage.msObj = isWindows
    ? '{"visible":{"enable":true,"key":"1"},"selected":{"enable":true,"key":"S"},"entire":{"enable":true,"key":"E"}}'
    : '{"visible":{"enable":true,"key":"V"},"selected":{"enable":true,"key":"S"},"entire":{"enable":true,"key":"E"}}';
function insertFile(e, t, a) {
  return new Promise(function (o, r) {
    "css" === e
      ? chrome.tabs.insertCSS(t, { file: a }, function (e) {
        o(e);
      })
      : "script" === e &&
      chrome.tabs.executeScript(t, { file: a }, function (e) {
        o(e);
      });
  });
}
function broadCast(e, t) {
  "desktop" === recordType &&
    chrome.tabs.query({}, function (a) {
      a.forEach(function (a) {
        a.id !== t && sendMessageToTab(a.id, e);
      });
    });
}
function canSaveCloud(e) {
  "cloud" === localStorage["save-capture-location"]
    ? getUserSigninStatus(function (t) {
      t
        ? chrome.storage.local.get("userinfo", function (t) {
          t && t.userinfo.allowUploadImage
            ? e(!0)
            : getCookiePremiumLevel().then(function (t) {
              e(!!t);
            });
        })
        : e(!0);
    })
    : e(!0);
}
function getCookiePremiumLevel() {
  return new Promise(function (e, t) {
    chrome.cookies.get(
      { url: baseUrl, name: "screenshot_personal_premium_level" },
      function (t) {
        t && parseInt(t.value) >= 1 ? e(!0) : e(!1);
      }
    );
  });
}
function getCameraStream(e, t, a) {
  (cameraDeviceId = e),
    window.navigator.mediaDevices
      .getUserMedia({
        video: {
          deviceId: e,
          echoCancellation: !1,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })
      .then(function (e) {
        t(e);
      })
      .catch(function (e) {
        a && a(e);
      });
}
function isNotAcceptedTab(e) {
  return (
    e.match(/chrome(.*):\/\//) ||
    e.match(/edge(.*):\/\//) ||
    e.match(/chrome-extension:\/\//) ||
    e.match(/https:\/\/chrome.google.com\/webstore/i) ||
    e.match(/https:\/\/ntp.msn.cn\/edge\/ntp/i) ||
    (e.match(/about:blank/) && !1)
  );
}
function initToolbar() {
  "tab" === recordType || "custom" === recordType
    ? currentRecordingTabId
      ? insertContentScript(currentRecordingTabId).then(function () {
        sendMessageToTab(currentRecordingTabId, {
          action: "setup-toolbar",
          premiumLevel: canEnableAnn(),
          showAnn: isShowAnn,
          isRecorded,
          crop: "custom" === recordType ? crop : "",
        });
      })
      : getCurrentTab(function (e) {
        e &&
          (isNotAcceptedTab(e.url) ||
            (insertContentScript(e.id).then(function () {
              sendMessageToTab(e.id, {
                action: "setup-toolbar",
                premiumLevel: canEnableAnn(),
                showAnn: isShowAnn,
                isRecorded,
                crop: "custom" === recordType ? crop : "",
              });
            }),
              (currentRecordingTabId = e.id)));
      })
    : "desktop" === recordType &&
    chrome.tabs.query({}, function (e) {
      e.forEach(function (e) {
        insertContentScript(e.id)
          .then(function () {
            sendMessageToTab(e.id, {
              action: "setup-toolbar",
              premiumLevel: canEnableAnn(),
              showAnn: isShowAnn,
              isRecorded,
            });
          })
          .catch(function (e) { });
      });
    }),
    (isShowToolbar = !0),
    sendMessage({ action: "updateRecordUI" });
}
function sendDevicesToAll() {
  chrome.tabs.query({}, function (e) {
    e.forEach(function (e) {
      sendDevicesToTab(e.id);
    });
  });
}
function sendDevicesToTab(e) {
  sendMessageToTab(e, {
    action: "devices",
    data: {
      audios: availableAudioDevices.map((e) => ({
        deviceId: e.deviceId,
        label: e.label,
      })),
      cams: availableVideoDevices.map((e) => ({
        deviceId: e.deviceId,
        label: e.label,
      })),
      defaultMic: localStorage["mic-deviceId"]
        ? localStorage["mic-deviceId"]
        : "default",
      defaultCam: localStorage["cam-deviceId"]
        ? localStorage["cam-deviceId"]
        : "default",
    },
  });
}
function toggleCamera() {
  "camera" !== recordType &&
    (cameraStream
      ? stopCamera()
      : initCamera(
        localStorage["cam-deviceId"]
          ? localStorage["cam-deviceId"]
          : "default"
      ));
}
function changeCamDevice(e) {
  e !== cameraDeviceId &&
    videoStream &&
    "live" == videoStream.getVideoTracks()[0].readyState &&
    (stopCameraStream(), initCamera(e));
}
function initCamera(e) {
  getCameraStream(
    e,
    function (e) {
      if (
        ((cameraStream = e),
          sendMessage({ action: "updateRecordUI" }),
          cameraStream.getTracks().forEach(function (e) {
            "video" != e.kind ||
              localStorage["cam-deviceId"] ||
              ((localStorage["cam-deviceId"] = e.getSettings().deviceId),
                sendContentMessage("defaultDevice", {
                  defaultMic: localStorage["mic-deviceId"]
                    ? localStorage["mic-deviceId"]
                    : "default",
                  defaultCam: e.getSettings().deviceId,
                }));
          }),
          (cameraStatus = 2),
          sendContentMessage("updateRecordUI", {
            audStatus: audioStatus,
            camStatus: cameraStatus,
          }),
          "tab" === recordType || "custom" === recordType)
      )
        currentRecordingTabId
          ? sendMessageToTab(currentRecordingTabId, {
            action: "setup-camera",
            crop: "custom" === recordType ? crop : "",
          })
          : getCurrentTab(function (e) {
            isNotAcceptedTab(e.url)
              ? stopCameraStream()
              : (sendMessageToTab(e.id, {
                action: "setup-camera",
                crop: "custom" === recordType ? crop : "",
              }),
                (currentRecordingTabId = e.id));
          }),
          (isEmbedCamera = !0),
          (tabCameraClosedManually = !1);
      else {
        var t = document.querySelector("#camera-video");
        (t.srcObject = e), t.play();
      }
    },
    function (e) {
      (cameraStatus = 3),
        sendContentMessage("updateRecordUI", {
          audStatus: audioStatus,
          camStatus: cameraStatus,
        }),
        "NotAllowedError" === e.name && openNewTab("/getAccess.html");
    }
  );
}
function stopCamera() {
  stopCameraStream(),
    "tab" === recordType || "custom" === recordType
      ? sendMessageToTab(currentRecordingTabId, { action: "stop-camera" })
      : sendMessage({ action: "stop-camera" });
}
function stopCameraStream() {
  cameraStream &&
    (cameraStream.getTracks().forEach(function (e) {
      e.stop();
    }),
      (cameraStream = null),
      (cVideo.srcObject = null),
      sendMessage({ action: "updateRecordUI" }),
      (cameraStatus = 1),
      sendContentMessage("updateRecordUI", {
        audStatus: audioStatus,
        camStatus: cameraStatus,
      }));
}
function enablePriceCompare() {
  (localStorage.pcnotification = "true"),
    (localStorage.popupnotification = "true"),
    (localStorage.barnotification = "true"),
    (localStorage.show_feature_bar = "false"),
    refreshOptions();
}
function disablePriceCompare() {
  (localStorage.pcnotification = "false"),
    (localStorage.popupnotification = "false"),
    (localStorage.barnotification = "false"),
    "never" !== localStorage.show_feature_bar &&
    (localStorage.show_feature_bar = "true"),
    refreshOptions();
}
function sendDefaultDevice(e) {
  e &&
    sendMessageToTab(e, {
      action: "defaultDevice",
      data: {
        defaultMic: localStorage["mic-deviceId"]
          ? localStorage["mic-deviceId"]
          : "default",
        defaultCam: localStorage["cam-deviceId"]
          ? localStorage["cam-deviceId"]
          : "default",
      },
    });
}
function tryFinishCapture(e, t) {
  if (e == curentCaptureTabid && isScrollCapturing) {
    (userStop = !0),
      (counter = dataURL.length),
      (ratio = { x: 1, y: 1 }),
      (scrollBar = { x: !1, y: !0 }),
      sendMessageToTab(tabid, { action: "restorebar" });
    var a,
      o = currentTemId;
    if ("copy" == userAction) copySelectAction(e);
    else if (isAutoSaveOnline() && isSaveOnLine && currentTemId > 0)
      (a = getQueueByImageId(currentTemId)) ||
        ((a = new UploadQueue(o)), (uploadQueues[currentTemId] = a)),
        a.finishCapture(),
        sendMessageToTab(tabid, { action: "destroy_selected" });
    else newTab();
    if (o > 0)
      (a = getQueueByImageId(o)) && !a.imageUrl
        ? (a.errMsg = a.errMsg ? a.errMsg + t + " " : t + " ")
        : a &&
        uploadLog(a.imageId, {
          clientCreateTime: a.clientCreateTime,
          errMsg: a.errMsg + t + " ",
        });
  }
}
function captureVisible() {
  (type = "visible"),
    (dataURL = []),
    getSelectedTab(function () {
      var t = 0;
      "save" == userAction &&
        ((t = ++temImageId), initImageId(tabtitle, taburl, e, t));
      chrome.permissions.request({ permissions: ["activeTab"] }, function (a) {
        chrome.windows.update(currentWindowId, { focused: !0 }, function () {
          chrome.tabs.update(currentTabId, { active: !0 }, function () {
            chrome.tabs.captureVisibleTab(
              null,
              { format: "png" },
              function (a) {
                if (a) {
                  var o = document.createElement("IMG");
                  if (((o.src = a), dataURL.push(o), "copy" == userAction))
                    copySelectAction(currentTabId);
                  else if ("save" == userAction) {
                    if (
                      (sendMessageToTab(tabid, { action: "destroy_selected" }),
                        !isAutoSaveOnline() || !isSaveOnLine)
                    )
                      return void newTab();
                    getQueueByImageId(t) ||
                      (uploadQueues[t] = new UploadQueue(t)),
                      handleCurrentCapture(o, 1, !0, t);
                  } else {
                    if (!isAutoSaveOnline() && 0 == centerW)
                      return void newTab();
                    sendMessageToTab(tabid, {
                      action: "dataURL",
                      dataURL: a,
                      cl: centerOffX,
                      ct: centerOffY,
                      ch: centerH,
                      cw: centerW,
                      incognito: isIncognito,
                      userAction,
                      autoOnline: !0,
                      actionType: e,
                      format: localStorage.format,
                    });
                  }
                }
              }
            );
          });
        });
      });
    });
  var e = "visible";
  "selected" == menuType && (e = "visible_selected");
}
function getUserSigninStatus(e) {
  chrome.cookies.get(
    { url: baseUrl, name: "screenshot_personal_uid" },
    function (t) {
      t ? e && e(!0) : e && e(!1);
    }
  );
}
function getPersonType(e) {
  chrome.cookies.get(
    { url: baseUrl, name: "screenshot_personal_type" },
    function (t) {
      (personType = t ? t.value : 0), e && e(personType);
    }
  );
}
function isAutoSaveOnline() {
  return "local" !== localStorage["save-capture-location"];
}
function getCaptureSatus() {
  var e = !0;
  for (var t in uploadQueues) {
    uploadQueues[t].captureFinish || (e = !1);
  }
  return e;
}
function copySelectAction(e) {
  googleEvent("copy", "in_page"),
    (userAction = ""),
    (isScrollCapturing = !1),
    sendMessageToTab(e, { action: "destroy_selected" }),
    dataURLGenerator(
      menuType,
      type,
      centerOffX,
      centerOffY,
      centerW,
      centerH,
      counter,
      ratio,
      scrollBar,
      dataURL,
      function (t) {
        sendMessageToTab(e, { action: "copytoclipboard", obj: t });
      }
    );
}
function dataURLGenerator(e, t, a, o, r, n, c, i, s, l, d) {
  var u,
    p,
    m,
    g,
    b,
    h,
    f,
    S = document.createElement("IMG"),
    v = document.createElement("canvas"),
    T = v.getContext("2d"),
    y = getScrollbarWidth(),
    w = 0,
    C = 0;
  function I() {
    (v.width = m), (v.height = g);
  }
  (S.onload = function () {
    switch (((u = this.width), (p = this.height), t)) {
      case "visible":
        if ("selected" === e) {
          if (
            topCapturePostion &&
            parseInt(topCapturePostion.height) > p + 10 &&
            "selected" === e
          ) {
            var k = topCapturePostion.width / u;
            (r /= k), (n /= k), (a /= k), (o /= k);
          }
          (m = r), (g = n), (U = a), (D = o);
        } else
          "desktop" === e || "upload" === e
            ? ((m = u), (g = p), (U = 0), (D = 0))
            : ((m = u - y), (g = p), (U = 0), (D = 0));
        I(), T.drawImage(this, U, D, m, g, 0, 0, m, g), d(v.toDataURL());
        break;
      case "entire":
        var R = (C = w = 0),
          A = l.length,
          _ = c,
          x = Math.round(A / _);
        function L(e, t, a, o, r, n, c, i, s) {
          e
            ? ((c = R * p),
              R == x - 1 && ((a = p - b), (r = s = b)),
              (S.onload = function () {
                T.drawImage(this, t, a, o, r, n, c, i, s),
                  ++R > x - 1 && M(),
                  L(l[++w], t, a, o, r, n, c, i, s);
              }),
              (S.src = e.src))
            : d(v.toDataURL());
        }
        function M() {
          ++C > _ - 1 ||
            (C == _ - 1
              ? ((U = u - undefined), (O = h = m - C * u), (j = C * u))
              : ((U = 0), (O = h = u), (j = C * u)),
              (D = 0),
              (W = f = p),
              (E = 0),
              L(l[(w = (R = 0) + C * x)], U, D, O, W, j, E, h, f));
        }
        if (!s.x && s.y) {
          (x = A),
            (b = p * i.y),
            (m = "selected" == e ? r : u),
            (g = b ? p * (x - 1) + b : p * x),
            I();
          var U = 0,
            O = (h = u),
            j = 0,
            D = 0,
            W = (f = p),
            E = 0;
          "selected" == e && a && (U = a), L(l[w], U, D, O, W, j, E, h, f);
        }
    }
  }),
    (S.src = l[0].src);
}
function getScrollbarWidth() {
  var e = document.createElement("p");
  (e.style.width = "100%"), (e.style.height = "200px");
  var t = document.createElement("div");
  (t.style.position = "absolute"),
    (t.style.top = "0px"),
    (t.style.left = "0px"),
    (t.style.visibility = "hidden"),
    (t.style.width = "200px"),
    (t.style.height = "150px"),
    (t.style.overflow = "hidden"),
    t.appendChild(e),
    document.body.appendChild(t);
  var a = e.offsetWidth;
  t.style.overflow = "scroll";
  var o = e.offsetWidth;
  return a == o && (o = t.clientWidth), document.body.removeChild(t), a - o;
}
function isAllowContentJs() {
  return new Promise(function (e, t) {
    getCurrentTab(function (t) {
      if (t) {
        var a = t.url,
          o = !0;
        /Edg/.test(window.navigator.userAgent)
          ? a.match(/https:\/\/microsoftedge.microsoft.com\/addons/i) &&
          (o = !1)
          : (a.match(/https:\/\/chrome.google.com/i) ||
            a.match(/chrome(.*):\/\//) ||
            a.match(/chrome-extension:\/\//)) &&
          (o = !1),
          /http|https|file|ftp/.test(a.slice(0, 5)) || (o = !1),
          e(o);
      }
    });
  });
}
function captureVisibled() {
  (type = "visible"),
    isAllowContentJs().then(function (e) {
      e
        ? getSelectedTab(checkContentScript)
        : ((userAction = "save"), (contentCanScroll = !1), captureVisible());
    });
}
function captureDelayed() {
  (type = "delay"),
    getSelectedTab(checkContentScript),
    isAllowContentJs().then(function (e) {
      e ? getSelectedTab(checkContentScript) : delayWithNoContent();
    });
}
function delayWithNoContent() {
  var e = parseInt(localStorage.delay_sec);
  chrome.browserAction.setBadgeText({ text: e + "" }),
    e--,
    (desktopCaptureInterval = setInterval(function () {
      0 !== e
        ? (chrome.browserAction.setBadgeText({ text: e + "" }), e--)
        : (clearInterval(desktopCaptureInterval),
          chrome.browserAction.setBadgeText({ text: "" }),
          setTimeout(function () {
            (userAction = "save"), (contentCanScroll = !1), captureVisible();
          }, 300));
    }, 1e3));
}
function captureSelected() {
  (type = "selected"), getSelectedTab(checkContentScript);
}
function captureEntire() {
  (type = "entire"), getSelectedTab(checkContentScript);
}
function getSelectedTab(e) {
  getCurrentTab(function (t) {
    (tabid = t.id),
      (taburl = t.url),
      (tabtitle = t.title),
      (isIncognito = t.incognito),
      chrome.tabs.getZoom(t.id, function (t) {
        (zoomLevel = t), null != e && e();
      });
  });
}
function insertContentScript(e) {
  return new Promise(function (t, a) {
    chrome.tabs.executeScript(
      e,
      { code: 'typeof isContentScriptLoaded === "undefined"' },
      function (o) {
        chrome.runtime.lastError ||
          (o
            ? o[0]
              ? contentInsertStatus[e]
                ? setTimeout(() => {
                  t();
                }, 250)
                : ((contentInsertStatus[e] = !0),
                  insertFile(
                    "script",
                    e,
                    "javascripts/libs/jquery-3.4.0.min.js"
                  )
                    .then(
                      insertFile("script", e, "javascripts/libs/dragresize.js")
                    )
                    .then(
                      insertFile("script", e, "javascripts/jquery.draggable.js")
                    )
                    .then(
                      insertFile(
                        "script",
                        e,
                        "javascripts/libs/jquery-ui-custom.min.js"
                      )
                    )
                    .then(insertFile("css", e, "stylesheets/selected.css"))
                    .then(
                      insertFile(
                        "script",
                        e,
                        "javascripts/bundles/content.bundle.js"
                      )
                    )
                    .then(function () {
                      delete contentInsertStatus[e], t();
                    }))
              : t()
            : a && a());
      }
    );
  });
}
function checkContentScript() {
  chrome.tabs.executeScript(tabid, { file: "javascripts/isload.js" });
}
function saveAndScroll(e, t, a) {
  pushDataURL(e, t);
}
function pushDataURL1(e) {
  return new Promise(function (t, a) {
    chrome.tabs.update(e, { active: !0 }, function (e) {
      chrome.tabs.captureVisibleTab(
        e.windowId,
        { format: "png" },
        function (e) {
          chrome.runtime.lastError ? a("captureError") : t(e);
        }
      );
    });
  });
}
function prepareCapture(e, t, a) {
  var o = document.createElement("CANVAS"),
    r = o.getContext("2d"),
    n = document.createElement("IMG");
  (n.onload = function () {
    var e = this.width;
    this.height;
    (o.width = e),
      (o.height = t.height),
      r.drawImage(this, t.x, t.y, t.width, t.height, t.x, 0, t.width, t.height),
      o.toBlob(function (e) {
        a(e);
      });
  }),
    (n.src = e);
}
function handleCaptureDelayTime(e) {
  var t = Date.now();
  scrollCatureTimes.push(e);
  var a = t - e;
  if (a >= 1e3) return 0;
  var o = scrollCatureTimes.length;
  if (1 === o) return a >= 400 ? 0 : a > 250 ? 100 : 250;
  var r = e - scrollCatureTimes[o - 2] + a;
  if (r > 1e3) return 0;
  var n = 1020 - r;
  return n < 50 ? 50 : n;
}
function pushDataURL(e, t) {
  var a = Date.now();
  chrome.tabs.update(e, { active: !0 }, function (o) {
    chrome.tabs.captureVisibleTab(o.windowId, { format: "png" }, function (o) {
      var r = !1;
      if (o) {
        var n = document.createElement("IMG");
        if (((n.src = o), dataURL.push(n), "save" == userAction))
          try {
            if (
              isAutoSaveOnline() &&
              dataURL.length >= 2 &&
              isSaveOnLine &&
              t > 0
            ) {
              var c = dataURL.length;
              (i = getQueueByImageId(t)) ||
                ((i = new UploadQueue(t)), (uploadQueues[t] = i)),
                i.height < ("image/png" == i.format ? 1e5 : 6e4) &&
                  !i.captureFinish
                  ? ((i.height += currentWindowHeight),
                    handleCurrentCapture(
                      dataURL[c - 2],
                      dataURL.length - 1,
                      !1,
                      t
                    ))
                  : tryFinishCapture(e, "maxHeight");
            }
          } catch (e) {
            (i = getQueueByImageId(t)) &&
              (i.imageUrl
                ? uploadLog(i.imageId, {
                  clientCreateTime: i.clientCreateTime,
                  errMsg: e.toString() + "pushDataURL; " + i.errMsg,
                })
                : (i.errMsg = i.errMsg
                  ? i.errMsg + e.toString() + "pushDataURL; "
                  : e.toString() + "pushDataURL; "));
          }
      } else {
        var i;
        if (
          RegExp(/MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND/).test(
            chrome.runtime.lastError.message
          )
        )
          r = !0;
        else
          (i = getQueueByImageId(t)) &&
            (i.imageUrl
              ? uploadLog(i.imageId, {
                clientCreateTime: i.clientCreateTime,
                errMsg: " chrome.tabs.captureVisibleTab; " + i.errMsg,
              })
              : (i.errMsg = i.errMsg
                ? i.errMsg + " chrome.tabs.captureVisibleTab; "
                : " chrome.tabs.captureVisibleTab; "));
      }
      if (r)
        setTimeout(() => {
          pushDataURL(e, t);
        }, 100);
      else {
        var s = handleCaptureDelayTime(a);
        userStop ||
          (0 === s
            ? sendMessageToTab(e, { action: "scroll_next", captureTime: a })
            : setTimeout(() => {
              sendMessageToTab(e, { action: "scroll_next", captureTime: a });
            }, s));
      }
    });
  });
}
function updateShortcutsRequest(e) {
  sendMessageToTab(e, {
    action: "update_shortcuts",
    msObj: localStorage.msObj,
  });
}
function openNewTab(e) {
  getCurrentTab(function (t) {
    var a = { url: e };
    (t && t.incognito) || !t
      ? chrome.windows.getAll(function (e) {
        e.forEach(function (e) {
          e.incognito || "normal" !== e.type || (a.windowId = e.id);
        }),
          createTabWithInfo(a);
      })
      : ((a.index = (t ? t.index : currentTabIndex || 0) + 1),
        (a.windowId = t ? t.windowId : currentWindowId),
        createTabWithInfo(a));
  });
}
function createTabWithInfo(e) {
  e &&
    e.url &&
    (e.hasOwnProperty("index") && !e.index && delete e.index,
      chrome.tabs.create(e, function (e) {
        (tabids[e.id] = tabid),
          (tabid = e.id),
          chrome.windows.update(e.windowId, { focused: !0 }),
          sendMessage({ action: "closeWin" });
      }));
}
function newTab(e) {
  if (((isScrollCapturing = !1), (currentTemId = 0), dataURL))
    if (
      ("selected" == menuType &&
        sendMessageToTab(tabid, { action: "destroy_selected" }),
        "true" == localStorage.autoSave)
    )
      prepareImage();
    else {
      if (e && "gmail" == e.type)
        var t = "edit-react.html?" + e.type + "=" + e.tabId;
      else t = "edit-react.html";
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (a) {
        if (a && a.length) {
          if (e && e.tabId) var o = a[0].index;
          else o = a[0].index + 1;
          var r = { url: t };
          a[0].incognito || (r.index = o);
        } else r = { url: t, index: currentTabIndex + 1, windowId: currentWindowId };
        createTabWithInfo(r);
      });
    }
  else alert("Screen Capture Fail!!");
}
function prepareImage() {
  var e,
    t,
    a = document.getElementById("tempCanvas"),
    o = a.getContext("2d"),
    r = document.getElementById("test_image"),
    c = (document.getElementById("temp_image"), 17),
    i = function () {
      var s, l;
      if (((e = r.width), (t = r.height), "visible" == type))
        "selected" == menuType
          ? ((s = centerW), (l = centerH), (S = centerOffX), (y = centerOffY))
          : ((s = r.width), (l = r.height), (S = 0), (y = 0)),
          $("#tempCanvas").attr({ width: s, height: l }),
          o.drawImage(r, S, y, s, l, 0, 0, s, l),
          "jpg" == localStorage.format
            ? (tempDataUrl = a.toDataURL("image/jpeg"))
            : "png" == localStorage.format && (tempDataUrl = a.toDataURL()),
          document
            .getElementById("pluginobj")
            .AutoSave(
              tempDataUrl,
              tabtitle.replace(/[#$~!@%^&*();'"?><\[\]{}\|,:\/=+-]/g, " "),
              localStorage.savePath
            ),
          setTimeout(function () {
            getCurrentTab(function (e) {
              sendMessageToTab(e.id, {
                action: "finishAutoSave",
                path: localStorage.savePath,
              });
            }),
              sendMessage({ action: "closeWin" });
          }, 1e3);
      else if ("entire" == type || "selected" == type) {
        var d = dataURL,
          u = (j = n = 0),
          p = d.length,
          m = counter,
          g = Math.round(p / m);
        function b(e, a, r, c, i, s, l, p, m) {
          (l = u * t),
            u == g - 1 && ((r = t - lastH), (i = m = lastH)),
            $("#temp_image")
              .attr({ src: e })
              .load(function () {
                $(this).unbind("load"),
                  o.drawImage(this, a, r, c, i, s, l, p, m),
                  ++u > g - 1 ? f() : b(d[++n], a, r, c, i, s, l, p, m);
              });
        }
        function h() {
          $(a).attr({ width: s, height: l });
        }
        function f() {
          if (++j > m - 1) {
            var o = document.getElementById("pluginobj");
            return (
              "jpg" == localStorage.format
                ? (tempDataUrl = a.toDataURL("image/jpeg"))
                : "png" == localStorage.format && (tempDataUrl = a.toDataURL()),
              o.AutoSave(
                tempDataUrl,
                tabtitle.replace(/[#$~!@%^&*();'"?><\[\]{}\|,:\/=+-]/g, " "),
                localStorage.savePath
              ),
              void setTimeout(function () {
                getCurrentTab(function (e) {
                  sendMessageToTab(e.id, {
                    action: "finishAutoSave",
                    path: localStorage.savePath,
                  });
                }),
                  sendMessage({ action: "closeWin" });
              }, 1e3)
            );
          }
          j == m - 1
            ? ((S = e - lastW), (v = dw = s - j * e), (T = j * e))
            : ((S = 0), (v = dw = e), (T = j * e)),
            (y = 0),
            (w = dh = t),
            (C = 0),
            (u = 0),
            (n = u + j * g),
            b(d[n], S, y, v, w, T, C, dw, dh);
        }
        if (!scrollBar.x && scrollBar.y) {
          (e -= c),
            (g = p),
            (lastH = t * ratio.y),
            "selected" == menuType
              ? (scrollBar.realX && (t -= c), (s = centerW))
              : (s = e),
            (l = lastH ? t * (g - 1) + lastH : t * g),
            h();
          var S = 0,
            v = (dw = e),
            T = 0,
            y = 0,
            w = (dh = t),
            C = 0;
          b(d[n], S, y, v, w, T, C, dw, dh);
        }
        if (scrollBar.x && !scrollBar.y) {
          (t -= c),
            (m = p),
            (lastW = e * ratio.x),
            "selected" == menuType
              ? (scrollBar.realY && (e -= c), (l = centerH))
              : (l = t),
            (s = lastW ? e * (m - 1) + lastW : e * m),
            h();
          (S = 0), (v = dw = e), (T = 0), (y = 0), (w = dh = t), (C = 0);
          !(function t(a, r, n, c, i, s, l, u, p, g) {
            (s = j * e),
              j == m - 1 && ((r = e - lastW), (c = u = lastW)),
              $("#temp_image")
                .attr({ src: a })
                .load(function () {
                  $(this).unbind("load"),
                    o.drawImage(this, r, n, c, i, s, l, u, p),
                    j < m - 1 && t(d[++j], r, n, c, i, s, l, u, p);
                });
          })(d[n], S, y, v, w, T, C, dw, dh);
        }
        if (scrollBar.x && scrollBar.y) {
          (lastW = e * ratio.x),
            (lastH = t * ratio.y),
            (e -= c),
            (t -= c),
            "selected" == menuType
              ? ((s = centerW), (l = centerH))
              : ((s = lastW ? e * (m - 1) + lastW : e * m),
                (l = lastH ? t * (g - 1) + lastH : t * g)),
            h();
          (S = 0), (v = dw = e), (T = 0), (y = 0), (w = dh = t), (C = 0);
          b(d[n], S, y, v, w, T, C, dw, dh);
        }
      }
      (dataURL = []), r.removeEventListener("onload", i, !1), (r.src = "");
    };
  (r.onload = i), (r.src = dataURL[0]);
}
function loadFeatureStatus() {
  currentversion !== localStorage.installVersion &&
    $.ajax({
      type: "GET",
      contentType: "application/json",
      url: baseUrl + "/api/v1/common/feature",
      success: function (e) {
        isShowAlertFeature = !(1 !== e.code || !e.data) && e.data.backupPopUp;
      },
      error: function (e) {
        isShowAlertFeature = !1;
      },
    });
}
function beginDesktop(e) {
  chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], function (t) {
    if (t) {
      var a = {
        audio: !1,
        video: {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: t,
            maxWidth: 3840,
            maxHeight: 2160,
          },
        },
      };
      window.navigator.mediaDevices.getUserMedia(a).then(
        function (t) {
          if (0 == currentTemId) {
            if (((type = "visible"), (menuType = "desktop"), (centerW = 0), e))
              isSaveOnLine = !1;
            else {
              var a = ++temImageId;
              initImageId("Desktop screenshot", "", "desktop", a);
            }
            var o = document.createElement("video");
            o.setAttribute("autoplay", "true"),
              o.addEventListener(
                "play",
                function () {
                  if (parseInt(localStorage.desktop_delay_sec) > 0) {
                    t.getVideoTracks()[0].onended = function () {
                      desktopCaptureInterval &&
                        (clearInterval(desktopCaptureInterval),
                          chrome.browserAction.setBadgeText({ text: "" }));
                    };
                    var r = parseInt(localStorage.desktop_delay_sec);
                    chrome.browserAction.setBadgeText({ text: r + "" }),
                      r--,
                      (desktopCaptureInterval = setInterval(function () {
                        0 !== r
                          ? (chrome.browserAction.setBadgeText({
                            text: r + "",
                          }),
                            r--)
                          : (clearInterval(desktopCaptureInterval),
                            chrome.browserAction.setBadgeText({ text: "" }),
                            setTimeout(function () {
                              var r = document.createElement("canvas"),
                                n = r.getContext("2d");
                              (r.width = o.videoWidth),
                                (r.height = o.videoHeight),
                                n.drawImage(o, 0, 0, r.width, r.height),
                                (dataURL = []);
                              var c = document.createElement("IMG");
                              if (
                                ((c.src = r.toDataURL()),
                                  dataURL.push(c),
                                  o.pause(),
                                  (o.srcObject = null),
                                  t.getVideoTracks()[0].stop(),
                                  $(o).remove(),
                                  $(r).remove(),
                                  (tabtitle = "Desktop screenshot"),
                                  (type = "visible"),
                                  (menuType = "desktop"),
                                  (centerW = 0),
                                  isAutoSaveOnline() && isSaveOnLine)
                              ) {
                                var i = getQueueByImageId(a);
                                i ||
                                  ((i = new UploadQueue(a)),
                                    (uploadQueues[a] = i)),
                                  handleCurrentCapture(c, 1, !0, a);
                              } else e ? newTab({ type: "gmail", tabId: e }) : newTab();
                            }, 300));
                      }, 1e3));
                  } else
                    setTimeout(function () {
                      var r = document.createElement("canvas"),
                        n = r.getContext("2d");
                      (r.width = o.videoWidth),
                        (r.height = o.videoHeight),
                        n.drawImage(o, 0, 0, r.width, r.height),
                        (dataURL = []);
                      var c = document.createElement("IMG");
                      if (
                        ((c.src = r.toDataURL()),
                          dataURL.push(c),
                          o.pause(),
                          (o.srcObject = null),
                          t.getVideoTracks()[0].stop(),
                          $(o).remove(),
                          $(r).remove(),
                          (tabtitle = "Desktop screenshot"),
                          (type = "visible"),
                          (menuType = "desktop"),
                          (centerW = 0),
                          isAutoSaveOnline() && isSaveOnLine)
                      ) {
                        var i = getQueueByImageId(a);
                        i || ((i = new UploadQueue(a)), (uploadQueues[a] = i)),
                          handleCurrentCapture(c, 1, !0, a);
                      } else e ? newTab({ type: "gmail", tabId: e }) : newTab();
                    }, 300);
                },
                !1
              ),
              (o.srcObject = t);
          }
        },
        function (e) {
          alert(e);
        }
      );
    }
  });
}
localStorage.format || (localStorage.format = "png"),
  localStorage.delay_sec || (localStorage.delay_sec = 3),
  localStorage.desktop_delay_sec || (localStorage.desktop_delay_sec = 0),
  localStorage["remove-print-watermark"] ||
  (localStorage["remove-print-watermark"] = !1),
  localStorage["data-tracking"] || (localStorage["data-tracking"] = !0),
  localStorage["add-url"] || (localStorage["add-url"] = !1),
  localStorage["expand-link"] || (localStorage["expand-link"] = !0),
  localStorage["expand-link-slack"] || (localStorage["expand-link-slack"] = !0),
  localStorage["expand-link-trello"] ||
  (localStorage["expand-link-trello"] = !0),
  localStorage["expand-link-asana"] || (localStorage["expand-link-asana"] = !0),
  localStorage["expand-link-github"] ||
  (localStorage["expand-link-github"] = !0),
  localStorage["expand-link-jira"] || (localStorage["expand-link-jira"] = !0),
  localStorage["expand-link-gmail"] || (localStorage["expand-link-gmail"] = !1),
  localStorage["auto-save-path"] || (localStorage["auto-save-path"] = !0),
  localStorage.aws_s &&
  32 !== localStorage.aws_s.length &&
  ((localStorage.aws_s = ""),
    (localStorage.aws_uid = ""),
    (localStorage.aws_username = "")),
  localStorage["show-noti"] || (localStorage["show-noti"] = !0),
  localStorage.popupTab || localStorage.version
    ? isBeforeVersion("4.3.33") &&
    ("record" === localStorage.popupTab
      ? ((localStorage.popupTab = "remember"),
        (localStorage.activeTab = "record"))
      : ((localStorage.popupTab = "remember"),
        (localStorage.activeTab = "screenshot")))
    : ((localStorage.popupTab = "remember"),
      (localStorage.activeTab = "record")),
  localStorage["save-as"] || (localStorage["save-as"] = !0),
  localStorage["allow-remind-mic"] || (localStorage["allow-remind-mic"] = !0),
  localStorage.record_mic || (localStorage.record_mic = !0),
  localStorage.record_countdown || (localStorage.record_countdown = 3),
  localStorage.max_resolution ||
  (window.screen.width * window.devicePixelRatio > 3e3
    ? (localStorage.max_resolution = "1080")
    : (localStorage.max_resolution = "720")),
  localStorage["save-location"]
    ? localStorage["save-capture-location"] ||
    (localStorage["save-capture-location"] = "local")
    : ((localStorage["save-location"] = "cloud"),
      (localStorage["save-capture-location"] = "cloud")),
  localStorage.record_tabsound || (localStorage.record_tabsound = !0),
  localStorage.record_toolbar || (localStorage.record_toolbar = !0),
  localStorage.record_type || (localStorage.record_type = "desktop"),
  localStorage["gmail-btn"] || (localStorage["gmail-btn"] = "true"),
  localStorage.ctl_bar || (localStorage.ctl_bar = "true"),
  $(document).ready(function () { }),
  (localStorage.autoSave = "false"),
  chrome.runtime.onMessage.addListener(function (e, t, a) {
    switch (
    (getCurrentTab(function (t) {
      t &&
        ((/chrome-extension:\/\/nlipoenfbbikpbjkfpfillcgkoblgpmj/.test(
          t.url
        ) &&
          "visible" != e.action) ||
          ((currentWindowId = t.windowId),
            (currentTabId = t.id),
            (currentTabIndex = t.index)));
    }),
      (t.tab &&
        -1 != t.tab.id &&
        "visible" != e.action &&
        "selected" != e.action &&
        "entire" != e.action &&
        "delay" !== e.action) ||
      (isScrollCapturing ||
        ((menuType = e.action), e.menuType && (menuType = e.menuType)),
        (actionFrom = e.actionFrom),
        ("visible" != e.action &&
          "selected" != e.action &&
          "entire" != e.action &&
          "delay" !== e.action) ||
        ((bgRegions = []),
          (contentClip = null),
          (bottomClip = null),
          (topCapturePostion = null)),
        checkLoalStuff()),
      e.action)
    ) {
      case "visible":
        (isScrollCapturing && "entire" != e.menuType) ||
          ("selected" == (menuType = e.menuType)
            ? ((type = "visible"),
              e.centerW &&
              ((centerW = e.centerW),
                (centerH = e.centerH),
                e.data && ((centerOffX = e.data.x), (centerOffY = e.data.y))))
            : ((centerOffY = 0),
              (centerOffX = 0),
              (centerW = 0),
              (centerH = 0),
              (userAction = "annotate"),
              "entire" == menuType && (isScrollCapturing = !1)),
            (dataURL = []),
            captureVisibled());
        break;
      case "selected":
        isScrollCapturing || ((dataURL = []), captureSelected());
        break;
      case "entire":
        isScrollCapturing ||
          ((dataURL = []),
            (centerOffY = 0),
            (centerOffX = 0),
            (centerW = 0),
            (centerH = 0),
            (userAction = "save"),
            captureEntire());
        break;
      case "delay":
        captureDelayed();
        break;
      case "https":
        alert(
          "For security reason, Capture Selected Area doesn't work in https pages! Please try other options."
        );
      case "insert_script":
        insertFile("script", tabid, "javascripts/libs/jquery-3.4.0.min.js")
          .then(insertFile("script", tabid, "javascripts/libs/dragresize.js"))
          .then(insertFile("script", tabid, "javascripts/jquery.draggable.js"))
          .then(
            insertFile(
              "script",
              tabid,
              "javascripts/libs/jquery-ui-custom.min.js"
            )
          )
          .then(insertFile("css", tabid, "stylesheets/selected.css"))
          .then(
            insertFile("script", tabid, "javascripts/bundles/content.bundle.js")
          )
          .then(function () {
            isScrollCapturing ||
              ("delay" === type
                ? sendMessageToTab(tabid, {
                  action: "delay-capture",
                  sec: localStorage.delay_sec,
                })
                : "visible" == type
                  ? captureVisible()
                  : ("entire" == menuType && (isScrollCapturing = !0),
                    sendMessageToTab(tabid, {
                      action: "init_" + menuType + "_capture",
                      autoOnline: isAutoSaveOnline(),
                    })));
          });
        break;
      case "script_running":
        isScrollCapturing ||
          ("delay" === type
            ? sendMessageToTab(tabid, {
              action: "delay-capture",
              sec: localStorage.delay_sec,
            })
            : "visible" == type
              ? captureVisible()
              : ("entire" == menuType && (isScrollCapturing = !0),
                sendMessageToTab(tabid, {
                  action: "init_" + type + "_capture",
                  autoOnline: isAutoSaveOnline(),
                })));
        break;
      case "check_shortcuts":
        updateShortcutsRequest(t.tab.id);
        break;
      case "update_shortcuts":
        chrome.tabs.getAllInWindow(null, function (e) {
          for (var t = 0, a = e.length; t < a; t++) {
            var o = e[t],
              r = o.url;
            r.match(/https?:\/\/*\/*/gi) &&
              !r.match(/https:\/\/chrome.google.com\/extensions/i) &&
              updateShortcutsRequest(o.id);
          }
        });
        break;
      case "scroll_next_done":
        null != e.userAction && (userAction = e.userAction),
          (type = "entire"),
          ("selected" != menuType && "selected" != e.menuType) ||
          ((menuType = "selected"),
            e.centerW &&
            ((centerW = e.centerW),
              (centerH = e.centerH),
              e.data && ((centerOffX = e.data.x), (centerOffY = e.data.y))));
        var o = !1;
        e.isFirstScroll &&
          ((userStop = !1),
            (o = !0),
            (isSaveOnLine = !1),
            (isScrollCapturing = !0),
            (curentCaptureTabid = t.tab.id),
            (currentWindowHeight = e.windowHeight),
            (bgRegions = e.bgRegions),
            (contentClip = e.contentClip),
            (bottomClip = e.bottomClip),
            (topCapturePostion = e.topCapturePostion),
            (devicePixelRatio = e.devicePixelRatio),
            (scrollCatureTimes = []),
            (dataURL = []),
            "save" == userAction &&
            ((currentTemId = ++temImageId),
              initImageId(
                tabtitle,
                taburl,
                "selected" == menuType ? "entire_selected" : "entire",
                currentTemId,
                e.mark
                  ? actionFrom + " tabid:" + currentTabId + " mark:" + e.mark
                  : actionFrom + " tabid:" + currentTabId
              ))),
          saveAndScroll(curentCaptureTabid, currentTemId, o);
        break;
      case "entire_capture_done":
        if (
          ((counter = e.counter),
            (ratio = e.ratio),
            (scrollBar = e.scrollBar),
            (type = "entire"),
            (scrollCatureTimes = []),
            "selected" == menuType &&
            e.centerW &&
            ((centerW = e.centerW),
              (centerH = e.centerH),
              e.data && ((centerOffX = e.data.x), (centerOffY = e.data.y))),
            sendMessageToTab(curentCaptureTabid || currentTabId, {
              action: "restorebar",
            }),
            "copy" == userAction)
        )
          copySelectAction(curentCaptureTabid || currentTabId);
        else if (isAutoSaveOnline() && isSaveOnLine && currentTemId > 0) {
          var r = dataURL.length,
            n = getQueueByImageId(currentTemId);
          n ||
            ((n = new UploadQueue(currentTemId)),
              (uploadQueues[currentTemId] = n)),
            handleCurrentCapture(dataURL[r - 1], r, !0, currentTemId),
            (currentTemId = 0),
            sendMessageToTab(curentCaptureTabid || currentTabId, {
              action: "destroy_selected",
            });
        } else newTab();
        break;
      case "stop-entire-capture":
        sendMessageToTab(curentCaptureTabid || currentTabId, {
          action: "stop-entire-capture",
        });
        break;
      case "capture_selected_done":
        if (currentTemId > 0) return;
        (type = "visible"),
          (menuType = "selected"),
          (centerH = e.data.h),
          (centerW = e.data.w),
          e.topCapturePostion && (topCapturePostion = e.topCapturePostion),
          centerH <= 1 && (centerH = 1),
          centerW <= 1 && (centerW = 1),
          (centerOffX = e.data.x),
          (centerOffY = e.data.y),
          null != e.userAction && (userAction = e.userAction),
          (dataURL = []),
          captureVisible();
        break;
      case "ready":
        return (
          sendMessageToTab(tabid, {
            menuType,
            type,
            data: dataURL,
            taburl,
            tabtitle,
            counter,
            ratio,
            scrollBar,
            centerW,
            centerH,
            centerOffX,
            centerOffY,
          }),
          void (dataURL = [])
        );
      case "copy":
        chrome.experimental.clipboard.executeCopy(tabid, function () {
          alert("copied");
        });
        break;
      case "clearDataURL":
        dataURL = [];
        break;
      case "exit":
        getCurrentTab(function (e) {
          chrome.tabs.remove(e.id);
        });
        break;
      case "get_option":
        a({ options: localStorage.msObj });
        break;
      case "newtip":
        if (!localStorage.version || localStorage.version != currentversion) {
          chrome.browserAction.setBadgeText({ text: "" }),
            (count = 1),
            window.open(
              "https://www.diigo.com/awe/new-for-awesome-screenshot.html?v=" +
              currentversion
            ),
            (localStorage.version = currentversion),
            sendMessage({ action: "shownew" });
        }
        break;
      case "openNewTab":
        openNewTab((c = e.url));
        break;
      case "openOauthTab":
        var c = e.url;
        chrome.tabs.create({ url: c }), chrome.tabs.remove(t.tab.id);
        break;
      case "enablePriceCompare":
        enablePriceCompare(), (localStorage.show_feature_bar = "false");
        break;
      case "getShowFeatureBar":
        a(localStorage.show_feature_bar);
        break;
      case "disableShowFeatureBar":
        localStorage.show_feature_bar = "never";
        break;
      case "desktop":
        e.type && "gmail" == e.type ? beginDesktop(t.tab.id) : beginDesktop();
        break;
      case "record":
        (recordType = e.options.recordType),
          getCurrentTab(function (e) {
            isNotAcceptedTab(e.url) ||
              "camera" === recordType ||
              ((currentRecordingTabId = e.id),
                insertContentScript(e.id)
                  .then(function () {
                    sendMessageToTab(e.id, { action: "insertRecordDiv" }),
                      "custom" === recordType &&
                      sendMessageToTab(e.id, { action: "prepareCustom" });
                  })
                  .catch(function (e) { }));
          }),
          "custom" === recordType
            ? (customRecordOption = e.options)
            : ("camera" !== recordType &&
              e.options.isRecordCam &&
              initCamera(e.options.camDeviceId),
              e.options.isShowToolbar
                ? (initToolbar(), (isShowAnn = e.options.isShowAnn))
                : (isShowAnn = !1),
              beginRecord(e.options)),
          checkLoalStuff();
        break;
      case "recordSelect":
        var i = e.data;
        (crop = i),
          (recordRatio = e.ratio),
          customRecordOption &&
          customRecordOption.isShowToolbar &&
          ((isShowAnn = customRecordOption.isShowAnn), initToolbar()),
          customRecordOption &&
          customRecordOption.isRecordCam &&
          initCamera(customRecordOption.camDeviceId),
          beginRecord(customRecordOption, i);
        break;
      case "gmail-btn":
        a("true" == localStorage["gmail-btn"]);
        break;
      case "close-camera":
        !0 === e.manually &&
          ((isEmbedCamera = !1), (tabCameraClosedManually = !0)),
          stopCameraStream();
        break;
      case "init-camera":
        toggleCamera();
        break;
      case "change-camera":
        changeCamDevice(localStorage["cam-deviceId"]);
        break;
      case "getLocalStorage":
        var s = e.what,
          l = {};
        s.forEach(function (e) {
          l[e] = "true" === localStorage[e];
        }),
          a(l);
        break;
      case "stop-stream":
        videoStream &&
          (videoStream.stop(), videoStream.getVideoTracks()[0].onended());
        break;
      case "checkUserStatus":
        !currentTemId > 0 &&
          getUserSigninStatus(function (e) {
            getCurrentTab(function (t) {
              t &&
                sendMessageToTab(t.id, {
                  action: "userStatus",
                  userStatus: e || !isAutoSaveOnline(),
                });
            });
          });
        break;
      case "getPersonType":
        getPersonType(function (e) {
          getCurrentTab(function (t) {
            t &&
              sendMessageToTab(t.id, { action: "persionType", persionType: e });
          });
        });
        break;
      case "copyInPage":
        googleEvent("copy", "in_page");
        break;
      case "canScroll":
        contentCanScroll = e.canSroll;
        break;
      case "canCapture":
        !currentTemId > 0 &&
          canSaveCloud(function (t) {
            getCurrentTab(
              t
                ? function (t) {
                  sendMessageToTab(t.id, {
                    action: "canCapture",
                    isCopy: e.isCopy,
                    isUserAction: e.isUserAction,
                  });
                }
                : function (e) {
                  sendMessageToTab(e.id, { action: "imgeLimit" });
                }
            );
          });
        break;
      case "pageReload":
        t.tab && tryFinishCapture(t.tab.id, "reload");
        break;
      case "imgeLimit":
        goToUpgrade(e.reason);
        break;
      case "inviteFriend":
        openNewTab(baseURL + "/invite");
        break;
      case "recordStyle":
        var d = {};
        localStorage.recordStyle && (d = JSON.parse(localStorage.recordStyle)),
          d[e.shape] || (d[e.shape] = {}),
          e.isColor
            ? (d[e.shape].color = e.value)
            : (d[e.shape].width = e.value),
          (localStorage.recordStyle = JSON.stringify(d));
        break;
      case "getRecordStyle":
        d = {};
        localStorage.recordStyle && (d = JSON.parse(localStorage.recordStyle)),
          getCurrentTab(function (e) {
            e &&
              sendMessageToTab(e.id, { action: "recordStyle", recordStyle: d });
          });
        break;
      case "pause-recording":
        pauseScreenRecording();
        break;
      case "resume-recording":
        resumeScreenRecording();
        break;
      case "discard-recording":
        stopStream(!0);
        break;
      case "currentTab":
        getSelectedTab();
        break;
      case "saveImage":
        handleBase64DataUrl(e.data, e.actionType, e.format);
        break;
      case "draw-annotation":
        isAnnotated ||
          "cloud" !== localStorage["save-location"] ||
          (socketClient &&
            (socketClient.updateAnnotatedFlag(), (isAnnotated = !0)));
        break;
      case "captureFrame":
        break;
      case "toggleCamera":
        toggleCamera();
        break;
      case "toggleAuido":
        toggleMic();
        break;
      case "changeMic":
        (u = e.deviceId) &&
          ((localStorage["mic-deviceId"] = u), changeAudioId(u));
        break;
      case "changeCam":
        var u;
        (u = e.deviceId) &&
          ((localStorage["cam-deviceId"] = u), changeCamDevice(u));
        break;
      case "reload-camera":
        ("tab" !== recordType && "custom" !== recordType) ||
          (currentRecordingTabId
            ? sendMessage({ action: "stream-ready" })
            : getCurrentTab(function (e) {
              isNotAcceptedTab(e.url)
                ? stopCameraStream()
                : (sendMessage({ action: "stream-ready" }),
                  (currentRecordingTabId = e.id));
            }),
            (isEmbedCamera = !0),
            (tabCameraClosedManually = !1));
        break;
      case "hideAnnBar":
        stopToolbar();
    }
  }),
  chrome.tabs.onActivated.addListener(function (e) {
    e &&
      e.tabId &&
      (sendMessageToTab(e.tabId, { action: "tabCanScroll" }),
        (currentTabid = e.tabId),
        sendDefaultDevice(e.tabId));
  }),
  chrome.tabs.onUpdated.addListener(function (e, t, a) {
    "chrome-extension://alelhddbbhepgpmgidjdcjakblofbmce/#" == t.url
      ? sendMessage({ name: "loginByGoogle" })
      : ("https://www.awesomescreenshot.com/redirect.html#" != t.url &&
        "https://www.awesomescreenshot.com/redirect.html" != t.url) ||
      (chrome.tabs.remove(a.id),
        a.openerTabId && chrome.tabs.update(a.openerTabId, { active: !0 }),
        chrome.runtime.sendMessage({ name: "awsLoginByGoogle" })),
      "tab" === currentRecordType || "custom" === currentRecordType
        ? e === currentRecordingTabId &&
        (isEmbedCamera &&
          sendMessageToTab(currentRecordingTabId, {
            action: "setup-camera",
            crop: "custom" === recordType ? crop : "",
          }),
          isShowToolbar &&
          (sendMessageToTab(currentRecordingTabId, {
            action: "setup-toolbar",
            premiumLevel: canEnableAnn(),
            showAnn: isShowAnn,
            isRecorded,
            crop: "custom" === recordType ? crop : "",
          }),
            isRecordingPaused &&
            (sendMessageToTab(currentRecordingTabId, { action: "pause" }),
              sendMessageToTab(currentRecordingTabId, {
                action: "updateRecordTime",
                data: recordingTime,
              }))))
        : "desktop" === currentRecordType &&
        isShowToolbar &&
        (sendMessageToTab(e, {
          action: "setup-toolbar",
          premiumLevel: canEnableAnn(),
          showAnn: isShowAnn,
          isRecorded,
          audStatus: audioStatus,
          camStatus: cameraStatus,
        }),
          sendDevicesToTab(e)),
      sendMessageToTab(e, { action: "tabupdate" }),
      t && t.status;
  }),
  chrome.tabs.onRemoved.addListener(function (e) {
    tryFinishCapture(e, "close"),
      tabids[e] && chrome.tabs.update(tabids[e], { selected: !0 });
  }),
  chrome.runtime.onInstalled.addListener(function (e) {
    "install" == e.reason &&
      "true" === localStorage["expand-link-gmail"] &&
      (localStorage["expand-link-gmail"] = !1),
      ("update" !== e.reason && "install" !== e.reason) ||
      chrome.tabs.query({}, function (e) {
        e.forEach(function (e) {
          insertContentScript(e.id);
        });
      });
  }),
  localStorage.version
    ? loadFeatureStatus()
    : ((localStorage.newClickVersion = newClickVersion),
      (localStorage.installVersion = currentversion)),
  localStorage.version &&
  localStorage.newClickVersion != newClickVersion &&
  chrome.browserAction.setBadgeText({ text: "New" }),
  "recording" !== recordingStatus &&
  chrome.browserAction.getBadgeText({}, function (e) {
    "New" !== e && chrome.browserAction.setBadgeText({ text: "" });
  }),
  chrome.cookies.get(
    { url: baseUrl, name: "screenshot_personal_uid" },
    function (e) {
      e && localStorage.version != currentversion && refreshCookie(),
        (localStorage.version = currentversion);
    }
  );
var createLogger = function (e) {
  if ("red" === e);
  else;
},
  log_red = createLogger("red"),
  log = createLogger();
function initVideo(e) {
  socketClient && (socketClient.active = !1),
    (socketClient = new SocketClient(e)),
    socketClient.connect();
}
function getDevices(e) {
  return e.filter(function (e, t, a) {
    return (
      "" !== e.label &&
      a.findIndex(function (t) {
        return t.deviceId === e.deviceId;
      }) === t
    );
  });
}
function checkLoalStuff() {
  chrome.cookies.get(
    { url: baseUrl, name: "screenshot_personal_uid" },
    function (e) {
      uploadUserStuff(e);
    }
  );
}
function uploadUserStuff(e) {
  var t = "rateInitKey";
  e
    ? localStorage[t] ||
    ((localStorage[t] = !0),
      chrome.storage.sync.get(
        ["captureCount", "clickNo", "neverShow"],
        function (e) {
          $.ajax({
            type: "POST",
            contentType: "application/json",
            url: baseUrl + "/api/v1/user/stuff",
            data: JSON.stringify({
              type: "chromeFiveStar",
              clickeNo: (!!e.clickNo && e.clickNo) + "",
              neverShow: (!!e.neverShow && e.neverShow) + "",
            }),
            success: function (e) {
              e.code;
            },
            error: function (e) { },
          });
        }
      ))
    : localStorage.removeItem(t);
}
function getClientStr() {
  return /Edg/.test(navigator.userAgent)
    ? "Edge extension"
    : "Chrome extension";
}
function getSavedUserInfo() {
  chrome.storage.local.get("userinfo", function (e) {
    premiumLevel_ = e.userinfo ? e.userinfo.premiumLevel : 0;
  });
}
function canEnableAnn() {
  return "local" === localStorage["save-location"]
    ? !(premiumLevel_ <= 1)
    : !(premiumLevel_ <= 1 && localStorage.videoTotalLimitation >= 20);
}
function refreshUserInfo() {
  chrome.cookies.getAll({ url: baseUrl }, function (e) {
    if (e) {
      for (var t = "", a = 0, o = e.length; a < o; a++)
        "screenshot_personal_uid" === e[a].name && (t = e[a].value);
      t
        ? $.ajax({ method: "GET", url: baseUrl + "/api/v1/user/einfo" }).done(
          function (e) {
            var a = parseInt(e.data.premiumLevel);
            premiumLevel_ = a;
            var o = e.data.newPremium,
              r = e.data.permission.allowUploadImage,
              n = e.data.permission.allowVideoCreate,
              c = e.data.counts.imageLimitation,
              i = e.data.counts.imageTotalLimitation,
              s = e.data.counts.videoLimitation,
              l = e.data.counts.videoTotalLimitation;
            chrome.storage.local.set({
              userinfo: {
                uid: t,
                newPremium: o,
                premiumLevel: a,
                allowUploadImage: r,
                allowVideoCreate: n,
                imageLimitation: c,
                imageTotalLimitation: i,
                videoLimitation: s,
                videoTotalLimitation: l,
              },
            });
          }
        )
        : ((premiumLevel_ = 0), chrome.storage.local.remove("userinfo"));
    }
  });
}
localStorage.video_need_complete &&
  (SocketClient.httpComplete(localStorage.video_need_complete),
    (localStorage.video_need_complete = "")),
  "true" === localStorage.has_setup ||
  localStorage.version ||
  getAllAudioVideoDevices(function (e) {
    var t = getDevices(e.audioInputDevices);
    chrome.cookies.get(
      { url: baseUrl, name: "screenshot_personal_uid" },
      function (a) {
        a
          ? 0 !== e.audioInputDevices.length &&
          0 === t.length &&
          chrome.tabs.create({
            url: "/setup-react.html?from=install&isSignIn=true",
          })
          : e.audioInputDevices.length
            ? t.length
              ? chrome.tabs.create({
                url: "/setup-react.html?from=install&isGranted=true",
              })
              : chrome.tabs.create({ url: "/setup-react.html?from=install" })
            : chrome.tabs.create({
              url: "/setup-react.html?from=install&isGranted=true",
            }),
          (localStorage.has_setup = !0);
      }
    );
  }),
  checkLoalStuff(),
  refreshUserInfo();
