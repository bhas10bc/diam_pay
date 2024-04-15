import{s as N,f as k,a as $,e as H,g as C,O as S,c as P,i as b,x as M,d,P as O,M as Y,l as q,h as E,m as B,j as _,v as g,R as A,y as D,n as R}from"../chunks/scheduler.e2128b0a.js";import{e as j}from"../chunks/each.972e7fc1.js";import{S as U,i as V}from"../chunks/index.67dfe82c.js";import{k as w}from"../chunks/kycStore.f943d3b8.js";function I(t,a,o){const s=t.slice();return s[2]=a[o],s[3]=a,s[4]=o,s}function K(t){let a,o,s,f=t[2].replaceAll("_"," ")+"",c,v,p,i,y,h,m,n,e;function r(){t[1].call(i,t[2])}return{c(){a=k("div"),o=k("label"),s=k("span"),c=q(f),p=$(),i=k("input"),m=$(),this.h()},l(l){a=C(l,"DIV",{class:!0});var u=E(a);o=C(u,"LABEL",{for:!0,class:!0});var L=E(o);s=C(L,"SPAN",{class:!0});var T=E(s);c=B(T,f),T.forEach(d),L.forEach(d),p=P(u),i=C(u,"INPUT",{name:!0,id:!0,type:!0,class:!0}),m=P(u),u.forEach(d),this.h()},h(){_(s,"class","label-text uppercase"),_(o,"for",v=`kyc-field-${t[2]}`),_(o,"class","label"),_(i,"name",y=`kyc-field-${t[2]}`),_(i,"id",h=`kyc-field-${t[2]}`),_(i,"type","text"),_(i,"class","input-bordered input"),_(a,"class","form-control my-1")},m(l,u){b(l,a,u),g(a,o),g(o,s),g(s,c),g(a,p),g(a,i),A(i,t[0][t[2]]),g(a,m),n||(e=D(i,"input",r),n=!0)},p(l,u){t=l,u&1&&f!==(f=t[2].replaceAll("_"," ")+"")&&R(c,f),u&1&&v!==(v=`kyc-field-${t[2]}`)&&_(o,"for",v),u&1&&y!==(y=`kyc-field-${t[2]}`)&&_(i,"name",y),u&1&&h!==(h=`kyc-field-${t[2]}`)&&_(i,"id",h),u&1&&i.value!==t[0][t[2]]&&A(i,t[0][t[2]])},d(l){l&&d(a),n=!1,e()}}}function z(t){let a,o="KYC Information",s,f,c=`The <code>/dashboard/settings/kyc</code> allows the user to view and modify the locally saved KYC
    information they have submitted through various SEP-6 anchors. Changes made here will be submitted
    to the KYC server the next time a SEP-6 transfer is initiated.`,v,p,i="<small>(Changes are automatically saved.)</small>",y,h,m=j(Object.keys(t[0])),n=[];for(let e=0;e<m.length;e+=1)n[e]=K(I(t,m,e));return{c(){a=k("h1"),a.textContent=o,s=$(),f=k("p"),f.innerHTML=c,v=$(),p=k("p"),p.innerHTML=i,y=$();for(let e=0;e<n.length;e+=1)n[e].c();h=H()},l(e){a=C(e,"H1",{"data-svelte-h":!0}),S(a)!=="svelte-1tkoq9v"&&(a.textContent=o),s=P(e),f=C(e,"P",{"data-svelte-h":!0}),S(f)!=="svelte-1344fyg"&&(f.innerHTML=c),v=P(e),p=C(e,"P",{"data-svelte-h":!0}),S(p)!=="svelte-14dlcu1"&&(p.innerHTML=i),y=P(e);for(let r=0;r<n.length;r+=1)n[r].l(e);h=H()},m(e,r){b(e,a,r),b(e,s,r),b(e,f,r),b(e,v,r),b(e,p,r),b(e,y,r);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,r);b(e,h,r)},p(e,[r]){if(r&1){m=j(Object.keys(e[0]));let l;for(l=0;l<m.length;l+=1){const u=I(e,m,l);n[l]?n[l].p(u,r):(n[l]=K(u),n[l].c(),n[l].m(h.parentNode,h))}for(;l<n.length;l+=1)n[l].d(1);n.length=m.length}},i:M,o:M,d(e){e&&(d(a),d(s),d(f),d(v),d(p),d(y),d(h)),O(n,e)}}}function F(t,a,o){let s;Y(t,w,c=>o(0,s=c));function f(c){s[c]=this.value,w.set(s)}return[s,f]}class X extends U{constructor(a){super(),V(this,a,F,z,N,{})}}export{X as component};