var yd=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);import{aV as bd,L as ge,O as Yt,Z as wd,au as Tt,M as ke,P as Pe,aW as _d,a0 as He,_ as Be,F as ct,al as wt,S as rt,a1 as vt,X as Gt,ai as St,q as ra,o as wa,a8 as ja,r as kt,e as lt,av as kd,Y as pa,$ as sa,R as xd,aC as Ut,T as Sd,Q as Ot,p as Cd,n as qd}from"./vendor-vue-DDF9zi1T.js";import{e as Ed,E as Md,a as Td,b as Pd,c as Dd,z as Rd}from"./vendor-ep-VOop1zGa.js";import{C as zd,a as Ad,W as Ld,I as Id,S as Nd,B as Od,F as jd,b as Vd,c as Fd,d as Hd,e as Bd,f as Kd,P as Wd,g as Ud,h as Gd,i as Yd,T as Qd,j as Jd,L as $d,k as Xd,G as Zd,U as eu,l as tu,m as au,n as su,D as nu,o as lu,p as iu,M as ou,q as ru,R as cu,r as du,s as uu,K as vu,t as mu,u as fu,v as pu,w as gu,x as hu,y as yu,z as bu,A as wu,E as _u,H as ku,O as xu,J as Su,N as Cu,Q as qu,V as Eu,X as Mu,Y as Tu,Z as Pu,_ as Du,$ as Ru,a0 as zu,a1 as Au,a2 as Lu,a3 as Iu,a4 as Nu,a5 as Ou,a6 as ju,a7 as Vu,a8 as Fu,a9 as Hu,aa as Bu,ab as Ku,ac as Wu,ad as Uu,ae as Gu,af as Yu,ag as Qu,ah as Ju,ai as $u,aj as Xu,ak as Zu,al as ev,am as tv,an as av,ao as sv,ap as nv,aq as lv,ar as iv,as as ov,at as rv,au as cv,av as dv,aw as uv,ax as vv,ay as mv,az as fv,aA as pv,aB as gv,aC as hv,aD as yv,aE as bv,aF as wv,aG as _v,aH as kv,aI as xv,aJ as Sv,aK as Cv,aL as qv,aM as Ev,aN as Mv,aO as Tv,aP as Pv,aQ as Dv}from"./vendor-lucide-DidEUx9K.js";var _p=yd((Rp,De)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&t(y)}).observe(document,{childList:!0,subtree:!0});function m(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(o){if(o.ep)return;o.ep=!0;const d=m(o);fetch(o.href,d)}})();window.Vue=bd;const Qt=Ed||{};window.ElementPlus=Qt;Qt.ElMessage=Qt.ElMessage||Md;Qt.ElMessageBox=Qt.ElMessageBox||Td;Qt.ElNotification=Qt.ElNotification||Pd;Qt.ElLoading=Qt.ElLoading||Dd;window.ElementPlusLocaleZhCn={default:Rd};(function(){const s=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},m={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(a,S,n){return"hsl("+a+", "+S+"%, "+n+"%)"}function o(a,S,n){S=S/100,n=n/100;const f=function(x){return(x+a/30)%12},J=S*Math.min(n,1-n),N=function(x){return n-J*Math.max(-1,Math.min(f(x)-3,Math.min(9-f(x),1)))};return Math.round(255*N(0))+", "+Math.round(255*N(8))+", "+Math.round(255*N(4))}const d=5;function y(a,S,n){return o(a,S,n).split(",").map(function(f){return parseInt(f,10)})}function c(a){const S=function(n){return n=n/255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*S(a[0])+.7152*S(a[1])+.0722*S(a[2])}function i(a,S){const n=c(a),f=c(S),J=Math.max(n,f),N=Math.min(n,f);return(J+.05)/(N+.05)}function g(a,S,n){for(var f=8,J=92,N=0;N<26;N++){var x=(f+J)/2;c(y(a,S,x))<n?f=x:J=x}return Math.round(J*10)/10}function r(a,S,n,f,J){let N=38,x=76;for(let v=0;v<24;v++){const R=(N+x)/2;i(y(a,f,R),y(a,S,n))>=J?x=R:N=R}return Math.round(x*10)/10}function P(a,S){var n={};return S==="light"?(n["--qc-neutral-50"]=t(a,18,98),n["--qc-neutral-100"]=t(a,16,95),n["--qc-neutral-200"]=t(a,14,90),n["--qc-neutral-300"]=t(a,12,83),n["--qc-neutral-400"]=t(a,10,68),n["--qc-neutral-500"]=t(a,10,53),n["--qc-neutral-600"]=t(a,10,40),n["--qc-neutral-700"]=t(a,10,30),n["--qc-neutral-800"]=t(a,10,20),n["--qc-neutral-900"]=t(a,10,12),n["--qc-background"]=t(a,18,98),n["--qc-muted"]=t(a,16,95),n["--qc-border"]=t(a,12,72),n["--chart-axis"]=t(a,12,55),n["--chart-split"]=t(a,10,88),n["--qc-foreground"]=t(a,10,12),n["--qc-muted-foreground"]=t(a,9,38),n["--qc-nav-item-default"]=t(a,9,38),n["--qc-nav-item-hover"]=t(a,10,12),n["--qc-nav-group-label"]=t(a,9,40),n["--qc-nav-bg"]="#ffffff",n["--bg-page"]=t(a,20,97),n["--bg-stripe"]=t(a,20,97),n["--bg-card-header"]=t(a,24,96),n["--card-gradient-header"]="linear-gradient(135deg, "+t(a,24,96)+" 0%, #ffffff 100%)",n["--bg-hover"]=t(a,26,94),n["--bg-tertiary"]=t(a,14,93),n["--badge-gold-bg"]=t(a,26,96),n["--gold-bg"]=t(a,20,97),n["--border-light"]=t(a,22,89),n["--border-base"]=t(a,24,79),n["--border-color"]=t(a,14,88),n["--text-primary"]=t(a,12,12),n["--text-secondary"]=t(a,12,32),n["--text-tertiary"]=t(a,14,40),n["--text-disabled"]=t(a,9,_(a,9,T(a,18,98),25,70,!0,3.2)),n["--qc-card"]="#ffffff",n["--qc-popover"]="#ffffff",n["--qc-nav-border"]=t(a,12,72),n["--qc-nav-item-hover-bg"]=t(a,16,95),n["--qc-overlay"]="rgba(31, 29, 26, 0.5)",n["--bg-card"]="#ffffff",n["--surface"]="#ffffff",n["--border-heavy"]=t(a,22,72),n["--surface-canvas"]=t(a,18,98),n["--surface-card"]="#ffffff",n["--surface-raised"]="#ffffff",n["--surface-sunken"]=t(a,16,96),n["--surface-input"]="#ffffff",n["--surface-hover"]=t(a,26,94),n["--border-strong"]=t(a,22,72),n["--scrollbar-thumb"]="rgba("+o(a,12,72)+", 0.5)",n["--bg-page-rgb"]=o(a,20,97)):(n["--qc-background"]=t(a,10,8),n["--qc-card"]=t(a,11,11),n["--qc-popover"]=t(a,11,11),n["--qc-muted"]=t(a,12,14),n["--qc-border"]=t(a,14,30),n["--chart-axis"]=t(a,16,52),n["--chart-split"]=t(a,14,26),n["--qc-nav-bg"]=t(a,10,9),n["--qc-nav-border"]=t(a,13,22),n["--qc-nav-item-hover-bg"]=t(a,12,14),n["--bg-page"]=t(a,10,8),n["--bg-card"]=t(a,11,11),n["--bg-card-header"]=t(a,12,14),n["--bg-stripe"]=t(a,10,9),n["--bg-hover"]=t(a,12,14),n["--bg-tertiary"]=t(a,12,14),n["--border-light"]=t(a,13,18),n["--border-base"]=t(a,14,26),n["--border-heavy"]=t(a,16,38),n["--border-color"]=t(a,13,22),n["--surface"]=t(a,11,11),n["--surface-canvas"]=t(a,10,8),n["--surface-card"]=t(a,11,11),n["--surface-raised"]=t(a,12,14),n["--surface-sunken"]=t(a,12,9),n["--surface-input"]=t(a,12,9),n["--surface-hover"]=t(a,12,15),n["--border-strong"]=t(a,16,42),n["--scrollbar-thumb"]="rgba("+o(a,16,52)+", 0.5)",n["--bg-page-rgb"]=o(a,10,8),n["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),n}const w=4.6;var M=[255,255,255];function k(a){return o(a,10,8).split(",").map(function(S){return parseInt(S,10)})}function _(a,S,n,f,J,N,x){for(var v=x||w,R=f,b=J,O=0;O<24;O++){var ae=(R+b)/2,re=i(y(a,S,ae),n)>=v;N?re?R=ae:b=ae:re?b=ae:R=ae}return Math.round((N?R:b)*10)/10}function T(a,S,n){return o(a,S,n).split(",").map(function(f){return parseInt(f,10)})}function C(a){const S=g(a,75,.18),n=g(a,75,.26),f=g(a,70,.36),J=g(a,85,.12),N=o(a,75,S),x=_(a,68,M,14,62,!0),v=Math.max(12,x-5),R=Math.max(10,x-11),b=o(a,16,95).split(",").map(function(ie){return parseInt(ie,10)}),O=o(a,85,92).split(",").map(function(ie){return parseInt(ie,10)}),ae=_(a,78,b,10,58,!0,4.6),re=_(a,80,O,10,58,!0,4.6),se=Math.min(32,_(a,80,M,8,60,!0,4.6));return{...P(a,"light"),"--primary-color":t(a,75,S),"--primary-rgb":N,"--color-primary":t(a,75,S),"--qc-primary":t(a,75,S),"--qc-primary-50":t(a,90,96),"--qc-primary-100":t(a,85,92),"--qc-primary-200":t(a,80,84),"--qc-primary-300":t(a,75,72),"--qc-primary-400":t(a,70,f),"--qc-primary-500":t(a,75,n),"--qc-primary-600":t(a,80,S),"--qc-primary-700":t(a,85,J),"--qc-primary-800":t(a,88,28),"--qc-primary-900":t(a,90,20),"--text-link":t(a,78,ae),"--secondary-color":t(a,70,55),"--card-border":t(a,22,80),"--bg-selected":"rgba("+N+", 0.08)","--btn-primary-bg":t(a,80,se),"--btn-primary-border":t(a,80,se),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(a,82,28),"--btn-primary-hover-border":t(a,82,28),"--btn-primary-active-bg":t(a,85,24),"--btn-primary-active-border":t(a,85,24),"--btn-primary-plain-bg":"rgba("+N+", 0.08)","--btn-primary-plain-border":"rgba("+N+", 0.25)","--btn-primary-plain-color":t(a,80,ae),"--btn-primary-plain-hover-bg":"rgba("+N+", 0.15)","--btn-primary-plain-hover-border":t(a,80,32),"--btn-primary-text-color":t(a,80,ae),"--gradient-brand":"linear-gradient(135deg, "+t(a,76,v)+" 0%, "+t(a,85,R)+" 100%)","--primary-text":t(a,78,ae),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,62,Math.min(74,r(a,45,14,58,d)+5))+" 0%, "+t(a,58,r(a,45,14,58,d))+" 100%)","--panel-fg":t(a,45,14),"--qc-nav-item-active":t(a,80,re),"--qc-nav-item-active-bg":t(a,85,92),"--qc-nav-item-active-border":t(a,75,48),"--qc-nav-badge-bg":t(a,85,92),"--qc-nav-badge-text":t(a,80,re),"--qc-ring":t(a,75,_(a,75,T(a,18,98),25,70,!0,3.2)),"--brand-soft-text":t(a,80,_(a,80,T(a,80,84),10,58,!0,4.6)),"--border-control":t(a,16,_(a,16,T(a,18,98),30,80,!0,3.2))}}function u(a){const S=g(a,85,.34),n=g(a,85,.46),f=o(a,85,S),J=_(a,80,k(a),30,92,!1),N=Math.min(96,J+16),x=T(a,55,22),v=T(a,10,9),R=f.split(",").map(function(ie){return parseInt(ie,10)}),b=[0,1,2].map(function(ie){return Math.round(R[ie]*.12+v[ie]*.88)}),O=_(a,85,b,45,96,!1,4.6),ae=_(a,85,x,45,96,!1,4.6),re=Math.min(94,_(a,92,x,45,96,!1,4.6)),se=Math.min(96,re+6);return{...P(a,"dark"),"--primary-color":t(a,85,S),"--primary-rgb":f,"--color-primary":t(a,85,S),"--qc-primary":t(a,90,S),"--qc-primary-50":t(a,50,18),"--qc-primary-100":t(a,55,22),"--qc-primary-200":t(a,55,26),"--qc-primary-300":t(a,60,30),"--qc-primary-400":t(a,65,38),"--qc-primary-500":t(a,85,n),"--qc-primary-600":t(a,90,S),"--qc-primary-700":t(a,92,re),"--qc-primary-800":t(a,90,se),"--qc-primary-900":t(a,92,Math.min(98,se+8)),"--text-link":t(a,85,ae),"--secondary-color":t(a,70,60),"--card-border":t(a,30,25),"--bg-selected":"rgba("+f+", 0.10)","--btn-primary-bg":t(a,85,65),"--btn-primary-border":t(a,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(a,80,72),"--btn-primary-hover-border":t(a,80,72),"--btn-primary-active-bg":t(a,75,80),"--btn-primary-active-border":t(a,75,80),"--btn-primary-plain-bg":"rgba("+f+", 0.08)","--btn-primary-plain-border":"rgba("+f+", 0.25)","--btn-primary-plain-color":t(a,85,ae),"--btn-primary-plain-hover-bg":"rgba("+f+", 0.15)","--btn-primary-plain-hover-border":t(a,85,65),"--btn-primary-text-color":t(a,85,ae),"--gradient-brand":"linear-gradient(135deg, "+t(a,85,N)+" 0%, "+t(a,80,J)+" 100%)","--primary-text":t(a,85,ae),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(a,60,Math.min(76,r(a,40,12,55,d)+5))+" 0%, "+t(a,55,r(a,40,12,55,d))+" 100%)","--panel-fg":t(a,40,12),"--qc-nav-item-active":t(a,85,O),"--qc-nav-item-active-bg":"rgba("+f+", 0.10)","--qc-nav-item-active-border":t(a,85,65),"--qc-nav-badge-bg":"rgba("+f+", 0.12)","--qc-nav-badge-text":t(a,85,O),"--border-control":t(a,16,_(a,16,T(a,11,11),25,70,!1,3.2)),"--brand-soft-text":t(a,85,_(a,85,T(a,55,26),45,96,!1,4.6)),"--qc-ring":t(a,85,65)}}var l=[],p={mode:"light",hue:45},E=!1;function I(a,S){try{var n=document.querySelector('meta[name="theme-color"]');if(!n)return;var f=S?a["--surface-canvas"]||a["--qc-background"]:a["--btn-primary-bg"]||a["--qc-primary"];f&&n.setAttribute("content",f)}catch{}}function q(){if(!(E||typeof window>"u"||!window.matchMedia)){var a=window.matchMedia("(prefers-color-scheme: dark)"),S=function(){p.mode==="system"&&Z("system",p.hue)};a.addEventListener?a.addEventListener("change",S):a.addListener&&a.addListener(S),E=!0}}function D(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var z=-1;function H(a){return a=parseInt(a,10),isNaN(a)?45:a<0?z:Math.max(0,Math.min(359,a))}function K(a){return Object.keys(a).forEach(function(S){var n=a[S];if(typeof n=="string"){n.indexOf("hsl(")>=0&&(n=n.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(v,R){return"hsl("+R+", 0%"}));var f=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(n);if(f){var J=Math.round(.2126*+f[1]+.7152*+f[2]+.0722*+f[3]);n="rgba("+J+", "+J+", "+J+(f[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(n)){var N=n.split(",").map(function(v){return parseInt(v,10)}),x=Math.round(.2126*N[0]+.7152*N[1]+.0722*N[2]);n=x+", "+x+", "+x}a[S]=n}}),a}function V(a,S){var n=T(45,0,S?22:95),f=T(45,0,S?8:98),J=T(45,0,S?11:100),N=S?_(45,0,n,45,96,!1,4.6):_(45,0,n,10,58,!0,4.6),x=T(45,0,S?22:92),v=S?_(45,0,x,45,96,!1,4.6):_(45,0,x,10,58,!0,4.6),R=S?_(45,0,f,45,96,!1,3.2):_(45,0,f,25,70,!0,3.2),b=S?_(45,0,J,25,70,!1,3.2):_(45,0,f,30,80,!0,3.2),O=S?_(45,0,T(45,0,26),45,96,!1,4.6):_(45,0,T(45,0,84),10,58,!0,4.6);a["--brand-soft-text"]="hsl(45, 0%, "+O+"%)";var ae="hsl(45, 0%, "+N+"%)";if(a["--primary-text"]=ae,a["--text-link"]=ae,a["--btn-primary-text-color"]=ae,a["--btn-primary-plain-color"]=ae,a["--qc-nav-item-active"]="hsl(45, 0%, "+v+"%)",a["--qc-nav-badge-text"]="hsl(45, 0%, "+v+"%)",a["--qc-ring"]="hsl(45, 0%, "+R+"%)",a["--border-control"]="hsl(45, 0%, "+b+"%)",S){var re=_(45,0,T(45,0,8),30,92,!1,4.6),se=Math.min(96,re+16);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+se+"%) 0%, hsl(45, 0%, "+re+"%) 100%)"}else{var ie=_(45,0,M,14,62,!0,4.6),Y=Math.max(12,ie-5),oe=Math.max(10,ie-11);a["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+Y+"%) 0%, hsl(45, 0%, "+oe+"%) 100%)"}var qe=r(45,0,14,0,d);return a["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,qe+5)+"%) 0%, hsl(45, 0%, "+qe+"%) 100%)",a["--panel-fg"]="hsl(45, 0%, 14%)",a}function Z(a,S){let n=a||"light",f=S==null||S===""?null:S;if(e[a]){const O=e[a];n=O[0],f==null&&(f=O[1])}n==="system"&&(n=D()?"dark":"light");const J=n==="dark";f=H(f??45);const N=f===z,x=document.documentElement;x.setAttribute("data-theme",J?"dark-pro":"gold"),x.setAttribute("data-theme-mode",J?"dark":"light"),x.setAttribute("data-theme-neutral",N?"true":"false");let v=J?u(N?45:f):C(N?45:f);N&&(v=V(K(v),J));for(var R=Object.keys(v),b=0;b<l.length;b++)R.indexOf(l[b])===-1&&x.style.removeProperty(l[b]);R.forEach(function(O){x.style.setProperty(O,v[O])}),l=R,p.mode=typeof a=="string"&&a?a:"light",p.hue=f,I(v,J);try{localStorage.setItem("quant_theme_mode",J?"dark":"light"),localStorage.setItem("quant_theme_hue",String(f))}catch{}return{mode:J?"dark":"light",hue:f}}function U(){try{var a=localStorage.getItem("quant_theme_hue");if(a!==null&&a!=="")return H(a)}catch{}var S=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(S&&S.getPreference){var n=S.getPreference("theme_hue");if(n!=null&&n!=="")return H(n)}return null}function j(a){var S=U();return Z(a,S??void 0)}function B(){const a=localStorage.getItem("quant_theme");if(!a||!e[a]||localStorage.getItem("quant_theme_hue")!==null)return null;const S=e[a];return{mode:S[0],hue:S[1]}}function A(){const a=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let S=a.theme||"system",n=a.theme_hue!=null&&a.theme_hue!==""?a.theme_hue:null;const f=B();return n==null&&f&&(S=f.mode,n=f.hue),n==null&&(n=45),q(),Z(S,n)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:s,LEGACY_MAP:e,legacyThemes:m,NEUTRAL_HUE:z,generateLightTokens:C,generateDarkTokens:u,migrateLegacyTheme:B,persistedHue:U,applyLegacyTheme:j,applyTheme:Z,init:A},typeof queueMicrotask=="function"?queueMicrotask(A):A()})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const s="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],m={};let t=s,o=null;function d(){return o&&typeof o=="object"&&"value"in o?o.value||s:t}function y(w,M){return e.indexOf(w)===-1?!1:(m[w]=M&&typeof M=="object"?M:{},!0)}function c(w){const M=e.indexOf(w)!==-1?w:s;return t=M,o&&typeof o=="object"&&"value"in o&&(o.value=M),typeof document<"u"&&document.documentElement.setAttribute("lang",M),t}function i(){return d()}function g(w){if(w&&typeof w=="object"&&"value"in w){o=w;const M=e.indexOf(w.value)!==-1?w.value:s;w.value=M,t=M}return t}function r(w,M){const k=d(),_=m[k]||{};let T=w in _?_[w]:null;if(T==null&&k!=="en"){const C=m.en||{};T=w in C?C[w]:null}return T==null&&(T=String(w)),M&&typeof M=="object"&&Object.keys(M).forEach(function(C){T=T.replace(new RegExp("\\{"+C+"\\}","g"),String(M[C]))}),T}const P={DEFAULT_LOCALE:s,SUPPORTED_LOCALES:e,messages:m,registerLocale:y,setLocale:c,getLocale:i,bindLocale:g,t:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=P),P});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",s),s});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",s),s});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.Quantja=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",s),s});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.Quantko=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",s),s});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const s={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",s),s});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const s={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let m=[];function t(k){const _=String(k||"");let T="";for(const C of _){const u=s[C];u?T+=u.charAt(0):/[a-zA-Z0-9]/.test(C)&&(T+=C.toLowerCase())}return T}function o(k){const _=String(k||"");let T="";for(const C of _){const u=s[C];u?T+=u:/[a-zA-Z0-9]/.test(C)&&(T+=C.toLowerCase())}return T}function d(k){return String(k||"").trim().toLowerCase()}function y(k,_){const T=(_.code||"").toLowerCase();return/^\d+$/.test(k)?T.indexOf(k)!==-1:/[\u4e00-\u9fa5]/.test(k)?(_.name||"").toLowerCase().indexOf(k)!==-1:T.indexOf(k)!==-1||(_.initials||t(_.name)).indexOf(k)!==-1||(_.pinyin||o(_.name)).indexOf(k)!==-1}function c(k){const _={},T=[],C=function(u,l,p){!u||_[u]||(_[u]=!0,T.push({code:u,name:l||u,source:p||"core",initials:t(l||u),pinyin:o(l||u)}))};return e.forEach(function(u){C(u.code,u.name,"core")}),(k||[]).forEach(function(u){C(u.code,u.name,"extra")}),T}function i(k,_){const T=d(k);if(!T||!_||!_.length)return[];const C=T.split(/[\s,，、;；]+/).filter(Boolean);return C.length?_.filter(function(u){return C.every(function(l){return y(l,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function g(k){Array.isArray(k)&&(m=m.concat(k))}function r(){return m.slice()}function P(){return c(m)}function w(k){return i(k,P())}const M={CHAR_PINYIN:s,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:o,normalizeQuery:d,matchToken:y,buildStockIndex:c,searchStocksByQuery:i,registerExtraStocks:g,getExtraStocks:r,getStockIndex:P,searchCoreStocks:w};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=M),M});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const s="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},m=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function o(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const d={light:"classic-white",dark:"dark-pro"};function y(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(s);if(!l)return{};const p=JSON.parse(l);return p&&typeof p=="object"?p:{}}catch{return{}}}function c(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(l))}catch{}}function i(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const l=Object.assign({},e,y()),p={};return m.forEach(function(E){const I=l[E];p[E]=E==="theme_hue"?o(I)?parseInt(I,10):e[E]:t[E].indexOf(I)!==-1?I:e[E]}),p}function r(l){if(m.indexOf(l)!==-1)return g()[l]}function P(l,p){return m.indexOf(l)===-1?!1:l==="theme_hue"?o(p):t[l].indexOf(p)!==-1}function w(l,p){if(!P(l,p))return!1;const E=y();return E[l]=p,c(E),i()&&k({[l]:p}),!0}function M(l){if(!l||typeof l!="object")return!1;const p={};if(Object.keys(l).forEach(function(I){P(I,l[I])&&(p[I]=l[I])}),!Object.keys(p).length)return!1;const E=Object.assign({},y(),p);return c(E),i()&&k(p),!0}function k(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function _(){const l=g();if(!i()||typeof fetch>"u")return l;try{const p=await fetch("/api/user_config/preferences");if(p.ok){const E=await p.json();if(E.success&&E.preferences){const I=E.preferences;m.forEach(function(q){const D=I[q];if(q==="theme_hue"){o(D)&&(l[q]=parseInt(D,10));return}t[q].indexOf(D)!==-1&&(l[q]=D)}),c(l)}}}catch(p){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",p&&p.message)}return l}function T(l){const p=l||r("info_density")||"comfortable",E=t.info_density.indexOf(p)!==-1?p:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",E),E}function C(l){const p=l||r("theme")||"system";if(p==="system"){let E=!1;return typeof window<"u"&&window.matchMedia&&(E=window.matchMedia("(prefers-color-scheme: dark)").matches),E?"dark":"light"}return p==="dark"||p==="light"?p:"light"}const u={PREFERENCES_KEY:s,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:m,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:g,getPreference:r,isValidValue:P,setPreference:w,setPreferences:M,saveToBackend:k,loadPreferences:_,resolveTheme:C,applyDensity:T};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const s="quant_recent_viewed";function m(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(s);if(!g)return[];const r=JSON.parse(g);return Array.isArray(r)?r:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(s,JSON.stringify(g))}catch{}}function o(g,r){if(!g)return!1;let P=m().filter(function(w){return w.code!==g});return P.unshift({code:g,name:(r||"").toString().slice(0,32),ts:Date.now()}),P.length>10&&(P=P.slice(0,10)),t(P),!0}function d(){return m().slice(0,10)}function y(g){t(m().filter(function(r){return r.code!==g}))}function c(){t([])}const i={RECENT_VIEWED_KEY:s,RECENT_MAX:10,recordViewed:o,getRecentViewed:d,removeRecent:y,clearRecent:c};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=i),i});(function(){const s=typeof Vue<"u"?Vue:{},{ref:e,computed:m,watch:t,onMounted:o,nextTick:d}=s;function y(v,R={}){if(typeof v=="string"&&v.startsWith("/api/")){const b=localStorage.getItem("quant_token");if(b)return{...R,headers:{...R.headers||{},Authorization:"Bearer "+b}}}return R}async function c(v,R={}){const b=y(v,R),O={"Content-Type":"application/json",...b.headers},ae=(R.method||"GET").toUpperCase(),re=ae+"|"+v,se=async()=>{const ie=await fetch(v,{...b,headers:O});if(ie.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!ie.ok){let Y="";try{const oe=await ie.json();Y=oe&&oe.detail||""}catch{}throw Object.assign(new Error(Y||"请求失败（HTTP "+ie.status+"）"),{status:ie.status})}return await ie.json()};try{const ie=R.noLoading?se:()=>p(se);return ae==="GET"&&!R.noDedupe?await T(re,ie):await ie()}catch(ie){throw ie.message==="登录已过期"?ie:(console.error("[apiFetch] "+v+":",ie.message),Object.assign(ie,{_formatted:E(ie,ie.status)}))}}function i(){return new Date().toISOString().split("T")[0]}function g(v){return v?v.split("T")[0]:""}function r(v,R="info",b=3e3){let O=document.querySelector(".toast-container");O||(O=document.createElement("div"),O.className="toast-container",document.body.appendChild(O));const ae=document.createElement("div");ae.className=`toast toast-${R}`,ae.textContent=v,O.appendChild(ae),setTimeout(()=>{ae.classList.add("leaving"),setTimeout(()=>ae.remove(),300)},b)}function P(v,R=300){let b;return function(...O){clearTimeout(b),b=setTimeout(()=>v.apply(this,O),R)}}function w(v,R=300){let b=!1;return function(...O){b||(v.apply(this,O),b=!0,setTimeout(()=>{b=!1},R))}}async function M(v,R=3e3,b=""){const O=new Promise((ae,re)=>setTimeout(()=>re(new Error("timeout")),R));try{return await Promise.race([v,O])}catch(ae){console.warn(`[timeout] ${b||"task"} failed:`,ae.message)}}const k=new Map;function _(){return k.clear(),!0}function T(v,R){if(!v||typeof R!="function")return Promise.reject(new Error("bad dedupe args"));if(k.has(v))return k.get(v);const b=Promise.resolve().then(R).finally(()=>{k.delete(v)});return k.set(v,b),b}let C=0;function u(){return C=0,!0}function l(){return C}async function p(v){C++;try{return await v()}finally{C--}}function E(v,R){if(!v)return"请求失败";if(v&&typeof v=="object"&&v.detail)return String(v.detail);if(typeof v=="string"&&v)return v;if(v&&v.message){const b=String(v.message);return/Failed to fetch|fetch failed|networkerror/i.test(b)?"网络连接失败，请检查网络后重试":b}return R?"请求失败（HTTP "+R+"）":"请求失败"}function I(v,R){if(v===R)return!0;try{return JSON.stringify(v)===JSON.stringify(R)}catch{return!1}}function q(v,R,b){const O=(v||"GET").toUpperCase();let ae="";if(b)try{const re={};Object.keys(b).sort().forEach(se=>{re[se]=b[se]}),ae=JSON.stringify(re)}catch{ae=""}return O+"|"+R+"|"+ae}class D{constructor(){this._map=new Map,this._exp=new Map}get(R){const b=this._exp.get(R);if(b!=null){if(Date.now()>b){this.delete(R);return}return this._map.get(R)}}set(R,b,O){return this._map.set(R,b),this._exp.set(R,Date.now()+(O>0?O:-1)),b}delete(R){this._map.delete(R),this._exp.delete(R)}clear(){this._map.clear(),this._exp.clear()}has(R){return this.get(R)!==void 0}get size(){return this._map.size}}function z(v){const R=new D,b=v!=null&&v>0?v:15e3;return{store:R,defaultTtl:b,get:O=>R.get(O),set:(O,ae,re)=>R.set(O,ae,re??b),delete:O=>R.delete(O),clear:()=>R.clear(),size:()=>R.size}}const H=new Set;async function K(v){const R=v&&v.cache,b=v&&v.key,O=v&&(v.fetchFn||v.fetcher),ae=v&&v.ttl;if(!R||!b||typeof O!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(H.has(b))return{ok:!1,changed:!1,skipped:!0,fresh:null};H.add(b);try{const re=R.get(b);let se;try{se=await O()}catch(Y){return v.onError&&v.onError(Y),{ok:!1,changed:!1,fresh:null}}const ie=re!==void 0&&!I(re,se);return R.set(b,se,ae),v.apply&&v.apply(se,re),re!==void 0&&(ie?v.onChanged&&v.onChanged(se,re):v.onUnchanged&&v.onUnchanged(se,re)),{ok:!0,changed:ie,fresh:se}}finally{H.delete(b)}}const V=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function Z(v,R={}){if(v==null)return"";const b=R&&R.allow||V,O=new Set(b.map(ie=>String(ie).toUpperCase()));let ae;try{ae=new DOMParser().parseFromString(String(v),"text/html")}catch{return String(v).replace(/[<>&]/g,Y=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[Y])}const re=ae.body||ae;function se(ie){Array.from(ie.childNodes).forEach(Y=>{if(Y.nodeType===1){const oe=String(Y.tagName).toUpperCase();if(O.has(oe))Array.from(Y.attributes).forEach(qe=>{const ee=qe.name.toLowerCase(),$=(qe.value||"").trim().toLowerCase();(ee.startsWith("on")||(ee==="href"||ee==="src"||ee==="xlink:href")&&$.startsWith("javascript:")||ee==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test($))&&Y.removeAttribute(qe.name),ee==="href"&&!/^(https?:|mailto:|#|\/)/.test($)&&Y.removeAttribute("href")}),oe==="A"&&Y.setAttribute("rel","noopener noreferrer"),se(Y);else{const qe=Y.parentNode;for(;Y.firstChild;)qe.insertBefore(Y.firstChild,Y);qe.removeChild(Y)}}else if(Y.nodeType!==3){if(Y.nodeType===8)Y.parentNode&&Y.parentNode.removeChild(Y);else if(Y.nodeType===4){const oe=ae.createTextNode(Y.nodeValue||"");Y.parentNode&&Y.parentNode.replaceChild(oe,Y)}}})}return se(re),re.innerHTML}const U="/api/openapi",j="/api/market/ws/quotes",B=1,A=2.5,a="数据不可达",S="实时不可用，不刷新";function n(){const v=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",R=typeof location<"u"?location.host:"localhost:8001";return v+"//"+R+j}function f(v,R){if(!v)return null;const b=R||{riseSpeed:B,volumeRatio:A},O=b.riseSpeed!=null?b.riseSpeed:B,ae=b.volumeRatio!=null?b.volumeRatio:A,re=parseFloat(v.rise_speed);if(!isNaN(re)&&Math.abs(re)>O)return re>0?"涨速预警":"跌速预警";const se=parseFloat(v.volume_ratio);return!isNaN(se)&&se>ae?"放量预警":null}function J(v){const R=Number(v);return v==null||isNaN(R)?null:R}const x={apiFetch:c,withAuthHeaders:y,getToday:i,formatDate:g,withTimeout:M,showToast:r,debounce:P,throttle:w,resetInFlight:_,dedupeRequest:T,resetLoading:u,loadingCount:l,withLoading:p,formatApiError:E,jsonEquals:I,makeCacheKey:q,CacheStore:D,createTtlCache:z,silentRefresh:K,sanitizeHtml:Z,OPENAPI_ROUTE_BASE:U,REALTIME_WS_PATH:j,WARN_RISE_SPEED_THRESHOLD:B,WARN_VOLUME_RATIO_THRESHOLD:A,REALTIME_DEGRADED_TEXT:a,REALTIME_FALLBACK_TEXT:S,buildRealtimeWsUrl:n,checkQuoteWarning:f,quoteFmt:{price:function(v){const R=J(v);return R===null?"--":R.toFixed(2)},pct:function(v){const R=J(v);return R===null?"--":(R>0?"+":"")+R.toFixed(2)+"%"},num:function(v){const R=J(v);return R===null?"--":R.toFixed(2)},color:function(v){const R=v?v.change_pct:null,b=J(R);return b===null?"":b>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=x),typeof De<"u"&&De.exports&&(De.exports=x)})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(P,w){return P+"/"+w}function m(P,w,M,k){var _=P[w]||[],T=_.findIndex(function(l){return l.subPage===M});if(T!==-1)return{groups:P,activeKey:e(w,M)};var C=_.concat([{subPage:M,title:k}]);C.length>s&&(C=o(C));var u=Object.assign({},P,t({},w,C));return{groups:u,activeKey:e(w,M)}}function t(P,w,M){return P[w]=M,P}function o(P){if(P.length<=s)return P;var w=P.length>1?1:0;return P.filter(function(M,k){return k!==w})}function d(P,w,M,k){var _=P[w]||[],T=_.findIndex(function(p){return p.subPage===M});if(T===-1)return{groups:P,nextActive:null};var C=_.filter(function(p){return p.subPage!==M}),u=Object.assign({},P,t({},w,C)),l=null;return M===k&&(C[T]?l=C[T].subPage:C[T-1]?l=C[T-1].subPage:l=null),{groups:u,nextActive:l}}function y(P){return P&&P.length?P[0]:""}function c(P,w){return P[w]||[]}function i(P,w,M){var k=P[w]||[],_=k.filter(function(C){return C.subPage===M}),T=Object.assign({},P,t({},w,_));return{groups:T,activeKey:_.length?e(w,_[0].subPage):null}}function g(P,w){var M=Object.assign({},P,t({},w,[]));return{groups:M,activeKey:null}}function r(P,w,M,k){var _=(P[w]||[]).slice();if(M<0||M>=_.length)return{groups:P};var T=_.splice(M,1)[0];return _.splice(Math.max(0,Math.min(k,_.length)),0,T),{groups:Object.assign({},P,t({},w,_))}}return{MAX_TABS:s,openTab:m,closeTab:d,getDefaultTab:y,tabsOf:c,evictOldest:o,closeOthers:i,closeAll:g,reorder:r,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Gs=typeof De=="object"&&De.exports?De.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;Gs&&(window.__quantModules.tabsCore=Gs)}(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var s=["subnav","tree","toptab"],e="toptab",m="nav_mode";function t(r){return s.indexOf(r)!==-1?r:e}function o(r){return t(r)==="subnav"}function d(r){return t(r)==="tree"}function y(r){return t(r)==="toptab"}function c(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function i(){var r=c(),P=e;if(r)try{P=t(r.getItem(m))}catch{}return{navMode:P}}function g(r){var P=c();if(!(!P||!r))try{r.navMode!==void 0&&P.setItem(m,t(r.navMode))}catch{}}return{NAV_MODES:s,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:o,treeChildrenVisible:d,topTabsVisible:y,readPrefs:i,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Ys=typeof De=="object"&&De.exports?De.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;Ys&&(window.__quantModules.navModeCore=Ys)}(function(){function e(n,f){if(!Array.isArray(n)||n.length<=f)return n;const J=[],N=n.length/f*2;for(let x=0;x<n.length;x+=N){const v=Math.floor(x),R=Math.min(n.length,Math.ceil(x+N));let b=1/0,O=-1,ae=-1/0,re=-1;for(let se=v;se<R;se++){const ie=n[se];if(!ie)continue;const Y=ie[3]!=null?Number(ie[3]):1/0,oe=ie[4]!=null?Number(ie[4]):-1/0;Y<b&&(b=Y,O=se),oe>ae&&(ae=oe,re=se)}O>=0&&J.push(n[O]),re>=0&&re!==O&&J.push(n[re])}return J}let m=null;function t(){return typeof echarts<"u"?Promise.resolve():(m||(m=new Promise(function(n,f){const J=document.createElement("script");J.src="/static/lib/echarts.min.js",J.async=!0,J.onload=function(){typeof echarts<"u"?n():f(new Error("echarts 加载后未定义"))},J.onerror=function(){f(new Error("echarts.min.js 加载失败"))},document.head.appendChild(J)})),m)}function o(){const n=getComputedStyle(document.documentElement);return{primary:n.getPropertyValue("--primary-color").trim()||"#2563eb",up:n.getPropertyValue("--color-up").trim()||"#43e97b",down:n.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:n.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:n.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=n=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim()}catch{return""}};function y(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function c(n,f,J,N=!1,x=!1){if(!f||f.length===0)return;f.length>2e3&&(f=e(f,2e3));const v=f.map(F=>typeof F[0]=="string"&&F[0].indexOf("-")>=0?F[0]:F[0].slice(0,4)+"-"+F[0].slice(4,6)+"-"+F[0].slice(6,8)),R=o(),b={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},O=f.map(F=>[F[1],F[2],F[3],F[4]]),ae=f.map(F=>F[5]),re=f.map(F=>F[6]),se=f.map(F=>F[7]),ie=f.map(F=>F[8]),Y=f.map(F=>F[9]),oe=f.map(F=>F[10]),ee=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",$=R.borderLight,we={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:R.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ee,borderColor:$,textStyle:{color:R.textSecondary,fontSize:12},formatter:function(F){if(!F||!F.length)return"";const ve=F[0].dataIndex,me=f[ve];if(!me)return"";const X=n.getOption(),ue=X.legend&&X.legend[0]&&X.legend[0].selected||{},Ee=le=>ue[le]!==!1,_e=le=>le==null||isNaN(le)?"--":Number(le).toFixed(2),Ne=le=>le==null||isNaN(le)?"--":(Number(le)/1e4).toFixed(2)+"万手",pe=['<div style="font-weight:600;color:'+R.textSecondary+';">'+v[ve]+"</div>"];return pe.push("开: "+_e(me[1])+"　收: "+_e(me[2])),pe.push("低: "+_e(me[3])+"　高: "+_e(me[4])),pe.push("成交量: "+Ne(me[5])),me[6]!=null&&Ee("MA5")&&pe.push("MA5: "+_e(me[6])),me[7]!=null&&Ee("MA10")&&pe.push("MA10: "+_e(me[7])),me[8]!=null&&Ee("MA20")&&pe.push("MA20: "+_e(me[8])),me[9]!=null&&Ee("MA60")&&pe.push("MA60: "+_e(me[9])),me[10]!=null&&pe.push("VOL_MA5: "+Ne(me[10])),pe.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:x?0:8,textStyle:{color:R.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:x?30:40,height:x?"48%":"52%"},{left:56,right:16,top:x?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:v,boundaryGap:!0,axisLine:{lineStyle:{color:$}},axisLabel:{color:R.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:v,axisLabel:{show:!1},axisLine:{lineStyle:{color:$}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:$}},axisLabel:{color:R.textSecondary,fontSize:11,formatter:function(F){const ve=Math.round(F*100)/100;return ve%1===0?String(Math.round(ve)):ve.toFixed(2)}},splitLine:{lineStyle:{color:$,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:$}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,f.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:$,textStyle:{color:R.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:O,itemStyle:{color:R.up,color0:R.down,borderColor:R.up,borderColor0:R.down}},{name:"MA5",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:b.ma5}},{name:"MA10",type:"line",data:se,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:b.ma10}},{name:"MA20",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:b.ma20}},{name:"MA60",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:b.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ae,itemStyle:{color:function(F){const ve=F.dataIndex;return f[ve][1]>=f[ve][2]?R.up:R.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:oe,smooth:!0,symbol:"none",lineStyle:{width:1,color:b.ma5,type:"dashed"}}]};n.setOption(we,!0)}const i=new Map;function g(n){return i.has(n)||i.set(n,{chart:null,cache:null}),i.get(n)}async function r(n,f,J,N=!1,x={}){await t();const v=g(n);let R=document.getElementById(n);if(!R)for(let b=0;b<16&&(await new Promise(O=>setTimeout(O,50)),R=document.getElementById(n),!R);b++);if(!R)throw new Error("无法找到图表容器: "+n);if(R.offsetWidth<50&&(R.style.minWidth="600px",R.style.minHeight="300px"),!v.chart||v.chart.isDisposed()||v.chart.getDom()!==R){if(v.chart)try{v.chart.dispose()}catch{}v.chart=echarts.init(R),v.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const b=x.onLegend;typeof b=="function"&&v.chart.on("legendselectchanged",O=>{O&&O.selected&&b(O.selected)})}return c(v.chart,f,J,N,!!x.isMobile),v.cache={data:f,period:J,isIndex:N,isMobile:!!x.isMobile},v.chart}function P(n){const f=i.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function w(n){const f=i.get(n);f&&f.chart&&f.chart.resize()}function M(n,f){const J=i.get(n),N=J&&J.chart;if(N)if(f<=0)N.dispatchAction({type:"dataZoom",start:0,end:100});else{const R=Math.max(0,(60-f)/60*100);N.dispatchAction({type:"dataZoom",start:Math.round(R),end:100})}}function k(n){var N,x,v;const f=i.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const J=((v=(x=(N=f.chart.getOption())==null?void 0:N.legend)==null?void 0:x[0])==null?void 0:v.selected)||null;c(f.chart,f.cache.data,f.cache.period,f.cache.isIndex,f.cache.isMobile),J&&f.chart.setOption({legend:{selected:J}})}function _(n){const f=i.get(n);return f&&f.chart}const T=new Map;function C(n){return T.has(n)||T.set(n,{chart:null,cache:null}),T.get(n)}function u(n,f,J={}){return t().then(function(){const N=C(n),x=document.getElementById(n);if(!x)throw new Error("无法找到图表容器: "+n);if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const v=typeof f=="function"?f():f;return N.chart.setOption(v,!0),N.cache={buildOption:f,key:J.key||""},N.chart})}function l(n){var x,v,R;const f=T.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const J=((R=(v=(x=f.chart.getOption())==null?void 0:x.legend)==null?void 0:v[0])==null?void 0:R.selected)||null,N=typeof f.cache.buildOption=="function"?f.cache.buildOption():f.cache.buildOption;f.chart.setOption(N,!0),J&&N&&N.legend&&N.legend.selected&&f.chart.setOption({legend:{selected:J}})}function p(n){const f=T.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function E(n){const f=T.get(n);f&&f.chart&&f.chart.resize()}const I=new Map;function q(n){return I.has(n)||I.set(n,{chart:null,cache:null}),I.get(n)}function D(n,f,J={}){return t().then(function(){const N=q(n),x=document.getElementById(n);if(!x)return null;if(x.offsetWidth<50&&(x.style.minWidth="600px",x.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==x){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(x),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const v=typeof f=="function"?f():f;return N.chart.setOption(v,!0),N.cache={buildOption:f,key:J.key||""},N.chart})}function z(n){const f=I.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const J=typeof f.cache.buildOption=="function"?f.cache.buildOption():f.cache.buildOption;f.chart.setOption(J,!0)}function H(n){const f=I.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function K(n){const f=I.get(n);f&&f.chart&&f.chart.resize()}const V=D,Z=z,U=H,j=K;function B(n,f,J,N){N=N||{};const x=N.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[N.navLabel||"净值",N.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:J||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:N.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:N.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:N.navLabel||"净值",type:"line",data:n||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:N.ddLabel||"回撤",type:"line",yAxisIndex:1,data:f||[],showSymbol:!1,areaStyle:{opacity:.25,color:x},lineStyle:{color:x,type:"solid",width:1.5}}]}}function A(n,f){f=f||{};const J=f.bandColor||d("--state-info-solid")||"#1976d2",N=n&&n.dates||[],x=n&&n.median||[],v=n&&n.q25||[],R=n&&n.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[f.medianLabel||"中位IC",f.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:f.medianLabel||"中位IC",type:"line",data:x,showSymbol:!1,lineStyle:{width:2,color:J}},{name:f.bandLabel||"25–75分位",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}},{name:"_bandH",type:"line",data:R.map(function(b,O){return b-(v[O]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}}]}}function a(n,f){f=f||{};const J=f.color||d("--color-ai")||"#7c3aed",N=n&&n.dates||[],x=n&&n.value||[],v=n&&n.upper||[],R=n&&n.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[f.valueLabel||"情绪",f.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:f.valueLabel||"情绪",type:"line",data:x,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:J}},{name:f.bandLabel||"过热/冰点带",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}},{name:"_bandL",type:"line",data:R.map(function(b,O){return(v[O]||0)-b}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}}]}}const S={renderKlineChart:c,renderKlineTo:r,disposeKline:P,resizeKline:w,zoomKline:M,redrawKline:k,getKlineChart:_,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:p,resizeBacktest:E,renderPortfolioTo:D,redrawPortfolio:z,disposePortfolio:H,resizePortfolio:K,renderSimpleChartTo:V,redrawSimpleChart:Z,disposeSimpleChart:U,resizeSimpleChart:j,buildNavDrawdownOption:B,buildIcBandOption:A,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:y,init(){return{renderKlineChart:c,renderKlineTo:r,disposeKline:P,resizeKline:w,zoomKline:M,redrawKline:k,getKlineChart:_,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:p,resizeBacktest:E,renderPortfolioTo:D,redrawPortfolio:z,disposePortfolio:H,resizePortfolio:K,renderSimpleChartTo:V,redrawSimpleChart:Z,disposeSimpleChart:U,resizeSimpleChart:j,buildNavDrawdownOption:B,buildIcBandOption:A,buildSentimentBandOption:a,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:y}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=S),typeof De<"u"&&De.exports&&(De.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:B,buildIcBandOption:A,buildSentimentBandOption:a})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(s){const{ref:e,computed:m}=Vue,{configChanged:t,consensus:o}=s,d=e(null),y=e(""),c=e(null),i=e([]),g=e([]),r=e([]),P=e([]),w=e([]),M=e([]),k=e({});function _(be){const ye=w.value.indexOf(be);ye>=0?w.value.splice(ye,1):w.value.push(be)}const T=e("date"),C=e([]),u=e(!1),l=e(!1),p=e("watchlist"),E=e([]),I=e({vendors:[]}),q=e(""),D=e(!1),z=e(!1);function H(be){if(!be)return"";const ye=String(be),Ae=ye.length;if(Ae<=4)return ye[0]+"*".repeat(Ae-1);const Re=Ae<=8?2:4;return ye.slice(0,Re)+"*".repeat(Ae-Re-Re)+ye.slice(-Re)}async function K(be){let ye;try{ye=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ye,target:be})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function V(be){if(be._revealed){be._revealed=!1,be._masked=H(be.api_key);return}const ye=await K("ai:"+be.vendor_key);ye!==null&&(be.api_key=ye,be._revealed=!0)}async function Z(be){if(be._editing){be._editing=!1,be._revealed=!1,be.api_key&&(be._masked=H(be.api_key));return}be._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const Re=(Ae.data.vendors||[]).find(Ye=>Ye.vendor_key===be.vendor_key);Re&&(be.api_key=Re.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(ye){ElementPlus.ElMessage.error("解锁失败: "+ye.message)}}function U(be){const{_fetching:ye,_testing:Ae,_revealed:Re,_masked:Ye,_editing:Ue,...Qe}=be;return Ue||(Qe.api_key=""),Qe.models=(be.models||[]).map($e=>{const{_testing:st,testResult:gt,...fe}=$e;return fe}),Qe}async function j(){var be;try{q.value="";const ye=await fetch("/api/ai/models");if(ye.status===401){q.value="请先登录后再查看模型配置";return}if(!ye.ok){q.value=`服务器错误 (${ye.status})`;return}const Ae=await ye.json();Ae.success?(E.value=(((be=Ae.data)==null?void 0:be.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Ye=>({...Ye,_testing:!1,testResult:void 0}))})),q.value=""):q.value=Ae.message||"加载失败"}catch(ye){q.value="网络错误: "+ye.message}}async function B(){try{const ye=await(await fetch("/api/ai/catalog")).json();ye.success&&ye.data&&(I.value=ye.data)}catch(be){console.warn("AI 厂商目录加载失败",be)}}async function A(){z.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:E.value.map(U)})})).json();Ae.success?(E.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=H(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(be){ElementPlus.ElMessage.error("保存失败: "+be.message)}z.value=!1}async function a(be,ye){ye._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:be.vendor_key,model:ye.name,base_url:be.base_url,api_key:be.api_key,timeout:be.timeout})});ye.testResult=await Re.json()}catch(Ae){ye.testResult={success:!1,message:Ae.message}}ye._testing=!1}async function S(){D.value=!0;for(const be of E.value)for(const ye of be.models||[])be.api_key?await a(be,ye):ye.testResult={success:!1,message:"未配置 API Key"};D.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function n(be){be._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:be.vendor_key,base_url:be.base_url,api_key:be.api_key,timeout:be.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Ye=new Set((be.models||[]).map(Ue=>Ue.name));for(const Ue of Re.models)Ye.has(Ue)||be.models.push({name:Ue,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(ye){ElementPlus.ElMessage.error("获取模型列表失败: "+ye.message)}be._fetching=!1}function f(be){const ye=(I.value.vendors||[]).find(Ae=>Ae.vendor_key===be);if(ye){if(E.value.some(Ae=>Ae.vendor_key===be)){ElementPlus.ElMessage.warning("该厂商已存在");return}E.value.push({vendor_key:ye.vendor_key,name:ye.name,kind:ye.kind,base_url:ye.base_url,api_key:"",timeout:60,tier:ye.tier||"",website:ye.website||"",locked:!!ye.locked,models:(ye.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${ye.name}」，配置 API Key 后保存生效`)}}function J(){E.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function N(be){be.models||(be.models=[]),be.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function x(be,ye){const Ae=be.models[ye];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}be.models.splice(ye,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function v(be){if(be.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(be.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const ye=E.value.indexOf(be);ye>=0&&E.value.splice(ye,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const R=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),b=e(!1),O=e(""),ae=e(0),re=e(""),se=e(!1),ie=e(""),Y=e(!1),oe=e(0),qe=e(0),ee=e(""),$=e({}),we=e({}),F=e({}),ve=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),me=e("manual"),X=m(()=>{const be={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return be[ve.value.provider]||be.custom}),ue={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function Ee(be){if(be==="manual")return;const ye=ue[be];ye&&(ve.value.endpoint=ye.endpoint,ve.value.model=ye.model,t.value=!0)}function _e(){if(t.value=!0,ve.value.provider!=="codingplan"&&ve.value.provider!=="custom"){const be=X.value;be&&(ve.value.endpoint=be.endpoint,ve.value.model=be.model)}else ve.value.provider==="codingplan"&&(ve.value.endpoint||(ve.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ve.value.model||(ve.value.model="ark-code-latest"))}let Ne=null;const pe=8;async function le(){Ne&&(Ne.abort(),Ne=null);const ye=(o.value||[]).filter(Qe=>Qe.status==="new"||Qe.status==="out").filter(Qe=>!k.value[Qe.code]);if(ye.length===0)return;const Ae=new AbortController;Ne=Ae;let Re=0;const Ye=async()=>{for(;Re<ye.length;){const Qe=ye[Re++];try{const st=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Qe.code,stock_name:Qe.name,event_type:Qe.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();st.success&&st.signal&&(k.value={...k.value,[Qe.code]:st.signal})}catch($e){if($e.name==="AbortError")return}}},Ue=Array.from({length:Math.min(pe,ye.length)},()=>Ye());await Promise.all(Ue)}function he(){Ne&&(Ne.abort(),Ne=null)}let Oe=0;async function Ve(be){const ye=++Oe;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(be)}`)).json();if(ye!==Oe)return;Re.success&&Re.data&&(d.value=Re.data,y.value=Re.data.evaluate_time,We(be,Re.data),tt(Re.data))}catch{}}async function We(be,ye){var Ae,Re;try{const Ue=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(be)}&limit=2`)).json();if(Ue.success&&Ue.data&&Ue.data.length>=2){const Qe=Ue.data[1],$e=((Ae=ye.result)==null?void 0:Ae.total_score)||0,st=((Re=Qe.result)==null?void 0:Re.total_score)||0;$e>0&&st>0&&(c.value={prevScore:st,currScore:$e,diff:$e-st})}}catch(Ye){console.warn("[refreshStrategyData] autoPoll failed:",Ye)}}function tt(be){var Ye;const ye=((Ye=be.result)==null?void 0:Ye.dimensions)||{},Ae=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ue of Re){const Qe=ye[Ue.key];Qe!==void 0&&Ae.push({icon:Qe>=Ue.good?"check-circle-2":Qe>=Ue.warn?"alert-triangle":"x-circle",label:`${Ue.label} ${Math.round(Qe)}分`})}i.value=Ae}return{aiResult:d,lastEvalTime:y,evalHistoryComparison:c,checklistItems:i,aiHistory:g,selectedHistoryIds:r,expandedDates:P,expandedMonths:w,expandedStocks:M,poolSignals:k,toggleMonthExpand:_,aiHistoryView:T,selectedWatchlistCodes:C,showAutoEvaluateSettings:u,savingConfig:l,autoEvaluateScope:p,aiVendors:E,aiCatalog:I,aiModelsError:q,testingAllModels:D,savingAiModels:z,loadAiVendors:j,loadAiCatalog:B,saveAiVendors:A,saveAiModels:A,testVendorModel:a,testAllVendorModels:S,fetchVendorModels:n,addVendorFromCatalog:f,addCustomVendor:J,addVendorModel:N,removeVendorModel:x,removeVendor:v,toggleVendorKeyReveal:V,toggleVendorEdit:Z,autoEvaluateConfig:R,aiLoading:b,aiEvalStage:O,aiEvalElapsed:ae,aiEvalError:re,showBatchEvaluate:se,batchStocks:ie,batchRunning:Y,batchTotal:oe,batchCompleted:qe,batchCurrent:ee,batchStatuses:$,batchResults:we,batchEvalErrors:F,aiConfig:ve,selectedPreset:me,providerInfo:X,aiPresets:ue,applyPreset:Ee,onProviderChange:_e,fetchPoolSignals:le,cancelPoolSignals:he,loadLastEvaluation:Ve}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(s){const{ref:e,computed:m,watch:t}=Vue,{configChanged:o,aiConfig:d,aiLoading:y,feishuConfig:c,currentTheme:i,changeTheme:g,autoEvaluateConfig:r,currentUser:P,strategyFilter:w,applyTheme:M,dashboardData:k,lastRefreshTime:_,saveAiModels:T}=s,C=function(pe){const le=window.__quantModules&&window.__quantModules.themes;return le&&le.applyLegacyTheme?le.applyLegacyTheme(pe):M(pe)},u=e(!1),l=e(!1),p=e(null),E=e(null),I=e(null),q=e(!1),D=e(!1),z=e(null),H=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),K=e("disconnected"),V=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),Z=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),U=e(!1),j=e(null),B=e(null),A=e("pending"),a=e("..."),S=e(!1),n=e({api_limit:600}),f=e(!1),J=e(!1);async function N(){try{const le=await(await fetch("/api/system/rate-limit")).json();le.success&&(n.value=le.data)}catch(pe){console.warn("loadRateLimit failed:",pe)}}async function x(){J.value=!0;try{const le=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)})).json();le.success?(f.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(le.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{J.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{o.value=!0},{deep:!0});async function v(){u.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(o.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(pe){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",pe)}finally{u.value=!1}}async function R(){y.value=!0;try{const le=await(await fetch("/api/ai/test")).json();le.success?ElementPlus.ElMessage.success(le.message||"API连接正常"):ElementPlus.ElMessage.error(le.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{y.value=!1}}function b(){const pe={ai:d.value,feishu:c.value,theme:i.value,export_time:new Date().toISOString()},le=new Blob([JSON.stringify(pe,null,2)],{type:"application/json"}),he=URL.createObjectURL(le),Oe=document.createElement("a");Oe.href=he,Oe.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Oe.click(),URL.revokeObjectURL(he),ElementPlus.ElMessage.success("配置已导出")}function O(pe){const le=pe.target.files[0];if(!le)return;const he=new FileReader;he.onload=async Oe=>{try{const Ve=JSON.parse(Oe.target.result);Ve.ai&&(d.value={...d.value,...Ve.ai},await v()),Ve.feishu&&(Object.assign(c.value,Ve.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ve.feishu)})),Ve.theme&&(i.value=Ve.theme,g(Ve.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},he.readAsText(le),pe.target.value=""}async function ae(){u.value=!0;const pe=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:H.value,feishu:c.value,ai:d.value,rate_limit:n.value,auto_evaluate:r.value,theme:i.value}})}).then(Ve=>["userConfig",Ve.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H.value)}).then(Ve=>["tushare",Ve.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:V.value})}).then(Ve=>["datasource",Ve.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)}).then(Ve=>["feishu",Ve.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Ve=>["ai",Ve.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)}).then(Ve=>["rateLimit",Ve.ok]),T().then(()=>["aiModels",!0],()=>["aiModels",!1])],le=await Promise.allSettled(pe),he=le.filter(Ve=>Ve.status==="fulfilled"&&Ve.value[1]).length,Oe=le.filter(Ve=>Ve.status==="rejected"||Ve.status==="fulfilled"&&!Ve.value[1]).length;f.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(w.value.selected)),localStorage.setItem("quant_strategy_filter_mode",w.value.mode),P.value&&fetch(`/api/users/${P.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:i.value})}).catch(()=>{}),l.value=!1,p.value=new Date().toLocaleString("zh-CN"),u.value=!1,Oe>0&&console.error(`[saveAllConfig] ${he}/${he+Oe} 项保存成功，${Oe} 项失败`)}async function re(){try{const le=await(await fetch("/api/user_config/config")).json();if(le.success&&le.config){const he=le.config;he.tushare&&(H.value={...H.value,...he.tushare}),he.feishu&&(c.value={...c.value,...he.feishu}),he.ai&&(d.value={...d.value,...he.ai}),he.rate_limit&&(n.value={...n.value,...he.rate_limit}),he.auto_evaluate&&(r.value={...r.value,...he.auto_evaluate}),he.theme&&!localStorage.getItem("quant_theme")&&C(he.theme)}l.value=!1,f.value=!1}catch(pe){console.error("[resetAllConfig] 重新加载配置失败:",pe),l.value=!1}}async function se(){K.value="testing";try{const le=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(K.value=le.success?"connected":"disconnected",le.success){const he=le.data_count?` (获取到 ${le.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+he)}else ElementPlus.ElMessage.error(le.message||"连接失败")}catch{K.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ie(){try{const le=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();K.value=le.success?"connected":"disconnected"}catch{K.value="disconnected"}}async function Y(){var pe;U.value=!0;try{const he=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();he.success?(j.value=parseInt(((pe=he.message.match(/\d+/))==null?void 0:pe[0])||"0"),ElementPlus.ElMessage.success(he.message)):ElementPlus.ElMessage.error(he.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{U.value=!1}}async function oe(){try{const le=await(await fetch("/api/market/tushare/config")).json();le.success&&le.config&&(H.value={...H.value,...le.config})}catch(pe){console.warn("loadTushareConfig failed:",pe)}}function qe(pe){if(!pe)return"";const le=String(pe),he=le.length;if(he<=4)return le[0]+"*".repeat(he-1);const Oe=he<=8?2:4;return le.slice(0,Oe)+"*".repeat(he-Oe-Oe)+le.slice(-Oe)}async function ee(pe){let le;try{le=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:le,target:pe})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(he){ElementPlus.ElMessage.error("查看失败: "+he.message)}return null}async function $(pe){const le=V.value[pe];if(!le)return;if(le._revealed){le._revealed=!1,le._masked=qe(le.token);return}const he=await ee(pe);he!==null&&(le.token=he,le._revealed=!0)}async function we(pe){const le=V.value[pe];if(le){if(le._editing){le._editing=!1,le._revealed=!1,le.token&&(le._masked=qe(le.token));return}le._editing=!0;try{const he=await ee(pe);if(he===null){le._editing=!1;return}le.token=he,le._revealed=!0}catch(he){le._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+he.message)}}}async function F(){try{const le=await(await fetch("/api/market/datasource/config")).json();if(le.success&&le.config&&le.config.sources){const he=le.config.sources,Oe=Ve=>{const We={...V.value[Ve],...he[Ve]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};V.value={sxsc_tushare:Oe("sxsc_tushare"),tushare:Oe("tushare"),akshare:{...V.value.akshare,...he.akshare||{}}}}try{const Oe=await(await fetch("/api/market/datasource/status")).json();if(Oe.success&&Oe.status)for(const[Ve,We]of Object.entries(Oe.status))Z.value[Ve]=We.connected?"connected":"disconnected"}catch{}}catch(pe){console.warn("loadDatasourceConfig failed:",pe)}}async function ve(){try{const pe={};for(const[le,he]of Object.entries(V.value)){const{_revealed:Oe,_masked:Ve,_editing:We,...tt}=he;!We&&le!=="akshare"&&(tt.token=""),pe[le]=tt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:pe})}),l.value=!0}catch(pe){console.warn("saveDatasourceConfig failed:",pe)}}async function me(pe){Z.value[pe]="testing";try{const le=V.value[pe];le&&le._editing&&await ve();const Oe=await(await fetch(`/api/market/datasource/test/${pe}`,{method:"POST"})).json();Z.value[pe]=Oe.success?"connected":"disconnected",Oe.success?ElementPlus.ElMessage.success(`${pe} 连接成功`):ElementPlus.ElMessage.error(`${pe}: ${Oe.message}`)}catch{Z.value[pe]="disconnected",ElementPlus.ElMessage.error(`${pe} 连接失败`)}}async function X(){D.value=!1;try{const le=await(await fetch("/api/feishu/config")).json();le&&typeof le=="object"&&(c.value={...c.value,...le},E.value=JSON.parse(JSON.stringify(c.value)))}catch(pe){D.value=!0,console.warn("loadFeishuConfig failed:",pe)}}async function ue(){try{const le=await(await fetch("/api/ai/config")).json();if(le.success&&le.data)d.value={...d.value,...le.data};else{const he=localStorage.getItem("quant_ai_config");he&&(d.value=JSON.parse(he))}}catch{const le=localStorage.getItem("quant_ai_config");le&&(d.value=JSON.parse(le))}}async function Ee(){try{const le=await(await fetch("/api/user_config/config")).json();if(le.success&&le.config){const he=le.config;he.tushare&&(H.value={...H.value,...he.tushare}),he.datasource&&he.datasource.sources&&(V.value={sxsc_tushare:{...V.value.sxsc_tushare,...he.datasource.sources.sxsc_tushare||{}},tushare:{...V.value.tushare,...he.datasource.sources.tushare||{}},akshare:{...V.value.akshare,...he.datasource.sources.akshare||{}}}),he.feishu&&(c.value={...c.value,...he.feishu},E.value=JSON.parse(JSON.stringify(c.value))),he.ai&&(d.value={...d.value,...he.ai}),he.rate_limit&&(n.value={...n.value,...he.rate_limit}),he.theme&&!localStorage.getItem("quant_theme")&&C(he.theme),he.auto_evaluate&&(r.value={...r.value,...he.auto_evaluate})}}catch(pe){console.warn("加载用户配置失败，使用本地缓存",pe)}}async function _e(){var pe,le,he,Oe;try{const We=await(await fetch("/api/dashboard")).json(),tt=We.success?We.data:We;j.value=((pe=tt==null?void 0:tt.stats)==null?void 0:pe.total_stocks_covered)||null;const ye=await(await fetch("/api/dates")).json();B.value=((le=ye==null?void 0:ye.data)==null?void 0:le.total)||((Oe=(he=ye==null?void 0:ye.data)==null?void 0:he.dates)==null?void 0:Oe.length)||null;const Re=await(await fetch("/api/ai/history")).json();A.value="ok"}catch{A.value="pending"}}async function Ne(){q.value=!1;try{const le=await(await fetch("/api/dashboard")).json();k.value=le.success?le.data:le,_.value=Date.now()}catch(pe){q.value=!0,console.error("加载总览数据失败",pe)}}return{configSaving:u,configChanged:o,globalConfigDirty:l,lastSavedTime:p,feishuConfigOriginal:E,aiConfigOriginal:I,tushareConfigOriginal:z,tushareConfig:H,tushareStatus:K,datasourceConfig:V,datasourceStatus:Z,syncingData:U,stockCount:j,tradeDateCount:B,aiStatus:A,appVersion:a,showImportDialog:S,rateLimitConfig:n,rateLimitDirty:f,rateLimitSaving:J,loadRateLimit:N,saveRateLimit:x,saveAiConfig:v,testAiApi:R,exportConfig:b,importConfig:O,saveAllConfig:ae,resetAllConfig:re,testTushareConnection:se,checkTushareConnection:ie,syncStockData:Y,loadTushareConfig:oe,loadDatasourceConfig:F,saveDatasourceConfig:ve,testDatasource:me,toggleDatasourceKeyReveal:$,toggleDatasourceEdit:we,loadFeishuConfig:X,loadAiConfig:ue,loadUserConfig:Ee,loadSystemStatus:_e,loadDashboardData:Ne,overviewError:q,feishuConfigError:D}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(s){const{ref:e,computed:m}=Vue,{currentUser:t,applyTheme:o,allMenuDefs:d,loadGroupConfig:y}=s,c=function(X){const ue=window.__quantModules&&window.__quantModules.themes;return ue&&ue.applyLegacyTheme?ue.applyLegacyTheme(X):o(X)},i=e([]),g=e(""),r=e(""),P=e("users"),w=e({}),M=e({}),k=m(()=>{let X=i.value;if(r.value&&(X=X.filter(Ee=>(Ee.group||Ee.role)===r.value)),!g.value)return X;const ue=g.value.toLowerCase();return X.filter(Ee=>Ee.username.toLowerCase().includes(ue))});function _(X){w.value={...w.value,[X]:!w.value[X]}}async function T(X,ue){try{const _e=await(await fetch("/api/groups/"+ue+"/members/"+X,{method:"DELETE"})).json();_e.success?(await ee(),await oe()):ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function C(X){const ue=M.value[X];if(ue)try{const _e=await(await fetch("/api/groups/"+X+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ue})})).json();_e.success?(await ee(),await oe(),M.value={...M.value,[X]:""}):ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function u(X,ue){try{const _e=await(await fetch("/api/users/"+X.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ue})})).json();_e.success?await ee():ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=e(!1),p=e(null),E=e({username:"",password:"",role:"user",theme:"tech-blue"}),I=e(!1),q=e(null),D=e(!1),z=e(!1),H=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),K=e({}),V=e(!1),Z=e({group_id:"",name:"",description:""}),U=e(!1),j=e([]),B=e(""),A=e(""),a=e({});function S(X){a.value={...a.value,[X]:!a.value[X]}}function n(X){return!i.value||!i.value.length?0:i.value.filter(ue=>(ue.group||ue.role)===X).length}function f(X){const ue=(X==null?void 0:X.visible_menus)||{};return Object.values(ue).filter(Boolean).length}const J=m(()=>Object.keys(Y.value).length);async function N(X){A.value=X,z.value=!0,await x(X)}async function x(X){try{const Ee=await(await fetch("/api/groups/"+X+"/members")).json();Ee.success&&(j.value=Ee.members||[])}catch(ue){j.value=[],console.error("[loadGroupMembers]",ue)}}async function v(){if(!(!B.value||!A.value)){U.value=!0;try{const ue=await(await fetch("/api/groups/"+A.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:B.value})})).json();ue.success?(await x(A.value),await ee(),B.value=""):ElementPlus.ElMessage.error(ue.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{U.value=!1}}}async function R(X){try{const Ee=await(await fetch("/api/groups/"+A.value+"/members/"+X,{method:"DELETE"})).json();Ee.success?(await x(A.value),await ee()):ElementPlus.ElMessage.error(Ee.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const b=m(()=>{if(!i.value)return[];const X=new Set(j.value.map(ue=>ue.username));return i.value.filter(ue=>ue.username!=="admin"&&ue.username!=="guest"&&!X.has(ue.username))});function O(X){const ue=H.value.visible_menus[X],Ee=d.find(_e=>_e.key===X);if(Ee)if(ue){const _e=K.value[X]||{};Ee.subPages.forEach(Ne=>{const pe=X+"."+Ne;H.value.visible_sub_pages[pe]=_e[Ne]!==void 0?_e[Ne]:!0})}else{const _e={};Ee.subPages.forEach(Ne=>{const pe=X+"."+Ne;_e[Ne]=H.value.visible_sub_pages[pe],H.value.visible_sub_pages[pe]=!1}),K.value[X]=_e}}function ae(X){q.value=X;const ue=Y.value[X]||{};H.value={name:ue.name||X,description:ue.description||"",visible_menus:{...ue.visible_menus||{}},visible_sub_pages:{...ue.visible_sub_pages||{}}},K.value={},d.forEach(Ee=>{const _e={};Ee.subPages.forEach(Ne=>{_e[Ne]=H.value.visible_sub_pages[Ee.key+"."+Ne]}),K.value[Ee.key]=_e}),D.value=!0}async function re(){U.value=!0;try{const ue=await(await fetch("/api/groups/"+q.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(H.value)})).json();ue.success?(D.value=!1,q.value=null,await oe(),await y()):ElementPlus.ElMessage.error(ue.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}async function se(X){var ue;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ue=Y.value[X])==null?void 0:ue.name)||X)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const Ne=await(await fetch("/api/groups/"+X,{method:"DELETE"})).json();Ne.success?await oe():ElementPlus.ElMessage.error(Ne.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function ie(){if(Z.value.group_id){U.value=!0;try{const ue=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();ue.success?(V.value=!1,Z.value={group_id:"",name:"",description:""},await oe()):ElementPlus.ElMessage.error(ue.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{U.value=!1}}}const Y=e({});async function oe(){try{if(!localStorage.getItem("quant_token"))return;const ue=await fetch("/api/groups");if(ue.ok){const Ee=await ue.json();Y.value=Ee.groups||{}}}catch(X){console.warn("loadAllGroups:",X)}}function qe(X){var ue;return((ue=Y.value[X])==null?void 0:ue.name)||X||"--"}async function ee(){try{if(!localStorage.getItem("quant_token")){i.value=[];return}const ue=await fetch("/api/users");if(ue.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Ee=await ue.json();i.value=Ee.users||[]}catch(X){i.value=[],console.error("[loadUsers] error:",X)}}function $(X){p.value=X,E.value={username:X.username,password:"",role:X.role,theme:X.theme||"tech-blue",group:X.group||X.role},l.value=!0}async function we(){if(E.value.username){I.value=!0;try{const X=p.value?"PUT":"POST",ue=p.value?`/api/users/${E.value.username}`:"/api/users",_e=await(await fetch(ue,{method:X,headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();if(_e.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&E.value.username===t.value.username){const Ne=E.value.theme;Ne&&Ne!==t.value.theme&&(t.value.theme=Ne,localStorage.setItem("quant_user",JSON.stringify(t.value)),c(Ne))}l.value=!1,p.value=null,await ee()}else ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{I.value=!1}}}async function F(X){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${X}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await ee())}catch(ue){console.error("[deleteUser]",ue)}}async function ve(X){try{const Ee=await(await fetch(`/api/users/${X.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:X.enabled})})).json();Ee.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Ee.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function me(X){try{const{value:ue}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${X.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ue){const _e=await(await fetch(`/api/users/${X.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ue})})).json();_e.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(_e.message||"重置失败")}}catch{}}return{userList:i,userSearch:g,groupFilter:r,userPageTab:P,expandedGroups:w,addMemberGroupMap:M,filteredUsers:k,toggleGroupExpand:_,removeMemberFromGroupInline:T,addMemberToGroupInline:C,changeUserGroup:u,showAddUser:l,editingUser:p,userForm:E,savingUser:I,editingGroup:q,menuConfigDialog:D,memberDialog:z,groupEditForm:H,subPageCache:K,showAddGroup:V,addGroupForm:Z,savingGroup:U,groupMembers:j,addMemberUsername:B,selectedMemberGroup:A,subPageSectionExpanded:a,toggleSubPageSection:S,getGroupMemberCount:n,getMenuEnabledCount:f,groupCount:J,openMemberManager:N,loadGroupMembers:x,addMemberToGroup:v,removeMemberFromGroup:R,availableUsersForGroup:b,onParentToggle:O,openMenuConfig:ae,saveMenuConfig:re,deleteGroupConfig:se,createGroup:ie,allGroups:Y,getGroupName:qe,loadAllGroups:oe,loadUsers:ee,editUser:$,saveUser:we,deleteUser:F,toggleUserEnabled:ve,resetUserPassword:me}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(s){const{ref:e,computed:m}=Vue,{stockKlineLoaded:t,stockDetailVisible:o,stockDetailTab:d,stockDetail:y,disposeStockKline:c}=s,i=e([]),g=e(!1),r=e(!1),P=e("date"),w=e([]),M=e([]),k=e([]),_=e([]),T=m(()=>{var v,R;const x=[];for(const b of i.value){if(!b||b.id==null)continue;const O=b.stock_name||b.stock_code||"",ae=Array.isArray(b.messages)?b.messages:[];x.push({id:b.id,stock_code:b.stock_code,stock_name:O,first_msg:b.first_msg||((R=(v=ae[0])==null?void 0:v.content)==null?void 0:R.substring(0,50))||"",msg_count:b.msg_count||ae.length||0,created_at:b.created_at,date:(b.created_at||"").substring(0,10),month:(b.created_at||"").substring(0,7),messages:ae})}return x}),C=m(()=>{const x={};for(const R of T.value){const b=R.date||"未知";x[b]||(x[b]=[]),x[b].push(R)}const v={};return Object.keys(x).sort((R,b)=>b.localeCompare(R)).forEach(R=>v[R]=x[R]),v}),u=m(()=>{const x={};for(const R of T.value){const b=R.month||"未知";x[b]||(x[b]=[]),x[b].push(R)}const v={};return Object.keys(x).sort((R,b)=>b.localeCompare(R)).forEach(R=>v[R]=x[R]),v}),l=m(()=>{const x={};for(const v of T.value){const R=`${v.stock_name}(${v.stock_code})`;x[R]||(x[R]=[]),x[R].push(v)}return x});function p(x){const v=w.value.indexOf(x);v>=0?w.value.splice(v,1):w.value.push(x)}function E(x){const v=C.value[x]||[];if(v.every(b=>w.value.includes(b.id)))w.value=w.value.filter(b=>!v.some(O=>O.id===b));else for(const b of v)w.value.includes(b.id)||w.value.push(b.id)}function I(x){const v=u.value[x]||[];if(v.every(b=>w.value.includes(b.id)))w.value=w.value.filter(b=>!v.some(O=>O.id===b));else for(const b of v)w.value.includes(b.id)||w.value.push(b.id)}function q(x){const v=l.value[x]||[];if(v.every(b=>w.value.includes(b.id)))w.value=w.value.filter(b=>!v.some(O=>O.id===b));else for(const b of v)w.value.includes(b.id)||w.value.push(b.id)}function D(x){const v=M.value.indexOf(x);v>=0?M.value.splice(v,1):M.value.push(x)}function z(x){const v=k.value.indexOf(x);v>=0?k.value.splice(v,1):k.value.push(x)}function H(x){const v=_.value.indexOf(x);v>=0?_.value.splice(v,1):_.value.push(x)}function K(){w.value.length===T.value.length?w.value=[]:w.value=T.value.map(x=>x.id)}async function V(){if(w.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${w.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const x of[...w.value])await J(x);w.value=[]}}const Z={};async function U(x){y.value={stock:x.stock_code,name:x.stock_name},o.value=!0,d.value="chat",t.value=!1,c(),A.value=!0,a.value="",B.value=[];try{let v=Z[x.id];if(!v){const R=await fetch("/api/ai/chat/history/"+x.id);if(!R.ok)throw new Error("load history failed");v=(await R.json()).messages||[],Z[x.id]=v}B.value=v.map(R=>({role:R.role,content:R.content}))}catch{a.value="历史消息加载失败，请重试"}finally{A.value=!1}}const j=e(""),B=e([]),A=e(!1),a=e("");async function S(){var R;const x=j.value.trim();if(!x||A.value)return;a.value="",B.value.push({role:"user",content:x}),j.value="",A.value=!0;const v=B.value.length;B.value.push({role:"assistant",content:""});try{const ae=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((R=y.value)==null?void 0:R.stock)||"",message:x})})).body.getReader(),re=new TextDecoder;let se="";for(;;){const{done:ie,value:Y}=await ae.read();if(ie)break;se+=re.decode(Y,{stream:!0});const oe=se.split(`
`);se=oe.pop()||"";for(const qe of oe)if(qe.startsWith("data: "))try{const ee=JSON.parse(qe.slice(6));ee.token?B.value[v].content+=ee.token:ee.done?console.log("Stream done:",ee.session_id):ee.error&&(a.value=ee.error)}catch(ee){console.warn("SSE parse error:",ee)}}}catch(b){B.value[v].content||(B.value[v].content="网络错误: "+b.message)}A.value=!1}async function n(x){var R;a.value="",A.value=!0;const v={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};B.value.push({role:"user",content:v[x]||v.comprehensive});try{const O=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((R=y.value)==null?void 0:R.stock)||"",mode:x})});if(O.ok){const ae=await O.json();B.value.push({role:"assistant",content:ae.reply||"无回复"})}}catch(b){a.value="网络错误: "+b.message}A.value=!1}async function f(){g.value=!0,r.value=!1;try{const x=await fetch("/api/ai/chat/history?view=date");if(x.ok){const v=await x.json(),R=[];for(const b of v)for(const O of b.items||[])R.push(O);i.value=R}else r.value=!0}catch(x){console.error(x),r.value=!0}finally{g.value=!1}}async function J(x){try{await fetch("/api/ai/chat/history/"+x,{method:"DELETE"}),i.value=i.value.filter(v=>v.id!==x)}catch(v){console.error("deleteChatSession:",v)}}function N(x){if(!x)return"";const v=String(x).split(`
`),R=[],b=[];let O=0;for(;O<v.length;){if(/^\s*\|.*\|\s*$/.test(v[O])){let re=O;const se=[];for(;re<v.length&&/^\s*\|.*\|\s*$/.test(v[re]);)se.push(v[re]),re++;const ie=qe=>qe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ee=>ee.trim()),Y=se.map(ie);if(Y.length>1&&Y[1].every(qe=>/^:?-{3,}:?$/.test(qe))){const qe=Math.max(...Y.map(F=>F.length)),ee=Y[0].slice(0,qe),$=Y.slice(2);let we="<table>";$.length?(we+="<thead><tr>"+ee.map(F=>"<th>"+F+"</th>").join("")+"</tr></thead>",we+="<tbody>"+$.map(F=>"<tr>"+F.slice(0,qe).map(ve=>"<td>"+ve+"</td>").join("")+"</tr>").join("")+"</tbody>"):we+="<tbody><tr>"+ee.map(F=>"<td>"+F+"</td>").join("")+"</tr></tbody>",we+="</table>",R.push(we),b.push("\0T"+(R.length-1)+"\0"),O=re;continue}for(;O<re;)b.push(v[O]),O++;continue}b.push(v[O]),O++}let ae=b.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return R.forEach((re,se)=>{ae=ae.split("\0T"+se+"\0").join(re)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ae=window.__quantModules.core.sanitizeHtml(ae)),ae}return{chatSessions:i,chatHistoryView:P,selectedChatIds:w,expandedChatDates:M,expandedChatMonths:k,expandedChatStocks:_,chatHistoryLoading:g,chatHistoryError:r,allChatSessionsFlat:T,chatGroupedByDate:C,chatGroupedByMonth:u,chatGroupedByStock:l,toggleSelectChat:p,toggleSelectChatDate:E,toggleSelectChatMonth:I,toggleSelectChatStock:q,toggleChatDateExpand:D,toggleChatMonthExpand:z,toggleChatStockExpand:H,selectAllChatSessions:K,deleteSelectedChatSessions:V,viewChatSession:U,loadChatHistory:f,deleteChatSession:J,renderMarkdown:N,stockChatInput:j,stockChatMessages:B,stockChatLoading:A,stockChatError:a,askStockSend:S,askStockQuick:n}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e={},m=0;function t(c,i,g){if(typeof c!="function")return"";var r="undo-"+ ++m,P={fn:c,label:i||"",timer:null,active:!0};return e[r]=P,g&&g>0&&(P.timer=setTimeout(function(){d(r)},g)),r}function o(c){var i=e[c];if(!i||!i.active)return!1;i.timer&&clearTimeout(i.timer),delete e[c],i.active=!1;try{i.fn()}catch{}return!0}function d(c){var i=e[c];i&&(i.timer&&clearTimeout(i.timer),delete e[c],i.active=!1)}function y(){var c=0;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&c++;return c}return{register:t,undo:o,remove:d,activeCount:y}}return{createUndoStack:s}});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function s(d,y,c){return"qc_fm_"+(d||"guest")+"_"+y+"_v"+(c||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function m(d,y,c,i){var g=e();if(!g||!d||y===void 0||y===null)return!1;try{return g.setItem(s(c,d,i),JSON.stringify(y)),!0}catch{return!1}}function t(d,y,c){var i=e();if(!i||!d)return null;try{var g=i.getItem(s(y,d,c));return g?JSON.parse(g):null}catch{return null}}function o(d,y,c){var i=e();if(!(!i||!d))try{i.removeItem(s(y,d,c))}catch{}}return{saveForm:m,loadForm:t,clearForm:o}});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var s="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function m(d){var y=e();if(!y||!d)return!1;try{return y.setItem(s,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var y=d.getItem(s);return y?JSON.parse(y):null}catch{return null}}function o(){var d=e();if(d)try{d.removeItem(s)}catch{}}return{save:m,restore:t,clear:o,KEY:s}});(function(){if(typeof window>"u")return;let s=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function m(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var o=document.createElement("div");o.id="qc-install-bar",o.className="qc-install-bar",o.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var y=document.createElement("span");y.className="qc-install-actions";var c=document.createElement("button");c.className="qc-install-btn",c.type="button",c.textContent="安装";var i=document.createElement("button");i.className="qc-install-close",i.type="button",i.setAttribute("aria-label","关闭"),i.textContent="×",y.appendChild(c),y.appendChild(i),o.appendChild(d),o.appendChild(y),document.body.appendChild(o),c.addEventListener("click",function(){s&&(s.prompt(),s=null),o.remove()}),i.addEventListener("click",function(){m(),o.remove()})}}window.addEventListener("beforeinstallprompt",function(o){o.preventDefault(),s=o,e()||t()}),window.addEventListener("appinstalled",function(){s=null;var o=document.getElementById("qc-install-bar");o&&o.remove()})})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function s(m){var t=[];return(m||[]).forEach(function(o){if(o){var d=typeof o=="string"?o:o.code||"",y=typeof o=="object"&&o.name?String(o.name):"";d&&t.push(y&&y!==d?d+" "+y:d)}}),t.join(`
`)}function e(m){if(!m||m.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=m.added||0,o=m.existed||0,d=m.invalid||0,y=m.total||0;return{added:t,existed:o,invalid:d,total:y,failed:d,message:"已加入 "+t+" 只"+(o?"，"+o+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:s,summarize:e}});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(d,y,c,i,g,r,P){var w=P??s,M=d,k=y;return M+c>g-w&&(M=Math.max(w,g-w-c)),k+i>r-w&&(k=Math.max(w,r-w-i)),{left:Math.round(M),top:Math.round(k)}}var m=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return m.map(function(d){return{key:d.key,label:d.label}})}function o(d,y,c){var i=c??500;return!d||!y?!1:y-d>=i}return{positionMenu:e,getActions:t,isLongPress:o}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,onMounted:e,onBeforeUnmount:m}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function o(d){let y=d;for(;y&&y!==document.body;){if(y.hasAttribute&&y.hasAttribute("data-ctx-code"))return y;y=y.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const d=s(!1),y=s({left:0,top:0}),c=s(t?t.getActions():[]),i=s({});function g(){d.value=!1}function r(l,p,E){if(i.value=E||{},t){const I=window.innerWidth||document.documentElement.clientWidth,q=window.innerHeight||document.documentElement.clientHeight,D=180,z=c.value.length*32+12;y.value=t.positionMenu(l,p,D,z,I,q)}else y.value={left:l,top:p};d.value=!0}function P(l){g(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:l.key,payload:i.value}}))}function w(l){const p=o(l.target);p&&(l.preventDefault(),r(l.clientX,l.clientY,{code:p.getAttribute("data-ctx-code")||"",name:p.getAttribute("data-ctx-name")||"",context:p.getAttribute("data-ctx-context")||""}))}let M=null,k=0;function _(l){const p=o(l.target);p&&(k=Date.now(),M=setTimeout(function(){if(t&&t.isLongPress(k,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const E=l.touches&&l.touches[0];r(E?E.clientX:0,E?E.clientY:0,{code:p.getAttribute("data-ctx-code")||"",name:p.getAttribute("data-ctx-name")||"",context:p.getAttribute("data-ctx-context")||""})}},520))}function T(){M&&(clearTimeout(M),M=null)}function C(l){if(l.key==="Escape"){g();return}if(l.shiftKey&&l.key==="F10"){const p=o(document.activeElement);if(p){l.preventDefault();const E=p.getBoundingClientRect();r(E.left+E.width/2,E.bottom,{code:p.getAttribute("data-ctx-code")||"",name:p.getAttribute("data-ctx-name")||"",context:p.getAttribute("data-ctx-context")||""})}}}function u(l){d.value&&!(l.target&&l.target.closest&&l.target.closest(".qc-ctx"))&&g()}return e(function(){document.addEventListener("contextmenu",w,!0),document.addEventListener("touchstart",_,{passive:!0}),document.addEventListener("touchend",T,!0),document.addEventListener("keydown",C,!0),document.addEventListener("mousedown",u,!0)}),m(function(){document.removeEventListener("contextmenu",w,!0),document.removeEventListener("touchstart",_,!0),document.removeEventListener("touchend",T,!0),document.removeEventListener("keydown",C,!0),document.removeEventListener("mousedown",u,!0)}),{visible:d,pos:y,actions:c,run:P}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=0,m={};function t(i){var g=++e;if(i&&m[i])return{deduped:!0,id:m[i].seq,controller:m[i].controller};var r=typeof AbortController<"u"?new AbortController:null;return m[i]={seq:g,controller:r},{deduped:!1,id:g,controller:r}}function o(i,g){var r=m[i];return!r||r.seq!==g}function d(i){var g=m[i];if(g&&g.controller)try{g.controller.abort()}catch{}}function y(i,g){var r=m[i];r&&r.seq===g&&delete m[i]}function c(){var i=0;for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&i++;return i}return{begin:t,isStale:o,abort:d,finish:y,activeCount:c}}return{createRequestGuard:s}});(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function s(){var e=Object.create(null),m=Object.create(null);function t(w,M){if(!w||typeof w!="string")throw new Error("domain name required");if(e[w])throw new Error("duplicate domain: "+w);for(var k=Array.isArray(M)?M:[],_=0;_<k.length;_++){var T=k[_];if(m[T]&&m[T]!==w)throw new Error("duplicate key across domains: "+T);m[T]=w}return e[w]={keys:k.slice(),refs:Object.create(null)},!0}function o(w,M,k){var _=e[w];if(!_)throw new Error("unknown domain: "+w);if(_.keys.indexOf(M)===-1)throw new Error("key not declared in domain: "+w+"."+M);return _.refs[M]=k,!0}function d(w,M){var k=e[w];return!!k&&M in k.refs}function y(w,M){var k=e[w];if(k){var _=k.refs[M];return _&&typeof _=="object"&&"value"in _?_.value:_}}function c(w){var M=e[w];if(!M)return null;for(var k={},_=0;_<M.keys.length;_++){var T=M.keys[_],C=M.refs[T];k[T]=C&&typeof C=="object"&&"value"in C?C.value:C}return k}function i(w,M){var k=e[w];if(!k||!M)return!1;for(var _=0;_<k.keys.length;_++){var T=k.keys[_];if(T in M){var C=k.refs[T];C&&typeof C=="object"&&"value"in C&&(C.value=M[T])}}return!0}function g(){return Object.keys(e)}function r(w){var M=e[w];return M?M.keys.slice():[]}function P(){for(var w=0,M=Object.keys(e),k=0;k<M.length;k++)w+=Object.keys(e[M[k]].refs).length;return w}return{defineDomain:t,attach:o,has:d,get:y,snapshot:c,restore:i,domains:g,keys:r,attachedCount:P}}return{createStateRegistry:s}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(s){const{ref:e,computed:m,watch:t}=Vue,{consensus:o,currentPage:d,currentSubPage:y,dashboardData:c,searchKeyword:i,statusFilter:g,strategyFilter:r,strategyFilterCounts:P}=s;function w(z){const H=r.value.selected;if(!H||H.length===0)return z;const K=r.value.mode;return z.filter(V=>{const Z=V.strategy_names||V.strategies||[];return K==="union"?H.some(U=>Z.includes(U)):H.every(U=>Z.includes(U))})}const M=m(()=>{const z=w(o.value||[]);return{all:z.length,newCount:z.filter(H=>H.status==="new").length,current:z.filter(H=>H.status==="current").length,out:z.filter(H=>H.status==="out").length}}),k=m(()=>{let z=o.value||[];if(g.value!=="all"&&(z=z.filter(H=>H.status===g.value)),z=w(z),i.value){const H=i.value.toLowerCase();z=z.filter(K=>K.code.toLowerCase().includes(H)||K.name&&K.name.toLowerCase().includes(H))}return z}),_=m(()=>{const z=o.value||[],H={},K={};for(const V of z)V.code&&V.name&&(K[V.code]=V.name);for(const V of z){const Z=V.strategy_names||V.strategies||[];for(const U of Z)H[U]||(H[U]={strategy:U,count:0,codes:[],names:[]}),H[U].count++,H[U].codes.includes(V.code)||(H[U].codes.push(V.code),H[U].names.push({code:V.code,name:K[V.code]||V.code}))}return Object.values(H).sort((V,Z)=>Z.count-V.count)}),T=m(()=>{const z=r.value.selected,H=r.value.mode,K={};for(const[V,Z]of Object.entries(P.value)){const U=Z||[];!z||z.length===0?K[V]=U.length:H==="union"?K[V]=U.filter(j=>j.strategies&&z.some(B=>j.strategies.includes(B))).length:K[V]=U.filter(j=>j.strategies&&z.every(B=>j.strategies.includes(B))).length}return K});function C(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(r.value.selected)),localStorage.setItem("quant_strategy_filter_mode",r.value.mode)}const u=m(()=>{const z=(c.value||{}).consensus_rank||[];return w(z)}),l=m(()=>{const z=o.value||P.value.day||[];return w(z).length}),p=m(()=>{const z=(c.value||{}).strategy_counts||[],H=o.value||P.value.day||[];if(H.length===0)return z;const K=w(H),V={};K.forEach(U=>{(U.strategy_names||U.strategies||[]).forEach(B=>{V[B]=(V[B]||0)+1})});const Z=K.length||1;return z.map(U=>{const j=U.strategy_name||U.strategy_id,B=V[j]||0;return{...U,count:B,percentage:Math.round(B/Z*1e3)/10}})}),E=m(()=>{const z=(c.value||{}).pool_changes||{},H=(z.new_count||0)-(z.out_count||0);return H>0?{dir:"up",text:"↑"+H}:H<0?{dir:"down",text:"↓"+Math.abs(H)}:{dir:"flat",text:"→0"}}),I=m(()=>{const z=(c.value||{}).time_coverage||{},H=new Date(z.start_date),K=new Date(z.end_date),V=new Date;if(!H.getTime()||!K.getTime()||V>=K)return 100;if(V<=H)return 0;const Z=K-H,U=V-H;return Math.round(U/Z*100)}),q=e(null);function D(z){r.value.selected=[z],r.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([z])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",y.value="calendar"}return{applyStrategyFilter:w,statusCounts:M,stockPool:k,strategyDistribution:_,strategyPreviewCount:T,saveStrategyFilter:C,filteredConsensusRank:u,currentPoolSize:l,filteredStrategyCounts:p,poolChangeBadge:E,timeBarPercent:I,lastRefreshTime:q,navigateToStrategyFilter:D}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.history={create:function(s){const{ref:e,computed:m,watch:t,currentUser:o,selectedDate:d,stockDetail:y,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:w,loadStockKline:M,refreshStockScore:k,disposeStockKline:_,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:p,aiResult:E,loadLastEvaluation:I,autoEvaluateConfig:q,autoEvaluateScope:D,batchStocks:z,batchRunning:H,batchTotal:K,batchCompleted:V,batchCurrent:Z,batchStatuses:U,batchResults:j,batchEvalErrors:B,expandedDates:A,expandedStocks:a,savingConfig:S,selectedHistoryIds:n,selectedWatchlistCodes:f,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:v,evalStrategy:R,watchlistSort:b,watchlist:O,watchlistCodes:ae,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:ie,getWatchlistScore:Y,getLatestScore:oe,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:we,watchlistSearch:F,watchlistResults:ve,watchlistSearching:me,dataRefreshConfig:X,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:_e,levelBgVar:Ne,undoStack:pe,showUndoMessage:le,addToWatchlist:he,removeFromWatchlist:Oe}=s;async function Ve(){if(!y.value)return;C.value=!0,E.value=null,p.value="",u.value="fetching",l.value=0;const Me=Date.now(),Ce=setInterval(()=>{C.value&&(l.value=Math.round((Date.now()-Me)/1e3))},500);try{const ze=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:y.value.stock,stock_name:y.value.name||y.value.stock,strategy:R.value})});u.value="calculating";const je=await ze.json();u.value="analyzing",je.success?(await nextTick(),E.value=je.data,c.value="ai",Ae()):(p.value=je.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch(ze){p.value=ze&&ze.message&&!String(ze.message).includes("Failed to fetch")?ze.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{clearInterval(Ce),C.value=!1,l.value=0,p.value?u.value="":(u.value="done",setTimeout(()=>{u.value==="done"&&(u.value="")},800))}}const We=50,tt=e(0),be=e(!1),ye=m(()=>T.value.length<tt.value);async function Ae(){re.value=!0,se.value=!1;try{if(!localStorage.getItem("quant_token")){T.value=[];return}const Ce=await fetch(`/api/ai/history?limit=${We}&offset=0`);if(Ce.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),o.value=null;return}const ze=await Ce.json();ze.success?(T.value=ze.data||[],tt.value=ze.total!=null?ze.total:T.value.length):se.value=!0}catch(Me){console.error("[loadAiHistory] error:",Me),se.value=!0}finally{re.value=!1}}async function Re(){if(!(be.value||!ye.value)){be.value=!0;try{const Ce=await(await fetch(`/api/ai/history?limit=${We}&offset=${T.value.length}`)).json();if(Ce.success&&Array.isArray(Ce.data)){const ze=new Set(T.value.map(Fe=>Fe.id)),je=Ce.data.filter(Fe=>!ze.has(Fe.id));T.value=T.value.concat(je),Ce.total!=null&&(tt.value=Ce.total)}}catch(Me){console.warn("[loadMoreAiHistory] error:",Me)}finally{be.value=!1}}}async function Ye(Me){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ze=await(await fetch(`/api/ai/history/${Me}`,{method:"DELETE"})).json();if(ze.success){ElementPlus.ElMessage.success("删除成功"),Ae();const je=n.value.indexOf(Me);je>=0&&n.value.splice(je,1)}else ElementPlus.ElMessage.error(ze.message||"删除失败")}catch{}}function Ue(Me){const Ce=n.value.indexOf(Me);Ce>=0?n.value.splice(Ce,1):n.value.push(Me)}function Qe(){n.value=[]}function $e(){f.value=[]}async function st(){const Me=n.value;if(Me.length===0)return;const Ce=T.value.filter(ze=>Me.includes(ze.id)).map(ze=>ze.stock_code);N.value=!0,z.value=[...new Set(Ce)].join(",")}async function gt(){const Me=n.value;if(Me.length===0)return;const Ce=T.value.filter(Fe=>Me.includes(Fe.id)),ze=[...new Map(Ce.map(Fe=>[Fe.stock_code,Fe])).values()];let je=0;for(const Fe of ze)ae.value.has(Fe.stock_code)||(await he(Fe.stock_code,Fe.stock_name||Fe.stock_code),je++);je>0?ElementPlus.ElMessage.success(`已加入 ${je} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function fe(){const Me=n.value;if(Me.length===0)return;const Ce=T.value.filter(je=>Me.includes(je.id)),ze=[...new Map(Ce.map(je=>[je.stock_code,je])).values()];try{const Fe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ze.map(Xe=>({stock_code:Xe.stock_code,stock_name:Xe.stock_name||""}))})})).json();Fe&&Fe.success?ElementPlus.ElMessage.success(`已登记 ${Fe.count||ze.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Fe&&Fe.detail||"批量加入组合失败")}catch(je){console.warn("batchAddToPortfolio failed:",je),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function xe(){if(f.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${f.value.length} 只股票？`,"提示",{type:"warning"});for(const Me of f.value)await Oe(Me);f.value=[],ElementPlus.ElMessage.success("已移除")}catch(Me){Me&&Me.message!=="cancel"&&console.warn("batchRemoveWatchlist:",Me)}}function Le(Me){const Ce=f.value.indexOf(Me);Ce>=0?f.value.splice(Ce,1):f.value.push(Me)}function h(){n.value.length===T.value.length?n.value=[]:n.value=T.value.map(Me=>Me.id)}function L(){f.value.length===O.value.length?f.value=[]:f.value=O.value.map(Me=>Me.code)}async function G(){if(n.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${n.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const Ce=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:n.value})})).json();Ce.success?(ElementPlus.ElMessage.success(Ce.message),n.value=[],Ae()):ElementPlus.ElMessage.error(Ce.message||"删除失败")}catch{}}async function ce(){try{const Ce=await(await fetch("/api/ai/auto-config")).json();Ce.success&&(q.value=Ce.data,Ce.data.evaluate_scope&&(D.value=Ce.data.evaluate_scope))}catch(Me){console.warn("loadAutoEvaluateConfig failed:",Me)}}async function de(){S.value=!0;try{q.value.evaluate_scope=D.value;const Ce=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q.value)})).json();Ce.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),J.value=!1):ElementPlus.ElMessage.error(Ce.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{S.value=!1}}return{doAiEvaluate:Ve,aiHistoryTotal:tt,aiHistoryLoadingMore:be,hasMoreAiHistory:ye,loadAiHistory:Ae,loadMoreAiHistory:Re,deleteSingleHistory:Ye,toggleSelectHistory:Ue,clearSelection:Qe,clearWatchlistSelection:$e,batchReevaluateHistory:st,batchAddToWatchlist:gt,batchAddToPortfolio:fe,batchRemoveWatchlist:xe,toggleSelectWatchlist:Le,selectAllHistory:h,selectAllWatchlist:L,deleteSelectedHistory:G,loadAutoEvaluateConfig:ce,saveAutoEvaluateConfig:de}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.list={create:function(s){const{ref:e,computed:m,watch:t,currentUser:o,selectedDate:d,stockDetail:y,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:w,loadStockKline:M,refreshStockScore:k,disposeStockKline:_,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:p,aiResult:E,loadLastEvaluation:I,autoEvaluateConfig:q,autoEvaluateScope:D,batchStocks:z,batchRunning:H,batchTotal:K,batchCompleted:V,batchCurrent:Z,batchStatuses:U,batchResults:j,batchEvalErrors:B,expandedDates:A,expandedStocks:a,savingConfig:S,selectedHistoryIds:n,selectedWatchlistCodes:f,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:v,evalStrategy:R,watchlistSort:b,watchlist:O,watchlistCodes:ae,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:ie,getWatchlistScore:Y,getLatestScore:oe,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:we,watchlistSearch:F,watchlistResults:ve,watchlistSearching:me,dataRefreshConfig:X,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:_e,levelBgVar:Ne,undoStack:pe,showUndoMessage:le,loadAiHistory:he}=s,Oe=e(!1);async function Ve(){Oe.value=!0;try{const G=await(await fetch("/api/watchlist")).json();G.success&&(O.value=G.stocks||[])}catch(L){console.warn("loadWatchlist failed:",L)}finally{Oe.value=!1}}async function We(L,G){try{const de=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:L,name:G})})).json();if(de.success)return de.existed||O.value.push({code:L,name:G,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function tt(L){try{const G=O.value.find(de=>de.code===L),ce=G&&G.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(L)}`,{method:"DELETE"}),O.value=O.value.filter(de=>de.code!==L),ae.value&&ae.value.delete&&ae.value.delete(L),pe){const de=pe.register(()=>{We(L,ce)},"移除自选",5e3);le("已移除自选",de)}else ElementPlus.ElMessage.info("已移除自选")}catch(G){console.warn("removeFromWatchlist failed:",G)}}async function be(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const L=O.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),O.value=[],ae.value&&ae.value.clear&&ae.value.clear(),ElementPlus.ElMessage.success("自选已清空"),pe&&L.length){const G=pe.register(()=>{L.forEach(ce=>We(ce.code,ce.name||""))},"清空自选",5e3);le("自选已清空",G)}}catch(L){console.warn("clearWatchlist failed:",L)}}async function ye(L,G){ae.value.has(L)?(await tt(L),ElementPlus.ElMessage.info("已移除自选")):await We(L,G)&&ElementPlus.ElMessage.success("已加入自选")}async function Ae(L,G){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(L,G||"");const ce=new Date().toISOString().split("T")[0],de=d.value||ce;c.value="kline",E.value=null,p.value="",_("stockKlineChart"),y.value=null,g.value=!0,r.value=!1,i.value=!0,nextTick(()=>w());try{const Me=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${de}`);y.value=await Me.json()}catch{y.value={stock:L,name:G,total_days:0}}finally{g.value=!1}await nextTick(),await M("daily"),k(),I(L)}const Re=e(!1);async function Ye(){var L;if(O.value.length!==0){Re.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((L=ce.details)==null?void 0:L.loaded)||[]).forEach(de=>$.value.add(de.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(G){console.error("预加载K线失败:",G)}finally{Re.value=!1}}}async function Ue(L,G){C.value=!0,E.value=null,p.value="",u.value="fetching",r.value=!1,_();const ce=new Date().toISOString().split("T")[0],de=d.value||ce;try{const Me=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${de}`);y.value=await Me.json()}catch{y.value={stock:L,name:G,total_days:0}}c.value="ai",i.value=!0,await nextTick();try{const Ce=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:L,stock_name:G})})).json();Ce.success?(E.value=Ce.data,he()):(p.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{C.value=!1,u.value=""}}async function Qe(){O.value.length!==0&&(N.value=!0,z.value=O.value.map(L=>L.code).join(","))}async function $e(){f.value.length!==0&&(N.value=!0,z.value=f.value.join(","))}async function st(){if(!F.value.trim()){ve.value=[];return}me.value=!0;try{const G=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(F.value)}`)).json();ve.value=(G.results||[]).filter(ce=>!ae.value.has(ce.code))}catch(L){console.warn("searchStockForWatchlist failed:",L)}finally{me.value=!1}}async function gt(){try{const G=await(await fetch("/api/data-refresh/config")).json();X.value=G}catch(L){console.error("加载数据刷新配置失败:",L)}}async function fe(){Ee.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ee.value=!1}}async function xe(){var L;ue.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((L=ce.parser_stats)==null?void 0:L.dates_count)||0}交易日`),P.clear(),await gt()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{ue.value=!1}}const Le=e(!1);async function h(){Le.value=!0;try{const G=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(G.success){const ce=G.result||{},de=G.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${de.pulled||0}/${de.total||0}`),P.clear(),await gt()}else ElementPlus.ElMessage.error(G.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Le.value=!1}}return{watchlistLoading:Oe,loadWatchlist:Ve,addToWatchlist:We,removeFromWatchlist:tt,clearWatchlist:be,toggleWatchlist:ye,showStockKline:Ae,preloadingKline:Re,preloadWatchlistKline:Ye,watchlistEvaluate:Ue,batchEvaluateWatchlist:Qe,batchEvaluateSelected:$e,searchStockForWatchlist:st,loadDataRefreshConfig:gt,saveDataRefreshConfig:fe,triggerDataReload:xe,dataPullRunning:Le,triggerDataPull:h}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.analytics={create:function(s){const{ref:e,computed:m,watch:t,currentUser:o,selectedDate:d,stockDetail:y,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:w,loadStockKline:M,refreshStockScore:k,disposeStockKline:_,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:p,aiResult:E,loadLastEvaluation:I,autoEvaluateConfig:q,autoEvaluateScope:D,batchStocks:z,batchRunning:H,batchTotal:K,batchCompleted:V,batchCurrent:Z,batchStatuses:U,batchResults:j,batchEvalErrors:B,expandedDates:A,expandedStocks:a,savingConfig:S,selectedHistoryIds:n,selectedWatchlistCodes:f,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:v,evalStrategy:R,watchlistSort:b,watchlist:O,watchlistCodes:ae,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:ie,getWatchlistScore:Y,getLatestScore:oe,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:we,watchlistSearch:F,watchlistResults:ve,watchlistSearching:me,dataRefreshConfig:X,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:_e,levelBgVar:Ne,undoStack:pe,showUndoMessage:le,loadAiHistory:he}=s,Oe=m(()=>{const h={};for(const L of T.value){const G=(L.evaluate_time||"").split("T")[0];h[G]||(h[G]=[]),h[G].push(L)}for(const L in h)h[L].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),Ve=m(()=>{const h={};for(const L of T.value){const G=L.stock_code;h[G]||(h[G]=[]),h[G].push(L)}for(const L in h)h[L].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),We=m(()=>{const h={};for(const L of T.value){const G=(L.evaluate_time||"").split("T")[0].slice(0,7);h[G]||(h[G]=[]),h[G].push(L)}for(const L in h)h[L].sort((G,ce)=>ce.evaluate_time.localeCompare(G.evaluate_time));return h}),tt=m(()=>Object.keys(Ve.value).length),be=m(()=>{const h=T.value.length;return h===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(G=>{const ce=T.value.filter(de=>de.result.total_score>=G.min&&de.result.total_score<=G.max).length;return{...G,count:ce,pct:Math.round(ce/h*100)}})});async function ye(){if(!v.value)return;const h=O.value.find(L=>L.code===v.value);if(h){C.value=!0,E.value=null,p.value="",u.value="fetching";try{y.value={stock:h.code,name:h.name,total_days:0},i.value=!0,c.value="ai",await nextTick();const G=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:h.code,stock_name:h.name,strategy:R.value})})).json();G.success?(E.value=G.data,he(),v.value=""):(p.value=G.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{C.value=!1,u.value=""}}}function Ae(h){const L=A.value.indexOf(h);L>=0?A.value.splice(L,1):A.value.push(h)}function Re(h){const G=(Oe.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function Ye(h){const G=(We.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}function Ue(h){const L=a.value.indexOf(h);L>=0?a.value.splice(L,1):a.value.push(h)}function Qe(h){const G=(Ve.value[h]||[]).map(de=>de.id);G.every(de=>n.value.includes(de))?n.value=n.value.filter(de=>!G.includes(de)):G.forEach(de=>{n.value.includes(de)||n.value.push(de)})}const $e={},st={};function gt(h,L,G){if(!h||(G&&(st[L]={el:h,records:G}),$e[L]===h))return;const ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,de=()=>{Object.keys($e).forEach(Ge=>{if($e[Ge]&&$e[Ge]!==h){try{$e[Ge].dispose()}catch{}delete $e[Ge]}});const Me=[...G].sort((Ge,pt)=>Ge.evaluate_time.localeCompare(pt.evaluate_time)),Ce=Me.map(Ge=>(Ge.evaluate_time||"").split("T")[0]),ze=Me.map(Ge=>{var pt;return((pt=Ge.result)==null?void 0:pt.total_score)??null}),je=Me.map(Ge=>{var pt;return((pt=Ge.result)==null?void 0:pt.level)??""}),Fe={primary:x("--qc-primary-600")||"#b8922a",textPrimary:x("--text-primary")||"#1f2937",textSecondary:x("--text-secondary")||"#6b7280",border:x("--chart-axis")||"#b9b2a6",axis:x("--chart-axis")||"#b9b2a6",split:x("--chart-split")||"#e7e1d6",up:x("--qc-market-up")||"#e63946",down:x("--qc-market-down")||"#2e7d32"},Xe=[];for(let Ge=1;Ge<ze.length;Ge++)ze[Ge]!=null&&ze[Ge-1]!=null&&Math.abs(ze[Ge]-ze[Ge-1])>=15&&Xe.push({name:"大幅变化",coord:[Ce[Ge],ze[Ge]],value:(ze[Ge]-ze[Ge-1]>0?"↑":"↓")+Math.abs(ze[Ge]-ze[Ge-1]),symbol:"pin",symbolSize:32,itemStyle:{color:ze[Ge]-ze[Ge-1]>0?Fe.up:Fe.down}});const ft=echarts.init(h),et=window.__quantModules&&window.__quantModules.echartsTheme;et&&typeof et.getEChartsTheme=="function"&&ft.setOption(et.getEChartsTheme()),ft.setOption({tooltip:{trigger:"axis",backgroundColor:x("--bg-card")||"#ffffff",borderColor:Fe.border,textStyle:{color:Fe.textPrimary},formatter:function(Ge){var ne;const pt=(ne=Ge[0])==null?void 0:ne.dataIndex,te=pt!=null?je[pt]:"";return Ce[pt]+"<br/>得分: "+ze[pt]+(te?" ("+te+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ce,axisLabel:{fontSize:10,rotate:30,color:Fe.textSecondary},axisLine:{lineStyle:{color:Fe.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Fe.textSecondary},splitLine:{lineStyle:{color:Fe.split}}},series:[{data:ze,type:"line",smooth:!0,lineStyle:{color:Fe.primary,width:2},itemStyle:{color:Fe.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:x("--primary-rgb")?"rgba("+x("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Xe.length>0?{data:Xe}:void 0}]}),$e[L]=ft};ce?ce().then(de).catch(()=>{}):de()}function fe(){Object.keys(st).forEach(h=>{const L=st[h];if(!(!L||!L.el)){if($e[h]){try{$e[h].dispose()}catch{}delete $e[h]}gt(L.el,h,L.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(fe));async function xe(h){E.value=h,r.value=!1,_();try{const L=await fetch(`/api/calendar/stock/${h.stock_code}?date=${d.value}`);y.value=await L.json()}catch{y.value={stock:h.stock_code,name:h.stock_name||h.stock_code,total_days:0,history:[]}}i.value=!0,c.value="ai"}async function Le(){if(!z.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const h=z.value.split(/[,，\s]+/).filter(Ce=>Ce.trim());if(h.length===0)return;H.value=!0,K.value=h.length,V.value=0,Z.value="",U.value={},j.value={},B.value={},h.forEach(Ce=>{U.value[Ce]="pending",j.value[Ce]=null});const L={"Content-Type":"application/json"};let G=0,ce=0,de=!1;try{const Ce=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:L,body:JSON.stringify({stock_codes:h})});if(Ce.ok&&Ce.body){de=!0;const ze=Ce.body.getReader(),je=new TextDecoder("utf-8");let Fe="",Xe=!1;for(;!Xe;){const{value:ft,done:et}=await ze.read();Xe=et,Fe+=je.decode(ft||new Uint8Array,{stream:!Xe});let Ge;for(;(Ge=Fe.indexOf(`

`))>=0;){const pt=Fe.slice(0,Ge);Fe=Fe.slice(Ge+2);const te=pt.split(`
`).find(Je=>Je.startsWith("data: "));if(!te)continue;let ne;try{ne=JSON.parse(te.slice(6))}catch{continue}ne.type==="start"?ne.total&&(K.value=ne.total):ne.type==="item"?(V.value++,Z.value=ne.stock_code,ne.success?(U.value[ne.stock_code]="success",j.value[ne.stock_code]=ne,G++):(U.value[ne.stock_code]="error",B.value[ne.stock_code]=ne.error||"评估失败",ce++)):ne.type==="done"&&(typeof ne.success=="number"&&(G=ne.success),typeof ne.fail=="number"&&(ce=ne.fail))}}if(Fe.trim()){const ft=Fe.split(`
`).find(et=>et.startsWith("data: "));if(ft)try{const et=JSON.parse(ft.slice(6));et.type==="item"?(V.value++,Z.value=et.stock_code,et.success?(U.value[et.stock_code]="success",j.value[et.stock_code]=et,G++):(U.value[et.stock_code]="error",B.value[et.stock_code]=et.error||"评估失败",ce++)):et.type==="done"&&(typeof et.success=="number"&&(G=et.success),typeof et.fail=="number"&&(ce=et.fail))}catch{}}}}catch{de=!1}if(!de){G=0,ce=0,V.value=0;for(const Ce of h){Z.value=Ce,U.value[Ce]="running";try{const je=await(await fetch("/api/ai/evaluate",{method:"POST",headers:L,body:JSON.stringify({stock_code:Ce.trim(),stock_name:Ce.trim()})})).json();je.success?(U.value[Ce]="success",j.value[Ce]=je.data,G++):(U.value[Ce]="error",B.value[Ce]=je.message&&je.message!=="success"?je.message:"评估失败",ce++)}catch(ze){U.value[Ce]="error",B.value[Ce]="网络错误: "+(ze&&ze.message?ze.message:ze),ce++}V.value++}}Z.value="",await he();const Me=h.length;setTimeout(()=>{ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${G}/${Me}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${G}/${Me} · 失败 ${ce}`),H.value=!1},500)}return{groupedByDate:Oe,aiHistoryByStock:Ve,groupedByMonth:We,aiHistoryStockCount:tt,scoreDistribution:be,quickEvaluate:ye,toggleDateExpand:Ae,toggleSelectDate:Re,toggleSelectMonth:Ye,toggleStockExpand:Ue,toggleSelectStock:Qe,registerTrendChart:gt,viewAiResult:xe,doBatchEvaluate:Le}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.realtime={create:function(s){const{ref:e,computed:m,watch:t,currentUser:o,selectedDate:d,stockDetail:y,stockDetailTab:c,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:r,viewCache:P,animateScoreEntrance:w,loadStockKline:M,refreshStockScore:k,disposeStockKline:_,aiHistory:T,aiLoading:C,aiEvalStage:u,aiEvalElapsed:l,aiEvalError:p,aiResult:E,loadLastEvaluation:I,autoEvaluateConfig:q,autoEvaluateScope:D,batchStocks:z,batchRunning:H,batchTotal:K,batchCompleted:V,batchCurrent:Z,batchStatuses:U,batchResults:j,batchEvalErrors:B,expandedDates:A,expandedStocks:a,savingConfig:S,selectedHistoryIds:n,selectedWatchlistCodes:f,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:x,quickEvalStock:v,evalStrategy:R,watchlistSort:b,watchlist:O,watchlistCodes:ae,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:ie,getWatchlistScore:Y,getLatestScore:oe,addSearchResult:qe,evaluatedCodes:ee,klineLoadedCodes:$,markKlineLoaded:we,watchlistSearch:F,watchlistResults:ve,watchlistSearching:me,dataRefreshConfig:X,dataRefreshReloading:ue,dataRefreshSaving:Ee,levelVar:_e,levelBgVar:Ne,undoStack:pe,showUndoMessage:le}=s,he=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};he.REALTIME_WS_PATH;const Oe=he.REALTIME_DEGRADED_TEXT||"数据不可达",Ve=he.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";he.WARN_RISE_SPEED_THRESHOLD!=null&&he.WARN_RISE_SPEED_THRESHOLD,he.WARN_VOLUME_RATIO_THRESHOLD!=null&&he.WARN_VOLUME_RATIO_THRESHOLD;const We=he.quoteFmt||{price:de=>de==null?"--":Number(de).toFixed(2),pct:de=>de==null?"--":Number(de).toFixed(2)+"%",num:de=>de==null?"--":Number(de).toFixed(2),color:de=>""},tt=3,be=5e3,ye=e({}),Ae=e(!1),Re=e("idle");let Ye=null,Ue=null,Qe=0;function $e(de){return he.checkQuoteWarning?he.checkQuoteWarning(de):null}function st(de){return $e(ye.value[de])}function gt(de){return We.color(ye.value[de])}function fe(de){return We.price(ye.value[de]&&ye.value[de].price)}function xe(de){return We.pct(ye.value[de]&&ye.value[de].change_pct)}function Le(de,Me){return We.num(ye.value[de]&&ye.value[de][Me])}function h(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function L(){if(!Ye||Ye.readyState!==1)return;const de=(O.value||[]).map(Me=>Me.code);de.length!==0&&Ye.send(JSON.stringify({subscribe:de}))}function G(){if(Ue&&(clearTimeout(Ue),Ue=null),Ye){try{Ye.onopen=null,Ye.onmessage=null,Ye.onerror=null,Ye.onclose=null,Ye.close()}catch{}Ye=null}ye.value={},Ae.value=!1,Re.value="idle"}function ce(){const de=h();if(!de||!he.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let Me;try{Me=he.buildRealtimeWsUrl()+"?token="+encodeURIComponent(de)}catch{Re.value="offline",Ae.value=!0;return}Re.value="connecting";let Ce=null;try{Ce=new WebSocket(Me)}catch{Re.value="offline",Ae.value=!0;return}Ye=Ce,Ce.onopen=function(){Re.value="open",Qe=0,L()},Ce.onmessage=function(ze){let je=null;try{je=JSON.parse(ze.data||"{}")}catch{return}if(!je||je.type!=="quotes")return;if(Ae.value=!!je.degraded,je.degraded||!Array.isArray(je.data)){ye.value={};return}const Fe={};je.data.forEach(function(Xe){Xe&&Xe.code&&(Fe[Xe.code]=Xe)}),ye.value=Fe},Ce.onerror=function(){Re.value="offline",Ae.value=!0},Ce.onclose=function(){Re.value="offline",Qe<tt?(Qe++,Ue=setTimeout(function(){Re.value!=="open"&&ce()},be*Qe)):Ae.value=!0}}return t(O,function(){Re.value==="open"&&L()}),h()&&setTimeout(ce,500),{REALTIME_DEGRADED_TEXT:Oe,REALTIME_FALLBACK_TEXT:Ve,realtimeQuotes:ye,realtimeDegraded:Ae,realtimeWsState:Re,quoteWarningFor:st,realtimeQuoteColor:gt,realtimePriceText:fe,realtimePctText:xe,realtimeRatioText:Le,disconnectRealtimeQuotes:G,connectRealtimeQuotes:ce}}}})();(function(){window.__quantModules||(window.__quantModules={});const s={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function m(c){return s[c]||"var(--text-tertiary)"}function t(c){return e[c]||"var(--bg-hover)"}const o=window.QuantUndoCore,d=o?o.createUndoStack():null;function y(c,i){if(!d||!window.Vue||!window.Vue.h)return;const g=window.Vue.h;ElementPlus.ElMessage.success({message:g("span",null,[c,g("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(i)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.create=function(i){const{ref:g,computed:r,watch:P}=Vue,{currentUser:w,selectedDate:M,stockDetail:k,stockDetailTab:_,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:p,loadStockKline:E,refreshStockScore:I,disposeStockKline:q,aiHistory:D,aiLoading:z,aiEvalStage:H,aiEvalElapsed:K,aiEvalError:V,aiResult:Z,loadLastEvaluation:U,autoEvaluateConfig:j,autoEvaluateScope:B,batchStocks:A,batchRunning:a,batchTotal:S,batchCompleted:n,batchCurrent:f,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:v,expandedStocks:R,savingConfig:b,selectedHistoryIds:O,selectedWatchlistCodes:ae,showAutoEvaluateSettings:re,showBatchEvaluate:se}=i,ie=ot=>(getComputedStyle(document.documentElement).getPropertyValue(ot)||"").trim(),Y=g(""),oe=g("default"),qe=g("default"),ee=g([]),$=r(()=>new Set(ee.value.map(ot=>ot.code))),we=g(!1),F=g(!1),ve=r(()=>{const ot=[...ee.value];return qe.value==="name"?ot.sort((_t,Mt)=>_t.name.localeCompare(Mt.name,"zh")):qe.value==="added"?ot.sort((_t,Mt)=>(Mt.added_at||"").localeCompare(_t.added_at||"")):qe.value==="score"&&ot.sort((_t,Mt)=>{const Rt=X(_t.code);return X(Mt.code)-Rt}),ot});function me(ot){const _t=D.value.filter(Rt=>Rt.stock_code===ot);if(_t.length===0)return null;const Mt=_t.reduce((Rt,It)=>Rt.evaluate_time>It.evaluate_time?Rt:It);return{score:Mt.result.total_score,color:m(Mt.result.level),bg:t(Mt.result.level)}}function X(ot){const _t=me(ot);return _t?_t.score:0}function ue(ot){ft(ot.code,ot.name),le.value=le.value.filter(_t=>_t.code!==ot.code),pe.value=""}const Ee=r(()=>new Set(D.value.map(ot=>ot.stock_code))),_e=g(new Set);function Ne(ot){_e.value.add(ot)}const pe=g(""),le=g([]),he=g(!1),Oe=g({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ve=g(!1),We=g(!1),tt={v:null},be=window.__quantModules.watchlist.history.create({ref:g,computed:r,watch:P,currentUser:w,selectedDate:M,stockDetail:k,stockDetailTab:_,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:p,loadStockKline:E,refreshStockScore:I,disposeStockKline:q,aiHistory:D,aiLoading:z,aiEvalStage:H,aiEvalElapsed:K,aiEvalError:V,aiResult:Z,loadLastEvaluation:U,autoEvaluateConfig:j,autoEvaluateScope:B,batchStocks:A,batchRunning:a,batchTotal:S,batchCompleted:n,batchCurrent:f,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:v,expandedStocks:R,savingConfig:b,selectedHistoryIds:O,selectedWatchlistCodes:ae,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:ie,quickEvalStock:Y,evalStrategy:oe,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:we,aiHistoryError:F,sortedWatchlist:ve,getWatchlistScore:me,getLatestScore:X,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:_e,markKlineLoaded:Ne,watchlistSearch:pe,watchlistResults:le,watchlistSearching:he,dataRefreshConfig:Oe,dataRefreshReloading:Ve,dataRefreshSaving:We,levelVar:m,levelBgVar:t,undoStack:d,showUndoMessage:y,addToWatchlist:function(ot,_t){return tt.v.addToWatchlist(ot,_t)},removeFromWatchlist:function(ot){return tt.v.removeFromWatchlist(ot)}}),{doAiEvaluate:ye,aiHistoryTotal:Ae,aiHistoryLoadingMore:Re,hasMoreAiHistory:Ye,loadAiHistory:Ue,loadMoreAiHistory:Qe,deleteSingleHistory:$e,toggleSelectHistory:st,clearSelection:gt,clearWatchlistSelection:fe,batchReevaluateHistory:xe,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:L,toggleSelectWatchlist:G,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Me,loadAutoEvaluateConfig:Ce,saveAutoEvaluateConfig:ze}=be,je=window.__quantModules.watchlist.list.create({ref:g,computed:r,watch:P,currentUser:w,selectedDate:M,stockDetail:k,stockDetailTab:_,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:p,loadStockKline:E,refreshStockScore:I,disposeStockKline:q,aiHistory:D,aiLoading:z,aiEvalStage:H,aiEvalElapsed:K,aiEvalError:V,aiResult:Z,loadLastEvaluation:U,autoEvaluateConfig:j,autoEvaluateScope:B,batchStocks:A,batchRunning:a,batchTotal:S,batchCompleted:n,batchCurrent:f,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:v,expandedStocks:R,savingConfig:b,selectedHistoryIds:O,selectedWatchlistCodes:ae,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:ie,quickEvalStock:Y,evalStrategy:oe,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:we,aiHistoryError:F,sortedWatchlist:ve,getWatchlistScore:me,getLatestScore:X,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:_e,markKlineLoaded:Ne,watchlistSearch:pe,watchlistResults:le,watchlistSearching:he,dataRefreshConfig:Oe,dataRefreshReloading:Ve,dataRefreshSaving:We,levelVar:m,levelBgVar:t,undoStack:d,showUndoMessage:y,loadAiHistory:Ue}),{watchlistLoading:Fe,loadWatchlist:Xe,addToWatchlist:ft,removeFromWatchlist:et,clearWatchlist:Ge,toggleWatchlist:pt,showStockKline:te,preloadingKline:ne,preloadWatchlistKline:Je,watchlistEvaluate:ht,batchEvaluateWatchlist:xt,batchEvaluateSelected:nt,searchStockForWatchlist:bt,loadDataRefreshConfig:Ct,saveDataRefreshConfig:jt,triggerDataReload:Dt,dataPullRunning:Vt,triggerDataPull:Pt}=je;tt.v=je;const dt=window.__quantModules.watchlist.analytics.create({ref:g,computed:r,watch:P,currentUser:w,selectedDate:M,stockDetail:k,stockDetailTab:_,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:p,loadStockKline:E,refreshStockScore:I,disposeStockKline:q,aiHistory:D,aiLoading:z,aiEvalStage:H,aiEvalElapsed:K,aiEvalError:V,aiResult:Z,loadLastEvaluation:U,autoEvaluateConfig:j,autoEvaluateScope:B,batchStocks:A,batchRunning:a,batchTotal:S,batchCompleted:n,batchCurrent:f,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:v,expandedStocks:R,savingConfig:b,selectedHistoryIds:O,selectedWatchlistCodes:ae,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:ie,quickEvalStock:Y,evalStrategy:oe,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:we,aiHistoryError:F,sortedWatchlist:ve,getWatchlistScore:me,getLatestScore:X,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:_e,markKlineLoaded:Ne,watchlistSearch:pe,watchlistResults:le,watchlistSearching:he,dataRefreshConfig:Oe,dataRefreshReloading:Ve,dataRefreshSaving:We,levelVar:m,levelBgVar:t,undoStack:d,showUndoMessage:y,loadAiHistory:Ue}),{groupedByDate:Ft,aiHistoryByStock:Ht,groupedByMonth:qt,aiHistoryStockCount:zt,scoreDistribution:Bt,quickEvaluate:$t,toggleDateExpand:At,toggleSelectDate:Lt,toggleSelectMonth:W,toggleStockExpand:Te,toggleSelectStock:Ke,registerTrendChart:Ie,viewAiResult:it,doBatchEvaluate:ut}=dt,yt=window.__quantModules.watchlist.realtime.create({ref:g,computed:r,watch:P,currentUser:w,selectedDate:M,stockDetail:k,stockDetailTab:_,stockDetailVisible:T,stockDetailLoading:C,stockKlineLoaded:u,viewCache:l,animateScoreEntrance:p,loadStockKline:E,refreshStockScore:I,disposeStockKline:q,aiHistory:D,aiLoading:z,aiEvalStage:H,aiEvalElapsed:K,aiEvalError:V,aiResult:Z,loadLastEvaluation:U,autoEvaluateConfig:j,autoEvaluateScope:B,batchStocks:A,batchRunning:a,batchTotal:S,batchCompleted:n,batchCurrent:f,batchStatuses:J,batchResults:N,batchEvalErrors:x,expandedDates:v,expandedStocks:R,savingConfig:b,selectedHistoryIds:O,selectedWatchlistCodes:ae,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:ie,quickEvalStock:Y,evalStrategy:oe,watchlistSort:qe,watchlist:ee,watchlistCodes:$,aiHistoryLoading:we,aiHistoryError:F,sortedWatchlist:ve,getWatchlistScore:me,getLatestScore:X,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:_e,markKlineLoaded:Ne,watchlistSearch:pe,watchlistResults:le,watchlistSearching:he,dataRefreshConfig:Oe,dataRefreshReloading:Ve,dataRefreshSaving:We,levelVar:m,levelBgVar:t,undoStack:d,showUndoMessage:y}),{REALTIME_DEGRADED_TEXT:Et,REALTIME_FALLBACK_TEXT:mt,realtimeQuotes:Xt,realtimeDegraded:Zt,realtimeWsState:ea,quoteWarningFor:Jt,realtimeQuoteColor:Kt,realtimePriceText:ta,realtimePctText:Wt,realtimeRatioText:ca,disconnectRealtimeQuotes:da,connectRealtimeQuotes:ua}=yt;return{quickEvalStock:Y,evalStrategy:oe,watchlistSort:qe,watchlist:ee,watchlistCodes:$,sortedWatchlist:ve,getWatchlistScore:me,getLatestScore:X,addSearchResult:ue,evaluatedCodes:Ee,klineLoadedCodes:_e,markKlineLoaded:Ne,watchlistSearch:pe,watchlistResults:le,watchlistSearching:he,dataRefreshConfig:Oe,dataRefreshReloading:Ve,dataRefreshSaving:We,aiHistoryLoading:we,aiHistoryError:F,aiHistoryTotal:Ae,aiHistoryLoadingMore:Re,hasMoreAiHistory:Ye,loadMoreAiHistory:Qe,watchlistLoading:Fe,doAiEvaluate:ye,loadAiHistory:Ue,deleteSingleHistory:$e,toggleSelectHistory:st,clearSelection:gt,clearWatchlistSelection:fe,batchReevaluateHistory:xe,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:L,toggleSelectWatchlist:G,selectAllHistory:ce,selectAllWatchlist:de,deleteSelectedHistory:Me,loadAutoEvaluateConfig:Ce,saveAutoEvaluateConfig:ze,loadWatchlist:Xe,addToWatchlist:ft,removeFromWatchlist:et,clearWatchlist:Ge,toggleWatchlist:pt,showStockKline:te,preloadingKline:ne,preloadWatchlistKline:Je,watchlistEvaluate:ht,batchEvaluateWatchlist:xt,batchEvaluateSelected:nt,searchStockForWatchlist:bt,loadDataRefreshConfig:Ct,saveDataRefreshConfig:jt,triggerDataReload:Dt,triggerDataPull:Pt,dataPullRunning:Vt,groupedByDate:Ft,aiHistoryByStock:Ht,groupedByMonth:qt,aiHistoryStockCount:zt,scoreDistribution:Bt,quickEvaluate:$t,toggleDateExpand:At,toggleSelectDate:Lt,toggleSelectMonth:W,toggleStockExpand:Te,toggleSelectStock:Ke,registerTrendChart:Ie,viewAiResult:it,doBatchEvaluate:ut,realtimeQuotes:Xt,realtimeDegraded:Zt,realtimeWsState:ea,connectRealtimeQuotes:ua,disconnectRealtimeQuotes:da,quoteWarningFor:Jt,realtimeQuoteColor:Kt,realtimePriceText:ta,realtimePctText:Wt,realtimeRatioText:ca,REALTIME_DEGRADED_TEXT:Et,REALTIME_FALLBACK_TEXT:mt}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(s){const{ref:e,computed:m}=Vue,t=e([]),o=e(null),d=e([]),y=e(!1),c=e(!1),i=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),r=e(!1),P=e(!1),w=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),M=e(!1),k=e("positions"),_=e(30),T=e(!1),C=e(""),u=e(!1),l=e({dates:[],equity:[],values:[]}),p=m(()=>t.value.length),E=e("metrics"),I=e(!1),q=e(""),D=e(!1),z=e({metrics:null,rules:[],rebalance:null}),H=m(function(){const b=z.value.metrics;if(!b)return[];const O=function(re){return re==null?"--":Number(re).toFixed(2)+"%"},ae=function(re){return re==null?"--":Number(re).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:O(b.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:O(b.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:O(b.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:O(b.cvar)},{key:"max_drawdown",label:"最大回撤",value:O(b.max_drawdown)},{key:"annual_return",label:"年化收益",value:O(b.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ae(b.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ae(b.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ae(b.calmar_ratio)},{key:"beta",label:"Beta",value:ae(b.beta)}]});async function K(){I.value=!0;try{const b=await(await fetch("/api/portfolio/risk?days=60")).json(),O=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ae=b&&b.success?b.risk:null,re=O&&O.success?O.rules||[]:[],se=O&&O.success?O.rebalance:null;z.value={metrics:ae,rules:re,rebalance:se},D.value=!!(ae&&Object.keys(ae).length>0),q.value=b&&b.note||O&&O.note||""}catch(b){console.warn("[portfolio] 加载风险数据失败:",b),D.value=!1,q.value="风险数据加载失败"}finally{I.value=!1}}async function V(){y.value=!0,c.value=!1;try{const O=await(await fetch("/api/portfolio")).json();O.success?(t.value=O.positions||[],o.value=O.summary||null):c.value=!0}catch(b){console.warn("[portfolio] 加载持仓失败:",b),c.value=!0}finally{y.value=!1}}async function Z(){const b=g.value,O=(b.stock_code||"").trim();if(!O){ElementPlus.ElMessage.warning("请输入股票代码");return}const ae=Number(b.cost_price),re=Number(b.quantity);if(!(ae>0)||!(re>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}r.value=!0;try{const ie=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:(b.stock_name||"").trim(),cost_price:ae,quantity:re})})).json();ie.success?(ElementPlus.ElMessage.success(ie.message||"持仓已更新"),i.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await V(),N(_.value)):ElementPlus.ElMessage.error(ie.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{r.value=!1}}async function U(b){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+b+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ae=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(b),{method:"DELETE"})).json();ae.success?(ElementPlus.ElMessage.success("已删除持仓"),await V(),A(),N(_.value)):ElementPlus.ElMessage.error(ae.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function j(b,O){w.value={stock_code:b,stock_name:O||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},P.value=!0}async function B(){const b=w.value;if(!b.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const O=Number(b.price),ae=Number(b.quantity);if(!(O>0)||!(ae>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}M.value=!0;try{const se=await(await fetch("/api/portfolio/trades",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:b.stock_code,stock_name:b.stock_name||"",action:b.action,price:O,quantity:ae,trade_date:b.trade_date||"",note:(b.note||"").trim()})})).json();se.success?(ElementPlus.ElMessage.success(se.message||"调仓已记录"),P.value=!1,await V(),await A(),N(_.value)):ElementPlus.ElMessage.error(se.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{M.value=!1}}async function A(){try{const O=await(await fetch("/api/portfolio/trades")).json();O.success&&(d.value=O.trades||[])}catch(b){console.warn("[portfolio] 加载调仓记录失败:",b)}}const a=b=>(getComputedStyle(document.documentElement).getPropertyValue(b)||"").trim();function S(b){if(!b||!b.length)return[];let O=b[0]||0;const ae=[];for(let re=0;re<b.length;re++){const se=b[re]||0;se>O&&(O=se),ae.push(O>0?Math.round((se-O)/O*1e3)/10:0)}return ae}function n(){const b={primary:a("--qc-primary-600")||"#b8922a",textPrimary:a("--text-primary")||"#1f2937",textSecondary:a("--text-secondary")||"#6b7280",border:a("--border-light")||"#e5e7eb",up:a("--color-rise")||"#E63946",down:a("--color-fall")||"#2E7D32"},O=l.value;return{tooltip:{trigger:"axis",backgroundColor:a("--bg-card")||"#ffffff",borderColor:b.border,textStyle:{color:b.textPrimary},formatter:function(ae){const re=ae[0]?ae[0].dataIndex:-1,se=O.dates[re]||"",ie=O.equity[re],Y=O.values[re];let oe=se||"";return ie!=null&&(oe+="<br/>组合净值: "+ie),Y!=null&&(oe+="<br/>组合市值: "+Y),oe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:b.textSecondary},axisLine:{lineStyle:{color:b.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:b.textSecondary},splitLine:{lineStyle:{color:b.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:b.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:O.equity,smooth:!0,showSymbol:!1,lineStyle:{color:b.primary,width:2},itemStyle:{color:b.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:a("--primary-rgb")?"rgba("+a("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:S(O.equity),smooth:!0,showSymbol:!1,lineStyle:{color:b.down,width:1.5},itemStyle:{color:b.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function f(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function J(b,O,ae){l.value={dates:b||[],equity:O||[],values:ae||[]},u.value=!!b&&b.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",n,{key:"portfolio-equity"}):f()}async function N(b){T.value=!0,C.value="";const O=Number(b)||_.value||30;_.value=O;try{const re=await(await fetch("/api/portfolio/equity_curve?days="+O)).json();re.success?(C.value=re.note||"",J(re.dates||[],re.equity||[],re.values||[])):(C.value="数据暂不可用",f())}catch(ae){console.warn("[portfolio] 加载收益曲线失败:",ae),C.value="数据暂不可用",f()}finally{T.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function x(b,O){if(b==null||b===""||isNaN(Number(b)))return"--";const ae=Number(b),re=O??2;return(ae>=0?"+":"")+ae.toFixed(re)}function v(b,O){if(b==null||b===""||isNaN(Number(b)))return"--";const ae=Number(b),re=O??2;return(ae>=0?"+":"")+ae.toFixed(re)+"%"}function R(b){if(b==null||b===""||isNaN(Number(b)))return"";const O=Number(b);return O>0?"portfolio-up":O<0?"portfolio-down":""}return{positions:t,summary:o,trades:d,loading:y,loadError:c,showAddForm:i,addForm:g,addSaving:r,tradeFormVisible:P,tradeForm:w,tradeSaving:M,portfolioTab:k,equityDays:_,equityLoading:T,equityNote:C,equityHasData:u,portfolioCount:p,loadPortfolio:V,addPosition:Z,removePosition:U,openTradeForm:j,submitTrade:B,loadTrades:A,loadEquity:N,fmtSigned:x,fmtSignedPct:v,signClass:R,riskTab:E,riskLoading:I,riskNote:q,riskHasData:D,riskData:z,riskMetricList:H,loadRisk:K}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function s(i,g){var r=Number(i);return isFinite(r)?r:typeof g=="number"?g:0}function e(i){var g=Array.isArray(i)?i:[];if(g.length<2)return null;for(var r=-1/0,P=0,w=0,M=0,k=0,_=0;_<g.length;_++){var T=s(g[_].equity!=null?g[_].equity:g[_].value);T>r&&(r=T,P=_);var C=r>0?(r-T)/r*100:0;C>w&&(w=C,M=P,k=_)}function u(l){return g[l]&&g[l].date?g[l].date:""}return{maxDrawdown:Math.round(w*100)/100,peakIndex:M,troughIndex:k,peakDate:u(M),troughDate:u(k)}}function m(i){for(var g=i||{},r={},P=Object.keys(g).sort(),w=0;w<P.length;w++){var M=P[w],k=String(M).slice(0,4);/^\d{4}$/.test(k)&&(r[k]=(r[k]||0)+s(g[M]))}var _=Object.keys(r).sort();return _.map(function(T){return{year:T,return:Math.round(r[T]*100)/100}})}function t(i){var g=Array.isArray(i)?i:[],r={};g.forEach(function(M){(M.points||[]).forEach(function(k){k&&k.date&&(r[k.date]=1)})});var P=Object.keys(r).sort(),w=g.map(function(M){var k={};return(M.points||[]).forEach(function(_){_&&_.date&&(k[_.date]=s(_.value!=null?_.value:_.equity))}),{name:M.name||"",data:P.map(function(_){return _ in k?k[_]:null})}});return{dates:P,series:w}}function o(i){var g=i||{},r=function(w){return s(w)},P=function(w,M){var k=r(w);return isFinite(k)?k.toFixed(M):"--"};return[{key:"total_return",label:"总收益",value:P(g.total_return,2),suffix:"%",dir:r(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:P(g.annual_return,2),suffix:"%",dir:r(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:P(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:P(g.sharpe_ratio,2),suffix:"",dir:r(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:P(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:P(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(r(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:P(g.volatility,2),suffix:"%",dir:""}]}function d(i){var g=i==null?"":String(i);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function y(i){var g=i||{},r=[];r.push("回测指标"),r.push("指标,数值"),(g.metrics||[]).forEach(function(u){r.push(d(u.label)+","+d((u.value||"")+(u.suffix||"")))}),r.push(""),r.push("净值曲线");var P=["日期"].concat((g.series||[]).map(function(u){return u.name}));r.push(P.map(d).join(","));for(var w=g.dates||[],M=g.series||[],k=0;k<w.length;k++){for(var _=[w[k]],T=0;T<M.length;T++){var C=M[T].data&&M[T].data[k];_.push(C??"")}r.push(_.map(d).join(","))}return r.push(""),r.push("交易明细"),r.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(u){r.push(d(u.date)+","+d(u.stock)+","+d(u.action)+","+d(u.reason))}),r.join(`
`)}function c(i){return i==="buy"?"买入":i==="sell"?"卖出":i||""}return{toNum:s,computeMaxDrawdownRegion:e,buildAnnualReturns:m,buildNavSeries:t,buildMetrics:o,buildBacktestCsv:y,tradeActionText:c}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(s){const{ref:e,computed:m}=Vue,t=window.QuantBacktest||{},o=s||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],c=(Array.isArray(o.backtestStrategies)&&o.backtestStrategies.length?o.backtestStrategies:d).map(a=>({id:a.id,name:a.name})),i=e(c.length?[c[0].id]:[]),g=e(T()),r=e(1e5),P=e(3e-4),w=e(!1),M=e(!1),k=e(null),_=e("");function T(){const a=new Date,S=new Date;S.setFullYear(S.getFullYear()-1);const n=f=>f.getFullYear()+"-"+String(f.getMonth()+1).padStart(2,"0")+"-"+String(f.getDate()).padStart(2,"0");return[n(S),n(a)]}function C(a){const S=i.value.indexOf(a);S>=0?i.value.length>1&&i.value.splice(S,1):i.value.push(a)}function u(a){const S=c.find(n=>n.id===a);return S?S.name:a}function l(a){const S=a.summary||a;return{strategy_id:S.strategy_id,start_date:S.start_date,end_date:S.end_date,total_days:S.total_days,total_return:S.total_return,annual_return:S.annual_return,max_drawdown:S.max_drawdown,volatility:S.volatility,sharpe_ratio:S.sharpe_ratio,sortino_ratio:S.sortino_ratio,win_rate:S.win_rate,profit_loss_ratio:S.profit_loss_ratio,avg_positions:S.avg_positions!=null?S.avg_positions:S.avg_positions_per_day,total_trades:S.total_trades,turnover_rate:S.turnover_rate,success:S.success!==!1,message:S.message||"",insample_total_return:S.insample_total_return!=null?S.insample_total_return:null,outsample_total_return:S.outsample_total_return!=null?S.outsample_total_return:null,out_sample_ratio:S.out_sample_ratio!=null?S.out_sample_ratio:.2,overfit_warning:!!S.overfit_warning,overfit_reason:S.overfit_reason||""}}function p(a){return(Array.isArray(a)?a:[]).map(S=>({date:S.date,value:S.equity!=null?S.equity:S.value}))}function E(a,S){const n=l(S),f=p(S.equity_curve),J=S.monthly_returns||{},N=Array.isArray(S.trade_history)?S.trade_history:[],x={id:a,name:u(a),summary:n,equityCurve:f,monthlyReturns:J,trades:N};let v=null;if(w.value){const R=Number(r.value)||1e5;v={name:"现金基准",points:f.map(b=>({date:b.date,value:R}))}}return{success:!0,mode:"single",strategies:[x],primary:x,benchmark:v,period:(n.start_date||"")+" ~ "+(n.end_date||"")}}function I(a,S){const n=S.strategy_results||{},f=a.map(x=>{const v=n[x];if(!v)return null;const R=l(v);return{id:x,name:u(x),summary:R,equityCurve:p(v.equity_curve),monthlyReturns:v.monthly_returns||{},trades:Array.isArray(v.trade_history)?v.trade_history:[]}}).filter(x=>x&&x.summary.success!==!1),J=f.length?f[0]:null;let N=null;return w.value&&(N={name:"等权组合基准",points:p(S.portfolio_equity)}),{success:f.length>0,mode:"multi",strategies:f,primary:J,benchmark:N,period:J?J.summary.start_date+" ~ "+J.summary.end_date:""}}const q=m(()=>{const a=k.value;return!a||!a.primary?[]:t.buildMetrics?t.buildMetrics(a.primary.summary):[]}),D=m(()=>{const a=k.value;return!a||!a.primary||!a.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(a.primary.monthlyReturns):[]}),z=m(()=>{const a=k.value;return!a||!a.primary?[]:(a.primary.trades||[]).slice().sort((S,n)=>String(n.date||"").localeCompare(String(S.date||"")))}),H=m(()=>{const a=k.value;return!a||!a.strategies||a.strategies.length<2?[]:a.strategies.map(S=>({name:S.name,metrics:t.buildMetrics?t.buildMetrics(S.summary):[]}))}),K=m(()=>{const a=k.value;return!a||!a.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(a.primary.equityCurve):null});async function V(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const S=i.value;if(!S.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const n=g.value,f={start_date:n&&n[0]||void 0,end_date:n&&n[1]||void 0},J={"Content-Type":"application/json"};M.value=!0,k.value=null,_.value="";try{if(S.length===1){const N=Object.assign({},f,{initial_capital:Number(r.value)||1e5,commission_rate:Number(P.value)||3e-4}),x=await fetch("/api/backtest/"+encodeURIComponent(S[0]),{method:"POST",headers:J,body:JSON.stringify(N)});if(!x.ok){const R=await x.json().catch(()=>({}));throw new Error(R.detail||"回测失败")}const v=await x.json();if(!v.success)throw new Error(v.message||"回测失败");k.value=E(S[0],v)}else{const N=await fetch("/api/backtest/multi",{method:"POST",headers:J,body:JSON.stringify(Object.assign({},f,{strategy_ids:S}))});if(!N.ok){const v=await N.json().catch(()=>({}));throw new Error(v.detail||"回测失败")}const x=await N.json();if(!x.success)throw new Error(x.message||"多策略回测失败");if(k.value=I(S,x.data||{}),!k.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(N){_.value=N&&N.message?N.message:"回测失败",ElementPlus.ElMessage.error(_.value)}finally{M.value=!1}}function Z(){const a=k.value,S={dates:[],series:[]};if(!a)return S;const n=a.strategies.map(J=>({name:J.name,points:J.equityCurve}));a.benchmark&&a.benchmark.points&&a.benchmark.points.length&&n.push({name:a.benchmark.name,points:a.benchmark.points});const f=t.buildNavSeries?t.buildNavSeries(n):S;return U(f,a)}function U(a,S){const n=O=>(getComputedStyle(document.documentElement).getPropertyValue(O)||"").trim(),f={primary:n("--qc-primary-600")||"#b8922a",success:n("--color-success")||"#4CAF50",accent:n("--color-accent")||"#F59E0B",info:n("--color-info")||"#1976d2",ai:n("--color-ai")||"#6366f1",textPrimary:n("--text-primary")||"#1f2937",textSecondary:n("--text-secondary")||"#6b7280",border:n("--border-light")||"#e5e7eb",up:n("--color-rise")||"#E63946",down:n("--color-fall")||"#2E7D32",bg:n("--bg-card")||"#ffffff"},J=[f.primary,f.success,f.accent,f.info,f.ai],x=f.bg.length===7&&parseInt(f.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",v=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(S.primary?S.primary.equityCurve:[]):null,R=v&&v.peakDate&&v.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:f.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+v.maxDrawdown+"%",xAxis:v.peakDate,itemStyle:{color:f.down}},{xAxis:v.troughDate}]]}:void 0,b=a.series.map((O,ae)=>{const re=S.benchmark&&O.name===S.benchmark.name,se=J[ae%J.length];return{name:O.name,type:"line",data:O.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:re?2:2.4,type:re?"dashed":"solid",color:se},itemStyle:{color:se},emphasis:{focus:"series"},...ae===0&&R?{markArea:R}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:x,borderColor:f.border,textStyle:{color:f.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:f.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:a.dates,boundaryGap:!1,axisLine:{lineStyle:{color:f.border}},axisLabel:{color:f.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:f.textSecondary,fontSize:11},splitLine:{lineStyle:{color:f.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:f.border,textStyle:{color:f.textSecondary,fontSize:10}}],series:b}}function j(a){if(!a){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",Z,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function B(){const a=k.value;if(!a||!a.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const S=a.strategies.map(b=>({name:b.name,points:b.equityCurve}));a.benchmark&&S.push({name:a.benchmark.name,points:a.benchmark.points});const n=t.buildNavSeries?t.buildNavSeries(S):{dates:[],series:[]},f=t.tradeActionText||(b=>b),J=z.value.map(b=>({date:b.date,stock:b.stock,action:f(b.action),reason:b.reason})),N=t.buildBacktestCsv?t.buildBacktestCsv({metrics:q.value,dates:n.dates,series:n.series,trades:J}):"",x=new Blob(["\uFEFF"+N],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(x),R=document.createElement("a");R.href=v,R.download="backtest-"+a.strategies.map(b=>b.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",R.click(),URL.revokeObjectURL(v),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function A(a,S){return a==null||a===""||isNaN(Number(a))?"--":Number(a).toFixed(S??2)}return{btStrategyOptions:c,btSelectedStrategies:i,toggleBtStrategy:C,btDateRange:g,btCapital:r,btCommissionRate:P,btIncludeBenchmark:w,btRunning:M,btResult:k,btError:_,btMetrics:q,btAnnualReturns:D,btTrades:z,btStrategyMetricsRows:H,btDrawdownRegion:K,runBacktestWorkbench:V,exportBacktestCSV:B,registerBacktestNavChart:j,btFmtNum:A}}}})();(function(){const{ref:s,computed:e,watch:m,onUnmounted:t}=Vue,o=r=>(getComputedStyle(document.documentElement).getPropertyValue(r)||"").trim(),d=72,y={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},c={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},i={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},g={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const r=s({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),P=s({}),w=s(!1),M=s({}),k=s({cycles:[]}),_=s([]),T=s(0),C=s(!1),u=s({autoRefresh:!0,refreshInterval:300}),l=s(""),p=s(""),E=s(!1),I=s(""),q=s(!1);let D=null;const z={x:0,y:0},H=e(()=>{const $=P.value;return["recession","recovery","overheat","stagflation"].map(F=>{const ve=$[F]||{};return{key:F,name:ve.name||F,icon:i[ve.icon]||"bar-chart-3",color:ve.color||o("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(ve.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(ve.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:ve.allocation&&g[F]||""}})}),K=e(()=>{var we,F,ve,me;const $=r.value.indicators||{};return[{key:"pmi",label:"PMI",value:(we=$.pmi)==null?void 0:we.toFixed(2),color:$.pmi>=50?o("--color-success")||"#43a047":o("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((F=$.gdp_growth)==null?void 0:F.toFixed(2))+"%",color:o("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ve=$.cpi)==null?void 0:ve.toFixed(2))+"%",color:$.cpi>1.2?o("--color-danger")||"#E53935":o("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((me=$.m2_growth)==null?void 0:me.toFixed(2))+"%",color:o("--color-success")||"#43a047"}]}),V=$=>{$=$||{};const we=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],F=()=>o("--color-success")||"#43a047",ve=()=>o("--color-danger")||"#E53935",me=()=>o("--color-warning")||"#FF9800",X={宽松:F(),中位:me(),偏低:ve(),高增长:F(),承压:ve(),不利:ve()};return we.map(ue=>{const Ee=$[ue.key]||{},_e=Ee.score||0,Ne=Math.min(100,Math.max(5,(_e+2)*25)),pe=_e>=.3?"var(--bar-fill-ok)":_e>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",le=_e>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ue.key,label:ue.label,scoreStr:_e.toFixed(2),level:Ee.level||"—",barWidth:Ne,barColor:pe,scoreColor:le,color:X[Ee.level]||"var(--text-tertiary)"}})},Z=e(()=>V(r.value.dimension_scores)),U=e(()=>V(M.value._dimensions)),j=e(()=>{var we;const $=((we=r.value.confidence)==null?void 0:we.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),B=e(()=>{var ve,me,X,ue;const $=P.value,we={recovery:0,overheat:1,stagflation:2,recession:3},F={};for(const[Ee,_e]of Object.entries($))F[Ee]={name:_e.name,icon:_e.icon,color:_e.color,lightColor:_e.bg_color,duration:"~"+(((ve=_e.historical_stats)==null?void 0:ve.avg_duration_months)||18)+"个月",order:we[Ee]||0,period:((X=(me=_e.case_studies)==null?void 0:me[0])==null?void 0:X.split("：")[0])||"",avgMonths:((ue=_e.historical_stats)==null?void 0:ue.avg_duration_months)||18};return F}),A=e(()=>{var _e,Ne;const $=r.value.stage,F={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},ve=r.value.dimension_scores||{},me=((_e=ve.growth)==null?void 0:_e.score)||0,X=((Ne=ve.inflation)==null?void 0:Ne.score)||0,ue=Math.max(-30,Math.min(30,me*15)),Ee=Math.max(-30,Math.min(30,-X*15));return{x:F.x+ue,y:F.y+Ee,prevX:z.x,prevY:z.y}}),a=e(()=>{var ve;const $=Math.min(100,((ve=r.value.timing)==null?void 0:ve.progress_percent)||0),we=r.value.color||"var(--state-success-solid)",F=$>100?"linear-gradient(90deg, "+we+", var(--state-warning-solid))":we;return{width:$+"%",background:F}});function S(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[r.value.stage]||0}function n(){var $,we;return((we=($=r.value)==null?void 0:$.timing)==null?void 0:we.progress_percent)||0}function f(){var $,we;return((we=($=r.value)==null?void 0:$.timing)==null?void 0:we.duration_months)||0}function J(){var $,we;return((we=($=r.value)==null?void 0:$.timing)==null?void 0:we.avg_duration_months)||18}function N($){var me,X;const we=B.value,F=((me=we[r.value.stage])==null?void 0:me.order)||0;return(((X=we[$])==null?void 0:X.order)||0)<F}function x($){return y[$]||$}function v($){return c[$]||$}function R($){const we=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return we[$-1]||we[3]}async function b(){try{const we=await(await fetch("/api/market/merrill-clock/stages")).json();we.success&&we.data&&(P.value=we.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function O(){C.value=!0;try{re();const we=await(await fetch("/api/market/merrill-clock/timeline")).json();if(we.success&&we.data){const F=Array.isArray(we.data.cycles)?we.data.cycles.slice().reverse():[];k.value={cycles:F}}}catch{console.warn("获取美林时钟时间轴失败")}finally{C.value=!1}}async function ae($){await ie($)}async function re(){try{const we=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();we&&we.success&&we.data&&(_.value=we.data.items||[],T.value=we.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function se(){var $,we;q.value=!1;try{const ve=await(await fetch("/api/market/merrill-clock")).json(),me=ve.stage||"recovery",X=P.value[me]||{};if(r.value={...X,...ve,stage_cn:ve.stage_cn||X.stage_cn||"",stage_name:ve.stage_name||X.name||"",name:ve.name||X.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),I.value&&I.value!==me){const ue=P.value,Ee=(($=ue[I.value])==null?void 0:$.name)||I.value,_e=((we=ue[me])==null?void 0:we.name)||me;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Ee+" → "+_e,type:"warning",duration:6e3,showClose:!0})}I.value=me}catch(F){console.error("获取美林时钟失败:",F),q.value=!0;const ve=P.value.recovery||{};r.value={...ve,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function ie($){var F;w.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",M.value=P.value[$]||P.value.recovery||{};const we=((F=r.value)==null?void 0:F.stage)===$;M.value._isCurrent=we,we&&r.value&&(M.value._nextPrediction=r.value.next_stage_prediction,M.value._confidence=r.value.confidence,M.value._stage=r.value.stage,M.value._dimensions=r.value.dimension_scores);try{const me=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(me.success&&me.data){const X={...P.value[$],...me.data};X._is_current!==void 0&&(X._isCurrent=X._is_current),X._current_timing&&(X._currentTiming=X._current_timing),X._last_period&&(X._lastPeriod=X._last_period),M.value._nextPrediction&&(X._nextPrediction=M.value._nextPrediction),M.value._confidence&&(X._confidence=M.value._confidence),M.value._stage&&(X._stage=M.value._stage),M.value._dimensions&&(X._dimensions=M.value._dimensions),Object.assign(M.value,X)}}catch(ve){console.warn("获取阶段详情失败:",ve)}}function Y(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(D),D=setInterval(se,u.value.refreshInterval*1e3)):clearInterval(D),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function oe(){E.value=!0,p.value="";try{const we=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();we.success?(p.value="重评估完成："+(we.stage_name||we.stage),await se(),ElementPlus.ElMessage.success("重评估完成")):(p.value=we.message||"重评估失败",ElementPlus.ElMessage.error(we.message||"重评估失败"))}catch{p.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{E.value=!1}}function qe(){const $=localStorage.getItem("merrill_clock_config");if($)try{const we=JSON.parse($);u.value={...u.value,...we}}catch{}u.value.autoRefresh&&(D=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),se()},u.value.refreshInterval*1e3))}function ee(){D&&clearInterval(D)}return t(()=>{ee()}),{merrillData:r,merrillStagesConfig:P,showMerrillDetail:w,merrillDetailData:M,merrillTimeline:k,merrillSnapshots:_,merrillSnapshotsTotal:T,fetchMerrillSnapshots:re,timelineLoading:C,merrillClockConfig:u,merrillClockLastUpdated:l,merrillReevalResult:p,merrillReevalLoading:E,stages:H,indicatorList:K,dimensionScoreList:Z,detailDimensionScoreList:U,confidenceColor:j,timelineStages:B,clockPosition:A,merrillProgressStyle:a,FULL_CYCLE_MONTHS:d,getStageAngle:S,getCycleProgress:n,getCurrentStageMonths:f,getStageTotalMonths:J,isStageCompleted:N,getCharLabel:x,getAssetName:v,getRankColor:R,fetchMerrillStages:b,fetchMerrillClock:se,merrillError:q,loadMerrillTimeline:O,showTimelineStage:ae,showStageDetail:ie,saveMerrillClockConfig:Y,doMerrillReevaluate:oe,startAutoRefresh:qe,stopAutoRefresh:ee}}})();(function(){function s(c){return getComputedStyle(document.documentElement).getPropertyValue(c).trim()}var e=[210,28,165,290,348,190,52,250];function m(){var c=!1;try{c=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var i=c?62:58,g=c?62:40;return e.map(function(r){return"hsl("+r+", "+i+"%, "+g+"%)"})}function t(){return{textStyle:{color:s("--text-primary")||"#1f2937"},backgroundColor:s("--chart-bg")||"transparent",color:m(),legend:{textStyle:{color:s("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:s("--chart-axis")||"#cbd5e1"}},axisLabel:{color:s("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:s("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:s("--bg-card")||"#ffffff",borderColor:s("--border-light")||"#e5e7eb",textStyle:{color:s("--text-primary")||"#1f2937"}}}}const o=[];function d(c){typeof c=="function"&&o.push(c)}function y(){o.slice().forEach(function(c){try{c()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:m,registerChart:d,refreshAllCharts:y,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:y}}}})();(function(){const{ref:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const m=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&m.sidebarCollapsed&&(m.sidebarCollapsed.value=d==="1")}catch{}if(!m)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}m.currentPage.value=d.key,m.currentSubPage.value=d.subPages[0]||""},o=()=>{m.sidebarCollapsed.value=!m.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",m.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:m.menus,currentPage:m.currentPage,sidebarCollapsed:m.sidebarCollapsed,navigate:t,toggle:o,sanitizeHtml:m.sanitizeHtml,keyClick:m.keyClick,t:m.t}}}})();const na={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(s){const e=s,m={"layout-dashboard":Dv,calendar:Pv,bot:Tv,"flask-conical":Mv,zap:Ev,settings:qv,"chevron-down":Cv,"chevron-right":Sv,"chevron-left":xv,menu:kv,search:_v,bell:wv,sun:bv,moon:yv,user:hv,"user-round":gv,home:pv,x:fv,database:mv,activity:vv,clock:uv,"bar-chart-3":dv,shield:cv,"hard-drive":rv,"file-text":ov,users:iv,cpu:lv,"pie-chart":nv,info:sv,"log-out":av,palette:tv,languages:ev,refresh:Zu,download:Xu,"external-link":$u,command:Ju,sparkles:Qu,"trending-up":Yu,"trending-down":Gu,"circle-dot":Uu,check:Wu,"alert-triangle":Ku,loader:Bu,"arrow-left":Hu,"arrow-right":Fu,eye:Vu,"eye-off":ju,lock:Ou,"sliders-horizontal":Nu,play:Iu,history:Lu,layers:Au,"line-chart":zu,target:Ru,"search-check":Du,star:Pu,"message-circle":Tu,"calendar-days":Mu,"calendar-range":Eu,"calendar-check":qu,brain:Cu,lightbulb:Su,"octagon-x":xu,flag:ku,package:_u,"clipboard-list":wu,pin:bu,"radio-tower":yu,gauge:hu,landmark:gu,"candlestick-chart":pu,wallet:fu,"badge-check":mu,key:vu,factory:uu,trophy:du,rocket:cu,flame:ru,"map-pin":ou,"scroll-text":iu,"book-open":lu,dna:nu,"bar-chart":su,plus:au,"star-off":tu,upload:eu,gem:Zd,"folder-open":Xd,link:$d,save:Jd,"trash-2":Qd,pause:Yd,"help-circle":Gd,"play-circle":Ud,pencil:Wd,folder:Kd,code:Bd,sprout:Hd,wheat:Fd,snowflake:Vd,fuel:jd,banknote:Od,send:Nd,inbox:Id,"wifi-off":Ld,"check-circle-2":Ad,"x-circle":zd},t=()=>m[e.name]||m["circle-dot"];return(o,d)=>(ge(),Yt(wd(t()),{size:s.size,"stroke-width":s.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},la=(s,e)=>{const m=s.__vccOpts||s;for(const[t,o]of e)m[t]=o;return m},Rv={name:"qc-sidebar",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.menus&&s.menus.value||[]),m=lt(()=>s.currentPage&&s.currentPage.value||""),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=lt({get:()=>s.sidebarCollapsed&&s.sidebarCollapsed.value||!1,set:C=>{s.sidebarCollapsed&&(s.sidebarCollapsed.value=C)}}),d=kt({}),y={research:"量化投研",platform:"平台管理"},c=["research","platform"],i=C=>m.value===C.key,g=(C,u)=>m.value===C.key&&s.currentSubPage&&s.currentSubPage.value===u,r=C=>Array.isArray(C.subPages)&&C.subPages.length>1,P=(C,u)=>s.subPageNames&&s.subPageNames[u]||u;function w(C){!r(C)||o.value||(d.value[C.key]=!d.value[C.key])}function M(){e.value.forEach(C=>{d.value[C.key]===void 0&&(d.value[C.key]=i(C))})}async function k(C,u){const l=u||C.subPages&&C.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(C.key,l):(s.currentPage.value=C.key,s.currentSubPage&&(s.currentSubPage.value=l)),s.navigateTo&&s.navigateTo(C.key,l)}function _(){o.value=!o.value;try{localStorage.setItem("sidebar_collapsed",o.value?"1":"0")}catch{}}function T(C){if(C.ctrlKey&&C.key.toLowerCase()==="b"&&(C.preventDefault(),_()),!C.ctrlKey&&!C.metaKey&&!C.altKey&&(C.key==="ArrowDown"||C.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=u.indexOf(document.activeElement);if(l>=0){C.preventDefault();const p=u[(l+(C.key==="ArrowDown"?1:u.length-1))%u.length];p&&p.focus()}}}return wa(()=>{M(),document.addEventListener("keydown",T)}),ja(()=>document.removeEventListener("keydown",T)),{state:s,menus:e,currentPage:m,navMode:t,sidebarCollapsed:o,expandedMenus:d,GROUP_LABELS:y,GROUPS:c,isActive:i,isChildActive:g,hasChildren:r,subLabel:P,toggleSubmenu:w,navigate:k,toggleCollapse:_}}},zv={class:"qc-sidebar-logo"},Av={key:0,class:"qc-logo-text"},Lv={class:"qc-sidebar-nav"},Iv={key:0,class:"qc-nav-group"},Nv={key:0,class:"qc-nav-group-label"},Ov=["href","aria-current","onClick"],jv={key:0,class:"qc-sidebar-label"},Vv={key:1,class:"qc-nav-badge"},Fv=["aria-expanded","aria-controls","onClick"],Hv=["id"],Bv=["href","aria-current","onClick"],Kv={class:"qc-sidebar-child-label"},Wv={class:"qc-sidebar-footer"},Uv=["aria-expanded","aria-label","title"];function Gv(s,e,m,t,o,d){const y=Tt("AppIcon"),c=Tt("el-tooltip");return ge(),ke("nav",{class:rt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Pe("div",zv,[e[1]||(e[1]=_d('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(ge(),ke("span",Av,He(t.state.t("login.title")),1))]),Pe("div",Lv,[(ge(!0),ke(ct,null,wt(t.GROUPS,i=>(ge(),ke(ct,{key:i},[t.menus.some(g=>g.group===i)?(ge(),ke("div",Iv,[t.sidebarCollapsed?Be("",!0):(ge(),ke("span",Nv,He(t.GROUP_LABELS[i]),1)),(ge(!0),ke(ct,null,wt(t.menus.filter(g=>g.group===i),g=>(ge(),ke(ct,{key:g.key},[Pe("div",{class:rt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[vt(c,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:Gt(()=>[Pe("a",{class:rt(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:St(r=>t.navigate(g),["prevent"])},[vt(y,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(ge(),ke("span",jv,He(g.name),1)),!t.sidebarCollapsed&&g.badge?(ge(),ke("span",Vv,He(g.badge),1)):Be("",!0)],10,Ov)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(ge(),ke("button",{key:0,class:rt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:r=>t.toggleSubmenu(g)},[vt(y,{name:"chevron-down",size:14})],10,Fv)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(ge(),ke("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(ge(!0),ke(ct,null,wt(g.subPages,r=>(ge(),ke("a",{key:r,class:rt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,r)}]),href:"#"+g.key+"-"+r,"aria-current":t.isChildActive(g,r)?"page":null,onClick:St(P=>t.navigate(g,r),["prevent"])},[Pe("span",Kv,He(t.subLabel(g,r)),1)],10,Bv))),128))],8,Hv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Pe("div",Wv,[Pe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...i)=>t.toggleCollapse&&t.toggleCollapse(...i))},[vt(y,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Uv)])],2)}const Yv=la(Rv,[["render",Gv]]),Qv={name:"qc-header",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=kt(!1),m=lt(()=>s.currentUser&&s.currentUser.value||null),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=lt(()=>{const F=s.currentPage&&s.currentPage.value,ve=(s.menus&&s.menus.value||[]).find(me=>me.key===F);return!!(ve&&ve.subPages&&ve.subPages.length)}),d=lt(()=>{const F=s.currentPage&&s.currentPage.value,ve=s.currentPageName&&s.currentPageName.value;if(ve)return ve;const me=(s.menus&&s.menus.value||[]).find(X=>X.key===F);return me&&me.name||F||""}),y=lt(()=>{const F=s.currentSubPage&&s.currentSubPage.value;return F&&s.subPageNames&&s.subPageNames[F]||F||""}),c=kt(typeof window<"u"?window.innerWidth<768:!1);function i(){c.value=window.innerWidth<768}wa(()=>window.addEventListener("resize",i)),ja(()=>window.removeEventListener("resize",i));const g=kt(!1),r=lt(()=>{const F=s.currentSubPage&&s.currentSubPage.value;return F&&s.subPageNames&&s.subPageNames[F]||F||""}),P=lt(()=>{const F=s.currentPage&&s.currentPage.value,ve=(s.menus&&s.menus.value||[]).find(me=>me.key===F);return(ve&&ve.subPages||[]).map(me=>({key:me,label:s.subPageNames&&s.subPageNames[me]||me}))});function w(){g.value=!g.value}function M(){g.value=!1}function k(F){g.value=!1,s.activateTab&&s.activateTab(s.currentPage.value,F)}const _=lt(()=>(s.currentTheme&&s.currentTheme.value)==="dark"),T=kt(!1),C=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=lt(()=>{const F=C.find(ve=>ve.value===t.value);return F&&F.label||t.value});function l(){T.value=!T.value}function p(){T.value=!1}function E(F){T.value=!1,s.setNavMode&&s.setNavMode(F)}const I=lt({get:()=>s.searchQuery&&s.searchQuery.value||"",set:F=>{s.searchQuery&&(s.searchQuery.value=F)}}),q=kt(!1),D=kt([]),z=kt(!1),H=kt(!1);function K(){const F=localStorage.getItem("quant_token")||"";return F?{Authorization:"Bearer "+F,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function V(){z.value=!0,H.value=!1;try{const ve=await(await fetch("/api/alerts/history?limit=8",{headers:K()})).json();ve&&ve.success?D.value=ve.history||[]:D.value=[]}catch{H.value=!0,D.value=[]}finally{z.value=!1}}function Z(){q.value=!q.value,q.value&&V()}function U(){q.value=!1}function j(){q.value=!1,s.activateTab&&s.activateTab("system","notification")}const B=kt(!1),A=s.themeHues||[45,220,0,140,270,320,180,25,250,-1],a=lt(()=>{const F=s.themeHue&&s.themeHue.value;return Number.isFinite(F)?F:45}),S=lt(()=>s.themeMode&&s.themeMode.value||"system"),n=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],f=lt(()=>s.density&&s.density.value||"comfortable");function J(F){s.changeDensity&&s.changeDensity(F)}function N(F){return s.hueColor?s.hueColor(F):"hsl("+F+", 75%, 42%)"}const x={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function v(F){return s.hueName?s.hueName(F):x[F]||"自定义 "+F}function R(){B.value=!B.value}function b(){B.value=!1}function O(F){s.changeThemeMode&&s.changeThemeMode(F)}function ae(F){s.changeThemeHue&&s.changeThemeHue(F)}function re(){s.changeThemeMode&&s.changeThemeMode(_.value?"light":"dark")}function se(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}s.sidebarCollapsed&&(s.sidebarCollapsed.value=!s.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",s.sidebarCollapsed.value?"1":"0")}catch{}}function ie(){e.value=!e.value}function Y(){e.value=!1}function oe(F){return()=>{Y(),F&&F()}}function qe(){Y(),s.handleLogout&&s.handleLogout()}const ee=lt(()=>s.marketData&&s.marketData.value||{}),$=kt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:ee,bannerDismissed:$,dismissBanner:()=>{$.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:s,showUserMenu:e,currentUser:m,isDark:_,searchQuery:I,navMode:t,crumbRoot:d,crumbSub:y,hasToptabs:o,toggleThemeQuick:re,toggleSidebar:se,openUserMenu:ie,closeUserMenu:Y,menuItem:oe,handleLogout:qe,openBellMenu:q,notifItems:D,notifLoading:z,notifError:H,toggleBell:Z,closeBell:U,goNotificationCenter:j,openThemeMenu:B,themeHues:A,themeHue:a,themeMode:S,hueColor:N,hueName:v,toggleThemeMenu:R,closeThemeMenu:b,pickThemeMode:O,pickThemeHue:ae,DENSITY_MODES:n,density:f,pickDensity:J,openNavModeMenu:T,NAV_MODES:C,navModeLabel:u,toggleNavModeMenu:l,closeNavModeMenu:p,pickNavMode:E,isMobile:c,openSubnavPicker:g,currentSubLabel:r,subnavOptions:P,toggleSubnavPicker:w,closeSubnavPicker:M,pickSubnav:k}}},Jv={class:"qc-header-wrap"},$v={key:0,class:"non-trading-banner",role:"status"},Xv={class:"qc-header"},Zv={class:"visually-hidden"},em={class:"qc-header-left"},tm=["aria-label"],am={key:0,class:"qc-header-subnav"},sm=["aria-expanded"],nm={class:"qc-subnav-picker-label"},lm={key:0,class:"qc-subnav-picker-menu",role:"menu"},im=["onClick"],om={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},rm={class:"qc-crumb qc-crumb-root"},cm={class:"qc-crumb qc-crumb-sub"},dm={key:1,class:"qc-crumb qc-crumb-root"},um={class:"qc-header-center"},vm={key:0,class:"qc-search-sublabel"},mm={class:"qc-header-right"},fm={class:"qc-hdr-pop"},pm=["aria-expanded"],gm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},hm={key:0,class:"qc-bell-state"},ym={key:1,class:"qc-bell-state"},bm={key:2,class:"qc-bell-state"},wm={key:3,class:"qc-bell-list"},_m={class:"qc-bell-item-title"},km={class:"qc-bell-item-meta"},xm={key:0},Sm={class:"qc-bell-item-time"},Cm={class:"qc-hdr-pop"},qm=["aria-expanded"],Em={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Mm={class:"qc-theme-modes"},Tm=["onClick"],Pm={class:"qc-theme-swatches"},Dm=["title","aria-label","onClick"],Rm={key:0,class:"qc-theme-swatch-check"},zm={class:"qc-theme-custom-label"},Am={class:"qc-theme-modes"},Lm=["onClick"],Im={key:0,class:"qc-navmode-switch"},Nm=["aria-label","title","aria-expanded"],Om={key:0,class:"qc-navmode-menu",role:"menu"},jm=["onClick","onKeydown"],Vm={class:"qc-navmode-item-main"},Fm={class:"qc-user-menu"},Hm=["aria-label","aria-expanded"],Bm={key:0,class:"qc-user-dropdown",role:"menu"},Km={class:"qc-user-dropdown-header"},Wm={class:"qc-user-dropdown-name"},Um={key:0,class:"qc-user-dropdown-chip"};function Gm(s,e,m,t,o,d){var P,w,M,k,_,T,C;const y=Tt("AppIcon"),c=Tt("qc-top-tabs"),i=Tt("el-autocomplete"),g=Tt("el-slider"),r=kd("click-outside");return ge(),ke("div",Jv,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(ge(),ke("div",$v,[vt(y,{name:"alert-triangle",size:14}),e[15]||(e[15]=Pe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Pe("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...u)=>t.dismissBanner&&t.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):Be("",!0),Pe("header",Xv,[Pe("h1",Zv,He(t.crumbRoot||"量化日历"),1),Pe("div",em,[Pe("button",{class:"qc-icon-btn","aria-label":(P=t.state.sidebarCollapsed)!=null&&P.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},[vt(y,{name:"menu",size:20})],8,tm),t.isMobile?pa((ge(),ke("div",am,[Pe("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...u)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...u))},[Pe("span",nm,He(t.currentSubLabel||"二级"),1),vt(y,{name:"chevron-down",size:14})],8,sm),t.openSubnavPicker?(ge(),ke("div",lm,[(ge(!0),ke(ct,null,wt(t.subnavOptions,u=>(ge(),ke("div",{key:u.key,class:rt(["qc-subnav-picker-item",{"is-active":u.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(u.key)},He(u.label),11,im))),128))])):Be("",!0)])),[[r,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(ge(),ke("div",om,[Pe("span",rm,He(t.crumbRoot),1),t.crumbSub?(ge(),ke(ct,{key:0},[e[16]||(e[16]=Pe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Pe("span",cm,He(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(ge(),ke(ct,{key:2},[t.hasToptabs?(ge(),Yt(c,{key:0})):(ge(),ke("span",dm,He(t.crumbRoot),1))],64)):Be("",!0)]),Pe("div",um,[vt(i,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=u=>t.searchQuery=u),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:Gt(()=>[vt(y,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:Gt(()=>[...e[17]||(e[17]=[Pe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:Gt(u=>{var l,p,E,I,q;return[Pe("span",null,He((l=u==null?void 0:u.item)==null?void 0:l.icon)+" "+He(((p=u==null?void 0:u.item)==null?void 0:p.label)||((E=u==null?void 0:u.item)==null?void 0:E.name)),1),(I=u==null?void 0:u.item)!=null&&I.subLabel?(ge(),ke("span",vm,He((q=u==null?void 0:u.item)==null?void 0:q.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Pe("div",mm,[pa((ge(),ke("div",fm,[Pe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...u)=>t.toggleBell&&t.toggleBell(...u))},[vt(y,{name:"bell",size:20})],8,pm),t.openBellMenu?(ge(),ke("div",gm,[e[18]||(e[18]=Pe("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ge(),ke("div",hm,"加载中...")):t.notifError?(ge(),ke("div",ym,"加载失败")):t.notifItems.length?(ge(),ke("div",wm,[(ge(!0),ke(ct,null,wt(t.notifItems,(u,l)=>(ge(),ke("div",{key:u.id||l,class:rt(["qc-bell-item",{"is-fail":u.ok===0}])},[Pe("div",_m,He(u.title||u.event_type||"事件"),1),Pe("div",km,[sa(He(u.channel||""),1),u.recipient?(ge(),ke("span",xm," · "+He(u.recipient),1)):Be("",!0),Pe("span",Sm,He(u.created_at||""),1)])],2))),128))])):(ge(),ke("div",bm,"暂无通知")),Pe("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...u)=>t.goNotificationCenter&&t.goNotificationCenter(...u))},"前往通知中心 →")])):Be("",!0)])),[[r,t.closeBell]]),pa((ge(),ke("div",Cm,[Pe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...u)=>t.toggleThemeMenu&&t.toggleThemeMenu(...u))},[vt(y,{name:"palette",size:20})],8,qm),t.openThemeMenu?(ge(),ke("div",Em,[e[19]||(e[19]=Pe("div",{class:"qc-theme-section-label"},"外观模式",-1)),Pe("div",Mm,[(ge(),ke(ct,null,wt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>Pe("button",{key:u.k,class:rt(["qc-theme-mode",{"is-active":t.themeMode===u.k}]),onClick:l=>t.pickThemeMode(u.k)},He(u.n),11,Tm)),64))]),e[20]||(e[20]=Pe("div",{class:"qc-theme-section-label"},"主题色",-1)),Pe("div",Pm,[(ge(!0),ke(ct,null,wt(t.themeHues,u=>(ge(),ke("button",{key:u,class:rt(["qc-theme-swatch",{"is-active":t.themeHue===u}]),style:xd({background:t.hueColor(u)}),title:t.hueName(u),"aria-label":t.hueName(u),onClick:l=>t.pickThemeHue(u)},[t.themeHue===u?(ge(),ke("span",Rm,"✓")):Be("",!0)],14,Dm))),128))]),vt(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Pe("div",zm,"自定义 "+He(t.themeHue)+"°",1),e[21]||(e[21]=Pe("div",{class:"qc-theme-section-label"},"信息密度",-1)),Pe("div",Am,[(ge(!0),ke(ct,null,wt(t.DENSITY_MODES,u=>(ge(),ke("button",{key:u.k,class:rt(["qc-theme-mode",{"is-active":t.density===u.k}]),onClick:l=>t.pickDensity(u.k)},He(u.n),11,Lm))),128))])])):Be("",!0)])),[[r,t.closeThemeMenu]]),t.isMobile?Be("",!0):pa((ge(),ke("div",Im,[Pe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...u)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...u))},[vt(y,{name:"layers",size:20})],8,Nm),t.openNavModeMenu?(ge(),ke("div",Om,[(ge(!0),ke(ct,null,wt(t.NAV_MODES,u=>(ge(),ke("div",{key:u.value,class:rt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(u.value),onKeydown:[Ut(St(l=>t.pickNavMode(u.value),["prevent"]),["enter"]),Ut(St(l=>t.pickNavMode(u.value),["prevent"]),["space"])]},[Pe("div",Vm,[Pe("span",null,He(u.label),1),t.navMode===u.value?(ge(),Yt(y,{key:0,name:"check",size:14})):Be("",!0)])],42,jm))),128))])):Be("",!0)])),[[r,t.closeNavModeMenu]]),pa((ge(),ke("div",Fm,[Pe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((w=t.currentUser)==null?void 0:w.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...u)=>t.openUserMenu&&t.openUserMenu(...u))},He((((M=t.currentUser)==null?void 0:M.username)||"A").charAt(0).toUpperCase()),9,Hm),t.showUserMenu?(ge(),ke("div",Bm,[Pe("div",Km,[Pe("span",Wm,He((k=t.currentUser)==null?void 0:k.username),1),((_=t.currentUser)==null?void 0:_.role)==="guest"?(ge(),ke("span",Um,"访客")):Be("",!0)]),((T=t.currentUser)==null?void 0:T.role)==="admin"?(ge(),ke("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=u=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=Ut(St(u=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[vt(y,{name:"settings",size:16}),e[22]||(e[22]=sa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((C=t.currentUser)==null?void 0:C.role)!=="guest"?(ge(),ke("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=Ut(St(u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[vt(y,{name:"lock",size:16}),e[23]||(e[23]=sa(" 修改密码 ",-1))],32)):Be("",!0),e[25]||(e[25]=Pe("div",{class:"qc-user-dropdown-divider"},null,-1)),Pe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...u)=>t.handleLogout&&t.handleLogout(...u)),onKeydown:e[14]||(e[14]=Ut(St((...u)=>t.handleLogout&&t.handleLogout(...u),["prevent"]),["enter"]))},[vt(y,{name:"log-out",size:16}),e[24]||(e[24]=sa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[r,t.closeUserMenu]])])])])}const Ym=la(Qv,[["render",Gm]]),Qm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Jm={name:"qc-subnav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.currentPage&&s.currentPage.value||""),m=lt(()=>s.currentSubPage&&s.currentSubPage.value||""),t=lt(()=>s.navMode&&s.navMode.value||"subnav"),o=kt({}),d=lt(()=>s.menus&&s.menus.value||[]),y=lt(()=>d.value.find(C=>C.key===e.value)||null),c=lt(()=>y.value&&y.value.subPages||[]),i=lt(()=>s.currentPageName&&s.currentPageName.value||e.value),g=C=>s.subPageNames&&s.subPageNames[C]||C,r=C=>m.value===C;function P(C){s.openTab?s.openTab(e.value,C):s.currentSubPage&&(s.currentSubPage.value=C);try{localStorage.setItem("quant_last_subpage",C)}catch{}}function w(C){s.openTab?s.openTab(e.value,C.key):s.currentSubPage&&(s.currentSubPage.value=C.key);try{localStorage.setItem("quant_last_subpage",C.key)}catch{}}function M(C){o.value[C]=!o.value[C]}const k={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:s,currentPage:e,currentSubPage:m,navMode:t,subPages:c,currentMenu:y,collapsedGroups:o,pageTitle:i,subLabel:g,isSubActive:r,goSub:P,goSystemItem:w,toggleGroup:M,SYSTEM_GROUPS:Qm,subIcon:(C,u)=>k[C]&&k[C][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},$m={key:0,class:"qc-subnav-column","aria-label":"二级导航"},Xm={class:"qc-subnav-column-header"},Zm={class:"qc-subnav-current-label"},ef={class:"qc-subnav-column-body"},tf=["onClick"],af=["href","onClick"],sf={class:"qc-subnav-group-label"},nf=["href","onClick"],lf=["href","onClick"];function of(s,e,m,t,o,d){const y=Tt("AppIcon");return t.navMode==="subnav"?(ge(),ke("aside",$m,[Pe("div",Xm,[Pe("span",Zm,He(t.pageTitle),1)]),Pe("div",ef,[t.currentPage==="system"?(ge(!0),ke(ct,{key:0},wt(t.SYSTEM_GROUPS,c=>(ge(),ke("div",{key:c.label,class:"qc-subnav-group"},[Pe("div",{class:"qc-subnav-group-label",onClick:i=>t.toggleGroup(c.label)},[Pe("span",null,He(c.label),1),vt(y,{name:"chevron-down",size:12,class:rt({"is-open":!t.collapsedGroups[c.label]})},null,8,["class"])],8,tf),t.collapsedGroups[c.label]?Be("",!0):(ge(!0),ke(ct,{key:0},wt(c.items,i=>(ge(),ke("a",{key:i.key,class:rt(["qc-subnav-item",{"is-active":t.isSubActive(i.key)}]),href:"#"+i.key,onClick:St(g=>t.goSystemItem(i),["prevent"])},[vt(y,{name:i.icon,size:16},null,8,["name"]),Pe("span",null,He(i.label),1)],10,af))),128))]))),128)):t.currentPage==="shortterm"?(ge(!0),ke(ct,{key:1},wt(t.SHORTTERM_GROUPS,c=>(ge(),ke("div",{key:c.label,class:"qc-subnav-group"},[Pe("div",sf,[Pe("span",null,He(c.label),1)]),(ge(!0),ke(ct,null,wt(c.items,i=>(ge(),ke("a",{key:i,class:rt(["qc-subnav-item",{"is-active":t.isSubActive(i)}]),href:"#"+t.currentPage+"/"+i,onClick:St(g=>t.goSub(i),["prevent"])},[vt(y,{name:t.subIcon(t.currentPage,i),size:16},null,8,["name"]),Pe("span",null,He(t.subLabel(i)),1)],10,nf))),128))]))),128)):(ge(!0),ke(ct,{key:2},wt(t.subPages,c=>(ge(),ke("a",{key:c,class:rt(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:St(i=>t.goSub(c),["prevent"])},[vt(y,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),Pe("span",null,He(t.subLabel(c)),1)],10,lf))),128))])])):Be("",!0)}const rf=la(Jm,[["render",of]]),cf=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],df={name:"qc-mobile-nav",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=kt(!1),m=kt(null),t=kt({}),o=lt(()=>s.menus&&s.menus.value||[]),d=lt(()=>s.currentPage&&s.currentPage.value||""),y={research:"量化投研",platform:"平台管理"},c=["research","platform"];function i(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function g(u){i(u)&&(t.value[u.key]=!t.value[u.key])}function r(u,l){return d.value===u.key&&s.currentSubPage&&s.currentSubPage.value===l}function P(u){return s.subPageNames&&s.subPageNames[u]||u}async function w(u){const l=o.value.find(E=>E.key===u.key),p=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,p):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=p)),s.navigateTo&&s.navigateTo(u.key,p)}function M(u,l){e.value=!1;const p=l||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,p):(s.currentPage.value=u.key,s.currentSubPage&&(s.currentSubPage.value=p)),s.navigateTo&&s.navigateTo(u.key,p)}function k(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function _(){e.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function T(u){u.detail&&u.detail.open&&k()}function C(u){e.value&&u.key==="Escape"&&_()}return wa(()=>{window.addEventListener("qc:drawer",T),document.addEventListener("keydown",C)}),ja(()=>{window.removeEventListener("qc:drawer",T),document.removeEventListener("keydown",C)}),{state:s,TABS:cf,menus:o,currentPage:d,drawerOpen:e,drawerFocusRef:m,drawerExpanded:t,GROUP_LABELS:y,GROUPS:c,hasSub:i,toggleDrawerMenu:g,isDrawerSubActive:r,subLabel:P,goTab:w,goMenu:M,openDrawer:k,closeDrawer:_}}},uf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},vf=["aria-current","onClick"],mf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},ff={class:"qc-drawer-header"},pf={class:"qc-drawer-brand"},gf={class:"qc-drawer-body"},hf={key:0},yf={class:"qc-nav-group-label"},bf=["href","aria-current","onClick"],wf={class:"qc-sidebar-label"},_f=["aria-expanded","onClick"],kf={key:0,class:"qc-drawer-children"},xf=["href","onClick"],Sf={class:"qc-drawer-footer"},Cf=["title"];function qf(s,e,m,t,o,d){var c,i;const y=Tt("AppIcon");return ge(),ke(ct,null,[Pe("nav",uf,[(ge(!0),ke(ct,null,wt(t.TABS,g=>(ge(),ke("button",{key:g.key,class:rt(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:r=>t.goTab(g)},[vt(y,{name:g.icon,size:22},null,8,["name"]),Pe("span",null,He(g.label),1)],10,vf))),128))]),(ge(),Yt(Sd,{to:"body"},[t.drawerOpen?(ge(),ke("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Be("",!0),t.drawerOpen?(ge(),ke("div",mf,[Pe("div",ff,[Pe("div",pf,[e[4]||(e[4]=Pe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Pe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Pe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Pe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Pe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Pe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Pe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Pe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Pe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Pe("span",null,He(t.state.t("login.title")),1)]),Pe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[vt(y,{name:"x",size:18})])]),Pe("div",gf,[(ge(!0),ke(ct,null,wt(t.GROUPS,g=>(ge(),ke(ct,{key:g},[t.menus.some(r=>r.group===g)?(ge(),ke("div",hf,[Pe("div",yf,He(t.GROUP_LABELS[g]),1),(ge(!0),ke(ct,null,wt(t.menus.filter(r=>r.group===g),r=>(ge(),ke("div",{key:r.key,class:"qc-drawer-menu"},[Pe("div",{class:rt(["qc-drawer-menu-row",{"is-active":t.currentPage===r.key}])},[Pe("a",{class:rt(["qc-sidebar-item",{"is-active":t.currentPage===r.key}]),href:"#"+r.key,"aria-current":t.currentPage===r.key?"page":null,onClick:St(P=>t.hasSub(r)?t.toggleDrawerMenu(r):t.goMenu(r),["prevent"])},[vt(y,{name:r.iconName||"",size:18},null,8,["name"]),Pe("span",wf,He(r.name),1)],10,bf),t.hasSub(r)?(ge(),ke("button",{key:0,class:rt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[r.key]}]),"aria-expanded":!!t.drawerExpanded[r.key],"aria-label":"展开子菜单",onClick:P=>t.toggleDrawerMenu(r)},[vt(y,{name:"chevron-down",size:14})],10,_f)):Be("",!0)],2),t.drawerExpanded[r.key]?(ge(),ke("div",kf,[(ge(!0),ke(ct,null,wt(r.subPages,P=>(ge(),ke("a",{key:P,class:rt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(r,P)}]),href:"#"+r.key+"/"+P,onClick:St(w=>t.goMenu(r,P),["prevent"])},[Pe("span",null,He(t.subLabel(P)),1)],10,xf))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Pe("div",Sf,[Pe("button",{class:"qc-icon-btn",title:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var r;return t.state.changeThemeMode&&t.state.changeThemeMode(((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"light":"dark")})},[vt(y,{name:((i=t.state.currentTheme)==null?void 0:i.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Cf),Pe("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[vt(y,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const Ef=la(df,[["render",qf]]),Mf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(s,{emit:e,slots:m}){const t=ra("qcState");function o(r){e("select",r)}function d(r){const P=r.strategy_names||r.strategies||[],w=P.slice(0,3),M=P.length>3?P.length-3:0,k=w.map(_=>({text:_,more:!1}));return M&&k.push({text:"+"+M,more:!0}),k}function y(r){const P=Number(r);return isFinite(P)?P.toFixed(2):"—"}function c(r){const P=Number(r);return isFinite(P)?(P>0?"+":"")+P.toFixed(2)+"%":"—"}function i(r){const P=Number(r.consensus_level);return isFinite(P)?Math.round(P*100):0}function g(r){const P=Number(r&&r.consensus_level);return isFinite(P)&&P>0}return{state:t,slots:m,select:o,displayTags:d,fmtPrice:y,fmtChange:c,pctOf:i,hasConsensus:g}}},Tf={class:"qc-stock-list"},Pf=["data-copy-code","aria-label","onClick","onKeydown"],Df={key:0,class:"qc-stock-rank"},Rf={class:"qc-stock-info"},zf={class:"qc-stock-code"},Af={class:"qc-stock-code-num"},Lf={key:0,class:"qc-stock-status is-new"},If={key:1,class:"qc-stock-status is-out"},Nf={class:"qc-stock-name"},Of={key:0,class:"qc-stock-consensus"},jf={key:1,class:"qc-stock-tags"},Vf={key:2,class:"qc-stock-badge"},Ff={key:3,class:"qc-stock-data"},Hf={class:"qc-stock-price"},Bf={key:4,class:"qc-stock-extra"},Kf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Wf=["data-copy-code","aria-label","onClick","onKeydown"],Uf={key:0,class:"qc-stock-rank"},Gf={class:"qc-stock-info"},Yf={class:"qc-stock-code"},Qf={class:"qc-stock-code-num"},Jf={key:0,class:"qc-stock-status is-new"},$f={key:1,class:"qc-stock-status is-out"},Xf={class:"qc-stock-name"},Zf={key:0,class:"qc-stock-consensus"},ep={key:1,class:"qc-stock-tags"},tp={key:2,class:"qc-stock-badge"},ap={key:3,class:"qc-stock-data"},sp={class:"qc-stock-price"},np={key:4,class:"qc-stock-extra"},lp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function ip(s,e,m,t,o,d){const y=Tt("qc-state-panel"),c=Tt("qc-virtual-list");return ge(),ke("div",Tf,[m.loading?(ge(),Yt(y,{key:0,type:"loading"})):m.items.length?(ge(),ke(ct,{key:2},[m.virtual?(ge(),Yt(c,{key:0,items:m.items,"row-height":m.rowHeight},{default:Gt(({item:i,index:g})=>[Pe("div",{class:rt(["qc-stock-row",{"is-active":m.activeCode===i.code}]),"data-copy-code":m.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:r=>t.select(i),onKeydown:[Ut(St(r=>t.select(i),["prevent"]),["enter"]),Ut(St(r=>t.select(i),["prevent"]),["space"])]},[m.showRank?(ge(),ke("div",Df,He(g+1),1)):Be("",!0),Pe("div",Rf,[Pe("div",zf,[Pe("span",Af,He(i.code),1),i.status==="new"?(ge(),ke("span",Lf,He(m.statusText.new),1)):i.status==="out"?(ge(),ke("span",If,He(m.statusText.out),1)):Be("",!0)]),Pe("div",Nf,[sa(He(i.name)+" ",1),Ot(s.$slots,"name-suffix",{item:i,index:g})]),m.showConsensus&&t.hasConsensus(i)?(ge(),ke("span",Of,He(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(ge(),ke("div",jf,[(ge(!0),ke(ct,null,wt(t.displayTags(i),r=>(ge(),ke("span",{key:r.text,class:rt(["qc-stock-tag",{"is-more":r.more}])},He(r.text),3))),128))])):Be("",!0),m.showConsensus?(ge(),ke("span",Vf,He(i.strategy_count||0)+" 策略",1)):Be("",!0),m.showPrice&&i.price!=null?(ge(),ke("div",Ff,[Pe("span",Hf,He(t.fmtPrice(i.price)),1),Pe("span",{class:rt(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},He(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(ge(),ke("div",Bf,[Ot(s.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(ge(),ke("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=St(()=>{},["stop"]))},[Ot(s.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(ge(),ke("div",Kf,[Ot(s.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,Pf)]),_:3},8,["items","row-height"])):(ge(!0),ke(ct,{key:1},wt(m.items,(i,g)=>(ge(),ke("div",{key:i.code,class:rt(["qc-stock-row",{"is-active":m.activeCode===i.code}]),"data-copy-code":m.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:r=>t.select(i),onKeydown:[Ut(St(r=>t.select(i),["prevent"]),["enter"]),Ut(St(r=>t.select(i),["prevent"]),["space"])]},[m.showRank?(ge(),ke("div",Uf,He(g+1),1)):Be("",!0),Pe("div",Gf,[Pe("div",Yf,[Pe("span",Qf,He(i.code),1),i.status==="new"?(ge(),ke("span",Jf,He(m.statusText.new),1)):i.status==="out"?(ge(),ke("span",$f,He(m.statusText.out),1)):Be("",!0)]),Pe("div",Xf,[sa(He(i.name)+" ",1),Ot(s.$slots,"name-suffix",{item:i,index:g})]),m.showConsensus&&t.hasConsensus(i)?(ge(),ke("span",Zf,He(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(ge(),ke("div",ep,[(ge(!0),ke(ct,null,wt(t.displayTags(i),r=>(ge(),ke("span",{key:r.text,class:rt(["qc-stock-tag",{"is-more":r.more}])},He(r.text),3))),128))])):Be("",!0),m.showConsensus?(ge(),ke("span",tp,He(i.strategy_count||0)+" 策略",1)):Be("",!0),m.showPrice&&i.price!=null?(ge(),ke("div",ap,[Pe("span",sp,He(t.fmtPrice(i.price)),1),Pe("span",{class:rt(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},He(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(ge(),ke("div",np,[Ot(s.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(ge(),ke("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=St(()=>{},["stop"]))},[Ot(s.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(ge(),ke("div",lp,[Ot(s.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,Wf))),128))],64)):(ge(),Yt(y,{key:1,type:"empty",title:m.emptyText},null,8,["title"]))])}const op=la(Mf,[["render",ip]]),rp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},cp={key:0,class:"split-divider","data-split-resize":""};function dp(s,e,m,t,o,d){return ge(),ke("div",{class:rt(["detail-split-wrap",[m.rootClass,{"detail-split":m.enabled}]]),"data-split-root":""},[Pe("div",{class:rt(["detail-split-list",[m.listClass,{"w-100":!m.enabled}]])},[Ot(s.$slots,"list")],2),m.enabled?(ge(),ke("div",cp)):Be("",!0),m.enabled?(ge(),ke("div",{key:1,class:rt(["detail-split-pane",m.paneClass])},[Ot(s.$slots,"pane")],2)):Be("",!0)],2)}const up=la(rp,[["render",dp]]),Qs={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},vp=200,mp={name:"qc-top-tabs",components:{AppIcon:na},setup(){const s=ra("qcState");if(!s)return{};const e=lt(()=>s.currentPage&&s.currentPage.value||""),m=lt(()=>s.currentSubPage&&s.currentSubPage.value||""),t=lt(()=>s.menus&&s.menus.value||[]),o=lt(()=>{const l=t.value.find(p=>p.key===e.value);return l&&l.subPages||[]}),d=lt(()=>o.value.map(l=>({key:l,label:s.subPageNames&&s.subPageNames[l]||l,icon:Qs[e.value]&&Qs[e.value][l]||"circle-dot"}))),y=kt(null),c=kt(!1),i=kt(!1),g=kt(!1);let r=null,P=null;function w(){const l=y.value;l&&(i.value=l.scrollLeft>2,g.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function M(){const l=y.value;l&&(c.value=l.scrollWidth>l.clientWidth+2,w())}function k(l){const p=y.value;p&&p.scrollBy({left:l*vp,behavior:"smooth"})}function _(l){s.openTab?s.openTab(e.value,l):s.currentSubPage&&(s.currentSubPage.value=l)}function T(l){_(l),qd(()=>{const p=y.value;if(!p)return;const E=p.querySelector('[data-tab-key="'+l+'"]');E&&E.scrollIntoView({block:"nearest",inline:"nearest"})})}const C=lt(()=>{if(!c.value)return[];const l=y.value;if(!l)return[];const p=l.getBoundingClientRect(),E=new Set;return l.querySelectorAll(".qc-top-tab").forEach(I=>{const q=I.getBoundingClientRect();q.left>=p.left-2&&q.left<p.right-24&&E.add(I.getAttribute("data-tab-key"))}),d.value.filter(I=>!E.has(I.key))});function u(l,p){l.key==="ArrowLeft"?(l.preventDefault(),k(-1)):l.key==="ArrowRight"?(l.preventDefault(),k(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),_(p.key))}return wa(()=>{M(),r=new ResizeObserver(()=>{clearTimeout(P),P=setTimeout(M,100)}),y.value&&r.observe(y.value),window.addEventListener("resize",M)}),Cd(()=>{r&&r.disconnect(),window.removeEventListener("resize",M),clearTimeout(P)}),{state:s,tabs:d,currentSubPage:m,go:_,scrollRef:y,hasOverflow:c,canScrollLeft:i,canScrollRight:g,scrollByStep:k,scrollToTab:T,hiddenTabs:C,onTabKeydown:u,updateScrollState:w}}},fp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},pp=["disabled"],gp=["data-tab-key","aria-selected","title","onClick","onKeydown"],hp={class:"qc-top-tab-label"},yp=["disabled"];function bp(s,e,m,t,o,d){const y=Tt("AppIcon"),c=Tt("el-dropdown-item"),i=Tt("el-dropdown-menu"),g=Tt("el-dropdown");return t.tabs.length?(ge(),ke("div",fp,[t.hasOverflow?(ge(),ke("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=r=>t.scrollByStep(-1))},"‹",8,pp)):Be("",!0),Pe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...r)=>t.updateScrollState&&t.updateScrollState(...r))},[(ge(!0),ke(ct,null,wt(t.tabs,r=>(ge(),ke("div",{key:r.key,"data-tab-key":r.key,class:rt(["qc-top-tab",{"is-active":t.currentSubPage===r.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===r.key?"true":"false",title:r.label,onClick:P=>t.go(r.key),onKeydown:P=>t.onTabKeydown(P,r)},[vt(y,{name:r.icon,size:14},null,8,["name"]),Pe("span",hp,He(r.label),1)],42,gp))),128))],544),t.hasOverflow?(ge(),ke("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=r=>t.scrollByStep(1))},"›",8,yp)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(ge(),Yt(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:Gt(()=>[vt(i,null,{default:Gt(()=>[(ge(!0),ke(ct,null,wt(t.hiddenTabs,r=>(ge(),Yt(c,{key:r.key,command:r.key,class:rt({"is-active":t.currentSubPage===r.key})},{default:Gt(()=>[vt(y,{name:r.icon,size:14},null,8,["name"]),sa(" "+He(r.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:Gt(()=>[e[3]||(e[3]=Pe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const wp=la(mp,[["render",bp]]);(function(){const{ref:s,computed:e,inject:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=m("qcState");if(!t)return{};const o=s(!1),d=s(localStorage.getItem("qc.hideNonTradingBanner")==="1"),y=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},c=e(()=>t.marketData&&t.marketData.value||{}),i=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:c,bannerDismissed:d,dismissBanner:y,goMerrill:i,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:o,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(g,r){const P="sub."+g.key+"."+r,w=t.t(P);if(w!==P)return w;const M="sub."+r,k=t.t(M);return k!==M&&k?k:t.subPageNames[r]||r}}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=s("qcState");if(!e)return{};const{ref:m,computed:t}=Vue,o=m(0),d=m(0),y=m(!1),c=t(()=>{const q={day:"date",week:"week",month:"month",year:"year"},D=e.currentView&&e.currentView.value||"day";return q[D]||"date"}),i={day:"日",week:"周",month:"月",year:"年"};function g(q){return e.t&&e.t("view."+q)||i[q]||q}function r(q){e.switchView?e.switchView(q):e.currentView&&(e.currentView.value=q)}let P=null;function w(q){const D=q.touches&&q.touches[0];D&&(o.value=D.clientX,d.value=D.clientY)}async function M(){if(!y.value){y.value=!0;try{await e.refreshCalendarData()}catch{}P&&clearTimeout(P),P=setTimeout(()=>{y.value=!1},500)}}function k(q){if(!(window.innerWidth<=768))return;const D=q.changedTouches&&q.changedTouches[0];if(!D)return;const z=window.__quantModules&&window.__quantModules.gestures||{};if((typeof z.judgePullToRefresh=="function"?z.judgePullToRefresh(d.value,D.clientY):D.clientY-d.value>=60)&&(window.scrollY||0)<=0){q.stopPropagation(),M();return}if(e.currentSubPage.value==="pool")return;const K=D.clientX-o.value,V=D.clientY-d.value;Math.abs(K)>50&&Math.abs(K)>Math.abs(V)*1.2&&(e.navigateDate(K<0?1:-1),q.stopPropagation())}const _=m(!1),T=m(!1),C=m(""),u=m(null),l=m([]);function p(q){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[q]||q}async function E(){if(e.selectedDate.value){_.value=!0,T.value=!0,C.value="",u.value=null,l.value=[];try{const q=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),D=await q.json();if(!q.ok)throw new Error(D.detail||"HTTP "+q.status);u.value=D;const z=D&&D.comparison||{},H=[];for(const K of Object.keys(z)){if(K==="all_intersection")continue;const V=z[K]||{},Z=K.split("_vs_");H.push({label:p(Z[0])+" ↔ "+p(Z[1]),interCount:V.intersection_count||0,inter:(V.intersection||[]).join(", "),onlyS1Count:V.only_s1_count||0,onlyS1:(V.only_s1||[]).join(", "),onlyS2Count:V.only_s2_count||0,onlyS2:(V.only_s2||[]).join(", ")})}l.value=H}catch(q){C.value=String(q&&q.message?q.message:q)}finally{T.value=!1}}}let I="";return Vue.watch(()=>{const q=e.stockPool,D=q&&q.value||[];return{n:D.length,first:D[0]&&D[0].code,split:!!e.detailSplitEnabled.value}},(q,D)=>{if(!q.split||!q.first||q.n===0)return;const z=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,H=(e.stockPool.value||[]).some(K=>K.code===z);if(!(e.externalStockActive&&(!z&&e.externalStockActive(null)||z&&e.externalStockActive(z)))&&(!z||!H)){if(I===q.first&&z&&H===!1&&q.n>1)return;I=q.first,e.showStockDetail&&e.showStockDetail(q.first)}},{immediate:!0}),{...e,calType:c,pullRefreshing:y,onCalTouchStart:w,onCalTouchEnd:k,viewLabel:g,switchViewLocal:r,compareVisible:_,compareLoading:T,compareError:C,compareData:u,comparePairs:l,openStrategyCompare:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <qc-state-panel v-if="overviewError" type="error" title="总览数据加载失败" desc="请检查网络或服务后重试" @retry="loadDashboardData"></qc-state-panel>
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
                        <qc-state-panel v-if="merrillError" type="error" title="美林时钟数据加载失败" desc="请检查网络后重试" @retry="fetchMerrillClock"></qc-state-panel>
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
                        <qc-state-panel v-if="marketError" type="error" title="行情数据加载失败" desc="请检查网络或服务后重试" @retry="fetchMarketData"></qc-state-panel>
                        <qc-state-panel v-else-if="!(marketData.indices || []).length" type="empty" icon="line-chart" title="暂无行情数据" desc="当前无指数行情返回，可稍后重试"></qc-state-panel>
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
                        <qc-state-panel v-if="consensusError" type="error" title="共识榜加载失败" desc="请检查网络或服务后重试" @retry="loadConsensusData"></qc-state-panel>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=s("qcState"),m=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let o=0;const d=t(()=>{var h;return((h=e.merrillData)==null?void 0:h.value)||{}}),y=t(()=>{var h;return((h=e.marketData)==null?void 0:h.value)||{}}),c=t(()=>{var h;return((h=e.dashboardData)==null?void 0:h.value)||{}}),i=t(()=>{var h;return((h=e.healthMetrics)==null?void 0:h.value)||[]}),g=t(()=>{var h;return((h=e.filteredConsensusRank)==null?void 0:h.value)||[]}),r=t(()=>{const h={};for(const L of g.value)L.code&&L.name&&(h[L.code]=L.name);return h}),P={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function w(h){return P[h]||h}const M=t(()=>y.value.date||c.value.latest_date||"-"),k=t(()=>{const h=y.value;return!h||Object.keys(h).length===0?"数据加载中...":h.is_trading_day&&h.in_trading_hours?"● 交易中":h.is_trading_day?"已收盘":"○ 非交易日"}),_=t(()=>{const h=d.value.next_stage_prediction;return h&&h.next_stage_name&&h.transition_probability>.2?`→${h.next_stage_name} ${(h.transition_probability*100).toFixed(2)}%`:""}),T=t(()=>{const h=[],L=c.value.pool_changes||{},G=L.new_count||0;if(G>0){const Me=L.new_stock_names||{},Ce=(L.new_stocks||[]).map(ze=>Me[ze]||r.value[ze]||ze).slice(0,4).join("、");h.push({icon:"sparkles",level:"new",text:`今日新入池 ${G} 只${Ce?" · "+Ce:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Me of i.value.filter(Ce=>Ce.degraded))h.push({icon:"alert-triangle",level:"warn",text:`数据源 ${w(Me.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const ce=d.value.timing;ce&&ce.progress_percent&&ce.progress_percent>100?h.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${ce.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):ce&&ce.maturity&&d.value.name&&h.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${ce.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const de=y.value;return de&&de.is_trading_day===!1&&de.date&&h.push({icon:"calendar",level:"info",text:`${de.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),h}),C=t(()=>{const h=[],L=d.value.name||"",G=d.value.timing||{},ce=["复苏","成长","过热"],de=["滞胀","衰退"];ce.some(Fe=>L.includes(Fe))&&h.push({kind:"opportunity",source:"美林",text:L+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),de.some(Fe=>L.includes(Fe))&&h.push({kind:"risk",source:"美林",text:L+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),G.progress_percent&&G.progress_percent>100&&h.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Me=c.value.pool_changes||{},Ce=(Me.new_count||0)-(Me.out_count||0);Ce>=3?h.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ce,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Ce<=-3&&h.push({kind:"risk",source:"池变动",text:"净出池 "+Ce,action:()=>{e.currentSubPage.value="consensus"}});const ze=y.value.market_sentiment,je=ze&&ze.text||"";(je.includes("乐观")||je.includes("积极")||je.includes("亢奋"))&&h.push({kind:"opportunity",source:"情绪",text:je,action:()=>{e.currentSubPage.value="market"}}),(je.includes("悲观")||je.includes("恐慌")||je.includes("低迷"))&&h.push({kind:"risk",source:"情绪",text:je,action:()=>{e.currentSubPage.value="market"}});for(const Fe of i.value.filter(Xe=>Xe.degraded))h.push({kind:"risk",source:"数据",text:w(Fe.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return h}),u=t(()=>{var h;return((h=e.merrillTimeline)==null?void 0:h.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var h;return((h=e.timelineLoading)==null?void 0:h.value)||!1});function p(h){const L=e.showStageDetail;typeof L=="function"&&L(h)}function E(h){const L=e.merrillStagesConfig,ce=(L&&L.value?L.value:L||{})[h]||{};return ce.color||ce.bg_color||"var(--color-primary)"}function I(h){const L=e.merrillStagesConfig,G=L&&L.value?L.value:L||{};return G[h]&&G[h].name||""}function q(){const h=e.merrillStagesConfig;return h&&h.value?h.value:h||{}}function D(h){return q()[h]&&q()[h].description||""}const z=Vue.ref([]),H=Vue.ref(null),K=Vue.ref(!1),V=Vue.ref(!1),Z=Vue.ref(7),U=Vue.ref(""),j=Vue.ref(""),B=Vue.computed(()=>{const h=new Set;return(z.value||[]).forEach(function(L){L.task&&h.add(L.task)}),Array.from(h).sort()}),A=Vue.computed(function(){const h=H.value&&H.value.success_rate||0;return h>=80?"color-success":h>=50?"color-warning":"color-danger"});function a(h,L){return h>0&&L/h>=.8?"status-ok":h>0&&L/h>=.5?"status-warn":"status-bad"}async function S(){const h=++o;K.value=!0,V.value=!1;try{const L=window.__quantModules&&window.__quantModules.core||{},G=typeof L.authHeaders=="function"?L.authHeaders():{},ce=new URLSearchParams({days:String(Z.value)});U.value&&ce.set("task",U.value),j.value&&ce.set("status",j.value);const[de,Me]=await Promise.all([fetch("/api/system/execution-history?"+ce.toString(),{headers:G}).then(function(Ce){return Ce.json()}),fetch("/api/system/execution-summary?days="+Z.value,{headers:G}).then(function(Ce){return Ce.json()})]);if(h!==o)return;z.value=de&&de.data||[],H.value=Me&&Me.data||null}catch(L){console.error("[execution] 执行数据加载失败:",L),V.value=!0}finally{h===o&&(K.value=!1)}}const n=window.__quantModules&&window.__quantModules.i18n||{},f=typeof n.t=="function"?n.t:function(h){return String(h)},J=Vue.ref([]),N=Vue.ref(null),x=Vue.ref(null),v=Vue.ref(""),R=Vue.ref([]),b=Vue.ref(!1);let O=null;const ae=Vue.computed(function(){const h=x.value&&x.value.dates||[];return h.length&&!v.value&&(v.value=h[h.length-1].date),h}),re=Vue.computed(function(){const h=(J.value||[]).find(function(G){return G.enabled});if(!h||h.countdown_seconds==null)return"—";const L=h.countdown_seconds;return Math.floor(L/3600)+"h"+String(Math.floor(L%3600/60)).padStart(2,"0")+"m"}),se=Vue.computed(function(){const h=(J.value||[]).find(function(L){return L.enabled});if(!h||h.countdown_seconds==null||h.countdown_seconds<0)return"";try{return new Date(Date.now()+h.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),ie=Vue.computed(function(){const h=N.value;return!h||h.phase==="idle"?f("exec.waiting"):h.phase==="running"?f("exec.running")+(h.current_sid?" · "+h.current_sid:""):h.phase==="done"?f("exec.done"):f("exec.failed")}),Y=Vue.computed(function(){return N.value&&N.value.phase==="running"?"loader":"check-circle-2"}),oe=Vue.computed(function(){const h=x.value&&x.value.dates||[];return h.length?h[h.length-1].date:"—"}),qe=Vue.computed(function(){const h=x.value&&x.value.dates||[],L=h[h.length-1];return L&&L.visible?"color-success":"color-danger"}),ee=Vue.computed(function(){const h=x.value&&x.value.dates||[],L=h[h.length-1];return L?L.day_view_total:"—"});function $(h){const L=window.__quantModules&&window.__quantModules.core||{},G=typeof L.authHeaders=="function"?L.authHeaders():{};return fetch(h,{headers:G}).then(function(ce){return ce.json()})}async function we(){const h=++o;try{const[L,G,ce]=await Promise.all([$("/api/strategies/execution/plan"),$("/api/strategies/execution/status"),$("/api/strategies/execution/results?days=7")]);if(h!==o)return;J.value=L&&L.data&&L.data.plans||[],N.value=G&&G.data||null,x.value=ce&&ce.data||null,N.value&&N.value.phase==="running"?F():ve()}catch(L){console.error("[execution-monitor] 监控数据加载失败:",L)}}function F(){ve(),O=setInterval(function(){$("/api/strategies/execution/status").then(function(h){N.value=h&&h.data||null,N.value&&N.value.phase!=="running"&&(ve(),we())}).catch(function(){})},5e3)}function ve(){O&&(clearInterval(O),O=null)}async function me(h){if(!h)return;const L=++o;b.value=!0;try{const G=await $("/api/strategies/execution/trace/"+encodeURIComponent(h));if(L!==o)return;const ce=G&&G.data||null;R.value=ce&&ce.steps||[]}catch(G){console.error("[execution-trace] 追溯加载失败:",G)}finally{L===o&&(b.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(h){h==="execution"?(S(),we()):ve()},{immediate:!0}),Vue.watch(function(){const h=e.currentSubPage&&e.currentSubPage.value,L=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],G=e.marketData&&e.marketData.value||{};return{sub:h,split:!!e.detailSplitEnabled.value,top5:L.slice(0,5),rank:L,indices:(G.indices||[]).map(function(ce){return ce})}},function(h,L){if(h.split){if(h.sub==="overview"){if(!h.top5.length)return;const G=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.top5.some(function(de){return de.code===G});(!G||!ce)&&e.showStockDetail&&e.showStockDetail(h.top5[0].code)}else if(h.sub==="consensus"){if(!h.rank.length)return;const G=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.rank.some(function(de){return de.code===G});(!G||!ce)&&e.showStockDetail&&e.showStockDetail(h.rank[0].code)}else if(h.sub==="market"){if(!h.indices.length)return;const G=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,ce=h.indices.some(function(de){return de.code===G});(!G||!ce)&&e.showIndexDetail&&e.showIndexDetail(h.indices[0])}}},{immediate:!0});const X=Vue.ref("band"),ue=["recession","recovery","overheating","stagflation"];function Ee(h){if(!h)return null;const L=String(h).split("-"),G=parseInt(L[0],10),ce=parseInt(L[1]||"1",10);return isFinite(G)?G+(ce-1)/12:null}function _e(h){const L=Math.floor(h);let G=Math.round((h-L)*12)+1;return G>12&&(G=12),G<1&&(G=1),L+"-"+(G<10?"0"+G:""+G)}function Ne(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function pe(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function le(h,L){const G=Ne(),ce=Number(G.avg_duration_months)||0,de=Math.min(100,Number(G.progress_percent)||0),Me=Ee(G.current_stage_start_date),Ce=[];let ze=null;if((h||[]).forEach(function(ne){const Je=Ee(ne.start);ze==null&&Je!=null&&(ze=Je);const ht=!!(ne.is_current||Me!=null&&Je===Me&&!ne.duration_months),xt=ne.name||I(ne.stage);if(ht&&ce>0){const nt=ce*de/100;nt>.5&&Ce.push({stage:ne.stage,name:xt,months:nt,live:!0,start:ne.start});const bt=ce-nt;bt>.5&&Ce.push({stage:ne.stage,name:"剩余(预测)",months:bt,ghost:!0,start:ne.start})}else{let nt=Number(ne.duration_months)||0;if(!nt&&Je!=null){const bt=Ee(ne.end);bt!=null&&bt>Je&&(nt=Math.max(1,Math.round((bt-Je)*12)))}nt||(nt=1),Ce.push({stage:ne.stage,name:xt,months:nt,live:ht,start:ne.start,end:ne.end})}if(ht&&L&&ce>0){const nt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;nt&&Ce.push({stage:nt.next_stage,name:(nt.next_stage_name||"下一阶段")+" (预测)",months:ce,ghost:!0,prob:nt.transition_probability})}}),!Ce.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const je=Ce.reduce(function(ne,Je){return ne+Je.months},0)||1,Fe=ze??0;let Xe=0,ft=0;const et=Ce.map(function(ne){const Je=Xe;ne.ghost||(ft+=ne.months),Xe+=ne.months;const ht={stage:ne.stage,name:ne.name,months:Math.round(ne.months),ghost:!!ne.ghost,live:!!ne.live,prob:ne.prob,left:Je/je*100,width:Math.max(2,ne.months/je*100)},xt=Ee(ne.start),nt=Ee(ne.end);return ht.start=xt!=null?_e(xt):_e(Fe+Je/12),ht.end=nt!=null?_e(nt):"",ht.predicted=xt==null,ht}),Ge=Ce[Ce.length-1],pt=Ce.some(function(ne){return ne.ghost}),te=Ge&&Ge.end?Ge.end:_e(Fe+je/12);return{segs:et,axisStart:_e(Fe),axisEnd:te,nowPct:pt?ft/je*100:null}}function he(h){return(h.stages||[]).some(function(L){return L.is_current})}const Oe=Vue.computed(function(){const h=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!h.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let L=null;for(let G=h.length-1;G>=0;G--)if(he(h[G])){L=h[G];break}return L||(L=h[h.length-1]),le(L.stages,!0)});function Ve(h){const L=h&&h.stages?h.stages:[];if(!L.length)return"";const G=L[0]&&L[0].start?String(L[0].start).slice(0,4):"",ce=L[L.length-1]||{},de=ce.end?String(ce.end).slice(0,4):ce.start?String(ce.start).slice(0,4):"";return G||de?G?G+"–"+de:de:""}const We=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(L){return!he(L)}).map(function(L){return{label:L.label,years:Ve(L),segs:le(L.stages,!1).segs}})}),tt=ue,be=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(L){const G={};ue.forEach(function(de){G[de]=0});let ce=null;return(L.stages||[]).forEach(function(de){G[de.stage]!=null&&(G[de.stage]+=Number(de.duration_months)||0),de.is_current&&(ce=de.stage)}),{label:L.label,sum:G,cur:ce}})}),ye=Vue.computed(function(){let h=0;return be.value.forEach(function(L){ue.forEach(function(G){L.sum[G]>h&&(h=L.sum[G])})}),h||1}),Ae=Vue.computed(function(){const h=e.merrillSnapshots&&e.merrillSnapshots.value||[],L=[];return h.forEach(function(G){const ce=L[L.length-1];ce&&ce.stage===G.stage?(ce.count++,ce.last=G.timestamp):L.push({stage:G.stage,name:G.stage_name||I(G.stage),count:1,first:G.timestamp,last:G.timestamp})}),L}),Re=Vue.computed(function(){return Math.max(100,Math.min(200,Number(Ne().progress_percent)||0))}),Ye=Vue.computed(function(){const h=Number(Ne().progress_percent)||0;return{width:Math.max(0,Math.min(100,h/Re.value*100))+"%",background:h>100?"linear-gradient(90deg, color-mix(in srgb, "+pe()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+pe()+" var(--bar-mix), var(--surface-card))"}}),Ue=Vue.computed(function(){return 100/Re.value*100}),Qe=Vue.computed(function(){const h=Ne().predicted_end;if(!h)return"";if(typeof h=="string")return h;const L=h.optimistic||h.earliest||"",G=h.pessimistic||h.latest||"";return L&&G?L+" ~ "+G:h.base||h.mid||L||G||""});var $e=22;function st(h){return"color-mix(in srgb, "+h+" "+$e+"%, var(--surface-card))"}function gt(h){const L=E(h.stage);return h.ghost?{left:h.left+"%",width:h.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+L,background:"repeating-linear-gradient(45deg, "+st(L)+" 0, "+st(L)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:h.left+"%",width:h.width+"%",background:st(L),color:"var(--text-primary)",borderLeft:"3px solid "+L}}function fe(h){const L=[h.name];return h.start&&L.push((h.predicted?"预计起始 ":"起始 ")+h.start+(h.end?" → "+h.end:"")),h.months&&L.push("约 "+h.months+" 个月"),h.ghost&&L.push("预测(尚未发生)"),h.prob!=null&&L.push("转移概率 "+(h.prob*100).toFixed(0)+"%"),L.join(" · ")}function xe(h,L){const G=E(h),ce=Math.max(.28,L/ye.value),de=Math.round(14+30*ce);return{background:"color-mix(in srgb, "+G+" "+de+"%, var(--surface-card))",color:"var(--text-primary)"}}const Le=Vue.computed(function(){const h=e.merrillData&&e.merrillData.value||e.merrillData||{},L=h.color||E(h.stage);return{background:"color-mix(in srgb, "+L+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+L+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+L+" 26%, transparent)"}});return{...e,todayText:M,tradingStatus:k,merrillNext:_,todayFocus:T,todaySignals:C,merrillConfigOpen:m,getTimelineStageColor:E,getTimelineStageName:I,getTimelineStageDesc:D,merrillChipStyle:Le,mcHistView:X,mcCurrentBand:Oe,mcHistoryBands:We,mcStageKeys:tt,mcMatrix:be,mcTrailRuns:Ae,mcProgStyle:Ye,mcAvgMark:Ue,mcEndRange:Qe,mcSegStyle:gt,mcSegTitle:fe,mcMxCellStyle:xe,merrillTimeline:u,timelineLoading:l,showTimelineStage:p,execHistory:z,execSummary:H,execLoading:K,execError:V,execDays:Z,execTaskFilter:U,execStatusFilter:j,execTaskOptions:B,execSuccessClass:A,loadExecutionData:S,execRateClass:a,execPlan:J,execStatus:N,execResults:x,execTraceDate:v,execTraceSteps:R,execTraceLoading:b,execResultsDates:ae,execCountdownText:re,execNextRunText:se,execPhaseText:ie,execStatusIcon:Y,execLastDate:oe,execVisibleClass:qe,execVisibleText:ee,loadExecutionTrace:me}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" desc="点击重试重新加载健康与可靠性数据" @retry="refreshHealth"></qc-state-panel>
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
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" desc="点击重试重新加载健康与可靠性数据" @retry="refreshHealth"></qc-state-panel>
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
                        <qc-state-panel v-if="healthDetailError" type="error" title="调度任务数据加载失败" desc="请检查服务后重试" @retry="loadHealthDetail"></qc-state-panel>
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
                        <qc-state-panel v-if="factCheckError" type="error" title="事实护栏数据加载失败" desc="请检查服务后重试" @retry="loadFactCheck"></qc-state-panel>
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
                        <qc-state-panel v-if="aiModelsError" type="error" :title="aiModelsError" desc="厂商模型配置获取失败，可重试" @retry="loadAiVendors"></qc-state-panel>
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
                        <qc-state-panel v-if="ncError" type="error" title="通知中心数据加载失败" desc="请检查服务后重试" @retry="loadNotificationData"></qc-state-panel>
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
                        <qc-state-panel v-else-if="freshnessError" type="error" title="数据新鲜度加载失败" desc="请检查服务后重试" @retry="loadFreshness"></qc-state-panel>
                        <qc-state-panel v-else-if="freshnessItems.length === 0" type="empty" icon="inbox" title="暂无数据新鲜度记录" desc="接口未返回任何数据表，可点击刷新重试"></qc-state-panel>
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
                        <qc-state-panel v-if="feishuConfigError" type="error" title="功能配置数据加载失败" desc="请检查服务后重试" @retry="loadFeishuConfig"></qc-state-panel>
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
                            <qc-state-panel v-if="dictError" type="error" :title="dictError" desc="点击重试重新加载数据字典" @retry="loadDataDict"></qc-state-panel>
                            <qc-state-panel v-else-if="!dictLoading && dictData.fields.length === 0" type="empty" icon="book-open" title="暂无字段数据" desc="当前分类没有字典字段，可切换分类或点击刷新"></qc-state-panel>
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
                        <qc-state-panel v-if="sysMonitorError" type="error" title="用量统计数据加载失败" desc="请检查服务后重试" @retry="loadSysMonitor"></qc-state-panel>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=s("qcState");if(!e)return{};function m(te){e.currentSubPage.value=te}function t(){Ne.value=!1,le(),he(),Oe()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,te=>{te==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),te==="datadict"&&se(),te==="health"&&R(),te==="notification"&&t(),te==="datasource"&&C(),te!=="usage"&&S()});const o=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},y=e.themeMode||Vue.computed(()=>"light"),c=e.themeHue||Vue.ref(45);function i(te){e.changeThemeMode&&e.changeThemeMode(te)}function g(te){e.changeThemeHue&&e.changeThemeHue(parseInt(te,10))}function r(te){return e.hueColor?e.hueColor(te):te<0?"hsl(0, 0%, 46%)":"hsl("+te+", 75%, 42%)"}function P(te){return e.hueName?e.hueName(te):d[te]||"自定义 "+te}function w(te){e.setNavMode&&e.setNavMode(te)}const M=Vue.ref([]),k=Vue.ref([]),_=Vue.ref(!1),T=Vue.ref(!1);async function C(){_.value=!0,T.value=!1;try{const ne=await(await fetch("/api/meta/freshness")).json();ne&&ne.success?k.value=ne.items||[]:T.value=!0}catch{T.value=!0}_.value=!1}const u=Vue.ref(""),l=Vue.ref("read"),p=Vue.ref(""),E=Vue.ref(!1),I=()=>window.__quantModules&&window.__quantModules.core||{},q=Vue.ref([]),D=Vue.ref(!1);async function z(){D.value=!0;try{const te=await fetch("/api/audit/logs?limit=20",{headers:I().authHeaders?I().authHeaders():{}}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()});q.value=te&&te.logs||[]}catch(te){console.error("[system] 审计加载失败:",te),q.value=[]}finally{D.value=!1}}const H=Vue.ref(!1),K=Vue.ref(null),V=Vue.ref(null),Z=Vue.ref([]),U=Vue.ref(null);function j(te){return te==="completed"?"完成":te==="running"?"运行中":te==="pending"?"排队中":te==="cancelled"?"已取消":"失败"}async function B(){try{const ne=await(await fetch("/api/jobs?limit=20")).json();ne&&ne.success&&(Z.value=ne.data&&ne.data.tasks||[])}catch(te){console.warn("[system] 加载任务队列失败:",te)}}async function A(te){try{await fetch("/api/jobs/"+te+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),B()}catch(ne){console.warn("[system] 取消任务失败:",ne)}}function a(){B(),U.value=window.setInterval(B,15e3)}function S(){U.value&&(clearInterval(U.value),U.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){S()});const n=Vue.ref({items:[]}),f=Vue.ref([]),J=Vue.ref(null),N=Vue.ref({data_sources:[],alerts:[]}),x=function(){return I().authHeaders?I().authHeaders():{}},v=function(te){return fetch(te,{headers:x()}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()})};async function R(){H.value=!0,K.value=null;try{const[te,ne,Je,ht]=await Promise.all([v("/api/reliability/freshness"),v("/api/reliability/heal-history?limit=20"),v("/api/reliability/startup-report"),v("/api/reliability/source-health")]);n.value=te&&te.data||{items:[]},f.value=ne&&ne.data||[],J.value=Je&&Je.data||null,N.value=ht||{data_sources:[],alerts:[]},V.value=new Date().toLocaleTimeString()}catch(te){console.warn("[health] 加载失败:",te),K.value="健康数据加载失败: "+(te.message||""),n.value={items:[]},f.value=[]}finally{H.value=!1}}const b=Vue.ref(!1),O=Vue.ref(""),ae=Vue.ref(""),re=Vue.ref({fields:[]});async function se(){b.value=!0,O.value="";try{const te="/api/data-dict"+(ae.value?"?category="+ae.value:""),ne=await v(te);re.value=ne&&ne.data||{fields:[]}}catch(te){console.warn("[dict] 加载失败:",te),O.value="数据字典加载失败: "+(te.message||""),re.value={fields:[]}}finally{b.value=!1}}function ie(te){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[te]||"var(--text-secondary)"}function Y(te){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[te]||te}const oe=Vue.computed(()=>(n.value?n.value.items||[]:[]).filter(ne=>ne.status==="stale"||ne.status==="missing").length),qe=Vue.ref("rules"),ee=Vue.ref([]),$=Vue.ref([]),we=Vue.ref([]),F=Vue.ref(!1),ve=Vue.ref(""),me=Vue.ref("price_above"),X=Vue.ref(""),ue=Vue.ref(!1),Ee=Vue.ref(60),_e=Vue.ref(""),Ne=Vue.ref(!1);function pe(te){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[te]||te}async function le(){F.value=!0,Ne.value=!1;try{const te=await(await fetch("/api/alerts/rules")).json();ee.value=te&&te.rules||[]}catch(te){_e.value="规则加载失败: "+te,Ne.value=!0}finally{F.value=!1}}async function he(){F.value=!0,Ne.value=!1;try{const te=await(await fetch("/api/alerts/history?limit=50")).json();$.value=te&&te.history||[]}catch(te){_e.value="历史加载失败: "+te,Ne.value=!0}finally{F.value=!1}}async function Oe(){F.value=!0,Ne.value=!1;try{const te=await(await fetch("/api/alerts/channels")).json(),ne=await(await fetch("/api/alerts/silence")).json();we.value=te&&te.channels||[],ue.value=!!(ne&&ne.silenced)}catch(te){_e.value="通道状态加载失败: "+te,Ne.value=!0}finally{F.value=!1}}function Ve(te){qe.value=te,te==="rules"?le():te==="history"?he():Oe()}async function We(){const te=ve.value.trim();if(!te){_e.value="请填写股票代码";return}F.value=!0;try{const ne={stock_code:te,rule_type:me.value};if(me.value!=="new_pool"){const ht=Number(X.value);if(isNaN(ht)){_e.value="阈值必须为数值";return}ne.threshold=ht}const Je=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ne)})).json();Je&&Je.rule?(_e.value="规则已添加",ve.value="",X.value="",le()):_e.value=Je&&Je.detail||"添加失败"}catch(ne){_e.value="添加失败: "+ne}finally{F.value=!1}}async function tt(te){try{await fetch("/api/alerts/rules/"+te.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!te.enabled})}),te.enabled=!te.enabled}catch(ne){_e.value="切换失败: "+ne}}async function be(te){try{const ne=await(await fetch("/api/alerts/rules/"+te.id,{method:"DELETE"})).json();ne&&ne.success?(_e.value="规则已删除",le()):_e.value="删除失败"}catch(ne){_e.value="删除失败: "+ne}}async function ye(){try{const te=ue.value?Ee.value:0,ne=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:te})})).json();ue.value=!!(ne&&ne.silenced),_e.value=ue.value?"已静默":"已恢复推送"}catch(te){_e.value="静默设置失败: "+te}}async function Ae(){ue.value=!1,await ye()}function Re(te){return!!te&&!te.degraded}const Ye=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ne,Je)=>Math.max(ne,Je.views||0),0)||1),Ue=()=>I().OPENAPI_ROUTE_BASE||"/api/openapi";async function Qe(){E.value=!0;try{const te=await I().apiFetch(Ue()+"/keys");M.value=te&&te.data||[]}catch(te){ElementPlus.ElMessage.error("加载 API Key 失败: "+(te.message||""))}finally{E.value=!1}}async function $e(){try{const te=await I().apiFetch(Ue()+"/keys",{method:"POST",body:JSON.stringify({name:u.value||"未命名",role:l.value||"read",expire_days:365})});te&&te.success?(p.value=te.api_key||"",u.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Qe()):ElementPlus.ElMessage.error(te&&(te.detail||te.message)||"生成失败")}catch(te){ElementPlus.ElMessage.error("生成失败: "+(te.message||""))}}async function st(){if(p.value)try{await navigator.clipboard.writeText(p.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function gt(te){try{const ne=await I().apiFetch(Ue()+"/keys/"+te.id,{method:"DELETE"});ne&&ne.success?(ElementPlus.ElMessage.success("Key 已吊销"),p.value&&te.prefix&&p.value.includes(te.prefix)&&(p.value=""),await Qe()):ElementPlus.ElMessage.error(ne&&(ne.detail||ne.message)||"吊销失败")}catch(ne){ElementPlus.ElMessage.error("吊销失败: "+(ne.message||""))}}const fe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function xe(te){return fe[te]||te}const Le=computed(()=>{var te;return(((te=e.healthMetrics)==null?void 0:te.value)||[]).map(ne=>({name:xe(ne.name),source:ne.name,success_rate:ne.success_rate,avg_latency_ms:ne.avg_latency_ms,calls:ne.calls||0,degraded:!!ne.degraded,data_age_hours:ne.data_age_hours!=null?ne.data_age_hours:null,stale:!!ne.stale,last_fetch:ne.last_fetch||ne.last_success||null}))});function h(te){return te.degraded?"degraded":te.success_rate==null?"unknown":te.success_rate>=90?"ok":te.success_rate>=60?"warn":"bad"}function L(te){return te==null?"":te<1?"刚刚":te<24?Math.round(te)+"小时前":Math.floor(te/24)+"天前"}const G=e.aiUsage||Vue.ref({}),ce=Vue.computed(()=>{const te=G.value&&G.value.by_model||{};return Object.entries(te).map(([ne,Je])=>({name:ne,count:Je})).sort((ne,Je)=>Je.count-ne.count)}),de=Vue.computed(()=>ce.value.reduce((te,ne)=>Math.max(te,ne.count),0)||1),Me=Vue.computed(()=>ce.value.reduce((te,ne)=>te+ne.count,0)||1),Ce=Vue.computed(()=>ze.value.reduce((te,ne)=>Math.max(te,ne.count),0)||0),ze=Vue.computed(()=>{const te=G.value&&G.value.by_day||{},ne=[],Je=new Date;for(let ht=29;ht>=0;ht--){const xt=new Date(Je.getFullYear(),Je.getMonth(),Je.getDate()-ht),nt=xt.getFullYear()+"-"+String(xt.getMonth()+1).padStart(2,"0")+"-"+String(xt.getDate()).padStart(2,"0");ne.push({day:nt,count:te[nt]||0})}return ne}),je=Vue.computed(()=>ze.value.reduce((te,ne)=>Math.max(te,ne.count),0)||1),Fe=Vue.computed(()=>{const te=G.value&&G.value.by_day||{},ne=new Date,Je=ne.getFullYear()+"-"+String(ne.getMonth()+1).padStart(2,"0")+"-"+String(ne.getDate()).padStart(2,"0");return te[Je]||0}),Xe=Vue.computed(()=>{const te=G.value&&G.value.by_day||{},ne=Object.keys(te).filter(Je=>(te[Je]||0)>0);return ne.length?ne[ne.length-1]:""});function ft(te){e.analyticsDays&&(e.analyticsDays.value=te),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const et='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ge='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function pt(te){return te?Ge:et}return a(),{...e,themeHues:o,themeHueNames:d,themeMode:y,themeHue:c,onThemeModeChange:i,setThemeHue:g,hueColor:r,hueName:P,onNavModeChange:w,analyticsMaxViews:Ye,aiModelRank:ce,aiModelMax:de,aiDayTrend:ze,aiDayMax:je,todayAiCalls:Fe,lastAiCallDay:Xe,aiTotal:Me,aiDayPeak:Ce,setAnalyticsDays:ft,viewIcon:pt,openApiKeys:M,openApiKeyName:u,openApiKeyRole:l,newOpenApiKey:p,openApiLoading:E,loadOpenApiKeys:Qe,generateOpenApiKey:$e,copyOpenApiKey:st,revokeOpenApiKey:gt,healthRows:Le,healthClass:h,fmtAge:L,staleAssetCount:oe,jobQueue:Z,loadJobQueue:B,cancelJob:A,jobStatusText:j,auditLogs:q,auditLoading:D,loadAuditLogs:z,healthLoading:H,healthError:K,healthUpdatedAt:V,freshnessData:n,healHistory:f,startupReport:J,sourceHealth:N,refreshHealth:R,statusColor:ie,statusLabel:Y,sourceOk:Re,dictLoading:b,dictError:O,dictCategory:ae,dictData:re,loadDataDict:se,ncTab:qe,ncRules:ee,ncHistory:$,ncChannels:we,ncLoading:F,ncNewCode:ve,ncNewType:me,ncNewThreshold:X,ncSilence:ue,ncSilenceMinutes:Ee,ncMsg:_e,ncTypeLabel:pe,onNcTab:Ve,loadAlertRules:le,loadAlertHistory:he,loadAlertChannels:Oe,addAlertRule:We,toggleAlertRule:tt,removeAlertRule:be,applySilence:ye,clearSilence:Ae,freshnessItems:k,freshnessLoading:_,freshnessError:T,loadFreshness:C,ncError:Ne,goSystemSub:m}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.part1=`
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
                    <!-- 6.3.1 (T-6.3.1.3): 空/错误态由 FocusView 上报, 页面侧统一面板承接 -->
                    <div v-else-if="currentSubPage === 'focus'">
                        <qc-state-panel v-if="focusState.error" type="error" @retry="reloadFocus"></qc-state-panel>
                        <qc-state-panel v-else-if="focusState.empty" type="empty" icon="target" title="暂无重点跟踪数据" desc="当前日期/时段暂无评估结果，可切换日期或时段"></qc-state-panel>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.view=window.__quantModules.aiPage.part1+window.__quantModules.aiPage.part2;(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:window.__quantModules.aiPage.view,setup(){const{ref:e,watch:m,onUnmounted:t}=Vue,o=s("qcState");if(!o)return{};function d(){if(!o.hasMoreAiHistory||!o.loadMoreAiHistory||o.currentPage.value!=="ai"||o.currentSubPage.value!=="history")return;const F=document.documentElement;F.scrollTop+window.innerHeight>=F.scrollHeight-300&&o.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const y=e(null),c=e(!1),i=e(!1),g=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function r(F){return!F||F.total===0||F.rate===null||F.rate===void 0?"--":F.rate.toFixed(2)+"%"}const P=e(5);function w(F){P.value=F}function M(F,ve){if(!F)return"--";if(F.available===!1)return"— 数据不可达";const me=F["hit_n"+ve];return me===!0?"✓ 命中":me===!1?"✗ 未中":"– 中性/待验证"}async function k(){c.value=!0,i.value=!1;try{const ve=await(await fetch("/api/ai/track")).json();y.value=ve&&ve.success?ve.data:null}catch(F){console.warn("[eval-track] 评估命中率加载失败:",F),y.value=null,i.value=!0}finally{c.value=!1}}m(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(F){F==="ai/evaluation-analysis"&&k()},{immediate:!0});const _=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:T,summary:C,trades:u,loading:l,loadError:p,showAddForm:E,addForm:I,addSaving:q,tradeFormVisible:D,tradeForm:z,tradeSaving:H,portfolioTab:K,equityDays:V,equityLoading:Z,equityNote:U,equityHasData:j,loadPortfolio:B,addPosition:A,removePosition:a,openTradeForm:S,submitTrade:n,loadTrades:f,loadEquity:J,fmtSigned:N,fmtSignedPct:x,signClass:v,riskTab:R,riskLoading:b,riskNote:O,riskHasData:ae,riskData:re,riskMetricList:se,loadRisk:ie}=_;m(T,function(F){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((F||[]).map(function(ve){return{code:ve.stock_code,name:ve.stock_name||ve.stock_code}}))},{deep:!0}),m(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(F){F==="ai/portfolio"?(B(),f(),J(V?V.value:30),typeof ie=="function"&&ie()):F==="ai/overview"&&B()},{immediate:!0});let Y="",oe=!1;m(function(){const F=o.currentSubPage&&o.currentSubPage.value,ve=!!(o.detailSplitEnabled&&o.detailSplitEnabled.value),me={sub:F,split:ve,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(F==="history"){const X=o.aiHistoryView&&o.aiHistoryView.value||"date",ue=X==="date"?o.groupedByDate:X==="month"?o.groupedByMonth:o.aiHistoryByStock,Ee=ue&&ue.value||{},_e=Object.keys(Ee);me.kind="history",me.view=X,me.key=_e.length?_e[0]:"",me.first=_e.length&&(Ee[_e[0]]||[])[0]||null,me.expandList=X==="date"?o.expandedDates:X==="month"?o.expandedMonths:o.expandedStocks,me.expandFn=X==="date"?o.toggleDateExpand:X==="month"?o.toggleMonthExpand:o.toggleStockExpand}else if(F==="chat_history"){const X=o.chatHistoryView&&o.chatHistoryView.value||"date",ue=X==="date"?o.chatGroupedByDate:X==="month"?o.chatGroupedByMonth:o.chatGroupedByStock,Ee=ue&&ue.value||{},_e=Object.keys(Ee);me.kind="chat",me.view=X,me.key=_e.length?_e[0]:"",me.first=_e.length&&(Ee[_e[0]]||[])[0]||null,me.expandList=X==="date"?o.expandedChatDates:X==="month"?o.expandedChatMonths:o.expandedChatStocks,me.expandFn=X==="date"?o.toggleChatDateExpand:X==="month"?o.toggleChatMonthExpand:o.toggleChatStockExpand}return me},function(F){if(!F.split||!F.first||!F.kind)return;const ve=F.sub!==Y,me=o.stockDetail&&o.stockDetail.value,X=!!(me&&me.stock);if(!ve&&X||oe)return;Y=F.sub,oe=!0;try{F.key&&F.expandList&&F.expandFn&&F.expandList.value&&F.expandList.value.indexOf(F.key)<0&&F.expandFn(F.key)}catch{}const ue=F.kind==="history"?o.viewAiResult(F.first):o.viewChatSession(F.first);ue&&typeof ue.finally=="function"?ue.finally(function(){oe=!1}):oe=!1},{immediate:!0});const qe=e({error:!1,empty:!1}),ee=e(null);function $(F){F&&(qe.value=F)}function we(){const F=ee.value;F&&typeof F.loadAll=="function"&&F.loadAll()}return{...o,trackData:y,trackLoading:c,trackError:i,trackWindows:g,fmtTrackRate:r,loadTrack:k,trackWindow:P,setTrackWindow:w,trackHitText:M,focusState:qe,focusViewRef:ee,onFocusLoadState:$,reloadFocus:we,positions:T,summary:C,trades:u,loading:l,loadError:p,showAddForm:E,addForm:I,addSaving:q,tradeFormVisible:D,tradeForm:z,tradeSaving:H,portfolioTab:K,equityDays:V,equityLoading:Z,equityNote:U,equityHasData:j,loadPortfolio:B,addPosition:A,removePosition:a,openTradeForm:S,submitTrade:n,loadTrades:f,loadEquity:J,fmtSigned:N,fmtSignedPct:x,signClass:v,riskTab:R,riskLoading:b,riskNote:O,riskHasData:ae,riskData:re,riskMetricList:se,loadRisk:ie}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(s){const{ref:e,seq:m,authHeaders:t}=s,o=e([]),d=e(!1),y=e(!1),c=e(""),i=e(null),g=e(!1),r=e(!1);async function P(){const E=++m.n;d.value=!0,y.value=!1;try{const I=await fetch("/api/market/reviews?limit=30",{headers:t()}).then(q=>q.json());if(E!==m.n)return;I&&I.success?o.value=Array.isArray(I.data)?I.data:[]:y.value=!0}catch(I){console.error("[market-review] 复盘列表加载失败:",I),y.value=!0}finally{E===m.n&&(d.value=!1)}}function w(E){c.value=E,C(E)}function M(E){c.value===E?T():w(E)}function k(E){return E==null||isNaN(Number(E))?"—":(Number(E)>=0?"+":"")+Number(E).toFixed(2)+"%"}function _(E){return E==null||isNaN(Number(E))?"—":Number(E).toFixed(2)}function T(){c.value="",i.value=null,r.value=!1}async function C(E){const I=++m.n;g.value=!0,r.value=!1,i.value=null;try{const q=E?"/api/market/review?date="+encodeURIComponent(E):"/api/market/review",D=await fetch(q,{headers:t()}).then(z=>z.json());if(I!==m.n)return;D&&D.success?i.value=D.data:r.value=!0}catch(q){console.error("[market-review] 复盘详情加载失败:",q),r.value=!0}finally{I===m.n&&(g.value=!1)}}function u(E){return E>0?"up":E<0?"down":"flat"}function l(E){return E==null||isNaN(Number(E))?"—":(E>0?"+":"")+Number(E).toFixed(2)+"%"}function p(E){const I={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(E||{}).map(function(q){const D=q[0],z=q[1],H=!z||z==="unavailable"||z==="数据不可达";return{label:I[D]||D,value:H?"数据不可达":z,unavailable:H}})}return{marketReviews:o,marketReviewLoading:d,marketReviewError:y,selectedReviewDate:c,marketReviewDetail:i,marketReviewDetailLoading:g,marketReviewDetailError:r,loadMarketReviews:P,openMarketReview:w,toggleMarketReviewDate:M,backToMarketReviewList:T,loadMarketReviewDetail:C,marketReviewChgClass:u,marketReviewChgText:l,marketReviewSrcEntries:p,fmtPct:k,fmtEmotion:_}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(s){const{ref:e,seq:m,withAuth:t,authHeaders:o,activeStrategyId:d,paramValues:y}=s,c=e("mom20"),i=e(!1),g=e(!1),r=e(null),P=e(null),w=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],M=e('{"top_n":[10,20,30]}'),k=e(null),_=e(""),T=e(!1),C=e(null);async function u(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let D;try{D=JSON.parse(M.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!D||Object.keys(D).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}T.value=!0,k.value=null,_.value="";try{const z=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:o(),body:JSON.stringify({param_grid:D})}).then(function(H){return H.json()});z&&Array.isArray(z.results)?(k.value=z.results,_.value="完成 "+z.count+" 组"+(z.data_degraded?" (数据不可达, 结果降级)":""),C.value=z.param_stability||null):_.value=z&&z.detail||"扫描失败"}catch(z){console.error("[sweep]",z),_.value="扫描失败: "+z.message}finally{T.value=!1}}async function l(){const D=++m.n;i.value=!0;try{const z=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:y.value||{}})}).then(function(K){return K.json()}),H=z&&z.report?z.report.n1||{}:{};r.value=H}catch(z){console.error("[research] 因子IC分析失败:",z),ElementPlus.ElMessage.error("因子 IC 分析失败: "+z.message)}finally{D===m.n&&(i.value=!1)}}async function p(){const D=++m.n;g.value=!0;try{const z=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:y.value||{}})}).then(function(H){return H.json()});z&&z.layers?P.value=z:ElementPlus.ElMessage.warning("分层回测: "+(z.message||"无数据"))}catch(z){console.error("[research] 分层回测失败:",z),ElementPlus.ElMessage.error("分层回测失败: "+z.message)}finally{D===m.n&&(g.value=!1)}}const E=e(null),I=e(!1);async function q(){const D=++m.n;I.value=!0,E.value=null;try{const z=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:c.value,params:y.value||{}})}).then(function(H){return H.json()});z&&z.detail?E.value=z.detail:ElementPlus.ElMessage.warning("因子详情: "+(z.message||"无数据"))}catch(z){console.error("[research] 因子详情失败:",z),ElementPlus.ElMessage.error("因子详情失败: "+z.message)}finally{D===m.n&&(I.value=!1)}}return{factorKey:c,factorIcLoading:i,factorLayerLoading:g,factorIcReport:r,factorLayerResult:P,factorOptions:w,runFactorIc:l,runFactorLayer:p,factorDetail:E,factorDetailLoading:I,runFactorDetail:q,sweepGrid:M,sweepResult:k,sweepMessage:_,sweepLoading:T,sweepStability:C,runSweep:u}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(s){const{seq:e,state:m}=s,t=Vue.ref([]),o=Vue.ref(!1),d=Vue.ref(!1),y=Vue.ref(""),c=Vue.ref([]),i=Vue.ref(""),g=Vue.ref([]),r=Vue.ref(!1),P=Vue.ref(!1),w={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function M(I){return w[I]||I||"—"}function k(I){m&&m.navigateTo&&m.navigateTo("shortterm",I)}function _(){m.currentSubPage.value="research-history",T()}async function T(){const I=++e.n;o.value=!0,d.value=!1;try{const q=window.__quantModules&&window.__quantModules.core||{},D=typeof q.authHeaders=="function"?q.authHeaders():{},z=y.value?"?type="+encodeURIComponent(y.value):"",H=await fetch("/api/strategies/research-history"+z,{headers:D}).then(function(K){return K.json()});if(I!==e.n)return;t.value=H&&H.items||[]}catch(q){console.error("[research-history] 加载失败:",q),d.value=!0}finally{I===e.n&&(o.value=!1)}}async function C(){const I=++e.n;P.value=!0;try{const q=window.__quantModules&&window.__quantModules.core||{},D=typeof q.authHeaders=="function"?q.authHeaders():{},z=y.value?"?type="+encodeURIComponent(y.value):"",H=await fetch("/api/strategies/research-history/export"+z,{headers:D});if(!H.ok)throw new Error("HTTP "+H.status);const K=await H.blob(),V=URL.createObjectURL(K),Z=document.createElement("a");Z.href=V,Z.download="research_history.csv",document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(V)}catch(q){console.error("[research-history] 导出失败:",q)}finally{I===e.n&&(P.value=!1)}}function u(I){const q=c.value.indexOf(I);q>=0?c.value.splice(q,1):c.value.length<10&&c.value.push(I)}function l(I){i.value=i.value===I?"":I}async function p(){const I=++e.n,q=c.value;if(!(q.length<2)){r.value=!0;try{const D=window.__quantModules&&window.__quantModules.core||{},z=typeof D.authHeaders=="function"?D.authHeaders():{},H=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},z),body:JSON.stringify({ids:q})}).then(function(K){return K.json()});g.value=H&&H.items||[]}catch(D){console.error("[research-history] 对比失败:",D)}finally{I===e.n&&(r.value=!1)}}}async function E(I){try{const q=window.__quantModules&&window.__quantModules.core||{},D=typeof q.authHeaders=="function"?q.authHeaders():{},z=await fetch("/api/strategies/research-history/"+I,{method:"DELETE",headers:D}).then(function(H){return H.json()});if(z&&z.deleted){t.value=t.value.filter(function(K){return K.id!==I});const H=c.value.indexOf(I);H>=0&&c.value.splice(H,1)}}catch(q){console.error("[research-history] 删除失败:",q)}}return{researchHistory:t,researchHistoryLoading:o,researchHistoryError:d,researchHistoryType:y,researchHistorySelected:c,researchDetailId:i,researchCompareRows:g,researchCompareLoading:r,researchExportLoading:P,researchTypeLabel:M,goShortterm:k,openResearchHistory:_,loadResearchHistory:T,exportResearchHistory:C,toggleResearchSelect:u,toggleResearchDetail:l,runResearchCompare:p,deleteResearchHistory:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
                <!-- V5.2.3: 市场复盘移入短线复盘 → 本组件在 shortterm 下也渲染该子页 (V6.9.1-fix: 异动扫描已删除) -->
                <div key="research">
                    <!-- V6.9.4 (FIX): 根 v-if currentPage 判断在组件内为死值导致整页空白 — 移除, 子页由 currentSubPage 控制 -->
                    <!-- V6.9.3 (F11.2): 策略研究菜单恒显 — 移除 researchMenuEnabled 占位分支 -->
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 策略研究概览</div>
                        <!-- 6.3.1 (T-6.3.1.3): 四态统一 — 加载/错误/空态收敛到 qc-state-panel -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || '策略研究数据加载失败'" desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="flask-conical" title="暂无策略研究数据" desc="先去「量化研究」加载策略注册表，或创建自定义策略"></qc-state-panel>
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
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || '策略加载失败'"
                            desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0" type="empty" icon="flask-conical" title="暂无策略" desc="策略注册表为空，请检查后端策略目录或创建自定义策略"></qc-state-panel>
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
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || '策略加载失败'" desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="layers" title="暂无可管理的策略" desc="先复制母本创建微调策略，或用 AI 代写全新策略"></qc-state-panel>
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
                        <qc-state-panel v-else-if="backtestError" type="error" title="回测失败" desc="请检查策略与日期范围后重试" @retry="runBacktest"></qc-state-panel>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:s,computed:e,watch:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const o=t("qcState"),d=Vue.ref(!1),y=Vue.ref(!1),c={n:0};if(!o)return{};const i=s(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(Q){i.value=Q;try{localStorage.setItem("quant_strategy_mode",Q)}catch{}o.currentSubPage.value="strategy-manage"}const r=s([]),P=s(!1),w=s(!1),M=s(""),k=s(""),_=s(""),T=s({}),C=s(!1),u=s(""),l=s(""),p=s([]),E=s([]),I=s(""),q=s(""),D=s(!0),z=s(!0),H=s("20:00"),K=s("default"),V=s(!1),Z=s(""),U=e(function(){return r.value.find(function(Q){return Q.id===_.value})||null});async function j(Q,Se){Se=Se||{},Se.headers=Object.assign({},Se.headers||{});const Ze=localStorage.getItem("quant_token")||"";return Ze&&(Se.headers.Authorization="Bearer "+Ze),fetch(Q,Se)}async function B(){const Q=++c.n;P.value=!0,w.value=!1,M.value="",k.value="";try{const Se=await j("/api/strategies").then(function(aa){return aa.json()});if(Q!==c.n)return;let Ze=null;Array.isArray(Se)?Ze=Se:Se&&Array.isArray(Se.strategies)?(Ze=Se.strategies,Se.warn&&(k.value=String(Se.warn))):(w.value=!0,M.value=Se&&Se.detail?String(Se.detail):"策略列表加载失败（接口返回异常）"),Ze!==null&&(r.value=Ze,r.value.length&&!_.value&&(_.value=r.value[0].id,A()))}catch(Se){console.error("[research] 策略列表加载失败:",Se),w.value=!0,M.value="策略列表加载失败: "+(Se&&Se.message||"网络错误")}finally{Q===c.n&&(P.value=!1)}}function A(){const Q=U.value;Q&&(T.value={},Q.schema.forEach(function(Se){T.value[Se.key]=Se.default}),l.value="",O(),a(),J())}async function a(){if(!_.value){E.value=[];return}try{const Q=await j("/api/strategies/"+_.value+"/profiles").then(function(Se){return Se.json()});E.value=Q&&Q.data&&Q.data.profiles||[],I.value=""}catch(Q){console.error("[research] 方案列表加载失败:",Q),E.value=[]}}async function S(){d.value=!0;const Q=(q.value||"").trim();if(!Q){window._core&&window._core.showToast("请输入方案名称");return}try{const Se=await j("/api/strategies/"+_.value+"/profiles",{method:"POST",body:JSON.stringify({name:Q,params:T.value})}).then(function(Ze){return Ze.json()});if(Se&&Se.detail){window._core&&window._core.showToast(String(Se.detail));return}q.value="",await a(),window._core&&window._core.showToast("方案已保存")}catch(Se){console.error("[research] 方案保存失败:",Se),window._core&&window._core.showToast("方案保存失败")}}function n(){const Q=E.value.find(function(Se){return Se.id===I.value});Q&&(Object.keys(Q.params||{}).forEach(function(Se){T.value[Se]=Q.params[Se]}),window._core&&window._core.showToast("已应用方案: "+Q.name))}async function f(){if(I.value)try{await j("/api/strategies/"+_.value+"/profiles/"+I.value,{method:"DELETE"}).then(function(Q){return Q.json()}),await a(),window._core&&window._core.showToast("方案已删除")}catch(Q){console.error("[research] 方案删除失败:",Q)}}async function J(){try{const Q=await j("/api/strategies/governance").then(function(aa){return aa.json()}),Ze=(Q&&Q.data&&Q.data.strategies||{})[_.value]||{};D.value=Ze.enabled!==!1,H.value=Ze.schedule||"20:00",K.value=Ze.universe==="all"?"all":"default",z.value=Ze.show_in_calendar!==!1,Z.value=Ze.last_holdings||""}catch(Q){console.error("[research] 纳管状态加载失败:",Q)}}async function N(){try{await j("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const Q={};return Q[_.value]={enabled:D.value,schedule:H.value,universe:K.value,show_in_calendar:z.value},Q}()})}).then(function(Q){return Q.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(Q){console.error("[research] 纳管更新失败:",Q)}}async function x(){if(_.value){V.value=!0;try{const Q=await j("/api/strategies/"+_.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:u.value||void 0})}).then(function(Se){return Se.json()});if(Q&&Q.detail){window._core&&window._core.showToast(String(Q.detail));return}window._core&&window._core.showToast("持仓已生成"),await J()}catch(Q){console.error("[research] run-once 失败:",Q),window._core&&window._core.showToast("持仓生成失败")}finally{V.value=!1}}}function v(){Z.value&&window.open(Z.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function R(){const Q=U.value;if(!Q)return;const Se=(q.value||"").trim()||Q.name+"-副本";b(Se,Object.assign({},T.value)),window._core&&window._core.showToast("已复制为副本方案: "+Se)}async function b(Q,Se){try{await j("/api/strategies/"+_.value+"/profiles",{method:"POST",body:JSON.stringify({name:Q,params:Se})}).then(function(Ze){return Ze.json()}),await a()}catch(Ze){console.error("[research] 副本保存失败:",Ze)}}async function O(){const Q=++c.n;if(_.value)try{const Se=await j("/api/strategies/"+_.value+"/runs?limit=5").then(function(Ze){return Ze.json()});if(Q!==c.n)return;p.value=Array.isArray(Se)?Se:[]}catch{p.value=[]}}async function ae(){if(_.value){C.value=!0;try{const Q=await j("/api/strategies/"+_.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:T.value,as_of:u.value||void 0})}).then(function(Se){return Se.json()});Q&&Q.status==="success"?O():ElementPlus.ElMessage.error("运行失败: "+(Q.detail||JSON.stringify(Q)))}catch(Q){console.error("[research] 策略运行失败:",Q),ElementPlus.ElMessage.error("运行失败: "+Q.message)}finally{C.value=!1}}}async function re(){if(_.value)try{const Q=Object.keys(T.value).map(function(Ze){return encodeURIComponent(Ze)+"="+encodeURIComponent(T.value[Ze])}).join("&"),Se=await j("/api/strategies/"+_.value+"/ptrade-code?"+Q).then(function(Ze){return Ze.json()});Se&&Se.code?l.value=Se.code:ElementPlus.ElMessage.error("导出失败: "+(Se.detail||JSON.stringify(Se)))}catch(Q){console.error("[research] PTrade 导出失败:",Q),ElementPlus.ElMessage.error("导出失败: "+Q.message)}}function se(){if(!l.value)return;const Q=document.createElement("textarea");Q.value=l.value,document.body.appendChild(Q),Q.select();try{document.execCommand("copy")}catch{}document.body.removeChild(Q)}const ie=window.__quantModules.researchPage.marketReview.create({ref:s,seq:c,authHeaders:qt}),{marketReviews:Y,marketReviewLoading:oe,marketReviewError:qe,selectedReviewDate:ee,marketReviewDetail:$,marketReviewDetailLoading:we}=ie,{marketReviewDetailError:F,loadMarketReviews:ve,openMarketReview:me,toggleMarketReviewDate:X,backToMarketReviewList:ue,loadMarketReviewDetail:Ee}=ie,{marketReviewChgClass:_e,marketReviewChgText:Ne,marketReviewSrcEntries:pe,fmtPct:le,fmtEmotion:he}=ie,Oe=window.__quantModules.researchPage.factor.create({ref:s,seq:c,withAuth:j,authHeaders:qt,activeStrategyId:_,paramValues:T}),{factorKey:Ve,factorIcLoading:We,factorLayerLoading:tt,factorIcReport:be,factorLayerResult:ye,factorOptions:Ae}=Oe,{runFactorIc:Re,runFactorLayer:Ye,factorDetail:Ue,factorDetailLoading:Qe,runFactorDetail:$e,sweepGrid:st}=Oe,{sweepResult:gt,sweepMessage:fe,sweepLoading:xe,sweepStability:Le,runSweep:h}=Oe,L=window.__quantModules.researchPage.history.create({seq:c,state:o}),{researchHistory:G,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Me,researchHistorySelected:Ce,researchDetailId:ze}=L,{researchCompareRows:je,researchCompareLoading:Fe,researchExportLoading:Xe,researchTypeLabel:ft,goShortterm:et,openResearchHistory:Ge}=L,{loadResearchHistory:pt,exportResearchHistory:te,toggleResearchSelect:ne,toggleResearchDetail:Je,runResearchCompare:ht,deleteResearchHistory:xt}=L;m(function(){return o.currentPage.value+"/"+o.currentSubPage.value},function(Q){Q==="research/research-overview"&&(B(),ve(),zt(),ta()),(Q==="research/market-review"||Q==="shortterm/market-review")&&!ee.value&&ve(),Q==="research/quant-research"&&B(),Q==="research/backtest-history"&&va()},{immediate:!0});const nt=s([]),bt=s(null),Ct=s(null),jt=s(null),Dt=s(""),Vt=s(!1),Pt=s(!1),dt=s(""),Ft=s(""),Ht=s("");function qt(){const Q=localStorage.getItem("quant_token")||"";return Q?{Authorization:"Bearer "+Q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function zt(){const Q=++c.n;try{const Se=await fetch("/api/strategies/variants",{headers:qt()}).then(function(Ze){return Ze.json()});if(Q!==c.n)return;nt.value=Se&&Se.data&&Se.data.variants||[]}catch(Se){console.error("[i3a] 加载 variants 失败:",Se)}}async function Bt(){if(!_.value){dt.value="请先在量化研究选择母本策略";return}Pt.value=!0,dt.value="";try{const Q=await fetch("/api/strategies/"+_.value+"/clone",{method:"POST",headers:qt(),body:JSON.stringify({name:(q.value||"").trim()||void 0,params:Object.assign({},T.value)})}).then(function(Ze){return Ze.json()});if(Q&&Q.detail){dt.value=String(Q.detail);return}const Se=Q&&Q.data;Se&&Se.sid&&(bt.value=Se.sid,dt.value="已复制为新策略: "+Se.name,await zt(),await At(Se.sid))}catch(Q){console.error("[i3a] 复制失败:",Q),dt.value="复制失败: "+Q.message}finally{Pt.value=!1}}async function $t(Q){bt.value=Q,dt.value="",Dt.value="",await At(Q)}async function At(Q){try{const Se=await fetch("/api/strategies/"+Q+"/selection-spec",{headers:qt()}).then(function(Ze){return Ze.json()});Se&&Se.data&&Se.data.spec&&(Ct.value=Object.assign({},Se.data.spec),jt.value=Se.data.fields,Ft.value=(Se.data.spec.industry_scope||[]).join(","),Ht.value=(Se.data.spec.market_cap_range||[]).join(","))}catch(Se){console.error("[i3a] 加载 spec 失败:",Se)}}async function Lt(){if(y.value=!0,!(!bt.value||!Ct.value))try{Ct.value.industry_scope=Ft.value?Ft.value.split(/[,，]/).map(function(Se){return Se.trim()}).filter(Boolean):[],Ct.value.market_cap_range=Ht.value?Ht.value.split(/[,，]/).map(Number).filter(function(Se){return!isNaN(Se)}):[];const Q=await fetch("/api/strategies/"+bt.value+"/selection-spec",{method:"PUT",headers:qt(),body:JSON.stringify({spec:Ct.value})}).then(function(Se){return Se.json()});Q&&Q.data&&Q.data.spec&&(Ct.value=Q.data.spec,dt.value="SelectionSpec 已保存")}catch(Q){console.error("[i3a] 保存 spec 失败:",Q),dt.value="保存失败"}}async function W(){if(!bt.value){dt.value="请先选择/创建微调策略";return}Pt.value=!0,dt.value="";try{const Q=await fetch("/api/strategies/"+bt.value+"/run-once",{method:"POST",headers:qt(),body:"{}"}).then(function(Se){return Se.json()});dt.value=Q&&Q.detail?String(Q.detail):"持仓已生成: "+(Q&&Q.data&&Q.data.symbols||0)+" 只"}catch(Q){console.error("[i3a] run-once 失败:",Q),dt.value="生成持仓失败"}finally{Pt.value=!1}}async function Te(){if(!bt.value){dt.value="请先选择/创建微调策略";return}Ct.value||await At(bt.value),Vt.value=!0,dt.value="";try{const Q=await fetch("/api/strategies/"+bt.value+"/ai-trade-code",{method:"POST",headers:qt(),body:JSON.stringify({spec:Ct.value})}).then(function(Se){return Se.json()});if(Q&&Q.detail){dt.value=String(Q.detail);return}Q&&Q.data&&(Dt.value=Q.data.code||"",Q.data.api_errors&&Q.data.api_errors.length?dt.value="生成成功(含 API 校验告警 "+Q.data.api_errors.length+" 条)":dt.value="AI 交易码已生成, 已通过矩阵内校验")}catch(Q){console.error("[i3a] AI 交易码失败:",Q),dt.value="AI 生成失败: "+Q.message}finally{Vt.value=!1}}function Ke(){if(Dt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Dt.value).then(function(){dt.value="代码已复制"});else{const Q=document.createElement("textarea");Q.value=Dt.value,document.body.appendChild(Q),Q.select(),document.execCommand("copy"),document.body.removeChild(Q),dt.value="代码已复制"}}const Ie=s(""),it=s(""),ut=s([]),yt=s(""),Et=s(""),mt=s(""),Xt=s(null),Zt=s(!1),ea=s(!1),Jt=s(!1);function Kt(){const Q=localStorage.getItem("quant_token")||"";return Q?{Authorization:"Bearer "+Q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ta(){const Q=++c.n;try{const Se=await fetch("/api/strategies/custom",{headers:Kt()}).then(function(Ze){return Ze.json()});if(Q!==c.n)return;ut.value=Se&&Se.data&&Se.data.customs||[]}catch(Se){console.error("[i3b] 加载自定义策略失败:",Se)}}async function Wt(){if(!it.value.trim()){mt.value="请描述策略思路";return}Zt.value=!0,mt.value="";try{const Q=await fetch("/api/strategies/custom",{method:"POST",headers:Kt(),body:JSON.stringify({name:Ie.value.trim()||"自定义策略",prompt:it.value})}).then(function(Se){return Se.json()});if(Q&&Q.detail){mt.value=String(Q.detail);return}Q&&Q.data&&(Et.value=Q.data.code||"",mt.value="AI 代写成功: "+Q.data.sid+(Q.data.api_errors&&Q.data.api_errors.length?" (API 告警 "+Q.data.api_errors.length+" 条)":" (校验通过)"),await ta())}catch(Q){console.error("[i3b] AI 代写失败:",Q),mt.value="AI 代写失败: "+Q.message}finally{Zt.value=!1}}async function ca(){if(yt.value)try{const Q=await fetch("/api/strategies/custom/"+yt.value+"/code",{headers:Kt()}).then(function(Se){return Se.json()});Q&&Q.data&&(Et.value=Q.data.code||"",mt.value="")}catch(Q){console.error("[i3b] 读取代码失败:",Q)}}async function da(){if(!yt.value){mt.value="请先选择自定义策略";return}ea.value=!0,mt.value="";try{const Q=await fetch("/api/strategies/custom/"+yt.value+"/backtest",{method:"POST",headers:Kt(),body:"{}"}).then(function(Se){return Se.json()});if(Q&&Q.detail){mt.value=String(Q.detail);return}Q&&Q.data&&(Xt.value=Q.data,mt.value="回测完成")}catch(Q){console.error("[i3b] 回测失败:",Q),mt.value="回测失败: "+Q.message}finally{ea.value=!1}}async function ua(){if(!yt.value){mt.value="请先选择自定义策略";return}Jt.value=!0,mt.value="";try{const Q=await fetch("/api/strategies/custom/"+yt.value+"/ai-optimize",{method:"POST",headers:Kt(),body:JSON.stringify({backtest:Xt.value})}).then(function(Se){return Se.json()});if(Q&&Q.detail){mt.value=String(Q.detail);return}Q&&Q.data&&(Et.value=Q.data.code||"",mt.value="AI 优化完成"+(Q.data.api_errors&&Q.data.api_errors.length?" (API 告警 "+Q.data.api_errors.length+" 条)":" (校验通过)"))}catch(Q){console.error("[i3b] AI 优化失败:",Q),mt.value="AI 优化失败: "+Q.message}finally{Jt.value=!1}}function ot(){if(Et.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Et.value).then(function(){mt.value="代码已复制"});else{const Q=document.createElement("textarea");Q.value=Et.value,document.body.appendChild(Q),Q.select(),document.execCommand("copy"),document.body.removeChild(Q),mt.value="代码已复制"}}const _t=Vue.ref([]),Mt=Vue.ref(!1),Rt=Vue.ref(!1),It=Vue.ref(30);async function va(){const Q=++c.n;Mt.value=!0,Rt.value=!1;try{const Se=window.__quantModules&&window.__quantModules.core||{},Ze=typeof Se.authHeaders=="function"?Se.authHeaders():{},aa=await fetch("/api/backtest/history?days="+It.value,{headers:Ze}).then(function(Va){return Va.json()});if(Q!==c.n)return;_t.value=aa&&aa.data||[]}catch(Se){console.error("[backtest] 回测历史加载失败:",Se),Rt.value=!0}finally{Q===c.n&&(Mt.value=!1)}}return{...o,strategyManageMode:i,openStrategyManage:g,btHistory:_t,btHistoryLoading:Mt,btHistoryError:Rt,btHistoryDays:It,loadBtHistory:va,researchHistory:G,researchHistoryLoading:ce,researchHistoryError:de,researchHistoryType:Me,researchHistorySelected:Ce,researchDetailId:ze,researchCompareRows:je,researchCompareLoading:Fe,researchTypeLabel:ft,goShortterm:et,openResearchHistory:Ge,loadResearchHistory:pt,researchExportLoading:Xe,exportResearchHistory:te,toggleResearchSelect:ne,toggleResearchDetail:Je,runResearchCompare:ht,deleteResearchHistory:xt,marketReviews:Y,marketReviewLoading:oe,marketReviewError:qe,selectedReviewDate:ee,marketReviewDetail:$,marketReviewDetailLoading:we,marketReviewDetailError:F,loadMarketReviews:ve,openMarketReview:me,toggleMarketReviewDate:X,backToMarketReviewList:ue,loadMarketReviewDetail:Ee,marketReviewChgClass:_e,marketReviewChgText:Ne,marketReviewSrcEntries:pe,fmtPct:le,fmtEmotion:he,strategies:r,strategiesLoading:P,strategiesError:w,strategiesErrorText:M,strategiesWarn:k,activeStrategyId:_,activeStrategy:U,paramValues:T,strategyRunning:C,ptradeCode:l,strategyRuns:p,savingProfile:d,variantSaving:y,loadStrategies:B,onStrategyChange:A,runActiveStrategy:ae,exportActivePtradeCode:re,copyPtradeCode:se,profiles:E,profileSelect:I,profileName:q,loadProfiles:a,saveProfile:S,applyProfile:n,deleteProfile:f,govEnabled:D,govSchedule:H,govUniverse:K,govRunning:V,lastHoldings:Z,loadGov:J,updateGov:N,runOnceActive:x,openLastHoldings:v,cloneStrategy:R,govShowCalendar:z,factorKey:Ve,factorIcLoading:We,factorLayerLoading:tt,factorIcReport:be,factorLayerResult:ye,factorOptions:Ae,runFactorIc:Re,runFactorLayer:Ye,factorDetail:Ue,factorDetailLoading:Qe,runFactorDetail:$e,variants:nt,variantSelected:bt,variantSpec:Ct,specFields:jt,aiCode:Dt,aiCodeLoading:Vt,variantBusy:Pt,variantMsg:dt,loadVariants:zt,cloneNewStrategy:Bt,selectVariant:$t,loadVariantSpec:At,saveVariantSpec:Lt,runVariantOnce:W,genVariantAiCode:Te,copyVariantCode:Ke,customName:Ie,customPrompt:it,customs:ut,customSelected:yt,customCode:Et,customMsg:mt,customBtResult:Xt,customGenLoading:Zt,customBtLoading:ea,customOptLoading:Jt,loadCustoms:ta,genCustomCode:Wt,loadCustomCode:ca,runCustomBacktest:da,runCustomOptimize:ua,copyCustomCode:ot,sweepGrid:st,sweepResult:gt,sweepMessage:fe,sweepLoading:xe,sweepStability:Le,runSweep:h}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.tour={create:function(s){const{ref:e,computed:m,currentSubPage:t}=s,o=window.QuantOnboarding,d=e(!1),y=e(o?o.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),c=m(function(){return o&&o.shorttermTourSteps()[y.value.stepIndex]||{key:"",title:"",desc:""}}),i=m(function(){return o?o.shorttermTourProgress(y.value):{done:0,total:3,pct:0}}),g=m(function(){return y.value.stepIndex>=2});function r(){if(o){var T=null;try{T=localStorage.getItem("qc_shortterm_tour")}catch{}if(T){var C=o.parseState(T);C&&(y.value=C)}}}function P(){if(o){var T=JSON.stringify(y.value);try{localStorage.setItem("qc_shortterm_tour",T)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:T}})}).catch(function(){})}catch{}}}function w(){window.__quantGuideModalsEnabled===!0&&o&&t.value==="overview"&&(r(),o.shorttermTourShouldShow(y.value)&&(d.value=!0))}function M(){y.value=o.shorttermTourNext(y.value),P()}function k(){y.value=o.shorttermTourComplete(y.value),P(),d.value=!1}function _(){y.value=o.shorttermTourDismiss(y.value),P(),d.value=!1}return{shorttermTourVisible:d,shorttermTourState:y,shorttermTourStep:c,shorttermTourProg:i,shorttermTourIsLast:g,maybeShowShorttermTour:w,shorttermTourNext:M,shorttermTourFinish:k,shorttermTourSkip:_}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part1=`
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
                        <qc-state-panel v-else-if="pools && !hasAnyPool" type="empty" icon="inbox" title="暂无涨跌停池数据" desc="当前交易日三池为空，可切换交易日或刷新重试"></qc-state-panel>
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
                        <qc-state-panel v-else-if="intradayError" type="error" title="盘中快照加载失败" desc="请检查网络或服务后重试" @retry="loadIntraday"></qc-state-panel>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.view=window.__quantModules.shorttermPage.part1+window.__quantModules.shorttermPage.part2;(function(){const{inject:s,ref:e,onMounted:m,computed:t,nextTick:o}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:window.__quantModules.shorttermPage.view,setup(){const d=s("qcState");if(!d)return{};const y=d.currentPage,c=d.currentSubPage,i=e(""),g=e(null),r=e(!1),P=e(!1),w=e("数据加载失败"),M=e("请检查服务后重试"),k=e(null),_=e(null),T=e(!1),C=e(!1),u=e("数据加载失败"),l=e("请检查服务后重试"),p=e(null),E=e(1),I=50,q=t(function(){const W=_.value||[];if(W.length<=200)return W;const Te=(E.value-1)*I;return W.slice(Te,Te+I)}),D=e(null),z=e(!1),H=e(!1),K=e("数据加载失败"),V=e("请检查服务后重试"),Z=e([]),U=e(!1);async function j(){U.value=!0;try{const W=await Ee("/api/shortterm/dates/summary",!1);W&&W.success&&(Z.value=W.dates||[])}catch{Z.value=[]}finally{U.value=!1}}function B(W){W!==i.value&&(i.value=W,te(!0))}const A=e("行业资金流"),a=e("今日"),S=e(""),n=e(null),f=e(1),J=e(!1),N=e(!1),x=e("数据加载失败"),v=e("请检查服务后重试"),R=e(""),b=e(null),O=e(!1),ae=e(null),re=e(!1),se=e(!1),ie=e(!1),Y=e(""),oe=e(""),qe=e(!1);function ee(){const W=localStorage.getItem("quant_token")||"";return W?{Authorization:"Bearer "+W,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},we=[],F=50,ve=60*1e3;let me=0,X=0,ue=0;function Ee(W,Te){const Ke=Date.now(),Ie=$[W];return!Te&&Ie&&Ke-Ie.ts<ve?Promise.resolve(Ie.data):fetch(W,{headers:ee()}).then(function(it){return it.json()}).then(function(it){if($[W]||we.push(W),$[W]={ts:Date.now(),data:it},we.length>F){const ut=we.shift();delete $[ut]}return it})}async function _e(W){const Te=++me;r.value=!0,P.value=!1;try{const Ke="/api/shortterm/pools"+(i.value?"?date="+i.value:""),Ie=await Ee(Ke,W);if(Te!==me)return;Ie&&Ie.success?(g.value=Ie,o(et)):Ie&&Ie.detail?(P.value=!0,w.value=String(Ie.detail),M.value="请先登录后再查看"):(P.value=!0,w.value="数据加载失败",M.value="请检查服务后重试")}catch{if(Te!==me)return;P.value=!0,w.value="数据加载失败",M.value="请检查服务后重试"}finally{Te===me&&(r.value=!1)}}async function Ne(W){const Te=++me;T.value=!0,C.value=!1;try{const Ke="/api/shortterm/lhb"+(i.value?"?date="+i.value:""),Ie=await Ee(Ke,W);if(Te!==me)return;Ie&&Ie.success?(_.value=Array.isArray(Ie.rows)?Ie.rows:null,p.value=Ie.available===!1&&Ie.reason||null,E.value=1):Ie&&Ie.detail?(C.value=!0,u.value=String(Ie.detail),l.value="请先登录后再查看"):(C.value=!0,u.value="数据加载失败",l.value="请检查服务后重试")}catch{if(Te!==me)return;C.value=!0,u.value="数据加载失败",l.value="请检查服务后重试"}finally{Te===me&&(T.value=!1)}}const pe=t(function(){const W=g.value&&g.value.ladder&&g.value.ladder.tiers;return!W||!Object.keys(W).length?"—":Object.keys(W).sort(function(Te,Ke){return Te-Ke}).map(function(Te){return Te+"板:"+W[Te]}).join(" ")}),le=t(function(){const W=g.value&&g.value.zt||[];return k.value?W.filter(function(Te){return Te.boards===k.value}):W});function he(){k.value=null}const Oe=t(function(){const W=g.value;if(!W)return!1;const Te=W.ladder&&W.ladder.tiers?Object.keys(W.ladder.tiers).length:0;return(W.zt||[]).length+(W.zb||[]).length+(W.dt||[]).length+Te>0}),Ve=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.money_effect;return!W||!W.available?"—":W.source==="settled"?"定稿记录":W.source==="realtime"?W.partial?"实时(样本不全)":"实时":"—"}),We=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.promotion&&D.value.emotion.promotion.tiers&&D.value.emotion.promotion.tiers["1进2"];return W?W.rate:null}),tt=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return W&&W.available&&W.current_score!=null?W.current_score.toFixed(2):"—"}),be=t(function(){const W=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return!W||!W.available?"—":(W.trend||"—")+(W.day_n!=null?" · 距低谷"+W.day_n+"天":"")});t(function(){const W=D.value&&D.value.emotion;if(!W)return"";const Te=[];for(const Ke of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ie=W[Ke];Ie&&Ie.available===!1&&Ie.reason&&Te.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Te.join("；")}),t(function(){const W=D.value&&D.value.facts;if(!W)return"";const Te=[];for(const Ke of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ie=W[Ke];Ie&&Ie.available===!1&&Ie.reason&&Te.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Te.join("；")});function ye(W){return W==null||isNaN(W)?"—":(W*100).toFixed(0)+"%"}function Ae(W,Te){return W==null?"—":(typeof W=="number"?Math.round(W*100)/100:W)+(Te||"")}function Re(W){return"tag-chip mr-4"}function Ye(W){return W==null?"":W>0?"is-rise":W<0?"is-fall":""}function Ue(W){return W==="机构"?"is-institution":W==="游资"?"is-hotmoney":W==="主力"?"is-main":""}const Qe=t(function(){const W=D.value&&D.value.session_status;if(!W)return"—";const Te=D.value.date;return Te===W.latest_session&&W.settled?"已收盘":Te===W.today&&W.is_trade_day&&!W.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),$e=t(function(){const W=D.value&&D.value.session_status;if(!W)return"";const Te=D.value.date;return Te===W.latest_session&&W.settled?"is-institution":Te===W.today&&W.is_trade_day&&!W.settled?"is-main":""});function st(W){W&&W.ts_code&&d&&d.showStockDetail&&d.showStockDetail(W.ts_code)}const gt=t(function(){return(_.value||[]).filter(function(W){return(W.tags||[]).indexOf("机构")>=0}).reduce(function(W,Te){return W+(Te.net_buy||0)},0)}),fe=t(function(){return(_.value||[]).filter(function(W){return(W.tags||[]).indexOf("游资")>=0}).length}),xe=t(function(){const W=(n.value||[]).filter(function(Te){return Te.main_net_inflow!=null});return W.length?W.reduce(function(Te,Ke){return Te.main_net_inflow>=Ke.main_net_inflow?Te:Ke}):null}),Le=t(function(){const W=xe.value;return W?W.name:"—"}),h=t(function(){const W=xe.value;return W?W.main_net_inflow:null}),L=t(function(){return R.value||"东财"}),G=t(function(){const W=(S.value||"").trim(),Te=n.value||[];return W?Te.filter(function(Ke){return Ke.name&&String(Ke.name).indexOf(W)>=0}):Te});function ce(W){S.value=W||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const de=t(function(){const W=G.value;if(W.length<=200)return W;const Te=(f.value-1)*I;return W.slice(Te,Te+I)}),Me=["09:25","09:35","10:00","11:30","14:00","15:00"],Ce=t(function(){const W={};return(ae.value||[]).forEach(function(Te){W[Te.slot]=!0}),W});function ze(W){return Ce.value[W]?"is-done":W===je.value?"is-current":"is-empty"}const je=t(function(){const W=new Date,Te=(W.getHours()<10?"0":"")+W.getHours(),Ke=(W.getMinutes()<10?"0":"")+W.getMinutes(),Ie=Te+":"+Ke;for(var it=0;it<Me.length;it++)if(Ie===Me[it])return Me[it];for(var ut=0;ut<Me.length-1;ut++){var yt=Me[ut],Et=new Date;Et.setHours(Number(yt.split(":")[0]),Number(yt.split(":")[1]),0,0);var mt=new Date(Et.getTime()+8*6e4);if(W>=Et&&W<=mt)return yt}return""}),Fe=t(function(){const W=new Date,Te=je.value;if(Te)return"当前处于快照窗口 "+Te+" (前后 8 分钟) — 可采集";const Ke=W.getHours(),Ie=W.getMinutes();let it="";for(let ut=0;ut<Me.length;ut++){const yt=Me[ut].split(":");if(Number(yt[0])>Ke||Number(yt[0])===Ke&&Number(yt[1])>Ie){it=Me[ut];break}}return it?"下一快照时点 "+it+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Xe=e(""),ft=e("info");function et(){const W=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!W||!Object.keys(W).length)return;const Te=window.__quantModules&&window.__quantModules.charts;if(!Te||!Te.renderSimpleChartTo)return;const Ke=k.value,Ie=Te.renderSimpleChartTo("shorttermLadderChart",function(){const it=Object.keys(W).sort(function(ut,yt){return Number(ut)-Number(yt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:it.map(function(ut){return ut+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(ut){return Ke&&Number(it[ut.dataIndex])===Ke?"var(--color-accent)":"var(--chart-split)"}},data:it.map(function(ut){return W[ut]})}]}},{key:"shortterm-ladder"});Ie&&Ie.off&&(Ie.off("click"),Ie.on("click",function(it){if(!it||!it.name)return;const ut=parseInt(it.name,10);isNaN(ut)||(k.value=k.value===ut?null:ut)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(et);function Ge(W){if(W==null)return"—";const Te=Math.abs(W);return Te>=1e8?(W/1e8).toFixed(2)+"亿":Te>=1e4?(W/1e4).toFixed(0)+"万":W.toFixed(0)}function pt(W){return W==null?"—":(W>=0?"+":"")+W.toFixed(2)+"%"}async function te(W){const Te=++X;z.value=!0,H.value=!1;try{const Ke="/api/shortterm/overview"+(i.value?"?date="+i.value:""),Ie=await Ee(Ke,W);if(Te!==X)return;Ie&&Ie.success?D.value=Ie:Ie&&Ie.detail?(H.value=!0,K.value=String(Ie.detail),V.value="请先登录后再查看"):(H.value=!0,K.value="数据加载失败",V.value="请检查服务后重试")}catch{if(Te!==X)return;H.value=!0,K.value="数据加载失败",V.value="请检查服务后重试"}finally{Te===X&&(z.value=!1)}}async function ne(W){const Te=++me;J.value=!0,N.value=!1;try{const Ke="/api/shortterm/sector-flow?indicator="+encodeURIComponent(a.value)+"&sector_type="+encodeURIComponent(A.value),Ie=await Ee(Ke,W);if(Te!==me)return;Ie&&Ie.success&&Ie.available?(n.value=Ie.rows||[],R.value=Ie.source||(Ie.note?"同花顺":"东财"),f.value=1):Ie&&Ie.reason?(N.value=!0,x.value="数据加载失败",v.value=String(Ie.reason).replace(/^\[[^\]]*\]\s*/,"")):Ie&&Ie.detail?(N.value=!0,x.value=String(Ie.detail),v.value="请先登录后再查看"):(N.value=!0,x.value="数据加载失败",v.value="请检查服务后重试")}catch{if(Te!==me)return;N.value=!0,x.value="数据加载失败",v.value="请检查服务后重试"}finally{Te===me&&(J.value=!1)}}async function Je(W){const Te=++ue;try{const Ke="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ie=await Ee(Ke,W);if(Te!==ue)return;Ie&&Ie.success&&(b.value=Ie.review||null)}catch{}}async function ht(){O.value=!0;try{const W="/api/shortterm/review"+(i.value?"?date="+i.value:""),Te=await fetch(W,{method:"POST",headers:ee()}).then(function(Ke){return Ke.json()});Te&&Te.success&&(b.value=Te,$[W]={ts:Date.now(),data:Te})}catch{}finally{O.value=!1}}async function xt(){const W=Y.value.trim();if(W){qe.value=!0,oe.value="";try{const Ke=await fetch("/api/shortterm/review/chat",{method:"POST",headers:ee(),body:JSON.stringify({date:overviewDate.value,question:W})}).then(function(Ie){return Ie.json()});oe.value=Ke.answer||"[无回复]"}catch{oe.value="[发送失败]"}finally{qe.value=!1}}}async function nt(W){const Te=++me;re.value=!0,se.value=!1;try{const Ke="/api/shortterm/intraday"+(i.value?"?date="+i.value:""),Ie=await Ee(Ke,W);if(Te!==me)return;Ie&&Ie.success?ae.value=Ie.snapshots||[]:se.value=!0}catch{Te===me&&(se.value=!0)}finally{Te===me&&(re.value=!1)}}async function bt(){ie.value=!0;try{const W="/api/shortterm/intraday/snapshot"+(i.value?"?date="+i.value:""),Te=await fetch(W,{method:"POST",headers:ee()}).then(function(Ke){return Ke.json()});Te&&Te.success?(Te.accepted?(Xe.value="已采集 "+Te.slot+" 快照"+(Te.pools_available&&!Te.pools_available.zt?" (池源部分不可用)":""),ft.value="ok"):(Xe.value="⏱ "+(Te.reason||"非快照时点"),ft.value="warn"),nt()):Xe.value="采集失败, 请稍后重试"}catch{Xe.value="采集失败, 请稍后重试"}finally{ie.value=!1}}function Ct(){return Ee("/api/shortterm/latest-session",!1).then(function(W){W&&W.date&&(i.value||(i.value=W.date))}).catch(function(){})}function jt(){const W=c.value;W==="ztpool"?_e():W==="lhb"?Ne():W==="overview"?(te(),Je()):W==="sector"?ne():W==="intraday"&&nt()}function Dt(){const W=i.value?"?date="+i.value:"";["/api/shortterm/overview"+W,"/api/shortterm/pools"+W,"/api/shortterm/lhb"+W].forEach(function(Ke){Ee(Ke,!1).catch(function(){})})}function Vt(){const W=c.value;W==="ztpool"?_e(!0):W==="lhb"?Ne(!0):W==="overview"?(te(!0),Je(!0)):W==="sector"?ne(!0):W==="intraday"&&nt(!0)}const Pt=window.__quantModules.shorttermPage.tour.create({ref:e,computed:t,currentSubPage:c}),{shorttermTourVisible:dt,shorttermTourState:Ft,shorttermTourStep:Ht,shorttermTourProg:qt,shorttermTourIsLast:zt}=Pt,{maybeShowShorttermTour:Bt,shorttermTourNext:$t,shorttermTourFinish:At,shorttermTourSkip:Lt}=Pt;return m(function(){Ct(),jt(),Dt(),Bt(),j()}),Vue.watch(function(){return c.value},function(W){jt(),W==="overview"&&Bt()}),{currentPage:y,currentSubPage:c,shortDate:i,pools:g,poolLoading:r,poolError:P,ztBoardFilter:k,filteredZt:le,clearBoardFilter:he,hasAnyPool:Oe,lhbRows:_,lhbLoading:T,lhbError:C,lhbReason:p,lhbPageRows:q,lhbPage:E,overview:D,overviewLoading:z,overviewError:H,dateList:Z,dateListLoading:U,loadDateList:j,pickDate:B,sectorType:A,sectorIndicator:a,sectorKeyword:S,sectorRows:n,filteredSectorRows:G,sectorPageRows:de,sectorPage:f,sectorLoading:J,sectorError:N,sectorFlowSource:R,PAGE_SIZE:I,gotoSector:ce,review:b,reviewRunning:O,intradaySnapshots:ae,intradayLoading:re,intradayError:se,intradayCollecting:ie,intradaySlots:Me,intradayMsg:Xe,slotClass:ze,intradayStatus:Fe,chatQuestion:Y,chatAnswer:oe,chatLoading:qe,loadPools:_e,loadLhb:Ne,loadOverview:te,loadSectorFlow:ne,loadReview:Je,runReview:ht,sendChat:xt,loadIntraday:nt,collectSnapshot:bt,refreshCurrent:Vt,ladderText:pe,fmtAmount:Ge,fmtPct:pt,riseFall:Ye,tagClass:Ue,openStock:st,lhbInstitutionNetBuy:gt,lhbHotMoneyCount:fe,sectorTopName:Le,sectorTopInflow:h,sectorSource:L,moneySource:Ve,promotion1to2:We,cycleScore:tt,cycleTrend:be,pct:ye,fmtCond:Ae,verdictClass:Re,sessionStatusText:Qe,sessionStatusClass:$e,shorttermTourVisible:dt,shorttermTourState:Ft,shorttermTourStep:Ht,shorttermTourProg:qt,shorttermTourIsLast:zt,shorttermTourNext:$t,shorttermTourFinish:At,shorttermTourSkip:Lt}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var s=8;function e(c,i,g,r,P){var w=g>0?g:1,M=typeof P=="number"&&P>=0?P:s,k=Math.max(0,r),_=Math.max(0,c),T=Math.max(0,i),C=Math.max(0,Math.floor(_/w)-M),u=Math.min(k,Math.ceil((_+T)/w)+M);return{startIndex:C,endIndex:u}}function m(c,i){return Math.max(0,c||0)*(i>0?i:0)}function t(c,i,g,r,P){var w=c||[],M=e(i,g,r,w.length,P),k=w.slice(M.startIndex,M.endIndex);return{visible:k,startIndex:M.startIndex,endIndex:M.endIndex,offsetY:M.startIndex*(r>0?r:1),totalHeight:m(w.length,r)}}function o(c,i){if(c){if(c.code!=null)return c.code;if(c.id!=null)return c.id;if(c.ts_code!=null)return c.ts_code}return i}function d(c,i,g){var r=c||[];if(!r.length)return i>0?i:1;for(var P=Math.min(g||50,r.length),w=0,M=0,k=0;k<P;k++){var _=r[k]&&r[k].rowHeight;typeof _=="number"&&_>0&&(w+=_,M++)}return M?w/M:i>0?i:1}function y(c,i,g,r,P){var w=e(c,i,g,r,P),M=Math.max(0,r);return M?(w.endIndex-w.startIndex)/M:0}return{DEFAULT_BUFFER:s,computeVisibleRange:e,computeTotalHeight:m,sliceVisible:t,getRowKey:o,estimateDynamicRowHeight:d,renderedRatio:y}});(function(){const{ref:s,computed:e,onMounted:m,onBeforeUnmount:t}=Vue,o=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:o.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const y=s(null),c=s(0),i=s(400),g=e(()=>(o.computeVisibleRange||function(l,p,E,I,q){const D=E>0?E:1,z=q>=0?q:8,H=Math.max(0,I);return{startIndex:Math.max(0,Math.floor(l/D)-z),endIndex:Math.min(H,Math.ceil((l+p)/D)+z)}})(c.value,i.value,d.rowHeight,d.items.length,d.buffer)),r=e(()=>d.items.length*d.rowHeight),P=e(()=>g.value.startIndex),w=e(()=>g.value.endIndex),M=e(()=>d.items.slice(P.value,w.value));function k(){y.value&&(c.value=y.value.scrollTop)}function _(){y.value&&(i.value=y.value.clientHeight||400)}function T(u,l){return o.getRowKey?o.getRowKey(u,l):u&&u.code!=null?u.code:u&&u.id!=null?u.id:l}let C=null;return m(()=>{_(),y.value&&typeof ResizeObserver<"u"&&(C=new ResizeObserver(()=>_()),C.observe(y.value))}),t(()=>{C&&C.disconnect()}),{scrollEl:y,totalHeight:r,startIndex:P,endIndex:w,visibleItems:M,onScroll:k,keyOf:T}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():(s.__quantModules=s.__quantModules||{},s.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var s=40,e=1.2,m=60,t=500,o=10,d=88,y=350;function c(l,p,E,I,q){q=q||{};var D=typeof q.threshold=="number"?q.threshold:s,z=typeof q.bias=="number"?q.bias:e,H=E-l,K=I-p;return Math.abs(H)<D||Math.abs(H)<Math.abs(K)*z?"none":H<0?"left":"right"}function i(l,p,E){E=E||{};var I=typeof E.threshold=="number"?E.threshold:m;return p-l>=I}function g(l,p){p=p||{};var E=typeof p.threshold=="number"?p.threshold:t;return l>=E}var r=!1;function P(l,p){return l&&typeof l.closest=="function"?l.closest(p):null}function w(l){if(!l)return"";var p=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(p){var E=p.getAttribute&&p.getAttribute("data-copy-code");if(E)return E.trim();var I=(p.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(I)return I[0]}var q=l.getAttribute&&l.getAttribute("data-copy-code");return q?q.trim():""}function M(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return k(l)}):Promise.resolve(k(l))}function k(l){try{var p=document.createElement("textarea");return p.value=l,p.style.position="fixed",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p),!0}catch{return!1}}function _(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function T(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function C(){var l=null,p=null,E=null;function I(){p&&(p.timer&&clearTimeout(p.timer),p=null)}function q(U){E={el:U,until:Date.now()+y}}function D(U){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(j){j!==U&&j.classList.remove("swipe-open")}),l&&l.el!==U&&(l=null)}function z(U){var j=U.touches&&U.touches[0];if(j){var B=P(U.target,".swipe-reveal");B&&(l={el:B,x:j.clientX,y:j.clientY,moved:!1},U.stopPropagation());var A=P(U.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");A&&(I(),p={el:A,x:j.clientX,y:j.clientY,timer:setTimeout(function(){var a=w(A);p=null,a&&(q(A),M(a).then(function(){T(),_("已复制代码 "+a)}))},t)})}}function H(U){if(l){var j=U.touches&&U.touches[0];if(j){var B=j.clientX-l.x,A=j.clientY-l.y;if(Math.abs(B)>8&&Math.abs(B)>Math.abs(A)*1.2){U.cancelable&&U.preventDefault(),l.moved=!0;var a=l.el.querySelector(".swipe-reveal-main")||l.el,S=Math.max(-d,Math.min(0,B));a.style.transition="none",a.style.transform="translateX("+S+"px)",U.stopPropagation()}if(p){var n=j.clientX-p.x,f=j.clientY-p.y;(Math.abs(n)>o||Math.abs(f)>o)&&I()}}}}function K(U){if(I(),!!l){var j=l.el,B=U.changedTouches&&U.changedTouches[0],A=l.x,a=l.y,S="none";B&&(S=c(A,a,B.clientX,B.clientY));var n=l.moved;l=null;var f=j.querySelector(".swipe-reveal-main")||j;f.style.transform="",f.style.transition="",S==="left"?(D(j),j.classList.add("swipe-open"),q(j)):(S==="right"||n)&&j.classList.remove("swipe-open"),U.stopPropagation()}}function V(){I(),l=null}function Z(U){if(E&&Date.now()<E.until){var j=E.el.contains(U.target)||U.target===E.el,B=U.target.closest&&U.target.closest(".swipe-reveal-actions");j&&!B&&(U.preventDefault(),U.stopPropagation(),E=null)}}document.addEventListener("touchstart",z,!0),document.addEventListener("touchmove",H,!0),document.addEventListener("touchend",K,!0),document.addEventListener("touchcancel",V,!0),document.addEventListener("click",Z,!0)}function u(){r||typeof document>"u"||(r=!0,C())}return{judgeSwipe:c,judgePullToRefresh:i,judgeLongPress:g,SWIPE_THRESHOLD:s,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:m,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:o,REVEAL_WIDTH:d,initGestures:u,_codeFromRow:w}});(function(){const s={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(s);function m(d){return s[d]||s.empty}function t(){const d=[];for(const y of e){const c=s[y];c.title||d.push(y+".title"),y!=="loading"&&!c.icon&&d.push(y+".icon"),typeof c.retry!="boolean"&&d.push(y+".retry"),typeof c.skeleton!="boolean"&&d.push(y+".skeleton")}return{ok:d.length===0,errors:d}}const o={VARIANTS:s,KEYS:e,resolve:m,validate:t};typeof window<"u"&&(window.QuantStatePanel=o),typeof De<"u"&&De.exports&&(De.exports=o)})();(function(){const{computed:s}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(m){const t=s(()=>typeof e.resolve=="function"?e.resolve(m.type):{}),o=s(()=>m.icon||t.value.icon||""),d=s(()=>m.title||t.value.title||""),y=s(()=>m.desc||t.value.desc||""),c=s(()=>!!t.value.retry),i=s(()=>/^[a-z][a-z0-9-]*$/.test(String(o.value||"")));return{icon:o,title:d,desc:y,retryable:c,isIconName:i}}}})();(function(s,e){typeof De=="object"&&De.exports?De.exports=e():s.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function s(l){return String(l||"").trim().toLowerCase()}function e(l,p){if(!l)return!0;const E=l.split(/\s+/).filter(Boolean);if(!E.length)return!0;const I=String(p||"").toLowerCase();return E.every(function(q){return I.indexOf(q)!==-1})}function m(){return{visible:!1,query:"",activeIndex:0}}function t(l,p){return p===void 0&&(p=!l.visible),l.visible=p,p&&(l.query="",l.activeIndex=0),l.visible}function o(l,p,E){const I=s(l);if(!p||!p.length)return[];const q=[];return p.forEach(function(D){const z=e(I,D.name)||e(I,D.key),H=(D.subPages||[]).filter(function(K){const V=E&&E[K]||K;return e(I,V)||e(I,K)});z&&q.push({type:"menu",menuKey:D.key,subPage:D.subPages&&D.subPages[0]||"",label:D.name,subLabel:"页面",icon:D.icon||"file-text"}),H.forEach(function(K){q.push({type:"menu",menuKey:D.key,subPage:K,label:E&&E[K]||K,subLabel:D.name,icon:D.icon||"file-text"})})}),q.slice(0,8)}function d(l,p){const E=s(l);return!p||!p.length?[]:p.filter(function(I){return!!(!E||e(E,I.label)||e(E,I.key)||I.keywords&&e(E,I.keywords))}).slice(0,8)}function y(l,p){const E=s(l);return!E||!p||!p.length?[]:p.filter(function(I){return e(E,I.code)||e(E,I.name)}).slice(0,8).map(function(I){return{type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up"}})}function c(l,p,E){const I=[],q=[];return E&&E.length&&(I.push({key:"stock",label:"股票",items:E}),q.push.apply(q,E)),l&&l.length&&(I.push({key:"menu",label:"菜单",items:l}),q.push.apply(q,l)),p&&p.length&&(I.push({key:"command",label:"指令",items:p}),q.push.apply(q,p)),{groups:I,flat:q}}function i(l,p,E){if(p<=0)return 0;const I=((l||0)+E)%p;return I<0?p-1:I}function g(l,p,E,I){const q=o(l,p,E).map(function(z){return{type:"menu",menuKey:z.menuKey,subPage:z.subPage,label:z.label,subLabel:z.subLabel,icon:z.icon,iconName:z.icon,value:z.icon+" "+z.label+" · "+z.subLabel}}),D=d(l,I||[]).map(function(z){return{type:"command",key:z.key,label:z.label,icon:z.icon,iconName:z.icon,subLabel:"指令",value:z.icon+" "+z.label}});return q.concat(D)}function r(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const P=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var w={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function M(l){if(!l||typeof l!="string")return null;var p=l.split("+").map(function(q){return q.trim()}).filter(Boolean);if(!p.length)return null;var E=p.pop().toLowerCase();if(!E)return null;var I={ctrl:!1,alt:!1,shift:!1,meta:!1};return p.forEach(function(q){var D=q.toLowerCase();w.ctrl.indexOf(D)!==-1?I.ctrl=!0:w.alt.indexOf(D)!==-1?I.alt=!0:w.shift.indexOf(D)!==-1?I.shift=!0:w.meta.indexOf(D)!==-1&&(I.meta=!0)}),{ctrl:I.ctrl,alt:I.alt,shift:I.shift,meta:I.meta,key:E}}function k(l,p){if(!l||!p)return!1;var E=String(p.key||p.code||"").toLowerCase();return l.key!==E?!1:l.ctrl===!!p.ctrlKey&&l.alt===!!p.altKey&&l.shift===!!p.shiftKey&&l.meta===!!p.metaKey}function _(l){if(!l)return"";var p=[];return l.ctrl&&p.push("Ctrl"),l.alt&&p.push("Alt"),l.shift&&p.push("Shift"),l.meta&&p.push("Meta"),p.push(l.key.toUpperCase()),p.join("+")}function T(){var l={};return{register:function(p){if(!p||!p.key)throw new Error("命令 key 必填");if(l[p.key])throw new Error("命令重复注册: "+p.key);return l[p.key]=Object.assign({},p),p.key},list:function(){return Object.keys(l).map(function(p){return l[p]})},get:function(p){return l[p]||null},remove:function(p){delete l[p]},has:function(p){return!!l[p]},count:function(){return Object.keys(l).length}}}function C(){var l={},p={};return{register:function(E,I,q){var D=M(E);if(!D)throw new Error("无效快捷键: "+E);var z=_(D);if(l[z])throw new Error("快捷键冲突: "+E);if(I!=null&&p[I]!==void 0)throw new Error("动作重复绑定: "+I);return l[z]={combo:E,action:I,description:q||"",parsed:D},p[I]=z,z},resolve:function(E){for(var I in l)if(k(l[I].parsed,E))return l[I].action;return null},list:function(){return Object.keys(l).map(function(E){return l[E]})},unregister:function(E){var I=_(M(E));l[I]&&(delete p[l[I].action],delete l[I])},count:function(){return Object.keys(l).length}}}function u(){var l=C();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:s,createPaletteState:m,toggleVisible:t,searchMenus:o,searchCommands:d,filterStocksLocal:y,mergeResults:c,moveIndex:i,buildSearchSuggestions:g,dispatchSearchSelection:r,DEFAULT_COMMANDS:P,parseKeyCombo:M,matchShortcut:k,canonicalCombo:_,createCommandRegistry:T,createShortcutRegistry:C,createDefaultShortcuts:u}});(function(s){if(s&&!s.QuantCommandPanel)try{var e=typeof De<"u"&&De.exports?De.exports:null;e&&(s.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(s,e){var m=e();typeof De=="object"&&De.exports&&(De.exports=m),s.QuantOnboarding=m})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var s=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=s.length,m=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=m.length;function o(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return m.slice()}function y(K){return K<0?0:K>=t?t-1:K}function c(K){return{stepIndex:K.stepIndex,completed:!!K.completed,dismissed:!!K.dismissed,updatedAt:K.updatedAt||0}}function i(K){return c(Object.assign({},K,{stepIndex:y((K.stepIndex||0)+1),updatedAt:Date.now()}))}function g(K){return c(Object.assign({},K,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function r(K){return c(Object.assign({},K,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function P(K){var V=Math.min(K&&K.stepIndex||0,t);return{done:V,total:t,pct:Math.round(V/t*100)}}function w(K){return!!(K&&!K.completed&&!K.dismissed)}function M(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function k(){return s.slice()}function _(){return e}function T(K){return K<0?0:K>=e?e-1:K}function C(K){return{stepIndex:K.stepIndex,completed:!!K.completed,dismissed:!!K.dismissed,updatedAt:K.updatedAt||0}}function u(K){return C(Object.assign({},K,{stepIndex:T((K.stepIndex||0)+1),updatedAt:Date.now()}))}function l(K){return C(Object.assign({},K,{stepIndex:T((K.stepIndex||0)-1),updatedAt:Date.now()}))}function p(K,V){return C(Object.assign({},K,{stepIndex:T(V),updatedAt:Date.now()}))}function E(K){return C(Object.assign({},K,{completed:!0,updatedAt:Date.now()}))}function I(K){return C(Object.assign({},K,{dismissed:!0,updatedAt:Date.now()}))}function q(K){return!!(K&&K.completed)}function D(K){var V=Math.min(K&&K.stepIndex||0,e);return{done:V,total:e,pct:Math.round(V/e*100)}}function z(K){var V=K||M();return JSON.stringify({stepIndex:V.stepIndex,completed:!!V.completed,dismissed:!!V.dismissed,updatedAt:V.updatedAt||0})}function H(K){var V=M();if(!K||typeof K!="string")return V;try{var Z=JSON.parse(K);if(!Z||typeof Z!="object")return V;var U=parseInt(Z.stepIndex,10);return isNaN(U)?V:{stepIndex:T(U),completed:!!Z.completed,dismissed:!!Z.dismissed,updatedAt:Z.updatedAt||0}}catch{return V}}return{ONBOARDING_STEPS:s,steps:k,stepCount:_,createOnboardingState:M,next:u,prev:l,jumpTo:p,complete:E,dismiss:I,isComplete:q,progress:D,persistState:z,parseState:H,SHORTTERM_TOUR_STEPS:m,shorttermTourSteps:d,createShorttermTourState:o,shorttermTourNext:i,shorttermTourComplete:g,shorttermTourDismiss:r,shorttermTourProgress:P,shorttermTourShouldShow:w}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,computed:e,onMounted:m}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const o=s(!1),d=s(t.createOnboardingState()),y=e(function(){return t.steps()[d.value.stepIndex]}),c=e(function(){return t.progress(d.value)}),i=e(function(){return d.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+y.value.key});function r(){const u=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:u}})}).then(function(l){return l.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",u)}catch{}})}function P(u){u&&window.__quantGoPage?window.__quantGoPage(u,""):u&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=u,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function w(){d.value=t.next(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function M(){d.value=t.prev(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&P(u.target)}function k(){d.value=t.complete(d.value),r(),o.value=!1}function _(){d.value=t.dismiss(d.value),r(),o.value=!1}function T(){d.value=t.createOnboardingState(),r(),o.value=!0}function C(){fetch("/api/user_config/preferences").then(function(u){return u.json()}).then(function(u){const l=u&&u.preferences&&u.preferences.onboarding_progress;return l&&(d.value=t.parseState(l)),l}).catch(function(){return null}).then(function(u){if(!u)try{const l=localStorage.getItem("qc_onboarding_progress");l&&(d.value=t.parseState(l))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(o.value=!0)}),window.addEventListener("qc:onboarding-replay",T)}return m(C),{visible:o,st:d,step:y,prog:c,isLast:i,stepKey:g,next:w,prev:M,finish:k,skip:_,replay:T}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function s(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:s}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function s(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:s}}})})();(function(){const{ref:s,computed:e,watch:m,nextTick:t,inject:o,onMounted:d}=Vue,y=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const c=o("qcState");if(!c)return{};const i=s(""),g=e({get:()=>c.commandPaletteVisible.value,set:A=>{c.commandPaletteVisible.value=A}}),r=s(0),P=s([]),w=s(null),M=e(()=>{const A=(y.DEFAULT_COMMANDS||[]).map(function(S){return Object.assign({},S)});return Object.keys(c.themes.value||{}).forEach(function(S){const n=c.themes.value[S];A.push({key:"theme:"+S,label:"切换主题 · "+(n.name||S),icon:"palette",keywords:"theme 主题"})}),A});function k(A){return typeof A=="string"&&/^[a-z][a-z0-9-]*$/.test(A)}const _=e(()=>c.menus.value||[]);function T(){const A=window.__quantModules&&window.__quantModules.pinyin;if(!A)return[];const a=[];return(c.watchlist&&c.watchlist.value||[]).forEach(function(S){a.push({code:S.code,name:S.name})}),(c.aiHistory&&c.aiHistory.value||[]).forEach(function(S){S&&S.stock_code&&a.push({code:S.stock_code,name:S.stock_name||S.stock_code})}),a.push.apply(a,A.getExtraStocks()),A.buildStockIndex(a)}function C(A){const a=window.__quantModules&&window.__quantModules.pinyin;return a?a.searchStocksByQuery(A,T()).map(function(S){return{type:"stock",code:S.code,name:S.name,label:S.name,subLabel:S.code,icon:"trending-up"}}):[]}function u(){const A=[],a=window.__quantModules&&window.__quantModules.recent;a&&a.getRecentViewed().slice(0,5).forEach(function(n){A.push({type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"最近查看 · "+n.code,icon:"trending-up"})});const S=(c.watchlist&&c.watchlist.value||[]).slice(0,8).map(function(n){return{type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"我的自选 · "+n.code,icon:"trending-up"}});return A.concat(S)}const l=e(()=>{const A=i.value;if(!A)return y.mergeResults([],[],u());const a=y.searchMenus(A,_.value,c.subPageNames),S=y.searchCommands(A,M.value),n=P.value;return y.mergeResults(a,S,n)}),p=e(()=>l.value);function E(A){return p.value.flat[r.value]===A}function I(A){r.value=p.value.flat.indexOf(A)}function q(A){return(A.type||"")+":"+(A.code||A.menuKey||A.key||A.label)}let D=null;function z(){const A=i.value.trim();if(A.length<1){P.value=[];return}D&&clearTimeout(D),D=setTimeout(function(){const a=C(A);P.value=a,r.value=0,c.searchStocks(A,function(S){if(i.value.trim()!==A)return;const n=(S||[]).filter(function(N){return N&&N.code&&N.name}).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}),f={},J=[];a.forEach(function(N){f[N.code]||(f[N.code]=!0,J.push(N))}),n.forEach(function(N){f[N.code]||(f[N.code]=!0,J.push(N))}),P.value=J,r.value=0})},200)}function H(){r.value=y.moveIndex(r.value,p.value.flat.length,1)}function K(){r.value=y.moveIndex(r.value,p.value.flat.length,-1)}function V(){const A=p.value.flat[r.value];A&&Z(A)}function Z(A){c.commandPaletteVisible.value=!1,A.type==="menu"?c.navigateTo(A.menuKey,A.subPage):A.type==="stock"?c.showStockDetail(A.code,A.name):A.type==="command"&&U(A.key)}function U(A){if(A==="refresh"){const a=c.currentPage.value;a==="strategies"?c.loadDashboardData().catch(function(){}):a==="calendar"?c.refreshCalendarData().catch(function(){}):a==="ai"&&c.loadAiHistory().catch(function(){})}else A==="export"?c.exportCSV():A==="batch"?c.showBatchEvaluate.value=!0:A==="ai"?c.openAiFab():A==="sidebar"?c.toggleSidebar():A==="today"?c.navigateTo("strategies","overview"):A==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):A==="add-portfolio"?(c.currentPage.value="ai",c.currentSubPage.value="portfolio"):A==="open-system"?c.navigateTo("system","status"):A==="open-shortterm"?c.navigateTo("shortterm","overview"):A==="open-research"?c.navigateTo("research","overview"):A==="open-calendar"?c.navigateTo("calendar",""):A==="refresh-data-source"?c.navigateTo("system","datasource"):A==="open-watchlist"?c.navigateTo("ai","watchlist"):A==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):A==="open-focus"?c.navigateTo("ai","focus"):A==="open-portfolio"?c.navigateTo("ai","portfolio"):A==="open-backtest"?c.navigateTo("research","backtest"):A==="open-market-review"?c.navigateTo("shortterm","market-review"):A==="open-shortterm-sectors"?c.navigateTo("shortterm","sector"):A==="open-shortterm-intraday"?c.navigateTo("shortterm","intraday"):A==="open-status"?c.navigateTo("ops","status"):A==="open-health"?c.navigateTo("ops","health"):A==="open-schedule"?c.navigateTo("ops","schedule"):A==="open-guard"?c.navigateTo("ops","guard"):A==="open-usage"?c.navigateTo("ops","usage"):A==="open-datadict"?c.navigateTo("ops","datadict"):A==="open-notification"?c.navigateTo("system","notification"):A==="open-users"?c.navigateTo("system","user"):A==="open-autoeval"?c.navigateTo("system","autoeval"):A==="open-feature"?c.navigateTo("system","feature"):A==="open-config"?c.navigateTo("system","config"):A==="theme-dark"?c.changeTheme("dark-pro"):A==="theme-light"?c.changeTheme("gold"):A.indexOf("theme:")===0&&c.changeTheme(A.slice(6))}m(g,function(A){A&&(i.value="",P.value=[],r.value=0,t(function(){w.value&&w.value.focus&&w.value.focus()}))}),m(i,z);function j(A){A==="toggle-palette"?c.commandPaletteVisible.value=!c.commandPaletteVisible.value:A==="toggle-sidebar"?c.toggleSidebar():A==="open-ai"?c.openAiFab():A==="refresh"?U("refresh"):A==="open-today"?U("today"):A==="batch-eval"?U("batch"):A==="add-portfolio"&&U("add-portfolio")}function B(A){if(!y.createDefaultShortcuts||!y.createShortcutRegistry)return;const S=y.createDefaultShortcuts().resolve({key:A.key,ctrlKey:A.ctrlKey,altKey:A.altKey,shiftKey:A.shiftKey,metaKey:A.metaKey});S&&(A.preventDefault(),j(S))}return d(function(){document.addEventListener("keydown",B)}),{visible:g,query:i,results:p,inputEl:w,sanitizeHtml:c.sanitizeHtml,isIconName:k,onDown:H,onUp:K,onEnter:V,execute:Z,isActive:E,setActive:I,itemKey:q,onGlobalKeydown:B}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=s("qcState");if(!e)return{};const m=window.QuantFormMemory;function t(){const c=e.currentUser;return c&&c.value&&c.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,c=>{if(c&&m){const i=m.loadForm("batch-evaluate",t(),1);i&&i.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=i.batchStocks)}});function o(){return m&&m.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let y=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,c=>{c?(d.value=0,y=setInterval(()=>{d.value++},1e3)):y&&(clearInterval(y),y=null)}),{...e,batchElapsed:d,onBatchEvaluate:o}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:s,computed:e,onMounted:m}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const o=s(!1),d=s(!1),y=s(!1),c=s([]),i=s({}),g=s(""),r=s(""),P=s("");function w(q,D){D=D||{},D.headers=Object.assign({},D.headers||{});const z=localStorage.getItem("quant_token")||"";return z&&(D.headers.Authorization="Bearer "+z),fetch(q,D)}async function M(){d.value=!0;try{const D=await(await w("/api/watchlist/groups")).json();D&&D.success&&(c.value=D.groups||[],i.value=D.mapping||{})}catch{}d.value=!1}function k(q){return Object.values(i.value).filter(function(D){return D===q}).length}function _(q){const D=c.value[q],z=t.indexOf(D.color);D.color=t[(z+1)%t.length]}function T(q){if(q<=0)return;const D=c.value.slice(),z=D[q-1];D[q-1]=D[q],D[q]=z,c.value=D}function C(q){if(q>=c.value.length-1)return;const D=c.value.slice(),z=D[q+1];D[q+1]=D[q],D[q]=z,c.value=D}function u(){const q=g.value.trim();q&&(c.value.some(function(D){return D.name===q})||(c.value.push({name:q,color:t[c.value.length%t.length],sort_order:c.value.length,expanded:!0}),g.value=""))}function l(q){r.value=q,P.value=q}function p(q){const D=P.value.trim();if(!D||D===q||c.value.some(function(H){return H.name===D})){r.value="";return}c.value=c.value.map(function(H){return H.name===q?Object.assign({},H,{name:D}):H});const z={};Object.keys(i.value).forEach(function(H){z[H]=i.value[H]===q?D:i.value[H]}),i.value=z,r.value=""}function E(q){c.value=c.value.filter(function(z){return z.name!==q});const D={};Object.keys(i.value).forEach(function(z){D[z]=i.value[z]===q?"默认分组":i.value[z]}),i.value=D}async function I(){y.value=!0;try{await w("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:c.value,mapping:i.value})}),ElementPlus.ElMessage.success("分组已保存"),o.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}y.value=!1}return m(function(){window.addEventListener("qc:show-watch-groups",function(){o.value=!0,M()})}),{visible:o,loading:d,saving:y,groups:c,mapping:i,newName:g,renaming:r,renameVal:P,load:M,countIn:k,cycleColor:_,moveUp:T,moveDown:C,addGroup:u,startRename:l,commitRename:p,remove:E,save:I}}}})();(function(){const{inject:s}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=s("qcState");return e?{...e}:{}}}})();(function(){const{inject:s,computed:e,ref:m,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const o=s("qcState");if(!o)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},y=e(()=>d[o.aiEvalStage.value]||""),c=e(()=>{const V=o.aiResult&&o.aiResult.value&&o.aiResult.value.result&&o.aiResult.value.result.level;return V?V==="强烈推荐"||V==="推荐"?"var(--success-text)":V==="谨慎推荐"?"var(--warning-text)":V==="中性"||V==="观望"?"var(--text-secondary)":V==="评估失败"||V==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function i(V){const Z=document.createElement("textarea");Z.value=V,Z.style.position="fixed",Z.style.opacity="0",document.body.appendChild(Z),Z.select(),document.execCommand("copy"),document.body.removeChild(Z)}async function g(){const V=o.aiResult&&o.aiResult.value;if(!V||!V.result)return;const Z=V.result.dimensions||{},U=Object.entries(Z).map(([B,A])=>`${B} ${Math.round(A)}分`).join(`
`),j=`【AI 智能评估】${V.result.level||""} ${V.result.total_score!=null?V.result.total_score:"—"}分
模型：${V.model_used||V.result.provider||"—"}

${V.result.detailed_report||""}

九维度评分：
${U||"无"}`;try{await navigator.clipboard.writeText(j),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{i(j),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const r=m(!1),P=m(!1),w=m(null),M=m([]),k={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function _(V){return k[V]||"factor-sem-none"}async function T(){const V=o.stockDetail.value&&o.stockDetail.value.stock;if(V){r.value=!0,P.value=!1,M.value=[],w.value=null;try{const Z=o.selectedDate.value?`?date=${o.selectedDate.value}`:"",U=await fetch(`/api/calendar/stock/${V}/factors${Z}`).then(a=>a.json()),j=U&&Array.isArray(U.factors)?U.factors:[],B=[],A={};j.forEach(a=>{A[a.category]||(A[a.category]={category:a.category,items:[]},B.push(A[a.category])),A[a.category].items.push(a)}),M.value=B,w.value=U&&U.summary||null}catch{P.value=!0}finally{r.value=!1}}}t(o.stockDetailTab,V=>{V==="factor"&&o.stockDetail.value&&o.stockDetailVisible.value&&(T(),u())});const C=m(null);async function u(){try{const V=await fetch("/api/market/factor-ic").then(Z=>Z.json());C.value=V&&V.success&&V.data?V.data:{}}catch{C.value={}}}function l(V){if(!V||!V.n5)return"—";const Z=V.n5.icir!=null?"ICIR "+V.n5.icir:"ICIR —";return V.n5.grade+" ("+Z+")"}const p=m(!1),E=m(!1),I=m([]),q=m([]);function D(V){if(V==null)return"—";const Z=Number(V);return Number.isNaN(Z)?"—":Math.abs(Z)>=1e8?(Z/1e8).toFixed(2)+"亿":Math.abs(Z)>=1e4?(Z/1e4).toFixed(1)+"万":String(Z)}async function z(){const V=o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock;if(V){p.value=!0,E.value=!1;try{const Z=await fetch("/api/market/performance/"+encodeURIComponent(V)).then(U=>U.json());Z&&Z.success?(I.value=Z.forecast||[],q.value=Z.express||[]):E.value=!0}catch{E.value=!0}finally{p.value=!1}}}t(o.stockDetailTab,V=>{V==="performance"&&z()});const H=m(null);async function K(){const V=o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock;if(!V){H.value=null;return}try{const Z=await fetch("/api/focus/stock/"+encodeURIComponent(V)+"/pool").then(U=>U.json());H.value=Z&&Z.success&&Z.data?Z.data:null}catch{H.value=null}}return t(()=>o.stockDetail&&o.stockDetail.value&&o.stockDetail.value.stock,V=>{V&&o.stockDetailVisible.value?K():H.value=null}),t(()=>o.stockDetailVisible.value,V=>{V?K():H.value=null}),{...o,aiStageText:y,levelRingColor:c,copyAiReport:g,factorLoading:r,factorError:P,factorSummary:w,factorGroups:M,factorSemClass:_,loadFactorPanel:T,factorIc:C,loadFactorIc:u,factorIcGrade:l,perfLoading:p,perfError:E,perfForecast:I,perfExpress:q,fmtY:D,loadPerformance:z,poolInfo:H,loadPoolInfo:K}}}})();(function(){const{computed:s,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(m){const t=e("qcState");if(!t)return{};const o=s(()=>m.type==="history"?t.selectedHistoryIds.value.includes(m.item.id):t.selectedChatIds.value.includes(m.item.id)),d=s(()=>{const k=t.watchlistCodes.value.has(m.item.stock_code);return{icon:"star",isWatched:k,label:k?"取消收藏":"加入收藏"}}),y=s(()=>m.type==="history"?"bot":"message-circle"),c=s(()=>{var k;return m.type==="history"?((k=m.item.result)==null?void 0:k.provider)||"":m.item.first_msg||""}),i=s(()=>{var k,_;return`${((_=(k=m.item.result)==null?void 0:k.dimensions)==null?void 0:_.length)||9}维度分析`}),g=s(()=>{var _,T;const k=m.type==="history"?m.item.evaluate_time:m.item.created_at||"";return k?m.timeFormat==="datetime"?m.type==="history"?`${k.split("T")[0]} ${(k.split("T")[1]||"").split(".")[0]}`:`${k.split("T")[0]} ${((_=k.split("T")[1])==null?void 0:_.substring(0,5))||""}`:m.type==="history"?(k.split("T")[1]||"").split(".")[0]||k:((T=k.split("T")[1])==null?void 0:T.substring(0,5))||"":""});function r(){m.type==="history"?t.toggleSelectHistory(m.item.id):t.toggleSelectChat(m.item.id)}function P(){m.type==="history"?t.viewAiResult(m.item):t.viewChatSession(m.item)}async function w(){try{await ElementPlus.ElMessageBox.confirm(m.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}m.type==="history"?t.deleteSingleHistory(m.item.id):t.deleteChatSession(m.item.id)}function M(k,_){t.toggleWatchlist(k,_)}return{isSelected:o,watchState:d,providerIcon:y,providerText:c,dimsText:i,timeText:g,toggleSelect:r,view:P,remove:w,toggleWatchlist:M,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:s,computed:e,onMounted:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const o=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},y={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},c=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],i={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},g=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function r(w){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(w).then(_=>_.json?_.json():_)}function P(){const w=new Date,M=k=>k<10?"0"+k:""+k;return w.getFullYear()+"-"+M(w.getMonth()+1)+"-"+M(w.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",emits:["load-state"],template:`
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
      </div>`,setup(w,{emit:M}){const k=t("qcState"),_=s(P()),T=s("after_close"),C=s({rows:[],actions:{},total:0,groups:{}}),u=s({sessions:{},total:0}),l=s(null),p=s(!1),E=s(""),I=s(!1),q=s(!1),D=s(!1),z=s([]),H=s(""),K=s(null),V={},Z=s({});let U=0;const j=s(null),B=e(function(){const ee=C.value&&C.value.groups||{};return Object.keys(ee).length?ee:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),A=e(function(){const ee=j.value;return!ee||!ee.date||ee.date!==_.value?"":"已加载最近一次评估: "+ee.date+" · "+(i[ee.session]||ee.session)}),a=e(function(){const ee=C.value&&C.value.base_date;return ee?ee===_.value?"评分范围: "+ee+" 收盘池 + 自选":"评分范围: "+ee+" 收盘池(前一交易日算好) + 自选":""});function S(){D.value=!q.value&&(C.value.rows||[]).length===0&&Object.keys(u.value.sessions||{}).length===0,M("load-state",{error:q.value,empty:D.value})}function n(ee){if(ee==null)return"—";const $=Number(ee);return $===Math.floor($)?String($):$.toFixed(1)}function f(ee){const $=C.value.total||0,we=(C.value.actions||{})[ee]||0;if(!$)return"0%";const F=we/$*100;return F>0&&F<4?"4%":F.toFixed(1)+"%"}function J(ee){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[ee]||"info"}function N(ee){const $=l.value&&l.value.overall&&l.value.overall[ee]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"info":$.rate>=60?"success":$.rate>=40?"warning":"danger"}function x(ee){const $=l.value&&l.value.overall&&l.value.overall[ee]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"样本不足":$.rate.toFixed(1)+"% ("+$.total+" 样本)"}function v(){return i[T.value]||T.value}function R(ee){const $=z.value.indexOf(ee);$>=0?z.value.splice($,1):z.value.push(ee)}function b(ee){if(!ee||!ee.raw_json)return{};if(V[ee.stock_code+ee.session+ee.trade_date])return V[ee.stock_code+ee.session+ee.trade_date];let $={};try{$=JSON.parse(ee.raw_json)||{}}catch{$={}}return V[ee.stock_code+ee.session+ee.trade_date]=$,$}async function O(){try{const ee=await r("/api/focus/latest"),$=ee&&ee.success&&ee.data;$&&$.date&&(j.value=$,_.value=$.date,$.session&&(T.value=$.session))}catch(ee){console.warn("[focus] 最近一次评估解析失败:",ee)}}async function ae(){I.value=!0,q.value=!1;try{const ee=await r("/api/focus/results?date="+_.value+"&session="+T.value);C.value=ee&&ee.success&&ee.data||{rows:[],actions:{},total:0,groups:{}},re((C.value.rows||[]).map(function($){return $.stock_code}))}catch(ee){console.warn("[focus] 结果加载失败:",ee),C.value={rows:[],actions:{},total:0,groups:{}},q.value=!0}finally{I.value=!1,S()}}async function re(ee){const $=Z.value||{},we=(ee||[]).filter(function(me){return me&&!$[me]});if(!we.length)return;const F=++U,ve=we.map(function(me){return r("/api/focus/stock/"+encodeURIComponent(me)+"/pool?date="+_.value).then(function(X){X&&X.success&&X.data?$[me]=X.data:$[me]={stock_code:me,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){$[me]={stock_code:me,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(ve)}catch{}F===U&&(Z.value=Object.assign({},$))}function se(ee){const $=k&&k.showStockDetail;if(typeof $=="function"){$(ee);return}const F=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;F&&F.info("请从其他页面打开股票详情: "+ee)}async function ie(){try{const ee=await r("/api/focus/history?date="+_.value);u.value=ee&&ee.success&&ee.data||{sessions:{},total:0}}catch(ee){console.warn("[focus] 历史加载失败:",ee),u.value={sessions:{},total:0},q.value=!0}S()}async function Y(){p.value=!0;try{const ee=await r("/api/ai/track");ee&&ee.success&&ee.data?(l.value=ee.data,E.value=(ee.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):l.value=null}catch(ee){console.warn("[focus] 效果块加载失败:",ee),l.value=null,q.value=!0}finally{p.value=!1,S()}}async function oe(){const ee=(H.value||"").trim();if(ee){K.value=null;try{const $=await r("/api/focus/stock/"+encodeURIComponent(ee));K.value=$&&$.success&&$.data&&$.data.rows||[]}catch($){console.warn("[focus] 单股历史加载失败:",$),K.value=[]}}}async function qe(){await ae(),await ie(),await Y()}return m(async function(){await O(),await qe()}),{curDate:_,session:T,results:C,history:u,track:l,trackLoading:p,trackNote:E,detailSplitEnabled:k.detailSplitEnabled,stockDetail:k.stockDetail,loading:I,expanded:z,stockCode:H,stockHistory:K,SESSIONS:c,ACTION_ORDER:o,TRACK_WINDOWS:g,ACTION_DOT:d,TIER_DOT:y,SESSION_LABELS:i,displayGroups:B,latestNote:A,baseNote:a,sessionLabel:v,fmtScore:n,tagType:J,rateTagType:N,fmtRate:x,toggle:R,detailOf:b,loadResults:ae,loadHistory:ie,loadTrack:Y,loadStockHistory:oe,loadAll:qe,poolStatus:Z,openStockDetail:se,actionPct:f}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(s){const{ref:e,nextTick:m}=Vue,{currentView:t,statusFilter:o,dashboardData:d,loadHealthMetrics:y,getLoadDashboardData:c,getLastRefreshTime:i,getFetchPoolSignals:g}=s,r=e(!1),P=e(""),w=new Map,M=e([]),k=e(""),_=e(""),T=e([]),C=e(!1),u=e(""),l=window.__quantModules.core||{},p=typeof l.createTtlCache=="function"?l.createTtlCache(15e3):null;let E=0;function I(){const U=Date.now();U-E<5e3||(E=U,ElementPlus.ElMessage.success("有新数据，已更新"))}function q(U,j,B,A){!p||!j||typeof l.silentRefresh!="function"||l.silentRefresh({cache:p,key:j,fetchFn:async()=>{const a=await fetch(U);if(!a.ok)throw new Error("HTTP "+a.status);const S=await a.json();return B?B(S):S},ttl:p.defaultTtl,apply:A,onChanged:I,onError:()=>{}})}const D=new Set;async function z(){var U;try{const B=await(await fetch("/api/dates")).json();M.value=((U=B.data)==null?void 0:U.dates)||B.dates||[],M.value.length>0&&(k.value=M.value[M.value.length-1]),_.value=new Date().toLocaleTimeString()}catch(j){console.error(j)}}async function H(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),_.value="刷新中...",w.clear(),await z(),await V(),_.value=new Date().toLocaleTimeString()}catch(U){console.error("数据刷新失败",U)}}function K(){if(!k.value)return;const j="/api/view/"+(t.value||"day")+"/"+k.value+"?status="+(o.value||"all")+"&format=csv";window.open(j,"_blank")}async function V(){if(C.value=!1,!k.value)return;const U=`${t.value}_${k.value}`;if(D.has(U))return;D.add(U);const j=`/api/view/${t.value}/${k.value}?status=all`,B=p&&typeof l.makeCacheKey=="function"?l.makeCacheKey("GET",`/api/view/${t.value}/${k.value}`,{status:"all"}):null,A=(n,f)=>{T.value=n,u.value=f||"",w.set(U,{stocks:n,note:f||""})},a=n=>{A(n&&n.stocks||[],n&&n.note||"")};if(w.has(U)){a(w.get(U)),q(j,B,n=>n,a),D.delete(U);return}const S=B&&p?p.get(B):void 0;if(S!==void 0){a(S),q(j,B,n=>n,a),D.delete(U);return}r.value=!0,P.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const f=await(await fetch(j)).json(),J=f.stocks||[];A(J,f.note||""),p&&B&&p.set(B,{stocks:J,note:f.note||""})}catch{try{const J=await(await fetch(`/api/calendar/${k.value}/consensus`)).json();T.value=(J.consensus||[]).map(N=>({...N,code:N.stock,status:"current"}))}catch{C.value=!0,ElementPlus.ElMessage.error("数据加载失败")}}finally{r.value=!1}g(),D.delete(U)}async function Z(){const U=p&&typeof l.makeCacheKey=="function"?l.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(p){const j=p.get(U);if(j!==void 0){d.value=j,y().catch(()=>{}),q("/api/dashboard",U,B=>B.data||B,B=>{d.value=B,i().value=Date.now()});return}}await c()(),y().catch(()=>{}),p&&p.set(U,d.value)}return{loading:r,loadingView:P,viewCache:w,dates:M,selectedDate:k,lastLoadTime:_,consensus:T,viewNote:u,consensusError:C,loadDates:z,refreshCalendarData:H,exportCSV:K,loadConsensusData:V,loadDashboardCached:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(s){const{nextTick:e}=Vue,{currentKlinePeriod:m,loadIndexKline:t,rememberDialogTrigger:o,menus:d,currentPage:y,currentSubPage:c,stockDetail:i,selectedDate:g}=s,r=ref({indices:[],market_sentiment:null}),P=ref(!1);let w=null;const M=ref(!1),k=ref(null),_=ref(null),T=ref(!1);function C(){window.__quantModules.charts.disposeKline("stockKlineChart")}const u=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{u.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const l=ref(!1),p=ref(null),E=ref(!1),I=ref(0),q=ref(0);async function D(){P.value=!1;try{const f=await(await fetch("/api/market/overview")).json();r.value=f,z(f)}catch(n){P.value=!0,console.error("获取市场行情失败:",n)}}function z(n){w&&clearInterval(w),n&&n.in_trading_hours&&(w=setInterval(D,6e5))}function H(n){o(),k.value=n,_.value=null,m.value="daily",K(n.code),window.__quantModules.charts.disposeKline("indexKlineChart"),M.value=!0,setTimeout(async()=>{await t("daily")},500)}async function K(n){try{const J=await(await fetch("/api/ai/index-eval/"+n)).json();J.success&&J.data&&(_.value=J.data)}catch(f){console.warn("[getIndexAiScore] cache check failed:",f)}}async function V(){if(k.value){T.value=!0;try{const f=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:k.value.code,index_name:k.value.name,current_price:k.value.close,pct_chg:k.value.pct_chg})})).json();f.success?_.value=f.data:ElementPlus.ElMessage.error(f.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{T.value=!1}}}function Z(n){window.__quantModules.charts.zoomKline("stockKlineChart",n)}function U(){E.value=!0,setTimeout(()=>{E.value=!1},600)}function j(n,f){if(n===f){U();return}const J=800,N=performance.now(),x=f-n;l.value=!0,p.value={value:x,dir:x>0?"up":"down"},E.value=!0,setTimeout(()=>{E.value=!1},600),setTimeout(()=>{p.value=null},2300);function v(R){const b=R-N,O=Math.min(b/J,1),ae=1-Math.pow(1-O,3),re=Math.round(n+x*ae);i.value&&i.value.score_data&&(i.value.score_data.score=re),O<1?requestAnimationFrame(v):(i.value&&i.value.score_data&&(i.value.score_data.score=f),l.value=!1)}requestAnimationFrame(v)}function B(){if(!i.value||!i.value.score_data)return;const n=i.value.score_data.score;if(n==null)return;const f=600,J=performance.now();E.value=!0,setTimeout(()=>{E.value=!1},600);function N(x){const v=Math.min((x-J)/f,1),R=1-Math.pow(1-v,3),b=Math.round(n*R);i.value&&i.value.score_data&&(i.value.score_data.score=b),v<1?requestAnimationFrame(N):i.value&&i.value.score_data&&(i.value.score_data.score=n)}requestAnimationFrame(N)}async function A(){var J;if(!i.value||!i.value.stock)return;const n=i.value.stock,f=(J=i.value.score_data)==null?void 0:J.score;try{const N=new Date().toISOString().split("T")[0],x=g.value||N,R=await(await fetch(`/api/calendar/stock/${encodeURIComponent(n)}/score?date=${x}`)).json();if(R.success&&R.score_data){const b=R.score_data.score;i.value&&(i.value.score_data=R.score_data),f!=null&&b!==f?j(f,b):U()}else U()}catch(N){console.warn("[refreshStockScore] failed:",N)}}function a(n){u.value&&(I.value=n.touches[0].clientX,q.value=n.touches[0].clientY)}function S(n){if(!u.value)return;const f=I.value-n.changedTouches[0].clientX,J=q.value-n.changedTouches[0].clientY;if(Math.abs(f)>Math.abs(J)&&Math.abs(f)>80){const N=d.value.map(function(v){return v.key}),x=N.indexOf(y.value);if(f>0&&x<N.length-1){const v=N[x+1],R=window.__quantGoPage;R?R(v,""):(y.value=v,c.value="")}else if(f<0&&x>0){const v=N[x-1],R=window.__quantGoPage;R?R(v,""):(y.value=v,c.value="")}}}return{marketData:r,marketRefreshTimer:w,marketError:P,fetchMarketData:D,indexDetailVisible:M,indexDetail:k,indexAiResult:_,indexAiLoading:T,showIndexDetail:H,loadCachedIndexEval:K,doIndexAiEvaluate:V,disposeStockKline:C,isMobile:u,zoomKlineRange:Z,scoreAnimating:l,scoreDelta:p,scorePulse:E,triggerScorePulse:U,animateScoreChange:j,animateScoreEntrance:B,refreshStockScore:A,touchStartX:I,touchStartY:q,onTouchStart:a,onTouchEnd:S}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(s){const{navigateTo:e,currentPage:m,currentSubPage:t}=s,o=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),y=ref("");async function c(){if(!o.value.webhook_url){y.value="请先输入Webhook地址";return}d.value="testing",y.value="";try{const oe=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:o.value.webhook_url})})).json();oe.success||oe.status==="ok"?(y.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(y.value=oe.message||"测试失败",ElementPlus.ElMessage.error(y.value))}catch{y.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const i=Vue.ref(!1);async function g(){i.value=!0;try{const oe=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}const r=ref(!1);function P(){e("ai","chat_history"),r.value=!0,Vue.nextTick(()=>{const Y=document.querySelector('input[placeholder*="输入问题"]');Y&&Y.focus()})}const w=ref([]),M=ref({});async function k(){try{const oe=await(await fetch("/api/ai/recommend-strategies")).json();oe.success&&(w.value=oe.recommendations||[])}catch(Y){console.warn("[loadStrategyRecommendations] failed:",Y)}}async function _(){try{const oe=await(await fetch("/api/ai/usage-stats")).json();oe.success&&(M.value=oe)}catch(Y){console.warn("loadAiUsage failed:",Y)}}const T=ref({}),C=ref([]),u=ref(7),l=ref(!1),p=ref(!1),E=ref(!1);async function I(){l.value=!1;try{const oe=await(await fetch("/api/system/monitor")).json();oe.success&&(T.value=oe)}catch(Y){l.value=!0,console.warn("loadSysMonitor failed:",Y)}}const q=ref({});async function D(){p.value=!1;try{const oe=await(await fetch("/api/system/health-detail")).json();oe.success&&(q.value=oe)}catch(Y){p.value=!0,console.warn("loadHealthDetail failed:",Y)}}async function z(){try{const oe=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();oe.success&&(C.value=oe.rank||[])}catch(Y){console.warn("loadAnalytics failed:",Y)}}const H=ref(!1);async function K(){if(!H.value){H.value=!0;try{const oe=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return oe&&oe.success?oe.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${oe.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${oe.date}）`):ElementPlus.ElMessage.error(oe&&(oe.detail||oe.message)||"生成复盘失败"),D(),oe}catch(Y){ElementPlus.ElMessage.error("生成复盘失败: "+(Y.message||""))}finally{H.value=!1}}}const V=ref(null),Z=ref(!1);async function U(){E.value=!1;try{const oe=await(await fetch("/api/ai/fact-check/latest")).json();V.value=oe&&oe.success&&oe.data||null}catch(Y){E.value=!0,console.warn("loadFactCheck failed:",Y)}}async function j(){if(!Z.value){Z.value=!0;try{const oe=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return oe&&oe.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${oe.data.pass_rate!=null?oe.data.pass_rate+"%":"--"} (${oe.data.checked} 个数字)`),U()):ElementPlus.ElMessage.error(oe&&(oe.detail||oe.message)||"事实护栏抽查失败"),oe}catch(Y){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Y.message||""))}finally{Z.value=!1}}}const B=ref([]),A=ref(!1);async function a(){try{const oe=await(await fetch("/api/backup/list")).json();oe.success&&(B.value=oe.backups||[])}catch(Y){console.error("加载备份列表失败",Y)}}async function S(){A.value=!0;try{const oe=await(await fetch("/api/backup/create",{method:"POST"})).json();oe.success?(ElementPlus.ElMessage.success(oe.message||"备份成功"),a()):ElementPlus.ElMessage.error(oe.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{A.value=!1}}const n=ref(""),f=ref("");async function J(Y){n.value=Y,f.value="";try{const oe=window.__quantModules&&window.__quantModules.core||{},qe=typeof oe.authHeaders=="function"?oe.authHeaders():{},ee=await fetch("/api/reports/export?format="+encodeURIComponent(Y),{headers:qe});if(!ee.ok)throw new Error("HTTP "+ee.status);const $=await ee.blob(),we=URL.createObjectURL($),F=document.createElement("a");F.href=we;const ve=new Date().toISOString().slice(0,10);F.download="report_"+ve+"."+Y,document.body.appendChild(F),F.click(),document.body.removeChild(F),URL.revokeObjectURL(we),f.value="报表已导出 ("+Y.toUpperCase()+")"}catch(oe){f.value="报表导出失败: "+(oe.message||oe)}finally{n.value=""}}async function N(Y){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Y} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(oe){console.warn("[restoreBackup] confirm cancelled:",oe);return}try{const qe=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})})).json();qe.success?(ElementPlus.ElMessage.success(qe.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(qe.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const x=ref(!1),v=ref(0),R=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{v.value=0,x.value=!0},800)}function O(){x.value=!1,localStorage.setItem("quant_tour_done","1")}function ae(){x.value=!1,localStorage.setItem("quant_tour_done","1")}const re=ref(""),se=ref(!1);async function ie(){if(!re.value||!re.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}se.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:re.value.trim(),page:m.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(re.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{se.value=!1}}return{feishuConfig:o,feishuTestStatus:d,feishuTestMessage:y,feishuSaving:i,testFeishuWebhook:c,saveFeishuConfig:g,aiFabHidden:r,openAiFab:P,strategyRecommendations:w,aiUsage:M,loadStrategyRecommendations:k,loadAiUsage:_,sysMonitor:T,analyticsRank:C,analyticsDays:u,loadSysMonitor:I,loadAnalytics:z,sysMonitorError:l,healthDetail:q,loadHealthDetail:D,healthDetailError:p,reviewTriggering:H,triggerMarketReview:K,factCheck:V,factCheckRunning:Z,loadFactCheck:U,triggerFactCheck:j,factCheckError:E,backups:B,backupCreating:A,loadBackups:a,createBackup:S,restoreBackup:N,reportExporting:n,reportExportMsg:f,exportReport:J,tourVisible:x,tourStep:v,tourSteps:R,maybeShowTour:b,skipTour:O,finishTour:ae,feedbackText:re,feedbackSubmitting:se,submitFeedback:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(s){const{computed:e}=Vue,{currentView:m,selectedDate:t,dates:o,loadConsensusData:d,hapticFeedback:y}=s,c=e(()=>({day:"天",week:"周",month:"月",year:"年"})[m.value]||"天"),i=e(()=>({day:"date",week:"week",month:"month",year:"year"})[m.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[m.value]||"YYYY-MM-DD"),r=e(()=>!t.value||!o.value||o.value.length===0?!1:t.value>o.value[0]),P=e(()=>!t.value||!o.value||o.value.length===0?!1:t.value<o.value[o.value.length-1]);function w(T){y("light"),m.value=T;let C=t.value||o.value[o.value.length-1];if(T==="year"){const u=C.substring(0,4),l=o.value.find(p=>p.startsWith(u));t.value=l||C}else if(T==="month"){const u=C.substring(0,7),l=o.value.find(p=>p.startsWith(u));t.value=l||C}setTimeout(d,50)}function M(T){y("light");const C=t.value,u=o.value,l=u.indexOf(C);if(l<0)return;let p=1;m.value==="week"&&(p=5),m.value==="month"&&(p=22),m.value==="year"&&(p=250);const E=l+T*p;if(E>=0&&E<u.length){const I=u[E];if(m.value==="month"){const q=I.substring(0,7),D=u.find(z=>z.startsWith(q));t.value=D||I}else if(m.value==="year"){const q=I.substring(0,4),D=u.find(z=>z.startsWith(q));t.value=D||I}else t.value=I;d()}}function k(T){if(!o.value||o.value.length===0)return!1;const C=T.getFullYear(),u=String(T.getMonth()+1).padStart(2,"0"),l=String(T.getDate()).padStart(2,"0"),p=`${C}-${u}-${l}`;return!o.value.includes(p)}function _(T){T&&T.length>10&&(t.value=T.substring(0,10)),d()}return{viewUnit:c,datePickerType:i,dateFormat:g,canNavPrev:r,canNavNext:P,switchView:w,navigateDate:M,disabledDate:k,onDateChange:_}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(s){const{menus:e,subPageNames:m,navigateTo:t,currentPage:o,currentSubPage:d,currentView:y,navigateDate:c,switchView:i,getLoadDashboardData:g,refreshCalendarData:r,getLoadAiHistory:P,exportCSV:w,getShowBatchEvaluate:M,openAiFab:k,toggleSidebar:_,showStockDetail:T,getSelectedDate:C,markExternalStock:u}=s,l=ref("");async function p(j,B){if(!j||j.trim().length<1){B([]);return}const A=window.QuantCommandPanel;let a=[];A&&e.value&&(a=A.buildSearchSuggestions(j,e.value,m,A.DEFAULT_COMMANDS));const S=window.__quantModules&&window.__quantModules.pinyin;S&&S.searchCoreStocks(j).forEach(function(n){a.push({value:n.code+" "+n.name,type:"stock",code:n.code,name:n.name,label:n.name,subLabel:n.code,icon:"trending-up",iconName:"trending-up"})});try{const f=await(await fetch("/api/search?q="+encodeURIComponent(j))).json();if(f.success&&f.results){const J=f.results.map(function(x){return{value:x.code+" "+x.name,type:"stock",code:x.code,name:x.name,label:x.name,subLabel:x.code,icon:"trending-up",iconName:"trending-up"}}),N=[];(f.groups||[]).forEach(function(x){(x.items||[]).forEach(function(v){v.type==="sector"?N.push({value:v.name+" · "+v.subLabel,type:"sector",name:v.name,label:v.name,subLabel:"板块",icon:"layers",iconName:"layers"}):v.type==="strategy"?N.push({value:v.name+" · 策略",type:"strategy",id:v.id,name:v.name,label:v.name,subLabel:"策略",icon:"target",iconName:"target"}):v.type==="menu"&&N.push({value:v.name,type:"menu",menuKey:v.menuKey,name:v.name,label:v.name,subLabel:v.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),B(a.concat(J,N))}else B(a)}catch(n){console.warn("[searchStocks] fetch failed:",n),B(a)}}function E(j){return j?j.type==="menu"?{action:"menu",menuKey:j.menuKey,subPage:j.subPage}:j.type==="command"?{action:"command",key:j.key}:j.type==="sector"?{action:"sector",name:j.name}:j.type==="strategy"?{action:"strategy",id:j.id,name:j.name}:j.type==="stock"||j.code&&j.name?{action:"stock",code:j.code,name:j.name}:null:null}function I(j){l.value="";const B=window.QuantCommandPanel,A=B?B.dispatchSearchSelection(j):E(j);if(A){if(A.action==="menu"){t(A.menuKey,A.subPage);return}if(A.action==="command"){z(A.key);return}if(A.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(A.name);return}if(A.action==="strategy"){t("research","overview");return}if(A.action==="stock"){(o.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof u=="function"&&u(A.code),D(A.code,A.name);return}}}let q=null;function D(j,B){q&&(clearInterval(q),q=null);const A=function(){typeof T=="function"&&T(j,B)},a=C?C():null;if(a&&a.value){A();return}const S=Date.now();q=setInterval(function(){((C?C().value:!0)||Date.now()-S>4e3)&&(clearInterval(q),q=null,A())},60)}function z(j){if(j==="refresh"){const B=o.value;B==="strategies"?g().catch(function(){}):B==="calendar"?r().catch(function(){}):B==="ai"&&P().catch(function(){})}else j==="export"?w():j==="batch"?M().value=!0:j==="ai"?k():j==="sidebar"?_():j==="open-eval-history"?t("ai","history"):j==="open-shortterm"&&t("shortterm","overview")}const H=ref(!1),K=ref(!1);function V(j){if(!j)return!1;const B=j.tagName;return B==="INPUT"||B==="TEXTAREA"||B==="SELECT"||j.isContentEditable}function Z(j){if(V(j.target))return;const B=j.key.toLowerCase();if(j.ctrlKey&&B==="k"){j.preventDefault(),K.value=!0;return}if(j.ctrlKey&&B==="/"){j.preventDefault(),H.value=!H.value;return}if(j.ctrlKey&&B==="h"){j.preventDefault(),t("ai","history");return}if(j.ctrlKey&&j.shiftKey&&B==="s"){j.preventDefault(),t("shortterm","overview");return}if(!(j.ctrlKey||j.metaKey||j.altKey)){if(B>="1"&&B<="5"){const A=parseInt(B)-1,a=e.value[A];a&&t(a.key,a.subPages[0]||"");return}if(B==="r"&&U(),(B==="arrowleft"||B==="arrowright"||B==="arrowup"||B==="arrowdown")&&o.value==="calendar")if(j.preventDefault(),B==="arrowleft"||B==="arrowright")c(B==="arrowleft"?-1:1);else{const A=["day","week","month","year"].indexOf(y.value),a=["day","week","month","year"][(A+(B==="arrowup"?-1:1)+4)%4];i(a)}}}function U(){const j=o.value;j==="strategies"?g().catch(()=>{}):j==="calendar"?r().catch(()=>{}):j==="ai"&&P().catch(()=>{})}return{searchQuery:l,searchStocks:p,onSearchSelect:I,runGlobalCommand:z,shortcutHelpVisible:H,commandPaletteVisible:K,isTypingTarget:V,handleGlobalKeydown:Z,refreshCurrentPage:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(s){const{currentUser:e,loadUserConfig:m,loadDates:t,loadDashboardData:o,loadDashboardCached:d,loadHealthMetrics:y,loadConsensusData:c,applyTheme:i,maybeShowTour:g,loadAiVendors:r,loadGroupConfig:P,groupsConfig:w}=s,M=function(B){const A=window.__quantModules&&window.__quantModules.themes;return A&&A.applyLegacyTheme?A.applyLegacyTheme(B):i(B)},k="qc_login_username";let _="";try{_=localStorage.getItem(k)||""}catch{_=""}const T=ref({username:_,password:""}),C=ref(!1),u=ref(!1),l=ref(!1),p=ref({oldPassword:"",newPassword:"",confirmPassword:""}),E=ref(!1),I=ref(!1),q=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),D=ref(1);async function z(){try{(await(await fetch("/api/setup/status")).json()).needed&&(q.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},D.value=1,I.value=!0)}catch(B){console.warn("[checkSetupWizard] failed:",B)}}async function H(){try{const B={new_password:q.value.newPassword,ai_key:q.value.aiKey,ai_provider:q.value.aiProvider,ai_model:q.value.aiModel,ai_endpoint:q.value.aiEndpoint,tushare_token:q.value.tushareToken},a=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)})).json();a.success?(I.value=!1,ElementPlus.ElMessage.success("初始化完成"),await m()):ElementPlus.ElMessage.error(a.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function K(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(I.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function V(){if(!T.value.username||!T.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}C.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T.value)})).json();if(A.success){e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),M(A.user.theme||"gold");try{localStorage.setItem(k,T.value.username||"")}catch{}typeof P=="function"&&await P().catch(function(){}),typeof r=="function"&&r(),await m(),await t(),await Promise.all([d(),c(),y().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),A.data&&A.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),A.user.role==="admin"&&setTimeout(z,500)}else ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{C.value=!1}}async function Z(){u.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();A.success?(e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),M(A.user.theme||"gold"),typeof P=="function"&&await P().catch(function(){}),await m(),await t(),await o(),y().catch(()=>{}),await c(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{u.value=!1}}function U(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{w&&(w.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function j(){if(!p.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!p.value.newPassword||p.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(p.value.newPassword!==p.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}E.value=!0;try{const B=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:p.value.oldPassword,new_password:p.value.newPassword})}),A=await B.json();B.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,p.value={oldPassword:"",newPassword:"",confirmPassword:""},U()):ElementPlus.ElMessage.error(A.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{E.value=!1}}return{loginForm:T,logining:C,guestLogining:u,showChangePassword:l,changePasswordForm:p,changingPassword:E,showSetupWizard:I,setupForm:q,setupStep:D,checkSetupWizard:z,completeSetupWizard:H,resetSetupWizard:K,handleLogin:V,handleGuestLogin:Z,handleLogout:U,doChangePassword:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(s){const{watch:e}=Vue;let m=null;const{strategyFilter:t,currentView:o,statusFilter:d,currentPage:y,currentSubPage:c,menus:i,currentUser:g,strategyFilterCounts:r,lazyTick:P,dates:w,selectedDate:M,consensus:k,loadConsensusData:_,fetchMerrillClock:T,fetchMarketData:C,loadWatchlist:u,loadAiHistory:l,preloadWatchlistKline:p,loadChatHistory:E,loadSystemStatus:I,checkTushareConnection:q,loadSysMonitor:D,loadAnalytics:z,loadHealthDetail:H,loadHealthMetrics:K,loadAiUsage:V,loadFactCheck:Z,loadAutoEvaluateConfig:U,loadDatasourceConfig:j,loadFeishuConfig:B,loadAiConfig:A,loadAiVendors:a,loadRateLimit:S,loadDataRefreshConfig:n,loadBackups:f,loadAllGroups:J,loadUsers:N,stockDetailTab:x,stockDetailVisible:v,stockKlineLoaded:R,loadStockKline:b,currentKlinePeriod:O,showMerrillDetail:ae,indexDetailVisible:re,restoreDialogFocus:se}=s;e(t,ie=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(ie.selected)),localStorage.setItem("quant_strategy_filter_mode",ie.mode)},{deep:!0}),e([o,d],(ie,Y)=>{ie[0]!==Y[0]&&_()}),e([y,c],([ie,Y])=>{var oe;try{const ee=!(ie==="calendar"&&Y==="calendar")&&Y||"",$=ee?"#"+ie+"/"+ee:"#"+ie;window.location.hash!==$&&(window.location.hash=$)}catch{}if(Y&&localStorage.setItem("quant_last_subpage",Y),!Y&&i.value.find(qe=>qe.key===ie)){const qe=i.value.find(ee=>ee.key===ie);qe&&qe.subPages.length>0&&(c.value=qe.subPages[0])}if(ie==="shortterm"&&Y==="market-review"){const qe=window.__lazyLoaders&&window.__lazyLoaders.research;qe&&qe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ee){ee&&ee.name&&!ee.__quantRegistered&&(window.__quantApp.component(ee.name,ee),ee.__quantRegistered=!0)}),P&&P.value++}).catch(function(ee){console.warn("[lazy] research 组件补加载失败",ee)})}ie==="calendar"&&Y==="calendar"&&(!k.value||k.value.length===0)&&(w.value.length>0&&!M.value&&(M.value=w.value[w.value.length-1]||""),setTimeout(_,50)),ie==="calendar"&&Y==="pool"&&(!k.value||k.value.length===0)&&(w.value.length>0&&!M.value&&(M.value=w.value[w.value.length-1]||""),setTimeout(_,50)),ie==="strategies"&&(Y==="merrill"&&T(),Y==="market"&&C(),Y==="consensus"&&(!k.value||k.value.length===0)&&setTimeout(_,50)),ie==="ai"&&(Y==="watchlist"&&(u(),l(),setTimeout(p,500)),Y==="history"&&l(),Y==="overview"&&(l(),u()),Y==="chat_history"&&E()),(ie==="system"||ie==="ops")&&((oe=g.value)==null?void 0:oe.role)==="admin"&&(Y==="status"&&(I(),q()),Y==="health"&&(H(),K()),Y==="schedule"&&H(),Y==="guard"&&Z(),Y==="usage"&&(D(),z(),H(),K(),V(),Z()),Y==="autoeval"&&(U(),a()),Y==="datasource"&&j(),Y==="feature"&&(B(),A(),S(),n(),f()),Y==="user"&&(J(),N())),(ie==="system"||ie==="ops")&&Y==="usage"?m||(m=setInterval(()=>{D(),z(),H(),K(),V()},3e4)):m&&(clearInterval(m),m=null)}),e(x,(ie,Y)=>{ie==="kline"&&Y&&Y!=="kline"&&v.value&&(R.value=!1,setTimeout(async()=>{!await b(O.value)&&v.value&&x.value==="kline"&&setTimeout(()=>b(O.value),800)},50))}),e(ae,ie=>{ie||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([v,re],([ie,Y])=>{!ie&&!Y&&se()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(s){const{handleGlobalKeydown:e,applyTheme:m,menus:t,currentPage:o,currentSubPage:d,currentView:y,currentKlinePeriod:c,selectedDate:i,dates:g,loadDates:r,loadConsensusData:P,loadDashboardCached:w,appVersion:M,themes:k,fetchMarketData:_,fetchMerrillStages:T,fetchMerrillClock:C,loadAiConfig:u,loadAiVendors:l,loadAiCatalog:p,currentUser:E,loadUserConfig:I,loadAutoEvaluateConfig:q,loadGroupConfig:D,loadUsers:z,loadAllGroups:H,loadAiHistory:K}=s;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function V(N,x){const v={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(N==="calendar"&&v[x])return o.value="calendar",d.value="calendar",v[x]&&(y.value=v[x]),!0;if(N==="research"&&(x==="strategy-write"||x==="custom-write")){o.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",x==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const N=window.location.hash||"";if(!N||N==="#")return;const x=N.replace(/^#\/?/,"").split("/"),v=x[0],R=x[1]||"",b=t.value.find(function(O){return O.key===v});if(b&&!V(v,R)){if(!R)o.value=v,d.value=b.subPages[0]||"";else if(b.subPages.indexOf(R)>=0)o.value=v,d.value=R;else return;window.__lazyLoaders&&window.__lazyLoaders[v]&&window.__quantGoPage&&window.__quantGoPage(v,d.value).catch(function(){})}});const Z=(N,x=3e3,v="")=>{const R=new Promise((b,O)=>setTimeout(()=>O(new Error("timeout")),x));return Promise.race([N,R]).catch(b=>{console.warn(`[init] ${v||"task"} failed:`,b.message)})},U=localStorage.getItem("quant_theme"),j=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const N=window.__quantModules.themes;let x=j.theme||"system",v=j.theme_hue!=null&&j.theme_hue!==""?j.theme_hue:null;const R=typeof N.migrateLegacyTheme=="function"?N.migrateLegacyTheme():null;v==null&&R&&(x=R.mode,v=R.hue),v==null&&(v=45),m(x,v)}else U&&m(U);await D().catch(function(){}),function(){var N=window.location.hash||"",x=!1;if(N&&N!=="#"){var v=N.replace(/^#\/?/,"").split("/"),R=v[0],b=v[1]||"",O=t.value.find(function(Y){return Y.key===R});O&&(V(R,b)||(o.value=R,b&&O.subPages.indexOf(b)>=0?d.value=b:b||(d.value=O.subPages[0]||"")),x=!0)}if(!x){var ae=localStorage.getItem("quant_last_page");ae&&t.value.some(function(Y){return Y.key===ae})?o.value=ae:j.default_view&&t.value.some(function(Y){return Y.key===j.default_view})&&(o.value=j.default_view);var re=localStorage.getItem("quant_last_subpage");re&&(d.value=re)}var se=localStorage.getItem("quant_last_date");se&&(i.value=se);var ie=localStorage.getItem("quant_last_view");ie&&(y.value=ie),window.__lazyLoaders&&window.__lazyLoaders[o.value]&&window.__quantGoPage&&window.__quantGoPage(o.value,d.value).catch(function(){})}(),fetch("/api/health").then(N=>N.json()).then(N=>{N.version&&(M.value=N.version)}).catch(()=>{});const B=localStorage.getItem("quant_user"),A=localStorage.getItem("quant_token"),a=!!(B&&A),S=Promise.all([Promise.resolve().then(()=>{k.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),Z(_(),3e3,"marketData"),Z(T(),2e3,"merrillStages")]).then(()=>{Z(C(),3e3,"merrillClock")});if(u(),p(),a&&E.value&&l(),!a||!E.value){await S;return}let n=!0;try{n=(await fetch("/api/users/me")).ok}catch{n=!1}if(!n){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),E.value=null;return}if(E.value){const N=E.value.theme||"",x=window.__quantModules&&window.__quantModules.themes;let v=j.theme||"system",R=j.theme_hue!=null&&j.theme_hue!==""?j.theme_hue:null;if(R==null&&x&&typeof x.migrateLegacyTheme=="function"){const b=x.migrateLegacyTheme();if(b)v=b.mode,R=b.hue;else if(N&&x.LEGACY_MAP&&x.LEGACY_MAP[N]){const O=x.LEGACY_MAP[N];v=O[0],R=O[1]}}R==null&&(R=45),m(v,R)}if(window.__quantModules&&window.__quantModules.preferences){const x=await window.__quantModules.preferences.loadPreferences();var f=localStorage.getItem("quant_last_page");!f&&x.default_view&&t.value.some(function(v){return v.key===x.default_view})&&(o.value=x.default_view),x.theme&&m(x.theme,x.theme_hue!=null&&x.theme_hue!==""?x.theme_hue:null),c&&(x.chart_period==="weekly"||x.chart_period==="monthly")&&(c.value=x.chart_period)}await Promise.all([Z(I(),2e3,"userConfig"),Z(r(),2e3,"dates")]),q().catch(()=>{}),D().catch(()=>{});const J=o.value==="strategies"?Z(w(),2e3,"dashboard"):Z(P(),2e3,"consensus");await Promise.all([J,Z(z(),2e3,"users"),Z(K(),2e3,"aiHistory")]),H().catch(()=>{})}}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.shell={create:function(s){const{ref:e,computed:m,watch:t}=s,o=e(!1),d=window.__quantModules&&window.__quantModules.i18n||{},y=d.SUPPORTED_LOCALES||["zh-CN","en"],c=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",i=e(y.indexOf(c)!==-1?c:"zh-CN");typeof d.bindLocale=="function"&&d.bindLocale(i);const g=typeof d.t=="function"?d.t:function(a){return String(a)};function r(a){y.indexOf(a)!==-1&&(i.value=a,typeof d.setLocale=="function"&&d.setLocale(a),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",a))}function P(a,S){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(a,S):a==null?"":String(a)}function w(a){(a.key==="Enter"||a.key===" "||a.key==="Spacebar")&&(a.preventDefault(),a.currentTarget&&typeof a.currentTarget.click=="function"&&a.currentTarget.click())}let M=null;function k(){document.activeElement&&document.activeElement!==document.body&&(M=document.activeElement)}function _(){if(M&&M.isConnected)try{M.focus()}catch{}M=null}function T(){Vue.nextTick(()=>{const a=document.querySelector(".el-dialog-overlay .el-dialog");if(!a)return;const S=a.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');S&&typeof S.focus=="function"&&S.focus()})}const C=e(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{C.value=!0}),window.addEventListener("offline",()=>{C.value=!1})),window.addEventListener("beforeunload",a=>{if(o.value)return a.preventDefault(),a.returnValue="您有未保存的配置变更，确定要离开吗？",a.returnValue});function u(a="light"){typeof navigator<"u"&&navigator.vibrate&&(a==="light"?navigator.vibrate(10):a==="medium"?navigator.vibrate(20):a==="heavy"&&navigator.vibrate([10,30,10]))}const l=e(localStorage.getItem("sidebar_collapsed")==="1");function p(){l.value=!l.value,localStorage.setItem("sidebar_collapsed",l.value?"1":"0")}const E=e(null),I=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],q=m(()=>{var J,N,x;const a=((J=A.value)==null?void 0:J.role)||"guest",S=((N=A.value)==null?void 0:N.group)||a,n=((x=E.value)==null?void 0:x[S])||null;return I.map(v=>{if(n&&n.visible_menus&&v.key in n.visible_menus&&!n.visible_menus[v.key])return null;const R={...v,name:g("nav."+v.key)||v.name};return n!=null&&n.visible_sub_pages&&(R.subPages=v.subPages.filter(b=>{const O=v.key+"."+b;return n.visible_sub_pages[O]!==!1})),v.key==="system"&&a==="guest"&&v.guestSubPages&&(R.subPages=v.guestSubPages),R}).filter(Boolean)});async function D(){try{if(!localStorage.getItem("quant_token"))return;const S=await fetch("/api/groups/my");if(S.ok){const n=await S.json();E.value={[n.group_id]:n.group}}}catch(a){console.warn("loadGroupConfig:",a)}}const z=e("strategies"),H=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},K=e(H.navMode);function V(a){const S=window.__quantModules&&window.__quantModules.navModeCore;K.value=S?S.normalizeNavMode(a):a==="tree"||a==="toptab"?a:"toptab",S&&S.writePrefs({navMode:K.value})}const Z=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function U(a,S=""){u("light"),z.value=a,B.value=S,localStorage.setItem("quant_last_subpage",S)}function j(){const a=q.value;if(!a||!a.length)return;if(!a.some(function(f){return f.key===z.value})){const f=a[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",f.key),z.value=f.key,B.value=f.subPages&&f.subPages[0]||"";return}const n=a.find(function(f){return f.key===z.value});n&&n.subPages&&n.subPages.length&&!n.subPages.includes(B.value)&&(B.value=n.subPages[0])}const B=e("overview"),A=e(null);return t(q,function(){j()}),function(){if(typeof localStorage>"u")return;const a=localStorage.getItem("quant_user"),S=localStorage.getItem("quant_token");if(a&&S)try{A.value=JSON.parse(a)}catch{}}(),{configChanged:o,locale:i,t:g,changeLanguage:r,sanitizeHtml:P,keyClick:w,rememberDialogTrigger:k,restoreDialogFocus:_,focusFirstInDialog:T,isOnline:C,hapticFeedback:u,sidebarCollapsed:l,toggleSidebar:p,groupsConfig:E,allMenuDefs:I,menus:q,loadGroupConfig:D,currentPage:z,currentSubPage:B,navMode:K,setNavMode:V,shortcutHelpItems:Z,navigateTo:U,ensureVisiblePage:j,currentUser:A}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.workspace={create:function(s){const{ref:e,computed:m,watch:t,currentPage:o,currentSubPage:d,allMenuDefs:y,menus:c,navigateTo:i,ensureVisiblePage:g,currentUser:r}=s,P=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],w=e("multifactor"),M=e(null),k=e(1e5),_=e(!1),T=e(null),C=e(!1);let u=null,l=null;async function p(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const xe={initial_capital:k.value||1e5};M.value&&M.value.length===2&&(xe.start_date=M.value[0],xe.end_date=M.value[1]),_.value=!0,T.value=null,C.value=!1;try{const Le=await fetch("/api/strategies/"+w.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(xe)});if(!Le.ok){const G=await Le.json().catch(()=>({}));throw new Error(G.detail||"回测失败")}const h=await Le.json(),L=h.result||{};if(!L.success)throw new Error(L.message||"回测失败");h.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),T.value={total_return_pct:((L.total_return??0)*100).toFixed(2),annual_return_pct:((L.annual_return??0)*100).toFixed(2),max_drawdown_pct:((L.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(L.sharpe_ratio??0).toFixed(2),win_rate:((L.win_rate??0)*100).toFixed(2),out_sample:L.outsample_total_return===void 0?"":((L.outsample_total_return??0)*100).toFixed(2),overfit_warning:L.overfit_warning||!1,message:L.message||""},E(L.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(Le){C.value=!0,ElementPlus.ElMessage.error(Le.message||"回测失败")}finally{_.value=!1}}function E(fe){const xe=document.getElementById("backtestEquityChart");if(!xe||!fe||fe.length===0)return;const Le=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,h=()=>{l=fe,u&&(u.dispose(),u=null),u=echarts.init(xe),u.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const L=fe.map(ce=>ce.date||ce[0]),G=fe.map(ce=>ce.value??ce[1]);u.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:L,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};Le?Le().then(h).catch(()=>{}):h()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){l&&E(l)})),function(){const fe=window.QuantSessionRestore;if(fe){const xe=fe.restore();xe&&xe.page&&(o.value=xe.page,xe.sub&&(d.value=xe.sub))}}(),Vue.watch(d,function(){gt()});const I=m(()=>{const fe=y.find(xe=>xe.key===o.value);return fe?fe.name:o.value}),q=e(0),D=m(()=>{q.value;const fe={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},xe=d.value;return o.value==="shortterm"&&xe==="market-review"?"qc-research-page":o.value==="ops"&&xe==="execution"?"qc-strategies-page":fe[o.value]||""}),z=e(!1),H=e({}),K=e([]),V=e(""),Z=e([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),U=e("day"),j=e("all");t([o,d],function(){const fe=document.querySelector(".main-content");fe&&(fe.scrollTop=0)});const B=e(!1),A=e("kline"),a=e(null),S=e(!1),n=e(localStorage.getItem("qc_detail_mode")||"split"),f=e(window.innerWidth<=1024),J=m(()=>n.value==="split"&&!f.value);function N(fe){n.value=fe;try{localStorage.setItem("qc_detail_mode",fe)}catch{}}window.addEventListener("resize",()=>{f.value=window.innerWidth<=1024});const x=35,v=e(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function R(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",v.value?v.value+"px":x+"%")}R();function b(fe){const xe=Math.max(1,Math.min(fe,2e3));v.value=xe,R();try{localStorage.setItem("qc_split_width",String(xe))}catch{}}function O(fe){if(v.value)return v.value;const xe=fe?fe.getBoundingClientRect().width:0;return Math.max(200,Math.floor(xe*x/100))}let ae=null;function re(fe,xe){if(!xe||f.value)return;fe.preventDefault();const Le=xe.getBoundingClientRect().width;ae={startX:fe.clientX,startW:O(xe),minW:Math.max(200,Math.floor(Le*x/100)),maxW:Math.floor(Le/2)},document.body.classList.add("qc-split-resizing")}function se(fe){if(!ae)return;const xe=fe.clientX-ae.startX;let Le=ae.startW+xe;Le=Math.max(ae.minW,Math.min(Le,ae.maxW)),v.value=Le,R();try{localStorage.setItem("qc_split_width",String(Le))}catch{}}function ie(){ae&&(ae=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",se),document.addEventListener("mouseup",ie));function Y(fe){const xe=fe.target&&fe.target.closest?fe.target.closest("[data-split-resize]"):null;if(!xe)return;const Le=xe.closest("[data-split-root]");re(fe,Le)}typeof document<"u"&&document.addEventListener("mousedown",Y,!0);const oe={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},qe=e({});function ee(fe,xe){return oe[xe]||xe}function $(fe){const xe=y.find(h=>h.key===fe);if(!xe||!xe.subPages||!xe.subPages.length)return;if(!(qe.value[fe]||[]).length){const h=xe.subPages[0];qe.value=Object.assign({},qe.value,{[fe]:[{subPage:h,title:ee(fe,h)}]})}}function we(fe,xe){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=ee(fe,xe);if(Le){const L=Le.openTab(qe.value,fe,xe,h);qe.value=L.groups}else{const L=qe.value[fe]||[];L.some(G=>G.subPage===xe)||(qe.value=Object.assign({},qe.value,{[fe]:L.concat([{subPage:xe,title:h}])}))}i(fe,xe)}function F(fe,xe){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=d.value;let L=null;if(Le)L=Le.closeTab(qe.value,fe,xe,h),qe.value=L.groups;else{const de=qe.value[fe]||[];qe.value=Object.assign({},qe.value,{[fe]:de.filter(Me=>Me.subPage!==xe)})}if(!(qe.value[fe]||[]).length){$(fe);const de=y.find(Ce=>Ce.key===fe),Me=de&&de.subPages&&de.subPages[0];Me&&i(fe,Me);return}const ce=L?L.nextActive:null;ce&&i(fe,ce)}function ve(fe,xe){if(!(qe.value[fe]||[]).some(h=>h.subPage===xe)){we(fe,xe);return}i(fe,xe)}t([o,d],([fe,xe])=>{$(fe);const Le=qe.value[fe]||[];xe&&!Le.some(h=>h.subPage===xe)&&(qe.value=Object.assign({},qe.value,{[fe]:Le.concat([{subPage:xe,title:ee(fe,xe)}])}))},{immediate:!0});const me=function(fe){if(!(fe.ctrlKey&&fe.key==="Tab"))return;const xe=o.value,Le=qe.value[xe]||[];if(Le.length<=1)return;fe.preventDefault();const h=d.value,L=Math.max(0,Le.findIndex(de=>de.subPage===h)),G=fe.shiftKey?(L-1+Le.length)%Le.length:(L+1)%Le.length,ce=Le[G];ce&&ve(xe,ce.subPage)};window.addEventListener("keydown",me);const X=e({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),ue=e("light"),Ee=[45,220,0,140,270,320,180,25,250,-1],_e={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},Ne=e(45),pe=e(function(){const fe=window.__quantModules&&window.__quantModules.preferences;return fe&&fe.getPreference&&fe.getPreference("theme")||"system"}());(function(){const fe=window.__quantModules&&window.__quantModules.preferences,xe=fe&&fe.getPreference&&fe.getPreference("theme_hue");xe!=null&&xe!==""&&(Ne.value=parseInt(xe,10))})();const le=e("comfortable");(function(){const fe=window.__quantModules&&window.__quantModules.preferences;fe&&fe.applyDensity&&(le.value=fe.applyDensity()||"comfortable")})();function he(fe){return fe<0?"hsl(0, 0%, 46%)":"hsl("+fe+", 75%, 42%)"}function Oe(fe){return _e[fe]||"自定义 "+fe}const Ve=e(""),We=e([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),tt=e({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),be=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ye=e({day:[],week:[],month:[],year:[]}),Ae=e({});function Re(fe,xe){let Le=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(Le=window.__quantModules.themes.applyTheme(fe,xe)),ue.value=Le&&Le.mode?Le.mode:fe==="dark"||fe==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ye(fe,xe){const Le=window.__quantModules&&window.__quantModules.preferences;if(!(!Le||!Le.setPreferences))try{Le.setPreferences({theme:fe}),xe!=null&&xe!==""&&Le.setPreferences({theme_hue:parseInt(xe,10)})}catch{}}function Ue(fe,xe){Re(fe,xe),xe!=null&&xe!==""&&(Ne.value=parseInt(xe,10));const Le=window.__quantModules&&window.__quantModules.themes;let h=fe;Le&&Le.LEGACY_MAP&&Le.LEGACY_MAP[fe]&&(h=Le.LEGACY_MAP[fe][0]),h==="light"||h==="dark"||h==="system"?pe.value=h:pe.value=ue.value,h==="system"&&(h=ue.value),Ye(h,xe),r.value&&(fetch(`/api/users/${r.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:h})}),r.value.theme=h,localStorage.setItem("quant_user",JSON.stringify(r.value)))}function Qe(fe){const xe=window.__quantModules&&window.__quantModules.preferences,Le=xe&&xe.getPreference?xe.getPreference("theme_hue"):null;Ue(fe,Le)}function $e(fe){const xe=window.__quantModules&&window.__quantModules.preferences;!xe||!xe.applyDensity||(le.value=xe.applyDensity(fe)||"comfortable",xe.setPreference&&xe.setPreference("info_density",le.value))}function st(fe){Ne.value=parseInt(fe,10);const xe=window.__quantModules&&window.__quantModules.preferences,Le=xe&&xe.getPreference&&xe.getPreference("theme")||"light";Ue(Le,Ne.value)}function gt(){const fe=window.QuantSessionRestore;fe&&fe.save({page:o.value,sub:d.value||""})}return{backtestStrategies:P,backtestStrategy:w,backtestRange:M,backtestCapital:k,backtestRunning:_,backtestResult:T,backtestError:C,runBacktest:p,currentPageName:I,lazyTick:q,pageComp:D,showUserMenu:z,dashboardData:H,healthMetrics:K,dashboardDate:V,views:Z,currentView:U,statusFilter:j,stockDetailVisible:B,stockDetailTab:A,stockDetail:a,stockDetailLoading:S,detailDisplayMode:n,setDetailDisplayMode:N,isNarrow:f,detailSplitEnabled:J,splitWidth:v,setSplitWidth:b,SPLIT_DEFAULT_PCT:x,subPageNames:oe,tabGroups:qe,openTab:we,closeTab:F,activateTab:ve,_onTabKeydown:me,themes:X,currentTheme:ue,themeHues:Ee,themeHueNames:_e,themeHue:Ne,themeMode:pe,density:le,hueColor:he,hueName:Oe,applyTheme:Re,changeTheme:Ue,changeThemeMode:Qe,changeDensity:$e,changeThemeHue:st,searchKeyword:Ve,strategyList:We,strategyFilter:tt,strategyFilterOptions:be,strategyFilterCounts:ye,expandedStrategies:Ae,saveSessionState:gt}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.detail={create:function(s){const{ref:e,computed:m,nextTick:t,stockDetail:o,stockDetailTab:d,stockDetailVisible:y,stockDetailLoading:c,rememberDialogTrigger:i,getIsMobile:g,getIndexDetail:r,getIndexDetailVisible:P,getMarkKlineLoaded:w,getAiResult:M,getLoadLastEvaluation:k,getSelectedDateRef:_,getRefreshStockScore:T,getAnimateScoreEntrance:C}=s,u=e(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function l(se){u.value=!!se;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",se?"show":"hide")}catch{}}const p=m(()=>{const se=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return u.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...se]:se}),E=e("daily");(function(){try{const ie=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ie==="weekly"||ie==="monthly")&&(E.value=ie)}catch{}})();const I=e(!1),q=e(""),D=e(!1),z=e(!1),H=e({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),K=["MA5","MA10","MA20","MA60"],V=e(!1);let Z=0;async function U(se){if(!o.value)return!1;const ie=++Z;I.value=!0,E.value=se;try{const oe=await(await fetch(`/api/market/kline/${o.value.stock}?period=${se}&limit=60`)).json();if(!oe.success||!oe.data)throw new Error(oe.message||"数据获取失败");return q.value=oe.degraded_from?"分钟数据("+oe.degraded_from+")暂不可用, 已降级展示日线":"",w()(o.value.stock),ie!==Z?!1:(d.value!=="kline"||(z.value=!0,await t(),window.__quantModules.charts.renderKlineTo("stockKlineChart",oe.data,se,!1,{isMobile:g().value,onLegend:qe=>{Object.keys(H.value).forEach(ee=>{ee in qe&&(H.value[ee]=!!qe[ee])})}}),S()),!0)}catch(Y){return console.error("[kline] 加载失败:",o.value&&o.value.stock,se,Y),d.value==="kline"&&(z.value=!1,q.value="",ElementPlus.ElMessage.error("K线加载失败: "+(Y&&Y.message?Y.message:"数据源不可达，请重试"))),!1}finally{I.value=!1}}async function j(se){if(r().value){D.value=!0,E.value=se;try{const Y=await(await fetch(`/api/market/kline/${r().value.code}?period=${se}&limit=60`)).json();if(!Y.success||!Y.data)throw new Error(Y.message||"数据获取失败");V.value=!0,await t(),window.__quantModules.charts.renderKlineTo("indexKlineChart",Y.data,se,!0,{isMobile:g().value,onLegend:oe=>{Object.keys(H.value).forEach(qe=>{qe in oe&&(H.value[qe]=!!oe[qe])})}}),S()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{D.value=!1}}}async function B(se){if(!z.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await U(se)}async function A(se){if(!V.value){ElementPlus.ElMessage.info("请先加载K线");return}await j(se)}function a(se){const ie=(y.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(P().value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ie&&ie.dispatchAction({type:"legendToggleSelect",name:se})}function S(){["K线","MA5","MA10","MA20","MA60"].forEach(se=>{H.value[se]=!0})}async function n(se){E.value=se,await j(se)}async function f(){const se=await fetch("/api/system/metrics");if(!se.ok)throw new Error("metrics "+se.status);const ie=await se.json(),Y=Array.isArray(ie)?ie:ie&&ie.data_sources||[];healthMetrics.value=Y}let J=null;function N(se){J={code:se,ts:Date.now()}}function x(se){return!!(J&&Date.now()-J.ts<4e3&&(se==null||J.code===se))}let v=0;async function R(se){const ie=++v;i(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,""),M().value=null,E.value="daily",z.value=!1,d.value="kline",o.value=null,c.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),y.value=!0,t(()=>C()());try{const Y=await fetch(`/api/calendar/stock/${se}?date=${_().value}`);if(ie!==v)return;o.value=await Y.json(),o.value&&o.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,o.value.name)}catch{if(ie!==v)return;ElementPlus.ElMessage.error("加载失败"),o.value={stock:se,name:"",total_days:0}}finally{ie===v&&(c.value=!1)}setTimeout(async()=>{await U("daily"),T()()},500),k()(se)}const b={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},O={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function ae(se){return b[se]||"var(--text-tertiary)"}function re(se){return O[se]||"var(--bg-hover)"}return{klineShowMinutes:u,toggleKlineShowMinutes:l,klinePeriods:p,currentKlinePeriod:E,klineLoading:I,klineDegradeNote:q,indexKlineLoading:D,stockKlineLoaded:z,klineMaVisible:H,MA_LINES:K,indexKlineLoaded:V,loadStockKline:U,loadIndexKline:j,switchKlinePeriod:B,switchIndexKlinePeriod:A,toggleKlineMa:a,resetKlineMaVisible:S,loadIndexKlineWithPeriod:n,loadHealthMetrics:f,markExternalStock:N,externalStockActive:x,showStockDetail:R,levelColor:ae,levelBg:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.runtime={create:function(s){const{watch:e,onMounted:m,onUnmounted:t,lazyTick:o,currentPage:d,currentSubPage:y,hapticFeedback:c,allMenuDefs:i,saveSessionState:g,_onTabKeydown:r,handleGlobalKeydown:P,runOnMounted:w,startAutoRefresh:M,loadMerrillTimeline:k,cancelPoolSignals:_,loadDashboardCached:T,selectedDate:C,loadConsensusData:u,loadStrategyRecommendations:l,loadAiUsage:p,loadAiHistory:E,strategyFilterCounts:I,consensus:q,currentUser:D,loadUsers:z,loadFeishuConfig:H,loadTushareConfig:K,loadSystemStatus:V,loadAiConfig:Z,loadRateLimit:U,checkTushareConnection:j}=s;window.__quantGoPage=async(A,a)=>{try{const S=window.__lazyLoaders&&window.__lazyLoaders[A];S&&await S()}catch(S){console.warn("[lazy] 页面组件加载失败",A,S)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(S=>{S&&S.name&&!S.__quantRegistered&&(window.__quantApp.component(S.name,S),S.__quantRegistered=!0)}),o&&o.value++,d.value=A,a&&(y.value=a)};let B;e(d,async A=>{var a;c("light"),g();try{const S=i.find(function(n){return n.key===A});document.title=(S?S.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",A),A!=="calendar"&&typeof _=="function"&&_();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:A})}).catch(()=>{})}catch(S){console.warn("pageView track failed:",S)}if(B&&(clearInterval(B),B=null),A==="strategies")await T(),B=setInterval(()=>{T().catch(()=>{})},5*60*1e3);else if(A==="calendar")C.value&&await u();else if(A==="ai")l(),p(),await E();else if(A==="system"){if(!C.value){const n=await(await fetch("/api/dashboard")).json(),f=n.data||n;f.latest_date&&(C.value=f.latest_date)}if(C.value){const S=["day","week","month","year"];for(const n of S)try{const J=await(await fetch(`/api/view/${n}/${C.value}?status=all`)).json();I.value[n]=J.stocks||[]}catch(f){console.warn("loadConsensusData view load failed:",f)}(!q.value||q.value.length===0)&&(q.value=I.value.day||[])}((a=D.value)==null?void 0:a.role)==="admin"&&(await z(),await H(),await K(),await V(),await Z(),await U(),j(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(j,36e5)))}}),m(async()=>{await w()}),M(),k(),t(()=>{B&&clearInterval(B),window.removeEventListener("keydown",P),window.removeEventListener("keydown",r)})}}})();(function(){window.createAppLogic=function(){const{ref:s,computed:e,onMounted:m,onUnmounted:t,watch:o,nextTick:d}=Vue,y=window.__quantAppLogic.shell.create({ref:s,computed:e,watch:o}),{configChanged:c,locale:i,t:g,changeLanguage:r,sanitizeHtml:P,keyClick:w,rememberDialogTrigger:M,restoreDialogFocus:k,focusFirstInDialog:_,isOnline:T,hapticFeedback:C,sidebarCollapsed:u,toggleSidebar:l,groupsConfig:p,allMenuDefs:E,menus:I,loadGroupConfig:q,currentPage:D,currentSubPage:z,navMode:H,setNavMode:K,shortcutHelpItems:V,navigateTo:Z,ensureVisiblePage:U,currentUser:j}=y,B=useMerrillClock(),{merrillData:A,merrillStagesConfig:a,showMerrillDetail:S,merrillDetailData:n,merrillClockConfig:f,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:x,stages:v,indicatorList:R,dimensionScoreList:b,detailDimensionScoreList:O,confidenceColor:ae,timelineStages:re,clockPosition:se,merrillProgressStyle:ie,FULL_CYCLE_MONTHS:Y,getStageAngle:oe,getCycleProgress:qe,getCurrentStageMonths:ee,getStageTotalMonths:$,isStageCompleted:we,getCharLabel:F,getAssetName:ve,getRankColor:me,fetchMerrillStages:X,fetchMerrillClock:ue,merrillError:Ee,loadMerrillTimeline:_e,showTimelineStage:Ne,merrillTimeline:pe,timelineLoading:le,showStageDetail:he,saveMerrillClockConfig:Oe,doMerrillReevaluate:Ve,startAutoRefresh:We,stopAutoRefresh:tt,merrillSnapshots:be,merrillSnapshotsTotal:ye,fetchMerrillSnapshots:Ae}=B,Re=window.__quantAppLogic.workspace.create({ref:s,computed:e,watch:o,currentPage:D,currentSubPage:z,allMenuDefs:E,menus:I,navigateTo:Z,ensureVisiblePage:U,currentUser:j}),{backtestStrategies:Ye,backtestStrategy:Ue,backtestRange:Qe,backtestCapital:$e,backtestRunning:st,backtestResult:gt,backtestError:fe,runBacktest:xe,currentPageName:Le,lazyTick:h,pageComp:L,showUserMenu:G,dashboardData:ce,healthMetrics:de,dashboardDate:Me,views:Ce,currentView:ze,statusFilter:je,stockDetailVisible:Fe,stockDetailTab:Xe,stockDetail:ft,stockDetailLoading:et,detailDisplayMode:Ge,setDetailDisplayMode:pt,isNarrow:te,detailSplitEnabled:ne,splitWidth:Je,setSplitWidth:ht,SPLIT_DEFAULT_PCT:xt,subPageNames:nt,tabGroups:bt,openTab:Ct,closeTab:jt,activateTab:Dt,_onTabKeydown:Vt,themes:Pt,currentTheme:dt,themeHues:Ft,themeHueNames:Ht,themeHue:qt,themeMode:zt,density:Bt,hueColor:$t,hueName:At,applyTheme:Lt,changeTheme:W,changeThemeMode:Te,changeDensity:Ke,changeThemeHue:Ie,searchKeyword:it,strategyList:ut,strategyFilter:yt,strategyFilterOptions:Et,strategyFilterCounts:mt,expandedStrategies:Xt,saveSessionState:Zt}=Re,ea=window.__quantAppLogic.detail.create({ref:s,computed:e,nextTick:d,stockDetail:ft,stockDetailTab:Xe,stockDetailVisible:Fe,stockDetailLoading:et,rememberDialogTrigger:M,getIsMobile:()=>bn,getIndexDetail:()=>Ya,getIndexDetailVisible:()=>xa,getMarkKlineLoaded:()=>zs,getAiResult:()=>Ta,getLoadLastEvaluation:()=>za,getSelectedDateRef:()=>Nt,getRefreshStockScore:()=>Ca,getAnimateScoreEntrance:()=>qa}),{klineShowMinutes:Jt,toggleKlineShowMinutes:Kt,klinePeriods:ta,currentKlinePeriod:Wt,klineLoading:ca,klineDegradeNote:da,indexKlineLoading:ua,stockKlineLoaded:ot,klineMaVisible:_t,MA_LINES:Mt,indexKlineLoaded:Rt,loadStockKline:It,loadIndexKline:va,switchKlinePeriod:Q,switchIndexKlinePeriod:Se,toggleKlineMa:Ze,resetKlineMaVisible:aa,loadIndexKlineWithPeriod:Va,loadHealthMetrics:_a,markExternalStock:Js,externalStockActive:$s,showStockDetail:Fa,levelColor:Xs,levelBg:Zs}=ea,Ha=()=>Oa,en=()=>ds,tn=()=>zo,an=()=>fa,sn=()=>Ra,nn=()=>Nt,ln=window.__quantAppLogic.data.create({currentView:ze,statusFilter:je,dashboardData:ce,loadHealthMetrics:_a,getLoadDashboardData:Ha,getLastRefreshTime:en,getFetchPoolSignals:tn}),{loading:Ba,loadingView:on,viewCache:rn,dates:ma,selectedDate:Nt,lastLoadTime:Ka,consensus:ia,viewNote:cn,loadDates:Wa,refreshCalendarData:Ua,exportCSV:Ga,loadConsensusData:oa,loadDashboardCached:ka,consensusError:dn}=ln,un=window.__quantAppLogic.market.create({currentKlinePeriod:Wt,loadIndexKline:va,rememberDialogTrigger:M,menus:I,currentPage:D,currentSubPage:z,stockDetail:ft,selectedDate:Nt}),{marketData:vn,marketError:mn,indexDetailVisible:xa,indexDetail:Ya,indexAiResult:fn,indexAiLoading:pn,fetchMarketData:Sa,showIndexDetail:gn,loadCachedIndexEval:hn,doIndexAiEvaluate:yn,disposeStockKline:Qa,isMobile:bn,zoomKlineRange:wn,scoreAnimating:_n,scoreDelta:kn,scorePulse:xn,refreshStockScore:Ca,animateScoreEntrance:qa,onTouchStart:Sn,onTouchEnd:Cn}=un,qn=window.__quantAppLogic.ops.create({navigateTo:Z,currentPage:D,currentSubPage:z}),{feishuConfig:Ja,feishuTestStatus:En,feishuTestMessage:Mn,testFeishuWebhook:Tn,saveFeishuConfig:Pn,aiFabHidden:Dn,openAiFab:$a,strategyRecommendations:Rn,aiUsage:zn,loadStrategyRecommendations:Xa,loadAiUsage:Ea,sysMonitor:An,analyticsRank:Ln,analyticsDays:In,loadSysMonitor:Za,loadAnalytics:es,sysMonitorError:Nn,healthDetail:On,loadHealthDetail:ts,healthDetailError:jn,reviewTriggering:Vn,triggerMarketReview:Fn,factCheck:Hn,factCheckRunning:Bn,loadFactCheck:as,triggerFactCheck:Kn,factCheckError:Wn,backups:Un,backupCreating:Gn,loadBackups:ss,createBackup:Yn,restoreBackup:Qn,reportExporting:Jn,reportExportMsg:$n,exportReport:Xn,tourVisible:Zn,tourStep:el,tourSteps:tl,maybeShowTour:al,skipTour:sl,finishTour:nl,feedbackText:ll,feedbackSubmitting:il,submitFeedback:ol}=qn,rl=window.__quantAppLogic.nav.create({currentView:ze,selectedDate:Nt,dates:ma,loadConsensusData:oa,hapticFeedback:C}),{viewUnit:cl,datePickerType:dl,dateFormat:ul,canNavPrev:vl,canNavNext:ml,switchView:ns,navigateDate:ls,disabledDate:fl,onDateChange:pl}=rl,gl=window.__quantAppLogic.keys.create({menus:I,subPageNames:nt,navigateTo:Z,currentPage:D,currentSubPage:z,currentView:ze,navigateDate:ls,switchView:ns,getLoadDashboardData:Ha,refreshCalendarData:Ua,getLoadAiHistory:an,exportCSV:Ga,getShowBatchEvaluate:sn,openAiFab:$a,toggleSidebar:l,showStockDetail:Fa,getSelectedDate:nn,markExternalStock:Js}),{searchQuery:hl,searchStocks:yl,onSearchSelect:bl,shortcutHelpVisible:is,commandPaletteVisible:os,handleGlobalKeydown:rs}=gl,wl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ot,stockDetailVisible:Fe,stockDetailTab:Xe,stockDetail:ft,disposeStockKline:Qa}):{},{chatSessions:_l,chatHistoryView:kl,selectedChatIds:xl,expandedChatDates:Sl,expandedChatMonths:Cl,expandedChatStocks:ql,chatHistoryLoading:El,chatHistoryError:Ml,allChatSessionsFlat:Tl,chatGroupedByDate:Pl,chatGroupedByMonth:Dl,chatGroupedByStock:Rl,toggleSelectChat:zl,toggleSelectChatDate:Al,toggleSelectChatMonth:Ll,toggleSelectChatStock:Il,toggleChatDateExpand:Nl,toggleChatMonthExpand:Ol,toggleChatStockExpand:jl,selectAllChatSessions:Vl,deleteSelectedChatSessions:Fl,viewChatSession:Hl,loadChatHistory:cs,deleteChatSession:Bl,renderMarkdown:Kl,stockChatInput:Wl,stockChatMessages:Ul,stockChatLoading:Gl,stockChatError:Yl,askStockSend:Ql,askStockQuick:Jl}=wl,$l=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:j,applyTheme:Lt,allMenuDefs:E,loadGroupConfig:q}):{},{userList:Xl,userSearch:Zl,groupFilter:ei,userPageTab:ti,expandedGroups:ai,addMemberGroupMap:si,filteredUsers:ni,toggleGroupExpand:li,removeMemberFromGroupInline:ii,addMemberToGroupInline:oi,changeUserGroup:ri,showAddUser:ci,editingUser:di,userForm:ui,savingUser:vi,editingGroup:mi,menuConfigDialog:fi,memberDialog:pi,groupEditForm:gi,subPageCache:hi,showAddGroup:yi,addGroupForm:bi,savingGroup:wi,groupMembers:_i,addMemberUsername:ki,selectedMemberGroup:xi,subPageSectionExpanded:Si,toggleSubPageSection:Ci,getGroupMemberCount:qi,getMenuEnabledCount:Ei,groupCount:Mi,openMemberManager:Ti,loadGroupMembers:Pi,addMemberToGroup:Di,removeMemberFromGroup:Ri,availableUsersForGroup:zi,onParentToggle:Ai,openMenuConfig:Li,saveMenuConfig:Ii,deleteGroupConfig:Ni,createGroup:Oi,allGroups:ji,getGroupName:Vi,loadAllGroups:Ma,loadUsers:ga,editUser:Fi,saveUser:Hi,deleteUser:Bi,toggleUserEnabled:Ki,resetUserPassword:Wi}=$l,Ui=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:ia,currentPage:D,currentSubPage:z,dashboardData:ce,searchKeyword:it,statusFilter:je,strategyFilter:yt,strategyFilterCounts:mt}):{},{applyStrategyFilter:kp,statusCounts:Gi,stockPool:Yi,strategyDistribution:Qi,strategyPreviewCount:Ji,saveStrategyFilter:$i,filteredConsensusRank:Xi,currentPoolSize:Zi,filteredStrategyCounts:eo,poolChangeBadge:to,timeBarPercent:ao,lastRefreshTime:ds,navigateToStrategyFilter:so}=Ui,no=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:c,consensus:ia}):{},{aiResult:Ta,lastEvalTime:lo,evalHistoryComparison:io,checklistItems:oo,aiHistory:us,selectedHistoryIds:vs,expandedDates:ms,expandedMonths:ro,expandedStocks:fs,poolSignals:co,toggleMonthExpand:uo,aiHistoryView:vo,selectedWatchlistCodes:ps,showAutoEvaluateSettings:gs,savingConfig:hs,autoEvaluateScope:ys,aiVendors:mo,aiCatalog:fo,aiModelsError:po,testingAllModels:go,savingAiModels:ho,loadAiVendors:ha,loadAiCatalog:bs,saveAiVendors:ws,saveAiModels:yo,testVendorModel:bo,testAllVendorModels:wo,fetchVendorModels:_o,addVendorFromCatalog:ko,addCustomVendor:xo,addVendorModel:So,removeVendorModel:Co,removeVendor:qo,toggleVendorKeyReveal:Eo,toggleVendorEdit:Mo,autoEvaluateConfig:Pa,aiLoading:Da,aiEvalStage:_s,aiEvalElapsed:ks,aiEvalError:xs,showBatchEvaluate:Ra,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ts,batchResults:Ps,batchEvalErrors:Ds,aiConfig:Rs,selectedPreset:To,providerInfo:Po,aiPresets:xp,applyPreset:Do,onProviderChange:Ro,fetchPoolSignals:zo,cancelPoolSignals:Ao,loadLastEvaluation:za}=no,Lo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:j,selectedDate:Nt,stockDetail:ft,stockDetailTab:Xe,stockDetailVisible:Fe,stockDetailLoading:et,stockKlineLoaded:ot,viewCache:rn,animateScoreEntrance:qa,loadStockKline:It,refreshStockScore:Ca,disposeStockKline:Qa,aiHistory:us,aiLoading:Da,aiEvalStage:_s,aiEvalElapsed:ks,aiEvalError:xs,aiResult:Ta,loadLastEvaluation:za,autoEvaluateConfig:Pa,autoEvaluateScope:ys,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ts,batchResults:Ps,batchEvalErrors:Ds,expandedDates:ms,expandedStocks:fs,savingConfig:hs,selectedHistoryIds:vs,selectedWatchlistCodes:ps,showAutoEvaluateSettings:gs,showBatchEvaluate:Ra}):{},{quickEvalStock:Io,evalStrategy:No,watchlistSort:Oo,watchlist:jo,watchlistCodes:Vo,sortedWatchlist:Fo,getWatchlistScore:Ho,getLatestScore:Sp,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:zs,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,dataRefreshConfig:Qo,dataRefreshReloading:Jo,dataRefreshSaving:$o,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:nr,doAiEvaluate:lr,loadAiHistory:fa,deleteSingleHistory:ir,toggleSelectHistory:or,clearSelection:rr,clearWatchlistSelection:cr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,batchRemoveWatchlist:vr,toggleSelectWatchlist:mr,selectAllHistory:fr,selectAllWatchlist:pr,deleteSelectedHistory:gr,loadAutoEvaluateConfig:As,saveAutoEvaluateConfig:hr,loadWatchlist:Ls,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,toggleWatchlist:_r,showStockKline:kr,preloadingKline:xr,preloadWatchlistKline:Is,watchlistEvaluate:Sr,batchEvaluateWatchlist:Cr,batchEvaluateSelected:qr,searchStockForWatchlist:Er,loadDataRefreshConfig:Ns,saveDataRefreshConfig:Mr,triggerDataReload:Tr,triggerDataPull:Pr,dataPullRunning:Dr,groupedByDate:Rr,aiHistoryByStock:zr,groupedByMonth:Ar,aiHistoryStockCount:Lr,scoreDistribution:Ir,quickEvaluate:Nr,toggleDateExpand:Or,toggleSelectDate:jr,toggleSelectMonth:Vr,toggleStockExpand:Fr,toggleSelectStock:Hr,registerTrendChart:Br,viewAiResult:Kr,doBatchEvaluate:Wr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Qr,disconnectRealtimeQuotes:Jr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc}=Lo,nc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Ye}):{},{btStrategyOptions:lc,btSelectedStrategies:ic,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:fc,btMetrics:pc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:_c,registerBacktestNavChart:kc,btFmtNum:xc}=nc,Sc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:c,aiConfig:Rs,aiLoading:Da,feishuConfig:Ja,currentTheme:dt,changeTheme:W,autoEvaluateConfig:Pa,currentUser:j,strategyFilter:yt,applyTheme:Lt,dashboardData:ce,lastRefreshTime:ds,saveAiModels:yo}):{},{configSaving:Cc,globalConfigDirty:qc,lastSavedTime:Ec,feishuConfigOriginal:Cp,aiConfigOriginal:qp,tushareConfigOriginal:Ep,tushareConfig:Mc,tushareStatus:Tc,datasourceConfig:Pc,datasourceStatus:Dc,syncingData:Rc,stockCount:zc,tradeDateCount:Ac,aiStatus:Lc,appVersion:Os,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:jc,loadRateLimit:Aa,saveRateLimit:Vc,saveAiConfig:Fc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,checkTushareConnection:La,syncStockData:Yc,loadTushareConfig:js,loadDatasourceConfig:Vs,saveDatasourceConfig:Qc,testDatasource:Jc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,loadFeishuConfig:Ia,loadAiConfig:ya,loadUserConfig:Fs,loadSystemStatus:Na,loadDashboardData:Oa,overviewError:Zc,feishuConfigError:ed}=Sc,td=window.__quantAppLogic.auth.create({currentUser:j,loadUserConfig:Fs,loadDates:Wa,loadDashboardData:Oa,loadDashboardCached:ka,loadHealthMetrics:_a,loadConsensusData:oa,applyTheme:Lt,maybeShowTour:al,loadAiVendors:ha,loadGroupConfig:q,groupsConfig:p}),{loginForm:Hs,logining:Bs,guestLogining:Ks,showChangePassword:ad,changePasswordForm:sd,changingPassword:nd,showSetupWizard:Ws,setupForm:ld,setupStep:id,checkSetupWizard:od,completeSetupWizard:rd,resetSetupWizard:cd,handleLogin:dd,handleGuestLogin:ud,handleLogout:vd,doChangePassword:md}=td;window.__quantAppLogic.watch.register({strategyFilter:yt,currentView:ze,statusFilter:je,currentPage:D,currentSubPage:z,menus:I,currentUser:j,strategyFilterCounts:mt,lazyTick:h,dates:ma,selectedDate:Nt,consensus:ia,loadConsensusData:oa,fetchMerrillClock:ue,fetchMarketData:Sa,loadWatchlist:Ls,loadAiHistory:fa,preloadWatchlistKline:Is,loadChatHistory:cs,loadSystemStatus:Na,checkTushareConnection:La,loadSysMonitor:Za,loadAnalytics:es,loadHealthDetail:ts,loadHealthMetrics:_a,loadAiUsage:Ea,loadFactCheck:as,loadAutoEvaluateConfig:As,loadDatasourceConfig:Vs,loadFeishuConfig:Ia,loadAiConfig:ya,loadAiVendors:ha,loadRateLimit:Aa,loadDataRefreshConfig:Ns,loadBackups:ss,loadAllGroups:Ma,loadUsers:ga,stockDetailTab:Xe,stockDetailVisible:Fe,stockKlineLoaded:ot,loadStockKline:It,currentKlinePeriod:Wt,showMerrillDetail:S,indexDetailVisible:xa,restoreDialogFocus:k});const fd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:rs,applyTheme:Lt,menus:I,currentPage:D,currentSubPage:z,currentView:ze,currentKlinePeriod:Wt,selectedDate:Nt,dates:ma,loadDates:Wa,loadConsensusData:oa,loadDashboardCached:ka,appVersion:Os,themes:Pt,fetchMarketData:Sa,fetchMerrillStages:X,fetchMerrillClock:ue,loadMerrillTimeline:_e,showTimelineStage:Ne,merrillTimeline:pe,timelineLoading:le,loadAiConfig:ya,loadAiVendors:ha,loadAiCatalog:bs,currentUser:j,loadUserConfig:Fs,loadAutoEvaluateConfig:As,loadGroupConfig:q,loadUsers:ga,loadAllGroups:Ma,loadAiHistory:fa}),{runOnMounted:pd}=fd;window.__quantAppLogic.runtime.create({watch:o,onMounted:m,onUnmounted:t,lazyTick:h,currentPage:D,currentSubPage:z,hapticFeedback:C,allMenuDefs:E,saveSessionState:Zt,_onTabKeydown:Vt,handleGlobalKeydown:rs,runOnMounted:pd,startAutoRefresh:We,loadMerrillTimeline:_e,cancelPoolSignals:Ao,loadDashboardCached:ka,selectedDate:Nt,loadConsensusData:oa,loadStrategyRecommendations:Xa,loadAiUsage:Ea,loadAiHistory:fa,strategyFilterCounts:mt,consensus:ia,currentUser:j,loadUsers:ga,loadFeishuConfig:Ia,loadTushareConfig:js,loadSystemStatus:Na,loadAiConfig:ya,loadRateLimit:Aa,checkTushareConnection:La});function gd(ba,hd=2){return ba==null||ba===""||isNaN(Number(ba))?"--":Number(ba).toFixed(hd)}const Us={currentPage:D,pageComp:L,currentSubPage:z,sidebarCollapsed:u,menus:I,navMode:H,setNavMode:K,tabGroups:bt,openTab:Ct,closeTab:jt,activateTab:Dt,fmtNum:gd,sanitizeHtml:P,keyClick:w,isOnline:T,currentUser:j,allMenuDefs:E,t:g,locale:i,changeLanguage:r,currentPageName:Le,subPageNames:nt,searchQuery:hl,searchStocks:yl,onSearchSelect:bl,selectedDate:Nt,onDateChange:pl,disabledDate:fl,refreshCalendarData:Ua,exportCSV:Ga,viewNote:cn,loading:Ba,lastLoadTime:Ka,resetSetupWizard:cd,showChangePassword:ad,themes:Pt,currentTheme:dt,changeTheme:W,changeThemeMode:Te,changeThemeHue:Ie,handleLogout:vd,themeHues:Ft,themeHueNames:Ht,themeHue:qt,themeMode:zt,hueColor:$t,hueName:At,density:Bt,changeDensity:Ke,marketData:vn,marketError:mn,merrillData:A,merrillError:Ee,merrillTimeline:pe,timelineLoading:le,merrillStagesConfig:a,fetchMerrillStages:X,merrillSnapshots:be,merrillSnapshotsTotal:ye,healthMetrics:de,feishuConfig:Ja,feishuTestStatus:En,feishuTestMessage:Mn,shortcutHelpVisible:is,shortcutHelpItems:V,commandPaletteVisible:os,tourVisible:Zn,tourStep:el,tourSteps:tl,skipTour:sl,finishTour:nl,backups:Un,backupCreating:Gn,loadBackups:ss,createBackup:Yn,restoreBackup:Qn,reportExporting:Jn,reportExportMsg:$n,exportReport:Xn,sysMonitor:An,analyticsRank:Ln,analyticsDays:In,loadSysMonitor:Za,loadAnalytics:es,sysMonitorError:Nn,healthDetail:On,loadHealthDetail:ts,healthDetailError:jn,reviewTriggering:Vn,triggerMarketReview:Fn,factCheck:Hn,factCheckRunning:Bn,loadFactCheck:as,triggerFactCheck:Kn,factCheckError:Wn,strategyRecommendations:Rn,aiUsage:zn,loadStrategyRecommendations:Xa,loadAiUsage:Ea,aiFabHidden:Dn,openAiFab:$a,feedbackText:ll,feedbackSubmitting:il,submitFeedback:ol,backtestStrategies:Ye,backtestStrategy:Ue,backtestRange:Qe,backtestCapital:$e,backtestRunning:st,backtestResult:gt,backtestError:fe,runBacktest:xe,btStrategyOptions:lc,btSelectedStrategies:ic,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:fc,btMetrics:pc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:_c,registerBacktestNavChart:kc,btFmtNum:xc,fetchMarketData:Sa,fetchMerrillClock:ue,testFeishuWebhook:Tn,saveFeishuConfig:Pn,merrillClockConfig:f,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:x,saveMerrillClockConfig:Oe,doMerrillReevaluate:Ve,dataRefreshConfig:Qo,dataRefreshReloading:Jo,dataRefreshSaving:$o,loadDataRefreshConfig:Ns,saveDataRefreshConfig:Mr,triggerDataReload:Tr,triggerDataPull:Pr,dataPullRunning:Dr,indexDetailVisible:xa,indexDetail:Ya,indexAiResult:fn,indexAiLoading:pn,loadCachedIndexEval:hn,showIndexDetail:gn,doIndexAiEvaluate:yn,klinePeriods:ta,currentKlinePeriod:Wt,klineLoading:ca,indexKlineLoading:ua,stockKlineLoaded:ot,indexKlineLoaded:Rt,klineDegradeNote:da,klineShowMinutes:Jt,toggleKlineShowMinutes:Kt,loadStockKline:It,switchKlinePeriod:Q,loadIndexKline:va,switchIndexKlinePeriod:Se,zoomKlineRange:wn,MA_LINES:Mt,klineMaVisible:_t,toggleKlineMa:Ze,scoreAnimating:_n,scoreDelta:kn,scorePulse:xn,refreshStockScore:Ca,animateScoreEntrance:qa,showMerrillDetail:S,merrillDetailData:n,showStageDetail:he,getCharLabel:F,getAssetName:ve,getRankColor:me,levelColor:Xs,levelBg:Zs,timelineStages:re,getStageAngle:oe,getCycleProgress:qe,getCurrentStageMonths:ee,getStageTotalMonths:$,isStageCompleted:we,stages:v,indicatorList:R,dimensionScoreList:b,confidenceColor:ae,views:Ce,currentView:ze,statusFilter:je,loginForm:Hs,logining:Bs,guestLogining:Ks,dashboardData:ce,loadingView:on,dates:ma,consensus:ia,searchKeyword:it,stockDetailVisible:Fe,stockDetailTab:Xe,stockDetail:ft,stockDetailLoading:et,detailDisplayMode:Ge,setDetailDisplayMode:pt,isNarrow:te,detailSplitEnabled:ne,splitWidth:Je,setSplitWidth:ht,SPLIT_DEFAULT_PCT:xt,aiLoading:Da,aiEvalStage:_s,aiEvalElapsed:ks,aiEvalError:xs,showBatchEvaluate:Ra,batchStocks:Ss,batchRunning:Cs,batchTotal:qs,batchCompleted:Es,batchCurrent:Ms,batchStatuses:Ts,batchResults:Ps,batchEvalErrors:Ds,aiConfig:Rs,userList:Xl,showAddUser:ci,editingUser:di,userForm:ui,savingUser:vi,userSearch:Zl,filteredUsers:ni,groupFilter:ei,userPageTab:ti,expandedGroups:ai,addMemberGroupMap:si,toggleGroupExpand:li,removeMemberFromGroupInline:ii,addMemberToGroupInline:oi,changeUserGroup:ri,statusCounts:Gi,stockPool:Yi,poolSignals:co,aiResult:Ta,aiHistory:us,groupedByDate:Rr,groupedByMonth:Ar,expandedDates:ms,expandedMonths:ro,aiHistoryByStock:zr,aiHistoryStockCount:Lr,expandedStocks:fs,aiHistoryView:vo,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:nr,scoreDistribution:Ir,quickEvalStock:Io,evalStrategy:No,checklistItems:oo,evalHistoryComparison:io,quickEvaluate:Nr,selectedHistoryIds:vs,showAutoEvaluateSettings:gs,savingConfig:hs,autoEvaluateConfig:Pa,autoEvaluateScope:ys,strategyList:ut,toggleDateExpand:Or,toggleMonthExpand:uo,toggleSelectDate:jr,toggleSelectMonth:Vr,toggleSelectStock:Hr,toggleStockExpand:Fr,registerTrendChart:Br,selectedWatchlistCodes:ps,clearWatchlistSelection:cr,toggleSelectWatchlist:mr,selectAllHistory:fr,selectAllWatchlist:pr,batchRemoveWatchlist:vr,batchEvaluateSelected:qr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,viewUnit:cl,datePickerType:dl,dateFormat:ul,canNavPrev:vl,canNavNext:ml,handleLogin:dd,handleGuestLogin:ud,switchView:ns,navigateDate:ls,navigateTo:Z,loadDashboardData:Oa,loadConsensusData:oa,showStockDetail:Fa,consensusError:dn,overviewError:Zc,externalStockActive:$s,doAiEvaluate:lr,doBatchEvaluate:Wr,loadAiHistory:fa,loadLastEvaluation:za,lastEvalTime:lo,viewAiResult:Kr,saveAiConfig:Fc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,configSaving:Cc,configChanged:c,watchlist:jo,watchlistCodes:Vo,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,watchlistSort:Oo,sortedWatchlist:Fo,getWatchlistScore:Ho,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:zs,loadWatchlist:Ls,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,searchStockForWatchlist:Er,toggleWatchlist:_r,batchEvaluateWatchlist:Cr,watchlistEvaluate:Sr,showStockKline:kr,preloadWatchlistKline:Is,preloadingKline:xr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Qr,disconnectRealtimeQuotes:Jr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc,toggleSelectHistory:or,clearSelection:rr,deleteSingleHistory:ir,deleteSelectedHistory:gr,saveAutoEvaluateConfig:hr,editUser:Fi,saveUser:Hi,deleteUser:Bi,loadUsers:ga,allGroups:ji,loadAllGroups:Ma,getGroupName:Vi,toggleUserEnabled:Ki,resetUserPassword:Wi,selectedPreset:To,applyPreset:Do,onProviderChange:Ro,providerInfo:Po,globalConfigDirty:qc,lastSavedTime:Ec,tushareConfig:Mc,tushareStatus:Tc,syncingData:Rc,stockCount:zc,tradeDateCount:Ac,aiStatus:Lc,appVersion:Os,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:jc,loadRateLimit:Aa,saveRateLimit:Vc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,syncStockData:Yc,loadTushareConfig:js,loadFeishuConfig:Ia,loadSystemStatus:Na,loadAiConfig:ya,feishuConfigError:ed,aiVendors:mo,aiCatalog:fo,aiModelsError:po,testingAllModels:go,savingAiModels:ho,loadAiVendors:ha,loadAiCatalog:bs,saveAiVendors:ws,saveAiModels:ws,testVendorModel:bo,testAllVendorModels:wo,fetchVendorModels:_o,addVendorFromCatalog:ko,addCustomVendor:xo,addVendorModel:So,removeVendorModel:Co,removeVendor:qo,toggleVendorKeyReveal:Eo,toggleVendorEdit:Mo,checkTushareConnection:La,datasourceConfig:Pc,datasourceStatus:Dc,loadDatasourceConfig:Vs,saveDatasourceConfig:Qc,testDatasource:Jc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,strategyFilter:yt,strategyFilterOptions:Et,strategyFilterCounts:mt,strategyPreviewCount:Ji,saveStrategyFilter:$i,filteredConsensusRank:Xi,currentPoolSize:Zi,filteredStrategyCounts:eo,strategyDistribution:Qi,expandedStrategies:Xt,poolChangeBadge:to,timeBarPercent:ao,navigateToStrategyFilter:so,showUserMenu:G,toggleSidebar:l,groupsConfig:p,loadGroupConfig:q,editingGroup:mi,groupEditForm:gi,showAddGroup:yi,addGroupForm:bi,savingGroup:wi,menuConfigDialog:fi,memberDialog:pi,groupMembers:_i,addMemberUsername:ki,selectedMemberGroup:xi,subPageSectionExpanded:Si,toggleSubPageSection:Ci,getGroupMemberCount:qi,getMenuEnabledCount:Ei,groupCount:Mi,openMemberManager:Ti,loadGroupMembers:Pi,addMemberToGroup:Di,removeMemberFromGroup:Ri,availableUsersForGroup:zi,subPageCache:hi,onParentToggle:Ai,openMenuConfig:Li,saveMenuConfig:Ii,deleteGroupConfig:Ni,createGroup:Oi,changePasswordForm:sd,changingPassword:nd,doChangePassword:md,showSetupWizard:Ws,setupForm:ld,setupStep:id,checkSetupWizard:od,completeSetupWizard:rd,chatSessions:_l,chatHistoryView:kl,selectedChatIds:xl,expandedChatDates:Sl,expandedChatMonths:Cl,expandedChatStocks:ql,chatHistoryLoading:El,chatHistoryError:Ml,allChatSessionsFlat:Tl,chatGroupedByDate:Pl,chatGroupedByMonth:Dl,chatGroupedByStock:Rl,toggleSelectChat:zl,toggleSelectChatDate:Al,toggleSelectChatMonth:Ll,toggleSelectChatStock:Il,toggleChatDateExpand:Nl,toggleChatMonthExpand:Ol,toggleChatStockExpand:jl,selectAllChatSessions:Vl,deleteSelectedChatSessions:Fl,viewChatSession:Hl,loadChatHistory:cs,deleteChatSession:Bl,renderMarkdown:Kl,stockChatInput:Wl,stockChatMessages:Ul,stockChatLoading:Gl,stockChatError:Yl,askStockSend:Ql,askStockQuick:Jl,onTouchStart:Sn,onTouchEnd:Cn,hapticFeedback:C};let at=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(at=window.QuantStateRegistry.createStateRegistry(),at.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),at.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),at.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),at.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),at.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),at.attach("theme","currentTheme",dt),at.attach("theme","themeMode",zt),at.attach("theme","themeHue",qt),at.attach("theme","density",Bt),at.attach("theme","currentKlinePeriod",Wt),at.attach("auth","currentUser",j),at.attach("auth","loginForm",Hs),at.attach("auth","logining",Bs),at.attach("auth","guestLogining",Ks),at.attach("auth","showSetupWizard",Ws),at.attach("prefs","navMode",H),at.attach("prefs","detailDisplayMode",Ge),at.attach("prefs","splitWidth",Je),at.attach("prefs","sidebarCollapsed",u),at.attach("prefs","klineShowMinutes",Jt),at.attach("ui","currentPage",D),at.attach("ui","currentSubPage",z),at.attach("ui","currentView",ze),at.attach("ui","showUserMenu",G),at.attach("ui","searchKeyword",it),at.attach("ui","shortcutHelpVisible",is),at.attach("ui","commandPaletteVisible",os),at.attach("page","loading",Ba),at.attach("page","dates",ma),at.attach("page","selectedDate",Nt),at.attach("page","consensus",ia),at.attach("page","dashboardData",ce),at.attach("page","lastLoadTime",Ka),Us.stateRegistry=at),Us}})();na.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=Yv;window.__quantComponents.Header=Ym;window.__quantComponents.SubNav=rf;window.__quantComponents.MobileNav=Ef;window.__quantComponents.StockList=op;window.__quantComponents.DetailSplit=up;window.__quantComponents.TopTabs=wp;window.__quantComponents.AppIcon=na;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default _p();
