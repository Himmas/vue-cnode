webpackJsonp([1,6],{103:function(e,t,s){var a=s(94);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(77)("1a5ce6b4",a,!0)},107:function(e,t,s){var a=s(98);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(77)("86c306b2",a,!0)},113:function(e,t,s){s(103);var a=s(1)(s(90),s(117),null,null);e.exports=a.exports},117:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-message"},[s("div",{staticClass:"message-panl iconfont",style:{transition:e.speed},attrs:{"data-name":e.routename},on:{touchstart:e.tstart,touchmove:e.tmove,touchend:e.tend}},[e._v("\n        "+e._s(e.readmsg)+"\n        "),0!=e.count?e._t("label"):e._e()],2),e._v(" "),"unreadmessage"==e.routename?e._t("mark"):e._e()],2)},staticRenderFns:[]}},121:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("my-message",{attrs:{routename:"readmessage",readmsg:"历史消息"},on:{tstart:e.touchStart,tmove:e.touchMove,tend:e.touchEnd}}),e._v(" "),s("my-message",{attrs:{routename:"unreadmessage",readmsg:"未读消息",deltaN:e.fdeltaN,speed:e.fspeed},on:{tstart:e.touchStart,tmove:e.touchMove,tend:e.touchEnd}},[s("span",{staticClass:"label",slot:"label"}),e._v(" "),s("div",{staticClass:"mark-message",style:{width:-e.fdeltaN+"px",transition:e.fspeed},on:{click:e.markAllMessage},slot:"mark"},[e._v("\n            "+e._s(e.markmsg)+"\n        ")])]),e._v(" "),s("transition",{attrs:{name:"slide-left"}},[s("router-view",{key:e.$route.params.id})],1)],1)},staticRenderFns:[]}},81:function(e,t,s){s(107);var a=s(1)(s(89),s(121),null,null);e.exports=a.exports},89:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(113),n=s.n(a),i=s(14);t.default={data:function(){return{markmsg:"标记已读",start:{x:0,y:0},delta:{x:0,y:0},maxDelta:100,minDelta:10,fdeltaN:0,fspeed:"all 0s"}},methods:{touchStart:function(){var e=event||window.event;this.start.x=e.touches[0].pageX},touchMove:function(){var e=event||window.event;switch(this.delta.x=e.touches[0].pageX-this.start.x,event.target.getAttribute("data-name")){case"readmessage":0!=this.delta.x&&(this.delta.x=0);break;case"unreadmessage":if(!(this.delta.x<0))return;this.fspeed="all 0s",this.fdeltaN=-this.delta.x,-this.delta.x>=this.maxDelta&&(this.fspeed="all .2s ease-in-out",this.fdeltaN=-this.maxDelta-10)}},touchEnd:function(){var e=event||window.event,t=e.changedTouches[0].pageX;switch(event.target.getAttribute("data-name")){case"readmessage":t==this.start.x&&0==this.delta.x&&this.$router.push({name:"readmessage"});break;case"unreadmessage":t===this.start.x&&0===this.fdeltaN?this.$router.push({name:"unreadmessage"}):t===this.start.x&&this.fdeltaN==-100&&(this.fdeltaN=0),-this.delta.x>=this.maxDelta?(this.fdeltaN=-this.maxDelta,this.delta.x=0):-this.delta.x<this.minDelta&&(this.fdeltaN=0)}e.preventDefault()},markAllMessage:function(){var e=this;this.$http.post("/message/mark_all",{accesstoken:i.a}).then(function(t){e.fdeltaN=0,console.log(t.data)}).catch(function(e){console.log(e)})}},components:{myMessage:n.a}}},90:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(14);t.default={data:function(){return{count:0}},props:{routename:{type:String,default:""},readmsg:{type:String,default:""},speed:{type:String,default:""}},created:function(){this.getMessageCount()},methods:{getMessageCount:function(){var e=this;this.$http.get("/message/count?accesstoken="+a.a).then(function(t){e.count=t.data.data}).catch(function(e){console.log(e)})},tstart:function(){this.$emit("tstart")},tmove:function(){this.$emit("tmove")},tend:function(){this.$emit("tend")}}}},94:function(e,t,s){t=e.exports=s(76)(),t.push([e.i,'.my-message{width:100%;height:32px;line-height:32px;text-align:left;padding-left:10px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dcdcdc}.my-message .message-panl{-ms-flex-preferred-size:100%;flex-basis:100%;font-size:12px;color:#666;position:relative;transform:translateX(0)}.my-message .message-panl:after{float:right;padding-right:10px;content:"\\E603"}.my-message .message-panl .label{position:absolute;top:6px;left:48px;display:block;width:5px;height:5px;border-radius:50%;background:red}.my-message .mark-message{height:inherit;background:#daa520;color:#fff;line-height:32px;text-align:center}',"",{version:3,sources:["/home/travis/build/Himmas/vue-cnode/src/components/messagepage/myMessage.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,sBAAuB,AACvB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,qBAAsB,AAC1B,yBAA0B,AACtB,6BAA8B,AAClC,sBAAuB,AACnB,mBAAoB,AACxB,+BAAmC,CACpC,AACD,0BACE,6BAA8B,AAC1B,gBAAiB,AACrB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,uBAAyB,CAC1B,AACD,gCACE,YAAa,AACb,mBAAoB,AACpB,eAAiB,CAClB,AACD,iCACE,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,cAAe,AACf,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,0BACE,eAAgB,AAChB,mBAAsB,AACtB,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB",file:"myMessage.vue",sourcesContent:['\n.my-message {\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  text-align: left;\n  padding-left: 10px;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid gainsboro;\n}\n.my-message .message-panl {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  font-size: 12px;\n  color: #666;\n  position: relative;\n  transform: translateX(0);\n}\n.my-message .message-panl:after {\n  float: right;\n  padding-right: 10px;\n  content: "\\e603";\n}\n.my-message .message-panl .label {\n  position: absolute;\n  top: 6px;\n  left: 48px;\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: red;\n}\n.my-message .mark-message {\n  height: inherit;\n  background: goldenrod;\n  color: #fff;\n  line-height: 32px;\n  text-align: center;\n}\n'],sourceRoot:""}])},98:function(e,t,s){t=e.exports=s(76)(),t.push([e.i,".slide-left-enter-active,.slide-left-leave-active{transition:all .3s ease-in-out}.slide-left-enter,.slide-left-leave-active{transform:translate(100%)}","",{version:3,sources:["/home/travis/build/Himmas/vue-cnode/src/components/messagepage/message.vue"],names:[],mappings:"AACA,kDAEE,8BAAiC,CAClC,AAID,2CACE,yBAA2B,CAC5B",file:"message.vue",sourcesContent:["\n.slide-left-enter-active,\n.slide-left-leave-active {\n  transition: all 0.3s ease-in-out;\n}\n.slide-left-enter {\n  transform: translate(100%);\n}\n.slide-left-leave-active {\n  transform: translate(100%);\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.9c888a3625963df7f7d1.js.map