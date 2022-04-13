System.register('@openmrs/esm-patient-search-app', [], function(a, b) {
  var c = void 0
  return {
    execute: function() {
      a(
        (() => {
          function j(a) {
            var b = m[a]
            if (void 0 !== b) return b.exports
            var c = (m[a] = {id: a, exports: {}})
            return G[a].call(c.exports, c, c.exports, j), c.exports
          }
          var g,
            k,
            q,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            r,
            D,
            E,
            F,
            G = {
              3959: (a, b, c) => {
                ;(0, c(6907).s)(1)
              },
              6907: (a, b, c) => {
                const d = c(3541).R
                b.s = function(a) {
                  if ((a || (a = 1), !c.y.meta || !c.y.meta.url))
                    throw (console.error('__system_context__', c.y),
                    Error(
                      'systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided',
                    ))
                  c.p = d(c.y.meta.url, a)
                }
              },
              5384: (a, b, c) => {
                c(3959)
              },
              3541: (a, b) => {
                ;(b.R = function(b, c) {
                  var d = document.createElement('a')
                  d.href = b
                  for (
                    var e =
                        '/' === d.pathname[0] ? d.pathname : '/' + d.pathname,
                      f = 0,
                      g = e.length;
                    f !== c && 0 <= g;

                  )
                    '/' === e[--g] && f++
                  if (f !== c)
                    throw Error(
                      'systemjs-webpack-interop: rootDirectoryLevel (' +
                        c +
                        ') is greater than the number of directories (' +
                        f +
                        ') in the URL path ' +
                        b,
                    )
                  var h = e.slice(0, g + 1)
                  return d.protocol + '//' + d.host + h
                }),
                  Number.isInteger
              },
              8142: (b, d, f) => {
                var g = {
                    app: () => (
                      c ||
                        ((self.webpackChunk_openmrs_esm_patient_search_app =
                          self.webpackChunk_openmrs_esm_patient_search_app ||
                          []).push([
                          [745],
                          {
                            7745: (b, c, d) => {
                              function e() {
                                return (
                                  (0, f.defineConfigSchema)(
                                    '@openmrs/esm-patient-search-app',
                                    a,
                                  ),
                                  {
                                    extensions: [
                                      {
                                        id: 'patient-search-icon',
                                        slot: 'top-nav-actions-slot',
                                        order: 0,
                                        load: (0, f.getAsyncLifecycle)(
                                          () =>
                                            Promise.all([
                                              d.e(852),
                                              d.e(902),
                                              d.e(893),
                                            ]).then(d.bind(d, 7027)),
                                          {
                                            featureName: 'patient-search',
                                            moduleName:
                                              '@openmrs/esm-patient-search-app',
                                          },
                                        ),
                                      },
                                    ],
                                  }
                                )
                              }
                              d.r(c),
                                d.d(c, {
                                  backendDependencies: () => h,
                                  frontendDependencies: () => i,
                                  importTranslation: () => g,
                                  setupOpenMRS: () => e,
                                  assets: () => [
                                    'openmrs-esm-patient-search-app.js',
                                    '319.js',
                                    '339.js',
                                    '373.js',
                                    '402.js',
                                    '574.js',
                                    '635.js',
                                    '784.js',
                                    '852.js',
                                    '893.js',
                                    '932.js',
                                  ],
                                })
                              var f = d(9035)
                              const a = {
                                  search: {
                                    patientResultUrl: {
                                      _default:
                                        '${openmrsSpaBase}/patient/${patientUuid}/chart',
                                      _description:
                                        'Where clicking a patient result takes the user. Accepts template parameter ${patientUuid}',
                                      _validators: [
                                        f.validators.isUrlWithTemplateParameters(
                                          ['patientUuid'],
                                        ),
                                      ],
                                    },
                                    hideActionsOverflow: {
                                      _type: f.Type.Boolean,
                                      _default: !1,
                                      _description:
                                        'Whether to hide the action overflow in patients search results',
                                    },
                                  },
                                  includeDead: {
                                    _type: f.Type.Boolean,
                                    _default: !0,
                                    _description:
                                      'Whether to include dead patients in search results',
                                  },
                                },
                                g = d(3979),
                                h = {'webservices.rest': '^2.2.0'},
                                i = {'@openmrs/esm-framework': '^3.2.1-pre.986'}
                            },
                            3979: (b, c, d) => {
                              function e(a) {
                                if (!d.o(f, a))
                                  return Promise.resolve().then(() => {
                                    var b = new Error(
                                      "Cannot find module '" + a + "'",
                                    )
                                    throw ((b.code = 'MODULE_NOT_FOUND'), b)
                                  })
                                var b = f[a],
                                  c = b[0]
                                return d.e(b[1]).then(() => d(c))
                              }
                              var f = {
                                './en.json': [3574, 574],
                                './es.json': [8319, 319],
                              }
                              ;(e.keys = () => Object.keys(f)),
                                (e.id = 3979),
                                (b.exports = e)
                            },
                          },
                        ]),
                        (c = f.e(745).then(() => () => f(7745)))),
                      c
                    ),
                  },
                  e = (a, b) => (
                    (f.R = b),
                    (b = f.o(g, a)
                      ? g[a]()
                      : Promise.resolve().then(() => {
                          throw new Error(
                            'Module "' + a + '" does not exist in container.',
                          )
                        })),
                    (f.R = void 0),
                    b
                  ),
                  h = (a, b) => {
                    if (f.S) {
                      var c = f.S['default']
                      if (c && c !== a)
                        throw new Error(
                          'Container initialization failed as it has already been initialized with a different share scope',
                        )
                      return (f.S['default'] = a), f.I('default', b)
                    }
                  }
                f.d(d, {get: () => e, init: () => h})
              },
            },
            m = {}
          return (
            (j.m = G),
            (j.c = m),
            (j.y = b),
            (j.n = a => {
              var b = a && a.__esModule ? () => a.default : () => a
              return j.d(b, {a: b}), b
            }),
            (j.d = (a, b) => {
              for (var c in b)
                j.o(b, c) &&
                  !j.o(a, c) &&
                  Object.defineProperty(a, c, {enumerable: !0, get: b[c]})
            }),
            (j.f = {}),
            (j.e = a =>
              Promise.all(
                Object.keys(j.f).reduce((b, c) => (j.f[c](a, b), b), []),
              )),
            (j.u = a => a + '.js'),
            (j.g = (function() {
              if ('object' == typeof globalThis) return globalThis
              try {
                return this || new Function('return this')()
              } catch (a) {
                if ('object' == typeof window) return window
              }
            })()),
            (j.o = (a, b) => Object.prototype.hasOwnProperty.call(a, b)),
            (g = {}),
            (k = '@openmrs/esm-patient-search-app:'),
            (j.l = (a, b, d) => {
              if (g[a]) g[a].push(b)
              else {
                var e, h
                if (void 0 !== d)
                  for (
                    var m, n = document.getElementsByTagName('script'), o = 0;
                    o < n.length;
                    o++
                  )
                    if (
                      ((m = n[o]),
                      m.getAttribute('src') == a ||
                        m.getAttribute('data-webpack') == k + d)
                    ) {
                      e = m
                      break
                    }
                e ||
                  ((h = !0),
                  ((e = document.createElement('script')).charset = 'utf-8'),
                  (e.timeout = 120),
                  j.nc && e.setAttribute('nonce', j.nc),
                  e.setAttribute('data-webpack', k + d),
                  (e.src = a)),
                  (g[a] = [b])
                var q = (b, c) => {
                    ;(e.onerror = e.onload = null), clearTimeout(f)
                    var d = g[a]
                    if (
                      (delete g[a],
                      e.parentNode && e.parentNode.removeChild(e),
                      d && d.forEach(a => a(c)),
                      b)
                    )
                      return b(c)
                  },
                  f = setTimeout(
                    q.bind(null, void 0, {type: 'timeout', target: e}),
                    12e4,
                  )
                ;(e.onerror = q.bind(null, e.onerror)),
                  (e.onload = q.bind(null, e.onload)),
                  h && document.head.appendChild(e)
              }
            }),
            (j.r = a => {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(a, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(a, '__esModule', {value: !0})
            }),
            (() => {
              j.S = {}
              var b = {},
                c = {}
              j.I = (d, e) => {
                e || (e = [])
                var f = c[d]
                if ((f || (f = c[d] = {}), !(0 <= e.indexOf(f)))) {
                  if ((e.push(f), b[d])) return b[d]
                  j.o(j.S, d) || (j.S[d] = {})
                  var g = j.S[d],
                    a = (a, b, c, d) => {
                      var e = (g[a] = g[a] || {}),
                        f = e[b]
                      ;(f &&
                        (f.loaded ||
                          (!d == !f.eager
                            ? !('@openmrs/esm-patient-search-app' > f.from)
                            : !d))) ||
                        (e[b] = {
                          get: c,
                          from: '@openmrs/esm-patient-search-app',
                          eager: !!d,
                        })
                    },
                    h = []
                  return (
                    'default' === d &&
                      (a('@openmrs/esm-framework', '3.2.1-pre.986', () =>
                        j.e(339).then(() => () => j(6339)),
                      ),
                      a('carbon-components', '10.31.0', () =>
                        j.e(635).then(() => () => j(9635)),
                      ),
                      a('carbon-icons', '7.0.7', () =>
                        j.e(402).then(() => () => j(5402)),
                      ),
                      a('react-i18next', '11.15.5', () =>
                        Promise.all([j.e(902), j.e(932)]).then(() => () =>
                          j(9932),
                        ),
                      ),
                      a('react', '16.14.0', () =>
                        j.e(784).then(() => () => j(2784)),
                      )),
                    (b[d] = h.length
                      ? Promise.all(h).then(() => (b[d] = 1))
                      : 1)
                  )
                }
              }
            })(),
            (j.p = ''),
            (q = a => {
              var b = a => a.split('.').map(a => (+a == a ? +a : a)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(a),
                d = c[1] ? b(c[1]) : []
              return (
                c[2] && (d.length++, d.push.apply(d, b(c[2]))),
                c[3] && (d.push([]), d.push.apply(d, b(c[3]))),
                d
              )
            }),
            (w = (b, c) => {
              ;(b = q(b)), (c = q(c))
              for (var d = 0; ; ) {
                if (d >= b.length)
                  return d < c.length && 'u' != (typeof c[d])[0]
                var f = b[d],
                  g = (typeof f)[0]
                if (d >= c.length) return 'u' == g
                var a = c[d],
                  h = (typeof a)[0]
                if (g != h)
                  return ('o' == g && 'n' == h) || 's' == h || 'u' == g
                if ('o' != g && 'u' != g && f != a) return f < a
                d++
              }
            }),
            (x = a => {
              function b() {
                return g.pop().replace(/^\((.+)\)$/, '$1')
              }
              var c = a[0],
                d = ''
              if (1 === a.length) return '*'
              if (c + 0.5) {
                d +=
                  0 == c
                    ? '>='
                    : -1 == c
                    ? '<'
                    : 1 == c
                    ? '^'
                    : 2 == c
                    ? '~'
                    : 0 < c
                    ? '='
                    : '!='
                for (var e = 1, f = 1; f < a.length; f++)
                  e--,
                    (d +=
                      'u' == (typeof (h = a[f]))[0]
                        ? '-'
                        : (0 < e ? '.' : '') + ((e = 2), h))
                return d
              }
              var g = []
              for (f = 1; f < a.length; f++) {
                var h = a[f]
                g.push(
                  0 === h
                    ? 'not(' + b() + ')'
                    : 1 === h
                    ? '(' + b() + ' || ' + b() + ')'
                    : 2 === h
                    ? g.pop() + ' ' + g.pop()
                    : x(h),
                )
              }
              return b()
            }),
            (y = (b, e) => {
              if (0 in b) {
                e = q(e)
                var g = b[0],
                  i = 0 > g
                i && (g = -g - 1)
                for (var j = 0, k = 1, m = !0; ; k++, j++) {
                  var n,
                    o,
                    v = k < b.length ? (typeof b[k])[0] : ''
                  if (j >= e.length || 'o' == (o = (typeof (n = e[j]))[0]))
                    return !m || ('u' == v ? k > g && !i : ('' == v) != i)
                  if ('u' == o) {
                    if (!m || 'u' != v) return !1
                  } else if (!m) 's' != v && 'n' != v && ((m = !1), k--)
                  else if (v == o) {
                    if (!(k <= g)) {
                      if (i ? n > b[k] : n < b[k]) return !1
                      n != b[k] && (m = !1)
                    } else if (n != b[k]) return !1
                  } else if ('s' != v && 'n' != v) {
                    if (i || k <= g) return !1
                    ;(m = !1), k--
                  } else {
                    if (k <= g || o < v != i) return !1
                    m = !1
                  }
                }
              }
              var f = [],
                c = f.pop.bind(f)
              for (j = 1; j < b.length; j++) {
                var h = b[j]
                f.push(
                  1 == h ? c() | c() : 2 == h ? c() & c() : h ? y(h, e) : !c(),
                )
              }
              return !!c()
            }),
            (z = (a, b) => {
              var c = a[b]
              return Object.keys(c).reduce(
                (a, b) => (a && (c[a].loaded || !w(a, b)) ? a : b),
                0,
              )
            }),
            (A = (a, b, c, d) =>
              'Unsatisfied version ' +
              c +
              ' from ' +
              (c && a[b][c].from) +
              ' of shared singleton module ' +
              b +
              ' (required ' +
              x(d) +
              ')'),
            (B = (a, b, c, d) => {
              var e = z(a, c)
              return (
                y(d, e) ||
                  ('undefined' != typeof console &&
                    console.warn &&
                    console.warn(A(a, c, e, d))),
                C(a[c][e])
              )
            }),
            (C = a => ((a.loaded = 1), a.get())),
            (r = (b =>
              function(c, d, e, f) {
                var g = j.I(c)
                return g && g.then
                  ? g.then(b.bind(b, c, j.S[c], d, e, f))
                  : b(0, j.S[c], d, e, f)
              })((a, b, c, d, e) => (b && j.o(b, c) ? B(b, 0, c, d) : e()))),
            (D = {}),
            (E = {
              9035: () =>
                r('default', '@openmrs/esm-framework', [1, 3], () =>
                  j.e(339).then(() => () => j(6339)),
                ),
              9902: () =>
                r('default', 'react', [1, 16], () =>
                  j.e(784).then(() => () => j(2784)),
                ),
              4924: () =>
                r('default', 'react-i18next', [1, 11], () =>
                  j.e(373).then(() => () => j(9932)),
                ),
              8479: () =>
                r('default', 'carbon-components', [1, 10], () =>
                  j.e(635).then(() => () => j(9635)),
                ),
            }),
            (F = {745: [9035], 893: [4924, 8479], 902: [9902]}),
            (j.f.consumes = (a, b) => {
              j.o(F, a) &&
                F[a].forEach(a => {
                  if (j.o(D, a)) return b.push(D[a])
                  var c = b => {
                      ;(D[a] = 0),
                        (j.m[a] = c => {
                          delete j.c[a], (c.exports = b())
                        })
                    },
                    d = b => {
                      delete D[a],
                        (j.m[a] = () => {
                          throw (delete j.c[a], b)
                        })
                    }
                  try {
                    var e = E[a]()
                    e.then ? b.push((D[a] = e.then(c).catch(d))) : c(e)
                  } catch (a) {
                    d(a)
                  }
                })
            }),
            (() => {
              var b = {175: 0}
              j.f.j = (c, d) => {
                var e = j.o(b, c) ? b[c] : void 0
                if (0 !== e)
                  if (e) d.push(e[2])
                  else if (902 != c) {
                    var f = new Promise((a, d) => (e = b[c] = [a, d]))
                    d.push((e[2] = f))
                    var g = j.p + j.u(c),
                      h = new Error()
                    j.l(
                      g,
                      d => {
                        if (
                          j.o(b, c) &&
                          (0 !== (e = b[c]) && (b[c] = void 0), e)
                        ) {
                          var f = d && ('load' === d.type ? 'missing' : d.type),
                            g = d && d.target && d.target.src
                          ;(h.message =
                            'Loading chunk ' +
                            c +
                            ' failed.\n(' +
                            f +
                            ': ' +
                            g +
                            ')'),
                            (h.name = 'ChunkLoadError'),
                            (h.type = f),
                            (h.request = g),
                            e[1](h)
                        }
                      },
                      'chunk-' + c,
                      c,
                    )
                  } else b[c] = 0
              }
              var a = (c, d) => {
                  var e,
                    f,
                    [g, a, h] = d,
                    i = 0
                  if (g.some(a => 0 !== b[a])) {
                    for (e in a) j.o(a, e) && (j.m[e] = a[e])
                    h && h(j)
                  }
                  for (c && c(d); i < g.length; i++)
                    (f = g[i]), j.o(b, f) && b[f] && b[f][0](), (b[f] = 0)
                },
                c = (self.webpackChunk_openmrs_esm_patient_search_app =
                  self.webpackChunk_openmrs_esm_patient_search_app || [])
              c.forEach(a.bind(null, 0)),
                (c.push = a.bind(null, c.push.bind(c)))
            })(),
            j(5384),
            j(8142)
          )
        })(),
      )
    },
  }
})
