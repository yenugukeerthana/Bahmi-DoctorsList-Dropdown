;(self.webpackChunk_openmrs_esm_patient_search_app =
  self.webpackChunk_openmrs_esm_patient_search_app || []).push([
  [745],
  {
    7745: (e, t, n) => {
      'use strict'
      n.r(t),
        n.d(t, {
          backendDependencies: () => i,
          frontendDependencies: () => o,
          importTranslation: () => r,
          setupOpenMRS: () => p,
        })
      var a = n(9035)
      const s = {
          search: {
            patientResultUrl: {
              _default: '${openmrsSpaBase}/patient/${patientUuid}/chart',
              _description:
                'Where clicking a patient result takes the user. Accepts template parameter ${patientUuid}',
              _validators: [
                a.validators.isUrlWithTemplateParameters(['patientUuid']),
              ],
            },
            hideActionsOverflow: {
              _type: a.Type.Boolean,
              _default: !1,
              _description:
                'Whether to hide the action overflow in patients search results',
            },
          },
          includeDead: {
            _type: a.Type.Boolean,
            _default: !0,
            _description: 'Whether to include dead patients in search results',
          },
        },
        r = n(3979),
        i = {'webservices.rest': '^2.2.0'},
        o = {'@openmrs/esm-framework': '^3.2.1-pre.986'}
      function p() {
        const e = '@openmrs/esm-patient-search-app',
          t = {featureName: 'patient-search', moduleName: e}
        return (
          (0, a.defineConfigSchema)(e, s),
          {
            extensions: [
              {
                id: 'patient-search-icon',
                slot: 'top-nav-actions-slot',
                order: 0,
                load: (0, a.getAsyncLifecycle)(
                  () =>
                    Promise.all([n.e(852), n.e(902), n.e(893)]).then(
                      n.bind(n, 7027),
                    ),
                  t,
                ),
              },
            ],
          }
        )
      }
    },
    3979: (e, t, n) => {
      var a = {'./en.json': [3574, 574], './es.json': [8319, 319]}
      function s(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = 'MODULE_NOT_FOUND'), t)
          })
        var t = a[e],
          s = t[0]
        return n.e(t[1]).then(() => n(s))
      }
      ;(s.keys = () => Object.keys(a)), (s.id = 3979), (e.exports = s)
    },
  },
])
//# sourceMappingURL=745.js.map
