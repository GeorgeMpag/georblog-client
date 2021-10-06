(this["webpackJsonpgeor-blog"]=this["webpackJsonpgeor-blog"]||[]).push([[0],{21:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(15),o=n.n(r),i=(n(21),n(5)),a=n(0),l=function(){var e=!1,t=JSON.parse(sessionStorage.getItem("user")).id,n=JSON.parse(sessionStorage.getItem("user")).user_name;return t<0&&(e=!0),Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"georBlog"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(i.b,{to:"/",children:"Home"}),Object(a.jsx)(i.b,{to:"/create",children:"New Blog"}),Object(a.jsx)(i.b,{to:"/userProfile",children:n}),e&&Object(a.jsx)("button",{onClick:function(){sessionStorage.removeItem("user"),window.location.reload()},children:" Go to login page"})]})]})},j=function(e){var t=e.blogs,n=e.title;return Object(a.jsxs)("div",{className:"blog-list",children:[Object(a.jsx)("h3",{children:n}),t.map((function(e){return Object(a.jsx)("div",{className:"blog-preview",children:Object(a.jsxs)(i.b,{to:"/blogs/".concat(e.id),children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("p",{children:["by ",e.author]})]})},e.id)}))]})},b=n(2),d=function(e){var t=Object(s.useState)(null),n=Object(b.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)(!0),i=Object(b.a)(o,2),a=i[0],l=i[1],j=Object(s.useState)(null),d=Object(b.a)(j,2),u=d[0],h=d[1],O=Object(s.useState)(!1),g=Object(b.a)(O,2),p=g[0],x=g[1];return Object(s.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data ");return e.json()})).then((function(e){r(e),l(!1),h(null),JSON.parse(sessionStorage.getItem("user")).user_name===e.author&&x(!0)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(h(e.message),console.log(e.message),l(!1))}))}),1e3),function(){return t.abort()}}),[e]),{data:c,isPending:a,error:u,belongToUser:p}},u=function(){var e=d("https://geor-blog-backend.herokuapp.com/blogs"),t=e.data,n=e.isPending,s=e.error;return Object(a.jsxs)("div",{className:"home",children:[s&&Object(a.jsx)("div",{children:s}),n&&Object(a.jsx)("div",{children:" Loading..."}),t&&Object(a.jsx)(j,{blogs:t,title:"All Blogs"})]})},h=n(3),O=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),o=Object(b.a)(r,2),i=o[0],l=o[1],j=Object(s.useState)(!1),d=Object(b.a)(j,2),u=d[0],O=d[1],g=Object(h.g)();null===sessionStorage.getItem("user")&&g.push("/login");var p=JSON.parse(sessionStorage.getItem("user")).user_name,x=JSON.parse(sessionStorage.getItem("user")).id;return Object(a.jsxs)("div",{className:"create",children:[Object(a.jsx)("h2",{children:"Add a New Blog"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:n,body:i,author:x};O(!0),fetch("https://geor-blog-backend.herokuapp.com/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new entry added"),O(!1),g.push("/")}))},children:[Object(a.jsx)("label",{children:"Blog Title:"}),Object(a.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("label",{children:"Body:"}),Object(a.jsx)("textarea",{required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{children:"Author"}),Object(a.jsx)("p",{children:p}),!u&&Object(a.jsx)("button",{children:"Add"}),u&&Object(a.jsx)("button",{disabled:!0,children:"Adding your post"})]})]})},g=function(e){var t=e.blog,n=t.id,c=Object(s.useState)(t.title),r=Object(b.a)(c,2),o=r[0],i=r[1],l=Object(s.useState)(t.content),j=Object(b.a)(l,2),d=j[0],u=j[1];return Object(a.jsx)("div",{className:"create",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:n,title:o,body:d};fetch("https://geor-blog-backend.herokuapp.com/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("entry updated"),window.location.reload()}))},children:[Object(a.jsx)("label",{children:"Blog Title:"}),Object(a.jsx)("input",{type:"text",required:!0,value:o,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("label",{children:"Body:"}),Object(a.jsx)("textarea",{required:!0,rows:"10",value:d,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)("button",{children:"Save Changes"})]})})},p=function(){var e=Object(h.h)().id,t=d("http://localhost:3001/blogs/"+e),n=t.data,c=t.error,r=t.isPending,o=t.belongToUser,i=Object(h.g)(),l=Object(s.useState)(!1),j=Object(b.a)(l,2),u=j[0],O=j[1];return Object(a.jsxs)("div",{className:"blog-details",children:[!u&&r&&Object(a.jsx)("div",{children:"Loading..."}),!u&&c&&Object(a.jsx)("div",{children:c}),!u&&n&&Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:n.title}),Object(a.jsxs)("p",{children:["by ",n.author]}),Object(a.jsx)("div",{children:n.content}),Object(a.jsxs)("div",{className:"bd-buttons",children:[o&&Object(a.jsx)("button",{onClick:function(){fetch("https://geor-blog-backend.herokuapp.com//blogs/"+e,{method:"DELETE"}).then((function(){i.push("/")}))},children:"Delete"}),o&&Object(a.jsx)("button",{onClick:function(){O(!0)},children:"Modify"})]})]}),u&&Object(a.jsx)(g,{blog:n})]})},x=function(){return Object(a.jsxs)("div",{className:"not-found",children:[Object(a.jsx)("h2",{children:"Ooops page not Found"}),Object(a.jsx)(i.b,{to:"/",children:"Back to home"})]})},m=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),o=Object(b.a)(r,2),i=o[0],l=o[1],j=Object(s.useState)(""),d=Object(b.a)(j,2),u=d[0],O=d[1],g=Object(s.useState)(""),p=Object(b.a)(g,2),x=p[0],m=p[1],f=Object(h.g)();return Object(a.jsxs)("div",{className:"login-page",children:[Object(a.jsx)("h1",{children:"georBlog"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new AbortController;if(u===x){var s={uname:n,email:i,pass:u};fetch("https://geor-blog-backend.herokuapp.com/adduser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),signal:t.signal}).then((function(){console.log("new user added"),f.push("/")})).catch((function(e){console.log(e),console.log("error")}))}else console.log("Password validation not correct")},children:[Object(a.jsx)("label",{htmlFor:"uname",children:"User Name"}),Object(a.jsx)("input",{type:"text",id:"name",name:"uname",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"pass",name:"pass",required:!0,value:u,onChange:function(e){return O(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"rpass",children:"Repeat Password"}),Object(a.jsx)("input",{type:"password",id:"rpass",name:"rpass",required:!0,value:x,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)("button",{children:"Sign up"})]})]})};function f(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),o=Object(b.a)(r,2),l=o[0],j=o[1],d=Object(s.useState)(""),u=Object(b.a)(d,2),O=u[0],g=u[1],p=Object(h.g)();return Object(a.jsxs)("div",{className:"login-page",children:[Object(a.jsx)("h1",{children:"georBlog"}),Object(a.jsx)("div",{id:"error-message",children:Object(a.jsx)("h3",{children:O})}),Object(a.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t={uname:n,pass:l};fetch("https://geor-blog-backend.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.id?(console.log("333"),sessionStorage.setItem("user",JSON.stringify(e)),window.location.reload()):g(e.message)})).then((function(){p.push("/")}))},children:[Object(a.jsx)("label",{htmlFor:"",children:"User Name"}),Object(a.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"",children:"Password"}),Object(a.jsx)("input",{type:"password",required:!0,value:l,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{children:"Login"})]}),Object(a.jsxs)("div",{className:"bot",children:[Object(a.jsx)("p",{children:"Not Singed up?? "}),Object(a.jsxs)("div",{id:"sign-visitor",children:[Object(a.jsx)(i.b,{id:"link",to:"/signup",children:" Sign up"}),Object(a.jsx)("button",{title:"As a visitor you can only view the  other user posts",onClick:function(){sessionStorage.setItem("user",JSON.stringify({id:-1})),window.location.reload(),p.push("/")},children:"Continue as visitor"})]})]})]})}n(31);var v=function(){var e=JSON.parse(sessionStorage.getItem("user")).user_name,t=JSON.parse(sessionStorage.getItem("user")).id,n=d("https://geor-blog-backend.herokuapp.com/user/"+t),s=n.data,c=n.isPending,r=n.error,o=JSON.parse(sessionStorage.getItem("user")).email,i=JSON.parse(sessionStorage.getItem("user")).sing_date,l=new Date(i),b=l.getDate(),u=l.getMonth(),h=l.getFullYear();return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsxs)("div",{className:"profileInfo",children:[Object(a.jsx)("h4",{children:"User Name :"}),Object(a.jsx)("p",{children:e}),Object(a.jsx)("h4",{children:"Email:"}),Object(a.jsx)("p",{children:o}),Object(a.jsx)("h4",{children:"Member Since:"}),Object(a.jsxs)("p",{children:[b,"/",u,"/",h]}),Object(a.jsx)("h4",{children:"Total posts:"}),Object(a.jsx)("p",{children:!c&&s.length}),Object(a.jsx)("button",{onClick:function(){sessionStorage.removeItem("user"),window.location.reload()},children:" Logout"})]}),Object(a.jsxs)("div",{className:"userPosts",children:[r&&Object(a.jsx)("div",{children:r}),c&&Object(a.jsx)("div",{children:" Loading..."}),s&&Object(a.jsx)(j,{blogs:s,title:"Your posts"})]})]})};var S=function(){return null===sessionStorage.getItem("user")?Object(a.jsxs)(i.a,{children:[Object(a.jsx)(h.a,{to:"/"}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(f,{})}),Object(a.jsx)(h.b,{path:"/signup",children:Object(a.jsx)(m,{})})]})]}):Object(a.jsx)(i.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(u,{})}),Object(a.jsx)(h.b,{path:"/create",children:Object(a.jsx)(O,{})}),Object(a.jsx)(h.b,{path:"/blogs/:id",children:Object(a.jsx)(p,{})}),Object(a.jsx)(h.b,{path:"/userProfile",children:Object(a.jsx)(v,{})}),Object(a.jsx)(h.b,{path:"*",children:Object(a.jsx)(x,{})})]})})]})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.432cc8e1.chunk.js.map