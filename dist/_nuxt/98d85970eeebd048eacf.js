(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(t,s,e){"use strict";var n=e(5),a=e(104)(6),o="findIndex",i=!0;o in[]&&Array(1)[o](function(){i=!1}),n(n.P+n.F*i,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),e(50)(o)},242:function(t,s,e){},295:function(t,s,e){"use strict";var n=e(242);e.n(n).a},321:function(t,s,e){"use strict";e.r(s);e(184);var n={data:function(){return{active:null,open:["public"],id:String(this.$route.params.id),lesson:"",index:"",prev_lesson:"",next_lesson:"",length:"",previous:"/",next:"/",currentNode:null}},layout:"lessons",created:function(){var t=this;this.index=this.$store.state.upayukta_lessons.findIndex(function(s){return String(s.id)===t.id}),this.lesson=this.$store.state.upayukta_lessons[this.index],this.prev_lesson=this.$store.state.upayukta_lessons[this.index-1],this.next_lesson=this.$store.state.upayukta_lessons[this.index+1],this.length=this.$store.state.upayukta_lessons.length,this.previous=this.index>1?"/upayukta/lessons/"+this.prev_lesson.id:"/upayukta/lessons/1",this.next=this.index<this.length-1?"/upayukta/lessons/"+this.next_lesson.id:"/upayukta/lessons/",console.log(this.lesson)},methods:{nexttab:function(){var t=parseInt(this.active);this.active=t<this.lesson.types-1?t+1:0}}},a=(e(295),e(4)),o=Object(a.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"mt-0 pt-0",attrs:{xs12:""}},[e("v-layout",{staticClass:"neg_margin",attrs:{row:""}},[e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.previous,color:"accent darken-2"}},[e("b",[t._v("Previous")])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.next,color:"accent darken-2"}},[e("b",[t._v("Next")])])],1),t._v(" "),e("v-card",{staticClass:"mt-0 pt-0",attrs:{color:"accent lighten-4"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("h3",{staticClass:"display-1"},[t._v(t._s(t.lesson.id)+". "),t.lesson.title_sans?e("span",[t._v(t._s(t.lesson.title_sans)+" "),e("br")]):t._e(),t._v(t._s(t.lesson.title_eng))])]),t._v(" "),t._l(t.lesson.slokas,function(s,n){return e("v-layout",{key:n,attrs:{row:""}},[e("v-flex",{attrs:{xs12:"","mb-3":""}},[e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",{attrs:{ripple:""}},[s?e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Sloka "+t._s(n+1))]):t._e(),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{staticClass:"title text-xs-center",attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.sloka)}})],1)],1)],1)],1)],1),t._v(" "),e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",[e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Explanation of Sloka")]),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.eng)}})],1)],1)],1)],1)],1)],1)],1)})],2)],1)},[],!1,null,"18c4b4ad",null);o.options.__file="_id.vue";s.default=o.exports}}]);