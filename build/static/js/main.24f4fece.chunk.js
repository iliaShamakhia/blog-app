(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),s=n.n(c),i=n(7),u=n.n(i),o=n(11),l=n(12),j=n(18),d=n.n(j),b="/api/blogs",h=null,O=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,d.a.post(b,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={getAll:function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:h}},e.next=3,d.a.get(b,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:O,setToken:function(e){h="bearer ".concat(e)},update:function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},r=b+"/"+t.id,e.next=4,d.a.put(r,t,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},r=b+"/"+t,e.next=4,d.a.delete(r,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:h}},a={comment:t},c=b+"/".concat(n,"/")+"comments",e.next=5,d.a.post(c,a,r);case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},f=n(93),x=n(1),g=function(e){var t=e.success,n=e.message;return null===n?null:t?Object(x.jsx)(f.a,{variant:"success",children:n}):Object(x.jsx)(f.a,{variant:"danger",children:n})},v=n(91),m=n(89),y=n(8),w=function(e){var t=e.handleRegister,n=Object(r.useState)(""),a=Object(l.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],d=Object(r.useState)(""),b=Object(l.a)(d,2),h=b[0],O=b[1],p=Object(y.f)();return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{id:"login-text",children:"Register"}),Object(x.jsx)(v.a,{onSubmit:function(e){e.preventDefault(),t(c,o,h),p.push("/"),s(""),j(""),O("")},children:Object(x.jsxs)(v.a.Group,{children:[Object(x.jsx)(v.a.Label,{children:"name:"}),Object(x.jsx)(v.a.Control,{id:"name",type:"text",name:"name",value:c,onChange:function(e){var t=e.target;return s(t.value)}}),Object(x.jsx)(v.a.Label,{children:"username:"}),Object(x.jsx)(v.a.Control,{id:"username",type:"text",name:"username",value:o,onChange:function(e){var t=e.target;return j(t.value)}}),Object(x.jsx)(v.a.Label,{children:"password:"}),Object(x.jsx)(v.a.Control,{id:"password",type:"password",name:"password",value:h,onChange:function(e){var t=e.target;return O(t.value)}}),Object(x.jsx)(m.a,{id:"login-button",variant:"primary",type:"submit",children:"register"}),Object(x.jsx)(m.a,{id:"cancel-regist-button",variant:"danger",onClick:function(){return p.push("/")},children:"cancel"})]})})]})},S=n(13),C=function(e){var t=e.handleLogin,n=e.username,r=e.setUsername,a=e.password,c=e.setPassword,s=e.handleRegister;return Object(x.jsx)(S.a,{children:Object(x.jsxs)(y.c,{children:[Object(x.jsx)(y.a,{path:"/register",children:Object(x.jsx)(w,{handleRegister:s})}),Object(x.jsx)(y.a,{path:"/",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{id:"login-text",children:"Log in to application"}),Object(x.jsx)(v.a,{onSubmit:t,children:Object(x.jsxs)(v.a.Group,{children:[Object(x.jsx)(v.a.Label,{children:"username:"}),Object(x.jsx)(v.a.Control,{id:"username",type:"text",name:"username",value:n,onChange:function(e){var t=e.target;return r(t.value)}}),Object(x.jsx)(v.a.Label,{children:"password:"}),Object(x.jsx)(v.a.Control,{id:"password",type:"password",name:"password",value:a,onChange:function(e){var t=e.target;return c(t.value)}}),Object(x.jsx)(m.a,{id:"login-button",variant:"primary",type:"submit",children:"login"}),Object(x.jsx)("div",{style:{marginTop:"10px"},children:Object(x.jsx)(S.b,{to:"/register",children:"register"})})]})})]})})]})})},T={login:function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E="/api/users",I={getUsers:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(E);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(o.a)(u.a.mark((function e(t,n,r){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,username:n,password:r},e.next=3,d.a.post(E,a);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},k=function(e){var t=e.success,n=e.errorMessage;return Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{success:t,message:n}),Object(x.jsx)("h2",{id:"blog-app",children:"blog app"})]})},R=n(90),A=function(e){var t=e.users;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Users"}),Object(x.jsx)(R.a,{striped:!0,children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("strong",{children:"user"})}),Object(x.jsx)("td",{children:Object(x.jsx)("strong",{children:"blogs created"})})]}),t.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(S.b,{to:"/users/".concat(e.id),children:e.name})}),Object(x.jsx)("td",{children:e.blogs.length})]},e.id)}))]})})]})},L=function(e){return{type:"SET_NOTIFICATION",notification:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return e=t.notification;case"REMOVE_NOTIFICATION":return e=null;default:return e}},_=n(26),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUCCESS":return e=!0;case"SET_FAILURE":return e=!1;default:return e}},U=function(e){return{type:"SET_BLOGS",blogs:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BLOGS":return e=t.blogs;default:return e}},V=function(e){return{type:"SET_USER",user:e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return e=t.user;default:return e}},z=n(95),B=function(e){var t=e.users,n=Object(y.g)().id,r=t.find((function(e){return e.id===n}));return r?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:r.name}),Object(x.jsx)("p",{children:Object(x.jsx)("strong",{children:"added blogs"})}),Object(x.jsx)(z.a,{variant:"flush",children:r.blogs.map((function(e){return Object(x.jsx)(z.a.Item,{variant:"secondary",children:Object(x.jsx)(S.b,{to:"/blogs/".concat(e.id),children:e.title})},e.id)}))})]}):null},D=function(e){var t=e.blogs,n=e.handleLike,a=e.handleComment,c=e.handleRemove,s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],o=i[1],j=Object(y.f)(),d=Object(y.g)().id,b=t.find((function(e){return e.id===d}));return b?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:b.title}),Object(x.jsxs)("p",{children:["by: ",b.author]}),Object(x.jsxs)("p",{children:["for more info visit: ",Object(x.jsx)("a",{href:b.url,children:b.url})]}),Object(x.jsxs)("p",{children:["likes: ",b.likes," ",Object(x.jsx)(m.a,{id:"like-button",variant:"primary",onClick:function(){return n(b)},children:"like"})]}),Object(x.jsx)(m.a,{id:"blog-remove-button",variant:"danger",onClick:function(){c(b.title,b.author,b.id),j.push("/blogs")},children:"remove"}),Object(x.jsx)("h4",{children:"comments"}),Object(x.jsx)(z.a,{variant:"flush",children:b.comments?b.comments.map((function(e,t){return Object(x.jsx)(z.a.Item,{variant:"secondary",children:e},t)})):null}),Object(x.jsx)(v.a,{onSubmit:function(e){e.preventDefault(),a(u,b.id),o("")},children:Object(x.jsxs)(v.a.Group,{children:[Object(x.jsx)(v.a.Control,{id:"comment",type:"text",name:"comment",value:u,onChange:function(e){var t=e.target;return o(t.value)}}),Object(x.jsx)(m.a,{id:"comment-button",variant:"primary",type:"submit",children:"add comment"})]})})]}):null},J=function(e){var t=e.handleCreate,n=Object(r.useState)(""),a=Object(l.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],d=Object(r.useState)(""),b=Object(l.a)(d,2),h=b[0],O=b[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"create new"}),Object(x.jsx)(v.a,{onSubmit:function(e){e.preventDefault(),t({title:c,author:o,url:h}),s(""),j(""),O("")},children:Object(x.jsxs)(v.a.Group,{children:[Object(x.jsx)(v.a.Label,{children:"title:"}),Object(x.jsx)(v.a.Control,{id:"title",type:"text",name:"title",value:c,onChange:function(e){var t=e.target;return s(t.value)}}),Object(x.jsx)(v.a.Label,{children:"author:"}),Object(x.jsx)(v.a.Control,{id:"author",type:"text",name:"author",value:o,onChange:function(e){var t=e.target;return j(t.value)}}),Object(x.jsx)(v.a.Label,{children:"url:"}),Object(x.jsx)(v.a.Control,{id:"url",type:"text",name:"url",value:h,onChange:function(e){var t=e.target;return O(t.value)}}),Object(x.jsx)(m.a,{id:"submit-blog-button",variant:"primary",type:"submit",children:"create"})]})})]})},P=a.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),a=Object(l.a)(n,2),c=a[0],s=a[1],i={display:c?"none":""},u={display:c?"":"none"},o=function(){s(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:i,children:Object(x.jsx)(m.a,{id:"create-blog-button",variant:"primary",onClick:o,children:e.buttonLabel})}),Object(x.jsxs)("div",{style:u,children:[e.children,Object(x.jsx)(m.a,{id:"cancel-button",variant:"danger",onClick:o,children:"cancel"})]})]})}));P.displayName="Togglable";var q=P,H=function(e){var t=e.blogFormRef,n=e.handleCreate,r=e.blogs;return Object(x.jsxs)("div",{className:"blogs",children:[Object(x.jsx)(q,{buttonLabel:"create new blog",ref:t,children:Object(x.jsx)(J,{handleCreate:n})}),Object(x.jsx)(R.a,{striped:!0,children:Object(x.jsx)("tbody",{children:r.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(S.b,{to:"/blogs/".concat(e.id),children:e.title})}),Object(x.jsx)("td",{children:e.author})]},e.id)}))})})]})},K=n(92),Q=n(94),W=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),i=s[0],j=s[1],d=Object(r.useRef)(),b=Object(r.useState)([]),h=Object(l.a)(b,2),O=h[0],f=h[1],v=Object(_.b)(),w=Object(_.c)((function(e){return e.notification})),E=Object(_.c)((function(e){return e.success})),R=Object(_.c)((function(e){return e.blogs})),N=Object(_.c)((function(e){return e.user}));Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);v(V(t)),p.setToken(t.token),p.getAll().then((function(e){v(U(e))}))}}),[]);var F=function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n&&""!==i){e.next=6;break}return v({type:"SET_FAILURE"}),v(L("username & password must not be empty")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3),e.abrupt("return");case 6:return e.prev=6,e.next=9,T.login({username:n,password:i});case 9:r=e.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),p.setToken(r.token),v(V(r)),a(""),j(""),v({type:"SET_SUCCESS"}),v(L("Log in success")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3),p.getAll().then((function(e){return v(U(e))})),I.getUsers().then((function(e){return f(e)})),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(6),v({type:"SET_FAILURE"}),v(L("wrong username or password")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3);case 27:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.title&&t.author&&t.url){e.next=7;break}return v({type:"SET_FAILURE"}),v(L("Please fill in all required fields")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3),e.abrupt("return");case 7:return d.current.toggleVisibility(),e.next=10,p.create(t);case 10:p.getAll().then((function(e){return v(U(e))})),I.getUsers().then((function(e){return f(e)})),v({type:"SET_SUCCESS"}),v(L("a new blog ".concat(t.title," by ").concat(t.author," added"))),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.likes=t.likes+1,t.user=t.user.id,e.next=4,p.update(t);case 4:p.getAll().then((function(e){return v(U(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(u.a.mark((function e(t,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog ".concat(t," by ").concat(n,"?"))){e.next=5;break}return e.next=3,p.remove(r);case 3:p.getAll().then((function(e){return v(U(e))})),I.getUsers().then((function(e){return f(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.addComment(t,n);case 2:p.getAll().then((function(e){return v(U(e))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return null===N?Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{handleLogin:F,handleRegister:function(e,t,n){if(""===e||""===t||""===n)return v({type:"SET_FAILURE"}),v(L("name, username & password must not be empty")),void setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3);try{I.register(e,t,n),v({type:"SET_SUCCESS"}),v(L("Registration success")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3)}catch(r){v({type:"SET_FAILURE"}),v(L("Registration Failed")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3)}},username:n,setUsername:a,password:i,setPassword:j}),Object(x.jsx)(g,{success:E,message:w})]}):Object(x.jsxs)(S.a,{children:[Object(x.jsxs)(K.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(x.jsx)(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(K.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsxs)(Q.a,{className:"mr-auto test",children:[Object(x.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(x.jsx)(S.b,{to:"/blogs",children:"blogs"})}),Object(x.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(x.jsx)(S.b,{to:"/users",children:"users"})}),Object(x.jsx)(Q.a.Link,{id:"logged-in-user",href:"#",as:"span",children:Object(x.jsxs)("p",{children:[N.name," Logged in"]})}),Object(x.jsx)(m.a,{id:"logout-button",variant:"primary",onClick:function(){window.localStorage.clear(),v(V(null)),v({type:"SET_SUCCESS"}),v(L("Log out success")),setTimeout((function(){v({type:"REMOVE_NOTIFICATION"})}),5e3)},children:"logout"})]})})]}),Object(x.jsx)(k,{success:E,errorMessage:w}),Object(x.jsxs)(y.c,{children:[Object(x.jsx)(y.a,{path:"/users/:id",children:Object(x.jsx)(B,{users:O})}),Object(x.jsx)(y.a,{path:"/blogs/:id",children:Object(x.jsx)(D,{blogs:R,handleLike:G,handleComment:J,handleRemove:z})}),Object(x.jsx)(y.a,{path:"/blogs",children:Object(x.jsx)(H,{blogFormRef:d,handleCreate:M,blogs:R,handleLike:G,handleRemove:z,user:N})}),Object(x.jsx)(y.a,{path:"/users",children:Object(x.jsx)(A,{users:O})}),Object(x.jsx)(y.a,{path:"/",children:Object(x.jsx)(H,{blogFormRef:d,handleCreate:M,blogs:R,handleLike:G,handleRemove:z,user:N})})]})]})},X=(n(86),n(44)),Y=Object(X.a)({blogs:M,notification:N,success:F,user:G}),Z=Object(X.b)(Y);s.a.render(Object(x.jsx)(_.a,{store:Z,children:Object(x.jsx)(W,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.24f4fece.chunk.js.map