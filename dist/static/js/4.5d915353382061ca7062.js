webpackJsonp([4],{"4b61":function(e,t){},i8qX:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("//Fk"),i=s.n(a),n=s("woOf"),o=s.n(n),r=s("mtWM"),l=s.n(r);function c(){var e=parseInt((new Date).getTime()/1e3),t=o()({},{tag:"video",ac:"wap",count:8,format:"json_raw",as:"A17538D54D106FF",cp:"585DF0A65F0F1E1",min_behot_time:e,i:e});return l.a.get("/api/list/",{params:t}).then(function(e){return i.a.resolve(e.data)})}var v=s("qwAB"),d=s("y/jF"),u=s("nniE"),p={data:function(){return{videos:[],pullup:!0}},created:function(){this._getVideos()},methods:{searchMore:function(){var e=this;c().then(function(t){e.videos=e.videos.concat(t.data)}),this.$refs.tip.show()},_getVideos:function(){var e=this;c().then(function(t){e.videos=t.data})}},components:{Scroll:v.a,Loading:d.a,Tip:u.a}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"videos"},[s("scroll",{directives:[{name:"show",rawName:"v-show",value:e.videos.length,expression:"videos.length"}],staticClass:"videos-content",attrs:{data:e.videos,pullup:e.pullup},on:{scrollToEnd:e.searchMore}},[s("div",[e._l(e.videos,function(t){return s("div",{staticClass:"videos-item"},[s("div",{staticClass:"title"},[s("a",{attrs:{href:t.url}},[e._v(e._s(t.title))])]),e._v(" "),s("span",{staticClass:"icon"}),e._v(" "),s("div",{staticClass:"image-wrapper"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.large_image_url,expression:"item.large_image_url"}],attrs:{alt:""}})]),e._v(" "),s("div",{staticClass:"desc"},[s("span",{staticClass:"source"},[e._v(e._s(t.source))]),e._v(" "),s("span",{staticClass:"comment"},[e._v("评论 "+e._s(t.comment_count))])])])}),e._v(" "),s("loading",{attrs:{title:""}})],2)]),e._v(" "),s("tip",{ref:"tip"},[s("p",[e._v("已为您加载新鲜视频")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.videos.length,expression:"!videos.length"}],staticClass:"loading-container"},[s("loading")],1)],1)},staticRenderFns:[]};var m=s("VU/8")(p,_,!1,function(e){s("4b61")},null,null);t.default=m.exports}});
//# sourceMappingURL=4.5d915353382061ca7062.js.map