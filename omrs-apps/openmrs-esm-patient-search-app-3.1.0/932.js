;(self.webpackChunk_openmrs_esm_patient_search_app =
  self.webpackChunk_openmrs_esm_patient_search_app || []).push([
  [932, 373],
  {
    9932: (e, t, n) => {
      'use strict'
      n.r(t),
        n.d(t, {
          I18nContext: () => N,
          I18nextProvider: () => se,
          Trans: () => J,
          Translation: () => ce,
          composeInitialProps: () => T,
          date: () => de,
          getDefaults: () => Z,
          getI18n: () => C,
          getInitialProps: () => z,
          initReactI18next: () => A,
          number: () => ge,
          plural: () => he,
          select: () => me,
          selectOrdinal: () => ve,
          setDefaults: () => I,
          setI18n: () => R,
          time: () => ye,
          useSSR: () => ue,
          useTranslation: () => te,
          withSSR: () => fe,
          withTranslation: () => ie,
        })
      var r = n(2159),
        o = n(6522),
        i = n(6666),
        a = n(9902),
        c = n.n(a),
        s = n(4896),
        u = n.n(s),
        l = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
      function p(e) {
        var t = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/)
        if (
          n &&
          ((t.name = n[1]),
          (u()[n[1]] || '/' === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith('!--'))
        ) {
          var r = e.indexOf('--\x3e')
          return {type: 'comment', comment: -1 !== r ? e.slice(4, r) : ''}
        }
        for (var o = new RegExp(l), i = null; null !== (i = o.exec(e)); )
          if (i[0].trim())
            if (i[1]) {
              var a = i[1].trim(),
                c = [a, '']
              a.indexOf('=') > -1 && (c = a.split('=')),
                (t.attrs[c[0]] = c[1]),
                o.lastIndex--
            } else
              i[2] &&
                (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1))
        return t
      }
      var f = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        d = /^\s*$/,
        y = Object.create(null)
      function g(e, t) {
        switch (t.type) {
          case 'text':
            return e + t.content
          case 'tag':
            return (
              (e +=
                '<' +
                t.name +
                (t.attrs
                  ? (function(e) {
                      var t = []
                      for (var n in e) t.push(n + '="' + e[n] + '"')
                      return t.length ? ' ' + t.join(' ') : ''
                    })(t.attrs)
                  : '') +
                (t.voidElement ? '/>' : '>')),
              t.voidElement
                ? e
                : e + t.children.reduce(g, '') + '</' + t.name + '>'
            )
          case 'comment':
            return e + '\x3c!--' + t.comment + '--\x3e'
        }
      }
      var m = {
        parse: function(e, t) {
          t || (t = {}), t.components || (t.components = y)
          var n,
            r = [],
            o = [],
            i = -1,
            a = !1
          if (0 !== e.indexOf('<')) {
            var c = e.indexOf('<')
            r.push({type: 'text', content: -1 === c ? e : e.substring(0, c)})
          }
          return (
            e.replace(f, function(c, s) {
              if (a) {
                if (c !== '</' + n.name + '>') return
                a = !1
              }
              var u,
                l = '/' !== c.charAt(1),
                f = c.startsWith('\x3c!--'),
                y = s + c.length,
                g = e.charAt(y)
              if (f) {
                var m = p(c)
                return i < 0 ? (r.push(m), r) : ((u = o[i]).children.push(m), r)
              }
              if (
                (l &&
                  (i++,
                  'tag' === (n = p(c)).type &&
                    t.components[n.name] &&
                    ((n.type = 'component'), (a = !0)),
                  n.voidElement ||
                    a ||
                    !g ||
                    '<' === g ||
                    n.children.push({
                      type: 'text',
                      content: e.slice(y, e.indexOf('<', y)),
                    }),
                  0 === i && r.push(n),
                  (u = o[i - 1]) && u.children.push(n),
                  (o[i] = n)),
                (!l || n.voidElement) &&
                  (i > -1 &&
                    (n.voidElement || n.name === c.slice(2, -1)) &&
                    (i--, (n = -1 === i ? r : o[i])),
                  !a && '<' !== g && g))
              ) {
                u = -1 === i ? r : o[i].children
                var h = e.indexOf('<', y),
                  v = e.slice(y, -1 === h ? void 0 : h)
                d.test(v) && (v = ' '),
                  ((h > -1 && i + u.length >= 0) || ' ' !== v) &&
                    u.push({type: 'text', content: v})
              }
            }),
            r
          )
        },
        stringify: function(e) {
          return e.reduce(function(e, t) {
            return e + g('', t)
          }, '')
        },
      }
      const h = m
      var v = ''.replace,
        b = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
        O = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
        }
      function j(e) {
        return O[e]
      }
      var w = n(9249),
        P = n(7371)
      function E(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function(t) {
                ;(0, i.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      var x,
        k = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
        },
        N = c().createContext()
      function I() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        k = S(S({}, k), e)
      }
      function Z() {
        return k
      }
      var D = (function() {
        function e() {
          ;(0, w.Z)(this, e), (this.usedNamespaces = {})
        }
        return (
          (0, P.Z)(e, [
            {
              key: 'addUsedNamespaces',
              value: function(e) {
                var t = this
                e.forEach(function(e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                })
              },
            },
            {
              key: 'getUsedNamespaces',
              value: function() {
                return Object.keys(this.usedNamespaces)
              },
            },
          ]),
          e
        )
      })()
      function R(e) {
        x = e
      }
      function C() {
        return x
      }
      var A = {
        type: '3rdParty',
        init: function(e) {
          I(e.options.react), R(e)
        },
      }
      function T(e) {
        return function(t) {
          return new Promise(function(n) {
            var r = z()
            e.getInitialProps
              ? e.getInitialProps(t).then(function(e) {
                  n(S(S({}, e), r))
                })
              : n(r)
          })
        }
      }
      function z() {
        var e = C(),
          t = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
          n = {},
          r = {}
        return (
          e.languages.forEach(function(n) {
            ;(r[n] = {}),
              t.forEach(function(t) {
                r[n][t] = e.getResourceBundle(n, t) || {}
              })
          }),
          (n.initialI18nStore = r),
          (n.initialLanguage = e.language),
          n
        )
      }
      function L() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          'string' == typeof n[0] && (n[0] = 'react-i18next:: '.concat(n[0])),
            (e = console).warn.apply(e, n)
        }
      }
      var _ = {}
      function U() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        ;('string' == typeof t[0] && _[t[0]]) ||
          ('string' == typeof t[0] && (_[t[0]] = new Date()),
          L.apply(void 0, t))
      }
      function B(e, t, n) {
        e.loadNamespaces(t, function() {
          e.isInitialized
            ? n()
            : e.on('initialized', function t() {
                setTimeout(function() {
                  e.off('initialized', t)
                }, 0),
                  n()
              })
        })
      }
      function V(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (!t.languages || !t.languages.length)
          return U('i18n.languages were undefined or empty', t.languages), !0
        var r = t.languages[0],
          o = !!t.options && t.options.fallbackLng,
          i = t.languages[t.languages.length - 1]
        if ('cimode' === r.toLowerCase()) return !0
        var a = function(e, n) {
          var r = t.services.backendConnector.state[''.concat(e, '|').concat(n)]
          return -1 === r || 2 === r
        }
        return !(
          (n.bindI18n &&
            n.bindI18n.indexOf('languageChanging') > -1 &&
            t.services.backendConnector.backend &&
            t.isLanguageChangingTo &&
            !a(t.isLanguageChangingTo, e)) ||
          (!t.hasResourceBundle(r, e) &&
            t.services.backendConnector.backend &&
            (!a(r, e) || (o && !a(i, e))))
        )
      }
      function K(e) {
        return (
          e.displayName ||
          e.name ||
          ('string' == typeof e && e.length > 0 ? e : 'Unknown')
        )
      }
      var W = ['format'],
        F = [
          'children',
          'count',
          'parent',
          'i18nKey',
          'tOptions',
          'values',
          'defaults',
          'components',
          'ns',
          'i18n',
          't',
          'shouldUnescape',
        ]
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function(t) {
                ;(0, i.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function $(e, t) {
        if (!e) return !1
        var n = e.props ? e.props.children : e.children
        return t ? n.length > 0 : !!n
      }
      function q(e) {
        return e
          ? e && e.children
            ? e.children
            : e.props && e.props.children
          : []
      }
      function Y(e) {
        return Array.isArray(e) ? e : [e]
      }
      function G(e, t) {
        if (!e) return ''
        var n = '',
          i = Y(e),
          a = t.transKeepBasicHtmlNodesFor || []
        return (
          i.forEach(function(e, i) {
            if ('string' == typeof e) n += ''.concat(e)
            else if (c().isValidElement(e)) {
              var s = Object.keys(e.props).length,
                u = a.indexOf(e.type) > -1,
                l = e.props.children
              if (!l && u && 0 === s) n += '<'.concat(e.type, '/>')
              else if (l || (u && 0 === s))
                if (e.props.i18nIsDynamicList)
                  n += '<'.concat(i, '></').concat(i, '>')
                else if (u && 1 === s && 'string' == typeof l)
                  n += '<'
                    .concat(e.type, '>')
                    .concat(l, '</')
                    .concat(e.type, '>')
                else {
                  var p = G(l, t)
                  n += '<'
                    .concat(i, '>')
                    .concat(p, '</')
                    .concat(i, '>')
                }
              else n += '<'.concat(i, '></').concat(i, '>')
            } else if (null === e)
              L(
                'Trans: the passed in value is invalid - seems you passed in a null child.',
              )
            else if ('object' === (0, o.Z)(e)) {
              var f = e.format,
                d = (0, r.Z)(e, W),
                y = Object.keys(d)
              if (1 === y.length) {
                var g = f ? ''.concat(y[0], ', ').concat(f) : y[0]
                n += '{{'.concat(g, '}}')
              } else
                L(
                  'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
                  e,
                )
            } else
              L(
                'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
                e,
              )
          }),
          n
        )
      }
      function J(e) {
        var t = e.children,
          n = e.count,
          i = e.parent,
          s = e.i18nKey,
          u = e.tOptions,
          l = void 0 === u ? {} : u,
          p = e.values,
          f = e.defaults,
          d = e.components,
          y = e.ns,
          g = e.i18n,
          m = e.t,
          O = e.shouldUnescape,
          w = (0, r.Z)(e, F),
          P = (0, a.useContext)(N) || {},
          E = P.i18n,
          S = P.defaultNS,
          x = g || E || C()
        if (!x)
          return (
            U(
              'You will need to pass in an i18next instance by using i18nextReactModule',
            ),
            t
          )
        var k =
            m ||
            x.t.bind(x) ||
            function(e) {
              return e
            },
          I = M(M({}, Z()), x.options && x.options.react),
          D = y || k.ns || S || (x.options && x.options.defaultNS)
        D = 'string' == typeof D ? [D] : D || ['translation']
        var R = f || G(t, I) || I.transEmptyNodeValue || s,
          A = I.hashTransKey,
          T = s || (A ? A(R) : R),
          z = p
            ? l.interpolation
            : {
                interpolation: M(
                  M({}, l.interpolation),
                  {},
                  {prefix: '#$?', suffix: '?$#'},
                ),
              },
          L = M(
            M(M(M({}, l), {}, {count: n}, p), z),
            {},
            {defaultValue: R, ns: D},
          ),
          _ = (function(e, t, n, r, i, a) {
            if ('' === t) return []
            var s = r.transKeepBasicHtmlNodesFor || [],
              u = t && new RegExp(s.join('|')).test(t)
            if (!e && !u) return [t]
            var l = {}
            !(function e(t) {
              Y(t).forEach(function(t) {
                'string' != typeof t &&
                  ($(t)
                    ? e(q(t))
                    : 'object' !== (0, o.Z)(t) ||
                      c().isValidElement(t) ||
                      Object.assign(l, t))
              })
            })(e)
            var p = h.parse('<0>'.concat(t, '</0>')),
              f = M(M({}, l), i)
            function d(e, t, n) {
              var r = q(e),
                o = g(r, t.children, n)
              return (function(e) {
                return (
                  '[object Array]' === Object.prototype.toString.call(e) &&
                  e.every(function(e) {
                    return c().isValidElement(e)
                  })
                )
              })(r) && 0 === o.length
                ? r
                : o
            }
            function y(e, t, n, r, o) {
              e.dummy && (e.children = t),
                n.push(
                  c().cloneElement(
                    e,
                    M(M({}, e.props), {}, {key: r}),
                    o ? void 0 : t,
                  ),
                )
            }
            function g(t, i, l) {
              var p = Y(t)
              return Y(i).reduce(function(t, i, m) {
                var h,
                  O,
                  w,
                  P,
                  E =
                    i.children &&
                    i.children[0] &&
                    i.children[0].content &&
                    n.services.interpolator.interpolate(
                      i.children[0].content,
                      f,
                      n.language,
                    )
                if ('tag' === i.type) {
                  var S = p[parseInt(i.name, 10)]
                  !S && 1 === l.length && l[0][i.name] && (S = l[0][i.name]),
                    S || (S = {})
                  var x =
                      0 !== Object.keys(i.attrs).length
                        ? ((O = {props: i.attrs}),
                          ((P = M({}, (w = S))).props = Object.assign(
                            O.props,
                            w.props,
                          )),
                          P)
                        : S,
                    k = c().isValidElement(x),
                    N = k && $(i, !0) && !i.voidElement,
                    I = u && 'object' === (0, o.Z)(x) && x.dummy && !k,
                    Z =
                      'object' === (0, o.Z)(e) &&
                      null !== e &&
                      Object.hasOwnProperty.call(e, i.name)
                  if ('string' == typeof x) {
                    var D = n.services.interpolator.interpolate(
                      x,
                      f,
                      n.language,
                    )
                    t.push(D)
                  } else if ($(x) || N) y(x, d(x, i, l), t, m)
                  else if (I) {
                    var R = g(p, i.children, l)
                    t.push(
                      c().cloneElement(x, M(M({}, x.props), {}, {key: m}), R),
                    )
                  } else if (Number.isNaN(parseFloat(i.name)))
                    if (Z) y(x, d(x, i, l), t, m, i.voidElement)
                    else if (
                      r.transSupportBasicHtmlNodes &&
                      s.indexOf(i.name) > -1
                    )
                      if (i.voidElement)
                        t.push(
                          c().createElement(i.name, {
                            key: ''.concat(i.name, '-').concat(m),
                          }),
                        )
                      else {
                        var C = g(p, i.children, l)
                        t.push(
                          c().createElement(
                            i.name,
                            {key: ''.concat(i.name, '-').concat(m)},
                            C,
                          ),
                        )
                      }
                    else if (i.voidElement) t.push('<'.concat(i.name, ' />'))
                    else {
                      var A = g(p, i.children, l)
                      t.push(
                        '<'
                          .concat(i.name, '>')
                          .concat(A, '</')
                          .concat(i.name, '>'),
                      )
                    }
                  else if ('object' !== (0, o.Z)(x) || k)
                    1 === i.children.length && E
                      ? t.push(
                          c().cloneElement(
                            x,
                            M(M({}, x.props), {}, {key: m}),
                            E,
                          ),
                        )
                      : t.push(
                          c().cloneElement(x, M(M({}, x.props), {}, {key: m})),
                        )
                  else {
                    var T = i.children[0] ? E : null
                    T && t.push(T)
                  }
                } else if ('text' === i.type) {
                  var z = r.transWrapTextNodes,
                    L = a
                      ? ((h = n.services.interpolator.interpolate(
                          i.content,
                          f,
                          n.language,
                        )),
                        v.call(h, b, j))
                      : n.services.interpolator.interpolate(
                          i.content,
                          f,
                          n.language,
                        )
                  z
                    ? t.push(
                        c().createElement(
                          z,
                          {key: ''.concat(i.name, '-').concat(m)},
                          L,
                        ),
                      )
                    : t.push(L)
                }
                return t
              }, [])
            }
            return q(g([{dummy: !0, children: e || []}], p, Y(e || []))[0])
          })(d || t, T ? k(T, L) : R, x, I, L, O),
          B = void 0 !== i ? i : I.defaultTransParent
        return B ? c().createElement(B, w, _) : _
      }
      var Q = n(2867)
      function X(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function(t) {
                ;(0, i.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function te(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          r = (0, a.useContext)(N) || {},
          o = r.i18n,
          i = r.defaultNS,
          c = n || o || C()
        if ((c && !c.reportNamespaces && (c.reportNamespaces = new D()), !c)) {
          U(
            'You will need to pass in an i18next instance by using initReactI18next',
          )
          var s = function(e) {
              return Array.isArray(e) ? e[e.length - 1] : e
            },
            u = [s, {}, !1]
          return (u.t = s), (u.i18n = {}), (u.ready = !1), u
        }
        c.options.react &&
          void 0 !== c.options.react.wait &&
          U(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
          )
        var l = ee(ee(ee({}, Z()), c.options.react), t),
          p = l.useSuspense,
          f = l.keyPrefix,
          d = e || i || (c.options && c.options.defaultNS)
        ;(d = 'string' == typeof d ? [d] : d || ['translation']),
          c.reportNamespaces.addUsedNamespaces &&
            c.reportNamespaces.addUsedNamespaces(d)
        var y =
          (c.isInitialized || c.initializedStoreOnce) &&
          d.every(function(e) {
            return V(e, c, l)
          })
        function g() {
          return c.getFixedT(null, 'fallback' === l.nsMode ? d : d[0], f)
        }
        var m = (0, a.useState)(g),
          h = (0, Q.Z)(m, 2),
          v = h[0],
          b = h[1],
          O = (0, a.useRef)(!0)
        ;(0, a.useEffect)(
          function() {
            var e = l.bindI18n,
              t = l.bindI18nStore
            function n() {
              O.current && b(g)
            }
            return (
              (O.current = !0),
              y ||
                p ||
                B(c, d, function() {
                  O.current && b(g)
                }),
              e && c && c.on(e, n),
              t && c && c.store.on(t, n),
              function() {
                ;(O.current = !1),
                  e &&
                    c &&
                    e.split(' ').forEach(function(e) {
                      return c.off(e, n)
                    }),
                  t &&
                    c &&
                    t.split(' ').forEach(function(e) {
                      return c.store.off(e, n)
                    })
              }
            )
          },
          [c, d.join()],
        )
        var j = (0, a.useRef)(!0)
        ;(0, a.useEffect)(
          function() {
            O.current && !j.current && b(g), (j.current = !1)
          },
          [c],
        )
        var w = [v, c, y]
        if (((w.t = v), (w.i18n = c), (w.ready = y), y)) return w
        if (!y && !p) return w
        throw new Promise(function(e) {
          B(c, d, function() {
            e()
          })
        })
      }
      var ne = ['forwardedRef']
      function re(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? re(Object(n), !0).forEach(function(t) {
                ;(0, i.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function ie(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return function(n) {
          function o(o) {
            var i = o.forwardedRef,
              a = (0, r.Z)(o, ne),
              s = te(e, a),
              u = (0, Q.Z)(s, 3),
              l = u[0],
              p = u[1],
              f = u[2],
              d = oe(oe({}, a), {}, {t: l, i18n: p, tReady: f})
            return (
              t.withRef && i
                ? (d.ref = i)
                : !t.withRef && i && (d.forwardedRef = i),
              c().createElement(n, d)
            )
          }
          return (
            (o.displayName = 'withI18nextTranslation('.concat(K(n), ')')),
            (o.WrappedComponent = n),
            t.withRef
              ? c().forwardRef(function(e, t) {
                  return c().createElement(
                    o,
                    Object.assign({}, e, {forwardedRef: t}),
                  )
                })
              : o
          )
        }
      }
      var ae = ['ns', 'children']
      function ce(e) {
        var t = e.ns,
          n = e.children,
          o = te(t, (0, r.Z)(e, ae)),
          i = (0, Q.Z)(o, 3),
          a = i[0],
          c = i[1],
          s = i[2]
        return n(a, {i18n: c, lng: c.language}, s)
      }
      function se(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          o = (0, a.useMemo)(
            function() {
              return {i18n: t, defaultNS: n}
            },
            [t, n],
          )
        return (0, a.createElement)(N.Provider, {value: o}, r)
      }
      function ue(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.i18n,
          o = (0, a.useContext)(N) || {},
          i = o.i18n,
          c = r || i || C()
        ;(c.options && c.options.isClone) ||
          (e &&
            !c.initializedStoreOnce &&
            ((c.services.resourceStore.data = e),
            (c.options.ns = Object.values(e).reduce(function(e, t) {
              return (
                Object.keys(t).forEach(function(t) {
                  e.indexOf(t) < 0 && e.push(t)
                }),
                e
              )
            }, c.options.ns)),
            (c.initializedStoreOnce = !0),
            (c.isInitialized = !0)),
          t &&
            !c.initializedLanguageOnce &&
            (c.changeLanguage(t), (c.initializedLanguageOnce = !0)))
      }
      var le = ['initialI18nStore', 'initialLanguage']
      function pe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function fe() {
        return function(e) {
          function t(t) {
            var n = t.initialI18nStore,
              o = t.initialLanguage,
              a = (0, r.Z)(t, le)
            return (
              ue(n, o),
              c().createElement(
                e,
                (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                      ? pe(Object(n), !0).forEach(function(t) {
                          ;(0, i.Z)(e, t, n[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : pe(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t),
                          )
                        })
                  }
                  return e
                })({}, a),
              )
            )
          }
          return (
            (t.getInitialProps = T(e)),
            (t.displayName = 'withI18nextSSR('.concat(K(e), ')')),
            (t.WrappedComponent = e),
            t
          )
        }
      }
      var de = function() {
          return ''
        },
        ye = function() {
          return ''
        },
        ge = function() {
          return ''
        },
        me = function() {
          return ''
        },
        he = function() {
          return ''
        },
        ve = function() {
          return ''
        }
    },
    4896: e => {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    },
    926: (e, t, n) => {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      n.d(t, {Z: () => r})
    },
    9249: (e, t, n) => {
      'use strict'
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      n.d(t, {Z: () => r})
    },
    7371: (e, t, n) => {
      'use strict'
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function o(e, t, n) {
        return (
          t && r(e.prototype, t),
          n && r(e, n),
          Object.defineProperty(e, 'prototype', {writable: !1}),
          e
        )
      }
      n.d(t, {Z: () => o})
    },
    6666: (e, t, n) => {
      'use strict'
      function r(e, t, n) {
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
      n.d(t, {Z: () => r})
    },
    2159: (e, t, n) => {
      'use strict'
      function r(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      n.d(t, {Z: () => r})
    },
    2867: (e, t, n) => {
      'use strict'
      n.d(t, {Z: () => o})
      var r = n(9147)
      function o(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function(e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator']
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                ;(c = !0), (o = e)
              } finally {
                try {
                  a || null == n.return || n.return()
                } finally {
                  if (c) throw o
                }
              }
              return i
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
    },
    6522: (e, t, n) => {
      'use strict'
      function r(e) {
        return (
          (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          r(e)
        )
      }
      n.d(t, {Z: () => r})
    },
    9147: (e, t, n) => {
      'use strict'
      n.d(t, {Z: () => o})
      var r = n(926)
      function o(e, t) {
        if (e) {
          if ('string' == typeof e) return (0, r.Z)(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          )
        }
      }
    },
  },
])
//# sourceMappingURL=932.js.map
