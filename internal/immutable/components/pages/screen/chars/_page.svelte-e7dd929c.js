import{S as ie,i as ne,s as oe,k as y,a as Q,e as $,M as ce,l as b,h as d,c as G,n as u,G as m,b as S,t as H,d as B,f as M,E as U,o as ue,g as J,m as q,p as x,q as K,r as O,A as j,N as z,u as re,$ as fe,v as de,w as _e,x as he,y as me,a0 as pe}from"../../../../chunks/index-18ac2d2b.js";import{Y as ve}from"../../../../chunks/runtime.esm-670b0a78.js";import{A as L}from"../../../../chunks/env-e4f9f4f1.js";import{d as ge,v as ye,b as be}from"../../../../chunks/stores-e2e154ba.js";import{I as ke}from"../../../../chunks/Icon-7295ab5e.js";function ee(a,t,e){const i=a.slice();return i[11]=t[e],i[13]=e,i}function we(a){let t,e,i,l=a[0].name!=="No Name"&&te(a);return{c(){t=y("div"),e=y("div"),l&&l.c(),this.h()},l(r){t=b(r,"DIV",{class:!0,style:!0});var s=q(t);e=b(s,"DIV",{class:!0});var c=q(e);l&&l.l(c),c.forEach(d),s.forEach(d),this.h()},h(){u(e,"class","container svelte-1lq80n"),u(t,"class","wish-result svelte-1lq80n"),x(t,"background-image","url('"+a[5]["splash-background.webp"]+"')")},m(r,s){S(r,t,s),m(t,e),l&&l.m(e,null),i=!0},p(r,s){r[0].name!=="No Name"?l?(l.p(r,s),s&1&&M(l,1)):(l=te(r),l.c(),M(l,1),l.m(e,null)):l&&(J(),H(l,1,1,()=>{l=null}),B()),(!i||s&32)&&x(t,"background-image","url('"+r[5]["splash-background.webp"]+"')")},i(r){i||(M(l),i=!0)},o(r){H(l),i=!1},d(r){r&&d(t),l&&l.d()}}}function Ee(a){let t,e,i;return{c(){t=y("div"),e=y("h1"),i=K("You're going to unresolved page, redirecting to index ..."),this.h()},l(l){t=b(l,"DIV",{class:!0});var r=q(t);e=b(r,"H1",{});var s=q(e);i=O(s,"You're going to unresolved page, redirecting to index ..."),s.forEach(d),r.forEach(d),this.h()},h(){u(t,"class","error svelte-1lq80n")},m(l,r){S(l,t,r),m(t,e),m(e,i)},p:j,i:j,o:j,d(l){l&&d(t)}}}function te(a){let t,e,i,l,r,s,c,f,p,w,v,V,_,o,k=[],F=new Map,A,D,P,N,T=Array(a[0].rarity);const W=n=>n[13];for(let n=0;n<T.length;n+=1){let h=ee(a,T,n),I=W(h);F.set(I,k[n]=le(I))}let E=a[0].stelaFortuna&&se(a),g=a[0].fateType&&ae(a);return{c(){t=y("div"),e=y("img"),r=Q(),s=y("div"),c=y("i"),p=Q(),w=y("div"),v=y("div"),V=K(a[4]),_=Q(),o=y("div");for(let n=0;n<k.length;n+=1)k[n].c();A=Q(),D=y("div"),E&&E.c(),P=Q(),g&&g.c(),this.h()},l(n){t=b(n,"DIV",{class:!0,style:!0});var h=q(t);e=b(h,"IMG",{src:!0,alt:!0,class:!0}),r=G(h),s=b(h,"DIV",{class:!0});var I=q(s);c=b(I,"I",{class:!0}),q(c).forEach(d),p=G(I),w=b(I,"DIV",{class:!0});var Y=q(w);v=b(Y,"DIV",{class:!0});var X=q(v);V=O(X,a[4]),X.forEach(d),_=G(Y),o=b(Y,"DIV",{class:!0});var Z=q(o);for(let C=0;C<k.length;C+=1)k[C].l(Z);Z.forEach(d),Y.forEach(d),A=G(I),D=b(I,"DIV",{class:!0});var R=q(D);E&&E.l(R),P=G(R),g&&g.l(R),R.forEach(d),I.forEach(d),h.forEach(d),this.h()},h(){z(e.src,i=a[5][`splash-art/${a[0].outfit||a[0].name}`])||u(e,"src",i),u(e,"alt",l=a[0].name),u(e,"class","splash-art svelte-1lq80n"),u(c,"class",f="elemen gi-"+a[0].vision+" "+a[0].vision+" filter-drop icon-gradient svelte-1lq80n"),u(v,"class","text svelte-1lq80n"),u(o,"class","star"),u(w,"class","name svelte-1lq80n"),u(D,"class","bonus svelte-1lq80n"),u(s,"class","info svelte-1lq80n"),u(t,"class","splatter svelte-1lq80n"),u(t,"style",a[3])},m(n,h){S(n,t,h),m(t,e),m(t,r),m(t,s),m(s,c),m(s,p),m(s,w),m(w,v),m(v,V),m(w,_),m(w,o);for(let I=0;I<k.length;I+=1)k[I].m(o,null);m(s,A),m(s,D),E&&E.m(D,null),m(D,P),g&&g.m(D,null),N=!0},p(n,h){(!N||h&33&&!z(e.src,i=n[5][`splash-art/${n[0].outfit||n[0].name}`]))&&u(e,"src",i),(!N||h&1&&l!==(l=n[0].name))&&u(e,"alt",l),(!N||h&1&&f!==(f="elemen gi-"+n[0].vision+" "+n[0].vision+" filter-drop icon-gradient svelte-1lq80n"))&&u(c,"class",f),(!N||h&16)&&re(V,n[4]),h&1&&(T=Array(n[0].rarity),k=fe(k,h,W,1,n,T,F,o,pe,le,null,ee)),n[0].stelaFortuna?E?E.p(n,h):(E=se(n),E.c(),E.m(D,P)):E&&(E.d(1),E=null),n[0].fateType?g?(g.p(n,h),h&1&&M(g,1)):(g=ae(n),g.c(),M(g,1),g.m(D,null)):g&&(J(),H(g,1,1,()=>{g=null}),B()),(!N||h&8)&&u(t,"style",n[3])},i(n){N||(M(g),N=!0)},o(n){H(g),N=!1},d(n){n&&d(t);for(let h=0;h<k.length;h+=1)k[h].d();E&&E.d(),g&&g.d()}}}function le(a,t){let e;return{key:a,first:null,c(){e=y("i"),this.h()},l(i){e=b(i,"I",{class:!0}),q(e).forEach(d),this.h()},h(){u(e,"class","gi-star svelte-1lq80n"),this.first=e},m(i,l){S(i,e,l)},p(i,l){},d(i){i&&d(e)}}}function se(a){let t,e,i,l;return{c(){t=y("div"),e=y("img"),this.h()},l(r){t=b(r,"DIV",{class:!0});var s=q(t);e=b(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(d),this.h()},h(){z(e.src,i=a[5][`stella-fortuna-${a[0].rarity}star.webp`])||u(e,"src",i),u(e,"alt","Stella Formula"),u(e,"class","svelte-1lq80n"),u(t,"class",l="stella stella"+a[0].rarity+" svelte-1lq80n")},m(r,s){S(r,t,s),m(t,e)},p(r,s){s&33&&!z(e.src,i=r[5][`stella-fortuna-${r[0].rarity}star.webp`])&&u(e,"src",i),s&1&&l!==(l="stella stella"+r[0].rarity+" svelte-1lq80n")&&u(t,"class",l)},d(r){r&&d(t)}}}function ae(a){let t,e,i,l,r=a[0].fateQty+"",s,c;return e=new ke({props:{type:"starglitter",width:"80%"}}),{c(){t=y("div"),de(e.$$.fragment),i=Q(),l=y("span"),s=K(r),this.h()},l(f){t=b(f,"DIV",{class:!0});var p=q(t);_e(e.$$.fragment,p),i=G(p),l=b(p,"SPAN",{class:!0});var w=q(l);s=O(w,r),w.forEach(d),p.forEach(d),this.h()},h(){u(l,"class","svelte-1lq80n"),u(t,"class","masterless starglitter svelte-1lq80n")},m(f,p){S(f,t,p),he(e,t,null),m(t,i),m(t,l),m(l,s),c=!0},p(f,p){(!c||p&1)&&r!==(r=f[0].fateQty+"")&&re(s,r)},i(f){c||(M(e.$$.fragment,f),c=!0)},o(f){H(e.$$.fragment,f),c=!1},d(f){f&&d(t),me(e)}}}function qe(a){let t,e,i,l,r,s,c,f,p;document.title=t=`\r
		`+a[4]+" | "+a[1]("title",{default:L})+`\r
	`;const w=[Ee,we],v=[];function V(_,o){return _[2]?0:1}return s=V(a),c=v[s]=w[s](a),{c(){e=y("meta"),i=y("meta"),l=y("meta"),r=Q(),c.c(),f=$(),this.h()},l(_){const o=ce('[data-svelte="svelte-1quiw3z"]',document.head);e=b(o,"META",{name:!0,content:!0}),i=b(o,"META",{property:!0,content:!0}),l=b(o,"META",{property:!0,content:!0}),o.forEach(d),r=G(_),c.l(_),f=$(),this.h()},h(){u(e,"name","title"),u(e,"content",L),u(i,"property","og:title"),u(i,"content",L),u(l,"property","twitter:title"),u(l,"content",L)},m(_,o){m(document.head,e),m(document.head,i),m(document.head,l),S(_,r,o),v[s].m(_,o),S(_,f,o),p=!0},p(_,[o]){(!p||o&18)&&t!==(t=`\r
		`+_[4]+" | "+_[1]("title",{default:L})+`\r
	`)&&(document.title=t);let k=s;s=V(_),s===k?v[s].p(_,o):(J(),H(v[k],1,1,()=>{v[k]=null}),B(),c=v[s],c?c.p(_,o):(c=v[s]=w[s](_),c.c()),M(c,1),c.m(f.parentNode,f))},i(_){p||(M(c),p=!0)},o(_){H(c),p=!1},d(_){d(e),d(i),d(l),_&&d(r),v[s].d(_),_&&d(f)}}}function Ie(a,t,e){let i,l,r,s,c,f,p;U(a,ge,o=>e(7,s=o)),U(a,ye,o=>e(8,c=o)),U(a,ve,o=>e(1,f=o)),U(a,be,o=>e(5,p=o));let w,v={rarity:0,name:"No Name",stelaFortuna:!1,fateType:"",fateQty:0,vision:""};const V=o=>{const k=o.split("/");if(k.length<6)return{name:"No Name"};let[F,A,D,P,N,T,W]=k;return P=P==="1",A=parseInt(A,10),T=T!=="undefined"?T:!1,{name:F,rarity:A,vision:D,stelaFortuna:P,fateQty:N,fateType:T,outfit:W}};return ue(()=>{try{const o=new URL(window.location.href),F=new URLSearchParams(o.search).get("a");if(F){const A=atob(F);if(e(0,v=V(A)),v.name!=="No Name"||v.rarity)return}throw new Error("No Data to show")}catch{e(2,w=!0),window.location.replace("/")}}),a.$$.update=()=>{a.$$.dirty&3&&e(4,i=f(`${v.name}.name`)),a.$$.dirty&384&&e(6,l=s>c?c:s),a.$$.dirty&64&&e(3,r=`width: ${l}px; height: ${l}px`)},[v,f,w,r,i,p,l,s,c]}class Me extends ie{constructor(t){super(),ne(this,t,Ie,qe,oe,{})}}export{Me as default};