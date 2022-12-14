window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
var currentFileWriter = null;
function errorHandler(e) {
  var r = "";
  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      r = "QUOTA_EXCEEDED_ERR";
      break;
    case FileError.NOT_FOUND_ERR:
      r = "NOT_FOUND_ERR";
      break;
    case FileError.SECURITY_ERR:
      r = "SECURITY_ERR";
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      r = "INVALID_MODIFICATION_ERR";
      break;
    case FileError.INVALID_STATE_ERR:
      r = "INVALID_STATE_ERR";
      break;
    default:
      r = "Unknown Error";
  }
  return r;
}
var fileSaver = {
  fs: null,
  getFs: function () {
    return new Promise(function (e, r) {
      window.requestFileSystem(
        window.PERSISTENT,
        52428800,
        function (r) {
          e(r);
        },
        function (e) {
          r(e);
        }
      );
    });
  },
  save: function (e, r) {
    var n = this;
    return this.getFs().then(function (t) {
      return n.do_save(t, e, r);
    }, errorHandler);
  },
  remove: function (e) {
    this.getFs().then(function (r) {
      r.root.getFile(e, {}, function (e) {
        e.remove(function () { });
      });
    });
  },
  append: function (e, r) {
    currentFileWriter
      ? currentFileWriter.write(e)
      : this.getFs().then(function (n) {
        n.root.getFile(
          r,
          { create: !1 },
          function (r) {
            r.createWriter(
              function (r) {
                (r.onwriteend = function (e) { }),
                  (r.onerror = function (e) { }),
                  r.write(e),
                  (currentFileWriter = r);
              },
              function (e) { }
            );
          },
          function (e) { }
        );
      });
  },
  do_save: function (e, r, n) {
    return new Promise(function (t, i) {
      e.root.getFile(
        n,
        { create: !0 },
        function (e) {
          e.createWriter(
            function (n) {
              (n.onwriteend = function (r) {
                t(e.toURL());
              }),
                (n.onerror = function (e) {
                  i(e.toString());
                }),
                n.write(r),
                (currentFileWriter = n);
            },
            function (e) {
              i(e);
            }
          );
        },
        function (e) {
          i(e);
        }
      );
    });
  },
};
