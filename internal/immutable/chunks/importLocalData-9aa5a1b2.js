import{h as f,j as i,k as p,l as d,o as V,q as h,u as B,r as q,t as w,w as c,x as g,y as I,z as S}from"./stores-e2e154ba.js";import{a as t,l as n,c as m}from"./localstore-babdf033.js";import{n as b}from"./historyIdb-4d679be6.js";const x=()=>{const o=t.get("genesis");o!==null&&f.set(o);let e=t.get("primogem");e===null?(i.subscribe(u=>{e=u}),t.set("primogem",e)):i.set(e);const s=t.get("stardust");s!==null&&p.set(s);const a=t.get("starglitter");a!==null&&d.set(a);const l=t.get("intertwined");l!==null&&V.set(l);const r=t.get("acquaint");r!==null&&h.set(r),B.set(!!n.get("unlimitedFates")),q.set(!!n.get("muted")),w.set(!!n.get("animeoff")),b.onLoadCheck(),console.log("Balance Updated")},A=()=>{localStorage.getItem("storageVersion")!==c&&(m.clear(),localStorage.setItem("storageVersion",c));const e=m.get();if(!e)return g.set(I);const[s,a]=e.split("-");S.set(parseInt(a)),g.set(s),console.log(`Banner version set to ${s} phase ${a}`)};export{x as importLocalBalance,A as setBannerVersionAndPhase};
