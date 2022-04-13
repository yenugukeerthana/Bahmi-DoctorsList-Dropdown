;(self.webpackChunk_openmrs_esm_patient_search_app =
  self.webpackChunk_openmrs_esm_patient_search_app || []).push([
  [373],
  {
    9932: (e, n, t) => {
      'use strict'
      t.r(n),
        t.d(n, {
          I18nContext: () => N,
          I18nextProvider: () => se,
          Trans: () => J,
          Translation: () => ce,
          composeInitialProps: () => z,
          date: () => de,
          getDefaults: () => D,
          getI18n: () => C,
          getInitialProps: () => A,
          initReactI18next: () => T,
          number: () => me,
          plural: () => ve,
          select: () => he,
          selectOrdinal: () => ye,
          setDefaults: () => I,
          setI18n: () => Z,
          time: () => ge,
          useSSR: () => ue,
          useTranslation: () => ne,
          withSSR: () => fe,
          withTranslation: () => ae,
        })
      var r = t(2159),
        i = t(6522),
        a = t(6666),
        o = t(9902),
        c = t.n(o),
        s = t(4896),
        u = t.n(s),
        l = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
      function p(e) {
        var n = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: [],
          },
          t = e.match(/<\/?([^\s]+?)[/\s>]/)
        if (
          t &&
          ((n.name = t[1]),
          (u()[t[1]] || '/' === e.charAt(e.length - 2)) && (n.voidElement = !0),
          n.name.startsWith('!--'))
        ) {
          var r = e.indexOf('--\x3e')
          return {type: 'comment', comment: -1 !== r ? e.slice(4, r) : ''}
        }
        for (var i = new RegExp(l), a = null; null !== (a = i.exec(e)); )
          if (a[0].trim())
            if (a[1]) {
              var o = a[1].trim(),
                c = [o, '']
              o.indexOf('=') > -1 && (c = o.split('=')),
                (n.attrs[c[0]] = c[1]),
                i.lastIndex--
            } else
              a[2] &&
                (n.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1))
        return n
      }
      var f = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        d = /^\s*$/,
        g = Object.create(null)
      function m(e, n) {
        switch (n.type) {
          case 'text':
            return e + n.content
          case 'tag':
            return (
              (e +=
                '<' +
                n.name +
                (n.attrs
                  ? (function(e) {
                      var n = []
                      for (var t in e) n.push(t + '="' + e[t] + '"')
                      return n.length ? ' ' + n.join(' ') : ''
                    })(n.attrs)
                  : '') +
                (n.voidElement ? '/>' : '>')),
              n.voidElement
                ? e
                : e + n.children.reduce(m, '') + '</' + n.name + '>'
            )
          case 'comment':
            return e + '\x3c!--' + n.comment + '--\x3e'
        }
      }
      var h = {
        parse: function(e, n) {
          n || (n = {}), n.components || (n.components = g)
          var t,
            r = [],
            i = [],
            a = -1,
            o = !1
          if (0 !== e.indexOf('<')) {
            var c = e.indexOf('<')
            r.push({type: 'text', content: -1 === c ? e : e.substring(0, c)})
          }
          return (
            e.replace(f, function(c, s) {
              if (o) {
                if (c !== '</' + t.name + '>') return
                o = !1
              }
              var u,
                l = '/' !== c.charAt(1),
                f = c.startsWith('\x3c!--'),
                g = s + c.length,
                m = e.charAt(g)
              if (f) {
                var h = p(c)
                return a < 0 ? (r.push(h), r) : ((u = i[a]).children.push(h), r)
              }
              if (
                (l &&
                  (a++,
                  'tag' === (t = p(c)).type &&
                    n.components[t.name] &&
                    ((t.type = 'component'), (o = !0)),
                  t.voidElement ||
                    o ||
                    !m ||
                    '<' === m ||
                    t.children.push({
                      type: 'text',
                      content: e.slice(g, e.indexOf('<', g)),
                    }),
                  0 === a && r.push(t),
                  (u = i[a - 1]) && u.children.push(t),
                  (i[a] = t)),
                (!l || t.voidElement) &&
                  (a > -1 &&
                    (t.voidElement || t.name === c.slice(2, -1)) &&
                    (a--, (t = -1 === a ? r : i[a])),
                  !o && '<' !== m && m))
              ) {
                u = -1 === a ? r : i[a].children
                var v = e.indexOf('<', g),
                  y = e.slice(g, -1 === v ? void 0 : v)
                d.test(y) && (y = ' '),
                  ((v > -1 && a + u.length >= 0) || ' ' !== y) &&
                    u.push({type: 'text', content: y})
              }
            }),
            r
          )
        },
        stringify: function(e) {
          return e.reduce(function(e, n) {
            return e + m('', n)
          }, '')
        },
      }
      const v = h
      var y = ''.replace,
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
      var w = t(9249),
        P = t(7371)
      function E(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? E(Object(t), !0).forEach(function(n) {
                ;(0, a.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                )
              })
        }
        return e
      }
      var k,
        S = {
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
        S = x(x({}, S), e)
      }
      function D() {
        return S
      }
      var R = (function() {
        function e() {
          ;(0, w.Z)(this, e), (this.usedNamespaces = {})
        }
        return (
          (0, P.Z)(e, [
            {
              key: 'addUsedNamespaces',
              value: function(e) {
                var n = this
                e.forEach(function(e) {
                  n.usedNamespaces[e] || (n.usedNamespaces[e] = !0)
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
      function Z(e) {
        k = e
      }
      function C() {
        return k
      }
      var T = {
        type: '3rdParty',
        init: function(e) {
          I(e.options.react), Z(e)
        },
      }
      function z(e) {
        return function(n) {
          return new Promise(function(t) {
            var r = A()
            e.getInitialProps
              ? e.getInitialProps(n).then(function(e) {
                  t(x(x({}, e), r))
                })
              : t(r)
          })
        }
      }
      function A() {
        var e = C(),
          n = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
          t = {},
          r = {}
        return (
          e.languages.forEach(function(t) {
            ;(r[t] = {}),
              n.forEach(function(n) {
                r[t][n] = e.getResourceBundle(t, n) || {}
              })
          }),
          (t.initialI18nStore = r),
          (t.initialLanguage = e.language),
          t
        )
      }
      function L() {
        if (console && console.warn) {
          for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r]
          'string' == typeof t[0] && (t[0] = 'react-i18next:: '.concat(t[0])),
            (e = console).warn.apply(e, t)
        }
      }
      var _ = {}
      function U() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t]
        ;('string' == typeof n[0] && _[n[0]]) ||
          ('string' == typeof n[0] && (_[n[0]] = new Date()),
          L.apply(void 0, n))
      }
      function B(e, n, t) {
        e.loadNamespaces(n, function() {
          e.isInitialized
            ? t()
            : e.on('initialized', function n() {
                setTimeout(function() {
                  e.off('initialized', n)
                }, 0),
                  t()
              })
        })
      }
      function V(e, n) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (!n.languages || !n.languages.length)
          return U('i18n.languages were undefined or empty', n.languages), !0
        var r = n.languages[0],
          i = !!n.options && n.options.fallbackLng,
          a = n.languages[n.languages.length - 1]
        if ('cimode' === r.toLowerCase()) return !0
        var o = function(e, t) {
          var r = n.services.backendConnector.state[''.concat(e, '|').concat(t)]
          return -1 === r || 2 === r
        }
        return !(
          (t.bindI18n &&
            t.bindI18n.indexOf('languageChanging') > -1 &&
            n.services.backendConnector.backend &&
            n.isLanguageChangingTo &&
            !o(n.isLanguageChangingTo, e)) ||
          (!n.hasResourceBundle(r, e) &&
            n.services.backendConnector.backend &&
            (!o(r, e) || (i && !o(a, e))))
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
      function H(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function M(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? H(Object(t), !0).forEach(function(n) {
                ;(0, a.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                )
              })
        }
        return e
      }
      function $(e, n) {
        if (!e) return !1
        var t = e.props ? e.props.children : e.children
        return n ? t.length > 0 : !!t
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
      function G(e, n) {
        if (!e) return ''
        var t = '',
          a = Y(e),
          o = n.transKeepBasicHtmlNodesFor || []
        return (
          a.forEach(function(e, a) {
            if ('string' == typeof e) t += ''.concat(e)
            else if (c().isValidElement(e)) {
              var s = Object.keys(e.props).length,
                u = o.indexOf(e.type) > -1,
                l = e.props.children
              if (!l && u && 0 === s) t += '<'.concat(e.type, '/>')
              else if (l || (u && 0 === s))
                if (e.props.i18nIsDynamicList)
                  t += '<'.concat(a, '></').concat(a, '>')
                else if (u && 1 === s && 'string' == typeof l)
                  t += '<'
                    .concat(e.type, '>')
                    .concat(l, '</')
                    .concat(e.type, '>')
                else {
                  var p = G(l, n)
                  t += '<'
                    .concat(a, '>')
                    .concat(p, '</')
                    .concat(a, '>')
                }
              else t += '<'.concat(a, '></').concat(a, '>')
            } else if (null === e)
              L(
                'Trans: the passed in value is invalid - seems you passed in a null child.',
              )
            else if ('object' === (0, i.Z)(e)) {
              var f = e.format,
                d = (0, r.Z)(e, W),
                g = Object.keys(d)
              if (1 === g.length) {
                var m = f ? ''.concat(g[0], ', ').concat(f) : g[0]
                t += '{{'.concat(m, '}}')
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
          t
        )
      }
      function J(e) {
        var n = e.children,
          t = e.count,
          a = e.parent,
          s = e.i18nKey,
          u = e.tOptions,
          l = void 0 === u ? {} : u,
          p = e.values,
          f = e.defaults,
          d = e.components,
          g = e.ns,
          m = e.i18n,
          h = e.t,
          O = e.shouldUnescape,
          w = (0, r.Z)(e, F),
          P = (0, o.useContext)(N) || {},
          E = P.i18n,
          x = P.defaultNS,
          k = m || E || C()
        if (!k)
          return (
            U(
              'You will need to pass in an i18next instance by using i18nextReactModule',
            ),
            n
          )
        var S =
            h ||
            k.t.bind(k) ||
            function(e) {
              return e
            },
          I = M(M({}, D()), k.options && k.options.react),
          R = g || S.ns || x || (k.options && k.options.defaultNS)
        R = 'string' == typeof R ? [R] : R || ['translation']
        var Z = f || G(n, I) || I.transEmptyNodeValue || s,
          T = I.hashTransKey,
          z = s || (T ? T(Z) : Z),
          A = p
            ? l.interpolation
            : {
                interpolation: M(
                  M({}, l.interpolation),
                  {},
                  {prefix: '#$?', suffix: '?$#'},
                ),
              },
          L = M(
            M(M(M({}, l), {}, {count: t}, p), A),
            {},
            {defaultValue: Z, ns: R},
          ),
          _ = (function(e, n, t, r, a, o) {
            if ('' === n) return []
            var s = r.transKeepBasicHtmlNodesFor || [],
              u = n && new RegExp(s.join('|')).test(n)
            if (!e && !u) return [n]
            var l = {}
            !(function e(n) {
              Y(n).forEach(function(n) {
                'string' != typeof n &&
                  ($(n)
                    ? e(q(n))
                    : 'object' !== (0, i.Z)(n) ||
                      c().isValidElement(n) ||
                      Object.assign(l, n))
              })
            })(e)
            var p = v.parse('<0>'.concat(n, '</0>')),
              f = M(M({}, l), a)
            function d(e, n, t) {
              var r = q(e),
                i = m(r, n.children, t)
              return (function(e) {
                return (
                  '[object Array]' === Object.prototype.toString.call(e) &&
                  e.every(function(e) {
                    return c().isValidElement(e)
                  })
                )
              })(r) && 0 === i.length
                ? r
                : i
            }
            function g(e, n, t, r, i) {
              e.dummy && (e.children = n),
                t.push(
                  c().cloneElement(
                    e,
                    M(M({}, e.props), {}, {key: r}),
                    i ? void 0 : n,
                  ),
                )
            }
            function m(n, a, l) {
              var p = Y(n)
              return Y(a).reduce(function(n, a, h) {
                var v,
                  O,
                  w,
                  P,
                  E =
                    a.children &&
                    a.children[0] &&
                    a.children[0].content &&
                    t.services.interpolator.interpolate(
                      a.children[0].content,
                      f,
                      t.language,
                    )
                if ('tag' === a.type) {
                  var x = p[parseInt(a.name, 10)]
                  !x && 1 === l.length && l[0][a.name] && (x = l[0][a.name]),
                    x || (x = {})
                  var k =
                      0 !== Object.keys(a.attrs).length
                        ? ((O = {props: a.attrs}),
                          ((P = M({}, (w = x))).props = Object.assign(
                            O.props,
                            w.props,
                          )),
                          P)
                        : x,
                    S = c().isValidElement(k),
                    N = S && $(a, !0) && !a.voidElement,
                    I = u && 'object' === (0, i.Z)(k) && k.dummy && !S,
                    D =
                      'object' === (0, i.Z)(e) &&
                      null !== e &&
                      Object.hasOwnProperty.call(e, a.name)
                  if ('string' == typeof k) {
                    var R = t.services.interpolator.interpolate(
                      k,
                      f,
                      t.language,
                    )
                    n.push(R)
                  } else if ($(k) || N) g(k, d(k, a, l), n, h)
                  else if (I) {
                    var Z = m(p, a.children, l)
                    n.push(
                      c().cloneElement(k, M(M({}, k.props), {}, {key: h}), Z),
                    )
                  } else if (Number.isNaN(parseFloat(a.name)))
                    if (D) g(k, d(k, a, l), n, h, a.voidElement)
                    else if (
                      r.transSupportBasicHtmlNodes &&
                      s.indexOf(a.name) > -1
                    )
                      if (a.voidElement)
                        n.push(
                          c().createElement(a.name, {
                            key: ''.concat(a.name, '-').concat(h),
                          }),
                        )
                      else {
                        var C = m(p, a.children, l)
                        n.push(
                          c().createElement(
                            a.name,
                            {key: ''.concat(a.name, '-').concat(h)},
                            C,
                          ),
                        )
                      }
                    else if (a.voidElement) n.push('<'.concat(a.name, ' />'))
                    else {
                      var T = m(p, a.children, l)
                      n.push(
                        '<'
                          .concat(a.name, '>')
                          .concat(T, '</')
                          .concat(a.name, '>'),
                      )
                    }
                  else if ('object' !== (0, i.Z)(k) || S)
                    1 === a.children.length && E
                      ? n.push(
                          c().cloneElement(
                            k,
                            M(M({}, k.props), {}, {key: h}),
                            E,
                          ),
                        )
                      : n.push(
                          c().cloneElement(k, M(M({}, k.props), {}, {key: h})),
                        )
                  else {
                    var z = a.children[0] ? E : null
                    z && n.push(z)
                  }
                } else if ('text' === a.type) {
                  var A = r.transWrapTextNodes,
                    L = o
                      ? ((v = t.services.interpolator.interpolate(
                          a.content,
                          f,
                          t.language,
                        )),
                        y.call(v, b, j))
                      : t.services.interpolator.interpolate(
                          a.content,
                          f,
                          t.language,
                        )
                  A
                    ? n.push(
                        c().createElement(
                          A,
                          {key: ''.concat(a.name, '-').concat(h)},
                          L,
                        ),
                      )
                    : n.push(L)
                }
                return n
              }, [])
            }
            return q(m([{dummy: !0, children: e || []}], p, Y(e || []))[0])
          })(d || n, z ? S(z, L) : Z, k, I, L, O),
          B = void 0 !== a ? a : I.defaultTransParent
        return B ? c().createElement(B, w, _) : _
      }
      var Q = t(2867)
      function X(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function ee(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? X(Object(t), !0).forEach(function(n) {
                ;(0, a.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                )
              })
        }
        return e
      }
      function ne(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = n.i18n,
          r = (0, o.useContext)(N) || {},
          i = r.i18n,
          a = r.defaultNS,
          c = t || i || C()
        if ((c && !c.reportNamespaces && (c.reportNamespaces = new R()), !c)) {
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
        var l = ee(ee(ee({}, D()), c.options.react), n),
          p = l.useSuspense,
          f = l.keyPrefix,
          d = e || a || (c.options && c.options.defaultNS)
        ;(d = 'string' == typeof d ? [d] : d || ['translation']),
          c.reportNamespaces.addUsedNamespaces &&
            c.reportNamespaces.addUsedNamespaces(d)
        var g =
          (c.isInitialized || c.initializedStoreOnce) &&
          d.every(function(e) {
            return V(e, c, l)
          })
        function m() {
          return c.getFixedT(null, 'fallback' === l.nsMode ? d : d[0], f)
        }
        var h = (0, o.useState)(m),
          v = (0, Q.Z)(h, 2),
          y = v[0],
          b = v[1],
          O = (0, o.useRef)(!0)
        ;(0, o.useEffect)(
          function() {
            var e = l.bindI18n,
              n = l.bindI18nStore
            function t() {
              O.current && b(m)
            }
            return (
              (O.current = !0),
              g ||
                p ||
                B(c, d, function() {
                  O.current && b(m)
                }),
              e && c && c.on(e, t),
              n && c && c.store.on(n, t),
              function() {
                ;(O.current = !1),
                  e &&
                    c &&
                    e.split(' ').forEach(function(e) {
                      return c.off(e, t)
                    }),
                  n &&
                    c &&
                    n.split(' ').forEach(function(e) {
                      return c.store.off(e, t)
                    })
              }
            )
          },
          [c, d.join()],
        )
        var j = (0, o.useRef)(!0)
        ;(0, o.useEffect)(
          function() {
            O.current && !j.current && b(m), (j.current = !1)
          },
          [c],
        )
        var w = [y, c, g]
        if (((w.t = y), (w.i18n = c), (w.ready = g), g)) return w
        if (!g && !p) return w
        throw new Promise(function(e) {
          B(c, d, function() {
            e()
          })
        })
      }
      var te = ['forwardedRef']
      function re(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function ie(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? re(Object(t), !0).forEach(function(n) {
                ;(0, a.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : re(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                )
              })
        }
        return e
      }
      function ae(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return function(t) {
          function i(i) {
            var a = i.forwardedRef,
              o = (0, r.Z)(i, te),
              s = ne(e, o),
              u = (0, Q.Z)(s, 3),
              l = u[0],
              p = u[1],
              f = u[2],
              d = ie(ie({}, o), {}, {t: l, i18n: p, tReady: f})
            return (
              n.withRef && a
                ? (d.ref = a)
                : !n.withRef && a && (d.forwardedRef = a),
              c().createElement(t, d)
            )
          }
          return (
            (i.displayName = 'withI18nextTranslation('.concat(K(t), ')')),
            (i.WrappedComponent = t),
            n.withRef
              ? c().forwardRef(function(e, n) {
                  return c().createElement(
                    i,
                    Object.assign({}, e, {forwardedRef: n}),
                  )
                })
              : i
          )
        }
      }
      var oe = ['ns', 'children']
      function ce(e) {
        var n = e.ns,
          t = e.children,
          i = ne(n, (0, r.Z)(e, oe)),
          a = (0, Q.Z)(i, 3),
          o = a[0],
          c = a[1],
          s = a[2]
        return t(o, {i18n: c, lng: c.language}, s)
      }
      function se(e) {
        var n = e.i18n,
          t = e.defaultNS,
          r = e.children,
          i = (0, o.useMemo)(
            function() {
              return {i18n: n, defaultNS: t}
            },
            [n, t],
          )
        return (0, o.createElement)(N.Provider, {value: i}, r)
      }
      function ue(e, n) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.i18n,
          i = (0, o.useContext)(N) || {},
          a = i.i18n,
          c = r || a || C()
        ;(c.options && c.options.isClone) ||
          (e &&
            !c.initializedStoreOnce &&
            ((c.services.resourceStore.data = e),
            (c.options.ns = Object.values(e).reduce(function(e, n) {
              return (
                Object.keys(n).forEach(function(n) {
                  e.indexOf(n) < 0 && e.push(n)
                }),
                e
              )
            }, c.options.ns)),
            (c.initializedStoreOnce = !0),
            (c.isInitialized = !0)),
          n &&
            !c.initializedLanguageOnce &&
            (c.changeLanguage(n), (c.initializedLanguageOnce = !0)))
      }
      var le = ['initialI18nStore', 'initialLanguage']
      function pe(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function fe() {
        return function(e) {
          function n(n) {
            var t = n.initialI18nStore,
              i = n.initialLanguage,
              o = (0, r.Z)(n, le)
            return (
              ue(t, i),
              c().createElement(
                e,
                (function(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {}
                    n % 2
                      ? pe(Object(t), !0).forEach(function(n) {
                          ;(0, a.Z)(e, n, t[n])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t),
                        )
                      : pe(Object(t)).forEach(function(n) {
                          Object.defineProperty(
                            e,
                            n,
                            Object.getOwnPropertyDescriptor(t, n),
                          )
                        })
                  }
                  return e
                })({}, o),
              )
            )
          }
          return (
            (n.getInitialProps = z(e)),
            (n.displayName = 'withI18nextSSR('.concat(K(e), ')')),
            (n.WrappedComponent = e),
            n
          )
        }
      }
      var de = function() {
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
        },
        ye = function() {
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
  },
])
//# sourceMappingURL=373.js.map
