(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{55:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e(2),a=e.n(i),c=e(24),o=e.n(c),u=e(4),s=e(5),d=e(35);function l(){var t=Object(s.a)(["\n    ","\n    html{\n        max-width: 100vw;\n        min-height: 100vh;\n        background-color: ","\n    }\n    body, html{\n        padding: 0;\n        margin: 0;\n    }\n"]);return l=function(){return t},t}var b=Object(u.b)(l(),d.a,(function(t){return t.theme.mainBackground})),p={dark:{mainBackground:"#333",opposite:"#ccc",title:"rgba(255,255,255,0.85)",disable:"rgba(255,255,255,0.25)",divider:"rgba(255,255,255,0.06)",tableHeader:"rgba(255,255,255,0.02)",default:{main:"rgba(255,255,255,0.04)",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"rgba(0,0,0,0.2)"},primary:{main:"rgba(255,255,255,0.8)",text:"rgba(0,0,0,0.65)",border:"rgba(255,255,255,0.15)",accent:"rgba(255,255,255,0.6)"},secondary:{main:"rgba(0,0,0,0.2)",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"rgba(255,255,255,0.6)"}},light:{mainBackground:"#fff",opposite:"#333",title:"rgba(0, 0, 0, 0.85)",disable:"rgba(0, 0, 0, 0.25)",divider:"rgba(0, 0, 0, 0.06)",tableHeader:"rgba(0, 0, 0, 0.02)",default:{main:"rgba(0, 0, 0, 0.01)",text:"rgba(0, 0, 0, 0.85)",border:"rgba(0, 0, 0, 0.5)",accent:"rgba(0, 0, 0, 0.6)"},primary:{main:"rgba(255,255,255,0.8)",text:"rgba(0, 0, 0, 1)",border:"rgba(0, 0, 0, 0.5)",accent:"rgba(0, 0, 0, 0.8)"},secondary:{main:"rgba(0,0,0,0.2)",text:"rgba(0, 0, 0, 0.75)",border:"rgba(0, 0, 0, 0.2)",accent:"rgba(0, 0, 0, 0.5)"}}},m=e(3),j=e(11),f=Object(j.b)({key:"themeState",default:"light"}),h=Object(j.c)({key:"toggleThemeState",get:function(t){return(0,t.get)(f)},set:function(t){var n=t.set,e=t.get;return n(f,"light"===e(f)?"dark":"light")}});function x(){var t=Object(s.a)(["\n    display: flex;\n    align-items: ",";\n    ",";\n    ","\n    ","\n    flex-direction: ",";\n    ","\n    ","\n\n    background-color: ",";\n    color: ",";\n"]);return x=function(){return t},t}var g=u.d.div(x(),(function(t){return t.alignItems||"center"}),(function(t){var n=t.left,e=t.right,r=t.justifyContent;return n||e?"":"justify-content: ".concat(r||"center",";")}),(function(t){return t.left?"justify-content: flex-start;":""}),(function(t){return t.right?"justify-content: flex-end;":""}),(function(t){return t.direction||"row"}),(function(t){var n=t.rowSpace;return n&&"& > *:nth-child(n+2){margin-left:".concat(n,"px;}")}),(function(t){var n=t.columnSpace;return n&&"& > *:nth-child(n+2){margin-top:".concat(n,"px;}")}),(function(t){var n=t.transparent,e=t.theme;return n?"transparent":e.default.main}),(function(t){return t.theme.default.text}));function O(){var t=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.5rem 0;\n    background: ",";\n    text-align: center;\n    font-weight: ",";\n    font-size: ",";\n\n    // \uc218\uc815 \ud544\uc694!\n    ","\n"]);return O=function(){return t},t}function v(){var t=Object(s.a)(["\n    /* This renders the buttons above... Edit me! */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n\n    // \uc218\uc815 \ud544\uc694!\n    ","\n"]);return v=function(){return t},t}var w=u.d.button(v(),(function(t){return t.fullWidth?"100%":"10rem"}),(function(t){return t.bold?"bold":"normal"}),(function(t){return t.fontSize+"px"||!1}),(function(t){var n=t.color,e=t.theme,r=n?e[n]:e.default;return"\n            background: ".concat(r.main,";\n            color: ").concat(r.text,";\n            border: thin solid ").concat(r.border,";\n            &:focus-within {\n                outline: ").concat(r.accent," auto thin;\n            }\n        ")})),k=u.d.a(O(),(function(t){return t.theme.mainBackground}),(function(t){return t.bold?"bold":"normal"}),(function(t){return t.fontSize+"px"||!1}),(function(t){var n=t.color,e=t.theme,r=n?e[n]:e.default;return"\n            color: ".concat(r.text,";\n            &:hover {\n                color: ").concat(r.accent,";\n            }\n        ")})),y=e(7),S=e(18);function q(){var t=Object(s.a)(["\n    opacity: 0;\n    z-index: 1;\n    border-radius: ","px;\n    width: ","px;\n    height: ","px;\n    &:checked + ",' {\n        background: #4fbe79;\n        &::after {\n        content: "";\n        display: block;\n        border-radius: 50%;\n        width:  ',"px;\n        height:  ","px;\n        margin-left:","px;\n        transition: 0.2s;\n    }\n}\n  "]);return q=function(){return t},t}function z(){var t=Object(s.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ","px;\n    height: ","px;\n    border-radius: ",'px;\n    background: #bebebe;\n    cursor: pointer;\n    &::after {\n        content: "";\n        display: block;\n        border-radius: 50%;\n        width:  ',"px;\n        height:  ","px;\n        margin: 3px;\n        background: #ffffff;\n        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n        transition: 0.2s;\n    }\n"]);return z=function(){return t},t}function _(){var t=Object(s.a)(["\nposition: relative;\n"]);return _=function(){return t},t}var C=function(t){var n=t.size,e=Object(S.a)(t,["size"]),i="checkbox_"+Math.random().toString(36).substr(6),a="md"===n?[60,30]:"lg"===n?[84,40]:[42,26],c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(r.jsxs)(E,{children:[Object(r.jsx)(D,Object(y.a)({id:i,type:"checkbox",w:o,r:u},e)),Object(r.jsx)(L,{htmlFor:i,w:o,r:u})]})},E=u.d.div(_()),L=u.d.label(z(),(function(t){return t.w}),(function(t){return t.r}),(function(t){return t.w-t.r}),(function(t){return t.r-6}),(function(t){return t.r-6})),D=u.d.input(q(),(function(t){return t.w-t.r}),(function(t){return t.w}),(function(t){return t.r}),L,(function(t){return t.r-6}),(function(t){return t.r-6}),(function(t){return t.w-t.r+3})),F=e(9);function B(){var t=Object(s.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 25%);\n"]);return B=function(){return t},t}function I(){var t=Object(s.a)(["\n    height: 55px;\n    padding: 5px 20px 5px 20px;\n    color: ",";\n    \n    display: grid;\n    grid-template-columns : 150px calc(100% - 370px) 180px;\n"]);return I=function(){return t},t}var M=u.d.header(I(),(function(t){return t.theme.default.text})),U=u.d.div(B()),T=function(){var t=Object(j.d)(h),n=Object(m.a)(t,2),e=n[0],i=n[1],a=Object(F.f)();return Object(r.jsxs)(M,{children:[Object(r.jsx)(k,{bold:!0,fontSize:40,onClick:function(){return a.push("/")},children:" Logo "}),Object(r.jsx)(g,{children:Object(r.jsx)(C,{size:"md",checked:"light"===e,onChange:function(){return i("")}})}),Object(r.jsxs)(U,{children:[Object(r.jsx)(k,{onClick:function(){return a.push("/search")},children:"\uac80\uc0c9"}),Object(r.jsx)(k,{children:"\uae00\uc4f0\uae30"}),Object(r.jsx)(k,{children:"\uc54c\ub9bc"}),Object(r.jsx)(k,{children:"\ud504\ub85c\ud544"})]})]})},H=e(15),W=Object(j.b)({key:"userState",default:null}),G=e(6),A=e.n(G),P=e(8);function J(){var t=Object(s.a)(["\n    margin: 0;\n    font-size: 1rem;\n    padding: 5px 10px;\n    width: auto;\n    border: none;\n    font-weight: bold;\n    border-radius: 10px;\n    box-shadow: 1px 1.5px 4px ",";\n    text-decoration: none;\n"]);return J=function(){return t},t}var Q=Object(u.d)(w)(J(),(function(t){return t.theme.default.border})),K=function(t){var n=t.name,e=Object(i.useState)(!1),a=Object(m.a)(e,2),c=a[0];a[1];return Object(r.jsx)(H.b,{to:"/tags/".concat(n),style:{textDecoration:"none"},children:Object(r.jsx)(Q,{children:c?"...":n})})};function R(){var t=Object(s.a)(["\n    width: auto;\n    padding: 5px;\n    background-color: transparent;\n    color: ",";\n    font-weight: ",";\n    font-size: ",";\n"]);return R=function(){return t},t}var V=Object(u.d)(g)(R(),(function(t){return t.color||""}),(function(t){return t.bold?"bold":"normal"}),(function(t){return t.fontSize+"px"||!1})),N=function(t){return Object(r.jsx)(V,Object(y.a)({fontSize:36,bold:!0,left:!0},t))},X=function(t){return Object(r.jsx)(V,Object(y.a)({fontSize:24,left:!0},t))},Y=function(t){return Object(r.jsx)(V,Object(y.a)({fontSize:21,left:!0},t))},Z=V;function $(){var t=Object(s.a)(["\n    padding: 10px;\n    margin: 10px;\n    size: ",";\n    width: ",";\n    height: ",";\n    background: ",";\n    border-color: ",";\n    border-radius: 3px;\n    color: ",";\n    &:focus{\n        outline-color: ",";\n    }\n    ::placeholder {\n        color: ",";\n    }\n"]);return $=function(){return t},t}var tt=u.d.input($(),(function(t){return t.size}),(function(t){var n=t.fullWidth,e=t.width;return n?"100%":e?e+"px":"10rem"}),(function(t){var n=t.height;return n?n+"px":""}),(function(t){return t.theme.default.main}),(function(t){return t.theme.default.border}),(function(t){return t.theme.default.text}),(function(t){return t.theme.default.accent}),(function(t){return t.theme.disable}));function nt(){var t=Object(s.a)(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "]);return nt=function(){return t},t}var et={giant:1920,huge:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},rt=Object.keys(et).reduce((function(t,n){var e=et[n]/16;return t[n]=function(t){return Object(u.c)(nt(),e,Object(u.c)(t))},t}),{});function it(){var t=Object(s.a)(["\n    display: grid;\n    width: 100%;\n    grid-template-columns: calc(100% - 150px) 150px;\n    padding: 0 10px;\n"]);return it=function(){return t},t}function at(){var t=Object(s.a)(["\n        display: none;\n    "]);return at=function(){return t},t}function ct(){var t=Object(s.a)(["\n    margin: 20px 0 40px 0;\n    width: min(920px, 100%);\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto 24px;\n    gap: 5px;\n    ","\n"]);return ct=function(){return t},t}var ot=u.d.div(ct(),rt.tablet(at())),ut=u.d.div(it()),st=function(){var t=Object(F.f)();return Object(r.jsxs)(ut,{children:[Object(r.jsxs)(g,{transparent:!0,left:!0,rowSpace:10,children:[Object(r.jsx)(Z,{bold:!0,children:" \uc778\uae30 \ud0dc\uadf8 \ubaa9\ub85d "}),Object(r.jsx)(K,{name:"python"}),Object(r.jsx)(K,{name:"javascript"}),Object(r.jsx)(K,{name:"react"}),Object(r.jsx)(K,{name:"c++"}),Object(r.jsx)(K,{name:"database"})]}),Object(r.jsx)(k,{bold:!0,onClick:function(){return t.push("/tags")},children:"\ud0dc\uadf8 \ub354\ubcf4\uae30"})]})},dt=function(t){var n=t.initialValue,e=Object(i.useState)(n||""),a=Object(m.a)(e,2),c=a[0],o=a[1],u=Object(F.f)();return Object(r.jsx)(g,{transparent:!0,children:Object(r.jsxs)(ot,{children:[Object(r.jsx)(g,{transparent:!0,children:Object(r.jsx)(tt,{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694...",fullWidth:!0,height:50,style:{fontSize:24},value:c,onChange:function(t){var n=t.target.value;return o(n)},onKeyPress:function(t){return 13===t.which&&u.push("/search/".concat(c))}})}),Object(r.jsx)(st,{})]})})},lt=e(39),bt=e(29);function pt(){var t=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 50px auto;\n    gap: 10px;\n"]);return pt=function(){return t},t}function mt(){var t=Object(s.a)(["\n    background-color: #ddd;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin: 2.5px;\n"]);return mt=function(){return t},t}function jt(){var t=Object(s.a)(["\n    grid-area: img; \n    width: 100%;\n    height: 100%;\n"]);return jt=function(){return t},t}function ft(){var t=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 5px;\n    & > *:nth-child(n+2){\n        margin-left: 10px\n    }\n"]);return ft=function(){return t},t}function ht(){var t=Object(s.a)(['\n        grid-template-rows: 200px 40px 60px 16px 55px;\n        grid-template-areas: \n            "img img"\n            "title title"\n            "contents contents"\n            "info info"\n            "author likes";\n        & > div:first-child{display:none;}\n    ']);return ht=function(){return t},t}function xt(){var t=Object(s.a)(['\n    display: grid;\n    grid-template-rows: 40px 40px 60px 16px 55px;\n    grid-template-columns: 70% 30%;\n    grid-template-areas: \n        "tags tags"\n        "title img"\n        "contents img"\n        "info img"\n        "author likes";\n    & > div:first-child{grid-area:tags;}\n    & > div:nth-child(2){grid-area:img;}\n    & > div:nth-child(3){grid-area:title;}\n    & > div:nth-child(4){grid-area:contents;}\n    & > div:nth-child(5){grid-area:info;}\n    & > div:nth-child(6){grid-area:author;}\n    & > div:nth-child(7){grid-area:likes;}\n    max-width: 100%;\n    box-shadow: 2px 2px 10px grey;\n    padding: 10px 10px 5px 10px;\n    ',"\n"]);return xt=function(){return t},t}var gt=u.d.div(xt(),rt.phone(ht())),Ot=u.d.div(ft()),vt=u.d.img(jt()),wt=u.d.img(mt()),kt=u.d.div(pt()),yt=function(t){var n=Object(F.f)(),e=t.tags,i=t.title,a=t.content,c=t.thumbnail,o=t.timestamp,u=t.author,s=t.likes,d=t.comments;return Object(r.jsxs)(gt,{children:[Object(r.jsx)(Ot,{children:e.map((function(t){return Object(r.jsx)(K,{name:t},t)}))}),Object(r.jsx)(vt,{src:c,alt:"img"}),Object(r.jsx)(Z,{bold:!0,left:!0,fontSize:21,children:i}),Object(r.jsx)(Z,{children:a.length>150?a.slice(0,150)+"...":a}),Object(r.jsxs)(Z,{left:!0,bold:!0,children:[o," \xa0 \xa0",Object(r.jsx)(bt.a,{})," \xa0 ",d]}),Object(r.jsxs)(kt,{children:[Object(r.jsx)(wt,{onClick:function(){return n.push("/@".concat(u))}}),Object(r.jsx)(Z,{bold:!0,left:!0,children:u})]}),Object(r.jsxs)(g,{transparent:!0,right:!0,children:[Object(r.jsx)(lt.a,{size:20})," \xa0",Object(r.jsxs)(Z,{bold:!0,children:[" ",s," "]})," \xa0"]})]})},St=function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{topic:n,posts:[{tags:["python","javascript","react","es6"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:20,likes:51},{tags:["c++","javascript"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:10,likes:15},{tags:["maching learning","python"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:6,likes:5},{tags:["database"],title:"MySQL",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:62,likes:25}]});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function qt(){var t=Object(s.a)(['\n        grid-template-columns: 1fr;\n        grid-template-areas: \n        "title"\n        "a"\n        "b"\n        "c"\n        "d";\n    ']);return qt=function(){return t},t}function zt(){var t=Object(s.a)(['\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n        "title title"\n        "a b"\n        "c d";\n    ',"\n    & > div:first-child {\n        grid-area: title;\n        height: 30px;\n        margin-bottom: -20px;\n    }\n    gap: 30px;\n"]);return zt=function(){return t},t}var _t=u.d.div(zt(),rt.desktop(qt())),Ct=function(t){var n=t.title,e=Object(i.useState)(!0),a=Object(m.a)(e,2),c=a[0],o=a[1],u=Object(i.useState)([]),s=Object(m.a)(u,2),d=s[0],l=s[1];return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St(n);case 2:e=t.sent,l(e.posts),o(!1);case 5:case"end":return t.stop()}}),t)})))()}),[]),Object(r.jsx)(g,{transparent:!0,children:Object(r.jsxs)(_t,{children:[Object(r.jsx)(Z,{justifyContent:"flex-start",bold:!0,fontSize:24,children:n}),c?Object(r.jsx)(r.Fragment,{children:"Loading..."}):d.map((function(t,n){return Object(r.jsx)(yt,Object(y.a)({},t),n)}))]})})};function Et(){var t=Object(s.a)(["\n    & > *:nth-child(n+3){margin-top:30px;}\n"]);return Et=function(){return t},t}var Lt=u.d.div(Et()),Dt=function(){var t=Object(i.useState)(!0),n=Object(m.a)(t,2),e=(n[0],n[1],Object(j.d)(W)),a=Object(m.a)(e,2);a[0],a[1];return Object(r.jsxs)(Lt,{children:[Object(r.jsx)(dt,{}),Object(r.jsx)(Ct,{title:"\uc694\uc998 \ub728\ub294 \ud2b8\ub80c\ub4dc"}),Object(r.jsx)(Ct,{title:"\ucd5c\uc2e0 \ud3ec\uc2a4\ud2b8"})]})},Ft=function(){var t=Object(i.useState)(!0),n=Object(m.a)(t,2),e=n[0],a=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(g,{children:["Buttons",Object(r.jsx)(w,{color:"primary",onClick:function(){alert("hello!")},children:"Primary"}),Object(r.jsx)(w,{color:"secondary",children:"Secondary"}),Object(r.jsx)(w,{children:"default"})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)(g,{children:["Text Field",Object(r.jsx)(tt,{placeholder:"hello",size:100})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)(g,{children:[Object(r.jsx)(g,{children:"Switch"}),Object(r.jsx)(C,{}),Object(r.jsx)(C,{size:"md",checked:!e,onChange:function(){return a((function(t){return!t}))}}),Object(r.jsx)(C,{size:"lg"})]})]})},Bt=function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{keyword:n,results:[{tags:["python","javascript","react","es6"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:20,likes:51},{tags:["aa","bb"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:10,likes:15},{tags:["aa","bb"],title:"Lorem ipsum",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n                officia deserunt mollit anim id est laborum.",thumbnail:"https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018082719141105121dd55077bc212323473.jpg",timestamp:"2021-01-20",author:"swimmie",comments:6,likes:5}]});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),It=function(t){var n=t.match.params.keyword,e=Object(i.useState)({keyword:n,results:[]}),a=Object(m.a)(e,2),c=(a[0].results,a[1]);return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Bt(n);case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dt,{}),Object(r.jsxs)(g,{transparent:!0,direction:"row",left:!0,rowSpace:30,children:[Object(r.jsx)(k,{bold:!0,children:"\ud3ec\uc2a4\ud2b8"}),Object(r.jsx)(k,{bold:!0,children:"\uc9c8\ubb38\uac8c\uc2dc\ud310"})]})]})},Mt=function(){return Object(r.jsx)(r.Fragment,{children:"Tags List"})},Ut=function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{name:n,posts:10});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function Tt(){var t=Object(s.a)(["\n        grid-template-columns: 1fr;\n    "]);return Tt=function(){return t},t}function Ht(){var t=Object(s.a)(["\n    display: grid;\n    gap:30px;\n    grid-template-columns: 1fr 1fr;\n    ","\n"]);return Ht=function(){return t},t}function Wt(){var t=Object(s.a)(["\n    margin-bottom: 45px;\n    & > * :first-child{\n        margin-bottom: 35px;\n    }\n    & > * :nth-child(2){\n        margin-bottom: 22px;\n    }\n\n"]);return Wt=function(){return t},t}function Gt(){var t=Object(s.a)(["\n    width: min(100%, 1470px);\n"]);return Gt=function(){return t},t}u.d.div(Gt());var At=u.d.div(Wt()),Pt=u.d.div(Ht(),rt.tablet(Tt())),Jt=function(t){var n=t.match.params.id,e=Object(i.useState)({name:"",posts:0}),a=Object(m.a)(e,2),c=a[0],o=c.name,u=c.posts,s=a[1];return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ut(n);case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})))()}),[n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(At,{children:[Object(r.jsxs)(Z,{fontSize:48,left:!0,bold:!0,children:["#",o," "]}),Object(r.jsx)(Z,{fontSize:21,left:!0,children:"\ud0dc\uadf8\ub0b4\uc6a9 \uc124\uba85 "}),Object(r.jsx)(Z,{fontSize:16,left:!0,children:u?Object(r.jsxs)(r.Fragment,{children:[u,"\uac1c\uc758 \ud3ec\uc2a4\ud2b8 "]}):"\ud3ec\uc2a4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(r.jsx)(Pt,{})]})},Qt=function(t){var n=t.match.params.id;return Object(r.jsx)(r.Fragment,{children:n})},Kt=function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{id:n,author:"Admin",title:"How to be a good programmer?",question:"\uc54c\ub824\uc8fc\uc138\uc694...",likes:120,views:3902,comments:3});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),Rt=e(40),Vt=e(41),Nt=function(t){var n=t.value,e=Object(S.a)(t,["value"]),i=n,a="";return n>1e9?(a="b",i=Math.floor(n/1e8)/10):n>1e6?(a="m",i=Math.floor(n/1e5)/10):n>1e3&&(a="k",i=Math.floor(n/100)/10),Object(r.jsxs)(Z,Object(y.a)(Object(y.a)({},e),{},{children:[" ",i+a," "]}))};function Xt(){var t=Object(s.a)(['\n    display: grid;\n    grid-template-areas: \n        "t t"\n        "s s"\n        "tags info";\n    grid-template-columns: calc(100% - 150px);\n    grid-template-rows: 35% 35% 30%;\n    & > *:first-child{grid-area: t}\n    & > *:nth-child(2){grid-area: s}\n']);return Xt=function(){return t},t}function Yt(){var t=Object(s.a)(["\n    display: grid;\n    padding-right:10px;\n    grid-template-columns: repeat(3, 33.33%);\n"]);return Yt=function(){return t},t}function Zt(){var t=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 30% 70%;\n    max-width: 100%;\n    box-shadow: 2px 2px 10px grey;\n    padding: 10px;\n    min-height: 144px;\n    text-decoration:none;\n"]);return Zt=function(){return t},t}var $t=Object(u.d)(H.b)(Zt()),tn=u.d.div(Yt()),nn=u.d.div(Xt()),en=function(t){var n=t.Icon,e=t.value;return Object(r.jsxs)(g,{transparent:!0,direction:"column",children:[Object(r.jsx)(Nt,{fontSize:24,value:e}),Object(r.jsx)(n,{size:30})]})},rn=function(t){var n=t.id,e=t.author,i=t.title,a=t.question,c=t.likes,o=t.views,u=t.comments;return Object(r.jsxs)($t,{to:"/questions/".concat(n),children:[Object(r.jsxs)(tn,{children:[Object(r.jsx)(en,{Icon:bt.b,value:c}),Object(r.jsx)(en,{Icon:Rt.a,value:u}),Object(r.jsx)(en,{Icon:Vt.a,value:o})]}),Object(r.jsxs)(nn,{children:[Object(r.jsx)(Z,{left:!0,bold:!0,children:i}),Object(r.jsx)(Z,{left:!0,children:a}),Object(r.jsxs)(g,{left:!0,transparent:!0,rowSpace:10,children:[Object(r.jsx)(K,{name:"Hello World!"}),Object(r.jsx)(K,{name:"C++"})]}),Object(r.jsx)(Z,{children:e})]})]})};function an(){var t=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n"]);return an=function(){return t},t}var cn=u.d.div(an()),on=function(){var t=Object(i.useState)([]),n=Object(m.a)(t,2),e=n[0],a=n[1];return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(["a1","b222","c33"].map(function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Kt(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()));case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dt,{}),Object(r.jsx)(cn,{children:e.map((function(t,n){return Object(r.jsx)(rn,Object(y.a)({},t),n)}))})]})},un=function(){return Object(r.jsx)(dt,{})},sn=function(){var t=Object(P.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{id:n,created_at:(new Date).toString(),updated_at:(new Date).toString(),username:"Admin",bio:"string",about:"Hello Everyone! Welcome!",avatar:"https://t1.daumcdn.net/cfile/tistory/99B97B505CEB7FD712",social_links:{},user:{id:n,created_at:(new Date).toString(),updated_at:(new Date).toString(),provider:"github",social_id:"string",email:"string",is_verified:!0}});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),dn=function(){return Object(r.jsx)(g,{children:"\uc790\uae30\uc18c\uac1c"})},ln=e(23),bn=function(){var t=Object(i.useState)(!0),n=Object(m.a)(t,2),e=n[0],a=n[1],c=Object(i.useState)([]),o=Object(m.a)(c,2),u=o[0],s=o[1];return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St("");case 2:n=t.sent,s(n.posts),a(!1);case 5:case"end":return t.stop()}}),t)})))()}),[]),Object(r.jsx)(g,{direction:"column",columnSpace:30,children:e?Object(r.jsx)(r.Fragment,{children:"Loading..."}):[].concat(Object(ln.a)(u),Object(ln.a)(u)).map((function(t,n){return Object(r.jsx)(yt,Object(y.a)({},t),n)}))})},pn=function(){return Object(r.jsx)(g,{children:"\uc2dc\ub9ac\uc988"})},mn=e(42);function jn(){var t=Object(s.a)(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n"]);return jn=function(){return t},t}var fn=A.a.mark(hn);function hn(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=["#ffd1d1","#ffffaa","#ff3377","#44aaff","#6666ff","#f9ac82","#596666"];case 2:return e.next=5,n[t];case 5:++t>=n.length&&(t%=n.length),e.next=2;break;case 9:case"end":return e.stop()}}),fn)}var xn=u.d.div(jn()),gn=function t(n){var e=n.items,i=n.width,a=n.height,c=n.colorGenerator;if(!e.length)return Object(r.jsx)(r.Fragment,{});if(1===e.length)return Object(r.jsx)(Z,{bold:!0,style:{padding:0,width:"100%",height:"100%",background:c()},children:e[0].name});for(var o=e.reduce((function(t,n){return t+n.score}),0),u=0,s=0;s<e.length&&!((u+=e[s].score)>=o/2);s++);var d=[e.slice(0,s+1),e.slice(s+1,e.length)],l=d[0],b=d[1],p=Math.floor(100*u/o),m=i>a?{gridTemplateRows:"".concat(p,"% ").concat(100-p,"%")}:{gridTemplateColumns:"".concat(p,"% ").concat(100-p,"%")},j={items:l,width:i,height:a*p/100},f={items:b,width:i,height:a*(100-p)/100};return i>a&&(j={items:l,width:i*p/100,height:a},f={items:b,width:i*(100-p)/100,height:a}),console.log(i,a),Object(r.jsxs)(xn,{style:m,children:[Object(r.jsx)(t,Object(y.a)({colorGenerator:c},j)),Object(r.jsx)(t,Object(y.a)({colorGenerator:c},f))]})},On=function(){var t=Object(mn.a)(),n=t.ref,e=t.width,a=Object(i.useState)(0),c=Object(m.a)(a,2),o=c[0],u=c[1];Object(i.useEffect)((function(){u(Math.min(e,400))}),[e]);var s=Object(i.useState)({javascript:804,python:490,react:1305,graphQL:200,"c++":180,ml:120}),d=Object(m.a)(s,2),l=d[0],b=(d[1],Object(i.useState)([])),p=Object(m.a)(b,2),j=p[0],f=p[1];Object(i.useEffect)((function(){var t=Object.entries(l).map((function(t){var n=Object(m.a)(t,2);return{name:n[0],score:n[1]}})).sort((function(t,n){return n.score-t.score}));f(t)}),[l]);var h=hn();return Object(r.jsx)(g,{transparent:!0,style:{width:"100%"},ref:n,children:Object(r.jsx)("div",{style:{width:o,height:o},children:Object(r.jsx)(gn,{items:j,width:o,height:o,colorGenerator:function(){return h.next().value||"white"}})})})};function vn(){var t=Object(s.a)(["\n    display: grid;\n    width: 100%;\n    grid-template-columns: 30% 70%;\n"]);return vn=function(){return t},t}function wn(){var t=Object(s.a)(["\n    background-color: ",";\n    width: calc(100% - 40px);\n    margin: 0 20px;\n    padding: 10px;\n    word-wrap: break-word;\n    min-height: 50px;\n"]);return wn=function(){return t},t}function kn(){var t=Object(s.a)(["\n    display: grid;\n    margin-bottom: 60px;\n    width: max(75%, 360px);\n    grid-template-columns: repeat(4, 1fr);\n"]);return kn=function(){return t},t}function yn(){var t=Object(s.a)(["\n    grid-area: img; \n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n"]);return yn=function(){return t},t}function Sn(){var t=Object(s.a)(['\n    display: grid;\n    margin: 25px 0 80px 0;\n    height: 150px;\n    grid-template-columns: 150px auto;\n    grid-template-rows: 60% 40%;\n    column-gap: 20px;\n    grid-template-areas:\n        "img name"\n        "img followers";\n']);return Sn=function(){return t},t}function qn(){var t=Object(s.a)(["\n        grid-template-columns: 100%;\n        gap: 30px;\n    "]);return qn=function(){return t},t}function zn(){var t=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 480px auto;\n    ","\n"]);return zn=function(){return t},t}var _n=u.d.div(zn(),rt.tablet(qn())),Cn=u.d.div(Sn()),En=u.d.img(yn()),Ln=u.d.div(kn()),Dn=function(t){var n=t.title,e=t.value;return Object(r.jsxs)(g,{transparent:!0,direction:"column",children:[Object(r.jsx)(X,{children:n}),Object(r.jsx)(Nt,{fontSize:24,value:e})]})},Fn=Object(u.d)(g)(wn(),(function(t){return t.theme.mainBackground})),Bn=(u.d.div(vn()),function(t){var n=t.match.params.id,e=Object(i.useState)(0),a=Object(m.a)(e,2),c=a[0],o=a[1],u=Object(i.useState)({id:n,created_at:"",updated_at:"",username:"",bio:"",about:"",avatar:"",social_links:{},user:{id:n,created_at:"",updated_at:"",provider:"google",social_id:"",email:"",is_verified:!1}}),s=Object(m.a)(u,2),d=s[0],l=d.username,b=d.avatar,p=d.bio,j=d.about,f=s[1];return Object(i.useEffect)((function(){Object(P.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sn(n);case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})))()}),[n]),Object(r.jsxs)(_n,{children:[Object(r.jsxs)(g,{direction:"column",justifyContent:"flex-start",children:[Object(r.jsxs)(Cn,{children:[Object(r.jsx)(En,{src:b}),Object(r.jsx)(N,{alignItems:"flex-end",children:l}),Object(r.jsx)(Y,{alignItems:"flex-start",children:p})]}),Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Dn,{title:"\ud314\ub85c\uc6cc",value:300}),Object(r.jsx)(Dn,{title:"\ud314\ub85c\uc789",value:19}),Object(r.jsx)(Dn,{title:"\ud3ec\uc2a4\ud2b8",value:30}),Object(r.jsx)(Dn,{title:"\uc2a4\ucf54\uc5b4",value:348e3})]}),Object(r.jsx)(Fn,{alignItems:"flex-start",left:!0,children:j}),Object(r.jsxs)(g,{style:{width:"100%"},transparent:!0,left:!0,children:[Object(r.jsx)(X,{bold:!0,children:"A"}),Object(r.jsx)(X,{bold:!0,children:"B"}),Object(r.jsx)(X,{bold:!0,children:"C"}),Object(r.jsx)(X,{bold:!0,children:"D"})]}),Object(r.jsx)(On,{})]}),Object(r.jsxs)(g,{transparent:!0,direction:"column",justifyContent:"flex-start",columnSpace:30,children:[Object(r.jsxs)(g,{transparent:!0,rowSpace:50,children:[Object(r.jsx)(k,{fontSize:24,onClick:function(){return o(0)},children:" \uae00"}),Object(r.jsx)(k,{fontSize:24,onClick:function(){return o(1)},children:" \uc2dc\ub9ac\uc988 "}),Object(r.jsx)(k,{fontSize:24,onClick:function(){return o(2)},children:" \uc790\uae30\uc18c\uac1c "})]}),0===c?Object(r.jsx)(bn,{}):1===c?Object(r.jsx)(pn,{}):Object(r.jsx)(dn,{})]})]})});function In(){var t=Object(s.a)(["\n    width:min(1470px, calc(100% - 30px));\n    padding: 20px 0 40px 0;\n"]);return In=function(){return t},t}var Mn=u.d.div(In()),Un=function(){return Object(r.jsxs)(H.a,{children:[Object(r.jsx)(T,{}),Object(r.jsx)(g,{transparent:!0,children:Object(r.jsx)(Mn,{children:Object(r.jsxs)(F.c,{children:[Object(r.jsx)(F.a,{path:"/playground",exact:!0,component:Ft}),Object(r.jsx)(F.a,{path:"/",exact:!0,component:Dt}),Object(r.jsx)(F.a,{path:"/@:id",component:Bn}),Object(r.jsx)(F.a,{exact:!0,path:"/search",component:un}),Object(r.jsx)(F.a,{path:"/search/:keyword",component:It}),Object(r.jsx)(F.a,{exact:!0,path:"/tags",component:Mt}),Object(r.jsx)(F.a,{path:"/tags/:id",component:Jt}),Object(r.jsx)(F.a,{exact:!0,path:"/questions",component:on}),Object(r.jsx)(F.a,{path:"/questions/:id",component:Qt})]})})})]})};var Tn=function(){var t="light"===Object(j.e)(f)?p.light:p.dark;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{theme:t}),Object(r.jsx)(u.a,{theme:t,children:Object(r.jsx)(Un,{})})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j.a,{children:Object(r.jsx)(Tn,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.9987d573.chunk.js.map