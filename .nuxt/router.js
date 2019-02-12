import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1768a4c4 = () => interopDefault(import('..\\pages\\chandraloka\\index.vue' /* webpackChunkName: "pages_chandraloka_index" */))
const _2b2be2c4 = () => interopDefault(import('..\\pages\\kriyanighantu\\index.vue' /* webpackChunkName: "pages_kriyanighantu_index" */))
const _0724db24 = () => interopDefault(import('..\\pages\\samasachakra\\index.vue' /* webpackChunkName: "pages_samasachakra_index" */))
const _38d32ccd = () => interopDefault(import('..\\pages\\samasashikhamani\\index.vue' /* webpackChunkName: "pages_samasashikhamani_index" */))
const _0f740d8f = () => interopDefault(import('..\\pages\\srutabodha\\index.vue' /* webpackChunkName: "pages_srutabodha_index" */))
const _1a0a364f = () => interopDefault(import('..\\pages\\vrittaratnakara\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_index" */))
const _41767abb = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\index.vue' /* webpackChunkName: "pages_chandraloka_exercises_index" */))
const _10328dca = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\index.vue' /* webpackChunkName: "pages_chandraloka_lessons_index" */))
const _025473eb = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\index.vue' /* webpackChunkName: "pages_samasachakra_exercises_index" */))
const _69513e4b = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\index.vue' /* webpackChunkName: "pages_samasachakra_lessons_index" */))
const _3d36f82c = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\index.vue' /* webpackChunkName: "pages_samasashikhamani_exercises_index" */))
const _23d9decc = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\index.vue' /* webpackChunkName: "pages_samasashikhamani_lessons_index" */))
const _47e96a2a = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\index.vue' /* webpackChunkName: "pages_srutabodha_exercises_index" */))
const _23dcb84a = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\index.vue' /* webpackChunkName: "pages_srutabodha_lessons_index" */))
const _6aa6496a = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises_index" */))
const _52c8678a = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\index.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons_index" */))
const _8d255dca = () => interopDefault(import('..\\pages\\vrittaratnakara\\math.vue' /* webpackChunkName: "pages_vrittaratnakara_math" */))
const _076c203a = () => interopDefault(import('..\\pages\\chandraloka\\exercises\\_id.vue' /* webpackChunkName: "pages_chandraloka_exercises__id" */))
const _0c764643 = () => interopDefault(import('..\\pages\\chandraloka\\lessons\\_id.vue' /* webpackChunkName: "pages_chandraloka_lessons__id" */))
const _6db47513 = () => interopDefault(import('..\\pages\\samasachakra\\exercises\\_id.vue' /* webpackChunkName: "pages_samasachakra_exercises__id" */))
const _7fbf511a = () => interopDefault(import('..\\pages\\samasachakra\\lessons\\_id.vue' /* webpackChunkName: "pages_samasachakra_lessons__id" */))
const _283d1594 = () => interopDefault(import('..\\pages\\samasashikhamani\\exercises\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_exercises__id" */))
const _8cadb798 = () => interopDefault(import('..\\pages\\samasashikhamani\\lessons\\_id.vue' /* webpackChunkName: "pages_samasashikhamani_lessons__id" */))
const _283fef12 = () => interopDefault(import('..\\pages\\srutabodha\\exercises\\_id.vue' /* webpackChunkName: "pages_srutabodha_exercises__id" */))
const _221f759c = () => interopDefault(import('..\\pages\\srutabodha\\lessons\\_id.vue' /* webpackChunkName: "pages_srutabodha_lessons__id" */))
const _572b9e52 = () => interopDefault(import('..\\pages\\vrittaratnakara\\exercises\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_exercises__id" */))
const _077ec472 = () => interopDefault(import('..\\pages\\vrittaratnakara\\lessons\\_id.vue' /* webpackChunkName: "pages_vrittaratnakara_lessons__id" */))
const _8323dbc8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _1768a4c4,
      name: "chandraloka"
    }, {
      path: "/kriyanighantu",
      component: _2b2be2c4,
      name: "kriyanighantu"
    }, {
      path: "/samasachakra",
      component: _0724db24,
      name: "samasachakra"
    }, {
      path: "/samasashikhamani",
      component: _38d32ccd,
      name: "samasashikhamani"
    }, {
      path: "/srutabodha",
      component: _0f740d8f,
      name: "srutabodha"
    }, {
      path: "/vrittaratnakara",
      component: _1a0a364f,
      name: "vrittaratnakara"
    }, {
      path: "/chandraloka/exercises",
      component: _41767abb,
      name: "chandraloka-exercises"
    }, {
      path: "/chandraloka/lessons",
      component: _10328dca,
      name: "chandraloka-lessons"
    }, {
      path: "/samasachakra/exercises",
      component: _025473eb,
      name: "samasachakra-exercises"
    }, {
      path: "/samasachakra/lessons",
      component: _69513e4b,
      name: "samasachakra-lessons"
    }, {
      path: "/samasashikhamani/exercises",
      component: _3d36f82c,
      name: "samasashikhamani-exercises"
    }, {
      path: "/samasashikhamani/lessons",
      component: _23d9decc,
      name: "samasashikhamani-lessons"
    }, {
      path: "/srutabodha/exercises",
      component: _47e96a2a,
      name: "srutabodha-exercises"
    }, {
      path: "/srutabodha/lessons",
      component: _23dcb84a,
      name: "srutabodha-lessons"
    }, {
      path: "/vrittaratnakara/exercises",
      component: _6aa6496a,
      name: "vrittaratnakara-exercises"
    }, {
      path: "/vrittaratnakara/lessons",
      component: _52c8678a,
      name: "vrittaratnakara-lessons"
    }, {
      path: "/vrittaratnakara/math",
      component: _8d255dca,
      name: "vrittaratnakara-math"
    }, {
      path: "/chandraloka/exercises/:id",
      component: _076c203a,
      name: "chandraloka-exercises-id"
    }, {
      path: "/chandraloka/lessons/:id",
      component: _0c764643,
      name: "chandraloka-lessons-id"
    }, {
      path: "/samasachakra/exercises/:id",
      component: _6db47513,
      name: "samasachakra-exercises-id"
    }, {
      path: "/samasachakra/lessons/:id",
      component: _7fbf511a,
      name: "samasachakra-lessons-id"
    }, {
      path: "/samasashikhamani/exercises/:id",
      component: _283d1594,
      name: "samasashikhamani-exercises-id"
    }, {
      path: "/samasashikhamani/lessons/:id",
      component: _8cadb798,
      name: "samasashikhamani-lessons-id"
    }, {
      path: "/srutabodha/exercises/:id",
      component: _283fef12,
      name: "srutabodha-exercises-id"
    }, {
      path: "/srutabodha/lessons/:id",
      component: _221f759c,
      name: "srutabodha-lessons-id"
    }, {
      path: "/vrittaratnakara/exercises/:id",
      component: _572b9e52,
      name: "vrittaratnakara-exercises-id"
    }, {
      path: "/vrittaratnakara/lessons/:id",
      component: _077ec472,
      name: "vrittaratnakara-lessons-id"
    }, {
      path: "/",
      component: _8323dbc8,
      name: "index"
    }],

    fallback: false
  })
}
