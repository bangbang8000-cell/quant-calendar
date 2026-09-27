var cd=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);import{aV as dd,L as pe,O as Ut,Z as ud,au as Pt,M as be,P as qe,aW as vd,a0 as Fe,_ as Be,F as ot,al as bt,S as it,a1 as dt,X as Wt,ai as xt,q as ra,o as wa,a8 as ja,r as kt,e as lt,av as md,Y as fa,$ as sa,R as fd,aC as Kt,T as pd,Q as Ht,p as gd,n as hd}from"./vendor-vue-DDF9zi1T.js";import{e as yd,E as bd,a as wd,b as _d,c as kd,z as xd}from"./vendor-ep-VOop1zGa.js";import{C as Sd,a as Cd,W as qd,I as Ed,S as Md,B as Td,F as Pd,b as Dd,c as Rd,d as zd,e as Ad,f as Ld,P as Id,g as Nd,h as Od,i as jd,T as Vd,j as Fd,L as Hd,k as Bd,G as Kd,U as Wd,l as Ud,m as Gd,n as Yd,D as Qd,o as Jd,p as $d,M as Xd,q as Zd,R as eu,r as tu,s as au,K as su,t as nu,u as lu,v as iu,w as ou,x as ru,y as cu,z as du,A as uu,E as vu,H as mu,O as fu,J as pu,N as gu,Q as hu,V as yu,X as bu,Y as wu,Z as _u,_ as ku,$ as xu,a0 as Su,a1 as Cu,a2 as qu,a3 as Eu,a4 as Mu,a5 as Tu,a6 as Pu,a7 as Du,a8 as Ru,a9 as zu,aa as Au,ab as Lu,ac as Iu,ad as Nu,ae as Ou,af as ju,ag as Vu,ah as Fu,ai as Hu,aj as Bu,ak as Ku,al as Wu,am as Uu,an as Gu,ao as Yu,ap as Qu,aq as Ju,ar as $u,as as Xu,at as Zu,au as ev,av as tv,aw as av,ax as sv,ay as nv,az as lv,aA as iv,aB as ov,aC as rv,aD as cv,aE as dv,aF as uv,aG as vv,aH as mv,aI as fv,aJ as pv,aK as gv,aL as hv,aM as yv,aN as bv,aO as wv,aP as _v,aQ as kv}from"./vendor-lucide-DidEUx9K.js";var vp=cd((xp,Te)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function v(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(o){if(o.ep)return;o.ep=!0;const d=v(o);fetch(o.href,d)}})();window.Vue=dd;const Gt=yd||{};window.ElementPlus=Gt;Gt.ElMessage=Gt.ElMessage||bd;Gt.ElMessageBox=Gt.ElMessageBox||wd;Gt.ElNotification=Gt.ElNotification||_d;Gt.ElLoading=Gt.ElLoading||kd;window.ElementPlusLocaleZhCn={default:xd};(function(){const s=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},v={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(a,p,n){return"hsl("+a+", "+p+"%, "+n+"%)"}function o(a,p,n){p=p/100,n=n/100;const h=function(x){return(x+a/30)%12},ee=p*Math.min(n,1-n),N=function(x){return n-ee*Math.max(-1,Math.min(h(x)-3,Math.min(9-h(x),1)))};return Math.round(255*N(0))+", "+Math.round(255*N(8))+", "+Math.round(255*N(4))}const d=5;function b(a,p,n){return o(a,p,n).split(",").map(function(h){return parseInt(h,10)})}function c(a){const p=function(n){return n=n/255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*p(a[0])+.7152*p(a[1])+.0722*p(a[2])}function i(a,p){const n=c(a),h=c(p),ee=Math.max(n,h),N=Math.min(n,h);return(ee+.05)/(N+.05)}function g(a,p,n){for(var h=8,ee=92,N=0;N<26;N++){var x=(h+ee)/2;c(b(a,p,x))<n?h=x:ee=x}return Math.round(ee*10)/10}function r(a,p,n,h,ee){let N=38,x=76;for(let m=0;m<24;m++){const L=(N+x)/2;i(b(a,h,L),b(a,p,n))>=ee?x=L:N=L}return Math.round(x*10)/10}function P(a,p){var n={};return p==="light"?(n["--qc-neutral-50"]=t(a,18,98),n["--qc-neutral-100"]=t(a,16,95),n["--qc-neutral-200"]=t(a,14,90),n["--qc-neutral-300"]=t(a,12,83),n["--qc-neutral-400"]=t(a,10,68),n["--qc-neutral-500"]=t(a,10,53),n["--qc-neutral-600"]=t(a,10,40),n["--qc-neutral-700"]=t(a,10,30),n["--qc-neutral-800"]=t(a,10,20),n["--qc-neutral-900"]=t(a,10,12),n["--qc-background"]=t(a,18,98),n["--qc-muted"]=t(a,16,95),n["--qc-border"]=t(a,12,72),n["--chart-axis"]=t(a,12,55),n["--chart-split"]=t(a,10,88),n["--qc-foreground"]=t(a,10,12),n["--qc-muted-foreground"]=t(a,9,38),n["--qc-nav-item-default"]=t(a,9,38),n["--qc-nav-item-hover"]=t(a,10,12),n["--qc-nav-group-label"]=t(a,9,40),n["--qc-nav-bg"]="#ffffff",n["--bg-page"]=t(a,20,97),n["--bg-stripe"]=t(a,20,97),n["--bg-card-header"]=t(a,24,96),n["--card-gradient-header"]="linear-gradient(135deg, "+t(a,24,96)+" 0%, #ffffff 100%)",n["--bg-hover"]=t(a,26,94),n["--bg-tertiary"]=t(a,14,93),n["--badge-gold-bg"]=t(a,26,96),n["--gold-bg"]=t(a,20,97),n["--border-light"]=t(a,22,89),n["--border-base"]=t(a,24,79),n["--border-color"]=t(a,14,88),n["--text-primary"]=t(a,12,12),n["--text-secondary"]=t(a,12,32),n["--text-tertiary"]=t(a,14,40),n["--text-disabled"]=t(a,9,_(a,9,D(a,18,98),25,70,!0,3.2)),n["--qc-card"]="#ffffff",n["--qc-popover"]="#ffffff",n["--qc-nav-border"]=t(a,12,72),n["--qc-nav-item-hover-bg"]=t(a,16,95),n["--qc-overlay"]="rgba(31, 29, 26, 0.5)",n["--bg-card"]="#ffffff",n["--surface"]="#ffffff",n["--border-heavy"]=t(a,22,72),n["--surface-canvas"]=t(a,18,98),n["--surface-card"]="#ffffff",n["--surface-raised"]="#ffffff",n["--surface-sunken"]=t(a,16,96),n["--surface-input"]="#ffffff",n["--surface-hover"]=t(a,26,94),n["--border-strong"]=t(a,22,72),n["--scrollbar-thumb"]="rgba("+o(a,12,72)+", 0.5)",n["--bg-page-rgb"]=o(a,20,97)):(n["--qc-background"]=t(a,10,8),n["--qc-card"]=t(a,11,11),n["--qc-popover"]=t(a,11,11),n["--qc-muted"]=t(a,12,14),n["--qc-border"]=t(a,14,30),n["--chart-axis"]=t(a,16,52),n["--chart-split"]=t(a,14,26),n["--qc-nav-bg"]=t(a,10,9),n["--qc-nav-border"]=t(a,13,22),n["--qc-nav-item-hover-bg"]=t(a,12,14),n["--bg-page"]=t(a,10,8),n["--bg-card"]=t(a,11,11),n["--bg-card-header"]=t(a,12,14),n["--bg-stripe"]=t(a,10,9),n["--bg-hover"]=t(a,12,14),n["--bg-tertiary"]=t(a,12,14),n["--border-light"]=t(a,13,18),n["--border-base"]=t(a,14,26),n["--border-heavy"]=t(a,16,38),n["--border-color"]=t(a,13,22),n["--surface"]=t(a,11,11),n["--surface-canvas"]=t(a,10,8),n["--surface-card"]=t(a,11,11),n["--surface-raised"]=t(a,12,14),n["--surface-sunken"]=t(a,12,9),n["--surface-input"]=t(a,12,9),n["--surface-hover"]=t(a,12,15),n["--border-strong"]=t(a,16,42),n["--scrollbar-thumb"]="rgba("+o(a,16,52)+", 0.5)",n["--bg-page-rgb"]=o(a,10,8),n["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),n}const k=4.6;var S=[255,255,255];function C(a){return o(a,10,8).split(",").map(function(p){return parseInt(p,10)})}function _(a,p,n,h,ee,N,x){for(var m=x||k,L=h,w=ee,j=0;j<24;j++){var ae=(L+w)/2,Z=i(b(a,p,ae),n)>=m;N?Z?L=ae:w=ae:Z?w=ae:L=ae}return Math.round((N?L:w)*10)/10}function D(a,p,n){return o(a,p,n).split(",").map(function(h){return parseInt(h,10)})}function q(a){const p=g(a,75,.18),n=g(a,75,.26),h=g(a,70,.36),ee=g(a,85,.12),N=o(a,75,p),x=_(a,68,S,14,62,!0),m=Math.max(12,x-5),L=Math.max(10,x-11),w=o(a,16,95).split(",").map(function(W){return parseInt(W,10)}),j=o(a,85,92).split(",").map(function(W){return parseInt(W,10)}),ae=_(a,78,w,10,58,!0,4.6),Z=_(a,80,j,10,58,!0,4.6),T=Math.min(32,_(a,80,S,8,60,!0,4.6));return{...P(a,"light"),"--primary-color":t(a,75,p),"--primary-rgb":N,"--color-primary":t(a,75,p),"--qc-primary":t(a,75,p),"--qc-primary-50":t(a,90,96),"--qc-primary-100":t(a,85,92),"--qc-primary-200":t(a,80,84),"--qc-primary-300":t(a,75,72),"--qc-primary-400":t(a,70,h),"--qc-primary-500":t(a,75,n),"--qc-primary-600":t(a,80,p),"--qc-primary-700":t(a,85,ee),"--qc-primary-800":t(a,88,28),"--qc-primary-900":t(a,90,20),"--text-link":t(a,78,ae),"--secondary-color":t(a,70,55),"--card-border":t(a,22,80),"--bg-selected":"rgba("+N+", 0.08)","--btn-primary-bg":t(a,80,T),"--btn-primary-border":t(a,80,T),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(a,82,28),"--btn-primary-hover-border":t(a,82,28),"--btn-primary-active-bg":t(a,85,24),"--btn-primary-active-border":t(a,85,24),"--btn-primary-plain-bg":"rgba("+N+", 0.08)","--btn-primary-plain-border":"rgba("+N+", 0.25)","--btn-primary-plain-color":t(a,80,ae),"--btn-primary-plain-hover-bg":"rgba("+N+", 0.15)","--btn-primary-plain-hover-border":t(a,80,32),"--btn-primary-text-color":t(a,80,ae),"--gradient-brand":"linear-gradient(135deg, "+t(a,76,m)+" 0%, "+t(a,85,L)+" 100%)","--primary-text":t(a,78,ae),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,62,Math.min(74,r(a,45,14,58,d)+5))+" 0%, "+t(a,58,r(a,45,14,58,d))+" 100%)","--panel-fg":t(a,45,14),"--qc-nav-item-active":t(a,80,Z),"--qc-nav-item-active-bg":t(a,85,92),"--qc-nav-item-active-border":t(a,75,48),"--qc-nav-badge-bg":t(a,85,92),"--qc-nav-badge-text":t(a,80,Z),"--qc-ring":t(a,75,_(a,75,D(a,18,98),25,70,!0,3.2)),"--brand-soft-text":t(a,80,_(a,80,D(a,80,84),10,58,!0,4.6)),"--border-control":t(a,16,_(a,16,D(a,18,98),30,80,!0,3.2))}}function u(a){const p=g(a,85,.34),n=g(a,85,.46),h=o(a,85,p),ee=_(a,80,C(a),30,92,!1),N=Math.min(96,ee+16),x=D(a,55,22),m=D(a,10,9),L=h.split(",").map(function(W){return parseInt(W,10)}),w=[0,1,2].map(function(W){return Math.round(L[W]*.12+m[W]*.88)}),j=_(a,85,w,45,96,!1,4.6),ae=_(a,85,x,45,96,!1,4.6),Z=Math.min(94,_(a,92,x,45,96,!1,4.6)),T=Math.min(96,Z+6);return{...P(a,"dark"),"--primary-color":t(a,85,p),"--primary-rgb":h,"--color-primary":t(a,85,p),"--qc-primary":t(a,90,p),"--qc-primary-50":t(a,50,18),"--qc-primary-100":t(a,55,22),"--qc-primary-200":t(a,55,26),"--qc-primary-300":t(a,60,30),"--qc-primary-400":t(a,65,38),"--qc-primary-500":t(a,85,n),"--qc-primary-600":t(a,90,p),"--qc-primary-700":t(a,92,Z),"--qc-primary-800":t(a,90,T),"--qc-primary-900":t(a,92,Math.min(98,T+8)),"--text-link":t(a,85,ae),"--secondary-color":t(a,70,60),"--card-border":t(a,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":t(a,85,65),"--btn-primary-border":t(a,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(a,80,72),"--btn-primary-hover-border":t(a,80,72),"--btn-primary-active-bg":t(a,75,80),"--btn-primary-active-border":t(a,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(a,85,ae),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(a,85,65),"--btn-primary-text-color":t(a,85,ae),"--gradient-brand":"linear-gradient(135deg, "+t(a,85,N)+" 0%, "+t(a,80,ee)+" 100%)","--primary-text":t(a,85,ae),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,60,Math.min(76,r(a,40,12,55,d)+5))+" 0%, "+t(a,55,r(a,40,12,55,d))+" 100%)","--panel-fg":t(a,40,12),"--qc-nav-item-active":t(a,85,j),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":t(a,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":t(a,85,j),"--border-control":t(a,16,_(a,16,D(a,11,11),25,70,!1,3.2)),"--brand-soft-text":t(a,85,_(a,85,D(a,55,26),45,96,!1,4.6)),"--qc-ring":t(a,85,65)}}var l=[],f={mode:"light",hue:45},M=!1;function I(a,p){try{var n=document.querySelector('meta[name="theme-color"]');if(!n)return;var h=p?a["--surface-canvas"]||a["--qc-background"]:a["--btn-primary-bg"]||a["--qc-primary"];h&&n.setAttribute("content",h)}catch{}}function E(){if(!(M||typeof window>"u"||!window.matchMedia)){var a=window.matchMedia("(prefers-color-scheme: dark)"),p=function(){f.mode==="system"&&G("system",f.hue)};a.addEventListener?a.addEventListener("change",p):a.addListener&&a.addListener(p),M=!0}}function A(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var R=-1;function F(a){return a=parseInt(a,10),isNaN(a)?45:a<0?R:Math.max(0,Math.min(359,a))}function H(a){return Object.keys(a).forEach(function(p){var n=a[p];if(typeof n=="string"){n.indexOf("hsl(")>=0&&(n=n.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(m,L){return"hsl("+L+", 0%"}));var h=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(n);if(h){var ee=Math.round(.2126*+h[1]+.7152*+h[2]+.0722*+h[3]);n="rgba("+ee+", "+ee+", "+ee+(h[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(n)){var N=n.split(",").map(function(m){return parseInt(m,10)}),x=Math.round(.2126*N[0]+.7152*N[1]+.0722*N[2]);n=x+", "+x+", "+x}a[p]=n}}),a}function B(a,p){var n=D(45,0,p?22:95),h=D(45,0,p?8:98),ee=D(45,0,p?11:100),N=p?_(45,0,n,45,96,!1,4.6):_(45,0,n,10,58,!0,4.6),x=D(45,0,p?22:92),m=p?_(45,0,x,45,96,!1,4.6):_(45,0,x,10,58,!0,4.6),L=p?_(45,0,h,45,96,!1,3.2):_(45,0,h,25,70,!0,3.2),w=p?_(45,0,ee,25,70,!1,3.2):_(45,0,h,30,80,!0,3.2),j=p?_(45,0,D(45,0,26),45,96,!1,4.6):_(45,0,D(45,0,84),10,58,!0,4.6);a["--brand-soft-text"]="hsl(45, 0%, "+j+"%)";var ae="hsl(45, 0%, "+N+"%)";if(a["--primary-text"]=ae,a["--text-link"]=ae,a["--btn-primary-text-color"]=ae,a["--btn-primary-plain-color"]=ae,a["--qc-nav-item-active"]="hsl(45, 0%, "+m+"%)",a["--qc-nav-badge-text"]="hsl(45, 0%, "+m+"%)",a["--qc-ring"]="hsl(45, 0%, "+L+"%)",a["--border-control"]="hsl(45, 0%, "+w+"%)",p){var Z=_(45,0,D(45,0,8),30,92,!1,4.6),T=Math.min(96,Z+16);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+T+"%) 0%, hsl(45, 0%, "+Z+"%) 100%)"}else{var W=_(45,0,S,14,62,!0,4.6),ne=Math.max(12,W-5),le=Math.max(10,W-11);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ne+"%) 0%, hsl(45, 0%, "+le+"%) 100%)"}var Se=r(45,0,14,0,d);return a["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Se+5)+"%) 0%, hsl(45, 0%, "+Se+"%) 100%)",a["--panel-fg"]="hsl(45, 0%, 14%)",a}function G(a,p){let n=a||"light",h=p==null||p===""?null:p;if(e[a]){const j=e[a];n=j[0],h==null&&(h=j[1])}n==="system"&&(n=A()?"dark":"light");const ee=n==="dark";h=F(h??45);const N=h===R,x=document.documentElement;x.setAttribute("data-theme",ee?"dark-pro":"gold"),x.setAttribute("data-theme-mode",ee?"dark":"light"),x.setAttribute("data-theme-neutral",N?"true":"false");let m=ee?u(N?45:h):q(N?45:h);N&&(m=B(H(m),ee));for(var L=Object.keys(m),w=0;w<l.length;w++)L.indexOf(l[w])===-1&&x.style.removeProperty(l[w]);L.forEach(function(j){x.style.setProperty(j,m[j])}),l=L,f.mode=typeof a=="string"&&a?a:"light",f.hue=h,I(m,ee);try{localStorage.setItem("quant_theme_mode",ee?"dark":"light"),localStorage.setItem("quant_theme_hue",String(h))}catch{}return{mode:ee?"dark":"light",hue:h}}function X(){try{var a=localStorage.getItem("quant_theme_hue");if(a!==null&&a!=="")return F(a)}catch{}var p=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(p&&p.getPreference){var n=p.getPreference("theme_hue");if(n!=null&&n!=="")return F(n)}return null}function V(a){var p=X();return G(a,p??void 0)}function Q(){const a=localStorage.getItem("quant_theme");if(!a||!e[a]||localStorage.getItem("quant_theme_hue")!==null)return null;const p=e[a];return{mode:p[0],hue:p[1]}}function z(){const a=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let p=a.theme||"system",n=a.theme_hue!=null&&a.theme_hue!==""?a.theme_hue:null;const h=Q();return n==null&&h&&(p=h.mode,n=h.hue),n==null&&(n=45),E(),G(p,n)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:s,LEGACY_MAP:e,legacyThemes:v,NEUTRAL_HUE:R,generateLightTokens:q,generateDarkTokens:u,migrateLegacyTheme:Q,persistedHue:X,applyLegacyTheme:V,applyTheme:G,init:z},typeof queueMicrotask=="function"?queueMicrotask(z):z()})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const s="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],v={};let t=s,o=null;function d(){return o&&typeof o=="object"&&"value"in o?o.value||s:t}function b(k,S){return e.indexOf(k)===-1?!1:(v[k]=S&&typeof S=="object"?S:{},!0)}function c(k){const S=e.indexOf(k)!==-1?k:s;return t=S,o&&typeof o=="object"&&"value"in o&&(o.value=S),typeof document<"u"&&document.documentElement.setAttribute("lang",S),t}function i(){return d()}function g(k){if(k&&typeof k=="object"&&"value"in k){o=k;const S=e.indexOf(k.value)!==-1?k.value:s;k.value=S,t=S}return t}function r(k,S){const C=d(),_=v[C]||{};let D=k in _?_[k]:null;if(D==null&&C!=="en"){const q=v.en||{};D=k in q?q[k]:null}return D==null&&(D=String(k)),S&&typeof S=="object"&&Object.keys(S).forEach(function(q){D=D.replace(new RegExp("\\{"+q+"\\}","g"),String(S[q]))}),D}const P={DEFAULT_LOCALE:s,SUPPORTED_LOCALES:e,messages:v,registerLocale:b,setLocale:c,getLocale:i,bindLocale:g,t:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=P),P});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",s),s});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",s),s});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.Quantja=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",s),s});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.Quantko=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",s),s});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",s),s});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const s={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let v=[];function t(C){const _=String(C||"");let D="";for(const q of _){const u=s[q];u?D+=u.charAt(0):/[a-zA-Z0-9]/.test(q)&&(D+=q.toLowerCase())}return D}function o(C){const _=String(C||"");let D="";for(const q of _){const u=s[q];u?D+=u:/[a-zA-Z0-9]/.test(q)&&(D+=q.toLowerCase())}return D}function d(C){return String(C||"").trim().toLowerCase()}function b(C,_){const D=(_.code||"").toLowerCase();return/^\d+$/.test(C)?D.indexOf(C)!==-1:/[\u4e00-\u9fa5]/.test(C)?(_.name||"").toLowerCase().indexOf(C)!==-1:D.indexOf(C)!==-1||(_.initials||t(_.name)).indexOf(C)!==-1||(_.pinyin||o(_.name)).indexOf(C)!==-1}function c(C){const _={},D=[],q=function(u,l,f){!u||_[u]||(_[u]=!0,D.push({code:u,name:l||u,source:f||"core",initials:t(l||u),pinyin:o(l||u)}))};return e.forEach(function(u){q(u.code,u.name,"core")}),(C||[]).forEach(function(u){q(u.code,u.name,"extra")}),D}function i(C,_){const D=d(C);if(!D||!_||!_.length)return[];const q=D.split(/[\s,，、;；]+/).filter(Boolean);return q.length?_.filter(function(u){return q.every(function(l){return b(l,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function g(C){Array.isArray(C)&&(v=v.concat(C))}function r(){return v.slice()}function P(){return c(v)}function k(C){return i(C,P())}const S={CHAR_PINYIN:s,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:o,normalizeQuery:d,matchToken:b,buildStockIndex:c,searchStocksByQuery:i,registerExtraStocks:g,getExtraStocks:r,getStockIndex:P,searchCoreStocks:k};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=S),S});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const s="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},v=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function o(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const d={light:"classic-white",dark:"dark-pro"};function b(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(s);if(!l)return{};const f=JSON.parse(l);return f&&typeof f=="object"?f:{}}catch{return{}}}function c(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(l))}catch{}}function i(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const l=Object.assign({},e,b()),f={};return v.forEach(function(M){const I=l[M];f[M]=M==="theme_hue"?o(I)?parseInt(I,10):e[M]:t[M].indexOf(I)!==-1?I:e[M]}),f}function r(l){if(v.indexOf(l)!==-1)return g()[l]}function P(l,f){return v.indexOf(l)===-1?!1:l==="theme_hue"?o(f):t[l].indexOf(f)!==-1}function k(l,f){if(!P(l,f))return!1;const M=b();return M[l]=f,c(M),i()&&C({[l]:f}),!0}function S(l){if(!l||typeof l!="object")return!1;const f={};if(Object.keys(l).forEach(function(I){P(I,l[I])&&(f[I]=l[I])}),!Object.keys(f).length)return!1;const M=Object.assign({},b(),f);return c(M),i()&&C(f),!0}function C(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function _(){const l=g();if(!i()||typeof fetch>"u")return l;try{const f=await fetch("/api/user_config/preferences");if(f.ok){const M=await f.json();if(M.success&&M.preferences){const I=M.preferences;v.forEach(function(E){const A=I[E];if(E==="theme_hue"){o(A)&&(l[E]=parseInt(A,10));return}t[E].indexOf(A)!==-1&&(l[E]=A)}),c(l)}}}catch(f){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",f&&f.message)}return l}function D(l){const f=l||r("info_density")||"comfortable",M=t.info_density.indexOf(f)!==-1?f:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",M),M}function q(l){const f=l||r("theme")||"system";if(f==="system"){let M=!1;return typeof window<"u"&&window.matchMedia&&(M=window.matchMedia("(prefers-color-scheme: dark)").matches),M?"dark":"light"}return f==="dark"||f==="light"?f:"light"}const u={PREFERENCES_KEY:s,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:v,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:g,getPreference:r,isValidValue:P,setPreference:k,setPreferences:S,saveToBackend:C,loadPreferences:_,resolveTheme:q,applyDensity:D};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const s="quant_recent_viewed";function v(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(s);if(!g)return[];const r=JSON.parse(g);return Array.isArray(r)?r:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(g))}catch{}}function o(g,r){if(!g)return!1;let P=v().filter(function(k){return k.code!==g});return P.unshift({code:g,name:(r||"").toString().slice(0,32),ts:Date.now()}),P.length>10&&(P=P.slice(0,10)),t(P),!0}function d(){return v().slice(0,10)}function b(g){t(v().filter(function(r){return r.code!==g}))}function c(){t([])}const i={RECENT_VIEWED_KEY:s,RECENT_MAX:10,recordViewed:o,getRecentViewed:d,removeRecent:b,clearRecent:c};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=i),i});(function(){const s=typeof Vue<"u"?Vue:{},{ref:e,computed:v,watch:t,onMounted:o,nextTick:d}=s;function b(m,L={}){if(typeof m=="string"&&m.startsWith("/api/")){const w=localStorage.getItem("quant_token");if(w)return{...L,headers:{...L.headers||{},Authorization:"Bearer "+w}}}return L}async function c(m,L={}){const w=b(m,L),j={"Content-Type":"application/json",...w.headers},ae=(L.method||"GET").toUpperCase(),Z=ae+"|"+m,T=async()=>{const W=await fetch(m,{...w,headers:j});if(W.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!W.ok){let ne="";try{const le=await W.json();ne=le&&le.detail||""}catch{}throw Object.assign(new Error(ne||"请求失败（HTTP "+W.status+"）"),{status:W.status})}return await W.json()};try{const W=L.noLoading?T:()=>f(T);return ae==="GET"&&!L.noDedupe?await D(Z,W):await W()}catch(W){throw W.message==="登录已过期"?W:(console.error("[apiFetch] "+m+":",W.message),Object.assign(W,{_formatted:M(W,W.status)}))}}function i(){return new Date().toISOString().split("T")[0]}function g(m){return m?m.split("T")[0]:""}function r(m,L="info",w=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const ae=document.createElement("div");ae.className=`toast toast-${L}`,ae.textContent=m,j.appendChild(ae),setTimeout(()=>{ae.classList.add("leaving"),setTimeout(()=>ae.remove(),300)},w)}function P(m,L=300){let w;return function(...j){clearTimeout(w),w=setTimeout(()=>m.apply(this,j),L)}}function k(m,L=300){let w=!1;return function(...j){w||(m.apply(this,j),w=!0,setTimeout(()=>{w=!1},L))}}async function S(m,L=3e3,w=""){const j=new Promise((ae,Z)=>setTimeout(()=>Z(new Error("timeout")),L));try{return await Promise.race([m,j])}catch(ae){console.warn(`[timeout] ${w||"task"} failed:`,ae.message)}}const C=new Map;function _(){return C.clear(),!0}function D(m,L){if(!m||typeof L!="function")return Promise.reject(new Error("bad dedupe args"));if(C.has(m))return C.get(m);const w=Promise.resolve().then(L).finally(()=>{C.delete(m)});return C.set(m,w),w}let q=0;function u(){return q=0,!0}function l(){return q}async function f(m){q++;try{return await m()}finally{q--}}function M(m,L){if(!m)return"请求失败";if(m&&typeof m=="object"&&m.detail)return String(m.detail);if(typeof m=="string"&&m)return m;if(m&&m.message){const w=String(m.message);return/Failed to fetch|fetch failed|networkerror/i.test(w)?"网络连接失败，请检查网络后重试":w}return L?"请求失败（HTTP "+L+"）":"请求失败"}function I(m,L){if(m===L)return!0;try{return JSON.stringify(m)===JSON.stringify(L)}catch{return!1}}function E(m,L,w){const j=(m||"GET").toUpperCase();let ae="";if(w)try{const Z={};Object.keys(w).sort().forEach(T=>{Z[T]=w[T]}),ae=JSON.stringify(Z)}catch{ae=""}return j+"|"+L+"|"+ae}class A{constructor(){this._map=new Map,this._exp=new Map}get(L){const w=this._exp.get(L);if(w!=null){if(Date.now()>w){this.delete(L);return}return this._map.get(L)}}set(L,w,j){return this._map.set(L,w),this._exp.set(L,Date.now()+(j>0?j:-1)),w}delete(L){this._map.delete(L),this._exp.delete(L)}clear(){this._map.clear(),this._exp.clear()}has(L){return this.get(L)!==void 0}get size(){return this._map.size}}function R(m){const L=new A,w=m!=null&&m>0?m:15e3;return{store:L,defaultTtl:w,get:j=>L.get(j),set:(j,ae,Z)=>L.set(j,ae,Z??w),delete:j=>L.delete(j),clear:()=>L.clear(),size:()=>L.size}}const F=new Set;async function H(m){const L=m&&m.cache,w=m&&m.key,j=m&&(m.fetchFn||m.fetcher),ae=m&&m.ttl;if(!L||!w||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(F.has(w))return{ok:!1,changed:!1,skipped:!0,fresh:null};F.add(w);try{const Z=L.get(w);let T;try{T=await j()}catch(ne){return m.onError&&m.onError(ne),{ok:!1,changed:!1,fresh:null}}const W=Z!==void 0&&!I(Z,T);return L.set(w,T,ae),m.apply&&m.apply(T,Z),Z!==void 0&&(W?m.onChanged&&m.onChanged(T,Z):m.onUnchanged&&m.onUnchanged(T,Z)),{ok:!0,changed:W,fresh:T}}finally{F.delete(w)}}const B=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function G(m,L={}){if(m==null)return"";const w=L&&L.allow||B,j=new Set(w.map(W=>String(W).toUpperCase()));let ae;try{ae=new DOMParser().parseFromString(String(m),"text/html")}catch{return String(m).replace(/[<>&]/g,ne=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ne])}const Z=ae.body||ae;function T(W){Array.from(W.childNodes).forEach(ne=>{if(ne.nodeType===1){const le=String(ne.tagName).toUpperCase();if(j.has(le))Array.from(ne.attributes).forEach(Se=>{const $=Se.name.toLowerCase(),re=(Se.value||"").trim().toLowerCase();($.startsWith("on")||($==="href"||$==="src"||$==="xlink:href")&&re.startsWith("javascript:")||$==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(re))&&ne.removeAttribute(Se.name),$==="href"&&!/^(https?:|mailto:|#|\/)/.test(re)&&ne.removeAttribute("href")}),le==="A"&&ne.setAttribute("rel","noopener noreferrer"),T(ne);else{const Se=ne.parentNode;for(;ne.firstChild;)Se.insertBefore(ne.firstChild,ne);Se.removeChild(ne)}}else if(ne.nodeType!==3){if(ne.nodeType===8)ne.parentNode&&ne.parentNode.removeChild(ne);else if(ne.nodeType===4){const le=ae.createTextNode(ne.nodeValue||"");ne.parentNode&&ne.parentNode.replaceChild(le,ne)}}})}return T(Z),Z.innerHTML}const X="/api/openapi",V="/api/market/ws/quotes",Q=1,z=2.5,a="数据不可达",p="实时不可用，不刷新";function n(){const m=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",L=typeof location<"u"?location.host:"localhost:8001";return m+"//"+L+V}function h(m,L){if(!m)return null;const w=L||{riseSpeed:Q,volumeRatio:z},j=w.riseSpeed!=null?w.riseSpeed:Q,ae=w.volumeRatio!=null?w.volumeRatio:z,Z=parseFloat(m.rise_speed);if(!isNaN(Z)&&Math.abs(Z)>j)return Z>0?"涨速预警":"跌速预警";const T=parseFloat(m.volume_ratio);return!isNaN(T)&&T>ae?"放量预警":null}function ee(m){const L=Number(m);return m==null||isNaN(L)?null:L}const x={apiFetch:c,withAuthHeaders:b,getToday:i,formatDate:g,withTimeout:S,showToast:r,debounce:P,throttle:k,resetInFlight:_,dedupeRequest:D,resetLoading:u,loadingCount:l,withLoading:f,formatApiError:M,jsonEquals:I,makeCacheKey:E,CacheStore:A,createTtlCache:R,silentRefresh:H,sanitizeHtml:G,OPENAPI_ROUTE_BASE:X,REALTIME_WS_PATH:V,WARN_RISE_SPEED_THRESHOLD:Q,WARN_VOLUME_RATIO_THRESHOLD:z,REALTIME_DEGRADED_TEXT:a,REALTIME_FALLBACK_TEXT:p,buildRealtimeWsUrl:n,checkQuoteWarning:h,quoteFmt:{price:function(m){const L=ee(m);return L===null?"--":L.toFixed(2)},pct:function(m){const L=ee(m);return L===null?"--":(L>0?"+":"")+L.toFixed(2)+"%"},num:function(m){const L=ee(m);return L===null?"--":L.toFixed(2)},color:function(m){const L=m?m.change_pct:null,w=ee(L);return w===null?"":w>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=x),typeof Te<"u"&&Te.exports&&(Te.exports=x)})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(P,k){return P+"/"+k}function v(P,k,S,C){var _=P[k]||[],D=_.findIndex(function(l){return l.subPage===S});if(D!==-1)return{groups:P,activeKey:e(k,S)};var q=_.concat([{subPage:S,title:C}]);q.length>s&&(q=o(q));var u=Object.assign({},P,t({},k,q));return{groups:u,activeKey:e(k,S)}}function t(P,k,S){return P[k]=S,P}function o(P){if(P.length<=s)return P;var k=P.length>1?1:0;return P.filter(function(S,C){return C!==k})}function d(P,k,S,C){var _=P[k]||[],D=_.findIndex(function(f){return f.subPage===S});if(D===-1)return{groups:P,nextActive:null};var q=_.filter(function(f){return f.subPage!==S}),u=Object.assign({},P,t({},k,q)),l=null;return S===C&&(q[D]?l=q[D].subPage:q[D-1]?l=q[D-1].subPage:l=null),{groups:u,nextActive:l}}function b(P){return P&&P.length?P[0]:""}function c(P,k){return P[k]||[]}function i(P,k,S){var C=P[k]||[],_=C.filter(function(q){return q.subPage===S}),D=Object.assign({},P,t({},k,_));return{groups:D,activeKey:_.length?e(k,_[0].subPage):null}}function g(P,k){var S=Object.assign({},P,t({},k,[]));return{groups:S,activeKey:null}}function r(P,k,S,C){var _=(P[k]||[]).slice();if(S<0||S>=_.length)return{groups:P};var D=_.splice(S,1)[0];return _.splice(Math.max(0,Math.min(C,_.length)),0,D),{groups:Object.assign({},P,t({},k,_))}}return{MAX_TABS:s,openTab:v,closeTab:d,getDefaultTab:b,tabsOf:c,evictOldest:o,closeOthers:i,closeAll:g,reorder:r,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Us=typeof Te=="object"&&Te.exports?Te.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;Us&&(window.__quantModules.tabsCore=Us)}(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var s=["subnav","tree","toptab"],e="toptab",v="nav_mode";function t(r){return s.indexOf(r)!==-1?r:e}function o(r){return t(r)==="subnav"}function d(r){return t(r)==="tree"}function b(r){return t(r)==="toptab"}function c(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function i(){var r=c(),P=e;if(r)try{P=t(r.getItem(v))}catch{}return{navMode:P}}function g(r){var P=c();if(!(!P||!r))try{r.navMode!==void 0&&P.setItem(v,t(r.navMode))}catch{}}return{NAV_MODES:s,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:o,treeChildrenVisible:d,topTabsVisible:b,readPrefs:i,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Gs=typeof Te=="object"&&Te.exports?Te.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;Gs&&(window.__quantModules.navModeCore=Gs)}(function(){function e(n,h){if(!Array.isArray(n)||n.length<=h)return n;const ee=[],N=n.length/h*2;for(let x=0;x<n.length;x+=N){const m=Math.floor(x),L=Math.min(n.length,Math.ceil(x+N));let w=1/0,j=-1,ae=-1/0,Z=-1;for(let T=m;T<L;T++){const W=n[T];if(!W)continue;const ne=W[3]!=null?Number(W[3]):1/0,le=W[4]!=null?Number(W[4]):-1/0;ne<w&&(w=ne,j=T),le>ae&&(ae=le,Z=T)}j>=0&&ee.push(n[j]),Z>=0&&Z!==j&&ee.push(n[Z])}return ee}let v=null;function t(){return typeof echarts<"u"?Promise.resolve():(v||(v=new Promise(function(n,h){const ee=document.createElement("script");ee.src="/static/lib/echarts.min.js",ee.async=!0,ee.onload=function(){typeof echarts<"u"?n():h(new Error("echarts 加载后未定义"))},ee.onerror=function(){h(new Error("echarts.min.js 加载失败"))},document.head.appendChild(ee)})),v)}function o(){const n=getComputedStyle(document.documentElement);return{primary:n.getPropertyValue("--primary-color").trim()||"#2563eb",up:n.getPropertyValue("--color-up").trim()||"#43e97b",down:n.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:n.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:n.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=n=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim()}catch{return""}};function b(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function c(n,h,ee,N=!1,x=!1){if(!h||h.length===0)return;h.length>2e3&&(h=e(h,2e3));const m=h.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),L=o(),w={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},j=h.map(se=>[se[1],se[2],se[3],se[4]]),ae=h.map(se=>se[5]),Z=h.map(se=>se[6]),T=h.map(se=>se[7]),W=h.map(se=>se[8]),ne=h.map(se=>se[9]),le=h.map(se=>se[10]),$=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",re=L.borderLight,Pe={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:L.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:$,borderColor:re,textStyle:{color:L.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const me=se[0].dataIndex,Me=h[me];if(!Me)return"";const oe=n.getOption(),fe=oe.legend&&oe.legend[0]&&oe.legend[0].selected||{},ke=Ne=>fe[Ne]!==!1,ie=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),te=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",ve=['<div style="font-weight:600;color:'+L.textSecondary+';">'+m[me]+"</div>"];return ve.push("开: "+ie(Me[1])+"　收: "+ie(Me[2])),ve.push("低: "+ie(Me[3])+"　高: "+ie(Me[4])),ve.push("成交量: "+te(Me[5])),Me[6]!=null&&ke("MA5")&&ve.push("MA5: "+ie(Me[6])),Me[7]!=null&&ke("MA10")&&ve.push("MA10: "+ie(Me[7])),Me[8]!=null&&ke("MA20")&&ve.push("MA20: "+ie(Me[8])),Me[9]!=null&&ke("MA60")&&ve.push("MA60: "+ie(Me[9])),Me[10]!=null&&ve.push("VOL_MA5: "+te(Me[10])),ve.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:x?0:8,textStyle:{color:L.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:x?30:40,height:x?"48%":"52%"},{left:56,right:16,top:x?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:m,boundaryGap:!0,axisLine:{lineStyle:{color:re}},axisLabel:{color:L.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:m,axisLabel:{show:!1},axisLine:{lineStyle:{color:re}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:re}},axisLabel:{color:L.textSecondary,fontSize:11,formatter:function(se){const me=Math.round(se*100)/100;return me%1===0?String(Math.round(me)):me.toFixed(2)}},splitLine:{lineStyle:{color:re,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:re}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,h.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:re,textStyle:{color:L.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:L.up,color0:L.down,borderColor:L.up,borderColor0:L.down}},{name:"MA5",type:"line",data:Z,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma5}},{name:"MA10",type:"line",data:T,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma10}},{name:"MA20",type:"line",data:W,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma20}},{name:"MA60",type:"line",data:ne,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ae,itemStyle:{color:function(se){const me=se.dataIndex;return h[me][1]>=h[me][2]?L.up:L.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:le,smooth:!0,symbol:"none",lineStyle:{width:1,color:w.ma5,type:"dashed"}}]};n.setOption(Pe,!0)}const i=new Map;function g(n){return i.has(n)||i.set(n,{chart:null,cache:null}),i.get(n)}async function r(n,h,ee,N=!1,x={}){await t();const m=g(n);let L=document.getElementById(n);if(!L)for(let w=0;w<16&&(await new Promise(j=>setTimeout(j,50)),L=document.getElementById(n),!L);w++);if(!L)throw new Error("无法找到图表容器: "+n);if(L.offsetWidth<50&&(L.style.minWidth="600px",L.style.minHeight="300px"),!m.chart||m.chart.isDisposed()||m.chart.getDom()!==L){if(m.chart)try{m.chart.dispose()}catch{}m.chart=echarts.init(L),m.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const w=x.onLegend;typeof w=="function"&&m.chart.on("legendselectchanged",j=>{j&&j.selected&&w(j.selected)})}return c(m.chart,h,ee,N,!!x.isMobile),m.cache={data:h,period:ee,isIndex:N,isMobile:!!x.isMobile},m.chart}function P(n){const h=i.get(n);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function k(n){const h=i.get(n);h&&h.chart&&h.chart.resize()}function S(n,h){const ee=i.get(n),N=ee&&ee.chart;if(N)if(h<=0)N.dispatchAction({type:"dataZoom",start:0,end:100});else{const L=Math.max(0,(60-h)/60*100);N.dispatchAction({type:"dataZoom",start:Math.round(L),end:100})}}function C(n){var N,x,m;const h=i.get(n);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const ee=((m=(x=(N=h.chart.getOption())==null?void 0:N.legend)==null?void 0:x[0])==null?void 0:m.selected)||null;c(h.chart,h.cache.data,h.cache.period,h.cache.isIndex,h.cache.isMobile),ee&&h.chart.setOption({legend:{selected:ee}})}function _(n){const h=i.get(n);return h&&h.chart}const D=new Map;function q(n){return D.has(n)||D.set(n,{chart:null,cache:null}),D.get(n)}function u(n,h,ee={}){return t().then(function(){const N=q(n),x=document.getElementById(n);if(!x)throw new Error("无法找到图表容器: "+n);if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const m=typeof h=="function"?h():h;return N.chart.setOption(m,!0),N.cache={buildOption:h,key:ee.key||""},N.chart})}function l(n){var x,m,L;const h=D.get(n);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const ee=((L=(m=(x=h.chart.getOption())==null?void 0:x.legend)==null?void 0:m[0])==null?void 0:L.selected)||null,N=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(N,!0),ee&&N&&N.legend&&N.legend.selected&&h.chart.setOption({legend:{selected:ee}})}function f(n){const h=D.get(n);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function M(n){const h=D.get(n);h&&h.chart&&h.chart.resize()}const I=new Map;function E(n){return I.has(n)||I.set(n,{chart:null,cache:null}),I.get(n)}function A(n,h,ee={}){return t().then(function(){const N=E(n),x=document.getElementById(n);if(!x)return null;if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const m=typeof h=="function"?h():h;return N.chart.setOption(m,!0),N.cache={buildOption:h,key:ee.key||""},N.chart})}function R(n){const h=I.get(n);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const ee=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(ee,!0)}function F(n){const h=I.get(n);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function H(n){const h=I.get(n);h&&h.chart&&h.chart.resize()}const B=A,G=R,X=F,V=H;function Q(n,h,ee,N){N=N||{};const x=N.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[N.navLabel||"净值",N.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:ee||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:N.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:N.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:N.navLabel||"净值",type:"line",data:n||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:N.ddLabel||"回撤",type:"line",yAxisIndex:1,data:h||[],showSymbol:!1,areaStyle:{opacity:.25,color:x},lineStyle:{color:x,type:"solid",width:1.5}}]}}function z(n,h){h=h||{};const ee=h.bandColor||d("--state-info-solid")||"#1976d2",N=n&&n.dates||[],x=n&&n.median||[],m=n&&n.q25||[],L=n&&n.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[h.medianLabel||"中位IC",h.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:h.medianLabel||"中位IC",type:"line",data:x,showSymbol:!1,lineStyle:{width:2,color:ee}},{name:h.bandLabel||"25–75分位",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ee,opacity:.12}},{name:"_bandH",type:"line",data:L.map(function(w,j){return w-(m[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ee,opacity:.12}}]}}function a(n,h){h=h||{};const ee=h.color||d("--color-ai")||"#7c3aed",N=n&&n.dates||[],x=n&&n.value||[],m=n&&n.upper||[],L=n&&n.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[h.valueLabel||"情绪",h.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:h.valueLabel||"情绪",type:"line",data:x,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:ee}},{name:h.bandLabel||"过热/冰点带",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ee,opacity:.1}},{name:"_bandL",type:"line",data:L.map(function(w,j){return(m[j]||0)-w}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ee,opacity:.1}}]}}const p={renderKlineChart:c,renderKlineTo:r,disposeKline:P,resizeKline:k,zoomKline:S,redrawKline:C,getKlineChart:_,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:f,resizeBacktest:M,renderPortfolioTo:A,redrawPortfolio:R,disposePortfolio:F,resizePortfolio:H,renderSimpleChartTo:B,redrawSimpleChart:G,disposeSimpleChart:X,resizeSimpleChart:V,buildNavDrawdownOption:Q,buildIcBandOption:z,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b,init(){return{renderKlineChart:c,renderKlineTo:r,disposeKline:P,resizeKline:k,zoomKline:S,redrawKline:C,getKlineChart:_,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:f,resizeBacktest:M,renderPortfolioTo:A,redrawPortfolio:R,disposePortfolio:F,resizePortfolio:H,renderSimpleChartTo:B,redrawSimpleChart:G,disposeSimpleChart:X,resizeSimpleChart:V,buildNavDrawdownOption:Q,buildIcBandOption:z,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=p),typeof Te<"u"&&Te.exports&&(Te.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:Q,buildIcBandOption:z,buildSentimentBandOption:a})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(s){const{ref:e,computed:v}=Vue,{configChanged:t,consensus:o}=s,d=e(null),b=e(""),c=e(null),i=e([]),g=e([]),r=e([]),P=e([]),k=e([]),S=e([]),C=e({});function _(he){const xe=k.value.indexOf(he);xe>=0?k.value.splice(xe,1):k.value.push(he)}const D=e("date"),q=e([]),u=e(!1),l=e(!1),f=e("watchlist"),M=e([]),I=e({vendors:[]}),E=e(""),A=e(!1),R=e(!1);function F(he){if(!he)return"";const xe=String(he),Re=xe.length;if(Re<=4)return xe[0]+"*".repeat(Re-1);const De=Re<=8?2:4;return xe.slice(0,De)+"*".repeat(Re-De-De)+xe.slice(-De)}async function H(he){let xe;try{xe=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const De=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:xe,target:he})})).json();if(De.success)return De.secret;ElementPlus.ElMessage.error(De.message||"查看失败")}catch(Re){ElementPlus.ElMessage.error("查看失败: "+Re.message)}return null}async function B(he){if(he._revealed){he._revealed=!1,he._masked=F(he.api_key);return}const xe=await H("ai:"+he.vendor_key);xe!==null&&(he.api_key=xe,he._revealed=!0)}async function G(he){if(he._editing){he._editing=!1,he._revealed=!1,he.api_key&&(he._masked=F(he.api_key));return}he._editing=!0;try{const Re=await(await fetch("/api/ai/models?full=1")).json();if(Re.success){const De=(Re.data.vendors||[]).find(We=>We.vendor_key===he.vendor_key);De&&(he.api_key=De.api_key||"")}else Re.message&&ElementPlus.ElMessage.error(String(Re.message))}catch(xe){ElementPlus.ElMessage.error("解锁失败: "+xe.message)}}function X(he){const{_fetching:xe,_testing:Re,_revealed:De,_masked:We,_editing:Ge,...Ye}=he;return Ge||(Ye.api_key=""),Ye.models=(he.models||[]).map(Je=>{const{_testing:tt,testResult:ue,...ye}=Je;return ye}),Ye}async function V(){var he;try{E.value="";const xe=await fetch("/api/ai/models");if(xe.status===401){E.value="请先登录后再查看模型配置";return}if(!xe.ok){E.value=`服务器错误 (${xe.status})`;return}const Re=await xe.json();Re.success?(M.value=(((he=Re.data)==null?void 0:he.vendors)||[]).map(De=>({...De,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:De.api_key||"",models:(De.models||[]).map(We=>({...We,_testing:!1,testResult:void 0}))})),E.value=""):E.value=Re.message||"加载失败"}catch(xe){E.value="网络错误: "+xe.message}}async function Q(){try{const xe=await(await fetch("/api/ai/catalog")).json();xe.success&&xe.data&&(I.value=xe.data)}catch(he){console.warn("AI 厂商目录加载失败",he)}}async function z(){R.value=!0;try{const Re=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:M.value.map(X)})})).json();Re.success?(M.value.forEach(De=>{De._editing=!1,De._revealed=!1,De.api_key&&(De._masked=F(De.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Re.message||"保存失败")}catch(he){ElementPlus.ElMessage.error("保存失败: "+he.message)}R.value=!1}async function a(he,xe){xe._testing=!0;try{const De=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,model:xe.name,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})});xe.testResult=await De.json()}catch(Re){xe.testResult={success:!1,message:Re.message}}xe._testing=!1}async function p(){A.value=!0;for(const he of M.value)for(const xe of he.models||[])he.api_key?await a(he,xe):xe.testResult={success:!1,message:"未配置 API Key"};A.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function n(he){he._fetching=!0;try{const De=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})})).json();if(De.success&&Array.isArray(De.models)){const We=new Set((he.models||[]).map(Ge=>Ge.name));for(const Ge of De.models)We.has(Ge)||he.models.push({name:Ge,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${De.models.length} 个模型`)}else ElementPlus.ElMessage.error(De.message||"获取模型列表失败")}catch(xe){ElementPlus.ElMessage.error("获取模型列表失败: "+xe.message)}he._fetching=!1}function h(he){const xe=(I.value.vendors||[]).find(Re=>Re.vendor_key===he);if(xe){if(M.value.some(Re=>Re.vendor_key===he)){ElementPlus.ElMessage.warning("该厂商已存在");return}M.value.push({vendor_key:xe.vendor_key,name:xe.name,kind:xe.kind,base_url:xe.base_url,api_key:"",timeout:60,tier:xe.tier||"",website:xe.website||"",locked:!!xe.locked,models:(xe.models||[]).map(Re=>({name:Re,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${xe.name}」，配置 API Key 后保存生效`)}}function ee(){M.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function N(he){he.models||(he.models=[]),he.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function x(he,xe){const Re=he.models[xe];if(!(!Re||Re.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Re.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}he.models.splice(xe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function m(he){if(he.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(he.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const xe=M.value.indexOf(he);xe>=0&&M.value.splice(xe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const L=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),w=e(!1),j=e(""),ae=e(0),Z=e(""),T=e(!1),W=e(""),ne=e(!1),le=e(0),Se=e(0),$=e(""),re=e({}),Pe=e({}),se=e({}),me=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Me=e("manual"),oe=v(()=>{const he={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return he[me.value.provider]||he.custom}),fe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ke(he){if(he==="manual")return;const xe=fe[he];xe&&(me.value.endpoint=xe.endpoint,me.value.model=xe.model,t.value=!0)}function ie(){if(t.value=!0,me.value.provider!=="codingplan"&&me.value.provider!=="custom"){const he=oe.value;he&&(me.value.endpoint=he.endpoint,me.value.model=he.model)}else me.value.provider==="codingplan"&&(me.value.endpoint||(me.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),me.value.model||(me.value.model="ark-code-latest"))}let te=null;const ve=8;async function Ne(){te&&(te.abort(),te=null);const xe=(o.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!C.value[Ye.code]);if(xe.length===0)return;const Re=new AbortController;te=Re;let De=0;const We=async()=>{for(;De<xe.length;){const Ye=xe[De++];try{const tt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Re.signal})).json();tt.success&&tt.signal&&(C.value={...C.value,[Ye.code]:tt.signal})}catch(Je){if(Je.name==="AbortError")return}}},Ge=Array.from({length:Math.min(ve,xe.length)},()=>We());await Promise.all(Ge)}function Ae(){te&&(te.abort(),te=null)}let Ue=0;async function Ze(he){const xe=++Ue;try{const De=await(await fetch(`/api/ai/history/last/${encodeURIComponent(he)}`)).json();if(xe!==Ue)return;De.success&&De.data&&(d.value=De.data,b.value=De.data.evaluate_time,et(he,De.data),$e(De.data))}catch{}}async function et(he,xe){var Re,De;try{const Ge=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(he)}&limit=2`)).json();if(Ge.success&&Ge.data&&Ge.data.length>=2){const Ye=Ge.data[1],Je=((Re=xe.result)==null?void 0:Re.total_score)||0,tt=((De=Ye.result)==null?void 0:De.total_score)||0;Je>0&&tt>0&&(c.value={prevScore:tt,currScore:Je,diff:Je-tt})}}catch(We){console.warn("[refreshStrategyData] autoPoll failed:",We)}}function $e(he){var We;const xe=((We=he.result)==null?void 0:We.dimensions)||{},Re=[],De=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ge of De){const Ye=xe[Ge.key];Ye!==void 0&&Re.push({icon:Ye>=Ge.good?"check-circle-2":Ye>=Ge.warn?"alert-triangle":"x-circle",label:`${Ge.label} ${Math.round(Ye)}分`})}i.value=Re}return{aiResult:d,lastEvalTime:b,evalHistoryComparison:c,checklistItems:i,aiHistory:g,selectedHistoryIds:r,expandedDates:P,expandedMonths:k,expandedStocks:S,poolSignals:C,toggleMonthExpand:_,aiHistoryView:D,selectedWatchlistCodes:q,showAutoEvaluateSettings:u,savingConfig:l,autoEvaluateScope:f,aiVendors:M,aiCatalog:I,aiModelsError:E,testingAllModels:A,savingAiModels:R,loadAiVendors:V,loadAiCatalog:Q,saveAiVendors:z,saveAiModels:z,testVendorModel:a,testAllVendorModels:p,fetchVendorModels:n,addVendorFromCatalog:h,addCustomVendor:ee,addVendorModel:N,removeVendorModel:x,removeVendor:m,toggleVendorKeyReveal:B,toggleVendorEdit:G,autoEvaluateConfig:L,aiLoading:w,aiEvalStage:j,aiEvalElapsed:ae,aiEvalError:Z,showBatchEvaluate:T,batchStocks:W,batchRunning:ne,batchTotal:le,batchCompleted:Se,batchCurrent:$,batchStatuses:re,batchResults:Pe,batchEvalErrors:se,aiConfig:me,selectedPreset:Me,providerInfo:oe,aiPresets:fe,applyPreset:ke,onProviderChange:ie,fetchPoolSignals:Ne,cancelPoolSignals:Ae,loadLastEvaluation:Ze}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(s){const{ref:e,computed:v,watch:t}=Vue,{configChanged:o,aiConfig:d,aiLoading:b,feishuConfig:c,currentTheme:i,changeTheme:g,autoEvaluateConfig:r,currentUser:P,strategyFilter:k,applyTheme:S,dashboardData:C,lastRefreshTime:_,saveAiModels:D}=s,q=function(ie){const te=window.__quantModules&&window.__quantModules.themes;return te&&te.applyLegacyTheme?te.applyLegacyTheme(ie):S(ie)},u=e(!1),l=e(!1),f=e(null),M=e(null),I=e(null),E=e(null),A=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),R=e("disconnected"),F=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),H=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),B=e(!1),G=e(null),X=e(null),V=e("pending"),Q=e("..."),z=e(!1),a=e({api_limit:600}),p=e(!1),n=e(!1);async function h(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(a.value=te.data)}catch(ie){console.warn("loadRateLimit failed:",ie)}}async function ee(){n.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)})).json();te.success?(p.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{o.value=!0},{deep:!0});async function N(){u.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(o.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ie){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ie)}finally{u.value=!1}}async function x(){b.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{b.value=!1}}function m(){const ie={ai:d.value,feishu:c.value,theme:i.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(ie,null,2)],{type:"application/json"}),ve=URL.createObjectURL(te),Ne=document.createElement("a");Ne.href=ve,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(ve),ElementPlus.ElMessage.success("配置已导出")}function L(ie){const te=ie.target.files[0];if(!te)return;const ve=new FileReader;ve.onload=async Ne=>{try{const Ae=JSON.parse(Ne.target.result);Ae.ai&&(d.value={...d.value,...Ae.ai},await N()),Ae.feishu&&(Object.assign(c.value,Ae.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ae.feishu)})),Ae.theme&&(i.value=Ae.theme,g(Ae.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ve.readAsText(te),ie.target.value=""}async function w(){u.value=!0;const ie=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:A.value,feishu:c.value,ai:d.value,rate_limit:a.value,auto_evaluate:r.value,theme:i.value}})}).then(Ae=>["userConfig",Ae.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)}).then(Ae=>["tushare",Ae.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:F.value})}).then(Ae=>["datasource",Ae.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)}).then(Ae=>["feishu",Ae.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Ae=>["ai",Ae.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)}).then(Ae=>["rateLimit",Ae.ok]),D().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(ie),ve=te.filter(Ae=>Ae.status==="fulfilled"&&Ae.value[1]).length,Ne=te.filter(Ae=>Ae.status==="rejected"||Ae.status==="fulfilled"&&!Ae.value[1]).length;p.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(k.value.selected)),localStorage.setItem("quant_strategy_filter_mode",k.value.mode),P.value&&fetch(`/api/users/${P.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:i.value})}).catch(()=>{}),l.value=!1,f.value=new Date().toLocaleString("zh-CN"),u.value=!1,Ne>0&&console.error(`[saveAllConfig] ${ve}/${ve+Ne} 项保存成功，${Ne} 项失败`)}async function j(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ve=te.config;ve.tushare&&(A.value={...A.value,...ve.tushare}),ve.feishu&&(c.value={...c.value,...ve.feishu}),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(a.value={...a.value,...ve.rate_limit}),ve.auto_evaluate&&(r.value={...r.value,...ve.auto_evaluate}),ve.theme&&!localStorage.getItem("quant_theme")&&q(ve.theme)}l.value=!1,p.value=!1}catch(ie){console.error("[resetAllConfig] 重新加载配置失败:",ie),l.value=!1}}async function ae(){R.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(R.value=te.success?"connected":"disconnected",te.success){const ve=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ve)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{R.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function Z(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();R.value=te.success?"connected":"disconnected"}catch{R.value="disconnected"}}async function T(){var ie;B.value=!0;try{const ve=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ve.success?(G.value=parseInt(((ie=ve.message.match(/\d+/))==null?void 0:ie[0])||"0"),ElementPlus.ElMessage.success(ve.message)):ElementPlus.ElMessage.error(ve.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{B.value=!1}}async function W(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(A.value={...A.value,...te.config})}catch(ie){console.warn("loadTushareConfig failed:",ie)}}function ne(ie){if(!ie)return"";const te=String(ie),ve=te.length;if(ve<=4)return te[0]+"*".repeat(ve-1);const Ne=ve<=8?2:4;return te.slice(0,Ne)+"*".repeat(ve-Ne-Ne)+te.slice(-Ne)}async function le(ie){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:ie})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(ve){ElementPlus.ElMessage.error("查看失败: "+ve.message)}return null}async function Se(ie){const te=F.value[ie];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=ne(te.token);return}const ve=await le(ie);ve!==null&&(te.token=ve,te._revealed=!0)}async function $(ie){const te=F.value[ie];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=ne(te.token));return}te._editing=!0;try{const ve=await le(ie);if(ve===null){te._editing=!1;return}te.token=ve,te._revealed=!0}catch(ve){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ve.message)}}}async function re(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const ve=te.config.sources,Ne=Ae=>{const Ue={...F.value[Ae],...ve[Ae]||{}};return Ue._editing=!1,Ue._revealed=!1,Ue._masked=Ue.token||"",Ue.token="",Ue};F.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...F.value.akshare,...ve.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ae,Ue]of Object.entries(Ne.status))H.value[Ae]=Ue.connected?"connected":"disconnected"}catch{}}catch(ie){console.warn("loadDatasourceConfig failed:",ie)}}async function Pe(){try{const ie={};for(const[te,ve]of Object.entries(F.value)){const{_revealed:Ne,_masked:Ae,_editing:Ue,...Ze}=ve;!Ue&&te!=="akshare"&&(Ze.token=""),ie[te]=Ze}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ie})}),l.value=!0}catch(ie){console.warn("saveDatasourceConfig failed:",ie)}}async function se(ie){H.value[ie]="testing";try{const te=F.value[ie];te&&te._editing&&await Pe();const Ne=await(await fetch(`/api/market/datasource/test/${ie}`,{method:"POST"})).json();H.value[ie]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ie} 连接成功`):ElementPlus.ElMessage.error(`${ie}: ${Ne.message}`)}catch{H.value[ie]="disconnected",ElementPlus.ElMessage.error(`${ie} 连接失败`)}}async function me(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(c.value={...c.value,...te},M.value=JSON.parse(JSON.stringify(c.value)))}catch(ie){console.warn("loadFeishuConfig failed:",ie)}}async function Me(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)d.value={...d.value,...te.data};else{const ve=localStorage.getItem("quant_ai_config");ve&&(d.value=JSON.parse(ve))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(d.value=JSON.parse(te))}}async function oe(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ve=te.config;ve.tushare&&(A.value={...A.value,...ve.tushare}),ve.datasource&&ve.datasource.sources&&(F.value={sxsc_tushare:{...F.value.sxsc_tushare,...ve.datasource.sources.sxsc_tushare||{}},tushare:{...F.value.tushare,...ve.datasource.sources.tushare||{}},akshare:{...F.value.akshare,...ve.datasource.sources.akshare||{}}}),ve.feishu&&(c.value={...c.value,...ve.feishu},M.value=JSON.parse(JSON.stringify(c.value))),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(a.value={...a.value,...ve.rate_limit}),ve.theme&&!localStorage.getItem("quant_theme")&&q(ve.theme),ve.auto_evaluate&&(r.value={...r.value,...ve.auto_evaluate})}}catch(ie){console.warn("加载用户配置失败，使用本地缓存",ie)}}async function fe(){var ie,te,ve,Ne;try{const Ue=await(await fetch("/api/dashboard")).json(),Ze=Ue.success?Ue.data:Ue;G.value=((ie=Ze==null?void 0:Ze.stats)==null?void 0:ie.total_stocks_covered)||null;const $e=await(await fetch("/api/dates")).json();X.value=((te=$e==null?void 0:$e.data)==null?void 0:te.total)||((Ne=(ve=$e==null?void 0:$e.data)==null?void 0:ve.dates)==null?void 0:Ne.length)||null;const xe=await(await fetch("/api/ai/history")).json();V.value="ok"}catch{V.value="pending"}}async function ke(){try{const te=await(await fetch("/api/dashboard")).json();C.value=te.success?te.data:te,_.value=Date.now()}catch(ie){console.error("加载总览数据失败",ie)}}return{configSaving:u,configChanged:o,globalConfigDirty:l,lastSavedTime:f,feishuConfigOriginal:M,aiConfigOriginal:I,tushareConfigOriginal:E,tushareConfig:A,tushareStatus:R,datasourceConfig:F,datasourceStatus:H,syncingData:B,stockCount:G,tradeDateCount:X,aiStatus:V,appVersion:Q,showImportDialog:z,rateLimitConfig:a,rateLimitDirty:p,rateLimitSaving:n,loadRateLimit:h,saveRateLimit:ee,saveAiConfig:N,testAiApi:x,exportConfig:m,importConfig:L,saveAllConfig:w,resetAllConfig:j,testTushareConnection:ae,checkTushareConnection:Z,syncStockData:T,loadTushareConfig:W,loadDatasourceConfig:re,saveDatasourceConfig:Pe,testDatasource:se,toggleDatasourceKeyReveal:Se,toggleDatasourceEdit:$,loadFeishuConfig:me,loadAiConfig:Me,loadUserConfig:oe,loadSystemStatus:fe,loadDashboardData:ke}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(s){const{ref:e,computed:v}=Vue,{currentUser:t,applyTheme:o,allMenuDefs:d,loadGroupConfig:b}=s,c=function(oe){const fe=window.__quantModules&&window.__quantModules.themes;return fe&&fe.applyLegacyTheme?fe.applyLegacyTheme(oe):o(oe)},i=e([]),g=e(""),r=e(""),P=e("users"),k=e({}),S=e({}),C=v(()=>{let oe=i.value;if(r.value&&(oe=oe.filter(ke=>(ke.group||ke.role)===r.value)),!g.value)return oe;const fe=g.value.toLowerCase();return oe.filter(ke=>ke.username.toLowerCase().includes(fe))});function _(oe){k.value={...k.value,[oe]:!k.value[oe]}}async function D(oe,fe){try{const ie=await(await fetch("/api/groups/"+fe+"/members/"+oe,{method:"DELETE"})).json();ie.success?(await $(),await le()):ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function q(oe){const fe=S.value[oe];if(fe)try{const ie=await(await fetch("/api/groups/"+oe+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:fe})})).json();ie.success?(await $(),await le(),S.value={...S.value,[oe]:""}):ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function u(oe,fe){try{const ie=await(await fetch("/api/users/"+oe.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:fe})})).json();ie.success?await $():ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=e(!1),f=e(null),M=e({username:"",password:"",role:"user",theme:"tech-blue"}),I=e(!1),E=e(null),A=e(!1),R=e(!1),F=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),H=e({}),B=e(!1),G=e({group_id:"",name:"",description:""}),X=e(!1),V=e([]),Q=e(""),z=e(""),a=e({});function p(oe){a.value={...a.value,[oe]:!a.value[oe]}}function n(oe){return!i.value||!i.value.length?0:i.value.filter(fe=>(fe.group||fe.role)===oe).length}function h(oe){const fe=(oe==null?void 0:oe.visible_menus)||{};return Object.values(fe).filter(Boolean).length}const ee=v(()=>Object.keys(ne.value).length);async function N(oe){z.value=oe,R.value=!0,await x(oe)}async function x(oe){try{const ke=await(await fetch("/api/groups/"+oe+"/members")).json();ke.success&&(V.value=ke.members||[])}catch(fe){V.value=[],console.error("[loadGroupMembers]",fe)}}async function m(){if(!(!Q.value||!z.value)){X.value=!0;try{const fe=await(await fetch("/api/groups/"+z.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Q.value})})).json();fe.success?(await x(z.value),await $(),Q.value=""):ElementPlus.ElMessage.error(fe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{X.value=!1}}}async function L(oe){try{const ke=await(await fetch("/api/groups/"+z.value+"/members/"+oe,{method:"DELETE"})).json();ke.success?(await x(z.value),await $()):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const w=v(()=>{if(!i.value)return[];const oe=new Set(V.value.map(fe=>fe.username));return i.value.filter(fe=>fe.username!=="admin"&&fe.username!=="guest"&&!oe.has(fe.username))});function j(oe){const fe=F.value.visible_menus[oe],ke=d.find(ie=>ie.key===oe);if(ke)if(fe){const ie=H.value[oe]||{};ke.subPages.forEach(te=>{const ve=oe+"."+te;F.value.visible_sub_pages[ve]=ie[te]!==void 0?ie[te]:!0})}else{const ie={};ke.subPages.forEach(te=>{const ve=oe+"."+te;ie[te]=F.value.visible_sub_pages[ve],F.value.visible_sub_pages[ve]=!1}),H.value[oe]=ie}}function ae(oe){E.value=oe;const fe=ne.value[oe]||{};F.value={name:fe.name||oe,description:fe.description||"",visible_menus:{...fe.visible_menus||{}},visible_sub_pages:{...fe.visible_sub_pages||{}}},H.value={},d.forEach(ke=>{const ie={};ke.subPages.forEach(te=>{ie[te]=F.value.visible_sub_pages[ke.key+"."+te]}),H.value[ke.key]=ie}),A.value=!0}async function Z(){X.value=!0;try{const fe=await(await fetch("/api/groups/"+E.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();fe.success?(A.value=!1,E.value=null,await le(),await b()):ElementPlus.ElMessage.error(fe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{X.value=!1}}async function T(oe){var fe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((fe=ne.value[oe])==null?void 0:fe.name)||oe)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+oe,{method:"DELETE"})).json();te.success?await le():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function W(){if(G.value.group_id){X.value=!0;try{const fe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)})).json();fe.success?(B.value=!1,G.value={group_id:"",name:"",description:""},await le()):ElementPlus.ElMessage.error(fe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{X.value=!1}}}const ne=e({});async function le(){try{if(!localStorage.getItem("quant_token"))return;const fe=await fetch("/api/groups");if(fe.ok){const ke=await fe.json();ne.value=ke.groups||{}}}catch(oe){console.warn("loadAllGroups:",oe)}}function Se(oe){var fe;return((fe=ne.value[oe])==null?void 0:fe.name)||oe||"--"}async function $(){try{if(!localStorage.getItem("quant_token")){i.value=[];return}const fe=await fetch("/api/users");if(fe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const ke=await fe.json();i.value=ke.users||[]}catch(oe){i.value=[],console.error("[loadUsers] error:",oe)}}function re(oe){f.value=oe,M.value={username:oe.username,password:"",role:oe.role,theme:oe.theme||"tech-blue",group:oe.group||oe.role},l.value=!0}async function Pe(){if(M.value.username){I.value=!0;try{const oe=f.value?"PUT":"POST",fe=f.value?`/api/users/${M.value.username}`:"/api/users",ie=await(await fetch(fe,{method:oe,headers:{"Content-Type":"application/json"},body:JSON.stringify(M.value)})).json();if(ie.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&M.value.username===t.value.username){const te=M.value.theme;te&&te!==t.value.theme&&(t.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(t.value)),c(te))}l.value=!1,f.value=null,await $()}else ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{I.value=!1}}}async function se(oe){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${oe}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await $())}catch(fe){console.error("[deleteUser]",fe)}}async function me(oe){try{const ke=await(await fetch(`/api/users/${oe.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:oe.enabled})})).json();ke.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(ke.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Me(oe){try{const{value:fe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${oe.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(fe){const ie=await(await fetch(`/api/users/${oe.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:fe})})).json();ie.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ie.message||"重置失败")}}catch{}}return{userList:i,userSearch:g,groupFilter:r,userPageTab:P,expandedGroups:k,addMemberGroupMap:S,filteredUsers:C,toggleGroupExpand:_,removeMemberFromGroupInline:D,addMemberToGroupInline:q,changeUserGroup:u,showAddUser:l,editingUser:f,userForm:M,savingUser:I,editingGroup:E,menuConfigDialog:A,memberDialog:R,groupEditForm:F,subPageCache:H,showAddGroup:B,addGroupForm:G,savingGroup:X,groupMembers:V,addMemberUsername:Q,selectedMemberGroup:z,subPageSectionExpanded:a,toggleSubPageSection:p,getGroupMemberCount:n,getMenuEnabledCount:h,groupCount:ee,openMemberManager:N,loadGroupMembers:x,addMemberToGroup:m,removeMemberFromGroup:L,availableUsersForGroup:w,onParentToggle:j,openMenuConfig:ae,saveMenuConfig:Z,deleteGroupConfig:T,createGroup:W,allGroups:ne,getGroupName:Se,loadAllGroups:le,loadUsers:$,editUser:re,saveUser:Pe,deleteUser:se,toggleUserEnabled:me,resetUserPassword:Me}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(s){const{ref:e,computed:v}=Vue,{stockKlineLoaded:t,stockDetailVisible:o,stockDetailTab:d,stockDetail:b,disposeStockKline:c}=s,i=e([]),g=e(!1),r=e(!1),P=e("date"),k=e([]),S=e([]),C=e([]),_=e([]),D=v(()=>{var m,L;const x=[];for(const w of i.value){if(!w||w.id==null)continue;const j=w.stock_name||w.stock_code||"",ae=Array.isArray(w.messages)?w.messages:[];x.push({id:w.id,stock_code:w.stock_code,stock_name:j,first_msg:w.first_msg||((L=(m=ae[0])==null?void 0:m.content)==null?void 0:L.substring(0,50))||"",msg_count:w.msg_count||ae.length||0,created_at:w.created_at,date:(w.created_at||"").substring(0,10),month:(w.created_at||"").substring(0,7),messages:ae})}return x}),q=v(()=>{const x={};for(const L of D.value){const w=L.date||"未知";x[w]||(x[w]=[]),x[w].push(L)}const m={};return Object.keys(x).sort((L,w)=>w.localeCompare(L)).forEach(L=>m[L]=x[L]),m}),u=v(()=>{const x={};for(const L of D.value){const w=L.month||"未知";x[w]||(x[w]=[]),x[w].push(L)}const m={};return Object.keys(x).sort((L,w)=>w.localeCompare(L)).forEach(L=>m[L]=x[L]),m}),l=v(()=>{const x={};for(const m of D.value){const L=`${m.stock_name}(${m.stock_code})`;x[L]||(x[L]=[]),x[L].push(m)}return x});function f(x){const m=k.value.indexOf(x);m>=0?k.value.splice(m,1):k.value.push(x)}function M(x){const m=q.value[x]||[];if(m.every(w=>k.value.includes(w.id)))k.value=k.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)k.value.includes(w.id)||k.value.push(w.id)}function I(x){const m=u.value[x]||[];if(m.every(w=>k.value.includes(w.id)))k.value=k.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)k.value.includes(w.id)||k.value.push(w.id)}function E(x){const m=l.value[x]||[];if(m.every(w=>k.value.includes(w.id)))k.value=k.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)k.value.includes(w.id)||k.value.push(w.id)}function A(x){const m=S.value.indexOf(x);m>=0?S.value.splice(m,1):S.value.push(x)}function R(x){const m=C.value.indexOf(x);m>=0?C.value.splice(m,1):C.value.push(x)}function F(x){const m=_.value.indexOf(x);m>=0?_.value.splice(m,1):_.value.push(x)}function H(){k.value.length===D.value.length?k.value=[]:k.value=D.value.map(x=>x.id)}async function B(){if(k.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${k.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const x of[...k.value])await ee(x);k.value=[]}}const G={};async function X(x){b.value={stock:x.stock_code,name:x.stock_name},o.value=!0,d.value="chat",t.value=!1,c(),z.value=!0,a.value="",Q.value=[];try{let m=G[x.id];if(!m){const L=await fetch("/api/ai/chat/history/"+x.id);if(!L.ok)throw new Error("load history failed");m=(await L.json()).messages||[],G[x.id]=m}Q.value=m.map(L=>({role:L.role,content:L.content}))}catch{a.value="历史消息加载失败，请重试"}finally{z.value=!1}}const V=e(""),Q=e([]),z=e(!1),a=e("");async function p(){var L;const x=V.value.trim();if(!x||z.value)return;a.value="",Q.value.push({role:"user",content:x}),V.value="",z.value=!0;const m=Q.value.length;Q.value.push({role:"assistant",content:""});try{const ae=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((L=b.value)==null?void 0:L.stock)||"",message:x})})).body.getReader(),Z=new TextDecoder;let T="";for(;;){const{done:W,value:ne}=await ae.read();if(W)break;T+=Z.decode(ne,{stream:!0});const le=T.split(`
`);T=le.pop()||"";for(const Se of le)if(Se.startsWith("data: "))try{const $=JSON.parse(Se.slice(6));$.token?Q.value[m].content+=$.token:$.done?console.log("Stream done:",$.session_id):$.error&&(a.value=$.error)}catch($){console.warn("SSE parse error:",$)}}}catch(w){Q.value[m].content||(Q.value[m].content="网络错误: "+w.message)}z.value=!1}async function n(x){var L;a.value="",z.value=!0;const m={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};Q.value.push({role:"user",content:m[x]||m.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((L=b.value)==null?void 0:L.stock)||"",mode:x})});if(j.ok){const ae=await j.json();Q.value.push({role:"assistant",content:ae.reply||"无回复"})}}catch(w){a.value="网络错误: "+w.message}z.value=!1}async function h(){g.value=!0,r.value=!1;try{const x=await fetch("/api/ai/chat/history?view=date");if(x.ok){const m=await x.json(),L=[];for(const w of m)for(const j of w.items||[])L.push(j);i.value=L}else r.value=!0}catch(x){console.error(x),r.value=!0}finally{g.value=!1}}async function ee(x){try{await fetch("/api/ai/chat/history/"+x,{method:"DELETE"}),i.value=i.value.filter(m=>m.id!==x)}catch(m){console.error("deleteChatSession:",m)}}function N(x){if(!x)return"";const m=String(x).split(`
`),L=[],w=[];let j=0;for(;j<m.length;){if(/^\s*\|.*\|\s*$/.test(m[j])){let Z=j;const T=[];for(;Z<m.length&&/^\s*\|.*\|\s*$/.test(m[Z]);)T.push(m[Z]),Z++;const W=Se=>Se.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map($=>$.trim()),ne=T.map(W);if(ne.length>1&&ne[1].every(Se=>/^:?-{3,}:?$/.test(Se))){const Se=Math.max(...ne.map(se=>se.length)),$=ne[0].slice(0,Se),re=ne.slice(2);let Pe="<table>";re.length?(Pe+="<thead><tr>"+$.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Pe+="<tbody>"+re.map(se=>"<tr>"+se.slice(0,Se).map(me=>"<td>"+me+"</td>").join("")+"</tr>").join("")+"</tbody>"):Pe+="<tbody><tr>"+$.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Pe+="</table>",L.push(Pe),w.push("\0T"+(L.length-1)+"\0"),j=Z;continue}for(;j<Z;)w.push(m[j]),j++;continue}w.push(m[j]),j++}let ae=w.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return L.forEach((Z,T)=>{ae=ae.split("\0T"+T+"\0").join(Z)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ae=window.__quantModules.core.sanitizeHtml(ae)),ae}return{chatSessions:i,chatHistoryView:P,selectedChatIds:k,expandedChatDates:S,expandedChatMonths:C,expandedChatStocks:_,chatHistoryLoading:g,chatHistoryError:r,allChatSessionsFlat:D,chatGroupedByDate:q,chatGroupedByMonth:u,chatGroupedByStock:l,toggleSelectChat:f,toggleSelectChatDate:M,toggleSelectChatMonth:I,toggleSelectChatStock:E,toggleChatDateExpand:A,toggleChatMonthExpand:R,toggleChatStockExpand:F,selectAllChatSessions:H,deleteSelectedChatSessions:B,viewChatSession:X,loadChatHistory:h,deleteChatSession:ee,renderMarkdown:N,stockChatInput:V,stockChatMessages:Q,stockChatLoading:z,stockChatError:a,askStockSend:p,askStockQuick:n}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e={},v=0;function t(c,i,g){if(typeof c!="function")return"";var r="undo-"+ ++v,P={fn:c,label:i||"",timer:null,active:!0};return e[r]=P,g&&g>0&&(P.timer=setTimeout(function(){d(r)},g)),r}function o(c){var i=e[c];if(!i||!i.active)return!1;i.timer&&clearTimeout(i.timer),delete e[c],i.active=!1;try{i.fn()}catch{}return!0}function d(c){var i=e[c];i&&(i.timer&&clearTimeout(i.timer),delete e[c],i.active=!1)}function b(){var c=0;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&c++;return c}return{register:t,undo:o,remove:d,activeCount:b}}return{createUndoStack:s}});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function s(d,b,c){return"qc_fm_"+(d||"guest")+"_"+b+"_v"+(c||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function v(d,b,c,i){var g=e();if(!g||!d||b===void 0||b===null)return!1;try{return g.setItem(s(c,d,i),JSON.stringify(b)),!0}catch{return!1}}function t(d,b,c){var i=e();if(!i||!d)return null;try{var g=i.getItem(s(b,d,c));return g?JSON.parse(g):null}catch{return null}}function o(d,b,c){var i=e();if(!(!i||!d))try{i.removeItem(s(b,d,c))}catch{}}return{saveForm:v,loadForm:t,clearForm:o}});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var s="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function v(d){var b=e();if(!b||!d)return!1;try{return b.setItem(s,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var b=d.getItem(s);return b?JSON.parse(b):null}catch{return null}}function o(){var d=e();if(d)try{d.removeItem(s)}catch{}}return{save:v,restore:t,clear:o,KEY:s}});(function(){if(typeof window>"u")return;let s=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function v(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var o=document.createElement("div");o.id="qc-install-bar",o.className="qc-install-bar",o.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var b=document.createElement("span");b.className="qc-install-actions";var c=document.createElement("button");c.className="qc-install-btn",c.type="button",c.textContent="安装";var i=document.createElement("button");i.className="qc-install-close",i.type="button",i.setAttribute("aria-label","关闭"),i.textContent="×",b.appendChild(c),b.appendChild(i),o.appendChild(d),o.appendChild(b),document.body.appendChild(o),c.addEventListener("click",function(){s&&(s.prompt(),s=null),o.remove()}),i.addEventListener("click",function(){v(),o.remove()})}}window.addEventListener("beforeinstallprompt",function(o){o.preventDefault(),s=o,e()||t()}),window.addEventListener("appinstalled",function(){s=null;var o=document.getElementById("qc-install-bar");o&&o.remove()})})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function s(v){var t=[];return(v||[]).forEach(function(o){if(o){var d=typeof o=="string"?o:o.code||"",b=typeof o=="object"&&o.name?String(o.name):"";d&&t.push(b&&b!==d?d+" "+b:d)}}),t.join(`
`)}function e(v){if(!v||v.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=v.added||0,o=v.existed||0,d=v.invalid||0,b=v.total||0;return{added:t,existed:o,invalid:d,total:b,failed:d,message:"已加入 "+t+" 只"+(o?"，"+o+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:s,summarize:e}});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(d,b,c,i,g,r,P){var k=P??s,S=d,C=b;return S+c>g-k&&(S=Math.max(k,g-k-c)),C+i>r-k&&(C=Math.max(k,r-k-i)),{left:Math.round(S),top:Math.round(C)}}var v=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return v.map(function(d){return{key:d.key,label:d.label}})}function o(d,b,c){var i=c??500;return!d||!b?!1:b-d>=i}return{positionMenu:e,getActions:t,isLongPress:o}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,onMounted:e,onBeforeUnmount:v}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function o(d){let b=d;for(;b&&b!==document.body;){if(b.hasAttribute&&b.hasAttribute("data-ctx-code"))return b;b=b.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
      <teleport to="body">
        <div v-if="visible" class="qc-ctx" :style="{ left: pos.left + 'px', top: pos.top + 'px' }"
             role="menu" @contextmenu.prevent>
          <div v-if="actions.length === 0" class="qc-ctx-item qc-ctx-empty" role="menuitem" aria-disabled="true">
            <span>无可用操作</span>
          </div>
          <div v-else>
            <div v-for="a in actions" :key="a.key" class="qc-ctx-item" role="menuitem" @click="run(a)">
              <span>{{ a.label }}</span>
            </div>
          </div>
        </div>
      </teleport>
    `,setup(){const d=s(!1),b=s({left:0,top:0}),c=s(t?t.getActions():[]),i=s({});function g(){d.value=!1}function r(l,f,M){if(i.value=M||{},t){const I=window.innerWidth||document.documentElement.clientWidth,E=window.innerHeight||document.documentElement.clientHeight,A=180,R=c.value.length*32+12;b.value=t.positionMenu(l,f,A,R,I,E)}else b.value={left:l,top:f};d.value=!0}function P(l){g(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:l.key,payload:i.value}}))}function k(l){const f=o(l.target);f&&(l.preventDefault(),r(l.clientX,l.clientY,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""}))}let S=null,C=0;function _(l){const f=o(l.target);f&&(C=Date.now(),S=setTimeout(function(){if(t&&t.isLongPress(C,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const M=l.touches&&l.touches[0];r(M?M.clientX:0,M?M.clientY:0,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""})}},520))}function D(){S&&(clearTimeout(S),S=null)}function q(l){if(l.key==="Escape"){g();return}if(l.shiftKey&&l.key==="F10"){const f=o(document.activeElement);if(f){l.preventDefault();const M=f.getBoundingClientRect();r(M.left+M.width/2,M.bottom,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""})}}}function u(l){d.value&&!(l.target&&l.target.closest&&l.target.closest(".qc-ctx"))&&g()}return e(function(){document.addEventListener("contextmenu",k,!0),document.addEventListener("touchstart",_,{passive:!0}),document.addEventListener("touchend",D,!0),document.addEventListener("keydown",q,!0),document.addEventListener("mousedown",u,!0)}),v(function(){document.removeEventListener("contextmenu",k,!0),document.removeEventListener("touchstart",_,!0),document.removeEventListener("touchend",D,!0),document.removeEventListener("keydown",q,!0),document.removeEventListener("mousedown",u,!0)}),{visible:d,pos:b,actions:c,run:P}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=0,v={};function t(i){var g=++e;if(i&&v[i])return{deduped:!0,id:v[i].seq,controller:v[i].controller};var r=typeof AbortController<"u"?new AbortController:null;return v[i]={seq:g,controller:r},{deduped:!1,id:g,controller:r}}function o(i,g){var r=v[i];return!r||r.seq!==g}function d(i){var g=v[i];if(g&&g.controller)try{g.controller.abort()}catch{}}function b(i,g){var r=v[i];r&&r.seq===g&&delete v[i]}function c(){var i=0;for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&i++;return i}return{begin:t,isStale:o,abort:d,finish:b,activeCount:c}}return{createRequestGuard:s}});(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=Object.create(null),v=Object.create(null);function t(k,S){if(!k||typeof k!="string")throw new Error("domain name required");if(e[k])throw new Error("duplicate domain: "+k);for(var C=Array.isArray(S)?S:[],_=0;_<C.length;_++){var D=C[_];if(v[D]&&v[D]!==k)throw new Error("duplicate key across domains: "+D);v[D]=k}return e[k]={keys:C.slice(),refs:Object.create(null)},!0}function o(k,S,C){var _=e[k];if(!_)throw new Error("unknown domain: "+k);if(_.keys.indexOf(S)===-1)throw new Error("key not declared in domain: "+k+"."+S);return _.refs[S]=C,!0}function d(k,S){var C=e[k];return!!C&&S in C.refs}function b(k,S){var C=e[k];if(C){var _=C.refs[S];return _&&typeof _=="object"&&"value"in _?_.value:_}}function c(k){var S=e[k];if(!S)return null;for(var C={},_=0;_<S.keys.length;_++){var D=S.keys[_],q=S.refs[D];C[D]=q&&typeof q=="object"&&"value"in q?q.value:q}return C}function i(k,S){var C=e[k];if(!C||!S)return!1;for(var _=0;_<C.keys.length;_++){var D=C.keys[_];if(D in S){var q=C.refs[D];q&&typeof q=="object"&&"value"in q&&(q.value=S[D])}}return!0}function g(){return Object.keys(e)}function r(k){var S=e[k];return S?S.keys.slice():[]}function P(){for(var k=0,S=Object.keys(e),C=0;C<S.length;C++)k+=Object.keys(e[S[C]].refs).length;return k}return{defineDomain:t,attach:o,has:d,get:b,snapshot:c,restore:i,domains:g,keys:r,attachedCount:P}}return{createStateRegistry:s}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(s){const{ref:e,computed:v,watch:t}=Vue,{consensus:o,currentPage:d,currentSubPage:b,dashboardData:c,searchKeyword:i,statusFilter:g,strategyFilter:r,strategyFilterCounts:P}=s;function k(R){const F=r.value.selected;if(!F||F.length===0)return R;const H=r.value.mode;return R.filter(B=>{const G=B.strategy_names||B.strategies||[];return H==="union"?F.some(X=>G.includes(X)):F.every(X=>G.includes(X))})}const S=v(()=>{const R=k(o.value||[]);return{all:R.length,newCount:R.filter(F=>F.status==="new").length,current:R.filter(F=>F.status==="current").length,out:R.filter(F=>F.status==="out").length}}),C=v(()=>{let R=o.value||[];if(g.value!=="all"&&(R=R.filter(F=>F.status===g.value)),R=k(R),i.value){const F=i.value.toLowerCase();R=R.filter(H=>H.code.toLowerCase().includes(F)||H.name&&H.name.toLowerCase().includes(F))}return R}),_=v(()=>{const R=o.value||[],F={},H={};for(const B of R)B.code&&B.name&&(H[B.code]=B.name);for(const B of R){const G=B.strategy_names||B.strategies||[];for(const X of G)F[X]||(F[X]={strategy:X,count:0,codes:[],names:[]}),F[X].count++,F[X].codes.includes(B.code)||(F[X].codes.push(B.code),F[X].names.push({code:B.code,name:H[B.code]||B.code}))}return Object.values(F).sort((B,G)=>G.count-B.count)}),D=v(()=>{const R=r.value.selected,F=r.value.mode,H={};for(const[B,G]of Object.entries(P.value)){const X=G||[];!R||R.length===0?H[B]=X.length:F==="union"?H[B]=X.filter(V=>V.strategies&&R.some(Q=>V.strategies.includes(Q))).length:H[B]=X.filter(V=>V.strategies&&R.every(Q=>V.strategies.includes(Q))).length}return H});function q(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(r.value.selected)),localStorage.setItem("quant_strategy_filter_mode",r.value.mode)}const u=v(()=>{const R=(c.value||{}).consensus_rank||[];return k(R)}),l=v(()=>{const R=o.value||P.value.day||[];return k(R).length}),f=v(()=>{const R=(c.value||{}).strategy_counts||[],F=o.value||P.value.day||[];if(F.length===0)return R;const H=k(F),B={};H.forEach(X=>{(X.strategy_names||X.strategies||[]).forEach(Q=>{B[Q]=(B[Q]||0)+1})});const G=H.length||1;return R.map(X=>{const V=X.strategy_name||X.strategy_id,Q=B[V]||0;return{...X,count:Q,percentage:Math.round(Q/G*1e3)/10}})}),M=v(()=>{const R=(c.value||{}).pool_changes||{},F=(R.new_count||0)-(R.out_count||0);return F>0?{dir:"up",text:"↑"+F}:F<0?{dir:"down",text:"↓"+Math.abs(F)}:{dir:"flat",text:"→0"}}),I=v(()=>{const R=(c.value||{}).time_coverage||{},F=new Date(R.start_date),H=new Date(R.end_date),B=new Date;if(!F.getTime()||!H.getTime()||B>=H)return 100;if(B<=F)return 0;const G=H-F,X=B-F;return Math.round(X/G*100)}),E=e(null);function A(R){r.value.selected=[R],r.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([R])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",b.value="calendar"}return{applyStrategyFilter:k,statusCounts:S,stockPool:C,strategyDistribution:_,strategyPreviewCount:D,saveStrategyFilter:q,filteredConsensusRank:u,currentPoolSize:l,filteredStrategyCounts:f,poolChangeBadge:M,timeBarPercent:I,lastRefreshTime:E,navigateToStrategyFilter:A}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.history={create:function(s){const{ref:e,computed:v,watch:t,currentUser:o,selectedDate:d,stockDetail:b,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:k,loadStockKline:S,refreshStockScore:C,disposeStockKline:_,aiHistory:D,aiLoading:q,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:f,aiResult:M,loadLastEvaluation:I,autoEvaluateConfig:E,autoEvaluateScope:A,batchStocks:R,batchRunning:F,batchTotal:H,batchCompleted:B,batchCurrent:G,batchStatuses:X,batchResults:V,batchEvalErrors:Q,expandedDates:z,expandedStocks:a,savingConfig:p,selectedHistoryIds:n,selectedWatchlistCodes:h,showAutoEvaluateSettings:ee,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:L,watchlistSort:w,watchlist:j,watchlistCodes:ae,aiHistoryLoading:Z,aiHistoryError:T,sortedWatchlist:W,getWatchlistScore:ne,getLatestScore:le,addSearchResult:Se,evaluatedCodes:$,klineLoadedCodes:re,markKlineLoaded:Pe,watchlistSearch:se,watchlistResults:me,watchlistSearching:Me,dataRefreshConfig:oe,dataRefreshReloading:fe,dataRefreshSaving:ke,levelVar:ie,levelBgVar:te,undoStack:ve,showUndoMessage:Ne,addToWatchlist:Ae,removeFromWatchlist:Ue}=s;async function Ze(){if(!b.value)return;q.value=!0,M.value=null,f.value="",u.value="fetching",l.value=0;const Ce=Date.now(),we=setInterval(()=>{q.value&&(l.value=Math.round((Date.now()-Ce)/1e3))},500);try{const ze=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:b.value.stock,stock_name:b.value.name||b.value.stock,strategy:L.value})});u.value="calculating";const Oe=await ze.json();u.value="analyzing",Oe.success?(await nextTick(),M.value=Oe.data,c.value="ai",Re()):(f.value=Oe.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch(ze){f.value=ze&&ze.message&&!String(ze.message).includes("Failed to fetch")?ze.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{clearInterval(we),q.value=!1,l.value=0,f.value?u.value="":(u.value="done",setTimeout(()=>{u.value==="done"&&(u.value="")},800))}}const et=50,$e=e(0),he=e(!1),xe=v(()=>D.value.length<$e.value);async function Re(){Z.value=!0,T.value=!1;try{if(!localStorage.getItem("quant_token")){D.value=[];return}const we=await fetch(`/api/ai/history?limit=${et}&offset=0`);if(we.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),o.value=null;return}const ze=await we.json();ze.success?(D.value=ze.data||[],$e.value=ze.total!=null?ze.total:D.value.length):T.value=!0}catch(Ce){console.error("[loadAiHistory] error:",Ce),T.value=!0}finally{Z.value=!1}}async function De(){if(!(he.value||!xe.value)){he.value=!0;try{const we=await(await fetch(`/api/ai/history?limit=${et}&offset=${D.value.length}`)).json();if(we.success&&Array.isArray(we.data)){const ze=new Set(D.value.map(Ve=>Ve.id)),Oe=we.data.filter(Ve=>!ze.has(Ve.id));D.value=D.value.concat(Oe),we.total!=null&&($e.value=we.total)}}catch(Ce){console.warn("[loadMoreAiHistory] error:",Ce)}finally{he.value=!1}}}async function We(Ce){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ze=await(await fetch(`/api/ai/history/${Ce}`,{method:"DELETE"})).json();if(ze.success){ElementPlus.ElMessage.success("删除成功"),Re();const Oe=n.value.indexOf(Ce);Oe>=0&&n.value.splice(Oe,1)}else ElementPlus.ElMessage.error(ze.message||"删除失败")}catch{}}function Ge(Ce){const we=n.value.indexOf(Ce);we>=0?n.value.splice(we,1):n.value.push(Ce)}function Ye(){n.value=[]}function Je(){h.value=[]}async function tt(){const Ce=n.value;if(Ce.length===0)return;const we=D.value.filter(ze=>Ce.includes(ze.id)).map(ze=>ze.stock_code);N.value=!0,R.value=[...new Set(we)].join(",")}async function ue(){const Ce=n.value;if(Ce.length===0)return;const we=D.value.filter(Ve=>Ce.includes(Ve.id)),ze=[...new Map(we.map(Ve=>[Ve.stock_code,Ve])).values()];let Oe=0;for(const Ve of ze)ae.value.has(Ve.stock_code)||(await Ae(Ve.stock_code,Ve.stock_name||Ve.stock_code),Oe++);Oe>0?ElementPlus.ElMessage.success(`已加入 ${Oe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function ye(){const Ce=n.value;if(Ce.length===0)return;const we=D.value.filter(Oe=>Ce.includes(Oe.id)),ze=[...new Map(we.map(Oe=>[Oe.stock_code,Oe])).values()];try{const Ve=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ze.map(st=>({stock_code:st.stock_code,stock_name:st.stock_name||""}))})})).json();Ve&&Ve.success?ElementPlus.ElMessage.success(`已登记 ${Ve.count||ze.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ve&&Ve.detail||"批量加入组合失败")}catch(Oe){console.warn("batchAddToPortfolio failed:",Oe),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Le(){if(h.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${h.value.length} 只股票？`,"提示",{type:"warning"});for(const Ce of h.value)await Ue(Ce);h.value=[],ElementPlus.ElMessage.success("已移除")}catch(Ce){Ce&&Ce.message!=="cancel"&&console.warn("batchRemoveWatchlist:",Ce)}}function He(Ce){const we=h.value.indexOf(Ce);we>=0?h.value.splice(we,1):h.value.push(Ce)}function y(){n.value.length===D.value.length?n.value=[]:n.value=D.value.map(Ce=>Ce.id)}function O(){h.value.length===j.value.length?h.value=[]:h.value=j.value.map(Ce=>Ce.code)}async function Y(){if(n.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${n.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const we=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:n.value})})).json();we.success?(ElementPlus.ElMessage.success(we.message),n.value=[],Re()):ElementPlus.ElMessage.error(we.message||"删除失败")}catch{}}async function ce(){try{const we=await(await fetch("/api/ai/auto-config")).json();we.success&&(E.value=we.data,we.data.evaluate_scope&&(A.value=we.data.evaluate_scope))}catch(Ce){console.warn("loadAutoEvaluateConfig failed:",Ce)}}async function de(){p.value=!0;try{E.value.evaluate_scope=A.value;const we=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();we.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),ee.value=!1):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{p.value=!1}}return{doAiEvaluate:Ze,aiHistoryTotal:$e,aiHistoryLoadingMore:he,hasMoreAiHistory:xe,loadAiHistory:Re,loadMoreAiHistory:De,deleteSingleHistory:We,toggleSelectHistory:Ge,clearSelection:Ye,clearWatchlistSelection:Je,batchReevaluateHistory:tt,batchAddToWatchlist:ue,batchAddToPortfolio:ye,batchRemoveWatchlist:Le,toggleSelectWatchlist:He,selectAllHistory:y,selectAllWatchlist:O,deleteSelectedHistory:Y,loadAutoEvaluateConfig:ce,saveAutoEvaluateConfig:de}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.list={create:function(s){const{ref:e,computed:v,watch:t,currentUser:o,selectedDate:d,stockDetail:b,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:k,loadStockKline:S,refreshStockScore:C,disposeStockKline:_,aiHistory:D,aiLoading:q,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:f,aiResult:M,loadLastEvaluation:I,autoEvaluateConfig:E,autoEvaluateScope:A,batchStocks:R,batchRunning:F,batchTotal:H,batchCompleted:B,batchCurrent:G,batchStatuses:X,batchResults:V,batchEvalErrors:Q,expandedDates:z,expandedStocks:a,savingConfig:p,selectedHistoryIds:n,selectedWatchlistCodes:h,showAutoEvaluateSettings:ee,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:L,watchlistSort:w,watchlist:j,watchlistCodes:ae,aiHistoryLoading:Z,aiHistoryError:T,sortedWatchlist:W,getWatchlistScore:ne,getLatestScore:le,addSearchResult:Se,evaluatedCodes:$,klineLoadedCodes:re,markKlineLoaded:Pe,watchlistSearch:se,watchlistResults:me,watchlistSearching:Me,dataRefreshConfig:oe,dataRefreshReloading:fe,dataRefreshSaving:ke,levelVar:ie,levelBgVar:te,undoStack:ve,showUndoMessage:Ne,loadAiHistory:Ae}=s,Ue=e(!1);async function Ze(){Ue.value=!0;try{const Y=await(await fetch("/api/watchlist")).json();Y.success&&(j.value=Y.stocks||[])}catch(O){console.warn("loadWatchlist failed:",O)}finally{Ue.value=!1}}async function et(O,Y){try{const de=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:O,name:Y})})).json();if(de.success)return de.existed||j.value.push({code:O,name:Y,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function $e(O){try{const Y=j.value.find(de=>de.code===O),ce=Y&&Y.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(O)}`,{method:"DELETE"}),j.value=j.value.filter(de=>de.code!==O),ae.value&&ae.value.delete&&ae.value.delete(O),ve){const de=ve.register(()=>{et(O,ce)},"移除自选",5e3);Ne("已移除自选",de)}else ElementPlus.ElMessage.info("已移除自选")}catch(Y){console.warn("removeFromWatchlist failed:",Y)}}async function he(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const O=j.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),j.value=[],ae.value&&ae.value.clear&&ae.value.clear(),ElementPlus.ElMessage.success("自选已清空"),ve&&O.length){const Y=ve.register(()=>{O.forEach(ce=>et(ce.code,ce.name||""))},"清空自选",5e3);Ne("自选已清空",Y)}}catch(O){console.warn("clearWatchlist failed:",O)}}async function xe(O,Y){ae.value.has(O)?(await $e(O),ElementPlus.ElMessage.info("已移除自选")):await et(O,Y)&&ElementPlus.ElMessage.success("已加入自选")}async function Re(O,Y){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(O,Y||"");const ce=new Date().toISOString().split("T")[0],de=d.value||ce;c.value="kline",M.value=null,f.value="",_("stockKlineChart"),b.value=null,g.value=!0,r.value=!1,i.value=!0,nextTick(()=>k());try{const Ce=await fetch(`/api/calendar/stock/${encodeURIComponent(O)}?date=${de}`);b.value=await Ce.json()}catch{b.value={stock:O,name:Y,total_days:0}}finally{g.value=!1}await nextTick(),await S("daily"),C(),I(O)}const De=e(!1);async function We(){var O;if(j.value.length!==0){De.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((O=ce.details)==null?void 0:O.loaded)||[]).forEach(de=>re.value.add(de.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(Y){console.error("预加载K线失败:",Y)}finally{De.value=!1}}}async function Ge(O,Y){q.value=!0,M.value=null,f.value="",u.value="fetching",r.value=!1,_();const ce=new Date().toISOString().split("T")[0],de=d.value||ce;try{const Ce=await fetch(`/api/calendar/stock/${encodeURIComponent(O)}?date=${de}`);b.value=await Ce.json()}catch{b.value={stock:O,name:Y,total_days:0}}c.value="ai",i.value=!0,await nextTick();try{const we=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:Y})})).json();we.success?(M.value=we.data,Ae()):(f.value=we.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{q.value=!1,u.value=""}}async function Ye(){j.value.length!==0&&(N.value=!0,R.value=j.value.map(O=>O.code).join(","))}async function Je(){h.value.length!==0&&(N.value=!0,R.value=h.value.join(","))}async function tt(){if(!se.value.trim()){me.value=[];return}Me.value=!0;try{const Y=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(se.value)}`)).json();me.value=(Y.results||[]).filter(ce=>!ae.value.has(ce.code))}catch(O){console.warn("searchStockForWatchlist failed:",O)}finally{Me.value=!1}}async function ue(){try{const Y=await(await fetch("/api/data-refresh/config")).json();oe.value=Y}catch(O){console.error("加载数据刷新配置失败:",O)}}async function ye(){ke.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(oe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{ke.value=!1}}async function Le(){var O;fe.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((O=ce.parser_stats)==null?void 0:O.dates_count)||0}交易日`),P.clear(),await ue()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{fe.value=!1}}const He=e(!1);async function y(){He.value=!0;try{const Y=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(Y.success){const ce=Y.result||{},de=Y.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${de.pulled||0}/${de.total||0}`),P.clear(),await ue()}else ElementPlus.ElMessage.error(Y.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{He.value=!1}}return{watchlistLoading:Ue,loadWatchlist:Ze,addToWatchlist:et,removeFromWatchlist:$e,clearWatchlist:he,toggleWatchlist:xe,showStockKline:Re,preloadingKline:De,preloadWatchlistKline:We,watchlistEvaluate:Ge,batchEvaluateWatchlist:Ye,batchEvaluateSelected:Je,searchStockForWatchlist:tt,loadDataRefreshConfig:ue,saveDataRefreshConfig:ye,triggerDataReload:Le,dataPullRunning:He,triggerDataPull:y}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.analytics={create:function(s){const{ref:e,computed:v,watch:t,currentUser:o,selectedDate:d,stockDetail:b,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:k,loadStockKline:S,refreshStockScore:C,disposeStockKline:_,aiHistory:D,aiLoading:q,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:f,aiResult:M,loadLastEvaluation:I,autoEvaluateConfig:E,autoEvaluateScope:A,batchStocks:R,batchRunning:F,batchTotal:H,batchCompleted:B,batchCurrent:G,batchStatuses:X,batchResults:V,batchEvalErrors:Q,expandedDates:z,expandedStocks:a,savingConfig:p,selectedHistoryIds:n,selectedWatchlistCodes:h,showAutoEvaluateSettings:ee,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:L,watchlistSort:w,watchlist:j,watchlistCodes:ae,aiHistoryLoading:Z,aiHistoryError:T,sortedWatchlist:W,getWatchlistScore:ne,getLatestScore:le,addSearchResult:Se,evaluatedCodes:$,klineLoadedCodes:re,markKlineLoaded:Pe,watchlistSearch:se,watchlistResults:me,watchlistSearching:Me,dataRefreshConfig:oe,dataRefreshReloading:fe,dataRefreshSaving:ke,levelVar:ie,levelBgVar:te,undoStack:ve,showUndoMessage:Ne,loadAiHistory:Ae}=s,Ue=v(()=>{const y={};for(const O of D.value){const Y=(O.evaluate_time||"").split("T")[0];y[Y]||(y[Y]=[]),y[Y].push(O)}for(const O in y)y[O].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return y}),Ze=v(()=>{const y={};for(const O of D.value){const Y=O.stock_code;y[Y]||(y[Y]=[]),y[Y].push(O)}for(const O in y)y[O].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return y}),et=v(()=>{const y={};for(const O of D.value){const Y=(O.evaluate_time||"").split("T")[0].slice(0,7);y[Y]||(y[Y]=[]),y[Y].push(O)}for(const O in y)y[O].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return y}),$e=v(()=>Object.keys(Ze.value).length),he=v(()=>{const y=D.value.length;return y===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(Y=>{const ce=D.value.filter(de=>de.result.total_score>=Y.min&&de.result.total_score<=Y.max).length;return{...Y,count:ce,pct:Math.round(ce/y*100)}})});async function xe(){if(!m.value)return;const y=j.value.find(O=>O.code===m.value);if(y){q.value=!0,M.value=null,f.value="",u.value="fetching";try{b.value={stock:y.code,name:y.name,total_days:0},i.value=!0,c.value="ai",await nextTick();const Y=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:y.code,stock_name:y.name,strategy:L.value})})).json();Y.success?(M.value=Y.data,Ae(),m.value=""):(f.value=Y.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{q.value=!1,u.value=""}}}function Re(y){const O=z.value.indexOf(y);O>=0?z.value.splice(O,1):z.value.push(y)}function De(y){const Y=(Ue.value[y]||[]).map(de=>de.id);Y.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!Y.includes(de)):Y.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function We(y){const Y=(et.value[y]||[]).map(de=>de.id);Y.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!Y.includes(de)):Y.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function Ge(y){const O=a.value.indexOf(y);O>=0?a.value.splice(O,1):a.value.push(y)}function Ye(y){const Y=(Ze.value[y]||[]).map(de=>de.id);Y.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!Y.includes(de)):Y.forEach(de=>{n.value.includes(de)||n.value.push(de)})}const Je={},tt={};function ue(y,O,Y){if(!y||(Y&&(tt[O]={el:y,records:Y}),Je[O]===y))return;const ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,de=()=>{Object.keys(Je).forEach(K=>{if(Je[K]&&Je[K]!==y){try{Je[K].dispose()}catch{}delete Je[K]}});const Ce=[...Y].sort((K,ge)=>K.evaluate_time.localeCompare(ge.evaluate_time)),we=Ce.map(K=>(K.evaluate_time||"").split("T")[0]),ze=Ce.map(K=>{var ge;return((ge=K.result)==null?void 0:ge.total_score)??null}),Oe=Ce.map(K=>{var ge;return((ge=K.result)==null?void 0:ge.level)??""}),Ve={primary:x("--qc-primary-600")||"#b8922a",textPrimary:x("--text-primary")||"#1f2937",textSecondary:x("--text-secondary")||"#6b7280",border:x("--chart-axis")||"#b9b2a6",axis:x("--chart-axis")||"#b9b2a6",split:x("--chart-split")||"#e7e1d6",up:x("--qc-market-up")||"#e63946",down:x("--qc-market-down")||"#2e7d32"},st=[];for(let K=1;K<ze.length;K++)ze[K]!=null&&ze[K-1]!=null&&Math.abs(ze[K]-ze[K-1])>=15&&st.push({name:"大幅变化",coord:[we[K],ze[K]],value:(ze[K]-ze[K-1]>0?"↑":"↓")+Math.abs(ze[K]-ze[K-1]),symbol:"pin",symbolSize:32,itemStyle:{color:ze[K]-ze[K-1]>0?Ve.up:Ve.down}});const gt=echarts.init(y),nt=window.__quantModules&&window.__quantModules.echartsTheme;nt&&typeof nt.getEChartsTheme=="function"&&gt.setOption(nt.getEChartsTheme()),gt.setOption({tooltip:{trigger:"axis",backgroundColor:x("--bg-card")||"#ffffff",borderColor:Ve.border,textStyle:{color:Ve.textPrimary},formatter:function(K){var je;const ge=(je=K[0])==null?void 0:je.dataIndex,Qe=ge!=null?Oe[ge]:"";return we[ge]+"<br/>得分: "+ze[ge]+(Qe?" ("+Qe+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:we,axisLabel:{fontSize:10,rotate:30,color:Ve.textSecondary},axisLine:{lineStyle:{color:Ve.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ve.textSecondary},splitLine:{lineStyle:{color:Ve.split}}},series:[{data:ze,type:"line",smooth:!0,lineStyle:{color:Ve.primary,width:2},itemStyle:{color:Ve.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:st.length>0?{data:st}:void 0}]}),Je[O]=gt};ce?ce().then(de).catch(()=>{}):de()}function ye(){Object.keys(tt).forEach(y=>{const O=tt[y];if(!(!O||!O.el)){if(Je[y]){try{Je[y].dispose()}catch{}delete Je[y]}ue(O.el,y,O.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(ye));async function Le(y){M.value=y,r.value=!1,_();try{const O=await fetch(`/api/calendar/stock/${y.stock_code}?date=${d.value}`);b.value=await O.json()}catch{b.value={stock:y.stock_code,name:y.stock_name||y.stock_code,total_days:0,history:[]}}i.value=!0,c.value="ai"}async function He(){if(!R.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const y=R.value.split(/[,，\s]+/).filter(we=>we.trim());if(y.length===0)return;F.value=!0,H.value=y.length,B.value=0,G.value="",X.value={},V.value={},Q.value={},y.forEach(we=>{X.value[we]="pending",V.value[we]=null});const O={"Content-Type":"application/json"};let Y=0,ce=0,de=!1;try{const we=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:O,body:JSON.stringify({stock_codes:y})});if(we.ok&&we.body){de=!0;const ze=we.body.getReader(),Oe=new TextDecoder("utf-8");let Ve="",st=!1;for(;!st;){const{value:gt,done:nt}=await ze.read();st=nt,Ve+=Oe.decode(gt||new Uint8Array,{stream:!st});let K;for(;(K=Ve.indexOf(`

`))>=0;){const ge=Ve.slice(0,K);Ve=Ve.slice(K+2);const Qe=ge.split(`
`).find(ft=>ft.startsWith("data: "));if(!Qe)continue;let je;try{je=JSON.parse(Qe.slice(6))}catch{continue}je.type==="start"?je.total&&(H.value=je.total):je.type==="item"?(B.value++,G.value=je.stock_code,je.success?(X.value[je.stock_code]="success",V.value[je.stock_code]=je,Y++):(X.value[je.stock_code]="error",Q.value[je.stock_code]=je.error||"评估失败",ce++)):je.type==="done"&&(typeof je.success=="number"&&(Y=je.success),typeof je.fail=="number"&&(ce=je.fail))}}if(Ve.trim()){const gt=Ve.split(`
`).find(nt=>nt.startsWith("data: "));if(gt)try{const nt=JSON.parse(gt.slice(6));nt.type==="item"?(B.value++,G.value=nt.stock_code,nt.success?(X.value[nt.stock_code]="success",V.value[nt.stock_code]=nt,Y++):(X.value[nt.stock_code]="error",Q.value[nt.stock_code]=nt.error||"评估失败",ce++)):nt.type==="done"&&(typeof nt.success=="number"&&(Y=nt.success),typeof nt.fail=="number"&&(ce=nt.fail))}catch{}}}}catch{de=!1}if(!de){Y=0,ce=0,B.value=0;for(const we of y){G.value=we,X.value[we]="running";try{const Oe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:O,body:JSON.stringify({stock_code:we.trim(),stock_name:we.trim()})})).json();Oe.success?(X.value[we]="success",V.value[we]=Oe.data,Y++):(X.value[we]="error",Q.value[we]=Oe.message&&Oe.message!=="success"?Oe.message:"评估失败",ce++)}catch(ze){X.value[we]="error",Q.value[we]="网络错误: "+(ze&&ze.message?ze.message:ze),ce++}B.value++}}G.value="",await Ae();const Ce=y.length;setTimeout(()=>{ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${Y}/${Ce}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${Y}/${Ce} · 失败 ${ce}`),F.value=!1},500)}return{groupedByDate:Ue,aiHistoryByStock:Ze,groupedByMonth:et,aiHistoryStockCount:$e,scoreDistribution:he,quickEvaluate:xe,toggleDateExpand:Re,toggleSelectDate:De,toggleSelectMonth:We,toggleStockExpand:Ge,toggleSelectStock:Ye,registerTrendChart:ue,viewAiResult:Le,doBatchEvaluate:He}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.realtime={create:function(s){const{ref:e,computed:v,watch:t,currentUser:o,selectedDate:d,stockDetail:b,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:k,loadStockKline:S,refreshStockScore:C,disposeStockKline:_,aiHistory:D,aiLoading:q,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:f,aiResult:M,loadLastEvaluation:I,autoEvaluateConfig:E,autoEvaluateScope:A,batchStocks:R,batchRunning:F,batchTotal:H,batchCompleted:B,batchCurrent:G,batchStatuses:X,batchResults:V,batchEvalErrors:Q,expandedDates:z,expandedStocks:a,savingConfig:p,selectedHistoryIds:n,selectedWatchlistCodes:h,showAutoEvaluateSettings:ee,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:L,watchlistSort:w,watchlist:j,watchlistCodes:ae,aiHistoryLoading:Z,aiHistoryError:T,sortedWatchlist:W,getWatchlistScore:ne,getLatestScore:le,addSearchResult:Se,evaluatedCodes:$,klineLoadedCodes:re,markKlineLoaded:Pe,watchlistSearch:se,watchlistResults:me,watchlistSearching:Me,dataRefreshConfig:oe,dataRefreshReloading:fe,dataRefreshSaving:ke,levelVar:ie,levelBgVar:te,undoStack:ve,showUndoMessage:Ne}=s,Ae=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ae.REALTIME_WS_PATH;const Ue=Ae.REALTIME_DEGRADED_TEXT||"数据不可达",Ze=Ae.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ae.WARN_RISE_SPEED_THRESHOLD!=null&&Ae.WARN_RISE_SPEED_THRESHOLD,Ae.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ae.WARN_VOLUME_RATIO_THRESHOLD;const et=Ae.quoteFmt||{price:de=>de==null?"--":Number(de).toFixed(2),pct:de=>de==null?"--":Number(de).toFixed(2)+"%",num:de=>de==null?"--":Number(de).toFixed(2),color:de=>""},$e=3,he=5e3,xe=e({}),Re=e(!1),De=e("idle");let We=null,Ge=null,Ye=0;function Je(de){return Ae.checkQuoteWarning?Ae.checkQuoteWarning(de):null}function tt(de){return Je(xe.value[de])}function ue(de){return et.color(xe.value[de])}function ye(de){return et.price(xe.value[de]&&xe.value[de].price)}function Le(de){return et.pct(xe.value[de]&&xe.value[de].change_pct)}function He(de,Ce){return et.num(xe.value[de]&&xe.value[de][Ce])}function y(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function O(){if(!We||We.readyState!==1)return;const de=(j.value||[]).map(Ce=>Ce.code);de.length!==0&&We.send(JSON.stringify({subscribe:de}))}function Y(){if(Ge&&(clearTimeout(Ge),Ge=null),We){try{We.onopen=null,We.onmessage=null,We.onerror=null,We.onclose=null,We.close()}catch{}We=null}xe.value={},Re.value=!1,De.value="idle"}function ce(){const de=y();if(!de||!Ae.buildRealtimeWsUrl||De.value==="open"||De.value==="connecting")return;let Ce;try{Ce=Ae.buildRealtimeWsUrl()+"?token="+encodeURIComponent(de)}catch{De.value="offline",Re.value=!0;return}De.value="connecting";let we=null;try{we=new WebSocket(Ce)}catch{De.value="offline",Re.value=!0;return}We=we,we.onopen=function(){De.value="open",Ye=0,O()},we.onmessage=function(ze){let Oe=null;try{Oe=JSON.parse(ze.data||"{}")}catch{return}if(!Oe||Oe.type!=="quotes")return;if(Re.value=!!Oe.degraded,Oe.degraded||!Array.isArray(Oe.data)){xe.value={};return}const Ve={};Oe.data.forEach(function(st){st&&st.code&&(Ve[st.code]=st)}),xe.value=Ve},we.onerror=function(){De.value="offline",Re.value=!0},we.onclose=function(){De.value="offline",Ye<$e?(Ye++,Ge=setTimeout(function(){De.value!=="open"&&ce()},he*Ye)):Re.value=!0}}return t(j,function(){De.value==="open"&&O()}),y()&&setTimeout(ce,500),{REALTIME_DEGRADED_TEXT:Ue,REALTIME_FALLBACK_TEXT:Ze,realtimeQuotes:xe,realtimeDegraded:Re,realtimeWsState:De,quoteWarningFor:tt,realtimeQuoteColor:ue,realtimePriceText:ye,realtimePctText:Le,realtimeRatioText:He,disconnectRealtimeQuotes:Y,connectRealtimeQuotes:ce}}}})();(function(){window.__quantModules||(window.__quantModules={});const s={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function v(c){return s[c]||"var(--text-tertiary)"}function t(c){return e[c]||"var(--bg-hover)"}const o=window.QuantUndoCore,d=o?o.createUndoStack():null;function b(c,i){if(!d||!window.Vue||!window.Vue.h)return;const g=window.Vue.h;ElementPlus.ElMessage.success({message:g("span",null,[c,g("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(i)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.create=function(i){const{ref:g,computed:r,watch:P}=Vue,{currentUser:k,selectedDate:S,stockDetail:C,stockDetailTab:_,stockDetailVisible:D,stockDetailLoading:q,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:f,loadStockKline:M,refreshStockScore:I,disposeStockKline:E,aiHistory:A,aiLoading:R,aiEvalStage:F,aiEvalElapsed:H,aiEvalError:B,aiResult:G,loadLastEvaluation:X,autoEvaluateConfig:V,autoEvaluateScope:Q,batchStocks:z,batchRunning:a,batchTotal:p,batchCompleted:n,batchCurrent:h,batchStatuses:ee,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:L,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:ae,showAutoEvaluateSettings:Z,showBatchEvaluate:T}=i,W=ut=>(getComputedStyle(document.documentElement).getPropertyValue(ut)||"").trim(),ne=g(""),le=g("default"),Se=g("default"),$=g([]),re=r(()=>new Set($.value.map(ut=>ut.code))),Pe=g(!1),se=g(!1),me=r(()=>{const ut=[...$.value];return Se.value==="name"?ut.sort((_t,St)=>_t.name.localeCompare(St.name,"zh")):Se.value==="added"?ut.sort((_t,St)=>(St.added_at||"").localeCompare(_t.added_at||"")):Se.value==="score"&&ut.sort((_t,St)=>{const Rt=oe(_t.code);return oe(St.code)-Rt}),ut});function Me(ut){const _t=A.value.filter(Rt=>Rt.stock_code===ut);if(_t.length===0)return null;const St=_t.reduce((Rt,$t)=>Rt.evaluate_time>$t.evaluate_time?Rt:$t);return{score:St.result.total_score,color:v(St.result.level),bg:t(St.result.level)}}function oe(ut){const _t=Me(ut);return _t?_t.score:0}function fe(ut){gt(ut.code,ut.name),Ne.value=Ne.value.filter(_t=>_t.code!==ut.code),ve.value=""}const ke=r(()=>new Set(A.value.map(ut=>ut.stock_code))),ie=g(new Set);function te(ut){ie.value.add(ut)}const ve=g(""),Ne=g([]),Ae=g(!1),Ue=g({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ze=g(!1),et=g(!1),$e={v:null},he=window.__quantModules.watchlist.history.create({ref:g,computed:r,watch:P,currentUser:k,selectedDate:S,stockDetail:C,stockDetailTab:_,stockDetailVisible:D,stockDetailLoading:q,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:f,loadStockKline:M,refreshStockScore:I,disposeStockKline:E,aiHistory:A,aiLoading:R,aiEvalStage:F,aiEvalElapsed:H,aiEvalError:B,aiResult:G,loadLastEvaluation:X,autoEvaluateConfig:V,autoEvaluateScope:Q,batchStocks:z,batchRunning:a,batchTotal:p,batchCompleted:n,batchCurrent:h,batchStatuses:ee,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:L,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:ae,showAutoEvaluateSettings:Z,showBatchEvaluate:T,getCSSVar:W,quickEvalStock:ne,evalStrategy:le,watchlistSort:Se,watchlist:$,watchlistCodes:re,aiHistoryLoading:Pe,aiHistoryError:se,sortedWatchlist:me,getWatchlistScore:Me,getLatestScore:oe,addSearchResult:fe,evaluatedCodes:ke,klineLoadedCodes:ie,markKlineLoaded:te,watchlistSearch:ve,watchlistResults:Ne,watchlistSearching:Ae,dataRefreshConfig:Ue,dataRefreshReloading:Ze,dataRefreshSaving:et,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,addToWatchlist:function(ut,_t){return $e.v.addToWatchlist(ut,_t)},removeFromWatchlist:function(ut){return $e.v.removeFromWatchlist(ut)}}),{doAiEvaluate:xe,aiHistoryTotal:Re,aiHistoryLoadingMore:De,hasMoreAiHistory:We,loadAiHistory:Ge,loadMoreAiHistory:Ye,deleteSingleHistory:Je,toggleSelectHistory:tt,clearSelection:ue,clearWatchlistSelection:ye,batchReevaluateHistory:Le,batchAddToWatchlist:He,batchAddToPortfolio:y,batchRemoveWatchlist:O,toggleSelectWatchlist:Y,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Ce,loadAutoEvaluateConfig:we,saveAutoEvaluateConfig:ze}=he,Oe=window.__quantModules.watchlist.list.create({ref:g,computed:r,watch:P,currentUser:k,selectedDate:S,stockDetail:C,stockDetailTab:_,stockDetailVisible:D,stockDetailLoading:q,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:f,loadStockKline:M,refreshStockScore:I,disposeStockKline:E,aiHistory:A,aiLoading:R,aiEvalStage:F,aiEvalElapsed:H,aiEvalError:B,aiResult:G,loadLastEvaluation:X,autoEvaluateConfig:V,autoEvaluateScope:Q,batchStocks:z,batchRunning:a,batchTotal:p,batchCompleted:n,batchCurrent:h,batchStatuses:ee,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:L,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:ae,showAutoEvaluateSettings:Z,showBatchEvaluate:T,getCSSVar:W,quickEvalStock:ne,evalStrategy:le,watchlistSort:Se,watchlist:$,watchlistCodes:re,aiHistoryLoading:Pe,aiHistoryError:se,sortedWatchlist:me,getWatchlistScore:Me,getLatestScore:oe,addSearchResult:fe,evaluatedCodes:ke,klineLoadedCodes:ie,markKlineLoaded:te,watchlistSearch:ve,watchlistResults:Ne,watchlistSearching:Ae,dataRefreshConfig:Ue,dataRefreshReloading:Ze,dataRefreshSaving:et,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Ge}),{watchlistLoading:Ve,loadWatchlist:st,addToWatchlist:gt,removeFromWatchlist:nt,clearWatchlist:K,toggleWatchlist:ge,showStockKline:Qe,preloadingKline:je,preloadWatchlistKline:ft,watchlistEvaluate:ht,batchEvaluateWatchlist:Mt,batchEvaluateSelected:mt,searchStockForWatchlist:pt,loadDataRefreshConfig:Et,saveDataRefreshConfig:Yt,triggerDataReload:Tt,dataPullRunning:zt,triggerDataPull:At}=Oe;$e.v=Oe;const vt=window.__quantModules.watchlist.analytics.create({ref:g,computed:r,watch:P,currentUser:k,selectedDate:S,stockDetail:C,stockDetailTab:_,stockDetailVisible:D,stockDetailLoading:q,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:f,loadStockKline:M,refreshStockScore:I,disposeStockKline:E,aiHistory:A,aiLoading:R,aiEvalStage:F,aiEvalElapsed:H,aiEvalError:B,aiResult:G,loadLastEvaluation:X,autoEvaluateConfig:V,autoEvaluateScope:Q,batchStocks:z,batchRunning:a,batchTotal:p,batchCompleted:n,batchCurrent:h,batchStatuses:ee,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:L,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:ae,showAutoEvaluateSettings:Z,showBatchEvaluate:T,getCSSVar:W,quickEvalStock:ne,evalStrategy:le,watchlistSort:Se,watchlist:$,watchlistCodes:re,aiHistoryLoading:Pe,aiHistoryError:se,sortedWatchlist:me,getWatchlistScore:Me,getLatestScore:oe,addSearchResult:fe,evaluatedCodes:ke,klineLoadedCodes:ie,markKlineLoaded:te,watchlistSearch:ve,watchlistResults:Ne,watchlistSearching:Ae,dataRefreshConfig:Ue,dataRefreshReloading:Ze,dataRefreshSaving:et,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Ge}),{groupedByDate:It,aiHistoryByStock:Nt,groupedByMonth:Ct,aiHistoryStockCount:Bt,scoreDistribution:Xt,quickEvaluate:Ot,toggleDateExpand:U,toggleSelectDate:Ee,toggleSelectMonth:Ke,toggleStockExpand:Ie,toggleSelectStock:rt,registerTrendChart:ct,viewAiResult:wt,doBatchEvaluate:jt}=vt,qt=window.__quantModules.watchlist.realtime.create({ref:g,computed:r,watch:P,currentUser:k,selectedDate:S,stockDetail:C,stockDetailTab:_,stockDetailVisible:D,stockDetailLoading:q,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:f,loadStockKline:M,refreshStockScore:I,disposeStockKline:E,aiHistory:A,aiLoading:R,aiEvalStage:F,aiEvalElapsed:H,aiEvalError:B,aiResult:G,loadLastEvaluation:X,autoEvaluateConfig:V,autoEvaluateScope:Q,batchStocks:z,batchRunning:a,batchTotal:p,batchCompleted:n,batchCurrent:h,batchStatuses:ee,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:L,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:ae,showAutoEvaluateSettings:Z,showBatchEvaluate:T,getCSSVar:W,quickEvalStock:ne,evalStrategy:le,watchlistSort:Se,watchlist:$,watchlistCodes:re,aiHistoryLoading:Pe,aiHistoryError:se,sortedWatchlist:me,getWatchlistScore:Me,getLatestScore:oe,addSearchResult:fe,evaluatedCodes:ke,klineLoadedCodes:ie,markKlineLoaded:te,watchlistSearch:ve,watchlistResults:Ne,watchlistSearching:Ae,dataRefreshConfig:Ue,dataRefreshReloading:Ze,dataRefreshSaving:et,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b}),{REALTIME_DEGRADED_TEXT:Lt,REALTIME_FALLBACK_TEXT:yt,realtimeQuotes:Zt,realtimeDegraded:Qt,realtimeWsState:ea,quoteWarningFor:ta,realtimeQuoteColor:Dt,realtimePriceText:aa,realtimePctText:ca,realtimeRatioText:da,disconnectRealtimeQuotes:Jt,connectRealtimeQuotes:ua}=qt;return{quickEvalStock:ne,evalStrategy:le,watchlistSort:Se,watchlist:$,watchlistCodes:re,sortedWatchlist:me,getWatchlistScore:Me,getLatestScore:oe,addSearchResult:fe,evaluatedCodes:ke,klineLoadedCodes:ie,markKlineLoaded:te,watchlistSearch:ve,watchlistResults:Ne,watchlistSearching:Ae,dataRefreshConfig:Ue,dataRefreshReloading:Ze,dataRefreshSaving:et,aiHistoryLoading:Pe,aiHistoryError:se,aiHistoryTotal:Re,aiHistoryLoadingMore:De,hasMoreAiHistory:We,loadMoreAiHistory:Ye,watchlistLoading:Ve,doAiEvaluate:xe,loadAiHistory:Ge,deleteSingleHistory:Je,toggleSelectHistory:tt,clearSelection:ue,clearWatchlistSelection:ye,batchReevaluateHistory:Le,batchAddToWatchlist:He,batchAddToPortfolio:y,batchRemoveWatchlist:O,toggleSelectWatchlist:Y,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Ce,loadAutoEvaluateConfig:we,saveAutoEvaluateConfig:ze,loadWatchlist:st,addToWatchlist:gt,removeFromWatchlist:nt,clearWatchlist:K,toggleWatchlist:ge,showStockKline:Qe,preloadingKline:je,preloadWatchlistKline:ft,watchlistEvaluate:ht,batchEvaluateWatchlist:Mt,batchEvaluateSelected:mt,searchStockForWatchlist:pt,loadDataRefreshConfig:Et,saveDataRefreshConfig:Yt,triggerDataReload:Tt,triggerDataPull:At,dataPullRunning:zt,groupedByDate:It,aiHistoryByStock:Nt,groupedByMonth:Ct,aiHistoryStockCount:Bt,scoreDistribution:Xt,quickEvaluate:Ot,toggleDateExpand:U,toggleSelectDate:Ee,toggleSelectMonth:Ke,toggleStockExpand:Ie,toggleSelectStock:rt,registerTrendChart:ct,viewAiResult:wt,doBatchEvaluate:jt,realtimeQuotes:Zt,realtimeDegraded:Qt,realtimeWsState:ea,connectRealtimeQuotes:ua,disconnectRealtimeQuotes:Jt,quoteWarningFor:ta,realtimeQuoteColor:Dt,realtimePriceText:aa,realtimePctText:ca,realtimeRatioText:da,REALTIME_DEGRADED_TEXT:Lt,REALTIME_FALLBACK_TEXT:yt}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(s){const{ref:e,computed:v}=Vue,t=e([]),o=e(null),d=e([]),b=e(!1),c=e(!1),i=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),r=e(!1),P=e(!1),k=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),S=e(!1),C=e("positions"),_=e(30),D=e(!1),q=e(""),u=e(!1),l=e({dates:[],equity:[],values:[]}),f=v(()=>t.value.length),M=e("metrics"),I=e(!1),E=e(""),A=e(!1),R=e({metrics:null,rules:[],rebalance:null}),F=v(function(){const w=R.value.metrics;if(!w)return[];const j=function(Z){return Z==null?"--":Number(Z).toFixed(2)+"%"},ae=function(Z){return Z==null?"--":Number(Z).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(w.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(w.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(w.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(w.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(w.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(w.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ae(w.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ae(w.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ae(w.calmar_ratio)},{key:"beta",label:"Beta",value:ae(w.beta)}]});async function H(){I.value=!0;try{const w=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ae=w&&w.success?w.risk:null,Z=j&&j.success?j.rules||[]:[],T=j&&j.success?j.rebalance:null;R.value={metrics:ae,rules:Z,rebalance:T},A.value=!!(ae&&Object.keys(ae).length>0),E.value=w&&w.note||j&&j.note||""}catch(w){console.warn("[portfolio] 加载风险数据失败:",w),A.value=!1,E.value="风险数据加载失败"}finally{I.value=!1}}async function B(){b.value=!0,c.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],o.value=j.summary||null):c.value=!0}catch(w){console.warn("[portfolio] 加载持仓失败:",w),c.value=!0}finally{b.value=!1}}async function G(){const w=g.value,j=(w.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const ae=Number(w.cost_price),Z=Number(w.quantity);if(!(ae>0)||!(Z>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}r.value=!0;try{const W=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(w.stock_name||"").trim(),cost_price:ae,quantity:Z})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"持仓已更新"),i.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await B(),N(_.value)):ElementPlus.ElMessage.error(W.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{r.value=!1}}async function X(w){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+w+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ae=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(w),{method:"DELETE"})).json();ae.success?(ElementPlus.ElMessage.success("已删除持仓"),await B(),z(),N(_.value)):ElementPlus.ElMessage.error(ae.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function V(w,j){k.value={stock_code:w,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},P.value=!0}async function Q(){const w=k.value;if(!w.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(w.price),ae=Number(w.quantity);if(!(j>0)||!(ae>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}S.value=!0;try{const T=await(await fetch("/api/portfolio/trades",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:w.stock_code,stock_name:w.stock_name||"",action:w.action,price:j,quantity:ae,trade_date:w.trade_date||"",note:(w.note||"").trim()})})).json();T.success?(ElementPlus.ElMessage.success(T.message||"调仓已记录"),P.value=!1,await B(),await z(),N(_.value)):ElementPlus.ElMessage.error(T.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{S.value=!1}}async function z(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(d.value=j.trades||[])}catch(w){console.warn("[portfolio] 加载调仓记录失败:",w)}}const a=w=>(getComputedStyle(document.documentElement).getPropertyValue(w)||"").trim();function p(w){if(!w||!w.length)return[];let j=w[0]||0;const ae=[];for(let Z=0;Z<w.length;Z++){const T=w[Z]||0;T>j&&(j=T),ae.push(j>0?Math.round((T-j)/j*1e3)/10:0)}return ae}function n(){const w={primary:a("--qc-primary-600")||"#b8922a",textPrimary:a("--text-primary")||"#1f2937",textSecondary:a("--text-secondary")||"#6b7280",border:a("--border-light")||"#e5e7eb",up:a("--color-rise")||"#E63946",down:a("--color-fall")||"#2E7D32"},j=l.value;return{tooltip:{trigger:"axis",backgroundColor:a("--bg-card")||"#ffffff",borderColor:w.border,textStyle:{color:w.textPrimary},formatter:function(ae){const Z=ae[0]?ae[0].dataIndex:-1,T=j.dates[Z]||"",W=j.equity[Z],ne=j.values[Z];let le=T||"";return W!=null&&(le+="<br/>组合净值: "+W),ne!=null&&(le+="<br/>组合市值: "+ne),le}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:w.textSecondary},axisLine:{lineStyle:{color:w.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:w.textSecondary},splitLine:{lineStyle:{color:w.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:w.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:w.primary,width:2},itemStyle:{color:w.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:p(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:w.down,width:1.5},itemStyle:{color:w.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function h(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function ee(w,j,ae){l.value={dates:w||[],equity:j||[],values:ae||[]},u.value=!!w&&w.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",n,{key:"portfolio-equity"}):h()}async function N(w){D.value=!0,q.value="";const j=Number(w)||_.value||30;_.value=j;try{const Z=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();Z.success?(q.value=Z.note||"",ee(Z.dates||[],Z.equity||[],Z.values||[])):(q.value="数据暂不可用",h())}catch(ae){console.warn("[portfolio] 加载收益曲线失败:",ae),q.value="数据暂不可用",h()}finally{D.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function x(w,j){if(w==null||w===""||isNaN(Number(w)))return"--";const ae=Number(w),Z=j??2;return(ae>=0?"+":"")+ae.toFixed(Z)}function m(w,j){if(w==null||w===""||isNaN(Number(w)))return"--";const ae=Number(w),Z=j??2;return(ae>=0?"+":"")+ae.toFixed(Z)+"%"}function L(w){if(w==null||w===""||isNaN(Number(w)))return"";const j=Number(w);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:o,trades:d,loading:b,loadError:c,showAddForm:i,addForm:g,addSaving:r,tradeFormVisible:P,tradeForm:k,tradeSaving:S,portfolioTab:C,equityDays:_,equityLoading:D,equityNote:q,equityHasData:u,portfolioCount:f,loadPortfolio:B,addPosition:G,removePosition:X,openTradeForm:V,submitTrade:Q,loadTrades:z,loadEquity:N,fmtSigned:x,fmtSignedPct:m,signClass:L,riskTab:M,riskLoading:I,riskNote:E,riskHasData:A,riskData:R,riskMetricList:F,loadRisk:H}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function s(i,g){var r=Number(i);return isFinite(r)?r:typeof g=="number"?g:0}function e(i){var g=Array.isArray(i)?i:[];if(g.length<2)return null;for(var r=-1/0,P=0,k=0,S=0,C=0,_=0;_<g.length;_++){var D=s(g[_].equity!=null?g[_].equity:g[_].value);D>r&&(r=D,P=_);var q=r>0?(r-D)/r*100:0;q>k&&(k=q,S=P,C=_)}function u(l){return g[l]&&g[l].date?g[l].date:""}return{maxDrawdown:Math.round(k*100)/100,peakIndex:S,troughIndex:C,peakDate:u(S),troughDate:u(C)}}function v(i){for(var g=i||{},r={},P=Object.keys(g).sort(),k=0;k<P.length;k++){var S=P[k],C=String(S).slice(0,4);/^\d{4}$/.test(C)&&(r[C]=(r[C]||0)+s(g[S]))}var _=Object.keys(r).sort();return _.map(function(D){return{year:D,return:Math.round(r[D]*100)/100}})}function t(i){var g=Array.isArray(i)?i:[],r={};g.forEach(function(S){(S.points||[]).forEach(function(C){C&&C.date&&(r[C.date]=1)})});var P=Object.keys(r).sort(),k=g.map(function(S){var C={};return(S.points||[]).forEach(function(_){_&&_.date&&(C[_.date]=s(_.value!=null?_.value:_.equity))}),{name:S.name||"",data:P.map(function(_){return _ in C?C[_]:null})}});return{dates:P,series:k}}function o(i){var g=i||{},r=function(k){return s(k)},P=function(k,S){var C=r(k);return isFinite(C)?C.toFixed(S):"--"};return[{key:"total_return",label:"总收益",value:P(g.total_return,2),suffix:"%",dir:r(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:P(g.annual_return,2),suffix:"%",dir:r(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:P(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:P(g.sharpe_ratio,2),suffix:"",dir:r(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:P(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:P(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(r(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:P(g.volatility,2),suffix:"%",dir:""}]}function d(i){var g=i==null?"":String(i);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function b(i){var g=i||{},r=[];r.push("回测指标"),r.push("指标,数值"),(g.metrics||[]).forEach(function(u){r.push(d(u.label)+","+d((u.value||"")+(u.suffix||"")))}),r.push(""),r.push("净值曲线");var P=["日期"].concat((g.series||[]).map(function(u){return u.name}));r.push(P.map(d).join(","));for(var k=g.dates||[],S=g.series||[],C=0;C<k.length;C++){for(var _=[k[C]],D=0;D<S.length;D++){var q=S[D].data&&S[D].data[C];_.push(q??"")}r.push(_.map(d).join(","))}return r.push(""),r.push("交易明细"),r.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(u){r.push(d(u.date)+","+d(u.stock)+","+d(u.action)+","+d(u.reason))}),r.join(`
`)}function c(i){return i==="buy"?"买入":i==="sell"?"卖出":i||""}return{toNum:s,computeMaxDrawdownRegion:e,buildAnnualReturns:v,buildNavSeries:t,buildMetrics:o,buildBacktestCsv:b,tradeActionText:c}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(s){const{ref:e,computed:v}=Vue,t=window.QuantBacktest||{},o=s||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],c=(Array.isArray(o.backtestStrategies)&&o.backtestStrategies.length?o.backtestStrategies:d).map(a=>({id:a.id,name:a.name})),i=e(c.length?[c[0].id]:[]),g=e(D()),r=e(1e5),P=e(3e-4),k=e(!1),S=e(!1),C=e(null),_=e("");function D(){const a=new Date,p=new Date;p.setFullYear(p.getFullYear()-1);const n=h=>h.getFullYear()+"-"+String(h.getMonth()+1).padStart(2,"0")+"-"+String(h.getDate()).padStart(2,"0");return[n(p),n(a)]}function q(a){const p=i.value.indexOf(a);p>=0?i.value.length>1&&i.value.splice(p,1):i.value.push(a)}function u(a){const p=c.find(n=>n.id===a);return p?p.name:a}function l(a){const p=a.summary||a;return{strategy_id:p.strategy_id,start_date:p.start_date,end_date:p.end_date,total_days:p.total_days,total_return:p.total_return,annual_return:p.annual_return,max_drawdown:p.max_drawdown,volatility:p.volatility,sharpe_ratio:p.sharpe_ratio,sortino_ratio:p.sortino_ratio,win_rate:p.win_rate,profit_loss_ratio:p.profit_loss_ratio,avg_positions:p.avg_positions!=null?p.avg_positions:p.avg_positions_per_day,total_trades:p.total_trades,turnover_rate:p.turnover_rate,success:p.success!==!1,message:p.message||"",insample_total_return:p.insample_total_return!=null?p.insample_total_return:null,outsample_total_return:p.outsample_total_return!=null?p.outsample_total_return:null,out_sample_ratio:p.out_sample_ratio!=null?p.out_sample_ratio:.2,overfit_warning:!!p.overfit_warning,overfit_reason:p.overfit_reason||""}}function f(a){return(Array.isArray(a)?a:[]).map(p=>({date:p.date,value:p.equity!=null?p.equity:p.value}))}function M(a,p){const n=l(p),h=f(p.equity_curve),ee=p.monthly_returns||{},N=Array.isArray(p.trade_history)?p.trade_history:[],x={id:a,name:u(a),summary:n,equityCurve:h,monthlyReturns:ee,trades:N};let m=null;if(k.value){const L=Number(r.value)||1e5;m={name:"现金基准",points:h.map(w=>({date:w.date,value:L}))}}return{success:!0,mode:"single",strategies:[x],primary:x,benchmark:m,period:(n.start_date||"")+" ~ "+(n.end_date||"")}}function I(a,p){const n=p.strategy_results||{},h=a.map(x=>{const m=n[x];if(!m)return null;const L=l(m);return{id:x,name:u(x),summary:L,equityCurve:f(m.equity_curve),monthlyReturns:m.monthly_returns||{},trades:Array.isArray(m.trade_history)?m.trade_history:[]}}).filter(x=>x&&x.summary.success!==!1),ee=h.length?h[0]:null;let N=null;return k.value&&(N={name:"等权组合基准",points:f(p.portfolio_equity)}),{success:h.length>0,mode:"multi",strategies:h,primary:ee,benchmark:N,period:ee?ee.summary.start_date+" ~ "+ee.summary.end_date:""}}const E=v(()=>{const a=C.value;return!a||!a.primary?[]:t.buildMetrics?t.buildMetrics(a.primary.summary):[]}),A=v(()=>{const a=C.value;return!a||!a.primary||!a.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(a.primary.monthlyReturns):[]}),R=v(()=>{const a=C.value;return!a||!a.primary?[]:(a.primary.trades||[]).slice().sort((p,n)=>String(n.date||"").localeCompare(String(p.date||"")))}),F=v(()=>{const a=C.value;return!a||!a.strategies||a.strategies.length<2?[]:a.strategies.map(p=>({name:p.name,metrics:t.buildMetrics?t.buildMetrics(p.summary):[]}))}),H=v(()=>{const a=C.value;return!a||!a.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(a.primary.equityCurve):null});async function B(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const p=i.value;if(!p.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const n=g.value,h={start_date:n&&n[0]||void 0,end_date:n&&n[1]||void 0},ee={"Content-Type":"application/json"};S.value=!0,C.value=null,_.value="";try{if(p.length===1){const N=Object.assign({},h,{initial_capital:Number(r.value)||1e5,commission_rate:Number(P.value)||3e-4}),x=await fetch("/api/backtest/"+encodeURIComponent(p[0]),{method:"POST",headers:ee,body:JSON.stringify(N)});if(!x.ok){const L=await x.json().catch(()=>({}));throw new Error(L.detail||"回测失败")}const m=await x.json();if(!m.success)throw new Error(m.message||"回测失败");C.value=M(p[0],m)}else{const N=await fetch("/api/backtest/multi",{method:"POST",headers:ee,body:JSON.stringify(Object.assign({},h,{strategy_ids:p}))});if(!N.ok){const m=await N.json().catch(()=>({}));throw new Error(m.detail||"回测失败")}const x=await N.json();if(!x.success)throw new Error(x.message||"多策略回测失败");if(C.value=I(p,x.data||{}),!C.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(N){_.value=N&&N.message?N.message:"回测失败",ElementPlus.ElMessage.error(_.value)}finally{S.value=!1}}function G(){const a=C.value,p={dates:[],series:[]};if(!a)return p;const n=a.strategies.map(ee=>({name:ee.name,points:ee.equityCurve}));a.benchmark&&a.benchmark.points&&a.benchmark.points.length&&n.push({name:a.benchmark.name,points:a.benchmark.points});const h=t.buildNavSeries?t.buildNavSeries(n):p;return X(h,a)}function X(a,p){const n=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),h={primary:n("--qc-primary-600")||"#b8922a",success:n("--color-success")||"#4CAF50",accent:n("--color-accent")||"#F59E0B",info:n("--color-info")||"#1976d2",ai:n("--color-ai")||"#6366f1",textPrimary:n("--text-primary")||"#1f2937",textSecondary:n("--text-secondary")||"#6b7280",border:n("--border-light")||"#e5e7eb",up:n("--color-rise")||"#E63946",down:n("--color-fall")||"#2E7D32",bg:n("--bg-card")||"#ffffff"},ee=[h.primary,h.success,h.accent,h.info,h.ai],x=h.bg.length===7&&parseInt(h.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",m=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(p.primary?p.primary.equityCurve:[]):null,L=m&&m.peakDate&&m.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:h.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+m.maxDrawdown+"%",xAxis:m.peakDate,itemStyle:{color:h.down}},{xAxis:m.troughDate}]]}:void 0,w=a.series.map((j,ae)=>{const Z=p.benchmark&&j.name===p.benchmark.name,T=ee[ae%ee.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Z?2:2.4,type:Z?"dashed":"solid",color:T},itemStyle:{color:T},emphasis:{focus:"series"},...ae===0&&L?{markArea:L}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:x,borderColor:h.border,textStyle:{color:h.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:h.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:a.dates,boundaryGap:!1,axisLine:{lineStyle:{color:h.border}},axisLabel:{color:h.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:h.textSecondary,fontSize:11},splitLine:{lineStyle:{color:h.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:h.border,textStyle:{color:h.textSecondary,fontSize:10}}],series:w}}function V(a){if(!a){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",G,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function Q(){const a=C.value;if(!a||!a.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const p=a.strategies.map(w=>({name:w.name,points:w.equityCurve}));a.benchmark&&p.push({name:a.benchmark.name,points:a.benchmark.points});const n=t.buildNavSeries?t.buildNavSeries(p):{dates:[],series:[]},h=t.tradeActionText||(w=>w),ee=R.value.map(w=>({date:w.date,stock:w.stock,action:h(w.action),reason:w.reason})),N=t.buildBacktestCsv?t.buildBacktestCsv({metrics:E.value,dates:n.dates,series:n.series,trades:ee}):"",x=new Blob(["\uFEFF"+N],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(x),L=document.createElement("a");L.href=m,L.download="backtest-"+a.strategies.map(w=>w.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",L.click(),URL.revokeObjectURL(m),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function z(a,p){return a==null||a===""||isNaN(Number(a))?"--":Number(a).toFixed(p??2)}return{btStrategyOptions:c,btSelectedStrategies:i,toggleBtStrategy:q,btDateRange:g,btCapital:r,btCommissionRate:P,btIncludeBenchmark:k,btRunning:S,btResult:C,btError:_,btMetrics:E,btAnnualReturns:A,btTrades:R,btStrategyMetricsRows:F,btDrawdownRegion:H,runBacktestWorkbench:B,exportBacktestCSV:Q,registerBacktestNavChart:V,btFmtNum:z}}}})();(function(){const{ref:s,computed:e,watch:v,onUnmounted:t}=Vue,o=r=>(getComputedStyle(document.documentElement).getPropertyValue(r)||"").trim(),d=72,b={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},c={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},i={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},g={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const r=s({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),P=s({}),k=s(!1),S=s({}),C=s({cycles:[]}),_=s([]),D=s(0),q=s(!1),u=s({autoRefresh:!0,refreshInterval:300}),l=s(""),f=s(""),M=s(!1),I=s("");let E=null;const A={x:0,y:0},R=e(()=>{const $=P.value;return["recession","recovery","overheat","stagflation"].map(Pe=>{const se=$[Pe]||{};return{key:Pe,name:se.name||Pe,icon:i[se.icon]||"bar-chart-3",color:se.color||o("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&g[Pe]||""}})}),F=e(()=>{var re,Pe,se,me;const $=r.value.indicators||{};return[{key:"pmi",label:"PMI",value:(re=$.pmi)==null?void 0:re.toFixed(2),color:$.pmi>=50?o("--color-success")||"#43a047":o("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Pe=$.gdp_growth)==null?void 0:Pe.toFixed(2))+"%",color:o("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=$.cpi)==null?void 0:se.toFixed(2))+"%",color:$.cpi>1.2?o("--color-danger")||"#E53935":o("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((me=$.m2_growth)==null?void 0:me.toFixed(2))+"%",color:o("--color-success")||"#43a047"}]}),H=$=>{$=$||{};const re=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Pe=()=>o("--color-success")||"#43a047",se=()=>o("--color-danger")||"#E53935",me=()=>o("--color-warning")||"#FF9800",Me={宽松:Pe(),中位:me(),偏低:se(),高增长:Pe(),承压:se(),不利:se()};return re.map(oe=>{const fe=$[oe.key]||{},ke=fe.score||0,ie=Math.min(100,Math.max(5,(ke+2)*25)),te=ke>=.3?"var(--bar-fill-ok)":ke>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",ve=ke>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:oe.key,label:oe.label,scoreStr:ke.toFixed(2),level:fe.level||"—",barWidth:ie,barColor:te,scoreColor:ve,color:Me[fe.level]||"var(--text-tertiary)"}})},B=e(()=>H(r.value.dimension_scores)),G=e(()=>H(S.value._dimensions)),X=e(()=>{var re;const $=((re=r.value.confidence)==null?void 0:re.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),V=e(()=>{var se,me,Me,oe;const $=P.value,re={recovery:0,overheat:1,stagflation:2,recession:3},Pe={};for(const[fe,ke]of Object.entries($))Pe[fe]={name:ke.name,icon:ke.icon,color:ke.color,lightColor:ke.bg_color,duration:"~"+(((se=ke.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:re[fe]||0,period:((Me=(me=ke.case_studies)==null?void 0:me[0])==null?void 0:Me.split("：")[0])||"",avgMonths:((oe=ke.historical_stats)==null?void 0:oe.avg_duration_months)||18};return Pe}),Q=e(()=>{var ke,ie;const $=r.value.stage,Pe={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},se=r.value.dimension_scores||{},me=((ke=se.growth)==null?void 0:ke.score)||0,Me=((ie=se.inflation)==null?void 0:ie.score)||0,oe=Math.max(-30,Math.min(30,me*15)),fe=Math.max(-30,Math.min(30,-Me*15));return{x:Pe.x+oe,y:Pe.y+fe,prevX:A.x,prevY:A.y}}),z=e(()=>{var se;const $=Math.min(100,((se=r.value.timing)==null?void 0:se.progress_percent)||0),re=r.value.color||"var(--state-success-solid)",Pe=$>100?"linear-gradient(90deg, "+re+", var(--state-warning-solid))":re;return{width:$+"%",background:Pe}});function a(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[r.value.stage]||0}function p(){var $,re;return((re=($=r.value)==null?void 0:$.timing)==null?void 0:re.progress_percent)||0}function n(){var $,re;return((re=($=r.value)==null?void 0:$.timing)==null?void 0:re.duration_months)||0}function h(){var $,re;return((re=($=r.value)==null?void 0:$.timing)==null?void 0:re.avg_duration_months)||18}function ee($){var me,Me;const re=V.value,Pe=((me=re[r.value.stage])==null?void 0:me.order)||0;return(((Me=re[$])==null?void 0:Me.order)||0)<Pe}function N($){return b[$]||$}function x($){return c[$]||$}function m($){const re=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return re[$-1]||re[3]}async function L(){try{const re=await(await fetch("/api/market/merrill-clock/stages")).json();re.success&&re.data&&(P.value=re.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function w(){q.value=!0;try{ae();const re=await(await fetch("/api/market/merrill-clock/timeline")).json();if(re.success&&re.data){const Pe=Array.isArray(re.data.cycles)?re.data.cycles.slice().reverse():[];C.value={cycles:Pe}}}catch{console.warn("获取美林时钟时间轴失败")}finally{q.value=!1}}async function j($){await T($)}async function ae(){try{const re=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();re&&re.success&&re.data&&(_.value=re.data.items||[],D.value=re.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function Z(){var $,re;try{const se=await(await fetch("/api/market/merrill-clock")).json(),me=se.stage||"recovery",Me=P.value[me]||{};if(r.value={...Me,...se,stage_cn:se.stage_cn||Me.stage_cn||"",stage_name:se.stage_name||Me.name||"",name:se.name||Me.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),I.value&&I.value!==me){const oe=P.value,fe=(($=oe[I.value])==null?void 0:$.name)||I.value,ke=((re=oe[me])==null?void 0:re.name)||me;ElementPlus.ElMessage({message:"美林时钟阶段切换："+fe+" → "+ke,type:"warning",duration:6e3,showClose:!0})}I.value=me}catch(Pe){console.error("获取美林时钟失败:",Pe);const se=P.value.recovery||{};r.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function T($){var Pe;k.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",S.value=P.value[$]||P.value.recovery||{};const re=((Pe=r.value)==null?void 0:Pe.stage)===$;S.value._isCurrent=re,re&&r.value&&(S.value._nextPrediction=r.value.next_stage_prediction,S.value._confidence=r.value.confidence,S.value._stage=r.value.stage,S.value._dimensions=r.value.dimension_scores);try{const me=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(me.success&&me.data){const Me={...P.value[$],...me.data};Me._is_current!==void 0&&(Me._isCurrent=Me._is_current),Me._current_timing&&(Me._currentTiming=Me._current_timing),Me._last_period&&(Me._lastPeriod=Me._last_period),S.value._nextPrediction&&(Me._nextPrediction=S.value._nextPrediction),S.value._confidence&&(Me._confidence=S.value._confidence),S.value._stage&&(Me._stage=S.value._stage),S.value._dimensions&&(Me._dimensions=S.value._dimensions),Object.assign(S.value,Me)}}catch(se){console.warn("获取阶段详情失败:",se)}}function W(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(E),E=setInterval(Z,u.value.refreshInterval*1e3)):clearInterval(E),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ne(){M.value=!0,f.value="";try{const re=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();re.success?(f.value="重评估完成："+(re.stage_name||re.stage),await Z(),ElementPlus.ElMessage.success("重评估完成")):(f.value=re.message||"重评估失败",ElementPlus.ElMessage.error(re.message||"重评估失败"))}catch{f.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{M.value=!1}}function le(){const $=localStorage.getItem("merrill_clock_config");if($)try{const re=JSON.parse($);u.value={...u.value,...re}}catch{}u.value.autoRefresh&&(E=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),Z()},u.value.refreshInterval*1e3))}function Se(){E&&clearInterval(E)}return t(()=>{Se()}),{merrillData:r,merrillStagesConfig:P,showMerrillDetail:k,merrillDetailData:S,merrillTimeline:C,merrillSnapshots:_,merrillSnapshotsTotal:D,fetchMerrillSnapshots:ae,timelineLoading:q,merrillClockConfig:u,merrillClockLastUpdated:l,merrillReevalResult:f,merrillReevalLoading:M,stages:R,indicatorList:F,dimensionScoreList:B,detailDimensionScoreList:G,confidenceColor:X,timelineStages:V,clockPosition:Q,merrillProgressStyle:z,FULL_CYCLE_MONTHS:d,getStageAngle:a,getCycleProgress:p,getCurrentStageMonths:n,getStageTotalMonths:h,isStageCompleted:ee,getCharLabel:N,getAssetName:x,getRankColor:m,fetchMerrillStages:L,fetchMerrillClock:Z,loadMerrillTimeline:w,showTimelineStage:j,showStageDetail:T,saveMerrillClockConfig:W,doMerrillReevaluate:ne,startAutoRefresh:le,stopAutoRefresh:Se}}})();(function(){function s(c){return getComputedStyle(document.documentElement).getPropertyValue(c).trim()}var e=[210,28,165,290,348,190,52,250];function v(){var c=!1;try{c=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var i=c?62:58,g=c?62:40;return e.map(function(r){return"hsl("+r+", "+i+"%, "+g+"%)"})}function t(){return{textStyle:{color:s("--text-primary")||"#1f2937"},backgroundColor:s("--chart-bg")||"transparent",color:v(),legend:{textStyle:{color:s("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:s("--bg-card")||"#ffffff",borderColor:s("--border-light")||"#e5e7eb",textStyle:{color:s("--text-primary")||"#1f2937"}}}}const o=[];function d(c){typeof c=="function"&&o.push(c)}function b(){o.slice().forEach(function(c){try{c()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:v,registerChart:d,refreshAllCharts:b,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:b}}}})();(function(){const{ref:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const v=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&v.sidebarCollapsed&&(v.sidebarCollapsed.value=d==="1")}catch{}if(!v)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}v.currentPage.value=d.key,v.currentSubPage.value=d.subPages[0]||""},o=()=>{v.sidebarCollapsed.value=!v.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",v.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:v.menus,currentPage:v.currentPage,sidebarCollapsed:v.sidebarCollapsed,navigate:t,toggle:o,sanitizeHtml:v.sanitizeHtml,keyClick:v.keyClick,t:v.t}}}})();const na={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(s){const e=s,v={"layout-dashboard":kv,calendar:_v,bot:wv,"flask-conical":bv,zap:yv,settings:hv,"chevron-down":gv,"chevron-right":pv,"chevron-left":fv,menu:mv,search:vv,bell:uv,sun:dv,moon:cv,user:rv,"user-round":ov,home:iv,x:lv,database:nv,activity:sv,clock:av,"bar-chart-3":tv,shield:ev,"hard-drive":Zu,"file-text":Xu,users:$u,cpu:Ju,"pie-chart":Qu,info:Yu,"log-out":Gu,palette:Uu,languages:Wu,refresh:Ku,download:Bu,"external-link":Hu,command:Fu,sparkles:Vu,"trending-up":ju,"trending-down":Ou,"circle-dot":Nu,check:Iu,"alert-triangle":Lu,loader:Au,"arrow-left":zu,"arrow-right":Ru,eye:Du,"eye-off":Pu,lock:Tu,"sliders-horizontal":Mu,play:Eu,history:qu,layers:Cu,"line-chart":Su,target:xu,"search-check":ku,star:_u,"message-circle":wu,"calendar-days":bu,"calendar-range":yu,"calendar-check":hu,brain:gu,lightbulb:pu,"octagon-x":fu,flag:mu,package:vu,"clipboard-list":uu,pin:du,"radio-tower":cu,gauge:ru,landmark:ou,"candlestick-chart":iu,wallet:lu,"badge-check":nu,key:su,factory:au,trophy:tu,rocket:eu,flame:Zd,"map-pin":Xd,"scroll-text":$d,"book-open":Jd,dna:Qd,"bar-chart":Yd,plus:Gd,"star-off":Ud,upload:Wd,gem:Kd,"folder-open":Bd,link:Hd,save:Fd,"trash-2":Vd,pause:jd,"help-circle":Od,"play-circle":Nd,pencil:Id,folder:Ld,code:Ad,sprout:zd,wheat:Rd,snowflake:Dd,fuel:Pd,banknote:Td,send:Md,inbox:Ed,"wifi-off":qd,"check-circle-2":Cd,"x-circle":Sd},t=()=>v[e.name]||v["circle-dot"];return(o,d)=>(pe(),Ut(ud(t()),{size:s.size,"stroke-width":s.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},la=(s,e)=>{const v=s.__vccOpts||s;for(const[t,o]of e)v[t]=o;return v},xv={name:"qc-sidebar",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.menus&&s.menus.value||[]),v=lt(()=>s.currentPage&&s.currentPage.value||""),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=lt({get:()=>s.sidebarCollapsed&&s.sidebarCollapsed.value||!1,set:q=>{s.sidebarCollapsed&&(s.sidebarCollapsed.value=q)}}),d=kt({}),b={research:"量化投研",platform:"平台管理"},c=["research","platform"],i=q=>v.value===q.key,g=(q,u)=>v.value===q.key&&s.currentSubPage&&s.currentSubPage.value===u,r=q=>Array.isArray(q.subPages)&&q.subPages.length>1,P=(q,u)=>s.subPageNames&&s.subPageNames[u]||u;function k(q){!r(q)||o.value||(d.value[q.key]=!d.value[q.key])}function S(){e.value.forEach(q=>{d.value[q.key]===void 0&&(d.value[q.key]=i(q))})}async function C(q,u){const l=u||q.subPages&&q.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(q.key,l):(s.currentPage.value=q.key,s.currentSubPage&&(s.currentSubPage.value=l)),s.navigateTo&&s.navigateTo(q.key,l)}function _(){o.value=!o.value;try{localStorage.setItem("sidebar_collapsed",o.value?"1":"0")}catch{}}function D(q){if(q.ctrlKey&&q.key.toLowerCase()==="b"&&(q.preventDefault(),_()),!q.ctrlKey&&!q.metaKey&&!q.altKey&&(q.key==="ArrowDown"||q.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=u.indexOf(document.activeElement);if(l>=0){q.preventDefault();const f=u[(l+(q.key==="ArrowDown"?1:u.length-1))%u.length];f&&f.focus()}}}return wa(()=>{S(),document.addEventListener("keydown",D)}),ja(()=>document.removeEventListener("keydown",D)),{state:s,menus:e,currentPage:v,navMode:t,sidebarCollapsed:o,expandedMenus:d,GROUP_LABELS:b,GROUPS:c,isActive:i,isChildActive:g,hasChildren:r,subLabel:P,toggleSubmenu:k,navigate:C,toggleCollapse:_}}},Sv={class:"qc-sidebar-logo"},Cv={key:0,class:"qc-logo-text"},qv={class:"qc-sidebar-nav"},Ev={key:0,class:"qc-nav-group"},Mv={key:0,class:"qc-nav-group-label"},Tv=["href","aria-current","onClick"],Pv={key:0,class:"qc-sidebar-label"},Dv={key:1,class:"qc-nav-badge"},Rv=["aria-expanded","aria-controls","onClick"],zv=["id"],Av=["href","aria-current","onClick"],Lv={class:"qc-sidebar-child-label"},Iv={class:"qc-sidebar-footer"},Nv=["aria-expanded","aria-label","title"];function Ov(s,e,v,t,o,d){const b=Pt("AppIcon"),c=Pt("el-tooltip");return pe(),be("nav",{class:it(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[qe("div",Sv,[e[1]||(e[1]=vd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(pe(),be("span",Cv,Fe(t.state.t("login.title")),1))]),qe("div",qv,[(pe(!0),be(ot,null,bt(t.GROUPS,i=>(pe(),be(ot,{key:i},[t.menus.some(g=>g.group===i)?(pe(),be("div",Ev,[t.sidebarCollapsed?Be("",!0):(pe(),be("span",Mv,Fe(t.GROUP_LABELS[i]),1)),(pe(!0),be(ot,null,bt(t.menus.filter(g=>g.group===i),g=>(pe(),be(ot,{key:g.key},[qe("div",{class:it(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[dt(c,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:Wt(()=>[qe("a",{class:it(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:xt(r=>t.navigate(g),["prevent"])},[dt(b,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(pe(),be("span",Pv,Fe(g.name),1)),!t.sidebarCollapsed&&g.badge?(pe(),be("span",Dv,Fe(g.badge),1)):Be("",!0)],10,Tv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(pe(),be("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:r=>t.toggleSubmenu(g)},[dt(b,{name:"chevron-down",size:14})],10,Rv)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(pe(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(pe(!0),be(ot,null,bt(g.subPages,r=>(pe(),be("a",{key:r,class:it(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,r)}]),href:"#"+g.key+"-"+r,"aria-current":t.isChildActive(g,r)?"page":null,onClick:xt(P=>t.navigate(g,r),["prevent"])},[qe("span",Lv,Fe(t.subLabel(g,r)),1)],10,Av))),128))],8,zv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),qe("div",Iv,[qe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...i)=>t.toggleCollapse&&t.toggleCollapse(...i))},[dt(b,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Nv)])],2)}const jv=la(xv,[["render",Ov]]),Vv={name:"qc-header",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=kt(!1),v=lt(()=>s.currentUser&&s.currentUser.value||null),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=lt(()=>{const se=s.currentPage&&s.currentPage.value,me=(s.menus&&s.menus.value||[]).find(Me=>Me.key===se);return!!(me&&me.subPages&&me.subPages.length)}),d=lt(()=>{const se=s.currentPage&&s.currentPage.value,me=s.currentPageName&&s.currentPageName.value;if(me)return me;const Me=(s.menus&&s.menus.value||[]).find(oe=>oe.key===se);return Me&&Me.name||se||""}),b=lt(()=>{const se=s.currentSubPage&&s.currentSubPage.value;return se&&s.subPageNames&&s.subPageNames[se]||se||""}),c=kt(typeof window<"u"?window.innerWidth<768:!1);function i(){c.value=window.innerWidth<768}wa(()=>window.addEventListener("resize",i)),ja(()=>window.removeEventListener("resize",i));const g=kt(!1),r=lt(()=>{const se=s.currentSubPage&&s.currentSubPage.value;return se&&s.subPageNames&&s.subPageNames[se]||se||""}),P=lt(()=>{const se=s.currentPage&&s.currentPage.value,me=(s.menus&&s.menus.value||[]).find(Me=>Me.key===se);return(me&&me.subPages||[]).map(Me=>({key:Me,label:s.subPageNames&&s.subPageNames[Me]||Me}))});function k(){g.value=!g.value}function S(){g.value=!1}function C(se){g.value=!1,s.activateTab&&s.activateTab(s.currentPage.value,se)}const _=lt(()=>(s.currentTheme&&s.currentTheme.value)==="dark"),D=kt(!1),q=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=lt(()=>{const se=q.find(me=>me.value===t.value);return se&&se.label||t.value});function l(){D.value=!D.value}function f(){D.value=!1}function M(se){D.value=!1,s.setNavMode&&s.setNavMode(se)}const I=lt({get:()=>s.searchQuery&&s.searchQuery.value||"",set:se=>{s.searchQuery&&(s.searchQuery.value=se)}}),E=kt(!1),A=kt([]),R=kt(!1),F=kt(!1);function H(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function B(){R.value=!0,F.value=!1;try{const me=await(await fetch("/api/alerts/history?limit=8",{headers:H()})).json();me&&me.success?A.value=me.history||[]:A.value=[]}catch{F.value=!0,A.value=[]}finally{R.value=!1}}function G(){E.value=!E.value,E.value&&B()}function X(){E.value=!1}function V(){E.value=!1,s.activateTab&&s.activateTab("system","notification")}const Q=kt(!1),z=s.themeHues||[45,220,0,140,270,320,180,25,250,-1],a=lt(()=>{const se=s.themeHue&&s.themeHue.value;return Number.isFinite(se)?se:45}),p=lt(()=>s.themeMode&&s.themeMode.value||"system"),n=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],h=lt(()=>s.density&&s.density.value||"comfortable");function ee(se){s.changeDensity&&s.changeDensity(se)}function N(se){return s.hueColor?s.hueColor(se):"hsl("+se+", 75%, 42%)"}const x={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function m(se){return s.hueName?s.hueName(se):x[se]||"自定义 "+se}function L(){Q.value=!Q.value}function w(){Q.value=!1}function j(se){s.changeThemeMode&&s.changeThemeMode(se)}function ae(se){s.changeThemeHue&&s.changeThemeHue(se)}function Z(){s.changeThemeMode&&s.changeThemeMode(_.value?"light":"dark")}function T(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}s.sidebarCollapsed&&(s.sidebarCollapsed.value=!s.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",s.sidebarCollapsed.value?"1":"0")}catch{}}function W(){e.value=!e.value}function ne(){e.value=!1}function le(se){return()=>{ne(),se&&se()}}function Se(){ne(),s.handleLogout&&s.handleLogout()}const $=lt(()=>s.marketData&&s.marketData.value||{}),re=kt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:$,bannerDismissed:re,dismissBanner:()=>{re.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:s,showUserMenu:e,currentUser:v,isDark:_,searchQuery:I,navMode:t,crumbRoot:d,crumbSub:b,hasToptabs:o,toggleThemeQuick:Z,toggleSidebar:T,openUserMenu:W,closeUserMenu:ne,menuItem:le,handleLogout:Se,openBellMenu:E,notifItems:A,notifLoading:R,notifError:F,toggleBell:G,closeBell:X,goNotificationCenter:V,openThemeMenu:Q,themeHues:z,themeHue:a,themeMode:p,hueColor:N,hueName:m,toggleThemeMenu:L,closeThemeMenu:w,pickThemeMode:j,pickThemeHue:ae,DENSITY_MODES:n,density:h,pickDensity:ee,openNavModeMenu:D,NAV_MODES:q,navModeLabel:u,toggleNavModeMenu:l,closeNavModeMenu:f,pickNavMode:M,isMobile:c,openSubnavPicker:g,currentSubLabel:r,subnavOptions:P,toggleSubnavPicker:k,closeSubnavPicker:S,pickSubnav:C}}},Fv={class:"qc-header-wrap"},Hv={key:0,class:"non-trading-banner",role:"status"},Bv={class:"qc-header"},Kv={class:"visually-hidden"},Wv={class:"qc-header-left"},Uv=["aria-label"],Gv={key:0,class:"qc-header-subnav"},Yv=["aria-expanded"],Qv={class:"qc-subnav-picker-label"},Jv={key:0,class:"qc-subnav-picker-menu",role:"menu"},$v=["onClick"],Xv={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},Zv={class:"qc-crumb qc-crumb-root"},em={class:"qc-crumb qc-crumb-sub"},tm={key:1,class:"qc-crumb qc-crumb-root"},am={class:"qc-header-center"},sm={key:0,class:"qc-search-sublabel"},nm={class:"qc-header-right"},lm={class:"qc-hdr-pop"},im=["aria-expanded"],om={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},rm={key:0,class:"qc-bell-state"},cm={key:1,class:"qc-bell-state"},dm={key:2,class:"qc-bell-state"},um={key:3,class:"qc-bell-list"},vm={class:"qc-bell-item-title"},mm={class:"qc-bell-item-meta"},fm={key:0},pm={class:"qc-bell-item-time"},gm={class:"qc-hdr-pop"},hm=["aria-expanded"],ym={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},bm={class:"qc-theme-modes"},wm=["onClick"],_m={class:"qc-theme-swatches"},km=["title","aria-label","onClick"],xm={key:0,class:"qc-theme-swatch-check"},Sm={class:"qc-theme-custom-label"},Cm={class:"qc-theme-modes"},qm=["onClick"],Em={key:0,class:"qc-navmode-switch"},Mm=["aria-label","title","aria-expanded"],Tm={key:0,class:"qc-navmode-menu",role:"menu"},Pm=["onClick","onKeydown"],Dm={class:"qc-navmode-item-main"},Rm={class:"qc-user-menu"},zm=["aria-label","aria-expanded"],Am={key:0,class:"qc-user-dropdown",role:"menu"},Lm={class:"qc-user-dropdown-header"},Im={class:"qc-user-dropdown-name"},Nm={key:0,class:"qc-user-dropdown-chip"};function Om(s,e,v,t,o,d){var P,k,S,C,_,D,q;const b=Pt("AppIcon"),c=Pt("qc-top-tabs"),i=Pt("el-autocomplete"),g=Pt("el-slider"),r=md("click-outside");return pe(),be("div",Fv,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(pe(),be("div",Hv,[dt(b,{name:"alert-triangle",size:14}),e[15]||(e[15]=qe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),qe("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...u)=>t.dismissBanner&&t.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):Be("",!0),qe("header",Bv,[qe("h1",Kv,Fe(t.crumbRoot||"量化日历"),1),qe("div",Wv,[qe("button",{class:"qc-icon-btn","aria-label":(P=t.state.sidebarCollapsed)!=null&&P.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},[dt(b,{name:"menu",size:20})],8,Uv),t.isMobile?fa((pe(),be("div",Gv,[qe("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...u)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...u))},[qe("span",Qv,Fe(t.currentSubLabel||"二级"),1),dt(b,{name:"chevron-down",size:14})],8,Yv),t.openSubnavPicker?(pe(),be("div",Jv,[(pe(!0),be(ot,null,bt(t.subnavOptions,u=>(pe(),be("div",{key:u.key,class:it(["qc-subnav-picker-item",{"is-active":u.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(u.key)},Fe(u.label),11,$v))),128))])):Be("",!0)])),[[r,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(pe(),be("div",Xv,[qe("span",Zv,Fe(t.crumbRoot),1),t.crumbSub?(pe(),be(ot,{key:0},[e[16]||(e[16]=qe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),qe("span",em,Fe(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(pe(),be(ot,{key:2},[t.hasToptabs?(pe(),Ut(c,{key:0})):(pe(),be("span",tm,Fe(t.crumbRoot),1))],64)):Be("",!0)]),qe("div",am,[dt(i,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=u=>t.searchQuery=u),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:Wt(()=>[dt(b,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:Wt(()=>[...e[17]||(e[17]=[qe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:Wt(u=>{var l,f,M,I,E;return[qe("span",null,Fe((l=u==null?void 0:u.item)==null?void 0:l.icon)+" "+Fe(((f=u==null?void 0:u.item)==null?void 0:f.label)||((M=u==null?void 0:u.item)==null?void 0:M.name)),1),(I=u==null?void 0:u.item)!=null&&I.subLabel?(pe(),be("span",sm,Fe((E=u==null?void 0:u.item)==null?void 0:E.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),qe("div",nm,[fa((pe(),be("div",lm,[qe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...u)=>t.toggleBell&&t.toggleBell(...u))},[dt(b,{name:"bell",size:20})],8,im),t.openBellMenu?(pe(),be("div",om,[e[18]||(e[18]=qe("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(pe(),be("div",rm,"加载中...")):t.notifError?(pe(),be("div",cm,"加载失败")):t.notifItems.length?(pe(),be("div",um,[(pe(!0),be(ot,null,bt(t.notifItems,(u,l)=>(pe(),be("div",{key:u.id||l,class:it(["qc-bell-item",{"is-fail":u.ok===0}])},[qe("div",vm,Fe(u.title||u.event_type||"事件"),1),qe("div",mm,[sa(Fe(u.channel||""),1),u.recipient?(pe(),be("span",fm," · "+Fe(u.recipient),1)):Be("",!0),qe("span",pm,Fe(u.created_at||""),1)])],2))),128))])):(pe(),be("div",dm,"暂无通知")),qe("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...u)=>t.goNotificationCenter&&t.goNotificationCenter(...u))},"前往通知中心 →")])):Be("",!0)])),[[r,t.closeBell]]),fa((pe(),be("div",gm,[qe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...u)=>t.toggleThemeMenu&&t.toggleThemeMenu(...u))},[dt(b,{name:"palette",size:20})],8,hm),t.openThemeMenu?(pe(),be("div",ym,[e[19]||(e[19]=qe("div",{class:"qc-theme-section-label"},"外观模式",-1)),qe("div",bm,[(pe(),be(ot,null,bt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>qe("button",{key:u.k,class:it(["qc-theme-mode",{"is-active":t.themeMode===u.k}]),onClick:l=>t.pickThemeMode(u.k)},Fe(u.n),11,wm)),64))]),e[20]||(e[20]=qe("div",{class:"qc-theme-section-label"},"主题色",-1)),qe("div",_m,[(pe(!0),be(ot,null,bt(t.themeHues,u=>(pe(),be("button",{key:u,class:it(["qc-theme-swatch",{"is-active":t.themeHue===u}]),style:fd({background:t.hueColor(u)}),title:t.hueName(u),"aria-label":t.hueName(u),onClick:l=>t.pickThemeHue(u)},[t.themeHue===u?(pe(),be("span",xm,"✓")):Be("",!0)],14,km))),128))]),dt(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),qe("div",Sm,"自定义 "+Fe(t.themeHue)+"°",1),e[21]||(e[21]=qe("div",{class:"qc-theme-section-label"},"信息密度",-1)),qe("div",Cm,[(pe(!0),be(ot,null,bt(t.DENSITY_MODES,u=>(pe(),be("button",{key:u.k,class:it(["qc-theme-mode",{"is-active":t.density===u.k}]),onClick:l=>t.pickDensity(u.k)},Fe(u.n),11,qm))),128))])])):Be("",!0)])),[[r,t.closeThemeMenu]]),t.isMobile?Be("",!0):fa((pe(),be("div",Em,[qe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...u)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...u))},[dt(b,{name:"layers",size:20})],8,Mm),t.openNavModeMenu?(pe(),be("div",Tm,[(pe(!0),be(ot,null,bt(t.NAV_MODES,u=>(pe(),be("div",{key:u.value,class:it(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(u.value),onKeydown:[Kt(xt(l=>t.pickNavMode(u.value),["prevent"]),["enter"]),Kt(xt(l=>t.pickNavMode(u.value),["prevent"]),["space"])]},[qe("div",Dm,[qe("span",null,Fe(u.label),1),t.navMode===u.value?(pe(),Ut(b,{key:0,name:"check",size:14})):Be("",!0)])],42,Pm))),128))])):Be("",!0)])),[[r,t.closeNavModeMenu]]),fa((pe(),be("div",Rm,[qe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((k=t.currentUser)==null?void 0:k.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...u)=>t.openUserMenu&&t.openUserMenu(...u))},Fe((((S=t.currentUser)==null?void 0:S.username)||"A").charAt(0).toUpperCase()),9,zm),t.showUserMenu?(pe(),be("div",Am,[qe("div",Lm,[qe("span",Im,Fe((C=t.currentUser)==null?void 0:C.username),1),((_=t.currentUser)==null?void 0:_.role)==="guest"?(pe(),be("span",Nm,"访客")):Be("",!0)]),((D=t.currentUser)==null?void 0:D.role)==="admin"?(pe(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=u=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=Kt(xt(u=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[dt(b,{name:"settings",size:16}),e[22]||(e[22]=sa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((q=t.currentUser)==null?void 0:q.role)!=="guest"?(pe(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=Kt(xt(u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[dt(b,{name:"lock",size:16}),e[23]||(e[23]=sa(" 修改密码 ",-1))],32)):Be("",!0),e[25]||(e[25]=qe("div",{class:"qc-user-dropdown-divider"},null,-1)),qe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...u)=>t.handleLogout&&t.handleLogout(...u)),onKeydown:e[14]||(e[14]=Kt(xt((...u)=>t.handleLogout&&t.handleLogout(...u),["prevent"]),["enter"]))},[dt(b,{name:"log-out",size:16}),e[24]||(e[24]=sa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[r,t.closeUserMenu]])])])])}const jm=la(Vv,[["render",Om]]),Vm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Fm={name:"qc-subnav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.currentPage&&s.currentPage.value||""),v=lt(()=>s.currentSubPage&&s.currentSubPage.value||""),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=kt({}),d=lt(()=>s.menus&&s.menus.value||[]),b=lt(()=>d.value.find(q=>q.key===e.value)||null),c=lt(()=>b.value&&b.value.subPages||[]),i=lt(()=>s.currentPageName&&s.currentPageName.value||e.value),g=q=>s.subPageNames&&s.subPageNames[q]||q,r=q=>v.value===q;function P(q){s.openTab?s.openTab(e.value,q):s.currentSubPage&&(s.currentSubPage.value=q);try{localStorage.setItem("quant_last_subpage",q)}catch{}}function k(q){s.openTab?s.openTab(e.value,q.key):s.currentSubPage&&(s.currentSubPage.value=q.key);try{localStorage.setItem("quant_last_subpage",q.key)}catch{}}function S(q){o.value[q]=!o.value[q]}const C={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:s,currentPage:e,currentSubPage:v,navMode:t,subPages:c,currentMenu:b,collapsedGroups:o,pageTitle:i,subLabel:g,isSubActive:r,goSub:P,goSystemItem:k,toggleGroup:S,SYSTEM_GROUPS:Vm,subIcon:(q,u)=>C[q]&&C[q][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},Hm={key:0,class:"qc-subnav-column","aria-label":"二级导航"},Bm={class:"qc-subnav-column-header"},Km={class:"qc-subnav-current-label"},Wm={class:"qc-subnav-column-body"},Um=["onClick"],Gm=["href","onClick"],Ym={class:"qc-subnav-group-label"},Qm=["href","onClick"],Jm=["href","onClick"];function $m(s,e,v,t,o,d){const b=Pt("AppIcon");return t.navMode==="subnav"?(pe(),be("aside",Hm,[qe("div",Bm,[qe("span",Km,Fe(t.pageTitle),1)]),qe("div",Wm,[t.currentPage==="system"?(pe(!0),be(ot,{key:0},bt(t.SYSTEM_GROUPS,c=>(pe(),be("div",{key:c.label,class:"qc-subnav-group"},[qe("div",{class:"qc-subnav-group-label",onClick:i=>t.toggleGroup(c.label)},[qe("span",null,Fe(c.label),1),dt(b,{name:"chevron-down",size:12,class:it({"is-open":!t.collapsedGroups[c.label]})},null,8,["class"])],8,Um),t.collapsedGroups[c.label]?Be("",!0):(pe(!0),be(ot,{key:0},bt(c.items,i=>(pe(),be("a",{key:i.key,class:it(["qc-subnav-item",{"is-active":t.isSubActive(i.key)}]),href:"#"+i.key,onClick:xt(g=>t.goSystemItem(i),["prevent"])},[dt(b,{name:i.icon,size:16},null,8,["name"]),qe("span",null,Fe(i.label),1)],10,Gm))),128))]))),128)):t.currentPage==="shortterm"?(pe(!0),be(ot,{key:1},bt(t.SHORTTERM_GROUPS,c=>(pe(),be("div",{key:c.label,class:"qc-subnav-group"},[qe("div",Ym,[qe("span",null,Fe(c.label),1)]),(pe(!0),be(ot,null,bt(c.items,i=>(pe(),be("a",{key:i,class:it(["qc-subnav-item",{"is-active":t.isSubActive(i)}]),href:"#"+t.currentPage+"/"+i,onClick:xt(g=>t.goSub(i),["prevent"])},[dt(b,{name:t.subIcon(t.currentPage,i),size:16},null,8,["name"]),qe("span",null,Fe(t.subLabel(i)),1)],10,Qm))),128))]))),128)):(pe(!0),be(ot,{key:2},bt(t.subPages,c=>(pe(),be("a",{key:c,class:it(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:xt(i=>t.goSub(c),["prevent"])},[dt(b,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),qe("span",null,Fe(t.subLabel(c)),1)],10,Jm))),128))])])):Be("",!0)}const Xm=la(Fm,[["render",$m]]),Zm=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],ef={name:"qc-mobile-nav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=kt(!1),v=kt(null),t=kt({}),o=lt(()=>s.menus&&s.menus.value||[]),d=lt(()=>s.currentPage&&s.currentPage.value||""),b={research:"量化投研",platform:"平台管理"},c=["research","platform"];function i(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function g(u){i(u)&&(t.value[u.key]=!t.value[u.key])}function r(u,l){return d.value===u.key&&s.currentSubPage&&s.currentSubPage.value===l}function P(u){return s.subPageNames&&s.subPageNames[u]||u}async function k(u){const l=o.value.find(M=>M.key===u.key),f=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,f):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=f)),s.navigateTo&&s.navigateTo(u.key,f)}function S(u,l){e.value=!1;const f=l||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,f):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=f)),s.navigateTo&&s.navigateTo(u.key,f)}function C(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function _(){e.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function D(u){u.detail&&u.detail.open&&C()}function q(u){e.value&&u.key==="Escape"&&_()}return wa(()=>{window.addEventListener("qc:drawer",D),document.addEventListener("keydown",q)}),ja(()=>{window.removeEventListener("qc:drawer",D),document.removeEventListener("keydown",q)}),{state:s,TABS:Zm,menus:o,currentPage:d,drawerOpen:e,drawerFocusRef:v,drawerExpanded:t,GROUP_LABELS:b,GROUPS:c,hasSub:i,toggleDrawerMenu:g,isDrawerSubActive:r,subLabel:P,goTab:k,goMenu:S,openDrawer:C,closeDrawer:_}}},tf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},af=["aria-current","onClick"],sf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},nf={class:"qc-drawer-header"},lf={class:"qc-drawer-brand"},of={class:"qc-drawer-body"},rf={key:0},cf={class:"qc-nav-group-label"},df=["href","aria-current","onClick"],uf={class:"qc-sidebar-label"},vf=["aria-expanded","onClick"],mf={key:0,class:"qc-drawer-children"},ff=["href","onClick"],pf={class:"qc-drawer-footer"},gf=["title"];function hf(s,e,v,t,o,d){var c,i;const b=Pt("AppIcon");return pe(),be(ot,null,[qe("nav",tf,[(pe(!0),be(ot,null,bt(t.TABS,g=>(pe(),be("button",{key:g.key,class:it(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:r=>t.goTab(g)},[dt(b,{name:g.icon,size:22},null,8,["name"]),qe("span",null,Fe(g.label),1)],10,af))),128))]),(pe(),Ut(pd,{to:"body"},[t.drawerOpen?(pe(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Be("",!0),t.drawerOpen?(pe(),be("div",sf,[qe("div",nf,[qe("div",lf,[e[4]||(e[4]=qe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[qe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),qe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),qe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),qe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),qe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),qe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),qe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),qe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),qe("span",null,Fe(t.state.t("login.title")),1)]),qe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[dt(b,{name:"x",size:18})])]),qe("div",of,[(pe(!0),be(ot,null,bt(t.GROUPS,g=>(pe(),be(ot,{key:g},[t.menus.some(r=>r.group===g)?(pe(),be("div",rf,[qe("div",cf,Fe(t.GROUP_LABELS[g]),1),(pe(!0),be(ot,null,bt(t.menus.filter(r=>r.group===g),r=>(pe(),be("div",{key:r.key,class:"qc-drawer-menu"},[qe("div",{class:it(["qc-drawer-menu-row",{"is-active":t.currentPage===r.key}])},[qe("a",{class:it(["qc-sidebar-item",{"is-active":t.currentPage===r.key}]),href:"#"+r.key,"aria-current":t.currentPage===r.key?"page":null,onClick:xt(P=>t.hasSub(r)?t.toggleDrawerMenu(r):t.goMenu(r),["prevent"])},[dt(b,{name:r.iconName||"",size:18},null,8,["name"]),qe("span",uf,Fe(r.name),1)],10,df),t.hasSub(r)?(pe(),be("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[r.key]}]),"aria-expanded":!!t.drawerExpanded[r.key],"aria-label":"展开子菜单",onClick:P=>t.toggleDrawerMenu(r)},[dt(b,{name:"chevron-down",size:14})],10,vf)):Be("",!0)],2),t.drawerExpanded[r.key]?(pe(),be("div",mf,[(pe(!0),be(ot,null,bt(r.subPages,P=>(pe(),be("a",{key:P,class:it(["qc-subnav-item",{"is-active":t.isDrawerSubActive(r,P)}]),href:"#"+r.key+"/"+P,onClick:xt(k=>t.goMenu(r,P),["prevent"])},[qe("span",null,Fe(t.subLabel(P)),1)],10,ff))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),qe("div",pf,[qe("button",{class:"qc-icon-btn",title:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var r;return t.state.changeThemeMode&&t.state.changeThemeMode(((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"light":"dark")})},[dt(b,{name:((i=t.state.currentTheme)==null?void 0:i.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,gf),qe("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[dt(b,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const yf=la(ef,[["render",hf]]),bf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(s,{emit:e,slots:v}){const t=ra("qcState");function o(r){e("select",r)}function d(r){const P=r.strategy_names||r.strategies||[],k=P.slice(0,3),S=P.length>3?P.length-3:0,C=k.map(_=>({text:_,more:!1}));return S&&C.push({text:"+"+S,more:!0}),C}function b(r){const P=Number(r);return isFinite(P)?P.toFixed(2):"—"}function c(r){const P=Number(r);return isFinite(P)?(P>0?"+":"")+P.toFixed(2)+"%":"—"}function i(r){const P=Number(r.consensus_level);return isFinite(P)?Math.round(P*100):0}function g(r){const P=Number(r&&r.consensus_level);return isFinite(P)&&P>0}return{state:t,slots:v,select:o,displayTags:d,fmtPrice:b,fmtChange:c,pctOf:i,hasConsensus:g}}},wf={class:"qc-stock-list"},_f=["data-copy-code","aria-label","onClick","onKeydown"],kf={key:0,class:"qc-stock-rank"},xf={class:"qc-stock-info"},Sf={class:"qc-stock-code"},Cf={class:"qc-stock-code-num"},qf={key:0,class:"qc-stock-status is-new"},Ef={key:1,class:"qc-stock-status is-out"},Mf={class:"qc-stock-name"},Tf={key:0,class:"qc-stock-consensus"},Pf={key:1,class:"qc-stock-tags"},Df={key:2,class:"qc-stock-badge"},Rf={key:3,class:"qc-stock-data"},zf={class:"qc-stock-price"},Af={key:4,class:"qc-stock-extra"},Lf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},If=["data-copy-code","aria-label","onClick","onKeydown"],Nf={key:0,class:"qc-stock-rank"},Of={class:"qc-stock-info"},jf={class:"qc-stock-code"},Vf={class:"qc-stock-code-num"},Ff={key:0,class:"qc-stock-status is-new"},Hf={key:1,class:"qc-stock-status is-out"},Bf={class:"qc-stock-name"},Kf={key:0,class:"qc-stock-consensus"},Wf={key:1,class:"qc-stock-tags"},Uf={key:2,class:"qc-stock-badge"},Gf={key:3,class:"qc-stock-data"},Yf={class:"qc-stock-price"},Qf={key:4,class:"qc-stock-extra"},Jf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function $f(s,e,v,t,o,d){const b=Pt("qc-state-panel"),c=Pt("qc-virtual-list");return pe(),be("div",wf,[v.loading?(pe(),Ut(b,{key:0,type:"loading"})):v.items.length?(pe(),be(ot,{key:2},[v.virtual?(pe(),Ut(c,{key:0,items:v.items,"row-height":v.rowHeight},{default:Wt(({item:i,index:g})=>[qe("div",{class:it(["qc-stock-row",{"is-active":v.activeCode===i.code}]),"data-copy-code":v.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:r=>t.select(i),onKeydown:[Kt(xt(r=>t.select(i),["prevent"]),["enter"]),Kt(xt(r=>t.select(i),["prevent"]),["space"])]},[v.showRank?(pe(),be("div",kf,Fe(g+1),1)):Be("",!0),qe("div",xf,[qe("div",Sf,[qe("span",Cf,Fe(i.code),1),i.status==="new"?(pe(),be("span",qf,Fe(v.statusText.new),1)):i.status==="out"?(pe(),be("span",Ef,Fe(v.statusText.out),1)):Be("",!0)]),qe("div",Mf,[sa(Fe(i.name)+" ",1),Ht(s.$slots,"name-suffix",{item:i,index:g})]),v.showConsensus&&t.hasConsensus(i)?(pe(),be("span",Tf,Fe(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(pe(),be("div",Pf,[(pe(!0),be(ot,null,bt(t.displayTags(i),r=>(pe(),be("span",{key:r.text,class:it(["qc-stock-tag",{"is-more":r.more}])},Fe(r.text),3))),128))])):Be("",!0),v.showConsensus?(pe(),be("span",Df,Fe(i.strategy_count||0)+" 策略",1)):Be("",!0),v.showPrice&&i.price!=null?(pe(),be("div",Rf,[qe("span",zf,Fe(t.fmtPrice(i.price)),1),qe("span",{class:it(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Fe(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(pe(),be("div",Af,[Ht(s.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(pe(),be("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=xt(()=>{},["stop"]))},[Ht(s.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(pe(),be("div",Lf,[Ht(s.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,_f)]),_:3},8,["items","row-height"])):(pe(!0),be(ot,{key:1},bt(v.items,(i,g)=>(pe(),be("div",{key:i.code,class:it(["qc-stock-row",{"is-active":v.activeCode===i.code}]),"data-copy-code":v.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:r=>t.select(i),onKeydown:[Kt(xt(r=>t.select(i),["prevent"]),["enter"]),Kt(xt(r=>t.select(i),["prevent"]),["space"])]},[v.showRank?(pe(),be("div",Nf,Fe(g+1),1)):Be("",!0),qe("div",Of,[qe("div",jf,[qe("span",Vf,Fe(i.code),1),i.status==="new"?(pe(),be("span",Ff,Fe(v.statusText.new),1)):i.status==="out"?(pe(),be("span",Hf,Fe(v.statusText.out),1)):Be("",!0)]),qe("div",Bf,[sa(Fe(i.name)+" ",1),Ht(s.$slots,"name-suffix",{item:i,index:g})]),v.showConsensus&&t.hasConsensus(i)?(pe(),be("span",Kf,Fe(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(pe(),be("div",Wf,[(pe(!0),be(ot,null,bt(t.displayTags(i),r=>(pe(),be("span",{key:r.text,class:it(["qc-stock-tag",{"is-more":r.more}])},Fe(r.text),3))),128))])):Be("",!0),v.showConsensus?(pe(),be("span",Uf,Fe(i.strategy_count||0)+" 策略",1)):Be("",!0),v.showPrice&&i.price!=null?(pe(),be("div",Gf,[qe("span",Yf,Fe(t.fmtPrice(i.price)),1),qe("span",{class:it(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Fe(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(pe(),be("div",Qf,[Ht(s.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(pe(),be("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=xt(()=>{},["stop"]))},[Ht(s.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(pe(),be("div",Jf,[Ht(s.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,If))),128))],64)):(pe(),Ut(b,{key:1,type:"empty",title:v.emptyText},null,8,["title"]))])}const Xf=la(bf,[["render",$f]]),Zf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},ep={key:0,class:"split-divider","data-split-resize":""};function tp(s,e,v,t,o,d){return pe(),be("div",{class:it(["detail-split-wrap",[v.rootClass,{"detail-split":v.enabled}]]),"data-split-root":""},[qe("div",{class:it(["detail-split-list",[v.listClass,{"w-100":!v.enabled}]])},[Ht(s.$slots,"list")],2),v.enabled?(pe(),be("div",ep)):Be("",!0),v.enabled?(pe(),be("div",{key:1,class:it(["detail-split-pane",v.paneClass])},[Ht(s.$slots,"pane")],2)):Be("",!0)],2)}const ap=la(Zf,[["render",tp]]),Ys={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},sp=200,np={name:"qc-top-tabs",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.currentPage&&s.currentPage.value||""),v=lt(()=>s.currentSubPage&&s.currentSubPage.value||""),t=lt(()=>s.menus&&s.menus.value||[]),o=lt(()=>{const l=t.value.find(f=>f.key===e.value);return l&&l.subPages||[]}),d=lt(()=>o.value.map(l=>({key:l,label:s.subPageNames&&s.subPageNames[l]||l,icon:Ys[e.value]&&Ys[e.value][l]||"circle-dot"}))),b=kt(null),c=kt(!1),i=kt(!1),g=kt(!1);let r=null,P=null;function k(){const l=b.value;l&&(i.value=l.scrollLeft>2,g.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function S(){const l=b.value;l&&(c.value=l.scrollWidth>l.clientWidth+2,k())}function C(l){const f=b.value;f&&f.scrollBy({left:l*sp,behavior:"smooth"})}function _(l){s.openTab?s.openTab(e.value,l):s.currentSubPage&&(s.currentSubPage.value=l)}function D(l){_(l),hd(()=>{const f=b.value;if(!f)return;const M=f.querySelector('[data-tab-key="'+l+'"]');M&&M.scrollIntoView({block:"nearest",inline:"nearest"})})}const q=lt(()=>{if(!c.value)return[];const l=b.value;if(!l)return[];const f=l.getBoundingClientRect(),M=new Set;return l.querySelectorAll(".qc-top-tab").forEach(I=>{const E=I.getBoundingClientRect();E.left>=f.left-2&&E.left<f.right-24&&M.add(I.getAttribute("data-tab-key"))}),d.value.filter(I=>!M.has(I.key))});function u(l,f){l.key==="ArrowLeft"?(l.preventDefault(),C(-1)):l.key==="ArrowRight"?(l.preventDefault(),C(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),_(f.key))}return wa(()=>{S(),r=new ResizeObserver(()=>{clearTimeout(P),P=setTimeout(S,100)}),b.value&&r.observe(b.value),window.addEventListener("resize",S)}),gd(()=>{r&&r.disconnect(),window.removeEventListener("resize",S),clearTimeout(P)}),{state:s,tabs:d,currentSubPage:v,go:_,scrollRef:b,hasOverflow:c,canScrollLeft:i,canScrollRight:g,scrollByStep:C,scrollToTab:D,hiddenTabs:q,onTabKeydown:u,updateScrollState:k}}},lp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},ip=["disabled"],op=["data-tab-key","aria-selected","title","onClick","onKeydown"],rp={class:"qc-top-tab-label"},cp=["disabled"];function dp(s,e,v,t,o,d){const b=Pt("AppIcon"),c=Pt("el-dropdown-item"),i=Pt("el-dropdown-menu"),g=Pt("el-dropdown");return t.tabs.length?(pe(),be("div",lp,[t.hasOverflow?(pe(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=r=>t.scrollByStep(-1))},"‹",8,ip)):Be("",!0),qe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...r)=>t.updateScrollState&&t.updateScrollState(...r))},[(pe(!0),be(ot,null,bt(t.tabs,r=>(pe(),be("div",{key:r.key,"data-tab-key":r.key,class:it(["qc-top-tab",{"is-active":t.currentSubPage===r.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===r.key?"true":"false",title:r.label,onClick:P=>t.go(r.key),onKeydown:P=>t.onTabKeydown(P,r)},[dt(b,{name:r.icon,size:14},null,8,["name"]),qe("span",rp,Fe(r.label),1)],42,op))),128))],544),t.hasOverflow?(pe(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=r=>t.scrollByStep(1))},"›",8,cp)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(pe(),Ut(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:Wt(()=>[dt(i,null,{default:Wt(()=>[(pe(!0),be(ot,null,bt(t.hiddenTabs,r=>(pe(),Ut(c,{key:r.key,command:r.key,class:it({"is-active":t.currentSubPage===r.key})},{default:Wt(()=>[dt(b,{name:r.icon,size:14},null,8,["name"]),sa(" "+Fe(r.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:Wt(()=>[e[3]||(e[3]=qe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const up=la(np,[["render",dp]]);(function(){const{ref:s,computed:e,inject:v}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=v("qcState");if(!t)return{};const o=s(!1),d=s(localStorage.getItem("qc.hideNonTradingBanner")==="1"),b=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},c=e(()=>t.marketData&&t.marketData.value||{}),i=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:c,bannerDismissed:d,dismissBanner:b,goMerrill:i,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:o,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(g,r){const P="sub."+g.key+"."+r,k=t.t(P);if(k!==P)return k;const S="sub."+r,C=t.t(S);return C!==S&&C?C:t.subPageNames[r]||r}}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                <el-dialog v-model="compareVisible" :title="t('calendar.strategyCompare')" width="800px" top="8vh">
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
                </div>`,setup(){const e=s("qcState");if(!e)return{};const{ref:v,computed:t}=Vue,o=v(0),d=v(0),b=v(!1),c=t(()=>{const E={day:"date",week:"week",month:"month",year:"year"},A=e.currentView&&e.currentView.value||"day";return E[A]||"date"}),i={day:"日",week:"周",month:"月",year:"年"};function g(E){return e.t&&e.t("view."+E)||i[E]||E}function r(E){e.switchView?e.switchView(E):e.currentView&&(e.currentView.value=E)}let P=null;function k(E){const A=E.touches&&E.touches[0];A&&(o.value=A.clientX,d.value=A.clientY)}async function S(){if(!b.value){b.value=!0;try{await e.refreshCalendarData()}catch{}P&&clearTimeout(P),P=setTimeout(()=>{b.value=!1},500)}}function C(E){if(!(window.innerWidth<=768))return;const A=E.changedTouches&&E.changedTouches[0];if(!A)return;const R=window.__quantModules&&window.__quantModules.gestures||{};if((typeof R.judgePullToRefresh=="function"?R.judgePullToRefresh(d.value,A.clientY):A.clientY-d.value>=60)&&(window.scrollY||0)<=0){E.stopPropagation(),S();return}if(e.currentSubPage.value==="pool")return;const H=A.clientX-o.value,B=A.clientY-d.value;Math.abs(H)>50&&Math.abs(H)>Math.abs(B)*1.2&&(e.navigateDate(H<0?1:-1),E.stopPropagation())}const _=v(!1),D=v(!1),q=v(""),u=v(null),l=v([]);function f(E){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[E]||E}async function M(){if(e.selectedDate.value){_.value=!0,D.value=!0,q.value="",u.value=null,l.value=[];try{const E=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),A=await E.json();if(!E.ok)throw new Error(A.detail||"HTTP "+E.status);u.value=A;const R=A&&A.comparison||{},F=[];for(const H of Object.keys(R)){if(H==="all_intersection")continue;const B=R[H]||{},G=H.split("_vs_");F.push({label:f(G[0])+" ↔ "+f(G[1]),interCount:B.intersection_count||0,inter:(B.intersection||[]).join(", "),onlyS1Count:B.only_s1_count||0,onlyS1:(B.only_s1||[]).join(", "),onlyS2Count:B.only_s2_count||0,onlyS2:(B.only_s2||[]).join(", ")})}l.value=F}catch(E){q.value=String(E&&E.message?E.message:E)}finally{D.value=!1}}}let I="";return Vue.watch(()=>{const E=e.stockPool,A=E&&E.value||[];return{n:A.length,first:A[0]&&A[0].code,split:!!e.detailSplitEnabled.value}},(E,A)=>{if(!E.split||!E.first||E.n===0)return;const R=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,F=(e.stockPool.value||[]).some(H=>H.code===R);if(!(e.externalStockActive&&(!R&&e.externalStockActive(null)||R&&e.externalStockActive(R)))&&(!R||!F)){if(I===E.first&&R&&F===!1&&E.n>1)return;I=E.first,e.showStockDetail&&e.showStockDetail(E.first)}},{immediate:!0}),{...e,calType:c,pullRefreshing:b,onCalTouchStart:k,onCalTouchEnd:C,viewLabel:g,switchViewLocal:r,compareVisible:_,compareLoading:D,compareError:q,compareData:u,comparePairs:l,openStrategyCompare:M}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <!-- V6.11 (用户需求1): 移除「回测工作台」快捷按钮及所在整行 —— 入口保留在
                             策略研究 → 回测 (侧栏/顶部页签可达); 交易日信息由下方 today-hero 头部显示。 -->

                    <!-- v3.11 (FR-3.11.7): 今日一屏 — 聚合当日决策要素（美林/情绪/池变动/健康/重点） -->
                    <div v-if="!(loading && loadingView === 'overview')" class="today-hero card">
                        <div class="today-hero-head">
                            <div class="today-hero-title">{{ t('strategies.todayScreen') }}</div>
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
                                <!-- V6.12 (需求轮3·item1): 阶段实色作底改为浅色阶段底 (merrillChipStyle) -->
                                <div class="today-merrill-badge" :style="merrillChipStyle">{{ merrillData?.name || t('strategies.computing') }}</div>
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
                            <!-- V6.12 (需求轮3·item1): 阶段实色作底改为浅色阶段底 (merrillChipStyle) -->
                            <span class="strategy-tag-pill" :style="merrillChipStyle">
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
                            <span class="market-status-main">
`;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part2=`                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours"><qc-icon name="clock" :size="14" /> 交易中</span>
                                <span class="ml-8-tertiary" v-if="!marketData.in_trading_hours && marketData.is_trading_day">已收盘</span>
                                <!-- V6.12 (需求轮3·item2): 原独立「普涨行情」渐变横幅信息密度过低
                                     → 判断文字 + 均值涨跌并入状态行 (无底色块, 仅细分隔线 + 语义色数值) -->
                                <span class="market-mood" v-if="marketData.market_sentiment">
                                    {{ marketData.market_sentiment.text }}
                                    <b v-if="marketData.market_sentiment.avg_pct_chg != null"
                                       :class="marketData.market_sentiment.avg_pct_chg >= 0 ? 'up' : 'down'">{{ marketData.market_sentiment.avg_pct_chg >= 0 ? '+' : '' }}{{ fmtNum(marketData.market_sentiment.avg_pct_chg) }}%</b>
                                </span>
                            </span>
                            <span class="text-xs-tertiary">{{ marketData.date }}</span>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=s("qcState"),v=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let o=0;const d=t(()=>{var y;return((y=e.merrillData)==null?void 0:y.value)||{}}),b=t(()=>{var y;return((y=e.marketData)==null?void 0:y.value)||{}}),c=t(()=>{var y;return((y=e.dashboardData)==null?void 0:y.value)||{}}),i=t(()=>{var y;return((y=e.healthMetrics)==null?void 0:y.value)||[]}),g=t(()=>{var y;return((y=e.filteredConsensusRank)==null?void 0:y.value)||[]}),r=t(()=>{const y={};for(const O of g.value)O.code&&O.name&&(y[O.code]=O.name);return y}),P={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function k(y){return P[y]||y}const S=t(()=>b.value.date||c.value.latest_date||"-"),C=t(()=>{const y=b.value;return!y||Object.keys(y).length===0?"数据加载中...":y.is_trading_day&&y.in_trading_hours?"● 交易中":y.is_trading_day?"已收盘":"○ 非交易日"}),_=t(()=>{const y=d.value.next_stage_prediction;return y&&y.next_stage_name&&y.transition_probability>.2?`→${y.next_stage_name} ${(y.transition_probability*100).toFixed(2)}%`:""}),D=t(()=>{const y=[],O=c.value.pool_changes||{},Y=O.new_count||0;if(Y>0){const Ce=O.new_stock_names||{},we=(O.new_stocks||[]).map(ze=>Ce[ze]||r.value[ze]||ze).slice(0,4).join("、");y.push({icon:"sparkles",level:"new",text:`今日新入池 ${Y} 只${we?" · "+we:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Ce of i.value.filter(we=>we.degraded))y.push({icon:"alert-triangle",level:"warn",text:`数据源 ${k(Ce.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const ce=d.value.timing;ce&&ce.progress_percent&&ce.progress_percent>100?y.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${ce.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):ce&&ce.maturity&&d.value.name&&y.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${ce.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const de=b.value;return de&&de.is_trading_day===!1&&de.date&&y.push({icon:"calendar",level:"info",text:`${de.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),y}),q=t(()=>{const y=[],O=d.value.name||"",Y=d.value.timing||{},ce=["复苏","成长","过热"],de=["滞胀","衰退"];ce.some(Ve=>O.includes(Ve))&&y.push({kind:"opportunity",source:"美林",text:O+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),de.some(Ve=>O.includes(Ve))&&y.push({kind:"risk",source:"美林",text:O+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Y.progress_percent&&Y.progress_percent>100&&y.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Ce=c.value.pool_changes||{},we=(Ce.new_count||0)-(Ce.out_count||0);we>=3?y.push({kind:"opportunity",source:"池变动",text:"净入池 +"+we,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):we<=-3&&y.push({kind:"risk",source:"池变动",text:"净出池 "+we,action:()=>{e.currentSubPage.value="consensus"}});const ze=b.value.market_sentiment,Oe=ze&&ze.text||"";(Oe.includes("乐观")||Oe.includes("积极")||Oe.includes("亢奋"))&&y.push({kind:"opportunity",source:"情绪",text:Oe,action:()=>{e.currentSubPage.value="market"}}),(Oe.includes("悲观")||Oe.includes("恐慌")||Oe.includes("低迷"))&&y.push({kind:"risk",source:"情绪",text:Oe,action:()=>{e.currentSubPage.value="market"}});for(const Ve of i.value.filter(st=>st.degraded))y.push({kind:"risk",source:"数据",text:k(Ve.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return y}),u=t(()=>{var y;return((y=e.merrillTimeline)==null?void 0:y.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var y;return((y=e.timelineLoading)==null?void 0:y.value)||!1});function f(y){const O=e.showStageDetail;typeof O=="function"&&O(y)}function M(y){const O=e.merrillStagesConfig,ce=(O&&O.value?O.value:O||{})[y]||{};return ce.color||ce.bg_color||"var(--color-primary)"}function I(y){const O=e.merrillStagesConfig,Y=O&&O.value?O.value:O||{};return Y[y]&&Y[y].name||""}function E(){const y=e.merrillStagesConfig;return y&&y.value?y.value:y||{}}function A(y){return E()[y]&&E()[y].description||""}const R=Vue.ref([]),F=Vue.ref(null),H=Vue.ref(!1),B=Vue.ref(!1),G=Vue.ref(7),X=Vue.ref(""),V=Vue.ref(""),Q=Vue.computed(()=>{const y=new Set;return(R.value||[]).forEach(function(O){O.task&&y.add(O.task)}),Array.from(y).sort()}),z=Vue.computed(function(){const y=F.value&&F.value.success_rate||0;return y>=80?"color-success":y>=50?"color-warning":"color-danger"});function a(y,O){return y>0&&O/y>=.8?"status-ok":y>0&&O/y>=.5?"status-warn":"status-bad"}async function p(){const y=++o;H.value=!0,B.value=!1;try{const O=window.__quantModules&&window.__quantModules.core||{},Y=typeof O.authHeaders=="function"?O.authHeaders():{},ce=new URLSearchParams({days:String(G.value)});X.value&&ce.set("task",X.value),V.value&&ce.set("status",V.value);const[de,Ce]=await Promise.all([fetch("/api/system/execution-history?"+ce.toString(),{headers:Y}).then(function(we){return we.json()}),fetch("/api/system/execution-summary?days="+G.value,{headers:Y}).then(function(we){return we.json()})]);if(y!==o)return;R.value=de&&de.data||[],F.value=Ce&&Ce.data||null}catch(O){console.error("[execution] 执行数据加载失败:",O),B.value=!0}finally{y===o&&(H.value=!1)}}const n=window.__quantModules&&window.__quantModules.i18n||{},h=typeof n.t=="function"?n.t:function(y){return String(y)},ee=Vue.ref([]),N=Vue.ref(null),x=Vue.ref(null),m=Vue.ref(""),L=Vue.ref([]),w=Vue.ref(!1);let j=null;const ae=Vue.computed(function(){const y=x.value&&x.value.dates||[];return y.length&&!m.value&&(m.value=y[y.length-1].date),y}),Z=Vue.computed(function(){const y=(ee.value||[]).find(function(Y){return Y.enabled});if(!y||y.countdown_seconds==null)return"—";const O=y.countdown_seconds;return Math.floor(O/3600)+"h"+String(Math.floor(O%3600/60)).padStart(2,"0")+"m"}),T=Vue.computed(function(){const y=(ee.value||[]).find(function(O){return O.enabled});if(!y||y.countdown_seconds==null||y.countdown_seconds<0)return"";try{return new Date(Date.now()+y.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),W=Vue.computed(function(){const y=N.value;return!y||y.phase==="idle"?h("exec.waiting"):y.phase==="running"?h("exec.running")+(y.current_sid?" · "+y.current_sid:""):y.phase==="done"?h("exec.done"):h("exec.failed")}),ne=Vue.computed(function(){return N.value&&N.value.phase==="running"?"loader":"check-circle-2"}),le=Vue.computed(function(){const y=x.value&&x.value.dates||[];return y.length?y[y.length-1].date:"—"}),Se=Vue.computed(function(){const y=x.value&&x.value.dates||[],O=y[y.length-1];return O&&O.visible?"color-success":"color-danger"}),$=Vue.computed(function(){const y=x.value&&x.value.dates||[],O=y[y.length-1];return O?O.day_view_total:"—"});function re(y){const O=window.__quantModules&&window.__quantModules.core||{},Y=typeof O.authHeaders=="function"?O.authHeaders():{};return fetch(y,{headers:Y}).then(function(ce){return ce.json()})}async function Pe(){const y=++o;try{const[O,Y,ce]=await Promise.all([re("/api/strategies/execution/plan"),re("/api/strategies/execution/status"),re("/api/strategies/execution/results?days=7")]);if(y!==o)return;ee.value=O&&O.data&&O.data.plans||[],N.value=Y&&Y.data||null,x.value=ce&&ce.data||null,N.value&&N.value.phase==="running"?se():me()}catch(O){console.error("[execution-monitor] 监控数据加载失败:",O)}}function se(){me(),j=setInterval(function(){re("/api/strategies/execution/status").then(function(y){N.value=y&&y.data||null,N.value&&N.value.phase!=="running"&&(me(),Pe())}).catch(function(){})},5e3)}function me(){j&&(clearInterval(j),j=null)}async function Me(y){if(!y)return;const O=++o;w.value=!0;try{const Y=await re("/api/strategies/execution/trace/"+encodeURIComponent(y));if(O!==o)return;const ce=Y&&Y.data||null;L.value=ce&&ce.steps||[]}catch(Y){console.error("[execution-trace] 追溯加载失败:",Y)}finally{O===o&&(w.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(y){y==="execution"?(p(),Pe()):me()},{immediate:!0}),Vue.watch(function(){const y=e.currentSubPage&&e.currentSubPage.value,O=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Y=e.marketData&&e.marketData.value||{};return{sub:y,split:!!e.detailSplitEnabled.value,top5:O.slice(0,5),rank:O,indices:(Y.indices||[]).map(function(ce){return ce})}},function(y,O){if(y.split){if(y.sub==="overview"){if(!y.top5.length)return;const Y=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=y.top5.some(function(de){return de.code===Y});(!Y||!ce)&&e.showStockDetail&&e.showStockDetail(y.top5[0].code)}else if(y.sub==="consensus"){if(!y.rank.length)return;const Y=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=y.rank.some(function(de){return de.code===Y});(!Y||!ce)&&e.showStockDetail&&e.showStockDetail(y.rank[0].code)}else if(y.sub==="market"){if(!y.indices.length)return;const Y=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,ce=y.indices.some(function(de){return de.code===Y});(!Y||!ce)&&e.showIndexDetail&&e.showIndexDetail(y.indices[0])}}},{immediate:!0});const oe=Vue.ref("band"),fe=["recession","recovery","overheating","stagflation"];function ke(y){if(!y)return null;const O=String(y).split("-"),Y=parseInt(O[0],10),ce=parseInt(O[1]||"1",10);return isFinite(Y)?Y+(ce-1)/12:null}function ie(y){const O=Math.floor(y);let Y=Math.round((y-O)*12)+1;return Y>12&&(Y=12),Y<1&&(Y=1),O+"-"+(Y<10?"0"+Y:""+Y)}function te(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function ve(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function Ne(y,O){const Y=te(),ce=Number(Y.avg_duration_months)||0,de=Math.min(100,Number(Y.progress_percent)||0),Ce=ke(Y.current_stage_start_date),we=[];let ze=null;if((y||[]).forEach(function(je){const ft=ke(je.start);ze==null&&ft!=null&&(ze=ft);const ht=!!(je.is_current||Ce!=null&&ft===Ce&&!je.duration_months),Mt=je.name||I(je.stage);if(ht&&ce>0){const mt=ce*de/100;mt>.5&&we.push({stage:je.stage,name:Mt,months:mt,live:!0,start:je.start});const pt=ce-mt;pt>.5&&we.push({stage:je.stage,name:"剩余(预测)",months:pt,ghost:!0,start:je.start})}else{let mt=Number(je.duration_months)||0;if(!mt&&ft!=null){const pt=ke(je.end);pt!=null&&pt>ft&&(mt=Math.max(1,Math.round((pt-ft)*12)))}mt||(mt=1),we.push({stage:je.stage,name:Mt,months:mt,live:ht,start:je.start,end:je.end})}if(ht&&O&&ce>0){const mt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;mt&&we.push({stage:mt.next_stage,name:(mt.next_stage_name||"下一阶段")+" (预测)",months:ce,ghost:!0,prob:mt.transition_probability})}}),!we.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const Oe=we.reduce(function(je,ft){return je+ft.months},0)||1,Ve=ze??0;let st=0,gt=0;const nt=we.map(function(je){const ft=st;je.ghost||(gt+=je.months),st+=je.months;const ht={stage:je.stage,name:je.name,months:Math.round(je.months),ghost:!!je.ghost,live:!!je.live,prob:je.prob,left:ft/Oe*100,width:Math.max(2,je.months/Oe*100)},Mt=ke(je.start),mt=ke(je.end);return ht.start=Mt!=null?ie(Mt):ie(Ve+ft/12),ht.end=mt!=null?ie(mt):"",ht.predicted=Mt==null,ht}),K=we[we.length-1],ge=we.some(function(je){return je.ghost}),Qe=K&&K.end?K.end:ie(Ve+Oe/12);return{segs:nt,axisStart:ie(Ve),axisEnd:Qe,nowPct:ge?gt/Oe*100:null}}function Ae(y){return(y.stages||[]).some(function(O){return O.is_current})}const Ue=Vue.computed(function(){const y=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!y.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let O=null;for(let Y=y.length-1;Y>=0;Y--)if(Ae(y[Y])){O=y[Y];break}return O||(O=y[y.length-1]),Ne(O.stages,!0)});function Ze(y){const O=y&&y.stages?y.stages:[];if(!O.length)return"";const Y=O[0]&&O[0].start?String(O[0].start).slice(0,4):"",ce=O[O.length-1]||{},de=ce.end?String(ce.end).slice(0,4):ce.start?String(ce.start).slice(0,4):"";return Y||de?Y?Y+"–"+de:de:""}const et=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(O){return!Ae(O)}).map(function(O){return{label:O.label,years:Ze(O),segs:Ne(O.stages,!1).segs}})}),$e=fe,he=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(O){const Y={};fe.forEach(function(de){Y[de]=0});let ce=null;return(O.stages||[]).forEach(function(de){Y[de.stage]!=null&&(Y[de.stage]+=Number(de.duration_months)||0),de.is_current&&(ce=de.stage)}),{label:O.label,sum:Y,cur:ce}})}),xe=Vue.computed(function(){let y=0;return he.value.forEach(function(O){fe.forEach(function(Y){O.sum[Y]>y&&(y=O.sum[Y])})}),y||1}),Re=Vue.computed(function(){const y=e.merrillSnapshots&&e.merrillSnapshots.value||[],O=[];return y.forEach(function(Y){const ce=O[O.length-1];ce&&ce.stage===Y.stage?(ce.count++,ce.last=Y.timestamp):O.push({stage:Y.stage,name:Y.stage_name||I(Y.stage),count:1,first:Y.timestamp,last:Y.timestamp})}),O}),De=Vue.computed(function(){return Math.max(100,Math.min(200,Number(te().progress_percent)||0))}),We=Vue.computed(function(){const y=Number(te().progress_percent)||0;return{width:Math.max(0,Math.min(100,y/De.value*100))+"%",background:y>100?"linear-gradient(90deg, color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card))"}}),Ge=Vue.computed(function(){return 100/De.value*100}),Ye=Vue.computed(function(){const y=te().predicted_end;if(!y)return"";if(typeof y=="string")return y;const O=y.optimistic||y.earliest||"",Y=y.pessimistic||y.latest||"";return O&&Y?O+" ~ "+Y:y.base||y.mid||O||Y||""});var Je=22;function tt(y){return"color-mix(in srgb, "+y+" "+Je+"%, var(--surface-card))"}function ue(y){const O=M(y.stage);return y.ghost?{left:y.left+"%",width:y.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+O,background:"repeating-linear-gradient(45deg, "+tt(O)+" 0, "+tt(O)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:y.left+"%",width:y.width+"%",background:tt(O),color:"var(--text-primary)",borderLeft:"3px solid "+O}}function ye(y){const O=[y.name];return y.start&&O.push((y.predicted?"预计起始 ":"起始 ")+y.start+(y.end?" → "+y.end:"")),y.months&&O.push("约 "+y.months+" 个月"),y.ghost&&O.push("预测(尚未发生)"),y.prob!=null&&O.push("转移概率 "+(y.prob*100).toFixed(0)+"%"),O.join(" · ")}function Le(y,O){const Y=M(y),ce=Math.max(.28,O/xe.value),de=Math.round(14+30*ce);return{background:"color-mix(in srgb, "+Y+" "+de+"%, var(--surface-card))",color:"var(--text-primary)"}}const He=Vue.computed(function(){const y=e.merrillData&&e.merrillData.value||e.merrillData||{},O=y.color||M(y.stage);return{background:"color-mix(in srgb, "+O+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+O+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+O+" 26%, transparent)"}});return{...e,todayText:S,tradingStatus:C,merrillNext:_,todayFocus:D,todaySignals:q,merrillConfigOpen:v,getTimelineStageColor:M,getTimelineStageName:I,getTimelineStageDesc:A,merrillChipStyle:He,mcHistView:oe,mcCurrentBand:Ue,mcHistoryBands:et,mcStageKeys:$e,mcMatrix:he,mcTrailRuns:Re,mcProgStyle:We,mcAvgMark:Ge,mcEndRange:Ye,mcSegStyle:ue,mcSegTitle:ye,mcMxCellStyle:Le,merrillTimeline:u,timelineLoading:l,showTimelineStage:f,execHistory:R,execSummary:F,execLoading:H,execError:B,execDays:G,execTaskFilter:X,execStatusFilter:V,execTaskOptions:Q,execSuccessClass:z,loadExecutionData:p,execRateClass:a,execPlan:ee,execStatus:N,execResults:x,execTraceDate:m,execTraceSteps:L,execTraceLoading:w,execResultsDates:ae,execCountdownText:Z,execNextRunText:T,execPhaseText:W,execStatusIcon:ne,execLastDate:le,execVisibleClass:Se,execVisibleText:$,loadExecutionTrace:Me}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
`;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part2=`                            <el-form-item label="API Token">
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
                    </div>
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=s("qcState");if(!e)return{};function v(K){e.currentSubPage.value=K}function t(){te(),ve(),Ne()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,K=>{K==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),K==="datadict"&&Z(),K==="health"&&m(),K==="notification"&&t(),K==="datasource"&&D(),K!=="usage"&&a()});const o=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},b=e.themeMode||Vue.computed(()=>"light"),c=e.themeHue||Vue.ref(45);function i(K){e.changeThemeMode&&e.changeThemeMode(K)}function g(K){e.changeThemeHue&&e.changeThemeHue(parseInt(K,10))}function r(K){return e.hueColor?e.hueColor(K):K<0?"hsl(0, 0%, 46%)":"hsl("+K+", 75%, 42%)"}function P(K){return e.hueName?e.hueName(K):d[K]||"自定义 "+K}function k(K){e.setNavMode&&e.setNavMode(K)}const S=Vue.ref([]),C=Vue.ref([]),_=Vue.ref(!1);async function D(){_.value=!0;try{const ge=await(await fetch("/api/meta/freshness")).json();ge&&ge.success&&(C.value=ge.items||[])}catch{}_.value=!1}const q=Vue.ref(""),u=Vue.ref("read"),l=Vue.ref(""),f=Vue.ref(!1),M=()=>window.__quantModules&&window.__quantModules.core||{},I=Vue.ref([]),E=Vue.ref(!1);async function A(){E.value=!0;try{const K=await fetch("/api/audit/logs?limit=20",{headers:M().authHeaders?M().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});I.value=K&&K.logs||[]}catch(K){console.error("[system] 审计加载失败:",K),I.value=[]}finally{E.value=!1}}const R=Vue.ref(!1),F=Vue.ref(null),H=Vue.ref(null),B=Vue.ref([]),G=Vue.ref(null);function X(K){return K==="completed"?"完成":K==="running"?"运行中":K==="pending"?"排队中":K==="cancelled"?"已取消":"失败"}async function V(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(B.value=ge.data&&ge.data.tasks||[])}catch(K){console.warn("[system] 加载任务队列失败:",K)}}async function Q(K){try{await fetch("/api/jobs/"+K+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),V()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function z(){V(),G.value=window.setInterval(V,15e3)}function a(){G.value&&(clearInterval(G.value),G.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){a()});const p=Vue.ref({items:[]}),n=Vue.ref([]),h=Vue.ref(null),ee=Vue.ref({data_sources:[],alerts:[]}),N=function(){return M().authHeaders?M().authHeaders():{}},x=function(K){return fetch(K,{headers:N()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function m(){R.value=!0,F.value=null;try{const[K,ge,Qe,je]=await Promise.all([x("/api/reliability/freshness"),x("/api/reliability/heal-history?limit=20"),x("/api/reliability/startup-report"),x("/api/reliability/source-health")]);p.value=K&&K.data||{items:[]},n.value=ge&&ge.data||[],h.value=Qe&&Qe.data||null,ee.value=je||{data_sources:[],alerts:[]},H.value=new Date().toLocaleTimeString()}catch(K){console.warn("[health] 加载失败:",K),F.value="健康数据加载失败: "+(K.message||""),p.value={items:[]},n.value=[]}finally{R.value=!1}}const L=Vue.ref(!1),w=Vue.ref(""),j=Vue.ref(""),ae=Vue.ref({fields:[]});async function Z(){L.value=!0,w.value="";try{const K="/api/data-dict"+(j.value?"?category="+j.value:""),ge=await x(K);ae.value=ge&&ge.data||{fields:[]}}catch(K){console.warn("[dict] 加载失败:",K),w.value="数据字典加载失败: "+(K.message||""),ae.value={fields:[]}}finally{L.value=!1}}function T(K){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[K]||"var(--text-secondary)"}function W(K){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[K]||K}const ne=Vue.computed(()=>(p.value?p.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),le=Vue.ref("rules"),Se=Vue.ref([]),$=Vue.ref([]),re=Vue.ref([]),Pe=Vue.ref(!1),se=Vue.ref(""),me=Vue.ref("price_above"),Me=Vue.ref(""),oe=Vue.ref(!1),fe=Vue.ref(60),ke=Vue.ref("");function ie(K){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[K]||K}async function te(){Pe.value=!0;try{const K=await(await fetch("/api/alerts/rules")).json();Se.value=K&&K.rules||[]}catch(K){ke.value="规则加载失败: "+K}finally{Pe.value=!1}}async function ve(){Pe.value=!0;try{const K=await(await fetch("/api/alerts/history?limit=50")).json();$.value=K&&K.history||[]}catch(K){ke.value="历史加载失败: "+K}finally{Pe.value=!1}}async function Ne(){Pe.value=!0;try{const K=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();re.value=K&&K.channels||[],oe.value=!!(ge&&ge.silenced)}catch(K){ke.value="通道状态加载失败: "+K}finally{Pe.value=!1}}function Ae(K){le.value=K,K==="rules"?te():K==="history"?ve():Ne()}async function Ue(){const K=se.value.trim();if(!K){ke.value="请填写股票代码";return}Pe.value=!0;try{const ge={stock_code:K,rule_type:me.value};if(me.value!=="new_pool"){const je=Number(Me.value);if(isNaN(je)){ke.value="阈值必须为数值";return}ge.threshold=je}const Qe=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();Qe&&Qe.rule?(ke.value="规则已添加",se.value="",Me.value="",te()):ke.value=Qe&&Qe.detail||"添加失败"}catch(ge){ke.value="添加失败: "+ge}finally{Pe.value=!1}}async function Ze(K){try{await fetch("/api/alerts/rules/"+K.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!K.enabled})}),K.enabled=!K.enabled}catch(ge){ke.value="切换失败: "+ge}}async function et(K){try{const ge=await(await fetch("/api/alerts/rules/"+K.id,{method:"DELETE"})).json();ge&&ge.success?(ke.value="规则已删除",te()):ke.value="删除失败"}catch(ge){ke.value="删除失败: "+ge}}async function $e(){try{const K=oe.value?fe.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:K})})).json();oe.value=!!(ge&&ge.silenced),ke.value=oe.value?"已静默":"已恢复推送"}catch(K){ke.value="静默设置失败: "+K}}async function he(){oe.value=!1,await $e()}function xe(K){return!!K&&!K.degraded}const Re=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ge,Qe)=>Math.max(ge,Qe.views||0),0)||1),De=()=>M().OPENAPI_ROUTE_BASE||"/api/openapi";async function We(){f.value=!0;try{const K=await M().apiFetch(De()+"/keys");S.value=K&&K.data||[]}catch(K){ElementPlus.ElMessage.error("加载 API Key 失败: "+(K.message||""))}finally{f.value=!1}}async function Ge(){try{const K=await M().apiFetch(De()+"/keys",{method:"POST",body:JSON.stringify({name:q.value||"未命名",role:u.value||"read",expire_days:365})});K&&K.success?(l.value=K.api_key||"",q.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await We()):ElementPlus.ElMessage.error(K&&(K.detail||K.message)||"生成失败")}catch(K){ElementPlus.ElMessage.error("生成失败: "+(K.message||""))}}async function Ye(){if(l.value)try{await navigator.clipboard.writeText(l.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Je(K){try{const ge=await M().apiFetch(De()+"/keys/"+K.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),l.value&&K.prefix&&l.value.includes(K.prefix)&&(l.value=""),await We()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const tt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function ue(K){return tt[K]||K}const ye=computed(()=>{var K;return(((K=e.healthMetrics)==null?void 0:K.value)||[]).map(ge=>({name:ue(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function Le(K){return K.degraded?"degraded":K.success_rate==null?"unknown":K.success_rate>=90?"ok":K.success_rate>=60?"warn":"bad"}function He(K){return K==null?"":K<1?"刚刚":K<24?Math.round(K)+"小时前":Math.floor(K/24)+"天前"}const y=e.aiUsage||Vue.ref({}),O=Vue.computed(()=>{const K=y.value&&y.value.by_model||{};return Object.entries(K).map(([ge,Qe])=>({name:ge,count:Qe})).sort((ge,Qe)=>Qe.count-ge.count)}),Y=Vue.computed(()=>O.value.reduce((K,ge)=>Math.max(K,ge.count),0)||1),ce=Vue.computed(()=>O.value.reduce((K,ge)=>K+ge.count,0)||1),de=Vue.computed(()=>Ce.value.reduce((K,ge)=>Math.max(K,ge.count),0)||0),Ce=Vue.computed(()=>{const K=y.value&&y.value.by_day||{},ge=[],Qe=new Date;for(let je=29;je>=0;je--){const ft=new Date(Qe.getFullYear(),Qe.getMonth(),Qe.getDate()-je),ht=ft.getFullYear()+"-"+String(ft.getMonth()+1).padStart(2,"0")+"-"+String(ft.getDate()).padStart(2,"0");ge.push({day:ht,count:K[ht]||0})}return ge}),we=Vue.computed(()=>Ce.value.reduce((K,ge)=>Math.max(K,ge.count),0)||1),ze=Vue.computed(()=>{const K=y.value&&y.value.by_day||{},ge=new Date,Qe=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return K[Qe]||0}),Oe=Vue.computed(()=>{const K=y.value&&y.value.by_day||{},ge=Object.keys(K).filter(Qe=>(K[Qe]||0)>0);return ge.length?ge[ge.length-1]:""});function Ve(K){e.analyticsDays&&(e.analyticsDays.value=K),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const st='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',gt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function nt(K){return K?gt:st}return z(),{...e,themeHues:o,themeHueNames:d,themeMode:b,themeHue:c,onThemeModeChange:i,setThemeHue:g,hueColor:r,hueName:P,onNavModeChange:k,analyticsMaxViews:Re,aiModelRank:O,aiModelMax:Y,aiDayTrend:Ce,aiDayMax:we,todayAiCalls:ze,lastAiCallDay:Oe,aiTotal:ce,aiDayPeak:de,setAnalyticsDays:Ve,viewIcon:nt,openApiKeys:S,openApiKeyName:q,openApiKeyRole:u,newOpenApiKey:l,openApiLoading:f,loadOpenApiKeys:We,generateOpenApiKey:Ge,copyOpenApiKey:Ye,revokeOpenApiKey:Je,healthRows:ye,healthClass:Le,fmtAge:He,staleAssetCount:ne,jobQueue:B,loadJobQueue:V,cancelJob:Q,jobStatusText:X,auditLogs:I,auditLoading:E,loadAuditLogs:A,healthLoading:R,healthError:F,healthUpdatedAt:H,freshnessData:p,healHistory:n,startupReport:h,sourceHealth:ee,refreshHealth:m,statusColor:T,statusLabel:W,sourceOk:xe,dictLoading:L,dictError:w,dictCategory:j,dictData:ae,loadDataDict:Z,ncTab:le,ncRules:Se,ncHistory:$,ncChannels:re,ncLoading:Pe,ncNewCode:se,ncNewType:me,ncNewThreshold:Me,ncSilence:oe,ncSilenceMinutes:fe,ncMsg:ke,ncTypeLabel:ie,onNcTab:Ae,loadAlertRules:te,loadAlertHistory:ve,loadAlertChannels:Ne,addAlertRule:Ue,toggleAlertRule:Ze,removeAlertRule:et,applySilence:$e,clearSilence:he,freshnessItems:C,freshnessLoading:_,loadFreshness:D,goSystemSub:v}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.part1=`
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
                                        <span :style="{color: levelColor(item.result.level),fontWeight:'var(--font-bold)',fontSize:'var(--qc-font-size-lg)'}">{{ fmtNum(item.result.total_score) }}</span>
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
`;window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.part2=`                        <qc-detail-split :enabled="detailSplitEnabled">
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
                        <el-dialog v-model="tradeFormVisible" title="记录调仓" width="440px">
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.view=window.__quantModules.aiPage.part1+window.__quantModules.aiPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:window.__quantModules.aiPage.view,setup(){const{ref:e,watch:v,onUnmounted:t}=Vue,o=s("qcState");if(!o)return{};function d(){if(!o.hasMoreAiHistory||!o.loadMoreAiHistory||o.currentPage.value!=="ai"||o.currentSubPage.value!=="history")return;const le=document.documentElement;le.scrollTop+window.innerHeight>=le.scrollHeight-300&&o.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const b=e(null),c=e(!1),i=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function g(le){return!le||le.total===0||le.rate===null||le.rate===void 0?"--":le.rate.toFixed(2)+"%"}const r=e(5);function P(le){r.value=le}function k(le,Se){if(!le)return"--";if(le.available===!1)return"— 数据不可达";const $=le["hit_n"+Se];return $===!0?"✓ 命中":$===!1?"✗ 未中":"– 中性/待验证"}async function S(){c.value=!0;try{const Se=await(await fetch("/api/ai/track")).json();b.value=Se&&Se.success?Se.data:null}catch(le){console.warn("[eval-track] 评估命中率加载失败:",le),b.value=null}finally{c.value=!1}}v(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(le){le==="ai/evaluation-analysis"&&S()},{immediate:!0});const C=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:_,summary:D,trades:q,loading:u,loadError:l,showAddForm:f,addForm:M,addSaving:I,tradeFormVisible:E,tradeForm:A,tradeSaving:R,portfolioTab:F,equityDays:H,equityLoading:B,equityNote:G,equityHasData:X,loadPortfolio:V,addPosition:Q,removePosition:z,openTradeForm:a,submitTrade:p,loadTrades:n,loadEquity:h,fmtSigned:ee,fmtSignedPct:N,signClass:x,riskTab:m,riskLoading:L,riskNote:w,riskHasData:j,riskData:ae,riskMetricList:Z,loadRisk:T}=C;v(_,function(le){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((le||[]).map(function(Se){return{code:Se.stock_code,name:Se.stock_name||Se.stock_code}}))},{deep:!0}),v(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(le){le==="ai/portfolio"?(V(),n(),h(H?H.value:30),typeof T=="function"&&T()):le==="ai/overview"&&V()},{immediate:!0});let W="",ne=!1;return v(function(){const le=o.currentSubPage&&o.currentSubPage.value,Se=!!(o.detailSplitEnabled&&o.detailSplitEnabled.value),$={sub:le,split:Se,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(le==="history"){const re=o.aiHistoryView&&o.aiHistoryView.value||"date",Pe=re==="date"?o.groupedByDate:re==="month"?o.groupedByMonth:o.aiHistoryByStock,se=Pe&&Pe.value||{},me=Object.keys(se);$.kind="history",$.view=re,$.key=me.length?me[0]:"",$.first=me.length&&(se[me[0]]||[])[0]||null,$.expandList=re==="date"?o.expandedDates:re==="month"?o.expandedMonths:o.expandedStocks,$.expandFn=re==="date"?o.toggleDateExpand:re==="month"?o.toggleMonthExpand:o.toggleStockExpand}else if(le==="chat_history"){const re=o.chatHistoryView&&o.chatHistoryView.value||"date",Pe=re==="date"?o.chatGroupedByDate:re==="month"?o.chatGroupedByMonth:o.chatGroupedByStock,se=Pe&&Pe.value||{},me=Object.keys(se);$.kind="chat",$.view=re,$.key=me.length?me[0]:"",$.first=me.length&&(se[me[0]]||[])[0]||null,$.expandList=re==="date"?o.expandedChatDates:re==="month"?o.expandedChatMonths:o.expandedChatStocks,$.expandFn=re==="date"?o.toggleChatDateExpand:re==="month"?o.toggleChatMonthExpand:o.toggleChatStockExpand}return $},function(le){if(!le.split||!le.first||!le.kind)return;const Se=le.sub!==W,$=o.stockDetail&&o.stockDetail.value,re=!!($&&$.stock);if(!Se&&re||ne)return;W=le.sub,ne=!0;try{le.key&&le.expandList&&le.expandFn&&le.expandList.value&&le.expandList.value.indexOf(le.key)<0&&le.expandFn(le.key)}catch{}const Pe=le.kind==="history"?o.viewAiResult(le.first):o.viewChatSession(le.first);Pe&&typeof Pe.finally=="function"?Pe.finally(function(){ne=!1}):ne=!1},{immediate:!0}),{...o,trackData:b,trackLoading:c,trackWindows:i,fmtTrackRate:g,loadTrack:S,trackWindow:r,setTrackWindow:P,trackHitText:k,positions:_,summary:D,trades:q,loading:u,loadError:l,showAddForm:f,addForm:M,addSaving:I,tradeFormVisible:E,tradeForm:A,tradeSaving:R,portfolioTab:F,equityDays:H,equityLoading:B,equityNote:G,equityHasData:X,loadPortfolio:V,addPosition:Q,removePosition:z,openTradeForm:a,submitTrade:p,loadTrades:n,loadEquity:h,fmtSigned:ee,fmtSignedPct:N,signClass:x,riskTab:m,riskLoading:L,riskNote:w,riskHasData:j,riskData:ae,riskMetricList:Z,loadRisk:T}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(s){const{ref:e,seq:v,authHeaders:t}=s,o=e([]),d=e(!1),b=e(!1),c=e(""),i=e(null),g=e(!1),r=e(!1);async function P(){const M=++v.n;d.value=!0,b.value=!1;try{const I=await fetch("/api/market/reviews?limit=30",{headers:t()}).then(E=>E.json());if(M!==v.n)return;I&&I.success?o.value=Array.isArray(I.data)?I.data:[]:b.value=!0}catch(I){console.error("[market-review] 复盘列表加载失败:",I),b.value=!0}finally{M===v.n&&(d.value=!1)}}function k(M){c.value=M,q(M)}function S(M){c.value===M?D():k(M)}function C(M){return M==null||isNaN(Number(M))?"—":(Number(M)>=0?"+":"")+Number(M).toFixed(2)+"%"}function _(M){return M==null||isNaN(Number(M))?"—":Number(M).toFixed(2)}function D(){c.value="",i.value=null,r.value=!1}async function q(M){const I=++v.n;g.value=!0,r.value=!1,i.value=null;try{const E=M?"/api/market/review?date="+encodeURIComponent(M):"/api/market/review",A=await fetch(E,{headers:t()}).then(R=>R.json());if(I!==v.n)return;A&&A.success?i.value=A.data:r.value=!0}catch(E){console.error("[market-review] 复盘详情加载失败:",E),r.value=!0}finally{I===v.n&&(g.value=!1)}}function u(M){return M>0?"up":M<0?"down":"flat"}function l(M){return M==null||isNaN(Number(M))?"—":(M>0?"+":"")+Number(M).toFixed(2)+"%"}function f(M){const I={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(M||{}).map(function(E){const A=E[0],R=E[1],F=!R||R==="unavailable"||R==="数据不可达";return{label:I[A]||A,value:F?"数据不可达":R,unavailable:F}})}return{marketReviews:o,marketReviewLoading:d,marketReviewError:b,selectedReviewDate:c,marketReviewDetail:i,marketReviewDetailLoading:g,marketReviewDetailError:r,loadMarketReviews:P,openMarketReview:k,toggleMarketReviewDate:S,backToMarketReviewList:D,loadMarketReviewDetail:q,marketReviewChgClass:u,marketReviewChgText:l,marketReviewSrcEntries:f,fmtPct:C,fmtEmotion:_}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(s){const{ref:e,seq:v,withAuth:t,authHeaders:o,activeStrategyId:d,paramValues:b}=s,c=e("mom20"),i=e(!1),g=e(!1),r=e(null),P=e(null),k=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],S=e('{"top_n":[10,20,30]}'),C=e(null),_=e(""),D=e(!1),q=e(null);async function u(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let A;try{A=JSON.parse(S.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!A||Object.keys(A).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}D.value=!0,C.value=null,_.value="";try{const R=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:o(),body:JSON.stringify({param_grid:A})}).then(function(F){return F.json()});R&&Array.isArray(R.results)?(C.value=R.results,_.value="完成 "+R.count+" 组"+(R.data_degraded?" (数据不可达, 结果降级)":""),q.value=R.param_stability||null):_.value=R&&R.detail||"扫描失败"}catch(R){console.error("[sweep]",R),_.value="扫描失败: "+R.message}finally{D.value=!1}}async function l(){const A=++v.n;i.value=!0;try{const R=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:b.value||{}})}).then(function(H){return H.json()}),F=R&&R.report?R.report.n1||{}:{};r.value=F}catch(R){console.error("[research] 因子IC分析失败:",R),ElementPlus.ElMessage.error("因子 IC 分析失败: "+R.message)}finally{A===v.n&&(i.value=!1)}}async function f(){const A=++v.n;g.value=!0;try{const R=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:b.value||{}})}).then(function(F){return F.json()});R&&R.layers?P.value=R:ElementPlus.ElMessage.warning("分层回测: "+(R.message||"无数据"))}catch(R){console.error("[research] 分层回测失败:",R),ElementPlus.ElMessage.error("分层回测失败: "+R.message)}finally{A===v.n&&(g.value=!1)}}const M=e(null),I=e(!1);async function E(){const A=++v.n;I.value=!0,M.value=null;try{const R=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:b.value||{}})}).then(function(F){return F.json()});R&&R.detail?M.value=R.detail:ElementPlus.ElMessage.warning("因子详情: "+(R.message||"无数据"))}catch(R){console.error("[research] 因子详情失败:",R),ElementPlus.ElMessage.error("因子详情失败: "+R.message)}finally{A===v.n&&(I.value=!1)}}return{factorKey:c,factorIcLoading:i,factorLayerLoading:g,factorIcReport:r,factorLayerResult:P,factorOptions:k,runFactorIc:l,runFactorLayer:f,factorDetail:M,factorDetailLoading:I,runFactorDetail:E,sweepGrid:S,sweepResult:C,sweepMessage:_,sweepLoading:D,sweepStability:q,runSweep:u}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(s){const{seq:e,state:v}=s,t=Vue.ref([]),o=Vue.ref(!1),d=Vue.ref(!1),b=Vue.ref(""),c=Vue.ref([]),i=Vue.ref(""),g=Vue.ref([]),r=Vue.ref(!1),P=Vue.ref(!1),k={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function S(I){return k[I]||I||"—"}function C(I){v&&v.navigateTo&&v.navigateTo("shortterm",I)}function _(){v.currentSubPage.value="research-history",D()}async function D(){const I=++e.n;o.value=!0,d.value=!1;try{const E=window.__quantModules&&window.__quantModules.core||{},A=typeof E.authHeaders=="function"?E.authHeaders():{},R=b.value?"?type="+encodeURIComponent(b.value):"",F=await fetch("/api/strategies/research-history"+R,{headers:A}).then(function(H){return H.json()});if(I!==e.n)return;t.value=F&&F.items||[]}catch(E){console.error("[research-history] 加载失败:",E),d.value=!0}finally{I===e.n&&(o.value=!1)}}async function q(){const I=++e.n;P.value=!0;try{const E=window.__quantModules&&window.__quantModules.core||{},A=typeof E.authHeaders=="function"?E.authHeaders():{},R=b.value?"?type="+encodeURIComponent(b.value):"",F=await fetch("/api/strategies/research-history/export"+R,{headers:A});if(!F.ok)throw new Error("HTTP "+F.status);const H=await F.blob(),B=URL.createObjectURL(H),G=document.createElement("a");G.href=B,G.download="research_history.csv",document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(B)}catch(E){console.error("[research-history] 导出失败:",E)}finally{I===e.n&&(P.value=!1)}}function u(I){const E=c.value.indexOf(I);E>=0?c.value.splice(E,1):c.value.length<10&&c.value.push(I)}function l(I){i.value=i.value===I?"":I}async function f(){const I=++e.n,E=c.value;if(!(E.length<2)){r.value=!0;try{const A=window.__quantModules&&window.__quantModules.core||{},R=typeof A.authHeaders=="function"?A.authHeaders():{},F=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},R),body:JSON.stringify({ids:E})}).then(function(H){return H.json()});g.value=F&&F.items||[]}catch(A){console.error("[research-history] 对比失败:",A)}finally{I===e.n&&(r.value=!1)}}}async function M(I){try{const E=window.__quantModules&&window.__quantModules.core||{},A=typeof E.authHeaders=="function"?E.authHeaders():{},R=await fetch("/api/strategies/research-history/"+I,{method:"DELETE",headers:A}).then(function(F){return F.json()});if(R&&R.deleted){t.value=t.value.filter(function(H){return H.id!==I});const F=c.value.indexOf(I);F>=0&&c.value.splice(F,1)}}catch(E){console.error("[research-history] 删除失败:",E)}}return{researchHistory:t,researchHistoryLoading:o,researchHistoryError:d,researchHistoryType:b,researchHistorySelected:c,researchDetailId:i,researchCompareRows:g,researchCompareLoading:r,researchExportLoading:P,researchTypeLabel:S,goShortterm:C,openResearchHistory:_,loadResearchHistory:D,exportResearchHistory:q,toggleResearchSelect:u,toggleResearchDetail:l,runResearchCompare:f,deleteResearchHistory:M}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
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
`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part2=`                            </div>
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
                                <!-- 6.3.1 (T-6.3.1.2): 复盘日期逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 66px, 见 layout.css) -->
                                <qc-virtual-list v-else class="market-review-date-items" :items="marketReviews" :row-height="66">
                                    <template #default="{ item }">
                                    <div class="market-review-date-item"
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
                                    </template>
                                </qc-virtual-list>
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
                                <div v-else>
                                    <div class="flex-wrap mb-4">
                                        <div class="stat-card"><div class="stat-icon info"><qc-icon name="file-text" :size="18" /></div><div class="stat-label">复盘总数</div><div class="stat-value">{{ marketReviews.length }}</div></div>
                                        <div class="stat-card"><div class="stat-icon success"><qc-icon name="calendar" :size="18" /></div><div class="stat-label">最新复盘</div><div class="stat-value stat-value-lg">{{ marketReviews[0] ? marketReviews[0].date : '—' }}</div></div>
                                    </div>
                                    <!-- 6.3.1 (T-6.3.1.2): 复盘列表逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 60px, 见 themes.css) -->
                                    <qc-virtual-list class="market-review-list market-review-list-vlist" :items="marketReviews" :row-height="60">
                                        <template #default="{ item }">
                                        <div class="market-review-row"
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
                                        </template>
                                    </qc-virtual-list>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:s,computed:e,watch:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const o=t("qcState"),d=Vue.ref(!1),b=Vue.ref(!1),c={n:0};if(!o)return{};const i=s(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(J){i.value=J;try{localStorage.setItem("quant_strategy_mode",J)}catch{}o.currentSubPage.value="strategy-manage"}const r=s([]),P=s(!1),k=s(!1),S=s(""),C=s(""),_=s(""),D=s({}),q=s(!1),u=s(""),l=s(""),f=s([]),M=s([]),I=s(""),E=s(""),A=s(!0),R=s(!0),F=s("20:00"),H=s("default"),B=s(!1),G=s(""),X=e(function(){return r.value.find(function(J){return J.id===_.value})||null});async function V(J,_e){_e=_e||{},_e.headers=Object.assign({},_e.headers||{});const Xe=localStorage.getItem("quant_token")||"";return Xe&&(_e.headers.Authorization="Bearer "+Xe),fetch(J,_e)}async function Q(){const J=++c.n;P.value=!0,k.value=!1,S.value="",C.value="";try{const _e=await V("/api/strategies").then(function(Vt){return Vt.json()});if(J!==c.n)return;let Xe=null;Array.isArray(_e)?Xe=_e:_e&&Array.isArray(_e.strategies)?(Xe=_e.strategies,_e.warn&&(C.value=String(_e.warn))):(k.value=!0,S.value=_e&&_e.detail?String(_e.detail):"策略列表加载失败（接口返回异常）"),Xe!==null&&(r.value=Xe,r.value.length&&!_.value&&(_.value=r.value[0].id,z()))}catch(_e){console.error("[research] 策略列表加载失败:",_e),k.value=!0,S.value="策略列表加载失败: "+(_e&&_e.message||"网络错误")}finally{J===c.n&&(P.value=!1)}}function z(){const J=X.value;J&&(D.value={},J.schema.forEach(function(_e){D.value[_e.key]=_e.default}),l.value="",j(),a(),ee())}async function a(){if(!_.value){M.value=[];return}try{const J=await V("/api/strategies/"+_.value+"/profiles").then(function(_e){return _e.json()});M.value=J&&J.data&&J.data.profiles||[],I.value=""}catch(J){console.error("[research] 方案列表加载失败:",J),M.value=[]}}async function p(){d.value=!0;const J=(E.value||"").trim();if(!J){window._core&&window._core.showToast("请输入方案名称");return}try{const _e=await V("/api/strategies/"+_.value+"/profiles",{method:"POST",body:JSON.stringify({name:J,params:D.value})}).then(function(Xe){return Xe.json()});if(_e&&_e.detail){window._core&&window._core.showToast(String(_e.detail));return}E.value="",await a(),window._core&&window._core.showToast("方案已保存")}catch(_e){console.error("[research] 方案保存失败:",_e),window._core&&window._core.showToast("方案保存失败")}}function n(){const J=M.value.find(function(_e){return _e.id===I.value});J&&(Object.keys(J.params||{}).forEach(function(_e){D.value[_e]=J.params[_e]}),window._core&&window._core.showToast("已应用方案: "+J.name))}async function h(){if(I.value)try{await V("/api/strategies/"+_.value+"/profiles/"+I.value,{method:"DELETE"}).then(function(J){return J.json()}),await a(),window._core&&window._core.showToast("方案已删除")}catch(J){console.error("[research] 方案删除失败:",J)}}async function ee(){try{const J=await V("/api/strategies/governance").then(function(Vt){return Vt.json()}),Xe=(J&&J.data&&J.data.strategies||{})[_.value]||{};A.value=Xe.enabled!==!1,F.value=Xe.schedule||"20:00",H.value=Xe.universe==="all"?"all":"default",R.value=Xe.show_in_calendar!==!1,G.value=Xe.last_holdings||""}catch(J){console.error("[research] 纳管状态加载失败:",J)}}async function N(){try{await V("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const J={};return J[_.value]={enabled:A.value,schedule:F.value,universe:H.value,show_in_calendar:R.value},J}()})}).then(function(J){return J.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(J){console.error("[research] 纳管更新失败:",J)}}async function x(){if(_.value){B.value=!0;try{const J=await V("/api/strategies/"+_.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:u.value||void 0})}).then(function(_e){return _e.json()});if(J&&J.detail){window._core&&window._core.showToast(String(J.detail));return}window._core&&window._core.showToast("持仓已生成"),await ee()}catch(J){console.error("[research] run-once 失败:",J),window._core&&window._core.showToast("持仓生成失败")}finally{B.value=!1}}}function m(){G.value&&window.open(G.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function L(){const J=X.value;if(!J)return;const _e=(E.value||"").trim()||J.name+"-副本";w(_e,Object.assign({},D.value)),window._core&&window._core.showToast("已复制为副本方案: "+_e)}async function w(J,_e){try{await V("/api/strategies/"+_.value+"/profiles",{method:"POST",body:JSON.stringify({name:J,params:_e})}).then(function(Xe){return Xe.json()}),await a()}catch(Xe){console.error("[research] 副本保存失败:",Xe)}}async function j(){const J=++c.n;if(_.value)try{const _e=await V("/api/strategies/"+_.value+"/runs?limit=5").then(function(Xe){return Xe.json()});if(J!==c.n)return;f.value=Array.isArray(_e)?_e:[]}catch{f.value=[]}}async function ae(){if(_.value){q.value=!0;try{const J=await V("/api/strategies/"+_.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:D.value,as_of:u.value||void 0})}).then(function(_e){return _e.json()});J&&J.status==="success"?j():ElementPlus.ElMessage.error("运行失败: "+(J.detail||JSON.stringify(J)))}catch(J){console.error("[research] 策略运行失败:",J),ElementPlus.ElMessage.error("运行失败: "+J.message)}finally{q.value=!1}}}async function Z(){if(_.value)try{const J=Object.keys(D.value).map(function(Xe){return encodeURIComponent(Xe)+"="+encodeURIComponent(D.value[Xe])}).join("&"),_e=await V("/api/strategies/"+_.value+"/ptrade-code?"+J).then(function(Xe){return Xe.json()});_e&&_e.code?l.value=_e.code:ElementPlus.ElMessage.error("导出失败: "+(_e.detail||JSON.stringify(_e)))}catch(J){console.error("[research] PTrade 导出失败:",J),ElementPlus.ElMessage.error("导出失败: "+J.message)}}function T(){if(!l.value)return;const J=document.createElement("textarea");J.value=l.value,document.body.appendChild(J),J.select();try{document.execCommand("copy")}catch{}document.body.removeChild(J)}const W=window.__quantModules.researchPage.marketReview.create({ref:s,seq:c,authHeaders:Ct}),{marketReviews:ne,marketReviewLoading:le,marketReviewError:Se,selectedReviewDate:$,marketReviewDetail:re,marketReviewDetailLoading:Pe}=W,{marketReviewDetailError:se,loadMarketReviews:me,openMarketReview:Me,toggleMarketReviewDate:oe,backToMarketReviewList:fe,loadMarketReviewDetail:ke}=W,{marketReviewChgClass:ie,marketReviewChgText:te,marketReviewSrcEntries:ve,fmtPct:Ne,fmtEmotion:Ae}=W,Ue=window.__quantModules.researchPage.factor.create({ref:s,seq:c,withAuth:V,authHeaders:Ct,activeStrategyId:_,paramValues:D}),{factorKey:Ze,factorIcLoading:et,factorLayerLoading:$e,factorIcReport:he,factorLayerResult:xe,factorOptions:Re}=Ue,{runFactorIc:De,runFactorLayer:We,factorDetail:Ge,factorDetailLoading:Ye,runFactorDetail:Je,sweepGrid:tt}=Ue,{sweepResult:ue,sweepMessage:ye,sweepLoading:Le,sweepStability:He,runSweep:y}=Ue,O=window.__quantModules.researchPage.history.create({seq:c,state:o}),{researchHistory:Y,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Ce,researchHistorySelected:we,researchDetailId:ze}=O,{researchCompareRows:Oe,researchCompareLoading:Ve,researchExportLoading:st,researchTypeLabel:gt,goShortterm:nt,openResearchHistory:K}=O,{loadResearchHistory:ge,exportResearchHistory:Qe,toggleResearchSelect:je,toggleResearchDetail:ft,runResearchCompare:ht,deleteResearchHistory:Mt}=O;v(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(J){J==="research/research-overview"&&(Q(),me(),Bt(),aa()),(J==="research/market-review"||J==="shortterm/market-review")&&!$.value&&me(),J==="research/quant-research"&&Q(),J==="research/backtest-history"&&pa()},{immediate:!0});const mt=s([]),pt=s(null),Et=s(null),Yt=s(null),Tt=s(""),zt=s(!1),At=s(!1),vt=s(""),It=s(""),Nt=s("");function Ct(){const J=localStorage.getItem("quant_token")||"";return J?{Authorization:"Bearer "+J,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Bt(){const J=++c.n;try{const _e=await fetch("/api/strategies/variants",{headers:Ct()}).then(function(Xe){return Xe.json()});if(J!==c.n)return;mt.value=_e&&_e.data&&_e.data.variants||[]}catch(_e){console.error("[i3a] 加载 variants 失败:",_e)}}async function Xt(){if(!_.value){vt.value="请先在量化研究选择母本策略";return}At.value=!0,vt.value="";try{const J=await fetch("/api/strategies/"+_.value+"/clone",{method:"POST",headers:Ct(),body:JSON.stringify({name:(E.value||"").trim()||void 0,params:Object.assign({},D.value)})}).then(function(Xe){return Xe.json()});if(J&&J.detail){vt.value=String(J.detail);return}const _e=J&&J.data;_e&&_e.sid&&(pt.value=_e.sid,vt.value="已复制为新策略: "+_e.name,await Bt(),await U(_e.sid))}catch(J){console.error("[i3a] 复制失败:",J),vt.value="复制失败: "+J.message}finally{At.value=!1}}async function Ot(J){pt.value=J,vt.value="",Tt.value="",await U(J)}async function U(J){try{const _e=await fetch("/api/strategies/"+J+"/selection-spec",{headers:Ct()}).then(function(Xe){return Xe.json()});_e&&_e.data&&_e.data.spec&&(Et.value=Object.assign({},_e.data.spec),Yt.value=_e.data.fields,It.value=(_e.data.spec.industry_scope||[]).join(","),Nt.value=(_e.data.spec.market_cap_range||[]).join(","))}catch(_e){console.error("[i3a] 加载 spec 失败:",_e)}}async function Ee(){if(b.value=!0,!(!pt.value||!Et.value))try{Et.value.industry_scope=It.value?It.value.split(/[,，]/).map(function(_e){return _e.trim()}).filter(Boolean):[],Et.value.market_cap_range=Nt.value?Nt.value.split(/[,，]/).map(Number).filter(function(_e){return!isNaN(_e)}):[];const J=await fetch("/api/strategies/"+pt.value+"/selection-spec",{method:"PUT",headers:Ct(),body:JSON.stringify({spec:Et.value})}).then(function(_e){return _e.json()});J&&J.data&&J.data.spec&&(Et.value=J.data.spec,vt.value="SelectionSpec 已保存")}catch(J){console.error("[i3a] 保存 spec 失败:",J),vt.value="保存失败"}}async function Ke(){if(!pt.value){vt.value="请先选择/创建微调策略";return}At.value=!0,vt.value="";try{const J=await fetch("/api/strategies/"+pt.value+"/run-once",{method:"POST",headers:Ct(),body:"{}"}).then(function(_e){return _e.json()});vt.value=J&&J.detail?String(J.detail):"持仓已生成: "+(J&&J.data&&J.data.symbols||0)+" 只"}catch(J){console.error("[i3a] run-once 失败:",J),vt.value="生成持仓失败"}finally{At.value=!1}}async function Ie(){if(!pt.value){vt.value="请先选择/创建微调策略";return}Et.value||await U(pt.value),zt.value=!0,vt.value="";try{const J=await fetch("/api/strategies/"+pt.value+"/ai-trade-code",{method:"POST",headers:Ct(),body:JSON.stringify({spec:Et.value})}).then(function(_e){return _e.json()});if(J&&J.detail){vt.value=String(J.detail);return}J&&J.data&&(Tt.value=J.data.code||"",J.data.api_errors&&J.data.api_errors.length?vt.value="生成成功(含 API 校验告警 "+J.data.api_errors.length+" 条)":vt.value="AI 交易码已生成, 已通过矩阵内校验")}catch(J){console.error("[i3a] AI 交易码失败:",J),vt.value="AI 生成失败: "+J.message}finally{zt.value=!1}}function rt(){if(Tt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Tt.value).then(function(){vt.value="代码已复制"});else{const J=document.createElement("textarea");J.value=Tt.value,document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J),vt.value="代码已复制"}}const ct=s(""),wt=s(""),jt=s([]),qt=s(""),Lt=s(""),yt=s(""),Zt=s(null),Qt=s(!1),ea=s(!1),ta=s(!1);function Dt(){const J=localStorage.getItem("quant_token")||"";return J?{Authorization:"Bearer "+J,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const J=++c.n;try{const _e=await fetch("/api/strategies/custom",{headers:Dt()}).then(function(Xe){return Xe.json()});if(J!==c.n)return;jt.value=_e&&_e.data&&_e.data.customs||[]}catch(_e){console.error("[i3b] 加载自定义策略失败:",_e)}}async function ca(){if(!wt.value.trim()){yt.value="请描述策略思路";return}Qt.value=!0,yt.value="";try{const J=await fetch("/api/strategies/custom",{method:"POST",headers:Dt(),body:JSON.stringify({name:ct.value.trim()||"自定义策略",prompt:wt.value})}).then(function(_e){return _e.json()});if(J&&J.detail){yt.value=String(J.detail);return}J&&J.data&&(Lt.value=J.data.code||"",yt.value="AI 代写成功: "+J.data.sid+(J.data.api_errors&&J.data.api_errors.length?" (API 告警 "+J.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(J){console.error("[i3b] AI 代写失败:",J),yt.value="AI 代写失败: "+J.message}finally{Qt.value=!1}}async function da(){if(qt.value)try{const J=await fetch("/api/strategies/custom/"+qt.value+"/code",{headers:Dt()}).then(function(_e){return _e.json()});J&&J.data&&(Lt.value=J.data.code||"",yt.value="")}catch(J){console.error("[i3b] 读取代码失败:",J)}}async function Jt(){if(!qt.value){yt.value="请先选择自定义策略";return}ea.value=!0,yt.value="";try{const J=await fetch("/api/strategies/custom/"+qt.value+"/backtest",{method:"POST",headers:Dt(),body:"{}"}).then(function(_e){return _e.json()});if(J&&J.detail){yt.value=String(J.detail);return}J&&J.data&&(Zt.value=J.data,yt.value="回测完成")}catch(J){console.error("[i3b] 回测失败:",J),yt.value="回测失败: "+J.message}finally{ea.value=!1}}async function ua(){if(!qt.value){yt.value="请先选择自定义策略";return}ta.value=!0,yt.value="";try{const J=await fetch("/api/strategies/custom/"+qt.value+"/ai-optimize",{method:"POST",headers:Dt(),body:JSON.stringify({backtest:Zt.value})}).then(function(_e){return _e.json()});if(J&&J.detail){yt.value=String(J.detail);return}J&&J.data&&(Lt.value=J.data.code||"",yt.value="AI 优化完成"+(J.data.api_errors&&J.data.api_errors.length?" (API 告警 "+J.data.api_errors.length+" 条)":" (校验通过)"))}catch(J){console.error("[i3b] AI 优化失败:",J),yt.value="AI 优化失败: "+J.message}finally{ta.value=!1}}function ut(){if(Lt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Lt.value).then(function(){yt.value="代码已复制"});else{const J=document.createElement("textarea");J.value=Lt.value,document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J),yt.value="代码已复制"}}const _t=Vue.ref([]),St=Vue.ref(!1),Rt=Vue.ref(!1),$t=Vue.ref(30);async function pa(){const J=++c.n;St.value=!0,Rt.value=!1;try{const _e=window.__quantModules&&window.__quantModules.core||{},Xe=typeof _e.authHeaders=="function"?_e.authHeaders():{},Vt=await fetch("/api/backtest/history?days="+$t.value,{headers:Xe}).then(function(_a){return _a.json()});if(J!==c.n)return;_t.value=Vt&&Vt.data||[]}catch(_e){console.error("[backtest] 回测历史加载失败:",_e),Rt.value=!0}finally{J===c.n&&(St.value=!1)}}return{...o,strategyManageMode:i,openStrategyManage:g,btHistory:_t,btHistoryLoading:St,btHistoryError:Rt,btHistoryDays:$t,loadBtHistory:pa,researchHistory:Y,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Ce,researchHistorySelected:we,researchDetailId:ze,researchCompareRows:Oe,researchCompareLoading:Ve,researchTypeLabel:gt,goShortterm:nt,openResearchHistory:K,loadResearchHistory:ge,researchExportLoading:st,exportResearchHistory:Qe,toggleResearchSelect:je,toggleResearchDetail:ft,runResearchCompare:ht,deleteResearchHistory:Mt,marketReviews:ne,marketReviewLoading:le,marketReviewError:Se,selectedReviewDate:$,marketReviewDetail:re,marketReviewDetailLoading:Pe,marketReviewDetailError:se,loadMarketReviews:me,openMarketReview:Me,toggleMarketReviewDate:oe,backToMarketReviewList:fe,loadMarketReviewDetail:ke,marketReviewChgClass:ie,marketReviewChgText:te,marketReviewSrcEntries:ve,fmtPct:Ne,fmtEmotion:Ae,strategies:r,strategiesLoading:P,strategiesError:k,strategiesErrorText:S,strategiesWarn:C,activeStrategyId:_,activeStrategy:X,paramValues:D,strategyRunning:q,ptradeCode:l,strategyRuns:f,savingProfile:d,variantSaving:b,loadStrategies:Q,onStrategyChange:z,runActiveStrategy:ae,exportActivePtradeCode:Z,copyPtradeCode:T,profiles:M,profileSelect:I,profileName:E,loadProfiles:a,saveProfile:p,applyProfile:n,deleteProfile:h,govEnabled:A,govSchedule:F,govUniverse:H,govRunning:B,lastHoldings:G,loadGov:ee,updateGov:N,runOnceActive:x,openLastHoldings:m,cloneStrategy:L,govShowCalendar:R,factorKey:Ze,factorIcLoading:et,factorLayerLoading:$e,factorIcReport:he,factorLayerResult:xe,factorOptions:Re,runFactorIc:De,runFactorLayer:We,factorDetail:Ge,factorDetailLoading:Ye,runFactorDetail:Je,variants:mt,variantSelected:pt,variantSpec:Et,specFields:Yt,aiCode:Tt,aiCodeLoading:zt,variantBusy:At,variantMsg:vt,loadVariants:Bt,cloneNewStrategy:Xt,selectVariant:Ot,loadVariantSpec:U,saveVariantSpec:Ee,runVariantOnce:Ke,genVariantAiCode:Ie,copyVariantCode:rt,customName:ct,customPrompt:wt,customs:jt,customSelected:qt,customCode:Lt,customMsg:yt,customBtResult:Zt,customGenLoading:Qt,customBtLoading:ea,customOptLoading:ta,loadCustoms:aa,genCustomCode:ca,loadCustomCode:da,runCustomBacktest:Jt,runCustomOptimize:ua,copyCustomCode:ut,sweepGrid:tt,sweepResult:ue,sweepMessage:ye,sweepLoading:Le,sweepStability:He,runSweep:y}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.tour={create:function(s){const{ref:e,computed:v,currentSubPage:t}=s,o=window.QuantOnboarding,d=e(!1),b=e(o?o.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),c=v(function(){return o&&o.shorttermTourSteps()[b.value.stepIndex]||{key:"",title:"",desc:""}}),i=v(function(){return o?o.shorttermTourProgress(b.value):{done:0,total:3,pct:0}}),g=v(function(){return b.value.stepIndex>=2});function r(){if(o){var D=null;try{D=localStorage.getItem("qc_shortterm_tour")}catch{}if(D){var q=o.parseState(D);q&&(b.value=q)}}}function P(){if(o){var D=JSON.stringify(b.value);try{localStorage.setItem("qc_shortterm_tour",D)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:D}})}).catch(function(){})}catch{}}}function k(){window.__quantGuideModalsEnabled===!0&&o&&t.value==="overview"&&(r(),o.shorttermTourShouldShow(b.value)&&(d.value=!0))}function S(){b.value=o.shorttermTourNext(b.value),P()}function C(){b.value=o.shorttermTourComplete(b.value),P(),d.value=!1}function _(){b.value=o.shorttermTourDismiss(b.value),P(),d.value=!1}return{shorttermTourVisible:d,shorttermTourState:b,shorttermTourStep:c,shorttermTourProg:i,shorttermTourIsLast:g,maybeShowShorttermTour:k,shorttermTourNext:S,shorttermTourFinish:C,shorttermTourSkip:_}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part1=`
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
                            <!-- 6.3.1 (T-6.3.1.2): 复盘日历逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 66px, 见 layout.css) -->
                            <qc-virtual-list v-else class="shortterm-date-items" :items="dateList" :row-height="66">
                                <template #default="{ item: d }">
                                <div class="shortterm-date-item"
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
                                </template>
                            </qc-virtual-list>
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
`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part2=`                            </div>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.view=window.__quantModules.shorttermPage.part1+window.__quantModules.shorttermPage.part2;(function(){const{inject:s,ref:e,onMounted:v,computed:t,nextTick:o}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:window.__quantModules.shorttermPage.view,setup(){const d=s("qcState");if(!d)return{};const b=d.currentPage,c=d.currentSubPage,i=e(""),g=e(null),r=e(!1),P=e(!1),k=e("数据加载失败"),S=e("请检查服务后重试"),C=e(null),_=e(null),D=e(!1),q=e(!1),u=e("数据加载失败"),l=e("请检查服务后重试"),f=e(null),M=e(1),I=50,E=t(function(){const U=_.value||[];if(U.length<=200)return U;const Ee=(M.value-1)*I;return U.slice(Ee,Ee+I)}),A=e(null),R=e(!1),F=e(!1),H=e("数据加载失败"),B=e("请检查服务后重试"),G=e([]),X=e(!1);async function V(){X.value=!0;try{const U=await fe("/api/shortterm/dates/summary",!1);U&&U.success&&(G.value=U.dates||[])}catch{G.value=[]}finally{X.value=!1}}function Q(U){U!==i.value&&(i.value=U,K(!0))}const z=e("行业资金流"),a=e("今日"),p=e(""),n=e(null),h=e(1),ee=e(!1),N=e(!1),x=e("数据加载失败"),m=e("请检查服务后重试"),L=e(""),w=e(null),j=e(!1),ae=e(null),Z=e(!1),T=e(!1),W=e(""),ne=e(""),le=e(!1);function Se(){const U=localStorage.getItem("quant_token")||"";return U?{Authorization:"Bearer "+U,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},re=[],Pe=50,se=60*1e3;let me=0,Me=0,oe=0;function fe(U,Ee){const Ke=Date.now(),Ie=$[U];return!Ee&&Ie&&Ke-Ie.ts<se?Promise.resolve(Ie.data):fetch(U,{headers:Se()}).then(function(rt){return rt.json()}).then(function(rt){if($[U]||re.push(U),$[U]={ts:Date.now(),data:rt},re.length>Pe){const ct=re.shift();delete $[ct]}return rt})}async function ke(U){const Ee=++me;r.value=!0,P.value=!1;try{const Ke="/api/shortterm/pools"+(i.value?"?date="+i.value:""),Ie=await fe(Ke,U);if(Ee!==me)return;Ie&&Ie.success?(g.value=Ie,o(st)):Ie&&Ie.detail?(P.value=!0,k.value=String(Ie.detail),S.value="请先登录后再查看"):(P.value=!0,k.value="数据加载失败",S.value="请检查服务后重试")}catch{if(Ee!==me)return;P.value=!0,k.value="数据加载失败",S.value="请检查服务后重试"}finally{Ee===me&&(r.value=!1)}}async function ie(U){const Ee=++me;D.value=!0,q.value=!1;try{const Ke="/api/shortterm/lhb"+(i.value?"?date="+i.value:""),Ie=await fe(Ke,U);if(Ee!==me)return;Ie&&Ie.success?(_.value=Array.isArray(Ie.rows)?Ie.rows:null,f.value=Ie.available===!1&&Ie.reason||null,M.value=1):Ie&&Ie.detail?(q.value=!0,u.value=String(Ie.detail),l.value="请先登录后再查看"):(q.value=!0,u.value="数据加载失败",l.value="请检查服务后重试")}catch{if(Ee!==me)return;q.value=!0,u.value="数据加载失败",l.value="请检查服务后重试"}finally{Ee===me&&(D.value=!1)}}const te=t(function(){const U=g.value&&g.value.ladder&&g.value.ladder.tiers;return!U||!Object.keys(U).length?"—":Object.keys(U).sort(function(Ee,Ke){return Ee-Ke}).map(function(Ee){return Ee+"板:"+U[Ee]}).join(" ")}),ve=t(function(){const U=g.value&&g.value.zt||[];return C.value?U.filter(function(Ee){return Ee.boards===C.value}):U});function Ne(){C.value=null}const Ae=t(function(){const U=A.value&&A.value.emotion&&A.value.emotion.money_effect;return!U||!U.available?"—":U.source==="settled"?"定稿记录":U.source==="realtime"?U.partial?"实时(样本不全)":"实时":"—"}),Ue=t(function(){const U=A.value&&A.value.emotion&&A.value.emotion.promotion&&A.value.emotion.promotion.tiers&&A.value.emotion.promotion.tiers["1进2"];return U?U.rate:null}),Ze=t(function(){const U=A.value&&A.value.emotion&&A.value.emotion.sentiment_cycle;return U&&U.available&&U.current_score!=null?U.current_score.toFixed(2):"—"}),et=t(function(){const U=A.value&&A.value.emotion&&A.value.emotion.sentiment_cycle;return!U||!U.available?"—":(U.trend||"—")+(U.day_n!=null?" · 距低谷"+U.day_n+"天":"")});t(function(){const U=A.value&&A.value.emotion;if(!U)return"";const Ee=[];for(const Ke of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ie=U[Ke];Ie&&Ie.available===!1&&Ie.reason&&Ee.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Ee.join("；")}),t(function(){const U=A.value&&A.value.facts;if(!U)return"";const Ee=[];for(const Ke of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ie=U[Ke];Ie&&Ie.available===!1&&Ie.reason&&Ee.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Ee.join("；")});function $e(U){return U==null||isNaN(U)?"—":(U*100).toFixed(0)+"%"}function he(U,Ee){return U==null?"—":(typeof U=="number"?Math.round(U*100)/100:U)+(Ee||"")}function xe(U){return"tag-chip mr-4"}function Re(U){return U==null?"":U>0?"is-rise":U<0?"is-fall":""}function De(U){return U==="机构"?"is-institution":U==="游资"?"is-hotmoney":U==="主力"?"is-main":""}const We=t(function(){const U=A.value&&A.value.session_status;if(!U)return"—";const Ee=A.value.date;return Ee===U.latest_session&&U.settled?"已收盘":Ee===U.today&&U.is_trade_day&&!U.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ge=t(function(){const U=A.value&&A.value.session_status;if(!U)return"";const Ee=A.value.date;return Ee===U.latest_session&&U.settled?"is-institution":Ee===U.today&&U.is_trade_day&&!U.settled?"is-main":""});function Ye(U){U&&U.ts_code&&d&&d.showStockDetail&&d.showStockDetail(U.ts_code)}const Je=t(function(){return(_.value||[]).filter(function(U){return(U.tags||[]).indexOf("机构")>=0}).reduce(function(U,Ee){return U+(Ee.net_buy||0)},0)}),tt=t(function(){return(_.value||[]).filter(function(U){return(U.tags||[]).indexOf("游资")>=0}).length}),ue=t(function(){const U=(n.value||[]).filter(function(Ee){return Ee.main_net_inflow!=null});return U.length?U.reduce(function(Ee,Ke){return Ee.main_net_inflow>=Ke.main_net_inflow?Ee:Ke}):null}),ye=t(function(){const U=ue.value;return U?U.name:"—"}),Le=t(function(){const U=ue.value;return U?U.main_net_inflow:null}),He=t(function(){return L.value||"东财"}),y=t(function(){const U=(p.value||"").trim(),Ee=n.value||[];return U?Ee.filter(function(Ke){return Ke.name&&String(Ke.name).indexOf(U)>=0}):Ee});function O(U){p.value=U||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Y=t(function(){const U=y.value;if(U.length<=200)return U;const Ee=(h.value-1)*I;return U.slice(Ee,Ee+I)}),ce=["09:25","09:35","10:00","11:30","14:00","15:00"],de=t(function(){const U={};return(ae.value||[]).forEach(function(Ee){U[Ee.slot]=!0}),U});function Ce(U){return de.value[U]?"is-done":U===we.value?"is-current":"is-empty"}const we=t(function(){const U=new Date,Ee=(U.getHours()<10?"0":"")+U.getHours(),Ke=(U.getMinutes()<10?"0":"")+U.getMinutes(),Ie=Ee+":"+Ke;for(var rt=0;rt<ce.length;rt++)if(Ie===ce[rt])return ce[rt];for(var ct=0;ct<ce.length-1;ct++){var wt=ce[ct],jt=new Date;jt.setHours(Number(wt.split(":")[0]),Number(wt.split(":")[1]),0,0);var qt=new Date(jt.getTime()+8*6e4);if(U>=jt&&U<=qt)return wt}return""}),ze=t(function(){const U=new Date,Ee=we.value;if(Ee)return"当前处于快照窗口 "+Ee+" (前后 8 分钟) — 可采集";const Ke=U.getHours(),Ie=U.getMinutes();let rt="";for(let ct=0;ct<ce.length;ct++){const wt=ce[ct].split(":");if(Number(wt[0])>Ke||Number(wt[0])===Ke&&Number(wt[1])>Ie){rt=ce[ct];break}}return rt?"下一快照时点 "+rt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Oe=e(""),Ve=e("info");function st(){const U=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!U||!Object.keys(U).length)return;const Ee=window.__quantModules&&window.__quantModules.charts;if(!Ee||!Ee.renderSimpleChartTo)return;const Ke=C.value,Ie=Ee.renderSimpleChartTo("shorttermLadderChart",function(){const rt=Object.keys(U).sort(function(ct,wt){return Number(ct)-Number(wt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:rt.map(function(ct){return ct+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(ct){return Ke&&Number(rt[ct.dataIndex])===Ke?"var(--color-accent)":"var(--chart-split)"}},data:rt.map(function(ct){return U[ct]})}]}},{key:"shortterm-ladder"});Ie&&Ie.off&&(Ie.off("click"),Ie.on("click",function(rt){if(!rt||!rt.name)return;const ct=parseInt(rt.name,10);isNaN(ct)||(C.value=C.value===ct?null:ct)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(st);function gt(U){if(U==null)return"—";const Ee=Math.abs(U);return Ee>=1e8?(U/1e8).toFixed(2)+"亿":Ee>=1e4?(U/1e4).toFixed(0)+"万":U.toFixed(0)}function nt(U){return U==null?"—":(U>=0?"+":"")+U.toFixed(2)+"%"}async function K(U){const Ee=++Me;R.value=!0,F.value=!1;try{const Ke="/api/shortterm/overview"+(i.value?"?date="+i.value:""),Ie=await fe(Ke,U);if(Ee!==Me)return;Ie&&Ie.success?A.value=Ie:Ie&&Ie.detail?(F.value=!0,H.value=String(Ie.detail),B.value="请先登录后再查看"):(F.value=!0,H.value="数据加载失败",B.value="请检查服务后重试")}catch{if(Ee!==Me)return;F.value=!0,H.value="数据加载失败",B.value="请检查服务后重试"}finally{Ee===Me&&(R.value=!1)}}async function ge(U){const Ee=++me;ee.value=!0,N.value=!1;try{const Ke="/api/shortterm/sector-flow?indicator="+encodeURIComponent(a.value)+"&sector_type="+encodeURIComponent(z.value),Ie=await fe(Ke,U);if(Ee!==me)return;Ie&&Ie.success&&Ie.available?(n.value=Ie.rows||[],L.value=Ie.source||(Ie.note?"同花顺":"东财"),h.value=1):Ie&&Ie.reason?(N.value=!0,x.value="数据加载失败",m.value=String(Ie.reason).replace(/^\[[^\]]*\]\s*/,"")):Ie&&Ie.detail?(N.value=!0,x.value=String(Ie.detail),m.value="请先登录后再查看"):(N.value=!0,x.value="数据加载失败",m.value="请检查服务后重试")}catch{if(Ee!==me)return;N.value=!0,x.value="数据加载失败",m.value="请检查服务后重试"}finally{Ee===me&&(ee.value=!1)}}async function Qe(U){const Ee=++oe;try{const Ke="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ie=await fe(Ke,U);if(Ee!==oe)return;Ie&&Ie.success&&(w.value=Ie.review||null)}catch{}}async function je(){j.value=!0;try{const U="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ee=await fetch(U,{method:"POST",headers:Se()}).then(function(Ke){return Ke.json()});Ee&&Ee.success&&(w.value=Ee,$[U]={ts:Date.now(),data:Ee})}catch{}finally{j.value=!1}}async function ft(){const U=W.value.trim();if(U){le.value=!0,ne.value="";try{const Ke=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Se(),body:JSON.stringify({date:overviewDate.value,question:U})}).then(function(Ie){return Ie.json()});ne.value=Ke.answer||"[无回复]"}catch{ne.value="[发送失败]"}finally{le.value=!1}}}async function ht(U){const Ee=++me;Z.value=!0;try{const Ke="/api/shortterm/intraday"+(i.value?"?date="+i.value:""),Ie=await fe(Ke,U);if(Ee!==me)return;Ie&&Ie.success&&(ae.value=Ie.snapshots||[])}catch{}finally{Ee===me&&(Z.value=!1)}}async function Mt(){T.value=!0;try{const U="/api/shortterm/intraday/snapshot"+(i.value?"?date="+i.value:""),Ee=await fetch(U,{method:"POST",headers:Se()}).then(function(Ke){return Ke.json()});Ee&&Ee.success?(Ee.accepted?(Oe.value="已采集 "+Ee.slot+" 快照"+(Ee.pools_available&&!Ee.pools_available.zt?" (池源部分不可用)":""),Ve.value="ok"):(Oe.value="⏱ "+(Ee.reason||"非快照时点"),Ve.value="warn"),ht()):Oe.value="采集失败, 请稍后重试"}catch{Oe.value="采集失败, 请稍后重试"}finally{T.value=!1}}function mt(){return fe("/api/shortterm/latest-session",!1).then(function(U){U&&U.date&&(i.value||(i.value=U.date))}).catch(function(){})}function pt(){const U=c.value;U==="ztpool"?ke():U==="lhb"?ie():U==="overview"?(K(),Qe()):U==="sector"?ge():U==="intraday"&&ht()}function Et(){const U=i.value?"?date="+i.value:"";["/api/shortterm/overview"+U,"/api/shortterm/pools"+U,"/api/shortterm/lhb"+U].forEach(function(Ke){fe(Ke,!1).catch(function(){})})}function Yt(){const U=c.value;U==="ztpool"?ke(!0):U==="lhb"?ie(!0):U==="overview"?(K(!0),Qe(!0)):U==="sector"?ge(!0):U==="intraday"&&ht(!0)}const Tt=window.__quantModules.shorttermPage.tour.create({ref:e,computed:t,currentSubPage:c}),{shorttermTourVisible:zt,shorttermTourState:At,shorttermTourStep:vt,shorttermTourProg:It,shorttermTourIsLast:Nt}=Tt,{maybeShowShorttermTour:Ct,shorttermTourNext:Bt,shorttermTourFinish:Xt,shorttermTourSkip:Ot}=Tt;return v(function(){mt(),pt(),Et(),Ct(),V()}),Vue.watch(function(){return c.value},function(U){pt(),U==="overview"&&Ct()}),{currentPage:b,currentSubPage:c,shortDate:i,pools:g,poolLoading:r,poolError:P,ztBoardFilter:C,filteredZt:ve,clearBoardFilter:Ne,lhbRows:_,lhbLoading:D,lhbError:q,lhbReason:f,lhbPageRows:E,lhbPage:M,overview:A,overviewLoading:R,overviewError:F,dateList:G,dateListLoading:X,loadDateList:V,pickDate:Q,sectorType:z,sectorIndicator:a,sectorKeyword:p,sectorRows:n,filteredSectorRows:y,sectorPageRows:Y,sectorPage:h,sectorLoading:ee,sectorError:N,sectorFlowSource:L,PAGE_SIZE:I,gotoSector:O,review:w,reviewRunning:j,intradaySnapshots:ae,intradayLoading:Z,intradayCollecting:T,intradaySlots:ce,intradayMsg:Oe,slotClass:Ce,intradayStatus:ze,chatQuestion:W,chatAnswer:ne,chatLoading:le,loadPools:ke,loadLhb:ie,loadOverview:K,loadSectorFlow:ge,loadReview:Qe,runReview:je,sendChat:ft,loadIntraday:ht,collectSnapshot:Mt,refreshCurrent:Yt,ladderText:te,fmtAmount:gt,fmtPct:nt,riseFall:Re,tagClass:De,openStock:Ye,lhbInstitutionNetBuy:Je,lhbHotMoneyCount:tt,sectorTopName:ye,sectorTopInflow:Le,sectorSource:He,moneySource:Ae,promotion1to2:Ue,cycleScore:Ze,cycleTrend:et,pct:$e,fmtCond:he,verdictClass:xe,sessionStatusText:We,sessionStatusClass:Ge,shorttermTourVisible:zt,shorttermTourState:At,shorttermTourStep:vt,shorttermTourProg:It,shorttermTourIsLast:Nt,shorttermTourNext:Bt,shorttermTourFinish:Xt,shorttermTourSkip:Ot}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(c,i,g,r,P){var k=g>0?g:1,S=typeof P=="number"&&P>=0?P:s,C=Math.max(0,r),_=Math.max(0,c),D=Math.max(0,i),q=Math.max(0,Math.floor(_/k)-S),u=Math.min(C,Math.ceil((_+D)/k)+S);return{startIndex:q,endIndex:u}}function v(c,i){return Math.max(0,c||0)*(i>0?i:0)}function t(c,i,g,r,P){var k=c||[],S=e(i,g,r,k.length,P),C=k.slice(S.startIndex,S.endIndex);return{visible:C,startIndex:S.startIndex,endIndex:S.endIndex,offsetY:S.startIndex*(r>0?r:1),totalHeight:v(k.length,r)}}function o(c,i){if(c){if(c.code!=null)return c.code;if(c.id!=null)return c.id;if(c.ts_code!=null)return c.ts_code}return i}function d(c,i,g){var r=c||[];if(!r.length)return i>0?i:1;for(var P=Math.min(g||50,r.length),k=0,S=0,C=0;C<P;C++){var _=r[C]&&r[C].rowHeight;typeof _=="number"&&_>0&&(k+=_,S++)}return S?k/S:i>0?i:1}function b(c,i,g,r,P){var k=e(c,i,g,r,P),S=Math.max(0,r);return S?(k.endIndex-k.startIndex)/S:0}return{DEFAULT_BUFFER:s,computeVisibleRange:e,computeTotalHeight:v,sliceVisible:t,getRowKey:o,estimateDynamicRowHeight:d,renderedRatio:b}});(function(){const{ref:s,computed:e,onMounted:v,onBeforeUnmount:t}=Vue,o=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:o.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const b=s(null),c=s(0),i=s(400),g=e(()=>(o.computeVisibleRange||function(l,f,M,I,E){const A=M>0?M:1,R=E>=0?E:8,F=Math.max(0,I);return{startIndex:Math.max(0,Math.floor(l/A)-R),endIndex:Math.min(F,Math.ceil((l+f)/A)+R)}})(c.value,i.value,d.rowHeight,d.items.length,d.buffer)),r=e(()=>d.items.length*d.rowHeight),P=e(()=>g.value.startIndex),k=e(()=>g.value.endIndex),S=e(()=>d.items.slice(P.value,k.value));function C(){b.value&&(c.value=b.value.scrollTop)}function _(){b.value&&(i.value=b.value.clientHeight||400)}function D(u,l){return o.getRowKey?o.getRowKey(u,l):u&&u.code!=null?u.code:u&&u.id!=null?u.id:l}let q=null;return v(()=>{_(),b.value&&typeof ResizeObserver<"u"&&(q=new ResizeObserver(()=>_()),q.observe(b.value))}),t(()=>{q&&q.disconnect()}),{scrollEl:b,totalHeight:r,startIndex:P,endIndex:k,visibleItems:S,onScroll:C,keyOf:D}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():(s.__quantModules=s.__quantModules||{},s.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var s=40,e=1.2,v=60,t=500,o=10,d=88,b=350;function c(l,f,M,I,E){E=E||{};var A=typeof E.threshold=="number"?E.threshold:s,R=typeof E.bias=="number"?E.bias:e,F=M-l,H=I-f;return Math.abs(F)<A||Math.abs(F)<Math.abs(H)*R?"none":F<0?"left":"right"}function i(l,f,M){M=M||{};var I=typeof M.threshold=="number"?M.threshold:v;return f-l>=I}function g(l,f){f=f||{};var M=typeof f.threshold=="number"?f.threshold:t;return l>=M}var r=!1;function P(l,f){return l&&typeof l.closest=="function"?l.closest(f):null}function k(l){if(!l)return"";var f=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(f){var M=f.getAttribute&&f.getAttribute("data-copy-code");if(M)return M.trim();var I=(f.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(I)return I[0]}var E=l.getAttribute&&l.getAttribute("data-copy-code");return E?E.trim():""}function S(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return C(l)}):Promise.resolve(C(l))}function C(l){try{var f=document.createElement("textarea");return f.value=l,f.style.position="fixed",f.style.opacity="0",document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),!0}catch{return!1}}function _(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function D(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function q(){var l=null,f=null,M=null;function I(){f&&(f.timer&&clearTimeout(f.timer),f=null)}function E(X){M={el:X,until:Date.now()+b}}function A(X){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(V){V!==X&&V.classList.remove("swipe-open")}),l&&l.el!==X&&(l=null)}function R(X){var V=X.touches&&X.touches[0];if(V){var Q=P(X.target,".swipe-reveal");Q&&(l={el:Q,x:V.clientX,y:V.clientY,moved:!1},X.stopPropagation());var z=P(X.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");z&&(I(),f={el:z,x:V.clientX,y:V.clientY,timer:setTimeout(function(){var a=k(z);f=null,a&&(E(z),S(a).then(function(){D(),_("已复制代码 "+a)}))},t)})}}function F(X){if(l){var V=X.touches&&X.touches[0];if(V){var Q=V.clientX-l.x,z=V.clientY-l.y;if(Math.abs(Q)>8&&Math.abs(Q)>Math.abs(z)*1.2){X.cancelable&&X.preventDefault(),l.moved=!0;var a=l.el.querySelector(".swipe-reveal-main")||l.el,p=Math.max(-d,Math.min(0,Q));a.style.transition="none",a.style.transform="translateX("+p+"px)",X.stopPropagation()}if(f){var n=V.clientX-f.x,h=V.clientY-f.y;(Math.abs(n)>o||Math.abs(h)>o)&&I()}}}}function H(X){if(I(),!!l){var V=l.el,Q=X.changedTouches&&X.changedTouches[0],z=l.x,a=l.y,p="none";Q&&(p=c(z,a,Q.clientX,Q.clientY));var n=l.moved;l=null;var h=V.querySelector(".swipe-reveal-main")||V;h.style.transform="",h.style.transition="",p==="left"?(A(V),V.classList.add("swipe-open"),E(V)):(p==="right"||n)&&V.classList.remove("swipe-open"),X.stopPropagation()}}function B(){I(),l=null}function G(X){if(M&&Date.now()<M.until){var V=M.el.contains(X.target)||X.target===M.el,Q=X.target.closest&&X.target.closest(".swipe-reveal-actions");V&&!Q&&(X.preventDefault(),X.stopPropagation(),M=null)}}document.addEventListener("touchstart",R,!0),document.addEventListener("touchmove",F,!0),document.addEventListener("touchend",H,!0),document.addEventListener("touchcancel",B,!0),document.addEventListener("click",G,!0)}function u(){r||typeof document>"u"||(r=!0,q())}return{judgeSwipe:c,judgePullToRefresh:i,judgeLongPress:g,SWIPE_THRESHOLD:s,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:v,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:o,REVEAL_WIDTH:d,initGestures:u,_codeFromRow:k}});(function(){const s={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(s);function v(d){return s[d]||s.empty}function t(){const d=[];for(const b of e){const c=s[b];c.title||d.push(b+".title"),b!=="loading"&&!c.icon&&d.push(b+".icon"),typeof c.retry!="boolean"&&d.push(b+".retry"),typeof c.skeleton!="boolean"&&d.push(b+".skeleton")}return{ok:d.length===0,errors:d}}const o={VARIANTS:s,KEYS:e,resolve:v,validate:t};typeof window<"u"&&(window.QuantStatePanel=o),typeof Te<"u"&&Te.exports&&(Te.exports=o)})();(function(){const{computed:s}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(v){const t=s(()=>typeof e.resolve=="function"?e.resolve(v.type):{}),o=s(()=>v.icon||t.value.icon||""),d=s(()=>v.title||t.value.title||""),b=s(()=>v.desc||t.value.desc||""),c=s(()=>!!t.value.retry),i=s(()=>/^[a-z][a-z0-9-]*$/.test(String(o.value||"")));return{icon:o,title:d,desc:b,retryable:c,isIconName:i}}}})();(function(s,e){typeof Te=="object"&&Te.exports?Te.exports=e():s.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function s(l){return String(l||"").trim().toLowerCase()}function e(l,f){if(!l)return!0;const M=l.split(/\s+/).filter(Boolean);if(!M.length)return!0;const I=String(f||"").toLowerCase();return M.every(function(E){return I.indexOf(E)!==-1})}function v(){return{visible:!1,query:"",activeIndex:0}}function t(l,f){return f===void 0&&(f=!l.visible),l.visible=f,f&&(l.query="",l.activeIndex=0),l.visible}function o(l,f,M){const I=s(l);if(!f||!f.length)return[];const E=[];return f.forEach(function(A){const R=e(I,A.name)||e(I,A.key),F=(A.subPages||[]).filter(function(H){const B=M&&M[H]||H;return e(I,B)||e(I,H)});R&&E.push({type:"menu",menuKey:A.key,subPage:A.subPages&&A.subPages[0]||"",label:A.name,subLabel:"页面",icon:A.icon||"file-text"}),F.forEach(function(H){E.push({type:"menu",menuKey:A.key,subPage:H,label:M&&M[H]||H,subLabel:A.name,icon:A.icon||"file-text"})})}),E.slice(0,8)}function d(l,f){const M=s(l);return!f||!f.length?[]:f.filter(function(I){return!!(!M||e(M,I.label)||e(M,I.key)||I.keywords&&e(M,I.keywords))}).slice(0,8)}function b(l,f){const M=s(l);return!M||!f||!f.length?[]:f.filter(function(I){return e(M,I.code)||e(M,I.name)}).slice(0,8).map(function(I){return{type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up"}})}function c(l,f,M){const I=[],E=[];return M&&M.length&&(I.push({key:"stock",label:"股票",items:M}),E.push.apply(E,M)),l&&l.length&&(I.push({key:"menu",label:"菜单",items:l}),E.push.apply(E,l)),f&&f.length&&(I.push({key:"command",label:"指令",items:f}),E.push.apply(E,f)),{groups:I,flat:E}}function i(l,f,M){if(f<=0)return 0;const I=((l||0)+M)%f;return I<0?f-1:I}function g(l,f,M,I){const E=o(l,f,M).map(function(R){return{type:"menu",menuKey:R.menuKey,subPage:R.subPage,label:R.label,subLabel:R.subLabel,icon:R.icon,iconName:R.icon,value:R.icon+" "+R.label+" · "+R.subLabel}}),A=d(l,I||[]).map(function(R){return{type:"command",key:R.key,label:R.label,icon:R.icon,iconName:R.icon,subLabel:"指令",value:R.icon+" "+R.label}});return E.concat(A)}function r(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const P=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var k={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function S(l){if(!l||typeof l!="string")return null;var f=l.split("+").map(function(E){return E.trim()}).filter(Boolean);if(!f.length)return null;var M=f.pop().toLowerCase();if(!M)return null;var I={ctrl:!1,alt:!1,shift:!1,meta:!1};return f.forEach(function(E){var A=E.toLowerCase();k.ctrl.indexOf(A)!==-1?I.ctrl=!0:k.alt.indexOf(A)!==-1?I.alt=!0:k.shift.indexOf(A)!==-1?I.shift=!0:k.meta.indexOf(A)!==-1&&(I.meta=!0)}),{ctrl:I.ctrl,alt:I.alt,shift:I.shift,meta:I.meta,key:M}}function C(l,f){if(!l||!f)return!1;var M=String(f.key||f.code||"").toLowerCase();return l.key!==M?!1:l.ctrl===!!f.ctrlKey&&l.alt===!!f.altKey&&l.shift===!!f.shiftKey&&l.meta===!!f.metaKey}function _(l){if(!l)return"";var f=[];return l.ctrl&&f.push("Ctrl"),l.alt&&f.push("Alt"),l.shift&&f.push("Shift"),l.meta&&f.push("Meta"),f.push(l.key.toUpperCase()),f.join("+")}function D(){var l={};return{register:function(f){if(!f||!f.key)throw new Error("命令 key 必填");if(l[f.key])throw new Error("命令重复注册: "+f.key);return l[f.key]=Object.assign({},f),f.key},list:function(){return Object.keys(l).map(function(f){return l[f]})},get:function(f){return l[f]||null},remove:function(f){delete l[f]},has:function(f){return!!l[f]},count:function(){return Object.keys(l).length}}}function q(){var l={},f={};return{register:function(M,I,E){var A=S(M);if(!A)throw new Error("无效快捷键: "+M);var R=_(A);if(l[R])throw new Error("快捷键冲突: "+M);if(I!=null&&f[I]!==void 0)throw new Error("动作重复绑定: "+I);return l[R]={combo:M,action:I,description:E||"",parsed:A},f[I]=R,R},resolve:function(M){for(var I in l)if(C(l[I].parsed,M))return l[I].action;return null},list:function(){return Object.keys(l).map(function(M){return l[M]})},unregister:function(M){var I=_(S(M));l[I]&&(delete f[l[I].action],delete l[I])},count:function(){return Object.keys(l).length}}}function u(){var l=q();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:s,createPaletteState:v,toggleVisible:t,searchMenus:o,searchCommands:d,filterStocksLocal:b,mergeResults:c,moveIndex:i,buildSearchSuggestions:g,dispatchSearchSelection:r,DEFAULT_COMMANDS:P,parseKeyCombo:S,matchShortcut:C,canonicalCombo:_,createCommandRegistry:D,createShortcutRegistry:q,createDefaultShortcuts:u}});(function(s){if(s&&!s.QuantCommandPanel)try{var e=typeof Te<"u"&&Te.exports?Te.exports:null;e&&(s.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(s,e){var v=e();typeof Te=="object"&&Te.exports&&(Te.exports=v),s.QuantOnboarding=v})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var s=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=s.length,v=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=v.length;function o(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return v.slice()}function b(H){return H<0?0:H>=t?t-1:H}function c(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function i(H){return c(Object.assign({},H,{stepIndex:b((H.stepIndex||0)+1),updatedAt:Date.now()}))}function g(H){return c(Object.assign({},H,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function r(H){return c(Object.assign({},H,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function P(H){var B=Math.min(H&&H.stepIndex||0,t);return{done:B,total:t,pct:Math.round(B/t*100)}}function k(H){return!!(H&&!H.completed&&!H.dismissed)}function S(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function C(){return s.slice()}function _(){return e}function D(H){return H<0?0:H>=e?e-1:H}function q(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function u(H){return q(Object.assign({},H,{stepIndex:D((H.stepIndex||0)+1),updatedAt:Date.now()}))}function l(H){return q(Object.assign({},H,{stepIndex:D((H.stepIndex||0)-1),updatedAt:Date.now()}))}function f(H,B){return q(Object.assign({},H,{stepIndex:D(B),updatedAt:Date.now()}))}function M(H){return q(Object.assign({},H,{completed:!0,updatedAt:Date.now()}))}function I(H){return q(Object.assign({},H,{dismissed:!0,updatedAt:Date.now()}))}function E(H){return!!(H&&H.completed)}function A(H){var B=Math.min(H&&H.stepIndex||0,e);return{done:B,total:e,pct:Math.round(B/e*100)}}function R(H){var B=H||S();return JSON.stringify({stepIndex:B.stepIndex,completed:!!B.completed,dismissed:!!B.dismissed,updatedAt:B.updatedAt||0})}function F(H){var B=S();if(!H||typeof H!="string")return B;try{var G=JSON.parse(H);if(!G||typeof G!="object")return B;var X=parseInt(G.stepIndex,10);return isNaN(X)?B:{stepIndex:D(X),completed:!!G.completed,dismissed:!!G.dismissed,updatedAt:G.updatedAt||0}}catch{return B}}return{ONBOARDING_STEPS:s,steps:C,stepCount:_,createOnboardingState:S,next:u,prev:l,jumpTo:f,complete:M,dismiss:I,isComplete:E,progress:A,persistState:R,parseState:F,SHORTTERM_TOUR_STEPS:v,shorttermTourSteps:d,createShorttermTourState:o,shorttermTourNext:i,shorttermTourComplete:g,shorttermTourDismiss:r,shorttermTourProgress:P,shorttermTourShouldShow:k}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,computed:e,onMounted:v}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const o=s(!1),d=s(t.createOnboardingState()),b=e(function(){return t.steps()[d.value.stepIndex]}),c=e(function(){return t.progress(d.value)}),i=e(function(){return d.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+b.value.key});function r(){const u=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:u}})}).then(function(l){return l.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",u)}catch{}})}function P(u){u&&window.__quantGoPage?window.__quantGoPage(u,""):u&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=u,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function k(){d.value=t.next(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function S(){d.value=t.prev(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function C(){d.value=t.complete(d.value),r(),o.value=!1}function _(){d.value=t.dismiss(d.value),r(),o.value=!1}function D(){d.value=t.createOnboardingState(),r(),o.value=!0}function q(){fetch("/api/user_config/preferences").then(function(u){return u.json()}).then(function(u){const l=u&&u.preferences&&u.preferences.onboarding_progress;return l&&(d.value=t.parseState(l)),l}).catch(function(){return null}).then(function(u){if(!u)try{const l=localStorage.getItem("qc_onboarding_progress");l&&(d.value=t.parseState(l))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(o.value=!0)}),window.addEventListener("qc:onboarding-replay",D)}return v(q),{visible:o,st:d,step:b,prog:c,isLast:i,stepKey:g,next:k,prev:S,finish:C,skip:_,replay:D}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function s(e){try{const v=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(v)return v(e)||""}catch{}return e}return{t:s}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function s(e){try{const v=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(v)return v(e)||""}catch{}return e}return{t:s}}})})();(function(){const{ref:s,computed:e,watch:v,nextTick:t,inject:o,onMounted:d}=Vue,b=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
      <el-dialog v-model="visible" width="640px" top="12vh" class="command-palette"
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
    `,setup(){const c=o("qcState");if(!c)return{};const i=s(""),g=e({get:()=>c.commandPaletteVisible.value,set:z=>{c.commandPaletteVisible.value=z}}),r=s(0),P=s([]),k=s(null),S=e(()=>{const z=(b.DEFAULT_COMMANDS||[]).map(function(p){return Object.assign({},p)});return Object.keys(c.themes.value||{}).forEach(function(p){const n=c.themes.value[p];z.push({key:"theme:"+p,label:"切换主题 · "+(n.name||p),icon:"palette",keywords:"theme 主题"})}),z});function C(z){return typeof z=="string"&&/^[a-z][a-z0-9-]*$/.test(z)}const _=e(()=>c.menus.value||[]);function D(){const z=window.__quantModules&&window.__quantModules.pinyin;if(!z)return[];const a=[];return(c.watchlist&&c.watchlist.value||[]).forEach(function(p){a.push({code:p.code,name:p.name})}),(c.aiHistory&&c.aiHistory.value||[]).forEach(function(p){p&&p.stock_code&&a.push({code:p.stock_code,name:p.stock_name||p.stock_code})}),a.push.apply(a,z.getExtraStocks()),z.buildStockIndex(a)}function q(z){const a=window.__quantModules&&window.__quantModules.pinyin;return a?a.searchStocksByQuery(z,D()).map(function(p){return{type:"stock",code:p.code,name:p.name,label:p.name,subLabel:p.code,icon:"trending-up"}}):[]}function u(){const z=[],a=window.__quantModules&&window.__quantModules.recent;a&&a.getRecentViewed().slice(0,5).forEach(function(n){z.push({type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"最近查看 · "+n.code,icon:"trending-up"})});const p=(c.watchlist&&c.watchlist.value||[]).slice(0,8).map(function(n){return{type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"我的自选 · "+n.code,icon:"trending-up"}});return z.concat(p)}const l=e(()=>{const z=i.value;if(!z)return b.mergeResults([],[],u());const a=b.searchMenus(z,_.value,c.subPageNames),p=b.searchCommands(z,S.value),n=P.value;return b.mergeResults(a,p,n)}),f=e(()=>l.value);function M(z){return f.value.flat[r.value]===z}function I(z){r.value=f.value.flat.indexOf(z)}function E(z){return(z.type||"")+":"+(z.code||z.menuKey||z.key||z.label)}let A=null;function R(){const z=i.value.trim();if(z.length<1){P.value=[];return}A&&clearTimeout(A),A=setTimeout(function(){const a=q(z);P.value=a,r.value=0,c.searchStocks(z,function(p){if(i.value.trim()!==z)return;const n=(p||[]).filter(function(N){return N&&N.code&&N.name}).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}),h={},ee=[];a.forEach(function(N){h[N.code]||(h[N.code]=!0,ee.push(N))}),n.forEach(function(N){h[N.code]||(h[N.code]=!0,ee.push(N))}),P.value=ee,r.value=0})},200)}function F(){r.value=b.moveIndex(r.value,f.value.flat.length,1)}function H(){r.value=b.moveIndex(r.value,f.value.flat.length,-1)}function B(){const z=f.value.flat[r.value];z&&G(z)}function G(z){c.commandPaletteVisible.value=!1,z.type==="menu"?c.navigateTo(z.menuKey,z.subPage):z.type==="stock"?c.showStockDetail(z.code,z.name):z.type==="command"&&X(z.key)}function X(z){if(z==="refresh"){const a=c.currentPage.value;a==="strategies"?c.loadDashboardData().catch(function(){}):a==="calendar"?c.refreshCalendarData().catch(function(){}):a==="ai"&&c.loadAiHistory().catch(function(){})}else z==="export"?c.exportCSV():z==="batch"?c.showBatchEvaluate.value=!0:z==="ai"?c.openAiFab():z==="sidebar"?c.toggleSidebar():z==="today"?c.navigateTo("strategies","overview"):z==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):z==="add-portfolio"?(c.currentPage.value="ai",c.currentSubPage.value="portfolio"):z==="open-system"?c.navigateTo("system","status"):z==="open-shortterm"?c.navigateTo("shortterm","overview"):z==="open-research"?c.navigateTo("research","overview"):z==="open-calendar"?c.navigateTo("calendar",""):z==="refresh-data-source"?c.navigateTo("system","datasource"):z==="open-watchlist"?c.navigateTo("ai","watchlist"):z==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):z==="open-focus"?c.navigateTo("ai","focus"):z==="open-portfolio"?c.navigateTo("ai","portfolio"):z==="open-backtest"?c.navigateTo("research","backtest"):z==="open-market-review"?c.navigateTo("shortterm","market-review"):z==="open-shortterm-sectors"?c.navigateTo("shortterm","sector"):z==="open-shortterm-intraday"?c.navigateTo("shortterm","intraday"):z==="open-status"?c.navigateTo("ops","status"):z==="open-health"?c.navigateTo("ops","health"):z==="open-schedule"?c.navigateTo("ops","schedule"):z==="open-guard"?c.navigateTo("ops","guard"):z==="open-usage"?c.navigateTo("ops","usage"):z==="open-datadict"?c.navigateTo("ops","datadict"):z==="open-notification"?c.navigateTo("system","notification"):z==="open-users"?c.navigateTo("system","user"):z==="open-autoeval"?c.navigateTo("system","autoeval"):z==="open-feature"?c.navigateTo("system","feature"):z==="open-config"?c.navigateTo("system","config"):z==="theme-dark"?c.changeTheme("dark-pro"):z==="theme-light"?c.changeTheme("gold"):z.indexOf("theme:")===0&&c.changeTheme(z.slice(6))}v(g,function(z){z&&(i.value="",P.value=[],r.value=0,t(function(){k.value&&k.value.focus&&k.value.focus()}))}),v(i,R);function V(z){z==="toggle-palette"?c.commandPaletteVisible.value=!c.commandPaletteVisible.value:z==="toggle-sidebar"?c.toggleSidebar():z==="open-ai"?c.openAiFab():z==="refresh"?X("refresh"):z==="open-today"?X("today"):z==="batch-eval"?X("batch"):z==="add-portfolio"&&X("add-portfolio")}function Q(z){if(!b.createDefaultShortcuts||!b.createShortcutRegistry)return;const p=b.createDefaultShortcuts().resolve({key:z.key,ctrlKey:z.ctrlKey,altKey:z.altKey,shiftKey:z.shiftKey,metaKey:z.metaKey});p&&(z.preventDefault(),V(p))}return d(function(){document.addEventListener("keydown",Q)}),{visible:g,query:i,results:f,inputEl:k,sanitizeHtml:c.sanitizeHtml,isIconName:C,onDown:F,onUp:H,onEnter:B,execute:G,isActive:M,setActive:I,itemKey:E,onGlobalKeydown:Q}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
        <el-dialog v-model="showChangePassword" title="修改密码" width="440px" :close-on-click-modal="false">
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShortcutHelpDialog={name:"qc-shortcut-help-dialog",template:`
        <el-dialog v-model="shortcutHelpVisible" title="⌨ 键盘快捷键" width="440px">
            <div class="shortcut-list">
                <div class="shortcut-row" v-for="s in shortcutHelpItems" :key="s.keys">
                    <span class="shortcut-keys"><kbd>{{ s.keys }}</kbd></span>
                    <span class="shortcut-desc">{{ s.desc }}</span>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.TourDialog={name:"qc-tour-dialog",template:`
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MenuConfigDialog={name:"qc-menu-config-dialog",template:`
        <el-dialog v-model="menuConfigDialog" :title="(allGroups[editingGroup]?.name || '') + ' — 菜单访问授权'" width="640px">
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
                        <span :style="{transform: subPageSectionExpanded[menu.key] ? 'rotate(180deg)' : '', transition: 'transform 0.2s', fontSize: 'var(--qc-font-size-xs)', flexShrink: 0}">▼</span>
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddGroupDialog={name:"qc-add-group-dialog",template:`
        <el-dialog v-model="showAddGroup" title="+ 新建分组" width="440px">
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddUserDialog={name:"qc-add-user-dialog",template:`
        <el-dialog v-model="showAddUser" :title="editingUser ? '编辑用户' : '添加用户'" width="440px">
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
        <el-dialog v-model="showBatchEvaluate" title="批量AI评估" width="520px">
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
                        <div :style="{width:(batchTotal>0?batchCompleted/batchTotal*100:0)+'%',height:'100%',background:'var(--bar-fill)',borderRadius:'3px',transition:'width 0.4s ease'}"></div>
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
    `,setup(){const e=s("qcState");if(!e)return{};const v=window.QuantFormMemory;function t(){const c=e.currentUser;return c&&c.value&&c.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,c=>{if(c&&v){const i=v.loadForm("batch-evaluate",t(),1);i&&i.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=i.batchStocks)}});function o(){return v&&v.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let b=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,c=>{c?(d.value=0,b=setInterval(()=>{d.value++},1e3)):b&&(clearInterval(b),b=null)}),{...e,batchElapsed:d,onBatchEvaluate:o}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,computed:e,onMounted:v}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
      <el-dialog :model-value="visible" title="自选分组管理" width="520px" @update:model-value="v => (visible = v)" @open="load">
        <div v-if="loading" class="qc-glossary-loading">加载中…</div>
        <div v-else class="qc-wg-list">
          <div v-if="groups.length === 0" class="qc-wg-empty">暂无分组，点击下方新建</div>
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
    `,setup(){const o=s(!1),d=s(!1),b=s(!1),c=s([]),i=s({}),g=s(""),r=s(""),P=s("");function k(E,A){A=A||{},A.headers=Object.assign({},A.headers||{});const R=localStorage.getItem("quant_token")||"";return R&&(A.headers.Authorization="Bearer "+R),fetch(E,A)}async function S(){d.value=!0;try{const A=await(await k("/api/watchlist/groups")).json();A&&A.success&&(c.value=A.groups||[],i.value=A.mapping||{})}catch{}d.value=!1}function C(E){return Object.values(i.value).filter(function(A){return A===E}).length}function _(E){const A=c.value[E],R=t.indexOf(A.color);A.color=t[(R+1)%t.length]}function D(E){if(E<=0)return;const A=c.value.slice(),R=A[E-1];A[E-1]=A[E],A[E]=R,c.value=A}function q(E){if(E>=c.value.length-1)return;const A=c.value.slice(),R=A[E+1];A[E+1]=A[E],A[E]=R,c.value=A}function u(){const E=g.value.trim();E&&(c.value.some(function(A){return A.name===E})||(c.value.push({name:E,color:t[c.value.length%t.length],sort_order:c.value.length,expanded:!0}),g.value=""))}function l(E){r.value=E,P.value=E}function f(E){const A=P.value.trim();if(!A||A===E||c.value.some(function(F){return F.name===A})){r.value="";return}c.value=c.value.map(function(F){return F.name===E?Object.assign({},F,{name:A}):F});const R={};Object.keys(i.value).forEach(function(F){R[F]=i.value[F]===E?A:i.value[F]}),i.value=R,r.value=""}function M(E){c.value=c.value.filter(function(R){return R.name!==E});const A={};Object.keys(i.value).forEach(function(R){A[R]=i.value[R]===E?"默认分组":i.value[R]}),i.value=A}async function I(){b.value=!0;try{await k("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:c.value,mapping:i.value})}),ElementPlus.ElMessage.success("分组已保存"),o.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}b.value=!1}return v(function(){window.addEventListener("qc:show-watch-groups",function(){o.value=!0,S()})}),{visible:o,loading:d,saving:b,groups:c,mapping:i,newName:g,renaming:r,renameVal:P,load:S,countIn:C,cycleColor:_,moveUp:D,moveDown:q,addGroup:u,startRename:l,commitRename:f,remove:M,save:I}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="indexDetailVisible" title="" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <div v-if="indexDetail">
                <!-- 头部信息 -->
                <div class="detail-header">
                    <div>
                        <h2 class="text-xl-title">{{ indexDetail.name }} <span class="text-md-muted">{{ indexDetail.code }}</span></h2>
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SetupWizardDialog={name:"qc-setup-wizard-dialog",template:`
        <el-dialog v-model="showSetupWizard" title="系统初始化设置" width="520px" :close-on-click-modal="false" :show-close="false">
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MerrillDetailDialog={name:"qc-merrill-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
                        <h2 class="merrill-title">{{ merrillDetailData.name }}</h2>
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s,computed:e,ref:v,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
                            <h2 class="text-xl-title">{{ stockDetail.stock }} <span class="text-md-muted">{{ stockDetail.name }}</span></h2>
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
                    <div class="page-section-title">{{ t('detail.sectionQuote') }}</div>
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
                                        <div :style="{width:score+'%',height:'100%',background:score>=70?'var(--bar-fill-ok)':score>=50?'var(--bar-fill-warn)':'var(--bar-fill-bad)',borderRadius:'6px',transition:'width 0.5s'}"></div>
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
    `,setup(){const o=s("qcState");if(!o)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},b=e(()=>d[o.aiEvalStage.value]||""),c=e(()=>{const B=o.aiResult&&o.aiResult.value&&o.aiResult.value.result&&o.aiResult.value.result.level;return B?B==="强烈推荐"||B==="推荐"?"var(--success-text)":B==="谨慎推荐"?"var(--warning-text)":B==="中性"||B==="观望"?"var(--text-secondary)":B==="评估失败"||B==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function i(B){const G=document.createElement("textarea");G.value=B,G.style.position="fixed",G.style.opacity="0",document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G)}async function g(){const B=o.aiResult&&o.aiResult.value;if(!B||!B.result)return;const G=B.result.dimensions||{},X=Object.entries(G).map(([Q,z])=>`${Q} ${Math.round(z)}分`).join(`
`),V=`【AI 智能评估】${B.result.level||""} ${B.result.total_score!=null?B.result.total_score:"—"}分
模型：${B.model_used||B.result.provider||"—"}

${B.result.detailed_report||""}

九维度评分：
${X||"无"}`;try{await navigator.clipboard.writeText(V),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{i(V),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const r=v(!1),P=v(!1),k=v(null),S=v([]),C={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function _(B){return C[B]||"factor-sem-none"}async function D(){const B=o.stockDetail.value&&o.stockDetail.value.stock;if(B){r.value=!0,P.value=!1,S.value=[],k.value=null;try{const G=o.selectedDate.value?`?date=${o.selectedDate.value}`:"",X=await fetch(`/api/calendar/stock/${B}/factors${G}`).then(a=>a.json()),V=X&&Array.isArray(X.factors)?X.factors:[],Q=[],z={};V.forEach(a=>{z[a.category]||(z[a.category]={category:a.category,items:[]},Q.push(z[a.category])),z[a.category].items.push(a)}),S.value=Q,k.value=X&&X.summary||null}catch{P.value=!0}finally{r.value=!1}}}t(o.stockDetailTab,B=>{B==="factor"&&o.stockDetail.value&&o.stockDetailVisible.value&&(D(),u())});const q=v(null);async function u(){try{const B=await fetch("/api/market/factor-ic").then(G=>G.json());q.value=B&&B.success&&B.data?B.data:{}}catch{q.value={}}}function l(B){if(!B||!B.n5)return"—";const G=B.n5.icir!=null?"ICIR "+B.n5.icir:"ICIR —";return B.n5.grade+" ("+G+")"}const f=v(!1),M=v(!1),I=v([]),E=v([]);function A(B){if(B==null)return"—";const G=Number(B);return Number.isNaN(G)?"—":Math.abs(G)>=1e8?(G/1e8).toFixed(2)+"亿":Math.abs(G)>=1e4?(G/1e4).toFixed(1)+"万":String(G)}async function R(){const B=o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock;if(B){f.value=!0,M.value=!1;try{const G=await fetch("/api/market/performance/"+encodeURIComponent(B)).then(X=>X.json());G&&G.success?(I.value=G.forecast||[],E.value=G.express||[]):M.value=!0}catch{M.value=!0}finally{f.value=!1}}}t(o.stockDetailTab,B=>{B==="performance"&&R()});const F=v(null);async function H(){const B=o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock;if(!B){F.value=null;return}try{const G=await fetch("/api/focus/stock/"+encodeURIComponent(B)+"/pool").then(X=>X.json());F.value=G&&G.success&&G.data?G.data:null}catch{F.value=null}}return t(()=>o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock,B=>{B&&o.stockDetailVisible.value?H():F.value=null}),t(()=>o.stockDetailVisible.value,B=>{B?H():F.value=null}),{...o,aiStageText:b,levelRingColor:c,copyAiReport:g,factorLoading:r,factorError:P,factorSummary:k,factorGroups:S,factorSemClass:_,loadFactorPanel:D,factorIc:q,loadFactorIc:u,factorIcGrade:l,perfLoading:f,perfError:M,perfForecast:I,perfExpress:E,fmtY:A,loadPerformance:R,poolInfo:F,loadPoolInfo:H}}}})();(function(){const{computed:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(v){const t=e("qcState");if(!t)return{};const o=s(()=>v.type==="history"?t.selectedHistoryIds.value.includes(v.item.id):t.selectedChatIds.value.includes(v.item.id)),d=s(()=>{const C=t.watchlistCodes.value.has(v.item.stock_code);return{icon:"star",isWatched:C,label:C?"取消收藏":"加入收藏"}}),b=s(()=>v.type==="history"?"bot":"message-circle"),c=s(()=>{var C;return v.type==="history"?((C=v.item.result)==null?void 0:C.provider)||"":v.item.first_msg||""}),i=s(()=>{var C,_;return`${((_=(C=v.item.result)==null?void 0:C.dimensions)==null?void 0:_.length)||9}维度分析`}),g=s(()=>{var _,D;const C=v.type==="history"?v.item.evaluate_time:v.item.created_at||"";return C?v.timeFormat==="datetime"?v.type==="history"?`${C.split("T")[0]} ${(C.split("T")[1]||"").split(".")[0]}`:`${C.split("T")[0]} ${((_=C.split("T")[1])==null?void 0:_.substring(0,5))||""}`:v.type==="history"?(C.split("T")[1]||"").split(".")[0]||C:((D=C.split("T")[1])==null?void 0:D.substring(0,5))||"":""});function r(){v.type==="history"?t.toggleSelectHistory(v.item.id):t.toggleSelectChat(v.item.id)}function P(){v.type==="history"?t.viewAiResult(v.item):t.viewChatSession(v.item)}async function k(){try{await ElementPlus.ElMessageBox.confirm(v.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}v.type==="history"?t.deleteSingleHistory(v.item.id):t.deleteChatSession(v.item.id)}function S(C,_){t.toggleWatchlist(C,_)}return{isSelected:o,watchState:d,providerIcon:b,providerText:c,dimsText:i,timeText:g,toggleSelect:r,view:P,remove:k,toggleWatchlist:S,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:s,computed:e,onMounted:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const o=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},b={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},c=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],i={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},g=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function r(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(_=>_.json?_.json():_)}function P(){const k=new Date,S=C=>C<10?"0"+C:""+C;return k.getFullYear()+"-"+S(k.getMonth()+1)+"-"+S(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const k=t("qcState"),S=s(P()),C=s("after_close"),_=s({rows:[],actions:{},total:0,groups:{}}),D=s({sessions:{},total:0}),q=s(null),u=s(!1),l=s(""),f=s(!1),M=s([]),I=s(""),E=s(null),A={},R=s({});let F=0;const H=s(null),B=e(function(){const T=_.value&&_.value.groups||{};return Object.keys(T).length?T:_.value&&_.value.rows&&_.value.rows.length?{全部:_.value.rows}:{}}),G=e(function(){const T=H.value;return!T||!T.date||T.date!==S.value?"":"已加载最近一次评估: "+T.date+" · "+(i[T.session]||T.session)}),X=e(function(){const T=_.value&&_.value.base_date;return T?T===S.value?"评分范围: "+T+" 收盘池 + 自选":"评分范围: "+T+" 收盘池(前一交易日算好) + 自选":""});function V(T){if(T==null)return"—";const W=Number(T);return W===Math.floor(W)?String(W):W.toFixed(1)}function Q(T){const W=_.value.total||0,ne=(_.value.actions||{})[T]||0;if(!W)return"0%";const le=ne/W*100;return le>0&&le<4?"4%":le.toFixed(1)+"%"}function z(T){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[T]||"info"}function a(T){const W=q.value&&q.value.overall&&q.value.overall[T]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"info":W.rate>=60?"success":W.rate>=40?"warning":"danger"}function p(T){const W=q.value&&q.value.overall&&q.value.overall[T]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"样本不足":W.rate.toFixed(1)+"% ("+W.total+" 样本)"}function n(){return i[C.value]||C.value}function h(T){const W=M.value.indexOf(T);W>=0?M.value.splice(W,1):M.value.push(T)}function ee(T){if(!T||!T.raw_json)return{};if(A[T.stock_code+T.session+T.trade_date])return A[T.stock_code+T.session+T.trade_date];let W={};try{W=JSON.parse(T.raw_json)||{}}catch{W={}}return A[T.stock_code+T.session+T.trade_date]=W,W}async function N(){try{const T=await r("/api/focus/latest"),W=T&&T.success&&T.data;W&&W.date&&(H.value=W,S.value=W.date,W.session&&(C.value=W.session))}catch(T){console.warn("[focus] 最近一次评估解析失败:",T)}}async function x(){f.value=!0;try{const T=await r("/api/focus/results?date="+S.value+"&session="+C.value);_.value=T&&T.success&&T.data||{rows:[],actions:{},total:0,groups:{}},m((_.value.rows||[]).map(function(W){return W.stock_code}))}catch(T){console.warn("[focus] 结果加载失败:",T),_.value={rows:[],actions:{},total:0,groups:{}}}finally{f.value=!1}}async function m(T){const W=R.value||{},ne=(T||[]).filter(function($){return $&&!W[$]});if(!ne.length)return;const le=++F,Se=ne.map(function($){return r("/api/focus/stock/"+encodeURIComponent($)+"/pool?date="+S.value).then(function(re){re&&re.success&&re.data?W[$]=re.data:W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Se)}catch{}le===F&&(R.value=Object.assign({},W))}function L(T){const W=k&&k.showStockDetail;if(typeof W=="function"){W(T);return}const le=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;le&&le.info("请从其他页面打开股票详情: "+T)}async function w(){try{const T=await r("/api/focus/history?date="+S.value);D.value=T&&T.success&&T.data||{sessions:{},total:0}}catch(T){console.warn("[focus] 历史加载失败:",T),D.value={sessions:{},total:0}}}async function j(){u.value=!0;try{const T=await r("/api/ai/track");T&&T.success&&T.data?(q.value=T.data,l.value=(T.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):q.value=null}catch(T){console.warn("[focus] 效果块加载失败:",T),q.value=null}finally{u.value=!1}}async function ae(){const T=(I.value||"").trim();if(T){E.value=null;try{const W=await r("/api/focus/stock/"+encodeURIComponent(T));E.value=W&&W.success&&W.data&&W.data.rows||[]}catch(W){console.warn("[focus] 单股历史加载失败:",W),E.value=[]}}}async function Z(){await x(),await w(),await j()}return v(async function(){await N(),await Z()}),{curDate:S,session:C,results:_,history:D,track:q,trackLoading:u,trackNote:l,detailSplitEnabled:k.detailSplitEnabled,stockDetail:k.stockDetail,loading:f,expanded:M,stockCode:I,stockHistory:E,SESSIONS:c,ACTION_ORDER:o,TRACK_WINDOWS:g,ACTION_DOT:d,TIER_DOT:b,SESSION_LABELS:i,displayGroups:B,latestNote:G,baseNote:X,sessionLabel:n,fmtScore:V,tagType:z,rateTagType:a,fmtRate:p,toggle:h,detailOf:ee,loadResults:x,loadHistory:w,loadTrack:j,loadStockHistory:ae,loadAll:Z,poolStatus:R,openStockDetail:L,actionPct:Q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(s){const{ref:e,nextTick:v}=Vue,{currentView:t,statusFilter:o,dashboardData:d,loadHealthMetrics:b,getLoadDashboardData:c,getLastRefreshTime:i,getFetchPoolSignals:g}=s,r=e(!1),P=e(""),k=new Map,S=e([]),C=e(""),_=e(""),D=e([]),q=e(""),u=window.__quantModules.core||{},l=typeof u.createTtlCache=="function"?u.createTtlCache(15e3):null;let f=0;function M(){const G=Date.now();G-f<5e3||(f=G,ElementPlus.ElMessage.success("有新数据，已更新"))}function I(G,X,V,Q){!l||!X||typeof u.silentRefresh!="function"||u.silentRefresh({cache:l,key:X,fetchFn:async()=>{const z=await fetch(G);if(!z.ok)throw new Error("HTTP "+z.status);const a=await z.json();return V?V(a):a},ttl:l.defaultTtl,apply:Q,onChanged:M,onError:()=>{}})}const E=new Set;async function A(){var G;try{const V=await(await fetch("/api/dates")).json();S.value=((G=V.data)==null?void 0:G.dates)||V.dates||[],S.value.length>0&&(C.value=S.value[S.value.length-1]),_.value=new Date().toLocaleTimeString()}catch(X){console.error(X)}}async function R(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),_.value="刷新中...",k.clear(),await A(),await H(),_.value=new Date().toLocaleTimeString()}catch(G){console.error("数据刷新失败",G)}}function F(){if(!C.value)return;const X="/api/view/"+(t.value||"day")+"/"+C.value+"?status="+(o.value||"all")+"&format=csv";window.open(X,"_blank")}async function H(){if(!C.value)return;const G=`${t.value}_${C.value}`;if(E.has(G))return;E.add(G);const X=`/api/view/${t.value}/${C.value}?status=all`,V=l&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET",`/api/view/${t.value}/${C.value}`,{status:"all"}):null,Q=(p,n)=>{D.value=p,q.value=n||"",k.set(G,{stocks:p,note:n||""})},z=p=>{Q(p&&p.stocks||[],p&&p.note||"")};if(k.has(G)){z(k.get(G)),I(X,V,p=>p,z),E.delete(G);return}const a=V&&l?l.get(V):void 0;if(a!==void 0){z(a),I(X,V,p=>p,z),E.delete(G);return}r.value=!0,P.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const n=await(await fetch(X)).json(),h=n.stocks||[];Q(h,n.note||""),l&&V&&l.set(V,{stocks:h,note:n.note||""})}catch{try{const h=await(await fetch(`/api/calendar/${C.value}/consensus`)).json();D.value=(h.consensus||[]).map(ee=>({...ee,code:ee.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{r.value=!1}g(),E.delete(G)}async function B(){const G=l&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const X=l.get(G);if(X!==void 0){d.value=X,b().catch(()=>{}),I("/api/dashboard",G,V=>V.data||V,V=>{d.value=V,i().value=Date.now()});return}}await c()(),b().catch(()=>{}),l&&l.set(G,d.value)}return{loading:r,loadingView:P,viewCache:k,dates:S,selectedDate:C,lastLoadTime:_,consensus:D,viewNote:q,loadDates:A,refreshCalendarData:R,exportCSV:F,loadConsensusData:H,loadDashboardCached:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(s){const{nextTick:e}=Vue,{currentKlinePeriod:v,loadIndexKline:t,rememberDialogTrigger:o,menus:d,currentPage:b,currentSubPage:c,stockDetail:i,selectedDate:g}=s,r=ref({indices:[],market_sentiment:null});let P=null;const k=ref(!1),S=ref(null),C=ref(null),_=ref(!1);function D(){window.__quantModules.charts.disposeKline("stockKlineChart")}const q=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{q.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const u=ref(!1),l=ref(null),f=ref(!1),M=ref(0),I=ref(0);async function E(){try{const n=await(await fetch("/api/market/overview")).json();r.value=n,A(n)}catch(p){console.error("获取市场行情失败:",p)}}function A(p){P&&clearInterval(P),p&&p.in_trading_hours&&(P=setInterval(E,6e5))}function R(p){o(),S.value=p,C.value=null,v.value="daily",F(p.code),window.__quantModules.charts.disposeKline("indexKlineChart"),k.value=!0,setTimeout(async()=>{await t("daily")},500)}async function F(p){try{const h=await(await fetch("/api/ai/index-eval/"+p)).json();h.success&&h.data&&(C.value=h.data)}catch(n){console.warn("[getIndexAiScore] cache check failed:",n)}}async function H(){if(S.value){_.value=!0;try{const n=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:S.value.code,index_name:S.value.name,current_price:S.value.close,pct_chg:S.value.pct_chg})})).json();n.success?C.value=n.data:ElementPlus.ElMessage.error(n.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{_.value=!1}}}function B(p){window.__quantModules.charts.zoomKline("stockKlineChart",p)}function G(){f.value=!0,setTimeout(()=>{f.value=!1},600)}function X(p,n){if(p===n){G();return}const h=800,ee=performance.now(),N=n-p;u.value=!0,l.value={value:N,dir:N>0?"up":"down"},f.value=!0,setTimeout(()=>{f.value=!1},600),setTimeout(()=>{l.value=null},2300);function x(m){const L=m-ee,w=Math.min(L/h,1),j=1-Math.pow(1-w,3),ae=Math.round(p+N*j);i.value&&i.value.score_data&&(i.value.score_data.score=ae),w<1?requestAnimationFrame(x):(i.value&&i.value.score_data&&(i.value.score_data.score=n),u.value=!1)}requestAnimationFrame(x)}function V(){if(!i.value||!i.value.score_data)return;const p=i.value.score_data.score;if(p==null)return;const n=600,h=performance.now();f.value=!0,setTimeout(()=>{f.value=!1},600);function ee(N){const x=Math.min((N-h)/n,1),m=1-Math.pow(1-x,3),L=Math.round(p*m);i.value&&i.value.score_data&&(i.value.score_data.score=L),x<1?requestAnimationFrame(ee):i.value&&i.value.score_data&&(i.value.score_data.score=p)}requestAnimationFrame(ee)}async function Q(){var h;if(!i.value||!i.value.stock)return;const p=i.value.stock,n=(h=i.value.score_data)==null?void 0:h.score;try{const ee=new Date().toISOString().split("T")[0],N=g.value||ee,m=await(await fetch(`/api/calendar/stock/${encodeURIComponent(p)}/score?date=${N}`)).json();if(m.success&&m.score_data){const L=m.score_data.score;i.value&&(i.value.score_data=m.score_data),n!=null&&L!==n?X(n,L):G()}else G()}catch(ee){console.warn("[refreshStockScore] failed:",ee)}}function z(p){q.value&&(M.value=p.touches[0].clientX,I.value=p.touches[0].clientY)}function a(p){if(!q.value)return;const n=M.value-p.changedTouches[0].clientX,h=I.value-p.changedTouches[0].clientY;if(Math.abs(n)>Math.abs(h)&&Math.abs(n)>80){const ee=d.value.map(function(x){return x.key}),N=ee.indexOf(b.value);if(n>0&&N<ee.length-1){const x=ee[N+1],m=window.__quantGoPage;m?m(x,""):(b.value=x,c.value="")}else if(n<0&&N>0){const x=ee[N-1],m=window.__quantGoPage;m?m(x,""):(b.value=x,c.value="")}}}return{marketData:r,marketRefreshTimer:P,fetchMarketData:E,indexDetailVisible:k,indexDetail:S,indexAiResult:C,indexAiLoading:_,showIndexDetail:R,loadCachedIndexEval:F,doIndexAiEvaluate:H,disposeStockKline:D,isMobile:q,zoomKlineRange:B,scoreAnimating:u,scoreDelta:l,scorePulse:f,triggerScorePulse:G,animateScoreChange:X,animateScoreEntrance:V,refreshStockScore:Q,touchStartX:M,touchStartY:I,onTouchStart:z,onTouchEnd:a}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(s){const{navigateTo:e,currentPage:v,currentSubPage:t}=s,o=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),b=ref("");async function c(){if(!o.value.webhook_url){b.value="请先输入Webhook地址";return}d.value="testing",b.value="";try{const T=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:o.value.webhook_url})})).json();T.success||T.status==="ok"?(b.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(b.value=T.message||"测试失败",ElementPlus.ElMessage.error(b.value))}catch{b.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const i=Vue.ref(!1);async function g(){i.value=!0;try{const T=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}const r=ref(!1);function P(){e("ai","chat_history"),r.value=!0,Vue.nextTick(()=>{const Z=document.querySelector('input[placeholder*="输入问题"]');Z&&Z.focus()})}const k=ref([]),S=ref({});async function C(){try{const T=await(await fetch("/api/ai/recommend-strategies")).json();T.success&&(k.value=T.recommendations||[])}catch(Z){console.warn("[loadStrategyRecommendations] failed:",Z)}}async function _(){try{const T=await(await fetch("/api/ai/usage-stats")).json();T.success&&(S.value=T)}catch(Z){console.warn("loadAiUsage failed:",Z)}}const D=ref({}),q=ref([]),u=ref(7);async function l(){try{const T=await(await fetch("/api/system/monitor")).json();T.success&&(D.value=T)}catch(Z){console.warn("loadSysMonitor failed:",Z)}}const f=ref({});async function M(){try{const T=await(await fetch("/api/system/health-detail")).json();T.success&&(f.value=T)}catch(Z){console.warn("loadHealthDetail failed:",Z)}}async function I(){try{const T=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();T.success&&(q.value=T.rank||[])}catch(Z){console.warn("loadAnalytics failed:",Z)}}const E=ref(!1);async function A(){if(!E.value){E.value=!0;try{const T=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return T&&T.success?T.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${T.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${T.date}）`):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"生成复盘失败"),M(),T}catch(Z){ElementPlus.ElMessage.error("生成复盘失败: "+(Z.message||""))}finally{E.value=!1}}}const R=ref(null),F=ref(!1);async function H(){try{const T=await(await fetch("/api/ai/fact-check/latest")).json();R.value=T&&T.success&&T.data||null}catch(Z){console.warn("loadFactCheck failed:",Z)}}async function B(){if(!F.value){F.value=!0;try{const T=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return T&&T.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${T.data.pass_rate!=null?T.data.pass_rate+"%":"--"} (${T.data.checked} 个数字)`),H()):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"事实护栏抽查失败"),T}catch(Z){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Z.message||""))}finally{F.value=!1}}}const G=ref([]),X=ref(!1);async function V(){try{const T=await(await fetch("/api/backup/list")).json();T.success&&(G.value=T.backups||[])}catch(Z){console.error("加载备份列表失败",Z)}}async function Q(){X.value=!0;try{const T=await(await fetch("/api/backup/create",{method:"POST"})).json();T.success?(ElementPlus.ElMessage.success(T.message||"备份成功"),V()):ElementPlus.ElMessage.error(T.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{X.value=!1}}const z=ref(""),a=ref("");async function p(Z){z.value=Z,a.value="";try{const T=window.__quantModules&&window.__quantModules.core||{},W=typeof T.authHeaders=="function"?T.authHeaders():{},ne=await fetch("/api/reports/export?format="+encodeURIComponent(Z),{headers:W});if(!ne.ok)throw new Error("HTTP "+ne.status);const le=await ne.blob(),Se=URL.createObjectURL(le),$=document.createElement("a");$.href=Se;const re=new Date().toISOString().slice(0,10);$.download="report_"+re+"."+Z,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(Se),a.value="报表已导出 ("+Z.toUpperCase()+")"}catch(T){a.value="报表导出失败: "+(T.message||T)}finally{z.value=""}}async function n(Z){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Z} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(T){console.warn("[restoreBackup] confirm cancelled:",T);return}try{const W=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(W.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const h=ref(!1),ee=ref(0),N=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function x(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{ee.value=0,h.value=!0},800)}function m(){h.value=!1,localStorage.setItem("quant_tour_done","1")}function L(){h.value=!1,localStorage.setItem("quant_tour_done","1")}const w=ref(""),j=ref(!1);async function ae(){if(!w.value||!w.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}j.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:w.value.trim(),page:v.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(w.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{j.value=!1}}return{feishuConfig:o,feishuTestStatus:d,feishuTestMessage:b,feishuSaving:i,testFeishuWebhook:c,saveFeishuConfig:g,aiFabHidden:r,openAiFab:P,strategyRecommendations:k,aiUsage:S,loadStrategyRecommendations:C,loadAiUsage:_,sysMonitor:D,analyticsRank:q,analyticsDays:u,loadSysMonitor:l,loadAnalytics:I,healthDetail:f,loadHealthDetail:M,reviewTriggering:E,triggerMarketReview:A,factCheck:R,factCheckRunning:F,loadFactCheck:H,triggerFactCheck:B,backups:G,backupCreating:X,loadBackups:V,createBackup:Q,restoreBackup:n,reportExporting:z,reportExportMsg:a,exportReport:p,tourVisible:h,tourStep:ee,tourSteps:N,maybeShowTour:x,skipTour:m,finishTour:L,feedbackText:w,feedbackSubmitting:j,submitFeedback:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(s){const{computed:e}=Vue,{currentView:v,selectedDate:t,dates:o,loadConsensusData:d,hapticFeedback:b}=s,c=e(()=>({day:"天",week:"周",month:"月",year:"年"})[v.value]||"天"),i=e(()=>({day:"date",week:"week",month:"month",year:"year"})[v.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[v.value]||"YYYY-MM-DD"),r=e(()=>!t.value||!o.value||o.value.length===0?!1:t.value>o.value[0]),P=e(()=>!t.value||!o.value||o.value.length===0?!1:t.value<o.value[o.value.length-1]);function k(D){b("light"),v.value=D;let q=t.value||o.value[o.value.length-1];if(D==="year"){const u=q.substring(0,4),l=o.value.find(f=>f.startsWith(u));t.value=l||q}else if(D==="month"){const u=q.substring(0,7),l=o.value.find(f=>f.startsWith(u));t.value=l||q}setTimeout(d,50)}function S(D){b("light");const q=t.value,u=o.value,l=u.indexOf(q);if(l<0)return;let f=1;v.value==="week"&&(f=5),v.value==="month"&&(f=22),v.value==="year"&&(f=250);const M=l+D*f;if(M>=0&&M<u.length){const I=u[M];if(v.value==="month"){const E=I.substring(0,7),A=u.find(R=>R.startsWith(E));t.value=A||I}else if(v.value==="year"){const E=I.substring(0,4),A=u.find(R=>R.startsWith(E));t.value=A||I}else t.value=I;d()}}function C(D){if(!o.value||o.value.length===0)return!1;const q=D.getFullYear(),u=String(D.getMonth()+1).padStart(2,"0"),l=String(D.getDate()).padStart(2,"0"),f=`${q}-${u}-${l}`;return!o.value.includes(f)}function _(D){D&&D.length>10&&(t.value=D.substring(0,10)),d()}return{viewUnit:c,datePickerType:i,dateFormat:g,canNavPrev:r,canNavNext:P,switchView:k,navigateDate:S,disabledDate:C,onDateChange:_}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(s){const{menus:e,subPageNames:v,navigateTo:t,currentPage:o,currentSubPage:d,currentView:b,navigateDate:c,switchView:i,getLoadDashboardData:g,refreshCalendarData:r,getLoadAiHistory:P,exportCSV:k,getShowBatchEvaluate:S,openAiFab:C,toggleSidebar:_,showStockDetail:D,getSelectedDate:q,markExternalStock:u}=s,l=ref("");async function f(V,Q){if(!V||V.trim().length<1){Q([]);return}const z=window.QuantCommandPanel;let a=[];z&&e.value&&(a=z.buildSearchSuggestions(V,e.value,v,z.DEFAULT_COMMANDS));const p=window.__quantModules&&window.__quantModules.pinyin;p&&p.searchCoreStocks(V).forEach(function(n){a.push({value:n.code+" "+n.name,type:"stock",code:n.code,name:n.name,label:n.name,subLabel:n.code,icon:"trending-up",iconName:"trending-up"})});try{const h=await(await fetch("/api/search?q="+encodeURIComponent(V))).json();if(h.success&&h.results){const ee=h.results.map(function(x){return{value:x.code+" "+x.name,type:"stock",code:x.code,name:x.name,label:x.name,subLabel:x.code,icon:"trending-up",iconName:"trending-up"}}),N=[];(h.groups||[]).forEach(function(x){(x.items||[]).forEach(function(m){m.type==="sector"?N.push({value:m.name+" · "+m.subLabel,type:"sector",name:m.name,label:m.name,subLabel:"板块",icon:"layers",iconName:"layers"}):m.type==="strategy"?N.push({value:m.name+" · 策略",type:"strategy",id:m.id,name:m.name,label:m.name,subLabel:"策略",icon:"target",iconName:"target"}):m.type==="menu"&&N.push({value:m.name,type:"menu",menuKey:m.menuKey,name:m.name,label:m.name,subLabel:m.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),Q(a.concat(ee,N))}else Q(a)}catch(n){console.warn("[searchStocks] fetch failed:",n),Q(a)}}function M(V){return V?V.type==="menu"?{action:"menu",menuKey:V.menuKey,subPage:V.subPage}:V.type==="command"?{action:"command",key:V.key}:V.type==="sector"?{action:"sector",name:V.name}:V.type==="strategy"?{action:"strategy",id:V.id,name:V.name}:V.type==="stock"||V.code&&V.name?{action:"stock",code:V.code,name:V.name}:null:null}function I(V){l.value="";const Q=window.QuantCommandPanel,z=Q?Q.dispatchSearchSelection(V):M(V);if(z){if(z.action==="menu"){t(z.menuKey,z.subPage);return}if(z.action==="command"){R(z.key);return}if(z.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(z.name);return}if(z.action==="strategy"){t("research","overview");return}if(z.action==="stock"){(o.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof u=="function"&&u(z.code),A(z.code,z.name);return}}}let E=null;function A(V,Q){E&&(clearInterval(E),E=null);const z=function(){typeof D=="function"&&D(V,Q)},a=q?q():null;if(a&&a.value){z();return}const p=Date.now();E=setInterval(function(){((q?q().value:!0)||Date.now()-p>4e3)&&(clearInterval(E),E=null,z())},60)}function R(V){if(V==="refresh"){const Q=o.value;Q==="strategies"?g().catch(function(){}):Q==="calendar"?r().catch(function(){}):Q==="ai"&&P().catch(function(){})}else V==="export"?k():V==="batch"?S().value=!0:V==="ai"?C():V==="sidebar"?_():V==="open-eval-history"?t("ai","history"):V==="open-shortterm"&&t("shortterm","overview")}const F=ref(!1),H=ref(!1);function B(V){if(!V)return!1;const Q=V.tagName;return Q==="INPUT"||Q==="TEXTAREA"||Q==="SELECT"||V.isContentEditable}function G(V){if(B(V.target))return;const Q=V.key.toLowerCase();if(V.ctrlKey&&Q==="k"){V.preventDefault(),H.value=!0;return}if(V.ctrlKey&&Q==="/"){V.preventDefault(),F.value=!F.value;return}if(V.ctrlKey&&Q==="h"){V.preventDefault(),t("ai","history");return}if(V.ctrlKey&&V.shiftKey&&Q==="s"){V.preventDefault(),t("shortterm","overview");return}if(!(V.ctrlKey||V.metaKey||V.altKey)){if(Q>="1"&&Q<="5"){const z=parseInt(Q)-1,a=e.value[z];a&&t(a.key,a.subPages[0]||"");return}if(Q==="r"&&X(),(Q==="arrowleft"||Q==="arrowright"||Q==="arrowup"||Q==="arrowdown")&&o.value==="calendar")if(V.preventDefault(),Q==="arrowleft"||Q==="arrowright")c(Q==="arrowleft"?-1:1);else{const z=["day","week","month","year"].indexOf(b.value),a=["day","week","month","year"][(z+(Q==="arrowup"?-1:1)+4)%4];i(a)}}}function X(){const V=o.value;V==="strategies"?g().catch(()=>{}):V==="calendar"?r().catch(()=>{}):V==="ai"&&P().catch(()=>{})}return{searchQuery:l,searchStocks:f,onSearchSelect:I,runGlobalCommand:R,shortcutHelpVisible:F,commandPaletteVisible:H,isTypingTarget:B,handleGlobalKeydown:G,refreshCurrentPage:X}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(s){const{currentUser:e,loadUserConfig:v,loadDates:t,loadDashboardData:o,loadDashboardCached:d,loadHealthMetrics:b,loadConsensusData:c,applyTheme:i,maybeShowTour:g,loadAiVendors:r,loadGroupConfig:P,groupsConfig:k}=s,S=function(Q){const z=window.__quantModules&&window.__quantModules.themes;return z&&z.applyLegacyTheme?z.applyLegacyTheme(Q):i(Q)},C="qc_login_username";let _="";try{_=localStorage.getItem(C)||""}catch{_=""}const D=ref({username:_,password:""}),q=ref(!1),u=ref(!1),l=ref(!1),f=ref({oldPassword:"",newPassword:"",confirmPassword:""}),M=ref(!1),I=ref(!1),E=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),A=ref(1);async function R(){try{(await(await fetch("/api/setup/status")).json()).needed&&(E.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},A.value=1,I.value=!0)}catch(Q){console.warn("[checkSetupWizard] failed:",Q)}}async function F(){try{const Q={new_password:E.value.newPassword,ai_key:E.value.aiKey,ai_provider:E.value.aiProvider,ai_model:E.value.aiModel,ai_endpoint:E.value.aiEndpoint,tushare_token:E.value.tushareToken},a=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)})).json();a.success?(I.value=!1,ElementPlus.ElMessage.success("初始化完成"),await v()):ElementPlus.ElMessage.error(a.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function H(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(I.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function B(){if(!D.value.username||!D.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}q.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D.value)})).json();if(z.success){e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),S(z.user.theme||"gold");try{localStorage.setItem(C,D.value.username||"")}catch{}typeof P=="function"&&await P().catch(function(){}),typeof r=="function"&&r(),await v(),await t(),await Promise.all([d(),c(),b().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),z.data&&z.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),z.user.role==="admin"&&setTimeout(R,500)}else ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{q.value=!1}}async function G(){u.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();z.success?(e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),S(z.user.theme||"gold"),typeof P=="function"&&await P().catch(function(){}),await v(),await t(),await o(),b().catch(()=>{}),await c(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{u.value=!1}}function X(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{k&&(k.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function V(){if(!f.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!f.value.newPassword||f.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(f.value.newPassword!==f.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}M.value=!0;try{const Q=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:f.value.oldPassword,new_password:f.value.newPassword})}),z=await Q.json();Q.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,f.value={oldPassword:"",newPassword:"",confirmPassword:""},X()):ElementPlus.ElMessage.error(z.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{M.value=!1}}return{loginForm:D,logining:q,guestLogining:u,showChangePassword:l,changePasswordForm:f,changingPassword:M,showSetupWizard:I,setupForm:E,setupStep:A,checkSetupWizard:R,completeSetupWizard:F,resetSetupWizard:H,handleLogin:B,handleGuestLogin:G,handleLogout:X,doChangePassword:V}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(s){const{watch:e}=Vue;let v=null;const{strategyFilter:t,currentView:o,statusFilter:d,currentPage:b,currentSubPage:c,menus:i,currentUser:g,strategyFilterCounts:r,lazyTick:P,dates:k,selectedDate:S,consensus:C,loadConsensusData:_,fetchMerrillClock:D,fetchMarketData:q,loadWatchlist:u,loadAiHistory:l,preloadWatchlistKline:f,loadChatHistory:M,loadSystemStatus:I,checkTushareConnection:E,loadSysMonitor:A,loadAnalytics:R,loadHealthDetail:F,loadHealthMetrics:H,loadAiUsage:B,loadFactCheck:G,loadAutoEvaluateConfig:X,loadDatasourceConfig:V,loadFeishuConfig:Q,loadAiConfig:z,loadAiVendors:a,loadRateLimit:p,loadDataRefreshConfig:n,loadBackups:h,loadAllGroups:ee,loadUsers:N,stockDetailTab:x,stockDetailVisible:m,stockKlineLoaded:L,loadStockKline:w,currentKlinePeriod:j,showMerrillDetail:ae,indexDetailVisible:Z,restoreDialogFocus:T}=s;e(t,W=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(W.selected)),localStorage.setItem("quant_strategy_filter_mode",W.mode)},{deep:!0}),e([o,d],(W,ne)=>{W[0]!==ne[0]&&_()}),e([b,c],([W,ne])=>{var le;try{const $=!(W==="calendar"&&ne==="calendar")&&ne||"",re=$?"#"+W+"/"+$:"#"+W;window.location.hash!==re&&(window.location.hash=re)}catch{}if(ne&&localStorage.setItem("quant_last_subpage",ne),!ne&&i.value.find(Se=>Se.key===W)){const Se=i.value.find($=>$.key===W);Se&&Se.subPages.length>0&&(c.value=Se.subPages[0])}if(W==="shortterm"&&ne==="market-review"){const Se=window.__lazyLoaders&&window.__lazyLoaders.research;Se&&Se().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function($){$&&$.name&&!$.__quantRegistered&&(window.__quantApp.component($.name,$),$.__quantRegistered=!0)}),P&&P.value++}).catch(function($){console.warn("[lazy] research 组件补加载失败",$)})}W==="calendar"&&ne==="calendar"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!S.value&&(S.value=k.value[k.value.length-1]||""),setTimeout(_,50)),W==="calendar"&&ne==="pool"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!S.value&&(S.value=k.value[k.value.length-1]||""),setTimeout(_,50)),W==="strategies"&&(ne==="merrill"&&D(),ne==="market"&&q(),ne==="consensus"&&(!C.value||C.value.length===0)&&setTimeout(_,50)),W==="ai"&&(ne==="watchlist"&&(u(),l(),setTimeout(f,500)),ne==="history"&&l(),ne==="overview"&&(l(),u()),ne==="chat_history"&&M()),(W==="system"||W==="ops")&&((le=g.value)==null?void 0:le.role)==="admin"&&(ne==="status"&&(I(),E()),ne==="health"&&(F(),H()),ne==="schedule"&&F(),ne==="guard"&&G(),ne==="usage"&&(A(),R(),F(),H(),B(),G()),ne==="autoeval"&&(X(),a()),ne==="datasource"&&V(),ne==="feature"&&(Q(),z(),p(),n(),h()),ne==="user"&&(ee(),N())),(W==="system"||W==="ops")&&ne==="usage"?v||(v=setInterval(()=>{A(),R(),F(),H(),B()},3e4)):v&&(clearInterval(v),v=null)}),e(x,(W,ne)=>{W==="kline"&&ne&&ne!=="kline"&&m.value&&(L.value=!1,setTimeout(async()=>{!await w(j.value)&&m.value&&x.value==="kline"&&setTimeout(()=>w(j.value),800)},50))}),e(ae,W=>{W||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([m,Z],([W,ne])=>{!W&&!ne&&T()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(s){const{handleGlobalKeydown:e,applyTheme:v,menus:t,currentPage:o,currentSubPage:d,currentView:b,currentKlinePeriod:c,selectedDate:i,dates:g,loadDates:r,loadConsensusData:P,loadDashboardCached:k,appVersion:S,themes:C,fetchMarketData:_,fetchMerrillStages:D,fetchMerrillClock:q,loadAiConfig:u,loadAiVendors:l,loadAiCatalog:f,currentUser:M,loadUserConfig:I,loadAutoEvaluateConfig:E,loadGroupConfig:A,loadUsers:R,loadAllGroups:F,loadAiHistory:H}=s;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function B(N,x){const m={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(N==="calendar"&&m[x])return o.value="calendar",d.value="calendar",m[x]&&(b.value=m[x]),!0;if(N==="research"&&(x==="strategy-write"||x==="custom-write")){o.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",x==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const N=window.location.hash||"";if(!N||N==="#")return;const x=N.replace(/^#\/?/,"").split("/"),m=x[0],L=x[1]||"",w=t.value.find(function(j){return j.key===m});if(w&&!B(m,L)){if(!L)o.value=m,d.value=w.subPages[0]||"";else if(w.subPages.indexOf(L)>=0)o.value=m,d.value=L;else return;window.__lazyLoaders&&window.__lazyLoaders[m]&&window.__quantGoPage&&window.__quantGoPage(m,d.value).catch(function(){})}});const G=(N,x=3e3,m="")=>{const L=new Promise((w,j)=>setTimeout(()=>j(new Error("timeout")),x));return Promise.race([N,L]).catch(w=>{console.warn(`[init] ${m||"task"} failed:`,w.message)})},X=localStorage.getItem("quant_theme"),V=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const N=window.__quantModules.themes;let x=V.theme||"system",m=V.theme_hue!=null&&V.theme_hue!==""?V.theme_hue:null;const L=typeof N.migrateLegacyTheme=="function"?N.migrateLegacyTheme():null;m==null&&L&&(x=L.mode,m=L.hue),m==null&&(m=45),v(x,m)}else X&&v(X);await A().catch(function(){}),function(){var N=window.location.hash||"",x=!1;if(N&&N!=="#"){var m=N.replace(/^#\/?/,"").split("/"),L=m[0],w=m[1]||"",j=t.value.find(function(ne){return ne.key===L});j&&(B(L,w)||(o.value=L,w&&j.subPages.indexOf(w)>=0?d.value=w:w||(d.value=j.subPages[0]||"")),x=!0)}if(!x){var ae=localStorage.getItem("quant_last_page");ae&&t.value.some(function(ne){return ne.key===ae})?o.value=ae:V.default_view&&t.value.some(function(ne){return ne.key===V.default_view})&&(o.value=V.default_view);var Z=localStorage.getItem("quant_last_subpage");Z&&(d.value=Z)}var T=localStorage.getItem("quant_last_date");T&&(i.value=T);var W=localStorage.getItem("quant_last_view");W&&(b.value=W),window.__lazyLoaders&&window.__lazyLoaders[o.value]&&window.__quantGoPage&&window.__quantGoPage(o.value,d.value).catch(function(){})}(),fetch("/api/health").then(N=>N.json()).then(N=>{N.version&&(S.value=N.version)}).catch(()=>{});const Q=localStorage.getItem("quant_user"),z=localStorage.getItem("quant_token"),a=!!(Q&&z),p=Promise.all([Promise.resolve().then(()=>{C.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),G(_(),3e3,"marketData"),G(D(),2e3,"merrillStages")]).then(()=>{G(q(),3e3,"merrillClock")});if(u(),f(),a&&M.value&&l(),!a||!M.value){await p;return}let n=!0;try{n=(await fetch("/api/users/me")).ok}catch{n=!1}if(!n){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),M.value=null;return}if(M.value){const N=M.value.theme||"",x=window.__quantModules&&window.__quantModules.themes;let m=V.theme||"system",L=V.theme_hue!=null&&V.theme_hue!==""?V.theme_hue:null;if(L==null&&x&&typeof x.migrateLegacyTheme=="function"){const w=x.migrateLegacyTheme();if(w)m=w.mode,L=w.hue;else if(N&&x.LEGACY_MAP&&x.LEGACY_MAP[N]){const j=x.LEGACY_MAP[N];m=j[0],L=j[1]}}L==null&&(L=45),v(m,L)}if(window.__quantModules&&window.__quantModules.preferences){const x=await window.__quantModules.preferences.loadPreferences();var h=localStorage.getItem("quant_last_page");!h&&x.default_view&&t.value.some(function(m){return m.key===x.default_view})&&(o.value=x.default_view),x.theme&&v(x.theme,x.theme_hue!=null&&x.theme_hue!==""?x.theme_hue:null),c&&(x.chart_period==="weekly"||x.chart_period==="monthly")&&(c.value=x.chart_period)}await Promise.all([G(I(),2e3,"userConfig"),G(r(),2e3,"dates")]),E().catch(()=>{}),A().catch(()=>{});const ee=o.value==="strategies"?G(k(),2e3,"dashboard"):G(P(),2e3,"consensus");await Promise.all([ee,G(R(),2e3,"users"),G(H(),2e3,"aiHistory")]),F().catch(()=>{})}}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.shell={create:function(s){const{ref:e,computed:v,watch:t}=s,o=e(!1),d=window.__quantModules&&window.__quantModules.i18n||{},b=d.SUPPORTED_LOCALES||["zh-CN","en"],c=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",i=e(b.indexOf(c)!==-1?c:"zh-CN");typeof d.bindLocale=="function"&&d.bindLocale(i);const g=typeof d.t=="function"?d.t:function(a){return String(a)};function r(a){b.indexOf(a)!==-1&&(i.value=a,typeof d.setLocale=="function"&&d.setLocale(a),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",a))}function P(a,p){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(a,p):a==null?"":String(a)}function k(a){(a.key==="Enter"||a.key===" "||a.key==="Spacebar")&&(a.preventDefault(),a.currentTarget&&typeof a.currentTarget.click=="function"&&a.currentTarget.click())}let S=null;function C(){document.activeElement&&document.activeElement!==document.body&&(S=document.activeElement)}function _(){if(S&&S.isConnected)try{S.focus()}catch{}S=null}function D(){Vue.nextTick(()=>{const a=document.querySelector(".el-dialog-overlay .el-dialog");if(!a)return;const p=a.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');p&&typeof p.focus=="function"&&p.focus()})}const q=e(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{q.value=!0}),window.addEventListener("offline",()=>{q.value=!1})),window.addEventListener("beforeunload",a=>{if(o.value)return a.preventDefault(),a.returnValue="您有未保存的配置变更，确定要离开吗？",a.returnValue});function u(a="light"){typeof navigator<"u"&&navigator.vibrate&&(a==="light"?navigator.vibrate(10):a==="medium"?navigator.vibrate(20):a==="heavy"&&navigator.vibrate([10,30,10]))}const l=e(localStorage.getItem("sidebar_collapsed")==="1");function f(){l.value=!l.value,localStorage.setItem("sidebar_collapsed",l.value?"1":"0")}const M=e(null),I=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],E=v(()=>{var ee,N,x;const a=((ee=z.value)==null?void 0:ee.role)||"guest",p=((N=z.value)==null?void 0:N.group)||a,n=((x=M.value)==null?void 0:x[p])||null;return I.map(m=>{if(n&&n.visible_menus&&m.key in n.visible_menus&&!n.visible_menus[m.key])return null;const L={...m,name:g("nav."+m.key)||m.name};return n!=null&&n.visible_sub_pages&&(L.subPages=m.subPages.filter(w=>{const j=m.key+"."+w;return n.visible_sub_pages[j]!==!1})),m.key==="system"&&a==="guest"&&m.guestSubPages&&(L.subPages=m.guestSubPages),L}).filter(Boolean)});async function A(){try{if(!localStorage.getItem("quant_token"))return;const p=await fetch("/api/groups/my");if(p.ok){const n=await p.json();M.value={[n.group_id]:n.group}}}catch(a){console.warn("loadGroupConfig:",a)}}const R=e("strategies"),F=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},H=e(F.navMode);function B(a){const p=window.__quantModules&&window.__quantModules.navModeCore;H.value=p?p.normalizeNavMode(a):a==="tree"||a==="toptab"?a:"toptab",p&&p.writePrefs({navMode:H.value})}const G=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function X(a,p=""){u("light"),R.value=a,Q.value=p,localStorage.setItem("quant_last_subpage",p)}function V(){const a=E.value;if(!a||!a.length)return;if(!a.some(function(h){return h.key===R.value})){const h=a[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",h.key),R.value=h.key,Q.value=h.subPages&&h.subPages[0]||"";return}const n=a.find(function(h){return h.key===R.value});n&&n.subPages&&n.subPages.length&&!n.subPages.includes(Q.value)&&(Q.value=n.subPages[0])}const Q=e("overview"),z=e(null);return t(E,function(){V()}),function(){if(typeof localStorage>"u")return;const a=localStorage.getItem("quant_user"),p=localStorage.getItem("quant_token");if(a&&p)try{z.value=JSON.parse(a)}catch{}}(),{configChanged:o,locale:i,t:g,changeLanguage:r,sanitizeHtml:P,keyClick:k,rememberDialogTrigger:C,restoreDialogFocus:_,focusFirstInDialog:D,isOnline:q,hapticFeedback:u,sidebarCollapsed:l,toggleSidebar:f,groupsConfig:M,allMenuDefs:I,menus:E,loadGroupConfig:A,currentPage:R,currentSubPage:Q,navMode:H,setNavMode:B,shortcutHelpItems:G,navigateTo:X,ensureVisiblePage:V,currentUser:z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.workspace={create:function(s){const{ref:e,computed:v,watch:t,currentPage:o,currentSubPage:d,allMenuDefs:b,menus:c,navigateTo:i,ensureVisiblePage:g,currentUser:r}=s,P=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],k=e("multifactor"),S=e(null),C=e(1e5),_=e(!1),D=e(null);let q=null,u=null;async function l(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ye={initial_capital:C.value||1e5};S.value&&S.value.length===2&&(ye.start_date=S.value[0],ye.end_date=S.value[1]),_.value=!0,D.value=null;try{const Le=await fetch("/api/strategies/"+k.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye)});if(!Le.ok){const O=await Le.json().catch(()=>({}));throw new Error(O.detail||"回测失败")}const He=await Le.json(),y=He.result||{};if(!y.success)throw new Error(y.message||"回测失败");He.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),D.value={total_return_pct:((y.total_return??0)*100).toFixed(2),annual_return_pct:((y.annual_return??0)*100).toFixed(2),max_drawdown_pct:((y.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(y.sharpe_ratio??0).toFixed(2),win_rate:((y.win_rate??0)*100).toFixed(2),out_sample:y.outsample_total_return===void 0?"":((y.outsample_total_return??0)*100).toFixed(2),overfit_warning:y.overfit_warning||!1,message:y.message||""},f(y.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(Le){ElementPlus.ElMessage.error(Le.message||"回测失败")}finally{_.value=!1}}function f(ue){const ye=document.getElementById("backtestEquityChart");if(!ye||!ue||ue.length===0)return;const Le=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,He=()=>{u=ue,q&&(q.dispose(),q=null),q=echarts.init(ye),q.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const y=ue.map(Y=>Y.date||Y[0]),O=ue.map(Y=>Y.value??Y[1]);q.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:y,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:O,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};Le?Le().then(He).catch(()=>{}):He()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){u&&f(u)})),function(){const ue=window.QuantSessionRestore;if(ue){const ye=ue.restore();ye&&ye.page&&(o.value=ye.page,ye.sub&&(d.value=ye.sub))}}(),Vue.watch(d,function(){tt()});const M=v(()=>{const ue=b.find(ye=>ye.key===o.value);return ue?ue.name:o.value}),I=e(0),E=v(()=>{I.value;const ue={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ye=d.value;return o.value==="shortterm"&&ye==="market-review"?"qc-research-page":o.value==="ops"&&ye==="execution"?"qc-strategies-page":ue[o.value]||""}),A=e(!1),R=e({}),F=e([]),H=e(""),B=e([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),G=e("day"),X=e("all");t([o,d],function(){const ue=document.querySelector(".main-content");ue&&(ue.scrollTop=0)});const V=e(!1),Q=e("kline"),z=e(null),a=e(!1),p=e(localStorage.getItem("qc_detail_mode")||"split"),n=e(window.innerWidth<=1024),h=v(()=>p.value==="split"&&!n.value);function ee(ue){p.value=ue;try{localStorage.setItem("qc_detail_mode",ue)}catch{}}window.addEventListener("resize",()=>{n.value=window.innerWidth<=1024});const N=35,x=e(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function m(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",x.value?x.value+"px":N+"%")}m();function L(ue){const ye=Math.max(1,Math.min(ue,2e3));x.value=ye,m();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function w(ue){if(x.value)return x.value;const ye=ue?ue.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ye*N/100))}let j=null;function ae(ue,ye){if(!ye||n.value)return;ue.preventDefault();const Le=ye.getBoundingClientRect().width;j={startX:ue.clientX,startW:w(ye),minW:Math.max(200,Math.floor(Le*N/100)),maxW:Math.floor(Le/2)},document.body.classList.add("qc-split-resizing")}function Z(ue){if(!j)return;const ye=ue.clientX-j.startX;let Le=j.startW+ye;Le=Math.max(j.minW,Math.min(Le,j.maxW)),x.value=Le,m();try{localStorage.setItem("qc_split_width",String(Le))}catch{}}function T(){j&&(j=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Z),document.addEventListener("mouseup",T));function W(ue){const ye=ue.target&&ue.target.closest?ue.target.closest("[data-split-resize]"):null;if(!ye)return;const Le=ye.closest("[data-split-root]");ae(ue,Le)}typeof document<"u"&&document.addEventListener("mousedown",W,!0);const ne={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},le=e({});function Se(ue,ye){return ne[ye]||ye}function $(ue){const ye=b.find(He=>He.key===ue);if(!ye||!ye.subPages||!ye.subPages.length)return;if(!(le.value[ue]||[]).length){const He=ye.subPages[0];le.value=Object.assign({},le.value,{[ue]:[{subPage:He,title:Se(ue,He)}]})}}function re(ue,ye){const Le=window.__quantModules&&window.__quantModules.tabsCore,He=Se(ue,ye);if(Le){const y=Le.openTab(le.value,ue,ye,He);le.value=y.groups}else{const y=le.value[ue]||[];y.some(O=>O.subPage===ye)||(le.value=Object.assign({},le.value,{[ue]:y.concat([{subPage:ye,title:He}])}))}i(ue,ye)}function Pe(ue,ye){const Le=window.__quantModules&&window.__quantModules.tabsCore,He=d.value;let y=null;if(Le)y=Le.closeTab(le.value,ue,ye,He),le.value=y.groups;else{const ce=le.value[ue]||[];le.value=Object.assign({},le.value,{[ue]:ce.filter(de=>de.subPage!==ye)})}if(!(le.value[ue]||[]).length){$(ue);const ce=b.find(Ce=>Ce.key===ue),de=ce&&ce.subPages&&ce.subPages[0];de&&i(ue,de);return}const Y=y?y.nextActive:null;Y&&i(ue,Y)}function se(ue,ye){if(!(le.value[ue]||[]).some(He=>He.subPage===ye)){re(ue,ye);return}i(ue,ye)}t([o,d],([ue,ye])=>{$(ue);const Le=le.value[ue]||[];ye&&!Le.some(He=>He.subPage===ye)&&(le.value=Object.assign({},le.value,{[ue]:Le.concat([{subPage:ye,title:Se(ue,ye)}])}))},{immediate:!0});const me=function(ue){if(!(ue.ctrlKey&&ue.key==="Tab"))return;const ye=o.value,Le=le.value[ye]||[];if(Le.length<=1)return;ue.preventDefault();const He=d.value,y=Math.max(0,Le.findIndex(ce=>ce.subPage===He)),O=ue.shiftKey?(y-1+Le.length)%Le.length:(y+1)%Le.length,Y=Le[O];Y&&se(ye,Y.subPage)};window.addEventListener("keydown",me);const Me=e({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),oe=e("light"),fe=[45,220,0,140,270,320,180,25,250,-1],ke={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},ie=e(45),te=e(function(){const ue=window.__quantModules&&window.__quantModules.preferences;return ue&&ue.getPreference&&ue.getPreference("theme")||"system"}());(function(){const ue=window.__quantModules&&window.__quantModules.preferences,ye=ue&&ue.getPreference&&ue.getPreference("theme_hue");ye!=null&&ye!==""&&(ie.value=parseInt(ye,10))})();const ve=e("comfortable");(function(){const ue=window.__quantModules&&window.__quantModules.preferences;ue&&ue.applyDensity&&(ve.value=ue.applyDensity()||"comfortable")})();function Ne(ue){return ue<0?"hsl(0, 0%, 46%)":"hsl("+ue+", 75%, 42%)"}function Ae(ue){return ke[ue]||"自定义 "+ue}const Ue=e(""),Ze=e([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),et=e({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),$e=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],he=e({day:[],week:[],month:[],year:[]}),xe=e({});function Re(ue,ye){let Le=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(Le=window.__quantModules.themes.applyTheme(ue,ye)),oe.value=Le&&Le.mode?Le.mode:ue==="dark"||ue==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function De(ue,ye){const Le=window.__quantModules&&window.__quantModules.preferences;if(!(!Le||!Le.setPreferences))try{Le.setPreferences({theme:ue}),ye!=null&&ye!==""&&Le.setPreferences({theme_hue:parseInt(ye,10)})}catch{}}function We(ue,ye){Re(ue,ye),ye!=null&&ye!==""&&(ie.value=parseInt(ye,10));const Le=window.__quantModules&&window.__quantModules.themes;let He=ue;Le&&Le.LEGACY_MAP&&Le.LEGACY_MAP[ue]&&(He=Le.LEGACY_MAP[ue][0]),He==="light"||He==="dark"||He==="system"?te.value=He:te.value=oe.value,He==="system"&&(He=oe.value),De(He,ye),r.value&&(fetch(`/api/users/${r.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:He})}),r.value.theme=He,localStorage.setItem("quant_user",JSON.stringify(r.value)))}function Ge(ue){const ye=window.__quantModules&&window.__quantModules.preferences,Le=ye&&ye.getPreference?ye.getPreference("theme_hue"):null;We(ue,Le)}function Ye(ue){const ye=window.__quantModules&&window.__quantModules.preferences;!ye||!ye.applyDensity||(ve.value=ye.applyDensity(ue)||"comfortable",ye.setPreference&&ye.setPreference("info_density",ve.value))}function Je(ue){ie.value=parseInt(ue,10);const ye=window.__quantModules&&window.__quantModules.preferences,Le=ye&&ye.getPreference&&ye.getPreference("theme")||"light";We(Le,ie.value)}function tt(){const ue=window.QuantSessionRestore;ue&&ue.save({page:o.value,sub:d.value||""})}return{backtestStrategies:P,backtestStrategy:k,backtestRange:S,backtestCapital:C,backtestRunning:_,backtestResult:D,runBacktest:l,currentPageName:M,lazyTick:I,pageComp:E,showUserMenu:A,dashboardData:R,healthMetrics:F,dashboardDate:H,views:B,currentView:G,statusFilter:X,stockDetailVisible:V,stockDetailTab:Q,stockDetail:z,stockDetailLoading:a,detailDisplayMode:p,setDetailDisplayMode:ee,isNarrow:n,detailSplitEnabled:h,splitWidth:x,setSplitWidth:L,SPLIT_DEFAULT_PCT:N,subPageNames:ne,tabGroups:le,openTab:re,closeTab:Pe,activateTab:se,_onTabKeydown:me,themes:Me,currentTheme:oe,themeHues:fe,themeHueNames:ke,themeHue:ie,themeMode:te,density:ve,hueColor:Ne,hueName:Ae,applyTheme:Re,changeTheme:We,changeThemeMode:Ge,changeDensity:Ye,changeThemeHue:Je,searchKeyword:Ue,strategyList:Ze,strategyFilter:et,strategyFilterOptions:$e,strategyFilterCounts:he,expandedStrategies:xe,saveSessionState:tt}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.detail={create:function(s){const{ref:e,computed:v,nextTick:t,stockDetail:o,stockDetailTab:d,stockDetailVisible:b,stockDetailLoading:c,rememberDialogTrigger:i,getIsMobile:g,getIndexDetail:r,getIndexDetailVisible:P,getMarkKlineLoaded:k,getAiResult:S,getLoadLastEvaluation:C,getSelectedDateRef:_,getRefreshStockScore:D,getAnimateScoreEntrance:q}=s,u=e(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function l(T){u.value=!!T;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",T?"show":"hide")}catch{}}const f=v(()=>{const T=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return u.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...T]:T}),M=e("daily");(function(){try{const W=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(W==="weekly"||W==="monthly")&&(M.value=W)}catch{}})();const I=e(!1),E=e(""),A=e(!1),R=e(!1),F=e({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),H=["MA5","MA10","MA20","MA60"],B=e(!1);let G=0;async function X(T){if(!o.value)return!1;const W=++G;I.value=!0,M.value=T;try{const le=await(await fetch(`/api/market/kline/${o.value.stock}?period=${T}&limit=60`)).json();if(!le.success||!le.data)throw new Error(le.message||"数据获取失败");return E.value=le.degraded_from?"分钟数据("+le.degraded_from+")暂不可用, 已降级展示日线":"",k()(o.value.stock),W!==G?!1:(d.value!=="kline"||(R.value=!0,await t(),window.__quantModules.charts.renderKlineTo("stockKlineChart",le.data,T,!1,{isMobile:g().value,onLegend:Se=>{Object.keys(F.value).forEach($=>{$ in Se&&(F.value[$]=!!Se[$])})}}),p()),!0)}catch(ne){return console.error("[kline] 加载失败:",o.value&&o.value.stock,T,ne),d.value==="kline"&&(R.value=!1,E.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ne&&ne.message?ne.message:"数据源不可达，请重试"))),!1}finally{I.value=!1}}async function V(T){if(r().value){A.value=!0,M.value=T;try{const ne=await(await fetch(`/api/market/kline/${r().value.code}?period=${T}&limit=60`)).json();if(!ne.success||!ne.data)throw new Error(ne.message||"数据获取失败");B.value=!0,await t(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ne.data,T,!0,{isMobile:g().value,onLegend:le=>{Object.keys(F.value).forEach(Se=>{Se in le&&(F.value[Se]=!!le[Se])})}}),p()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{A.value=!1}}}async function Q(T){if(!R.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await X(T)}async function z(T){if(!B.value){ElementPlus.ElMessage.info("请先加载K线");return}await V(T)}function a(T){const W=(b.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(P().value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);W&&W.dispatchAction({type:"legendToggleSelect",name:T})}function p(){["K线","MA5","MA10","MA20","MA60"].forEach(T=>{F.value[T]=!0})}async function n(T){M.value=T,await V(T)}async function h(){const T=await fetch("/api/system/metrics");if(!T.ok)throw new Error("metrics "+T.status);const W=await T.json(),ne=Array.isArray(W)?W:W&&W.data_sources||[];healthMetrics.value=ne}let ee=null;function N(T){ee={code:T,ts:Date.now()}}function x(T){return!!(ee&&Date.now()-ee.ts<4e3&&(T==null||ee.code===T))}let m=0;async function L(T){const W=++m;i(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(T,""),S().value=null,M.value="daily",R.value=!1,d.value="kline",o.value=null,c.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),b.value=!0,t(()=>q()());try{const ne=await fetch(`/api/calendar/stock/${T}?date=${_().value}`);if(W!==m)return;o.value=await ne.json(),o.value&&o.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(T,o.value.name)}catch{if(W!==m)return;ElementPlus.ElMessage.error("加载失败"),o.value={stock:T,name:"",total_days:0}}finally{W===m&&(c.value=!1)}setTimeout(async()=>{await X("daily"),D()()},500),C()(T)}const w={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},j={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function ae(T){return w[T]||"var(--text-tertiary)"}function Z(T){return j[T]||"var(--bg-hover)"}return{klineShowMinutes:u,toggleKlineShowMinutes:l,klinePeriods:f,currentKlinePeriod:M,klineLoading:I,klineDegradeNote:E,indexKlineLoading:A,stockKlineLoaded:R,klineMaVisible:F,MA_LINES:H,indexKlineLoaded:B,loadStockKline:X,loadIndexKline:V,switchKlinePeriod:Q,switchIndexKlinePeriod:z,toggleKlineMa:a,resetKlineMaVisible:p,loadIndexKlineWithPeriod:n,loadHealthMetrics:h,markExternalStock:N,externalStockActive:x,showStockDetail:L,levelColor:ae,levelBg:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.runtime={create:function(s){const{watch:e,onMounted:v,onUnmounted:t,lazyTick:o,currentPage:d,currentSubPage:b,hapticFeedback:c,allMenuDefs:i,saveSessionState:g,_onTabKeydown:r,handleGlobalKeydown:P,runOnMounted:k,startAutoRefresh:S,loadMerrillTimeline:C,cancelPoolSignals:_,loadDashboardCached:D,selectedDate:q,loadConsensusData:u,loadStrategyRecommendations:l,loadAiUsage:f,loadAiHistory:M,strategyFilterCounts:I,consensus:E,currentUser:A,loadUsers:R,loadFeishuConfig:F,loadTushareConfig:H,loadSystemStatus:B,loadAiConfig:G,loadRateLimit:X,checkTushareConnection:V}=s;window.__quantGoPage=async(z,a)=>{try{const p=window.__lazyLoaders&&window.__lazyLoaders[z];p&&await p()}catch(p){console.warn("[lazy] 页面组件加载失败",z,p)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(p=>{p&&p.name&&!p.__quantRegistered&&(window.__quantApp.component(p.name,p),p.__quantRegistered=!0)}),o&&o.value++,d.value=z,a&&(b.value=a)};let Q;e(d,async z=>{var a;c("light"),g();try{const p=i.find(function(n){return n.key===z});document.title=(p?p.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",z),z!=="calendar"&&typeof _=="function"&&_();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:z})}).catch(()=>{})}catch(p){console.warn("pageView track failed:",p)}if(Q&&(clearInterval(Q),Q=null),z==="strategies")await D(),Q=setInterval(()=>{D().catch(()=>{})},5*60*1e3);else if(z==="calendar")q.value&&await u();else if(z==="ai")l(),f(),await M();else if(z==="system"){if(!q.value){const n=await(await fetch("/api/dashboard")).json(),h=n.data||n;h.latest_date&&(q.value=h.latest_date)}if(q.value){const p=["day","week","month","year"];for(const n of p)try{const ee=await(await fetch(`/api/view/${n}/${q.value}?status=all`)).json();I.value[n]=ee.stocks||[]}catch(h){console.warn("loadConsensusData view load failed:",h)}(!E.value||E.value.length===0)&&(E.value=I.value.day||[])}((a=A.value)==null?void 0:a.role)==="admin"&&(await R(),await F(),await H(),await B(),await G(),await X(),V(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(V,36e5)))}}),v(async()=>{await k()}),S(),C(),t(()=>{Q&&clearInterval(Q),window.removeEventListener("keydown",P),window.removeEventListener("keydown",r)})}}})();(function(){window.createAppLogic=function(){const{ref:s,computed:e,onMounted:v,onUnmounted:t,watch:o,nextTick:d}=Vue,b=window.__quantAppLogic.shell.create({ref:s,computed:e,watch:o}),{configChanged:c,locale:i,t:g,changeLanguage:r,sanitizeHtml:P,keyClick:k,rememberDialogTrigger:S,restoreDialogFocus:C,focusFirstInDialog:_,isOnline:D,hapticFeedback:q,sidebarCollapsed:u,toggleSidebar:l,groupsConfig:f,allMenuDefs:M,menus:I,loadGroupConfig:E,currentPage:A,currentSubPage:R,navMode:F,setNavMode:H,shortcutHelpItems:B,navigateTo:G,ensureVisiblePage:X,currentUser:V}=b,Q=useMerrillClock(),{merrillData:z,merrillStagesConfig:a,showMerrillDetail:p,merrillDetailData:n,merrillClockConfig:h,merrillClockLastUpdated:ee,merrillReevalResult:N,merrillReevalLoading:x,stages:m,indicatorList:L,dimensionScoreList:w,detailDimensionScoreList:j,confidenceColor:ae,timelineStages:Z,clockPosition:T,merrillProgressStyle:W,FULL_CYCLE_MONTHS:ne,getStageAngle:le,getCycleProgress:Se,getCurrentStageMonths:$,getStageTotalMonths:re,isStageCompleted:Pe,getCharLabel:se,getAssetName:me,getRankColor:Me,fetchMerrillStages:oe,fetchMerrillClock:fe,loadMerrillTimeline:ke,showTimelineStage:ie,merrillTimeline:te,timelineLoading:ve,showStageDetail:Ne,saveMerrillClockConfig:Ae,doMerrillReevaluate:Ue,startAutoRefresh:Ze,stopAutoRefresh:et,merrillSnapshots:$e,merrillSnapshotsTotal:he,fetchMerrillSnapshots:xe}=Q,Re=window.__quantAppLogic.workspace.create({ref:s,computed:e,watch:o,currentPage:A,currentSubPage:R,allMenuDefs:M,menus:I,navigateTo:G,ensureVisiblePage:X,currentUser:V}),{backtestStrategies:De,backtestStrategy:We,backtestRange:Ge,backtestCapital:Ye,backtestRunning:Je,backtestResult:tt,runBacktest:ue,currentPageName:ye,lazyTick:Le,pageComp:He,showUserMenu:y,dashboardData:O,healthMetrics:Y,dashboardDate:ce,views:de,currentView:Ce,statusFilter:we,stockDetailVisible:ze,stockDetailTab:Oe,stockDetail:Ve,stockDetailLoading:st,detailDisplayMode:gt,setDetailDisplayMode:nt,isNarrow:K,detailSplitEnabled:ge,splitWidth:Qe,setSplitWidth:je,SPLIT_DEFAULT_PCT:ft,subPageNames:ht,tabGroups:Mt,openTab:mt,closeTab:pt,activateTab:Et,_onTabKeydown:Yt,themes:Tt,currentTheme:zt,themeHues:At,themeHueNames:vt,themeHue:It,themeMode:Nt,density:Ct,hueColor:Bt,hueName:Xt,applyTheme:Ot,changeTheme:U,changeThemeMode:Ee,changeDensity:Ke,changeThemeHue:Ie,searchKeyword:rt,strategyList:ct,strategyFilter:wt,strategyFilterOptions:jt,strategyFilterCounts:qt,expandedStrategies:Lt,saveSessionState:yt}=Re,Zt=window.__quantAppLogic.detail.create({ref:s,computed:e,nextTick:d,stockDetail:Ve,stockDetailTab:Oe,stockDetailVisible:ze,stockDetailLoading:st,rememberDialogTrigger:S,getIsMobile:()=>pn,getIndexDetail:()=>Ga,getIndexDetailVisible:()=>xa,getMarkKlineLoaded:()=>Rs,getAiResult:()=>Ta,getLoadLastEvaluation:()=>za,getSelectedDateRef:()=>Ft,getRefreshStockScore:()=>Ca,getAnimateScoreEntrance:()=>qa}),{klineShowMinutes:Qt,toggleKlineShowMinutes:ea,klinePeriods:ta,currentKlinePeriod:Dt,klineLoading:aa,klineDegradeNote:ca,indexKlineLoading:da,stockKlineLoaded:Jt,klineMaVisible:ua,MA_LINES:ut,indexKlineLoaded:_t,loadStockKline:St,loadIndexKline:Rt,switchKlinePeriod:$t,switchIndexKlinePeriod:pa,toggleKlineMa:J,resetKlineMaVisible:_e,loadIndexKlineWithPeriod:Xe,loadHealthMetrics:Vt,markExternalStock:_a,externalStockActive:Qs,showStockDetail:Va,levelColor:Js,levelBg:$s}=Zt,Fa=()=>Oa,Xs=()=>cs,Zs=()=>qo,en=()=>ma,tn=()=>Ra,an=()=>Ft,sn=window.__quantAppLogic.data.create({currentView:Ce,statusFilter:we,dashboardData:O,loadHealthMetrics:Vt,getLoadDashboardData:Fa,getLastRefreshTime:Xs,getFetchPoolSignals:Zs}),{loading:Ha,loadingView:nn,viewCache:ln,dates:va,selectedDate:Ft,lastLoadTime:Ba,consensus:ia,viewNote:on,loadDates:Ka,refreshCalendarData:Wa,exportCSV:Ua,loadConsensusData:oa,loadDashboardCached:ka}=sn,rn=window.__quantAppLogic.market.create({currentKlinePeriod:Dt,loadIndexKline:Rt,rememberDialogTrigger:S,menus:I,currentPage:A,currentSubPage:R,stockDetail:Ve,selectedDate:Ft}),{marketData:cn,indexDetailVisible:xa,indexDetail:Ga,indexAiResult:dn,indexAiLoading:un,fetchMarketData:Sa,showIndexDetail:vn,loadCachedIndexEval:mn,doIndexAiEvaluate:fn,disposeStockKline:Ya,isMobile:pn,zoomKlineRange:gn,scoreAnimating:hn,scoreDelta:yn,scorePulse:bn,refreshStockScore:Ca,animateScoreEntrance:qa,onTouchStart:wn,onTouchEnd:_n}=rn,kn=window.__quantAppLogic.ops.create({navigateTo:G,currentPage:A,currentSubPage:R}),{feishuConfig:Qa,feishuTestStatus:xn,feishuTestMessage:Sn,testFeishuWebhook:Cn,saveFeishuConfig:qn,aiFabHidden:En,openAiFab:Ja,strategyRecommendations:Mn,aiUsage:Tn,loadStrategyRecommendations:$a,loadAiUsage:Ea,sysMonitor:Pn,analyticsRank:Dn,analyticsDays:Rn,loadSysMonitor:Xa,loadAnalytics:Za,healthDetail:zn,loadHealthDetail:es,reviewTriggering:An,triggerMarketReview:Ln,factCheck:In,factCheckRunning:Nn,loadFactCheck:ts,triggerFactCheck:On,backups:jn,backupCreating:Vn,loadBackups:as,createBackup:Fn,restoreBackup:Hn,reportExporting:Bn,reportExportMsg:Kn,exportReport:Wn,tourVisible:Un,tourStep:Gn,tourSteps:Yn,maybeShowTour:Qn,skipTour:Jn,finishTour:$n,feedbackText:Xn,feedbackSubmitting:Zn,submitFeedback:el}=kn,tl=window.__quantAppLogic.nav.create({currentView:Ce,selectedDate:Ft,dates:va,loadConsensusData:oa,hapticFeedback:q}),{viewUnit:al,datePickerType:sl,dateFormat:nl,canNavPrev:ll,canNavNext:il,switchView:ss,navigateDate:ns,disabledDate:ol,onDateChange:rl}=tl,cl=window.__quantAppLogic.keys.create({menus:I,subPageNames:ht,navigateTo:G,currentPage:A,currentSubPage:R,currentView:Ce,navigateDate:ns,switchView:ss,getLoadDashboardData:Fa,refreshCalendarData:Wa,getLoadAiHistory:en,exportCSV:Ua,getShowBatchEvaluate:tn,openAiFab:Ja,toggleSidebar:l,showStockDetail:Va,getSelectedDate:an,markExternalStock:_a}),{searchQuery:dl,searchStocks:ul,onSearchSelect:vl,shortcutHelpVisible:ls,commandPaletteVisible:is,handleGlobalKeydown:os}=cl,ml=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Jt,stockDetailVisible:ze,stockDetailTab:Oe,stockDetail:Ve,disposeStockKline:Ya}):{},{chatSessions:fl,chatHistoryView:pl,selectedChatIds:gl,expandedChatDates:hl,expandedChatMonths:yl,expandedChatStocks:bl,chatHistoryLoading:wl,chatHistoryError:_l,allChatSessionsFlat:kl,chatGroupedByDate:xl,chatGroupedByMonth:Sl,chatGroupedByStock:Cl,toggleSelectChat:ql,toggleSelectChatDate:El,toggleSelectChatMonth:Ml,toggleSelectChatStock:Tl,toggleChatDateExpand:Pl,toggleChatMonthExpand:Dl,toggleChatStockExpand:Rl,selectAllChatSessions:zl,deleteSelectedChatSessions:Al,viewChatSession:Ll,loadChatHistory:rs,deleteChatSession:Il,renderMarkdown:Nl,stockChatInput:Ol,stockChatMessages:jl,stockChatLoading:Vl,stockChatError:Fl,askStockSend:Hl,askStockQuick:Bl}=ml,Kl=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:V,applyTheme:Ot,allMenuDefs:M,loadGroupConfig:E}):{},{userList:Wl,userSearch:Ul,groupFilter:Gl,userPageTab:Yl,expandedGroups:Ql,addMemberGroupMap:Jl,filteredUsers:$l,toggleGroupExpand:Xl,removeMemberFromGroupInline:Zl,addMemberToGroupInline:ei,changeUserGroup:ti,showAddUser:ai,editingUser:si,userForm:ni,savingUser:li,editingGroup:ii,menuConfigDialog:oi,memberDialog:ri,groupEditForm:ci,subPageCache:di,showAddGroup:ui,addGroupForm:vi,savingGroup:mi,groupMembers:fi,addMemberUsername:pi,selectedMemberGroup:gi,subPageSectionExpanded:hi,toggleSubPageSection:yi,getGroupMemberCount:bi,getMenuEnabledCount:wi,groupCount:_i,openMemberManager:ki,loadGroupMembers:xi,addMemberToGroup:Si,removeMemberFromGroup:Ci,availableUsersForGroup:qi,onParentToggle:Ei,openMenuConfig:Mi,saveMenuConfig:Ti,deleteGroupConfig:Pi,createGroup:Di,allGroups:Ri,getGroupName:zi,loadAllGroups:Ma,loadUsers:ga,editUser:Ai,saveUser:Li,deleteUser:Ii,toggleUserEnabled:Ni,resetUserPassword:Oi}=Kl,ji=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:ia,currentPage:A,currentSubPage:R,dashboardData:O,searchKeyword:rt,statusFilter:we,strategyFilter:wt,strategyFilterCounts:qt}):{},{applyStrategyFilter:mp,statusCounts:Vi,stockPool:Fi,strategyDistribution:Hi,strategyPreviewCount:Bi,saveStrategyFilter:Ki,filteredConsensusRank:Wi,currentPoolSize:Ui,filteredStrategyCounts:Gi,poolChangeBadge:Yi,timeBarPercent:Qi,lastRefreshTime:cs,navigateToStrategyFilter:Ji}=ji,$i=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:c,consensus:ia}):{},{aiResult:Ta,lastEvalTime:Xi,evalHistoryComparison:Zi,checklistItems:eo,aiHistory:ds,selectedHistoryIds:us,expandedDates:vs,expandedMonths:to,expandedStocks:ms,poolSignals:ao,toggleMonthExpand:so,aiHistoryView:no,selectedWatchlistCodes:fs,showAutoEvaluateSettings:ps,savingConfig:gs,autoEvaluateScope:hs,aiVendors:lo,aiCatalog:io,aiModelsError:oo,testingAllModels:ro,savingAiModels:co,loadAiVendors:ha,loadAiCatalog:ys,saveAiVendors:bs,saveAiModels:uo,testVendorModel:vo,testAllVendorModels:mo,fetchVendorModels:fo,addVendorFromCatalog:po,addCustomVendor:go,addVendorModel:ho,removeVendorModel:yo,removeVendor:bo,toggleVendorKeyReveal:wo,toggleVendorEdit:_o,autoEvaluateConfig:Pa,aiLoading:Da,aiEvalStage:ws,aiEvalElapsed:_s,aiEvalError:ks,showBatchEvaluate:Ra,batchStocks:xs,batchRunning:Ss,batchTotal:Cs,batchCompleted:qs,batchCurrent:Es,batchStatuses:Ms,batchResults:Ts,batchEvalErrors:Ps,aiConfig:Ds,selectedPreset:ko,providerInfo:xo,aiPresets:fp,applyPreset:So,onProviderChange:Co,fetchPoolSignals:qo,cancelPoolSignals:Eo,loadLastEvaluation:za}=$i,Mo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:V,selectedDate:Ft,stockDetail:Ve,stockDetailTab:Oe,stockDetailVisible:ze,stockDetailLoading:st,stockKlineLoaded:Jt,viewCache:ln,animateScoreEntrance:qa,loadStockKline:St,refreshStockScore:Ca,disposeStockKline:Ya,aiHistory:ds,aiLoading:Da,aiEvalStage:ws,aiEvalElapsed:_s,aiEvalError:ks,aiResult:Ta,loadLastEvaluation:za,autoEvaluateConfig:Pa,autoEvaluateScope:hs,batchStocks:xs,batchRunning:Ss,batchTotal:Cs,batchCompleted:qs,batchCurrent:Es,batchStatuses:Ms,batchResults:Ts,batchEvalErrors:Ps,expandedDates:vs,expandedStocks:ms,savingConfig:gs,selectedHistoryIds:us,selectedWatchlistCodes:fs,showAutoEvaluateSettings:ps,showBatchEvaluate:Ra}):{},{quickEvalStock:To,evalStrategy:Po,watchlistSort:Do,watchlist:Ro,watchlistCodes:zo,sortedWatchlist:Ao,getWatchlistScore:Lo,getLatestScore:pp,addSearchResult:Io,evaluatedCodes:No,klineLoadedCodes:Oo,markKlineLoaded:Rs,watchlistSearch:jo,watchlistResults:Vo,watchlistSearching:Fo,dataRefreshConfig:Ho,dataRefreshReloading:Bo,dataRefreshSaving:Ko,aiHistoryLoading:Wo,aiHistoryError:Uo,aiHistoryTotal:Go,aiHistoryLoadingMore:Yo,hasMoreAiHistory:Qo,loadMoreAiHistory:Jo,watchlistLoading:$o,doAiEvaluate:Xo,loadAiHistory:ma,deleteSingleHistory:Zo,toggleSelectHistory:er,clearSelection:tr,clearWatchlistSelection:ar,batchReevaluateHistory:sr,batchAddToWatchlist:nr,batchRemoveWatchlist:lr,toggleSelectWatchlist:ir,selectAllHistory:or,selectAllWatchlist:rr,deleteSelectedHistory:cr,loadAutoEvaluateConfig:zs,saveAutoEvaluateConfig:dr,loadWatchlist:As,addToWatchlist:ur,removeFromWatchlist:vr,clearWatchlist:mr,toggleWatchlist:fr,showStockKline:pr,preloadingKline:gr,preloadWatchlistKline:Ls,watchlistEvaluate:hr,batchEvaluateWatchlist:yr,batchEvaluateSelected:br,searchStockForWatchlist:wr,loadDataRefreshConfig:Is,saveDataRefreshConfig:_r,triggerDataReload:kr,triggerDataPull:xr,dataPullRunning:Sr,groupedByDate:Cr,aiHistoryByStock:qr,groupedByMonth:Er,aiHistoryStockCount:Mr,scoreDistribution:Tr,quickEvaluate:Pr,toggleDateExpand:Dr,toggleSelectDate:Rr,toggleSelectMonth:zr,toggleStockExpand:Ar,toggleSelectStock:Lr,registerTrendChart:Ir,viewAiResult:Nr,doBatchEvaluate:Or,realtimeQuotes:jr,realtimeDegraded:Vr,realtimeWsState:Fr,connectRealtimeQuotes:Hr,disconnectRealtimeQuotes:Br,quoteWarningFor:Kr,realtimeQuoteColor:Wr,realtimePriceText:Ur,realtimePctText:Gr,realtimeRatioText:Yr,REALTIME_DEGRADED_TEXT:Qr,REALTIME_FALLBACK_TEXT:Jr}=Mo,$r=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:De}):{},{btStrategyOptions:Xr,btSelectedStrategies:Zr,toggleBtStrategy:ec,btDateRange:tc,btCapital:ac,btCommissionRate:sc,btIncludeBenchmark:nc,btRunning:lc,btResult:ic,btError:oc,btMetrics:rc,btAnnualReturns:cc,btTrades:dc,btStrategyMetricsRows:uc,btDrawdownRegion:vc,runBacktestWorkbench:mc,exportBacktestCSV:fc,registerBacktestNavChart:pc,btFmtNum:gc}=$r,hc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:c,aiConfig:Ds,aiLoading:Da,feishuConfig:Qa,currentTheme:zt,changeTheme:U,autoEvaluateConfig:Pa,currentUser:V,strategyFilter:wt,applyTheme:Ot,dashboardData:O,lastRefreshTime:cs,saveAiModels:uo}):{},{configSaving:yc,globalConfigDirty:bc,lastSavedTime:wc,feishuConfigOriginal:gp,aiConfigOriginal:hp,tushareConfigOriginal:yp,tushareConfig:_c,tushareStatus:kc,datasourceConfig:xc,datasourceStatus:Sc,syncingData:Cc,stockCount:qc,tradeDateCount:Ec,aiStatus:Mc,appVersion:Ns,showImportDialog:Tc,rateLimitConfig:Pc,rateLimitDirty:Dc,rateLimitSaving:Rc,loadRateLimit:Aa,saveRateLimit:zc,saveAiConfig:Ac,testAiApi:Lc,exportConfig:Ic,importConfig:Nc,saveAllConfig:Oc,resetAllConfig:jc,testTushareConnection:Vc,checkTushareConnection:La,syncStockData:Fc,loadTushareConfig:Os,loadDatasourceConfig:js,saveDatasourceConfig:Hc,testDatasource:Bc,toggleDatasourceKeyReveal:Kc,toggleDatasourceEdit:Wc,loadFeishuConfig:Ia,loadAiConfig:ya,loadUserConfig:Vs,loadSystemStatus:Na,loadDashboardData:Oa}=hc,Uc=window.__quantAppLogic.auth.create({currentUser:V,loadUserConfig:Vs,loadDates:Ka,loadDashboardData:Oa,loadDashboardCached:ka,loadHealthMetrics:Vt,loadConsensusData:oa,applyTheme:Ot,maybeShowTour:Qn,loadAiVendors:ha,loadGroupConfig:E,groupsConfig:f}),{loginForm:Fs,logining:Hs,guestLogining:Bs,showChangePassword:Gc,changePasswordForm:Yc,changingPassword:Qc,showSetupWizard:Ks,setupForm:Jc,setupStep:$c,checkSetupWizard:Xc,completeSetupWizard:Zc,resetSetupWizard:ed,handleLogin:td,handleGuestLogin:ad,handleLogout:sd,doChangePassword:nd}=Uc;window.__quantAppLogic.watch.register({strategyFilter:wt,currentView:Ce,statusFilter:we,currentPage:A,currentSubPage:R,menus:I,currentUser:V,strategyFilterCounts:qt,lazyTick:Le,dates:va,selectedDate:Ft,consensus:ia,loadConsensusData:oa,fetchMerrillClock:fe,fetchMarketData:Sa,loadWatchlist:As,loadAiHistory:ma,preloadWatchlistKline:Ls,loadChatHistory:rs,loadSystemStatus:Na,checkTushareConnection:La,loadSysMonitor:Xa,loadAnalytics:Za,loadHealthDetail:es,loadHealthMetrics:Vt,loadAiUsage:Ea,loadFactCheck:ts,loadAutoEvaluateConfig:zs,loadDatasourceConfig:js,loadFeishuConfig:Ia,loadAiConfig:ya,loadAiVendors:ha,loadRateLimit:Aa,loadDataRefreshConfig:Is,loadBackups:as,loadAllGroups:Ma,loadUsers:ga,stockDetailTab:Oe,stockDetailVisible:ze,stockKlineLoaded:Jt,loadStockKline:St,currentKlinePeriod:Dt,showMerrillDetail:p,indexDetailVisible:xa,restoreDialogFocus:C});const ld=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:os,applyTheme:Ot,menus:I,currentPage:A,currentSubPage:R,currentView:Ce,currentKlinePeriod:Dt,selectedDate:Ft,dates:va,loadDates:Ka,loadConsensusData:oa,loadDashboardCached:ka,appVersion:Ns,themes:Tt,fetchMarketData:Sa,fetchMerrillStages:oe,fetchMerrillClock:fe,loadMerrillTimeline:ke,showTimelineStage:ie,merrillTimeline:te,timelineLoading:ve,loadAiConfig:ya,loadAiVendors:ha,loadAiCatalog:ys,currentUser:V,loadUserConfig:Vs,loadAutoEvaluateConfig:zs,loadGroupConfig:E,loadUsers:ga,loadAllGroups:Ma,loadAiHistory:ma}),{runOnMounted:id}=ld;window.__quantAppLogic.runtime.create({watch:o,onMounted:v,onUnmounted:t,lazyTick:Le,currentPage:A,currentSubPage:R,hapticFeedback:q,allMenuDefs:M,saveSessionState:yt,_onTabKeydown:Yt,handleGlobalKeydown:os,runOnMounted:id,startAutoRefresh:Ze,loadMerrillTimeline:ke,cancelPoolSignals:Eo,loadDashboardCached:ka,selectedDate:Ft,loadConsensusData:oa,loadStrategyRecommendations:$a,loadAiUsage:Ea,loadAiHistory:ma,strategyFilterCounts:qt,consensus:ia,currentUser:V,loadUsers:ga,loadFeishuConfig:Ia,loadTushareConfig:Os,loadSystemStatus:Na,loadAiConfig:ya,loadRateLimit:Aa,checkTushareConnection:La});function od(ba,rd=2){return ba==null||ba===""||isNaN(Number(ba))?"--":Number(ba).toFixed(rd)}const Ws={currentPage:A,pageComp:He,currentSubPage:R,sidebarCollapsed:u,menus:I,navMode:F,setNavMode:H,tabGroups:Mt,openTab:mt,closeTab:pt,activateTab:Et,fmtNum:od,sanitizeHtml:P,keyClick:k,isOnline:D,currentUser:V,allMenuDefs:M,t:g,locale:i,changeLanguage:r,currentPageName:ye,subPageNames:ht,searchQuery:dl,searchStocks:ul,onSearchSelect:vl,selectedDate:Ft,onDateChange:rl,disabledDate:ol,refreshCalendarData:Wa,exportCSV:Ua,viewNote:on,loading:Ha,lastLoadTime:Ba,resetSetupWizard:ed,showChangePassword:Gc,themes:Tt,currentTheme:zt,changeTheme:U,changeThemeMode:Ee,changeThemeHue:Ie,handleLogout:sd,themeHues:At,themeHueNames:vt,themeHue:It,themeMode:Nt,hueColor:Bt,hueName:Xt,density:Ct,changeDensity:Ke,marketData:cn,merrillData:z,merrillTimeline:te,timelineLoading:ve,merrillStagesConfig:a,fetchMerrillStages:oe,merrillSnapshots:$e,merrillSnapshotsTotal:he,healthMetrics:Y,feishuConfig:Qa,feishuTestStatus:xn,feishuTestMessage:Sn,shortcutHelpVisible:ls,shortcutHelpItems:B,commandPaletteVisible:is,tourVisible:Un,tourStep:Gn,tourSteps:Yn,skipTour:Jn,finishTour:$n,backups:jn,backupCreating:Vn,loadBackups:as,createBackup:Fn,restoreBackup:Hn,reportExporting:Bn,reportExportMsg:Kn,exportReport:Wn,sysMonitor:Pn,analyticsRank:Dn,analyticsDays:Rn,loadSysMonitor:Xa,loadAnalytics:Za,healthDetail:zn,loadHealthDetail:es,reviewTriggering:An,triggerMarketReview:Ln,factCheck:In,factCheckRunning:Nn,loadFactCheck:ts,triggerFactCheck:On,strategyRecommendations:Mn,aiUsage:Tn,loadStrategyRecommendations:$a,loadAiUsage:Ea,aiFabHidden:En,openAiFab:Ja,feedbackText:Xn,feedbackSubmitting:Zn,submitFeedback:el,backtestStrategies:De,backtestStrategy:We,backtestRange:Ge,backtestCapital:Ye,backtestRunning:Je,backtestResult:tt,runBacktest:ue,btStrategyOptions:Xr,btSelectedStrategies:Zr,toggleBtStrategy:ec,btDateRange:tc,btCapital:ac,btCommissionRate:sc,btIncludeBenchmark:nc,btRunning:lc,btResult:ic,btError:oc,btMetrics:rc,btAnnualReturns:cc,btTrades:dc,btStrategyMetricsRows:uc,btDrawdownRegion:vc,runBacktestWorkbench:mc,exportBacktestCSV:fc,registerBacktestNavChart:pc,btFmtNum:gc,fetchMarketData:Sa,fetchMerrillClock:fe,testFeishuWebhook:Cn,saveFeishuConfig:qn,merrillClockConfig:h,merrillClockLastUpdated:ee,merrillReevalResult:N,merrillReevalLoading:x,saveMerrillClockConfig:Ae,doMerrillReevaluate:Ue,dataRefreshConfig:Ho,dataRefreshReloading:Bo,dataRefreshSaving:Ko,loadDataRefreshConfig:Is,saveDataRefreshConfig:_r,triggerDataReload:kr,triggerDataPull:xr,dataPullRunning:Sr,indexDetailVisible:xa,indexDetail:Ga,indexAiResult:dn,indexAiLoading:un,loadCachedIndexEval:mn,showIndexDetail:vn,doIndexAiEvaluate:fn,klinePeriods:ta,currentKlinePeriod:Dt,klineLoading:aa,indexKlineLoading:da,stockKlineLoaded:Jt,indexKlineLoaded:_t,klineDegradeNote:ca,klineShowMinutes:Qt,toggleKlineShowMinutes:ea,loadStockKline:St,switchKlinePeriod:$t,loadIndexKline:Rt,switchIndexKlinePeriod:pa,zoomKlineRange:gn,MA_LINES:ut,klineMaVisible:ua,toggleKlineMa:J,scoreAnimating:hn,scoreDelta:yn,scorePulse:bn,refreshStockScore:Ca,animateScoreEntrance:qa,showMerrillDetail:p,merrillDetailData:n,showStageDetail:Ne,getCharLabel:se,getAssetName:me,getRankColor:Me,levelColor:Js,levelBg:$s,timelineStages:Z,getStageAngle:le,getCycleProgress:Se,getCurrentStageMonths:$,getStageTotalMonths:re,isStageCompleted:Pe,stages:m,indicatorList:L,dimensionScoreList:w,confidenceColor:ae,views:de,currentView:Ce,statusFilter:we,loginForm:Fs,logining:Hs,guestLogining:Bs,dashboardData:O,loadingView:nn,dates:va,consensus:ia,searchKeyword:rt,stockDetailVisible:ze,stockDetailTab:Oe,stockDetail:Ve,stockDetailLoading:st,detailDisplayMode:gt,setDetailDisplayMode:nt,isNarrow:K,detailSplitEnabled:ge,splitWidth:Qe,setSplitWidth:je,SPLIT_DEFAULT_PCT:ft,aiLoading:Da,aiEvalStage:ws,aiEvalElapsed:_s,aiEvalError:ks,showBatchEvaluate:Ra,batchStocks:xs,batchRunning:Ss,batchTotal:Cs,batchCompleted:qs,batchCurrent:Es,batchStatuses:Ms,batchResults:Ts,batchEvalErrors:Ps,aiConfig:Ds,userList:Wl,showAddUser:ai,editingUser:si,userForm:ni,savingUser:li,userSearch:Ul,filteredUsers:$l,groupFilter:Gl,userPageTab:Yl,expandedGroups:Ql,addMemberGroupMap:Jl,toggleGroupExpand:Xl,removeMemberFromGroupInline:Zl,addMemberToGroupInline:ei,changeUserGroup:ti,statusCounts:Vi,stockPool:Fi,poolSignals:ao,aiResult:Ta,aiHistory:ds,groupedByDate:Cr,groupedByMonth:Er,expandedDates:vs,expandedMonths:to,aiHistoryByStock:qr,aiHistoryStockCount:Mr,expandedStocks:ms,aiHistoryView:no,aiHistoryLoading:Wo,aiHistoryError:Uo,aiHistoryTotal:Go,aiHistoryLoadingMore:Yo,hasMoreAiHistory:Qo,loadMoreAiHistory:Jo,watchlistLoading:$o,scoreDistribution:Tr,quickEvalStock:To,evalStrategy:Po,checklistItems:eo,evalHistoryComparison:Zi,quickEvaluate:Pr,selectedHistoryIds:us,showAutoEvaluateSettings:ps,savingConfig:gs,autoEvaluateConfig:Pa,autoEvaluateScope:hs,strategyList:ct,toggleDateExpand:Dr,toggleMonthExpand:so,toggleSelectDate:Rr,toggleSelectMonth:zr,toggleSelectStock:Lr,toggleStockExpand:Ar,registerTrendChart:Ir,selectedWatchlistCodes:fs,clearWatchlistSelection:ar,toggleSelectWatchlist:ir,selectAllHistory:or,selectAllWatchlist:rr,batchRemoveWatchlist:lr,batchEvaluateSelected:br,batchReevaluateHistory:sr,batchAddToWatchlist:nr,viewUnit:al,datePickerType:sl,dateFormat:nl,canNavPrev:ll,canNavNext:il,handleLogin:td,handleGuestLogin:ad,switchView:ss,navigateDate:ns,navigateTo:G,loadDashboardData:Oa,loadConsensusData:oa,showStockDetail:Va,externalStockActive:Qs,doAiEvaluate:Xo,doBatchEvaluate:Or,loadAiHistory:ma,loadLastEvaluation:za,lastEvalTime:Xi,viewAiResult:Nr,saveAiConfig:Ac,testAiApi:Lc,exportConfig:Ic,importConfig:Nc,configSaving:yc,configChanged:c,watchlist:Ro,watchlistCodes:zo,watchlistSearch:jo,watchlistResults:Vo,watchlistSearching:Fo,watchlistSort:Do,sortedWatchlist:Ao,getWatchlistScore:Lo,addSearchResult:Io,evaluatedCodes:No,klineLoadedCodes:Oo,markKlineLoaded:Rs,loadWatchlist:As,addToWatchlist:ur,removeFromWatchlist:vr,clearWatchlist:mr,searchStockForWatchlist:wr,toggleWatchlist:fr,batchEvaluateWatchlist:yr,watchlistEvaluate:hr,showStockKline:pr,preloadWatchlistKline:Ls,preloadingKline:gr,realtimeQuotes:jr,realtimeDegraded:Vr,realtimeWsState:Fr,connectRealtimeQuotes:Hr,disconnectRealtimeQuotes:Br,quoteWarningFor:Kr,realtimeQuoteColor:Wr,realtimePriceText:Ur,realtimePctText:Gr,realtimeRatioText:Yr,REALTIME_DEGRADED_TEXT:Qr,REALTIME_FALLBACK_TEXT:Jr,toggleSelectHistory:er,clearSelection:tr,deleteSingleHistory:Zo,deleteSelectedHistory:cr,saveAutoEvaluateConfig:dr,editUser:Ai,saveUser:Li,deleteUser:Ii,loadUsers:ga,allGroups:Ri,loadAllGroups:Ma,getGroupName:zi,toggleUserEnabled:Ni,resetUserPassword:Oi,selectedPreset:ko,applyPreset:So,onProviderChange:Co,providerInfo:xo,globalConfigDirty:bc,lastSavedTime:wc,tushareConfig:_c,tushareStatus:kc,syncingData:Cc,stockCount:qc,tradeDateCount:Ec,aiStatus:Mc,appVersion:Ns,showImportDialog:Tc,rateLimitConfig:Pc,rateLimitDirty:Dc,rateLimitSaving:Rc,loadRateLimit:Aa,saveRateLimit:zc,saveAllConfig:Oc,resetAllConfig:jc,testTushareConnection:Vc,syncStockData:Fc,loadTushareConfig:Os,loadFeishuConfig:Ia,loadSystemStatus:Na,loadAiConfig:ya,aiVendors:lo,aiCatalog:io,aiModelsError:oo,testingAllModels:ro,savingAiModels:co,loadAiVendors:ha,loadAiCatalog:ys,saveAiVendors:bs,saveAiModels:bs,testVendorModel:vo,testAllVendorModels:mo,fetchVendorModels:fo,addVendorFromCatalog:po,addCustomVendor:go,addVendorModel:ho,removeVendorModel:yo,removeVendor:bo,toggleVendorKeyReveal:wo,toggleVendorEdit:_o,checkTushareConnection:La,datasourceConfig:xc,datasourceStatus:Sc,loadDatasourceConfig:js,saveDatasourceConfig:Hc,testDatasource:Bc,toggleDatasourceKeyReveal:Kc,toggleDatasourceEdit:Wc,strategyFilter:wt,strategyFilterOptions:jt,strategyFilterCounts:qt,strategyPreviewCount:Bi,saveStrategyFilter:Ki,filteredConsensusRank:Wi,currentPoolSize:Ui,filteredStrategyCounts:Gi,strategyDistribution:Hi,expandedStrategies:Lt,poolChangeBadge:Yi,timeBarPercent:Qi,navigateToStrategyFilter:Ji,showUserMenu:y,toggleSidebar:l,groupsConfig:f,loadGroupConfig:E,editingGroup:ii,groupEditForm:ci,showAddGroup:ui,addGroupForm:vi,savingGroup:mi,menuConfigDialog:oi,memberDialog:ri,groupMembers:fi,addMemberUsername:pi,selectedMemberGroup:gi,subPageSectionExpanded:hi,toggleSubPageSection:yi,getGroupMemberCount:bi,getMenuEnabledCount:wi,groupCount:_i,openMemberManager:ki,loadGroupMembers:xi,addMemberToGroup:Si,removeMemberFromGroup:Ci,availableUsersForGroup:qi,subPageCache:di,onParentToggle:Ei,openMenuConfig:Mi,saveMenuConfig:Ti,deleteGroupConfig:Pi,createGroup:Di,changePasswordForm:Yc,changingPassword:Qc,doChangePassword:nd,showSetupWizard:Ks,setupForm:Jc,setupStep:$c,checkSetupWizard:Xc,completeSetupWizard:Zc,chatSessions:fl,chatHistoryView:pl,selectedChatIds:gl,expandedChatDates:hl,expandedChatMonths:yl,expandedChatStocks:bl,chatHistoryLoading:wl,chatHistoryError:_l,allChatSessionsFlat:kl,chatGroupedByDate:xl,chatGroupedByMonth:Sl,chatGroupedByStock:Cl,toggleSelectChat:ql,toggleSelectChatDate:El,toggleSelectChatMonth:Ml,toggleSelectChatStock:Tl,toggleChatDateExpand:Pl,toggleChatMonthExpand:Dl,toggleChatStockExpand:Rl,selectAllChatSessions:zl,deleteSelectedChatSessions:Al,viewChatSession:Ll,loadChatHistory:rs,deleteChatSession:Il,renderMarkdown:Nl,stockChatInput:Ol,stockChatMessages:jl,stockChatLoading:Vl,stockChatError:Fl,askStockSend:Hl,askStockQuick:Bl,onTouchStart:wn,onTouchEnd:_n,hapticFeedback:q};let at=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(at=window.QuantStateRegistry.createStateRegistry(),at.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),at.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),at.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),at.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),at.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),at.attach("theme","currentTheme",zt),at.attach("theme","themeMode",Nt),at.attach("theme","themeHue",It),at.attach("theme","density",Ct),at.attach("theme","currentKlinePeriod",Dt),at.attach("auth","currentUser",V),at.attach("auth","loginForm",Fs),at.attach("auth","logining",Hs),at.attach("auth","guestLogining",Bs),at.attach("auth","showSetupWizard",Ks),at.attach("prefs","navMode",F),at.attach("prefs","detailDisplayMode",gt),at.attach("prefs","splitWidth",Qe),at.attach("prefs","sidebarCollapsed",u),at.attach("prefs","klineShowMinutes",Qt),at.attach("ui","currentPage",A),at.attach("ui","currentSubPage",R),at.attach("ui","currentView",Ce),at.attach("ui","showUserMenu",y),at.attach("ui","searchKeyword",rt),at.attach("ui","shortcutHelpVisible",ls),at.attach("ui","commandPaletteVisible",is),at.attach("page","loading",Ha),at.attach("page","dates",va),at.attach("page","selectedDate",Ft),at.attach("page","consensus",ia),at.attach("page","dashboardData",O),at.attach("page","lastLoadTime",Ba),Ws.stateRegistry=at),Ws}})();na.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=jv;window.__quantComponents.Header=jm;window.__quantComponents.SubNav=Xm;window.__quantComponents.MobileNav=yf;window.__quantComponents.StockList=Xf;window.__quantComponents.DetailSplit=ap;window.__quantComponents.TopTabs=up;window.__quantComponents.AppIcon=na;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default vp();
