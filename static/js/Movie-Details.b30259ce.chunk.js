"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[242],{1730:function(n,t,e){e.d(t,{Cl:function(){return u},P4:function(){return c},z6:function(){return s}});var r=e(9439),a=e(2791),i=e(7689),o=e(8565),s=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],s=t[1],c=(0,i.UO)().movieId;return(0,a.useEffect)((function(){(0,o.BG)(c).then(s)}),[c]),e},c=function(){var n=(0,i.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),s=e[0],c=e[1];return(0,a.useEffect)((function(){(0,o.Pr)(n).then(c)}),[n]),s},u=function(){var n=(0,i.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),s=e[0],c=e[1];return(0,a.useEffect)((function(){(0,o.tM)(n).then(c)}),[n]),s}},5033:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,i,o,s,c,u,p,l=e(1730),f=e(7689),d=e(168),x=e(6444),h=e(1087),g=x.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  margin-top: 30px;\n  justify-content: center;\n  max-width: 1000px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 20px;\n  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;\n"]))),v=x.ZP.ul(a||(a=(0,d.Z)(["\n  list-style: none;\n  margin-left: 15px;\n  padding: 0;\n  display: flex;\n"]))),m=x.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-left: 30px;\n"]))),b=x.ZP.li(o||(o=(0,d.Z)(["\n  margin-bottom: 5px;\n  margin-right: 15px;\n  padding: 15px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n\n\n"]))),w=(0,x.ZP)(h.OL)(s||(s=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: orange;\n    \n  }\n\n  &:active {\n    color: orange;\n  }\n"]))),Z=x.ZP.div(c||(c=(0,d.Z)(["\n  border: 1px dotted black;\n  padding: 10px;\n"]))),j=x.ZP.h3(u||(u=(0,d.Z)(["\n  margin-top: 5px;\n  margin-bottom: 10px;\n"]))),k=x.ZP.button(p||(p=(0,d.Z)(["\n  margin-top: 15px;\n  margin-left: 15px;\n  padding: 15px;\n  cursor: pointer;\n  position: relative;\n  border: none;\n  background-color: transparent;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  box-sizing: border-box;\n  transition: all 500ms ease;\n  color: grey;\n\n  &:hover,\n  &:focus {\n    color: black;\n    font-weight: 800;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 0;\n    background: linear-gradient(\n      45deg,\n      rgb(255, 209, 125, 0.5) 18%,\n      rgb(255, 213, 221, 0.5),\n      rgb(220, 220, 220, 0.5) 77%\n    );\n    /* background: rgba(255,255,255,0.3); */\n    transition: all 500ms ease;\n  }\n\n  &:hover:before {\n    height: 100%;\n  }\n"]))),y=e(184),P=function(){var n=(0,l.z6)(),t=(0,f.s0)(),e=(0,f.TH)();return n&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onClick:function(){var n,r;t(null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Go Back"}),(0,y.jsxs)(g,{children:[(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:"300",height:"400"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("h2",{children:n.title}),(0,y.jsxs)("p",{children:[(0,y.jsx)("strong",{children:"User score:"})," ",Math.floor(10*n.vote_average),"%"]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("strong",{children:"Overview:"})," ",n.overview]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("strong",{children:"Genres: "}),n.genres?n.genres.map((function(n){return n.name})).join(", "):"No information"]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{children:"Additional Information"}),(0,y.jsx)("nav",{children:(0,y.jsxs)(v,{children:[(0,y.jsx)(b,{children:(0,y.jsx)(w,{to:"cast",state:e.state,children:"Cast"})}),(0,y.jsx)(b,{children:(0,y.jsx)(w,{to:"reviews",state:e.state,children:"Reviews"})})]})}),(0,y.jsx)(f.j3,{})]})]})]})]})}},8565:function(n,t,e){e.d(t,{BG:function(){return p},Pr:function(){return x},Pv:function(){return f},tM:function(){return g},wr:function(){return c}});var r=e(5861),a=e(7757),i=e.n(a),o=e(2388),s="a97041c864f8f3eafd5ecc2c5648e42c";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie",{params:{api_key:s,query:"".concat(t),page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=Movie-Details.b30259ce.chunk.js.map