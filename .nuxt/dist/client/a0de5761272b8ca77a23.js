(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{184:function(t,s,e){"use strict";var a=e(5),n=e(104)(6),r="findIndex",o=!0;r in[]&&Array(1)[r](function(){o=!1}),a(a.P+a.F*o,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),e(50)(r)},240:function(t,s,e){},291:function(t,s,e){"use strict";var a=e(240);e.n(a).a},333:function(t,s,e){"use strict";e.r(s);e(184);var a={data:function(){return{active:null,open:["public"],id:String(this.$route.params.id),lesson:"",index:"",prev_lesson:"",next_lesson:"",length:"",previous:"/",next:"/",currentNode:null}},layout:"lessons",created:function(){var t=this;this.index=this.$store.state.sastrapramana_lessons.findIndex(function(s){return String(s.id)===t.id}),this.lesson=this.$store.state.sastrapramana_lessons[this.index],this.prev_lesson=this.$store.state.sastrapramana_lessons[this.index-1],this.next_lesson=this.$store.state.sastrapramana_lessons[this.index+1],this.length=this.$store.state.sastrapramana_lessons.length,this.previous=this.index>1?"/sastrapramana/lessons/"+this.prev_lesson.id:"/sastrapramana/lessons/1",this.next=this.index<this.length-1?"/sastrapramana/lessons/"+this.next_lesson.id:"/sastrapramana/lessons/",console.log(this.lesson)},methods:{nexttab:function(){var t=parseInt(this.active);this.active=t<this.lesson.types-1?t+1:0}}},n=(e(291),e(4)),r=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"mt-0 pt-0",attrs:{xs12:""}},[e("v-layout",{staticClass:"neg_margin",attrs:{row:""}},[e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.previous,color:"accent darken-2"}},[e("b",[t._v("Previous")])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{ripple:{class:"error--text"},to:t.next,color:"accent darken-2"}},[e("b",[t._v("Next")])])],1),t._v(" "),e("v-card",{staticClass:"mt-0 pt-0",attrs:{color:"accent lighten-4"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("h3",{staticClass:"display-1"},[t._v(t._s(t.lesson.id)+". "),t.lesson.title_sans?e("span",[t._v(t._s(t.lesson.title_sans)+" "),e("br")]):t._e(),t._v(t._s(t.lesson.title_eng))])]),t._v(" "),t._l(t.lesson.slokas,function(s,a){return e("v-layout",{key:a,attrs:{row:""}},[e("v-flex",{attrs:{xs12:"","mb-3":""}},[e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",{attrs:{ripple:""}},[s?e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Sloka "+t._s(a+1))]):t._e(),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{staticClass:"title text-xs-center",attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.sloka)}})],1)],1)],1)],1)],1),t._v(" "),e("v-expansion-panel",{attrs:{popout:"",focusable:""}},[e("v-expansion-panel-content",[e("div",{staticClass:"secondary--text subheading font-weight-bold",attrs:{slot:"header"},slot:"header"},[t._v("Explanation of Sloka")]),t._v(" "),e("v-layout",{attrs:{xs12:"",row:""}},[e("v-flex",[e("v-card",{attrs:{color:"accent lighten-1"}},[e("v-card-text",{domProps:{innerHTML:t._s(s.eng)}})],1)],1)],1)],1)],1)],1)],1)})],2)],1)},[],!1,null,"331e43ab",null);r.options.__file="_id.vue";s.default=r.exports}}]);