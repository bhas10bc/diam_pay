var Jr=Object.defineProperty;var Pr=(n,o,f)=>o in n?Jr(n,o,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[o]=f;var k=(n,o,f)=>(Pr(n,typeof o!="symbol"?o+"":o,f),f);var dr={},X={};X.byteLength=Zr;X.toByteArray=$r;X.fromByteArray=nt;var b=[],I=[],Vr=typeof Uint8Array<"u"?Uint8Array:Array,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var L=0,Kr=V.length;L<Kr;++L)b[L]=V[L],I[V.charCodeAt(L)]=L;I["-".charCodeAt(0)]=62;I["_".charCodeAt(0)]=63;function _r(n){var o=n.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=n.indexOf("=");f===-1&&(f=o);var h=f===o?0:4-f%4;return[f,h]}function Zr(n){var o=_r(n),f=o[0],h=o[1];return(f+h)*3/4-h}function Qr(n,o,f){return(o+f)*3/4-f}function $r(n){var o,f=_r(n),h=f[0],p=f[1],y=new Vr(Qr(n,h,p)),s=0,a=p>0?h-4:h,w;for(w=0;w<a;w+=4)o=I[n.charCodeAt(w)]<<18|I[n.charCodeAt(w+1)]<<12|I[n.charCodeAt(w+2)]<<6|I[n.charCodeAt(w+3)],y[s++]=o>>16&255,y[s++]=o>>8&255,y[s++]=o&255;return p===2&&(o=I[n.charCodeAt(w)]<<2|I[n.charCodeAt(w+1)]>>4,y[s++]=o&255),p===1&&(o=I[n.charCodeAt(w)]<<10|I[n.charCodeAt(w+1)]<<4|I[n.charCodeAt(w+2)]>>2,y[s++]=o>>8&255,y[s++]=o&255),y}function rt(n){return b[n>>18&63]+b[n>>12&63]+b[n>>6&63]+b[n&63]}function tt(n,o,f){for(var h,p=[],y=o;y<f;y+=3)h=(n[y]<<16&16711680)+(n[y+1]<<8&65280)+(n[y+2]&255),p.push(rt(h));return p.join("")}function nt(n){for(var o,f=n.length,h=f%3,p=[],y=16383,s=0,a=f-h;s<a;s+=y)p.push(tt(n,s,s+y>a?a:s+y));return h===1?(o=n[f-1],p.push(b[o>>2]+b[o<<4&63]+"==")):h===2&&(o=(n[f-2]<<8)+n[f-1],p.push(b[o>>10]+b[o>>4&63]+b[o<<2&63]+"=")),p.join("")}var tr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */tr.read=function(n,o,f,h,p){var y,s,a=p*8-h-1,w=(1<<a)-1,d=w>>1,_=-7,F=f?p-1:0,T=f?-1:1,v=n[o+F];for(F+=T,y=v&(1<<-_)-1,v>>=-_,_+=a;_>0;y=y*256+n[o+F],F+=T,_-=8);for(s=y&(1<<-_)-1,y>>=-_,_+=h;_>0;s=s*256+n[o+F],F+=T,_-=8);if(y===0)y=1-d;else{if(y===w)return s?NaN:(v?-1:1)*(1/0);s=s+Math.pow(2,h),y=y-d}return(v?-1:1)*s*Math.pow(2,y-h)};tr.write=function(n,o,f,h,p,y){var s,a,w,d=y*8-p-1,_=(1<<d)-1,F=_>>1,T=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=h?0:y-1,D=h?1:-1,H=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(a=isNaN(o)?1:0,s=_):(s=Math.floor(Math.log(o)/Math.LN2),o*(w=Math.pow(2,-s))<1&&(s--,w*=2),s+F>=1?o+=T/w:o+=T*Math.pow(2,1-F),o*w>=2&&(s++,w/=2),s+F>=_?(a=0,s=_):s+F>=1?(a=(o*w-1)*Math.pow(2,p),s=s+F):(a=o*Math.pow(2,F-1)*Math.pow(2,p),s=0));p>=8;n[f+v]=a&255,v+=D,a/=256,p-=8);for(s=s<<p|a,d+=p;d>0;n[f+v]=s&255,v+=D,s/=256,d-=8);n[f+v-D]|=H*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){var o=X,f=tr,h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=a,n.SlowBuffer=Cr,n.INSPECT_MAX_BYTES=50;var p=2147483647;n.kMaxLength=p,a.TYPED_ARRAY_SUPPORT=y(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(e){if(e>p)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,a.prototype),r}function a(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return F(e)}return w(e,r,t)}a.poolSize=8192;function w(e,r,t){if(typeof e=="string")return T(e,r);if(ArrayBuffer.isView(e))return D(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(C(e,ArrayBuffer)||e&&C(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(C(e,SharedArrayBuffer)||e&&C(e.buffer,SharedArrayBuffer)))return H(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(i!=null&&i!==e)return a.from(i,r,t);var u=Tr(e);if(u)return u;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function d(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function _(e,r,t){return d(e),e<=0?s(e):r!==void 0?typeof t=="string"?s(e).fill(r,t):s(e).fill(r):s(e)}a.alloc=function(e,r,t){return _(e,r,t)};function F(e){return d(e),s(e<0?0:z(e)|0)}a.allocUnsafe=function(e){return F(e)},a.allocUnsafeSlow=function(e){return F(e)};function T(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=ir(e,r)|0,i=s(t),u=i.write(e,r);return u!==t&&(i=i.slice(0,u)),i}function v(e){for(var r=e.length<0?0:z(e.length)|0,t=s(r),i=0;i<r;i+=1)t[i]=e[i]&255;return t}function D(e){if(C(e,Uint8Array)){var r=new Uint8Array(e);return H(r.buffer,r.byteOffset,r.byteLength)}return v(e)}function H(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return r===void 0&&t===void 0?i=new Uint8Array(e):t===void 0?i=new Uint8Array(e,r):i=new Uint8Array(e,r,t),Object.setPrototypeOf(i,a.prototype),i}function Tr(e){if(a.isBuffer(e)){var r=z(e.length)|0,t=s(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||P(e.length)?s(0):v(e);if(e.type==="Buffer"&&Array.isArray(e.data))return v(e.data)}function z(e){if(e>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return e|0}function Cr(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==a.prototype},a.compare=function(r,t){if(C(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),C(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(r)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;for(var i=r.length,u=t.length,c=0,l=Math.min(i,u);c<l;++c)if(r[c]!==t[c]){i=r[c],u=t[c];break}return i<u?-1:u<i?1:0},a.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return a.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<r.length;++i)t+=r[i].length;var u=a.allocUnsafe(t),c=0;for(i=0;i<r.length;++i){var l=r[i];if(C(l,Uint8Array))c+l.length>u.length?a.from(l).copy(u,c):Uint8Array.prototype.set.call(u,l,c);else if(a.isBuffer(l))l.copy(u,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=l.length}return u};function ir(e,r){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||C(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var u=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return sr(e).length;default:if(u)return i?-1:J(e).length;r=(""+r).toLowerCase(),u=!0}}a.byteLength=ir;function br(e,r,t){var i=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return qr(this,r,t);case"utf8":case"utf-8":return ar(this,r,t);case"ascii":return Hr(this,r,t);case"latin1":case"binary":return Wr(this,r,t);case"base64":return Rr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yr(this,r,t);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}a.prototype._isBuffer=!0;function S(e,r,t){var i=e[r];e[r]=e[t],e[t]=i}a.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)S(this,t,t+1);return this},a.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},a.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},a.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?ar(this,0,r):br.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(r){if(!a.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:a.compare(this,r)===0},a.prototype.inspect=function(){var r="",t=n.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},h&&(a.prototype[h]=a.prototype.inspect),a.prototype.compare=function(r,t,i,u,c){if(C(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),i===void 0&&(i=r?r.length:0),u===void 0&&(u=0),c===void 0&&(c=this.length),t<0||i>r.length||u<0||c>this.length)throw new RangeError("out of range index");if(u>=c&&t>=i)return 0;if(u>=c)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,u>>>=0,c>>>=0,this===r)return 0;for(var l=c-u,x=i-t,m=Math.min(l,x),E=this.slice(u,c),B=r.slice(t,i),g=0;g<m;++g)if(E[g]!==B[g]){l=E[g],x=B[g];break}return l<x?-1:x<l?1:0};function or(e,r,t,i,u){if(e.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,P(t)&&(t=u?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(u)return-1;t=e.length-1}else if(t<0)if(u)t=0;else return-1;if(typeof r=="string"&&(r=a.from(r,i)),a.isBuffer(r))return r.length===0?-1:ur(e,r,t,i,u);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ur(e,[r],t,i,u);throw new TypeError("val must be string, number or Buffer")}function ur(e,r,t,i,u){var c=1,l=e.length,x=r.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,l/=2,x/=2,t/=2}function m(pr,yr){return c===1?pr[yr]:pr.readUInt16BE(yr*c)}var E;if(u){var B=-1;for(E=t;E<l;E++)if(m(e,E)===m(r,B===-1?0:E-B)){if(B===-1&&(B=E),E-B+1===x)return B*c}else B!==-1&&(E-=E-B),B=-1}else for(t+x>l&&(t=l-x),E=t;E>=0;E--){for(var g=!0,Y=0;Y<x;Y++)if(m(e,E+Y)!==m(r,Y)){g=!1;break}if(g)return E}return-1}a.prototype.includes=function(r,t,i){return this.indexOf(r,t,i)!==-1},a.prototype.indexOf=function(r,t,i){return or(this,r,t,i,!0)},a.prototype.lastIndexOf=function(r,t,i){return or(this,r,t,i,!1)};function Sr(e,r,t,i){t=Number(t)||0;var u=e.length-t;i?(i=Number(i),i>u&&(i=u)):i=u;var c=r.length;i>c/2&&(i=c/2);for(var l=0;l<i;++l){var x=parseInt(r.substr(l*2,2),16);if(P(x))return l;e[t+l]=x}return l}function kr(e,r,t,i){return q(J(r,e.length-t),e,t,i)}function Lr(e,r,t,i){return q(Xr(r),e,t,i)}function Mr(e,r,t,i){return q(sr(r),e,t,i)}function Nr(e,r,t,i){return q(jr(r,e.length-t),e,t,i)}a.prototype.write=function(r,t,i,u){if(t===void 0)u="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")u=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,u===void 0&&(u="utf8")):(u=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((i===void 0||i>c)&&(i=c),r.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");u||(u="utf8");for(var l=!1;;)switch(u){case"hex":return Sr(this,r,t,i);case"utf8":case"utf-8":return kr(this,r,t,i);case"ascii":case"latin1":case"binary":return Lr(this,r,t,i);case"base64":return Mr(this,r,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nr(this,r,t,i);default:if(l)throw new TypeError("Unknown encoding: "+u);u=(""+u).toLowerCase(),l=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Rr(e,r,t){return r===0&&t===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(r,t))}function ar(e,r,t){t=Math.min(e.length,t);for(var i=[],u=r;u<t;){var c=e[u],l=null,x=c>239?4:c>223?3:c>191?2:1;if(u+x<=t){var m,E,B,g;switch(x){case 1:c<128&&(l=c);break;case 2:m=e[u+1],(m&192)===128&&(g=(c&31)<<6|m&63,g>127&&(l=g));break;case 3:m=e[u+1],E=e[u+2],(m&192)===128&&(E&192)===128&&(g=(c&15)<<12|(m&63)<<6|E&63,g>2047&&(g<55296||g>57343)&&(l=g));break;case 4:m=e[u+1],E=e[u+2],B=e[u+3],(m&192)===128&&(E&192)===128&&(B&192)===128&&(g=(c&15)<<18|(m&63)<<12|(E&63)<<6|B&63,g>65535&&g<1114112&&(l=g))}}l===null?(l=65533,x=1):l>65535&&(l-=65536,i.push(l>>>10&1023|55296),l=56320|l&1023),i.push(l),u+=x}return Dr(i)}var fr=4096;function Dr(e){var r=e.length;if(r<=fr)return String.fromCharCode.apply(String,e);for(var t="",i=0;i<r;)t+=String.fromCharCode.apply(String,e.slice(i,i+=fr));return t}function Hr(e,r,t){var i="";t=Math.min(e.length,t);for(var u=r;u<t;++u)i+=String.fromCharCode(e[u]&127);return i}function Wr(e,r,t){var i="";t=Math.min(e.length,t);for(var u=r;u<t;++u)i+=String.fromCharCode(e[u]);return i}function qr(e,r,t){var i=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>i)&&(t=i);for(var u="",c=r;c<t;++c)u+=zr[e[c]];return u}function Yr(e,r,t){for(var i=e.slice(r,t),u="",c=0;c<i.length-1;c+=2)u+=String.fromCharCode(i[c]+i[c+1]*256);return u}a.prototype.slice=function(r,t){var i=this.length;r=~~r,t=t===void 0?i:~~t,r<0?(r+=i,r<0&&(r=0)):r>i&&(r=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<r&&(t=r);var u=this.subarray(r,t);return Object.setPrototypeOf(u,a.prototype),u};function A(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(r,t,i){r=r>>>0,t=t>>>0,i||A(r,t,this.length);for(var u=this[r],c=1,l=0;++l<t&&(c*=256);)u+=this[r+l]*c;return u},a.prototype.readUintBE=a.prototype.readUIntBE=function(r,t,i){r=r>>>0,t=t>>>0,i||A(r,t,this.length);for(var u=this[r+--t],c=1;t>0&&(c*=256);)u+=this[r+--t]*c;return u},a.prototype.readUint8=a.prototype.readUInt8=function(r,t){return r=r>>>0,t||A(r,1,this.length),this[r]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||A(r,2,this.length),this[r]|this[r+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||A(r,2,this.length),this[r]<<8|this[r+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||A(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},a.prototype.readIntLE=function(r,t,i){r=r>>>0,t=t>>>0,i||A(r,t,this.length);for(var u=this[r],c=1,l=0;++l<t&&(c*=256);)u+=this[r+l]*c;return c*=128,u>=c&&(u-=Math.pow(2,8*t)),u},a.prototype.readIntBE=function(r,t,i){r=r>>>0,t=t>>>0,i||A(r,t,this.length);for(var u=t,c=1,l=this[r+--u];u>0&&(c*=256);)l+=this[r+--u]*c;return c*=128,l>=c&&(l-=Math.pow(2,8*t)),l},a.prototype.readInt8=function(r,t){return r=r>>>0,t||A(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},a.prototype.readInt16LE=function(r,t){r=r>>>0,t||A(r,2,this.length);var i=this[r]|this[r+1]<<8;return i&32768?i|4294901760:i},a.prototype.readInt16BE=function(r,t){r=r>>>0,t||A(r,2,this.length);var i=this[r+1]|this[r]<<8;return i&32768?i|4294901760:i},a.prototype.readInt32LE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},a.prototype.readInt32BE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},a.prototype.readFloatLE=function(r,t){return r=r>>>0,t||A(r,4,this.length),f.read(this,r,!0,23,4)},a.prototype.readFloatBE=function(r,t){return r=r>>>0,t||A(r,4,this.length),f.read(this,r,!1,23,4)},a.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||A(r,8,this.length),f.read(this,r,!0,52,8)},a.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||A(r,8,this.length),f.read(this,r,!1,52,8)};function U(e,r,t,i,u,c){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>u||r<c)throw new RangeError('"value" argument is out of bounds');if(t+i>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(r,t,i,u){if(r=+r,t=t>>>0,i=i>>>0,!u){var c=Math.pow(2,8*i)-1;U(this,r,t,i,c,0)}var l=1,x=0;for(this[t]=r&255;++x<i&&(l*=256);)this[t+x]=r/l&255;return t+i},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(r,t,i,u){if(r=+r,t=t>>>0,i=i>>>0,!u){var c=Math.pow(2,8*i)-1;U(this,r,t,i,c,0)}var l=i-1,x=1;for(this[t+l]=r&255;--l>=0&&(x*=256);)this[t+l]=r/x&255;return t+i},a.prototype.writeUint8=a.prototype.writeUInt8=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,1,255,0),this[t]=r&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},a.prototype.writeIntLE=function(r,t,i,u){if(r=+r,t=t>>>0,!u){var c=Math.pow(2,8*i-1);U(this,r,t,i,c-1,-c)}var l=0,x=1,m=0;for(this[t]=r&255;++l<i&&(x*=256);)r<0&&m===0&&this[t+l-1]!==0&&(m=1),this[t+l]=(r/x>>0)-m&255;return t+i},a.prototype.writeIntBE=function(r,t,i,u){if(r=+r,t=t>>>0,!u){var c=Math.pow(2,8*i-1);U(this,r,t,i,c-1,-c)}var l=i-1,x=1,m=0;for(this[t+l]=r&255;--l>=0&&(x*=256);)r<0&&m===0&&this[t+l+1]!==0&&(m=1),this[t+l]=(r/x>>0)-m&255;return t+i},a.prototype.writeInt8=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},a.prototype.writeInt16LE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},a.prototype.writeInt16BE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},a.prototype.writeInt32LE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},a.prototype.writeInt32BE=function(r,t,i){return r=+r,t=t>>>0,i||U(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function cr(e,r,t,i,u,c){if(t+i>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function hr(e,r,t,i,u){return r=+r,t=t>>>0,u||cr(e,r,t,4),f.write(e,r,t,i,23,4),t+4}a.prototype.writeFloatLE=function(r,t,i){return hr(this,r,t,!0,i)},a.prototype.writeFloatBE=function(r,t,i){return hr(this,r,t,!1,i)};function lr(e,r,t,i,u){return r=+r,t=t>>>0,u||cr(e,r,t,8),f.write(e,r,t,i,52,8),t+8}a.prototype.writeDoubleLE=function(r,t,i){return lr(this,r,t,!0,i)},a.prototype.writeDoubleBE=function(r,t,i){return lr(this,r,t,!1,i)},a.prototype.copy=function(r,t,i,u){if(!a.isBuffer(r))throw new TypeError("argument should be a Buffer");if(i||(i=0),!u&&u!==0&&(u=this.length),t>=r.length&&(t=r.length),t||(t=0),u>0&&u<i&&(u=i),u===i||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("sourceEnd out of bounds");u>this.length&&(u=this.length),r.length-t<u-i&&(u=r.length-t+i);var c=u-i;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,u):Uint8Array.prototype.set.call(r,this.subarray(i,u),t),c},a.prototype.fill=function(r,t,i,u){if(typeof r=="string"){if(typeof t=="string"?(u=t,t=0,i=this.length):typeof i=="string"&&(u=i,i=this.length),u!==void 0&&typeof u!="string")throw new TypeError("encoding must be a string");if(typeof u=="string"&&!a.isEncoding(u))throw new TypeError("Unknown encoding: "+u);if(r.length===1){var c=r.charCodeAt(0);(u==="utf8"&&c<128||u==="latin1")&&(r=c)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,r||(r=0);var l;if(typeof r=="number")for(l=t;l<i;++l)this[l]=r;else{var x=a.isBuffer(r)?r:a.from(r,u),m=x.length;if(m===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(l=0;l<i-t;++l)this[l+t]=x[l%m]}return this};var Gr=/[^+/0-9A-Za-z-_]/g;function Or(e){if(e=e.split("=")[0],e=e.trim().replace(Gr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function J(e,r){r=r||1/0;for(var t,i=e.length,u=null,c=[],l=0;l<i;++l){if(t=e.charCodeAt(l),t>55295&&t<57344){if(!u){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(l+1===i){(r-=3)>-1&&c.push(239,191,189);continue}u=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),u=t;continue}t=(u-55296<<10|t-56320)+65536}else u&&(r-=3)>-1&&c.push(239,191,189);if(u=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Xr(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function jr(e,r){for(var t,i,u,c=[],l=0;l<e.length&&!((r-=2)<0);++l)t=e.charCodeAt(l),i=t>>8,u=t%256,c.push(u),c.push(i);return c}function sr(e){return o.toByteArray(Or(e))}function q(e,r,t,i){for(var u=0;u<i&&!(u+t>=r.length||u>=e.length);++u)r[u+t]=e[u];return u}function C(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function P(e){return e!==e}var zr=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var i=t*16,u=0;u<16;++u)r[i+u]=e[t]+e[u];return r}()})(dr);window.Buffer=dr.Buffer;const At=globalThis;function Er(){}const Bt=n=>n;function et(n,o){for(const f in o)n[f]=o[f];return n}function vt(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function it(n){return n()}function Ut(){return Object.create(null)}function ot(n){n.forEach(it)}function ut(n){return typeof n=="function"}function It(n,o){return n!=n?o==o:n!==o||n&&typeof n=="object"||typeof n=="function"}let G;function Tt(n,o){return n===o?!0:(G||(G=document.createElement("a")),G.href=o,n===G.href)}function Ct(n){return Object.keys(n).length===0}function gr(n,...o){if(n==null){for(const h of o)h(void 0);return Er}const f=n.subscribe(...o);return f.unsubscribe?()=>f.unsubscribe():f}function bt(n){let o;return gr(n,f=>o=f)(),o}function St(n,o,f){n.$$.on_destroy.push(gr(o,f))}function kt(n,o,f,h){if(n){const p=Fr(n,o,f,h);return n[0](p)}}function Fr(n,o,f,h){return n[1]&&h?et(f.ctx.slice(),n[1](h(o))):f.ctx}function Lt(n,o,f,h){if(n[2]&&h){const p=n[2](h(f));if(o.dirty===void 0)return p;if(typeof p=="object"){const y=[],s=Math.max(o.dirty.length,p.length);for(let a=0;a<s;a+=1)y[a]=o.dirty[a]|p[a];return y}return o.dirty|p}return o.dirty}function Mt(n,o,f,h,p,y){if(p){const s=Fr(o,f,h,y);n.p(s,p)}}function Nt(n){if(n.ctx.length>32){const o=[],f=n.ctx.length/32;for(let h=0;h<f;h++)o[h]=-1;return o}return-1}function Rt(n){return n??""}function Dt(n){return n&&ut(n.destroy)?n.destroy:Er}let j=!1;function Ht(){j=!0}function Wt(){j=!1}function at(n,o,f,h){for(;n<o;){const p=n+(o-n>>1);f(p)<=h?n=p+1:o=p}return n}function ft(n){if(n.hydrate_init)return;n.hydrate_init=!0;let o=n.childNodes;if(n.nodeName==="HEAD"){const w=[];for(let d=0;d<o.length;d++){const _=o[d];_.claim_order!==void 0&&w.push(_)}o=w}const f=new Int32Array(o.length+1),h=new Int32Array(o.length);f[0]=-1;let p=0;for(let w=0;w<o.length;w++){const d=o[w].claim_order,_=(p>0&&o[f[p]].claim_order<=d?p+1:at(1,p,T=>o[f[T]].claim_order,d))-1;h[w]=f[_]+1;const F=_+1;f[F]=w,p=Math.max(F,p)}const y=[],s=[];let a=o.length-1;for(let w=f[p]+1;w!=0;w=h[w-1]){for(y.push(o[w-1]);a>=w;a--)s.push(o[a]);a--}for(;a>=0;a--)s.push(o[a]);y.reverse(),s.sort((w,d)=>w.claim_order-d.claim_order);for(let w=0,d=0;w<s.length;w++){for(;d<y.length&&s[w].claim_order>=y[d].claim_order;)d++;const _=d<y.length?y[d]:null;n.insertBefore(s[w],_)}}function ct(n,o){n.appendChild(o)}function ht(n){if(!n)return document;const o=n.getRootNode?n.getRootNode():n.ownerDocument;return o&&o.host?o:n.ownerDocument}function qt(n){const o=nr("style");return o.textContent="/* empty */",lt(ht(n),o),o.sheet}function lt(n,o){return ct(n.head||n,o),o.sheet}function st(n,o){if(j){for(ft(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentNode!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;o!==n.actual_end_child?(o.claim_order!==void 0||o.parentNode!==n)&&n.insertBefore(o,n.actual_end_child):n.actual_end_child=o.nextSibling}else(o.parentNode!==n||o.nextSibling!==null)&&n.appendChild(o)}function pt(n,o,f){n.insertBefore(o,f||null)}function yt(n,o,f){j&&!f?st(n,o):(o.parentNode!==n||o.nextSibling!=f)&&n.insertBefore(o,f||null)}function Q(n){n.parentNode&&n.parentNode.removeChild(n)}function Yt(n,o){for(let f=0;f<n.length;f+=1)n[f]&&n[f].d(o)}function nr(n){return document.createElement(n)}function Ar(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function er(n){return document.createTextNode(n)}function Gt(){return er(" ")}function Ot(){return er("")}function Xt(n,o,f,h){return n.addEventListener(o,f,h),()=>n.removeEventListener(o,f,h)}function jt(n){return function(o){return o.preventDefault(),n.call(this,o)}}function zt(n,o,f){f==null?n.removeAttribute(o):n.getAttribute(o)!==f&&n.setAttribute(o,f)}function Jt(n){return n.dataset.svelteH}function Pt(n){return Array.from(n.childNodes)}function Br(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function vr(n,o,f,h,p=!1){Br(n);const y=(()=>{for(let s=n.claim_info.last_index;s<n.length;s++){const a=n[s];if(o(a)){const w=f(a);return w===void 0?n.splice(s,1):n[s]=w,p||(n.claim_info.last_index=s),a}}for(let s=n.claim_info.last_index-1;s>=0;s--){const a=n[s];if(o(a)){const w=f(a);return w===void 0?n.splice(s,1):n[s]=w,p?w===void 0&&n.claim_info.last_index--:n.claim_info.last_index=s,a}}return h()})();return y.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,y}function Ur(n,o,f,h){return vr(n,p=>p.nodeName===o,p=>{const y=[];for(let s=0;s<p.attributes.length;s++){const a=p.attributes[s];f[a.name]||y.push(a.name)}y.forEach(s=>p.removeAttribute(s))},()=>h(o))}function Vt(n,o,f){return Ur(n,o,f,nr)}function Kt(n,o,f){return Ur(n,o,f,Ar)}function wt(n,o){return vr(n,f=>f.nodeType===3,f=>{const h=""+o;if(f.data.startsWith(h)){if(f.data.length!==h.length)return f.splitText(h.length)}else f.data=h},()=>er(o),!0)}function Zt(n){return wt(n," ")}function wr(n,o,f){for(let h=f;h<n.length;h+=1){const p=n[h];if(p.nodeType===8&&p.textContent.trim()===o)return h}return-1}function Qt(n,o){const f=wr(n,"HTML_TAG_START",0),h=wr(n,"HTML_TAG_END",f+1);if(f===-1||h===-1)return new xr(o);Br(n);const p=n.splice(f,h-f+1);Q(p[0]),Q(p[p.length-1]);const y=p.slice(1,p.length-1);for(const s of y)s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1;return new xr(o,y)}function $t(n,o){o=""+o,n.data!==o&&(n.data=o)}function rn(n,o){n.value=o??""}function tn(n,o,f,h){f==null?n.style.removeProperty(o):n.style.setProperty(o,f,h?"important":"")}function nn(n,o,f){for(let h=0;h<n.options.length;h+=1){const p=n.options[h];if(p.__value===o){p.selected=!0;return}}(!f||o!==void 0)&&(n.selectedIndex=-1)}function en(n){const o=n.querySelector(":checked");return o&&o.__value}function on(n,o,f){n.classList.toggle(o,!!f)}function xt(n,o,{bubbles:f=!1,cancelable:h=!1}={}){return new CustomEvent(n,{detail:o,bubbles:f,cancelable:h})}class mt{constructor(o=!1){k(this,"is_svg",!1);k(this,"e");k(this,"n");k(this,"t");k(this,"a");this.is_svg=o,this.e=this.n=null}c(o){this.h(o)}m(o,f,h=null){this.e||(this.is_svg?this.e=Ar(f.nodeName):this.e=nr(f.nodeType===11?"TEMPLATE":f.nodeName),this.t=f.tagName!=="TEMPLATE"?f:f.content,this.c(o)),this.i(h)}h(o){this.e.innerHTML=o,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(o){for(let f=0;f<this.n.length;f+=1)pt(this.t,this.n[f],o)}p(o){this.d(),this.h(o),this.i(this.a)}d(){this.n.forEach(Q)}}class xr extends mt{constructor(f=!1,h){super(f);k(this,"l");this.e=this.n=null,this.l=h}c(f){this.l?this.n=this.l:super.c(f)}i(f){for(let h=0;h<this.n.length;h+=1)yt(this.t,this.n[h],f)}}function un(n,o){return new n(o)}let O;function K(n){O=n}function R(){if(!O)throw new Error("Function called outside component initialization");return O}function an(n){R().$$.on_mount.push(n)}function fn(n){R().$$.after_update.push(n)}function cn(n){R().$$.on_destroy.push(n)}function hn(){const n=R();return(o,f,{cancelable:h=!1}={})=>{const p=n.$$.callbacks[o];if(p){const y=xt(o,f,{cancelable:h});return p.slice().forEach(s=>{s.call(n,y)}),!y.defaultPrevented}return!0}}function ln(n,o){return R().$$.context.set(n,o),o}function sn(n){return R().$$.context.get(n)}const W=[],mr=[];let N=[];const $=[],Ir=Promise.resolve();let rr=!1;function dt(){rr||(rr=!0,Ir.then(Et))}function pn(){return dt(),Ir}function _t(n){N.push(n)}function yn(n){$.push(n)}const Z=new Set;let M=0;function Et(){if(M!==0)return;const n=O;do{try{for(;M<W.length;){const o=W[M];M++,K(o),gt(o.$$)}}catch(o){throw W.length=0,M=0,o}for(K(null),W.length=0,M=0;mr.length;)mr.pop()();for(let o=0;o<N.length;o+=1){const f=N[o];Z.has(f)||(Z.add(f),f())}N.length=0}while(W.length);for(;$.length;)$.pop()();rr=!1,Z.clear(),K(n)}function gt(n){if(n.fragment!==null){n.update(),ot(n.before_update);const o=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,o),n.after_update.forEach(_t)}}function wn(n){const o=[],f=[];N.forEach(h=>n.indexOf(h)===-1?o.push(h):f.push(h)),f.forEach(h=>h()),N=o}export{K as $,Bt as A,kt as B,Mt as C,Nt as D,Lt as E,hn as F,cn as G,Rt as H,on as I,_t as J,ot as K,ln as L,St as M,bt as N,Jt as O,Yt as P,Tt as Q,rn as R,nn as S,sn as T,en as U,xr as V,Qt as W,yn as X,dr as Y,vt as Z,R as _,Gt as a,Et as a0,jt as a1,Dt as a2,ht as a3,qt as a4,xt as a5,Ut as a6,Ct as a7,wn as a8,O as a9,it as aa,W as ab,dt as ac,Ht as ad,Wt as ae,fn as b,Zt as c,Q as d,Ot as e,nr as f,Vt as g,Pt as h,yt as i,zt as j,tn as k,er as l,wt as m,$t as n,an as o,mr as p,un as q,Ar as r,It as s,pn as t,Kt as u,st as v,At as w,Er as x,Xt as y,ut as z};