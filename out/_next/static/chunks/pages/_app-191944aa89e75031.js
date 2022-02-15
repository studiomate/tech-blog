;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3454: function (e, t, n) {
      'use strict'
      var r, a
      e.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) &&
        'object' === typeof (null === (a = n.g.process) || void 0 === a ? void 0 : a.env)
          ? n.g.process
          : n(7663)
    },
    1780: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(1802)
        },
      ])
    },
    4373: function (e, t, n) {
      'use strict'
      var r = n(7320),
        a = n(1664)
      function i(e, t, n) {
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
        )
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              i(e, t, n[t])
            })
        }
        return e
      }
      function c(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
        }
        return a
      }
      t.Z = function (e) {
        var t = e.href,
          n = c(e, ['href']),
          i = t && t.startsWith('/'),
          l = t && t.startsWith('#')
        return i
          ? (0, r.tZ)(a.default, { href: t, children: (0, r.tZ)('a', o({}, n)) })
          : l
          ? (0, r.tZ)('a', o({ href: t }, n))
          : (0, r.tZ)('a', o({ target: '_blank', rel: 'noopener noreferrer', href: t }, n))
      }
    },
    9072: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return a
        },
      })
      var r = n(7320)
      function a(e) {
        var t = e.children
        return (0, r.tZ)('div', {
          className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
          children: t,
        })
      }
    },
    8279: function (e, t, n) {
      'use strict'
      var r = n(7320),
        a = n(5675)
      t.Z = function (e) {
        var t = e.kind,
          n = e.href
        e.size
        return !n || ('mail' === t && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))
          ? null
          : (0, r.BX)('a', {
              className: 'text-sm text-gray-500 transition hover:text-gray-600',
              target: '_blank',
              rel: 'noopener noreferrer',
              href: n,
              children: [
                (0, r.tZ)('span', { className: 'sr-only', children: t }),
                (0, r.tZ)(a.default, {
                  src: '/static/images/'.concat(t, '.png'),
                  width: '40px',
                  height: '40px',
                }),
              ],
            })
      }
    },
    7059: function (e, t, n) {
      'use strict'
      var r = n(3454),
        a = {
          title: '\uc2a4\ud29c\ub514\uc624\uba54\uc774\ud2b8 \uae30\uc220 \ube14\ub85c\uadf8',
          author: '(\uc8fc)\uc2a4\ud29c\ub514\uc624\uba54\uc774\ud2b8',
          headerTitle: '\uc2a4\ud29c\ub514\uc624\uba54\uc774\ud2b8 \uae30\uc220 \ube14\ub85c\uadf8',
          description: '\uc2a4\ud29c\ub514\uc624\uba54\uc774\ud2b8 \uae30\uc220 \ube14\ub85c\uadf8',
          language: 'ko-kr',
          theme: 'system',
          siteUrl: 'https://studiomate.kr',
          siteRepo: 'https://github.com/studiomate/tech-blog',
          siteLogo: '/static/images/logo.png',
          image: '/static/images/avatar.png',
          blog: 'https://blog.naver.com/studiomate_official',
          facebook:
            'https://www.facebook.com/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%A9%94%EC%9D%B4%ED%8A%B8-2136523026568237/',
          instagram: 'https://www.instagram.com/studiomate_official',
          locale: 'ko-kr',
          analytics: {
            plausibleDataDomain: '',
            simpleAnalytics: !1,
            umamiWebsiteId: '',
            googleAnalyticsId: '',
          },
          newsletter: { provider: 'buttondown' },
          comment: {
            provider: 'giscus',
            giscusConfig: {
              repo: r.env.NEXT_PUBLIC_GISCUS_REPO,
              repositoryId: r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
              category: r.env.NEXT_PUBLIC_GISCUS_CATEGORY,
              categoryId: r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
              mapping: 'pathname',
              reactions: '1',
              metadata: '0',
              theme: 'light',
              darkTheme: 'transparent_dark',
              themeURL: '',
            },
            utterancesConfig: {
              repo: r.env.NEXT_PUBLIC_UTTERANCES_REPO,
              issueTerm: '',
              label: '',
              theme: '',
              darkTheme: '',
            },
            disqusConfig: { shortname: r.env.NEXT_PUBLIC_DISQUS_SHORTNAME },
          },
        }
      e.exports = a
    },
    8045: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t, n) {
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
        )
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ;(c = !0), (a = l)
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (c) throw a
                }
              }
              return i
            }
          })(e, t) ||
          c(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e)
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          c(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(n)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          )
        }
      }
      t.default = function (e) {
        var t,
          n = e.src,
          r = e.sizes,
          o = e.unoptimized,
          c = void 0 !== o && o,
          l = e.priority,
          d = void 0 !== l && l,
          m = e.loading,
          v = e.lazyRoot,
          y = void 0 === v ? null : v,
          b = e.lazyBoundary,
          w = void 0 === b ? '200px' : b,
          x = e.className,
          Z = e.quality,
          k = e.width,
          A = e.height,
          S = e.objectFit,
          j = e.objectPosition,
          T = e.onLoadingComplete,
          I = e.loader,
          L = void 0 === I ? _ : I,
          z = e.placeholder,
          C = void 0 === z ? 'empty' : z,
          P = e.blurDataURL,
          M = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = (function (e, t) {
                if (null == e) return {}
                var n,
                  r,
                  a = {},
                  i = Object.keys(e)
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
                return a
              })(e, t)
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e)
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
            }
            return a
          })(e, [
            'src',
            'sizes',
            'unoptimized',
            'priority',
            'loading',
            'lazyRoot',
            'lazyBoundary',
            'className',
            'quality',
            'width',
            'height',
            'objectFit',
            'objectPosition',
            'onLoadingComplete',
            'loader',
            'placeholder',
            'blurDataURL',
          ]),
          N = u.useRef(null),
          R = M,
          D = r ? 'responsive' : 'intrinsic'
        'layout' in R && (R.layout && (D = R.layout), delete R.layout)
        var B = ''
        if (
          (function (e) {
            return (
              'object' === typeof e &&
              (g(e) ||
                (function (e) {
                  return void 0 !== e.src
                })(e))
            )
          })(n)
        ) {
          var U = g(n) ? n.default : n
          if (!U.src)
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                JSON.stringify(U)
              )
            )
          if (
            ((P = P || U.blurDataURL),
            (B = U.src),
            (!D || 'fill' !== D) &&
              ((A = A || U.height), (k = k || U.width), !U.height || !U.width))
          )
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                JSON.stringify(U)
              )
            )
        }
        n = 'string' === typeof n ? n : B
        var V = E(k),
          H = E(A),
          X = E(Z),
          q = !d && ('lazy' === m || 'undefined' === typeof m)
        ;(n.startsWith('data:') || n.startsWith('blob:')) && ((c = !0), (q = !1))
        ;(null === (t = N.current) || void 0 === t ? void 0 : t.complete) && (q = !1)
        0
        var W,
          Y = i(f.useIntersection({ rootRef: y, rootMargin: w, disabled: !q }), 2),
          K = Y[0],
          G = Y[1],
          F = !q || G,
          J = {
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          $ = {
            boxSizing: 'border-box',
            display: 'block',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Q = !1,
          ee = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit: S,
            objectPosition: j,
          },
          te =
            'blur' === C
              ? {
                  filter: 'blur(20px)',
                  backgroundSize: S || 'cover',
                  backgroundImage: 'url("'.concat(P, '")'),
                  backgroundPosition: j || '0% 0%',
                }
              : {}
        if ('fill' === D)
          (J.display = 'block'),
            (J.position = 'absolute'),
            (J.top = 0),
            (J.left = 0),
            (J.bottom = 0),
            (J.right = 0)
        else if ('undefined' !== typeof V && 'undefined' !== typeof H) {
          var ne = H / V,
            re = isNaN(ne) ? '100%' : ''.concat(100 * ne, '%')
          'responsive' === D
            ? ((J.display = 'block'), (J.position = 'relative'), (Q = !0), ($.paddingTop = re))
            : 'intrinsic' === D
            ? ((J.display = 'inline-block'),
              (J.position = 'relative'),
              (J.maxWidth = '100%'),
              (Q = !0),
              ($.maxWidth = '100%'),
              (W =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27'
                  .concat(V, '%27 height=%27')
                  .concat(H, '%27/%3e')))
            : 'fixed' === D &&
              ((J.display = 'inline-block'),
              (J.position = 'relative'),
              (J.width = V),
              (J.height = H))
        } else 0
        var ae = { src: p, srcSet: void 0, sizes: void 0 }
        F &&
          (ae = O({ src: n, unoptimized: c, layout: D, width: V, quality: X, sizes: r, loader: L }))
        var ie = n
        0
        var oe
        0
        var ce = (a((oe = {}), 'imagesrcset', ae.srcSet), a(oe, 'imagesizes', ae.sizes), oe),
          le = u.default.useLayoutEffect,
          ue = u.useRef(T)
        return (
          u.useEffect(
            function () {
              ue.current = T
            },
            [T]
          ),
          le(
            function () {
              K(N.current)
            },
            [K]
          ),
          u.useEffect(
            function () {
              !(function (e, t, n, r, a) {
                var i = function () {
                  var t = e.current
                  t &&
                    t.src !== p &&
                    ('decode' in t ? t.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          e.current &&
                          ('blur' === r &&
                            ((t.style.filter = ''),
                            (t.style.backgroundSize = ''),
                            (t.style.backgroundImage = ''),
                            (t.style.backgroundPosition = '')),
                          a.current)
                        ) {
                          var n = t.naturalWidth,
                            i = t.naturalHeight
                          a.current({ naturalWidth: n, naturalHeight: i })
                        }
                      })
                }
                e.current && (e.current.complete ? i() : (e.current.onload = i))
              })(N, 0, 0, C, ue)
            },
            [ie, D, C, F]
          ),
          u.default.createElement(
            'span',
            { style: J },
            Q
              ? u.default.createElement(
                  'span',
                  { style: $ },
                  W
                    ? u.default.createElement('img', {
                        style: {
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: '',
                        'aria-hidden': !0,
                        src: W,
                      })
                    : null
                )
              : null,
            u.default.createElement(
              'img',
              Object.assign({}, R, ae, {
                decoding: 'async',
                'data-nimg': D,
                className: x,
                ref: N,
                style: h({}, ee, te),
              })
            ),
            q &&
              u.default.createElement(
                'noscript',
                null,
                u.default.createElement(
                  'img',
                  Object.assign(
                    {},
                    R,
                    O({
                      src: n,
                      unoptimized: c,
                      layout: D,
                      width: V,
                      quality: X,
                      sizes: r,
                      loader: L,
                    }),
                    {
                      decoding: 'async',
                      'data-nimg': D,
                      style: ee,
                      className: x,
                      loading: m || 'lazy',
                    }
                  )
                )
              ),
            d
              ? u.default.createElement(
                  s.default,
                  null,
                  u.default.createElement(
                    'link',
                    Object.assign(
                      {
                        key: '__nimg-' + ae.src + ae.srcSet + ae.sizes,
                        rel: 'preload',
                        as: 'image',
                        href: ae.srcSet ? void 0 : ae.src,
                      },
                      ce
                    )
                  )
                )
              : null
          )
        )
      }
      var l,
        u = (function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, n)
                    : {}
                r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n])
              }
          return (t.default = e), t
        })(n(1720)),
        s = (l = n(5443)) && l.__esModule ? l : { default: l },
        d = n(5809),
        f = n(7190)
      function m(e, t, n) {
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
        )
      }
      function h(e) {
        for (
          var t = arguments,
            n = function (n) {
              var r = null != t[n] ? t[n] : {},
                a = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  })
                )),
                a.forEach(function (t) {
                  m(e, t, r[t])
                })
            },
            r = 1;
          r < arguments.length;
          r++
        )
          n(r)
        return e
      }
      new Map()
      var p = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      var v = new Map([
        [
          'default',
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              a = e.quality
            0
            return ''
              .concat(t, '?url=')
              .concat(encodeURIComponent(n), '&w=')
              .concat(r, '&q=')
              .concat(a || 75)
          },
        ],
        [
          'imgix',
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              a = e.quality,
              i = new URL(''.concat(t).concat(A(n))),
              o = i.searchParams
            o.set('auto', o.get('auto') || 'format'),
              o.set('fit', o.get('fit') || 'max'),
              o.set('w', o.get('w') || r.toString()),
              a && o.set('q', a.toString())
            return i.href
          },
        ],
        [
          'cloudinary',
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              a = e.quality,
              i = ['f_auto', 'c_limit', 'w_' + r, 'q_' + (a || 'auto')].join(',') + '/'
            return ''.concat(t).concat(i).concat(A(n))
          },
        ],
        [
          'akamai',
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width
            return ''.concat(t).concat(A(n), '?imwidth=').concat(r)
          },
        ],
        [
          'custom',
          function (e) {
            var t = e.src
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            )
          },
        ],
      ])
      function g(e) {
        return void 0 !== e.default
      }
      var y =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: 'https://studiomate.github.io/tech-blog/',
            loader: 'akamai',
          } || d.imageConfigDefault,
        b = y.deviceSizes,
        w = y.imageSizes,
        x = y.loader,
        Z = y.path,
        k = (y.domains, o(b).concat(o(w)))
      function O(e) {
        var t = e.src,
          n = e.unoptimized,
          r = e.layout,
          a = e.width,
          i = e.quality,
          c = e.sizes,
          l = e.loader
        if (n) return { src: t, srcSet: void 0, sizes: void 0 }
        var u = (function (e, t, n) {
            if (n && ('fill' === t || 'responsive' === t)) {
              for (var r, a = /(^|\s)(1?\d?\d)vw/g, i = []; (r = a.exec(n)); r)
                i.push(parseInt(r[2]))
              if (i.length) {
                var c,
                  l = 0.01 * (c = Math).min.apply(c, o(i))
                return {
                  widths: k.filter(function (e) {
                    return e >= b[0] * l
                  }),
                  kind: 'w',
                }
              }
              return { widths: k, kind: 'w' }
            }
            return 'number' !== typeof e || 'fill' === t || 'responsive' === t
              ? { widths: b, kind: 'w' }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (e) {
                        return (
                          k.find(function (t) {
                            return t >= e
                          }) || k[k.length - 1]
                        )
                      })
                    )
                  ),
                  kind: 'x',
                }
          })(a, r, c),
          s = u.widths,
          d = u.kind,
          f = s.length - 1
        return {
          sizes: c || 'w' !== d ? c : '100vw',
          srcSet: s
            .map(function (e, n) {
              return ''
                .concat(l({ src: t, quality: i, width: e }), ' ')
                .concat('w' === d ? e : n + 1)
                .concat(d)
            })
            .join(', '),
          src: l({ src: t, quality: i, width: s[f] }),
        }
      }
      function E(e) {
        return 'number' === typeof e ? e : 'string' === typeof e ? parseInt(e, 10) : void 0
      }
      function _(e) {
        var t = v.get(x)
        if (t) return t(h({ root: Z }, e))
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(', '), '. Received: ')
            .concat(x)
        )
      }
      function A(e) {
        return '/' === e[0] ? e.slice(1) : e
      }
      b.sort(function (e, t) {
        return e - t
      }),
        k.sort(function (e, t) {
          return e - t
        })
    },
    8418: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ;(c = !0), (a = l)
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (c) throw a
                }
              }
              return i
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return r(e, t)
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      t.default = void 0
      var i,
        o = (i = n(1720)) && i.__esModule ? i : { default: i },
        c = n(6273),
        l = n(387),
        u = n(7190)
      var s = {}
      function d(e, t, n, r) {
        if (e && c.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          s[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t,
          n = !1 !== e.prefetch,
          r = l.useRouter(),
          i = o.default.useMemo(
            function () {
              var t = a(c.resolveHref(r, e.href, !0), 2),
                n = t[0],
                i = t[1]
              return { href: n, as: e.as ? c.resolveHref(r, e.as) : i || n }
            },
            [r, e.href, e.as]
          ),
          f = i.href,
          m = i.as,
          h = e.children,
          p = e.replace,
          v = e.shallow,
          g = e.scroll,
          y = e.locale
        'string' === typeof h && (h = o.default.createElement('a', null, h))
        var b = (t = o.default.Children.only(h)) && 'object' === typeof t && t.ref,
          w = a(u.useIntersection({ rootMargin: '200px' }), 2),
          x = w[0],
          Z = w[1],
          k = o.default.useCallback(
            function (e) {
              x(e), b && ('function' === typeof b ? b(e) : 'object' === typeof b && (b.current = e))
            },
            [b, x]
          )
        o.default.useEffect(
          function () {
            var e = Z && n && c.isLocalURL(f),
              t = 'undefined' !== typeof y ? y : r && r.locale,
              a = s[f + '%' + m + (t ? '%' + t : '')]
            e && !a && d(r, f, m, { locale: t })
          },
          [m, f, Z, y, n, r]
        )
        var O = {
          ref: k,
          onClick: function (e) {
            t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, i, o, l) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      c.isLocalURL(n))) &&
                    (e.preventDefault(),
                    null == o && r.indexOf('#') >= 0 && (o = !1),
                    t[a ? 'replace' : 'push'](n, r, { shallow: i, locale: l, scroll: o }))
                })(e, r, f, m, p, v, g, y)
          },
          onMouseEnter: function (e) {
            t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
              c.isLocalURL(f) && d(r, f, m, { priority: !0 })
          },
        }
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var E = 'undefined' !== typeof y ? y : r && r.locale,
            _ =
              r && r.isLocaleDomain && c.getDomainLocale(m, E, r && r.locales, r && r.domainLocales)
          O.href = _ || c.addBasePath(c.addLocale(m, E, r && r.defaultLocale))
        }
        return o.default.cloneElement(t, O)
      }
      t.default = f
    },
    7190: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ;(c = !0), (a = l)
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (c) throw a
                }
              }
              return i
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return r(e, t)
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            r = e.disabled || !c,
            u = i.useRef(),
            s = a(i.useState(!1), 2),
            d = s[0],
            f = s[1],
            m = a(i.useState(t ? t.current : null), 2),
            h = m[0],
            p = m[1],
            v = i.useCallback(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  r ||
                    d ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = l.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return l.set(t, (n = { id: t, observer: a, elements: r })), n
                          })(n),
                          a = r.id,
                          i = r.observer,
                          o = r.elements
                        return (
                          o.set(e, t),
                          i.observe(e),
                          function () {
                            o.delete(e),
                              i.unobserve(e),
                              0 === o.size && (i.disconnect(), l.delete(a))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && f(e)
                        },
                        { root: h, rootMargin: n }
                      )))
              },
              [r, h, n, d]
            )
          return (
            i.useEffect(
              function () {
                if (!c && !d) {
                  var e = o.requestIdleCallback(function () {
                    return f(!0)
                  })
                  return function () {
                    return o.cancelIdleCallback(e)
                  }
                }
              },
              [d]
            ),
            i.useEffect(
              function () {
                t && p(t.current)
              },
              [t]
            ),
            [v, d]
          )
        })
      var i = n(1720),
        o = n(9311),
        c = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    1802: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return B
          },
        })
      var r = n(7320),
        a = (n(7762), n(6870), n(1330), n(1720)),
        i = n(9008),
        o = (0, a.createContext)({ setTheme: function (e) {}, themes: [] }),
        c = function () {
          return (0, a.useContext)(o)
        },
        l = ['light', 'dark'],
        u = '(prefers-color-scheme: dark)',
        s = function (e) {
          var t = e.forcedTheme,
            n = e.disableTransitionOnChange,
            r = void 0 !== n && n,
            i = e.enableSystem,
            c = void 0 === i || i,
            s = e.enableColorScheme,
            p = void 0 === s || s,
            v = e.storageKey,
            g = void 0 === v ? 'theme' : v,
            y = e.themes,
            b = void 0 === y ? ['light', 'dark'] : y,
            w = e.defaultTheme,
            x = void 0 === w ? (c ? 'system' : 'light') : w,
            Z = e.attribute,
            k = void 0 === Z ? 'data-theme' : Z,
            O = e.value,
            E = e.children,
            _ = (0, a.useState)(function () {
              return f(g, x)
            }),
            A = _[0],
            S = _[1],
            j = (0, a.useState)(function () {
              return f(g)
            }),
            T = j[0],
            I = j[1],
            L = O ? Object.values(O) : b,
            z = (0, a.useCallback)(
              function (e) {
                var n = h(e)
                I(n), 'system' !== A || t || P(n, !1)
              },
              [A, t]
            ),
            C = (0, a.useRef)(z)
          C.current = z
          var P = (0, a.useCallback)(function (e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = !0)
            var a = (null == O ? void 0 : O[e]) || e,
              i = r && n ? m() : null
            if (t)
              try {
                localStorage.setItem(g, e)
              } catch (e) {}
            if ('system' === e && c) {
              var o = h()
              a = (null == O ? void 0 : O[o]) || o
            }
            if (n) {
              var l,
                u = document.documentElement
              'class' === k
                ? ((l = u.classList).remove.apply(l, L), u.classList.add(a))
                : u.setAttribute(k, a),
                null == i || i()
            }
          }, [])
          ;(0, a.useEffect)(function () {
            var e = function () {
                return C.current.apply(C, [].slice.call(arguments))
              },
              t = window.matchMedia(u)
            return (
              t.addListener(e),
              e(t),
              function () {
                return t.removeListener(e)
              }
            )
          }, [])
          var M = (0, a.useCallback)(
            function (e) {
              t ? P(e, !0, !1) : P(e), S(e)
            },
            [t]
          )
          return (
            (0, a.useEffect)(
              function () {
                var e = function (e) {
                  e.key === g && M(e.newValue)
                }
                return (
                  window.addEventListener('storage', e),
                  function () {
                    return window.removeEventListener('storage', e)
                  }
                )
              },
              [M]
            ),
            (0, a.useEffect)(
              function () {
                if (p) {
                  var e =
                    t && l.includes(t) ? t : A && l.includes(A) ? A : ('system' === A && T) || null
                  document.documentElement.style.setProperty('color-scheme', e)
                }
              },
              [p, A, T, t]
            ),
            a.default.createElement(
              o.Provider,
              {
                value: {
                  theme: A,
                  setTheme: M,
                  forcedTheme: t,
                  resolvedTheme: 'system' === A ? T : A,
                  themes: c ? [].concat(b, ['system']) : b,
                  systemTheme: c ? T : void 0,
                },
              },
              a.default.createElement(d, {
                forcedTheme: t,
                storageKey: g,
                attribute: k,
                value: O,
                enableSystem: c,
                defaultTheme: x,
                attrs: L,
              }),
              E
            )
          )
        },
        d = (0, a.memo)(
          function (e) {
            var t = e.forcedTheme,
              n = e.storageKey,
              r = e.attribute,
              o = e.enableSystem,
              c = e.defaultTheme,
              l = e.value,
              s =
                'class' === r
                  ? 'var d=document.documentElement.classList;d.remove(' +
                    e.attrs
                      .map(function (e) {
                        return "'" + e + "'"
                      })
                      .join(',') +
                    ');'
                  : 'var d=document.documentElement;',
              d = function (e, t) {
                e = (null == l ? void 0 : l[e]) || e
                var n = t ? e : "'" + e + "'"
                return 'class' === r ? 'd.add(' + n + ')' : "d.setAttribute('" + r + "', " + n + ')'
              },
              f = 'system' === c
            return a.default.createElement(
              i.default,
              null,
              a.default.createElement(
                'script',
                t
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: { __html: '!function(){' + s + d(t) + '}()' },
                    }
                  : o
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try {' +
                          s +
                          "var e=localStorage.getItem('" +
                          n +
                          "');" +
                          (f ? '' : d(c) + ';') +
                          'if("system"===e||(!e&&' +
                          f +
                          ')){var t="' +
                          u +
                          '",m=window.matchMedia(t);m.media!==t||m.matches?' +
                          d('dark') +
                          ':' +
                          d('light') +
                          '}else if(e) ' +
                          (l ? 'var x=' + JSON.stringify(l) + ';' : '') +
                          d(l ? 'x[e]' : 'e', !0) +
                          '}catch(e){}}()',
                      },
                    }
                  : {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try{' +
                          s +
                          'var e=localStorage.getItem("' +
                          n +
                          '");if(e){' +
                          (l ? 'var x=' + JSON.stringify(l) + ';' : '') +
                          d(l ? 'x[e]' : 'e', !0) +
                          '}else{' +
                          d(c) +
                          ';}}catch(t){}}();',
                      },
                    }
              )
            )
          },
          function (e, t) {
            return e.forcedTheme === t.forcedTheme
          }
        ),
        f = function (e, t) {
          if ('undefined' != typeof window) {
            var n
            try {
              n = localStorage.getItem(e) || void 0
            } catch (e) {}
            return n || t
          }
        },
        m = function () {
          var e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            function () {
              window.getComputedStyle(document.body),
                setTimeout(function () {
                  document.head.removeChild(e)
                }, 1)
            }
          )
        },
        h = function (e) {
          return e || (e = window.matchMedia(u)), e.matches ? 'dark' : 'light'
        },
        p = n(7059),
        v = n.n(p),
        g = n(4298),
        y = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                src: 'https://www.googletagmanager.com/gtag/js?id='.concat(
                  v().analytics.googleAnalyticsId
                ),
              }),
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                id: 'ga-script',
                children:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                    v().analytics.googleAnalyticsId,
                    "', {\n              page_path: window.location.pathname,\n            });\n        "
                  ),
              }),
            ],
          })
        }
      var b,
        w = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                'data-domain': v().analytics.plausibleDataDomain,
                src: 'https://plausible.io/js/plausible.js',
              }),
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                id: 'plausible-script',
                children:
                  '\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        ',
              }),
            ],
          })
        },
        x = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                id: 'sa-script',
                children:
                  '\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        ',
              }),
              (0, r.tZ)(g.default, {
                strategy: 'lazyOnload',
                src: 'https://scripts.simpleanalyticscdn.com/latest.js',
              }),
            ],
          })
        },
        Z = function () {
          return (0, r.tZ)(r.HY, {
            children: (0, r.tZ)(g.default, {
              async: !0,
              defer: !0,
              'data-website-id': v().analytics.umamiWebsiteId,
              src: 'https://umami.example.com/umami.js',
            }),
          })
        },
        k = function () {
          return (0, r.BX)(r.HY, {
            children: [
              v().analytics.plausibleDataDomain && (0, r.tZ)(w, {}),
              v().analytics.simpleAnalytics && (0, r.tZ)(x, {}),
              v().analytics.umamiWebsiteId && (0, r.tZ)(Z, {}),
              v().analytics.googleAnalyticsId && (0, r.tZ)(y, {}),
            ],
          })
        },
        O = [
          { href: '/blog', title: 'Blog' },
          { href: '/tags', title: 'Tags' },
        ]
      function E() {
        return (E =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var _,
        A = function (e) {
          return a.createElement(
            'svg',
            E({ width: 162, height: 16, xmlns: 'http://www.w3.org/2000/svg' }, e),
            b ||
              (b = a.createElement('path', {
                d: 'm23.757 15.461.243-.118a2.7 2.7 0 0 0 1.247-3.61l-4.98-10.214A2.706 2.706 0 0 0 16.654.273l-.243.118A2.698 2.698 0 0 0 15.162 4l4.98 10.216a2.705 2.705 0 0 0 3.615 1.245Zm-9.86 0 .243-.118a2.7 2.7 0 0 0 1.247-3.61l-4.98-10.214A2.704 2.704 0 0 0 6.793.273L6.55.391A2.697 2.697 0 0 0 5.302 4l4.98 10.216a2.706 2.706 0 0 0 3.615 1.245Zm-8.09-2.878a2.925 2.925 0 0 0-5.766.991 2.923 2.923 0 0 0 2.386 2.385 2.927 2.927 0 0 0 3.38-3.376Zm146.074 1.438c0 .687.43 1.138 1.139 1.138h7.29c.797 0 1.29-.472 1.29-1.138 0-.667-.493-1.14-1.29-1.14h-5.762c-.086 0-.13-.042-.13-.127V9.06c0-.087.044-.13.13-.13h4.687c.796 0 1.29-.473 1.29-1.138 0-.666-.494-1.14-1.29-1.14h-4.687c-.086 0-.13-.043-.13-.127V2.959c0-.087.044-.13.13-.13h5.762c.797 0 1.29-.472 1.29-1.137 0-.667-.493-1.14-1.29-1.14h-7.29c-.71 0-1.139.452-1.139 1.14v12.33ZM142.742 2.83c.086 0 .129.042.129.128v10.978c0 .815.538 1.33 1.268 1.33.732 0 1.27-.515 1.27-1.33V2.958c0-.086.043-.128.13-.128h2.902c.796 0 1.29-.473 1.29-1.14 0-.665-.494-1.137-1.29-1.137h-8.602c-.795 0-1.29.472-1.29 1.138 0 .666.495 1.139 1.29 1.139h2.903Zm-15.74 10.783a1.51 1.51 0 0 0-.087.472c0 .73.581 1.182 1.225 1.182.56 0 1.012-.322 1.206-.881l.773-2.277h5.592l.795 2.277c.194.559.645.88 1.204.88.646 0 1.226-.452 1.226-1.18 0-.173-.043-.345-.086-.473l-4.215-11.727c-.322-.904-.818-1.44-1.699-1.44-.88 0-1.354.536-1.677 1.44L127 13.613Zm3.913-3.76 1.977-5.691h.067l1.978 5.691h-4.022Zm-19.268 4.168c0 .795.495 1.245 1.182 1.245.667 0 1.163-.45 1.163-1.245V6.01h.106l2.688 6.055c.388.883.775 1.138 1.398 1.138.604 0 .989-.255 1.376-1.138l2.667-6.055h.108v8.011c0 .795.494 1.245 1.183 1.245.667 0 1.16-.45 1.16-1.245V1.971c0-.946-.537-1.526-1.397-1.526-.752 0-1.097.41-1.484 1.311l-3.527 8.098h-.086l-3.613-8.098c-.408-.901-.753-1.31-1.505-1.31-.86 0-1.419.579-1.419 1.525v12.05ZM92.594 3.818c-.344 1.053-.43 1.911-.43 4.038 0 2.127.086 2.985.43 4.038.753 2.298 2.602 3.501 5.119 3.501 2.537 0 4.388-1.203 5.139-3.5.345-1.054.43-1.912.43-4.039s-.085-2.985-.43-4.038c-.751-2.298-2.602-3.501-5.14-3.501-2.516 0-4.365 1.203-5.118 3.5Zm7.807.687c.215.623.3 1.396.3 3.351 0 1.956-.085 2.729-.3 3.35-.388 1.181-1.248 1.913-2.688 1.913-1.42 0-2.28-.732-2.668-1.913-.214-.621-.3-1.394-.3-3.35 0-1.955.086-2.728.3-3.35.387-1.181 1.248-1.913 2.668-1.913 1.44 0 2.3.732 2.688 1.912Zm-13.784 9.43c0 .815.538 1.33 1.268 1.33.731 0 1.27-.515 1.27-1.33V1.779c0-.817-.539-1.334-1.27-1.334-.73 0-1.268.517-1.268 1.334v12.158Zm-13.656.108c0 .687.43 1.116 1.14 1.116h3.591c2.969 0 4.776-1.053 5.527-3.351.28-.903.43-1.868.43-3.952 0-2.083-.15-3.05-.43-3.952-.751-2.298-2.558-3.352-5.527-3.352h-3.59c-.71 0-1.14.452-1.14 1.14v12.35Zm2.667-1.162c-.086 0-.128-.042-.128-.127V2.96c0-.087.042-.13.128-.13h1.936c1.698 0 2.774.58 3.225 1.956.171.6.28 1.46.28 3.071 0 1.61-.109 2.471-.28 3.072-.45 1.374-1.527 1.953-3.225 1.953h-1.936Zm-16.58-2.856c0 3.395 2.3 5.369 5.377 5.369 3.097 0 5.398-1.974 5.398-5.369V1.778c0-.817-.539-1.334-1.268-1.334-.733 0-1.27.517-1.27 1.334v8.205c0 2.02-1.183 3.136-2.86 3.136-1.657 0-2.84-1.117-2.84-3.136V1.778c0-.817-.536-1.334-1.268-1.334-.73 0-1.269.517-1.269 1.334v8.247ZM49.995 2.83c.086 0 .128.042.128.128v10.978c0 .815.539 1.33 1.269 1.33.732 0 1.27-.515 1.27-1.33V2.958c0-.086.042-.128.128-.128h2.904c.796 0 1.29-.473 1.29-1.14 0-.665-.494-1.137-1.29-1.137h-8.602c-.796 0-1.291.472-1.291 1.138 0 .666.495 1.139 1.29 1.139h2.904ZM34.469 14.085c-.409-.257-.644-.644-.644-1.096 0-.602.472-1.16 1.139-1.16.28 0 .56.086.817.236 1.118.667 2.15 1.054 3.376 1.054 1.806 0 2.838-.839 2.838-2.106 0-1.052-.602-1.76-2.644-2.018l-.753-.108c-2.946-.387-4.43-1.762-4.43-4.188 0-2.642 1.936-4.382 4.925-4.382 1.59 0 3.118.43 3.979.988.45.258.644.622.644 1.032 0 .643-.473 1.116-1.117 1.116-.26 0-.559-.086-.795-.194-.84-.407-1.722-.666-2.732-.666-1.548 0-2.323.837-2.323 1.955 0 1.053.732 1.697 2.666 1.976l.731.108c2.99.407 4.43 1.782 4.43 4.275 0 2.598-1.87 4.488-5.547 4.488-1.979 0-3.57-.666-4.56-1.31Z',
                fill: '#212121',
                fillRule: 'evenodd',
              }))
          )
        }
      function S() {
        return (S =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var j = function (e) {
          return a.createElement(
            'svg',
            S({ width: 162, height: 16, xmlns: 'http://www.w3.org/2000/svg' }, e),
            _ ||
              (_ = a.createElement('path', {
                d: 'm23.757 15.461.243-.118a2.7 2.7 0 0 0 1.247-3.61l-4.98-10.214A2.706 2.706 0 0 0 16.654.273l-.243.118A2.698 2.698 0 0 0 15.162 4l4.98 10.216a2.705 2.705 0 0 0 3.615 1.245Zm-9.86 0 .243-.118a2.7 2.7 0 0 0 1.247-3.61l-4.98-10.214A2.704 2.704 0 0 0 6.793.273L6.55.391A2.697 2.697 0 0 0 5.302 4l4.98 10.216a2.706 2.706 0 0 0 3.615 1.245Zm-8.09-2.878a2.925 2.925 0 0 0-5.766.991 2.923 2.923 0 0 0 2.386 2.385 2.927 2.927 0 0 0 3.38-3.376Zm146.074 1.438c0 .687.43 1.138 1.139 1.138h7.29c.797 0 1.29-.472 1.29-1.138 0-.667-.493-1.14-1.29-1.14h-5.762c-.086 0-.13-.042-.13-.127V9.06c0-.087.044-.13.13-.13h4.687c.796 0 1.29-.473 1.29-1.138 0-.666-.494-1.14-1.29-1.14h-4.687c-.086 0-.13-.043-.13-.127V2.959c0-.087.044-.13.13-.13h5.762c.797 0 1.29-.472 1.29-1.137 0-.667-.493-1.14-1.29-1.14h-7.29c-.71 0-1.139.452-1.139 1.14v12.33ZM142.742 2.83c.086 0 .129.042.129.128v10.978c0 .815.538 1.33 1.268 1.33.732 0 1.27-.515 1.27-1.33V2.958c0-.086.043-.128.13-.128h2.902c.796 0 1.29-.473 1.29-1.14 0-.665-.494-1.137-1.29-1.137h-8.602c-.795 0-1.29.472-1.29 1.138 0 .666.495 1.139 1.29 1.139h2.903Zm-15.74 10.783a1.51 1.51 0 0 0-.087.472c0 .73.581 1.182 1.225 1.182.56 0 1.012-.322 1.206-.881l.773-2.277h5.592l.795 2.277c.194.559.645.88 1.204.88.646 0 1.226-.452 1.226-1.18 0-.173-.043-.345-.086-.473l-4.215-11.727c-.322-.904-.818-1.44-1.699-1.44-.88 0-1.354.536-1.677 1.44L127 13.613Zm3.913-3.76 1.977-5.691h.067l1.978 5.691h-4.022Zm-19.268 4.168c0 .795.495 1.245 1.182 1.245.667 0 1.163-.45 1.163-1.245V6.01h.106l2.688 6.055c.388.883.775 1.138 1.398 1.138.604 0 .989-.255 1.376-1.138l2.667-6.055h.108v8.011c0 .795.494 1.245 1.183 1.245.667 0 1.16-.45 1.16-1.245V1.971c0-.946-.537-1.526-1.397-1.526-.752 0-1.097.41-1.484 1.311l-3.527 8.098h-.086l-3.613-8.098c-.408-.901-.753-1.31-1.505-1.31-.86 0-1.419.579-1.419 1.525v12.05ZM92.594 3.818c-.344 1.053-.43 1.911-.43 4.038 0 2.127.086 2.985.43 4.038.753 2.298 2.602 3.501 5.119 3.501 2.537 0 4.388-1.203 5.139-3.5.345-1.054.43-1.912.43-4.039s-.085-2.985-.43-4.038c-.751-2.298-2.602-3.501-5.14-3.501-2.516 0-4.365 1.203-5.118 3.5Zm7.807.687c.215.623.3 1.396.3 3.351 0 1.956-.085 2.729-.3 3.35-.388 1.181-1.248 1.913-2.688 1.913-1.42 0-2.28-.732-2.668-1.913-.214-.621-.3-1.394-.3-3.35 0-1.955.086-2.728.3-3.35.387-1.181 1.248-1.913 2.668-1.913 1.44 0 2.3.732 2.688 1.912Zm-13.784 9.43c0 .815.538 1.33 1.268 1.33.731 0 1.27-.515 1.27-1.33V1.779c0-.817-.539-1.334-1.27-1.334-.73 0-1.268.517-1.268 1.334v12.158Zm-13.656.108c0 .687.43 1.116 1.14 1.116h3.591c2.969 0 4.776-1.053 5.527-3.351.28-.903.43-1.868.43-3.952 0-2.083-.15-3.05-.43-3.952-.751-2.298-2.558-3.352-5.527-3.352h-3.59c-.71 0-1.14.452-1.14 1.14v12.35Zm2.667-1.162c-.086 0-.128-.042-.128-.127V2.96c0-.087.042-.13.128-.13h1.936c1.698 0 2.774.58 3.225 1.956.171.6.28 1.46.28 3.071 0 1.61-.109 2.471-.28 3.072-.45 1.374-1.527 1.953-3.225 1.953h-1.936Zm-16.58-2.856c0 3.395 2.3 5.369 5.377 5.369 3.097 0 5.398-1.974 5.398-5.369V1.778c0-.817-.539-1.334-1.268-1.334-.733 0-1.27.517-1.27 1.334v8.205c0 2.02-1.183 3.136-2.86 3.136-1.657 0-2.84-1.117-2.84-3.136V1.778c0-.817-.536-1.334-1.268-1.334-.73 0-1.269.517-1.269 1.334v8.247ZM49.995 2.83c.086 0 .128.042.128.128v10.978c0 .815.539 1.33 1.269 1.33.732 0 1.27-.515 1.27-1.33V2.958c0-.086.042-.128.128-.128h2.904c.796 0 1.29-.473 1.29-1.14 0-.665-.494-1.137-1.29-1.137h-8.602c-.796 0-1.291.472-1.291 1.138 0 .666.495 1.139 1.29 1.139h2.904ZM34.469 14.085c-.409-.257-.644-.644-.644-1.096 0-.602.472-1.16 1.139-1.16.28 0 .56.086.817.236 1.118.667 2.15 1.054 3.376 1.054 1.806 0 2.838-.839 2.838-2.106 0-1.052-.602-1.76-2.644-2.018l-.753-.108c-2.946-.387-4.43-1.762-4.43-4.188 0-2.642 1.936-4.382 4.925-4.382 1.59 0 3.118.43 3.979.988.45.258.644.622.644 1.032 0 .643-.473 1.116-1.117 1.116-.26 0-.559-.086-.795-.194-.84-.407-1.722-.666-2.732-.666-1.548 0-2.323.837-2.323 1.955 0 1.053.732 1.697 2.666 1.976l.731.108c2.99.407 4.43 1.782 4.43 4.275 0 2.598-1.87 4.488-5.547 4.488-1.979 0-3.57-.666-4.56-1.31Z',
                fill: '#fff',
                fillRule: 'evenodd',
              }))
          )
        },
        T = n(4373),
        I = n(9072),
        L = n(8279)
      function z() {
        return (0, r.tZ)('footer', {
          children: (0, r.BX)('div', {
            className: 'mt-16 flex flex-col items-center',
            children: [
              (0, r.BX)('div', {
                className: 'mb-3 flex space-x-4',
                children: [
                  (0, r.tZ)(L.Z, { kind: 'blog', href: v().blog, size: '6' }),
                  (0, r.tZ)(L.Z, { kind: 'facebook', href: v().facebook, size: '6' }),
                  (0, r.tZ)(L.Z, { kind: 'instagram', href: v().instagram, size: '6' }),
                ],
              }),
              (0, r.tZ)('div', {
                className: 'mb-6 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: (0, r.tZ)('div', { children: v().author }),
              }),
            ],
          }),
        })
      }
      var C = function () {
          var e = (0, a.useState)(!1),
            t = e[0],
            n = e[1],
            i = function () {
              n(function (e) {
                return (document.body.style.overflow = e ? 'auto' : 'hidden'), !e
              })
            }
          return (0, r.BX)('div', {
            className: 'sm:hidden',
            children: [
              (0, r.tZ)('button', {
                type: 'button',
                className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
                'aria-label': 'Toggle Menu',
                onClick: i,
                children: (0, r.tZ)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-900 dark:text-gray-100',
                  children: t
                    ? (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                        clipRule: 'evenodd',
                      }),
                }),
              }),
              (0, r.BX)('div', {
                className:
                  'fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 '.concat(
                    t ? 'translate-x-0' : 'translate-x-full'
                  ),
                children: [
                  (0, r.tZ)('button', {
                    type: 'button',
                    'aria-label': 'toggle modal',
                    className: 'fixed h-full w-full cursor-auto focus:outline-none',
                    onClick: i,
                  }),
                  (0, r.tZ)('nav', {
                    className: 'fixed mt-8 h-full',
                    children: O.map(function (e) {
                      return (0,
                      r.tZ)('div', { className: 'px-12 py-4', children: (0, r.tZ)(T.Z, { href: e.href, className: 'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100', onClick: i, children: e.title }) }, e.title)
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        P = function () {
          var e = (0, a.useState)(!1),
            t = e[0],
            n = e[1],
            i = c(),
            o = i.theme,
            l = i.setTheme,
            u = i.resolvedTheme
          return (
            (0, a.useEffect)(function () {
              return n(!0)
            }, []),
            (0, r.tZ)('button', {
              'aria-label': 'Toggle Dark Mode',
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
              onClick: function () {
                return l('dark' === o || 'dark' === u ? 'light' : 'dark')
              },
              children: (0, r.tZ)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children:
                  !t || ('dark' !== o && 'dark' !== u)
                    ? (0, r.tZ)('path', {
                        d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                        clipRule: 'evenodd',
                      }),
              }),
            })
          )
        },
        M = function (e) {
          var t = e.children,
            n = c(),
            a = n.theme
          n.setTheme, n.resolvedTheme
          return (0, r.tZ)(I.Z, {
            children: (0, r.BX)('div', {
              className: 'flex h-screen flex-col justify-between',
              children: [
                (0, r.BX)('header', {
                  className: 'flex items-center justify-between py-10',
                  children: [
                    (0, r.tZ)('div', {
                      children: (0, r.tZ)(T.Z, {
                        href: '/',
                        'aria-label': v().headerTitle,
                        children: (0, r.tZ)('div', {
                          className: 'flex items-center justify-between',
                          children: (0, r.tZ)('div', {
                            className: 'mr-3',
                            children: 'light' === a ? (0, r.tZ)(A, {}) : (0, r.tZ)(j, {}),
                          }),
                        }),
                      }),
                    }),
                    (0, r.BX)('div', {
                      className: 'flex items-center text-base leading-5',
                      children: [
                        (0, r.tZ)('div', {
                          className: 'hidden sm:block',
                          children: O.map(function (e) {
                            return (0,
                            r.tZ)(T.Z, { href: e.href, className: 'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4', children: e.title }, e.title)
                          }),
                        }),
                        (0, r.tZ)(P, {}),
                        (0, r.tZ)(C, {}),
                      ],
                    }),
                  ],
                }),
                (0, r.tZ)('main', { className: 'mb-auto', children: t }),
                (0, r.tZ)(z, {}),
              ],
            }),
          })
        },
        N = (n(1163), n(3454))
      function R(e, t, n) {
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
        )
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              R(e, t, n[t])
            })
        }
        return e
      }
      N.env.SOCKET
      function B(e) {
        var t = e.Component,
          n = e.pageProps
        return (0, r.BX)(s, {
          attribute: 'class',
          defaultTheme: v().theme,
          children: [
            (0, r.tZ)(i.default, {
              children: (0, r.tZ)('meta', {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
              }),
            }),
            false,
            (0, r.tZ)(k, {}),
            (0, r.tZ)(M, { children: (0, r.tZ)(t, D({}, n)) }),
          ],
        })
      }
    },
    1330: function () {},
    6870: function () {},
    7762: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                n,
                r = (e.exports = {})
              function a() {
                throw new Error('setTimeout has not been defined')
              }
              function i() {
                throw new Error('clearTimeout has not been defined')
              }
              function o(e) {
                if (t === setTimeout) return setTimeout(e, 0)
                if ((t === a || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
                try {
                  return t(e, 0)
                } catch (r) {
                  try {
                    return t.call(null, e, 0)
                  } catch (r) {
                    return t.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' === typeof setTimeout ? setTimeout : a
                } catch (e) {
                  t = a
                }
                try {
                  n = 'function' === typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                  n = i
                }
              })()
              var c,
                l = [],
                u = !1,
                s = -1
              function d() {
                u && c && ((u = !1), c.length ? (l = c.concat(l)) : (s = -1), l.length && f())
              }
              function f() {
                if (!u) {
                  var e = o(d)
                  u = !0
                  for (var t = l.length; t; ) {
                    for (c = l, l = []; ++s < t; ) c && c[s].run()
                    ;(s = -1), (t = l.length)
                  }
                  ;(c = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e)
                      if ((n === i || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e)
                      try {
                        n(e)
                      } catch (t) {
                        try {
                          return n.call(null, e)
                        } catch (t) {
                          return n.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function m(e, t) {
                ;(this.fun = e), (this.array = t)
              }
              function h() {}
              ;(r.nextTick = function (e) {
                var t = new Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
                l.push(new m(e, t)), 1 !== l.length || u || o(f)
              }),
                (m.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return []
                }),
                (r.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (r.cwd = function () {
                  return '/'
                }),
                (r.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (r.umask = function () {
                  return 0
                })
            },
          },
          n = {}
        function r(e) {
          var a = n[e]
          if (void 0 !== a) return a.exports
          var i = (n[e] = { exports: {} }),
            o = !0
          try {
            t[e](i, i.exports, r), (o = !1)
          } finally {
            o && delete n[e]
          }
          return i.exports
        }
        r.ab = '//'
        var a = r(162)
        e.exports = a
      })()
    },
    5809: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.imageConfigDefault = t.VALID_LOADERS = void 0)
      t.VALID_LOADERS = ['default', 'imgix', 'cloudinary', 'akamai', 'custom']
      t.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
        formats: ['image/webp'],
      }
    },
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
    5675: function (e, t, n) {
      e.exports = n(8045)
    },
    1664: function (e, t, n) {
      e.exports = n(8418)
    },
    1163: function (e, t, n) {
      e.exports = n(387)
    },
    4298: function (e, t, n) {
      e.exports = n(699)
    },
    6584: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          Fragment: function () {
            return r.HY
          },
          jsx: function () {
            return i
          },
          jsxs: function () {
            return i
          },
          jsxDEV: function () {
            return i
          },
        })
      var r = n(6400),
        a = 0
      function i(e, t, n, i, o) {
        var c,
          l,
          u = {}
        for (l in t) 'ref' == l ? (c = t[l]) : (u[l] = t[l])
        var s = {
          type: e,
          props: u,
          key: n,
          ref: c,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: --a,
          __source: i,
          __self: o,
        }
        if ('function' == typeof e && (c = e.defaultProps))
          for (l in c) void 0 === u[l] && (u[l] = c[l])
        return r.YM.vnode && r.YM.vnode(s), s
      }
    },
    7320: function (e, t, n) {
      'use strict'
      n.d(t, {
        HY: function () {
          return r.Fragment
        },
        tZ: function () {
          return r.jsx
        },
        BX: function () {
          return r.jsxs
        },
      })
      var r = n(6584)
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [179], function () {
      return t(1780), t(387)
    })
    var n = e.O()
    _N_E = n
  },
])
