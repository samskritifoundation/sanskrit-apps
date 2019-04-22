import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1e32643b = () => interopDefault(import('..\\pages\\chandraloka\\index.vue' /* webpackChunkName: "pages_chandraloka_index" */))
const _7e9ccdaa = () => interopDefault(import('..\\pages\\dvirupa\\index.vue' /* webpackChunkName: "pages_dvirupa_index" */))
const _763f6621 = () => interopDefault(import('..\\pages\\kriyanighantu\\index.vue' /* webpackChunkName: "pages_kriyanighantu_index" */))
const _3d770978 = () => interopDefault(import('..\\pages\\linganushasana\\index.vue' /* webpackChunkName: "pages_linganushasana_index" */))
const _510b13d2 = () => interopDefault(import('..\\pages\\ramayanasangraha\\index.vue' /* webpackChunkName: "pages_ramayanasangraha_index" */))
const _0f5daf71 = () => interopDefault(import('..\\pages\\samasachakra\\index.vue' /* webpackChunkName: "pages_samasachakra_index" */))
const _26d1df60 = () => interopDefault(import('..\\pages\\samasashikhamani\\index.vue' /* webpackChunkName: "pages_samasashikhamani_index" */))
const _69d69b1f = () => interopDefault(import('..\\pages\\sankshepa\\index.vue' /* webpackChunkName: "pages_sankshepa_index" */))
const _d6967166 = () => interopDefault(import('..\\pages\\sastrapramana\\index.vue' /* webpackChunkName: "pages_sastrapramana_index" */))
const _6284e15c = () => interopDefault(import('..\\pages\\srutabodha\\index.vue' /* webpackChunkName: "pages_srutabodha_index" */))
const _2e70c26e = () => interopDefault(import('..\\pages\\upayukta\\index.vue' /* webpackChunkName: "pages_upayukta_index" */))
const _236b5328 = () => interopDefault(import('..\\pages\\vrittaratnakara\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_index" */))
const _0f546ffe = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\index.vue' /* webpackChunkName: "pages_chandraloka_exercises_index" */))
const _cf91b9c4 = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\index.vue' /* webpackChunkName: "pages_chandraloka_lessons_index" */))
const _5b851b2f = () => interopDefault(import('..\\pages\\dvirupa\\exercises\\index.vue' /* webpackChunkName: "pages_dvirupa_exercises_index" */))
const _1a4ae68f = () => interopDefault(import('..\\pages\\dvirupa\\lessons\\index.vue' /* webpackChunkName: "pages_dvirupa_lessons_index" */))
const _481cc955 = () => interopDefault(import('..\\pages\\linganushasana\\exercises\\index.vue' /* webpackChunkName: "pages_linganushasana_exercises_index" */))
const _5923e635 = () => interopDefault(import('..\\pages\\linganushasana\\lessons\\index.vue' /* webpackChunkName: "pages_linganushasana_lessons_index" */))
const _1f95b1f0 = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\index.vue' /* webpackChunkName: "pages_samasachakra_exercises_index" */))
const _59e3d6b0 = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\index.vue' /* webpackChunkName: "pages_samasachakra_lessons_index" */))
const _171ed4c9 = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\index.vue' /* webpackChunkName: "pages_samasashikhamani_exercises_index" */))
const _1c5a3ea9 = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\index.vue' /* webpackChunkName: "pages_samasashikhamani_lessons_index" */))
const _9cb37ef2 = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\index.vue' /* webpackChunkName: "pages_srutabodha_exercises_index" */))
const _c6b4fc32 = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\index.vue' /* webpackChunkName: "pages_srutabodha_lessons_index" */))
const _6cbe9ea0 = () => interopDefault(import('..\\pages\\upayukta\\exercises\\index.vue' /* webpackChunkName: "pages_upayukta_exercises_index" */))
const _099fe850 = () => interopDefault(import('..\\pages\\upayukta\\lessons\\index.vue' /* webpackChunkName: "pages_upayukta_lessons_index" */))
const _fb9c35a6 = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises_index" */))
const _20fe180d = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons_index" */))
const _5e6b8d44 = () => interopDefault(import('..\\pages\\vrittaratnakara\\math.vue' /* webpackChunkName: "pages_vrittaratnakara_math" */))
const _c6cb4c34 = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\_id.vue' /* webpackChunkName: "pages_chandraloka_exercises__id" */))
const _426155f4 = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\_id.vue' /* webpackChunkName: "pages_chandraloka_lessons__id" */))
const _1eae1d57 = () => interopDefault(import('..\\pages\\dvirupa\\exercises\\_id.vue' /* webpackChunkName: "pages_dvirupa_exercises__id" */))
const _792f40b7 = () => interopDefault(import('..\\pages\\dvirupa\\lessons\\_id.vue' /* webpackChunkName: "pages_dvirupa_lessons__id" */))
const _5d871cfd = () => interopDefault(import('..\\pages\\linganushasana\\exercises\\_id.vue' /* webpackChunkName: "pages_linganushasana_exercises__id" */))
const _75201c46 = () => interopDefault(import('..\\pages\\linganushasana\\lessons\\_id.vue' /* webpackChunkName: "pages_linganushasana_lessons__id" */))
const _511d6920 = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\_id.vue' /* webpackChunkName: "pages_samasachakra_exercises__id" */))
const _38e92110 = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\_id.vue' /* webpackChunkName: "pages_samasachakra_lessons__id" */))
const _20bd7571 = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_exercises__id" */))
const _b0ec515e = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_lessons__id" */))
const _bdee8ea2 = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\_id.vue' /* webpackChunkName: "pages_srutabodha_exercises__id" */))
const _98ae5be2 = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\_id.vue' /* webpackChunkName: "pages_srutabodha_lessons__id" */))
const _0e031f18 = () => interopDefault(import('..\\pages\\upayukta\\exercises\\_id.vue' /* webpackChunkName: "pages_upayukta_exercises__id" */))
const _d4a88290 = () => interopDefault(import('..\\pages\\upayukta\\lessons\\_id.vue' /* webpackChunkName: "pages_upayukta_lessons__id" */))
const _25614ed5 = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises__id" */))
const _55468c96 = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons__id" */))
const _229c3f42 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _1e32643b,
      name: "chandraloka"
    }, {
      path: "/dvirupa",
      component: _7e9ccdaa,
      name: "dvirupa"
    }, {
      path: "/kriyanighantu",
      component: _763f6621,
      name: "kriyanighantu"
    }, {
      path: "/linganushasana",
      component: _3d770978,
      name: "linganushasana"
    }, {
      path: "/ramayanasangraha",
      component: _510b13d2,
      name: "ramayanasangraha"
    }, {
      path: "/samasachakra",
      component: _0f5daf71,
      name: "samasachakra"
    }, {
      path: "/samasashikhamani",
      component: _26d1df60,
      name: "samasashikhamani"
    }, {
      path: "/sankshepa",
      component: _69d69b1f,
      name: "sankshepa"
    }, {
      path: "/sastrapramana",
      component: _d6967166,
      name: "sastrapramana"
    }, {
      path: "/srutabodha",
      component: _6284e15c,
      name: "srutabodha"
    }, {
      path: "/upayukta",
      component: _2e70c26e,
      name: "upayukta"
    }, {
      path: "/vrittaratnakara",
      component: _236b5328,
      name: "vrittaratnakara"
    }, {
      path: "/chandraloka/exercises",
      component: _0f546ffe,
      name: "chandraloka-exercises"
    }, {
      path: "/chandraloka/lessons",
      component: _cf91b9c4,
      name: "chandraloka-lessons"
    }, {
      path: "/dvirupa/exercises",
      component: _5b851b2f,
      name: "dvirupa-exercises"
    }, {
      path: "/dvirupa/lessons",
      component: _1a4ae68f,
      name: "dvirupa-lessons"
    }, {
      path: "/linganushasana/exercises",
      component: _481cc955,
      name: "linganushasana-exercises"
    }, {
      path: "/linganushasana/lessons",
      component: _5923e635,
      name: "linganushasana-lessons"
    }, {
      path: "/samasachakra/exercises",
      component: _1f95b1f0,
      name: "samasachakra-exercises"
    }, {
      path: "/samasachakra/lessons",
      component: _59e3d6b0,
      name: "samasachakra-lessons"
    }, {
      path: "/samasashikhamani/exercises",
      component: _171ed4c9,
      name: "samasashikhamani-exercises"
    }, {
      path: "/samasashikhamani/lessons",
      component: _1c5a3ea9,
      name: "samasashikhamani-lessons"
    }, {
      path: "/srutabodha/exercises",
      component: _9cb37ef2,
      name: "srutabodha-exercises"
    }, {
      path: "/srutabodha/lessons",
      component: _c6b4fc32,
      name: "srutabodha-lessons"
    }, {
      path: "/upayukta/exercises",
      component: _6cbe9ea0,
      name: "upayukta-exercises"
    }, {
      path: "/upayukta/lessons",
      component: _099fe850,
      name: "upayukta-lessons"
    }, {
      path: "/vrittaratnakara/exercises",
      component: _fb9c35a6,
      name: "vrittaratnakara-exercises"
    }, {
      path: "/vrittaratnakara/lessons",
      component: _20fe180d,
      name: "vrittaratnakara-lessons"
    }, {
      path: "/vrittaratnakara/math",
      component: _5e6b8d44,
      name: "vrittaratnakara-math"
    }, {
      path: "/chandraloka/exercises/:id",
      component: _c6cb4c34,
      name: "chandraloka-exercises-id"
    }, {
      path: "/chandraloka/lessons/:id",
      component: _426155f4,
      name: "chandraloka-lessons-id"
    }, {
      path: "/dvirupa/exercises/:id",
      component: _1eae1d57,
      name: "dvirupa-exercises-id"
    }, {
      path: "/dvirupa/lessons/:id",
      component: _792f40b7,
      name: "dvirupa-lessons-id"
    }, {
      path: "/linganushasana/exercises/:id",
      component: _5d871cfd,
      name: "linganushasana-exercises-id"
    }, {
      path: "/linganushasana/lessons/:id",
      component: _75201c46,
      name: "linganushasana-lessons-id"
    }, {
      path: "/samasachakra/exercises/:id",
      component: _511d6920,
      name: "samasachakra-exercises-id"
    }, {
      path: "/samasachakra/lessons/:id",
      component: _38e92110,
      name: "samasachakra-lessons-id"
    }, {
      path: "/samasashikhamani/exercises/:id",
      component: _20bd7571,
      name: "samasashikhamani-exercises-id"
    }, {
      path: "/samasashikhamani/lessons/:id",
      component: _b0ec515e,
      name: "samasashikhamani-lessons-id"
    }, {
      path: "/srutabodha/exercises/:id",
      component: _bdee8ea2,
      name: "srutabodha-exercises-id"
    }, {
      path: "/srutabodha/lessons/:id",
      component: _98ae5be2,
      name: "srutabodha-lessons-id"
    }, {
      path: "/upayukta/exercises/:id",
      component: _0e031f18,
      name: "upayukta-exercises-id"
    }, {
      path: "/upayukta/lessons/:id",
      component: _d4a88290,
      name: "upayukta-lessons-id"
    }, {
      path: "/vrittaratnakara/exercises/:id",
      component: _25614ed5,
      name: "vrittaratnakara-exercises-id"
    }, {
      path: "/vrittaratnakara/lessons/:id",
      component: _55468c96,
      name: "vrittaratnakara-lessons-id"
    }, {
      path: "/",
      component: _229c3f42,
      name: "index"
    }],

    fallback: false
  })
}
