import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1c92f992 = () => interopDefault(import('..\\pages\\chandraloka\\index.vue' /* webpackChunkName: "pages_chandraloka_index" */))
const _5853a681 = () => interopDefault(import('..\\pages\\dvirupa\\index.vue' /* webpackChunkName: "pages_dvirupa_index" */))
const _5ed001b8 = () => interopDefault(import('..\\pages\\kriyanighantu\\index.vue' /* webpackChunkName: "pages_kriyanighantu_index" */))
const _0ac7528d = () => interopDefault(import('..\\pages\\linganushasana\\index.vue' /* webpackChunkName: "pages_linganushasana_index" */))
const _25353cdb = () => interopDefault(import('..\\pages\\ramayanasangraha\\index.vue' /* webpackChunkName: "pages_ramayanasangraha_index" */))
const _45e0760c = () => interopDefault(import('..\\pages\\samasachakra\\index.vue' /* webpackChunkName: "pages_samasachakra_index" */))
const _7e7d8d4e = () => interopDefault(import('..\\pages\\samasashikhamani\\index.vue' /* webpackChunkName: "pages_samasashikhamani_index" */))
const _9d8acb94 = () => interopDefault(import('..\\pages\\sankshepa\\index.vue' /* webpackChunkName: "pages_sankshepa_index" */))
const _7d4562e4 = () => interopDefault(import('..\\pages\\sastrapramana\\index.vue' /* webpackChunkName: "pages_sastrapramana_index" */))
const _73d9731b = () => interopDefault(import('..\\pages\\srutabodha\\index.vue' /* webpackChunkName: "pages_srutabodha_index" */))
const _45ebe0d2 = () => interopDefault(import('..\\pages\\upayukta\\index.vue' /* webpackChunkName: "pages_upayukta_index" */))
const _15bb2f7a = () => interopDefault(import('..\\pages\\vrittaratnakara\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_index" */))
const _5793ee47 = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\index.vue' /* webpackChunkName: "pages_chandraloka_exercises_index" */))
const _ecb8c0b2 = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\index.vue' /* webpackChunkName: "pages_chandraloka_lessons_index" */))
const _a0351c42 = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\index.vue' /* webpackChunkName: "pages_samasachakra_exercises_index" */))
const _0f31293f = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\index.vue' /* webpackChunkName: "pages_samasachakra_lessons_index" */))
const _c52047c0 = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\index.vue' /* webpackChunkName: "pages_samasashikhamani_exercises_index" */))
const _9db9a080 = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\index.vue' /* webpackChunkName: "pages_samasashikhamani_lessons_index" */))
const _246d55c4 = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\index.vue' /* webpackChunkName: "pages_srutabodha_exercises_index" */))
const _72e2d03e = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\index.vue' /* webpackChunkName: "pages_srutabodha_lessons_index" */))
const _f2f1d214 = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises_index" */))
const _57572816 = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons_index" */))
const _0b65deb2 = () => interopDefault(import('..\\pages\\vrittaratnakara\\math.vue' /* webpackChunkName: "pages_vrittaratnakara_math" */))
const _e3f25322 = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\_id.vue' /* webpackChunkName: "pages_chandraloka_exercises__id" */))
const _51135fcf = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\_id.vue' /* webpackChunkName: "pages_chandraloka_lessons__id" */))
const _13946007 = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\_id.vue' /* webpackChunkName: "pages_samasachakra_exercises__id" */))
const _0f266f67 = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\_id.vue' /* webpackChunkName: "pages_samasachakra_lessons__id" */))
const _94f332f0 = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_exercises__id" */))
const _673a2228 = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_lessons__id" */))
const _77460706 = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\_id.vue' /* webpackChunkName: "pages_srutabodha_exercises__id" */))
const _64c3ca26 = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\_id.vue' /* webpackChunkName: "pages_srutabodha_lessons__id" */))
const _5bba5ede = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises__id" */))
const _1d9c37fe = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons__id" */))
const _37f669a8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/chandraloka",
      component: _1c92f992,
      name: "chandraloka"
    }, {
      path: "/dvirupa",
      component: _5853a681,
      name: "dvirupa"
    }, {
      path: "/kriyanighantu",
      component: _5ed001b8,
      name: "kriyanighantu"
    }, {
      path: "/linganushasana",
      component: _0ac7528d,
      name: "linganushasana"
    }, {
      path: "/ramayanasangraha",
      component: _25353cdb,
      name: "ramayanasangraha"
    }, {
      path: "/samasachakra",
      component: _45e0760c,
      name: "samasachakra"
    }, {
      path: "/samasashikhamani",
      component: _7e7d8d4e,
      name: "samasashikhamani"
    }, {
      path: "/sankshepa",
      component: _9d8acb94,
      name: "sankshepa"
    }, {
      path: "/sastrapramana",
      component: _7d4562e4,
      name: "sastrapramana"
    }, {
      path: "/srutabodha",
      component: _73d9731b,
      name: "srutabodha"
    }, {
      path: "/upayukta",
      component: _45ebe0d2,
      name: "upayukta"
    }, {
      path: "/vrittaratnakara",
      component: _15bb2f7a,
      name: "vrittaratnakara"
    }, {
      path: "/chandraloka/exercises",
      component: _5793ee47,
      name: "chandraloka-exercises"
    }, {
      path: "/chandraloka/lessons",
      component: _ecb8c0b2,
      name: "chandraloka-lessons"
    }, {
      path: "/samasachakra/exercises",
      component: _a0351c42,
      name: "samasachakra-exercises"
    }, {
      path: "/samasachakra/lessons",
      component: _0f31293f,
      name: "samasachakra-lessons"
    }, {
      path: "/samasashikhamani/exercises",
      component: _c52047c0,
      name: "samasashikhamani-exercises"
    }, {
      path: "/samasashikhamani/lessons",
      component: _9db9a080,
      name: "samasashikhamani-lessons"
    }, {
      path: "/srutabodha/exercises",
      component: _246d55c4,
      name: "srutabodha-exercises"
    }, {
      path: "/srutabodha/lessons",
      component: _72e2d03e,
      name: "srutabodha-lessons"
    }, {
      path: "/vrittaratnakara/exercises",
      component: _f2f1d214,
      name: "vrittaratnakara-exercises"
    }, {
      path: "/vrittaratnakara/lessons",
      component: _57572816,
      name: "vrittaratnakara-lessons"
    }, {
      path: "/vrittaratnakara/math",
      component: _0b65deb2,
      name: "vrittaratnakara-math"
    }, {
      path: "/chandraloka/exercises/:id",
      component: _e3f25322,
      name: "chandraloka-exercises-id"
    }, {
      path: "/chandraloka/lessons/:id",
      component: _51135fcf,
      name: "chandraloka-lessons-id"
    }, {
      path: "/samasachakra/exercises/:id",
      component: _13946007,
      name: "samasachakra-exercises-id"
    }, {
      path: "/samasachakra/lessons/:id",
      component: _0f266f67,
      name: "samasachakra-lessons-id"
    }, {
      path: "/samasashikhamani/exercises/:id",
      component: _94f332f0,
      name: "samasashikhamani-exercises-id"
    }, {
      path: "/samasashikhamani/lessons/:id",
      component: _673a2228,
      name: "samasashikhamani-lessons-id"
    }, {
      path: "/srutabodha/exercises/:id",
      component: _77460706,
      name: "srutabodha-exercises-id"
    }, {
      path: "/srutabodha/lessons/:id",
      component: _64c3ca26,
      name: "srutabodha-lessons-id"
    }, {
      path: "/vrittaratnakara/exercises/:id",
      component: _5bba5ede,
      name: "vrittaratnakara-exercises-id"
    }, {
      path: "/vrittaratnakara/lessons/:id",
      component: _1d9c37fe,
      name: "vrittaratnakara-lessons-id"
    }, {
      path: "/",
      component: _37f669a8,
      name: "index"
    }],

    fallback: false
  })
}
