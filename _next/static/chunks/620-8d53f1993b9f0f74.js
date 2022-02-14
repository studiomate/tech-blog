;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [620],
  {
    9618: function (e, t, r) {
      var n = {
        './AuthorLayout': 4152,
        './AuthorLayout.js': 4152,
        './ListLayout': 9795,
        './ListLayout.js': 9795,
        './PostLayout': 5105,
        './PostLayout.js': 5105,
        './PostSimple': 3259,
        './PostSimple.js': 3259,
      }
      function a(e) {
        var t = i(e)
        return r(t)
      }
      function i(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return n[e]
      }
      ;(a.keys = function () {
        return Object.keys(n)
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 9618)
    },
    6009: function (e, t, r) {
      'use strict'
      var n = r(7320),
        a = r(5675)
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }).apply(this, arguments)
      }
      t.Z = function (e) {
        var t = l({}, e)
        return (0, n.tZ)(
          a.default,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  })
                )),
                n.forEach(function (t) {
                  i(e, t, r[t])
                })
            }
            return e
          })({}, t)
        )
      }
    },
    8620: function (e, t, r) {
      'use strict'
      r.d(t, {
        J: function () {
          return f
        },
      })
      var n = r(7320),
        a = r(1720),
        i = r(3194),
        l = r(6009),
        c = r(4373),
        o = function (e) {
          var t = e.toc,
            r = e.indentDepth,
            a = void 0 === r ? 3 : r,
            i = e.fromHeading,
            l = void 0 === i ? 1 : i,
            c = e.toHeading,
            o = void 0 === c ? 6 : c,
            s = e.asDisclosure,
            d = void 0 !== s && s,
            u = e.exclude,
            m = void 0 === u ? '' : u,
            p = Array.isArray(m)
              ? new RegExp('^(' + m.join('|') + ')$', 'i')
              : new RegExp('^(' + m + ')$', 'i'),
            h = t.filter(function (e) {
              return e.depth >= l && e.depth <= o && !p.test(e.value)
            }),
            f = (0, n.tZ)('ul', {
              children: h.map(function (e) {
                return (0,
                n.tZ)('li', { className: ''.concat(e.depth >= a && 'ml-6'), children: (0, n.tZ)('a', { href: e.url, children: e.value }) }, e.value)
              }),
            })
          return (0, n.tZ)(n.HY, {
            children: d
              ? (0, n.BX)('details', {
                  open: !0,
                  children: [
                    (0, n.tZ)('summary', {
                      className: 'ml-6 pt-2 pb-2 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, n.tZ)('div', { className: 'ml-6', children: f }),
                  ],
                })
              : f,
          })
        },
        s = function (e) {
          var t = (0, a.useRef)(null),
            r = (0, a.useState)(!1),
            i = r[0],
            l = r[1],
            c = (0, a.useState)(!1),
            o = c[0],
            s = c[1]
          return (0, n.BX)('div', {
            ref: t,
            onMouseEnter: function () {
              l(!0)
            },
            onMouseLeave: function () {
              l(!1), s(!1)
            },
            className: 'relative',
            children: [
              i &&
                (0, n.tZ)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className:
                    'absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 '.concat(
                      o
                        ? 'border-green-400 focus:border-green-400 focus:outline-none'
                        : 'border-gray-300'
                    ),
                  onClick: function () {
                    s(!0),
                      navigator.clipboard.writeText(t.current.textContent),
                      setTimeout(function () {
                        s(!1)
                      }, 2e3)
                  },
                  children: (0, n.tZ)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: o ? 'text-green-400' : 'text-gray-300',
                    children: o
                      ? (0, n.tZ)(n.HY, {
                          children: (0, n.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, n.tZ)(n.HY, {
                          children: (0, n.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, n.tZ)('pre', { children: e.children }),
            ],
          })
        },
        d = r(8968)
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              u(e, t, r[t])
            })
        }
        return e
      }
      function p(e, t) {
        if (null == e) return {}
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              a = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]))
        }
        return a
      }
      var h = {
          Image: l.Z,
          TOCInline: o,
          a: c.Z,
          pre: s,
          BlogNewsletterForm: d.w,
          wrapper: function (e) {
            e.components
            var t = e.layout,
              a = p(e, ['components', 'layout']),
              i = r(9618)('./'.concat(t)).default
            return (0, n.tZ)(i, m({}, a))
          },
        },
        f = function (e) {
          var t = e.layout,
            r = e.mdxSource,
            l = p(e, ['layout', 'mdxSource']),
            c = (0, a.useMemo)(
              function () {
                return (0, i.getMDXComponent)(r)
              },
              [r]
            )
          return (0, n.tZ)(c, m({ layout: t, components: h }, l))
        }
    },
    8968: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return u
        },
      })
      var n = r(4051),
        a = r.n(n),
        i = r(7320),
        l = r(1720),
        c = r(7059),
        o = r.n(c)
      function s(e, t, r, n, a, i, l) {
        try {
          var c = e[i](l),
            o = c.value
        } catch (s) {
          return void r(s)
        }
        c.done ? t(o) : Promise.resolve(o).then(n, a)
      }
      var d = function (e) {
        var t = e.title,
          r = void 0 === t ? 'Subscribe to the newsletter' : t,
          n = (0, l.useRef)(null),
          c = (0, l.useState)(!1),
          d = c[0],
          u = c[1],
          m = (0, l.useState)(''),
          p = m[0],
          h = m[1],
          f = (0, l.useState)(!1),
          g = f[0],
          y = f[1],
          x = (function () {
            var e,
              t =
                ((e = a().mark(function e(t) {
                  var r
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.next = 3),
                            fetch('/api/'.concat(o().newsletter.provider), {
                              body: JSON.stringify({ email: n.current.value }),
                              headers: { 'Content-Type': 'application/json' },
                              method: 'POST',
                            })
                          )
                        case 3:
                          return (r = e.sent), (e.next = 6), r.json()
                        case 6:
                          if (!e.sent.error) {
                            e.next = 11
                            break
                          }
                          return (
                            u(!0),
                            h('Your e-mail address is invalid or you are already subscribed!'),
                            e.abrupt('return')
                          )
                        case 11:
                          ;(n.current.value = ''),
                            u(!1),
                            y(!0),
                            h('Successfully! \ud83c\udf89 You are now subscribed.')
                        case 15:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })),
                function () {
                  var t = this,
                    r = arguments
                  return new Promise(function (n, a) {
                    var i = e.apply(t, r)
                    function l(e) {
                      s(i, n, a, l, c, 'next', e)
                    }
                    function c(e) {
                      s(i, n, a, l, c, 'throw', e)
                    }
                    l(void 0)
                  })
                })
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        return (0, i.BX)('div', {
          children: [
            (0, i.tZ)('div', {
              className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
              children: r,
            }),
            (0, i.BX)('form', {
              className: 'flex flex-col sm:flex-row',
              onSubmit: x,
              children: [
                (0, i.BX)('div', {
                  children: [
                    (0, i.tZ)('label', {
                      className: 'sr-only',
                      htmlFor: 'email-input',
                      children: 'Email address',
                    }),
                    (0, i.tZ)('input', {
                      autoComplete: 'email',
                      className:
                        'w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black',
                      id: 'email-input',
                      name: 'email',
                      placeholder: g ? "You're subscribed !  \ud83c\udf89" : 'Enter your email',
                      ref: n,
                      required: !0,
                      type: 'email',
                      disabled: g,
                    }),
                  ],
                }),
                (0, i.tZ)('div', {
                  className: 'mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3',
                  children: (0, i.tZ)('button', {
                    className:
                      'w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 '.concat(
                        g ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400',
                        ' focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black'
                      ),
                    type: 'submit',
                    disabled: g,
                    children: g ? 'Thank you!' : 'Sign up',
                  }),
                }),
              ],
            }),
            d &&
              (0, i.tZ)('div', {
                className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
                children: p,
              }),
          ],
        })
      }
      t.Z = d
      var u = function (e) {
        var t = e.title
        return (0, i.tZ)('div', {
          className: 'flex items-center justify-center',
          children: (0, i.tZ)('div', {
            className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, i.tZ)(d, { title: t }),
          }),
        })
      }
    },
    8215: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return a
        },
      })
      var n = r(7320)
      function a(e) {
        var t = e.children
        return (0, n.tZ)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: t,
        })
      }
    },
    8590: function (e, t, r) {
      'use strict'
      r.d(t, {
        TQ: function () {
          return s
        },
        $t: function () {
          return d
        },
        Uy: function () {
          return u
        },
      })
      var n = r(7320),
        a = r(9008),
        i = r(1163),
        l = r(7059),
        c = r.n(l),
        o = function (e) {
          var t = e.title,
            r = e.description,
            l = e.ogType,
            o = e.ogImage,
            s = e.twImage,
            d = (0, i.useRouter)()
          return (0, n.BX)(a.default, {
            children: [
              (0, n.tZ)('title', { children: t }),
              (0, n.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, n.tZ)('meta', { name: 'description', content: r }),
              (0, n.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(d.asPath),
              }),
              (0, n.tZ)('meta', { property: 'og:type', content: l }),
              (0, n.tZ)('meta', { property: 'og:site_name', content: c().title }),
              (0, n.tZ)('meta', { property: 'og:description', content: r }),
              (0, n.tZ)('meta', { property: 'og:title', content: t }),
              'Array' === o.constructor.name
                ? o.map(function (e) {
                    var t = e.url
                    return (0, n.tZ)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, n.tZ)('meta', { property: 'og:image', content: o }, o),
              (0, n.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, n.tZ)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, n.tZ)('meta', { name: 'twitter:title', content: t }),
              (0, n.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, n.tZ)('meta', { name: 'twitter:image', content: s }),
            ],
          })
        },
        s = function (e) {
          var t = e.title,
            r = e.description,
            a = c().siteUrl + c().socialBanner,
            i = c().siteUrl + c().socialBanner
          return (0, n.tZ)(o, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: a,
            twImage: i,
          })
        },
        d = function (e) {
          var t = e.title,
            r = e.description,
            l = c().siteUrl + c().socialBanner,
            s = c().siteUrl + c().socialBanner,
            d = (0, i.useRouter)()
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(o, { title: t, description: r, ogType: 'website', ogImage: l, twImage: s }),
              (0, n.tZ)(a.default, {
                children: (0, n.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(d.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        u = function (e) {
          var t = e.authorDetails,
            r = e.title,
            l = e.summary,
            s = e.date,
            d = e.lastmod,
            u = e.url,
            m = e.images,
            p = void 0 === m ? [] : m,
            h = (0, i.useRouter)(),
            f = new Date(s).toISOString(),
            g = new Date(d || s).toISOString(),
            y = (0 === p.length ? [c().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (e) {
                return { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(e) }
              }
            ),
            x = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': u },
              headline: r,
              image: y,
              datePublished: f,
              dateModified: g,
              author: t
                ? t.map(function (e) {
                    return { '@type': 'Person', name: e.name }
                  })
                : { '@type': 'Person', name: c().author },
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: l,
            },
            v = y[0].url
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(o, { title: r, description: l, ogType: 'article', ogImage: y, twImage: v }),
              (0, n.BX)(a.default, {
                children: [
                  s && (0, n.tZ)('meta', { property: 'article:published_time', content: f }),
                  d && (0, n.tZ)('meta', { property: 'article:modified_time', content: g }),
                  (0, n.tZ)('link', {
                    rel: 'canonical',
                    href: ''.concat(c().siteUrl).concat(h.asPath),
                  }),
                  (0, n.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(x, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2540: function (e, t, r) {
      'use strict'
      var n = r(7320),
        a = r(1720),
        i = r(523),
        l = r.n(i)
      t.Z = function () {
        var e = (0, a.useState)(!1),
          t = e[0],
          r = e[1]
        ;(0, a.useEffect)(function () {
          l().polyfill()
          var e = function () {
            window.scrollY > 50 ? r(!0) : r(!1)
          }
          return (
            window.addEventListener('scroll', e),
            function () {
              return window.removeEventListener('scroll', e)
            }
          )
        }, [])
        return (0, n.BX)('div', {
          className: 'fixed right-8 bottom-8 hidden flex-col gap-3 '.concat(
            t ? 'md:flex' : 'md:hidden'
          ),
          children: [
            (0, n.tZ)('button', {
              'aria-label': 'Scroll To Comment',
              type: 'button',
              onClick: function () {
                document.getElementById('comment').scrollIntoView()
              },
              className:
                'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
              children: (0, n.tZ)('svg', {
                className: 'h-5 w-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, n.tZ)('path', {
                  fillRule: 'evenodd',
                  d: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
            (0, n.tZ)('button', {
              'aria-label': 'Scroll To Top',
              type: 'button',
              onClick: function () {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              },
              className:
                'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
              children: (0, n.tZ)('svg', {
                className: 'h-5 w-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, n.tZ)('path', {
                  fillRule: 'evenodd',
                  d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
          ],
        })
      }
    },
    2917: function (e, t, r) {
      'use strict'
      var n = r(7320),
        a = r(1664),
        i = r(7836)
      t.Z = function (e) {
        var t = e.text
        return (0, n.tZ)(a.default, {
          href: '/tags/'.concat((0, i.Z)(t)),
          children: (0, n.tZ)('a', {
            className:
              'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
            children: t.split(' ').join('-'),
          }),
        })
      }
    },
    9367: function (e, t, r) {
      'use strict'
      var n = r(7320),
        a = r(7059),
        i = r.n(a),
        l = r(5152),
        c = (0, l.default)(
          function () {
            return r.e(369).then(r.bind(r, 369))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [369]
              },
            },
            ssr: !1,
          }
        ),
        o = (0, l.default)(
          function () {
            return r.e(13).then(r.bind(r, 6013))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6013]
              },
            },
            ssr: !1,
          }
        ),
        s = (0, l.default)(
          function () {
            return r.e(970).then(r.bind(r, 9970))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9970]
              },
            },
            ssr: !1,
          }
        )
      t.Z = function (e) {
        var t,
          r = e.frontMatter
        switch (i().comment.giscusConfig.mapping || i().comment.utterancesConfig.issueTerm) {
          case 'pathname':
            t = r.slug
            break
          case 'url':
            t = window.location.href
            break
          case 'title':
            t = r.title
        }
        return (0, n.BX)('div', {
          id: 'comment',
          children: [
            i().comment && 'giscus' === i().comment.provider && (0, n.tZ)(o, { mapping: t }),
            i().comment && 'utterances' === i().comment.provider && (0, n.tZ)(c, { issueTerm: t }),
            i().comment && 'disqus' === i().comment.provider && (0, n.tZ)(s, { frontMatter: r }),
          ],
        })
      }
    },
    4152: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return c
          },
        })
      var n = r(7320),
        a = r(4642),
        i = r(6009),
        l = r(8590)
      function c(e) {
        var t = e.children,
          r = e.frontMatter,
          c = r.name,
          o = r.avatar,
          s = r.occupation,
          d = r.company,
          u = r.email,
          m = r.twitter,
          p = r.linkedin,
          h = r.github
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(l.TQ, { title: 'About - '.concat(c), description: 'About me - '.concat(c) }),
            (0, n.BX)('div', {
              className: 'divide-y',
              children: [
                (0, n.tZ)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: (0, n.tZ)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'About',
                  }),
                }),
                (0, n.BX)('div', {
                  className: 'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                  children: [
                    (0, n.BX)('div', {
                      className: 'flex flex-col items-center space-x-2 pt-8',
                      children: [
                        (0, n.tZ)(i.Z, {
                          src: o,
                          alt: 'avatar',
                          width: '192px',
                          height: '192px',
                          className: 'h-48 w-48 rounded-full',
                        }),
                        (0, n.tZ)('h3', {
                          className: 'pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight',
                          children: c,
                        }),
                        (0, n.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: s,
                        }),
                        (0, n.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: d,
                        }),
                        (0, n.BX)('div', {
                          className: 'flex space-x-3 pt-6',
                          children: [
                            (0, n.tZ)(a.Z, { kind: 'mail', href: 'mailto:'.concat(u) }),
                            (0, n.tZ)(a.Z, { kind: 'github', href: h }),
                            (0, n.tZ)(a.Z, { kind: 'linkedin', href: p }),
                            (0, n.tZ)(a.Z, { kind: 'twitter', href: m }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)('div', {
                      className: 'prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2',
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    9795: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return s
          },
        })
      var n = r(7320),
        a = r(4373),
        i = r(2917),
        l = (r(7059), r(1720))
      function c(e) {
        var t = e.totalPages,
          r = e.currentPage,
          i = parseInt(r) - 1 > 0,
          l = parseInt(r) + 1 <= parseInt(t)
        return (0, n.tZ)('div', {
          className: 'space-y-2 pt-6 pb-8 md:space-y-5',
          children: (0, n.BX)('nav', {
            className: 'flex justify-between',
            children: [
              !i &&
                (0, n.tZ)('button', {
                  rel: 'previous',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !i,
                  children: 'Previous',
                }),
              i &&
                (0, n.tZ)(a.Z, {
                  href: r - 1 === 1 ? '/blog/' : '/blog/page/'.concat(r - 1),
                  children: (0, n.tZ)('button', { rel: 'previous', children: 'Previous' }),
                }),
              (0, n.BX)('span', { children: [r, ' of ', t] }),
              !l &&
                (0, n.tZ)('button', {
                  rel: 'next',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !l,
                  children: 'Next',
                }),
              l &&
                (0, n.tZ)(a.Z, {
                  href: '/blog/page/'.concat(r + 1),
                  children: (0, n.tZ)('button', { rel: 'next', children: 'Next' }),
                }),
            ],
          }),
        })
      }
      var o = r(811)
      function s(e) {
        var t = e.posts,
          r = e.title,
          s = e.initialDisplayPosts,
          d = void 0 === s ? [] : s,
          u = e.pagination,
          m = (0, l.useState)(''),
          p = m[0],
          h = m[1],
          f = t.filter(function (e) {
            return (e.title + e.summary + e.tags.join(' ')).toLowerCase().includes(p.toLowerCase())
          }),
          g = d.length > 0 && !p ? d : f
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.BX)('div', {
              className: 'divide-y',
              children: [
                (0, n.BX)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, n.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: r,
                    }),
                    (0, n.BX)('div', {
                      className: 'relative max-w-lg',
                      children: [
                        (0, n.tZ)('input', {
                          'aria-label': 'Search articles',
                          type: 'text',
                          onChange: function (e) {
                            return h(e.target.value)
                          },
                          placeholder: 'Search articles',
                          className:
                            'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                        }),
                        (0, n.tZ)('svg', {
                          className:
                            'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          stroke: 'currentColor',
                          children: (0, n.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.BX)('ul', {
                  children: [
                    !f.length && 'No posts found.',
                    g.map(function (e) {
                      var t = e.slug,
                        r = e.date,
                        l = e.title,
                        c = e.summary,
                        s = e.tags
                      return (0, n.tZ)(
                        'li',
                        {
                          className: 'py-4',
                          children: (0, n.BX)('article', {
                            className:
                              'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                            children: [
                              (0, n.BX)('dl', {
                                children: [
                                  (0, n.tZ)('dt', {
                                    className: 'sr-only',
                                    children: 'Published on',
                                  }),
                                  (0, n.tZ)('dd', {
                                    className:
                                      'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                    children: (0, n.tZ)('time', {
                                      dateTime: r,
                                      children: (0, o.Z)(r),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.BX)('div', {
                                className: 'space-y-3 xl:col-span-3',
                                children: [
                                  (0, n.BX)('div', {
                                    children: [
                                      (0, n.tZ)('h3', {
                                        className: 'text-2xl font-bold leading-8 tracking-tight',
                                        children: (0, n.tZ)(a.Z, {
                                          href: '/blog/'.concat(t),
                                          className: 'text-gray-900 dark:text-gray-100',
                                          children: l,
                                        }),
                                      }),
                                      (0, n.tZ)('div', {
                                        className: 'flex flex-wrap',
                                        children: s.map(function (e) {
                                          return (0, n.tZ)(i.Z, { text: e }, e)
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.tZ)('div', {
                                    className: 'prose max-w-none text-gray-500 dark:text-gray-400',
                                    children: c,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    }),
                  ],
                }),
              ],
            }),
            u &&
              u.totalPages > 1 &&
              !p &&
              (0, n.tZ)(c, { currentPage: u.currentPage, totalPages: u.totalPages }),
          ],
        })
      }
    },
    5105: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return v
          },
        })
      var n = r(7320),
        a = r(4373),
        i = r(8215),
        l = r(9072),
        c = r(8590),
        o = r(6009),
        s = r(2917),
        d = r(7059),
        u = r.n(d),
        m = r(9367),
        p = r(2540)
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              h(e, t, r[t])
            })
        }
        return e
      }
      var g = function (e) {
          return ''.concat(u().siteRepo, '/blob/master/data/blog/').concat(e)
        },
        y = function (e) {
          return 'https://mobile.twitter.com/search?q='.concat(
            encodeURIComponent(''.concat(u().siteUrl, '/blog/').concat(e))
          )
        },
        x = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function v(e) {
        var t = e.frontMatter,
          r = e.authorDetails,
          d = e.next,
          h = e.prev,
          v = e.children,
          b = t.slug,
          Z = t.fileName,
          w = t.date,
          k = t.title,
          N = t.tags
        return (0, n.BX)(l.Z, {
          children: [
            (0, n.tZ)(
              c.Uy,
              f({ url: ''.concat(u().siteUrl, '/blog/').concat(b), authorDetails: r }, t)
            ),
            (0, n.tZ)(p.Z, {}),
            (0, n.tZ)('article', {
              children: (0, n.BX)('div', {
                className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                children: [
                  (0, n.tZ)('header', {
                    className: 'pt-6 xl:pb-6',
                    children: (0, n.BX)('div', {
                      className: 'space-y-1 text-center',
                      children: [
                        (0, n.tZ)('dl', {
                          className: 'space-y-10',
                          children: (0, n.BX)('div', {
                            children: [
                              (0, n.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, n.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, n.tZ)('time', {
                                  dateTime: w,
                                  children: new Date(w).toLocaleDateString(u().locale, x),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)('div', { children: (0, n.tZ)(i.Z, { children: k }) }),
                      ],
                    }),
                  }),
                  (0, n.BX)('div', {
                    className:
                      'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, n.BX)('dl', {
                        className:
                          'pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                        children: [
                          (0, n.tZ)('dt', { className: 'sr-only', children: 'Authors' }),
                          (0, n.tZ)('dd', {
                            children: (0, n.tZ)('ul', {
                              className:
                                'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                              children: r.map(function (e) {
                                return (0,
                                n.BX)('li', { className: 'flex items-center space-x-2', children: [e.avatar && (0, n.tZ)(o.Z, { src: e.avatar, width: '38px', height: '38px', alt: 'avatar', className: 'h-10 w-10 rounded-full' }), (0, n.BX)('dl', { className: 'whitespace-nowrap text-sm font-medium leading-5', children: [(0, n.tZ)('dt', { className: 'sr-only', children: 'Name' }), (0, n.tZ)('dd', { className: 'text-gray-900 dark:text-gray-100', children: e.name }), (0, n.tZ)('dt', { className: 'sr-only', children: 'Twitter' }), (0, n.tZ)('dd', { children: e.twitter && (0, n.tZ)(a.Z, { href: e.twitter, className: 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400', children: e.twitter.replace('https://twitter.com/', '@') }) })] })] }, e.name)
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, n.BX)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: [
                          (0, n.tZ)('div', {
                            className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                            children: v,
                          }),
                          (0, n.BX)('div', {
                            className: 'pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300',
                            children: [
                              (0, n.tZ)(a.Z, {
                                href: y(b),
                                rel: 'nofollow',
                                children: 'Discuss on Twitter',
                              }),
                              ' \u2022 ',
                              (0, n.tZ)(a.Z, { href: g(Z), children: 'View on GitHub' }),
                            ],
                          }),
                          (0, n.tZ)(m.Z, { frontMatter: t }),
                        ],
                      }),
                      (0, n.BX)('footer', {
                        children: [
                          (0, n.BX)('div', {
                            className:
                              'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                            children: [
                              N &&
                                (0, n.BX)('div', {
                                  className: 'py-4 xl:py-8',
                                  children: [
                                    (0, n.tZ)('h2', {
                                      className:
                                        'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                      children: 'Tags',
                                    }),
                                    (0, n.tZ)('div', {
                                      className: 'flex flex-wrap',
                                      children: N.map(function (e) {
                                        return (0, n.tZ)(s.Z, { text: e }, e)
                                      }),
                                    }),
                                  ],
                                }),
                              (d || h) &&
                                (0, n.BX)('div', {
                                  className:
                                    'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                  children: [
                                    h &&
                                      (0, n.BX)('div', {
                                        children: [
                                          (0, n.tZ)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Previous Article',
                                          }),
                                          (0, n.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, n.tZ)(a.Z, {
                                              href: '/blog/'.concat(h.slug),
                                              children: h.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                    d &&
                                      (0, n.BX)('div', {
                                        children: [
                                          (0, n.tZ)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Next Article',
                                          }),
                                          (0, n.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, n.tZ)(a.Z, {
                                              href: '/blog/'.concat(d.slug),
                                              children: d.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.tZ)('div', {
                            className: 'pt-4 xl:pt-8',
                            children: (0, n.tZ)(a.Z, {
                              href: '/blog',
                              className:
                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                              children: '\u2190 Back to the blog',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    3259: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return f
          },
        })
      var n = r(7320),
        a = r(4373),
        i = r(8215),
        l = r(9072),
        c = r(8590),
        o = r(7059),
        s = r.n(o),
        d = r(811),
        u = r(9367),
        m = r(2540)
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              p(e, t, r[t])
            })
        }
        return e
      }
      function f(e) {
        var t = e.frontMatter,
          r = (e.authorDetails, e.next),
          o = e.prev,
          p = e.children,
          f = t.date,
          g = t.title
        return (0, n.BX)(l.Z, {
          children: [
            (0, n.tZ)(c.Uy, h({ url: ''.concat(s().siteUrl, '/blog/').concat(t.slug) }, t)),
            (0, n.tZ)(m.Z, {}),
            (0, n.tZ)('article', {
              children: (0, n.BX)('div', {
                children: [
                  (0, n.tZ)('header', {
                    children: (0, n.BX)('div', {
                      className:
                        'space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700',
                      children: [
                        (0, n.tZ)('dl', {
                          children: (0, n.BX)('div', {
                            children: [
                              (0, n.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, n.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, n.tZ)('time', { dateTime: f, children: (0, d.Z)(f) }),
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)('div', { children: (0, n.tZ)(i.Z, { children: g }) }),
                      ],
                    }),
                  }),
                  (0, n.BX)('div', {
                    className: 'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, n.tZ)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: (0, n.tZ)('div', {
                          className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                          children: p,
                        }),
                      }),
                      (0, n.tZ)(u.Z, { frontMatter: t }),
                      (0, n.tZ)('footer', {
                        children: (0, n.BX)('div', {
                          className:
                            'flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base',
                          children: [
                            o &&
                              (0, n.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, n.BX)(a.Z, {
                                  href: '/blog/'.concat(o.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: ['\u2190 ', o.title],
                                }),
                              }),
                            r &&
                              (0, n.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, n.BX)(a.Z, {
                                  href: '/blog/'.concat(r.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: [r.title, ' \u2192'],
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
          ],
        })
      }
    },
    811: function (e, t, r) {
      'use strict'
      var n = r(7059),
        a = r.n(n)
      t.Z = function (e) {
        return new Date(e).toLocaleDateString(a().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    7836: function (e, t, r) {
      'use strict'
      var n = r(9671)
      t.Z = function (e) {
        return (0, n.slug)(e)
      }
    },
  },
])
