'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [774],
  {
    8217: function (e, u, r) {
      var t = r(6086),
        n = r(1720)
      u.useSubscription = function (e) {
        var u = e.getCurrentValue,
          r = e.subscribe,
          s = n.useState(function () {
            return { getCurrentValue: u, subscribe: r, value: u() }
          })
        e = s[0]
        var a = s[1]
        return (
          (s = e.value),
          (e.getCurrentValue === u && e.subscribe === r) ||
            ((s = u()), a({ getCurrentValue: u, subscribe: r, value: s })),
          n.useDebugValue(s),
          n.useEffect(
            function () {
              function e() {
                if (!n) {
                  var e = u()
                  a(function (n) {
                    return n.getCurrentValue !== u || n.subscribe !== r || n.value === e
                      ? n
                      : t({}, n, { value: e })
                  })
                }
              }
              var n = !1,
                s = r(e)
              return (
                e(),
                function () {
                  ;(n = !0), s()
                }
              )
            },
            [u, r]
          ),
          s
        )
      }
    },
    7161: function (e, u, r) {
      e.exports = r(8217)
    },
  },
])
