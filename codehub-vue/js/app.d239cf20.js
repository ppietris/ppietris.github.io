(function(t){function e(e){for(var n,r,i=e[0],l=e[1],u=e[2],d=0,p=[];d<i.length;d++)r=i[d],s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/codehub-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("my-header"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light bg-white border-bottom shadow-sm"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"TodoList"}}},[n("img",{staticStyle:{height:"35px"},attrs:{src:a("c6eb"),alt:"Codehub"}}),t._v(" Code.Learn Vue.js\n    ")]),t.initials?n("div",{staticClass:"dropdown",class:{show:t.show_menu}},[t.initials?n("a",{attrs:{href:"#","data-letters":t.initials},on:{click:function(e){e.preventDefault(),t.show_menu=!t.show_menu}}}):t._e(),n("div",{staticClass:"dropdown-menu dropdown-menu-right",class:{show:t.show_menu},attrs:{"aria-labelledby":"dropdownMenuLink"}},[t.token?n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]):t._e()])]):t._e()],1)},i=[],l=a("cebc"),u=a("2f62"),c={name:"MyHeader",data:function(){return{show_menu:!1}},computed:Object(l["a"])({},Object(u["b"])({token:function(t){return t.token},user_details:function(t){return t.user_details},initials:function(){var t=this.user_details,e=t.firstname,a=t.lastname;return!(!e&&!a)&&e.charAt(0).toUpperCase()+a.charAt(0).toUpperCase()}})),methods:{logout:function(){this.show_menu=!1,this.$store.dispatch("updateToken",""),this.$store.dispatch("updateUserDetails",""),this.$router.push({name:"Login"})}}},d=c,p=(a("9fe2"),a("2877")),f=Object(p["a"])(d,r,i,!1,null,null,null),m=f.exports,h={name:"App",components:{MyHeader:m}},v=h,g=(a("034f"),Object(p["a"])(v,s,o,!1,null,null,null)),b=g.exports,_=a("bc3a"),k=a.n(_),w=a("f499"),y=a.n(w);n["a"].use(u["a"]);var C=new u["a"].Store({state:{token:null===localStorage.getItem("token")?"":localStorage.token,user_details:null===localStorage.getItem("user_details")?{}:JSON.parse(localStorage.user_details)},actions:{updateToken:function(t,e){var a=t.commit;a("setToken",e)},updateUserDetails:function(t,e){var a=t.commit;a("setUserDetails",e)}},mutations:{setToken:function(t,e){t.token=e,e&&""!=e?localStorage.setItem("token",e):localStorage.removeItem("token")},setUserDetails:function(t,e){t.user_details=e,e&&""!=e?localStorage.setItem("user_details",y()(e)):localStorage.removeItem("user_details")}}}),x=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},[t._m(0),a("div",{staticClass:"card mt-4"},[a("article",{staticClass:"card-body"},[a("h4",{staticClass:"card-title mb-4 mt-1"},[t._v("Sign in")]),a("form",{on:{sumbit:function(t){t.preventDefault()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",placeholder:"Enter your email",type:"email",disabled:t.loading},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",placeholder:"Enter your password",type:"password",disabled:t.loading},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.email||!t.password},on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v("\n                                Login\n                                "),t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e()])])])])]),t.alert?a("div",{staticClass:"alert alert-danger alert-dismissible fade show mb-0",attrs:{role:"alert"}},[t._v("\n                "+t._s(t.alertMsg)+"\n                "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.resetAlert}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e()])])])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"//www.codehub.gr"}},[n("img",{staticClass:"mx-auto d-block mt-5",attrs:{src:a("e9be"),alt:"CodeHub"}})])}],O={name:"PageLogin",data:function(){return{email:"",password:"",loading:!1,alert:!1,alertMsg:""}},methods:{resetData:function(){this.email="",this.password="",this.loading=!1},resetAlert:function(){this.alert=!1,this.alertMsg=""},submitForm:function(){var t=this,e=this.email,a=this.password;e&&a?this.loading||(this.loading=!0,this.resetAlert(),k.a.post("auth",{email:e,password:a}).then(function(e){var a=e.data,n=a.token,s=a.firstname,o=a.lastname;n&&(t.$store.dispatch("updateToken",n),t.$store.dispatch("updateUserDetails",{firstname:s,lastname:o}),t.$router.push({name:"TodoList"})),t.resetData()}).catch(function(e){t.resetData(),t.alert=!0,e.response&&403==e.response.status?t.alertMsg="Wrong email or password. Please try again.":t.alertMsg="An error occurred. Please try again."})):alert("Please fill email and password.")}}},S=O,j=Object(p["a"])(S,T,D,!1,null,null,null),P=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col mt-5 text-center"},[a("h1",[t._v("404 Not Found")]),a("p",[t._v("Sorry, an error has occured, Requested page not found!")]),a("router-link",{staticClass:"btn btn-primary mt-3",attrs:{to:{name:"TodoList"}}},[t._v("Take me Home")])],1)},$=[],E={name:"PageNotFound"},M=E,A=Object(p["a"])(M,L,$,!1,null,null,null),I=A.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-8 offset-xl-2"},[a("div",{staticClass:"card mt-5"},[a("article",{staticClass:"card-body"},[t.list_loading?a("div",{staticClass:"spinner-cnt text-center"},[t._m(0)]):t._e(),a("h4",{staticClass:"card-title mb-4 mt-1"},[t._v("Todos")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_task,expression:"new_task"}],staticClass:"form-control",attrs:{type:"text",disabled:t.btn_loading},domProps:{value:t.new_task},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.new_task=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!t.new_task},on:{click:function(e){return e.preventDefault(),t.addTask(e)}}},[t._v("\n                        Add Item\n                     "),t.btn_loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e()])])]),a("ul",{staticClass:"list-group"},t._l(t.todo_list,function(e,n){return a("li",{key:n,staticClass:"list-group-item"},[a("span",{class:{strike:1==e.done},on:{click:function(a){return a.preventDefault(),t.updateTask(e)}}},[t._v(t._s(e.title))]),a("button",{staticClass:"btn btn-outline-danger btn-sm float-right",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.removeTask(e._id)}}},[t._v("X")])])}),0)])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border m-5",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],N=(a("20d6"),{name:"PageTodoList",data:function(){return{new_task:"",todo_list:[],btn_loading:!1,list_loading:!1}},computed:Object(l["a"])({},Object(u["b"])({token:function(t){return t.token}})),methods:{resetData:function(){this.new_task="",this.btn_loading=!1,this.list_loading=!1},addTask:function(){var t=this,e=this.new_task;e?this.btn_loading||(this.btn_loading=!0,k.a.defaults.headers.post["Token"]=this.token,k.a.post("todo-list",{title:e}).then(function(e){var a=e.data,n=a._id,s=a.title,o=a.done;t.todo_list.push({_id:n,title:s,done:o}),t.resetData()}).catch(function(){t.resetData()})):alert("Please enter a task.")},updateTask:function(t){var e=this;t?this.list_loading||(this.list_loading=!0,k.a.defaults.headers.patch["Token"]=this.token,k.a.patch("todo-list/"+t._id,{done:!t.done}).then(function(){t.done=!t.done,e.resetData()}).catch(function(){e.resetData()})):alert("An error occurred.")},removeTask:function(t){var e=this;t?this.list_loading||(this.list_loading=!0,k.a.defaults.headers.delete["Token"]=this.token,k.a.delete("todo-list/"+t).then(function(){var a=e.todo_list.findIndex(function(e){return e._id==t});a>-1&&e.todo_list.splice(a,1),e.resetData()}).catch(function(){e.resetData()})):alert("An error occurred.")},getTasks:function(){var t=this;this.list_loading||(this.list_loading=!0,k.a.defaults.headers.get["Token"]=this.token,k.a.get("todo-list").then(function(e){e.data&&e.data.todo_list&&(t.todo_list=e.data.todo_list),t.resetData()}).catch(function(){t.resetData()}))}},mounted:function(){this.getTasks()}}),z=N,H=(a("84ba"),Object(p["a"])(z,U,F,!1,null,null,null)),J=H.exports;n["a"].config.productionTip=!1,k.a.defaults.baseURL="https://s6uo1v3j93.execute-api.us-east-1.amazonaws.com/latest/",n["a"].use(x["a"]);var R=new x["a"]({mode:"history",base:"/codehub-vue/",routes:[{path:"/login",name:"Login",component:P},{path:"/todo-list",name:"TodoList",component:J,meta:{authorization:!0}},{path:"*",name:"PageNotFound",component:I,meta:{authorization:!0}}]});R.beforeEach(function(t,e,a){var n=localStorage.getItem("token");if(t.matched.some(function(t){return t.meta.authorization}))return n?void a():void a({name:"Login"});n&&"Login"===t.name?a({name:"TodoList"}):a()}),new n["a"]({router:R,store:C,render:function(t){return t(b)},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"5bc5":function(t,e,a){},"64a9":function(t,e,a){},"84ba":function(t,e,a){"use strict";var n=a("bfe2"),s=a.n(n);s.a},"9fe2":function(t,e,a){"use strict";var n=a("5bc5"),s=a.n(n);s.a},bfe2:function(t,e,a){},c6eb:function(t,e,a){t.exports=a.p+"img/vue.443e29c4.png"},e9be:function(t,e,a){t.exports=a.p+"img/codehub.76192f7f.png"}});
//# sourceMappingURL=app.d239cf20.js.map