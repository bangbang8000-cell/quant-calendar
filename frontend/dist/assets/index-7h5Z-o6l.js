var yd=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);import{aV as bd,L as ge,O as Ut,Z as wd,au as Et,M as ke,P as De,aW as kd,a0 as Be,_ as Ke,F as ut,al as bt,S as ct,a1 as mt,X as Wt,ai as St,q as ra,o as wa,a8 as Fa,r as _t,e as ot,av as _d,Y as fa,$ as sa,R as xd,aC as Kt,T as Sd,Q as Ft,p as Cd,n as qd}from"./vendor-vue-DDF9zi1T.js";import{e as Ed,E as Md,a as Dd,b as Td,c as Pd,z as Rd}from"./vendor-ep-VOop1zGa.js";import{C as Ad,a as zd,W as Ld,I as Id,S as Nd,B as Od,F as Fd,b as jd,c as Vd,d as Hd,e as Bd,f as Kd,P as Wd,g as Ud,h as Gd,i as Yd,T as Qd,j as Jd,L as $d,k as Xd,G as Zd,U as eu,l as tu,m as au,n as su,D as nu,o as lu,p as iu,M as ou,q as ru,R as cu,r as du,s as uu,K as vu,t as mu,u as pu,v as fu,w as gu,x as hu,y as yu,z as bu,A as wu,E as ku,H as _u,O as xu,J as Su,N as Cu,Q as qu,V as Eu,X as Mu,Y as Du,Z as Tu,_ as Pu,$ as Ru,a0 as Au,a1 as zu,a2 as Lu,a3 as Iu,a4 as Nu,a5 as Ou,a6 as Fu,a7 as ju,a8 as Vu,a9 as Hu,aa as Bu,ab as Ku,ac as Wu,ad as Uu,ae as Gu,af as Yu,ag as Qu,ah as Ju,ai as $u,aj as Xu,ak as Zu,al as ev,am as tv,an as av,ao as sv,ap as nv,aq as lv,ar as iv,as as ov,at as rv,au as cv,av as dv,aw as uv,ax as vv,ay as mv,az as pv,aA as fv,aB as gv,aC as hv,aD as yv,aE as bv,aF as wv,aG as kv,aH as _v,aI as xv,aJ as Sv,aK as Cv,aL as qv,aM as Ev,aN as Mv,aO as Dv,aP as Tv,aQ as Pv}from"./vendor-lucide-DidEUx9K.js";var kf=yd((Rf,Re)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function v(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(r){if(r.ep)return;r.ep=!0;const d=v(r);fetch(r.href,d)}})();window.Vue=bd;const Gt=Ed||{};window.ElementPlus=Gt;Gt.ElMessage=Gt.ElMessage||Md;Gt.ElMessageBox=Gt.ElMessageBox||Dd;Gt.ElNotification=Gt.ElNotification||Td;Gt.ElLoading=Gt.ElLoading||Pd;window.ElementPlusLocaleZhCn={default:Rd};(function(){const s=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},v={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(a,E,n){return"hsl("+a+", "+E+"%, "+n+"%)"}function r(a,E,n){E=E/100,n=n/100;const p=function(x){return(x+a/30)%12},J=E*Math.min(n,1-n),N=function(x){return n-J*Math.max(-1,Math.min(p(x)-3,Math.min(9-p(x),1)))};return Math.round(255*N(0))+", "+Math.round(255*N(8))+", "+Math.round(255*N(4))}const d=5;function b(a,E,n){return r(a,E,n).split(",").map(function(p){return parseInt(p,10)})}function o(a){const E=function(n){return n=n/255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*E(a[0])+.7152*E(a[1])+.0722*E(a[2])}function l(a,E){const n=o(a),p=o(E),J=Math.max(n,p),N=Math.min(n,p);return(J+.05)/(N+.05)}function g(a,E,n){for(var p=8,J=92,N=0;N<26;N++){var x=(p+J)/2;o(b(a,E,x))<n?p=x:J=x}return Math.round(J*10)/10}function c(a,E,n,p,J){let N=38,x=76;for(let m=0;m<24;m++){const A=(N+x)/2;l(b(a,p,A),b(a,E,n))>=J?x=A:N=A}return Math.round(x*10)/10}function P(a,E){var n={};return E==="light"?(n["--qc-neutral-50"]=t(a,18,98),n["--qc-neutral-100"]=t(a,16,95),n["--qc-neutral-200"]=t(a,14,90),n["--qc-neutral-300"]=t(a,12,83),n["--qc-neutral-400"]=t(a,10,68),n["--qc-neutral-500"]=t(a,10,53),n["--qc-neutral-600"]=t(a,10,40),n["--qc-neutral-700"]=t(a,10,30),n["--qc-neutral-800"]=t(a,10,20),n["--qc-neutral-900"]=t(a,10,12),n["--qc-background"]=t(a,18,98),n["--qc-muted"]=t(a,16,95),n["--qc-border"]=t(a,12,72),n["--chart-axis"]=t(a,12,55),n["--chart-split"]=t(a,10,88),n["--qc-foreground"]=t(a,10,12),n["--qc-muted-foreground"]=t(a,9,38),n["--qc-nav-item-default"]=t(a,9,38),n["--qc-nav-item-hover"]=t(a,10,12),n["--qc-nav-group-label"]=t(a,9,40),n["--qc-nav-bg"]="#ffffff",n["--bg-page"]=t(a,20,97),n["--bg-stripe"]=t(a,20,97),n["--bg-card-header"]=t(a,24,96),n["--card-gradient-header"]="linear-gradient(135deg, "+t(a,24,96)+" 0%, #ffffff 100%)",n["--bg-hover"]=t(a,26,94),n["--bg-tertiary"]=t(a,14,93),n["--badge-gold-bg"]=t(a,26,96),n["--gold-bg"]=t(a,20,97),n["--border-light"]=t(a,22,89),n["--border-base"]=t(a,24,79),n["--border-color"]=t(a,14,88),n["--text-primary"]=t(a,12,12),n["--text-secondary"]=t(a,12,32),n["--text-tertiary"]=t(a,14,40),n["--text-disabled"]=t(a,9,k(a,9,T(a,18,98),25,70,!0,3.2)),n["--qc-card"]="#ffffff",n["--qc-popover"]="#ffffff",n["--qc-nav-border"]=t(a,12,72),n["--qc-nav-item-hover-bg"]=t(a,16,95),n["--qc-overlay"]="rgba(31, 29, 26, 0.5)",n["--bg-card"]="#ffffff",n["--surface"]="#ffffff",n["--border-heavy"]=t(a,22,72),n["--surface-canvas"]=t(a,18,98),n["--surface-card"]="#ffffff",n["--surface-raised"]="#ffffff",n["--surface-sunken"]=t(a,16,96),n["--surface-input"]="#ffffff",n["--surface-hover"]=t(a,26,94),n["--border-strong"]=t(a,22,72),n["--scrollbar-thumb"]="rgba("+r(a,12,72)+", 0.5)",n["--bg-page-rgb"]=r(a,20,97)):(n["--qc-background"]=t(a,10,8),n["--qc-card"]=t(a,11,11),n["--qc-popover"]=t(a,11,11),n["--qc-muted"]=t(a,12,14),n["--qc-border"]=t(a,14,30),n["--chart-axis"]=t(a,16,52),n["--chart-split"]=t(a,14,26),n["--qc-nav-bg"]=t(a,10,9),n["--qc-nav-border"]=t(a,13,22),n["--qc-nav-item-hover-bg"]=t(a,12,14),n["--bg-page"]=t(a,10,8),n["--bg-card"]=t(a,11,11),n["--bg-card-header"]=t(a,12,14),n["--bg-stripe"]=t(a,10,9),n["--bg-hover"]=t(a,12,14),n["--bg-tertiary"]=t(a,12,14),n["--border-light"]=t(a,13,18),n["--border-base"]=t(a,14,26),n["--border-heavy"]=t(a,16,38),n["--border-color"]=t(a,13,22),n["--surface"]=t(a,11,11),n["--surface-canvas"]=t(a,10,8),n["--surface-card"]=t(a,11,11),n["--surface-raised"]=t(a,12,14),n["--surface-sunken"]=t(a,12,9),n["--surface-input"]=t(a,12,9),n["--surface-hover"]=t(a,12,15),n["--border-strong"]=t(a,16,42),n["--scrollbar-thumb"]="rgba("+r(a,16,52)+", 0.5)",n["--bg-page-rgb"]=r(a,10,8),n["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),n}const _=4.6;var M=[255,255,255];function S(a){return r(a,10,8).split(",").map(function(E){return parseInt(E,10)})}function k(a,E,n,p,J,N,x){for(var m=x||_,A=p,w=J,j=0;j<24;j++){var te=(A+w)/2,re=l(b(a,E,te),n)>=m;N?re?A=te:w=te:re?w=te:A=te}return Math.round((N?A:w)*10)/10}function T(a,E,n){return r(a,E,n).split(",").map(function(p){return parseInt(p,10)})}function C(a){const E=g(a,75,.18),n=g(a,75,.26),p=g(a,70,.36),J=g(a,85,.12),N=r(a,75,E),x=k(a,68,M,14,62,!0),m=Math.max(12,x-5),A=Math.max(10,x-11),w=r(a,16,95).split(",").map(function(le){return parseInt(le,10)}),j=r(a,85,92).split(",").map(function(le){return parseInt(le,10)}),te=k(a,78,w,10,58,!0,4.6),re=k(a,80,j,10,58,!0,4.6),se=Math.min(32,k(a,80,M,8,60,!0,4.6));return{...P(a,"light"),"--primary-color":t(a,75,E),"--primary-rgb":N,"--color-primary":t(a,75,E),"--qc-primary":t(a,75,E),"--qc-primary-50":t(a,90,96),"--qc-primary-100":t(a,85,92),"--qc-primary-200":t(a,80,84),"--qc-primary-300":t(a,75,72),"--qc-primary-400":t(a,70,p),"--qc-primary-500":t(a,75,n),"--qc-primary-600":t(a,80,E),"--qc-primary-700":t(a,85,J),"--qc-primary-800":t(a,88,28),"--qc-primary-900":t(a,90,20),"--text-link":t(a,78,te),"--secondary-color":t(a,70,55),"--card-border":t(a,22,80),"--bg-selected":"rgba("+N+", 0.08)","--btn-primary-bg":t(a,80,se),"--btn-primary-border":t(a,80,se),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(a,82,28),"--btn-primary-hover-border":t(a,82,28),"--btn-primary-active-bg":t(a,85,24),"--btn-primary-active-border":t(a,85,24),"--btn-primary-plain-bg":"rgba("+N+", 0.08)","--btn-primary-plain-border":"rgba("+N+", 0.25)","--btn-primary-plain-color":t(a,80,te),"--btn-primary-plain-hover-bg":"rgba("+N+", 0.15)","--btn-primary-plain-hover-border":t(a,80,32),"--btn-primary-text-color":t(a,80,te),"--gradient-brand":"linear-gradient(135deg, "+t(a,76,m)+" 0%, "+t(a,85,A)+" 100%)","--primary-text":t(a,78,te),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,62,Math.min(74,c(a,45,14,58,d)+5))+" 0%, "+t(a,58,c(a,45,14,58,d))+" 100%)","--panel-fg":t(a,45,14),"--qc-nav-item-active":t(a,80,re),"--qc-nav-item-active-bg":t(a,85,92),"--qc-nav-item-active-border":t(a,75,48),"--qc-nav-badge-bg":t(a,85,92),"--qc-nav-badge-text":t(a,80,re),"--qc-ring":t(a,75,k(a,75,T(a,18,98),25,70,!0,3.2)),"--brand-soft-text":t(a,80,k(a,80,T(a,80,84),10,58,!0,4.6)),"--border-control":t(a,16,k(a,16,T(a,18,98),30,80,!0,3.2))}}function u(a){const E=g(a,85,.34),n=g(a,85,.46),p=r(a,85,E),J=k(a,80,S(a),30,92,!1),N=Math.min(96,J+16),x=T(a,55,22),m=T(a,10,9),A=p.split(",").map(function(le){return parseInt(le,10)}),w=[0,1,2].map(function(le){return Math.round(A[le]*.12+m[le]*.88)}),j=k(a,85,w,45,96,!1,4.6),te=k(a,85,x,45,96,!1,4.6),re=Math.min(94,k(a,92,x,45,96,!1,4.6)),se=Math.min(96,re+6);return{...P(a,"dark"),"--primary-color":t(a,85,E),"--primary-rgb":p,"--color-primary":t(a,85,E),"--qc-primary":t(a,90,E),"--qc-primary-50":t(a,50,18),"--qc-primary-100":t(a,55,22),"--qc-primary-200":t(a,55,26),"--qc-primary-300":t(a,60,30),"--qc-primary-400":t(a,65,38),"--qc-primary-500":t(a,85,n),"--qc-primary-600":t(a,90,E),"--qc-primary-700":t(a,92,re),"--qc-primary-800":t(a,90,se),"--qc-primary-900":t(a,92,Math.min(98,se+8)),"--text-link":t(a,85,te),"--secondary-color":t(a,70,60),"--card-border":t(a,30,25),"--bg-selected":"rgba("+p+", 0.10)","--btn-primary-bg":t(a,85,65),"--btn-primary-border":t(a,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(a,80,72),"--btn-primary-hover-border":t(a,80,72),"--btn-primary-active-bg":t(a,75,80),"--btn-primary-active-border":t(a,75,80),"--btn-primary-plain-bg":"rgba("+p+", 0.08)","--btn-primary-plain-border":"rgba("+p+", 0.25)","--btn-primary-plain-color":t(a,85,te),"--btn-primary-plain-hover-bg":"rgba("+p+", 0.15)","--btn-primary-plain-hover-border":t(a,85,65),"--btn-primary-text-color":t(a,85,te),"--gradient-brand":"linear-gradient(135deg, "+t(a,85,N)+" 0%, "+t(a,80,J)+" 100%)","--primary-text":t(a,85,te),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,60,Math.min(76,c(a,40,12,55,d)+5))+" 0%, "+t(a,55,c(a,40,12,55,d))+" 100%)","--panel-fg":t(a,40,12),"--qc-nav-item-active":t(a,85,j),"--qc-nav-item-active-bg":"rgba("+p+", 0.10)","--qc-nav-item-active-border":t(a,85,65),"--qc-nav-badge-bg":"rgba("+p+", 0.12)","--qc-nav-badge-text":t(a,85,j),"--border-control":t(a,16,k(a,16,T(a,11,11),25,70,!1,3.2)),"--brand-soft-text":t(a,85,k(a,85,T(a,55,26),45,96,!1,4.6)),"--qc-ring":t(a,85,65)}}var i=[],f={mode:"light",hue:45},R=!1;function L(a,E){try{var n=document.querySelector('meta[name="theme-color"]');if(!n)return;var p=E?a["--surface-canvas"]||a["--qc-background"]:a["--btn-primary-bg"]||a["--qc-primary"];p&&n.setAttribute("content",p)}catch{}}function y(){if(!(R||typeof window>"u"||!window.matchMedia)){var a=window.matchMedia("(prefers-color-scheme: dark)"),E=function(){f.mode==="system"&&X("system",f.hue)};a.addEventListener?a.addEventListener("change",E):a.addListener&&a.addListener(E),R=!0}}function D(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var I=-1;function V(a){return a=parseInt(a,10),isNaN(a)?45:a<0?I:Math.max(0,Math.min(359,a))}function O(a){return Object.keys(a).forEach(function(E){var n=a[E];if(typeof n=="string"){n.indexOf("hsl(")>=0&&(n=n.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(m,A){return"hsl("+A+", 0%"}));var p=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(n);if(p){var J=Math.round(.2126*+p[1]+.7152*+p[2]+.0722*+p[3]);n="rgba("+J+", "+J+", "+J+(p[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(n)){var N=n.split(",").map(function(m){return parseInt(m,10)}),x=Math.round(.2126*N[0]+.7152*N[1]+.0722*N[2]);n=x+", "+x+", "+x}a[E]=n}}),a}function F(a,E){var n=T(45,0,E?22:95),p=T(45,0,E?8:98),J=T(45,0,E?11:100),N=E?k(45,0,n,45,96,!1,4.6):k(45,0,n,10,58,!0,4.6),x=T(45,0,E?22:92),m=E?k(45,0,x,45,96,!1,4.6):k(45,0,x,10,58,!0,4.6),A=E?k(45,0,p,45,96,!1,3.2):k(45,0,p,25,70,!0,3.2),w=E?k(45,0,J,25,70,!1,3.2):k(45,0,p,30,80,!0,3.2),j=E?k(45,0,T(45,0,26),45,96,!1,4.6):k(45,0,T(45,0,84),10,58,!0,4.6);a["--brand-soft-text"]="hsl(45, 0%, "+j+"%)";var te="hsl(45, 0%, "+N+"%)";if(a["--primary-text"]=te,a["--text-link"]=te,a["--btn-primary-text-color"]=te,a["--btn-primary-plain-color"]=te,a["--qc-nav-item-active"]="hsl(45, 0%, "+m+"%)",a["--qc-nav-badge-text"]="hsl(45, 0%, "+m+"%)",a["--qc-ring"]="hsl(45, 0%, "+A+"%)",a["--border-control"]="hsl(45, 0%, "+w+"%)",E){var re=k(45,0,T(45,0,8),30,92,!1,4.6),se=Math.min(96,re+16);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+se+"%) 0%, hsl(45, 0%, "+re+"%) 100%)"}else{var le=k(45,0,M,14,62,!0,4.6),Y=Math.max(12,le-5),ie=Math.max(10,le-11);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+Y+"%) 0%, hsl(45, 0%, "+ie+"%) 100%)"}var qe=c(45,0,14,0,d);return a["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,qe+5)+"%) 0%, hsl(45, 0%, "+qe+"%) 100%)",a["--panel-fg"]="hsl(45, 0%, 14%)",a}function X(a,E){let n=a||"light",p=E==null||E===""?null:E;if(e[a]){const j=e[a];n=j[0],p==null&&(p=j[1])}n==="system"&&(n=D()?"dark":"light");const J=n==="dark";p=V(p??45);const N=p===I,x=document.documentElement;x.setAttribute("data-theme",J?"dark-pro":"gold"),x.setAttribute("data-theme-mode",J?"dark":"light"),x.setAttribute("data-theme-neutral",N?"true":"false");let m=J?u(N?45:p):C(N?45:p);N&&(m=F(O(m),J));for(var A=Object.keys(m),w=0;w<i.length;w++)A.indexOf(i[w])===-1&&x.style.removeProperty(i[w]);A.forEach(function(j){x.style.setProperty(j,m[j])}),i=A,f.mode=typeof a=="string"&&a?a:"light",f.hue=p,L(m,J);try{localStorage.setItem("quant_theme_mode",J?"dark":"light"),localStorage.setItem("quant_theme_hue",String(p))}catch{}return{mode:J?"dark":"light",hue:p}}function U(){try{var a=localStorage.getItem("quant_theme_hue");if(a!==null&&a!=="")return V(a)}catch{}var E=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(E&&E.getPreference){var n=E.getPreference("theme_hue");if(n!=null&&n!=="")return V(n)}return null}function H(a){var E=U();return X(a,E??void 0)}function K(){const a=localStorage.getItem("quant_theme");if(!a||!e[a]||localStorage.getItem("quant_theme_hue")!==null)return null;const E=e[a];return{mode:E[0],hue:E[1]}}function q(){const a=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let E=a.theme||"system",n=a.theme_hue!=null&&a.theme_hue!==""?a.theme_hue:null;const p=K();return n==null&&p&&(E=p.mode,n=p.hue),n==null&&(n=45),y(),X(E,n)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:s,LEGACY_MAP:e,legacyThemes:v,NEUTRAL_HUE:I,generateLightTokens:C,generateDarkTokens:u,migrateLegacyTheme:K,persistedHue:U,applyLegacyTheme:H,applyTheme:X,init:q},typeof queueMicrotask=="function"?queueMicrotask(q):q()})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const s="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],v={};let t=s,r=null;function d(){return r&&typeof r=="object"&&"value"in r?r.value||s:t}function b(_,M){return e.indexOf(_)===-1?!1:(v[_]=M&&typeof M=="object"?M:{},!0)}function o(_){const M=e.indexOf(_)!==-1?_:s;return t=M,r&&typeof r=="object"&&"value"in r&&(r.value=M),typeof document<"u"&&document.documentElement.setAttribute("lang",M),t}function l(){return d()}function g(_){if(_&&typeof _=="object"&&"value"in _){r=_;const M=e.indexOf(_.value)!==-1?_.value:s;_.value=M,t=M}return t}function c(_,M){const S=d(),k=v[S]||{};let T=_ in k?k[_]:null;if(T==null&&S!=="en"){const C=v.en||{};T=_ in C?C[_]:null}return T==null&&(T=String(_)),M&&typeof M=="object"&&Object.keys(M).forEach(function(C){T=T.replace(new RegExp("\\{"+C+"\\}","g"),String(M[C]))}),T}const P={DEFAULT_LOCALE:s,SUPPORTED_LOCALES:e,messages:v,registerLocale:b,setLocale:o,getLocale:l,bindLocale:g,t:c};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=P),P});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度","state.overviewError":"总览数据加载失败","state.merrillError":"美林时钟数据加载失败","state.marketError":"行情数据加载失败","state.consensusError":"共识榜加载失败","state.strategiesError":"策略研究数据加载失败","state.strategiesManageError":"策略加载失败","state.backtestError":"回测失败","state.intradayError":"盘中快照加载失败","state.freshnessError":"数据新鲜度加载失败","state.healthDetailError":"调度任务数据加载失败","state.factCheckError":"事实护栏数据加载失败","state.notificationError":"通知中心数据加载失败","state.featureConfigError":"基础配置数据加载失败","state.usageError":"用量统计数据加载失败","state.emptyMarket":"暂无行情数据","state.emptyFocus":"暂无重点跟踪数据","state.emptyFreshness":"暂无数据新鲜度记录","state.emptyPool":"暂无涨跌停池数据","state.emptyStrategyResearch":"暂无策略研究数据","state.emptyStrategyManage":"暂无可管理的策略","state.emptyStrategy":"暂无策略","state.emptyDictField":"暂无字段数据","state.descNetworkOrService":"请检查网络或服务后重试","state.descNetwork":"请检查网络后重试","state.descService":"请检查服务后重试","state.descBacktest":"请检查策略与日期范围后重试","state.descEmptyMarket":"当前无指数行情返回，可稍后重试","state.descEmptyFocus":"当前日期/时段暂无评估结果，可切换日期或时段","state.descEmptyFreshness":"接口未返回任何数据表，可点击刷新重试","state.descEmptyPool":"当前交易日三池为空，可切换交易日或刷新重试","state.descEmptyStrategyResearch":"先去「量化研究」加载策略注册表，或创建自定义策略","state.descEmptyStrategyManage":"先复制母本创建微调策略，或用 AI 代写全新策略","state.descEmptyStrategy":"策略注册表为空，请检查后端策略目录或创建自定义策略","state.descEmptyDictField":"当前分类没有字典字段，可切换分类或点击刷新","state.descRetryDict":"点击重试重新加载数据字典","state.descRetryHealth":"点击重试重新加载健康与可靠性数据","state.descAiModels":"厂商模型配置获取失败，可重试","a11y.watchlistList":"自选股列表","a11y.reviewDateList":"复盘日期列表","a11y.dailyReviewList":"每日复盘列表","a11y.shorttermDateList":"复盘日历日期列表","a11y.selectWatchStock":"选择 {code} {name}","a11y.viewMarketReview":"查看 {date} 市场复盘","msg.runFailed":"运行失败: {msg}","msg.exportFailed":"导出失败: {msg}","msg.factorIcFailed":"因子 IC 分析失败: {msg}","msg.layerBacktest":"分层回测: {msg}","msg.layerBacktestFailed":"分层回测失败: {msg}","msg.factorDetail":"因子详情: {msg}","msg.factorDetailFailed":"因子详情失败: {msg}","msg.noData":"无数据"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",s),s});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness","state.overviewError":"Failed to load overview data","state.merrillError":"Failed to load Merrill clock data","state.marketError":"Failed to load market data","state.consensusError":"Failed to load consensus ranking","state.strategiesError":"Failed to load strategy research data","state.strategiesManageError":"Failed to load strategies","state.backtestError":"Backtest failed","state.intradayError":"Failed to load intraday snapshot","state.freshnessError":"Failed to load data freshness","state.healthDetailError":"Failed to load scheduled tasks","state.factCheckError":"Failed to load fact guard data","state.notificationError":"Failed to load notification center","state.featureConfigError":"Failed to load feature configuration","state.usageError":"Failed to load usage statistics","state.emptyMarket":"No market data","state.emptyFocus":"No focus tracking data","state.emptyFreshness":"No data freshness records","state.emptyPool":"No limit-up/down pool data","state.emptyStrategyResearch":"No strategy research data","state.emptyStrategyManage":"No strategies to manage","state.emptyStrategy":"No strategies","state.emptyDictField":"No field data","state.descNetworkOrService":"Check the network or service and retry","state.descNetwork":"Check the network and retry","state.descService":"Check the service and retry","state.descBacktest":"Check the strategy and date range, then retry","state.descEmptyMarket":"No index quotes returned; try again later","state.descEmptyFocus":"No evaluation results for this date/session; switch date or session","state.descEmptyFreshness":"The API returned no tables; click refresh to retry","state.descEmptyPool":"All three pools are empty for this trading day; switch day or refresh","state.descEmptyStrategyResearch":"Load the strategy registry in Quant Research first, or create a custom strategy","state.descEmptyStrategyManage":"Copy a template to create a tuned strategy, or let AI write a new one","state.descEmptyStrategy":"The strategy registry is empty; check the backend strategy directory or create a custom strategy","state.descEmptyDictField":"This category has no dictionary fields; switch category or refresh","state.descRetryDict":"Click retry to reload the data dictionary","state.descRetryHealth":"Click retry to reload health and reliability data","state.descAiModels":"Failed to fetch vendor model configuration; you can retry","a11y.watchlistList":"Watchlist","a11y.reviewDateList":"Review date list","a11y.dailyReviewList":"Daily review list","a11y.shorttermDateList":"Review calendar date list","a11y.selectWatchStock":"Select {code} {name}","a11y.viewMarketReview":"View market review for {date}","msg.runFailed":"Run failed: {msg}","msg.exportFailed":"Export failed: {msg}","msg.factorIcFailed":"Factor IC analysis failed: {msg}","msg.layerBacktest":"Layer backtest: {msg}","msg.layerBacktestFailed":"Layer backtest failed: {msg}","msg.factorDetail":"Factor detail: {msg}","msg.factorDetailFailed":"Factor detail failed: {msg}","msg.noData":"No data"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",s),s});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.Quantja=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度","state.overviewError":"概要データの読み込みに失敗しました","state.merrillError":"メリルクロックデータの読み込みに失敗しました","state.marketError":"相場データの読み込みに失敗しました","state.consensusError":"コンセンサスランキングの読み込みに失敗しました","state.strategiesError":"戦略リサーチデータの読み込みに失敗しました","state.strategiesManageError":"戦略の読み込みに失敗しました","state.backtestError":"バックテストに失敗しました","state.intradayError":"場中スナップショットの読み込みに失敗しました","state.freshnessError":"データ鮮度の読み込みに失敗しました","state.healthDetailError":"スケジュールタスクの読み込みに失敗しました","state.factCheckError":"ファクトガードデータの読み込みに失敗しました","state.notificationError":"通知センターの読み込みに失敗しました","state.featureConfigError":"機能設定の読み込みに失敗しました","state.usageError":"利用統計の読み込みに失敗しました","state.emptyMarket":"相場データがありません","state.emptyFocus":"重点ウォッチのデータがありません","state.emptyFreshness":"データ鮮度の記録がありません","state.emptyPool":"ストップ高/安プールのデータがありません","state.emptyStrategyResearch":"戦略リサーチのデータがありません","state.emptyStrategyManage":"管理できる戦略がありません","state.emptyStrategy":"戦略がありません","state.emptyDictField":"フィールドデータがありません","state.descNetworkOrService":"ネットワークまたはサービスを確認して再試行してください","state.descNetwork":"ネットワークを確認して再試行してください","state.descService":"サービスを確認して再試行してください","state.descBacktest":"戦略と期間を確認して再試行してください","state.descEmptyMarket":"指数の相場が返されていません。後でもう一度お試しください","state.descEmptyFocus":"この日付/時間帯の評価結果がありません。日付や時間帯を切り替えてください","state.descEmptyFreshness":"API がテーブルを返していません。更新をクリックして再試行してください","state.descEmptyPool":"この取引日の3プールは空です。取引日を切り替えるか更新してください","state.descEmptyStrategyResearch":"先に「量子リサーチ」で戦略レジストリを読み込むか、カスタム戦略を作成してください","state.descEmptyStrategyManage":"テンプレートを複製して調整した戦略を作成するか、AI に新規作成させてください","state.descEmptyStrategy":"戦略レジストリが空です。バックエンドの戦略ディレクトリを確認するか、カスタム戦略を作成してください","state.descEmptyDictField":"このカテゴリには辞書フィールドがありません。カテゴリを切り替えるか更新してください","state.descRetryDict":"クリックして再試行し、データ辞書を再読み込みします","state.descRetryHealth":"クリックして再試行し、ヘルスと信頼性データを再読み込みします","state.descAiModels":"ベンダーモデル設定の取得に失敗しました。再試行できます","a11y.watchlistList":"ウォッチリスト","a11y.reviewDateList":"振り返り日付リスト","a11y.dailyReviewList":"日次振り返りリスト","a11y.shorttermDateList":"振り返りカレンダーの日付リスト","a11y.selectWatchStock":"{code} {name} を選択","a11y.viewMarketReview":"{date} の市場振り返りを表示","msg.runFailed":"実行に失敗しました: {msg}","msg.exportFailed":"エクスポートに失敗しました: {msg}","msg.factorIcFailed":"ファクター IC 分析に失敗しました: {msg}","msg.layerBacktest":"レイヤーバックテスト: {msg}","msg.layerBacktestFailed":"レイヤーバックテストに失敗しました: {msg}","msg.factorDetail":"ファクター詳細: {msg}","msg.factorDetailFailed":"ファクター詳細の取得に失敗しました: {msg}","msg.noData":"データなし"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",s),s});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.Quantko=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도","state.overviewError":"개요 데이터 로드 실패","state.merrillError":"메릴 클록 데이터 로드 실패","state.marketError":"시세 데이터 로드 실패","state.consensusError":"컨센서스 순위 로드 실패","state.strategiesError":"전략 리서치 데이터 로드 실패","state.strategiesManageError":"전략 로드 실패","state.backtestError":"백테스트 실패","state.intradayError":"장중 스냅샷 로드 실패","state.freshnessError":"데이터 신선도 로드 실패","state.healthDetailError":"예약 작업 데이터 로드 실패","state.factCheckError":"팩트 가드 데이터 로드 실패","state.notificationError":"알림 센터 데이터 로드 실패","state.featureConfigError":"기능 설정 데이터 로드 실패","state.usageError":"사용량 통계 데이터 로드 실패","state.emptyMarket":"시세 데이터 없음","state.emptyFocus":"중점 추적 데이터 없음","state.emptyFreshness":"데이터 신선도 기록 없음","state.emptyPool":"상한가/하한가 풀 데이터 없음","state.emptyStrategyResearch":"전략 리서치 데이터 없음","state.emptyStrategyManage":"관리할 전략 없음","state.emptyStrategy":"전략 없음","state.emptyDictField":"필드 데이터 없음","state.descNetworkOrService":"네트워크 또는 서비스를 확인한 후 다시 시도하세요","state.descNetwork":"네트워크를 확인한 후 다시 시도하세요","state.descService":"서비스를 확인한 후 다시 시도하세요","state.descBacktest":"전략과 날짜 범위를 확인한 후 다시 시도하세요","state.descEmptyMarket":"지수 시세가 반환되지 않았습니다. 나중에 다시 시도하세요","state.descEmptyFocus":"해당 날짜/시간대에 평가 결과가 없습니다. 날짜나 시간대를 전환하세요","state.descEmptyFreshness":"API가 테이블을 반환하지 않았습니다. 새로고침을 눌러 다시 시도하세요","state.descEmptyPool":"해당 거래일의 세 풀이 비어 있습니다. 거래일을 전환하거나 새로고침하세요","state.descEmptyStrategyResearch":"먼저 「양자 리서치」에서 전략 레지스트리를 로드하거나 사용자 전략을 만드세요","state.descEmptyStrategyManage":"템플릿을 복사해 조정 전략을 만들거나 AI로 새로 작성하세요","state.descEmptyStrategy":"전략 레지스트리가 비어 있습니다. 백엔드 전략 디렉터리를 확인하거나 사용자 전략을 만드세요","state.descEmptyDictField":"이 분류에는 사전 필드가 없습니다. 분류를 전환하거나 새로고침하세요","state.descRetryDict":"클릭하여 다시 시도해 데이터 사전을 다시 로드합니다","state.descRetryHealth":"클릭하여 다시 시도해 상태 및 신뢰성 데이터를 다시 로드합니다","state.descAiModels":"공급업체 모델 설정을 가져오지 못했습니다. 다시 시도할 수 있습니다","a11y.watchlistList":"관심종목 목록","a11y.reviewDateList":"복기 날짜 목록","a11y.dailyReviewList":"일일 복기 목록","a11y.shorttermDateList":"복기 캘린더 날짜 목록","a11y.selectWatchStock":"{code} {name} 선택","a11y.viewMarketReview":"{date} 시장 복기 보기","msg.runFailed":"실행 실패: {msg}","msg.exportFailed":"내보내기 실패: {msg}","msg.factorIcFailed":"팩터 IC 분석 실패: {msg}","msg.layerBacktest":"레이어 백테스트: {msg}","msg.layerBacktestFailed":"레이어 백테스트 실패: {msg}","msg.factorDetail":"팩터 상세: {msg}","msg.factorDetailFailed":"팩터 상세 실패: {msg}","msg.noData":"데이터 없음"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",s),s});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度","state.overviewError":"總覽資料載入失敗","state.merrillError":"美林時鐘資料載入失敗","state.marketError":"行情資料載入失敗","state.consensusError":"共識榜載入失敗","state.strategiesError":"策略研究資料載入失敗","state.strategiesManageError":"策略載入失敗","state.backtestError":"回測失敗","state.intradayError":"盤中快照載入失敗","state.freshnessError":"資料新鮮度載入失敗","state.healthDetailError":"排程任務資料載入失敗","state.factCheckError":"事實護欄資料載入失敗","state.notificationError":"通知中心資料載入失敗","state.featureConfigError":"基礎配置資料載入失敗","state.usageError":"用量統計資料載入失敗","state.emptyMarket":"暫無行情資料","state.emptyFocus":"暫無重點追蹤資料","state.emptyFreshness":"暫無資料新鮮度記錄","state.emptyPool":"暫無漲跌停池資料","state.emptyStrategyResearch":"暫無策略研究資料","state.emptyStrategyManage":"暫無可管理的策略","state.emptyStrategy":"暫無策略","state.emptyDictField":"暫無欄位資料","state.descNetworkOrService":"請檢查網路或服務後重試","state.descNetwork":"請檢查網路後重試","state.descService":"請檢查服務後重試","state.descBacktest":"請檢查策略與日期範圍後重試","state.descEmptyMarket":"目前無指數行情回傳，可稍後重試","state.descEmptyFocus":"目前日期/時段暫無評估結果，可切換日期或時段","state.descEmptyFreshness":"介面未回傳任何資料表，可點擊重新整理重試","state.descEmptyPool":"目前交易日三池為空，可切換交易日或重新整理重試","state.descEmptyStrategyResearch":"先去「量化研究」載入策略登錄表，或建立自訂策略","state.descEmptyStrategyManage":"先複製母本建立微調策略，或用 AI 代寫全新策略","state.descEmptyStrategy":"策略登錄表為空，請檢查後端策略目錄或建立自訂策略","state.descEmptyDictField":"目前分類沒有字典欄位，可切換分類或點擊重新整理","state.descRetryDict":"點擊重試重新載入資料字典","state.descRetryHealth":"點擊重試重新載入健康與可靠性資料","state.descAiModels":"廠商模型設定取得失敗，可重試","a11y.watchlistList":"自選股列表","a11y.reviewDateList":"復盤日期列表","a11y.dailyReviewList":"每日復盤列表","a11y.shorttermDateList":"復盤日曆日期列表","a11y.selectWatchStock":"選擇 {code} {name}","a11y.viewMarketReview":"檢視 {date} 市場復盤","msg.runFailed":"執行失敗: {msg}","msg.exportFailed":"匯出失敗: {msg}","msg.factorIcFailed":"因子 IC 分析失敗: {msg}","msg.layerBacktest":"分層回測: {msg}","msg.layerBacktestFailed":"分層回測失敗: {msg}","msg.factorDetail":"因子詳情: {msg}","msg.factorDetailFailed":"因子詳情失敗: {msg}","msg.noData":"無資料"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",s),s});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const s={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let v=[];function t(S){const k=String(S||"");let T="";for(const C of k){const u=s[C];u?T+=u.charAt(0):/[a-zA-Z0-9]/.test(C)&&(T+=C.toLowerCase())}return T}function r(S){const k=String(S||"");let T="";for(const C of k){const u=s[C];u?T+=u:/[a-zA-Z0-9]/.test(C)&&(T+=C.toLowerCase())}return T}function d(S){return String(S||"").trim().toLowerCase()}function b(S,k){const T=(k.code||"").toLowerCase();return/^\d+$/.test(S)?T.indexOf(S)!==-1:/[\u4e00-\u9fa5]/.test(S)?(k.name||"").toLowerCase().indexOf(S)!==-1:T.indexOf(S)!==-1||(k.initials||t(k.name)).indexOf(S)!==-1||(k.pinyin||r(k.name)).indexOf(S)!==-1}function o(S){const k={},T=[],C=function(u,i,f){!u||k[u]||(k[u]=!0,T.push({code:u,name:i||u,source:f||"core",initials:t(i||u),pinyin:r(i||u)}))};return e.forEach(function(u){C(u.code,u.name,"core")}),(S||[]).forEach(function(u){C(u.code,u.name,"extra")}),T}function l(S,k){const T=d(S);if(!T||!k||!k.length)return[];const C=T.split(/[\s,，、;；]+/).filter(Boolean);return C.length?k.filter(function(u){return C.every(function(i){return b(i,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function g(S){Array.isArray(S)&&(v=v.concat(S))}function c(){return v.slice()}function P(){return o(v)}function _(S){return l(S,P())}const M={CHAR_PINYIN:s,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:r,normalizeQuery:d,matchToken:b,buildStockIndex:o,searchStocksByQuery:l,registerExtraStocks:g,getExtraStocks:c,getStockIndex:P,searchCoreStocks:_};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=M),M});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const s="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},v=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function r(i){return i=parseInt(i,10),isNaN(i)?!1:i===-1||i>=0&&i<=360}const d={light:"classic-white",dark:"dark-pro"};function b(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(s);if(!i)return{};const f=JSON.parse(i);return f&&typeof f=="object"?f:{}}catch{return{}}}function o(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function l(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const i=Object.assign({},e,b()),f={};return v.forEach(function(R){const L=i[R];f[R]=R==="theme_hue"?r(L)?parseInt(L,10):e[R]:t[R].indexOf(L)!==-1?L:e[R]}),f}function c(i){if(v.indexOf(i)!==-1)return g()[i]}function P(i,f){return v.indexOf(i)===-1?!1:i==="theme_hue"?r(f):t[i].indexOf(f)!==-1}function _(i,f){if(!P(i,f))return!1;const R=b();return R[i]=f,o(R),l()&&S({[i]:f}),!0}function M(i){if(!i||typeof i!="object")return!1;const f={};if(Object.keys(i).forEach(function(L){P(L,i[L])&&(f[L]=i[L])}),!Object.keys(f).length)return!1;const R=Object.assign({},b(),f);return o(R),l()&&S(f),!0}function S(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function k(){const i=g();if(!l()||typeof fetch>"u")return i;try{const f=await fetch("/api/user_config/preferences");if(f.ok){const R=await f.json();if(R.success&&R.preferences){const L=R.preferences;v.forEach(function(y){const D=L[y];if(y==="theme_hue"){r(D)&&(i[y]=parseInt(D,10));return}t[y].indexOf(D)!==-1&&(i[y]=D)}),o(i)}}}catch(f){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",f&&f.message)}return i}function T(i){const f=i||c("info_density")||"comfortable",R=t.info_density.indexOf(f)!==-1?f:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",R),R}function C(i){const f=i||c("theme")||"system";if(f==="system"){let R=!1;return typeof window<"u"&&window.matchMedia&&(R=window.matchMedia("(prefers-color-scheme: dark)").matches),R?"dark":"light"}return f==="dark"||f==="light"?f:"light"}const u={PREFERENCES_KEY:s,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:v,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:g,getPreference:c,isValidValue:P,setPreference:_,setPreferences:M,saveToBackend:S,loadPreferences:k,resolveTheme:C,applyDensity:T};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const s="quant_recent_viewed";function v(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(s);if(!g)return[];const c=JSON.parse(g);return Array.isArray(c)?c:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(g))}catch{}}function r(g,c){if(!g)return!1;let P=v().filter(function(_){return _.code!==g});return P.unshift({code:g,name:(c||"").toString().slice(0,32),ts:Date.now()}),P.length>10&&(P=P.slice(0,10)),t(P),!0}function d(){return v().slice(0,10)}function b(g){t(v().filter(function(c){return c.code!==g}))}function o(){t([])}const l={RECENT_VIEWED_KEY:s,RECENT_MAX:10,recordViewed:r,getRecentViewed:d,removeRecent:b,clearRecent:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=l),l});(function(){const s=typeof Vue<"u"?Vue:{},{ref:e,computed:v,watch:t,onMounted:r,nextTick:d}=s;function b(m,A={}){if(typeof m=="string"&&m.startsWith("/api/")){const w=localStorage.getItem("quant_token");if(w)return{...A,headers:{...A.headers||{},Authorization:"Bearer "+w}}}return A}async function o(m,A={}){const w=b(m,A),j={"Content-Type":"application/json",...w.headers},te=(A.method||"GET").toUpperCase(),re=te+"|"+m,se=async()=>{const le=await fetch(m,{...w,headers:j});if(le.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!le.ok){let Y="";try{const ie=await le.json();Y=ie&&ie.detail||""}catch{}throw Object.assign(new Error(Y||"请求失败（HTTP "+le.status+"）"),{status:le.status})}return await le.json()};try{const le=A.noLoading?se:()=>f(se);return te==="GET"&&!A.noDedupe?await T(re,le):await le()}catch(le){throw le.message==="登录已过期"?le:(console.error("[apiFetch] "+m+":",le.message),Object.assign(le,{_formatted:R(le,le.status)}))}}function l(){return new Date().toISOString().split("T")[0]}function g(m){return m?m.split("T")[0]:""}function c(m,A="info",w=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const te=document.createElement("div");te.className=`toast toast-${A}`,te.textContent=m,j.appendChild(te),setTimeout(()=>{te.classList.add("leaving"),setTimeout(()=>te.remove(),300)},w)}function P(m,A=300){let w;return function(...j){clearTimeout(w),w=setTimeout(()=>m.apply(this,j),A)}}function _(m,A=300){let w=!1;return function(...j){w||(m.apply(this,j),w=!0,setTimeout(()=>{w=!1},A))}}async function M(m,A=3e3,w=""){const j=new Promise((te,re)=>setTimeout(()=>re(new Error("timeout")),A));try{return await Promise.race([m,j])}catch(te){console.warn(`[timeout] ${w||"task"} failed:`,te.message)}}const S=new Map;function k(){return S.clear(),!0}function T(m,A){if(!m||typeof A!="function")return Promise.reject(new Error("bad dedupe args"));if(S.has(m))return S.get(m);const w=Promise.resolve().then(A).finally(()=>{S.delete(m)});return S.set(m,w),w}let C=0;function u(){return C=0,!0}function i(){return C}async function f(m){C++;try{return await m()}finally{C--}}function R(m,A){if(!m)return"请求失败";if(m&&typeof m=="object"&&m.detail)return String(m.detail);if(typeof m=="string"&&m)return m;if(m&&m.message){const w=String(m.message);return/Failed to fetch|fetch failed|networkerror/i.test(w)?"网络连接失败，请检查网络后重试":w}return A?"请求失败（HTTP "+A+"）":"请求失败"}function L(m,A){if(m===A)return!0;try{return JSON.stringify(m)===JSON.stringify(A)}catch{return!1}}function y(m,A,w){const j=(m||"GET").toUpperCase();let te="";if(w)try{const re={};Object.keys(w).sort().forEach(se=>{re[se]=w[se]}),te=JSON.stringify(re)}catch{te=""}return j+"|"+A+"|"+te}class D{constructor(){this._map=new Map,this._exp=new Map}get(A){const w=this._exp.get(A);if(w!=null){if(Date.now()>w){this.delete(A);return}return this._map.get(A)}}set(A,w,j){return this._map.set(A,w),this._exp.set(A,Date.now()+(j>0?j:-1)),w}delete(A){this._map.delete(A),this._exp.delete(A)}clear(){this._map.clear(),this._exp.clear()}has(A){return this.get(A)!==void 0}get size(){return this._map.size}}function I(m){const A=new D,w=m!=null&&m>0?m:15e3;return{store:A,defaultTtl:w,get:j=>A.get(j),set:(j,te,re)=>A.set(j,te,re??w),delete:j=>A.delete(j),clear:()=>A.clear(),size:()=>A.size}}const V=new Set;async function O(m){const A=m&&m.cache,w=m&&m.key,j=m&&(m.fetchFn||m.fetcher),te=m&&m.ttl;if(!A||!w||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(V.has(w))return{ok:!1,changed:!1,skipped:!0,fresh:null};V.add(w);try{const re=A.get(w);let se;try{se=await j()}catch(Y){return m.onError&&m.onError(Y),{ok:!1,changed:!1,fresh:null}}const le=re!==void 0&&!L(re,se);return A.set(w,se,te),m.apply&&m.apply(se,re),re!==void 0&&(le?m.onChanged&&m.onChanged(se,re):m.onUnchanged&&m.onUnchanged(se,re)),{ok:!0,changed:le,fresh:se}}finally{V.delete(w)}}const F=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function X(m,A={}){if(m==null)return"";const w=A&&A.allow||F,j=new Set(w.map(le=>String(le).toUpperCase()));let te;try{te=new DOMParser().parseFromString(String(m),"text/html")}catch{return String(m).replace(/[<>&]/g,Y=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[Y])}const re=te.body||te;function se(le){Array.from(le.childNodes).forEach(Y=>{if(Y.nodeType===1){const ie=String(Y.tagName).toUpperCase();if(j.has(ie))Array.from(Y.attributes).forEach(qe=>{const ee=qe.name.toLowerCase(),$=(qe.value||"").trim().toLowerCase();(ee.startsWith("on")||(ee==="href"||ee==="src"||ee==="xlink:href")&&$.startsWith("javascript:")||ee==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test($))&&Y.removeAttribute(qe.name),ee==="href"&&!/^(https?:|mailto:|#|\/)/.test($)&&Y.removeAttribute("href")}),ie==="A"&&Y.setAttribute("rel","noopener noreferrer"),se(Y);else{const qe=Y.parentNode;for(;Y.firstChild;)qe.insertBefore(Y.firstChild,Y);qe.removeChild(Y)}}else if(Y.nodeType!==3){if(Y.nodeType===8)Y.parentNode&&Y.parentNode.removeChild(Y);else if(Y.nodeType===4){const ie=te.createTextNode(Y.nodeValue||"");Y.parentNode&&Y.parentNode.replaceChild(ie,Y)}}})}return se(re),re.innerHTML}const U="/api/openapi",H="/api/market/ws/quotes",K=1,q=2.5,a="数据不可达",E="实时不可用，不刷新";function n(){const m=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",A=typeof location<"u"?location.host:"localhost:8001";return m+"//"+A+H}function p(m,A){if(!m)return null;const w=A||{riseSpeed:K,volumeRatio:q},j=w.riseSpeed!=null?w.riseSpeed:K,te=w.volumeRatio!=null?w.volumeRatio:q,re=parseFloat(m.rise_speed);if(!isNaN(re)&&Math.abs(re)>j)return re>0?"涨速预警":"跌速预警";const se=parseFloat(m.volume_ratio);return!isNaN(se)&&se>te?"放量预警":null}function J(m){const A=Number(m);return m==null||isNaN(A)?null:A}const x={apiFetch:o,withAuthHeaders:b,getToday:l,formatDate:g,withTimeout:M,showToast:c,debounce:P,throttle:_,resetInFlight:k,dedupeRequest:T,resetLoading:u,loadingCount:i,withLoading:f,formatApiError:R,jsonEquals:L,makeCacheKey:y,CacheStore:D,createTtlCache:I,silentRefresh:O,sanitizeHtml:X,OPENAPI_ROUTE_BASE:U,REALTIME_WS_PATH:H,WARN_RISE_SPEED_THRESHOLD:K,WARN_VOLUME_RATIO_THRESHOLD:q,REALTIME_DEGRADED_TEXT:a,REALTIME_FALLBACK_TEXT:E,buildRealtimeWsUrl:n,checkQuoteWarning:p,quoteFmt:{price:function(m){const A=J(m);return A===null?"--":A.toFixed(2)},pct:function(m){const A=J(m);return A===null?"--":(A>0?"+":"")+A.toFixed(2)+"%"},num:function(m){const A=J(m);return A===null?"--":A.toFixed(2)},color:function(m){const A=m?m.change_pct:null,w=J(A);return w===null?"":w>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=x),typeof Re<"u"&&Re.exports&&(Re.exports=x)})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(P,_){return P+"/"+_}function v(P,_,M,S){var k=P[_]||[],T=k.findIndex(function(i){return i.subPage===M});if(T!==-1)return{groups:P,activeKey:e(_,M)};var C=k.concat([{subPage:M,title:S}]);C.length>s&&(C=r(C));var u=Object.assign({},P,t({},_,C));return{groups:u,activeKey:e(_,M)}}function t(P,_,M){return P[_]=M,P}function r(P){if(P.length<=s)return P;var _=P.length>1?1:0;return P.filter(function(M,S){return S!==_})}function d(P,_,M,S){var k=P[_]||[],T=k.findIndex(function(f){return f.subPage===M});if(T===-1)return{groups:P,nextActive:null};var C=k.filter(function(f){return f.subPage!==M}),u=Object.assign({},P,t({},_,C)),i=null;return M===S&&(C[T]?i=C[T].subPage:C[T-1]?i=C[T-1].subPage:i=null),{groups:u,nextActive:i}}function b(P){return P&&P.length?P[0]:""}function o(P,_){return P[_]||[]}function l(P,_,M){var S=P[_]||[],k=S.filter(function(C){return C.subPage===M}),T=Object.assign({},P,t({},_,k));return{groups:T,activeKey:k.length?e(_,k[0].subPage):null}}function g(P,_){var M=Object.assign({},P,t({},_,[]));return{groups:M,activeKey:null}}function c(P,_,M,S){var k=(P[_]||[]).slice();if(M<0||M>=k.length)return{groups:P};var T=k.splice(M,1)[0];return k.splice(Math.max(0,Math.min(S,k.length)),0,T),{groups:Object.assign({},P,t({},_,k))}}return{MAX_TABS:s,openTab:v,closeTab:d,getDefaultTab:b,tabsOf:o,evictOldest:r,closeOthers:l,closeAll:g,reorder:c,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Gs=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;Gs&&(window.__quantModules.tabsCore=Gs)}(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var s=["subnav","tree","toptab"],e="toptab",v="nav_mode";function t(c){return s.indexOf(c)!==-1?c:e}function r(c){return t(c)==="subnav"}function d(c){return t(c)==="tree"}function b(c){return t(c)==="toptab"}function o(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function l(){var c=o(),P=e;if(c)try{P=t(c.getItem(v))}catch{}return{navMode:P}}function g(c){var P=o();if(!(!P||!c))try{c.navMode!==void 0&&P.setItem(v,t(c.navMode))}catch{}}return{NAV_MODES:s,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:r,treeChildrenVisible:d,topTabsVisible:b,readPrefs:l,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Ys=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;Ys&&(window.__quantModules.navModeCore=Ys)}(function(){function e(n,p){if(!Array.isArray(n)||n.length<=p)return n;const J=[],N=n.length/p*2;for(let x=0;x<n.length;x+=N){const m=Math.floor(x),A=Math.min(n.length,Math.ceil(x+N));let w=1/0,j=-1,te=-1/0,re=-1;for(let se=m;se<A;se++){const le=n[se];if(!le)continue;const Y=le[3]!=null?Number(le[3]):1/0,ie=le[4]!=null?Number(le[4]):-1/0;Y<w&&(w=Y,j=se),ie>te&&(te=ie,re=se)}j>=0&&J.push(n[j]),re>=0&&re!==j&&J.push(n[re])}return J}let v=null;function t(){return typeof echarts<"u"?Promise.resolve():(v||(v=new Promise(function(n,p){const J=document.createElement("script");J.src="/static/lib/echarts.min.js",J.async=!0,J.onload=function(){typeof echarts<"u"?n():p(new Error("echarts 加载后未定义"))},J.onerror=function(){p(new Error("echarts.min.js 加载失败"))},document.head.appendChild(J)})),v)}function r(){const n=getComputedStyle(document.documentElement);return{primary:n.getPropertyValue("--primary-color").trim()||"#2563eb",up:n.getPropertyValue("--color-up").trim()||"#43e97b",down:n.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:n.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:n.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=n=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim()}catch{return""}};function b(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function o(n,p,J,N=!1,x=!1){if(!p||p.length===0)return;p.length>2e3&&(p=e(p,2e3));const m=p.map(B=>typeof B[0]=="string"&&B[0].indexOf("-")>=0?B[0]:B[0].slice(0,4)+"-"+B[0].slice(4,6)+"-"+B[0].slice(6,8)),A=r(),w={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},j=p.map(B=>[B[1],B[2],B[3],B[4]]),te=p.map(B=>B[5]),re=p.map(B=>B[6]),se=p.map(B=>B[7]),le=p.map(B=>B[8]),Y=p.map(B=>B[9]),ie=p.map(B=>B[10]),ee=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",$=A.borderLight,be={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:A.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ee,borderColor:$,textStyle:{color:A.textSecondary,fontSize:12},formatter:function(B){if(!B||!B.length)return"";const me=B[0].dataIndex,ve=p[me];if(!ve)return"";const Z=n.getOption(),ue=Z.legend&&Z.legend[0]&&Z.legend[0].selected||{},Ee=fe=>ue[fe]!==!1,we=fe=>fe==null||isNaN(fe)?"--":Number(fe).toFixed(2),Ne=fe=>fe==null||isNaN(fe)?"--":(Number(fe)/1e4).toFixed(2)+"万手",We=['<div style="font-weight:600;color:'+A.textSecondary+';">'+m[me]+"</div>"];return We.push("开: "+we(ve[1])+"　收: "+we(ve[2])),We.push("低: "+we(ve[3])+"　高: "+we(ve[4])),We.push("成交量: "+Ne(ve[5])),ve[6]!=null&&Ee("MA5")&&We.push("MA5: "+we(ve[6])),ve[7]!=null&&Ee("MA10")&&We.push("MA10: "+we(ve[7])),ve[8]!=null&&Ee("MA20")&&We.push("MA20: "+we(ve[8])),ve[9]!=null&&Ee("MA60")&&We.push("MA60: "+we(ve[9])),ve[10]!=null&&We.push("VOL_MA5: "+Ne(ve[10])),We.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:x?0:8,textStyle:{color:A.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:x?30:40,height:x?"48%":"52%"},{left:56,right:16,top:x?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:m,boundaryGap:!0,axisLine:{lineStyle:{color:$}},axisLabel:{color:A.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:m,axisLabel:{show:!1},axisLine:{lineStyle:{color:$}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:$}},axisLabel:{color:A.textSecondary,fontSize:11,formatter:function(B){const me=Math.round(B*100)/100;return me%1===0?String(Math.round(me)):me.toFixed(2)}},splitLine:{lineStyle:{color:$,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:$}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,p.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:$,textStyle:{color:A.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:A.up,color0:A.down,borderColor:A.up,borderColor0:A.down}},{name:"MA5",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma5}},{name:"MA10",type:"line",data:se,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma10}},{name:"MA20",type:"line",data:le,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma20}},{name:"MA60",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:w.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:te,itemStyle:{color:function(B){const me=B.dataIndex;return p[me][1]>=p[me][2]?A.up:A.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ie,smooth:!0,symbol:"none",lineStyle:{width:1,color:w.ma5,type:"dashed"}}]};n.setOption(be,!0)}const l=new Map;function g(n){return l.has(n)||l.set(n,{chart:null,cache:null}),l.get(n)}async function c(n,p,J,N=!1,x={}){await t();const m=g(n);let A=document.getElementById(n);if(!A)for(let w=0;w<16&&(await new Promise(j=>setTimeout(j,50)),A=document.getElementById(n),!A);w++);if(!A)throw new Error("无法找到图表容器: "+n);if(A.offsetWidth<50&&(A.style.minWidth="600px",A.style.minHeight="300px"),!m.chart||m.chart.isDisposed()||m.chart.getDom()!==A){if(m.chart)try{m.chart.dispose()}catch{}m.chart=echarts.init(A),m.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const w=x.onLegend;typeof w=="function"&&m.chart.on("legendselectchanged",j=>{j&&j.selected&&w(j.selected)})}return o(m.chart,p,J,N,!!x.isMobile),m.cache={data:p,period:J,isIndex:N,isMobile:!!x.isMobile},m.chart}function P(n){const p=l.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function _(n){const p=l.get(n);p&&p.chart&&p.chart.resize()}function M(n,p){const J=l.get(n),N=J&&J.chart;if(N)if(p<=0)N.dispatchAction({type:"dataZoom",start:0,end:100});else{const A=Math.max(0,(60-p)/60*100);N.dispatchAction({type:"dataZoom",start:Math.round(A),end:100})}}function S(n){var N,x,m;const p=l.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const J=((m=(x=(N=p.chart.getOption())==null?void 0:N.legend)==null?void 0:x[0])==null?void 0:m.selected)||null;o(p.chart,p.cache.data,p.cache.period,p.cache.isIndex,p.cache.isMobile),J&&p.chart.setOption({legend:{selected:J}})}function k(n){const p=l.get(n);return p&&p.chart}const T=new Map;function C(n){return T.has(n)||T.set(n,{chart:null,cache:null}),T.get(n)}function u(n,p,J={}){return t().then(function(){const N=C(n),x=document.getElementById(n);if(!x)throw new Error("无法找到图表容器: "+n);if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const m=typeof p=="function"?p():p;return N.chart.setOption(m,!0),N.cache={buildOption:p,key:J.key||""},N.chart})}function i(n){var x,m,A;const p=T.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const J=((A=(m=(x=p.chart.getOption())==null?void 0:x.legend)==null?void 0:m[0])==null?void 0:A.selected)||null,N=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(N,!0),J&&N&&N.legend&&N.legend.selected&&p.chart.setOption({legend:{selected:J}})}function f(n){const p=T.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function R(n){const p=T.get(n);p&&p.chart&&p.chart.resize()}const L=new Map;function y(n){return L.has(n)||L.set(n,{chart:null,cache:null}),L.get(n)}function D(n,p,J={}){return t().then(function(){const N=y(n),x=document.getElementById(n);if(!x)return null;if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const m=typeof p=="function"?p():p;return N.chart.setOption(m,!0),N.cache={buildOption:p,key:J.key||""},N.chart})}function I(n){const p=L.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const J=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(J,!0)}function V(n){const p=L.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function O(n){const p=L.get(n);p&&p.chart&&p.chart.resize()}const F=D,X=I,U=V,H=O;function K(n,p,J,N){N=N||{};const x=N.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[N.navLabel||"净值",N.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:J||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:N.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:N.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:N.navLabel||"净值",type:"line",data:n||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:N.ddLabel||"回撤",type:"line",yAxisIndex:1,data:p||[],showSymbol:!1,areaStyle:{opacity:.25,color:x},lineStyle:{color:x,type:"solid",width:1.5}}]}}function q(n,p){p=p||{};const J=p.bandColor||d("--state-info-solid")||"#1976d2",N=n&&n.dates||[],x=n&&n.median||[],m=n&&n.q25||[],A=n&&n.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[p.medianLabel||"中位IC",p.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:p.medianLabel||"中位IC",type:"line",data:x,showSymbol:!1,lineStyle:{width:2,color:J}},{name:p.bandLabel||"25–75分位",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}},{name:"_bandH",type:"line",data:A.map(function(w,j){return w-(m[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}}]}}function a(n,p){p=p||{};const J=p.color||d("--color-ai")||"#7c3aed",N=n&&n.dates||[],x=n&&n.value||[],m=n&&n.upper||[],A=n&&n.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[p.valueLabel||"情绪",p.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:p.valueLabel||"情绪",type:"line",data:x,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:J}},{name:p.bandLabel||"过热/冰点带",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}},{name:"_bandL",type:"line",data:A.map(function(w,j){return(m[j]||0)-w}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}}]}}const E={renderKlineChart:o,renderKlineTo:c,disposeKline:P,resizeKline:_,zoomKline:M,redrawKline:S,getKlineChart:k,renderBacktestTo:u,redrawBacktest:i,disposeBacktest:f,resizeBacktest:R,renderPortfolioTo:D,redrawPortfolio:I,disposePortfolio:V,resizePortfolio:O,renderSimpleChartTo:F,redrawSimpleChart:X,disposeSimpleChart:U,resizeSimpleChart:H,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b,init(){return{renderKlineChart:o,renderKlineTo:c,disposeKline:P,resizeKline:_,zoomKline:M,redrawKline:S,getKlineChart:k,renderBacktestTo:u,redrawBacktest:i,disposeBacktest:f,resizeBacktest:R,renderPortfolioTo:D,redrawPortfolio:I,disposePortfolio:V,resizePortfolio:O,renderSimpleChartTo:F,redrawSimpleChart:X,disposeSimpleChart:U,resizeSimpleChart:H,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=E),typeof Re<"u"&&Re.exports&&(Re.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:a})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(s){const{ref:e,computed:v}=Vue,{configChanged:t,consensus:r}=s,d=e(null),b=e(""),o=e(null),l=e([]),g=e([]),c=e([]),P=e([]),_=e([]),M=e([]),S=e({});function k(he){const Se=_.value.indexOf(he);Se>=0?_.value.splice(Se,1):_.value.push(he)}const T=e("date"),C=e([]),u=e(!1),i=e(!1),f=e("watchlist"),R=e([]),L=e({vendors:[]}),y=e(""),D=e(!1),I=e(!1);function V(he){if(!he)return"";const Se=String(he),Ae=Se.length;if(Ae<=4)return Se[0]+"*".repeat(Ae-1);const ze=Ae<=8?2:4;return Se.slice(0,ze)+"*".repeat(Ae-ze-ze)+Se.slice(-ze)}async function O(he){let Se;try{Se=(await ElementPlus.ElMessageBox.prompt("请输入密钥查看密码（与登录密码不同；默认 admin123，可在 .env 的 KEY_VIEW_PASSWORD 修改）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const ze=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Se,target:he})})).json();if(ze.success)return ze.secret;ElementPlus.ElMessage.error((ze.message||"查看失败")+"（查看密码见 .env KEY_VIEW_PASSWORD）")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function F(he){if(he._revealed){he._revealed=!1,he._masked=V(he.api_key);return}const Se=await O("ai:"+he.vendor_key);Se!==null&&(he.api_key=Se,he._revealed=!0)}async function X(he){if(he._editing){he._editing=!1,he._revealed=!1,he.api_key&&(he._masked=V(he.api_key));return}he._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const ze=(Ae.data.vendors||[]).find(Ye=>Ye.vendor_key===he.vendor_key);ze&&(he.api_key=ze.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(Se){ElementPlus.ElMessage.error("解锁失败: "+Se.message)}}function U(he){const{_fetching:Se,_testing:Ae,_revealed:ze,_masked:Ye,_editing:Ue,...Qe}=he;return Ue||(Qe.api_key=""),Qe.models=(he.models||[]).map(Ze=>{const{_testing:lt,testResult:gt,...pe}=Ze;return pe}),Qe}async function H(){var he;try{y.value="";const Se=await fetch("/api/ai/models");if(Se.status===401){y.value="请先登录后再查看模型配置";return}if(!Se.ok){y.value=`服务器错误 (${Se.status})`;return}const Ae=await Se.json();Ae.success?(R.value=(((he=Ae.data)==null?void 0:he.vendors)||[]).map(ze=>({...ze,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:ze.api_key||"",models:(ze.models||[]).map(Ye=>({...Ye,_testing:!1,testResult:void 0}))})),y.value=""):y.value=Ae.message||"加载失败"}catch(Se){y.value="网络错误: "+Se.message}}async function K(){try{const Se=await(await fetch("/api/ai/catalog")).json();Se.success&&Se.data&&(L.value=Se.data)}catch(he){console.warn("AI 厂商目录加载失败",he)}}async function q(){I.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:R.value.map(U)})})).json();Ae.success?(R.value.forEach(ze=>{ze._editing=!1,ze._revealed=!1,ze.api_key&&(ze._masked=V(ze.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(he){ElementPlus.ElMessage.error("保存失败: "+he.message)}I.value=!1}async function a(he,Se){Se._testing=!0;try{const ze=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,model:Se.name,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})});Se.testResult=await ze.json()}catch(Ae){Se.testResult={success:!1,message:Ae.message}}Se._testing=!1}async function E(){D.value=!0;for(const he of R.value)for(const Se of he.models||[])he.api_key?await a(he,Se):Se.testResult={success:!1,message:"未配置 API Key"};D.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function n(he){he._fetching=!0;try{const ze=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})})).json();if(ze.success&&Array.isArray(ze.models)){const Ye=new Set((he.models||[]).map(Ue=>Ue.name));for(const Ue of ze.models)Ye.has(Ue)||he.models.push({name:Ue,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${ze.models.length} 个模型`)}else ElementPlus.ElMessage.error(ze.message||"获取模型列表失败")}catch(Se){ElementPlus.ElMessage.error("获取模型列表失败: "+Se.message)}he._fetching=!1}function p(he){const Se=(L.value.vendors||[]).find(Ae=>Ae.vendor_key===he);if(Se){if(R.value.some(Ae=>Ae.vendor_key===he)){ElementPlus.ElMessage.warning("该厂商已存在");return}R.value.push({vendor_key:Se.vendor_key,name:Se.name,kind:Se.kind,base_url:Se.base_url,api_key:"",timeout:60,tier:Se.tier||"",website:Se.website||"",locked:!!Se.locked,models:(Se.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${Se.name}」，配置 API Key 后保存生效`)}}function J(){R.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function N(he){he.models||(he.models=[]),he.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function x(he,Se){const Ae=he.models[Se];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}he.models.splice(Se,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function m(he){if(he.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(he.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const Se=R.value.indexOf(he);Se>=0&&R.value.splice(Se,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const A=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),w=e(!1),j=e(""),te=e(0),re=e(""),se=e(!1),le=e(""),Y=e(!1),ie=e(0),qe=e(0),ee=e(""),$=e({}),be=e({}),B=e({}),me=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ve=e("manual"),Z=v(()=>{const he={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return he[me.value.provider]||he.custom}),ue={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function Ee(he){if(he==="manual")return;const Se=ue[he];Se&&(me.value.endpoint=Se.endpoint,me.value.model=Se.model,t.value=!0)}function we(){if(t.value=!0,me.value.provider!=="codingplan"&&me.value.provider!=="custom"){const he=Z.value;he&&(me.value.endpoint=he.endpoint,me.value.model=he.model)}else me.value.provider==="codingplan"&&(me.value.endpoint||(me.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),me.value.model||(me.value.model="ark-code-latest"))}let Ne=null;const We=8;async function fe(){Ne&&(Ne.abort(),Ne=null);const Se=(r.value||[]).filter(Qe=>Qe.status==="new"||Qe.status==="out").filter(Qe=>!S.value[Qe.code]);if(Se.length===0)return;const Ae=new AbortController;Ne=Ae;let ze=0;const Ye=async()=>{for(;ze<Se.length;){const Qe=Se[ze++];try{const lt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Qe.code,stock_name:Qe.name,event_type:Qe.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();lt.success&&lt.signal&&(S.value={...S.value,[Qe.code]:lt.signal})}catch(Ze){if(Ze.name==="AbortError")return}}},Ue=Array.from({length:Math.min(We,Se.length)},()=>Ye());await Promise.all(Ue)}function oe(){Ne&&(Ne.abort(),Ne=null)}let ye=0;async function Ve(he){const Se=++ye;try{const ze=await(await fetch(`/api/ai/history/last/${encodeURIComponent(he)}`)).json();if(Se!==ye)return;ze.success&&ze.data&&(d.value=ze.data,b.value=ze.data.evaluate_time,Oe(he,ze.data),$e(ze.data))}catch{}}async function Oe(he,Se){var Ae,ze;try{const Ue=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(he)}&limit=2`)).json();if(Ue.success&&Ue.data&&Ue.data.length>=2){const Qe=Ue.data[1],Ze=((Ae=Se.result)==null?void 0:Ae.total_score)||0,lt=((ze=Qe.result)==null?void 0:ze.total_score)||0;Ze>0&&lt>0&&(o.value={prevScore:lt,currScore:Ze,diff:Ze-lt})}}catch(Ye){console.warn("[refreshStrategyData] autoPoll failed:",Ye)}}function $e(he){var Ye;const Se=((Ye=he.result)==null?void 0:Ye.dimensions)||{},Ae=[],ze=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ue of ze){const Qe=Se[Ue.key];Qe!==void 0&&Ae.push({icon:Qe>=Ue.good?"check-circle-2":Qe>=Ue.warn?"alert-triangle":"x-circle",label:`${Ue.label} ${Math.round(Qe)}分`})}l.value=Ae}return{aiResult:d,lastEvalTime:b,evalHistoryComparison:o,checklistItems:l,aiHistory:g,selectedHistoryIds:c,expandedDates:P,expandedMonths:_,expandedStocks:M,poolSignals:S,toggleMonthExpand:k,aiHistoryView:T,selectedWatchlistCodes:C,showAutoEvaluateSettings:u,savingConfig:i,autoEvaluateScope:f,aiVendors:R,aiCatalog:L,aiModelsError:y,testingAllModels:D,savingAiModels:I,loadAiVendors:H,loadAiCatalog:K,saveAiVendors:q,saveAiModels:q,testVendorModel:a,testAllVendorModels:E,fetchVendorModels:n,addVendorFromCatalog:p,addCustomVendor:J,addVendorModel:N,removeVendorModel:x,removeVendor:m,toggleVendorKeyReveal:F,toggleVendorEdit:X,autoEvaluateConfig:A,aiLoading:w,aiEvalStage:j,aiEvalElapsed:te,aiEvalError:re,showBatchEvaluate:se,batchStocks:le,batchRunning:Y,batchTotal:ie,batchCompleted:qe,batchCurrent:ee,batchStatuses:$,batchResults:be,batchEvalErrors:B,aiConfig:me,selectedPreset:ve,providerInfo:Z,aiPresets:ue,applyPreset:Ee,onProviderChange:we,fetchPoolSignals:fe,cancelPoolSignals:oe,loadLastEvaluation:Ve}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(s){const{ref:e,computed:v,watch:t}=Vue,{configChanged:r,aiConfig:d,aiLoading:b,feishuConfig:o,currentTheme:l,changeTheme:g,autoEvaluateConfig:c,currentUser:P,strategyFilter:_,applyTheme:M,dashboardData:S,lastRefreshTime:k,saveAiModels:T}=s,C=function(fe){const oe=window.__quantModules&&window.__quantModules.themes;return oe&&oe.applyLegacyTheme?oe.applyLegacyTheme(fe):M(fe)},u=e(!1),i=e(!1),f=e(null),R=e(null),L=e(null),y=e(!1),D=e(!1),I=e(null),V=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),O=e("disconnected"),F=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),X=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),U=e(!1),H=e(null),K=e(null),q=e("pending"),a=e("..."),E=e(!1),n=e({api_limit:600}),p=e(!1),J=e(!1);async function N(){try{const oe=await(await fetch("/api/system/rate-limit")).json();oe.success&&(n.value=oe.data)}catch(fe){console.warn("loadRateLimit failed:",fe)}}async function x(){J.value=!0;try{const oe=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)})).json();oe.success?(p.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(oe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{J.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{r.value=!0},{deep:!0});async function m(){u.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(r.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(fe){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",fe)}finally{u.value=!1}}async function A(){b.value=!0;try{const oe=await(await fetch("/api/ai/test")).json();oe.success?ElementPlus.ElMessage.success(oe.message||"API连接正常"):ElementPlus.ElMessage.error(oe.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{b.value=!1}}function w(){const fe={ai:d.value,feishu:o.value,theme:l.value,export_time:new Date().toISOString()},oe=new Blob([JSON.stringify(fe,null,2)],{type:"application/json"}),ye=URL.createObjectURL(oe),Ve=document.createElement("a");Ve.href=ye,Ve.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ve.click(),URL.revokeObjectURL(ye),ElementPlus.ElMessage.success("配置已导出")}function j(fe){const oe=fe.target.files[0];if(!oe)return;const ye=new FileReader;ye.onload=async Ve=>{try{const Oe=JSON.parse(Ve.target.result);Oe.ai&&(d.value={...d.value,...Oe.ai},await m()),Oe.feishu&&(Object.assign(o.value,Oe.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Oe.feishu)})),Oe.theme&&(l.value=Oe.theme,g(Oe.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ye.readAsText(oe),fe.target.value=""}async function te(){u.value=!0;const fe=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:V.value,feishu:o.value,ai:d.value,rate_limit:n.value,auto_evaluate:c.value,theme:l.value}})}).then(Oe=>["userConfig",Oe.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V.value)}).then(Oe=>["tushare",Oe.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:F.value})}).then(Oe=>["datasource",Oe.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)}).then(Oe=>["feishu",Oe.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Oe=>["ai",Oe.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)}).then(Oe=>["rateLimit",Oe.ok]),T().then(()=>["aiModels",!0],()=>["aiModels",!1])],oe=await Promise.allSettled(fe),ye=oe.filter(Oe=>Oe.status==="fulfilled"&&Oe.value[1]).length,Ve=oe.filter(Oe=>Oe.status==="rejected"||Oe.status==="fulfilled"&&!Oe.value[1]).length;p.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(_.value.selected)),localStorage.setItem("quant_strategy_filter_mode",_.value.mode),P.value&&fetch(`/api/users/${P.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:l.value})}).catch(()=>{}),i.value=!1,f.value=new Date().toLocaleString("zh-CN"),u.value=!1,Ve>0&&console.error(`[saveAllConfig] ${ye}/${ye+Ve} 项保存成功，${Ve} 项失败`)}async function re(){try{const oe=await(await fetch("/api/user_config/config")).json();if(oe.success&&oe.config){const ye=oe.config;ye.tushare&&(V.value={...V.value,...ye.tushare}),ye.feishu&&(o.value={...o.value,...ye.feishu}),ye.ai&&(d.value={...d.value,...ye.ai}),ye.rate_limit&&(n.value={...n.value,...ye.rate_limit}),ye.auto_evaluate&&(c.value={...c.value,...ye.auto_evaluate}),ye.theme&&!localStorage.getItem("quant_theme")&&C(ye.theme)}i.value=!1,p.value=!1}catch(fe){console.error("[resetAllConfig] 重新加载配置失败:",fe),i.value=!1}}async function se(){O.value="testing";try{const oe=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(O.value=oe.success?"connected":"disconnected",oe.success){const ye=oe.data_count?` (获取到 ${oe.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ye)}else ElementPlus.ElMessage.error(oe.message||"连接失败")}catch{O.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function le(){try{const oe=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();O.value=oe.success?"connected":"disconnected"}catch{O.value="disconnected"}}async function Y(){var fe;U.value=!0;try{const ye=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ye.success?(H.value=parseInt(((fe=ye.message.match(/\d+/))==null?void 0:fe[0])||"0"),ElementPlus.ElMessage.success(ye.message)):ElementPlus.ElMessage.error(ye.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{U.value=!1}}async function ie(){try{const oe=await(await fetch("/api/market/tushare/config")).json();oe.success&&oe.config&&(V.value={...V.value,...oe.config})}catch(fe){console.warn("loadTushareConfig failed:",fe)}}function qe(fe){if(!fe)return"";const oe=String(fe),ye=oe.length;if(ye<=4)return oe[0]+"*".repeat(ye-1);const Ve=ye<=8?2:4;return oe.slice(0,Ve)+"*".repeat(ye-Ve-Ve)+oe.slice(-Ve)}const ee="请输入密钥查看密码（与登录密码不同；默认 admin123，可在 .env 的 KEY_VIEW_PASSWORD 修改）";async function $(fe){let oe;try{oe=(await ElementPlus.ElMessageBox.prompt(ee,"查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ve=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:oe,target:fe})})).json();if(Ve.success)return Ve.secret;ElementPlus.ElMessage.error((Ve.message||"查看失败")+"（查看密码见 .env KEY_VIEW_PASSWORD）")}catch(ye){ElementPlus.ElMessage.error("查看失败: "+ye.message)}return null}async function be(fe){const oe=F.value[fe];if(!oe)return;if(oe._revealed){oe._revealed=!1,oe._masked=qe(oe.token);return}const ye=await $(fe);ye!==null&&(oe.token=ye,oe._revealed=!0)}async function B(fe){const oe=F.value[fe];if(oe){if(oe._editing){oe._editing=!1,oe._revealed=!1,oe.token&&(oe._masked=qe(oe.token));return}oe._editing=!0;try{const ye=await $(fe);if(ye===null){oe._editing=!1;return}oe.token=ye,oe._revealed=!0}catch(ye){oe._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ye.message)}}}async function me(){try{const oe=await(await fetch("/api/market/datasource/config")).json();if(oe.success&&oe.config&&oe.config.sources){const ye=oe.config.sources,Ve=Oe=>{const $e={...F.value[Oe],...ye[Oe]||{}};return $e._editing=!1,$e._revealed=!1,$e._masked=$e.token||"",$e.token="",$e};F.value={sxsc_tushare:Ve("sxsc_tushare"),tushare:Ve("tushare"),akshare:{...F.value.akshare,...ye.akshare||{}}}}try{const Ve=await(await fetch("/api/market/datasource/status")).json();if(Ve.success&&Ve.status)for(const[Oe,$e]of Object.entries(Ve.status))X.value[Oe]=$e.connected?"connected":"disconnected"}catch{}}catch(fe){console.warn("loadDatasourceConfig failed:",fe)}}async function ve(){try{const fe={};for(const[oe,ye]of Object.entries(F.value)){const{_revealed:Ve,_masked:Oe,_editing:$e,...he}=ye;!$e&&oe!=="akshare"&&(he.token=""),fe[oe]=he}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:fe})}),i.value=!0}catch(fe){console.warn("saveDatasourceConfig failed:",fe)}}async function Z(fe){X.value[fe]="testing";try{const oe=F.value[fe];oe&&oe._editing&&await ve();const Ve=await(await fetch(`/api/market/datasource/test/${fe}`,{method:"POST"})).json();X.value[fe]=Ve.success?"connected":"disconnected",Ve.success?ElementPlus.ElMessage.success(`${fe} 连接成功`):ElementPlus.ElMessage.error(`${fe}: ${Ve.message}`)}catch{X.value[fe]="disconnected",ElementPlus.ElMessage.error(`${fe} 连接失败`)}}async function ue(){D.value=!1;try{const oe=await(await fetch("/api/feishu/config")).json();oe&&typeof oe=="object"&&(o.value={...o.value,...oe},R.value=JSON.parse(JSON.stringify(o.value)))}catch(fe){D.value=!0,console.warn("loadFeishuConfig failed:",fe)}}async function Ee(){try{const oe=await(await fetch("/api/ai/config")).json();if(oe.success&&oe.data)d.value={...d.value,...oe.data};else{const ye=localStorage.getItem("quant_ai_config");ye&&(d.value=JSON.parse(ye))}}catch{const oe=localStorage.getItem("quant_ai_config");oe&&(d.value=JSON.parse(oe))}}async function we(){try{const oe=await(await fetch("/api/user_config/config")).json();if(oe.success&&oe.config){const ye=oe.config;ye.tushare&&(V.value={...V.value,...ye.tushare}),ye.datasource&&ye.datasource.sources&&(F.value={sxsc_tushare:{...F.value.sxsc_tushare,...ye.datasource.sources.sxsc_tushare||{}},tushare:{...F.value.tushare,...ye.datasource.sources.tushare||{}},akshare:{...F.value.akshare,...ye.datasource.sources.akshare||{}}}),ye.feishu&&(o.value={...o.value,...ye.feishu},R.value=JSON.parse(JSON.stringify(o.value))),ye.ai&&(d.value={...d.value,...ye.ai}),ye.rate_limit&&(n.value={...n.value,...ye.rate_limit}),ye.theme&&!localStorage.getItem("quant_theme")&&C(ye.theme),ye.auto_evaluate&&(c.value={...c.value,...ye.auto_evaluate})}}catch(fe){console.warn("加载用户配置失败，使用本地缓存",fe)}}async function Ne(){var fe,oe,ye,Ve;try{const $e=await(await fetch("/api/dashboard")).json(),he=$e.success?$e.data:$e;H.value=((fe=he==null?void 0:he.stats)==null?void 0:fe.total_stocks_covered)||null;const Ae=await(await fetch("/api/dates")).json();K.value=((oe=Ae==null?void 0:Ae.data)==null?void 0:oe.total)||((Ve=(ye=Ae==null?void 0:Ae.data)==null?void 0:ye.dates)==null?void 0:Ve.length)||null;const Ye=await(await fetch("/api/ai/history")).json();q.value="ok"}catch{q.value="pending"}}async function We(){y.value=!1;try{const oe=await(await fetch("/api/dashboard")).json();S.value=oe.success?oe.data:oe,k.value=Date.now()}catch(fe){y.value=!0,console.error("加载总览数据失败",fe)}}return{configSaving:u,configChanged:r,globalConfigDirty:i,lastSavedTime:f,feishuConfigOriginal:R,aiConfigOriginal:L,tushareConfigOriginal:I,tushareConfig:V,tushareStatus:O,datasourceConfig:F,datasourceStatus:X,syncingData:U,stockCount:H,tradeDateCount:K,aiStatus:q,appVersion:a,showImportDialog:E,rateLimitConfig:n,rateLimitDirty:p,rateLimitSaving:J,loadRateLimit:N,saveRateLimit:x,saveAiConfig:m,testAiApi:A,exportConfig:w,importConfig:j,saveAllConfig:te,resetAllConfig:re,testTushareConnection:se,checkTushareConnection:le,syncStockData:Y,loadTushareConfig:ie,loadDatasourceConfig:me,saveDatasourceConfig:ve,testDatasource:Z,toggleDatasourceKeyReveal:be,toggleDatasourceEdit:B,loadFeishuConfig:ue,loadAiConfig:Ee,loadUserConfig:we,loadSystemStatus:Ne,loadDashboardData:We,overviewError:y,feishuConfigError:D}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(s){const{ref:e,computed:v}=Vue,{currentUser:t,applyTheme:r,allMenuDefs:d,loadGroupConfig:b}=s,o=function(Z){const ue=window.__quantModules&&window.__quantModules.themes;return ue&&ue.applyLegacyTheme?ue.applyLegacyTheme(Z):r(Z)},l=e([]),g=e(""),c=e(""),P=e("users"),_=e({}),M=e({}),S=v(()=>{let Z=l.value;if(c.value&&(Z=Z.filter(Ee=>(Ee.group||Ee.role)===c.value)),!g.value)return Z;const ue=g.value.toLowerCase();return Z.filter(Ee=>Ee.username.toLowerCase().includes(ue))});function k(Z){_.value={..._.value,[Z]:!_.value[Z]}}async function T(Z,ue){try{const we=await(await fetch("/api/groups/"+ue+"/members/"+Z,{method:"DELETE"})).json();we.success?(await ee(),await ie()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function C(Z){const ue=M.value[Z];if(ue)try{const we=await(await fetch("/api/groups/"+Z+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ue})})).json();we.success?(await ee(),await ie(),M.value={...M.value,[Z]:""}):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function u(Z,ue){try{const we=await(await fetch("/api/users/"+Z.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ue})})).json();we.success?await ee():ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const i=e(!1),f=e(null),R=e({username:"",password:"",role:"user",theme:"tech-blue"}),L=e(!1),y=e(null),D=e(!1),I=e(!1),V=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),O=e({}),F=e(!1),X=e({group_id:"",name:"",description:""}),U=e(!1),H=e([]),K=e(""),q=e(""),a=e({});function E(Z){a.value={...a.value,[Z]:!a.value[Z]}}function n(Z){return!l.value||!l.value.length?0:l.value.filter(ue=>(ue.group||ue.role)===Z).length}function p(Z){const ue=(Z==null?void 0:Z.visible_menus)||{};return Object.values(ue).filter(Boolean).length}const J=v(()=>Object.keys(Y.value).length);async function N(Z){q.value=Z,I.value=!0,await x(Z)}async function x(Z){try{const Ee=await(await fetch("/api/groups/"+Z+"/members")).json();Ee.success&&(H.value=Ee.members||[])}catch(ue){H.value=[],console.error("[loadGroupMembers]",ue)}}async function m(){if(!(!K.value||!q.value)){U.value=!0;try{const ue=await(await fetch("/api/groups/"+q.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:K.value})})).json();ue.success?(await x(q.value),await ee(),K.value=""):ElementPlus.ElMessage.error(ue.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{U.value=!1}}}async function A(Z){try{const Ee=await(await fetch("/api/groups/"+q.value+"/members/"+Z,{method:"DELETE"})).json();Ee.success?(await x(q.value),await ee()):ElementPlus.ElMessage.error(Ee.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const w=v(()=>{if(!l.value)return[];const Z=new Set(H.value.map(ue=>ue.username));return l.value.filter(ue=>ue.username!=="admin"&&ue.username!=="guest"&&!Z.has(ue.username))});function j(Z){const ue=V.value.visible_menus[Z],Ee=d.find(we=>we.key===Z);if(Ee)if(ue){const we=O.value[Z]||{};Ee.subPages.forEach(Ne=>{const We=Z+"."+Ne;V.value.visible_sub_pages[We]=we[Ne]!==void 0?we[Ne]:!0})}else{const we={};Ee.subPages.forEach(Ne=>{const We=Z+"."+Ne;we[Ne]=V.value.visible_sub_pages[We],V.value.visible_sub_pages[We]=!1}),O.value[Z]=we}}function te(Z){y.value=Z;const ue=Y.value[Z]||{};V.value={name:ue.name||Z,description:ue.description||"",visible_menus:{...ue.visible_menus||{}},visible_sub_pages:{...ue.visible_sub_pages||{}}},O.value={},d.forEach(Ee=>{const we={};Ee.subPages.forEach(Ne=>{we[Ne]=V.value.visible_sub_pages[Ee.key+"."+Ne]}),O.value[Ee.key]=we}),D.value=!0}async function re(){U.value=!0;try{const ue=await(await fetch("/api/groups/"+y.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(V.value)})).json();ue.success?(D.value=!1,y.value=null,await ie(),await b()):ElementPlus.ElMessage.error(ue.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}async function se(Z){var ue;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ue=Y.value[Z])==null?void 0:ue.name)||Z)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const Ne=await(await fetch("/api/groups/"+Z,{method:"DELETE"})).json();Ne.success?await ie():ElementPlus.ElMessage.error(Ne.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function le(){if(X.value.group_id){U.value=!0;try{const ue=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X.value)})).json();ue.success?(F.value=!1,X.value={group_id:"",name:"",description:""},await ie()):ElementPlus.ElMessage.error(ue.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{U.value=!1}}}const Y=e({});async function ie(){try{if(!localStorage.getItem("quant_token"))return;const ue=await fetch("/api/groups");if(ue.ok){const Ee=await ue.json();Y.value=Ee.groups||{}}}catch(Z){console.warn("loadAllGroups:",Z)}}function qe(Z){var ue;return((ue=Y.value[Z])==null?void 0:ue.name)||Z||"--"}async function ee(){try{if(!localStorage.getItem("quant_token")){l.value=[];return}const ue=await fetch("/api/users");if(ue.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Ee=await ue.json();l.value=Ee.users||[]}catch(Z){l.value=[],console.error("[loadUsers] error:",Z)}}function $(Z){f.value=Z,R.value={username:Z.username,password:"",role:Z.role,theme:Z.theme||"tech-blue",group:Z.group||Z.role},i.value=!0}async function be(){if(R.value.username){L.value=!0;try{const Z=f.value?"PUT":"POST",ue=f.value?`/api/users/${R.value.username}`:"/api/users",we=await(await fetch(ue,{method:Z,headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();if(we.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&R.value.username===t.value.username){const Ne=R.value.theme;Ne&&Ne!==t.value.theme&&(t.value.theme=Ne,localStorage.setItem("quant_user",JSON.stringify(t.value)),o(Ne))}i.value=!1,f.value=null,await ee()}else ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{L.value=!1}}}async function B(Z){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${Z}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await ee())}catch(ue){console.error("[deleteUser]",ue)}}async function me(Z){try{const Ee=await(await fetch(`/api/users/${Z.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:Z.enabled})})).json();Ee.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Ee.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function ve(Z){try{const{value:ue}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${Z.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ue){const we=await(await fetch(`/api/users/${Z.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ue})})).json();we.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(we.message||"重置失败")}}catch{}}return{userList:l,userSearch:g,groupFilter:c,userPageTab:P,expandedGroups:_,addMemberGroupMap:M,filteredUsers:S,toggleGroupExpand:k,removeMemberFromGroupInline:T,addMemberToGroupInline:C,changeUserGroup:u,showAddUser:i,editingUser:f,userForm:R,savingUser:L,editingGroup:y,menuConfigDialog:D,memberDialog:I,groupEditForm:V,subPageCache:O,showAddGroup:F,addGroupForm:X,savingGroup:U,groupMembers:H,addMemberUsername:K,selectedMemberGroup:q,subPageSectionExpanded:a,toggleSubPageSection:E,getGroupMemberCount:n,getMenuEnabledCount:p,groupCount:J,openMemberManager:N,loadGroupMembers:x,addMemberToGroup:m,removeMemberFromGroup:A,availableUsersForGroup:w,onParentToggle:j,openMenuConfig:te,saveMenuConfig:re,deleteGroupConfig:se,createGroup:le,allGroups:Y,getGroupName:qe,loadAllGroups:ie,loadUsers:ee,editUser:$,saveUser:be,deleteUser:B,toggleUserEnabled:me,resetUserPassword:ve}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(s){const{ref:e,computed:v}=Vue,{stockKlineLoaded:t,stockDetailVisible:r,stockDetailTab:d,stockDetail:b,disposeStockKline:o}=s,l=e([]),g=e(!1),c=e(!1),P=e("date"),_=e([]),M=e([]),S=e([]),k=e([]),T=v(()=>{var m,A;const x=[];for(const w of l.value){if(!w||w.id==null)continue;const j=w.stock_name||w.stock_code||"",te=Array.isArray(w.messages)?w.messages:[];x.push({id:w.id,stock_code:w.stock_code,stock_name:j,first_msg:w.first_msg||((A=(m=te[0])==null?void 0:m.content)==null?void 0:A.substring(0,50))||"",msg_count:w.msg_count||te.length||0,created_at:w.created_at,date:(w.created_at||"").substring(0,10),month:(w.created_at||"").substring(0,7),messages:te})}return x}),C=v(()=>{const x={};for(const A of T.value){const w=A.date||"未知";x[w]||(x[w]=[]),x[w].push(A)}const m={};return Object.keys(x).sort((A,w)=>w.localeCompare(A)).forEach(A=>m[A]=x[A]),m}),u=v(()=>{const x={};for(const A of T.value){const w=A.month||"未知";x[w]||(x[w]=[]),x[w].push(A)}const m={};return Object.keys(x).sort((A,w)=>w.localeCompare(A)).forEach(A=>m[A]=x[A]),m}),i=v(()=>{const x={};for(const m of T.value){const A=`${m.stock_name}(${m.stock_code})`;x[A]||(x[A]=[]),x[A].push(m)}return x});function f(x){const m=_.value.indexOf(x);m>=0?_.value.splice(m,1):_.value.push(x)}function R(x){const m=C.value[x]||[];if(m.every(w=>_.value.includes(w.id)))_.value=_.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)_.value.includes(w.id)||_.value.push(w.id)}function L(x){const m=u.value[x]||[];if(m.every(w=>_.value.includes(w.id)))_.value=_.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)_.value.includes(w.id)||_.value.push(w.id)}function y(x){const m=i.value[x]||[];if(m.every(w=>_.value.includes(w.id)))_.value=_.value.filter(w=>!m.some(j=>j.id===w));else for(const w of m)_.value.includes(w.id)||_.value.push(w.id)}function D(x){const m=M.value.indexOf(x);m>=0?M.value.splice(m,1):M.value.push(x)}function I(x){const m=S.value.indexOf(x);m>=0?S.value.splice(m,1):S.value.push(x)}function V(x){const m=k.value.indexOf(x);m>=0?k.value.splice(m,1):k.value.push(x)}function O(){_.value.length===T.value.length?_.value=[]:_.value=T.value.map(x=>x.id)}async function F(){if(_.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${_.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const x of[..._.value])await J(x);_.value=[]}}const X={};async function U(x){b.value={stock:x.stock_code,name:x.stock_name},r.value=!0,d.value="chat",t.value=!1,o(),q.value=!0,a.value="",K.value=[];try{let m=X[x.id];if(!m){const A=await fetch("/api/ai/chat/history/"+x.id);if(!A.ok)throw new Error("load history failed");m=(await A.json()).messages||[],X[x.id]=m}K.value=m.map(A=>({role:A.role,content:A.content}))}catch{a.value="历史消息加载失败，请重试"}finally{q.value=!1}}const H=e(""),K=e([]),q=e(!1),a=e("");async function E(){var A;const x=H.value.trim();if(!x||q.value)return;a.value="",K.value.push({role:"user",content:x}),H.value="",q.value=!0;const m=K.value.length;K.value.push({role:"assistant",content:""});try{const te=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((A=b.value)==null?void 0:A.stock)||"",message:x})})).body.getReader(),re=new TextDecoder;let se="";for(;;){const{done:le,value:Y}=await te.read();if(le)break;se+=re.decode(Y,{stream:!0});const ie=se.split(`
`);se=ie.pop()||"";for(const qe of ie)if(qe.startsWith("data: "))try{const ee=JSON.parse(qe.slice(6));ee.token?K.value[m].content+=ee.token:ee.done?console.log("Stream done:",ee.session_id):ee.error&&(a.value=ee.error)}catch(ee){console.warn("SSE parse error:",ee)}}}catch(w){K.value[m].content||(K.value[m].content="网络错误: "+w.message)}q.value=!1}async function n(x){var A;a.value="",q.value=!0;const m={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};K.value.push({role:"user",content:m[x]||m.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((A=b.value)==null?void 0:A.stock)||"",mode:x})});if(j.ok){const te=await j.json();K.value.push({role:"assistant",content:te.reply||"无回复"})}}catch(w){a.value="网络错误: "+w.message}q.value=!1}async function p(){g.value=!0,c.value=!1;try{const x=await fetch("/api/ai/chat/history?view=date");if(x.ok){const m=await x.json(),A=[];for(const w of m)for(const j of w.items||[])A.push(j);l.value=A}else c.value=!0}catch(x){console.error(x),c.value=!0}finally{g.value=!1}}async function J(x){try{await fetch("/api/ai/chat/history/"+x,{method:"DELETE"}),l.value=l.value.filter(m=>m.id!==x)}catch(m){console.error("deleteChatSession:",m)}}function N(x){if(!x)return"";const m=String(x).split(`
`),A=[],w=[];let j=0;for(;j<m.length;){if(/^\s*\|.*\|\s*$/.test(m[j])){let re=j;const se=[];for(;re<m.length&&/^\s*\|.*\|\s*$/.test(m[re]);)se.push(m[re]),re++;const le=qe=>qe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ee=>ee.trim()),Y=se.map(le);if(Y.length>1&&Y[1].every(qe=>/^:?-{3,}:?$/.test(qe))){const qe=Math.max(...Y.map(B=>B.length)),ee=Y[0].slice(0,qe),$=Y.slice(2);let be="<table>";$.length?(be+="<thead><tr>"+ee.map(B=>"<th>"+B+"</th>").join("")+"</tr></thead>",be+="<tbody>"+$.map(B=>"<tr>"+B.slice(0,qe).map(me=>"<td>"+me+"</td>").join("")+"</tr>").join("")+"</tbody>"):be+="<tbody><tr>"+ee.map(B=>"<td>"+B+"</td>").join("")+"</tr></tbody>",be+="</table>",A.push(be),w.push("\0T"+(A.length-1)+"\0"),j=re;continue}for(;j<re;)w.push(m[j]),j++;continue}w.push(m[j]),j++}let te=w.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return A.forEach((re,se)=>{te=te.split("\0T"+se+"\0").join(re)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(te=window.__quantModules.core.sanitizeHtml(te)),te}return{chatSessions:l,chatHistoryView:P,selectedChatIds:_,expandedChatDates:M,expandedChatMonths:S,expandedChatStocks:k,chatHistoryLoading:g,chatHistoryError:c,allChatSessionsFlat:T,chatGroupedByDate:C,chatGroupedByMonth:u,chatGroupedByStock:i,toggleSelectChat:f,toggleSelectChatDate:R,toggleSelectChatMonth:L,toggleSelectChatStock:y,toggleChatDateExpand:D,toggleChatMonthExpand:I,toggleChatStockExpand:V,selectAllChatSessions:O,deleteSelectedChatSessions:F,viewChatSession:U,loadChatHistory:p,deleteChatSession:J,renderMarkdown:N,stockChatInput:H,stockChatMessages:K,stockChatLoading:q,stockChatError:a,askStockSend:E,askStockQuick:n}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e={},v=0;function t(o,l,g){if(typeof o!="function")return"";var c="undo-"+ ++v,P={fn:o,label:l||"",timer:null,active:!0};return e[c]=P,g&&g>0&&(P.timer=setTimeout(function(){d(c)},g)),c}function r(o){var l=e[o];if(!l||!l.active)return!1;l.timer&&clearTimeout(l.timer),delete e[o],l.active=!1;try{l.fn()}catch{}return!0}function d(o){var l=e[o];l&&(l.timer&&clearTimeout(l.timer),delete e[o],l.active=!1)}function b(){var o=0;for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&o++;return o}return{register:t,undo:r,remove:d,activeCount:b}}return{createUndoStack:s}});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function s(d,b,o){return"qc_fm_"+(d||"guest")+"_"+b+"_v"+(o||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function v(d,b,o,l){var g=e();if(!g||!d||b===void 0||b===null)return!1;try{return g.setItem(s(o,d,l),JSON.stringify(b)),!0}catch{return!1}}function t(d,b,o){var l=e();if(!l||!d)return null;try{var g=l.getItem(s(b,d,o));return g?JSON.parse(g):null}catch{return null}}function r(d,b,o){var l=e();if(!(!l||!d))try{l.removeItem(s(b,d,o))}catch{}}return{saveForm:v,loadForm:t,clearForm:r}});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var s="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function v(d){var b=e();if(!b||!d)return!1;try{return b.setItem(s,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var b=d.getItem(s);return b?JSON.parse(b):null}catch{return null}}function r(){var d=e();if(d)try{d.removeItem(s)}catch{}}return{save:v,restore:t,clear:r,KEY:s}});(function(){if(typeof window>"u")return;let s=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function v(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var r=document.createElement("div");r.id="qc-install-bar",r.className="qc-install-bar",r.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var b=document.createElement("span");b.className="qc-install-actions";var o=document.createElement("button");o.className="qc-install-btn",o.type="button",o.textContent="安装";var l=document.createElement("button");l.className="qc-install-close",l.type="button",l.setAttribute("aria-label","关闭"),l.textContent="×",b.appendChild(o),b.appendChild(l),r.appendChild(d),r.appendChild(b),document.body.appendChild(r),o.addEventListener("click",function(){s&&(s.prompt(),s=null),r.remove()}),l.addEventListener("click",function(){v(),r.remove()})}}window.addEventListener("beforeinstallprompt",function(r){r.preventDefault(),s=r,e()||t()}),window.addEventListener("appinstalled",function(){s=null;var r=document.getElementById("qc-install-bar");r&&r.remove()})})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function s(v){var t=[];return(v||[]).forEach(function(r){if(r){var d=typeof r=="string"?r:r.code||"",b=typeof r=="object"&&r.name?String(r.name):"";d&&t.push(b&&b!==d?d+" "+b:d)}}),t.join(`
`)}function e(v){if(!v||v.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=v.added||0,r=v.existed||0,d=v.invalid||0,b=v.total||0;return{added:t,existed:r,invalid:d,total:b,failed:d,message:"已加入 "+t+" 只"+(r?"，"+r+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:s,summarize:e}});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(b,o,l,g,c,P,_){var M=_??s,S=b,k=o;return S+l>c-M&&(S=Math.max(M,c-M-l)),k+g>P-M&&(k=Math.max(M,P-M-g)),{left:Math.round(S),top:Math.round(k)}}var v=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return v.map(function(b){return{key:b.key,label:b.label}})}function r(b){var o=b||"";return o?v.filter(function(l){return l.key==="add-watch"?o!=="watchlist":l.key==="delete"?o==="watchlist":!0}).map(function(l){return{key:l.key,label:l.label}}):t()}function d(b,o,l){var g=l??500;return!b||!o?!1:o-b>=g}return{positionMenu:e,getActions:t,getActionsFor:r,isLongPress:d}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,inject:e,onMounted:v,onBeforeUnmount:t}=Vue,r=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function d(o){let l=o;for(;l&&l!==document.body;){if(l.hasAttribute&&(l.hasAttribute("data-ctx-code")||l.hasAttribute("data-copy-code")))return l;l=l.parentElement}return null}function b(o){return{code:o.getAttribute("data-ctx-code")||o.getAttribute("data-copy-code")||"",name:o.getAttribute("data-ctx-name")||"",context:o.getAttribute("data-ctx-context")||""}}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const o=e("qcState"),l=s(!1),g=s({left:0,top:0}),c=s(r?r.getActions():[]),P=s({});function _(){l.value=!1}function M(y,D,I){if(P.value=I||{},c.value=r&&r.getActionsFor?r.getActionsFor(P.value.context):r?r.getActions():[],r){const V=window.innerWidth||document.documentElement.clientWidth,O=window.innerHeight||document.documentElement.clientHeight,F=180,X=c.value.length*32+12;g.value=r.positionMenu(y,D,F,X,V,O)}else g.value={left:y,top:D};l.value=!0}function S(y){_(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:y.key,payload:P.value}}))}function k(y){const D=y&&y.detail||{},I=D.payload||{},V=I.code;if(!V||!o)return;const O=window.ElementPlus&&window.ElementPlus.ElMessage;D.action==="detail"?o.showStockDetail(V,I.name):D.action==="add-watch"?o.addToWatchlist(V,I.name):D.action==="delete"?o.removeFromWatchlist(V):D.action==="copy"?navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(V),O&&O.success("已复制 "+V)):D.action==="export"&&o.exportCSV()}function T(y){const D=d(y.target);D&&(y.preventDefault(),M(y.clientX,y.clientY,b(D)))}let C=null,u=0;function i(y){const D=d(y.target);D&&(u=Date.now(),C=setTimeout(function(){if(r&&r.isLongPress(u,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const I=y.touches&&y.touches[0];M(I?I.clientX:0,I?I.clientY:0,b(D))}},520))}function f(){C&&(clearTimeout(C),C=null)}function R(y){if(y.key==="Escape"){_();return}if(y.shiftKey&&y.key==="F10"){const D=d(document.activeElement);if(D){y.preventDefault();const I=D.getBoundingClientRect();M(I.left+I.width/2,I.bottom,b(D))}}}function L(y){l.value&&!(y.target&&y.target.closest&&y.target.closest(".qc-ctx"))&&_()}return v(function(){document.addEventListener("contextmenu",T,!0),document.addEventListener("touchstart",i,{passive:!0}),document.addEventListener("touchend",f,!0),document.addEventListener("keydown",R,!0),document.addEventListener("mousedown",L,!0),window.addEventListener("qc:context-action",k)}),t(function(){document.removeEventListener("contextmenu",T,!0),document.removeEventListener("touchstart",i,!0),document.removeEventListener("touchend",f,!0),document.removeEventListener("keydown",R,!0),document.removeEventListener("mousedown",L,!0),window.removeEventListener("qc:context-action",k)}),{visible:l,pos:g,actions:c,run:S}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=0,v={};function t(l){var g=++e;if(l&&v[l])return{deduped:!0,id:v[l].seq,controller:v[l].controller};var c=typeof AbortController<"u"?new AbortController:null;return v[l]={seq:g,controller:c},{deduped:!1,id:g,controller:c}}function r(l,g){var c=v[l];return!c||c.seq!==g}function d(l){var g=v[l];if(g&&g.controller)try{g.controller.abort()}catch{}}function b(l,g){var c=v[l];c&&c.seq===g&&delete v[l]}function o(){var l=0;for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&l++;return l}return{begin:t,isStale:r,abort:d,finish:b,activeCount:o}}return{createRequestGuard:s}});(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=Object.create(null),v=Object.create(null);function t(_,M){if(!_||typeof _!="string")throw new Error("domain name required");if(e[_])throw new Error("duplicate domain: "+_);for(var S=Array.isArray(M)?M:[],k=0;k<S.length;k++){var T=S[k];if(v[T]&&v[T]!==_)throw new Error("duplicate key across domains: "+T);v[T]=_}return e[_]={keys:S.slice(),refs:Object.create(null)},!0}function r(_,M,S){var k=e[_];if(!k)throw new Error("unknown domain: "+_);if(k.keys.indexOf(M)===-1)throw new Error("key not declared in domain: "+_+"."+M);return k.refs[M]=S,!0}function d(_,M){var S=e[_];return!!S&&M in S.refs}function b(_,M){var S=e[_];if(S){var k=S.refs[M];return k&&typeof k=="object"&&"value"in k?k.value:k}}function o(_){var M=e[_];if(!M)return null;for(var S={},k=0;k<M.keys.length;k++){var T=M.keys[k],C=M.refs[T];S[T]=C&&typeof C=="object"&&"value"in C?C.value:C}return S}function l(_,M){var S=e[_];if(!S||!M)return!1;for(var k=0;k<S.keys.length;k++){var T=S.keys[k];if(T in M){var C=S.refs[T];C&&typeof C=="object"&&"value"in C&&(C.value=M[T])}}return!0}function g(){return Object.keys(e)}function c(_){var M=e[_];return M?M.keys.slice():[]}function P(){for(var _=0,M=Object.keys(e),S=0;S<M.length;S++)_+=Object.keys(e[M[S]].refs).length;return _}return{defineDomain:t,attach:r,has:d,get:b,snapshot:o,restore:l,domains:g,keys:c,attachedCount:P}}return{createStateRegistry:s}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(s){const{ref:e,computed:v,watch:t}=Vue,{consensus:r,currentPage:d,currentSubPage:b,dashboardData:o,searchKeyword:l,statusFilter:g,strategyFilter:c,strategyFilterCounts:P}=s;function _(I){const V=c.value.selected;if(!V||V.length===0)return I;const O=c.value.mode;return I.filter(F=>{const X=F.strategy_names||F.strategies||[];return O==="union"?V.some(U=>X.includes(U)):V.every(U=>X.includes(U))})}const M=v(()=>{const I=_(r.value||[]);return{all:I.length,newCount:I.filter(V=>V.status==="new").length,current:I.filter(V=>V.status==="current").length,out:I.filter(V=>V.status==="out").length}}),S=v(()=>{let I=r.value||[];if(g.value!=="all"&&(I=I.filter(V=>V.status===g.value)),I=_(I),l.value){const V=l.value.toLowerCase();I=I.filter(O=>O.code.toLowerCase().includes(V)||O.name&&O.name.toLowerCase().includes(V))}return I}),k=v(()=>{const I=r.value||[],V={},O={};for(const F of I)F.code&&F.name&&(O[F.code]=F.name);for(const F of I){const X=F.strategy_names||F.strategies||[];for(const U of X)V[U]||(V[U]={strategy:U,count:0,codes:[],names:[]}),V[U].count++,V[U].codes.includes(F.code)||(V[U].codes.push(F.code),V[U].names.push({code:F.code,name:O[F.code]||F.code}))}return Object.values(V).sort((F,X)=>X.count-F.count)}),T=v(()=>{const I=c.value.selected,V=c.value.mode,O={};for(const[F,X]of Object.entries(P.value)){const U=X||[];!I||I.length===0?O[F]=U.length:V==="union"?O[F]=U.filter(H=>H.strategies&&I.some(K=>H.strategies.includes(K))).length:O[F]=U.filter(H=>H.strategies&&I.every(K=>H.strategies.includes(K))).length}return O});function C(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(c.value.selected)),localStorage.setItem("quant_strategy_filter_mode",c.value.mode)}const u=v(()=>{const I=(o.value||{}).consensus_rank||[];return _(I)}),i=v(()=>{const I=r.value||P.value.day||[];return _(I).length}),f=v(()=>{const I=(o.value||{}).strategy_counts||[],V=r.value||P.value.day||[];if(V.length===0)return I;const O=_(V),F={};O.forEach(U=>{(U.strategy_names||U.strategies||[]).forEach(K=>{F[K]=(F[K]||0)+1})});const X=O.length||1;return I.map(U=>{const H=U.strategy_name||U.strategy_id,K=F[H]||0;return{...U,count:K,percentage:Math.round(K/X*1e3)/10}})}),R=v(()=>{const I=(o.value||{}).pool_changes||{},V=(I.new_count||0)-(I.out_count||0);return V>0?{dir:"up",text:"↑"+V}:V<0?{dir:"down",text:"↓"+Math.abs(V)}:{dir:"flat",text:"→0"}}),L=v(()=>{const I=(o.value||{}).time_coverage||{},V=new Date(I.start_date),O=new Date(I.end_date),F=new Date;if(!V.getTime()||!O.getTime()||F>=O)return 100;if(F<=V)return 0;const X=O-V,U=F-V;return Math.round(U/X*100)}),y=e(null);function D(I){c.value.selected=[I],c.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([I])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",b.value="calendar"}return{applyStrategyFilter:_,statusCounts:M,stockPool:S,strategyDistribution:k,strategyPreviewCount:T,saveStrategyFilter:C,filteredConsensusRank:u,currentPoolSize:i,filteredStrategyCounts:f,poolChangeBadge:R,timeBarPercent:L,lastRefreshTime:y,navigateToStrategyFilter:D}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.history={create:function(s){const{ref:e,computed:v,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:l,stockDetailLoading:g,stockKlineLoaded:c,viewCache:P,animateScoreEntrance:_,loadStockKline:M,refreshStockScore:S,disposeStockKline:k,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:i,aiEvalError:f,aiResult:R,loadLastEvaluation:L,autoEvaluateConfig:y,autoEvaluateScope:D,batchStocks:I,batchRunning:V,batchTotal:O,batchCompleted:F,batchCurrent:X,batchStatuses:U,batchResults:H,batchEvalErrors:K,expandedDates:q,expandedStocks:a,savingConfig:E,selectedHistoryIds:n,selectedWatchlistCodes:p,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:A,watchlistSort:w,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Y,getLatestScore:ie,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:be,watchlistSearch:B,watchlistResults:me,watchlistSearching:ve,dataRefreshConfig:Z,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:We,showUndoMessage:fe,addToWatchlist:oe,removeFromWatchlist:ye}=s;async function Ve(){if(!b.value)return;C.value=!0,R.value=null,f.value="",u.value="fetching",i.value=0;const Te=Date.now(),Ce=setInterval(()=>{C.value&&(i.value=Math.round((Date.now()-Te)/1e3))},500);try{const Pe=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:b.value.stock,stock_name:b.value.name||b.value.stock,strategy:A.value})});u.value="calculating";const Fe=await Pe.json();u.value="analyzing",Fe.success?(await nextTick(),R.value=Fe.data,o.value="ai",Ae()):(f.value=Fe.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch(Pe){f.value=Pe&&Pe.message&&!String(Pe.message).includes("Failed to fetch")?Pe.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{clearInterval(Ce),C.value=!1,i.value=0,f.value?u.value="":(u.value="done",setTimeout(()=>{u.value==="done"&&(u.value="")},800))}}const Oe=50,$e=e(0),he=e(!1),Se=v(()=>T.value.length<$e.value);async function Ae(){re.value=!0,se.value=!1;try{if(!localStorage.getItem("quant_token")){T.value=[];return}const Ce=await fetch(`/api/ai/history?limit=${Oe}&offset=0`);if(Ce.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),r.value=null;return}const Pe=await Ce.json();Pe.success?(T.value=Pe.data||[],$e.value=Pe.total!=null?Pe.total:T.value.length):se.value=!0}catch(Te){console.error("[loadAiHistory] error:",Te),se.value=!0}finally{re.value=!1}}async function ze(){if(!(he.value||!Se.value)){he.value=!0;try{const Ce=await(await fetch(`/api/ai/history?limit=${Oe}&offset=${T.value.length}`)).json();if(Ce.success&&Array.isArray(Ce.data)){const Pe=new Set(T.value.map(je=>je.id)),Fe=Ce.data.filter(je=>!Pe.has(je.id));T.value=T.value.concat(Fe),Ce.total!=null&&($e.value=Ce.total)}}catch(Te){console.warn("[loadMoreAiHistory] error:",Te)}finally{he.value=!1}}}async function Ye(Te){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const Pe=await(await fetch(`/api/ai/history/${Te}`,{method:"DELETE"})).json();if(Pe.success){ElementPlus.ElMessage.success("删除成功"),Ae();const Fe=n.value.indexOf(Te);Fe>=0&&n.value.splice(Fe,1)}else ElementPlus.ElMessage.error(Pe.message||"删除失败")}catch{}}function Ue(Te){const Ce=n.value.indexOf(Te);Ce>=0?n.value.splice(Ce,1):n.value.push(Te)}function Qe(){n.value=[]}function Ze(){p.value=[]}async function lt(){const Te=n.value;if(Te.length===0)return;const Ce=T.value.filter(Pe=>Te.includes(Pe.id)).map(Pe=>Pe.stock_code);N.value=!0,I.value=[...new Set(Ce)].join(",")}async function gt(){const Te=n.value;if(Te.length===0)return;const Ce=T.value.filter(je=>Te.includes(je.id)),Pe=[...new Map(Ce.map(je=>[je.stock_code,je])).values()];let Fe=0;for(const je of Pe)te.value.has(je.stock_code)||(await oe(je.stock_code,je.stock_name||je.stock_code),Fe++);Fe>0?ElementPlus.ElMessage.success(`已加入 ${Fe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function pe(){const Te=n.value;if(Te.length===0)return;const Ce=T.value.filter(Fe=>Te.includes(Fe.id)),Pe=[...new Map(Ce.map(Fe=>[Fe.stock_code,Fe])).values()];try{const je=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:Pe.map(tt=>({stock_code:tt.stock_code,stock_name:tt.stock_name||""}))})})).json();je&&je.success?ElementPlus.ElMessage.success(`已登记 ${je.count||Pe.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(je&&je.detail||"批量加入组合失败")}catch(Fe){console.warn("batchAddToPortfolio failed:",Fe),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function xe(){if(p.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${p.value.length} 只股票？`,"提示",{type:"warning"});for(const Te of p.value)await ye(Te);p.value=[],ElementPlus.ElMessage.success("已移除")}catch(Te){Te&&Te.message!=="cancel"&&console.warn("batchRemoveWatchlist:",Te)}}function Le(Te){const Ce=p.value.indexOf(Te);Ce>=0?p.value.splice(Ce,1):p.value.push(Te)}function h(){n.value.length===T.value.length?n.value=[]:n.value=T.value.map(Te=>Te.id)}function z(){p.value.length===j.value.length?p.value=[]:p.value=j.value.map(Te=>Te.code)}async function G(){if(n.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${n.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const Ce=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:n.value})})).json();Ce.success?(ElementPlus.ElMessage.success(Ce.message),n.value=[],Ae()):ElementPlus.ElMessage.error(Ce.message||"删除失败")}catch{}}async function ce(){try{const Ce=await(await fetch("/api/ai/auto-config")).json();Ce.success&&(y.value=Ce.data,Ce.data.evaluate_scope&&(D.value=Ce.data.evaluate_scope))}catch(Te){console.warn("loadAutoEvaluateConfig failed:",Te)}}async function de(){E.value=!0;try{y.value.evaluate_scope=D.value;const Ce=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)})).json();Ce.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),J.value=!1):ElementPlus.ElMessage.error(Ce.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{E.value=!1}}return{doAiEvaluate:Ve,aiHistoryTotal:$e,aiHistoryLoadingMore:he,hasMoreAiHistory:Se,loadAiHistory:Ae,loadMoreAiHistory:ze,deleteSingleHistory:Ye,toggleSelectHistory:Ue,clearSelection:Qe,clearWatchlistSelection:Ze,batchReevaluateHistory:lt,batchAddToWatchlist:gt,batchAddToPortfolio:pe,batchRemoveWatchlist:xe,toggleSelectWatchlist:Le,selectAllHistory:h,selectAllWatchlist:z,deleteSelectedHistory:G,loadAutoEvaluateConfig:ce,saveAutoEvaluateConfig:de}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.list={create:function(s){const{ref:e,computed:v,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:l,stockDetailLoading:g,stockKlineLoaded:c,viewCache:P,animateScoreEntrance:_,loadStockKline:M,refreshStockScore:S,disposeStockKline:k,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:i,aiEvalError:f,aiResult:R,loadLastEvaluation:L,autoEvaluateConfig:y,autoEvaluateScope:D,batchStocks:I,batchRunning:V,batchTotal:O,batchCompleted:F,batchCurrent:X,batchStatuses:U,batchResults:H,batchEvalErrors:K,expandedDates:q,expandedStocks:a,savingConfig:E,selectedHistoryIds:n,selectedWatchlistCodes:p,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:A,watchlistSort:w,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Y,getLatestScore:ie,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:be,watchlistSearch:B,watchlistResults:me,watchlistSearching:ve,dataRefreshConfig:Z,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:We,showUndoMessage:fe,loadAiHistory:oe}=s,ye=e(!1);async function Ve(){ye.value=!0;try{const G=await(await fetch("/api/watchlist")).json();G.success&&(j.value=G.stocks||[])}catch(z){console.warn("loadWatchlist failed:",z)}finally{ye.value=!1}}async function Oe(z,G){try{const de=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:z,name:G})})).json();if(de.success)return de.existed||j.value.push({code:z,name:G,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function $e(z){try{const G=j.value.find(de=>de.code===z),ce=G&&G.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(z)}`,{method:"DELETE"}),j.value=j.value.filter(de=>de.code!==z),te.value&&te.value.delete&&te.value.delete(z),We){const de=We.register(()=>{Oe(z,ce)},"移除自选",5e3);fe("已移除自选",de)}else ElementPlus.ElMessage.info("已移除自选")}catch(G){console.warn("removeFromWatchlist failed:",G)}}async function he(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const z=j.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),j.value=[],te.value&&te.value.clear&&te.value.clear(),ElementPlus.ElMessage.success("自选已清空"),We&&z.length){const G=We.register(()=>{z.forEach(ce=>Oe(ce.code,ce.name||""))},"清空自选",5e3);fe("自选已清空",G)}}catch(z){console.warn("clearWatchlist failed:",z)}}async function Se(z,G){te.value.has(z)?(await $e(z),ElementPlus.ElMessage.info("已移除自选")):await Oe(z,G)&&ElementPlus.ElMessage.success("已加入自选")}async function Ae(z,G){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(z,G||"");const ce=new Date().toISOString().split("T")[0],de=d.value||ce;o.value="kline",R.value=null,f.value="",k("stockKlineChart"),b.value=null,g.value=!0,c.value=!1,l.value=!0,nextTick(()=>_());try{const Te=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${de}`);b.value=await Te.json()}catch{b.value={stock:z,name:G,total_days:0}}finally{g.value=!1}await nextTick(),await M("daily"),S(),L(z)}const ze=e(!1);async function Ye(){var z;if(j.value.length!==0){ze.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((z=ce.details)==null?void 0:z.loaded)||[]).forEach(de=>$.value.add(de.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(G){console.error("预加载K线失败:",G)}finally{ze.value=!1}}}async function Ue(z,G){C.value=!0,R.value=null,f.value="",u.value="fetching",c.value=!1,k();const ce=new Date().toISOString().split("T")[0],de=d.value||ce;try{const Te=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${de}`);b.value=await Te.json()}catch{b.value={stock:z,name:G,total_days:0}}o.value="ai",l.value=!0,await nextTick();try{const Ce=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z,stock_name:G})})).json();Ce.success?(R.value=Ce.data,oe()):(f.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{C.value=!1,u.value=""}}async function Qe(){j.value.length!==0&&(N.value=!0,I.value=j.value.map(z=>z.code).join(","))}async function Ze(){p.value.length!==0&&(N.value=!0,I.value=p.value.join(","))}async function lt(){if(!B.value.trim()){me.value=[];return}ve.value=!0;try{const G=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(B.value)}`)).json();me.value=(G.results||[]).filter(ce=>!te.value.has(ce.code))}catch(z){console.warn("searchStockForWatchlist failed:",z)}finally{ve.value=!1}}async function gt(){try{const G=await(await fetch("/api/data-refresh/config")).json();Z.value=G}catch(z){console.error("加载数据刷新配置失败:",z)}}async function pe(){Ee.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ee.value=!1}}async function xe(){var z;ue.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((z=ce.parser_stats)==null?void 0:z.dates_count)||0}交易日`),P.clear(),await gt()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{ue.value=!1}}const Le=e(!1);async function h(){Le.value=!0;try{const G=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(G.success){const ce=G.result||{},de=G.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${de.pulled||0}/${de.total||0}`),P.clear(),await gt()}else ElementPlus.ElMessage.error(G.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Le.value=!1}}return{watchlistLoading:ye,loadWatchlist:Ve,addToWatchlist:Oe,removeFromWatchlist:$e,clearWatchlist:he,toggleWatchlist:Se,showStockKline:Ae,preloadingKline:ze,preloadWatchlistKline:Ye,watchlistEvaluate:Ue,batchEvaluateWatchlist:Qe,batchEvaluateSelected:Ze,searchStockForWatchlist:lt,loadDataRefreshConfig:gt,saveDataRefreshConfig:pe,triggerDataReload:xe,dataPullRunning:Le,triggerDataPull:h}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.analytics={create:function(s){const{ref:e,computed:v,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:l,stockDetailLoading:g,stockKlineLoaded:c,viewCache:P,animateScoreEntrance:_,loadStockKline:M,refreshStockScore:S,disposeStockKline:k,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:i,aiEvalError:f,aiResult:R,loadLastEvaluation:L,autoEvaluateConfig:y,autoEvaluateScope:D,batchStocks:I,batchRunning:V,batchTotal:O,batchCompleted:F,batchCurrent:X,batchStatuses:U,batchResults:H,batchEvalErrors:K,expandedDates:q,expandedStocks:a,savingConfig:E,selectedHistoryIds:n,selectedWatchlistCodes:p,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:A,watchlistSort:w,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Y,getLatestScore:ie,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:be,watchlistSearch:B,watchlistResults:me,watchlistSearching:ve,dataRefreshConfig:Z,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:We,showUndoMessage:fe,loadAiHistory:oe}=s,ye=v(()=>{const h={};for(const z of T.value){const G=(z.evaluate_time||"").split("T")[0];h[G]||(h[G]=[]),h[G].push(z)}for(const z in h)h[z].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),Ve=v(()=>{const h={};for(const z of T.value){const G=z.stock_code;h[G]||(h[G]=[]),h[G].push(z)}for(const z in h)h[z].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),Oe=v(()=>{const h={};for(const z of T.value){const G=(z.evaluate_time||"").split("T")[0].slice(0,7);h[G]||(h[G]=[]),h[G].push(z)}for(const z in h)h[z].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),$e=v(()=>Object.keys(Ve.value).length),he=v(()=>{const h=T.value.length;return h===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(G=>{const ce=T.value.filter(de=>de.result.total_score>=G.min&&de.result.total_score<=G.max).length;return{...G,count:ce,pct:Math.round(ce/h*100)}})});async function Se(){if(!m.value)return;const h=j.value.find(z=>z.code===m.value);if(h){C.value=!0,R.value=null,f.value="",u.value="fetching";try{b.value={stock:h.code,name:h.name,total_days:0},l.value=!0,o.value="ai",await nextTick();const G=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:h.code,stock_name:h.name,strategy:A.value})})).json();G.success?(R.value=G.data,oe(),m.value=""):(f.value=G.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{C.value=!1,u.value=""}}}function Ae(h){const z=q.value.indexOf(h);z>=0?q.value.splice(z,1):q.value.push(h)}function ze(h){const G=(ye.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function Ye(h){const G=(Oe.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function Ue(h){const z=a.value.indexOf(h);z>=0?a.value.splice(z,1):a.value.push(h)}function Qe(h){const G=(Ve.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}const Ze={},lt={};function gt(h,z,G){if(!h||(G&&(lt[z]={el:h,records:G}),Ze[z]===h))return;const ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,de=()=>{Object.keys(Ze).forEach(Ge=>{if(Ze[Ge]&&Ze[Ge]!==h){try{Ze[Ge].dispose()}catch{}delete Ze[Ge]}});const Te=[...G].sort((Ge,pt)=>Ge.evaluate_time.localeCompare(pt.evaluate_time)),Ce=Te.map(Ge=>(Ge.evaluate_time||"").split("T")[0]),Pe=Te.map(Ge=>{var pt;return((pt=Ge.result)==null?void 0:pt.total_score)??null}),Fe=Te.map(Ge=>{var pt;return((pt=Ge.result)==null?void 0:pt.level)??""}),je={primary:x("--qc-primary-600")||"#b8922a",textPrimary:x("--text-primary")||"#1f2937",textSecondary:x("--text-secondary")||"#6b7280",border:x("--chart-axis")||"#b9b2a6",axis:x("--chart-axis")||"#b9b2a6",split:x("--chart-split")||"#e7e1d6",up:x("--qc-market-up")||"#e63946",down:x("--qc-market-down")||"#2e7d32"},tt=[];for(let Ge=1;Ge<Pe.length;Ge++)Pe[Ge]!=null&&Pe[Ge-1]!=null&&Math.abs(Pe[Ge]-Pe[Ge-1])>=15&&tt.push({name:"大幅变化",coord:[Ce[Ge],Pe[Ge]],value:(Pe[Ge]-Pe[Ge-1]>0?"↑":"↓")+Math.abs(Pe[Ge]-Pe[Ge-1]),symbol:"pin",symbolSize:32,itemStyle:{color:Pe[Ge]-Pe[Ge-1]>0?je.up:je.down}});const ht=echarts.init(h),Xe=window.__quantModules&&window.__quantModules.echartsTheme;Xe&&typeof Xe.getEChartsTheme=="function"&&ht.setOption(Xe.getEChartsTheme()),ht.setOption({tooltip:{trigger:"axis",backgroundColor:x("--bg-card")||"#ffffff",borderColor:je.border,textStyle:{color:je.textPrimary},formatter:function(Ge){var ne;const pt=(ne=Ge[0])==null?void 0:ne.dataIndex,ae=pt!=null?Fe[pt]:"";return Ce[pt]+"<br/>得分: "+Pe[pt]+(ae?" ("+ae+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ce,axisLabel:{fontSize:10,rotate:30,color:je.textSecondary},axisLine:{lineStyle:{color:je.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:je.textSecondary},splitLine:{lineStyle:{color:je.split}}},series:[{data:Pe,type:"line",smooth:!0,lineStyle:{color:je.primary,width:2},itemStyle:{color:je.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:tt.length>0?{data:tt}:void 0}]}),Ze[z]=ht};ce?ce().then(de).catch(()=>{}):de()}function pe(){Object.keys(lt).forEach(h=>{const z=lt[h];if(!(!z||!z.el)){if(Ze[h]){try{Ze[h].dispose()}catch{}delete Ze[h]}gt(z.el,h,z.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(pe));async function xe(h){R.value=h,c.value=!1,k();try{const z=await fetch(`/api/calendar/stock/${h.stock_code}?date=${d.value}`);b.value=await z.json()}catch{b.value={stock:h.stock_code,name:h.stock_name||h.stock_code,total_days:0,history:[]}}l.value=!0,o.value="ai"}async function Le(){if(!I.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const h=I.value.split(/[,，\s]+/).filter(Ce=>Ce.trim());if(h.length===0)return;V.value=!0,O.value=h.length,F.value=0,X.value="",U.value={},H.value={},K.value={},h.forEach(Ce=>{U.value[Ce]="pending",H.value[Ce]=null});const z={"Content-Type":"application/json"};let G=0,ce=0,de=!1;try{const Ce=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:z,body:JSON.stringify({stock_codes:h})});if(Ce.ok&&Ce.body){de=!0;const Pe=Ce.body.getReader(),Fe=new TextDecoder("utf-8");let je="",tt=!1;for(;!tt;){const{value:ht,done:Xe}=await Pe.read();tt=Xe,je+=Fe.decode(ht||new Uint8Array,{stream:!tt});let Ge;for(;(Ge=je.indexOf(`

`))>=0;){const pt=je.slice(0,Ge);je=je.slice(Ge+2);const ae=pt.split(`
`).find(Je=>Je.startsWith("data: "));if(!ae)continue;let ne;try{ne=JSON.parse(ae.slice(6))}catch{continue}ne.type==="start"?ne.total&&(O.value=ne.total):ne.type==="item"?(F.value++,X.value=ne.stock_code,ne.success?(U.value[ne.stock_code]="success",H.value[ne.stock_code]=ne,G++):(U.value[ne.stock_code]="error",K.value[ne.stock_code]=ne.error||"评估失败",ce++)):ne.type==="done"&&(typeof ne.success=="number"&&(G=ne.success),typeof ne.fail=="number"&&(ce=ne.fail))}}if(je.trim()){const ht=je.split(`
`).find(Xe=>Xe.startsWith("data: "));if(ht)try{const Xe=JSON.parse(ht.slice(6));Xe.type==="item"?(F.value++,X.value=Xe.stock_code,Xe.success?(U.value[Xe.stock_code]="success",H.value[Xe.stock_code]=Xe,G++):(U.value[Xe.stock_code]="error",K.value[Xe.stock_code]=Xe.error||"评估失败",ce++)):Xe.type==="done"&&(typeof Xe.success=="number"&&(G=Xe.success),typeof Xe.fail=="number"&&(ce=Xe.fail))}catch{}}}}catch{de=!1}if(!de){G=0,ce=0,F.value=0;for(const Ce of h){X.value=Ce,U.value[Ce]="running";try{const Fe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:z,body:JSON.stringify({stock_code:Ce.trim(),stock_name:Ce.trim()})})).json();Fe.success?(U.value[Ce]="success",H.value[Ce]=Fe.data,G++):(U.value[Ce]="error",K.value[Ce]=Fe.message&&Fe.message!=="success"?Fe.message:"评估失败",ce++)}catch(Pe){U.value[Ce]="error",K.value[Ce]="网络错误: "+(Pe&&Pe.message?Pe.message:Pe),ce++}F.value++}}X.value="",await oe();const Te=h.length;setTimeout(()=>{ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${G}/${Te}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${G}/${Te} · 失败 ${ce}`),V.value=!1},500)}return{groupedByDate:ye,aiHistoryByStock:Ve,groupedByMonth:Oe,aiHistoryStockCount:$e,scoreDistribution:he,quickEvaluate:Se,toggleDateExpand:Ae,toggleSelectDate:ze,toggleSelectMonth:Ye,toggleStockExpand:Ue,toggleSelectStock:Qe,registerTrendChart:gt,viewAiResult:xe,doBatchEvaluate:Le}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.realtime={create:function(s){const{ref:e,computed:v,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:l,stockDetailLoading:g,stockKlineLoaded:c,viewCache:P,animateScoreEntrance:_,loadStockKline:M,refreshStockScore:S,disposeStockKline:k,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:i,aiEvalError:f,aiResult:R,loadLastEvaluation:L,autoEvaluateConfig:y,autoEvaluateScope:D,batchStocks:I,batchRunning:V,batchTotal:O,batchCompleted:F,batchCurrent:X,batchStatuses:U,batchResults:H,batchEvalErrors:K,expandedDates:q,expandedStocks:a,savingConfig:E,selectedHistoryIds:n,selectedWatchlistCodes:p,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:m,evalStrategy:A,watchlistSort:w,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Y,getLatestScore:ie,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:be,watchlistSearch:B,watchlistResults:me,watchlistSearching:ve,dataRefreshConfig:Z,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:We,showUndoMessage:fe}=s,oe=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};oe.REALTIME_WS_PATH;const ye=oe.REALTIME_DEGRADED_TEXT||"数据不可达",Ve=oe.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";oe.WARN_RISE_SPEED_THRESHOLD!=null&&oe.WARN_RISE_SPEED_THRESHOLD,oe.WARN_VOLUME_RATIO_THRESHOLD!=null&&oe.WARN_VOLUME_RATIO_THRESHOLD;const Oe=oe.quoteFmt||{price:de=>de==null?"--":Number(de).toFixed(2),pct:de=>de==null?"--":Number(de).toFixed(2)+"%",num:de=>de==null?"--":Number(de).toFixed(2),color:de=>""},$e=3,he=5e3,Se=e({}),Ae=e(!1),ze=e("idle");let Ye=null,Ue=null,Qe=0;function Ze(de){return oe.checkQuoteWarning?oe.checkQuoteWarning(de):null}function lt(de){return Ze(Se.value[de])}function gt(de){return Oe.color(Se.value[de])}function pe(de){return Oe.price(Se.value[de]&&Se.value[de].price)}function xe(de){return Oe.pct(Se.value[de]&&Se.value[de].change_pct)}function Le(de,Te){return Oe.num(Se.value[de]&&Se.value[de][Te])}function h(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function z(){if(!Ye||Ye.readyState!==1)return;const de=(j.value||[]).map(Te=>Te.code);de.length!==0&&Ye.send(JSON.stringify({subscribe:de}))}function G(){if(Ue&&(clearTimeout(Ue),Ue=null),Ye){try{Ye.onopen=null,Ye.onmessage=null,Ye.onerror=null,Ye.onclose=null,Ye.close()}catch{}Ye=null}Se.value={},Ae.value=!1,ze.value="idle"}function ce(){const de=h();if(!de||!oe.buildRealtimeWsUrl||ze.value==="open"||ze.value==="connecting")return;let Te;try{Te=oe.buildRealtimeWsUrl()+"?token="+encodeURIComponent(de)}catch{ze.value="offline",Ae.value=!0;return}ze.value="connecting";let Ce=null;try{Ce=new WebSocket(Te)}catch{ze.value="offline",Ae.value=!0;return}Ye=Ce,Ce.onopen=function(){ze.value="open",Qe=0,z()},Ce.onmessage=function(Pe){let Fe=null;try{Fe=JSON.parse(Pe.data||"{}")}catch{return}if(!Fe||Fe.type!=="quotes")return;if(Ae.value=!!Fe.degraded,Fe.degraded||!Array.isArray(Fe.data)){Se.value={};return}const je={};Fe.data.forEach(function(tt){tt&&tt.code&&(je[tt.code]=tt)}),Se.value=je},Ce.onerror=function(){ze.value="offline",Ae.value=!0},Ce.onclose=function(){ze.value="offline",Qe<$e?(Qe++,Ue=setTimeout(function(){ze.value!=="open"&&ce()},he*Qe)):Ae.value=!0}}return t(j,function(){ze.value==="open"&&z()}),h()&&setTimeout(ce,500),{REALTIME_DEGRADED_TEXT:ye,REALTIME_FALLBACK_TEXT:Ve,realtimeQuotes:Se,realtimeDegraded:Ae,realtimeWsState:ze,quoteWarningFor:lt,realtimeQuoteColor:gt,realtimePriceText:pe,realtimePctText:xe,realtimeRatioText:Le,disconnectRealtimeQuotes:G,connectRealtimeQuotes:ce}}}})();(function(){window.__quantModules||(window.__quantModules={});const s={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function v(o){return s[o]||"var(--text-tertiary)"}function t(o){return e[o]||"var(--bg-hover)"}const r=window.QuantUndoCore,d=r?r.createUndoStack():null;function b(o,l){if(!d||!window.Vue||!window.Vue.h)return;const g=window.Vue.h;ElementPlus.ElMessage.success({message:g("span",null,[o,g("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(l)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.create=function(l){const{ref:g,computed:c,watch:P}=Vue,{currentUser:_,selectedDate:M,stockDetail:S,stockDetailTab:k,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:i,animateScoreEntrance:f,loadStockKline:R,refreshStockScore:L,disposeStockKline:y,aiHistory:D,aiLoading:I,aiEvalStage:V,aiEvalElapsed:O,aiEvalError:F,aiResult:X,loadLastEvaluation:U,autoEvaluateConfig:H,autoEvaluateScope:K,batchStocks:q,batchRunning:a,batchTotal:E,batchCompleted:n,batchCurrent:p,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:A,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se}=l,le=rt=>(getComputedStyle(document.documentElement).getPropertyValue(rt)||"").trim(),Y=g(""),ie=g("default"),qe=g("default"),ee=g([]),$=c(()=>new Set(ee.value.map(rt=>rt.code))),be=g(!1),B=g(!1),me=c(()=>{const rt=[...ee.value];return qe.value==="name"?rt.sort((kt,qt)=>kt.name.localeCompare(qt.name,"zh")):qe.value==="added"?rt.sort((kt,qt)=>(qt.added_at||"").localeCompare(kt.added_at||"")):qe.value==="score"&&rt.sort((kt,qt)=>{const Tt=Z(kt.code);return Z(qt.code)-Tt}),rt});function ve(rt){const kt=D.value.filter(Tt=>Tt.stock_code===rt);if(kt.length===0)return null;const qt=kt.reduce((Tt,Nt)=>Tt.evaluate_time>Nt.evaluate_time?Tt:Nt);return{score:qt.result.total_score,color:v(qt.result.level),bg:t(qt.result.level)}}function Z(rt){const kt=ve(rt);return kt?kt.score:0}function ue(rt){ht(rt.code,rt.name),fe.value=fe.value.filter(kt=>kt.code!==rt.code),We.value=""}const Ee=c(()=>new Set(D.value.map(rt=>rt.stock_code))),we=g(new Set);function Ne(rt){we.value.add(rt)}const We=g(""),fe=g([]),oe=g(!1),ye=g({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ve=g(!1),Oe=g(!1),$e={v:null},he=window.__quantModules.watchlist.history.create({ref:g,computed:c,watch:P,currentUser:_,selectedDate:M,stockDetail:S,stockDetailTab:k,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:i,animateScoreEntrance:f,loadStockKline:R,refreshStockScore:L,disposeStockKline:y,aiHistory:D,aiLoading:I,aiEvalStage:V,aiEvalElapsed:O,aiEvalError:F,aiResult:X,loadLastEvaluation:U,autoEvaluateConfig:H,autoEvaluateScope:K,batchStocks:q,batchRunning:a,batchTotal:E,batchCompleted:n,batchCurrent:p,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:A,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Y,evalStrategy:ie,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:be,aiHistoryError:B,sortedWatchlist:me,getWatchlistScore:ve,getLatestScore:Z,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:We,watchlistResults:fe,watchlistSearching:oe,dataRefreshConfig:ye,dataRefreshReloading:Ve,dataRefreshSaving:Oe,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,addToWatchlist:function(rt,kt){return $e.v.addToWatchlist(rt,kt)},removeFromWatchlist:function(rt){return $e.v.removeFromWatchlist(rt)}}),{doAiEvaluate:Se,aiHistoryTotal:Ae,aiHistoryLoadingMore:ze,hasMoreAiHistory:Ye,loadAiHistory:Ue,loadMoreAiHistory:Qe,deleteSingleHistory:Ze,toggleSelectHistory:lt,clearSelection:gt,clearWatchlistSelection:pe,batchReevaluateHistory:xe,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:z,toggleSelectWatchlist:G,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Te,loadAutoEvaluateConfig:Ce,saveAutoEvaluateConfig:Pe}=he,Fe=window.__quantModules.watchlist.list.create({ref:g,computed:c,watch:P,currentUser:_,selectedDate:M,stockDetail:S,stockDetailTab:k,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:i,animateScoreEntrance:f,loadStockKline:R,refreshStockScore:L,disposeStockKline:y,aiHistory:D,aiLoading:I,aiEvalStage:V,aiEvalElapsed:O,aiEvalError:F,aiResult:X,loadLastEvaluation:U,autoEvaluateConfig:H,autoEvaluateScope:K,batchStocks:q,batchRunning:a,batchTotal:E,batchCompleted:n,batchCurrent:p,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:A,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Y,evalStrategy:ie,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:be,aiHistoryError:B,sortedWatchlist:me,getWatchlistScore:ve,getLatestScore:Z,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:We,watchlistResults:fe,watchlistSearching:oe,dataRefreshConfig:ye,dataRefreshReloading:Ve,dataRefreshSaving:Oe,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Ue}),{watchlistLoading:je,loadWatchlist:tt,addToWatchlist:ht,removeFromWatchlist:Xe,clearWatchlist:Ge,toggleWatchlist:pt,showStockKline:ae,preloadingKline:ne,preloadWatchlistKline:Je,watchlistEvaluate:ft,batchEvaluateWatchlist:wt,batchEvaluateSelected:dt,searchStockForWatchlist:yt,loadDataRefreshConfig:xt,saveDataRefreshConfig:Yt,triggerDataReload:Mt,dataPullRunning:At,triggerDataPull:Dt}=Fe;$e.v=Fe;const vt=window.__quantModules.watchlist.analytics.create({ref:g,computed:c,watch:P,currentUser:_,selectedDate:M,stockDetail:S,stockDetailTab:k,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:i,animateScoreEntrance:f,loadStockKline:R,refreshStockScore:L,disposeStockKline:y,aiHistory:D,aiLoading:I,aiEvalStage:V,aiEvalElapsed:O,aiEvalError:F,aiResult:X,loadLastEvaluation:U,autoEvaluateConfig:H,autoEvaluateScope:K,batchStocks:q,batchRunning:a,batchTotal:E,batchCompleted:n,batchCurrent:p,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:A,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Y,evalStrategy:ie,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:be,aiHistoryError:B,sortedWatchlist:me,getWatchlistScore:ve,getLatestScore:Z,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:We,watchlistResults:fe,watchlistSearching:oe,dataRefreshConfig:ye,dataRefreshReloading:Ve,dataRefreshSaving:Oe,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Ue}),{groupedByDate:zt,aiHistoryByStock:jt,groupedByMonth:Ct,aiHistoryStockCount:Lt,scoreDistribution:Qt,quickEvaluate:Xt,toggleDateExpand:Pt,toggleSelectDate:It,toggleSelectMonth:Jt,toggleStockExpand:Zt,toggleSelectStock:W,registerTrendChart:Me,viewAiResult:He,doBatchEvaluate:Ie}=vt,at=window.__quantModules.watchlist.realtime.create({ref:g,computed:c,watch:P,currentUser:_,selectedDate:M,stockDetail:S,stockDetailTab:k,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:i,animateScoreEntrance:f,loadStockKline:R,refreshStockScore:L,disposeStockKline:y,aiHistory:D,aiLoading:I,aiEvalStage:V,aiEvalElapsed:O,aiEvalError:F,aiResult:X,loadLastEvaluation:U,autoEvaluateConfig:H,autoEvaluateScope:K,batchStocks:q,batchRunning:a,batchTotal:E,batchCompleted:n,batchCurrent:p,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:m,expandedStocks:A,savingConfig:w,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Y,evalStrategy:ie,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:be,aiHistoryError:B,sortedWatchlist:me,getWatchlistScore:ve,getLatestScore:Z,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:We,watchlistResults:fe,watchlistSearching:oe,dataRefreshConfig:ye,dataRefreshReloading:Ve,dataRefreshSaving:Oe,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:b}),{REALTIME_DEGRADED_TEXT:it,REALTIME_FALLBACK_TEXT:st,realtimeQuotes:Rt,realtimeDegraded:Vt,realtimeWsState:ea,quoteWarningFor:$t,realtimeQuoteColor:Ht,realtimePriceText:ta,realtimePctText:Bt,realtimeRatioText:ca,disconnectRealtimeQuotes:da,connectRealtimeQuotes:ua}=at;return{quickEvalStock:Y,evalStrategy:ie,watchlistSort:qe,watchlist:ee,watchlistCodes:$,sortedWatchlist:me,getWatchlistScore:ve,getLatestScore:Z,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:We,watchlistResults:fe,watchlistSearching:oe,dataRefreshConfig:ye,dataRefreshReloading:Ve,dataRefreshSaving:Oe,aiHistoryLoading:be,aiHistoryError:B,aiHistoryTotal:Ae,aiHistoryLoadingMore:ze,hasMoreAiHistory:Ye,loadMoreAiHistory:Qe,watchlistLoading:je,doAiEvaluate:Se,loadAiHistory:Ue,deleteSingleHistory:Ze,toggleSelectHistory:lt,clearSelection:gt,clearWatchlistSelection:pe,batchReevaluateHistory:xe,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:z,toggleSelectWatchlist:G,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Te,loadAutoEvaluateConfig:Ce,saveAutoEvaluateConfig:Pe,loadWatchlist:tt,addToWatchlist:ht,removeFromWatchlist:Xe,clearWatchlist:Ge,toggleWatchlist:pt,showStockKline:ae,preloadingKline:ne,preloadWatchlistKline:Je,watchlistEvaluate:ft,batchEvaluateWatchlist:wt,batchEvaluateSelected:dt,searchStockForWatchlist:yt,loadDataRefreshConfig:xt,saveDataRefreshConfig:Yt,triggerDataReload:Mt,triggerDataPull:Dt,dataPullRunning:At,groupedByDate:zt,aiHistoryByStock:jt,groupedByMonth:Ct,aiHistoryStockCount:Lt,scoreDistribution:Qt,quickEvaluate:Xt,toggleDateExpand:Pt,toggleSelectDate:It,toggleSelectMonth:Jt,toggleStockExpand:Zt,toggleSelectStock:W,registerTrendChart:Me,viewAiResult:He,doBatchEvaluate:Ie,realtimeQuotes:Rt,realtimeDegraded:Vt,realtimeWsState:ea,connectRealtimeQuotes:ua,disconnectRealtimeQuotes:da,quoteWarningFor:$t,realtimeQuoteColor:Ht,realtimePriceText:ta,realtimePctText:Bt,realtimeRatioText:ca,REALTIME_DEGRADED_TEXT:it,REALTIME_FALLBACK_TEXT:st}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(s){const{ref:e,computed:v}=Vue,t=e([]),r=e(null),d=e([]),b=e(!1),o=e(!1),l=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),c=e(!1),P=e(!1),_=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),M=e(!1),S=e("positions"),k=e(30),T=e(!1),C=e(""),u=e(!1),i=e({dates:[],equity:[],values:[]}),f=v(()=>t.value.length),R=e("metrics"),L=e(!1),y=e(""),D=e(!1),I=e({metrics:null,rules:[],rebalance:null}),V=v(function(){const w=I.value.metrics;if(!w)return[];const j=function(re){return re==null?"--":Number(re).toFixed(2)+"%"},te=function(re){return re==null?"--":Number(re).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(w.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(w.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(w.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(w.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(w.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(w.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:te(w.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:te(w.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:te(w.calmar_ratio)},{key:"beta",label:"Beta",value:te(w.beta)}]});async function O(){L.value=!0;try{const w=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),te=w&&w.success?w.risk:null,re=j&&j.success?j.rules||[]:[],se=j&&j.success?j.rebalance:null;I.value={metrics:te,rules:re,rebalance:se},D.value=!!(te&&Object.keys(te).length>0),y.value=w&&w.note||j&&j.note||""}catch(w){console.warn("[portfolio] 加载风险数据失败:",w),D.value=!1,y.value="风险数据加载失败"}finally{L.value=!1}}async function F(){b.value=!0,o.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],r.value=j.summary||null):o.value=!0}catch(w){console.warn("[portfolio] 加载持仓失败:",w),o.value=!0}finally{b.value=!1}}async function X(){const w=g.value,j=(w.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const te=Number(w.cost_price),re=Number(w.quantity);if(!(te>0)||!(re>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}c.value=!0;try{const le=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(w.stock_name||"").trim(),cost_price:te,quantity:re})})).json();le.success?(ElementPlus.ElMessage.success(le.message||"持仓已更新"),l.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await F(),N(k.value)):ElementPlus.ElMessage.error(le.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{c.value=!1}}async function U(w){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+w+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const te=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(w),{method:"DELETE"})).json();te.success?(ElementPlus.ElMessage.success("已删除持仓"),await F(),q(),N(k.value)):ElementPlus.ElMessage.error(te.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function H(w,j){_.value={stock_code:w,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},P.value=!0}async function K(){const w=_.value;if(!w.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(w.price),te=Number(w.quantity);if(!(j>0)||!(te>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}M.value=!0;try{const se=await(await fetch("/api/portfolio/trades",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:w.stock_code,stock_name:w.stock_name||"",action:w.action,price:j,quantity:te,trade_date:w.trade_date||"",note:(w.note||"").trim()})})).json();se.success?(ElementPlus.ElMessage.success(se.message||"调仓已记录"),P.value=!1,await F(),await q(),N(k.value)):ElementPlus.ElMessage.error(se.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{M.value=!1}}async function q(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(d.value=j.trades||[])}catch(w){console.warn("[portfolio] 加载调仓记录失败:",w)}}const a=w=>(getComputedStyle(document.documentElement).getPropertyValue(w)||"").trim();function E(w){if(!w||!w.length)return[];let j=w[0]||0;const te=[];for(let re=0;re<w.length;re++){const se=w[re]||0;se>j&&(j=se),te.push(j>0?Math.round((se-j)/j*1e3)/10:0)}return te}function n(){const w={primary:a("--qc-primary-600")||"#b8922a",textPrimary:a("--text-primary")||"#1f2937",textSecondary:a("--text-secondary")||"#6b7280",border:a("--border-light")||"#e5e7eb",up:a("--color-rise")||"#E63946",down:a("--color-fall")||"#2E7D32"},j=i.value;return{tooltip:{trigger:"axis",backgroundColor:a("--bg-card")||"#ffffff",borderColor:w.border,textStyle:{color:w.textPrimary},formatter:function(te){const re=te[0]?te[0].dataIndex:-1,se=j.dates[re]||"",le=j.equity[re],Y=j.values[re];let ie=se||"";return le!=null&&(ie+="<br/>组合净值: "+le),Y!=null&&(ie+="<br/>组合市值: "+Y),ie}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:w.textSecondary},axisLine:{lineStyle:{color:w.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:w.textSecondary},splitLine:{lineStyle:{color:w.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:w.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:w.primary,width:2},itemStyle:{color:w.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:E(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:w.down,width:1.5},itemStyle:{color:w.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function p(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function J(w,j,te){i.value={dates:w||[],equity:j||[],values:te||[]},u.value=!!w&&w.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",n,{key:"portfolio-equity"}):p()}async function N(w){T.value=!0,C.value="";const j=Number(w)||k.value||30;k.value=j;try{const re=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();re.success?(C.value=re.note||"",J(re.dates||[],re.equity||[],re.values||[])):(C.value="数据暂不可用",p())}catch(te){console.warn("[portfolio] 加载收益曲线失败:",te),C.value="数据暂不可用",p()}finally{T.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function x(w,j){if(w==null||w===""||isNaN(Number(w)))return"--";const te=Number(w),re=j??2;return(te>=0?"+":"")+te.toFixed(re)}function m(w,j){if(w==null||w===""||isNaN(Number(w)))return"--";const te=Number(w),re=j??2;return(te>=0?"+":"")+te.toFixed(re)+"%"}function A(w){if(w==null||w===""||isNaN(Number(w)))return"";const j=Number(w);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:r,trades:d,loading:b,loadError:o,showAddForm:l,addForm:g,addSaving:c,tradeFormVisible:P,tradeForm:_,tradeSaving:M,portfolioTab:S,equityDays:k,equityLoading:T,equityNote:C,equityHasData:u,portfolioCount:f,loadPortfolio:F,addPosition:X,removePosition:U,openTradeForm:H,submitTrade:K,loadTrades:q,loadEquity:N,fmtSigned:x,fmtSignedPct:m,signClass:A,riskTab:R,riskLoading:L,riskNote:y,riskHasData:D,riskData:I,riskMetricList:V,loadRisk:O}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function s(l,g){var c=Number(l);return isFinite(c)?c:typeof g=="number"?g:0}function e(l){var g=Array.isArray(l)?l:[];if(g.length<2)return null;for(var c=-1/0,P=0,_=0,M=0,S=0,k=0;k<g.length;k++){var T=s(g[k].equity!=null?g[k].equity:g[k].value);T>c&&(c=T,P=k);var C=c>0?(c-T)/c*100:0;C>_&&(_=C,M=P,S=k)}function u(i){return g[i]&&g[i].date?g[i].date:""}return{maxDrawdown:Math.round(_*100)/100,peakIndex:M,troughIndex:S,peakDate:u(M),troughDate:u(S)}}function v(l){for(var g=l||{},c={},P=Object.keys(g).sort(),_=0;_<P.length;_++){var M=P[_],S=String(M).slice(0,4);/^\d{4}$/.test(S)&&(c[S]=(c[S]||0)+s(g[M]))}var k=Object.keys(c).sort();return k.map(function(T){return{year:T,return:Math.round(c[T]*100)/100}})}function t(l){var g=Array.isArray(l)?l:[],c={};g.forEach(function(M){(M.points||[]).forEach(function(S){S&&S.date&&(c[S.date]=1)})});var P=Object.keys(c).sort(),_=g.map(function(M){var S={};return(M.points||[]).forEach(function(k){k&&k.date&&(S[k.date]=s(k.value!=null?k.value:k.equity))}),{name:M.name||"",data:P.map(function(k){return k in S?S[k]:null})}});return{dates:P,series:_}}function r(l){var g=l||{},c=function(_){return s(_)},P=function(_,M){var S=c(_);return isFinite(S)?S.toFixed(M):"--"};return[{key:"total_return",label:"总收益",value:P(g.total_return,2),suffix:"%",dir:c(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:P(g.annual_return,2),suffix:"%",dir:c(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:P(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:P(g.sharpe_ratio,2),suffix:"",dir:c(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:P(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:P(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(c(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:P(g.volatility,2),suffix:"%",dir:""}]}function d(l){var g=l==null?"":String(l);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function b(l){var g=l||{},c=[];c.push("回测指标"),c.push("指标,数值"),(g.metrics||[]).forEach(function(u){c.push(d(u.label)+","+d((u.value||"")+(u.suffix||"")))}),c.push(""),c.push("净值曲线");var P=["日期"].concat((g.series||[]).map(function(u){return u.name}));c.push(P.map(d).join(","));for(var _=g.dates||[],M=g.series||[],S=0;S<_.length;S++){for(var k=[_[S]],T=0;T<M.length;T++){var C=M[T].data&&M[T].data[S];k.push(C??"")}c.push(k.map(d).join(","))}return c.push(""),c.push("交易明细"),c.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(u){c.push(d(u.date)+","+d(u.stock)+","+d(u.action)+","+d(u.reason))}),c.join(`
`)}function o(l){return l==="buy"?"买入":l==="sell"?"卖出":l||""}return{toNum:s,computeMaxDrawdownRegion:e,buildAnnualReturns:v,buildNavSeries:t,buildMetrics:r,buildBacktestCsv:b,tradeActionText:o}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(s){const{ref:e,computed:v}=Vue,t=window.QuantBacktest||{},r=s||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],o=(Array.isArray(r.backtestStrategies)&&r.backtestStrategies.length?r.backtestStrategies:d).map(a=>({id:a.id,name:a.name})),l=e(o.length?[o[0].id]:[]),g=e(T()),c=e(1e5),P=e(3e-4),_=e(!1),M=e(!1),S=e(null),k=e("");function T(){const a=new Date,E=new Date;E.setFullYear(E.getFullYear()-1);const n=p=>p.getFullYear()+"-"+String(p.getMonth()+1).padStart(2,"0")+"-"+String(p.getDate()).padStart(2,"0");return[n(E),n(a)]}function C(a){const E=l.value.indexOf(a);E>=0?l.value.length>1&&l.value.splice(E,1):l.value.push(a)}function u(a){const E=o.find(n=>n.id===a);return E?E.name:a}function i(a){const E=a.summary||a;return{strategy_id:E.strategy_id,start_date:E.start_date,end_date:E.end_date,total_days:E.total_days,total_return:E.total_return,annual_return:E.annual_return,max_drawdown:E.max_drawdown,volatility:E.volatility,sharpe_ratio:E.sharpe_ratio,sortino_ratio:E.sortino_ratio,win_rate:E.win_rate,profit_loss_ratio:E.profit_loss_ratio,avg_positions:E.avg_positions!=null?E.avg_positions:E.avg_positions_per_day,total_trades:E.total_trades,turnover_rate:E.turnover_rate,success:E.success!==!1,message:E.message||"",insample_total_return:E.insample_total_return!=null?E.insample_total_return:null,outsample_total_return:E.outsample_total_return!=null?E.outsample_total_return:null,out_sample_ratio:E.out_sample_ratio!=null?E.out_sample_ratio:.2,overfit_warning:!!E.overfit_warning,overfit_reason:E.overfit_reason||""}}function f(a){return(Array.isArray(a)?a:[]).map(E=>({date:E.date,value:E.equity!=null?E.equity:E.value}))}function R(a,E){const n=i(E),p=f(E.equity_curve),J=E.monthly_returns||{},N=Array.isArray(E.trade_history)?E.trade_history:[],x={id:a,name:u(a),summary:n,equityCurve:p,monthlyReturns:J,trades:N};let m=null;if(_.value){const A=Number(c.value)||1e5;m={name:"现金基准",points:p.map(w=>({date:w.date,value:A}))}}return{success:!0,mode:"single",strategies:[x],primary:x,benchmark:m,period:(n.start_date||"")+" ~ "+(n.end_date||"")}}function L(a,E){const n=E.strategy_results||{},p=a.map(x=>{const m=n[x];if(!m)return null;const A=i(m);return{id:x,name:u(x),summary:A,equityCurve:f(m.equity_curve),monthlyReturns:m.monthly_returns||{},trades:Array.isArray(m.trade_history)?m.trade_history:[]}}).filter(x=>x&&x.summary.success!==!1),J=p.length?p[0]:null;let N=null;return _.value&&(N={name:"等权组合基准",points:f(E.portfolio_equity)}),{success:p.length>0,mode:"multi",strategies:p,primary:J,benchmark:N,period:J?J.summary.start_date+" ~ "+J.summary.end_date:""}}const y=v(()=>{const a=S.value;return!a||!a.primary?[]:t.buildMetrics?t.buildMetrics(a.primary.summary):[]}),D=v(()=>{const a=S.value;return!a||!a.primary||!a.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(a.primary.monthlyReturns):[]}),I=v(()=>{const a=S.value;return!a||!a.primary?[]:(a.primary.trades||[]).slice().sort((E,n)=>String(n.date||"").localeCompare(String(E.date||"")))}),V=v(()=>{const a=S.value;return!a||!a.strategies||a.strategies.length<2?[]:a.strategies.map(E=>({name:E.name,metrics:t.buildMetrics?t.buildMetrics(E.summary):[]}))}),O=v(()=>{const a=S.value;return!a||!a.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(a.primary.equityCurve):null});async function F(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const E=l.value;if(!E.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const n=g.value,p={start_date:n&&n[0]||void 0,end_date:n&&n[1]||void 0},J={"Content-Type":"application/json"};M.value=!0,S.value=null,k.value="";try{if(E.length===1){const N=Object.assign({},p,{initial_capital:Number(c.value)||1e5,commission_rate:Number(P.value)||3e-4}),x=await fetch("/api/backtest/"+encodeURIComponent(E[0]),{method:"POST",headers:J,body:JSON.stringify(N)});if(!x.ok){const A=await x.json().catch(()=>({}));throw new Error(A.detail||"回测失败")}const m=await x.json();if(!m.success)throw new Error(m.message||"回测失败");S.value=R(E[0],m)}else{const N=await fetch("/api/backtest/multi",{method:"POST",headers:J,body:JSON.stringify(Object.assign({},p,{strategy_ids:E}))});if(!N.ok){const m=await N.json().catch(()=>({}));throw new Error(m.detail||"回测失败")}const x=await N.json();if(!x.success)throw new Error(x.message||"多策略回测失败");if(S.value=L(E,x.data||{}),!S.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(N){k.value=N&&N.message?N.message:"回测失败",ElementPlus.ElMessage.error(k.value)}finally{M.value=!1}}function X(){const a=S.value,E={dates:[],series:[]};if(!a)return E;const n=a.strategies.map(J=>({name:J.name,points:J.equityCurve}));a.benchmark&&a.benchmark.points&&a.benchmark.points.length&&n.push({name:a.benchmark.name,points:a.benchmark.points});const p=t.buildNavSeries?t.buildNavSeries(n):E;return U(p,a)}function U(a,E){const n=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),p={primary:n("--qc-primary-600")||"#b8922a",success:n("--color-success")||"#4CAF50",accent:n("--color-accent")||"#F59E0B",info:n("--color-info")||"#1976d2",ai:n("--color-ai")||"#6366f1",textPrimary:n("--text-primary")||"#1f2937",textSecondary:n("--text-secondary")||"#6b7280",border:n("--border-light")||"#e5e7eb",up:n("--color-rise")||"#E63946",down:n("--color-fall")||"#2E7D32",bg:n("--bg-card")||"#ffffff"},J=[p.primary,p.success,p.accent,p.info,p.ai],x=p.bg.length===7&&parseInt(p.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",m=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(E.primary?E.primary.equityCurve:[]):null,A=m&&m.peakDate&&m.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:p.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+m.maxDrawdown+"%",xAxis:m.peakDate,itemStyle:{color:p.down}},{xAxis:m.troughDate}]]}:void 0,w=a.series.map((j,te)=>{const re=E.benchmark&&j.name===E.benchmark.name,se=J[te%J.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:re?2:2.4,type:re?"dashed":"solid",color:se},itemStyle:{color:se},emphasis:{focus:"series"},...te===0&&A?{markArea:A}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:x,borderColor:p.border,textStyle:{color:p.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:p.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:a.dates,boundaryGap:!1,axisLine:{lineStyle:{color:p.border}},axisLabel:{color:p.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:p.textSecondary,fontSize:11},splitLine:{lineStyle:{color:p.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:p.border,textStyle:{color:p.textSecondary,fontSize:10}}],series:w}}function H(a){if(!a){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",X,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function K(){const a=S.value;if(!a||!a.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const E=a.strategies.map(w=>({name:w.name,points:w.equityCurve}));a.benchmark&&E.push({name:a.benchmark.name,points:a.benchmark.points});const n=t.buildNavSeries?t.buildNavSeries(E):{dates:[],series:[]},p=t.tradeActionText||(w=>w),J=I.value.map(w=>({date:w.date,stock:w.stock,action:p(w.action),reason:w.reason})),N=t.buildBacktestCsv?t.buildBacktestCsv({metrics:y.value,dates:n.dates,series:n.series,trades:J}):"",x=new Blob(["\uFEFF"+N],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(x),A=document.createElement("a");A.href=m,A.download="backtest-"+a.strategies.map(w=>w.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",A.click(),URL.revokeObjectURL(m),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function q(a,E){return a==null||a===""||isNaN(Number(a))?"--":Number(a).toFixed(E??2)}return{btStrategyOptions:o,btSelectedStrategies:l,toggleBtStrategy:C,btDateRange:g,btCapital:c,btCommissionRate:P,btIncludeBenchmark:_,btRunning:M,btResult:S,btError:k,btMetrics:y,btAnnualReturns:D,btTrades:I,btStrategyMetricsRows:V,btDrawdownRegion:O,runBacktestWorkbench:F,exportBacktestCSV:K,registerBacktestNavChart:H,btFmtNum:q}}}})();(function(){const{ref:s,computed:e,watch:v,onUnmounted:t}=Vue,r=c=>(getComputedStyle(document.documentElement).getPropertyValue(c)||"").trim(),d=72,b={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},o={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},l={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},g={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const c=s({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),P=s({}),_=s(!1),M=s({}),S=s({cycles:[]}),k=s([]),T=s(0),C=s(!1),u=s({autoRefresh:!0,refreshInterval:300}),i=s(""),f=s(""),R=s(!1),L=s(""),y=s(!1);let D=null;const I={x:0,y:0},V=e(()=>{const $=P.value;return["recession","recovery","overheat","stagflation"].map(B=>{const me=$[B]||{};return{key:B,name:me.name||B,icon:l[me.icon]||"bar-chart-3",color:me.color||r("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(me.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(me.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:me.allocation&&g[B]||""}})}),O=e(()=>{var be,B,me,ve;const $=c.value.indicators||{};return[{key:"pmi",label:"PMI",value:(be=$.pmi)==null?void 0:be.toFixed(2),color:$.pmi>=50?r("--color-success")||"#43a047":r("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((B=$.gdp_growth)==null?void 0:B.toFixed(2))+"%",color:r("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((me=$.cpi)==null?void 0:me.toFixed(2))+"%",color:$.cpi>1.2?r("--color-danger")||"#E53935":r("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ve=$.m2_growth)==null?void 0:ve.toFixed(2))+"%",color:r("--color-success")||"#43a047"}]}),F=$=>{$=$||{};const be=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],B=()=>r("--color-success")||"#43a047",me=()=>r("--color-danger")||"#E53935",ve=()=>r("--color-warning")||"#FF9800",Z={宽松:B(),中位:ve(),偏低:me(),高增长:B(),承压:me(),不利:me()};return be.map(ue=>{const Ee=$[ue.key]||{},we=Ee.score||0,Ne=Math.min(100,Math.max(5,(we+2)*25)),We=we>=.3?"var(--bar-fill-ok)":we>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",fe=we>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ue.key,label:ue.label,scoreStr:we.toFixed(2),level:Ee.level||"—",barWidth:Ne,barColor:We,scoreColor:fe,color:Z[Ee.level]||"var(--text-tertiary)"}})},X=e(()=>F(c.value.dimension_scores)),U=e(()=>F(M.value._dimensions)),H=e(()=>{var be;const $=((be=c.value.confidence)==null?void 0:be.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),K=e(()=>{var me,ve,Z,ue;const $=P.value,be={recovery:0,overheat:1,stagflation:2,recession:3},B={};for(const[Ee,we]of Object.entries($))B[Ee]={name:we.name,icon:we.icon,color:we.color,lightColor:we.bg_color,duration:"~"+(((me=we.historical_stats)==null?void 0:me.avg_duration_months)||18)+"个月",order:be[Ee]||0,period:((Z=(ve=we.case_studies)==null?void 0:ve[0])==null?void 0:Z.split("：")[0])||"",avgMonths:((ue=we.historical_stats)==null?void 0:ue.avg_duration_months)||18};return B}),q=e(()=>{var we,Ne;const $=c.value.stage,B={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},me=c.value.dimension_scores||{},ve=((we=me.growth)==null?void 0:we.score)||0,Z=((Ne=me.inflation)==null?void 0:Ne.score)||0,ue=Math.max(-30,Math.min(30,ve*15)),Ee=Math.max(-30,Math.min(30,-Z*15));return{x:B.x+ue,y:B.y+Ee,prevX:I.x,prevY:I.y}}),a=e(()=>{var me;const $=Math.min(100,((me=c.value.timing)==null?void 0:me.progress_percent)||0),be=c.value.color||"var(--state-success-solid)",B=$>100?"linear-gradient(90deg, "+be+", var(--state-warning-solid))":be;return{width:$+"%",background:B}});function E(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[c.value.stage]||0}function n(){var $,be;return((be=($=c.value)==null?void 0:$.timing)==null?void 0:be.progress_percent)||0}function p(){var $,be;return((be=($=c.value)==null?void 0:$.timing)==null?void 0:be.duration_months)||0}function J(){var $,be;return((be=($=c.value)==null?void 0:$.timing)==null?void 0:be.avg_duration_months)||18}function N($){var ve,Z;const be=K.value,B=((ve=be[c.value.stage])==null?void 0:ve.order)||0;return(((Z=be[$])==null?void 0:Z.order)||0)<B}function x($){return b[$]||$}function m($){return o[$]||$}function A($){const be=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return be[$-1]||be[3]}async function w(){try{const be=await(await fetch("/api/market/merrill-clock/stages")).json();be.success&&be.data&&(P.value=be.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function j(){C.value=!0;try{re();const be=await(await fetch("/api/market/merrill-clock/timeline")).json();if(be.success&&be.data){const B=Array.isArray(be.data.cycles)?be.data.cycles.slice().reverse():[];S.value={cycles:B}}}catch{console.warn("获取美林时钟时间轴失败")}finally{C.value=!1}}async function te($){await le($)}async function re(){try{const be=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();be&&be.success&&be.data&&(k.value=be.data.items||[],T.value=be.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function se(){var $,be;y.value=!1;try{const me=await(await fetch("/api/market/merrill-clock")).json(),ve=me.stage||"recovery",Z=P.value[ve]||{};if(c.value={...Z,...me,stage_cn:me.stage_cn||Z.stage_cn||"",stage_name:me.stage_name||Z.name||"",name:me.name||Z.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),L.value&&L.value!==ve){const ue=P.value,Ee=(($=ue[L.value])==null?void 0:$.name)||L.value,we=((be=ue[ve])==null?void 0:be.name)||ve;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Ee+" → "+we,type:"warning",duration:6e3,showClose:!0})}L.value=ve}catch(B){console.error("获取美林时钟失败:",B),y.value=!0;const me=P.value.recovery||{};c.value={...me,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function le($){var B;_.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",M.value=P.value[$]||P.value.recovery||{};const be=((B=c.value)==null?void 0:B.stage)===$;M.value._isCurrent=be,be&&c.value&&(M.value._nextPrediction=c.value.next_stage_prediction,M.value._confidence=c.value.confidence,M.value._stage=c.value.stage,M.value._dimensions=c.value.dimension_scores);try{const ve=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(ve.success&&ve.data){const Z={...P.value[$],...ve.data};Z._is_current!==void 0&&(Z._isCurrent=Z._is_current),Z._current_timing&&(Z._currentTiming=Z._current_timing),Z._last_period&&(Z._lastPeriod=Z._last_period),M.value._nextPrediction&&(Z._nextPrediction=M.value._nextPrediction),M.value._confidence&&(Z._confidence=M.value._confidence),M.value._stage&&(Z._stage=M.value._stage),M.value._dimensions&&(Z._dimensions=M.value._dimensions),Object.assign(M.value,Z)}}catch(me){console.warn("获取阶段详情失败:",me)}}function Y(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(D),D=setInterval(se,u.value.refreshInterval*1e3)):clearInterval(D),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){R.value=!0,f.value="";try{const be=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();be.success?(f.value="重评估完成："+(be.stage_name||be.stage),await se(),ElementPlus.ElMessage.success("重评估完成")):(f.value=be.message||"重评估失败",ElementPlus.ElMessage.error(be.message||"重评估失败"))}catch{f.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{R.value=!1}}function qe(){const $=localStorage.getItem("merrill_clock_config");if($)try{const be=JSON.parse($);u.value={...u.value,...be}}catch{}u.value.autoRefresh&&(D=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),se()},u.value.refreshInterval*1e3))}function ee(){D&&clearInterval(D)}return t(()=>{ee()}),{merrillData:c,merrillStagesConfig:P,showMerrillDetail:_,merrillDetailData:M,merrillTimeline:S,merrillSnapshots:k,merrillSnapshotsTotal:T,fetchMerrillSnapshots:re,timelineLoading:C,merrillClockConfig:u,merrillClockLastUpdated:i,merrillReevalResult:f,merrillReevalLoading:R,stages:V,indicatorList:O,dimensionScoreList:X,detailDimensionScoreList:U,confidenceColor:H,timelineStages:K,clockPosition:q,merrillProgressStyle:a,FULL_CYCLE_MONTHS:d,getStageAngle:E,getCycleProgress:n,getCurrentStageMonths:p,getStageTotalMonths:J,isStageCompleted:N,getCharLabel:x,getAssetName:m,getRankColor:A,fetchMerrillStages:w,fetchMerrillClock:se,merrillError:y,loadMerrillTimeline:j,showTimelineStage:te,showStageDetail:le,saveMerrillClockConfig:Y,doMerrillReevaluate:ie,startAutoRefresh:qe,stopAutoRefresh:ee}}})();(function(){function s(o){return getComputedStyle(document.documentElement).getPropertyValue(o).trim()}var e=[210,28,165,290,348,190,52,250];function v(){var o=!1;try{o=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var l=o?62:58,g=o?62:40;return e.map(function(c){return"hsl("+c+", "+l+"%, "+g+"%)"})}function t(){return{textStyle:{color:s("--text-primary")||"#1f2937"},backgroundColor:s("--chart-bg")||"transparent",color:v(),legend:{textStyle:{color:s("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:s("--bg-card")||"#ffffff",borderColor:s("--border-light")||"#e5e7eb",textStyle:{color:s("--text-primary")||"#1f2937"}}}}const r=[];function d(o){typeof o=="function"&&r.push(o)}function b(){r.slice().forEach(function(o){try{o()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:v,registerChart:d,refreshAllCharts:b,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:b}}}})();(function(){const{ref:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const v=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&v.sidebarCollapsed&&(v.sidebarCollapsed.value=d==="1")}catch{}if(!v)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}v.currentPage.value=d.key,v.currentSubPage.value=d.subPages[0]||""},r=()=>{v.sidebarCollapsed.value=!v.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",v.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:v.menus,currentPage:v.currentPage,sidebarCollapsed:v.sidebarCollapsed,navigate:t,toggle:r,sanitizeHtml:v.sanitizeHtml,keyClick:v.keyClick,t:v.t}}}})();const na={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(s){const e=s,v={"layout-dashboard":Pv,calendar:Tv,bot:Dv,"flask-conical":Mv,zap:Ev,settings:qv,"chevron-down":Cv,"chevron-right":Sv,"chevron-left":xv,menu:_v,search:kv,bell:wv,sun:bv,moon:yv,user:hv,"user-round":gv,home:fv,x:pv,database:mv,activity:vv,clock:uv,"bar-chart-3":dv,shield:cv,"hard-drive":rv,"file-text":ov,users:iv,cpu:lv,"pie-chart":nv,info:sv,"log-out":av,palette:tv,languages:ev,refresh:Zu,download:Xu,"external-link":$u,command:Ju,sparkles:Qu,"trending-up":Yu,"trending-down":Gu,"circle-dot":Uu,check:Wu,"alert-triangle":Ku,loader:Bu,"arrow-left":Hu,"arrow-right":Vu,eye:ju,"eye-off":Fu,lock:Ou,"sliders-horizontal":Nu,play:Iu,history:Lu,layers:zu,"line-chart":Au,target:Ru,"search-check":Pu,star:Tu,"message-circle":Du,"calendar-days":Mu,"calendar-range":Eu,"calendar-check":qu,brain:Cu,lightbulb:Su,"octagon-x":xu,flag:_u,package:ku,"clipboard-list":wu,pin:bu,"radio-tower":yu,gauge:hu,landmark:gu,"candlestick-chart":fu,wallet:pu,"badge-check":mu,key:vu,factory:uu,trophy:du,rocket:cu,flame:ru,"map-pin":ou,"scroll-text":iu,"book-open":lu,dna:nu,"bar-chart":su,plus:au,"star-off":tu,upload:eu,gem:Zd,"folder-open":Xd,link:$d,save:Jd,"trash-2":Qd,pause:Yd,"help-circle":Gd,"play-circle":Ud,pencil:Wd,folder:Kd,code:Bd,sprout:Hd,wheat:Vd,snowflake:jd,fuel:Fd,banknote:Od,send:Nd,inbox:Id,"wifi-off":Ld,"check-circle-2":zd,"x-circle":Ad},t=()=>v[e.name]||v["circle-dot"];return(r,d)=>(ge(),Ut(wd(t()),{size:s.size,"stroke-width":s.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},la=(s,e)=>{const v=s.__vccOpts||s;for(const[t,r]of e)v[t]=r;return v},Rv={name:"qc-sidebar",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=ot(()=>s.menus&&s.menus.value||[]),v=ot(()=>s.currentPage&&s.currentPage.value||""),t=ot(()=>s.navMode&&s.navMode.value||"subnav"),r=ot({get:()=>s.sidebarCollapsed&&s.sidebarCollapsed.value||!1,set:C=>{s.sidebarCollapsed&&(s.sidebarCollapsed.value=C)}}),d=_t({}),b={research:"量化投研",platform:"平台管理"},o=["research","platform"],l=C=>v.value===C.key,g=(C,u)=>v.value===C.key&&s.currentSubPage&&s.currentSubPage.value===u,c=C=>Array.isArray(C.subPages)&&C.subPages.length>1,P=(C,u)=>s.subPageNames&&s.subPageNames[u]||u;function _(C){!c(C)||r.value||(d.value[C.key]=!d.value[C.key])}function M(){e.value.forEach(C=>{d.value[C.key]===void 0&&(d.value[C.key]=l(C))})}async function S(C,u){const i=u||C.subPages&&C.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(C.key,i):(s.currentPage.value=C.key,s.currentSubPage&&(s.currentSubPage.value=i)),s.navigateTo&&s.navigateTo(C.key,i)}function k(){r.value=!r.value;try{localStorage.setItem("sidebar_collapsed",r.value?"1":"0")}catch{}}function T(C){if(C.ctrlKey&&C.key.toLowerCase()==="b"&&(C.preventDefault(),k()),!C.ctrlKey&&!C.metaKey&&!C.altKey&&(C.key==="ArrowDown"||C.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=u.indexOf(document.activeElement);if(i>=0){C.preventDefault();const f=u[(i+(C.key==="ArrowDown"?1:u.length-1))%u.length];f&&f.focus()}}}return wa(()=>{M(),document.addEventListener("keydown",T)}),Fa(()=>document.removeEventListener("keydown",T)),{state:s,menus:e,currentPage:v,navMode:t,sidebarCollapsed:r,expandedMenus:d,GROUP_LABELS:b,GROUPS:o,isActive:l,isChildActive:g,hasChildren:c,subLabel:P,toggleSubmenu:_,navigate:S,toggleCollapse:k}}},Av={class:"qc-sidebar-logo"},zv={key:0,class:"qc-logo-text"},Lv={class:"qc-sidebar-nav"},Iv={key:0,class:"qc-nav-group"},Nv={key:0,class:"qc-nav-group-label"},Ov=["href","aria-current","onClick"],Fv={key:0,class:"qc-sidebar-label"},jv={key:1,class:"qc-nav-badge"},Vv=["aria-expanded","aria-controls","onClick"],Hv=["id"],Bv=["href","aria-current","onClick"],Kv={class:"qc-sidebar-child-label"},Wv={class:"qc-sidebar-footer"},Uv=["aria-expanded","aria-label","title"];function Gv(s,e,v,t,r,d){const b=Et("AppIcon"),o=Et("el-tooltip");return ge(),ke("nav",{class:ct(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[De("div",Av,[e[1]||(e[1]=kd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Ke("",!0):(ge(),ke("span",zv,Be(t.state.t("login.title")),1))]),De("div",Lv,[(ge(!0),ke(ut,null,bt(t.GROUPS,l=>(ge(),ke(ut,{key:l},[t.menus.some(g=>g.group===l)?(ge(),ke("div",Iv,[t.sidebarCollapsed?Ke("",!0):(ge(),ke("span",Nv,Be(t.GROUP_LABELS[l]),1)),(ge(!0),ke(ut,null,bt(t.menus.filter(g=>g.group===l),g=>(ge(),ke(ut,{key:g.key},[De("div",{class:ct(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[mt(o,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:Wt(()=>[De("a",{class:ct(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:St(c=>t.navigate(g),["prevent"])},[mt(b,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Ke("",!0):(ge(),ke("span",Fv,Be(g.name),1)),!t.sidebarCollapsed&&g.badge?(ge(),ke("span",jv,Be(g.badge),1)):Ke("",!0)],10,Ov)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(ge(),ke("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:c=>t.toggleSubmenu(g)},[mt(b,{name:"chevron-down",size:14})],10,Vv)):Ke("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(ge(),ke("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(ge(!0),ke(ut,null,bt(g.subPages,c=>(ge(),ke("a",{key:c,class:ct(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,c)}]),href:"#"+g.key+"-"+c,"aria-current":t.isChildActive(g,c)?"page":null,onClick:St(P=>t.navigate(g,c),["prevent"])},[De("span",Kv,Be(t.subLabel(g,c)),1)],10,Bv))),128))],8,Hv)):Ke("",!0)],64))),128))])):Ke("",!0)],64))),128))]),De("div",Wv,[De("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...l)=>t.toggleCollapse&&t.toggleCollapse(...l))},[mt(b,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Uv)])],2)}const Yv=la(Rv,[["render",Gv]]),Qv={name:"qc-header",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=_t(!1),v=ot(()=>s.currentUser&&s.currentUser.value||null),t=ot(()=>s.navMode&&s.navMode.value||"subnav"),r=ot(()=>{const B=s.currentPage&&s.currentPage.value,me=(s.menus&&s.menus.value||[]).find(ve=>ve.key===B);return!!(me&&me.subPages&&me.subPages.length)}),d=ot(()=>{const B=s.currentPage&&s.currentPage.value,me=s.currentPageName&&s.currentPageName.value;if(me)return me;const ve=(s.menus&&s.menus.value||[]).find(Z=>Z.key===B);return ve&&ve.name||B||""}),b=ot(()=>{const B=s.currentSubPage&&s.currentSubPage.value;return B&&s.subPageNames&&s.subPageNames[B]||B||""}),o=_t(typeof window<"u"?window.innerWidth<768:!1);function l(){o.value=window.innerWidth<768}wa(()=>window.addEventListener("resize",l)),Fa(()=>window.removeEventListener("resize",l));const g=_t(!1),c=ot(()=>{const B=s.currentSubPage&&s.currentSubPage.value;return B&&s.subPageNames&&s.subPageNames[B]||B||""}),P=ot(()=>{const B=s.currentPage&&s.currentPage.value,me=(s.menus&&s.menus.value||[]).find(ve=>ve.key===B);return(me&&me.subPages||[]).map(ve=>({key:ve,label:s.subPageNames&&s.subPageNames[ve]||ve}))});function _(){g.value=!g.value}function M(){g.value=!1}function S(B){g.value=!1,s.activateTab&&s.activateTab(s.currentPage.value,B)}const k=ot(()=>(s.currentTheme&&s.currentTheme.value)==="dark"),T=_t(!1),C=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=ot(()=>{const B=C.find(me=>me.value===t.value);return B&&B.label||t.value});function i(){T.value=!T.value}function f(){T.value=!1}function R(B){T.value=!1,s.setNavMode&&s.setNavMode(B)}const L=ot({get:()=>s.searchQuery&&s.searchQuery.value||"",set:B=>{s.searchQuery&&(s.searchQuery.value=B)}}),y=_t(!1),D=_t([]),I=_t(!1),V=_t(!1);function O(){const B=localStorage.getItem("quant_token")||"";return B?{Authorization:"Bearer "+B,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function F(){I.value=!0,V.value=!1;try{const me=await(await fetch("/api/alerts/history?limit=8",{headers:O()})).json();me&&me.success?D.value=me.history||[]:D.value=[]}catch{V.value=!0,D.value=[]}finally{I.value=!1}}function X(){y.value=!y.value,y.value&&F()}function U(){y.value=!1}function H(){y.value=!1,s.activateTab&&s.activateTab("system","notification")}const K=_t(!1),q=s.themeHues||[45,220,0,140,270,320,180,25,250,-1],a=ot(()=>{const B=s.themeHue&&s.themeHue.value;return Number.isFinite(B)?B:45}),E=ot(()=>s.themeMode&&s.themeMode.value||"system"),n=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],p=ot(()=>s.density&&s.density.value||"comfortable");function J(B){s.changeDensity&&s.changeDensity(B)}function N(B){return s.hueColor?s.hueColor(B):"hsl("+B+", 75%, 42%)"}const x={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function m(B){return s.hueName?s.hueName(B):x[B]||"自定义 "+B}function A(){K.value=!K.value}function w(){K.value=!1}function j(B){s.changeThemeMode&&s.changeThemeMode(B)}function te(B){s.changeThemeHue&&s.changeThemeHue(B)}function re(){s.changeThemeMode&&s.changeThemeMode(k.value?"light":"dark")}function se(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}s.sidebarCollapsed&&(s.sidebarCollapsed.value=!s.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",s.sidebarCollapsed.value?"1":"0")}catch{}}function le(){e.value=!e.value}function Y(){e.value=!1}function ie(B){return()=>{Y(),B&&B()}}function qe(){Y(),s.handleLogout&&s.handleLogout()}const ee=ot(()=>s.marketData&&s.marketData.value||{}),$=_t(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:ee,bannerDismissed:$,dismissBanner:()=>{$.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:s,showUserMenu:e,currentUser:v,isDark:k,searchQuery:L,navMode:t,crumbRoot:d,crumbSub:b,hasToptabs:r,toggleThemeQuick:re,toggleSidebar:se,openUserMenu:le,closeUserMenu:Y,menuItem:ie,handleLogout:qe,openBellMenu:y,notifItems:D,notifLoading:I,notifError:V,toggleBell:X,closeBell:U,goNotificationCenter:H,openThemeMenu:K,themeHues:q,themeHue:a,themeMode:E,hueColor:N,hueName:m,toggleThemeMenu:A,closeThemeMenu:w,pickThemeMode:j,pickThemeHue:te,DENSITY_MODES:n,density:p,pickDensity:J,openNavModeMenu:T,NAV_MODES:C,navModeLabel:u,toggleNavModeMenu:i,closeNavModeMenu:f,pickNavMode:R,isMobile:o,openSubnavPicker:g,currentSubLabel:c,subnavOptions:P,toggleSubnavPicker:_,closeSubnavPicker:M,pickSubnav:S}}},Jv={class:"qc-header-wrap"},$v={key:0,class:"non-trading-banner",role:"status"},Xv={class:"qc-header"},Zv={class:"visually-hidden"},em={class:"qc-header-left"},tm=["aria-label"],am={key:0,class:"qc-header-subnav"},sm=["aria-expanded"],nm={class:"qc-subnav-picker-label"},lm={key:0,class:"qc-subnav-picker-menu",role:"menu"},im=["onClick"],om={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},rm={class:"qc-crumb qc-crumb-root"},cm={class:"qc-crumb qc-crumb-sub"},dm={key:1,class:"qc-crumb qc-crumb-root"},um={class:"qc-header-center"},vm={key:0,class:"qc-search-sublabel"},mm={class:"qc-header-right"},pm={class:"qc-hdr-pop"},fm=["aria-expanded"],gm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},hm={key:0,class:"qc-bell-state"},ym={key:1,class:"qc-bell-state"},bm={key:2,class:"qc-bell-state"},wm={key:3,class:"qc-bell-list"},km={class:"qc-bell-item-title"},_m={class:"qc-bell-item-meta"},xm={key:0},Sm={class:"qc-bell-item-time"},Cm={class:"qc-hdr-pop"},qm=["aria-expanded"],Em={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Mm={class:"qc-theme-modes"},Dm=["onClick"],Tm={class:"qc-theme-swatches"},Pm=["title","aria-label","onClick"],Rm={key:0,class:"qc-theme-swatch-check"},Am={class:"qc-theme-custom-label"},zm={class:"qc-theme-modes"},Lm=["onClick"],Im={key:0,class:"qc-navmode-switch"},Nm=["aria-label","title","aria-expanded"],Om={key:0,class:"qc-navmode-menu",role:"menu"},Fm=["onClick","onKeydown"],jm={class:"qc-navmode-item-main"},Vm={class:"qc-user-menu"},Hm=["aria-label","aria-expanded"],Bm={key:0,class:"qc-user-dropdown",role:"menu"},Km={class:"qc-user-dropdown-header"},Wm={class:"qc-user-dropdown-name"},Um={key:0,class:"qc-user-dropdown-chip"};function Gm(s,e,v,t,r,d){var P,_,M,S,k,T,C;const b=Et("AppIcon"),o=Et("qc-top-tabs"),l=Et("el-autocomplete"),g=Et("el-slider"),c=_d("click-outside");return ge(),ke("div",Jv,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(ge(),ke("div",$v,[mt(b,{name:"alert-triangle",size:14}),e[15]||(e[15]=De("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),De("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...u)=>t.dismissBanner&&t.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):Ke("",!0),De("header",Xv,[De("h1",Zv,Be(t.crumbRoot||"量化日历"),1),De("div",em,[De("button",{class:"qc-icon-btn","aria-label":(P=t.state.sidebarCollapsed)!=null&&P.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},[mt(b,{name:"menu",size:20})],8,tm),t.isMobile?fa((ge(),ke("div",am,[De("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...u)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...u))},[De("span",nm,Be(t.currentSubLabel||"二级"),1),mt(b,{name:"chevron-down",size:14})],8,sm),t.openSubnavPicker?(ge(),ke("div",lm,[(ge(!0),ke(ut,null,bt(t.subnavOptions,u=>(ge(),ke("div",{key:u.key,class:ct(["qc-subnav-picker-item",{"is-active":u.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>t.pickSubnav(u.key)},Be(u.label),11,im))),128))])):Ke("",!0)])),[[c,t.closeSubnavPicker]]):Ke("",!0),t.navMode==="tree"&&!t.isMobile?(ge(),ke("div",om,[De("span",rm,Be(t.crumbRoot),1),t.crumbSub?(ge(),ke(ut,{key:0},[e[16]||(e[16]=De("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),De("span",cm,Be(t.crumbSub),1)],64)):Ke("",!0)])):Ke("",!0),t.navMode==="toptab"&&!t.isMobile?(ge(),ke(ut,{key:2},[t.hasToptabs?(ge(),Ut(o,{key:0})):(ge(),ke("span",dm,Be(t.crumbRoot),1))],64)):Ke("",!0)]),De("div",um,[mt(l,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=u=>t.searchQuery=u),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:Wt(()=>[mt(b,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:Wt(()=>[...e[17]||(e[17]=[De("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:Wt(u=>{var i,f,R,L,y;return[De("span",null,Be((i=u==null?void 0:u.item)==null?void 0:i.icon)+" "+Be(((f=u==null?void 0:u.item)==null?void 0:f.label)||((R=u==null?void 0:u.item)==null?void 0:R.name)),1),(L=u==null?void 0:u.item)!=null&&L.subLabel?(ge(),ke("span",vm,Be((y=u==null?void 0:u.item)==null?void 0:y.subLabel),1)):Ke("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),De("div",mm,[fa((ge(),ke("div",pm,[De("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...u)=>t.toggleBell&&t.toggleBell(...u))},[mt(b,{name:"bell",size:20})],8,fm),t.openBellMenu?(ge(),ke("div",gm,[e[18]||(e[18]=De("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ge(),ke("div",hm,"加载中...")):t.notifError?(ge(),ke("div",ym,"加载失败")):t.notifItems.length?(ge(),ke("div",wm,[(ge(!0),ke(ut,null,bt(t.notifItems,(u,i)=>(ge(),ke("div",{key:u.id||i,class:ct(["qc-bell-item",{"is-fail":u.ok===0}])},[De("div",km,Be(u.title||u.event_type||"事件"),1),De("div",_m,[sa(Be(u.channel||""),1),u.recipient?(ge(),ke("span",xm," · "+Be(u.recipient),1)):Ke("",!0),De("span",Sm,Be(u.created_at||""),1)])],2))),128))])):(ge(),ke("div",bm,"暂无通知")),De("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...u)=>t.goNotificationCenter&&t.goNotificationCenter(...u))},"前往通知中心 →")])):Ke("",!0)])),[[c,t.closeBell]]),fa((ge(),ke("div",Cm,[De("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...u)=>t.toggleThemeMenu&&t.toggleThemeMenu(...u))},[mt(b,{name:"palette",size:20})],8,qm),t.openThemeMenu?(ge(),ke("div",Em,[e[19]||(e[19]=De("div",{class:"qc-theme-section-label"},"外观模式",-1)),De("div",Mm,[(ge(),ke(ut,null,bt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>De("button",{key:u.k,class:ct(["qc-theme-mode",{"is-active":t.themeMode===u.k}]),onClick:i=>t.pickThemeMode(u.k)},Be(u.n),11,Dm)),64))]),e[20]||(e[20]=De("div",{class:"qc-theme-section-label"},"主题色",-1)),De("div",Tm,[(ge(!0),ke(ut,null,bt(t.themeHues,u=>(ge(),ke("button",{key:u,class:ct(["qc-theme-swatch",{"is-active":t.themeHue===u}]),style:xd({background:t.hueColor(u)}),title:t.hueName(u),"aria-label":t.hueName(u),onClick:i=>t.pickThemeHue(u)},[t.themeHue===u?(ge(),ke("span",Rm,"✓")):Ke("",!0)],14,Pm))),128))]),mt(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),De("div",Am,"自定义 "+Be(t.themeHue)+"°",1),e[21]||(e[21]=De("div",{class:"qc-theme-section-label"},"信息密度",-1)),De("div",zm,[(ge(!0),ke(ut,null,bt(t.DENSITY_MODES,u=>(ge(),ke("button",{key:u.k,class:ct(["qc-theme-mode",{"is-active":t.density===u.k}]),onClick:i=>t.pickDensity(u.k)},Be(u.n),11,Lm))),128))])])):Ke("",!0)])),[[c,t.closeThemeMenu]]),t.isMobile?Ke("",!0):fa((ge(),ke("div",Im,[De("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...u)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...u))},[mt(b,{name:"layers",size:20})],8,Nm),t.openNavModeMenu?(ge(),ke("div",Om,[(ge(!0),ke(ut,null,bt(t.NAV_MODES,u=>(ge(),ke("div",{key:u.value,class:ct(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:i=>t.pickNavMode(u.value),onKeydown:[Kt(St(i=>t.pickNavMode(u.value),["prevent"]),["enter"]),Kt(St(i=>t.pickNavMode(u.value),["prevent"]),["space"])]},[De("div",jm,[De("span",null,Be(u.label),1),t.navMode===u.value?(ge(),Ut(b,{key:0,name:"check",size:14})):Ke("",!0)])],42,Fm))),128))])):Ke("",!0)])),[[c,t.closeNavModeMenu]]),fa((ge(),ke("div",Vm,[De("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((_=t.currentUser)==null?void 0:_.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...u)=>t.openUserMenu&&t.openUserMenu(...u))},Be((((M=t.currentUser)==null?void 0:M.username)||"A").charAt(0).toUpperCase()),9,Hm),t.showUserMenu?(ge(),ke("div",Bm,[De("div",Km,[De("span",Wm,Be((S=t.currentUser)==null?void 0:S.username),1),((k=t.currentUser)==null?void 0:k.role)==="guest"?(ge(),ke("span",Um,"访客")):Ke("",!0)]),((T=t.currentUser)==null?void 0:T.role)==="admin"?(ge(),ke("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=u=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=Kt(St(u=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[mt(b,{name:"settings",size:16}),e[22]||(e[22]=sa(" 重新运行初始化向导 ",-1))],32)):Ke("",!0),((C=t.currentUser)==null?void 0:C.role)!=="guest"?(ge(),ke("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=Kt(St(u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[mt(b,{name:"lock",size:16}),e[23]||(e[23]=sa(" 修改密码 ",-1))],32)):Ke("",!0),e[25]||(e[25]=De("div",{class:"qc-user-dropdown-divider"},null,-1)),De("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...u)=>t.handleLogout&&t.handleLogout(...u)),onKeydown:e[14]||(e[14]=Kt(St((...u)=>t.handleLogout&&t.handleLogout(...u),["prevent"]),["enter"]))},[mt(b,{name:"log-out",size:16}),e[24]||(e[24]=sa(" 退出登录 ",-1))],32)])):Ke("",!0)])),[[c,t.closeUserMenu]])])])])}const Ym=la(Qv,[["render",Gm]]),Qm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Jm={name:"qc-subnav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=ot(()=>s.currentPage&&s.currentPage.value||""),v=ot(()=>s.currentSubPage&&s.currentSubPage.value||""),t=ot(()=>s.navMode&&s.navMode.value||"subnav"),r=_t({}),d=ot(()=>s.menus&&s.menus.value||[]),b=ot(()=>d.value.find(C=>C.key===e.value)||null),o=ot(()=>b.value&&b.value.subPages||[]),l=ot(()=>s.currentPageName&&s.currentPageName.value||e.value),g=C=>s.subPageNames&&s.subPageNames[C]||C,c=C=>v.value===C;function P(C){s.openTab?s.openTab(e.value,C):s.currentSubPage&&(s.currentSubPage.value=C);try{localStorage.setItem("quant_last_subpage",C)}catch{}}function _(C){s.openTab?s.openTab(e.value,C.key):s.currentSubPage&&(s.currentSubPage.value=C.key);try{localStorage.setItem("quant_last_subpage",C.key)}catch{}}function M(C){r.value[C]=!r.value[C]}const S={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:s,currentPage:e,currentSubPage:v,navMode:t,subPages:o,currentMenu:b,collapsedGroups:r,pageTitle:l,subLabel:g,isSubActive:c,goSub:P,goSystemItem:_,toggleGroup:M,SYSTEM_GROUPS:Qm,subIcon:(C,u)=>S[C]&&S[C][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},$m={key:0,class:"qc-subnav-column","aria-label":"二级导航"},Xm={class:"qc-subnav-column-header"},Zm={class:"qc-subnav-current-label"},ep={class:"qc-subnav-column-body"},tp=["onClick"],ap=["href","onClick"],sp={class:"qc-subnav-group-label"},np=["href","onClick"],lp=["href","onClick"];function ip(s,e,v,t,r,d){const b=Et("AppIcon");return t.navMode==="subnav"?(ge(),ke("aside",$m,[De("div",Xm,[De("span",Zm,Be(t.pageTitle),1)]),De("div",ep,[t.currentPage==="system"?(ge(!0),ke(ut,{key:0},bt(t.SYSTEM_GROUPS,o=>(ge(),ke("div",{key:o.label,class:"qc-subnav-group"},[De("div",{class:"qc-subnav-group-label",onClick:l=>t.toggleGroup(o.label)},[De("span",null,Be(o.label),1),mt(b,{name:"chevron-down",size:12,class:ct({"is-open":!t.collapsedGroups[o.label]})},null,8,["class"])],8,tp),t.collapsedGroups[o.label]?Ke("",!0):(ge(!0),ke(ut,{key:0},bt(o.items,l=>(ge(),ke("a",{key:l.key,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(l.key)}]),href:"#"+l.key,onClick:St(g=>t.goSystemItem(l),["prevent"])},[mt(b,{name:l.icon,size:16},null,8,["name"]),De("span",null,Be(l.label),1)],10,ap))),128))]))),128)):t.currentPage==="shortterm"?(ge(!0),ke(ut,{key:1},bt(t.SHORTTERM_GROUPS,o=>(ge(),ke("div",{key:o.label,class:"qc-subnav-group"},[De("div",sp,[De("span",null,Be(o.label),1)]),(ge(!0),ke(ut,null,bt(o.items,l=>(ge(),ke("a",{key:l,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(l)}]),href:"#"+t.currentPage+"/"+l,onClick:St(g=>t.goSub(l),["prevent"])},[mt(b,{name:t.subIcon(t.currentPage,l),size:16},null,8,["name"]),De("span",null,Be(t.subLabel(l)),1)],10,np))),128))]))),128)):(ge(!0),ke(ut,{key:2},bt(t.subPages,o=>(ge(),ke("a",{key:o,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(o)}]),href:"#"+t.currentPage+"/"+o,onClick:St(l=>t.goSub(o),["prevent"])},[mt(b,{name:t.subIcon(t.currentPage,o),size:16},null,8,["name"]),De("span",null,Be(t.subLabel(o)),1)],10,lp))),128))])])):Ke("",!0)}const op=la(Jm,[["render",ip]]),rp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],cp={name:"qc-mobile-nav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=_t(!1),v=_t(null),t=_t({}),r=ot(()=>s.menus&&s.menus.value||[]),d=ot(()=>s.currentPage&&s.currentPage.value||""),b={research:"量化投研",platform:"平台管理"},o=["research","platform"];function l(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function g(u){l(u)&&(t.value[u.key]=!t.value[u.key])}function c(u,i){return d.value===u.key&&s.currentSubPage&&s.currentSubPage.value===i}function P(u){return s.subPageNames&&s.subPageNames[u]||u}async function _(u){const i=r.value.find(R=>R.key===u.key),f=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,f):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=f)),s.navigateTo&&s.navigateTo(u.key,f)}function M(u,i){e.value=!1;const f=i||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,f):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=f)),s.navigateTo&&s.navigateTo(u.key,f)}function S(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function k(){e.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function T(u){u.detail&&u.detail.open&&S()}function C(u){e.value&&u.key==="Escape"&&k()}return wa(()=>{window.addEventListener("qc:drawer",T),document.addEventListener("keydown",C)}),Fa(()=>{window.removeEventListener("qc:drawer",T),document.removeEventListener("keydown",C)}),{state:s,TABS:rp,menus:r,currentPage:d,drawerOpen:e,drawerFocusRef:v,drawerExpanded:t,GROUP_LABELS:b,GROUPS:o,hasSub:l,toggleDrawerMenu:g,isDrawerSubActive:c,subLabel:P,goTab:_,goMenu:M,openDrawer:S,closeDrawer:k}}},dp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},up=["aria-current","onClick"],vp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},mp={class:"qc-drawer-header"},pp={class:"qc-drawer-brand"},fp={class:"qc-drawer-body"},gp={key:0},hp={class:"qc-nav-group-label"},yp=["href","aria-current","onClick"],bp={class:"qc-sidebar-label"},wp=["aria-expanded","onClick"],kp={key:0,class:"qc-drawer-children"},_p=["href","onClick"],xp={class:"qc-drawer-footer"},Sp=["title"];function Cp(s,e,v,t,r,d){var o,l;const b=Et("AppIcon");return ge(),ke(ut,null,[De("nav",dp,[(ge(!0),ke(ut,null,bt(t.TABS,g=>(ge(),ke("button",{key:g.key,class:ct(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:c=>t.goTab(g)},[mt(b,{name:g.icon,size:22},null,8,["name"]),De("span",null,Be(g.label),1)],10,up))),128))]),(ge(),Ut(Sd,{to:"body"},[t.drawerOpen?(ge(),ke("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Ke("",!0),t.drawerOpen?(ge(),ke("div",vp,[De("div",mp,[De("div",pp,[e[4]||(e[4]=De("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[De("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),De("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),De("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),De("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),De("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),De("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),De("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),De("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),De("span",null,Be(t.state.t("login.title")),1)]),De("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[mt(b,{name:"x",size:18})])]),De("div",fp,[(ge(!0),ke(ut,null,bt(t.GROUPS,g=>(ge(),ke(ut,{key:g},[t.menus.some(c=>c.group===g)?(ge(),ke("div",gp,[De("div",hp,Be(t.GROUP_LABELS[g]),1),(ge(!0),ke(ut,null,bt(t.menus.filter(c=>c.group===g),c=>(ge(),ke("div",{key:c.key,class:"qc-drawer-menu"},[De("div",{class:ct(["qc-drawer-menu-row",{"is-active":t.currentPage===c.key}])},[De("a",{class:ct(["qc-sidebar-item",{"is-active":t.currentPage===c.key}]),href:"#"+c.key,"aria-current":t.currentPage===c.key?"page":null,onClick:St(P=>t.hasSub(c)?t.toggleDrawerMenu(c):t.goMenu(c),["prevent"])},[mt(b,{name:c.iconName||"",size:18},null,8,["name"]),De("span",bp,Be(c.name),1)],10,yp),t.hasSub(c)?(ge(),ke("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[c.key]}]),"aria-expanded":!!t.drawerExpanded[c.key],"aria-label":"展开子菜单",onClick:P=>t.toggleDrawerMenu(c)},[mt(b,{name:"chevron-down",size:14})],10,wp)):Ke("",!0)],2),t.drawerExpanded[c.key]?(ge(),ke("div",kp,[(ge(!0),ke(ut,null,bt(c.subPages,P=>(ge(),ke("a",{key:P,class:ct(["qc-subnav-item",{"is-active":t.isDrawerSubActive(c,P)}]),href:"#"+c.key+"/"+P,onClick:St(_=>t.goMenu(c,P),["prevent"])},[De("span",null,Be(t.subLabel(P)),1)],10,_p))),128))])):Ke("",!0)]))),128))])):Ke("",!0)],64))),128))]),De("div",xp,[De("button",{class:"qc-icon-btn",title:((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var c;return t.state.changeThemeMode&&t.state.changeThemeMode(((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"light":"dark")})},[mt(b,{name:((l=t.state.currentTheme)==null?void 0:l.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Sp),De("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[mt(b,{name:"log-out",size:18})])])])):Ke("",!0)]))],64)}const qp=la(cp,[["render",Cp]]),Ep={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1},ctxContext:{type:String,default:"stock"}},emits:["select"],setup(s,{emit:e,slots:v}){const t=ra("qcState");function r(c){e("select",c)}function d(c){const P=c.strategy_names||c.strategies||[],_=P.slice(0,3),M=P.length>3?P.length-3:0,S=_.map(k=>({text:k,more:!1}));return M&&S.push({text:"+"+M,more:!0}),S}function b(c){const P=Number(c);return isFinite(P)?P.toFixed(2):"—"}function o(c){const P=Number(c);return isFinite(P)?(P>0?"+":"")+P.toFixed(2)+"%":"—"}function l(c){const P=Number(c.consensus_level);return isFinite(P)?Math.round(P*100):0}function g(c){const P=Number(c&&c.consensus_level);return isFinite(P)&&P>0}return{state:t,slots:v,select:r,displayTags:d,fmtPrice:b,fmtChange:o,pctOf:l,hasConsensus:g}}},Mp={class:"qc-stock-list"},Dp=["data-copy-code","data-ctx-code","data-ctx-name","data-ctx-context","aria-label","onClick","onKeydown"],Tp={key:0,class:"qc-stock-rank"},Pp={class:"qc-stock-info"},Rp={class:"qc-stock-code"},Ap={class:"qc-stock-code-num"},zp={key:0,class:"qc-stock-status is-new"},Lp={key:1,class:"qc-stock-status is-out"},Ip={class:"qc-stock-name"},Np={key:0,class:"qc-stock-consensus"},Op={key:1,class:"qc-stock-tags"},Fp={key:2,class:"qc-stock-badge"},jp={key:3,class:"qc-stock-data"},Vp={class:"qc-stock-price"},Hp={key:4,class:"qc-stock-extra"},Bp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Kp=["data-copy-code","data-ctx-code","data-ctx-name","data-ctx-context","aria-label","onClick","onKeydown"],Wp={key:0,class:"qc-stock-rank"},Up={class:"qc-stock-info"},Gp={class:"qc-stock-code"},Yp={class:"qc-stock-code-num"},Qp={key:0,class:"qc-stock-status is-new"},Jp={key:1,class:"qc-stock-status is-out"},$p={class:"qc-stock-name"},Xp={key:0,class:"qc-stock-consensus"},Zp={key:1,class:"qc-stock-tags"},ef={key:2,class:"qc-stock-badge"},tf={key:3,class:"qc-stock-data"},af={class:"qc-stock-price"},sf={key:4,class:"qc-stock-extra"},nf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function lf(s,e,v,t,r,d){const b=Et("qc-state-panel"),o=Et("qc-virtual-list");return ge(),ke("div",Mp,[v.loading?(ge(),Ut(b,{key:0,type:"loading"})):v.items.length?(ge(),ke(ut,{key:2},[v.virtual?(ge(),Ut(o,{key:0,items:v.items,"row-height":v.rowHeight},{default:Wt(({item:l,index:g})=>[De("div",{class:ct(["qc-stock-row",{"is-active":v.activeCode===l.code}]),"data-copy-code":v.copyCode?l.code:void 0,"data-ctx-code":l.code,"data-ctx-name":l.name,"data-ctx-context":v.ctxContext,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:c=>t.select(l),onKeydown:[Kt(St(c=>t.select(l),["prevent"]),["enter"]),Kt(St(c=>t.select(l),["prevent"]),["space"])]},[v.showRank?(ge(),ke("div",Tp,Be(g+1),1)):Ke("",!0),De("div",Pp,[De("div",Rp,[De("span",Ap,Be(l.code),1),l.status==="new"?(ge(),ke("span",zp,Be(v.statusText.new),1)):l.status==="out"?(ge(),ke("span",Lp,Be(v.statusText.out),1)):Ke("",!0)]),De("div",Ip,[sa(Be(l.name)+" ",1),Ft(s.$slots,"name-suffix",{item:l,index:g})]),v.showConsensus&&t.hasConsensus(l)?(ge(),ke("span",Np,Be(t.pctOf(l))+"% 共识",1)):Ke("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(ge(),ke("div",Op,[(ge(!0),ke(ut,null,bt(t.displayTags(l),c=>(ge(),ke("span",{key:c.text,class:ct(["qc-stock-tag",{"is-more":c.more}])},Be(c.text),3))),128))])):Ke("",!0),v.showConsensus?(ge(),ke("span",Fp,Be(l.strategy_count||0)+" 策略",1)):Ke("",!0),v.showPrice&&l.price!=null?(ge(),ke("div",jp,[De("span",Vp,Be(t.fmtPrice(l.price)),1),De("span",{class:ct(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Be(t.fmtChange(l.change_pct)),3)])):Ke("",!0),t.slots.extra?(ge(),ke("div",Hp,[Ft(s.$slots,"extra",{item:l,index:g})])):Ke("",!0),t.slots.actions?(ge(),ke("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=St(()=>{},["stop"]))},[Ft(s.$slots,"actions",{item:l,index:g})])):Ke("",!0),t.slots.footer?(ge(),ke("div",Bp,[Ft(s.$slots,"footer",{item:l,index:g})])):Ke("",!0)],42,Dp)]),_:3},8,["items","row-height"])):(ge(!0),ke(ut,{key:1},bt(v.items,(l,g)=>(ge(),ke("div",{key:l.code,class:ct(["qc-stock-row",{"is-active":v.activeCode===l.code}]),"data-copy-code":v.copyCode?l.code:void 0,"data-ctx-code":l.code,"data-ctx-name":l.name,"data-ctx-context":v.ctxContext,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:c=>t.select(l),onKeydown:[Kt(St(c=>t.select(l),["prevent"]),["enter"]),Kt(St(c=>t.select(l),["prevent"]),["space"])]},[v.showRank?(ge(),ke("div",Wp,Be(g+1),1)):Ke("",!0),De("div",Up,[De("div",Gp,[De("span",Yp,Be(l.code),1),l.status==="new"?(ge(),ke("span",Qp,Be(v.statusText.new),1)):l.status==="out"?(ge(),ke("span",Jp,Be(v.statusText.out),1)):Ke("",!0)]),De("div",$p,[sa(Be(l.name)+" ",1),Ft(s.$slots,"name-suffix",{item:l,index:g})]),v.showConsensus&&t.hasConsensus(l)?(ge(),ke("span",Xp,Be(t.pctOf(l))+"% 共识",1)):Ke("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(ge(),ke("div",Zp,[(ge(!0),ke(ut,null,bt(t.displayTags(l),c=>(ge(),ke("span",{key:c.text,class:ct(["qc-stock-tag",{"is-more":c.more}])},Be(c.text),3))),128))])):Ke("",!0),v.showConsensus?(ge(),ke("span",ef,Be(l.strategy_count||0)+" 策略",1)):Ke("",!0),v.showPrice&&l.price!=null?(ge(),ke("div",tf,[De("span",af,Be(t.fmtPrice(l.price)),1),De("span",{class:ct(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Be(t.fmtChange(l.change_pct)),3)])):Ke("",!0),t.slots.extra?(ge(),ke("div",sf,[Ft(s.$slots,"extra",{item:l,index:g})])):Ke("",!0),t.slots.actions?(ge(),ke("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=St(()=>{},["stop"]))},[Ft(s.$slots,"actions",{item:l,index:g})])):Ke("",!0),t.slots.footer?(ge(),ke("div",nf,[Ft(s.$slots,"footer",{item:l,index:g})])):Ke("",!0)],42,Kp))),128))],64)):(ge(),Ut(b,{key:1,type:"empty",title:v.emptyText},null,8,["title"]))])}const of=la(Ep,[["render",lf]]),rf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},cf={key:0,class:"split-divider","data-split-resize":""};function df(s,e,v,t,r,d){return ge(),ke("div",{class:ct(["detail-split-wrap",[v.rootClass,{"detail-split":v.enabled}]]),"data-split-root":""},[De("div",{class:ct(["detail-split-list",[v.listClass,{"w-100":!v.enabled}]])},[Ft(s.$slots,"list")],2),v.enabled?(ge(),ke("div",cf)):Ke("",!0),v.enabled?(ge(),ke("div",{key:1,class:ct(["detail-split-pane",v.paneClass])},[Ft(s.$slots,"pane")],2)):Ke("",!0)],2)}const uf=la(rf,[["render",df]]),Qs={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},vf=200,mf={name:"qc-top-tabs",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=ot(()=>s.currentPage&&s.currentPage.value||""),v=ot(()=>s.currentSubPage&&s.currentSubPage.value||""),t=ot(()=>s.menus&&s.menus.value||[]),r=ot(()=>{const i=t.value.find(f=>f.key===e.value);return i&&i.subPages||[]}),d=ot(()=>r.value.map(i=>({key:i,label:s.subPageNames&&s.subPageNames[i]||i,icon:Qs[e.value]&&Qs[e.value][i]||"circle-dot"}))),b=_t(null),o=_t(!1),l=_t(!1),g=_t(!1);let c=null,P=null;function _(){const i=b.value;i&&(l.value=i.scrollLeft>2,g.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function M(){const i=b.value;i&&(o.value=i.scrollWidth>i.clientWidth+2,_())}function S(i){const f=b.value;f&&f.scrollBy({left:i*vf,behavior:"smooth"})}function k(i){s.openTab?s.openTab(e.value,i):s.currentSubPage&&(s.currentSubPage.value=i)}function T(i){k(i),qd(()=>{const f=b.value;if(!f)return;const R=f.querySelector('[data-tab-key="'+i+'"]');R&&R.scrollIntoView({block:"nearest",inline:"nearest"})})}const C=ot(()=>{if(!o.value)return[];const i=b.value;if(!i)return[];const f=i.getBoundingClientRect(),R=new Set;return i.querySelectorAll(".qc-top-tab").forEach(L=>{const y=L.getBoundingClientRect();y.left>=f.left-2&&y.left<f.right-24&&R.add(L.getAttribute("data-tab-key"))}),d.value.filter(L=>!R.has(L.key))});function u(i,f){i.key==="ArrowLeft"?(i.preventDefault(),S(-1)):i.key==="ArrowRight"?(i.preventDefault(),S(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),k(f.key))}return wa(()=>{M(),c=new ResizeObserver(()=>{clearTimeout(P),P=setTimeout(M,100)}),b.value&&c.observe(b.value),window.addEventListener("resize",M)}),Cd(()=>{c&&c.disconnect(),window.removeEventListener("resize",M),clearTimeout(P)}),{state:s,tabs:d,currentSubPage:v,go:k,scrollRef:b,hasOverflow:o,canScrollLeft:l,canScrollRight:g,scrollByStep:S,scrollToTab:T,hiddenTabs:C,onTabKeydown:u,updateScrollState:_}}},pf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},ff=["disabled"],gf=["data-tab-key","aria-selected","title","onClick","onKeydown"],hf={class:"qc-top-tab-label"},yf=["disabled"];function bf(s,e,v,t,r,d){const b=Et("AppIcon"),o=Et("el-dropdown-item"),l=Et("el-dropdown-menu"),g=Et("el-dropdown");return t.tabs.length?(ge(),ke("div",pf,[t.hasOverflow?(ge(),ke("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=c=>t.scrollByStep(-1))},"‹",8,ff)):Ke("",!0),De("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...c)=>t.updateScrollState&&t.updateScrollState(...c))},[(ge(!0),ke(ut,null,bt(t.tabs,c=>(ge(),ke("div",{key:c.key,"data-tab-key":c.key,class:ct(["qc-top-tab",{"is-active":t.currentSubPage===c.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===c.key?"true":"false",title:c.label,onClick:P=>t.go(c.key),onKeydown:P=>t.onTabKeydown(P,c)},[mt(b,{name:c.icon,size:14},null,8,["name"]),De("span",hf,Be(c.label),1)],42,gf))),128))],544),t.hasOverflow?(ge(),ke("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=c=>t.scrollByStep(1))},"›",8,yf)):Ke("",!0),t.hasOverflow&&t.hiddenTabs.length?(ge(),Ut(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:Wt(()=>[mt(l,null,{default:Wt(()=>[(ge(!0),ke(ut,null,bt(t.hiddenTabs,c=>(ge(),Ut(o,{key:c.key,command:c.key,class:ct({"is-active":t.currentSubPage===c.key})},{default:Wt(()=>[mt(b,{name:c.icon,size:14},null,8,["name"]),sa(" "+Be(c.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:Wt(()=>[e[3]||(e[3]=De("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Ke("",!0)])):Ke("",!0)}const wf=la(mf,[["render",bf]]);(function(){const{ref:s,computed:e,inject:v}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=v("qcState");if(!t)return{};const r=s(!1),d=s(localStorage.getItem("qc.hideNonTradingBanner")==="1"),b=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},o=e(()=>t.marketData&&t.marketData.value||{}),l=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:o,bannerDismissed:d,dismissBanner:b,goMerrill:l,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:r,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(g,c){const P="sub."+g.key+"."+c,_=t.t(P);if(_!==P)return _;const M="sub."+c,S=t.t(M);return S!==M&&S?S:t.subPageNames[c]||c}}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=s("qcState");if(!e)return{};const{ref:v,computed:t}=Vue,r=v(0),d=v(0),b=v(!1),o=t(()=>{const y={day:"date",week:"week",month:"month",year:"year"},D=e.currentView&&e.currentView.value||"day";return y[D]||"date"}),l={day:"日",week:"周",month:"月",year:"年"};function g(y){return e.t&&e.t("view."+y)||l[y]||y}function c(y){e.switchView?e.switchView(y):e.currentView&&(e.currentView.value=y)}let P=null;function _(y){const D=y.touches&&y.touches[0];D&&(r.value=D.clientX,d.value=D.clientY)}async function M(){if(!b.value){b.value=!0;try{await e.refreshCalendarData()}catch{}P&&clearTimeout(P),P=setTimeout(()=>{b.value=!1},500)}}function S(y){if(!(window.innerWidth<=768))return;const D=y.changedTouches&&y.changedTouches[0];if(!D)return;const I=window.__quantModules&&window.__quantModules.gestures||{};if((typeof I.judgePullToRefresh=="function"?I.judgePullToRefresh(d.value,D.clientY):D.clientY-d.value>=60)&&(window.scrollY||0)<=0){y.stopPropagation(),M();return}if(e.currentSubPage.value==="pool")return;const O=D.clientX-r.value,F=D.clientY-d.value;Math.abs(O)>50&&Math.abs(O)>Math.abs(F)*1.2&&(e.navigateDate(O<0?1:-1),y.stopPropagation())}const k=v(!1),T=v(!1),C=v(""),u=v(null),i=v([]);function f(y){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[y]||y}async function R(){if(e.selectedDate.value){k.value=!0,T.value=!0,C.value="",u.value=null,i.value=[];try{const y=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),D=await y.json();if(!y.ok)throw new Error(D.detail||"HTTP "+y.status);u.value=D;const I=D&&D.comparison||{},V=[];for(const O of Object.keys(I)){if(O==="all_intersection")continue;const F=I[O]||{},X=O.split("_vs_");V.push({label:f(X[0])+" ↔ "+f(X[1]),interCount:F.intersection_count||0,inter:(F.intersection||[]).join(", "),onlyS1Count:F.only_s1_count||0,onlyS1:(F.only_s1||[]).join(", "),onlyS2Count:F.only_s2_count||0,onlyS2:(F.only_s2||[]).join(", ")})}i.value=V}catch(y){C.value=String(y&&y.message?y.message:y)}finally{T.value=!1}}}let L="";return Vue.watch(()=>{const y=e.stockPool,D=y&&y.value||[];return{n:D.length,first:D[0]&&D[0].code,split:!!e.detailSplitEnabled.value}},(y,D)=>{if(!y.split||!y.first||y.n===0)return;const I=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,V=(e.stockPool.value||[]).some(O=>O.code===I);if(!(e.externalStockActive&&(!I&&e.externalStockActive(null)||I&&e.externalStockActive(I)))&&(!I||!V)){if(L===y.first&&I&&V===!1&&y.n>1)return;L=y.first,e.showStockDetail&&e.showStockDetail(y.first)}},{immediate:!0}),{...e,calType:o,pullRefreshing:b,onCalTouchStart:_,onCalTouchEnd:S,viewLabel:g,switchViewLocal:c,compareVisible:k,compareLoading:T,compareError:C,compareData:u,comparePairs:i,openStrategyCompare:R}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <qc-state-panel v-if="overviewError" type="error" :title="t('state.overviewError')" :desc="t('state.descNetworkOrService')" @retry="loadDashboardData"></qc-state-panel>
                        <template v-else>
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
                    </template>
                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">
                        <qc-state-panel v-if="merrillError" type="error" :title="t('state.merrillError')" :desc="t('state.descNetwork')" @retry="fetchMerrillClock"></qc-state-panel>
                        <template v-else>

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
                    </template>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">
                        <qc-state-panel v-if="marketError" type="error" :title="t('state.marketError')" :desc="t('state.descNetworkOrService')" @retry="fetchMarketData"></qc-state-panel>
                        <qc-state-panel v-else-if="!(marketData.indices || []).length" type="empty" icon="line-chart" :title="t('state.emptyMarket')" :desc="t('state.descEmptyMarket')"></qc-state-panel>
                        <template v-else>

                    
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
                    </template>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">
                        <qc-state-panel v-if="consensusError" type="error" :title="t('state.consensusError')" :desc="t('state.descNetworkOrService')" @retry="loadConsensusData"></qc-state-panel>
                        <template v-else>

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
                    </template>
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
                            <qc-state-panel v-else-if="btError" type="error" :title="t('state.backtestError')" :desc="btError" @retry="runBacktestWorkbench"></qc-state-panel>
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
                            <qc-state-panel v-else-if="execError" type="error" title="加载失败" :desc="t('state.descNetwork')" @retry="loadExecutionData"></qc-state-panel>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=s("qcState"),v=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let r=0;const d=t(()=>{var h;return((h=e.merrillData)==null?void 0:h.value)||{}}),b=t(()=>{var h;return((h=e.marketData)==null?void 0:h.value)||{}}),o=t(()=>{var h;return((h=e.dashboardData)==null?void 0:h.value)||{}}),l=t(()=>{var h;return((h=e.healthMetrics)==null?void 0:h.value)||[]}),g=t(()=>{var h;return((h=e.filteredConsensusRank)==null?void 0:h.value)||[]}),c=t(()=>{const h={};for(const z of g.value)z.code&&z.name&&(h[z.code]=z.name);return h}),P={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function _(h){return P[h]||h}const M=t(()=>b.value.date||o.value.latest_date||"-"),S=t(()=>{const h=b.value;return!h||Object.keys(h).length===0?"数据加载中...":h.is_trading_day&&h.in_trading_hours?"● 交易中":h.is_trading_day?"已收盘":"○ 非交易日"}),k=t(()=>{const h=d.value.next_stage_prediction;return h&&h.next_stage_name&&h.transition_probability>.2?`→${h.next_stage_name} ${(h.transition_probability*100).toFixed(2)}%`:""}),T=t(()=>{const h=[],z=o.value.pool_changes||{},G=z.new_count||0;if(G>0){const Te=z.new_stock_names||{},Ce=(z.new_stocks||[]).map(Pe=>Te[Pe]||c.value[Pe]||Pe).slice(0,4).join("、");h.push({icon:"sparkles",level:"new",text:`今日新入池 ${G} 只${Ce?" · "+Ce:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Te of l.value.filter(Ce=>Ce.degraded))h.push({icon:"alert-triangle",level:"warn",text:`数据源 ${_(Te.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const ce=d.value.timing;ce&&ce.progress_percent&&ce.progress_percent>100?h.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${ce.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):ce&&ce.maturity&&d.value.name&&h.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${ce.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const de=b.value;return de&&de.is_trading_day===!1&&de.date&&h.push({icon:"calendar",level:"info",text:`${de.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),h}),C=t(()=>{const h=[],z=d.value.name||"",G=d.value.timing||{},ce=["复苏","成长","过热"],de=["滞胀","衰退"];ce.some(je=>z.includes(je))&&h.push({kind:"opportunity",source:"美林",text:z+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),de.some(je=>z.includes(je))&&h.push({kind:"risk",source:"美林",text:z+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),G.progress_percent&&G.progress_percent>100&&h.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Te=o.value.pool_changes||{},Ce=(Te.new_count||0)-(Te.out_count||0);Ce>=3?h.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ce,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Ce<=-3&&h.push({kind:"risk",source:"池变动",text:"净出池 "+Ce,action:()=>{e.currentSubPage.value="consensus"}});const Pe=b.value.market_sentiment,Fe=Pe&&Pe.text||"";(Fe.includes("乐观")||Fe.includes("积极")||Fe.includes("亢奋"))&&h.push({kind:"opportunity",source:"情绪",text:Fe,action:()=>{e.currentSubPage.value="market"}}),(Fe.includes("悲观")||Fe.includes("恐慌")||Fe.includes("低迷"))&&h.push({kind:"risk",source:"情绪",text:Fe,action:()=>{e.currentSubPage.value="market"}});for(const je of l.value.filter(tt=>tt.degraded))h.push({kind:"risk",source:"数据",text:_(je.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return h}),u=t(()=>{var h;return((h=e.merrillTimeline)==null?void 0:h.value)||e.merrillTimeline||{cycles:[]}}),i=t(()=>{var h;return((h=e.timelineLoading)==null?void 0:h.value)||!1});function f(h){const z=e.showStageDetail;typeof z=="function"&&z(h)}function R(h){const z=e.merrillStagesConfig,ce=(z&&z.value?z.value:z||{})[h]||{};return ce.color||ce.bg_color||"var(--color-primary)"}function L(h){const z=e.merrillStagesConfig,G=z&&z.value?z.value:z||{};return G[h]&&G[h].name||""}function y(){const h=e.merrillStagesConfig;return h&&h.value?h.value:h||{}}function D(h){return y()[h]&&y()[h].description||""}const I=Vue.ref([]),V=Vue.ref(null),O=Vue.ref(!1),F=Vue.ref(!1),X=Vue.ref(7),U=Vue.ref(""),H=Vue.ref(""),K=Vue.computed(()=>{const h=new Set;return(I.value||[]).forEach(function(z){z.task&&h.add(z.task)}),Array.from(h).sort()}),q=Vue.computed(function(){const h=V.value&&V.value.success_rate||0;return h>=80?"color-success":h>=50?"color-warning":"color-danger"});function a(h,z){return h>0&&z/h>=.8?"status-ok":h>0&&z/h>=.5?"status-warn":"status-bad"}async function E(){const h=++r;O.value=!0,F.value=!1;try{const z=window.__quantModules&&window.__quantModules.core||{},G=typeof z.authHeaders=="function"?z.authHeaders():{},ce=new URLSearchParams({days:String(X.value)});U.value&&ce.set("task",U.value),H.value&&ce.set("status",H.value);const[de,Te]=await Promise.all([fetch("/api/system/execution-history?"+ce.toString(),{headers:G}).then(function(Ce){return Ce.json()}),fetch("/api/system/execution-summary?days="+X.value,{headers:G}).then(function(Ce){return Ce.json()})]);if(h!==r)return;I.value=de&&de.data||[],V.value=Te&&Te.data||null}catch(z){console.error("[execution] 执行数据加载失败:",z),F.value=!0}finally{h===r&&(O.value=!1)}}const n=window.__quantModules&&window.__quantModules.i18n||{},p=typeof n.t=="function"?n.t:function(h){return String(h)},J=Vue.ref([]),N=Vue.ref(null),x=Vue.ref(null),m=Vue.ref(""),A=Vue.ref([]),w=Vue.ref(!1);let j=null;const te=Vue.computed(function(){const h=x.value&&x.value.dates||[];return h.length&&!m.value&&(m.value=h[h.length-1].date),h}),re=Vue.computed(function(){const h=(J.value||[]).find(function(G){return G.enabled});if(!h||h.countdown_seconds==null)return"—";const z=h.countdown_seconds;return Math.floor(z/3600)+"h"+String(Math.floor(z%3600/60)).padStart(2,"0")+"m"}),se=Vue.computed(function(){const h=(J.value||[]).find(function(z){return z.enabled});if(!h||h.countdown_seconds==null||h.countdown_seconds<0)return"";try{return new Date(Date.now()+h.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),le=Vue.computed(function(){const h=N.value;return!h||h.phase==="idle"?p("exec.waiting"):h.phase==="running"?p("exec.running")+(h.current_sid?" · "+h.current_sid:""):h.phase==="done"?p("exec.done"):p("exec.failed")}),Y=Vue.computed(function(){return N.value&&N.value.phase==="running"?"loader":"check-circle-2"}),ie=Vue.computed(function(){const h=x.value&&x.value.dates||[];return h.length?h[h.length-1].date:"—"}),qe=Vue.computed(function(){const h=x.value&&x.value.dates||[],z=h[h.length-1];return z&&z.visible?"color-success":"color-danger"}),ee=Vue.computed(function(){const h=x.value&&x.value.dates||[],z=h[h.length-1];return z?z.day_view_total:"—"});function $(h){const z=window.__quantModules&&window.__quantModules.core||{},G=typeof z.authHeaders=="function"?z.authHeaders():{};return fetch(h,{headers:G}).then(function(ce){return ce.json()})}async function be(){const h=++r;try{const[z,G,ce]=await Promise.all([$("/api/strategies/execution/plan"),$("/api/strategies/execution/status"),$("/api/strategies/execution/results?days=7")]);if(h!==r)return;J.value=z&&z.data&&z.data.plans||[],N.value=G&&G.data||null,x.value=ce&&ce.data||null,N.value&&N.value.phase==="running"?B():me()}catch(z){console.error("[execution-monitor] 监控数据加载失败:",z)}}function B(){me(),j=setInterval(function(){$("/api/strategies/execution/status").then(function(h){N.value=h&&h.data||null,N.value&&N.value.phase!=="running"&&(me(),be())}).catch(function(){})},5e3)}function me(){j&&(clearInterval(j),j=null)}async function ve(h){if(!h)return;const z=++r;w.value=!0;try{const G=await $("/api/strategies/execution/trace/"+encodeURIComponent(h));if(z!==r)return;const ce=G&&G.data||null;A.value=ce&&ce.steps||[]}catch(G){console.error("[execution-trace] 追溯加载失败:",G)}finally{z===r&&(w.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(h){h==="execution"?(E(),be()):me()},{immediate:!0}),Vue.watch(function(){const h=e.currentSubPage&&e.currentSubPage.value,z=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],G=e.marketData&&e.marketData.value||{};return{sub:h,split:!!e.detailSplitEnabled.value,top5:z.slice(0,5),rank:z,indices:(G.indices||[]).map(function(ce){return ce})}},function(h,z){if(h.split){if(h.sub==="overview"){if(!h.top5.length)return;const G=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.top5.some(function(de){return de.code===G});(!G||!ce)&&e.showStockDetail&&e.showStockDetail(h.top5[0].code)}else if(h.sub==="consensus"){if(!h.rank.length)return;const G=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.rank.some(function(de){return de.code===G});(!G||!ce)&&e.showStockDetail&&e.showStockDetail(h.rank[0].code)}else if(h.sub==="market"){if(!h.indices.length)return;const G=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,ce=h.indices.some(function(de){return de.code===G});(!G||!ce)&&e.showIndexDetail&&e.showIndexDetail(h.indices[0])}}},{immediate:!0});const Z=Vue.ref("band"),ue=["recession","recovery","overheating","stagflation"];function Ee(h){if(!h)return null;const z=String(h).split("-"),G=parseInt(z[0],10),ce=parseInt(z[1]||"1",10);return isFinite(G)?G+(ce-1)/12:null}function we(h){const z=Math.floor(h);let G=Math.round((h-z)*12)+1;return G>12&&(G=12),G<1&&(G=1),z+"-"+(G<10?"0"+G:""+G)}function Ne(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function We(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function fe(h,z){const G=Ne(),ce=Number(G.avg_duration_months)||0,de=Math.min(100,Number(G.progress_percent)||0),Te=Ee(G.current_stage_start_date),Ce=[];let Pe=null;if((h||[]).forEach(function(ne){const Je=Ee(ne.start);Pe==null&&Je!=null&&(Pe=Je);const ft=!!(ne.is_current||Te!=null&&Je===Te&&!ne.duration_months),wt=ne.name||L(ne.stage);if(ft&&ce>0){const dt=ce*de/100;dt>.5&&Ce.push({stage:ne.stage,name:wt,months:dt,live:!0,start:ne.start});const yt=ce-dt;yt>.5&&Ce.push({stage:ne.stage,name:"剩余(预测)",months:yt,ghost:!0,start:ne.start})}else{let dt=Number(ne.duration_months)||0;if(!dt&&Je!=null){const yt=Ee(ne.end);yt!=null&&yt>Je&&(dt=Math.max(1,Math.round((yt-Je)*12)))}dt||(dt=1),Ce.push({stage:ne.stage,name:wt,months:dt,live:ft,start:ne.start,end:ne.end})}if(ft&&z&&ce>0){const dt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;dt&&Ce.push({stage:dt.next_stage,name:(dt.next_stage_name||"下一阶段")+" (预测)",months:ce,ghost:!0,prob:dt.transition_probability})}}),!Ce.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const Fe=Ce.reduce(function(ne,Je){return ne+Je.months},0)||1,je=Pe??0;let tt=0,ht=0;const Xe=Ce.map(function(ne){const Je=tt;ne.ghost||(ht+=ne.months),tt+=ne.months;const ft={stage:ne.stage,name:ne.name,months:Math.round(ne.months),ghost:!!ne.ghost,live:!!ne.live,prob:ne.prob,left:Je/Fe*100,width:Math.max(2,ne.months/Fe*100)},wt=Ee(ne.start),dt=Ee(ne.end);return ft.start=wt!=null?we(wt):we(je+Je/12),ft.end=dt!=null?we(dt):"",ft.predicted=wt==null,ft}),Ge=Ce[Ce.length-1],pt=Ce.some(function(ne){return ne.ghost}),ae=Ge&&Ge.end?Ge.end:we(je+Fe/12);return{segs:Xe,axisStart:we(je),axisEnd:ae,nowPct:pt?ht/Fe*100:null}}function oe(h){return(h.stages||[]).some(function(z){return z.is_current})}const ye=Vue.computed(function(){const h=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!h.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let z=null;for(let G=h.length-1;G>=0;G--)if(oe(h[G])){z=h[G];break}return z||(z=h[h.length-1]),fe(z.stages,!0)});function Ve(h){const z=h&&h.stages?h.stages:[];if(!z.length)return"";const G=z[0]&&z[0].start?String(z[0].start).slice(0,4):"",ce=z[z.length-1]||{},de=ce.end?String(ce.end).slice(0,4):ce.start?String(ce.start).slice(0,4):"";return G||de?G?G+"–"+de:de:""}const Oe=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(z){return!oe(z)}).map(function(z){return{label:z.label,years:Ve(z),segs:fe(z.stages,!1).segs}})}),$e=ue,he=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(z){const G={};ue.forEach(function(de){G[de]=0});let ce=null;return(z.stages||[]).forEach(function(de){G[de.stage]!=null&&(G[de.stage]+=Number(de.duration_months)||0),de.is_current&&(ce=de.stage)}),{label:z.label,sum:G,cur:ce}})}),Se=Vue.computed(function(){let h=0;return he.value.forEach(function(z){ue.forEach(function(G){z.sum[G]>h&&(h=z.sum[G])})}),h||1}),Ae=Vue.computed(function(){const h=e.merrillSnapshots&&e.merrillSnapshots.value||[],z=[];return h.forEach(function(G){const ce=z[z.length-1];ce&&ce.stage===G.stage?(ce.count++,ce.last=G.timestamp):z.push({stage:G.stage,name:G.stage_name||L(G.stage),count:1,first:G.timestamp,last:G.timestamp})}),z}),ze=Vue.computed(function(){return Math.max(100,Math.min(200,Number(Ne().progress_percent)||0))}),Ye=Vue.computed(function(){const h=Number(Ne().progress_percent)||0;return{width:Math.max(0,Math.min(100,h/ze.value*100))+"%",background:h>100?"linear-gradient(90deg, color-mix(in srgb, "+We()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+We()+" var(--bar-mix), var(--surface-card))"}}),Ue=Vue.computed(function(){return 100/ze.value*100}),Qe=Vue.computed(function(){const h=Ne().predicted_end;if(!h)return"";if(typeof h=="string")return h;const z=h.optimistic||h.earliest||"",G=h.pessimistic||h.latest||"";return z&&G?z+" ~ "+G:h.base||h.mid||z||G||""});var Ze=22;function lt(h){return"color-mix(in srgb, "+h+" "+Ze+"%, var(--surface-card))"}function gt(h){const z=R(h.stage);return h.ghost?{left:h.left+"%",width:h.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+z,background:"repeating-linear-gradient(45deg, "+lt(z)+" 0, "+lt(z)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:h.left+"%",width:h.width+"%",background:lt(z),color:"var(--text-primary)",borderLeft:"3px solid "+z}}function pe(h){const z=[h.name];return h.start&&z.push((h.predicted?"预计起始 ":"起始 ")+h.start+(h.end?" → "+h.end:"")),h.months&&z.push("约 "+h.months+" 个月"),h.ghost&&z.push("预测(尚未发生)"),h.prob!=null&&z.push("转移概率 "+(h.prob*100).toFixed(0)+"%"),z.join(" · ")}function xe(h,z){const G=R(h),ce=Math.max(.28,z/Se.value),de=Math.round(14+30*ce);return{background:"color-mix(in srgb, "+G+" "+de+"%, var(--surface-card))",color:"var(--text-primary)"}}const Le=Vue.computed(function(){const h=e.merrillData&&e.merrillData.value||e.merrillData||{},z=h.color||R(h.stage);return{background:"color-mix(in srgb, "+z+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+z+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+z+" 26%, transparent)"}});return{...e,todayText:M,tradingStatus:S,merrillNext:k,todayFocus:T,todaySignals:C,merrillConfigOpen:v,getTimelineStageColor:R,getTimelineStageName:L,getTimelineStageDesc:D,merrillChipStyle:Le,mcHistView:Z,mcCurrentBand:ye,mcHistoryBands:Oe,mcStageKeys:$e,mcMatrix:he,mcTrailRuns:Ae,mcProgStyle:Ye,mcAvgMark:Ue,mcEndRange:Qe,mcSegStyle:gt,mcSegTitle:pe,mcMxCellStyle:xe,merrillTimeline:u,timelineLoading:i,showTimelineStage:f,execHistory:I,execSummary:V,execLoading:O,execError:F,execDays:X,execTaskFilter:U,execStatusFilter:H,execTaskOptions:K,execSuccessClass:q,loadExecutionData:E,execRateClass:a,execPlan:J,execStatus:N,execResults:x,execTraceDate:m,execTraceSteps:A,execTraceLoading:w,execResultsDates:te,execCountdownText:re,execNextRunText:se,execPhaseText:le,execStatusIcon:Y,execLastDate:ie,execVisibleClass:qe,execVisibleText:ee,loadExecutionTrace:ve}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" :desc="t('state.descRetryHealth')" @retry="refreshHealth"></qc-state-panel>
                            <template v-else>

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
                            </template>
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
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" :desc="t('state.descRetryHealth')" @retry="refreshHealth"></qc-state-panel>
                            <template v-else>
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
                            </template>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): schedule — 调度任务独立子页 -->
                    <div v-else-if="currentSubPage === 'schedule'">
                        <qc-state-panel v-if="healthDetailError" type="error" :title="t('state.healthDetailError')" :desc="t('state.descService')" @retry="loadHealthDetail"></qc-state-panel>
                        <template v-else>
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
                        </template>
                    </div>

                    <!-- V6.0 (P1-3): guard — AI 事实护栏独立子页 -->
                    <div v-else-if="currentSubPage === 'guard'">
                        <qc-state-panel v-if="factCheckError" type="error" :title="t('state.factCheckError')" :desc="t('state.descService')" @retry="loadFactCheck"></qc-state-panel>
                        <template v-else>
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
                        </template>
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
                        <qc-state-panel v-if="aiModelsError" type="error" :title="aiModelsError" :desc="t('state.descAiModels')" @retry="loadAiVendors"></qc-state-panel>
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
                        <qc-state-panel v-if="ncError" type="error" :title="t('state.notificationError')" :desc="t('state.descService')" @retry="loadNotificationData"></qc-state-panel>
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
                        <qc-state-panel v-else-if="freshnessError" type="error" :title="t('state.freshnessError')" :desc="t('state.descService')" @retry="loadFreshness"></qc-state-panel>
                        <qc-state-panel v-else-if="freshnessItems.length === 0" type="empty" icon="inbox" :title="t('state.emptyFreshness')" :desc="t('state.descEmptyFreshness')"></qc-state-panel>
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
                        <qc-state-panel v-if="feishuConfigError" type="error" :title="t('state.featureConfigError')" :desc="t('state.descService')" @retry="loadFeishuConfig"></qc-state-panel>
                        <template v-else>
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
                        </template>
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
                            </div>
                            <qc-state-panel v-if="dictError" type="error" :title="dictError" :desc="t('state.descRetryDict')" @retry="loadDataDict"></qc-state-panel>
                            <qc-state-panel v-else-if="!dictLoading && dictData.fields.length === 0" type="empty" icon="book-open" :title="t('state.emptyDictField')" :desc="t('state.descEmptyDictField')"></qc-state-panel>
                            <el-table v-else :data="dictData.fields" size="small" v-loading="dictLoading" style="width:100%" class="mt-8">
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
                        <qc-state-panel v-if="sysMonitorError" type="error" :title="t('state.usageError')" :desc="t('state.descService')" @retry="loadSysMonitor"></qc-state-panel>
                        <template v-else>
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
                        </template>
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
                                    <li><strong class="about-item-name">国际化</strong> — 中/英/日/韩/繁中 5 语切换，偏好持久化</li>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=s("qcState");if(!e)return{};function v(ae){e.currentSubPage.value=ae}function t(){Ne.value=!1,fe(),oe(),ye()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,ae=>{ae==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),ae==="datadict"&&se(),ae==="health"&&A(),ae==="notification"&&t(),ae==="datasource"&&C(),ae!=="usage"&&E()});const r=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},b=e.themeMode||Vue.computed(()=>"light"),o=e.themeHue||Vue.ref(45);function l(ae){e.changeThemeMode&&e.changeThemeMode(ae)}function g(ae){e.changeThemeHue&&e.changeThemeHue(parseInt(ae,10))}function c(ae){return e.hueColor?e.hueColor(ae):ae<0?"hsl(0, 0%, 46%)":"hsl("+ae+", 75%, 42%)"}function P(ae){return e.hueName?e.hueName(ae):d[ae]||"自定义 "+ae}function _(ae){e.setNavMode&&e.setNavMode(ae)}const M=Vue.ref([]),S=Vue.ref([]),k=Vue.ref(!1),T=Vue.ref(!1);async function C(){k.value=!0,T.value=!1;try{const ne=await(await fetch("/api/meta/freshness")).json();ne&&ne.success?S.value=ne.items||[]:T.value=!0}catch{T.value=!0}k.value=!1}const u=Vue.ref(""),i=Vue.ref("read"),f=Vue.ref(""),R=Vue.ref(!1),L=()=>window.__quantModules&&window.__quantModules.core||{},y=Vue.ref([]),D=Vue.ref(!1);async function I(){D.value=!0;try{const ae=await fetch("/api/audit/logs?limit=20",{headers:L().authHeaders?L().authHeaders():{}}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()});y.value=ae&&ae.logs||[]}catch(ae){console.error("[system] 审计加载失败:",ae),y.value=[]}finally{D.value=!1}}const V=Vue.ref(!1),O=Vue.ref(null),F=Vue.ref(null),X=Vue.ref([]),U=Vue.ref(null);function H(ae){return ae==="completed"?"完成":ae==="running"?"运行中":ae==="pending"?"排队中":ae==="cancelled"?"已取消":"失败"}async function K(){try{const ne=await(await fetch("/api/jobs?limit=20")).json();ne&&ne.success&&(X.value=ne.data&&ne.data.tasks||[])}catch(ae){console.warn("[system] 加载任务队列失败:",ae)}}async function q(ae){try{await fetch("/api/jobs/"+ae+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),K()}catch(ne){console.warn("[system] 取消任务失败:",ne)}}function a(){K(),U.value=window.setInterval(K,15e3)}function E(){U.value&&(clearInterval(U.value),U.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){E()});const n=Vue.ref({items:[]}),p=Vue.ref([]),J=Vue.ref(null),N=Vue.ref({data_sources:[],alerts:[]}),x=function(){return L().authHeaders?L().authHeaders():{}},m=function(ae){return fetch(ae,{headers:x()}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()})};async function A(){V.value=!0,O.value=null;try{const[ae,ne,Je,ft]=await Promise.all([m("/api/reliability/freshness"),m("/api/reliability/heal-history?limit=20"),m("/api/reliability/startup-report"),m("/api/reliability/source-health")]);n.value=ae&&ae.data||{items:[]},p.value=ne&&ne.data||[],J.value=Je&&Je.data||null,N.value=ft||{data_sources:[],alerts:[]},F.value=new Date().toLocaleTimeString()}catch(ae){console.warn("[health] 加载失败:",ae),O.value="健康数据加载失败: "+(ae.message||""),n.value={items:[]},p.value=[]}finally{V.value=!1}}const w=Vue.ref(!1),j=Vue.ref(""),te=Vue.ref(""),re=Vue.ref({fields:[]});async function se(){w.value=!0,j.value="";try{const ae="/api/data-dict"+(te.value?"?category="+te.value:""),ne=await m(ae);re.value=ne&&ne.data||{fields:[]}}catch(ae){console.warn("[dict] 加载失败:",ae),j.value="数据字典加载失败: "+(ae.message||""),re.value={fields:[]}}finally{w.value=!1}}function le(ae){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[ae]||"var(--text-secondary)"}function Y(ae){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[ae]||ae}const ie=Vue.computed(()=>(n.value?n.value.items||[]:[]).filter(ne=>ne.status==="stale"||ne.status==="missing").length),qe=Vue.ref("rules"),ee=Vue.ref([]),$=Vue.ref([]),be=Vue.ref([]),B=Vue.ref(!1),me=Vue.ref(""),ve=Vue.ref("price_above"),Z=Vue.ref(""),ue=Vue.ref(!1),Ee=Vue.ref(60),we=Vue.ref(""),Ne=Vue.ref(!1);function We(ae){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[ae]||ae}async function fe(){B.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/rules")).json();ee.value=ae&&ae.rules||[]}catch(ae){we.value="规则加载失败: "+ae,Ne.value=!0}finally{B.value=!1}}async function oe(){B.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/history?limit=50")).json();$.value=ae&&ae.history||[]}catch(ae){we.value="历史加载失败: "+ae,Ne.value=!0}finally{B.value=!1}}async function ye(){B.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/channels")).json(),ne=await(await fetch("/api/alerts/silence")).json();be.value=ae&&ae.channels||[],ue.value=!!(ne&&ne.silenced)}catch(ae){we.value="通道状态加载失败: "+ae,Ne.value=!0}finally{B.value=!1}}function Ve(ae){qe.value=ae,ae==="rules"?fe():ae==="history"?oe():ye()}async function Oe(){const ae=me.value.trim();if(!ae){we.value="请填写股票代码";return}B.value=!0;try{const ne={stock_code:ae,rule_type:ve.value};if(ve.value!=="new_pool"){const ft=Number(Z.value);if(isNaN(ft)){we.value="阈值必须为数值";return}ne.threshold=ft}const Je=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ne)})).json();Je&&Je.rule?(we.value="规则已添加",me.value="",Z.value="",fe()):we.value=Je&&Je.detail||"添加失败"}catch(ne){we.value="添加失败: "+ne}finally{B.value=!1}}async function $e(ae){try{await fetch("/api/alerts/rules/"+ae.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!ae.enabled})}),ae.enabled=!ae.enabled}catch(ne){we.value="切换失败: "+ne}}async function he(ae){try{const ne=await(await fetch("/api/alerts/rules/"+ae.id,{method:"DELETE"})).json();ne&&ne.success?(we.value="规则已删除",fe()):we.value="删除失败"}catch(ne){we.value="删除失败: "+ne}}async function Se(){try{const ae=ue.value?Ee.value:0,ne=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:ae})})).json();ue.value=!!(ne&&ne.silenced),we.value=ue.value?"已静默":"已恢复推送"}catch(ae){we.value="静默设置失败: "+ae}}async function Ae(){ue.value=!1,await Se()}function ze(ae){return!!ae&&!ae.degraded}const Ye=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ne,Je)=>Math.max(ne,Je.views||0),0)||1),Ue=()=>L().OPENAPI_ROUTE_BASE||"/api/openapi";async function Qe(){R.value=!0;try{const ae=await L().apiFetch(Ue()+"/keys");M.value=ae&&ae.data||[]}catch(ae){ElementPlus.ElMessage.error("加载 API Key 失败: "+(ae.message||""))}finally{R.value=!1}}async function Ze(){try{const ae=await L().apiFetch(Ue()+"/keys",{method:"POST",body:JSON.stringify({name:u.value||"未命名",role:i.value||"read",expire_days:365})});ae&&ae.success?(f.value=ae.api_key||"",u.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Qe()):ElementPlus.ElMessage.error(ae&&(ae.detail||ae.message)||"生成失败")}catch(ae){ElementPlus.ElMessage.error("生成失败: "+(ae.message||""))}}async function lt(){if(f.value)try{await navigator.clipboard.writeText(f.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function gt(ae){try{const ne=await L().apiFetch(Ue()+"/keys/"+ae.id,{method:"DELETE"});ne&&ne.success?(ElementPlus.ElMessage.success("Key 已吊销"),f.value&&ae.prefix&&f.value.includes(ae.prefix)&&(f.value=""),await Qe()):ElementPlus.ElMessage.error(ne&&(ne.detail||ne.message)||"吊销失败")}catch(ne){ElementPlus.ElMessage.error("吊销失败: "+(ne.message||""))}}const pe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function xe(ae){return pe[ae]||ae}const Le=computed(()=>{var ae;return(((ae=e.healthMetrics)==null?void 0:ae.value)||[]).map(ne=>({name:xe(ne.name),source:ne.name,success_rate:ne.success_rate,avg_latency_ms:ne.avg_latency_ms,calls:ne.calls||0,degraded:!!ne.degraded,data_age_hours:ne.data_age_hours!=null?ne.data_age_hours:null,stale:!!ne.stale,last_fetch:ne.last_fetch||ne.last_success||null}))});function h(ae){return ae.degraded?"degraded":ae.success_rate==null?"unknown":ae.success_rate>=90?"ok":ae.success_rate>=60?"warn":"bad"}function z(ae){return ae==null?"":ae<1?"刚刚":ae<24?Math.round(ae)+"小时前":Math.floor(ae/24)+"天前"}const G=e.aiUsage||Vue.ref({}),ce=Vue.computed(()=>{const ae=G.value&&G.value.by_model||{};return Object.entries(ae).map(([ne,Je])=>({name:ne,count:Je})).sort((ne,Je)=>Je.count-ne.count)}),de=Vue.computed(()=>ce.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||1),Te=Vue.computed(()=>ce.value.reduce((ae,ne)=>ae+ne.count,0)||1),Ce=Vue.computed(()=>Pe.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||0),Pe=Vue.computed(()=>{const ae=G.value&&G.value.by_day||{},ne=[],Je=new Date;for(let ft=29;ft>=0;ft--){const wt=new Date(Je.getFullYear(),Je.getMonth(),Je.getDate()-ft),dt=wt.getFullYear()+"-"+String(wt.getMonth()+1).padStart(2,"0")+"-"+String(wt.getDate()).padStart(2,"0");ne.push({day:dt,count:ae[dt]||0})}return ne}),Fe=Vue.computed(()=>Pe.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||1),je=Vue.computed(()=>{const ae=G.value&&G.value.by_day||{},ne=new Date,Je=ne.getFullYear()+"-"+String(ne.getMonth()+1).padStart(2,"0")+"-"+String(ne.getDate()).padStart(2,"0");return ae[Je]||0}),tt=Vue.computed(()=>{const ae=G.value&&G.value.by_day||{},ne=Object.keys(ae).filter(Je=>(ae[Je]||0)>0);return ne.length?ne[ne.length-1]:""});function ht(ae){e.analyticsDays&&(e.analyticsDays.value=ae),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Xe='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ge='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function pt(ae){return ae?Ge:Xe}return a(),{...e,themeHues:r,themeHueNames:d,themeMode:b,themeHue:o,onThemeModeChange:l,setThemeHue:g,hueColor:c,hueName:P,onNavModeChange:_,analyticsMaxViews:Ye,aiModelRank:ce,aiModelMax:de,aiDayTrend:Pe,aiDayMax:Fe,todayAiCalls:je,lastAiCallDay:tt,aiTotal:Te,aiDayPeak:Ce,setAnalyticsDays:ht,viewIcon:pt,openApiKeys:M,openApiKeyName:u,openApiKeyRole:i,newOpenApiKey:f,openApiLoading:R,loadOpenApiKeys:Qe,generateOpenApiKey:Ze,copyOpenApiKey:lt,revokeOpenApiKey:gt,healthRows:Le,healthClass:h,fmtAge:z,staleAssetCount:ie,jobQueue:X,loadJobQueue:K,cancelJob:q,jobStatusText:H,auditLogs:y,auditLoading:D,loadAuditLogs:I,healthLoading:V,healthError:O,healthUpdatedAt:F,freshnessData:n,healHistory:p,startupReport:J,sourceHealth:N,refreshHealth:A,statusColor:le,statusLabel:Y,sourceOk:ze,dictLoading:w,dictError:j,dictCategory:te,dictData:re,loadDataDict:se,ncTab:qe,ncRules:ee,ncHistory:$,ncChannels:be,ncLoading:B,ncNewCode:me,ncNewType:ve,ncNewThreshold:Z,ncSilence:ue,ncSilenceMinutes:Ee,ncMsg:we,ncTypeLabel:We,onNcTab:Ve,loadAlertRules:fe,loadAlertHistory:oe,loadAlertChannels:ye,addAlertRule:Oe,toggleAlertRule:$e,removeAlertRule:he,applySilence:Se,clearSilence:Ae,freshnessItems:S,freshnessLoading:k,freshnessError:T,loadFreshness:C,ncError:Ne,goSystemSub:v}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.part1=`
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

                        <!-- 6.3.1 (T-6.3.1.3): 概览取数失败错误态（可重试） -->
                        <qc-state-panel v-if="aiHistoryError && aiHistory.length === 0" type="error" @retry="loadAiHistory"></qc-state-panel>
                        <!-- 空状态：无任何评估记录 -->
                        <div v-else-if="aiHistory.length === 0" class="card text-center-pad40x20">
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
                            <qc-state-panel v-else-if="trackError" type="error" @retry="loadTrack"></qc-state-panel>
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
                                <qc-virtual-list class="vlist-h-calc watchlist-vlist" :items="sortedWatchlist" :row-height="detailSplitEnabled ? 76 : 56" :aria-label="t('a11y.watchlistList')">
                                    <template #default="{ item: stock }">
                                    <!-- v3.17.8 (FR-3.17.8): 移动端左滑露出删除操作（.swipe-reveal），长按复制代码 -->
                                    <div class="watchlist-item swipe-reveal" :data-copy-code="stock.code" :data-ctx-code="stock.code" :data-ctx-name="stock.name" data-ctx-context="watchlist" @click="detailSplitEnabled ? showStockDetail(stock.code) : showStockKline(stock.code, stock.name)" :aria-current="(detailSplitEnabled && stockDetail && stockDetail.stock === stock.code) ? 'true' : null" :class="{'watchlist-item-selected': selectedWatchlistCodes.includes(stock.code), 'is-active': detailSplitEnabled && stockDetail && stockDetail.stock === stock.code}">
                                        <div class="swipe-reveal-main">
                                        <!-- 6.3.1 (T-6.3.1.4): 复选框补角色/选中态/键盘可操作（读屏可勾选自选股） -->
                                        <div class="watchlist-checkbox" role="checkbox" tabindex="0"
                                             :aria-checked="selectedWatchlistCodes.includes(stock.code) ? 'true' : 'false'"
                                             :aria-label="t('a11y.selectWatchStock', { code: stock.code, name: stock.name })"
                                             @click.stop="toggleSelectWatchlist(stock.code)"
                                             @keydown.enter.prevent="toggleSelectWatchlist(stock.code)"
                                             @keydown.space.prevent="toggleSelectWatchlist(stock.code)">
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
                    <!-- 6.3.1 (T-6.3.1.3): 空/错误态由 FocusView 上报, 页面侧统一面板承接 -->
                    <div v-else-if="currentSubPage === 'focus'">
                        <qc-state-panel v-if="focusState.error" type="error" @retry="reloadFocus"></qc-state-panel>
                        <qc-state-panel v-else-if="focusState.empty" type="empty" icon="target" :title="t('state.emptyFocus')" :desc="t('state.descEmptyFocus')"></qc-state-panel>
                        <qc-focus-view ref="focusViewRef" v-show="!focusState.error && !focusState.empty" @load-state="onFocusLoadState"></qc-focus-view>
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
                                            <tr v-for="p in positions" :key="p.stock_code" :data-ctx-code="p.stock_code" :data-ctx-name="p.stock_name" data-ctx-context="portfolio">
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.view=window.__quantModules.aiPage.part1+window.__quantModules.aiPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:window.__quantModules.aiPage.view,setup(){const{ref:e,watch:v,onUnmounted:t}=Vue,r=s("qcState");if(!r)return{};function d(){if(!r.hasMoreAiHistory||!r.loadMoreAiHistory||r.currentPage.value!=="ai"||r.currentSubPage.value!=="history")return;const B=document.documentElement;B.scrollTop+window.innerHeight>=B.scrollHeight-300&&r.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const b=e(null),o=e(!1),l=e(!1),g=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function c(B){return!B||B.total===0||B.rate===null||B.rate===void 0?"--":B.rate.toFixed(2)+"%"}const P=e(5);function _(B){P.value=B}function M(B,me){if(!B)return"--";if(B.available===!1)return"— 数据不可达";const ve=B["hit_n"+me];return ve===!0?"✓ 命中":ve===!1?"✗ 未中":"– 中性/待验证"}async function S(){o.value=!0,l.value=!1;try{const me=await(await fetch("/api/ai/track")).json();b.value=me&&me.success?me.data:null}catch(B){console.warn("[eval-track] 评估命中率加载失败:",B),b.value=null,l.value=!0}finally{o.value=!1}}v(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(B){B==="ai/evaluation-analysis"&&S()},{immediate:!0});const k=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:T,summary:C,trades:u,loading:i,loadError:f,showAddForm:R,addForm:L,addSaving:y,tradeFormVisible:D,tradeForm:I,tradeSaving:V,portfolioTab:O,equityDays:F,equityLoading:X,equityNote:U,equityHasData:H,loadPortfolio:K,addPosition:q,removePosition:a,openTradeForm:E,submitTrade:n,loadTrades:p,loadEquity:J,fmtSigned:N,fmtSignedPct:x,signClass:m,riskTab:A,riskLoading:w,riskNote:j,riskHasData:te,riskData:re,riskMetricList:se,loadRisk:le}=k;v(T,function(B){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((B||[]).map(function(me){return{code:me.stock_code,name:me.stock_name||me.stock_code}}))},{deep:!0}),v(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(B){B==="ai/portfolio"?(K(),p(),J(F?F.value:30),typeof le=="function"&&le()):B==="ai/overview"&&K()},{immediate:!0});let Y="",ie=!1;v(function(){const B=r.currentSubPage&&r.currentSubPage.value,me=!!(r.detailSplitEnabled&&r.detailSplitEnabled.value),ve={sub:B,split:me,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(B==="history"){const Z=r.aiHistoryView&&r.aiHistoryView.value||"date",ue=Z==="date"?r.groupedByDate:Z==="month"?r.groupedByMonth:r.aiHistoryByStock,Ee=ue&&ue.value||{},we=Object.keys(Ee);ve.kind="history",ve.view=Z,ve.key=we.length?we[0]:"",ve.first=we.length&&(Ee[we[0]]||[])[0]||null,ve.expandList=Z==="date"?r.expandedDates:Z==="month"?r.expandedMonths:r.expandedStocks,ve.expandFn=Z==="date"?r.toggleDateExpand:Z==="month"?r.toggleMonthExpand:r.toggleStockExpand}else if(B==="chat_history"){const Z=r.chatHistoryView&&r.chatHistoryView.value||"date",ue=Z==="date"?r.chatGroupedByDate:Z==="month"?r.chatGroupedByMonth:r.chatGroupedByStock,Ee=ue&&ue.value||{},we=Object.keys(Ee);ve.kind="chat",ve.view=Z,ve.key=we.length?we[0]:"",ve.first=we.length&&(Ee[we[0]]||[])[0]||null,ve.expandList=Z==="date"?r.expandedChatDates:Z==="month"?r.expandedChatMonths:r.expandedChatStocks,ve.expandFn=Z==="date"?r.toggleChatDateExpand:Z==="month"?r.toggleChatMonthExpand:r.toggleChatStockExpand}return ve},function(B){if(!B.split||!B.first||!B.kind)return;const me=B.sub!==Y,ve=r.stockDetail&&r.stockDetail.value,Z=!!(ve&&ve.stock);if(!me&&Z||ie)return;Y=B.sub,ie=!0;try{B.key&&B.expandList&&B.expandFn&&B.expandList.value&&B.expandList.value.indexOf(B.key)<0&&B.expandFn(B.key)}catch{}const ue=B.kind==="history"?r.viewAiResult(B.first):r.viewChatSession(B.first);ue&&typeof ue.finally=="function"?ue.finally(function(){ie=!1}):ie=!1},{immediate:!0});const qe=e({error:!1,empty:!1}),ee=e(null);function $(B){B&&(qe.value=B)}function be(){const B=ee.value;B&&typeof B.loadAll=="function"&&B.loadAll()}return{...r,trackData:b,trackLoading:o,trackError:l,trackWindows:g,fmtTrackRate:c,loadTrack:S,trackWindow:P,setTrackWindow:_,trackHitText:M,focusState:qe,focusViewRef:ee,onFocusLoadState:$,reloadFocus:be,positions:T,summary:C,trades:u,loading:i,loadError:f,showAddForm:R,addForm:L,addSaving:y,tradeFormVisible:D,tradeForm:I,tradeSaving:V,portfolioTab:O,equityDays:F,equityLoading:X,equityNote:U,equityHasData:H,loadPortfolio:K,addPosition:q,removePosition:a,openTradeForm:E,submitTrade:n,loadTrades:p,loadEquity:J,fmtSigned:N,fmtSignedPct:x,signClass:m,riskTab:A,riskLoading:w,riskNote:j,riskHasData:te,riskData:re,riskMetricList:se,loadRisk:le}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(s){const{ref:e,seq:v,authHeaders:t}=s,r=e([]),d=e(!1),b=e(!1),o=e(""),l=e(null),g=e(!1),c=e(!1);async function P(){const R=++v.n;d.value=!0,b.value=!1;try{const L=await fetch("/api/market/reviews?limit=30",{headers:t()}).then(y=>y.json());if(R!==v.n)return;L&&L.success?r.value=Array.isArray(L.data)?L.data:[]:b.value=!0}catch(L){console.error("[market-review] 复盘列表加载失败:",L),b.value=!0}finally{R===v.n&&(d.value=!1)}}function _(R){o.value=R,C(R)}function M(R){o.value===R?T():_(R)}function S(R){return R==null||isNaN(Number(R))?"—":(Number(R)>=0?"+":"")+Number(R).toFixed(2)+"%"}function k(R){return R==null||isNaN(Number(R))?"—":Number(R).toFixed(2)}function T(){o.value="",l.value=null,c.value=!1}async function C(R){const L=++v.n;g.value=!0,c.value=!1,l.value=null;try{const y=R?"/api/market/review?date="+encodeURIComponent(R):"/api/market/review",D=await fetch(y,{headers:t()}).then(I=>I.json());if(L!==v.n)return;D&&D.success?l.value=D.data:c.value=!0}catch(y){console.error("[market-review] 复盘详情加载失败:",y),c.value=!0}finally{L===v.n&&(g.value=!1)}}function u(R){return R>0?"up":R<0?"down":"flat"}function i(R){return R==null||isNaN(Number(R))?"—":(R>0?"+":"")+Number(R).toFixed(2)+"%"}function f(R){const L={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(R||{}).map(function(y){const D=y[0],I=y[1],V=!I||I==="unavailable"||I==="数据不可达";return{label:L[D]||D,value:V?"数据不可达":I,unavailable:V}})}return{marketReviews:r,marketReviewLoading:d,marketReviewError:b,selectedReviewDate:o,marketReviewDetail:l,marketReviewDetailLoading:g,marketReviewDetailError:c,loadMarketReviews:P,openMarketReview:_,toggleMarketReviewDate:M,backToMarketReviewList:T,loadMarketReviewDetail:C,marketReviewChgClass:u,marketReviewChgText:i,marketReviewSrcEntries:f,fmtPct:S,fmtEmotion:k}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(s){const{ref:e,seq:v,withAuth:t,authHeaders:r,activeStrategyId:d,paramValues:b}=s,o=window.__quantModules&&window.__quantModules.i18n||{},l=typeof o.t=="function"?o.t:function(V){return String(V)},g=e("mom20"),c=e(!1),P=e(!1),_=e(null),M=e(null),S=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],k=e('{"top_n":[10,20,30]}'),T=e(null),C=e(""),u=e(!1),i=e(null);async function f(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let V;try{V=JSON.parse(k.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!V||Object.keys(V).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}u.value=!0,T.value=null,C.value="";try{const O=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:r(),body:JSON.stringify({param_grid:V})}).then(function(F){return F.json()});O&&Array.isArray(O.results)?(T.value=O.results,C.value="完成 "+O.count+" 组"+(O.data_degraded?" (数据不可达, 结果降级)":""),i.value=O.param_stability||null):C.value=O&&O.detail||"扫描失败"}catch(O){console.error("[sweep]",O),C.value="扫描失败: "+O.message}finally{u.value=!1}}async function R(){const V=++v.n;c.value=!0;try{const O=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function(X){return X.json()}),F=O&&O.report?O.report.n1||{}:{};_.value=F}catch(O){console.error("[research] 因子IC分析失败:",O),ElementPlus.ElMessage.error(l("msg.factorIcFailed",{msg:O.message}))}finally{V===v.n&&(c.value=!1)}}async function L(){const V=++v.n;P.value=!0;try{const O=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function(F){return F.json()});O&&O.layers?M.value=O:ElementPlus.ElMessage.warning(l("msg.layerBacktest",{msg:O.message||l("msg.noData")}))}catch(O){console.error("[research] 分层回测失败:",O),ElementPlus.ElMessage.error(l("msg.layerBacktestFailed",{msg:O.message}))}finally{V===v.n&&(P.value=!1)}}const y=e(null),D=e(!1);async function I(){const V=++v.n;D.value=!0,y.value=null;try{const O=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function(F){return F.json()});O&&O.detail?y.value=O.detail:ElementPlus.ElMessage.warning(l("msg.factorDetail",{msg:O.message||l("msg.noData")}))}catch(O){console.error("[research] 因子详情失败:",O),ElementPlus.ElMessage.error(l("msg.factorDetailFailed",{msg:O.message}))}finally{V===v.n&&(D.value=!1)}}return{factorKey:g,factorIcLoading:c,factorLayerLoading:P,factorIcReport:_,factorLayerResult:M,factorOptions:S,runFactorIc:R,runFactorLayer:L,factorDetail:y,factorDetailLoading:D,runFactorDetail:I,sweepGrid:k,sweepResult:T,sweepMessage:C,sweepLoading:u,sweepStability:i,runSweep:f}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(s){const{seq:e,state:v}=s,t=Vue.ref([]),r=Vue.ref(!1),d=Vue.ref(!1),b=Vue.ref(""),o=Vue.ref([]),l=Vue.ref(""),g=Vue.ref([]),c=Vue.ref(!1),P=Vue.ref(!1),_={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function M(L){return _[L]||L||"—"}function S(L){v&&v.navigateTo&&v.navigateTo("shortterm",L)}function k(){v.currentSubPage.value="research-history",T()}async function T(){const L=++e.n;r.value=!0,d.value=!1;try{const y=window.__quantModules&&window.__quantModules.core||{},D=typeof y.authHeaders=="function"?y.authHeaders():{},I=b.value?"?type="+encodeURIComponent(b.value):"",V=await fetch("/api/strategies/research-history"+I,{headers:D}).then(function(O){return O.json()});if(L!==e.n)return;t.value=V&&V.items||[]}catch(y){console.error("[research-history] 加载失败:",y),d.value=!0}finally{L===e.n&&(r.value=!1)}}async function C(){const L=++e.n;P.value=!0;try{const y=window.__quantModules&&window.__quantModules.core||{},D=typeof y.authHeaders=="function"?y.authHeaders():{},I=b.value?"?type="+encodeURIComponent(b.value):"",V=await fetch("/api/strategies/research-history/export"+I,{headers:D});if(!V.ok)throw new Error("HTTP "+V.status);const O=await V.blob(),F=URL.createObjectURL(O),X=document.createElement("a");X.href=F,X.download="research_history.csv",document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(F)}catch(y){console.error("[research-history] 导出失败:",y)}finally{L===e.n&&(P.value=!1)}}function u(L){const y=o.value.indexOf(L);y>=0?o.value.splice(y,1):o.value.length<10&&o.value.push(L)}function i(L){l.value=l.value===L?"":L}async function f(){const L=++e.n,y=o.value;if(!(y.length<2)){c.value=!0;try{const D=window.__quantModules&&window.__quantModules.core||{},I=typeof D.authHeaders=="function"?D.authHeaders():{},V=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},I),body:JSON.stringify({ids:y})}).then(function(O){return O.json()});g.value=V&&V.items||[]}catch(D){console.error("[research-history] 对比失败:",D)}finally{L===e.n&&(c.value=!1)}}}async function R(L){try{const y=window.__quantModules&&window.__quantModules.core||{},D=typeof y.authHeaders=="function"?y.authHeaders():{},I=await fetch("/api/strategies/research-history/"+L,{method:"DELETE",headers:D}).then(function(V){return V.json()});if(I&&I.deleted){t.value=t.value.filter(function(O){return O.id!==L});const V=o.value.indexOf(L);V>=0&&o.value.splice(V,1)}}catch(y){console.error("[research-history] 删除失败:",y)}}return{researchHistory:t,researchHistoryLoading:r,researchHistoryError:d,researchHistoryType:b,researchHistorySelected:o,researchDetailId:l,researchCompareRows:g,researchCompareLoading:c,researchExportLoading:P,researchTypeLabel:M,goShortterm:S,openResearchHistory:k,loadResearchHistory:T,exportResearchHistory:C,toggleResearchSelect:u,toggleResearchDetail:i,runResearchCompare:f,deleteResearchHistory:R}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
                <!-- V5.2.3: 市场复盘移入短线复盘 → 本组件在 shortterm 下也渲染该子页 (V6.9.1-fix: 异动扫描已删除) -->
                <div key="research">
                    <!-- V6.9.4 (FIX): 根 v-if currentPage 判断在组件内为死值导致整页空白 — 移除, 子页由 currentSubPage 控制 -->
                    <!-- V6.9.3 (F11.2): 策略研究菜单恒显 — 移除 researchMenuEnabled 占位分支 -->
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 策略研究概览</div>
                        <!-- 6.3.1 (T-6.3.1.3): 四态统一 — 加载/错误/空态收敛到 qc-state-panel -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesError')" :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="flask-conical" :title="t('state.emptyStrategyResearch')" :desc="t('state.descEmptyStrategyResearch')"></qc-state-panel>
                        <template v-else>
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
                        </template>
                    </div>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
                        <!-- V6.9.4 (F6.2): 持仓数据文件缺失可诊断提示条 (策略定义列表仍可用) -->
                        <div v-if="strategiesWarn" class="text-danger-semibold mt-8" role="alert"><qc-icon name="alert-triangle" :size="14" /> {{ strategiesWarn }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesManageError')"
                            :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0" type="empty" icon="flask-conical" :title="t('state.emptyStrategy')" :desc="t('state.descEmptyStrategy')"></qc-state-panel>
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
                        <!-- 6.3.1 (T-6.3.1.3): 四态统一 — 策略管理加载/错误/空态 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesManageError')" :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="layers" :title="t('state.emptyStrategyManage')" :desc="t('state.descEmptyStrategyManage')"></qc-state-panel>
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
                        <qc-state-panel v-else-if="backtestError" type="error" :title="t('state.backtestError')" :desc="t('state.descBacktest')" @retry="runBacktest"></qc-state-panel>
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
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" :desc="t('state.descNetwork')" @retry="loadBtHistory"></qc-state-panel>
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
                        <qc-state-panel v-else-if="researchHistoryError" type="error" title="研究历史加载失败" :desc="t('state.descNetwork')" @retry="loadResearchHistory"></qc-state-panel>
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
                                <qc-virtual-list v-else class="market-review-date-items" :items="marketReviews" :row-height="66" :aria-label="t('a11y.reviewDateList')">
                                    <template #default="{ item }">
                                    <div class="market-review-date-item"
                                         :class="{ 'is-active': item.date === selectedReviewDate }" role="button" tabindex="0"
                                         :aria-current="item.date === selectedReviewDate ? 'true' : null"
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
                                    :desc="t('state.descNetwork')" @retry="loadMarketReviews"></qc-state-panel>
                                <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="file-text" title="暂无市场复盘"
                                    desc="尚未生成任何市场复盘报告"></qc-state-panel>
                                <div v-else>
                                    <div class="flex-wrap mb-4">
                                        <div class="stat-card"><div class="stat-icon info"><qc-icon name="file-text" :size="18" /></div><div class="stat-label">复盘总数</div><div class="stat-value">{{ marketReviews.length }}</div></div>
                                        <div class="stat-card"><div class="stat-icon success"><qc-icon name="calendar" :size="18" /></div><div class="stat-label">最新复盘</div><div class="stat-value stat-value-lg">{{ marketReviews[0] ? marketReviews[0].date : '—' }}</div></div>
                                    </div>
                                    <!-- 6.3.1 (T-6.3.1.2): 复盘列表逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 60px, 见 themes.css) -->
                                    <qc-virtual-list class="market-review-list market-review-list-vlist" :items="marketReviews" :row-height="60" :aria-label="t('a11y.dailyReviewList')">
                                        <template #default="{ item }">
                                        <div class="market-review-row"
                                             tabindex="0" role="button" :aria-label="t('a11y.viewMarketReview', { date: item.date })"
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
                                :desc="t('state.descNetwork')" @retry="loadMarketReviewDetail(selectedReviewDate)"></qc-state-panel>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:s,computed:e,watch:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const r=t("qcState"),d=Vue.ref(!1),b=Vue.ref(!1),o={n:0};if(!r)return{};const l=s(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(Q){l.value=Q;try{localStorage.setItem("quant_strategy_mode",Q)}catch{}r.currentSubPage.value="strategy-manage"}const c=s([]),P=s(!1),_=s(!1),M=s(""),S=s(""),k=s(""),T=s({}),C=s(!1),u=s(""),i=s(""),f=s([]),R=s([]),L=s(""),y=s(""),D=s(!0),I=s(!0),V=s("20:00"),O=s("default"),F=s(!1),X=s(""),U=e(function(){return c.value.find(function(Q){return Q.id===k.value})||null});async function H(Q,_e){_e=_e||{},_e.headers=Object.assign({},_e.headers||{});const et=localStorage.getItem("quant_token")||"";return et&&(_e.headers.Authorization="Bearer "+et),fetch(Q,_e)}async function K(){const Q=++o.n;P.value=!0,_.value=!1,M.value="",S.value="";try{const _e=await H("/api/strategies").then(function(aa){return aa.json()});if(Q!==o.n)return;let et=null;Array.isArray(_e)?et=_e:_e&&Array.isArray(_e.strategies)?(et=_e.strategies,_e.warn&&(S.value=String(_e.warn))):(_.value=!0,M.value=_e&&_e.detail?String(_e.detail):"策略列表加载失败（接口返回异常）"),et!==null&&(c.value=et,c.value.length&&!k.value&&(k.value=c.value[0].id,q()))}catch(_e){console.error("[research] 策略列表加载失败:",_e),_.value=!0,M.value="策略列表加载失败: "+(_e&&_e.message||"网络错误")}finally{Q===o.n&&(P.value=!1)}}function q(){const Q=U.value;Q&&(T.value={},Q.schema.forEach(function(_e){T.value[_e.key]=_e.default}),i.value="",j(),a(),J())}async function a(){if(!k.value){R.value=[];return}try{const Q=await H("/api/strategies/"+k.value+"/profiles").then(function(_e){return _e.json()});R.value=Q&&Q.data&&Q.data.profiles||[],L.value=""}catch(Q){console.error("[research] 方案列表加载失败:",Q),R.value=[]}}async function E(){d.value=!0;const Q=(y.value||"").trim();if(!Q){window._core&&window._core.showToast("请输入方案名称");return}try{const _e=await H("/api/strategies/"+k.value+"/profiles",{method:"POST",body:JSON.stringify({name:Q,params:T.value})}).then(function(et){return et.json()});if(_e&&_e.detail){window._core&&window._core.showToast(String(_e.detail));return}y.value="",await a(),window._core&&window._core.showToast("方案已保存")}catch(_e){console.error("[research] 方案保存失败:",_e),window._core&&window._core.showToast("方案保存失败")}}function n(){const Q=R.value.find(function(_e){return _e.id===L.value});Q&&(Object.keys(Q.params||{}).forEach(function(_e){T.value[_e]=Q.params[_e]}),window._core&&window._core.showToast("已应用方案: "+Q.name))}async function p(){if(L.value)try{await H("/api/strategies/"+k.value+"/profiles/"+L.value,{method:"DELETE"}).then(function(Q){return Q.json()}),await a(),window._core&&window._core.showToast("方案已删除")}catch(Q){console.error("[research] 方案删除失败:",Q)}}async function J(){try{const Q=await H("/api/strategies/governance").then(function(aa){return aa.json()}),et=(Q&&Q.data&&Q.data.strategies||{})[k.value]||{};D.value=et.enabled!==!1,V.value=et.schedule||"20:00",O.value=et.universe==="all"?"all":"default",I.value=et.show_in_calendar!==!1,X.value=et.last_holdings||""}catch(Q){console.error("[research] 纳管状态加载失败:",Q)}}async function N(){try{await H("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const Q={};return Q[k.value]={enabled:D.value,schedule:V.value,universe:O.value,show_in_calendar:I.value},Q}()})}).then(function(Q){return Q.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(Q){console.error("[research] 纳管更新失败:",Q)}}async function x(){if(k.value){F.value=!0;try{const Q=await H("/api/strategies/"+k.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:u.value||void 0})}).then(function(_e){return _e.json()});if(Q&&Q.detail){window._core&&window._core.showToast(String(Q.detail));return}window._core&&window._core.showToast("持仓已生成"),await J()}catch(Q){console.error("[research] run-once 失败:",Q),window._core&&window._core.showToast("持仓生成失败")}finally{F.value=!1}}}function m(){X.value&&window.open(X.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function A(){const Q=U.value;if(!Q)return;const _e=(y.value||"").trim()||Q.name+"-副本";w(_e,Object.assign({},T.value)),window._core&&window._core.showToast("已复制为副本方案: "+_e)}async function w(Q,_e){try{await H("/api/strategies/"+k.value+"/profiles",{method:"POST",body:JSON.stringify({name:Q,params:_e})}).then(function(et){return et.json()}),await a()}catch(et){console.error("[research] 副本保存失败:",et)}}async function j(){const Q=++o.n;if(k.value)try{const _e=await H("/api/strategies/"+k.value+"/runs?limit=5").then(function(et){return et.json()});if(Q!==o.n)return;f.value=Array.isArray(_e)?_e:[]}catch{f.value=[]}}async function te(){if(k.value){C.value=!0;try{const Q=await H("/api/strategies/"+k.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:T.value,as_of:u.value||void 0})}).then(function(_e){return _e.json()});Q&&Q.status==="success"?j():ElementPlus.ElMessage.error(r.t("msg.runFailed",{msg:Q.detail||JSON.stringify(Q)}))}catch(Q){console.error("[research] 策略运行失败:",Q),ElementPlus.ElMessage.error(r.t("msg.runFailed",{msg:Q.message}))}finally{C.value=!1}}}async function re(){if(k.value)try{const Q=Object.keys(T.value).map(function(et){return encodeURIComponent(et)+"="+encodeURIComponent(T.value[et])}).join("&"),_e=await H("/api/strategies/"+k.value+"/ptrade-code?"+Q).then(function(et){return et.json()});_e&&_e.code?i.value=_e.code:ElementPlus.ElMessage.error(r.t("msg.exportFailed",{msg:_e.detail||JSON.stringify(_e)}))}catch(Q){console.error("[research] PTrade 导出失败:",Q),ElementPlus.ElMessage.error(r.t("msg.exportFailed",{msg:Q.message}))}}function se(){if(!i.value)return;const Q=document.createElement("textarea");Q.value=i.value,document.body.appendChild(Q),Q.select();try{document.execCommand("copy")}catch{}document.body.removeChild(Q)}const le=window.__quantModules.researchPage.marketReview.create({ref:s,seq:o,authHeaders:Ct}),{marketReviews:Y,marketReviewLoading:ie,marketReviewError:qe,selectedReviewDate:ee,marketReviewDetail:$,marketReviewDetailLoading:be}=le,{marketReviewDetailError:B,loadMarketReviews:me,openMarketReview:ve,toggleMarketReviewDate:Z,backToMarketReviewList:ue,loadMarketReviewDetail:Ee}=le,{marketReviewChgClass:we,marketReviewChgText:Ne,marketReviewSrcEntries:We,fmtPct:fe,fmtEmotion:oe}=le,ye=window.__quantModules.researchPage.factor.create({ref:s,seq:o,withAuth:H,authHeaders:Ct,activeStrategyId:k,paramValues:T}),{factorKey:Ve,factorIcLoading:Oe,factorLayerLoading:$e,factorIcReport:he,factorLayerResult:Se,factorOptions:Ae}=ye,{runFactorIc:ze,runFactorLayer:Ye,factorDetail:Ue,factorDetailLoading:Qe,runFactorDetail:Ze,sweepGrid:lt}=ye,{sweepResult:gt,sweepMessage:pe,sweepLoading:xe,sweepStability:Le,runSweep:h}=ye,z=window.__quantModules.researchPage.history.create({seq:o,state:r}),{researchHistory:G,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Te,researchHistorySelected:Ce,researchDetailId:Pe}=z,{researchCompareRows:Fe,researchCompareLoading:je,researchExportLoading:tt,researchTypeLabel:ht,goShortterm:Xe,openResearchHistory:Ge}=z,{loadResearchHistory:pt,exportResearchHistory:ae,toggleResearchSelect:ne,toggleResearchDetail:Je,runResearchCompare:ft,deleteResearchHistory:wt}=z;v(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(Q){Q==="research/research-overview"&&(K(),me(),Lt(),ta()),(Q==="research/market-review"||Q==="shortterm/market-review")&&!ee.value&&me(),Q==="research/quant-research"&&K(),Q==="research/backtest-history"&&va()},{immediate:!0});const dt=s([]),yt=s(null),xt=s(null),Yt=s(null),Mt=s(""),At=s(!1),Dt=s(!1),vt=s(""),zt=s(""),jt=s("");function Ct(){const Q=localStorage.getItem("quant_token")||"";return Q?{Authorization:"Bearer "+Q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Lt(){const Q=++o.n;try{const _e=await fetch("/api/strategies/variants",{headers:Ct()}).then(function(et){return et.json()});if(Q!==o.n)return;dt.value=_e&&_e.data&&_e.data.variants||[]}catch(_e){console.error("[i3a] 加载 variants 失败:",_e)}}async function Qt(){if(!k.value){vt.value="请先在量化研究选择母本策略";return}Dt.value=!0,vt.value="";try{const Q=await fetch("/api/strategies/"+k.value+"/clone",{method:"POST",headers:Ct(),body:JSON.stringify({name:(y.value||"").trim()||void 0,params:Object.assign({},T.value)})}).then(function(et){return et.json()});if(Q&&Q.detail){vt.value=String(Q.detail);return}const _e=Q&&Q.data;_e&&_e.sid&&(yt.value=_e.sid,vt.value="已复制为新策略: "+_e.name,await Lt(),await Pt(_e.sid))}catch(Q){console.error("[i3a] 复制失败:",Q),vt.value="复制失败: "+Q.message}finally{Dt.value=!1}}async function Xt(Q){yt.value=Q,vt.value="",Mt.value="",await Pt(Q)}async function Pt(Q){try{const _e=await fetch("/api/strategies/"+Q+"/selection-spec",{headers:Ct()}).then(function(et){return et.json()});_e&&_e.data&&_e.data.spec&&(xt.value=Object.assign({},_e.data.spec),Yt.value=_e.data.fields,zt.value=(_e.data.spec.industry_scope||[]).join(","),jt.value=(_e.data.spec.market_cap_range||[]).join(","))}catch(_e){console.error("[i3a] 加载 spec 失败:",_e)}}async function It(){if(b.value=!0,!(!yt.value||!xt.value))try{xt.value.industry_scope=zt.value?zt.value.split(/[,，]/).map(function(_e){return _e.trim()}).filter(Boolean):[],xt.value.market_cap_range=jt.value?jt.value.split(/[,，]/).map(Number).filter(function(_e){return!isNaN(_e)}):[];const Q=await fetch("/api/strategies/"+yt.value+"/selection-spec",{method:"PUT",headers:Ct(),body:JSON.stringify({spec:xt.value})}).then(function(_e){return _e.json()});Q&&Q.data&&Q.data.spec&&(xt.value=Q.data.spec,vt.value="SelectionSpec 已保存")}catch(Q){console.error("[i3a] 保存 spec 失败:",Q),vt.value="保存失败"}}async function Jt(){if(!yt.value){vt.value="请先选择/创建微调策略";return}Dt.value=!0,vt.value="";try{const Q=await fetch("/api/strategies/"+yt.value+"/run-once",{method:"POST",headers:Ct(),body:"{}"}).then(function(_e){return _e.json()});vt.value=Q&&Q.detail?String(Q.detail):"持仓已生成: "+(Q&&Q.data&&Q.data.symbols||0)+" 只"}catch(Q){console.error("[i3a] run-once 失败:",Q),vt.value="生成持仓失败"}finally{Dt.value=!1}}async function Zt(){if(!yt.value){vt.value="请先选择/创建微调策略";return}xt.value||await Pt(yt.value),At.value=!0,vt.value="";try{const Q=await fetch("/api/strategies/"+yt.value+"/ai-trade-code",{method:"POST",headers:Ct(),body:JSON.stringify({spec:xt.value})}).then(function(_e){return _e.json()});if(Q&&Q.detail){vt.value=String(Q.detail);return}Q&&Q.data&&(Mt.value=Q.data.code||"",Q.data.api_errors&&Q.data.api_errors.length?vt.value="生成成功(含 API 校验告警 "+Q.data.api_errors.length+" 条)":vt.value="AI 交易码已生成, 已通过矩阵内校验")}catch(Q){console.error("[i3a] AI 交易码失败:",Q),vt.value="AI 生成失败: "+Q.message}finally{At.value=!1}}function W(){if(Mt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Mt.value).then(function(){vt.value="代码已复制"});else{const Q=document.createElement("textarea");Q.value=Mt.value,document.body.appendChild(Q),Q.select(),document.execCommand("copy"),document.body.removeChild(Q),vt.value="代码已复制"}}const Me=s(""),He=s(""),Ie=s([]),at=s(""),it=s(""),st=s(""),Rt=s(null),Vt=s(!1),ea=s(!1),$t=s(!1);function Ht(){const Q=localStorage.getItem("quant_token")||"";return Q?{Authorization:"Bearer "+Q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ta(){const Q=++o.n;try{const _e=await fetch("/api/strategies/custom",{headers:Ht()}).then(function(et){return et.json()});if(Q!==o.n)return;Ie.value=_e&&_e.data&&_e.data.customs||[]}catch(_e){console.error("[i3b] 加载自定义策略失败:",_e)}}async function Bt(){if(!He.value.trim()){st.value="请描述策略思路";return}Vt.value=!0,st.value="";try{const Q=await fetch("/api/strategies/custom",{method:"POST",headers:Ht(),body:JSON.stringify({name:Me.value.trim()||"自定义策略",prompt:He.value})}).then(function(_e){return _e.json()});if(Q&&Q.detail){st.value=String(Q.detail);return}Q&&Q.data&&(it.value=Q.data.code||"",st.value="AI 代写成功: "+Q.data.sid+(Q.data.api_errors&&Q.data.api_errors.length?" (API 告警 "+Q.data.api_errors.length+" 条)":" (校验通过)"),await ta())}catch(Q){console.error("[i3b] AI 代写失败:",Q),st.value="AI 代写失败: "+Q.message}finally{Vt.value=!1}}async function ca(){if(at.value)try{const Q=await fetch("/api/strategies/custom/"+at.value+"/code",{headers:Ht()}).then(function(_e){return _e.json()});Q&&Q.data&&(it.value=Q.data.code||"",st.value="")}catch(Q){console.error("[i3b] 读取代码失败:",Q)}}async function da(){if(!at.value){st.value="请先选择自定义策略";return}ea.value=!0,st.value="";try{const Q=await fetch("/api/strategies/custom/"+at.value+"/backtest",{method:"POST",headers:Ht(),body:"{}"}).then(function(_e){return _e.json()});if(Q&&Q.detail){st.value=String(Q.detail);return}Q&&Q.data&&(Rt.value=Q.data,st.value="回测完成")}catch(Q){console.error("[i3b] 回测失败:",Q),st.value="回测失败: "+Q.message}finally{ea.value=!1}}async function ua(){if(!at.value){st.value="请先选择自定义策略";return}$t.value=!0,st.value="";try{const Q=await fetch("/api/strategies/custom/"+at.value+"/ai-optimize",{method:"POST",headers:Ht(),body:JSON.stringify({backtest:Rt.value})}).then(function(_e){return _e.json()});if(Q&&Q.detail){st.value=String(Q.detail);return}Q&&Q.data&&(it.value=Q.data.code||"",st.value="AI 优化完成"+(Q.data.api_errors&&Q.data.api_errors.length?" (API 告警 "+Q.data.api_errors.length+" 条)":" (校验通过)"))}catch(Q){console.error("[i3b] AI 优化失败:",Q),st.value="AI 优化失败: "+Q.message}finally{$t.value=!1}}function rt(){if(it.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(it.value).then(function(){st.value="代码已复制"});else{const Q=document.createElement("textarea");Q.value=it.value,document.body.appendChild(Q),Q.select(),document.execCommand("copy"),document.body.removeChild(Q),st.value="代码已复制"}}const kt=Vue.ref([]),qt=Vue.ref(!1),Tt=Vue.ref(!1),Nt=Vue.ref(30);async function va(){const Q=++o.n;qt.value=!0,Tt.value=!1;try{const _e=window.__quantModules&&window.__quantModules.core||{},et=typeof _e.authHeaders=="function"?_e.authHeaders():{},aa=await fetch("/api/backtest/history?days="+Nt.value,{headers:et}).then(function(ja){return ja.json()});if(Q!==o.n)return;kt.value=aa&&aa.data||[]}catch(_e){console.error("[backtest] 回测历史加载失败:",_e),Tt.value=!0}finally{Q===o.n&&(qt.value=!1)}}return{...r,strategyManageMode:l,openStrategyManage:g,btHistory:kt,btHistoryLoading:qt,btHistoryError:Tt,btHistoryDays:Nt,loadBtHistory:va,researchHistory:G,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Te,researchHistorySelected:Ce,researchDetailId:Pe,researchCompareRows:Fe,researchCompareLoading:je,researchTypeLabel:ht,goShortterm:Xe,openResearchHistory:Ge,loadResearchHistory:pt,researchExportLoading:tt,exportResearchHistory:ae,toggleResearchSelect:ne,toggleResearchDetail:Je,runResearchCompare:ft,deleteResearchHistory:wt,marketReviews:Y,marketReviewLoading:ie,marketReviewError:qe,selectedReviewDate:ee,marketReviewDetail:$,marketReviewDetailLoading:be,marketReviewDetailError:B,loadMarketReviews:me,openMarketReview:ve,toggleMarketReviewDate:Z,backToMarketReviewList:ue,loadMarketReviewDetail:Ee,marketReviewChgClass:we,marketReviewChgText:Ne,marketReviewSrcEntries:We,fmtPct:fe,fmtEmotion:oe,strategies:c,strategiesLoading:P,strategiesError:_,strategiesErrorText:M,strategiesWarn:S,activeStrategyId:k,activeStrategy:U,paramValues:T,strategyRunning:C,ptradeCode:i,strategyRuns:f,savingProfile:d,variantSaving:b,loadStrategies:K,onStrategyChange:q,runActiveStrategy:te,exportActivePtradeCode:re,copyPtradeCode:se,profiles:R,profileSelect:L,profileName:y,loadProfiles:a,saveProfile:E,applyProfile:n,deleteProfile:p,govEnabled:D,govSchedule:V,govUniverse:O,govRunning:F,lastHoldings:X,loadGov:J,updateGov:N,runOnceActive:x,openLastHoldings:m,cloneStrategy:A,govShowCalendar:I,factorKey:Ve,factorIcLoading:Oe,factorLayerLoading:$e,factorIcReport:he,factorLayerResult:Se,factorOptions:Ae,runFactorIc:ze,runFactorLayer:Ye,factorDetail:Ue,factorDetailLoading:Qe,runFactorDetail:Ze,variants:dt,variantSelected:yt,variantSpec:xt,specFields:Yt,aiCode:Mt,aiCodeLoading:At,variantBusy:Dt,variantMsg:vt,loadVariants:Lt,cloneNewStrategy:Qt,selectVariant:Xt,loadVariantSpec:Pt,saveVariantSpec:It,runVariantOnce:Jt,genVariantAiCode:Zt,copyVariantCode:W,customName:Me,customPrompt:He,customs:Ie,customSelected:at,customCode:it,customMsg:st,customBtResult:Rt,customGenLoading:Vt,customBtLoading:ea,customOptLoading:$t,loadCustoms:ta,genCustomCode:Bt,loadCustomCode:ca,runCustomBacktest:da,runCustomOptimize:ua,copyCustomCode:rt,sweepGrid:lt,sweepResult:gt,sweepMessage:pe,sweepLoading:xe,sweepStability:Le,runSweep:h}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.tour={create:function(s){const{ref:e,computed:v,currentSubPage:t}=s,r=window.QuantOnboarding,d=e(!1),b=e(r?r.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),o=v(function(){return r&&r.shorttermTourSteps()[b.value.stepIndex]||{key:"",title:"",desc:""}}),l=v(function(){return r?r.shorttermTourProgress(b.value):{done:0,total:3,pct:0}}),g=v(function(){return b.value.stepIndex>=2});function c(){if(r){var T=null;try{T=localStorage.getItem("qc_shortterm_tour")}catch{}if(T){var C=r.parseState(T);C&&(b.value=C)}}}function P(){if(r){var T=JSON.stringify(b.value);try{localStorage.setItem("qc_shortterm_tour",T)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:T}})}).catch(function(){})}catch{}}}function _(){window.__quantGuideModalsEnabled===!0&&r&&t.value==="overview"&&(c(),r.shorttermTourShouldShow(b.value)&&(d.value=!0))}function M(){b.value=r.shorttermTourNext(b.value),P()}function S(){b.value=r.shorttermTourComplete(b.value),P(),d.value=!1}function k(){b.value=r.shorttermTourDismiss(b.value),P(),d.value=!1}return{shorttermTourVisible:d,shorttermTourState:b,shorttermTourStep:o,shorttermTourProg:l,shorttermTourIsLast:g,maybeShowShorttermTour:_,shorttermTourNext:M,shorttermTourFinish:S,shorttermTourSkip:k}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part1=`
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
                            <qc-virtual-list v-else class="shortterm-date-items" :items="dateList" :row-height="66" :aria-label="t('a11y.shorttermDateList')">
                                <template #default="{ item: d }">
                                <div class="shortterm-date-item"
                                    :class="{ 'is-active': d.date === shortDate }" role="button" tabindex="0"
                                    :aria-current="d.date === shortDate ? 'true' : null"
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
                        <qc-state-panel v-else-if="pools && !hasAnyPool" type="empty" icon="inbox" :title="t('state.emptyPool')" :desc="t('state.descEmptyPool')"></qc-state-panel>
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
                        <qc-state-panel v-else-if="intradayError" type="error" :title="t('state.intradayError')" :desc="t('state.descNetworkOrService')" @retry="loadIntraday"></qc-state-panel>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.view=window.__quantModules.shorttermPage.part1+window.__quantModules.shorttermPage.part2;(function(){const{inject:s,ref:e,onMounted:v,computed:t,nextTick:r}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:window.__quantModules.shorttermPage.view,setup(){const d=s("qcState");if(!d)return{};const b=d.currentPage,o=d.currentSubPage,l=e(""),g=e(null),c=e(!1),P=e(!1),_=e("数据加载失败"),M=e("请检查服务后重试"),S=e(null),k=e(null),T=e(!1),C=e(!1),u=e("数据加载失败"),i=e("请检查服务后重试"),f=e(null),R=e(1),L=50,y=t(function(){const W=k.value||[];if(W.length<=200)return W;const Me=(R.value-1)*L;return W.slice(Me,Me+L)}),D=e(null),I=e(!1),V=e(!1),O=e("数据加载失败"),F=e("请检查服务后重试"),X=e([]),U=e(!1);async function H(){U.value=!0;try{const W=await Ee("/api/shortterm/dates/summary",!1);W&&W.success&&(X.value=W.dates||[])}catch{X.value=[]}finally{U.value=!1}}function K(W){W!==l.value&&(l.value=W,Je(!0))}const q=e("行业资金流"),a=e("今日"),E=e(""),n=e(null),p=e(1),J=e(!1),N=e(!1),x=e("数据加载失败"),m=e("请检查服务后重试"),A=e(""),w=e(null),j=e(!1),te=e(null),re=e(!1),se=e(!1),le=e(!1),Y=e(""),ie=e(""),qe=e(!1);function ee(){const W=localStorage.getItem("quant_token")||"";return W?{Authorization:"Bearer "+W,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},be=[],B=50,me=60*1e3;let ve=0,Z=0,ue=0;function Ee(W,Me){const He=Date.now(),Ie=$[W];return!Me&&Ie&&He-Ie.ts<me?Promise.resolve(Ie.data):fetch(W,{headers:ee()}).then(function(at){return at.json()}).then(function(at){if($[W]||be.push(W),$[W]={ts:Date.now(),data:at},be.length>B){const it=be.shift();delete $[it]}return at})}async function we(W){const Me=++ve;c.value=!0,P.value=!1;try{const He="/api/shortterm/pools"+(l.value?"?date="+l.value:""),Ie=await Ee(He,W);if(Me!==ve)return;Ie&&Ie.success?(g.value=Ie,r(pt)):Ie&&Ie.detail?(P.value=!0,_.value=String(Ie.detail),M.value="请先登录后再查看"):(P.value=!0,_.value="数据加载失败",M.value="请检查服务后重试")}catch{if(Me!==ve)return;P.value=!0,_.value="数据加载失败",M.value="请检查服务后重试"}finally{Me===ve&&(c.value=!1)}}async function Ne(W){const Me=++ve;T.value=!0,C.value=!1;try{const He="/api/shortterm/lhb"+(l.value?"?date="+l.value:""),Ie=await Ee(He,W);if(Me!==ve)return;Ie&&Ie.success?(k.value=Array.isArray(Ie.rows)?Ie.rows:null,f.value=Ie.available===!1&&Ie.reason||null,R.value=1):Ie&&Ie.detail?(C.value=!0,u.value=String(Ie.detail),i.value="请先登录后再查看"):(C.value=!0,u.value="数据加载失败",i.value="请检查服务后重试")}catch{if(Me!==ve)return;C.value=!0,u.value="数据加载失败",i.value="请检查服务后重试"}finally{Me===ve&&(T.value=!1)}}const We=t(function(){const W=g.value&&g.value.ladder&&g.value.ladder.tiers;return!W||!Object.keys(W).length?"—":Object.keys(W).sort(function(Me,He){return Me-He}).map(function(Me){return Me+"板:"+W[Me]}).join(" ")}),fe=t(function(){const W=g.value&&g.value.zt||[];return S.value?W.filter(function(Me){return Me.boards===S.value}):W});function oe(){S.value=null}const ye=t(function(){const W=g.value;if(!W)return!1;const Me=W.ladder&&W.ladder.tiers?Object.keys(W.ladder.tiers).length:0;return(W.zt||[]).length+(W.zb||[]).length+(W.dt||[]).length+Me>0}),Ve=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.money_effect;return!W||!W.available?"—":W.source==="settled"?"定稿记录":W.source==="realtime"?W.partial?"实时(样本不全)":"实时":"—"}),Oe=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.promotion&&D.value.emotion.promotion.tiers&&D.value.emotion.promotion.tiers["1进2"];return W?W.rate:null}),$e=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return W&&W.available&&W.current_score!=null?W.current_score.toFixed(2):"—"}),he=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return!W||!W.available?"—":(W.trend||"—")+(W.day_n!=null?" · 距低谷"+W.day_n+"天":"")}),Se=t(function(){const W=D.value&&D.value.emotion;if(!W)return"";const Me=[];for(const He of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ie=W[He];Ie&&Ie.available===!1&&Ie.reason&&Me.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Me.join("；")}),Ae=t(function(){const W=D.value&&D.value.facts;if(!W)return"";const Me=[];for(const He of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ie=W[He];Ie&&Ie.available===!1&&Ie.reason&&Me.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Me.join("；")});function ze(W){return W==null||isNaN(W)?"—":(W*100).toFixed(0)+"%"}function Ye(W,Me){return W==null?"—":(typeof W=="number"?Math.round(W*100)/100:W)+(Me||"")}function Ue(W){return"tag-chip mr-4"}function Qe(W){return W==null?"":W>0?"is-rise":W<0?"is-fall":""}function Ze(W){return W==="机构"?"is-institution":W==="游资"?"is-hotmoney":W==="主力"?"is-main":""}const lt=t(function(){const W=D.value&&D.value.session_status;if(!W)return"—";const Me=D.value.date;return Me===W.latest_session&&W.settled?"已收盘":Me===W.today&&W.is_trade_day&&!W.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),gt=t(function(){const W=D.value&&D.value.session_status;if(!W)return"";const Me=D.value.date;return Me===W.latest_session&&W.settled?"is-institution":Me===W.today&&W.is_trade_day&&!W.settled?"is-main":""});function pe(W){W&&W.ts_code&&d&&d.showStockDetail&&d.showStockDetail(W.ts_code)}const xe=t(function(){return(k.value||[]).filter(function(W){return(W.tags||[]).indexOf("机构")>=0}).reduce(function(W,Me){return W+(Me.net_buy||0)},0)}),Le=t(function(){return(k.value||[]).filter(function(W){return(W.tags||[]).indexOf("游资")>=0}).length}),h=t(function(){const W=(n.value||[]).filter(function(Me){return Me.main_net_inflow!=null});return W.length?W.reduce(function(Me,He){return Me.main_net_inflow>=He.main_net_inflow?Me:He}):null}),z=t(function(){const W=h.value;return W?W.name:"—"}),G=t(function(){const W=h.value;return W?W.main_net_inflow:null}),ce=t(function(){return A.value||"东财"}),de=t(function(){const W=(E.value||"").trim(),Me=n.value||[];return W?Me.filter(function(He){return He.name&&String(He.name).indexOf(W)>=0}):Me});function Te(W){E.value=W||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Ce=t(function(){const W=de.value;if(W.length<=200)return W;const Me=(p.value-1)*L;return W.slice(Me,Me+L)}),Pe=["09:25","09:35","10:00","11:30","14:00","15:00"],Fe=t(function(){const W={};return(te.value||[]).forEach(function(Me){W[Me.slot]=!0}),W});function je(W){return Fe.value[W]?"is-done":W===tt.value?"is-current":"is-empty"}const tt=t(function(){const W=new Date,Me=(W.getHours()<10?"0":"")+W.getHours(),He=(W.getMinutes()<10?"0":"")+W.getMinutes(),Ie=Me+":"+He;for(var at=0;at<Pe.length;at++)if(Ie===Pe[at])return Pe[at];for(var it=0;it<Pe.length-1;it++){var st=Pe[it],Rt=new Date;Rt.setHours(Number(st.split(":")[0]),Number(st.split(":")[1]),0,0);var Vt=new Date(Rt.getTime()+8*6e4);if(W>=Rt&&W<=Vt)return st}return""}),ht=t(function(){const W=new Date,Me=tt.value;if(Me)return"当前处于快照窗口 "+Me+" (前后 8 分钟) — 可采集";const He=W.getHours(),Ie=W.getMinutes();let at="";for(let it=0;it<Pe.length;it++){const st=Pe[it].split(":");if(Number(st[0])>He||Number(st[0])===He&&Number(st[1])>Ie){at=Pe[it];break}}return at?"下一快照时点 "+at+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Xe=e(""),Ge=e("info");function pt(){const W=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!W||!Object.keys(W).length)return;const Me=window.__quantModules&&window.__quantModules.charts;if(!Me||!Me.renderSimpleChartTo)return;const He=S.value,Ie=Me.renderSimpleChartTo("shorttermLadderChart",function(){const at=Object.keys(W).sort(function(it,st){return Number(it)-Number(st)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:at.map(function(it){return it+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(it){return He&&Number(at[it.dataIndex])===He?"var(--color-accent)":"var(--chart-split)"}},data:at.map(function(it){return W[it]})}]}},{key:"shortterm-ladder"});Ie&&Ie.off&&(Ie.off("click"),Ie.on("click",function(at){if(!at||!at.name)return;const it=parseInt(at.name,10);isNaN(it)||(S.value=S.value===it?null:it)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(pt);function ae(W){if(W==null)return"—";const Me=Math.abs(W);return Me>=1e8?(W/1e8).toFixed(2)+"亿":Me>=1e4?(W/1e4).toFixed(0)+"万":W.toFixed(0)}function ne(W){return W==null?"—":(W>=0?"+":"")+W.toFixed(2)+"%"}async function Je(W){const Me=++Z;I.value=!0,V.value=!1;try{const He="/api/shortterm/overview"+(l.value?"?date="+l.value:""),Ie=await Ee(He,W);if(Me!==Z)return;Ie&&Ie.success?D.value=Ie:Ie&&Ie.detail?(V.value=!0,O.value=String(Ie.detail),F.value="请先登录后再查看"):(V.value=!0,O.value="数据加载失败",F.value="请检查服务后重试")}catch{if(Me!==Z)return;V.value=!0,O.value="数据加载失败",F.value="请检查服务后重试"}finally{Me===Z&&(I.value=!1)}}async function ft(W){const Me=++ve;J.value=!0,N.value=!1;try{const He="/api/shortterm/sector-flow?indicator="+encodeURIComponent(a.value)+"&sector_type="+encodeURIComponent(q.value),Ie=await Ee(He,W);if(Me!==ve)return;Ie&&Ie.success&&Ie.available?(n.value=Ie.rows||[],A.value=Ie.source||(Ie.note?"同花顺":"东财"),p.value=1):Ie&&Ie.reason?(N.value=!0,x.value="数据加载失败",m.value=String(Ie.reason).replace(/^\[[^\]]*\]\s*/,"")):Ie&&Ie.detail?(N.value=!0,x.value=String(Ie.detail),m.value="请先登录后再查看"):(N.value=!0,x.value="数据加载失败",m.value="请检查服务后重试")}catch{if(Me!==ve)return;N.value=!0,x.value="数据加载失败",m.value="请检查服务后重试"}finally{Me===ve&&(J.value=!1)}}async function wt(W){const Me=++ue;try{const He="/api/shortterm/review"+(l.value?"?date="+l.value:""),Ie=await Ee(He,W);if(Me!==ue)return;Ie&&Ie.success&&(w.value=Ie.review||null)}catch{}}async function dt(){j.value=!0;try{const W="/api/shortterm/review"+(l.value?"?date="+l.value:""),Me=await fetch(W,{method:"POST",headers:ee()}).then(function(He){return He.json()});Me&&Me.success&&(w.value=Me,$[W]={ts:Date.now(),data:Me})}catch{}finally{j.value=!1}}async function yt(){const W=Y.value.trim();if(W){qe.value=!0,ie.value="";try{const He=await fetch("/api/shortterm/review/chat",{method:"POST",headers:ee(),body:JSON.stringify({date:overviewDate.value,question:W})}).then(function(Ie){return Ie.json()});ie.value=He.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{qe.value=!1}}}async function xt(W){const Me=++ve;re.value=!0,se.value=!1;try{const He="/api/shortterm/intraday"+(l.value?"?date="+l.value:""),Ie=await Ee(He,W);if(Me!==ve)return;Ie&&Ie.success?te.value=Ie.snapshots||[]:se.value=!0}catch{Me===ve&&(se.value=!0)}finally{Me===ve&&(re.value=!1)}}async function Yt(){le.value=!0;try{const W="/api/shortterm/intraday/snapshot"+(l.value?"?date="+l.value:""),Me=await fetch(W,{method:"POST",headers:ee()}).then(function(He){return He.json()});Me&&Me.success?(Me.accepted?(Xe.value="已采集 "+Me.slot+" 快照"+(Me.pools_available&&!Me.pools_available.zt?" (池源部分不可用)":""),Ge.value="ok"):(Xe.value="⏱ "+(Me.reason||"非快照时点"),Ge.value="warn"),xt()):Xe.value="采集失败, 请稍后重试"}catch{Xe.value="采集失败, 请稍后重试"}finally{le.value=!1}}function Mt(){return Ee("/api/shortterm/latest-session",!1).then(function(W){W&&W.date&&(l.value||(l.value=W.date))}).catch(function(){})}function At(){const W=o.value;W==="ztpool"?we():W==="lhb"?Ne():W==="overview"?(Je(),wt()):W==="sector"?ft():W==="intraday"&&xt()}function Dt(){const W=l.value?"?date="+l.value:"";["/api/shortterm/overview"+W,"/api/shortterm/pools"+W,"/api/shortterm/lhb"+W].forEach(function(He){Ee(He,!1).catch(function(){})})}function vt(){const W=o.value;W==="ztpool"?we(!0):W==="lhb"?Ne(!0):W==="overview"?(Je(!0),wt(!0)):W==="sector"?ft(!0):W==="intraday"&&xt(!0)}const zt=window.__quantModules.shorttermPage.tour.create({ref:e,computed:t,currentSubPage:o}),{shorttermTourVisible:jt,shorttermTourState:Ct,shorttermTourStep:Lt,shorttermTourProg:Qt,shorttermTourIsLast:Xt}=zt,{maybeShowShorttermTour:Pt,shorttermTourNext:It,shorttermTourFinish:Jt,shorttermTourSkip:Zt}=zt;return v(function(){Mt(),At(),Dt(),Pt(),H()}),Vue.watch(function(){return o.value},function(W){At(),W==="overview"&&Pt()}),{currentPage:b,currentSubPage:o,shortDate:l,pools:g,poolLoading:c,poolError:P,ztBoardFilter:S,filteredZt:fe,clearBoardFilter:oe,hasAnyPool:ye,lhbRows:k,lhbLoading:T,lhbError:C,lhbReason:f,lhbPageRows:y,lhbPage:R,overview:D,overviewLoading:I,overviewError:V,dateList:X,dateListLoading:U,loadDateList:H,pickDate:K,sectorType:q,sectorIndicator:a,sectorKeyword:E,sectorRows:n,filteredSectorRows:de,sectorPageRows:Ce,sectorPage:p,sectorLoading:J,sectorError:N,sectorFlowSource:A,PAGE_SIZE:L,gotoSector:Te,review:w,reviewRunning:j,intradaySnapshots:te,intradayLoading:re,intradayError:se,intradayCollecting:le,intradaySlots:Pe,intradayMsg:Xe,slotClass:je,intradayStatus:ht,chatQuestion:Y,chatAnswer:ie,chatLoading:qe,loadPools:we,loadLhb:Ne,loadOverview:Je,loadSectorFlow:ft,loadReview:wt,runReview:dt,sendChat:yt,loadIntraday:xt,collectSnapshot:Yt,refreshCurrent:vt,ladderText:We,fmtAmount:ae,fmtPct:ne,riseFall:Qe,tagClass:Ze,openStock:pe,lhbInstitutionNetBuy:xe,lhbHotMoneyCount:Le,sectorTopName:z,sectorTopInflow:G,sectorSource:ce,moneySource:Ve,promotion1to2:Oe,cycleScore:$e,cycleTrend:he,pct:ze,fmtCond:Ye,verdictClass:Ue,sessionStatusText:lt,sessionStatusClass:gt,t:d.t,emotionNotice:Se,factsNotice:Ae,shorttermTourVisible:jt,shorttermTourState:Ct,shorttermTourStep:Lt,shorttermTourProg:Qt,shorttermTourIsLast:Xt,shorttermTourNext:It,shorttermTourFinish:Jt,shorttermTourSkip:Zt}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(o,l,g,c,P){var _=g>0?g:1,M=typeof P=="number"&&P>=0?P:s,S=Math.max(0,c),k=Math.max(0,o),T=Math.max(0,l),C=Math.max(0,Math.floor(k/_)-M),u=Math.min(S,Math.ceil((k+T)/_)+M);return{startIndex:C,endIndex:u}}function v(o,l){return Math.max(0,o||0)*(l>0?l:0)}function t(o,l,g,c,P){var _=o||[],M=e(l,g,c,_.length,P),S=_.slice(M.startIndex,M.endIndex);return{visible:S,startIndex:M.startIndex,endIndex:M.endIndex,offsetY:M.startIndex*(c>0?c:1),totalHeight:v(_.length,c)}}function r(o,l){if(o){if(o.code!=null)return o.code;if(o.id!=null)return o.id;if(o.ts_code!=null)return o.ts_code}return l}function d(o,l,g){var c=o||[];if(!c.length)return l>0?l:1;for(var P=Math.min(g||50,c.length),_=0,M=0,S=0;S<P;S++){var k=c[S]&&c[S].rowHeight;typeof k=="number"&&k>0&&(_+=k,M++)}return M?_/M:l>0?l:1}function b(o,l,g,c,P){var _=e(o,l,g,c,P),M=Math.max(0,c);return M?(_.endIndex-_.startIndex)/M:0}return{DEFAULT_BUFFER:s,computeVisibleRange:e,computeTotalHeight:v,sliceVisible:t,getRowKey:r,estimateDynamicRowHeight:d,renderedRatio:b}});(function(){const{ref:s,computed:e,onMounted:v,onBeforeUnmount:t}=Vue,r=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:r.DEFAULT_BUFFER||8},ariaLabel:{type:String,default:""}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" role="list" :aria-label="ariaLabel || null" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow" role="listitem"
                     :aria-setsize="items.length" :aria-posinset="startIndex + i + 1"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const b=s(null),o=s(0),l=s(400),g=e(()=>(r.computeVisibleRange||function(i,f,R,L,y){const D=R>0?R:1,I=y>=0?y:8,V=Math.max(0,L);return{startIndex:Math.max(0,Math.floor(i/D)-I),endIndex:Math.min(V,Math.ceil((i+f)/D)+I)}})(o.value,l.value,d.rowHeight,d.items.length,d.buffer)),c=e(()=>d.items.length*d.rowHeight),P=e(()=>g.value.startIndex),_=e(()=>g.value.endIndex),M=e(()=>d.items.slice(P.value,_.value));function S(){b.value&&(o.value=b.value.scrollTop)}function k(){b.value&&(l.value=b.value.clientHeight||400)}function T(u,i){return r.getRowKey?r.getRowKey(u,i):u&&u.code!=null?u.code:u&&u.id!=null?u.id:i}let C=null;return v(()=>{k(),b.value&&typeof ResizeObserver<"u"&&(C=new ResizeObserver(()=>k()),C.observe(b.value))}),t(()=>{C&&C.disconnect()}),{scrollEl:b,totalHeight:c,startIndex:P,endIndex:_,visibleItems:M,onScroll:S,keyOf:T}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():(s.__quantModules=s.__quantModules||{},s.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var s=40,e=1.2,v=60,t=500,r=10,d=88,b=350;function o(i,f,R,L,y){y=y||{};var D=typeof y.threshold=="number"?y.threshold:s,I=typeof y.bias=="number"?y.bias:e,V=R-i,O=L-f;return Math.abs(V)<D||Math.abs(V)<Math.abs(O)*I?"none":V<0?"left":"right"}function l(i,f,R){R=R||{};var L=typeof R.threshold=="number"?R.threshold:v;return f-i>=L}function g(i,f){f=f||{};var R=typeof f.threshold=="number"?f.threshold:t;return i>=R}var c=!1;function P(i,f){return i&&typeof i.closest=="function"?i.closest(f):null}function _(i){if(!i)return"";var f=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(f){var R=f.getAttribute&&f.getAttribute("data-copy-code");if(R)return R.trim();var L=(f.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(L)return L[0]}var y=i.getAttribute&&i.getAttribute("data-copy-code");return y?y.trim():""}function M(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return S(i)}):Promise.resolve(S(i))}function S(i){try{var f=document.createElement("textarea");return f.value=i,f.style.position="fixed",f.style.opacity="0",document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),!0}catch{return!1}}function k(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function T(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function C(){var i=null,f=null,R=null;function L(){f&&(f.timer&&clearTimeout(f.timer),f=null)}function y(U){R={el:U,until:Date.now()+b}}function D(U){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(H){H!==U&&H.classList.remove("swipe-open")}),i&&i.el!==U&&(i=null)}function I(U){var H=U.touches&&U.touches[0];if(H){var K=P(U.target,".swipe-reveal");K&&(i={el:K,x:H.clientX,y:H.clientY,moved:!1},U.stopPropagation());var q=P(U.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");q&&(L(),f={el:q,x:H.clientX,y:H.clientY,timer:setTimeout(function(){var a=_(q);f=null,a&&(y(q),M(a).then(function(){T(),k("已复制代码 "+a)}))},t)})}}function V(U){if(i){var H=U.touches&&U.touches[0];if(H){var K=H.clientX-i.x,q=H.clientY-i.y;if(Math.abs(K)>8&&Math.abs(K)>Math.abs(q)*1.2){U.cancelable&&U.preventDefault(),i.moved=!0;var a=i.el.querySelector(".swipe-reveal-main")||i.el,E=Math.max(-d,Math.min(0,K));a.style.transition="none",a.style.transform="translateX("+E+"px)",U.stopPropagation()}if(f){var n=H.clientX-f.x,p=H.clientY-f.y;(Math.abs(n)>r||Math.abs(p)>r)&&L()}}}}function O(U){if(L(),!!i){var H=i.el,K=U.changedTouches&&U.changedTouches[0],q=i.x,a=i.y,E="none";K&&(E=o(q,a,K.clientX,K.clientY));var n=i.moved;i=null;var p=H.querySelector(".swipe-reveal-main")||H;p.style.transform="",p.style.transition="",E==="left"?(D(H),H.classList.add("swipe-open"),y(H)):(E==="right"||n)&&H.classList.remove("swipe-open"),U.stopPropagation()}}function F(){L(),i=null}function X(U){if(R&&Date.now()<R.until){var H=R.el.contains(U.target)||U.target===R.el,K=U.target.closest&&U.target.closest(".swipe-reveal-actions");H&&!K&&(U.preventDefault(),U.stopPropagation(),R=null)}}document.addEventListener("touchstart",I,!0),document.addEventListener("touchmove",V,!0),document.addEventListener("touchend",O,!0),document.addEventListener("touchcancel",F,!0),document.addEventListener("click",X,!0)}function u(){c||typeof document>"u"||(c=!0,C())}return{judgeSwipe:o,judgePullToRefresh:l,judgeLongPress:g,SWIPE_THRESHOLD:s,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:v,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:r,REVEAL_WIDTH:d,initGestures:u,_codeFromRow:_}});(function(){const s={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(s);function v(d){return s[d]||s.empty}function t(){const d=[];for(const b of e){const o=s[b];o.title||d.push(b+".title"),b!=="loading"&&!o.icon&&d.push(b+".icon"),typeof o.retry!="boolean"&&d.push(b+".retry"),typeof o.skeleton!="boolean"&&d.push(b+".skeleton")}return{ok:d.length===0,errors:d}}const r={VARIANTS:s,KEYS:e,resolve:v,validate:t};typeof window<"u"&&(window.QuantStatePanel=r),typeof Re<"u"&&Re.exports&&(Re.exports=r)})();(function(){const{computed:s}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(v){const t=s(()=>typeof e.resolve=="function"?e.resolve(v.type):{}),r=s(()=>v.icon||t.value.icon||""),d=s(()=>v.title||t.value.title||""),b=s(()=>v.desc||t.value.desc||""),o=s(()=>!!t.value.retry),l=s(()=>/^[a-z][a-z0-9-]*$/.test(String(r.value||"")));return{icon:r,title:d,desc:b,retryable:o,isIconName:l}}}})();(function(s,e){typeof Re=="object"&&Re.exports?Re.exports=e():s.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function s(i){return String(i||"").trim().toLowerCase()}function e(i,f){if(!i)return!0;const R=i.split(/\s+/).filter(Boolean);if(!R.length)return!0;const L=String(f||"").toLowerCase();return R.every(function(y){return L.indexOf(y)!==-1})}function v(){return{visible:!1,query:"",activeIndex:0}}function t(i,f){return f===void 0&&(f=!i.visible),i.visible=f,f&&(i.query="",i.activeIndex=0),i.visible}function r(i,f,R){const L=s(i);if(!f||!f.length)return[];const y=[];return f.forEach(function(D){const I=e(L,D.name)||e(L,D.key),V=(D.subPages||[]).filter(function(O){const F=R&&R[O]||O;return e(L,F)||e(L,O)});I&&y.push({type:"menu",menuKey:D.key,subPage:D.subPages&&D.subPages[0]||"",label:D.name,subLabel:"页面",icon:D.icon||"file-text"}),V.forEach(function(O){y.push({type:"menu",menuKey:D.key,subPage:O,label:R&&R[O]||O,subLabel:D.name,icon:D.icon||"file-text"})})}),y.slice(0,8)}function d(i,f){const R=s(i);return!f||!f.length?[]:f.filter(function(L){return!!(!R||e(R,L.label)||e(R,L.key)||L.keywords&&e(R,L.keywords))}).slice(0,8)}function b(i,f){const R=s(i);return!R||!f||!f.length?[]:f.filter(function(L){return e(R,L.code)||e(R,L.name)}).slice(0,8).map(function(L){return{type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up"}})}function o(i,f,R){const L=[],y=[];return R&&R.length&&(L.push({key:"stock",label:"股票",items:R}),y.push.apply(y,R)),i&&i.length&&(L.push({key:"menu",label:"菜单",items:i}),y.push.apply(y,i)),f&&f.length&&(L.push({key:"command",label:"指令",items:f}),y.push.apply(y,f)),{groups:L,flat:y}}function l(i,f,R){if(f<=0)return 0;const L=((i||0)+R)%f;return L<0?f-1:L}function g(i,f,R,L){const y=r(i,f,R).map(function(I){return{type:"menu",menuKey:I.menuKey,subPage:I.subPage,label:I.label,subLabel:I.subLabel,icon:I.icon,iconName:I.icon,value:I.icon+" "+I.label+" · "+I.subLabel}}),D=d(i,L||[]).map(function(I){return{type:"command",key:I.key,label:I.label,icon:I.icon,iconName:I.icon,subLabel:"指令",value:I.icon+" "+I.label}});return y.concat(D)}function c(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const P=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-strategies-overview",label:"打开策略概览",icon:"layout-dashboard",keywords:"strategies overview 策略 概览 总览"},{key:"open-merrill",label:"打开美林时钟",icon:"clock",keywords:"merrill 美林 时钟 周期 投资钟"},{key:"open-strategies-market",label:"打开大盘行情",icon:"line-chart",keywords:"market 大盘 行情 指数 大盘行情"},{key:"open-consensus",label:"打开策略共识榜",icon:"trophy",keywords:"consensus 共识 榜单 一致预期"},{key:"open-pool",label:"打开股票池",icon:"database",keywords:"pool 股票池 选池 日历"},{key:"open-ai-overview",label:"打开评估概览",icon:"bot",keywords:"ai overview 评估 概览 看板"},{key:"open-eval-analysis",label:"打开评估分析",icon:"bar-chart-3",keywords:"analysis 评估分析 分布 维度"},{key:"open-chat-history",label:"打开问股历史",icon:"message-circle",keywords:"chat history 问股 历史 对话"},{key:"open-quant-research",label:"打开量化研究",icon:"flask-conical",keywords:"quant research 量化 研究 注册表"},{key:"open-strategy-manage",label:"打开策略管理",icon:"layers",keywords:"manage 策略 管理 微调 母本"},{key:"open-backtest-history",label:"打开回测记录",icon:"history",keywords:"backtest 回测 记录 历史 净值"},{key:"open-ztpool",label:"打开涨停复盘",icon:"trending-up",keywords:"ztpool 涨停 复盘 池"},{key:"open-lhb",label:"打开龙虎榜",icon:"list",keywords:"lhb 龙虎榜 席位 资金"},{key:"open-execution",label:"打开执行看板",icon:"activity",keywords:"execution 执行 看板 流水线 任务"},{key:"open-about",label:"打开关于",icon:"info",keywords:"about 关于 版本 说明"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var _={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function M(i){if(!i||typeof i!="string")return null;var f=i.split("+").map(function(y){return y.trim()}).filter(Boolean);if(!f.length)return null;var R=f.pop().toLowerCase();if(!R)return null;var L={ctrl:!1,alt:!1,shift:!1,meta:!1};return f.forEach(function(y){var D=y.toLowerCase();_.ctrl.indexOf(D)!==-1?L.ctrl=!0:_.alt.indexOf(D)!==-1?L.alt=!0:_.shift.indexOf(D)!==-1?L.shift=!0:_.meta.indexOf(D)!==-1&&(L.meta=!0)}),{ctrl:L.ctrl,alt:L.alt,shift:L.shift,meta:L.meta,key:R}}function S(i,f){if(!i||!f)return!1;var R=String(f.key||f.code||"").toLowerCase();return i.key!==R?!1:i.ctrl===!!f.ctrlKey&&i.alt===!!f.altKey&&i.shift===!!f.shiftKey&&i.meta===!!f.metaKey}function k(i){if(!i)return"";var f=[];return i.ctrl&&f.push("Ctrl"),i.alt&&f.push("Alt"),i.shift&&f.push("Shift"),i.meta&&f.push("Meta"),f.push(i.key.toUpperCase()),f.join("+")}function T(){var i={};return{register:function(f){if(!f||!f.key)throw new Error("命令 key 必填");if(i[f.key])throw new Error("命令重复注册: "+f.key);return i[f.key]=Object.assign({},f),f.key},list:function(){return Object.keys(i).map(function(f){return i[f]})},get:function(f){return i[f]||null},remove:function(f){delete i[f]},has:function(f){return!!i[f]},count:function(){return Object.keys(i).length}}}function C(){var i={},f={};return{register:function(R,L,y){var D=M(R);if(!D)throw new Error("无效快捷键: "+R);var I=k(D);if(i[I])throw new Error("快捷键冲突: "+R);if(L!=null&&f[L]!==void 0)throw new Error("动作重复绑定: "+L);return i[I]={combo:R,action:L,description:y||"",parsed:D},f[L]=I,I},resolve:function(R){for(var L in i)if(S(i[L].parsed,R))return i[L].action;return null},list:function(){return Object.keys(i).map(function(R){return i[R]})},unregister:function(R){var L=k(M(R));i[L]&&(delete f[i[L].action],delete i[L])},count:function(){return Object.keys(i).length}}}function u(){var i=C();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:s,createPaletteState:v,toggleVisible:t,searchMenus:r,searchCommands:d,filterStocksLocal:b,mergeResults:o,moveIndex:l,buildSearchSuggestions:g,dispatchSearchSelection:c,DEFAULT_COMMANDS:P,parseKeyCombo:M,matchShortcut:S,canonicalCombo:k,createCommandRegistry:T,createShortcutRegistry:C,createDefaultShortcuts:u}});(function(s){if(s&&!s.QuantCommandPanel)try{var e=typeof Re<"u"&&Re.exports?Re.exports:null;e&&(s.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(s,e){var v=e();typeof Re=="object"&&Re.exports&&(Re.exports=v),s.QuantOnboarding=v})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var s=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=s.length,v=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=v.length;function r(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return v.slice()}function b(O){return O<0?0:O>=t?t-1:O}function o(O){return{stepIndex:O.stepIndex,completed:!!O.completed,dismissed:!!O.dismissed,updatedAt:O.updatedAt||0}}function l(O){return o(Object.assign({},O,{stepIndex:b((O.stepIndex||0)+1),updatedAt:Date.now()}))}function g(O){return o(Object.assign({},O,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function c(O){return o(Object.assign({},O,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function P(O){var F=Math.min(O&&O.stepIndex||0,t);return{done:F,total:t,pct:Math.round(F/t*100)}}function _(O){return!!(O&&!O.completed&&!O.dismissed)}function M(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function S(){return s.slice()}function k(){return e}function T(O){return O<0?0:O>=e?e-1:O}function C(O){return{stepIndex:O.stepIndex,completed:!!O.completed,dismissed:!!O.dismissed,updatedAt:O.updatedAt||0}}function u(O){return C(Object.assign({},O,{stepIndex:T((O.stepIndex||0)+1),updatedAt:Date.now()}))}function i(O){return C(Object.assign({},O,{stepIndex:T((O.stepIndex||0)-1),updatedAt:Date.now()}))}function f(O,F){return C(Object.assign({},O,{stepIndex:T(F),updatedAt:Date.now()}))}function R(O){return C(Object.assign({},O,{completed:!0,updatedAt:Date.now()}))}function L(O){return C(Object.assign({},O,{dismissed:!0,updatedAt:Date.now()}))}function y(O){return!!(O&&O.completed)}function D(O){var F=Math.min(O&&O.stepIndex||0,e);return{done:F,total:e,pct:Math.round(F/e*100)}}function I(O){var F=O||M();return JSON.stringify({stepIndex:F.stepIndex,completed:!!F.completed,dismissed:!!F.dismissed,updatedAt:F.updatedAt||0})}function V(O){var F=M();if(!O||typeof O!="string")return F;try{var X=JSON.parse(O);if(!X||typeof X!="object")return F;var U=parseInt(X.stepIndex,10);return isNaN(U)?F:{stepIndex:T(U),completed:!!X.completed,dismissed:!!X.dismissed,updatedAt:X.updatedAt||0}}catch{return F}}return{ONBOARDING_STEPS:s,steps:S,stepCount:k,createOnboardingState:M,next:u,prev:i,jumpTo:f,complete:R,dismiss:L,isComplete:y,progress:D,persistState:I,parseState:V,SHORTTERM_TOUR_STEPS:v,shorttermTourSteps:d,createShorttermTourState:r,shorttermTourNext:l,shorttermTourComplete:g,shorttermTourDismiss:c,shorttermTourProgress:P,shorttermTourShouldShow:_}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,computed:e,onMounted:v}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const r=s(!1),d=s(t.createOnboardingState()),b=e(function(){return t.steps()[d.value.stepIndex]}),o=e(function(){return t.progress(d.value)}),l=e(function(){return d.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+b.value.key});function c(){const u=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:u}})}).then(function(i){return i.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",u)}catch{}})}function P(u){u&&window.__quantGoPage?window.__quantGoPage(u,""):u&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=u,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function _(){d.value=t.next(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function M(){d.value=t.prev(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function S(){d.value=t.complete(d.value),c(),r.value=!1}function k(){d.value=t.dismiss(d.value),c(),r.value=!1}function T(){d.value=t.createOnboardingState(),c(),r.value=!0}function C(){fetch("/api/user_config/preferences").then(function(u){return u.json()}).then(function(u){const i=u&&u.preferences&&u.preferences.onboarding_progress;return i&&(d.value=t.parseState(i)),i}).catch(function(){return null}).then(function(u){if(!u)try{const i=localStorage.getItem("qc_onboarding_progress");i&&(d.value=t.parseState(i))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(r.value=!0)}),window.addEventListener("qc:onboarding-replay",T)}return v(C),{visible:r,st:d,step:b,prog:o,isLast:l,stepKey:g,next:_,prev:M,finish:S,skip:k,replay:T}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function s(e){try{const v=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(v)return v(e)||""}catch{}return e}return{t:s}}})})();(function(){const{ref:s,computed:e,watch:v,nextTick:t,inject:r,onMounted:d}=Vue,b=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const o=r("qcState");if(!o)return{};const l=s(""),g=e({get:()=>o.commandPaletteVisible.value,set:q=>{o.commandPaletteVisible.value=q}}),c=s(0),P=s([]),_=s(null),M=e(()=>{const q=(b.DEFAULT_COMMANDS||[]).map(function(E){return Object.assign({},E)});return Object.keys(o.themes.value||{}).forEach(function(E){const n=o.themes.value[E];q.push({key:"theme:"+E,label:"切换主题 · "+(n.name||E),icon:"palette",keywords:"theme 主题"})}),q});function S(q){return typeof q=="string"&&/^[a-z][a-z0-9-]*$/.test(q)}const k=e(()=>o.menus.value||[]);function T(){const q=window.__quantModules&&window.__quantModules.pinyin;if(!q)return[];const a=[];return(o.watchlist&&o.watchlist.value||[]).forEach(function(E){a.push({code:E.code,name:E.name})}),(o.aiHistory&&o.aiHistory.value||[]).forEach(function(E){E&&E.stock_code&&a.push({code:E.stock_code,name:E.stock_name||E.stock_code})}),a.push.apply(a,q.getExtraStocks()),q.buildStockIndex(a)}function C(q){const a=window.__quantModules&&window.__quantModules.pinyin;return a?a.searchStocksByQuery(q,T()).map(function(E){return{type:"stock",code:E.code,name:E.name,label:E.name,subLabel:E.code,icon:"trending-up"}}):[]}function u(){const q=[],a=window.__quantModules&&window.__quantModules.recent;a&&a.getRecentViewed().slice(0,5).forEach(function(n){q.push({type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"最近查看 · "+n.code,icon:"trending-up"})});const E=(o.watchlist&&o.watchlist.value||[]).slice(0,8).map(function(n){return{type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"我的自选 · "+n.code,icon:"trending-up"}});return q.concat(E)}const i=e(()=>{const q=l.value;if(!q)return b.mergeResults([],[],u());const a=b.searchMenus(q,k.value,o.subPageNames),E=b.searchCommands(q,M.value),n=P.value;return b.mergeResults(a,E,n)}),f=e(()=>i.value);function R(q){return f.value.flat[c.value]===q}function L(q){c.value=f.value.flat.indexOf(q)}function y(q){return(q.type||"")+":"+(q.code||q.menuKey||q.key||q.label)}let D=null;function I(){const q=l.value.trim();if(q.length<1){P.value=[];return}D&&clearTimeout(D),D=setTimeout(function(){const a=C(q);P.value=a,c.value=0,o.searchStocks(q,function(E){if(l.value.trim()!==q)return;const n=(E||[]).filter(function(N){return N&&N.code&&N.name}).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}),p={},J=[];a.forEach(function(N){p[N.code]||(p[N.code]=!0,J.push(N))}),n.forEach(function(N){p[N.code]||(p[N.code]=!0,J.push(N))}),P.value=J,c.value=0})},200)}function V(){c.value=b.moveIndex(c.value,f.value.flat.length,1)}function O(){c.value=b.moveIndex(c.value,f.value.flat.length,-1)}function F(){const q=f.value.flat[c.value];q&&X(q)}function X(q){o.commandPaletteVisible.value=!1,q.type==="menu"?o.navigateTo(q.menuKey,q.subPage):q.type==="stock"?o.showStockDetail(q.code,q.name):q.type==="command"&&U(q.key)}function U(q){if(q==="refresh"){const a=o.currentPage.value;a==="strategies"?o.loadDashboardData().catch(function(){}):a==="calendar"?o.refreshCalendarData().catch(function(){}):a==="ai"&&o.loadAiHistory().catch(function(){})}else q==="export"?o.exportCSV():q==="batch"?o.showBatchEvaluate.value=!0:q==="ai"?o.openAiFab():q==="sidebar"?o.toggleSidebar():q==="today"?o.navigateTo("strategies","overview"):q==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):q==="add-portfolio"?(o.currentPage.value="ai",o.currentSubPage.value="portfolio"):q==="open-system"?o.navigateTo("system","config"):q==="open-shortterm"?o.navigateTo("shortterm","overview"):q==="open-research"?o.navigateTo("research","research-overview"):q==="open-calendar"?o.navigateTo("calendar","calendar"):q==="refresh-data-source"?o.navigateTo("system","datasource"):q==="open-watchlist"?o.navigateTo("ai","watchlist"):q==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):q==="open-focus"?o.navigateTo("ai","focus"):q==="open-portfolio"?o.navigateTo("ai","portfolio"):q==="open-backtest"?o.navigateTo("research","backtest"):q==="open-market-review"?o.navigateTo("shortterm","market-review"):q==="open-shortterm-sectors"?o.navigateTo("shortterm","sector"):q==="open-shortterm-intraday"?o.navigateTo("shortterm","intraday"):q==="open-status"?o.navigateTo("ops","status"):q==="open-health"?o.navigateTo("ops","health"):q==="open-schedule"?o.navigateTo("ops","schedule"):q==="open-guard"?o.navigateTo("ops","guard"):q==="open-usage"?o.navigateTo("ops","usage"):q==="open-datadict"?o.navigateTo("ops","datadict"):q==="open-notification"?o.navigateTo("system","notification"):q==="open-users"?o.navigateTo("system","user"):q==="open-autoeval"?o.navigateTo("system","autoeval"):q==="open-feature"?o.navigateTo("system","feature"):q==="open-config"?o.navigateTo("system","config"):q==="open-strategies-overview"?o.navigateTo("strategies","overview"):q==="open-merrill"?o.navigateTo("strategies","merrill"):q==="open-strategies-market"?o.navigateTo("strategies","market"):q==="open-consensus"?o.navigateTo("strategies","consensus"):q==="open-pool"?o.navigateTo("calendar","pool"):q==="open-ai-overview"?o.navigateTo("ai","overview"):q==="open-eval-analysis"?o.navigateTo("ai","evaluation-analysis"):q==="open-eval-history"?o.navigateTo("ai","history"):q==="open-chat-history"?o.navigateTo("ai","chat_history"):q==="open-quant-research"?o.navigateTo("research","quant-research"):q==="open-strategy-manage"?o.navigateTo("research","strategy-manage"):q==="open-backtest-history"?o.navigateTo("research","backtest-history"):q==="open-ztpool"?o.navigateTo("shortterm","ztpool"):q==="open-lhb"?o.navigateTo("shortterm","lhb"):q==="open-execution"?o.navigateTo("ops","execution"):q==="open-about"?o.navigateTo("system","about"):q==="theme-dark"?o.changeTheme("dark-pro"):q==="theme-light"?o.changeTheme("gold"):q==="theme-gold"?o.changeThemeHue(45):q==="theme-blue"?o.changeThemeHue(220):q==="theme-red"?o.changeThemeHue(0):q==="theme-green"?o.changeThemeHue(140):q==="theme-purple"?o.changeThemeHue(270):q==="theme-pink"?o.changeThemeHue(320):q.indexOf("theme:")===0&&o.changeTheme(q.slice(6))}v(g,function(q){q&&(l.value="",P.value=[],c.value=0,t(function(){_.value&&_.value.focus&&_.value.focus()}))}),v(l,I);function H(q){q==="toggle-palette"?o.commandPaletteVisible.value=!o.commandPaletteVisible.value:q==="toggle-sidebar"?o.toggleSidebar():q==="open-ai"?o.openAiFab():q==="refresh"?U("refresh"):q==="open-today"?U("today"):q==="batch-eval"?U("batch"):q==="add-portfolio"?U("add-portfolio"):q==="open-eval-history"?U("open-eval-history"):q==="open-shortterm"&&U("open-shortterm")}function K(q){if(!b.createDefaultShortcuts||!b.createShortcutRegistry)return;const E=b.createDefaultShortcuts().resolve({key:q.key,ctrlKey:q.ctrlKey,altKey:q.altKey,shiftKey:q.shiftKey,metaKey:q.metaKey});E&&(q.preventDefault(),H(E))}return d(function(){document.addEventListener("keydown",K)}),{visible:g,query:l,results:f,inputEl:_,sanitizeHtml:o.sanitizeHtml,isIconName:S,onDown:V,onUp:O,onEnter:F,execute:X,isActive:R,setActive:L,itemKey:y,onGlobalKeydown:K}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
                        <!-- T-6.3.4: 用户关联主题下拉须用 legacyThemes(8 主题, 与后端 THEMES 一致) —
                            修复前用 qcState.themes({light,dark}) 导致: ①选项只剩浅色/深色
                            ②存量用户 legacy 主题值不在选项中无法回显 ③保存 light/dark 破坏用户列表主题点 -->
                        <el-option v-for="(theme, key) in themeOptions" :key="key" :label="theme.name" :value="key" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddUser = false">取消</el-button>
                <el-button type="primary" @click="saveUser" :loading="savingUser">保存</el-button>
            </template>
        </el-dialog>
    `,setup(){const e=s("qcState");if(!e)return{};const v=window.__quantModules&&window.__quantModules.themes&&window.__quantModules.themes.legacyThemes||{},t=Object.keys(v).length?v:e.themes||{light:{name:"浅色"},dark:{name:"深色"}};return{...e,themeOptions:t}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
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
    `,setup(){const e=s("qcState");if(!e)return{};const v=window.QuantFormMemory;function t(){const o=e.currentUser;return o&&o.value&&o.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,o=>{if(o&&v){const l=v.loadForm("batch-evaluate",t(),1);l&&l.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=l.batchStocks)}});function r(){return v&&v.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let b=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,o=>{o?(d.value=0,b=setInterval(()=>{d.value++},1e3)):b&&(clearInterval(b),b=null)}),{...e,batchElapsed:d,onBatchEvaluate:r}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const r=s(!1),d=s(!1),b=s(!1),o=s([]),l=s({}),g=s(""),c=s(""),P=s("");function _(y,D){D=D||{},D.headers=Object.assign({},D.headers||{});const I=localStorage.getItem("quant_token")||"";return I&&(D.headers.Authorization="Bearer "+I),fetch(y,D)}async function M(){d.value=!0;try{const D=await(await _("/api/watchlist/groups")).json();D&&D.success&&(o.value=D.groups||[],l.value=D.mapping||{})}catch{}d.value=!1}function S(y){return Object.values(l.value).filter(function(D){return D===y}).length}function k(y){const D=o.value[y],I=t.indexOf(D.color);D.color=t[(I+1)%t.length]}function T(y){if(y<=0)return;const D=o.value.slice(),I=D[y-1];D[y-1]=D[y],D[y]=I,o.value=D}function C(y){if(y>=o.value.length-1)return;const D=o.value.slice(),I=D[y+1];D[y+1]=D[y],D[y]=I,o.value=D}function u(){const y=g.value.trim();y&&(o.value.some(function(D){return D.name===y})||(o.value.push({name:y,color:t[o.value.length%t.length],sort_order:o.value.length,expanded:!0}),g.value=""))}function i(y){c.value=y,P.value=y}function f(y){const D=P.value.trim();if(!D||D===y||o.value.some(function(V){return V.name===D})){c.value="";return}o.value=o.value.map(function(V){return V.name===y?Object.assign({},V,{name:D}):V});const I={};Object.keys(l.value).forEach(function(V){I[V]=l.value[V]===y?D:l.value[V]}),l.value=I,c.value=""}function R(y){o.value=o.value.filter(function(I){return I.name!==y});const D={};Object.keys(l.value).forEach(function(I){D[I]=l.value[I]===y?"默认分组":l.value[I]}),l.value=D}async function L(){b.value=!0;try{await _("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:o.value,mapping:l.value})}),ElementPlus.ElMessage.success("分组已保存"),r.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}b.value=!1}return v(function(){window.addEventListener("qc:show-watch-groups",function(){r.value=!0,M()})}),{visible:r,loading:d,saving:b,groups:o,mapping:l,newName:g,renaming:c,renameVal:P,load:M,countIn:S,cycleColor:k,moveUp:T,moveDown:C,addGroup:u,startRename:i,commitRename:f,remove:R,save:L}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const r=s("qcState");if(!r)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},b=e(()=>d[r.aiEvalStage.value]||""),o=e(()=>{const F=r.aiResult&&r.aiResult.value&&r.aiResult.value.result&&r.aiResult.value.result.level;return F?F==="强烈推荐"||F==="推荐"?"var(--success-text)":F==="谨慎推荐"?"var(--warning-text)":F==="中性"||F==="观望"?"var(--text-secondary)":F==="评估失败"||F==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function l(F){const X=document.createElement("textarea");X.value=F,X.style.position="fixed",X.style.opacity="0",document.body.appendChild(X),X.select(),document.execCommand("copy"),document.body.removeChild(X)}async function g(){const F=r.aiResult&&r.aiResult.value;if(!F||!F.result)return;const X=F.result.dimensions||{},U=Object.entries(X).map(([K,q])=>`${K} ${Math.round(q)}分`).join(`
`),H=`【AI 智能评估】${F.result.level||""} ${F.result.total_score!=null?F.result.total_score:"—"}分
模型：${F.model_used||F.result.provider||"—"}

${F.result.detailed_report||""}

九维度评分：
${U||"无"}`;try{await navigator.clipboard.writeText(H),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{l(H),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const c=v(!1),P=v(!1),_=v(null),M=v([]),S={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function k(F){return S[F]||"factor-sem-none"}async function T(){const F=r.stockDetail.value&&r.stockDetail.value.stock;if(F){c.value=!0,P.value=!1,M.value=[],_.value=null;try{const X=r.selectedDate.value?`?date=${r.selectedDate.value}`:"",U=await fetch(`/api/calendar/stock/${F}/factors${X}`).then(a=>a.json()),H=U&&Array.isArray(U.factors)?U.factors:[],K=[],q={};H.forEach(a=>{q[a.category]||(q[a.category]={category:a.category,items:[]},K.push(q[a.category])),q[a.category].items.push(a)}),M.value=K,_.value=U&&U.summary||null}catch{P.value=!0}finally{c.value=!1}}}t(r.stockDetailTab,F=>{F==="factor"&&r.stockDetail.value&&r.stockDetailVisible.value&&(T(),u())});const C=v(null);async function u(){try{const F=await fetch("/api/market/factor-ic").then(X=>X.json());C.value=F&&F.success&&F.data?F.data:{}}catch{C.value={}}}function i(F){if(!F||!F.n5)return"—";const X=F.n5.icir!=null?"ICIR "+F.n5.icir:"ICIR —";return F.n5.grade+" ("+X+")"}const f=v(!1),R=v(!1),L=v([]),y=v([]);function D(F){if(F==null)return"—";const X=Number(F);return Number.isNaN(X)?"—":Math.abs(X)>=1e8?(X/1e8).toFixed(2)+"亿":Math.abs(X)>=1e4?(X/1e4).toFixed(1)+"万":String(X)}async function I(){const F=r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock;if(F){f.value=!0,R.value=!1;try{const X=await fetch("/api/market/performance/"+encodeURIComponent(F)).then(U=>U.json());X&&X.success?(L.value=X.forecast||[],y.value=X.express||[]):R.value=!0}catch{R.value=!0}finally{f.value=!1}}}t(r.stockDetailTab,F=>{F==="performance"&&I()});const V=v(null);async function O(){const F=r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock;if(!F){V.value=null;return}try{const X=await fetch("/api/focus/stock/"+encodeURIComponent(F)+"/pool").then(U=>U.json());V.value=X&&X.success&&X.data?X.data:null}catch{V.value=null}}return t(()=>r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock,F=>{F&&r.stockDetailVisible.value?O():V.value=null}),t(()=>r.stockDetailVisible.value,F=>{F?O():V.value=null}),{...r,aiStageText:b,levelRingColor:o,copyAiReport:g,factorLoading:c,factorError:P,factorSummary:_,factorGroups:M,factorSemClass:k,loadFactorPanel:T,factorIc:C,loadFactorIc:u,factorIcGrade:i,perfLoading:f,perfError:R,perfForecast:L,perfExpress:y,fmtY:D,loadPerformance:I,poolInfo:V,loadPoolInfo:O}}}})();(function(){const{computed:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
      <div class="ai-history-item border-bottom-light" :data-ctx-code="item.stock_code" :data-ctx-name="item.stock_name" :data-ctx-context="type === 'history' ? 'history' : 'chat'" :class="{'selected': isSelected}">
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
    `,setup(v){const t=e("qcState");if(!t)return{};const r=s(()=>v.type==="history"?t.selectedHistoryIds.value.includes(v.item.id):t.selectedChatIds.value.includes(v.item.id)),d=s(()=>{const S=t.watchlistCodes.value.has(v.item.stock_code);return{icon:"star",isWatched:S,label:S?"取消收藏":"加入收藏"}}),b=s(()=>v.type==="history"?"bot":"message-circle"),o=s(()=>{var S;return v.type==="history"?((S=v.item.result)==null?void 0:S.provider)||"":v.item.first_msg||""}),l=s(()=>{var S,k;return`${((k=(S=v.item.result)==null?void 0:S.dimensions)==null?void 0:k.length)||9}维度分析`}),g=s(()=>{var k,T;const S=v.type==="history"?v.item.evaluate_time:v.item.created_at||"";return S?v.timeFormat==="datetime"?v.type==="history"?`${S.split("T")[0]} ${(S.split("T")[1]||"").split(".")[0]}`:`${S.split("T")[0]} ${((k=S.split("T")[1])==null?void 0:k.substring(0,5))||""}`:v.type==="history"?(S.split("T")[1]||"").split(".")[0]||S:((T=S.split("T")[1])==null?void 0:T.substring(0,5))||"":""});function c(){v.type==="history"?t.toggleSelectHistory(v.item.id):t.toggleSelectChat(v.item.id)}function P(){v.type==="history"?t.viewAiResult(v.item):t.viewChatSession(v.item)}async function _(){try{await ElementPlus.ElMessageBox.confirm(v.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}v.type==="history"?t.deleteSingleHistory(v.item.id):t.deleteChatSession(v.item.id)}function M(S,k){t.toggleWatchlist(S,k)}return{isSelected:r,watchState:d,providerIcon:b,providerText:o,dimsText:l,timeText:g,toggleSelect:c,view:P,remove:_,toggleWatchlist:M,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:s,computed:e,onMounted:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const r=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},b={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},o=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],l={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},g=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function c(_){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(_).then(k=>k.json?k.json():k)}function P(){const _=new Date,M=S=>S<10?"0"+S:""+S;return _.getFullYear()+"-"+M(_.getMonth()+1)+"-"+M(_.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",emits:["load-state"],template:`
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
          <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
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
          <qc-state-panel v-if="trackLoading" type="loading"></qc-state-panel>
          <div v-else class="flex-gap-8">
            <el-tag v-for="w in TRACK_WINDOWS" :key="w.key" size="small" :type="rateTagType(w.key)">
              {{ w.label }}: {{ fmtRate(w.key) }}
            </el-tag>
          </div>
          <div v-if="trackNote" class="color-secondary mt-8">{{ trackNote }}</div>
        </div>
      </div>`,setup(_,{emit:M}){const S=t("qcState"),k=s(P()),T=s("after_close"),C=s({rows:[],actions:{},total:0,groups:{}}),u=s({sessions:{},total:0}),i=s(null),f=s(!1),R=s(""),L=s(!1),y=s(!1),D=s(!1),I=s([]),V=s(""),O=s(null),F={},X=s({});let U=0;const H=s(null),K=e(function(){const ee=C.value&&C.value.groups||{};return Object.keys(ee).length?ee:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),q=e(function(){const ee=H.value;return!ee||!ee.date||ee.date!==k.value?"":"已加载最近一次评估: "+ee.date+" · "+(l[ee.session]||ee.session)}),a=e(function(){const ee=C.value&&C.value.base_date;return ee?ee===k.value?"评分范围: "+ee+" 收盘池 + 自选":"评分范围: "+ee+" 收盘池(前一交易日算好) + 自选":""});function E(){D.value=!y.value&&(C.value.rows||[]).length===0&&Object.keys(u.value.sessions||{}).length===0,M("load-state",{error:y.value,empty:D.value})}function n(ee){if(ee==null)return"—";const $=Number(ee);return $===Math.floor($)?String($):$.toFixed(1)}function p(ee){const $=C.value.total||0,be=(C.value.actions||{})[ee]||0;if(!$)return"0%";const B=be/$*100;return B>0&&B<4?"4%":B.toFixed(1)+"%"}function J(ee){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[ee]||"info"}function N(ee){const $=i.value&&i.value.overall&&i.value.overall[ee]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"info":$.rate>=60?"success":$.rate>=40?"warning":"danger"}function x(ee){const $=i.value&&i.value.overall&&i.value.overall[ee]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"样本不足":$.rate.toFixed(1)+"% ("+$.total+" 样本)"}function m(){return l[T.value]||T.value}function A(ee){const $=I.value.indexOf(ee);$>=0?I.value.splice($,1):I.value.push(ee)}function w(ee){if(!ee||!ee.raw_json)return{};if(F[ee.stock_code+ee.session+ee.trade_date])return F[ee.stock_code+ee.session+ee.trade_date];let $={};try{$=JSON.parse(ee.raw_json)||{}}catch{$={}}return F[ee.stock_code+ee.session+ee.trade_date]=$,$}async function j(){try{const ee=await c("/api/focus/latest"),$=ee&&ee.success&&ee.data;$&&$.date&&(H.value=$,k.value=$.date,$.session&&(T.value=$.session))}catch(ee){console.warn("[focus] 最近一次评估解析失败:",ee)}}async function te(){L.value=!0,y.value=!1;try{const ee=await c("/api/focus/results?date="+k.value+"&session="+T.value);C.value=ee&&ee.success&&ee.data||{rows:[],actions:{},total:0,groups:{}},re((C.value.rows||[]).map(function($){return $.stock_code}))}catch(ee){console.warn("[focus] 结果加载失败:",ee),C.value={rows:[],actions:{},total:0,groups:{}},y.value=!0}finally{L.value=!1,E()}}async function re(ee){const $=X.value||{},be=(ee||[]).filter(function(ve){return ve&&!$[ve]});if(!be.length)return;const B=++U,me=be.map(function(ve){return c("/api/focus/stock/"+encodeURIComponent(ve)+"/pool?date="+k.value).then(function(Z){Z&&Z.success&&Z.data?$[ve]=Z.data:$[ve]={stock_code:ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){$[ve]={stock_code:ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(me)}catch{}B===U&&(X.value=Object.assign({},$))}function se(ee){const $=S&&S.showStockDetail;if(typeof $=="function"){$(ee);return}const B=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;B&&B.info("请从其他页面打开股票详情: "+ee)}async function le(){try{const ee=await c("/api/focus/history?date="+k.value);u.value=ee&&ee.success&&ee.data||{sessions:{},total:0}}catch(ee){console.warn("[focus] 历史加载失败:",ee),u.value={sessions:{},total:0},y.value=!0}E()}async function Y(){f.value=!0;try{const ee=await c("/api/ai/track");ee&&ee.success&&ee.data?(i.value=ee.data,R.value=(ee.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):i.value=null}catch(ee){console.warn("[focus] 效果块加载失败:",ee),i.value=null,y.value=!0}finally{f.value=!1,E()}}async function ie(){const ee=(V.value||"").trim();if(ee){O.value=null;try{const $=await c("/api/focus/stock/"+encodeURIComponent(ee));O.value=$&&$.success&&$.data&&$.data.rows||[]}catch($){console.warn("[focus] 单股历史加载失败:",$),O.value=[]}}}async function qe(){await te(),await le(),await Y()}return v(async function(){await j(),await qe()}),{curDate:k,session:T,results:C,history:u,track:i,trackLoading:f,trackNote:R,detailSplitEnabled:S.detailSplitEnabled,stockDetail:S.stockDetail,loading:L,expanded:I,stockCode:V,stockHistory:O,SESSIONS:o,ACTION_ORDER:r,TRACK_WINDOWS:g,ACTION_DOT:d,TIER_DOT:b,SESSION_LABELS:l,displayGroups:K,latestNote:q,baseNote:a,sessionLabel:m,fmtScore:n,tagType:J,rateTagType:N,fmtRate:x,toggle:A,detailOf:w,loadResults:te,loadHistory:le,loadTrack:Y,loadStockHistory:ie,loadAll:qe,poolStatus:X,openStockDetail:se,actionPct:p}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(s){const{ref:e,nextTick:v}=Vue,{currentView:t,statusFilter:r,dashboardData:d,loadHealthMetrics:b,getLoadDashboardData:o,getLastRefreshTime:l,getFetchPoolSignals:g}=s,c=e(!1),P=e(""),_=new Map,M=e([]),S=e(""),k=e(""),T=e([]),C=e(!1),u=e(""),i=window.__quantModules.core||{},f=typeof i.createTtlCache=="function"?i.createTtlCache(15e3):null;let R=0;function L(){const U=Date.now();U-R<5e3||(R=U,ElementPlus.ElMessage.success("有新数据，已更新"))}function y(U,H,K,q){!f||!H||typeof i.silentRefresh!="function"||i.silentRefresh({cache:f,key:H,fetchFn:async()=>{const a=await fetch(U);if(!a.ok)throw new Error("HTTP "+a.status);const E=await a.json();return K?K(E):E},ttl:f.defaultTtl,apply:q,onChanged:L,onError:()=>{}})}const D=new Set;async function I(){var U;try{const K=await(await fetch("/api/dates")).json();M.value=((U=K.data)==null?void 0:U.dates)||K.dates||[],M.value.length>0&&(S.value=M.value[M.value.length-1]),k.value=new Date().toLocaleTimeString()}catch(H){console.error(H)}}async function V(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),k.value="刷新中...",_.clear(),await I(),await F(),k.value=new Date().toLocaleTimeString()}catch(U){console.error("数据刷新失败",U)}}function O(){if(!S.value)return;const H="/api/view/"+(t.value||"day")+"/"+S.value+"?status="+(r.value||"all")+"&format=csv";window.open(H,"_blank")}async function F(){if(C.value=!1,!S.value)return;const U=`${t.value}_${S.value}`;if(D.has(U))return;D.add(U);const H=`/api/view/${t.value}/${S.value}?status=all`,K=f&&typeof i.makeCacheKey=="function"?i.makeCacheKey("GET",`/api/view/${t.value}/${S.value}`,{status:"all"}):null,q=(n,p)=>{T.value=n,u.value=p||"",_.set(U,{stocks:n,note:p||""})},a=n=>{q(n&&n.stocks||[],n&&n.note||"")};if(_.has(U)){a(_.get(U)),y(H,K,n=>n,a),D.delete(U);return}const E=K&&f?f.get(K):void 0;if(E!==void 0){a(E),y(H,K,n=>n,a),D.delete(U);return}c.value=!0,P.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const p=await(await fetch(H)).json(),J=p.stocks||[];q(J,p.note||""),f&&K&&f.set(K,{stocks:J,note:p.note||""})}catch{try{const J=await(await fetch(`/api/calendar/${S.value}/consensus`)).json();T.value=(J.consensus||[]).map(N=>({...N,code:N.stock,status:"current"}))}catch{C.value=!0,ElementPlus.ElMessage.error("数据加载失败")}}finally{c.value=!1}g(),D.delete(U)}async function X(){const U=f&&typeof i.makeCacheKey=="function"?i.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(f){const H=f.get(U);if(H!==void 0){d.value=H,b().catch(()=>{}),y("/api/dashboard",U,K=>K.data||K,K=>{d.value=K,l().value=Date.now()});return}}await o()(),b().catch(()=>{}),f&&f.set(U,d.value)}return{loading:c,loadingView:P,viewCache:_,dates:M,selectedDate:S,lastLoadTime:k,consensus:T,viewNote:u,consensusError:C,loadDates:I,refreshCalendarData:V,exportCSV:O,loadConsensusData:F,loadDashboardCached:X}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(s){const{nextTick:e}=Vue,{currentKlinePeriod:v,loadIndexKline:t,rememberDialogTrigger:r,menus:d,currentPage:b,currentSubPage:o,stockDetail:l,selectedDate:g}=s,c=ref({indices:[],market_sentiment:null}),P=ref(!1);let _=null;const M=ref(!1),S=ref(null),k=ref(null),T=ref(!1);function C(){window.__quantModules.charts.disposeKline("stockKlineChart")}const u=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{u.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const i=ref(!1),f=ref(null),R=ref(!1),L=ref(0),y=ref(0);async function D(){P.value=!1;try{const p=await(await fetch("/api/market/overview")).json();c.value=p,I(p)}catch(n){P.value=!0,console.error("获取市场行情失败:",n)}}function I(n){_&&clearInterval(_),n&&n.in_trading_hours&&(_=setInterval(D,6e5))}function V(n){r(),S.value=n,k.value=null,v.value="daily",O(n.code),window.__quantModules.charts.disposeKline("indexKlineChart"),M.value=!0,setTimeout(async()=>{await t("daily")},500)}async function O(n){try{const J=await(await fetch("/api/ai/index-eval/"+n)).json();J.success&&J.data&&(k.value=J.data)}catch(p){console.warn("[getIndexAiScore] cache check failed:",p)}}async function F(){if(S.value){T.value=!0;try{const p=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:S.value.code,index_name:S.value.name,current_price:S.value.close,pct_chg:S.value.pct_chg})})).json();p.success?k.value=p.data:ElementPlus.ElMessage.error(p.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{T.value=!1}}}function X(n){window.__quantModules.charts.zoomKline("stockKlineChart",n)}function U(){R.value=!0,setTimeout(()=>{R.value=!1},600)}function H(n,p){if(n===p){U();return}const J=800,N=performance.now(),x=p-n;i.value=!0,f.value={value:x,dir:x>0?"up":"down"},R.value=!0,setTimeout(()=>{R.value=!1},600),setTimeout(()=>{f.value=null},2300);function m(A){const w=A-N,j=Math.min(w/J,1),te=1-Math.pow(1-j,3),re=Math.round(n+x*te);l.value&&l.value.score_data&&(l.value.score_data.score=re),j<1?requestAnimationFrame(m):(l.value&&l.value.score_data&&(l.value.score_data.score=p),i.value=!1)}requestAnimationFrame(m)}function K(){if(!l.value||!l.value.score_data)return;const n=l.value.score_data.score;if(n==null)return;const p=600,J=performance.now();R.value=!0,setTimeout(()=>{R.value=!1},600);function N(x){const m=Math.min((x-J)/p,1),A=1-Math.pow(1-m,3),w=Math.round(n*A);l.value&&l.value.score_data&&(l.value.score_data.score=w),m<1?requestAnimationFrame(N):l.value&&l.value.score_data&&(l.value.score_data.score=n)}requestAnimationFrame(N)}async function q(){var J;if(!l.value||!l.value.stock)return;const n=l.value.stock,p=(J=l.value.score_data)==null?void 0:J.score;try{const N=new Date().toISOString().split("T")[0],x=g.value||N,A=await(await fetch(`/api/calendar/stock/${encodeURIComponent(n)}/score?date=${x}`)).json();if(A.success&&A.score_data){const w=A.score_data.score;l.value&&(l.value.score_data=A.score_data),p!=null&&w!==p?H(p,w):U()}else U()}catch(N){console.warn("[refreshStockScore] failed:",N)}}function a(n){u.value&&(L.value=n.touches[0].clientX,y.value=n.touches[0].clientY)}function E(n){if(!u.value)return;const p=L.value-n.changedTouches[0].clientX,J=y.value-n.changedTouches[0].clientY;if(Math.abs(p)>Math.abs(J)&&Math.abs(p)>80){const N=d.value.map(function(m){return m.key}),x=N.indexOf(b.value);if(p>0&&x<N.length-1){const m=N[x+1],A=window.__quantGoPage;A?A(m,""):(b.value=m,o.value="")}else if(p<0&&x>0){const m=N[x-1],A=window.__quantGoPage;A?A(m,""):(b.value=m,o.value="")}}}return{marketData:c,marketRefreshTimer:_,marketError:P,fetchMarketData:D,indexDetailVisible:M,indexDetail:S,indexAiResult:k,indexAiLoading:T,showIndexDetail:V,loadCachedIndexEval:O,doIndexAiEvaluate:F,disposeStockKline:C,isMobile:u,zoomKlineRange:X,scoreAnimating:i,scoreDelta:f,scorePulse:R,triggerScorePulse:U,animateScoreChange:H,animateScoreEntrance:K,refreshStockScore:q,touchStartX:L,touchStartY:y,onTouchStart:a,onTouchEnd:E}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(s){const{navigateTo:e,currentPage:v,currentSubPage:t}=s,r=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),b=ref("");async function o(){if(!r.value.webhook_url){b.value="请先输入Webhook地址";return}d.value="testing",b.value="";try{const ie=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:r.value.webhook_url})})).json();ie.success||ie.status==="ok"?(b.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(b.value=ie.message||"测试失败",ElementPlus.ElMessage.error(b.value))}catch{b.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const l=Vue.ref(!1);async function g(){l.value=!0;try{const ie=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}const c=ref(!1);function P(){e("ai","chat_history"),c.value=!0,Vue.nextTick(()=>{const Y=document.querySelector('input[placeholder*="输入问题"]');Y&&Y.focus()})}const _=ref([]),M=ref({});async function S(){try{const ie=await(await fetch("/api/ai/recommend-strategies")).json();ie.success&&(_.value=ie.recommendations||[])}catch(Y){console.warn("[loadStrategyRecommendations] failed:",Y)}}async function k(){try{const ie=await(await fetch("/api/ai/usage-stats")).json();ie.success&&(M.value=ie)}catch(Y){console.warn("loadAiUsage failed:",Y)}}const T=ref({}),C=ref([]),u=ref(7),i=ref(!1),f=ref(!1),R=ref(!1);async function L(){i.value=!1;try{const ie=await(await fetch("/api/system/monitor")).json();ie.success&&(T.value=ie)}catch(Y){i.value=!0,console.warn("loadSysMonitor failed:",Y)}}const y=ref({});async function D(){f.value=!1;try{const ie=await(await fetch("/api/system/health-detail")).json();ie.success&&(y.value=ie)}catch(Y){f.value=!0,console.warn("loadHealthDetail failed:",Y)}}async function I(){try{const ie=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();ie.success&&(C.value=ie.rank||[])}catch(Y){console.warn("loadAnalytics failed:",Y)}}const V=ref(!1);async function O(){if(!V.value){V.value=!0;try{const ie=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return ie&&ie.success?ie.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${ie.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${ie.date}）`):ElementPlus.ElMessage.error(ie&&(ie.detail||ie.message)||"生成复盘失败"),D(),ie}catch(Y){ElementPlus.ElMessage.error("生成复盘失败: "+(Y.message||""))}finally{V.value=!1}}}const F=ref(null),X=ref(!1);async function U(){R.value=!1;try{const ie=await(await fetch("/api/ai/fact-check/latest")).json();F.value=ie&&ie.success&&ie.data||null}catch(Y){R.value=!0,console.warn("loadFactCheck failed:",Y)}}async function H(){if(!X.value){X.value=!0;try{const ie=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return ie&&ie.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${ie.data.pass_rate!=null?ie.data.pass_rate+"%":"--"} (${ie.data.checked} 个数字)`),U()):ElementPlus.ElMessage.error(ie&&(ie.detail||ie.message)||"事实护栏抽查失败"),ie}catch(Y){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Y.message||""))}finally{X.value=!1}}}const K=ref([]),q=ref(!1);async function a(){try{const ie=await(await fetch("/api/backup/list")).json();ie.success&&(K.value=ie.backups||[])}catch(Y){console.error("加载备份列表失败",Y)}}async function E(){q.value=!0;try{const ie=await(await fetch("/api/backup/create",{method:"POST"})).json();ie.success?(ElementPlus.ElMessage.success(ie.message||"备份成功"),a()):ElementPlus.ElMessage.error(ie.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{q.value=!1}}const n=ref(""),p=ref("");async function J(Y){n.value=Y,p.value="";try{const ie=window.__quantModules&&window.__quantModules.core||{},qe=typeof ie.authHeaders=="function"?ie.authHeaders():{},ee=await fetch("/api/reports/export?format="+encodeURIComponent(Y),{headers:qe});if(!ee.ok)throw new Error("HTTP "+ee.status);const $=await ee.blob(),be=URL.createObjectURL($),B=document.createElement("a");B.href=be;const me=new Date().toISOString().slice(0,10);B.download="report_"+me+"."+Y,document.body.appendChild(B),B.click(),document.body.removeChild(B),URL.revokeObjectURL(be),p.value="报表已导出 ("+Y.toUpperCase()+")"}catch(ie){p.value="报表导出失败: "+(ie.message||ie)}finally{n.value=""}}async function N(Y){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Y} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(ie){console.warn("[restoreBackup] confirm cancelled:",ie);return}try{const qe=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})})).json();qe.success?(ElementPlus.ElMessage.success(qe.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(qe.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const x=ref(!1),m=ref(0),A=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function w(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{m.value=0,x.value=!0},800)}function j(){x.value=!1,localStorage.setItem("quant_tour_done","1")}function te(){x.value=!1,localStorage.setItem("quant_tour_done","1")}const re=ref(""),se=ref(!1);async function le(){if(!re.value||!re.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}se.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:re.value.trim(),page:v.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(re.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{se.value=!1}}return{feishuConfig:r,feishuTestStatus:d,feishuTestMessage:b,feishuSaving:l,testFeishuWebhook:o,saveFeishuConfig:g,aiFabHidden:c,openAiFab:P,strategyRecommendations:_,aiUsage:M,loadStrategyRecommendations:S,loadAiUsage:k,sysMonitor:T,analyticsRank:C,analyticsDays:u,loadSysMonitor:L,loadAnalytics:I,sysMonitorError:i,healthDetail:y,loadHealthDetail:D,healthDetailError:f,reviewTriggering:V,triggerMarketReview:O,factCheck:F,factCheckRunning:X,loadFactCheck:U,triggerFactCheck:H,factCheckError:R,backups:K,backupCreating:q,loadBackups:a,createBackup:E,restoreBackup:N,reportExporting:n,reportExportMsg:p,exportReport:J,tourVisible:x,tourStep:m,tourSteps:A,maybeShowTour:w,skipTour:j,finishTour:te,feedbackText:re,feedbackSubmitting:se,submitFeedback:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(s){const{computed:e}=Vue,{currentView:v,selectedDate:t,dates:r,loadConsensusData:d,hapticFeedback:b}=s,o=e(()=>({day:"天",week:"周",month:"月",year:"年"})[v.value]||"天"),l=e(()=>({day:"date",week:"week",month:"month",year:"year"})[v.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[v.value]||"YYYY-MM-DD"),c=e(()=>!t.value||!r.value||r.value.length===0?!1:t.value>r.value[0]),P=e(()=>!t.value||!r.value||r.value.length===0?!1:t.value<r.value[r.value.length-1]);function _(T){b("light"),v.value=T;let C=t.value||r.value[r.value.length-1];if(T==="year"){const u=C.substring(0,4),i=r.value.find(f=>f.startsWith(u));t.value=i||C}else if(T==="month"){const u=C.substring(0,7),i=r.value.find(f=>f.startsWith(u));t.value=i||C}setTimeout(d,50)}function M(T){b("light");const C=t.value,u=r.value,i=u.indexOf(C);if(i<0)return;let f=1;v.value==="week"&&(f=5),v.value==="month"&&(f=22),v.value==="year"&&(f=250);const R=i+T*f;if(R>=0&&R<u.length){const L=u[R];if(v.value==="month"){const y=L.substring(0,7),D=u.find(I=>I.startsWith(y));t.value=D||L}else if(v.value==="year"){const y=L.substring(0,4),D=u.find(I=>I.startsWith(y));t.value=D||L}else t.value=L;d()}}function S(T){if(!r.value||r.value.length===0)return!1;const C=T.getFullYear(),u=String(T.getMonth()+1).padStart(2,"0"),i=String(T.getDate()).padStart(2,"0"),f=`${C}-${u}-${i}`;return!r.value.includes(f)}function k(T){T&&T.length>10&&(t.value=T.substring(0,10)),d()}return{viewUnit:o,datePickerType:l,dateFormat:g,canNavPrev:c,canNavNext:P,switchView:_,navigateDate:M,disabledDate:S,onDateChange:k}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(s){const{menus:e,subPageNames:v,navigateTo:t,currentPage:r,currentSubPage:d,currentView:b,navigateDate:o,switchView:l,getLoadDashboardData:g,refreshCalendarData:c,getLoadAiHistory:P,exportCSV:_,getShowBatchEvaluate:M,openAiFab:S,toggleSidebar:k,showStockDetail:T,getSelectedDate:C,markExternalStock:u}=s,i=ref("");async function f(H,K){if(!H||H.trim().length<1){K([]);return}const q=window.QuantCommandPanel;let a=[];q&&e.value&&(a=q.buildSearchSuggestions(H,e.value,v,q.DEFAULT_COMMANDS));const E=window.__quantModules&&window.__quantModules.pinyin;E&&E.searchCoreStocks(H).forEach(function(n){a.push({value:n.code+" "+n.name,type:"stock",code:n.code,name:n.name,label:n.name,subLabel:n.code,icon:"trending-up",iconName:"trending-up"})});try{const p=await(await fetch("/api/search?q="+encodeURIComponent(H))).json();if(p.success&&p.results){const J=p.results.map(function(x){return{value:x.code+" "+x.name,type:"stock",code:x.code,name:x.name,label:x.name,subLabel:x.code,icon:"trending-up",iconName:"trending-up"}}),N=[];(p.groups||[]).forEach(function(x){(x.items||[]).forEach(function(m){m.type==="sector"?N.push({value:m.name+" · "+m.subLabel,type:"sector",name:m.name,label:m.name,subLabel:"板块",icon:"layers",iconName:"layers"}):m.type==="strategy"?N.push({value:m.name+" · 策略",type:"strategy",id:m.id,name:m.name,label:m.name,subLabel:"策略",icon:"target",iconName:"target"}):m.type==="menu"&&N.push({value:m.name,type:"menu",menuKey:m.menuKey,name:m.name,label:m.name,subLabel:m.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),K(a.concat(J,N))}else K(a)}catch(n){console.warn("[searchStocks] fetch failed:",n),K(a)}}function R(H){return H?H.type==="menu"?{action:"menu",menuKey:H.menuKey,subPage:H.subPage}:H.type==="command"?{action:"command",key:H.key}:H.type==="sector"?{action:"sector",name:H.name}:H.type==="strategy"?{action:"strategy",id:H.id,name:H.name}:H.type==="stock"||H.code&&H.name?{action:"stock",code:H.code,name:H.name}:null:null}function L(H){i.value="";const K=window.QuantCommandPanel,q=K?K.dispatchSearchSelection(H):R(H);if(q){if(q.action==="menu"){t(q.menuKey,q.subPage);return}if(q.action==="command"){I(q.key);return}if(q.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(q.name);return}if(q.action==="strategy"){t("research","overview");return}if(q.action==="stock"){(r.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof u=="function"&&u(q.code),D(q.code,q.name);return}}}let y=null;function D(H,K){y&&(clearInterval(y),y=null);const q=function(){typeof T=="function"&&T(H,K)},a=C?C():null;if(a&&a.value){q();return}const E=Date.now();y=setInterval(function(){((C?C().value:!0)||Date.now()-E>4e3)&&(clearInterval(y),y=null,q())},60)}function I(H){if(H==="refresh"){const K=r.value;K==="strategies"?g().catch(function(){}):K==="calendar"?c().catch(function(){}):K==="ai"&&P().catch(function(){})}else H==="export"?_():H==="batch"?M().value=!0:H==="ai"?S():H==="sidebar"?k():H==="open-eval-history"?t("ai","history"):H==="open-shortterm"&&t("shortterm","overview")}const V=ref(!1),O=ref(!1);function F(H){if(!H)return!1;const K=H.tagName;return K==="INPUT"||K==="TEXTAREA"||K==="SELECT"||H.isContentEditable}function X(H){if(F(H.target))return;const K=H.key.toLowerCase();if(H.ctrlKey&&K==="k"){H.preventDefault(),O.value=!0;return}if(H.ctrlKey&&K==="/"){H.preventDefault(),V.value=!V.value;return}if(H.ctrlKey&&K==="h"){H.preventDefault(),t("ai","history");return}if(H.ctrlKey&&H.shiftKey&&K==="s"){H.preventDefault(),t("shortterm","overview");return}if(!(H.ctrlKey||H.metaKey||H.altKey)){if(K>="1"&&K<="5"){const q=parseInt(K)-1,a=e.value[q];a&&t(a.key,a.subPages[0]||"");return}if(K==="r"&&U(),(K==="arrowleft"||K==="arrowright"||K==="arrowup"||K==="arrowdown")&&r.value==="calendar")if(H.preventDefault(),K==="arrowleft"||K==="arrowright")o(K==="arrowleft"?-1:1);else{const q=["day","week","month","year"].indexOf(b.value),a=["day","week","month","year"][(q+(K==="arrowup"?-1:1)+4)%4];l(a)}}}function U(){const H=r.value;H==="strategies"?g().catch(()=>{}):H==="calendar"?c().catch(()=>{}):H==="ai"&&P().catch(()=>{})}return{searchQuery:i,searchStocks:f,onSearchSelect:L,runGlobalCommand:I,shortcutHelpVisible:V,commandPaletteVisible:O,isTypingTarget:F,handleGlobalKeydown:X,refreshCurrentPage:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(s){const{currentUser:e,loadUserConfig:v,loadDates:t,loadDashboardData:r,loadDashboardCached:d,loadHealthMetrics:b,loadConsensusData:o,applyTheme:l,maybeShowTour:g,loadAiVendors:c,loadGroupConfig:P,groupsConfig:_}=s,M=function(K){const q=window.__quantModules&&window.__quantModules.themes;return q&&q.applyLegacyTheme?q.applyLegacyTheme(K):l(K)},S="qc_login_username";let k="";try{k=localStorage.getItem(S)||""}catch{k=""}const T=ref({username:k,password:""}),C=ref(!1),u=ref(!1),i=ref(!1),f=ref({oldPassword:"",newPassword:"",confirmPassword:""}),R=ref(!1),L=ref(!1),y=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),D=ref(1);async function I(){try{(await(await fetch("/api/setup/status")).json()).needed&&(y.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},D.value=1,L.value=!0)}catch(K){console.warn("[checkSetupWizard] failed:",K)}}async function V(){try{const K={new_password:y.value.newPassword,ai_key:y.value.aiKey,ai_provider:y.value.aiProvider,ai_model:y.value.aiModel,ai_endpoint:y.value.aiEndpoint,tushare_token:y.value.tushareToken},a=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K)})).json();a.success?(L.value=!1,ElementPlus.ElMessage.success("初始化完成"),await v()):ElementPlus.ElMessage.error(a.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function O(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(L.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function F(){if(!T.value.username||!T.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}C.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T.value)})).json();if(q.success){e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),M(q.user.theme||"gold");try{localStorage.setItem(S,T.value.username||"")}catch{}typeof P=="function"&&await P().catch(function(){}),typeof c=="function"&&c(),await v(),await t(),await Promise.all([d(),o(),b().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),q.data&&q.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),q.user.role==="admin"&&setTimeout(I,500)}else ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{C.value=!1}}async function X(){u.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();q.success?(e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),M(q.user.theme||"gold"),typeof P=="function"&&await P().catch(function(){}),await v(),await t(),await r(),b().catch(()=>{}),await o(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{u.value=!1}}function U(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{_&&(_.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function H(){if(!f.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!f.value.newPassword||f.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(f.value.newPassword!==f.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}R.value=!0;try{const K=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:f.value.oldPassword,new_password:f.value.newPassword})}),q=await K.json();K.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),i.value=!1,f.value={oldPassword:"",newPassword:"",confirmPassword:""},U()):ElementPlus.ElMessage.error(q.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{R.value=!1}}return{loginForm:T,logining:C,guestLogining:u,showChangePassword:i,changePasswordForm:f,changingPassword:R,showSetupWizard:L,setupForm:y,setupStep:D,checkSetupWizard:I,completeSetupWizard:V,resetSetupWizard:O,handleLogin:F,handleGuestLogin:X,handleLogout:U,doChangePassword:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(s){const{watch:e}=Vue;let v=null;const{strategyFilter:t,currentView:r,statusFilter:d,currentPage:b,currentSubPage:o,menus:l,currentUser:g,strategyFilterCounts:c,lazyTick:P,dates:_,selectedDate:M,consensus:S,loadConsensusData:k,fetchMerrillClock:T,fetchMarketData:C,loadWatchlist:u,loadAiHistory:i,preloadWatchlistKline:f,loadChatHistory:R,loadSystemStatus:L,checkTushareConnection:y,loadSysMonitor:D,loadAnalytics:I,loadHealthDetail:V,loadHealthMetrics:O,loadAiUsage:F,loadFactCheck:X,loadAutoEvaluateConfig:U,loadDatasourceConfig:H,loadFeishuConfig:K,loadAiConfig:q,loadAiVendors:a,loadRateLimit:E,loadDataRefreshConfig:n,loadBackups:p,loadAllGroups:J,loadUsers:N,stockDetailTab:x,stockDetailVisible:m,stockKlineLoaded:A,loadStockKline:w,currentKlinePeriod:j,showMerrillDetail:te,indexDetailVisible:re,restoreDialogFocus:se}=s;e(t,le=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(le.selected)),localStorage.setItem("quant_strategy_filter_mode",le.mode)},{deep:!0}),e([r,d],(le,Y)=>{le[0]!==Y[0]&&k()}),e([b,o],([le,Y])=>{var ie;try{const ee=!(le==="calendar"&&Y==="calendar")&&Y||"",$=ee?"#"+le+"/"+ee:"#"+le;window.location.hash!==$&&(window.location.hash=$)}catch{}if(Y&&localStorage.setItem("quant_last_subpage",Y),!Y&&l.value.find(qe=>qe.key===le)){const qe=l.value.find(ee=>ee.key===le);qe&&qe.subPages.length>0&&(o.value=qe.subPages[0])}if(le==="shortterm"&&Y==="market-review"){const qe=window.__lazyLoaders&&window.__lazyLoaders.research;qe&&qe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ee){ee&&ee.name&&!ee.__quantRegistered&&(window.__quantApp.component(ee.name,ee),ee.__quantRegistered=!0)}),P&&P.value++}).catch(function(ee){console.warn("[lazy] research 组件补加载失败",ee)})}le==="calendar"&&Y==="calendar"&&(!S.value||S.value.length===0)&&(_.value.length>0&&!M.value&&(M.value=_.value[_.value.length-1]||""),setTimeout(k,50)),le==="calendar"&&Y==="pool"&&(!S.value||S.value.length===0)&&(_.value.length>0&&!M.value&&(M.value=_.value[_.value.length-1]||""),setTimeout(k,50)),le==="strategies"&&(Y==="merrill"&&T(),Y==="market"&&C(),Y==="consensus"&&(!S.value||S.value.length===0)&&setTimeout(k,50)),le==="ai"&&(Y==="watchlist"&&(u(),i(),setTimeout(f,500)),Y==="history"&&i(),Y==="overview"&&(i(),u()),Y==="chat_history"&&R()),(le==="system"||le==="ops")&&((ie=g.value)==null?void 0:ie.role)==="admin"&&(Y==="status"&&(L(),y()),Y==="health"&&(V(),O()),Y==="schedule"&&V(),Y==="guard"&&X(),Y==="usage"&&(D(),I(),V(),O(),F(),X()),Y==="autoeval"&&(U(),a()),Y==="datasource"&&H(),Y==="feature"&&(K(),q(),E(),n(),p()),Y==="user"&&(J(),N())),(le==="system"||le==="ops")&&Y==="usage"?v||(v=setInterval(()=>{D(),I(),V(),O(),F()},3e4)):v&&(clearInterval(v),v=null)}),e(x,(le,Y)=>{le==="kline"&&Y&&Y!=="kline"&&m.value&&(A.value=!1,setTimeout(async()=>{!await w(j.value)&&m.value&&x.value==="kline"&&setTimeout(()=>w(j.value),800)},50))}),e(te,le=>{le||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([m,re],([le,Y])=>{!le&&!Y&&se()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(s){const{handleGlobalKeydown:e,applyTheme:v,menus:t,currentPage:r,currentSubPage:d,currentView:b,currentKlinePeriod:o,selectedDate:l,dates:g,loadDates:c,loadConsensusData:P,loadDashboardCached:_,appVersion:M,themes:S,fetchMarketData:k,fetchMerrillStages:T,fetchMerrillClock:C,loadAiConfig:u,loadAiVendors:i,loadAiCatalog:f,currentUser:R,loadUserConfig:L,loadAutoEvaluateConfig:y,loadGroupConfig:D,loadUsers:I,loadAllGroups:V,loadAiHistory:O}=s;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function F(N,x){const m={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(N==="calendar"&&m[x])return r.value="calendar",d.value="calendar",m[x]&&(b.value=m[x]),!0;if(N==="research"&&(x==="strategy-write"||x==="custom-write")){r.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",x==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const N=window.location.hash||"";if(!N||N==="#")return;const x=N.replace(/^#\/?/,"").split("/"),m=x[0],A=x[1]||"",w=t.value.find(function(j){return j.key===m});if(w&&!F(m,A)){if(!A)r.value=m,d.value=w.subPages[0]||"";else if(w.subPages.indexOf(A)>=0)r.value=m,d.value=A;else return;window.__lazyLoaders&&window.__lazyLoaders[m]&&window.__quantGoPage&&window.__quantGoPage(m,d.value).catch(function(){})}});const X=(N,x=3e3,m="")=>{const A=new Promise((w,j)=>setTimeout(()=>j(new Error("timeout")),x));return Promise.race([N,A]).catch(w=>{console.warn(`[init] ${m||"task"} failed:`,w.message)})},U=localStorage.getItem("quant_theme"),H=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const N=window.__quantModules.themes;let x=H.theme||"system",m=H.theme_hue!=null&&H.theme_hue!==""?H.theme_hue:null;const A=typeof N.migrateLegacyTheme=="function"?N.migrateLegacyTheme():null;m==null&&A&&(x=A.mode,m=A.hue),m==null&&(m=45),v(x,m)}else U&&v(U);await D().catch(function(){}),function(){var N=window.location.hash||"",x=!1;if(N&&N!=="#"){var m=N.replace(/^#\/?/,"").split("/"),A=m[0],w=m[1]||"",j=t.value.find(function(Y){return Y.key===A});j&&(F(A,w)||(r.value=A,w&&j.subPages.indexOf(w)>=0?d.value=w:w||(d.value=j.subPages[0]||"")),x=!0)}if(!x){var te=localStorage.getItem("quant_last_page");te&&t.value.some(function(Y){return Y.key===te})?r.value=te:H.default_view&&t.value.some(function(Y){return Y.key===H.default_view})&&(r.value=H.default_view);var re=localStorage.getItem("quant_last_subpage");re&&(d.value=re)}var se=localStorage.getItem("quant_last_date");se&&(l.value=se);var le=localStorage.getItem("quant_last_view");le&&(b.value=le),window.__lazyLoaders&&window.__lazyLoaders[r.value]&&window.__quantGoPage&&window.__quantGoPage(r.value,d.value).catch(function(){})}(),fetch("/api/health").then(N=>N.json()).then(N=>{N.version&&(M.value=N.version)}).catch(()=>{});const K=localStorage.getItem("quant_user"),q=localStorage.getItem("quant_token"),a=!!(K&&q),E=Promise.all([Promise.resolve().then(()=>{S.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),X(k(),3e3,"marketData"),X(T(),2e3,"merrillStages")]).then(()=>{X(C(),3e3,"merrillClock")});if(u(),f(),a&&R.value&&i(),!a||!R.value){await E;return}let n=!0;try{n=(await fetch("/api/users/me")).ok}catch{n=!1}if(!n){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),R.value=null;return}if(R.value){const N=R.value.theme||"",x=window.__quantModules&&window.__quantModules.themes;let m=H.theme||"system",A=H.theme_hue!=null&&H.theme_hue!==""?H.theme_hue:null;if(A==null&&x&&typeof x.migrateLegacyTheme=="function"){const w=x.migrateLegacyTheme();if(w)m=w.mode,A=w.hue;else if(N&&x.LEGACY_MAP&&x.LEGACY_MAP[N]){const j=x.LEGACY_MAP[N];m=j[0],A=j[1]}}A==null&&(A=45),v(m,A)}if(window.__quantModules&&window.__quantModules.preferences){const x=await window.__quantModules.preferences.loadPreferences();var p=localStorage.getItem("quant_last_page");!p&&x.default_view&&t.value.some(function(m){return m.key===x.default_view})&&(r.value=x.default_view),x.theme&&v(x.theme,x.theme_hue!=null&&x.theme_hue!==""?x.theme_hue:null),o&&(x.chart_period==="weekly"||x.chart_period==="monthly")&&(o.value=x.chart_period)}await Promise.all([X(L(),2e3,"userConfig"),X(c(),2e3,"dates")]),y().catch(()=>{}),D().catch(()=>{});const J=r.value==="strategies"?X(_(),2e3,"dashboard"):X(P(),2e3,"consensus");await Promise.all([J,X(I(),2e3,"users"),X(O(),2e3,"aiHistory")]),V().catch(()=>{})}}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.shell={create:function(s){const{ref:e,computed:v,watch:t}=s,r=e(!1),d=window.__quantModules&&window.__quantModules.i18n||{},b=d.SUPPORTED_LOCALES||["zh-CN","en"],o=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",l=e(b.indexOf(o)!==-1?o:"zh-CN");typeof d.bindLocale=="function"&&d.bindLocale(l);const g=typeof d.t=="function"?d.t:function(a){return String(a)};function c(a){b.indexOf(a)!==-1&&(l.value=a,typeof d.setLocale=="function"&&d.setLocale(a),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",a))}function P(a,E){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(a,E):a==null?"":String(a)}function _(a){(a.key==="Enter"||a.key===" "||a.key==="Spacebar")&&(a.preventDefault(),a.currentTarget&&typeof a.currentTarget.click=="function"&&a.currentTarget.click())}let M=null;function S(){document.activeElement&&document.activeElement!==document.body&&(M=document.activeElement)}function k(){if(M&&M.isConnected)try{M.focus()}catch{}M=null}function T(){Vue.nextTick(()=>{const a=document.querySelector(".el-dialog-overlay .el-dialog");if(!a)return;const E=a.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');E&&typeof E.focus=="function"&&E.focus()})}const C=e(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{C.value=!0}),window.addEventListener("offline",()=>{C.value=!1})),window.addEventListener("beforeunload",a=>{if(r.value)return a.preventDefault(),a.returnValue="您有未保存的配置变更，确定要离开吗？",a.returnValue});function u(a="light"){typeof navigator<"u"&&navigator.vibrate&&(a==="light"?navigator.vibrate(10):a==="medium"?navigator.vibrate(20):a==="heavy"&&navigator.vibrate([10,30,10]))}const i=e(localStorage.getItem("sidebar_collapsed")==="1");function f(){i.value=!i.value,localStorage.setItem("sidebar_collapsed",i.value?"1":"0")}const R=e(null),L=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],y=v(()=>{var J,N,x;const a=((J=q.value)==null?void 0:J.role)||"guest",E=((N=q.value)==null?void 0:N.group)||a,n=((x=R.value)==null?void 0:x[E])||null;return L.map(m=>{if(n&&n.visible_menus&&m.key in n.visible_menus&&!n.visible_menus[m.key])return null;const A={...m,name:g("nav."+m.key)||m.name};return n!=null&&n.visible_sub_pages&&(A.subPages=m.subPages.filter(w=>{const j=m.key+"."+w;return n.visible_sub_pages[j]!==!1})),m.key==="system"&&a==="guest"&&m.guestSubPages&&(A.subPages=m.guestSubPages),A}).filter(Boolean)});async function D(){try{if(!localStorage.getItem("quant_token"))return;const E=await fetch("/api/groups/my");if(E.ok){const n=await E.json();R.value={[n.group_id]:n.group}}}catch(a){console.warn("loadGroupConfig:",a)}}const I=e("strategies"),V=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},O=e(V.navMode);function F(a){const E=window.__quantModules&&window.__quantModules.navModeCore;O.value=E?E.normalizeNavMode(a):a==="tree"||a==="toptab"?a:"toptab",E&&E.writePrefs({navMode:O.value})}const X=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function U(a,E=""){u("light"),I.value=a,K.value=E,localStorage.setItem("quant_last_subpage",E)}function H(){const a=y.value;if(!a||!a.length)return;if(!a.some(function(p){return p.key===I.value})){const p=a[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",p.key),I.value=p.key,K.value=p.subPages&&p.subPages[0]||"";return}const n=a.find(function(p){return p.key===I.value});n&&n.subPages&&n.subPages.length&&!n.subPages.includes(K.value)&&(K.value=n.subPages[0])}const K=e("overview"),q=e(null);return t(y,function(){H()}),function(){if(typeof localStorage>"u")return;const a=localStorage.getItem("quant_user"),E=localStorage.getItem("quant_token");if(a&&E)try{q.value=JSON.parse(a)}catch{}}(),{configChanged:r,locale:l,t:g,changeLanguage:c,sanitizeHtml:P,keyClick:_,rememberDialogTrigger:S,restoreDialogFocus:k,focusFirstInDialog:T,isOnline:C,hapticFeedback:u,sidebarCollapsed:i,toggleSidebar:f,groupsConfig:R,allMenuDefs:L,menus:y,loadGroupConfig:D,currentPage:I,currentSubPage:K,navMode:O,setNavMode:F,shortcutHelpItems:X,navigateTo:U,ensureVisiblePage:H,currentUser:q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.workspace={create:function(s){const{ref:e,computed:v,watch:t,currentPage:r,currentSubPage:d,allMenuDefs:b,menus:o,navigateTo:l,ensureVisiblePage:g,currentUser:c}=s,P=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],_=e("multifactor"),M=e(null),S=e(1e5),k=e(!1),T=e(null),C=e(!1);let u=null,i=null;async function f(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const xe={initial_capital:S.value||1e5};M.value&&M.value.length===2&&(xe.start_date=M.value[0],xe.end_date=M.value[1]),k.value=!0,T.value=null,C.value=!1;try{const Le=await fetch("/api/strategies/"+_.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(xe)});if(!Le.ok){const G=await Le.json().catch(()=>({}));throw new Error(G.detail||"回测失败")}const h=await Le.json(),z=h.result||{};if(!z.success)throw new Error(z.message||"回测失败");h.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),T.value={total_return_pct:((z.total_return??0)*100).toFixed(2),annual_return_pct:((z.annual_return??0)*100).toFixed(2),max_drawdown_pct:((z.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(z.sharpe_ratio??0).toFixed(2),win_rate:((z.win_rate??0)*100).toFixed(2),out_sample:z.outsample_total_return===void 0?"":((z.outsample_total_return??0)*100).toFixed(2),overfit_warning:z.overfit_warning||!1,message:z.message||""},R(z.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(Le){C.value=!0,ElementPlus.ElMessage.error(Le.message||"回测失败")}finally{k.value=!1}}function R(pe){const xe=document.getElementById("backtestEquityChart");if(!xe||!pe||pe.length===0)return;const Le=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,h=()=>{i=pe,u&&(u.dispose(),u=null),u=echarts.init(xe),u.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const z=pe.map(ce=>ce.date||ce[0]),G=pe.map(ce=>ce.value??ce[1]);u.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:z,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};Le?Le().then(h).catch(()=>{}):h()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){i&&R(i)})),function(){const pe=window.QuantSessionRestore;if(pe){const xe=pe.restore();xe&&xe.page&&(r.value=xe.page,xe.sub&&(d.value=xe.sub))}}(),Vue.watch(d,function(){gt()});const L=v(()=>{const pe=b.find(xe=>xe.key===r.value);return pe?pe.name:r.value}),y=e(0),D=v(()=>{y.value;const pe={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},xe=d.value;return r.value==="shortterm"&&xe==="market-review"?"qc-research-page":r.value==="ops"&&xe==="execution"?"qc-strategies-page":pe[r.value]||""}),I=e(!1),V=e({}),O=e([]),F=e(""),X=e([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),U=e("day"),H=e("all");t([r,d],function(){const pe=document.querySelector(".main-content");pe&&(pe.scrollTop=0)});const K=e(!1),q=e("kline"),a=e(null),E=e(!1),n=e(localStorage.getItem("qc_detail_mode")||"split"),p=e(window.innerWidth<=1024),J=v(()=>n.value==="split"&&!p.value);function N(pe){n.value=pe;try{localStorage.setItem("qc_detail_mode",pe)}catch{}}window.addEventListener("resize",()=>{p.value=window.innerWidth<=1024});const x=35,m=e(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function A(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",m.value?m.value+"px":x+"%")}A();function w(pe){const xe=Math.max(1,Math.min(pe,2e3));m.value=xe,A();try{localStorage.setItem("qc_split_width",String(xe))}catch{}}function j(pe){if(m.value)return m.value;const xe=pe?pe.getBoundingClientRect().width:0;return Math.max(200,Math.floor(xe*x/100))}let te=null;function re(pe,xe){if(!xe||p.value)return;pe.preventDefault();const Le=xe.getBoundingClientRect().width;te={startX:pe.clientX,startW:j(xe),minW:Math.max(200,Math.floor(Le*x/100)),maxW:Math.floor(Le/2)},document.body.classList.add("qc-split-resizing")}function se(pe){if(!te)return;const xe=pe.clientX-te.startX;let Le=te.startW+xe;Le=Math.max(te.minW,Math.min(Le,te.maxW)),m.value=Le,A();try{localStorage.setItem("qc_split_width",String(Le))}catch{}}function le(){te&&(te=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",se),document.addEventListener("mouseup",le));function Y(pe){const xe=pe.target&&pe.target.closest?pe.target.closest("[data-split-resize]"):null;if(!xe)return;const Le=xe.closest("[data-split-root]");re(pe,Le)}typeof document<"u"&&document.addEventListener("mousedown",Y,!0);const ie={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},qe=e({});function ee(pe,xe){return ie[xe]||xe}function $(pe){const xe=b.find(h=>h.key===pe);if(!xe||!xe.subPages||!xe.subPages.length)return;if(!(qe.value[pe]||[]).length){const h=xe.subPages[0];qe.value=Object.assign({},qe.value,{[pe]:[{subPage:h,title:ee(pe,h)}]})}}function be(pe,xe){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=ee(pe,xe);if(Le){const z=Le.openTab(qe.value,pe,xe,h);qe.value=z.groups}else{const z=qe.value[pe]||[];z.some(G=>G.subPage===xe)||(qe.value=Object.assign({},qe.value,{[pe]:z.concat([{subPage:xe,title:h}])}))}l(pe,xe)}function B(pe,xe){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=d.value;let z=null;if(Le)z=Le.closeTab(qe.value,pe,xe,h),qe.value=z.groups;else{const de=qe.value[pe]||[];qe.value=Object.assign({},qe.value,{[pe]:de.filter(Te=>Te.subPage!==xe)})}if(!(qe.value[pe]||[]).length){$(pe);const de=b.find(Ce=>Ce.key===pe),Te=de&&de.subPages&&de.subPages[0];Te&&l(pe,Te);return}const ce=z?z.nextActive:null;ce&&l(pe,ce)}function me(pe,xe){if(!(qe.value[pe]||[]).some(h=>h.subPage===xe)){be(pe,xe);return}l(pe,xe)}t([r,d],([pe,xe])=>{$(pe);const Le=qe.value[pe]||[];xe&&!Le.some(h=>h.subPage===xe)&&(qe.value=Object.assign({},qe.value,{[pe]:Le.concat([{subPage:xe,title:ee(pe,xe)}])}))},{immediate:!0});const ve=function(pe){if(!(pe.ctrlKey&&pe.key==="Tab"))return;const xe=r.value,Le=qe.value[xe]||[];if(Le.length<=1)return;pe.preventDefault();const h=d.value,z=Math.max(0,Le.findIndex(de=>de.subPage===h)),G=pe.shiftKey?(z-1+Le.length)%Le.length:(z+1)%Le.length,ce=Le[G];ce&&me(xe,ce.subPage)};window.addEventListener("keydown",ve);const Z=e({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),ue=e("light"),Ee=[45,220,0,140,270,320,180,25,250,-1],we={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},Ne=e(45),We=e(function(){const pe=window.__quantModules&&window.__quantModules.preferences;return pe&&pe.getPreference&&pe.getPreference("theme")||"system"}());(function(){const pe=window.__quantModules&&window.__quantModules.preferences,xe=pe&&pe.getPreference&&pe.getPreference("theme_hue");xe!=null&&xe!==""&&(Ne.value=parseInt(xe,10))})();const fe=e("comfortable");(function(){const pe=window.__quantModules&&window.__quantModules.preferences;pe&&pe.applyDensity&&(fe.value=pe.applyDensity()||"comfortable")})();function oe(pe){return pe<0?"hsl(0, 0%, 46%)":"hsl("+pe+", 75%, 42%)"}function ye(pe){return we[pe]||"自定义 "+pe}const Ve=e(""),Oe=e([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),$e=e({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),he=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Se=e({day:[],week:[],month:[],year:[]}),Ae=e({});function ze(pe,xe){let Le=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(Le=window.__quantModules.themes.applyTheme(pe,xe)),ue.value=Le&&Le.mode?Le.mode:pe==="dark"||pe==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ye(pe,xe){const Le=window.__quantModules&&window.__quantModules.preferences;if(!(!Le||!Le.setPreferences))try{Le.setPreferences({theme:pe}),xe!=null&&xe!==""&&Le.setPreferences({theme_hue:parseInt(xe,10)})}catch{}}function Ue(pe,xe){ze(pe,xe),xe!=null&&xe!==""&&(Ne.value=parseInt(xe,10));const Le=window.__quantModules&&window.__quantModules.themes;let h=pe;Le&&Le.LEGACY_MAP&&Le.LEGACY_MAP[pe]&&(h=Le.LEGACY_MAP[pe][0]),h==="light"||h==="dark"||h==="system"?We.value=h:We.value=ue.value,h==="system"&&(h=ue.value),Ye(h,xe),c.value&&(fetch(`/api/users/${c.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:h})}),c.value.theme=h,localStorage.setItem("quant_user",JSON.stringify(c.value)))}function Qe(pe){const xe=window.__quantModules&&window.__quantModules.preferences,Le=xe&&xe.getPreference?xe.getPreference("theme_hue"):null;Ue(pe,Le)}function Ze(pe){const xe=window.__quantModules&&window.__quantModules.preferences;!xe||!xe.applyDensity||(fe.value=xe.applyDensity(pe)||"comfortable",xe.setPreference&&xe.setPreference("info_density",fe.value))}function lt(pe){Ne.value=parseInt(pe,10);const xe=window.__quantModules&&window.__quantModules.preferences,Le=xe&&xe.getPreference&&xe.getPreference("theme")||"light";Ue(Le,Ne.value)}function gt(){const pe=window.QuantSessionRestore;pe&&pe.save({page:r.value,sub:d.value||""})}return{backtestStrategies:P,backtestStrategy:_,backtestRange:M,backtestCapital:S,backtestRunning:k,backtestResult:T,backtestError:C,runBacktest:f,currentPageName:L,lazyTick:y,pageComp:D,showUserMenu:I,dashboardData:V,healthMetrics:O,dashboardDate:F,views:X,currentView:U,statusFilter:H,stockDetailVisible:K,stockDetailTab:q,stockDetail:a,stockDetailLoading:E,detailDisplayMode:n,setDetailDisplayMode:N,isNarrow:p,detailSplitEnabled:J,splitWidth:m,setSplitWidth:w,SPLIT_DEFAULT_PCT:x,subPageNames:ie,tabGroups:qe,openTab:be,closeTab:B,activateTab:me,_onTabKeydown:ve,themes:Z,currentTheme:ue,themeHues:Ee,themeHueNames:we,themeHue:Ne,themeMode:We,density:fe,hueColor:oe,hueName:ye,applyTheme:ze,changeTheme:Ue,changeThemeMode:Qe,changeDensity:Ze,changeThemeHue:lt,searchKeyword:Ve,strategyList:Oe,strategyFilter:$e,strategyFilterOptions:he,strategyFilterCounts:Se,expandedStrategies:Ae,saveSessionState:gt}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.detail={create:function(s){const{ref:e,computed:v,nextTick:t,stockDetail:r,stockDetailTab:d,stockDetailVisible:b,stockDetailLoading:o,rememberDialogTrigger:l,getIsMobile:g,getIndexDetail:c,getIndexDetailVisible:P,getMarkKlineLoaded:_,getAiResult:M,getLoadLastEvaluation:S,getSelectedDateRef:k,getRefreshStockScore:T,getAnimateScoreEntrance:C}=s,u=e(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function i(se){u.value=!!se;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",se?"show":"hide")}catch{}}const f=v(()=>{const se=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return u.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...se]:se}),R=e("daily");(function(){try{const le=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(le==="weekly"||le==="monthly")&&(R.value=le)}catch{}})();const L=e(!1),y=e(""),D=e(!1),I=e(!1),V=e({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),O=["MA5","MA10","MA20","MA60"],F=e(!1);let X=0;async function U(se){if(!r.value)return!1;const le=++X;L.value=!0,R.value=se;try{const ie=await(await fetch(`/api/market/kline/${r.value.stock}?period=${se}&limit=60`)).json();if(!ie.success||!ie.data)throw new Error(ie.message||"数据获取失败");return y.value=ie.degraded_from?"分钟数据("+ie.degraded_from+")暂不可用, 已降级展示日线":"",_()(r.value.stock),le!==X?!1:(d.value!=="kline"||(I.value=!0,await t(),window.__quantModules.charts.renderKlineTo("stockKlineChart",ie.data,se,!1,{isMobile:g().value,onLegend:qe=>{Object.keys(V.value).forEach(ee=>{ee in qe&&(V.value[ee]=!!qe[ee])})}}),E()),!0)}catch(Y){return console.error("[kline] 加载失败:",r.value&&r.value.stock,se,Y),d.value==="kline"&&(I.value=!1,y.value="",ElementPlus.ElMessage.error("K线加载失败: "+(Y&&Y.message?Y.message:"数据源不可达，请重试"))),!1}finally{L.value=!1}}async function H(se){if(c().value){D.value=!0,R.value=se;try{const Y=await(await fetch(`/api/market/kline/${c().value.code}?period=${se}&limit=60`)).json();if(!Y.success||!Y.data)throw new Error(Y.message||"数据获取失败");F.value=!0,await t(),window.__quantModules.charts.renderKlineTo("indexKlineChart",Y.data,se,!0,{isMobile:g().value,onLegend:ie=>{Object.keys(V.value).forEach(qe=>{qe in ie&&(V.value[qe]=!!ie[qe])})}}),E()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{D.value=!1}}}async function K(se){if(!I.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await U(se)}async function q(se){if(!F.value){ElementPlus.ElMessage.info("请先加载K线");return}await H(se)}function a(se){const le=(b.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(P().value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);le&&le.dispatchAction({type:"legendToggleSelect",name:se})}function E(){["K线","MA5","MA10","MA20","MA60"].forEach(se=>{V.value[se]=!0})}async function n(se){R.value=se,await H(se)}async function p(){const se=await fetch("/api/system/metrics");if(!se.ok)throw new Error("metrics "+se.status);const le=await se.json(),Y=Array.isArray(le)?le:le&&le.data_sources||[];healthMetrics.value=Y}let J=null;function N(se){J={code:se,ts:Date.now()}}function x(se){return!!(J&&Date.now()-J.ts<4e3&&(se==null||J.code===se))}let m=0;async function A(se){const le=++m;l(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,""),M().value=null,R.value="daily",I.value=!1,d.value="kline",r.value=null,o.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),b.value=!0,t(()=>C()());try{const Y=await fetch(`/api/calendar/stock/${se}?date=${k().value}`);if(le!==m)return;r.value=await Y.json(),r.value&&r.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,r.value.name)}catch{if(le!==m)return;ElementPlus.ElMessage.error("加载失败"),r.value={stock:se,name:"",total_days:0}}finally{le===m&&(o.value=!1)}setTimeout(async()=>{await U("daily"),T()()},500),S()(se)}const w={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},j={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function te(se){return w[se]||"var(--text-tertiary)"}function re(se){return j[se]||"var(--bg-hover)"}return{klineShowMinutes:u,toggleKlineShowMinutes:i,klinePeriods:f,currentKlinePeriod:R,klineLoading:L,klineDegradeNote:y,indexKlineLoading:D,stockKlineLoaded:I,klineMaVisible:V,MA_LINES:O,indexKlineLoaded:F,loadStockKline:U,loadIndexKline:H,switchKlinePeriod:K,switchIndexKlinePeriod:q,toggleKlineMa:a,resetKlineMaVisible:E,loadIndexKlineWithPeriod:n,loadHealthMetrics:p,markExternalStock:N,externalStockActive:x,showStockDetail:A,levelColor:te,levelBg:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.runtime={create:function(s){const{watch:e,onMounted:v,onUnmounted:t,lazyTick:r,currentPage:d,currentSubPage:b,hapticFeedback:o,allMenuDefs:l,saveSessionState:g,_onTabKeydown:c,handleGlobalKeydown:P,runOnMounted:_,startAutoRefresh:M,loadMerrillTimeline:S,cancelPoolSignals:k,loadDashboardCached:T,selectedDate:C,loadConsensusData:u,loadStrategyRecommendations:i,loadAiUsage:f,loadAiHistory:R,strategyFilterCounts:L,consensus:y,currentUser:D,loadUsers:I,loadFeishuConfig:V,loadTushareConfig:O,loadSystemStatus:F,loadAiConfig:X,loadRateLimit:U,checkTushareConnection:H}=s;window.__quantGoPage=async(q,a)=>{try{const E=window.__lazyLoaders&&window.__lazyLoaders[q];E&&await E()}catch(E){console.warn("[lazy] 页面组件加载失败",q,E)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(E=>{E&&E.name&&!E.__quantRegistered&&(window.__quantApp.component(E.name,E),E.__quantRegistered=!0)}),r&&r.value++,d.value=q,a&&(b.value=a)};let K;e(d,async q=>{var a;o("light"),g();try{const E=l.find(function(n){return n.key===q});document.title=(E?E.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",q),q!=="calendar"&&typeof k=="function"&&k();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:q})}).catch(()=>{})}catch(E){console.warn("pageView track failed:",E)}if(K&&(clearInterval(K),K=null),q==="strategies")await T(),K=setInterval(()=>{T().catch(()=>{})},5*60*1e3);else if(q==="calendar")C.value&&await u();else if(q==="ai")i(),f(),await R();else if(q==="system"){if(!C.value){const n=await(await fetch("/api/dashboard")).json(),p=n.data||n;p.latest_date&&(C.value=p.latest_date)}if(C.value){const E=["day","week","month","year"];for(const n of E)try{const J=await(await fetch(`/api/view/${n}/${C.value}?status=all`)).json();L.value[n]=J.stocks||[]}catch(p){console.warn("loadConsensusData view load failed:",p)}(!y.value||y.value.length===0)&&(y.value=L.value.day||[])}((a=D.value)==null?void 0:a.role)==="admin"&&(await I(),await V(),await O(),await F(),await X(),await U(),H(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(H,36e5)))}}),v(async()=>{await _()}),M(),S(),t(()=>{K&&clearInterval(K),window.removeEventListener("keydown",P),window.removeEventListener("keydown",c)})}}})();(function(){window.createAppLogic=function(){const{ref:s,computed:e,onMounted:v,onUnmounted:t,watch:r,nextTick:d}=Vue,b=window.__quantAppLogic.shell.create({ref:s,computed:e,watch:r}),{configChanged:o,locale:l,t:g,changeLanguage:c,sanitizeHtml:P,keyClick:_,rememberDialogTrigger:M,restoreDialogFocus:S,focusFirstInDialog:k,isOnline:T,hapticFeedback:C,sidebarCollapsed:u,toggleSidebar:i,groupsConfig:f,allMenuDefs:R,menus:L,loadGroupConfig:y,currentPage:D,currentSubPage:I,navMode:V,setNavMode:O,shortcutHelpItems:F,navigateTo:X,ensureVisiblePage:U,currentUser:H}=b,K=useMerrillClock(),{merrillData:q,merrillStagesConfig:a,showMerrillDetail:E,merrillDetailData:n,merrillClockConfig:p,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:x,stages:m,indicatorList:A,dimensionScoreList:w,detailDimensionScoreList:j,confidenceColor:te,timelineStages:re,clockPosition:se,merrillProgressStyle:le,FULL_CYCLE_MONTHS:Y,getStageAngle:ie,getCycleProgress:qe,getCurrentStageMonths:ee,getStageTotalMonths:$,isStageCompleted:be,getCharLabel:B,getAssetName:me,getRankColor:ve,fetchMerrillStages:Z,fetchMerrillClock:ue,merrillError:Ee,loadMerrillTimeline:we,showTimelineStage:Ne,merrillTimeline:We,timelineLoading:fe,showStageDetail:oe,saveMerrillClockConfig:ye,doMerrillReevaluate:Ve,startAutoRefresh:Oe,stopAutoRefresh:$e,merrillSnapshots:he,merrillSnapshotsTotal:Se,fetchMerrillSnapshots:Ae}=K,ze=window.__quantAppLogic.workspace.create({ref:s,computed:e,watch:r,currentPage:D,currentSubPage:I,allMenuDefs:R,menus:L,navigateTo:X,ensureVisiblePage:U,currentUser:H}),{backtestStrategies:Ye,backtestStrategy:Ue,backtestRange:Qe,backtestCapital:Ze,backtestRunning:lt,backtestResult:gt,backtestError:pe,runBacktest:xe,currentPageName:Le,lazyTick:h,pageComp:z,showUserMenu:G,dashboardData:ce,healthMetrics:de,dashboardDate:Te,views:Ce,currentView:Pe,statusFilter:Fe,stockDetailVisible:je,stockDetailTab:tt,stockDetail:ht,stockDetailLoading:Xe,detailDisplayMode:Ge,setDetailDisplayMode:pt,isNarrow:ae,detailSplitEnabled:ne,splitWidth:Je,setSplitWidth:ft,SPLIT_DEFAULT_PCT:wt,subPageNames:dt,tabGroups:yt,openTab:xt,closeTab:Yt,activateTab:Mt,_onTabKeydown:At,themes:Dt,currentTheme:vt,themeHues:zt,themeHueNames:jt,themeHue:Ct,themeMode:Lt,density:Qt,hueColor:Xt,hueName:Pt,applyTheme:It,changeTheme:Jt,changeThemeMode:Zt,changeDensity:W,changeThemeHue:Me,searchKeyword:He,strategyList:Ie,strategyFilter:at,strategyFilterOptions:it,strategyFilterCounts:st,expandedStrategies:Rt,saveSessionState:Vt}=ze,ea=window.__quantAppLogic.detail.create({ref:s,computed:e,nextTick:d,stockDetail:ht,stockDetailTab:tt,stockDetailVisible:je,stockDetailLoading:Xe,rememberDialogTrigger:M,getIsMobile:()=>bn,getIndexDetail:()=>Ya,getIndexDetailVisible:()=>xa,getMarkKlineLoaded:()=>As,getAiResult:()=>Da,getLoadLastEvaluation:()=>Aa,getSelectedDateRef:()=>Ot,getRefreshStockScore:()=>Ca,getAnimateScoreEntrance:()=>qa}),{klineShowMinutes:$t,toggleKlineShowMinutes:Ht,klinePeriods:ta,currentKlinePeriod:Bt,klineLoading:ca,klineDegradeNote:da,indexKlineLoading:ua,stockKlineLoaded:rt,klineMaVisible:kt,MA_LINES:qt,indexKlineLoaded:Tt,loadStockKline:Nt,loadIndexKline:va,switchKlinePeriod:Q,switchIndexKlinePeriod:_e,toggleKlineMa:et,resetKlineMaVisible:aa,loadIndexKlineWithPeriod:ja,loadHealthMetrics:ka,markExternalStock:Js,externalStockActive:$s,showStockDetail:Va,levelColor:Xs,levelBg:Zs}=ea,Ha=()=>Oa,en=()=>ds,tn=()=>Ao,an=()=>pa,sn=()=>Ra,nn=()=>Ot,ln=window.__quantAppLogic.data.create({currentView:Pe,statusFilter:Fe,dashboardData:ce,loadHealthMetrics:ka,getLoadDashboardData:Ha,getLastRefreshTime:en,getFetchPoolSignals:tn}),{loading:Ba,loadingView:on,viewCache:rn,dates:ma,selectedDate:Ot,lastLoadTime:Ka,consensus:ia,viewNote:cn,loadDates:Wa,refreshCalendarData:Ua,exportCSV:Ga,loadConsensusData:oa,loadDashboardCached:_a,consensusError:dn}=ln,un=window.__quantAppLogic.market.create({currentKlinePeriod:Bt,loadIndexKline:va,rememberDialogTrigger:M,menus:L,currentPage:D,currentSubPage:I,stockDetail:ht,selectedDate:Ot}),{marketData:vn,marketError:mn,indexDetailVisible:xa,indexDetail:Ya,indexAiResult:pn,indexAiLoading:fn,fetchMarketData:Sa,showIndexDetail:gn,loadCachedIndexEval:hn,doIndexAiEvaluate:yn,disposeStockKline:Qa,isMobile:bn,zoomKlineRange:wn,scoreAnimating:kn,scoreDelta:_n,scorePulse:xn,refreshStockScore:Ca,animateScoreEntrance:qa,onTouchStart:Sn,onTouchEnd:Cn}=un,qn=window.__quantAppLogic.ops.create({navigateTo:X,currentPage:D,currentSubPage:I}),{feishuConfig:Ja,feishuTestStatus:En,feishuTestMessage:Mn,testFeishuWebhook:Dn,saveFeishuConfig:Tn,aiFabHidden:Pn,openAiFab:$a,strategyRecommendations:Rn,aiUsage:An,loadStrategyRecommendations:Xa,loadAiUsage:Ea,sysMonitor:zn,analyticsRank:Ln,analyticsDays:In,loadSysMonitor:Za,loadAnalytics:es,sysMonitorError:Nn,healthDetail:On,loadHealthDetail:ts,healthDetailError:Fn,reviewTriggering:jn,triggerMarketReview:Vn,factCheck:Hn,factCheckRunning:Bn,loadFactCheck:as,triggerFactCheck:Kn,factCheckError:Wn,backups:Un,backupCreating:Gn,loadBackups:ss,createBackup:Yn,restoreBackup:Qn,reportExporting:Jn,reportExportMsg:$n,exportReport:Xn,tourVisible:Zn,tourStep:el,tourSteps:tl,maybeShowTour:al,skipTour:sl,finishTour:nl,feedbackText:ll,feedbackSubmitting:il,submitFeedback:ol}=qn,rl=window.__quantAppLogic.nav.create({currentView:Pe,selectedDate:Ot,dates:ma,loadConsensusData:oa,hapticFeedback:C}),{viewUnit:cl,datePickerType:dl,dateFormat:ul,canNavPrev:vl,canNavNext:ml,switchView:ns,navigateDate:ls,disabledDate:pl,onDateChange:fl}=rl,gl=window.__quantAppLogic.keys.create({menus:L,subPageNames:dt,navigateTo:X,currentPage:D,currentSubPage:I,currentView:Pe,navigateDate:ls,switchView:ns,getLoadDashboardData:Ha,refreshCalendarData:Ua,getLoadAiHistory:an,exportCSV:Ga,getShowBatchEvaluate:sn,openAiFab:$a,toggleSidebar:i,showStockDetail:Va,getSelectedDate:nn,markExternalStock:Js}),{searchQuery:hl,searchStocks:yl,onSearchSelect:bl,shortcutHelpVisible:is,commandPaletteVisible:os,handleGlobalKeydown:rs}=gl,wl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:rt,stockDetailVisible:je,stockDetailTab:tt,stockDetail:ht,disposeStockKline:Qa}):{},{chatSessions:kl,chatHistoryView:_l,selectedChatIds:xl,expandedChatDates:Sl,expandedChatMonths:Cl,expandedChatStocks:ql,chatHistoryLoading:El,chatHistoryError:Ml,allChatSessionsFlat:Dl,chatGroupedByDate:Tl,chatGroupedByMonth:Pl,chatGroupedByStock:Rl,toggleSelectChat:Al,toggleSelectChatDate:zl,toggleSelectChatMonth:Ll,toggleSelectChatStock:Il,toggleChatDateExpand:Nl,toggleChatMonthExpand:Ol,toggleChatStockExpand:Fl,selectAllChatSessions:jl,deleteSelectedChatSessions:Vl,viewChatSession:Hl,loadChatHistory:cs,deleteChatSession:Bl,renderMarkdown:Kl,stockChatInput:Wl,stockChatMessages:Ul,stockChatLoading:Gl,stockChatError:Yl,askStockSend:Ql,askStockQuick:Jl}=wl,$l=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:H,applyTheme:It,allMenuDefs:R,loadGroupConfig:y}):{},{userList:Xl,userSearch:Zl,groupFilter:ei,userPageTab:ti,expandedGroups:ai,addMemberGroupMap:si,filteredUsers:ni,toggleGroupExpand:li,removeMemberFromGroupInline:ii,addMemberToGroupInline:oi,changeUserGroup:ri,showAddUser:ci,editingUser:di,userForm:ui,savingUser:vi,editingGroup:mi,menuConfigDialog:pi,memberDialog:fi,groupEditForm:gi,subPageCache:hi,showAddGroup:yi,addGroupForm:bi,savingGroup:wi,groupMembers:ki,addMemberUsername:_i,selectedMemberGroup:xi,subPageSectionExpanded:Si,toggleSubPageSection:Ci,getGroupMemberCount:qi,getMenuEnabledCount:Ei,groupCount:Mi,openMemberManager:Di,loadGroupMembers:Ti,addMemberToGroup:Pi,removeMemberFromGroup:Ri,availableUsersForGroup:Ai,onParentToggle:zi,openMenuConfig:Li,saveMenuConfig:Ii,deleteGroupConfig:Ni,createGroup:Oi,allGroups:Fi,getGroupName:ji,loadAllGroups:Ma,loadUsers:ga,editUser:Vi,saveUser:Hi,deleteUser:Bi,toggleUserEnabled:Ki,resetUserPassword:Wi}=$l,Ui=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:ia,currentPage:D,currentSubPage:I,dashboardData:ce,searchKeyword:He,statusFilter:Fe,strategyFilter:at,strategyFilterCounts:st}):{},{applyStrategyFilter:_f,statusCounts:Gi,stockPool:Yi,strategyDistribution:Qi,strategyPreviewCount:Ji,saveStrategyFilter:$i,filteredConsensusRank:Xi,currentPoolSize:Zi,filteredStrategyCounts:eo,poolChangeBadge:to,timeBarPercent:ao,lastRefreshTime:ds,navigateToStrategyFilter:so}=Ui,no=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:o,consensus:ia}):{},{aiResult:Da,lastEvalTime:lo,evalHistoryComparison:io,checklistItems:oo,aiHistory:us,selectedHistoryIds:vs,expandedDates:ms,expandedMonths:ro,expandedStocks:ps,poolSignals:co,toggleMonthExpand:uo,aiHistoryView:vo,selectedWatchlistCodes:fs,showAutoEvaluateSettings:gs,savingConfig:hs,autoEvaluateScope:ys,aiVendors:mo,aiCatalog:po,aiModelsError:fo,testingAllModels:go,savingAiModels:ho,loadAiVendors:ha,loadAiCatalog:bs,saveAiVendors:ws,saveAiModels:yo,testVendorModel:bo,testAllVendorModels:wo,fetchVendorModels:ko,addVendorFromCatalog:_o,addCustomVendor:xo,addVendorModel:So,removeVendorModel:Co,removeVendor:qo,toggleVendorKeyReveal:Eo,toggleVendorEdit:Mo,autoEvaluateConfig:Ta,aiLoading:Pa,aiEvalStage:ks,aiEvalElapsed:_s,aiEvalError:xs,showBatchEvaluate:Ra,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ds,batchResults:Ts,batchEvalErrors:Ps,aiConfig:Rs,selectedPreset:Do,providerInfo:To,aiPresets:xf,applyPreset:Po,onProviderChange:Ro,fetchPoolSignals:Ao,cancelPoolSignals:zo,loadLastEvaluation:Aa}=no,Lo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:H,selectedDate:Ot,stockDetail:ht,stockDetailTab:tt,stockDetailVisible:je,stockDetailLoading:Xe,stockKlineLoaded:rt,viewCache:rn,animateScoreEntrance:qa,loadStockKline:Nt,refreshStockScore:Ca,disposeStockKline:Qa,aiHistory:us,aiLoading:Pa,aiEvalStage:ks,aiEvalElapsed:_s,aiEvalError:xs,aiResult:Da,loadLastEvaluation:Aa,autoEvaluateConfig:Ta,autoEvaluateScope:ys,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ds,batchResults:Ts,batchEvalErrors:Ps,expandedDates:ms,expandedStocks:ps,savingConfig:hs,selectedHistoryIds:vs,selectedWatchlistCodes:fs,showAutoEvaluateSettings:gs,showBatchEvaluate:Ra}):{},{quickEvalStock:Io,evalStrategy:No,watchlistSort:Oo,watchlist:Fo,watchlistCodes:jo,sortedWatchlist:Vo,getWatchlistScore:Ho,getLatestScore:Sf,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:As,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,dataRefreshConfig:Qo,dataRefreshReloading:Jo,dataRefreshSaving:$o,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:nr,doAiEvaluate:lr,loadAiHistory:pa,deleteSingleHistory:ir,toggleSelectHistory:or,clearSelection:rr,clearWatchlistSelection:cr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,batchRemoveWatchlist:vr,toggleSelectWatchlist:mr,selectAllHistory:pr,selectAllWatchlist:fr,deleteSelectedHistory:gr,loadAutoEvaluateConfig:zs,saveAutoEvaluateConfig:hr,loadWatchlist:Ls,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,toggleWatchlist:kr,showStockKline:_r,preloadingKline:xr,preloadWatchlistKline:Is,watchlistEvaluate:Sr,batchEvaluateWatchlist:Cr,batchEvaluateSelected:qr,searchStockForWatchlist:Er,loadDataRefreshConfig:Ns,saveDataRefreshConfig:Mr,triggerDataReload:Dr,triggerDataPull:Tr,dataPullRunning:Pr,groupedByDate:Rr,aiHistoryByStock:Ar,groupedByMonth:zr,aiHistoryStockCount:Lr,scoreDistribution:Ir,quickEvaluate:Nr,toggleDateExpand:Or,toggleSelectDate:Fr,toggleSelectMonth:jr,toggleStockExpand:Vr,toggleSelectStock:Hr,registerTrendChart:Br,viewAiResult:Kr,doBatchEvaluate:Wr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Qr,disconnectRealtimeQuotes:Jr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc}=Lo,nc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Ye}):{},{btStrategyOptions:lc,btSelectedStrategies:ic,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:pc,btMetrics:fc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:kc,registerBacktestNavChart:_c,btFmtNum:xc}=nc,Sc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:o,aiConfig:Rs,aiLoading:Pa,feishuConfig:Ja,currentTheme:vt,changeTheme:Jt,autoEvaluateConfig:Ta,currentUser:H,strategyFilter:at,applyTheme:It,dashboardData:ce,lastRefreshTime:ds,saveAiModels:yo}):{},{configSaving:Cc,globalConfigDirty:qc,lastSavedTime:Ec,feishuConfigOriginal:Cf,aiConfigOriginal:qf,tushareConfigOriginal:Ef,tushareConfig:Mc,tushareStatus:Dc,datasourceConfig:Tc,datasourceStatus:Pc,syncingData:Rc,stockCount:Ac,tradeDateCount:zc,aiStatus:Lc,appVersion:Os,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:Fc,loadRateLimit:za,saveRateLimit:jc,saveAiConfig:Vc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,checkTushareConnection:La,syncStockData:Yc,loadTushareConfig:Fs,loadDatasourceConfig:js,saveDatasourceConfig:Qc,testDatasource:Jc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,loadFeishuConfig:Ia,loadAiConfig:ya,loadUserConfig:Vs,loadSystemStatus:Na,loadDashboardData:Oa,overviewError:Zc,feishuConfigError:ed}=Sc,td=window.__quantAppLogic.auth.create({currentUser:H,loadUserConfig:Vs,loadDates:Wa,loadDashboardData:Oa,loadDashboardCached:_a,loadHealthMetrics:ka,loadConsensusData:oa,applyTheme:It,maybeShowTour:al,loadAiVendors:ha,loadGroupConfig:y,groupsConfig:f}),{loginForm:Hs,logining:Bs,guestLogining:Ks,showChangePassword:ad,changePasswordForm:sd,changingPassword:nd,showSetupWizard:Ws,setupForm:ld,setupStep:id,checkSetupWizard:od,completeSetupWizard:rd,resetSetupWizard:cd,handleLogin:dd,handleGuestLogin:ud,handleLogout:vd,doChangePassword:md}=td;window.__quantAppLogic.watch.register({strategyFilter:at,currentView:Pe,statusFilter:Fe,currentPage:D,currentSubPage:I,menus:L,currentUser:H,strategyFilterCounts:st,lazyTick:h,dates:ma,selectedDate:Ot,consensus:ia,loadConsensusData:oa,fetchMerrillClock:ue,fetchMarketData:Sa,loadWatchlist:Ls,loadAiHistory:pa,preloadWatchlistKline:Is,loadChatHistory:cs,loadSystemStatus:Na,checkTushareConnection:La,loadSysMonitor:Za,loadAnalytics:es,loadHealthDetail:ts,loadHealthMetrics:ka,loadAiUsage:Ea,loadFactCheck:as,loadAutoEvaluateConfig:zs,loadDatasourceConfig:js,loadFeishuConfig:Ia,loadAiConfig:ya,loadAiVendors:ha,loadRateLimit:za,loadDataRefreshConfig:Ns,loadBackups:ss,loadAllGroups:Ma,loadUsers:ga,stockDetailTab:tt,stockDetailVisible:je,stockKlineLoaded:rt,loadStockKline:Nt,currentKlinePeriod:Bt,showMerrillDetail:E,indexDetailVisible:xa,restoreDialogFocus:S});const pd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:rs,applyTheme:It,menus:L,currentPage:D,currentSubPage:I,currentView:Pe,currentKlinePeriod:Bt,selectedDate:Ot,dates:ma,loadDates:Wa,loadConsensusData:oa,loadDashboardCached:_a,appVersion:Os,themes:Dt,fetchMarketData:Sa,fetchMerrillStages:Z,fetchMerrillClock:ue,loadMerrillTimeline:we,showTimelineStage:Ne,merrillTimeline:We,timelineLoading:fe,loadAiConfig:ya,loadAiVendors:ha,loadAiCatalog:bs,currentUser:H,loadUserConfig:Vs,loadAutoEvaluateConfig:zs,loadGroupConfig:y,loadUsers:ga,loadAllGroups:Ma,loadAiHistory:pa}),{runOnMounted:fd}=pd;window.__quantAppLogic.runtime.create({watch:r,onMounted:v,onUnmounted:t,lazyTick:h,currentPage:D,currentSubPage:I,hapticFeedback:C,allMenuDefs:R,saveSessionState:Vt,_onTabKeydown:At,handleGlobalKeydown:rs,runOnMounted:fd,startAutoRefresh:Oe,loadMerrillTimeline:we,cancelPoolSignals:zo,loadDashboardCached:_a,selectedDate:Ot,loadConsensusData:oa,loadStrategyRecommendations:Xa,loadAiUsage:Ea,loadAiHistory:pa,strategyFilterCounts:st,consensus:ia,currentUser:H,loadUsers:ga,loadFeishuConfig:Ia,loadTushareConfig:Fs,loadSystemStatus:Na,loadAiConfig:ya,loadRateLimit:za,checkTushareConnection:La});function gd(ba,hd=2){return ba==null||ba===""||isNaN(Number(ba))?"--":Number(ba).toFixed(hd)}const Us={currentPage:D,pageComp:z,currentSubPage:I,sidebarCollapsed:u,menus:L,navMode:V,setNavMode:O,tabGroups:yt,openTab:xt,closeTab:Yt,activateTab:Mt,fmtNum:gd,sanitizeHtml:P,keyClick:_,isOnline:T,currentUser:H,allMenuDefs:R,t:g,locale:l,changeLanguage:c,currentPageName:Le,subPageNames:dt,searchQuery:hl,searchStocks:yl,onSearchSelect:bl,selectedDate:Ot,onDateChange:fl,disabledDate:pl,refreshCalendarData:Ua,exportCSV:Ga,viewNote:cn,loading:Ba,lastLoadTime:Ka,resetSetupWizard:cd,showChangePassword:ad,themes:Dt,currentTheme:vt,changeTheme:Jt,changeThemeMode:Zt,changeThemeHue:Me,handleLogout:vd,themeHues:zt,themeHueNames:jt,themeHue:Ct,themeMode:Lt,hueColor:Xt,hueName:Pt,density:Qt,changeDensity:W,marketData:vn,marketError:mn,merrillData:q,merrillError:Ee,merrillTimeline:We,timelineLoading:fe,merrillStagesConfig:a,fetchMerrillStages:Z,merrillSnapshots:he,merrillSnapshotsTotal:Se,healthMetrics:de,feishuConfig:Ja,feishuTestStatus:En,feishuTestMessage:Mn,shortcutHelpVisible:is,shortcutHelpItems:F,commandPaletteVisible:os,tourVisible:Zn,tourStep:el,tourSteps:tl,skipTour:sl,finishTour:nl,backups:Un,backupCreating:Gn,loadBackups:ss,createBackup:Yn,restoreBackup:Qn,reportExporting:Jn,reportExportMsg:$n,exportReport:Xn,sysMonitor:zn,analyticsRank:Ln,analyticsDays:In,loadSysMonitor:Za,loadAnalytics:es,sysMonitorError:Nn,healthDetail:On,loadHealthDetail:ts,healthDetailError:Fn,reviewTriggering:jn,triggerMarketReview:Vn,factCheck:Hn,factCheckRunning:Bn,loadFactCheck:as,triggerFactCheck:Kn,factCheckError:Wn,strategyRecommendations:Rn,aiUsage:An,loadStrategyRecommendations:Xa,loadAiUsage:Ea,aiFabHidden:Pn,openAiFab:$a,feedbackText:ll,feedbackSubmitting:il,submitFeedback:ol,backtestStrategies:Ye,backtestStrategy:Ue,backtestRange:Qe,backtestCapital:Ze,backtestRunning:lt,backtestResult:gt,backtestError:pe,runBacktest:xe,btStrategyOptions:lc,btSelectedStrategies:ic,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:pc,btMetrics:fc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:kc,registerBacktestNavChart:_c,btFmtNum:xc,fetchMarketData:Sa,fetchMerrillClock:ue,testFeishuWebhook:Dn,saveFeishuConfig:Tn,merrillClockConfig:p,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:x,saveMerrillClockConfig:ye,doMerrillReevaluate:Ve,dataRefreshConfig:Qo,dataRefreshReloading:Jo,dataRefreshSaving:$o,loadDataRefreshConfig:Ns,saveDataRefreshConfig:Mr,triggerDataReload:Dr,triggerDataPull:Tr,dataPullRunning:Pr,indexDetailVisible:xa,indexDetail:Ya,indexAiResult:pn,indexAiLoading:fn,loadCachedIndexEval:hn,showIndexDetail:gn,doIndexAiEvaluate:yn,klinePeriods:ta,currentKlinePeriod:Bt,klineLoading:ca,indexKlineLoading:ua,stockKlineLoaded:rt,indexKlineLoaded:Tt,klineDegradeNote:da,klineShowMinutes:$t,toggleKlineShowMinutes:Ht,loadStockKline:Nt,switchKlinePeriod:Q,loadIndexKline:va,switchIndexKlinePeriod:_e,zoomKlineRange:wn,MA_LINES:qt,klineMaVisible:kt,toggleKlineMa:et,scoreAnimating:kn,scoreDelta:_n,scorePulse:xn,refreshStockScore:Ca,animateScoreEntrance:qa,showMerrillDetail:E,merrillDetailData:n,showStageDetail:oe,getCharLabel:B,getAssetName:me,getRankColor:ve,levelColor:Xs,levelBg:Zs,timelineStages:re,getStageAngle:ie,getCycleProgress:qe,getCurrentStageMonths:ee,getStageTotalMonths:$,isStageCompleted:be,stages:m,indicatorList:A,dimensionScoreList:w,confidenceColor:te,views:Ce,currentView:Pe,statusFilter:Fe,loginForm:Hs,logining:Bs,guestLogining:Ks,dashboardData:ce,loadingView:on,dates:ma,consensus:ia,searchKeyword:He,stockDetailVisible:je,stockDetailTab:tt,stockDetail:ht,stockDetailLoading:Xe,detailDisplayMode:Ge,setDetailDisplayMode:pt,isNarrow:ae,detailSplitEnabled:ne,splitWidth:Je,setSplitWidth:ft,SPLIT_DEFAULT_PCT:wt,aiLoading:Pa,aiEvalStage:ks,aiEvalElapsed:_s,aiEvalError:xs,showBatchEvaluate:Ra,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ds,batchResults:Ts,batchEvalErrors:Ps,aiConfig:Rs,userList:Xl,showAddUser:ci,editingUser:di,userForm:ui,savingUser:vi,userSearch:Zl,filteredUsers:ni,groupFilter:ei,userPageTab:ti,expandedGroups:ai,addMemberGroupMap:si,toggleGroupExpand:li,removeMemberFromGroupInline:ii,addMemberToGroupInline:oi,changeUserGroup:ri,statusCounts:Gi,stockPool:Yi,poolSignals:co,aiResult:Da,aiHistory:us,groupedByDate:Rr,groupedByMonth:zr,expandedDates:ms,expandedMonths:ro,aiHistoryByStock:Ar,aiHistoryStockCount:Lr,expandedStocks:ps,aiHistoryView:vo,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:nr,scoreDistribution:Ir,quickEvalStock:Io,evalStrategy:No,checklistItems:oo,evalHistoryComparison:io,quickEvaluate:Nr,selectedHistoryIds:vs,showAutoEvaluateSettings:gs,savingConfig:hs,autoEvaluateConfig:Ta,autoEvaluateScope:ys,strategyList:Ie,toggleDateExpand:Or,toggleMonthExpand:uo,toggleSelectDate:Fr,toggleSelectMonth:jr,toggleSelectStock:Hr,toggleStockExpand:Vr,registerTrendChart:Br,selectedWatchlistCodes:fs,clearWatchlistSelection:cr,toggleSelectWatchlist:mr,selectAllHistory:pr,selectAllWatchlist:fr,batchRemoveWatchlist:vr,batchEvaluateSelected:qr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,viewUnit:cl,datePickerType:dl,dateFormat:ul,canNavPrev:vl,canNavNext:ml,handleLogin:dd,handleGuestLogin:ud,switchView:ns,navigateDate:ls,navigateTo:X,loadDashboardData:Oa,loadConsensusData:oa,showStockDetail:Va,consensusError:dn,overviewError:Zc,externalStockActive:$s,doAiEvaluate:lr,doBatchEvaluate:Wr,loadAiHistory:pa,loadLastEvaluation:Aa,lastEvalTime:lo,viewAiResult:Kr,saveAiConfig:Vc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,configSaving:Cc,configChanged:o,watchlist:Fo,watchlistCodes:jo,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,watchlistSort:Oo,sortedWatchlist:Vo,getWatchlistScore:Ho,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:As,loadWatchlist:Ls,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,searchStockForWatchlist:Er,toggleWatchlist:kr,batchEvaluateWatchlist:Cr,watchlistEvaluate:Sr,showStockKline:_r,preloadWatchlistKline:Is,preloadingKline:xr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Qr,disconnectRealtimeQuotes:Jr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc,toggleSelectHistory:or,clearSelection:rr,deleteSingleHistory:ir,deleteSelectedHistory:gr,saveAutoEvaluateConfig:hr,editUser:Vi,saveUser:Hi,deleteUser:Bi,loadUsers:ga,allGroups:Fi,loadAllGroups:Ma,getGroupName:ji,toggleUserEnabled:Ki,resetUserPassword:Wi,selectedPreset:Do,applyPreset:Po,onProviderChange:Ro,providerInfo:To,globalConfigDirty:qc,lastSavedTime:Ec,tushareConfig:Mc,tushareStatus:Dc,syncingData:Rc,stockCount:Ac,tradeDateCount:zc,aiStatus:Lc,appVersion:Os,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:Fc,loadRateLimit:za,saveRateLimit:jc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,syncStockData:Yc,loadTushareConfig:Fs,loadFeishuConfig:Ia,loadSystemStatus:Na,loadAiConfig:ya,feishuConfigError:ed,aiVendors:mo,aiCatalog:po,aiModelsError:fo,testingAllModels:go,savingAiModels:ho,loadAiVendors:ha,loadAiCatalog:bs,saveAiVendors:ws,saveAiModels:ws,testVendorModel:bo,testAllVendorModels:wo,fetchVendorModels:ko,addVendorFromCatalog:_o,addCustomVendor:xo,addVendorModel:So,removeVendorModel:Co,removeVendor:qo,toggleVendorKeyReveal:Eo,toggleVendorEdit:Mo,checkTushareConnection:La,datasourceConfig:Tc,datasourceStatus:Pc,loadDatasourceConfig:js,saveDatasourceConfig:Qc,testDatasource:Jc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,strategyFilter:at,strategyFilterOptions:it,strategyFilterCounts:st,strategyPreviewCount:Ji,saveStrategyFilter:$i,filteredConsensusRank:Xi,currentPoolSize:Zi,filteredStrategyCounts:eo,strategyDistribution:Qi,expandedStrategies:Rt,poolChangeBadge:to,timeBarPercent:ao,navigateToStrategyFilter:so,showUserMenu:G,toggleSidebar:i,groupsConfig:f,loadGroupConfig:y,editingGroup:mi,groupEditForm:gi,showAddGroup:yi,addGroupForm:bi,savingGroup:wi,menuConfigDialog:pi,memberDialog:fi,groupMembers:ki,addMemberUsername:_i,selectedMemberGroup:xi,subPageSectionExpanded:Si,toggleSubPageSection:Ci,getGroupMemberCount:qi,getMenuEnabledCount:Ei,groupCount:Mi,openMemberManager:Di,loadGroupMembers:Ti,addMemberToGroup:Pi,removeMemberFromGroup:Ri,availableUsersForGroup:Ai,subPageCache:hi,onParentToggle:zi,openMenuConfig:Li,saveMenuConfig:Ii,deleteGroupConfig:Ni,createGroup:Oi,changePasswordForm:sd,changingPassword:nd,doChangePassword:md,showSetupWizard:Ws,setupForm:ld,setupStep:id,checkSetupWizard:od,completeSetupWizard:rd,chatSessions:kl,chatHistoryView:_l,selectedChatIds:xl,expandedChatDates:Sl,expandedChatMonths:Cl,expandedChatStocks:ql,chatHistoryLoading:El,chatHistoryError:Ml,allChatSessionsFlat:Dl,chatGroupedByDate:Tl,chatGroupedByMonth:Pl,chatGroupedByStock:Rl,toggleSelectChat:Al,toggleSelectChatDate:zl,toggleSelectChatMonth:Ll,toggleSelectChatStock:Il,toggleChatDateExpand:Nl,toggleChatMonthExpand:Ol,toggleChatStockExpand:Fl,selectAllChatSessions:jl,deleteSelectedChatSessions:Vl,viewChatSession:Hl,loadChatHistory:cs,deleteChatSession:Bl,renderMarkdown:Kl,stockChatInput:Wl,stockChatMessages:Ul,stockChatLoading:Gl,stockChatError:Yl,askStockSend:Ql,askStockQuick:Jl,onTouchStart:Sn,onTouchEnd:Cn,hapticFeedback:C};let nt=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(nt=window.QuantStateRegistry.createStateRegistry(),nt.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),nt.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),nt.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),nt.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),nt.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),nt.attach("theme","currentTheme",vt),nt.attach("theme","themeMode",Lt),nt.attach("theme","themeHue",Ct),nt.attach("theme","density",Qt),nt.attach("theme","currentKlinePeriod",Bt),nt.attach("auth","currentUser",H),nt.attach("auth","loginForm",Hs),nt.attach("auth","logining",Bs),nt.attach("auth","guestLogining",Ks),nt.attach("auth","showSetupWizard",Ws),nt.attach("prefs","navMode",V),nt.attach("prefs","detailDisplayMode",Ge),nt.attach("prefs","splitWidth",Je),nt.attach("prefs","sidebarCollapsed",u),nt.attach("prefs","klineShowMinutes",$t),nt.attach("ui","currentPage",D),nt.attach("ui","currentSubPage",I),nt.attach("ui","currentView",Pe),nt.attach("ui","showUserMenu",G),nt.attach("ui","searchKeyword",He),nt.attach("ui","shortcutHelpVisible",is),nt.attach("ui","commandPaletteVisible",os),nt.attach("page","loading",Ba),nt.attach("page","dates",ma),nt.attach("page","selectedDate",Ot),nt.attach("page","consensus",ia),nt.attach("page","dashboardData",ce),nt.attach("page","lastLoadTime",Ka),Us.stateRegistry=nt),Us}})();na.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=Yv;window.__quantComponents.Header=Ym;window.__quantComponents.SubNav=op;window.__quantComponents.MobileNav=qp;window.__quantComponents.StockList=of;window.__quantComponents.DetailSplit=uf;window.__quantComponents.TopTabs=wf;window.__quantComponents.AppIcon=na;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default kf();
