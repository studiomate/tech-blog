;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94],
  {
    9618: function (e, t, r) {
      var a = {
        './AuthorLayout': 4152,
        './AuthorLayout.js': 4152,
        './ListLayout': 9795,
        './ListLayout.js': 9795,
        './PostLayout': 5105,
        './PostLayout.js': 5105,
        './PostSimple': 3259,
        './PostSimple.js': 3259,
      }
      function n(e) {
        var t = s(e)
        return r(t)
      }
      function s(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return a[e]
      }
      ;(n.keys = function () {
        return Object.keys(a)
      }),
        (n.resolve = s),
        (e.exports = n),
        (n.id = 9618)
    },
    6082: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/blog/[...slug]',
        function () {
          return r(3719)
        },
      ])
    },
    6009: function (e, t, r) {
      'use strict'
      var a = r(5893),
        n = r(5675)
      function s(e, t, r) {
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
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
            }
            return e
          }).apply(this, arguments)
      }
      t.Z = function (e) {
        var t = i({}, e)
        return (0, a.jsx)(
          n.default,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  })
                )),
                a.forEach(function (t) {
                  s(e, t, r[t])
                })
            }
            return e
          })({}, t)
        )
      }
    },
    8215: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return n
        },
      })
      var a = r(5893)
      function n(e) {
        var t = e.children
        return (0, a.jsx)('h1', {
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
          return c
        },
        $t: function () {
          return d
        },
        Uy: function () {
          return u
        },
      })
      var a = r(5893),
        n = r(9008),
        s = r(1163),
        i = r(7059),
        l = r.n(i),
        o = function (e) {
          var t = e.title,
            r = e.description,
            i = e.ogType,
            o = e.ogImage,
            c = e.twImage,
            d = (0, s.useRouter)()
          return (0, a.jsxs)(n.default, {
            children: [
              (0, a.jsx)('title', { children: t }),
              (0, a.jsx)('meta', { name: 'robots', content: 'follow, index' }),
              (0, a.jsx)('meta', { name: 'description', content: r }),
              (0, a.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(l().siteUrl).concat(d.asPath),
              }),
              (0, a.jsx)('meta', { property: 'og:type', content: i }),
              (0, a.jsx)('meta', { property: 'og:site_name', content: l().title }),
              (0, a.jsx)('meta', { property: 'og:description', content: r }),
              (0, a.jsx)('meta', { property: 'og:title', content: t }),
              'Array' === o.constructor.name
                ? o.map(function (e) {
                    var t = e.url
                    return (0, a.jsx)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, a.jsx)('meta', { property: 'og:image', content: o }, o),
              (0, a.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, a.jsx)('meta', { name: 'twitter:site', content: l().twitter }),
              (0, a.jsx)('meta', { name: 'twitter:title', content: t }),
              (0, a.jsx)('meta', { name: 'twitter:description', content: r }),
              (0, a.jsx)('meta', { name: 'twitter:image', content: c }),
            ],
          })
        },
        c = function (e) {
          var t = e.title,
            r = e.description,
            n = l().siteUrl + l().socialBanner,
            s = l().siteUrl + l().socialBanner
          return (0, a.jsx)(o, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: n,
            twImage: s,
          })
        },
        d = function (e) {
          var t = e.title,
            r = e.description,
            i = l().siteUrl + l().socialBanner,
            c = l().siteUrl + l().socialBanner,
            d = (0, s.useRouter)()
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(o, {
                title: t,
                description: r,
                ogType: 'website',
                ogImage: i,
                twImage: c,
              }),
              (0, a.jsx)(n.default, {
                children: (0, a.jsx)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(l().siteUrl).concat(d.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        u = function (e) {
          var t = e.authorDetails,
            r = e.title,
            i = e.summary,
            c = e.date,
            d = e.lastmod,
            u = e.url,
            x = e.images,
            m = void 0 === x ? [] : x,
            p = (0, s.useRouter)(),
            h = new Date(c).toISOString(),
            g = new Date(d || c).toISOString(),
            f = (0 === m.length ? [l().socialBanner] : 'string' === typeof m ? [m] : m).map(
              function (e) {
                return { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(e) }
              }
            ),
            y = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': u },
              headline: r,
              image: f,
              datePublished: h,
              dateModified: g,
              author: t
                ? t.map(function (e) {
                    return { '@type': 'Person', name: e.name }
                  })
                : { '@type': 'Person', name: l().author },
              publisher: {
                '@type': 'Organization',
                name: l().author,
                logo: { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(l().siteLogo) },
              },
              description: i,
            },
            j = f[0].url
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(o, {
                title: r,
                description: i,
                ogType: 'article',
                ogImage: f,
                twImage: j,
              }),
              (0, a.jsxs)(n.default, {
                children: [
                  c && (0, a.jsx)('meta', { property: 'article:published_time', content: h }),
                  d && (0, a.jsx)('meta', { property: 'article:modified_time', content: g }),
                  (0, a.jsx)('link', {
                    rel: 'canonical',
                    href: ''.concat(l().siteUrl).concat(p.asPath),
                  }),
                  (0, a.jsx)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(y, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2540: function (e, t, r) {
      'use strict'
      var a = r(5893),
        n = r(7294),
        s = r(523),
        i = r.n(s)
      t.Z = function () {
        var e = (0, n.useState)(!1),
          t = e[0],
          r = e[1]
        ;(0, n.useEffect)(function () {
          i().polyfill()
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
        return (0, a.jsx)('div', {
          className: 'fixed right-8 bottom-8 hidden flex-col gap-3 '.concat(
            t ? 'md:flex' : 'md:hidden'
          ),
          children: (0, a.jsx)('button', {
            'aria-label': 'Scroll To Top',
            type: 'button',
            onClick: function () {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            },
            className:
              'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
            children: (0, a.jsx)('svg', {
              className: 'h-5 w-5',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              children: (0, a.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                clipRule: 'evenodd',
              }),
            }),
          }),
        })
      }
    },
    2917: function (e, t, r) {
      'use strict'
      var a = r(5893),
        n = r(1664),
        s = r(7836)
      t.Z = function (e) {
        var t = e.text
        return (0, a.jsx)(n.default, {
          href: '/tags/'.concat((0, s.Z)(t)),
          children: (0, a.jsx)('a', {
            className:
              'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
            children: t.split(' ').join('-'),
          }),
        })
      }
    },
    4152: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return l
          },
        })
      var a = r(5893),
        n = r(8279),
        s = r(6009),
        i = r(8590)
      function l(e) {
        var t = e.children,
          r = e.frontMatter,
          l = r.name,
          o = r.avatar,
          c = r.occupation,
          d = r.company,
          u = r.email,
          x = r.twitter,
          m = r.linkedin,
          p = r.github
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.TQ, { title: 'About - '.concat(l), description: 'About me - '.concat(l) }),
            (0, a.jsxs)('div', {
              className: 'divide-y',
              children: [
                (0, a.jsx)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: (0, a.jsx)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'About',
                  }),
                }),
                (0, a.jsxs)('div', {
                  className: 'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col items-center space-x-2 pt-8',
                      children: [
                        (0, a.jsx)(s.Z, {
                          src: o,
                          alt: 'avatar',
                          width: '192px',
                          height: '192px',
                          className: 'h-48 w-48 rounded-full',
                        }),
                        (0, a.jsx)('h3', {
                          className: 'pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight',
                          children: l,
                        }),
                        (0, a.jsx)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: c,
                        }),
                        (0, a.jsx)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: d,
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex space-x-3 pt-6',
                          children: [
                            (0, a.jsx)(n.Z, { kind: 'mail', href: 'mailto:'.concat(u) }),
                            (0, a.jsx)(n.Z, { kind: 'github', href: p }),
                            (0, a.jsx)(n.Z, { kind: 'linkedin', href: m }),
                            (0, a.jsx)(n.Z, { kind: 'twitter', href: x }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
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
            return c
          },
        })
      var a = r(5893),
        n = r(4373),
        s = r(2917),
        i = (r(7059), r(7294))
      function l(e) {
        var t = e.totalPages,
          r = e.currentPage,
          s = parseInt(r) - 1 > 0,
          i = parseInt(r) + 1 <= parseInt(t)
        return (0, a.jsx)('div', {
          className: 'space-y-2 pt-6 pb-8 md:space-y-5',
          children: (0, a.jsxs)('nav', {
            className: 'flex justify-between',
            children: [
              !s &&
                (0, a.jsx)('button', {
                  rel: 'previous',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !s,
                  children: 'Previous',
                }),
              s &&
                (0, a.jsx)(n.Z, {
                  href: r - 1 === 1 ? '/blog/' : '/blog/page/'.concat(r - 1),
                  children: (0, a.jsx)('button', { rel: 'previous', children: 'Previous' }),
                }),
              (0, a.jsxs)('span', { children: [r, ' of ', t] }),
              !i &&
                (0, a.jsx)('button', {
                  rel: 'next',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !i,
                  children: 'Next',
                }),
              i &&
                (0, a.jsx)(n.Z, {
                  href: '/blog/page/'.concat(r + 1),
                  children: (0, a.jsx)('button', { rel: 'next', children: 'Next' }),
                }),
            ],
          }),
        })
      }
      var o = r(811)
      function c(e) {
        var t = e.posts,
          r = e.title,
          c = e.initialDisplayPosts,
          d = void 0 === c ? [] : c,
          u = e.pagination,
          x = (0, i.useState)(''),
          m = x[0],
          p = x[1],
          h = t.filter(function (e) {
            return (e.title + e.summary + e.tags.join(' ')).toLowerCase().includes(m.toLowerCase())
          }),
          g = d.length > 0 && !m ? d : h
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)('div', {
              className: 'divide-y',
              children: [
                (0, a.jsxs)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, a.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: r,
                    }),
                    (0, a.jsxs)('div', {
                      className: 'relative max-w-lg',
                      children: [
                        (0, a.jsx)('input', {
                          'aria-label': 'Search articles',
                          type: 'text',
                          onChange: function (e) {
                            return p(e.target.value)
                          },
                          placeholder: 'Search articles',
                          className:
                            'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                        }),
                        (0, a.jsx)('svg', {
                          className:
                            'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          stroke: 'currentColor',
                          children: (0, a.jsx)('path', {
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
                (0, a.jsxs)('ul', {
                  children: [
                    !h.length && 'No posts found.',
                    g.map(function (e) {
                      var t = e.slug,
                        r = e.date,
                        i = e.title,
                        l = e.summary,
                        c = e.tags
                      return (0, a.jsx)(
                        'li',
                        {
                          className: 'py-4',
                          children: (0, a.jsxs)('article', {
                            className:
                              'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                            children: [
                              (0, a.jsxs)('dl', {
                                children: [
                                  (0, a.jsx)('dt', {
                                    className: 'sr-only',
                                    children: 'Published on',
                                  }),
                                  (0, a.jsx)('dd', {
                                    className:
                                      'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                    children: (0, a.jsx)('time', {
                                      dateTime: r,
                                      children: (0, o.Z)(r),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className: 'space-y-3 xl:col-span-3',
                                children: [
                                  (0, a.jsxs)('div', {
                                    children: [
                                      (0, a.jsx)('h3', {
                                        className: 'text-2xl font-bold leading-8 tracking-tight',
                                        children: (0, a.jsx)(n.Z, {
                                          href: '/blog/'.concat(t),
                                          className: 'text-gray-900 dark:text-gray-100',
                                          children: i,
                                        }),
                                      }),
                                      (0, a.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: c.map(function (e) {
                                          return (0, a.jsx)(s.Z, { text: e }, e)
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'prose max-w-none text-gray-500 dark:text-gray-400',
                                    children: l,
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
              !m &&
              (0, a.jsx)(l, { currentPage: u.currentPage, totalPages: u.totalPages }),
          ],
        })
      }
    },
    5105: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return g
          },
        })
      var a = r(5893),
        n = r(4373),
        s = r(8215),
        i = r(9072),
        l = r(8590),
        o = r(6009),
        c = r(2917),
        d = r(7059),
        u = r.n(d),
        x = r(2540)
      function m(e, t, r) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
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
        }
        return e
      }
      var h = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function g(e) {
        var t = e.frontMatter,
          r = e.authorDetails,
          d = e.next,
          m = e.prev,
          g = e.children,
          f = t.slug,
          y = (t.fileName, t.date),
          j = t.title,
          v = t.tags
        return (0, a.jsxs)(i.Z, {
          children: [
            (0, a.jsx)(
              l.Uy,
              p({ url: ''.concat(u().siteUrl, '/blog/').concat(f), authorDetails: r }, t)
            ),
            (0, a.jsx)(x.Z, {}),
            (0, a.jsx)('article', {
              children: (0, a.jsxs)('div', {
                className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                children: [
                  (0, a.jsx)('header', {
                    className: 'pt-6 xl:pb-6',
                    children: (0, a.jsxs)('div', {
                      className: 'space-y-1 text-center',
                      children: [
                        (0, a.jsx)('dl', {
                          className: 'space-y-10',
                          children: (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.jsx)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.jsx)('time', {
                                  dateTime: y,
                                  children: new Date(y).toLocaleDateString(u().locale, h),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', { children: (0, a.jsx)(s.Z, { children: j }) }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.jsxs)('dl', {
                        className:
                          'pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                        children: [
                          (0, a.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                          (0, a.jsx)('dd', {
                            children: (0, a.jsx)('ul', {
                              className:
                                'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                              children: r.map(function (e) {
                                return (0,
                                a.jsxs)('li', { className: 'flex items-center space-x-2', children: [e.avatar && (0, a.jsx)(o.Z, { src: e.avatar, width: '38px', height: '38px', alt: 'avatar', className: 'h-10 w-10 rounded-full' }), (0, a.jsxs)('dl', { className: 'whitespace-nowrap text-sm font-medium leading-5', children: [(0, a.jsx)('dt', { className: 'sr-only', children: 'Name' }), (0, a.jsx)('dd', { className: 'text-base text-gray-900 dark:text-gray-100', children: e.name }), (0, a.jsx)('dt', { className: 'sr-only', children: 'Email' }), (0, a.jsx)('dd', { children: e.email && (0, a.jsx)('span', { className: 'text-sm text-gray-900 dark:text-gray-100', children: e.email }) })] })] }, e.name)
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: (0, a.jsx)('div', {
                          className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                          children: g,
                        }),
                      }),
                      (0, a.jsxs)('footer', {
                        children: [
                          (0, a.jsxs)('div', {
                            className:
                              'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                            children: [
                              v &&
                                (0, a.jsxs)('div', {
                                  className: 'py-4 xl:py-8',
                                  children: [
                                    (0, a.jsx)('h2', {
                                      className:
                                        'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                      children: 'Tags',
                                    }),
                                    (0, a.jsx)('div', {
                                      className: 'flex flex-wrap',
                                      children: v.map(function (e) {
                                        return (0, a.jsx)(c.Z, { text: e }, e)
                                      }),
                                    }),
                                  ],
                                }),
                              (d || m) &&
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                  children: [
                                    m &&
                                      (0, a.jsxs)('div', {
                                        children: [
                                          (0, a.jsx)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Previous Article',
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.jsx)(n.Z, {
                                              href: '/blog/'.concat(m.slug),
                                              children: m.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                    d &&
                                      (0, a.jsxs)('div', {
                                        children: [
                                          (0, a.jsx)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Next Article',
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.jsx)(n.Z, {
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
                          (0, a.jsx)('div', {
                            className: 'pt-4 xl:pt-8',
                            children: (0, a.jsx)(n.Z, {
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
            return p
          },
        })
      var a = r(5893),
        n = r(4373),
        s = r(8215),
        i = r(9072),
        l = r(8590),
        o = r(7059),
        c = r.n(o),
        d = r(811),
        u = r(2540)
      function x(e, t, r) {
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
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              x(e, t, r[t])
            })
        }
        return e
      }
      function p(e) {
        var t = e.frontMatter,
          r = (e.authorDetails, e.next),
          o = e.prev,
          x = e.children,
          p = t.date,
          h = t.title
        return (0, a.jsxs)(i.Z, {
          children: [
            (0, a.jsx)(l.Uy, m({ url: ''.concat(c().siteUrl, '/blog/').concat(t.slug) }, t)),
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)('article', {
              children: (0, a.jsxs)('div', {
                children: [
                  (0, a.jsx)('header', {
                    children: (0, a.jsxs)('div', {
                      className:
                        'space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700',
                      children: [
                        (0, a.jsx)('dl', {
                          children: (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.jsx)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.jsx)('time', {
                                  dateTime: p,
                                  children: (0, d.Z)(p),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', { children: (0, a.jsx)(s.Z, { children: h }) }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className: 'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: (0, a.jsx)('div', {
                          className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                          children: x,
                        }),
                      }),
                      (0, a.jsx)('footer', {
                        children: (0, a.jsxs)('div', {
                          className:
                            'flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base',
                          children: [
                            o &&
                              (0, a.jsx)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.jsxs)(n.Z, {
                                  href: '/blog/'.concat(o.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: ['\u2190 ', o.title],
                                }),
                              }),
                            r &&
                              (0, a.jsx)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.jsxs)(n.Z, {
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
      var a = r(7059),
        n = r.n(a)
      t.Z = function (e) {
        return new Date(e).toLocaleDateString(n().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    7836: function (e, t, r) {
      'use strict'
      var a = r(9671)
      t.Z = function (e) {
        return (0, a.slug)(e)
      }
    },
    3719: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return w
          },
          default: function () {
            return N
          },
        })
      var a = r(5893),
        n = r(8215),
        s = r(7294),
        i = r(3194),
        l = r(6009),
        o = r(4373),
        c = function (e) {
          var t = e.toc,
            r = e.indentDepth,
            n = void 0 === r ? 3 : r,
            s = e.fromHeading,
            i = void 0 === s ? 1 : s,
            l = e.toHeading,
            o = void 0 === l ? 6 : l,
            c = e.asDisclosure,
            d = void 0 !== c && c,
            u = e.exclude,
            x = void 0 === u ? '' : u,
            m = Array.isArray(x)
              ? new RegExp('^(' + x.join('|') + ')$', 'i')
              : new RegExp('^(' + x + ')$', 'i'),
            p = t.filter(function (e) {
              return e.depth >= i && e.depth <= o && !m.test(e.value)
            }),
            h = (0, a.jsx)('ul', {
              children: p.map(function (e) {
                return (0,
                a.jsx)('li', { className: ''.concat(e.depth >= n && 'ml-6'), children: (0, a.jsx)('a', { href: e.url, children: e.value }) }, e.value)
              }),
            })
          return (0, a.jsx)(a.Fragment, {
            children: d
              ? (0, a.jsxs)('details', {
                  open: !0,
                  children: [
                    (0, a.jsx)('summary', {
                      className: 'ml-6 pt-2 pb-2 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, a.jsx)('div', { className: 'ml-6', children: h }),
                  ],
                })
              : h,
          })
        },
        d = function (e) {
          var t = (0, s.useRef)(null),
            r = (0, s.useState)(!1),
            n = r[0],
            i = r[1],
            l = (0, s.useState)(!1),
            o = l[0],
            c = l[1]
          return (0, a.jsxs)('div', {
            ref: t,
            onMouseEnter: function () {
              i(!0)
            },
            onMouseLeave: function () {
              i(!1), c(!1)
            },
            className: 'relative',
            children: [
              n &&
                (0, a.jsx)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className:
                    'absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 '.concat(
                      o
                        ? 'border-green-400 focus:border-green-400 focus:outline-none'
                        : 'border-gray-300'
                    ),
                  onClick: function () {
                    c(!0),
                      navigator.clipboard.writeText(t.current.textContent),
                      setTimeout(function () {
                        c(!1)
                      }, 2e3)
                  },
                  children: (0, a.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: o ? 'text-green-400' : 'text-gray-300',
                    children: o
                      ? (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, a.jsx)('pre', { children: e.children }),
            ],
          })
        },
        u = r(4051),
        x = r.n(u),
        m = r(7059),
        p = r.n(m)
      function h(e, t, r, a, n, s, i) {
        try {
          var l = e[s](i),
            o = l.value
        } catch (c) {
          return void r(c)
        }
        l.done ? t(o) : Promise.resolve(o).then(a, n)
      }
      var g = function (e) {
        var t = e.title,
          r = void 0 === t ? 'Subscribe to the newsletter' : t,
          n = (0, s.useRef)(null),
          i = (0, s.useState)(!1),
          l = i[0],
          o = i[1],
          c = (0, s.useState)(''),
          d = c[0],
          u = c[1],
          m = (0, s.useState)(!1),
          g = m[0],
          f = m[1],
          y = (function () {
            var e,
              t =
                ((e = x().mark(function e(t) {
                  var r
                  return x().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.next = 3),
                            fetch('/api/'.concat(p().newsletter.provider), {
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
                            o(!0),
                            u('Your e-mail address is invalid or you are already subscribed!'),
                            e.abrupt('return')
                          )
                        case 11:
                          ;(n.current.value = ''),
                            o(!1),
                            f(!0),
                            u('Successfully! \ud83c\udf89 You are now subscribed.')
                        case 15:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })),
                function () {
                  var t = this,
                    r = arguments
                  return new Promise(function (a, n) {
                    var s = e.apply(t, r)
                    function i(e) {
                      h(s, a, n, i, l, 'next', e)
                    }
                    function l(e) {
                      h(s, a, n, i, l, 'throw', e)
                    }
                    i(void 0)
                  })
                })
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        return (0, a.jsxs)('div', {
          children: [
            (0, a.jsx)('div', {
              className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
              children: r,
            }),
            (0, a.jsxs)('form', {
              className: 'flex flex-col sm:flex-row',
              onSubmit: y,
              children: [
                (0, a.jsxs)('div', {
                  children: [
                    (0, a.jsx)('label', {
                      className: 'sr-only',
                      htmlFor: 'email-input',
                      children: 'Email address',
                    }),
                    (0, a.jsx)('input', {
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
                (0, a.jsx)('div', {
                  className: 'mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3',
                  children: (0, a.jsx)('button', {
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
            l &&
              (0, a.jsx)('div', {
                className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
                children: d,
              }),
          ],
        })
      }
      function f(e, t, r) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              f(e, t, r[t])
            })
        }
        return e
      }
      function j(e, t) {
        if (null == e) return {}
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {}
            var r,
              a,
              n = {},
              s = Object.keys(e)
            for (a = 0; a < s.length; a++) (r = s[a]), t.indexOf(r) >= 0 || (n[r] = e[r])
            return n
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e)
          for (a = 0; a < s.length; a++)
            (r = s[a]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]))
        }
        return n
      }
      var v = {
          Image: l.Z,
          TOCInline: c,
          a: o.Z,
          pre: d,
          BlogNewsletterForm: function (e) {
            var t = e.title
            return (0, a.jsx)('div', {
              className: 'flex items-center justify-center',
              children: (0, a.jsx)('div', {
                className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
                children: (0, a.jsx)(g, { title: t }),
              }),
            })
          },
          wrapper: function (e) {
            e.components
            var t = e.layout,
              n = j(e, ['components', 'layout']),
              s = r(9618)('./'.concat(t)).default
            return (0, a.jsx)(s, y({}, n))
          },
        },
        b = function (e) {
          var t = e.layout,
            r = e.mdxSource,
            n = j(e, ['layout', 'mdxSource']),
            l = (0, s.useMemo)(
              function () {
                return (0, i.getMDXComponent)(r)
              },
              [r]
            )
          return (0, a.jsx)(l, y({ layout: t, components: v }, n))
        },
        w = !0
      function N(e) {
        var t = e.post,
          r = e.authorDetails,
          s = e.prev,
          i = e.next,
          l = t.mdxSource,
          o = t.toc,
          c = t.frontMatter
        return (0, a.jsx)(a.Fragment, {
          children:
            !0 !== c.draft
              ? (0, a.jsx)(b, {
                  layout: c.layout || 'PostLayout',
                  toc: o,
                  mdxSource: l,
                  frontMatter: c,
                  authorDetails: r,
                  prev: s,
                  next: i,
                })
              : (0, a.jsx)('div', {
                  className: 'mt-24 text-center',
                  children: (0, a.jsxs)(n.Z, {
                    children: [
                      'Under Construction',
                      ' ',
                      (0, a.jsx)('span', {
                        role: 'img',
                        'aria-label': 'roadwork sign',
                        children: '\ud83d\udea7',
                      }),
                    ],
                  }),
                }),
        })
      }
    },
  },
  function (e) {
    e.O(0, [390, 774, 888, 179], function () {
      return (t = 6082), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
