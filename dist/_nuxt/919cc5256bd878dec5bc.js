(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{184:function(t,e,s){"use strict";var r=s(5),i=s(104)(6),a="findIndex",n=!0;a in[]&&Array(1)[a](function(){n=!1}),r(r.P+r.F*n,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(50)(a)},239:function(t,e,s){},292:function(t,e,s){"use strict";var r=s(239);s.n(r).a},330:function(t,e,s){"use strict";s.r(e);s(184),s(72);var r={data:function(){return{active:null,id:String(this.$route.params.id),exercise:"",index:"",prev_ex:"",next_ex:"",length:"",previous:"/",next:"/",chosen:null,success_alert:!1,fail_alert:!1,score:0,color:"red"}},layout:"lessons",mounted:function(){var t=this;this.exercise=this.$store.state.srutabodha_exercises.find(function(e){return String(e.id)===t.id})},created:function(){var t=this;this.index=this.$store.state.srutabodha_exercises.findIndex(function(e){return String(e.id)===t.id}),this.prev_ex=this.$store.state.srutabodha_exercises[this.index-1],this.next_ex=this.$store.state.srutabodha_exercises[this.index+1],this.length=this.$store.state.srutabodha_exercises.length,this.previous=this.index>1?"/srutabodha/exercises/"+this.prev_ex.id:"/srutabodha/exercises/1",this.next=this.index<this.length-1?"/srutabodha/exercises/"+this.next_ex.id:"/srutabodha/exercises/10"},methods:{nexttab:function(){var t=parseInt(this.active);this.active=t<this.exercise.types-1?t+1:0},check:function(t){var e=this.exercise.ans;(console.log(e+","+this.chosen),this.chosen===e)?(new Audio("https://s3.ap-south-1.amazonaws.com/quiz-sounds/correct.wav").play(),this.success_alert=!0,this.fail_alert=!1,this.score=1,this.color="green"):(new Audio("https://s3.ap-south-1.amazonaws.com/quiz-sounds/wrong.wav").play(),this.success_alert=!1,this.fail_alert=!0,this.score=0,this.color="red")}}},i=(s(292),s(4)),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"mt-0 pt-0"},[s("v-layout",{staticClass:"neg_margin",attrs:{row:""}},[s("v-btn",{attrs:{ripple:{class:"error--text"},to:t.previous,color:"accent darken-2"}},[s("b",[t._v("Previous")])]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{ripple:{class:"error--text"},to:t.next,color:"accent darken-2"}},[s("b",[t._v("Next")])])],1),t._v(" "),s("v-card",{staticClass:"mt-0 pt-0 bordered",attrs:{color:"teal lighten-4"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("h1",[t._v(t._s(t.exercise.id)+". "),s("span",{staticClass:"devanagari"},[t._v(t._s(t.exercise.title))]),t._v(" "),s("br"),t._v(t._s(t.exercise.title_eng))]),t._v(" "),s("v-chip",{staticClass:"title devanagari",attrs:{color:t.color,"text-color":"white"}},[s("v-avatar",{staticClass:"green darken-4"},[t._v(t._s(t.score))]),t._v("\n        Score\n      ")],1)],1),t._v(" "),s("v-layout",{staticClass:"myheader3",attrs:{row:""}},[s("v-flex",[s("div",{staticClass:"devanagari px-1",domProps:{innerHTML:t._s(t.exercise.question)}})])],1),t._v(" "),s("v-layout",{staticClass:"myheader3",attrs:{row:""}},[s("v-flex",[s("v-radio-group",{staticClass:"font-weight-bold",attrs:{column:""},model:{value:t.chosen,callback:function(e){t.chosen=e},expression:"chosen"}},t._l(t.exercise.options,function(t,e){return s("v-radio",{key:e,attrs:{label:t,value:t,success:"true"}})}),1),t._v(" "),s("v-btn",{attrs:{ripple:{class:"error--text"},round:"",color:"error darken-2"},on:{click:function(e){t.check()}}},[s("b",[t._v("Submit")])]),t._v(" "),s("v-alert",{attrs:{dismissible:"",type:"success",transition:"scale-transition"},model:{value:t.success_alert,callback:function(e){t.success_alert=e},expression:"success_alert"}},[t._v("\n          Correct Answer!\n        ")]),t._v(" "),s("v-alert",{attrs:{dismissible:"",type:"error",transition:"scale-transition"},model:{value:t.fail_alert,callback:function(e){t.fail_alert=e},expression:"fail_alert"}},[t._v("\n          Wrong Answer. Please try again or go through the relevant chapters.\n        ")])],1)],1)],1)],1)},[],!1,null,"58bd13f8",null);a.options.__file="_id.vue";e.default=a.exports}}]);