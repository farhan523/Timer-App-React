(this["webpackJsonptimer-app-typescript"]=this["webpackJsonptimer-app-typescript"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(9),n(2)),j=(n(10),n(0)),o=function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(0),r=Object(a.a)(s,2),o=r[0],u=r[1],b=Object(c.useState)(0),l=Object(a.a)(b,2),O=l[0],d=l[1],h=Object(c.useState)(!1),p=Object(a.a)(h,2),f=p[0],x=p[1],g=Object(c.useState)(!1),m=Object(a.a)(g,2),v=m[0],S=m[1],C=Object(c.useRef)(null),k=function(){x(!0),S(!0),C.current=setInterval((function(){d(++O),O>=100?(u(++o),O=0):o>=60&&(i(++n),o=0)}),10)},I=n.toString().length,F=o.toString().length,y=O.toString().length;return Object(j.jsxs)("div",{className:"timer-container",children:[Object(j.jsx)("h1",{children:"Timer App"}),Object(j.jsxs)("span",{children:[I<2?"0".concat(n):n," \xa0:\xa0"]}),Object(j.jsxs)("span",{children:[F<2?"0".concat(o):o," \xa0:\xa0"]}),Object(j.jsx)("span",{children:y<2?"0".concat(O):O}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"buttons",children:[v||f?v?Object(j.jsx)("button",{onClick:function(){clearInterval(C.current),S(!1)},children:"pause"}):Object(j.jsx)("button",{onClick:function(){k()},children:"Resume"}):Object(j.jsx)("button",{onClick:k,children:"start"}),Object(j.jsx)("button",{onClick:function(){clearInterval(C.current),x(!1),d(0),u(0),i(0)},disabled:!f,children:"Reset"})]})]})};n(12);var u=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(o,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.146cc3c3.chunk.js.map