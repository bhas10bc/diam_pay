import{s as Ce,r as ne,u as re,h as m,d as i,j as e,i as K,v as s,x as ke,f as c,a as D,g as u,O as Z,c as I,R as ie,y as ee,K as ye,M as $e,l as De,m as Ie,Q as ge,n as Le}from"../chunks/scheduler.e2128b0a.js";import{S as xe,i as He,b as fe,d as me,m as _e,c as Me,a as ue,t as de,e as pe,g as Ae}from"../chunks/index.67dfe82c.js";import{e as Te,u as Be,o as Ne}from"../chunks/each.972e7fc1.js";import{T as Pe}from"../chunks/Trash2Icon.b0de61a9.js";import{T as Ue}from"../chunks/TruncatedKey.d469d295.js";import{c as ce}from"../chunks/contactsStore.ac086bc5.js";function qe(f){let t,l,n,o,v,_;return{c(){t=ne("svg"),l=ne("path"),n=ne("circle"),o=ne("line"),v=ne("line"),this.h()},l(h){t=re(h,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var b=m(t);l=re(b,"path",{d:!0}),m(l).forEach(i),n=re(b,"circle",{cx:!0,cy:!0,r:!0}),m(n).forEach(i),o=re(b,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(o).forEach(i),v=re(b,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(v).forEach(i),b.forEach(i),this.h()},h(){e(l,"d","M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"),e(n,"cx","8.5"),e(n,"cy","7"),e(n,"r","4"),e(o,"x1","20"),e(o,"y1","8"),e(o,"x2","20"),e(o,"y2","14"),e(v,"x1","23"),e(v,"y1","11"),e(v,"x2","17"),e(v,"y2","11"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"width",f[0]),e(t,"height",f[0]),e(t,"fill","none"),e(t,"viewBox","0 0 24 24"),e(t,"stroke","currentColor"),e(t,"stroke-width",f[1]),e(t,"stroke-linecap","round"),e(t,"stroke-linejoin","round"),e(t,"class",_="feather feather-user-plus "+f[2])},m(h,b){K(h,t,b),s(t,l),s(t,n),s(t,o),s(t,v)},p(h,[b]){b&1&&e(t,"width",h[0]),b&1&&e(t,"height",h[0]),b&2&&e(t,"stroke-width",h[1]),b&4&&_!==(_="feather feather-user-plus "+h[2])&&e(t,"class",_)},i:ke,o:ke,d(h){h&&i(t)}}}function ze(f,t,l){let{size:n="24"}=t,{strokeWidth:o=2}=t,{class:v=""}=t;return n!=="100%"&&(n=n.slice(-1)==="x"?n.slice(0,n.length-1)+"em":parseInt(n)+"px"),f.$$set=_=>{"size"in _&&l(0,n=_.size),"strokeWidth"in _&&l(1,o=_.strokeWidth),"class"in _&&l(2,v=_.class)},[n,o,v]}class Se extends xe{constructor(t){super(),He(this,t,ze,qe,Ce,{size:0,strokeWidth:1,class:2})}}function Ee(f,t,l){const n=f.slice();return n[8]=t[l],n}function we(f,t){let l,n,o,v,_,h,b,A,k,g,O,B,L,y,N,E,W=t[8].name+"",P,q,F,U,w,S,T,x,Y,G,C,H,V,M;function R(){return t[6](t[8])}U=new Ue({props:{keyText:t[8].address,lookupName:!1}}),x=new Pe({props:{size:"16"}});function te(){return t[7](t[8])}return{key:f,first:null,c(){l=c("tr"),n=c("th"),o=c("input"),b=D(),A=c("td"),k=c("div"),g=c("div"),O=c("div"),B=c("img"),y=D(),N=c("div"),E=c("div"),P=De(W),q=D(),F=c("td"),fe(U.$$.fragment),w=D(),S=c("td"),T=c("button"),fe(x.$$.fragment),C=D(),this.h()},l(d){l=u(d,"TR",{});var p=m(l);n=u(p,"TH",{class:!0});var j=m(n);o=u(j,"INPUT",{id:!0,name:!0,type:!0,class:!0}),j.forEach(i),b=I(p),A=u(p,"TD",{});var X=m(A);k=u(X,"DIV",{class:!0});var J=m(k);g=u(J,"DIV",{class:!0});var Q=m(g);O=u(Q,"DIV",{class:!0});var ae=m(O);B=u(ae,"IMG",{src:!0,alt:!0}),ae.forEach(i),Q.forEach(i),y=I(J),N=u(J,"DIV",{});var a=m(N);E=u(a,"DIV",{class:!0});var r=m(E);P=Ie(r,W),r.forEach(i),a.forEach(i),J.forEach(i),X.forEach(i),q=I(p),F=u(p,"TD",{});var $=m(F);me(U.$$.fragment,$),$.forEach(i),w=I(p),S=u(p,"TD",{class:!0});var z=m(S);T=u(z,"BUTTON",{id:!0,name:!0,class:!0});var se=m(T);me(x.$$.fragment,se),se.forEach(i),z.forEach(i),C=I(p),p.forEach(i),this.h()},h(){e(o,"id",v=`favoriteCheckbox${t[8].id}`),e(o,"name",_=`favoriteCheckbox${t[8].id}`),e(o,"type","checkbox"),o.checked=h=t[8].favorite,e(o,"class","checkbox-accent checkbox checkbox-sm"),e(n,"class","text-center"),ge(B.src,L="https://id.lobstr.co/"+t[8].address+".png")||e(B,"src",L),e(B,"alt","Avatar Tailwind CSS Component"),e(O,"class","not-prose w-10 rounded-full"),e(g,"class","avatar"),e(E,"class","font-bold"),e(k,"class","flex items-center space-x-3"),e(T,"id",Y=`removeContact${t[8].id}`),e(T,"name",G=`removeContact${t[8].id}`),e(T,"class","btn-error btn-sm btn-square btn"),e(S,"class","text-center"),this.first=l},m(d,p){K(d,l,p),s(l,n),s(n,o),s(l,b),s(l,A),s(A,k),s(k,g),s(g,O),s(O,B),s(k,y),s(k,N),s(N,E),s(E,P),s(l,q),s(l,F),_e(U,F,null),s(l,w),s(l,S),s(S,T),_e(x,T,null),s(l,C),H=!0,V||(M=[ee(o,"click",R),ee(T,"click",te)],V=!0)},p(d,p){t=d,(!H||p&2&&v!==(v=`favoriteCheckbox${t[8].id}`))&&e(o,"id",v),(!H||p&2&&_!==(_=`favoriteCheckbox${t[8].id}`))&&e(o,"name",_),(!H||p&2&&h!==(h=t[8].favorite))&&(o.checked=h),(!H||p&2&&!ge(B.src,L="https://id.lobstr.co/"+t[8].address+".png"))&&e(B,"src",L),(!H||p&2)&&W!==(W=t[8].name+"")&&Le(P,W);const j={};p&2&&(j.keyText=t[8].address),U.$set(j),(!H||p&2&&Y!==(Y=`removeContact${t[8].id}`))&&e(T,"id",Y),(!H||p&2&&G!==(G=`removeContact${t[8].id}`))&&e(T,"name",G)},i(d){H||(ue(U.$$.fragment,d),ue(x.$$.fragment,d),H=!0)},o(d){de(U.$$.fragment,d),de(x.$$.fragment,d),H=!1},d(d){d&&i(l),pe(U),pe(x),V=!1,ye(M)}}}function Ve(f){let t,l="Contacts",n,o,v="The <code>/dashboard/contacts</code> page will allow the user to collect and manage a list of contact\n    entries that stores the contact&#39;s name and Stellar address. The contact can also be flagged/unflagged\n    as a &quot;favorite&quot; contact to be displayed on the main `/dashboard` page.",_,h,b="All contacts",A,k,g,O='<tr><th class="w-1/12 text-center">Favorite</th> <th>Name</th> <th>Address</th> <th class="w-1/12 text-center">Action</th></tr>',B,L,y,N,E,W,P,q,F='<span class="label-text hidden">Name</span>',U,w,S,T,x,Y='<span class="label-text hidden">Address</span>',G,C,H,V,M,R,te,d=[],p=new Map,j,X,J;R=new Se({props:{size:"16"}});let Q=Te(f[1]);const ae=a=>a[8].id;for(let a=0;a<Q.length;a+=1){let r=Ee(f,Q,a),$=ae(r);p.set($,d[a]=we($,r))}return{c(){t=c("h1"),t.textContent=l,n=D(),o=c("p"),o.innerHTML=v,_=D(),h=c("h3"),h.textContent=b,A=D(),k=c("table"),g=c("thead"),g.innerHTML=O,B=D(),L=c("tbody"),y=c("tr"),N=c("th"),E=c("input"),W=D(),P=c("td"),q=c("label"),q.innerHTML=F,U=D(),w=c("input"),S=D(),T=c("td"),x=c("label"),x.innerHTML=Y,G=D(),C=c("input"),H=D(),V=c("td"),M=c("button"),fe(R.$$.fragment),te=D();for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l(a){t=u(a,"H1",{"data-svelte-h":!0}),Z(t)!=="svelte-e6lo79"&&(t.textContent=l),n=I(a),o=u(a,"P",{"data-svelte-h":!0}),Z(o)!=="svelte-7w1i2l"&&(o.innerHTML=v),_=I(a),h=u(a,"H3",{"data-svelte-h":!0}),Z(h)!=="svelte-1bbhe3g"&&(h.textContent=b),A=I(a),k=u(a,"TABLE",{class:!0});var r=m(k);g=u(r,"THEAD",{"data-svelte-h":!0}),Z(g)!=="svelte-1hdn9xk"&&(g.innerHTML=O),B=I(r),L=u(r,"TBODY",{});var $=m(L);y=u($,"TR",{});var z=m(y);N=u(z,"TH",{class:!0});var se=m(N);E=u(se,"INPUT",{id:!0,name:!0,type:!0,class:!0}),se.forEach(i),W=I(z),P=u(z,"TD",{});var le=m(P);q=u(le,"LABEL",{for:!0,"data-svelte-h":!0}),Z(q)!=="svelte-lhbhj0"&&(q.innerHTML=F),U=I(le),w=u(le,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),le.forEach(i),S=I(z),T=u(z,"TD",{});var oe=m(T);x=u(oe,"LABEL",{for:!0,"data-svelte-h":!0}),Z(x)!=="svelte-4icplk"&&(x.innerHTML=Y),G=I(oe),C=u(oe,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),oe.forEach(i),H=I(z),V=u(z,"TD",{class:!0});var ve=m(V);M=u(ve,"BUTTON",{id:!0,name:!0,type:!0,class:!0});var be=m(M);me(R.$$.fragment,be),be.forEach(i),ve.forEach(i),z.forEach(i),te=I($);for(let he=0;he<d.length;he+=1)d[he].l($);$.forEach(i),r.forEach(i),this.h()},h(){e(E,"id","favorite"),e(E,"name","favorite"),e(E,"type","checkbox"),e(E,"class","checkbox-accent checkbox checkbox-sm"),e(N,"class","text-center"),e(q,"for","name"),e(w,"id","name"),e(w,"name","name"),e(w,"type","text"),e(w,"placeholder","Name"),e(w,"class","input-bordered input input-sm w-full"),e(x,"for","address"),e(C,"id","address"),e(C,"name","address"),e(C,"type","text"),e(C,"placeholder","Address"),e(C,"class","input-bordered input input-sm w-full"),e(M,"id","addContactButton"),e(M,"name","addContactButton"),e(M,"type","submit"),e(M,"class","btn-success btn-sm btn-square btn"),e(V,"class","text-center"),e(k,"class","table w-full")},m(a,r){K(a,t,r),K(a,n,r),K(a,o,r),K(a,_,r),K(a,h,r),K(a,A,r),K(a,k,r),s(k,g),s(k,B),s(k,L),s(L,y),s(y,N),s(N,E),E.checked=f[0].favorite,s(y,W),s(y,P),s(P,q),s(P,U),s(P,w),ie(w,f[0].name),s(y,S),s(y,T),s(T,x),s(T,G),s(T,C),ie(C,f[0].address),s(y,H),s(y,V),s(V,M),_e(R,M,null),s(L,te);for(let $=0;$<d.length;$+=1)d[$]&&d[$].m(L,null);j=!0,X||(J=[ee(E,"change",f[2]),ee(w,"input",f[3]),ee(C,"input",f[4]),ee(M,"click",f[5])],X=!0)},p(a,[r]){r&1&&(E.checked=a[0].favorite),r&1&&w.value!==a[0].name&&ie(w,a[0].name),r&1&&C.value!==a[0].address&&ie(C,a[0].address),r&2&&(Q=Te(a[1]),Ae(),d=Be(d,r,ae,1,a,Q,p,L,Ne,we,null,Ee),Me())},i(a){if(!j){ue(R.$$.fragment,a);for(let r=0;r<Q.length;r+=1)ue(d[r]);j=!0}},o(a){de(R.$$.fragment,a);for(let r=0;r<d.length;r+=1)de(d[r]);j=!1},d(a){a&&(i(t),i(n),i(o),i(_),i(h),i(A),i(k)),pe(R);for(let r=0;r<d.length;r+=1)d[r].d();X=!1,ye(J)}}}function je(f,t,l){let n,o;$e(f,ce,g=>l(1,o=g));function v(){n.favorite=this.checked,l(0,n)}function _(){n.name=this.value,l(0,n)}function h(){n.address=this.value,l(0,n)}const b=()=>ce.add(n),A=g=>ce.favorite(g.id),k=g=>ce.remove(g.id);return l(0,n={name:"",address:"",favorite:!1,id:""}),[n,o,v,_,h,b,A,k]}class Qe extends xe{constructor(t){super(),He(this,t,je,Ve,Ce,{})}}export{Qe as component};
