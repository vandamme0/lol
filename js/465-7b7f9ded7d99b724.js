"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{97903:function(e,t){var n=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},r=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};t.Z={p:r,P:function(e,t){var o,a=e.match(/(P+)(p+)?/)||[],i=a[1],u=a[2];if(!u)return n(e,t);switch(i){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",n(i,t)).replace("{{time}}",r(u,t))}}},16405:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(40880),o=n(8219),a=n(6925),i=n(34006);function u(e){(0,i.Z)(1,arguments);var t=(0,r.default)(e);return Math.round(((0,o.Z)(t).getTime()-(function(e){(0,i.Z)(1,arguments);var t=(0,a.Z)(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),(0,o.Z)(n)})(t).getTime())/6048e5)+1}},6925:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(40880),o=n(34006),a=n(8219);function i(e){(0,o.Z)(1,arguments);var t=(0,r.default)(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var u=(0,a.Z)(i),c=new Date(0);c.setUTCFullYear(n,0,4),c.setUTCHours(0,0,0,0);var d=(0,a.Z)(c);return t.getTime()>=u.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}},63869:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(40880),o=n(50362),a=n(626),i=n(34006),u=n(69855),c=n(17318);function d(e,t){(0,i.Z)(1,arguments);var n=(0,r.default)(e);return Math.round(((0,o.Z)(n,t).getTime()-(function(e,t){(0,i.Z)(1,arguments);var n,r,d,l,s,f,h,v,g=(0,c.j)(),m=(0,u.Z)(null!==(n=null!==(r=null!==(d=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t?void 0:null===(s=t.locale)||void 0===s?void 0:null===(f=s.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:g.firstWeekContainsDate)&&void 0!==r?r:null===(h=g.locale)||void 0===h?void 0:null===(v=h.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==n?n:1),w=(0,a.Z)(e,t),p=new Date(0);return p.setUTCFullYear(w,0,m),p.setUTCHours(0,0,0,0),(0,o.Z)(p,t)})(n,t).getTime())/6048e5)+1}},626:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(40880),o=n(34006),a=n(50362),i=n(69855),u=n(17318);function c(e,t){(0,o.Z)(1,arguments);var n,c,d,l,s,f,h,v,g=(0,r.default)(e),m=g.getUTCFullYear(),w=(0,u.j)(),p=(0,i.Z)(null!==(n=null!==(c=null!==(d=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t?void 0:null===(s=t.locale)||void 0===s?void 0:null===(f=s.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:w.firstWeekContainsDate)&&void 0!==c?c:null===(h=w.locale)||void 0===h?void 0:null===(v=h.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var C=new Date(0);C.setUTCFullYear(m+1,0,p),C.setUTCHours(0,0,0,0);var b=(0,a.Z)(C,t),T=new Date(0);T.setUTCFullYear(m,0,p),T.setUTCHours(0,0,0,0);var y=(0,a.Z)(T,t);return g.getTime()>=b.getTime()?m+1:g.getTime()>=y.getTime()?m:m-1}},69150:function(e,t,n){n.d(t,{Do:function(){return i},Iu:function(){return a},qp:function(){return u}});var r=["D","DD"],o=["YY","YYYY"];function a(e){return -1!==r.indexOf(e)}function i(e){return -1!==o.indexOf(e)}function u(e,t,n){if("YYYY"===e)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}},8219:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(40880),o=n(34006);function a(e){(0,o.Z)(1,arguments);var t=(0,r.default)(e),n=t.getUTCDay();return t.setUTCDate(t.getUTCDate()-((n<1?7:0)+n-1)),t.setUTCHours(0,0,0,0),t}},50362:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(40880),o=n(34006),a=n(69855),i=n(17318);function u(e,t){(0,o.Z)(1,arguments);var n,u,c,d,l,s,f,h,v=(0,i.j)(),g=(0,a.Z)(null!==(n=null!==(u=null!==(c=null!==(d=null==t?void 0:t.weekStartsOn)&&void 0!==d?d:null==t?void 0:null===(l=t.locale)||void 0===l?void 0:null===(s=l.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==c?c:v.weekStartsOn)&&void 0!==u?u:null===(f=v.locale)||void 0===f?void 0:null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=(0,r.default)(e),w=m.getUTCDay();return m.setUTCDate(m.getUTCDate()-((w<g?7:0)+w-g)),m.setUTCHours(0,0,0,0),m}},69855:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},65828:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(69855),o=n(40880),a=n(34006);function i(e,t){return(0,a.Z)(2,arguments),new Date((0,o.default)(e).getTime()+(0,r.Z)(t))}},52368:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(394),o=n(35795),a=n(40880),i=n(34006),u=n(16405),c=n(6925),d=n(63869),l=n(626);function s(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return(e<0?"-":"")+n}var f={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return s("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):s(n+1,2)},d:function(e,t){return s(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return s(e.getUTCHours()%12||12,t.length)},H:function(e,t){return s(e.getUTCHours(),t.length)},m:function(e,t){return s(e.getUTCMinutes(),t.length)},s:function(e,t){return s(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length;return s(Math.floor(e.getUTCMilliseconds()*Math.pow(10,n-3)),t.length)}},h={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};function v(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+(t||"")+s(a,2)}function g(e,t){return e%60==0?(e>0?"-":"+")+s(Math.abs(e)/60,2):m(e,t)}function m(e,t){var n=Math.abs(e);return(e>0?"-":"+")+s(Math.floor(n/60),2)+(t||"")+s(n%60,2)}var w={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return f.y(e,t)},Y:function(e,t,n,r){var o=(0,l.Z)(e,r),a=o>0?o:1-o;return"YY"===t?s(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):s(a,t.length)},R:function(e,t){return s((0,c.Z)(e),t.length)},u:function(e,t){return s(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return f.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var o=(0,d.Z)(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):s(o,t.length)},I:function(e,t,n){var r=(0,u.Z)(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):f.d(e,t)},D:function(e,t,n){var r=function(e){(0,i.Z)(1,arguments);var t=(0,a.default)(e),n=t.getTime();return t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0),Math.floor((n-t.getTime())/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return s(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return s(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return s(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?h.noon:0===o?h.midnight:o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?h.evening:o>=12?h.afternoon:o>=4?h.morning:h.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return f.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):f.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return(0===r&&(r=24),"ko"===t)?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):f.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):f.s(e,t)},S:function(e,t){return f.S(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return g(o);case"XXXX":case"XX":return m(o);default:return m(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return g(o);case"xxxx":case"xx":return m(o);default:return m(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+v(o,":");default:return"GMT"+m(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+v(o,":");default:return"GMT"+m(o,":")}},t:function(e,t,n,r){return s(Math.floor((r._originalDate||e).getTime()/1e3),t.length)},T:function(e,t,n,r){return s((r._originalDate||e).getTime(),t.length)}},p=n(97903),C=n(1018),b=n(69150),T=n(69855),y=n(17318),D=n(56876),E=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,x=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,U=/^'([^]*?)'?$/,M=/''/g,Z=/[a-zA-Z]/;function k(e,t,n){(0,i.Z)(2,arguments);var u,c,d,l,s,f,h,v,g,m,k,S,P,O,H,Y,N,R,L=String(t),_=(0,y.j)(),q=null!==(u=null!==(c=null==n?void 0:n.locale)&&void 0!==c?c:_.locale)&&void 0!==u?u:D.Z,F=(0,T.Z)(null!==(d=null!==(l=null!==(s=null!==(f=null==n?void 0:n.firstWeekContainsDate)&&void 0!==f?f:null==n?void 0:null===(h=n.locale)||void 0===h?void 0:null===(v=h.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==s?s:_.firstWeekContainsDate)&&void 0!==l?l:null===(g=_.locale)||void 0===g?void 0:null===(m=g.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==d?d:1);if(!(F>=1&&F<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=(0,T.Z)(null!==(k=null!==(S=null!==(P=null!==(O=null==n?void 0:n.weekStartsOn)&&void 0!==O?O:null==n?void 0:null===(H=n.locale)||void 0===H?void 0:null===(Y=H.options)||void 0===Y?void 0:Y.weekStartsOn)&&void 0!==P?P:_.weekStartsOn)&&void 0!==S?S:null===(N=_.locale)||void 0===N?void 0:null===(R=N.options)||void 0===R?void 0:R.weekStartsOn)&&void 0!==k?k:0);if(!(W>=0&&W<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw RangeError("locale must contain localize property");if(!q.formatLong)throw RangeError("locale must contain formatLong property");var z=(0,a.default)(e);if(!(0,r.default)(z))throw RangeError("Invalid time value");var G=(0,C.Z)(z),B=(0,o.Z)(z,G),Q={firstWeekContainsDate:F,weekStartsOn:W,locale:q,_originalDate:z};return L.match(x).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,p.Z[t])(e,q.formatLong):e}).join("").match(E).map(function(r){if("''"===r)return"'";var o,a=r[0];if("'"===a)return(o=r.match(U))?o[1].replace(M,"'"):r;var i=w[a];if(i)return!(null!=n&&n.useAdditionalWeekYearTokens)&&(0,b.Do)(r)&&(0,b.qp)(r,t,String(e)),!(null!=n&&n.useAdditionalDayOfYearTokens)&&(0,b.Iu)(r)&&(0,b.qp)(r,t,String(e)),i(B,r,q.localize,Q);if(a.match(Z))throw RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r}).join("")}},24492:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(3891),o=n(34006);function a(e){return(0,o.Z)(1,arguments),e instanceof Date||"object"===(0,r.Z)(e)&&"[object Date]"===Object.prototype.toString.call(e)}},394:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(24492),o=n(40880),a=n(34006);function i(e){return(0,a.Z)(1,arguments),(!!(0,r.default)(e)||"number"==typeof e)&&!isNaN(Number((0,o.default)(e)))}},35795:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(65828),o=n(34006),a=n(69855);function i(e,t){(0,o.Z)(2,arguments);var n=(0,a.Z)(t);return(0,r.Z)(e,-n)}},25266:function(e,t,n){let r;n.r(t),n.d(t,{Arrow:function(){return R},Content:function(){return N},HoverCard:function(){return T},HoverCardArrow:function(){return S},HoverCardContent:function(){return Z},HoverCardPortal:function(){return U},HoverCardTrigger:function(){return y},Portal:function(){return Y},Root:function(){return O},Trigger:function(){return H},createHoverCardScope:function(){return w}});var o=n(32881),a=n(21773),i=n(39893),u=n(7210),c=n(30693),d=n(14051),l=n(6858),s=n(932),f=n(52892),h=n(78139),v=n(35455);let g="HoverCard",[m,w]=(0,u.b)(g,[l.D7]),p=(0,l.D7)(),[C,b]=m(g),T=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:o,onOpenChange:i,openDelay:u=700,closeDelay:d=300}=e,s=p(t),f=(0,a.useRef)(0),h=(0,a.useRef)(0),v=(0,a.useRef)(!1),g=(0,a.useRef)(!1),[m=!1,w]=(0,c.T)({prop:r,defaultProp:o,onChange:i}),b=(0,a.useCallback)(()=>{clearTimeout(h.current),f.current=window.setTimeout(()=>w(!0),u)},[u,w]),T=(0,a.useCallback)(()=>{clearTimeout(f.current),v.current||g.current||(h.current=window.setTimeout(()=>w(!1),d))},[d,w]),y=(0,a.useCallback)(()=>w(!1),[w]);return(0,a.useEffect)(()=>()=>{clearTimeout(f.current),clearTimeout(h.current)},[]),(0,a.createElement)(C,{scope:t,open:m,onOpenChange:w,onOpen:b,onClose:T,onDismiss:y,hasSelectionRef:v,isPointerDownOnContentRef:g},(0,a.createElement)(l.fC,s,n))},y=(0,a.forwardRef)((e,t)=>{let{__scopeHoverCard:n,...r}=e,u=b("HoverCardTrigger",n),c=p(n);return(0,a.createElement)(l.ee,(0,o.Z)({asChild:!0},c),(0,a.createElement)(h.WV.a,(0,o.Z)({"data-state":u.open?"open":"closed"},r,{ref:t,onPointerEnter:(0,i.M)(e.onPointerEnter,P(u.onOpen)),onPointerLeave:(0,i.M)(e.onPointerLeave,P(u.onClose)),onFocus:(0,i.M)(e.onFocus,u.onOpen),onBlur:(0,i.M)(e.onBlur,u.onClose),onTouchStart:(0,i.M)(e.onTouchStart,e=>e.preventDefault())})))}),D="HoverCardPortal",[E,x]=m(D,{forceMount:void 0}),U=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:o}=e,i=b(D,t);return(0,a.createElement)(E,{scope:t,forceMount:n},(0,a.createElement)(f.z,{present:n||i.open},(0,a.createElement)(s.h,{asChild:!0,container:o},r)))},M="HoverCardContent",Z=(0,a.forwardRef)((e,t)=>{let n=x(M,e.__scopeHoverCard),{forceMount:r=n.forceMount,...u}=e,c=b(M,e.__scopeHoverCard);return(0,a.createElement)(f.z,{present:r||c.open},(0,a.createElement)(k,(0,o.Z)({"data-state":c.open?"open":"closed"},u,{onPointerEnter:(0,i.M)(e.onPointerEnter,P(c.onOpen)),onPointerLeave:(0,i.M)(e.onPointerLeave,P(c.onClose)),ref:t})))}),k=(0,a.forwardRef)((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:s,onInteractOutside:f,...h}=e,g=b(M,n),m=p(n),w=(0,a.useRef)(null),C=(0,d.e)(t,w),[T,y]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(T){let e=document.body;return r=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=r,e.style.webkitUserSelect=r}}},[T]),(0,a.useEffect)(()=>{if(w.current){let e=()=>{y(!1),g.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var e;(null===(e=document.getSelection())||void 0===e?void 0:e.toString())!==""&&(g.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),g.hasSelectionRef.current=!1,g.isPointerDownOnContentRef.current=!1}}},[g.isPointerDownOnContentRef,g.hasSelectionRef]),(0,a.useEffect)(()=>{w.current&&(function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t})(w.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,a.createElement)(v.XB,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:f,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:(0,i.M)(s,e=>{e.preventDefault()}),onDismiss:g.onDismiss},(0,a.createElement)(l.VY,(0,o.Z)({},m,h,{onPointerDown:(0,i.M)(h.onPointerDown,e=>{e.currentTarget.contains(e.target)&&y(!0),g.hasSelectionRef.current=!1,g.isPointerDownOnContentRef.current=!0}),ref:C,style:{...h.style,userSelect:T?"text":void 0,WebkitUserSelect:T?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))}),S=(0,a.forwardRef)((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=p(n);return(0,a.createElement)(l.Eh,(0,o.Z)({},i,r,{ref:t}))});function P(e){return t=>"touch"===t.pointerType?void 0:e()}let O=T,H=y,Y=U,N=Z,R=S},72502:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(32881),o=n(21773),a=n(78139);let i="horizontal",u=["horizontal","vertical"],c=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:u=i,...c}=e,l=d(u)?u:i;return(0,o.createElement)(a.WV.div,(0,r.Z)({"data-orientation":l},n?{role:"none"}:{"aria-orientation":"vertical"===l?l:void 0,role:"separator"},c,{ref:t}))});function d(e){return u.includes(e)}c.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!d(r)?Error("Invalid prop `orientation` of value `".concat(o,"` supplied to `").concat(n,"`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `").concat(i,"`.")):null}};let l=c}}]);
//# sourceMappingURL=465-7b7f9ded7d99b724.js.map