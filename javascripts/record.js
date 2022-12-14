var audioDestination,
  gainNode,
  audioContext,
  getMicFrame = null,
  audioStream = null,
  cameraStream = null,
  videoStream = null,
  tempVideo = null,
  MIME_TYPE = "video/webm",
  file_name = "/awesome/record.webm",
  chooseDesktopMediaId = null,
  currentId = null,
  tempFileInfo = null,
  currentSize = null,
  currentName = null,
  currentSaveName = null,
  fileCreated = !1,
  currentInfo = null,
  isAnnotated = !1,
  isRecorded = !1,
  twoHoursCount = 1,
  isRecording = !1,
  recordingStatus = "",
  isRecordingPaused = !1,
  recordingTime = 0,
  recordingTimer = null,
  lastPausingTime = null,
  pausedTime = null,
  recoder = null,
  currentRecordType = "",
  tabSoundAudioPlayer = null,
  isPremium = !1,
  recordingStartTime = null,
  count = 0,
  _cd = 0,
  isInCountdown = !1,
  cameraPreviewOpened = !1,
  socketClients = [],
  socketClient = null,
  countDownInterval = null,
  offlineMicIssue = !1,
  audioDeviceId = "",
  audioSource_ = null,
  recordStream = null,
  cropStream = null,
  availableAudioDevices = [],
  availableVideoDevices = [],
  audioStatus = 1,
  cameraStatus = 1,
  isSaveLocal = !1,
  recordCrop = null,
  baseUrl = "https://www.awesomescreenshot.com";
function resetData() {
  (dataArray = new ArrayBuffer(0)), (audioArray = new ArrayBuffer(0));
}
function getPremium() {
  return new Promise(function (e, t) {
    chrome.cookies.get(
      { url: baseUrl, name: "screenshot_personal_type" },
      function (t) {
        t && "1" == t.value ? e(!0) : e(!1);
      }
    );
  });
}
function getPremiumLevel() {
  return new Promise(function (e, t) {
    chrome.cookies.get(
      { url: baseUrl, name: "screenshot_personal_premium_level" },
      function (t) {
        t && parseInt(t.value) > 1 ? e(!0) : e(!1);
      }
    );
  });
}
function getSaveName() {
  if ("desktop" === currentRecordType) var e = "Desktop";
  else if ("tab" === currentRecordType || "custom" === currentRecordType)
    e = "Tab";
  else if ("camera" === currentRecordType) e = "Camera";
  return e + "-" + new Date().getTime();
}
function getFormatName() {
  if (
    "desktop" === currentRecordType ||
    "tab" === currentRecordType ||
    "custom" === currentRecordType
  )
    return currentRecordingTabTitle;
  if ("camera" === currentRecordType) {
    var e = new Date();
    return (
      "Camera-" +
      (e.getFullYear() +
        "-" +
        (e.getMonth() + 1) +
        "-" +
        e.getDate() +
        "-" +
        e.getHours() +
        "-" +
        e.getMinutes() +
        "-" +
        e.getSeconds())
    );
  }
}
function refreshCookie() {
  $.get(baseUrl + "/promotion_ex");
}
function goToUpgrade(e) {
  chrome.cookies.get(
    { url: baseUrl, name: "screenshot_personal_type" },
    function (t) {
      if (t) {
        var o = "/pricing?from=" + e;
        openNewTab(baseUrl + o);
      } else {
        o =
          baseUrl + "/user/login?redirect=" + baseUrl + ("/pricing?from=" + e);
        openNewTab(o);
      }
    }
  );
}
function getMicStream(e) {
  return (
    (audioDeviceId = e),
    new Promise(function (t, o) {
      window.navigator.mediaDevices
        .getUserMedia({ audio: { deviceId: { exact: e } } })
        .then(function (e) {
          t(e);
        })
        .catch(function (e) {
          o(e);
        });
    })
  );
}
function getVideoStream(e, t, o, a) {
  if ("1080" === localStorage.max_resolution)
    var n = 1920,
      r = 1080;
  else if ("720" === localStorage.max_resolution) (n = 1280), (r = 720);
  else (n = 3840), (r = 2160);
  return new Promise(function (i, c) {
    if ("tab" == e)
      chrome.tabCapture.capture(
        {
          audio: t,
          video: !0,
          videoConstraints: {
            mandatory: { chromeMediaSource: "tab", maxWidth: n, maxHeight: r },
          },
        },
        function (e) {
          if (e) i(e);
          else {
            var t = chrome.runtime.lastError.message;
            alert(
              "Get tab stream error, please refresh the page and try again.",
              t
            );
          }
        }
      );
    else if ("custom" === e)
      chrome.tabCapture.capture(
        {
          audio: t,
          video: !0,
          videoConstraints: {
            mandatory: {
              chromeMediaSource: "tab",
              maxWidth: n,
              maxHeight: recordRatio > 0 ? n * recordRatio : r,
            },
          },
        },
        function (e) {
          if (e)
            (cropStream = new CropStream2(e, recordCrop)).cropStream(
              function () {
                i(cropStream.outputStream);
              }
            );
          else {
            var t = chrome.runtime.lastError.message;
            alert(
              "Get tab stream error, please refresh the page and try again.",
              t
            ),
              setDefaults();
          }
        }
      );
    else if ("desktop" == e) {
      var d = ["screen", "audio"];
      a || d.push("window"),
        chooseDesktopMediaId &&
        (chrome.desktopCapture.cancelChooseDesktopMedia(chooseDesktopMediaId),
          (chooseDesktopMediaId = null)),
        (chooseDesktopMediaId = chrome.desktopCapture.chooseDesktopMedia(
          d,
          function (e) {
            if (e) {
              var t = {
                audio: {
                  mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: e,
                  },
                },
                video: {
                  mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: e,
                    maxWidth: n,
                    maxHeight: r,
                    maxFrameRate: 30,
                  },
                },
                optional: [],
              };
              window.navigator.mediaDevices.getUserMedia(t).then(i).catch(c);
            } else
              stopCamera(), stopToolbar(), audioStream && audioStream.stop();
          }
        ));
    } else
      "camera" == e &&
        getCameraStream(
          o,
          function (e) {
            (cameraStream = e),
              getVideoStreamDimension(e).then(function (t) {
                var o = t.width / t.height,
                  a = window.screen.width,
                  n = window.screen.height,
                  r = a / 2,
                  c = parseInt(r / o) + 50 + 30;
                c > n - 200 &&
                  ((c = parseInt(0.8 * n)), (r = parseInt((c - 50 - 30) * o))),
                  chrome.windows.create({
                    url: "/camera.html?type=camera",
                    type: "popup",
                    width: r,
                    height: c,
                  }),
                  i(e);
              });
          },
          function (e) {
            c(e);
          }
        );
  });
}
function setBadge(e, t) {
  "text" === e
    ? chrome.browserAction.setBadgeText({ text: t })
    : "color" === e &&
    chrome.browserAction.setBadgeBackgroundColor({ color: t });
}
function doBeginRecord(e, t) {
  setBadge("color", "red"),
    e.countdown > 0
      ? currentRecordingTabId
        ? insertContentScript(currentRecordingTabId)
          .then(
            function () {
              sendMessageToTab(currentRecordingTabId, {
                action: "startCountDown",
                countdown: parseInt(e.countdown),
              }),
                (isInCountdown = !0),
                setBadge("text", _cd + ""),
                (countDownInterval = setInterval(function () {
                  if (1 == _cd)
                    return (
                      clearInterval(countDownInterval),
                      setBadge("text", ""),
                      (_cd = 0),
                      void setTimeout(function () {
                        gotStream(t, e);
                      }, 500)
                    );
                  setBadge("text", --_cd + "");
                }, 1e3));
            },
            function () {
              (isInCountdown = !0),
                setBadge("text", _cd + ""),
                (countDownInterval = setInterval(function () {
                  if (1 == _cd)
                    return (
                      clearInterval(countDownInterval),
                      setBadge("text", ""),
                      (_cd = 0),
                      void setTimeout(function () {
                        gotStream(t, e);
                      }, 100)
                    );
                  setBadge("text", --_cd + "");
                }, 1e3));
            }
          )
          .catch(function (e) { })
        : ((isInCountdown = !0),
          setBadge("text", _cd + ""),
          (countDownInterval = setInterval(function () {
            if (1 == _cd)
              return (
                clearInterval(countDownInterval),
                setBadge("text", ""),
                (_cd = 0),
                void setTimeout(function () {
                  gotStream(t, e);
                }, 300)
              );
            setBadge("text", --_cd + "");
          }, 1e3)))
      : gotStream(t, e);
}
function getStream(e) {
  return e.isRecordMic
    ? ((audioStatus = 2),
      broadCast({
        action: "updateRecordUI",
        data: { audStatus: audioStatus, camStatus: cameraStatus },
      }),
      getMicStream(e.micDeviceId).then(function (t) {
        return (
          (audioStream = t),
          getVideoStream(
            e.recordType,
            e.isRecordTabSound,
            e.camDeviceId,
            e.removeAppWin
          )
        );
      }))
    : ((audioStatus = 1),
      broadCast({
        action: "updateRecordUI",
        data: { audStatus: audioStatus, camStatus: cameraStatus },
      }),
      getVideoStream(
        e.recordType,
        e.isRecordTabSound,
        e.camDeviceId,
        e.removeAppWin
      ));
}
function beginRecord(e, t) {
  (currentRecordType = e.recordType),
    getUserSigninStatus(function (e) {
      isSignIn = e;
    }),
    (isRecorded = !1),
    (recordCrop = t || null),
    getCurrentTab(function (e) {
      (currentRecordingTabTitle = e.title), (currentRecordingTabUrl = e.url);
    }),
    (_cd = parseInt(e.countdown)),
    getAllDevices().then(() => {
      sendDevicesToAll();
    }),
    getStream(e)
      .then(function (t) {
        if (
          (((videoStream = t).getVideoTracks()[0].onended = function () {
            if (
              (audioStream && audioStream.stop(),
                cameraStream && cameraStream.stop(),
                socketClient)
            ) {
              socketClient.cancel(),
                (socketClient.needReconnect = !1),
                (socketClient.sentQueue = []),
                (socketClient.willSendQueue = []),
                socketClient.close(1e3);
            }
            currentRecordingTabId &&
              sendMessageToTab(currentRecordingTabId, {
                action: "stop-countdown",
              }),
              setDefaults();
          }),
            (recordingStatus = "preparing"),
            "local" === e.saveLocation
              ? ((isSaveLocal = !0), doBeginRecord(e, videoStream))
              : ((isSaveLocal = !1),
                initVideo({
                  onopen: function () {
                    doBeginRecord(e, videoStream);
                  },
                  onError: function (t) {
                    "Professional Plan Required!" === t &&
                      ((isSaveLocal = !0), doBeginRecord(e, videoStream));
                  },
                  onClose: function () { },
                }),
                sendMessage({ action: "prepare-recording" })),
            ("tab" === e.recordType || "custom" === e.recordType) &&
            e.isRecordTabSound)
        ) {
          tabSoundAudioPlayer = new Audio();
          try {
            tabSoundAudioPlayer.srcObject = videoStream;
          } catch (e) {
            tabSoundAudioPlayer.src = window.URL.createObjectURL(videoStream);
          }
          (tabSoundAudioPlayer.volume = 1), tabSoundAudioPlayer.play();
        }
      })
      .catch(function (e) {
        setDefaults();
        var t = "",
          o = "";
        if (
          (e &&
            ("NotAllowedError" === e.name
              ? /Permission denied by system/.test(e)
                ? ((t = "mac"),
                  /Mac OS/.test(window.navigator.userAgent) || (t = "win"),
                  /\[Mic\]/.test(e)
                    ? (o = "mic")
                    : "camera" === currentRecordType && (o = "camera"))
                : /Could not start audio source/.test(e) &&
                ((t = "win"), (o = "mic"))
              : "NotReadableError" === e.name &&
              ((t = "mac"),
                (o = "browser_issue"),
                /Mac OS/.test(window.navigator.userAgent) ||
                ((t = "win"), (o = "mic")))),
            t)
        ) {
          var a = "/permission-denied.html?os=" + t;
          o && (a += "&type=" + o), chrome.tabs.create({ url: a });
        }
      });
}
function handleBlob(e) {
  if ("local" === localStorage["save-location"] || isSaveLocal) {
    if ((count++, e))
      if (fileCreated) {
        fileSaver.append(e, currentSaveName), (currentSize += e.size);
        var t = bytesToSize(currentSize);
        (currentInfo.detail.size = t),
          (currentInfo.detail.duration = recordingTime),
          DB.update(currentId, currentInfo);
      } else
        (currentName = getFormatName()),
          (currentSaveName = getSaveName()),
          fileSaver.save(e, currentSaveName).then(function (t) {
            (fileCreated = !0),
              (currentSize = e.size),
              (tempFileInfo = {
                fileUrl: t,
                title: currentName,
                size: bytesToSize(currentSize),
                duration: recordingTime,
                recordType: currentRecordType,
              }),
              DB.save(tempFileInfo).then(function (e) {
                (currentId = e.id), (currentInfo = e);
              });
          });
  } else socketClient.send(e);
}
function getVideoStreamDimension(e) {
  return new Promise(function (t, o) {
    var a = document.createElement("video");
    (a.srcObject = e),
      (a.onloadedmetadata = function () {
        t({ width: a.videoWidth, height: a.videoHeight });
      });
  });
}
function getBitRate(e, t) {
  return Math.floor(e * t * 2);
}
function gotStream(e, t) {
  if (e && e.active) {
    sendContentMessage("done_start", {}), (isRecorded = !0);
    var o = {
      type: "video",
      disableLogs: !1,
      getNativeBlob: !0,
      timeSlice:
        "local" === localStorage["save-location"] || isSaveLocal ? 3e3 : 500,
      ondataavailable: handleBlob,
    };
    if (!o.videoCodec) var a = "vp8";
    if (
      (a && (o.mimeType = "video/webm; codecs=" + a.toLowerCase()),
        audioStream || e.getAudioTracks().length > 0)
    ) {
      var n = new MediaStream();
      (r = getMixedAudioStream([audioStream, e]))
        .getAudioTracks()
        .forEach(function (e) {
          n.addTrack(e);
        }),
        e.getVideoTracks().forEach(function (e) {
          n.addTrack(e);
        }),
        (e = n);
    } else {
      n = new MediaStream();
      (audioContext = new AudioContext()),
        (gainNode = audioContext.createGain()),
        (audioDestination = audioContext.createMediaStreamDestination()),
        audioContext
          .createMediaElementSource(document.createElement("audio"))
          .connect(audioDestination);
      var r = audioDestination.stream;
      (window.mixedAudioStream = r),
        e.getVideoTracks().forEach(function (e) {
          n.addTrack(e);
        }),
        r.getAudioTracks().forEach(function (e) {
          n.addTrack(e);
        }),
        (e = n);
    }
    recorder = new RecordRTC(e, o);
    try {
      recorder.startRecording(),
        sendMessage({ action: "start-recording" }),
        (alreadyHadGUMError = !1);
    } catch (e) { }
    (isRecording = !0),
      (recordingStatus = "recording"),
      (videoStream.onended = function (e, t) {
        videoStream && (videoStream.onended = function () { }),
          audioStream && audioStream.stop(),
          cameraStream && cameraStream.stop(),
          cropStream &&
          (cropStream.stop(),
            (cropStream = null),
            sendContentMessage("endSelect", {})),
          stopScreenRecording(e, t);
      }),
      (videoStream.getVideoTracks()[0].onended = function (e) {
        videoStream && videoStream.onended && videoStream.onended();
      }),
      audioStream && audioStreamStatusMonitor(audioStream),
      (recordingStartTime = new Date().getTime()),
      (recordingTimer = setInterval(updateRecordingTime, 100));
  }
}
function audioStreamStatusMonitor(e) {
  e &&
    ((offlineMicIssue = !1),
      (e.getAudioTracks()[0].onended = function () {
        isRecording &&
          "live" === videoStream.getVideoTracks()[0].readyState &&
          (handleAudioDeviceOffline(), (e.onended = null));
      }));
}
function handleAudioDeviceOffline() {
  isRecording &&
    getMicStream("default").then(
      function (e) {
        if (e) {
          if (((audioStream = e), gainNode && audioDestination)) {
            var t = audioContext.createMediaStreamSource(e);
            t.connect(gainNode), t.connect(audioDestination);
          }
        } else
          isRecording &&
            videoStream &&
            "live" == videoStream.getVideoTracks()[0].readyState &&
            (offlineMicIssue = !0);
      },
      function () {
        isRecording &&
          videoStream &&
          "live" == videoStream.getVideoTracks()[0].readyState &&
          (offlineMicIssue = !0);
      }
    );
}
function checkTimeLength(e) {
  "cloud" !== localStorage["save-location"] ||
    isSaveLocal ||
    getPremiumLevel().then(function (t) {
      t ||
        (e >= 108e5 * twoHoursCount &&
          e <= 108e5 * twoHoursCount + 100 &&
          (chrome.windows.create({
            type: "popup",
            url: "/notification.html",
            left: 0,
            top: 0,
            width: 300,
            height: 400,
            focused: !0,
          }),
            twoHoursCount++));
    }),
    e >= 301e3 &&
    chrome.storage.local.get("userinfo", function (e) {
      e.userinfo
        ? "local" === localStorage["save-location"] || isSaveLocal
          ? e.userinfo.premiumLevel < 2 &&
          ((1 === e.userinfo.premiumLevel && 0 === e.userinfo.newPremium) ||
            stopStream(!1, !0))
          : e.userinfo.videoTotalLimitation >= e.userinfo.videoLimitation &&
          e.userinfo.premiumLevel < 2 &&
          stopStream(!1, !0)
        : stopStream(!1, !0);
    });
}
function getMixedAudioStream(e) {
  audioContext = new AudioContext();
  var t = [];
  (gainNode = audioContext.createGain()).connect(audioContext.destination),
    (gainNode.gain.value = 0);
  var o = 0;
  if (
    (e.forEach(function (e) {
      if (e) {
        if (!e.getAudioTracks().length) return;
        o++;
        var a = audioContext.createMediaStreamSource(e);
        a.connect(gainNode), t.push(a), e === audioStream && (audioSource_ = a);
      }
    }),
      o)
  )
    return (
      (audioDestination = audioContext.createMediaStreamDestination()),
      t.forEach(function (e) {
        e.connect(audioDestination);
      }),
      audioDestination.stream
    );
}
function updateRecordingTime() {
  if (!isRecordingPaused) {
    var e = new Date().getTime() - recordingStartTime;
    pausedTime && (e -= pausedTime),
      checkTimeLength(e),
      setBadge("text", (recordingTime = secondsToTime(e))),
      ("desktop" !== recordType &&
        "tab" !== recordType &&
        "custom" !== recordType) ||
      sendMessageToTab(
        "tab" === recordType || "custom" === recordType
          ? currentRecordingTabId
          : currentTabid,
        { action: "updateRecordTime", data: recordingTime }
      );
  }
}
function secondsToTime(e) {
  e = Math.floor(e / 1e3);
  var t = Math.floor(e / 3600),
    o = e % 60;
  return (
    o < 10 && (o = "0" + o),
    (t > 0 ? t + ":" : "") + Math.floor((e - 3600 * t) / 60) + ":" + o
  );
}
function setDefaults() {
  currentRecordingTabId &&
    sendMessageToTab(currentRecordingTabId, { action: "removeRecordDiv" }),
    videoStream &&
    (videoStream.getTracks().forEach(function (e) {
      e.stop();
    }),
      videoStream.onended && videoStream.onended()),
    isShowToolbar && (resetToolbarSettings(), stopToolbar()),
    (tabSoundAudioPlayer = null),
    audioStream && audioStream.stop(),
    cameraStream && stopCamera(),
    countDownInterval &&
    (clearInterval(countDownInterval), (countDownInterval = null)),
    (recorder = null),
    (videoStream = null),
    (audioStream = null),
    (isRecording = !1),
    (recordingStatus = ""),
    (recordingStartTime = null),
    (recordingTime = 0),
    (tempFileInfo = null),
    (imgIndex = 0),
    (isRecordingPaused = !1),
    (isAnnotated = !1),
    (isRecorded = !1),
    (cameraPreviewOpened = !1),
    (_cd = 0),
    (isInCountdown = !1),
    (currentId = null),
    (tempFileInfo = null),
    (currentSize = null),
    (currentName = null),
    (currentSaveName = null),
    (fileCreated = !1),
    (currentInfo = null),
    (twoHoursCount = 1),
    (isEmbedCamera = !1),
    (isShowToolbar = !1),
    clearInterval(recordingTimer),
    (recordingTimer = null),
    (lastPausingTime = null),
    (pausedTime = null),
    audioContext && audioContext.close(),
    (audioContext = null),
    (currentRecordingTabId = ""),
    (currentRecordingTabTitle = ""),
    (tabCameraClosedManually = !1),
    (audioContext = null),
    (gainNode = null),
    (audioDestination = null),
    (offlineMicIssue = !1),
    (audioStatus = 1),
    (cameraStatus = 1),
    setBadge("text", "");
}
function pauseScreenRecording(e, t) {
  isRecordingPaused ||
    ("local" === localStorage["save-location"] ||
      isSaveLocal ||
      socketClient.pause(e, t),
      recorder.pauseRecording(),
      isShowToolbar &&
      ("tab" === recordType || "custom" === recordType
        ? currentRecordingTabId &&
        sendMessageToTab(currentRecordingTabId, { action: "pause" })
        : "desktop" === recordType && broadCast({ action: "pause" })),
      "camera" === recordType && sendMessage({ action: "pause-recording" }),
      (isRecordingPaused = !0),
      (lastPausingTime = new Date().getTime()));
}
function resumeScreenRecording() {
  "local" === localStorage["save-location"] ||
    isSaveLocal ||
    "connected" === socketClient.status
    ? (recorder.resumeRecording(),
      isShowToolbar &&
      ("tab" === recordType || "custom" === recordType
        ? sendMessageToTab(currentRecordingTabId, { action: "resume" })
        : "desktop" === recordType && broadCast({ action: "resume" })),
      "camera" === recordType && sendMessage({ action: "resume-recording" }),
      (isRecordingPaused = !1),
      (pausedTime = pausedTime + new Date().getTime() - lastPausingTime))
    : socketClient.reConnect();
}
function stopStream(e, t) {
  videoStream && videoStream.onended(e, t);
}
function restoreRecording() {
  (isRecording = !1),
    (recordingStatus = ""),
    clearInterval(recordingTimer),
    (recordingTimer = null),
    (lastPausingTime = null),
    (pausedTime = null),
    (currentRecordingTabId = ""),
    (tabCameraClosedManually = !1),
    setBadge("text", ""),
    videoStream &&
    videoStream.getTracks().forEach(function (e) {
      e.stop();
    });
}
function stopScreenRecording(e, t) {
  recorder.stopRecording(function () {
    if (
      (googleEvent("record video", "record video"),
        cameraStream && stopCamera(),
        "local" === localStorage["save-location"] || isSaveLocal)
    )
      e
        ? DB.delete(currentId)
        : openNewTab("/video-react.html?id=" + currentId);
    else {
      if (e) {
        var o = socketClient.videoName.match(/-(.*)\.webm/)[1];
        socketClient.cancel(),
          (socketClient.needReconnect = !1),
          (socketClient.sentQueue = []),
          (socketClient.willSendQueue = []),
          socketClient.close(1e3);
      } else if (
        (socketClient.complete(),
          openNewTab(socketClient.videoURI + (t ? "?limit=true" : "")),
          socketClient.videoName)
      ) {
        o = socketClient.videoName.match(/-(.*)\.webm/)[1];
        SocketClient.httpClickStop(o);
      }
    }
    setDefaults(), sendMessage({ action: "stop-recording" }), refreshUserInfo();
  }),
    recordingTimer && clearTimeout(recordingTimer);
}
function changeAudioId(e) {
  e !== audioDeviceId &&
    videoStream &&
    "live" == videoStream.getVideoTracks()[0].readyState &&
    (audioStream && (audioStream.stop(), (audioStream = null)),
      connectAudio(e));
}
function sendStatusToTab() { }
function toggleToolbar() {
  "camera" !== recordType && (isShowToolbar ? stopToolbar() : initToolbar());
}
function toggleAnnBar() {
  (isShowAnn = !isShowAnn),
    "desktop" === recordType
      ? broadCast({ action: "updateAnnBar", data: { showAnn: isShowAnn } })
      : ("tab" !== recordType && "custom" !== recordType) ||
      (currentRecordingTabId &&
        sendMessageToTab(currentRecordingTabId, {
          action: "updateAnnBar",
          data: { showAnn: isShowAnn },
        })),
    sendMessage({ action: "updateAnnBar", data: { showAnn: isShowAnn } });
}
function toggleMic() {
  if (audioStream)
    audioStream.stop(),
      (audioStream = null),
      sendMessage({ action: "updateRecordUI" }),
      sendContentMessage("updateRecordUI", {
        audStatus: (audioStatus = 1),
        camStatus: cameraStatus,
      });
  else {
    var e = localStorage["mic-deviceId"];
    e || (e = "default"), connectAudio(e);
  }
}
function sendContentMessage(e, t) {
  "desktop" === recordType
    ? broadCast({ action: e, data: t })
    : ("tab" !== recordType && "custom" !== recordType) ||
    (currentRecordingTabId &&
      sendMessageToTab(currentRecordingTabId, { action: e, data: t }));
}
function connectAudio(e) {
  getMicStream(e).then(
    function (e) {
      if (e) {
        if (((audioStream = e), gainNode && audioDestination)) {
          var t = audioContext.createMediaStreamSource(e);
          t.connect(gainNode), t.connect(audioDestination);
        }
        sendMessage({ action: "updateRecordUI" }),
          sendContentMessage("updateRecordUI", {
            audStatus: (audioStatus = 2),
            camStatus: cameraStatus,
          });
      }
    },
    function (e) {
      (audioStatus = 3),
        broadCast({
          action: "updateRecordUI",
          data: { audStatus: audioStatus, camStatus: cameraStatus },
        }),
        "NotAllowedError" === e.name && openNewTab("/getAccess.html");
    }
  );
}
function stopToolbar() {
  "desktop" === recordType
    ? chrome.tabs.query({}, function (e) {
      e.forEach(function (e) {
        sendMessageToTab(e.id, { action: "remove-toolbar" });
      });
    })
    : ("tab" !== recordType && "custom" !== recordType) ||
    (currentRecordingTabId &&
      sendMessageToTab(currentRecordingTabId, { action: "remove-toolbar" })),
    (isShowToolbar = !1),
    sendMessage({ action: "updateRecordUI" });
}
function getFileSize(e) {
  var t = (e / 1024).toFixed(2);
  return (t =
    t < 1024
      ? t
        .toString()
        .replace(",", ".")
        .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") + " KB"
      : (t = (t / 1024).toFixed(2))
        .toString()
        .replace(",", ".")
        .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") + " MB");
}
function saveVideo() {
  var e = "AwesomeScreenshot-" + new Date().toLocaleString().replace(/\s/g, ""),
    t =
      (new File([recorder.getBlob()], e + ".webm", { type: "video/webm" }),
        recorder.getBlob()),
    o = bytesToSize(t.size);
  fileSaver.save(t, e + ".webm").then(function (t) {
    DB.save({ fileUrl: t, title: e, size: o, duration: recordingTime }).then(
      function (e) {
        chrome.runtime.sendMessage({ name: "stop" }, function () {
          chrome.tabs.create({ url: "/video.html?id=" + e }), setDefaults();
        });
      }
    );
  });
}
function googleEvent(e, t) {
  "undefined" != typeof ga &&
    ga("send", "event", getClientStr().toLowerCase(), e, t);
}
function getOS() {
  window.navigator.userAgent;
  var e = window.navigator.platform,
    t = null;
  return (
    -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(e)
      ? (t = "Mac OS")
      : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(e)
        ? (t = "Windows")
        : !t && /Linux/.test(e) && (t = "Linux"),
    t
  );
}
function waitForCameraPreview(e) {
  cameraPreviewOpened && e();
  var t = setInterval(function () {
    cameraPreviewOpened && (clearInterval(t), e());
  }, 1e3);
}
function getAllDevices() {
  return new Promise(function (e, t) {
    getAllAudioVideoDevices(function (t) {
      var o = t;
      (availableAudioDevices = getDevices(o.audioInputDevices)),
        (availableVideoDevices = getDevices(o.videoInputDevices)),
        e();
    });
  });
}
function getDevices(e) {
  return e.filter(function (e, t, o) {
    return (
      "" !== e.label &&
      o.findIndex(function (t) {
        return t.deviceId === e.deviceId;
      }) === t
    );
  });
}
chrome.cookies.get(
  { url: baseUrl, name: "screenshot_personal_type" },
  function (e) {
    void 0 === e && refreshCookie();
  }
),
  $(document).ready(function () { }),
  DB.init(),
  window.addEventListener(
    "message",
    function (e) {
      "audioStream" == e.data.type && (audioStream = e.data.steam);
    },
    !1
  ),
  (navigator.mediaDevices.ondevicechange = function (e) {
    navigator.mediaDevices.enumerateDevices().then(function (e) {
      var t = !1;
      e.forEach(function (e) {
        "audioinput" === e.kind && (t = !0);
      }),
        t &&
        offlineMicIssue &&
        isRecording &&
        videoStream &&
        "live" == videoStream.getVideoTracks()[0].readyState &&
        ((offlineMicIssue = !1), handleAudioDeviceOffline());
    });
  }),
  chrome.commands.onCommand.addListener(function (e) {
    "stop-recording" === e
      ? stopStream()
      : "pause-or-resume-recording" === e &&
      (isRecordingPaused ? resumeScreenRecording() : pauseScreenRecording());
  });
