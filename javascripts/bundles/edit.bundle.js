(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    a,
    i = {
      59542: (e, t, n) => {
        n.d(t, {
          Ak: () => kt,
          CE: () => At,
          Hf: () => Nt,
          IB: () => Ft,
          Kv: () => Pt,
          MC: () => Tt,
          RC: () => Et,
          RO: () => Ct,
          SZ: () => Mt,
          Tw: () => St,
          W1: () => Ut,
          dt: () => jt,
          e0: () => wt,
          fK: () => Dt,
          nU: () => _t,
          nX: () => It,
          qY: () => Ot,
          u3: () => Zt,
          uN: () => Rt,
        });
        var r = n(67294),
          a = n(16165),
          i = n(94184),
          o = n.n(i),
          s = (n(97856), n(71472)),
          l = n(52425),
          c = n(19340),
          d = n(3480),
          u = n(25737),
          h = n(18179),
          p = n(94149),
          f = n(10467),
          m = n(553),
          g = n(45616),
          v = n(13070),
          y = n(54058),
          b = n(63212),
          x = n(11034),
          j = n(42461),
          w = n(72262),
          S = n(26344),
          k = n(10258),
          C = n(83734),
          I = n(42715),
          N = n(92312),
          P = n(8957),
          T = n(95013),
          O = n(74752),
          D = n(52053),
          A = n(28737),
          Z = n(47550),
          R = n(99777),
          E = n(4842),
          U = n(63573),
          _ = n(33271),
          F = n(5649),
          M = n(49748),
          B = n(29555),
          z = n(50377),
          L = n(13640),
          W = n(45131),
          H = n(74886),
          V = n(76730),
          G = n(88816),
          Y = n(3671),
          K = n(83056),
          q = n(14573),
          $ = n(78444),
          J = n(82124),
          X = n(16040),
          Q = n(86580),
          ee = n(9209),
          te = n(71356),
          ne = n(50717),
          re = n(82145),
          ae = n(62611),
          ie = n(30824),
          oe = n(27302),
          se = n(49361),
          le = n(17122),
          ce = n(16215),
          de = n(44293),
          ue = n(58399),
          he = n(43898),
          pe = n(3068),
          fe = n(14045),
          me = n(12228),
          ge = n(89171),
          ve = n(795),
          ye = n(92562),
          be = n(58755),
          xe = n(65470),
          je = n(58650),
          we = n(74987),
          Se = n(82027),
          ke = n(83375),
          Ce = n(77532),
          Ie = n(9002),
          Ne = n(31802),
          Pe = n(69584),
          Te = n(52806),
          Oe = n(44794),
          De = n(49476),
          Ae = n(5654),
          Ze = n(7672),
          Re = n(32319),
          Ee = n(29947),
          Ue = n(55300),
          _e = n(83555),
          Fe = n(62378),
          Me = n(32103),
          Be = n(75627),
          ze = n(12371),
          Le = n(36148),
          We = n(43285),
          He = n(27307),
          Ve = n(50779),
          Ge = n(8410),
          Ye = n(59220),
          Ke = n(23594),
          qe = n(32878),
          $e = n(92404),
          Je = n(14737),
          Xe = n(84429),
          Qe = n(52521),
          et = n(99648),
          tt = n(33658),
          nt = n(2557),
          rt = n(12999),
          at = n(3327),
          it = n(17296),
          ot = n(11389),
          st = n(18977),
          lt = n(20937),
          ct = n(86801),
          dt = n(1470),
          ut = n(84297),
          ht = n(85893);
        function pt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function ft(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? pt(Object(n), !0).forEach(function (t) {
                mt(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : pt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function mt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function gt(e) {
          var t = o()("svg-icon", e.className);
          return (0, ht.jsx)(a.Z, ft(ft({}, e), {}, { className: t }));
        }
        var vt = {
          AddImageIcon: s.Z,
          AddIcon: l.Z,
          AnnotateIcon: c.Z,
          ArrowIcon: d.Z,
          CloseIcon: u.Z,
          CommentIcon: h.Z,
          CopyLinkIcon: p.Z,
          CopyIcon: f.Z,
          DownloadIcon: m.Z,
          EmbedIcon: g.Z,
          FeedbackIcon: v.Z,
          FolderIcon: y.Z,
          ImagesIcon: b.Z,
          ItemsIcon: x.Z,
          LoadingMoreIcon: j.Z,
          MoreIcon: w.Z,
          MoveFolderIcon: S.Z,
          NotificationIcon: k.Z,
          OpenFolderIcon: C.Z,
          PutBackIcon: I.Z,
          RenameIcon: N.Z,
          RightIcon: P.Z,
          TagIcon: T.Z,
          TrashFilledIcon: O.Z,
          TrashIcon: D.Z,
          VideosIcon: A.Z,
          AddTextIcon: Z.Z,
          CutIcon: R.Z,
          ProIcon: E.Z,
          PullIcon: U.Z,
          ReduceIcon: _.Z,
          MoreDotIcon: F.Z,
          PlayIcon: B.Z,
          PauseIcon: z.Z,
          FullScreenIcon: L.Z,
          NormalScreenIcon: W.Z,
          PIPIcon: H.Z,
          ReplayIcon: V.Z,
          VolumeCloseIcon: G.Z,
          VolumeHighIcon: Y.Z,
          VolumeLowIcon: K.Z,
          SharedIcon: q.Z,
          StepForwardIcon: $.Z,
          StepBackIcon: J.Z,
          CommentBubbleIcon: X.Z,
          MentionMsgIcon: Q.Z,
          VideoEditorIcon: M.Z,
          EmojiIcon: ee.Z,
          RecordDesktopIcon: te.Z,
          RecordCameraIcon: ne.Z,
          PricingTagIcon: re.Z,
          LightThemeIcon: ae.Z,
          DarkThemeIcon: ie.Z,
          AutoThemeIcon: oe.Z,
          NewTabIcon: se.Z,
          MicIcon: le.Z,
          HDIcon: ce.Z,
          CameraIcon: de.Z,
          ChromeIcon: ue.Z,
          EdgeIcon: he.Z,
          GoogleIcon: pe.Z,
          BrushIcon: fe.Z,
          SecurityIcon: ge.Z,
          SyncIcon: me.Z,
          ChannelIcon: ve.Z,
          SettingIcon: ye.Z,
          MemberIcon: be.Z,
          PersonIcon: xe.Z,
          QuestionMarkIcon: je.Z,
          CardIcon: we.Z,
          SharedMeIcon: Se.Z,
          MeIcon: ke.Z,
          StarIcon: Ce.Z,
          EmptyIcon: Ie.Z,
          PdfIcon: Ne.Z,
          PrinterIcon: Pe.Z,
          CopyImageIcon: Te.Z,
          SmileIcon: Oe.Z,
          CrownIcon: De.Z,
          CrownBgIcon: Ae.Z,
          SharedMeFilledIcon: Ze.Z,
          WarningIcon: Re.Z,
          BilligIcon: Ee.Z,
          StarFolderIcon: Ue.Z,
          MeFilledIcon: _e.Z,
          AtIcon: Fe.Z,
          StickerIcon: ee.Z,
          CameraNoIcon: Me.Z,
          TrashRecordIcon: Be.Z,
          StopRecordIcon: ze.Z,
          ActionBigIcon: We.Z,
          ActionMiniIcon: Le.Z,
          CameraRecordIcon: He.Z,
          CheckboxIcon: Ve.Z,
          DragIcon: Ge.Z,
          AddMemberIcon: Ye.Z,
          RecordPauseIcon: Ke.Z,
          RecordPlayIcon: qe.Z,
          LockIcon: $e.Z,
          EnterpriseIcon: Je.Z,
          DomainIcon: Xe.Z,
          SsoIcon: Qe.Z,
          DownloadExtIcon: et.Z,
          CopyExtIcon: tt.Z,
          PDFExtIcon: nt.Z,
          PrintExtIcon: rt.Z,
          BackupExtIcon: at.Z,
          OutIcon: it.Z,
          ShareIcon: ot.Z,
          DescIcon: st.Z,
          FolderFilledIcon: lt.Z,
          VideoFolderIcon: ct.Z,
          VideoFilmIcon: dt.Z,
          VideoEditIcon: ut.Z,
        },
          yt = {},
          bt = function (e) {
            (yt[e] = (0, r.memo)(function (t) {
              return (0, ht.jsx)(gt, ft({ component: vt[e] }, t));
            })),
              (yt[e].displayName = e);
          };
        for (var xt in vt) bt(xt);
        yt.AddImageIcon;
        var jt = yt.AddIcon,
          wt = (yt.AnnotateIcon, yt.ArrowIcon),
          St = yt.CloseIcon,
          kt =
            (yt.CommentIcon,
              yt.CopyLinkIcon,
              yt.CopyIcon,
              yt.DownloadIcon,
              yt.EmbedIcon,
              yt.FeedbackIcon),
          Ct = yt.FolderIcon,
          It = (yt.ImagesIcon, yt.ItemsIcon, yt.LoadingMoreIcon, yt.MoreIcon),
          Nt = (yt.MoveFolderIcon, yt.NotificationIcon, yt.OpenFolderIcon),
          Pt =
            (yt.PutBackIcon,
              yt.RenameIcon,
              yt.RightIcon,
              yt.TagIcon,
              yt.TrashFilledIcon,
              yt.TrashIcon,
              yt.VideosIcon,
              yt.AddTextIcon,
              yt.CutIcon,
              yt.ProIcon,
              yt.PullIcon,
              yt.ReduceIcon,
              yt.MoreDotIcon,
              yt.PlayIcon,
              yt.PauseIcon,
              yt.FullScreenIcon,
              yt.NormalScreenIcon,
              yt.PIPIcon,
              yt.ReplayIcon,
              yt.VolumeCloseIcon,
              yt.VolumeHighIcon,
              yt.VolumeLowIcon,
              yt.SharedIcon,
              yt.StepForwardIcon,
              yt.StepBackIcon,
              yt.CommentBubbleIcon,
              yt.MentionMsgIcon,
              yt.VideoEditorIcon,
              yt.EmojiIcon,
              yt.RecordDesktopIcon,
              yt.RecordCameraIcon,
              yt.PricingTagIcon,
              yt.LightThemeIcon,
              yt.DarkThemeIcon,
              yt.AutoThemeIcon,
              yt.NewTabIcon,
              yt.MicIcon,
              yt.HDIcon,
              yt.CameraIcon,
              yt.ChromeIcon,
              yt.EdgeIcon,
              yt.GoogleIcon),
          Tt = (yt.BrushIcon, yt.SecurityIcon, yt.SyncIcon, yt.ChannelIcon),
          Ot = yt.SettingIcon,
          Dt =
            (yt.MemberIcon,
              yt.PersonIcon,
              yt.QuestionMarkIcon,
              yt.CardIcon,
              yt.SharedMeIcon,
              yt.MeIcon),
          At =
            (yt.StarIcon,
              yt.EmptyIcon,
              yt.PdfIcon,
              yt.PrinterIcon,
              yt.CopyImageIcon,
              yt.SmileIcon,
              yt.CrownIcon),
          Zt = (yt.CrownBgIcon, yt.SharedMeFilledIcon, yt.WarningIcon),
          Rt =
            (yt.BilligIcon,
              yt.StarFolderIcon,
              yt.MeFilledIcon,
              yt.AtIcon,
              yt.StickerIcon,
              yt.CameraNoIcon,
              yt.TrashRecordIcon,
              yt.StopRecordIcon,
              yt.ActionBigIcon,
              yt.ActionMiniIcon,
              yt.CameraRecordIcon,
              yt.DragIcon,
              yt.CheckboxIcon,
              yt.AddMemberIcon,
              yt.RecordPauseIcon,
              yt.RecordPlayIcon,
              yt.LockIcon,
              yt.EnterpriseIcon,
              yt.DomainIcon,
              yt.SsoIcon,
              yt.DownloadExtIcon),
          Et = yt.CopyExtIcon,
          Ut = yt.PDFExtIcon,
          _t = yt.PrintExtIcon,
          Ft = yt.BackupExtIcon,
          Mt = yt.OutIcon;
        yt.ShareIcon,
          yt.DescIcon,
          yt.FolderFilledIcon,
          yt.VideoFolderIcon,
          yt.VideoFilmIcon,
          yt.VideoEditIcon;
      },
      43240: (e, t, n) => {
        n(61348);
        var r = n(78559),
          a = (n(50904), n(38648)),
          i = (n(69754), n(55026)),
          o = n(67294),
          s = n(73935),
          l = (n(13234), n(61656)),
          c = (n(74128), n(12028)),
          d = (n(57539), n(9676)),
          u = (n(12496), n(62150)),
          h = n(85907),
          p = n(27484),
          f = n.n(p),
          m = n(9669),
          g = n.n(m),
          v = (n(40705), n(28374), n(85893));
        function y(e, t, n) {
          function r(e) {
            return e.charCodeAt(0);
          }
          (t = t || ""), (n = n || 1024);
          for (var a = atob(e), i = [], o = 0; o < a.length; o += n) {
            var s = a.slice(o, o + n),
              l = Array.prototype.map.call(s, r),
              c = new Uint8Array(l);
            i.push(c);
          }
          return new Blob(i, { type: t });
        }
        function b(e) {
          window.open(e);
        }
        function x(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }
        function j(e, t, n, r) {
          var a = { version: 1, type: "doc", content: [] };
          if (
            (e &&
              e.length &&
              a.content.push({
                type: "paragraph",
                content: [{ type: "text", text: e }],
              }),
              a.content.push({ type: "rule" }),
              t)
          )
            for (var i in t) {
              var o = {
                type: "paragraph",
                content: [
                  { type: "text", text: i + ":", marks: [{ type: "strong" }] },
                  { type: "text", text: " " + t[i] },
                ],
              };
              a.content.push(o);
            }
          return (
            n &&
            (a.content.push({
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text:
                    "video" === r
                      ? "Click the link below to watch the video:"
                      : "Click the link below to see the image:",
                },
              ],
            }),
              a.content.push({
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: n,
                    marks: [{ type: "link", attrs: { href: n, title: n } }],
                  },
                ],
              })),
            a
          );
        }
        function w(e) {
          return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
        }
        function S(e) {
          var t = document.createElement("textarea");
          (t.value = e),
            (t.style.position = "absolute"),
            (t.style.top = "-999999px"),
            document.body.appendChild(t),
            t.select(),
            document.execCommand("copy"),
            document.body.removeChild(t);
        }
        function k(e, t, n) {
          var r = [],
            a = document.createElement("img");
          (a.onload = function () {
            for (
              var e = this.height,
              i = this.width,
              o = Math.ceil(e / t),
              s = e % t,
              l = 0;
              l < o;
              l++
            ) {
              var c,
                d,
                u = document.createElement("canvas"),
                h = u.getContext("2d");
              (u.width = i),
                (c = d = u.height = l !== o - 1 ? t : s),
                h.drawImage(a, 0, t * l, i, c, 0, 0, i, d),
                r.push(u.toDataURL());
            }
            n(r);
          }),
            (a.src = e);
        }
        function C(e) {
          function t(e) {
            return new Promise(function (t, n) {
              var r = new Image();
              (r.crossOrigin = "Anonymous"),
                (r.onload = function () {
                  t({ ele: r, height: r.height, width: r.width });
                }),
                (r.onerror = r.onabort =
                  function () {
                    n(e);
                  }),
                (r.src = e);
            });
          }
          for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r]));
          return Promise.all(n);
        }
        function I() {
          return new Promise(function (e) {
            chrome.permissions.request(
              { permissions: ["downloads"] },
              function (t) {
                t && e();
              }
            );
          });
        }
        function N(e) {
          var t = e.filename;
          "true" === localStorage["save-as"] &&
            localStorage.download_directory &&
            (e.filename = localStorage.download_directory + "/" + e.filename),
            chrome.downloads.download(e, function (n) {
              (void 0 === n || chrome.runtime.lastError) && P(e.url, t);
            });
        }
        function P(e, t) {
          var n = document.createElement("a"),
            r = document.createEvent("MouseEvents");
          r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            0,
            0,
            0,
            80,
            20,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            n.setAttribute("href", e),
            n.setAttribute("download", t),
            (n.rel = "noopener"),
            n.dispatchEvent(r);
        }
        function T(e) {
          if (!e) return "local-image-" + f()().format("YYYY-MM-DD_h_mm");
          var t = new URL(e),
            n = t.pathname
              ? t.pathname.split("/").splice(1).join("-") + "-"
              : "";
          return (
            "AwesomeScreenshot-" +
            t.hostname
              .replace(/^https?:\/\/(www\.)?/, "")
              .replace(/^([^/]+)\.com/, "$1")
              .replace(/[^A-Za-z0-9]+/g, "-")
              .replace(/-+/g, "-")
              .replace(/^[_-]+/, "")
              .replace(/[_-]+$/, "") +
            "-" +
            n +
            f()().format("YYYY-MM-DD_h_mm")
          );
        }
        function O(e) {
          var t = e
            .replace(/\s/g, "")
            .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
            n = ((t && t[4]) || "").trim(),
            r = t
              ? (256 | t[1]).toString(16).slice(1) +
              (256 | t[2]).toString(16).slice(1) +
              (256 | t[3]).toString(16).slice(1)
              : e;
          return (
            "" !== n ? (n > 1 ? 1 : n) : 1, "transparent" === e ? "0000000" : r
          );
        }
        function D(e) {
          return new Promise(function (t) {
            var n = window.URL.createObjectURL(e),
              r = document.createElement("img"),
              a = document.createElement("canvas"),
              i = a.getContext("2d");
            (r.onload = function () {
              (a.width = r.width),
                (a.height = r.height),
                i.drawImage(r, 0, 0),
                a.toBlob(function (e) {
                  t(e);
                });
            }),
              (r.src = n);
          });
        }
        function A(e) {
          return new Promise(function (t) {
            var n = document.createElement("img"),
              r = document.createElement("canvas"),
              a = r.getContext("2d");
            (n.onload = function () {
              (r.width = n.width),
                (r.height = n.height),
                a.drawImage(n, 0, 0),
                r.toBlob(function (e) {
                  t(e);
                });
            }),
              (n.src = e);
          });
        }
        function Z(e, t, n) {
          navigator.clipboard
            .write([
              new ClipboardItem(
                Object.defineProperty({}, e.type, { value: e, enumerable: !0 })
              ),
            ])
            .then(t, n);
        }
        function R(e, t, n, r) {
          var a = document.createElement("canvas"),
            i = a.getContext("2d"),
            o = t.height,
            s = t.width,
            l = 0,
            c = 0,
            d = 0,
            u = null,
            h = t.border.borderType;
          t.border.paddingSize > 0 &&
            ((l = t.border.paddingSize),
              (u = t.border.paddingColor),
              (c += l),
              (d += l),
              (o += 2 * l),
              (s += 2 * l)),
            (a.width = s),
            h &&
            ((o += t.border.height),
              (a.height = o),
              "url_bottom" !== h && (d += t.border.height)),
            (a.height = o),
            u &&
            (i.save(),
              (i.fillStyle = u),
              i.fillRect(0, 0, a.width, a.height),
              i.restore(),
              l > 0 &&
              ((i.shadowOffsetX = 4 * window.devicePixelRatio),
                (i.shadowOffsetY = 4 * window.devicePixelRatio),
                (i.shadowBlur = 4 * window.devicePixelRatio),
                (i.shadowColor = "rgba(0,0,0,.15)")));
          var p = URL.createObjectURL(e);
          if ("mac" === h || "windows" === h)
            (function (e, t, n) {
              return new Promise(function (r) {
                if (e) {
                  var a,
                    i = t.paddingSize ? t.paddingSize : 0,
                    o = "mac" === t.borderType ? "mac" : "win",
                    s = "web" == n ? "/static/images/" : "./images/",
                    l = s + o + "-header-left.png",
                    c = s + o + "-header-center.png",
                    d = s + o + "-header-right.png",
                    u = e.width;
                  C([l, c, d]).then(function (n) {
                    var s = e.getContext("2d"),
                      l = i;
                    if (
                      ((a = u - t.left - t.right - 2 * i),
                        n.forEach(function (e, n) {
                          var o;
                          1 === n
                            ? (o = a)
                            : 0 === n
                              ? (o = t.left)
                              : 2 === n && (o = t.right),
                            s.drawImage(
                              e.ele,
                              0,
                              0,
                              e.width,
                              e.height,
                              l,
                              i,
                              o,
                              t.height
                            ),
                            (l += o),
                            2 === n && r();
                        }),
                        t.url)
                    )
                      if (
                        ((s.font = 13 * window.devicePixelRatio + "px Arial"),
                          (s.fillStyle = "#000000"),
                          s.measureText(t.url).width > a)
                      ) {
                        var c = U(s, t.url, a);
                        s.fillText(
                          c,
                          140 * window.devicePixelRatio + i,
                          ("mac" === o ? 66 : 70) * window.devicePixelRatio + i
                        );
                      } else
                        s.fillText(
                          t.url,
                          140 * window.devicePixelRatio + i,
                          ("mac" === o ? 66 : 70) * window.devicePixelRatio + i
                        );
                    if (t.captureTime) {
                      (s.font = 12 * window.devicePixelRatio + "px sans-serif"),
                        (s.fillStyle = "#000000");
                      var d = s.measureText(t.captureTime).width,
                        h = u - i - 10 * window.devicePixelRatio - d,
                        p =
                          "mac" === o
                            ? 34 * window.devicePixelRatio + i
                            : 39 * window.devicePixelRatio + i;
                      s.fillText(t.captureTime, h, p);
                    }
                  });
                }
              });
            })(a, t.border, n).then(function () {
              var e = document.createElement("img");
              (e.onload = function () {
                i.drawImage(e, c, d);
                var t =
                  "png" === localStorage.format ? "image/png" : "image/jpeg";
                a.toBlob(
                  function (e) {
                    r(e);
                  },
                  t,
                  1
                );
              }),
                (e.src = p);
            });
          else {
            !(function (e, t, n) {
              if (!(Object.keys(t).indexOf("url") < 0)) {
                var r = e.getContext("2d"),
                  a = "url_top" == t.borderType ? 0 : n,
                  i = t.paddingSize ? t.paddingSize : 0,
                  o = e.width - 20 - 2 * i,
                  s =
                    "Captured at: " +
                    t.captureTime +
                    (t.url && t.url.length ? "  URL: " + t.url : ""),
                  l = "single",
                  c = 40;
                if (
                  ((r.font = "bold 24px Arial"), r.measureText(s).width > o)
                ) {
                  l = "multiple";
                  var d = _(r, "URL:" + t.url, o);
                  c = 40 * (d.length + 1);
                }
                if (
                  ((r.fillStyle = "#000000"),
                    r.fillRect(i, a + i, e.width - 2 * i, c),
                    r.restore(),
                    (r.fillStyle = "#ffffff"),
                    (r.textBaseline = "top"),
                    (r.strokeStyle = "#ffffff"),
                    (r.font = "bold 24px Arial"),
                    "single" === l)
                )
                  r.fillText(s, 12 + i, 8 + a + i);
                else {
                  r.fillText("Captured at:" + t.captureTime, 12 + i, 8 + a + i);
                  for (var u = 0; u < d.length; u++)
                    r.fillText(d[u], 12 + i, 8 + 40 * (u + 1) + a + i);
                }
              }
            })(a, t.border, t.height);
            var f = document.createElement("img");
            (f.onload = function () {
              i.drawImage(f, c, d);
              var e =
                "png" === localStorage.format ? "image/png" : "image/jpeg";
              a.toBlob(
                function (e) {
                  r(e);
                },
                e,
                1
              );
            }),
              (f.src = p);
          }
        }
        function E(e, t, n, r) {
          var a = document.createElement("canvas"),
            i = a.getContext("2d"),
            o = n.length
              ? "Captured at: " +
              f()().format("YYYY/MM/DD hh:mm") +
              "  URL: " +
              n
              : "Captured at: " + f()().format("YYYY/MM/DD hh:mm"),
            s = "single",
            l = 40,
            c = "bold 24px Arial",
            d = "bold 24px Arial";
          i.font = c;
          _(i, o, t.width);
          var u = i.measureText("Captured at: ").width,
            h = i.measureText("URL: ").width;
          if (
            ((i.font = d),
              u +
              h +
              i.measureText(n).width +
              i.measureText(f()().format("YYYY/MM/DD hh:mm") + " ").width >
              t.width)
          ) {
            s = "multiple";
            var p = _(i, "URL: " + n, t.width),
              m = p.length;
            l = 40 * (m + 1);
          }
          (a.width = t.width), (a.height = t.height + l);
          var g = URL.createObjectURL(e),
            v = document.createElement("img");
          if (
            ((v.onload = function () {
              i.drawImage(v, 0, l);
              var e =
                "png" === localStorage.format ? "image/png" : "image/jpeg";
              a.toBlob(
                function (e) {
                  r(e);
                },
                e,
                1
              );
            }),
              (v.src = g),
              (i.fillStyle = "#000000"),
              i.fillRect(0, 0, a.width, l),
              i.restore(),
              (i.fillStyle = "#ffffff"),
              (i.textBaseline = "top"),
              (i.strokeStyle = "#ffffff"),
              (i.font = "bold 24px Arial"),
              "single" === s)
          ) {
            i.fillText("Captured at: ", 10, 10),
              (i.font = d),
              i.fillText(f()().format("YYYY/MM/DD hh:mm A") + " ", 10 + u, 10);
            var y =
              i.measureText(f()().format("YYYY/MM/DD hh:mm A") + " ").width +
              20;
            n.length &&
              ((i.font = c),
                i.fillText("URL: ", 10 + u + y, 10),
                (i.font = d),
                i.fillText(n, 10 + u + y + h, 10));
          } else {
            i.fillText("Captured at: ", 10, 10),
              (i.font = d),
              i.fillText(f()().format("MM/DD/YYYY, hh:mm A"), 10 + u, 10);
            for (var b = 0; b < p.length; b++)
              0 === b
                ? ((i.font = c),
                  i.fillText("URL: ", 10, 50),
                  (i.font = d),
                  i.fillText(p[0].substring(5), 10 + h, 50))
                : ((i.font = d), i.fillText(p[b], 10, 10 + 40 * (b + 1)));
          }
          i.beginPath(), i.moveTo(0, l), i.stroke(), i.closePath();
        }
        function U(e, t, n) {
          for (var r = t.split(""), a = r[0], i = 1; i < r.length; i++) {
            var o = r[i];
            if (!(e.measureText(a + " " + o).width < n)) break;
            a += o;
          }
          return a + "...";
        }
        function _(e, t, n) {
          n -= 10;
          for (
            var r = t.split(""), a = [], i = r[0], o = 1;
            o < r.length;
            o++
          ) {
            var s = r[o];
            e.measureText(i + " " + s).width < n
              ? (i += s)
              : (a.push(i), (i = s));
          }
          return a.push(i), a;
        }
        var F = n(94184),
          M = n.n(F);
        function B(e) {
          return (
            (B =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            B(e)
          );
        }
        function z(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return L(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return L(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function L(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function W(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function H(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function V(e, t, n) {
          return (
            t && H(e.prototype, t),
            n && H(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function G(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Y(e, t);
        }
        function Y(e, t) {
          return (
            (Y = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            Y(e, t)
          );
        }
        function K(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = J(e);
            if (t) {
              var a = J(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return q(this, n);
          };
        }
        function q(e, t) {
          if (t && ("object" === B(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return $(e);
        }
        function $(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function J(e) {
          return (
            (J = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            J(e)
          );
        }
        var X = [
          "rgba(255, 0, 0,1)",
          "rgba(255, 92, 0, 1)",
          "rgba(250, 255, 0, 1)",
          "rgba(36, 255, 0, 1)",
          "rgba(0, 255, 240, 1)",
          "rgba(0, 163, 255, 1)",
          "rgba(144, 75, 255, 1)",
          "rgba(255, 0, 229, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(244, 219, 121, 1)",
          "rgba(248, 202, 65, 1)",
          "rgba(246, 130, 61, 1)",
          "rgba(226, 90, 59, 1)",
          "rgba(242, 155, 126, 1)",
          "rgba(217, 72, 70, 1)",
          "rgba(160, 67, 72, 1)",
          "rgba(228, 123, 135, 1)",
          "rgba(198, 57, 69, 1)",
          "rgba(198, 69, 101, 1)",
          "rgba(165, 65, 90, 1)",
          "rgba(151, 55, 143, 1)",
          "rgba(112, 70, 140, 1)",
          "rgba(79, 74, 142, 1)",
          "rgba(94, 69, 128, 1)",
          "rgba(67, 84, 104, 1)",
          "rgba(34, 126, 169, 1)",
          "rgba(59, 77, 105, 1)",
          "rgba(47, 86, 165, 1)",
          "rgba(25, 104, 173, 1)",
          "rgba(72, 86, 145, 1)",
          "rgba(11, 123, 185, 1)",
          "rgba(74, 176, 209, 1)",
          "rgba(22, 140, 152, 1)",
          "rgba(22, 161, 134, 1)",
          "rgba(33, 143, 106, 1)",
          "rgba(45, 98, 90, 1)",
          "rgba(80, 111, 80, 1)",
          "rgba(93, 150, 73, 1)",
          "rgba(120, 120, 71, 1)",
          "transparent",
        ],
          Q = [
            "Times New Roman",
            "Arial",
            "Craft Girls",
            "OpenSans",
            "Roboto",
            "Montserrat",
            "Limelight",
            "Lobster",
            "Anton",
            "Chewy",
            "Frijole",
            "Spirax",
            "Dancing Script",
            "Changa One",
            "Griffy",
          ],
          ee = [2, 4, 6, 8, 16],
          te = [6, 8, 16, 32, 48],
          ne = (function (e) {
            G(n, e);
            var t = K(n);
            function n(e) {
              return W(this, n), t.call(this, e);
            }
            return (
              V(n, [
                {
                  key: "shouldComponentUpdate",
                  value: function (e) {
                    return (
                      e.disabled !== this.props.disabled ||
                      this.props.allowAdvancedTool !== e.allowAdvancedTool
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.disabled,
                      n = e.action,
                      r = e.title,
                      a = e.handleClick,
                      i = M()("tool-btn single-btn", { disabled: t }),
                      o = M()(this.props.allowAdvancedTool ? "" : "pro");
                    return (0, v.jsx)(u.Z, {
                      title: r,
                      children: (0, v.jsx)("div", {
                        className: i,
                        "data-action": n,
                        onClick: a.bind(this, "action", { actionType: n }),
                        children: (0, v.jsx)("b", { className: o }),
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.Component),
          re = (function (e) {
            G(n, e);
            var t = K(n);
            function n(e) {
              var r;
              return (
                W(this, n),
                ((r = t.call(this, e)).state = { haveClickShape: !1 }),
                (r.clickShape = r.clickShape.bind($(r))),
                (r.visibleChange = r.visibleChange.bind($(r))),
                r
              );
            }
            return (
              V(n, [
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return (
                      e.current !== this.props.current ||
                      this.props.allowAdvancedTool !== e.allowAdvancedTool ||
                      this.props.selectShape !== e.selectShape ||
                      this.state.haveClickShape !== t.haveClickShape
                    );
                  },
                },
                {
                  key: "clickShape",
                  value: function () {
                    this.setState({ haveClickShape: !1 }),
                      this.props.handleClick("shape", {
                        shape: this.props.shape,
                        shapeKey: this.props.shapeGroup,
                      });
                  },
                },
                {
                  key: "visibleChange",
                  value: function (e) {
                    this.setState({ haveClickShape: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.current,
                      n = e.shape,
                      r = e.title,
                      a = e.active,
                      i = e.selectShape,
                      o = !1;
                    i ? i === n && (o = !0) : (o = n === t || a);
                    var s = M()("tool-btn single-btn " + n, { active: o }),
                      l = M()(this.props.allowAdvancedTool ? "" : "pro");
                    return (0, v.jsx)(u.Z, {
                      title: r,
                      placement: "bottom",
                      visible: this.state.haveClickShape,
                      mouseEnterDelay: 0,
                      mouseLeaveDelay: 0,
                      onVisibleChange: this.visibleChange,
                      children: (0, v.jsx)("div", {
                        className: s,
                        "data-shape": n,
                        onClick: this.clickShape,
                        children: (0, v.jsx)("b", { className: l }),
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.Component);
        function ae(e) {
          var t,
            n,
            r,
            a = e.current,
            i = e.defaultShape,
            s = e.handleClick,
            l = e.btns,
            c = e.allowAdvancedTool,
            d = e.selectShape,
            u = e.shapeGroup;
          (0, o.useEffect)(function () { }, [d]);
          return (function () {
            var o;
            (o = !1),
              l &&
              l.forEach(function (e) {
                d
                  ? e.shape == d && ((o = !0), (t = e.title), (n = e.shape))
                  : (e.shape === a && (o = !0),
                    e.shape === i && ((t = e.title), (n = e.shape)));
              }),
              d &&
              !o &&
              l.forEach(function (e) {
                e.shape === i && ((t = e.title), (n = e.shape));
              }),
              (r = o);
            var h = M()("menu", { active: r });
            return (0, v.jsxs)("div", {
              className: "subMenu",
              children: [
                (0, v.jsx)(re, {
                  title: t,
                  shape: n,
                  active: r,
                  selectShape: d || "",
                  current: a,
                  shapeGroup: u,
                  handleClick: s,
                  onToolBar: !0,
                  allowAdvancedTool: c,
                }),
                (0, v.jsx)("div", { className: h, children: e.children() }),
              ],
            });
          })();
        }
        var ie = o.memo(ae, function (e, t) {
          return (
            t.currentShapeKey !== e.shapeGroup &&
            e.currentShapeKey !== e.shapeGroup &&
            e.allowAdvancedTool === t.allowAdvancedTool &&
            e.currentShape === t.currentShape &&
            e.defaultShape !== t.selectShape
          );
        }),
          oe = o.memo(se, function (e, t) {
            return e.currentColor === t.currentColor;
          });
        function se(e) {
          var t = this,
            n = e.recentColors,
            r = e.currentColor,
            a = e.stroke,
            i = e.handleColorClick,
            s = e.shapeKey,
            l = z((0, o.useState)(!0), 2),
            c = l[0],
            d = l[1],
            p = z((0, o.useState)(r), 2),
            f = p[0],
            m = p[1];
          function g(e) {
            return "rgb(239, 239, 239)" === e ||
              "rgb(243, 243, 243)" === e ||
              "rgb(255, 255, 255)" === e ||
              "rgb(252, 229, 205)" === e ||
              "rgb(255, 242, 204)" === e
              ? "#bdc1c6"
              : "transparent";
          }
          function y(e, t) {
            i(e, !!t), m(e);
          }
          return (
            (0, o.useEffect)(
              function () {
                r !== f && m(r);
              },
              [r]
            ),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsxs)("div", {
                  className: "color-header",
                  children: [
                    (0, v.jsxs)("div", {
                      className: "color-values",
                      children: [
                        (0, v.jsx)("div", {
                          className: "color-icon",
                          "data-color": f,
                          style: { backgroundColor: f },
                        }),
                        (0, v.jsx)(h.ZE, {
                          color: O(f),
                          onChange: y,
                          onClick: function (e) {
                            e.target.select();
                          },
                          alpha: !0,
                          prefixed: !0,
                        }),
                      ],
                    }),
                    (0, v.jsx)(u.Z, {
                      title: "More Colors",
                      placement: "right",
                      children: (0, v.jsx)("div", {
                        className: "change-action",
                        style: { backgroundColor: c ? "" : "#26272D" },
                        onClick: function () {
                          d(!c);
                        }.bind(this),
                        children: (0, v.jsx)("b", {}),
                      }),
                    }),
                  ],
                }),
                (0, v.jsx)("div", {
                  className: "color-content",
                  children: c
                    ? X.map(function (e, n) {
                      return "transparent" !== e
                        ? (0, v.jsx)(
                          "div",
                          {
                            className: "color-item",
                            "data-color": e,
                            title: e,
                            style: {
                              backgroundColor: e,
                              borderColor: g(e),
                            },
                            onClick: y.bind(t, e, "item"),
                          },
                          s + e + n
                        )
                        : a
                          ? (0, v.jsx)(
                            "div",
                            {
                              className: "color-item transparent",
                              "data-color": "transparent",
                              title: "transparent",
                              style: {
                                backgroundColor: "#666666",
                                borderColor: g("transparent"),
                              },
                              onClick: y.bind(t, "transparent", "item"),
                            },
                            "transparent" + s
                          )
                          : void 0;
                    })
                    : (0, v.jsx)(h.gW, { color: O(f), onChange: y }),
                }),
                (0, v.jsxs)("div", {
                  className: "color-foot",
                  children: [
                    (0, v.jsx)("span", { children: "Recent Colors" }),
                    (0, v.jsx)("div", {
                      className: "recent-colors",
                      children: n.map(function (e, n) {
                        return (0,
                          v.jsx)("div", { className: "color-item recent-item", "data-color": e, title: e, style: { backgroundColor: e, borderColor: g(e) }, onClick: y.bind(t, e, "item") }, e + s + n);
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function le(e) {
          var t = this,
            n = e.style,
            r = e.selectShape,
            a = e.shapeKey,
            i = e.clickItem,
            s = z((0, o.useState)(!1), 2),
            l = s[0],
            c = s[1],
            d = !1;
          if (n) var h = n.width;
          "highlight" !== a || (n && n.width) || (h = 16);
          var p = "highlight" === a;
          r && ((h = r.penWidth), "highlight" === r.shapeName && (p = !0));
          var f = h;
          function m(e) {
            c((!e || !d) && e);
          }
          return (0, v.jsx)(ue, {
            className: "tool-pen-width multi-btn",
            children: function (e, n) {
              var r = M()("panel", { active: e.isExpand });
              e.isExpand && c(!1), (d = e.isExpand);
              var o = function (e) {
                n(),
                  (f = e),
                  i("action", {
                    actionType: "changePenWidth",
                    value: e,
                    shapeKey: a,
                  });
              };
              return (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)(u.Z, {
                    title: "Stroke width",
                    placement: "bottom",
                    visible: l,
                    onVisibleChange: m,
                    children: (0, v.jsxs)("div", {
                      className: "current",
                      id: "tool-current-width",
                      "data-width": f || h,
                      children: [
                        (0, v.jsxs)("div", {
                          className:
                            "tool-current-width " + (p ? "highlight" : ""),
                          children: [
                            (0, v.jsx)("span", { children: f || h }),
                            (0, v.jsx)("b", {}),
                          ],
                        }),
                        (0, v.jsx)("div", { className: "multi-btn-arrow" }),
                      ],
                    }),
                  }),
                  (0, v.jsx)("div", {
                    className: r,
                    children: p
                      ? te.map(function (e, n) {
                        return (0,
                          v.jsxs)("div", { className: "pen-width-item " + (e === f ? "checked" : ""), "data-width": n + 1, onClick: o.bind(t, e), children: [(0, v.jsx)("span", { children: e }), (0, v.jsx)("b", {})] }, e);
                      })
                      : ee.map(function (e, n) {
                        return (0,
                          v.jsxs)("div", { className: "pen-width-item " + (e === f ? "checked" : ""), "data-width": n + 1, onClick: o.bind(t, e), children: [(0, v.jsx)("span", { children: e }), (0, v.jsx)("b", {})] }, e);
                      }),
                  }),
                ],
              });
            },
          });
        }
        function ce(e) {
          var t = this,
            n = e.style,
            r = e.selectShape,
            a = e.shapeKey,
            i = e.clickItem,
            s = z((0, o.useState)(!1), 2),
            l = s[0],
            c = s[1],
            d = !1,
            h = n.fontFamily;
          r && r.fontName && (h = r.fontName);
          var p = h;
          function f(e) {
            c((!e || !d) && e);
          }
          return (0, v.jsx)(ue, {
            className: "tool-font-family multi-btn",
            children: function (e, n) {
              var r = M()("panel", { active: e.isExpand });
              (d = e.isExpand), e.isExpand && c(!1);
              var o = function (e) {
                n(),
                  (p = e),
                  i("action", {
                    actionType: "changeFontFamily",
                    value: e,
                    shapeKey: a,
                  });
              };
              return (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)(u.Z, {
                    title: "Font",
                    placement: "bottom",
                    visible: l,
                    onVisibleChange: f,
                    children: (0, v.jsxs)("div", {
                      className: "tool-current-font-family btn-border current",
                      id: "tool-current-font-family",
                      "data-ff": p || h,
                      children: [
                        (0, v.jsx)("span", { children: p || h }),
                        (0, v.jsx)("div", { className: "btn-down-arrow" }),
                      ],
                    }),
                  }),
                  (0, v.jsx)("div", {
                    className: r,
                    children: Q.map(function (e) {
                      return (0,
                        v.jsx)("div", { className: "font-f-item " + (p === e ? "checked" : ""), "data-ff": e, onClick: o.bind(t, e), children: e }, e);
                    }),
                  }),
                ],
              });
            },
          });
        }
        var de = (function (e) {
          G(n, e);
          var t = K(n);
          function n(e) {
            var r;
            return (
              W(this, n),
              ((r = t.call(this, e)).state = { isExpand: !1 }),
              (r.toggle = r.toggle.bind($(r))),
              (r.clickView = r.clickView.bind($(r))),
              (r.elementContains = r.elementContains.bind($(r))),
              (r.el = (0, o.createRef)()),
              r
            );
          }
          return (
            V(n, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("click", this.clickView);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("click", this.clickView);
                },
              },
              {
                key: "elementContains",
                value: function (e, t) {
                  return (e !== t && e.contains(t)) || e === t;
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return !(
                    t.isExpand === this.state.isExpand &&
                    e.allowAdvancedTool === this.props.allowAdvancedTool &&
                    !t.isExpand &&
                    e.color === this.props.color
                  );
                },
              },
              {
                key: "clickView",
                value: function (e) {
                  var t = this.el.current.querySelector(
                    "." + this.props.checkView
                  );
                  this.elementContains(t, e.target) ||
                    (this.elementContains(this.el.current, e.target)
                      ? (this.toggle(),
                        this.props.handleClick &&
                        this.props.handleClick("action", {
                          actionType: "ToolColorSelect",
                        }))
                      : this.state.isExpand &&
                      this.setState({ isExpand: !this.state.isExpand }));
                },
              },
              {
                key: "toggle",
                value: function () {
                  this.setState({ isExpand: !this.state.isExpand });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = M()(
                    "tool-select " + (this.state.isExpand ? "expand" : ""),
                    this.props.className
                  );
                  return (0, v.jsx)("div", {
                    className: e,
                    tabIndex: "0",
                    ref: this.el,
                    children: this.props.children(this.state, this.toggle),
                  });
                },
              },
            ]),
            n
          );
        })(o.Component),
          ue = (function (e) {
            G(n, e);
            var t = K(n);
            function n(e) {
              var r;
              return (
                W(this, n),
                ((r = t.call(this, e)).state = { isExpand: !1 }),
                (r.toggle = r.toggle.bind($(r))),
                (r.el = (0, o.createRef)()),
                r
              );
            }
            return (
              V(n, [
                {
                  key: "shouldComponentUpdate",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "toggle",
                  value: function () {
                    var e = this;
                    this.state.isExpand && this.el.current.blur(),
                      this.setState(
                        { isExpand: !this.state.isExpand },
                        function () {
                          e.props.onPopupShown &&
                            e.props.onPopupShown(e.state.isExpand);
                        }
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = M()(
                      "tool-select " + (this.state.isExpand ? "expand" : ""),
                      this.props.className
                    );
                    return (0, v.jsx)("div", {
                      className: e,
                      tabIndex: "0",
                      onFocus: this.toggle,
                      onBlur: this.toggle,
                      ref: this.el,
                      children: this.props.children(this.state, this.toggle),
                    });
                  },
                },
              ]),
              n
            );
          })(o.Component),
          he = n(6700);
        function pe(e) {
          return (
            (pe =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            pe(e)
          );
        }
        function fe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function me(e, t) {
          return (
            (me = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            me(e, t)
          );
        }
        function ge(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = be(e);
            if (t) {
              var a = be(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return ve(this, n);
          };
        }
        function ve(e, t) {
          if (t && ("object" === pe(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return ye(e);
        }
        function ye(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function be(e) {
          return (
            (be = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            be(e)
          );
        }
        var xe = [20, 30, 40, 68, 98],
          je = [
            { title: "Top Left", value: "top_left" },
            { title: "Top Right", value: "top_right" },
            { title: "Center", value: "center" },
            { title: "Bottom Left", value: "bottom_left" },
            { title: "Bottom Right", value: "bottom_right" },
          ],
          we = [
            { title: "", value: "mac" },
            { title: "", value: "windows" },
            { title: "URL on top", value: "url_top" },
            { title: "URL on bottom", value: "url_bottom" },
          ],
          Se = [
            { title: "Rectangle", shape: "rect" },
            { title: "Ellipse", shape: "ellipse" },
          ],
          ke = localStorage.rect ? localStorage.rect : "rect",
          Ce = localStorage.line ? localStorage.line : "big_head_arrow",
          Ie = [
            { title: "Big head arrow", shape: "big_head_arrow" },
            { title: "Line arrow", shape: "line_arrow" },
            { title: "Bezier arrow", shape: "bezier_arrow" },
            { title: "Line", shape: "line" },
          ],
          Ne = [
            "windows-cursor",
            "cursor",
            "cursor-hand",
            "cursor-hand-black",
            "cursor-click",
            "smile",
            "cry",
            "tick-off",
            "cross",
            "forbidden",
            "warning",
            "q-mark",
            "like",
            "heart",
            "star",
            "chicken",
            "dog",
            "rain",
            "sun",
            "cloud",
            "thunder",
            "fish",
            "fish2",
            "tree1",
            "tree2",
            "building1",
            "building2",
            "package",
            "tent",
            "umbrella",
            "car",
            "basketball",
            "beer",
          ],
          Pe = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && me(e, t);
            })(i, e);
            var t,
              n,
              r,
              a = ge(i);
            function i(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                ((t = a.call(this, e)).fontSizeInputRef = (0, o.createRef)()),
                (t.inputCalloutRef = (0, o.createRef)()),
                (t.inputFileRef = (0, o.createRef)()),
                (t.colorFieldRef = (0, o.createRef)()),
                (t.state = { maskUrl: "" }),
                (t.handleCropDemensionChange = t.handleCropDemensionChange.bind(
                  ye(t)
                )),
                (t.handleFileInputChange = t.handleFileInputChange.bind(ye(t))),
                t
              );
            }
            return (
              (t = i),
              (n = [
                {
                  key: "handleCropDemensionChange",
                  value: function (e, t) {
                    "" === t.target.value && (t.target.value = 0),
                      this.props.handleToolBarBtnClick("action", {
                        actionType: "crop-demension-" + e,
                        value: t.target.value,
                      });
                  },
                },
                {
                  key: "handleFileInputChange",
                  value: function (e) {
                    var t = e.target.files[0];
                    if (t) {
                      var n = URL.createObjectURL(t);
                      this.setState({ maskUrl: n }),
                        this.props.handleToolBarBtnClick("action", {
                          actionType: "addMask",
                          value: n,
                        });
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.handleToolBarBtnClick,
                      r = t.handleResizeInputChange,
                      a = t.handleResizeProportionChange,
                      i = t.getResizeInfo,
                      o = t.currentTool,
                      s = t.currentScale,
                      p = t.cropWidth,
                      f = t.cropHeight,
                      m = t.resizeWidth,
                      g = t.resizeHeight,
                      y = t.resizeProportional,
                      b = t.canUndo,
                      x = t.canRedo,
                      j = t.canClear,
                      w = t.canDeleteSelected,
                      S = t.finishEdit,
                      k = t.handleTextBgChange,
                      C = t.handleResetList,
                      I = t.selectShape,
                      N = t.drawStyle,
                      P = t.maskPosition,
                      T = t.enableBrowser,
                      D = t.enablePadding,
                      A = t.enableMask,
                      Z = t.borderType,
                      R = t.checkedUrl,
                      E = t.checkedCaptureTime,
                      U = t.paddingColor,
                      _ = t.recentColors,
                      F = t.paddingSize,
                      B = t.maskSize,
                      z = t.maskOpacity,
                      L = t.currentToolGroup,
                      W = 100 * s + "%",
                      H = function (t, n) {
                        var r = N[t],
                          a = 24;
                        r && (a = r.fontSize),
                          I &&
                          I.fontName &&
                          ((a = I.penWidth),
                            n.current && (n.current.value = a));
                        var i = a,
                          o = function (r) {
                            var a = n.current.value;
                            "add" === r
                              ? a < 190
                                ? a++
                                : (a = 190)
                              : a > 11
                                ? a--
                                : (a = 10),
                              (n.current.value = a),
                              (i = a),
                              e.props.handleToolBarBtnClick("action", {
                                actionType: "changeFontSize",
                                value: a,
                                shapeKey: t,
                              });
                          };
                        return (0, v.jsxs)("div", {
                          className: "font-size-group",
                          children: [
                            (0, v.jsx)(u.Z, {
                              title: "Decrease font size",
                              placement: "bottom",
                              children: (0, v.jsx)("div", {
                                className: "action",
                                onClick: o.bind(e, "plus"),
                                children: "-",
                              }),
                            }),
                            (0, v.jsx)(de, {
                              checkView: "panel",
                              className: "tool-font-size multi-btn",
                              children: function (r, a) {
                                var o = M()("panel", { active: r.isExpand });
                                !r.isExpand && n.current && n.current.blur();
                                var s = function (r) {
                                  a(),
                                    (i = r),
                                    (n.current.value = i),
                                    e.props.handleToolBarBtnClick("action", {
                                      actionType: "changeFontSize",
                                      value: r,
                                      shapeKey: t,
                                    });
                                };
                                return (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)(u.Z, {
                                      title: "Font size",
                                      placement: "bottom",
                                      children: (0, v.jsx)("div", {
                                        className:
                                          "tool-current-font-size current",
                                        "data-fs": i,
                                        id: "tool-current-font-size",
                                        children: (0, v.jsx)("input", {
                                          type: "text",
                                          id: "change-size",
                                          maxLength: "4",
                                          className: "font-size",
                                          onClick: function () {
                                            n.current.setSelectionRange(
                                              0,
                                              n.current.value.length
                                            );
                                          },
                                          ref: n,
                                          defaultValue: i,
                                          onBlur: function () {
                                            n.current.value = i;
                                          }.bind(e),
                                          onKeyDown: function (r) {
                                            if (13 === r.keyCode) {
                                              var o = n.current.value;
                                              if (o.length > 0)
                                                try {
                                                  (o = parseInt(o)),
                                                    isNaN(o) && (o = i);
                                                } catch (r) {
                                                  o = i;
                                                }
                                              o < 10 && (o = 10),
                                                o > 190 && (o = 190),
                                                (i = o),
                                                (n.current.value = i),
                                                a(),
                                                n.current.blur(),
                                                e.props.handleToolBarBtnClick(
                                                  "action",
                                                  {
                                                    actionType:
                                                      "changeFontSize",
                                                    value: i,
                                                    shapeKey: t,
                                                  }
                                                );
                                            }
                                          }.bind(e),
                                        }),
                                      }),
                                    }),
                                    (0, v.jsx)("div", {
                                      className: o,
                                      children: xe.map(function (t) {
                                        return (0,
                                          v.jsx)("div", { className: "font-s-item " + (i == t ? "checked" : ""), "data-fs": t, onClick: s.bind(e, t), children: t }, t);
                                      }),
                                    }),
                                  ],
                                });
                              },
                            }),
                            (0, v.jsx)(u.Z, {
                              title: "Increase font size",
                              placement: "bottom",
                              children: (0, v.jsx)("div", {
                                className: "action",
                                onClick: o.bind(e, "add"),
                                children: "+",
                              }),
                            }),
                          ],
                        });
                      },
                      V = function (e, t) {
                        var r = N[e];
                        "highlight" !== e || (r && r.color) || (r = N.curve);
                        var a = !0,
                          i = t ? "Stroke color" : "Color";
                        if (r) {
                          var o = r.color;
                          t && (o = r.strokeColor);
                        } else "padding_color" === e && ((o = U), (a = !1));
                        I &&
                          "padding_color" !== e &&
                          (o = t
                            ? I.strokeColor
                              ? I.strokeColor
                              : o
                            : I.color
                              ? I.color
                              : o),
                          "highlight" === e &&
                          (o = (function (e) {
                            if (
                              e &&
                              e.toLocaleLowerCase().startsWith("rgba")
                            ) {
                              var t = e
                                .split("(")[1]
                                .split(")")[0]
                                .split(",");
                              return (
                                "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
                              );
                            }
                            return e;
                          })(o));
                        var s = o,
                          l = "changeColor";
                        t && (l = "changeStroke");
                        var c = "panel";
                        return (0, v.jsx)(de, {
                          checkView: c,
                          color: s,
                          className: "tool-color-picker multi-btn",
                          children: function (r, d) {
                            var h = M()(c, { active: r.isExpand });
                            return (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsx)(u.Z, {
                                  title: i,
                                  placement: "bottom",
                                  children: (0, v.jsxs)("div", {
                                    className: "current",
                                    id: "tool-current-color",
                                    "data-color": s || o,
                                    children: [
                                      (0, v.jsx)("div", {
                                        className: "tool-current-color ",
                                        style: {
                                          backgroundColor:
                                            "transparent" !== s ? s : "",
                                        },
                                        children:
                                          "highlight" === e
                                            ? (0, v.jsx)("b", {})
                                            : (0, v.jsx)(v.Fragment, {}),
                                      }),
                                      a
                                        ? (0, v.jsx)("div", {
                                          className: "multi-btn-arrow",
                                        })
                                        : (0, v.jsx)(v.Fragment, {}),
                                    ],
                                  }),
                                }),
                                (0, v.jsx)("div", {
                                  className: h,
                                  children: (0, v.jsx)(oe, {
                                    handleColorClick: function (t, r) {
                                      r && d(),
                                        (s = t),
                                        (o = t),
                                        n("action", {
                                          actionType: l,
                                          value: t,
                                          shapeKey: e,
                                        }),
                                        n("action", {
                                          actionType: "changeRecentColor",
                                          value: t,
                                          shapeKey: e,
                                        });
                                    },
                                    actionType: l,
                                    stroke: t,
                                    shapeKey: e,
                                    recentColors: _,
                                    currentColor: s,
                                  }),
                                }),
                              ],
                            });
                          },
                        });
                      };
                    return (0, v.jsx)("div", {
                      className: "toolbar active",
                      children: this.props.isInCropMode
                        ? (0, v.jsxs)("div", {
                          className: "crop-area",
                          children: [
                            (0, v.jsx)("div", {
                              className:
                                "tool-action-btn primary-btn crop-item",
                              id: "crop-btn",
                              onClick: n.bind(e, "action", {
                                actionType: "doCrop",
                              }),
                              children: "Crop",
                            }),
                            (0, v.jsx)("div", {
                              className:
                                "tool-action-btn border-btn crop-item",
                              id: "crop-cancel-btn",
                              onClick: n.bind(e, "action", {
                                actionType: "leaveCrop",
                              }),
                              children: "Cancel",
                            }),
                            (0 !== p || 0 !== f) &&
                            (0, v.jsxs)("div", {
                              id: "crop-dimension",
                              children: [
                                (0, v.jsxs)("div", {
                                  children: [
                                    "Width:",
                                    (0, v.jsx)("input", {
                                      type: "text",
                                      id: "cd-width",
                                      className: "cd-input",
                                      onChange:
                                        e.handleCropDemensionChange.bind(
                                          null,
                                          "width"
                                        ),
                                      value: p,
                                    }),
                                  ],
                                }),
                                (0, v.jsxs)("div", {
                                  children: [
                                    "Height:",
                                    (0, v.jsx)("input", {
                                      id: "cd-height",
                                      type: "text",
                                      className: "cd-input",
                                      onChange:
                                        e.handleCropDemensionChange.bind(
                                          null,
                                          "height"
                                        ),
                                      value: f,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                        : (0, v.jsxs)("div", {
                          className: "tools",
                          children: [
                            "ext" !== e.props.type &&
                            (0, v.jsxs)("div", {
                              className: "back-btn",
                              onClick: e.props.handleBack,
                              children: [(0, v.jsx)(he.Z, {}), "Return"],
                            }),
                            (0, v.jsxs)("div", {
                              className: "editer-content-field",
                              children: [
                                (0, v.jsx)(de, {
                                  checkView: "panel",
                                  handleClick: n,
                                  className: "resize",
                                  children: function (e, t) {
                                    var o = M()("panel", {
                                      active: e.isExpand,
                                    }),
                                      s = M()("tool-btn resize-btn", {
                                        active: e.isExpand,
                                      });
                                    return (0, v.jsxs)(v.Fragment, {
                                      children: [
                                        (0, v.jsx)(u.Z, {
                                          title: "Resize",
                                          children: (0, v.jsx)("div", {
                                            className: s,
                                            id: "resize-btn",
                                            onClick: i,
                                            children: (0, v.jsx)("b", {}),
                                          }),
                                        }),
                                        (0, v.jsxs)("div", {
                                          className: o,
                                          children: [
                                            (0, v.jsxs)("div", {
                                              className: "row",
                                              children: [
                                                (0, v.jsx)("span", {
                                                  children: "Width:",
                                                }),
                                                (0, v.jsx)("input", {
                                                  type: "number",
                                                  id: "resize-width",
                                                  min: "1",
                                                  max: "5000",
                                                  value: m,
                                                  onChange: r.bind(
                                                    null,
                                                    "width"
                                                  ),
                                                }),
                                                "px",
                                              ],
                                            }),
                                            (0, v.jsxs)("div", {
                                              className: "row",
                                              children: [
                                                (0, v.jsx)("span", {
                                                  children: "Height:",
                                                }),
                                                (0, v.jsx)("input", {
                                                  type: "number",
                                                  id: "resize-height",
                                                  min: "1",
                                                  max: "5000",
                                                  value: g,
                                                  onChange: r.bind(
                                                    null,
                                                    "height"
                                                  ),
                                                }),
                                                "px",
                                              ],
                                            }),
                                            (0, v.jsx)("div", {
                                              className: "row",
                                              children: (0, v.jsx)("label", {
                                                htmlFor:
                                                  "resize-proportional",
                                                children: (0, v.jsx)(d.Z, {
                                                  checked: y,
                                                  onChange: a,
                                                  children: "Proportional",
                                                }),
                                              }),
                                            }),
                                            (0, v.jsxs)("div", {
                                              className: "row",
                                              children: [
                                                (0, v.jsx)("div", {
                                                  className: "do-resize-btn",
                                                  id: "do-resize-btn",
                                                  onClick: function (e) {
                                                    t(),
                                                      "doResize" === e
                                                        ? n("action", {
                                                          actionType:
                                                            "doResize",
                                                        })
                                                        : "getSize" === e &&
                                                        i();
                                                  }.bind(null, "doResize"),
                                                  children: "Resize",
                                                }),
                                                (0, v.jsx)("div", {
                                                  className: "resize-cancel",
                                                  id: "resize-cancel",
                                                  onClick: t,
                                                  children: "Cancel",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(ne, {
                                  title: "Crop",
                                  action: "crop",
                                  handleClick: n,
                                }),
                                (0, v.jsx)(ie, {
                                  defaultShape: "curve",
                                  btns: [{ title: "Pen", shape: "curve" }],
                                  current: o,
                                  shapeGroup: "curve",
                                  currentShapeKey: L,
                                  currentShape: I,
                                  selectShape: I ? I.shapeName : "",
                                  handleClick: n,
                                  children: function () {
                                    return (0, v.jsxs)("div", {
                                      children: [
                                        V("curve"),
                                        (0, v.jsx)(le, {
                                          selectShape: I,
                                          style: N.curve,
                                          shapeKey: "curve",
                                          clickItem:
                                            e.props.handleToolBarBtnClick,
                                        }),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(ie, {
                                  defaultShape: "highlight",
                                  btns: [
                                    {
                                      title: "Highlighter",
                                      shape: "highlight",
                                    },
                                  ],
                                  current: o,
                                  shapeGroup: "highlight",
                                  currentShapeKey: L,
                                  currentShape: I,
                                  selectShape: I ? I.shapeName : "",
                                  handleClick: n,
                                  children: function () {
                                    return (0, v.jsxs)("div", {
                                      children: [
                                        V("highlight"),
                                        (0, v.jsx)(le, {
                                          selectShape: I,
                                          style: N.highlight,
                                          shapeKey: "highlight",
                                          clickItem:
                                            e.props.handleToolBarBtnClick,
                                        }),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(ie, {
                                  btns: Se,
                                  current: o,
                                  shapeGroup: "rect",
                                  currentShapeKey: L,
                                  defaultShape: ke,
                                  currentShape: I,
                                  selectShape: I ? I.shapeName : "",
                                  handleClick: n,
                                  children: function () {
                                    var t = function (e) {
                                      (ke = e),
                                        n("shape", {
                                          shape: e,
                                          fromMenu: !0,
                                          shapeKey: "rect",
                                        });
                                    };
                                    return (0, v.jsxs)("div", {
                                      children: [
                                        Se.map(function (e) {
                                          return (0,
                                            v.jsx)(re, { title: e.title, shape: e.shape, shapeGroup: "rect", current: o, selectShape: I ? I.shapeName : "", handleClick: t.bind(null, e.shape) }, e.shape);
                                        }),
                                        (0, v.jsx)("div", {
                                          className: "tool-sep",
                                        }),
                                        V("rect"),
                                        (0, v.jsx)(le, {
                                          selectShape: I,
                                          style: N.rect,
                                          shapeKey: "rect",
                                          clickItem:
                                            e.props.handleToolBarBtnClick,
                                        }),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(ie, {
                                  btns: Ie,
                                  current: o,
                                  currentShape: I,
                                  selectShape: I ? I.shapeName : "",
                                  defaultShape: Ce,
                                  shapeGroup: "line",
                                  currentShapeKey: L,
                                  title: "Line arrow",
                                  handleClick: n,
                                  children: function () {
                                    var t = function (e) {
                                      (Ce = e),
                                        n("shape", {
                                          shape: e,
                                          fromMenu: !0,
                                          shapeKey: "line",
                                        });
                                    };
                                    return (0, v.jsxs)("div", {
                                      children: [
                                        Ie.map(function (e) {
                                          return (0,
                                            v.jsx)(re, { title: e.title, shape: e.shape, shapeGroup: "line", current: o, selectShape: I ? I.shapeName : "", handleClick: t.bind(null, e.shape) }, e.shape);
                                        }),
                                        (0, v.jsx)("div", {
                                          className: "tool-sep",
                                        }),
                                        V("line"),
                                        (0, v.jsx)(le, {
                                          selectShape: I,
                                          style: N.line,
                                          shapeKey: "line",
                                          clickItem:
                                            e.props.handleToolBarBtnClick,
                                        }),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(ie, {
                                  btns: [{ title: "Text", shape: "text" }],
                                  current: o,
                                  currentShape: I,
                                  selectShape: I ? I.shapeName : "",
                                  defaultShape: "text",
                                  shapeGroup: "text",
                                  currentShapeKey: L,
                                  handleClick: n,
                                  children: function () {
                                    var t = N.text,
                                      n = !1,
                                      r = !1;
                                    t &&
                                      ((n = t.isTextBg), (r = t.showShadow)),
                                      I &&
                                      "text" === I.shapeName &&
                                      ((n = I.isTextBg),
                                        (r = I.showShadow));
                                    var a = n ? "bg" : "",
                                      i = r ? "bg" : "",
                                      o = function (e) {
                                        k(e);
                                      };
                                    return (0, v.jsxs)(v.Fragment, {
                                      children: [
                                        (0, v.jsx)(ce, {
                                          selectShape: I,
                                          style: N.text,
                                          shapeKey: "text",
                                          clickItem:
                                            e.props.handleToolBarBtnClick,
                                        }),
                                        H("text", e.fontSizeInputRef),
                                        V("text"),
                                        (0, v.jsx)("div", {
                                          className: "tool-sep",
                                        }),
                                        (0, v.jsx)(u.Z, {
                                          title: "Background",
                                          placement: "bottom",
                                          children: (0, v.jsx)("div", {
                                            className:
                                              "single-btn text-bg-option-btn ".concat(
                                                a
                                              ),
                                            onClick: o.bind(null, "text-bg"),
                                            children: (0, v.jsx)("span", {
                                              children: "A",
                                            }),
                                          }),
                                        }),
                                        (0, v.jsx)(u.Z, {
                                          title: "Shadow",
                                          placement: "bottom",
                                          children: (0, v.jsx)("div", {
                                            className:
                                              "single-btn text-bg-option-btn text-shadow ".concat(
                                                i
                                              ),
                                            onClick: o.bind(
                                              null,
                                              "text-shadow"
                                            ),
                                            children: (0, v.jsx)("div", {}),
                                          }),
                                        }),
                                        V("text", "stroke"),
                                      ],
                                    });
                                  },
                                }),
                                (0, v.jsx)(re, {
                                  title: "Blur",
                                  shape: "rect_blur",
                                  shapeGroup: "rect_blur",
                                  current: o,
                                  selectShape: I ? I.shapeName : "",
                                  handleClick: n,
                                }),
                                (0, v.jsxs)("div", {
                                  className: "advanced-tool",
                                  children: [
                                    (0, v.jsx)(ie, {
                                      btns: [
                                        {
                                          title: "Callout",
                                          shape: "callout",
                                        },
                                      ],
                                      current: o,
                                      currentShape: I,
                                      selectShape: I ? I.shapeName : "",
                                      defaultShape: "callout",
                                      shapeGroup: "callout",
                                      currentShapeKey: L,
                                      handleClick: n,
                                      allowAdvancedTool:
                                        e.props.allowAdvancedTool,
                                      children: function () {
                                        return (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            (0, v.jsx)(ce, {
                                              selectShape: I,
                                              style: N.callout,
                                              shapeKey: "callout",
                                              clickItem:
                                                e.props.handleToolBarBtnClick,
                                            }),
                                            H("callout", e.inputCalloutRef),
                                            V("callout"),
                                          ],
                                        });
                                      },
                                    }),
                                    (0, v.jsx)(ie, {
                                      btns: [
                                        { title: "Step", shape: "list" },
                                      ],
                                      current: o,
                                      currentShape: I,
                                      selectShape: I ? I.shapeName : "",
                                      defaultShape: "list",
                                      shapeGroup: "list",
                                      currentShapeKey: L,
                                      handleClick: n,
                                      allowAdvancedTool:
                                        e.props.allowAdvancedTool,
                                      children: function () {
                                        return (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            V("list"),
                                            (0, v.jsx)("div", {
                                              className:
                                                "tool-select tool-restart-sequence",
                                              children: (0, v.jsx)("div", {
                                                onClick: C,
                                                children: "Restart Sequence",
                                              }),
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                    (0, v.jsx)(
                                      de,
                                      {
                                        checkView: "panel",
                                        allowAdvancedTool:
                                          e.props.allowAdvancedTool,
                                        handleClick: n,
                                        className: "tool-image-picker",
                                        children: function (t, r) {
                                          var a = M()("panel", {
                                            active: t.isExpand,
                                          }),
                                            i = M()("image-btn", {
                                              active: t.isExpand,
                                            }),
                                            o = function (e) {
                                              r(),
                                                n("action", {
                                                  actionType: "doInsertImage",
                                                  value: e,
                                                });
                                            },
                                            s = M()(
                                              e.props.allowAdvancedTool
                                                ? ""
                                                : "pro"
                                            );
                                          return (0, v.jsxs)(v.Fragment, {
                                            children: [
                                              (0, v.jsx)(u.Z, {
                                                title: "Stickers",
                                                children: (0, v.jsxs)("div", {
                                                  className: i,
                                                  id: "image-btn",
                                                  children: [
                                                    (0, v.jsx)("b", {
                                                      className: s,
                                                    }),
                                                    (0, v.jsx)("div", {
                                                      className:
                                                        "image-btn-arrow",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, v.jsx)("div", {
                                                className: a,
                                                children: (0, v.jsx)("div", {
                                                  className:
                                                    "panel-container",
                                                  children: Ne.map(function (
                                                    t
                                                  ) {
                                                    if (
                                                      "web" === e.props.type
                                                    )
                                                      var n =
                                                        "/images/svg/" +
                                                        t +
                                                        ".svg";
                                                    else
                                                      n =
                                                        "./images/svg/" +
                                                        t +
                                                        ".svg";
                                                    return (0, v.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "image-item",
                                                        onClick: o.bind(
                                                          null,
                                                          t
                                                        ),
                                                        children: (0, v.jsx)(
                                                          "img",
                                                          { src: n, alt: "" }
                                                        ),
                                                      },
                                                      t
                                                    );
                                                  }),
                                                }),
                                              }),
                                            ],
                                          });
                                        },
                                      },
                                      "emoj"
                                    ),
                                    (0, v.jsx)(ne, {
                                      title: "Image",
                                      action: "insert-image",
                                      handleClick: n,
                                      allowAdvancedTool:
                                        e.props.allowAdvancedTool,
                                    }),
                                    (0, v.jsx)(de, {
                                      checkView: "menu",
                                      handleClick: n,
                                      className: "subMenu border-pickier",
                                      children: function (t) {
                                        var r = M()("menu", {
                                          active: t.isExpand,
                                        }),
                                          a = "icon-position " + P.value,
                                          i = function (t, r) {
                                            n("action", {
                                              actionType: "changeSwitchValue",
                                              value: r,
                                              type: t,
                                            }),
                                              "watermask" !== t ||
                                              r ||
                                              e.setState({ maskUrl: null });
                                          };
                                        return (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            (0, v.jsx)(u.Z, {
                                              title: "Watermark",
                                              children: (0, v.jsx)("div", {
                                                className:
                                                  "single-btn watermask",
                                                "data-shape": "watermask",
                                                children: (0, v.jsx)("b", {
                                                  className: "beta",
                                                }),
                                              }),
                                            }),
                                            (0, v.jsx)("div", {
                                              className: r,
                                              children: (0, v.jsxs)("div", {
                                                className: "content",
                                                children: [
                                                  (0, v.jsxs)("div", {
                                                    className:
                                                      "section-title",
                                                    children: [
                                                      (0, v.jsx)("span", {
                                                        children: "Watermark",
                                                      }),
                                                      (0, v.jsx)(c.Z, {
                                                        className: "switch",
                                                        size: "small",
                                                        onChange: i.bind(
                                                          e,
                                                          "watermask"
                                                        ),
                                                        defaultChecked: A,
                                                      }),
                                                    ],
                                                  }),
                                                  A
                                                    ? (0, v.jsxs)("div", {
                                                      children: [
                                                        (0, v.jsxs)("div", {
                                                          className:
                                                            "mask-preview",
                                                          style: {
                                                            backgroundImage:
                                                              e.state
                                                                .maskUrl
                                                                ? "url(" +
                                                                e.state
                                                                  .maskUrl +
                                                                ")"
                                                                : "none",
                                                          },
                                                          onClick:
                                                            function () {
                                                              e.inputFileRef.current.click();
                                                            }.bind(e),
                                                          children: [
                                                            (0, v.jsx)(
                                                              "input",
                                                              {
                                                                type: "file",
                                                                className:
                                                                  "file-input",
                                                                ref: e.inputFileRef,
                                                                accept:
                                                                  ".jpg,.jpeg,.png",
                                                                onChange:
                                                                  e.handleFileInputChange,
                                                              }
                                                            ),
                                                            (0, v.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "tips",
                                                                children: e
                                                                  .state
                                                                  .maskUrl
                                                                  ? (0,
                                                                    v.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "change-mask",
                                                                        children:
                                                                          "Change Image",
                                                                      }
                                                                    )
                                                                  : (0,
                                                                    v.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "upload-mask",
                                                                        children:
                                                                          "Upload Image",
                                                                      }
                                                                    ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, v.jsxs)("div", {
                                                          className:
                                                            "mask-position-field",
                                                          children: [
                                                            (0, v.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  a,
                                                              }
                                                            ),
                                                            (0, v.jsx)(ue, {
                                                              className:
                                                                "select-position",
                                                              children:
                                                                function (
                                                                  t,
                                                                  r
                                                                ) {
                                                                  var a =
                                                                    M()(
                                                                      "panel",
                                                                      {
                                                                        active:
                                                                          t.isExpand,
                                                                      }
                                                                    ),
                                                                    i =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        r(),
                                                                          n(
                                                                            "action",
                                                                            {
                                                                              actionType:
                                                                                "changeMaskPosition",
                                                                              value:
                                                                                e,
                                                                            }
                                                                          );
                                                                      };
                                                                  return (0,
                                                                    v.jsxs)(
                                                                      v.Fragment,
                                                                      {
                                                                        children:
                                                                          [
                                                                            (0,
                                                                              v.jsx)(
                                                                                "span",
                                                                                {
                                                                                  children:
                                                                                    P.title,
                                                                                }
                                                                              ),
                                                                            (0,
                                                                              v.jsx)(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    a,
                                                                                  children:
                                                                                    je.map(
                                                                                      function (
                                                                                        t
                                                                                      ) {
                                                                                        return (0,
                                                                                          v.jsxs)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "position-item",
                                                                                              onClick:
                                                                                                i.bind(
                                                                                                  e,
                                                                                                  t
                                                                                                ),
                                                                                              children:
                                                                                                [
                                                                                                  (0,
                                                                                                    v.jsx)(
                                                                                                      "div",
                                                                                                      {
                                                                                                        className:
                                                                                                          "icon-position " +
                                                                                                          t.value,
                                                                                                      }
                                                                                                    ),
                                                                                                  t.title,
                                                                                                ],
                                                                                            },
                                                                                            t.value
                                                                                          );
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    );
                                                                },
                                                            }),
                                                          ],
                                                        }),
                                                        (0, v.jsxs)("div", {
                                                          className:
                                                            "mask_size_field",
                                                          children: [
                                                            (0, v.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "size_show_field",
                                                                children: [
                                                                  (0,
                                                                    v.jsx)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "Size",
                                                                      }
                                                                    ),
                                                                  (0,
                                                                    v.jsx)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "size_value",
                                                                        children:
                                                                          B +
                                                                          "%",
                                                                      }
                                                                    ),
                                                                ],
                                                              }
                                                            ),
                                                            (0, v.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "size_action_field",
                                                                children:
                                                                  (0,
                                                                    v.jsx)(
                                                                      l.Z,
                                                                      {
                                                                        className:
                                                                          "slider_opacity",
                                                                        defaultValue:
                                                                          B,
                                                                        value:
                                                                          B,
                                                                        disabled:
                                                                          !e
                                                                            .state
                                                                            .maskUrl,
                                                                        min: 20,
                                                                        max: 200,
                                                                        tipFormatter:
                                                                          "",
                                                                        onChange:
                                                                          i.bind(
                                                                            e,
                                                                            "mask_size"
                                                                          ),
                                                                      }
                                                                    ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, v.jsxs)("div", {
                                                          className:
                                                            "mask_opacity_field",
                                                          children: [
                                                            (0, v.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "size_show_field",
                                                                children: [
                                                                  (0,
                                                                    v.jsx)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "Opacity",
                                                                      }
                                                                    ),
                                                                  (0,
                                                                    v.jsx)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "size_value",
                                                                        children:
                                                                          z +
                                                                          "%",
                                                                      }
                                                                    ),
                                                                ],
                                                              }
                                                            ),
                                                            (0, v.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "size_action_field",
                                                                children:
                                                                  (0,
                                                                    v.jsx)(
                                                                      l.Z,
                                                                      {
                                                                        className:
                                                                          "slider_opacity",
                                                                        defaultValue:
                                                                          z,
                                                                        value:
                                                                          z,
                                                                        disabled:
                                                                          !e
                                                                            .state
                                                                            .maskUrl,
                                                                        tipFormatter:
                                                                          "",
                                                                        onChange:
                                                                          i.bind(
                                                                            e,
                                                                            "mask_opacity"
                                                                          ),
                                                                      }
                                                                    ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                      ],
                                                    })
                                                    : (0, v.jsx)(
                                                      v.Fragment,
                                                      {}
                                                    ),
                                                ],
                                              }),
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                    (0, v.jsx)(de, {
                                      checkView: "menu",
                                      handleClick: n,
                                      className: "subMenu border-pickier",
                                      children: function (t) {
                                        var r = M()("menu", {
                                          active: t.isExpand,
                                        }),
                                          a = function (e, t) {
                                            ("check_url" !== e &&
                                              "check_time" !== e) ||
                                              (t = t.target.checked),
                                              n("action", {
                                                actionType:
                                                  "changeSwitchValue",
                                                value: t,
                                                type: e,
                                              });
                                          },
                                          i = function (t) {
                                            "click" === t
                                              ? e.colorFieldRef.current.classList.contains(
                                                "active"
                                              ) ||
                                              e.colorFieldRef.current.classList.add(
                                                "active"
                                              )
                                              : e.colorFieldRef.current.classList.remove(
                                                "active"
                                              );
                                          },
                                          o = function (e) {
                                            n("action", {
                                              actionType: "changeBowser",
                                              value: e,
                                            });
                                          };
                                        return (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            (0, v.jsx)(u.Z, {
                                              title: "Border",
                                              children: (0, v.jsx)("div", {
                                                className:
                                                  "single-btn border",
                                                "data-shape": "border",
                                                children: (0, v.jsx)("b", {
                                                  className: "beta",
                                                }),
                                              }),
                                            }),
                                            (0, v.jsx)("div", {
                                              className: r,
                                              children: (0, v.jsxs)("div", {
                                                className: "content",
                                                children: [
                                                  (0, v.jsxs)("div", {
                                                    className:
                                                      "section-title",
                                                    children: [
                                                      (0, v.jsx)("span", {
                                                        children: "Browser",
                                                      }),
                                                      (0, v.jsx)(c.Z, {
                                                        className: "switch",
                                                        size: "small",
                                                        onChange: a.bind(
                                                          e,
                                                          "browser"
                                                        ),
                                                        checked: T,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, v.jsxs)("div", {
                                                    className:
                                                      "browser-content",
                                                    style: {
                                                      display: T
                                                        ? "block"
                                                        : "none",
                                                    },
                                                    children: [
                                                      we.map(function (e) {
                                                        return (0,
                                                          v.jsx)("div", { className: "thum-border " + (Z === e.value ? " active" : ""), children: (0, v.jsx)("div", { className: "thum_browser " + e.value, onClick: o.bind(null, e.value), children: e.title }) }, e.value);
                                                      }),
                                                      (0, v.jsxs)("div", {
                                                        className:
                                                          "check_field check_url",
                                                        style: {
                                                          display:
                                                            ("mac" !== Z &&
                                                              "windows" !==
                                                              Z) ||
                                                              !e.props.tabUrl
                                                              ? "none"
                                                              : "flex",
                                                        },
                                                        children: [
                                                          (0, v.jsx)("span", {
                                                            children:
                                                              "Include URL",
                                                          }),
                                                          (0, v.jsx)(d.Z, {
                                                            checked: R,
                                                            onChange: a.bind(
                                                              e,
                                                              "check_url"
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, v.jsxs)("div", {
                                                        className:
                                                          "check_field check_time",
                                                        style: {
                                                          display:
                                                            "mac" !== Z &&
                                                              "windows" !== Z
                                                              ? "none"
                                                              : "flex",
                                                        },
                                                        children: [
                                                          (0, v.jsx)("span", {
                                                            children:
                                                              "Include Date",
                                                          }),
                                                          (0, v.jsx)(d.Z, {
                                                            checked: E,
                                                            onChange: a.bind(
                                                              e,
                                                              "check_time"
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, v.jsxs)("div", {
                                                    className:
                                                      "section-title",
                                                    children: [
                                                      (0, v.jsx)("span", {
                                                        children: "Padding",
                                                      }),
                                                      (0, v.jsx)(c.Z, {
                                                        className: "switch",
                                                        size: "small",
                                                        onChange: a.bind(
                                                          e,
                                                          "padding"
                                                        ),
                                                        defaultChecked: D,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, v.jsxs)("div", {
                                                    className:
                                                      "padding-content",
                                                    style: {
                                                      display: D
                                                        ? "block"
                                                        : "none",
                                                    },
                                                    children: [
                                                      (0, v.jsxs)("div", {
                                                        className:
                                                          "color_field",
                                                        ref: e.colorFieldRef,
                                                        children: [
                                                          V("padding_color"),
                                                          (0, v.jsx)("span", {
                                                            children: "#",
                                                          }),
                                                          (0, v.jsx)(h.ZE, {
                                                            color: O(U),
                                                            onClick: i.bind(
                                                              e,
                                                              "click"
                                                            ),
                                                            onBlur: i.bind(
                                                              e,
                                                              "focus"
                                                            ),
                                                            onChange:
                                                              function (e) {
                                                                n("action", {
                                                                  actionType:
                                                                    "changeColor",
                                                                  value: e,
                                                                  shapeKey:
                                                                    "padding_color",
                                                                });
                                                              },
                                                          }),
                                                        ],
                                                      }),
                                                      (0, v.jsxs)("div", {
                                                        className:
                                                          "size_field",
                                                        children: [
                                                          (0, v.jsxs)("div", {
                                                            className:
                                                              "size_show_field",
                                                            children: [
                                                              (0, v.jsx)(
                                                                "span",
                                                                {
                                                                  children:
                                                                    "Size",
                                                                }
                                                              ),
                                                              (0, v.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "size_value",
                                                                  children:
                                                                    F + "px",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, v.jsx)("div", {
                                                            className:
                                                              "size_action_field",
                                                            children: (0,
                                                              v.jsx)(l.Z, {
                                                                max: "200",
                                                                className:
                                                                  "slider_opacity",
                                                                value: F,
                                                                tipFormatter:
                                                                  "",
                                                                onChange:
                                                                  a.bind(
                                                                    e,
                                                                    "padding_size"
                                                                  ),
                                                              }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "preload mac left",
                                                  }),
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "preload mac right",
                                                  }),
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "preload windows left",
                                                  }),
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "preload windows right",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "editer-action-field",
                              children: [
                                (0, v.jsx)(ne, {
                                  title: "Undo",
                                  action: "undo",
                                  disabled: !b,
                                  handleClick: n,
                                }),
                                (0, v.jsx)(ne, {
                                  title: "Redo",
                                  action: "redo",
                                  disabled: !x,
                                  handleClick: n,
                                }),
                                (0, v.jsx)(ne, {
                                  title: "Clear",
                                  action: "clear",
                                  disabled: !j,
                                  handleClick: n,
                                }),
                                (0, v.jsx)(ne, {
                                  title: "Delete selected",
                                  action: "deleteSelected",
                                  disabled: !w,
                                  handleClick: n,
                                }),
                              ],
                            }),
                            (0, v.jsx)("div", {
                              className: "zoom-area",
                              children: (0, v.jsx)(ue, {
                                className: "zoom-field",
                                children: function () {
                                  return (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      (0, v.jsx)(ne, {
                                        title: "Zoom out",
                                        action: "zoom-out",
                                        handleClick: n,
                                      }),
                                      (0, v.jsx)("span", {
                                        className: "zoom-level",
                                        children: W,
                                      }),
                                      (0, v.jsx)(ne, {
                                        title: "Zoom in",
                                        action: "zoom-in",
                                        handleClick: n,
                                      }),
                                    ],
                                  });
                                },
                              }),
                            }),
                            (0, v.jsxs)("div", {
                              className: "right-field",
                              children: [
                                "web" !== e.props.type &&
                                !e.props.isReported &&
                                ("entire" === e.props.menuType ||
                                  "selected" === e.props.menuType) &&
                                (0, v.jsxs)("div", {
                                  className: "quick-issue",
                                  children: [
                                    "Not properly captured?",
                                    (0, v.jsx)("a", {
                                      onClick: e.props.quickReport,
                                      children: " Report a problem.",
                                    }),
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className: "tool-action-btn border-btn",
                                  onClick: n.bind(e, "action", {
                                    actionType: "copy",
                                  }),
                                  children: "Copy",
                                }),
                                (0, v.jsx)("div", {
                                  className: "tool-action-btn primary-btn",
                                  id: "save-btn",
                                  onClick: S,
                                  children:
                                    "web" === e.props.type ? "Save" : "Done",
                                }),
                              ],
                            }),
                          ],
                        }),
                    });
                  },
                },
              ]),
              n && fe(t.prototype, n),
              r && fe(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              i
            );
          })(o.PureComponent);
        const Te = Pe;
        var Oe = {
          slack: {
            displayName: "Slack",
            targetName: "Channel",
            placeHolder: "Choose a channel or user",
            panelTitle: "Send message",
            actionTypeStr: "Sending message",
            successMsg: "Slack message sent!",
            panelSubTitle: "Send screenshots to Slack",
            featureLists: [
              "Send screenshots to Slack Channel",
              "Send screenshots to Slack direct messages",
              "Attach URL of the screenshot automatically",
            ],
          },
          trello: {
            displayName: "Trello",
            targetName: "Board",
            placeHolder: "Choose a board",
            panelTitle: "Create card",
            actionTypeStr: "Creating card",
            successMsg: "Trello card created!",
            panelSubTitle: "Send screenshots as Trello cards",
            featureLists: [
              "Create a trello card and attach the screenshot directly",
              "Assign the card to members",
              "Set due date and time",
              "Include browser & OS info to help identify the issue",
            ],
          },
          asana: {
            displayName: "Asana",
            targetName1: "Workspace",
            targetName2: "Project",
            placeHolder1: "Choose a workspace",
            placeHolder2: "Choose a project",
            panelTitle: "Create task",
            actionTypeStr: "Creating task",
            successMsg: "Asana task created!",
            panelSubTitle: "Send screenshots as Asana task",
            featureLists: [
              "Send screenshots to Asana task",
              "Create an Asana task and attach the screenshot directly",
              "Assign the card to members",
              "Choose Sections",
              "Set due date and time",
              "Include browser & OS info to help identify the issue",
            ],
          },
          jira: {
            displayName: "Jira",
            targetName1: "Site",
            targetName2: "Project",
            placeHolder1: "Choose a site",
            placeHolder2: "Choose a project",
            panelTitle: "Create issue",
            actionTypeStr: "Creating issue",
            successMsg: "Jira issue created!",
            panelSubTitle: "Send screenshots as Jira issue",
            featureLists: [
              "Create a Jira issue and attach the screenshot directly",
              "Assign the card to members",
              "Include browser & OS info to help identify the issue",
            ],
          },
          googleDrive: {
            displayName: "Google Drive",
            targetName: "Folder",
            placeHolder: "Choose a folder",
            panelTitle: "Upload image",
            actionTypeStr: "Uploading image",
            successMsg: "Google Drive image uploaded!",
            panelSubTitle: "Save screenshots to Google Drive",
            featureLists: [
              "Save screenshots to Google Drive folders directly",
            ],
          },
          dropbox: {
            displayName: "Dropbox",
            targetName: "Folder",
            placeHolder: "Choose a folder",
            panelTitle: "Upload image",
            actionTypeStr: "Uploading image",
            successMsg: "Dropbox image uploaded!",
            panelSubTitle: "Save screenshots to Dropbox",
            featureLists: ["Save screenshots to Dropbox folders directly"],
          },
          box: {
            displayName: "Box",
            targetName: "Folder",
            placeHolder: "Choose a folder",
            panelTitle: "Upload image",
            actionTypeStr: "Uploading image",
            successMsg: "Box image uploaded!",
            panelSubTitle: "Save screenshots to Box",
            featureLists: ["Save screenshots to Box folders directly"],
          },
          github: {
            displayName: "Github",
            targetName: "Repository",
            placeHolder: "Choose a repository",
            panelTitle: "Create issue",
            actionTypeStr: "Creating issue",
            successMsg: "Github issue created!",
            panelSubTitle: "Send screenshots as Github issue",
            featureLists: [
              "Create issue in Github repository",
              "Send screenshots to Github message",
              "Attach URL of the screenshot automatically",
            ],
          },
        },
          De = {
            channel: "#",
            repo: "",
            user: "@",
            board: "",
            project: "",
            folder: "",
          },
          Ae = [
            { name: "slack", displayName: "Slack" },
            { name: "asana", displayName: "Asana" },
            { name: "trello", displayName: "Trello" },
            { name: "github", displayName: "Github" },
            { name: "jira", displayName: "Jira" },
          ],
          Ze = [
            { name: "googleDrive", displayName: "Google Drive" },
            { name: "dropbox", displayName: "Dropbox" },
            { name: "box", displayName: "Box" },
          ],
          Re = ["callout", "list"],
          Ee = [
            "#2ecc71",
            "#3498db",
            "#8e44ad",
            "#e67e22",
            "#e74c3c",
            "#1abc9c",
            "#2c3e50",
          ],
          Ue = n(68910),
          _e = n(16931);
        function Fe(e) {
          return (
            (Fe =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            Fe(e)
          );
        }
        function Me(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Be(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Me(Object(n), !0).forEach(function (t) {
                ze(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Me(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function ze(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Le(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function We(e, t) {
          return (
            (We = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            We(e, t)
          );
        }
        function He(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Ye(e);
            if (t) {
              var a = Ye(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Ve(this, n);
          };
        }
        function Ve(e, t) {
          if (t && ("object" === Fe(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Ge(e);
        }
        function Ge(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function Ye(e) {
          return (
            (Ye = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            Ye(e)
          );
        }
        var Ke = localStorage.draw_style
          ? JSON.parse(localStorage.draw_style)
          : {
            curve: {
              width: 8,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              contains: ["curve"],
            },
            highlight: {
              width: 16,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              contains: ["highlight"],
            },
            rect: {
              width: 8,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              contains: ["rect", "ellipse"],
            },
            line: {
              width: 8,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              contains: [
                "line_arrow",
                "bezier_arrow",
                "big_head_arrow",
                "line",
              ],
            },
            text: {
              width: 8,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              fontFamily: localStorage["font-family"] || "Arial",
              isTextBg: !1,
              showShadow: !1,
              strokeColor: "transparent",
              fontSize: localStorage["font-size"]
                ? parseInt(localStorage["font-size"])
                : window.devicePixelRatio > 1
                  ? 36
                  : 24,
              contains: ["text"],
            },
            callout: {
              width: 8,
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              fontFamily: localStorage["font-family"] || "Arial",
              fontSize: localStorage["font-size"]
                ? parseInt(localStorage["font-size"])
                : window.devicePixelRatio > 1
                  ? 36
                  : 24,
              contains: ["callout"],
            },
            list: {
              color: localStorage["pen-color"] || "rgb(255, 0, 0)",
              contains: ["list"],
            },
          },
          qe = {
            mac: { left: 255, right: 105, height: 79, top: 48 },
            windows: { left: 214, right: 146, height: 86, top: 54 },
            url_top: { height: 34 },
            url_bottom: { height: 34 },
          },
          $e = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && We(e, t);
            })(s, e);
            var t,
              n,
              r,
              a = He(s);
            function s(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, s),
                ((t = a.call(this, e)).outerContainer = (0, o.createRef)()),
                (t.container = (0, o.createRef)()),
                (t.doodleCanvas = (0, o.createRef)()),
                (t.layerCanvas = (0, o.createRef)()),
                (t.textareaOut = (0, o.createRef)()),
                (t.textarea = (0, o.createRef)()),
                (t.listDialog = (0, o.createRef)()),
                (t.fileInput = (0, o.createRef)()),
                (t.headerBorder = (0, o.createRef)()),
                (t.headerCenter = (0, o.createRef)()),
                (t.headerLeft = (0, o.createRef)()),
                (t.headerRight = (0, o.createRef)()),
                (t.timeRef = (0, o.createRef)()),
                (t.urlFeld = (0, o.createRef)()),
                (t.headerBar = (0, o.createRef)()),
                (t.urlTopRef = (0, o.createRef)()),
                (t.urlTopContent = (0, o.createRef)()),
                (t.urlBottomContent = (0, o.createRef)()),
                (t.urlBottomRef = (0, o.createRef)()),
                (t.originHeight = 0),
                (t.originWidth = 0),
                (t.urlContentHeight = 0),
                (t.state = {
                  isInCropMode: !1,
                  currentTool: "",
                  currentToolGroup: "",
                  currentColor: localStorage["pen-color"] || "rgb(255, 0, 0)",
                  currentPenWidth: localStorage["pen-width"]
                    ? parseInt(localStorage["pen-width"])
                    : window.devicePixelRatio > 1
                      ? 8
                      : 4,
                  currentFontSize: localStorage["font-size"]
                    ? parseInt(localStorage["font-size"])
                    : window.devicePixelRatio > 1
                      ? 36
                      : 24,
                  currentFontFamily:
                    localStorage["font-family"] || "Times New Roman",
                  cropWidth: 0,
                  cropHeight: 0,
                  resizeWidth: 0,
                  resizeHeight: 0,
                  resizeProportional: !0,
                  currentScale: 1,
                  canUndo: !1,
                  canRedo: !1,
                  canClear: !1,
                  canDeleteSelected: !1,
                  isShownUpgrade: !1,
                  isReady: !1,
                  upgradeType: "",
                  isTextBackground: !1,
                  selectShape: null,
                  showTopBorder: !1,
                  showBopttomBorder: !1,
                  borderAction: !0,
                  borderType: "mac",
                  maskPosition: { title: "Top Left", value: "top_left" },
                  maskSize: 100,
                  maskOpacity: 100,
                  enableBrowser: !1,
                  enablePadding: !1,
                  enableMask: !0,
                  checkedUrl: !0,
                  recentColors: localStorage.recent_clr
                    ? JSON.parse(localStorage.recent_clr)
                    : ["#F8CA41", "#E25A3B", "#E47B87", "#168C98", "#218F6A"],
                  paddingColor: "rgb(255, 153, 0)",
                  paddingSize: 30,
                  checkedCaptureTime: !1,
                  captureTime: f()().format("YYYY-MM-DD hh:mm A"),
                }),
                (t.handleToolBarBtnClick = t.handleToolBarBtnClick.bind(Ge(t))),
                (t.handleFileInputChange = t.handleFileInputChange.bind(Ge(t))),
                (t.editor_style_callback = t.editor_style_callback.bind(Ge(t))),
                (t.initEditor = t.initEditor.bind(Ge(t))),
                (t.insertImage = t.insertImage.bind(Ge(t))),
                (t.handleResizeInputChange = t.handleResizeInputChange.bind(
                  Ge(t)
                )),
                (t.handleResizeProportionChange =
                  t.handleResizeProportionChange.bind(Ge(t))),
                (t.getResizeInfo = t.getResizeInfo.bind(Ge(t))),
                (t.finishEdit = t.finishEdit.bind(Ge(t))),
                (t.handleKeyDown = t.handleKeyDown.bind(Ge(t))),
                (t.handleCloseUpgrade = t.handleCloseUpgrade.bind(Ge(t))),
                (t.handleTextBgChange = t.handleTextBgChange.bind(Ge(t))),
                (t.handleResetList = t.handleResetList.bind(Ge(t))),
                (t.handleSelectShape = t.handleSelectShape.bind(Ge(t))),
                (t.updateBorderShow = t.updateBorderShow.bind(Ge(t))),
                (t.rePositionBorder = t.rePositionBorder.bind(Ge(t))),
                (t.resetStatus = t.resetStatus.bind(Ge(t))),
                (t.updateContainerTop = t.updateContainerTop.bind(Ge(t))),
                (t.copyImageAction = t.copyImageAction.bind(Ge(t))),
                t
              );
            }
            return (
              (t = s),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.initEditor(this.props.imageUrl);
                    var e = this;
                    document.querySelector("#canvas2") &&
                      document.querySelector("#canvas2").addEventListener(
                        "click",
                        function () {
                          document
                            .querySelectorAll(".tool-select")
                            .forEach(function (e) {
                              e.blur();
                            });
                        },
                        !1
                      ),
                      document.addEventListener("keydown", this.handleKeyDown),
                      window.addEventListener(
                        "resize",
                        function () {
                          e.state.enableBrowser &&
                            e.updateBorderShow(e.state.borderType),
                            e.state.enablePadding &&
                            e.updateContainerTop(
                              e.state.enableBrowser,
                              e.state.enablePadding,
                              e.state.paddingSize
                            );
                        },
                        !1
                      );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    e.imageUrl === this.props.imageUrl ||
                      ("" !== e.imageUrl && void 0 !== e.imageUrl) ||
                      this.initEditor(this.props.imageUrl);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener("keydown", this.handleKeyDown),
                      (this.editor = null);
                  },
                },
                {
                  key: "handleKeyDown",
                  value: function (e) {
                    var t = e.keyCode;
                    if (-1 !== this.props.className.indexOf("active"))
                      if (90 === t && (e.ctrlKey || e.metaKey))
                        e.shiftKey ? this.editor.redo() : this.editor.undo();
                      else if (
                        (46 === t || 8 === t) &&
                        this.state.canDeleteSelected
                      ) {
                        if (
                          e.target.classList.contains("editor-textarea") ||
                          e.target.classList.contains("editor-input") ||
                          e.target.classList.contains("font-size")
                        )
                          return;
                        this.editor.deleteSelected();
                      }
                  },
                },
                {
                  key: "finishEdit",
                  value: function (e, t) {
                    var n = this,
                      r = {};
                    if (this.state.enableBrowser || this.state.enablePadding) {
                      if (this.state.enableBrowser) {
                        var a = this.state.borderType;
                        (r.borderType = a),
                          "mac" == a || "windows" == a
                            ? (this.state.checkedUrl &&
                              ((r.url = this.props.tabUrl),
                                (r.checkedUrl = this.state.checkedUrl)),
                              (r.height =
                                qe[a].height * window.devicePixelRatio),
                              (r.left = qe[a].left * window.devicePixelRatio),
                              (r.right = qe[a].right * window.devicePixelRatio),
                              this.state.checkedCaptureTime &&
                              (r.captureTime = this.state.captureTime))
                            : ((r.url = this.props.tabUrl),
                              (r.checkedUrl = !0),
                              (r.height =
                                this.urlContentHeight *
                                window.devicePixelRatio),
                              (r.captureTime = this.state.captureTime));
                      }
                      this.state.enablePadding &&
                        ((r.paddingSize =
                          this.state.paddingSize * window.devicePixelRatio),
                          (r.paddingColor = this.state.paddingColor));
                    }
                    this.editor.getImageDataBlob(
                      this.props.contentType,
                      function (e) {
                        var a = window.URL.createObjectURL(e);
                        if (t) n.props.handleFinishEditAndShare(a, e);
                        else {
                          var i = n.editor.bg_info;
                          n.props.handleFinishEdit(a, e, {
                            width: i.width,
                            height: i.height,
                            border: r,
                          });
                        }
                      }
                    );
                  },
                },
                {
                  key: "copyImageAction",
                  value: function () {
                    var e = this;
                    chrome &&
                      chrome.extension &&
                      chrome.extension
                        .getBackgroundPage()
                        .googleEvent("copy", "editor_toolbar");
                    var t = {};
                    if (this.state.enableBrowser || this.state.enablePadding) {
                      if (this.state.enableBrowser) {
                        var n = this.state.borderType;
                        (t.borderType = n),
                          "mac" == n || "windows" == n
                            ? (this.state.checkedUrl &&
                              ((t.url = this.props.tabUrl),
                                (t.checkedUrl = this.state.checkedUrl)),
                              (t.height =
                                qe[n].height * window.devicePixelRatio),
                              (t.left = qe[n].left * window.devicePixelRatio),
                              (t.right = qe[n].right * window.devicePixelRatio),
                              this.state.checkedCaptureTime &&
                              (t.captureTime = this.state.captureTime))
                            : ((t.url = this.props.tabUrl),
                              (t.checkedUrl = !0),
                              (t.height =
                                this.urlContentHeight *
                                window.devicePixelRatio),
                              (t.captureTime = this.state.captureTime));
                      }
                      this.state.enablePadding &&
                        ((t.paddingSize =
                          this.state.paddingSize * window.devicePixelRatio),
                          (t.paddingColor = this.state.paddingColor));
                    }
                    this.editor.getImageDataBlob(
                      this.props.contentType,
                      function (n) {
                        if (Object.keys(t).length > 0) {
                          var r = e.editor.bg_info;
                          R(
                            n,
                            { width: r.width, height: r.height, border: t },
                            e.props.type,
                            function (e) {
                              e &&
                                ("image/jpeg" === e.type
                                  ? D(e).then(function (e) {
                                    Z(
                                      e,
                                      function () {
                                        i.ZP.success(
                                          "Copied to clipboard!",
                                          1
                                        );
                                      },
                                      function (e) {
                                        i.ZP.error("Copy failed.", 1);
                                      }
                                    );
                                  })
                                  : Z(
                                    e,
                                    function () {
                                      i.ZP.success("Copied to clipboard!", 1);
                                    },
                                    function (e) {
                                      i.ZP.error("Copy failed.", 1);
                                    }
                                  ));
                            }
                          );
                        } else
                          n &&
                            ("image/jpeg" === n.type
                              ? D(n).then(function (e) {
                                Z(
                                  e,
                                  function () {
                                    i.ZP.success("Copied to clipboard!", 1);
                                  },
                                  function (e) {
                                    i.ZP.error("Copy failed.", 1);
                                  }
                                );
                              })
                              : Z(
                                n,
                                function () {
                                  i.ZP.success("Copied to clipboard!", 1);
                                },
                                function (e) {
                                  i.ZP.error("Copy failed.", 1);
                                }
                              ));
                      }
                    );
                  },
                },
                {
                  key: "handleResetList",
                  value: function () {
                    this.editor.resetList();
                  },
                },
                {
                  key: "handleTextBgChange",
                  value: function (e) {
                    var t = Ke.text,
                      n = !1;
                    if ("text-bg" === e)
                      if (this.state.selectShape) {
                        var r = this.state.selectShape,
                          a = this.state.selectShape.isTextBg;
                        (r.isTextBg = !a),
                          this.setState({ selectShape: r }),
                          (t.isTextBg = !a),
                          (n = !0),
                          this.editor.setTextBackground(!a);
                      } else
                        (t.isTextBg = !t.isTextBg),
                          (n = !0),
                          this.editor.setTextBackground(t.isTextBg);
                    else
                      this.state.selectShape
                        ? ((r = this.state.selectShape),
                          (a = this.state.selectShape.showShadow),
                          (r.showShadow = !a),
                          this.setState({ selectShape: r }),
                          (t.showShadow = !a),
                          (n = !0),
                          this.editor.setShowShadow(!a))
                        : ((t.showShadow = !t.showShadow),
                          (n = !0),
                          this.editor.setShowShadow(t.showShadow));
                    n && (localStorage.draw_style = JSON.stringify(Ke)),
                      this.setState({
                        isTextBackground: !this.state.isTextBackground,
                      });
                  },
                },
                {
                  key: "handleResizeProportionChange",
                  value: function (e) {
                    this.setState({ resizeProportional: e.target.checked });
                  },
                },
                {
                  key: "handleResizeInputChange",
                  value: function (e, t) {
                    var n =
                      this.editor.bg_info.width / this.editor.bg_info.height;
                    "width" === e
                      ? !0 === this.state.resizeProportional
                        ? this.setState({
                          resizeWidth: parseInt(t.target.value),
                          resizeHeight: parseInt(t.target.value) / n,
                        })
                        : this.setState({
                          resizeWidth: parseInt(t.target.value),
                        })
                      : !0 === this.state.resizeProportional
                        ? this.setState({
                          resizeWidth: parseInt(t.target.value) * n,
                          resizeHeight: parseInt(t.target.value),
                        })
                        : this.setState({
                          resizeHeight: parseInt(t.target.value),
                        });
                  },
                },
                {
                  key: "getResizeInfo",
                  value: function () {
                    var e = this.editor.bg_info;
                    this.setState({
                      resizeHeight: parseInt(e.height),
                      resizeWidth: parseInt(e.width),
                    });
                  },
                },
                {
                  key: "handleFileInputChange",
                  value: function (e) {
                    var t = e.target.files[0];
                    if (t) {
                      var n = URL.createObjectURL(t);
                      this.insertImage(n);
                    }
                  },
                },
                {
                  key: "editor_style_callback",
                  value: function (e, t) {
                    switch (e) {
                      case "crop":
                        "done" !== t &&
                          this.setState({
                            cropWidth: t.width,
                            cropHeight: t.height,
                          });
                        break;
                      case "undo":
                        this.setState({ canUndo: t }),
                          this.state.enableBrowser &&
                          this.updateBorderShow(this.state.borderType),
                          this.state.enablePadding &&
                          this.updateContainerTop(
                            this.state.enableBrowser,
                            this.state.enablePadding,
                            this.state.paddingSize
                          ),
                          this.editor.updateMaskPosition(
                            this.state.maskPosition.value
                          );
                        break;
                      case "redo":
                        this.setState({ canRedo: t });
                        break;
                      case "del":
                        this.setState({ canDeleteSelected: t });
                        break;
                      case "clear":
                        this.setState({ canClear: !t }),
                          this.state.enableBrowser &&
                          this.updateBorderShow(this.state.borderType);
                        break;
                      case "selected":
                        this.handleSelectShape(t);
                    }
                  },
                },
                {
                  key: "handleSelectShape",
                  value: function (e) {
                    if (e) {
                      var t = "";
                      switch (e.shape) {
                        case 1:
                          t = "curve";
                          break;
                        case 3:
                          t = "rect";
                          break;
                        case 4:
                          t = "ellipse";
                          break;
                        case 7:
                          t = "callout";
                          break;
                        case 30:
                          t = "image";
                          break;
                        case 8:
                          t = "list";
                          break;
                        case 10:
                          t = "highlight";
                          break;
                        case 23:
                          t = "big_head_arrow";
                          break;
                        case 22:
                          t = "bezier_arrow";
                          break;
                        case 20:
                          t = "line_arrow";
                          break;
                        case 2:
                          t = "line";
                          break;
                        case 5:
                          t = "rect_blur";
                          break;
                        case 80:
                          t = "text";
                      }
                      (e.shapeName = t), this.setState({ selectShape: e });
                    } else if (
                      (this.setState({ selectShape: null }),
                        this.state.currentToolGroup)
                    ) {
                      var n = Ke[this.state.currentToolGroup];
                      n &&
                        (n.width
                          ? this.editor.setPenWidth(n.width)
                          : "highlight" === this.state.currentTool &&
                          ((n.width = 16), this.editor.setPenWidth(16)),
                          n.fontFamily &&
                          (this.editor.setFontName(n.fontFamily),
                            this.editor.setTextBackground(
                              !!n.isTextBg && n.isTextBg
                            ),
                            this.editor.setShowShadow(
                              !!n.showShadow && n.showShadow
                            )),
                          n.fontSize && this.editor.setFontSize(n.fontSize),
                          this.editor.setPenColor(n.color));
                    }
                  },
                },
                {
                  key: "initEditor",
                  value: function (e) {
                    if (e) {
                      var t = this,
                        n = new Image();
                      (n.crossOrigin = "Anonymous"),
                        (this.editor = new _e.Z(
                          {
                            out_container: this.outerContainer.current,
                            container: this.container.current,
                            doodle_canvas: this.doodleCanvas.current,
                            layer_canvas: this.layerCanvas.current,
                            textarea: this.textarea.current,
                            textarea_out: this.textareaOut.current,
                            $list_dialog: this.listDialog.current,
                            image: n,
                          },
                          function (e, n) {
                            t.editor_style_callback(e, n);
                          }
                        )),
                        (n.src = e),
                        (n.onload = function () {
                          (t.originWidth = this.width),
                            (t.originHeight = this.height),
                            t.editor.setBgImage(n, !1),
                            t.editor.setPenColor(t.state.currentColor),
                            t.editor.setFontSize(t.state.currentFontSize),
                            t.editor.setPenWidth(t.state.currentPenWidth),
                            t.editor.setFontName(t.state.currentFontFamily),
                            t.editor.setBlurRadius(30),
                            t.setState({ isReady: !0 });
                        });
                    }
                  },
                },
                {
                  key: "insertImage",
                  value: function (e, t) {
                    var n = this,
                      r = new Image();
                    r.src = e;
                    var a = {
                      image: r,
                      width: 0,
                      height: 0,
                      choose_type: "full",
                    };
                    (r.img_info = a),
                      (r.onload = function () {
                        (a.width = this.naturalWidth),
                          (a.height = this.naturalHeight),
                          t
                            ? n.editor.insertMaskImage(
                              a,
                              n.state.maskPosition.value,
                              n.state.maskSize / 100,
                              n.state.maskOpacity / 100
                            )
                            : n.editor.insertSvgImage(a);
                      });
                  },
                },
                {
                  key: "handleCloseUpgrade",
                  value: function () {
                    this.setState({ isShownUpgrade: !1 });
                  },
                },
                {
                  key: "updateContainerTop",
                  value: function (e, t, n) {
                    var r = parseInt(this.outerContainer.current.offsetHeight),
                      a = parseInt(this.container.current.offsetHeight);
                    this.container.current.style.top =
                      e || (t && n > 0) ? "0px" : r - a > 40 ? "40px" : "0px";
                  },
                },
                {
                  key: "resetStatus",
                  value: function (e) {
                    "browser" === e
                      ? (this.setState({ enableBrowser: !1 }),
                        this.updateContainerTop(
                          !1,
                          this.state.enablePadding,
                          this.state.paddingSize
                        ))
                      : "padding" === e
                        ? this.setState({ enablePadding: !1 })
                        : "watermask" === e &&
                        (this.setState({ enableMask: !1 }),
                          this.editor.removeMask());
                  },
                },
                {
                  key: "rePositionBorder",
                  value: function (e, t) {
                    if (this.headerBorder.current) {
                      var n = qe[t].height;
                      this.container.current.style.top = 0;
                      var r =
                        this.doodleCanvas.current.width /
                        parseInt(this.doodleCanvas.current.style.width);
                      "mac" !== t &&
                        "windows" !== t &&
                        (e *= window.devicePixelRatio / r);
                      var a = parseInt(n * e),
                        i = this.doodleCanvas.current.width / e,
                        o = parseInt(i / r) * e;
                      if (qe[t].left) {
                        (this.headerBorder.current.style.width = o + "px"),
                          (this.headerBorder.current.style.height = a + "px"),
                          (this.headerLeft.current.style.height = a + "px"),
                          (this.headerRight.current.style.height = a + "px"),
                          (this.headerCenter.current.style.height = a + "px");
                        var s =
                          "matrix(" +
                          e +
                          ", 0, 0, " +
                          e +
                          "," +
                          (120 * (1 - e)) / 2 +
                          "," +
                          (22 - 22 * e) / 2 +
                          ")";
                        this.timeRef.current.style.transform = s;
                        var l = 18 * e,
                          c = parseInt(i / r) - (qe[t].left - 50) - qe[t].right,
                          d =
                            "matrix(" +
                            (e *= window.devicePixelRatio / r) +
                            ", 0, 0, " +
                            e +
                            "," +
                            (c * (e - 1)) / 2 +
                            "," +
                            (l - 18) / 2 +
                            ")";
                        this.urlFeld.current.style.transform = d;
                      } else
                        (s =
                          "matrix(" +
                          e +
                          ", 0, 0, " +
                          e +
                          "," +
                          ((o / e) * (e - 1)) / 2 +
                          "," +
                          (this.urlContentHeight * e - this.urlContentHeight) /
                          2 +
                          ")"),
                          "url_top" == t
                            ? ((a = this.urlContentHeight * e),
                              (this.urlTopRef.current.style.width = o + "px"),
                              (this.urlTopRef.current.style.height = a + "px"),
                              (this.urlTopContent.current.style.transform = s))
                            : ((a = this.urlContentHeight * e),
                              (this.urlBottomRef.current.style.height =
                                a + "px"),
                              (this.urlBottomRef.current.style.width =
                                o + "px"),
                              (this.urlBottomContent.current.style.transform =
                                s));
                    }
                  },
                },
                {
                  key: "updateBorderShow",
                  value: function (e) {
                    var t = this;
                    if ("none" !== e) {
                      this.setState({ showTopBorder: !0 });
                      var n =
                        this.doodleCanvas.current.width /
                        this.state.currentScale,
                        r =
                          this.doodleCanvas.current.width /
                          parseInt(this.doodleCanvas.current.style.width),
                        a = parseInt(n / r);
                      if (
                        (parseInt(this.container.current.style.width),
                          qe[e].left)
                      ) {
                        if (a < 460)
                          return (
                            this.setState({ enableBrowser: !1 }),
                            void i.ZP.warning(
                              "The image size is too small to add a browser border.",
                              1.2
                            )
                          );
                        var o,
                          s = qe[e].left / a,
                          l = qe[e].right / a;
                        (this.headerBorder.current.style.width = a + "px"),
                          (this.headerLeft.current.style.width = 100 * s + "%"),
                          (this.headerRight.current.style.width =
                            100 * l + "%"),
                          (this.headerCenter.current.style.width =
                            100 * (1 - s - l + 1 / a) + "%"),
                          (this.container.current.style.marginBottom = "-6px"),
                          (this.container.current.style.top = 0);
                        var c = 144 / a,
                          d = this.urlFeld.current,
                          u = a - qe[e].left - qe[e].right;
                        (this.urlFeld.current.style.left = 100 * c + "%"),
                          (this.urlFeld.current.style.top =
                            (58 / 86) * 100 + "%"),
                          (this.timeRef.current.style.bottom =
                            (38 / 86) * 100 + "%"),
                          (this.urlFeld.current.style.width = u + "px"),
                          (this.urlFeld.current.style.height = "18px"),
                          (this.urlFeld.current.height =
                            18 * window.devicePixelRatio),
                          (this.urlFeld.current.width =
                            u * window.devicePixelRatio),
                          (o = this.props.tabUrl ? this.props.tabUrl : "");
                        var h = d.getContext("2d");
                        (h.font = 13 * window.devicePixelRatio + "px Arial"),
                          (h.fillStyle = "#000000"),
                          h.measureText(o).width >
                          u * window.devicePixelRatio &&
                          (o = U(h, o, u * window.devicePixelRatio)),
                          h.fillText(o, 0, 13 * window.devicePixelRatio);
                      } else {
                        var p = this.props.tabUrl
                          ? "URL:" + this.props.tabUrl
                          : "";
                        !(function (e, t, n, r, a) {
                          var i = e.getContext("2d"),
                            o = n && n.length ? t + " " + n : t,
                            s = "single",
                            l = 40,
                            c = "bold 24px Arial";
                          if (((i.font = c), i.measureText(o).width > r)) {
                            s = "multiple";
                            var d = _(i, n, r);
                            l = 40 * (d.length + 1);
                          }
                          if (
                            (a(l),
                              (e.width = r),
                              (e.height = l),
                              (i.fillStyle = "#000000"),
                              i.fillRect(0, 0, e.width, l),
                              i.restore(),
                              (i.fillStyle = "#ffffff"),
                              (i.textBaseline = "top"),
                              (i.strokeStyle = "#ffffff"),
                              (i.font = c),
                              "single" === s)
                          )
                            i.fillText(o, 10, 8);
                          else {
                            i.fillText(t, 10, 8);
                            for (var u = 0; u < d.length; u++)
                              i.fillText(d[u], 10, 8 + 40 * (u + 1));
                          }
                        })(
                          (d =
                            "url_top" !== e
                              ? this.urlBottomContent
                              : this.urlTopContent).current,
                          "Captured at: " + this.state.captureTime,
                          p,
                          n,
                          function (e) {
                            (d.current.style.height =
                              e / window.devicePixelRatio + "px"),
                              (d.current.style.width =
                                n / window.devicePixelRatio + "px"),
                              (t.urlContentHeight =
                                e / window.devicePixelRatio);
                          }
                        );
                      }
                      var f = this.state.currentScale;
                      this.rePositionBorder(f, e);
                    } else this.setState({ showTopBorder: !1 });
                  },
                },
                {
                  key: "handleToolBarBtnClick",
                  value: function (e, t) {
                    var n = this,
                      r = this.editor;
                    if ("shape" === e) {
                      var a = t.shapeKey,
                        i = null;
                      if (
                        (this.state.selectShape &&
                          (i = this.state.selectShape.shapeName),
                          this.setState({ selectShape: null }),
                          r.unSelectAll(),
                          !(
                            t.shape !== this.state.currentTool ||
                            t.fromMenu ||
                            (i && i !== t.shape)
                          ))
                      )
                        return (
                          r.setPenType(""),
                          void this.setState({
                            currentTool: "",
                            currentToolGroup: "",
                          })
                        );
                      if (
                        -1 !== Re.indexOf(t.shape) &&
                        !this.props.permissions.allowAdvancedToolForImageEditor
                      )
                        return void this.setState({
                          upgradeType: t.shape,
                          isShownUpgrade: !0,
                        });
                      if ("border" === t.shape)
                        this.setState({ borderAction: !0 });
                      else if ("highlight" == t.shape)
                        (o = Ke[a]) ||
                          (Ke.highlight = o =
                          {
                            width: 16,
                            color: "rgb(255, 0, 0)",
                            contains: ["highlight"],
                          }),
                          r.unSelectAll(),
                          r.setPenOpacity(0.3),
                          r.setPenWidth(o.width ? o.width : 16),
                          r.setPenColor(o.color ? o.color : "rgb(255, 0, 0)"),
                          r.setPenType("highlight");
                      else {
                        if ((r.unSelectAll(), r.setPenOpacity(1), a && Ke[a])) {
                          var o = Ke[a];
                          r.setPenWidth(o.width),
                            r.setPenColor(o.color),
                            o.fontFamily && r.setFontName(o.fontFamily),
                            o.fontSize && r.setFontSize(o.fontSize),
                            "text" === a && r.setShowShadow(o.showShadow),
                            r.setTextBackground(!!o.isTextBg && o.isTextBg),
                            r.setTextStrokeColor(o.strokeColor);
                        } else r.setPenWidth(this.state.currentPenWidth);
                        r.setPenType(t.shape);
                      }
                      t.shape && a && (localStorage[a] = t.shape),
                        this.setState({
                          selectShape: null,
                          currentTool: t.shape,
                          currentToolGroup: a,
                        });
                    } else if ("action" === e) {
                      a = t.shapeKey;
                      var s = !1;
                      switch (t.actionType) {
                        case "crop":
                          this.setState({ isInCropMode: !0 }), r.cutImage();
                          break;
                        case "addMask":
                          this.insertImage(t.value, !0);
                          break;
                        case "copy":
                          this.copyImageAction();
                          break;
                        case "changeBowser":
                          this.setState({ borderType: t.value }, function () {
                            "url_bottom" === t.value
                              ? (n.outerContainer.current.scrollTop =
                                n.outerContainer.current.scrollHeight)
                              : (n.outerContainer.current.scrollTop = 0);
                          }),
                            this.updateBorderShow(t.value);
                          break;
                        case "ToolColorSelect":
                          r.unactiveTextbox(),
                            r.unSelectAll(),
                            r.setPenType(""),
                            this.setState({
                              selectShape: null,
                              currentTool: "",
                              currentToolGroup: "",
                            });
                          break;
                        case "changeStroke":
                          r.setTextStrokeColor(t.value),
                            a &&
                            (((o = Ke[a]).strokeColor = t.value), (s = !0)),
                            this.state.selectShape &&
                            this.state.selectShape.strokeColor &&
                            (((d = this.state.selectShape).strokeColor =
                              t.value),
                              this.setState({ selectShape: d })),
                            this.setState({
                              isTextBackground: !this.state.isTextBackground,
                            });
                          break;
                        case "changeSwitchValue":
                          "browser" == (e = t.type)
                            ? (this.setState(
                              { enableBrowser: t.value },
                              function () {
                                t.value &&
                                  ("url_bottom" === n.state.borderType
                                    ? (n.outerContainer.current.scrollTop =
                                      n.outerContainer.current.scrollHeight)
                                    : (n.outerContainer.current.scrollTop = 0));
                              }
                            ),
                              t.value
                                ? this.updateBorderShow(this.state.borderType)
                                : this.resetStatus(e))
                            : "padding" === e
                              ? (this.setState({ enablePadding: t.value }),
                                t.value || this.resetStatus(e),
                                this.updateContainerTop(
                                  this.state.enableBrowser,
                                  t.value,
                                  this.state.paddingSize
                                ))
                              : "watermask" === e
                                ? (this.setState({ enableMask: t.value }),
                                  t.value || this.resetStatus(e))
                                : "check_url" === e
                                  ? this.setState({ checkedUrl: t.value })
                                  : "check_time" === e
                                    ? this.setState({ checkedCaptureTime: t.value })
                                    : "padding_size" === e
                                      ? (this.setState({ paddingSize: t.value }),
                                        this.updateContainerTop(
                                          this.state.enableBrowser,
                                          this.state.enablePadding,
                                          t.value
                                        ))
                                      : "mask_size" === e
                                        ? (this.setState({ maskSize: t.value }),
                                          this.editor.updateMaskScale(t.value / 100))
                                        : "mask_opacity" === e &&
                                        (this.setState({ maskOpacity: t.value }),
                                          this.editor.updateMaskOpacity(t.value / 100));
                          break;
                        case "changeMaskPosition":
                          this.setState({ maskPosition: t.value });
                          var l = t.value;
                          this.editor.updateMaskPosition(l.value);
                          break;
                        case "changeColor":
                          "padding_color" === a
                            ? this.setState({ paddingColor: t.value })
                            : (this.setState({ currentColor: t.value }),
                              r.setPenColor(t.value),
                              (localStorage["pen-color"] = t.value),
                              a &&
                              ((o = Ke[a]) || (Ke[a] = o = {}),
                                (o.color = t.value),
                                (s = !0)),
                              this.state.selectShape &&
                              this.state.selectShape.color &&
                              (((d = this.state.selectShape).color = t.value),
                                this.setState({ selectShape: d })));
                          break;
                        case "changeRecentColor":
                          if ("transparent" !== t.value) {
                            var c = this.state.recentColors;
                            c.indexOf(t.value) < 0
                              ? (c.unshift(t.value), c.pop())
                              : (c.splice(c.indexOf(t.value), 1),
                                c.unshift(t.value)),
                              (localStorage.recent_clr = JSON.stringify(c)),
                              this.setState({ recentColors: c });
                          }
                          break;
                        case "changePenWidth":
                          r.setPenWidth(parseInt(t.value)),
                            a &&
                            ((o = Ke[a]) || (Ke[a] = o = {}),
                              (o.width = parseInt(t.value)),
                              (s = !0)),
                            (localStorage["pen-width"] = t.value);
                          break;
                        case "changeFontSize":
                          r.setFontSize(parseInt(t.value)),
                            a &&
                            (((o = Ke[a]).width = parseInt(t.value)),
                              (o.fontSize = parseInt(t.value)),
                              (s = !0)),
                            (localStorage["font-size"] = t.value);
                          break;
                        case "changeFontFamily":
                          var d;
                          r.setFontName(t.value),
                            a && (((o = Ke[a]).fontFamily = t.value), (s = !0)),
                            this.state.selectShape &&
                            this.state.selectShape.fontName &&
                            (((d = this.state.selectShape).fontName =
                              t.value),
                              this.setState({ selectShape: d })),
                            (localStorage["font-family"] = t.value);
                          break;
                        case "zoom-in":
                          if (2 !== this.state.currentScale) {
                            var u = this.state.currentScale + 0.25;
                            r.setScale(u),
                              this.setState({
                                currentScale: u,
                                isShowScaleTip: !0,
                              }),
                              this.rePositionBorder(u, this.state.borderType);
                          }
                          break;
                        case "zoom-out":
                          0.25 !== this.state.currentScale &&
                            ((u = this.state.currentScale - 0.25),
                              r.setScale(u),
                              this.setState({
                                currentScale: u,
                                isShowScaleTip: !0,
                              }),
                              this.rePositionBorder(u, this.state.borderType));
                          break;
                        case "resetScale":
                          r.setScale(1),
                            this.setState({
                              currentScale: 1,
                              isShowScaleTip: !1,
                            }),
                            this.rePositionBorder(1, this.state.borderType);
                          break;
                        case "crop-demension-width":
                          this.setState(
                            { cropWidth: parseInt(t.value) },
                            function () {
                              r.setCropSize(
                                this.state.cropWidth,
                                this.state.cropHeight
                              );
                            }
                          );
                          break;
                        case "crop-demension-height":
                          this.setState(
                            { cropHeight: parseInt(t.value) },
                            function () {
                              r.setCropSize(
                                this.state.cropWidth,
                                this.state.cropHeight
                              );
                            }
                          );
                          break;
                        case "leaveCrop":
                          this.setState({
                            isInCropMode: !1,
                            cropWidth: 0,
                            cropHeight: 0,
                          }),
                            r.finishCutImage(!1);
                          break;
                        case "doCrop":
                          r.finishCutImage(!0),
                            this.setState({
                              isInCropMode: !1,
                              cropWidth: 0,
                              cropHeight: 0,
                            });
                          break;
                        case "insert-image":
                          if (
                            !this.props.permissions
                              .allowAdvancedToolForImageEditor
                          )
                            return void this.setState({
                              upgradeType: "insertImage",
                              isShownUpgrade: !0,
                            });
                          this.fileInput.current.click();
                          break;
                        case "doInsertImage":
                          if (
                            !this.props.permissions
                              .allowAdvancedToolForImageEditor
                          )
                            return void this.setState({
                              upgradeType: "image",
                              isShownUpgrade: !0,
                            });
                          if ("web" === this.props.type)
                            var h = "/images/svg/" + t.value + ".svg";
                          else h = "./images/svg/" + t.value + ".svg";
                          this.insertImage(h);
                          break;
                        case "doResize":
                          r.setImageSize(
                            this.state.resizeWidth,
                            this.state.resizeHeight
                          ),
                            this.updateContainerTop(
                              this.state.enableBrowser,
                              this.state.enablePadding,
                              this.state.paddingSize
                            );
                          break;
                        case "border":
                          break;
                        default:
                          r[t.actionType]();
                      }
                      s && (localStorage.draw_style = JSON.stringify(Ke));
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.isShownUpgrade,
                      n = e.isReady,
                      r = e.borderType,
                      a = e.checkedCaptureTime,
                      i = e.checkedUrl,
                      o = e.enableBrowser,
                      s = e.borderAction,
                      l = M()("editor", this.props.className),
                      c = M()("loading-page", { active: !n });
                    return (0, v.jsxs)("div", {
                      className: l,
                      tabIndex: "0",
                      children: [
                        (0, v.jsx)("div", {
                          className: c,
                          children: (0, v.jsxs)("div", {
                            className: "center",
                            children: [
                              (0, v.jsx)("div", {
                                className: "loading-spinner",
                                children: (0, v.jsxs)("div", {
                                  className: "spinner",
                                  children: [
                                    (0, v.jsx)("div", { className: "rect1" }),
                                    (0, v.jsx)("div", { className: "rect2" }),
                                    (0, v.jsx)("div", { className: "rect3" }),
                                    (0, v.jsx)("div", { className: "rect4" }),
                                    (0, v.jsx)("div", { className: "rect5" }),
                                  ],
                                }),
                              }),
                              (0, v.jsxs)("div", {
                                className: "brand",
                                children: [
                                  (0, v.jsx)("div", { className: "logo" }),
                                  "AWESOME SCREENSHOT",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, v.jsx)("input", {
                          type: "file",
                          className: "file-input",
                          ref: this.fileInput,
                          accept: ".jpg,.jpeg,.png",
                          onChange: this.handleFileInputChange,
                        }),
                        (0, v.jsx)(
                          Te,
                          Be(
                            Be({}, this.state),
                            {},
                            {
                              handleToolBarBtnClick: this.handleToolBarBtnClick,
                              handleResizeInputChange:
                                this.handleResizeInputChange,
                              handleResizeProportionChange:
                                this.handleResizeProportionChange,
                              handleResetList: this.handleResetList,
                              getResizeInfo: this.getResizeInfo,
                              finishEdit: this.finishEdit,
                              handleTextBgChange: this.handleTextBgChange,
                              handleBack: this.props.handleBack,
                              type: this.props.type,
                              quickReport: this.props.quickReport,
                              isReported: this.props.isReported,
                              menuType: this.props.menuType,
                              drawStyle: Ke,
                              tabUrl: this.props.tabUrl,
                              allowAdvancedTool:
                                this.props.permissions
                                  .allowAdvancedToolForImageEditor,
                            }
                          )
                        ),
                        (0, v.jsx)("div", {
                          className: "editor-outer-container",
                          tabIndex: "0",
                          id: "editor-outer-container",
                          ref: this.outerContainer,
                          children: (0, v.jsxs)("div", {
                            className: "border-container",
                            style: {
                              padding:
                                (this.state.enablePadding
                                  ? this.state.paddingSize
                                  : 0) + "px",
                              backgroundColor:
                                this.state.enablePadding &&
                                  this.state.paddingSize > 0
                                  ? this.state.paddingColor
                                  : "transparent",
                            },
                            children: [
                              (0, v.jsxs)("div", {
                                className:
                                  o && s && ("mac" === r || "windows" === r)
                                    ? "header-container show"
                                    : "header-container",
                                ref: this.headerBorder,
                                children: [
                                  (0, v.jsxs)("div", {
                                    className: "header-bar",
                                    ref: this.headerBar,
                                    children: [
                                      (0, v.jsx)("div", {
                                        className: "header-left " + r,
                                        ref: this.headerLeft,
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "header-center " + r,
                                        ref: this.headerCenter,
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "header-right " + r,
                                        ref: this.headerRight,
                                      }),
                                      (0, v.jsx)("div", {
                                        className:
                                          "header-time " + (a ? "show" : ""),
                                        ref: this.timeRef,
                                        children: this.state.captureTime,
                                      }),
                                    ],
                                  }),
                                  (0, v.jsx)("canvas", {
                                    ref: this.urlFeld,
                                    style: {
                                      visibility: i ? "visible" : "hidden",
                                    },
                                  }),
                                ],
                              }),
                              (0, v.jsx)("div", {
                                className: "url-region",
                                style: {
                                  display:
                                    o && "url_top" == r ? "block" : "none",
                                },
                                ref: this.urlTopRef,
                                children: (0, v.jsx)("canvas", {
                                  ref: this.urlTopContent,
                                }),
                              }),
                              (0, v.jsxs)("div", {
                                className: "editor-container",
                                ref: this.container,
                                children: [
                                  (0, v.jsx)("canvas", {
                                    className: "doodle-canvas",
                                    id: "canvas",
                                    ref: this.doodleCanvas,
                                  }),
                                  (0, v.jsx)("canvas", {
                                    className: "layer-canvas",
                                    id: "canvas2",
                                    ref: this.layerCanvas,
                                  }),
                                  (0, v.jsx)("div", {
                                    className: "editor-outer-textarea",
                                    ref: this.textareaOut,
                                    children: (0, v.jsx)("textarea", {
                                      className: "editor-textarea",
                                      ref: this.textarea,
                                    }),
                                  }),
                                  (0, v.jsxs)("div", {
                                    className: "editor-list-dialog",
                                    ref: this.listDialog,
                                    children: [
                                      "Number:",
                                      (0, v.jsx)("input", {
                                        type: "number",
                                        className: "editor-input",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, v.jsx)("div", {
                                className: "url-region url_bottom",
                                style: {
                                  display:
                                    o && "url_bottom" == r ? "block" : "none",
                                },
                                ref: this.urlBottomRef,
                                children: (0, v.jsx)("canvas", {
                                  ref: this.urlBottomContent,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, v.jsx)(Ue.Z, {
                          visible: t,
                          onCancel: this.handleCloseUpgrade,
                          type: this.state.upgradeType,
                        }),
                      ],
                    });
                  },
                },
              ]),
              n && Le(t.prototype, n),
              r && Le(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              s
            );
          })(o.PureComponent);
        const Je = $e;
        n(72657);
        var Xe = n(88229),
          Qe = (n(21209), n(19181)),
          et = (n(89771), n(23642)),
          tt = (n(45186), n(71577)),
          nt = n(88485),
          rt = n(59542),
          at = "https://www.awesomescreenshot.com/api/v1",
          it = [
            "/premium/stripe/create_plan",
            "/premium/stripe/change_plan",
            "/folder/create",
            "/folder/add_items",
            "/folder/change_name",
            "/trash/throw_into",
            "/image/change_title",
            "/video/update_title",
            "/trash/restore",
            "/trash/delete",
            "/image/upload",
            "/workspace/channel/move_items",
            "/workspace/channel/load_items",
            "/workspace/channel/load_members",
            "/video/websocket/token",
            "/refer/check_accept",
          ],
          ot = g().create({ baseURL: at });
        function st() {
          return ((e = at),
            (t = [
              "screenshot_personal_fullname",
              "screenshot_personal_type",
              "screenshot_personal_mail",
              "screenshot_personal_premium_level",
            ]),
            new Promise(function (n) {
              chrome.cookies.getAll({ url: e }, function (e) {
                if ("string" == typeof t) {
                  var r = e.filter(function (e) {
                    return e.name === t;
                  });
                  n(r);
                } else if (Array.isArray(t)) {
                  var a = e.filter(function (e) {
                    return -1 !== t.indexOf(e.name);
                  });
                  n(a);
                }
              });
            })).then(function (e) {
              if (e.length) {
                var t = {};
                return (
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                  {
                    username: decodeURI(t.screenshot_personal_fullname.value),
                    type: t.screenshot_personal_type.value,
                    mail: t.screenshot_personal_mail.value,
                    premiumLevel: t.screenshot_personal_premium_level
                      ? t.screenshot_personal_premium_level.value
                      : "",
                  }
                );
              }
              return null;
            });
          var e, t;
        }
        function lt(e) {
          return ot({
            method: "GET",
            url: "/account/auth",
            params: { service: e, from: "extension" },
          });
        }
        function ct(e) {
          return ot({
            method: "GET",
            url: "/account/load/resource",
            params: e,
          });
        }
        function dt(e, t, n, r, a, i) {
          return ot({
            method: "POST",
            url: "/destination/add",
            data: {
              accountID: e,
              resourceID: n,
              privacy: a,
              resourceName: r,
              resourceType: t,
              info: i,
            },
          });
        }
        function ut(e) {
          return g()({
            method: "GET",
            url: "https://tinyurl.com/api-create.php?url=" + e,
          });
        }
        function ht(e) {
          return ot({
            method: "GET",
            url: "/destination/image/upload_to_cloud_done",
            params: { Service: e },
          });
        }
        function pt(e) {
          return g()({
            method: "GET",
            url: at + "/user/oauth/login",
            params: { from: e },
          });
        }
        function ft(e) {
          return ot({ method: "POST", url: "/user/stuff", data: { type: e } });
        }
        ot.interceptors.request.use(
          function (e) {
            return e;
          },
          function () {
            return (
              i.ZP.error("Network error, Request timeout!"), Promise.reject()
            );
          }
        ),
          ot.interceptors.response.use(
            function (e) {
              if (e && e.data && 1 === e.data.code)
                return Promise.resolve(e.data.data);
              if ((e.data.code, 2001 === e.data.code))
                return Promise.reject(e.data);
              if (1201 === e.data.code) return Promise.reject(e.data);
              if (e.data.msg) {
                if (-1 !== it.indexOf(e.config.url))
                  return Promise.reject(e.data.msg);
                if (
                  (i.ZP.error(e.data.msg),
                    "/pricing" !== window.location.pathname)
                )
                  return Promise.reject(e.data.msg);
              }
            },
            function (e) {
              if (e.response) {
                var t = e.response.status;
                i.ZP.error("Network error! Error Code " + t);
              }
            }
          );
        var mt = n(1168);
        function gt(e) {
          return new Promise(function (t, n) {
            var r = null;
            C(e).then(function (n) {
              n.forEach(function (n, a) {
                var i = n.width,
                  o = n.height;
                r
                  ? r.addPage([Math.ceil(i), Math.ceil(o)], i > o ? "l" : "p")
                  : (r = new mt.ZP({
                    orientation: i > o ? "l" : "p",
                    unit: "pt",
                    format: [Math.ceil(i), Math.ceil(o)],
                    compress: !0,
                  }));
                var s = document.createElement("canvas"),
                  l = s.getContext("2d");
                (s.width = i),
                  (s.height = o),
                  l.drawImage(n.ele, 0, 0, i, o, 0, 0, i, o);
                var c = s.toDataURL("image/jpeg", 1);
                r.addImage(
                  c,
                  "JPEG",
                  0,
                  0,
                  Math.ceil(i),
                  Math.ceil(o),
                  "",
                  "FAST"
                ),
                  a === e.length - 1 && t(r.output("bloburl"));
              });
            });
          });
        }
        function vt(e, t) {
          return new Promise(function (t, n) {
            var r = 14400;
            C(e).then(function (e) {
              var n = new mt.ZP({
                orientation: e[0].width > e[0].height ? "l" : "p",
                unit: "pt",
                format: [Math.ceil(e[0].width), Math.ceil(r)],
                compress: !0,
              }),
                a = r;
              e.forEach(function (e, t) {
                for (var i = e.width, o = 0, s = e.height; o < e.height;)
                  if (a > 0) {
                    var l = Math.min(s, a),
                      c = document.createElement("canvas"),
                      d = c.getContext("2d");
                    (c.width = i),
                      (c.height = l),
                      d.drawImage(e.ele, 0, o, i, l, 0, 0, i, l);
                    var u = c.toDataURL("image/jpeg", 1);
                    n.addImage(
                      u,
                      "JPEG",
                      0,
                      r - a,
                      Math.ceil(i),
                      Math.ceil(l),
                      "",
                      "FAST"
                    ),
                      (o += l),
                      (s -= a),
                      (a -= l);
                  } else n.addPage({ format: [i, r] }), (a = r);
              }),
                t(n.output("bloburl"));
            });
          });
        }
        n(61241);
        var yt = n(27930),
          bt = n(1646),
          xt = n.n(bt),
          jt = (n(84968), n(29097)),
          wt = (n(75127), n(82530));
        function St(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return kt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return kt(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function kt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Ct = yt.Z.Option,
          It = yt.Z.OptGroup,
          Nt = wt.ZP.Group,
          Pt = {};
        const Tt = function (e) {
          var t = e.currentAccount,
            n = St((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = St((0, o.useState)([]), 2),
            s = i[0],
            l = i[1];
          (0, o.useEffect)(function () {
            Promise.all([
              ct({ accountID: t.id, what: "channel" }),
              ct({ accountID: t.id, what: "member" }),
            ]).then(function (e) {
              var t = e[0].items.concat(e[1].items);
              a(
                t.filter(function (e) {
                  return e.added;
                })
              ),
                l(
                  t.filter(function (e) {
                    return !e.added;
                  })
                ),
                (Pt = {}),
                t.forEach(function (e) {
                  Pt[e.id] = e;
                });
            });
          }, []);
          var c = Oe.slack;
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                Pt[n.channel].type,
                n.channel,
                Pt[n.channel].name,
                n.privacy,
                Pt[n.channel].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", { className: "label", children: c.targetName }),
              (0, v.jsx)(jt.Z.Item, {
                name: "channel",
                rules: [
                  {
                    required: !0,
                    message: "Please choose a channel or member",
                  },
                ],
                children: (0, v.jsxs)(yt.Z, {
                  size: "large",
                  showSearch: !0,
                  placeholder: c.placeHolder,
                  loading: r.length + s.length === 0,
                  filterOption: function (e, t) {
                    if (t.name)
                      return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                  },
                  children: [
                    r.length &&
                    (0, v.jsx)(It, {
                      label: "Already Added",
                      children: r.map(function (e) {
                        return (0,
                          v.jsx)(Ct, { value: e.id, name: e.name, disabled: !0, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                    (0, v.jsx)(It, {
                      label: "Available",
                      children: s.map(function (e) {
                        return (0,
                          v.jsx)(Ct, { value: e.id, name: e.name, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(Nt, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function Ot(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Dt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Dt(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Dt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var At = yt.Z.Option,
          Zt = yt.Z.OptGroup,
          Rt = wt.ZP.Group,
          Et = {};
        const Ut = function (e) {
          var t = e.currentAccount,
            n = Ot((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = Ot((0, o.useState)([]), 2),
            s = i[0],
            l = i[1];
          (0, o.useEffect)(function () {
            ct({ accountID: t.id, what: "board" }).then(function (e) {
              var t = e.items;
              a(
                t.filter(function (e) {
                  return e.added;
                })
              ),
                l(
                  t.filter(function (e) {
                    return !e.added;
                  })
                ),
                (Et = {}),
                t.forEach(function (e) {
                  Et[e.id] = e;
                });
            });
          }, []);
          var c = Oe.trello;
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                Et[n.channel].type,
                n.channel,
                Et[n.channel].name,
                n.privacy,
                Et[n.channel].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", { className: "label", children: c.targetName }),
              (0, v.jsx)(jt.Z.Item, {
                name: "channel",
                rules: [{ required: !0, message: "Please choose a board" }],
                children: (0, v.jsxs)(yt.Z, {
                  size: "large",
                  showSearch: !0,
                  placeholder: c.placeHolder,
                  loading: r.length + s.length === 0,
                  filterOption: function (e, t) {
                    if (t.name)
                      return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                  },
                  children: [
                    r.length &&
                    (0, v.jsx)(Zt, {
                      label: "Already Added",
                      children: r.map(function (e) {
                        return (0,
                          v.jsx)(At, { value: e.id, name: e.name, disabled: !0, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                    (0, v.jsx)(Zt, {
                      label: "Available",
                      children: s.map(function (e) {
                        return (0,
                          v.jsx)(At, { value: e.id, name: e.name, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(Rt, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function _t(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ft(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ft(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ft(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Mt = yt.Z.Option,
          Bt = yt.Z.OptGroup,
          zt = wt.ZP.Group,
          Lt = {},
          Wt = {};
        const Ht = function (e) {
          var t = e.currentAccount,
            n = _t((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = _t((0, o.useState)([]), 2),
            s = i[0],
            l = i[1],
            c = _t((0, o.useState)([]), 2),
            d = c[0],
            u = c[1];
          (0, o.useEffect)(function () {
            ct({ accountID: t.id, what: "workspace" }).then(function (e) {
              var t = e.items;
              a(t),
                p(t[0].id),
                (Wt = {}),
                t.forEach(function (e) {
                  Wt[e.id] = e;
                });
            });
          }, []);
          var h = Oe.asana;
          function p(e) {
            l([]),
              u([]),
              ct({ accountID: t.id, what: "project", workspaceID: e }).then(
                function (e) {
                  var t = e.items;
                  l(
                    t.filter(function (e) {
                      return e.added;
                    })
                  ),
                    u(
                      t.filter(function (e) {
                        return !e.added;
                      })
                    ),
                    (Lt = {}),
                    t.forEach(function (e) {
                      Lt[e.id] = e;
                    });
                }
              );
          }
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                "project",
                n.project,
                Lt[n.project].name,
                n.privacy,
                Lt[n.project].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", {
                className: "label",
                children: h.targetName1,
              }),
              (0, v.jsx)(jt.Z.Item, {
                name: "workspace",
                rules: [{ required: !0, message: "Please choose a workspace" }],
                children: (0, v.jsx)(yt.Z, {
                  size: "large",
                  placeholder: h.placeHolder1,
                  loading: 0 === r.length,
                  onChange: function (e) {
                    p(e);
                  },
                  children: r.map(function (e) {
                    return (0,
                      v.jsx)(Mt, { value: e.id, children: e.name }, e.id);
                  }),
                }),
              }),
              (0, v.jsx)("div", {
                className: "label",
                children: h.targetName2,
              }),
              (0, v.jsx)(jt.Z.Item, {
                name: "project",
                rules: [{ required: !0, message: "Please choose a project" }],
                children: (0, v.jsxs)(yt.Z, {
                  size: "large",
                  showSearch: !0,
                  placeholder: h.placeHolder2,
                  loading: s.length + d.length === 0,
                  filterOption: function (e, t) {
                    if (t.name)
                      return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                  },
                  children: [
                    s.length &&
                    (0, v.jsx)(Bt, {
                      label: "Already Added",
                      children: s.map(function (e) {
                        return (0,
                          v.jsx)(Mt, { value: e.id, name: e.name, disabled: !0, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                    (0, v.jsx)(Bt, {
                      label: "Available",
                      children: d.map(function (e) {
                        return (0,
                          v.jsx)(Mt, { value: e.id, name: e.name, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(zt, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function Vt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Gt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Gt(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Gt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Yt = yt.Z.Option,
          Kt = yt.Z.OptGroup,
          qt = wt.ZP.Group,
          $t = {};
        const Jt = function (e) {
          var t = e.currentAccount,
            n = Vt((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = Vt((0, o.useState)([]), 2),
            s = i[0],
            l = i[1],
            c = function (e) {
              ct({ accountID: t.id, what: "folder", query: e }).then(function (
                e
              ) {
                var t = e.items;
                a(
                  t.filter(function (e) {
                    return e.added;
                  })
                ),
                  l(
                    t.filter(function (e) {
                      return !e.added;
                    })
                  ),
                  ($t = {}),
                  t.forEach(function (e) {
                    $t[e.id] = e;
                  });
              });
            };
          (0, o.useEffect)(function () {
            c();
          }, []);
          var d = Oe.googleDrive;
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                $t[n.folder].type,
                n.folder,
                $t[n.folder].name,
                n.privacy,
                $t[n.folder].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", { className: "label", children: d.targetName }),
              (0, v.jsxs)(jt.Z.Item, {
                name: "folder",
                rules: [{ required: !0, message: "choose a folder" }],
                children: [
                  (0, v.jsxs)(yt.Z, {
                    size: "large",
                    showSearch: !0,
                    placeholder: d.placeHolder,
                    loading: r.length + s.length === 0,
                    onSearch: function (e) {
                      c(e);
                    },
                    filterOption: !1,
                    children: [
                      r.length &&
                      (0, v.jsx)(Kt, {
                        label: "Already Added",
                        children: r.map(function (e) {
                          return (0,
                            v.jsx)(Yt, { value: e.id, disabled: !0, children: De[e.type] + e.name }, e.id);
                        }),
                      }),
                      (0, v.jsx)(Kt, {
                        label: "Available",
                        children: s.map(function (e) {
                          return (0,
                            v.jsx)(Yt, { value: e.id, children: De[e.type] + e.name }, e.id);
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "tip",
                    children:
                      "Only 10 recent folders are listed. Type and search for other folders.",
                  }),
                ],
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(qt, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function Xt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Qt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Qt(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Qt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var en = yt.Z.Option,
          tn = yt.Z.OptGroup,
          nn = wt.ZP.Group,
          rn = {};
        const an = function (e) {
          var t = e.currentAccount,
            n = Xt((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = Xt((0, o.useState)([]), 2),
            s = i[0],
            l = i[1];
          (0, o.useEffect)(function () {
            ct({ accountID: t.id, what: "repo" }).then(function (e) {
              var t = e.items;
              a(
                t.filter(function (e) {
                  return e.added;
                })
              ),
                l(
                  t.filter(function (e) {
                    return !e.added;
                  })
                ),
                (rn = {}),
                t.forEach(function (e) {
                  rn[e.id] = e;
                });
            });
          }, []);
          var c = Oe.github;
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                rn[n.repo].type,
                n.repo,
                rn[n.repo].name,
                n.privacy,
                rn[n.repo].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", { className: "label", children: c.targetName }),
              (0, v.jsx)(jt.Z.Item, {
                name: "repo",
                rules: [
                  {
                    required: !0,
                    message: "Please choose a channel or member",
                  },
                ],
                children: (0, v.jsxs)(yt.Z, {
                  size: "large",
                  placeholder: c.placeHolder,
                  loading: r.length + s.length === 0,
                  showSearch: !0,
                  onSearch: function (e) { },
                  filterOption: function (e, t) {
                    if (t.name)
                      return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                  },
                  children: [
                    r.length &&
                    (0, v.jsx)(tn, {
                      label: "Already Added",
                      children: r.map(function (e) {
                        return (0,
                          v.jsx)(en, { value: e.id, name: e.info.owner + e.name, disabled: !0, children: De[e.type] + e.info.owner + "/" + e.name }, e.id);
                      }),
                    }),
                    (0, v.jsx)(tn, {
                      label: "Available",
                      children: s.map(function (e) {
                        return (0,
                          v.jsx)(en, { value: e.id, name: e.info.owner + e.name, children: De[e.type] + e.info.owner + "/" + e.name }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(nn, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function on(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return sn(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return sn(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function sn(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ln = yt.Z.Option,
          cn = yt.Z.OptGroup,
          dn = wt.ZP.Group,
          un = {},
          hn = {};
        const pn = function (e) {
          var t = e.currentAccount,
            n = on((0, o.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = on((0, o.useState)([]), 2),
            s = i[0],
            l = i[1],
            c = on((0, o.useState)([]), 2),
            d = c[0],
            u = c[1];
          (0, o.useEffect)(function () {
            ct({ accountID: t.id, what: "cloud" }).then(function (e) {
              var t = e.items;
              a(t),
                p(t[0].id, t[0].name),
                (hn = {}),
                t.forEach(function (e) {
                  hn[e.id] = e;
                });
            });
          }, []);
          var h = Oe.jira;
          function p(e, n) {
            l([]),
              u([]),
              ct({
                accountID: t.id,
                what: "project",
                cloudID: e,
                cloudName: n,
              }).then(function (e) {
                var t = e.items;
                l(
                  t.filter(function (e) {
                    return e.added;
                  })
                ),
                  u(
                    t.filter(function (e) {
                      return !e.added;
                    })
                  ),
                  (un = {}),
                  t.forEach(function (e) {
                    un[e.id] = e;
                  });
              });
          }
          return (0, v.jsxs)(jt.Z, {
            onFinish: function (n) {
              dt(
                t.id,
                "project",
                n.project,
                un[n.project].name,
                n.privacy,
                un[n.project].info
              ).then(function (t) {
                e.handleDesCreated(t.destination);
              });
            },
            children: [
              (0, v.jsx)("div", {
                className: "label",
                children: h.targetName1,
              }),
              (0, v.jsx)(jt.Z.Item, {
                name: "site",
                rules: [{ required: !0, message: "Please choose a site" }],
                children: (0, v.jsx)(yt.Z, {
                  size: "large",
                  placeholder: h.placeHolder1,
                  loading: 0 === r.length,
                  onChange: function (e) {
                    p(e, hn[e].name);
                  },
                  children: r.map(function (e) {
                    return (0,
                      v.jsx)(ln, { value: e.id, children: e.name }, e.id);
                  }),
                }),
              }),
              (0, v.jsx)("div", {
                className: "label",
                children: h.targetName2,
              }),
              (0, v.jsx)(jt.Z.Item, {
                name: "project",
                rules: [{ required: !0, message: "Please choose a project" }],
                children: (0, v.jsxs)(yt.Z, {
                  size: "large",
                  showSearch: !0,
                  placeholder: h.placeHolder2,
                  loading: s.length + d.length === 0,
                  filterOption: function (e, t) {
                    if (t.name)
                      return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                  },
                  children: [
                    s.length &&
                    (0, v.jsx)(cn, {
                      label: "Already Added",
                      children: s.map(function (e) {
                        return (0,
                          v.jsx)(ln, { value: e.id, name: e.name, disabled: !0, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                    (0, v.jsx)(cn, {
                      label: "Available",
                      children: d.map(function (e) {
                        return (0,
                          v.jsx)(ln, { value: e.id, name: e.name, children: De[e.type] + e.name }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(jt.Z.Item, {
                className: "des-share-option",
                name: "privacy",
                initialValue: "private",
                children: (0, v.jsxs)(dn, {
                  children: [
                    (0, v.jsx)(wt.ZP, {
                      value: "private",
                      children: "Private",
                    }),
                    (0, v.jsx)(wt.ZP, { value: "shared", children: "Shared" }),
                  ],
                }),
              }),
              (0, v.jsx)(tt.Z, {
                type: "primary",
                className: "add-des-btn",
                size: "large",
                block: !0,
                htmlType: "submit",
                children: "Create Destination",
              }),
            ],
          });
        };
        function fn(e) {
          return (
            (fn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            fn(e)
          );
        }
        function mn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function gn(e, t) {
          return (
            (gn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            gn(e, t)
          );
        }
        function vn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = xn(e);
            if (t) {
              var a = xn(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return yn(this, n);
          };
        }
        function yn(e, t) {
          if (t && ("object" === fn(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return bn(e);
        }
        function bn(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function xn(e) {
          return (
            (xn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            xn(e)
          );
        }
        var jn = {},
          wn = yt.Z.Option;
        yt.Z.OptGroup;
        f().extend(xt());
        var Sn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && gn(e, t);
          })(i, e);
          var t,
            n,
            r,
            a = vn(i);
          function i(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = a.call(this, e)).state = {
                isInAuthMode: !1,
                isLoadList: !1,
                currentResources: [],
                createAccount: "",
                createPrivacy: "private",
                createResource: null,
                isCreating: !1,
                currentAccount:
                  e.currentAccount ||
                  (e.accounts ? e.accounts[0] : null) ||
                  null,
                isShownUpgrade: !1,
              }),
              (t.chooseDes = t.chooseDes.bind(bn(t))),
              (t.back = t.back.bind(bn(t))),
              (t.handleAccountChange = t.handleAccountChange.bind(bn(t))),
              (t.handleConnect = t.handleConnect.bind(bn(t))),
              (t.handlePrivacyChange = t.handlePrivacyChange.bind(bn(t))),
              (t.handleResourceChange = t.handleResourceChange.bind(bn(t))),
              (t.updateCurrentResources = t.updateCurrentResources.bind(bn(t))),
              (t.handleMessage = t.handleMessage.bind(bn(t))),
              (t.onAccountConnected = t.onAccountConnected.bind(bn(t))),
              (t.handleUpgradeCancel = t.handleUpgradeCancel.bind(bn(t))),
              (t.getPermissionByName = t.getPermissionByName.bind(bn(t))),
              (t.getFreeTrialTip = t.getFreeTrialTip.bind(bn(t))),
              (t.getIsShowPro = t.getIsShowPro.bind(bn(t))),
              t
            );
          }
          return (
            (t = i),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("message", this.handleMessage);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("message", this.handleMessage);
                },
              },
              {
                key: "handleMessage",
                value: function (e) {
                  if ("accountConnected" === e.data.name) {
                    var t = JSON.parse(e.data.data);
                    this.setState({ isInAuthMode: !1 }),
                      this.onAccountConnected(t);
                  }
                },
              },
              {
                key: "handleUpgradeCancel",
                value: function () {
                  this.setState({ isShownUpgrade: !1 });
                },
              },
              {
                key: "onAccountConnected",
                value: function (e) {
                  this.props.handleAccountConnected(e),
                    this.setState({ currentAccount: e });
                },
              },
              {
                key: "chooseDes",
                value: function (e) {
                  this.getPermissionByName(e)
                    ? this.setState({ isInAuthMode: !0, createAccount: e })
                    : this.setState({ isShownUpgrade: !0 });
                },
              },
              {
                key: "getPermissionByName",
                value: function (e) {
                  return "googleDrive" === e
                    ? this.props.permissions["allow".concat(w(e))]
                    : this.props.permissions["allow".concat(w(e))] ||
                    "free" !== this.props.currentPlan.PlanName;
                },
              },
              {
                key: "getFreeTrialTip",
                value: function () {
                  var e = this.props.permissions;
                  if (e.trailConnectedAccountExpireTimeSecond > 0) {
                    if (
                      e.trailConnectedAccountExpireTimeSecond >
                      Date.now() / 1e3
                    ) {
                      var t =
                        1e3 * e.trailConnectedAccountExpireTimeSecond -
                        Date.now(),
                        n = f().duration(t, "milliseconds").asDays();
                      if (n < 1) var r = "less than a day";
                      else r = Math.ceil(n) + " days";
                      return (0, v.jsxs)(v.Fragment, {
                        children: [
                          "Free trial for pro services ends in ",
                          r,
                          ".",
                          (0, v.jsxs)("a", {
                            target: "_blank",
                            href: "https://www.awesomescreenshot.com/pricing",
                            children: [" ", "Upgrade now"],
                          }),
                        ],
                      });
                    }
                    return (0, v.jsxs)(v.Fragment, {
                      children: [
                        "The 7-days free trial was expired.",
                        (0, v.jsxs)("a", {
                          target: "_blank",
                          href: "https://www.awesomescreenshot.com/pricing",
                          children: [" ", "Upgrade now"],
                        }),
                      ],
                    });
                  }
                  return -1 === e.trailConnectedAccountExpireTimeSecond
                    ? ""
                    : 0 === e.trailConnectedAccountExpireTimeSecond
                      ? "7-days free trial for pro services"
                      : void 0;
                },
              },
              {
                key: "handleConnect",
                value: function () {
                  lt(this.state.createAccount).then(function (e) {
                    var t =
                      "width=800,height=700,top=" +
                      (window.screen.availHeight - 30 - 700) / 2 +
                      ",left=" +
                      (window.screen.availWidth - 10 - 800) / 2;
                    window.open(e.URI, "", t);
                  });
                },
              },
              {
                key: "handlePrivacyChange",
                value: function (e) {
                  this.setState({ createPrivacy: e.target.value });
                },
              },
              {
                key: "handleResourceChange",
                value: function (e) {
                  this.setState({ createResource: e });
                },
              },
              {
                key: "updateCurrentResources",
                value: function (e) {
                  (jn = {}),
                    e.forEach(function (e) {
                      jn[e.id] = e;
                    }),
                    this.setState({ currentResources: e, isLoadList: !1 });
                },
              },
              {
                key: "handleAccountChange",
                value: function (e) {
                  this.setState({
                    currentAccount:
                      "add" === e ? null : this.props.accountHash[e],
                  });
                },
              },
              {
                key: "getIsShowPro",
                value: function () {
                  return (
                    "free" === this.props.currentPlan.PlanName ||
                    "basic" === this.props.currentPlan.PlanName
                  );
                },
              },
              {
                key: "back",
                value: function () {
                  this.setState({ isInAuthMode: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.accounts,
                    n = this.state,
                    r = n.currentResources,
                    a =
                      (n.isLoadList,
                        n.createResource,
                        n.createPrivacy,
                        n.createAccount),
                    i = (n.isCreating, n.currentAccount),
                    o = n.isShownUpgrade;
                  return (
                    r.filter(function (e) {
                      return e.added;
                    }),
                    r.filter(function (e) {
                      return !e.added;
                    }),
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)("div", {
                          className: "add-des-panel",
                          children: this.state.isInAuthMode
                            ? (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsx)("div", {
                                  className: "top",
                                  children: (0, v.jsxs)("div", {
                                    className: "back-btn",
                                    onClick: this.back,
                                    children: [
                                      (0, v.jsx)(he.Z, {}),
                                      "Choose another integration",
                                    ],
                                  }),
                                }),
                                (0, v.jsx)("div", {
                                  className: "connect-panel",
                                  children: (0, v.jsxs)("div", {
                                    className: "box",
                                    children: [
                                      (0, v.jsxs)("div", {
                                        className: "main-box",
                                        children: [
                                          (0, v.jsx)("div", {
                                            className: "pic",
                                            children: (0, v.jsx)("div", {
                                              className: "logo ".concat(a),
                                            }),
                                          }),
                                          (0, v.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, v.jsx)("div", {
                                                className: "logo ".concat(a),
                                              }),
                                              (0, v.jsxs)("div", {
                                                className: "title",
                                                children: [
                                                  "Integrate ",
                                                  Oe[a].displayName,
                                                ],
                                              }),
                                              (0, v.jsx)("div", {
                                                className: "sub-title",
                                                children: Oe[a].panelSubTitle,
                                              }),
                                              (0, v.jsx)("ul", {
                                                children: Oe[
                                                  a
                                                ].featureLists.map(function (
                                                  e,
                                                  t
                                                ) {
                                                  return (0, v.jsx)(
                                                    "li",
                                                    { children: e },
                                                    t
                                                  );
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, v.jsxs)(tt.Z, {
                                        type: "primary",
                                        size: "large",
                                        onClick: this.handleConnect,
                                        children: [
                                          "Connect with??",
                                          Oe[a].displayName,
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                            : (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsx)("div", {
                                  className: "title",
                                  children: i
                                    ? "Create a new destination"
                                    : "Connect a new account",
                                }),
                                (t && t.length) > 0 &&
                                (0, v.jsxs)("div", {
                                  className: "account-select",
                                  children: [
                                    (0, v.jsx)("div", {
                                      className: "label",
                                      children: "Connected account",
                                    }),
                                    (0, v.jsxs)(yt.Z, {
                                      size: "large",
                                      value: i ? i.id : "add",
                                      onChange: this.handleAccountChange,
                                      children: [
                                        t.map(function (e) {
                                          var t = M()(
                                            "account-logo",
                                            e.service
                                          );
                                          return (0,
                                            v.jsxs)(wn, { value: e.id, children: [(0, v.jsx)("div", { className: t }), Oe[e.service].displayName, "??(", e.userInfo.name, ")"] }, e.id);
                                        }),
                                        (0, v.jsxs)(wn, {
                                          value: "add",
                                          children: [
                                            (0, v.jsx)("div", {
                                              className: "account-logo add",
                                            }),
                                            "Connect to a new account",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (function () {
                                  if (i)
                                    return (0, v.jsx)("div", {
                                      className: "des-select",
                                      children: (0, v.jsx)("div", {
                                        className: "account-des-select",
                                        children:
                                          "slack" === i.service
                                            ? (0, v.jsx)(Tt, {
                                              currentAccount: i,
                                              handleDesCreated:
                                                e.props.handleDesCreated,
                                            })
                                            : "trello" === i.service
                                              ? (0, v.jsx)(Ut, {
                                                currentAccount: i,
                                                handleDesCreated:
                                                  e.props.handleDesCreated,
                                              })
                                              : "asana" === i.service
                                                ? (0, v.jsx)(Ht, {
                                                  currentAccount: i,
                                                  handleDesCreated:
                                                    e.props.handleDesCreated,
                                                })
                                                : "googleDrive" === i.service
                                                  ? (0, v.jsx)(Jt, {
                                                    currentAccount: i,
                                                    handleDesCreated:
                                                      e.props.handleDesCreated,
                                                  })
                                                  : "github" === i.service
                                                    ? (0, v.jsx)(an, {
                                                      currentAccount: i,
                                                      handleDesCreated:
                                                        e.props.handleDesCreated,
                                                    })
                                                    : "jira" === i.service
                                                      ? (0, v.jsx)(pn, {
                                                        currentAccount: i,
                                                        handleDesCreated:
                                                          e.props.handleDesCreated,
                                                      })
                                                      : void 0,
                                      }),
                                    });
                                  var t =
                                    "saveElsewhere" === e.props.servicesType
                                      ? Ze
                                      : Ae;
                                  return (0, v.jsxs)("div", {
                                    className: "service-container",
                                    children: [
                                      "saveElsewhere" !==
                                      e.props.servicesType &&
                                      (0, v.jsx)("div", {
                                        className: "trial-tip",
                                        children: e.getFreeTrialTip(),
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "label",
                                        children: "Services",
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "account-container",
                                        children: t.map(function (t) {
                                          var n = M()(
                                            "account-item",
                                            t.name,
                                            { pro: e.getIsShowPro() }
                                          );
                                          return (0,
                                            v.jsx)("div", { className: n, "data-des": t.name, onClick: e.chooseDes.bind(null, t.name), children: (0, v.jsx)("b", {}) }, t.name);
                                        }),
                                      }),
                                    ],
                                  });
                                })(),
                              ],
                            }),
                        }),
                        (0, v.jsx)(Ue.Z, {
                          visible: o,
                          onCancel: this.handleUpgradeCancel,
                          type: "destination",
                        }),
                      ],
                    })
                  );
                },
              },
            ]) && mn(t.prototype, n),
            r && mn(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            i
          );
        })(o.Component);
        const kn = Sn;
        n(87687);
        var Cn = n(27049),
          In = (n(91826), n(3074)),
          Nn = n(7085),
          Pn = (n(53890), n(50277));
        const Tn = function (e) {
          return (0, v.jsx)("div", {
            className: "slack-form",
            children: (0, v.jsxs)(jt.Z, {
              onFinish: function (t) {
                e.handleSend(t);
              },
              children: [
                (0, v.jsx)("div", { className: "label", children: "Message" }),
                (0, v.jsx)(jt.Z.Item, {
                  name: "description",
                  children: (0, v.jsx)(Pn.Z.TextArea, {
                    size: "large",
                    autoSize: { minRows: 4 },
                    onChange: e.handleSlackMsgChange,
                  }),
                }),
                (0, v.jsx)(jt.Z.Item, {
                  children: (0, v.jsx)(tt.Z, {
                    className: "send-btn",
                    size: "large",
                    type: "primary",
                    block: !0,
                    htmlType: "submit",
                    children: "Send message",
                  }),
                }),
              ],
            }),
          });
        };
        n(29053);
        var On = n(68351),
          Dn = (n(22261), n(87607)),
          An = n(58491),
          Zn = n(57254);
        function Rn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return En(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return En(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function En(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Un = yt.Z.Option;
        const _n = function (e) {
          var t = Rn((0, o.useState)(!1), 2),
            n = t[0],
            r = t[1],
            a = Rn((0, o.useState)([]), 2),
            i = a[0],
            s = a[1],
            l = Rn((0, o.useState)([]), 2),
            c = l[0],
            d = l[1],
            u = Rn((0, o.useState)([]), 2),
            h = u[0],
            p = u[1],
            m = e.resourceID,
            g = e.currentDes;
          return (
            (0, o.useEffect)(
              function () {
                ct({ accountID: g.accountID, what: "list", boardID: m }).then(
                  function (e) {
                    s(e.items);
                  }
                ),
                  ct({
                    accountID: g.accountID,
                    what: "member",
                    boardID: m,
                  }).then(function (e) {
                    d(e.items);
                  }),
                  ct({
                    accountID: g.accountID,
                    what: "label",
                    boardID: m,
                  }).then(function (e) {
                    p(e.items);
                  });
              },
              [m]
            ),
            (0, v.jsx)("div", {
              className: "trello-form",
              children: (0, v.jsxs)(jt.Z, {
                onFinish: function (t) {
                  var n = {};
                  t.description &&
                    (n.description =
                      void 0 === t.description ? "" : t.description),
                    (n.listID = t.list),
                    t.title && (n.title = t.title),
                    t.members && (n.membersID = t.members.join(",")),
                    t.labels && (n.labelsID = t.labels.join(",")),
                    t.dueDate && !t.dueTime
                      ? (n.date = t.dueDate.format("YYYY-MM-DD"))
                      : t.dueDate &&
                      t.dueTime &&
                      (n.datetime = f().utc(
                        t.dueDate.format("YYYY-MM-DD") +
                        "T" +
                        t.dueTime.format().replace(/(.*)T/, "")
                      )),
                    e.handleSend(n);
                },
                children: [
                  (0, v.jsx)("div", { className: "label", children: "List" }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "list",
                    rules: [{ required: !0, message: "Please choose a list" }],
                    initialValue: i.length ? i[0].id : void 0,
                    children: (0, v.jsx)(yt.Z, {
                      size: "large",
                      placeholder: "Please choose a list",
                      showSearch: !0,
                      filterOption: function (e, t) {
                        return (
                          t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
                        );
                      },
                      children: i.map(function (e) {
                        return (0,
                          v.jsx)(Un, { value: e.id, name: e.name, children: e.name }, e.id);
                      }),
                    }),
                  }),
                  (0, v.jsx)("div", {
                    className: "label",
                    children: "Card title",
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "title",
                    initialValue: e.tabTitle,
                    children: (0, v.jsx)(Pn.Z, {
                      size: "large",
                      autoComplete: "off",
                    }),
                  }),
                  n &&
                  (0, v.jsxs)("div", {
                    className: "ad-fields",
                    children: [
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Description",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "description",
                        children: (0, v.jsx)(Pn.Z.TextArea, {
                          size: "large",
                          autoSize: { minRows: 3 },
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Members",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "members",
                        children: (0, v.jsx)(yt.Z, {
                          size: "large",
                          mode: "multiple",
                          style: { width: "100%" },
                          placeholder: "Select members",
                          showSearch: !0,
                          filterOption: function (e, t) {
                            return (
                              t.name.toLowerCase().indexOf(e.toLowerCase()) >=
                              0
                            );
                          },
                          children: c.map(function (e) {
                            return (0,
                              v.jsx)(Un, { value: e.id, name: e.name, children: e.name }, e.id);
                          }),
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Labels",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "labels",
                        children: (0, v.jsx)(yt.Z, {
                          size: "large",
                          mode: "multiple",
                          style: { width: "100%" },
                          placeholder: "Select a label",
                          className: "label-select trello-member-select",
                          showSearch: !0,
                          filterOption: function (e, t) {
                            return (
                              t.name.toLowerCase().indexOf(e.toLowerCase()) >=
                              0
                            );
                          },
                          dropdownClassName: "trello-label-dropdown",
                          children: h.map(function (e) {
                            return (0,
                              v.jsx)(Un, { value: e.id, name: e.name, children: (0, v.jsx)("div", { className: "trello-label-item " + e.info.color, children: e.name }) }, e.id);
                          }),
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: "half-form",
                        children: [
                          (0, v.jsxs)("div", {
                            className: "half",
                            children: [
                              (0, v.jsx)("div", {
                                className: "label",
                                children: "Due Date",
                              }),
                              (0, v.jsx)(jt.Z.Item, {
                                name: "dueDate",
                                children: (0, v.jsx)(Dn.Z, { size: "large" }),
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: "half",
                            children: [
                              (0, v.jsx)("div", {
                                className: "label",
                                children: "Due Time",
                              }),
                              (0, v.jsx)(jt.Z.Item, {
                                name: "dueTime",
                                children: (0, v.jsx)(On.Z, {
                                  size: "large",
                                  use12Hours: !0,
                                  format: "h:mm A",
                                  className: "due-time-picker",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "toggle-field",
                    children: (0, v.jsx)("a", {
                      className: "toggle-fields-btn",
                      onClick: function () {
                        r(!n);
                      },
                      children: n
                        ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Collapse all fields ",
                            (0, v.jsx)(An.Z, {}),
                          ],
                        })
                        : (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Show all fields ",
                            (0, v.jsx)(Zn.Z, {}),
                          ],
                        }),
                    }),
                  }),
                  (0, v.jsx)("div", {
                    children: (0, v.jsx)(tt.Z, {
                      className: "send-btn",
                      size: "large",
                      type: "primary",
                      block: !0,
                      htmlType: "submit",
                      children: "Create card",
                    }),
                  }),
                ],
              }),
            })
          );
        };
        function Fn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Mn(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Mn(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Mn(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Bn = yt.Z.Option;
        const zn = function (e) {
          var t = Fn((0, o.useState)(!1), 2),
            n = t[0],
            r = t[1],
            a = Fn((0, o.useState)([]), 2),
            i = a[0],
            s = a[1],
            l = Fn((0, o.useState)([]), 2),
            c = l[0],
            d = l[1],
            u = Fn((0, o.useState)([]), 2),
            h = u[0],
            p = u[1],
            m = e.currentDes,
            g = m.info.workspaceID,
            y = m.resourceID;
          return (
            (0, o.useEffect)(
              function () {
                ct({
                  accountID: m.accountID,
                  what: "section",
                  projectID: y,
                }).then(function (e) {
                  s(e.items);
                }),
                  ct({
                    accountID: m.accountID,
                    what: "member",
                    projectID: y,
                  }).then(function (e) {
                    d(e.items);
                  }),
                  ct({
                    accountID: m.accountID,
                    what: "tag",
                    workspaceID: g,
                  }).then(function (e) {
                    p(e.items);
                  });
              },
              [y]
            ),
            (0, v.jsx)("div", {
              className: "trello-form",
              children: (0, v.jsxs)(jt.Z, {
                onFinish: function (t) {
                  var n = {};
                  t.description && (n.description = t.description),
                    t.section &&
                    "-1" !== t.section &&
                    (n.sectionID = t.section),
                    t.title && (n.title = t.title),
                    t.tags && (n.tagsID = t.tags.join(",")),
                    t.assignee && (n.assigneeID = t.assignee),
                    t.dueDate && !t.dueTime
                      ? (n.date = t.dueDate.format("YYYY-MM-DD"))
                      : t.dueDate &&
                      t.dueTime &&
                      (n.datetime = f().utc(
                        t.dueDate.format("YYYY-MM-DD") +
                        "T" +
                        t.dueTime.format().replace(/(.*)T/, "")
                      )),
                    e.handleSend(n);
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "label",
                    children: "list" === m.info.layout ? "Section" : "Column",
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "section",
                    initialValue:
                      "list" !== m.info.layout
                        ? i.length
                          ? i[0].id
                          : null
                        : "-1",
                    children: (0, v.jsxs)(yt.Z, {
                      size: "large",
                      children: [
                        "list" === m.info.layout &&
                        (0, v.jsx)(Bn, {
                          value: "-1",
                          children: "No section",
                        }),
                        i.map(function (e) {
                          return (0,
                            v.jsx)(Bn, { value: e.id, children: e.name }, e.id);
                        }),
                      ],
                    }),
                  }),
                  (0, v.jsx)("div", {
                    className: "label",
                    children: "Task name",
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "title",
                    initialValue: e.tabTitle,
                    children: (0, v.jsx)(Pn.Z, {
                      size: "large",
                      autoComplete: "false",
                    }),
                  }),
                  n &&
                  (0, v.jsxs)("div", {
                    className: "ad-fields",
                    children: [
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Description",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "description",
                        children: (0, v.jsx)(Pn.Z.TextArea, {
                          size: "large",
                          autoSize: { minRows: 3 },
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Assignee",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "assignee",
                        children: (0, v.jsx)(yt.Z, {
                          size: "large",
                          style: { width: "100%" },
                          placeholder: "Please select assignee",
                          children: c.map(function (e) {
                            return (0,
                              v.jsx)(Bn, { value: e.id, children: e.name }, e.id);
                          }),
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Tags",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "tags",
                        children: (0, v.jsx)(yt.Z, {
                          size: "large",
                          mode: "multiple",
                          style: { width: "100%" },
                          placeholder: "Please select",
                          children: h.map(function (e) {
                            return (0,
                              v.jsx)(Bn, { value: e.id, children: e.name }, e.id);
                          }),
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: "half-form",
                        children: [
                          (0, v.jsxs)("div", {
                            className: "half",
                            children: [
                              (0, v.jsx)("div", {
                                className: "label",
                                children: "Due Date",
                              }),
                              (0, v.jsx)(jt.Z.Item, {
                                name: "dueDate",
                                children: (0, v.jsx)(Dn.Z, { size: "large" }),
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: "half",
                            children: [
                              (0, v.jsx)("div", {
                                className: "label",
                                children: "Due Time",
                              }),
                              (0, v.jsx)(jt.Z.Item, {
                                name: "dueTime",
                                children: (0, v.jsx)(On.Z, {
                                  size: "large",
                                  use12Hours: !0,
                                  format: "h:mm A",
                                  className: "due-time-picker",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "toggle-field",
                    children: (0, v.jsx)("a", {
                      className: "toggle-fields-btn",
                      onClick: function () {
                        r(!n);
                      },
                      children: n
                        ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Collapse all fields ",
                            (0, v.jsx)(An.Z, {}),
                          ],
                        })
                        : (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Show all fields ",
                            (0, v.jsx)(Zn.Z, {}),
                          ],
                        }),
                    }),
                  }),
                  (0, v.jsx)("div", {
                    children: (0, v.jsx)(tt.Z, {
                      className: "send-btn",
                      size: "large",
                      type: "primary",
                      block: !0,
                      htmlType: "submit",
                      children: "Create task",
                    }),
                  }),
                ],
              }),
            })
          );
        };
        const Ln = function (e) {
          var t = e.tabTitle;
          return (0, v.jsx)("div", {
            className: "slack-form",
            children: (0, v.jsxs)(jt.Z, {
              onFinish: function (t) {
                e.handleSend(values);
              },
              children: [
                (0, v.jsx)("div", { className: "label", children: "Name" }),
                (0, v.jsx)(jt.Z.Item, {
                  name: "title",
                  initialValue: t,
                  children: (0, v.jsx)(Pn.Z, {
                    onChange: e.handleSlackMsgChange,
                  }),
                }),
                (0, v.jsx)("div", {
                  children: (0, v.jsx)(tt.Z, {
                    className: "send-btn",
                    size: "large",
                    type: "primary",
                    block: !0,
                    htmlType: "submit",
                    children: "Upload image",
                  }),
                }),
              ],
            }),
          });
        };
        function Wn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Hn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Vn(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Vn(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Vn(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Gn = yt.Z.Option;
        const Yn = function (e) {
          var t,
            n = Hn((0, o.useState)(!1), 2),
            r = n[0],
            a = n[1],
            i = Hn((0, o.useState)([]), 2),
            s = i[0],
            l = i[1],
            c = Hn((0, o.useState)([]), 2),
            d = c[0],
            u = c[1],
            h = e.resourceID,
            p = e.currentDes;
          return (
            (0, o.useEffect)(
              function () {
                ct({
                  accountID: p.accountID,
                  what: "assignee",
                  repo: p.resourceName,
                  owner: p.info.owner,
                }).then(function (e) {
                  l(e.items);
                }),
                  ct({
                    accountID: p.accountID,
                    what: "label",
                    repo: p.resourceName,
                    owner: p.info.owner,
                  }).then(function (e) {
                    u(e.items);
                  });
              },
              [h]
            ),
            (0, v.jsx)("div", {
              className: "github-form",
              children: (0, v.jsxs)(jt.Z, {
                onFinish: function (t) {
                  var n = {};
                  t.description &&
                    (n.description =
                      void 0 === t.description ? "" : t.description),
                    (n.listID = t.list),
                    t.title && (n.title = t.title),
                    t.assignees && (n.assignees = t.assignees.join(",")),
                    t.labels && (n.labels = t.labels.join(",")),
                    e.handleSend(n);
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "label",
                    children: "Issue title",
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "title",
                    initialValue: e.tabTitle,
                    children: (0, v.jsx)(Pn.Z, {
                      size: "large",
                      autoComplete: "off",
                    }),
                  }),
                  r &&
                  (0, v.jsxs)("div", {
                    className: "ad-fields",
                    children: [
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Description",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "description",
                        children: (0, v.jsx)(Pn.Z.TextArea, {
                          size: "large",
                          autoSize: { minRows: 3 },
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Assignee",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "assignees",
                        children: (0, v.jsx)(yt.Z, {
                          size: "large",
                          mode: "multiple",
                          style: { width: "100%" },
                          placeholder: "Assign a member",
                          children: s.map(function (e) {
                            return (0,
                              v.jsx)(Gn, { value: e.name, children: e.name }, e.id);
                          }),
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "label",
                        children: "Labels",
                      }),
                      (0, v.jsx)(jt.Z.Item, {
                        name: "labels",
                        children: (0, v.jsx)(
                          yt.Z,
                          ((t = {
                            size: "large",
                            mode: "multiple",
                            style: { width: "100%" },
                            placeholder: "Select a label",
                            className: "label-select",
                          }),
                            Wn(t, "className", "trello-member-select"),
                            Wn(t, "dropdownClassName", "trello-label-dropdown"),
                            Wn(
                              t,
                              "children",
                              d.map(function (e) {
                                var t = { backgroundColor: "#" + e.info.color };
                                return (
                                  "ffffff" === e.info.color &&
                                  ((t.color = "black"),
                                    (t.border = "1px solid #eee")),
                                  (0, v.jsx)(
                                    Gn,
                                    {
                                      value: e.name,
                                      children: (0, v.jsx)("div", {
                                        style: t,
                                        className: "trello-label-item",
                                        children: e.name,
                                      }),
                                    },
                                    e.id
                                  )
                                );
                              })
                            ),
                            t)
                        ),
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "toggle-field",
                    children: (0, v.jsx)("a", {
                      className: "toggle-fields-btn",
                      onClick: function () {
                        a(!r);
                      },
                      children: r
                        ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Collapse all fields ",
                            (0, v.jsx)(An.Z, {}),
                          ],
                        })
                        : (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Show all fields ",
                            (0, v.jsx)(Zn.Z, {}),
                          ],
                        }),
                    }),
                  }),
                  (0, v.jsx)("div", {
                    children: (0, v.jsx)(tt.Z, {
                      className: "send-btn",
                      size: "large",
                      type: "primary",
                      block: !0,
                      htmlType: "submit",
                      children: "Create issue",
                    }),
                  }),
                ],
              }),
            })
          );
        };
        n(74611);
        var Kn = n(11382),
          qn = (n(5827), n(85482)),
          $n = yt.Z.Option;
        function Jn(e) {
          var t = e.field,
            n = t.allowedValues,
            r = t.defaultValue,
            a = -1 !== t.operations.indexOf("add") ? "multiple" : void 0,
            i = function (e) {
              var t = null;
              return (
                n.forEach(function (n) {
                  n.id === e && (t = n);
                }),
                t
              );
            };
          return (0, v.jsx)(yt.Z, {
            showSearch: !0,
            filterOption: function (e, t) {
              return t.children.toLowerCase().indexOf(e.toLowerCase()) >= 0;
            },
            size: "large",
            defaultValue: r ? r.id : void 0,
            mode: a,
            onChange: function (n) {
              var r = n;
              "customfield_10021" === t.key &&
                (r = n.map(function (e) {
                  return i(e);
                })),
                "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes" ===
                t.schema.custom &&
                (r = n.map(function (e) {
                  return i(e);
                })),
                "com.atlassian.jira.plugin.system.customfieldtypes:select" ===
                t.schema.custom && (r = { id: n }),
                e.handleChange(t.key, r);
            },
            children: n.map(function (e) {
              return (0,
                v.jsx)($n, { value: e.id, children: e.name || e.value }, e.id);
            }),
          });
        }
        function Xn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Qn(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Qn(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Qn(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var er = yt.Z.Option;
        function tr(e) {
          var t = Xn((0, o.useState)([]), 2),
            n = t[0],
            r = t[1],
            a = e.field,
            i = e.currentDes;
          (0, o.useEffect)(function () {
            ct({
              accountID: i.accountID,
              what: "autoComplete",
              fieldName: a.key,
              cloudID: i.info.cloudID,
              projectID: i.info.projectID,
            }).then(function (e) {
              r(e.items ? e.items : []);
            });
          }, []);
          var s = -1 !== a.operations.indexOf("add") ? "multiple" : void 0;
          return (0, v.jsx)(yt.Z, {
            showSearch: !0,
            size: "large",
            mode: s,
            onChange: function (t) {
              e.handleChange(a.key, t);
            },
            filterOption: function (e, t) {
              return t.children.toLowerCase().indexOf(e.toLowerCase()) >= 0;
            },
            children: n.map(function (e) {
              return (function (e) {
                return "assignee" === a.key
                  ? (0, v.jsx)(
                    er,
                    {
                      value: e.info.user.accountId,
                      children: e.info.user.displayName,
                    },
                    e.info.user.accountId
                  )
                  : "reporter" === a.key
                    ? (0, v.jsx)(
                      er,
                      { value: e.id, children: e.info.field.displayName },
                      e.id
                    )
                    : "labels" === a.key
                      ? (0, v.jsx)(
                        er,
                        {
                          value: e.info.field.value,
                          children: e.info.field.displayName,
                        },
                        e.info.field.value
                      )
                      : (0, v.jsx)(er, {});
              })(e);
            }),
          });
        }
        var nr = n(23279),
          rr = n.n(nr),
          ar = n(49101),
          ir = n(93695);
        function or(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return cr(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            lr(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function sr(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            lr(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function lr(e, t) {
          if (e) {
            if ("string" == typeof e) return cr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? cr(e, t)
                  : void 0
            );
          }
        }
        function cr(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var dr = yt.Z.Option;
        function ur(e) {
          var t = sr(
            (0, o.useState)([{ id: Date.now(), linkType: "", issues: [] }]),
            2
          ),
            n = t[0],
            r = t[1],
            a = sr((0, o.useState)([]), 2),
            i = a[0],
            s = a[1],
            l = sr((0, o.useState)([]), 2),
            c = l[0],
            d = l[1],
            h = (e.field, e.currentDes);
          (0, o.useEffect)(function () {
            ct({
              accountID: h.accountID,
              what: "issueLinkType",
              cloudID: h.info.cloudID,
              projectID: h.info.projectID,
            }).then(function (e) {
              var t = [];
              e.items.forEach(function (e) {
                "Relates" === e.name
                  ? t.push({
                    value: e.name + "+in",
                    displayName: e.info.inward,
                  })
                  : (t.push({
                    value: e.name + "+in",
                    displayName: e.info.inward,
                  }),
                    t.push({
                      value: e.name + "+out",
                      displayName: e.info.outward,
                    }));
              }),
                s(t);
            });
          }, []),
            (0, o.useEffect)(
              function () {
                e.handleChange("issuelinks", n);
              },
              [n]
            );
          var p = function (e, t) {
            ct({
              accountID: h.accountID,
              what: "issue",
              cloudID: h.info.cloudID,
              query: t,
            }).then(function (e) {
              e.items[0].info.issues.length > 0 && d(e.items[0].info.issues);
            });
          };
          return (0, v.jsxs)("div", {
            className: "issue-link",
            children: [
              (0, v.jsxs)("div", {
                className: "label",
                children: [
                  "Linked issues",
                  (0, v.jsx)("div", {
                    className: "add-btn",
                    onClick: function () {
                      r(
                        [].concat(or(n), [
                          { id: Date.now(), linkType: "", issues: [] },
                        ])
                      );
                    },
                    children: (0, v.jsx)(u.Z, {
                      title: "Add",
                      children: (0, v.jsx)(ar.Z, {}),
                    }),
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: "issue-link-container",
                children: n.map(function (e, t) {
                  return (0, v.jsxs)(
                    "div",
                    {
                      className: "issue-link-item",
                      children: [
                        (0, v.jsx)(yt.Z, {
                          size: "large",
                          className: "issue-link-type-select",
                          placeholder: "Link type",
                          onChange: function (t) {
                            !(function (e, t) {
                              var a = n.filter(function (t) {
                                return t.id === e;
                              });
                              a[0].linkType = t;
                              var i = n.map(function (t) {
                                return t.id === e ? a[0] : t;
                              });
                              r(i);
                            })(e.id, t);
                          },
                          children: i.map(function (e) {
                            return (0,
                              v.jsx)(dr, { value: e.value, children: e.displayName }, e.value);
                          }),
                        }),
                        (0, v.jsx)(yt.Z, {
                          size: "large",
                          className: "issue-link-select",
                          placeholder: "Select issues",
                          mode: "multiple",
                          onSearch: rr()(function (t) {
                            return p(e.id, t);
                          }, 800),
                          onDropdownVisibleChange: function (t) {
                            t && p(e.id, "");
                          },
                          onChange: function (t) {
                            return (function (e, t) {
                              var a = n.filter(function (t) {
                                return t.id === e;
                              });
                              a[0].issues = t;
                              var i = n.map(function (t) {
                                return t.id === e ? a[0] : t;
                              });
                              r(i);
                            })(e.id, t);
                          },
                          children: c.map(function (e) {
                            return (0,
                              v.jsx)(dr, { value: e.key, children: e.key }, e.key);
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "issue-link-remove",
                          onClick: function () {
                            var t;
                            (t = e.id),
                              r(
                                n.filter(function (e) {
                                  return e.id !== t;
                                })
                              );
                          },
                          children: (0, v.jsx)(u.Z, {
                            title: "Remove",
                            children: (0, v.jsx)(ir.Z, {}),
                          }),
                        }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
            ],
          });
        }
        function hr(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return pr(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return pr(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function pr(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var fr = yt.Z.Option;
        function mr(e) {
          var t = hr((0, o.useState)([]), 2),
            n = t[0],
            r = t[1],
            a = e.field,
            i = e.currentDes;
          (0, o.useEffect)(function () { }, []);
          var s = function (e) {
            var t;
            ct({
              accountID: i.accountID,
              what:
                ((t = a.key),
                  "customfield_10014" === t
                    ? "epic"
                    : "customfield_10021" == t
                      ? "sprint"
                      : void 0),
              cloudName: i.info.cloudName,
              query: e,
              cloudID: i.info.cloudID,
              projectID: i.info.projectID,
            }).then(function (e) {
              r(e.items ? e.items : []);
            });
          },
            l = -1 !== a.operations.indexOf("add") ? "multiple" : void 0;
          return (0, v.jsx)(yt.Z, {
            size: "large",
            showSearch: !0,
            mode: l,
            filterOption: !1,
            onChange: function (t) {
              e.handleChange(a.key, t);
            },
            onSearch: rr()(s, 800),
            onDropdownVisibleChange: function (e) {
              e && s("");
            },
            children: n.map(function (e) {
              return (function (e) {
                return "customfield_10021" === a.key
                  ? (0, v.jsxs)(
                    fr,
                    {
                      value: e.id,
                      children: [e.name, "(", e.info.data.stateKey, ")"],
                    },
                    e.id
                  )
                  : "customfield_10014" === a.key
                    ? (0, v.jsxs)(
                      fr,
                      { value: e.id, children: [e.name, "-(", e.id, ")"] },
                      e.id
                    )
                    : (0, v.jsx)(fr, {});
              })(e);
            }),
          });
        }
        function gr(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return vr(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return vr(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function vr(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        const yr = function (e) {
          var t = gr((0, o.useState)(!1), 2),
            n = t[0],
            r = t[1],
            a = e.currentDes;
          return (0, v.jsxs)("div", {
            className: "jira-api-token-panel",
            children: [
              (0, v.jsxs)("div", {
                className: "info",
                children: [
                  "Go to your Atlassian",
                  " ",
                  (0, v.jsx)("a", {
                    href: "https://id.atlassian.com/manage/api-tokens",
                    target: "_blank",
                    children: "API tokens page",
                  }),
                  " ",
                  "and create a new API token. Copy the token and paste it into the box below.",
                ],
              }),
              (0, v.jsxs)(jt.Z, {
                onSubmit: function (t) {
                  var n, i;
                  r(!0),
                    ((n = a.account.id),
                      (i = t.token),
                      ot({
                        method: "POST",
                        url: "/account/jira_basic_token",
                        data: { accountID: n, token: i },
                      }))
                      .then(function () {
                        r(!1), e.handleApiTokenSubmitted();
                      })
                      .catch(function () {
                        r(!1);
                      });
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "label",
                    children: "API TOKEN",
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    name: "token",
                    rules: [{ required: !0 }],
                    children: (0, v.jsx)(Pn.Z, {}),
                  }),
                  (0, v.jsx)(jt.Z.Item, {
                    children: (0, v.jsx)(tt.Z, {
                      type: "primary",
                      block: !0,
                      loading: n,
                      htmlType: "submit",
                      children: "Submit",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
        function br(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function xr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? br(Object(n), !0).forEach(function (t) {
                jr(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : br(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function jr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function wr(e) {
          return (0, v.jsx)(
            r.Z,
            xr(
              xr({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                wrapClassName: "jira-api-token",
                destroyOnClose: !0,
                centered: !0,
                title: "Submit Jira API token",
                children: (0, v.jsx)(yr, xr({}, e)),
              }
            )
          );
        }
        function Sr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function kr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Sr(Object(n), !0).forEach(function (t) {
                Cr(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Sr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Cr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Ir(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Nr(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Nr(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Nr(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Pr = yt.Z.Option,
          Tr = {};
        const Or = function (e) {
          var t = Ir((0, o.useState)(!1), 2),
            n = t[0],
            r = t[1],
            a = Ir((0, o.useState)({}), 2),
            i = a[0],
            s = a[1],
            l = Ir((0, o.useState)([]), 2),
            c = l[0],
            u = l[1],
            h = Ir((0, o.useState)(null), 2),
            p = h[0],
            f = h[1],
            m = Ir((0, o.useState)(!1), 2),
            g = m[0],
            y = m[1],
            b = e.currentDes;
          (0, o.useEffect)(
            function () {
              c.length && u([]),
                ct({
                  accountID: b.accountID,
                  what: "createMeta",
                  cloudID: b.info.cloudID,
                  projectID: b.info.projectID,
                }).then(function (e) {
                  f(e.items[0]),
                    u(e.items),
                    e.items.forEach(function (e) {
                      Tr[e.id] = e;
                    });
                });
            },
            [e.currentDes]
          ),
            (0, o.useEffect)(function () { });
          var x,
            j = function (e, t) {
              s(kr(kr({}, i), {}, Cr({}, e, t)));
            },
            w = function (e) {
              var t = { fields: {} },
                n = {};
              for (var r in ((n.project = { id: b.info.projectID }), e))
                "issuetype" === r || "priority" === r || "assignee" === r
                  ? (n[r] = { id: e[r] })
                  : "summary" === r ||
                    "description" === r ||
                    "environment" === r ||
                    "customfield_10014" === r ||
                    "customfield_10016" === r ||
                    "labels" === r ||
                    "customfield_10037" === r ||
                    "customfield_10038" === r ||
                    "customfield_10039" === r ||
                    "customfield_10029" === r ||
                    "customfield_10034" === r ||
                    "customfield_10035" === r ||
                    "customfield_10036" === r ||
                    "customfield_10031" === r ||
                    "customfield_10032" === r ||
                    "customfield_10033" === r ||
                    "customfield_10021" === r ||
                    (p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:select" ===
                      p.info.fields[r].schema.custom) ||
                    (p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes" ===
                      p.info.fields[r].schema.custom) ||
                    (p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:float" ===
                      p.info.fields[r].schema.custom) ||
                    (p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:textarea" ===
                      p.info.fields[r].schema.custom) ||
                    (p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:textfield" ===
                      p.info.fields[r].schema.custom)
                    ? p.info.fields[r] &&
                      "com.atlassian.jira.plugin.system.customfieldtypes:textarea" ===
                      p.info.fields[r].schema.custom
                      ? e[r] &&
                      (n[r] = {
                        version: 1,
                        type: "doc",
                        content: [
                          {
                            type: "paragraph",
                            content: [{ type: "text", text: e[r] }],
                          },
                        ],
                      })
                      : e[r] && (n[r] = e[r])
                    : "components" === r
                      ? (n[r] = e[r].map(function (e) {
                        return { id: e };
                      }))
                      : "customfield_10026" === r
                        ? e[r] &&
                        (n[r] = [
                          {
                            id: p.info.fields.customfield_10026.allowedValues[0].id,
                          },
                        ])
                        : "fixVersions" === r
                          ? (n[r] = e[r].map(function (e) {
                            return { id: e };
                          }))
                          : "reporter" === r
                            ? e[r] && (n[r] = { id: e[r] })
                            : "parent" === r
                              ? e[r] && (n[r] = { key: e[r] })
                              : ("duedate" === r ||
                                "customfield_10015" === r ||
                                "customfield_10030" === r ||
                                (p.info.fields[r] &&
                                  "com.atlassian.jira.plugin.system.customfieldtypes:datetime" ===
                                  p.info.fields[r].schema.custom) ||
                                (p.info.fields[r] &&
                                  "com.atlassian.jira.plugin.system.customfieldtypes:datepicker" ===
                                  p.info.fields[r].schema.custom)) &&
                              e[r] &&
                              (n[r] = e[r].format());
              return (
                (e["timetracking-o"] || e["timetracking-r"]) &&
                (n.timetracking = {}),
                e["timetracking-o"] &&
                (n.timetracking.originalEstimate = e["timetracking-o"]),
                e["timetracking-r"] &&
                (n.timetracking.remainingEstimate = e["timetracking-r"]),
                (t.fields = n),
                e.issuelinks &&
                e.issuelinks.length &&
                ((t.issueLinks = []),
                  e.issuelinks.forEach(function (e) {
                    if (e.linkType && e.issues.length) {
                      var n = e.linkType.split("+"),
                        r = n[0],
                        a = n[1];
                      e.issues.forEach(function (e) {
                        var n = Cr({ type: r }, "".concat(a, "wardIssue"), e);
                        t.issueLinks.push(n);
                      });
                    }
                  })),
                t
              );
            },
            S = function (e) {
              return "timetracking" === e.key ? "(eg. 3w 4d 12h)" : "";
            },
            k = function () {
              y(!0);
            },
            C = function (e) {
              return void 0 !== e.allowedValues
                ? (0, v.jsx)(Jn, { handleChange: j, field: e })
                : void 0 !== e.autoCompleteUrl
                  ? (0, v.jsx)(tr, { handleChange: j, currentDes: b, field: e })
                  : "description" === e.key ||
                    "environment" === e.key ||
                    "com.atlassian.jira.plugin.system.customfieldtypes:textarea" ===
                    e.schema.custom
                    ? (0, v.jsx)(jt.Z.Item, {
                      name: e.key,
                      children: (0, v.jsx)(Pn.Z.TextArea, {
                        size: "large",
                        autoSize: { minRows: 3 },
                      }),
                    })
                    : "customfield_10014" === e.key
                      ? (0, v.jsx)(mr, { handleChange: j, currentDes: b, field: e })
                      : "customfield_10021" === e.key
                        ? p.info.apiToken
                          ? (0, v.jsx)(mr, { handleChange: j, currentDes: b, field: e })
                          : (0, v.jsx)(v.Fragment, {
                            children: (0, v.jsxs)("i", {
                              className: "jira-sprint-tip",
                              children: [
                                "To use Sprint, you need to provide an API token.",
                                " ",
                                (0, v.jsx)("a", {
                                  onClick: k,
                                  children: "Submit API token",
                                }),
                              ],
                            }),
                          })
                        : (0, v.jsx)(jt.Z.Item, {
                          name: e.key,
                          children: (0, v.jsx)(Pn.Z, {
                            size: "large",
                            placeholder: S(e),
                          }),
                        });
            };
          return (0, v.jsxs)("div", {
            className: "jira-form",
            children: [
              0 === c.length
                ? (0, v.jsx)("div", {
                  className: "loading",
                  children: (0, v.jsx)(Kn.Z, {
                    indicator: (0, v.jsx)(Nn.Z, { spin: !0 }),
                  }),
                })
                : (0, v.jsxs)(jt.Z, {
                  onFinish: function (t) {
                    var n = kr(kr({}, t), i),
                      r = w(n),
                      a = p.info.fields;
                    a.environment &&
                      !r.fields.environment &&
                      (r.fields.environment = ""),
                      a.description &&
                      !r.fields.description &&
                      (r.fields.description = ""),
                      e.handleSend(r);
                  },
                  children: [
                    (0, v.jsx)("div", {
                      className: "label",
                      children: "Issue Type",
                    }),
                    (0, v.jsx)(jt.Z.Item, {
                      name: "issuetype",
                      initialValue: c[0].id,
                      children: (0, v.jsx)(yt.Z, {
                        size: "large",
                        onChange: function (e, t) {
                          f(Tr[e]);
                        },
                        children: c.map(function (e) {
                          if ("Subtask" !== e.name)
                            return (0, v.jsx)(
                              Pr,
                              { value: e.id, children: e.name },
                              e.id
                            );
                        }),
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "label",
                      children: "Summary",
                    }),
                    (0, v.jsx)(jt.Z.Item, {
                      name: "summary",
                      rules: [
                        {
                          required: !0,
                          message: "You must specify a summary of the issue.",
                        },
                      ],
                      children: (0, v.jsx)(Pn.Z, { size: "large" }),
                    }),
                    n &&
                    ((x = p.info.fields),
                      (0, v.jsx)(v.Fragment, {
                        children: Object.keys(x).map(function (e) {
                          return "issuetype" === e ||
                            "project" === e ||
                            "summary" === e ||
                            "attachment" === e
                            ? void 0
                            : "timetracking" === e
                              ? (0, v.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, v.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          (0, v.jsx)("div", {
                                            className: "label",
                                            children: "Original Estimate",
                                          }),
                                          (0, v.jsx)(jt.Z.Item, {
                                            name: "timetracking-o",
                                            children: (0, v.jsx)(Pn.Z, {
                                              size: "large",
                                              placeholder: "(eg. 3w 4d 12h)",
                                            }),
                                          }),
                                        ],
                                      },
                                      "oe"
                                    ),
                                    (0, v.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          (0, v.jsx)("div", {
                                            className: "label",
                                            children: "Remaining Estimate",
                                          }),
                                          (0, v.jsx)(jt.Z.Item, {
                                            name: "timetracking-r",
                                            children: (0, v.jsx)(Pn.Z, {
                                              size: "large",
                                              placeholder: "(eg. 3w 4d 12h)",
                                            }),
                                          }),
                                        ],
                                      },
                                      "re"
                                    ),
                                  ],
                                },
                                x[e].key
                              )
                              : "issuelinks" === e
                                ? (0, v.jsx)(
                                  "div",
                                  {
                                    children: (0, v.jsx)(ur, {
                                      handleChange: j,
                                      currentDes: b,
                                      field: x,
                                    }),
                                  },
                                  x[e].key
                                )
                                : "duedate" === e ||
                                  "customfield_10030" === e ||
                                  "customfield_10015" === e ||
                                  "com.atlassian.jira.plugin.system.customfieldtypes:datetime" ===
                                  x[e].schema.custom ||
                                  "com.atlassian.jira.plugin.system.customfieldtypes:datepicker" ===
                                  x[e].schema.custom
                                  ? (0, v.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, v.jsx)("div", {
                                          className: "label",
                                          children: x[e].name,
                                        }),
                                        (0, v.jsx)(jt.Z.Item, {
                                          name: e,
                                          children: (0, v.jsx)(Dn.Z, {
                                            size: "large",
                                            style: { width: "100%" },
                                          }),
                                        }),
                                      ],
                                    },
                                    x[e].key
                                  )
                                  : "customfield_10022" === e ||
                                    "customfield_10017" === e ||
                                    "parent" === e
                                    ? ""
                                    : "customfield_10016" === e ||
                                      "com.atlassian.jira.plugin.system.customfieldtypes:float" ===
                                      x[e].schema.custom
                                      ? (0, v.jsxs)(
                                        "div",
                                        {
                                          children: [
                                            (0, v.jsx)("div", {
                                              className: "label",
                                              children: x[e].name,
                                            }),
                                            (0, v.jsx)(jt.Z.Item, {
                                              name: e,
                                              children: (0, v.jsx)(qn.Z, {
                                                size: "large",
                                                style: { width: "100%" },
                                              }),
                                            }),
                                          ],
                                        },
                                        x[e].key
                                      )
                                      : "customfield_10026" === e
                                        ? (0, v.jsxs)(
                                          "div",
                                          {
                                            children: [
                                              (0, v.jsx)("div", {
                                                className: "label",
                                                children: x[e].name,
                                              }),
                                              (0, v.jsx)(jt.Z.Item, {
                                                name: e,
                                                children: (0, v.jsx)(d.Z, {
                                                  children: x[e].allowedValues[0].value,
                                                }),
                                              }),
                                            ],
                                          },
                                          x[e].key
                                        )
                                        : (0, v.jsxs)(
                                          "div",
                                          {
                                            children: [
                                              (0, v.jsx)("div", {
                                                className: "label",
                                                children: x[e].name,
                                              }),
                                              C(x[e]),
                                            ],
                                          },
                                          x[e].key
                                        );
                        }),
                      })),
                    (0, v.jsx)("div", {
                      className: "toggle-field",
                      children: (0, v.jsx)("a", {
                        className: "toggle-fields-btn",
                        onClick: function () {
                          r(!n);
                        },
                        children: n
                          ? (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Collapse all fields ",
                              (0, v.jsx)(An.Z, {}),
                            ],
                          })
                          : (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Show all fields ",
                              (0, v.jsx)(Zn.Z, {}),
                            ],
                          }),
                      }),
                    }),
                    (0, v.jsx)("div", {
                      children: (0, v.jsx)(tt.Z, {
                        className: "send-btn",
                        size: "large",
                        type: "primary",
                        block: !0,
                        htmlType: "submit",
                        children: "Create issue",
                      }),
                    }),
                  ],
                }),
              (0, v.jsx)(wr, {
                visible: g,
                onCancel: function () {
                  y(!1);
                },
                currentDes: b,
                handleApiTokenSubmitted: function () {
                  y(!1),
                    c.length && u([]),
                    ct({
                      accountID: b.accountID,
                      what: "createMeta",
                      cloudID: b.info.cloudID,
                      projectID: b.info.projectID,
                    }).then(function (e) {
                      f(e.items[0]),
                        u(e.items),
                        e.items.forEach(function (e) {
                          Tr[e.id] = e;
                        });
                    });
                },
              }),
            ],
          });
        };
        function Dr(e) {
          return (
            (Dr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            Dr(e)
          );
        }
        function Ar(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Zr(e, t) {
          return (
            (Zr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            Zr(e, t)
          );
        }
        function Rr(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = _r(e);
            if (t) {
              var a = _r(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Er(this, n);
          };
        }
        function Er(e, t) {
          if (t && ("object" === Dr(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Ur(e);
        }
        function Ur(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _r(e) {
          return (
            (_r = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            _r(e)
          );
        }
        var Fr = yt.Z.Option;
        const Mr = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Zr(e, t);
          })(s, e);
          var t,
            n,
            r,
            o = Rr(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = o.call(this, e)).state = {
                currentDesId: t.props.currentDes.id,
                slackMsg: "",
                isUploading: !1,
                percentage: 0,
              }),
              (t.handleDesChange = t.handleDesChange.bind(Ur(t))),
              (t.handleSend = t.handleSend.bind(Ur(t))),
              (t.handleSlackMsgChange = t.handleSlackMsgChange.bind(Ur(t))),
              (t.onUploadProgress = t.onUploadProgress.bind(Ur(t))),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "handleDesChange",
                value: function (e) {
                  "add" !== e
                    ? this.setState({ currentDesId: e })
                    : this.props.goToAddDes();
                },
              },
              {
                key: "onUploadProgress",
                value: function (e) {
                  this.setState({ percentage: e });
                },
              },
              {
                key: "handleSend",
                value: function (e) {
                  var t = this,
                    n = this.props.destinations,
                    r = this.state.currentDesId,
                    o = {};
                  n.forEach(function (e) {
                    o[e.id] = e;
                  });
                  var s = o[r];
                  (e.service = s.service), (e.destinationID = r + "");
                  var l,
                    c = e.description;
                  if (
                    (this.props.tabUrl && (e.sourceLink = this.props.tabUrl),
                      "trello" === e.service
                        ? (e.extraString = (function (e) {
                          if (!e) return "";
                          var t = "";
                          for (var n in e)
                            t += "**" + n + "**: " + e[n] + " \n";
                          return t;
                        })(this.props.imageInfo))
                        : "asana" === e.service
                          ? (e.extraString = (function (e) {
                            if (!e) return "";
                            var t = "";
                            return (
                              t +
                              "Captured in " +
                              e.Browser +
                              ", " +
                              e["Viewport Size"] +
                              " viewport, " +
                              e["Pixel Ratio"] +
                              " pixel ratio, " +
                              e["Zoom Level"] +
                              " zoom, " +
                              e.OS
                            );
                          })(this.props.imageInfo))
                          : "github" === e.service
                            ? (e.extraString = (function (e) {
                              if (!e) return "";
                              var t = "<table>";
                              for (var n in e)
                                t +=
                                  "<tr><td><strong>" +
                                  n +
                                  "</strong></td><td>" +
                                  e[n] +
                                  "</td></tr>";
                              return t + "</table> \n";
                            })(this.props.imageInfo))
                            : "jira" === e.service &&
                            (void 0 !== e.fields.environment
                              ? ((e.fields.environment = j(
                                e.fields.environment,
                                this.props.imageInfo,
                                this.props.itemUrl,
                                this.props.type
                              )),
                                void 0 !== e.fields.description &&
                                (e.fields.description = {
                                  version: 1,
                                  type: "doc",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: e.fields.description,
                                        },
                                      ],
                                    },
                                  ],
                                }))
                              : void 0 !== e.fields.description &&
                              (e.fields.description = j(
                                e.fields.description,
                                this.props.imageInfo,
                                this.props.itemUrl,
                                this.props.type
                              ))),
                      this.props.itemId)
                  )
                    "video" === this.props.type
                      ? (e.videoID = this.props.itemId)
                      : (e.imageID = this.props.itemId),
                      this.setState({ isUploading: !0 }),
                      ((l = e),
                        ot({
                          method: "POST",
                          url: "/account/share_item",
                          data: l,
                        }))
                        .then(
                          function (n) {
                            a.Z.success({
                              message: Oe[e.service].successMsg,
                              description: (0, v.jsxs)("a", {
                                href: n.itemUrl,
                                target: "_blank",
                                children: [
                                  "Click to see it in your ",
                                  Oe[e.service].displayName,
                                ],
                              }),
                            }),
                              t.props.handleSendSuccess();
                          },
                          function (e) {
                            throw new Error(
                              Oe[s.service].actionTypeStr +
                              " failed! (" +
                              e +
                              ")"
                            );
                          }
                        )
                        .catch(function (e) {
                          e && i.ZP.error(e.toString() + " Please try again!"),
                            t.setState({ isUploading: !1, percentage: 0 });
                        });
                  else {
                    if (this.props.imageBlob) var d = this.props.contentType;
                    else {
                      var u = this.props.imageUrl.split(",")[1];
                      d = this.props.imageUrl
                        .split(",")[0]
                        .split(":")[1]
                        .split(";")[0];
                    }
                    this.setState({ isUploading: !0 }),
                      (function (e) {
                        return ot({
                          method: "POST",
                          url: "/destination/image/create",
                          data: e,
                        });
                      })({
                        Title: e.title || "",
                        Description: c,
                        DestID: this.state.currentDesId + "",
                        ContentType: d,
                      })
                        .then(
                          function (n) {
                            var r = t.props.imageBlob
                              ? t.props.imageBlob
                              : y(u, d),
                              i = new File([r], "test.png"),
                              o = n.Image.S3Key;
                            return (
                              (e.destinationImageID = n.Image.ImageID + ""),
                              (e.imageURL =
                                at + "/destination/image/show?ImageKey=" + o),
                              (e.imageName =
                                t.props.tabTitle +
                                "." +
                                d.replace("image/", "")),
                              (function (e, t, n) {
                                var r = new FormData();
                                for (var a in e) r.append(a, e[a]);
                                var i =
                                  n ||
                                  "https://awesomescreenshot.s3.amazonaws.com/";
                                return g()({
                                  method: "POST",
                                  crossdomain: !0,
                                  url: i,
                                  data: r,
                                  onUploadProgress: function (e) {
                                    var n = Math.round(
                                      (100 * e.loaded) / e.total
                                    );
                                    t(n);
                                  },
                                });
                              })(
                                {
                                  AWSAccessKeyId: "AKIAJSCJQ2NM3XLFPVKA",
                                  acl: "private",
                                  key: n.Image.S3Key,
                                  "Content-Type": d,
                                  policy: n.Policy,
                                  signature: n.Signature,
                                  file: i,
                                },
                                t.onUploadProgress
                              ).then(
                                function (n) {
                                  return (function (e) {
                                    return ot({
                                      method: "GET",
                                      url: "/destination/image/upload_done",
                                      params: { key: e },
                                    });
                                  })(o).then(function (n) {
                                    return (function (e) {
                                      return ot({
                                        method: "POST",
                                        url: "/account/share_screenshot",
                                        data: e,
                                      });
                                    })(e).then(
                                      function (n) {
                                        a.Z.success({
                                          message: Oe[e.service].successMsg,
                                          description: (0, v.jsxs)("a", {
                                            href: n.itemUrl,
                                            target: "_blank",
                                            children: [
                                              "Click to see it in your",
                                              " ",
                                              Oe[e.service].displayName,
                                            ],
                                          }),
                                        }),
                                          t.props.handleSendSuccess();
                                      },
                                      function (e) {
                                        throw new Error(
                                          Oe[s.service].actionTypeStr +
                                          " failed! (" +
                                          e +
                                          ")"
                                        );
                                      }
                                    );
                                  });
                                },
                                function (e) {
                                  throw new Error("Upload image failed!");
                                }
                              )
                            );
                          },
                          function (e) {
                            throw new Error("Create image error!(" + e + ")");
                          }
                        )
                        .catch(function (e) {
                          e && i.ZP.error(e.toString() + " Please try again!"),
                            t.setState({ isUploading: !1, percentage: 0 });
                        });
                  }
                },
              },
              {
                key: "handleSlackMsgChange",
                value: function (e) {
                  this.setState({ slackMsg: e.currentTarget.value });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.destinations,
                    r = t.itemUrl,
                    a = this.state,
                    i = a.currentDesId,
                    o = a.isUploading,
                    s = a.percentage,
                    l = {};
                  n.forEach(function (e) {
                    l[e.id] = e;
                  });
                  var c = l[i],
                    d = M()("upload-progress", { active: o }),
                    u = M()("destination-area", { active: !o });
                  return (0, v.jsxs)("div", {
                    className: "des-panel",
                    children: [
                      (0, v.jsxs)("div", {
                        className: d,
                        children: [
                          r
                            ? (0, v.jsx)(Nn.Z, { className: "loading" })
                            : (0, v.jsx)(In.Z, {
                              type: "circle",
                              status: "active",
                              percent: s,
                            }),
                          (0, v.jsx)("div", {
                            className: "upload-tip",
                            children:
                              s < 100 && !r
                                ? "Uploading image..."
                                : Oe[c.service].actionTypeStr + "...",
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className: u,
                        children: [
                          (0, v.jsx)("div", {
                            className: "destination-select",
                            children: (0, v.jsxs)(yt.Z, {
                              size: "large",
                              value: i,
                              onChange: this.handleDesChange,
                              children: [
                                n.map(function (e) {
                                  var t = M()("des-logo", e.service);
                                  return (0,
                                    v.jsxs)(Fr, { value: e.id, children: [(0, v.jsx)("div", { className: t }), De[e.resourceType] + e.resourceName] }, e.id);
                                }),
                                (0, v.jsxs)(
                                  Fr,
                                  {
                                    value: "add",
                                    children: [
                                      (0, v.jsx)("div", {
                                        className: "des-logo add",
                                      }),
                                      "Create a new destination",
                                    ],
                                  },
                                  "add"
                                ),
                              ],
                            }),
                          }),
                          (0, v.jsx)(Cn.Z, {
                            plain: !0,
                            children: Oe[c.service].panelTitle,
                          }),
                          (0, v.jsx)("div", {
                            className: "des-form",
                            children:
                              "slack" === c.service
                                ? (0, v.jsx)(Tn, {
                                  currentDes: c,
                                  tabTitle: e.props.tabTitle,
                                  handleSend: e.handleSend,
                                  handleSlackMsgChange:
                                    e.handleSlackMsgChange,
                                })
                                : "trello" === c.service
                                  ? (0, v.jsx)(_n, {
                                    currentDes: c,
                                    tabTitle: e.props.tabTitle,
                                    resourceID: c.resourceID,
                                    handleSend: e.handleSend,
                                  })
                                  : "asana" === c.service
                                    ? (0, v.jsx)(zn, {
                                      tabTitle: e.props.tabTitle,
                                      currentDes: c,
                                      handleSend: e.handleSend,
                                    })
                                    : "googleDrive" === c.service
                                      ? (0, v.jsx)(Ln, {
                                        tabTitle: e.props.tabTitle,
                                        currentDes: c,
                                        handleSend: e.handleSend,
                                      })
                                      : "github" === c.service
                                        ? (0, v.jsx)(Yn, {
                                          tabTitle: e.props.tabTitle,
                                          currentDes: c,
                                          handleSend: e.handleSend,
                                        })
                                        : "jira" === c.service
                                          ? (0, v.jsx)(Or, {
                                            tabTitle: e.props.tabTitle,
                                            currentDes: c,
                                            handleSend: e.handleSend,
                                          })
                                          : void 0,
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]) && Ar(t.prototype, n),
            r && Ar(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })(o.Component);
        function Br(e) {
          return (
            (Br =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            Br(e)
          );
        }
        function zr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Lr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? zr(Object(n), !0).forEach(function (t) {
                Wr(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : zr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Wr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Hr(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Vr(e, t) {
          return (
            (Vr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            Vr(e, t)
          );
        }
        function Gr(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Kr(e);
            if (t) {
              var a = Kr(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Yr(this, n);
          };
        }
        function Yr(e, t) {
          if (t && ("object" === Br(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function Kr(e) {
          return (
            (Kr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            Kr(e)
          );
        }
        var qr = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Vr(e, t);
          })(o, e);
          var t,
            n,
            a,
            i = Gr(o);
          function o(e) {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              i.call(this, e)
            );
          }
          return (
            (t = o),
            (n = [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.currentPanel;
                  return (0, v.jsx)(
                    r.Z,
                    Lr(
                      Lr({}, this.props),
                      {},
                      {
                        footer: null,
                        maskClosable: !1,
                        wrapClassName: "des-modal",
                        destroyOnClose: !0,
                        centered: !0,
                        closeIcon: (0, v.jsx)(rt.Tw, {
                          style: { fontSize: "12px" },
                        }),
                        children:
                          "add" === t
                            ? (0, v.jsx)(
                              kn,
                              Lr(
                                Lr({}, e.props),
                                {},
                                {
                                  currentAccount:
                                    e.props.defaultCurrentAccount,
                                }
                              )
                            )
                            : "des" === t
                              ? (0, v.jsx)(Mr, {
                                currentDes: e.props.currentDes,
                                destinations: e.props.destinations,
                                goToAddDes: e.props.goToAddDes,
                                tabTitle: e.props.tabTitle,
                                tabUrl: e.props.tabUrl,
                                imageUrl: e.props.imageUrl,
                                imageBlob: e.props.imageBlob,
                                imageInfo: e.props.imageInfo || null,
                                handleSendSuccess: e.props.onCancel,
                                contentType: e.props.contentType,
                                type: e.props.type,
                                itemId: e.props.itemId,
                                itemUrl: e.props.itemUrl,
                              })
                              : void 0,
                      }
                    )
                  );
                },
              },
            ]) && Hr(t.prototype, n),
            a && Hr(t, a),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            o
          );
        })(o.Component);
        const $r = qr;
        function Jr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Xr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Jr(Object(n), !0).forEach(function (t) {
                Qr(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Jr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Qr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function ea(e) {
          return (0, v.jsx)(
            r.Z,
            Xr(
              Xr({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                wrapClassName: "what-des",
                destroyOnClose: !0,
                children: "what is a destination?",
              }
            )
          );
        }
        function ta(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function na(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ta(Object(n), !0).forEach(function (t) {
                ra(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : ta(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function ra(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function aa(e) {
          return (
            (0, o.useEffect)(function () {
              return function () { };
            }, []),
            (0, v.jsx)(
              r.Z,
              na(
                na({}, e),
                {},
                {
                  maskClosable: !1,
                  className: "dark-comfig",
                  wrapClassName: "what-des",
                  destroyOnClose: !0,
                  closeIcon: (0, v.jsx)(rt.Tw, { className: "close" }),
                  width: 340,
                  footer: null,
                  children: (0, v.jsxs)("div", {
                    children: [
                      (0, v.jsx)("div", {
                        className: "title",
                        children: "Turn off auto back up?",
                      }),
                      (0, v.jsx)("div", {
                        className: "content",
                        children:
                          "Would you like to turn off back up to the cloud automatically? (Note that previously synced screenshots will not be deleted.)",
                      }),
                      (0, v.jsx)(tt.Z, {
                        className: "btn",
                        onClick: e.comfigAction,
                        children: "Turn off",
                      }),
                    ],
                  }),
                }
              )
            )
          );
        }
        function ia(e) {
          var t = e.destinations,
            n = M()("des-container", { small: e.small });
          return (0, v.jsx)("div", {
            className: "render-des",
            children:
              t && t.length
                ? (0, v.jsxs)("div", {
                  className: n,
                  children: [
                    t.map(function (t, n) {
                      var r = M()("des-item", t.service);
                      return (0,
                        v.jsxs)("div", { className: r, onClick: e.handleDesClick.bind(null, t), title: Oe[t.service].displayName + " (" + De[t.resourceType] + t.resourceName + ")", children: [(0, v.jsx)("div", { className: "icon" }), (0, v.jsx)("div", { className: "name", children: De[t.resourceType] + t.resourceName })] }, n);
                    }),
                    (0, v.jsx)("div", {
                      className: "des-item add",
                      onClick: e.handleDesClick.bind(null, "add"),
                      children: (0, v.jsx)("div", {
                        className: "icon",
                        children: "+",
                      }),
                    }),
                  ],
                })
                : (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(tt.Z, {
                      type: "primary",
                      className: "feedback-btn",
                      block: !0,
                      onClick: e.handleAddDesClick,
                      children: "Connect with other services",
                    }),
                    (0, v.jsxs)("div", {
                      className: "support-s",
                      children: [
                        (0, v.jsx)("div", { children: "Support:" }),
                        (0, v.jsx)("div", {
                          className: "s-container",
                          children: Ae.map(function (e) {
                            return (0,
                              v.jsx)(u.Z, { title: e.displayName, children: (0, v.jsx)("div", { className: "s-item ".concat(e.name) }) }, e.name);
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          });
        }
        var oa = n(85483);
        function sa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return la(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return la(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function la(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ca = yt.Z.Option;
        const da = function (e) {
          var t = e.accounts,
            n = e.currentDriveAccount,
            r = n ? n.service : "googleDrive",
            s = Oe[r],
            l = sa(
              (0, o.useState)(function () {
                return t ? t[0] : null;
              }),
              2
            ),
            c = (l[0], l[1]),
            u = sa((0, o.useState)(""), 2),
            h = u[0],
            p = u[1],
            f = sa((0, o.useState)(!0), 2),
            m = f[0],
            b = f[1],
            x = sa((0, o.useState)([]), 2),
            j = x[0],
            k = x[1],
            C = sa((0, o.useState)(!1), 2),
            I = C[0],
            N = C[1],
            P = sa(
              (0, o.useState)(function () {
                return null === e.currentDriveAccount;
              }),
              2
            ),
            T = (P[0], P[1], sa((0, o.useState)(!1), 2)),
            O = T[0],
            D = T[1],
            A = sa((0, o.useState)(0), 2),
            Z = A[0],
            R = A[1],
            E = sa((0, o.useState)(!1), 2),
            U = E[0],
            _ = E[1],
            F = sa((0, o.useState)(""), 2),
            B = F[0],
            z = F[1],
            L = sa((0, o.useState)(""), 2),
            W = L[0],
            H = L[1],
            V = sa((0, o.useState)(!1), 2),
            G = V[0],
            Y = V[1],
            K = sa((0, o.useState)(!1), 2),
            q = K[0],
            $ = K[1];
          (0, o.useEffect)(
            function () {
              c(t[0]);
            },
            [t.length]
          ),
            (0, o.useEffect)(
              function () {
                return (
                  e.currentDriveAccount && X(),
                  window.addEventListener("message", J),
                  function () {
                    window.removeEventListener("message", J);
                  }
                );
              },
              [e.currentDriveAccount]
            );
          var J = function (t) {
            if ("accountConnected" === t.data.name) {
              var n = JSON.parse(t.data.data);
              e.handleDriveAccountConnected(n);
            }
          },
            X = function (t) {
              k([]),
                N(!0),
                ct({
                  accountID: e.currentDriveAccount.id,
                  what: "folder",
                  query: t,
                }).then(function (e) {
                  var t = e.items ? e.items : [];
                  k(t), N(!1);
                });
            },
            Q = function (e, t, r, a) {
              if ("googleDrive" === n.service) {
                var i = new File([e], r.name, { type: t }),
                  o = t.split("/")[1];
                "jpeg" == o && (o = "jpg");
                var s = { name: r.name + "." + o };
                "-1" !== r.folder && (s.parents = [r.folder]),
                  ee(a, i, s, r.googleDriveSharable);
              } else if ("dropbox" === n.service) {
                var l =
                  ("-1" !== r.folder
                    ? j.filter(function (e) {
                      return e.id === r.folder;
                    })[0].info.path ||
                    j.filter(function (e) {
                      return e.id === r.folder;
                    })[0].info.path_lower
                    : "") +
                  "/" +
                  r.name +
                  "." +
                  t.split("/")[1];
                te(a, l, e);
              } else if ("box" === n.service) {
                var c = r.name + "." + t.split("/")[1],
                  d = r.folder;
                i = new File([e], r.name, { type: t });
                ne(a, i, c, d);
              }
            },
            ee = function (t, n, o, s) {
              (function (e, t, n, r, a) {
                var i = new FormData();
                return (
                  i.append(
                    "metadata",
                    new Blob([JSON.stringify(n)], { type: "application/json" })
                  ),
                  i.append("file", t),
                  g()({
                    url: "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
                    method: "POST",
                    headers: { Authorization: "Bearer " + e },
                    data: i,
                    onUploadProgress: function (e) {
                      var t = 0;
                      (t =
                        "video" === a
                          ? 50 +
                          Math.round(
                            Math.round((100 * e.loaded) / e.total) / 2
                          )
                          : Math.round((100 * e.loaded) / e.total)),
                        r(t);
                    },
                  })
                );
              })(t, n, o, R, e.type)
                .then(function (n) {
                  if (s) {
                    var i = n.data.id;
                    $(!0),
                      (function (e, t) {
                        return g()({
                          url:
                            "https://www.googleapis.com/drive/v3/files/" +
                            t +
                            "/permissions",
                          method: "POST",
                          headers: { Authorization: "Bearer " + e },
                          data: { role: "reader", type: "anyone" },
                        });
                      })(t, i)
                        .then(function (e) {
                          H(
                            "https://drive.google.com/file/d/".concat(
                              i,
                              "/view?usp=sharing"
                            )
                          ),
                            Y(!0),
                            $(!1);
                        })
                        .catch(function () {
                          H(
                            "https://drive.google.com/file/d/".concat(
                              i,
                              "/view?usp=sharing"
                            )
                          ),
                            Y(!0),
                            $(!1);
                        });
                  } else
                    a.Z.success({
                      message: Oe[r].successMsg,
                      description: (0, v.jsxs)("a", {
                        target: "_blank",
                        href: "https://drive.google.com/file/d/".concat(
                          n.data.id,
                          "/view"
                        ),
                        children: [
                          "Click to see it in your ",
                          Oe[r].displayName,
                        ],
                      }),
                    }),
                      e.onCancel();
                  ht("googleDrive");
                })
                .catch(function (e) {
                  i.ZP.error(e.response.data.msg), D(!1), R(0);
                });
            },
            te = function (t, n, o) {
              (function (e, t, n, r, a) {
                return g()({
                  url: "https://content.dropboxapi.com/2/files/upload",
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + e,
                    "Dropbox-API-Arg":
                      ((i = {
                        path: t,
                        mode: "add",
                        autorename: !0,
                        mute: !1,
                        strict_conflict: !1,
                      }),
                        JSON.stringify(i).replace(
                          /[\u007f-\uffff]/g,
                          function (e) {
                            return (
                              "\\u" +
                              ("000" + e.charCodeAt(0).toString(16)).slice(-4)
                            );
                          }
                        )),
                    "Content-Type": "application/octet-stream",
                  },
                  data: n,
                  onUploadProgress: function (e) {
                    var t = 0;
                    (t =
                      "video" === a
                        ? 50 +
                        Math.round(Math.round((100 * e.loaded) / e.total) / 2)
                        : Math.round((100 * e.loaded) / e.total)),
                      r(t);
                  },
                });
                var i;
              })(t, n, o, R, e.type)
                .then(function (t) {
                  a.Z.success({
                    message: Oe[r].successMsg,
                    description: (0, v.jsxs)("a", {
                      target: "_blank",
                      href: "https://www.dropbox.com/home".concat(
                        t.data.path_display
                      ),
                      children: ["Click to see it in your ", Oe[r].displayName],
                    }),
                  }),
                    e.onCancel(),
                    ht("dropbox");
                })
                .catch(function (e) {
                  e.response &&
                    "insufficient_space" === e.response.data.error.reason[".tag"]
                    ? i.ZP.error(
                      "Your dropbox account is full. The screenshot can???t be sent to it"
                    )
                    : i.ZP.error(e.response.data.error_summary),
                    D(!1),
                    R(0);
                });
            },
            ne = function (t, n, o, s) {
              (function (e, t, n, r, a, i) {
                var o = new FormData(),
                  s = { name: n };
                return (
                  (s.parent = "-1" !== r ? { id: r } : { id: "0" }),
                  o.append("attributes", JSON.stringify(s)),
                  o.append("file", t),
                  g()({
                    method: "POST",
                    url: "https://upload.box.com/api/2.0/files/content",
                    headers: {
                      Authorization: "Bearer " + e,
                      "Access-Control-Expose-Headers": "WWW-Authenticate",
                    },
                    data: o,
                    onUploadProgress: function (e) {
                      var t = 0;
                      (t =
                        "video" === i
                          ? 50 +
                          Math.round(
                            Math.round((100 * e.loaded) / e.total) / 2
                          )
                          : Math.round((100 * e.loaded) / e.total)),
                        a(t);
                    },
                  })
                );
              })(t, n, o, s, R, e.type)
                .then(function (t) {
                  a.Z.success({
                    message: Oe[r].successMsg,
                    description: (0, v.jsxs)("a", {
                      target: "_blank",
                      href: "https://app.box.com/file/".concat(
                        t.data.entries[0].id
                      ),
                      children: ["Click to see it in your ", Oe[r].displayName],
                    }),
                  }),
                    e.onCancel(),
                    ht("box");
                })
                .catch(function (e) {
                  if (e.response.data && e.response.data.message)
                    var t = e.response.data.message;
                  else t = e.response.statusText;
                  i.ZP.error(t), D(!1), R(0);
                });
            },
            re = function (t) {
              return e.permissions["allow".concat(w(t))];
            },
            ae = M()("upload-progress", { active: O }),
            ie = M()("drive-wrapper", { active: !O }),
            oe = "video" === e.type ? "video" : "image";
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)("div", {
                className: "drive-panel",
                children: [
                  (0, v.jsx)("div", {
                    className: "title",
                    children:
                      null === n
                        ? m
                          ? "Choose your cloud storage"
                          : ""
                        : (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)("div", {
                              className: "icon ".concat(n.service),
                            }),
                            "Save to ",
                            s.displayName,
                          ],
                        }),
                  }),
                  (0, v.jsx)("div", {
                    className: ae,
                    children: G
                      ? (0, v.jsxs)("div", {
                        className: "sharable-link-area",
                        children: [
                          (0, v.jsx)("div", {
                            className: "label",
                            children: "Shareable Link",
                          }),
                          (0, v.jsx)(Pn.Z, {
                            value: W,
                            style: { width: "320px" },
                            size: "large",
                          }),
                          (0, v.jsx)(tt.Z, {
                            type: "primary",
                            size: "large",
                            onClick: function () {
                              S(W), i.ZP.success("Copied!");
                            },
                            children: "Copy",
                          }),
                        ],
                      })
                      : (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)(In.Z, {
                            type: "circle",
                            status: "active",
                            percent: Z,
                          }),
                          (0, v.jsx)("div", {
                            className: "upload-tip",
                            children:
                              Z < 100
                                ? "Uploading ".concat(oe, "...")
                                : q
                                  ? "Creating shareable link..."
                                  : Oe[r].actionTypeStr + "...",
                          }),
                        ],
                      }),
                  }),
                  t.length && n
                    ? (0, v.jsx)("div", {
                      className: ie,
                      children: (0, v.jsx)("div", {
                        className: "container",
                        children: (0, v.jsxs)(jt.Z, {
                          onFinish: function (t) {
                            var r;
                            D(!0),
                              ((r = n.id),
                                ot({
                                  method: "GET",
                                  url: "/account/token",
                                  params: { accountID: r },
                                }))
                                .then(function (n) {
                                  var r,
                                    a,
                                    i = n.token;
                                  if (e.itemUrl)
                                    ((r = e.itemUrl),
                                      (a = function (e) {
                                        R(Math.round(e / 2));
                                      }),
                                      g()({
                                        method: "GET",
                                        url: r,
                                        responseType: "blob",
                                        onDownloadProgress: function (e) {
                                          var t = Math.round(
                                            (100 * e.loaded) / e.total
                                          );
                                          a && a(t);
                                        },
                                      })).then(function (e) {
                                        Q(e.data, "image/png", t, i);
                                      });
                                  else {
                                    if (e.imageBlob)
                                      var o = e.contentType,
                                        s = e.imageBlob;
                                    else
                                      (s = y(e.imageUrl.split(",")[1])),
                                        (o = e.imageUrl
                                          .split(",")[0]
                                          .split(":")[1]
                                          .split(";")[0]);
                                    Q(s, o, t, i);
                                  }
                                })
                                .catch(function (e) {
                                  i.ZP.error("Something went wrong!"), D(!1);
                                });
                          },
                          children: [
                            (0, v.jsx)("div", {
                              className: "account-select",
                            }),
                            (0, v.jsx)("div", {
                              className: "label",
                              children: "Name",
                            }),
                            (0, v.jsx)(jt.Z.Item, {
                              name: "name",
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input a name",
                                },
                              ],
                              initialValue: e.tabTitle,
                              children: (0, v.jsx)(Pn.Z, {}),
                            }),
                            (0, v.jsx)("div", {
                              className: "label",
                              children: s.targetName,
                            }),
                            (0, v.jsx)(jt.Z.Item, {
                              name: "folder",
                              rules: [
                                { required: !0, message: "choose a folder" },
                              ],
                              initialValue: "-1",
                              children: (0, v.jsxs)(yt.Z, {
                                showSearch: !0,
                                placeholder: s.placeHolder,
                                loading: I,
                                onSearch: rr()(function (e) {
                                  X(e);
                                }, 800),
                                filterOption: !1,
                                children: [
                                  (0, v.jsxs)(ca, {
                                    value: "-1",
                                    children: [
                                      (0, v.jsx)(oa.Z, {
                                        className: "folder-option ".concat(
                                          n.service
                                        ),
                                      }),
                                      "/",
                                    ],
                                  }),
                                  j.map(function (e) {
                                    return (0,
                                      v.jsxs)(ca, { value: e.id, children: [(0, v.jsx)(oa.Z, { className: "folder-option ".concat(n.service) }), "dropbox" === n.service ? e.info.path || e.info.path_lower : e.name] }, e.id);
                                  }),
                                ],
                              }),
                            }),
                            (0, v.jsx)("div", {
                              className: "tip",
                              children:
                                "googleDrive" === n.service
                                  ? "Only root folder and Awesome Screenshot folder are available for the moment."
                                  : "Only 10 recent folders are listed. Type and search for other folders.",
                            }),
                            "googleDrive" === n.service &&
                            (0, v.jsx)(jt.Z.Item, {
                              name: "googleDriveSharable",
                              valuePropName: "checked",
                              initialValue:
                                "true" ===
                                localStorage["is-google-drive-share"],
                              children: (0, v.jsx)(d.Z, {
                                children:
                                  "Get shareable link (Anyone with the link can view)",
                              }),
                            }),
                            (0, v.jsx)(jt.Z.Item, {
                              children: (0, v.jsx)(tt.Z, {
                                type: "primary",
                                className: "upload-btn",
                                size: "large",
                                block: !0,
                                htmlType: "submit",
                                children: "Upload",
                              }),
                            }),
                          ],
                        }),
                      }),
                    })
                    : (0, v.jsx)(v.Fragment, {
                      children: m
                        ? (0, v.jsx)("div", {
                          className: "service-container",
                          children: (0, v.jsx)("div", {
                            className: "account-container",
                            children: Ze.map(function (e) {
                              var t = M()("account-item", e.name, {
                                pro: !re(e.name),
                              });
                              return (0, v.jsx)(
                                "div",
                                {
                                  className: t,
                                  "data-des": e.name,
                                  onClick: function () {
                                    return (function (e) {
                                      re(e) ? (p(e), b(!1)) : (z(e), _(!0));
                                    })(e.name);
                                  },
                                  children: (0, v.jsx)("b", {}),
                                },
                                e.name
                              );
                            }),
                          }),
                        })
                        : (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)("div", {
                              className: "top",
                              children: (0, v.jsxs)("div", {
                                className: "back-btn",
                                onClick: function () {
                                  b(!0);
                                },
                                children: [
                                  (0, v.jsx)(he.Z, {}),
                                  "Choose another cloud storage",
                                ],
                              }),
                            }),
                            (0, v.jsx)("div", {
                              className: "connect-panel",
                              children: (0, v.jsxs)("div", {
                                className: "box",
                                children: [
                                  (0, v.jsxs)("div", {
                                    className: "main-box",
                                    children: [
                                      (0, v.jsx)("div", {
                                        className: "pic",
                                        children: (0, v.jsx)("div", {
                                          className: "logo ".concat(h),
                                        }),
                                      }),
                                      (0, v.jsxs)("div", {
                                        className: "content",
                                        children: [
                                          (0, v.jsx)("div", {
                                            className: "logo ".concat(h),
                                          }),
                                          (0, v.jsxs)("div", {
                                            className: "title",
                                            children: [
                                              "Integrate ",
                                              Oe[h].displayName,
                                            ],
                                          }),
                                          (0, v.jsx)("div", {
                                            className: "sub-title",
                                            children: Oe[h].panelSubTitle,
                                          }),
                                          (0, v.jsx)("ul", {
                                            children: Oe[
                                              h
                                            ].featureLists.map(function (
                                              e,
                                              t
                                            ) {
                                              return (0, v.jsx)(
                                                "li",
                                                { children: e },
                                                t
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(tt.Z, {
                                    type: "primary",
                                    size: "large",
                                    onClick: function () {
                                      lt(h).then(function (e) {
                                        var t =
                                          "width=800,height=700,top=" +
                                          (window.screen.availHeight -
                                            30 -
                                            700) /
                                          2 +
                                          ",left=" +
                                          (window.screen.availWidth -
                                            10 -
                                            800) /
                                          2;
                                        window.open(e.URI, "", t);
                                      });
                                    },
                                    children: [
                                      "Connect with??",
                                      Oe[h].displayName,
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    }),
                ],
              }),
              (0, v.jsx)(Ue.Z, {
                visible: U,
                onCancel: function () {
                  return _(!1);
                },
                type: B,
              }),
            ],
          });
        };
        function ua(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function ha(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ua(Object(n), !0).forEach(function (t) {
                pa(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : ua(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function pa(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function fa(e) {
          return (0, v.jsx)(
            r.Z,
            ha(
              ha({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                wrapClassName: "des-modal",
                destroyOnClose: !0,
                centered: !0,
                closeIcon: (0, v.jsx)(rt.Tw, { style: { fontSize: "12px" } }),
                children: (0, v.jsx)(da, ha({}, e)),
              }
            )
          );
        }
        function ma(e) {
          var t = e.accounts;
          return (0, v.jsx)("div", {
            className: "render-drive-accounts",
            children:
              t && t.length
                ? (0, v.jsx)("div", {
                  className: "save-to-drive",
                  children: t.map(function (t) {
                    return (0,
                      v.jsxs)("div", { className: "save-item ".concat(t.service), onClick: e.handleDriveItemClick.bind(null, t), children: [(0, v.jsx)("div", { className: "icon" }), (0, v.jsx)("span", { children: (0, v.jsx)("span", { className: "user-email", title: t.userInfo.email, children: t.userInfo.email }) })] }, t.id);
                  }),
                })
                : (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(tt.Z, {
                      type: "primary",
                      className: "connect-btn",
                      block: !0,
                      onClick: e.handleAddDriveClick,
                      children: "Connect with cloud storage",
                    }),
                    (0, v.jsxs)("div", {
                      className: "support-s",
                      children: [
                        (0, v.jsx)("div", { children: "Support:" }),
                        (0, v.jsx)("div", {
                          className: "s-container",
                          children: Ze.map(function (e) {
                            return (0,
                              v.jsx)(u.Z, { title: e.displayName, children: (0, v.jsx)("div", { className: "s-item ".concat(e.name) }) }, e.name);
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          });
        }
        function ga(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function va(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ga(Object(n), !0).forEach(function (t) {
                ya(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : ga(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function ya(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const ba = function (e) {
          var t, n;
          return (0, v.jsx)(
            r.Z,
            va(
              va({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                wrapClassName: "sign-in",
                destroyOnClose: !0,
                centered: !0,
                children: (0, v.jsxs)("div", {
                  className: "signin-alert-modal",
                  children: [
                    (0, v.jsx)("div", {
                      className: "tip",
                      children:
                        ((n = e.type),
                          "aws" === n
                            ? ((t = "ext_loc_upload_image"),
                              "You need to sign in to an Awesome Screenshot account in order to upload images.")
                            : "drive" === n
                              ? ((t = "ext_loc_drive"),
                                "You need to sign in to an Awesome Screenshot account in order to connect with cloud services.")
                              : "des" === n
                                ? ((t = "ext_loc_destination"),
                                  "You need to sign in to an Awesome Screenshot account in order to connect with other services.")
                                : "uploadVideo" === n
                                  ? ((t = "ext_loc_upload_video"),
                                    "You need to sign in to an Awesome Screenshot account in order to upload videos.")
                                  : ""),
                    }),
                    (0, v.jsx)(tt.Z, {
                      type: "primary",
                      size: "large",
                      block: !0,
                      onClick: function () {
                        var e = "https://www.awesomescreenshot.com/signin";
                        t && (e += "?from=" + t), window.open(e);
                      },
                      children: "Sign In",
                    }),
                  ],
                }),
              }
            )
          );
        };
        function xa(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function ja(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? xa(Object(n), !0).forEach(function (t) {
                wa(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : xa(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function wa(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const Sa = function (e) {
          var t = function () {
            e.googleSigin && e.googleSigin();
          };
          return (0, v.jsx)(
            r.Z,
            ja(
              ja({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                width: 624,
                wrapClassName: "feature-alert",
                closeIcon: (0, v.jsx)(rt.Tw, {}),
                destroyOnClose: !0,
                centered: !0,
                children: (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, v.jsxs)("div", {
                          className: "tips-field",
                          children: [
                            (0, v.jsx)("div", {
                              className: "logo",
                              children: "NEW!",
                            }),
                            (0, v.jsxs)("div", {
                              className: "title",
                              children: [
                                "Auto backup with ",
                                (0, v.jsx)("span", { children: "source URL" }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "tip",
                              children: [
                                "Sign in to try out auto backup your screenshot to the cloud with the source URL!",
                                (0, v.jsx)("br", {}),
                                " Like ",
                                (0, v.jsx)("span", {
                                  children: "bookmark+screenshot!",
                                }),
                                " ????",
                              ],
                            }),
                          ],
                        }),
                        (0, v.jsx)("div", { className: "guide-img" }),
                      ],
                    }),
                    (0, v.jsxs)("div", {
                      className: "google-btn",
                      onClick: t,
                      children: [
                        (0, v.jsx)("div", {
                          className: "icon-field",
                          children: (0, v.jsx)(rt.Kv, { className: "icon" }),
                        }),
                        (0, v.jsx)("div", {
                          className: "btn-text",
                          children: "Sign in with Google",
                        }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        };
        n(15368);
        var ka = n(14277),
          Ca = (n(50808), n(59189));
        const Ia = function (e) {
          var t = e.size;
          return (0, v.jsx)("div", {
            className: "container-loading ".concat(t),
            children: (0, v.jsx)(Nn.Z, {}),
          });
        };
        function Na(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Pa(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Na(Object(n), !0).forEach(function (t) {
                Ta(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Na(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Ta(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Oa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Da(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Da(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Da(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Aa = Ca.Z.DirectoryTree;
        const Za = function (e) {
          var t = e.isfolderLoading,
            n = e.newFolder,
            a = e.moveItemTo,
            s = e.foldersTreeData,
            l = e.isWorkspaceLoading,
            c = e.workspaceIDs,
            u = e.workspacesIdHash,
            h = e.onCreateAction,
            p = e.isCreatingFolder,
            f = e.isMovingItem,
            m = e.savedPlace,
            g = e.onlySetting,
            y = Oa((0, o.useState)("personal"), 2),
            b = y[0],
            x = y[1],
            j = Oa((0, o.useState)(null), 2),
            w = j[0],
            S = j[1],
            k = Oa((0, o.useState)(null), 2),
            C = k[0],
            I = k[1],
            N = Oa((0, o.useState)(null), 2),
            P = N[0],
            T = N[1],
            O = Oa((0, o.useState)(""), 2),
            D = O[0],
            A = O[1],
            Z = Oa((0, o.useState)("0"), 2),
            R = Z[0],
            E = Z[1],
            U = Oa((0, o.useState)("folder"), 2),
            _ = U[0],
            F = U[1],
            B = Oa((0, o.useState)(null), 2),
            z = B[0],
            L = B[1],
            W = Oa(
              (0, o.useState)("true" === localStorage["auto-save-path"]),
              2
            ),
            H = W[0],
            V = W[1],
            G = Oa((0, o.useState)(!1), 2),
            Y = G[0],
            K = G[1],
            q = Oa((0, o.useState)(!1), 2),
            $ = q[0],
            J = q[1],
            X = Oa((0, o.useState)(!0), 2),
            Q = X[0],
            ee = X[1],
            te = (0, o.useRef)(),
            ne = (0, o.useRef)();
          (0, o.useEffect)(
            function () {
              Y && ne.current.focus(), $ && te.current && te.current.focus();
            },
            [Y, $]
          ),
            (0, o.useEffect)(
              function () {
                m && !g && re(m);
              },
              [m, u]
            ),
            (0, o.useEffect)(
              function () {
                e.visible ? !g && m && re(m) : (J(!1), K(!1), L(null));
              },
              [e.visible]
            ),
            (0, o.useEffect)(
              function () {
                if (g) {
                  var e =
                    void 0 === localStorage.defaultSavePlace
                      ? "folder-.-0-.-My Items"
                      : localStorage.defaultSavePlace;
                  re(e);
                }
              },
              [g]
            ),
            (0, o.useEffect)(
              function () {
                p ||
                  (K(!1),
                    n &&
                    (L({ title: n.title, folderID: n.folderID }),
                      S({ title: n.title, folderID: n.folderID }))),
                  p || "personal" === b || (C && I(u[C.id]), J(!1));
              },
              [p]
            ),
            (0, o.useEffect)(function () {
              return function () {
                J(!1), K(!1);
              };
            }, []),
            (0, o.useEffect)(function () {
              return function () { };
            }, []);
          var re = function (e) {
            var t = e.split("-.-")[0];
            F(t);
            var n = e.split("-.-")[1];
            if ((E(n), "folder" !== t)) {
              var r = e.split("-.-")[2];
              u[r] && (I(u[r]), x(u[r].name));
            } else S({ title: e.split("-.-")[2], folderID: n });
          },
            ae = "",
            ie = "",
            oe = function e(t, n, r) {
              for (var a = 0; a < r.length; a++)
                r[a].folderID === t
                  ? ((ae = r[a].key), (ie = n))
                  : r[a].children && e(t, r[a].key, r[a].children);
            },
            se = function () {
              var e = z ? z.folderID : R;
              return (
                oe(e, "0", s),
                "0" === ie
                  ? { key: ae, parentKey: "" }
                  : { key: ae, parentKey: ie }
              );
            },
            le = function (e, t) {
              S({ title: t.node.title, folderID: t.node.folderID }), L(null);
            };
          function ce(e) {
            "personal" !== e ? (I(u[e]), x(u[e].name)) : x(e);
          }
          var de = function () {
            e.onCancel && e.onCancel();
          };
          function ue(e) {
            V(e.target.checked),
              (localStorage["auto-save-path"] = e.target.checked);
          }
          var he,
            pe = function () {
              D.length > 60
                ? i.ZP.error("The folder name is too long!")
                : h && h("folder", D, (w && w.folderID) || "0");
            },
            fe = function () {
              if (a) {
                var e = "";
                "personal" === b
                  ? ((e =
                    "folder-.-" +
                    ((w && w.folderID) || "0") +
                    "-.-" +
                    (w && w.title) || 0),
                    g
                      ? a("setdefault", e)
                      : a("folder", e, (w && w.folderID) || "0"))
                  : ((e =
                    "channel-.-" +
                    P.id +
                    "-.-" +
                    P.workspaceID +
                    "-.-" +
                    P.name),
                    g
                      ? a("setdefault", e)
                      : a("channel", e, P.id, P.workspaceID));
              }
            },
            me = function (e) {
              A(e.target.value);
            },
            ge = function (e) {
              13 === e.keyCode && pe();
            },
            ve = function () {
              K(!0);
            },
            ye = function () {
              J(!0);
            },
            be = function () {
              K(!1);
            },
            xe = function () {
              J(!1);
            },
            je =
              C &&
              C.channels &&
              C.channels.filter(function (e) {
                return !0 === e.isMember;
              }),
            we = function () {
              return (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)("div", {
                    className: "field-tip",
                    children: "Channels",
                  }),
                  (0, v.jsx)("div", {
                    className: "folder-select",
                    children: l
                      ? (0, v.jsx)(Ia, {})
                      : (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)("div", {
                            className: "select-container",
                            children:
                              je && je.length > 0
                                ? je.map(function (e) {
                                  var t = e,
                                    n = M()("channel-item", {
                                      selected: P && P.id === t.id,
                                    });
                                  return (0, v.jsxs)(
                                    "div",
                                    {
                                      className: n,
                                      onClick: function () {
                                        !(function (e) {
                                          T(e);
                                        })(e);
                                      },
                                      children: [
                                        (0, v.jsx)(rt.MC, {}),
                                        t.name,
                                      ],
                                    },
                                    e.id
                                  );
                                })
                                : (0, v.jsx)(ka.Z, {
                                  image: ka.Z.PRESENTED_IMAGE_SIMPLE,
                                  description: "No channels",
                                }),
                          }),
                          (0, v.jsxs)("div", {
                            className: "folder-btn-area",
                            onClick: ye,
                            children: [
                              (0, v.jsx)(rt.dt, {}),
                              " Create a new channel",
                            ],
                          }),
                        ],
                      }),
                  }),
                ],
              });
            },
            Se = function () {
              return (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)("div", {
                    className: "field-tip",
                    children: "Folders",
                  }),
                  (0, v.jsx)("div", {
                    className: "folder-select",
                    children: t
                      ? (0, v.jsx)(Ia, {})
                      : (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)("div", {
                            className: "select-container",
                            children: (0, v.jsx)(Aa, {
                              expandAction: "doubleClick",
                              treeData: s,
                              height: 240,
                              onSelect: le,
                              defaultSelectedKeys: [se().key],
                              defaultExpandedKeys: [se().parentKey],
                            }),
                          }),
                          (0, v.jsxs)("div", {
                            className: "folder-btn-area",
                            onClick: ve,
                            children: [
                              (0, v.jsx)(rt.dt, {}),
                              " Create a new folder",
                              w && "0" !== w.folderID
                                ? (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    " ",
                                    "in",
                                    " ",
                                    (0, v.jsx)("span", {
                                      className: "par-folder",
                                      children: w.title,
                                    }),
                                  ],
                                })
                                : (0, v.jsx)(v.Fragment, {}),
                            ],
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          function ke(e) {
            var t = e.channelName,
              n = e.channelDesc;
            h && C && h("channel", t, C.id, n);
          }
          function Ce(e, t) {
            t.channelName && t.channelName.length ? Q && ee(!1) : Q || ee(!0);
          }
          return (0, v.jsx)(
            r.Z,
            Pa(
              Pa({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                destroyOnClose: !0,
                width: 430,
                wrapClassName: "move-image",
                closeIcon: (0, v.jsx)(rt.Tw, { className: "close" }),
                centered: !0,
                children: Y
                  ? (0, v.jsxs)("div", {
                    className: "move-pannel",
                    children: [
                      (0, v.jsx)("div", {
                        className: "title",
                        children: "New folder",
                      }),
                      (0, v.jsx)("div", {
                        className: "destination-select",
                        children: (0, v.jsxs)("div", {
                          className: "select-label",
                          children: [
                            "Create a new folder",
                            " ",
                            w && "0" !== w.folderID
                              ? (0, v.jsxs)(v.Fragment, {
                                children: [
                                  " ",
                                  "in ",
                                  (0, v.jsx)("span", { children: w.title }),
                                ],
                              })
                              : (0, v.jsx)(v.Fragment, {}),
                          ],
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "content",
                        children: (0, v.jsx)(Pn.Z, {
                          size: "large",
                          placeholder: "Enter a folder name",
                          onChange: me,
                          onKeyDown: ge,
                          ref: ne,
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "bottom-area",
                        children: (0, v.jsxs)("div", {
                          className: "btn-area",
                          children: [
                            (0, v.jsx)(tt.Z, {
                              onClick: be,
                              className: "btn cancel",
                              children: "Cancel",
                            }),
                            (0, v.jsx)(tt.Z, {
                              type: "primary",
                              disabled: !D.trim(),
                              loading: p,
                              onClick: pe,
                              className: "btn done",
                              children: "Create",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                  : $
                    ? (0, v.jsxs)("div", {
                      className: "move-pannel",
                      children: [
                        (0, v.jsx)("div", {
                          className: "title",
                          children: "Create a Channel",
                        }),
                        (0, v.jsx)("div", {
                          className: "destination-select",
                          children: (0, v.jsx)("div", {
                            className: "select-label",
                            children:
                              "Channels are best when organized around a project or a topic",
                          }),
                        }),
                        (0, v.jsxs)(jt.Z, {
                          onFinish: ke,
                          onValuesChange: Ce,
                          children: [
                            (0, v.jsxs)("div", {
                              className: "content",
                              children: [
                                (0, v.jsx)("div", {
                                  className: "label",
                                  children: "Name",
                                }),
                                (0, v.jsx)(jt.Z.Item, {
                                  name: "channelName",
                                  children: (0, v.jsx)(Pn.Z, {
                                    size: "large",
                                    autoComplete: "off",
                                    ref: te,
                                    placeholder:
                                      "e.g. Product Research/ New Year Planning",
                                  }),
                                }),
                                (0, v.jsx)("div", {
                                  className: "input-tip",
                                  children:
                                    "What do your team plan to work on?",
                                }),
                                (0, v.jsxs)("div", {
                                  className: "label",
                                  children: [
                                    "Description ",
                                    (0, v.jsx)("span", {
                                      children: "(optional)",
                                    }),
                                  ],
                                }),
                                (0, v.jsx)(jt.Z.Item, {
                                  name: "channelDesc",
                                  children: (0, v.jsx)(Pn.Z.TextArea, {
                                    autoSize: { minRows: 4 },
                                  }),
                                }),
                                (0, v.jsx)("div", {
                                  className: "input-tip",
                                  children: "What???s this channel about?",
                                }),
                              ],
                            }),
                            (0, v.jsx)("div", {
                              className: "bottom-area",
                              children: (0, v.jsxs)("div", {
                                className: "btn-area",
                                children: [
                                  (0, v.jsx)(tt.Z, {
                                    onClick: xe,
                                    className: "btn cancel",
                                    children: "Cancel",
                                  }),
                                  (0, v.jsx)(tt.Z, {
                                    type: "primary",
                                    loading: p,
                                    htmlType: "submit",
                                    className: "btn done",
                                    disabled: Q,
                                    children: "Create",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                    : (0, v.jsxs)("div", {
                      className: "move-pannel",
                      children: [
                        (0, v.jsxs)("div", {
                          className: "title",
                          children: [
                            " ",
                            g ? "Set default save location" : "Move to",
                          ],
                        }),
                        (0, v.jsxs)("div", {
                          className: "destination-select",
                          children: [
                            (0, v.jsx)("div", {
                              className: "select-label",
                              children: "Personal & Workspaces",
                            }),
                            (0, v.jsxs)(yt.Z, {
                              style: { width: "100%", textAlign: "left" },
                              size: "large",
                              value: b,
                              className: "select-destination",
                              onChange: ce,
                              children: [
                                "channel" !== _ || g
                                  ? (0, v.jsx)(yt.Z.Option, {
                                    value: "personal",
                                    children: "Personal",
                                  })
                                  : (0, v.jsx)(v.Fragment, {}),
                                (0, v.jsx)(v.Fragment, {
                                  children:
                                    c &&
                                    c.length > 0 &&
                                    c.map(function (e) {
                                      return (0,
                                        v.jsx)(yt.Z.Option, { value: e, children: u[e].name }, e);
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, v.jsx)("div", {
                          className: "content",
                          children: "personal" == b ? Se() : we(),
                        }),
                        (0, v.jsxs)("div", {
                          className: "bottom-area",
                          children: [
                            g
                              ? (0, v.jsx)(v.Fragment, {})
                              : (0, v.jsx)(d.Z, {
                                checked: H,
                                className: "check-default",
                                onChange: ue,
                                children: "Set as the default save location",
                              }),
                            (0, v.jsxs)("div", {
                              className: "btn-area",
                              children: [
                                (0, v.jsx)(tt.Z, {
                                  onClick: de,
                                  className: "btn cancel",
                                  children: "Cancel",
                                }),
                                (0, v.jsx)(tt.Z, {
                                  type: "primary",
                                  className: "btn done",
                                  disabled:
                                    ((he = !0),
                                      !(
                                        g ||
                                        ("personal" !== b
                                          ? "channel" !== _ ||
                                          (P && (he = he && R !== P.id))
                                          : "folder" === _ &&
                                          (w
                                            ? (he = he && R !== w.folderID)
                                            : void (he = !1)))
                                      )),
                                  loading: f,
                                  onClick: fe,
                                  children: "Done",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
              }
            )
          );
        };
        var Ra = n(45697),
          Ea = n.n(Ra);
        function Ua(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function _a(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Fa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ma(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ma(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ma(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function Ba(e) {
          var t = e.username ? e.username : "no name",
            n = Fa((0, o.useState)("loading"), 2),
            r = n[0],
            a = n[1],
            i = t ? t.split(" ") : [],
            s = "";
          i.forEach(function (e) {
            s += e.charAt(0).toUpperCase();
          }),
            (s = s.substring(0, 3));
          var l = e.size + "px",
            c =
              s.length > 1
                ? (function () {
                  var t = e.size / 2 - Math.max(2, s.length),
                    n = (e.size / 5) * 4,
                    r = document.createElement("span");
                  if (
                    ((r.style.visibility = "hidden"),
                      (r.style.opacity = "0"),
                      (r.style.position = "fixed"),
                      (r.innerText = s),
                      (r.style.fontWeight = 500),
                      (r.style.fontSize = t + "px"),
                      document.body.appendChild(r),
                      !(r.offsetWidth > n || r.offsetHeight > n))
                  )
                    return document.body.removeChild(r), t + "px";
                  for (var a = 5; a <= t; a++)
                    if (
                      ((r.style.fontSize = a + "px"),
                        !(r.offsetWidth < n && r.offsetHeight < n))
                    )
                      return document.body.removeChild(r), a - 1 + "px";
                })()
                : e.size / 2 - Math.max(2, s.length) + "px",
            d = "square" !== e.type,
            u = e.username ? e.username.length : 0;
          var h = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ua(Object(n), !0).forEach(function (t) {
                  _a(e, t, n[t]);
                })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                  : Ua(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {
              height: l,
              width: l,
              lineHeight: l,
              fontSize: c,
              borderRadius: d ? "50%" : "var(--as-border-radius)",
              display: e.block ? "block" : "inline-block",
              backgroundColor:
                e.avatarUrl && "success" === r ? "" : Ee[u % Ee.length],
            },
            e.style
          );
          return (0, v.jsxs)("div", {
            className: "avatar",
            style: h,
            children: [
              e.plan &&
              "Free" !== e.plan &&
              (0, v.jsx)("div", {
                className: "plan-badge ".concat(e.plan),
                children: (0, v.jsx)(rt.CE, {}),
              }),
              e.avatarUrl && 0 !== e.avatarUrl.length
                ? (0, v.jsx)(v.Fragment, {
                  children:
                    "failed" !== r
                      ? (0, v.jsx)("img", {
                        style: { height: l, width: l },
                        src: e.avatarUrl,
                        onLoad: function () {
                          a("success");
                        },
                        onError: function () {
                          a("failed");
                        },
                      })
                      : (0, v.jsx)(v.Fragment, { children: s }),
                })
                : (0, v.jsx)(v.Fragment, { children: s }),
            ],
          });
        }
        Ba.propTypes = {
          username: Ea().string.isRequired,
          size: Ea().oneOfType([Ea().string, Ea().number]).isRequired,
          type: Ea().string,
          avatarUrl: Ea().string,
          style: Ea().object,
          block: Ea().bool,
          plan: Ea().oneOf(["professional", "basic"]),
        };
        const za = (0, o.memo)(Ba);
        var La = n(99165);
        function Wa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ha(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ha(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ha(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Va = chrome.extension.getBackgroundPage();
        function Ga(e) {
          var t = e.user,
            n = e.step,
            r = e.updateStatus,
            a = e.isAutoBackup,
            s = e.contentType,
            l = e.imageBlob,
            c = e.imageUrl,
            d = e.tabTitle,
            h = e.tabUrl,
            p = e.saveAction,
            f = e.updateSignStatus,
            m = e.savePlace,
            g = Wa((0, o.useState)(""), 2),
            y = g[0],
            b = g[1],
            x = Wa((0, o.useState)(1), 2),
            j = x[0],
            w = x[1],
            k = Wa((0, o.useState)(0), 2),
            C = k[0],
            I = k[1],
            N = Wa((0, o.useState)(""), 2),
            P = N[0],
            T = N[1],
            O = Wa((0, o.useState)("My items"), 2),
            D = O[0],
            Z = O[1],
            R = Wa((0, o.useState)("folder"), 2),
            E = R[0],
            U = R[1],
            _ = Wa((0, o.useState)(""), 2),
            F = _[0],
            M = _[1],
            B = Wa((0, o.useState)(!1), 2),
            z = B[0],
            L = B[1],
            W = Wa((0, o.useState)(!1), 2),
            H = W[0],
            V = W[1],
            G = Wa((0, o.useState)(0), 2),
            Y = G[0],
            K = G[1];
          (0, o.useEffect)(function () {
            te(function (e) {
              e && K(e.id);
            });
          }, []),
            (0, o.useEffect)(
              function () {
                m && J(m);
              },
              [m]
            ),
            (0, o.useEffect)(
              function () {
                if ("save" === n)
                  if (a && t && t.username) {
                    var e = localStorage.currentuploadtab,
                      r = localStorage.currentimageid;
                    Y > 0 && Y === parseInt(e) && !l && ((!l && r) || C > 0)
                      ? (I(parseInt(r)),
                        b("uploaded"),
                        J(localStorage.lastSavePath))
                      : Y > 0 && q(!0);
                  } else t && t.username ? a || b("") : (I(0), b(""));
              },
              [Y, n, t, a]
            ),
            (0, o.useEffect)(
              function () {
                F && a && ie();
              },
              [F]
            );
          var q = function (e) {
            chrome.storage.local.get("userinfo", function (n) {
              (n && n.userinfo.allowUploadImage) ||
                parseInt(t.premiumLevel) >= 1
                ? ee(e)
                : (b(""),
                  r && r("", !1),
                  L(!1),
                  n &&
                  !n.userinfo.allowUploadImage &&
                  (p("upgrade"), Va.refreshUserInfo()));
            });
          },
            $ = function () {
              var e;
              t && t.username
                ? C > 0
                  ? (L(!0),
                    ((e = C),
                      ot({
                        method: "GET",
                        url: "/image/get_share_link",
                        params: { id: e },
                      })).then(function (e) {
                        e &&
                          ut(e.shareURI)
                            .then(function (e) {
                              L(!1), M(e.data);
                            })
                            .catch(function () {
                              L(!1), M(e.shareURI);
                            });
                      }))
                  : (L(!0), q(!1))
                : f && f();
            },
            J = function (e) {
              if (e && void 0 !== e) {
                var t = e.split("-.-")[0];
                U(t), Z("folder" === t ? e.split("-.-")[2] : e.split("-.-")[3]);
              }
            },
            X = function (e) {
              w(e);
            },
            Q = function () {
              q(!0);
            },
            ee = function (e) {
              (e && b("uploading"), r) && e && (!0, r("uploading", true));
              var t = function (t) {
                var n =
                  void 0 === localStorage.defaultSavePlace
                    ? "folder-.-0-.-My Items"
                    : localStorage.defaultSavePlace,
                  a = n.split("-.-")[0],
                  i = null,
                  o = null,
                  s = "0";
                "folder" === a
                  ? (s = n.split("-.-")[1])
                  : ((i = n.split("-.-")[2]), (o = n.split("-.-")[1])),
                  J(n),
                  (function (e, t, n, r, a, i, o, s, l) {
                    var c = new FormData();
                    return (
                      c.append("file", t),
                      c.append("title", n),
                      c.append("folderID", e),
                      c.append("share", !i),
                      c.append("actionType", "ext"),
                      c.append("version", r),
                      i && c.append("from", "ext_backup"),
                      o && c.append("sourceURL", o),
                      s && c.append("workspaceID", s),
                      l && c.append("channelID", l),
                      c.append(
                        "client",
                        /Edg/.test(navigator.userAgent)
                          ? "Edge extension"
                          : "chrome extension"
                      ),
                      ot({
                        method: "POST",
                        url: "/image/upload",
                        data: c,
                        onUploadProgress: function (e) {
                          var t = Math.round((100 * e.loaded) / e.total);
                          a(t);
                        },
                      })
                    );
                  })(
                    s,
                    t,
                    d,
                    chrome.extension.getBackgroundPage().currentversion,
                    X,
                    e,
                    h,
                    i,
                    o
                  )
                    .then(function (t) {
                      if (
                        (Va.refreshUserInfo(),
                          t &&
                          Y > 0 &&
                          ((localStorage.currentuploadtab = Y),
                            (localStorage.currentimageid = i
                              ? t.image.itemID
                              : t.image.id),
                            (localStorage.lastSavePath = n)),
                          t && e)
                      )
                        i
                          ? (I(t.image.itemID), T(t.image.info.imageURI))
                          : (I(t.image.id), T(t.image.imageURI)),
                          b("uploaded"),
                          r && r("uploaded");
                      else if (t) {
                        C < 1 && (b(""), r && r(""));
                        var a = "";
                        i
                          ? (I(t.image.itemID),
                            T(t.image.info.imageURI),
                            (a = t.image.info.shareURI))
                          : (I(t.image.id),
                            T(t.image.imageURI),
                            (a = t.image.shareURI)),
                          ut(a)
                            .then(function (e) {
                              L(!1), M(e.data);
                            })
                            .catch(function () {
                              L(!1), M(a);
                            });
                      } else b("failed");
                    })
                    .catch(function (t) {
                      Va.refreshUserInfo(),
                        e || L(!1),
                        t && "Premium Plan Required!" === t.msg
                          ? (b(""), r && r("", !1), p && p("upgrade"))
                          : b("failed");
                    });
              };
              new File([l], d + ("image/png" === s ? ".png" : ".jpg"), {
                type: s,
              });
              l
                ? t(l)
                : A(c).then(function (e) {
                  t(e);
                });
            },
            te = function (e) {
              chrome.tabs.query(
                { active: !0, currentWindow: !0 },
                function (t) {
                  e(t[0]);
                }
              );
            },
            ne = function () {
              !a && t && t.username
                ? C > 1
                  ? (b("uploaded"), r && r("uploaded", !0))
                  : ot({ method: "GET", url: "/user/einfo" }).then(function (
                    e
                  ) {
                    e && e.permission.allowUploadImage
                      ? r && r("", !0)
                      : (b(""),
                        p && e ? p("upgrade") : i.ZP.error("Network error!"),
                        L(!1));
                  })
                : (r && r("", !0),
                  pt("ext_backup_google").then(function (e) {
                    var t = e.data.data.login_url;
                    window.open(t);
                  }));
            },
            re = function () {
              var e = localStorage.lastSavePath;
              if (e && void 0 !== e) {
                var t = "https://www.awesomescreenshot.com/";
                (t =
                  "folder" === e.split("-.-")[0]
                    ? t + "folder/" + e.split("-.-")[1]
                    : t +
                    "workspace/" +
                    e.split("-.-")[2] +
                    "/" +
                    e.split("-.-")[1]),
                  chrome.extension.getBackgroundPage().openNewTab(t);
              } else
                P
                  ? chrome.extension.getBackgroundPage().openNewTab(P)
                  : C > 0 &&
                  chrome.extension
                    .getBackgroundPage()
                    .openNewTab(
                      "https://www.awesomescreenshot.com/image/" + C
                    );
            },
            ae = function () {
              p && p("selectFolder", C),
                Va.googleEvent("click move btn", "image");
            },
            ie = function () {
              F &&
                (V(!0),
                  S(F),
                  setTimeout(function () {
                    V(!1);
                  }, 1600));
            },
            oe = function () {
              return F
                ? (0, v.jsx)("div", {
                  className: "aws-share-item",
                  children: (0, v.jsxs)("div", {
                    className: "input-area",
                    children: [
                      (0, v.jsx)("input", {
                        type: "text",
                        value: F,
                        readOnly: !0,
                      }),
                      (0, v.jsx)(u.Z, {
                        title: "copied!",
                        trigger: "click",
                        visible: H,
                        children: (0, v.jsx)("div", {
                          className: "aws-share-action-btn",
                          onClick: ie,
                          children: (0, v.jsx)(La.Z, { className: "icon" }),
                        }),
                      }),
                    ],
                  }),
                })
                : (0, v.jsx)(tt.Z, {
                  loading: z,
                  className: "save-aws-btn",
                  onClick: $,
                  block: !0,
                  children:
                    C > 1
                      ? "Generate & copy shareable link"
                      : "Upload to get shareable link",
                });
            };
          return "uploading" === y || "failed" === y
            ? (0, v.jsx)("div", {
              className: "upload-field",
              children:
                "uploading" === y
                  ? (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(In.Z, {
                        className: "progress",
                        strokeWidth: 10,
                        trailColor: "rgba(255, 255, 255, 0.05)",
                        strokeColor: "#6494F7",
                        type: "circle",
                        percent: j,
                        gapPosition: "left",
                        width: 50,
                      }),
                      (0, v.jsxs)("div", {
                        className: "upload-tip uploading",
                        children: [
                          "Saving to ",
                          (0, v.jsx)("span", { children: D }),
                          " ",
                        ],
                      }),
                    ],
                  })
                  : (0, v.jsxs)("div", {
                    className: "failed-field",
                    onClick: Q,
                    children: [
                      (0, v.jsx)(rt.u3, { className: "icon" }),
                      (0, v.jsx)("div", {
                        className: "upload-tip",
                        children:
                          "Failed to upload the picture. Click upload again.",
                      }),
                    ],
                  }),
            })
            : "uploaded" === y || C > 0
              ? (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)("div", {
                    className: "uploaded-tip",
                    children: "Currently in",
                  }),
                  (0, v.jsxs)("div", {
                    className: "uploaded-field",
                    children: [
                      (0, v.jsxs)("div", {
                        className: "tips",
                        onClick: re,
                        children: [
                          (0, v.jsx)("div", {
                            className: "icon-field",
                            children:
                              "folder" === E
                                ? (0, v.jsx)(rt.RO, {})
                                : (0, v.jsx)(rt.MC, {}),
                          }),
                          " ",
                          (0, v.jsx)("span", {
                            className: "place",
                            children: D,
                          }),
                        ],
                      }),
                      (0, v.jsx)("div", {
                        className: "action",
                        onClick: ae,
                        children: "Move",
                      }),
                    ],
                  }),
                  oe(),
                ],
              })
              : (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)("div", {
                    className: "aws-border",
                    children: (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsxs)("div", {
                          className: "aws-header",
                          children: [
                            (0, v.jsx)("div", {
                              className: "icon-field",
                              children: (0, v.jsx)(rt.IB, {
                                className: "icon",
                              }),
                            }),
                            (0, v.jsx)("span", {
                              children: "Auto backup with source URL",
                            }),
                          ],
                        }),
                        (0, v.jsx)("div", {
                          className: "aws-tips",
                          children:
                            (!a && t && t.username,
                              "Auto save the image to cloud with the source URL! Like bookmark + screenshot!"),
                        }),
                        (0, v.jsx)("div", {
                          className: "google-btn",
                          onClick: ne,
                          children:
                            t && t.username
                              ? (0, v.jsx)("span", {
                                children: "Enable Auto Save to Cloud",
                              })
                              : (0, v.jsxs)(v.Fragment, {
                                children: [
                                  (0, v.jsx)(rt.Kv, { className: "icon" }),
                                  (0, v.jsx)("span", {
                                    children: "Sign in with Google",
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                  }),
                  oe(),
                ],
              });
        }
        function Ya(e) {
          return (
            (Ya =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            Ya(e)
          );
        }
        function Ka(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return qa(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return qa(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return qa(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function qa(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function $a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Ja(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? $a(Object(n), !0).forEach(function (t) {
                Xa(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : $a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Xa(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Qa(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function ei(e, t) {
          return (
            (ei = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            ei(e, t)
          );
        }
        function ti(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = ai(e);
            if (t) {
              var a = ai(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return ni(this, n);
          };
        }
        function ni(e, t) {
          if (t && ("object" === Ya(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return ri(e);
        }
        function ri(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function ai(e) {
          return (
            (ai = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            ai(e)
          );
        }
        var ii = [
          { name: "save", displayName: "Download" },
          { name: "copy", displayName: "Copy" },
          { name: "pdf", displayName: "PDF" },
          { name: "print", displayName: "Print" },
        ],
          oi = {},
          si = chrome.extension.getBackgroundPage(),
          li = function e(t, n) {
            t.forEach(function (t) {
              n[t.folderID] &&
                "0" !== t.folderID &&
                ((t.children = n[t.folderID].map(function (e, n) {
                  return {
                    title: e.name,
                    value: e.folderID + "-.-" + e.name,
                    key: t.key + "-" + n,
                    folderID: e.folderID,
                    icon: function (e) {
                      return e.expanded
                        ? (0, v.jsx)(rt.Hf, {})
                        : (0, v.jsx)(rt.RO, {});
                    },
                  };
                })),
                  e(t.children, n));
            });
          },
          ci = function (e) {
            var t = [],
              n = e;
            return (
              n[0] &&
              n[0].forEach(function (e, n) {
                t.push({
                  title: e.name,
                  value: e.folderID + "-.-" + e.name,
                  key: "" + (n + 1),
                  folderID: e.folderID,
                  icon: function (e) {
                    return e.expanded
                      ? (0, v.jsx)(rt.Hf, {})
                      : (0, v.jsx)(rt.RO, {});
                  },
                });
              }),
              t.unshift({
                title: "My Items",
                folderID: "0",
                key: "0",
                value: "0-.-My Items",
                icon: function (e) {
                  return e.expanded, (0, v.jsx)(rt.fK, {});
                },
              }),
              li(t, e),
              t
            );
          },
          di = !1,
          ui = !1,
          hi = "",
          pi = "",
          fi = function e(t, n, r) {
            for (var a = 0; a < r.length; a++) {
              if (r[a].folderID === t)
                return (di = !0), void (hi = "folder-.-" + r[a].value);
              r[a].children && e(t, r[a].key, r[a].children);
            }
          },
          mi = function () {
            chrome.storage.sync.get(["clickNo"], function (e) {
              e.clickNo
                ? chrome.storage.sync.set({ neverShow: !0 })
                : chrome.storage.sync.set({ clickNo: !0 });
            }),
              st().then(function (e) {
                e && ft("chromeFiveStarCancel");
              }),
              a.Z.destroy();
          },
          gi = function (e, t) {
            a.Z.open({
              key: "questionnaire",
              className: "questionnaire",
              placement: "bottomRight",
              duration: 0,
              style: { width: 418, marginLeft: -63, padding: "20px 30px" },
              message: e,
              description: t,
              onClose: mi,
            });
          },
          vi = function () {
            b(
              "https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews"
            ),
              chrome.storage.sync.set({ neverShow: !0 }),
              st().then(function (e) {
                e && ft("chromeFiveStarClick");
              }),
              a.Z.destroy();
          },
          yi = function () {
            b("/feedback.html"),
              chrome.storage.sync.set({
                captureCount: 0,
                clickNo: !1,
                neverShow: !1,
              }),
              st().then(function (e) {
                e && ft("chromeFiveStarFeedback");
              }),
              a.Z.destroy();
          },
          bi = function () {
            gi(
              (0, v.jsxs)("div", {
                className: "noti_title",
                children: [
                  (0, v.jsx)("img", { src: "images/star.png" }),
                  " User Satisfaction Survey",
                ],
              }),
              (0, v.jsxs)("div", {
                className: "noti_des",
                children: [
                  (0, v.jsx)("div", {
                    className: "content",
                    children:
                      "Your review means a lot to us. Would you mind taking a moment to rate the extension in the Web Store?",
                  }),
                  (0, v.jsx)(tt.Z, {
                    style: { width: "98px", height: "34px" },
                    type: "primary",
                    onClick: mi,
                    ghost: !0,
                    children: "No, thanks",
                  }),
                  (0, v.jsx)(tt.Z, {
                    style: {
                      width: "246px",
                      height: "34px",
                      marginLeft: "14px",
                    },
                    type: "primary",
                    onClick: vi,
                    children: "Sure, take me to the Web Store",
                  }),
                ],
              })
            );
          },
          xi = function () {
            gi(
              (0, v.jsxs)("div", {
                className: "noti_title",
                children: [
                  (0, v.jsx)("img", { src: "images/star.png" }),
                  " User Satisfaction Survey",
                ],
              }),
              (0, v.jsxs)("div", {
                className: "noti_des",
                children: [
                  (0, v.jsx)("div", {
                    className: "content",
                    children:
                      "Would you like to report any issues you're experiencing or give us some suggestions so that we can make the extension better for you?",
                  }),
                  (0, v.jsx)(tt.Z, {
                    style: { width: "98px" },
                    type: "primary",
                    onClick: mi,
                    ghost: !0,
                    children: "No, thanks",
                  }),
                  (0, v.jsx)(tt.Z, {
                    style: { width: "246px", marginLeft: "14px" },
                    type: "primary",
                    onClick: yi,
                    children: "Yes, take me to the feedback form",
                  }),
                ],
              })
            );
          };
        const ji = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && ei(e, t);
          })(s, e);
          var t,
            n,
            r,
            a = ti(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = a.call(this, e)).printIframe = (0, o.createRef)()),
              (t.copyDiv = (0, o.createRef)()),
              (t.img = (0, o.createRef)()),
              (t.state = {
                isShownSignin: !1,
                isShownSaveToAws: !1,
                imageId: 0,
                isShownWhatDes: !1,
                isShownDrive: !1,
                isShownUpgrade: !1,
                isShownComfig: !1,
                isShownFeatureAlert: !1,
                signInLoading: !1,
                uploadImagePercentage: 0,
                awsShareUrls: [],
                projects: [],
                folders: {},
                foldersTreeData: [],
                isfolderLoading: !1,
                isWorkspaceLoading: !1,
                isCreatingFolder: !1,
                newFolder: null,
                isMovingItem: !1,
                workspacesIds: [],
                workspacesIdHash: {},
                selectPlacesValue:
                  void 0 === localStorage.lastSavePath
                    ? "folder-.-0-.-My Items"
                    : localStorage.lastSavePath,
                autoSaveType: "folder",
                autoSavePlace: "My Items",
                popVisiable: !1,
                onlySetting: !1,
                destinations: [],
                accounts: [],
                isShownDes: !1,
                desCurrentPanel: "add",
                currentDes: null,
                driveService: "",
                currentDriveAccount: null,
                upgradeType: "",
                zoomImageIndex: "",
                haveUndate: !1,
                isShowed: !1,
                temImageBlob: null,
                isShowAds: !1,
                promotionUrl: "https://www.vidline.com/promotion-card.html",
                promotionHeight: 0,
                expandedMore: !1,
                uploadStatus: "",
                autoUpload:
                  void 0 !== localStorage.autoupload &&
                  "true" === localStorage.autoupload,
              }),
              (t.handleLocalSave = t.handleLocalSave.bind(ri(t))),
              (t.handleSaveToAws = t.handleSaveToAws.bind(ri(t))),
              (t.showModal = t.showModal.bind(ri(t))),
              (t.handleModalCancel = t.handleModalCancel.bind(ri(t))),
              (t.handleSignInFinish = t.handleSignInFinish.bind(ri(t))),
              (t.handleUploadFinish = t.handleUploadFinish.bind(ri(t))),
              (t.refreshUserData = t.refreshUserData.bind(ri(t))),
              (t.handleFolderCreated = t.handleFolderCreated.bind(ri(t))),
              (t.openDesModal = t.openDesModal.bind(ri(t))),
              (t.handleDesClick = t.handleDesClick.bind(ri(t))),
              (t.goToAddDes = t.goToAddDes.bind(ri(t))),
              (t.handleDesCreated = t.handleDesCreated.bind(ri(t))),
              (t.handleAccountConnected = t.handleAccountConnected.bind(ri(t))),
              (t.handleAddDriveClick = t.handleAddDriveClick.bind(ri(t))),
              (t.handleAddDesClick = t.handleAddDesClick.bind(ri(t))),
              (t.openDriveModal = t.openDriveModal.bind(ri(t))),
              (t.openSetting = t.openSetting.bind(ri(t))),
              (t.handleDriveAccountConnected =
                t.handleDriveAccountConnected.bind(ri(t))),
              (t.showUpgradeModal = t.showUpgradeModal.bind(ri(t))),
              (t.getPermissionByName = t.getPermissionByName.bind(ri(t))),
              (t.copyUrl = t.copyUrl.bind(ri(t))),
              (t.openFeedback = t.openFeedback.bind(ri(t))),
              (t.openOptionPage = t.openOptionPage.bind(ri(t))),
              (t.downloadMultiple = t.downloadMultiple.bind(ri(t))),
              (t.downloadMultiplePDF = t.downloadMultiplePDF.bind(ri(t))),
              (t.handleSignIn = t.handleSignIn.bind(ri(t))),
              (t.zoomImage = t.zoomImage.bind(ri(t))),
              (t.loadPromotionUrl = t.loadPromotionUrl.bind(ri(t))),
              (t.handleMoreAction = t.handleMoreAction.bind(ri(t))),
              (t.handleUploadStatus = t.handleUploadStatus.bind(ri(t))),
              (t.handleAutoUpload = t.handleAutoUpload.bind(ri(t))),
              (t.recordEvent = t.recordEvent.bind(ri(t))),
              (t.googleSigin = t.googleSigin.bind(ri(t))),
              (t.handleUploadAction = t.handleUploadAction.bind(ri(t))),
              (t.handleCreateFolderAction = t.handleCreateFolderAction.bind(
                ri(t)
              )),
              (t.moveItemTo = t.moveItemTo.bind(ri(t))),
              (t.handleSettingSave = t.handleSettingSave.bind(ri(t))),
              (t.validedDefaultSave = t.validedDefaultSave.bind(ri(t))),
              (t.handlePopVisiableChange = t.handlePopVisiableChange.bind(
                ri(t)
              )),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.user.username &&
                    0 === this.state.projects.length &&
                    this.refreshUserData(),
                    chrome.runtime.onMessage.addListener(function (t, n, r) {
                      var a = t.name;
                      "awsLoginByGoogle" === a
                        ? (e.props.refreshUser(),
                          e.setState({ isShownSignin: !1 }))
                        : "stop" === a && r();
                    }),
                    this.props.imageUrl &&
                    !this.props.imageBlob &&
                    "[object Array]" !==
                    Object.prototype.toString.call(this.props.imageUrl) &&
                    A(this.props.imageUrl).then(function (t) {
                      e.setState({ temImageBlob: t });
                    }),
                    window.addEventListener("message", function (t) {
                      var n = t.data;
                      n &&
                        ("show" === n.type
                          ? e.setState({
                            isShowAds: !0,
                            promotionHeight: n.height
                              ? parseInt(n.height)
                              : 0,
                          })
                          : "close" === t.data.type &&
                          e.setState({ isShowAds: !1 }));
                    });
                },
              },
              {
                key: "UNSAFE_componentWillUpdate",
                value: function (e) {
                  "save" === e.step &&
                    "save" !== this.props.step &&
                    this.setState({ isShowAds: !1, promotionHeight: 0 });
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this;
                  e.user.username !== this.props.user.username &&
                    (this.props.user.username
                      ? this.refreshUserData()
                      : this.setState({
                        awsShareUrls: [],
                        projects: [],
                        destinations: [],
                        accounts: [],
                      }));
                  var n =
                    null != this.props.permissions.empty ||
                    null != this.props.permissions.allowUploadImage;
                  if (
                    ("save" !== this.props.step ||
                      this.state.isShowed ||
                      (this.setState({ isShowed: !0 }), this.recordEvent()),
                      "save" === this.props.step &&
                      si.isShowAlertFeature &&
                      "true" !== localStorage.backupPopUp &&
                      ((si.isShowAlertFeature = !1),
                        st()
                          .then(function (e) {
                            e ||
                              (t.setState({ isShownFeatureAlert: !0 }),
                                (localStorage.backupPopUp = !0),
                                si.googleEvent("local_img_feature_alert", "show"));
                          })
                          .catch(function () { })),
                      "save" === this.props.step && !this.state.haveUndate && n)
                  ) {
                    this.setState({ haveUndate: !0 });
                    var r = this.props.permissions.showChromeFiveStarNever,
                      a = this.props.user ? this.props.user.username : "";
                    chrome.storage.sync.get(
                      ["captureCount", "clickNo", "neverShow"],
                      function (e) {
                        if (!e.neverShow && !r) {
                          if (e.clickNo) var t = 200;
                          else t = 100;
                          e.captureCount &&
                            e.captureCount > t &&
                            ((n = a),
                              (i = "Are you enjoying Awesome Screenshot?"),
                              gi(
                                (0, v.jsxs)("div", {
                                  className: "noti_title",
                                  children: [
                                    (0, v.jsx)("img", { src: "images/star.png" }),
                                    " User Satisfaction Survey",
                                  ],
                                }),
                                (0, v.jsxs)("div", {
                                  className: "noti_des",
                                  children: [
                                    n
                                      ? (0, v.jsxs)("div", {
                                        className: "content",
                                        children: [
                                          "Hi ",
                                          (0, v.jsxs)("p", {
                                            className: "user_name",
                                            children: [" ", n],
                                          }),
                                          " , ",
                                          i,
                                        ],
                                      })
                                      : (0, v.jsx)("div", {
                                        className: "content",
                                        children: i,
                                      }),
                                    (0, v.jsx)(tt.Z, {
                                      style: { width: "172px" },
                                      type: "primary",
                                      onClick: xi,
                                      ghost: !0,
                                      children: "Not really",
                                    }),
                                    (0, v.jsx)(tt.Z, {
                                      style: {
                                        width: "172px",
                                        marginLeft: "14px",
                                      },
                                      type: "primary",
                                      onClick: bi,
                                      children: "Yes",
                                    }),
                                  ],
                                })
                              ));
                        }
                        var n, i;
                      }
                    );
                  }
                },
              },
              {
                key: "recordEvent",
                value: function () {
                  st()
                    .then(function (e) {
                      si.googleEvent(
                        "enter_savePanel",
                        e ? "sigined" : "nosigin"
                      );
                    })
                    .catch(function () { });
                },
              },
              {
                key: "handleMoreAction",
                value: function () {
                  this.setState({ expandedMore: !this.state.expandedMore });
                },
              },
              {
                key: "handleUploadStatus",
                value: function (e, t) {
                  void 0 !== e && this.setState({ uploadStatus: e }),
                    void 0 !== t &&
                    (this.setState({ autoUpload: t }),
                      (localStorage.autoupload = t),
                      t || this.setState({ isShownComfig: !1 }));
                },
              },
              {
                key: "loadPromotionUrl",
                value: function () {
                  var e = new URLSearchParams(window.location.search);
                  return e.get("promotion_test")
                    ? this.state.promotionUrl +
                    e.get("promotion_test") +
                    "?theme=dark&place=extension"
                    : this.state.promotionUrl + "?theme=dark&place=extension";
                },
              },
              {
                key: "copyUrl",
                value: function (e) {
                  S(e);
                },
              },
              {
                key: "downloadMultiple",
                value: function () {
                  var e = this.props,
                    t = e.imageUrl,
                    n = e.tabUrl,
                    r = this.props.contentType.split("/")[1];
                  "jpeg" === r && (r = "jpg");
                  var a = T(n);
                  "true" === localStorage["save-as"]
                    ? I().then(function () {
                      t.forEach(function (e, t) {
                        N({
                          url: e,
                          filename: a + "_part" + (t + 1) + "." + r,
                        });
                      });
                    })
                    : t.forEach(function (e, t) {
                      P(e, a + "_part" + (t + 1) + "." + r);
                    });
                },
              },
              {
                key: "downloadMultiplePDF",
                value: function () {
                  var e = this.props.imageUrl,
                    t = T(this.props.tabUrl);
                  "true" === localStorage["save-as"]
                    ? I().then(function () {
                      vt(e).then(function (e) {
                        N({ url: e, filename: t + ".pdf" });
                      });
                    })
                    : vt(e).then(function (e) {
                      P(e, t + ".pdf");
                    });
                },
              },
              {
                key: "handleLocalSave",
                value: function (e) {
                  var t = function (e) {
                    e &&
                      ("image/jpeg" === e.type
                        ? D(e).then(function (e) {
                          Z(
                            e,
                            function () {
                              i.ZP.success("Copied to clipboard!", 1);
                            },
                            function (e) {
                              i.ZP.error("Copy failed.", 1);
                            }
                          );
                        })
                        : Z(
                          e,
                          function () {
                            i.ZP.success("Copied to clipboard!", 1);
                          },
                          function (e) {
                            i.ZP.error("Copy failed.", 1);
                          }
                        ));
                  },
                    n = this,
                    r = this.props,
                    a = r.imageUrl,
                    o = r.tabTitle;
                  if ("save" === e) {
                    var s = n.props.contentType.split("/")[1];
                    "jpeg" == s && (s = "jpg");
                    var l =
                      (o ? o.replace(/(\.|\:)/g, " ") : "untitled").replace(
                        /[#$~\-!@%^&*();'"?><\[\]{}\|,:\/=+]/g,
                        " "
                      ) +
                      "." +
                      s;
                    if (
                      ((l = l.replace(/\s+/g, "-")),
                        "true" === localStorage["save-as"])
                    ) {
                      var c = {
                        url: n.props.imageBlob
                          ? window.URL.createObjectURL(n.props.imageBlob)
                          : n.props.imageUrl,
                        filename: l,
                        method: "GET",
                        saveAs: !0,
                      };
                      I().then(function () {
                        N(c);
                      });
                    } else
                      P(
                        n.props.imageBlob
                          ? window.URL.createObjectURL(n.props.imageBlob)
                          : a,
                        l
                      );
                  } else if ("print" === e) {
                    var d = this.printIframe.current,
                      u =
                        '<div style="margin:0 auto;text-align:center"><img style="width:100%;" src="'.concat(
                          a,
                          '"></div>'
                        ),
                      h = d.contentWindow.document;
                    h.write(u);
                    var p = d.contentWindow;
                    p.close(), p.focus(), p.print(), (h.body.innerHTML = "");
                  } else if ("copy" === e)
                    try {
                      var f = n.props.imageBlob
                        ? n.props.imageBlob
                        : n.state.temImageBlob;
                      f
                        ? t(f)
                        : n.props.imageUrl &&
                        A(n.props.imageUrl).then(function (e) {
                          t(e);
                        });
                    } catch (e) {
                      i.ZP.error(
                        "Sorry,your system doesn't support this function. Please right click on this image to save."
                      );
                    }
                  else if ("pdf" === e) {
                    var m = this.props.info.height,
                      g = this.props.imageUrl,
                      v = 14400,
                      y =
                        (o ? o.replace(/(\.|\:)/g, " ") : "untitled").replace(
                          /[#$~!@%^&*();'"?><\[\]{}\|,:\/=+-]/g,
                          " "
                        ) + ".pdf";
                    "true" === localStorage["save-as"]
                      ? I().then(function () {
                        m > v
                          ? k(g, v, function (e) {
                            gt(e).then(function (e) {
                              N({ url: e, filename: y, saveAs: !0 });
                            });
                          })
                          : gt([g]).then(function (e) {
                            N({ url: e, filename: y, saveAs: !0 });
                          });
                      })
                      : m > v
                        ? k(g, v, function (e) {
                          gt(e).then(function (e) {
                            P(e, y);
                          });
                        })
                        : gt([g]).then(function (e) {
                          P(e, y);
                        });
                  }
                  si.googleEvent(e + " image", "local");
                },
              },
              {
                key: "handleSaveToAws",
                value: function () {
                  this.props.user.username
                    ? this.showModal("SaveToAws")
                    : this.setState({ signInType: "aws", isShownSignin: !0 });
                },
              },
              {
                key: "handleUploadAction",
                value: function (e, t) {
                  "selectFolder" === e
                    ? this.setState({ isShownSaveToAws: !0, imageId: t })
                    : "upgrade" == e &&
                    this.setState({
                      isShownUpgrade: !0,
                      upgradeType: "uploadImage",
                    });
                },
              },
              {
                key: "openFeedback",
                value: function () {
                  var e = Ja({}, this.props.imageInfo);
                  (localStorage.last_info = JSON.stringify(e)),
                    chrome.tabs.create({ url: "/feedback.html" });
                },
              },
              {
                key: "openOptionPage",
                value: function () {
                  chrome.tabs.create({ url: "/option-react.html" });
                },
              },
              {
                key: "googleSigin",
                value: function () {
                  this.setState({ isShownFeatureAlert: !1 }),
                    this.setState({ autoUpload: !0 }),
                    (localStorage.autoupload = !0),
                    si.googleEvent("local_img_feature_alert", "google_sigin"),
                    pt("ext_backup_google").then(function (e) {
                      var t = e.data.data.login_url;
                      window.open(t);
                    });
                },
              },
              {
                key: "handleSignInFinish",
                value: function () {
                  this.handleModalCancel("Signin"), this.props.refreshUser();
                },
              },
              {
                key: "handleUploadFinish",
                value: function (e) {
                  this.setState({
                    isShownSaveToAws: !1,
                    awsShareUrls: [].concat(Ka(this.state.awsShareUrls), [e]),
                  });
                },
              },
              {
                key: "showModal",
                value: function (e) {
                  var t = "isShown".concat(e);
                  this.setState(Xa({}, t, !0));
                },
              },
              {
                key: "openSetting",
                value: function (e) {
                  chrome.tabs.create({
                    url: "https://www.awesomescreenshot.com/settings/" + e,
                  });
                },
              },
              {
                key: "handleModalCancel",
                value: function (e) {
                  var t,
                    n = "isShown".concat(e);
                  this.setState(
                    (Xa((t = {}), n, !1), Xa(t, "signInType", ""), t)
                  ),
                    "FeatureAlert" === e &&
                    si.googleEvent("local_img_feature_alert", "cancel"),
                    "SaveToAws" === e && this.setState({ onlySetting: !1 });
                },
              },
              {
                key: "goToAddDes",
                value: function () {
                  this.setState({ desCurrentPanel: "add" });
                },
              },
              {
                key: "handleDesCreated",
                value: function (e) {
                  this.setState({
                    destinations: [].concat(Ka(this.state.destinations), [e]),
                    desCurrentPanel: "des",
                    currentDes: e,
                  });
                },
              },
              {
                key: "openDesModal",
                value: function (e) {
                  var t = this;
                  this.setState({ desCurrentPanel: e }, function () {
                    t.showModal("Des");
                  });
                },
              },
              {
                key: "getPermissionByName",
                value: function (e) {
                  return this.props.permissions["allow".concat(w(e))];
                },
              },
              {
                key: "goToRate",
                value: function () {
                  b(
                    "https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews"
                  );
                },
              },
              {
                key: "handleDesClick",
                value: function (e) {
                  var t = this;
                  "add" === e
                    ? this.openDesModal("add")
                    : this.getPermissionByName(e.service)
                      ? this.setState({ currentDes: e }, function () {
                        t.openDesModal("des");
                      })
                      : this.setState({ upgradeType: "des", isShownUpgrade: !0 });
                },
              },
              {
                key: "handleSignOut",
                value: function () {
                  b("https://www.awesomescreenshot.com/web/user/logout");
                },
              },
              {
                key: "handleAutoUpload",
                value: function (e) {
                  e
                    ? (this.setState({ autoUpload: !0, popVisiable: !1 }),
                      (localStorage.autoupload = !0))
                    : this.setState({ isShownComfig: !0, popVisiable: !1 }),
                    si.googleEvent(
                      "click autobackup switch btn",
                      e ? "open" : "close"
                    );
                },
              },
              {
                key: "handleSettingSave",
                value: function () {
                  this.setState({
                    onlySetting: !0,
                    isShownSaveToAws: !0,
                    popVisiable: !1,
                  });
                },
              },
              {
                key: "moveItemTo",
                value: function (e, t, n, r) {
                  var a,
                    i,
                    o,
                    s,
                    l = this;
                  if ((this.setState({ isMovingItem: !0 }), "folder" === e))
                    si.googleEvent("click move btn", "done_folder"),
                      ((a = n),
                        (i = ""),
                        (o = this.state.imageId + ""),
                        (s = ""),
                        ot({
                          method: "POST",
                          url: "/folder/add_items",
                          data: { folderID: a, videos: i, images: o, folders: s },
                        })).then(function (e) {
                          if (
                            (l.setState({
                              isShownSaveToAws: !1,
                              selectPlacesValue: t,
                              onlySetting: !1,
                              isMovingItem: !1,
                            }),
                              (localStorage.lastSavePath = t),
                              "true" === localStorage["auto-save-path"])
                          ) {
                            localStorage.defaultSavePlace = t;
                            var n = t.split("-.-")[0],
                              r = "";
                            (r =
                              "folder" === n
                                ? t.split("-.-")[2]
                                : t.split("-.-")[3]),
                              l.setState({ autoSaveType: n, autoSavePlace: r });
                          }
                        });
                  else if ("channel" === e)
                    si.googleEvent("click move btn", "done_channel"),
                      (function (e, t, n) {
                        return ot({
                          method: "POST",
                          url: "/workspace/channel/move_items",
                          data: { workspaceID: e, channelID: t, items: n },
                        });
                      })(r, n, "image-" + this.state.imageId).then(function (
                        e
                      ) {
                        if (
                          (l.setState({
                            isShownSaveToAws: !1,
                            selectPlacesValue: t,
                            onlySetting: !1,
                            isMovingItem: !1,
                          }),
                            (localStorage.lastSavePath = t),
                            "true" === localStorage["auto-save-path"])
                        ) {
                          localStorage.defaultSavePlace = t;
                          var n = t.split("-.-")[0],
                            r = "";
                          (r =
                            "folder" === n
                              ? t.split("-.-")[2]
                              : t.split("-.-")[3]),
                            l.setState({ autoSaveType: n, autoSavePlace: r });
                        }
                      });
                  else {
                    localStorage.defaultSavePlace = t;
                    var c = "";
                    (c =
                      "folder" === (e = t.split("-.-")[0])
                        ? t.split("-.-")[2]
                        : t.split("-.-")[3]),
                      this.setState({
                        isShownSaveToAws: !1,
                        onlySetting: !1,
                        autoSaveType: e,
                        autoSavePlace: c,
                        isMovingItem: !1,
                      });
                  }
                },
              },
              {
                key: "handleCreateFolderAction",
                value: function (e, t, n, r) {
                  var a = this;
                  "folder" == e
                    ? (si.googleEvent("local create container", "folder"),
                      this.setState({ isCreatingFolder: !0 }),
                      (function (e, t) {
                        return ot({
                          method: "POST",
                          url: "/folder/create",
                          data: { name: e, parentID: t },
                        });
                      })(t, n)
                        .then(function (e) {
                          var t = {},
                            n = e.folder.parentID;
                          t = a.state.folders[n]
                            ? Ja(
                              Ja({}, a.state.folders),
                              {},
                              Xa(
                                {},
                                e.folder.parentID,
                                [e.folder].concat(Ka(a.state.folders[n]))
                              )
                            )
                            : Ja(
                              Ja({}, a.state.folders),
                              {},
                              Xa({}, e.folder.parentID, [e.folder])
                            );
                          var r = {
                            title: e.folder.name,
                            folderID: e.folder.folderID,
                          },
                            i = ci(t);
                          a.setState({
                            isCreatingFolder: !1,
                            folders: t,
                            foldersTreeData: i,
                            newFolder: r,
                          });
                        })
                        .catch(function (e) {
                          i.ZP.error(e, 1),
                            a.setState({ isCreatingFolder: !1 });
                        }))
                    : "channel" === e &&
                    (this.setState({ isCreatingFolder: !0 }),
                      si.googleEvent("local create container", "channel"),
                      (function (e, t, n) {
                        return ot({
                          method: "POST",
                          url: "/workspace/channel/create",
                          data: { workspaceID: e, name: t, description: n },
                        });
                      })(n, t, r)
                        .then(function (e) {
                          var t = e.channel,
                            n = t.workspaceID,
                            r = {};
                          (r = a.state.workspacesIdHash)[n].channels.push(t),
                            a.setState({
                              isCreatingFolder: !1,
                              workspacesIdHash: r,
                            });
                        })
                        .catch(function (e) {
                          i.ZP.error(e, 1),
                            a.setState({ isCreatingFolder: !1 });
                        }));
                },
              },
              {
                key: "handleFolderCreated",
                value: function (e) {
                  var t = {};
                  t = this.state.folders[0]
                    ? Ja(
                      Ja({}, this.state.folders),
                      {},
                      { 0: [e].concat(Ka(this.state.folders[0])) }
                    )
                    : { 0: [e] };
                  var n = ci(t);
                  this.setState({ folders: t, foldersTreeData: n });
                },
              },
              {
                key: "openDriveModal",
                value: function (e) {
                  var t = this;
                  this.props.user.username
                    ? this.props.permissions["allow".concat(w(e.service))]
                      ? this.setState({ currentDriveAccount: e }, function () {
                        t.showModal("Drive");
                      })
                      : this.setState({ upgradeType: e.service }, function () {
                        t.showModal("Upgrade");
                      })
                    : this.setState({ signInType: "drive", isShownSignin: !0 });
                },
              },
              {
                key: "refreshUserData",
                value: function () {
                  var e,
                    t = this;
                  if (
                    (this.setState({
                      projects: [],
                      destinations: [],
                      isShownSignin: !1,
                      isfolderLoading: !0,
                      isWorkspaceLoading: !0,
                      workspacesIds: [],
                      workspacesIdHash: {},
                      autoSaveType: "folder",
                      autoSavePlace: "My Items",
                    }),
                      void 0 !== localStorage.defaultSavePlace)
                  ) {
                    var n = localStorage.defaultSavePlace,
                      r = n.split("-.-")[0],
                      a = "";
                    (a =
                      "folder" === r ? n.split("-.-")[2] : n.split("-.-")[3]),
                      this.setState({ autoSaveType: r, autoSavePlace: a });
                  }
                  Promise.all([
                    ot({
                      method: "GET",
                      url: "/folder/load_user_folders",
                      params: { count: 20, page: e },
                    }),
                    ot({ method: "GET", url: "/workspace/load_user_all" }),
                  ]).then(function (e) {
                    var n = e[0].folders ? e[0].folders : [],
                      r = ci(n),
                      a = e[1].workspaces ? e[1].workspaces : [];
                    if (a.length > 0)
                      for (
                        var i = a.map(function (e) {
                          return e.id;
                        }),
                        o = {},
                        s = 0;
                        s < a.length;
                        s++
                      ) {
                        var l = a[s];
                        o[l.id] = l;
                      }
                    t.validedDefaultSave(r, o),
                      t.setState({
                        folders: n,
                        foldersTreeData: r,
                        isfolderLoading: !1,
                        isWorkspaceLoading: !1,
                        workspacesIds: i,
                        workspacesIdHash: o,
                      });
                  }),
                    Promise.all([
                      ot({ method: "GET", url: "/account/load" }),
                      ot({ method: "GET", url: "/destination/load" }),
                    ])
                      .then(function (e) {
                        t.setState({
                          accounts: e[0].accounts ? e[0].accounts : [],
                          destinations: e[1].destinations
                            ? e[1].destinations
                            : [],
                        }),
                          e[0].accounts &&
                          ((oi = {}),
                            e[0].accounts.forEach(function (e) {
                              oi[e.id] = e;
                            }),
                            e[0].accounts.filter(function (e) {
                              return (
                                "googleDrive" === e.service ||
                                "dropbox" === e.service ||
                                "box" === e.service
                              );
                            }).length > 0 && t.setState({ expandedMore: !0 }));
                      })
                      .catch(function (e) { });
                },
              },
              {
                key: "validedDefaultSave",
                value: function (e, t) {
                  var n = localStorage.defaultSavePlace;
                  if (void 0 !== n) {
                    var r = n.split("-.-")[0];
                    if ("folder" === r) {
                      var a = n.split("-.-")[1];
                      "0" !== a &&
                        ((di = !1),
                          fi(a, 0, e),
                          di
                            ? hi &&
                            ((localStorage.defaultSavePlace = hi),
                              this.setState({
                                autoSavePlace: hi.split("-.-")[2],
                              }))
                            : ((localStorage.defaultSavePlace =
                              "folder-.-0-.-My Items"),
                              this.setState({
                                autoSaveType: "folder",
                                autoSavePlace: "My Items",
                              })));
                    } else
                      "channel" === r &&
                        ((ui = !1),
                          (function (e, t, n) {
                            if (n) {
                              var r = n[e];
                              if (r)
                                for (var a = 0; a < r.channels.length; a++) {
                                  var i = r.channels[a];
                                  if (!0 === i.isMember && i.id === t) {
                                    (ui = !0),
                                      (pi =
                                        "channel-.-" +
                                        i.id +
                                        "-.-" +
                                        i.workspaceID +
                                        "-.-" +
                                        i.name);
                                    break;
                                  }
                                }
                            }
                          })(n.split("-.-")[2], n.split("-.-")[1], t),
                          ui
                            ? pi &&
                            ((localStorage.defaultSavePlace = pi),
                              this.setState({
                                autoSavePlace: pi.split("-.-")[3],
                              }))
                            : ((localStorage.defaultSavePlace =
                              "folder-.-0-.-My Items"),
                              this.setState({
                                autoSaveType: "folder",
                                autoSavePlace: "My Items",
                              })));
                  }
                },
              },
              {
                key: "handleAccountConnected",
                value: function (e) {
                  this.setState(
                    {
                      accounts: [].concat(Ka(this.state.accounts), [e]),
                      currentAccount: e,
                    },
                    function () {
                      oi[e.id] = e;
                    }
                  );
                },
              },
              {
                key: "handleDriveAccountConnected",
                value: function (e) {
                  this.setState({
                    accounts: [e].concat(Ka(this.state.accounts)),
                    currentDriveAccount: e,
                  });
                },
              },
              {
                key: "handleAddDesClick",
                value: function () {
                  this.props.user.username
                    ? this.showModal("Des")
                    : this.setState({ signInType: "des", isShownSignin: !0 });
                },
              },
              {
                key: "handleAddDriveClick",
                value: function () {
                  var e = this;
                  this.props.user.username
                    ? this.setState({ currentDriveAccount: null }, function () {
                      e.showModal("Drive");
                    })
                    : this.setState({ signInType: "drive", isShownSignin: !0 });
                },
              },
              {
                key: "showUpgradeModal",
                value: function (e) {
                  this.setState({ isShownUpgrade: !0, driveService: e });
                },
              },
              {
                key: "zoomImage",
                value: function (e) {
                  this.setState({ zoomImageIndex: e });
                },
              },
              {
                key: "handleSignIn",
                value: function () {
                  window.open(
                    "https://www.awesomescreenshot.com/signin?from=ext_loc_normal"
                  );
                },
              },
              {
                key: "handlePopVisiableChange",
                value: function (e) {
                  this.setState({ popVisiable: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = x(this.props.imageUrl),
                    n = this.state.destinations,
                    r = this.props.user,
                    a = this.state.accounts.filter(function (e) {
                      return (
                        "googleDrive" === e.service ||
                        "dropbox" === e.service ||
                        "box" === e.service
                      );
                    }),
                    i = this.state.accounts.filter(function (e) {
                      return (
                        "googleDrive" !== e.service &&
                        "dropbox" !== e.service &&
                        "box" !== e.service
                      );
                    }),
                    o = M()("save-panel", this.props.className),
                    s = (0, v.jsxs)(et.Z, {
                      className: "more-menu",
                      children: [
                        "free" === this.props.currentPlan.PlanName &&
                        (0, v.jsx)(et.Z.Item, {
                          className: "menu-item",
                          children: (0, v.jsxs)("a", {
                            href: "https://www.awesomescreenshot.com/pricing?from=local_dropdown",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              (0, v.jsx)(nt.Z, {
                                style: { marginRight: "5px" },
                                title: "Premium user",
                              }),
                              "Upgrade",
                            ],
                          }),
                        }),
                        (0, v.jsx)(et.Z.Item, {
                          className: "menu-item",
                          onClick: this.handleSignOut,
                          children: (0, v.jsxs)("a", {
                            children: [
                              (0, v.jsx)(rt.SZ, {
                                style: { marginRight: "5px", fontSize: "16px" },
                              }),
                              "Sign out",
                            ],
                          }),
                        }),
                      ],
                    }),
                    l = function (e, t, n) {
                      return (0, v.jsxs)("div", {
                        className: "section",
                        children: [
                          e &&
                          (0, v.jsxs)("div", {
                            className: "section-title",
                            children: [
                              t &&
                              (0, v.jsx)("div", { className: "icon " + t }),
                              e,
                            ],
                          }),
                          (0, v.jsx)("div", {
                            className: "section-content",
                            children: n,
                          }),
                        ],
                      });
                    },
                    d = (0, v.jsx)("div", {
                      className: "more-menu setting",
                      children: (0, v.jsxs)(
                        "div",
                        {
                          children: [
                            (0, v.jsx)("div", {
                              className: "title",
                              children: "Preferences",
                            }),
                            (0, v.jsxs)("div", {
                              className: "section",
                              children: [
                                (0, v.jsx)("div", {
                                  className: "label",
                                  children:
                                    "Automatically back up my screenshots ",
                                }),
                                (0, v.jsx)(c.Z, {
                                  className: "switch",
                                  size: "small",
                                  onChange: this.handleAutoUpload,
                                  checked: this.state.autoUpload,
                                }),
                              ],
                            }),
                            (0, v.jsx)("div", {
                              className: "sub-title",
                              children: "Default save location: ",
                            }),
                            (0, v.jsxs)("div", {
                              className: "uploaded-field",
                              onClick: this.handleSettingSave,
                              children: [
                                (0, v.jsxs)("div", {
                                  className: "tips",
                                  children: [
                                    "folder" === this.state.autoSaveType
                                      ? (0, v.jsx)(rt.RO, {})
                                      : (0, v.jsx)(rt.MC, {}),
                                    (0, v.jsx)("span", {
                                      className: "place",
                                      children: this.state.autoSavePlace,
                                    }),
                                  ],
                                }),
                                (0, v.jsx)(rt.e0, {}),
                              ],
                            }),
                          ],
                        },
                        "content"
                      ),
                    }),
                    h = function (e) {
                      return "save" === e
                        ? (0, v.jsx)("div", {
                          className: "icon-field",
                          children: (0, v.jsx)(rt.uN, { className: "icon" }),
                        })
                        : "copy" === e
                          ? (0, v.jsx)("div", {
                            className: "icon-field",
                            children: (0, v.jsx)(rt.RC, { className: "icon" }),
                          })
                          : "pdf" === e
                            ? (0, v.jsx)("div", {
                              className: "icon-field",
                              children: (0, v.jsx)(rt.W1, { className: "icon" }),
                            })
                            : "print" === e
                              ? (0, v.jsx)("div", {
                                className: "icon-field",
                                children: (0, v.jsx)(rt.nU, { className: "icon" }),
                              })
                              : void 0;
                    };
                  return (0, v.jsxs)("div", {
                    className: o,
                    children: [
                      (0, v.jsx)("iframe", {
                        className: "print-iframe",
                        ref: this.printIframe,
                        frameBorder: "0",
                      }),
                      (0, v.jsx)("div", {
                        className: "copy-div",
                        contentEditable: "true",
                        ref: this.copyDiv,
                      }),
                      (0, v.jsx)("div", {
                        className: "top-bar",
                        children: (0, v.jsxs)("div", {
                          className: "inner-container",
                          children: [
                            (0, v.jsxs)("div", {
                              className: "logo-area",
                              children: [
                                (0, v.jsx)("div", { className: "logo" }),
                                (0, v.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.awesomescreenshot.com",
                                  rel: "noreferrer",
                                }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "user-area",
                              children: [
                                this.props.isReported ||
                                  ("entire" !== this.props.menuType &&
                                    "selected" !== this.props.menuType)
                                  ? (0, v.jsx)("div", {})
                                  : (0, v.jsxs)("div", {
                                    className: "quick-issue",
                                    children: [
                                      "Not properly captured?",
                                      (0, v.jsx)("a", {
                                        onClick: this.props.quickReport,
                                        children: " Report a problem.",
                                      }),
                                    ],
                                  }),
                                (0, v.jsxs)("a", {
                                  className: "user-link email-us",
                                  target: "_blank",
                                  onClick: this.openFeedback,
                                  children: [
                                    (0, v.jsx)("div", {
                                      className: "icon-field",
                                      children: (0, v.jsx)(rt.Ak, {}),
                                    }),
                                    "Feedback",
                                  ],
                                }),
                                (0, v.jsxs)("a", {
                                  className: "user-link email-us",
                                  target: "_blank",
                                  onClick: this.openOptionPage,
                                  children: [
                                    (0, v.jsx)("div", {
                                      className: "icon-field",
                                      children: (0, v.jsx)(rt.qY, {}),
                                    }),
                                    "Options",
                                  ],
                                }),
                                r.username
                                  ? (0, v.jsxs)("a", {
                                    className: "user-link email-us",
                                    href: "https://www.awesomescreenshot.com/my_items",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [
                                      (0, v.jsx)("div", {
                                        className: "icon-field",
                                        children: (0, v.jsx)(rt.fK, {}),
                                      }),
                                      "My items",
                                    ],
                                  })
                                  : (0, v.jsx)(v.Fragment, {}),
                                r.username
                                  ? (0, v.jsx)(Xe.Z, {
                                    overlay: s,
                                    trigger: ["click"],
                                    placement: "bottomCenter",
                                    children: (0, v.jsxs)("div", {
                                      className: "user-link user-avatar",
                                      children: [
                                        (0, v.jsx)(za, {
                                          username: r.username,
                                          size: "22",
                                          avatarUrl: this.props.avatar
                                            ? "https://www.awesomescreenshot.com/" +
                                            this.props.avatar
                                            : "",
                                        }),
                                        this.props.currentPlan.PlanName &&
                                          "free" !==
                                          this.props.currentPlan.PlanName
                                          ? (0, v.jsx)(rt.CE, {
                                            className: "crown",
                                          })
                                          : (0, v.jsx)(v.Fragment, {}),
                                        r.username,
                                        (0, v.jsx)(rt.nX, {
                                          className: "user-more",
                                        }),
                                      ],
                                    }),
                                  })
                                  : (0, v.jsxs)("div", {
                                    className: "user-link",
                                    onClick: this.handleSignIn,
                                    children: [
                                      (0, v.jsx)(rt.fK, { className: "me" }),
                                      "Sign in",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "panel",
                        children: (0, v.jsxs)("div", {
                          className: "inner-container",
                          children: [
                            (0, v.jsxs)("div", {
                              className: "left",
                              children: [
                                !t &&
                                (0, v.jsx)(u.Z, {
                                  mouseEnterDelay: 0.3,
                                  title: "Back and Re-edit this screenshot",
                                  children: (0, v.jsx)("div", {
                                    className: "back-btn",
                                    onClick: this.props.backToEdit,
                                    children: (0, v.jsx)("b", {}),
                                  }),
                                }),
                                (0, v.jsx)("div", {
                                  className: "image-container",
                                  children: x(e.props.imageUrl)
                                    ? e.props.imageUrl.map(function (t, n) {
                                      var r = e.state.zoomImageIndex === n,
                                        a = r ? "zoom-in" : "";
                                      return (0, v.jsx)(
                                        "img",
                                        {
                                          className: "multiple ".concat(a),
                                          src: t,
                                          ref: e.img,
                                          alt: "",
                                          onClick: function () {
                                            e.zoomImage(r ? "" : n);
                                          },
                                        },
                                        n
                                      );
                                    })
                                    : (0, v.jsxs)(v.Fragment, {
                                      children: [
                                        (0, v.jsx)("span", {
                                          className: "helper",
                                        }),
                                        (0, v.jsx)("img", {
                                          src: e.props.imageUrl,
                                          ref: e.img,
                                          alt: "",
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "right",
                              children: [
                                (0, v.jsxs)("div", {
                                  className: "panel-logo-area",
                                  children: [
                                    (0, v.jsx)("div", { className: "logo" }),
                                    "AwesomeScreenshot",
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className: "right-container",
                                  children: t
                                    ? (0, v.jsx)("div", {
                                      className:
                                        "multiple-image-panel sub-panel",
                                      children: (0, v.jsxs)("div", {
                                        className: "section",
                                        children: [
                                          (0, v.jsxs)("div", {
                                            className: "tip",
                                            children: [
                                              "Note: there's no way for Chrome to capture this web page as a single image because it is too large, and editing toolbar is not available in this situation. The screenshot was automatically split into",
                                              " ",
                                              this.props.imageUrl.length,
                                              " images. You can download all images or save images as a single PDF with one click.",
                                            ],
                                          }),
                                          (0, v.jsxs)("div", {
                                            className: "btn-area",
                                            children: [
                                              (0, v.jsx)(tt.Z, {
                                                block: !0,
                                                className:
                                                  "multiple-download-btn",
                                                onClick:
                                                  this.downloadMultiple,
                                                children:
                                                  "Download all ".concat(
                                                    this.props.imageUrl
                                                      .length,
                                                    " images"
                                                  ),
                                              }),
                                              (0, v.jsx)(tt.Z, {
                                                block: !0,
                                                className:
                                                  "multiple-download-btn",
                                                onClick:
                                                  this.downloadMultiplePDF,
                                                children: "Download as PDF",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    })
                                    : (0, v.jsxs)(v.Fragment, {
                                      children: [
                                        (0, v.jsx)("div", {
                                          className: "local-panel",
                                          children: (0, v.jsx)("div", {
                                            className: "local-save-container",
                                            children: ii.map(function (t, n) {
                                              var r = M()(
                                                "local-save-item",
                                                t.name
                                              );
                                              return (0,
                                                v.jsxs)("div", { className: r, onClick: e.handleLocalSave.bind(null, t.name), children: [h(t.name), (0, v.jsx)("span", { className: "action-name", children: t.displayName })] }, n);
                                            }),
                                          }),
                                        }),
                                        (0, v.jsx)("div", {
                                          className: "sub-panel",
                                          children: l(
                                            "uploading" !==
                                              e.state.uploadStatus &&
                                              "failed" !==
                                              e.state.uploadStatus
                                              ? (0, v.jsxs)(v.Fragment, {
                                                children: [
                                                  "Save to Awesome Screenshot",
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "actions " +
                                                      (r.username
                                                        ? ""
                                                        : "hidde"),
                                                    children: (0, v.jsx)(
                                                      Qe.Z,
                                                      {
                                                        content: d,
                                                        trigger: ["click"],
                                                        className:
                                                          "more-action",
                                                        placement:
                                                          "bottomLeft",
                                                        color: "#414141",
                                                        visible:
                                                          e.state
                                                            .popVisiable,
                                                        onVisibleChange:
                                                          e.handlePopVisiableChange,
                                                        arrowPointAtCenter:
                                                          !0,
                                                        children: (0,
                                                          v.jsx)("div", {
                                                            className:
                                                              "action-btn option",
                                                          }),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              })
                                              : (0, v.jsx)(v.Fragment, {}),
                                            "",
                                            (0, v.jsx)(Ga, {
                                              user: r,
                                              updateStatus:
                                                this.handleUploadStatus,
                                              step: this.props.step,
                                              isAutoBackup:
                                                this.state.autoUpload,
                                              tabTitle: this.props.tabTitle,
                                              tabUrl: this.props.tabUrl,
                                              imageUrl: this.props.imageUrl,
                                              contentType:
                                                this.props.contentType,
                                              saveAction:
                                                this.handleUploadAction,
                                              imageBlob: this.props.imageBlob
                                                ? this.props.imageBlob
                                                : this.state.temImageBlob,
                                              updateSignStatus:
                                                this.handleSaveToAws,
                                              savePlace:
                                                this.state.selectPlacesValue,
                                            })
                                          ),
                                        }),
                                        (0, v.jsx)("div", {
                                          className: "sub-panel",
                                          children: l(
                                            (0, v.jsxs)(v.Fragment, {
                                              children: [
                                                "Collaborate with Teammates",
                                                0 !== n.length &&
                                                (0, v.jsx)("div", {
                                                  className: "actions",
                                                  children: (0, v.jsx)(
                                                    u.Z,
                                                    {
                                                      title:
                                                        "Manage destinations",
                                                      children: (0, v.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "action-btn option",
                                                          onClick:
                                                            this.openSetting.bind(
                                                              null,
                                                              "destinations"
                                                            ),
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            "",
                                            (0, v.jsx)(ia, {
                                              destinations: n,
                                              handleDesClick:
                                                this.handleDesClick,
                                              handleAddDesClick:
                                                this.handleAddDesClick,
                                              small: !0,
                                            })
                                          ),
                                        }),
                                        (0, v.jsx)("div", {
                                          className:
                                            "sub-panel promo " +
                                            (this.state.isShowAds
                                              ? ""
                                              : "hidden"),
                                          children:
                                            (r.premiumLevel &&
                                              parseInt(r.premiumLevel) > 1) ||
                                              (this.props.currentPlan
                                                .PlanName &&
                                                "free" !==
                                                this.props.currentPlan
                                                  .PlanName) ||
                                              "save" !== this.props.step
                                              ? (0, v.jsx)(v.Fragment, {})
                                              : (0, v.jsx)("iframe", {
                                                className:
                                                  "show-iframe " +
                                                  (this.state.isShowAds
                                                    ? ""
                                                    : "hidden"),
                                                style: this.state.isShowAds
                                                  ? {
                                                    height:
                                                      (this.state
                                                        .promotionHeight >
                                                        0
                                                        ? this.state
                                                          .promotionHeight
                                                        : 0) + "px",
                                                  }
                                                  : {},
                                                src: this.loadPromotionUrl(),
                                              }),
                                        }),
                                        this.state.expandedMore
                                          ? (0, v.jsx)("div", {
                                            className: "sub-panel",
                                            children: l(
                                              (0, v.jsxs)(v.Fragment, {
                                                children: [
                                                  "Save to Cloud",
                                                  0 !== a.length &&
                                                  (0, v.jsxs)("div", {
                                                    className: "actions",
                                                    children: [
                                                      (0, v.jsx)(u.Z, {
                                                        title:
                                                          "Connect a new account",
                                                        children: (0,
                                                          v.jsx)("div", {
                                                            className:
                                                              "action-btn add",
                                                            onClick:
                                                              this
                                                                .handleAddDriveClick,
                                                          }),
                                                      }),
                                                      (0, v.jsx)(u.Z, {
                                                        title:
                                                          "Manage accounts",
                                                        children: (0,
                                                          v.jsx)("div", {
                                                            className:
                                                              "action-btn option",
                                                            onClick:
                                                              this.openSetting.bind(
                                                                null,
                                                                "connectedAccounts"
                                                              ),
                                                          }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              "",
                                              (0, v.jsx)(v.Fragment, {
                                                children: (0, v.jsx)(
                                                  "div",
                                                  {
                                                    className:
                                                      "save-to-drive",
                                                    children: (0, v.jsx)(
                                                      ma,
                                                      {
                                                        accounts: a,
                                                        handleAddDriveClick:
                                                          this
                                                            .handleAddDriveClick,
                                                        handleDriveItemClick:
                                                          this
                                                            .openDriveModal,
                                                      }
                                                    ),
                                                  }
                                                ),
                                              })
                                            ),
                                          })
                                          : (0, v.jsx)(v.Fragment, {}),
                                        (0, v.jsx)("div", {
                                          className: "sub-panel",
                                          children: (0, v.jsx)("div", {
                                            className: "expand-field",
                                            onClick: this.handleMoreAction,
                                            children: this.state.expandedMore
                                              ? (0, v.jsxs)("div", {
                                                children: [
                                                  (0, v.jsx)("div", {
                                                    className: "icon-field",
                                                    children: (0, v.jsx)(
                                                      rt.e0,
                                                      {
                                                        className:
                                                          "icon-hide",
                                                      }
                                                    ),
                                                  }),
                                                  "Less",
                                                ],
                                              })
                                              : (0, v.jsxs)("div", {
                                                children: [
                                                  (0, v.jsx)("div", {
                                                    className: "icon-field",
                                                    children: (0, v.jsx)(
                                                      rt.e0,
                                                      {
                                                        className:
                                                          "icon-show",
                                                      }
                                                    ),
                                                  }),
                                                  "More",
                                                ],
                                              }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "footer",
                        children: (0, v.jsx)("div", {
                          className: "inner-container",
                          children: (0, v.jsx)("div", {
                            className: "social-media",
                          }),
                        }),
                      }),
                      (0, v.jsx)(ba, {
                        visible: this.state.isShownSignin,
                        onCancel: this.handleModalCancel.bind(null, "Signin"),
                        type: this.state.signInType,
                      }),
                      (0, v.jsx)(Sa, {
                        visible: this.state.isShownFeatureAlert,
                        googleSigin: this.googleSigin,
                        onCancel: this.handleModalCancel.bind(
                          null,
                          "FeatureAlert"
                        ),
                      }),
                      (0, v.jsx)(Za, {
                        visible: this.state.isShownSaveToAws,
                        onCancel: this.handleModalCancel.bind(
                          null,
                          "SaveToAws"
                        ),
                        folders: this.state.folders,
                        foldersTreeData: this.state.foldersTreeData,
                        newFolder: this.state.newFolder,
                        onUploadFinish: this.handleUploadFinish,
                        onRefreshProjects: this.refreshUserData,
                        onFolderCreated: this.handleFolderCreated,
                        isfolderLoading: this.state.isfolderLoading,
                        isCreatingFolder: this.state.isCreatingFolder,
                        isMovingItem: this.state.isMovingItem,
                        isWorkspaceLoading: this.state.isWorkspaceLoading,
                        workspaceIDs: this.state.workspacesIds,
                        workspacesIdHash: this.state.workspacesIdHash,
                        onCreateAction: this.handleCreateFolderAction,
                        moveItemTo: this.moveItemTo,
                        savedPlace: this.state.selectPlacesValue,
                        onlySetting: this.state.onlySetting,
                      }),
                      (0, v.jsx)($r, {
                        visible: this.state.isShownDes,
                        onCancel: this.handleModalCancel.bind(null, "Des"),
                        currentPanel: this.state.desCurrentPanel,
                        currentDes: this.state.currentDes,
                        accountHash: oi,
                        destinations: this.state.destinations,
                        accounts: i,
                        tabTitle: this.props.tabTitle,
                        tabUrl: this.props.tabUrl,
                        imageUrl: this.props.imageUrl,
                        imageBlob: this.props.imageBlob
                          ? this.props.imageBlob
                          : this.state.temImageBlob,
                        goToAddDes: this.goToAddDes,
                        handleDesCreated: this.handleDesCreated,
                        handleAccountConnected: this.handleAccountConnected,
                        imageInfo: this.props.imageInfo,
                        permissions: this.props.permissions,
                        currentPlan: this.props.currentPlan,
                        contentType: this.props.contentType,
                      }),
                      (0, v.jsx)(fa, {
                        visible: this.state.isShownDrive,
                        onCancel: this.handleModalCancel.bind(null, "Drive"),
                        tabTitle: this.props.tabTitle,
                        imageUrl: this.props.imageUrl,
                        imageBlob: this.props.imageBlob
                          ? this.props.imageBlob
                          : this.state.temImageBlob,
                        service: this.state.driveService,
                        permissions: this.props.permissions,
                        currentPlan: this.props.currentPlan,
                        accounts: a,
                        currentDriveAccount: this.state.currentDriveAccount,
                        handleDriveAccountConnected:
                          this.handleDriveAccountConnected,
                        contentType: this.props.contentType,
                        showUpgradeModal: this.showUpgradeModal,
                      }),
                      (0, v.jsx)(Ue.Z, {
                        visible: this.state.isShownUpgrade,
                        onCancel: this.handleModalCancel.bind(null, "Upgrade"),
                        type: this.state.upgradeType,
                      }),
                      (0, v.jsx)(ea, {
                        visible: this.state.isShownWhatDes,
                        onCancel: this.handleModalCancel.bind(null, "WhatDes"),
                      }),
                      (0, v.jsx)(aa, {
                        visible: this.state.isShownComfig,
                        comfigAction: this.handleUploadStatus.bind(
                          null,
                          "",
                          !1
                        ),
                        onCancel: this.handleModalCancel.bind(null, "Comfig"),
                      }),
                    ],
                  });
                },
              },
            ]) && Qa(t.prototype, n),
            r && Qa(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })(o.Component);
        var wi = 3e4;
        function Si(e, t, n, r, a, i, o, s, l) {
          var c = l || wi,
            d = !1,
            u = e[0].width / n,
            h = e[0].height / n;
          o && o.height > e[0].height && (d = !0);
          var p,
            f = Math.ceil(h * t),
            m = null,
            g = null;
          if (
            (i &&
              i.forEach(function (t) {
                t &&
                  t.fill.width > 0 &&
                  t.fill.height > 0 &&
                  (0 == t.fill.x
                    ? (m = ki(e[0], t.sample))
                    : t.fill.x > 0 && (g = ki(e[0], t.sample)));
              }),
              r)
          ) {
            var v = r.height;
            d && (v = h),
              (p = (f = v * t)
                ? ((d ? h : o.height) +
                  (e.length > 2 ? (e.length - 2) * v : 0) +
                  f) /
                n
                : ((d ? h : o.height) + (e.length - 1) * v) / n),
              a && a.height > 0 && (p += a.height / n);
          } else p = f ? (e.length - 1) * h + f : e.length * h;
          for (
            var y = Math.ceil(p / c),
            b = p % c,
            x = 0,
            j = 0,
            w = [],
            S = 0,
            k = 0;
            k < y;
            k++
          ) {
            var C = document.createElement("canvas"),
              I = C.getContext("2d");
            (C.id = "c_" + k), (C.width = u), (C.height = k === y - 1 ? b : c);
            for (var N = x; N < e.length; N++) {
              var P = 0,
                T = 0,
                O = u * n,
                D = h * n,
                A = 0,
                Z = u,
                R = h;
              if (r) {
                v = r.height;
                if (
                  (d && (v = h),
                    0 === N
                      ? ((D = d ? h : o.height), (R = (d ? h : o.height) / n))
                      : N === e.length - 1 && k === y - 1
                        ? ((P = r.x),
                          (A = r.x / n),
                          S
                            ? ((T = (h - Math.min(S, f)) * n), (R = Math.min(S, f)))
                            : ((T = (h - f) * n), (R = f / n)),
                          (D = R * n))
                        : ((P = r.x),
                          (A = r.x / n),
                          S
                            ? ((T = (h - S) * n),
                              (P = r.x),
                              (A = r.x / n),
                              (D = (R = S) * n))
                            : ((T = r.y),
                              (P = r.x),
                              (A = r.x / n),
                              (R = v / n),
                              (Z = r.width / n),
                              (D = v),
                              (O = r.width)),
                          N === e.length - 1 && k !== y - 1 && (T = (h - f) * n)),
                    I.drawImage(e[N], P, T, O, D, A, j, Z, R),
                    0 !== N &&
                    (r.x > 0 &&
                      m &&
                      (I.beginPath(),
                        I.rect(0, j - 1, r.x / n, R + 1),
                        (I.fillStyle = m),
                        I.fill()),
                      r.x + r.width < u &&
                      g &&
                      (I.beginPath(),
                        I.rect(
                          (r.x + r.width) / n,
                          j - 1,
                          (u - (r.x + r.width)) / n,
                          R + 1
                        ),
                        (I.fillStyle = g),
                        I.fill()),
                      N === e.length - 1 &&
                      k === y - 1 &&
                      a &&
                      a.height > 0 &&
                      I.drawImage(
                        e[N],
                        0,
                        a.y,
                        u * n,
                        a.height,
                        0,
                        j + R,
                        u,
                        a.height / n
                      )),
                    j + R > c)
                ) {
                  (x = N),
                    (S =
                      N === e.length - 1 && k + 1 === y - 1
                        ? j + f - c
                        : j + r.height / n - c),
                    (j = 0);
                  break;
                }
                (j = S ? j + S : j + R), (S = 0);
              } else {
                if (
                  (N === e.length - 1 && k === y - 1
                    ? (T = S ? (h - Math.min(S, f)) * n : (h - f) * n)
                    : (S && ((T = (h - S) * n), (D = (R = S) * n)),
                      N === e.length - 1 && k !== y - 1 && (T = (h - f) * n)),
                    I.drawImage(e[N], P, T, O, D, A, j, Z, R),
                    j + R > c)
                ) {
                  (x = N),
                    (S =
                      N === e.length - 1 && k + 1 === y - 1
                        ? j + f - c
                        : j + h - c),
                    (j = 0);
                  break;
                }
                (j = S ? j + S : j + R), (S = 0);
              }
            }
            !(function (e) {
              C.toBlob(function (t) {
                if ((w.push({ blob: t, index: e }), w.length === y)) {
                  w.sort(function (e, t) {
                    return e.index - t.index;
                  });
                  s(
                    w.map(function (e) {
                      return e.blob;
                    })
                  );
                }
              });
            })(k);
          }
        }
        function ki(e, t) {
          if (t.height > 0 && t.width > 0) {
            var n = new Map(),
              r = document.createElement("canvas");
            (r.width = t.width), (r.height = t.height);
            var a = r.getContext("2d");
            a.drawImage(
              e,
              t.x,
              t.y,
              t.width,
              t.height,
              0,
              0,
              t.width,
              t.height
            );
            var i = null;
            try {
              i = a.getImageData(0, 0, t.width, t.height);
            } catch (d) { }
            if (i) {
              !(function (e, t) {
                function n(e, t, n) {
                  return (e << 16) + (t << 8) + n;
                }
                t = t || new Map();
                for (var r = 0, a = e.length; r < a; r += 4)
                  if (255 === e[r + 3]) {
                    var i = n(e[r], e[r + 1], e[r + 2]);
                    t.set(i, (t.get(i) || 0) + 1);
                  }
              })(i.data, n);
              var o = 0,
                s = 0,
                l = !1;
              return (
                n.forEach(function (e, t) {
                  e > o && ((o = e), (s = t), (l = !0));
                }),
                l
                  ? "rgb(" +
                  ((c = s),
                    (d = 255 & c),
                    (u = 255 & (c >>= 8)),
                    [255 & (c >>= 8), u, d]).join(", ") +
                  ")"
                  : "rgb(212,212,212)"
              );
            }
            return null;
          }
          var c, d, u;
        }
        function Ci() {
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
          var n = e.offsetWidth;
          t.style.overflow = "scroll";
          var r = e.offsetWidth;
          return (
            n == r && (r = t.clientWidth), document.body.removeChild(t), n - r
          );
        }
        window.requestFileSystem =
          window.requestFileSystem || window.webkitRequestFileSystem;
        var Ii = null;
        function Ni(e) {
          var t = "";
          switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
              t = "QUOTA_EXCEEDED_ERR";
              break;
            case FileError.NOT_FOUND_ERR:
              t = "NOT_FOUND_ERR";
              break;
            case FileError.SECURITY_ERR:
              t = "SECURITY_ERR";
              break;
            case FileError.INVALID_MODIFICATION_ERR:
              t = "INVALID_MODIFICATION_ERR";
              break;
            case FileError.INVALID_STATE_ERR:
              t = "INVALID_STATE_ERR";
              break;
            default:
              t = "Unknown Error";
          }
          return t;
        }
        const Pi = {
          fs: null,
          getFs: function () {
            return new Promise(function (e, t) {
              window.requestFileSystem(
                window.PERSISTENT,
                52428800,
                function (t) {
                  e(t);
                },
                function (e) {
                  t(e);
                }
              );
            });
          },
          save: function (e, t) {
            var n = this;
            return this.getFs().then(function (r) {
              return n.do_save(r, e, t);
            }, Ni);
          },
          append: function (e, t) {
            Ii
              ? Ii.write(e)
              : this.getFs().then(function (n) {
                n.root.getFile(
                  t,
                  { create: !1 },
                  function (t) {
                    t.createWriter(
                      function (t) {
                        (t.onwriteend = function (e) { }),
                          (t.onerror = function (e) { }),
                          t.write(e),
                          (Ii = t);
                      },
                      function (e) { }
                    );
                  },
                  function (e) { }
                );
              });
          },
          do_save: function (e, t, n) {
            return new Promise(function (r, a) {
              e.root.getFile(
                n,
                { create: !0 },
                function (e) {
                  e.createWriter(
                    function (n) {
                      (n.onwriteend = function (t) {
                        r(e.toURL());
                      }),
                        (n.onerror = function (e) {
                          a(e.toString());
                        }),
                        n.write(t),
                        (Ii = n);
                    },
                    function (e) {
                      a(e);
                    }
                  );
                },
                function (e) {
                  a(e);
                }
              );
            });
          },
          getFile: function (e) {
            var t = this;
            return new Promise(function (n, r) {
              t.getFs().then(function (t) {
                t.root.getFile(
                  e,
                  {},
                  function (e) {
                    e.file(function (e) {
                      n(e);
                    }, r);
                  },
                  r
                );
              });
            });
          },
        };
        var Ti = n(31795),
          Oi = n.n(Ti);
        function Di(e) {
          return (
            (Di =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            Di(e)
          );
        }
        function Ai(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Zi(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Ai(Object(n), !0).forEach(function (t) {
                Ri(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Ai(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Ri(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Ei(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Ui(e, t) {
          return (
            (Ui = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return (e.__proto__ = t), e;
              }),
            Ui(e, t)
          );
        }
        function _i(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () { })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Bi(e);
            if (t) {
              var a = Bi(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Fi(this, n);
          };
        }
        function Fi(e, t) {
          if (t && ("object" === Di(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Mi(e);
        }
        function Mi(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function Bi(e) {
          return (
            (Bi = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            Bi(e)
          );
        }
        var zi = chrome.extension.getBackgroundPage(),
          Li = {
            Browser: Oi().name + " " + Oi().version,
            OS: Oi().os.toString(),
            "Screen Size": window.screen.width + "x" + window.screen.height,
            "Viewport Size": window.innerWidth + "x" + window.innerHeight,
            "Pixel Ratio": "@" + window.devicePixelRatio + "x",
            "Zoom Level": 100 * zi.zoomLevel + "%",
          },
          Wi = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && Ui(e, t);
            })(l, e);
            var t,
              n,
              o,
              s = _i(l);
            function l(e) {
              var t, n;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, l),
                ((t = s.call(this, e)).state = {
                  tabTitle: zi.tabtitle,
                  tabUrl: zi.taburl,
                  annotateImageUrl: "",
                  saveImageUrl: "",
                  imageBlob: null,
                  info: {},
                  contentType:
                    ((n = localStorage.format),
                      "jpg" === n ? "image/jpeg" : "image/png"),
                  user: {
                    username: "",
                    userType: 0,
                    userEmail: "",
                    premiumLevel: "",
                  },
                  permissions: {},
                  currentPlan: {},
                  counts: {},
                  step: "edit",
                  isAddDateAndURL: !1,
                  isReported: !1,
                  menuType: zi.menuType,
                  avatarURL: "",
                }),
                (t.enterSave = t.enterSave.bind(Mi(t))),
                (t.backToEdit = t.backToEdit.bind(Mi(t))),
                (t.refreshUser = t.refreshUser.bind(Mi(t))),
                (t.quickReportIssueUrl = t.quickReportIssueUrl.bind(Mi(t))),
                (t.reportIssueUrl = t.reportIssueUrl.bind(Mi(t))),
                t
              );
            }
            return (
              (t = l),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this,
                      t = (this.Bg = chrome.extension.getBackgroundPage()),
                      n = localStorage.fileUrls
                        ? JSON.parse(localStorage.fileUrls)
                        : null,
                      r = t.menuType,
                      a = t.type,
                      i = t.dataURL,
                      o =
                        void 0 !== localStorage["after-capture-action"]
                          ? localStorage["after-capture-action"]
                          : "true" === localStorage["skip-annotate"]
                            ? "skipEntireCapture"
                            : "annotate";
                    if (this.state.tabUrl) {
                      var s =
                        "desktop" === this.state.menuType ||
                          "upload" === this.state.menuType
                          ? ""
                          : this.state.tabUrl;
                      (localStorage.tab_url = s), this.setState({ tabUrl: s });
                    } else
                      "desktop" !== this.state.menuType &&
                        "upload" !== this.state.menuType &&
                        ((s = localStorage.tab_url),
                          this.setState({ tabUrl: s }));
                    if (i.length) {
                      var l = "true" === localStorage["resize-for-retina"];
                      !(function (
                        e,
                        t,
                        n,
                        r,
                        a,
                        i,
                        o,
                        s,
                        l,
                        c,
                        d,
                        u,
                        h,
                        p,
                        f,
                        m,
                        g,
                        v
                      ) {
                        var y,
                          b,
                          x,
                          j,
                          w,
                          S,
                          k,
                          C,
                          I = 1,
                          N = document.createElement("canvas"),
                          P = N.getContext("2d"),
                          T = h ? Ci() : 0,
                          O = !1,
                          D = 1,
                          A = 0,
                          Z = 0;
                        function R() {
                          (N.width = O ? x - 2 : x), (N.height = j);
                        }
                        if (
                          (u &&
                            window.devicePixelRatio > 1 &&
                            (I = window.devicePixelRatio),
                            (y = c[0].width / I),
                            (b = c[0].height / I),
                            (k = c[0].width),
                            (C = c[0].height),
                            g && parseInt(g.height) > C + 10)
                        ) {
                          O = !0;
                          var E = g.width / k;
                          (D = Math.ceil(E)),
                            (g = U(E, g)).height > C &&
                            ((g.height = C), (g.width = k)),
                            p &&
                            (p = U(E, p)).y + p.height > C &&
                            (p.height = C - p.y),
                            f && (f = U(E, f)),
                            "selected" === e &&
                            ((a /= E), (i /= E), (n /= E), (r /= E));
                        }
                        function U(e, t) {
                          return (
                            (t.x = t.x / e),
                            (t.y = Math.ceil(t.y / e)),
                            (t.height = parseInt(t.height / e)),
                            (t.width = t.width / e + 2),
                            t
                          );
                        }
                        switch (
                        (window.innerWidth * window.devicePixelRatio - 16 >
                          k && (T = 0),
                          t)
                        ) {
                          case "visible":
                            "selected" === e
                              ? ((x = a / I),
                                (j = i / I),
                                (K = n),
                                (J = r),
                                (C = i),
                                (k = a))
                              : "desktop" === e || "upload" === e
                                ? ((x = y), (j = b), (K = 0), (J = 0))
                                : ((x = y - T * window.devicePixelRatio),
                                  (j = b),
                                  (K = 0),
                                  (J = 0),
                                  (k -= T * window.devicePixelRatio)),
                              R(),
                              P.drawImage(c[0], K, J, k, C, 0, 0, x, j),
                              "jpg" === d
                                ? N.toBlob(
                                  function (e) {
                                    v(e, {
                                      width: N.width,
                                      height: N.height,
                                    });
                                  },
                                  "image/jpeg",
                                  1
                                )
                                : N.toBlob(function (e) {
                                  v(e, { width: N.width, height: N.height });
                                });
                            break;
                          case "entire":
                            var _ = (Z = A = 0),
                              F = c.length,
                              M = o,
                              B = Math.round(F / M),
                              z = null,
                              L = null;
                            m &&
                              m.forEach(function (e) {
                                e &&
                                  e.fill.width > 0 &&
                                  e.fill.height > 0 &&
                                  (0 == e.fill.x
                                    ? (z = ki(c[0], e.sample))
                                    : e.fill.x > 0 && (L = ki(c[0], e.sample)));
                              });
                            var W = function e(t, n, r, a, i, o, s, l, u) {
                              if (t) {
                                if (p) {
                                  var h = p.height;
                                  0 === _
                                    ? P.drawImage(
                                      t,
                                      0,
                                      0,
                                      a,
                                      g.height,
                                      0,
                                      0,
                                      a / I,
                                      g.height / I
                                    )
                                    : ((s =
                                      (g.height - D + (_ - 1) * (h - D)) /
                                      I),
                                      (r = p.y),
                                      (u = h / I),
                                      (i = h),
                                      _ === B - 1 &&
                                      ((r = p.y + h - w),
                                        (u = w / I),
                                        (i = w)),
                                      P.drawImage(
                                        t,
                                        p.x,
                                        r,
                                        p.width,
                                        i,
                                        p.x / I,
                                        s,
                                        p.width / I,
                                        u
                                      ),
                                      p.x > 0 &&
                                      z &&
                                      (P.beginPath(),
                                        P.rect(0, s - 1, p.x / I, u + 1),
                                        (P.fillStyle = z),
                                        P.fill()),
                                      p.x + p.width < a &&
                                      L &&
                                      (P.beginPath(),
                                        P.rect(
                                          (p.x + p.width) / I,
                                          s - 1,
                                          (a - (p.x + p.width)) / I,
                                          u + 1
                                        ),
                                        (P.fillStyle = L),
                                        P.fill()),
                                      _ === B - 1 &&
                                      f &&
                                      f.height > 0 &&
                                      P.drawImage(
                                        c[0],
                                        0,
                                        f.y,
                                        a,
                                        f.height,
                                        0,
                                        s + u,
                                        a / I,
                                        f.height / I
                                      )),
                                    _++;
                                } else
                                  (s = _ * b),
                                    _ == B - 1 &&
                                    ((r = (b - w) * I), (i = (u = w) * I)),
                                    P.drawImage(t, n, r, a, i, o, s, l, u),
                                    ++_ > B - 1 && V();
                                e(c[++A], n, r, a, i, o, s, l, u);
                              } else
                                "jpg" === d
                                  ? N.toBlob(
                                    function (e) {
                                      v(e, {
                                        width: N.width,
                                        height: N.height,
                                      });
                                    },
                                    "image/jpeg",
                                    1
                                  )
                                  : N.toBlob(function (e) {
                                    v(e, {
                                      width: N.width,
                                      height: N.height,
                                    });
                                  });
                            },
                              H = function e(t, n, r, a, i, o, s, l, d, u) {
                                (o = Z * y),
                                  Z == M - 1 && ((n = y - S), (l = S)),
                                  P.drawImage(t, n, r, a, i, o, s, l, d),
                                  Z < M - 1 &&
                                  e(c[++Z], n, r, a, i, o, s, l, d);
                              },
                              V = function () {
                                ++Z > M - 1 ||
                                  (Z == M - 1
                                    ? ((K = y - S),
                                      (q = x - Z * y),
                                      ($ = Z * y))
                                    : ((K = 0), (q = y), ($ = Z * y)),
                                    (J = 0),
                                    (X = b),
                                    (Q = 0),
                                    W(
                                      c[(A = (_ = 0) + Z * B)],
                                      K,
                                      J,
                                      k,
                                      C,
                                      $,
                                      Q,
                                      q,
                                      X
                                    ));
                              };
                            if (!l.x && l.y) {
                              if (
                                ((B = F),
                                  (w = b * s.y),
                                  (x = "selected" == e ? a / I : y),
                                  p)
                              ) {
                                w = p.height * s.y;
                                var G = p.height,
                                  Y = g.height;
                                (j = w
                                  ? 1 === B
                                    ? Y / I
                                    : (Y + (B > 2 ? (B - 2) * G : 0) + w) / I
                                  : (Y + (B - 1) * G) / I),
                                  f && f.height > 0 && (j += f.height / I);
                              } else j = w ? b * (B - 1) + w : b * B;
                              if (j > wi)
                                return void Si(c, s.y, I, p, f, m, g, v);
                              R();
                              var K = 0,
                                q = y,
                                $ = 0,
                                J = 0,
                                X = b,
                                Q = 0;
                              "selected" == e && n && (K = n),
                                W(c[A], K, J, k, C, $, Q, q, X);
                            }
                            l.x &&
                              !l.y &&
                              ((M = F),
                                (S = y * s.x),
                                (j = "selected" == e ? request.centerH : b),
                                (x = S ? y * (M - 1) + S : y * M),
                                R(),
                                (K = 0),
                                (q = y),
                                ($ = 0),
                                (J = 0),
                                (X = b),
                                (Q = 0),
                                H(c[A], K, J, k, C, $, Q, q, X)),
                              l.x &&
                              l.y &&
                              ((S = y * s.x),
                                (w = b * s.y),
                                "selected" == e
                                  ? ((x = request.centerW),
                                    (j = request.centerH))
                                  : ((x = S ? y * (M - 1) + S : y * M),
                                    (j = w ? b * (B - 1) + w : b * B)),
                                R(),
                                (K = 0),
                                (q = y),
                                ($ = 0),
                                (J = 0),
                                (X = b),
                                (Q = 0),
                                W(c[A], K, J, k, C, $, Q, q, X));
                        }
                      })(
                        r,
                        a,
                        t.centerOffX,
                        t.centerOffY,
                        t.centerW,
                        t.centerH,
                        t.counter,
                        t.ratio,
                        t.scrollBar,
                        i,
                        localStorage.format,
                        l,
                        t.contentCanScroll,
                        t.contentClip,
                        t.bottomClip,
                        t.bgRegions,
                        t.topCapturePostion,
                        function (n, a) {
                          if (x(n))
                            var i = n.map(function (e) {
                              return URL.createObjectURL(e);
                            });
                          else i = URL.createObjectURL(n);
                          var s =
                            "skipAnnotate" === o ||
                            (("skipEntireCapture" === o ||
                              "true" === localStorage["skip-annotate"]) &&
                              "entire" === r) ||
                            x(n);
                          if (s)
                            if ("true" !== localStorage["add-url"] || x(n)) {
                              var l = {
                                saveImageUrl: i,
                                imageBlob: n,
                                step: s ? "save" : "edit",
                              };
                              x(n) ||
                                setTimeout(function () {
                                  var t = new FileReader();
                                  t.readAsDataURL(n),
                                    (t.onloadend = function () {
                                      var n = t.result;
                                      e.setState(
                                        { saveImageUrl: n },
                                        function () {
                                          t = null;
                                        }
                                      );
                                    });
                                }, 1200);
                            } else
                              (i =
                                "desktop" === t.menuType ? "" : e.state.tabUrl),
                                E(n, a, i, function (t) {
                                  var n = t,
                                    r = URL.createObjectURL(n);
                                  e.setState({
                                    imageBlob: n,
                                    saveImageUrl: r,
                                    info: a,
                                    isAddDateAndURL: !0,
                                    step: "save",
                                  }),
                                    setTimeout(function () {
                                      var t = new FileReader();
                                      t.readAsDataURL(n),
                                        (t.onloadend = function () {
                                          var n = t.result;
                                          e.setState(
                                            { saveImageUrl: n },
                                            function () {
                                              t = null;
                                            }
                                          );
                                        });
                                    }, 1200);
                                });
                          else l = { annotateImageUrl: i };
                          e.setState(l),
                            setTimeout(function () {
                              var e = x(n) ? n : [n],
                                t = [];
                              e.forEach(function (n, r) {
                                Pi.save(
                                  n,
                                  "currentScreenshot" + r + ".png"
                                ).then(function (n) {
                                  t.push({ url: n, index: r }),
                                    t.length === e.length &&
                                    (t.sort(function (e, t) {
                                      return e.index - t.index;
                                    }),
                                      (localStorage.fileUrls = JSON.stringify(
                                        t.map(function (e) {
                                          return e.url;
                                        })
                                      )),
                                      chrome.runtime.sendMessage({
                                        action: "clearDataURL",
                                      }));
                                });
                              });
                            }, 1e3);
                        }
                      );
                    } else if (n && !i.length) {
                      if (
                        "skipAnnotate" === o ||
                        (("skipEntireCapture" === o ||
                          "true" === localStorage["skip-annotate"]) &&
                          "entire" === a) ||
                        n.length > 1
                      )
                        var c = {
                          saveImageUrl: n.length > 1 ? n : n[0],
                          step: "save",
                        };
                      else c = { annotateImageUrl: n[0] };
                      this.setState(c);
                    }
                    e.refreshUser(),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "visible" === document.visibilityState &&
                            e.refreshUser();
                        }
                      ),
                      chrome.storage.sync.get(["captureCount"], function (e) {
                        e.captureCount
                          ? chrome.storage.sync.set({
                            captureCount:
                              (isNaN(parseInt(e.captureCount))
                                ? 0
                                : parseInt(e.captureCount)) + 1,
                          })
                          : chrome.storage.sync.set({ captureCount: 1 });
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    var e = this;
                    document.removeEventListener(
                      "visibilitychange",
                      function () {
                        "visible" === document.visibilityState &&
                          e.refreshUser();
                      }
                    );
                  },
                },
                {
                  key: "reportIssueUrl",
                  value: function () {
                    var e = this;
                    if (this.state.isReported)
                      i.ZP.warning(
                        "You have reported a problem with this page successfully."
                      );
                    else {
                      var t = {};
                      (t["Extension Version"] =
                        chrome.runtime.getManifest().version),
                        localStorage.last_info &&
                        (t = Zi(
                          Zi({}, t),
                          JSON.parse(localStorage.last_info)
                        )),
                        t.Browser ||
                        (t.Browser = Oi().name + " " + Oi().version),
                        t.OS || (t.OS = Oi().os.toString()),
                        t["Screen Size"] ||
                        (t["Screen Size"] =
                          window.screen.width + "x" + window.screen.height);
                      var n = {
                        name: this.state.user.username
                          ? this.state.user.username
                          : "user",
                        subject: "Full Page capture Issue",
                        content: (function (e, t) {
                          var n = "";
                          for (var r in ((n += e + "<br/><br/><br/><hr>"), t))
                            n += "<b>" + r + "</b>: " + t[r] + "<br/>";
                          return n;
                        })(
                          this.state.tabTitle +
                          " " +
                          this.state.tabUrl +
                          "\nmenuType: " +
                          zi.menuType,
                          t
                        ),
                      };
                      this.state.user.userEmail &&
                        !/privaterelay.appleid.com/.test(
                          this.state.user.userEmail
                        )
                        ? (n.email = this.state.user.userEmail)
                        : (n.email = "report_fullpage@aws.cn"),
                        (function (e) {
                          return ot({
                            method: "POST",
                            url: "/common/contact_us",
                            data: e,
                          });
                        })(n)
                          .then(function () {
                            e.setState({ isReported: !0 }),
                              a.Z.open({
                                message: "Thank you :)",
                                description:
                                  "Your report has been sent successfully. We will look into this and find a solution as soon as possible.",
                                duration: 2,
                              });
                          })
                          .catch(function () {
                            i.ZP.warning(
                              "Submission failed. Please retry or copy the page's url to send an email to care@awesomescreenshot.com."
                            );
                          });
                    }
                  },
                },
                {
                  key: "quickReportIssueUrl",
                  value: function () {
                    var e = this;
                    r.Z.confirm({
                      title: "Not properly captured?",
                      onOk: function () {
                        e.reportIssueUrl();
                      },
                      okText: "Report",
                      okType: "primary",
                    });
                  },
                },
                {
                  key: "refreshUser",
                  value: function () {
                    var e = this;
                    st().then(function (t) {
                      t
                        ? (t.username === e.state.user.username &&
                          t.type === e.state.user.userType &&
                          t.mail === e.state.user.userEmail &&
                          t.premiumLevel === e.state.user.premiumLevel) ||
                        (e.setState({
                          user: {
                            username: t.username,
                            userType: t.type,
                            userEmail: t.mail,
                            premiumLevel: t.premiumLevel,
                          },
                        }),
                          ot({ method: "GET", url: "/user/info" }).then(
                            function (t) {
                              e.setState({
                                permissions: Object.keys(t.permissions).map(key => ({ [key]: true })).reduce((currVl, prevVl) => ({ ...prevVl, ...currVl }), {}),
                                currentPlan: t.premium.currentPlan,
                                counts: t.counts,
                                avatarURL: t.info.avatarURL,
                              });
                            }
                          ),
                          zi.refreshUserInfo())
                        : (e.setState({
                          user: {
                            username: "",
                            userType: 0,
                            userEmail: "",
                            premiumLevel: "",
                          },
                          currentPlan: {},
                          permissions: { empty: !0 },
                        }),
                          (localStorage.currentuploadtab = -1),
                          (localStorage.currentimageid = -1),
                          localStorage.removeItem("defaultSavePlace"));
                    });
                  },
                },
                {
                  key: "enterSave",
                  value: function (e, t, n) {
                    zi.googleEvent(
                      "click_done",
                      this.state.user && this.state.user.username
                        ? "sigined"
                        : "nosigin"
                    );
                    var r = this;
                    if (window.location.href.match(/gmail=(.*)/)) {
                      var a = parseInt(
                        window.location.href.match(/gmail=(.*)/)[1]
                      ),
                        i = new FileReader();
                      return (
                        i.readAsDataURL(t),
                        void (i.onloadend = function () {
                          var e = i.result;
                          chrome.tabs.sendMessage(a, {
                            action: "insertImage",
                            dataURL: e,
                          }),
                            setTimeout(function () {
                              window.close();
                            }, 0);
                        })
                      );
                    }
                    Object.keys(n.border).length > 0
                      ? R(t, n, "extension", function (e) {
                        var t = e,
                          a = URL.createObjectURL(t);
                        r.setState({
                          imageBlob: t,
                          saveImageUrl: a,
                          info: n,
                          step: "save",
                        }),
                          setTimeout(function () {
                            var e = new FileReader();
                            e.readAsDataURL(t),
                              (e.onloadend = function () {
                                var t = e.result;
                                r.setState({ saveImageUrl: t }, function () {
                                  e = null;
                                });
                              });
                          }, 1200);
                      })
                      : "true" !== localStorage["add-url"] ||
                        r.state.isAddDateAndURL
                        ? (r.setState({
                          imageBlob: t,
                          saveImageUrl: e,
                          info: n,
                          step: "save",
                        }),
                          setTimeout(function () {
                            var e = new FileReader();
                            e.readAsDataURL(t),
                              (e.onloadend = function () {
                                var t = e.result;
                                r.setState({ saveImageUrl: t }, function () {
                                  e = null;
                                });
                              });
                          }, 1200))
                        : ((e =
                          "desktop" === zi.menuType ? "" : this.state.tabUrl),
                          E(t, n, e, function (e) {
                            var t = e,
                              a = URL.createObjectURL(t);
                            r.setState({
                              imageBlob: t,
                              saveImageUrl: a,
                              info: n,
                              step: "save",
                            }),
                              setTimeout(function () {
                                var e = new FileReader();
                                e.readAsDataURL(t),
                                  (e.onloadend = function () {
                                    var t = e.result;
                                    r.setState({ saveImageUrl: t }, function () {
                                      e = null;
                                    });
                                  });
                              }, 1200);
                          }));
                  },
                },
                {
                  key: "backToEdit",
                  value: function () {
                    var e = { step: "edit" };
                    this.state.annotateImageUrl ||
                      (e.annotateImageUrl = this.state.saveImageUrl),
                      this.setState(e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = M()("sub-page", {
                      active: "edit" === this.state.step,
                    }),
                      t = M()("sub-page", {
                        active: "save" === this.state.step,
                      });
                    return this.state.saveImageUrl ||
                      this.state.annotateImageUrl
                      ? (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)(Je, {
                            imageUrl: this.state.annotateImageUrl,
                            handleFinishEdit: this.enterSave,
                            permissions: this.state.permissions,
                            className: e,
                            type: "ext",
                            contentType: this.state.contentType,
                            isReported: this.state.isReported,
                            menuType: this.state.menuType,
                            tabUrl: this.state.tabUrl,
                            quickReport: this.quickReportIssueUrl,
                          }),
                          (0, v.jsx)(ji, {
                            user: this.state.user,
                            backToEdit: this.backToEdit,
                            imageUrl: this.state.saveImageUrl,
                            imageBlob: this.state.imageBlob,
                            tabTitle: this.state.tabTitle,
                            tabUrl: this.state.tabUrl,
                            info: this.state.info,
                            imageInfo: Li,
                            refreshUser: this.refreshUser,
                            step: this.state.step,
                            className: t,
                            permissions: this.state.permissions,
                            currentPlan: this.state.currentPlan,
                            contentType: this.state.contentType,
                            isReported: this.state.isReported,
                            menuType: this.state.menuType,
                            quickReport: this.quickReportIssueUrl,
                            counts: this.state.counts,
                            avatar: this.state.avatarURL,
                          }),
                        ],
                      })
                      : (0, v.jsx)("div", {
                        className: "loading-page",
                        children: (0, v.jsxs)("div", {
                          className: "center",
                          children: [
                            (0, v.jsx)("div", {
                              className: "loading-spinner",
                              children: (0, v.jsxs)("div", {
                                className: "spinner",
                                children: [
                                  (0, v.jsx)("div", { className: "rect1" }),
                                  (0, v.jsx)("div", { className: "rect2" }),
                                  (0, v.jsx)("div", { className: "rect3" }),
                                  (0, v.jsx)("div", { className: "rect4" }),
                                  (0, v.jsx)("div", { className: "rect5" }),
                                ],
                              }),
                            }),
                            (0, v.jsxs)("div", {
                              className: "brand",
                              children: [
                                (0, v.jsx)("div", { className: "logo" }),
                                "AWESOME SCREENSHOT",
                              ],
                            }),
                          ],
                        }),
                      });
                  },
                },
              ]),
              n && Ei(t.prototype, n),
              o && Ei(t, o),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              l
            );
          })(o.Component);
        s.render((0, v.jsx)(Wi, {}), document.getElementById("edit-page"));
      },
    },
    o = {};
  function s(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = i),
    (e = []),
    (s.O = (t, n, r, a) => {
      if (!n) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, r, a] = e[d], o = !0, l = 0; l < n.length; l++)
            (!1 & a || i >= a) && Object.keys(s.O).every((e) => s.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((o = !1), a < i && (i = a));
          if (o) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
      e[d] = [n, r, a];
    }),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var a = Object.create(null);
      s.r(a);
      var i = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var o = 2 & r && e; "object" == typeof o && !~t.indexOf(o); o = n(o))
        Object.getOwnPropertyNames(o).forEach((t) => (i[t] = () => e[t]));
      return (i.default = () => e), s.d(a, i), a;
    }),
    (s.d = (e, t) => {
      for (var n in t)
        s.o(t, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), []))),
    (s.u = (e) => "javascripts/bundles/" + e + ".bundle.js"),
    (s.miniCssF = (e) => { }),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (a = "awesomescreenshot-front:"),
    (s.l = (e, t, n, i) => {
      if (r[e]) r[e].push(t);
      else {
        var o, l;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), d = 0;
            d < c.length;
            d++
          ) {
            var u = c[d];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == a + n
            ) {
              o = u;
              break;
            }
          }
        o ||
          ((l = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            s.nc && o.setAttribute("nonce", s.nc),
            o.setAttribute("data-webpack", a + n),
            (o.src = e)),
          (r[e] = [t]);
        var h = (t, n) => {
          (o.onerror = o.onload = null), clearTimeout(p);
          var a = r[e];
          if (
            (delete r[e],
              o.parentNode && o.parentNode.removeChild(o),
              a && a.forEach((e) => e(n)),
              t)
          )
            return t(n);
        },
          p = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = h.bind(null, o.onerror)),
          (o.onload = h.bind(null, o.onload)),
          l && document.head.appendChild(o);
      }
    }),
    (s.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + "");
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = e + "../../");
    })(),
    (() => {
      var e = { 922: 0 };
      (s.f.j = (t, n) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var a = new Promise((n, a) => (r = e[t] = [n, a]));
            n.push((r[2] = a));
            var i = s.p + s.u(t),
              o = new Error();
            s.l(
              i,
              (n) => {
                if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = a),
                    (o.request = i),
                    r[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (s.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
        var r,
          a,
          [i, o, l] = n,
          c = 0;
        if (i.some((t) => 0 !== e[t])) {
          for (r in o) s.o(o, r) && (s.m[r] = o[r]);
          if (l) var d = l(s);
        }
        for (t && t(n); c < i.length; c++)
          (a = i[c]), s.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        return s.O(d);
      },
        n = (self.webpackChunkawesomescreenshot_front =
          self.webpackChunkawesomescreenshot_front || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (s.nc = void 0),
    s.O(
      void 0,
      [
        714, 769, 100, 71, 469, 247, 141, 651, 655, 505, 175, 873, 856, 233,
        699,
      ],
      () => s(33505)
    );
  var l = s.O(
    void 0,
    [714, 769, 100, 71, 469, 247, 141, 651, 655, 505, 175, 873, 856, 233, 699],
    () => s(43240)
  );
  l = s.O(l);
})();
