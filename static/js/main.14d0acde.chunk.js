(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{15:function(e,t){},18:function(e){e.exports=JSON.parse('{"domain":"dev-777.auth0.com","clientId":"vLtXTG5a1134qO7jkzNdas16hEbZKrEw"}')},32:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(10),o=a(4),s=a.n(o),u=a(8),m=a(9),p=a(13),d=a(23),h=a.n(d),f=function(){return window.history.replaceState({},document.title,window.location.pathname)},E=r.a.createContext(),b=function(){return Object(n.useContext)(E)},v=a(24),g=a(25),w=a(30),k=a(27),y=a(31),O=function(e){function t(e){return Object(v.a)(this,t),Object(w.a)(this,Object(k.a)(t).call(this,e))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"stars"}),r.a.createElement("div",{className:"twinkling"}))}}]),t}(r.a.Component),j=function(){var e=b(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logout;return r.a.createElement("div",null,!t&&r.a.createElement("div",null,r.a.createElement("button",{variant:"danger",className:"button",type:"button",onClick:function(){return a({})}},"Log in/Sign in"),r.a.createElement(O,null),r.a.createElement("div",{className:"fade"}),r.a.createElement("section",{class:"star-wars"},r.a.createElement("div",{class:"crawl"},r.a.createElement("div",{class:"title"},r.a.createElement("p",null,"Far Away Matching"),r.a.createElement("h1",null,"The Best Hope")),r.a.createElement("p",null,"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire."),r.a.createElement("p",null,"During the battle, you can relax and find your match... Just imagine, winning the war and having someone special exactly suited for your personality and not only, to share this moment with and all the special moments that you'll face together, after."),r.a.createElement("p",null,"Hapilly ever after to the Death Star and back... with Far Away Matching!")))),t&&r.a.createElement("button",{onClick:function(){return n()}},"Log out"),t&&r.a.createElement("span",null,r.a.createElement(i.a,{to:"/home"},"Home"),"\xa0",r.a.createElement(i.a,{to:"/profile"},"Profile")))},x=(a(21),a(7)),C=function(){var e=b(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("input",{id:"slider",class:"customSlider",type:"checkbox"}),r.a.createElement("label",{for:"slider"}),r.a.createElement("div",{class:"wrapper"},r.a.createElement("div",{class:"top-icons"},r.a.createElement("i",{class:"fas fa-long-arrow-alt-left"}),r.a.createElement("i",{class:"fas fa-ellipsis-v"}),r.a.createElement("i",{class:"far fa-heart"})),r.a.createElement("div",{class:"profile"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",class:"thumbnail"}),r.a.createElement("div",{class:"check"},r.a.createElement("i",{class:"fas fa-check"})),r.a.createElement("h3",{class:"name"},"Beverly Little"),r.a.createElement("p",{class:"title"},"Javascript Developer"),r.a.createElement("p",{class:"description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!"),r.a.createElement("button",{type:"button",class:"btn"},"Hire Me")),r.a.createElement("div",{class:"social-icons"},r.a.createElement("div",{class:"icon"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{class:"fab fa-dribbble"})),r.a.createElement("h4",null,"12.8k"),r.a.createElement("p",null,"Followers")),r.a.createElement("div",{class:"icon"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-behance"})),r.a.createElement("h4",null,"12.8k"),r.a.createElement("p",null,"Followers")),r.a.createElement("div",{class:"icon"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement("h4",null,"12.8k"),r.a.createElement("p",null,"Followers")))),r.a.createElement("div",{class:"concept"},"concept by",r.a.createElement("a",{href:"https://dribbble.com/shots/4346772-Profile-Card",target:"_blank"},r.a.createElement("i",{class:"fab fa-dribbble"})," Vijay Verma")))},S=a(2),R=Object(S.a)(),W=function(e){var t=e.component,a=e.path,c=Object(p.a)(e,["component","path"]),l=b(),i=l.loading,o=l.isAuthenticated,m=l.loginWithRedirect;Object(n.useEffect)((function(){i||o||function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({appState:{targetUrl:a}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,o,m,a]);return r.a.createElement(x.a,Object.assign({path:a,render:function(e){return!0===o?r.a.createElement(t,e):null}},c))},N=a(15),T=a.n(N),A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x.b,{history:R},r.a.createElement(O,null),r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",exact:!0}),r.a.createElement(x.a,{path:"/profile",component:C}),r.a.createElement(W,{path:"/profile",component:C}),r.a.createElement(x.a,{path:"/home",component:T.a}))))};a(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(18);l.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?f:a,l=Object(p.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),o=Object(m.a)(i,2),d=o[0],b=o[1],v=Object(n.useState)(),g=Object(m.a)(v,2),w=g[0],k=g[1],y=Object(n.useState)(),O=Object(m.a)(y,2),j=O[0],x=O[1],C=Object(n.useState)(!0),S=Object(m.a)(C,2),R=S[0],W=S[1],N=Object(n.useState)(!1),T=Object(m.a)(N,2),A=T[0],P=T[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()(l);case 2:if(t=e.sent,x(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,b(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,k(i);case 19:W(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var F=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},P(!0),e.prev=2,e.next=5,j.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:return e.next=15,j.getUser();case 15:a=e.sent,k(a),b(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,j.handleRedirectCallback();case 3:return e.next=5,j.getUser();case 5:t=e.sent,W(!1),b(!0),k(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{isAuthenticated:d,user:w,loading:R,popupOpen:A,loginWithPopup:F,handleRedirectCallback:I,getIdTokenClaims:function(){return j.getIdTokenClaims.apply(j,arguments)},loginWithRedirect:function(){return j.loginWithRedirect.apply(j,arguments)},getTokenSilently:function(){return j.getTokenSilently.apply(j,arguments)},getTokenWithPopup:function(){return j.getTokenWithPopup.apply(j,arguments)},logout:function(){return j.logout.apply(j,arguments)}}},t)}),{domain:P.domain,client_id:P.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){R.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.14d0acde.chunk.js.map