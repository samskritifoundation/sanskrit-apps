(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{184:function(t,s,e){"use strict";var n=e(5),i=e(104)(6),a="findIndex",o=!0;a in[]&&Array(1)[a](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(50)(a)},230:function(t,s,e){},283:function(t,s,e){"use strict";var n=e(230);e.n(n).a},353:function(t,s,e){"use strict";e.r(s);e(184);var n={data:function(){return{active:null,open:["public"],id:String(this.$route.params.id),lesson:"",index:"",prev_lesson:"",next_lesson:"",length:"",previous:"/",next:"/",currentNode:null}},layout:"lessons",created:function(){var t=this;this.index=this.$store.state.dvirupa_lessons.findIndex(function(s){return String(s.id)===t.id}),this.lesson=this.$store.state.dvirupa_lessons[this.index],this.prev_lesson=this.$store.state.dvirupa_lessons[this.index-1],this.next_lesson=this.$store.state.dvirupa_lessons[this.index+1],this.length=this.$store.state.dvirupa_lessons.length,this.previous=this.index>1?"/dvirupa/lessons/"+this.prev_lesson.id:"/dvirupa/lessons/1",this.next=this.index<this.length-1?"/dvirupa/lessons/"+this.next_lesson.id:"/dvirupa/lessons/",console.log(this.lesson)},methods:{nexttab:function(){var t=parseInt(this.active);this.active=t<this.lesson.types-1?t+1:0}}},i=(e(283),e(4)),a=Object(i.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"mt-0 pt-0",attrs:{xs12:""}},[e("v-layout",{staticClass:"neg_margin",attrs:{row:""}},[e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.previous,color:"accent darken-2"}},[e("b",[t._v("Previous")])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.next,color:"accent darken-2"}},[e("b",[t._v("Next")])])],1),t._v(" "),e("v-card",{staticClass:"mt-0 pt-0",attrs:{color:"accent lighten-4"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("h3",{staticClass:"display-1"},[t._v(t._s(t.lesson.id)+". "),t.lesson.title_sans?e("span",[t._v(t._s(t.lesson.title_sans)+" "),e("br")]):t._e(),t._v(t._s(t.lesson.title_eng))])]),t._v(" "),t._l(t.lesson.slokas,function(s,n){return e("v-layout",{key:n,attrs:{row:""}},[e("v-flex",{attrs:{xs12:"","mb-3":""}},[e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",{attrs:{ripple:""}},[s?e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Sloka "+t._s(n+1))]):t._e(),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{staticClass:"title text-xs-center",attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.sloka)}})],1)],1)],1)],1)],1),t._v(" "),e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",[e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Explanation of Sloka")]),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.eng)}})],1)],1)],1)],1)],1)],1)],1)})],2)],1)},[],!1,null,"0edfc1b4",null);a.options.__file="_id.vue";s.default=a.exports}}]);