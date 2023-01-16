"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{7047:function(n,t,e){e.d(t,{e:function(){return v}});var r,a,i,c,o,p=e(168),s=e(6444),u=e(1087),f=s.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 200px);\n  gap: 10px;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(auto-fill, 220px);\n    gap: 30px 30px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(auto-fill, 250px);\n    gap: 40px 30px;\n  }\n"]))),d=s.ZP.li(a||(a=(0,p.Z)(["\n  &:hover,\n  &:focus {\n    box-shadow: 20px 20px 60px orange, -20px -20px 60px pink;\n  }\n\n  &:hover H2,\n  &:focus H2 {\n    color: orange;\n  }\n"]))),x=(0,s.ZP)(u.rU)(i||(i=(0,p.Z)(["\n  text-decoration: none;\n"]))),m=s.ZP.img(c||(c=(0,p.Z)(["\n  width: 100%;\n  flex-grow: 1;\n"]))),l=s.ZP.h2(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 11px;\n  max-width: fit-content;\n  text-align: center;\n  color: white;\n  padding: 13px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 12px;\n    padding: 15px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    font-size: 14px;\n    padding: 15px;\n  }\n"]))),h=e(2682),g=e(7689),w=e(184),v=function(n){var t=n.movies,e=(0,g.TH)();return(0,w.jsx)(f,{children:t.map((function(n){var t=n.title,r=n.id,a=n.poster_path;return(0,w.jsx)(d,{children:(0,w.jsxs)(x,{to:"/movies/".concat(r),state:{from:e},children:[(0,w.jsx)(m,{src:null===a?h:"https://image.tmdb.org/t/p/w500".concat(a),alt:t}),(0,w.jsx)(l,{children:t})]})},r)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a=e(9439),i=e(2791),c=e(8565),o=e(168),p=e(6444).ZP.h1(r||(r=(0,o.Z)(["\n  margin-bottom: 20px;\n  /* margin-left: 55px; */\n  font-size: 20px;\n  font-weight: 400;\n  color: orange;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 30px;\n    /* margin-left: 115px; */\n    font-size: 25px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-bottom: 35px;\n    margin-left: 115px;\n    text-align: left;\n    font-size: 25px;\n  }\n"]))),s=e(7047),u=e(184),f=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,i.useEffect)((function(){(0,c.wr)().then(r)}),[]),e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{children:"Trending today"}),(0,u.jsx)(s.e,{movies:e})]})}},8565:function(n,t,e){e.d(t,{BG:function(){return u},Pr:function(){return m},Pv:function(){return d},tM:function(){return h},wr:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),c=e(2388),o="a97041c864f8f3eafd5ecc2c5648e42c";function p(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day",{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t),{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie",{params:{api_key:o,query:"".concat(t),page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t,"/credits"),{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"},2682:function(n,t,e){n.exports=e.p+"static/media/image-not-found.9b82276c5760c55b592e.webp"}}]);
//# sourceMappingURL=Home.e3bc3ee4.chunk.js.map