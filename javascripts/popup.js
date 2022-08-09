var Bg = chrome.extension.getBackgroundPage(),
  camDevices = [],
  baseURL = "https://www.awesomescreenshot.com",
  isSignIn = !1,
  meter = null,
  rafID = null,
  volumeStream = null,
  premiumLevel = 4,
  newPremium = !1,
  isAllowVa = null,
  allowUploadImage = !1,
  allowVideoCreate = !1,
  imageLimitation = 100,
  imageTotalLimitation = 0,
  videoLimitation = 20,
  videoTotalLimitation = 0,
  prepareInterval = null,
  isFileUrl = !1,
  isAllowContentJs = !0,
  fileAllowedAccess = !1,
  mediaDevices = null,
  haveAudioDevices = !1,
  haveVideoDevices = !1,
  isAllowedMic = !1,
  isAllowedCam = !1,
  availableAudioDevices = [],
  availableVideoDevices = [],
  init = !1,
  isGetUserInfo = !1,
  haveSetDefaultTab = !1,
  isAutoRecordTab = !1;
function sendMessageToTab(e, o, a) {
  chrome.tabs.sendMessage(e, o, a);
}
function getCurrentTab(e, o) {
  chrome.tabs.query(Object.assign({ active: !0 }, e), function (e) {
    o(e[0]);
  });
}
function createAudioMeter(e, o, a, i) {
  var t = e.createScriptProcessor(512);
  return (
    (t.onaudioprocess = volumeAudioProcess),
    (t.clipping = !1),
    (t.lastClip = 0),
    (t.volume = 0),
    (t.clipLevel = o || 0.98),
    (t.averaging = a || 0.95),
    (t.clipLag = i || 750),
    t.connect(e.destination),
    (t.checkClipping = function () {
      return (
        !!this.clipping &&
        (this.lastClip + this.clipLag < window.performance.now() &&
          (this.clipping = !1),
          this.clipping)
      );
    }),
    (t.shutdown = function () {
      this.disconnect(), (this.onaudioprocess = null);
    }),
    t
  );
}
function volumeAudioProcess(e) {
  for (
    var o, a = e.inputBuffer.getChannelData(0), i = a.length, t = 0, c = 0;
    c < i;
    c++
  )
    (o = a[c]),
      Math.abs(o) >= this.clipLevel &&
      ((this.clipping = !0), (this.lastClip = window.performance.now())),
      (t += o * o);
  var n = Math.sqrt(t / i);
  this.volume = Math.max(n, this.volume * this.averaging);
}
function closeVolume() {
  $("#volume-canvas").hide(),
    rafID && window.cancelAnimationFrame(rafID),
    (meter = null),
    volumeStream &&
    (volumeStream.getTracks().forEach(function (e) {
      e.stop();
    }),
      (volumeStream = null));
}
function getVolume() {
  if (
    "true" === localStorage.record_mic &&
    isAllowedMic &&
    !1 !== $("#main-menu").is(":visible")
  ) {
    closeVolume(), $("#volume-canvas").show();
    var e = new AudioContext(),
      o = {};
    localStorage["mic-deviceId"] && (o.deviceId = localStorage["mic-deviceId"]);
    try {
      (navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia),
        navigator.getUserMedia(
          { audio: o },
          function (o) {
            (volumeStream = o),
              (mediaStreamSource = e.createMediaStreamSource(o)),
              (meter = createAudioMeter(e)),
              mediaStreamSource.connect(meter),
              drawLoop();
          },
          function (e) { }
        );
    } catch (e) { }
  }
}
function drawLoop(e) {
  var o = document.getElementById("volume-canvas").getContext("2d");
  o.clearRect(0, 0, 5, 18),
    meter &&
    (meter.checkClipping()
      ? (o.fillStyle = "red")
      : (o.fillStyle = "#47d892"),
      o.fillRect(0, 0, 5, 18 * meter.volume * 5)),
    (rafID = window.requestAnimationFrame(drawLoop));
}
i18n(),
  "true" === localStorage["dark-mode"] && $("body").addClass("dark-mode"),
  Bg.isScrollCapturing && switchView("capturing-view"),
  chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
    var o = e[0];
    o && sendMessageToTab(o.id, { action: "check-videos" });
  });
var recordingTimer = null;
function updateTime() {
  $("#recording-view").find(".time").text(Bg.recordingTime);
}
function restoreSettings() {
  var e = localStorage.max_resolution,
    o = "true" === localStorage.record_toolbar,
    a = "true" === localStorage.ctl_bar;
  "local" === localStorage["save-location"]
    ? (isSignIn && premiumLevel > 1) || ((e = 720), (o = !1))
    : isSignIn
      ? premiumLevel <= 1 && videoTotalLimitation >= 20 && ((e = 720), (o = !1))
      : ((e = 720), (o = !1)),
    $(".custom-select[data-option=max_resolution]")
      .find(".select-option-item[data-value=" + e + "]")
      .trigger("mousedown"),
    $("#record-toolbar").prop("checked", o),
    updateCtlBarUI(a);
}
function updateCtlBarUI(e) {
  e
    ? ($("#ctl-bar-icon").show(),
      $("#ctl-bar-off-icon").hide(),
      $(".ann-bar-field.ann-tool").removeClass("disable"))
    : ($("#ctl-bar-icon").hide(),
      $("#ctl-bar-off-icon").show(),
      $(".ann-bar-field.ann-tool").addClass("disable")),
    $("#ctl-bar").prop("checked", e);
}
"recording" !== Bg.recordingStatus &&
  "preparing" !== Bg.recordingStatus &&
  chrome.cookies.getAll({ url: baseURL }, function (e) {
    if ((chrome.runtime.lastError, e)) {
      for (var o = 0, a = e.length; o < a; o++)
        if ("screenshot_personal_fullname" === e[o].name)
          var i = decodeURI(e[o].value);
        else if ("screenshot_personal_type" === e[o].name) var t = e[o].value;
        else if ("screenshot_personal_premium_level" === e[o].name)
          var c = 4;
        else if ("screenshot_personal_permission" === e[o].name)
          e[o].value.split(",");
        else if ("screenshot_personal_uid" === e[o].name) var n = e[o].value;
      i
        ? ((isSignIn = !0),
          $(".aws-info").find(".user-name").text(i).attr("title", i),
          $("#no-signin").hide(),
          $("#aws-account").show(),
          chrome.storage.local.get("userinfo", function (e) {
            e.userinfo &&
              ((premiumLevel = parseInt(c)),
                (Bg.premiumLevel_ = premiumLevel),
                (newPremium = e.userinfo.newPremium),
                (allowUploadImage = e.userinfo.allowUploadImage),
                (allowVideoCreate = e.userinfo.allowVideoCreate),
                (imageLimitation = e.userinfo.imageLimitation),
                (imageTotalLimitation = e.userinfo.imageTotalLimitation),
                (videoLimitation = e.userinfo.videoLimitation),
                (videoTotalLimitation = e.userinfo.videoTotalLimitation),
                (localStorage.videoTotalLimitation = videoTotalLimitation),
                (isGetUserInfo = !0),
                chrome.storage.local.set({
                  userinfo: {
                    newPremium: e.userinfo.newPremium,
                    uid: e.userinfo.uid,
                    premiumLevel: parseInt(c),
                    allowUploadImage: e.userinfo.allowUploadImage,
                    allowVideoCreate: e.userinfo.allowVideoCreate,
                    imageLimitation: e.userinfo.imageLimitation,
                    imageTotalLimitation: e.userinfo.imageTotalLimitation,
                    videoLimitation: e.userinfo.videoLimitation,
                    videoTotalLimitation: e.userinfo.videoTotalLimitation,
                  },
                }),
                updateSavePlace()),
              $("#loading").addClass("active"),
              $.ajax({ method: "GET", url: baseURL + "/api/v1/user/einfo" })
                .done(function (e) {
                  (premiumLevel = 4),
                    (Bg.premiumLevel_ = premiumLevel),
                    (newPremium = e.data.newPremium),
                    (allowUploadImage = e.data.permission.allowUploadImage),
                    (allowVideoCreate = e.data.permission.allowVideoCreate),
                    (imageLimitation = e.data.counts.imageLimitation),
                    (imageTotalLimitation = e.data.counts.imageTotalLimitation),
                    (videoLimitation = e.data.counts.videoLimitation),
                    (videoTotalLimitation = e.data.counts.videoTotalLimitation),
                    (localStorage.videoTotalLimitation = videoTotalLimitation),
                    (isGetUserInfo = !0),
                    chrome.storage.local.set({
                      userinfo: {
                        newPremium,
                        uid: n,
                        premiumLevel,
                        allowUploadImage,
                        allowVideoCreate,
                        imageLimitation,
                        imageTotalLimitation,
                        videoLimitation,
                        videoTotalLimitation,
                      },
                    }),
                    $("#loading").removeClass("active"),
                    updateSavePlace(),
                    setTimeout(function () {
                      $(document.body).removeClass("no-transition");
                    }, 500);
                })
                .catch(function (e) {
                  $("#loading").addClass("hide"),
                    setTimeout(function () {
                      $(document.body).removeClass("no-transition");
                    }, 500);
                });
          }))
        : ((isGetUserInfo = !0),
          (Bg.premiumLevel_ = 0),
          chrome.storage.local.remove("userinfo"),
          "local" === localStorage["save-location"] && showLimit(),
          $("#loading").addClass("hide"),
          $("#no-signin").show(),
          $("#aws-account").hide(),
          updateSavePlace()),
        "0" == t
          ? $(".aws-user").removeClass("premium")
          : void 0 === t
            ? ($(".aws-premium-icon").hide(), $(".aws-upgrade").hide())
            : $(".aws-user").addClass("premium"),
        isSignIn || setSaveLocal();
    }
  }),
  localStorage.popupTab,
  chrome.windows.getCurrent(function (e) {
    getCurrentTab({ windowId: e.id }, function (o) {
      chrome.browserAction.getBadgeText({ tabId: o.id }, function (o) {
        "New" == o &&
          (chrome.browserAction.setBadgeText({ text: "" }),
            chrome.tabs.create({
              url: "https://blog.awesomescreenshot.com/2022/02/15/workspace-a-collaborative-visual-repository-for-your-team/",
            }),
            (localStorage.newClickVersion = Bg.newClickVersion),
            e.close());
      });
    });
  }),
  $("#stop-entire-capture").on("click", function () {
    sendMessage({ action: "stop-entire-capture" });
  }),
  $(".tab-header-item").on("click", function () {
    var e = $(this).attr("data-tab");
    $(".tab-header").removeClass("screenshot record").addClass(e),
      $(".tab-header-item").removeClass("active"),
      $(this).addClass("active"),
      $(".tab-item").removeClass("active"),
      $(".tab-item.tab-" + e).addClass("active"),
      e && (localStorage.activeTab = e),
      "record" === e ? getVolume() : "screenshot" === e && closeVolume();
  }),
  "record" === localStorage.popupTab ||
    ("remember" === localStorage.popupTab && "record" === localStorage.activeTab)
    ? $(".tab-header-item[data-tab='record']").trigger("click")
    : "screenshot" !== localStorage.activeTab &&
    (localStorage.activeTab = "screenshot"),
  $(".action-btn").on("click", function () {
    var e = $(this);
    e.hasClass("option")
      ? Bg.openNewTab("/option-react.html")
      : e.hasClass("feedback")
        ? Bg.openNewTab("/feedback.html")
        : e.hasClass("more")
          ? (e.toggleClass("expand"), $(".more-links").toggle())
          : e.hasClass("recording")
            ? Bg.openNewTab("/video-list.html")
            : e.hasClass("sign-out") &&
            Bg.openNewTab("https://www.awesomescreenshot.com/web/user/logout");
  }),
  $(".more-links-item").on("click", function () {
    var e = $(this);
    if (e.hasClass("mp")) var o = baseURL + "/all_images";
    else if (e.hasClass("mv")) o = baseURL + "/all_videos";
    else if (e.hasClass("logout")) o = baseURL + "/web/user/logout";
    Bg.openNewTab(o);
  });
var url,
  enableSelected = !0;
function canEnableAnn() {
  var e = !1;
  return (
    Bg.isSignIn &&
    (e =
      "local" === localStorage["save-location"]
        ? !(Bg.premiumLevel_ <= 1)
        : !(
          Bg.premiumLevel_ <= 1 && localStorage.videoTotalLimitation >= 20
        )),
    e
  );
}
function selectTabRecord() {
  (haveSetDefaultTab = !0), autoSelectTabRecord();
}
function autoSelectTabRecord() {
  $("#record-type-tab").trigger("click").trigger("change", !0),
    $("#record-mic").prop("checked", !1),
    $("#tabsound").show(),
    $("#tabsoundoff").hide(),
    $("#record-tabsound").prop("checked", !0),
    $(".record-tip.auto-tab-record").css("display", "flex"),
    updateAudioDeviceUI(!1);
}
function updateAudioDeviceUI(e) {
  isAllowedMic && e && availableAudioDevices.length > 0
    ? ($("volume-canvas").show(),
      "record" === $(".tab-header-item.active").attr("data-tab") && getVolume(),
      $("#mute").hide(),
      $("#audio").show(),
      $("#mic-device").attr(
        "aria-label",
        chrome.i18n.getMessage("off_mic_btn")
      ))
    : !isAllowedMic || availableAudioDevices.length < 1
      ? ($("#mute").show(),
        $("#mute").addClass("red"),
        $("#audio").hide(),
        $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn")),
        closeVolume())
      : e ||
      ($("#mute").show(),
        $("#mute").removeClass("red"),
        $("#audio").hide(),
        $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn")),
        closeVolume());
}
function updateCamDeviceUI(e) {
  isAllowedCam && e && availableVideoDevices.length > 0
    ? ($("#nocam").hide(),
      $("#cam").show(),
      $("#cam-device").attr(
        "aria-label",
        chrome.i18n.getMessage("off_cam_btn")
      ))
    : !isAllowedCam || availableVideoDevices.length < 1
      ? ($("#nocam").show(),
        $("#nocam").addClass("red"),
        $("#cam").hide(),
        $("#cam-device").attr("aria-label", chrome.i18n.getMessage("on_cam_btn")))
      : e ||
      ($("#nocam").show(),
        $("#nocam").removeClass("red"),
        $("#cam").hide(),
        $("#cam-device").attr(
          "aria-label",
          chrome.i18n.getMessage("on_cam_btn")
        ));
}
function hiddeAutoTabRecordTip() {
  $(".record-tip.auto-tab-record").css("display", "none");
}
function addShortcut() {
  if (localStorage.msObj) {
    var e = JSON.parse(localStorage.msObj),
      o = 1 == e.visible.enable ? "Ctrl+Shift+" + e.visible.key : "",
      a = 1 == e.selected.enable ? "Ctrl+Shift+" + e.selected.key : "",
      i = 1 == e.entire.enable ? "Ctrl+Shift+" + e.entire.key : "";
    o && $("#visible").addClass("tooltip delay").attr("aria-label", o),
      o && $("#selected").addClass("tooltip delay").attr("aria-label", a),
      i && $("#entire").addClass("tooltip delay").attr("aria-label", i);
  }
}
function openPopup(e, o) {
  var a = $(".popup[data-name=" + e + "]");
  a.show(),
    o && a.find(".popup-btn").attr("data-reason", o),
    "sign-in" === e &&
    ($(".tab-header").hasClass("record")
      ? ($("#sign-in-reason").text("videos"),
        $(".popup").find(".change-local").hide())
      : ($("#sign-in-reason").text("screenshots"),
        $(".popup").find(".change-local").show()));
}
function closePopup(e) {
  $(".popup[data-name=" + e + "]").hide();
}
function i18n() {
  $("[data-i18n-id]").each(function () {
    var e = $(this).attr("data-i18n-id");
    $(this).html(chrome.i18n.getMessage(e));
  }),
    $("[data-i18n-text-id]").each(function () {
      var e = $(this).attr("data-i18n-text-id");
      $(this).attr("data-text", chrome.i18n.getMessage(e));
    }),
    $("[data-i18n-aria-label]").each(function () {
      var e = $(this).attr("data-i18n-aria-label");
      $(this).attr("aria-label", chrome.i18n.getMessage(e));
    });
}
function switchView(e) {
  "main-menu" !== e && closeVolume(),
    $(".layout-view").hide(),
    $("#" + e).show();
}
function capturing() {
  $("ul").remove(),
    $(".aws-account, .sep").hide(),
    $("#capturing").fadeIn("slow");
}
function sendMessage(e) {
  chrome.runtime.sendMessage(e);
}
function getAllDevices() {
  return new Promise(function (e, o) {
    getAllAudioVideoDevices(function (o) {
      (haveAudioDevices = (mediaDevices = o).audioInputDevices.length > 0),
        (haveVideoDevices = mediaDevices.videoInputDevices.length > 0),
        (availableAudioDevices = getDevices(mediaDevices.audioInputDevices)),
        (availableVideoDevices = getDevices(mediaDevices.videoInputDevices)),
        e();
    });
  });
}
function getMicPermisstion() {
  return navigator.permissions.query({ name: "microphone" }).then(function (e) {
    return "granted" === e.state && (isAllowedMic = !0), e.state;
  });
}
function getCamPermisstion() {
  return navigator.permissions.query({ name: "camera" }).then(function (e) {
    return "granted" === e.state && (isAllowedCam = !0), e.state;
  });
}
function getDevices(e) {
  return e.filter(function (e, o, a) {
    return (
      "" !== e.label &&
      a.findIndex(function (o) {
        return o.deviceId === e.deviceId;
      }) === o
    );
  });
}
function updateResolutionUI(e) {
  switch (e) {
    case "720":
      $("#hd_icon").show(), $("#fhd_icon").hide(), $("#4k_icon").hide();
      break;
    case "1080":
      $("#hd_icon").hide(), $("#fhd_icon").show(), $("#4k_icon").hide();
      break;
    case "4k":
      $("#hd_icon").hide(), $("#fhd_icon").hide(), $("#4k_icon").show();
  }
}
function updateVideoSaveUI(e) {
  "local" === e
    ? ($("#cloud_icon").hide(), $("#local_icon").show())
    : ($("#cloud_icon").show(), $("#local_icon").hide());
}
function updateImageSaveUI(e) {
  "local" === e
    ? ($("#cloud_icon_capture").hide(), $("#local_icon_capture").show())
    : ($("#cloud_icon_capture").show(), $("#local_icon_capture").hide());
}
function showTry() {
  hiddeLimit(),
    $(".record-tip.try.video").css("display", "flex"),
    $(".record-tip.video")
      .find(".count")
      .text(videoTotalLimitation + "/" + videoLimitation);
}
function showTryImage() {
  $(".record-tip.try.img").css("display", "flex"),
    $(".record-tip.img")
      .find(".count_image")
      .text(imageTotalLimitation + "/" + imageLimitation);
}
function hideTryImage() {
  $(".record-tip.try.img").hide();
}
function showLimit() {
  $(".start-container").hasClass("limit") ||
    $(".start-container").addClass("limit"),
    $(".record-tip.limit").show(),
    $(".record-tip.try").hide();
}
function hiddeLimit() {
  $(".start-container").removeClass("limit"), $(".record-tip.limit").hide();
}
function hideTip() {
  $(".record-tip.try.video").hide(), hiddeLimit();
}
function setSaveLocal() {
  (localStorage["save-capture-location"] = "local"), updateSavePlace();
}
function updateSavePlace() {
  $(".custom-select[data-option=save-location]")
    .find(
      ".select-option-item[data-value=" + localStorage["save-location"] + "]"
    )
    .trigger("mousedown", ["autofill"]),
    $(".custom-select[data-option=save-capture-location]")
      .find(
        ".select-option-item[data-value=" +
        localStorage["save-capture-location"] +
        "]"
      )
      .trigger("mousedown", ["autofill"]);
}
function updateRecordTypeUI(e) {
  $(".record-type-item").removeClass("selected"),
    $("#record-type-" + e)
      .parents(".record-type-item")
      .addClass("selected"),
    "tab" !== e && "custom" !== e
      ? $("#tab-sound").hide()
      : $("#tab-sound").show(),
    "camera" === e
      ? ($(".record-option-camera").hide(),
        $(".record-option-camera-only").show(),
        $(".record-option-source.ctl-bar").hide(),
        updateCamDeviceUI(!0))
      : ($(".record-option-camera").show(),
        $(".record-option-camera-only").hide(),
        $(".record-option-source.ctl-bar").show()),
    availableVideoDevices.length ||
    ("camera" === e
      ? $("#record-start").addClass("disabled")
      : $("#record-start").removeClass("disabled"));
}
function initRecordMenu() {
  function e(e, o) {
    for (var a = 0; a < o.length; a++) if (e === o[a].deviceId) return !0;
    return !1;
  }
  function o(o, a) {
    if (a.length) {
      var i = $("#" + o + "-source");
      a.forEach(function (e) {
        $(
          "<option value='" + e.deviceId + "'>" + e.label + "</option>"
        ).appendTo(i);
      }),
        localStorage[o + "-deviceId"] &&
        e(localStorage[o + "-deviceId"], a) &&
        i.val(localStorage[o + "-deviceId"]);
    }
  }
  function a(o, a) {
    if (a.length) {
      var i = $("#" + o + "-source-recording");
      a.forEach(function (e) {
        $(
          "<option value='" + e.deviceId + "'>" + e.label + "</option>"
        ).appendTo(i);
      }),
        localStorage[o + "-deviceId"] &&
        e(localStorage[o + "-deviceId"], a) &&
        i.val(localStorage[o + "-deviceId"]);
    }
  }
  function i() {
    "true" === localStorage.record_tabsound
      ? ($("#tabsound").show(),
        $("#tabsoundoff").hide(),
        $("#record-tabsound").prop("checked", !0))
      : ($("#tabsound").hide(),
        $("#tabsoundoff").show(),
        $("#record-tabsound").prop("checked", !1));
  }
  function t(e) {
    var o = "none" !== $("#audio").css("display"),
      a = $("#ctl-bar").prop("checked"),
      i = $("#record-toolbar").prop("checked"),
      t = $("input[name=record-type]:checked").val(),
      c = localStorage.record_countdown,
      n =
        $(".custom-select[data-option=max_resolution]").attr("data-value") ||
        720,
      r = $(".custom-select[data-option=save-location").attr("data-value"),
      l = "none" !== $("#cam").css("display"),
      s = $("#cam-source").val();
    ($("#cam-source").val() && localStorage["cam-deviceId"]) ||
      (availableVideoDevices.length > 0 &&
        ((s = availableVideoDevices[0].deviceId),
          (localStorage["cam-deviceId"] = s)));
    var d = $("#mic-source").val();
    ($("#mic-source").val() && localStorage["mic-deviceId"]) ||
      (availableAudioDevices.length > 0 &&
        ((d = availableAudioDevices[0].deviceId),
          (localStorage["mic-deviceId"] = d)));
    var u = $("#record-tabsound").prop("checked");
    if (
      !o &&
      availableAudioDevices.length > 0 &&
      !e &&
      "true" === localStorage["allow-remind-mic"]
    )
      openPopup("open-mic");
    else {
      var m = {
        isRecordMic: o,
        recordType: t,
        countdown: c,
        saveLocation: r,
        resolution: n,
        isRecordCam: l,
        isShowToolbar: a,
        isShowAnn: i,
        camDeviceId: s,
        micDeviceId: d,
        isRecordTabSound: u,
      },
        p = window.screen.width,
        g = window.screen.height,
        h = {
          "4k": { width: 3084, height: 2160 },
          1080: { width: 1920, height: 1080 },
          720: { width: 1280, height: 720 },
        };
      if (
        ("desktop" === t &&
          (p < h[n].width
            ? ((m.width = p), (m.height = g))
            : ((m.width = h[n].width), (m.height = h[n].height))),
          "cloud" === localStorage["save-location"])
      ) {
        if (isSignIn) {
          if (haveAudioDevices && 0 === availableAudioDevices.length)
            v = "/setup-react.html?from=record&isSignIn=true";
        } else if (haveAudioDevices) {
          if (0 !== availableAudioDevices.length)
            return void openPopup("sign-in", "record");
          var v = "/setup-react.html?from=record";
        } else var v = "/setup-react.html?from=record&isGranted=true";
        if (v && ("true" !== localStorage.has_setup || !isSignIn))
          return (
            chrome.tabs.create({ url: v }), void (localStorage.has_setup = !0)
          );
      }
      sendMessage({ action: "record", options: m }), window.close();
    }
  }
  Promise.all([getAllDevices(), getMicPermisstion(), getCamPermisstion()])
    .then(function () {
      isAllowedMic &&
        "true" == localStorage.record_mic &&
        availableAudioDevices.length > 0
        ? ($("#record-mic").prop("checked", !0),
          $("#record-mic")
            .parents(".record-option-item")
            .find(".source-part")
            .show(),
          $("volume-canvas").show(),
          $("#mute").hide(),
          $("#audio").show(),
          $("#mic-device").attr(
            "aria-label",
            chrome.i18n.getMessage("off_mic_btn")
          ))
        : !isAllowedMic || availableAudioDevices.length < 1
          ? ($("#mute").show(),
            $("#mute").find(".svg-icon").addClass("red"),
            $("#audio").hide(),
            $("#mic-device").attr(
              "aria-label",
              chrome.i18n.getMessage("on_mic_btn")
            ))
          : "true" !== localStorage.record_mic &&
          ($("#mute").show(),
            $("#mute").find(".svg-icon").removeClass("red"),
            $("#audio").hide(),
            $("#mic-device").attr(
              "aria-label",
              chrome.i18n.getMessage("on_mic_btn")
            )),
        isAllowedCam &&
          "true" == localStorage.record_cam &&
          availableVideoDevices.length > 0
          ? ($("#record-cam").prop("checked", !0),
            $("#record-cam")
              .parents(".record-option-item")
              .find(".source-part")
              .show(),
            $("#nocam").hide(),
            $("#cam").show(),
            $("#cam-device").attr(
              "aria-label",
              chrome.i18n.getMessage("off_cam_btn")
            ))
          : !isAllowedCam || availableVideoDevices.length < 1
            ? ($("#nocam").show(),
              $("#nocam").find(".svg-icon").addClass("red"),
              $("#cam").hide(),
              $("#cam-device").attr(
                "aria-label",
                chrome.i18n.getMessage("on_cam_btn")
              ))
            : "true" !== localStorage.record_cam &&
            ($("#nocam").show(),
              $("#nocam").find(".svg-icon").removeClass("red"),
              $("#cam").hide(),
              $("#cam-device").attr(
                "aria-label",
                chrome.i18n.getMessage("on_cam_btn")
              )),
        $(".option-source")
          .find("select")
          .on("change", function () {
            var e = $(this).attr("data-source"),
              o = $(this).val();
            (localStorage[e + "-deviceId"] = o),
              $(".tab-record").hasClass("active") && "mic" === e
                ? ("false" === localStorage.record_mic &&
                  (localStorage.record_mic = "true"),
                  updateAudioDeviceUI(!0))
                : $(".tab-record").hasClass("active") &&
                "cam" === e &&
                ((localStorage.record_cam = "true"), updateCamDeviceUI(!0));
          }),
        $(".device-recording-select")
          .find("select")
          .on("change", function (e) {
            var o = $(this).attr("data-source"),
              a = $(this).val();
            (localStorage[o + "-deviceId"] = a),
              "mic" === o
                ? Bg.changeAudioId(a)
                : "cam" === o && sendMessage({ action: "change-camera" });
          }),
        $("input[name=record-type]").on("change", function (e, o) {
          (isAutoRecordTab = !(!o && !haveSetDefaultTab)),
            haveSetDefaultTab || o
              ? (haveSetDefaultTab = !1)
              : ("custom" !== this.value &&
                (localStorage.record_type = this.value),
                hiddeAutoTabRecordTip()),
            isAutoRecordTab ||
            (updateAudioDeviceUI("true" === localStorage.record_mic),
              updateCamDeviceUI("true" === localStorage.record_cam)),
            updateRecordTypeUI(this.value),
            $("#record-menu").attr("class", this.value);
        }),
        $(".setup-btn").on("click", function () {
          Bg.openNewTab("/getAccess.html");
        }),
        haveSetDefaultTab
          ? autoSelectTabRecord()
          : ($("#record-type-" + localStorage.record_type).trigger("click", [
            "autofill",
          ]),
            hiddeAutoTabRecordTip()),
        haveAudioDevices
          ? availableAudioDevices.length
            ? (o("mic", availableAudioDevices), a("mic", availableAudioDevices))
            : ($(".setup-mic-btn").show(),
              $(".record-option-microphone").find(".action").hide())
          : $(".record-option-microphone")
            .find(".record-option-title")
            .text("No Microphone detected")
            .addClass("no")
            .end()
            .find(".action")
            .hide(),
        haveVideoDevices
          ? availableVideoDevices.length
            ? (o("cam", availableVideoDevices),
              o("cam-only", availableVideoDevices),
              a("cam", availableVideoDevices),
              $("#cam-only-source-part").show())
            : ($(".setup-cam-btn").show(),
              $(".record-option-camera").find(".action").hide())
          : ($(".record-option-camera")
            .find(".record-option-title")
            .addClass("no")
            .text("No Camera detected")
            .end()
            .find(".action")
            .hide(),
            $(".record-option-camera-only")
              .find(".record-option-title")
              .addClass("no")
              .text("No Camera detected"));
    })
    .catch(function (e) { }),
    $(".custom-select[data-option=save-location]")
      .find(
        ".select-option-item[data-value=" + localStorage["save-location"] + "]"
      )
      .trigger("mousedown", ["autofill"]),
    $(".custom-select[data-option=save-capture-location]")
      .find(
        ".select-option-item[data-value=" +
        localStorage["save-capture-location"] +
        "]"
      )
      .trigger("mousedown", ["autofill"]),
    $("#countdown-input").on("change", function () {
      localStorage.record_countdown = $(this).val();
    }),
    $("#record-tabsound").prop(
      "checked",
      "true" === localStorage.record_tabsound
    ),
    i(),
    $("#record-tabsound").on("change", function () {
      (localStorage.record_tabsound = $(this).prop("checked") + ""), i();
    }),
    $("#ctl-bar").on("change", function () {
      $(this).prop("checked")
        ? (localStorage.ctl_bar = "true")
        : (localStorage.ctl_bar = "false"),
        updateCtlBarUI($(this).prop("checked"));
    }),
    $("#record-toolbar").on("change", function () {
      $(this).prop("checked")
        ? isSignIn
          ? $("#ctl-bar").prop("checked")
            ? "local" === localStorage["save-location"]
              ? premiumLevel <= 1
                ? (openPopup("signin-local-upgrade", "Reocord_toolbar"),
                  $(this).prop("checked", !1))
                : (localStorage.record_toolbar = "true")
              : premiumLevel <= 1 && videoTotalLimitation >= 20
                ? (openPopup("signin-limit-upgrade", "Reocord_toolbar"),
                  $(this).prop("checked", !1))
                : (localStorage.record_toolbar = "true")
            : $(this).prop("checked", !1)
          : (openPopup("no-signin-local-upgrade", "Reocord_toolbar"),
            $(this).prop("checked", !1))
        : $("#ctl-bar").prop("checked")
          ? (localStorage.record_toolbar = "false")
          : $(this).prop("checked", !0);
    }),
    $("#local-recording").on("click", function () {
      Bg.openNewTab("/video-list.html");
    }),
    $(".record-option-source")
      .find(".field-head")
      .on("click", function () {
        var e = $(this).attr("data-type");
        if ("ctl-bar" === e)
          "true" === localStorage.ctl_bar
            ? (localStorage.ctl_bar = "false")
            : (localStorage.ctl_bar = "true"),
            updateCtlBarUI("true" === localStorage.ctl_bar);
        else if ("ann-tool" === e)
          $("#ctl-bar").prop("checked") &&
            ("true" === localStorage.record_toolbar
              ? (localStorage.record_toolbar = "false")
              : Bg.canEnableAnn() &&
              isSignIn &&
              (localStorage.record_toolbar = "true"),
              $("#record-toolbar").prop(
                "checked",
                "true" === localStorage.record_toolbar
              ));
        else if ("ann-tool-bar" === e) {
          $("#toggle-ann-menu")
            .find(".toolbar-action-icon")
            .hasClass("notoolbar") || Bg.toggleAnnBar();
        }
      }),
    $(".record-option-source")
      .find(".device-item")
      .on("click", function () {
        var e = $(this).attr("data-type");
        if ("mic" === e) {
          var o = !1,
            a = "none" === $("#audio").css("display");
          isAllowedMic
            ? "true" !== localStorage.record_mic || a
              ? ((localStorage.record_mic = "true"), (o = !0))
              : (localStorage.record_mic = "false")
            : Bg.openNewTab("/getAccess.html"),
            updateAudioDeviceUI(o);
        } else if ("cam" === e) {
          var t = !1;
          isAllowedCam
            ? "camera" !== $("input[name=record-type]:checked").val() &&
            ("true" === localStorage.record_cam
              ? (localStorage.record_cam = "false")
              : ((localStorage.record_cam = "true"), (t = !0)),
              updateCamDeviceUI(t))
            : Bg.openNewTab("/getAccess.html");
        } else
          "tabsound" === e &&
            ("true" === localStorage.record_tabsound
              ? (localStorage.record_tabsound = "false")
              : (localStorage.record_tabsound = "true"),
              i());
      }),
    $(".record-option-checkbox").on("change", function () {
      var e = $(this).attr("data-type");
      if ($(this).prop("checked")) {
        if ("mic" === e) var o = isAllowedMic;
        else if ("cam" === e) o = isAllowedCam;
        (localStorage["record_" + e] = "true"),
          !0 === o
            ? ($("#" + e + "-source-part").show(),
              "cam" === e &&
              "true" !== localStorage.record_mic &&
              isAllowedMic &&
              availableAudioDevices &&
              ((localStorage.record_mic = "true"),
                $("#record-mic").prop("checked", !0),
                $("#mic-source-part").show()),
              "mic" === e && getVolume())
            : Bg.openNewTab("/getAccess.html");
      } else (localStorage["record_" + e] = "false"), $("#" + e + "-source-part").hide(), "mic" === e && closeVolume();
    }),
    $(".popup")
      .find(".close")
      .on("click", function () {
        $(this).parents(".popup").hide(),
          this.classList.contains("cancel") && setSaveLocal();
      }),
    $(".popup")
      .find(".sub-item")
      .on("click", function () {
        var e = $(this).attr("data-type");
        "image" === e
          ? ((localStorage["save-capture-location"] = "local"),
            updateSavePlace())
          : "video" === e
            ? ((localStorage["save-location"] = "local"), updateSavePlace())
            : "invite" === e && Bg.openNewTab(baseURL + "/invite"),
          $(this).parents(".popup").hide();
      }),
    $(".popup")
      .find(".change-local")
      .on("click", function () {
        $(this).parents(".popup").hide(), setSaveLocal();
      }),
    $("#request-notification").on("click", function () {
      chrome.permissions.request(
        { permissions: ["notifications"] },
        function (e) {
          $("#grant-notification").hide(), t();
        }
      );
    }),
    $("#mic-select-recording").on("click", function () {
      availableAudioDevices.length <= 0 && Bg.openNewTab("/getAccess.html");
    }),
    $("#cam-select-recording").on("click", function () {
      availableVideoDevices.length <= 0 && Bg.openNewTab("/getAccess.html");
    }),
    $("#back-to-main").on("click", function () {
      switchView("main-menu");
    }),
    $("#record-stop").on("click", function () {
      Bg.stopStream(), window.close();
    }),
    $("#record-pause").on("click", function () {
      updatePausedUI(!0), Bg.pauseScreenRecording();
    }),
    $("#record-resume").on("click", function () {
      updatePausedUI(!1), Bg.resumeScreenRecording();
    }),
    $("#record-discard").on("click", function () {
      $("#discard-popup").show();
    }),
    $("#discard-cancel").on("click", function () {
      $("#discard-popup").hide();
    }),
    $("#discard-confirm").on("click", function () {
      Bg.stopStream(!0), window.close();
    }),
    $("#open-mic-cancel").on("click", function () {
      t(!0);
    }),
    $("#open-mic-confirm").on("click", function () {
      $(".device-item.mic").trigger("click"), t();
    }),
    $("#record-start").on("click", function () {
      if ("cloud" !== localStorage["save-location"] || isSignIn) {
        if (
          "cloud" === localStorage["save-location"] &&
          isSignIn &&
          parseInt(premiumLevel) < 2 &&
          videoTotalLimitation >= videoLimitation
        )
          return void openPopup("upgrade-alert-video");
        "alerted" !== localStorage["alert-win"] &&
          navigator.platform.indexOf("Win") >= 0 &&
          "desktop" === $("input[name=record-type]:checked").val()
          ? (openPopup("win-compter-audio"),
            (localStorage["alert-win"] = "alerted"))
          : t(isAutoRecordTab);
      } else {
        if (!haveAudioDevices) return void openPopup("sign-in", "record");
        if (0 !== availableAudioDevices.length)
          return void openPopup("sign-in", "record");
        var e = "/setup-react.html?from=record";
        chrome.tabs.create({ url: e });
      }
    }),
    $("#popup-audio-in-btn").on("click", function () {
      $(this).parents(".popup").hide(),
        (localStorage["alert-win"] = "alerted"),
        t();
    }),
    $("#popup-sign-in-btn").on("click", function () {
      var e = $(this).attr("data-reason"),
        o = "";
      (o =
        "capture" === e
          ? "ext_pop_capture"
          : "record" === e
            ? "ext_pop_record"
            : "ext_pop_bottom"),
        Bg.openNewTab("https://www.awesomescreenshot.com/signin?from=" + o);
    }),
    $("#capture-guide").on("click", function () {
      Bg.openNewTab(
        "https://support.awesomescreenshot.com/hc/en-us/articles/4403241044249-How-to-take-a-screenshot-of-desktop-entire-screen-or-an-application-window"
      );
    }),
    $(".upgrade-btn").on("click", function () {
      var e = $(this).attr("data-reason");
      Bg.googleEvent("upgrade from recording menu (" + e + ")", "upgrade"),
        Bg.goToUpgrade(e);
    }),
    $("#toggle-camera").on("click", function () {
      sendMessage({ action: "init-camera" }),
        Bg.cameraStream ||
        $("#toggle-camera").find(".camera-action-icon").addClass("loading");
    }),
    $("#toggle-mic").on("click", function () {
      Bg.toggleMic();
    }),
    $("#toggle-ann-menu").on("click", function () {
      Bg.toggleToolbar();
    });
}
function updatePausedUI(e) {
  var o = $("#recording_title");
  if (e)
    $("#recording-view").find(".recording-action").addClass("paused"),
      $("#recording-view").find(".time").addClass("paused"),
      o.html(chrome.i18n.getMessage("pause_title"));
  else {
    $("#recording-view").find(".recording-action");
    $("#recording-view").find(".recording-action").removeClass("paused"),
      $("#recording-view").find(".time").removeClass("paused"),
      o.html(chrome.i18n.getMessage("recording_title"));
  }
}
function updateRecordUI() {
  var e = $("#toggle-camera").find(".camera-action-icon"),
    o = $("#toggle-mic").find(".mic-action-icon"),
    a = $("#toggle-ann-menu").find(".toolbar-action-icon"),
    i = $("#toggle-camera"),
    t = $("#toggle-mic"),
    c = $("#toggle-ann-menu");
  Bg.cameraStream
    ? (e.hasClass("nocam") && e.removeClass("nocam"),
      i.attr("aria-label", chrome.i18n.getMessage("off_cam_btn")))
    : (e.hasClass("nocam") || e.addClass("nocam"),
      Bg.availableVideoDevices.length < 1
        ? e.hasClass("red") || e.addClass("red")
        : e.removeClass("red"),
      i.attr("aria-label", chrome.i18n.getMessage("on_cam_btn"))),
    $("#toggle-mic").find(".mic-action-icon").removeClass("loading"),
    $("#toggle-camera").find(".camera-action-icon").removeClass("loading"),
    Bg.audioStream
      ? (o.hasClass("mute") && o.removeClass("mute"),
        t.attr("aria-label", chrome.i18n.getMessage("off_mic_btn")))
      : (o.hasClass("mute") || o.addClass("mute"),
        Bg.availableAudioDevices.length < 1
          ? o.hasClass("red") || o.addClass("red")
          : o.removeClass("red"),
        t.attr("aria-label", chrome.i18n.getMessage("on_mic_btn"))),
    Bg.isShowToolbar
      ? (a.removeClass("notoolbar"),
        c.attr("aria-label", chrome.i18n.getMessage("hide_ctl_bar")),
        canEnableAnn()
          ? $(".select-option-item.ann-tool-bar").removeClass("disable")
          : $(".select-option-item.ann-tool-bar").hasClass("disable") ||
          $(".select-option-item.ann-tool-bar").addClass("disable"))
      : (a.addClass("notoolbar"),
        c.attr("aria-label", chrome.i18n.getMessage("show_ctl_bar")),
        $(".select-option-item.ann-tool-bar").addClass("disable")),
    canEnableAnn()
      ? $(".action.ann-select").show()
      : $(".action.ann-select").hide(),
    $("#ann-tool-bar").prop("checked", Bg.isShowAnn);
}
addShortcut(),
  !localStorage.capture_desktop || localStorage.capture_desktop,
  $("#show-advanced").on("click", function () {
    $("#advanced-option-container").is(":visible")
      ? $(this).removeClass("hide").find("span").text("Show Advanced Options")
      : $(this).addClass("hide").find("span").text("Hide Advanced Options"),
      $("#advanced-option-container").toggle();
  }),
  chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
    var o = e[0],
      a = (url = o.url).match(/(https?|file):\/\/*\/*/gi);
    if (
      (/Edg/.test(window.navigator.userAgent)
        ? (null == a ||
          url.match(/https:\/\/microsoftedge.microsoft.com\/addons/i)) &&
        (isAllowContentJs = !1)
        : (null == a || url.match(/https:\/\/chrome.google.com/i)) &&
        (isAllowContentJs = !1),
        "complete" != o.status &&
        ($("#selected")
          .attr({ title: "Page still loading! Please wait." })
          .addClass("disabled"),
          (enableSelected = !1)),
        /http|https|file|ftp/.test(url.slice(0, 5)) || (isAllowContentJs = !1),
        (isFileUrl = !!/file:/.test(url.slice(0, 5))),
        isAllowContentJs)
    )
      $("#record-type-custom");
    else {
      var i = document.getElementsByClassName("content-affect");
      Array.prototype.forEach.call(i, function (e) {
        e.classList.add("disable");
      }),
        $("#record-type-custom").attr({ disabled: !0 });
    }
  }),
  $("#open-setting").on("click", function () {
    var e = "chrome://extensions/?id=" + chrome.runtime.id;
    chrome.tabs.create({ url: e });
  }),
  chrome.extension.isAllowedFileSchemeAccess(function (e) {
    fileAllowedAccess = e;
  }),
  "recording" === Bg.recordingStatus &&
  (switchView("recording-view"),
    updateRecordUI(),
    Bg.isRecordingPaused &&
    (updatePausedUI(!0),
      Bg.socketClient &&
      Bg.socketClient.paused &&
      $("#recording-error").show()),
    (recordingTimer = setInterval(updateTime, 100))),
  "preparing" === Bg.recordingStatus &&
  (Bg.isInCountdown
    ? switchView("video-countdown-view")
    : switchView("video-prepare-view"),
    (prepareInterval = setInterval(function () {
      "recording" === Bg.recordingStatus
        ? (switchView("recording-view"),
          clearInterval(prepareInterval),
          (prepareInterval = null),
          (recordingTimer = setInterval(updateTime, 100)))
        : Bg.isInCountdown && $("#countdown-num").text(Bg._cd);
    }, 100))),
  chrome.runtime.onMessage.addListener(function (e, o, a) {
    switch (e.action) {
      case "enable_selected":
        if (url.match(/https:\/\/*\/*/gi))
          return void $("#selected").attr({
            title:
              "For security reason, Capture Selected Area doesn't work in https pages!",
          });
        (enableSelected = !0),
          $("#selected").attr({ title: "" }).css({ color: "#000" });
        break;
      case "shownew":
      case "closeWin":
        window.close();
        break;
      case "entireCaptureProgress":
        $("#entire-progress-percentage").text(e.percentage),
          $("#entire-progress").css("width", e.percentage),
          e.scrollNum && e.scrollNum >= 9 && $("#stop-msg").show();
        break;
      case "updateRecordUI":
        updateRecordUI();
        break;
      case "page-video-status":
        e.status ? selectTabRecord() : hiddeAutoTabRecordTip();
        break;
      case "updateAnnBar":
        var i = e.data.showAnn;
        $("#ann-tool-bar").prop("checked", i);
    }
  }),
  $(".capture-menu")
    .find(".action-item")
    .on("click", function () {
      var e = this.id;
      if (
        "visible" === e ||
        "selected" === e ||
        "entire" === e ||
        "delay" === e
      )
        if (isFileUrl && !fileAllowedAccess) openPopup("file-access");
        else if (
          isAllowContentJs ||
          isFileUrl ||
          "visible" === e ||
          "delay" === e
        ) {
          if (
            (getCurrentTab({}, function (e) {
              sendMessageToTab(e.id, { action: "tabCanScroll" });
            }),
              "cloud" === localStorage["save-capture-location"])
          ) {
            if (!isSignIn) return void openPopup("sign-in", "capture");
            if (
              parseInt(premiumLevel) < 1 &&
              imageTotalLimitation >= imageLimitation
            )
              return void openPopup("upgrade-alert-img");
          }
          sendMessage({ action: e, actionFrom: "pop" }),
            Bg.googleEvent("capture " + e, "capture"),
            "entire" === e ? switchView("capturing-view") : window.close();
        } else openPopup("reject-access");
      else if ("desktop" === e) {
        if ("cloud" === localStorage["save-capture-location"]) {
          if (!isSignIn) return void openPopup("sign-in", "capture");
          if (
            parseInt(premiumLevel) < 1 &&
            imageTotalLimitation >= imageLimitation
          )
            return void openPopup("upgrade-alert-img");
        }
        Bg.beginDesktop(),
          Bg.googleEvent("capture desktop", "capture"),
          window.close();
      } else if ("annotate" === e) {
        var o = chrome.runtime.getURL("") + "upload.html";
        chrome.tabs.create({ url: o }),
          Bg.googleEvent("capture local", "capture"),
          window.close();
      }
    }),
  $("#aws-info-upgrade").on("click", function () {
    Bg.googleEvent("upgrade from main menu", "upgrade"),
      Bg.openNewTab("https://www.awesomescreenshot.com/pricing?from=extMenu"),
      window.close();
  }),
  $("#aws-login").on("click", function () {
    Bg.openNewTab(
      "https://www.awesomescreenshot.com/signin?from=ext_pop_bottom"
    ),
      window.close();
  }),
  $(".link-item").on("click", function () {
    var e = $(this).attr("data-url");
    Bg.openNewTab(e), window.close();
  }),
  $("#user").on("click", function () {
    Bg.openNewTab("https://www.awesomescreenshot.com/settings"), window.close();
  }),
  $(".feedback").on("click", function () {
    Bg.openNewTab("/feedback.html"), window.close();
  }),
  $(".backToMenu").on("click", function () {
    switchView("main-menu");
  }),
  localStorage.delay_sec &&
  $("#delay")
    .find(".countdown")
    .text(localStorage.delay_sec + "s"),
  ("" !== localStorage.desktop_delay_sec) &
  (parseInt(localStorage.desktop_delay_sec) > 0) &&
  $("#desktop")
    .find(".countdown")
    .text(localStorage.desktop_delay_sec + "s"),
  $(".custom-select")
    .find(".select-option-item")
    .on("mousedown", function (e, o) {
      var a = $(this),
        i = $(this).attr("data-value"),
        t = $(this).attr("data-text"),
        c = $(this).parents(".custom-select").attr("data-option");
      function n(e) {
        a
          .parents(".custom-select")
          .attr("data-value", i)
          .find(".display-item")
          .text(t),
          a.siblings().removeClass("selected").end().addClass("selected"),
          e || (localStorage[c] = i);
      }
      if ("max_resolution" === c) {
        var r = "local" === localStorage["save-location"];
        "720" === i
          ? (n(r), updateResolutionUI(i))
          : ("1080" !== i && "4k" !== i) ||
          (isSignIn
            ? r
              ? premiumLevel > 1
                ? (n(), updateResolutionUI(i))
                : openPopup("signin-local-upgrade", "Record_resolution")
              : premiumLevel > 1 || videoTotalLimitation < 20
                ? (n(), updateResolutionUI(i))
                : openPopup("signin-limit-upgrade", "Record_resolution")
            : openPopup("no-signin-local-upgrade", "Record_resolution"));
      } else if ("save-location" === c)
        isSignIn
          ? "local" === i
            ? (parseInt(premiumLevel) < 2 && 0 !== newPremium) ||
              0 === parseInt(premiumLevel)
              ? showLimit()
              : (parseInt(premiumLevel), hideTip())
            : parseInt(premiumLevel) < 2 &&
              videoTotalLimitation < videoLimitation &&
              videoTotalLimitation >= 0.75 * videoLimitation
              ? showTry()
              : hideTip()
          : "local" === i
            ? showLimit()
            : hiddeLimit(),
          "local" === i
            ? $("#record-bubble").removeClass("hidde-bubble")
            : ($("#record-bubble").addClass("hidde-bubble"),
              o || isSignIn || openPopup("sign-in", "record")),
          n(),
          updateVideoSaveUI(i),
          isGetUserInfo && restoreSettings();
      else if ("save-capture-location" === c)
        "local" === i
          ? $("#capture-bubble").removeClass("hidde-bubble")
          : ($("#capture-bubble").addClass("hidde-bubble"),
            o || isSignIn || openPopup("sign-in", "capture")),
          n(),
          updateImageSaveUI(i),
          isSignIn &&
            "local" !== i &&
            parseInt(premiumLevel) < 1 &&
            imageTotalLimitation >= 0.75 * imageLimitation &&
            imageTotalLimitation < imageLimitation
            ? showTryImage()
            : hideTryImage();
      else if ("ann-tool-bar" === c) {
        !$("#toggle-ann-menu")
          .find(".toolbar-action-icon")
          .hasClass("notoolbar") &&
          canEnableAnn() &&
          Bg.toggleAnnBar();
      }
    }),
  initRecordMenu();
