import{S as L,i as j,s as A,e as x,b as S,A as B,h as m,E as G,F as N,k as p,a as I,q as F,l as u,m as y,c as W,r as Q,n as r,N as O,G as c,H as Y,a2 as z,u as J}from"./index-18ac2d2b.js";import{Y as K}from"./runtime.esm-670b0a78.js";import{a as P,h as U}from"./localstore-babdf033.js";import{b as X,j as Z}from"./stores-e2e154ba.js";function R(t){let a,e,s,i,n,f,o,k,b,v,l=t[3]("shop.recomended.claimingBlessing")+"",_,D,g,w=t[3]("shop.recomended.dayRemaining",{values:{days:`<span>${t[1]}</span>`}})+"",H,C;return{c(){a=p("section"),e=p("div"),s=p("div"),i=I(),n=p("div"),f=p("div"),o=p("img"),b=I(),v=p("h3"),_=F(l),D=I(),g=p("h4"),this.h()},l(d){a=u(d,"SECTION",{class:!0});var h=y(a);e=u(h,"DIV",{class:!0});var E=y(e);s=u(E,"DIV",{class:!0}),y(s).forEach(m),i=W(E),n=u(E,"DIV",{class:!0});var q=y(n);f=u(q,"DIV",{class:!0});var M=y(f);o=u(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(m),b=W(q),v=u(q,"H3",{class:!0});var V=y(v);_=Q(V,l),V.forEach(m),D=W(q),g=u(q,"H4",{class:!0});var T=y(g);T.forEach(m),q.forEach(m),E.forEach(m),h.forEach(m),this.h()},h(){r(s,"class","bg svelte-1yfqx8v"),O(o.src,k=t[2]["welkin-moon-girl.webp"])||r(o,"src",k),r(o,"alt","Welkin Moon Girl"),r(o,"class","svelte-1yfqx8v"),r(f,"class","milestone svelte-1yfqx8v"),r(v,"class","title svelte-1yfqx8v"),r(g,"class","msg svelte-1yfqx8v"),r(n,"class","content svelte-1yfqx8v"),r(e,"class","container svelte-1yfqx8v"),r(a,"class","svelte-1yfqx8v")},m(d,h){S(d,a,h),c(a,e),c(e,s),c(e,i),c(e,n),c(n,f),c(f,o),c(n,b),c(n,v),c(v,_),c(n,D),c(n,g),g.innerHTML=w,H||(C=Y(a,"click",z(t[4])),H=!0)},p(d,h){h&4&&!O(o.src,k=d[2]["welkin-moon-girl.webp"])&&r(o,"src",k),h&8&&l!==(l=d[3]("shop.recomended.claimingBlessing")+"")&&J(_,l),h&10&&w!==(w=d[3]("shop.recomended.dayRemaining",{values:{days:`<span>${d[1]}</span>`}})+"")&&(g.innerHTML=w)},d(d){d&&m(a),H=!1,C()}}}function $(t){let a,e=t[0]&&R(t);return{c(){e&&e.c(),a=x()},l(s){e&&e.l(s),a=x()},m(s,i){e&&e.m(s,i),S(s,a,i)},p(s,[i]){s[0]?e?e.p(s,i):(e=R(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:B,o:B,d(s){e&&e.d(s),s&&m(a)}}}function ee(t,a,e){let s,i;G(t,X,l=>e(2,s=l)),G(t,K,l=>e(3,i=l));let{show:n}=a;const f=N("closeWelkin"),o=N("handleObtained"),k=()=>{f(),Z.update(l=>{const _=l+8e3;return P.set("primogem",_),_}),o("primogem",8e3)};let b;const v=l=>{e(1,b=U.getData().remaining)};return t.$$set=l=>{"show"in l&&e(0,n=l.show)},t.$$.update=()=>{t.$$.dirty&1&&v()},[n,b,s,i,k]}class ne extends L{constructor(a){super(),j(this,a,ee,$,A,{show:0})}}export{ne as default};
