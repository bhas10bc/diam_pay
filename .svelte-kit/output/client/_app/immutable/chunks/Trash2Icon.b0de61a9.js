import{s as v,r as f,u as c,h as d,d as u,j as t,i as k,v as m,x as g}from"./scheduler.e2128b0a.js";import{S as w,i as x}from"./index.67dfe82c.js";function _(h){let e,o,s,r,a,n;return{c(){e=f("svg"),o=f("polyline"),s=f("path"),r=f("line"),a=f("line"),this.h()},l(l){e=c(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=d(e);o=c(i,"polyline",{points:!0}),d(o).forEach(u),s=c(i,"path",{d:!0}),d(s).forEach(u),r=c(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),d(r).forEach(u),a=c(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),d(a).forEach(u),i.forEach(u),this.h()},h(){t(o,"points","3 6 5 6 21 6"),t(s,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),t(r,"x1","10"),t(r,"y1","11"),t(r,"x2","10"),t(r,"y2","17"),t(a,"x1","14"),t(a,"y1","11"),t(a,"x2","14"),t(a,"y2","17"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width",h[0]),t(e,"height",h[0]),t(e,"fill","none"),t(e,"viewBox","0 0 24 24"),t(e,"stroke","currentColor"),t(e,"stroke-width",h[1]),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"class",n="feather feather-trash-2 "+h[2])},m(l,i){k(l,e,i),m(e,o),m(e,s),m(e,r),m(e,a)},p(l,[i]){i&1&&t(e,"width",l[0]),i&1&&t(e,"height",l[0]),i&2&&t(e,"stroke-width",l[1]),i&4&&n!==(n="feather feather-trash-2 "+l[2])&&t(e,"class",n)},i:g,o:g,d(l){l&&u(e)}}}function y(h,e,o){let{size:s="24"}=e,{strokeWidth:r=2}=e,{class:a=""}=e;return s!=="100%"&&(s=s.slice(-1)==="x"?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),h.$$set=n=>{"size"in n&&o(0,s=n.size),"strokeWidth"in n&&o(1,r=n.strokeWidth),"class"in n&&o(2,a=n.class)},[s,r,a]}class z extends w{constructor(e){super(),x(this,e,y,_,v,{size:0,strokeWidth:1,class:2})}}export{z as T};