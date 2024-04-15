import{w as A,s as me,r as Oe,u as ve,h as D,d as g,j as r,i as N,v as U,x as ce,f as Y,g as Z,y as E,z as x,A as ut,B as Ze,a as Ge,c as Je,C as Xe,D as pe,E as Qe,F as ft,G as ct,o as dt,q as de,H as v,I as T,J as Re,K as _t,e as _e,p as Te,L as mt,M as bt}from"../chunks/scheduler.e2128b0a.js";import{S as be,i as he,b as G,d as ye,m as J,a as w,t as W,e as X,g as $,c as ee,f as fe}from"../chunks/index.67dfe82c.js";import{w as ht}from"../chunks/index.65dbf9f2.js";import{e as yt}from"../chunks/alertsStore.917fee82.js";const gt=typeof A<"u"?A:typeof globalThis<"u"?globalThis:global,wt=!1,Ct=!1,Rt=Object.freeze(Object.defineProperty({__proto__:null,prerender:wt,ssr:Ct},Symbol.toStringTag,{value:"Module"}));function Bt(l){let e,t,n,a;return{c(){e=Oe("svg"),t=Oe("line"),n=Oe("line"),this.h()},l(o){e=ve(o,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=D(e);t=ve(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),D(t).forEach(g),n=ve(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),D(n).forEach(g),i.forEach(g),this.h()},h(){r(t,"x1","18"),r(t,"y1","6"),r(t,"x2","6"),r(t,"y2","18"),r(n,"x1","6"),r(n,"y1","6"),r(n,"x2","18"),r(n,"y2","18"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width",l[0]),r(e,"height",l[0]),r(e,"fill","none"),r(e,"viewBox","0 0 24 24"),r(e,"stroke","currentColor"),r(e,"stroke-width",l[1]),r(e,"stroke-linecap","round"),r(e,"stroke-linejoin","round"),r(e,"class",a="feather feather-x "+l[2])},m(o,i){N(o,e,i),U(e,t),U(e,n)},p(o,[i]){i&1&&r(e,"width",o[0]),i&1&&r(e,"height",o[0]),i&2&&r(e,"stroke-width",o[1]),i&4&&a!==(a="feather feather-x "+o[2])&&r(e,"class",a)},i:ce,o:ce,d(o){o&&g(e)}}}function Wt(l,e,t){let{size:n="24"}=e,{strokeWidth:a=2}=e,{class:o=""}=e;return n!=="100%"&&(n=n.slice(-1)==="x"?n.slice(0,n.length-1)+"em":parseInt(n)+"px"),l.$$set=i=>{"size"in i&&t(0,n=i.size),"strokeWidth"in i&&t(1,a=i.strokeWidth),"class"in i&&t(2,o=i.class)},[n,a,o]}class kt extends be{constructor(e){super(),he(this,e,Wt,Bt,me,{size:0,strokeWidth:1,class:2})}}function Ot(l){let e,t,n,a,o;return t=new kt({}),{c(){e=Y("button"),G(t.$$.fragment),this.h()},l(i){e=Z(i,"BUTTON",{class:!0});var f=D(e);ye(t.$$.fragment,f),f.forEach(g),this.h()},h(){r(e,"class","btn-square btn absolute right-6 top-3 z-10 bg-base-300")},m(i,f){N(i,e,f),J(t,e,null),n=!0,a||(o=E(e,"click",function(){x(l[0])&&l[0].apply(this,arguments)}),a=!0)},p(i,[f]){l=i},i(i){n||(w(t.$$.fragment,i),n=!0)},o(i){W(t.$$.fragment,i),n=!1},d(i){i&&g(e),X(t),a=!1,o()}}}function vt(l,e,t){let{onClose:n=()=>{}}=e;return l.$$set=a=>{"onClose"in a&&t(0,n=a.onClose)},[n]}class Tt extends be{constructor(e){super(),he(this,e,vt,Ot,me,{onClose:0})}}function Et(l,{delay:e=0,duration:t=400,easing:n=ut}={}){const a=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:n,css:o=>`opacity: ${o*a}`}}const{window:Lt}=gt;function Ue(l){let e,t,n,a,o,i,f,u,c,h,y,I,M,z,k,_,F,V,m=l[1].closeButton&&Ye(l);var O=l[2];function q(b){return{}}return O&&(i=de(O,q())),{c(){e=Y("div"),t=Y("div"),n=Y("div"),m&&m.c(),a=Ge(),o=Y("div"),i&&G(i.$$.fragment),this.h()},l(b){e=Z(b,"DIV",{"aria-hidden":!0,id:!0,class:!0,style:!0});var d=D(e);t=Z(d,"DIV",{class:!0,style:!0});var L=D(t);n=Z(L,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var j=D(n);m&&m.l(j),a=Je(j),o=Z(j,"DIV",{class:!0,style:!0});var K=D(o);i&&ye(i.$$.fragment,K),K.forEach(g),j.forEach(g),L.forEach(g),d.forEach(g),this.h()},h(){r(o,"class",f=v(l[1].classContent)+" svelte-5425ae"),r(o,"style",l[9]),T(o,"content",!l[0]),r(n,"class",u=v(l[1].classWindow)+" svelte-5425ae"),r(n,"role","dialog"),r(n,"aria-modal","true"),r(n,"aria-label",c=l[1].ariaLabelledBy?null:l[1].ariaLabel||null),r(n,"aria-labelledby",h=l[1].ariaLabelledBy||null),r(n,"style",l[8]),T(n,"window",!l[0]),r(t,"class",I=v(l[1].classWindowWrap)+" svelte-5425ae"),r(t,"style",l[7]),T(t,"wrap",!l[0]),r(e,"aria-hidden","true"),r(e,"id",M=l[1].id),r(e,"class",z=v(l[1].classBg)+" svelte-5425ae"),r(e,"style",l[6]),T(e,"bg",!l[0])},m(b,d){N(b,e,d),U(e,t),U(t,n),m&&m.m(n,null),U(n,a),U(n,o),i&&J(i,o,null),l[50](n),l[51](t),l[52](e),_=!0,F||(V=[E(n,"introstart",function(){x(l[13])&&l[13].apply(this,arguments)}),E(n,"outrostart",function(){x(l[14])&&l[14].apply(this,arguments)}),E(n,"introend",function(){x(l[15])&&l[15].apply(this,arguments)}),E(n,"outroend",function(){x(l[16])&&l[16].apply(this,arguments)}),E(e,"mousedown",l[20]),E(e,"mouseup",l[21])],F=!0)},p(b,d){if(l=b,l[1].closeButton?m?(m.p(l,d),d[0]&2&&w(m,1)):(m=Ye(l),m.c(),w(m,1),m.m(n,a)):m&&($(),W(m,1,1,()=>{m=null}),ee()),d[0]&4&&O!==(O=l[2])){if(i){$();const L=i;W(L.$$.fragment,1,0,()=>{X(L,1)}),ee()}O?(i=de(O,q()),G(i.$$.fragment),w(i.$$.fragment,1),J(i,o,null)):i=null}(!_||d[0]&2&&f!==(f=v(l[1].classContent)+" svelte-5425ae"))&&r(o,"class",f),(!_||d[0]&512)&&r(o,"style",l[9]),(!_||d[0]&3)&&T(o,"content",!l[0]),(!_||d[0]&2&&u!==(u=v(l[1].classWindow)+" svelte-5425ae"))&&r(n,"class",u),(!_||d[0]&2&&c!==(c=l[1].ariaLabelledBy?null:l[1].ariaLabel||null))&&r(n,"aria-label",c),(!_||d[0]&2&&h!==(h=l[1].ariaLabelledBy||null))&&r(n,"aria-labelledby",h),(!_||d[0]&256)&&r(n,"style",l[8]),(!_||d[0]&3)&&T(n,"window",!l[0]),(!_||d[0]&2&&I!==(I=v(l[1].classWindowWrap)+" svelte-5425ae"))&&r(t,"class",I),(!_||d[0]&128)&&r(t,"style",l[7]),(!_||d[0]&3)&&T(t,"wrap",!l[0]),(!_||d[0]&2&&M!==(M=l[1].id))&&r(e,"id",M),(!_||d[0]&2&&z!==(z=v(l[1].classBg)+" svelte-5425ae"))&&r(e,"class",z),(!_||d[0]&64)&&r(e,"style",l[6]),(!_||d[0]&3)&&T(e,"bg",!l[0])},i(b){_||(w(m),i&&w(i.$$.fragment,b),b&&Re(()=>{_&&(y||(y=fe(n,l[12],l[1].transitionWindowProps,!0)),y.run(1))}),b&&Re(()=>{_&&(k||(k=fe(e,l[11],l[1].transitionBgProps,!0)),k.run(1))}),_=!0)},o(b){W(m),i&&W(i.$$.fragment,b),b&&(y||(y=fe(n,l[12],l[1].transitionWindowProps,!1)),y.run(0)),b&&(k||(k=fe(e,l[11],l[1].transitionBgProps,!1)),k.run(0)),_=!1},d(b){b&&g(e),m&&m.d(),i&&X(i),l[50](null),b&&y&&y.end(),l[51](null),l[52](null),b&&k&&k.end(),F=!1,_t(V)}}}function Ye(l){let e,t,n,a,o;const i=[St,Pt],f=[];function u(c,h){return h[0]&2&&(e=null),e==null&&(e=!!c[17](c[1].closeButton)),e?0:1}return t=u(l,[-1,-1,-1]),n=f[t]=i[t](l),{c(){n.c(),a=_e()},l(c){n.l(c),a=_e()},m(c,h){f[t].m(c,h),N(c,a,h),o=!0},p(c,h){let y=t;t=u(c,h),t===y?f[t].p(c,h):($(),W(f[y],1,1,()=>{f[y]=null}),ee(),n=f[t],n?n.p(c,h):(n=f[t]=i[t](c),n.c()),w(n,1),n.m(a.parentNode,a))},i(c){o||(w(n),o=!0)},o(c){W(n),o=!1},d(c){c&&g(a),f[t].d(c)}}}function Pt(l){let e,t,n,a;return{c(){e=Y("button"),this.h()},l(o){e=Z(o,"BUTTON",{class:!0,"aria-label":!0,style:!0,type:!0}),D(e).forEach(g),this.h()},h(){r(e,"class",t=v(l[1].classCloseButton)+" svelte-5425ae"),r(e,"aria-label","Close modal"),r(e,"style",l[10]),r(e,"type","button"),T(e,"close",!l[0])},m(o,i){N(o,e,i),n||(a=E(e,"click",l[18]),n=!0)},p(o,i){i[0]&2&&t!==(t=v(o[1].classCloseButton)+" svelte-5425ae")&&r(e,"class",t),i[0]&1024&&r(e,"style",o[10]),i[0]&3&&T(e,"close",!o[0])},i:ce,o:ce,d(o){o&&g(e),n=!1,a()}}}function St(l){let e,t,n;var a=l[1].closeButton;function o(i){return{props:{onClose:i[18]}}}return a&&(e=de(a,o(l))),{c(){e&&G(e.$$.fragment),t=_e()},l(i){e&&ye(e.$$.fragment,i),t=_e()},m(i,f){e&&J(e,i,f),N(i,t,f),n=!0},p(i,f){if(f[0]&2&&a!==(a=i[1].closeButton)){if(e){$();const u=e;W(u.$$.fragment,1,0,()=>{X(u,1)}),ee()}a?(e=de(a,o(i)),G(e.$$.fragment),w(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&W(e.$$.fragment,i),n=!1},d(i){i&&g(t),e&&X(e,i)}}}function Dt(l){let e,t,n,a,o=l[2]&&Ue(l);const i=l[49].default,f=Ze(i,l,l[48],null);return{c(){o&&o.c(),e=Ge(),f&&f.c()},l(u){o&&o.l(u),e=Je(u),f&&f.l(u)},m(u,c){o&&o.m(u,c),N(u,e,c),f&&f.m(u,c),t=!0,n||(a=E(Lt,"keydown",l[19]),n=!0)},p(u,c){u[2]?o?(o.p(u,c),c[0]&4&&w(o,1)):(o=Ue(u),o.c(),w(o,1),o.m(e.parentNode,e)):o&&($(),W(o,1,1,()=>{o=null}),ee()),f&&f.p&&(!t||c[1]&131072)&&Xe(f,i,u,u[48],t?Qe(i,u[48],c,null):pe(u[48]),null)},i(u){t||(w(o),w(f,u),t=!0)},o(u){W(o),W(f,u),t=!1},d(u){u&&g(e),o&&o.d(u),f&&f.d(u),n=!1,a()}}}function It(l,e={}){return function(n){return new l({...n,props:{...e,...n.props}})}}function Mt(l,e,t){let{$$slots:n={},$$scope:a}=e;const o=ft(),i=mt,f=s=>s.tabIndex>=0&&!s.hidden&&!s.disabled&&s.style.display!=="none"&&s.type!=="hidden"&&!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length);let{isTabbable:u=f}=e,{show:c=null}=e,{id:h=null}=e,{key:y="simple-modal"}=e,{ariaLabel:I=null}=e,{ariaLabelledBy:M=null}=e,{closeButton:z=!0}=e,{closeOnEsc:k=!0}=e,{closeOnOuterClick:_=!0}=e,{styleBg:F={}}=e,{styleWindowWrap:V={}}=e,{styleWindow:m={}}=e,{styleContent:O={}}=e,{styleCloseButton:q={}}=e,{classBg:b=null}=e,{classWindowWrap:d=null}=e,{classWindow:L=null}=e,{classContent:j=null}=e,{classCloseButton:K=null}=e,{unstyled:ge=!1}=e,{setContext:we=i}=e,{transitionBg:te=Et}=e,{transitionBgProps:le={duration:250}}=e,{transitionWindow:Ce=te}=e,{transitionWindowProps:Be=le}=e,{disableFocusTrap:We=!1}=e;const Ee={id:h,ariaLabel:I,ariaLabelledBy:M,closeButton:z,closeOnEsc:k,closeOnOuterClick:_,styleBg:F,styleWindowWrap:V,styleWindow:m,styleContent:O,styleCloseButton:q,classBg:b,classWindowWrap:d,classWindow:L,classContent:j,classCloseButton:K,transitionBg:te,transitionBgProps:le,transitionWindow:Ce,transitionWindowProps:Be,disableFocusTrap:We,isTabbable:u,unstyled:ge};let C={...Ee},H=null,ne,se,oe,ke,Le,Pe,Se,De,Ie,Me,ze,je,Fe,Ae,Ne;const xe=s=>s.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),p=s=>s?Object.keys(s).reduce((Q,P)=>`${Q}; ${xe(P)}: ${s[P]}`,""):"",Ve=s=>!!(s&&s.constructor&&s.call&&s.apply),$e=()=>{t(6,Le=p(Object.assign({},{width:A.innerWidth,height:A.innerHeight},C.styleBg))),t(7,Pe=p(C.styleWindowWrap)),t(8,Se=p(C.styleWindow)),t(9,De=p(C.styleContent)),t(10,Ie=p(C.styleCloseButton)),t(11,Me=C.transitionBg),t(12,ze=C.transitionWindow)},ie=()=>{};let qe=ie,ae=ie,Ke=ie,re=ie;const He=(s,Q={},P={},B={})=>{t(2,H=It(s,Q)),t(1,C={...Ee,...P}),$e(),nt(),t(13,qe=S=>{B.onOpen&&B.onOpen(S),o("open"),o("opening")}),t(14,ae=S=>{B.onClose&&B.onClose(S),o("close"),o("closing")}),t(15,Ke=S=>{B.onOpened&&B.onOpened(S),o("opened")}),t(16,re=S=>{B.onClosed&&B.onClosed(S),o("closed")})},R=(s={})=>{H&&(t(14,ae=s.onClose||ae),t(16,re=s.onClosed||re),t(2,H=null),st())},et=s=>{if(C.closeOnEsc&&H&&s.key==="Escape"&&(s.preventDefault(),R()),H&&s.key==="Tab"&&!C.disableFocusTrap){const Q=oe.querySelectorAll("*"),P=Array.from(Q).filter(C.isTabbable).sort((S,rt)=>S.tabIndex-rt.tabIndex);let B=P.indexOf(document.activeElement);B===-1&&s.shiftKey&&(B=0),B+=P.length+(s.shiftKey?-1:1),B%=P.length,P[B].focus(),s.preventDefault()}},tt=s=>{C.closeOnOuterClick&&(s.target===ne||s.target===se)&&(Ne=s.target)},lt=s=>{C.closeOnOuterClick&&s.target===Ne&&(s.preventDefault(),R())},nt=()=>{ke=A.scrollY,je=document.body.style.position,Fe=document.body.style.overflow,Ae=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${ke}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},st=()=>{document.body.style.position=je||"",document.body.style.top="",document.body.style.overflow=Fe||"",document.body.style.width=Ae||"",A.scrollTo({top:ke,left:0,behavior:"instant"})};we(y,{open:He,close:R});let ue=!1;ct(()=>{ue&&R()}),dt(()=>{t(47,ue=!0)});function ot(s){Te[s?"unshift":"push"](()=>{oe=s,t(5,oe)})}function it(s){Te[s?"unshift":"push"](()=>{se=s,t(4,se)})}function at(s){Te[s?"unshift":"push"](()=>{ne=s,t(3,ne)})}return l.$$set=s=>{"isTabbable"in s&&t(22,u=s.isTabbable),"show"in s&&t(23,c=s.show),"id"in s&&t(24,h=s.id),"key"in s&&t(25,y=s.key),"ariaLabel"in s&&t(26,I=s.ariaLabel),"ariaLabelledBy"in s&&t(27,M=s.ariaLabelledBy),"closeButton"in s&&t(28,z=s.closeButton),"closeOnEsc"in s&&t(29,k=s.closeOnEsc),"closeOnOuterClick"in s&&t(30,_=s.closeOnOuterClick),"styleBg"in s&&t(31,F=s.styleBg),"styleWindowWrap"in s&&t(32,V=s.styleWindowWrap),"styleWindow"in s&&t(33,m=s.styleWindow),"styleContent"in s&&t(34,O=s.styleContent),"styleCloseButton"in s&&t(35,q=s.styleCloseButton),"classBg"in s&&t(36,b=s.classBg),"classWindowWrap"in s&&t(37,d=s.classWindowWrap),"classWindow"in s&&t(38,L=s.classWindow),"classContent"in s&&t(39,j=s.classContent),"classCloseButton"in s&&t(40,K=s.classCloseButton),"unstyled"in s&&t(0,ge=s.unstyled),"setContext"in s&&t(41,we=s.setContext),"transitionBg"in s&&t(42,te=s.transitionBg),"transitionBgProps"in s&&t(43,le=s.transitionBgProps),"transitionWindow"in s&&t(44,Ce=s.transitionWindow),"transitionWindowProps"in s&&t(45,Be=s.transitionWindowProps),"disableFocusTrap"in s&&t(46,We=s.disableFocusTrap),"$$scope"in s&&t(48,a=s.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&8388608|l.$$.dirty[1]&65536&&ue&&(Ve(c)?He(c):R())},[ge,C,H,ne,se,oe,Le,Pe,Se,De,Ie,Me,ze,qe,ae,Ke,re,Ve,R,et,tt,lt,u,c,h,y,I,M,z,k,_,F,V,m,O,q,b,d,L,j,K,we,te,le,Ce,Be,We,ue,a,n,ot,it,at]}class zt extends be{constructor(e){super(),he(this,e,Mt,Dt,me,{isTabbable:22,show:23,id:24,key:25,ariaLabel:26,ariaLabelledBy:27,closeButton:28,closeOnEsc:29,closeOnOuterClick:30,styleBg:31,styleWindowWrap:32,styleWindow:33,styleContent:34,styleCloseButton:35,classBg:36,classWindowWrap:37,classWindow:38,classContent:39,classCloseButton:40,unstyled:0,setContext:41,transitionBg:42,transitionBgProps:43,transitionWindow:44,transitionWindowProps:45,disableFocusTrap:46},null,[-1,-1,-1])}}function jt(l){let e;const t=l[3].default,n=Ze(t,l,l[4],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o&16)&&Xe(n,t,a,a[4],e?Qe(t,a[4],o,null):pe(a[4]),null)},i(a){e||(w(n,a),e=!0)},o(a){W(n,a),e=!1},d(a){n&&n.d(a)}}}function Ft(l){let e,t,n,a;return e=new zt({props:{show:l[0],classContent:"rounded bg-base-100",closeButton:Tt,$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(o){ye(e.$$.fragment,o)},m(o,i){J(e,o,i),t=!0,n||(a=E(A,"error",l[2]),n=!0)},p(o,[i]){const f={};i&1&&(f.show=o[0]),i&16&&(f.$$scope={dirty:i,ctx:o}),e.$set(f)},i(o){t||(w(e.$$.fragment,o),t=!0)},o(o){W(e.$$.fragment,o),t=!1},d(o){X(e,o),n=!1,a()}}}function At(l,e,t){let n,{$$slots:a={},$$scope:o}=e;const i=ht(null);bt(l,i,u=>t(0,n=u));const f=u=>{u.message!=="ResizeObserver loop limit exceeded"&&(console.log("here is the handleError err",u),yt.set(u.error.body.message))};return l.$$set=u=>{"$$scope"in u&&t(4,o=u.$$scope)},[n,i,f,a,o]}class Ut extends be{constructor(e){super(),he(this,e,At,Ft,me,{})}}export{Ut as component,Rt as universal};
