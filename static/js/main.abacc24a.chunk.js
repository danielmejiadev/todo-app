(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{100:function(e,a,t){e.exports=t(133)},108:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),s=(t(105),t(108),t(181)),i=t(182),l=t(46),u=t(25),d=t(54),m=t(81),f=t.n(m),p=t(62),v=t(63),b=t(33),h=t(45),g=function(){function e(a){var t=this;Object(u.a)(this,e),this.axiosInstance=void 0,this.resourceUrl=void 0,this.list=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultParams,a=e.url,n=void 0===a?t.resourceUrl:a,r=e.params,c=Object(h.a)(e,["url","params"]);return t.axiosInstance.get(n,Object(b.a)({params:r},c))},this.retrieve=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.defaultParams,n=a.url,r=void 0===n?t.resourceUrl:n,c=Object(h.a)(a,["url"]),o="".concat(r,"/").concat(e);return t.axiosInstance.get(o,Object(b.a)({},c))},this.create=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.defaultParams,n=a.url,r=void 0===n?t.resourceUrl:n,c=Object(h.a)(a,["url"]);return t.axiosInstance.post(r,e,Object(b.a)({},c))},this.update=function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.defaultParams,r=n.url,c=void 0===r?t.resourceUrl:r,o=n.method,s=void 0===o?"patch":o,i=Object(h.a)(n,["url","method"]),l="".concat(c,"/").concat(e);return t.axiosInstance.request(Object(b.a)({url:l,data:a,method:s},i))},this.delete=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.defaultParams,n=a.url,r=void 0===n?t.resourceUrl:n,c=Object(h.a)(a,["url"]),o="".concat(r,"/").concat(e);return t.axiosInstance.delete(o,Object(b.a)({},c))},this.axiosInstance=a}return Object(d.a)(e,[{key:"defaultParams",get:function(){return{url:this.resourceUrl}}}]),e}(),E=function(e){Object(v.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).resourceUrl="users",e}return t}(g),k=function(e){Object(v.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).resourceUrl="users_tasks",e}return t}(g),O=new(function(){function e(){Object(u.a)(this,e),this.axiosInstance=void 0,this.users=void 0,this.tasks=void 0,this.basicResponse=function(e){return e.data}}return Object(d.a)(e,[{key:"initialize",value:function(e){return this.axiosInstance=f.a.create({baseURL:e}),this.addResponseInterceptor(this.basicResponse),this.users=new E(this.axiosInstance),this.tasks=new k(this.axiosInstance),this}},{key:"addResponseInterceptor",value:function(e){return this.axiosInstance.interceptors.response.use(e),this}}]),e}()),j={BASE_API:"http://todo-app-backend-api.herokuapp.com/"},x=t(15),C=t.n(x),U=t(8);function w(e,a){var t=C.a.mark(r),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};function r(){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.loading=!0,t.next=4,e;case 4:return r=t.sent,t.abrupt("return",n(r));case 6:return t.prev=6,a.loading=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[0,,6,9]])}return Object(U.c)(r)()}var y=function(e,a){return I.async(e,a,(function(e){return Object(U.a)(a,e),a}))},I={async:w,asyncAssign:y,asyncAssignPath:function(e,a,t){return I.async(e,a,(function(e){return a[t]=e,a[t]}))}},N={TODO:"todo",DONE:"done"},D=U.e.model("Task",{id:U.e.identifierNumber,description:U.e.string,state:U.e.enumeration(Object.values(N)),userId:U.e.number}).views((function(e){return{get isDone(){return e.state===N.DONE}}})).actions((function(e){return{update:function(a){return Object.assign(e,a),y(O.tasks.update(e.id,a),e)},toggle:function(){var a={state:e.isDone?N.TODO:N.DONE};return Object.assign(e,a),y(O.tasks.update(e.id,a),e)},remove:function(){var a=Object(U.d)(e,2).remove;a(e)}}})),P=U.e.model("TasksStore",{data:U.e.array(D),loading:!1}).actions((function(e){return{list:function(a){return y(O.tasks.list({params:{userId:a}}),e)},add:Object(U.c)(C.a.mark((function a(t,n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,O.tasks.create(Object(b.a)({},n,{state:N.TODO,userId:t}));case 3:return r=a.sent,e.data.push(r),e.loading=!1,a.abrupt("return",e.data);case 7:case"end":return a.stop()}}),a)}))),remove:Object(U.c)(C.a.mark((function a(t){return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,O.tasks.delete(t.id);case 3:return Object(U.b)(t),e.loading=!1,a.abrupt("return",e.data);case 6:case"end":return a.stop()}}),a)})))}})),T=U.e.model("User",{id:U.e.identifierNumber,name:U.e.string,tasks:U.e.optional(P,{})}).actions((function(e){return{update:function(a){return Object.assign(e,a),w(O.users.update(e.id,a),e)},remove:function(){(0,Object(U.d)(e,2).removeUser)(e)},select:function(){(0,Object(U.d)(e,2).selectUser)(e)}}})),S=U.e.model("Users",{data:U.e.array(T),selectedUser:U.e.maybe(U.e.safeReference(T)),loading:!1}).actions((function(e){return{selectUser:function(a){e.selectedUser=a},listUsers:function(){return y(O.users.list(),e)},addUser:Object(U.c)(C.a.mark((function a(t){var n;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,O.users.create(t);case 3:return n=a.sent,e.data.push(n),e.loading=!1,a.abrupt("return",e.data);case 7:case"end":return a.stop()}}),a)}))),removeUser:Object(U.c)(C.a.mark((function a(t){return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,O.users.delete(t.id);case 3:return Object(U.b)(t),e.loading=!1,a.abrupt("return",e.data);case 6:case"end":return a.stop()}}),a)})))}})),A=r.a.createContext(null),B=S.create();var F=function(e){var a=e.children;return r.a.createElement(A.Provider,{value:B},a)},R=t(40),W=t(180),_=t(173),z=t(92),J=t.n(z),L=t(31),q=t(172),$=t(174),G=t(175),H=t(176),K=t(177),M=t(178),Q=t(89),V=t.n(Q),X=t(88),Y=t.n(X),Z=t(86),ee=t.n(Z),ae=t(87),te=t.n(ae),ne=t(183);function re(){var e=function(){var e=r.a.useContext(A);if(e)return e;throw new Error("useStore must be used within a StoreProvider.")}(),a=e.listUsers,t=e.selectedUser;return r.a.useEffect((function(){a()}),[a]),r.a.useEffect((function(){null===t||void 0===t||t.tasks.list(t.id)}),[t]),e}function ce(e){var a=r.a.useState(!!e),t=Object(L.a)(a,2),n=t[0],c=t[1];return[n,r.a.useCallback((function(){return c(!0)}),[]),r.a.useCallback((function(){c(!1)}),[])]}var oe=t(186),se=t(167),ie=t(168),le=t(169),ue=t(170),de=t(171);var me=r.a.memo((function(e){var a=e.open,t=e.onClose,n=e.onConfirm;return r.a.createElement(oe.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(se.a,{id:"alert-dialog-title"},"Warning"),r.a.createElement(ie.a,null,r.a.createElement(le.a,{id:"alert-dialog-description"},"Are you sure you want to delete?")),r.a.createElement(ue.a,null,r.a.createElement(de.a,{onClick:t,color:"secondary"},"Cancel"),r.a.createElement(de.a,{onClick:n,color:"primary",autoFocus:!0},"Confirm")))}));function fe(e){var a=e.text,t=e.onClick,n=e.onUpdate,c=e.onDelete,o=e.isSelected,s=e.options,i=e.icon,l=ce(),u=Object(L.a)(l,3),d=u[0],m=u[1],f=u[2],p=ce(),v=Object(L.a)(p,3),b=v[0],h=v[1],g=v[2],E=r.a.useState(a),k=Object(L.a)(E,2),O=k[0],j=k[1],x=r.a.useCallback((function(e){var a=e.target;j(a.value)}),[]),C=r.a.useCallback((function(){f(),c()}),[c,f]),U=r.a.useCallback((function(){n(O),g()}),[n,O,g]);return r.a.createElement(r.a.Fragment,null,b?r.a.createElement(q.a,{selected:o},r.a.createElement(ne.a,{autoFocus:!0,margin:"dense",label:"New value",fullWidth:!0,value:O,onChange:x}),r.a.createElement($.a,null,r.a.createElement(G.a,{"aria-label":"save",onClick:U},r.a.createElement(ee.a,null)),r.a.createElement(G.a,{"aria-label":"read",onClick:g},r.a.createElement(te.a,null)))):r.a.createElement(q.a,{button:!0,onClick:t,selected:o},r.a.createElement(H.a,null,i),r.a.createElement(K.a,{primary:a}),r.a.createElement($.a,null,s,r.a.createElement(G.a,{"aria-label":"edit",onClick:h},r.a.createElement(Y.a,null)),r.a.createElement(G.a,{"aria-label":"delete",onClick:m},r.a.createElement(V.a,null)))),r.a.createElement(M.a,null),r.a.createElement(me,{open:d,onClose:f,onConfirm:C}))}fe.defaultProps={isSelected:!1};var pe=r.a.memo(fe),ve=t(90),be=t(91),he=t.n(be),ge=t(134),Ee=t(187),ke=t(179),Oe=Object(ke.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginTop:10,marginBottom:10},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));var je=r.a.memo((function(e){var a=e.onClick,t=e.placeholder;console.log(Oe);var n=Oe();console.log(n);var c=r.a.useState(""),o=Object(L.a)(c,2),s=o[0],i=o[1],l=r.a.useCallback((function(e){var a=e.target;i(a.value)}),[]),u=r.a.useCallback(Object(ve.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(s);case 2:i("");case 3:case"end":return e.stop()}}),e)}))),[a,s]);return r.a.createElement(ge.a,{component:"form",className:n.root,elevation:3},r.a.createElement(Ee.a,{className:n.input,placeholder:t,onChange:l,value:s}),r.a.createElement(M.a,{className:n.divider,orientation:"vertical"}),r.a.createElement(G.a,{color:"primary",className:n.iconButton,onClick:u,disabled:!s},r.a.createElement(he.a,null)))}));var xe=Object(R.a)((function(e){var a=e.addUser,t=e.loading,n=e.selectedUser,c=e.data,o=r.a.useCallback((function(e){return a({name:e})}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"h4"},"Users"),r.a.createElement(je,{onClick:o,placeholder:"Type user name"}),t&&r.a.createElement(W.a,null),r.a.createElement(_.a,null,c.map((function(e){return r.a.createElement(pe,{key:e.id,icon:r.a.createElement(J.a,null),text:e.name,onClick:e.select,isSelected:(null===n||void 0===n?void 0:n.id)===e.id,onUpdate:function(a){return e.update({name:a})},onDelete:e.remove})}))))})),Ce=t(93),Ue=t.n(Ce),we=t(185);var ye=Object(R.a)((function(e){var a=e.addTask,t=e.loading,n=e.data,c=e.taskOwner,o=r.a.useCallback((function(e){return a(c.id,{description:e})}),[a,c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"h4"},"Tasks"),r.a.createElement(je,{onClick:o,placeholder:"Type task description"}),t&&r.a.createElement(W.a,null),r.a.createElement(_.a,null,n.map((function(e){return r.a.createElement(pe,{text:e.description,onUpdate:function(a){return e.update({description:a})},onDelete:e.remove,icon:r.a.createElement(Ue.a,null),options:[r.a.createElement(we.a,{key:"toggle",checked:e.isDone,onChange:e.toggle,inputProps:{"aria-label":"primary checkbox"}})]})}))))})),Ie=Object(ke.a)((function(e){return{content:{display:"flex",flex:1,flexDirection:"row"},users:{flex:1,padding:20,borderWidth:2,borderColor:"gray"},tasks:{flex:3,padding:20}}}));var Ne=Object(R.a)((function(){var e=re(),a=Ie();return r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.users},r.a.createElement(xe,{loading:e.loading,data:e.data,addUser:e.addUser,selectedUser:e.selectedUser})),r.a.createElement("div",{className:a.tasks},e.selectedUser&&r.a.createElement(ye,{taskOwner:e.selectedUser,data:e.selectedUser.tasks.data,loading:e.selectedUser.tasks.loading,addTask:e.selectedUser.tasks.add})))})),De=Object(ke.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,mainContainer:{flex:1}}}));O.initialize(j.BASE_API);var Pe=function(){var e=De();return r.a.createElement(F,null,r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(l.a,{variant:"h6"},"Todo App"))),r.a.createElement("main",{className:e.mainContainer},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(Ne,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(132);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.abacc24a.chunk.js.map