(this.webpackJsonpcelano=this.webpackJsonpcelano||[]).push([[9],{58:function(t,e,n){"use strict";var a=n(2),c=n(0),s=n(21),r=n(1),i=n.n(r);function o(t){var e=t.text,n=Object(s.a)(t,["text"]);return Object(c.jsx)("button",Object(a.a)(Object(a.a)({},n),{},{children:e}))}e.a=i.a.memo(o)},61:function(t,e,n){"use strict";var a=n(5),c=n(2),s=n(0),r=n(21),i=n(1),o=n.n(i),j=n(6),l=n.p+"static/media/start-empty.47748d2f.svg",b=n.p+"static/media/start.68087387.svg",d=n(8);function x(){var t=Object(a.a)(["\n    .rating {\n        position: relative;\n        width: 70px;\n        height: 20px;\n        .start {\n            position: absolute;\n            left: 0;\n            top: 0;\n            overflow: hidden;\n            height: 20px;\n        }\n    }\n"]);return x=function(){return t},t}function m(t){var e=t.withRating,n=Object(r.a)(t,["withRating"]);return Object(s.jsx)(p,Object(c.a)(Object(c.a)({},n),{},{children:Object(s.jsxs)("div",{className:"rating",children:[Object(s.jsxs)("div",{className:"start-empty",children:[Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:l,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:l,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:l,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:l,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:l,alt:"start"})})]}),Object(s.jsxs)("div",{className:"start",style:{width:"".concat(e,"%")},children:[Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:b,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:b,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:b,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:b,alt:"start"})}),Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{src:b,alt:"start"})})]})]})}))}e.a=o.a.memo(m);var p=j.b.div(x())},69:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return gt}));var a=n(5),c=n(0),s=n(1),r=n.n(s),i=n(6),o=n(11),j=n(58),l=n(55),b=n(10),d=n.p+"static/media/banner.7887ffea.jpg",x=n.p+"static/media/arrow-right.2337dc35.svg",m=n.p+"static/media/arrow-right-hover.fd8a4a27.svg",p=n(4),u=n(36);function O(){var t=Object(a.a)(["\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    padding: 230px 0;\n    h1 {\n        max-width: 515px;\n        font-size: 3.5em;\n    }\n    :hover {\n        .btn {\n            transition: ",";\n            background-color: white;\n            color: ",';\n        }\n    }\n    .btn::after {\n        content: "";\n        width: 6px;\n        height: 10px;\n        background-image: url(',");\n        background-repeat: no-repeat;\n        margin-left: 1rem;\n    }\n"]);return O=function(){return t},t}var h=function(){var t=Object(u.a)(),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.jsx)("section",{children:Object(c.jsx)(g,{ref:n,ishover:a,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b.a,{tag:"p",className:"text-left text-uppercase in-left animation-delay-400",text:"Spring Collection"}),Object(c.jsx)(l.a,{widthDivider:"100px",className:"in-left pt-2 pb-1 animation-delay-600"}),Object(c.jsx)(b.a,{tag:"h1",className:"text-left text-capitalize in-left animation-delay-800",text:"Discover our New & Modern Design"}),Object(c.jsx)(j.a,{type:"button",className:"btn btn-primary animation-delay-1000 text-uppercase d-flex ai-center mt-3 in-left",text:"Discover now"})]})})})},g=i.b.div(O(),d,p.a.transition,p.a.colorTitle,(function(t){return!0===t.ishover?m:x})),f=n(8),v=n(61),N=n(35),w=n(14);function A(){var t=Object(a.a)(["\n    position: relative;\n    .badge {\n        font-size: 12px;\n        font-weight: bold;        \n        color: white;\n        position: absolute;\n        top: 10px;\n        left: 10px;\n        padding: 3px;\n        &.badge-new {\n            background-color: ",";\n        }\n        &.badge-hot {\n            background-color: ",";\n        }\n    }\n    .price {\n        .regular_price {\n            margin-right: 0.5rem;\n        }\n        .salce_price {\n            color: ",";\n            text-decoration: line-through;\n        }\n    }    \n"]);return A=function(){return t},t}function y(t){var e=t.id,n=t.name,a=t.price,s=t.image,r=(t.colors,t.company,t.description,t.category,t.shipping,t.status),i=100*t.rating/5;return Object(c.jsxs)(k,{className:"col-fb-4",children:[""!==r&&Object(c.jsx)("div",{className:"badge text-upp badge-".concat(r),children:r}),Object(c.jsxs)(w.b,{to:"/product/".concat(e),children:[Object(c.jsx)(f.a,{src:s,alt:n}),Object(c.jsx)(b.a,{tag:"h6",className:"mt-1 mb-1",text:n})]}),Object(c.jsx)("div",{className:"price mb-1",children:a&&Object(c.jsx)("span",{className:"regular_price",children:Object(N.a)(a)})}),Object(c.jsx)(v.a,{className:"mb-1",withRating:i})]})}var k=i.b.div(A(),p.a.colorPrimary,p.a.colorSecondary,p.a.colorDesc),S=n(2),B=n(21),C=n.p+"static/media/arrow-right-blue-hover.3792704d.svg";function E(){var t=Object(a.a)(["\n    img {\n        margin-right: 0.5rem;\n        transition: ","\n    }\n    :hover {\n        img, p {\n            transition: ","\n        }\n        p {\n            color: ","\n        }\n    }\n    p {\n        transition: ","\n    }\n"]);return E=function(){return t},t}function J(t){var e=t.tag,n=t.text,a=Object(B.a)(t,["tag","text"]),s=Object(u.a)(),r=Object(o.a)(s,2),i=r[0],j=r[1]?C:m;return Object(c.jsxs)(Q,{className:"d-flex ai-center",ref:i,children:[Object(c.jsx)(f.a,{src:j}),Object(c.jsx)(b.a,Object(S.a)({tag:e,text:n},a))]})}var R=r.a.memo(J),Q=i.b.div(E(),p.a.transition,p.a.transition,p.a.colorPrimary,p.a.transition),z=n.p+"static/media/women.1eaad189.jpg";function P(){var t=Object(a.a)(["\n    h3 {\n        margin-bottom: 0.5rem;\n    }\n    .btn {\n        font-size: 14px;\n    }\n"]);return P=function(){return t},t}function I(){return Object(c.jsxs)(D,{className:"col-fb-4",children:[Object(c.jsx)(b.a,{tag:"h3",className:"text-left text-capitalize",text:"Women"}),Object(c.jsx)(j.a,{className:"btn btn-primary smaller text-uppercase mb-2",text:"Popular products"}),Object(c.jsx)(f.a,{src:z,alt:"Women",className:"mb-2"}),Object(c.jsxs)("div",{className:"row-fb",children:[Object(c.jsxs)("div",{className:"col-fb-6",children:[Object(c.jsx)(R,{tag:"p",text:"Jean"}),Object(c.jsx)(R,{tag:"p",text:"Shirt",className:"mt-1 mb-1"}),Object(c.jsx)(R,{tag:"p",text:"Dress"})]}),Object(c.jsxs)("div",{className:"col-fb-6",children:[Object(c.jsx)(R,{tag:"p",text:"Glass"}),Object(c.jsx)(R,{tag:"p",text:"Shoes",className:"mt-1 mb-1"}),Object(c.jsx)(R,{tag:"p",text:"Accessories"})]})]}),Object(c.jsx)(j.a,{className:"btn btn-secondary text-uppercase mt-2 w-100",text:"view all"})]})}var D=i.b.div(P()),T=n(26);function X(){var t=Object(a.a)(["\n\n"]);return X=function(){return t},t}function _(){var t=Object(s.useContext)(T.a),e=t.fetchHomeProductWoman,n=t.woman_products;return Object(s.useEffect)((function(){e()}),[]),Object(c.jsx)("section",{className:"mt-5 mb-5",children:Object(c.jsx)(G,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row-fb",children:[Object(c.jsx)(I,{}),Object(c.jsx)("div",{className:"col-fb-8",children:Object(c.jsx)("div",{className:"pl-5",children:Object(c.jsx)("div",{className:"row-fb",children:n.length>0&&n.map((function(t,e){var n=t._id,a=t.name,s=t.price,r=t.image,i=t.colors,o=t.company,j=t.description,l=t.category,b=t.shipping,d=t.status,x=t.rating;return Object(c.jsx)(y,{id:n,name:a,status:d,price:s,image:r,rating:x,colors:i,company:o,description:j,category:l,shipping:b},e)}))})})})]})})})})}var G=i.b.div(X());function H(){var t=Object(a.a)(["\n    padding-left: 15px;\n    padding-right: 15px;\n    .row-fb {\n        margin-left: -15px;\n        margin-right: -15px;\n    }\n    .inner {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n    .ads-item {\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        color: ",";\n        padding: 160px;\n        position: relative;\n        &__inner {\n            background-color: white;\n            padding: 25px 35px;\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%,-50%)\n        }\n    }\n"]);return H=function(){return t},t}var L=[{img:n.p+"static/media/ads1.7a366cd0.jpg",p:"new arrivals",h3:"summer 2020"},{img:n.p+"static/media/ads2.09275c1c.jpg",p:"new arrivals",h3:"summer 2020"},{img:n.p+"static/media/ads3.6e171766.jpg",p:"new arrivals",h3:"summer 2020"}];function M(){return Object(c.jsx)(U,{children:Object(c.jsx)("div",{className:"row-fb",children:L.length>0&&L.map((function(t,e){var n=t.img,a=t.p,s=t.h3;return Object(c.jsx)("div",{className:"col-fb-4",children:Object(c.jsx)("div",{className:"inner",children:Object(c.jsx)("div",{className:"ads-item",style:{backgroundImage:"url(".concat(n,")")},children:Object(c.jsxs)("div",{className:"ads-item__inner text-center",children:[Object(c.jsx)(b.a,{tag:"p",text:a,className:"text-upp"}),Object(c.jsx)(b.a,{tag:"h3",text:s,className:"text-upp"})]})})})},e)}))})})}var U=i.b.section(H(),p.a.colorTitle);function K(t){var e=t.placeholder,n=Object(B.a)(t,["placeholder"]);return Object(c.jsx)("input",Object(S.a)({type:"text",placeholder:e},n))}var V=n.p+"static/media/newsletter.7b3b3ce8.jpg";function Y(){var t=Object(a.a)(["\n    padding: 10rem 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    position: relative;\n    .newsletter-inner {\n        max-width: 630px;\n        padding: 5rem 3rem;\n        margin: auto;\n        background-color: #fff;\n        p {\n            max-width: 420px;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n"]);return Y=function(){return t},t}function F(){return Object(c.jsx)(q,{style:{backgroundImage:"url(".concat(V,")")},children:Object(c.jsx)("div",{className:"newsletter",children:Object(c.jsxs)("div",{className:"newsletter-inner text-center",children:[Object(c.jsx)(b.a,{text:"Sign Up For Our Newsletter",tag:"h3"}),Object(c.jsx)(b.a,{className:"mt-1 mb-2",text:"It is a long established fact that a reader will be distracted by the readable content of a page.",tag:"p"}),Object(c.jsx)(K,{className:"form-control w-100 text-center mb-2",placeholder:"Your Email Address..."}),Object(c.jsx)(j.a,{text:"Subscribe",className:"btn btn-primary"})]})})})}var q=i.b.section(Y());function W(){var t=Object(a.a)(["\n    .inner {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n\n    & > img {\n        width: 100%;\n    }\n\n    .comments {\n        color: ","\n    }\n"]);return W=function(){return t},t}function Z(t){var e=t.title,n=t.author,a=t.desc,s=t.date,r=t.img,i=t.comments;return Object(c.jsx)($,{className:"col-fb-4",children:Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)(f.a,{src:r,alt:e}),Object(c.jsx)(b.a,{tag:"h6",text:e,className:"text-upp mt-1 mb-1"}),Object(c.jsx)(b.a,{tag:"p",text:a,className:"mb-1"}),Object(c.jsxs)("div",{className:"meta d-flex jc-bw",children:[Object(c.jsxs)("p",{children:["by ",Object(c.jsx)("span",{children:n})," on ",s]}),Object(c.jsxs)("div",{className:"comments",children:[Object(c.jsx)(f.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgBnZJNToNQEMcfj4+QsHmewHoFTuAN1J270oSvXfEGegLpjgQSnyeonsC6J9HeAJfu2JBACOB/mtpoY/rhJI8ZyP83M8wbhf1hjuMI0zQFxXVdl1LKcluj/HzxPM+BGyuKInDeh2EgL9ZeNk3zjCTFBqQKuq7PES4ty7qN4/hXhSiKRFVVl5S0bdsJwSvQ9/03ZJ2laSrZDgvDcNR13QPgK5XaQxufgGK2x/I8L23b/tA07ZoDmnLOJTvQsixboLsLjlgkSVKwI4wGxkGX7B+GLnnpuu75oQBpUXHB+76/AXxPV7IPIg1pAd5xTJMuemYYxssumCqRhrQ0k83mBEEwx8dHnCky0n8v6TviU7gROmOqqk6+B6nRAwswBkCbcYITQbRaM7RF/gnbVGxvk7ae0Cvc2THX8gWkF5UfonazuAAAAABJRU5ErkJggg==",alt:"Comment"})," ",i]})]})]})})}var $=i.b.div(W(),p.a.colorDesc),tt=n(15),et=n.n(tt),nt=n(19),at=Object(s.createContext)(),ct=function(t){var e=t.children,n=Object(s.useState)({}),a=Object(o.a)(n,2),r=a[0],i=a[1],j=Object(s.useState)({}),l=Object(o.a)(j,2),b=l[0],d=l[1];Object(s.useEffect)((function(){function t(){return(t=Object(nt.a)(et.a.mark((function t(){return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://celano-rest-api.herokuapp.com/products");case 2:t.sent.json().then((function(t){return i(t.products)})).catch((function(t){return console.log(t)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function t(){return(t=Object(nt.a)(et.a.mark((function t(){return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://602ca4e530ba720017223363.mockapi.io/Post");case 2:t.sent.json().then((function(t){return d(t)})).catch((function(t){return console.log(t)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var x={products:r,posts:b};return Object(c.jsx)(at.Provider,{value:x,children:e})};function st(){var t=Object(a.a)(["\n    .row-fb {\n        margin-left: -15px;\n        margin-right: -15px;\n    }\n"]);return st=function(){return t},t}function rt(){var t=Object(s.useContext)(at).posts;return Object(c.jsx)(it,{className:"pt-5 pb-5",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"heading-wrap text-center",children:[Object(c.jsx)(b.a,{tag:"h2",text:"Blog"}),Object(c.jsx)(b.a,{tag:"p",text:"Latest posts from blog",className:"text-upp mt-1"})]}),Object(c.jsx)("div",{className:"item-wrap mt-3",children:Object(c.jsx)("div",{className:"row-fb",children:t.length>0&&t.map((function(t,e){var n=t.title,a=t.author,s=t.desc,r=t.date,i=t.img,o=t.comments;return Object(c.jsx)(Z,{title:n,author:a,desc:s,date:r,img:i,comments:o},e)}))})})]})})}var it=i.b.section(st()),ot=n(66),jt=n(65),lt=n(56),bt=n.p+"static/media/men.dbc17504.jpg";function dt(){var t=Object(a.a)(["\n    h3 {\n        margin-bottom: 0.5rem;\n    }\n    .btn {\n        font-size: 14px;\n    }\n"]);return dt=function(){return t},t}function xt(){return Object(c.jsxs)(mt,{className:"col-fb-4",children:[Object(c.jsx)(b.a,{tag:"h3",className:"text-left text-capitalize",text:"Man"}),Object(c.jsx)(j.a,{className:"btn btn-primary smaller text-uppercase mb-2",text:"Popular products"}),Object(c.jsx)(f.a,{src:bt,alt:"Women",className:"mb-2"}),Object(c.jsxs)("div",{className:"row-fb",children:[Object(c.jsxs)("div",{className:"col-fb-6",children:[Object(c.jsx)(R,{tag:"p",text:"Jean"}),Object(c.jsx)(R,{tag:"p",text:"Shirt",className:"mt-1 mb-1"}),Object(c.jsx)(R,{tag:"p",text:"Dress"})]}),Object(c.jsxs)("div",{className:"col-fb-6",children:[Object(c.jsx)(R,{tag:"p",text:"Glass"}),Object(c.jsx)(R,{tag:"p",text:"Shoes",className:"mt-1 mb-1"}),Object(c.jsx)(R,{tag:"p",text:"Accessories"})]})]}),Object(c.jsx)(j.a,{className:"btn btn-secondary text-uppercase mt-2 w-100",text:"view all"})]})}var mt=i.b.div(dt());function pt(){var t=Object(a.a)(["\n\n"]);return pt=function(){return t},t}function ut(){var t=Object(s.useContext)(T.a),e=t.fetchHomeProductMan,n=t.man_products;return Object(s.useEffect)((function(){e()}),[]),Object(c.jsx)("section",{className:"mt-5 mb-5",children:Object(c.jsx)(Ot,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row-fb",children:[Object(c.jsx)("div",{className:"col-fb-8",children:Object(c.jsx)("div",{className:"pl-5",children:Object(c.jsx)("div",{className:"row-fb",children:n.length>0&&n.map((function(t,e){var n=t._id,a=t.name,s=t.price,r=t.image,i=t.colors,o=t.company,j=t.description,l=t.category,b=t.shipping,d=t.status,x=t.rating;return Object(c.jsx)(y,{id:n,name:a,status:d,price:s,image:r,rating:x,colors:i,company:o,description:j,category:l,shipping:b},e)}))})})}),Object(c.jsx)(xt,{})]})})})})}var Ot=i.b.div(pt());function ht(){var t=Object(a.a)(["\n  background-color: white;\n"]);return ht=function(){return t},t}function gt(){return Object(c.jsxs)(ft,{className:"home",children:[Object(c.jsxs)(ct,{children:[Object(c.jsx)(h,{}),Object(c.jsx)(_,{}),Object(c.jsx)(M,{}),Object(c.jsx)(ut,{}),Object(c.jsx)(F,{}),Object(c.jsx)(rt,{})]}),Object(c.jsxs)("div",{className:"container mb-5",children:[Object(c.jsx)(l.a,{className:"pt-2 pb-1",colorBorder:"#f0f0f0"}),Object(c.jsx)(ot.a,{}),Object(c.jsx)(l.a,{className:"pt-2 pb-1",colorBorder:"#f0f0f0"})]}),Object(c.jsx)(jt.a,{}),Object(c.jsxs)("div",{className:"container mb-3 mt-3",children:[Object(c.jsx)(lt.a,{}),Object(c.jsx)(l.a,{className:"pt-2 pb-1",colorBorder:"#f0f0f0"})]})]})}var ft=i.b.div(ht())}}]);
//# sourceMappingURL=9.89e2dc06.chunk.js.map