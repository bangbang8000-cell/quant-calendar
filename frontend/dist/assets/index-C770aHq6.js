var Rd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as zd,L as ve,O as ga,Z as Ad,au as Vt,M as pe,P as be,aW as Ld,a0 as Le,_ as Be,F as ot,al as Ct,S as rt,a1 as nt,X as ta,ai as jt,q as Ra,o as za,a8 as us,r as kt,e as at,av as Id,Y as ja,$ as qa,R as Nd,aC as fa,T as Od,Q as oa,p as jd,n as Vd}from"./vendor-vue-DDF9zi1T.js";import{e as Fd,E as Hd,a as Bd,b as Kd,c as Wd,z as Ud}from"./vendor-ep-VOop1zGa.js";import{C as Gd,a as Yd,W as Jd,I as Qd,S as $d,B as Xd,F as Zd,b as eu,c as tu,d as au,e as su,f as nu,P as lu,g as iu,h as ou,i as ru,T as cu,j as du,L as uu,k as vu,G as mu,U as pu,l as fu,m as gu,n as hu,D as yu,o as bu,p as wu,M as ku,q as _u,R as xu,r as Su,s as Cu,K as qu,t as Eu,u as Mu,v as Tu,w as Pu,x as Du,y as Ru,z as zu,A as Au,E as Lu,H as Iu,O as Nu,J as Ou,N as ju,Q as Vu,V as Fu,X as Hu,Y as Bu,Z as Ku,_ as Wu,$ as Uu,a0 as Gu,a1 as Yu,a2 as Ju,a3 as Qu,a4 as $u,a5 as Xu,a6 as Zu,a7 as ev,a8 as tv,a9 as av,aa as sv,ab as nv,ac as lv,ad as iv,ae as ov,af as rv,ag as cv,ah as dv,ai as uv,aj as vv,ak as mv,al as pv,am as fv,an as gv,ao as hv,ap as yv,aq as bv,ar as wv,as as kv,at as _v,au as xv,av as Sv,aw as Cv,ax as qv,ay as Ev,az as Mv,aA as Tv,aB as Pv,aC as Dv,aD as Rv,aE as zv,aF as Av,aG as Lv,aH as Iv,aI as Nv,aJ as Ov,aK as jv,aL as Vv,aM as Fv,aN as Hv,aO as Bv,aP as Kv,aQ as Wv}from"./vendor-lucide-DidEUx9K.js";var ig=Rd((yg,Re)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const T of m.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&e(T)}).observe(document,{childList:!0,subtree:!0});function g(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function e(u){if(u.ep)return;u.ep=!0;const m=g(u);fetch(u.href,m)}})();window.Vue=zd;const ha=Fd||{};window.ElementPlus=ha;ha.ElMessage=ha.ElMessage||Hd;ha.ElMessageBox=ha.ElMessageBox||Bd;ha.ElNotification=ha.ElNotification||Kd;ha.ElLoading=ha.ElLoading||Wd;window.ElementPlusLocaleZhCn={default:Ud};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},g={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,y,l){return"hsl("+s+", "+y+"%, "+l+"%)"}function u(s,y,l){y=y/100,l=l/100;const p=function(b){return(b+s/30)%12},X=y*Math.min(l,1-l),P=function(b){return l-X*Math.max(-1,Math.min(p(b)-3,Math.min(9-p(b),1)))};return Math.round(255*P(0))+", "+Math.round(255*P(8))+", "+Math.round(255*P(4))}const m=5;function T(s,y,l){return u(s,y,l).split(",").map(function(p){return parseInt(p,10)})}function r(s){const y=function(l){return l=l/255,l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)};return .2126*y(s[0])+.7152*y(s[1])+.0722*y(s[2])}function n(s,y){const l=r(s),p=r(y),X=Math.max(l,p),P=Math.min(l,p);return(X+.05)/(P+.05)}function f(s,y,l){for(var p=8,X=92,P=0;P<26;P++){var b=(p+X)/2;r(T(s,y,b))<l?p=b:X=b}return Math.round(X*10)/10}function o(s,y,l,p,X){let P=38,b=76;for(let v=0;v<24;v++){const k=(P+b)/2;n(T(s,p,k),T(s,y,l))>=X?b=k:P=k}return Math.round(b*10)/10}function x(s,y){var l={};return y==="light"?(l["--qc-neutral-50"]=e(s,18,98),l["--qc-neutral-100"]=e(s,16,95),l["--qc-neutral-200"]=e(s,14,90),l["--qc-neutral-300"]=e(s,12,83),l["--qc-neutral-400"]=e(s,10,68),l["--qc-neutral-500"]=e(s,10,53),l["--qc-neutral-600"]=e(s,10,40),l["--qc-neutral-700"]=e(s,10,30),l["--qc-neutral-800"]=e(s,10,20),l["--qc-neutral-900"]=e(s,10,12),l["--qc-background"]=e(s,18,98),l["--qc-muted"]=e(s,16,95),l["--qc-border"]=e(s,12,72),l["--chart-axis"]=e(s,12,55),l["--chart-split"]=e(s,10,88),l["--qc-foreground"]=e(s,10,12),l["--qc-muted-foreground"]=e(s,9,38),l["--qc-nav-item-default"]=e(s,9,38),l["--qc-nav-item-hover"]=e(s,10,12),l["--qc-nav-group-label"]=e(s,9,40),l["--qc-nav-bg"]="#ffffff",l["--bg-page"]=e(s,20,97),l["--bg-stripe"]=e(s,20,97),l["--bg-card-header"]=e(s,24,96),l["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",l["--bg-hover"]=e(s,26,94),l["--bg-tertiary"]=e(s,14,93),l["--badge-gold-bg"]=e(s,26,96),l["--gold-bg"]=e(s,20,97),l["--border-light"]=e(s,22,89),l["--border-base"]=e(s,24,79),l["--border-color"]=e(s,14,88),l["--text-primary"]=e(s,12,12),l["--text-secondary"]=e(s,12,32),l["--text-tertiary"]=e(s,14,40),l["--text-disabled"]=e(s,9,q(s,9,F(s,18,98),25,70,!0,3.2)),l["--qc-card"]="#ffffff",l["--qc-popover"]="#ffffff",l["--qc-nav-border"]=e(s,12,72),l["--qc-nav-item-hover-bg"]=e(s,16,95),l["--qc-overlay"]="rgba(31, 29, 26, 0.5)",l["--bg-card"]="#ffffff",l["--surface"]="#ffffff",l["--border-heavy"]=e(s,22,72),l["--surface-canvas"]=e(s,18,98),l["--surface-card"]="#ffffff",l["--surface-raised"]="#ffffff",l["--surface-sunken"]=e(s,16,96),l["--surface-input"]="#ffffff",l["--surface-hover"]=e(s,26,94),l["--border-strong"]=e(s,22,72),l["--scrollbar-thumb"]="rgba("+u(s,12,72)+", 0.5)",l["--bg-page-rgb"]=u(s,20,97)):(l["--qc-background"]=e(s,10,8),l["--qc-card"]=e(s,11,11),l["--qc-popover"]=e(s,11,11),l["--qc-muted"]=e(s,12,14),l["--qc-border"]=e(s,14,30),l["--chart-axis"]=e(s,16,52),l["--chart-split"]=e(s,14,26),l["--qc-nav-bg"]=e(s,10,9),l["--qc-nav-border"]=e(s,13,22),l["--qc-nav-item-hover-bg"]=e(s,12,14),l["--bg-page"]=e(s,10,8),l["--bg-card"]=e(s,11,11),l["--bg-card-header"]=e(s,12,14),l["--bg-stripe"]=e(s,10,9),l["--bg-hover"]=e(s,12,14),l["--bg-tertiary"]=e(s,12,14),l["--border-light"]=e(s,13,18),l["--border-base"]=e(s,14,26),l["--border-heavy"]=e(s,16,38),l["--border-color"]=e(s,13,22),l["--surface"]=e(s,11,11),l["--surface-canvas"]=e(s,10,8),l["--surface-card"]=e(s,11,11),l["--surface-raised"]=e(s,12,14),l["--surface-sunken"]=e(s,12,9),l["--surface-input"]=e(s,12,9),l["--surface-hover"]=e(s,12,15),l["--border-strong"]=e(s,16,42),l["--scrollbar-thumb"]="rgba("+u(s,16,52)+", 0.5)",l["--bg-page-rgb"]=u(s,10,8),l["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),l}const w=4.6;var E=[255,255,255];function C(s){return u(s,10,8).split(",").map(function(y){return parseInt(y,10)})}function q(s,y,l,p,X,P,b){for(var v=b||w,k=p,c=X,N=0;N<24;N++){var oe=(k+c)/2,J=n(T(s,y,oe),l)>=v;P?J?k=oe:c=oe:J?c=oe:k=oe}return Math.round((P?k:c)*10)/10}function F(s,y,l){return u(s,y,l).split(",").map(function(p){return parseInt(p,10)})}function D(s){const y=f(s,75,.18),l=f(s,75,.26),p=f(s,70,.36),X=f(s,85,.12),P=u(s,75,y),b=q(s,68,E,14,62,!0),v=Math.max(12,b-5),k=Math.max(10,b-11),c=u(s,16,95).split(",").map(function(U){return parseInt(U,10)}),N=u(s,85,92).split(",").map(function(U){return parseInt(U,10)}),oe=q(s,78,c,10,58,!0,4.6),J=q(s,80,N,10,58,!0,4.6),M=Math.min(32,q(s,80,E,8,60,!0,4.6));return{...x(s,"light"),"--primary-color":e(s,75,y),"--primary-rgb":P,"--color-primary":e(s,75,y),"--qc-primary":e(s,75,y),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,p),"--qc-primary-500":e(s,75,l),"--qc-primary-600":e(s,80,y),"--qc-primary-700":e(s,85,X),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--text-link":e(s,78,oe),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+P+", 0.08)","--btn-primary-bg":e(s,80,M),"--btn-primary-border":e(s,80,M),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+P+", 0.08)","--btn-primary-plain-border":"rgba("+P+", 0.25)","--btn-primary-plain-color":e(s,80,oe),"--btn-primary-plain-hover-bg":"rgba("+P+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,oe),"--gradient":"linear-gradient(135deg, "+e(s,80,k)+" 0%, "+e(s,76,v)+" 50%, "+e(s,70,b)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,v)+" 0%, "+e(s,85,k)+" 100%)","--primary-text":e(s,78,oe),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,m)+5))+" 0%, "+e(s,58,o(s,45,14,58,m))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,J),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,J),"--qc-ring":e(s,75,q(s,75,F(s,18,98),25,70,!0,3.2)),"--brand-soft-text":e(s,80,q(s,80,F(s,80,84),10,58,!0,4.6)),"--border-control":e(s,16,q(s,16,F(s,18,98),30,80,!0,3.2))}}function d(s){const y=f(s,85,.34),l=f(s,85,.46),p=u(s,85,y),X=q(s,80,C(s),30,92,!1),P=Math.min(94,X+8),b=Math.min(96,X+16),v=F(s,55,22),k=F(s,10,9),c=p.split(",").map(function(ie){return parseInt(ie,10)}),N=[0,1,2].map(function(ie){return Math.round(c[ie]*.12+k[ie]*.88)}),oe=q(s,85,N,45,96,!1,4.6),J=q(s,85,v,45,96,!1,4.6),M=Math.min(94,q(s,92,v,45,96,!1,4.6)),U=Math.min(96,M+6);return{...x(s,"dark"),"--primary-color":e(s,85,y),"--primary-rgb":p,"--color-primary":e(s,85,y),"--qc-primary":e(s,90,y),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,l),"--qc-primary-600":e(s,90,y),"--qc-primary-700":e(s,92,M),"--qc-primary-800":e(s,90,U),"--qc-primary-900":e(s,92,Math.min(98,U+8)),"--text-link":e(s,85,J),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+p+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+p+", 0.08)","--btn-primary-plain-border":"rgba("+p+", 0.25)","--btn-primary-plain-color":e(s,85,J),"--btn-primary-plain-hover-bg":"rgba("+p+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,J),"--gradient":"linear-gradient(135deg, "+e(s,80,X)+" 0%, "+e(s,85,P)+" 50%, "+e(s,85,b)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,b)+" 0%, "+e(s,80,X)+" 100%)","--primary-text":e(s,85,J),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,m)+5))+" 0%, "+e(s,55,o(s,40,12,55,m))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,oe),"--qc-nav-item-active-bg":"rgba("+p+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+p+", 0.12)","--qc-nav-badge-text":e(s,85,oe),"--border-control":e(s,16,q(s,16,F(s,11,11),25,70,!1,3.2)),"--brand-soft-text":e(s,85,q(s,85,F(s,55,26),45,96,!1,4.6)),"--qc-ring":e(s,85,65)}}var i=[],h={mode:"light",hue:45},V=!1;function W(s,y){try{var l=document.querySelector('meta[name="theme-color"]');if(!l)return;var p=y?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];p&&l.setAttribute("content",p)}catch{}}function S(){if(!(V||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),y=function(){h.mode==="system"&&$("system",h.hue)};s.addEventListener?s.addEventListener("change",y):s.addListener&&s.addListener(y),V=!0}}function O(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var K=-1;function A(s){return s=parseInt(s,10),isNaN(s)?45:s<0?K:Math.max(0,Math.min(359,s))}function L(s){return Object.keys(s).forEach(function(y){var l=s[y];if(typeof l=="string"){l.indexOf("hsl(")>=0&&(l=l.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(v,k){return"hsl("+k+", 0%"}));var p=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(l);if(p){var X=Math.round(.2126*+p[1]+.7152*+p[2]+.0722*+p[3]);l="rgba("+X+", "+X+", "+X+(p[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(l)){var P=l.split(",").map(function(v){return parseInt(v,10)}),b=Math.round(.2126*P[0]+.7152*P[1]+.0722*P[2]);l=b+", "+b+", "+b}s[y]=l}}),s}function H(s,y){var l=F(45,0,y?22:95),p=F(45,0,y?8:98),X=F(45,0,y?11:100),P=y?q(45,0,l,45,96,!1,4.6):q(45,0,l,10,58,!0,4.6),b=F(45,0,y?22:92),v=y?q(45,0,b,45,96,!1,4.6):q(45,0,b,10,58,!0,4.6),k=y?q(45,0,p,45,96,!1,3.2):q(45,0,p,25,70,!0,3.2),c=y?q(45,0,X,25,70,!1,3.2):q(45,0,p,30,80,!0,3.2),N=y?q(45,0,F(45,0,26),45,96,!1,4.6):q(45,0,F(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+N+"%)";var oe="hsl(45, 0%, "+P+"%)";if(s["--primary-text"]=oe,s["--text-link"]=oe,s["--btn-primary-text-color"]=oe,s["--btn-primary-plain-color"]=oe,s["--qc-nav-item-active"]="hsl(45, 0%, "+v+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+v+"%)",s["--qc-ring"]="hsl(45, 0%, "+k+"%)",s["--border-control"]="hsl(45, 0%, "+c+"%)",y){var J=q(45,0,F(45,0,8),30,92,!1,4.6),M=Math.min(94,J+8),U=Math.min(96,J+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+J+"%) 0%, hsl(45, 0%, "+M+"%) 50%, hsl(45, 0%, "+U+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+U+"%) 0%, hsl(45, 0%, "+J+"%) 100%)"}else{var ie=q(45,0,E,14,62,!0,4.6),fe=Math.max(12,ie-5),Se=Math.max(10,ie-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+Se+"%) 0%, hsl(45, 0%, "+fe+"%) 50%, hsl(45, 0%, "+ie+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+fe+"%) 0%, hsl(45, 0%, "+Se+"%) 100%)"}var Y=o(45,0,14,0,m);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Y+5)+"%) 0%, hsl(45, 0%, "+Y+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function $(s,y){let l=s||"light",p=y==null||y===""?null:y;if(t[s]){const N=t[s];l=N[0],p==null&&(p=N[1])}l==="system"&&(l=O()?"dark":"light");const X=l==="dark";p=A(p??45);const P=p===K,b=document.documentElement;b.setAttribute("data-theme",X?"dark-pro":"gold"),b.setAttribute("data-theme-mode",X?"dark":"light"),b.setAttribute("data-theme-neutral",P?"true":"false");let v=X?d(P?45:p):D(P?45:p);P&&(v=H(L(v),X));for(var k=Object.keys(v),c=0;c<i.length;c++)k.indexOf(i[c])===-1&&b.style.removeProperty(i[c]);k.forEach(function(N){b.style.setProperty(N,v[N])}),i=k,h.mode=typeof s=="string"&&s?s:"light",h.hue=p,W(v,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(p))}catch{}return{mode:X?"dark":"light",hue:p}}function Z(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return A(s)}catch{}var y=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(y&&y.getPreference){var l=y.getPreference("theme_hue");if(l!=null&&l!=="")return A(l)}return null}function le(s){var y=Z();return $(s,y??void 0)}function te(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const y=t[s];return{mode:y[0],hue:y[1]}}function R(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let y=s.theme||"system",l=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const p=te();return l==null&&p&&(y=p.mode,l=p.hue),l==null&&(l=45),S(),$(y,l)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:g,NEUTRAL_HUE:K,generateLightTokens:D,generateDarkTokens:d,migrateLegacyTheme:te,persistedHue:Z,applyLegacyTheme:le,applyTheme:$,init:R},typeof queueMicrotask=="function"?queueMicrotask(R):R()})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],g={};let e=a,u=null;function m(){return u&&typeof u=="object"&&"value"in u?u.value||a:e}function T(w,E){return t.indexOf(w)===-1?!1:(g[w]=E&&typeof E=="object"?E:{},!0)}function r(w){const E=t.indexOf(w)!==-1?w:a;return e=E,u&&typeof u=="object"&&"value"in u&&(u.value=E),typeof document<"u"&&document.documentElement.setAttribute("lang",E),e}function n(){return m()}function f(w){if(w&&typeof w=="object"&&"value"in w){u=w;const E=t.indexOf(w.value)!==-1?w.value:a;w.value=E,e=E}return e}function o(w,E){const C=m(),q=g[C]||{};let F=w in q?q[w]:null;if(F==null&&C!=="en"){const D=g.en||{};F=w in D?D[w]:null}return F==null&&(F=String(w)),E&&typeof E=="object"&&Object.keys(E).forEach(function(D){F=F.replace(new RegExp("\\{"+D+"\\}","g"),String(E[D]))}),F}const x={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:g,registerLocale:T,setLocale:r,getLocale:n,bindLocale:f,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=x),x});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let g=[];function e(C){const q=String(C||"");let F="";for(const D of q){const d=a[D];d?F+=d.charAt(0):/[a-zA-Z0-9]/.test(D)&&(F+=D.toLowerCase())}return F}function u(C){const q=String(C||"");let F="";for(const D of q){const d=a[D];d?F+=d:/[a-zA-Z0-9]/.test(D)&&(F+=D.toLowerCase())}return F}function m(C){return String(C||"").trim().toLowerCase()}function T(C,q){const F=(q.code||"").toLowerCase();return/^\d+$/.test(C)?F.indexOf(C)!==-1:/[\u4e00-\u9fa5]/.test(C)?(q.name||"").toLowerCase().indexOf(C)!==-1:F.indexOf(C)!==-1||(q.initials||e(q.name)).indexOf(C)!==-1||(q.pinyin||u(q.name)).indexOf(C)!==-1}function r(C){const q={},F=[],D=function(d,i,h){!d||q[d]||(q[d]=!0,F.push({code:d,name:i||d,source:h||"core",initials:e(i||d),pinyin:u(i||d)}))};return t.forEach(function(d){D(d.code,d.name,"core")}),(C||[]).forEach(function(d){D(d.code,d.name,"extra")}),F}function n(C,q){const F=m(C);if(!F||!q||!q.length)return[];const D=F.split(/[\s,，、;；]+/).filter(Boolean);return D.length?q.filter(function(d){return D.every(function(i){return T(i,d)})}).slice(0,20).map(function(d){return{code:d.code,name:d.name,source:d.source||"core"}}):[]}function f(C){Array.isArray(C)&&(g=g.concat(C))}function o(){return g.slice()}function x(){return r(g)}function w(C){return n(C,x())}const E={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:u,normalizeQuery:m,matchToken:T,buildStockIndex:r,searchStocksByQuery:n,registerExtraStocks:f,getExtraStocks:o,getStockIndex:x,searchCoreStocks:w};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=E),E});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},g=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function u(i){return i=parseInt(i,10),isNaN(i)?!1:i===-1||i>=0&&i<=360}const m={light:"classic-white",dark:"dark-pro"};function T(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const h=JSON.parse(i);return h&&typeof h=="object"?h:{}}catch{return{}}}function r(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function n(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function f(){const i=Object.assign({},t,T()),h={};return g.forEach(function(V){const W=i[V];h[V]=V==="theme_hue"?u(W)?parseInt(W,10):t[V]:e[V].indexOf(W)!==-1?W:t[V]}),h}function o(i){if(g.indexOf(i)!==-1)return f()[i]}function x(i,h){return g.indexOf(i)===-1?!1:i==="theme_hue"?u(h):e[i].indexOf(h)!==-1}function w(i,h){if(!x(i,h))return!1;const V=T();return V[i]=h,r(V),n()&&C({[i]:h}),!0}function E(i){if(!i||typeof i!="object")return!1;const h={};if(Object.keys(i).forEach(function(W){x(W,i[W])&&(h[W]=i[W])}),!Object.keys(h).length)return!1;const V=Object.assign({},T(),h);return r(V),n()&&C(h),!0}function C(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function q(){const i=f();if(!n()||typeof fetch>"u")return i;try{const h=await fetch("/api/user_config/preferences");if(h.ok){const V=await h.json();if(V.success&&V.preferences){const W=V.preferences;g.forEach(function(S){const O=W[S];if(S==="theme_hue"){u(O)&&(i[S]=parseInt(O,10));return}e[S].indexOf(O)!==-1&&(i[S]=O)}),r(i)}}}catch(h){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",h&&h.message)}return i}function F(i){const h=i||o("info_density")||"comfortable",V=e.info_density.indexOf(h)!==-1?h:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",V),V}function D(i){const h=i||o("theme")||"system";if(h==="system"){let V=!1;return typeof window<"u"&&window.matchMedia&&(V=window.matchMedia("(prefers-color-scheme: dark)").matches),V?"dark":"light"}return h==="dark"||h==="light"?h:"light"}const d={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:g,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:m,getLocal:f,getPreference:o,isValidValue:x,setPreference:w,setPreferences:E,saveToBackend:C,loadPreferences:q,resolveTheme:D,applyDensity:F};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=d),d});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function g(){if(typeof localStorage>"u")return[];try{const f=localStorage.getItem(a);if(!f)return[];const o=JSON.parse(f);return Array.isArray(o)?o:[]}catch{return[]}}function e(f){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(f))}catch{}}function u(f,o){if(!f)return!1;let x=g().filter(function(w){return w.code!==f});return x.unshift({code:f,name:(o||"").toString().slice(0,32),ts:Date.now()}),x.length>10&&(x=x.slice(0,10)),e(x),!0}function m(){return g().slice(0,10)}function T(f){e(g().filter(function(o){return o.code!==f}))}function r(){e([])}const n={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:u,getRecentViewed:m,removeRecent:T,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=n),n});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:g,watch:e,onMounted:u,nextTick:m}=a;function T(v,k={}){if(typeof v=="string"&&v.startsWith("/api/")){const c=localStorage.getItem("quant_token");if(c)return{...k,headers:{...k.headers||{},Authorization:"Bearer "+c}}}return k}async function r(v,k={}){const c=T(v,k),N={"Content-Type":"application/json",...c.headers},oe=(k.method||"GET").toUpperCase(),J=oe+"|"+v,M=async()=>{const U=await fetch(v,{...c,headers:N});if(U.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!U.ok){let ie="";try{const fe=await U.json();ie=fe&&fe.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+U.status+"）"),{status:U.status})}return await U.json()};try{const U=k.noLoading?M:()=>h(M);return oe==="GET"&&!k.noDedupe?await F(J,U):await U()}catch(U){throw U.message==="登录已过期"?U:(console.error("[apiFetch] "+v+":",U.message),Object.assign(U,{_formatted:V(U,U.status)}))}}function n(){return new Date().toISOString().split("T")[0]}function f(v){return v?v.split("T")[0]:""}function o(v,k="info",c=3e3){let N=document.querySelector(".toast-container");N||(N=document.createElement("div"),N.className="toast-container",document.body.appendChild(N));const oe=document.createElement("div");oe.className=`toast toast-${k}`,oe.textContent=v,N.appendChild(oe),setTimeout(()=>{oe.classList.add("leaving"),setTimeout(()=>oe.remove(),300)},c)}function x(v,k=300){let c;return function(...N){clearTimeout(c),c=setTimeout(()=>v.apply(this,N),k)}}function w(v,k=300){let c=!1;return function(...N){c||(v.apply(this,N),c=!0,setTimeout(()=>{c=!1},k))}}async function E(v,k=3e3,c=""){const N=new Promise((oe,J)=>setTimeout(()=>J(new Error("timeout")),k));try{return await Promise.race([v,N])}catch(oe){console.warn(`[timeout] ${c||"task"} failed:`,oe.message)}}const C=new Map;function q(){return C.clear(),!0}function F(v,k){if(!v||typeof k!="function")return Promise.reject(new Error("bad dedupe args"));if(C.has(v))return C.get(v);const c=Promise.resolve().then(k).finally(()=>{C.delete(v)});return C.set(v,c),c}let D=0;function d(){return D=0,!0}function i(){return D}async function h(v){D++;try{return await v()}finally{D--}}function V(v,k){if(!v)return"请求失败";if(v&&typeof v=="object"&&v.detail)return String(v.detail);if(typeof v=="string"&&v)return v;if(v&&v.message){const c=String(v.message);return/Failed to fetch|fetch failed|networkerror/i.test(c)?"网络连接失败，请检查网络后重试":c}return k?"请求失败（HTTP "+k+"）":"请求失败"}function W(v,k){if(v===k)return!0;try{return JSON.stringify(v)===JSON.stringify(k)}catch{return!1}}function S(v,k,c){const N=(v||"GET").toUpperCase();let oe="";if(c)try{const J={};Object.keys(c).sort().forEach(M=>{J[M]=c[M]}),oe=JSON.stringify(J)}catch{oe=""}return N+"|"+k+"|"+oe}class O{constructor(){this._map=new Map,this._exp=new Map}get(k){const c=this._exp.get(k);if(c!=null){if(Date.now()>c){this.delete(k);return}return this._map.get(k)}}set(k,c,N){return this._map.set(k,c),this._exp.set(k,Date.now()+(N>0?N:-1)),c}delete(k){this._map.delete(k),this._exp.delete(k)}clear(){this._map.clear(),this._exp.clear()}has(k){return this.get(k)!==void 0}get size(){return this._map.size}}function K(v){const k=new O,c=v!=null&&v>0?v:15e3;return{store:k,defaultTtl:c,get:N=>k.get(N),set:(N,oe,J)=>k.set(N,oe,J??c),delete:N=>k.delete(N),clear:()=>k.clear(),size:()=>k.size}}const A=new Set;async function L(v){const k=v&&v.cache,c=v&&v.key,N=v&&(v.fetchFn||v.fetcher),oe=v&&v.ttl;if(!k||!c||typeof N!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(A.has(c))return{ok:!1,changed:!1,skipped:!0,fresh:null};A.add(c);try{const J=k.get(c);let M;try{M=await N()}catch(ie){return v.onError&&v.onError(ie),{ok:!1,changed:!1,fresh:null}}const U=J!==void 0&&!W(J,M);return k.set(c,M,oe),v.apply&&v.apply(M,J),J!==void 0&&(U?v.onChanged&&v.onChanged(M,J):v.onUnchanged&&v.onUnchanged(M,J)),{ok:!0,changed:U,fresh:M}}finally{A.delete(c)}}const H=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function $(v,k={}){if(v==null)return"";const c=k&&k.allow||H,N=new Set(c.map(U=>String(U).toUpperCase()));let oe;try{oe=new DOMParser().parseFromString(String(v),"text/html")}catch{return String(v).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const J=oe.body||oe;function M(U){Array.from(U.childNodes).forEach(ie=>{if(ie.nodeType===1){const fe=String(ie.tagName).toUpperCase();if(N.has(fe))Array.from(ie.attributes).forEach(Se=>{const Y=Se.name.toLowerCase(),ce=(Se.value||"").trim().toLowerCase();(Y.startsWith("on")||(Y==="href"||Y==="src"||Y==="xlink:href")&&ce.startsWith("javascript:")||Y==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ce))&&ie.removeAttribute(Se.name),Y==="href"&&!/^(https?:|mailto:|#|\/)/.test(ce)&&ie.removeAttribute("href")}),fe==="A"&&ie.setAttribute("rel","noopener noreferrer"),M(ie);else{const Se=ie.parentNode;for(;ie.firstChild;)Se.insertBefore(ie.firstChild,ie);Se.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const fe=oe.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(fe,ie)}}})}return M(J),J.innerHTML}const Z="/api/openapi",le="/api/market/ws/quotes",te=1,R=2.5,s="数据不可达",y="实时不可用，不刷新";function l(){const v=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",k=typeof location<"u"?location.host:"localhost:8001";return v+"//"+k+le}function p(v,k){if(!v)return null;const c=k||{riseSpeed:te,volumeRatio:R},N=c.riseSpeed!=null?c.riseSpeed:te,oe=c.volumeRatio!=null?c.volumeRatio:R,J=parseFloat(v.rise_speed);if(!isNaN(J)&&Math.abs(J)>N)return J>0?"涨速预警":"跌速预警";const M=parseFloat(v.volume_ratio);return!isNaN(M)&&M>oe?"放量预警":null}function X(v){const k=Number(v);return v==null||isNaN(k)?null:k}const b={apiFetch:r,withAuthHeaders:T,getToday:n,formatDate:f,withTimeout:E,showToast:o,debounce:x,throttle:w,resetInFlight:q,dedupeRequest:F,resetLoading:d,loadingCount:i,withLoading:h,formatApiError:V,jsonEquals:W,makeCacheKey:S,CacheStore:O,createTtlCache:K,silentRefresh:L,sanitizeHtml:$,OPENAPI_ROUTE_BASE:Z,REALTIME_WS_PATH:le,WARN_RISE_SPEED_THRESHOLD:te,WARN_VOLUME_RATIO_THRESHOLD:R,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:y,buildRealtimeWsUrl:l,checkQuoteWarning:p,quoteFmt:{price:function(v){const k=X(v);return k===null?"--":k.toFixed(2)},pct:function(v){const k=X(v);return k===null?"--":(k>0?"+":"")+k.toFixed(2)+"%"},num:function(v){const k=X(v);return k===null?"--":k.toFixed(2)},color:function(v){const k=v?v.change_pct:null,c=X(k);return c===null?"":c>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=b),typeof Re<"u"&&Re.exports&&(Re.exports=b)})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(x,w){return x+"/"+w}function g(x,w,E,C){var q=x[w]||[],F=q.findIndex(function(i){return i.subPage===E});if(F!==-1)return{groups:x,activeKey:t(w,E)};var D=q.concat([{subPage:E,title:C}]);D.length>a&&(D=u(D));var d=Object.assign({},x,e({},w,D));return{groups:d,activeKey:t(w,E)}}function e(x,w,E){return x[w]=E,x}function u(x){if(x.length<=a)return x;var w=x.length>1?1:0;return x.filter(function(E,C){return C!==w})}function m(x,w,E,C){var q=x[w]||[],F=q.findIndex(function(h){return h.subPage===E});if(F===-1)return{groups:x,nextActive:null};var D=q.filter(function(h){return h.subPage!==E}),d=Object.assign({},x,e({},w,D)),i=null;return E===C&&(D[F]?i=D[F].subPage:D[F-1]?i=D[F-1].subPage:i=null),{groups:d,nextActive:i}}function T(x){return x&&x.length?x[0]:""}function r(x,w){return x[w]||[]}function n(x,w,E){var C=x[w]||[],q=C.filter(function(D){return D.subPage===E}),F=Object.assign({},x,e({},w,q));return{groups:F,activeKey:q.length?t(w,q[0].subPage):null}}function f(x,w){var E=Object.assign({},x,e({},w,[]));return{groups:E,activeKey:null}}function o(x,w,E,C){var q=(x[w]||[]).slice();if(E<0||E>=q.length)return{groups:x};var F=q.splice(E,1)[0];return q.splice(Math.max(0,Math.min(C,q.length)),0,F),{groups:Object.assign({},x,e({},w,q))}}return{MAX_TABS:a,openTab:g,closeTab:m,getDefaultTab:T,tabsOf:r,evictOldest:u,closeOthers:n,closeAll:f,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var un=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;un&&(window.__quantModules.tabsCore=un)}(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",g="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function u(o){return e(o)==="subnav"}function m(o){return e(o)==="tree"}function T(o){return e(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function n(){var o=r(),x=t;if(o)try{x=e(o.getItem(g))}catch{}return{navMode:x}}function f(o){var x=r();if(!(!x||!o))try{o.navMode!==void 0&&x.setItem(g,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:u,treeChildrenVisible:m,topTabsVisible:T,readPrefs:n,writePrefs:f}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var vn=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;vn&&(window.__quantModules.navModeCore=vn)}(function(){function t(l,p){if(!Array.isArray(l)||l.length<=p)return l;const X=[],P=l.length/p*2;for(let b=0;b<l.length;b+=P){const v=Math.floor(b),k=Math.min(l.length,Math.ceil(b+P));let c=1/0,N=-1,oe=-1/0,J=-1;for(let M=v;M<k;M++){const U=l[M];if(!U)continue;const ie=U[3]!=null?Number(U[3]):1/0,fe=U[4]!=null?Number(U[4]):-1/0;ie<c&&(c=ie,N=M),fe>oe&&(oe=fe,J=M)}N>=0&&X.push(l[N]),J>=0&&J!==N&&X.push(l[J])}return X}let g=null;function e(){return typeof echarts<"u"?Promise.resolve():(g||(g=new Promise(function(l,p){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?l():p(new Error("echarts 加载后未定义"))},X.onerror=function(){p(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),g)}function u(){const l=getComputedStyle(document.documentElement);return{primary:l.getPropertyValue("--primary-color").trim()||"#2563eb",up:l.getPropertyValue("--color-up").trim()||"#43e97b",down:l.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:l.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:l.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const m=l=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim()}catch{return""}};function T(){return{up:m("--color-up")||"#E63946",down:m("--color-down")||"#2E7D32",neutral:m("--color-neutral")||"#43a047",accent:m("--color-accent")||"#F59E0B",risk:m("--color-danger")||"#C62828",warn:m("--color-warning")||"#FF9800",success:m("--color-success")||"#4CAF50",primary:m("--qc-primary-600")||"#b8922a",grid:m("--chart-split")||"#e2e8f0",axis:m("--chart-axis")||"#cbd5e1",bg:m("--chart-bg")||"transparent",series:[m("--qc-primary-600")||"#b8922a",m("--qc-primary-500")||"#c49b2e",m("--qc-primary-700")||"#8f6f1f",m("--qc-primary-400")||"#d4b352",m("--color-up")||"#E63946",m("--color-down")||"#2E7D32",m("--color-accent")||"#F59E0B",m("--qc-neutral-400")||"#b8ae9f"]}}function r(l,p,X,P=!1,b=!1){if(!p||p.length===0)return;p.length>2e3&&(p=t(p,2e3));const v=p.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),k=u(),c={ma5:m("--color-accent")||"#F59E0B",ma10:m("--color-primary")||"#3B82F6",ma20:m("--color-warning")||"#8B5CF6",ma60:m("--color-success")||"#10B981"},N=p.map(se=>[se[1],se[2],se[3],se[4]]),oe=p.map(se=>se[5]),J=p.map(se=>se[6]),M=p.map(se=>se[7]),U=p.map(se=>se[8]),ie=p.map(se=>se[9]),fe=p.map(se=>se[10]),Y=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ce=k.borderLight,Ae={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:k.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Y,borderColor:ce,textStyle:{color:k.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const ke=se[0].dataIndex,Te=p[ke];if(!Te)return"";const ge=l.getOption(),ye=ge.legend&&ge.legend[0]&&ge.legend[0].selected||{},Ee=Ne=>ye[Ne]!==!1,re=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),ae=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",me=['<div style="font-weight:600;color:'+k.textSecondary+';">'+v[ke]+"</div>"];return me.push("开: "+re(Te[1])+"　收: "+re(Te[2])),me.push("低: "+re(Te[3])+"　高: "+re(Te[4])),me.push("成交量: "+ae(Te[5])),Te[6]!=null&&Ee("MA5")&&me.push("MA5: "+re(Te[6])),Te[7]!=null&&Ee("MA10")&&me.push("MA10: "+re(Te[7])),Te[8]!=null&&Ee("MA20")&&me.push("MA20: "+re(Te[8])),Te[9]!=null&&Ee("MA60")&&me.push("MA60: "+re(Te[9])),Te[10]!=null&&me.push("VOL_MA5: "+ae(Te[10])),me.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:b?0:8,textStyle:{color:k.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:b?30:40,height:b?"48%":"52%"},{left:56,right:16,top:b?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:v,boundaryGap:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:k.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:v,axisLabel:{show:!1},axisLine:{lineStyle:{color:ce}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:k.textSecondary,fontSize:11,formatter:function(se){const ke=Math.round(se*100)/100;return ke%1===0?String(Math.round(ke)):ke.toFixed(2)}},splitLine:{lineStyle:{color:ce,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ce}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,p.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ce,textStyle:{color:k.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:N,itemStyle:{color:k.up,color0:k.down,borderColor:k.up,borderColor0:k.down}},{name:"MA5",type:"line",data:J,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma5}},{name:"MA10",type:"line",data:M,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma10}},{name:"MA20",type:"line",data:U,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:oe,itemStyle:{color:function(se){const ke=se.dataIndex;return p[ke][1]>=p[ke][2]?k.up:k.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:fe,smooth:!0,symbol:"none",lineStyle:{width:1,color:c.ma5,type:"dashed"}}]};l.setOption(Ae,!0)}const n=new Map;function f(l){return n.has(l)||n.set(l,{chart:null,cache:null}),n.get(l)}async function o(l,p,X,P=!1,b={}){await e();const v=f(l);let k=document.getElementById(l);if(!k)for(let c=0;c<16&&(await new Promise(N=>setTimeout(N,50)),k=document.getElementById(l),!k);c++);if(!k)throw new Error("无法找到图表容器: "+l);if(k.offsetWidth<50&&(k.style.minWidth="600px",k.style.minHeight="300px"),!v.chart||v.chart.isDisposed()||v.chart.getDom()!==k){if(v.chart)try{v.chart.dispose()}catch{}v.chart=echarts.init(k),v.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const c=b.onLegend;typeof c=="function"&&v.chart.on("legendselectchanged",N=>{N&&N.selected&&c(N.selected)})}return r(v.chart,p,X,P,!!b.isMobile),v.cache={data:p,period:X,isIndex:P,isMobile:!!b.isMobile},v.chart}function x(l){const p=n.get(l);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function w(l){const p=n.get(l);p&&p.chart&&p.chart.resize()}function E(l,p){const X=n.get(l),P=X&&X.chart;if(P)if(p<=0)P.dispatchAction({type:"dataZoom",start:0,end:100});else{const k=Math.max(0,(60-p)/60*100);P.dispatchAction({type:"dataZoom",start:Math.round(k),end:100})}}function C(l){var P,b,v;const p=n.get(l);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=((v=(b=(P=p.chart.getOption())==null?void 0:P.legend)==null?void 0:b[0])==null?void 0:v.selected)||null;r(p.chart,p.cache.data,p.cache.period,p.cache.isIndex,p.cache.isMobile),X&&p.chart.setOption({legend:{selected:X}})}function q(l){const p=n.get(l);return p&&p.chart}const F=new Map;function D(l){return F.has(l)||F.set(l,{chart:null,cache:null}),F.get(l)}function d(l,p,X={}){return e().then(function(){const P=D(l),b=document.getElementById(l);if(!b)throw new Error("无法找到图表容器: "+l);if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),P.chart&&P.chart.getDom&&P.chart.getDom()!==b){try{P.chart.dispose()}catch{}P.chart=null}P.chart||(P.chart=echarts.init(b),P.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),P.resizeBound||(P.resizeBound=!0,window.addEventListener("resize",function(){P.chart&&!P.chart.isDisposed()&&P.chart.resize()})));const v=typeof p=="function"?p():p;return P.chart.setOption(v,!0),P.cache={buildOption:p,key:X.key||""},P.chart})}function i(l){var b,v,k;const p=F.get(l);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=((k=(v=(b=p.chart.getOption())==null?void 0:b.legend)==null?void 0:v[0])==null?void 0:k.selected)||null,P=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(P,!0),X&&P&&P.legend&&P.legend.selected&&p.chart.setOption({legend:{selected:X}})}function h(l){const p=F.get(l);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function V(l){const p=F.get(l);p&&p.chart&&p.chart.resize()}const W=new Map;function S(l){return W.has(l)||W.set(l,{chart:null,cache:null}),W.get(l)}function O(l,p,X={}){return e().then(function(){const P=S(l),b=document.getElementById(l);if(!b)return null;if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),P.chart&&P.chart.getDom&&P.chart.getDom()!==b){try{P.chart.dispose()}catch{}P.chart=null}P.chart||(P.chart=echarts.init(b),P.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),P.resizeBound||(P.resizeBound=!0,window.addEventListener("resize",function(){P.chart&&!P.chart.isDisposed()&&P.chart.resize()})));const v=typeof p=="function"?p():p;return P.chart.setOption(v,!0),P.cache={buildOption:p,key:X.key||""},P.chart})}function K(l){const p=W.get(l);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(X,!0)}function A(l){const p=W.get(l);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function L(l){const p=W.get(l);p&&p.chart&&p.chart.resize()}const H=O,$=K,Z=A,le=L;function te(l,p,X,P){P=P||{};const b=P.drawdownColor||m("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[P.navLabel||"净值",P.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:P.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:P.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:P.navLabel||"净值",type:"line",data:l||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:P.ddLabel||"回撤",type:"line",yAxisIndex:1,data:p||[],showSymbol:!1,areaStyle:{opacity:.25,color:b},lineStyle:{color:b,type:"solid",width:1.5}}]}}function R(l,p){p=p||{};const X=p.bandColor||m("--state-info-solid")||"#1976d2",P=l&&l.dates||[],b=l&&l.median||[],v=l&&l.q25||[],k=l&&l.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[p.medianLabel||"中位IC",p.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:P,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:p.medianLabel||"中位IC",type:"line",data:b,showSymbol:!1,lineStyle:{width:2,color:X}},{name:p.bandLabel||"25–75分位",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:k.map(function(c,N){return c-(v[N]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(l,p){p=p||{};const X=p.color||m("--color-ai")||"#7c3aed",P=l&&l.dates||[],b=l&&l.value||[],v=l&&l.upper||[],k=l&&l.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[p.valueLabel||"情绪",p.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:P,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:p.valueLabel||"情绪",type:"line",data:b,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:p.bandLabel||"过热/冰点带",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:k.map(function(c,N){return(v[N]||0)-c}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const y={renderKlineChart:r,renderKlineTo:o,disposeKline:x,resizeKline:w,zoomKline:E,redrawKline:C,getKlineChart:q,renderBacktestTo:d,redrawBacktest:i,disposeBacktest:h,resizeBacktest:V,renderPortfolioTo:O,redrawPortfolio:K,disposePortfolio:A,resizePortfolio:L,renderSimpleChartTo:H,redrawSimpleChart:$,disposeSimpleChart:Z,resizeSimpleChart:le,buildNavDrawdownOption:te,buildIcBandOption:R,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:T,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:x,resizeKline:w,zoomKline:E,redrawKline:C,getKlineChart:q,renderBacktestTo:d,redrawBacktest:i,disposeBacktest:h,resizeBacktest:V,renderPortfolioTo:O,redrawPortfolio:K,disposePortfolio:A,resizePortfolio:L,renderSimpleChartTo:H,redrawSimpleChart:$,disposeSimpleChart:Z,resizeSimpleChart:le,buildNavDrawdownOption:te,buildIcBandOption:R,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:T}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=y),typeof Re<"u"&&Re.exports&&(Re.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:te,buildIcBandOption:R,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:g}=Vue,{configChanged:e,consensus:u}=a,m=t(null),T=t(""),r=t(null),n=t([]),f=t([]),o=t([]),x=t([]),w=t([]),E=t([]),C=t({});function q(xe){const qe=w.value.indexOf(xe);qe>=0?w.value.splice(qe,1):w.value.push(xe)}const F=t("date"),D=t([]),d=t(!1),i=t(!1),h=t("watchlist"),V=t([]),W=t({vendors:[]}),S=t(""),O=t(!1),K=t(!1);function A(xe){if(!xe)return"";const qe=String(xe),je=qe.length;if(je<=4)return qe[0]+"*".repeat(je-1);const Oe=je<=8?2:4;return qe.slice(0,Oe)+"*".repeat(je-Oe-Oe)+qe.slice(-Oe)}async function L(xe){let qe;try{qe=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:qe,target:xe})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(je){ElementPlus.ElMessage.error("查看失败: "+je.message)}return null}async function H(xe){if(xe._revealed){xe._revealed=!1,xe._masked=A(xe.api_key);return}const qe=await L("ai:"+xe.vendor_key);qe!==null&&(xe.api_key=qe,xe._revealed=!0)}async function $(xe){if(xe._editing){xe._editing=!1,xe._revealed=!1,xe.api_key&&(xe._masked=A(xe.api_key));return}xe._editing=!0;try{const je=await(await fetch("/api/ai/models?full=1")).json();if(je.success){const Oe=(je.data.vendors||[]).find(Xe=>Xe.vendor_key===xe.vendor_key);Oe&&(xe.api_key=Oe.api_key||"")}else je.message&&ElementPlus.ElMessage.error(String(je.message))}catch(qe){ElementPlus.ElMessage.error("解锁失败: "+qe.message)}}function Z(xe){const{_fetching:qe,_testing:je,_revealed:Oe,_masked:Xe,_editing:Qe,...Ye}=xe;return Qe||(Ye.api_key=""),Ye.models=(xe.models||[]).map(lt=>{const{_testing:yt,testResult:Et,...Ft}=lt;return Ft}),Ye}async function le(){var xe;try{S.value="";const qe=await fetch("/api/ai/models");if(qe.status===401){S.value="请先登录后再查看模型配置";return}if(!qe.ok){S.value=`服务器错误 (${qe.status})`;return}const je=await qe.json();je.success?(V.value=(((xe=je.data)==null?void 0:xe.vendors)||[]).map(Oe=>({...Oe,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Oe.api_key||"",models:(Oe.models||[]).map(Xe=>({...Xe,_testing:!1,testResult:void 0}))})),S.value=""):S.value=je.message||"加载失败"}catch(qe){S.value="网络错误: "+qe.message}}async function te(){try{const qe=await(await fetch("/api/ai/catalog")).json();qe.success&&qe.data&&(W.value=qe.data)}catch(xe){console.warn("AI 厂商目录加载失败",xe)}}async function R(){K.value=!0;try{const je=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:V.value.map(Z)})})).json();je.success?(V.value.forEach(Oe=>{Oe._editing=!1,Oe._revealed=!1,Oe.api_key&&(Oe._masked=A(Oe.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(je.message||"保存失败")}catch(xe){ElementPlus.ElMessage.error("保存失败: "+xe.message)}K.value=!1}async function s(xe,qe){qe._testing=!0;try{const Oe=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:xe.vendor_key,model:qe.name,base_url:xe.base_url,api_key:xe.api_key,timeout:xe.timeout})});qe.testResult=await Oe.json()}catch(je){qe.testResult={success:!1,message:je.message}}qe._testing=!1}async function y(){O.value=!0;for(const xe of V.value)for(const qe of xe.models||[])xe.api_key?await s(xe,qe):qe.testResult={success:!1,message:"未配置 API Key"};O.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function l(xe){xe._fetching=!0;try{const Oe=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:xe.vendor_key,base_url:xe.base_url,api_key:xe.api_key,timeout:xe.timeout})})).json();if(Oe.success&&Array.isArray(Oe.models)){const Xe=new Set((xe.models||[]).map(Qe=>Qe.name));for(const Qe of Oe.models)Xe.has(Qe)||xe.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Oe.models.length} 个模型`)}else ElementPlus.ElMessage.error(Oe.message||"获取模型列表失败")}catch(qe){ElementPlus.ElMessage.error("获取模型列表失败: "+qe.message)}xe._fetching=!1}function p(xe){const qe=(W.value.vendors||[]).find(je=>je.vendor_key===xe);if(qe){if(V.value.some(je=>je.vendor_key===xe)){ElementPlus.ElMessage.warning("该厂商已存在");return}V.value.push({vendor_key:qe.vendor_key,name:qe.name,kind:qe.kind,base_url:qe.base_url,api_key:"",timeout:60,tier:qe.tier||"",website:qe.website||"",locked:!!qe.locked,models:(qe.models||[]).map(je=>({name:je,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${qe.name}」，配置 API Key 后保存生效`)}}function X(){V.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function P(xe){xe.models||(xe.models=[]),xe.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function b(xe,qe){const je=xe.models[qe];if(!(!je||je.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(je.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}xe.models.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function v(xe){if(xe.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(xe.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const qe=V.value.indexOf(xe);qe>=0&&V.value.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const k=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),c=t(!1),N=t(""),oe=t(0),J=t(""),M=t(!1),U=t(""),ie=t(!1),fe=t(0),Se=t(0),Y=t(""),ce=t({}),Ae=t({}),se=t({}),ke=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Te=t("manual"),ge=g(()=>{const xe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return xe[ke.value.provider]||xe.custom}),ye={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function Ee(xe){if(xe==="manual")return;const qe=ye[xe];qe&&(ke.value.endpoint=qe.endpoint,ke.value.model=qe.model,e.value=!0)}function re(){if(e.value=!0,ke.value.provider!=="codingplan"&&ke.value.provider!=="custom"){const xe=ge.value;xe&&(ke.value.endpoint=xe.endpoint,ke.value.model=xe.model)}else ke.value.provider==="codingplan"&&(ke.value.endpoint||(ke.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ke.value.model||(ke.value.model="ark-code-latest"))}let ae=null;const me=8;async function Ne(){ae&&(ae.abort(),ae=null);const qe=(u.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!C.value[Ye.code]);if(qe.length===0)return;const je=new AbortController;ae=je;let Oe=0;const Xe=async()=>{for(;Oe<qe.length;){const Ye=qe[Oe++];try{const yt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:je.signal})).json();yt.success&&yt.signal&&(C.value={...C.value,[Ye.code]:yt.signal})}catch(lt){if(lt.name==="AbortError")return}}},Qe=Array.from({length:Math.min(me,qe.length)},()=>Xe());await Promise.all(Qe)}function He(){ae&&(ae.abort(),ae=null)}let Ke=0;async function qt(xe){const qe=++Ke;try{const Oe=await(await fetch(`/api/ai/history/last/${encodeURIComponent(xe)}`)).json();if(qe!==Ke)return;Oe.success&&Oe.data&&(m.value=Oe.data,T.value=Oe.data.evaluate_time,pt(xe,Oe.data),Tt(Oe.data))}catch{}}async function pt(xe,qe){var je,Oe;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(xe)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const Ye=Qe.data[1],lt=((je=qe.result)==null?void 0:je.total_score)||0,yt=((Oe=Ye.result)==null?void 0:Oe.total_score)||0;lt>0&&yt>0&&(r.value={prevScore:yt,currScore:lt,diff:lt-yt})}}catch(Xe){console.warn("[refreshStrategyData] autoPoll failed:",Xe)}}function Tt(xe){var Xe;const qe=((Xe=xe.result)==null?void 0:Xe.dimensions)||{},je=[],Oe=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of Oe){const Ye=qe[Qe.key];Ye!==void 0&&je.push({icon:Ye>=Qe.good?"check-circle-2":Ye>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round(Ye)}分`})}n.value=je}return{aiResult:m,lastEvalTime:T,evalHistoryComparison:r,checklistItems:n,aiHistory:f,selectedHistoryIds:o,expandedDates:x,expandedMonths:w,expandedStocks:E,poolSignals:C,toggleMonthExpand:q,aiHistoryView:F,selectedWatchlistCodes:D,showAutoEvaluateSettings:d,savingConfig:i,autoEvaluateScope:h,aiVendors:V,aiCatalog:W,aiModelsError:S,testingAllModels:O,savingAiModels:K,loadAiVendors:le,loadAiCatalog:te,saveAiVendors:R,saveAiModels:R,testVendorModel:s,testAllVendorModels:y,fetchVendorModels:l,addVendorFromCatalog:p,addCustomVendor:X,addVendorModel:P,removeVendorModel:b,removeVendor:v,toggleVendorKeyReveal:H,toggleVendorEdit:$,autoEvaluateConfig:k,aiLoading:c,aiEvalStage:N,aiEvalElapsed:oe,aiEvalError:J,showBatchEvaluate:M,batchStocks:U,batchRunning:ie,batchTotal:fe,batchCompleted:Se,batchCurrent:Y,batchStatuses:ce,batchResults:Ae,batchEvalErrors:se,aiConfig:ke,selectedPreset:Te,providerInfo:ge,aiPresets:ye,applyPreset:Ee,onProviderChange:re,fetchPoolSignals:Ne,cancelPoolSignals:He,loadLastEvaluation:qt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:g,watch:e}=Vue,{configChanged:u,aiConfig:m,aiLoading:T,feishuConfig:r,currentTheme:n,changeTheme:f,autoEvaluateConfig:o,currentUser:x,strategyFilter:w,applyTheme:E,dashboardData:C,lastRefreshTime:q,saveAiModels:F}=a,D=function(re){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(re):E(re)},d=t(!1),i=t(!1),h=t(null),V=t(null),W=t(null),S=t(null),O=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),K=t("disconnected"),A=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),L=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),H=t(!1),$=t(null),Z=t(null),le=t("pending"),te=t("..."),R=t(!1),s=t({api_limit:600}),y=t(!1),l=t(!1);async function p(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function X(){l.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(y.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}e(()=>[m.value.provider,m.value.apiKey,m.value.endpoint,m.value.model],()=>{u.value=!0},{deep:!0});async function P(){d.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json()).success?(u.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{d.value=!1}}async function b(){T.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{T.value=!1}}function v(){const re={ai:m.value,feishu:r.value,theme:n.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),me=URL.createObjectURL(ae),Ne=document.createElement("a");Ne.href=me,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(me),ElementPlus.ElMessage.success("配置已导出")}function k(re){const ae=re.target.files[0];if(!ae)return;const me=new FileReader;me.onload=async Ne=>{try{const He=JSON.parse(Ne.target.result);He.ai&&(m.value={...m.value,...He.ai},await P()),He.feishu&&(Object.assign(r.value,He.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(He.feishu)})),He.theme&&(n.value=He.theme,f(He.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},me.readAsText(ae),re.target.value=""}async function c(){d.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:O.value,feishu:r.value,ai:m.value,rate_limit:s.value,auto_evaluate:o.value,theme:n.value}})}).then(He=>["userConfig",He.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)}).then(He=>["tushare",He.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:A.value})}).then(He=>["datasource",He.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(He=>["feishu",He.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(He=>["ai",He.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(He=>["rateLimit",He.ok]),F().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(re),me=ae.filter(He=>He.status==="fulfilled"&&He.value[1]).length,Ne=ae.filter(He=>He.status==="rejected"||He.status==="fulfilled"&&!He.value[1]).length;y.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(w.value.selected)),localStorage.setItem("quant_strategy_filter_mode",w.value.mode),x.value&&fetch(`/api/users/${x.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:n.value})}).catch(()=>{}),i.value=!1,h.value=new Date().toLocaleString("zh-CN"),d.value=!1,Ne>0&&console.error(`[saveAllConfig] ${me}/${me+Ne} 项保存成功，${Ne} 项失败`)}async function N(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const me=ae.config;me.tushare&&(O.value={...O.value,...me.tushare}),me.feishu&&(r.value={...r.value,...me.feishu}),me.ai&&(m.value={...m.value,...me.ai}),me.rate_limit&&(s.value={...s.value,...me.rate_limit}),me.auto_evaluate&&(o.value={...o.value,...me.auto_evaluate}),me.theme&&!localStorage.getItem("quant_theme")&&D(me.theme)}i.value=!1,y.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),i.value=!1}}async function oe(){K.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(K.value=ae.success?"connected":"disconnected",ae.success){const me=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+me)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{K.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function J(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();K.value=ae.success?"connected":"disconnected"}catch{K.value="disconnected"}}async function M(){var re;H.value=!0;try{const me=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();me.success?($.value=parseInt(((re=me.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(me.message)):ElementPlus.ElMessage.error(me.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{H.value=!1}}async function U(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(O.value={...O.value,...ae.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function ie(re){if(!re)return"";const ae=String(re),me=ae.length;if(me<=4)return ae[0]+"*".repeat(me-1);const Ne=me<=8?2:4;return ae.slice(0,Ne)+"*".repeat(me-Ne-Ne)+ae.slice(-Ne)}async function fe(re){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:re})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(me){ElementPlus.ElMessage.error("查看失败: "+me.message)}return null}async function Se(re){const ae=A.value[re];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=ie(ae.token);return}const me=await fe(re);me!==null&&(ae.token=me,ae._revealed=!0)}async function Y(re){const ae=A.value[re];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=ie(ae.token));return}ae._editing=!0;try{const me=await fe(re);if(me===null){ae._editing=!1;return}ae.token=me,ae._revealed=!0}catch(me){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+me.message)}}}async function ce(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const me=ae.config.sources,Ne=He=>{const Ke={...A.value[He],...me[He]||{}};return Ke._editing=!1,Ke._revealed=!1,Ke._masked=Ke.token||"",Ke.token="",Ke};A.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...A.value.akshare,...me.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[He,Ke]of Object.entries(Ne.status))L.value[He]=Ke.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function Ae(){try{const re={};for(const[ae,me]of Object.entries(A.value)){const{_revealed:Ne,_masked:He,_editing:Ke,...qt}=me;!Ke&&ae!=="akshare"&&(qt.token=""),re[ae]=qt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),i.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function se(re){L.value[re]="testing";try{const ae=A.value[re];ae&&ae._editing&&await Ae();const Ne=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();L.value[re]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Ne.message}`)}catch{L.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function ke(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(r.value={...r.value,...ae},V.value=JSON.parse(JSON.stringify(r.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function Te(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)m.value={...m.value,...ae.data};else{const me=localStorage.getItem("quant_ai_config");me&&(m.value=JSON.parse(me))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(m.value=JSON.parse(ae))}}async function ge(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const me=ae.config;me.tushare&&(O.value={...O.value,...me.tushare}),me.datasource&&me.datasource.sources&&(A.value={sxsc_tushare:{...A.value.sxsc_tushare,...me.datasource.sources.sxsc_tushare||{}},tushare:{...A.value.tushare,...me.datasource.sources.tushare||{}},akshare:{...A.value.akshare,...me.datasource.sources.akshare||{}}}),me.feishu&&(r.value={...r.value,...me.feishu},V.value=JSON.parse(JSON.stringify(r.value))),me.ai&&(m.value={...m.value,...me.ai}),me.rate_limit&&(s.value={...s.value,...me.rate_limit}),me.theme&&!localStorage.getItem("quant_theme")&&D(me.theme),me.auto_evaluate&&(o.value={...o.value,...me.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function ye(){var re,ae,me,Ne;try{const Ke=await(await fetch("/api/dashboard")).json(),qt=Ke.success?Ke.data:Ke;$.value=((re=qt==null?void 0:qt.stats)==null?void 0:re.total_stocks_covered)||null;const Tt=await(await fetch("/api/dates")).json();Z.value=((ae=Tt==null?void 0:Tt.data)==null?void 0:ae.total)||((Ne=(me=Tt==null?void 0:Tt.data)==null?void 0:me.dates)==null?void 0:Ne.length)||null;const qe=await(await fetch("/api/ai/history")).json();le.value="ok"}catch{le.value="pending"}}async function Ee(){try{const ae=await(await fetch("/api/dashboard")).json();C.value=ae.success?ae.data:ae,q.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:d,configChanged:u,globalConfigDirty:i,lastSavedTime:h,feishuConfigOriginal:V,aiConfigOriginal:W,tushareConfigOriginal:S,tushareConfig:O,tushareStatus:K,datasourceConfig:A,datasourceStatus:L,syncingData:H,stockCount:$,tradeDateCount:Z,aiStatus:le,appVersion:te,showImportDialog:R,rateLimitConfig:s,rateLimitDirty:y,rateLimitSaving:l,loadRateLimit:p,saveRateLimit:X,saveAiConfig:P,testAiApi:b,exportConfig:v,importConfig:k,saveAllConfig:c,resetAllConfig:N,testTushareConnection:oe,checkTushareConnection:J,syncStockData:M,loadTushareConfig:U,loadDatasourceConfig:ce,saveDatasourceConfig:Ae,testDatasource:se,toggleDatasourceKeyReveal:Se,toggleDatasourceEdit:Y,loadFeishuConfig:ke,loadAiConfig:Te,loadUserConfig:ge,loadSystemStatus:ye,loadDashboardData:Ee}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:g}=Vue,{currentUser:e,applyTheme:u,allMenuDefs:m,loadGroupConfig:T}=a,r=function(ge){const ye=window.__quantModules&&window.__quantModules.themes;return ye&&ye.applyLegacyTheme?ye.applyLegacyTheme(ge):u(ge)},n=t([]),f=t(""),o=t(""),x=t("users"),w=t({}),E=t({}),C=g(()=>{let ge=n.value;if(o.value&&(ge=ge.filter(Ee=>(Ee.group||Ee.role)===o.value)),!f.value)return ge;const ye=f.value.toLowerCase();return ge.filter(Ee=>Ee.username.toLowerCase().includes(ye))});function q(ge){w.value={...w.value,[ge]:!w.value[ge]}}async function F(ge,ye){try{const re=await(await fetch("/api/groups/"+ye+"/members/"+ge,{method:"DELETE"})).json();re.success?(await Y(),await fe()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function D(ge){const ye=E.value[ge];if(ye)try{const re=await(await fetch("/api/groups/"+ge+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ye})})).json();re.success?(await Y(),await fe(),E.value={...E.value,[ge]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function d(ge,ye){try{const re=await(await fetch("/api/users/"+ge.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ye})})).json();re.success?await Y():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const i=t(!1),h=t(null),V=t({username:"",password:"",role:"user",theme:"tech-blue"}),W=t(!1),S=t(null),O=t(!1),K=t(!1),A=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),L=t({}),H=t(!1),$=t({group_id:"",name:"",description:""}),Z=t(!1),le=t([]),te=t(""),R=t(""),s=t({});function y(ge){s.value={...s.value,[ge]:!s.value[ge]}}function l(ge){return!n.value||!n.value.length?0:n.value.filter(ye=>(ye.group||ye.role)===ge).length}function p(ge){const ye=(ge==null?void 0:ge.visible_menus)||{};return Object.values(ye).filter(Boolean).length}const X=g(()=>Object.keys(ie.value).length);async function P(ge){R.value=ge,K.value=!0,await b(ge)}async function b(ge){try{const Ee=await(await fetch("/api/groups/"+ge+"/members")).json();Ee.success&&(le.value=Ee.members||[])}catch(ye){le.value=[],console.error("[loadGroupMembers]",ye)}}async function v(){if(!(!te.value||!R.value)){Z.value=!0;try{const ye=await(await fetch("/api/groups/"+R.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:te.value})})).json();ye.success?(await b(R.value),await Y(),te.value=""):ElementPlus.ElMessage.error(ye.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{Z.value=!1}}}async function k(ge){try{const Ee=await(await fetch("/api/groups/"+R.value+"/members/"+ge,{method:"DELETE"})).json();Ee.success?(await b(R.value),await Y()):ElementPlus.ElMessage.error(Ee.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const c=g(()=>{if(!n.value)return[];const ge=new Set(le.value.map(ye=>ye.username));return n.value.filter(ye=>ye.username!=="admin"&&ye.username!=="guest"&&!ge.has(ye.username))});function N(ge){const ye=A.value.visible_menus[ge],Ee=m.find(re=>re.key===ge);if(Ee)if(ye){const re=L.value[ge]||{};Ee.subPages.forEach(ae=>{const me=ge+"."+ae;A.value.visible_sub_pages[me]=re[ae]!==void 0?re[ae]:!0})}else{const re={};Ee.subPages.forEach(ae=>{const me=ge+"."+ae;re[ae]=A.value.visible_sub_pages[me],A.value.visible_sub_pages[me]=!1}),L.value[ge]=re}}function oe(ge){S.value=ge;const ye=ie.value[ge]||{};A.value={name:ye.name||ge,description:ye.description||"",visible_menus:{...ye.visible_menus||{}},visible_sub_pages:{...ye.visible_sub_pages||{}}},L.value={},m.forEach(Ee=>{const re={};Ee.subPages.forEach(ae=>{re[ae]=A.value.visible_sub_pages[Ee.key+"."+ae]}),L.value[Ee.key]=re}),O.value=!0}async function J(){Z.value=!0;try{const ye=await(await fetch("/api/groups/"+S.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)})).json();ye.success?(O.value=!1,S.value=null,await fe(),await T()):ElementPlus.ElMessage.error(ye.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Z.value=!1}}async function M(ge){var ye;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ye=ie.value[ge])==null?void 0:ye.name)||ge)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+ge,{method:"DELETE"})).json();ae.success?await fe():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function U(){if($.value.group_id){Z.value=!0;try{const ye=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($.value)})).json();ye.success?(H.value=!1,$.value={group_id:"",name:"",description:""},await fe()):ElementPlus.ElMessage.error(ye.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{Z.value=!1}}}const ie=t({});async function fe(){try{if(!localStorage.getItem("quant_token"))return;const ye=await fetch("/api/groups");if(ye.ok){const Ee=await ye.json();ie.value=Ee.groups||{}}}catch(ge){console.warn("loadAllGroups:",ge)}}function Se(ge){var ye;return((ye=ie.value[ge])==null?void 0:ye.name)||ge||"--"}async function Y(){try{if(!localStorage.getItem("quant_token")){n.value=[];return}const ye=await fetch("/api/users");if(ye.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const Ee=await ye.json();n.value=Ee.users||[]}catch(ge){n.value=[],console.error("[loadUsers] error:",ge)}}function ce(ge){h.value=ge,V.value={username:ge.username,password:"",role:ge.role,theme:ge.theme||"tech-blue",group:ge.group||ge.role},i.value=!0}async function Ae(){if(V.value.username){W.value=!0;try{const ge=h.value?"PUT":"POST",ye=h.value?`/api/users/${V.value.username}`:"/api/users",re=await(await fetch(ye,{method:ge,headers:{"Content-Type":"application/json"},body:JSON.stringify(V.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&V.value.username===e.value.username){const ae=V.value.theme;ae&&ae!==e.value.theme&&(e.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(e.value)),r(ae))}i.value=!1,h.value=null,await Y()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{W.value=!1}}}async function se(ge){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ge}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await Y())}catch(ye){console.error("[deleteUser]",ye)}}async function ke(ge){try{const Ee=await(await fetch(`/api/users/${ge.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ge.enabled})})).json();Ee.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Ee.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Te(ge){try{const{value:ye}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ge.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ye){const re=await(await fetch(`/api/users/${ge.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ye})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:n,userSearch:f,groupFilter:o,userPageTab:x,expandedGroups:w,addMemberGroupMap:E,filteredUsers:C,toggleGroupExpand:q,removeMemberFromGroupInline:F,addMemberToGroupInline:D,changeUserGroup:d,showAddUser:i,editingUser:h,userForm:V,savingUser:W,editingGroup:S,menuConfigDialog:O,memberDialog:K,groupEditForm:A,subPageCache:L,showAddGroup:H,addGroupForm:$,savingGroup:Z,groupMembers:le,addMemberUsername:te,selectedMemberGroup:R,subPageSectionExpanded:s,toggleSubPageSection:y,getGroupMemberCount:l,getMenuEnabledCount:p,groupCount:X,openMemberManager:P,loadGroupMembers:b,addMemberToGroup:v,removeMemberFromGroup:k,availableUsersForGroup:c,onParentToggle:N,openMenuConfig:oe,saveMenuConfig:J,deleteGroupConfig:M,createGroup:U,allGroups:ie,getGroupName:Se,loadAllGroups:fe,loadUsers:Y,editUser:ce,saveUser:Ae,deleteUser:se,toggleUserEnabled:ke,resetUserPassword:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:g}=Vue,{stockKlineLoaded:e,stockDetailVisible:u,stockDetailTab:m,stockDetail:T,disposeStockKline:r}=a,n=t([]),f=t(!1),o=t(!1),x=t("date"),w=t([]),E=t([]),C=t([]),q=t([]),F=g(()=>{var v,k;const b=[];for(const c of n.value){if(!c||c.id==null)continue;const N=c.stock_name||c.stock_code||"",oe=Array.isArray(c.messages)?c.messages:[];b.push({id:c.id,stock_code:c.stock_code,stock_name:N,first_msg:c.first_msg||((k=(v=oe[0])==null?void 0:v.content)==null?void 0:k.substring(0,50))||"",msg_count:c.msg_count||oe.length||0,created_at:c.created_at,date:(c.created_at||"").substring(0,10),month:(c.created_at||"").substring(0,7),messages:oe})}return b}),D=g(()=>{const b={};for(const k of F.value){const c=k.date||"未知";b[c]||(b[c]=[]),b[c].push(k)}const v={};return Object.keys(b).sort((k,c)=>c.localeCompare(k)).forEach(k=>v[k]=b[k]),v}),d=g(()=>{const b={};for(const k of F.value){const c=k.month||"未知";b[c]||(b[c]=[]),b[c].push(k)}const v={};return Object.keys(b).sort((k,c)=>c.localeCompare(k)).forEach(k=>v[k]=b[k]),v}),i=g(()=>{const b={};for(const v of F.value){const k=`${v.stock_name}(${v.stock_code})`;b[k]||(b[k]=[]),b[k].push(v)}return b});function h(b){const v=w.value.indexOf(b);v>=0?w.value.splice(v,1):w.value.push(b)}function V(b){const v=D.value[b]||[];if(v.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!v.some(N=>N.id===c));else for(const c of v)w.value.includes(c.id)||w.value.push(c.id)}function W(b){const v=d.value[b]||[];if(v.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!v.some(N=>N.id===c));else for(const c of v)w.value.includes(c.id)||w.value.push(c.id)}function S(b){const v=i.value[b]||[];if(v.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!v.some(N=>N.id===c));else for(const c of v)w.value.includes(c.id)||w.value.push(c.id)}function O(b){const v=E.value.indexOf(b);v>=0?E.value.splice(v,1):E.value.push(b)}function K(b){const v=C.value.indexOf(b);v>=0?C.value.splice(v,1):C.value.push(b)}function A(b){const v=q.value.indexOf(b);v>=0?q.value.splice(v,1):q.value.push(b)}function L(){w.value.length===F.value.length?w.value=[]:w.value=F.value.map(b=>b.id)}async function H(){if(w.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${w.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const b of[...w.value])await X(b);w.value=[]}}const $={};async function Z(b){T.value={stock:b.stock_code,name:b.stock_name},u.value=!0,m.value="chat",e.value=!1,r(),R.value=!0,s.value="",te.value=[];try{let v=$[b.id];if(!v){const k=await fetch("/api/ai/chat/history/"+b.id);if(!k.ok)throw new Error("load history failed");v=(await k.json()).messages||[],$[b.id]=v}te.value=v.map(k=>({role:k.role,content:k.content}))}catch{s.value="历史消息加载失败，请重试"}finally{R.value=!1}}const le=t(""),te=t([]),R=t(!1),s=t("");async function y(){var k;const b=le.value.trim();if(!b||R.value)return;s.value="",te.value.push({role:"user",content:b}),le.value="",R.value=!0;const v=te.value.length;te.value.push({role:"assistant",content:""});try{const oe=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=T.value)==null?void 0:k.stock)||"",message:b})})).body.getReader(),J=new TextDecoder;let M="";for(;;){const{done:U,value:ie}=await oe.read();if(U)break;M+=J.decode(ie,{stream:!0});const fe=M.split(`
`);M=fe.pop()||"";for(const Se of fe)if(Se.startsWith("data: "))try{const Y=JSON.parse(Se.slice(6));Y.token?te.value[v].content+=Y.token:Y.done?console.log("Stream done:",Y.session_id):Y.error&&(s.value=Y.error)}catch(Y){console.warn("SSE parse error:",Y)}}}catch(c){te.value[v].content||(te.value[v].content="网络错误: "+c.message)}R.value=!1}async function l(b){var k;s.value="",R.value=!0;const v={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};te.value.push({role:"user",content:v[b]||v.comprehensive});try{const N=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=T.value)==null?void 0:k.stock)||"",mode:b})});if(N.ok){const oe=await N.json();te.value.push({role:"assistant",content:oe.reply||"无回复"})}}catch(c){s.value="网络错误: "+c.message}R.value=!1}async function p(){f.value=!0,o.value=!1;try{const b=await fetch("/api/ai/chat/history?view=date");if(b.ok){const v=await b.json(),k=[];for(const c of v)for(const N of c.items||[])k.push(N);n.value=k}else o.value=!0}catch(b){console.error(b),o.value=!0}finally{f.value=!1}}async function X(b){try{await fetch("/api/ai/chat/history/"+b,{method:"DELETE"}),n.value=n.value.filter(v=>v.id!==b)}catch(v){console.error("deleteChatSession:",v)}}function P(b){if(!b)return"";const v=String(b).split(`
`),k=[],c=[];let N=0;for(;N<v.length;){if(/^\s*\|.*\|\s*$/.test(v[N])){let J=N;const M=[];for(;J<v.length&&/^\s*\|.*\|\s*$/.test(v[J]);)M.push(v[J]),J++;const U=Se=>Se.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Y=>Y.trim()),ie=M.map(U);if(ie.length>1&&ie[1].every(Se=>/^:?-{3,}:?$/.test(Se))){const Se=Math.max(...ie.map(se=>se.length)),Y=ie[0].slice(0,Se),ce=ie.slice(2);let Ae="<table>";ce.length?(Ae+="<thead><tr>"+Y.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Ae+="<tbody>"+ce.map(se=>"<tr>"+se.slice(0,Se).map(ke=>"<td>"+ke+"</td>").join("")+"</tr>").join("")+"</tbody>"):Ae+="<tbody><tr>"+Y.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Ae+="</table>",k.push(Ae),c.push("\0T"+(k.length-1)+"\0"),N=J;continue}for(;N<J;)c.push(v[N]),N++;continue}c.push(v[N]),N++}let oe=c.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return k.forEach((J,M)=>{oe=oe.split("\0T"+M+"\0").join(J)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(oe=window.__quantModules.core.sanitizeHtml(oe)),oe}return{chatSessions:n,chatHistoryView:x,selectedChatIds:w,expandedChatDates:E,expandedChatMonths:C,expandedChatStocks:q,chatHistoryLoading:f,chatHistoryError:o,allChatSessionsFlat:F,chatGroupedByDate:D,chatGroupedByMonth:d,chatGroupedByStock:i,toggleSelectChat:h,toggleSelectChatDate:V,toggleSelectChatMonth:W,toggleSelectChatStock:S,toggleChatDateExpand:O,toggleChatMonthExpand:K,toggleChatStockExpand:A,selectAllChatSessions:L,deleteSelectedChatSessions:H,viewChatSession:Z,loadChatHistory:p,deleteChatSession:X,renderMarkdown:P,stockChatInput:le,stockChatMessages:te,stockChatLoading:R,stockChatError:s,askStockSend:y,askStockQuick:l}}}})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantUndoCore=t()})(typeof self<"u"?self:void 0,function(){function a(){var t={},g=0;function e(r,n,f){if(typeof r!="function")return"";var o="undo-"+ ++g,x={fn:r,label:n||"",timer:null,active:!0};return t[o]=x,f&&f>0&&(x.timer=setTimeout(function(){m(o)},f)),o}function u(r){var n=t[r];if(!n||!n.active)return!1;n.timer&&clearTimeout(n.timer),delete t[r],n.active=!1;try{n.fn()}catch{}return!0}function m(r){var n=t[r];n&&(n.timer&&clearTimeout(n.timer),delete t[r],n.active=!1)}function T(){var r=0;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r++;return r}return{register:e,undo:u,remove:m,activeCount:T}}return{createUndoStack:a}});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantFormMemory=t()})(typeof self<"u"?self:void 0,function(){function a(m,T,r){return"qc_fm_"+(m||"guest")+"_"+T+"_v"+(r||1)}function t(){return typeof localStorage<"u"&&localStorage?localStorage:null}function g(m,T,r,n){var f=t();if(!f||!m||T===void 0||T===null)return!1;try{return f.setItem(a(r,m,n),JSON.stringify(T)),!0}catch{return!1}}function e(m,T,r){var n=t();if(!n||!m)return null;try{var f=n.getItem(a(T,m,r));return f?JSON.parse(f):null}catch{return null}}function u(m,T,r){var n=t();if(!(!n||!m))try{n.removeItem(a(T,m,r))}catch{}}return{saveForm:g,loadForm:e,clearForm:u}});(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantSessionRestore=t()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function t(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function g(m){var T=t();if(!T||!m)return!1;try{return T.setItem(a,JSON.stringify(m)),!0}catch{return!1}}function e(){var m=t();if(!m)return null;try{var T=m.getItem(a);return T?JSON.parse(T):null}catch{return null}}function u(){var m=t();if(m)try{m.removeItem(a)}catch{}}return{save:g,restore:e,clear:u,KEY:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:g,watch:e}=Vue,{consensus:u,currentPage:m,currentSubPage:T,dashboardData:r,searchKeyword:n,statusFilter:f,strategyFilter:o,strategyFilterCounts:x}=a;function w(K){const A=o.value.selected;if(!A||A.length===0)return K;const L=o.value.mode;return K.filter(H=>{const $=H.strategy_names||H.strategies||[];return L==="union"?A.some(Z=>$.includes(Z)):A.every(Z=>$.includes(Z))})}const E=g(()=>{const K=w(u.value||[]);return{all:K.length,newCount:K.filter(A=>A.status==="new").length,current:K.filter(A=>A.status==="current").length,out:K.filter(A=>A.status==="out").length}}),C=g(()=>{let K=u.value||[];if(f.value!=="all"&&(K=K.filter(A=>A.status===f.value)),K=w(K),n.value){const A=n.value.toLowerCase();K=K.filter(L=>L.code.toLowerCase().includes(A)||L.name&&L.name.toLowerCase().includes(A))}return K}),q=g(()=>{const K=u.value||[],A={},L={};for(const H of K)H.code&&H.name&&(L[H.code]=H.name);for(const H of K){const $=H.strategy_names||H.strategies||[];for(const Z of $)A[Z]||(A[Z]={strategy:Z,count:0,codes:[],names:[]}),A[Z].count++,A[Z].codes.includes(H.code)||(A[Z].codes.push(H.code),A[Z].names.push({code:H.code,name:L[H.code]||H.code}))}return Object.values(A).sort((H,$)=>$.count-H.count)}),F=g(()=>{const K=o.value.selected,A=o.value.mode,L={};for(const[H,$]of Object.entries(x.value)){const Z=$||[];!K||K.length===0?L[H]=Z.length:A==="union"?L[H]=Z.filter(le=>le.strategies&&K.some(te=>le.strategies.includes(te))).length:L[H]=Z.filter(le=>le.strategies&&K.every(te=>le.strategies.includes(te))).length}return L});function D(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const d=g(()=>{const K=(r.value||{}).consensus_rank||[];return w(K)}),i=g(()=>{const K=u.value||x.value.day||[];return w(K).length}),h=g(()=>{const K=(r.value||{}).strategy_counts||[],A=u.value||x.value.day||[];if(A.length===0)return K;const L=w(A),H={};L.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(te=>{H[te]=(H[te]||0)+1})});const $=L.length||1;return K.map(Z=>{const le=Z.strategy_name||Z.strategy_id,te=H[le]||0;return{...Z,count:te,percentage:Math.round(te/$*1e3)/10}})}),V=g(()=>{const K=(r.value||{}).pool_changes||{},A=(K.new_count||0)-(K.out_count||0);return A>0?{dir:"up",text:"↑"+A}:A<0?{dir:"down",text:"↓"+Math.abs(A)}:{dir:"flat",text:"→0"}}),W=g(()=>{const K=(r.value||{}).time_coverage||{},A=new Date(K.start_date),L=new Date(K.end_date),H=new Date;if(!A.getTime()||!L.getTime()||H>=L)return 100;if(H<=A)return 0;const $=L-A,Z=H-A;return Math.round(Z/$*100)}),S=t(null);function O(K){o.value.selected=[K],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([K])),localStorage.setItem("quant_strategy_filter_mode","union"),m.value="calendar",T.value="calendar"}return{applyStrategyFilter:w,statusCounts:E,stockPool:C,strategyDistribution:q,strategyPreviewCount:F,saveStrategyFilter:D,filteredConsensusRank:d,currentPoolSize:i,filteredStrategyCounts:h,poolChangeBadge:V,timeBarPercent:W,lastRefreshTime:S,navigateToStrategyFilter:O}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function g(r){return a[r]||"var(--text-tertiary)"}function e(r){return t[r]||"var(--bg-hover)"}const u=window.QuantUndoCore,m=u?u.createUndoStack():null;function T(r,n){if(!m||!window.Vue||!window.Vue.h)return;const f=window.Vue.h;ElementPlus.ElMessage.success({message:f("span",null,[r,f("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{m.undo(n)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(r){const{ref:n,computed:f,watch:o}=Vue,{currentUser:x,selectedDate:w,stockDetail:E,stockDetailTab:C,stockDetailVisible:q,stockDetailLoading:F,stockKlineLoaded:D,viewCache:d,animateScoreEntrance:i,loadStockKline:h,refreshStockScore:V,disposeStockKline:W,aiHistory:S,aiLoading:O,aiEvalStage:K,aiEvalElapsed:A,aiEvalError:L,aiResult:H,loadLastEvaluation:$,autoEvaluateConfig:Z,autoEvaluateScope:le,batchStocks:te,batchRunning:R,batchTotal:s,batchCompleted:y,batchCurrent:l,batchStatuses:p,batchResults:X,batchEvalErrors:P,expandedDates:b,expandedStocks:v,savingConfig:k,selectedHistoryIds:c,selectedWatchlistCodes:N,showAutoEvaluateSettings:oe,showBatchEvaluate:J}=r,M=z=>(getComputedStyle(document.documentElement).getPropertyValue(z)||"").trim(),U=n(""),ie=n("default"),fe=n("default"),Se=n([]),Y=f(()=>new Set(Se.value.map(z=>z.code))),ce=n(!1),Ae=n(!1),se=f(()=>{const z=[...Se.value];return fe.value==="name"?z.sort((ne,ue)=>ne.name.localeCompare(ue.name,"zh")):fe.value==="added"?z.sort((ne,ue)=>(ue.added_at||"").localeCompare(ne.added_at||"")):fe.value==="score"&&z.sort((ne,ue)=>{const Me=Te(ne.code);return Te(ue.code)-Me}),z});function ke(z){const ne=S.value.filter(Me=>Me.stock_code===z);if(ne.length===0)return null;const ue=ne.reduce((Me,Pe)=>Me.evaluate_time>Pe.evaluate_time?Me:Pe);return{score:ue.result.total_score,color:g(ue.result.level),bg:e(ue.result.level)}}function Te(z){const ne=ke(z);return ne?ne.score:0}function ge(z){dt(z.code,z.name),me.value=me.value.filter(ne=>ne.code!==z.code),ae.value=""}const ye=f(()=>new Set(S.value.map(z=>z.stock_code))),Ee=n(new Set);function re(z){Ee.value.add(z)}const ae=n(""),me=n([]),Ne=n(!1),He=n({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ke=n(!1),qt=n(!1),pt=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};pt.REALTIME_WS_PATH;const Tt=pt.REALTIME_DEGRADED_TEXT||"数据不可达",xe=pt.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";pt.WARN_RISE_SPEED_THRESHOLD!=null&&pt.WARN_RISE_SPEED_THRESHOLD,pt.WARN_VOLUME_RATIO_THRESHOLD!=null&&pt.WARN_VOLUME_RATIO_THRESHOLD;const qe=pt.quoteFmt||{price:z=>z==null?"--":Number(z).toFixed(2),pct:z=>z==null?"--":Number(z).toFixed(2)+"%",num:z=>z==null?"--":Number(z).toFixed(2),color:z=>""},je=3,Oe=5e3,Xe=n({}),Qe=n(!1),Ye=n("idle");let lt=null,yt=null,Et=0;function Ft(z){return pt.checkQuoteWarning?pt.checkQuoteWarning(z):null}function aa(z){return Ft(Xe.value[z])}function I(z){return qe.color(Xe.value[z])}function ee(z){return qe.price(Xe.value[z]&&Xe.value[z].price)}function Ce(z){return qe.pct(Xe.value[z]&&Xe.value[z].change_pct)}function Ie(z,ne){return qe.num(Xe.value[z]&&Xe.value[z][ne])}function We(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function bt(){if(!lt||lt.readyState!==1)return;const z=(Se.value||[]).map(ne=>ne.code);z.length!==0&&lt.send(JSON.stringify({subscribe:z}))}function $e(){if(yt&&(clearTimeout(yt),yt=null),lt){try{lt.onopen=null,lt.onmessage=null,lt.onerror=null,lt.onclose=null,lt.close()}catch{}lt=null}Xe.value={},Qe.value=!1,Ye.value="idle"}function Ge(){const z=We();if(!z||!pt.buildRealtimeWsUrl||Ye.value==="open"||Ye.value==="connecting")return;let ne;try{ne=pt.buildRealtimeWsUrl()+"?token="+encodeURIComponent(z)}catch{Ye.value="offline",Qe.value=!0;return}Ye.value="connecting";let ue=null;try{ue=new WebSocket(ne)}catch{Ye.value="offline",Qe.value=!0;return}lt=ue,ue.onopen=function(){Ye.value="open",Et=0,bt()},ue.onmessage=function(Me){let Pe=null;try{Pe=JSON.parse(Me.data||"{}")}catch{return}if(!Pe||Pe.type!=="quotes")return;if(Qe.value=!!Pe.degraded,Pe.degraded||!Array.isArray(Pe.data)){Xe.value={};return}const Rt={};Pe.data.forEach(function(st){st&&st.code&&(Rt[st.code]=st)}),Xe.value=Rt},ue.onerror=function(){Ye.value="offline",Qe.value=!0},ue.onclose=function(){Ye.value="offline",Et<je?(Et++,yt=setTimeout(function(){Ye.value!=="open"&&Ge()},Oe*Et)):Qe.value=!0}}o(Se,function(){Ye.value==="open"&&bt()}),We()&&setTimeout(Ge,500);async function _t(){if(!E.value)return;O.value=!0,H.value=null,L.value="",K.value="fetching",A.value=0;const z=Date.now(),ne=setInterval(()=>{O.value&&(A.value=Math.round((Date.now()-z)/1e3))},500);try{const ue=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:E.value.stock,stock_name:E.value.name||E.value.stock,strategy:ie.value})});K.value="calculating";const Me=await ue.json();K.value="analyzing",Me.success?(await nextTick(),H.value=Me.data,C.value="ai",Q()):(L.value=Me.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch(ue){L.value=ue&&ue.message&&!String(ue.message).includes("Failed to fetch")?ue.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{clearInterval(ne),O.value=!1,A.value=0,L.value?K.value="":(K.value="done",setTimeout(()=>{K.value==="done"&&(K.value="")},800))}}const ct=50,ft=n(0),it=n(!1),Ht=f(()=>S.value.length<ft.value);async function Q(){ce.value=!0,Ae.value=!1;try{if(!localStorage.getItem("quant_token")){S.value=[];return}const ne=await fetch(`/api/ai/history?limit=${ct}&offset=0`);if(ne.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),x.value=null;return}const ue=await ne.json();ue.success?(S.value=ue.data||[],ft.value=ue.total!=null?ue.total:S.value.length):Ae.value=!0}catch(z){console.error("[loadAiHistory] error:",z),Ae.value=!0}finally{ce.value=!1}}async function he(){if(!(it.value||!Ht.value)){it.value=!0;try{const ne=await(await fetch(`/api/ai/history?limit=${ct}&offset=${S.value.length}`)).json();if(ne.success&&Array.isArray(ne.data)){const ue=new Set(S.value.map(Pe=>Pe.id)),Me=ne.data.filter(Pe=>!ue.has(Pe.id));S.value=S.value.concat(Me),ne.total!=null&&(ft.value=ne.total)}}catch(z){console.warn("[loadMoreAiHistory] error:",z)}finally{it.value=!1}}}async function et(z){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ue=await(await fetch(`/api/ai/history/${z}`,{method:"DELETE"})).json();if(ue.success){ElementPlus.ElMessage.success("删除成功"),Q();const Me=c.value.indexOf(z);Me>=0&&c.value.splice(Me,1)}else ElementPlus.ElMessage.error(ue.message||"删除失败")}catch{}}function Ue(z){const ne=c.value.indexOf(z);ne>=0?c.value.splice(ne,1):c.value.push(z)}function wt(){c.value=[]}function At(){N.value=[]}async function It(){const z=c.value;if(z.length===0)return;const ne=S.value.filter(ue=>z.includes(ue.id)).map(ue=>ue.stock_code);J.value=!0,te.value=[...new Set(ne)].join(",")}async function vt(){const z=c.value;if(z.length===0)return;const ne=S.value.filter(Pe=>z.includes(Pe.id)),ue=[...new Map(ne.map(Pe=>[Pe.stock_code,Pe])).values()];let Me=0;for(const Pe of ue)Y.value.has(Pe.stock_code)||(await dt(Pe.stock_code,Pe.stock_name||Pe.stock_code),Me++);Me>0?ElementPlus.ElMessage.success(`已加入 ${Me} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Pt(){const z=c.value;if(z.length===0)return;const ne=S.value.filter(Me=>z.includes(Me.id)),ue=[...new Map(ne.map(Me=>[Me.stock_code,Me])).values()];try{const Pe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ue.map(Rt=>({stock_code:Rt.stock_code,stock_name:Rt.stock_name||""}))})})).json();Pe&&Pe.success?ElementPlus.ElMessage.success(`已登记 ${Pe.count||ue.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Pe&&Pe.detail||"批量加入组合失败")}catch(Me){console.warn("batchAddToPortfolio failed:",Me),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Kt(){if(N.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${N.value.length} 只股票？`,"提示",{type:"warning"});for(const z of N.value)await $t(z);N.value=[],ElementPlus.ElMessage.success("已移除")}catch(z){z&&z.message!=="cancel"&&console.warn("batchRemoveWatchlist:",z)}}function Jt(z){const ne=N.value.indexOf(z);ne>=0?N.value.splice(ne,1):N.value.push(z)}function xt(){c.value.length===S.value.length?c.value=[]:c.value=S.value.map(z=>z.id)}function gt(){N.value.length===Se.value.length?N.value=[]:N.value=Se.value.map(z=>z.code)}async function Zt(){if(c.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${c.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const ne=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:c.value})})).json();ne.success?(ElementPlus.ElMessage.success(ne.message),c.value=[],Q()):ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{}}async function Dt(){try{const ne=await(await fetch("/api/ai/auto-config")).json();ne.success&&(Z.value=ne.data,ne.data.evaluate_scope&&(le.value=ne.data.evaluate_scope))}catch(z){console.warn("loadAutoEvaluateConfig failed:",z)}}async function ra(){k.value=!0;try{Z.value.evaluate_scope=le.value;const ne=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();ne.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),oe.value=!1):ElementPlus.ElMessage.error(ne.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{k.value=!1}}const Qt=n(!1);async function sa(){Qt.value=!0;try{const ne=await(await fetch("/api/watchlist")).json();ne.success&&(Se.value=ne.stocks||[])}catch(z){console.warn("loadWatchlist failed:",z)}finally{Qt.value=!1}}async function dt(z,ne){try{const Me=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:z,name:ne})})).json();if(Me.success)return Me.existed||Se.value.push({code:z,name:ne,added_at:new Date().toISOString()}),!0}catch(ue){console.warn("addToWatchlist failed:",ue)}return!1}async function $t(z){try{const ne=Se.value.find(Me=>Me.code===z),ue=ne&&ne.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(z)}`,{method:"DELETE"}),Se.value=Se.value.filter(Me=>Me.code!==z),Y.value&&Y.value.delete&&Y.value.delete(z),m){const Me=m.register(()=>{dt(z,ue)},"移除自选",5e3);T("已移除自选",Me)}else ElementPlus.ElMessage.info("已移除自选")}catch(ne){console.warn("removeFromWatchlist failed:",ne)}}async function ca(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const z=Se.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),Se.value=[],Y.value&&Y.value.clear&&Y.value.clear(),ElementPlus.ElMessage.success("自选已清空"),m&&z.length){const ne=m.register(()=>{z.forEach(ue=>dt(ue.code,ue.name||""))},"清空自选",5e3);T("自选已清空",ne)}}catch(z){console.warn("clearWatchlist failed:",z)}}async function ya(z,ne){Y.value.has(z)?(await $t(z),ElementPlus.ElMessage.info("已移除自选")):await dt(z,ne)&&ElementPlus.ElMessage.success("已加入自选")}async function _a(z,ne){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(z,ne||"");const ue=new Date().toISOString().split("T")[0],Me=w.value||ue;C.value="kline",H.value=null,L.value="",W("stockKlineChart"),E.value=null,F.value=!0,D.value=!1,q.value=!0,nextTick(()=>i());try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${Me}`);E.value=await Pe.json()}catch{E.value={stock:z,name:ne,total_days:0}}finally{F.value=!1}await nextTick(),await h("daily"),V(),$(z)}const na=n(!1);async function B(){var z;if(Se.value.length!==0){na.value=!0;try{const ue=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ue.success&&ue.loaded>0?(((z=ue.details)==null?void 0:z.loaded)||[]).forEach(Me=>Ee.value.add(Me.code)):ue.loaded===0&&ue.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(ne){console.error("预加载K线失败:",ne)}finally{na.value=!1}}}async function _e(z,ne){O.value=!0,H.value=null,L.value="",K.value="fetching",D.value=!1,W();const ue=new Date().toISOString().split("T")[0],Me=w.value||ue;try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${Me}`);E.value=await Pe.json()}catch{E.value={stock:z,name:ne,total_days:0}}C.value="ai",q.value=!0,await nextTick();try{const Rt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z,stock_name:ne})})).json();Rt.success?(H.value=Rt.data,Q()):(L.value=Rt.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch{L.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{O.value=!1,K.value=""}}async function Fe(){Se.value.length!==0&&(J.value=!0,te.value=Se.value.map(z=>z.code).join(","))}async function De(){N.value.length!==0&&(J.value=!0,te.value=N.value.join(","))}async function ut(){if(!ae.value.trim()){me.value=[];return}Ne.value=!0;try{const ne=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(ae.value)}`)).json();me.value=(ne.results||[]).filter(ue=>!Y.value.has(ue.code))}catch(z){console.warn("searchStockForWatchlist failed:",z)}finally{Ne.value=!1}}async function tt(){try{const ne=await(await fetch("/api/data-refresh/config")).json();He.value=ne}catch(z){console.error("加载数据刷新配置失败:",z)}}async function Lt(){qt.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(He.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{qt.value=!1}}async function Wt(){var z;Ke.value=!0;try{const ue=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ue.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((z=ue.parser_stats)==null?void 0:z.dates_count)||0}交易日`),d.clear(),await tt()):ElementPlus.ElMessage.error(ue.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ke.value=!1}}const Ut=n(!1);async function xa(){Ut.value=!0;try{const ne=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(ne.success){const ue=ne.result||{},Me=ne.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ue.pulled||0}/${ue.total||0}, 财务 ${Me.pulled||0}/${Me.total||0}`),d.clear(),await tt()}else ElementPlus.ElMessage.error(ne.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Ut.value=!1}}const ba=f(()=>{const z={};for(const ne of S.value){const ue=(ne.evaluate_time||"").split("T")[0];z[ue]||(z[ue]=[]),z[ue].push(ne)}for(const ne in z)z[ne].sort((ue,Me)=>Me.evaluate_time.localeCompare(ue.evaluate_time));return z}),da=f(()=>{const z={};for(const ne of S.value){const ue=ne.stock_code;z[ue]||(z[ue]=[]),z[ue].push(ne)}for(const ne in z)z[ne].sort((ue,Me)=>Me.evaluate_time.localeCompare(ue.evaluate_time));return z}),la=f(()=>{const z={};for(const ne of S.value){const ue=(ne.evaluate_time||"").split("T")[0].slice(0,7);z[ue]||(z[ue]=[]),z[ue].push(ne)}for(const ne in z)z[ne].sort((ue,Me)=>Me.evaluate_time.localeCompare(ue.evaluate_time));return z}),Aa=f(()=>Object.keys(da.value).length),ua=f(()=>{const z=S.value.length;return z===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(ue=>{const Me=S.value.filter(Pe=>Pe.result.total_score>=ue.min&&Pe.result.total_score<=ue.max).length;return{...ue,count:Me,pct:Math.round(Me/z*100)}})});async function La(){if(!U.value)return;const z=Se.value.find(ne=>ne.code===U.value);if(z){O.value=!0,H.value=null,L.value="",K.value="fetching";try{E.value={stock:z.code,name:z.name,total_days:0},q.value=!0,C.value="ai",await nextTick();const ue=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z.code,stock_name:z.name,strategy:ie.value})})).json();ue.success?(H.value=ue.data,Q(),U.value=""):(L.value=ue.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch{L.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{O.value=!1,K.value=""}}}function va(z){const ne=b.value.indexOf(z);ne>=0?b.value.splice(ne,1):b.value.push(z)}function Ta(z){const ue=(ba.value[z]||[]).map(Pe=>Pe.id);ue.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ue.includes(Pe)):ue.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}function wa(z){const ue=(la.value[z]||[]).map(Pe=>Pe.id);ue.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ue.includes(Pe)):ue.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}function Ia(z){const ne=v.value.indexOf(z);ne>=0?v.value.splice(ne,1):v.value.push(z)}function Na(z){const ue=(da.value[z]||[]).map(Pe=>Pe.id);ue.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ue.includes(Pe)):ue.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}const Gt={},ma={};function _(z,ne,ue){if(!z||(ue&&(ma[ne]={el:z,records:ue}),Gt[ne]===z))return;const Me=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Pe=()=>{Object.keys(Gt).forEach(Ze=>{if(Gt[Ze]&&Gt[Ze]!==z){try{Gt[Ze].dispose()}catch{}delete Gt[Ze]}});const Rt=[...ue].sort((Ze,Nt)=>Ze.evaluate_time.localeCompare(Nt.evaluate_time)),st=Rt.map(Ze=>(Ze.evaluate_time||"").split("T")[0]),ht=Rt.map(Ze=>{var Nt;return((Nt=Ze.result)==null?void 0:Nt.total_score)??null}),Xt=Rt.map(Ze=>{var Nt;return((Nt=Ze.result)==null?void 0:Nt.level)??""}),zt={primary:M("--qc-primary-600")||"#b8922a",textPrimary:M("--text-primary")||"#1f2937",textSecondary:M("--text-secondary")||"#6b7280",border:M("--chart-axis")||"#b9b2a6",axis:M("--chart-axis")||"#b9b2a6",split:M("--chart-split")||"#e7e1d6",up:M("--qc-market-up")||"#e63946",down:M("--qc-market-down")||"#2e7d32"},pa=[];for(let Ze=1;Ze<ht.length;Ze++)ht[Ze]!=null&&ht[Ze-1]!=null&&Math.abs(ht[Ze]-ht[Ze-1])>=15&&pa.push({name:"大幅变化",coord:[st[Ze],ht[Ze]],value:(ht[Ze]-ht[Ze-1]>0?"↑":"↓")+Math.abs(ht[Ze]-ht[Ze-1]),symbol:"pin",symbolSize:32,itemStyle:{color:ht[Ze]-ht[Ze-1]>0?zt.up:zt.down}});const ia=echarts.init(z),St=window.__quantModules&&window.__quantModules.echartsTheme;St&&typeof St.getEChartsTheme=="function"&&ia.setOption(St.getEChartsTheme()),ia.setOption({tooltip:{trigger:"axis",backgroundColor:M("--bg-card")||"#ffffff",borderColor:zt.border,textStyle:{color:zt.textPrimary},formatter:function(Ze){var Mt;const Nt=(Mt=Ze[0])==null?void 0:Mt.dataIndex,Sa=Nt!=null?Xt[Nt]:"";return st[Nt]+"<br/>得分: "+ht[Nt]+(Sa?" ("+Sa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:st,axisLabel:{fontSize:10,rotate:30,color:zt.textSecondary},axisLine:{lineStyle:{color:zt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:zt.textSecondary},splitLine:{lineStyle:{color:zt.split}}},series:[{data:ht,type:"line",smooth:!0,lineStyle:{color:zt.primary,width:2},itemStyle:{color:zt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:M("--primary-rgb")?"rgba("+M("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:M("--primary-rgb")?"rgba("+M("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:pa.length>0?{data:pa}:void 0}]}),Gt[ne]=ia};Me?Me().then(Pe).catch(()=>{}):Pe()}function G(){Object.keys(ma).forEach(z=>{const ne=ma[z];if(!(!ne||!ne.el)){if(Gt[z]){try{Gt[z].dispose()}catch{}delete Gt[z]}_(ne.el,z,ne.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(G));async function ze(z){H.value=z,D.value=!1,W();try{const ne=await fetch(`/api/calendar/stock/${z.stock_code}?date=${w.value}`);E.value=await ne.json()}catch{E.value={stock:z.stock_code,name:z.stock_name||z.stock_code,total_days:0,history:[]}}q.value=!0,C.value="ai"}async function mt(){if(!te.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const z=te.value.split(/[,，\s]+/).filter(st=>st.trim());if(z.length===0)return;R.value=!0,s.value=z.length,y.value=0,l.value="",p.value={},X.value={},P.value={},z.forEach(st=>{p.value[st]="pending",X.value[st]=null});const ne={"Content-Type":"application/json"};let ue=0,Me=0,Pe=!1;try{const st=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:ne,body:JSON.stringify({stock_codes:z})});if(st.ok&&st.body){Pe=!0;const ht=st.body.getReader(),Xt=new TextDecoder("utf-8");let zt="",pa=!1;for(;!pa;){const{value:ia,done:St}=await ht.read();pa=St,zt+=Xt.decode(ia||new Uint8Array,{stream:!pa});let Ze;for(;(Ze=zt.indexOf(`

`))>=0;){const Nt=zt.slice(0,Ze);zt=zt.slice(Ze+2);const Sa=Nt.split(`
`).find(Ga=>Ga.startsWith("data: "));if(!Sa)continue;let Mt;try{Mt=JSON.parse(Sa.slice(6))}catch{continue}Mt.type==="start"?Mt.total&&(s.value=Mt.total):Mt.type==="item"?(y.value++,l.value=Mt.stock_code,Mt.success?(p.value[Mt.stock_code]="success",X.value[Mt.stock_code]=Mt,ue++):(p.value[Mt.stock_code]="error",P.value[Mt.stock_code]=Mt.error||"评估失败",Me++)):Mt.type==="done"&&(typeof Mt.success=="number"&&(ue=Mt.success),typeof Mt.fail=="number"&&(Me=Mt.fail))}}if(zt.trim()){const ia=zt.split(`
`).find(St=>St.startsWith("data: "));if(ia)try{const St=JSON.parse(ia.slice(6));St.type==="item"?(y.value++,l.value=St.stock_code,St.success?(p.value[St.stock_code]="success",X.value[St.stock_code]=St,ue++):(p.value[St.stock_code]="error",P.value[St.stock_code]=St.error||"评估失败",Me++)):St.type==="done"&&(typeof St.success=="number"&&(ue=St.success),typeof St.fail=="number"&&(Me=St.fail))}catch{}}}}catch{Pe=!1}if(!Pe){ue=0,Me=0,y.value=0;for(const st of z){l.value=st,p.value[st]="running";try{const Xt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:ne,body:JSON.stringify({stock_code:st.trim(),stock_name:st.trim()})})).json();Xt.success?(p.value[st]="success",X.value[st]=Xt.data,ue++):(p.value[st]="error",P.value[st]=Xt.message&&Xt.message!=="success"?Xt.message:"评估失败",Me++)}catch(ht){p.value[st]="error",P.value[st]="网络错误: "+(ht&&ht.message?ht.message:ht),Me++}y.value++}}l.value="",await Q();const Rt=z.length;setTimeout(()=>{Me===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ue}/${Rt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ue}/${Rt} · 失败 ${Me}`),R.value=!1},500)}return{quickEvalStock:U,evalStrategy:ie,watchlistSort:fe,watchlist:Se,watchlistCodes:Y,sortedWatchlist:se,getWatchlistScore:ke,getLatestScore:Te,addSearchResult:ge,evaluatedCodes:ye,klineLoadedCodes:Ee,markKlineLoaded:re,watchlistSearch:ae,watchlistResults:me,watchlistSearching:Ne,dataRefreshConfig:He,dataRefreshReloading:Ke,dataRefreshSaving:qt,aiHistoryLoading:ce,aiHistoryError:Ae,aiHistoryTotal:ft,aiHistoryLoadingMore:it,hasMoreAiHistory:Ht,loadMoreAiHistory:he,watchlistLoading:Qt,doAiEvaluate:_t,loadAiHistory:Q,deleteSingleHistory:et,toggleSelectHistory:Ue,clearSelection:wt,clearWatchlistSelection:At,batchReevaluateHistory:It,batchAddToWatchlist:vt,batchAddToPortfolio:Pt,batchRemoveWatchlist:Kt,toggleSelectWatchlist:Jt,selectAllHistory:xt,selectAllWatchlist:gt,deleteSelectedHistory:Zt,loadAutoEvaluateConfig:Dt,saveAutoEvaluateConfig:ra,loadWatchlist:sa,addToWatchlist:dt,removeFromWatchlist:$t,clearWatchlist:ca,toggleWatchlist:ya,showStockKline:_a,preloadingKline:na,preloadWatchlistKline:B,watchlistEvaluate:_e,batchEvaluateWatchlist:Fe,batchEvaluateSelected:De,searchStockForWatchlist:ut,loadDataRefreshConfig:tt,saveDataRefreshConfig:Lt,triggerDataReload:Wt,triggerDataPull:xa,dataPullRunning:Ut,groupedByDate:ba,aiHistoryByStock:da,groupedByMonth:la,aiHistoryStockCount:Aa,scoreDistribution:ua,quickEvaluate:La,toggleDateExpand:va,toggleSelectDate:Ta,toggleSelectMonth:wa,toggleStockExpand:Ia,toggleSelectStock:Na,registerTrendChart:_,viewAiResult:ze,doBatchEvaluate:mt,realtimeQuotes:Xe,realtimeDegraded:Qe,realtimeWsState:Ye,connectRealtimeQuotes:Ge,disconnectRealtimeQuotes:$e,quoteWarningFor:aa,realtimeQuoteColor:I,realtimePriceText:ee,realtimePctText:Ce,realtimeRatioText:Ie,REALTIME_DEGRADED_TEXT:Tt,REALTIME_FALLBACK_TEXT:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:g}=Vue,e=t([]),u=t(null),m=t([]),T=t(!1),r=t(!1),n=t(!1),f=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),x=t(!1),w=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),E=t(!1),C=t("positions"),q=t(30),F=t(!1),D=t(""),d=t(!1),i=t({dates:[],equity:[],values:[]}),h=g(()=>e.value.length),V=t("metrics"),W=t(!1),S=t(""),O=t(!1),K=t({metrics:null,rules:[],rebalance:null}),A=g(function(){const c=K.value.metrics;if(!c)return[];const N=function(J){return J==null?"--":Number(J).toFixed(2)+"%"},oe=function(J){return J==null?"--":Number(J).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:N(c.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:N(c.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:N(c.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:N(c.cvar)},{key:"max_drawdown",label:"最大回撤",value:N(c.max_drawdown)},{key:"annual_return",label:"年化收益",value:N(c.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:oe(c.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:oe(c.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:oe(c.calmar_ratio)},{key:"beta",label:"Beta",value:oe(c.beta)}]});async function L(){W.value=!0;try{const c=await(await fetch("/api/portfolio/risk?days=60")).json(),N=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),oe=c&&c.success?c.risk:null,J=N&&N.success?N.rules||[]:[],M=N&&N.success?N.rebalance:null;K.value={metrics:oe,rules:J,rebalance:M},O.value=!!(oe&&Object.keys(oe).length>0),S.value=c&&c.note||N&&N.note||""}catch(c){console.warn("[portfolio] 加载风险数据失败:",c),O.value=!1,S.value="风险数据加载失败"}finally{W.value=!1}}async function H(){T.value=!0,r.value=!1;try{const N=await(await fetch("/api/portfolio")).json();N.success?(e.value=N.positions||[],u.value=N.summary||null):r.value=!0}catch(c){console.warn("[portfolio] 加载持仓失败:",c),r.value=!0}finally{T.value=!1}}async function $(){const c=f.value,N=(c.stock_code||"").trim();if(!N){ElementPlus.ElMessage.warning("请输入股票代码");return}const oe=Number(c.cost_price),J=Number(c.quantity);if(!(oe>0)||!(J>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const U=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:N,stock_name:(c.stock_name||"").trim(),cost_price:oe,quantity:J})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"持仓已更新"),n.value=!1,f.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await H(),P(q.value)):ElementPlus.ElMessage.error(U.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function Z(c){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+c+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const oe=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(c),{method:"DELETE"})).json();oe.success?(ElementPlus.ElMessage.success("已删除持仓"),await H(),R(),P(q.value)):ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function le(c,N){w.value={stock_code:c,stock_name:N||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},x.value=!0}async function te(){const c=w.value;if(!c.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const N=Number(c.price),oe=Number(c.quantity);if(!(N>0)||!(oe>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}E.value=!0;try{const M=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:c.stock_code,stock_name:c.stock_name||"",action:c.action,price:N,quantity:oe,trade_date:c.trade_date||"",note:(c.note||"").trim()})})).json();M.success?(ElementPlus.ElMessage.success(M.message||"调仓已记录"),x.value=!1,await H(),await R(),P(q.value)):ElementPlus.ElMessage.error(M.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{E.value=!1}}async function R(){try{const N=await(await fetch("/api/portfolio/trades")).json();N.success&&(m.value=N.trades||[])}catch(c){console.warn("[portfolio] 加载调仓记录失败:",c)}}const s=c=>(getComputedStyle(document.documentElement).getPropertyValue(c)||"").trim();function y(c){if(!c||!c.length)return[];let N=c[0]||0;const oe=[];for(let J=0;J<c.length;J++){const M=c[J]||0;M>N&&(N=M),oe.push(N>0?Math.round((M-N)/N*1e3)/10:0)}return oe}function l(){const c={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},N=i.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:c.border,textStyle:{color:c.textPrimary},formatter:function(oe){const J=oe[0]?oe[0].dataIndex:-1,M=N.dates[J]||"",U=N.equity[J],ie=N.values[J];let fe=M||"";return U!=null&&(fe+="<br/>组合净值: "+U),ie!=null&&(fe+="<br/>组合市值: "+ie),fe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:N.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:c.textSecondary},axisLine:{lineStyle:{color:c.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:c.textSecondary},splitLine:{lineStyle:{color:c.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:c.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:N.equity,smooth:!0,showSymbol:!1,lineStyle:{color:c.primary,width:2},itemStyle:{color:c.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:y(N.equity),smooth:!0,showSymbol:!1,lineStyle:{color:c.down,width:1.5},itemStyle:{color:c.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function p(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(c,N,oe){i.value={dates:c||[],equity:N||[],values:oe||[]},d.value=!!c&&c.length>0,d.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",l,{key:"portfolio-equity"}):p()}async function P(c){F.value=!0,D.value="";const N=Number(c)||q.value||30;q.value=N;try{const J=await(await fetch("/api/portfolio/equity_curve?days="+N)).json();J.success?(D.value=J.note||"",X(J.dates||[],J.equity||[],J.values||[])):(D.value="数据暂不可用",p())}catch(oe){console.warn("[portfolio] 加载收益曲线失败:",oe),D.value="数据暂不可用",p()}finally{F.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function b(c,N){if(c==null||c===""||isNaN(Number(c)))return"--";const oe=Number(c),J=N??2;return(oe>=0?"+":"")+oe.toFixed(J)}function v(c,N){if(c==null||c===""||isNaN(Number(c)))return"--";const oe=Number(c),J=N??2;return(oe>=0?"+":"")+oe.toFixed(J)+"%"}function k(c){if(c==null||c===""||isNaN(Number(c)))return"";const N=Number(c);return N>0?"portfolio-up":N<0?"portfolio-down":""}return{positions:e,summary:u,trades:m,loading:T,loadError:r,showAddForm:n,addForm:f,addSaving:o,tradeFormVisible:x,tradeForm:w,tradeSaving:E,portfolioTab:C,equityDays:q,equityLoading:F,equityNote:D,equityHasData:d,portfolioCount:h,loadPortfolio:H,addPosition:$,removePosition:Z,openTradeForm:le,submitTrade:te,loadTrades:R,loadEquity:P,fmtSigned:b,fmtSignedPct:v,signClass:k,riskTab:V,riskLoading:W,riskNote:S,riskHasData:O,riskData:K,riskMetricList:A,loadRisk:L}}}})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(n,f){var o=Number(n);return isFinite(o)?o:typeof f=="number"?f:0}function t(n){var f=Array.isArray(n)?n:[];if(f.length<2)return null;for(var o=-1/0,x=0,w=0,E=0,C=0,q=0;q<f.length;q++){var F=a(f[q].equity!=null?f[q].equity:f[q].value);F>o&&(o=F,x=q);var D=o>0?(o-F)/o*100:0;D>w&&(w=D,E=x,C=q)}function d(i){return f[i]&&f[i].date?f[i].date:""}return{maxDrawdown:Math.round(w*100)/100,peakIndex:E,troughIndex:C,peakDate:d(E),troughDate:d(C)}}function g(n){for(var f=n||{},o={},x=Object.keys(f).sort(),w=0;w<x.length;w++){var E=x[w],C=String(E).slice(0,4);/^\d{4}$/.test(C)&&(o[C]=(o[C]||0)+a(f[E]))}var q=Object.keys(o).sort();return q.map(function(F){return{year:F,return:Math.round(o[F]*100)/100}})}function e(n){var f=Array.isArray(n)?n:[],o={};f.forEach(function(E){(E.points||[]).forEach(function(C){C&&C.date&&(o[C.date]=1)})});var x=Object.keys(o).sort(),w=f.map(function(E){var C={};return(E.points||[]).forEach(function(q){q&&q.date&&(C[q.date]=a(q.value!=null?q.value:q.equity))}),{name:E.name||"",data:x.map(function(q){return q in C?C[q]:null})}});return{dates:x,series:w}}function u(n){var f=n||{},o=function(w){return a(w)},x=function(w,E){var C=o(w);return isFinite(C)?C.toFixed(E):"--"};return[{key:"total_return",label:"总收益",value:x(f.total_return,2),suffix:"%",dir:o(f.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:x(f.annual_return,2),suffix:"%",dir:o(f.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:x(f.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:x(f.sharpe_ratio,2),suffix:"",dir:o(f.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:x(f.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:x(f.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(f.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:x(f.volatility,2),suffix:"%",dir:""}]}function m(n){var f=n==null?"":String(n);return/[",\n]/.test(f)?'"'+f.replace(/"/g,'""')+'"':f}function T(n){var f=n||{},o=[];o.push("回测指标"),o.push("指标,数值"),(f.metrics||[]).forEach(function(d){o.push(m(d.label)+","+m((d.value||"")+(d.suffix||"")))}),o.push(""),o.push("净值曲线");var x=["日期"].concat((f.series||[]).map(function(d){return d.name}));o.push(x.map(m).join(","));for(var w=f.dates||[],E=f.series||[],C=0;C<w.length;C++){for(var q=[w[C]],F=0;F<E.length;F++){var D=E[F].data&&E[F].data[C];q.push(D??"")}o.push(q.map(m).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(f.trades||[]).forEach(function(d){o.push(m(d.date)+","+m(d.stock)+","+m(d.action)+","+m(d.reason))}),o.join(`
`)}function r(n){return n==="buy"?"买入":n==="sell"?"卖出":n||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:g,buildNavSeries:e,buildMetrics:u,buildBacktestCsv:T,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:g}=Vue,e=window.QuantBacktest||{},u=a||{},m=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(u.backtestStrategies)&&u.backtestStrategies.length?u.backtestStrategies:m).map(s=>({id:s.id,name:s.name})),n=t(r.length?[r[0].id]:[]),f=t(F()),o=t(1e5),x=t(3e-4),w=t(!1),E=t(!1),C=t(null),q=t("");function F(){const s=new Date,y=new Date;y.setFullYear(y.getFullYear()-1);const l=p=>p.getFullYear()+"-"+String(p.getMonth()+1).padStart(2,"0")+"-"+String(p.getDate()).padStart(2,"0");return[l(y),l(s)]}function D(s){const y=n.value.indexOf(s);y>=0?n.value.length>1&&n.value.splice(y,1):n.value.push(s)}function d(s){const y=r.find(l=>l.id===s);return y?y.name:s}function i(s){const y=s.summary||s;return{strategy_id:y.strategy_id,start_date:y.start_date,end_date:y.end_date,total_days:y.total_days,total_return:y.total_return,annual_return:y.annual_return,max_drawdown:y.max_drawdown,volatility:y.volatility,sharpe_ratio:y.sharpe_ratio,sortino_ratio:y.sortino_ratio,win_rate:y.win_rate,profit_loss_ratio:y.profit_loss_ratio,avg_positions:y.avg_positions!=null?y.avg_positions:y.avg_positions_per_day,total_trades:y.total_trades,turnover_rate:y.turnover_rate,success:y.success!==!1,message:y.message||"",insample_total_return:y.insample_total_return!=null?y.insample_total_return:null,outsample_total_return:y.outsample_total_return!=null?y.outsample_total_return:null,out_sample_ratio:y.out_sample_ratio!=null?y.out_sample_ratio:.2,overfit_warning:!!y.overfit_warning,overfit_reason:y.overfit_reason||""}}function h(s){return(Array.isArray(s)?s:[]).map(y=>({date:y.date,value:y.equity!=null?y.equity:y.value}))}function V(s,y){const l=i(y),p=h(y.equity_curve),X=y.monthly_returns||{},P=Array.isArray(y.trade_history)?y.trade_history:[],b={id:s,name:d(s),summary:l,equityCurve:p,monthlyReturns:X,trades:P};let v=null;if(w.value){const k=Number(o.value)||1e5;v={name:"现金基准",points:p.map(c=>({date:c.date,value:k}))}}return{success:!0,mode:"single",strategies:[b],primary:b,benchmark:v,period:(l.start_date||"")+" ~ "+(l.end_date||"")}}function W(s,y){const l=y.strategy_results||{},p=s.map(b=>{const v=l[b];if(!v)return null;const k=i(v);return{id:b,name:d(b),summary:k,equityCurve:h(v.equity_curve),monthlyReturns:v.monthly_returns||{},trades:Array.isArray(v.trade_history)?v.trade_history:[]}}).filter(b=>b&&b.summary.success!==!1),X=p.length?p[0]:null;let P=null;return w.value&&(P={name:"等权组合基准",points:h(y.portfolio_equity)}),{success:p.length>0,mode:"multi",strategies:p,primary:X,benchmark:P,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const S=g(()=>{const s=C.value;return!s||!s.primary?[]:e.buildMetrics?e.buildMetrics(s.primary.summary):[]}),O=g(()=>{const s=C.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(s.primary.monthlyReturns):[]}),K=g(()=>{const s=C.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((y,l)=>String(l.date||"").localeCompare(String(y.date||"")))}),A=g(()=>{const s=C.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(y=>({name:y.name,metrics:e.buildMetrics?e.buildMetrics(y.summary):[]}))}),L=g(()=>{const s=C.value;return!s||!s.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function H(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const y=n.value;if(!y.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const l=f.value,p={start_date:l&&l[0]||void 0,end_date:l&&l[1]||void 0},X={"Content-Type":"application/json"};E.value=!0,C.value=null,q.value="";try{if(y.length===1){const P=Object.assign({},p,{initial_capital:Number(o.value)||1e5,commission_rate:Number(x.value)||3e-4}),b=await fetch("/api/backtest/"+encodeURIComponent(y[0]),{method:"POST",headers:X,body:JSON.stringify(P)});if(!b.ok){const k=await b.json().catch(()=>({}));throw new Error(k.detail||"回测失败")}const v=await b.json();if(!v.success)throw new Error(v.message||"回测失败");C.value=V(y[0],v)}else{const P=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},p,{strategy_ids:y}))});if(!P.ok){const v=await P.json().catch(()=>({}));throw new Error(v.detail||"回测失败")}const b=await P.json();if(!b.success)throw new Error(b.message||"多策略回测失败");if(C.value=W(y,b.data||{}),!C.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(P){q.value=P&&P.message?P.message:"回测失败",ElementPlus.ElMessage.error(q.value)}finally{E.value=!1}}function $(){const s=C.value,y={dates:[],series:[]};if(!s)return y;const l=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&l.push({name:s.benchmark.name,points:s.benchmark.points});const p=e.buildNavSeries?e.buildNavSeries(l):y;return Z(p,s)}function Z(s,y){const l=N=>(getComputedStyle(document.documentElement).getPropertyValue(N)||"").trim(),p={primary:l("--qc-primary-600")||"#b8922a",success:l("--color-success")||"#4CAF50",accent:l("--color-accent")||"#F59E0B",info:l("--color-info")||"#1976d2",ai:l("--color-ai")||"#6366f1",textPrimary:l("--text-primary")||"#1f2937",textSecondary:l("--text-secondary")||"#6b7280",border:l("--border-light")||"#e5e7eb",up:l("--color-rise")||"#E63946",down:l("--color-fall")||"#2E7D32",bg:l("--bg-card")||"#ffffff"},X=[p.primary,p.success,p.accent,p.info,p.ai],b=p.bg.length===7&&parseInt(p.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",v=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(y.primary?y.primary.equityCurve:[]):null,k=v&&v.peakDate&&v.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:p.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+v.maxDrawdown+"%",xAxis:v.peakDate,itemStyle:{color:p.down}},{xAxis:v.troughDate}]]}:void 0,c=s.series.map((N,oe)=>{const J=y.benchmark&&N.name===y.benchmark.name,M=X[oe%X.length];return{name:N.name,type:"line",data:N.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:J?2:2.4,type:J?"dashed":"solid",color:M},itemStyle:{color:M},emphasis:{focus:"series"},...oe===0&&k?{markArea:k}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:b,borderColor:p.border,textStyle:{color:p.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:p.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:p.border}},axisLabel:{color:p.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:p.textSecondary,fontSize:11},splitLine:{lineStyle:{color:p.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:p.border,textStyle:{color:p.textSecondary,fontSize:10}}],series:c}}function le(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",$,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function te(){const s=C.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const y=s.strategies.map(c=>({name:c.name,points:c.equityCurve}));s.benchmark&&y.push({name:s.benchmark.name,points:s.benchmark.points});const l=e.buildNavSeries?e.buildNavSeries(y):{dates:[],series:[]},p=e.tradeActionText||(c=>c),X=K.value.map(c=>({date:c.date,stock:c.stock,action:p(c.action),reason:c.reason})),P=e.buildBacktestCsv?e.buildBacktestCsv({metrics:S.value,dates:l.dates,series:l.series,trades:X}):"",b=new Blob(["\uFEFF"+P],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(b),k=document.createElement("a");k.href=v,k.download="backtest-"+s.strategies.map(c=>c.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",k.click(),URL.revokeObjectURL(v),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function R(s,y){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(y??2)}return{btStrategyOptions:r,btSelectedStrategies:n,toggleBtStrategy:D,btDateRange:f,btCapital:o,btCommissionRate:x,btIncludeBenchmark:w,btRunning:E,btResult:C,btError:q,btMetrics:S,btAnnualReturns:O,btTrades:K,btStrategyMetricsRows:A,btDrawdownRegion:L,runBacktestWorkbench:H,exportBacktestCSV:te,registerBacktestNavChart:le,btFmtNum:R}}}})();(function(){const{ref:a,computed:t,watch:g,onUnmounted:e}=Vue,u=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),m=72,T={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},n={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},f={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),x=a({}),w=a(!1),E=a({}),C=a({cycles:[]}),q=a([]),F=a(0),D=a(!1),d=a({autoRefresh:!0,refreshInterval:300}),i=a(""),h=a(""),V=a(!1),W=a("");let S=null;const O={x:0,y:0},K=t(()=>{const Y=x.value;return["recession","recovery","overheat","stagflation"].map(Ae=>{const se=Y[Ae]||{};return{key:Ae,name:se.name||Ae,icon:n[se.icon]||"bar-chart-3",color:se.color||u("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&f[Ae]||""}})}),A=t(()=>{var ce,Ae,se,ke;const Y=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ce=Y.pmi)==null?void 0:ce.toFixed(2),color:Y.pmi>=50?u("--color-success")||"#43a047":u("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Ae=Y.gdp_growth)==null?void 0:Ae.toFixed(2))+"%",color:u("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=Y.cpi)==null?void 0:se.toFixed(2))+"%",color:Y.cpi>1.2?u("--color-danger")||"#E53935":u("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ke=Y.m2_growth)==null?void 0:ke.toFixed(2))+"%",color:u("--color-success")||"#43a047"}]}),L=Y=>{Y=Y||{};const ce=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Ae=()=>u("--color-success")||"#43a047",se=()=>u("--color-danger")||"#E53935",ke=()=>u("--color-warning")||"#FF9800",Te={宽松:Ae(),中位:ke(),偏低:se(),高增长:Ae(),承压:se(),不利:se()};return ce.map(ge=>{const ye=Y[ge.key]||{},Ee=ye.score||0,re=Math.min(100,Math.max(5,(Ee+2)*25)),ae=Ee>=.3?"var(--state-success-solid)":Ee>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",me=Ee>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ge.key,label:ge.label,scoreStr:Ee.toFixed(2),level:ye.level||"—",barWidth:re,barColor:ae,scoreColor:me,color:Te[ye.level]||"var(--text-tertiary)"}})},H=t(()=>L(o.value.dimension_scores)),$=t(()=>L(E.value._dimensions)),Z=t(()=>{var ce;const Y=((ce=o.value.confidence)==null?void 0:ce.level)||"";return Y==="高"?"var(--state-success-text)":Y==="中"?"var(--state-warning-text)":Y==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),le=t(()=>{var se,ke,Te,ge;const Y=x.value,ce={recovery:0,overheat:1,stagflation:2,recession:3},Ae={};for(const[ye,Ee]of Object.entries(Y))Ae[ye]={name:Ee.name,icon:Ee.icon,color:Ee.color,lightColor:Ee.bg_color,duration:"~"+(((se=Ee.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:ce[ye]||0,period:((Te=(ke=Ee.case_studies)==null?void 0:ke[0])==null?void 0:Te.split("：")[0])||"",avgMonths:((ge=Ee.historical_stats)==null?void 0:ge.avg_duration_months)||18};return Ae}),te=t(()=>{var Ee,re;const Y=o.value.stage,Ae={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Y]||{x:150,y:150},se=o.value.dimension_scores||{},ke=((Ee=se.growth)==null?void 0:Ee.score)||0,Te=((re=se.inflation)==null?void 0:re.score)||0,ge=Math.max(-30,Math.min(30,ke*15)),ye=Math.max(-30,Math.min(30,-Te*15));return{x:Ae.x+ge,y:Ae.y+ye,prevX:O.x,prevY:O.y}}),R=t(()=>{var se;const Y=Math.min(100,((se=o.value.timing)==null?void 0:se.progress_percent)||0),ce=o.value.color||"var(--state-success-solid)",Ae=Y>100?"linear-gradient(90deg, "+ce+", var(--state-warning-solid))":ce;return{width:Y+"%",background:Ae}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function y(){var Y,ce;return((ce=(Y=o.value)==null?void 0:Y.timing)==null?void 0:ce.progress_percent)||0}function l(){var Y,ce;return((ce=(Y=o.value)==null?void 0:Y.timing)==null?void 0:ce.duration_months)||0}function p(){var Y,ce;return((ce=(Y=o.value)==null?void 0:Y.timing)==null?void 0:ce.avg_duration_months)||18}function X(Y){var ke,Te;const ce=le.value,Ae=((ke=ce[o.value.stage])==null?void 0:ke.order)||0;return(((Te=ce[Y])==null?void 0:Te.order)||0)<Ae}function P(Y){return T[Y]||Y}function b(Y){return r[Y]||Y}function v(Y){const ce=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ce[Y-1]||ce[3]}async function k(){try{const ce=await(await fetch("/api/market/merrill-clock/stages")).json();ce.success&&ce.data&&(x.value=ce.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function c(){D.value=!0;try{oe();const ce=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ce.success&&ce.data){const Ae=Array.isArray(ce.data.cycles)?ce.data.cycles.slice().reverse():[];C.value={cycles:Ae}}}catch{console.warn("获取美林时钟时间轴失败")}finally{D.value=!1}}async function N(Y){await M(Y)}async function oe(){try{const ce=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ce&&ce.success&&ce.data&&(q.value=ce.data.items||[],F.value=ce.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function J(){var Y,ce;try{const se=await(await fetch("/api/market/merrill-clock")).json(),ke=se.stage||"recovery",Te=x.value[ke]||{};if(o.value={...Te,...se,stage_cn:se.stage_cn||Te.stage_cn||"",stage_name:se.stage_name||Te.name||"",name:se.name||Te.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),W.value&&W.value!==ke){const ge=x.value,ye=((Y=ge[W.value])==null?void 0:Y.name)||W.value,Ee=((ce=ge[ke])==null?void 0:ce.name)||ke;ElementPlus.ElMessage({message:"美林时钟阶段切换："+ye+" → "+Ee,type:"warning",duration:6e3,showClose:!0})}W.value=ke}catch(Ae){console.error("获取美林时钟失败:",Ae);const se=x.value.recovery||{};o.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function M(Y){var Ae;w.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",E.value=x.value[Y]||x.value.recovery||{};const ce=((Ae=o.value)==null?void 0:Ae.stage)===Y;E.value._isCurrent=ce,ce&&o.value&&(E.value._nextPrediction=o.value.next_stage_prediction,E.value._confidence=o.value.confidence,E.value._stage=o.value.stage,E.value._dimensions=o.value.dimension_scores);try{const ke=await(await fetch("/api/market/merrill-clock/stage/"+Y)).json();if(ke.success&&ke.data){const Te={...x.value[Y],...ke.data};Te._is_current!==void 0&&(Te._isCurrent=Te._is_current),Te._current_timing&&(Te._currentTiming=Te._current_timing),Te._last_period&&(Te._lastPeriod=Te._last_period),E.value._nextPrediction&&(Te._nextPrediction=E.value._nextPrediction),E.value._confidence&&(Te._confidence=E.value._confidence),E.value._stage&&(Te._stage=E.value._stage),E.value._dimensions&&(Te._dimensions=E.value._dimensions),Object.assign(E.value,Te)}}catch(se){console.warn("获取阶段详情失败:",se)}}function U(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:d.value.autoRefresh,refreshInterval:d.value.refreshInterval})),d.value.autoRefresh?(clearInterval(S),S=setInterval(J,d.value.refreshInterval*1e3)):clearInterval(S),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){V.value=!0,h.value="";try{const ce=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ce.success?(h.value="重评估完成："+(ce.stage_name||ce.stage),await J(),ElementPlus.ElMessage.success("重评估完成")):(h.value=ce.message||"重评估失败",ElementPlus.ElMessage.error(ce.message||"重评估失败"))}catch{h.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{V.value=!1}}function fe(){const Y=localStorage.getItem("merrill_clock_config");if(Y)try{const ce=JSON.parse(Y);d.value={...d.value,...ce}}catch{}d.value.autoRefresh&&(S=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),J()},d.value.refreshInterval*1e3))}function Se(){S&&clearInterval(S)}return e(()=>{Se()}),{merrillData:o,merrillStagesConfig:x,showMerrillDetail:w,merrillDetailData:E,merrillTimeline:C,merrillSnapshots:q,merrillSnapshotsTotal:F,fetchMerrillSnapshots:oe,timelineLoading:D,merrillClockConfig:d,merrillClockLastUpdated:i,merrillReevalResult:h,merrillReevalLoading:V,stages:K,indicatorList:A,dimensionScoreList:H,detailDimensionScoreList:$,confidenceColor:Z,timelineStages:le,clockPosition:te,merrillProgressStyle:R,FULL_CYCLE_MONTHS:m,getStageAngle:s,getCycleProgress:y,getCurrentStageMonths:l,getStageTotalMonths:p,isStageCompleted:X,getCharLabel:P,getAssetName:b,getRankColor:v,fetchMerrillStages:k,fetchMerrillClock:J,loadMerrillTimeline:c,showTimelineStage:N,showStageDetail:M,saveMerrillClockConfig:U,doMerrillReevaluate:ie,startAutoRefresh:fe,stopAutoRefresh:Se}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var t=[210,28,165,290,348,190,52,250];function g(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var n=r?62:58,f=r?62:40;return t.map(function(o){return"hsl("+o+", "+n+"%, "+f+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:g(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const u=[];function m(r){typeof r=="function"&&u.push(r)}function T(){u.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:g,registerChart:m,refreshAllCharts:T,init(){return{getEChartsTheme:e,registerChart:m,refreshAllCharts:T}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
      <div class="sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="sidebar-logo">
          <svg class="sidebar-logo-img" viewBox="0 0 100 100" width="26" height="26" aria-label="量化日历 logo" role="img">
            <!-- v3.22-logo: 蓝黄红三柱 + 背景/边框随主题 -->
            <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
            <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
            <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
            <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
            <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
            <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
            <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
            <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
          </svg>
          <h2>{{ t('login.title') }}</h2>
        </div>
        <div class="sidebar-nav">
          <div v-for="menu in menus" :key="menu.key" class="nav-item" :class="{active: currentPage === menu.key}"
               @click="navigate(menu)" tabindex="0" role="button"
               :aria-label="menu.name" :aria-current="currentPage === menu.key ? 'page' : null"
               @keydown.enter.prevent="navigate(menu)" @keydown.space.prevent="navigate(menu)">
            <span class="nav-icon" v-html="sanitizeHtml(menu.icon)"></span>
            <span>{{ menu.name }}</span>
          </div>
        </div>
        <div class="sidebar-collapse-btn" @click="toggle" :title="sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'"
             tabindex="0" role="button" :aria-expanded="!sidebarCollapsed" aria-label="折叠/展开侧边栏"
             @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle">
        </div>
      </div>
    `,setup(){const g=t("qcState");try{const m=localStorage.getItem("quant_sidebar_collapsed");m!==null&&g.sidebarCollapsed&&(g.sidebarCollapsed.value=m==="1")}catch{}if(!g)return{};const e=async m=>{if(window.__quantGoPage){await window.__quantGoPage(m.key,m.subPages[0]||"");return}g.currentPage.value=m.key,g.currentSubPage.value=m.subPages[0]||""},u=()=>{g.sidebarCollapsed.value=!g.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",g.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:g.menus,currentPage:g.currentPage,sidebarCollapsed:g.sidebarCollapsed,navigate:e,toggle:u,sanitizeHtml:g.sanitizeHtml,keyClick:g.keyClick,t:g.t}}}})();const Ea={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,g={"layout-dashboard":Wv,calendar:Kv,bot:Bv,"flask-conical":Hv,zap:Fv,settings:Vv,"chevron-down":jv,"chevron-right":Ov,"chevron-left":Nv,menu:Iv,search:Lv,bell:Av,sun:zv,moon:Rv,user:Dv,"user-round":Pv,home:Tv,x:Mv,database:Ev,activity:qv,clock:Cv,"bar-chart-3":Sv,shield:xv,"hard-drive":_v,"file-text":kv,users:wv,cpu:bv,"pie-chart":yv,info:hv,"log-out":gv,palette:fv,languages:pv,refresh:mv,download:vv,"external-link":uv,command:dv,sparkles:cv,"trending-up":rv,"trending-down":ov,"circle-dot":iv,check:lv,"alert-triangle":nv,loader:sv,"arrow-left":av,"arrow-right":tv,eye:ev,"eye-off":Zu,lock:Xu,"sliders-horizontal":$u,play:Qu,history:Ju,layers:Yu,"line-chart":Gu,target:Uu,"search-check":Wu,star:Ku,"message-circle":Bu,"calendar-days":Hu,"calendar-range":Fu,"calendar-check":Vu,brain:ju,lightbulb:Ou,"octagon-x":Nu,flag:Iu,package:Lu,"clipboard-list":Au,pin:zu,"radio-tower":Ru,gauge:Du,landmark:Pu,"candlestick-chart":Tu,wallet:Mu,"badge-check":Eu,key:qu,factory:Cu,trophy:Su,rocket:xu,flame:_u,"map-pin":ku,"scroll-text":wu,"book-open":bu,dna:yu,"bar-chart":hu,plus:gu,"star-off":fu,upload:pu,gem:mu,"folder-open":vu,link:uu,save:du,"trash-2":cu,pause:ru,"help-circle":ou,"play-circle":iu,pencil:lu,folder:nu,code:su,sprout:au,wheat:tu,snowflake:eu,fuel:Zd,banknote:Xd,send:$d,inbox:Qd,"wifi-off":Jd,"check-circle-2":Yd,"x-circle":Gd},e=()=>g[t.name]||g["circle-dot"];return(u,m)=>(ve(),ga(Ad(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ma=(a,t)=>{const g=a.__vccOpts||a;for(const[e,u]of t)g[e]=u;return g},Uv={name:"qc-sidebar",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.menus&&a.menus.value||[]),g=at(()=>a.currentPage&&a.currentPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),u=at({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:D=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=D)}}),m=kt({}),T={research:"量化投研",platform:"平台管理"},r=["research","platform"],n=D=>g.value===D.key,f=(D,d)=>g.value===D.key&&a.currentSubPage&&a.currentSubPage.value===d,o=D=>Array.isArray(D.subPages)&&D.subPages.length>1,x=(D,d)=>a.subPageNames&&a.subPageNames[d]||d;function w(D){!o(D)||u.value||(m.value[D.key]=!m.value[D.key])}function E(){t.value.forEach(D=>{m.value[D.key]===void 0&&(m.value[D.key]=n(D))})}async function C(D,d){const i=d||D.subPages&&D.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(D.key,i):(a.currentPage.value=D.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(D.key,i)}function q(){u.value=!u.value;try{localStorage.setItem("sidebar_collapsed",u.value?"1":"0")}catch{}}function F(D){if(D.ctrlKey&&D.key.toLowerCase()==="b"&&(D.preventDefault(),q()),!D.ctrlKey&&!D.metaKey&&!D.altKey&&(D.key==="ArrowDown"||D.key==="ArrowUp")){const d=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=d.indexOf(document.activeElement);if(i>=0){D.preventDefault();const h=d[(i+(D.key==="ArrowDown"?1:d.length-1))%d.length];h&&h.focus()}}}return za(()=>{E(),document.addEventListener("keydown",F)}),us(()=>document.removeEventListener("keydown",F)),{state:a,menus:t,currentPage:g,navMode:e,sidebarCollapsed:u,expandedMenus:m,GROUP_LABELS:T,GROUPS:r,isActive:n,isChildActive:f,hasChildren:o,subLabel:x,toggleSubmenu:w,navigate:C,toggleCollapse:q}}},Gv={class:"qc-sidebar-logo"},Yv={key:0,class:"qc-logo-text"},Jv={class:"qc-sidebar-nav"},Qv={key:0,class:"qc-nav-group"},$v={key:0,class:"qc-nav-group-label"},Xv=["href","aria-current","onClick"],Zv={key:0,class:"qc-sidebar-label"},em={key:1,class:"qc-nav-badge"},tm=["aria-expanded","aria-controls","onClick"],am=["id"],sm=["href","aria-current","onClick"],nm={class:"qc-sidebar-child-label"},lm={class:"qc-sidebar-footer"},im=["aria-expanded","aria-label","title"];function om(a,t,g,e,u,m){const T=Vt("AppIcon"),r=Vt("el-tooltip");return ve(),pe("nav",{class:rt(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[be("div",Gv,[t[1]||(t[1]=Ld('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Be("",!0):(ve(),pe("span",Yv,Le(e.state.t("login.title")),1))]),be("div",Jv,[(ve(!0),pe(ot,null,Ct(e.GROUPS,n=>(ve(),pe(ot,{key:n},[e.menus.some(f=>f.group===n)?(ve(),pe("div",Qv,[e.sidebarCollapsed?Be("",!0):(ve(),pe("span",$v,Le(e.GROUP_LABELS[n]),1)),(ve(!0),pe(ot,null,Ct(e.menus.filter(f=>f.group===n),f=>(ve(),pe(ot,{key:f.key},[be("div",{class:rt(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(f),"is-child-open":e.navMode==="tree"&&e.expandedMenus[f.key]}])},[nt(r,{content:f.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:ta(()=>[be("a",{class:rt(["qc-sidebar-link",{"is-active":e.isActive(f)}]),href:"#"+f.key,"aria-current":e.isActive(f)?"page":null,onClick:jt(o=>e.navigate(f),["prevent"])},[nt(T,{name:f.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Be("",!0):(ve(),pe("span",Zv,Le(f.name),1)),!e.sidebarCollapsed&&f.badge?(ve(),pe("span",em,Le(f.badge),1)):Be("",!0)],10,Xv)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(f)?(ve(),pe("button",{key:0,class:rt(["qc-sidebar-chevron",{"is-open":e.expandedMenus[f.key]}]),"aria-expanded":!!e.expandedMenus[f.key],"aria-controls":"submenu-"+f.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(f)},[nt(T,{name:"chevron-down",size:14})],10,tm)):Be("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(f)&&e.expandedMenus[f.key]?(ve(),pe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+f.key},[(ve(!0),pe(ot,null,Ct(f.subPages,o=>(ve(),pe("a",{key:o,class:rt(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(f,o)}]),href:"#"+f.key+"-"+o,"aria-current":e.isChildActive(f,o)?"page":null,onClick:jt(x=>e.navigate(f,o),["prevent"])},[be("span",nm,Le(e.subLabel(f,o)),1)],10,sm))),128))],8,am)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),be("div",lm,[be("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...n)=>e.toggleCollapse&&e.toggleCollapse(...n))},[nt(T,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,im)])],2)}const rm=Ma(Uv,[["render",om]]),cm={name:"qc-header",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=kt(!1),g=at(()=>a.currentUser&&a.currentUser.value||null),e=at(()=>a.navMode&&a.navMode.value||"subnav"),u=at(()=>{const se=a.currentPage&&a.currentPage.value,ke=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return!!(ke&&ke.subPages&&ke.subPages.length)}),m=at(()=>{const se=a.currentPage&&a.currentPage.value,ke=a.currentPageName&&a.currentPageName.value;if(ke)return ke;const Te=(a.menus&&a.menus.value||[]).find(ge=>ge.key===se);return Te&&Te.name||se||""}),T=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),r=kt(typeof window<"u"?window.innerWidth<768:!1);function n(){r.value=window.innerWidth<768}za(()=>window.addEventListener("resize",n)),us(()=>window.removeEventListener("resize",n));const f=kt(!1),o=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),x=at(()=>{const se=a.currentPage&&a.currentPage.value,ke=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return(ke&&ke.subPages||[]).map(Te=>({key:Te,label:a.subPageNames&&a.subPageNames[Te]||Te}))});function w(){f.value=!f.value}function E(){f.value=!1}function C(se){f.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const q=at(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),F=kt(!1),D=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],d=at(()=>{const se=D.find(ke=>ke.value===e.value);return se&&se.label||e.value});function i(){F.value=!F.value}function h(){F.value=!1}function V(se){F.value=!1,a.setNavMode&&a.setNavMode(se)}const W=at({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),S=kt(!1),O=kt([]),K=kt(!1),A=kt(!1);function L(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function H(){K.value=!0,A.value=!1;try{const ke=await(await fetch("/api/alerts/history?limit=8",{headers:L()})).json();ke&&ke.success?O.value=ke.history||[]:O.value=[]}catch{A.value=!0,O.value=[]}finally{K.value=!1}}function $(){S.value=!S.value,S.value&&H()}function Z(){S.value=!1}function le(){S.value=!1,a.activateTab&&a.activateTab("system","notification")}const te=kt(!1),R=a.themeHues||[45,220,0,140,270,320,-1],s=at(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),y=at(()=>a.themeMode&&a.themeMode.value||"system"),l=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],p=at(()=>a.density&&a.density.value||"comfortable");function X(se){a.changeDensity&&a.changeDensity(se)}function P(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const b={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function v(se){return a.hueName?a.hueName(se):b[se]||"自定义 "+se}function k(){te.value=!te.value}function c(){te.value=!1}function N(se){a.changeThemeMode&&a.changeThemeMode(se)}function oe(se){a.changeThemeHue&&a.changeThemeHue(se)}function J(){a.changeThemeMode&&a.changeThemeMode(q.value?"light":"dark")}function M(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function U(){t.value=!t.value}function ie(){t.value=!1}function fe(se){return()=>{ie(),se&&se()}}function Se(){ie(),a.handleLogout&&a.handleLogout()}const Y=at(()=>a.marketData&&a.marketData.value||{}),ce=kt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Y,bannerDismissed:ce,dismissBanner:()=>{ce.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:g,isDark:q,searchQuery:W,navMode:e,crumbRoot:m,crumbSub:T,hasToptabs:u,toggleThemeQuick:J,toggleSidebar:M,openUserMenu:U,closeUserMenu:ie,menuItem:fe,handleLogout:Se,openBellMenu:S,notifItems:O,notifLoading:K,notifError:A,toggleBell:$,closeBell:Z,goNotificationCenter:le,openThemeMenu:te,themeHues:R,themeHue:s,themeMode:y,hueColor:P,hueName:v,toggleThemeMenu:k,closeThemeMenu:c,pickThemeMode:N,pickThemeHue:oe,DENSITY_MODES:l,density:p,pickDensity:X,openNavModeMenu:F,NAV_MODES:D,navModeLabel:d,toggleNavModeMenu:i,closeNavModeMenu:h,pickNavMode:V,isMobile:r,openSubnavPicker:f,currentSubLabel:o,subnavOptions:x,toggleSubnavPicker:w,closeSubnavPicker:E,pickSubnav:C}}},dm={class:"qc-header-wrap"},um={key:0,class:"non-trading-banner",role:"status"},vm={class:"qc-header"},mm={class:"qc-header-left"},pm=["aria-label"],fm={key:0,class:"qc-header-subnav"},gm=["aria-expanded"],hm={class:"qc-subnav-picker-label"},ym={key:0,class:"qc-subnav-picker-menu",role:"menu"},bm=["onClick"],wm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},km={class:"qc-crumb qc-crumb-root"},_m={class:"qc-crumb qc-crumb-sub"},xm={key:1,class:"qc-crumb qc-crumb-root"},Sm={class:"qc-header-center"},Cm={key:0,class:"qc-search-sublabel"},qm={class:"qc-header-right"},Em={class:"qc-hdr-pop"},Mm=["aria-expanded"],Tm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Pm={key:0,class:"qc-bell-state"},Dm={key:1,class:"qc-bell-state"},Rm={key:2,class:"qc-bell-state"},zm={key:3,class:"qc-bell-list"},Am={class:"qc-bell-item-title"},Lm={class:"qc-bell-item-meta"},Im={key:0},Nm={class:"qc-bell-item-time"},Om={class:"qc-hdr-pop"},jm=["aria-expanded"],Vm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Fm={class:"qc-theme-modes"},Hm=["onClick"],Bm={class:"qc-theme-swatches"},Km=["title","aria-label","onClick"],Wm={key:0,class:"qc-theme-swatch-check"},Um={class:"qc-theme-custom-label"},Gm={class:"qc-theme-modes"},Ym=["onClick"],Jm={key:0,class:"qc-navmode-switch"},Qm=["aria-label","title","aria-expanded"],$m={key:0,class:"qc-navmode-menu",role:"menu"},Xm=["onClick","onKeydown"],Zm={class:"qc-navmode-item-main"},ep={class:"qc-user-menu"},tp=["aria-label","aria-expanded"],ap={key:0,class:"qc-user-dropdown",role:"menu"},sp={class:"qc-user-dropdown-header"},np={class:"qc-user-dropdown-name"},lp={key:0,class:"qc-user-dropdown-chip"};function ip(a,t,g,e,u,m){var x,w,E,C,q,F,D;const T=Vt("AppIcon"),r=Vt("qc-top-tabs"),n=Vt("el-autocomplete"),f=Vt("el-slider"),o=Id("click-outside");return ve(),pe("div",dm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ve(),pe("div",um,[nt(T,{name:"alert-triangle",size:14}),t[15]||(t[15]=be("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),be("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...d)=>e.dismissBanner&&e.dismissBanner(...d)),"aria-label":"关闭提示"},"×")])):Be("",!0),be("header",vm,[be("div",mm,[be("button",{class:"qc-icon-btn","aria-label":(x=e.state.sidebarCollapsed)!=null&&x.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...d)=>e.toggleSidebar&&e.toggleSidebar(...d))},[nt(T,{name:"menu",size:20})],8,pm),e.isMobile?ja((ve(),pe("div",fm,[be("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...d)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...d))},[be("span",hm,Le(e.currentSubLabel||"二级"),1),nt(T,{name:"chevron-down",size:14})],8,gm),e.openSubnavPicker?(ve(),pe("div",ym,[(ve(!0),pe(ot,null,Ct(e.subnavOptions,d=>(ve(),pe("div",{key:d.key,class:rt(["qc-subnav-picker-item",{"is-active":d.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>e.pickSubnav(d.key)},Le(d.label),11,bm))),128))])):Be("",!0)])),[[o,e.closeSubnavPicker]]):Be("",!0),e.navMode==="tree"&&!e.isMobile?(ve(),pe("div",wm,[be("span",km,Le(e.crumbRoot),1),e.crumbSub?(ve(),pe(ot,{key:0},[t[16]||(t[16]=be("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),be("span",_m,Le(e.crumbSub),1)],64)):Be("",!0)])):Be("",!0),e.navMode==="toptab"&&!e.isMobile?(ve(),pe(ot,{key:2},[e.hasToptabs?(ve(),ga(r,{key:0})):(ve(),pe("span",xm,Le(e.crumbRoot),1))],64)):Be("",!0)]),be("div",Sm,[nt(n,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=d=>e.searchQuery=d),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:ta(()=>[nt(T,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ta(()=>[...t[17]||(t[17]=[be("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ta(d=>{var i,h,V,W,S;return[be("span",null,Le((i=d==null?void 0:d.item)==null?void 0:i.icon)+" "+Le(((h=d==null?void 0:d.item)==null?void 0:h.label)||((V=d==null?void 0:d.item)==null?void 0:V.name)),1),(W=d==null?void 0:d.item)!=null&&W.subLabel?(ve(),pe("span",Cm,Le((S=d==null?void 0:d.item)==null?void 0:S.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),be("div",qm,[ja((ve(),pe("div",Em,[be("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...d)=>e.toggleBell&&e.toggleBell(...d))},[nt(T,{name:"bell",size:20})],8,Mm),e.openBellMenu?(ve(),pe("div",Tm,[t[18]||(t[18]=be("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ve(),pe("div",Pm,"加载中...")):e.notifError?(ve(),pe("div",Dm,"加载失败")):e.notifItems.length?(ve(),pe("div",zm,[(ve(!0),pe(ot,null,Ct(e.notifItems,(d,i)=>(ve(),pe("div",{key:d.id||i,class:rt(["qc-bell-item",{"is-fail":d.ok===0}])},[be("div",Am,Le(d.title||d.event_type||"事件"),1),be("div",Lm,[qa(Le(d.channel||""),1),d.recipient?(ve(),pe("span",Im," · "+Le(d.recipient),1)):Be("",!0),be("span",Nm,Le(d.created_at||""),1)])],2))),128))])):(ve(),pe("div",Rm,"暂无通知")),be("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...d)=>e.goNotificationCenter&&e.goNotificationCenter(...d))},"前往通知中心 →")])):Be("",!0)])),[[o,e.closeBell]]),ja((ve(),pe("div",Om,[be("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...d)=>e.toggleThemeMenu&&e.toggleThemeMenu(...d))},[nt(T,{name:"palette",size:20})],8,jm),e.openThemeMenu?(ve(),pe("div",Vm,[t[19]||(t[19]=be("div",{class:"qc-theme-section-label"},"外观模式",-1)),be("div",Fm,[(ve(),pe(ot,null,Ct([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],d=>be("button",{key:d.k,class:rt(["qc-theme-mode",{"is-active":e.themeMode===d.k}]),onClick:i=>e.pickThemeMode(d.k)},Le(d.n),11,Hm)),64))]),t[20]||(t[20]=be("div",{class:"qc-theme-section-label"},"主题色",-1)),be("div",Bm,[(ve(!0),pe(ot,null,Ct(e.themeHues,d=>(ve(),pe("button",{key:d,class:rt(["qc-theme-swatch",{"is-active":e.themeHue===d}]),style:Nd({background:e.hueColor(d)}),title:e.hueName(d),"aria-label":e.hueName(d),onClick:i=>e.pickThemeHue(d)},[e.themeHue===d?(ve(),pe("span",Wm,"✓")):Be("",!0)],14,Km))),128))]),nt(f,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),be("div",Um,"自定义 "+Le(e.themeHue)+"°",1),t[21]||(t[21]=be("div",{class:"qc-theme-section-label"},"信息密度",-1)),be("div",Gm,[(ve(!0),pe(ot,null,Ct(e.DENSITY_MODES,d=>(ve(),pe("button",{key:d.k,class:rt(["qc-theme-mode",{"is-active":e.density===d.k}]),onClick:i=>e.pickDensity(d.k)},Le(d.n),11,Ym))),128))])])):Be("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?Be("",!0):ja((ve(),pe("div",Jm,[be("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...d)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...d))},[nt(T,{name:"layers",size:20})],8,Qm),e.openNavModeMenu?(ve(),pe("div",$m,[(ve(!0),pe(ot,null,Ct(e.NAV_MODES,d=>(ve(),pe("div",{key:d.value,class:rt(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===d.value}]),role:"menuitem",tabindex:"0",onClick:i=>e.pickNavMode(d.value),onKeydown:[fa(jt(i=>e.pickNavMode(d.value),["prevent"]),["enter"]),fa(jt(i=>e.pickNavMode(d.value),["prevent"]),["space"])]},[be("div",Zm,[be("span",null,Le(d.label),1),e.navMode===d.value?(ve(),ga(T,{key:0,name:"check",size:14})):Be("",!0)])],42,Xm))),128))])):Be("",!0)])),[[o,e.closeNavModeMenu]]),ja((ve(),pe("div",ep,[be("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((w=e.currentUser)==null?void 0:w.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...d)=>e.openUserMenu&&e.openUserMenu(...d))},Le((((E=e.currentUser)==null?void 0:E.username)||"A").charAt(0).toUpperCase()),9,tp),e.showUserMenu?(ve(),pe("div",ap,[be("div",sp,[be("span",np,Le((C=e.currentUser)==null?void 0:C.username),1),((q=e.currentUser)==null?void 0:q.role)==="guest"?(ve(),pe("span",lp,"访客")):Be("",!0)]),((F=e.currentUser)==null?void 0:F.role)==="admin"?(ve(),pe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=d=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=fa(jt(d=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[nt(T,{name:"settings",size:16}),t[22]||(t[22]=qa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((D=e.currentUser)==null?void 0:D.role)!=="guest"?(ve(),pe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=d=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=fa(jt(d=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[nt(T,{name:"lock",size:16}),t[23]||(t[23]=qa(" 修改密码 ",-1))],32)):Be("",!0),t[25]||(t[25]=be("div",{class:"qc-user-dropdown-divider"},null,-1)),be("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...d)=>e.handleLogout&&e.handleLogout(...d)),onKeydown:t[14]||(t[14]=fa(jt((...d)=>e.handleLogout&&e.handleLogout(...d),["prevent"]),["enter"]))},[nt(T,{name:"log-out",size:16}),t[24]||(t[24]=qa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[o,e.closeUserMenu]])])])])}const op=Ma(cm,[["render",ip]]),rp=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],cp={name:"qc-subnav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),g=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),u=kt({}),m=at(()=>a.menus&&a.menus.value||[]),T=at(()=>m.value.find(D=>D.key===t.value)||null),r=at(()=>T.value&&T.value.subPages||[]),n=at(()=>a.currentPageName&&a.currentPageName.value||t.value),f=D=>a.subPageNames&&a.subPageNames[D]||D,o=D=>g.value===D;function x(D){a.openTab?a.openTab(t.value,D):a.currentSubPage&&(a.currentSubPage.value=D);try{localStorage.setItem("quant_last_subpage",D)}catch{}}function w(D){a.openTab?a.openTab(t.value,D.key):a.currentSubPage&&(a.currentSubPage.value=D.key);try{localStorage.setItem("quant_last_subpage",D.key)}catch{}}function E(D){u.value[D]=!u.value[D]}const C={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:g,navMode:e,subPages:r,currentMenu:T,collapsedGroups:u,pageTitle:n,subLabel:f,isSubActive:o,goSub:x,goSystemItem:w,toggleGroup:E,SYSTEM_GROUPS:rp,subIcon:(D,d)=>C[D]&&C[D][d]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},dp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},up={class:"qc-subnav-column-header"},vp={class:"qc-subnav-current-label"},mp={class:"qc-subnav-column-body"},pp=["onClick"],fp=["href","onClick"],gp={class:"qc-subnav-group-label"},hp=["href","onClick"],yp=["href","onClick"];function bp(a,t,g,e,u,m){const T=Vt("AppIcon");return e.navMode==="subnav"?(ve(),pe("aside",dp,[be("div",up,[be("span",vp,Le(e.pageTitle),1)]),be("div",mp,[e.currentPage==="system"?(ve(!0),pe(ot,{key:0},Ct(e.SYSTEM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[be("div",{class:"qc-subnav-group-label",onClick:n=>e.toggleGroup(r.label)},[be("span",null,Le(r.label),1),nt(T,{name:"chevron-down",size:12,class:rt({"is-open":!e.collapsedGroups[r.label]})},null,8,["class"])],8,pp),e.collapsedGroups[r.label]?Be("",!0):(ve(!0),pe(ot,{key:0},Ct(r.items,n=>(ve(),pe("a",{key:n.key,class:rt(["qc-subnav-item",{"is-active":e.isSubActive(n.key)}]),href:"#"+n.key,onClick:jt(f=>e.goSystemItem(n),["prevent"])},[nt(T,{name:n.icon,size:16},null,8,["name"]),be("span",null,Le(n.label),1)],10,fp))),128))]))),128)):e.currentPage==="shortterm"?(ve(!0),pe(ot,{key:1},Ct(e.SHORTTERM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[be("div",gp,[be("span",null,Le(r.label),1)]),(ve(!0),pe(ot,null,Ct(r.items,n=>(ve(),pe("a",{key:n,class:rt(["qc-subnav-item",{"is-active":e.isSubActive(n)}]),href:"#"+e.currentPage+"/"+n,onClick:jt(f=>e.goSub(n),["prevent"])},[nt(T,{name:e.subIcon(e.currentPage,n),size:16},null,8,["name"]),be("span",null,Le(e.subLabel(n)),1)],10,hp))),128))]))),128)):(ve(!0),pe(ot,{key:2},Ct(e.subPages,r=>(ve(),pe("a",{key:r,class:rt(["qc-subnav-item",{"is-active":e.isSubActive(r)}]),href:"#"+e.currentPage+"/"+r,onClick:jt(n=>e.goSub(r),["prevent"])},[nt(T,{name:e.subIcon(e.currentPage,r),size:16},null,8,["name"]),be("span",null,Le(e.subLabel(r)),1)],10,yp))),128))])])):Be("",!0)}const wp=Ma(cp,[["render",bp]]),kp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],_p={name:"qc-mobile-nav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=kt(!1),g=kt(null),e=kt({}),u=at(()=>a.menus&&a.menus.value||[]),m=at(()=>a.currentPage&&a.currentPage.value||""),T={research:"量化投研",platform:"平台管理"},r=["research","platform"];function n(d){return Array.isArray(d.subPages)&&d.subPages.length>0}function f(d){n(d)&&(e.value[d.key]=!e.value[d.key])}function o(d,i){return m.value===d.key&&a.currentSubPage&&a.currentSubPage.value===i}function x(d){return a.subPageNames&&a.subPageNames[d]||d}async function w(d){const i=u.value.find(V=>V.key===d.key),h=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(d.key,h):(a.currentPage.value=d.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(d.key,h)}function E(d,i){t.value=!1;const h=i||d.subPages&&d.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(d.key,h):(a.currentPage.value=d.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(d.key,h)}function C(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function q(){t.value=!1;const d=document.querySelector(".qc-header .qc-icon-btn");d&&d.focus()}function F(d){d.detail&&d.detail.open&&C()}function D(d){t.value&&d.key==="Escape"&&q()}return za(()=>{window.addEventListener("qc:drawer",F),document.addEventListener("keydown",D)}),us(()=>{window.removeEventListener("qc:drawer",F),document.removeEventListener("keydown",D)}),{state:a,TABS:kp,menus:u,currentPage:m,drawerOpen:t,drawerFocusRef:g,drawerExpanded:e,GROUP_LABELS:T,GROUPS:r,hasSub:n,toggleDrawerMenu:f,isDrawerSubActive:o,subLabel:x,goTab:w,goMenu:E,openDrawer:C,closeDrawer:q}}},xp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Sp=["aria-current","onClick"],Cp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},qp={class:"qc-drawer-header"},Ep={class:"qc-drawer-brand"},Mp={class:"qc-drawer-body"},Tp={key:0},Pp={class:"qc-nav-group-label"},Dp=["href","aria-current","onClick"],Rp={class:"qc-sidebar-label"},zp=["aria-expanded","onClick"],Ap={key:0,class:"qc-drawer-children"},Lp=["href","onClick"],Ip={class:"qc-drawer-footer"},Np=["title"];function Op(a,t,g,e,u,m){var r,n;const T=Vt("AppIcon");return ve(),pe(ot,null,[be("nav",xp,[(ve(!0),pe(ot,null,Ct(e.TABS,f=>(ve(),pe("button",{key:f.key,class:rt(["qc-mobile-tab",{"is-active":e.currentPage===f.key}]),"aria-current":e.currentPage===f.key?"page":null,onClick:o=>e.goTab(f)},[nt(T,{name:f.icon,size:22},null,8,["name"]),be("span",null,Le(f.label),1)],10,Sp))),128))]),(ve(),ga(Od,{to:"body"},[e.drawerOpen?(ve(),pe("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...f)=>e.closeDrawer&&e.closeDrawer(...f))})):Be("",!0),e.drawerOpen?(ve(),pe("div",Cp,[be("div",qp,[be("div",Ep,[t[4]||(t[4]=be("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[be("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),be("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),be("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),be("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),be("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),be("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),be("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),be("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),be("span",null,Le(e.state.t("login.title")),1)]),be("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...f)=>e.closeDrawer&&e.closeDrawer(...f))},[nt(T,{name:"x",size:18})])]),be("div",Mp,[(ve(!0),pe(ot,null,Ct(e.GROUPS,f=>(ve(),pe(ot,{key:f},[e.menus.some(o=>o.group===f)?(ve(),pe("div",Tp,[be("div",Pp,Le(e.GROUP_LABELS[f]),1),(ve(!0),pe(ot,null,Ct(e.menus.filter(o=>o.group===f),o=>(ve(),pe("div",{key:o.key,class:"qc-drawer-menu"},[be("div",{class:rt(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[be("a",{class:rt(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:jt(x=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[nt(T,{name:o.iconName||"",size:18},null,8,["name"]),be("span",Rp,Le(o.name),1)],10,Dp),e.hasSub(o)?(ve(),pe("button",{key:0,class:rt(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:x=>e.toggleDrawerMenu(o)},[nt(T,{name:"chevron-down",size:14})],10,zp)):Be("",!0)],2),e.drawerExpanded[o.key]?(ve(),pe("div",Ap,[(ve(!0),pe(ot,null,Ct(o.subPages,x=>(ve(),pe("a",{key:x,class:rt(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,x)}]),href:"#"+o.key+"/"+x,onClick:jt(w=>e.goMenu(o,x),["prevent"])},[be("span",null,Le(e.subLabel(x)),1)],10,Lp))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),be("div",Ip,[be("button",{class:"qc-icon-btn",title:((r=e.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=f=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[nt(T,{name:((n=e.state.currentTheme)==null?void 0:n.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Np),be("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=f=>e.state.handleLogout&&e.state.handleLogout())},[nt(T,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const jp=Ma(_p,[["render",Op]]),Vp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:g}){const e=Ra("qcState");function u(o){t("select",o)}function m(o){const x=o.strategy_names||o.strategies||[],w=x.slice(0,3),E=x.length>3?x.length-3:0,C=w.map(q=>({text:q,more:!1}));return E&&C.push({text:"+"+E,more:!0}),C}function T(o){const x=Number(o);return isFinite(x)?x.toFixed(2):"—"}function r(o){const x=Number(o);return isFinite(x)?(x>0?"+":"")+x.toFixed(2)+"%":"—"}function n(o){const x=Number(o.consensus_level);return isFinite(x)?Math.round(x*100):0}function f(o){const x=Number(o&&o.consensus_level);return isFinite(x)&&x>0}return{state:e,slots:g,select:u,displayTags:m,fmtPrice:T,fmtChange:r,pctOf:n,hasConsensus:f}}},Fp={class:"qc-stock-list"},Hp=["data-copy-code","aria-label","onClick","onKeydown"],Bp={key:0,class:"qc-stock-rank"},Kp={class:"qc-stock-info"},Wp={class:"qc-stock-code"},Up={class:"qc-stock-code-num"},Gp={key:0,class:"qc-stock-status is-new"},Yp={key:1,class:"qc-stock-status is-out"},Jp={class:"qc-stock-name"},Qp={key:0,class:"qc-stock-consensus"},$p={key:1,class:"qc-stock-tags"},Xp={key:2,class:"qc-stock-badge"},Zp={key:3,class:"qc-stock-data"},ef={class:"qc-stock-price"},tf={key:4,class:"qc-stock-extra"},af={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},sf=["data-copy-code","aria-label","onClick","onKeydown"],nf={key:0,class:"qc-stock-rank"},lf={class:"qc-stock-info"},of={class:"qc-stock-code"},rf={class:"qc-stock-code-num"},cf={key:0,class:"qc-stock-status is-new"},df={key:1,class:"qc-stock-status is-out"},uf={class:"qc-stock-name"},vf={key:0,class:"qc-stock-consensus"},mf={key:1,class:"qc-stock-tags"},pf={key:2,class:"qc-stock-badge"},ff={key:3,class:"qc-stock-data"},gf={class:"qc-stock-price"},hf={key:4,class:"qc-stock-extra"},yf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function bf(a,t,g,e,u,m){const T=Vt("qc-state-panel"),r=Vt("qc-virtual-list");return ve(),pe("div",Fp,[g.loading?(ve(),ga(T,{key:0,type:"loading"})):g.items.length?(ve(),pe(ot,{key:2},[g.virtual?(ve(),ga(r,{key:0,items:g.items,"row-height":g.rowHeight},{default:ta(({item:n,index:f})=>[be("div",{class:rt(["qc-stock-row",{"is-active":g.activeCode===n.code}]),"data-copy-code":g.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>e.select(n),onKeydown:[fa(jt(o=>e.select(n),["prevent"]),["enter"]),fa(jt(o=>e.select(n),["prevent"]),["space"])]},[g.showRank?(ve(),pe("div",Bp,Le(f+1),1)):Be("",!0),be("div",Kp,[be("div",Wp,[be("span",Up,Le(n.code),1),n.status==="new"?(ve(),pe("span",Gp,Le(g.statusText.new),1)):n.status==="out"?(ve(),pe("span",Yp,Le(g.statusText.out),1)):Be("",!0)]),be("div",Jp,[qa(Le(n.name)+" ",1),oa(a.$slots,"name-suffix",{item:n,index:f})]),g.showConsensus&&e.hasConsensus(n)?(ve(),pe("span",Qp,Le(e.pctOf(n))+"% 共识",1)):Be("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",$p,[(ve(!0),pe(ot,null,Ct(e.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:rt(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Be("",!0),g.showConsensus?(ve(),pe("span",Xp,Le(n.strategy_count||0)+" 策略",1)):Be("",!0),g.showPrice&&n.price!=null?(ve(),pe("div",Zp,[be("span",ef,Le(e.fmtPrice(n.price)),1),be("span",{class:rt(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(e.fmtChange(n.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),pe("div",tf,[oa(a.$slots,"extra",{item:n,index:f})])):Be("",!0),e.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:n,index:f})])):Be("",!0),e.slots.footer?(ve(),pe("div",af,[oa(a.$slots,"footer",{item:n,index:f})])):Be("",!0)],42,Hp)]),_:3},8,["items","row-height"])):(ve(!0),pe(ot,{key:1},Ct(g.items,(n,f)=>(ve(),pe("div",{key:n.code,class:rt(["qc-stock-row",{"is-active":g.activeCode===n.code}]),"data-copy-code":g.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>e.select(n),onKeydown:[fa(jt(o=>e.select(n),["prevent"]),["enter"]),fa(jt(o=>e.select(n),["prevent"]),["space"])]},[g.showRank?(ve(),pe("div",nf,Le(f+1),1)):Be("",!0),be("div",lf,[be("div",of,[be("span",rf,Le(n.code),1),n.status==="new"?(ve(),pe("span",cf,Le(g.statusText.new),1)):n.status==="out"?(ve(),pe("span",df,Le(g.statusText.out),1)):Be("",!0)]),be("div",uf,[qa(Le(n.name)+" ",1),oa(a.$slots,"name-suffix",{item:n,index:f})]),g.showConsensus&&e.hasConsensus(n)?(ve(),pe("span",vf,Le(e.pctOf(n))+"% 共识",1)):Be("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",mf,[(ve(!0),pe(ot,null,Ct(e.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:rt(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Be("",!0),g.showConsensus?(ve(),pe("span",pf,Le(n.strategy_count||0)+" 策略",1)):Be("",!0),g.showPrice&&n.price!=null?(ve(),pe("div",ff,[be("span",gf,Le(e.fmtPrice(n.price)),1),be("span",{class:rt(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(e.fmtChange(n.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),pe("div",hf,[oa(a.$slots,"extra",{item:n,index:f})])):Be("",!0),e.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:n,index:f})])):Be("",!0),e.slots.footer?(ve(),pe("div",yf,[oa(a.$slots,"footer",{item:n,index:f})])):Be("",!0)],42,sf))),128))],64)):(ve(),ga(T,{key:1,type:"empty",title:g.emptyText},null,8,["title"]))])}const wf=Ma(Vp,[["render",bf]]),kf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},_f={key:0,class:"split-divider","data-split-resize":""};function xf(a,t,g,e,u,m){return ve(),pe("div",{class:rt(["detail-split-wrap",[g.rootClass,{"detail-split":g.enabled}]]),"data-split-root":""},[be("div",{class:rt(["detail-split-list",[g.listClass,{"w-100":!g.enabled}]])},[oa(a.$slots,"list")],2),g.enabled?(ve(),pe("div",_f)):Be("",!0),g.enabled?(ve(),pe("div",{key:1,class:rt(["detail-split-pane",g.paneClass])},[oa(a.$slots,"pane")],2)):Be("",!0)],2)}const Sf=Ma(kf,[["render",xf]]),mn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},Cf=200,qf={name:"qc-top-tabs",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),g=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.menus&&a.menus.value||[]),u=at(()=>{const i=e.value.find(h=>h.key===t.value);return i&&i.subPages||[]}),m=at(()=>u.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:mn[t.value]&&mn[t.value][i]||"circle-dot"}))),T=kt(null),r=kt(!1),n=kt(!1),f=kt(!1);let o=null,x=null;function w(){const i=T.value;i&&(n.value=i.scrollLeft>2,f.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function E(){const i=T.value;i&&(r.value=i.scrollWidth>i.clientWidth+2,w())}function C(i){const h=T.value;h&&h.scrollBy({left:i*Cf,behavior:"smooth"})}function q(i){a.openTab?a.openTab(t.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function F(i){q(i),Vd(()=>{const h=T.value;if(!h)return;const V=h.querySelector('[data-tab-key="'+i+'"]');V&&V.scrollIntoView({block:"nearest",inline:"nearest"})})}const D=at(()=>{if(!r.value)return[];const i=T.value;if(!i)return[];const h=i.getBoundingClientRect(),V=new Set;return i.querySelectorAll(".qc-top-tab").forEach(W=>{const S=W.getBoundingClientRect();S.left>=h.left-2&&S.left<h.right-24&&V.add(W.getAttribute("data-tab-key"))}),m.value.filter(W=>!V.has(W.key))});function d(i,h){i.key==="ArrowLeft"?(i.preventDefault(),C(-1)):i.key==="ArrowRight"?(i.preventDefault(),C(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),q(h.key))}return za(()=>{E(),o=new ResizeObserver(()=>{clearTimeout(x),x=setTimeout(E,100)}),T.value&&o.observe(T.value),window.addEventListener("resize",E)}),jd(()=>{o&&o.disconnect(),window.removeEventListener("resize",E),clearTimeout(x)}),{state:a,tabs:m,currentSubPage:g,go:q,scrollRef:T,hasOverflow:r,canScrollLeft:n,canScrollRight:f,scrollByStep:C,scrollToTab:F,hiddenTabs:D,onTabKeydown:d,updateScrollState:w}}},Ef={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Mf=["disabled"],Tf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Pf={class:"qc-top-tab-label"},Df=["disabled"];function Rf(a,t,g,e,u,m){const T=Vt("AppIcon"),r=Vt("el-dropdown-item"),n=Vt("el-dropdown-menu"),f=Vt("el-dropdown");return e.tabs.length?(ve(),pe("div",Ef,[e.hasOverflow?(ve(),pe("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,Mf)):Be("",!0),be("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(ve(!0),pe(ot,null,Ct(e.tabs,o=>(ve(),pe("div",{key:o.key,"data-tab-key":o.key,class:rt(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:x=>e.go(o.key),onKeydown:x=>e.onTabKeydown(x,o)},[nt(T,{name:o.icon,size:14},null,8,["name"]),be("span",Pf,Le(o.label),1)],42,Tf))),128))],544),e.hasOverflow?(ve(),pe("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Df)):Be("",!0),e.hasOverflow&&e.hiddenTabs.length?(ve(),ga(f,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:ta(()=>[nt(n,null,{default:ta(()=>[(ve(!0),pe(ot,null,Ct(e.hiddenTabs,o=>(ve(),ga(r,{key:o.key,command:o.key,class:rt({"is-active":e.currentSubPage===o.key})},{default:ta(()=>[nt(T,{name:o.icon,size:14},null,8,["name"]),qa(" "+Le(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ta(()=>[t[3]||(t[3]=be("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const zf=Ma(qf,[["render",Rf]]),Af=["title"],Lf={class:"qc-glossary-trigger",role:"button",tabindex:"0","aria-label":"术语解释"},If={class:"qc-glossary-card"},Nf={class:"qc-glossary-head"},Of={class:"qc-glossary-term"},jf={class:"qc-glossary-cat"},Vf={class:"qc-glossary-row"},Ff={class:"qc-glossary-label"},Hf={class:"qc-glossary-text"},Bf={class:"qc-glossary-row"},Kf={class:"qc-glossary-label"},Wf={class:"qc-glossary-text"},Uf={class:"qc-glossary-foot"},pn={__name:"GlossaryHint",props:{gkey:{type:String,required:!0},size:{type:[Number,String],default:14}},setup(a){const t=a;let g=null;function e(){return g||(g=fetch("/api/meta/glossary").then(n=>n.ok?n.json():null).then(n=>n&&n.success?n.items:null).catch(()=>null)),g}const u=kt(!0),m=kt(null);za(async()=>{const n=await e();if(n){const f=n.find(o=>o.key===t.gkey);f&&(m.value=f,u.value=!1)}});function T(){window.__quantGoPage?window.__quantGoPage("system","glossary"):window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value="system",window.__quantState.currentSubPage.value="glossary")}const r=at(()=>!u.value&&!!m.value);return(n,f)=>{const o=Vt("qc-icon"),x=Vt("el-popover");return r.value?(ve(),pe("span",{key:0,class:"qc-glossary-hint",title:m.value.term},[nt(x,{placement:"bottom-start",width:340,trigger:"hover","popper-class":"qc-glossary-pop"},{reference:ta(()=>[be("span",Lf,[nt(o,{name:"help-circle",size:a.size},null,8,["size"])])]),default:ta(()=>[be("div",If,[be("div",Nf,[be("span",Of,Le(n.t("glossary.term."+m.value.key)),1),be("span",jf,Le(n.t("glossary.cat."+m.value.category)),1)]),be("div",Vf,[be("span",Ff,Le(n.t("glossary.definition")),1),be("span",Hf,Le(m.value.definition),1)]),be("div",Bf,[be("span",Kf,Le(n.t("glossary.calc")),1),be("span",Wf,Le(m.value.calc),1)]),be("div",Uf,[be("span",{class:"qc-glossary-link",onClick:T},Le(n.t("glossary.title"))+" →",1)])])]),_:1})],8,Af)):Be("",!0)}}},Gf={class:"card qc-glossary-page"},Yf={class:"card-title flex-between"},Jf={class:"qc-glossary-tabs",role:"tablist"},Qf=["onClick"],$f={key:0,class:"qc-glossary-loading"},Xf={key:1,class:"qc-glossary-empty"},Zf={key:2,class:"qc-glossary-list"},eg={class:"qc-glossary-item-head"},tg={class:"qc-glossary-term"},ag={class:"qc-glossary-cat"},sg={class:"qc-glossary-item-def"},ng={class:"qc-glossary-item-calc"},lg={class:"qc-glossary-label"},fn={__name:"GlossaryPage",setup(a){const t=kt([]),g=kt([]),e=kt("all"),u=kt(""),m=kt(!0);za(async()=>{try{const f=await(await fetch("/api/meta/glossary")).json();f&&f.success&&(t.value=f.items||[],g.value=f.categories||[])}catch{}finally{m.value=!1}});const T=at(()=>{let n=t.value;e.value!=="all"&&(n=n.filter(o=>o.category===e.value));const f=(u.value||"").trim().toLowerCase();return f&&(n=n.filter(o=>(o.term||"").toLowerCase().includes(f)||(o.definition||"").toLowerCase().includes(f))),n}),r=["宏观","策略","因子","技术","短线","数据源","产品"];return(n,f)=>{const o=Vt("qc-icon"),x=Vt("el-input");return ve(),pe("div",Gf,[be("div",Yf,[be("span",null,Le(n.t("glossary.title")),1),nt(x,{modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=w=>u.value=w),class:"qc-glossary-search",placeholder:n.t("glossary.search"),clearable:"",size:"small"},{prefix:ta(()=>[nt(o,{name:"search",size:14})]),_:1},8,["modelValue","placeholder"])]),be("div",Jf,[(ve(!0),pe(ot,null,Ct(["all"].concat(r),w=>(ve(),pe("span",{key:w,class:rt(["qc-glossary-tab",{"is-active":e.value===w}]),role:"tab",onClick:E=>e.value=w},Le(w==="all"?n.t("glossary.title"):n.t("glossary.cat."+w)),11,Qf))),128))]),m.value?(ve(),pe("div",$f,Le(n.t("common.loading")),1)):T.value.length?(ve(),pe("div",Zf,[(ve(!0),pe(ot,null,Ct(T.value,w=>(ve(),pe("div",{key:w.key,class:"qc-glossary-item"},[be("div",eg,[be("span",tg,Le(n.t("glossary.term."+w.key)),1),be("span",ag,Le(n.t("glossary.cat."+w.category)),1)]),be("div",sg,Le(w.definition),1),be("div",ng,[be("span",lg,Le(n.t("glossary.calc"))+":",1),be("span",null,Le(w.calc),1)])]))),128))])):(ve(),pe("div",Xf,Le(n.t("glossary.empty")),1))])}}};(function(){const{ref:a,computed:t,inject:g}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
      <div class="global-header-root">
        <!-- v5.18 (F1): 非交易日全局提示条 -->
        <div v-if="true" class="non-trading-banner" role="status">
          <qc-icon name="alert-triangle" :size="14" />
          <span>今日非交易日 · 展示最近交易日 {{ marketData.date }} 数据</span>
          <button class="non-trading-banner-close" @click="dismissBanner" aria-label="关闭提示">×</button>
        </div>
        <div class="global-header">
          <div class="sub-nav-wrapper">
            <template v-for="menu in menus" :key="menu.key">
              <template v-if="currentPage === menu.key">
                <div v-for="sp in menu.subPages" :key="sp"
                     class="sub-nav-tab" :class="{active: currentSubPage === sp}"
                     @click="currentSubPage = sp" tabindex="0" role="tab"
                     :aria-selected="currentSubPage === sp"
                     @keydown.enter.prevent="currentSubPage = sp" @keydown.space.prevent="keyClick($event)">
                  {{ subTabLabel(menu, sp) }}
                </div>
              </template>
            </template>
          </div>

          <div class="global-search-wrapper">
            <el-autocomplete class="w-200" v-model="searchQuery" :fetch-suggestions="searchStocks" :placeholder="t('common.searchPlaceholder')" :trigger-on-focus="false" clearable size="small" @select="onSearchSelect">
              <template #default="slotProps">
                <!-- V6.7.1 (F-6.7.10): 建议图标经 <qc-icon> 渲染 Lucide, 不再输出 emoji/文本 -->
                <qc-icon v-if="slotProps?.item?.iconName" :name="slotProps?.item?.iconName" :size="14" />
                <span>{{ slotProps?.item?.label || slotProps?.item?.name }}</span>
                <span class="text-sm-secondary-ml8" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
              </template>
            </el-autocomplete>
          </div>

          <div class="header-date-area" v-if="currentPage === 'calendar'">
            <!-- V6.6.1 (PRD F-6.6.7): 日期选择器类型改由 currentView 驱动 (4 视图已合并为单子页) -->
            <el-date-picker v-if="currentView === 'day'"
                v-model="selectedDate" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectDate')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'week'"
                v-model="selectedDate" type="week" format="YYYY 第w周" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectWeek')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'month'"
                v-model="selectedDate" type="month" format="YYYY-MM" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectMonth')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'year'"
                v-model="selectedDate" type="year" format="YYYY" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectYear')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-button class="ml-8px" size="small" @click="refreshCalendarData" :loading="loading" :title="t('calendar.refreshData')"><qc-icon name="refresh" :size="14" /> {{ t('common.refresh') }}</el-button>
            <el-button class="ml-4px" size="small" @click="exportCSV" :title="t('calendar.exportCsv')"><qc-icon name="download" :size="14" /> {{ t('common.export') }}</el-button>
            <span class="text-sm-tertiary-ml6-nowrap" v-if="lastLoadTime">{{ lastLoadTime }}</span>
          </div>

          <div class="user-menu-wrapper" @click="showUserMenu = !showUserMenu" tabindex="0" role="button"
               aria-haspopup="menu" :aria-expanded="showUserMenu" aria-label="用户菜单"
               @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"
               @keydown.esc.prevent="showUserMenu = false"
               v-click-outside="() => showUserMenu = false">
            <div class="user-menu-avatar">{{ currentUser?.username?.charAt(0)?.toUpperCase() }}</div>
            <span class="user-menu-name">{{ currentUser?.username }}</span>
            <span class="info-chip-xs" v-if="currentUser?.role === 'guest'">访客</span>
            <span class="text-xs-tertiary">▼</span>
            <div class="user-menu-dropdown" v-if="showUserMenu" @click.stop role="menu">
              <div class="user-menu-item" v-if="currentUser?.role === 'admin'" tabindex="0" role="menuitem" @click="showUserMenu = false; resetSetupWizard()" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="settings" :size="14" /> 重新运行初始化向导</div>
              <div class="user-menu-item" v-if="currentUser?.role !== 'guest'" tabindex="0" role="menuitem" @click="showUserMenu = false; showChangePassword = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="key" :size="14" /> 修改密码</div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-section-title"><qc-icon name="palette" :size="14" /> 切换主题</div>
              <div v-for="(theme, key) in themes" :key="key" class="user-menu-item theme-item-row"
                   :class="{'theme-active': currentTheme === key}" tabindex="0"
                   role="menuitemradio" :aria-checked="currentTheme === key"
                   @click="changeTheme(key); showUserMenu = false"
                   @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                <span class="theme-dot" :style="{background: theme.gradient}"></span>
                <span>{{ theme.name }}</span>
                <span v-if="currentTheme === key" class="theme-check">✓</span>
              </div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-item danger" tabindex="0" role="menuitem" @click="handleLogout" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="log-out" :size="14" /> 退出登录</div>
            </div>
          </div>
        </div>

      </div>
    `,setup(){const e=g("qcState");if(!e)return{};const u=a(!1),m=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),T=()=>{m.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=t(()=>e.marketData&&e.marketData.value||{}),n=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:r,bannerDismissed:m,dismissBanner:T,goMerrill:n,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:u,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(f,o){const x="sub."+f.key+"."+o,w=e.t(x);if(w!==x)return w;const E="sub."+o,C=e.t(E);return C!==E&&C?C:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
                <div v-if="currentPage === 'calendar'" key="calendar" data-cal-root @touchstart="onCalTouchStart" @touchend="onCalTouchEnd">

                    <!-- v3.17.8 (FR-3.17.8): 下拉刷新指示器（页面顶部下拉时显示） -->
                    <div class="pull-refresh-indicator" :class="{'is-active': pullRefreshing}">
                        <span class="pull-refresh-spinner"></span>
                        <span>{{ t('common.refreshing') }}</span>
                    </div>

                    <!-- 日/周/月/年视图 -->
                    <template v-if="currentSubPage !== 'pool'">
                        <!-- V6.1 (PRD-6.1 F3): 日历操作区 — 工作区内容顶部工具栏 (原 SubNav 顶部 Tab 形态迁出) -->
                        <div class="qc-page-tools">
                            <!-- V6.9.3 (F7): 三段重排 — 视图切换器最左, 日期/刷新/导出居中, 上一/下一最右 -->
                            <div class="flex-c-gap-6" role="tablist" aria-label="视图切换">
                                <el-button v-for="v in ['day','week','month','year']" :key="v" size="small"
                                    :type="currentView === v ? 'primary' : ''"
                                    @click="switchViewLocal(v)">{{ viewLabel(v) }}</el-button>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-if="calType === 'date'" v-model="selectedDate" type="date"
                                    format="YYYY-MM-DD" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectDate')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else-if="calType === 'week'" v-model="selectedDate" type="week"
                                    format="YYYY 第w周" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectWeek')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else-if="calType === 'month'" v-model="selectedDate" type="month"
                                    format="YYYY-MM" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectMonth')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else v-model="selectedDate" type="year"
                                    format="YYYY" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectYear')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-button size="small" :loading="loading" :title="t('calendar.refreshData')" @click="refreshCalendarData">
                                    <span aria-hidden="true"><qc-icon name="refresh" :size="14" /></span> {{ t('common.refresh') }}
                                </el-button>
                                <el-button size="small" :title="t('calendar.exportCsv')" @click="exportCSV">
                                    <span aria-hidden="true"><qc-icon name="download" :size="14" /></span> {{ t('common.export') }}
                                </el-button>
                                <span class="qc-subnav-lastload" v-if="lastLoadTime">{{ lastLoadTime }}</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« {{ t('calendar.prev') }}{{ viewUnit }}</el-button>
                                <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">{{ t('calendar.next') }}{{ viewUnit }} »</el-button>
                                <el-button v-if="['day','week'].includes(currentView)" size="small" type="primary" plain @click="openStrategyCompare">{{ t('calendar.strategyCompare') }}</el-button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">
                                <qc-icon name="gem" :size="16" /> {{ t('calendar.poolTitle') }}
                                <!-- V5.25: 对比基准/沿用持仓提示(来自 /api/view note) 并入标题行 — 原先独占一行, 信息密度低 -->
                                <span v-if="viewNote" class="cal-view-note" role="status">{{ viewNote }}</span>
                            </div>

                            <!-- V5.16.1: 四大池标签横跨双栏顶部公用空间 (全部/新入池/当前持仓/已出池) —
                                 移出中栏列表, 置于中栏+右栏详情之上 -->
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="file-text" :size="14" /> {{ t('calendar.all') }} <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="badge-check" :size="14" /> {{ t('calendar.newPool') }} <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="pin" :size="14" /> {{ t('calendar.currentHold') }} <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="upload" :size="14" /> {{ t('calendar.outPool') }} <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <!-- V5.16 (F1): 股票池 中栏+右栏详情工作区 (弹窗模式时仅中栏全宽, 面板不渲染) -->
                            <qc-detail-split :enabled="detailSplitEnabled" root-class="stock-pool-body">
                            <template #list>
                            <div class="search-box">
                                <el-input class="w-100" v-model="searchKeyword" :placeholder="t('common.searchPlaceholder')" clearable/>
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- V6.9.3 (F1.4): 统一 StockList 组件 (虚拟滚动 + name-suffix 图标 + footer 信号行) -->
                                <qc-stock-list
                                  class="h-calc-250"
                                  :items="stockPool"
                                  :virtual="true"
                                  :row-height="78"
                                  :copy-code="true"
                                  show-rank
                                  :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                                  @select="(item) => showStockDetail(item.code)"
                                >
                                  <template #name-suffix="{ item }">
                                    <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" :title="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                                    <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span>
                                    <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                  </template>
                                  <!-- v3.7.11: AI入池信号解读（整行占位, V6.9.3 经 footer 插槽渲染） -->
                                  <template #footer="{ item }">
                                    <span v-if="poolSignals[item.code]"><qc-icon name="bot" :size="14" /> {{ poolSignals[item.code] }}</span>
                                  </template>
                                </qc-stock-list>
                            </div>
                            </template>
                            <template #pane>
                                <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                            </template>
                            </qc-detail-split>
                        </div>
                    </template>

                    <!-- 股票池管理视图 -->
                    <template v-else>
                        <div class="card">
                            <div class="card-title"><qc-icon name="gem" :size="16" /> {{ t('calendar.poolManage') }}</div>
                            <div class="flex-gap-12-mb16-wrap">
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl">{{ statusCounts.all }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.totalStocks') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-success">{{ statusCounts.newCount }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.newPool') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-primary">{{ statusCounts.current }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.currentHold') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-danger">{{ statusCounts.out }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.outPool') }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-title"><qc-icon name="file-text" :size="16" /> {{ t('calendar.strategyDist') }}</div>
                            <qc-state-panel v-if="strategyDistribution.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            <div v-else>
                                <div class="cal-note-box" v-for="item in strategyDistribution" :key="item.strategy">
                                    <div class="flex-c-gap-8-mb8">
                                        <span class="text-base-semibold">{{ item.strategy }}</span>
                                        <span class="cal-count-badge">{{ item.count }}</span>
                                    </div>
                                    <div class="flex-wrap-gap-6">
                                        <template v-for="(stock, si) in item.names" :key="stock.code">
                                            <span class="inline-tag" v-if="si < 5 || expandedStrategies[item.strategy]" :title="stock.code + ' ' + stock.name">
                                                <span class="text-semibold-primary">{{ stock.code }}</span>
                                                <span class="color-tertiary">{{ stock.name }}</span>
                                                <span class="gold-link watch-star" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?t('calendar.unwatch'):t('calendar.watch')"><qc-icon name="star" :size="13" :class="watchlistCodes.has(stock.code) ? 'is-watched' : ''" /></span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                            </span>
                                        </template>
                                        <span class="text-xs-tag-tertiary" v-if="item.names.length> 5 && !expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="false" @click="expandedStrategies[item.strategy] = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            +{{ item.names.length - 5 }}{{ t('common.unitStock') }} {{ t('calendar.expand') }} <qc-icon name="chevron-down" :size="12" />
                                        </span>
                                        <span class="text-xs-tag-primary" v-if="item.names.length> 5 && expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="true" @click="expandedStrategies[item.strategy] = false" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            {{ t('calendar.collapse') }} <qc-icon name="chevron-up" :size="12" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>


                <!-- V5.3.14 (T-SP.P0.1): 多策略并集/交集对比弹窗 -->
                <el-dialog v-model="compareVisible" :title="t('calendar.strategyCompare')" width="760px" top="8vh">
                    <div v-if="compareLoading" style="padding:24px;text-align:center;">{{ t('common.loading') }}</div>
                    <div v-else-if="compareError" class="cal-compare-error">{{ compareError }}</div>
                    <div v-else-if="compareData && compareData.comparison">
                        <div v-if="compareData.comparison.all_intersection && compareData.comparison.all_intersection.length" class="cal-compare-section">
                            <div class="cal-compare-title">{{ t('calendar.allIntersection') }} ({{ compareData.comparison.all_intersection.length }})</div>
                            <div class="cal-compare-codes">{{ compareData.comparison.all_intersection.join(', ') }}</div>
                        </div>
                        <div v-else class="cal-compare-section">
                            <div class="cal-compare-title">{{ t('calendar.allIntersection') }} (0)</div>
                            <div class="cal-compare-codes">{{ t('calendar.noCommon') }}</div>
                        </div>
                        <el-table :data="comparePairs" size="small" max-height="380" border>
                            <el-table-column prop="label" :label="t('calendar.pair')" min-width="170" />
                            <el-table-column prop="interCount" :label="t('calendar.intersection')" min-width="90" />
                            <el-table-column prop="inter" :label="t('calendar.intersectionCodes')" min-width="160" show-overflow-tooltip />
                            <el-table-column prop="onlyS1Count" :label="t('calendar.onlyFirst')" min-width="90" />
                            <el-table-column prop="onlyS1" :label="t('calendar.onlyFirstCodes')" min-width="140" show-overflow-tooltip />
                            <el-table-column prop="onlyS2Count" :label="t('calendar.onlySecond')" min-width="90" />
                            <el-table-column prop="onlyS2" :label="t('calendar.onlySecondCodes')" min-width="140" show-overflow-tooltip />
                        </el-table>
                    </div>
                    <div v-else style="padding:12px;">{{ t('calendar.noCompareData') }}</div>
                </el-dialog>
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:g,computed:e}=Vue,u=g(0),m=g(0),T=g(!1),r=e(()=>{const S={day:"date",week:"week",month:"month",year:"year"},O=t.currentView&&t.currentView.value||"day";return S[O]||"date"}),n={day:"日",week:"周",month:"月",year:"年"};function f(S){return t.t&&t.t("view."+S)||n[S]||S}function o(S){t.switchView?t.switchView(S):t.currentView&&(t.currentView.value=S)}let x=null;function w(S){const O=S.touches&&S.touches[0];O&&(u.value=O.clientX,m.value=O.clientY)}async function E(){if(!T.value){T.value=!0;try{await t.refreshCalendarData()}catch{}x&&clearTimeout(x),x=setTimeout(()=>{T.value=!1},500)}}function C(S){if(!(window.innerWidth<=768))return;const O=S.changedTouches&&S.changedTouches[0];if(!O)return;const K=window.__quantModules&&window.__quantModules.gestures||{};if((typeof K.judgePullToRefresh=="function"?K.judgePullToRefresh(m.value,O.clientY):O.clientY-m.value>=60)&&(window.scrollY||0)<=0){S.stopPropagation(),E();return}if(t.currentSubPage.value==="pool")return;const L=O.clientX-u.value,H=O.clientY-m.value;Math.abs(L)>50&&Math.abs(L)>Math.abs(H)*1.2&&(t.navigateDate(L<0?1:-1),S.stopPropagation())}const q=g(!1),F=g(!1),D=g(""),d=g(null),i=g([]);function h(S){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[S]||S}async function V(){if(t.selectedDate.value){q.value=!0,F.value=!0,D.value="",d.value=null,i.value=[];try{const S=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),O=await S.json();if(!S.ok)throw new Error(O.detail||"HTTP "+S.status);d.value=O;const K=O&&O.comparison||{},A=[];for(const L of Object.keys(K)){if(L==="all_intersection")continue;const H=K[L]||{},$=L.split("_vs_");A.push({label:h($[0])+" ↔ "+h($[1]),interCount:H.intersection_count||0,inter:(H.intersection||[]).join(", "),onlyS1Count:H.only_s1_count||0,onlyS1:(H.only_s1||[]).join(", "),onlyS2Count:H.only_s2_count||0,onlyS2:(H.only_s2||[]).join(", ")})}i.value=A}catch(S){D.value=String(S&&S.message?S.message:S)}finally{F.value=!1}}}let W="";return Vue.watch(()=>{const S=t.stockPool,O=S&&S.value||[];return{n:O.length,first:O[0]&&O[0].code,split:!!t.detailSplitEnabled.value}},(S,O)=>{if(!S.split||!S.first||S.n===0)return;const K=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,A=(t.stockPool.value||[]).some(L=>L.code===K);if(!K||!A){if(W===S.first&&K&&A===!1&&S.n>1)return;W=S.first,t.showStockDetail&&t.showStockDetail(S.first)}},{immediate:!0}),{...t,calType:r,pullRefreshing:T,onCalTouchStart:w,onCalTouchEnd:C,viewLabel:f,switchViewLocal:o,compareVisible:q,compareLoading:F,compareError:D,compareData:d,comparePairs:i,openStrategyCompare:V}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <!-- V6.11 (用户需求1): 移除「回测工作台」快捷按钮及所在整行 —— 入口保留在
                             策略研究 → 回测 (侧栏/顶部页签可达); 交易日信息由下方 today-hero 头部显示。 -->

                    <!-- v3.11 (FR-3.11.7): 今日一屏 — 聚合当日决策要素（美林/情绪/池变动/健康/重点） -->
                    <div v-if="!(loading && loadingView === 'overview')" class="today-hero card">
                        <div class="today-hero-head">
                            <div class="today-hero-title">{{ t('strategies.todayScreen') }} <qc-glossary-hint gkey="merrill_clock" :size="14" /></div>
                            <div class="today-hero-date">
                                <span>{{ todayText }}</span>
                                <span class="today-hero-status">{{ tradingStatus }}</span>
                            </div>
                        </div>
                        <!-- V5.3.0 (T-5.3.5.2): 机会/风险信号角标条 (纯计算) -->
                        <div v-if="todaySignals.length" class="today-signals mt-8">
                            <div v-for="(sg, i) in todaySignals" :key="i"
                                 class="today-signal-chip"
                                 :class="sg.kind === 'opportunity' ? 'sig-opp' : 'sig-risk'"
                                 @click="sg.action">
                                <span class="today-signal-dot"></span>
                                <span class="today-signal-text">{{ sg.source }}·{{ sg.text }}</span>
                            </div>
                        </div>
                        <div class="today-grid">
                            <!-- 美林时钟 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'merrill'">
                                <div class="today-cell-label">{{ t('strategies.merrillLabel') }}</div>
                                <!-- V6.6: merrillData.color 后端实时色，保留内联 -->
                                <div class="today-merrill-badge" :style="{background: merrillData?.color || 'var(--color-success)'}">{{ merrillData?.name || t('strategies.computing') }}</div>
                                <div class="today-cell-sub" v-if="merrillNext">{{ merrillNext }}</div>
                                <div class="today-cell-sub" v-else-if="merrillData?.timing?.duration_days != null">已 {{ merrillData.timing.duration_days }} 天 · 剩余 {{ merrillData.timing.days_remaining ?? '—' }} 天</div>
                            </div>
                            <!-- 市场情绪 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'market'">
                                <div class="today-cell-label">{{ t('strategies.marketSentiment') }}</div>
                                <div class="today-sentiment" :class="{muted: !marketData?.market_sentiment}">{{ marketData?.market_sentiment?.text || '暂无情绪数据' }}</div>
                                <div class="today-cell-sub">{{ tradingStatus }}</div>
                            </div>
                            <!-- 池变动 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'consensus'">
                                <div class="today-cell-label">{{ t('strategies.poolChanges') }}</div>
                                <div class="today-pool-row"><span class="today-pool-val up">▲ +{{ dashboardData?.pool_changes?.new_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.newPool') }}</span></div>
                                <div class="today-pool-row"><span class="today-pool-val down">▼ -{{ dashboardData?.pool_changes?.out_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <!-- 今日重点 -->
                            <div class="today-cell">
                                <div class="today-cell-label">{{ t('strategies.todayFocus') }}</div>
                                <div class="today-focus-list">
                                    <div v-if="todayFocus.length === 0" class="today-focus-empty">{{ t('strategies.noAlert') }}</div>
                                    <div v-for="(f, i) in todayFocus.slice(0, 3)" :key="i" class="today-focus-item" :class="f.level" @click="f.action">
                                        <span class="today-focus-icon"><qc-icon :name="f.icon" :size="14" /></span><span class="today-focus-text">{{ f.text }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 核心数据卡片 (v1.11: +趋势徽标) -->
                    <!-- 骨架屏加载 -->
                    <div v-if="loading && loadingView === 'overview'" class="dashboard-grid">
                        <div class="card skeleton skeleton-card" v-for="i in 4" :key="i"></div>
                    </div>
                    <div v-else class="dashboard-grid">
                        <div class="stat-card info">
                            <div class="stat-icon info"><qc-icon name="calendar" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card success">
                            <div class="stat-icon success"><qc-icon name="trending-up" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card gold">
                            <div class="stat-icon gold"><qc-icon name="target" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-icon warning"><qc-icon name="sparkles" :size="18" /></div>
                            <div class="stat-content">
                                <div class="flex-baseline-gap-8">
                                    <div class="stat-value">{{ currentPoolSize }}</div>
                                    <span v-if="poolChangeBadge" :class="poolChangeBadge.dir" class="stat-trend">{{ poolChangeBadge.text }}</span>
                                </div>
                                <div class="stat-label">{{ t('strategies.currentPool') }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 子页: 策略总览 -->

                    <!-- 数据概览卡片 (v1.11 重构: 时间轴+多维度换手) -->
                    <div class="card">
                        <div class="card-title">{{ t('strategies.dataOverview') }}</div>
                        <!-- 时间覆盖条 -->
                        <div class="time-coverage-bar">
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.start_date }}</div>
                            <div class="time-bar-track">
                                <div class="time-bar-fill" :style="{width: timeBarPercent + '%'}"></div>
                            </div>
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.end_date }}</div>
                            <div class="time-bar-info">{{ dashboardData.time_coverage?.days || 0 }}交易日 · {{ dashboardData.time_coverage?.months || 0 }}月 · {{ dashboardData.time_coverage?.years || 0 }}年</div>
                        </div>
                        <!-- 持仓变动 多时间维度 -->
                        <div class="pool-change-multi">
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.todayChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.new_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.out_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.weekChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.weekly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.weekly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.monthChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.monthly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.monthly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                        </div>
                    </div>

<!-- 各策略选股数量 (v1.11: 可点击跳转) -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trending-up" :size="14" /> 各策略选股统计 <span class="text-sm-tertiary-normal">(点击策略跳转日历筛选)</span></div>
                        <div v-for="item in filteredStrategyCounts" :key="item.strategy_id" class="strategy-item clickable" @click="navigateToStrategyFilter(item.strategy_name)">
                            <div class="strategy-header">
                                <span class="strategy-name">{{ item.strategy_name }} <span class="text-xs-tertiary-ml4">→</span></span>
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ fmtNum(item.percentage) }}%)</span></span>
                            </div>
                            <div class="strategy-progress">
                                <div class="progress-bar" :style="{width: item.percentage + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 策略共识度 TOP5 (v1.11: 嵌入概览) -->
                    <div class="card">
                        <div class="card-title flex-between">
                            <span>{{ t('strategies.consensusTop5') }}</span>
                            <span class="text-sm-primary-link" @click="currentSubPage = 'consensus'">{{ t('strategies.viewAll') }} {{ filteredConsensusRank.length }}只 →</span>
                        </div>
                        <!-- V5.16 (F2): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.2 (PRD-6.2 F5): 概览 TOP5 改用通用 StockList 组件 -->
                        <!-- V6.9.3 (F1): 启用共识徽章/进度条/价格列, 移除冗余「N 策略」extra -->
                        <qc-stock-list
                          :items="filteredConsensusRank.slice(0, 5)"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>

                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">

<!-- 美林时钟 -->
                    <div class="card overflow-hidden">
                        <div class="flex-between-mb16">
                            <div class="strategy-title-bar">
                                <qc-icon name="clock" :size="14" /> 美林时钟 · 经济周期
                            </div>
                            <!-- V6.6: merrillData.color 后端实时色，保留内联 -->
                            <span class="strategy-tag-pill" :style="{background: merrillData.color || 'var(--color-success)'}">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                            <!-- V4.5 (FR-4.5.1): 配置就近 -->
                            <el-button size="small" type="primary" plain @click="merrillConfigOpen = !merrillConfigOpen">
                                <qc-icon name="settings" :size="14" /> {{ merrillConfigOpen ? '收起配置' : '配置' }}
                            </el-button>
                        </div>
                        <div class="card mt-4" v-if="merrillConfigOpen">
                            <div class="card-title"><qc-icon name="clock" :size="14" /> 美林时钟配置</div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong></span>
                                <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading"><qc-icon name="refresh" :size="14" /> 手动重评估</el-button>
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">自动刷新</span>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">刷新间隔(分钟)</span>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="10" label="10" />
                                    <el-option :value="30" label="30" />
                                    <el-option :value="60" label="60" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 四阶段网格 -->
                        <div class="grid-2col-gap8-mb14">
                            <!-- V6.6: 阶段色来自服务端 merrillStagesConfig 配置，保留内联 -->
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon"><qc-icon :name="s.icon" :size="20" /></div>
                                <!-- V6.6: s.textColor 服务端配置色，保留内联 -->
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

                        <!-- 描述 -->
                        <div class="text-center-secondary-lh" v-if="merrillData.description">
                            {{ merrillData.description }}
                        </div>

                        <!-- V5.21: 周期演进板 — 随大模型评估与时间演进动态更新 (替代原 金框 + 历史周期时间轴) -->
                        <div class="mc-board">
                            <!-- ① 当前阶段 · 进行中 (时间演进: 进度/剩余/成熟度实时刷新) -->
                            <div class="mc-now" v-if="merrillData.timing">
                                <div class="mc-now-head">
                                    <span class="mc-now-dot" :style="{background: merrillData.color || 'var(--color-success)'}"></span>
                                    <span class="mc-now-name">{{ merrillData.stage_cn || merrillData.name }}</span>
                                    <span class="mc-now-badge">{{ merrillData.timing.maturity || '—' }}</span>
                                    <span class="mc-conf" v-if="merrillData.confidence">置信度 {{ merrillData.confidence.level }}</span>
                                    <span class="mc-eval-ts" v-if="merrillClockLastUpdated">上次评估 {{ merrillClockLastUpdated }}</span>
                                </div>
                                <div class="mc-prog">
                                    <div class="mc-prog-track">
                                        <div class="mc-prog-fill" :style="mcProgStyle"></div>
                                        <div class="mc-prog-avg" :style="{left: mcAvgMark + '%'}" title="历史平均时长刻度"></div>
                                    </div>
                                    <div class="mc-prog-meta">
                                        <span>已过 <b>{{ merrillData.timing.duration_days }}</b> 天</span>
                                        <span>进度 <b>{{ fmtNum(merrillData.timing.progress_percent) }}%</b></span>
                                        <span v-if="merrillData.timing.days_remaining">预计还需 <b>{{ merrillData.timing.days_remaining }}</b> 天</span>
                                        <span class="mc-avg-note">历史均值 {{ fmtNum(merrillData.timing.avg_duration_months) }} 月</span>
                                    </div>
                                </div>
                                <div class="mc-now-foot">
                                    <div class="mc-next" v-if="merrillData.next_stage_prediction">
                                        <span class="mc-next-lab">下一阶段</span>
                                        <span class="mc-next-name">→ {{ merrillData.next_stage_prediction.next_stage_name }}</span>
                                        <span class="mc-next-prob">{{ fmtNum(merrillData.next_stage_prediction.transition_probability * 100) }}%</span>
                                        <span class="mc-next-sig" v-if="(merrillData.next_stage_prediction.transition_signals || []).length">触发信号: {{ (merrillData.next_stage_prediction.transition_signals || []).join(' · ') }}</span>
                                    </div>
                                    <div class="mc-end" v-if="mcEndRange"><span class="mc-end-lab">预计结束</span>{{ mcEndRange }}</div>
                                </div>
                                <!-- 评估轨迹 (快照: 同一阶段多次评估会连成一段, 阶段切换则出现断点) -->
                                <div class="mc-trail" v-if="mcTrailRuns.length">
                                    <span class="mc-trail-lab">评估轨迹</span>
                                    <span v-for="(run, i) in mcTrailRuns" :key="i" class="mc-trail-run" :class="{ 'is-latest': i === mcTrailRuns.length - 1 }" :title="run.first + ' → ' + run.last">
                                        <span class="mc-trail-dot" :style="{background: getTimelineStageColor(run.stage)}"></span>{{ run.name }} ×{{ run.count }}
                                    </span>
                                    <span class="mc-trail-note">近 {{ merrillSnapshotsTotal || merrillSnapshots.length }} 次评估{{ mcTrailRuns.length > 1 ? ' · 阶段有变更' : ' · 阶段稳定' }}</span>
                                </div>
                            </div>

                            <!-- ② 本轮演进带: 实色=已发生, 斜纹=预测; 当前段宽度随时间生长 -->
                            <div class="mc-band-block" v-if="mcCurrentBand.segs.length">
                                <div class="mc-band-title">
                                    <qc-icon name="activity" :size="14" /> 本轮演进
                                    <span class="mc-band-hint">实色=已发生 · 斜纹=预测 · 宽度∝持续时长 · 阶段首尾相接</span>
                                </div>
                                <div class="mc-band">
                                    <div v-for="(g, i) in mcCurrentBand.segs" :key="i" class="mc-seg"
                                         :class="{ 'is-ghost': g.ghost, 'is-cur': g.live }" :style="mcSegStyle(g)"
                                         @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                        <span class="mc-seg-name" v-if="g.width > 9">{{ g.name }}</span>
                                        <span class="mc-seg-months" v-if="g.width > 17 && g.months">{{ fmtNum(g.months) }}月</span>
                                    </div>
                                </div>
                                <div class="mc-band-axis">
                                    <span>{{ mcCurrentBand.axisStart }}</span>
                                    <span class="mc-band-axis-now" v-if="mcCurrentBand.nowPct != null" :style="{left: mcCurrentBand.nowPct + '%'}">今天</span>
                                    <span>{{ mcCurrentBand.axisEnd }}</span>
                                </div>
                            </div>

                            <!-- ③ 历史周期: 已确认, 低强调; 可切「阶段矩阵」做跨周期比较 -->
                            <div class="mc-hist-block" v-if="mcHistoryBands.length">
                                <div class="mc-hist-head">
                                    <span class="mc-hist-title"><qc-icon name="history" :size="14" /> 历史周期</span>
                                    <span class="mc-hist-sub">近 {{ mcHistoryBands.length }} 轮 · 点击色块看阶段详情</span>
                                    <el-radio-group v-model="mcHistView" size="small">
                                        <el-radio-button value="band">周期带</el-radio-button>
                                        <el-radio-button value="matrix">阶段矩阵</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <template v-if="mcHistView === 'band'">
                                    <!-- V5.22 (需求4): 历史周期逐段列出时间信息; 周期带按持续时长首尾相接 -->
                                    <div v-for="(cyc, i) in mcHistoryBands" :key="i" class="mc-hrow">
                                        <div class="mc-hlab">{{ cyc.label }}<small>{{ cyc.years }}</small></div>
                                        <div class="mc-hbody">
                                            <div class="mc-band mc-band-sm">
                                                <div v-for="(g, j) in cyc.segs" :key="j" class="mc-seg" :style="mcSegStyle(g)"
                                                     @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                                    <!-- V6.11: 历史周期文字收进色带内 (原带外阶段标签行已移除) -->
                                                    <span class="mc-seg-name" v-if="g.width > 5">{{ g.name }}</span>
                                                    <span class="mc-seg-months" v-if="g.width > 14 && g.months">{{ fmtNum(g.months) }}月</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <table v-else class="mc-mx">
                                    <thead>
                                        <tr>
                                            <th class="mc-mx-lab">周期</th>
                                            <th v-for="k in mcStageKeys" :key="k">
                                                <span class="mc-mx-dot" :style="{background: getTimelineStageColor(k)}"></span>{{ getTimelineStageName(k) }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, i) in mcMatrix" :key="i">
                                            <td class="mc-mx-lab">{{ row.label }}</td>
                                            <td v-for="k in mcStageKeys" :key="k">
                                                <span v-if="row.sum[k]" class="mc-mx-cell" :class="{ 'is-cur': row.cur === k }" :style="mcMxCellStyle(k, row.sum[k])">{{ fmtNum(row.sum[k]) }} 月</span>
                                                <span v-else class="mc-mx-cell is-zero">—</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="merrill-timeline-empty" v-if="!mcCurrentBand.segs.length && !timelineLoading">暂无历史周期数据</div>
                            <div class="merrill-timeline-empty" v-else-if="!mcCurrentBand.segs.length && timelineLoading">加载中...</div>
                        </div>

                        <!-- 多维度评分 -->
                        <div class="note-box-14" v-if="merrillData.dimension_scores">
                            <div class="text-base-semibold-primary-mb10"><qc-icon name="bar-chart-3" :size="14" /> 多维度评分</div>
                            <div class="flex-c-gap-8-mb6-sm" v-for="dim in dimensionScoreList" :key="dim.key">
                                <span class="stat-label-40">{{ dim.label }}</span>
                                <div class="stat-track-10">
                                    <!-- V6.6: dim 分数段渐变色（JS 插值计算），保留内联 -->
                                    <div class="stat-fill-5" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                                </div>
                                <span class="stat-value-35" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                                <span class="stat-value-36" :style="{color: dim.color}">{{ dim.level }}</span>
                            </div>
                        </div>

                        <!-- 置信度 + 下阶段预测 -->
                        <div class="strategy-summary-bar" v-if="merrillData.confidence">
                            <div class="flex-c-gap-6">
                                <span class="text-sm-secondary">置信度</span>
                                <!-- V6.6: confidenceColor 置信度计算色，保留内联 -->
                                <span class="text-base-semibold" :style="{color: confidenceColor}">{{ merrillData.confidence.level || '—' }}</span>
                            </div>
                            <div class="flex-c-gap-4-sm" v-if="merrillData.next_stage_prediction">
                                <span class="color-secondary">→预测</span>
                                <span class="text-warning-semibold">{{ merrillData.next_stage_prediction.next_stage_name || '—' }}</span>
                                <span class="color-secondary" v-if="merrillData.next_stage_prediction.transition_probability">
                                    {{ (merrillData.next_stage_prediction.transition_probability * 100).toFixed(2) }}%
                                </span>
                            </div>
                        </div>

                        <div class="gold-hint">
                            <qc-icon name="lightbulb" :size="14" /> 点击阶段卡片查看详细分析和投资建议
                        </div>

                    </div>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">

                    
                    <!-- 市场行情概览 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="line-chart" :size="14" /> 今日市场行情</div>
                        <div class="market-status">
                            <span>
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours"><qc-icon name="clock" :size="14" /> 交易中</span>
                                <span class="ml-8-tertiary" v-if="!marketData.in_trading_hours && marketData.is_trading_day">已收盘</span>
                            </span>
                            <span class="text-xs-tertiary">{{ marketData.date }}</span>
                        </div>
                        <div class="market-sentiment" v-if="marketData.market_sentiment">
                            <div class="market-sentiment-text">{{ marketData.market_sentiment.text }}</div>
                        </div>
                        <!-- V5.16 (F4): 中栏指数列表 + 右栏指数详情工作区 (C4-A; 弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <div class="market-grid" :class="{ 'is-vertical': detailSplitEnabled }">
                            <div v-for="idx in marketData.indices" :key="idx.id" class="market-card clickable"
                                 :class="['up-down-' + (idx.pct_chg >= 0 ? 'up' : 'down'), { 'is-active': detailSplitEnabled && indexDetail && indexDetail.code === idx.code }]"
                                 @click="showIndexDetail(idx)">
                                <div class="market-header">
                                    <span class="market-name">{{ idx.name }}</span>
                                    <span class="market-tag">{{ idx.market }}</span>
                                </div>
                                <div class="market-price-row">
                                    <span class="market-price">{{ Number(idx.close).toFixed(2) }}</span>
                                    <span class="market-chg" :class="idx.pct_chg >= 0 ? 'up' : 'down'">
                                        {{ idx.pct_chg >= 0 ? '+' : '' }}{{ Number(idx.pct_chg).toFixed(2) }}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        </template>
                        <template #pane>
                            <qc-index-detail-dialog :embedded="true"></qc-index-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trophy" :size="14" /> 策略共识度排行 (多策略同时选中)</div>
                        <!-- V5.16 (F3): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.9.3 (F1.4): 统一 StockList 组件 (虚拟滚动 + 共识徽章/进度条/价格列) -->
                        <qc-stock-list
                          class="h-calc-240"
                          :items="filteredConsensusRank"
                          :virtual="true"
                          :row-height="78"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                            <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线"><qc-icon name="trending-up" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码起点 -->
                    <div v-else-if="currentSubPage === 'backtest'" class="backtest-workbench">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留返回操作 -->
                        <div class="qc-page-tools">
                            <button type="button" class="bt-back-btn" @click="currentSubPage = 'overview'">返回策略总览</button>
                        </div>

                        <!-- 参数表单 -->
                        <div class="card">
                            <div class="card-title">回测参数</div>
                            <div class="bt-form">
                                <div class="bt-form-row">
                                    <span class="bt-form-label">策略（可多选对比）</span>
                                    <div class="bt-strategy-opts">
                                        <label v-for="opt in btStrategyOptions" :key="opt.id" class="bt-strategy-opt" :class="{ active: btSelectedStrategies.includes(opt.id) }">
                                            <input type="checkbox" class="bt-strategy-check" :checked="btSelectedStrategies.includes(opt.id)" @change="toggleBtStrategy(opt.id)">
                                            <span>{{ opt.name }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">日期区间</span>
                                    <el-date-picker v-model="btDateRange" type="daterange" size="small"
                                        range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                        value-format="YYYY-MM-DD" class="bt-date-picker"></el-date-picker>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">初始资金</span>
                                    <el-input-number v-model="btCapital" size="small" :min="10000" :step="50000" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">手续费率</span>
                                    <el-input-number v-model="btCommissionRate" size="small" :min="0" :max="0.01" :step="0.0001" :precision="4" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">基准对比</span>
                                    <el-checkbox v-model="btIncludeBenchmark">含基准对比</el-checkbox>
                                </div>
                                <div class="bt-form-actions">
                                    <el-button type="primary" size="small" :loading="btRunning" @click="runBacktestWorkbench">运行回测</el-button>
                                    <el-button size="small" :disabled="!btResult" @click="exportBacktestCSV">导出 CSV</el-button>
                                </div>
                                <div v-if="btError" class="bt-error">{{ btError }}</div>
                            </div>
                        </div>

                        <!-- 结果区 -->
                        <template v-if="btResult && btResult.success">
                            <!-- 指标卡 -->
                            <div class="card">
                                <div class="card-title">核心指标 <span class="bt-period">{{ btResult.period }}</span></div>
                                <div class="bt-metrics">
                                    <div v-for="m in btMetrics" :key="m.key" class="bt-metric">
                                        <div class="bt-metric-label">{{ m.label }}</div>
                                        <div class="bt-metric-value" :class="{ 'is-up': m.dir === 'up', 'is-down': m.dir === 'down' }">{{ m.value }}<span class="bt-metric-suffix">{{ m.suffix }}</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 最大回撤区间说明 -->
                            <div v-if="btDrawdownRegion" class="card">
                                <div class="card-title">最大回撤区间</div>
                                <div class="bt-dd-info">回撤幅度 <b>{{ fmtNum(btDrawdownRegion.maxDrawdown) }}%</b> · {{ btDrawdownRegion.peakDate }} → {{ btDrawdownRegion.troughDate }}（净值图中已标注）</div>
                            </div>

                            <!-- 净值曲线（多线 + 图例可切换） -->
                            <div class="card">
                                <div class="card-title">净值曲线（点击图例可开关各策略/基准）</div>
                                <div id="backtestNavChart" class="bt-chart" :ref="el => registerBacktestNavChart(el)"></div>
                            </div>

                            <!-- 年度收益列表 -->
                            <div class="card">
                                <div class="card-title">年度收益</div>
                                <qc-state-panel v-if="btAnnualReturns.length === 0" type="empty" title="暂无年度收益数据"></qc-state-panel>
                                <div v-else class="table-container">
                                    <table class="bt-annual-table">
                                        <thead>
                                            <tr><th>年度</th><th>收益</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btAnnualReturns" :key="row.year">
                                                <td>{{ row.year }}</td>
                                                <td :class="row.return >= 0 ? 'is-up' : 'is-down'">{{ row.return >= 0 ? '+' : '' }}{{ fmtNum(row.return) }}%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 多策略指标对比 -->
                            <div v-if="btStrategyMetricsRows.length" class="card">
                                <div class="card-title">多策略指标对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>策略</th>
                                                <th v-for="m in btStrategyMetricsRows[0].metrics" :key="m.key">{{ m.label }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btStrategyMetricsRows" :key="row.name">
                                                <td>{{ row.name }}</td>
                                                <td v-for="m in row.metrics" :key="m.key">{{ m.value }}{{ m.suffix }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 交易明细 -->
                            <div class="card">
                                <div class="card-title">交易明细 <span class="bt-trade-count">{{ btTrades.length }} 笔</span></div>
                                <qc-state-panel v-if="btTrades.length === 0" type="empty" title="本期无调仓交易"></qc-state-panel>
                                <div v-else class="table-container bt-trades-wrap">
                                    <table class="bt-trades-table">
                                        <thead>
                                            <tr><th>日期</th><th>股票代码</th><th>方向</th><th>原因</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(t, i) in btTrades" :key="i">
                                                <td>{{ t.date }}</td>
                                                <td>{{ t.stock }}</td>
                                                <td :class="t.action === 'buy' ? 'is-up' : t.action === 'sell' ? 'is-down' : ''">{{ t.action === 'buy' ? '买入' : t.action === 'sell' ? '卖出' : t.action }}</td>
                                                <td>{{ t.reason }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </template>

                        <!-- 未运行 / 加载 / 失败 -->
                        <div v-else class="card">
                            <qc-state-panel v-if="btRunning" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="btError" type="error" title="回测失败" :desc="btError" @retry="runBacktestWorkbench"></qc-state-panel>
                            <qc-state-panel v-else type="empty" title="尚未运行回测" desc="选择策略与参数后点击「运行回测」查看结果"></qc-state-panel>
                        </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码终点 -->
                    <!-- V4.9 (P1): 执行看板子页 -->
                    <div v-else-if="currentSubPage === 'execution'" class="card">
                        <div class="card-title flex-between">
                            <span><qc-icon name="zap" :size="14" /> 策略执行看板</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" @click="loadExecutionData" :loading="execLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                                <el-select class="w-select-sm" size="small" v-model="execDays" @change="loadExecutionData">
                                    <el-option label="近1天" :value="1" />
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 聚合统计卡片 -->
                        <div v-if="execSummary" class="dashboard-grid">
                            <div class="stat-card info">
                                <div class="stat-icon info"><qc-icon name="clipboard-list" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.total }}</div>
                                    <div class="stat-label">总执行次数</div>
                                </div>
                            </div>
                            <div class="stat-card success">
                                <div class="stat-icon success"><qc-icon name="check" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.success_count }}</div>
                                    <div class="stat-label">成功次数</div>
                                </div>
                            </div>
                            <div class="stat-card warning">
                                <div class="stat-icon warning"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value" :class="execSuccessClass">{{ execSummary.success_rate || 0 }}%</div>
                                    <div class="stat-label">成功率</div>
                                </div>
                            </div>
                            <div class="stat-card gold">
                                <div class="stat-icon gold"><qc-icon name="calendar" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ Object.keys(execSummary.daily_trend || {}).length }}</div>
                                    <div class="stat-label">覆盖天数</div>
                                </div>
                            </div>
                        </div>

                        <!-- 各任务状态卡片 -->
                        <div v-if="execSummary?.by_task" class="card mt-4">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="14" /> 各任务执行统计</div>
                            <div class="strategy-item" v-for="(stats, taskName) in execSummary.by_task" :key="taskName">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ taskName }}</span>
                                    <span class="strategy-count">
                                        <span class="color-success">{{ stats.success }}</span>
                                        <span class="text-tertiary">/</span>
                                        <span class="color-danger">{{ stats.failed }}</span>
                                        <span class="text-tertiary"> | {{ stats.total }} 次</span>
                                    </span>
                                </div>
                                <div class="strategy-progress">
                                    <div class="progress-bar" :class="execRateClass(stats.total, stats.success)" :style="{width: (stats.total > 0 ? (stats.success / stats.total * 100) : 0) + '%'}"></div>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">最近: {{ stats.last_run || '—' }}</span>
                                    <span class="text-xs" :class="stats.last_status === 'success' ? 'color-success' : 'color-danger'">{{ stats.last_status === 'success' ? '成功' : '失败' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- V4.9.2 (P1): 每日策略执行监控 -->
                        <div class="card mt-4">
                            <div class="card-title"><qc-icon name="calendar" :size="14" /> {{ t('exec.resultTitle') }}</div>
                            <div class="dashboard-grid">
                                <div class="stat-card warning">
                                    <div class="stat-icon warning"><qc-icon name="calendar-days" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execCountdownText }}</div>
                                        <div class="stat-label">{{ t('exec.countdown') }}<span v-if="execNextRunText" class="text-sm-tertiary-ml4">下次自动更新 {{ execNextRunText }}</span></div>
                                    </div>
                                </div>
                                <div class="stat-card success">
                                    <div class="stat-icon success"><qc-icon :name="execStatusIcon" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execPhaseText }}</div>
                                        <div class="stat-label">{{ t('exec.statusTitle') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card info">
                                    <div class="stat-icon info"><qc-icon name="package" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execLastDate }}</div>
                                        <div class="stat-label">{{ t('exec.lastRun') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card gold">
                                    <div class="stat-icon gold"><qc-icon name="eye" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value" :class="execVisibleClass">{{ execVisibleText }}</div>
                                        <div class="stat-label">{{ t('exec.dayTotal') }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.planTitle') }}</div>
                            <div class="strategy-item" v-for="p in execPlan" :key="p.sid">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ p.name }}</span>
                                    <span class="strategy-count">
                                        <span :class="p.enabled ? 'color-success' : 'color-danger'">{{ p.enabled ? '启用' : '停用' }}</span>
                                        <span class="text-tertiary"> | {{ p.schedule }} | {{ t('exec.lastRun') }}: {{ p.last_run || '—' }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.resultTitle') }}</div>
                            <div class="strategy-item" v-for="r in execResultsDates" :key="r.date">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ r.date }}</span>
                                    <span class="strategy-count">
                                        <span class="text-tertiary">{{ t('exec.union') }}: {{ r.in_pool_union }} | {{ t('exec.dayTotal') }}: {{ r.day_view_total }}</span>
                                        <span :class="r.visible ? 'color-success' : 'color-danger'">{{ r.visible ? t('exec.visible') : t('exec.invisible') }}</span>
                                        <el-button size="small" link type="primary" @click="loadExecutionTrace(r.date)">{{ t('exec.traceTitle') }}</el-button>
                                    </span>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">{{ r.strategies.map(function (s) { return s.strategy + ':' + s.held; }).join(' | ') }}</span>
                                    <span class="text-xs-tertiary">{{ r.run_at || '—' }}</span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.traceTitle') }}</div>
                            <div class="flex-c-gap-8 mb-2">
                                <el-select class="w-select" size="small" v-model="execTraceDate" @change="loadExecutionTrace(execTraceDate)">
                                    <el-option v-for="r in execResultsDates" :key="r.date" :label="r.date" :value="r.date" />
                                </el-select>
                                <el-button size="small" @click="loadExecutionTrace(execTraceDate)" :loading="execTraceLoading"><qc-icon name="refresh" :size="14" /> {{ t('exec.traceTitle') }}</el-button>
                            </div>
                            <div v-if="execTraceSteps.length" class="strategy-item" v-for="s in execTraceSteps" :key="s.step + (s.ts || '')">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ s.step }}</span>
                                    <span class="text-xs-tertiary">{{ s.ts }}</span>
                                </div>
                                <div class="text-sm-tertiary">{{ s.detail }}</div>
                            </div>
                            <div v-else class="text-tertiary text-sm">—</div>
                        </div>

                        <!-- 历史记录表 -->
                        <div class="card mt-4">
                            <div class="card-title flex-between">
                                <span><qc-icon name="file-text" :size="14" /> 执行历史 <span class="text-sm-tertiary">(最近 {{ execDays }} 天)</span></span>
                                <div class="flex-c-gap-8">
                                    <el-select class="w-select" size="small" v-model="execTaskFilter" @change="loadExecutionData" clearable placeholder="全部任务">
                                        <el-option v-for="t in execTaskOptions" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-select-sm" size="small" v-model="execStatusFilter" @change="loadExecutionData" clearable placeholder="全部状态">
                                        <el-option label="成功" value="success" />
                                        <el-option label="失败" value="failed" />
                                    </el-select>
                                </div>
                            </div>
                            <qc-state-panel v-if="execLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="execError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadExecutionData"></qc-state-panel>
                            <div v-else-if="!execHistory.length" class="empty-state">
                                <div class="text-md-medium-primary">暂无执行记录</div>
                                <div class="text-sm-tertiary-mt8">调度任务尚未运行，或所选时间段内无记录</div>
                            </div>
                            <div v-else class="table-container">
                                <table class="bt-trades-table">
                                    <thead>
                                        <tr><th>时间</th><th>任务</th><th>状态</th><th>详情</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(r, i) in execHistory" :key="i">
                                            <td class="text-sm-mono">{{ r.ts }}</td>
                                            <td><span class="strategy-tag">{{ r.task }}</span></td>
                                            <td><span :class="r.success ? 'status-current' : 'status-out'">{{ r.success ? '成功' : '失败' }}</span></td>
                                            <td class="text-sm-tertiary" :title="r.detail">{{ (r.detail || '—').slice(0, 60) }}{{ (r.detail || '').length > 60 ? '…' : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
    `,setup(){const t=a("qcState"),g=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let u=0;const m=e(()=>{var I;return((I=t.merrillData)==null?void 0:I.value)||{}}),T=e(()=>{var I;return((I=t.marketData)==null?void 0:I.value)||{}}),r=e(()=>{var I;return((I=t.dashboardData)==null?void 0:I.value)||{}}),n=e(()=>{var I;return((I=t.healthMetrics)==null?void 0:I.value)||[]}),f=e(()=>{var I;return((I=t.filteredConsensusRank)==null?void 0:I.value)||[]}),o=e(()=>{const I={};for(const ee of f.value)ee.code&&ee.name&&(I[ee.code]=ee.name);return I}),x={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function w(I){return x[I]||I}const E=e(()=>T.value.date||r.value.latest_date||"-"),C=e(()=>{const I=T.value;return!I||Object.keys(I).length===0?"数据加载中...":I.is_trading_day&&I.in_trading_hours?"● 交易中":I.is_trading_day?"已收盘":"○ 非交易日"}),q=e(()=>{const I=m.value.next_stage_prediction;return I&&I.next_stage_name&&I.transition_probability>.2?`→${I.next_stage_name} ${(I.transition_probability*100).toFixed(2)}%`:""}),F=e(()=>{const I=[],ee=r.value.pool_changes||{},Ce=ee.new_count||0;if(Ce>0){const bt=ee.new_stock_names||{},$e=(ee.new_stocks||[]).map(Ge=>bt[Ge]||o.value[Ge]||Ge).slice(0,4).join("、");I.push({icon:"sparkles",level:"new",text:`今日新入池 ${Ce} 只${$e?" · "+$e:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const bt of n.value.filter($e=>$e.degraded))I.push({icon:"alert-triangle",level:"warn",text:`数据源 ${w(bt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Ie=m.value.timing;Ie&&Ie.progress_percent&&Ie.progress_percent>100?I.push({icon:"clock",level:"warn",text:`美林「${m.value.name}」已超期 ${Ie.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Ie&&Ie.maturity&&m.value.name&&I.push({icon:"clock",level:"info",text:`美林「${m.value.name}」阶段成熟度 ${Ie.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const We=T.value;return We&&We.is_trading_day===!1&&We.date&&I.push({icon:"calendar",level:"info",text:`${We.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),I}),D=e(()=>{const I=[],ee=m.value.name||"",Ce=m.value.timing||{},Ie=["复苏","成长","过热"],We=["滞胀","衰退"];Ie.some(ct=>ee.includes(ct))&&I.push({kind:"opportunity",source:"美林",text:ee+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),We.some(ct=>ee.includes(ct))&&I.push({kind:"risk",source:"美林",text:ee+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),Ce.progress_percent&&Ce.progress_percent>100&&I.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const bt=r.value.pool_changes||{},$e=(bt.new_count||0)-(bt.out_count||0);$e>=3?I.push({kind:"opportunity",source:"池变动",text:"净入池 +"+$e,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):$e<=-3&&I.push({kind:"risk",source:"池变动",text:"净出池 "+$e,action:()=>{t.currentSubPage.value="consensus"}});const Ge=T.value.market_sentiment,_t=Ge&&Ge.text||"";(_t.includes("乐观")||_t.includes("积极")||_t.includes("亢奋"))&&I.push({kind:"opportunity",source:"情绪",text:_t,action:()=>{t.currentSubPage.value="market"}}),(_t.includes("悲观")||_t.includes("恐慌")||_t.includes("低迷"))&&I.push({kind:"risk",source:"情绪",text:_t,action:()=>{t.currentSubPage.value="market"}});for(const ct of n.value.filter(ft=>ft.degraded))I.push({kind:"risk",source:"数据",text:w(ct.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return I}),d=e(()=>{var I;return((I=t.merrillTimeline)==null?void 0:I.value)||t.merrillTimeline||{cycles:[]}}),i=e(()=>{var I;return((I=t.timelineLoading)==null?void 0:I.value)||!1});function h(I){const ee=t.showStageDetail;typeof ee=="function"&&ee(I)}function V(I){const ee=t.merrillStagesConfig,Ie=(ee&&ee.value?ee.value:ee||{})[I]||{};return Ie.color||Ie.bg_color||"var(--color-primary)"}function W(I){const ee=t.merrillStagesConfig,Ce=ee&&ee.value?ee.value:ee||{};return Ce[I]&&Ce[I].name||""}function S(){const I=t.merrillStagesConfig;return I&&I.value?I.value:I||{}}function O(I){return S()[I]&&S()[I].description||""}const K=Vue.ref([]),A=Vue.ref(null),L=Vue.ref(!1),H=Vue.ref(!1),$=Vue.ref(7),Z=Vue.ref(""),le=Vue.ref(""),te=Vue.computed(()=>{const I=new Set;return(K.value||[]).forEach(function(ee){ee.task&&I.add(ee.task)}),Array.from(I).sort()}),R=Vue.computed(function(){const I=A.value&&A.value.success_rate||0;return I>=80?"color-success":I>=50?"color-warning":"color-danger"});function s(I,ee){return I>0&&ee/I>=.8?"status-ok":I>0&&ee/I>=.5?"status-warn":"status-bad"}async function y(){const I=++u;L.value=!0,H.value=!1;try{const ee=window.__quantModules&&window.__quantModules.core||{},Ce=typeof ee.authHeaders=="function"?ee.authHeaders():{},Ie=new URLSearchParams({days:String($.value)});Z.value&&Ie.set("task",Z.value),le.value&&Ie.set("status",le.value);const[We,bt]=await Promise.all([fetch("/api/system/execution-history?"+Ie.toString(),{headers:Ce}).then(function($e){return $e.json()}),fetch("/api/system/execution-summary?days="+$.value,{headers:Ce}).then(function($e){return $e.json()})]);if(I!==u)return;K.value=We&&We.data||[],A.value=bt&&bt.data||null}catch(ee){console.error("[execution] 执行数据加载失败:",ee),H.value=!0}finally{I===u&&(L.value=!1)}}const l=window.__quantModules&&window.__quantModules.i18n||{},p=typeof l.t=="function"?l.t:function(I){return String(I)},X=Vue.ref([]),P=Vue.ref(null),b=Vue.ref(null),v=Vue.ref(""),k=Vue.ref([]),c=Vue.ref(!1);let N=null;const oe=Vue.computed(function(){const I=b.value&&b.value.dates||[];return I.length&&!v.value&&(v.value=I[I.length-1].date),I}),J=Vue.computed(function(){const I=(X.value||[]).find(function(Ce){return Ce.enabled});if(!I||I.countdown_seconds==null)return"—";const ee=I.countdown_seconds;return Math.floor(ee/3600)+"h"+String(Math.floor(ee%3600/60)).padStart(2,"0")+"m"}),M=Vue.computed(function(){const I=(X.value||[]).find(function(ee){return ee.enabled});if(!I||I.countdown_seconds==null||I.countdown_seconds<0)return"";try{return new Date(Date.now()+I.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),U=Vue.computed(function(){const I=P.value;return!I||I.phase==="idle"?p("exec.waiting"):I.phase==="running"?p("exec.running")+(I.current_sid?" · "+I.current_sid:""):I.phase==="done"?p("exec.done"):p("exec.failed")}),ie=Vue.computed(function(){return P.value&&P.value.phase==="running"?"loader":"check-circle-2"}),fe=Vue.computed(function(){const I=b.value&&b.value.dates||[];return I.length?I[I.length-1].date:"—"}),Se=Vue.computed(function(){const I=b.value&&b.value.dates||[],ee=I[I.length-1];return ee&&ee.visible?"color-success":"color-danger"}),Y=Vue.computed(function(){const I=b.value&&b.value.dates||[],ee=I[I.length-1];return ee?ee.day_view_total:"—"});function ce(I){const ee=window.__quantModules&&window.__quantModules.core||{},Ce=typeof ee.authHeaders=="function"?ee.authHeaders():{};return fetch(I,{headers:Ce}).then(function(Ie){return Ie.json()})}async function Ae(){const I=++u;try{const[ee,Ce,Ie]=await Promise.all([ce("/api/strategies/execution/plan"),ce("/api/strategies/execution/status"),ce("/api/strategies/execution/results?days=7")]);if(I!==u)return;X.value=ee&&ee.data&&ee.data.plans||[],P.value=Ce&&Ce.data||null,b.value=Ie&&Ie.data||null,P.value&&P.value.phase==="running"?se():ke()}catch(ee){console.error("[execution-monitor] 监控数据加载失败:",ee)}}function se(){ke(),N=setInterval(function(){ce("/api/strategies/execution/status").then(function(I){P.value=I&&I.data||null,P.value&&P.value.phase!=="running"&&(ke(),Ae())}).catch(function(){})},5e3)}function ke(){N&&(clearInterval(N),N=null)}async function Te(I){if(!I)return;const ee=++u;c.value=!0;try{const Ce=await ce("/api/strategies/execution/trace/"+encodeURIComponent(I));if(ee!==u)return;const Ie=Ce&&Ce.data||null;k.value=Ie&&Ie.steps||[]}catch(Ce){console.error("[execution-trace] 追溯加载失败:",Ce)}finally{ee===u&&(c.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(I){I==="execution"?(y(),Ae()):ke()},{immediate:!0}),Vue.watch(function(){const I=t.currentSubPage&&t.currentSubPage.value,ee=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],Ce=t.marketData&&t.marketData.value||{};return{sub:I,split:!!t.detailSplitEnabled.value,top5:ee.slice(0,5),rank:ee,indices:(Ce.indices||[]).map(function(Ie){return Ie})}},function(I,ee){if(I.split){if(I.sub==="overview"){if(!I.top5.length)return;const Ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=I.top5.some(function(We){return We.code===Ce});(!Ce||!Ie)&&t.showStockDetail&&t.showStockDetail(I.top5[0].code)}else if(I.sub==="consensus"){if(!I.rank.length)return;const Ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=I.rank.some(function(We){return We.code===Ce});(!Ce||!Ie)&&t.showStockDetail&&t.showStockDetail(I.rank[0].code)}else if(I.sub==="market"){if(!I.indices.length)return;const Ce=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Ie=I.indices.some(function(We){return We.code===Ce});(!Ce||!Ie)&&t.showIndexDetail&&t.showIndexDetail(I.indices[0])}}},{immediate:!0});const ge=Vue.ref("band"),ye=["recession","recovery","overheating","stagflation"];function Ee(I){if(!I)return null;const ee=String(I).split("-"),Ce=parseInt(ee[0],10),Ie=parseInt(ee[1]||"1",10);return isFinite(Ce)?Ce+(Ie-1)/12:null}function re(I){const ee=Math.floor(I);let Ce=Math.round((I-ee)*12)+1;return Ce>12&&(Ce=12),Ce<1&&(Ce=1),ee+"-"+(Ce<10?"0"+Ce:""+Ce)}function ae(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function me(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Ne(I,ee){const Ce=ae(),Ie=Number(Ce.avg_duration_months)||0,We=Math.min(100,Number(Ce.progress_percent)||0),bt=Ee(Ce.current_stage_start_date),$e=[];let Ge=null;if((I||[]).forEach(function(Ue){const wt=Ee(Ue.start);Ge==null&&wt!=null&&(Ge=wt);const At=!!(Ue.is_current||bt!=null&&wt===bt&&!Ue.duration_months),It=Ue.name||W(Ue.stage);if(At&&Ie>0){const vt=Ie*We/100;vt>.5&&$e.push({stage:Ue.stage,name:It,months:vt,live:!0,start:Ue.start});const Pt=Ie-vt;Pt>.5&&$e.push({stage:Ue.stage,name:"剩余(预测)",months:Pt,ghost:!0,start:Ue.start})}else{let vt=Number(Ue.duration_months)||0;if(!vt&&wt!=null){const Pt=Ee(Ue.end);Pt!=null&&Pt>wt&&(vt=Math.max(1,Math.round((Pt-wt)*12)))}vt||(vt=1),$e.push({stage:Ue.stage,name:It,months:vt,live:At,start:Ue.start,end:Ue.end})}if(At&&ee&&Ie>0){const vt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;vt&&$e.push({stage:vt.next_stage,name:(vt.next_stage_name||"下一阶段")+" (预测)",months:Ie,ghost:!0,prob:vt.transition_probability})}}),!$e.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const _t=$e.reduce(function(Ue,wt){return Ue+wt.months},0)||1,ct=Ge??0;let ft=0,it=0;const Ht=$e.map(function(Ue){const wt=ft;Ue.ghost||(it+=Ue.months),ft+=Ue.months;const At={stage:Ue.stage,name:Ue.name,months:Math.round(Ue.months),ghost:!!Ue.ghost,live:!!Ue.live,prob:Ue.prob,left:wt/_t*100,width:Math.max(2,Ue.months/_t*100)},It=Ee(Ue.start),vt=Ee(Ue.end);return At.start=It!=null?re(It):re(ct+wt/12),At.end=vt!=null?re(vt):"",At.predicted=It==null,At}),Q=$e[$e.length-1],he=$e.some(function(Ue){return Ue.ghost}),et=Q&&Q.end?Q.end:re(ct+_t/12);return{segs:Ht,axisStart:re(ct),axisEnd:et,nowPct:he?it/_t*100:null}}function He(I){return(I.stages||[]).some(function(ee){return ee.is_current})}const Ke=Vue.computed(function(){const I=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!I.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let ee=null;for(let Ce=I.length-1;Ce>=0;Ce--)if(He(I[Ce])){ee=I[Ce];break}return ee||(ee=I[I.length-1]),Ne(ee.stages,!0)});function qt(I){const ee=I&&I.stages?I.stages:[];if(!ee.length)return"";const Ce=ee[0]&&ee[0].start?String(ee[0].start).slice(0,4):"",Ie=ee[ee.length-1]||{},We=Ie.end?String(Ie.end).slice(0,4):Ie.start?String(Ie.start).slice(0,4):"";return Ce||We?Ce?Ce+"–"+We:We:""}const pt=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(ee){return!He(ee)}).map(function(ee){return{label:ee.label,years:qt(ee),segs:Ne(ee.stages,!1).segs}})}),Tt=ye,xe=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(ee){const Ce={};ye.forEach(function(We){Ce[We]=0});let Ie=null;return(ee.stages||[]).forEach(function(We){Ce[We.stage]!=null&&(Ce[We.stage]+=Number(We.duration_months)||0),We.is_current&&(Ie=We.stage)}),{label:ee.label,sum:Ce,cur:Ie}})}),qe=Vue.computed(function(){let I=0;return xe.value.forEach(function(ee){ye.forEach(function(Ce){ee.sum[Ce]>I&&(I=ee.sum[Ce])})}),I||1}),je=Vue.computed(function(){const I=t.merrillSnapshots&&t.merrillSnapshots.value||[],ee=[];return I.forEach(function(Ce){const Ie=ee[ee.length-1];Ie&&Ie.stage===Ce.stage?(Ie.count++,Ie.last=Ce.timestamp):ee.push({stage:Ce.stage,name:Ce.stage_name||W(Ce.stage),count:1,first:Ce.timestamp,last:Ce.timestamp})}),ee}),Oe=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Xe=Vue.computed(function(){const I=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,I/Oe.value*100))+"%",background:I>100?"linear-gradient(90deg, "+me()+", var(--color-warning))":me()}}),Qe=Vue.computed(function(){return 100/Oe.value*100}),Ye=Vue.computed(function(){const I=ae().predicted_end;if(!I)return"";if(typeof I=="string")return I;const ee=I.optimistic||I.earliest||"",Ce=I.pessimistic||I.latest||"";return ee&&Ce?ee+" ~ "+Ce:I.base||I.mid||ee||Ce||""});var lt=22;function yt(I){return"color-mix(in srgb, "+I+" "+lt+"%, var(--surface-card))"}function Et(I){const ee=V(I.stage);return I.ghost?{left:I.left+"%",width:I.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+ee,background:"repeating-linear-gradient(45deg, "+yt(ee)+" 0, "+yt(ee)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:I.left+"%",width:I.width+"%",background:yt(ee),color:"var(--text-primary)",borderLeft:"3px solid "+ee}}function Ft(I){const ee=[I.name];return I.start&&ee.push((I.predicted?"预计起始 ":"起始 ")+I.start+(I.end?" → "+I.end:"")),I.months&&ee.push("约 "+I.months+" 个月"),I.ghost&&ee.push("预测(尚未发生)"),I.prob!=null&&ee.push("转移概率 "+(I.prob*100).toFixed(0)+"%"),ee.join(" · ")}function aa(I,ee){const Ce=V(I),Ie=Math.max(.28,ee/qe.value),We=Math.round(14+30*Ie);return{background:"color-mix(in srgb, "+Ce+" "+We+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...t,todayText:E,tradingStatus:C,merrillNext:q,todayFocus:F,todaySignals:D,merrillConfigOpen:g,getTimelineStageColor:V,getTimelineStageName:W,getTimelineStageDesc:O,mcHistView:ge,mcCurrentBand:Ke,mcHistoryBands:pt,mcStageKeys:Tt,mcMatrix:xe,mcTrailRuns:je,mcProgStyle:Xe,mcAvgMark:Qe,mcEndRange:Ye,mcSegStyle:Et,mcSegTitle:Ft,mcMxCellStyle:aa,merrillTimeline:d,timelineLoading:i,showTimelineStage:h,execHistory:K,execSummary:A,execLoading:L,execError:H,execDays:$,execTaskFilter:Z,execStatusFilter:le,execTaskOptions:te,execSuccessClass:R,loadExecutionData:y,execRateClass:s,execPlan:X,execStatus:P,execResults:b,execTraceDate:v,execTraceSteps:k,execTraceLoading:c,execResultsDates:oe,execCountdownText:J,execNextRunText:M,execPhaseText:U,execStatusIcon:ie,execLastDate:fe,execVisibleClass:Se,execVisibleText:Y,loadExecutionTrace:Te}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
                <div v-if="currentPage === 'system' || currentPage === 'ops'" key="system" class="system-page-root">
                    <!-- V6.1 (PRD-6.1 F3): 移除页内标题 (由中栏分组导航/面包屑承载) -->
                    <div v-if="currentSubPage === 'status'" class="card system-status-card">
                        <div class="card-title flex-between">
                            <span>状态概览</span>
                            <div class="flex-c-gap-8">
                                <span class="text-sm-secondary" v-if="dashboardData.latest_date"><qc-icon name="calendar" :size="14" /> {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.stockData') }}</div>
                                    <div class="status-value color-primary">{{ stockCount || '---' }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="target" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.strategyData') }}</div>
                                    <div class="status-value color-primary">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'autoeval'" title="点击配置 AI 自动评估">
                                <div class="status-icon"><qc-icon name="bot" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.aiService') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? t('system.ok') : t('system.needsConfig') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon"><qc-icon name="message-circle" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.feishuPush') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? t('system.configured') : t('system.notConfigured') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
                                <div class="status-icon"><qc-icon name="bar-chart-3" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tushare') }}</div>
                                    <!-- V6.6: 已连接/未连接 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ tushareStatus === 'connected' ? t('system.connected') : t('system.notConnected') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="calendar" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tradeCalendar') }}</div>
                                    <div class="status-value color-primary">{{ tradeDateCount || '---' }} {{ t('system.unitDays') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="sparkles" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.poolStocks') }}</div>
                                    <div class="status-value color-primary">{{ currentPoolSize }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- V5.0 (T-5.0.6): 健康与可靠性面板 — 数据新鲜度/自愈时间线/启动自检/数据源可用性 -->
                        <div class="card mt-24">
                            <div class="card-title flex-between">
                                <span><qc-icon name="activity" :size="14" /> 健康与可靠性 <span class="text-xs-tertiary" v-if="healthUpdatedAt">· 更新于 {{ healthUpdatedAt }}</span></span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <div class="text-sm qc-text-error" v-if="healthError">{{ healthError }}</div>

                            <!-- 启动自检摘要 -->
                            <div class="flex-c-gap-8 mb-12" v-if="startupReport">
                                <span class="health-badge qc-text-success">自检 ok {{ startupReport.ok_count }}</span>
                                <span class="health-badge qc-text-warning" v-if="startupReport.warn_count">warn {{ startupReport.warn_count }}</span>
                                <span class="health-badge qc-text-error" v-if="startupReport.fail_count">fail {{ startupReport.fail_count }}</span>
                                <span class="health-badge" :class="startupReport.healthy ? 'qc-text-success' : 'qc-text-error'">{{ startupReport.healthy ? '健康' : '不健康' }}</span>
                                <span class="text-xs-tertiary" v-if="startupReport.ts">· {{ startupReport.ts }}</span>
                            </div>
                            <div class="text-sm-tertiary mb-12" v-else>启动自检报告尚未生成（服务重启后自动生成）</div>

                            <!-- 数据新鲜度 -->
<!-- 数据新鲜度 -->
                            <!-- V5.3.0 (T-5.3.6.2): 数据旧了 告警条 -->
                            <div v-if="staleAssetCount > 0" class="health-stale-banner">
                                <qc-icon name="alert-triangle" :size="14" /> 数据已过期: {{ staleAssetCount }} 项资产 (点击刷新数据源)
                                <el-button size="small" class="ml-8" @click="refreshHealth">重新检查</el-button>
                            </div>
                            <div class="health-section-title"><qc-icon name="calendar" :size="14" /> 数据新鲜度</div>
                            <el-table :data="freshnessData.items" size="small" v-loading="healthLoading" style="width:100%">
                                <el-table-column prop="name" label="资产" min-width="150" />
                                <el-table-column label="状态" width="90">
                                    <template #default="{ row }">
                                        <!-- V6.6: statusColor() 函数枚举映射色，保留内联 -->
                                        <span :style="{color: statusColor(row.status)}">{{ statusLabel(row.status) }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="latest_date" label="最新日期" width="120" />
                                <el-table-column prop="last_update" label="最后更新" min-width="160" />
                                <el-table-column prop="age_hours" label="距今(时)" width="90" />
                            </el-table>
                            <div class="text-sm-tertiary mt-8" v-if="!freshnessData.items || !freshnessData.items.length">暂无新鲜度数据 — 数据资产在运行时自动登记</div>

                            <!-- 自愈时间线 -->
                            <div class="health-section-title mt-20"><qc-icon name="settings" :size="14" /> 自愈时间线（最近 {{ healHistory.length }} 次）</div>
                            <div v-if="healHistory.length" class="heal-list">
                                <div v-for="(h, i) in healHistory" :key="i" class="heal-row">
                                    <span class="text-xs-tertiary heal-ts">{{ h.ts }}</span>
                                    <span class="heal-action">{{ h.action }}</span>
                                    <span class="text-xs-tertiary">{{ h.target }}</span>
                                    <span :class="h.ok ? 'qc-text-success' : 'qc-text-error'"><qc-icon :name="h.ok ? 'check' : 'x'" :size="14" /></span>
                                    <span class="text-xs-tertiary heal-summary">{{ h.summary }}</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无自愈记录 — 巡检随调度健康检查自动执行</div>

                            <!-- 数据源可用性 -->
                            <div class="health-section-title mt-20"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                            <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                    <span class="source-name">{{ s.name }}</span>
                                    <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                    <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                    <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                        </div>

                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 操作审计 — 自 about 归位至运行监控 (仅管理员可见) -->
                        <div class="card mt-24" v-if="currentUser?.role === 'admin'">
                            <div class="card-title flex-between">
                                <span><qc-icon name="shield" :size="14" /> 操作审计 <span class="text-sm-tertiary">(管理员)</span></span>
                                <el-button size="small" @click="loadAuditLogs" :loading="auditLoading">刷新</el-button>
                            </div>
                            <div v-if="auditLogs.length" class="audit-list">
                                <div v-for="l in auditLogs" :key="l.id" class="audit-row">
                                    <span class="audit-action">{{ l.action }}</span>
                                    <span class="text-sm">{{ l.username }}</span>
                                    <span class="text-sm-tertiary">{{ l.ts }}</span>
                                    <span class="text-sm-tertiary audit-detail">{{ l.detail }}</span>
                                </div>
                            </div>
                            <div v-else class="text-sm-tertiary m-0-0-12">暂无审计记录</div>
                        </div>

                    </div>

                    <!-- V6.9.1-fix2: 配置保存独立子页 (自 status 拆出) -->
                    <div v-else-if="currentSubPage === 'config'">
                        <!-- v3.16 (FR-3.16.1): 配置管理 — 通用操作栏 (靠上放置, v3.17 UI优化) -->
                        <div class="card">
                            <div class="card-title flex-between">
                                <span>{{ t('system.configManage') }}</span>
                                <span class="text-xs-tertiary" v-if="lastSavedTime">{{ t('system.lastSaved') }}{{ lastSavedTime }}</span>
                            </div>
                            <div class="flex-wrap-gap-10">
                                <el-button type="primary" :loading="configSaving" @click="saveAllConfig">{{ t('system.saveAll') }}</el-button>
                                <el-button @click="resetAllConfig">{{ t('system.reset') }}</el-button>
                                <el-button @click="exportConfig">{{ t('system.exportConfig') }}</el-button>
                                <el-button @click="$refs.importFileInput && $refs.importFileInput.click()">{{ t('system.importConfig') }}</el-button>
                                <input class="hide" ref="importFileInput" type="file" accept=".json,application/json" @change="importConfig"/>
                            </div>
                            <div class="text-sm-tertiary-mt10">保存全部：将 AI / 数据源 / 飞书 / 限流 / 主题 / 图标等配置一并写入后端；重置：从后端重新加载已保存配置；导出 / 导入：配置文件整体备份与迁移。</div>
                        </div>




                    <!-- 访问限速配置 -->
                    <div class="card mt-24">
                        <div class="card-title"><qc-icon name="gauge" :size="14" /> 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div class="text-sm-tertiary-mt8">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): 外观设置/语言/K线显示已迁往 feature「界面与个性化」区 (个性化归位) -->
                    <!-- V6.1 (PRD-6.1 F4): 移除图标系统切换卡片 — 导航图标统一为一套, 不再提供四套切换 -->
                </div>

                    <!-- V6.0 (P1-3): health — 数据源健康独立子页 -->
                    <div v-else-if="currentSubPage === 'health'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bar-chart-3" :size="14" /> 数据源健康</span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <div class="text-sm qc-text-error" v-if="healthError">{{ healthError }}</div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                                <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                    <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                        <span class="source-name">{{ s.name }}</span>
                                        <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                        <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                        <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="refresh" :size="14" /> 路由状态</div>
                                <div class="usage-src-grid" v-if="(healthDetail.data_sources || []).length">
                                    <div class="usage-src-card" :class="ds.routing_status === 'cooling' ? 'is-degraded' : ''" v-for="(ds, i) in healthDetail.data_sources" :key="i">
                                        <div class="usage-src-head">
                                            <span class="usage-src-name">{{ ds.name }}</span>
                                            <span :class="ds.routing_status === 'cooling' ? 'chip-warning' : 'chip-success'">{{ ds.routing_status === 'cooling' ? '冷却中' : '参与路由' }}</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">成功率</span>
                                            <span class="usage-src-row-value">{{ ds.success_rate ?? '--' }}%</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">平均延迟</span>
                                            <span class="usage-src-row-value">{{ ds.avg_latency_ms ?? '--' }}ms</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.consecutive_failures">
                                            <span class="usage-src-row-label">连续失败</span>
                                            <span class="usage-src-row-value">{{ ds.consecutive_failures }} 次</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.switch_reason">
                                            <span class="usage-src-row-label">最近切换</span>
                                            <span class="usage-src-row-value" :title="ds.last_switch_at">{{ ds.switch_reason }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="usage-ai-empty" v-else>暂无数据源调用记录（服务刚重启时为空，随调用自动累计）</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="activity" :size="14" /> 数据健康度</div>
                                <div class="today-health-strip">
                                    <div v-if="healthRows.length === 0" class="today-health-empty">{{ t('strategies.noSourceCall') }}</div>
                                    <div v-for="s in healthRows" :key="s.source" class="today-health-item" :class="{ 'is-stale': s.stale }" :title="s.last_fetch ? '最近成功: ' + s.last_fetch : '尚无成功调用'">
                                        <span class="today-health-dot" :class="healthClass(s)"></span>
                                        <span class="today-health-name">{{ s.name }}</span>
                                        <span class="today-health-rate">{{ s.success_rate != null ? s.success_rate + '%' : '—' }}</span>
                                        <span class="today-health-lat" v-if="s.avg_latency_ms != null">{{ s.avg_latency_ms }}ms</span>
                                        <span class="today-health-age" v-if="s.data_age_hours != null" :class="{ 'is-stale': s.stale }">{{ fmtAge(s.data_age_hours) }}</span>
                                        <span class="today-health-calls">{{ s.calls }}次</span>
                                        <span v-if="s.degraded" class="today-health-badge">degraded</span>
                                        <span v-if="s.stale" class="today-health-badge is-stale"><qc-icon name="clock" :size="12" /> 超期</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): schedule — 调度任务独立子页 -->
                    <div v-else-if="currentSubPage === 'schedule'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 调度任务</span>
                                <el-button size="small" @click="loadHealthDetail">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="Object.keys(healthDetail.scheduler_tasks || {}).length">
                                <div class="sys-health-card" v-for="(t, k) in healthDetail.scheduler_tasks" :key="k">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ t.name || k }}</span>
                                        <span :class="t.last_status === 'success' ? 'chip-success' : t.last_status === 'failed' ? 'chip-danger' : 'chip-info'">{{ t.last_status === 'success' ? '正常' : t.last_status === 'failed' ? '失败' : '未运行' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近运行</span>
                                        <span class="sys-health-meta">{{ t.last_run || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近成功</span>
                                        <span class="sys-health-meta">{{ t.last_success || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed'">
                                        <span class="text-sm-tertiary">连续失败</span>
                                        <span class="sys-health-meta">{{ t.consecutive_failures || 0 }} 次</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed' && t.detail">
                                        <span class="text-sm-tertiary">失败原因</span>
                                        <span class="sys-health-meta" :title="t.detail">{{ (t.detail || '').slice(0, 60) }}{{ (t.detail || '').length > 60 ? '…' : '' }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无调度任务运行记录（服务刚重启时为空，随定时任务自动填充）</div>
                        </div>
                        <div class="card mt-14">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 任务队列</span>
                                <el-button size="small" text @click="loadJobQueue">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="jobQueue.length">
                                <div class="sys-health-card" v-for="j in jobQueue" :key="j.job_id">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ j.task_type }}</span>
                                        <span :class="j.status === 'completed' ? 'chip-success' : (j.status === 'running' || j.status === 'pending') ? 'chip-info' : 'chip-danger'">{{ jobStatusText(j.status) }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">进度</span>
                                        <el-progress :percentage="Number(j.progress) || 0" :stroke-width="10" :status="j.status === 'failed' ? 'exception' : (j.status === 'completed' ? 'success' : '')" style="width: 160px"></el-progress>
                                    </div>
                                    <div class="sys-health-row" v-if="j.message">
                                        <span class="text-sm-tertiary">状态</span>
                                        <span class="sys-health-meta">{{ j.message }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="j.status === 'running' || j.status === 'pending'">
                                        <el-button size="small" type="danger" text @click="cancelJob(j.job_id)">取消任务</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无队列任务（批量评估/回测等长任务会出现在这里）</div>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): guard — AI 事实护栏独立子页 -->
                    <div v-else-if="currentSubPage === 'guard'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="search" :size="14" /> AI 事实护栏审计</span>
                                <el-button size="small" :loading="factCheckRunning" @click="triggerFactCheck">立即抽查</el-button>
                            </div>
                            <div v-if="factCheck" class="sys-health-grid">
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">抽查日期</div>
                                    <div class="sys-health-big">{{ factCheck.date || '—' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">检查数字</div>
                                    <div class="sys-health-big">{{ factCheck.checked ?? 0 }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">通过率</div>
                                    <div class="sys-health-big" :class="(factCheck.pass_rate ?? 100) >= 90 ? 'color-primary' : ''">{{ factCheck.pass_rate != null ? factCheck.pass_rate + '%' : '--' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">未验证</div>
                                    <div class="sys-health-big">{{ factCheck.unverified ?? 0 }}</div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无事实护栏审计报告（点击"立即抽查"生成）</div>
                            <div v-if="factCheck && factCheck.failures && factCheck.failures.length" class="sys-health-row">
                                <span class="text-sm-tertiary">失败明细</span>
                                <span class="sys-health-meta">{{ factCheck.failures.length }} 条（最近 {{ factCheck.failures[0].number }} 等）</span>
                            </div>
                        </div>
                    </div>

                    <!-- autoeval: 自动评估配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title"><qc-icon name="bot" :size="14" /> 自动评估配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select class="w-select-md" v-model="autoEvaluateConfig.schedule_type" @change="saveAutoEvaluateConfig">
                                            <el-option label="每个交易日" value="daily" />
                                            <el-option label="每周一" value="weekly" />
                                            <el-option label="每月1号" value="monthly" />
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="执行时间">
                                        <el-time-picker class="w-160" v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" @change="saveAutoEvaluateConfig"/>
                                    </el-form-item>
                                    <el-form-item label="评估范围">
                                        <el-radio-group v-model="autoEvaluateScope" @change="saveAutoEvaluateConfig">
                                            <el-radio label="watchlist">我的自选</el-radio>
                                            <el-radio label="new_entries">最新交易日新入池</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="结果推送">
                                        <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" @change="saveAutoEvaluateConfig" />
                                    </el-form-item>
                                    <el-form-item v-if="autoEvaluateConfig.push_to_feishu" label="Webhook">
                                        <el-input class="w-100-max420" v-model="autoEvaluateConfig.feishu_webhook" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..." @change="saveAutoEvaluateConfig"/>
                                    </el-form-item>
                                </template>
                            </el-form>
                        </div>

                    <!-- v3.16 (FR-3.16.1): 飞书推送配置 — 独立 Webhook 配置 + 测试发送 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="message-circle" :size="14" /> 飞书推送配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="Webhook">
                                <el-input class="max-w-460" v-model="feishuConfig.webhook_url" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" @click="saveFeishuConfig" :loading="feishuSaving"><qc-icon name="hard-drive" :size="14" /> 保存配置</el-button>
                                <el-button size="small" @click="testFeishuWebhook" :loading="feishuTestStatus === 'testing'"><qc-icon name="flask-conical" :size="14" /> 测试发送</el-button>
                                <span class="ml-10-sm" v-if="feishuTestMessage" :class="feishuTestMessage.includes('成功') || feishuTestMessage.includes('已发送') ? 'qc-text-success' : 'qc-text-error'">{{ feishuTestMessage }}</span>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- AI 模型管理 (v3.14 厂商化: 以厂商为主配置卡, 卡内配 API 后管理多个模型名) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="bot" :size="14" /> AI 模型管理</div>
                        <p class="text-sm-secondary-m0-16">以厂商为主配置卡，卡内配置 API（地址+密钥+超时）后选择多个模型名；按数组顺序（厂商 → 模型）串行调用，首个可用模型返回结果。</p>
                        <div class="flex-gap-8-mb16-wrap">
                            <el-button size="small" type="primary" @click="loadAiVendors"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllVendorModels" :loading="testingAllModels"><qc-icon name="flask-conical" :size="14" /> 探测全部</el-button>
                            <!-- v3.16 (FR-3.16.1): AI 连接测试入口 (testAiApi) -->
                            <el-button size="small" type="primary" @click="testAiApi" :loading="aiLoading"><qc-icon name="zap" :size="14" /> 连接测试</el-button>
                            <el-button size="small" type="primary" @click="saveAiVendors" :loading="savingAiModels"><qc-icon name="hard-drive" :size="14" /> 保存</el-button>
                            <el-dropdown class="ml-auto" trigger="click" @command="(cmd) => cmd === '__custom__' ? addCustomVendor() : addVendorFromCatalog(cmd)">
                                <el-button size="small" type="primary"><qc-icon name="plus" :size="14" /> 新增厂商</el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-if="!aiCatalog.vendors || aiCatalog.vendors.length===0" disabled>加载目录中…</el-dropdown-item>
                                        <el-dropdown-item v-for="(c,i) in aiCatalog.vendors" :key="c.vendor_key" :command="c.vendor_key" :divided="i>0 && c.kind !== aiCatalog.vendors[i-1].kind">{{ c.name }} <el-tag class="ml-6" size="small">{{ c.kind }}</el-tag></el-dropdown-item>
                                        <el-dropdown-item command="__custom__" divided>自定义厂商</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="text-center-danger-pad16" v-if="aiModelsError"><qc-icon name="alert-triangle" :size="14" /> {{ aiModelsError }} <el-button size="small" @click="loadAiVendors">重试</el-button></div>
                        <div class="text-center-tertiary-pad20" v-if="!aiModelsError && aiVendors.length===0">加载中...</div>
                        <div v-if="!aiModelsError && aiVendors.length>0">
                        <div v-for="(v,vi) in aiVendors" :key="v.vendor_key" class="card mb-12">
                            <div class="card-title flex-between-wrap-gap6">
                                <span class="flex-c-gap-6-wrap">
                                    {{ v.name }}
                                    <el-tag size="small" :type="v.kind==='CodingPlan' ? 'warning' : v.kind==='国外' ? 'info' : v.kind==='国内' ? 'success' : 'primary'">{{ v.kind }}</el-tag>
                                    <el-tag v-if="v.tier" size="small" type="warning">套餐: {{ v.tier }}</el-tag>
                                    <span class="text-sm-tertiary" v-if="v.locked"><qc-icon name="lock" :size="12" /></span>
                                    <a class="text-sm-link" v-if="v.website" :href="v.website" target="_blank" rel="noopener">官网 ↗</a>
                                </span>
                                <el-button size="small" type="danger" @click="removeVendor(v)"><qc-icon name="x" :size="14" /> 删除厂商</el-button>
                            </div>
                            <el-form class="mt-2" label-width="90px" size="small">
                                <el-form-item label="厂商名"><el-input v-model="v.name" :disabled="v.locked" placeholder="厂商显示名"/></el-form-item>
                                <el-form-item label="类型">
                                    <el-select class="w-select-md" v-model="v.kind" :disabled="v.locked" size="small">
                                        <el-option label="国内" value="国内"/><el-option label="国外" value="国外"/>
                                        <el-option label="CodingPlan" value="CodingPlan"/><el-option label="自定义" value="自定义"/>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐档位"><el-input class="w-220" v-model="v.tier" :disabled="v.locked" placeholder="CodingPlan: Lite/Pro"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="v.base_url" placeholder="https://.../v1"/></el-form-item>
                                <el-form-item label="API Key">
                                    <el-input :model-value="v._editing ? v.api_key : v._masked" :disabled="!v._editing" @update:model-value="val => { if (v._editing) { v.api_key = val; } else { v._masked = val; } }" placeholder="厂商级密钥，卡内模型共用">
                                        <template #suffix>
                                            <el-button size="small" :type="v._editing ? 'warning' : 'primary'" plain @click="toggleVendorEdit(v)" style="margin-left:4px"><qc-icon name="lock" :size="14" /> {{ v._editing ? '锁定' : '编辑密钥' }}</el-button>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="v._revealed ? '收起（重新掩码）' : '查看完整密钥（需密码）'" @click="toggleVendorKeyReveal(v)" v-html="sanitizeHtml(viewIcon(v._revealed))"></span>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="超时(秒)"><el-input-number v-model="v.timeout" :min="10" :max="300" size="small"/></el-form-item>
                                <el-form-item label="模型列表">
                                    <div class="w-100">
                                        <div class="model-row" v-for="(m,mi) in v.models" :key="vi + '-' + mi">
                                            <span class="model-index">{{ mi+1 }}</span>
                                            <el-switch v-model="m.enabled" size="small"/>
                                            <el-input class="w-220" v-model="m.name" :disabled="m.locked" size="small" placeholder="模型名"/>
                                            <span class="text-sm-ellipsis" v-if="m.testResult!==undefined" :class="m.testResult.success?'qc-text-success':'qc-text-error'"><qc-icon :name="m.testResult.success ? 'check' : 'x'" :size="13" /> {{ m.testResult.message }}</span>
                                            <el-button size="small" type="primary" :loading="m._testing" @click="testVendorModel(v,m)"><qc-icon name="flask-conical" :size="14" /> 测试</el-button>
                                            <el-button v-if="!m.locked" size="small" type="danger" @click="removeVendorModel(v,mi)"><qc-icon name="x" :size="14" /></el-button>
                                        </div>
                                        <div class="flex-gap-8-mt8">
                                            <el-button size="small" @click="addVendorModel(v)"><qc-icon name="plus" :size="14" /> 添加模型</el-button>
                                            <el-button size="small" :loading="v._fetching" @click="fetchVendorModels(v)"><qc-icon name="radio-tower" :size="14" /> 获取模型列表</el-button>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): notification — 通知中心独立子页 (自 autoeval 拆出, 逻辑不变) -->
                    <div v-else-if="currentSubPage === 'notification'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bell" :size="14" /> 通知中心 <span class="text-sm-tertiary">自定义预警规则 · 投递历史 · 通道与静默</span></span>
                                <span class="text-sm-tertiary" v-if="ncMsg">{{ ncMsg }}</span>
                            </div>
                            <div class="flex-gap-8-mb16">
                                <el-button :type="ncTab === 'rules' ? 'primary' : ''" size="small" @click="onNcTab('rules')"><qc-icon name="scroll-text" :size="14" /> 通知规则</el-button>
                                <el-button :type="ncTab === 'history' ? 'primary' : ''" size="small" @click="onNcTab('history')"><qc-icon name="radio-tower" :size="14" /> 投递历史</el-button>
                                <el-button :type="ncTab === 'channels' ? 'primary' : ''" size="small" @click="onNcTab('channels')"><qc-icon name="moon" :size="14" /> 通道与静默</el-button>
                            </div>

                            <!-- 通知规则 Tab -->
                            <div v-if="ncTab === 'rules'">
                                <div class="flex-gap-12-mb12">
                                    <el-input class="w-140" v-model="ncNewCode" placeholder="股票代码 600519" clearable size="small"/>
                                    <el-select class="w-select" v-model="ncNewType" size="small">
                                        <el-option label="价格突破" value="price_above" />
                                        <el-option label="价格跌破" value="price_below" />
                                        <el-option label="涨跌幅超" value="pct_change" />
                                        <el-option label="量比异动" value="volume_surge" />
                                        <el-option label="入选股票池" value="new_pool" />
                                    </el-select>
                                    <el-input class="w-120" v-model="ncNewThreshold" placeholder="阈值" size="small"/>
                                    <el-button type="primary" size="small" @click="addAlertRule" :loading="ncLoading">+ 添加规则</el-button>
                                </div>
                                <el-table :data="ncRules" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="stock_code" label="股票" width="110" />
                                    <el-table-column label="类型" width="110">
                                        <template #default="s">
                                            {{ ncTypeLabel(s.row.rule_type) }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="threshold" label="阈值" width="100" />
                                    <el-table-column label="启用" width="90">
                                        <template #default="s">
                                            <el-switch :model-value="s.row.enabled" size="small" @change="toggleAlertRule(s.row)" />
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="created_at" label="创建时间" min-width="150" />
                                    <el-table-column label="操作" width="80">
                                        <template #default="s">
                                            <el-button size="small" type="danger" text @click="removeAlertRule(s.row)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>

                            <!-- 投递历史 Tab -->
                            <div v-if="ncTab === 'history'">
                                <el-table :data="ncHistory" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="created_at" label="时间" width="150" />
                                    <el-table-column prop="event_type" label="类型" width="90" />
                                    <el-table-column prop="title" label="标题" min-width="180" show-overflow-tooltip />
                                    <el-table-column prop="channel" label="通道" width="90" />
                                    <el-table-column prop="recipient" label="收件人" width="120" />
                                    <el-table-column label="结果" width="90">
                                        <template #default="s">
                                            <span :class="s.row.ok ? 'qc-text-success' : 'qc-text-error'">
                                                {{ s.row.ok ? '成功' : '失败' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <p class="text-sm-tertiary mt-8" v-if="ncHistory.length === 0 && !ncLoading">暂无投递记录</p>
                            </div>

                            <!-- 通道与静默 Tab -->
                            <div v-if="ncTab === 'channels'">
                                <el-table :data="ncChannels" size="small" v-loading="ncLoading" style="width:100%" class="mb-12">
                                    <el-table-column prop="name" label="通道" width="120" />
                                    <el-table-column label="状态" width="140">
                                        <template #default="s">
                                            <span :class="s.row.available ? 'qc-text-success' : 'qc-text-muted'">
                                                {{ s.row.available ? '可用' : '未配置' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="configured" label="已配置" width="90">
                                        <template #default="s">
                                            <span :class="s.row.configured ? 'qc-text-success' : 'qc-text-muted'">{{ s.row.configured ? '是' : '否' }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div class="flex-gap-12-mb12">
                                    <el-switch v-model="ncSilence" active-text="静默预警" inactive-text="正常推送" @change="applySilence"/>
                                    <span class="text-sm-secondary">静默时长(分钟):</span>
                                    <el-input-number v-model="ncSilenceMinutes" :min="1" :max="1440" size="small" />
                                    <el-button size="small" @click="applySilence"><qc-icon name="moon" :size="14" /> 静默 {{ ncSilenceMinutes }} 分钟</el-button>
                                    <el-button size="small" v-if="ncSilence" @click="clearSilence">恢复推送</el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span><qc-icon name="bar-chart-3" :size="14" /> 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- 6.1.2 (B5): 数据新鲜度 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="activity" :size="14" /> 数据新鲜度</span>
                            <el-button size="small" text @click="loadFreshness"><qc-icon name="refresh" :size="12" /> 刷新</el-button>
                        </div>
                        <div v-if="freshnessLoading" class="qc-glossary-loading">加载中…</div>
                        <el-table v-else :data="freshnessItems" size="small" max-height="320">
                            <el-table-column prop="label" label="数据表" width="120" />
                            <el-table-column prop="source" label="来源" width="110" />
                            <el-table-column label="最后成功" width="150">
                                <template #default="{ row }">{{ row.last_success ? row.last_success.slice(5, 16) : '-' }}</template>
                            </el-table-column>
                            <el-table-column label="行数" width="80">
                                <template #default="{ row }">{{ row.rows != null ? row.rows : '-' }}</template>
                            </el-table-column>
                            <el-table-column label="间隔" width="80">
                                <template #default="{ row }">{{ row.expected_hours }}h</template>
                            </el-table-column>
                            <el-table-column label="状态" width="90">
                                <template #default="{ row }">
                                    <span :class="row.stale ? 'qc-text-error' : 'qc-text-success'">{{ row.stale ? '过期' : '正常' }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <!-- 数据同步入口 (syncStockData) -->
                    <div class="card mb-14">
                        <div class="card-title"><qc-icon name="refresh" :size="14" /> 数据同步</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-button type="primary" :loading="syncingData" @click="syncStockData"><qc-icon name="download" :size="14" /> 同步股票数据</el-button>
                            <span class="text-sm-secondary">从 Tushare 拉取最新行情并更新本地缓存</span>
                        </div>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="external-link" :size="14" /> sxsc-tushare（券商版）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.sxsc_tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.sxsc_tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.sxsc_tushare._revealed ? datasourceConfig.sxsc_tushare.token : datasourceConfig.sxsc_tushare._masked" :disabled="!datasourceConfig.sxsc_tushare._editing" @update:model-value="val => { if (datasourceConfig.sxsc_tushare._editing) { datasourceConfig.sxsc_tushare.token = val; if (!datasourceConfig.sxsc_tushare._revealed) datasourceConfig.sxsc_tushare._masked = val; } }" placeholder="输入 sxsc-tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.sxsc_tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('sxsc_tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.sxsc_tushare._editing))"></span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.sxsc_tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('sxsc_tushare')" :loading="datasourceStatus.sxsc_tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="radio-tower" :size="14" /> tushare（标准版 Pro）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.tushare._revealed ? datasourceConfig.tushare.token : datasourceConfig.tushare._masked" :disabled="!datasourceConfig.tushare._editing" @update:model-value="val => { if (datasourceConfig.tushare._editing) { datasourceConfig.tushare.token = val; if (!datasourceConfig.tushare._revealed) datasourceConfig.tushare._masked = val; } }" placeholder="输入 Tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.tushare._editing))"></span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Endpoint">
                                <el-input v-model="datasourceConfig.tushare.endpoint" placeholder="http://api.tushare.pro" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('tushare')" :loading="datasourceStatus.tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- akshare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="languages" :size="14" /> akshare（开源免费）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.akshare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.akshare === 'connected'">可用</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.akshare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <div class="text-base-secondary-pad">
                            开源免费数据接口，从东方财富等公开网站获取数据，无需 Token
                        </div>
                        <el-form label-width="80px">
                            <el-form-item>
                                <el-button @click="testDatasource('akshare')" :loading="datasourceStatus.akshare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                    <!-- feature 子页: 功能开关与配置 -->
                    <div v-else-if="currentSubPage === 'feature'">
                        <div class="card">
                        <div class="card-title"><qc-icon name="sliders-horizontal" :size="14" /> 策略筛选</div>
                        <div class="mb-12">
                            <el-checkbox-group v-model="strategyFilter.selected" @change="saveStrategyFilter">
                                <el-checkbox class="mb-6" v-for="s in strategyFilterOptions" :key="s" :label="s" border>
                                    {{ s }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="flex-c-gap-12-wrap-mb12">
                            <span class="text-base-secondary">过滤方式：</span>
                            <el-radio-group v-model="strategyFilter.mode" @change="saveStrategyFilter">
                                <el-radio label="union">并集（任一匹配）</el-radio>
                                <el-radio label="intersection">交集（全部匹配）</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="info-banner-plain">
                            <div class="mb-6-medium"><qc-icon name="search" :size="14" /> 预览匹配股票数</div>
                            <div class="flex-wrap-gap-12">
                                <span><qc-icon name="sun" :size="14" /> 日视图: <strong>{{ strategyPreviewCount.day ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 周视图: <strong>{{ strategyPreviewCount.week ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 月视图: <strong>{{ strategyPreviewCount.month ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 年视图: <strong>{{ strategyPreviewCount.year ?? '-' }}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.3.0-T8: 数据备份与恢复 -->
                    <div class="card mt-14">
                        <div class="card-title"><qc-icon name="hard-drive" :size="14" /> 数据备份与恢复</div>
                        <div class="flex-wrap-gap-10-mb12">
                            <el-button size="small" type="primary" :loading="backupCreating" @click="createBackup">立即备份</el-button>
                            <el-button size="small" @click="loadBackups">刷新列表</el-button>
                        </div>
                        <div class="max-h-220-scroll" v-if="backups.length">
                            <div class="backup-row" v-for="b in backups" :key="b.name">
                                <span><qc-icon name="clock" :size="12" /> {{ b.time }} <span class="text-xs-tertiary">({{ (b.size / 1024).toFixed(0) }} KB)</span></span>
                                <el-button size="small" type="warning" plain :disabled="currentUser?.role !== 'admin'" @click="restoreBackup(b.name)">恢复</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无备份</div>
                    </div>
                    <!-- V5.3.0 (T-5.3.5.5): 报表导出 (PDF/Excel/HTML) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="file-text" :size="14" /> 报表导出</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">量化选股日报 (当日) · 可导出 PDF / Excel / HTML</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" :loading="reportExporting === 'pdf'" @click="exportReport('pdf')">PDF</el-button>
                                <el-button size="small" :loading="reportExporting === 'excel'" @click="exportReport('excel')">Excel</el-button>
                                <el-button size="small" type="primary" :loading="reportExporting === 'html'" @click="exportReport('html')">HTML</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-if="reportExportMsg">{{ reportExportMsg }}</div>
                    </div>
                    <!-- v2.0: 美林时钟配置 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="clock" :size="14" /> 美林时钟</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong>
                            </span>
                            <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">
                                <qc-icon name="refresh" :size="14" /> 手动重评估
                            </el-button>
                        </div>
                        <div class="result-box" v-if="merrillReevalResult" :class="merrillReevalResult.includes('失败') ? 'qc-text-error' : 'qc-text-success'">
                            {{ merrillReevalResult }}
                        </div>
                        <div class="flex-c-gap-16">
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">自动刷新</label>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">间隔</label>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="300" label="5分钟" />
                                    <el-option :value="600" label="10分钟" />
                                    <el-option :value="1800" label="30分钟" />
                                    <el-option :value="3600" label="1小时" />
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <!-- v1.8.0: 数据刷新配置 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="refresh" :size="14" /> 策略数据刷新</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次刷新: <strong>{{ dataRefreshConfig.last_refresh || '—' }}</strong>
                                <span class="ml-6-sm" v-if="dataRefreshConfig.last_refresh_status" :class="dataRefreshConfig.last_refresh_status.startsWith('failed') ? 'qc-text-error' : 'qc-text-success'">
                                    {{ dataRefreshConfig.last_refresh_status.startsWith('failed') ? '失败' : '' }}
                                </span>
                            </span>
                            <el-button size="small" type="primary" @click="triggerDataReload" :loading="dataRefreshReloading">
                                <qc-icon name="refresh" :size="14" /> 手动加载
                            </el-button>
                            <el-button size="small" type="primary" @click="triggerDataPull" :loading="dataPullRunning">
                                <qc-icon name="download" :size="14" /> 手动拉取
                            </el-button>
                        </div>
                        <div class="flex-col-gap-12">
                            <!-- 定时刷新 -->
                            <div class="flex-c-gap-16-wrap">
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">定时刷新</label>
                                    <el-switch v-model="dataRefreshConfig.scheduled_enabled" @change="saveDataRefreshConfig" size="small" />
                                </div>
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">时间</label>
                                    <el-time-picker class="w-110" v-model="dataRefreshConfig.scheduled_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.scheduled_enabled" placeholder="22:00"/>
                                </div>
                            </div>
                            <!-- 文件变动监听 -->
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">文件变动监听</label>
                                <el-switch v-model="dataRefreshConfig.watch_enabled" @change="saveDataRefreshConfig" size="small" />
                                <span class="text-sm-tertiary-ml4">文件变动时自动刷新</span>
                            </div>
                            <!-- v3.12 (FR-3.12.1): 定时拉取配置 -->
                            <div class="card inner-card">
                                <div class="flex-c-gap-16-wrap">
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">定时拉取日线</label>
                                        <el-switch v-model="dataRefreshConfig.pull_enabled" @change="saveDataRefreshConfig" size="small" />
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">时间</label>
                                        <el-time-picker class="w-110" v-model="dataRefreshConfig.pull_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.pull_enabled" placeholder="22:30"/>
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">频率</label>
                                        <el-select class="w-select-sm" v-model="dataRefreshConfig.pull_frequency" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="每日" value="daily" />
                                            <el-option label="每周" value="weekly" />
                                        </el-select>
                                    </div>
                                    <div class="flex-c-gap-6" v-if="dataRefreshConfig.pull_frequency === 'weekly'">
                                        <label class="text-base-primary-nowrap">周几</label>
                                        <el-select class="w-select-xs" v-model="dataRefreshConfig.pull_weekday" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="周一" value="0" />
                                            <el-option label="周二" value="1" />
                                            <el-option label="周三" value="2" />
                                            <el-option label="周四" value="3" />
                                            <el-option label="周五" value="4" />
                                        </el-select>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt6">
                                    拉取成功后自动刷新解析器/视图 (数据自动入库)
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- V6.3 (PRD-6.3 F4): 界面与导航 — 导航形态 (V6.4: 动态页签开关已移除) -->
                    <!-- V6.6.1 (F-6.6.9): 三形态说明文案 (V6.4 P0 遗留) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="layout-dashboard" :size="14" /> 界面与导航</div>
                        <div class="flex-c-gap-12">
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">导航形态</label>
                                <el-select class="w-select-lg" :model-value="navMode" @change="onNavModeChange" size="small">
                                    <el-option value="subnav" :label="t('navMode.subnav')" />
                                    <el-option value="tree" :label="t('navMode.tree')" />
                                    <el-option value="toptab" :label="t('navMode.toptab')" />
                                </el-select>
                            </div>
                        </div>
                        <div class="text-sm-tertiary-mt8">中栏二级（默认）：左侧一级 + 中栏常驻二级，适合二级页较多的页面。侧栏树状：二级直接展开在侧栏内，节省中栏空间。顶部二级标签：二级以横排标签置于头部，适合二级项较少的页面。</div>
                    </div>
                    <!-- V6.6.1 (PRD F-6.6.8 方案A): 界面与个性化 — 外观/语言/K线显示自 status 归位至此 (个性化设置集中) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="palette" :size="14" /> 界面与个性化 <span class="text-sm-tertiary">主题 · 语言 · 图表 · 详情展示</span></div>
                        <!-- V5.16 (F2): 详情展示模式 — 内嵌双栏 / 弹窗 (移动端强制弹窗) -->
                        <div class="theme-section-label">详情展示模式 <span class="text-xs-tertiary" v-if="isNarrow">窄屏自动使用弹窗</span></div>
                        <el-radio-group :model-value="detailDisplayMode" size="small" @change="setDetailDisplayMode" :disabled="isNarrow">
                            <el-radio-button value="split">内嵌双栏</el-radio-button>
                            <el-radio-button value="dialog">弹窗</el-radio-button>
                        </el-radio-group>
                        <div class="theme-section-label">外观模式</div>
                        <el-radio-group :model-value="themeMode" size="small" @change="onThemeModeChange">
                            <el-radio-button value="light">浅色</el-radio-button>
                            <el-radio-button value="dark">深色</el-radio-button>
                            <el-radio-button value="system">跟随系统</el-radio-button>
                        </el-radio-group>
                        <div class="theme-section-label">主题色</div>
                        <div class="theme-list">
                            <div v-for="h in themeHues" :key="h" class="theme-item" :class="{active: themeHue === h}" @click="setThemeHue(h)">
                                <!-- V6.6: hueColor() 主题色相预览（配置派生色），保留内联 -->
                                <div class="theme-color" :style="{background: hueColor(h)}"></div>
                                <div class="text-base-medium">{{ hueName(h) }}
                                    <span class="text-xs-primary-ml4" v-if="themeHue === h">当前</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-c-gap-12 mt-8">
                            <span class="text-sm-secondary w-60">自定义</span>
                            <el-slider class="w-220" :model-value="themeHue" :min="0" :max="359" :step="1"
                                @change="setThemeHue" aria-label="自定义主题色相" />
                        </div>
                        <div class="section-sub-block-top">
                            <label class="text-base-primary-nowrap">{{ t('system.language') }}</label>
                            <div class="flex-c-gap-12-wrap mt-8">
                                <el-select class="w-select-md" :model-value="locale" size="small" @change="changeLanguage">
                                    <el-option value="zh-CN" :label="t('lang.zh-CN')" />
                                    <el-option value="en" :label="t('lang.en')" />
                                    <el-option value="ja" :label="t('lang.ja')" />
                                    <el-option value="ko" :label="t('lang.ko')" />
                                    <el-option value="zh-TW" :label="t('lang.zh-TW')" />
                                </el-select>
                                <span class="text-sm-tertiary-ml4">{{ t('system.languageDesc') }}</span>
                            </div>
                        </div>
                        <div class="section-sub-block-top">
                            <label class="text-base-primary-nowrap"><qc-icon name="trending-up" :size="14" /> K线显示</label>
                            <div class="flex-c-gap-12-wrap mt-8">
                                <el-switch :model-value="klineShowMinutes" @change="toggleKlineShowMinutes"
                                    active-text="显示分钟级K线" inactive-text="隐藏分钟级K线" />
                                <span class="text-sm-tertiary-ml4">股票/指数弹窗默认隐藏 60/30/15 分钟K线（数据源受限时可在此开启）</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div v-else-if="currentSubPage === 'datadict'">
                        <div class="card">
                            <div class="usage-card-title"><qc-icon name="book-open" :size="14" /> 数据字典<span class="usage-card-title-sub">字段口径单一事实源 (V5.0.1 T-5.0.14)</span></div>
                            <div class="mt-8" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
                                <el-radio-group v-model="dictCategory" size="small" @change="loadDataDict">
                                    <el-radio label="">全部</el-radio>
                                    <el-radio label="kline">K线行情</el-radio>
                                    <el-radio label="daily_basic">每日基本面</el-radio>
                                    <el-radio label="financial">财务报表</el-radio>
                                    <el-radio label="calendar">交易日历</el-radio>
                                    <el-radio label="quality">数据质量</el-radio>
                                </el-radio-group>
                                <el-button size="small" :loading="dictLoading" @click="loadDataDict">刷新</el-button>
                                <span v-if="dictError" style="color:var(--color-danger)">{{ dictError }}</span>
                            </div>
                            <el-table :data="dictData.fields" size="small" v-loading="dictLoading" style="width:100%" class="mt-8">
                                <el-table-column prop="key" label="规范字段" width="150" />
                                <el-table-column prop="label" label="名称" width="120" />
                                <el-table-column prop="category" label="分类" width="110" />
                                <el-table-column prop="type" label="类型" width="80" />
                                <el-table-column prop="unit" label="单位" width="70" />
                                <el-table-column prop="frequency" label="频率" width="90" />
                                <el-table-column prop="source" label="数据源" width="100" />
                                <el-table-column prop="description" label="说明" min-width="220" />
                            </el-table>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'user'">
                        <div v-if="currentUser?.role !== 'admin'" class="card text-center-pad40">
                            <div class="text-3xl-mb12"><qc-icon name="lock" :size="32" /></div>
                            <div class="color-secondary">仅管理员可访问此页面</div>
                        </div>
                        <div v-else>
                        <div class="card">
                            <div class="card-title"><qc-icon name="users" :size="14" /> 用户与权限</div>
                            <p class="color-secondary">用户列表: {{ userList.length }} 个用户 | 分组: {{ Object.keys(allGroups).length }} 个</p>
                        </div>

                    <!-- Tab 切换 -->
                    <div class="flex-gap-8-mb16">
                        <el-button :type="userPageTab === 'users' ? 'primary' : ''" size="small" @click="userPageTab = 'users'"><qc-icon name="users" :size="14" /> 用户列表</el-button>
                        <el-button :type="userPageTab === 'groups' ? 'primary' : ''" size="small" @click="userPageTab = 'groups'"><qc-icon name="clipboard-list" :size="14" /> 分组配置</el-button>
                    </div>

                    <!-- 用户列表 Tab -->
                    <div v-if="userPageTab === 'users'">
                    <div class="card">
                        <div class="card-title"><qc-icon name="users" :size="14" /> 用户列表 ({{ userList.length }}人)</div>
                        <div class="flex-gap-12-mb12">
                            <el-input class="w-160" v-model="userSearch" placeholder="搜索用户名..." clearable size="small"/>
                            <el-select class="w-select" v-model="groupFilter" placeholder="分组" clearable size="small">
                                <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" />
                            </el-select>
                            <el-button type="primary" size="small" @click="showAddUser = true">+ 添加用户</el-button>
                        </div>
                            <div v-for="user in filteredUsers" :key="user.username" class="user-card-enhanced" :style="{opacity: user.enabled === false ? 0.55 : 1}">
                                <div class="user-info-enhanced">
                                    <div class="user-avatar-large" :class="'avatar-' + ({'rose-red':'rose','vibrant-orange':'orange','tech-blue':'blue','classic-white':'blue','classic-red':'rose','classic-gold':'orange'}[user.theme] || 'blue')">{{ user.username.charAt(0).toUpperCase() }}</div>
                                    <div class="user-details">
                                        <div class="user-name-enhanced">
                                            {{ user.username }}
                                            <span class="user-role-tag" :class="user.role">
                                                {{ user.role === 'admin' ? '管理员' : '普通用户' }}
                                            </span>
                                            <span class="user-group-tag" :class="'group-' + (user.group === 'admin' ? 'admin' : user.group === 'guest' ? 'guest' : 'user')">{{ getGroupName(user.group || user.role) }}</span>
                                            <span v-if="user.enabled === false" class="user-disabled-badge">已禁用</span>
                                            <span v-if="user.theme" class="user-theme-dot" :class="'dot-' + (user.theme === 'rose-red' ? 'rose' : user.theme === 'vibrant-orange' ? 'orange' : 'blue')" :title="themes[user.theme]?.name || user.theme"></span>
                                        </div>
                                        <div class="user-meta-info">
                                            <span class="mr-12" v-if="user.created_at">
                                                <qc-icon name="clock" :size="12" /> 创建于: {{ new Date(user.created_at).toLocaleDateString('zh-CN') }}
                                            </span>
                                            <span v-if="user.last_login_at">
                                                <qc-icon name="clock" :size="12" /> 上次登录: {{ new Date(user.last_login_at).toLocaleString('zh-CN') }}
                                            </span>
                                            <span class="ml-12" v-if="user.login_count !== undefined">
                                                <qc-icon name="lock" :size="12" /> 登录: {{ user.login_count }}次
                                            </span>
                                        </div>
                                        <div class="user-status-row" v-if="user.username !== 'admin'">
                                            <span class="text-sm-secondary-flex6">
                                                账号状态:
                                                <el-switch v-model="user.enabled" size="small" :active-text="user.enabled ? '启用' : '禁用'"
                                                    @change="toggleUserEnabled(user)">
                                                </el-switch>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-actions-enhanced">
                                    <el-button size="small" type="primary" @click="editUser(user)">编辑</el-button>
                                    <el-button size="small" type="warning" @click="resetUserPassword(user)">重置密码</el-button>
                                    <el-button v-if="user.username !== 'admin'" size="small" type="danger" @click="deleteUser(user.username)">删除</el-button>
                                </div>
                            </div>
                    </div>
                    </div>

                    <!-- 分组配置 Tab -->
                    <div v-if="userPageTab === 'groups'">

                    <!-- 分组列表 -->
                    <div v-for="(g, gid) in allGroups" :key="gid" class="card mb-12">
                        <div class="flex-between-start-wrap">
                            <div class="flex-1-min200">
                                <div class="flex-c-gap-8-mb4">
                                    <strong class="text-lg">{{ g.name }}</strong>
                                    <span class="text-10-tertiary">{{ gid }}</span>
                                    <span class="text-10-tertiary" v-if="g.locked"><qc-icon name="lock" :size="12" /></span>
                                </div>
                                <div class="text-sm-secondary-mb6">{{ g.description }}</div>
                                <div class="text-sm-tertiary">
                                    成员 {{ getGroupMemberCount(gid) }}人 · 菜单 {{ getMenuEnabledCount(g) }}/{{ Object.keys(g.visible_menus || {}).length }}
                                </div>
                            </div>
                            <div class="flex-gap-6-shrink0">
                                <el-button v-if="!g.locked" size="small" @click="toggleGroupExpand(gid)"><qc-icon name="users" :size="14" /> {{ expandedGroups[gid] ? '收起' : '成员' }}</el-button>
                                <el-button size="small" type="primary" @click="openMenuConfig(gid)"><qc-icon name="settings" :size="14" /> 菜单</el-button>
                                <el-button v-if="!g.locked" size="small" type="danger" @click="deleteGroupConfig(gid)">删除</el-button>
                            </div>
                        </div>
                        <!-- 成员列表（锁定组始终显示，非锁定组展开后显示） -->
                        <div class="section-sub-block-top" v-if="g.locked || expandedGroups[gid]">
                            <div class="flex-wrap-gap-6">
                                <span class="chip-member" v-for="u in userList.filter(u => (u.group || u.role) === gid)" :key="u.username">
                                    {{ u.username }}<span class="color-primary" v-if="u.role==='admin'"> · 管理</span>
                                </span>
                                <span class="text-sm-tertiary" v-if="getGroupMemberCount(gid) === 0">暂无成员</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center-tertiary-pad20" v-if="Object.keys(allGroups).length === 0">暂无分组数据</div>
                    </div>

                    <!-- v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->
                    <div class="card mt-14">
                        <div class="card-title"><qc-icon name="key" :size="14" /> 开放 API <span class="text-sm-tertiary">开发者能力 (V6.6.1 决策 D8: 暂不拆分, 保留于用户与权限)</span></div>
                        <p class="color-secondary">为外部程序签发只读 API Key（库中仅存哈希，明文只展示一次；行情数据不可达时开放接口返回 degraded 占位）。</p>
                        <div class="flex-gap-8-mb12">
                            <el-input class="w-160" v-model="openApiKeyName" placeholder="Key 名称（可选）" size="small" />
                            <el-select class="w-select" v-model="openApiKeyRole" size="small">
                                <el-option label="只读" value="read" />
                            </el-select>
                            <el-button type="primary" size="small" :loading="openApiLoading" @click="generateOpenApiKey">生成 Key</el-button>
                            <el-button size="small" @click="loadOpenApiKeys">刷新</el-button>
                        </div>
                        <div v-if="newOpenApiKey" class="openapi-new-key">
                            <div class="text-sm-secondary">新 Key（仅展示一次，请立即复制保存）:</div>
                            <div class="flex-gap-6">
                                <code class="openapi-key-code">{{ newOpenApiKey }}</code>
                                <el-button size="small" @click="copyOpenApiKey">复制</el-button>
                            </div>
                        </div>
                        <div class="section-sub-block-top" v-if="openApiKeys.length">
                            <div v-for="k in openApiKeys" :key="k.id" class="openapi-key-row">
                                <div class="flex-between-wrap-gap6">
                                    <div class="flex-1-min200">
                                        <span class="openapi-key-prefix">{{ k.prefix }}...</span>
                                        <span class="text-sm-tertiary">{{ k.name }} · {{ k.role }} · {{ k.created_at }}</span>
                                        <span v-if="k.enabled === 0" class="user-disabled-badge">已吊销</span>
                                    </div>
                                    <div class="flex-gap-6-shrink0">
                                        <el-button v-if="k.enabled" size="small" type="danger" @click="revokeOpenApiKey(k)">吊销</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无 API Key</div>
                    </div>
                    <!-- /v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->

                    </div>
                    </div>
                    <!-- v3.17.5 (FR-3.17.5): 用量统计 — 资源监控/调度任务/备份磁盘/页面热度 (自系统状态移入) -->
                    <div v-else-if="currentSubPage === 'usage'">
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 运维健康摘要条 — 替代重复整块渲染, 点击跳转对应子页 -->
                        <div class="card mb-14">
                            <div class="card-title"><qc-icon name="activity" :size="14" /> 运维健康摘要 <span class="text-sm-tertiary">点击跳转详情</span></div>
                            <div class="flex-wrap-gap-12">
                                <span class="health-badge" :class="(healthDetail.data_sources || []).some(d => d.routing_status === 'cooling' || d.degraded) ? 'qc-text-warning' : 'qc-text-success'">
                                    <qc-icon :name="(healthDetail.data_sources || []).some(d => d.routing_status === 'cooling' || d.degraded) ? 'alert-triangle' : 'check'" :size="13" /> 数据源 {{ (healthDetail.data_sources || []).filter(d => d.routing_status === 'cooling' || d.degraded).length }} 个降级
                                </span>
                                <el-button size="small" text @click="goSystemSub('health')">数据源健康详情</el-button>
                                <span class="health-badge" :class="Object.values(healthDetail.scheduler_tasks || {}).some(t => t.last_status === 'failed') ? 'qc-text-error' : 'qc-text-success'">
                                    <qc-icon :name="Object.values(healthDetail.scheduler_tasks || {}).some(t => t.last_status === 'failed') ? 'alert-triangle' : 'check'" :size="13" /> 调度失败 {{ Object.values(healthDetail.scheduler_tasks || {}).filter(t => t.last_status === 'failed').length }}
                                </span>
                                <el-button size="small" text @click="goSystemSub('schedule')">调度任务详情</el-button>
                                <span class="health-badge" :class="factCheck && factCheck.pass_rate != null && factCheck.pass_rate < 90 ? 'qc-text-warning' : 'qc-text-success'">
                                    <qc-icon name="shield" :size="13" /> AI 护栏通过率 {{ factCheck && factCheck.pass_rate != null ? factCheck.pass_rate + '%' : '--' }}
                                </span>
                                <el-button size="small" text @click="goSystemSub('guard')">事实护栏详情</el-button>
                                <span class="health-badge"><qc-icon name="hard-drive" :size="13" /> 最近备份 {{ healthDetail.backup_last_success || '暂无' }}</span>
                                <el-button size="small" text @click="goSystemSub('feature')">备份设置</el-button>
                            </div>
                        </div>
                        <!-- v3.22-I2: 用量统计卡片化 — 4卡片网格 -->
                        <div class="usage-card-grid">
                        <!-- 卡1: 资源监控 -->
                        <div class="usage-card">
                            <div class="usage-card-title"><qc-icon name="cpu" :size="14" /> 资源监控<span class="usage-card-title-sub">服务器实时资源</span></div>
                            <div class="usage-ai-panel">
                                <div class="usage-ai-panel-title">实时指标
                                    <span class="usage-ai-panel-meta">CPU/内存/磁盘</span>
                                </div>
                                <div class="usage-ai-summary">
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="cpu" :size="14" /></span><span class="usage-ai-stat-label">CPU</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.cpu_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.cpu_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="brain" :size="14" /></span><span class="usage-ai-stat-label">内存</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.mem_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.mem_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="hard-drive" :size="14" /></span><span class="usage-ai-stat-label">磁盘</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="clock" :size="14" /></span><span class="usage-ai-stat-label">运行时长</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.uptime ? sysMonitor.uptime.toFixed(2) + 'h' : '--' }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="radio-tower" :size="14" /></span><span class="usage-ai-stat-label">平均延迟</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.metrics?.avg_ms ?? '--' }}<small>ms</small></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="alert-triangle" :size="14" /></span><span class="usage-ai-stat-label">错误率</span></div>
                                        <!-- V6.6: 错误率阈值派生色（数值比较），保留内联 -->
                                        <div class="usage-ai-stat-num" :style="{color: (sysMonitor.metrics?.error_rate ?? 0) > 5 ? 'var(--el-danger)' : 'var(--color-primary)'}">{{ sysMonitor.metrics?.error_rate ?? 0 }}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 移除与 health/schedule/guard 重复的数据源健康/运维状态整块, 由顶部健康摘要条替代 -->
                        <!-- 卡4: AI 用量 -->
                        <div class="usage-card">
                            <div class="usage-card-title"><qc-icon name="bot" :size="14" /> AI 用量<span class="usage-card-title-sub">30s 自动刷新</span></div>
                            <div class="section-block-top">
                            <div class="section-title-base flex-between">
                                <span>用量汇总</span>
                                <el-button size="small" @click="loadAiUsage">刷新</el-button>
                            </div>
                            <div class="usage-ai-panel">
                                <div class="usage-ai-panel-title">AI 用量汇总
                                    <span class="usage-ai-panel-meta">累计 · 今日 · 最近</span>
                                </div>
                                <div class="usage-ai-summary">
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">Σ</span><span class="usage-ai-stat-label">累计调用</span></div>
                                        <div class="usage-ai-stat-num">{{ aiUsage.total_calls ?? 0 }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">今</span><span class="usage-ai-stat-label">今日调用</span></div>
                                        <div class="usage-ai-stat-num">{{ todayAiCalls }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">历</span><span class="usage-ai-stat-label">最近调用日</span></div>
                                        <div class="usage-ai-stat-num">{{ lastAiCallDay || '--' }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="usage-ai-grid">
                                <div class="usage-ai-panel" v-if="aiModelRank.length">
                                    <div class="usage-ai-panel-title">模型调用分布
                                        <span class="usage-ai-panel-meta">{{ aiModelRank.length }} 个模型</span>
                                    </div>
                                    <div class="usage-ai-model-row" v-for="(m, i) in aiModelRank" :key="m.name">
                                        <span class="usage-ai-model-no" :class="i < 3 ? 'usage-ai-model-no-top' : ''">{{ i + 1 }}</span>
                                        <span class="usage-ai-model-name" :title="m.name">{{ m.name }}</span>
                                        <span class="usage-ai-model-bar">
                                            <span class="usage-ai-model-fill" :style="{width: Math.round(m.count / aiModelMax * 100) + '%'}"></span>
                                        </span>
                                        <span class="usage-ai-model-pct">{{ Math.round(m.count / aiTotal * 100) }}%</span>
                                        <span class="usage-ai-model-count">{{ m.count }}</span>
                                    </div>
                                </div>
                                <div class="usage-ai-panel">
                                    <div class="usage-ai-panel-title">近 30 天调用趋势
                                        <span class="usage-ai-panel-meta">峰值 {{ aiDayPeak }} 次</span>
                                    </div>
                                    <div class="usage-ai-chart" v-if="aiDayTrend.length">
                                        <div class="usage-ai-bar-col" v-for="(d, idx) in aiDayTrend" :key="d.day" :title="d.day + ': ' + d.count + ' 次'">
                                            <div class="usage-ai-bar" :class="idx === aiDayTrend.length - 1 ? 'usage-ai-bar-today' : ''" :style="{height: Math.max(d.count / aiDayMax * 64, d.count ? 2 : 1) + 'px'}"></div>
                                            <div class="usage-ai-bar-label" v-if="idx === 0 || d.day.slice(8) === '01' || idx === aiDayTrend.length - 1">{{ d.day.slice(5) }}</div>
                                        </div>
                                    </div>
                                    <div class="text-sm-tertiary" v-else>暂无调用记录</div>
                                </div>
                            </div>
                        </div>
                        </div><!-- /AI用量卡 -->
                        </div><!-- /usage-card-grid -->

                        <!-- 额外全宽卡: 页面热度 -->
                        <div class="usage-card-extra usage-card">
                            <div class="usage-card-title"><qc-icon name="flame" :size="14" /> 页面热度<span class="usage-card-title-sub">近 {{ analyticsDays }} 天</span></div>
                            <div class="section-block-top">
                            <div class="section-title-base flex-between">
                                <span>排行</span>
                                <div class="flex-gap-4">
                                    <el-button size="small" :type="analyticsDays === 7 ? 'primary' : ''" @click="setAnalyticsDays(7)">近7天</el-button>
                                    <el-button size="small" :type="analyticsDays === 14 ? 'primary' : ''" @click="setAnalyticsDays(14)">近14天</el-button>
                                    <el-button size="small" :type="analyticsDays === 30 ? 'primary' : ''" @click="setAnalyticsDays(30)">近30天</el-button>
                                </div>
                            </div>
                            <div class="usage-ai-panel">
                                <div class="flex-col-gap-6" v-if="analyticsRank.length">
                                    <div class="rank-row" v-for="(r, i) in analyticsRank.slice(0, 10)" :key="r.page">
                                        <span class="rank-no" :class="i < 3 ? 'rank-no-top' : ''">{{ i + 1 }}</span>
                                        <span class="rank-name flex-1">{{ r.page }}</span>
                                        <span class="rank-bar"><span class="rank-bar-fill" :style="{width: Math.round((r.views || 0) / analyticsMaxViews * 100) + '%'}"></span></span>
                                        <span class="rank-views color-secondary">{{ r.views }} 次</span>
                                    </div>
                                </div>
                                <div class="usage-ai-empty" v-else>暂无访问数据</div>
                            </div>
                        </div>
                        </div><!-- /页面热度卡 -->
                    </div>

                    <div v-else-if="currentSubPage === 'about'">
                        <div class="card">
                            <div class="about-logo-row">
                                <svg class="about-logo-img" viewBox="0 0 100 100" width="44" height="44" aria-label="量化日历 logo" role="img">
                                    <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
                                    <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
                                    <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
                                    <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
                                    <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
                                    <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
                                    <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
                                    <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
                                </svg>
                                <div class="about-logo-text">
                                    <div class="about-logo-title">{{ t('login.title') }}</div>
                                    <div class="about-logo-sub">{{ t('login.subtitle') }}</div>
                                </div>
                            </div>
                            <div class="card-title"><qc-icon name="book-open" :size="14" /> 软件简介</div>
                            <div class="about-body-text">
                                <p class="m-0-0-12">基于<strong class="color-text-primary">美林时钟经济周期理论</strong>，融合多策略选股与 AI 深度评估的智能投研工具。</p>
                                <p class="m-0"><strong class="color-text-primary">核心功能：</strong></p>
                                <ul class="about-ul">
                                    <li><strong class="about-item-name">美林时钟</strong> — GDP/CPI/PMI/社融/利率五维评分，四阶段自动切换，历史轮次追溯</li>
                                    <li><strong class="about-item-name">多策略选股</strong> — 多因子/行业轮动/资金流/指数增强，共识榜交叉验证</li>
                                    <li><strong class="about-item-name">AI 每日复盘</strong> — 收盘后自动生成市场复盘，AI 解读指数/板块/资金/情绪</li>
                                    <li><strong class="about-item-name">多因子体检</strong> — 估值/基本面/资金面/情绪面/技术面，个股五维体检</li>
                                    <li><strong class="about-item-name">回测工作台</strong> — 单/多策略回测对比，收益/回撤/夏普/净值可视化</li>
                                    <li><strong class="about-item-name">评估胜率追踪</strong> — 评估命中率统计，决策复盘</li>
                                    <li><strong class="about-item-name">模拟组合</strong> — 持仓/买卖调仓/实时盈亏/收益曲线</li>
                                    <li><strong class="about-item-name">AI 问股</strong> — 多轮上下文 + 多股对比 + 事实数据护栏</li>
                                    <li><strong class="about-item-name">移动端 & PWA</strong> — 375px 优化、离线可读、手势操作</li>
                                    <li><strong class="about-item-name">开放 API</strong> — API Key 接入只读行情/日历/评估，Webhook 事件订阅</li>
                                    <li><strong class="about-item-name">国际化</strong> — 中/英双语切换</li>
                                    <li><strong class="about-item-name">飞书推送</strong> — 定时推送每日选股报告</li>
                                    <li><strong class="about-item-name">数据源</strong> — Tushare Pro / sxsc / akshare 三源热备</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="pin" :size="14" /> 软件版本</div>
                            <div class="flex-c-gap-16-wrap">
                                <span class="version-badge">v{{ appVersion }}</span>
                                <span class="text-success-md">● 服务运行中</span>
                            </div>
                        </div>
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 操作审计已移入 status 子页 — 运行监控组 -->
                        <!-- v3.2.0-T24: 问题反馈 -->
                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="14" /> 问题与反馈</div>
                            <div class="flex-col-gap-10">
                                <el-input v-model="feedbackText" type="textarea" :rows="3" placeholder="描述你遇到的问题或建议 (系统信息会自动附带)"></el-input>
                                <div class="flex-end-gap-8">
                                    <el-button size="small" @click="submitFeedback" :loading="feedbackSubmitting" type="primary">提交反馈</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="layers" :size="14" /> 系统组件</div>
                            <div class="text-sm-tertiary">FastAPI · Vue 3 · Element Plus · ECharts · Tushare Pro</div>
                        </div>
                        <div class="card border-left-warning">
                            <div class="card-title"><qc-icon name="alert-triangle" :size="14" /> 风险提示</div>
                            <div class="about-body-text">
                                <p class="m-0-0-8"><strong class="color-text-primary">本系统仅供学习研究，不构成任何投资建议。</strong></p>
                                <p class="m-0-0-8">• 选股结果基于历史数据和量化模型，<strong>过往表现不代表未来收益</strong></p>
                                <p class="m-0-0-8">• 宏观指标存在滞后性，AI 评估为机器生成，不构成专业投资分析</p>
                                <p class="m-0">• 数据来源 Tushare Pro 及公开数据，不保证完整性和准确性。<strong>投资有风险，入市需谨慎</strong></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="14" /> 联系与反馈</div>
                            <div class="about-body-text">
                                <p class="m-0">• 维护团队：犇犇量化团队 · 反馈请使用上方「问题与反馈」</p>
                            </div>
                        </div>
                    </div>
                    <!-- 6.1.1 (A1): 量化术语表子页 -->
                    <div v-else-if="currentSubPage === 'glossary'">
                        <qc-glossary-page />
                    </div>
                    </div>
    `,setup(){const t=a("qcState");if(!t)return{};function g(Q){t.currentSubPage.value=Q}function e(){re(),ae(),me()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,Q=>{Q==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),Q==="datadict"&&oe(),Q==="health"&&b(),Q==="notification"&&e(),Q==="datasource"&&F()});const u=t.themeHues||[45,220,0,140,270,320,-1],m=t.themeHueNames||{},T=t.themeMode||Vue.computed(()=>"light"),r=t.themeHue||Vue.ref(45);function n(Q){t.changeThemeMode&&t.changeThemeMode(Q)}function f(Q){t.changeThemeHue&&t.changeThemeHue(parseInt(Q,10))}function o(Q){return t.hueColor?t.hueColor(Q):Q<0?"hsl(0, 0%, 46%)":"hsl("+Q+", 75%, 42%)"}function x(Q){return t.hueName?t.hueName(Q):m[Q]||"自定义 "+Q}function w(Q){t.setNavMode&&t.setNavMode(Q)}const E=Vue.ref([]),C=Vue.ref([]),q=Vue.ref(!1);async function F(){q.value=!0;try{const he=await(await fetch("/api/meta/freshness")).json();he&&he.success&&(C.value=he.items||[])}catch{}q.value=!1}const D=Vue.ref(""),d=Vue.ref("read"),i=Vue.ref(""),h=Vue.ref(!1),V=()=>window.__quantModules&&window.__quantModules.core||{},W=Vue.ref([]),S=Vue.ref(!1);async function O(){S.value=!0;try{const Q=await fetch("/api/audit/logs?limit=20",{headers:V().authHeaders?V().authHeaders():{}}).then(function(he){if(!he.ok)throw new Error("HTTP "+he.status);return he.json()});W.value=Q&&Q.logs||[]}catch(Q){console.error("[system] 审计加载失败:",Q),W.value=[]}finally{S.value=!1}}const K=Vue.ref(!1),A=Vue.ref(null),L=Vue.ref(null),H=Vue.ref([]),$=Vue.ref(null);function Z(Q){return Q==="completed"?"完成":Q==="running"?"运行中":Q==="pending"?"排队中":Q==="cancelled"?"已取消":"失败"}async function le(){try{const he=await(await fetch("/api/jobs?limit=20")).json();he&&he.success&&(H.value=he.data&&he.data.tasks||[])}catch(Q){console.warn("[system] 加载任务队列失败:",Q)}}async function te(Q){try{await fetch("/api/jobs/"+Q+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),le()}catch(he){console.warn("[system] 取消任务失败:",he)}}function R(){le(),$.value=window.setInterval(le,15e3)}const s=Vue.ref({items:[]}),y=Vue.ref([]),l=Vue.ref(null),p=Vue.ref({data_sources:[],alerts:[]}),X=function(){return V().authHeaders?V().authHeaders():{}},P=function(Q){return fetch(Q,{headers:X()}).then(function(he){if(!he.ok)throw new Error("HTTP "+he.status);return he.json()})};async function b(){K.value=!0,A.value=null;try{const[Q,he,et,Ue]=await Promise.all([P("/api/reliability/freshness"),P("/api/reliability/heal-history?limit=20"),P("/api/reliability/startup-report"),P("/api/reliability/source-health")]);s.value=Q&&Q.data||{items:[]},y.value=he&&he.data||[],l.value=et&&et.data||null,p.value=Ue||{data_sources:[],alerts:[]},L.value=new Date().toLocaleTimeString()}catch(Q){console.warn("[health] 加载失败:",Q),A.value="健康数据加载失败: "+(Q.message||""),s.value={items:[]},y.value=[]}finally{K.value=!1}}const v=Vue.ref(!1),k=Vue.ref(""),c=Vue.ref(""),N=Vue.ref({fields:[]});async function oe(){v.value=!0,k.value="";try{const Q="/api/data-dict"+(c.value?"?category="+c.value:""),he=await P(Q);N.value=he&&he.data||{fields:[]}}catch(Q){console.warn("[dict] 加载失败:",Q),k.value="数据字典加载失败: "+(Q.message||""),N.value={fields:[]}}finally{v.value=!1}}function J(Q){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Q]||"var(--text-secondary)"}function M(Q){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Q]||Q}const U=Vue.computed(()=>(s.value?s.value.items||[]:[]).filter(he=>he.status==="stale"||he.status==="missing").length),ie=Vue.ref("rules"),fe=Vue.ref([]),Se=Vue.ref([]),Y=Vue.ref([]),ce=Vue.ref(!1),Ae=Vue.ref(""),se=Vue.ref("price_above"),ke=Vue.ref(""),Te=Vue.ref(!1),ge=Vue.ref(60),ye=Vue.ref("");function Ee(Q){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Q]||Q}async function re(){ce.value=!0;try{const Q=await(await fetch("/api/alerts/rules")).json();fe.value=Q&&Q.rules||[]}catch(Q){ye.value="规则加载失败: "+Q}finally{ce.value=!1}}async function ae(){ce.value=!0;try{const Q=await(await fetch("/api/alerts/history?limit=50")).json();Se.value=Q&&Q.history||[]}catch(Q){ye.value="历史加载失败: "+Q}finally{ce.value=!1}}async function me(){ce.value=!0;try{const Q=await(await fetch("/api/alerts/channels")).json(),he=await(await fetch("/api/alerts/silence")).json();Y.value=Q&&Q.channels||[],Te.value=!!(he&&he.silenced)}catch(Q){ye.value="通道状态加载失败: "+Q}finally{ce.value=!1}}function Ne(Q){ie.value=Q,Q==="rules"?re():Q==="history"?ae():me()}async function He(){const Q=Ae.value.trim();if(!Q){ye.value="请填写股票代码";return}ce.value=!0;try{const he={stock_code:Q,rule_type:se.value};if(se.value!=="new_pool"){const Ue=Number(ke.value);if(isNaN(Ue)){ye.value="阈值必须为数值";return}he.threshold=Ue}const et=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(he)})).json();et&&et.rule?(ye.value="规则已添加",Ae.value="",ke.value="",re()):ye.value=et&&et.detail||"添加失败"}catch(he){ye.value="添加失败: "+he}finally{ce.value=!1}}async function Ke(Q){try{await fetch("/api/alerts/rules/"+Q.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Q.enabled})}),Q.enabled=!Q.enabled}catch(he){ye.value="切换失败: "+he}}async function qt(Q){try{const he=await(await fetch("/api/alerts/rules/"+Q.id,{method:"DELETE"})).json();he&&he.success?(ye.value="规则已删除",re()):ye.value="删除失败"}catch(he){ye.value="删除失败: "+he}}async function pt(){try{const Q=Te.value?ge.value:0,he=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Q})})).json();Te.value=!!(he&&he.silenced),ye.value=Te.value?"已静默":"已恢复推送"}catch(Q){ye.value="静默设置失败: "+Q}}async function Tt(){Te.value=!1,await pt()}function xe(Q){return!!Q&&!Q.degraded}const qe=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((he,et)=>Math.max(he,et.views||0),0)||1),je=()=>V().OPENAPI_ROUTE_BASE||"/api/openapi";async function Oe(){h.value=!0;try{const Q=await V().apiFetch(je()+"/keys");E.value=Q&&Q.data||[]}catch(Q){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Q.message||""))}finally{h.value=!1}}async function Xe(){try{const Q=await V().apiFetch(je()+"/keys",{method:"POST",body:JSON.stringify({name:D.value||"未命名",role:d.value||"read",expire_days:365})});Q&&Q.success?(i.value=Q.api_key||"",D.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Oe()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成失败")}catch(Q){ElementPlus.ElMessage.error("生成失败: "+(Q.message||""))}}async function Qe(){if(i.value)try{await navigator.clipboard.writeText(i.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ye(Q){try{const he=await V().apiFetch(je()+"/keys/"+Q.id,{method:"DELETE"});he&&he.success?(ElementPlus.ElMessage.success("Key 已吊销"),i.value&&Q.prefix&&i.value.includes(Q.prefix)&&(i.value=""),await Oe()):ElementPlus.ElMessage.error(he&&(he.detail||he.message)||"吊销失败")}catch(he){ElementPlus.ElMessage.error("吊销失败: "+(he.message||""))}}const lt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function yt(Q){return lt[Q]||Q}const Et=computed(()=>{var Q;return(((Q=t.healthMetrics)==null?void 0:Q.value)||[]).map(he=>({name:yt(he.name),source:he.name,success_rate:he.success_rate,avg_latency_ms:he.avg_latency_ms,calls:he.calls||0,degraded:!!he.degraded,data_age_hours:he.data_age_hours!=null?he.data_age_hours:null,stale:!!he.stale,last_fetch:he.last_fetch||he.last_success||null}))});function Ft(Q){return Q.degraded?"degraded":Q.success_rate==null?"unknown":Q.success_rate>=90?"ok":Q.success_rate>=60?"warn":"bad"}function aa(Q){return Q==null?"":Q<1?"刚刚":Q<24?Math.round(Q)+"小时前":Math.floor(Q/24)+"天前"}const I=t.aiUsage||Vue.ref({}),ee=Vue.computed(()=>{const Q=I.value&&I.value.by_model||{};return Object.entries(Q).map(([he,et])=>({name:he,count:et})).sort((he,et)=>et.count-he.count)}),Ce=Vue.computed(()=>ee.value.reduce((Q,he)=>Math.max(Q,he.count),0)||1),Ie=Vue.computed(()=>ee.value.reduce((Q,he)=>Q+he.count,0)||1),We=Vue.computed(()=>bt.value.reduce((Q,he)=>Math.max(Q,he.count),0)||0),bt=Vue.computed(()=>{const Q=I.value&&I.value.by_day||{},he=[],et=new Date;for(let Ue=29;Ue>=0;Ue--){const wt=new Date(et.getFullYear(),et.getMonth(),et.getDate()-Ue),At=wt.getFullYear()+"-"+String(wt.getMonth()+1).padStart(2,"0")+"-"+String(wt.getDate()).padStart(2,"0");he.push({day:At,count:Q[At]||0})}return he}),$e=Vue.computed(()=>bt.value.reduce((Q,he)=>Math.max(Q,he.count),0)||1),Ge=Vue.computed(()=>{const Q=I.value&&I.value.by_day||{},he=new Date,et=he.getFullYear()+"-"+String(he.getMonth()+1).padStart(2,"0")+"-"+String(he.getDate()).padStart(2,"0");return Q[et]||0}),_t=Vue.computed(()=>{const Q=I.value&&I.value.by_day||{},he=Object.keys(Q).filter(et=>(Q[et]||0)>0);return he.length?he[he.length-1]:""});function ct(Q){t.analyticsDays&&(t.analyticsDays.value=Q),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const ft='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',it='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function Ht(Q){return Q?it:ft}return R(),{...t,themeHues:u,themeHueNames:m,themeMode:T,themeHue:r,onThemeModeChange:n,setThemeHue:f,hueColor:o,hueName:x,onNavModeChange:w,analyticsMaxViews:qe,aiModelRank:ee,aiModelMax:Ce,aiDayTrend:bt,aiDayMax:$e,todayAiCalls:Ge,lastAiCallDay:_t,aiTotal:Ie,aiDayPeak:We,setAnalyticsDays:ct,viewIcon:Ht,openApiKeys:E,openApiKeyName:D,openApiKeyRole:d,newOpenApiKey:i,openApiLoading:h,loadOpenApiKeys:Oe,generateOpenApiKey:Xe,copyOpenApiKey:Qe,revokeOpenApiKey:Ye,healthRows:Et,healthClass:Ft,fmtAge:aa,staleAssetCount:U,jobQueue:H,loadJobQueue:le,cancelJob:te,jobStatusText:Z,auditLogs:W,auditLoading:S,loadAuditLogs:O,healthLoading:K,healthError:A,healthUpdatedAt:L,freshnessData:s,healHistory:y,startupReport:l,sourceHealth:p,refreshHealth:b,statusColor:J,statusLabel:M,sourceOk:xe,dictLoading:v,dictError:k,dictCategory:c,dictData:N,loadDataDict:oe,ncTab:ie,ncRules:fe,ncHistory:Se,ncChannels:Y,ncLoading:ce,ncNewCode:Ae,ncNewType:se,ncNewThreshold:ke,ncSilence:Te,ncSilenceMinutes:ge,ncMsg:ye,ncTypeLabel:Ee,onNcTab:Ne,loadAlertRules:re,loadAlertHistory:ae,loadAlertChannels:me,addAlertRule:He,toggleAlertRule:Ke,removeAlertRule:qt,applySilence:pt,clearSilence:Tt,freshnessItems:C,freshnessLoading:q,loadFreshness:F,goSystemSub:g}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
                <div v-if="currentPage === 'ai'" key="ai">
                    <!-- V6.1 (PRD-6.1 F3): 移除页内标题 (由中栏/面包屑承载) -->

                    <!-- overview: 概览统计 + 快捷操作 -->
                    <div v-if="currentSubPage === 'overview'">
                        <div class="flex-end-gap-8-mb16">
                            <el-button size="small" @click="showBatchEvaluate = true">
                                {{ t('ai.batchEval') }}
                            </el-button>
                            <el-button size="small" @click="showAutoEvaluateSettings = true">
                                <span class="mr-4"><qc-icon name="settings" :size="14" /></span>{{ t('ai.autoEval') }}
                            </el-button>
                        </div>

                        <!-- 统计卡片 -->
                        <div class="dashboard-grid mb-20">
                            <div class="stat-card stat-card-primary" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="历史评估" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-info"><qc-icon name="file-text" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistory.length }}</div>
                                    <div class="stat-label">{{ t('ai.totalEval') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-success" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="覆盖股票" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-success"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistoryStockCount }}</div>
                                    <div class="stat-label">{{ t('ai.coveredStocks') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-gold" @click="currentSubPage = 'watchlist'" tabindex="0" role="button" aria-label="自选股" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-gold"><qc-icon name="star" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ watchlist.length }}</div>
                                    <div class="stat-label">{{ t('ai.watchlist') }}</div>
                                </div>
                            </div>
                            <!-- v3.17.8 (FR-3.17.5): 组合持仓入口 -->
                            <div class="stat-card stat-card-gold" @click="currentSubPage = 'portfolio'" tabindex="0" role="button" aria-label="组合持仓" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-gold">组</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ positions.length }}</div>
                                    <div class="stat-label">{{ t('ai.portfolio') }}</div>
                                </div>
                            </div>
                            <!-- v5.4.0 (FR-5.4.4): 重点跟踪入口 -->
                            <div class="stat-card stat-card-info-border" @click="currentSubPage = 'focus'" tabindex="0" role="button" aria-label="重点跟踪" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-info-hover"><qc-icon name="target" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">5 档</div>
                                    <div class="stat-label">重点跟踪</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-warning" @click="showAutoEvaluateSettings = true" tabindex="0" role="button" aria-label="自动评估设置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" :style="{opacity: autoEvaluateConfig.enabled ? 1 : 0.6}">
                                <!-- V6.6: 启用/暂停 金色品牌底 + 固定 warning 图标色，背景双态非语义三态，保留内联 -->
                                <div class="stat-icon" :style="{background: autoEvaluateConfig.enabled ? 'var(--badge-gold-bg)' : 'var(--bg-hover)', color: 'var(--warning-text)'}">
                                    <qc-icon :name="autoEvaluateConfig.enabled ? 'play' : 'pause'" :size="18" />
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value text-md">{{ autoEvaluateConfig.enabled ? t('ai.running') : t('ai.paused') }}</div>
                                    <div class="stat-label">{{ t('ai.autoEval') }}</div>
                                </div>
                            </div>
                            <!-- v3.5.0-T6: AI 用量统计 -->
                            <!-- v3.17.6: title 提示详细用量位置 (系统→用量统计) -->
                            <div class="stat-card stat-card-info-border" title="AI 模型调用统计, 模型分布/近30天趋势见 系统→用量统计">
                                <div class="stat-icon stat-icon-info-hover"><qc-icon name="zap" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiUsage.total_calls || 0 }}</div>
                                    <div class="stat-label">{{ t('ai.aiCalls') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.5.0-T5: 策略推荐 -->
                        <div class="card mb-4" v-if="strategyRecommendations.length">
                            <div class="card-title">{{ t('ai.strategyRecommend') }} <span class="text-sm-tertiary-normal">基于你的 {{ strategyRecommendations.length > 0 ? watchlist.length : 0 }} 只自选股风格</span></div>
                            <div class="grid-auto-fit-240">
                                <div class="rec-card" v-for="r in strategyRecommendations" :key="r.strategy_id">
                                    <div class="flex-between-mb6">
                                        <span class="text-semibold">{{ r.name }}</span>
                                        <span class="text-sm-primary-semibold">{{ fmtNum(r.score) }}%</span>
                                    </div>
                                    <div class="text-sm-secondary-mb8">{{ r.desc }}</div>
                                    <div class="flex-wrap-gap-6">
                                        <span class="tag-chip" v-for="t in r.tags" :key="t">{{ t }}</span>
                                    </div>
                                    <div class="text-xs-tertiary-mt8">{{ r.reason }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- 最近评估 -->
                        <div class="card mb-4" v-if="aiHistory.length> 0">
                            <div class="card-title flex-between">
                                <span>{{ t('ai.recentEval') }}</span>
                                <el-button size="small" text @click="currentSubPage = 'history'">{{ t('ai.viewAll') }}</el-button>
                            </div>
                            <div class="hscroll-gap-12">
                                <div v-for="item in aiHistory.slice(0,3)" :key="item.id" @click="viewAiResult(item)" class="hover-lift recent-card">
                                    <div class="flex-between-mb8">
                                        <span class="text-md-semibold">{{ item.stock_code }}</span>
                                        <!-- V6.6: item.result.level_color 服务端返回实时色，保留内联 -->
                                        <span :style="{color: levelColor(item.result.level),fontWeight:'var(--font-bold)',fontSize:'18px'}">{{ fmtNum(item.result.total_score) }}</span>
                                    </div>
                                    <div class="text-sm-secondary-mb6">{{ item.stock_name }}</div>
                                    <div class="flex-between">
                                        <!-- V6.6: level_color 服务端实时色（含 20 透明底），保留内联 -->
                                        <span :style="{background: levelBg(item.result.level),color: levelColor(item.result.level),padding:'2px 8px',borderRadius:'10px',fontSize:'var(--font-xs)'}">{{ item.result.level }}</span>
                                        <span class="text-xs-tertiary">{{ (item.evaluate_time||'').split('T')[0] }}</span>
                                    </div>
                                    <!-- V5.3.0 (T-5.3.5.1): 归因徽标 — 机会/风险因子计数 + 一致性提示 -->
                                    <div v-if="item.attribution && item.attribution.available" class="flex-gap-8-c mt-4">
                                        <span v-if="(item.attribution.hits||[]).filter(h=>h.signal==='opportunity').length" class="text-xs" style="color:var(--market-up-text)">{{ (item.attribution.hits||[]).filter(h=>h.signal==='opportunity').length }} 机</span>
                                        <span v-if="(item.attribution.misses||[]).filter(m=>m.signal==='risk').length" class="text-xs" style="color:var(--market-down-text)">{{ (item.attribution.misses||[]).filter(m=>m.signal==='risk').length }} 险</span>
                                        <span class="text-xs-tertiary" v-if="item.attribution.consistency_note">{{ item.attribution.consistency_note }}</span>
                                    </div>
                                    <div v-else-if="item.attribution && !item.attribution.available" class="text-xs-tertiary mt-4">归因数据不足 <qc-icon name="alert-triangle" :size="14" /></div>
                                </div>
                            </div>
                        </div>

                        <!-- 评分分布 + 快捷操作 双栏 -->
                        <div class="grid-2col-gap16-mb16">
                            <!-- 评分分布 -->
                            <div class="card" v-if="aiHistory.length > 0">
                                <div class="card-title">{{ t('ai.scoreDist') }}</div>
                                <div class="flex-c-gap-8-mb6" v-for="bar in scoreDistribution" :key="bar.label">
                                    <span class="bar-label">{{ bar.label }}</span>
                                    <div class="bar-track">
                                        <!-- V6.6: scoreDistribution 分数区间枚举色，定义于共享 watchlist.js，跨文件保留内联 -->
                                        <div :style="{width:bar.pct+'%',height:'100%',background:bar.color,borderRadius:'9px',transition:'width 0.6s ease',minWidth:bar.count>0?'4px':'0'}"></div>
                                    </div>
                                    <span class="bar-count">{{ bar.count }}</span>
                                </div>
                            </div>
                            <!-- 快捷操作 -->
                            <div class="card">
                                <div class="card-title">{{ t('ai.quickOps') }}</div>
                                <div class="flex-col-gap-10">
                                    <div class="text-sm-secondary-mb4" v-if="watchlist.length> 0">{{ t('ai.chooseFromWatchlist') }}</div>
                                    <el-select class="w-select-sm" v-if="watchlist.length> 0" v-model="quickEvalStock" :placeholder="t('ai.chooseFromWatchlist')" size="small" clearable>
                                        <el-option v-for="s in watchlist" :key="s.code" :label="s.code + ' ' + s.name" :value="s.code" />
                                    </el-select>
                                    <div class="flex-gap-8-c" v-if="watchlist.length> 0">
                                        <span class="text-xs-tertiary-nowrap">{{ t('ai.strategyLabel') }}</span>
                                        <el-radio-group v-model="evalStrategy" size="small">
                                            <el-radio-button value="default">综合</el-radio-button>
                                            <el-radio-button value="trend">趋势</el-radio-button>
                                            <el-radio-button value="value">价值</el-radio-button>
                                            <el-radio-button value="short_term">短线</el-radio-button>
                                        </el-radio-group>
                                    </div>
                                    <el-button class="align-self-start" v-if="watchlist.length> 0" type="primary" size="small" @click="quickEvaluate" :disabled="!quickEvalStock" :loading="aiLoading">{{ t('ai.quickEval') }}</el-button>
                                    <div class="text-center-tertiary-pad20x0" v-if="watchlist.length === 0">
                                        <div class="text-3xl-mb8"><qc-icon name="star" :size="36" /></div>
                                        <div class="text-sm">{{ t('ai.noWatchlist') }}</div>
                                        <el-button class="mt-2" size="small" @click="currentSubPage = 'watchlist'">{{ t('ai.goAddWatchlist') }}</el-button>
                                    </div>
                                    <div class="section-top-thin">
                                        <el-button class="w-100" size="small" @click="showBatchEvaluate = true">{{ t('ai.batchEvalInput') }}</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 空状态：无任何评估记录 -->
                        <div v-if="aiHistory.length === 0" class="card text-center-pad40x20">
                            <div class="empty-state-icon-md"><qc-icon name="bot" :size="32" /></div>
                            <div class="text-lg-semibold-primary-mb8">{{ t('ai.title') }}</div>
                            <div class="text-md-secondary-mb20">{{ t('ai.subtitle') }}</div>
                            <div class="flex-gap-12-center">
                                <el-button type="primary" @click="currentSubPage = 'watchlist'">{{ t('ai.manageWatchlist') }}</el-button>
                                <el-button @click="showBatchEvaluate = true">{{ t('ai.batchEval') }}</el-button>
                            </div>
                        </div>
                    </div>

                    <!-- history: 评估历史记录 -->
                    <div v-else-if="currentSubPage === 'evaluation-analysis'">
                        <!-- v3.17.6 (FR-3.17.6): 评估命中率（决策复盘） -->
                        <div class="card eval-track-card">
                            <div class="card-title">{{ t('ai.evalHitRate') }} <span class="eval-track-title-hint">对照评估后 5/10/20 个交易日实际涨跌</span></div>
                            <!-- V5.3.0 (T-5.3.1.2): 收敛为统一状态面板 -->
                            <qc-state-panel v-if="trackLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="!trackData || !trackData.samples || trackData.samples.length === 0" type="empty" icon="bar-chart-3" :title="t('ai.insufficientSamples')"></qc-state-panel>
                            <template v-else>
                                <div class="eval-track-overall">
                                    <div v-for="w in trackWindows" :key="w.key" class="eval-track-stat">
                                        <div class="eval-track-stat-value">{{ fmtTrackRate(trackData.overall[w.key]) }}</div>
                                        <div class="eval-track-stat-label">{{ w.label }}命中率（{{ trackData.overall[w.key].total }} 样本）</div>
                                    </div>
                                </div>
                                <div class="eval-track-note">{{ trackData.note }}</div>
                                <div class="eval-track-grid">
                                    <div>
                                        <div class="eval-track-subtitle">{{ t('ai.hitRateByModel') }}</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>模型</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_model" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div class="eval-track-subtitle">{{ t('ai.hitRateByLevel') }}</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>评级</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_level" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- v3.18 (FR-3.18.6): 决策复盘 — 按日期浏览 (by_date 命中标注) -->
                                <div class="eval-track-subtitle">按日期浏览（{{ trackWindow }} 日窗口命中标注）</div>
                                <div class="flex-gap-4">
                                    <el-button size="small" :type="trackWindow === 5 ? 'primary' : ''" @click="setTrackWindow(5)">5日</el-button>
                                    <el-button size="small" :type="trackWindow === 10 ? 'primary' : ''" @click="setTrackWindow(10)">10日</el-button>
                                    <el-button size="small" :type="trackWindow === 20 ? 'primary' : ''" @click="setTrackWindow(20)">20日</el-button>
                                </div>
                                <div v-for="(samples, date) in trackData.by_date" :key="date">
                                    <div class="eval-track-subtitle">{{ date }}（{{ samples.length }} 条）</div>
                                    <table class="eval-track-table">
                                        <thead>
                                            <tr><th>股票</th><th>评级</th><th>模型</th><th>{{ trackWindow }}日命中</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="s in samples" :key="s.id">
                                                <td>{{ s.stock_name || s.stock_code }}</td>
                                                <td>{{ s.level }}</td>
                                                <td>{{ s.provider }}</td>
                                                <td>{{ trackHitText(s, trackWindow) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div v-else-if="currentSubPage === 'history'">

                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedHistoryIds.length > 0">已选择 <strong class="color-primary">{{ selectedHistoryIds.length }}</strong> 条记录</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllHistory">{{ selectedHistoryIds.length === aiHistory.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="batchReevaluateHistory"><qc-icon name="refresh" :size="14" /> 再次评估</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="success" @click="batchAddToWatchlist"><qc-icon name="star" :size="14" /> 加入自选</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="warning" @click="batchAddToPortfolio"><qc-icon name="bar-chart-3" :size="14" /> 加入组合</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="danger" @click="deleteSelectedHistory"><qc-icon name="trash-2" :size="14" /> 批量删除</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="clearSelection">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">{{ t('ai.historyTitle') }} <span class="card-title-hint">共 {{ Object.keys(groupedByDate).length }} 天 · {{ aiHistory.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="aiHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadAiHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="aiHistoryError" type="error" @retry="loadAiHistory"></qc-state-panel>
                        <div v-else-if="aiHistory.length === 0" class="empty-state">
                            <div class="empty-state-icon"><qc-icon name="bot" :size="32" /></div>
                            <div class="text-md-medium-primary">{{ t('ai.noEvalRecord') }}</div>
                            <div class="text-sm-tertiary-mt8">
                                {{ t('ai.evalHint') }}
                            </div>
                        </div>

                        <!-- V5.20 (F1): 中栏分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- 视图切换 -->
                        <div class="flex-gap-8-mb12" v-if="aiHistory.length> 0">
                            <el-button size="small" @click="aiHistoryView = 'date'" :type="aiHistoryView === 'date' ? 'primary' : ''">{{ t('ai.byDate') }}</el-button>
                            <el-button size="small" @click="aiHistoryView = 'month'" :type="aiHistoryView === 'month' ? 'primary' : ''">{{ t('ai.byMonth') }}</el-button>
                            <el-button size="small" @click="aiHistoryView = 'stock'" :type="aiHistoryView === 'stock' ? 'primary' : ''">{{ t('ai.byStock') }}</el-button>
                        </div>

                        <!-- 按日期聚合展示 -->
                        <div v-if="aiHistoryView === 'date'" class="ai-history-list">
                            <template v-for="(records, date) in groupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <!-- 日期级复选框 -->
                                        <div @click.stop="toggleSelectDate(date)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleDateExpand(date)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar" :size="14" /> {{ date }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleDateExpand(date)" :style="{transform: expandedDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedDates.includes(date)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动（分组较大时仅渲染可视区记录） -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" :show-dims="true" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合展示 -->
                        <div v-else-if="aiHistoryView === 'month'" class="ai-history-list">
                            <template v-for="(records, month) in groupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectMonth(month)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleMonthExpand(month)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar-days" :size="14" /> {{ month }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleMonthExpand(month)" :style="{transform: expandedMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedMonths.includes(month)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合展示 -->
                        <div v-else class="ai-history-list">
                            <div class="group-border-card" v-for="(records, code) in aiHistoryByStock" :key="code">
                                <div class="date-group-header">
                                        <!-- 股票级复选框 -->
                                        <div @click.stop="toggleSelectStock(code)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="group-title-click" @click="toggleStockExpand(code)">
                                        <div class="flex-c-gap-8">
                                            <strong>{{ code }}</strong>
                                            <span class="color-tertiary">{{ records[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ records.length }}次</span>
                                            <!-- V6.6: records[0].result.level_color 服务端实时色，保留内联 -->
                                            <span :style="{color: levelColor(records[0].result.level), fontSize: 'var(--font-sm)'}">最新{{ fmtNum(records[0].result.total_score) }}分</span>
                                        </div>
                                    </div>
                                    <span class="group-toggle-arrow" :style="{transform: expandedStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div class="records-indent-sm" v-if="expandedStocks.includes(code)">
                                    <!-- v3.7.14: 评估历史趋势图 -->
                                    <div class="trend-chart-box" v-if="records.length> 1" :ref="el => registerTrendChart(el, code, records)"></div>
                                    <!-- v3.16 (16.7): 内层虚拟滚动（单股多次评估时仅渲染可视区） -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                        <template #default="{ item: record }">
                                    <qc-history-record :item="record" type="history" time-format="time"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>

                        <!-- v3.17.9 (FR-3.17.9): 评估历史懒加载 — 滚动触底 + 手动按钮加载更多 -->
                        <div v-if="aiHistory.length > 0 && hasMoreAiHistory" class="ai-history-loadmore">
                            <el-button size="small" :loading="aiHistoryLoadingMore" @click="loadMoreAiHistory">
                                加载更多（剩余 {{ aiHistoryTotal - aiHistory.length }} 条）
                            </el-button>
                        </div>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>

                    <!-- chat_history: 问股历史 (v2.4) -->
                    <div v-else-if="currentSubPage === 'chat_history'">
                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedChatIds.length > 0">已选择 <strong class="color-primary">{{ selectedChatIds.length }}</strong> 条对话</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllChatSessions">{{ selectedChatIds.length === allChatSessionsFlat.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" type="danger" @click="deleteSelectedChatSessions"><qc-icon name="trash-2" :size="14" /> 批量删除</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" @click="selectedChatIds = []">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="16" /> AI 问股历史 <span class="card-title-hint">共 {{ Object.keys(chatGroupedByDate).length }} 天 · {{ allChatSessionsFlat.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="chatHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadChatHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="chatHistoryError" type="error" @retry="loadChatHistory"></qc-state-panel>
                        <div v-else-if="allChatSessionsFlat.length === 0" class="empty-state">
                            <div class="empty-state-icon"><qc-icon name="message-circle" :size="32" /></div>
                            <div class="text-md-medium-primary">暂无问股记录</div>
                            <div class="text-sm-tertiary-mt8">
                                在股票详情页点击「AI 问股」开始对话
                            </div>
                        </div>

                        <!-- V5.20 (F1): 中栏分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- 视图切换 -->
                        <div class="flex-gap-8-mb12" v-if="allChatSessionsFlat.length> 0">
                            <el-button size="small" @click="chatHistoryView = 'date'" :type="chatHistoryView === 'date' ? 'primary' : ''"><qc-icon name="calendar" :size="14" /> 按日期</el-button>
                            <el-button size="small" @click="chatHistoryView = 'month'" :type="chatHistoryView === 'month' ? 'primary' : ''"><qc-icon name="calendar-days" :size="14" /> 按月</el-button>
                            <el-button size="small" @click="chatHistoryView = 'stock'" :type="chatHistoryView === 'stock' ? 'primary' : ''"><qc-icon name="trending-up" :size="14" /> 按股票</el-button>
                        </div>

                        <!-- 按日期聚合 -->
                        <div v-if="chatHistoryView === 'date' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, date) in chatGroupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatDate(date)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleChatDateExpand(date)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar" :size="14" /> {{ date }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleChatDateExpand(date)" :style="{transform: expandedChatDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatDates.includes(date)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合 -->
                        <div v-else-if="chatHistoryView === 'month' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, month) in chatGroupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatMonth(month)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleChatMonthExpand(month)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar-days" :size="14" /> {{ month }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleChatMonthExpand(month)" :style="{transform: expandedChatMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatMonths.includes(month)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合 -->
                        <div v-else-if="allChatSessionsFlat.length > 0" class="ai-history-list">
                            <div class="group-border-card" v-for="(sessions, code) in chatGroupedByStock" :key="code">
                                <div class="date-group-header">
                                    <div @click.stop="toggleSelectChatStock(code)" class="history-checkbox flex-vcenter">
                                        <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                            {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                        </div>
                                    </div>
                                    <div class="group-title-click" @click="toggleChatStockExpand(code)">
                                        <div class="flex-c-gap-8">
                                            <strong>{{ code }}</strong>
                                            <span class="color-tertiary">{{ sessions[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ sessions.length }}次</span>
                                        </div>
                                    </div>
                                    <span class="group-toggle-arrow" :style="{transform: expandedChatStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div class="records-indent-sm" v-if="expandedChatStocks.includes(code)">
                                    <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                        <template #default="{ item: session }">
                                    <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                        </div>
                    </div>

                    <!-- watchlist: 我的自选 (v1.10) -->
                    <div v-else-if="currentSubPage === 'watchlist'">
                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedWatchlistCodes.length > 0">已选择 <strong class="color-primary">{{ selectedWatchlistCodes.length }}</strong> 只股票</span>
                                    <span v-else>可选多只股票进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllWatchlist">{{ selectedWatchlistCodes.length === watchlist.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="primary" @click="batchEvaluateSelected" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> 评估选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="danger" @click="batchRemoveWatchlist"><qc-icon name="trash-2" :size="14" /> 移除选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" @click="clearWatchlistSelection">取消选择</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="primary" @click="batchEvaluateWatchlist" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> 批量评估</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="danger" @click="clearWatchlist"><qc-icon name="trash-2" :size="14" /> 清空自选</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" @click="preloadWatchlistKline" :loading="preloadingKline"><qc-icon name="refresh" :size="14" /> 预加载K线</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">{{ t('ai.myWatchlist') }} <span class="card-title-hint">共 {{ watchlist.length }} 只</span></div>
                            <!-- V5.19 (F4): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                            <qc-detail-split :enabled="detailSplitEnabled">
                            <template #list>
                            <!-- v3.17.7 实时化 (FR-3.17.7): 自选实时报价区（WS；数据不可达降级占位，不阻塞其它功能） -->
                            <div v-if="watchlist.length > 0" class="rt-bar" :class="{'rt-degraded': realtimeDegraded || realtimeWsState === 'offline'}">
                                <span class="rt-title">实时报价</span>
                                <span v-if="realtimeDegraded || realtimeWsState === 'offline'" class="rt-degraded-text">
                                    {{ realtimeDegraded ? REALTIME_DEGRADED_TEXT : REALTIME_FALLBACK_TEXT }}
                                </span>
                                <span v-else-if="realtimeWsState === 'open'" class="rt-live">实时</span>
                                <span v-else class="rt-connecting">连接中...</span>
                            </div>
                            <!-- 搜索添加 -->
                            <div class="flex-gap-8-mb12">
                                <el-input class="flex-1" v-model="watchlistSearch" placeholder="输入股票代码或名称搜索..." size="small" @input="searchStockForWatchlist" clearable/>
                            </div>
                            <div v-if="watchlistResults.length" class="watchlist-search-results">
                                <div v-for="r in watchlistResults" :key="r.code" class="watchlist-search-item hover-row" @click="addSearchResult(r)">
                                    <span><strong>{{ r.code }}</strong> <span class="color-tertiary">{{ r.name }}</span></span>
                                    <span class="watchlist-add-hint">+ 添加</span>
                                </div>
                            </div>
                            <!-- 排序栏 -->
                            <div v-if="watchlist.length > 1" class="watchlist-sort-bar">
                                <span class="watchlist-sort-label">排序:</span>
                                <el-radio-group v-model="watchlistSort" size="small">
                                    <el-radio-button label="default">默认</el-radio-button>
                                    <el-radio-button label="name">名称</el-radio-button>
                                    <el-radio-button label="added">加入时间</el-radio-button>
                                    <el-radio-button label="score">评分</el-radio-button>
                                </el-radio-group>
                            </div>
                            <!-- v3.17.9 (FR-3.17.9): 自选加载骨架屏（数据到达前展示, 到达后替换） -->
                            <qc-state-panel v-if="watchlistLoading" type="loading"></qc-state-panel>
                            <!-- 空状态 -->
                            <!-- v3.16 (16.7): 离线检测 -->
                            <qc-state-panel v-else-if="!isOnline && watchlist.length === 0" type="offline" @retry="loadWatchlist"></qc-state-panel>
                            <div v-else-if="watchlist.length === 0" class="watchlist-empty">
                                <div class="watchlist-empty-icon"><qc-icon name="star" :size="32" /></div>
                                <div class="watchlist-empty-title">暂无自选股</div>
                                <div class="watchlist-empty-hint">搜索股票代码或名称添加</div>
                            </div>
                            <!-- 自选列表 -->
                            <div v-else>
                                <!-- v3.16 (16.7): 虚拟滚动，仅渲染可视区行（500+ 自选不卡顿） -->
                                <qc-virtual-list class="vlist-h-calc watchlist-vlist" :items="sortedWatchlist" :row-height="detailSplitEnabled ? 76 : 56">
                                    <template #default="{ item: stock }">
                                    <!-- v3.17.8 (FR-3.17.8): 移动端左滑露出删除操作（.swipe-reveal），长按复制代码 -->
                                    <div class="watchlist-item swipe-reveal" :data-copy-code="stock.code" @click="detailSplitEnabled ? showStockDetail(stock.code) : showStockKline(stock.code, stock.name)" :class="{'watchlist-item-selected': selectedWatchlistCodes.includes(stock.code), 'is-active': detailSplitEnabled && stockDetail && stockDetail.stock === stock.code}">
                                        <div class="swipe-reveal-main">
                                        <div class="watchlist-checkbox" @click.stop="toggleSelectWatchlist(stock.code)">
                                            <span v-if="selectedWatchlistCodes.includes(stock.code)" class="watchlist-checkbox-check">✓</span>
                                        </div>
                                        <div class="watchlist-info">
                                            <span class="watchlist-code">{{ stock.code }}</span>
                                            <span class="watchlist-name">{{ stock.name }}</span>
                                            <span v-if="batchRunning && batchStatuses[stock.code]==='running'" class="watchlist-status spinning"><qc-icon name="loader" :size="12" /></span>
                                            <!-- V6.6: getWatchlistScore().color 函数计算色，保留内联 -->
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).bg, color: getWatchlistScore(stock.code).color}">
                                                {{ fmtNum(getWatchlistScore(stock.code).score) }}
                                            </span>
                                        </div>
                                        <div class="watchlist-actions">
                                            <el-button size="small" @click.stop="watchlistEvaluate(stock.code, stock.name)" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> <span class="wl-btn-label">评估</span></el-button>
                                            <el-button size="small" @click.stop="showStockKline(stock.code, stock.name)"><qc-icon name="trending-up" :size="14" /> <span class="wl-btn-label">K线</span></el-button>
                                            <el-button size="small" type="danger" text @click.stop="removeFromWatchlist(stock.code)" aria-label="从自选删除"><qc-icon name="trash-2" :size="14" /></el-button>
                                        </div>
                                        <!-- v3.17.7 实时化 (FR-3.17.7): 实时报价（涨跌色/涨跌幅/量比/涨速 + 预警）
                                             V5.19 (F4): 移出 .watchlist-info 至行级 — 双栏窄栏时占满整行成为第二行 -->
                                        <div v-if="realtimeQuotes[stock.code]" class="watchlist-quote">
                                            <!-- V6.6: realtimeQuoteColor() 实时涨跌计算色，保留内联 -->
                                            <span class="quote-price" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePriceText(stock.code) }}</span>
                                            <span class="quote-pct" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePctText(stock.code) }}</span>
                                            <span class="quote-meta">量比 {{ realtimeRatioText(stock.code, 'volume_ratio') }}</span>
                                            <span class="quote-meta">涨速 {{ realtimeRatioText(stock.code, 'rise_speed') }}%</span>
                                            <span v-if="quoteWarningFor(stock.code)" class="rt-warn-tag">{{ quoteWarningFor(stock.code) }}</span>
                                        </div>
                                        </div>
                                        <div class="swipe-reveal-actions">
                                            <el-button size="small" type="danger" @click.stop="removeFromWatchlist(stock.code)"><qc-icon name="trash-2" :size="14" /> 删除</el-button>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                            </template>
                            <template #pane>
                                <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                            </template>
                            </qc-detail-split>
                        </div>
                    </div>

                    <!-- v5.4.0 (FR-5.4.4): 重点跟踪视图 -->
                    <div v-else-if="currentSubPage === 'focus'">
                        <qc-focus-view></qc-focus-view>
                    </div>

                    <!-- v3.17.8 (FR-3.17.5): 组合/模拟持仓视图 代码起点 -->
                    <div v-else-if="currentSubPage === 'portfolio'" class="portfolio-view">
                        <!-- 组合汇总条 -->
                        <div class="card portfolio-summary-card">
                            <div class="card-title">{{ t('ai.portfolioSummary') }}</div>
                            <div class="portfolio-summary-row">
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总市值</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_market_value, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总成本</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_cost, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">浮动盈亏</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit)">{{ fmtSigned(summary && summary.float_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">当日收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.day_profit)">{{ fmtSigned(summary && summary.day_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">累计收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.cumulative_profit)">{{ fmtSigned(summary && summary.cumulative_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">持仓收益率</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit_pct)">{{ fmtSignedPct(summary && summary.float_profit_pct) }}</div>
                                </div>
                            </div>
                            <div v-if="summary && summary.note" class="portfolio-summary-note">{{ summary.note }}</div>
                        </div>

                        <!-- 组合收益曲线 -->
                        <div class="card portfolio-chart-card">
                            <div class="portfolio-chart-head">
                                <div class="card-title">{{ t('ai.portfolioCurve') }}</div>
                                <el-radio-group v-model="equityDays" size="small" @change="loadEquity(equityDays)">
                                    <el-radio-button :value="7">近7日</el-radio-button>
                                    <el-radio-button :value="30">近30日</el-radio-button>
                                    <el-radio-button :value="90">近90日</el-radio-button>
                                </el-radio-group>
                            </div>
                            <qc-state-panel v-if="equityLoading" type="loading"></qc-state-panel>
                            <div v-else-if="!equityHasData" class="portfolio-chart-empty">{{ equityNote || '暂无收益曲线数据' }}</div>
                            <div v-else id="portfolioEquityChart" class="portfolio-equity-chart"></div>
                            <div v-if="equityNote" class="portfolio-chart-note">{{ equityNote }}</div>
                        </div>

                        <!-- 持仓明细 / 调仓记录 -->
                        <div class="card">
                            <div class="portfolio-title-row">
                                <el-radio-group v-model="portfolioTab" size="small">
                                    <el-radio-button value="positions">持仓明细</el-radio-button>
                                    <el-radio-button value="trades">调仓记录</el-radio-button>
                                    <el-radio-button value="risk">风控</el-radio-button>
                                </el-radio-group>
                                <el-button size="small" type="primary" @click="showAddForm = !showAddForm">{{ showAddForm ? '收起表单' : '新增持仓' }}</el-button>
                            </div>

                            <!-- 新增持仓表单 -->
                            <div v-if="showAddForm" class="portfolio-add-form">
                                <el-input v-model="addForm.stock_code" placeholder="股票代码" size="small" class="portfolio-form-item" clearable />
                                <el-input v-model="addForm.stock_name" placeholder="股票名称(可选)" size="small" class="portfolio-form-item" clearable />
                                <el-input-number v-model="addForm.cost_price" :min="0" :precision="3" size="small" class="portfolio-form-item" placeholder="成本价" />
                                <el-input-number v-model="addForm.quantity" :min="0" :precision="2" size="small" class="portfolio-form-item" placeholder="数量" />
                                <el-button type="primary" size="small" :loading="addSaving" @click="addPosition">保存持仓</el-button>
                            </div>

                            <!-- 持仓列表 -->
                            <template v-if="portfolioTab === 'positions'">
                                <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadPortfolio"></qc-state-panel>
                                <qc-state-panel v-else-if="loadError" type="error" @retry="loadPortfolio"></qc-state-panel>
                                <div v-else-if="positions.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无持仓，添加一只股票开始跟踪</div>
                                </div>
                                <div v-else class="portfolio-table-wrap">
                                    <table class="portfolio-table">
                                        <thead>
                                            <tr>
                                                <th>代码 / 名称</th>
                                                <th>成本价</th>
                                                <th>数量</th>
                                                <th>现价</th>
                                                <th>市值</th>
                                                <th>浮动盈亏</th>
                                                <th>当日涨跌</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="p in positions" :key="p.stock_code">
                                                <td>
                                                    <div class="portfolio-stock">{{ p.stock_name }}</div>
                                                    <div class="portfolio-code">{{ p.stock_code }}</div>
                                                </td>
                                                <td>{{ fmtNum(p.cost_price, 3) }}</td>
                                                <td>{{ fmtNum(p.quantity, 2) }}</td>
                                                <td>{{ p.close != null ? fmtNum(p.close, 2) : '数据暂不可用' }}</td>
                                                <td>{{ p.market_value != null ? fmtNum(p.market_value, 2) : '--' }}</td>
                                                <td>
                                                    <span v-if="p.float_profit != null" :class="signClass(p.float_profit)">{{ fmtSigned(p.float_profit) }} ({{ fmtSignedPct(p.float_profit_pct) }})</span>
                                                    <span v-else class="portfolio-na">数据暂不可用</span>
                                                </td>
                                                <td>
                                                    <span v-if="p.pct_chg != null" :class="signClass(p.pct_chg)">{{ fmtSignedPct(p.pct_chg) }}</span>
                                                    <span v-else class="portfolio-na">--</span>
                                                </td>
                                                <td>
                                                    <!-- V5.3.0 (T-5.3.3.4): 详情按钮 — 打开股票详情弹窗 (含跳转日历) -->
                                                    <el-button size="small" @click="showStockDetail(p.stock_code)">详情</el-button>
                                                    <el-button size="small" @click="openTradeForm(p.stock_code, p.stock_name)">调仓</el-button>
                                                    <el-button size="small" type="danger" text @click="removePosition(p.stock_code)">删除</el-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>

                            <!-- 调仓记录 -->
                            <template v-else-if="portfolioTab === 'trades'">
                                <div v-if="trades.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无调仓记录</div>
                                </div>
                                <div v-else class="portfolio-trades-list">
                                    <div v-for="t in trades" :key="t.id" class="portfolio-trade-item">
                                        <div class="portfolio-trade-main">
                                            <span class="portfolio-trade-action" :class="t.action === 'buy' ? 'portfolio-buy' : 'portfolio-sell'">{{ t.action === 'buy' ? '买入' : '卖出' }}</span>
                                            <span class="portfolio-trade-stock">{{ t.stock_name }} {{ t.stock_code }}</span>
                                        </div>
                                        <div class="portfolio-trade-meta">价格 {{ fmtNum(t.price, 3) }} × {{ fmtNum(t.quantity, 2) }} · {{ t.trade_date || t.created_at }}</div>
                                        <div v-if="t.note" class="portfolio-trade-note">{{ t.note }}</div>
                                    </div>
                                </div>
                            </template>

                            <!-- V5.0.3 T-5.0.34: 风控 Tab (指标卡/规则/再平衡建议) -->
                            <template v-else-if="portfolioTab === 'risk'">
                                <qc-state-panel v-if="riskLoading" type="loading"></qc-state-panel>
                                <div v-else-if="!riskHasData && riskData.rules.length === 0" class="portfolio-chart-empty">{{ riskNote || '暂无风险数据' }}</div>
                                <div v-else class="portfolio-risk-panel">
                                    <div v-if="riskHasData" class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">组合风险指标</div>
                                        <div class="portfolio-risk-grid">
                                            <div v-for="item in riskMetricList" :key="item.key" class="portfolio-risk-metric">
                                                <div class="portfolio-risk-label">{{ item.label }}</div>
                                                <div class="portfolio-risk-value">{{ item.value }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">风控规则 <span class="portfolio-risk-sub">(集中度/止损/止盈/回撤熔断)</span></div>
                                        <div v-for="rule in riskData.rules" :key="rule.rule_id" class="portfolio-rule-item" :class="rule.triggered ? 'portfolio-rule-warn' : ''">
                                            <span class="portfolio-rule-badge" :class="rule.triggered ? 'portfolio-rule-badge-warn' : 'portfolio-rule-badge-ok'">{{ rule.triggered ? '触发' : '正常' }}</span>
                                            <span class="portfolio-rule-type">{{ rule.type }}</span>
                                            <span class="portfolio-rule-msg">{{ rule.message || (rule.triggered ? '' : '未触发') }}</span>
                                        </div>
                                    </div>
                                    <div v-if="riskData.rebalance" class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">再平衡建议 <span class="portfolio-risk-sub">(波动率目标仓位 vs 当前权重)</span></div>
                                        <div class="portfolio-table-wrap">
                                            <table class="portfolio-table">
                                                <thead><tr><th>标的</th><th>当前权重</th><th>目标权重</th><th>调整</th></tr></thead>
                                                <tbody>
                                                    <tr v-for="(diff, code) in riskData.rebalance.diffs" :key="code">
                                                        <td>{{ code }}</td>
                                                        <td>{{ fmtNum(riskData.rebalance.current[code], 4) }}</td>
                                                        <td>{{ fmtNum(riskData.rebalance.targets[code], 4) }}</td>
                                                        <td :class="signClass(diff * 100)">{{ fmtSignedPct(diff * 100) }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div v-if="riskNote" class="portfolio-chart-note">{{ riskNote }}</div>
                                </div>
                            </template>
                        </div>

                        <!-- 调仓弹窗 -->
                        <el-dialog v-model="tradeFormVisible" title="记录调仓" width="420px">
                            <div class="portfolio-trade-form">
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">股票</span>
                                    <span class="portfolio-trade-stock">{{ tradeForm.stock_code }} {{ tradeForm.stock_name }}</span>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">方向</span>
                                    <el-radio-group v-model="tradeForm.action" size="small">
                                        <el-radio-button value="buy">买入</el-radio-button>
                                        <el-radio-button value="sell">卖出</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">价格</span>
                                    <el-input-number v-model="tradeForm.price" :min="0" :precision="3" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">数量</span>
                                    <el-input-number v-model="tradeForm.quantity" :min="0" :precision="2" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">日期</span>
                                    <el-date-picker v-model="tradeForm.trade_date" type="date" size="small" value-format="YYYY-MM-DD" placeholder="默认今天" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">备注</span>
                                    <el-input v-model="tradeForm.note" size="small" placeholder="可选" />
                                </div>
                            </div>
                            <template #footer>
                                <el-button size="small" @click="tradeFormVisible = false">取消</el-button>
                                <el-button type="primary" size="small" :loading="tradeSaving" @click="submitTrade">保存</el-button>
                            </template>
                        </el-dialog>
                    </div>
                </div>`,setup(){const{ref:t,watch:g,onUnmounted:e}=Vue,u=a("qcState");if(!u)return{};function m(){if(!u.hasMoreAiHistory||!u.loadMoreAiHistory||u.currentPage.value!=="ai"||u.currentSubPage.value!=="history")return;const fe=document.documentElement;fe.scrollTop+window.innerHeight>=fe.scrollHeight-300&&u.loadMoreAiHistory()}window.addEventListener("scroll",m,{passive:!0}),e(()=>window.removeEventListener("scroll",m));const T=t(null),r=t(!1),n=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function f(fe){return!fe||fe.total===0||fe.rate===null||fe.rate===void 0?"--":fe.rate.toFixed(2)+"%"}const o=t(5);function x(fe){o.value=fe}function w(fe,Se){if(!fe)return"--";if(fe.available===!1)return"— 数据不可达";const Y=fe["hit_n"+Se];return Y===!0?"✓ 命中":Y===!1?"✗ 未中":"– 中性/待验证"}async function E(){r.value=!0;try{const Se=await(await fetch("/api/ai/track")).json();T.value=Se&&Se.success?Se.data:null}catch(fe){console.warn("[eval-track] 评估命中率加载失败:",fe),T.value=null}finally{r.value=!1}}g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(fe){fe==="ai/evaluation-analysis"&&E()},{immediate:!0});const C=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:q,summary:F,trades:D,loading:d,loadError:i,showAddForm:h,addForm:V,addSaving:W,tradeFormVisible:S,tradeForm:O,tradeSaving:K,portfolioTab:A,equityDays:L,equityLoading:H,equityNote:$,equityHasData:Z,loadPortfolio:le,addPosition:te,removePosition:R,openTradeForm:s,submitTrade:y,loadTrades:l,loadEquity:p,fmtSigned:X,fmtSignedPct:P,signClass:b,riskTab:v,riskLoading:k,riskNote:c,riskHasData:N,riskData:oe,riskMetricList:J,loadRisk:M}=C;g(q,function(fe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((fe||[]).map(function(Se){return{code:Se.stock_code,name:Se.stock_name||Se.stock_code}}))},{deep:!0}),g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(fe){fe==="ai/portfolio"?(le(),l(),p(L?L.value:30),typeof M=="function"&&M()):fe==="ai/overview"&&le()},{immediate:!0});let U="",ie=!1;return g(function(){const fe=u.currentSubPage&&u.currentSubPage.value,Se=!!(u.detailSplitEnabled&&u.detailSplitEnabled.value),Y={sub:fe,split:Se,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(fe==="history"){const ce=u.aiHistoryView&&u.aiHistoryView.value||"date",Ae=ce==="date"?u.groupedByDate:ce==="month"?u.groupedByMonth:u.aiHistoryByStock,se=Ae&&Ae.value||{},ke=Object.keys(se);Y.kind="history",Y.view=ce,Y.key=ke.length?ke[0]:"",Y.first=ke.length&&(se[ke[0]]||[])[0]||null,Y.expandList=ce==="date"?u.expandedDates:ce==="month"?u.expandedMonths:u.expandedStocks,Y.expandFn=ce==="date"?u.toggleDateExpand:ce==="month"?u.toggleMonthExpand:u.toggleStockExpand}else if(fe==="chat_history"){const ce=u.chatHistoryView&&u.chatHistoryView.value||"date",Ae=ce==="date"?u.chatGroupedByDate:ce==="month"?u.chatGroupedByMonth:u.chatGroupedByStock,se=Ae&&Ae.value||{},ke=Object.keys(se);Y.kind="chat",Y.view=ce,Y.key=ke.length?ke[0]:"",Y.first=ke.length&&(se[ke[0]]||[])[0]||null,Y.expandList=ce==="date"?u.expandedChatDates:ce==="month"?u.expandedChatMonths:u.expandedChatStocks,Y.expandFn=ce==="date"?u.toggleChatDateExpand:ce==="month"?u.toggleChatMonthExpand:u.toggleChatStockExpand}return Y},function(fe){if(!fe.split||!fe.first||!fe.kind)return;const Se=fe.sub!==U,Y=u.stockDetail&&u.stockDetail.value,ce=!!(Y&&Y.stock);if(!Se&&ce||ie)return;U=fe.sub,ie=!0;try{fe.key&&fe.expandList&&fe.expandFn&&fe.expandList.value&&fe.expandList.value.indexOf(fe.key)<0&&fe.expandFn(fe.key)}catch{}const Ae=fe.kind==="history"?u.viewAiResult(fe.first):u.viewChatSession(fe.first);Ae&&typeof Ae.finally=="function"?Ae.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...u,trackData:T,trackLoading:r,trackWindows:n,fmtTrackRate:f,loadTrack:E,trackWindow:o,setTrackWindow:x,trackHitText:w,positions:q,summary:F,trades:D,loading:d,loadError:i,showAddForm:h,addForm:V,addSaving:W,tradeFormVisible:S,tradeForm:O,tradeSaving:K,portfolioTab:A,equityDays:L,equityLoading:H,equityNote:$,equityHasData:Z,loadPortfolio:le,addPosition:te,removePosition:R,openTradeForm:s,submitTrade:y,loadTrades:l,loadEquity:p,fmtSigned:X,fmtSignedPct:P,signClass:b,riskTab:v,riskLoading:k,riskNote:c,riskHasData:N,riskData:oe,riskMetricList:J,loadRisk:M}}}})();(function(){const{ref:a,computed:t,watch:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
                <!-- V5.2.3: 市场复盘移入短线复盘 → 本组件在 shortterm 下也渲染该子页 (V6.9.1-fix: 异动扫描已删除) -->
                <div key="research">
                    <!-- V6.9.4 (FIX): 根 v-if currentPage 判断在组件内为死值导致整页空白 — 移除, 子页由 currentSubPage 控制 -->
                    <!-- V6.9.3 (F11.2): 策略研究菜单恒显 — 移除 researchMenuEnabled 占位分支 -->
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 策略研究概览</div>
                        <!-- 快速入口网格 -->
                        <div class="dashboard-grid">
                            <div class="stat-card clickable" @click="currentSubPage = 'quant-research'">
                                <div class="stat-icon"><qc-icon name="flask-conical" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ strategies.length }}</div>
                                    <div class="stat-label">策略总数</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="openStrategyManage('template')">
                                <div class="stat-icon"><qc-icon name="pencil" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ variants.length }}</div>
                                    <div class="stat-label">微调策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="openStrategyManage('custom')">
                                <div class="stat-icon"><qc-icon name="rocket" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ customs.length }}</div>
                                    <div class="stat-label">自定义策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="goShortterm('market-review')">
                                <div class="stat-icon"><qc-icon name="file-text" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ marketReviews.length }}</div>
                                    <div class="stat-label">市场复盘</div>
                                </div>
                            </div>
                            <!-- 5.1.0 (T-5.1.4): 研究历史入口 (实验持久化) -->
                            <div class="stat-card clickable" @click="openResearchHistory">
                                <div class="stat-icon"><qc-icon name="folder" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ researchHistory.length }}</div>
                                    <div class="stat-label">研究历史</div>
                                </div>
                            </div>
                        </div>
                        <!-- 快速入口列表 -->
                        <div class="card-title mt-4"><qc-icon name="link" :size="16" /> 快捷入口</div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'quant-research'">
                            <div class="consensus-badge">1</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="flask-conical" :size="14" /> 量化研究</div>
                                <div class="consensus-name">策略注册表 · 参数方案 · 因子IC分析 · 参数扫描</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="openStrategyManage('template')">
                            <div class="consensus-badge">2</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="pencil" :size="14" /> 模板编辑</div>
                                <div class="consensus-name">复制母本 → SelectionSpec 微调 → AI 交易码生成</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="openStrategyManage('custom')">
                            <div class="consensus-badge">3</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="rocket" :size="14" /> 全新创建</div>
                                <div class="consensus-name">AI 代写 · 本地回测 · AI 优化</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'backtest'">
                            <div class="consensus-badge">4</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="bar-chart-3" :size="14" /> 回测工作台</div>
                                <div class="consensus-name">单/多策略回测 · 净值曲线 · 年度收益</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="goShortterm('market-review')">
                            <div class="consensus-badge">5</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="file-text" :size="14" /> 市场复盘</div>
                                <div class="consensus-name">AI 每日市场解读 · 三大指数 · 板块资金 · 情绪分析</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <!-- 5.1.0 (T-5.1.4): 研究历史入口 (V6.9.1-fix: 异动扫描已删除, 编号 7→6) -->
                        <div class="consensus-item clickable" @click="openResearchHistory">
                            <div class="consensus-badge">6</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="folder" :size="14" /> 研究历史</div>
                                <div class="consensus-name">因子IC · 分层 · 扫描 · 回测 实验记录 · 对比</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                    </div>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
                        <!-- V6.9.4 (F6.2): 持仓数据文件缺失可诊断提示条 (策略定义列表仍可用) -->
                        <div v-if="strategiesWarn" class="text-danger-semibold mt-8" role="alert"><qc-icon name="alert-triangle" :size="14" /> {{ strategiesWarn }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || '策略加载失败'"
                            desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <template v-else>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="flask-conical" :size="18" /></div><div class="stat-label">策略总数</div><div class="stat-value">{{ strategies.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><span class="qc-status-dot is-success"></span></div><div class="stat-label">当前策略</div><div class="stat-value stat-value-lg">{{ activeStrategy ? activeStrategy.name : '—' }}</div></div>
                            </div>
                            <!-- 策略列表: 卡片 + 选择 -->
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-select-lg" v-model="activeStrategyId" size="small" placeholder="选择策略" @change="onStrategyChange">
                                    <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runActiveStrategy" :loading="strategyRunning"><qc-icon name="play" :size="14" /> 手工运行</el-button>
                                <el-date-picker class="w-150" v-model="runAsOf" type="date" size="small" placeholder="评估日(默认最新)" value-format="YYYY-MM-DD"/>
                                <el-button size="small" @click="exportActivePtradeCode"><qc-icon name="upload" :size="14" /> 导出 PTrade 代码</el-button>
                            </div>
                            <!-- v3.21 (P0-6): 策略纳管卡片 (默认纳管不可删, 可复制调参) -->
                            <div class="strategy-params flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <span class="strategy-param-label">纳管</span>
                                    <el-switch v-model="govEnabled" @change="updateGov" />
                                    <span class="strategy-param-label">进日历</span>
                                    <el-switch v-model="govShowCalendar" @change="updateGov" />
                                    <el-select class="w-select-sm" size="small" v-model="govSchedule" @change="updateGov">
                                        <el-option v-for="t in ['20:00','21:00','22:00','08:00']" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-select-sm" size="small" v-model="govUniverse" @change="updateGov" :disabled="!govEnabled">
                                        <el-option value="default" label="内置池" />
                                        <el-option value="all" label="全市场" />
                                    </el-select>
                                    <el-button size="small" type="warning" @click="runOnceActive" :loading="govRunning"><qc-icon name="zap" :size="14" /> 立即生成持仓</el-button>
                                    <el-button v-if="lastHoldings" size="small" @click="openLastHoldings"><qc-icon name="file-text" :size="14" /> 查看最近持仓</el-button>
                                    <el-button size="small" @click="cloneStrategy"><qc-icon name="file-text" :size="14" /> 复制为副本调参</el-button>
                                </div>
                            </div>
                            <div v-if="activeStrategy" class="strategy-detail">
                                <div class="text-sm-tertiary-mt8">{{ activeStrategy.description }}</div>
                                <!-- v3.21 (P0-3): 参数方案保存/加载 -->
                                <div class="strategy-params">
                                    <div class="strategy-param-row">
                                        <el-select class="w-select-lg" size="small" v-model="profileSelect" placeholder="加载已存方案" @change="applyProfile">
                                            <el-option v-for="p in profiles" :key="p.id" :label="p.name" :value="p.id" />
                                        </el-select>
                                        <el-input class="w-140" size="small" v-model="profileName" placeholder="方案名" />
                                        <el-button size="small" type="primary" @click="saveProfile" :loading="savingProfile"><qc-icon name="save" :size="14" /> 保存方案</el-button>
                                        <el-button v-if="profileSelect" size="small" type="danger" @click="deleteProfile"><qc-icon name="trash-2" :size="14" /> 删除</el-button>
                                    </div>
                                </div>
                                <!-- schema 驱动参数表单 -->
                                <div class="strategy-params">
                                    <div v-for="f in activeStrategy.schema" :key="f.key" class="strategy-param-row">
                                        <label class="strategy-param-label">{{ f.label }}</label>
                                        <el-select v-if="f.type === 'enum'" class="w-select-lg" size="small" v-model="paramValues[f.key]" @change="paramValues[f.key] = $event">
                                            <el-option v-for="o in f.options" :key="o" :label="o" :value="o" />
                                        </el-select>
                                        <el-switch v-else-if="f.type === 'bool'" v-model="paramValues[f.key]"></el-switch>
                                        <el-input-number v-else class="w-200" size="small" :min="f.min" :max="f.max" :step="f.step || 1" v-model="paramValues[f.key]"></el-input-number>
                                    </div>
                                </div>
                                <!-- PTrade 代码预览 -->
                                <div v-if="ptradeCode" class="ptrade-code-box">
                                    <div class="strategy-param-label">PTrade 代码预览 ({{ ptradeCode.length }} 字符)</div>
                                    <pre class="ptrade-code-pre">{{ ptradeCode }}</pre>
                                    <el-button size="small" type="primary" @click="copyPtradeCode">复制代码</el-button>
                                </div>
                                <!-- 运行历史 -->
                                <div v-if="strategyRuns.length" class="strategy-runs">
                                    <div class="strategy-param-label">最近运行</div>
                                    <div v-for="run in strategyRuns.slice(0, 5)" :key="run.id" class="strategy-run-row">
                                        <span class="strategy-run-status" :class="run.status">{{ run.status }}</span>
                                        <span class="text-sm">{{ run.mode }} · {{ run.started_at }}</span>
                                        <span v-if="run.summary && run.summary.symbols" class="text-sm">选股 {{ run.summary.symbols.length }} 只</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- v3.20 (P1-F8): 因子研究 — 单因子IC评价 + 分层回测 -->
                        <div class="factor-research">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 因子研究</div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-select-lg" v-model="factorKey" size="small" placeholder="选择因子">
                                    <el-option v-for="f in (activeStrategy && activeStrategy.factor_specs) || factorOptions" :key="f.name" :label="f.name + ' (' + f.category + ')'" :value="f.name" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runFactorIc" :loading="factorIcLoading">IC 分析</el-button>
                                <el-button size="small" @click="runFactorLayer" :loading="factorLayerLoading">分层回测</el-button>
                                <el-button size="small" @click="runFactorDetail" :loading="factorDetailLoading">因子详情</el-button>
                            </div>
                            <!-- IC 报告 -->
                            <div v-if="factorIcReport" class="factor-ic-report">
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.ic_mean) }}</div>
                                        <div class="stat-label">IC 均值</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.icir) }}</div>
                                        <div class="stat-label">ICIR</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.win_rate) }}</div>
                                        <div class="stat-label">IC>0 胜率</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.grade }}</div>
                                        <div class="stat-label">评级</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8">样本 {{ factorIcReport.count }} 日</div>
                            </div>
                            <!-- 分层回测 -->
                            <div v-if="factorLayerResult" class="factor-layer-result">
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <div class="stat-card p-12" v-for="ly in factorLayerResult.layers" :key="ly.layer">
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ fmtNum(ly.return) }}%</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ fmtNum(factorLayerResult.spread) }}%
                                </div>
                            </div>
                            <!-- T-5.1.16: 因子详情面板 (定义/覆盖度/IC衰减/换手/多重检验/近2年) -->
                            <div v-if="factorDetail" class="factor-detail-panel mt-8">
                                <div class="card-title"><qc-icon name="file-text" :size="16" /> 因子详情 <span class="text-sm-tertiary">{{ factorDetail.meta.name }} · {{ factorDetail.meta.category }}</span></div>
                                <div v-if="factorDetail.meta.description" class="text-sm-tertiary-mt8">{{ factorDetail.meta.description }}</div>
                                <!-- 覆盖度 -->
                                <div class="grid-auto-fit-140-mb16 mt-8">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.coverage * 100, 0) }}%</div>
                                        <div class="stat-label">因子覆盖度</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorDetail.ic_decay.optimal_window || '—' }}</div>
                                        <div class="stat-label">最优持有期</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.annual_turnover, 0) }}</div>
                                        <div class="stat-label">年化换手</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.cost_drag_pct, 1) }}%</div>
                                        <div class="stat-label">年化成本拖累</div>
                                    </div>
                                </div>
                                <!-- IC 衰减 -->
                                <div v-if="factorDetail.ic_decay.windows.length" class="ic-decay-row mt-8">
                                    <span class="text-sm-secondary">IC 衰减:</span>
                                    <span v-for="w in factorDetail.ic_decay.windows" :key="w.window" class="text-sm-primary ic-decay-chip"
                                          :class="{ 'ic-best': w.window === factorDetail.ic_decay.optimal_window }">
                                        {{ w.window }} · IC {{ w.ic_mean != null ? fmtNum(w.ic_mean, 3) : '—' }}
                                    </span>
                                </div>
                                <!-- 多重检验 -->
                                <div class="mt-8" :class="factorDetail.multiple_testing.flagged ? 'text-danger-semibold' : 'text-sm-tertiary'">
                                    {{ factorDetail.multiple_testing.note }}
                                </div>
                                <!-- 近1-2年专测 -->
                                <div v-if="factorDetail.recent && factorDetail.recent.optimal_window" class="text-sm-tertiary-mt8">
                                    近1-2年专测: 最优持有期 {{ factorDetail.recent.optimal_window }}
                                    (衰减比 {{ factorDetail.recent.decay_rate != null ? fmtNum(factorDetail.recent.decay_rate, 2) : '—' }})
                                </div>
                            </div>
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div class="sweep-research mt-8">
                                <div class="card-title"><qc-icon name="flask-conical" :size="16" /> 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading"><qc-icon name="play" :size="14" /> 运行扫描</el-button>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
                                <!-- V5.0.2 T-5.0.24: 参数稳定性诊断 (高原 + 过拟合判定) -->
                                <div v-if="sweepStability" class="param-stability mt-8" :class="{ 'param-stability-overfit': sweepStability.verdict === 'overfit', 'param-stability-robust': sweepStability.verdict === 'robust' }">
                                    <span class="text-sm-secondary">参数稳定性:</span>
                                    <span v-if="sweepStability.verdict === 'overfit'" class="text-danger-semibold">过拟合风险 (扰动衰减比 {{ fmtNum(sweepStability.spread_ratio) }})</span>
                                    <span v-else-if="sweepStability.verdict === 'robust'" class="text-sm-primary">稳健高原 (衰减比 {{ fmtNum(sweepStability.spread_ratio) }}, 高原覆盖 {{ fmtNum(sweepStability.plateau_ratio * 100, 0) }}%)</span>
                                    <span v-else class="text-sm-tertiary">{{ sweepStability.note || '稳定性诊断不可用' }}</span>
                                    <span v-if="sweepStability.verdict !== 'unknown'" class="text-sm-tertiary">最优参数 {{ sweepStability.best_param }} · 高原区间 [{{ sweepStability.plateau_min }}, {{ sweepStability.plateau_max }}]</span>
                                </div>
                                <div v-if="sweepResult && sweepResult.length" class="sweep-table mt-8">
                                    <div v-for="(row, i) in sweepResult" :key="i" class="sweep-row flex-wrap-gap-12-mb16-c" :class="{ 'sweep-best': i === 0 }">
                                        <span class="text-sm-secondary w-260">参数: {{ JSON.stringify(row.params) }}</span>
                                        <span class="text-sm-primary">年化 {{ (row.annual_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">总收益 {{ (row.total_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary" :class="{ down: row.max_drawdown < -0.2 }">回撤 {{ (row.max_drawdown * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">夏普 {{ row.sharpe_ratio.toFixed(2) }}</span>
                                        <span v-if="row.overfit_warning" class="text-sm-tertiary"><qc-icon name="alert-triangle" :size="14" /> 疑似过拟合</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-manage'" class="card">
                        <!-- V6.6.1 (PRD F-6.6.7): 策略管理 = 模板编辑(原策略编写) + 全新创建(原全新策略) 两态 -->
                        <div class="card-title"><qc-icon name="layers" :size="16" /> 策略管理 <span class="text-sm-tertiary">模板编辑：复制母本微调 · 全新创建：AI 代写</span></div>
                        <div class="flex-gap-8-mb16">
                            <el-button :type="strategyManageMode === 'template' ? 'primary' : ''" size="small" @click="strategyManageMode = 'template'"><qc-icon name="settings" :size="14" /> 模板编辑</el-button>
                            <el-button :type="strategyManageMode === 'custom' ? 'primary' : ''" size="small" @click="strategyManageMode = 'custom'"><qc-icon name="rocket" :size="14" /> 全新创建</el-button>
                        </div>
                        <template v-if="strategyManageMode === 'template'">
                        <!-- v3.22 (I3A): 第1步 选择母本 + 复制 -->
                        <div class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">母本策略</span>
                            <el-select class="w-select-lg" size="small" v-model="activeStrategyId" placeholder="选择母本" @change="onStrategyChange">
                                <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                            </el-select>
                            <el-input class="w-160" size="small" v-model="profileName" placeholder="新策略名(可选)" />
                            <el-button size="small" type="primary" @click="cloneNewStrategy" :loading="variantBusy"><qc-icon name="file-text" :size="14" /> 复制为微调策略</el-button>
                            <el-button size="small" @click="loadVariants"><qc-icon name="refresh" :size="14" /> 刷新列表</el-button>
                        </div>
                        <!-- variant 列表 -->
                        <div v-if="variants.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">微调策略</span>
                            <el-select class="w-select-lg" size="small" v-model="variantSelected" placeholder="选择微调策略" @change="selectVariant(variantSelected)">
                                <el-option v-for="v in variants" :key="v.id" :label="(v.name || v.id) + ' (' + v.id + ')'" :value="v.id" />
                            </el-select>
                            <el-button size="small" type="warning" @click="runVariantOnce" :loading="variantBusy"><qc-icon name="zap" :size="14" /> 生成持仓矩阵</el-button>
                        </div>
                        <div v-if="variantMsg" class="text-sm-primary mt-8">{{ variantMsg }}</div>
                        <!-- v3.22 (I3A): 第2步 SelectionSpec 微调协议 -->
                        <div v-if="variantSelected && variantSpec" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="target" :size="16" /> SelectionSpec 微调选股协议 <span class="text-sm-tertiary">纯收紧约束: 仅在持仓矩阵内二次筛选</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">持仓数量</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="50" v-model="variantSpec.stock_count" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">调仓周期</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="60" v-model="variantSpec.rebalance_cycle" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">剔除 ST</label>
                                    <el-switch v-model="variantSpec.exclude_st" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">指数成分</label>
                                    <el-select class="w-select-md" size="small" v-model="variantSpec.index_membership" clearable>
                                        <el-option value="hs300" label="沪深300" />
                                        <el-option value="zz500" label="中证500" />
                                        <el-option value="zz1000" label="中证1000" />
                                    </el-select>
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">行业偏好</label>
                                    <el-input class="w-200" size="small" v-model="specIndustryText" placeholder="逗号分隔, 如 电子,医药" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">市值范围(亿)</label>
                                    <el-input class="w-200" size="small" v-model="specCapText" placeholder="如 50,2000 (留空不限)" />
                                </div>
                            </div>
                            <el-button size="small" type="primary" @click="saveVariantSpec" :loading="variantSaving"><qc-icon name="save" :size="14" /> 保存 SelectionSpec</el-button>
                        </div>
                        <!-- v3.22 (I3A): 第3步 AI 交易码 -->
                        <div v-if="variantSelected" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="bot" :size="16" /> AI 交易码 <span class="text-sm-tertiary">读取持仓矩阵 + SelectionSpec → PTrade 兼容代码(含风控)</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" type="primary" @click="genVariantAiCode" :loading="aiCodeLoading"><qc-icon name="zap" :size="14" /> 生成 AI 交易码</el-button>
                                <el-button size="small" @click="copyVariantCode" :disabled="!aiCode"><qc-icon name="file-text" :size="14" /> 复制代码</el-button>
                            </div>
                            <div v-if="aiCode" class="ptrade-code-pre">{{ aiCode }}</div>
                        </div>
                        </template>
                        <template v-else>
                        <!-- v3.22 (I3B): 第1步 AI 代写 -->
                        <div class="strategy-params">
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-input class="w-180" size="small" v-model="customName" placeholder="策略名(如 均线突破)" />
                                <el-button size="small" type="primary" @click="genCustomCode" :loading="customGenLoading"><qc-icon name="bot" :size="14" /> AI 代写</el-button>
                                <el-button size="small" @click="loadCustoms"><qc-icon name="refresh" :size="14" /> 刷新列表</el-button>
                            </div>
                            <el-input type="textarea" :rows="3" size="small" v-model="customPrompt"
                                placeholder="描述策略思路, 如: 双均线金叉买入, 死叉卖出, 单只仓位20%, 止损8%" class="w-full" />
                        </div>
                        <!-- 自定义策略列表 -->
                        <div v-if="customs.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">自定义策略</span>
                            <el-select class="w-select-lg" size="small" v-model="customSelected" placeholder="选择策略">
                                <el-option v-for="c in customs" :key="c.id" :label="(c.name || c.id) + ' (' + c.id + ')'" :value="c.id" />
                            </el-select>
                            <el-button size="small" @click="loadCustomCode" :disabled="!customSelected"><qc-icon name="file-text" :size="14" /> 读取代码</el-button>
                            <el-button size="small" type="warning" @click="runCustomBacktest" :loading="customBtLoading"><qc-icon name="zap" :size="14" /> 本地回测</el-button>
                            <el-button size="small" type="primary" @click="runCustomOptimize" :loading="customOptLoading"><qc-icon name="brain" :size="14" /> AI 优化</el-button>
                        </div>
                        <div v-if="customMsg" class="text-sm-primary mt-8">{{ customMsg }}</div>
                        <!-- 代码区 -->
                        <div v-if="customCode" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="code" :size="16" /> 策略代码 <span class="text-sm-tertiary">PTrade 兼容</span></div>
                            <pre class="ptrade-code-pre">{{ customCode }}</pre>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" @click="copyCustomCode"><qc-icon name="file-text" :size="14" /> 复制代码</el-button>
                            </div>
                        </div>
                        <!-- 回测结果 -->
                        <div v-if="customBtResult" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="bar-chart-3" :size="16" /> 回测结果</div>
                            <div class="custom-bt-grid">
                                <div class="custom-bt-item"><span class="text-sm-tertiary">标的</span><b>{{ customBtResult.symbols.length }}</b></div>
                                <div class="custom-bt-item"><span class="text-sm-tertiary">区间</span><b>{{ customBtResult.dates[0] }} → {{ customBtResult.dates[1] }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ fmtNum(customBtResult.metrics.annual_return_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ fmtNum(customBtResult.metrics.max_drawdown_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ fmtNum(customBtResult.metrics.sharpe) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ fmtNum(customBtResult.metrics.win_rate_pct) }}%</b></div>
                            </div>
                        </div>
                        </template>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">{{ t('research.backtest') }}</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-select class="w-select-md" v-model="backtestStrategy" size="small" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker class="w-260" v-model="backtestRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                            <el-input-number class="w-140" v-model="backtestCapital" size="small" :min="10000" :step="50000"/>
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning"><qc-icon name="play" :size="14" /> 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.total_return_pct) }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.annual_return_pct) }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.max_drawdown_pct) }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.sharpe_ratio) }}</div>
                                    <div class="stat-label">夏普比率</div>
                                </div>
                            </div>
                            <div class="w-100-h320" id="backtestEquityChart"></div>
                            <div class="text-sm-tertiary-mt8">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <qc-state-panel v-else type="empty" icon="bar-chart-3" title="准备开始回测" desc="选择策略和日期范围后点击「运行回测」，结果将在此展示"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest-history'" class="card">
                        <div class="card-title flex-between">
                            <span>{{ t('research.backtestHistory') }}</span>
                            <div class="flex-c-gap-8">
                                <el-select class="w-select-sm" size="small" v-model="btHistoryDays" @change="loadBtHistory">
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                    <el-option label="近90天" :value="90" />
                                </el-select>
                                <el-button size="small" @click="loadBtHistory" :loading="btHistoryLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="btHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadBtHistory"></qc-state-panel>
                        <div v-else-if="!btHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无回测记录</div>
                            <div class="text-sm-tertiary-mt8">运行回测后，结果将自动记录在此</div>
                        </div>
                        <div v-else>
                            <div v-for="r in btHistory" :key="r.ts + '-' + r.sid" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div>
                                        <span class="strategy-name">{{ r.sid }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <span class="strategy-tag" v-if="r.summary">年化 {{ fmtNum(r.summary.annual_return) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtNum(r.summary.max_drawdown) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">夏普 {{ fmtNum(r.summary.sharpe_ratio) }}</span>
                                    </div>
                                </div>
                                <div v-if="r.summary" class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span class="text-sm-secondary">总收益: <strong :class="(r.summary.total_return || 0) >= 0 ? 'color-success' : 'color-danger'">{{ fmtNum(r.summary.total_return) }}%</strong></span>
                                    <span class="text-sm-secondary">胜率: <strong>{{ fmtNum(r.summary.win_rate) }}%</strong></span>
                                    <span class="text-sm-secondary">交易次数: <strong>{{ r.summary.total_trades || 0 }}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5.1.0 (T-5.1.4): 研究历史子页 (实验持久化列表/对比) -->
                    <div v-else-if="currentSubPage === 'research-history'" class="card">
                        <div class="card-title"><qc-icon name="folder" :size="16" /> 研究历史 <span class="text-sm-tertiary-normal">{{ researchHistory.length }} 条实验</span></div>
                        <!-- 类型过滤 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-radio-group v-model="researchHistoryType" size="small" @change="loadResearchHistory">
                                <el-radio-button label="">全部</el-radio-button>
                                <el-radio-button label="factor_ic">因子IC</el-radio-button>
                                <el-radio-button label="layer">分层</el-radio-button>
                                <el-radio-button label="sweep">扫描</el-radio-button>
                                <el-radio-button label="backtest">回测</el-radio-button>
                            </el-radio-group>
                            <span class="text-sm-tertiary">勾选 ≤10 条可对比</span>
                            <el-button size="small" :loading="researchExportLoading" @click="exportResearchHistory"><qc-icon name="download" :size="14" /> 导出 CSV</el-button>
                        </div>
                        <qc-state-panel v-if="researchHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="researchHistoryError" type="error" title="研究历史加载失败" desc="请检查网络后重试" @retry="loadResearchHistory"></qc-state-panel>
                        <div v-else-if="!researchHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无研究实验</div>
                            <div class="text-sm-tertiary-mt8">运行因子IC / 分层 / 参数扫描 / 回测后，结果将自动记录在此</div>
                        </div>
                        <template v-else>
                            <!-- 对比按钮 -->
                            <div v-if="researchHistorySelected.length >= 2" class="flex-c-gap-8 mb-12">
                                <el-button size="small" type="primary" :loading="researchCompareLoading" @click="runResearchCompare"><qc-icon name="bar-chart-3" :size="14" /> 对比所选 ({{ researchHistorySelected.length }})</el-button>
                                <el-button size="small" @click="researchHistorySelected = []">清空选择</el-button>
                            </div>
                            <!-- 对比结果 -->
                            <div v-if="researchCompareRows.length" class="card mb-12">
                                <div class="card-title"><qc-icon name="trending-up" :size="16" /> 实验对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>实验</th>
                                                <th>类型</th>
                                                <th>IC均值</th>
                                                <th>ICIR</th>
                                                <th>胜率</th>
                                                <th>年化</th>
                                                <th>回撤</th>
                                                <th>夏普</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in researchCompareRows" :key="row.id">
                                                <td>{{ row.subject }}</td>
                                                <td>{{ researchTypeLabel(row.type) }}</td>
                                                <td>{{ row.summary.ic_mean != null ? fmtNum(row.summary.ic_mean) : '—' }}</td>
                                                <td>{{ row.summary.icir != null ? fmtNum(row.summary.icir) : '—' }}</td>
                                                <td>{{ row.summary.win_rate != null ? fmtNum(row.summary.win_rate) + '%' : '—' }}</td>
                                                <td>{{ row.summary.annual_return != null ? fmtNum(row.summary.annual_return) + '%' : '—' }}</td>
                                                <td>{{ row.summary.max_drawdown != null ? fmtNum(row.summary.max_drawdown) + '%' : '—' }}</td>
                                                <td>{{ row.summary.sharpe_ratio != null ? fmtNum(row.summary.sharpe_ratio) : '—' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- 实验列表 -->
                            <div v-for="exp in researchHistory" :key="exp.id" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div class="flex-c-gap-8">
                                        <el-checkbox :model-value="researchHistorySelected.includes(exp.id)"
                                            @change="toggleResearchSelect(exp.id)"></el-checkbox>
                                        <span class="strategy-name">{{ exp.subject }}</span>
                                        <span class="strategy-tag">{{ researchTypeLabel(exp.type) }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ exp.created_at }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <el-button size="small" link type="primary" @click="toggleResearchDetail(exp.id)">详情</el-button>
                                        <el-button size="small" link type="danger" @click="deleteResearchHistory(exp.id)">删除</el-button>
                                    </div>
                                </div>
                                <div class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span v-if="exp.summary.ic_mean != null" class="text-sm-secondary">IC均值 <strong>{{ fmtNum(exp.summary.ic_mean) }}</strong></span>
                                    <span v-if="exp.summary.icir != null" class="text-sm-secondary">ICIR <strong>{{ fmtNum(exp.summary.icir) }}</strong></span>
                                    <span v-if="exp.summary.win_rate != null" class="text-sm-secondary">胜率 <strong>{{ fmtNum(exp.summary.win_rate) }}%</strong></span>
                                    <span v-if="exp.summary.annual_return != null" class="text-sm-secondary">年化 <strong>{{ fmtNum(exp.summary.annual_return) }}%</strong></span>
                                    <span v-if="exp.summary.max_drawdown != null" class="text-sm-secondary">回撤 <strong>{{ fmtNum(exp.summary.max_drawdown) }}%</strong></span>
                                    <span v-if="exp.summary.sharpe_ratio != null" class="text-sm-secondary">夏普 <strong>{{ fmtNum(exp.summary.sharpe_ratio) }}</strong></span>
                                    <span v-if="exp.summary.monotonic != null" class="text-sm-secondary">单调 <strong>{{ exp.summary.monotonic ? '✓' : '✗' }}</strong></span>
                                    <span v-if="exp.summary.spread != null" class="text-sm-secondary">多空价差 <strong>{{ fmtNum(exp.summary.spread) }}%</strong></span>
                                    <span v-if="exp.summary.best_param" class="text-sm-secondary">最优参数 <strong>{{ JSON.stringify(exp.summary.best_param) }}</strong></span>
                                </div>
                                <div v-if="exp.range" class="text-xs-tertiary">区间 {{ exp.date_range.join(' → ') }} · v{{ exp.app_version }}</div>
                                <template v-if="researchDetailId === exp.id">
                                    <div class="card mt-8">
                                        <div class="card-title">实验详情</div>
                                        <pre class="research-detail-pre">{{ JSON.stringify(exp, null, 2) }}</pre>
                                    </div>
                                </template>
                            </div>
                        </template>
                    </div>
                    <!-- v3.17.2 FR-3.17.2 市场复盘代码起点 -->
                    <div v-else-if="currentSubPage === 'market-review'" class="card market-review-card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作 (返回/刷新) -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-button v-if="selectedReviewDate" size="small" @click="selectedReviewDate = ''">← 返回列表</el-button>
                                <el-button size="small" @click="loadMarketReviews" aria-label="刷新市场复盘"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>

                        <!-- V5.15 (F8.2): 双栏 — 左日期中栏 (指标摘要) + 右内容 (列表/详情) -->
                        <div class="market-review-split" data-split-root>
                            <!-- 左: 日期中栏 (类似复盘日历) -->
                            <div class="market-review-date-list">
                                <div class="market-review-date-list-head">
                                    <span>复盘日期</span>
                                    <el-button size="small" text @click="loadMarketReviews" aria-label="刷新复盘日期"><qc-icon name="refresh" :size="14" /></el-button>
                                </div>
                                <div v-if="marketReviewLoading" class="color-secondary market-review-date-empty">加载中…</div>
                                <div v-else-if="!marketReviews.length" class="color-secondary market-review-date-empty">暂无复盘日期</div>
                                <div v-else class="market-review-date-items">
                                    <div v-for="item in marketReviews" :key="item.date" class="market-review-date-item"
                                         :class="{ 'is-active': item.date === selectedReviewDate }" role="button" tabindex="0"
                                         @click="toggleMarketReviewDate(item.date)"
                                         @keydown.enter.prevent="toggleMarketReviewDate(item.date)"
                                         @keydown.space.prevent="toggleMarketReviewDate(item.date)">
                                        <div class="market-review-date-item-date">{{ item.date }}</div>
                                        <div class="market-review-date-item-meta">
                                            <span>赚钱 <b :class="(item.summary && item.summary.money_effect > 0) ? 'is-rise' : ((item.summary && item.summary.money_effect < 0) ? 'is-fall' : '')">{{ fmtPct(item.summary && item.summary.money_effect) }}</b></span>
                                            <span>情绪 <b :class="(item.summary && item.summary.emotion_score != null && item.summary.emotion_score >= 0.8) ? 'meta-emotion-hot' : ((item.summary && item.summary.emotion_score != null && item.summary.emotion_score < 0.6) ? 'meta-emotion-cold' : '')">{{ fmtEmotion(item.summary && item.summary.emotion_score) }}</b></span>
                                            <span>涨停 <b>{{ item.summary && item.summary.zt_count != null ? item.summary.zt_count : '—' }}</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="split-divider" data-split-resize></div>
                            <!-- 右: 内容 (列表 / 详情) -->
                            <div class="market-review-split-content">
                            <!-- ===== 列表视图 ===== -->
                            <template v-if="!selectedReviewDate">
                                <qc-state-panel v-if="marketReviewLoading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="marketReviewError" type="error" title="复盘列表加载失败"
                                    desc="请检查网络后重试" @retry="loadMarketReviews"></qc-state-panel>
                                <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="file-text" title="暂无市场复盘"
                                    desc="尚未生成任何市场复盘报告"></qc-state-panel>
                                <div v-else class="market-review-list">
                                    <div class="flex-wrap mb-4">
                                        <div class="stat-card"><div class="stat-icon info"><qc-icon name="file-text" :size="18" /></div><div class="stat-label">复盘总数</div><div class="stat-value">{{ marketReviews.length }}</div></div>
                                        <div class="stat-card"><div class="stat-icon success"><qc-icon name="calendar" :size="18" /></div><div class="stat-label">最新复盘</div><div class="stat-value stat-value-lg">{{ marketReviews[0] ? marketReviews[0].date : '—' }}</div></div>
                                    </div>
                                    <div v-for="item in marketReviews" :key="item.date" class="market-review-row"
                                         tabindex="0" role="button" :aria-label="'查看 ' + item.date + ' 市场复盘'"
                                         @click="openMarketReview(item.date)"
                                         @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="market-review-row-main">
                                            <span class="market-review-date">{{ item.date }}</span>
                                            <span class="market-review-badge market-review-ai-badge">AI 解读</span>
                                            <span v-for="(src, i) in marketReviewSrcEntries(item.data_sources)" :key="i"
                                                  class="market-review-src" :class="{ 'is-unavailable': src.unavailable }">
                                                {{ src.label }} {{ src.value }}
                                            </span>
                                        </div>
                                        <span class="market-review-arrow">›</span>
                                    </div>
                                </div>
                            </template>

                        <!-- ===== 详情视图 ===== -->
                        <template v-else>
                            <div class="market-review-detail-head">
                                <el-button size="small" @click="backToMarketReviewList">返回列表</el-button>
                                <span class="market-review-detail-date">{{ selectedReviewDate }}</span>
                            </div>
                            <qc-state-panel v-if="marketReviewDetailLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="marketReviewDetailError" type="error" title="复盘详情加载失败"
                                desc="请检查网络后重试" @retry="loadMarketReviewDetail(selectedReviewDate)"></qc-state-panel>
                            <template v-else-if="marketReviewDetail">
                                <!-- ① 三大指数表现 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">三大指数表现</div>
                                    <div v-if="marketReviewDetail.market && marketReviewDetail.market.indexes && marketReviewDetail.market.indexes.length" class="market-review-index-grid">
                                        <div v-for="idx in marketReviewDetail.market.indexes" :key="idx.code" class="market-review-index-card">
                                            <div class="market-review-index-name">{{ idx.name }}</div>
                                            <div class="market-review-index-close">{{ idx.close != null ? Number(idx.close).toFixed(2) : '--' }}</div>
                                            <div class="market-review-index-chg" :class="marketReviewChgClass(idx.pct_chg)">{{ marketReviewChgText(idx.pct_chg) }}</div>
                                        </div>
                                    </div>
                                    <div v-else class="market-review-unavailable">指数数据不可达</div>
                                </div>

                                <!-- ② 领涨 / 领跌板块 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">板块表现</div>
                                    <div class="market-review-sector-grid">
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title up">领涨板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.leader && marketReviewDetail.sectors.leader.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.leader.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title down">领跌板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.laggard && marketReviewDetail.sectors.laggard.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.laggard.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- ③ 资金流向 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">资金流向</div>
                                    <div v-if="marketReviewDetail.moneyflow && marketReviewDetail.moneyflow.detail && marketReviewDetail.moneyflow.detail !== '数据不可达'" class="market-review-text">
                                        {{ marketReviewDetail.moneyflow.detail }}
                                    </div>
                                    <div v-else class="market-review-unavailable">资金流向数据不可达</div>
                                </div>

                                <!-- ④ 涨跌家数 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">市场情绪</div>
                                    <div v-if="marketReviewDetail.sentiment && marketReviewDetail.sentiment.up_down" class="market-review-updown">
                                        <span class="market-review-updown-item up">上涨 {{ marketReviewDetail.sentiment.up_down.up }} 家</span>
                                        <span class="market-review-updown-item down">下跌 {{ marketReviewDetail.sentiment.up_down.down }} 家</span>
                                    </div>
                                    <div v-else class="market-review-text muted">{{ (marketReviewDetail.sentiment && marketReviewDetail.sentiment.note) || '涨跌家数暂缺' }}</div>
                                </div>

                                <!-- ⑤ AI 解读 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">AI 解读</div>
                                    <div class="market-review-ai-summary">{{ marketReviewDetail.ai_summary || '暂无解读' }}</div>
                                </div>
                            </template>
                            </template>
                            </div><!-- /.market-review-split-content -->
                            </div><!-- /.market-review-split -->
                    </div>
                </div>`,setup(){const u=e("qcState"),m=Vue.ref(!1),T=Vue.ref(!1);let r=0;if(!u)return{};const n=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function f(_){n.value=_;try{localStorage.setItem("quant_strategy_mode",_)}catch{}u.currentSubPage.value="strategy-manage"}const o=a([]),x=a(!1),w=a(!1),E=a(""),C=a(null),q=a(!1),F=a(!1);async function D(){const _=++r;x.value=!0,w.value=!1;try{const G=await fetch("/api/market/reviews?limit=30",{headers:ft()}).then(ze=>ze.json());if(_!==r)return;G&&G.success?o.value=Array.isArray(G.data)?G.data:[]:w.value=!0}catch(G){console.error("[market-review] 复盘列表加载失败:",G),w.value=!0}finally{_===r&&(x.value=!1)}}function d(_){E.value=_,S(_)}function i(_){E.value===_?W():d(_)}function h(_){return _==null||isNaN(Number(_))?"—":(Number(_)>=0?"+":"")+Number(_).toFixed(2)+"%"}function V(_){return _==null||isNaN(Number(_))?"—":Number(_).toFixed(2)}function W(){E.value="",C.value=null,F.value=!1}async function S(_){const G=++r;q.value=!0,F.value=!1,C.value=null;try{const ze=_?"/api/market/review?date="+encodeURIComponent(_):"/api/market/review",mt=await fetch(ze,{headers:ft()}).then(z=>z.json());if(G!==r)return;mt&&mt.success?C.value=mt.data:F.value=!0}catch(ze){console.error("[market-review] 复盘详情加载失败:",ze),F.value=!0}finally{G===r&&(q.value=!1)}}function O(_){return _>0?"up":_<0?"down":"flat"}function K(_){return _==null||isNaN(Number(_))?"—":(_>0?"+":"")+Number(_).toFixed(2)+"%"}function A(_){const G={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(_||{}).map(function(ze){const mt=ze[0],z=ze[1],ne=!z||z==="unavailable"||z==="数据不可达";return{label:G[mt]||mt,value:ne?"数据不可达":z,unavailable:ne}})}const L=a([]),H=a(!1),$=a(!1),Z=a(""),le=a(""),te=a(""),R=a({}),s=a(!1),y=a(""),l=a(""),p=a([]),X=a([]),P=a(""),b=a(""),v=a(!0),k=a(!0),c=a("20:00"),N=a("default"),oe=a(!1),J=a(""),M=t(function(){return L.value.find(function(_){return _.id===te.value})||null});async function U(_,G){G=G||{},G.headers=Object.assign({},G.headers||{});const ze=localStorage.getItem("quant_token")||"";return ze&&(G.headers.Authorization="Bearer "+ze),fetch(_,G)}async function ie(){const _=++r;H.value=!0,$.value=!1,Z.value="",le.value="";try{const G=await U("/api/strategies").then(function(mt){return mt.json()});if(_!==r)return;let ze=null;Array.isArray(G)?ze=G:G&&Array.isArray(G.strategies)?(ze=G.strategies,G.warn&&(le.value=String(G.warn))):($.value=!0,Z.value=G&&G.detail?String(G.detail):"策略列表加载失败（接口返回异常）"),ze!==null&&(L.value=ze,L.value.length&&!te.value&&(te.value=L.value[0].id,fe()))}catch(G){console.error("[research] 策略列表加载失败:",G),$.value=!0,Z.value="策略列表加载失败: "+(G&&G.message||"网络错误")}finally{_===r&&(H.value=!1)}}function fe(){const _=M.value;_&&(R.value={},_.schema.forEach(function(G){R.value[G.key]=G.default}),l.value="",re(),Se(),se())}async function Se(){if(!te.value){X.value=[];return}try{const _=await U("/api/strategies/"+te.value+"/profiles").then(function(G){return G.json()});X.value=_&&_.data&&_.data.profiles||[],P.value=""}catch(_){console.error("[research] 方案列表加载失败:",_),X.value=[]}}async function Y(){m.value=!0;const _=(b.value||"").trim();if(!_){window._core&&window._core.showToast("请输入方案名称");return}try{const G=await U("/api/strategies/"+te.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:R.value})}).then(function(ze){return ze.json()});if(G&&G.detail){window._core&&window._core.showToast(String(G.detail));return}b.value="",await Se(),window._core&&window._core.showToast("方案已保存")}catch(G){console.error("[research] 方案保存失败:",G),window._core&&window._core.showToast("方案保存失败")}}function ce(){const _=X.value.find(function(G){return G.id===P.value});_&&(Object.keys(_.params||{}).forEach(function(G){R.value[G]=_.params[G]}),window._core&&window._core.showToast("已应用方案: "+_.name))}async function Ae(){if(P.value)try{await U("/api/strategies/"+te.value+"/profiles/"+P.value,{method:"DELETE"}).then(function(_){return _.json()}),await Se(),window._core&&window._core.showToast("方案已删除")}catch(_){console.error("[research] 方案删除失败:",_)}}async function se(){try{const _=await U("/api/strategies/governance").then(function(mt){return mt.json()}),ze=(_&&_.data&&_.data.strategies||{})[te.value]||{};v.value=ze.enabled!==!1,c.value=ze.schedule||"20:00",N.value=ze.universe==="all"?"all":"default",k.value=ze.show_in_calendar!==!1,J.value=ze.last_holdings||""}catch(_){console.error("[research] 纳管状态加载失败:",_)}}async function ke(){try{await U("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const _={};return _[te.value]={enabled:v.value,schedule:c.value,universe:N.value,show_in_calendar:k.value},_}()})}).then(function(_){return _.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(_){console.error("[research] 纳管更新失败:",_)}}async function Te(){if(te.value){oe.value=!0;try{const _=await U("/api/strategies/"+te.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:y.value||void 0})}).then(function(G){return G.json()});if(_&&_.detail){window._core&&window._core.showToast(String(_.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(_){console.error("[research] run-once 失败:",_),window._core&&window._core.showToast("持仓生成失败")}finally{oe.value=!1}}}function ge(){J.value&&window.open(J.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function ye(){const _=M.value;if(!_)return;const G=(b.value||"").trim()||_.name+"-副本";Ee(G,Object.assign({},R.value)),window._core&&window._core.showToast("已复制为副本方案: "+G)}async function Ee(_,G){try{await U("/api/strategies/"+te.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:G})}).then(function(ze){return ze.json()}),await Se()}catch(ze){console.error("[research] 副本保存失败:",ze)}}async function re(){const _=++r;if(te.value)try{const G=await U("/api/strategies/"+te.value+"/runs?limit=5").then(function(ze){return ze.json()});if(_!==r)return;p.value=Array.isArray(G)?G:[]}catch{p.value=[]}}async function ae(){if(te.value){s.value=!0;try{const _=await U("/api/strategies/"+te.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:R.value,as_of:y.value||void 0})}).then(function(G){return G.json()});_&&_.status==="success"?re():alert("运行失败: "+(_.detail||JSON.stringify(_)))}catch(_){console.error("[research] 策略运行失败:",_),alert("运行失败: "+_.message)}finally{s.value=!1}}}async function me(){if(te.value)try{const _=Object.keys(R.value).map(function(ze){return encodeURIComponent(ze)+"="+encodeURIComponent(R.value[ze])}).join("&"),G=await U("/api/strategies/"+te.value+"/ptrade-code?"+_).then(function(ze){return ze.json()});G&&G.code?l.value=G.code:alert("导出失败: "+(G.detail||JSON.stringify(G)))}catch(_){console.error("[research] PTrade 导出失败:",_),alert("导出失败: "+_.message)}}function Ne(){if(!l.value)return;const _=document.createElement("textarea");_.value=l.value,document.body.appendChild(_),_.select();try{document.execCommand("copy")}catch{}document.body.removeChild(_)}g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(_){_==="research/research-overview"&&(ie(),D(),it(),sa()),(_==="research/market-review"||_==="shortterm/market-review")&&!E.value&&D(),_==="research/quant-research"&&ie(),_==="research/backtest-history"&&De()},{immediate:!0});const He=a("mom20"),Ke=a(!1),qt=a(!1),pt=a(null),Tt=a(null),xe=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],qe=a('{"top_n":[10,20,30]}'),je=a(null),Oe=a(""),Xe=a(!1),Qe=a(null);async function Ye(){if(!te.value){ElementPlus.ElMessage.warning("请先选择策略");return}let _;try{_=JSON.parse(qe.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!_||Object.keys(_).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Xe.value=!0,je.value=null,Oe.value="";try{const G=await fetch("/api/strategies/"+te.value+"/sweep",{method:"POST",headers:ft(),body:JSON.stringify({param_grid:_})}).then(function(ze){return ze.json()});G&&Array.isArray(G.results)?(je.value=G.results,Oe.value="完成 "+G.count+" 组"+(G.data_degraded?" (数据不可达, 结果降级)":""),Qe.value=G.param_stability||null):Oe.value=G&&G.detail||"扫描失败"}catch(G){console.error("[sweep]",G),Oe.value="扫描失败: "+G.message}finally{Xe.value=!1}}async function lt(){const _=++r;Ke.value=!0;try{const G=await U("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:te.value||"multi_factor",factor_key:He.value,params:R.value||{}})}).then(function(mt){return mt.json()}),ze=G&&G.report?G.report.n1||{}:{};pt.value=ze}catch(G){console.error("[research] 因子IC分析失败:",G),alert("因子 IC 分析失败: "+G.message)}finally{_===r&&(Ke.value=!1)}}async function yt(){const _=++r;qt.value=!0;try{const G=await U("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:te.value||"multi_factor",factor_key:He.value,params:R.value||{}})}).then(function(ze){return ze.json()});G&&G.layers?Tt.value=G:alert("分层回测: "+(G.message||"无数据"))}catch(G){console.error("[research] 分层回测失败:",G),alert("分层回测失败: "+G.message)}finally{_===r&&(qt.value=!1)}}const Et=a(null),Ft=a(!1);async function aa(){const _=++r;Ft.value=!0,Et.value=null;try{const G=await U("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:te.value||"multi_factor",factor_key:He.value,params:R.value||{}})}).then(function(ze){return ze.json()});G&&G.detail?Et.value=G.detail:alert("因子详情: "+(G.message||"无数据"))}catch(G){console.error("[research] 因子详情失败:",G),alert("因子详情失败: "+G.message)}finally{_===r&&(Ft.value=!1)}}const I=a([]),ee=a(null),Ce=a(null),Ie=a(null),We=a(""),bt=a(!1),$e=a(!1),Ge=a(""),_t=a(""),ct=a("");function ft(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function it(){const _=++r;try{const G=await fetch("/api/strategies/variants",{headers:ft()}).then(function(ze){return ze.json()});if(_!==r)return;I.value=G&&G.data&&G.data.variants||[]}catch(G){console.error("[i3a] 加载 variants 失败:",G)}}async function Ht(){if(!te.value){Ge.value="请先在量化研究选择母本策略";return}$e.value=!0,Ge.value="";try{const _=await fetch("/api/strategies/"+te.value+"/clone",{method:"POST",headers:ft(),body:JSON.stringify({name:(b.value||"").trim()||void 0,params:Object.assign({},R.value)})}).then(function(ze){return ze.json()});if(_&&_.detail){Ge.value=String(_.detail);return}const G=_&&_.data;G&&G.sid&&(ee.value=G.sid,Ge.value="已复制为新策略: "+G.name,await it(),await he(G.sid))}catch(_){console.error("[i3a] 复制失败:",_),Ge.value="复制失败: "+_.message}finally{$e.value=!1}}async function Q(_){ee.value=_,Ge.value="",We.value="",await he(_)}async function he(_){try{const G=await fetch("/api/strategies/"+_+"/selection-spec",{headers:ft()}).then(function(ze){return ze.json()});G&&G.data&&G.data.spec&&(Ce.value=Object.assign({},G.data.spec),Ie.value=G.data.fields,_t.value=(G.data.spec.industry_scope||[]).join(","),ct.value=(G.data.spec.market_cap_range||[]).join(","))}catch(G){console.error("[i3a] 加载 spec 失败:",G)}}async function et(){if(T.value=!0,!(!ee.value||!Ce.value))try{Ce.value.industry_scope=_t.value?_t.value.split(/[,，]/).map(function(G){return G.trim()}).filter(Boolean):[],Ce.value.market_cap_range=ct.value?ct.value.split(/[,，]/).map(Number).filter(function(G){return!isNaN(G)}):[];const _=await fetch("/api/strategies/"+ee.value+"/selection-spec",{method:"PUT",headers:ft(),body:JSON.stringify({spec:Ce.value})}).then(function(G){return G.json()});_&&_.data&&_.data.spec&&(Ce.value=_.data.spec,Ge.value="SelectionSpec 已保存")}catch(_){console.error("[i3a] 保存 spec 失败:",_),Ge.value="保存失败"}}async function Ue(){if(!ee.value){Ge.value="请先选择/创建微调策略";return}$e.value=!0,Ge.value="";try{const _=await fetch("/api/strategies/"+ee.value+"/run-once",{method:"POST",headers:ft(),body:"{}"}).then(function(G){return G.json()});Ge.value=_&&_.detail?String(_.detail):"持仓已生成: "+(_&&_.data&&_.data.symbols||0)+" 只"}catch(_){console.error("[i3a] run-once 失败:",_),Ge.value="生成持仓失败"}finally{$e.value=!1}}async function wt(){if(!ee.value){Ge.value="请先选择/创建微调策略";return}Ce.value||await he(ee.value),bt.value=!0,Ge.value="";try{const _=await fetch("/api/strategies/"+ee.value+"/ai-trade-code",{method:"POST",headers:ft(),body:JSON.stringify({spec:Ce.value})}).then(function(G){return G.json()});if(_&&_.detail){Ge.value=String(_.detail);return}_&&_.data&&(We.value=_.data.code||"",_.data.api_errors&&_.data.api_errors.length?Ge.value="生成成功(含 API 校验告警 "+_.data.api_errors.length+" 条)":Ge.value="AI 交易码已生成, 已通过矩阵内校验")}catch(_){console.error("[i3a] AI 交易码失败:",_),Ge.value="AI 生成失败: "+_.message}finally{bt.value=!1}}function At(){if(We.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(We.value).then(function(){Ge.value="代码已复制"});else{const _=document.createElement("textarea");_.value=We.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),Ge.value="代码已复制"}}const It=a(""),vt=a(""),Pt=a([]),Kt=a(""),Jt=a(""),xt=a(""),gt=a(null),Zt=a(!1),Dt=a(!1),ra=a(!1);function Qt(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function sa(){const _=++r;try{const G=await fetch("/api/strategies/custom",{headers:Qt()}).then(function(ze){return ze.json()});if(_!==r)return;Pt.value=G&&G.data&&G.data.customs||[]}catch(G){console.error("[i3b] 加载自定义策略失败:",G)}}async function dt(){if(!vt.value.trim()){xt.value="请描述策略思路";return}Zt.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom",{method:"POST",headers:Qt(),body:JSON.stringify({name:It.value.trim()||"自定义策略",prompt:vt.value})}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(Jt.value=_.data.code||"",xt.value="AI 代写成功: "+_.data.sid+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"),await sa())}catch(_){console.error("[i3b] AI 代写失败:",_),xt.value="AI 代写失败: "+_.message}finally{Zt.value=!1}}async function $t(){if(Kt.value)try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/code",{headers:Qt()}).then(function(G){return G.json()});_&&_.data&&(Jt.value=_.data.code||"",xt.value="")}catch(_){console.error("[i3b] 读取代码失败:",_)}}async function ca(){if(!Kt.value){xt.value="请先选择自定义策略";return}Dt.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/backtest",{method:"POST",headers:Qt(),body:"{}"}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(gt.value=_.data,xt.value="回测完成")}catch(_){console.error("[i3b] 回测失败:",_),xt.value="回测失败: "+_.message}finally{Dt.value=!1}}async function ya(){if(!Kt.value){xt.value="请先选择自定义策略";return}ra.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/ai-optimize",{method:"POST",headers:Qt(),body:JSON.stringify({backtest:gt.value})}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(Jt.value=_.data.code||"",xt.value="AI 优化完成"+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"))}catch(_){console.error("[i3b] AI 优化失败:",_),xt.value="AI 优化失败: "+_.message}finally{ra.value=!1}}function _a(){if(Jt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Jt.value).then(function(){xt.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Jt.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),xt.value="代码已复制"}}const na=Vue.ref([]),B=Vue.ref(!1),_e=Vue.ref(!1),Fe=Vue.ref(30);async function De(){const _=++r;B.value=!0,_e.value=!1;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},mt=await fetch("/api/backtest/history?days="+Fe.value,{headers:ze}).then(function(z){return z.json()});if(_!==r)return;na.value=mt&&mt.data||[]}catch(G){console.error("[backtest] 回测历史加载失败:",G),_e.value=!0}finally{_===r&&(B.value=!1)}}const ut=Vue.ref([]),tt=Vue.ref(!1),Lt=Vue.ref(!1),Wt=Vue.ref(""),Ut=Vue.ref([]),xa=Vue.ref(""),ba=Vue.ref([]),da=Vue.ref(!1),la=Vue.ref(!1),Aa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ua(_){return Aa[_]||_||"—"}function La(_){u&&u.navigateTo&&u.navigateTo("shortterm",_)}function va(){u.currentSubPage.value="research-history",Ta()}async function Ta(){const _=++r;tt.value=!0,Lt.value=!1;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},mt=Wt.value?"?type="+encodeURIComponent(Wt.value):"",z=await fetch("/api/strategies/research-history"+mt,{headers:ze}).then(function(ne){return ne.json()});if(_!==r)return;ut.value=z&&z.items||[]}catch(G){console.error("[research-history] 加载失败:",G),Lt.value=!0}finally{_===r&&(tt.value=!1)}}async function wa(){const _=++r;la.value=!0;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},mt=Wt.value?"?type="+encodeURIComponent(Wt.value):"",z=await fetch("/api/strategies/research-history/export"+mt,{headers:ze});if(!z.ok)throw new Error("HTTP "+z.status);const ne=await z.blob(),ue=URL.createObjectURL(ne),Me=document.createElement("a");Me.href=ue,Me.download="research_history.csv",document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(ue)}catch(G){console.error("[research-history] 导出失败:",G)}finally{_===r&&(la.value=!1)}}function Ia(_){const G=Ut.value.indexOf(_);G>=0?Ut.value.splice(G,1):Ut.value.length<10&&Ut.value.push(_)}function Na(_){xa.value=xa.value===_?"":_}async function Gt(){const _=++r,G=Ut.value;if(!(G.length<2)){da.value=!0;try{const ze=window.__quantModules&&window.__quantModules.core||{},mt=typeof ze.authHeaders=="function"?ze.authHeaders():{},z=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},mt),body:JSON.stringify({ids:G})}).then(function(ne){return ne.json()});ba.value=z&&z.items||[]}catch(ze){console.error("[research-history] 对比失败:",ze)}finally{_===r&&(da.value=!1)}}}async function ma(_){try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},mt=await fetch("/api/strategies/research-history/"+_,{method:"DELETE",headers:ze}).then(function(z){return z.json()});if(mt&&mt.deleted){ut.value=ut.value.filter(function(ne){return ne.id!==_});const z=Ut.value.indexOf(_);z>=0&&Ut.value.splice(z,1)}}catch(G){console.error("[research-history] 删除失败:",G)}}return{...u,strategyManageMode:n,openStrategyManage:f,btHistory:na,btHistoryLoading:B,btHistoryError:_e,btHistoryDays:Fe,loadBtHistory:De,researchHistory:ut,researchHistoryLoading:tt,researchHistoryError:Lt,researchHistoryType:Wt,researchHistorySelected:Ut,researchDetailId:xa,researchCompareRows:ba,researchCompareLoading:da,researchTypeLabel:ua,goShortterm:La,openResearchHistory:va,loadResearchHistory:Ta,researchExportLoading:la,exportResearchHistory:wa,toggleResearchSelect:Ia,toggleResearchDetail:Na,runResearchCompare:Gt,deleteResearchHistory:ma,marketReviews:o,marketReviewLoading:x,marketReviewError:w,selectedReviewDate:E,marketReviewDetail:C,marketReviewDetailLoading:q,marketReviewDetailError:F,loadMarketReviews:D,openMarketReview:d,toggleMarketReviewDate:i,backToMarketReviewList:W,loadMarketReviewDetail:S,marketReviewChgClass:O,marketReviewChgText:K,marketReviewSrcEntries:A,fmtPct:h,fmtEmotion:V,strategies:L,strategiesLoading:H,strategiesError:$,strategiesErrorText:Z,strategiesWarn:le,activeStrategyId:te,activeStrategy:M,paramValues:R,strategyRunning:s,ptradeCode:l,strategyRuns:p,savingProfile:m,variantSaving:T,loadStrategies:ie,onStrategyChange:fe,runActiveStrategy:ae,exportActivePtradeCode:me,copyPtradeCode:Ne,profiles:X,profileSelect:P,profileName:b,loadProfiles:Se,saveProfile:Y,applyProfile:ce,deleteProfile:Ae,govEnabled:v,govSchedule:c,govUniverse:N,govRunning:oe,lastHoldings:J,loadGov:se,updateGov:ke,runOnceActive:Te,openLastHoldings:ge,cloneStrategy:ye,govShowCalendar:k,factorKey:He,factorIcLoading:Ke,factorLayerLoading:qt,factorIcReport:pt,factorLayerResult:Tt,factorOptions:xe,runFactorIc:lt,runFactorLayer:yt,factorDetail:Et,factorDetailLoading:Ft,runFactorDetail:aa,variants:I,variantSelected:ee,variantSpec:Ce,specFields:Ie,aiCode:We,aiCodeLoading:bt,variantBusy:$e,variantMsg:Ge,loadVariants:it,cloneNewStrategy:Ht,selectVariant:Q,loadVariantSpec:he,saveVariantSpec:et,runVariantOnce:Ue,genVariantAiCode:wt,copyVariantCode:At,customName:It,customPrompt:vt,customs:Pt,customSelected:Kt,customCode:Jt,customMsg:xt,customBtResult:gt,customGenLoading:Zt,customBtLoading:Dt,customOptLoading:ra,loadCustoms:sa,genCustomCode:dt,loadCustomCode:$t,runCustomBacktest:ca,runCustomOptimize:ya,copyCustomCode:_a,sweepGrid:qe,sweepResult:je,sweepMessage:Oe,sweepLoading:Xe,sweepStability:Qe,runSweep:Ye}}}})();(function(){const{inject:a,ref:t,onMounted:g,computed:e,nextTick:u}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="shortterm-split" data-split-root>
                        <!-- V5.15 (F7): 左列表 — 最近交易日核心指标摘要 (默认选中最近一天) -->
                        <div class="shortterm-date-list">
                            <div class="shortterm-date-list-head">
                                <span>复盘日历</span>
                                <el-button size="small" text @click="loadDateList" aria-label="刷新日期列表"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                            <div v-if="dateListLoading" class="color-secondary shortterm-date-empty">加载中…</div>
                            <div v-else-if="dateList.length === 0" class="color-secondary shortterm-date-empty">暂无已抓取日期</div>
                            <div v-else class="shortterm-date-items">
                                <div v-for="d in dateList" :key="d.date" class="shortterm-date-item"
                                    :class="{ 'is-active': d.date === shortDate }" role="button" tabindex="0"
                                    @click="pickDate(d.date)"
                                    @keydown.enter.prevent="pickDate(d.date)"
                                    @keydown.space.prevent="pickDate(d.date)">
                                    <div class="shortterm-date-item-date">{{ d.date }}</div>
                                    <div class="shortterm-date-item-meta">
                                        <span>赚钱 <b :class="riseFall(d.money_effect)">{{ fmtPct(d.money_effect) }}</b></span>
                                        <span>情绪 <b :class="(d.emotion_score != null && d.emotion_score >= 0.8) ? 'meta-emotion-hot' : ((d.emotion_score != null && d.emotion_score < 0.6) ? 'meta-emotion-cold' : '')">{{ d.emotion_score != null ? d.emotion_score.toFixed(2) : '—' }}</b></span>
                                        <span>涨停 <b>{{ d.zt_count }}</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="split-divider" data-split-resize></div>
                        <!-- 右看板 (原 overview 内容) -->
                        <div class="shortterm-split-content card">
                        <!-- V5.3.0 (T-5.3.1.3): 短线复盘 3 步新手引导 (首次进入, 可跳过) -->
                        <div v-if="shorttermTourVisible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="shortterm-tour-title">
                            <div class="onboarding-card">
                                <div class="onboarding-head">
                                    <div class="onboarding-step-badge">{{ shorttermTourState.stepIndex + 1 }} / 3</div>
                                    <div class="onboarding-progress-track" aria-hidden="true">
                                        <div class="onboarding-progress-fill" :style="{ width: shorttermTourProg.pct + '%' }"></div>
                                    </div>
                                </div>
                                <div class="onboarding-title" id="shortterm-tour-title">{{ shorttermTourStep.title }}</div>
                                <div class="onboarding-desc">{{ shorttermTourStep.desc }}</div>
                                <div class="onboarding-actions">
                                    <el-button size="small" text @click="shorttermTourSkip" aria-label="跳过短线引导">跳过</el-button>
                                    <el-button v-if="!shorttermTourIsLast" size="small" type="primary" @click="shorttermTourNext">下一步</el-button>
                                    <el-button v-else size="small" type="primary" @click="shorttermTourFinish">开始使用</el-button>
                                </div>
                            </div>
                        </div>
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="overviewLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="overviewError" type="error" :title="overviewErrTitle" :desc="overviewErrDesc" @retry="loadOverview"></qc-state-panel>
                        <template v-else-if="overview">
                            <!-- V5.2.4 (T-5.2.46): 数据新鲜度状态条 -->
                            <div class="flex-c-gap-12 mb-4">
                                <span class="text-xs-tertiary">数据日期: {{ overview.date }}</span>
                                <span class="tag-chip" :class="sessionStatusClass">{{ sessionStatusText }}</span>
                            </div>
                            <div class="mb-4">
                                <div class="flex-c-gap-12 mb-2">
                                    <div class="text-base-secondary">AI 盘面研判</div>
                                    <el-button size="small" type="primary" :loading="reviewRunning" @click="runReview">{{ review && review.available ? '重新生成' : '生成' }}</el-button>
                                </div>
                                <qc-state-panel v-if="reviewRunning" type="loading"></qc-state-panel>
                                <div v-else-if="review && review.available" class="card">
                                    <div class="stat-value stat-value-lg">{{ review.emotion_level ? '情绪档位: ' + review.emotion_level : '情绪档位: —' }}</div>
                                    <div class="mt-4">{{ review.summary || '—' }}</div>
                                    <div v-if="review.active_directions && review.active_directions.length" class="mt-4">
                                        <div class="text-base-secondary mb-2">活跃方向 <span class="text-xs-tertiary">(点击跳板块资金)</span></div>
                                        <span v-for="d in review.active_directions" :key="d" class="tag-chip mr-4 stock-link" @click="gotoSector(d)">{{ d }}</span>
                                    </div>
                                    <div v-if="review.risks && review.risks.length" class="mt-4 text-xs-tertiary">风险: {{ review.risks.join('；') }}</div>
                                </div>
                                <div v-else-if="review" class="text-xs-tertiary">{{ review.reason || '暂无复盘, 点击生成' }}</div>
                                <div v-if="review && review.available" class="mt-4 flex-c-gap-12">
                                    <el-input v-model="chatQuestion" size="small" placeholder="追问复盘... (Enter 发送)" @keyup.enter="sendChat"></el-input>
                                    <el-button size="small" :loading="chatLoading" @click="sendChat">发送</el-button>
                                </div>
                                <div v-if="chatAnswer" class="mt-4 text-xs-tertiary">{{ chatAnswer }}</div>
                            </div>

                            <!-- V5.2.6 (T-5.2.50): 指标降级时显示 reason, 不静默 — -->
                            <div v-if="emotionNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ emotionNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应均值</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.avg) }}</div>
                                    <div class="stat-sub">{{ moneySource }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应中位数</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.median) }}</div>
                                    <div class="stat-sub">翻红率 {{ pct(overview.emotion.money_effect && overview.emotion.money_effect.positive_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">晋级率 1进2</div>
                                    <div class="stat-value">{{ pct(promotion1to2) }}</div>
                                    <div class="stat-sub">整体 {{ pct(overview.emotion.promotion && overview.emotion.promotion.overall && overview.emotion.promotion.overall.rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">连板溢价</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.consec_premium && overview.emotion.consec_premium.avg) }}</div>
                                    <div class="stat-sub">昨日2板+承接</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">情绪周期</div>
                                    <div class="stat-value">{{ cycleScore }}</div>
                                    <div class="stat-sub">{{ cycleTrend }}</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">市场事实</div>
                            <div v-if="factsNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ factsNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">封板质量</div>
                                    <div class="stat-value">{{ pct(overview.facts.seal_quality && overview.facts.seal_quality.broken_rate) }}</div>
                                    <div class="stat-sub">炸板率 · 早盘封板 {{ pct(overview.facts.seal_quality && overview.facts.seal_quality.early_seal_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">亏钱效应</div>
                                    <div class="stat-value">{{ overview.facts.loss_effect && overview.facts.loss_effect.down_limit_count != null ? overview.facts.loss_effect.down_limit_count : '—' }}</div>
                                    <div class="stat-sub">跌停家数</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">反馈矩阵</div>
                                    <div class="stat-value">{{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.relimit) }}</div>
                                    <div class="stat-sub">再涨停 {{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.red) }} 翻红</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">明日验证条件 (成立 {{ overview.summary.hit }}/{{ overview.summary.total }})</div>
                            <div class="table-container mb-4">
                                <el-table :data="overview.conditions" size="small">
                                    <el-table-column prop="label" label="指标" width="130"></el-table-column>
                                    <el-table-column label="当前" width="90" align="right"><template #default="s">{{ fmtCond(s.row.current, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="阈值" width="90" align="right"><template #default="s">{{ fmtCond(s.row.threshold, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="核验" width="90"><template #default="s"><span :class="verdictClass(s.row.verdict)">{{ s.row.verdict }}</span></template></el-table-column>
                                    <el-table-column label="说明" min-width="170"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mb-2">近5日热度与龙头</div>
                            <div v-if="overview.weekly && overview.weekly.available">
                                <div class="flex-wrap mb-4">
                                    <span v-for="t in overview.weekly.top" :key="t.industry" class="tag-chip mr-4 mb-4">{{ t.industry }} {{ t.count }}</span>
                                </div>
                                <div class="text-xs-tertiary">{{ overview.weekly.note }}</div>
                            </div>
                            <div v-else class="text-xs-tertiary mb-4">{{ overview.weekly && overview.weekly.reason ? overview.weekly.reason : '近5日热度不可用' }}</div>
                        </template>
                        </div>
                    </div>

                    <!-- 涨停复盘 -->
                    <div v-if="currentSubPage === 'ztpool'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false"><qc-icon name="alert-triangle" :size="14" /> 未收盘, 数据可能不完整</span>
                            </div>
                        </div>
                        <qc-state-panel v-if="poolLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="poolError" type="error" :title="poolErrTitle" :desc="poolErrDesc" @retry="loadPools"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="trending-up" :size="18" /></div><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="rocket" :size="18" /></div><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="alert-triangle" :size="18" /></div><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon danger"><qc-icon name="trending-down" :size="18" /></div><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>
                            <div v-if="pools.ladder && Object.keys(pools.ladder.tiers || {}).length" id="shorttermLadderChart" class="mb-4" style="height:170px;width:100%"></div>

                            <div class="flex-c-gap-12 mb-2">
                                <div class="text-base-secondary">涨停池 ({{ (pools.zt || []).length }} 家)</div>
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span role="button" tabindex="0" aria-label="清除筛选" style="cursor:pointer;display:inline-flex" @click="clearBoardFilter" @keydown.enter.prevent="clearBoardFilter" @keydown.space.prevent="clearBoardFilter"><qc-icon name="x" :size="12" /></span></span>
                            </div>
                            <div class="table-container">
                                <el-table :data="filteredZt" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="boards" label="连板" width="55" align="center"></el-table-column>
                                    <el-table-column label="涨停原因" min-width="180"><template #default="s">{{ s.row.reason || '—' }}</template></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column label="封单" width="90" align="right"><template #default="s">{{ fmtAmount(s.row.seal_amount) }}</template></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                    <el-table-column prop="board" label="板别" width="85"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">炸板池 ({{ pools.zb ? pools.zb.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zb || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">跌停池 ({{ pools.dt ? pools.dt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.dt || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="consec_dt" label="连续跌停" width="80" align="center"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>

                    <!-- 龙虎榜 -->
                    <div v-if="currentSubPage === 'lhb'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadLhb"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <!-- V6.5 (PRD-6.5 F2): 数据源降级提示(非静默空表) -->
                            <div v-if="lhbReason" class="text-xs-tertiary mb-4" title="点击展开完整原因" style="cursor:help"><qc-icon name="alert-triangle" :size="14" /> {{ lhbReason.length > 120 ? lhbReason.slice(0, 120) + '…' : lhbReason }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="bar-chart-3" :size="18" /></div><div class="stat-label">上榜家数</div><div class="stat-value">{{ lhbRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="landmark" :size="18" /></div><div class="stat-label">机构净买合计</div><div class="stat-value" style="font-size:1.15em">{{ fmtAmount(lhbInstitutionNetBuy) }}</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="flame" :size="18" /></div><div class="stat-label">游资上榜</div><div class="stat-value">{{ lhbHotMoneyCount }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="lhbPageRows" size="small" max-height="560">
                                    <el-table-column label="名称" width="90" fixed><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="85" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="净买额" width="105" align="right" sortable sort-by="net_buy"><template #default="s"><span :class="riseFall(s.row.net_buy)">{{ fmtAmount(s.row.net_buy) }}</span></template></el-table-column>
                                    <el-table-column label="买入额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.buy_amount) }}</template></el-table-column>
                                    <el-table-column label="卖出额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.sell_amount) }}</template></el-table-column>
                                    <el-table-column label="资金性质" width="130"><template #default="s"><span v-for="(g, i) in (s.row.tags || [])" :key="i" class="tag-chip mr-4" :class="tagClass(g)">{{ g }}</span><span v-if="!(s.row.tags && s.row.tags.length)" class="text-xs-tertiary">—</span></template></el-table-column>
                                    <el-table-column prop="reason" label="上榜原因" min-width="200" show-overflow-tooltip></el-table-column>
                                </el-table>
                                <el-pagination v-if="lhbRows && lhbRows.length > 200" small layout="prev, pager, next, total" :total="lhbRows.length" :page-size="PAGE_SIZE" v-model:current-page="lhbPage" class="mt-4"></el-pagination>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="该交易日暂无龙虎榜数据"></qc-state-panel>
                    </div>

                    <!-- 板块资金 (V5.2.1: 行业/概念资金流, 今日/5日/10日窗口) -->
                    <div v-if="currentSubPage === 'sector'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-select v-model="sectorType" size="small" class="w-select" @change="loadSectorFlow">
                                    <el-option label="行业资金流" value="行业资金流"></el-option>
                                    <el-option label="概念资金流" value="概念资金流"></el-option>
                                </el-select>
                                <el-select v-model="sectorIndicator" size="small" class="w-select-xs" @change="loadSectorFlow">
                                    <el-option label="今日" value="今日"></el-option>
                                    <el-option label="5日" value="5日"></el-option>
                                    <el-option label="10日" value="10日"></el-option>
                                </el-select>
                                <el-input v-model="sectorKeyword" size="small" placeholder="搜索板块..." clearable style="width:130px"></el-input>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="trophy" :size="18" /></div><div class="stat-label">净流入榜首</div><div class="stat-value stat-value-lg">{{ sectorTopName }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">板块数</div><div class="stat-value">{{ sectorRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="wallet" :size="18" /></div><div class="stat-label">Top 净流入</div><div class="stat-value stat-value-lg">{{ fmtAmount(sectorTopInflow) }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="sectorPageRows" size="small" max-height="560">
                                    <el-table-column prop="name" label="板块" min-width="120" fixed></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="95" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="主力净流入" width="130" align="right" sortable sort-by="main_net_inflow"><template #default="s"><span :class="riseFall(s.row.main_net_inflow)">{{ fmtAmount(s.row.main_net_inflow) }}</span></template></el-table-column>
                                    <el-table-column label="主力净占比" width="105" align="right"><template #default="s">{{ fmtPct(s.row.main_net_inflow_ratio) }}</template></el-table-column>
                                </el-table>
                                <el-pagination v-if="filteredSectorRows.length > 200" small layout="prev, pager, next, total" :total="filteredSectorRows.length" :page-size="PAGE_SIZE" v-model:current-page="sectorPage" class="mt-4"></el-pagination>
                            </div>
                            <div class="text-xs-tertiary mt-4">数据源: {{ sectorSource }} · 实时值口径: 盘中为实时快照, 历史场次仅最近一次抓取值</div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="板块资金流暂不可用"></qc-state-panel>
                    </div>

                    <!-- 盘中核验 (V5.2.2: 6 时点快照) -->
                    <div v-if="currentSubPage === 'intraday'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
                                <el-button size="small" type="primary" :loading="intradayCollecting" @click="collectSnapshot">采集当前快照</el-button>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">快照仅在交易时段 6 个时点前后 8 分钟可采集 · 历史日绝不现抓</div>
                        <div class="intraday-timeline mb-4">
                            <div v-for="t in intradaySlots" :key="t" class="intraday-slot" :class="slotClass(t)">
                                <span class="intraday-dot"></span>{{ t }}
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">{{ intradayStatus }}</div>
                        <div v-if="intradayMsg" class="mb-4 text-xs-tertiary">{{ intradayMsg }}</div>
                        <qc-state-panel v-if="intradayLoading" type="loading"></qc-state-panel>
                        <div v-else-if="intradaySnapshots && intradaySnapshots.length">
                            <div class="table-container">
                                <el-table :data="intradaySnapshots" size="small">
                                    <el-table-column prop="slot" label="时点" width="90"></el-table-column>
                                    <el-table-column prop="zt_count" label="涨停" width="80" align="right"></el-table-column>
                                    <el-table-column prop="zb_count" label="炸板" width="80" align="right"></el-table-column>
                                    <el-table-column prop="dt_count" label="跌停" width="80" align="right"></el-table-column>
                                    <el-table-column label="炸板率" width="90" align="right"><template #default="s">{{ fmtPct(s.row.broken_rate) }}</template></el-table-column>
                                    <el-table-column label="口径" min-width="140"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无快照" desc="点击右上角「采集当前快照」(仅交易时段 6 时点前后 8 分钟可用)"></qc-state-panel>
                    </div>
                </div>`,setup(){const m=a("qcState");if(!m)return{};const T=m.currentPage,r=m.currentSubPage,n=t(""),f=t(null),o=t(!1),x=t(!1),w=t("数据加载失败"),E=t("请检查服务后重试"),C=t(null),q=t(null),F=t(!1),D=t(!1),d=t("数据加载失败"),i=t("请检查服务后重试"),h=t(null),V=t(1),W=50,S=e(function(){const B=q.value||[];if(B.length<=200)return B;const _e=(V.value-1)*W;return B.slice(_e,_e+W)}),O=t(null),K=t(!1),A=t(!1),L=t("数据加载失败"),H=t("请检查服务后重试"),$=t([]),Z=t(!1);async function le(){Z.value=!0;try{const B=await ye("/api/shortterm/dates/summary",!1);B&&B.success&&($.value=B.dates||[])}catch{$.value=[]}finally{Z.value=!1}}function te(B){B!==n.value&&(n.value=B,he(!0))}const R=t("行业资金流"),s=t("今日"),y=t(""),l=t(null),p=t(1),X=t(!1),P=t(!1),b=t("数据加载失败"),v=t("请检查服务后重试"),k=t(""),c=t(null),N=t(!1),oe=t(null),J=t(!1),M=t(!1),U=t(""),ie=t(""),fe=t(!1);function Se(){const B=localStorage.getItem("quant_token")||"";return B?{Authorization:"Bearer "+B,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Y={},ce=[],Ae=50,se=60*1e3;let ke=0,Te=0,ge=0;function ye(B,_e){const Fe=Date.now(),De=Y[B];return!_e&&De&&Fe-De.ts<se?Promise.resolve(De.data):fetch(B,{headers:Se()}).then(function(ut){return ut.json()}).then(function(ut){if(Y[B]||ce.push(B),Y[B]={ts:Date.now(),data:ut},ce.length>Ae){const tt=ce.shift();delete Y[tt]}return ut})}async function Ee(B){const _e=++ke;o.value=!0,x.value=!1;try{const Fe="/api/shortterm/pools"+(n.value?"?date="+n.value:""),De=await ye(Fe,B);if(_e!==ke)return;De&&De.success?(f.value=De,u(it)):De&&De.detail?(x.value=!0,w.value=String(De.detail),E.value="请先登录后再查看"):(x.value=!0,w.value="数据加载失败",E.value="请检查服务后重试")}catch{if(_e!==ke)return;x.value=!0,w.value="数据加载失败",E.value="请检查服务后重试"}finally{_e===ke&&(o.value=!1)}}async function re(B){const _e=++ke;F.value=!0,D.value=!1;try{const Fe="/api/shortterm/lhb"+(n.value?"?date="+n.value:""),De=await ye(Fe,B);if(_e!==ke)return;De&&De.success?(q.value=Array.isArray(De.rows)?De.rows:null,h.value=De.available===!1&&De.reason||null,V.value=1):De&&De.detail?(D.value=!0,d.value=String(De.detail),i.value="请先登录后再查看"):(D.value=!0,d.value="数据加载失败",i.value="请检查服务后重试")}catch{if(_e!==ke)return;D.value=!0,d.value="数据加载失败",i.value="请检查服务后重试"}finally{_e===ke&&(F.value=!1)}}const ae=e(function(){const B=f.value&&f.value.ladder&&f.value.ladder.tiers;return!B||!Object.keys(B).length?"—":Object.keys(B).sort(function(_e,Fe){return _e-Fe}).map(function(_e){return _e+"板:"+B[_e]}).join(" ")}),me=e(function(){const B=f.value&&f.value.zt||[];return C.value?B.filter(function(_e){return _e.boards===C.value}):B});function Ne(){C.value=null}const He=e(function(){const B=O.value&&O.value.emotion&&O.value.emotion.money_effect;return!B||!B.available?"—":B.source==="settled"?"定稿记录":B.source==="realtime"?B.partial?"实时(样本不全)":"实时":"—"}),Ke=e(function(){const B=O.value&&O.value.emotion&&O.value.emotion.promotion&&O.value.emotion.promotion.tiers&&O.value.emotion.promotion.tiers["1进2"];return B?B.rate:null}),qt=e(function(){const B=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return B&&B.available&&B.current_score!=null?B.current_score.toFixed(2):"—"}),pt=e(function(){const B=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return!B||!B.available?"—":(B.trend||"—")+(B.day_n!=null?" · 距低谷"+B.day_n+"天":"")});e(function(){const B=O.value&&O.value.emotion;if(!B)return"";const _e=[];for(const Fe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const De=B[Fe];De&&De.available===!1&&De.reason&&_e.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")}),e(function(){const B=O.value&&O.value.facts;if(!B)return"";const _e=[];for(const Fe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const De=B[Fe];De&&De.available===!1&&De.reason&&_e.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")});function Tt(B){return B==null||isNaN(B)?"—":(B*100).toFixed(0)+"%"}function xe(B,_e){return B==null?"—":(typeof B=="number"?Math.round(B*100)/100:B)+(_e||"")}function qe(B){return"tag-chip mr-4"}function je(B){return B==null?"":B>0?"is-rise":B<0?"is-fall":""}function Oe(B){return B==="机构"?"is-institution":B==="游资"?"is-hotmoney":B==="主力"?"is-main":""}const Xe=e(function(){const B=O.value&&O.value.session_status;if(!B)return"—";const _e=O.value.date;return _e===B.latest_session&&B.settled?"已收盘":_e===B.today&&B.is_trade_day&&!B.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Qe=e(function(){const B=O.value&&O.value.session_status;if(!B)return"";const _e=O.value.date;return _e===B.latest_session&&B.settled?"is-institution":_e===B.today&&B.is_trade_day&&!B.settled?"is-main":""});function Ye(B){B&&B.ts_code&&m&&m.showStockDetail&&m.showStockDetail(B.ts_code)}const lt=e(function(){return(q.value||[]).filter(function(B){return(B.tags||[]).indexOf("机构")>=0}).reduce(function(B,_e){return B+(_e.net_buy||0)},0)}),yt=e(function(){return(q.value||[]).filter(function(B){return(B.tags||[]).indexOf("游资")>=0}).length}),Et=e(function(){const B=(l.value||[]).filter(function(_e){return _e.main_net_inflow!=null});return B.length?B.reduce(function(_e,Fe){return _e.main_net_inflow>=Fe.main_net_inflow?_e:Fe}):null}),Ft=e(function(){const B=Et.value;return B?B.name:"—"}),aa=e(function(){const B=Et.value;return B?B.main_net_inflow:null}),I=e(function(){return k.value||"东财"}),ee=e(function(){const B=(y.value||"").trim(),_e=l.value||[];return B?_e.filter(function(Fe){return Fe.name&&String(Fe.name).indexOf(B)>=0}):_e});function Ce(B){y.value=B||"",m&&m.currentSubPage&&(m.currentSubPage.value="sector")}const Ie=e(function(){const B=ee.value;if(B.length<=200)return B;const _e=(p.value-1)*W;return B.slice(_e,_e+W)}),We=["09:25","09:35","10:00","11:30","14:00","15:00"],bt=e(function(){const B={};return(oe.value||[]).forEach(function(_e){B[_e.slot]=!0}),B});function $e(B){return bt.value[B]?"is-done":B===Ge.value?"is-current":"is-empty"}const Ge=e(function(){const B=new Date,_e=(B.getHours()<10?"0":"")+B.getHours(),Fe=(B.getMinutes()<10?"0":"")+B.getMinutes(),De=_e+":"+Fe;for(var ut=0;ut<We.length;ut++)if(De===We[ut])return We[ut];for(var tt=0;tt<We.length-1;tt++){var Lt=We[tt],Wt=new Date;Wt.setHours(Number(Lt.split(":")[0]),Number(Lt.split(":")[1]),0,0);var Ut=new Date(Wt.getTime()+8*6e4);if(B>=Wt&&B<=Ut)return Lt}return""}),_t=e(function(){const B=new Date,_e=Ge.value;if(_e)return"当前处于快照窗口 "+_e+" (前后 8 分钟) — 可采集";const Fe=B.getHours(),De=B.getMinutes();let ut="";for(let tt=0;tt<We.length;tt++){const Lt=We[tt].split(":");if(Number(Lt[0])>Fe||Number(Lt[0])===Fe&&Number(Lt[1])>De){ut=We[tt];break}}return ut?"下一快照时点 "+ut+" — 非窗口期不可采集":"今日快照时点已全部结束"}),ct=t(""),ft=t("info");function it(){const B=f.value&&f.value.ladder&&f.value.ladder.tiers;if(!B||!Object.keys(B).length)return;const _e=window.__quantModules&&window.__quantModules.charts;if(!_e||!_e.renderSimpleChartTo)return;const Fe=C.value,De=_e.renderSimpleChartTo("shorttermLadderChart",function(){const ut=Object.keys(B).sort(function(tt,Lt){return Number(tt)-Number(Lt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ut.map(function(tt){return tt+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(tt){return Fe&&Number(ut[tt.dataIndex])===Fe?"var(--color-accent)":"var(--chart-split)"}},data:ut.map(function(tt){return B[tt]})}]}},{key:"shortterm-ladder"});De&&De.off&&(De.off("click"),De.on("click",function(ut){if(!ut||!ut.name)return;const tt=parseInt(ut.name,10);isNaN(tt)||(C.value=C.value===tt?null:tt)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(it);function Ht(B){if(B==null)return"—";const _e=Math.abs(B);return _e>=1e8?(B/1e8).toFixed(2)+"亿":_e>=1e4?(B/1e4).toFixed(0)+"万":B.toFixed(0)}function Q(B){return B==null?"—":(B>=0?"+":"")+B.toFixed(2)+"%"}async function he(B){const _e=++Te;K.value=!0,A.value=!1;try{const Fe="/api/shortterm/overview"+(n.value?"?date="+n.value:""),De=await ye(Fe,B);if(_e!==Te)return;De&&De.success?O.value=De:De&&De.detail?(A.value=!0,L.value=String(De.detail),H.value="请先登录后再查看"):(A.value=!0,L.value="数据加载失败",H.value="请检查服务后重试")}catch{if(_e!==Te)return;A.value=!0,L.value="数据加载失败",H.value="请检查服务后重试"}finally{_e===Te&&(K.value=!1)}}async function et(B){const _e=++ke;X.value=!0,P.value=!1;try{const Fe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(R.value),De=await ye(Fe,B);if(_e!==ke)return;De&&De.success&&De.available?(l.value=De.rows||[],k.value=De.source||(De.note?"同花顺":"东财"),p.value=1):De&&De.reason?(P.value=!0,b.value="数据加载失败",v.value=String(De.reason).replace(/^\[[^\]]*\]\s*/,"")):De&&De.detail?(P.value=!0,b.value=String(De.detail),v.value="请先登录后再查看"):(P.value=!0,b.value="数据加载失败",v.value="请检查服务后重试")}catch{if(_e!==ke)return;P.value=!0,b.value="数据加载失败",v.value="请检查服务后重试"}finally{_e===ke&&(X.value=!1)}}async function Ue(B){const _e=++ge;try{const Fe="/api/shortterm/review"+(n.value?"?date="+n.value:""),De=await ye(Fe,B);if(_e!==ge)return;De&&De.success&&(c.value=De.review||null)}catch{}}async function wt(){N.value=!0;try{const B="/api/shortterm/review"+(n.value?"?date="+n.value:""),_e=await fetch(B,{method:"POST",headers:Se()}).then(function(Fe){return Fe.json()});_e&&_e.success&&(c.value=_e,Y[B]={ts:Date.now(),data:_e})}catch{}finally{N.value=!1}}async function At(){const B=U.value.trim();if(B){fe.value=!0,ie.value="";try{const Fe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Se(),body:JSON.stringify({date:overviewDate.value,question:B})}).then(function(De){return De.json()});ie.value=Fe.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{fe.value=!1}}}async function It(B){const _e=++ke;J.value=!0;try{const Fe="/api/shortterm/intraday"+(n.value?"?date="+n.value:""),De=await ye(Fe,B);if(_e!==ke)return;De&&De.success&&(oe.value=De.snapshots||[])}catch{}finally{_e===ke&&(J.value=!1)}}async function vt(){M.value=!0;try{const B="/api/shortterm/intraday/snapshot"+(n.value?"?date="+n.value:""),_e=await fetch(B,{method:"POST",headers:Se()}).then(function(Fe){return Fe.json()});_e&&_e.success?(_e.accepted?(ct.value="已采集 "+_e.slot+" 快照"+(_e.pools_available&&!_e.pools_available.zt?" (池源部分不可用)":""),ft.value="ok"):(ct.value="⏱ "+(_e.reason||"非快照时点"),ft.value="warn"),It()):ct.value="采集失败, 请稍后重试"}catch{ct.value="采集失败, 请稍后重试"}finally{M.value=!1}}function Pt(){return ye("/api/shortterm/latest-session",!1).then(function(B){B&&B.date&&(n.value||(n.value=B.date))}).catch(function(){})}function Kt(){const B=r.value;B==="ztpool"?Ee():B==="lhb"?re():B==="overview"?(he(),Ue()):B==="sector"?et():B==="intraday"&&It()}function Jt(){const B=n.value?"?date="+n.value:"";["/api/shortterm/overview"+B,"/api/shortterm/pools"+B,"/api/shortterm/lhb"+B].forEach(function(Fe){ye(Fe,!1).catch(function(){})})}function xt(){const B=r.value;B==="ztpool"?Ee(!0):B==="lhb"?re(!0):B==="overview"?(he(!0),Ue(!0)):B==="sector"?et(!0):B==="intraday"&&It(!0)}g(function(){Pt(),Kt(),Jt(),ca(),le()}),Vue.watch(function(){return r.value},function(B){Kt(),B==="overview"&&ca()});const gt=window.QuantOnboarding,Zt=t(!1),Dt=t(gt?gt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ra=e(function(){return gt&&gt.shorttermTourSteps()[Dt.value.stepIndex]||{key:"",title:"",desc:""}}),Qt=e(function(){return gt?gt.shorttermTourProgress(Dt.value):{done:0,total:3,pct:0}}),sa=e(function(){return Dt.value.stepIndex>=2});function dt(){if(gt){var B=null;try{B=localStorage.getItem("qc_shortterm_tour")}catch{}if(B){var _e=gt.parseState(B);_e&&(Dt.value=_e)}}}function $t(){if(gt){var B=JSON.stringify(Dt.value);try{localStorage.setItem("qc_shortterm_tour",B)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:B}})}).catch(function(){})}catch{}}}function ca(){window.__quantGuideModalsEnabled===!0&&gt&&r.value==="overview"&&(dt(),gt.shorttermTourShouldShow(Dt.value)&&(Zt.value=!0))}function ya(){Dt.value=gt.shorttermTourNext(Dt.value),$t()}function _a(){Dt.value=gt.shorttermTourComplete(Dt.value),$t(),Zt.value=!1}function na(){Dt.value=gt.shorttermTourDismiss(Dt.value),$t(),Zt.value=!1}return{currentPage:T,currentSubPage:r,shortDate:n,pools:f,poolLoading:o,poolError:x,ztBoardFilter:C,filteredZt:me,clearBoardFilter:Ne,lhbRows:q,lhbLoading:F,lhbError:D,lhbReason:h,lhbPageRows:S,lhbPage:V,overview:O,overviewLoading:K,overviewError:A,dateList:$,dateListLoading:Z,loadDateList:le,pickDate:te,sectorType:R,sectorIndicator:s,sectorKeyword:y,sectorRows:l,filteredSectorRows:ee,sectorPageRows:Ie,sectorPage:p,sectorLoading:X,sectorError:P,sectorFlowSource:k,PAGE_SIZE:W,gotoSector:Ce,review:c,reviewRunning:N,intradaySnapshots:oe,intradayLoading:J,intradayCollecting:M,intradaySlots:We,intradayMsg:ct,slotClass:$e,intradayStatus:_t,chatQuestion:U,chatAnswer:ie,chatLoading:fe,loadPools:Ee,loadLhb:re,loadOverview:he,loadSectorFlow:et,loadReview:Ue,runReview:wt,sendChat:At,loadIntraday:It,collectSnapshot:vt,refreshCurrent:xt,ladderText:ae,fmtAmount:Ht,fmtPct:Q,riseFall:je,tagClass:Oe,openStock:Ye,lhbInstitutionNetBuy:lt,lhbHotMoneyCount:yt,sectorTopName:Ft,sectorTopInflow:aa,sectorSource:I,moneySource:He,promotion1to2:Ke,cycleScore:qt,cycleTrend:pt,pct:Tt,fmtCond:xe,verdictClass:qe,sessionStatusText:Xe,sessionStatusClass:Qe,shorttermTourVisible:Zt,shorttermTourState:Dt,shorttermTourStep:ra,shorttermTourProg:Qt,shorttermTourIsLast:sa,shorttermTourNext:ya,shorttermTourFinish:_a,shorttermTourSkip:na}}}})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(r,n,f,o,x){var w=f>0?f:1,E=typeof x=="number"&&x>=0?x:a,C=Math.max(0,o),q=Math.max(0,r),F=Math.max(0,n),D=Math.max(0,Math.floor(q/w)-E),d=Math.min(C,Math.ceil((q+F)/w)+E);return{startIndex:D,endIndex:d}}function g(r,n){return Math.max(0,r||0)*(n>0?n:0)}function e(r,n,f,o,x){var w=r||[],E=t(n,f,o,w.length,x),C=w.slice(E.startIndex,E.endIndex);return{visible:C,startIndex:E.startIndex,endIndex:E.endIndex,offsetY:E.startIndex*(o>0?o:1),totalHeight:g(w.length,o)}}function u(r,n){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return n}function m(r,n,f){var o=r||[];if(!o.length)return n>0?n:1;for(var x=Math.min(f||50,o.length),w=0,E=0,C=0;C<x;C++){var q=o[C]&&o[C].rowHeight;typeof q=="number"&&q>0&&(w+=q,E++)}return E?w/E:n>0?n:1}function T(r,n,f,o,x){var w=t(r,n,f,o,x),E=Math.max(0,o);return E?(w.endIndex-w.startIndex)/E:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:g,sliceVisible:e,getRowKey:u,estimateDynamicRowHeight:m,renderedRatio:T}});(function(){const{ref:a,computed:t,onMounted:g,onBeforeUnmount:e}=Vue,u=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:u.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(m){const T=a(null),r=a(0),n=a(400),f=t(()=>(u.computeVisibleRange||function(i,h,V,W,S){const O=V>0?V:1,K=S>=0?S:8,A=Math.max(0,W);return{startIndex:Math.max(0,Math.floor(i/O)-K),endIndex:Math.min(A,Math.ceil((i+h)/O)+K)}})(r.value,n.value,m.rowHeight,m.items.length,m.buffer)),o=t(()=>m.items.length*m.rowHeight),x=t(()=>f.value.startIndex),w=t(()=>f.value.endIndex),E=t(()=>m.items.slice(x.value,w.value));function C(){T.value&&(r.value=T.value.scrollTop)}function q(){T.value&&(n.value=T.value.clientHeight||400)}function F(d,i){return u.getRowKey?u.getRowKey(d,i):d&&d.code!=null?d.code:d&&d.id!=null?d.id:i}let D=null;return g(()=>{q(),T.value&&typeof ResizeObserver<"u"&&(D=new ResizeObserver(()=>q()),D.observe(T.value))}),e(()=>{D&&D.disconnect()}),{scrollEl:T,totalHeight:o,startIndex:x,endIndex:w,visibleItems:E,onScroll:C,keyOf:F}}}})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,g=60,e=500,u=10,m=88,T=350;function r(i,h,V,W,S){S=S||{};var O=typeof S.threshold=="number"?S.threshold:a,K=typeof S.bias=="number"?S.bias:t,A=V-i,L=W-h;return Math.abs(A)<O||Math.abs(A)<Math.abs(L)*K?"none":A<0?"left":"right"}function n(i,h,V){V=V||{};var W=typeof V.threshold=="number"?V.threshold:g;return h-i>=W}function f(i,h){h=h||{};var V=typeof h.threshold=="number"?h.threshold:e;return i>=V}var o=!1;function x(i,h){return i&&typeof i.closest=="function"?i.closest(h):null}function w(i){if(!i)return"";var h=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(h){var V=h.getAttribute&&h.getAttribute("data-copy-code");if(V)return V.trim();var W=(h.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(W)return W[0]}var S=i.getAttribute&&i.getAttribute("data-copy-code");return S?S.trim():""}function E(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return C(i)}):Promise.resolve(C(i))}function C(i){try{var h=document.createElement("textarea");return h.value=i,h.style.position="fixed",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),!0}catch{return!1}}function q(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function F(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function D(){var i=null,h=null,V=null;function W(){h&&(h.timer&&clearTimeout(h.timer),h=null)}function S(Z){V={el:Z,until:Date.now()+T}}function O(Z){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(le){le!==Z&&le.classList.remove("swipe-open")}),i&&i.el!==Z&&(i=null)}function K(Z){var le=Z.touches&&Z.touches[0];if(le){var te=x(Z.target,".swipe-reveal");te&&(i={el:te,x:le.clientX,y:le.clientY,moved:!1},Z.stopPropagation());var R=x(Z.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");R&&(W(),h={el:R,x:le.clientX,y:le.clientY,timer:setTimeout(function(){var s=w(R);h=null,s&&(S(R),E(s).then(function(){F(),q("已复制代码 "+s)}))},e)})}}function A(Z){if(i){var le=Z.touches&&Z.touches[0];if(le){var te=le.clientX-i.x,R=le.clientY-i.y;if(Math.abs(te)>8&&Math.abs(te)>Math.abs(R)*1.2){Z.cancelable&&Z.preventDefault(),i.moved=!0;var s=i.el.querySelector(".swipe-reveal-main")||i.el,y=Math.max(-m,Math.min(0,te));s.style.transition="none",s.style.transform="translateX("+y+"px)",Z.stopPropagation()}if(h){var l=le.clientX-h.x,p=le.clientY-h.y;(Math.abs(l)>u||Math.abs(p)>u)&&W()}}}}function L(Z){if(W(),!!i){var le=i.el,te=Z.changedTouches&&Z.changedTouches[0],R=i.x,s=i.y,y="none";te&&(y=r(R,s,te.clientX,te.clientY));var l=i.moved;i=null;var p=le.querySelector(".swipe-reveal-main")||le;p.style.transform="",p.style.transition="",y==="left"?(O(le),le.classList.add("swipe-open"),S(le)):(y==="right"||l)&&le.classList.remove("swipe-open"),Z.stopPropagation()}}function H(){W(),i=null}function $(Z){if(V&&Date.now()<V.until){var le=V.el.contains(Z.target)||Z.target===V.el,te=Z.target.closest&&Z.target.closest(".swipe-reveal-actions");le&&!te&&(Z.preventDefault(),Z.stopPropagation(),V=null)}}document.addEventListener("touchstart",K,!0),document.addEventListener("touchmove",A,!0),document.addEventListener("touchend",L,!0),document.addEventListener("touchcancel",H,!0),document.addEventListener("click",$,!0)}function d(){o||typeof document>"u"||(o=!0,D())}return{judgeSwipe:r,judgePullToRefresh:n,judgeLongPress:f,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:g,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:u,REVEAL_WIDTH:m,initGestures:d,_codeFromRow:w}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function g(m){return a[m]||a.empty}function e(){const m=[];for(const T of t){const r=a[T];r.title||m.push(T+".title"),T!=="loading"&&!r.icon&&m.push(T+".icon"),typeof r.retry!="boolean"&&m.push(T+".retry"),typeof r.skeleton!="boolean"&&m.push(T+".skeleton")}return{ok:m.length===0,errors:m}}const u={VARIANTS:a,KEYS:t,resolve:g,validate:e};typeof window<"u"&&(window.QuantStatePanel=u),typeof Re<"u"&&Re.exports&&(Re.exports=u)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
        <div class="qc-state-panel" :class="'qc-state-' + type" role="status">
            <!-- 加载态：复用骨架屏 -->
            <div v-if="type === 'loading'" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 6" :key="i"></div>
                </div>
            </div>
            <!-- 空/错误/离线态：统一空态样式 -->
            <div v-else class="empty-state qc-state-info">
                <div class="qc-state-icon"><qc-icon v-if="isIconName" :name="icon" :size="32" /><template v-else>{{ icon }}</template></div>
                <div class="qc-state-title">{{ title }}</div>
                <div class="qc-state-desc" v-if="desc">{{ desc }}</div>
                <div class="qc-state-action" v-if="retryable">
                    <slot name="action">
                        <button class="qc-state-retry" type="button" @click="$emit('retry')">重试</button>
                    </slot>
                </div>
            </div>
        </div>
    `,setup(g){const e=a(()=>typeof t.resolve=="function"?t.resolve(g.type):{}),u=a(()=>g.icon||e.value.icon||""),m=a(()=>g.title||e.value.title||""),T=a(()=>g.desc||e.value.desc||""),r=a(()=>!!e.value.retry),n=a(()=>/^[a-z][a-z0-9-]*$/.test(String(u.value||"")));return{icon:u,title:m,desc:T,retryable:r,isIconName:n}}}})();(function(a,t){typeof Re=="object"&&Re.exports?Re.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function t(i,h){if(!i)return!0;const V=i.split(/\s+/).filter(Boolean);if(!V.length)return!0;const W=String(h||"").toLowerCase();return V.every(function(S){return W.indexOf(S)!==-1})}function g(){return{visible:!1,query:"",activeIndex:0}}function e(i,h){return h===void 0&&(h=!i.visible),i.visible=h,h&&(i.query="",i.activeIndex=0),i.visible}function u(i,h,V){const W=a(i);if(!h||!h.length)return[];const S=[];return h.forEach(function(O){const K=t(W,O.name)||t(W,O.key),A=(O.subPages||[]).filter(function(L){const H=V&&V[L]||L;return t(W,H)||t(W,L)});K&&S.push({type:"menu",menuKey:O.key,subPage:O.subPages&&O.subPages[0]||"",label:O.name,subLabel:"页面",icon:O.icon||"file-text"}),A.forEach(function(L){S.push({type:"menu",menuKey:O.key,subPage:L,label:V&&V[L]||L,subLabel:O.name,icon:O.icon||"file-text"})})}),S.slice(0,8)}function m(i,h){const V=a(i);return!h||!h.length?[]:h.filter(function(W){return!!(!V||t(V,W.label)||t(V,W.key)||W.keywords&&t(V,W.keywords))}).slice(0,8)}function T(i,h){const V=a(i);return!V||!h||!h.length?[]:h.filter(function(W){return t(V,W.code)||t(V,W.name)}).slice(0,8).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}})}function r(i,h,V){const W=[],S=[];return V&&V.length&&(W.push({key:"stock",label:"股票",items:V}),S.push.apply(S,V)),i&&i.length&&(W.push({key:"menu",label:"菜单",items:i}),S.push.apply(S,i)),h&&h.length&&(W.push({key:"command",label:"指令",items:h}),S.push.apply(S,h)),{groups:W,flat:S}}function n(i,h,V){if(h<=0)return 0;const W=((i||0)+V)%h;return W<0?h-1:W}function f(i,h,V,W){const S=u(i,h,V).map(function(K){return{type:"menu",menuKey:K.menuKey,subPage:K.subPage,label:K.label,subLabel:K.subLabel,icon:K.icon,iconName:K.icon,value:K.icon+" "+K.label+" · "+K.subLabel}}),O=m(i,W||[]).map(function(K){return{type:"command",key:K.key,label:K.label,icon:K.icon,iconName:K.icon,subLabel:"指令",value:K.icon+" "+K.label}});return S.concat(O)}function o(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const x=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-glossary",label:"打开术语表",icon:"help-circle",keywords:"glossary 术语 词条 解释"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var w={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function E(i){if(!i||typeof i!="string")return null;var h=i.split("+").map(function(S){return S.trim()}).filter(Boolean);if(!h.length)return null;var V=h.pop().toLowerCase();if(!V)return null;var W={ctrl:!1,alt:!1,shift:!1,meta:!1};return h.forEach(function(S){var O=S.toLowerCase();w.ctrl.indexOf(O)!==-1?W.ctrl=!0:w.alt.indexOf(O)!==-1?W.alt=!0:w.shift.indexOf(O)!==-1?W.shift=!0:w.meta.indexOf(O)!==-1&&(W.meta=!0)}),{ctrl:W.ctrl,alt:W.alt,shift:W.shift,meta:W.meta,key:V}}function C(i,h){if(!i||!h)return!1;var V=String(h.key||h.code||"").toLowerCase();return i.key!==V?!1:i.ctrl===!!h.ctrlKey&&i.alt===!!h.altKey&&i.shift===!!h.shiftKey&&i.meta===!!h.metaKey}function q(i){if(!i)return"";var h=[];return i.ctrl&&h.push("Ctrl"),i.alt&&h.push("Alt"),i.shift&&h.push("Shift"),i.meta&&h.push("Meta"),h.push(i.key.toUpperCase()),h.join("+")}function F(){var i={};return{register:function(h){if(!h||!h.key)throw new Error("命令 key 必填");if(i[h.key])throw new Error("命令重复注册: "+h.key);return i[h.key]=Object.assign({},h),h.key},list:function(){return Object.keys(i).map(function(h){return i[h]})},get:function(h){return i[h]||null},remove:function(h){delete i[h]},has:function(h){return!!i[h]},count:function(){return Object.keys(i).length}}}function D(){var i={},h={};return{register:function(V,W,S){var O=E(V);if(!O)throw new Error("无效快捷键: "+V);var K=q(O);if(i[K])throw new Error("快捷键冲突: "+V);if(W!=null&&h[W]!==void 0)throw new Error("动作重复绑定: "+W);return i[K]={combo:V,action:W,description:S||"",parsed:O},h[W]=K,K},resolve:function(V){for(var W in i)if(C(i[W].parsed,V))return i[W].action;return null},list:function(){return Object.keys(i).map(function(V){return i[V]})},unregister:function(V){var W=q(E(V));i[W]&&(delete h[i[W].action],delete i[W])},count:function(){return Object.keys(i).length}}}function d(){var i=D();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:g,toggleVisible:e,searchMenus:u,searchCommands:m,filterStocksLocal:T,mergeResults:r,moveIndex:n,buildSearchSuggestions:f,dispatchSearchSelection:o,DEFAULT_COMMANDS:x,parseKeyCombo:E,matchShortcut:C,canonicalCombo:q,createCommandRegistry:F,createShortcutRegistry:D,createDefaultShortcuts:d}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Re<"u"&&Re.exports?Re.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var g=t();typeof Re=="object"&&Re.exports&&(Re.exports=g),a.QuantOnboarding=g})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],t=a.length,g=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=g.length;function u(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function m(){return g.slice()}function T(L){return L<0?0:L>=e?e-1:L}function r(L){return{stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0}}function n(L){return r(Object.assign({},L,{stepIndex:T((L.stepIndex||0)+1),updatedAt:Date.now()}))}function f(L){return r(Object.assign({},L,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(L){return r(Object.assign({},L,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function x(L){var H=Math.min(L&&L.stepIndex||0,e);return{done:H,total:e,pct:Math.round(H/e*100)}}function w(L){return!!(L&&!L.completed&&!L.dismissed)}function E(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function C(){return a.slice()}function q(){return t}function F(L){return L<0?0:L>=t?t-1:L}function D(L){return{stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0}}function d(L){return D(Object.assign({},L,{stepIndex:F((L.stepIndex||0)+1),updatedAt:Date.now()}))}function i(L){return D(Object.assign({},L,{stepIndex:F((L.stepIndex||0)-1),updatedAt:Date.now()}))}function h(L,H){return D(Object.assign({},L,{stepIndex:F(H),updatedAt:Date.now()}))}function V(L){return D(Object.assign({},L,{completed:!0,updatedAt:Date.now()}))}function W(L){return D(Object.assign({},L,{dismissed:!0,updatedAt:Date.now()}))}function S(L){return!!(L&&L.completed)}function O(L){var H=Math.min(L&&L.stepIndex||0,t);return{done:H,total:t,pct:Math.round(H/t*100)}}function K(L){var H=L||E();return JSON.stringify({stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0})}function A(L){var H=E();if(!L||typeof L!="string")return H;try{var $=JSON.parse(L);if(!$||typeof $!="object")return H;var Z=parseInt($.stepIndex,10);return isNaN(Z)?H:{stepIndex:F(Z),completed:!!$.completed,dismissed:!!$.dismissed,updatedAt:$.updatedAt||0}}catch{return H}}return{ONBOARDING_STEPS:a,steps:C,stepCount:q,createOnboardingState:E,next:d,prev:i,jumpTo:h,complete:V,dismiss:W,isComplete:S,progress:O,persistState:K,parseState:A,SHORTTERM_TOUR_STEPS:g,shorttermTourSteps:m,createShorttermTourState:u,shorttermTourNext:n,shorttermTourComplete:f,shorttermTourDismiss:o,shorttermTourProgress:x,shorttermTourShouldShow:w}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:g}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
      <div v-if="visible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
        <div class="onboarding-card">
          <div class="onboarding-head">
            <div class="onboarding-step-badge">{{ st.stepIndex + 1 }} / 5</div>
            <div class="onboarding-progress-track" aria-hidden="true">
              <div class="onboarding-progress-fill" :style="{ width: prog.pct + '%' }"></div>
            </div>
          </div>
          <div class="onboarding-title" id="onboarding-title">{{ step.title }}</div>
          <div class="onboarding-desc">{{ step.desc || stepKey }}</div>
          <div class="onboarding-actions">
            <el-button size="small" text @click="skip" aria-label="跳过引导">跳过</el-button>
            <el-button v-if="st.stepIndex > 0" size="small" @click="prev">上一步</el-button>
            <el-button v-if="!isLast" size="small" type="primary" @click="next">下一步</el-button>
            <el-button v-else size="small" type="primary" @click="finish">开始使用</el-button>
          </div>
        </div>
      </div>
    `,setup(){const u=a(!1),m=a(e.createOnboardingState()),T=t(function(){return e.steps()[m.value.stepIndex]}),r=t(function(){return e.progress(m.value)}),n=t(function(){return m.value.stepIndex>=e.stepCount()-1}),f=t(function(){return"onboarding.step."+T.value.key});function o(){const d=e.persistState(m.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:d}})}).then(function(i){return i.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",d)}catch{}})}function x(d){d&&window.__quantGoPage?window.__quantGoPage(d,""):d&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=d,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function w(){m.value=e.next(m.value);const d=e.steps()[m.value.stepIndex];d&&d.target&&x(d.target)}function E(){m.value=e.prev(m.value);const d=e.steps()[m.value.stepIndex];d&&d.target&&x(d.target)}function C(){m.value=e.complete(m.value),o(),u.value=!1}function q(){m.value=e.dismiss(m.value),o(),u.value=!1}function F(){m.value=e.createOnboardingState(),o(),u.value=!0}function D(){fetch("/api/user_config/preferences").then(function(d){return d.json()}).then(function(d){const i=d&&d.preferences&&d.preferences.onboarding_progress;return i&&(m.value=e.parseState(i)),i}).catch(function(){return null}).then(function(d){if(!d)try{const i=localStorage.getItem("qc_onboarding_progress");i&&(m.value=e.parseState(i))}catch{}!e.isComplete(m.value)&&!m.value.dismissed&&(u.value=!0)}),window.addEventListener("qc:onboarding-replay",F)}return g(D),{visible:u,st:m,step:T,prog:r,isLast:n,stepKey:f,next:w,prev:E,finish:C,skip:q,replay:F}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(t){try{const g=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(g)return g(t)||""}catch{}return t}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(t){try{const g=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(g)return g(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:g,nextTick:e,inject:u,onMounted:m}=Vue,T=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
      <el-dialog v-model="visible" width="580px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 菜单 / 指令…"
                    aria-label="搜索股票 / 菜单 / 指令"
                    @keydown.up.prevent="onUp" @keydown.down.prevent="onDown"
                    @keydown.enter.prevent="onEnter">
            <template #prefix><span class="opacity-6"><qc-icon name="search" :size="16" /></span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}</div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon">
                  <qc-icon v-if="isIconName(item.icon)" :name="item.icon" :size="14" />
                  <template v-else v-html="sanitizeHtml(item.icon || '')"></template>
                </span>
                <span class="command-item-label">{{ item.label }}</span>
                <span class="command-item-sub">{{ item.subLabel }}</span>
              </div>
            </div>
          </div>
          <div v-else-if="query" class="command-empty">无匹配结果</div>
          <div v-else class="command-empty">输入关键词搜索股票、菜单或指令 · ↑↓ 选择 · Enter 执行 · Esc 关闭</div>
        </div>
      </el-dialog>
    `,setup(){const r=u("qcState");if(!r)return{};const n=a(""),f=t({get:()=>r.commandPaletteVisible.value,set:R=>{r.commandPaletteVisible.value=R}}),o=a(0),x=a([]),w=a(null),E=t(()=>{const R=(T.DEFAULT_COMMANDS||[]).map(function(y){return Object.assign({},y)});return Object.keys(r.themes.value||{}).forEach(function(y){const l=r.themes.value[y];R.push({key:"theme:"+y,label:"切换主题 · "+(l.name||y),icon:"palette",keywords:"theme 主题"})}),R});function C(R){return typeof R=="string"&&/^[a-z][a-z0-9-]*$/.test(R)}const q=t(()=>r.menus.value||[]);function F(){const R=window.__quantModules&&window.__quantModules.pinyin;if(!R)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(y){s.push({code:y.code,name:y.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(y){y&&y.stock_code&&s.push({code:y.stock_code,name:y.stock_name||y.stock_code})}),s.push.apply(s,R.getExtraStocks()),R.buildStockIndex(s)}function D(R){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(R,F()).map(function(y){return{type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up"}}):[]}function d(){const R=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(l){R.push({type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"最近查看 · "+l.code,icon:"trending-up"})});const y=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(l){return{type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"我的自选 · "+l.code,icon:"trending-up"}});return R.concat(y)}const i=t(()=>{const R=n.value;if(!R)return T.mergeResults([],[],d());const s=T.searchMenus(R,q.value,r.subPageNames),y=T.searchCommands(R,E.value),l=x.value;return T.mergeResults(s,y,l)}),h=t(()=>i.value);function V(R){return h.value.flat[o.value]===R}function W(R){o.value=h.value.flat.indexOf(R)}function S(R){return(R.type||"")+":"+(R.code||R.menuKey||R.key||R.label)}let O=null;function K(){const R=n.value.trim();if(R.length<1){x.value=[];return}O&&clearTimeout(O),O=setTimeout(function(){const s=D(R);x.value=s,o.value=0,r.searchStocks(R,function(y){if(n.value.trim()!==R)return;const l=(y||[]).filter(function(P){return P&&P.code&&P.name}).map(function(P){return{type:"stock",code:P.code,name:P.name,label:P.name,subLabel:P.code,icon:"trending-up"}}),p={},X=[];s.forEach(function(P){p[P.code]||(p[P.code]=!0,X.push(P))}),l.forEach(function(P){p[P.code]||(p[P.code]=!0,X.push(P))}),x.value=X,o.value=0})},200)}function A(){o.value=T.moveIndex(o.value,h.value.flat.length,1)}function L(){o.value=T.moveIndex(o.value,h.value.flat.length,-1)}function H(){const R=h.value.flat[o.value];R&&$(R)}function $(R){r.commandPaletteVisible.value=!1,R.type==="menu"?r.navigateTo(R.menuKey,R.subPage):R.type==="stock"?r.showStockDetail(R.code,R.name):R.type==="command"&&Z(R.key)}function Z(R){if(R==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else R==="export"?r.exportCSV():R==="batch"?r.showBatchEvaluate.value=!0:R==="ai"?r.openAiFab():R==="sidebar"?r.toggleSidebar():R==="today"?r.navigateTo("strategies","overview"):R==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):R==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):R==="open-system"?r.navigateTo("system","status"):R==="open-shortterm"?r.navigateTo("shortterm","overview"):R==="open-research"?r.navigateTo("research","overview"):R==="open-calendar"?r.navigateTo("calendar",""):R==="refresh-data-source"?r.navigateTo("system","datasource"):R==="open-watchlist"?r.navigateTo("ai","watchlist"):R==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):R==="open-focus"?r.navigateTo("ai","focus"):R==="open-portfolio"?r.navigateTo("ai","portfolio"):R==="open-backtest"?r.navigateTo("research","backtest"):R==="open-market-review"?r.navigateTo("shortterm","market-review"):R==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):R==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):R==="open-status"?r.navigateTo("ops","status"):R==="open-health"?r.navigateTo("ops","health"):R==="open-schedule"?r.navigateTo("ops","schedule"):R==="open-guard"?r.navigateTo("ops","guard"):R==="open-usage"?r.navigateTo("ops","usage"):R==="open-datadict"?r.navigateTo("ops","datadict"):R==="open-notification"?r.navigateTo("system","notification"):R==="open-users"?r.navigateTo("system","user"):R==="open-autoeval"?r.navigateTo("system","autoeval"):R==="open-feature"?r.navigateTo("system","feature"):R==="open-config"?r.navigateTo("system","config"):R==="open-glossary"?r.navigateTo("system","glossary"):R==="theme-dark"?r.changeTheme("dark-pro"):R==="theme-light"?r.changeTheme("gold"):R.indexOf("theme:")===0&&r.changeTheme(R.slice(6))}g(f,function(R){R&&(n.value="",x.value=[],o.value=0,e(function(){w.value&&w.value.focus&&w.value.focus()}))}),g(n,K);function le(R){R==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:R==="toggle-sidebar"?r.toggleSidebar():R==="open-ai"?r.openAiFab():R==="refresh"?Z("refresh"):R==="open-today"?Z("today"):R==="batch-eval"?Z("batch"):R==="add-portfolio"&&Z("add-portfolio")}function te(R){if(!T.createDefaultShortcuts||!T.createShortcutRegistry)return;const y=T.createDefaultShortcuts().resolve({key:R.key,ctrlKey:R.ctrlKey,altKey:R.altKey,shiftKey:R.shiftKey,metaKey:R.metaKey});y&&(R.preventDefault(),le(y))}return m(function(){document.addEventListener("keydown",te)}),{visible:f,query:n,results:h,inputEl:w,sanitizeHtml:r.sanitizeHtml,isIconName:C,onDown:A,onUp:L,onEnter:H,execute:$,isActive:V,setActive:W,itemKey:S,onGlobalKeydown:te}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
        <el-dialog v-model="showChangePassword" title="修改密码" width="420px" :close-on-click-modal="false">
            <el-form :model="changePasswordForm" label-width="80px">
                <el-form-item label="当前密码">
                    <el-input v-model="changePasswordForm.oldPassword" type="password" placeholder="请输入当前密码" show-password />
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="changePasswordForm.newPassword" type="password" placeholder="至少6位" show-password />
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="changePasswordForm.confirmPassword" type="password" placeholder="再次输入新密码" show-password @keyup.enter="doChangePassword" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showChangePassword = false">取消</el-button>
                <el-button type="primary" @click="doChangePassword" :loading="changingPassword">确认修改</el-button>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShortcutHelpDialog={name:"qc-shortcut-help-dialog",template:`
        <el-dialog v-model="shortcutHelpVisible" title="⌨ 键盘快捷键" width="420px">
            <div class="shortcut-list">
                <div class="shortcut-row" v-for="s in shortcutHelpItems" :key="s.keys">
                    <span class="shortcut-keys"><kbd>{{ s.keys }}</kbd></span>
                    <span class="shortcut-desc">{{ s.desc }}</span>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.TourDialog={name:"qc-tour-dialog",template:`
        <el-dialog v-model="tourVisible" title="" width="440px" :show-close="false" class="tour-dialog">
            <div class="text-center-pad8-0">
                <div class="empty-state-icon-sm"><qc-icon :name="tourSteps[tourStep].icon" :size="26" /></div>
                <div class="text-lg-semibold-mb8">{{ tourSteps[tourStep].title }}</div>
                <div class="text-base-secondary-lh">{{ tourSteps[tourStep].desc }}</div>
            </div>
            <template #footer>
                <div class="flex-between">
                    <el-button size="small" text @click="skipTour">跳过</el-button>
                    <div class="flex-gap-4">
                        <span v-for="(s, i) in tourSteps" :key="i" class="tour-dot" :class="{active: i === tourStep}"></span>
                    </div>
                    <el-button v-if="tourStep < tourSteps.length - 1" size="small" type="primary" @click="tourStep++">下一步</el-button>
                    <el-button v-else size="small" type="primary" @click="finishTour">开始使用</el-button>
                </div>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MenuConfigDialog={name:"qc-menu-config-dialog",template:`
        <el-dialog v-model="menuConfigDialog" :title="(allGroups[editingGroup]?.name || '') + ' — 菜单访问授权'" width="600px">
            <div class="p-15-0">
                <el-form label-width="60px" size="small">
                    <el-form-item label="组名">
                        <el-input v-model="groupEditForm.name" placeholder="组名" />
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="groupEditForm.description" placeholder="组功能描述" />
                    </el-form-item>
                </el-form>
                <div class="mb-8-semibold-sm">菜单访问授权</div>
                <div class="menu-item-box" v-for="menu in allMenuDefs" :key="menu.key">
                    <div class="menu-item-row" @click="toggleSubPageSection(menu.key)" tabindex="0" role="button" :aria-expanded="!!subPageSectionExpanded[menu.key]" aria-label="展开或收起子页配置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                        <div class="menu-item-main">
                            <el-switch v-model="groupEditForm.visible_menus[menu.key]" @change="onParentToggle(menu.key)" size="small" @click.stop />
                            <span class="text-sm-600-nowrap">{{ menu.name }}</span>
                            <span class="text-10-tertiary-nowrap" v-if="!groupEditForm.visible_menus[menu.key]">子项已关</span>
                        </div>
                        <span :style="{transform: subPageSectionExpanded[menu.key] ? 'rotate(180deg)' : '', transition: 'transform 0.2s', fontSize: '12px', flexShrink: 0}">▼</span>
                    </div>
                    <div class="menu-sub-row" v-if="subPageSectionExpanded[menu.key]" :style="{opacity: groupEditForm.visible_menus[menu.key] ? 1 : 0.4}">
                        <el-switch v-for="sp in menu.subPages" :key="sp"
                            v-model="groupEditForm.visible_sub_pages[menu.key + '.' + sp]"
                            :active-text="subPageNames[sp] || sp"
                            :disabled="!groupEditForm.visible_menus[menu.key]"
                            size="small" />
                    </div>
                </div>
            </div>
            <template #footer>
                <el-button @click="menuConfigDialog = false">取消</el-button>
                <el-button type="primary" @click="saveMenuConfig" :loading="savingGroup"><qc-icon name="hard-drive" :size="14" /> 保存</el-button>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddGroupDialog={name:"qc-add-group-dialog",template:`
        <el-dialog v-model="showAddGroup" title="+ 新建分组" width="400px">
            <el-form class="p-15-0-25" label-width="80px">
                <el-form-item label="组ID">
                    <el-input v-model="addGroupForm.group_id" placeholder="英文标识，如：analyst" />
                </el-form-item>
                <el-form-item label="组名">
                    <el-input v-model="addGroupForm.name" placeholder="如：分析师组" />
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="addGroupForm.description" placeholder="组功能描述" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddGroup = false">取消</el-button>
                <el-button type="primary" @click="createGroup" :loading="savingGroup">创建</el-button>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddUserDialog={name:"qc-add-user-dialog",template:`
        <el-dialog v-model="showAddUser" :title="editingUser ? '编辑用户' : '添加用户'" width="400px">
            <el-form class="p-15-0-25" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="userForm.username" :disabled="!!editingUser" placeholder="输入用户名" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userForm.password" type="password" placeholder="留空则不修改" show-password />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select class="w-select-sm" v-model="userForm.role">
                        <el-option label="管理员" value="admin" />
                        <el-option label="普通用户" value="user" />
                    </el-select>
                </el-form-item>
                <el-form-item label="所属组">
                    <el-select class="w-select-sm" v-model="userForm.group">
                        <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" :disabled="userForm.username === 'admin' || userForm.username === 'guest'" />
                    </el-select>
                </el-form-item>
                <el-form-item label="默认主题">
                    <el-select class="w-select-sm" v-model="userForm.theme">
                        <el-option v-for="(theme, key) in themes" :key="key" :label="theme.name" :value="key" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddUser = false">取消</el-button>
                <el-button type="primary" @click="saveUser" :loading="savingUser">保存</el-button>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
        <el-dialog class="max-w-520" v-model="showBatchEvaluate" title="批量AI评估" width="95%">
            <div class="p-15-0-15">
                <el-form label-width="100px" v-if="!batchRunning">
                    <el-form-item label="股票列表">
                        <el-input
                            v-model="batchStocks"
                            type="textarea"
                            :rows="5"
                            placeholder="输入股票代码，多个用换行或空格分隔&#10;例如：&#10;600000.SH&#10;000001.SZ"
                        />
                    </el-form-item>
                </el-form>
                <!-- 评估进度 -->
                <div class="p-10-0" v-if="batchRunning">
                    <div class="flex-between-sm-mb8">
                        <span>评估中 {{ batchCompleted }}/{{ batchTotal }} <span class="color-token-primary" v-if="batchElapsed>0">· 已用时 {{ batchElapsed }}s</span></span>
                        <span class="color-primary-semibold" v-if="batchCurrent">{{ batchCurrent }}</span>
                    </div>
                    <div class="text-xs-tertiary-mb8" v-if="batchCompleted===0 && batchElapsed>=8">全新评估需调用大模型，请耐心等待（约需数秒至1分钟）…</div>
                    <div class="progress-track-6">
                        <div :style="{width:(batchTotal>0?batchCompleted/batchTotal*100:0)+'%',height:'100%',background:'var(--gradient-brand)',borderRadius:'3px',transition:'width 0.4s ease'}"></div>
                    </div>
                    <div class="scroll-240">
                        <div class="batch-row" v-for="(status,code) in batchStatuses" :key="code">
                            <span class="color-token-primary" v-if="status==='running'">⏳</span>
                            <span class="color-el-success" v-else-if="status==='success'">●</span>
                            <span class="color-el-danger" v-else-if="status==='error'"><qc-icon name="x" :size="12" /></span>
                            <span class="color-tertiary" v-else>⏸</span>
                            <span class="color-text-primary-flex1">
                                <!-- v3.15: 名称优先展示, 代码小字跟随 -->
                                <template v-if="batchResults[code] && batchResults[code].stock_name && batchResults[code].stock_name!==code">{{ batchResults[code].stock_name }}<span class="text-xs-tertiary"> ({{ code }})</span></template>
                                <template v-else>{{ code }}</template>
                            </span>
                            <span class="text-sm-bold" v-if="status==='success' && batchResults[code] && batchResults[code].result" :style="{color: levelColor(batchResults[code].result.level)}">{{ fmtNum(batchResults[code].result.total_score) }}分</span>
                            <span class="text-xs-danger-ellipsis" v-else-if="status==='error' && batchEvalErrors[code]" :title="batchEvalErrors[code]">{{ batchEvalErrors[code] }}</span>
                        </div>
                    </div>
                    <!-- v3.15: 完成汇总 -->
                    <div class="section-top-sm" v-if="batchCompleted===batchTotal && batchTotal>0">
                        评估完成：<span class="text-success-semibold">成功 {{ Object.values(batchStatuses).filter(s=>s==='success').length }}</span>
                        · <span class="text-danger-semibold">失败 {{ Object.values(batchStatuses).filter(s=>s==='error').length }}</span>
                        <span class="color-tertiary" v-if="batchElapsed>0"> · 用时 {{ batchElapsed }}s</span>
                    </div>
                </div>
                <div class="text-right-mt20">
                    <el-button @click="showBatchEvaluate = false" :disabled="batchRunning">取消</el-button>
                    <el-button type="primary" @click="onBatchEvaluate" :loading="batchRunning" :disabled="batchRunning">开始评估</el-button>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");if(!t)return{};const g=window.QuantFormMemory;function e(){const r=t.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>t.showBatchEvaluate&&t.showBatchEvaluate.value||!1,r=>{if(r&&g){const n=g.loadForm("batch-evaluate",e(),1);n&&n.batchStocks&&!(t.batchStocks&&t.batchStocks.value)&&(t.batchStocks.value=n.batchStocks)}});function u(){return g&&g.saveForm("batch-evaluate",{batchStocks:t.batchStocks&&t.batchStocks.value||""},e(),1),t.doBatchEvaluate()}const m=Vue.ref(0);let T=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,r=>{r?(m.value=0,T=setInterval(()=>{m.value++},1e3)):T&&(clearInterval(T),T=null)}),{...t,batchElapsed:m,onBatchEvaluate:u}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
        <el-dialog v-model="showAutoEvaluateSettings" title="自动评估设置" width="520px">
            <div class="p-15-0-25">
                <el-form label-width="120px">
                    <el-form-item label="启用自动评估">
                        <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" />
                    </el-form-item>
                    <template v-if="autoEvaluateConfig.enabled">
                        <el-form-item label="执行周期">
                            <el-select class="w-select-sm" v-model="autoEvaluateConfig.schedule_type">
                                <el-option label="每个交易日执行" value="daily" />
                                <el-option label="每周一执行" value="weekly" />
                                <el-option label="每月1号执行" value="monthly" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="执行时间">
                            <el-time-picker class="w-100" v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" placeholder="选择执行时间"/>
                        </el-form-item>
                        <el-form-item label="评估范围">
                            <el-radio-group v-model="autoEvaluateScope">
                                <el-radio label="watchlist">我的自选</el-radio>
                                <el-radio label="new_entries">最新交易日新入池</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="结果推送">
                            <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" />
                            <div class="text-sm-tertiary-mt6">
                                需要先在飞书推送配置中设置Webhook地址
                            </div>
                        </el-form-item>
                    </template>
                </el-form>
            </div>
            <template #footer>
                <el-button @click="showAutoEvaluateSettings = false">取消</el-button>
                <el-button type="primary" @click="saveAutoEvaluateConfig" :loading="savingConfig">
                    <qc-icon name="hard-drive" :size="14" /> 保存设置
                </el-button>
            </template>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:g}=Vue;window.__quantComponents=window.__quantComponents||{};const e=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
      <el-dialog class="max-w-520" :model-value="visible" title="自选分组管理" width="480px" @update:model-value="v => (visible = v)" @open="load">
        <div v-if="loading" class="qc-glossary-loading">加载中…</div>
        <div v-else class="qc-wg-list">
          <div v-for="(g, i) in groups" :key="g.name" class="qc-wg-row">
            <span class="qc-wg-color" :style="{background: g.color}" :title="'颜色: ' + g.color"
                  @click="cycleColor(i)"></span>
            <span class="qc-wg-name">{{ g.name }}</span>
            <span class="qc-wg-count" v-if="g.name !== '默认分组'">{{ countIn(g.name) }} 只</span>
            <div class="qc-wg-ops">
              <el-button size="small" text :disabled="i === 0" @click="moveUp(i)">↑</el-button>
              <el-button size="small" text :disabled="i === groups.length - 1" @click="moveDown(i)">↓</el-button>
              <el-button size="small" text @click="startRename(g.name)">重命名</el-button>
              <el-button size="small" text type="danger" :disabled="g.name === '默认分组'" @click="remove(g.name)">删除</el-button>
            </div>
            <div v-if="renaming === g.name" class="qc-wg-rename">
              <el-input v-model="renameVal" size="small" :placeholder="'新名称'" @keyup.enter="commitRename(g.name)" />
              <el-button size="small" type="primary" @click="commitRename(g.name)">确定</el-button>
            </div>
          </div>
          <div class="qc-wg-add">
            <el-input v-model="newName" size="small" placeholder="新分组名称" class="qc-wg-newinput" />
            <el-button size="small" type="primary" @click="addGroup">新建分组</el-button>
          </div>
        </div>
        <template #footer>
          <el-button size="small" @click="visible = false">取消</el-button>
          <el-button size="small" type="primary" :loading="saving" @click="save">保存</el-button>
        </template>
      </el-dialog>
    `,setup(){const u=a(!1),m=a(!1),T=a(!1),r=a([]),n=a({}),f=a(""),o=a(""),x=a("");function w(S,O){O=O||{},O.headers=Object.assign({},O.headers||{});const K=localStorage.getItem("quant_token")||"";return K&&(O.headers.Authorization="Bearer "+K),fetch(S,O)}async function E(){m.value=!0;try{const O=await(await w("/api/watchlist/groups")).json();O&&O.success&&(r.value=O.groups||[],n.value=O.mapping||{})}catch{}m.value=!1}function C(S){return Object.values(n.value).filter(function(O){return O===S}).length}function q(S){const O=r.value[S],K=e.indexOf(O.color);O.color=e[(K+1)%e.length]}function F(S){if(S<=0)return;const O=r.value.slice(),K=O[S-1];O[S-1]=O[S],O[S]=K,r.value=O}function D(S){if(S>=r.value.length-1)return;const O=r.value.slice(),K=O[S+1];O[S+1]=O[S],O[S]=K,r.value=O}function d(){const S=f.value.trim();S&&(r.value.some(function(O){return O.name===S})||(r.value.push({name:S,color:e[r.value.length%e.length],sort_order:r.value.length,expanded:!0}),f.value=""))}function i(S){o.value=S,x.value=S}function h(S){const O=x.value.trim();if(!O||O===S||r.value.some(function(A){return A.name===O})){o.value="";return}r.value=r.value.map(function(A){return A.name===S?Object.assign({},A,{name:O}):A});const K={};Object.keys(n.value).forEach(function(A){K[A]=n.value[A]===S?O:n.value[A]}),n.value=K,o.value=""}function V(S){r.value=r.value.filter(function(K){return K.name!==S});const O={};Object.keys(n.value).forEach(function(K){O[K]=n.value[K]===S?"默认分组":n.value[K]}),n.value=O}async function W(){T.value=!0;try{await w("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:r.value,mapping:n.value})}),ElementPlus.ElMessage.success("分组已保存"),u.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}T.value=!1}return g(function(){window.addEventListener("qc:show-watch-groups",function(){u.value=!0,E()})}),{visible:u,loading:m,saving:T,groups:r,mapping:n,newName:f,renaming:o,renameVal:x,load:E,countIn:C,cycleColor:q,moveUp:F,moveDown:D,addGroup:d,startRename:i,commitRename:h,remove:V,save:W}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="indexDetailVisible" title="" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <div v-if="indexDetail">
                <!-- 头部信息 -->
                <div class="detail-header">
                    <div>
                        <h3 class="text-xl-title">{{ indexDetail.name }} <span class="text-md-muted">{{ indexDetail.code }}</span></h3>
                        <div class="detail-subtitle"><qc-icon name="line-chart" :size="13" /> {{ indexDetail.market }} 市场指数</div>
                    </div>
                    <div class="detail-score">
                        <div class="num" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ indexDetail.pct_chg >= 0 ? '+' : '' }}{{ indexDetail.pct_chg.toFixed(2) }}%</div>
                        <div class="label">{{ indexDetail.pct_chg >= 0 ? '上涨' : '下跌' }}</div>
                    </div>
                </div>

                <!-- 指数基本信息 -->
                <div class="stats-grid mt-4">
                    <div class="stat-box">
                        <div class="stat-label">最新点位</div>
                        <div class="stat-value">{{ Number(indexDetail.close).toFixed(2) }}</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">涨跌额</div>
                        <div class="stat-value" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                            {{ indexDetail.change >= 0 ? '+' : '' }}{{ Number(indexDetail.change).toFixed(2) }}
                        </div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.vol">
                        <div class="stat-label">成交量</div>
                        <div class="stat-value">{{ Math.round(indexDetail.vol / 10000).toLocaleString() }}万</div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.amount">
                        <div class="stat-label">成交额</div>
                        <div class="stat-value">{{ Math.round(indexDetail.amount / 10000).toLocaleString() }}亿</div>
                    </div>
                </div>

                <!-- K线图区域 -->
                <div class="section-title mt-20"><span><qc-icon name="candlestick-chart" :size="14" /></span> K线图与均线</div>
                <div class="kline-container">
                    <div class="kline-tabs">
                        <button
                            v-for="tab in klinePeriods"
                            :key="tab.value"
                            :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                            @click="switchIndexKlinePeriod(tab.value)"
                        >
                            {{ tab.label }}
                        </button>
                    </div>
                    <div class="kline-chart" id="indexKlineChart"></div>
                    <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                    <div v-if="indexKlineLoaded" class="ma-toggle-row">
                        <span class="ma-toggle-label">均线</span>
                        <button
                            v-for="m in MA_LINES"
                            :key="m"
                            :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                            @click="toggleKlineMa(m)"
                        >{{ m }}</button>
                        <span class="ma-toggle-hint">十字线读价：悬停或点击图表</span>
                    </div>
                    <qc-state-panel v-if="indexKlineLoading" type="loading"></qc-state-panel>
                </div>

                <!-- AI评估结果 -->
                <div v-if="indexAiResult" class="ai-result-box">
                    <div class="section-title"><span><qc-icon name="bot" :size="14" /></span> AI智能指数评估结果</div>
                    <div class="ai-analysis" v-html="sanitizeHtml(indexAiResult.analysis)"></div>
                    <div class="mt-4">
                        <el-tag :type="indexAiResult.suggestion === '买入' ? 'success' : indexAiResult.suggestion === '卖出' ? 'danger' : 'warning'" size="large">
                            <qc-icon name="pin" :size="14" /> {{ indexAiResult.suggestion || '暂无' }}
                        </el-tag>
                        <span class="ml-12-base-secondary">信心指数: {{ fmtNum(indexAiResult.confidence || 75, 0) }}%</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="mt-20-center">
                    <el-button class="w-200" type="primary" size="large" @click="doIndexAiEvaluate" :loading="indexAiLoading">
                        <qc-icon name="search-check" :size="16" /> 技术指标评估
                    </el-button>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SetupWizardDialog={name:"qc-setup-wizard-dialog",template:`
        <el-dialog v-model="showSetupWizard" title="系统初始化设置" width="500px" :close-on-click-modal="false" :show-close="false">
            <div class="min-h-280">
                <!-- 步骤 1: 修改密码 -->
                <div v-if="setupStep === 1">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="lock" :size="36" /></div>
                        <div class="text-md-semibold-600">管理员密码</div>
                        <div class="color-tertiary-mt4">建议修改默认密码以保证安全</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="新密码（留空则保持不变）">
                            <el-input v-model="setupForm.newPassword" type="password" placeholder="至少4位，留空保持默认" show-password />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button type="primary" @click="setupStep = 2" size="large">下一步</el-button>
                        <el-button class="ml-8" @click="setupStep = 2" size="large">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 2: AI 模型 -->
                <div v-if="setupStep === 2">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="bot" :size="36" /></div>
                        <div class="text-md-semibold-600">AI 大模型配置</div>
                        <div class="color-tertiary-mt4">用于股票智能评估，支持 DeepSeek/OpenAI 等</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="提供商">
                            <el-select class="w-select-sm" v-model="setupForm.aiProvider">
                                <el-option label="DeepSeek" value="deepseek" />
                                <el-option label="OpenAI" value="openai" />
                                <el-option label="其他兼容接口" value="custom" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="API Key">
                            <el-input v-model="setupForm.aiKey" placeholder="sk-..." show-password />
                        </el-form-item>
                        <el-form-item label="接口地址" v-if="setupForm.aiProvider === 'custom'">
                            <el-input v-model="setupForm.aiEndpoint" placeholder="https://api.example.com/v1" />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button @click="setupStep = 1" size="large">上一步</el-button>
                        <el-button class="ml-8" type="primary" @click="setupStep = 3" size="large">下一步</el-button>
                        <el-button class="ml-8" @click="setupStep = 3" size="large">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 3: Tushare -->
                <div v-if="setupStep === 3">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="database" :size="36" /></div>
                        <div class="text-md-semibold-600">Tushare 数据源</div>
                        <div class="color-tertiary-mt4">用于获取行情数据和股票信息</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="Tushare Token">
                            <el-input v-model="setupForm.tushareToken" placeholder="在 tushare.pro 注册获取" show-password />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button @click="setupStep = 2" size="large">上一步</el-button>
                        <el-button class="ml-8" type="success" @click="completeSetupWizard" size="large">完成初始化</el-button>
                        <el-button class="ml-8" @click="completeSetupWizard" size="large">跳过</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MerrillDetailDialog={name:"qc-merrill-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="showMerrillDetail" custom-class="merrill-detail-dialog" :title="(merrillDetailData.name || '经济周期分析') + ' - 详细分析报告'" width="800px" class="merrill-detail-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <!-- 骨架屏加载 -->
            <div v-if="!merrillDetailData.name" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 5" :key="i"></div>
                </div>
                <div class="skeleton-large"></div>
            </div>
            <!-- 完整内容 -->
            <div class="p-15-0-25" v-else>
                <!-- 阶段概览 -->
                <div class="merrill-detail-header" :style="{backgroundColor: merrillDetailData.bg_color, borderLeftColor: merrillDetailData.color}">
                    <div>
                        <h3 class="merrill-title">{{ merrillDetailData.name }}</h3>
                        <p class="text-base-secondary-m0">{{ merrillDetailData.description }}</p>
                    </div>
                    <div class="stage-badge" :style="{backgroundColor: merrillDetailData.color}">
                        {{ merrillDetailData.criteria?.growth }} / {{ merrillDetailData.criteria?.inflation }}
                    </div>
                </div>

                <!-- ★ 当前周期状态：活跃阶段=实时进度，非活跃阶段=上一轮历史 -->
                <!-- 活跃阶段：实时进度 -->
                <div v-if="merrillDetailData._isCurrent && merrillDetailData._currentTiming" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="map-pin" :size="14" /> 当前周期实时进度</div>
                    <div class="grid-4col-gap12">
                        <div class="stat-item">
                            <div class="stat-value num-tabular">{{ merrillDetailData._currentTiming.current_stage_start_date || '—' }}</div>
                            <div class="stat-label">周期起始日</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.duration_days }}天</div>
                            <div class="stat-label">已持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color}">{{ merrillDetailData._currentTiming.maturity || '—' }}</div>
                            <div class="stat-label">成熟度</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.predicted_end?.base || merrillDetailData._currentTiming.predicted_end || '—' }}</div>
                            <div class="stat-label">预测结束日</div>
                        </div>
                    </div>
                    <div class="flex-gap-18-mt12-wrap">
                        <span v-if="merrillDetailData._confidence">置信度：<b :style="{color: confidenceColor}">{{ merrillDetailData._confidence.level }}</b></span>
                        <span v-if="merrillDetailData._currentTiming.progress_percent > 0">进度：<b>{{ fmtNum(merrillDetailData._currentTiming.progress_percent) }}%</b></span>
                        <span class="text-warning-semibold" v-if="merrillDetailData._nextPrediction?.next_stage">
                            <qc-icon name="arrow-right" :size="13" /> →{{ merrillDetailData._nextPrediction.next_stage_name }} {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%
                        </span>
                    </div>
                    <!-- 过渡警告横幅 -->
                    <div class="warning-banner" v-if="merrillDetailData._currentTiming.progress_percent> 80 && merrillDetailData._nextPrediction?.transition_probability> 0.15">
                        <b class="color-badge-warning"><qc-icon name="alert-triangle" :size="13" /> 周期切换预警</b>
                        <span class="color-secondary-ml8">
                            当前{{ merrillDetailData.name }}已进入后期（{{ fmtNum(merrillDetailData._currentTiming.progress_percent) }}%），
                            预测下一阶段为<b class="color-warning">{{ merrillDetailData._nextPrediction.next_stage_name }}</b>
                            （概率 {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%）
                        </span>
                    </div>
                </div>

                <!-- 非活跃阶段：历史轮次 -->
                <div v-else-if="merrillDetailData._history && merrillDetailData._history.length> 0" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="calendar-days" :size="14" /> 历史轮次（共 {{ merrillDetailData._history.length }} 轮）</div>
                    <!-- 最近一次：摘要卡片 -->
                    <div class="grid-4col-gap12-mb14" v-if="merrillDetailData._lastPeriod">
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.start || '—' }}</div>
                            <div class="stat-label">开始</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.end || '—' }}</div>
                            <div class="stat-label">结束</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.duration || '—' }}</div>
                            <div class="stat-label">持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color, fontSize: 'var(--font-base)'}">{{ merrillDetailData._lastPeriod.cycle_label || '—' }}</div>
                            <div class="stat-label">周期</div>
                        </div>
                    </div>
                    <!-- 全部历史轮次列表 -->
                    <div class="merrill-dim-row" v-for="(h, hIdx) in merrillDetailData._history" :key="hIdx" :style="{borderLeftColor: merrillDetailData.color}">
                        <div class="flex-between-mb6">
                            <span class="text-base-semibold">
                                <span class="stage-chip">{{ h.cycle_label || '—' }}</span>
                                {{ h.start || '—' }} → {{ h.end || '—' }}
                            </span>
                            <span class="text-sm-secondary">{{ h.duration || '—' }}</span>
                        </div>
                        <div class="text-sm-secondary-lh">
                            <qc-icon name="key" :size="13" /> {{ h.trigger || '—' }}
                        </div>
                        <div class="flex-gap-10-mt6-xs" v-if="h.key_indicators && Object.keys(h.key_indicators).length">
                            <span v-if="h.key_indicators.gdp_growth">GDP {{ h.key_indicators.gdp_growth }}%</span>
                            <span v-if="h.key_indicators.cpi">CPI {{ h.key_indicators.cpi }}%</span>
                            <span v-if="h.key_indicators.pmi">PMI {{ h.key_indicators.pmi }}</span>
                            <span v-if="h.key_indicators.ppi">PPI {{ h.key_indicators.ppi }}%</span>
                        </div>
                    </div>
                </div>
                <!-- 无历史记录 -->
                <div v-else-if="!merrillDetailData._isCurrent && !merrillDetailData._lastPeriod" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="calendar-days" :size="14" /> 历史轮次</div>
                    <qc-state-panel type="empty" icon="calendar-days" title="暂无历史记录"></qc-state-panel>
                </div>

                <!-- 经济特征 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="bar-chart-3" :size="14" /> 经济特征</div>
                    <div class="characteristics-grid">
                        <div v-for="(value, key) in merrillDetailData.characteristics" :key="key" class="char-item">
                            <div class="char-label">{{ getCharLabel(key) }}</div>
                            <div class="char-value">{{ value }}</div>
                        </div>
                    </div>
                </div>

                <!-- v2.0: 多维度评分详情 -->
                <div v-if="merrillData.dimension_scores" class="detail-section">
                    <div class="section-title"><qc-icon name="target" :size="14" /> 多维度评分详情</div>
                    <div class="flex-c-gap-10-mb8-base" v-for="dim in dimensionScoreList" :key="dim.key">
                        <span class="merrill-dim-label">{{ dim.label }}</span>
                        <div class="merrill-dim-track">
                            <div class="merrill-dim-fill" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                        </div>
                        <span class="merrill-dim-value" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                        <span class="text-sm-medium" :style="{color: dim.color}">{{ dim.level }}</span>
                    </div>
                    <div class="warning-note" v-if="merrillData.early_warnings?.length">
                        <b class="color-el-danger"><qc-icon name="alert-triangle" :size="13" /> 早期预警：</b>
                        <span class="inline-mr12" v-for="(w, i) in merrillData.early_warnings" :key="i">{{ w.type || w }}</span>
                    </div>
                </div>

                <!-- 资产配置建议 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="wallet" :size="14" /> 资产配置建议</div>
                    <div class="allocation-grid">
                        <div v-for="(info, asset) in merrillDetailData.allocation" :key="asset" class="allocation-item">
                            <div class="allocation-header">
                                <span class="asset-name">{{ getAssetName(asset) }}</span>
                                <span class="asset-rank" :style="{backgroundColor: getRankColor(info.rank)}">排名 #{{ info.rank }}</span>
                            </div>
                            <div class="allocation-advice">{{ info.advice }}</div>
                            <div class="allocation-return">预期收益：<span>{{ fmtNum(info.expected_return) }}</span></div>
                        </div>
                    </div>
                </div>

                <!-- 行业配置建议 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="factory" :size="14" /> 行业配置建议</div>
                    <div class="sector-list">
                        <div v-for="(advice, index) in merrillDetailData.sector_advice" :key="index" class="sector-item">
                            {{ advice }}
                        </div>
                    </div>
                </div>

                <!-- v3.7.13: 策略建议 -->
                <div v-if="merrillDetailData.strategy_mapping" class="detail-section">
                    <div class="section-title"><qc-icon name="sliders-horizontal" :size="14" /> 策略建议</div>
                    <div class="allocation-grid grid-2col-only">
                        <div class="allocation-item">
                            <div class="allocation-header"><qc-icon name="trophy" :size="14" /> 主推策略</div>
                            <div class="allocation-advice color-token-primary">
                                {{ (merrillDetailData.strategy_mapping.primary || []).join(' · ') }}
                            </div>
                        </div>
                        <div class="allocation-item">
                            <div class="allocation-header"><qc-icon name="pin" :size="14" /> 次选策略</div>
                            <div class="allocation-advice color-el-warning">
                                {{ (merrillDetailData.strategy_mapping.secondary || []).join(' · ') }}
                            </div>
                        </div>
                    </div>
                    <div class="note-box-sm">
                        <qc-icon name="lightbulb" :size="14" /> {{ merrillDetailData.strategy_mapping.rationale }}
                    </div>
                </div>

                <!-- 历史统计 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="scroll-text" :size="14" /> 历史统计</div>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">{{ fmtNum(merrillDetailData.historical_stats?.avg_duration_months) }}个月</div>
                            <div class="stat-label">历史平均持续时间</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.stock_avg_return != null ? (merrillDetailData.historical_stats.stock_avg_return * 100).toFixed(2) : '—' }}%</div>
                            <div class="stat-label">股票平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.bond_avg_return != null ? (merrillDetailData.historical_stats.bond_avg_return * 100).toFixed(2) : '—' }}%</div>
                            <div class="stat-label">债券平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.best_sector }}</div>
                            <div class="stat-label">历史表现最佳板块</div>
                        </div>
                    </div>
                </div>

                <!-- 典型历史案例 -->
                <div v-if="merrillDetailData.case_studies?.length" class="detail-section">
                    <div class="section-title"><qc-icon name="book-open" :size="14" /> 典型历史案例</div>
                    <div class="case-list">
                        <div v-for="(cs, index) in merrillDetailData.case_studies" :key="index" class="case-item">
                            <qc-icon name="pin" :size="13" /> {{ cs }}
                        </div>
                    </div>
                </div>

                <!-- 风险提示 -->
                <div class="detail-section risk-section">
                    <div class="section-title"><qc-icon name="alert-triangle" :size="14" /> 风险提示</div>
                    <div class="risk-list">
                        <div v-for="(risk, index) in merrillDetailData.risks" :key="index" class="risk-item">
                            {{ risk }}
                        </div>
                    </div>
                </div>

                <!-- 底部金色装饰 -->
                <div class="merrill-footer-decoration">
                    <div class="gold-gradient-bar"></div>
                    <div class="footer-hint">
                        <span>美林时钟仅供参考，不构成投资建议</span>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a,computed:t,ref:g,watch:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="stockDetailVisible" :title="''" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <!-- v3.16 (16.10-fix): 数据未就绪时显示加载态（弹窗已立即打开，避免接口慢导致延迟） -->
            <div v-if="stockDetailLoading && !stockDetail" class="empty-state p-48-0">
                <div class="empty-state-icon-xs"><qc-icon name="loader" :size="24" /></div>
                <div class="text-md-medium-primary">{{ t('detail.loading') }}</div>
                <div class="text-sm-tertiary-mt8">{{ t('detail.loadingHint') }}</div>
            </div>
            <div v-else-if="stockDetail">
                <div class="detail-content">
                    <!-- V5.23: 金色表头块 → 圆角矩形卡片, 与下方「入池历史」行同宽
                         (同处 .detail-content 内边距容器, 宽度天然一致); 评分展示已按用户要求移除 -->
                    <div class="detail-header">
                        <div class="dh-main">
                            <h3 class="text-xl-title">{{ stockDetail.stock }} <span class="text-md-muted">{{ stockDetail.name }}</span></h3>
                            <!-- V5.24: 入池历史并入金色卡片 (原先独占一行) — 与持仓天数同排, 提升信息密度 -->
                            <div class="detail-subtitle dh-meta">
                                <span class="dh-item">{{ t('detail.subtitle', { days: stockDetail.total_days }) }}</span>
                                <template v-if="poolInfo && poolInfo.pool_history && poolInfo.pool_history.first_appear">
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">首入 <b>{{ poolInfo.pool_history.first_appear }}</b></span>
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">最近在池 <b>{{ poolInfo.pool_history.last_appear }}</b></span>
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">累计 <b>{{ poolInfo.pool_history.pooled_days }}</b> 天</span>
                                    <template v-if="poolInfo.pool_history.pool_entries.length > 1">
                                        <span class="dh-sep">·</span>
                                        <span class="dh-item"><b>{{ poolInfo.pool_history.pool_entries.length }}</b> 段</span>
                                    </template>
                                </template>
                                <template v-else-if="poolInfo && poolInfo.pool_history">
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">从未入池</span>
                                </template>
                            </div>
                        </div>
                        <div class="dh-tags" v-if="poolInfo">
                            <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'watchlist'"
                                size="small" type="warning" effect="light"><qc-icon name="star" :size="13" /> 自选</el-tag>
                            <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'new_pool'"
                                size="small" type="success" effect="light"><qc-icon name="badge-check" :size="13" /> 入池</el-tag>
                            <el-tag v-if="poolInfo.holding" size="small" type="danger" effect="light">持仓</el-tag>
                        </div>
                    </div>
                    <!-- Tab 切换 -->
                    <div class="flex-gap-6-mb16-wrap">
                        <el-button size="small" :type="stockDetailTab === 'kline' ? 'primary' : ''" @click="stockDetailTab = 'kline'">
                            {{ t('detail.tabKline') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'ai' ? 'primary' : ''" @click="stockDetailTab = 'ai'">
                            {{ t('detail.tabEval') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'chat' ? 'primary' : ''" @click="stockDetailTab = 'chat'">
                            {{ t('detail.tabChat') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'factor' ? 'primary' : ''" @click="stockDetailTab = 'factor'">
                            {{ t('detail.tabFactor') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'performance' ? 'primary' : ''" @click="stockDetailTab = 'performance'">
                            {{ t('detail.tabPerformance') }}
                        </el-button>
                        <div class="flex-1"></div>
                        <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">
                            {{ t('detail.evaluate') }}
                        </el-button>
                        <el-button size="small" @click="toggleWatchlist(stockDetail.stock, stockDetail.name)" :type="watchlistCodes.has(stockDetail.stock) ? 'success' : 'primary'">
                            {{ watchlistCodes.has(stockDetail.stock) ? t('detail.inWatch') : t('detail.addWatch') }}
                        </el-button>
                    </div>
                    <!-- 按钮底部进度条 -->
                    <div v-if="aiLoading" class="ai-progress-bar">
                        <div class="ai-progress-fill"></div>
                    </div>
                    <!-- v3.15 (15.3): 阶段指示器 — 与真实 await 联动 + 实时已用秒数 -->
                    <div v-if="aiLoading" class="ai-stage-indicator">
                        <div class="ai-stage-dots-row">
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'fetching' || aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="radio-tower" :size="18" /></span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="bar-chart-3" :size="18" /></span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="bot" :size="18" /></span>
                            </div>
                        </div>
                        <div class="ai-stage-label">
                            <span class="ai-stage-text">{{ aiStageText }}</span>
                            <span v-if="aiEvalElapsed > 0" class="ai-stage-elapsed">· 已用时 {{ aiEvalElapsed }}s</span>
                        </div>
                    </div>
                    <!-- v3.15 (15.3): 评估失败提示 + 重试 -->
                    <div v-if="aiEvalError && !aiLoading" class="ai-eval-error">
                        <span class="ai-eval-error-icon"><qc-icon name="alert-triangle" :size="18" /></span>
                        <span class="ai-eval-error-text" :title="aiEvalError">{{ aiEvalError }}</span>
                        <el-button size="small" type="primary" @click="doAiEvaluate">{{ t('detail.retry') }}</el-button>
                    </div>

                    <!-- Tab: K线图表 -->
                    <div v-if="stockDetailTab === 'kline'">
                    <div class="section-title">{{ t('detail.sectionQuote') }}</div>
                    <div class="grid-auto">
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.close') }}</div>
                            <div class="stat-value">{{ (stockDetail.daily_data?.close != null ? stockDetail.daily_data.close.toFixed(2) : '—') }}</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.pctChg') }}</div>
                            <div class="stat-value" :style="{color: stockDetail.daily_data?.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                                {{ (stockDetail.daily_data?.pct_chg != null ? stockDetail.daily_data.pct_chg.toFixed(2) : '—') }}%
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.highLow') }}</div>
                            <div class="text-md-semibold">
                                <span class="color-danger">{{ stockDetail.daily_data?.high != null ? stockDetail.daily_data.high.toFixed(2) : '—' }}</span>
                                <span class="color-tertiary-mx4">/</span>
                                <span class="color-primary">{{ stockDetail.daily_data?.low != null ? stockDetail.daily_data.low.toFixed(2) : '—' }}</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.volume') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.vol != null ? Math.round(stockDetail.daily_data.vol / 10000).toLocaleString() : '—' }}万</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.turnover') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.turnover_rate?.toFixed(2) || '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.amplitude') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.pre_close ? ((stockDetail.daily_data.high - stockDetail.daily_data.low) / stockDetail.daily_data.pre_close * 100).toFixed(2) : '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.ma20Dev') }}</div>
                            <div class="stat-value" :style="{fontSize:'var(--font-md)',color:(stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close > stockDetail.ma_data.ma20) ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ (stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close) ? ((stockDetail.daily_data.close - stockDetail.ma_data.ma20) / stockDetail.ma_data.ma20 * 100).toFixed(2) + '%' : '--' }}</div>
                        </div>
                    </div>

                    <!-- K线图区域 -->
                    <div class="section-title">{{ t('detail.sectionKline') }}</div>
                    <div class="kline-container">
                        <div class="flex-between-mb12">
                            <div class="kline-tabs">
                                <button
                                    v-for="tab in klinePeriods"
                                    :key="tab.value"
                                    :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                                    @click="switchKlinePeriod(tab.value)"
                                >
                                    {{ tab.label }}
                                </button>
                            </div>
                            <el-button v-if="!stockKlineLoaded" type="primary" size="small" @click="loadStockKline(currentKlinePeriod)" :loading="klineLoading">
                                {{ t('detail.loadKline') }}
                            </el-button>
                        </div>
                        <div v-if="stockKlineLoaded" class="kline-chart" id="stockKlineChart"></div>
                        <!-- V5.4.1 (R1): 分钟数据降级日线提示 -->
                        <el-alert v-if="klineDegradeNote" :title="klineDegradeNote" type="warning" :closable="false" class="mt-8" />
                        <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                        <div v-if="stockKlineLoaded" class="ma-toggle-row">
                            <span class="ma-toggle-label">{{ t('detail.maLabel') }}</span>
                            <button
                                v-for="m in MA_LINES"
                                :key="m"
                                :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                                @click="toggleKlineMa(m)"
                            >{{ m }}</button>
                            <span class="ma-toggle-hint">{{ t('detail.crosshairHint') }}</span>
                        </div>
                        <!-- 时间范围快捷按钮 -->
                        <div class="flex-gap-4-mt8-center" v-if="stockKlineLoaded">
                            <el-button size="small" @click="zoomKlineRange(22)">{{ t('detail.range1M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(66)">{{ t('detail.range3M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(126)">{{ t('detail.range6M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(0)">{{ t('detail.rangeAll') }}</el-button>
                        </div>
                        <div v-if="klineLoading" class="kline-loading">
                            <el-icon class="is-loading"><Loading /></el-icon> {{ t('detail.loadingKline') }}
                        </div>
                        <div v-if="!stockKlineLoaded && !klineLoading" class="kline-placeholder">
                            <div class="text-base-tertiary">{{ t('detail.clickToLoadKline') }}</div>
                        </div>
                    </div>

                    <div class="section-title">{{ t('detail.strategyHoldings') }}</div>
                    <div v-for="h in stockDetail.history" :key="h.strategy" class="hold-item">
                        <span class="hold-name">{{ h.strategy_name }}</span>
                        <span class="hold-days">{{ t('detail.holdDays', { days: h.hold_count }) }}</span>
                    </div>
                    </div>  <!-- close kline tab -->

                    <!-- Tab: AI智能评估 -->
                    <div v-if="stockDetailTab === 'ai'">
                        <div v-if="aiResult" class="card mb-4">
                            <div class="card-title m-0-0-16">
                                <span>{{ t('detail.evalTitle') }}</span>
                                <!-- v3.15 (15.3): 模型信息展示 -->
                                <span v-if="aiResult.model_used" class="ai-result-meta" title="模型"><qc-icon name="brain" :size="13" /> {{ aiResult.model_used }}</span>
                                <span v-if="aiResult.model_provider" class="ai-result-meta" title="厂商">{{ aiResult.model_provider }}</span>
                                <span v-if="aiResult.result && aiResult.result.provider && aiResult.result.provider !== (aiResult.model_provider || '')" class="ai-result-meta" title="引擎">{{ aiResult.result.provider }}</span>
                                <span v-if="aiResult.llm_latency_ms" class="ai-result-meta" title="LLM 延迟"><qc-icon name="zap" :size="13" /> {{ aiResult.llm_latency_ms }}ms</span>
                                <span v-if="aiResult.from_cache || (aiResult.llm_latency_ms === 0 && !aiResult.model_used)" class="ai-result-meta" title="命中缓存">{{ t('detail.cachedResult') }}</span>
                                <span class="flex-1"></span>
                                <el-button size="small" @click="copyAiReport">{{ t('detail.copyReport') }}</el-button>
                                <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">{{ t('detail.reevaluate') }}</el-button>
                            </div>
                            <div class="flex-c-gap-24-mb20-wrap">
                                <div class="ring-box">
                                    <svg class="rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-light)" stroke-width="8"/>
                                        <circle class="transition-08" cx="50" cy="50" r="42" fill="none" :stroke="levelRingColor" stroke-width="8" stroke-linecap="round" :stroke-dasharray="(aiResult.result.total_score/100)*264+' 264'"/>
                                    </svg>
                                    <div class="ring-center-text">
                                        <div class="ring-value">{{ fmtNum(aiResult.result.total_score, 1) }}</div>
                                        <div class="text-xs-tertiary">{{ t('detail.scoreUnit') }}</div>
                                    </div>
                                </div>
                                <div class="flex-1-min180">
                                    <div class="text-xl-bold-primary-mb8">{{ aiResult.result.level }}</div>
                                    <div class="text-md-secondary-lh">{{ aiResult.result.detailed_report || '' }}</div>
                                    <!-- 评估历史对比 -->
                                    <div class="inline-chip" v-if="evalHistoryComparison">
                                        <qc-icon name="trending-up" :size="13" /> 上次{{ fmtNum(evalHistoryComparison.prevScore, 1) }}分 → 本次{{ fmtNum(evalHistoryComparison.currScore, 1) }}分
                                        <span :style="{color:evalHistoryComparison.diff>0?'var(--el-success)':evalHistoryComparison.diff<0?'var(--el-danger)':'var(--text-tertiary)'}">
                                            {{ evalHistoryComparison.diff>0?'↑':evalHistoryComparison.diff<0?'↓':'→' }}{{ fmtNum(Math.abs(evalHistoryComparison.diff), 1) }}
                                        </span>
                                    </div>
                                    <!-- 操作检查清单 -->
                                    <div class="meta-tags" v-if="checklistItems.length">
                                        <span class="text-xs-secondary" v-for="c in checklistItems" :key="c.label"><qc-icon :name="c.icon" :size="13" /> {{ c.label }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-card">
                                <div class="panel-title"><qc-icon name="search-check" :size="14" /> 九维度评分</div>
                                <div class="flex-c-gap-10-mb6" v-for="(score,name) in aiResult.result.dimensions" :key="name">
                                    <span class="dim-label">{{ name }}</span>
                                    <div class="dim-track">
                                        <div :style="{width:score+'%',height:'100%',background:score>=70?'var(--el-success)':score>=50?'var(--el-warning)':'var(--el-danger)',borderRadius:'6px',transition:'width 0.5s'}"></div>
                                    </div>
                                    <span class="dim-value" :style="{color:score>=70?'var(--success-text)':score>=50?'var(--warning-text)':'var(--danger-text)'}">{{ fmtNum(score, 0) }}</span>
                                </div>
                            </div>
                            <div class="ai-eval-grid grid-3col-gap12">
                                <div class="factor-card-success">
                                    <div class="factor-title-success">▸ 优势</div>
                                    <div class="detail-text-primary" v-for="s in (aiResult?.result?.analysis?.strengths || [])" :key="s">• {{ s }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.strengths || []).length">-</div>
                                </div>
                                <div class="factor-card-gold">
                                    <div class="factor-title-gold"><qc-icon name="alert-triangle" :size="14" /> 风险</div>
                                    <div class="detail-text-primary" v-for="w in (aiResult?.result?.analysis?.weaknesses || [])" :key="w">• {{ w }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.weaknesses || []).length">-</div>
                                </div>
                                <div class="factor-card-info">
                                    <div class="factor-title-info"><qc-icon name="lightbulb" :size="14" /> 建议</div>
                                    <div class="detail-text-primary" v-for="s in (aiResult?.result?.analysis?.suggestions || [])" :key="s">• {{ s }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.suggestions || []).length">-</div>
                                </div>
                            </div>
                            <!-- 信号归因条 -->
                            <div class="factor-note-box" v-if="aiResult.result.signal_attribution">
                                <div class="panel-title-mb8"><qc-icon name="bar-chart-3" :size="14" /> 信号归因</div>
                                <div class="flex-gap-8-wrap">
                                    <span class="chip-info" v-if="aiResult.result.signal_attribution.technical">技术面 {{ fmtNum(aiResult.result.signal_attribution.technical, 0) }}%{{ aiResult.result.signal_attribution.technical_driver ? ' · '+aiResult.result.signal_attribution.technical_driver : '' }}</span>
                                    <span class="chip-success" v-if="aiResult.result.signal_attribution.fundamentals">基本面 {{ fmtNum(aiResult.result.signal_attribution.fundamentals, 0) }}%{{ aiResult.result.signal_attribution.fundamental_driver ? ' · '+aiResult.result.signal_attribution.fundamental_driver : '' }}</span>
                                    <span class="gold-chip" v-if="aiResult.result.signal_attribution.capital_flow">资金面 {{ fmtNum(aiResult.result.signal_attribution.capital_flow, 0) }}%{{ aiResult.result.signal_attribution.capital_flow_driver ? ' · '+aiResult.result.signal_attribution.capital_flow_driver : '' }}</span>
                                    <span class="gold-chip" v-if="!aiResult.result.signal_attribution.capital_flow && aiResult.result.signal_attribution.market_sentiment">资金面 {{ fmtNum(aiResult.result.signal_attribution.market_sentiment, 0) }}%</span>
                                </div>
                                <div class="text-sm-secondary-mt6" v-if="aiResult.result.signal_attribution.strongest_bullish">
                                    <span class="color-success">●</span> 最强看多: {{ aiResult.result.signal_attribution.strongest_bullish }}
                                    <span class="ml-12" v-if="aiResult.result.signal_attribution.strongest_bearish"><qc-icon name="trending-down" :size="13" /> 最强看空: {{ aiResult.result.signal_attribution.strongest_bearish }}</span>
                                </div>
                            </div>
                            <!-- 狙击点卡片 -->
                            <div class="grid-3col-gap10-mt12" v-if="aiResult.result.analysis?.sniper_points">
                                <div class="factor-mini-info">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="target" :size="13" /> 理想买入</div>
                                    <div class="factor-mini-val-info">{{ fmtNum(aiResult.result.analysis.sniper_points.ideal_buy) }}</div>
                                </div>
                                <div class="factor-mini-danger">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="octagon-x" :size="13" /> 止损</div>
                                    <div class="factor-mini-val-danger">{{ fmtNum(aiResult.result.analysis.sniper_points.stop_loss) }}</div>
                                </div>
                                <div class="factor-mini-success">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="flag" :size="13" /> 目标</div>
                                    <div class="factor-mini-val-success">{{ fmtNum(aiResult.result.analysis.sniper_points.take_profit) }}</div>
                                </div>
                            </div>
                            <!-- 仓位建议 -->
                            <div class="grid-2col-gap10-mt12" v-if="aiResult.result.analysis?.position_advice">
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="user" :size="13" /> 空仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.no_position }}</div>
                                </div>
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="package" :size="13" /> 持仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.has_position }}</div>
                                </div>
                            </div>
                            <!-- 数据质量提示 -->
                            <div class="factor-empty-note" v-if="aiResult.result.data_quality_note">
                                <qc-icon name="clipboard-list" :size="14" /> {{ aiResult.result.data_quality_note }}
                            </div>
                        </div>
                        <div class="text-center-tertiary-pad40" v-else>
                            <div class="text-3xl-mb12"><qc-icon name="bot" :size="36" /></div>
                            <div v-if="aiResult">
                                <div class="mb-8">最近评估：{{ aiResult.result.level }}</div>
                                <div class="text-sm"><qc-icon name="clock" :size="13" /> {{ (lastEvalTime || aiResult.evaluate_time || '').split('T')[0] }} {{ ((lastEvalTime || aiResult.evaluate_time || '').split('T')[1] || '').split('.')[0] }}</div>
                            </div>
                            <div v-else>{{ t('detail.noEvalYet') }}</div>
                        </div>
                    </div>  <!-- close ai tab -->

                    <!-- Tab: AI 问股对话 -->
                    <div v-if="stockDetailTab === 'chat'">
                        <div class="card mb-12">
                            <div class="card-title m-0-0-12"><qc-icon name="message-circle" :size="14" /> AI 智能问股</div>
                            <!-- Quick prompts -->
                            <div class="flex-wrap-gap-6-mb12">
                                <el-button size="small" @click="askStockQuick('trend')"><qc-icon name="trending-up" :size="13" /> 趋势分析</el-button>
                                <el-button size="small" @click="askStockQuick('fundamental')"><qc-icon name="bar-chart-3" :size="13" /> 基本面</el-button>
                                <el-button size="small" @click="askStockQuick('comprehensive')"><qc-icon name="search-check" :size="13" /> 综合分析</el-button>
                            </div>
                            <!-- Chat messages -->
                            <!-- v3.16 (16.8): 历史消息惰性加载提示 -->
                            <div class="text-center-tertiary-pad12" v-if="stockChatLoading && stockChatMessages.length === 0"><qc-icon name="loader" :size="14" /> 加载历史消息中...</div>
                            <div class="scroll-300" v-else-if="stockChatMessages.length> 0">
                                <div class="mb-10" v-for="(msg, mi) in stockChatMessages" :key="mi">
                                    <div class="text-right" v-if="msg.role==='user'">
                                        <span class="chat-bubble-user">{{ msg.content }}</span>
                                    </div>
                                    <div class="flex-gap-6" v-else>
                                        <span><qc-icon name="bot" :size="16" /></span>
                                        <div class="chat-scroll" v-html="renderMarkdown(msg.content)"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Input -->
                            <div class="flex-gap-8">
                                <el-input class="flex-1" v-model="stockChatInput" placeholder="输入问题，如：这股趋势怎么样" @keyup.enter="askStockSend" size="small"/>
                                <el-button type="primary" size="small" @click="askStockSend" :loading="stockChatLoading">发送</el-button>
                            </div>
                            <div class="text-xs-danger-mt6" v-if="stockChatError">{{ stockChatError }}</div>
                        </div>
                    </div>  <!-- close chat tab -->

                    <!-- Tab: 多因子体检 -->
                    <div v-if="stockDetailTab === 'factor'">
                        <!-- V5.3.0 (T-5.3.1.2): 收敛为统一状态面板 -->
                        <qc-state-panel v-if="factorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="factorError || !factorGroups.length" type="empty" icon="dna" :title="t('detail.factorEmpty')"></qc-state-panel>
                        <div v-else>
                            <div v-if="factorSummary && factorSummary.available" class="factor-summary">
                                <span class="factor-summary-count">{{ t('detail.factorCount', { count: factorSummary.available }) }}</span>
                                <span v-if="factorSummary.categories && factorSummary.categories.length" class="factor-summary-cats">{{ factorSummary.categories.join(' / ') }}</span>
                            </div>
                            <!-- v3.18 (FR-3.18.7): 因子有效性 IC/IR 标注 (数据不可达优雅降级) -->
                            <div v-if="factorIc !== null" class="factor-summary">
                                <span class="factor-summary-count">因子有效性</span>
                                <template v-if="Object.keys(factorIc).length">
                                    <span v-for="(r, fk) in factorIc" :key="fk" class="factor-summary-cats">{{ fk }}: {{ factorIcGrade(r) }}</span>
                                </template>
                                <span v-else class="factor-summary-cats">数据不可达</span>
                            </div>
                            <div v-for="g in factorGroups" :key="g.category" class="factor-group">
                                <div class="factor-group-title">{{ g.category }}</div>
                                <div class="factor-grid">
                                    <div v-for="f in g.items" :key="f.key" class="factor-card">
                                        <div class="factor-label">{{ f.label }}</div>
                                        <div class="factor-value-row">
                                            <span class="factor-value">{{ f.value != null ? f.value : '—' }}<span v-if="f.unit" class="factor-unit">{{ f.unit }}</span></span>
                                            <span v-if="f.semantic" class="factor-semantic" :class="factorSemClass(f.semantic)">{{ f.semantic }}</span>
                                            <span v-else class="factor-semantic factor-sem-none">{{ t('detail.factorNoData') }}</span>
                                        </div>
                                        <div v-if="f.percentile != null" class="factor-percentile">{{ t('detail.factorPercentile', { pct: Math.round(f.percentile * 100) }) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  <!-- close factor tab -->
                    <div v-if="stockDetailTab === 'performance'">
                        <!-- V5.3.10: 业绩预告/快报 (sxsc forecast/express) -->
                        <qc-state-panel v-if="perfLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="perfError" type="empty" icon="bar-chart" :title="t('detail.perfEmpty')"></qc-state-panel>
                        <div v-else-if="perfForecast.length || perfExpress.length">
                            <div v-if="perfForecast.length" class="perf-block">
                                <div class="perf-block-title">{{ t('detail.perfForecast') }}</div>
                                <el-table :data="perfForecast" size="small" border>
                                    <el-table-column prop="ann_date" :label="t('detail.perfAnnDate')" width="100"></el-table-column>
                                    <el-table-column prop="end_date" :label="t('detail.perfEndDate')" width="100"></el-table-column>
                                    <el-table-column prop="type" :label="t('detail.perfType')" width="80"></el-table-column>
                                    <el-table-column :label="t('detail.perfChange')">
                                        <template #default="{ row }">
                                            <span v-if="row.p_change_min != null">{{ row.p_change_min }}% ~ {{ row.p_change_max }}%</span>
                                            <span v-else>—</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column :label="t('detail.perfNetProfit')">
                                        <template #default="{ row }">
                                            <span v-if="row.net_profit_min != null">{{ fmtY(row.net_profit_min) }} ~ {{ fmtY(row.net_profit_max) }}</span>
                                            <span v-else>—</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div v-if="perfExpress.length" class="perf-block">
                                <div class="perf-block-title">{{ t('detail.perfExpress') }}</div>
                                <el-table :data="perfExpress" size="small" border>
                                    <el-table-column prop="ann_date" :label="t('detail.perfAnnDate')" width="100"></el-table-column>
                                    <el-table-column prop="end_date" :label="t('detail.perfEndDate')" width="100"></el-table-column>
                                    <el-table-column prop="revenue" :label="t('detail.perfRevenue')">
                                        <template #default="{ row }"><span v-if="row.revenue != null">{{ fmtY(row.revenue) }}</span><span v-else>—</span></template>
                                    </el-table-column>
                                    <el-table-column prop="n_income" :label="t('detail.perfIncome')">
                                        <template #default="{ row }"><span v-if="row.n_income != null">{{ fmtY(row.n_income) }}</span><span v-else>—</span></template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" icon="bar-chart" :title="t('detail.perfEmpty')"></qc-state-panel>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const u=a("qcState");if(!u)return{};const m={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},T=t(()=>m[u.aiEvalStage.value]||""),r=t(()=>{const H=u.aiResult&&u.aiResult.value&&u.aiResult.value.result&&u.aiResult.value.result.level;return H?H==="强烈推荐"||H==="推荐"?"var(--success-text)":H==="谨慎推荐"?"var(--warning-text)":H==="中性"||H==="观望"?"var(--text-secondary)":H==="评估失败"||H==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function n(H){const $=document.createElement("textarea");$.value=H,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}async function f(){const H=u.aiResult&&u.aiResult.value;if(!H||!H.result)return;const $=H.result.dimensions||{},Z=Object.entries($).map(([te,R])=>`${te} ${Math.round(R)}分`).join(`
`),le=`【AI 智能评估】${H.result.level||""} ${H.result.total_score!=null?H.result.total_score:"—"}分
模型：${H.model_used||H.result.provider||"—"}

${H.result.detailed_report||""}

九维度评分：
${Z||"无"}`;try{await navigator.clipboard.writeText(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{n(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=g(!1),x=g(!1),w=g(null),E=g([]),C={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function q(H){return C[H]||"factor-sem-none"}async function F(){const H=u.stockDetail.value&&u.stockDetail.value.stock;if(H){o.value=!0,x.value=!1,E.value=[],w.value=null;try{const $=u.selectedDate.value?`?date=${u.selectedDate.value}`:"",Z=await fetch(`/api/calendar/stock/${H}/factors${$}`).then(s=>s.json()),le=Z&&Array.isArray(Z.factors)?Z.factors:[],te=[],R={};le.forEach(s=>{R[s.category]||(R[s.category]={category:s.category,items:[]},te.push(R[s.category])),R[s.category].items.push(s)}),E.value=te,w.value=Z&&Z.summary||null}catch{x.value=!0}finally{o.value=!1}}}e(u.stockDetailTab,H=>{H==="factor"&&u.stockDetail.value&&u.stockDetailVisible.value&&(F(),d())});const D=g(null);async function d(){try{const H=await fetch("/api/market/factor-ic").then($=>$.json());D.value=H&&H.success&&H.data?H.data:{}}catch{D.value={}}}function i(H){if(!H||!H.n5)return"—";const $=H.n5.icir!=null?"ICIR "+H.n5.icir:"ICIR —";return H.n5.grade+" ("+$+")"}const h=g(!1),V=g(!1),W=g([]),S=g([]);function O(H){if(H==null)return"—";const $=Number(H);return Number.isNaN($)?"—":Math.abs($)>=1e8?($/1e8).toFixed(2)+"亿":Math.abs($)>=1e4?($/1e4).toFixed(1)+"万":String($)}async function K(){const H=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(H){h.value=!0,V.value=!1;try{const $=await fetch("/api/market/performance/"+encodeURIComponent(H)).then(Z=>Z.json());$&&$.success?(W.value=$.forecast||[],S.value=$.express||[]):V.value=!0}catch{V.value=!0}finally{h.value=!1}}}e(u.stockDetailTab,H=>{H==="performance"&&K()});const A=g(null);async function L(){const H=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(!H){A.value=null;return}try{const $=await fetch("/api/focus/stock/"+encodeURIComponent(H)+"/pool").then(Z=>Z.json());A.value=$&&$.success&&$.data?$.data:null}catch{A.value=null}}return e(()=>u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock,H=>{H&&u.stockDetailVisible.value?L():A.value=null}),e(()=>u.stockDetailVisible.value,H=>{H?L():A.value=null}),{...u,aiStageText:T,levelRingColor:r,copyAiReport:f,factorLoading:o,factorError:x,factorSummary:w,factorGroups:E,factorSemClass:q,loadFactorPanel:F,factorIc:D,loadFactorIc:d,factorIcGrade:i,perfLoading:h,perfError:V,perfForecast:W,perfExpress:S,fmtY:O,loadPerformance:K,poolInfo:A,loadPoolInfo:L}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
      <div class="ai-history-item border-bottom-light" :class="{'selected': isSelected}">
        <div @click.stop="toggleSelect" class="history-checkbox">
          <div class="checkbox-inner" :class="{'checked': isSelected}">{{ isSelected ? '✓' : '' }}</div>
        </div>
        <div class="history-content" @click="view">
          <div class="history-header">
            <div class="stock-info">
              <span class="stock-code">{{ item.stock_code }}</span>
              <span class="stock-name">{{ item.stock_name }}</span>
              <template v-if="type === 'history'">
                <span @click.stop="toggleWatchlist(item.stock_code, item.stock_name)" tabindex="0" role="button"
                      :aria-label="watchState.label" :title="watchState.label" class="history-star"
                      @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="star" :size="14" :class="watchState.isWatched ? 'is-watched' : ''" /></span>
                <span v-if="evaluatedCodes.has(item.stock_code)" title="已AI评估" class="history-flag"><qc-icon name="bot" :size="14" /></span>
                <span v-if="klineLoadedCodes.has(item.stock_code)" title="已加载K线" class="history-flag"><qc-icon name="trending-up" :size="14" /></span>
              </template>
            </div>
            <span v-if="type === 'history'" class="score-badge-small" :style="{background: levelBg(item.result.level), color: levelColor(item.result.level)}">
              <span class="score-num">{{ fmtNum(item.result.total_score) }}</span>
              <span class="score-level">{{ item.result.level }}</span>
            </span>
            <span v-else class="score-badge-small chat-badge">
              <span class="score-num">{{ item.msg_count }}</span>
              <span class="score-level">条消息</span>
            </span>
          </div>
          <div class="history-footer">
            <span class="history-time"><qc-icon name="clock" :size="14" /> {{ timeText }}</span>
            <span class="history-provider"><qc-icon :name="providerIcon" :size="14" /> {{ providerText }}</span>
            <span v-if="type === 'history' && showDims" class="history-dims"><qc-icon name="flask-conical" :size="14" /> {{ dimsText }}</span>
          </div>
        </div>
        <div class="history-actions">
          <el-button size="small" type="danger" text @click.stop="remove" aria-label="删除记录"><qc-icon name="trash-2" :size="14" /></el-button>
        </div>
      </div>
    `,setup(g){const e=t("qcState");if(!e)return{};const u=a(()=>g.type==="history"?e.selectedHistoryIds.value.includes(g.item.id):e.selectedChatIds.value.includes(g.item.id)),m=a(()=>{const C=e.watchlistCodes.value.has(g.item.stock_code);return{icon:"star",isWatched:C,label:C?"取消收藏":"加入收藏"}}),T=a(()=>g.type==="history"?"bot":"message-circle"),r=a(()=>{var C;return g.type==="history"?((C=g.item.result)==null?void 0:C.provider)||"":g.item.first_msg||""}),n=a(()=>{var C,q;return`${((q=(C=g.item.result)==null?void 0:C.dimensions)==null?void 0:q.length)||9}维度分析`}),f=a(()=>{var q,F;const C=g.type==="history"?g.item.evaluate_time:g.item.created_at||"";return C?g.timeFormat==="datetime"?g.type==="history"?`${C.split("T")[0]} ${(C.split("T")[1]||"").split(".")[0]}`:`${C.split("T")[0]} ${((q=C.split("T")[1])==null?void 0:q.substring(0,5))||""}`:g.type==="history"?(C.split("T")[1]||"").split(".")[0]||C:((F=C.split("T")[1])==null?void 0:F.substring(0,5))||"":""});function o(){g.type==="history"?e.toggleSelectHistory(g.item.id):e.toggleSelectChat(g.item.id)}function x(){g.type==="history"?e.viewAiResult(g.item):e.viewChatSession(g.item)}async function w(){try{await ElementPlus.ElMessageBox.confirm(g.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}g.type==="history"?e.deleteSingleHistory(g.item.id):e.deleteChatSession(g.item.id)}function E(C,q){e.toggleWatchlist(C,q)}return{isSelected:u,watchState:m,providerIcon:T,providerText:r,dimsText:n,timeText:f,toggleSelect:o,view:x,remove:w,toggleWatchlist:E,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const u=["买入","持有","观望","减仓","卖出"],m={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},T={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],n={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},f=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(w){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(w).then(q=>q.json?q.json():q)}function x(){const w=new Date,E=C=>C<10?"0"+C:""+C;return w.getFullYear()+"-"+E(w.getMonth()+1)+"-"+E(w.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
      <div>
        <!-- 今日概览卡 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="target" :size="14" /> 重点跟踪 · 今日概览
            <span class="card-title-hint" v-if="latestNote">{{ latestNote }}</span>
            <span class="card-title-hint" v-if="baseNote">{{ baseNote }}</span>
          </div>
          <div class="flex-between mb-8">
            <div class="flex-gap-8">
              <el-date-picker v-model="curDate" type="date" size="small"
                value-format="YYYY-MM-DD" placeholder="选择日期" @change="loadAll"></el-date-picker>
              <el-radio-group v-model="session" size="small" @change="loadResults">
                <el-radio-button v-for="s in SESSIONS" :key="s.v" :value="s.v">{{ s.l }}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="color-secondary">共 {{ results.total }} 只 · 按当前登记持仓派生</div>
          </div>
          <!-- V5.4.1 (R3): 5档动作分布可视化 — 堆叠条 + 图例 (主题令牌色) -->
          <div v-if="results.total > 0" class="focus-action-bar-wrap">
            <div class="focus-action-bar">
              <div v-for="a in ACTION_ORDER" :key="a"
                   class="focus-action-seg" :class="'focus-action-' + a"
                   :style="{ width: actionPct(a) }"
                   :title="a + ': ' + (results.actions[a] || 0)"></div>
            </div>
            <div class="focus-action-legend">
              <span v-for="a in ACTION_ORDER" :key="a" class="focus-action-legend-item">
                <span class="focus-action-dot" :class="'focus-action-' + a"></span>
                {{ a }} <b>{{ results.actions[a] || 0 }}</b>
              </span>
            </div>
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="a in ACTION_ORDER" :key="a" :type="tagType(a)" size="small" effect="light">
              <span class="qc-status-dot" :class="ACTION_DOT[a]"></span> {{ a }}: 0
            </el-tag>
          </div>
        </div>

        <!-- 当日多时点结果 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="bar-chart-3" :size="14" /> 当日多时点结果
            <span class="card-title-hint">时段: {{ sessionLabel }} · 点击行查看右栏详情</span>
          </div>
          <div v-if="loading" class="color-secondary">加载中…</div>
          <div v-else-if="results.rows.length === 0" class="color-secondary">
            该日期/时段暂无评估结果（多时点评估由调度执行, 盘前 09:00 / 盘后 20:00 必做）
          </div>
          <div v-else>
            <!-- V5.19 (F6): 中栏档位分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
            <qc-detail-split :enabled="detailSplitEnabled">
            <template #list>
            <!-- V5.4.2 (FR): 按推荐档位归类 (强烈推荐→观望), 组内评分降序 — 后端 results.groups 已就绪 -->
            <template v-for="(rows, lv) in displayGroups" :key="lv">
              <div class="focus-tier-header">
                <span class="focus-tier-emoji"><span class="qc-status-dot" :class="TIER_DOT[lv] || 'is-info'"></span></span>
                <span class="focus-tier-name">{{ lv }}</span>
                <span class="color-secondary">({{ rows.length }})</span>
              </div>
              <div v-for="row in rows" :key="row.stock_code" class="focus-row"
                :class="{ 'is-active': detailSplitEnabled && stockDetail && stockDetail.stock === row.stock_code }"
                @click="openStockDetail(row.stock_code)" tabindex="0" role="button"
                @keydown.enter.prevent="openStockDetail(row.stock_code)">
                <!-- V5.15 (F5): 行结构对齐「关注」风格 — 状态点|名称(含入池徽章)|档位|评分|方向|操作 分列 -->
                <span class="focus-row-status"><span class="qc-status-dot" :class="ACTION_DOT[row.action] || 'is-info'"></span></span>
                <span class="focus-row-name">{{ row.stock_name }}
                  <span class="color-secondary">({{ row.stock_code }})</span>
                  <!-- V5.4.2 (FR): 入池状态徽标 — 新入池/在池/已出池 + 自选/持仓 -->
                  <span v-if="poolStatus[row.stock_code]" class="focus-row-badges">
                    <el-tag v-if="poolStatus[row.stock_code].source === 'both' || poolStatus[row.stock_code].source === 'watchlist'"
                      size="small" type="warning" effect="light" class="focus-badge"><qc-icon name="star" :size="14" /> 自选</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].pool_state === 'new_pool'"
                      size="small" type="success" effect="light" class="focus-badge"><qc-icon name="sparkles" :size="14" /> 新入池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'in_pool'"
                      size="small" type="primary" effect="light" class="focus-badge"><qc-icon name="map-pin" :size="14" /> 在池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'exited'"
                      size="small" type="warning" effect="light" class="focus-badge"><qc-icon name="log-out" :size="14" /> 已出池</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].holding" size="small" type="danger" effect="light" class="focus-badge">持仓</el-tag>
                  </span>
                </span>
                <span class="focus-row-tier"><el-tag :type="tagType(row.action)" size="small">{{ row.action }}</el-tag></span>
                <span class="focus-row-score">评分 {{ fmtScore(row.total_score) }}</span>
                <span class="focus-row-dir">{{ row.direction || '震荡' }}</span>
                <!-- V5.26: 行尾圆形「打开详情」按钮已移除 —— 整行点击即打开,
                     且右栏 (qc-detail-split #pane) 默认已展示详情, 该按钮是重复入口 -->
              </div>
            </template>
            </template>
            <template #pane>
              <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
            </template>
            </qc-detail-split>
          </div>
        </div>

        <!-- 历史记录 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="history" :size="14" /> 历史记录 <span class="card-title-hint">当日时段分组</span></div>
          <div v-if="Object.keys(history.sessions || {}).length === 0" class="color-secondary">
            该日期暂无历史评估记录
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="(cnt, s) in history.sessions" :key="s" size="small" type="info">
              {{ SESSION_LABELS[s] || s }}: {{ cnt }} 只
            </el-tag>
          </div>
          <div class="mt-8">
            <div class="color-secondary mb-4">单股历史对比（不同时点/日期变化）</div>
            <div class="flex-gap-8">
              <el-input v-model="stockCode" size="small" placeholder="输入代码, 如 601985.SH"
                style="width:220px" @keyup.enter="loadStockHistory"></el-input>
              <el-button size="small" @click="loadStockHistory">查询</el-button>
            </div>
            <div v-if="stockHistory && stockHistory.length" class="mt-8">
              <div v-for="h in stockHistory" :key="h.trade_date + h.session" class="focus-row-sm">
                {{ h.trade_date }} · {{ SESSION_LABELS[h.session] || h.session }} ·
                {{ h.level || '—' }} · 评分 {{ fmtScore(h.total_score) }} ·
                {{ h.direction || '震荡' }}
                <span class="color-secondary">({{ h.model_provider }})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 效果块 -->
        <div class="card">
          <div class="card-title"><qc-icon name="trending-up" :size="14" /> 评估效果 <span class="card-title-hint">历史命中率（决策复盘）</span></div>
          <div v-if="trackLoading" class="color-secondary">加载中…</div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="w in TRACK_WINDOWS" :key="w.key" size="small" :type="rateTagType(w.key)">
              {{ w.label }}: {{ fmtRate(w.key) }}
            </el-tag>
          </div>
          <div v-if="trackNote" class="color-secondary mt-8">{{ trackNote }}</div>
        </div>
      </div>`,setup(){const w=e("qcState"),E=a(x()),C=a("after_close"),q=a({rows:[],actions:{},total:0,groups:{}}),F=a({sessions:{},total:0}),D=a(null),d=a(!1),i=a(""),h=a(!1),V=a([]),W=a(""),S=a(null),O={},K=a({});let A=0;const L=a(null),H=t(function(){const M=q.value&&q.value.groups||{};return Object.keys(M).length?M:q.value&&q.value.rows&&q.value.rows.length?{全部:q.value.rows}:{}}),$=t(function(){const M=L.value;return!M||!M.date||M.date!==E.value?"":"已加载最近一次评估: "+M.date+" · "+(n[M.session]||M.session)}),Z=t(function(){const M=q.value&&q.value.base_date;return M?M===E.value?"评分范围: "+M+" 收盘池 + 自选":"评分范围: "+M+" 收盘池(前一交易日算好) + 自选":""});function le(M){if(M==null)return"—";const U=Number(M);return U===Math.floor(U)?String(U):U.toFixed(1)}function te(M){const U=q.value.total||0,ie=(q.value.actions||{})[M]||0;if(!U)return"0%";const fe=ie/U*100;return fe>0&&fe<4?"4%":fe.toFixed(1)+"%"}function R(M){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[M]||"info"}function s(M){const U=D.value&&D.value.overall&&D.value.overall[M]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"info":U.rate>=60?"success":U.rate>=40?"warning":"danger"}function y(M){const U=D.value&&D.value.overall&&D.value.overall[M]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"样本不足":U.rate.toFixed(1)+"% ("+U.total+" 样本)"}function l(){return n[C.value]||C.value}function p(M){const U=V.value.indexOf(M);U>=0?V.value.splice(U,1):V.value.push(M)}function X(M){if(!M||!M.raw_json)return{};if(O[M.stock_code+M.session+M.trade_date])return O[M.stock_code+M.session+M.trade_date];let U={};try{U=JSON.parse(M.raw_json)||{}}catch{U={}}return O[M.stock_code+M.session+M.trade_date]=U,U}async function P(){try{const M=await o("/api/focus/latest"),U=M&&M.success&&M.data;U&&U.date&&(L.value=U,E.value=U.date,U.session&&(C.value=U.session))}catch(M){console.warn("[focus] 最近一次评估解析失败:",M)}}async function b(){h.value=!0;try{const M=await o("/api/focus/results?date="+E.value+"&session="+C.value);q.value=M&&M.success&&M.data||{rows:[],actions:{},total:0,groups:{}},v((q.value.rows||[]).map(function(U){return U.stock_code}))}catch(M){console.warn("[focus] 结果加载失败:",M),q.value={rows:[],actions:{},total:0,groups:{}}}finally{h.value=!1}}async function v(M){const U=K.value||{},ie=(M||[]).filter(function(Y){return Y&&!U[Y]});if(!ie.length)return;const fe=++A,Se=ie.map(function(Y){return o("/api/focus/stock/"+encodeURIComponent(Y)+"/pool?date="+E.value).then(function(ce){ce&&ce.success&&ce.data?U[Y]=ce.data:U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Se)}catch{}fe===A&&(K.value=Object.assign({},U))}function k(M){const U=w&&w.showStockDetail;if(typeof U=="function"){U(M);return}const fe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;fe&&fe.info("请从其他页面打开股票详情: "+M)}async function c(){try{const M=await o("/api/focus/history?date="+E.value);F.value=M&&M.success&&M.data||{sessions:{},total:0}}catch(M){console.warn("[focus] 历史加载失败:",M),F.value={sessions:{},total:0}}}async function N(){d.value=!0;try{const M=await o("/api/ai/track");M&&M.success&&M.data?(D.value=M.data,i.value=(M.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):D.value=null}catch(M){console.warn("[focus] 效果块加载失败:",M),D.value=null}finally{d.value=!1}}async function oe(){const M=(W.value||"").trim();if(M){S.value=null;try{const U=await o("/api/focus/stock/"+encodeURIComponent(M));S.value=U&&U.success&&U.data&&U.data.rows||[]}catch(U){console.warn("[focus] 单股历史加载失败:",U),S.value=[]}}}async function J(){await b(),await c(),await N()}return g(async function(){await P(),await J()}),{curDate:E,session:C,results:q,history:F,track:D,trackLoading:d,trackNote:i,detailSplitEnabled:w.detailSplitEnabled,stockDetail:w.stockDetail,loading:h,expanded:V,stockCode:W,stockHistory:S,SESSIONS:r,ACTION_ORDER:u,TRACK_WINDOWS:f,ACTION_DOT:m,TIER_DOT:T,SESSION_LABELS:n,displayGroups:H,latestNote:$,baseNote:Z,sessionLabel:l,fmtScore:le,tagType:R,rateTagType:s,fmtRate:y,toggle:p,detailOf:X,loadResults:b,loadHistory:c,loadTrack:N,loadStockHistory:oe,loadAll:J,poolStatus:K,openStockDetail:k,actionPct:te}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:g}=Vue,{currentView:e,statusFilter:u,dashboardData:m,loadHealthMetrics:T,getLoadDashboardData:r,getLastRefreshTime:n,getFetchPoolSignals:f}=a,o=t(!1),x=t(""),w=new Map,E=t([]),C=t(""),q=t(""),F=t([]),D=t(""),d=window.__quantModules.core||{},i=typeof d.createTtlCache=="function"?d.createTtlCache(15e3):null;let h=0;function V(){const $=Date.now();$-h<5e3||(h=$,ElementPlus.ElMessage.success("有新数据，已更新"))}function W($,Z,le,te){!i||!Z||typeof d.silentRefresh!="function"||d.silentRefresh({cache:i,key:Z,fetchFn:async()=>{const R=await fetch($);if(!R.ok)throw new Error("HTTP "+R.status);const s=await R.json();return le?le(s):s},ttl:i.defaultTtl,apply:te,onChanged:V,onError:()=>{}})}const S=new Set;async function O(){var $;try{const le=await(await fetch("/api/dates")).json();E.value=(($=le.data)==null?void 0:$.dates)||le.dates||[],E.value.length>0&&(C.value=E.value[E.value.length-1]),q.value=new Date().toLocaleTimeString()}catch(Z){console.error(Z)}}async function K(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),q.value="刷新中...",w.clear(),await O(),await L(),q.value=new Date().toLocaleTimeString()}catch($){console.error("数据刷新失败",$)}}function A(){if(!C.value)return;const Z="/api/view/"+(e.value||"day")+"/"+C.value+"?status="+(u.value||"all")+"&format=csv";window.open(Z,"_blank")}async function L(){if(!C.value)return;const $=`${e.value}_${C.value}`;if(S.has($))return;S.add($);const Z=`/api/view/${e.value}/${C.value}?status=all`,le=i&&typeof d.makeCacheKey=="function"?d.makeCacheKey("GET",`/api/view/${e.value}/${C.value}`,{status:"all"}):null,te=(y,l)=>{F.value=y,D.value=l||"",w.set($,{stocks:y,note:l||""})},R=y=>{te(y&&y.stocks||[],y&&y.note||"")};if(w.has($)){R(w.get($)),W(Z,le,y=>y,R),S.delete($);return}const s=le&&i?i.get(le):void 0;if(s!==void 0){R(s),W(Z,le,y=>y,R),S.delete($);return}o.value=!0,x.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const l=await(await fetch(Z)).json(),p=l.stocks||[];te(p,l.note||""),i&&le&&i.set(le,{stocks:p,note:l.note||""})}catch{try{const p=await(await fetch(`/api/calendar/${C.value}/consensus`)).json();F.value=(p.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}f(),S.delete($)}async function H(){const $=i&&typeof d.makeCacheKey=="function"?d.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const Z=i.get($);if(Z!==void 0){m.value=Z,T().catch(()=>{}),W("/api/dashboard",$,le=>le.data||le,le=>{m.value=le,n().value=Date.now()});return}}await r()(),T().catch(()=>{}),i&&i.set($,m.value)}return{loading:o,loadingView:x,viewCache:w,dates:E,selectedDate:C,lastLoadTime:q,consensus:F,viewNote:D,loadDates:O,refreshCalendarData:K,exportCSV:A,loadConsensusData:L,loadDashboardCached:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:g,loadIndexKline:e,rememberDialogTrigger:u,menus:m,currentPage:T,currentSubPage:r,stockDetail:n,selectedDate:f}=a,o=ref({indices:[],market_sentiment:null});let x=null;const w=ref(!1),E=ref(null),C=ref(null),q=ref(!1);function F(){window.__quantModules.charts.disposeKline("stockKlineChart")}const D=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{D.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const d=ref(!1),i=ref(null),h=ref(!1),V=ref(0),W=ref(0);async function S(){try{const l=await(await fetch("/api/market/overview")).json();o.value=l,O(l)}catch(y){console.error("获取市场行情失败:",y)}}function O(y){x&&clearInterval(x),y&&y.in_trading_hours&&(x=setInterval(S,6e5))}function K(y){u(),E.value=y,C.value=null,g.value="daily",A(y.code),window.__quantModules.charts.disposeKline("indexKlineChart"),w.value=!0,setTimeout(async()=>{await e("daily")},500)}async function A(y){try{const p=await(await fetch("/api/ai/index-eval/"+y)).json();p.success&&p.data&&(C.value=p.data)}catch(l){console.warn("[getIndexAiScore] cache check failed:",l)}}async function L(){if(E.value){q.value=!0;try{const l=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:E.value.code,index_name:E.value.name,current_price:E.value.close,pct_chg:E.value.pct_chg})})).json();l.success?C.value=l.data:ElementPlus.ElMessage.error(l.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{q.value=!1}}}function H(y){window.__quantModules.charts.zoomKline("stockKlineChart",y)}function $(){h.value=!0,setTimeout(()=>{h.value=!1},600)}function Z(y,l){if(y===l){$();return}const p=800,X=performance.now(),P=l-y;d.value=!0,i.value={value:P,dir:P>0?"up":"down"},h.value=!0,setTimeout(()=>{h.value=!1},600),setTimeout(()=>{i.value=null},2300);function b(v){const k=v-X,c=Math.min(k/p,1),N=1-Math.pow(1-c,3),oe=Math.round(y+P*N);n.value&&n.value.score_data&&(n.value.score_data.score=oe),c<1?requestAnimationFrame(b):(n.value&&n.value.score_data&&(n.value.score_data.score=l),d.value=!1)}requestAnimationFrame(b)}function le(){if(!n.value||!n.value.score_data)return;const y=n.value.score_data.score;if(y==null)return;const l=600,p=performance.now();h.value=!0,setTimeout(()=>{h.value=!1},600);function X(P){const b=Math.min((P-p)/l,1),v=1-Math.pow(1-b,3),k=Math.round(y*v);n.value&&n.value.score_data&&(n.value.score_data.score=k),b<1?requestAnimationFrame(X):n.value&&n.value.score_data&&(n.value.score_data.score=y)}requestAnimationFrame(X)}async function te(){var p;if(!n.value||!n.value.stock)return;const y=n.value.stock,l=(p=n.value.score_data)==null?void 0:p.score;try{const X=new Date().toISOString().split("T")[0],P=f.value||X,v=await(await fetch(`/api/calendar/stock/${encodeURIComponent(y)}/score?date=${P}`)).json();if(v.success&&v.score_data){const k=v.score_data.score;n.value&&(n.value.score_data=v.score_data),l!=null&&k!==l?Z(l,k):$()}else $()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function R(y){D.value&&(V.value=y.touches[0].clientX,W.value=y.touches[0].clientY)}function s(y){if(!D.value)return;const l=V.value-y.changedTouches[0].clientX,p=W.value-y.changedTouches[0].clientY;if(Math.abs(l)>Math.abs(p)&&Math.abs(l)>80){const X=m.value.map(function(b){return b.key}),P=X.indexOf(T.value);if(l>0&&P<X.length-1){const b=X[P+1],v=window.__quantGoPage;v?v(b,""):(T.value=b,r.value="")}else if(l<0&&P>0){const b=X[P-1],v=window.__quantGoPage;v?v(b,""):(T.value=b,r.value="")}}}return{marketData:o,marketRefreshTimer:x,fetchMarketData:S,indexDetailVisible:w,indexDetail:E,indexAiResult:C,indexAiLoading:q,showIndexDetail:K,loadCachedIndexEval:A,doIndexAiEvaluate:L,disposeStockKline:F,isMobile:D,zoomKlineRange:H,scoreAnimating:d,scoreDelta:i,scorePulse:h,triggerScorePulse:$,animateScoreChange:Z,animateScoreEntrance:le,refreshStockScore:te,touchStartX:V,touchStartY:W,onTouchStart:R,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:g,currentSubPage:e}=a,u=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),m=ref("idle"),T=ref("");async function r(){if(!u.value.webhook_url){T.value="请先输入Webhook地址";return}m.value="testing",T.value="";try{const M=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:u.value.webhook_url})})).json();M.success||M.status==="ok"?(T.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(T.value=M.message||"测试失败",ElementPlus.ElMessage.error(T.value))}catch{T.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}m.value="idle"}const n=Vue.ref(!1);async function f(){n.value=!0;try{const M=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}const o=ref(!1);function x(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const J=document.querySelector('input[placeholder*="输入问题"]');J&&J.focus()})}const w=ref([]),E=ref({});async function C(){try{const M=await(await fetch("/api/ai/recommend-strategies")).json();M.success&&(w.value=M.recommendations||[])}catch(J){console.warn("[loadStrategyRecommendations] failed:",J)}}async function q(){try{const M=await(await fetch("/api/ai/usage-stats")).json();M.success&&(E.value=M)}catch(J){console.warn("loadAiUsage failed:",J)}}const F=ref({}),D=ref([]),d=ref(7);async function i(){try{const M=await(await fetch("/api/system/monitor")).json();M.success&&(F.value=M)}catch(J){console.warn("loadSysMonitor failed:",J)}}const h=ref({});async function V(){try{const M=await(await fetch("/api/system/health-detail")).json();M.success&&(h.value=M)}catch(J){console.warn("loadHealthDetail failed:",J)}}async function W(){try{const M=await(await fetch(`/api/analytics/rank?days=${d.value}`)).json();M.success&&(D.value=M.rank||[])}catch(J){console.warn("loadAnalytics failed:",J)}}const S=ref(!1);async function O(){if(!S.value){S.value=!0;try{const M=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return M&&M.success?M.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${M.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${M.date}）`):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"生成复盘失败"),V(),M}catch(J){ElementPlus.ElMessage.error("生成复盘失败: "+(J.message||""))}finally{S.value=!1}}}const K=ref(null),A=ref(!1);async function L(){try{const M=await(await fetch("/api/ai/fact-check/latest")).json();K.value=M&&M.success&&M.data||null}catch(J){console.warn("loadFactCheck failed:",J)}}async function H(){if(!A.value){A.value=!0;try{const M=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return M&&M.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${M.data.pass_rate!=null?M.data.pass_rate+"%":"--"} (${M.data.checked} 个数字)`),L()):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"事实护栏抽查失败"),M}catch(J){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(J.message||""))}finally{A.value=!1}}}const $=ref([]),Z=ref(!1);async function le(){try{const M=await(await fetch("/api/backup/list")).json();M.success&&($.value=M.backups||[])}catch(J){console.error("加载备份列表失败",J)}}async function te(){Z.value=!0;try{const M=await(await fetch("/api/backup/create",{method:"POST"})).json();M.success?(ElementPlus.ElMessage.success(M.message||"备份成功"),le()):ElementPlus.ElMessage.error(M.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{Z.value=!1}}const R=ref(""),s=ref("");async function y(J){R.value=J,s.value="";try{const M=window.__quantModules&&window.__quantModules.core||{},U=typeof M.authHeaders=="function"?M.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(J),{headers:U});if(!ie.ok)throw new Error("HTTP "+ie.status);const fe=await ie.blob(),Se=URL.createObjectURL(fe),Y=document.createElement("a");Y.href=Se;const ce=new Date().toISOString().slice(0,10);Y.download="report_"+ce+"."+J,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Se),s.value="报表已导出 ("+J.toUpperCase()+")"}catch(M){s.value="报表导出失败: "+(M.message||M)}finally{R.value=""}}async function l(J){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${J} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(M){console.warn("[restoreBackup] confirm cancelled:",M);return}try{const U=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(U.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const p=ref(!1),X=ref(0),P=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,p.value=!0},800)}function v(){p.value=!1,localStorage.setItem("quant_tour_done","1")}function k(){p.value=!1,localStorage.setItem("quant_tour_done","1")}const c=ref(""),N=ref(!1);async function oe(){if(!c.value||!c.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}N.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c.value.trim(),page:g.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(c.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{N.value=!1}}return{feishuConfig:u,feishuTestStatus:m,feishuTestMessage:T,feishuSaving:n,testFeishuWebhook:r,saveFeishuConfig:f,aiFabHidden:o,openAiFab:x,strategyRecommendations:w,aiUsage:E,loadStrategyRecommendations:C,loadAiUsage:q,sysMonitor:F,analyticsRank:D,analyticsDays:d,loadSysMonitor:i,loadAnalytics:W,healthDetail:h,loadHealthDetail:V,reviewTriggering:S,triggerMarketReview:O,factCheck:K,factCheckRunning:A,loadFactCheck:L,triggerFactCheck:H,backups:$,backupCreating:Z,loadBackups:le,createBackup:te,restoreBackup:l,reportExporting:R,reportExportMsg:s,exportReport:y,tourVisible:p,tourStep:X,tourSteps:P,maybeShowTour:b,skipTour:v,finishTour:k,feedbackText:c,feedbackSubmitting:N,submitFeedback:oe}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:g,selectedDate:e,dates:u,loadConsensusData:m,hapticFeedback:T}=a,r=t(()=>({day:"天",week:"周",month:"月",year:"年"})[g.value]||"天"),n=t(()=>({day:"date",week:"week",month:"month",year:"year"})[g.value]||"date"),f=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[g.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!u.value||u.value.length===0?!1:e.value>u.value[0]),x=t(()=>!e.value||!u.value||u.value.length===0?!1:e.value<u.value[u.value.length-1]);function w(F){T("light"),g.value=F;let D=e.value||u.value[u.value.length-1];if(F==="year"){const d=D.substring(0,4),i=u.value.find(h=>h.startsWith(d));e.value=i||D}else if(F==="month"){const d=D.substring(0,7),i=u.value.find(h=>h.startsWith(d));e.value=i||D}setTimeout(m,50)}function E(F){T("light");const D=e.value,d=u.value,i=d.indexOf(D);if(i<0)return;let h=1;g.value==="week"&&(h=5),g.value==="month"&&(h=22),g.value==="year"&&(h=250);const V=i+F*h;if(V>=0&&V<d.length){const W=d[V];if(g.value==="month"){const S=W.substring(0,7),O=d.find(K=>K.startsWith(S));e.value=O||W}else if(g.value==="year"){const S=W.substring(0,4),O=d.find(K=>K.startsWith(S));e.value=O||W}else e.value=W;m()}}function C(F){if(!u.value||u.value.length===0)return!1;const D=F.getFullYear(),d=String(F.getMonth()+1).padStart(2,"0"),i=String(F.getDate()).padStart(2,"0"),h=`${D}-${d}-${i}`;return!u.value.includes(h)}function q(F){F&&F.length>10&&(e.value=F.substring(0,10)),m()}return{viewUnit:r,datePickerType:n,dateFormat:f,canNavPrev:o,canNavNext:x,switchView:w,navigateDate:E,disabledDate:C,onDateChange:q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:g,navigateTo:e,currentPage:u,currentView:m,navigateDate:T,switchView:r,getLoadDashboardData:n,refreshCalendarData:f,getLoadAiHistory:o,exportCSV:x,getShowBatchEvaluate:w,openAiFab:E,toggleSidebar:C,showStockDetail:q}=a,F=ref("");async function D(A,L){if(!A||A.trim().length<1){L([]);return}const H=window.QuantCommandPanel;let $=[];H&&t.value&&($=H.buildSearchSuggestions(A,t.value,g,H.DEFAULT_COMMANDS));const Z=window.__quantModules&&window.__quantModules.pinyin;Z&&Z.searchCoreStocks(A).forEach(function(le){$.push({value:le.code+" "+le.name,type:"stock",code:le.code,name:le.name,label:le.name,subLabel:le.code,icon:"trending-up",iconName:"trending-up"})});try{const te=await(await fetch("/api/search?q="+encodeURIComponent(A))).json();if(te.success&&te.results){const R=te.results.map(function(y){return{value:y.code+" "+y.name,type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up",iconName:"trending-up"}}),s=[];(te.groups||[]).forEach(function(y){(y.items||[]).forEach(function(l){l.type==="sector"?s.push({value:l.name+" · "+l.subLabel,type:"sector",name:l.name,label:l.name,subLabel:"板块",icon:"layers",iconName:"layers"}):l.type==="strategy"?s.push({value:l.name+" · 策略",type:"strategy",id:l.id,name:l.name,label:l.name,subLabel:"策略",icon:"target",iconName:"target"}):l.type==="menu"&&s.push({value:l.name,type:"menu",menuKey:l.menuKey,name:l.name,label:l.name,subLabel:l.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),L($.concat(R,s))}else L($)}catch(le){console.warn("[searchStocks] fetch failed:",le),L($)}}function d(A){return A?A.type==="menu"?{action:"menu",menuKey:A.menuKey,subPage:A.subPage}:A.type==="command"?{action:"command",key:A.key}:A.type==="sector"?{action:"sector",name:A.name}:A.type==="strategy"?{action:"strategy",id:A.id,name:A.name}:A.type==="stock"||A.code&&A.name?{action:"stock",code:A.code,name:A.name}:null:null}function i(A){F.value="";const L=window.QuantCommandPanel,H=L?L.dispatchSearchSelection(A):d(A);if(H){if(H.action==="menu"){e(H.menuKey,H.subPage);return}if(H.action==="command"){h(H.key);return}if(H.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(H.name);return}if(H.action==="strategy"){e("research","overview");return}H.action==="stock"&&typeof q=="function"&&q(H.code,H.name)}}function h(A){if(A==="refresh"){const L=u.value;L==="strategies"?n().catch(function(){}):L==="calendar"?f().catch(function(){}):L==="ai"&&o().catch(function(){})}else A==="export"?x():A==="batch"?w().value=!0:A==="ai"?E():A==="sidebar"?C():A==="open-eval-history"?e("ai","history"):A==="open-shortterm"&&e("shortterm","overview")}const V=ref(!1),W=ref(!1);function S(A){if(!A)return!1;const L=A.tagName;return L==="INPUT"||L==="TEXTAREA"||L==="SELECT"||A.isContentEditable}function O(A){if(S(A.target))return;const L=A.key.toLowerCase();if(A.ctrlKey&&L==="k"){A.preventDefault(),W.value=!0;return}if(A.ctrlKey&&L==="/"){A.preventDefault(),V.value=!V.value;return}if(A.ctrlKey&&L==="h"){A.preventDefault(),e("ai","history");return}if(A.ctrlKey&&A.shiftKey&&L==="s"){A.preventDefault(),e("shortterm","overview");return}if(!(A.ctrlKey||A.metaKey||A.altKey)){if(L>="1"&&L<="5"){const H=parseInt(L)-1,$=t.value[H];$&&e($.key,$.subPages[0]||"");return}if(L==="r"&&K(),(L==="arrowleft"||L==="arrowright"||L==="arrowup"||L==="arrowdown")&&u.value==="calendar")if(A.preventDefault(),L==="arrowleft"||L==="arrowright")T(L==="arrowleft"?-1:1);else{const H=["day","week","month","year"].indexOf(m.value),$=["day","week","month","year"][(H+(L==="arrowup"?-1:1)+4)%4];r($)}}}function K(){const A=u.value;A==="strategies"?n().catch(()=>{}):A==="calendar"?f().catch(()=>{}):A==="ai"&&o().catch(()=>{})}return{searchQuery:F,searchStocks:D,onSearchSelect:i,runGlobalCommand:h,shortcutHelpVisible:V,commandPaletteVisible:W,isTypingTarget:S,handleGlobalKeydown:O,refreshCurrentPage:K}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:g,loadDates:e,loadDashboardData:u,loadDashboardCached:m,loadHealthMetrics:T,loadConsensusData:r,applyTheme:n,maybeShowTour:f,loadAiVendors:o,loadGroupConfig:x,groupsConfig:w}=a,E=function(te){const R=window.__quantModules&&window.__quantModules.themes;return R&&R.applyLegacyTheme?R.applyLegacyTheme(te):n(te)},C="qc_login_username";let q="";try{q=localStorage.getItem(C)||""}catch{q=""}const F=ref({username:q,password:""}),D=ref(!1),d=ref(!1),i=ref(!1),h=ref({oldPassword:"",newPassword:"",confirmPassword:""}),V=ref(!1),W=ref(!1),S=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),O=ref(1);async function K(){try{(await(await fetch("/api/setup/status")).json()).needed&&(S.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},O.value=1,W.value=!0)}catch(te){console.warn("[checkSetupWizard] failed:",te)}}async function A(){try{const te={new_password:S.value.newPassword,ai_key:S.value.aiKey,ai_provider:S.value.aiProvider,ai_model:S.value.aiModel,ai_endpoint:S.value.aiEndpoint,tushare_token:S.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te)})).json();s.success?(W.value=!1,ElementPlus.ElMessage.success("初始化完成"),await g()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function L(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(W.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function H(){if(!F.value.username||!F.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}D.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();if(R.success){t.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),E(R.user.theme||"gold");try{localStorage.setItem(C,F.value.username||"")}catch{}typeof x=="function"&&await x().catch(function(){}),typeof o=="function"&&o(),await g(),await e(),await Promise.all([m(),r(),T().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),R.data&&R.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),f(),R.user.role==="admin"&&setTimeout(K,500)}else ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{D.value=!1}}async function $(){d.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();R.success?(t.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),E(R.user.theme||"gold"),typeof x=="function"&&await x().catch(function(){}),await g(),await e(),await u(),T().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{d.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{w&&(w.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function le(){if(!h.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!h.value.newPassword||h.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(h.value.newPassword!==h.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}V.value=!0;try{const te=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:h.value.oldPassword,new_password:h.value.newPassword})}),R=await te.json();te.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),i.value=!1,h.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(R.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{V.value=!1}}return{loginForm:F,logining:D,guestLogining:d,showChangePassword:i,changePasswordForm:h,changingPassword:V,showSetupWizard:W,setupForm:S,setupStep:O,checkSetupWizard:K,completeSetupWizard:A,resetSetupWizard:L,handleLogin:H,handleGuestLogin:$,handleLogout:Z,doChangePassword:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let g=null;const{strategyFilter:e,currentView:u,statusFilter:m,currentPage:T,currentSubPage:r,menus:n,currentUser:f,strategyFilterCounts:o,lazyTick:x,dates:w,selectedDate:E,consensus:C,loadConsensusData:q,fetchMerrillClock:F,fetchMarketData:D,loadWatchlist:d,loadAiHistory:i,preloadWatchlistKline:h,loadChatHistory:V,loadSystemStatus:W,checkTushareConnection:S,loadSysMonitor:O,loadAnalytics:K,loadHealthDetail:A,loadHealthMetrics:L,loadAiUsage:H,loadFactCheck:$,loadAutoEvaluateConfig:Z,loadDatasourceConfig:le,loadFeishuConfig:te,loadAiConfig:R,loadAiVendors:s,loadRateLimit:y,loadDataRefreshConfig:l,loadBackups:p,loadAllGroups:X,loadUsers:P,stockDetailTab:b,stockDetailVisible:v,stockKlineLoaded:k,loadStockKline:c,currentKlinePeriod:N,showMerrillDetail:oe,indexDetailVisible:J,restoreDialogFocus:M}=a;t(e,U=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(U.selected)),localStorage.setItem("quant_strategy_filter_mode",U.mode)},{deep:!0}),t([u,m],(U,ie)=>{U[0]!==ie[0]&&q()}),t([T,r],([U,ie])=>{var fe;try{const Y=!(U==="calendar"&&ie==="calendar")&&ie||"",ce=Y?"#"+U+"/"+Y:"#"+U;window.location.hash!==ce&&(window.location.hash=ce)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&n.value.find(Se=>Se.key===U)){const Se=n.value.find(Y=>Y.key===U);Se&&Se.subPages.length>0&&(r.value=Se.subPages[0])}if(U==="shortterm"&&ie==="market-review"){const Se=window.__lazyLoaders&&window.__lazyLoaders.research;Se&&Se().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Y){Y&&Y.name&&!Y.__quantRegistered&&(window.__quantApp.component(Y.name,Y),Y.__quantRegistered=!0)}),x&&x.value++}).catch(function(Y){console.warn("[lazy] research 组件补加载失败",Y)})}U==="calendar"&&ie==="calendar"&&(!C.value||C.value.length===0)&&(w.value.length>0&&!E.value&&(E.value=w.value[w.value.length-1]||""),setTimeout(q,50)),U==="calendar"&&ie==="pool"&&(!C.value||C.value.length===0)&&(w.value.length>0&&!E.value&&(E.value=w.value[w.value.length-1]||""),setTimeout(q,50)),U==="strategies"&&(ie==="merrill"&&F(),ie==="market"&&D(),ie==="consensus"&&(!C.value||C.value.length===0)&&setTimeout(q,50)),U==="ai"&&(ie==="watchlist"&&(d(),i(),setTimeout(h,500)),ie==="history"&&i(),ie==="overview"&&(i(),d()),ie==="chat_history"&&V()),(U==="system"||U==="ops")&&((fe=f.value)==null?void 0:fe.role)==="admin"&&(ie==="status"&&(W(),S()),ie==="health"&&(A(),L()),ie==="schedule"&&A(),ie==="guard"&&$(),ie==="usage"&&(O(),K(),A(),L(),H(),$()),ie==="autoeval"&&(Z(),s()),ie==="datasource"&&le(),ie==="feature"&&(te(),R(),y(),l(),p()),ie==="user"&&(X(),P())),(U==="system"||U==="ops")&&ie==="usage"?g||(g=setInterval(()=>{O(),K(),A(),L(),H()},3e4)):g&&(clearInterval(g),g=null)}),t(b,(U,ie)=>{U==="kline"&&ie&&ie!=="kline"&&v.value&&(k.value=!1,setTimeout(async()=>{!await c(N.value)&&v.value&&b.value==="kline"&&setTimeout(()=>c(N.value),800)},50))}),t(oe,U=>{U||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([v,J],([U,ie])=>{!U&&!ie&&M()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:g,menus:e,currentPage:u,currentSubPage:m,currentView:T,currentKlinePeriod:r,selectedDate:n,dates:f,loadDates:o,loadConsensusData:x,loadDashboardCached:w,appVersion:E,themes:C,fetchMarketData:q,fetchMerrillStages:F,fetchMerrillClock:D,loadAiConfig:d,loadAiVendors:i,loadAiCatalog:h,currentUser:V,loadUserConfig:W,loadAutoEvaluateConfig:S,loadGroupConfig:O,loadUsers:K,loadAllGroups:A,loadAiHistory:L}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function H(P,b){const v={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(P==="calendar"&&v[b])return u.value="calendar",m.value="calendar",v[b]&&(T.value=v[b]),!0;if(P==="research"&&(b==="strategy-write"||b==="custom-write")){u.value="research",m.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",b==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const P=window.location.hash||"";if(!P||P==="#")return;const b=P.replace(/^#\/?/,"").split("/"),v=b[0],k=b[1]||"",c=e.value.find(function(N){return N.key===v});if(c&&!H(v,k)){if(!k)u.value=v,m.value=c.subPages[0]||"";else if(c.subPages.indexOf(k)>=0)u.value=v,m.value=k;else return;window.__lazyLoaders&&window.__lazyLoaders[v]&&window.__quantGoPage&&window.__quantGoPage(v,m.value).catch(function(){})}});const $=(P,b=3e3,v="")=>{const k=new Promise((c,N)=>setTimeout(()=>N(new Error("timeout")),b));return Promise.race([P,k]).catch(c=>{console.warn(`[init] ${v||"task"} failed:`,c.message)})},Z=localStorage.getItem("quant_theme"),le=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const P=window.__quantModules.themes;let b=le.theme||"system",v=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;const k=typeof P.migrateLegacyTheme=="function"?P.migrateLegacyTheme():null;v==null&&k&&(b=k.mode,v=k.hue),v==null&&(v=45),g(b,v)}else Z&&g(Z);await O().catch(function(){}),function(){var P=window.location.hash||"",b=!1;if(P&&P!=="#"){var v=P.replace(/^#\/?/,"").split("/"),k=v[0],c=v[1]||"",N=e.value.find(function(ie){return ie.key===k});N&&(H(k,c)||(u.value=k,c&&N.subPages.indexOf(c)>=0?m.value=c:c||(m.value=N.subPages[0]||"")),b=!0)}if(!b){var oe=localStorage.getItem("quant_last_page");oe&&e.value.some(function(ie){return ie.key===oe})?u.value=oe:le.default_view&&e.value.some(function(ie){return ie.key===le.default_view})&&(u.value=le.default_view);var J=localStorage.getItem("quant_last_subpage");J&&(m.value=J)}var M=localStorage.getItem("quant_last_date");M&&(n.value=M);var U=localStorage.getItem("quant_last_view");U&&(T.value=U),window.__lazyLoaders&&window.__lazyLoaders[u.value]&&window.__quantGoPage&&window.__quantGoPage(u.value,m.value).catch(function(){})}(),fetch("/api/health").then(P=>P.json()).then(P=>{P.version&&(E.value=P.version)}).catch(()=>{});const te=localStorage.getItem("quant_user"),R=localStorage.getItem("quant_token"),s=!!(te&&R),y=Promise.all([Promise.resolve().then(()=>{C.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),$(q(),3e3,"marketData"),$(F(),2e3,"merrillStages")]).then(()=>{$(D(),3e3,"merrillClock")});if(d(),h(),s&&V.value&&i(),!s||!V.value){await y;return}let l=!0;try{l=(await fetch("/api/users/me")).ok}catch{l=!1}if(!l){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),V.value=null;return}if(V.value){const P=V.value.theme||"",b=window.__quantModules&&window.__quantModules.themes;let v=le.theme||"system",k=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;if(k==null&&b&&typeof b.migrateLegacyTheme=="function"){const c=b.migrateLegacyTheme();if(c)v=c.mode,k=c.hue;else if(P&&b.LEGACY_MAP&&b.LEGACY_MAP[P]){const N=b.LEGACY_MAP[P];v=N[0],k=N[1]}}k==null&&(k=45),g(v,k)}if(window.__quantModules&&window.__quantModules.preferences){const b=await window.__quantModules.preferences.loadPreferences();var p=localStorage.getItem("quant_last_page");!p&&b.default_view&&e.value.some(function(v){return v.key===b.default_view})&&(u.value=b.default_view),b.theme&&g(b.theme,b.theme_hue!=null&&b.theme_hue!==""?b.theme_hue:null),r&&(b.chart_period==="weekly"||b.chart_period==="monthly")&&(r.value=b.chart_period)}await Promise.all([$(W(),2e3,"userConfig"),$(o(),2e3,"dates")]),S().catch(()=>{}),O().catch(()=>{});const X=u.value==="strategies"?$(w(),2e3,"dashboard"):$(x(),2e3,"consensus");await Promise.all([X,$(K(),2e3,"users"),$(L(),2e3,"aiHistory")]),A().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:g,onUnmounted:e,watch:u,nextTick:m}=Vue,T=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},n=r.SUPPORTED_LOCALES||["zh-CN","en"],f=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(n.indexOf(f)!==-1?f:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const x=typeof r.t=="function"?r.t:function(j){return String(j)};function w(j){n.indexOf(j)!==-1&&(o.value=j,typeof r.setLocale=="function"&&r.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function E(j,de){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,de):j==null?"":String(j)}function C(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let q=null;function F(){document.activeElement&&document.activeElement!==document.body&&(q=document.activeElement)}function D(){if(q&&q.isConnected)try{q.focus()}catch{}q=null}const d=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{d.value=!0}),window.addEventListener("offline",()=>{d.value=!1})),window.addEventListener("beforeunload",j=>{if(T.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function i(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const h=useMerrillClock(),{merrillData:V,merrillStagesConfig:W,showMerrillDetail:S,merrillDetailData:O,merrillClockConfig:K,merrillClockLastUpdated:A,merrillReevalResult:L,merrillReevalLoading:H,stages:$,indicatorList:Z,dimensionScoreList:le,detailDimensionScoreList:te,confidenceColor:R,timelineStages:s,clockPosition:y,merrillProgressStyle:l,FULL_CYCLE_MONTHS:p,getStageAngle:X,getCycleProgress:P,getCurrentStageMonths:b,getStageTotalMonths:v,isStageCompleted:k,getCharLabel:c,getAssetName:N,getRankColor:oe,fetchMerrillStages:J,fetchMerrillClock:M,loadMerrillTimeline:U,showTimelineStage:ie,merrillTimeline:fe,timelineLoading:Se,showStageDetail:Y,saveMerrillClockConfig:ce,doMerrillReevaluate:Ae,startAutoRefresh:se,stopAutoRefresh:ke,merrillSnapshots:Te,merrillSnapshotsTotal:ge,fetchMerrillSnapshots:ye}=h,Ee=a(localStorage.getItem("sidebar_collapsed")==="1");function re(){Ee.value=!Ee.value,localStorage.setItem("sidebar_collapsed",Ee.value?"1":"0")}const ae=a(null),me=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","glossary","notification"],guestSubPages:["config","about"]}],Ne=t(()=>{var Je,Bt,Yt;const j=((Je=it.value)==null?void 0:Je.role)||"guest",de=((Bt=it.value)==null?void 0:Bt.group)||j,we=((Yt=ae.value)==null?void 0:Yt[de])||null;return me.map(Ot=>{if(we&&we.visible_menus&&Ot.key in we.visible_menus&&!we.visible_menus[Ot.key])return null;const ka={...Ot,name:x("nav."+Ot.key)||Ot.name};return we!=null&&we.visible_sub_pages&&(ka.subPages=Ot.subPages.filter(ds=>{const Dd=Ot.key+"."+ds;return we.visible_sub_pages[Dd]!==!1})),Ot.key==="system"&&j==="guest"&&Ot.guestSubPages&&(ka.subPages=Ot.guestSubPages),ka}).filter(Boolean)});async function He(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups/my");if(de.ok){const we=await de.json();ae.value={[we.group_id]:we.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const Ke=a("strategies"),qt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},pt=a(qt.navMode);function Tt(j){const de=window.__quantModules&&window.__quantModules.navModeCore;pt.value=de?de.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",de&&de.writePrefs({navMode:pt.value})}const xe=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function qe(j,de=""){i("light"),Ke.value=j,ee.value=de,localStorage.setItem("quant_last_subpage",de)}function je(){const j=Ne.value;if(!j||!j.length)return;if(!j.some(function(Ve){return Ve.key===Ke.value})){const Ve=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ve.key),Ke.value=Ve.key,ee.value=Ve.subPages&&Ve.subPages[0]||"";return}const we=j.find(function(Ve){return Ve.key===Ke.value});we&&we.subPages&&we.subPages.length&&!we.subPages.includes(ee.value)&&(ee.value=we.subPages[0])}const Oe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Xe=a("multifactor"),Qe=a(null),Ye=a(1e5),lt=a(!1),yt=a(null);let Et=null,Ft=null;async function aa(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const de={initial_capital:Ye.value||1e5};Qe.value&&Qe.value.length===2&&(de.start_date=Qe.value[0],de.end_date=Qe.value[1]),lt.value=!0,yt.value=null;try{const we=await fetch("/api/strategies/"+Xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)});if(!we.ok){const Bt=await we.json().catch(()=>({}));throw new Error(Bt.detail||"回测失败")}const Ve=await we.json(),Je=Ve.result||{};if(!Je.success)throw new Error(Je.message||"回测失败");Ve.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),yt.value={total_return_pct:((Je.total_return??0)*100).toFixed(2),annual_return_pct:((Je.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Je.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Je.sharpe_ratio??0).toFixed(2),win_rate:((Je.win_rate??0)*100).toFixed(2),out_sample:Je.outsample_total_return===void 0?"":((Je.outsample_total_return??0)*100).toFixed(2),overfit_warning:Je.overfit_warning||!1,message:Je.message||""},I(Je.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(we){ElementPlus.ElMessage.error(we.message||"回测失败")}finally{lt.value=!1}}function I(j){const de=document.getElementById("backtestEquityChart");if(!de||!j||j.length===0)return;const we=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ve=()=>{Ft=j,Et&&(Et.dispose(),Et=null),Et=echarts.init(de),Et.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Je=j.map(Yt=>Yt.date||Yt[0]),Bt=j.map(Yt=>Yt.value??Yt[1]);Et.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Je,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Bt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};we?we().then(Ve).catch(()=>{}):Ve()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Ft&&I(Ft)}));const ee=a("overview");(function(){const j=window.QuantSessionRestore;if(j){const de=j.restore();de&&de.page&&(Ke.value=de.page,de.sub&&(ee.value=de.sub))}})(),Vue.watch(ee,function(){dn()});const Ce=t(()=>{const j=me.find(de=>de.key===Ke.value);return j?j.name:Ke.value}),Ie=a(0),We=t(()=>{Ie.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},de=ee.value;return Ke.value==="shortterm"&&de==="market-review"?"qc-research-page":Ke.value==="ops"&&de==="execution"?"qc-strategies-page":j[Ke.value]||""}),bt=a(!1),$e=a({}),Ge=a([]);a("");const _t=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),ct=a("day"),ft=a("all"),it=a(null);u(Ne,function(){je()}),u([Ke,ee],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),de=localStorage.getItem("quant_token");if(j&&de)try{it.value=JSON.parse(j)}catch{}}();const Ht=a(!1),Q=a("kline"),he=a(null),et=a(!1),Ue=a(localStorage.getItem("qc_detail_mode")||"split"),wt=a(window.innerWidth<=1024),At=t(()=>Ue.value==="split"&&!wt.value);function It(j){Ue.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{wt.value=window.innerWidth<=1024});const vt=35,Pt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Kt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Pt.value?Pt.value+"px":vt+"%")}Kt();function Jt(j){const de=Math.max(1,Math.min(j,2e3));Pt.value=de,Kt();try{localStorage.setItem("qc_split_width",String(de))}catch{}}function xt(j){if(Pt.value)return Pt.value;const de=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(de*vt/100))}let gt=null;function Zt(j,de){if(!de||wt.value)return;j.preventDefault();const we=de.getBoundingClientRect().width;gt={startX:j.clientX,startW:xt(de),minW:Math.max(200,Math.floor(we*vt/100)),maxW:Math.floor(we/2)},document.body.classList.add("qc-split-resizing")}function Dt(j){if(!gt)return;const de=j.clientX-gt.startX;let we=gt.startW+de;we=Math.max(gt.minW,Math.min(we,gt.maxW)),Pt.value=we,Kt();try{localStorage.setItem("qc_split_width",String(we))}catch{}}function ra(){gt&&(gt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Dt),document.addEventListener("mouseup",ra));function Qt(j){const de=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!de)return;const we=de.closest("[data-split-root]");Zt(j,we)}typeof document<"u"&&document.addEventListener("mousedown",Qt,!0);const sa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于",glossary:"术语表"},dt=a({});function $t(j,de){return sa[de]||de}function ca(j){const de=me.find(Ve=>Ve.key===j);if(!de||!de.subPages||!de.subPages.length)return;if(!(dt.value[j]||[]).length){const Ve=de.subPages[0];dt.value=Object.assign({},dt.value,{[j]:[{subPage:Ve,title:$t(j,Ve)}]})}}function ya(j,de){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=$t(j,de);if(we){const Je=we.openTab(dt.value,j,de,Ve);dt.value=Je.groups}else{const Je=dt.value[j]||[];Je.some(Bt=>Bt.subPage===de)||(dt.value=Object.assign({},dt.value,{[j]:Je.concat([{subPage:de,title:Ve}])}))}qe(j,de)}function _a(j,de){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=ee.value;let Je=null;if(we)Je=we.closeTab(dt.value,j,de,Ve),dt.value=Je.groups;else{const Ot=dt.value[j]||[];dt.value=Object.assign({},dt.value,{[j]:Ot.filter(ka=>ka.subPage!==de)})}if(!(dt.value[j]||[]).length){ca(j);const Ot=me.find(ds=>ds.key===j),ka=Ot&&Ot.subPages&&Ot.subPages[0];ka&&qe(j,ka);return}const Yt=Je?Je.nextActive:null;Yt&&qe(j,Yt)}function na(j,de){if(!(dt.value[j]||[]).some(Ve=>Ve.subPage===de)){ya(j,de);return}qe(j,de)}u([Ke,ee],([j,de])=>{ca(j);const we=dt.value[j]||[];de&&!we.some(Ve=>Ve.subPage===de)&&(dt.value=Object.assign({},dt.value,{[j]:we.concat([{subPage:de,title:$t(j,de)}])}))},{immediate:!0});const B=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const de=Ke.value,we=dt.value[de]||[];if(we.length<=1)return;j.preventDefault();const Ve=ee.value,Je=Math.max(0,we.findIndex(Ot=>Ot.subPage===Ve)),Bt=j.shiftKey?(Je-1+we.length)%we.length:(Je+1)%we.length,Yt=we[Bt];Yt&&na(de,Yt.subPage)};window.addEventListener("keydown",B);const _e=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),Fe=a("light"),De=[45,220,0,140,270,320,-1],ut={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},tt=a(45),Lt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,de=j&&j.getPreference&&j.getPreference("theme_hue");de!=null&&de!==""&&(tt.value=parseInt(de,10))})();const Wt=a("comfortable");(function(){const j=window.__quantModules&&window.__quantModules.preferences;j&&j.applyDensity&&(Wt.value=j.applyDensity()||"comfortable")})();function Ut(j){return j<0?"hsl(0, 0%, 46%)":"hsl("+j+", 75%, 42%)"}function xa(j){return ut[j]||"自定义 "+j}const ba=a(""),da=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),la=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Aa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ua=a({day:[],week:[],month:[],year:[]}),La=a({});function va(j,de){let we=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(we=window.__quantModules.themes.applyTheme(j,de)),Fe.value=we&&we.mode?we.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ta(j,de){const we=window.__quantModules&&window.__quantModules.preferences;if(!(!we||!we.setPreferences))try{we.setPreferences({theme:j}),de!=null&&de!==""&&we.setPreferences({theme_hue:parseInt(de,10)})}catch{}}function wa(j,de){va(j,de),de!=null&&de!==""&&(tt.value=parseInt(de,10));const we=window.__quantModules&&window.__quantModules.themes;let Ve=j;we&&we.LEGACY_MAP&&we.LEGACY_MAP[j]&&(Ve=we.LEGACY_MAP[j][0]),Ve==="light"||Ve==="dark"||Ve==="system"?Lt.value=Ve:Lt.value=Fe.value,Ve==="system"&&(Ve=Fe.value),Ta(Ve,de),it.value&&(fetch(`/api/users/${it.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ve})}),it.value.theme=Ve,localStorage.setItem("quant_user",JSON.stringify(it.value)))}function Ia(j){const de=window.__quantModules&&window.__quantModules.preferences,we=de&&de.getPreference?de.getPreference("theme_hue"):null;wa(j,we)}function Na(j){const de=window.__quantModules&&window.__quantModules.preferences;!de||!de.applyDensity||(Wt.value=de.applyDensity(j)||"comfortable",de.setPreference&&de.setPreference("info_density",Wt.value))}function Gt(j){tt.value=parseInt(j,10);const de=window.__quantModules&&window.__quantModules.preferences,we=de&&de.getPreference&&de.getPreference("theme")||"light";wa(we,tt.value)}const ma=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function _(j){ma.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const G=t(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ma.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),ze=a("daily");(function(){try{const de=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(de==="weekly"||de==="monthly")&&(ze.value=de)}catch{}})();const mt=a(!1),z=a(""),ne=a(!1),ue=a(!1),Me=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Pe=["MA5","MA10","MA20","MA60"],Rt=a(!1);let st=0;async function ht(j){if(!he.value)return!1;const de=++st;mt.value=!0,ze.value=j;try{const Ve=await(await fetch(`/api/market/kline/${he.value.stock}?period=${j}&limit=60`)).json();if(!Ve.success||!Ve.data)throw new Error(Ve.message||"数据获取失败");return z.value=Ve.degraded_from?"分钟数据("+Ve.degraded_from+")暂不可用, 已降级展示日线":"",en(he.value.stock),de!==st?!1:(Q.value!=="kline"||(ue.value=!0,await m(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ve.data,j,!1,{isMobile:gs.value,onLegend:Je=>{Object.keys(Me.value).forEach(Bt=>{Bt in Je&&(Me.value[Bt]=!!Je[Bt])})}}),St()),!0)}catch(we){return console.error("[kline] 加载失败:",he.value&&he.value.stock,j,we),Q.value==="kline"&&(ue.value=!1,z.value="",ElementPlus.ElMessage.error("K线加载失败: "+(we&&we.message?we.message:"数据源不可达，请重试"))),!1}finally{mt.value=!1}}async function Xt(j){if(Ja.value){ne.value=!0,ze.value=j;try{const we=await(await fetch(`/api/market/kline/${Ja.value.code}?period=${j}&limit=60`)).json();if(!we.success||!we.data)throw new Error(we.message||"数据获取失败");Rt.value=!0,await m(),window.__quantModules.charts.renderKlineTo("indexKlineChart",we.data,j,!0,{isMobile:gs.value,onLegend:Ve=>{Object.keys(Me.value).forEach(Je=>{Je in Ve&&(Me.value[Je]=!!Ve[Je])})}}),St()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ne.value=!1}}}async function zt(j){if(!ue.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await ht(j)}async function pa(j){if(!Rt.value){ElementPlus.ElMessage.info("请先加载K线");return}await Xt(j)}function ia(j){const de=(Ht.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ya.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);de&&de.dispatchAction({type:"legendToggleSelect",name:j})}function St(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{Me.value[j]=!0})}async function Ze(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const de=await j.json(),we=Array.isArray(de)?de:de&&de.data_sources||[];Ge.value=we}const Nt=()=>cs,Sa=()=>Ps,Mt=()=>Uo,Ga=()=>Oa,gn=()=>ns,hn=window.__quantAppLogic.data.create({currentView:ct,statusFilter:ft,dashboardData:$e,loadHealthMetrics:Ze,getLoadDashboardData:Nt,getLastRefreshTime:Sa,getFetchPoolSignals:Mt}),{loading:yn,loadingView:bn,viewCache:wn,dates:Va,selectedDate:ea,lastLoadTime:kn,consensus:Ca,viewNote:_n,loadDates:vs,refreshCalendarData:ms,exportCSV:ps,loadConsensusData:Pa,loadDashboardCached:Fa}=hn,xn=window.__quantAppLogic.market.create({currentKlinePeriod:ze,loadIndexKline:Xt,rememberDialogTrigger:F,menus:Ne,currentPage:Ke,currentSubPage:ee,stockDetail:he,selectedDate:ea}),{marketData:Sn,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:Cn,indexAiLoading:qn,fetchMarketData:Qa,showIndexDetail:En,loadCachedIndexEval:Mn,doIndexAiEvaluate:Tn,disposeStockKline:fs,isMobile:gs,zoomKlineRange:Pn,scoreAnimating:Dn,scoreDelta:Rn,scorePulse:zn,refreshStockScore:$a,animateScoreEntrance:Xa,onTouchStart:An,onTouchEnd:Ln}=xn,In=window.__quantAppLogic.ops.create({navigateTo:qe,currentPage:Ke,currentSubPage:ee}),{feishuConfig:hs,feishuTestStatus:Nn,feishuTestMessage:On,testFeishuWebhook:jn,saveFeishuConfig:Vn,aiFabHidden:Fn,openAiFab:ys,strategyRecommendations:Hn,aiUsage:Bn,loadStrategyRecommendations:bs,loadAiUsage:Za,sysMonitor:Kn,analyticsRank:Wn,analyticsDays:Un,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Gn,loadHealthDetail:_s,reviewTriggering:Yn,triggerMarketReview:Jn,factCheck:Qn,factCheckRunning:$n,loadFactCheck:xs,triggerFactCheck:Xn,backups:Zn,backupCreating:el,loadBackups:Ss,createBackup:tl,restoreBackup:al,reportExporting:sl,reportExportMsg:nl,exportReport:ll,tourVisible:il,tourStep:ol,tourSteps:rl,maybeShowTour:cl,skipTour:dl,finishTour:ul,feedbackText:vl,feedbackSubmitting:ml,submitFeedback:pl}=In,fl=window.__quantAppLogic.nav.create({currentView:ct,selectedDate:ea,dates:Va,loadConsensusData:Pa,hapticFeedback:i}),{viewUnit:gl,datePickerType:hl,dateFormat:yl,canNavPrev:bl,canNavNext:wl,switchView:Cs,navigateDate:qs,disabledDate:kl,onDateChange:_l}=fl,xl=window.__quantAppLogic.keys.create({menus:Ne,subPageNames:sa,navigateTo:qe,currentPage:Ke,currentView:ct,navigateDate:qs,switchView:Cs,getLoadDashboardData:Nt,refreshCalendarData:ms,getLoadAiHistory:Ga,exportCSV:ps,getShowBatchEvaluate:gn,openAiFab:ys,toggleSidebar:re,showStockDetail:Ms}),{searchQuery:Sl,searchStocks:Cl,onSearchSelect:ql,shortcutHelpVisible:El,commandPaletteVisible:Ml,handleGlobalKeydown:Es}=xl;let Ha=0;async function Ms(j){const de=++Ha;F(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),ts.value=null,ze.value="daily",ue.value=!1,Q.value="kline",he.value=null,et.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ht.value=!0,m(()=>Xa());try{const we=await fetch(`/api/calendar/stock/${j}?date=${ea.value}`);if(de!==Ha)return;he.value=await we.json(),he.value&&he.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,he.value.name)}catch{if(de!==Ha)return;ElementPlus.ElMessage.error("加载失败"),he.value={stock:j,name:"",total_days:0}}finally{de===Ha&&(et.value=!1)}setTimeout(async()=>{await ht("daily"),$a()},500),ls(j)}const Tl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Pl={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Dl(j){return Tl[j]||"var(--text-tertiary)"}function Rl(j){return Pl[j]||"var(--bg-hover)"}const zl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ue,stockDetailVisible:Ht,stockDetailTab:Q,stockDetail:he,disposeStockKline:fs}):{},{chatSessions:Al,chatHistoryView:Ll,selectedChatIds:Il,expandedChatDates:Nl,expandedChatMonths:Ol,expandedChatStocks:jl,chatHistoryLoading:Vl,chatHistoryError:Fl,allChatSessionsFlat:Hl,chatGroupedByDate:Bl,chatGroupedByMonth:Kl,chatGroupedByStock:Wl,toggleSelectChat:Ul,toggleSelectChatDate:Gl,toggleSelectChatMonth:Yl,toggleSelectChatStock:Jl,toggleChatDateExpand:Ql,toggleChatMonthExpand:$l,toggleChatStockExpand:Xl,selectAllChatSessions:Zl,deleteSelectedChatSessions:ei,viewChatSession:ti,loadChatHistory:Ts,deleteChatSession:ai,renderMarkdown:si,stockChatInput:ni,stockChatMessages:li,stockChatLoading:ii,stockChatError:oi,askStockSend:ri,askStockQuick:ci}=zl,di=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:it,applyTheme:va,allMenuDefs:me,loadGroupConfig:He}):{},{userList:ui,userSearch:vi,groupFilter:mi,userPageTab:pi,expandedGroups:fi,addMemberGroupMap:gi,filteredUsers:hi,toggleGroupExpand:yi,removeMemberFromGroupInline:bi,addMemberToGroupInline:wi,changeUserGroup:ki,showAddUser:_i,editingUser:xi,userForm:Si,savingUser:Ci,editingGroup:qi,menuConfigDialog:Ei,memberDialog:Mi,groupEditForm:Ti,subPageCache:Pi,showAddGroup:Di,addGroupForm:Ri,savingGroup:zi,groupMembers:Ai,addMemberUsername:Li,selectedMemberGroup:Ii,subPageSectionExpanded:Ni,toggleSubPageSection:Oi,getGroupMemberCount:ji,getMenuEnabledCount:Vi,groupCount:Fi,openMemberManager:Hi,loadGroupMembers:Bi,addMemberToGroup:Ki,removeMemberFromGroup:Wi,availableUsersForGroup:Ui,onParentToggle:Gi,openMenuConfig:Yi,saveMenuConfig:Ji,deleteGroupConfig:Qi,createGroup:$i,allGroups:Xi,getGroupName:Zi,loadAllGroups:es,loadUsers:Ba,editUser:eo,saveUser:to,deleteUser:ao,toggleUserEnabled:so,resetUserPassword:no}=di,lo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:Ca,currentPage:Ke,currentSubPage:ee,dashboardData:$e,searchKeyword:ba,statusFilter:ft,strategyFilter:la,strategyFilterCounts:ua}):{},{applyStrategyFilter:og,statusCounts:io,stockPool:oo,strategyDistribution:ro,strategyPreviewCount:co,saveStrategyFilter:uo,filteredConsensusRank:vo,currentPoolSize:mo,filteredStrategyCounts:po,poolChangeBadge:fo,timeBarPercent:go,lastRefreshTime:Ps,navigateToStrategyFilter:ho}=lo,yo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:T,consensus:Ca}):{},{aiResult:ts,lastEvalTime:bo,evalHistoryComparison:wo,checklistItems:ko,aiHistory:Ds,selectedHistoryIds:Rs,expandedDates:zs,expandedMonths:_o,expandedStocks:As,poolSignals:xo,toggleMonthExpand:So,aiHistoryView:Co,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateScope:Os,aiVendors:qo,aiCatalog:Eo,aiModelsError:Mo,testingAllModels:To,savingAiModels:Po,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Do,testVendorModel:Ro,testAllVendorModels:zo,fetchVendorModels:Ao,addVendorFromCatalog:Lo,addCustomVendor:Io,addVendorModel:No,removeVendorModel:Oo,removeVendor:jo,toggleVendorKeyReveal:Vo,toggleVendorEdit:Fo,autoEvaluateConfig:as,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ns,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,selectedPreset:Ho,providerInfo:Bo,aiPresets:rg,applyPreset:Ko,onProviderChange:Wo,fetchPoolSignals:Uo,cancelPoolSignals:Zs,loadLastEvaluation:ls}=yo,Go=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:it,selectedDate:ea,stockDetail:he,stockDetailTab:Q,stockDetailVisible:Ht,stockDetailLoading:et,stockKlineLoaded:ue,viewCache:wn,animateScoreEntrance:Xa,loadStockKline:ht,refreshStockScore:$a,disposeStockKline:fs,aiHistory:Ds,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,aiResult:ts,loadLastEvaluation:ls,autoEvaluateConfig:as,autoEvaluateScope:Os,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,expandedDates:zs,expandedStocks:As,savingConfig:Ns,selectedHistoryIds:Rs,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,showBatchEvaluate:ns}):{},{quickEvalStock:Yo,evalStrategy:Jo,watchlistSort:Qo,watchlist:$o,watchlistCodes:Xo,sortedWatchlist:Zo,getWatchlistScore:er,getLatestScore:cg,addSearchResult:tr,evaluatedCodes:ar,klineLoadedCodes:sr,markKlineLoaded:en,watchlistSearch:nr,watchlistResults:lr,watchlistSearching:ir,dataRefreshConfig:or,dataRefreshReloading:rr,dataRefreshSaving:cr,aiHistoryLoading:dr,aiHistoryError:ur,aiHistoryTotal:vr,aiHistoryLoadingMore:mr,hasMoreAiHistory:pr,loadMoreAiHistory:fr,watchlistLoading:gr,doAiEvaluate:hr,loadAiHistory:Oa,deleteSingleHistory:yr,toggleSelectHistory:br,clearSelection:wr,clearWatchlistSelection:kr,batchReevaluateHistory:_r,batchAddToWatchlist:xr,batchRemoveWatchlist:Sr,toggleSelectWatchlist:Cr,selectAllHistory:qr,selectAllWatchlist:Er,deleteSelectedHistory:Mr,loadAutoEvaluateConfig:tn,saveAutoEvaluateConfig:Tr,loadWatchlist:an,addToWatchlist:Pr,removeFromWatchlist:Dr,clearWatchlist:Rr,toggleWatchlist:zr,showStockKline:Ar,preloadingKline:Lr,preloadWatchlistKline:sn,watchlistEvaluate:Ir,batchEvaluateWatchlist:Nr,batchEvaluateSelected:Or,searchStockForWatchlist:jr,loadDataRefreshConfig:nn,saveDataRefreshConfig:Vr,triggerDataReload:Fr,triggerDataPull:Hr,dataPullRunning:Br,groupedByDate:Kr,aiHistoryByStock:Wr,groupedByMonth:Ur,aiHistoryStockCount:Gr,scoreDistribution:Yr,quickEvaluate:Jr,toggleDateExpand:Qr,toggleSelectDate:$r,toggleSelectMonth:Xr,toggleStockExpand:Zr,toggleSelectStock:ec,registerTrendChart:tc,viewAiResult:ac,doBatchEvaluate:sc,realtimeQuotes:nc,realtimeDegraded:lc,realtimeWsState:ic,connectRealtimeQuotes:oc,disconnectRealtimeQuotes:rc,quoteWarningFor:cc,realtimeQuoteColor:dc,realtimePriceText:uc,realtimePctText:vc,realtimeRatioText:mc,REALTIME_DEGRADED_TEXT:pc,REALTIME_FALLBACK_TEXT:fc}=Go,gc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Oe}):{},{btStrategyOptions:hc,btSelectedStrategies:yc,toggleBtStrategy:bc,btDateRange:wc,btCapital:kc,btCommissionRate:_c,btIncludeBenchmark:xc,btRunning:Sc,btResult:Cc,btError:qc,btMetrics:Ec,btAnnualReturns:Mc,btTrades:Tc,btStrategyMetricsRows:Pc,btDrawdownRegion:Dc,runBacktestWorkbench:Rc,exportBacktestCSV:zc,registerBacktestNavChart:Ac,btFmtNum:Lc}=gc,Ic=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:T,aiConfig:Xs,aiLoading:ss,feishuConfig:hs,currentTheme:Fe,changeTheme:wa,autoEvaluateConfig:as,currentUser:it,strategyFilter:la,applyTheme:va,dashboardData:$e,lastRefreshTime:Ps,saveAiModels:Do}):{},{configSaving:Nc,globalConfigDirty:Oc,lastSavedTime:jc,feishuConfigOriginal:dg,aiConfigOriginal:ug,tushareConfigOriginal:vg,tushareConfig:Vc,tushareStatus:Fc,datasourceConfig:Hc,datasourceStatus:Bc,syncingData:Kc,stockCount:Wc,tradeDateCount:Uc,aiStatus:Gc,appVersion:ln,showImportDialog:Yc,rateLimitConfig:Jc,rateLimitDirty:Qc,rateLimitSaving:$c,loadRateLimit:is,saveRateLimit:Xc,saveAiConfig:Zc,testAiApi:ed,exportConfig:td,importConfig:ad,saveAllConfig:sd,resetAllConfig:nd,testTushareConnection:ld,checkTushareConnection:Wa,syncStockData:id,loadTushareConfig:on,loadDatasourceConfig:rn,saveDatasourceConfig:od,testDatasource:rd,toggleDatasourceKeyReveal:cd,toggleDatasourceEdit:dd,loadFeishuConfig:os,loadAiConfig:Ua,loadUserConfig:cn,loadSystemStatus:rs,loadDashboardData:cs}=Ic,ud=window.__quantAppLogic.auth.create({currentUser:it,loadUserConfig:cn,loadDates:vs,loadDashboardData:cs,loadDashboardCached:Fa,loadHealthMetrics:Ze,loadConsensusData:Pa,applyTheme:va,maybeShowTour:cl,loadAiVendors:Ka,loadGroupConfig:He,groupsConfig:ae}),{loginForm:vd,logining:md,guestLogining:pd,showChangePassword:fd,changePasswordForm:gd,changingPassword:hd,showSetupWizard:yd,setupForm:bd,setupStep:wd,checkSetupWizard:kd,completeSetupWizard:_d,resetSetupWizard:xd,handleLogin:Sd,handleGuestLogin:Cd,handleLogout:qd,doChangePassword:Ed}=ud;window.__quantAppLogic.watch.register({strategyFilter:la,currentView:ct,statusFilter:ft,currentPage:Ke,currentSubPage:ee,menus:Ne,currentUser:it,strategyFilterCounts:ua,lazyTick:Ie,dates:Va,selectedDate:ea,consensus:Ca,loadConsensusData:Pa,fetchMerrillClock:M,fetchMarketData:Qa,loadWatchlist:an,loadAiHistory:Oa,preloadWatchlistKline:sn,loadChatHistory:Ts,loadSystemStatus:rs,checkTushareConnection:Wa,loadSysMonitor:ws,loadAnalytics:ks,loadHealthDetail:_s,loadHealthMetrics:Ze,loadAiUsage:Za,loadFactCheck:xs,loadAutoEvaluateConfig:tn,loadDatasourceConfig:rn,loadFeishuConfig:os,loadAiConfig:Ua,loadAiVendors:Ka,loadRateLimit:is,loadDataRefreshConfig:nn,loadBackups:Ss,loadAllGroups:es,loadUsers:Ba,stockDetailTab:Q,stockDetailVisible:Ht,stockKlineLoaded:ue,loadStockKline:ht,currentKlinePeriod:ze,showMerrillDetail:S,indexDetailVisible:Ya,restoreDialogFocus:D});const Md=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Es,applyTheme:va,menus:Ne,currentPage:Ke,currentSubPage:ee,currentView:ct,currentKlinePeriod:ze,selectedDate:ea,dates:Va,loadDates:vs,loadConsensusData:Pa,loadDashboardCached:Fa,appVersion:ln,themes:_e,fetchMarketData:Qa,fetchMerrillStages:J,fetchMerrillClock:M,loadMerrillTimeline:U,showTimelineStage:ie,merrillTimeline:fe,timelineLoading:Se,loadAiConfig:Ua,loadAiVendors:Ka,loadAiCatalog:js,currentUser:it,loadUserConfig:cn,loadAutoEvaluateConfig:tn,loadGroupConfig:He,loadUsers:Ba,loadAllGroups:es,loadAiHistory:Oa}),{runOnMounted:Td}=Md;window.__quantGoPage=async(j,de)=>{try{const we=window.__lazyLoaders&&window.__lazyLoaders[j];we&&await we()}catch(we){console.warn("[lazy] 页面组件加载失败",j,we)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(we=>{we&&we.name&&!we.__quantRegistered&&(window.__quantApp.component(we.name,we),we.__quantRegistered=!0)}),Ie&&Ie.value++,Ke.value=j,de&&(ee.value=de)};let Da;function dn(){const j=window.QuantSessionRestore;j&&j.save({page:Ke.value,sub:ee.value||""})}u(Ke,async j=>{var de;i("light"),dn();try{const we=me.find(function(Ve){return Ve.key===j});document.title=(we?we.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof Zs=="function"&&Zs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(we){console.warn("pageView track failed:",we)}if(Da&&(clearInterval(Da),Da=null),j==="strategies")await Fa(),Da=setInterval(()=>{Fa().catch(()=>{})},5*60*1e3);else if(j==="calendar")ea.value&&await Pa();else if(j==="ai")bs(),Za(),await Oa();else if(j==="system"){if(!ea.value){const Ve=await(await fetch("/api/dashboard")).json(),Je=Ve.data||Ve;Je.latest_date&&(ea.value=Je.latest_date)}if(ea.value){const we=["day","week","month","year"];for(const Ve of we)try{const Bt=await(await fetch(`/api/view/${Ve}/${ea.value}?status=all`)).json();ua.value[Ve]=Bt.stocks||[]}catch(Je){console.warn("loadConsensusData view load failed:",Je)}(!Ca.value||Ca.value.length===0)&&(Ca.value=ua.value.day||[])}((de=it.value)==null?void 0:de.role)==="admin"&&(await Ba(),await os(),await on(),await rs(),await Ua(),await is(),Wa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Wa,36e5)))}}),g(async()=>{await Td()}),se(),U(),e(()=>{Da&&clearInterval(Da),window.removeEventListener("keydown",Es),window.removeEventListener("keydown",B)});function Pd(j,de=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(de)}return{currentPage:Ke,pageComp:We,currentSubPage:ee,sidebarCollapsed:Ee,menus:Ne,navMode:pt,setNavMode:Tt,tabGroups:dt,openTab:ya,closeTab:_a,activateTab:na,fmtNum:Pd,sanitizeHtml:E,keyClick:C,isOnline:d,currentUser:it,allMenuDefs:me,t:x,locale:o,changeLanguage:w,currentPageName:Ce,subPageNames:sa,searchQuery:Sl,searchStocks:Cl,onSearchSelect:ql,selectedDate:ea,onDateChange:_l,disabledDate:kl,refreshCalendarData:ms,exportCSV:ps,viewNote:_n,loading:yn,lastLoadTime:kn,resetSetupWizard:xd,showChangePassword:fd,themes:_e,currentTheme:Fe,changeTheme:wa,changeThemeMode:Ia,changeThemeHue:Gt,handleLogout:qd,themeHues:De,themeHueNames:ut,themeHue:tt,themeMode:Lt,hueColor:Ut,hueName:xa,density:Wt,changeDensity:Na,marketData:Sn,merrillData:V,merrillTimeline:fe,timelineLoading:Se,merrillStagesConfig:W,fetchMerrillStages:J,merrillSnapshots:Te,merrillSnapshotsTotal:ge,healthMetrics:Ge,feishuConfig:hs,feishuTestStatus:Nn,feishuTestMessage:On,shortcutHelpVisible:El,shortcutHelpItems:xe,commandPaletteVisible:Ml,tourVisible:il,tourStep:ol,tourSteps:rl,skipTour:dl,finishTour:ul,backups:Zn,backupCreating:el,loadBackups:Ss,createBackup:tl,restoreBackup:al,reportExporting:sl,reportExportMsg:nl,exportReport:ll,sysMonitor:Kn,analyticsRank:Wn,analyticsDays:Un,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Gn,loadHealthDetail:_s,reviewTriggering:Yn,triggerMarketReview:Jn,factCheck:Qn,factCheckRunning:$n,loadFactCheck:xs,triggerFactCheck:Xn,strategyRecommendations:Hn,aiUsage:Bn,loadStrategyRecommendations:bs,loadAiUsage:Za,aiFabHidden:Fn,openAiFab:ys,feedbackText:vl,feedbackSubmitting:ml,submitFeedback:pl,backtestStrategies:Oe,backtestStrategy:Xe,backtestRange:Qe,backtestCapital:Ye,backtestRunning:lt,backtestResult:yt,runBacktest:aa,btStrategyOptions:hc,btSelectedStrategies:yc,toggleBtStrategy:bc,btDateRange:wc,btCapital:kc,btCommissionRate:_c,btIncludeBenchmark:xc,btRunning:Sc,btResult:Cc,btError:qc,btMetrics:Ec,btAnnualReturns:Mc,btTrades:Tc,btStrategyMetricsRows:Pc,btDrawdownRegion:Dc,runBacktestWorkbench:Rc,exportBacktestCSV:zc,registerBacktestNavChart:Ac,btFmtNum:Lc,fetchMarketData:Qa,fetchMerrillClock:M,testFeishuWebhook:jn,saveFeishuConfig:Vn,merrillClockConfig:K,merrillClockLastUpdated:A,merrillReevalResult:L,merrillReevalLoading:H,saveMerrillClockConfig:ce,doMerrillReevaluate:Ae,dataRefreshConfig:or,dataRefreshReloading:rr,dataRefreshSaving:cr,loadDataRefreshConfig:nn,saveDataRefreshConfig:Vr,triggerDataReload:Fr,triggerDataPull:Hr,dataPullRunning:Br,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:Cn,indexAiLoading:qn,loadCachedIndexEval:Mn,showIndexDetail:En,doIndexAiEvaluate:Tn,klinePeriods:G,currentKlinePeriod:ze,klineLoading:mt,indexKlineLoading:ne,stockKlineLoaded:ue,indexKlineLoaded:Rt,klineDegradeNote:z,klineShowMinutes:ma,toggleKlineShowMinutes:_,loadStockKline:ht,switchKlinePeriod:zt,loadIndexKline:Xt,switchIndexKlinePeriod:pa,zoomKlineRange:Pn,MA_LINES:Pe,klineMaVisible:Me,toggleKlineMa:ia,scoreAnimating:Dn,scoreDelta:Rn,scorePulse:zn,refreshStockScore:$a,animateScoreEntrance:Xa,showMerrillDetail:S,merrillDetailData:O,showStageDetail:Y,getCharLabel:c,getAssetName:N,getRankColor:oe,levelColor:Dl,levelBg:Rl,timelineStages:s,getStageAngle:X,getCycleProgress:P,getCurrentStageMonths:b,getStageTotalMonths:v,isStageCompleted:k,stages:$,indicatorList:Z,dimensionScoreList:le,confidenceColor:R,views:_t,currentView:ct,statusFilter:ft,loginForm:vd,logining:md,guestLogining:pd,dashboardData:$e,loadingView:bn,dates:Va,consensus:Ca,searchKeyword:ba,stockDetailVisible:Ht,stockDetailTab:Q,stockDetail:he,stockDetailLoading:et,detailDisplayMode:Ue,setDetailDisplayMode:It,isNarrow:wt,detailSplitEnabled:At,splitWidth:Pt,setSplitWidth:Jt,SPLIT_DEFAULT_PCT:vt,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ns,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,userList:ui,showAddUser:_i,editingUser:xi,userForm:Si,savingUser:Ci,userSearch:vi,filteredUsers:hi,groupFilter:mi,userPageTab:pi,expandedGroups:fi,addMemberGroupMap:gi,toggleGroupExpand:yi,removeMemberFromGroupInline:bi,addMemberToGroupInline:wi,changeUserGroup:ki,statusCounts:io,stockPool:oo,poolSignals:xo,aiResult:ts,aiHistory:Ds,groupedByDate:Kr,groupedByMonth:Ur,expandedDates:zs,expandedMonths:_o,aiHistoryByStock:Wr,aiHistoryStockCount:Gr,expandedStocks:As,aiHistoryView:Co,aiHistoryLoading:dr,aiHistoryError:ur,aiHistoryTotal:vr,aiHistoryLoadingMore:mr,hasMoreAiHistory:pr,loadMoreAiHistory:fr,watchlistLoading:gr,scoreDistribution:Yr,quickEvalStock:Yo,evalStrategy:Jo,checklistItems:ko,evalHistoryComparison:wo,quickEvaluate:Jr,selectedHistoryIds:Rs,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateConfig:as,autoEvaluateScope:Os,strategyList:da,toggleDateExpand:Qr,toggleMonthExpand:So,toggleSelectDate:$r,toggleSelectMonth:Xr,toggleSelectStock:ec,toggleStockExpand:Zr,registerTrendChart:tc,selectedWatchlistCodes:Ls,clearWatchlistSelection:kr,toggleSelectWatchlist:Cr,selectAllHistory:qr,selectAllWatchlist:Er,batchRemoveWatchlist:Sr,batchEvaluateSelected:Or,batchReevaluateHistory:_r,batchAddToWatchlist:xr,viewUnit:gl,datePickerType:hl,dateFormat:yl,canNavPrev:bl,canNavNext:wl,handleLogin:Sd,handleGuestLogin:Cd,switchView:Cs,navigateDate:qs,navigateTo:qe,loadDashboardData:cs,loadConsensusData:Pa,showStockDetail:Ms,doAiEvaluate:hr,doBatchEvaluate:sc,loadAiHistory:Oa,loadLastEvaluation:ls,lastEvalTime:bo,viewAiResult:ac,saveAiConfig:Zc,testAiApi:ed,exportConfig:td,importConfig:ad,configSaving:Nc,configChanged:T,watchlist:$o,watchlistCodes:Xo,watchlistSearch:nr,watchlistResults:lr,watchlistSearching:ir,watchlistSort:Qo,sortedWatchlist:Zo,getWatchlistScore:er,addSearchResult:tr,evaluatedCodes:ar,klineLoadedCodes:sr,markKlineLoaded:en,loadWatchlist:an,addToWatchlist:Pr,removeFromWatchlist:Dr,clearWatchlist:Rr,searchStockForWatchlist:jr,toggleWatchlist:zr,batchEvaluateWatchlist:Nr,watchlistEvaluate:Ir,showStockKline:Ar,preloadWatchlistKline:sn,preloadingKline:Lr,realtimeQuotes:nc,realtimeDegraded:lc,realtimeWsState:ic,connectRealtimeQuotes:oc,disconnectRealtimeQuotes:rc,quoteWarningFor:cc,realtimeQuoteColor:dc,realtimePriceText:uc,realtimePctText:vc,realtimeRatioText:mc,REALTIME_DEGRADED_TEXT:pc,REALTIME_FALLBACK_TEXT:fc,toggleSelectHistory:br,clearSelection:wr,deleteSingleHistory:yr,deleteSelectedHistory:Mr,saveAutoEvaluateConfig:Tr,editUser:eo,saveUser:to,deleteUser:ao,loadUsers:Ba,allGroups:Xi,loadAllGroups:es,getGroupName:Zi,toggleUserEnabled:so,resetUserPassword:no,selectedPreset:Ho,applyPreset:Ko,onProviderChange:Wo,providerInfo:Bo,globalConfigDirty:Oc,lastSavedTime:jc,tushareConfig:Vc,tushareStatus:Fc,syncingData:Kc,stockCount:Wc,tradeDateCount:Uc,aiStatus:Gc,appVersion:ln,showImportDialog:Yc,rateLimitConfig:Jc,rateLimitDirty:Qc,rateLimitSaving:$c,loadRateLimit:is,saveRateLimit:Xc,saveAllConfig:sd,resetAllConfig:nd,testTushareConnection:ld,syncStockData:id,loadTushareConfig:on,loadFeishuConfig:os,loadSystemStatus:rs,loadAiConfig:Ua,aiVendors:qo,aiCatalog:Eo,aiModelsError:Mo,testingAllModels:To,savingAiModels:Po,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Vs,testVendorModel:Ro,testAllVendorModels:zo,fetchVendorModels:Ao,addVendorFromCatalog:Lo,addCustomVendor:Io,addVendorModel:No,removeVendorModel:Oo,removeVendor:jo,toggleVendorKeyReveal:Vo,toggleVendorEdit:Fo,checkTushareConnection:Wa,datasourceConfig:Hc,datasourceStatus:Bc,loadDatasourceConfig:rn,saveDatasourceConfig:od,testDatasource:rd,toggleDatasourceKeyReveal:cd,toggleDatasourceEdit:dd,strategyFilter:la,strategyFilterOptions:Aa,strategyFilterCounts:ua,strategyPreviewCount:co,saveStrategyFilter:uo,filteredConsensusRank:vo,currentPoolSize:mo,filteredStrategyCounts:po,strategyDistribution:ro,expandedStrategies:La,poolChangeBadge:fo,timeBarPercent:go,navigateToStrategyFilter:ho,showUserMenu:bt,toggleSidebar:re,groupsConfig:ae,loadGroupConfig:He,editingGroup:qi,groupEditForm:Ti,showAddGroup:Di,addGroupForm:Ri,savingGroup:zi,menuConfigDialog:Ei,memberDialog:Mi,groupMembers:Ai,addMemberUsername:Li,selectedMemberGroup:Ii,subPageSectionExpanded:Ni,toggleSubPageSection:Oi,getGroupMemberCount:ji,getMenuEnabledCount:Vi,groupCount:Fi,openMemberManager:Hi,loadGroupMembers:Bi,addMemberToGroup:Ki,removeMemberFromGroup:Wi,availableUsersForGroup:Ui,subPageCache:Pi,onParentToggle:Gi,openMenuConfig:Yi,saveMenuConfig:Ji,deleteGroupConfig:Qi,createGroup:$i,changePasswordForm:gd,changingPassword:hd,doChangePassword:Ed,showSetupWizard:yd,setupForm:bd,setupStep:wd,checkSetupWizard:kd,completeSetupWizard:_d,chatSessions:Al,chatHistoryView:Ll,selectedChatIds:Il,expandedChatDates:Nl,expandedChatMonths:Ol,expandedChatStocks:jl,chatHistoryLoading:Vl,chatHistoryError:Fl,allChatSessionsFlat:Hl,chatGroupedByDate:Bl,chatGroupedByMonth:Kl,chatGroupedByStock:Wl,toggleSelectChat:Ul,toggleSelectChatDate:Gl,toggleSelectChatMonth:Yl,toggleSelectChatStock:Jl,toggleChatDateExpand:Ql,toggleChatMonthExpand:$l,toggleChatStockExpand:Xl,selectAllChatSessions:Zl,deleteSelectedChatSessions:ei,viewChatSession:ti,loadChatHistory:Ts,deleteChatSession:ai,renderMarkdown:si,stockChatInput:ni,stockChatMessages:li,stockChatLoading:ii,stockChatError:oi,askStockSend:ri,askStockQuick:ci,onTouchStart:An,onTouchEnd:Ln,hapticFeedback:i}}})();Ea.name="qc-icon";pn.name="qc-glossary-hint";fn.name="qc-glossary-page";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=rm;window.__quantComponents.Header=op;window.__quantComponents.SubNav=wp;window.__quantComponents.MobileNav=jp;window.__quantComponents.StockList=wf;window.__quantComponents.DetailSplit=Sf;window.__quantComponents.TopTabs=zf;window.__quantComponents.AppIcon=Ea;window.__quantComponents.GlossaryHint=pn;window.__quantComponents.GlossaryPage=fn;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default ig();
