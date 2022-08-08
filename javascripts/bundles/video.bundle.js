(() => {
  "use strict";
  var e,
    n,
    t,
    o = {
      90337: (e, n, t) => {
        t(21209);
        var o = t(19181),
          r = (t(87687), t(27049)),
          i = (t(72657), t(88229)),
          a = (t(89771), t(23642)),
          c = (t(91826), t(3074)),
          s = (t(69754), t(55026)),
          l = (t(50904), t(38648)),
          d = (t(45186), t(71577)),
          u = (t(84968), t(29097)),
          m = (t(61348), t(78559)),
          p = (t(53890), t(50277)),
          h = t(67294),
          f = t(73935),
          g = t(2877),
          v = t(88485),
          y = t(9669),
          j = t.n(y),
          x = (t(27484), t(40705), t(28374), t(85893));
        function b(e) {
          window.open(e);
        }
        function w(e) {
          var n = document.createElement("textarea");
          (n.value = e),
            (n.style.position = "absolute"),
            (n.style.top = "-999999px"),
            document.body.appendChild(n),
            n.select(),
            document.execCommand("copy"),
            document.body.removeChild(n);
        }
        function I(e) {
          var n = e.filename;
          "true" === localStorage["save-as"] &&
            localStorage.download_directory &&
            (e.filename = localStorage.download_directory + "/" + e.filename),
            chrome.downloads.download(e, function (t) {
              (void 0 === t || chrome.runtime.lastError) &&
                (function (e, n) {
                  var t = document.createElement("a"),
                    o = document.createEvent("MouseEvents");
                  o.initMouseEvent(
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
                    t.setAttribute("href", e),
                    t.setAttribute("download", n),
                    (t.rel = "noopener"),
                    t.dispatchEvent(o);
                })(e.url, n);
            });
        }
        var N = "https://www.awesomescreenshot.com/api/v1",
          k = [
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
          S = j().create({ baseURL: N });
        function Z() {
          return ((e = N),
            (n = [
              "screenshot_personal_fullname",
              "screenshot_personal_type",
              "screenshot_personal_mail",
              "screenshot_personal_premium_level",
            ]),
            new Promise(function (t) {
              chrome.cookies.getAll({ url: e }, function (e) {
                if ("string" == typeof n) {
                  var o = e.filter(function (e) {
                    return e.name === n;
                  });
                  t(o);
                } else if (Array.isArray(n)) {
                  var r = e.filter(function (e) {
                    return -1 !== n.indexOf(e.name);
                  });
                  t(r);
                }
              });
            })).then(function (e) {
              if (e.length) {
                var n = {};
                return (
                  e.forEach(function (e) {
                    n[e.name] = e;
                  }),
                  {
                    username: decodeURI(n.screenshot_personal_fullname.value),
                    type: n.screenshot_personal_type.value,
                    mail: n.screenshot_personal_mail.value,
                    premiumLevel: n.screenshot_personal_premium_level
                      ? n.screenshot_personal_premium_level.value
                      : "",
                  }
                );
              }
              return null;
            });
          var e, n;
        }
        function O() {
          return S({ method: "GET", url: "/user/info" });
        }
        function C(e) {
          return S({ method: "POST", url: "/user/stuff", data: { type: e } });
        }
        S.interceptors.request.use(
          function (e) {
            return e;
          },
          function () {
            return (
              s.ZP.error("Network error, Request timeout!"), Promise.reject()
            );
          }
        ),
          S.interceptors.response.use(
            function (e) {
              if (e && e.data && 1 === e.data.code)
                return Promise.resolve(e.data.data);
              if ((e.data.code, 2001 === e.data.code))
                return Promise.reject(e.data);
              if (1201 === e.data.code) return Promise.reject(e.data);
              if (e.data.msg) {
                if (-1 !== k.indexOf(e.config.url))
                  return Promise.reject(e.data.msg);
                if (
                  (s.ZP.error(e.data.msg),
                    "/pricing" !== window.location.pathname)
                )
                  return Promise.reject(e.data.msg);
              }
            },
            function (e) {
              if (e.response) {
                var n = e.response.status;
                s.ZP.error("Network error! Error Code " + n);
              }
            }
          );
        var P = t(16165),
          E = t(94184),
          _ = t.n(E),
          F = (t(97856), t(71472)),
          R = t(52425),
          U = t(19340),
          A = t(3480),
          D = t(25737),
          T = t(18179),
          M = t(94149),
          L = t(10467),
          B = t(553),
          V = t(45616),
          z = t(13070),
          W = t(54058),
          Y = t(63212),
          q = t(11034),
          G = t(42461),
          H = t(72262),
          Q = t(26344),
          $ = t(10258),
          J = t(83734),
          K = t(42715),
          X = t(92312),
          ee = t(8957),
          ne = t(95013),
          te = t(74752),
          oe = t(52053),
          re = t(28737),
          ie = t(47550),
          ae = t(99777),
          ce = t(4842),
          se = t(63573),
          le = t(33271),
          de = t(5649),
          ue = t(49748),
          me = t(29555),
          pe = t(50377),
          he = t(13640),
          fe = t(45131),
          ge = t(74886),
          ve = t(76730),
          ye = t(88816),
          je = t(3671),
          xe = t(83056),
          be = t(14573),
          we = t(78444),
          Ie = t(82124),
          Ne = t(16040),
          ke = t(86580),
          Se = t(9209),
          Ze = t(71356),
          Oe = t(50717),
          Ce = t(82145),
          Pe = t(62611),
          Ee = t(30824),
          _e = t(27302),
          Fe = t(49361),
          Re = t(17122),
          Ue = t(16215),
          Ae = t(44293),
          De = t(58399),
          Te = t(43898),
          Me = t(3068),
          Le = t(14045),
          Be = t(12228),
          Ve = t(89171),
          ze = t(795),
          We = t(92562),
          Ye = t(58755),
          qe = t(65470),
          Ge = t(58650),
          He = t(74987),
          Qe = t(82027),
          $e = t(83375),
          Je = t(77532),
          Ke = t(9002),
          Xe = t(31802),
          en = t(69584),
          nn = t(52806),
          tn = t(44794),
          on = t(49476),
          rn = t(5654),
          an = t(7672),
          cn = t(32319),
          sn = t(29947),
          ln = t(55300),
          dn = t(83555),
          un = t(62378),
          mn = t(32103),
          pn = t(75627),
          hn = t(12371),
          fn = t(36148),
          gn = t(43285),
          vn = t(27307),
          yn = t(50779),
          jn = t(8410),
          xn = t(59220),
          bn = t(23594),
          wn = t(32878),
          In = t(92404),
          Nn = t(14737),
          kn = t(84429),
          Sn = t(52521),
          Zn = t(99648),
          On = t(33658),
          Cn = t(2557),
          Pn = t(12999),
          En = t(3327),
          _n = t(17296),
          Fn = t(11389),
          Rn = t(18977),
          Un = t(20937),
          An = t(86801),
          Dn = t(1470),
          Tn = t(84297);
        function Mn(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function Ln(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? Mn(Object(t), !0).forEach(function (n) {
                Bn(e, n, t[n]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : Mn(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function Bn(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[n] = t),
            e
          );
        }
        function Vn(e) {
          var n = _()("svg-icon", e.className);
          return (0, x.jsx)(P.Z, Ln(Ln({}, e), {}, { className: n }));
        }
        var zn = {
          AddImageIcon: F.Z,
          AddIcon: R.Z,
          AnnotateIcon: U.Z,
          ArrowIcon: A.Z,
          CloseIcon: D.Z,
          CommentIcon: T.Z,
          CopyLinkIcon: M.Z,
          CopyIcon: L.Z,
          DownloadIcon: B.Z,
          EmbedIcon: V.Z,
          FeedbackIcon: z.Z,
          FolderIcon: W.Z,
          ImagesIcon: Y.Z,
          ItemsIcon: q.Z,
          LoadingMoreIcon: G.Z,
          MoreIcon: H.Z,
          MoveFolderIcon: Q.Z,
          NotificationIcon: $.Z,
          OpenFolderIcon: J.Z,
          PutBackIcon: K.Z,
          RenameIcon: X.Z,
          RightIcon: ee.Z,
          TagIcon: ne.Z,
          TrashFilledIcon: te.Z,
          TrashIcon: oe.Z,
          VideosIcon: re.Z,
          AddTextIcon: ie.Z,
          CutIcon: ae.Z,
          ProIcon: ce.Z,
          PullIcon: se.Z,
          ReduceIcon: le.Z,
          MoreDotIcon: de.Z,
          PlayIcon: me.Z,
          PauseIcon: pe.Z,
          FullScreenIcon: he.Z,
          NormalScreenIcon: fe.Z,
          PIPIcon: ge.Z,
          ReplayIcon: ve.Z,
          VolumeCloseIcon: ye.Z,
          VolumeHighIcon: je.Z,
          VolumeLowIcon: xe.Z,
          SharedIcon: be.Z,
          StepForwardIcon: we.Z,
          StepBackIcon: Ie.Z,
          CommentBubbleIcon: Ne.Z,
          MentionMsgIcon: ke.Z,
          VideoEditorIcon: ue.Z,
          EmojiIcon: Se.Z,
          RecordDesktopIcon: Ze.Z,
          RecordCameraIcon: Oe.Z,
          PricingTagIcon: Ce.Z,
          LightThemeIcon: Pe.Z,
          DarkThemeIcon: Ee.Z,
          AutoThemeIcon: _e.Z,
          NewTabIcon: Fe.Z,
          MicIcon: Re.Z,
          HDIcon: Ue.Z,
          CameraIcon: Ae.Z,
          ChromeIcon: De.Z,
          EdgeIcon: Te.Z,
          GoogleIcon: Me.Z,
          BrushIcon: Le.Z,
          SecurityIcon: Ve.Z,
          SyncIcon: Be.Z,
          ChannelIcon: ze.Z,
          SettingIcon: We.Z,
          MemberIcon: Ye.Z,
          PersonIcon: qe.Z,
          QuestionMarkIcon: Ge.Z,
          CardIcon: He.Z,
          SharedMeIcon: Qe.Z,
          MeIcon: $e.Z,
          StarIcon: Je.Z,
          EmptyIcon: Ke.Z,
          PdfIcon: Xe.Z,
          PrinterIcon: en.Z,
          CopyImageIcon: nn.Z,
          SmileIcon: tn.Z,
          CrownIcon: on.Z,
          CrownBgIcon: rn.Z,
          SharedMeFilledIcon: an.Z,
          WarningIcon: cn.Z,
          BilligIcon: sn.Z,
          StarFolderIcon: ln.Z,
          MeFilledIcon: dn.Z,
          AtIcon: un.Z,
          StickerIcon: Se.Z,
          CameraNoIcon: mn.Z,
          TrashRecordIcon: pn.Z,
          StopRecordIcon: hn.Z,
          ActionBigIcon: gn.Z,
          ActionMiniIcon: fn.Z,
          CameraRecordIcon: vn.Z,
          CheckboxIcon: yn.Z,
          DragIcon: jn.Z,
          AddMemberIcon: xn.Z,
          RecordPauseIcon: bn.Z,
          RecordPlayIcon: wn.Z,
          LockIcon: In.Z,
          EnterpriseIcon: Nn.Z,
          DomainIcon: kn.Z,
          SsoIcon: Sn.Z,
          DownloadExtIcon: Zn.Z,
          CopyExtIcon: On.Z,
          PDFExtIcon: Cn.Z,
          PrintExtIcon: Pn.Z,
          BackupExtIcon: En.Z,
          OutIcon: _n.Z,
          ShareIcon: Fn.Z,
          DescIcon: Rn.Z,
          FolderFilledIcon: Un.Z,
          VideoFolderIcon: An.Z,
          VideoFilmIcon: Dn.Z,
          VideoEditIcon: Tn.Z,
        },
          Wn = {},
          Yn = function (e) {
            (Wn[e] = (0, h.memo)(function (n) {
              return (0, x.jsx)(Vn, Ln({ component: zn[e] }, n));
            })),
              (Wn[e].displayName = e);
          };
        for (var qn in zn) Yn(qn);
        Wn.AddImageIcon, Wn.AddIcon, Wn.AnnotateIcon, Wn.ArrowIcon;
        var Gn = Wn.CloseIcon,
          Hn = (Wn.CommentIcon, Wn.CopyLinkIcon),
          Qn = (Wn.CopyIcon, Wn.DownloadIcon, Wn.EmbedIcon, Wn.FeedbackIcon),
          $n =
            (Wn.FolderIcon,
              Wn.ImagesIcon,
              Wn.ItemsIcon,
              Wn.LoadingMoreIcon,
              Wn.MoreIcon),
          Jn =
            (Wn.MoveFolderIcon,
              Wn.NotificationIcon,
              Wn.OpenFolderIcon,
              Wn.PutBackIcon,
              Wn.RenameIcon),
          Kn = Wn.RightIcon,
          Xn = (Wn.TagIcon, Wn.TrashFilledIcon, Wn.TrashIcon),
          et =
            (Wn.VideosIcon,
              Wn.AddTextIcon,
              Wn.CutIcon,
              Wn.ProIcon,
              Wn.PullIcon,
              Wn.ReduceIcon,
              Wn.MoreDotIcon,
              Wn.PlayIcon,
              Wn.PauseIcon,
              Wn.FullScreenIcon,
              Wn.NormalScreenIcon,
              Wn.PIPIcon,
              Wn.ReplayIcon,
              Wn.VolumeCloseIcon,
              Wn.VolumeHighIcon,
              Wn.VolumeLowIcon,
              Wn.SharedIcon,
              Wn.StepForwardIcon,
              Wn.StepBackIcon,
              Wn.CommentBubbleIcon,
              Wn.MentionMsgIcon,
              Wn.VideoEditorIcon,
              Wn.EmojiIcon,
              Wn.RecordDesktopIcon,
              Wn.RecordCameraIcon,
              Wn.PricingTagIcon,
              Wn.LightThemeIcon,
              Wn.DarkThemeIcon,
              Wn.AutoThemeIcon,
              Wn.NewTabIcon,
              Wn.MicIcon,
              Wn.HDIcon,
              Wn.CameraIcon,
              Wn.ChromeIcon,
              Wn.EdgeIcon,
              Wn.GoogleIcon),
          nt =
            (Wn.BrushIcon,
              Wn.SecurityIcon,
              Wn.SyncIcon,
              Wn.ChannelIcon,
              Wn.SettingIcon),
          tt =
            (Wn.MemberIcon,
              Wn.PersonIcon,
              Wn.QuestionMarkIcon,
              Wn.CardIcon,
              Wn.SharedMeIcon,
              Wn.MeIcon),
          ot =
            (Wn.StarIcon,
              Wn.EmptyIcon,
              Wn.PdfIcon,
              Wn.PrinterIcon,
              Wn.CopyImageIcon,
              Wn.SmileIcon,
              Wn.CrownIcon),
          rt = (Wn.CrownBgIcon, Wn.SharedMeFilledIcon, Wn.WarningIcon),
          it =
            (Wn.BilligIcon,
              Wn.StarFolderIcon,
              Wn.MeFilledIcon,
              Wn.AtIcon,
              Wn.StickerIcon,
              Wn.CameraNoIcon,
              Wn.TrashRecordIcon,
              Wn.StopRecordIcon,
              Wn.ActionBigIcon,
              Wn.ActionMiniIcon,
              Wn.CameraRecordIcon,
              Wn.DragIcon,
              Wn.CheckboxIcon,
              Wn.AddMemberIcon,
              Wn.RecordPauseIcon,
              Wn.RecordPlayIcon,
              Wn.LockIcon,
              Wn.EnterpriseIcon,
              Wn.DomainIcon,
              Wn.SsoIcon,
              Wn.DownloadExtIcon,
              Wn.CopyExtIcon,
              Wn.PDFExtIcon,
              Wn.PrintExtIcon,
              Wn.BackupExtIcon,
              Wn.OutIcon),
          at =
            (Wn.ShareIcon,
              Wn.DescIcon,
              Wn.FolderFilledIcon,
              Wn.VideoFolderIcon),
          ct = Wn.VideoFilmIcon,
          st = Wn.VideoEditIcon,
          lt = t(45697),
          dt = t.n(lt),
          ut = [
            "#2ecc71",
            "#3498db",
            "#8e44ad",
            "#e67e22",
            "#e74c3c",
            "#1abc9c",
            "#2c3e50",
          ];
        function mt(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function pt(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[n] = t),
            e
          );
        }
        function ht(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == t) return;
              var o,
                r,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (o = t.next()).done) &&
                  (i.push(o.value), !n || i.length !== n);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            })(e, n) ||
            (function (e, n) {
              if (!e) return;
              if ("string" == typeof e) return ft(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return ft(e, n);
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ft(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o;
        }
        function gt(e) {
          var n = e.username ? e.username : "no name",
            t = ht((0, h.useState)("loading"), 2),
            o = t[0],
            r = t[1],
            i = n ? n.split(" ") : [],
            a = "";
          i.forEach(function (e) {
            a += e.charAt(0).toUpperCase();
          }),
            (a = a.substring(0, 3));
          var c = e.size + "px",
            s =
              a.length > 1
                ? (function () {
                  var n = e.size / 2 - Math.max(2, a.length),
                    t = (e.size / 5) * 4,
                    o = document.createElement("span");
                  if (
                    ((o.style.visibility = "hidden"),
                      (o.style.opacity = "0"),
                      (o.style.position = "fixed"),
                      (o.innerText = a),
                      (o.style.fontWeight = 500),
                      (o.style.fontSize = n + "px"),
                      document.body.appendChild(o),
                      !(o.offsetWidth > t || o.offsetHeight > t))
                  )
                    return document.body.removeChild(o), n + "px";
                  for (var r = 5; r <= n; r++)
                    if (
                      ((o.style.fontSize = r + "px"),
                        !(o.offsetWidth < t && o.offsetHeight < t))
                    )
                      return document.body.removeChild(o), r - 1 + "px";
                })()
                : e.size / 2 - Math.max(2, a.length) + "px",
            l = "square" !== e.type,
            d = e.username ? e.username.length : 0;
          var u = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? mt(Object(t), !0).forEach(function (n) {
                  pt(e, n, t[n]);
                })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                  : mt(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          })(
            {
              height: c,
              width: c,
              lineHeight: c,
              fontSize: s,
              borderRadius: l ? "50%" : "var(--as-border-radius)",
              display: e.block ? "block" : "inline-block",
              backgroundColor:
                e.avatarUrl && "success" === o ? "" : ut[d % ut.length],
            },
            e.style
          );
          return (0, x.jsxs)("div", {
            className: "avatar",
            style: u,
            children: [
              e.plan &&
              "Free" !== e.plan &&
              (0, x.jsx)("div", {
                className: "plan-badge ".concat(e.plan),
                children: (0, x.jsx)(ot, {}),
              }),
              e.avatarUrl && 0 !== e.avatarUrl.length
                ? (0, x.jsx)(x.Fragment, {
                  children:
                    "failed" !== o
                      ? (0, x.jsx)("img", {
                        style: { height: c, width: c },
                        src: e.avatarUrl,
                        onLoad: function () {
                          r("success");
                        },
                        onError: function () {
                          r("failed");
                        },
                      })
                      : (0, x.jsx)(x.Fragment, { children: a }),
                })
                : (0, x.jsx)(x.Fragment, { children: a }),
            ],
          });
        }
        gt.propTypes = {
          username: dt().string.isRequired,
          size: dt().oneOfType([dt().string, dt().number]).isRequired,
          type: dt().string,
          avatarUrl: dt().string,
          style: dt().object,
          block: dt().bool,
          plan: dt().oneOf(["professional", "basic"]),
        };
        const vt = (0, h.memo)(gt);
        function yt(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function jt(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? yt(Object(t), !0).forEach(function (n) {
                xt(e, n, t[n]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : yt(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function xt(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[n] = t),
            e
          );
        }
        const bt = function (e) {
          var n = this,
            t = function () {
              e.googleSigin && e.googleSigin();
            },
            o = function (n) {
              e.linkOther && e.linkOther(n);
            };
          return (0, x.jsx)(
            m.Z,
            jt(
              jt({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                wrapClassName: "sign-in",
                width: 380,
                closeIcon: (0, x.jsx)(Gn, {}),
                destroyOnClose: !0,
                centered: !0,
                children: (0, x.jsxs)("div", {
                  className: "sign-field",
                  children: [
                    (0, x.jsx)("div", {
                      className: "title",
                      children: "Sign in",
                    }),
                    (0, x.jsx)("div", {
                      className: "tips",
                      children: "Please sign in with your google account",
                    }),
                    (0, x.jsxs)("div", {
                      className: "google-btn",
                      onClick: t,
                      children: [
                        (0, x.jsx)(et, { className: "icon" }),
                        (0, x.jsx)("span", { children: "Sign in with Google" }),
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      className: "link-area",
                      children: [
                        (0, x.jsx)("div", {
                          className: "link",
                          onClick: o.bind(n, !1),
                          children: "Sign in with other accounts",
                        }),
                        (0, x.jsx)(r.Z, {
                          style: {
                            background: "rgba(0, 0, 0, 0.06)",
                            display: "inline-block",
                          },
                          type: "vertical",
                        }),
                        (0, x.jsx)("div", {
                          className: "link",
                          onClick: o.bind(n, !0),
                          children: "Create an account",
                        }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        };
        function wt(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function It(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? wt(Object(t), !0).forEach(function (n) {
                Nt(e, n, t[n]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : wt(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function Nt(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[n] = t),
            e
          );
        }
        function kt(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == t) return;
              var o,
                r,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (o = t.next()).done) &&
                  (i.push(o.value), !n || i.length !== n);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            })(e, n) ||
            (function (e, n) {
              if (!e) return;
              if ("string" == typeof e) return St(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return St(e, n);
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function St(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o;
        }
        const Zt = function (e) {
          var n = this,
            t = kt((0, h.useState)(!1), 2),
            o = t[0],
            r = t[1],
            i = kt((0, h.useState)(!0), 2),
            a = i[0],
            c = i[1],
            s = function () {
              e.onCancel && e.onCancel();
            },
            l = function (e) {
              r(!0),
                c(e),
                e
                  ? ((localStorage["save-location"] = "cloud"),
                    chrome &&
                    chrome.extension &&
                    chrome.extension
                      .getBackgroundPage()
                      .googleEvent("video_change_to_cloud", "yes"))
                  : chrome &&
                  chrome.extension &&
                  chrome.extension
                    .getBackgroundPage()
                    .googleEvent("video_change_to_cloud", "no");
            };
          return (0, x.jsx)(
            m.Z,
            It(
              It({}, e),
              {},
              {
                footer: null,
                maskClosable: !1,
                width: o ? 400 : 320,
                wrapClassName: "video-tips",
                closeIcon: (0, x.jsx)(Gn, {}),
                closable: !o,
                destroyOnClose: !0,
                centered: !0,
                children: o
                  ? (0, x.jsxs)("div", {
                    className: "content-guide",
                    children: [
                      a
                        ? (0, x.jsxs)("div", {
                          className: "header-field",
                          children: [
                            (0, x.jsx)("div", {
                              className: "icon-field",
                              children: (0, x.jsx)(Kn, {}),
                            }),
                            (0, x.jsx)("div", {
                              className: "suc-tips",
                              children: "Success!",
                            }),
                            (0, x.jsx)("div", {
                              className: "tips",
                              children:
                                "You have changed save videos to cloud successfully!",
                            }),
                          ],
                        })
                        : (0, x.jsx)(x.Fragment, {}),
                      (0, x.jsx)("div", {
                        className: "guide-img " + (a ? "one" : "two"),
                      }),
                      (0, x.jsx)("div", {
                        className: "done-btn",
                        onClick: s,
                        children: "OK",
                      }),
                    ],
                  })
                  : (0, x.jsxs)("div", {
                    className: "content",
                    children: [
                      (0, x.jsx)("div", {
                        className: "title",
                        children: "Your video is uploading",
                      }),
                      (0, x.jsx)("div", { className: "icon" }),
                      (0, x.jsxs)("div", {
                        className: "tips",
                        children: [
                          (0, x.jsx)("div", {
                            className: "sub-title",
                            children:
                              "Would you like to switch to Save to cloud for features like:",
                          }),
                          (0, x.jsxs)("div", {
                            className: "message",
                            children: [
                              (0, x.jsx)("div", {
                                className: "icon-field",
                                children: (0, x.jsx)(Hn, {}),
                              }),
                              "Instantly ready to share your video with a link(uploading while you are recording)",
                            ],
                          }),
                          (0, x.jsxs)("div", {
                            className: "message",
                            children: [
                              (0, x.jsx)("div", {
                                className: "icon-field",
                                children: (0, x.jsx)(ct, {}),
                              }),
                              "Download in MP4",
                            ],
                          }),
                          (0, x.jsxs)("div", {
                            className: "message",
                            children: [
                              (0, x.jsx)("div", {
                                className: "icon-field",
                                children: (0, x.jsx)(st, {}),
                              }),
                              "Quick video editing",
                            ],
                          }),
                        ],
                      }),
                      (0, x.jsx)("div", {
                        className: "default-btn",
                        onClick: l.bind(n, !0),
                        children: "Switch to cloud",
                      }),
                      (0, x.jsx)("div", {
                        className: "cancel-btn",
                        onClick: l.bind(n, !1),
                        children: "No thanks",
                      }),
                    ],
                  }),
              }
            )
          );
        },
          Ot = t.p + "images/image_premium..png",
          Ct = t.p + "images/callout_premium..png",
          Pt = t.p + "images/step_premium..png",
          Et = t.p + "images/local-image_premium..png";
        var _t = ["callout", "list", "image", "insertImage"];
        function Ft(e) {
          return (0, x.jsx)(m.Z, {
            visible: e.visible,
            onCancel: e.onCancel,
            footer: null,
            width: 436,
            getContainer: !1,
            maskClosable: !1,
            wrapClassName: "upgrade-modal",
            destroyOnClose: !0,
            centered: !0,
            closable: !e.unClosable,
            closeIcon: (0, x.jsx)(Gn, { style: { fontSize: "12px" } }),
            children: (0, x.jsxs)("div", {
              className: "upgrade-panel",
              children: [
                (0, x.jsx)("div", { className: "crown" }),
                (0, x.jsx)("div", {
                  className: "title",
                  children:
                    "5limit" === e.type
                      ? "Your free trial has ended"
                      : "workspace" === e.type
                        ? "Workspace Limit Reached"
                        : "download-duration" === e.type ||
                          "edit-duration" === e.type
                          ? "Get more with professional plan"
                          : (e.type, "Item Limit Reached"),
                }),
                (function () {
                  switch (e.type) {
                    case "callout":
                      return (0, x.jsx)("img", { src: Ct, alt: "" });
                    case "list":
                      return (0, x.jsx)("img", { src: Pt, alt: "" });
                    case "image":
                      return (0, x.jsx)("img", { src: Ot, alt: "" });
                    case "insertImage":
                      return (0, x.jsx)("img", { src: Et, alt: "" });
                    default:
                      return "";
                  }
                })(),
                (0, x.jsx)("p", {
                  children:
                    -1 !== _t.indexOf(e.type)
                      ? "This is a basic plan feature. Please upgrade to unlock it."
                      : "dropbox" === e.type
                        ? "Upgrade to premium plans to save to Dropbox."
                        : "box" === e.type
                          ? "Upgrade to premium plans to save to Box."
                          : "team" === e.type
                            ? "Upgrade to team plan to unlock the feature."
                            : "project" === e.type
                              ? "Upgrade to premium plans to get unlimited folders."
                              : "uploadImage" === e.type
                                ? "Upgrade to premium plans to host unlimited images."
                                : "uploadVideo" === e.type
                                  ? (0, x.jsxs)(x.Fragment, {
                                    children: [
                                      "Upgrade to ",
                                      (0, x.jsx)("b", { children: "professional plan" }),
                                      " to host unlimited videos.",
                                    ],
                                  })
                                  : "recordResolution" === e.type
                                    ? (0, x.jsxs)(x.Fragment, {
                                      children: [
                                        "Upgrade to ",
                                        (0, x.jsx)("b", { children: "professional plan" }),
                                        " to unlock the high resolution recording feature.",
                                        (0, x.jsx)("br", {}),
                                        "High resolution video takes lots of disk space, so you need to upgrade to use this feature.",
                                      ],
                                    })
                                    : "video-play" === e.type
                                      ? (0, x.jsxs)(x.Fragment, {
                                        children: [
                                          "This video is not accessible because you have reached the limit on video access. Please upgrade to ",
                                          (0, x.jsx)("b", { children: "Professional plan" }),
                                          " for unlimited recording and access.",
                                        ],
                                      })
                                      : "image-view" === e.type
                                        ? (0, x.jsx)(x.Fragment, {
                                          children:
                                            "This image is not accessible because you have reached the limit on image access. Please upgrade your plan for unlimited access.",
                                        })
                                        : "image-alert" === e.type
                                          ? (0, x.jsxs)(x.Fragment, {
                                            children: [
                                              "You have reached the limit on image access. Please upgrade to",
                                              " ",
                                              (0, x.jsx)("b", { children: "Professional plan" }),
                                              " for unlimited recording and access.",
                                            ],
                                          })
                                          : "video-alert" === e.type
                                            ? (0, x.jsxs)(x.Fragment, {
                                              children: [
                                                "You have reached the limit on video access. Please upgrade to",
                                                " ",
                                                (0, x.jsx)("b", { children: "Professional plan" }),
                                                " for unlimited recording and access.",
                                              ],
                                            })
                                            : "download" === e.type || "editor" === e.type
                                              ? (0, x.jsxs)(x.Fragment, {
                                                children: [
                                                  "Please upgrade to ",
                                                  (0, x.jsx)("b", { children: "Professional plan" }),
                                                  " to unlock this feature.",
                                                ],
                                              })
                                              : "5limit" === e.type
                                                ? (0, x.jsx)(x.Fragment, {
                                                  children:
                                                    "Your video can be up to 5 minutes long. To access unlimited video length, please upgrade your account to Professional.",
                                                })
                                                : "video-editor" === e.type
                                                  ? (0, x.jsxs)(x.Fragment, {
                                                    children: [
                                                      "Please upgrade to ",
                                                      (0, x.jsx)("b", { children: "Professional plan" }),
                                                      " to unlock this feature.",
                                                    ],
                                                  })
                                                  : "workspace" === e.type
                                                    ? "This workspace has reached the limit. Pleace upgrade the workspace."
                                                    : "download-duration" === e.type
                                                      ? (0, x.jsxs)(x.Fragment, {
                                                        children: [
                                                          "Upgrade to ",
                                                          (0, x.jsx)("b", { children: "professional plan" }),
                                                          " to download videos longer than one hour in MP4.",
                                                        ],
                                                      })
                                                      : "edit-duration" === e.type
                                                        ? (0, x.jsxs)(x.Fragment, {
                                                          children: [
                                                            "Upgrade to ",
                                                            (0, x.jsx)("b", { children: "professional plan" }),
                                                            " to edit videos longer than one hour.",
                                                          ],
                                                        })
                                                        : "trash-restore" === e.type
                                                          ? (0, x.jsxs)(x.Fragment, {
                                                            children: [
                                                              "Upgrade to ",
                                                              (0, x.jsx)("b", { children: "professional plan" }),
                                                              " to unlock unlimited videos and images.",
                                                            ],
                                                          })
                                                          : "Upgrade to Professional to unlock the feature.",
                }),
                (0, x.jsx)(d.Z, {
                  className: "up-btn",
                  size: "large",
                  type: "primary",
                  onClick: function () {
                    window.open(
                      "https://www.awesomescreenshot.com/pricing?from=" + e.type
                    );
                  },
                  children:
                    "workspace" === e.type
                      ? "Go to workspace"
                      : "Go to upgrade",
                }),
                "download-duration" === e.type &&
                (0, x.jsxs)("div", {
                  className: "more-btn",
                  children: [
                    (0, x.jsx)("a", {
                      onClick: e.openDownloadWebmModal,
                      children: "Download in webm",
                    }),
                    " ",
                    "instead",
                  ],
                }),
              ],
            }),
          });
        }
        (Ft.show = function (e) {
          var n = !0,
            t = document.createDocumentFragment();
          function o() {
            (n = !1),
              f.render((0, x.jsx)(Ft, { type: e, visible: n, onCancel: o }), t);
          }
          setTimeout(function () {
            f.render((0, x.jsx)(Ft, { type: e, visible: n, onCancel: o }), t);
          });
        }),
          (window.requestFileSystem =
            window.requestFileSystem || window.webkitRequestFileSystem);
        var Rt = null;
        function Ut(e) {
          var n = "";
          switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
              n = "QUOTA_EXCEEDED_ERR";
              break;
            case FileError.NOT_FOUND_ERR:
              n = "NOT_FOUND_ERR";
              break;
            case FileError.SECURITY_ERR:
              n = "SECURITY_ERR";
              break;
            case FileError.INVALID_MODIFICATION_ERR:
              n = "INVALID_MODIFICATION_ERR";
              break;
            case FileError.INVALID_STATE_ERR:
              n = "INVALID_STATE_ERR";
              break;
            default:
              n = "Unknown Error";
          }
          return n;
        }
        var At = {
          fs: null,
          getFs: function () {
            return new Promise(function (e, n) {
              window.requestFileSystem(
                window.PERSISTENT,
                52428800,
                function (n) {
                  e(n);
                },
                function (e) {
                  n(e);
                }
              );
            });
          },
          save: function (e, n) {
            var t = this;
            return this.getFs().then(function (o) {
              return t.do_save(o, e, n);
            }, Ut);
          },
          append: function (e, n) {
            Rt
              ? Rt.write(e)
              : this.getFs().then(function (t) {
                t.root.getFile(
                  n,
                  { create: !1 },
                  function (n) {
                    n.createWriter(
                      function (n) {
                        (n.onwriteend = function (e) { }),
                          (n.onerror = function (e) { }),
                          n.write(e),
                          (Rt = n);
                      },
                      function (e) { }
                    );
                  },
                  function (e) { }
                );
              });
          },
          do_save: function (e, n, t) {
            return new Promise(function (o, r) {
              e.root.getFile(
                t,
                { create: !0 },
                function (e) {
                  e.createWriter(
                    function (t) {
                      (t.onwriteend = function (n) {
                        o(e.toURL());
                      }),
                        (t.onerror = function (e) {
                          r(e.toString());
                        }),
                        t.write(n),
                        (Rt = t);
                    },
                    function (e) {
                      r(e);
                    }
                  );
                },
                function (e) {
                  r(e);
                }
              );
            });
          },
          getFile: function (e) {
            var n = this;
            return new Promise(function (t, o) {
              n.getFs().then(function (n) {
                n.root.getFile(
                  e,
                  {},
                  function (e) {
                    e.file(function (e) {
                      t(e);
                    }, o);
                  },
                  o
                );
              });
            });
          },
        };
        const Dt = At;
        function Tt(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function Mt(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? Tt(Object(t), !0).forEach(function (n) {
                Lt(e, n, t[n]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : Tt(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        function Lt(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[n] = t),
            e
          );
        }
        function Bt(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (null == t) return;
              var o,
                r,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (o = t.next()).done) &&
                  (i.push(o.value), !n || i.length !== n);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            })(e, n) ||
            (function (e, n) {
              if (!e) return;
              if ("string" == typeof e) return Vt(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return Vt(e, n);
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Vt(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o;
        }
        var zt = p.Z.TextArea,
          Wt = m.Z.confirm,
          Yt = null,
          qt = "";
        (window.needUpload = ""), (window.bindEvents = !1);
        var Gt = function (e) {
          return (0, x.jsxs)(u.Z, {
            onFinish: function (n) {
              e.onSubmit(n);
            },
            children: [
              (0, x.jsx)(u.Z.Item, {
                name: "title",
                rules: [{ required: !0, message: "Title can't be empty!" }],
                initialValue: e.defaultValue,
                children: (0, x.jsx)(zt, {}),
              }),
              (0, x.jsxs)(u.Z.Item, {
                className: "video-edit-title-btn-area",
                children: [
                  (0, x.jsx)(d.Z, {
                    onClick: e.onCancel,
                    children: "Cancel",
                  }),
                  (0, x.jsx)(d.Z, {
                    type: "primary",
                    htmlType: "submit",
                    loading: e.isLoading,
                    children: "Done",
                  }),
                ],
              }),
            ],
          });
        },
          Ht = function (e) {
            var n = chrome.extension.getBackgroundPage(),
              t = Bt((0, h.useState)(null), 2),
              u = t[0],
              f = t[1],
              y = Bt((0, h.useState)("upload"), 2),
              k = y[0],
              P = y[1],
              E = Bt((0, h.useState)("upload"), 2),
              _ = E[0],
              F = E[1],
              R = Bt((0, h.useState)("upload"), 2),
              U = R[0],
              A = R[1],
              D = Bt((0, h.useState)(0), 2),
              T = D[0],
              M = D[1],
              L = Bt((0, h.useState)(0), 2),
              B = L[0],
              V = L[1],
              z = Bt((0, h.useState)(0), 2),
              W = z[0],
              Y = z[1],
              q = Bt((0, h.useState)(!1), 2),
              G = q[0],
              H = q[1],
              Q = Bt((0, h.useState)(!1), 2),
              $ = Q[0],
              J = Q[1],
              K = Bt((0, h.useState)(!1), 2),
              X = K[0],
              ee = K[1],
              ne = Bt((0, h.useState)(n.googleOAuth.getAccount().email), 2),
              te = ne[0],
              oe = ne[1],
              re = Bt((0, h.useState)(""), 2),
              ie = re[0],
              ae = re[1],
              ce = Bt((0, h.useState)(""), 2),
              se = ce[0],
              le = ce[1],
              de = Bt((0, h.useState)(""), 2),
              ue = de[0],
              me = de[1],
              pe = Bt((0, h.useState)(!1), 2),
              he = pe[0],
              fe = pe[1],
              ge = Bt((0, h.useState)(!1), 2),
              ve = ge[0],
              ye = ge[1],
              je = Bt((0, h.useState)(!1), 2),
              xe = je[0],
              be = je[1],
              we = Bt((0, h.useState)(!1), 2),
              Ie = we[0],
              Ne = we[1],
              ke = Bt((0, h.useState)(""), 2),
              Se = ke[0],
              Ze = ke[1],
              Oe = Bt((0, h.useState)(!1), 2),
              Ce = Oe[0],
              Pe = Oe[1],
              Ee = (0, h.useRef)(he);
            Ee.current = he;
            var _e = (0, h.useRef)(null);
            (0, h.useEffect)(
              function () {
                return (
                  null !== u &&
                  "" === u.detail.thumbnailUrl &&
                  _e.current.addEventListener("canplay", function () {
                    Be();
                  }),
                  document.addEventListener("visibilitychange", ze),
                  window.addEventListener("message", Ve),
                  function () {
                    document.removeEventListener("visibilitychange", ze),
                      window.removeEventListener("message", Ve);
                  }
                );
              },
              [u, k]
            ),
              (0, h.useEffect)(function () {
                var e = new URLSearchParams(window.location.search);
                (qt = parseInt(e.get("id"))) &&
                  DB.init().then(function () {
                    DB.get(qt).then(function (e) {
                      f(e),
                        e.detail.youtubeUrl && F("uploaded"),
                        e.detail.gDriveUrl && A("uploaded"),
                        e.detail.awsUrl && P("uploaded"),
                        _e.current.addEventListener("progress", t),
                        (_e.current.currentTime = 99999999);
                    });
                  });
                var t = function e() {
                  _e.current.buffered.end(0) &&
                    _e.current.currentTime > 0 &&
                    ((_e.current.currentTime = 0),
                      _e.current.removeEventListener("progress", e));
                };
                chrome.cookies.get(
                  {
                    url: "https://www.awesomescreenshot.com",
                    name: "screenshot_personal_type",
                  },
                  function (e) {
                    e ? 0 == e.value && be(!0) : be(!0);
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
                      : chrome.storage.sync.set({ captureCount: 1 }),
                      Z().then(function (e) {
                        if (e) {
                          var n = e.username;
                          n &&
                            (ae(n),
                              O().then(function (e) {
                                me(e.info.avatarURL),
                                  le(e.premium.currentPlan),
                                  null != e.permissions.showChromeFiveStarNever
                                    ? Fe(n, e.permissions.showChromeFiveStarNever)
                                    : Fe(n, !1);
                              }));
                        } else Fe("", !1);
                      });
                  }),
                  n.googleEvent("enter video detail page", "local");
              }, []),
              (0, h.useEffect)(
                function () {
                  he && Pe(!0), !he && Ce && Se && (qe("aws", Se), Ze(""));
                },
                [he]
              );
            var Fe = function (e, n) {
              chrome.storage.sync.get(
                ["captureCount", "clickNo", "neverShow"],
                function (t) {
                  if (!t.neverShow && !n) {
                    var o = 200;
                    (o = t.clickNo ? 200 : 100),
                      t.captureCount && t.captureCount > o && Le(e);
                  }
                }
              );
            },
              Re = function () {
                chrome.storage.sync.get(["clickNo"], function (e) {
                  e.clickNo
                    ? chrome.storage.sync.set({ neverShow: !0 })
                    : chrome.storage.sync.set({ clickNo: !0 });
                }),
                  Z().then(function (e) {
                    e && C("chromeFiveStarCancel");
                  }),
                  l.Z.destroy();
              },
              Ue = function (e, n) {
                l.Z.open({
                  key: "questionnaire",
                  className: "questionnaire",
                  placement: "bottomRight",
                  duration: 0,
                  style: { width: 418, marginLeft: -63, padding: "20px 30px" },
                  message: e,
                  description: n,
                  onClose: Re,
                });
              },
              Ae = function () {
                b(
                  "https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews"
                ),
                  chrome.storage.sync.set({ neverShow: !0 }),
                  Z().then(function (e) {
                    e && C("chromeFiveStarClick");
                  }),
                  l.Z.destroy();
              },
              De = function () {
                b("/feedback.html"),
                  chrome.storage.sync.set({
                    captureCount: 0,
                    clickNo: !1,
                    neverShow: !1,
                  }),
                  Z().then(function (e) {
                    e && C("chromeFiveStarFeedback");
                  }),
                  l.Z.destroy();
              },
              Te = function () {
                Ue(
                  (0, x.jsxs)("div", {
                    className: "noti_title",
                    children: [
                      (0, x.jsx)("img", { src: "images/star.png" }),
                      " User Satisfaction Survey",
                    ],
                  }),
                  (0, x.jsxs)("div", {
                    className: "noti_des",
                    children: [
                      (0, x.jsx)("div", {
                        className: "content",
                        children:
                          "Your review means a lot to us. Would you mind taking a moment to rate the extension in the Web Store?",
                      }),
                      (0, x.jsx)(d.Z, {
                        style: { width: "98px", height: "34px" },
                        onClick: Re,
                        type: "primary",
                        ghost: !0,
                        children: "No, thanks",
                      }),
                      (0, x.jsx)(d.Z, {
                        style: {
                          width: "246px",
                          height: "34px",
                          marginLeft: "14px",
                        },
                        type: "primary",
                        onClick: Ae,
                        children: "Sure, take me to the Web Store",
                      }),
                    ],
                  })
                );
              },
              Me = function () {
                Ue(
                  (0, x.jsxs)("div", {
                    className: "noti_title",
                    children: [
                      (0, x.jsx)("img", { src: "images/star.png" }),
                      " User Satisfaction Survey",
                    ],
                  }),
                  (0, x.jsxs)("div", {
                    className: "noti_des",
                    children: [
                      (0, x.jsx)("div", {
                        className: "content",
                        children:
                          "Would you like to report any issues you're experiencing or give us some suggestions so that we can make the extension better for you?",
                      }),
                      (0, x.jsx)(d.Z, {
                        style: { width: "98px" },
                        onClick: Re,
                        type: "primary",
                        ghost: !0,
                        children: "No, thanks",
                      }),
                      (0, x.jsx)(d.Z, {
                        style: { width: "246px", marginLeft: "14px" },
                        type: "primary",
                        onClick: De,
                        children: "Yes, take me to the feedback form",
                      }),
                    ],
                  })
                );
              },
              Le = function (e) {
                var n = "Are you enjoying Awesome Screenshot?";
                Ue(
                  (0, x.jsxs)("div", {
                    className: "noti_title",
                    children: [
                      (0, x.jsx)("img", { src: "images/star.png" }),
                      " User Satisfaction Survey",
                    ],
                  }),
                  (0, x.jsxs)("div", {
                    className: "noti_des",
                    children: [
                      e
                        ? (0, x.jsxs)("div", {
                          className: "content",
                          children: [
                            "Hi ",
                            (0, x.jsxs)("p", {
                              className: "user_name",
                              children: [" ", e],
                            }),
                            " , ",
                            n,
                          ],
                        })
                        : (0, x.jsx)("div", {
                          className: "content",
                          children: n,
                        }),
                      (0, x.jsx)(d.Z, {
                        style: { width: "172px" },
                        onClick: Me,
                        type: "primary",
                        ghost: !0,
                        children: "Not really",
                      }),
                      (0, x.jsx)(d.Z, {
                        style: { width: "172px", marginLeft: "14px" },
                        type: "primary",
                        onClick: Te,
                        children: "Yes",
                      }),
                    ],
                  })
                );
              },
              Be = function () {
                var e = document.createElement("canvas");
                (e.width = 320), (e.height = 180);
                var n = e.getContext("2d"),
                  t = _e.current;
                n.drawImage(t, 0, 0, e.width, e.height),
                  e.toBlob(function (e) {
                    Dt.save(e, u.id + "_thumbnail.png").then(function (e) {
                      var n = Mt(
                        Mt({}, u),
                        {},
                        {
                          detail: Mt(Mt({}, u.detail), {}, { thumbnailUrl: e }),
                        }
                      );
                      f(n), DB.update(qt, n);
                    });
                  });
              },
              Ve = function (e) {
                e &&
                  "google_login_success" === e.data &&
                  (window.needUpload && ((window.needUpload = ""), cn()), We());
              },
              ze = function () {
                "visible" === document.visibilityState &&
                  (window.needUpload && ((window.needUpload = ""), cn()), We());
              },
              We = function () {
                Z().then(function (e) {
                  e && e.username
                    ? (H(!1),
                      ae(e.username),
                      O().then(function (e) {
                        me(e.info.avatarURL),
                          le(e.premium.currentPlan),
                          null != e.permissions.showChromeFiveStarNever
                            ? Fe(ie, e.permissions.showChromeFiveStarNever)
                            : Fe(ie, !1);
                      }))
                    : ae("");
                });
              },
              Ye = function (e) {
                return new Promise(function (n, t) {
                  var o =
                    "filesystem:" + chrome.extension.getURL("persistent/"),
                    r = new RegExp(o),
                    i = e.replace(r, "");
                  Dt.getFile(i).then(
                    function (e) {
                      n(e);
                    },
                    function (e) {
                      t("Get file error: [" + e + "]");
                    }
                  );
                });
              },
              qe = function (e, n) {
                var t = Mt(
                  Mt({}, u),
                  {},
                  { detail: Mt(Mt({}, u.detail), {}, Lt({}, e + "Url", n)) }
                );
                f(t),
                  DB.update(qt, t),
                  "aws" === e && chrome.tabs.create({ url: n });
              },
              Ge = function (e) {
                V(e);
              },
              He = function (e) {
                Y(e);
              },
              Qe = function (e) {
                100 !== e && M(e);
              },
              $e = function (e, n, t) {
                return new Promise(function (o, r) {
                  (function (e, n, t) {
                    var o = new FormData();
                    for (var r in e) o.append(r, e[r]);
                    var i = t || "https://awesomescreenshot.s3.amazonaws.com/";
                    return j()({
                      method: "POST",
                      crossdomain: !0,
                      url: i,
                      data: o,
                      onUploadProgress: function (e) {
                        var t = Math.round((100 * e.loaded) / e.total);
                        n(t);
                      },
                    });
                  })(e, n, t).then(
                    function () {
                      o();
                    },
                    function (e) {
                      r("S3 " + e.toString());
                    }
                  );
                });
              },
              Je = function () {
                P("uploading"),
                  (function () {
                    if (!ve) {
                      ye(!0);
                      var e = localStorage.video_upload
                        ? localStorage.video_upload
                        : 0;
                      (1 != ++e && 5 !== e && 10 !== e) ||
                        "cloud" === localStorage["save-location"] ||
                        (fe(!0),
                          n.googleEvent("video_change_to_cloud", "show")),
                        (localStorage.video_upload = e);
                    }
                  })();
                var e = "";
                window.needUpload = "";
                var t,
                  o = {
                    title: u.detail.title,
                    userAgent: navigator.userAgent,
                    client: /Edg/.test(navigator.userAgent)
                      ? "Edge extension"
                      : "chrome extension",
                    extVersion: n.currentversion,
                    screenSize:
                      window.screen.width * window.devicePixelRatio +
                      "*" +
                      window.screen.height * window.devicePixelRatio,
                    size: u.detail.size,
                    duration: u.detail.duration,
                    createUnix: Math.round(u.detail.timeStamp / 1e3) + "",
                  };
                u.detail.recordType && (o.recordType = u.detail.recordType),
                  ((t = o),
                    S({ method: "POST", url: "video/upload_init", data: t }))
                    .then(function (n) {
                      return (
                        (e = n.videoID),
                        Ye(u.fileUrl).then(
                          function (e) {
                            var t = {
                              AWSAccessKeyId: "AKIAJSCJQ2NM3XLFPVKA",
                              acl: "private",
                              key: n.s3Key,
                              "Content-Type": "video/webm",
                              policy: n.policy,
                              signature: n.signature,
                              file: e,
                            };
                            return $e(t, Qe, n.s3URI);
                          },
                          function (e) {
                            return Promise.reject(e.toString());
                          }
                        )
                      );
                    })
                    .then(function (t) {
                      (function (e) {
                        return S({
                          method: "POST",
                          url: "/video/upload_complete",
                          data: { videoID: e },
                        });
                      })(e).then(function (e) {
                        M(100),
                          Ee.current
                            ? Ze(e.videoURI)
                            : (qe("aws", e.videoURI), Ze("")),
                          P("uploaded"),
                          n.refreshUserInfo();
                      });
                    })
                    .catch(function (t) {
                      n.refreshUserInfo(),
                        e &&
                        (function (e, n) {
                          S({
                            method: "POST",
                            url: "/video/upload_failed",
                            data: { videoID: e, failedMessage: n },
                          });
                        })(e, t),
                        t && "Premium Plan Required!" === t.msg
                          ? (P("upload"), Ne(!0))
                          : P("failed");
                    });
              };
            function Ke() {
              S({ method: "GET", url: "/user/einfo" })
                .then(function (e) {
                  e
                    ? e.permission.allowVideoCreate
                      ? Je()
                      : (P("upload"), Ne(!0))
                    : s.ZP.error("Network error");
                })
                .catch(function (e) { });
            }
            var Xe,
              en,
              nn,
              tn,
              on,
              rn,
              an = function () {
                n.googleEvent("upload to aws", "local"),
                  Z().then(function (e) {
                    e && e.username
                      ? Ke()
                      : ((window.needUpload = {
                        title: u.detail.title,
                        fileUrl: u.fileUrl,
                      }),
                        H(!0));
                  });
              },
              cn = function () {
                Z().then(function (e) {
                  e && e.username ? (H(!1), ae(e.username), an()) : ae("");
                });
              },
              sn = function () {
                J(!1);
              },
              ln = function () {
                window.location.href = "/video-list.html";
              },
              dn = function () {
                chrome.tabs.create({ url: u.detail.awsUrl });
              },
              un = function (e) {
                w(e), s.ZP.success("Link has been copied to your clipboard!");
              },
              mn = function (e, n, t) {
                var o = "";
                o =
                  "youtube" === e ? "#cc181e" : "gDrive" === e ? "#4285f4" : "";
                return (0, x.jsxs)("div", {
                  className: "upload-area",
                  children: [
                    "uploading" === n &&
                    (0, x.jsx)(c.Z, {
                      percent: t,
                      status: "active",
                      showInfo: !1,
                      size: "small",
                      strokeColor: o,
                    }),
                    "uploaded" === n &&
                    (function (e) {
                      return "aws" === e
                        ? (0, x.jsxs)("div", {
                          className: "view-btn",
                          onClick: dn,
                          children: [
                            (0, x.jsx)("img", {
                              className: "icon",
                              src: "images/icon_viewOnAS.svg",
                            }),
                            "View on Awesome Screenshot",
                          ],
                        })
                        : (0, x.jsx)(p.Z, {
                          defaultValue: u.detail[e + "Url"],
                          prefix: (0, x.jsx)(g.Z, {}),
                          onClick: un.bind(null, u.detail[e + "Url"]),
                        });
                    })(e),
                  ],
                });
              },
              pn = function () {
                chrome.tabs.create({ url: "/feedback.html" });
              },
              hn = function () {
                window.open(
                  "https://www.awesomescreenshot.com/signin?from=ext_loc_normal"
                );
              },
              fn = function () {
                chrome.tabs.create({ url: "/option-react.html" });
              },
              gn = (0, x.jsxs)(a.Z, {
                className: "more-menu",
                children: [
                  se &&
                  "free" === se.PlanName &&
                  (0, x.jsx)(a.Z.Item, {
                    className: "menu-item",
                    children: (0, x.jsxs)("a", {
                      href: "https://www.awesomescreenshot.com/pricing?from=local_dropdown",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        (0, x.jsx)(v.Z, {
                          style: { marginRight: "5px" },
                          title: "Premium user",
                        }),
                        "Upgrade",
                      ],
                    }),
                  }),
                  (0, x.jsx)(a.Z.Item, {
                    className: "menu-item",
                    onClick: function () {
                      b("https://www.awesomescreenshot.com/web/user/logout");
                    },
                    children: (0, x.jsxs)("a", {
                      children: [
                        (0, x.jsx)(it, {
                          style: { marginRight: "5px", fontSize: "16px" },
                        }),
                        "Sign out",
                      ],
                    }),
                  }),
                ],
              }),
              vn = (0, x.jsxs)(a.Z, {
                className: "more-menu",
                children: [
                  (0, x.jsxs)(
                    a.Z.Item,
                    {
                      className: "menu-item ",
                      onClick: function () {
                        J(!0);
                      },
                      children: [
                        (0, x.jsx)(Jn, { className: "icon" }),
                        "Rename",
                      ],
                    },
                    "comfig"
                  ),
                  (0, x.jsxs)(
                    a.Z.Item,
                    {
                      className: "menu-item warning",
                      onClick: function () {
                        Wt({
                          title: "Are you sure to delete this video?",
                          okText: "Yes, delete",
                          okType: "danger",
                          cancelText: "No",
                          onOk: function () {
                            DB.delete(qt).then(function (e) {
                              window.location.href = "/video-list.html";
                            });
                          },
                          onCancel: function () { },
                        });
                      },
                      children: [
                        (0, x.jsx)(Xn, { className: "icon" }),
                        "Delete",
                      ],
                    },
                    "comfig"
                  ),
                ],
              });
            return (0, x.jsx)("div", {
              className: "videoPage",
              children: u
                ? (0, x.jsxs)("div", {
                  className: "main-container",
                  children: [
                    (0, x.jsx)("div", {
                      className: "top-bar",
                      children: (0, x.jsxs)("div", {
                        className: "inner-container",
                        children: [
                          (0, x.jsxs)("div", {
                            className: "logo-area",
                            children: [
                              (0, x.jsx)("div", { className: "logo" }),
                              (0, x.jsx)("a", {
                                target: "_blank",
                                href: "https://www.awesomescreenshot.com",
                                rel: "noreferrer",
                              }),
                            ],
                          }),
                          (0, x.jsxs)("div", {
                            className: "user-area",
                            children: [
                              (0, x.jsxs)("a", {
                                className: "user-link email-us",
                                target: "_blank",
                                onClick: pn,
                                children: [
                                  (0, x.jsx)("div", {
                                    className: "icon-field",
                                    children: (0, x.jsx)(Qn, {}),
                                  }),
                                  "Feedback",
                                ],
                              }),
                              (0, x.jsxs)("a", {
                                className: "user-link email-us",
                                target: "_blank",
                                onClick: fn,
                                children: [
                                  (0, x.jsx)("div", {
                                    className: "icon-field",
                                    children: (0, x.jsx)(nt, {}),
                                  }),
                                  "Options",
                                ],
                              }),
                              (0, x.jsxs)("a", {
                                className: "user-link email-us",
                                onClick: ln,
                                target: "_blank",
                                children: [
                                  (0, x.jsx)("div", {
                                    className: "icon-field",
                                    children: (0, x.jsx)(at, {}),
                                  }),
                                  "My Local Recordings",
                                ],
                              }),
                              ie
                                ? (0, x.jsx)(i.Z, {
                                  overlay: gn,
                                  trigger: ["click"],
                                  placement: "bottomRight",
                                  children: (0, x.jsxs)("div", {
                                    className: "user-link user-avatar",
                                    children: [
                                      (0, x.jsx)(vt, {
                                        username: ie,
                                        size: "22",
                                        avatarUrl: ue
                                          ? "https://www.awesomescreenshot.com/" +
                                          ue
                                          : "",
                                      }),
                                      se &&
                                        se.PlanName &&
                                        "free" !== se.PlanName
                                        ? (0, x.jsx)(ot, {
                                          className: "crown",
                                        })
                                        : (0, x.jsx)(x.Fragment, {}),
                                      ie,
                                      (0, x.jsx)($n, {
                                        className: "user-more",
                                      }),
                                    ],
                                  }),
                                })
                                : (0, x.jsxs)("div", {
                                  className: "user-link",
                                  onClick: hn,
                                  children: [
                                    (0, x.jsx)(tt, { className: "me" }),
                                    "Sign in",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, x.jsxs)("div", {
                      className: "title-field",
                      children: [
                        (0, x.jsx)("span", {
                          className: "display-text",
                          id: "display-text",
                          title: "Edit name",
                          children: (0, x.jsx)("span", {
                            className: "text",
                            children: u.detail.title,
                          }),
                        }),
                        (0, x.jsxs)("div", {
                          className: "actions",
                          children: [
                            (0, x.jsx)("span", {
                              className: "info-time",
                              children:
                                ((nn = new Date(u.detail.timeStamp)),
                                  (tn = nn.getDate()),
                                  (on = nn.getMonth()),
                                  (rn = nn.getFullYear()),
                                  [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "June",
                                    "July",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec",
                                  ][on] +
                                  " " +
                                  tn +
                                  ", " +
                                  rn),
                            }),
                            (0, x.jsx)(r.Z, {
                              style: {
                                background: "#FFFFFF33",
                                display: "inline-block",
                                height: "16px",
                                width: "1px",
                                top: "4px",
                                margin: "0 18px",
                              },
                              type: "vertical",
                            }),
                            (0, x.jsx)(i.Z, {
                              overlay: vn,
                              trigger: ["click"],
                              className: "more-action",
                              placement: "topLeft",
                              children: (0, x.jsx)("div", {
                                className: "more-action",
                                children: (0, x.jsx)("div", {
                                  className: "dots",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      className: "video-container",
                      children: [
                        (0, x.jsxs)("div", {
                          className: "video-box",
                          children: [
                            (0, x.jsx)("video", {
                              id: "video",
                              controls: !0,
                              src: u.fileUrl,
                              ref: _e,
                            }),
                            (0, x.jsx)("div", {
                              className: "info-field",
                              children: (0, x.jsxs)("div", {
                                className: "video-tip",
                                children: [
                                  (0, x.jsx)("span", {
                                    children:
                                      "Upload or download the video to avoid data loss.",
                                  }),
                                  (0, x.jsx)("div", {
                                    className: "tips",
                                    children:
                                      "This video is temporarily saved in My Local Recordings( a temp folder in your browser) and prone to be lost due to an unexpected system or browser error. Upload this video to awesomescreenshot.com or download it to local to avoid any possible data loss.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, x.jsxs)("div", {
                          className: "info-box",
                          children: [
                            (0, x.jsxs)("div", {
                              className: "info-group",
                              children: [
                                "upload" === k || "uploaded" === k
                                  ? (0, x.jsx)("div", {
                                    className: "group-title",
                                    children: "Save to Awesome Screenshot",
                                  })
                                  : (0, x.jsx)(x.Fragment, {}),
                                (0, x.jsx)("div", {
                                  className: "info-group-box",
                                  children:
                                    ((Xe = k),
                                      (en = T),
                                      "upload" === Xe
                                        ? (0, x.jsxs)(x.Fragment, {
                                          children: [
                                            (0, x.jsx)(d.Z, {
                                              className: "uploadAwsBtn",
                                              block: !0,
                                              type: "primary",
                                              onClick: an,
                                              children: "Upload",
                                            }),
                                            (0, x.jsxs)("div", {
                                              className: "tips-field",
                                              children: [
                                                (0, x.jsx)("div", {
                                                  className: "tip-title",
                                                  children:
                                                    "Upload for features :",
                                                }),
                                                (0, x.jsxs)("div", {
                                                  className: "tip-content",
                                                  children: [
                                                    (0, x.jsxs)("div", {
                                                      children: [
                                                        (0, x.jsxs)("div", {
                                                          className:
                                                            "tip-item",
                                                          children: [
                                                            (0, x.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "icon",
                                                                children: (0,
                                                                  x.jsx)(
                                                                    Kn,
                                                                    {}
                                                                  ),
                                                              }
                                                            ),
                                                            "Shareable link",
                                                          ],
                                                        }),
                                                        (0, x.jsxs)("div", {
                                                          className:
                                                            "tip-item",
                                                          children: [
                                                            (0, x.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "icon",
                                                                children: (0,
                                                                  x.jsx)(
                                                                    Kn,
                                                                    {}
                                                                  ),
                                                              }
                                                            ),
                                                            "Download in MP4",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, x.jsxs)("div", {
                                                      children: [
                                                        (0, x.jsxs)("div", {
                                                          className:
                                                            "tip-item",
                                                          children: [
                                                            (0, x.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "icon",
                                                                children: (0,
                                                                  x.jsx)(
                                                                    Kn,
                                                                    {}
                                                                  ),
                                                              }
                                                            ),
                                                            "Quick video editing",
                                                          ],
                                                        }),
                                                        (0, x.jsxs)("div", {
                                                          className:
                                                            "tip-item",
                                                          children: [
                                                            (0, x.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "icon",
                                                                children: (0,
                                                                  x.jsx)(
                                                                    Kn,
                                                                    {}
                                                                  ),
                                                              }
                                                            ),
                                                            "Back up",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                        : "uploaded" === Xe
                                          ? (0, x.jsx)("div", {
                                            className: "upload-field",
                                            children: (0, x.jsx)("div", {
                                              className: "view-btn",
                                              onClick: dn,
                                              children:
                                                "View on Awesome Screenshot",
                                            }),
                                          })
                                          : (0, x.jsx)("div", {
                                            className: "upload-field",
                                            children:
                                              "uploading" === Xe
                                                ? (0, x.jsxs)(x.Fragment, {
                                                  children: [
                                                    (0, x.jsx)(c.Z, {
                                                      className: "progress",
                                                      strokeWidth: 10,
                                                      trailColor:
                                                        "rgba(255, 255, 255, 0.05)",
                                                      strokeColor: "#6494F7",
                                                      type: "circle",
                                                      percent: en,
                                                      gapPosition: "left",
                                                      width: 50,
                                                    }),
                                                    (0, x.jsxs)("div", {
                                                      className: "upload-tip",
                                                      children: [
                                                        "Saving to ",
                                                        (0, x.jsx)("span", {
                                                          children:
                                                            "My Items",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                                : (0, x.jsxs)("div", {
                                                  className: "failed-field",
                                                  onClick: an,
                                                  children: [
                                                    (0, x.jsx)(rt, {
                                                      className: "icon",
                                                    }),
                                                    (0, x.jsx)("div", {
                                                      className: "upload-tip",
                                                      children:
                                                        "Failed to upload the video. Click to retry.",
                                                    }),
                                                  ],
                                                }),
                                          })),
                                }),
                              ],
                            }),
                            (0, x.jsxs)("div", {
                              className: "info-group",
                              children: [
                                (0, x.jsxs)("div", {
                                  className: "group-title",
                                  children: [
                                    "Download",
                                    (0, x.jsxs)("span", {
                                      className: "info-size",
                                      children: ["Size: ", u.detail.size],
                                    }),
                                  ],
                                }),
                                (0, x.jsx)("div", {
                                  className: "info-item",
                                  children: (0, x.jsxs)("div", {
                                    className: "subtitle",
                                    children: [
                                      "In WebM format",
                                      (0, x.jsx)(d.Z, {
                                        className: "action-btn download-btn",
                                        type: "primary",
                                        size: "small",
                                        onClick: function () {
                                          chrome.permissions.request(
                                            { permissions: ["downloads"] },
                                            function (e) {
                                              e &&
                                                Ye(u.fileUrl).then(function (
                                                  e
                                                ) {
                                                  var n =
                                                    u.detail.title
                                                      .replace(
                                                        /(\.|\:)/g,
                                                        " "
                                                      )
                                                      .replace(
                                                        /[#$~!@%^&*();'"?><\[\]{}\|,:\/=+]/g,
                                                        " "
                                                      ) + ".webm";
                                                  if (
                                                    ((n = n.replace(
                                                      /\s+/g,
                                                      "-"
                                                    )),
                                                      e.size < 1442116762)
                                                  )
                                                    try {
                                                      !(function (e, n) {
                                                        if (
                                                          "undefined" ==
                                                          typeof EBML
                                                        )
                                                          throw new Error(
                                                            "Please link: https://cdn.webrtc-experiment.com/EBML.js"
                                                          );
                                                        var t =
                                                          new EBML.Reader(),
                                                          o =
                                                            new EBML.Decoder(),
                                                          r = EBML.tools,
                                                          i =
                                                            new FileReader();
                                                        (i.onload = function (
                                                          e
                                                        ) {
                                                          o
                                                            .decode(
                                                              this.result
                                                            )
                                                            .forEach(
                                                              function (e) {
                                                                t.read(e);
                                                              }
                                                            ),
                                                            t.stop();
                                                          try {
                                                            var i =
                                                              r.makeMetadataSeekable(
                                                                t.metadatas,
                                                                t.duration,
                                                                t.cues
                                                              );
                                                          } catch (e) { }
                                                          var a =
                                                            this.result.slice(
                                                              t.metadataSize
                                                            ),
                                                            c = new Blob(
                                                              [i, a],
                                                              {
                                                                type: "video/webm",
                                                              }
                                                            );
                                                          n(c);
                                                        }),
                                                          i.readAsArrayBuffer(
                                                            e
                                                          );
                                                      })(e, function (e) {
                                                        I({
                                                          url: URL.createObjectURL(
                                                            e
                                                          ),
                                                          filename: n,
                                                          saveAs: !0,
                                                        });
                                                      });
                                                    } catch (t) {
                                                      I({
                                                        url: URL.createObjectURL(
                                                          e
                                                        ),
                                                        filename: n,
                                                        saveAs: !0,
                                                      });
                                                    }
                                                  else
                                                    I({
                                                      url: URL.createObjectURL(
                                                        e
                                                      ),
                                                      filename:
                                                        u.detail.title +
                                                        ".webm",
                                                      saveAs: !0,
                                                    });
                                                });
                                            }
                                          ),
                                            n.googleEvent(
                                              "download video",
                                              "local"
                                            );
                                        },
                                        children: "Download",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, x.jsxs)("div", {
                              className: "info-group",
                              children: [
                                (0, x.jsx)("div", {
                                  className: "group-title",
                                  children: "Save to cloud",
                                }),
                                (0, x.jsxs)("div", {
                                  className: "upload-item",
                                  id: "youtube-upload",
                                  children: [
                                    (0, x.jsxs)("div", {
                                      className: "subtitle",
                                      children: [
                                        (0, x.jsx)("img", {
                                          src: "images/youtube.svg",
                                          alt: "",
                                        }),
                                        "YouTube",
                                        (0, x.jsx)("div", {
                                          className: "upload-action",
                                          children:
                                            "uploaded" !== _ &&
                                            (0, x.jsx)(d.Z, {
                                              type: "primary",
                                              size: "small",
                                              onClick: function () {
                                                return (
                                                  n.googleEvent(
                                                    "upload to youtube",
                                                    "local"
                                                  ),
                                                  Ye(u.fileUrl)
                                                    .then(function (e) {
                                                      return (
                                                        Yt ||
                                                        (Yt = new File(
                                                          [e],
                                                          u.detail.title +
                                                          ".webm",
                                                          {
                                                            type: "video/webm",
                                                          }
                                                        )),
                                                        F("uploading"),
                                                        uploadVideo.uploadToYoutube(
                                                          Yt,
                                                          Ge
                                                        )
                                                      );
                                                    })
                                                    .then(function (e) {
                                                      qe(
                                                        "youtube",
                                                        "https://youtu.be/" +
                                                        e.id
                                                      ),
                                                        F("uploaded");
                                                    })
                                                    .catch(function (e) {
                                                      F("upload");
                                                    })
                                                );
                                              },
                                              disabled: "upload" !== _,
                                              children:
                                                "upload" === _
                                                  ? "Upload"
                                                  : "Uploading",
                                            }),
                                        }),
                                      ],
                                    }),
                                    (0, x.jsx)("div", {
                                      className: "upload-item-detail",
                                      children: mn("youtube", _, B),
                                    }),
                                  ],
                                }),
                                (0, x.jsxs)("div", {
                                  className: "upload-item",
                                  id: "gDrive-upload",
                                  children: [
                                    (0, x.jsxs)("div", {
                                      className: "subtitle",
                                      children: [
                                        (0, x.jsx)("img", {
                                          src: "images/google-drive.svg",
                                          alt: "",
                                        }),
                                        "Google Drive",
                                        (0, x.jsx)("div", {
                                          className: "upload-action",
                                          children:
                                            "uploaded" !== U &&
                                            (0, x.jsx)(d.Z, {
                                              type: "primary",
                                              size: "small",
                                              onClick: function () {
                                                return (
                                                  n.googleEvent(
                                                    "upload to google drive",
                                                    "local"
                                                  ),
                                                  Ye(u.fileUrl)
                                                    .then(function (e) {
                                                      return (
                                                        Yt ||
                                                        (Yt = new File(
                                                          [e],
                                                          u.detail.title +
                                                          ".webm",
                                                          {
                                                            type: "video/webm",
                                                          }
                                                        )),
                                                        A("uploading"),
                                                        uploadVideo.uploadToGoogleDrive(
                                                          Yt,
                                                          He
                                                        )
                                                      );
                                                    })
                                                    .then(function (e) {
                                                      qe(
                                                        "gDrive",
                                                        e.alternateLink
                                                      ),
                                                        A("uploaded");
                                                    })
                                                    .catch(function (e) {
                                                      A("upload");
                                                    })
                                                );
                                              },
                                              disabled: "upload" !== U,
                                              children:
                                                "upload" === U
                                                  ? "Upload"
                                                  : "Uploading",
                                            }),
                                        }),
                                      ],
                                    }),
                                    (0, x.jsx)("div", {
                                      className: "upload-item-detail",
                                      children: mn("gDrive", U, W),
                                    }),
                                  ],
                                }),
                                te &&
                                (0, x.jsxs)("div", {
                                  className: "current-account",
                                  id: "current-account",
                                  children: [
                                    "Current account:",
                                    (0, x.jsx)(o.Z, {
                                      content: (0, x.jsxs)("div", {
                                        className: "notice",
                                        id: "notice",
                                        children: [
                                          "NOTICE: If you want to save video to another google account, please clear the authentication in awesome screenshot.",
                                          (0, x.jsx)("a", {
                                            className: "gdrive-signout",
                                            onClick: function () {
                                              n.googleOAuth.clearAccount(),
                                                oe(""),
                                                ee(!1);
                                            },
                                            children:
                                              "Click to clear Authentication",
                                          }),
                                        ],
                                      }),
                                      trigger: "click",
                                      visible: X,
                                      onVisibleChange: function (e) {
                                        ee(e);
                                      },
                                      children: (0, x.jsx)("span", {
                                        className: "current-account-email",
                                        id: "c-email",
                                        children: te,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            xe &&
                            (0, x.jsxs)("div", {
                              className: "tip",
                              children: [
                                "Recording length is limited to",
                                (0, x.jsx)("span", {
                                  children: " 5 minutes",
                                }),
                                ". Upgrade to unlock the unlimited recordings.",
                                (0, x.jsx)("div", {
                                  children: (0, x.jsx)("a", {
                                    className: "upgrade-btn",
                                    id: "upgrade-btn",
                                    onClick: function () {
                                      chrome.extension
                                        .getBackgroundPage()
                                        .goToUpgrade("Record_final");
                                    },
                                    children: "UPGRADE",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsx)(bt, {
                      visible: G,
                      onCancel: function () {
                        H(!1);
                      },
                      googleSigin: function () {
                        H(!1);
                        var e,
                          n =
                            "width=800,height=700,top=" +
                            (window.screen.availHeight - 30 - 700) / 2 +
                            ",left=" +
                            ((window.innerWidth > 810
                              ? window.innerWidth
                              : window.screen.availWidth) -
                              10 -
                              800) /
                            2;
                        ((e = "ext_local_video_google"),
                          j()({
                            method: "GET",
                            url: N + "/user/oauth/login",
                            params: { from: e },
                          })).then(function (e) {
                            var t = e.data.data.login_url;
                            window.open(t, "Login in with Google", n);
                          });
                      },
                      linkOther: function (e) {
                        H(!1),
                          b(
                            e
                              ? "https://www.awesomescreenshot.com/signup"
                              : "https://www.awesomescreenshot.com/signin"
                          );
                      },
                    }),
                    (0, x.jsx)(Zt, {
                      visible: he,
                      onCancel: function (e) {
                        fe(!1),
                          e &&
                          n.googleEvent(
                            "video_change_to_cloud",
                            "click_close"
                          );
                      },
                    }),
                    (0, x.jsx)(Ft, {
                      visible: Ie,
                      onCancel: function () {
                        Ne(!1);
                      },
                      type: "uploadVideo",
                    }),
                    (0, x.jsx)(m.Z, {
                      title: (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)("span", {
                          className: "title",
                          children: "Rename",
                        }),
                      }),
                      destroyOnClose: !0,
                      maskClosable: !1,
                      visible: $,
                      className: "video-modal",
                      footer: null,
                      onCancel: sn,
                      children: (0, x.jsx)("div", {
                        className: "edit-area",
                        children: (0, x.jsx)(Gt, {
                          defaultValue: u.detail.title,
                          onCancel: sn,
                          onSubmit: function (e) {
                            var n = Mt(
                              Mt({}, u),
                              {},
                              {
                                detail: Mt(
                                  Mt({}, u.detail),
                                  {},
                                  { title: e.title }
                                ),
                              }
                            );
                            f(n), DB.update(qt, n), J(!1);
                          },
                          isLoading: !1,
                        }),
                      }),
                    }),
                  ],
                })
                : "",
            });
          };
        f.render(
          (0, x.jsx)(Ht, {}),
          document.getElementById("video-page-wrapper")
        );
      },
    },
    r = {};
  function i(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var t = (r[e] = { exports: {} });
    return o[e].call(t.exports, t, t.exports, i), t.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (n, t, o, r) => {
      if (!t) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, o, r] = e[d], c = !0, s = 0; s < t.length; s++)
            (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](t[s]))
              ? t.splice(s--, 1)
              : ((c = !1), r < a && (a = r));
          if (c) {
            e.splice(d--, 1);
            var l = o();
            void 0 !== l && (n = l);
          }
        }
        return n;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [t, o, r];
    }),
    (i.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return i.d(n, { a: n }), n;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      i.r(r);
      var a = {};
      n = n || [null, t({}), t([]), t(t)];
      for (var c = 2 & o && e; "object" == typeof c && !~n.indexOf(c); c = t(c))
        Object.getOwnPropertyNames(c).forEach((n) => (a[n] = () => e[n]));
      return (a.default = () => e), i.d(r, a), r;
    }),
    (i.d = (e, n) => {
      for (var t in n)
        i.o(n, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var n = i.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e + "../../");
    })(),
    (() => {
      var e = { 791: 0 };
      i.O.j = (n) => 0 === e[n];
      var n = (n, t) => {
        var o,
          r,
          [a, c, s] = t,
          l = 0;
        if (a.some((n) => 0 !== e[n])) {
          for (o in c) i.o(c, o) && (i.m[o] = c[o]);
          if (s) var d = s(i);
        }
        for (n && n(t); l < a.length; l++)
          (r = a[l]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
        return i.O(d);
      },
        t = (self.webpackChunkawesomescreenshot_front =
          self.webpackChunkawesomescreenshot_front || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })(),
    i.O(void 0, [714, 769, 100, 71, 469, 247, 651, 655, 505, 498, 233], () =>
      i(33505)
    );
  var a = i.O(
    void 0,
    [714, 769, 100, 71, 469, 247, 651, 655, 505, 498, 233],
    () => i(90337)
  );
  a = i.O(a);
})();
