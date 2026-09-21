var Td=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as Dd,L as me,O as ua,Z as Pd,au as Ut,M as he,P as Ce,aW as Rd,a0 as Fe,_ as He,F as ot,al as _t,S as it,a1 as ct,X as da,ai as Lt,q as Da,o as Ka,a8 as rs,r as Rt,e as at,av as zd,Y as La,$ as xa,R as Ad,aC as ca,T as Ld,Q as ia,p as Id,n as Nd}from"./vendor-vue-DDF9zi1T.js";import{e as Od,E as jd,a as Vd,b as Fd,c as Hd,z as Bd}from"./vendor-ep-VOop1zGa.js";import{C as Kd,a as Wd,W as Ud,I as Gd,S as Yd,B as Jd,F as Qd,b as $d,c as Xd,d as Zd,e as eu,f as tu,P as au,g as su,h as nu,i as iu,T as lu,j as ou,L as ru,k as cu,G as du,U as uu,l as vu,m as mu,n as pu,D as fu,o as gu,p as hu,M as yu,q as bu,R as wu,r as ku,s as _u,K as xu,t as Su,u as Cu,v as qu,w as Eu,x as Mu,y as Tu,z as Du,A as Pu,E as Ru,H as zu,O as Au,J as Lu,N as Iu,Q as Nu,V as Ou,X as ju,Y as Vu,Z as Fu,_ as Hu,$ as Bu,a0 as Ku,a1 as Wu,a2 as Uu,a3 as Gu,a4 as Yu,a5 as Ju,a6 as Qu,a7 as $u,a8 as Xu,a9 as Zu,aa as ev,ab as tv,ac as av,ad as sv,ae as nv,af as iv,ag as lv,ah as ov,ai as rv,aj as cv,ak as dv,al as uv,am as vv,an as mv,ao as pv,ap as fv,aq as gv,ar as hv,as as yv,at as bv,au as wv,av as kv,aw as _v,ax as xv,ay as Sv,az as Cv,aA as qv,aB as Ev,aC as Mv,aD as Tv,aE as Dv,aF as Pv,aG as Rv,aH as zv,aI as Av,aJ as Lv,aK as Iv,aL as Nv,aM as Ov,aN as jv,aO as Vv,aP as Fv,aQ as Hv}from"./vendor-lucide-DidEUx9K.js";var Pf=Td((Bf,Ie)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))e(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const A of g.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&e(A)}).observe(document,{childList:!0,subtree:!0});function b(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function e(d){if(d.ep)return;d.ep=!0;const g=b(d);fetch(d.href,g)}})();window.Vue=Dd;const va=Od||{};window.ElementPlus=va;va.ElMessage=va.ElMessage||jd;va.ElMessageBox=va.ElMessageBox||Vd;va.ElNotification=va.ElNotification||Fd;va.ElLoading=va.ElLoading||Hd;window.ElementPlusLocaleZhCn={default:Bd};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},b={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,h,n){return"hsl("+s+", "+h+"%, "+n+"%)"}function d(s,h,n){h=h/100,n=n/100;const f=function(p){return(p+s/30)%12},X=h*Math.min(n,1-n),D=function(p){return n-X*Math.max(-1,Math.min(f(p)-3,Math.min(9-f(p),1)))};return Math.round(255*D(0))+", "+Math.round(255*D(8))+", "+Math.round(255*D(4))}const g=5;function A(s,h,n){return d(s,h,n).split(",").map(function(f){return parseInt(f,10)})}function y(s){const h=function(n){return n=n/255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*h(s[0])+.7152*h(s[1])+.0722*h(s[2])}function c(s,h){const n=y(s),f=y(h),X=Math.max(n,f),D=Math.min(n,f);return(X+.05)/(D+.05)}function w(s,h,n){for(var f=8,X=92,D=0;D<26;D++){var p=(f+X)/2;y(A(s,h,p))<n?f=p:X=p}return Math.round(X*10)/10}function o(s,h,n,f,X){let D=38,p=76;for(let r=0;r<24;r++){const k=(D+p)/2;c(A(s,f,k),A(s,h,n))>=X?p=k:D=k}return Math.round(p*10)/10}function C(s,h){var n={};return h==="light"?(n["--qc-neutral-50"]=e(s,18,98),n["--qc-neutral-100"]=e(s,16,95),n["--qc-neutral-200"]=e(s,14,90),n["--qc-neutral-300"]=e(s,12,83),n["--qc-neutral-400"]=e(s,10,68),n["--qc-neutral-500"]=e(s,10,53),n["--qc-neutral-600"]=e(s,10,40),n["--qc-neutral-700"]=e(s,10,30),n["--qc-neutral-800"]=e(s,10,20),n["--qc-neutral-900"]=e(s,10,12),n["--qc-background"]=e(s,18,98),n["--qc-muted"]=e(s,16,95),n["--qc-border"]=e(s,12,72),n["--chart-axis"]=e(s,12,55),n["--chart-split"]=e(s,10,88),n["--qc-foreground"]=e(s,10,12),n["--qc-muted-foreground"]=e(s,9,38),n["--qc-nav-item-default"]=e(s,9,38),n["--qc-nav-item-hover"]=e(s,10,12),n["--qc-nav-group-label"]=e(s,9,40),n["--qc-nav-bg"]="#ffffff",n["--bg-page"]=e(s,20,97),n["--bg-stripe"]=e(s,20,97),n["--bg-card-header"]=e(s,24,96),n["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",n["--bg-hover"]=e(s,26,94),n["--bg-tertiary"]=e(s,14,93),n["--badge-gold-bg"]=e(s,26,96),n["--gold-bg"]=e(s,20,97),n["--border-light"]=e(s,22,89),n["--border-base"]=e(s,24,79),n["--border-color"]=e(s,14,88),n["--text-primary"]=e(s,12,12),n["--text-secondary"]=e(s,12,32),n["--text-tertiary"]=e(s,14,40),n["--text-disabled"]=e(s,9,q(s,9,P(s,18,98),25,70,!0,3.2)),n["--qc-card"]="#ffffff",n["--qc-popover"]="#ffffff",n["--qc-nav-border"]=e(s,12,72),n["--qc-nav-item-hover-bg"]=e(s,16,95),n["--qc-overlay"]="rgba(31, 29, 26, 0.5)",n["--bg-card"]="#ffffff",n["--surface"]="#ffffff",n["--border-heavy"]=e(s,22,72),n["--surface-canvas"]=e(s,18,98),n["--surface-card"]="#ffffff",n["--surface-raised"]="#ffffff",n["--surface-sunken"]=e(s,16,96),n["--surface-input"]="#ffffff",n["--surface-hover"]=e(s,26,94),n["--border-strong"]=e(s,22,72),n["--scrollbar-thumb"]="rgba("+d(s,12,72)+", 0.5)",n["--bg-page-rgb"]=d(s,20,97)):(n["--qc-background"]=e(s,10,8),n["--qc-card"]=e(s,11,11),n["--qc-popover"]=e(s,11,11),n["--qc-muted"]=e(s,12,14),n["--qc-border"]=e(s,14,30),n["--chart-axis"]=e(s,16,52),n["--chart-split"]=e(s,14,26),n["--qc-nav-bg"]=e(s,10,9),n["--qc-nav-border"]=e(s,13,22),n["--qc-nav-item-hover-bg"]=e(s,12,14),n["--bg-page"]=e(s,10,8),n["--bg-card"]=e(s,11,11),n["--bg-card-header"]=e(s,12,14),n["--bg-stripe"]=e(s,10,9),n["--bg-hover"]=e(s,12,14),n["--bg-tertiary"]=e(s,12,14),n["--border-light"]=e(s,13,18),n["--border-base"]=e(s,14,26),n["--border-heavy"]=e(s,16,38),n["--border-color"]=e(s,13,22),n["--surface"]=e(s,11,11),n["--surface-canvas"]=e(s,10,8),n["--surface-card"]=e(s,11,11),n["--surface-raised"]=e(s,12,14),n["--surface-sunken"]=e(s,12,9),n["--surface-input"]=e(s,12,9),n["--surface-hover"]=e(s,12,15),n["--border-strong"]=e(s,16,42),n["--scrollbar-thumb"]="rgba("+d(s,16,52)+", 0.5)",n["--bg-page-rgb"]=d(s,10,8),n["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),n}const x=4.6;var T=[255,255,255];function S(s){return d(s,10,8).split(",").map(function(h){return parseInt(h,10)})}function q(s,h,n,f,X,D,p){for(var r=p||x,k=f,u=X,R=0;R<24;R++){var le=(k+u)/2,G=c(A(s,h,le),n)>=r;D?G?k=le:u=le:G?u=le:k=le}return Math.round((D?k:u)*10)/10}function P(s,h,n){return d(s,h,n).split(",").map(function(f){return parseInt(f,10)})}function E(s){const h=w(s,75,.18),n=w(s,75,.26),f=w(s,70,.36),X=w(s,85,.12),D=d(s,75,h),p=q(s,68,T,14,62,!0),r=Math.max(12,p-5),k=Math.max(10,p-11),u=d(s,16,95).split(",").map(function(W){return parseInt(W,10)}),R=d(s,85,92).split(",").map(function(W){return parseInt(W,10)}),le=q(s,78,u,10,58,!0,4.6),G=q(s,80,R,10,58,!0,4.6),M=Math.min(32,q(s,80,T,8,60,!0,4.6));return{...C(s,"light"),"--primary-color":e(s,75,h),"--primary-rgb":D,"--color-primary":e(s,75,h),"--qc-primary":e(s,75,h),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,f),"--qc-primary-500":e(s,75,n),"--qc-primary-600":e(s,80,h),"--qc-primary-700":e(s,85,X),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--text-link":e(s,78,le),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+D+", 0.08)","--btn-primary-bg":e(s,80,M),"--btn-primary-border":e(s,80,M),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+D+", 0.08)","--btn-primary-plain-border":"rgba("+D+", 0.25)","--btn-primary-plain-color":e(s,80,le),"--btn-primary-plain-hover-bg":"rgba("+D+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,le),"--gradient":"linear-gradient(135deg, "+e(s,80,k)+" 0%, "+e(s,76,r)+" 50%, "+e(s,70,p)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,r)+" 0%, "+e(s,85,k)+" 100%)","--primary-text":e(s,78,le),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,g)+5))+" 0%, "+e(s,58,o(s,45,14,58,g))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,G),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,G),"--qc-ring":e(s,75,q(s,75,P(s,18,98),25,70,!0,3.2)),"--brand-soft-text":e(s,80,q(s,80,P(s,80,84),10,58,!0,4.6)),"--border-control":e(s,16,q(s,16,P(s,18,98),30,80,!0,3.2))}}function v(s){const h=w(s,85,.34),n=w(s,85,.46),f=d(s,85,h),X=q(s,80,S(s),30,92,!1),D=Math.min(94,X+8),p=Math.min(96,X+16),r=P(s,55,22),k=P(s,10,9),u=f.split(",").map(function(ie){return parseInt(ie,10)}),R=[0,1,2].map(function(ie){return Math.round(u[ie]*.12+k[ie]*.88)}),le=q(s,85,R,45,96,!1,4.6),G=q(s,85,r,45,96,!1,4.6),M=Math.min(94,q(s,92,r,45,96,!1,4.6)),W=Math.min(96,M+6);return{...C(s,"dark"),"--primary-color":e(s,85,h),"--primary-rgb":f,"--color-primary":e(s,85,h),"--qc-primary":e(s,90,h),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,n),"--qc-primary-600":e(s,90,h),"--qc-primary-700":e(s,92,M),"--qc-primary-800":e(s,90,W),"--qc-primary-900":e(s,92,Math.min(98,W+8)),"--text-link":e(s,85,G),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+f+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+f+", 0.08)","--btn-primary-plain-border":"rgba("+f+", 0.25)","--btn-primary-plain-color":e(s,85,G),"--btn-primary-plain-hover-bg":"rgba("+f+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,G),"--gradient":"linear-gradient(135deg, "+e(s,80,X)+" 0%, "+e(s,85,D)+" 50%, "+e(s,85,p)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,p)+" 0%, "+e(s,80,X)+" 100%)","--primary-text":e(s,85,G),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,g)+5))+" 0%, "+e(s,55,o(s,40,12,55,g))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,le),"--qc-nav-item-active-bg":"rgba("+f+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+f+", 0.12)","--qc-nav-badge-text":e(s,85,le),"--border-control":e(s,16,q(s,16,P(s,11,11),25,70,!1,3.2)),"--brand-soft-text":e(s,85,q(s,85,P(s,55,26),45,96,!1,4.6)),"--qc-ring":e(s,85,65)}}var l=[],m={mode:"light",hue:45},O=!1;function K(s,h){try{var n=document.querySelector('meta[name="theme-color"]');if(!n)return;var f=h?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];f&&n.setAttribute("content",f)}catch{}}function B(){if(!(O||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),h=function(){m.mode==="system"&&J("system",m.hue)};s.addEventListener?s.addEventListener("change",h):s.addListener&&s.addListener(h),O=!0}}function U(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var Q=-1;function I(s){return s=parseInt(s,10),isNaN(s)?45:s<0?Q:Math.max(0,Math.min(359,s))}function N(s){return Object.keys(s).forEach(function(h){var n=s[h];if(typeof n=="string"){n.indexOf("hsl(")>=0&&(n=n.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(r,k){return"hsl("+k+", 0%"}));var f=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(n);if(f){var X=Math.round(.2126*+f[1]+.7152*+f[2]+.0722*+f[3]);n="rgba("+X+", "+X+", "+X+(f[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(n)){var D=n.split(",").map(function(r){return parseInt(r,10)}),p=Math.round(.2126*D[0]+.7152*D[1]+.0722*D[2]);n=p+", "+p+", "+p}s[h]=n}}),s}function F(s,h){var n=P(45,0,h?22:95),f=P(45,0,h?8:98),X=P(45,0,h?11:100),D=h?q(45,0,n,45,96,!1,4.6):q(45,0,n,10,58,!0,4.6),p=P(45,0,h?22:92),r=h?q(45,0,p,45,96,!1,4.6):q(45,0,p,10,58,!0,4.6),k=h?q(45,0,f,45,96,!1,3.2):q(45,0,f,25,70,!0,3.2),u=h?q(45,0,X,25,70,!1,3.2):q(45,0,f,30,80,!0,3.2),R=h?q(45,0,P(45,0,26),45,96,!1,4.6):q(45,0,P(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+R+"%)";var le="hsl(45, 0%, "+D+"%)";if(s["--primary-text"]=le,s["--text-link"]=le,s["--btn-primary-text-color"]=le,s["--btn-primary-plain-color"]=le,s["--qc-nav-item-active"]="hsl(45, 0%, "+r+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+r+"%)",s["--qc-ring"]="hsl(45, 0%, "+k+"%)",s["--border-control"]="hsl(45, 0%, "+u+"%)",h){var G=q(45,0,P(45,0,8),30,92,!1,4.6),M=Math.min(94,G+8),W=Math.min(96,G+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+G+"%) 0%, hsl(45, 0%, "+M+"%) 50%, hsl(45, 0%, "+W+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+W+"%) 0%, hsl(45, 0%, "+G+"%) 100%)"}else{var ie=q(45,0,T,14,62,!0,4.6),ue=Math.max(12,ie-5),Me=Math.max(10,ie-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+Me+"%) 0%, hsl(45, 0%, "+ue+"%) 50%, hsl(45, 0%, "+ie+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ue+"%) 0%, hsl(45, 0%, "+Me+"%) 100%)"}var $=o(45,0,14,0,g);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,$+5)+"%) 0%, hsl(45, 0%, "+$+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function J(s,h){let n=s||"light",f=h==null||h===""?null:h;if(t[s]){const R=t[s];n=R[0],f==null&&(f=R[1])}n==="system"&&(n=U()?"dark":"light");const X=n==="dark";f=I(f??45);const D=f===Q,p=document.documentElement;p.setAttribute("data-theme",X?"dark-pro":"gold"),p.setAttribute("data-theme-mode",X?"dark":"light"),p.setAttribute("data-theme-neutral",D?"true":"false");let r=X?v(D?45:f):E(D?45:f);D&&(r=F(N(r),X));for(var k=Object.keys(r),u=0;u<l.length;u++)k.indexOf(l[u])===-1&&p.style.removeProperty(l[u]);k.forEach(function(R){p.style.setProperty(R,r[R])}),l=k,m.mode=typeof s=="string"&&s?s:"light",m.hue=f,K(r,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(f))}catch{}return{mode:X?"dark":"light",hue:f}}function Z(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return I(s)}catch{}var h=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(h&&h.getPreference){var n=h.getPreference("theme_hue");if(n!=null&&n!=="")return I(n)}return null}function ne(s){var h=Z();return J(s,h??void 0)}function ee(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const h=t[s];return{mode:h[0],hue:h[1]}}function L(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let h=s.theme||"system",n=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const f=ee();return n==null&&f&&(h=f.mode,n=f.hue),n==null&&(n=45),B(),J(h,n)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:b,NEUTRAL_HUE:Q,generateLightTokens:E,generateDarkTokens:v,migrateLegacyTheme:ee,persistedHue:Z,applyLegacyTheme:ne,applyTheme:J,init:L},typeof queueMicrotask=="function"?queueMicrotask(L):L()})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],b={};let e=a,d=null;function g(){return d&&typeof d=="object"&&"value"in d?d.value||a:e}function A(x,T){return t.indexOf(x)===-1?!1:(b[x]=T&&typeof T=="object"?T:{},!0)}function y(x){const T=t.indexOf(x)!==-1?x:a;return e=T,d&&typeof d=="object"&&"value"in d&&(d.value=T),typeof document<"u"&&document.documentElement.setAttribute("lang",T),e}function c(){return g()}function w(x){if(x&&typeof x=="object"&&"value"in x){d=x;const T=t.indexOf(x.value)!==-1?x.value:a;x.value=T,e=T}return e}function o(x,T){const S=g(),q=b[S]||{};let P=x in q?q[x]:null;if(P==null&&S!=="en"){const E=b.en||{};P=x in E?E[x]:null}return P==null&&(P=String(x)),T&&typeof T=="object"&&Object.keys(T).forEach(function(E){P=P.replace(new RegExp("\\{"+E+"\\}","g"),String(T[E]))}),P}const C={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:b,registerLocale:A,setLocale:y,getLocale:c,bindLocale:w,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=C),C});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let b=[];function e(S){const q=String(S||"");let P="";for(const E of q){const v=a[E];v?P+=v.charAt(0):/[a-zA-Z0-9]/.test(E)&&(P+=E.toLowerCase())}return P}function d(S){const q=String(S||"");let P="";for(const E of q){const v=a[E];v?P+=v:/[a-zA-Z0-9]/.test(E)&&(P+=E.toLowerCase())}return P}function g(S){return String(S||"").trim().toLowerCase()}function A(S,q){const P=(q.code||"").toLowerCase();return/^\d+$/.test(S)?P.indexOf(S)!==-1:/[\u4e00-\u9fa5]/.test(S)?(q.name||"").toLowerCase().indexOf(S)!==-1:P.indexOf(S)!==-1||(q.initials||e(q.name)).indexOf(S)!==-1||(q.pinyin||d(q.name)).indexOf(S)!==-1}function y(S){const q={},P=[],E=function(v,l,m){!v||q[v]||(q[v]=!0,P.push({code:v,name:l||v,source:m||"core",initials:e(l||v),pinyin:d(l||v)}))};return t.forEach(function(v){E(v.code,v.name,"core")}),(S||[]).forEach(function(v){E(v.code,v.name,"extra")}),P}function c(S,q){const P=g(S);if(!P||!q||!q.length)return[];const E=P.split(/[\s,，、;；]+/).filter(Boolean);return E.length?q.filter(function(v){return E.every(function(l){return A(l,v)})}).slice(0,20).map(function(v){return{code:v.code,name:v.name,source:v.source||"core"}}):[]}function w(S){Array.isArray(S)&&(b=b.concat(S))}function o(){return b.slice()}function C(){return y(b)}function x(S){return c(S,C())}const T={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:d,normalizeQuery:g,matchToken:A,buildStockIndex:y,searchStocksByQuery:c,registerExtraStocks:w,getExtraStocks:o,getStockIndex:C,searchCoreStocks:x};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=T),T});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},b=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function d(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const g={light:"classic-white",dark:"dark-pro"};function A(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const m=JSON.parse(l);return m&&typeof m=="object"?m:{}}catch{return{}}}function y(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function w(){const l=Object.assign({},t,A()),m={};return b.forEach(function(O){const K=l[O];m[O]=O==="theme_hue"?d(K)?parseInt(K,10):t[O]:e[O].indexOf(K)!==-1?K:t[O]}),m}function o(l){if(b.indexOf(l)!==-1)return w()[l]}function C(l,m){return b.indexOf(l)===-1?!1:l==="theme_hue"?d(m):e[l].indexOf(m)!==-1}function x(l,m){if(!C(l,m))return!1;const O=A();return O[l]=m,y(O),c()&&S({[l]:m}),!0}function T(l){if(!l||typeof l!="object")return!1;const m={};if(Object.keys(l).forEach(function(K){C(K,l[K])&&(m[K]=l[K])}),!Object.keys(m).length)return!1;const O=Object.assign({},A(),m);return y(O),c()&&S(m),!0}function S(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function q(){const l=w();if(!c()||typeof fetch>"u")return l;try{const m=await fetch("/api/user_config/preferences");if(m.ok){const O=await m.json();if(O.success&&O.preferences){const K=O.preferences;b.forEach(function(B){const U=K[B];if(B==="theme_hue"){d(U)&&(l[B]=parseInt(U,10));return}e[B].indexOf(U)!==-1&&(l[B]=U)}),y(l)}}}catch(m){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",m&&m.message)}return l}function P(l){const m=l||o("info_density")||"comfortable",O=e.info_density.indexOf(m)!==-1?m:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",O),O}function E(l){const m=l||o("theme")||"system";if(m==="system"){let O=!1;return typeof window<"u"&&window.matchMedia&&(O=window.matchMedia("(prefers-color-scheme: dark)").matches),O?"dark":"light"}return m==="dark"||m==="light"?m:"light"}const v={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:b,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:g,getLocal:w,getPreference:o,isValidValue:C,setPreference:x,setPreferences:T,saveToBackend:S,loadPreferences:q,resolveTheme:E,applyDensity:P};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=v),v});(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function b(){if(typeof localStorage>"u")return[];try{const w=localStorage.getItem(a);if(!w)return[];const o=JSON.parse(w);return Array.isArray(o)?o:[]}catch{return[]}}function e(w){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(w))}catch{}}function d(w,o){if(!w)return!1;let C=b().filter(function(x){return x.code!==w});return C.unshift({code:w,name:(o||"").toString().slice(0,32),ts:Date.now()}),C.length>10&&(C=C.slice(0,10)),e(C),!0}function g(){return b().slice(0,10)}function A(w){e(b().filter(function(o){return o.code!==w}))}function y(){e([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:d,getRecentViewed:g,removeRecent:A,clearRecent:y};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:b,watch:e,onMounted:d,nextTick:g}=a;function A(r,k={}){if(typeof r=="string"&&r.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...k,headers:{...k.headers||{},Authorization:"Bearer "+u}}}return k}async function y(r,k={}){const u=A(r,k),R={"Content-Type":"application/json",...u.headers},le=(k.method||"GET").toUpperCase(),G=le+"|"+r,M=async()=>{const W=await fetch(r,{...u,headers:R});if(W.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!W.ok){let ie="";try{const ue=await W.json();ie=ue&&ue.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+W.status+"）"),{status:W.status})}return await W.json()};try{const W=k.noLoading?M:()=>m(M);return le==="GET"&&!k.noDedupe?await P(G,W):await W()}catch(W){throw W.message==="登录已过期"?W:(console.error("[apiFetch] "+r+":",W.message),Object.assign(W,{_formatted:O(W,W.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function w(r){return r?r.split("T")[0]:""}function o(r,k="info",u=3e3){let R=document.querySelector(".toast-container");R||(R=document.createElement("div"),R.className="toast-container",document.body.appendChild(R));const le=document.createElement("div");le.className=`toast toast-${k}`,le.textContent=r,R.appendChild(le),setTimeout(()=>{le.classList.add("leaving"),setTimeout(()=>le.remove(),300)},u)}function C(r,k=300){let u;return function(...R){clearTimeout(u),u=setTimeout(()=>r.apply(this,R),k)}}function x(r,k=300){let u=!1;return function(...R){u||(r.apply(this,R),u=!0,setTimeout(()=>{u=!1},k))}}async function T(r,k=3e3,u=""){const R=new Promise((le,G)=>setTimeout(()=>G(new Error("timeout")),k));try{return await Promise.race([r,R])}catch(le){console.warn(`[timeout] ${u||"task"} failed:`,le.message)}}const S=new Map;function q(){return S.clear(),!0}function P(r,k){if(!r||typeof k!="function")return Promise.reject(new Error("bad dedupe args"));if(S.has(r))return S.get(r);const u=Promise.resolve().then(k).finally(()=>{S.delete(r)});return S.set(r,u),u}let E=0;function v(){return E=0,!0}function l(){return E}async function m(r){E++;try{return await r()}finally{E--}}function O(r,k){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const u=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return k?"请求失败（HTTP "+k+"）":"请求失败"}function K(r,k){if(r===k)return!0;try{return JSON.stringify(r)===JSON.stringify(k)}catch{return!1}}function B(r,k,u){const R=(r||"GET").toUpperCase();let le="";if(u)try{const G={};Object.keys(u).sort().forEach(M=>{G[M]=u[M]}),le=JSON.stringify(G)}catch{le=""}return R+"|"+k+"|"+le}class U{constructor(){this._map=new Map,this._exp=new Map}get(k){const u=this._exp.get(k);if(u!=null){if(Date.now()>u){this.delete(k);return}return this._map.get(k)}}set(k,u,R){return this._map.set(k,u),this._exp.set(k,Date.now()+(R>0?R:-1)),u}delete(k){this._map.delete(k),this._exp.delete(k)}clear(){this._map.clear(),this._exp.clear()}has(k){return this.get(k)!==void 0}get size(){return this._map.size}}function Q(r){const k=new U,u=r!=null&&r>0?r:15e3;return{store:k,defaultTtl:u,get:R=>k.get(R),set:(R,le,G)=>k.set(R,le,G??u),delete:R=>k.delete(R),clear:()=>k.clear(),size:()=>k.size}}const I=new Set;async function N(r){const k=r&&r.cache,u=r&&r.key,R=r&&(r.fetchFn||r.fetcher),le=r&&r.ttl;if(!k||!u||typeof R!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(I.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};I.add(u);try{const G=k.get(u);let M;try{M=await R()}catch(ie){return r.onError&&r.onError(ie),{ok:!1,changed:!1,fresh:null}}const W=G!==void 0&&!K(G,M);return k.set(u,M,le),r.apply&&r.apply(M,G),G!==void 0&&(W?r.onChanged&&r.onChanged(M,G):r.onUnchanged&&r.onUnchanged(M,G)),{ok:!0,changed:W,fresh:M}}finally{I.delete(u)}}const F=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function J(r,k={}){if(r==null)return"";const u=k&&k.allow||F,R=new Set(u.map(W=>String(W).toUpperCase()));let le;try{le=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const G=le.body||le;function M(W){Array.from(W.childNodes).forEach(ie=>{if(ie.nodeType===1){const ue=String(ie.tagName).toUpperCase();if(R.has(ue))Array.from(ie.attributes).forEach(Me=>{const $=Me.name.toLowerCase(),ce=(Me.value||"").trim().toLowerCase();($.startsWith("on")||($==="href"||$==="src"||$==="xlink:href")&&ce.startsWith("javascript:")||$==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ce))&&ie.removeAttribute(Me.name),$==="href"&&!/^(https?:|mailto:|#|\/)/.test(ce)&&ie.removeAttribute("href")}),ue==="A"&&ie.setAttribute("rel","noopener noreferrer"),M(ie);else{const Me=ie.parentNode;for(;ie.firstChild;)Me.insertBefore(ie.firstChild,ie);Me.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const ue=le.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(ue,ie)}}})}return M(G),G.innerHTML}const Z="/api/openapi",ne="/api/market/ws/quotes",ee=1,L=2.5,s="数据不可达",h="实时不可用，不刷新";function n(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",k=typeof location<"u"?location.host:"localhost:8001";return r+"//"+k+ne}function f(r,k){if(!r)return null;const u=k||{riseSpeed:ee,volumeRatio:L},R=u.riseSpeed!=null?u.riseSpeed:ee,le=u.volumeRatio!=null?u.volumeRatio:L,G=parseFloat(r.rise_speed);if(!isNaN(G)&&Math.abs(G)>R)return G>0?"涨速预警":"跌速预警";const M=parseFloat(r.volume_ratio);return!isNaN(M)&&M>le?"放量预警":null}function X(r){const k=Number(r);return r==null||isNaN(k)?null:k}const p={apiFetch:y,withAuthHeaders:A,getToday:c,formatDate:w,withTimeout:T,showToast:o,debounce:C,throttle:x,resetInFlight:q,dedupeRequest:P,resetLoading:v,loadingCount:l,withLoading:m,formatApiError:O,jsonEquals:K,makeCacheKey:B,CacheStore:U,createTtlCache:Q,silentRefresh:N,sanitizeHtml:J,OPENAPI_ROUTE_BASE:Z,REALTIME_WS_PATH:ne,WARN_RISE_SPEED_THRESHOLD:ee,WARN_VOLUME_RATIO_THRESHOLD:L,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:h,buildRealtimeWsUrl:n,checkQuoteWarning:f,quoteFmt:{price:function(r){const k=X(r);return k===null?"--":k.toFixed(2)},pct:function(r){const k=X(r);return k===null?"--":(k>0?"+":"")+k.toFixed(2)+"%"},num:function(r){const k=X(r);return k===null?"--":k.toFixed(2)},color:function(r){const k=r?r.change_pct:null,u=X(k);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=p),typeof Ie<"u"&&Ie.exports&&(Ie.exports=p)})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(C,x){return C+"/"+x}function b(C,x,T,S){var q=C[x]||[],P=q.findIndex(function(l){return l.subPage===T});if(P!==-1)return{groups:C,activeKey:t(x,T)};var E=q.concat([{subPage:T,title:S}]);E.length>a&&(E=d(E));var v=Object.assign({},C,e({},x,E));return{groups:v,activeKey:t(x,T)}}function e(C,x,T){return C[x]=T,C}function d(C){if(C.length<=a)return C;var x=C.length>1?1:0;return C.filter(function(T,S){return S!==x})}function g(C,x,T,S){var q=C[x]||[],P=q.findIndex(function(m){return m.subPage===T});if(P===-1)return{groups:C,nextActive:null};var E=q.filter(function(m){return m.subPage!==T}),v=Object.assign({},C,e({},x,E)),l=null;return T===S&&(E[P]?l=E[P].subPage:E[P-1]?l=E[P-1].subPage:l=null),{groups:v,nextActive:l}}function A(C){return C&&C.length?C[0]:""}function y(C,x){return C[x]||[]}function c(C,x,T){var S=C[x]||[],q=S.filter(function(E){return E.subPage===T}),P=Object.assign({},C,e({},x,q));return{groups:P,activeKey:q.length?t(x,q[0].subPage):null}}function w(C,x){var T=Object.assign({},C,e({},x,[]));return{groups:T,activeKey:null}}function o(C,x,T,S){var q=(C[x]||[]).slice();if(T<0||T>=q.length)return{groups:C};var P=q.splice(T,1)[0];return q.splice(Math.max(0,Math.min(S,q.length)),0,P),{groups:Object.assign({},C,e({},x,q))}}return{MAX_TABS:a,openTab:b,closeTab:g,getDefaultTab:A,tabsOf:y,evictOldest:d,closeOthers:c,closeAll:w,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",b="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function d(o){return e(o)==="subnav"}function g(o){return e(o)==="tree"}function A(o){return e(o)==="toptab"}function y(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var o=y(),C=t;if(o)try{C=e(o.getItem(b))}catch{}return{navMode:C}}function w(o){var C=y();if(!(!C||!o))try{o.navMode!==void 0&&C.setItem(b,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:d,treeChildrenVisible:g,topTabsVisible:A,readPrefs:c,writePrefs:w}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function t(n,f){if(!Array.isArray(n)||n.length<=f)return n;const X=[],D=n.length/f*2;for(let p=0;p<n.length;p+=D){const r=Math.floor(p),k=Math.min(n.length,Math.ceil(p+D));let u=1/0,R=-1,le=-1/0,G=-1;for(let M=r;M<k;M++){const W=n[M];if(!W)continue;const ie=W[3]!=null?Number(W[3]):1/0,ue=W[4]!=null?Number(W[4]):-1/0;ie<u&&(u=ie,R=M),ue>le&&(le=ue,G=M)}R>=0&&X.push(n[R]),G>=0&&G!==R&&X.push(n[G])}return X}let b=null;function e(){return typeof echarts<"u"?Promise.resolve():(b||(b=new Promise(function(n,f){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?n():f(new Error("echarts 加载后未定义"))},X.onerror=function(){f(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),b)}function d(){const n=getComputedStyle(document.documentElement);return{primary:n.getPropertyValue("--primary-color").trim()||"#2563eb",up:n.getPropertyValue("--color-up").trim()||"#43e97b",down:n.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:n.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:n.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const g=n=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim()}catch{return""}};function A(){return{up:g("--color-up")||"#E63946",down:g("--color-down")||"#2E7D32",neutral:g("--color-neutral")||"#43a047",accent:g("--color-accent")||"#F59E0B",risk:g("--color-danger")||"#C62828",warn:g("--color-warning")||"#FF9800",success:g("--color-success")||"#4CAF50",primary:g("--qc-primary-600")||"#b8922a",grid:g("--chart-split")||"#e2e8f0",axis:g("--chart-axis")||"#cbd5e1",bg:g("--chart-bg")||"transparent",series:[g("--qc-primary-600")||"#b8922a",g("--qc-primary-500")||"#c49b2e",g("--qc-primary-700")||"#8f6f1f",g("--qc-primary-400")||"#d4b352",g("--color-up")||"#E63946",g("--color-down")||"#2E7D32",g("--color-accent")||"#F59E0B",g("--qc-neutral-400")||"#b8ae9f"]}}function y(n,f,X,D=!1,p=!1){if(!f||f.length===0)return;f.length>2e3&&(f=t(f,2e3));const r=f.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),k=d(),u={ma5:g("--color-accent")||"#F59E0B",ma10:g("--color-primary")||"#3B82F6",ma20:g("--color-warning")||"#8B5CF6",ma60:g("--color-success")||"#10B981"},R=f.map(se=>[se[1],se[2],se[3],se[4]]),le=f.map(se=>se[5]),G=f.map(se=>se[6]),M=f.map(se=>se[7]),W=f.map(se=>se[8]),ie=f.map(se=>se[9]),ue=f.map(se=>se[10]),$=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ce=k.borderLight,Re={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:k.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:$,borderColor:ce,textStyle:{color:k.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const pe=se[0].dataIndex,Te=f[pe];if(!Te)return"";const ve=n.getOption(),be=ve.legend&&ve.legend[0]&&ve.legend[0].selected||{},qe=Ne=>be[Ne]!==!1,re=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),ae=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",fe=['<div style="font-weight:600;color:'+k.textSecondary+';">'+r[pe]+"</div>"];return fe.push("开: "+re(Te[1])+"　收: "+re(Te[2])),fe.push("低: "+re(Te[3])+"　高: "+re(Te[4])),fe.push("成交量: "+ae(Te[5])),Te[6]!=null&&qe("MA5")&&fe.push("MA5: "+re(Te[6])),Te[7]!=null&&qe("MA10")&&fe.push("MA10: "+re(Te[7])),Te[8]!=null&&qe("MA20")&&fe.push("MA20: "+re(Te[8])),Te[9]!=null&&qe("MA60")&&fe.push("MA60: "+re(Te[9])),Te[10]!=null&&fe.push("VOL_MA5: "+ae(Te[10])),fe.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:p?0:8,textStyle:{color:k.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:p?30:40,height:p?"48%":"52%"},{left:56,right:16,top:p?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:k.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:ce}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:k.textSecondary,fontSize:11,formatter:function(se){const pe=Math.round(se*100)/100;return pe%1===0?String(Math.round(pe)):pe.toFixed(2)}},splitLine:{lineStyle:{color:ce,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ce}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,f.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ce,textStyle:{color:k.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:R,itemStyle:{color:k.up,color0:k.down,borderColor:k.up,borderColor0:k.down}},{name:"MA5",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:M,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:W,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:le,itemStyle:{color:function(se){const pe=se.dataIndex;return f[pe][1]>=f[pe][2]?k.up:k.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ue,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};n.setOption(Re,!0)}const c=new Map;function w(n){return c.has(n)||c.set(n,{chart:null,cache:null}),c.get(n)}async function o(n,f,X,D=!1,p={}){await e();const r=w(n);let k=document.getElementById(n);if(!k)for(let u=0;u<16&&(await new Promise(R=>setTimeout(R,50)),k=document.getElementById(n),!k);u++);if(!k)throw new Error("无法找到图表容器: "+n);if(k.offsetWidth<50&&(k.style.minWidth="600px",k.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==k){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(k),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=p.onLegend;typeof u=="function"&&r.chart.on("legendselectchanged",R=>{R&&R.selected&&u(R.selected)})}return y(r.chart,f,X,D,!!p.isMobile),r.cache={data:f,period:X,isIndex:D,isMobile:!!p.isMobile},r.chart}function C(n){const f=c.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function x(n){const f=c.get(n);f&&f.chart&&f.chart.resize()}function T(n,f){const X=c.get(n),D=X&&X.chart;if(D)if(f<=0)D.dispatchAction({type:"dataZoom",start:0,end:100});else{const k=Math.max(0,(60-f)/60*100);D.dispatchAction({type:"dataZoom",start:Math.round(k),end:100})}}function S(n){var D,p,r;const f=c.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const X=((r=(p=(D=f.chart.getOption())==null?void 0:D.legend)==null?void 0:p[0])==null?void 0:r.selected)||null;y(f.chart,f.cache.data,f.cache.period,f.cache.isIndex,f.cache.isMobile),X&&f.chart.setOption({legend:{selected:X}})}function q(n){const f=c.get(n);return f&&f.chart}const P=new Map;function E(n){return P.has(n)||P.set(n,{chart:null,cache:null}),P.get(n)}function v(n,f,X={}){return e().then(function(){const D=E(n),p=document.getElementById(n);if(!p)throw new Error("无法找到图表容器: "+n);if(p.offsetWidth<50&&(p.style.minWidth="600px",p.style.minHeight="300px"),D.chart&&D.chart.getDom&&D.chart.getDom()!==p){try{D.chart.dispose()}catch{}D.chart=null}D.chart||(D.chart=echarts.init(p),D.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),D.resizeBound||(D.resizeBound=!0,window.addEventListener("resize",function(){D.chart&&!D.chart.isDisposed()&&D.chart.resize()})));const r=typeof f=="function"?f():f;return D.chart.setOption(r,!0),D.cache={buildOption:f,key:X.key||""},D.chart})}function l(n){var p,r,k;const f=P.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const X=((k=(r=(p=f.chart.getOption())==null?void 0:p.legend)==null?void 0:r[0])==null?void 0:k.selected)||null,D=typeof f.cache.buildOption=="function"?f.cache.buildOption():f.cache.buildOption;f.chart.setOption(D,!0),X&&D&&D.legend&&D.legend.selected&&f.chart.setOption({legend:{selected:X}})}function m(n){const f=P.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function O(n){const f=P.get(n);f&&f.chart&&f.chart.resize()}const K=new Map;function B(n){return K.has(n)||K.set(n,{chart:null,cache:null}),K.get(n)}function U(n,f,X={}){return e().then(function(){const D=B(n),p=document.getElementById(n);if(!p)return null;if(p.offsetWidth<50&&(p.style.minWidth="600px",p.style.minHeight="300px"),D.chart&&D.chart.getDom&&D.chart.getDom()!==p){try{D.chart.dispose()}catch{}D.chart=null}D.chart||(D.chart=echarts.init(p),D.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),D.resizeBound||(D.resizeBound=!0,window.addEventListener("resize",function(){D.chart&&!D.chart.isDisposed()&&D.chart.resize()})));const r=typeof f=="function"?f():f;return D.chart.setOption(r,!0),D.cache={buildOption:f,key:X.key||""},D.chart})}function Q(n){const f=K.get(n);if(!f||!f.chart||!f.cache||f.chart.isDisposed())return;const X=typeof f.cache.buildOption=="function"?f.cache.buildOption():f.cache.buildOption;f.chart.setOption(X,!0)}function I(n){const f=K.get(n);f&&f.chart&&(f.chart.dispose(),f.chart=null,f.cache=null)}function N(n){const f=K.get(n);f&&f.chart&&f.chart.resize()}const F=U,J=Q,Z=I,ne=N;function ee(n,f,X,D){D=D||{};const p=D.drawdownColor||g("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[D.navLabel||"净值",D.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:D.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:D.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:D.navLabel||"净值",type:"line",data:n||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:D.ddLabel||"回撤",type:"line",yAxisIndex:1,data:f||[],showSymbol:!1,areaStyle:{opacity:.25,color:p},lineStyle:{color:p,type:"solid",width:1.5}}]}}function L(n,f){f=f||{};const X=f.bandColor||g("--state-info-solid")||"#1976d2",D=n&&n.dates||[],p=n&&n.median||[],r=n&&n.q25||[],k=n&&n.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[f.medianLabel||"中位IC",f.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:D,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:f.medianLabel||"中位IC",type:"line",data:p,showSymbol:!1,lineStyle:{width:2,color:X}},{name:f.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:k.map(function(u,R){return u-(r[R]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(n,f){f=f||{};const X=f.color||g("--color-ai")||"#7c3aed",D=n&&n.dates||[],p=n&&n.value||[],r=n&&n.upper||[],k=n&&n.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[f.valueLabel||"情绪",f.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:D,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:f.valueLabel||"情绪",type:"line",data:p,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:f.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:k.map(function(u,R){return(r[R]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const h={renderKlineChart:y,renderKlineTo:o,disposeKline:C,resizeKline:x,zoomKline:T,redrawKline:S,getKlineChart:q,renderBacktestTo:v,redrawBacktest:l,disposeBacktest:m,resizeBacktest:O,renderPortfolioTo:U,redrawPortfolio:Q,disposePortfolio:I,resizePortfolio:N,renderSimpleChartTo:F,redrawSimpleChart:J,disposeSimpleChart:Z,resizeSimpleChart:ne,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A,init(){return{renderKlineChart:y,renderKlineTo:o,disposeKline:C,resizeKline:x,zoomKline:T,redrawKline:S,getKlineChart:q,renderBacktestTo:v,redrawBacktest:l,disposeBacktest:m,resizeBacktest:O,renderPortfolioTo:U,redrawPortfolio:Q,disposePortfolio:I,resizePortfolio:N,renderSimpleChartTo:F,redrawSimpleChart:J,disposeSimpleChart:Z,resizeSimpleChart:ne,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=h),typeof Ie<"u"&&Ie.exports&&(Ie.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:b}=Vue,{configChanged:e,consensus:d}=a,g=t(null),A=t(""),y=t(null),c=t([]),w=t([]),o=t([]),C=t([]),x=t([]),T=t([]),S=t({});function q(ke){const we=x.value.indexOf(ke);we>=0?x.value.splice(we,1):x.value.push(ke)}const P=t("date"),E=t([]),v=t(!1),l=t(!1),m=t("watchlist"),O=t([]),K=t({vendors:[]}),B=t(""),U=t(!1),Q=t(!1);function I(ke){if(!ke)return"";const we=String(ke),Le=we.length;if(Le<=4)return we[0]+"*".repeat(Le-1);const Pe=Le<=8?2:4;return we.slice(0,Pe)+"*".repeat(Le-Pe-Pe)+we.slice(-Pe)}async function N(ke){let we;try{we=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Pe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:we,target:ke})})).json();if(Pe.success)return Pe.secret;ElementPlus.ElMessage.error(Pe.message||"查看失败")}catch(Le){ElementPlus.ElMessage.error("查看失败: "+Le.message)}return null}async function F(ke){if(ke._revealed){ke._revealed=!1,ke._masked=I(ke.api_key);return}const we=await N("ai:"+ke.vendor_key);we!==null&&(ke.api_key=we,ke._revealed=!0)}async function J(ke){if(ke._editing){ke._editing=!1,ke._revealed=!1,ke.api_key&&(ke._masked=I(ke.api_key));return}ke._editing=!0;try{const Le=await(await fetch("/api/ai/models?full=1")).json();if(Le.success){const Pe=(Le.data.vendors||[]).find(Je=>Je.vendor_key===ke.vendor_key);Pe&&(ke.api_key=Pe.api_key||"")}else Le.message&&ElementPlus.ElMessage.error(String(Le.message))}catch(we){ElementPlus.ElMessage.error("解锁失败: "+we.message)}}function Z(ke){const{_fetching:we,_testing:Le,_revealed:Pe,_masked:Je,_editing:Qe,...$e}=ke;return Qe||($e.api_key=""),$e.models=(ke.models||[]).map(St=>{const{_testing:ht,testResult:vt,...Dt}=St;return Dt}),$e}async function ne(){var ke;try{B.value="";const we=await fetch("/api/ai/models");if(we.status===401){B.value="请先登录后再查看模型配置";return}if(!we.ok){B.value=`服务器错误 (${we.status})`;return}const Le=await we.json();Le.success?(O.value=(((ke=Le.data)==null?void 0:ke.vendors)||[]).map(Pe=>({...Pe,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Pe.api_key||"",models:(Pe.models||[]).map(Je=>({...Je,_testing:!1,testResult:void 0}))})),B.value=""):B.value=Le.message||"加载失败"}catch(we){B.value="网络错误: "+we.message}}async function ee(){try{const we=await(await fetch("/api/ai/catalog")).json();we.success&&we.data&&(K.value=we.data)}catch(ke){console.warn("AI 厂商目录加载失败",ke)}}async function L(){Q.value=!0;try{const Le=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:O.value.map(Z)})})).json();Le.success?(O.value.forEach(Pe=>{Pe._editing=!1,Pe._revealed=!1,Pe.api_key&&(Pe._masked=I(Pe.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Le.message||"保存失败")}catch(ke){ElementPlus.ElMessage.error("保存失败: "+ke.message)}Q.value=!1}async function s(ke,we){we._testing=!0;try{const Pe=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ke.vendor_key,model:we.name,base_url:ke.base_url,api_key:ke.api_key,timeout:ke.timeout})});we.testResult=await Pe.json()}catch(Le){we.testResult={success:!1,message:Le.message}}we._testing=!1}async function h(){U.value=!0;for(const ke of O.value)for(const we of ke.models||[])ke.api_key?await s(ke,we):we.testResult={success:!1,message:"未配置 API Key"};U.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function n(ke){ke._fetching=!0;try{const Pe=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ke.vendor_key,base_url:ke.base_url,api_key:ke.api_key,timeout:ke.timeout})})).json();if(Pe.success&&Array.isArray(Pe.models)){const Je=new Set((ke.models||[]).map(Qe=>Qe.name));for(const Qe of Pe.models)Je.has(Qe)||ke.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Pe.models.length} 个模型`)}else ElementPlus.ElMessage.error(Pe.message||"获取模型列表失败")}catch(we){ElementPlus.ElMessage.error("获取模型列表失败: "+we.message)}ke._fetching=!1}function f(ke){const we=(K.value.vendors||[]).find(Le=>Le.vendor_key===ke);if(we){if(O.value.some(Le=>Le.vendor_key===ke)){ElementPlus.ElMessage.warning("该厂商已存在");return}O.value.push({vendor_key:we.vendor_key,name:we.name,kind:we.kind,base_url:we.base_url,api_key:"",timeout:60,tier:we.tier||"",website:we.website||"",locked:!!we.locked,models:(we.models||[]).map(Le=>({name:Le,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${we.name}」，配置 API Key 后保存生效`)}}function X(){O.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function D(ke){ke.models||(ke.models=[]),ke.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function p(ke,we){const Le=ke.models[we];if(!(!Le||Le.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Le.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}ke.models.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(ke){if(ke.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(ke.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const we=O.value.indexOf(ke);we>=0&&O.value.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const k=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=t(!1),R=t(""),le=t(0),G=t(""),M=t(!1),W=t(""),ie=t(!1),ue=t(0),Me=t(0),$=t(""),ce=t({}),Re=t({}),se=t({}),pe=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Te=t("manual"),ve=b(()=>{const ke={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return ke[pe.value.provider]||ke.custom}),be={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function qe(ke){if(ke==="manual")return;const we=be[ke];we&&(pe.value.endpoint=we.endpoint,pe.value.model=we.model,e.value=!0)}function re(){if(e.value=!0,pe.value.provider!=="codingplan"&&pe.value.provider!=="custom"){const ke=ve.value;ke&&(pe.value.endpoint=ke.endpoint,pe.value.model=ke.model)}else pe.value.provider==="codingplan"&&(pe.value.endpoint||(pe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),pe.value.model||(pe.value.model="ark-code-latest"))}let ae=null;const fe=8;async function Ne(){ae&&(ae.abort(),ae=null);const we=(d.value||[]).filter($e=>$e.status==="new"||$e.status==="out").filter($e=>!S.value[$e.code]);if(we.length===0)return;const Le=new AbortController;ae=Le;let Pe=0;const Je=async()=>{for(;Pe<we.length;){const $e=we[Pe++];try{const ht=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:$e.code,stock_name:$e.name,event_type:$e.status==="new"?"enter":"exit"}),signal:Le.signal})).json();ht.success&&ht.signal&&(S.value={...S.value,[$e.code]:ht.signal})}catch(St){if(St.name==="AbortError")return}}},Qe=Array.from({length:Math.min(fe,we.length)},()=>Je());await Promise.all(Qe)}function ze(){ae&&(ae.abort(),ae=null)}let Be=0;async function xt(ke){const we=++Be;try{const Pe=await(await fetch(`/api/ai/history/last/${encodeURIComponent(ke)}`)).json();if(we!==Be)return;Pe.success&&Pe.data&&(g.value=Pe.data,A.value=Pe.data.evaluate_time,Tt(ke,Pe.data),kt(Pe.data))}catch{}}async function Tt(ke,we){var Le,Pe;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(ke)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const $e=Qe.data[1],St=((Le=we.result)==null?void 0:Le.total_score)||0,ht=((Pe=$e.result)==null?void 0:Pe.total_score)||0;St>0&&ht>0&&(y.value={prevScore:ht,currScore:St,diff:St-ht})}}catch(Je){console.warn("[refreshStrategyData] autoPoll failed:",Je)}}function kt(ke){var Je;const we=((Je=ke.result)==null?void 0:Je.dimensions)||{},Le=[],Pe=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of Pe){const $e=we[Qe.key];$e!==void 0&&Le.push({icon:$e>=Qe.good?"check-circle-2":$e>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round($e)}分`})}c.value=Le}return{aiResult:g,lastEvalTime:A,evalHistoryComparison:y,checklistItems:c,aiHistory:w,selectedHistoryIds:o,expandedDates:C,expandedMonths:x,expandedStocks:T,poolSignals:S,toggleMonthExpand:q,aiHistoryView:P,selectedWatchlistCodes:E,showAutoEvaluateSettings:v,savingConfig:l,autoEvaluateScope:m,aiVendors:O,aiCatalog:K,aiModelsError:B,testingAllModels:U,savingAiModels:Q,loadAiVendors:ne,loadAiCatalog:ee,saveAiVendors:L,saveAiModels:L,testVendorModel:s,testAllVendorModels:h,fetchVendorModels:n,addVendorFromCatalog:f,addCustomVendor:X,addVendorModel:D,removeVendorModel:p,removeVendor:r,toggleVendorKeyReveal:F,toggleVendorEdit:J,autoEvaluateConfig:k,aiLoading:u,aiEvalStage:R,aiEvalElapsed:le,aiEvalError:G,showBatchEvaluate:M,batchStocks:W,batchRunning:ie,batchTotal:ue,batchCompleted:Me,batchCurrent:$,batchStatuses:ce,batchResults:Re,batchEvalErrors:se,aiConfig:pe,selectedPreset:Te,providerInfo:ve,aiPresets:be,applyPreset:qe,onProviderChange:re,fetchPoolSignals:Ne,cancelPoolSignals:ze,loadLastEvaluation:xt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:b,watch:e}=Vue,{configChanged:d,aiConfig:g,aiLoading:A,feishuConfig:y,currentTheme:c,changeTheme:w,autoEvaluateConfig:o,currentUser:C,strategyFilter:x,applyTheme:T,dashboardData:S,lastRefreshTime:q,saveAiModels:P}=a,E=function(re){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(re):T(re)},v=t(!1),l=t(!1),m=t(null),O=t(null),K=t(null),B=t(null),U=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),Q=t("disconnected"),I=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),N=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),F=t(!1),J=t(null),Z=t(null),ne=t("pending"),ee=t("..."),L=t(!1),s=t({api_limit:600}),h=t(!1),n=t(!1);async function f(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function X(){n.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(h.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}e(()=>[g.value.provider,g.value.apiKey,g.value.endpoint,g.value.model],()=>{d.value=!0},{deep:!0});async function D(){v.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(g.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g.value)})).json()).success?(d.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(g.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{v.value=!1}}async function p(){A.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{A.value=!1}}function r(){const re={ai:g.value,feishu:y.value,theme:c.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),fe=URL.createObjectURL(ae),Ne=document.createElement("a");Ne.href=fe,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(fe),ElementPlus.ElMessage.success("配置已导出")}function k(re){const ae=re.target.files[0];if(!ae)return;const fe=new FileReader;fe.onload=async Ne=>{try{const ze=JSON.parse(Ne.target.result);ze.ai&&(g.value={...g.value,...ze.ai},await D()),ze.feishu&&(Object.assign(y.value,ze.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ze.feishu)})),ze.theme&&(c.value=ze.theme,w(ze.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},fe.readAsText(ae),re.target.value=""}async function u(){v.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:U.value,feishu:y.value,ai:g.value,rate_limit:s.value,auto_evaluate:o.value,theme:c.value}})}).then(ze=>["userConfig",ze.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U.value)}).then(ze=>["tushare",ze.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:I.value})}).then(ze=>["datasource",ze.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)}).then(ze=>["feishu",ze.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g.value)}).then(ze=>["ai",ze.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(ze=>["rateLimit",ze.ok]),P().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(re),fe=ae.filter(ze=>ze.status==="fulfilled"&&ze.value[1]).length,Ne=ae.filter(ze=>ze.status==="rejected"||ze.status==="fulfilled"&&!ze.value[1]).length;h.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(x.value.selected)),localStorage.setItem("quant_strategy_filter_mode",x.value.mode),C.value&&fetch(`/api/users/${C.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),l.value=!1,m.value=new Date().toLocaleString("zh-CN"),v.value=!1,Ne>0&&console.error(`[saveAllConfig] ${fe}/${fe+Ne} 项保存成功，${Ne} 项失败`)}async function R(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const fe=ae.config;fe.tushare&&(U.value={...U.value,...fe.tushare}),fe.feishu&&(y.value={...y.value,...fe.feishu}),fe.ai&&(g.value={...g.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate}),fe.theme&&!localStorage.getItem("quant_theme")&&E(fe.theme)}l.value=!1,h.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),l.value=!1}}async function le(){Q.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(Q.value=ae.success?"connected":"disconnected",ae.success){const fe=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+fe)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{Q.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function G(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();Q.value=ae.success?"connected":"disconnected"}catch{Q.value="disconnected"}}async function M(){var re;F.value=!0;try{const fe=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();fe.success?(J.value=parseInt(((re=fe.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(fe.message)):ElementPlus.ElMessage.error(fe.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{F.value=!1}}async function W(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(U.value={...U.value,...ae.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function ie(re){if(!re)return"";const ae=String(re),fe=ae.length;if(fe<=4)return ae[0]+"*".repeat(fe-1);const Ne=fe<=8?2:4;return ae.slice(0,Ne)+"*".repeat(fe-Ne-Ne)+ae.slice(-Ne)}async function ue(re){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:re})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(fe){ElementPlus.ElMessage.error("查看失败: "+fe.message)}return null}async function Me(re){const ae=I.value[re];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=ie(ae.token);return}const fe=await ue(re);fe!==null&&(ae.token=fe,ae._revealed=!0)}async function $(re){const ae=I.value[re];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=ie(ae.token));return}ae._editing=!0;try{const fe=await ue(re);if(fe===null){ae._editing=!1;return}ae.token=fe,ae._revealed=!0}catch(fe){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+fe.message)}}}async function ce(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const fe=ae.config.sources,Ne=ze=>{const Be={...I.value[ze],...fe[ze]||{}};return Be._editing=!1,Be._revealed=!1,Be._masked=Be.token||"",Be.token="",Be};I.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...I.value.akshare,...fe.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[ze,Be]of Object.entries(Ne.status))N.value[ze]=Be.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function Re(){try{const re={};for(const[ae,fe]of Object.entries(I.value)){const{_revealed:Ne,_masked:ze,_editing:Be,...xt}=fe;!Be&&ae!=="akshare"&&(xt.token=""),re[ae]=xt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),l.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function se(re){N.value[re]="testing";try{const ae=I.value[re];ae&&ae._editing&&await Re();const Ne=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();N.value[re]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Ne.message}`)}catch{N.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function pe(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(y.value={...y.value,...ae},O.value=JSON.parse(JSON.stringify(y.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function Te(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)g.value={...g.value,...ae.data};else{const fe=localStorage.getItem("quant_ai_config");fe&&(g.value=JSON.parse(fe))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(g.value=JSON.parse(ae))}}async function ve(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const fe=ae.config;fe.tushare&&(U.value={...U.value,...fe.tushare}),fe.datasource&&fe.datasource.sources&&(I.value={sxsc_tushare:{...I.value.sxsc_tushare,...fe.datasource.sources.sxsc_tushare||{}},tushare:{...I.value.tushare,...fe.datasource.sources.tushare||{}},akshare:{...I.value.akshare,...fe.datasource.sources.akshare||{}}}),fe.feishu&&(y.value={...y.value,...fe.feishu},O.value=JSON.parse(JSON.stringify(y.value))),fe.ai&&(g.value={...g.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.theme&&!localStorage.getItem("quant_theme")&&E(fe.theme),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function be(){var re,ae,fe,Ne;try{const Be=await(await fetch("/api/dashboard")).json(),xt=Be.success?Be.data:Be;J.value=((re=xt==null?void 0:xt.stats)==null?void 0:re.total_stocks_covered)||null;const kt=await(await fetch("/api/dates")).json();Z.value=((ae=kt==null?void 0:kt.data)==null?void 0:ae.total)||((Ne=(fe=kt==null?void 0:kt.data)==null?void 0:fe.dates)==null?void 0:Ne.length)||null;const we=await(await fetch("/api/ai/history")).json();ne.value="ok"}catch{ne.value="pending"}}async function qe(){try{const ae=await(await fetch("/api/dashboard")).json();S.value=ae.success?ae.data:ae,q.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:v,configChanged:d,globalConfigDirty:l,lastSavedTime:m,feishuConfigOriginal:O,aiConfigOriginal:K,tushareConfigOriginal:B,tushareConfig:U,tushareStatus:Q,datasourceConfig:I,datasourceStatus:N,syncingData:F,stockCount:J,tradeDateCount:Z,aiStatus:ne,appVersion:ee,showImportDialog:L,rateLimitConfig:s,rateLimitDirty:h,rateLimitSaving:n,loadRateLimit:f,saveRateLimit:X,saveAiConfig:D,testAiApi:p,exportConfig:r,importConfig:k,saveAllConfig:u,resetAllConfig:R,testTushareConnection:le,checkTushareConnection:G,syncStockData:M,loadTushareConfig:W,loadDatasourceConfig:ce,saveDatasourceConfig:Re,testDatasource:se,toggleDatasourceKeyReveal:Me,toggleDatasourceEdit:$,loadFeishuConfig:pe,loadAiConfig:Te,loadUserConfig:ve,loadSystemStatus:be,loadDashboardData:qe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:b}=Vue,{currentUser:e,applyTheme:d,allMenuDefs:g,loadGroupConfig:A}=a,y=function(ve){const be=window.__quantModules&&window.__quantModules.themes;return be&&be.applyLegacyTheme?be.applyLegacyTheme(ve):d(ve)},c=t([]),w=t(""),o=t(""),C=t("users"),x=t({}),T=t({}),S=b(()=>{let ve=c.value;if(o.value&&(ve=ve.filter(qe=>(qe.group||qe.role)===o.value)),!w.value)return ve;const be=w.value.toLowerCase();return ve.filter(qe=>qe.username.toLowerCase().includes(be))});function q(ve){x.value={...x.value,[ve]:!x.value[ve]}}async function P(ve,be){try{const re=await(await fetch("/api/groups/"+be+"/members/"+ve,{method:"DELETE"})).json();re.success?(await $(),await ue()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function E(ve){const be=T.value[ve];if(be)try{const re=await(await fetch("/api/groups/"+ve+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:be})})).json();re.success?(await $(),await ue(),T.value={...T.value,[ve]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function v(ve,be){try{const re=await(await fetch("/api/users/"+ve.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:be})})).json();re.success?await $():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=t(!1),m=t(null),O=t({username:"",password:"",role:"user",theme:"tech-blue"}),K=t(!1),B=t(null),U=t(!1),Q=t(!1),I=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),N=t({}),F=t(!1),J=t({group_id:"",name:"",description:""}),Z=t(!1),ne=t([]),ee=t(""),L=t(""),s=t({});function h(ve){s.value={...s.value,[ve]:!s.value[ve]}}function n(ve){return!c.value||!c.value.length?0:c.value.filter(be=>(be.group||be.role)===ve).length}function f(ve){const be=(ve==null?void 0:ve.visible_menus)||{};return Object.values(be).filter(Boolean).length}const X=b(()=>Object.keys(ie.value).length);async function D(ve){L.value=ve,Q.value=!0,await p(ve)}async function p(ve){try{const qe=await(await fetch("/api/groups/"+ve+"/members")).json();qe.success&&(ne.value=qe.members||[])}catch(be){ne.value=[],console.error("[loadGroupMembers]",be)}}async function r(){if(!(!ee.value||!L.value)){Z.value=!0;try{const be=await(await fetch("/api/groups/"+L.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ee.value})})).json();be.success?(await p(L.value),await $(),ee.value=""):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{Z.value=!1}}}async function k(ve){try{const qe=await(await fetch("/api/groups/"+L.value+"/members/"+ve,{method:"DELETE"})).json();qe.success?(await p(L.value),await $()):ElementPlus.ElMessage.error(qe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const u=b(()=>{if(!c.value)return[];const ve=new Set(ne.value.map(be=>be.username));return c.value.filter(be=>be.username!=="admin"&&be.username!=="guest"&&!ve.has(be.username))});function R(ve){const be=I.value.visible_menus[ve],qe=g.find(re=>re.key===ve);if(qe)if(be){const re=N.value[ve]||{};qe.subPages.forEach(ae=>{const fe=ve+"."+ae;I.value.visible_sub_pages[fe]=re[ae]!==void 0?re[ae]:!0})}else{const re={};qe.subPages.forEach(ae=>{const fe=ve+"."+ae;re[ae]=I.value.visible_sub_pages[fe],I.value.visible_sub_pages[fe]=!1}),N.value[ve]=re}}function le(ve){B.value=ve;const be=ie.value[ve]||{};I.value={name:be.name||ve,description:be.description||"",visible_menus:{...be.visible_menus||{}},visible_sub_pages:{...be.visible_sub_pages||{}}},N.value={},g.forEach(qe=>{const re={};qe.subPages.forEach(ae=>{re[ae]=I.value.visible_sub_pages[qe.key+"."+ae]}),N.value[qe.key]=re}),U.value=!0}async function G(){Z.value=!0;try{const be=await(await fetch("/api/groups/"+B.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();be.success?(U.value=!1,B.value=null,await ue(),await A()):ElementPlus.ElMessage.error(be.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Z.value=!1}}async function M(ve){var be;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((be=ie.value[ve])==null?void 0:be.name)||ve)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+ve,{method:"DELETE"})).json();ae.success?await ue():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function W(){if(J.value.group_id){Z.value=!0;try{const be=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(J.value)})).json();be.success?(F.value=!1,J.value={group_id:"",name:"",description:""},await ue()):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{Z.value=!1}}}const ie=t({});async function ue(){try{if(!localStorage.getItem("quant_token"))return;const be=await fetch("/api/groups");if(be.ok){const qe=await be.json();ie.value=qe.groups||{}}}catch(ve){console.warn("loadAllGroups:",ve)}}function Me(ve){var be;return((be=ie.value[ve])==null?void 0:be.name)||ve||"--"}async function $(){try{if(!localStorage.getItem("quant_token")){c.value=[];return}const be=await fetch("/api/users");if(be.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const qe=await be.json();c.value=qe.users||[]}catch(ve){c.value=[],console.error("[loadUsers] error:",ve)}}function ce(ve){m.value=ve,O.value={username:ve.username,password:"",role:ve.role,theme:ve.theme||"tech-blue",group:ve.group||ve.role},l.value=!0}async function Re(){if(O.value.username){K.value=!0;try{const ve=m.value?"PUT":"POST",be=m.value?`/api/users/${O.value.username}`:"/api/users",re=await(await fetch(be,{method:ve,headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&O.value.username===e.value.username){const ae=O.value.theme;ae&&ae!==e.value.theme&&(e.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(e.value)),y(ae))}l.value=!1,m.value=null,await $()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{K.value=!1}}}async function se(ve){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ve}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await $())}catch(be){console.error("[deleteUser]",be)}}async function pe(ve){try{const qe=await(await fetch(`/api/users/${ve.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ve.enabled})})).json();qe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(qe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Te(ve){try{const{value:be}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ve.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(be){const re=await(await fetch(`/api/users/${ve.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:be})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:c,userSearch:w,groupFilter:o,userPageTab:C,expandedGroups:x,addMemberGroupMap:T,filteredUsers:S,toggleGroupExpand:q,removeMemberFromGroupInline:P,addMemberToGroupInline:E,changeUserGroup:v,showAddUser:l,editingUser:m,userForm:O,savingUser:K,editingGroup:B,menuConfigDialog:U,memberDialog:Q,groupEditForm:I,subPageCache:N,showAddGroup:F,addGroupForm:J,savingGroup:Z,groupMembers:ne,addMemberUsername:ee,selectedMemberGroup:L,subPageSectionExpanded:s,toggleSubPageSection:h,getGroupMemberCount:n,getMenuEnabledCount:f,groupCount:X,openMemberManager:D,loadGroupMembers:p,addMemberToGroup:r,removeMemberFromGroup:k,availableUsersForGroup:u,onParentToggle:R,openMenuConfig:le,saveMenuConfig:G,deleteGroupConfig:M,createGroup:W,allGroups:ie,getGroupName:Me,loadAllGroups:ue,loadUsers:$,editUser:ce,saveUser:Re,deleteUser:se,toggleUserEnabled:pe,resetUserPassword:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:b}=Vue,{stockKlineLoaded:e,stockDetailVisible:d,stockDetailTab:g,stockDetail:A,disposeStockKline:y}=a,c=t([]),w=t(!1),o=t(!1),C=t("date"),x=t([]),T=t([]),S=t([]),q=t([]),P=b(()=>{var r,k;const p=[];for(const u of c.value){if(!u||u.id==null)continue;const R=u.stock_name||u.stock_code||"",le=Array.isArray(u.messages)?u.messages:[];p.push({id:u.id,stock_code:u.stock_code,stock_name:R,first_msg:u.first_msg||((k=(r=le[0])==null?void 0:r.content)==null?void 0:k.substring(0,50))||"",msg_count:u.msg_count||le.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:le})}return p}),E=b(()=>{const p={};for(const k of P.value){const u=k.date||"未知";p[u]||(p[u]=[]),p[u].push(k)}const r={};return Object.keys(p).sort((k,u)=>u.localeCompare(k)).forEach(k=>r[k]=p[k]),r}),v=b(()=>{const p={};for(const k of P.value){const u=k.month||"未知";p[u]||(p[u]=[]),p[u].push(k)}const r={};return Object.keys(p).sort((k,u)=>u.localeCompare(k)).forEach(k=>r[k]=p[k]),r}),l=b(()=>{const p={};for(const r of P.value){const k=`${r.stock_name}(${r.stock_code})`;p[k]||(p[k]=[]),p[k].push(r)}return p});function m(p){const r=x.value.indexOf(p);r>=0?x.value.splice(r,1):x.value.push(p)}function O(p){const r=E.value[p]||[];if(r.every(u=>x.value.includes(u.id)))x.value=x.value.filter(u=>!r.some(R=>R.id===u));else for(const u of r)x.value.includes(u.id)||x.value.push(u.id)}function K(p){const r=v.value[p]||[];if(r.every(u=>x.value.includes(u.id)))x.value=x.value.filter(u=>!r.some(R=>R.id===u));else for(const u of r)x.value.includes(u.id)||x.value.push(u.id)}function B(p){const r=l.value[p]||[];if(r.every(u=>x.value.includes(u.id)))x.value=x.value.filter(u=>!r.some(R=>R.id===u));else for(const u of r)x.value.includes(u.id)||x.value.push(u.id)}function U(p){const r=T.value.indexOf(p);r>=0?T.value.splice(r,1):T.value.push(p)}function Q(p){const r=S.value.indexOf(p);r>=0?S.value.splice(r,1):S.value.push(p)}function I(p){const r=q.value.indexOf(p);r>=0?q.value.splice(r,1):q.value.push(p)}function N(){x.value.length===P.value.length?x.value=[]:x.value=P.value.map(p=>p.id)}async function F(){if(x.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${x.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const p of[...x.value])await X(p);x.value=[]}}const J={};async function Z(p){A.value={stock:p.stock_code,name:p.stock_name},d.value=!0,g.value="chat",e.value=!1,y(),L.value=!0,s.value="",ee.value=[];try{let r=J[p.id];if(!r){const k=await fetch("/api/ai/chat/history/"+p.id);if(!k.ok)throw new Error("load history failed");r=(await k.json()).messages||[],J[p.id]=r}ee.value=r.map(k=>({role:k.role,content:k.content}))}catch{s.value="历史消息加载失败，请重试"}finally{L.value=!1}}const ne=t(""),ee=t([]),L=t(!1),s=t("");async function h(){var k;const p=ne.value.trim();if(!p||L.value)return;s.value="",ee.value.push({role:"user",content:p}),ne.value="",L.value=!0;const r=ee.value.length;ee.value.push({role:"assistant",content:""});try{const le=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=A.value)==null?void 0:k.stock)||"",message:p})})).body.getReader(),G=new TextDecoder;let M="";for(;;){const{done:W,value:ie}=await le.read();if(W)break;M+=G.decode(ie,{stream:!0});const ue=M.split(`
`);M=ue.pop()||"";for(const Me of ue)if(Me.startsWith("data: "))try{const $=JSON.parse(Me.slice(6));$.token?ee.value[r].content+=$.token:$.done?console.log("Stream done:",$.session_id):$.error&&(s.value=$.error)}catch($){console.warn("SSE parse error:",$)}}}catch(u){ee.value[r].content||(ee.value[r].content="网络错误: "+u.message)}L.value=!1}async function n(p){var k;s.value="",L.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ee.value.push({role:"user",content:r[p]||r.comprehensive});try{const R=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=A.value)==null?void 0:k.stock)||"",mode:p})});if(R.ok){const le=await R.json();ee.value.push({role:"assistant",content:le.reply||"无回复"})}}catch(u){s.value="网络错误: "+u.message}L.value=!1}async function f(){w.value=!0,o.value=!1;try{const p=await fetch("/api/ai/chat/history?view=date");if(p.ok){const r=await p.json(),k=[];for(const u of r)for(const R of u.items||[])k.push(R);c.value=k}else o.value=!0}catch(p){console.error(p),o.value=!0}finally{w.value=!1}}async function X(p){try{await fetch("/api/ai/chat/history/"+p,{method:"DELETE"}),c.value=c.value.filter(r=>r.id!==p)}catch(r){console.error("deleteChatSession:",r)}}function D(p){if(!p)return"";const r=String(p).split(`
`),k=[],u=[];let R=0;for(;R<r.length;){if(/^\s*\|.*\|\s*$/.test(r[R])){let G=R;const M=[];for(;G<r.length&&/^\s*\|.*\|\s*$/.test(r[G]);)M.push(r[G]),G++;const W=Me=>Me.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map($=>$.trim()),ie=M.map(W);if(ie.length>1&&ie[1].every(Me=>/^:?-{3,}:?$/.test(Me))){const Me=Math.max(...ie.map(se=>se.length)),$=ie[0].slice(0,Me),ce=ie.slice(2);let Re="<table>";ce.length?(Re+="<thead><tr>"+$.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Re+="<tbody>"+ce.map(se=>"<tr>"+se.slice(0,Me).map(pe=>"<td>"+pe+"</td>").join("")+"</tr>").join("")+"</tbody>"):Re+="<tbody><tr>"+$.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Re+="</table>",k.push(Re),u.push("\0T"+(k.length-1)+"\0"),R=G;continue}for(;R<G;)u.push(r[R]),R++;continue}u.push(r[R]),R++}let le=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return k.forEach((G,M)=>{le=le.split("\0T"+M+"\0").join(G)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(le=window.__quantModules.core.sanitizeHtml(le)),le}return{chatSessions:c,chatHistoryView:C,selectedChatIds:x,expandedChatDates:T,expandedChatMonths:S,expandedChatStocks:q,chatHistoryLoading:w,chatHistoryError:o,allChatSessionsFlat:P,chatGroupedByDate:E,chatGroupedByMonth:v,chatGroupedByStock:l,toggleSelectChat:m,toggleSelectChatDate:O,toggleSelectChatMonth:K,toggleSelectChatStock:B,toggleChatDateExpand:U,toggleChatMonthExpand:Q,toggleChatStockExpand:I,selectAllChatSessions:N,deleteSelectedChatSessions:F,viewChatSession:Z,loadChatHistory:f,deleteChatSession:X,renderMarkdown:D,stockChatInput:ne,stockChatMessages:ee,stockChatLoading:L,stockChatError:s,askStockSend:h,askStockQuick:n}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:b,watch:e}=Vue,{consensus:d,currentPage:g,currentSubPage:A,dashboardData:y,searchKeyword:c,statusFilter:w,strategyFilter:o,strategyFilterCounts:C}=a;function x(Q){const I=o.value.selected;if(!I||I.length===0)return Q;const N=o.value.mode;return Q.filter(F=>{const J=F.strategy_names||F.strategies||[];return N==="union"?I.some(Z=>J.includes(Z)):I.every(Z=>J.includes(Z))})}const T=b(()=>{const Q=x(d.value||[]);return{all:Q.length,newCount:Q.filter(I=>I.status==="new").length,current:Q.filter(I=>I.status==="current").length,out:Q.filter(I=>I.status==="out").length}}),S=b(()=>{let Q=d.value||[];if(w.value!=="all"&&(Q=Q.filter(I=>I.status===w.value)),Q=x(Q),c.value){const I=c.value.toLowerCase();Q=Q.filter(N=>N.code.toLowerCase().includes(I)||N.name&&N.name.toLowerCase().includes(I))}return Q}),q=b(()=>{const Q=d.value||[],I={},N={};for(const F of Q)F.code&&F.name&&(N[F.code]=F.name);for(const F of Q){const J=F.strategy_names||F.strategies||[];for(const Z of J)I[Z]||(I[Z]={strategy:Z,count:0,codes:[],names:[]}),I[Z].count++,I[Z].codes.includes(F.code)||(I[Z].codes.push(F.code),I[Z].names.push({code:F.code,name:N[F.code]||F.code}))}return Object.values(I).sort((F,J)=>J.count-F.count)}),P=b(()=>{const Q=o.value.selected,I=o.value.mode,N={};for(const[F,J]of Object.entries(C.value)){const Z=J||[];!Q||Q.length===0?N[F]=Z.length:I==="union"?N[F]=Z.filter(ne=>ne.strategies&&Q.some(ee=>ne.strategies.includes(ee))).length:N[F]=Z.filter(ne=>ne.strategies&&Q.every(ee=>ne.strategies.includes(ee))).length}return N});function E(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const v=b(()=>{const Q=(y.value||{}).consensus_rank||[];return x(Q)}),l=b(()=>{const Q=d.value||C.value.day||[];return x(Q).length}),m=b(()=>{const Q=(y.value||{}).strategy_counts||[],I=d.value||C.value.day||[];if(I.length===0)return Q;const N=x(I),F={};N.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(ee=>{F[ee]=(F[ee]||0)+1})});const J=N.length||1;return Q.map(Z=>{const ne=Z.strategy_name||Z.strategy_id,ee=F[ne]||0;return{...Z,count:ee,percentage:Math.round(ee/J*1e3)/10}})}),O=b(()=>{const Q=(y.value||{}).pool_changes||{},I=(Q.new_count||0)-(Q.out_count||0);return I>0?{dir:"up",text:"↑"+I}:I<0?{dir:"down",text:"↓"+Math.abs(I)}:{dir:"flat",text:"→0"}}),K=b(()=>{const Q=(y.value||{}).time_coverage||{},I=new Date(Q.start_date),N=new Date(Q.end_date),F=new Date;if(!I.getTime()||!N.getTime()||F>=N)return 100;if(F<=I)return 0;const J=N-I,Z=F-I;return Math.round(Z/J*100)}),B=t(null);function U(Q){o.value.selected=[Q],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([Q])),localStorage.setItem("quant_strategy_filter_mode","union"),g.value="calendar",A.value="calendar"}return{applyStrategyFilter:x,statusCounts:T,stockPool:S,strategyDistribution:q,strategyPreviewCount:P,saveStrategyFilter:E,filteredConsensusRank:v,currentPoolSize:l,filteredStrategyCounts:m,poolChangeBadge:O,timeBarPercent:K,lastRefreshTime:B,navigateToStrategyFilter:U}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function b(d){return a[d]||"var(--text-tertiary)"}function e(d){return t[d]||"var(--bg-hover)"}window.__quantModules.watchlist={create(d){const{ref:g,computed:A,watch:y}=Vue,{currentUser:c,selectedDate:w,stockDetail:o,stockDetailTab:C,stockDetailVisible:x,stockDetailLoading:T,stockKlineLoaded:S,viewCache:q,animateScoreEntrance:P,loadStockKline:E,refreshStockScore:v,disposeStockKline:l,aiHistory:m,aiLoading:O,aiEvalStage:K,aiEvalElapsed:B,aiEvalError:U,aiResult:Q,loadLastEvaluation:I,autoEvaluateConfig:N,autoEvaluateScope:F,batchStocks:J,batchRunning:Z,batchTotal:ne,batchCompleted:ee,batchCurrent:L,batchStatuses:s,batchResults:h,batchEvalErrors:n,expandedDates:f,expandedStocks:X,savingConfig:D,selectedHistoryIds:p,selectedWatchlistCodes:r,showAutoEvaluateSettings:k,showBatchEvaluate:u}=d,R=i=>(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim(),le=g(""),G=g("default"),M=g("default"),W=g([]),ie=A(()=>new Set(W.value.map(i=>i.code))),ue=g(!1),Me=g(!1),$=A(()=>{const i=[...W.value];return M.value==="name"?i.sort((V,oe)=>V.name.localeCompare(oe.name,"zh")):M.value==="added"?i.sort((V,oe)=>(oe.added_at||"").localeCompare(V.added_at||"")):M.value==="score"&&i.sort((V,oe)=>{const Se=Re(V.code);return Re(oe.code)-Se}),i});function ce(i){const V=m.value.filter(Se=>Se.stock_code===i);if(V.length===0)return null;const oe=V.reduce((Se,Ee)=>Se.evaluate_time>Ee.evaluate_time?Se:Ee);return{score:oe.result.total_score,color:b(oe.result.level),bg:e(oe.result.level)}}function Re(i){const V=ce(i);return V?V.score:0}function se(i){$t(i.code,i.name),qe.value=qe.value.filter(V=>V.code!==i.code),be.value=""}const pe=A(()=>new Set(m.value.map(i=>i.stock_code))),Te=g(new Set);function ve(i){Te.value.add(i)}const be=g(""),qe=g([]),re=g(!1),ae=g({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),fe=g(!1),Ne=g(!1),ze=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};ze.REALTIME_WS_PATH;const Be=ze.REALTIME_DEGRADED_TEXT||"数据不可达",xt=ze.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";ze.WARN_RISE_SPEED_THRESHOLD!=null&&ze.WARN_RISE_SPEED_THRESHOLD,ze.WARN_VOLUME_RATIO_THRESHOLD!=null&&ze.WARN_VOLUME_RATIO_THRESHOLD;const Tt=ze.quoteFmt||{price:i=>i==null?"--":Number(i).toFixed(2),pct:i=>i==null?"--":Number(i).toFixed(2)+"%",num:i=>i==null?"--":Number(i).toFixed(2),color:i=>""},kt=3,ke=5e3,we=g({}),Le=g(!1),Pe=g("idle");let Je=null,Qe=null,$e=0;function St(i){return ze.checkQuoteWarning?ze.checkQuoteWarning(i):null}function ht(i){return St(we.value[i])}function vt(i){return Tt.color(we.value[i])}function Dt(i){return Tt.price(we.value[i]&&we.value[i].price)}function ea(i){return Tt.pct(we.value[i]&&we.value[i].change_pct)}function z(i,V){return Tt.num(we.value[i]&&we.value[i][V])}function te(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function xe(){if(!Je||Je.readyState!==1)return;const i=(W.value||[]).map(V=>V.code);i.length!==0&&Je.send(JSON.stringify({subscribe:i}))}function Ae(){if(Qe&&(clearTimeout(Qe),Qe=null),Je){try{Je.onopen=null,Je.onmessage=null,Je.onerror=null,Je.onclose=null,Je.close()}catch{}Je=null}we.value={},Le.value=!1,Pe.value="idle"}function Ve(){const i=te();if(!i||!ze.buildRealtimeWsUrl||Pe.value==="open"||Pe.value==="connecting")return;let V;try{V=ze.buildRealtimeWsUrl()+"?token="+encodeURIComponent(i)}catch{Pe.value="offline",Le.value=!0;return}Pe.value="connecting";let oe=null;try{oe=new WebSocket(V)}catch{Pe.value="offline",Le.value=!0;return}Je=oe,oe.onopen=function(){Pe.value="open",$e=0,xe()},oe.onmessage=function(Se){let Ee=null;try{Ee=JSON.parse(Se.data||"{}")}catch{return}if(!Ee||Ee.type!=="quotes")return;if(Le.value=!!Ee.degraded,Ee.degraded||!Array.isArray(Ee.data)){we.value={};return}const ut={};Ee.data.forEach(function(Ue){Ue&&Ue.code&&(ut[Ue.code]=Ue)}),we.value=ut},oe.onerror=function(){Pe.value="offline",Le.value=!0},oe.onclose=function(){Pe.value="offline",$e<kt?($e++,Qe=setTimeout(function(){Pe.value!=="open"&&Ve()},ke*$e)):Le.value=!0}}y(W,function(){Pe.value==="open"&&xe()}),te()&&setTimeout(Ve,500);async function yt(){if(!o.value)return;O.value=!0,Q.value=null,U.value="",K.value="fetching",B.value=0;const i=Date.now(),V=setInterval(()=>{O.value&&(B.value=Math.round((Date.now()-i)/1e3))},500);try{const oe=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:o.value.stock,stock_name:o.value.name||o.value.stock,strategy:G.value})});K.value="calculating";const Se=await oe.json();K.value="analyzing",Se.success?(await nextTick(),Q.value=Se.data,C.value="ai",Y()):(U.value=Se.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch(oe){U.value=oe&&oe.message&&!String(oe.message).includes("Failed to fetch")?oe.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{clearInterval(V),O.value=!1,B.value=0,U.value?K.value="":(K.value="done",setTimeout(()=>{K.value==="done"&&(K.value="")},800))}}const Ye=50,Ke=g(0),dt=g(!1),st=A(()=>m.value.length<Ke.value);async function Y(){ue.value=!0,Me.value=!1;try{if(!localStorage.getItem("quant_token")){m.value=[];return}const V=await fetch(`/api/ai/history?limit=${Ye}&offset=0`);if(V.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const oe=await V.json();oe.success?(m.value=oe.data||[],Ke.value=oe.total!=null?oe.total:m.value.length):Me.value=!0}catch(i){console.error("[loadAiHistory] error:",i),Me.value=!0}finally{ue.value=!1}}async function ge(){if(!(dt.value||!st.value)){dt.value=!0;try{const V=await(await fetch(`/api/ai/history?limit=${Ye}&offset=${m.value.length}`)).json();if(V.success&&Array.isArray(V.data)){const oe=new Set(m.value.map(Ee=>Ee.id)),Se=V.data.filter(Ee=>!oe.has(Ee.id));m.value=m.value.concat(Se),V.total!=null&&(Ke.value=V.total)}}catch(i){console.warn("[loadMoreAiHistory] error:",i)}finally{dt.value=!1}}}async function Xe(i){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const oe=await(await fetch(`/api/ai/history/${i}`,{method:"DELETE"})).json();if(oe.success){ElementPlus.ElMessage.success("删除成功"),Y();const Se=p.value.indexOf(i);Se>=0&&p.value.splice(Se,1)}else ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{}}function mt(i){const V=p.value.indexOf(i);V>=0?p.value.splice(V,1):p.value.push(i)}function tt(){p.value=[]}function It(){r.value=[]}async function We(){const i=p.value;if(i.length===0)return;const V=m.value.filter(oe=>i.includes(oe.id)).map(oe=>oe.stock_code);u.value=!0,J.value=[...new Set(V)].join(",")}async function Ct(){const i=p.value;if(i.length===0)return;const V=m.value.filter(Ee=>i.includes(Ee.id)),oe=[...new Map(V.map(Ee=>[Ee.stock_code,Ee])).values()];let Se=0;for(const Ee of oe)ie.value.has(Ee.stock_code)||(await $t(Ee.stock_code,Ee.stock_name||Ee.stock_code),Se++);Se>0?ElementPlus.ElMessage.success(`已加入 ${Se} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Ft(){const i=p.value;if(i.length===0)return;const V=m.value.filter(Se=>i.includes(Se.id)),oe=[...new Map(V.map(Se=>[Se.stock_code,Se])).values()];try{const Ee=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:oe.map(ut=>({stock_code:ut.stock_code,stock_name:ut.stock_name||""}))})})).json();Ee&&Ee.success?ElementPlus.ElMessage.success(`已登记 ${Ee.count||oe.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ee&&Ee.detail||"批量加入组合失败")}catch(Se){console.warn("batchAddToPortfolio failed:",Se),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function zt(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const i of r.value)await Yt(i);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(i){i&&i.message!=="cancel"&&console.warn("batchRemoveWatchlist:",i)}}function lt(i){const V=r.value.indexOf(i);V>=0?r.value.splice(V,1):r.value.push(i)}function qt(){p.value.length===m.value.length?p.value=[]:p.value=m.value.map(i=>i.id)}function Ht(){r.value.length===W.value.length?r.value=[]:r.value=W.value.map(i=>i.code)}async function Gt(){if(p.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${p.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const V=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:p.value})})).json();V.success?(ElementPlus.ElMessage.success(V.message),p.value=[],Y()):ElementPlus.ElMessage.error(V.message||"删除失败")}catch{}}async function ft(){try{const V=await(await fetch("/api/ai/auto-config")).json();V.success&&(N.value=V.data,V.data.evaluate_scope&&(F.value=V.data.evaluate_scope))}catch(i){console.warn("loadAutoEvaluateConfig failed:",i)}}async function rt(){D.value=!0;try{N.value.evaluate_scope=F.value;const V=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)})).json();V.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),k.value=!1):ElementPlus.ElMessage.error(V.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{D.value=!1}}const Kt=g(!1);async function Et(){Kt.value=!0;try{const V=await(await fetch("/api/watchlist")).json();V.success&&(W.value=V.stocks||[])}catch(i){console.warn("loadWatchlist failed:",i)}finally{Kt.value=!1}}async function $t(i,V){try{const Se=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:i,name:V})})).json();if(Se.success)return Se.existed||W.value.push({code:i,name:V,added_at:new Date().toISOString()}),!0}catch(oe){console.warn("addToWatchlist failed:",oe)}return!1}async function Yt(i){try{await fetch(`/api/watchlist/${encodeURIComponent(i)}`,{method:"DELETE"}),W.value=W.value.filter(V=>V.code!==i)}catch(V){console.warn("removeFromWatchlist failed:",V)}}async function ta(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),W.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(i){console.warn("clearWatchlist failed:",i)}}async function pt(i,V){ie.value.has(i)?(await Yt(i),ElementPlus.ElMessage.info("已移除自选")):await $t(i,V)&&ElementPlus.ElMessage.success("已加入自选")}async function aa(i,V){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(i,V||"");const oe=new Date().toISOString().split("T")[0],Se=w.value||oe;C.value="kline",Q.value=null,U.value="",l("stockKlineChart"),o.value=null,T.value=!0,S.value=!1,x.value=!0,nextTick(()=>P());try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(i)}?date=${Se}`);o.value=await Ee.json()}catch{o.value={stock:i,name:V,total_days:0}}finally{T.value=!1}await nextTick(),await E("daily"),v(),I(i)}const sa=g(!1);async function ma(){var i;if(W.value.length!==0){sa.value=!0;try{const oe=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();oe.success&&oe.loaded>0?(((i=oe.details)==null?void 0:i.loaded)||[]).forEach(Se=>Te.value.add(Se.code)):oe.loaded===0&&oe.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(V){console.error("预加载K线失败:",V)}finally{sa.value=!1}}}async function ha(i,V){O.value=!0,Q.value=null,U.value="",K.value="fetching",S.value=!1,l();const oe=new Date().toISOString().split("T")[0],Se=w.value||oe;try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(i)}?date=${Se}`);o.value=await Ee.json()}catch{o.value={stock:i,name:V,total_days:0}}C.value="ai",x.value=!0,await nextTick();try{const ut=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:i,stock_name:V})})).json();ut.success?(Q.value=ut.data,Y()):(U.value=ut.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch{U.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{O.value=!1,K.value=""}}async function la(){W.value.length!==0&&(u.value=!0,J.value=W.value.map(i=>i.code).join(","))}async function H(){r.value.length!==0&&(u.value=!0,J.value=r.value.join(","))}async function _e(){if(!be.value.trim()){qe.value=[];return}re.value=!0;try{const V=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(be.value)}`)).json();qe.value=(V.results||[]).filter(oe=>!ie.value.has(oe.code))}catch(i){console.warn("searchStockForWatchlist failed:",i)}finally{re.value=!1}}async function Oe(){try{const V=await(await fetch("/api/data-refresh/config")).json();ae.value=V}catch(i){console.error("加载数据刷新配置失败:",i)}}async function De(){Ne.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ne.value=!1}}async function nt(){var i;fe.value=!0;try{const oe=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();oe.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((i=oe.parser_stats)==null?void 0:i.dates_count)||0}交易日`),q.clear(),await Oe()):ElementPlus.ElMessage.error(oe.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{fe.value=!1}}const Ze=g(!1);async function Pt(){Ze.value=!0;try{const V=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(V.success){const oe=V.result||{},Se=V.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${oe.pulled||0}/${oe.total||0}, 财务 ${Se.pulled||0}/${Se.total||0}`),q.clear(),await Oe()}else ElementPlus.ElMessage.error(V.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Ze.value=!1}}const Nt=A(()=>{const i={};for(const V of m.value){const oe=(V.evaluate_time||"").split("T")[0];i[oe]||(i[oe]=[]),i[oe].push(V)}for(const V in i)i[V].sort((oe,Se)=>Se.evaluate_time.localeCompare(oe.evaluate_time));return i}),Bt=A(()=>{const i={};for(const V of m.value){const oe=V.stock_code;i[oe]||(i[oe]=[]),i[oe].push(V)}for(const V in i)i[V].sort((oe,Se)=>Se.evaluate_time.localeCompare(oe.evaluate_time));return i}),pa=A(()=>{const i={};for(const V of m.value){const oe=(V.evaluate_time||"").split("T")[0].slice(0,7);i[oe]||(i[oe]=[]),i[oe].push(V)}for(const V in i)i[V].sort((oe,Se)=>Se.evaluate_time.localeCompare(oe.evaluate_time));return i}),ya=A(()=>Object.keys(Bt.value).length),ba=A(()=>{const i=m.value.length;return i===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(oe=>{const Se=m.value.filter(Ee=>Ee.result.total_score>=oe.min&&Ee.result.total_score<=oe.max).length;return{...oe,count:Se,pct:Math.round(Se/i*100)}})});async function na(){if(!le.value)return;const i=W.value.find(V=>V.code===le.value);if(i){O.value=!0,Q.value=null,U.value="",K.value="fetching";try{o.value={stock:i.code,name:i.name,total_days:0},x.value=!0,C.value="ai",await nextTick();const oe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:i.code,stock_name:i.name,strategy:G.value})})).json();oe.success?(Q.value=oe.data,Y(),le.value=""):(U.value=oe.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch{U.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{O.value=!1,K.value=""}}}function Pa(i){const V=f.value.indexOf(i);V>=0?f.value.splice(V,1):f.value.push(i)}function oa(i){const oe=(Nt.value[i]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}function Ra(i){const oe=(pa.value[i]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}function ra(i){const V=X.value.indexOf(i);V>=0?X.value.splice(V,1):X.value.push(i)}function qa(i){const oe=(Bt.value[i]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}const Ot={},wa={};function Ea(i,V,oe){if(!i||(oe&&(wa[V]={el:i,records:oe}),Ot[V]===i))return;const Se=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ee=()=>{Object.keys(Ot).forEach(et=>{if(Ot[et]&&Ot[et]!==i){try{Ot[et].dispose()}catch{}delete Ot[et]}});const ut=[...oe].sort((et,jt)=>et.evaluate_time.localeCompare(jt.evaluate_time)),Ue=ut.map(et=>(et.evaluate_time||"").split("T")[0]),bt=ut.map(et=>{var jt;return((jt=et.result)==null?void 0:jt.total_score)??null}),Jt=ut.map(et=>{var jt;return((jt=et.result)==null?void 0:jt.level)??""}),Mt={primary:R("--qc-primary-600")||"#b8922a",textPrimary:R("--text-primary")||"#1f2937",textSecondary:R("--text-secondary")||"#6b7280",border:R("--chart-axis")||"#b9b2a6",axis:R("--chart-axis")||"#b9b2a6",split:R("--chart-split")||"#e7e1d6",up:R("--qc-market-up")||"#e63946",down:R("--qc-market-down")||"#2e7d32"},Qt=[];for(let et=1;et<bt.length;et++)bt[et]!=null&&bt[et-1]!=null&&Math.abs(bt[et]-bt[et-1])>=15&&Qt.push({name:"大幅变化",coord:[Ue[et],bt[et]],value:(bt[et]-bt[et-1]>0?"↑":"↓")+Math.abs(bt[et]-bt[et-1]),symbol:"pin",symbolSize:32,itemStyle:{color:bt[et]-bt[et-1]>0?Mt.up:Mt.down}});const Xt=echarts.init(i),wt=window.__quantModules&&window.__quantModules.echartsTheme;wt&&typeof wt.getEChartsTheme=="function"&&Xt.setOption(wt.getEChartsTheme()),Xt.setOption({tooltip:{trigger:"axis",backgroundColor:R("--bg-card")||"#ffffff",borderColor:Mt.border,textStyle:{color:Mt.textPrimary},formatter:function(et){var gt;const jt=(gt=et[0])==null?void 0:gt.dataIndex,fa=jt!=null?Jt[jt]:"";return Ue[jt]+"<br/>得分: "+bt[jt]+(fa?" ("+fa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ue,axisLabel:{fontSize:10,rotate:30,color:Mt.textSecondary},axisLine:{lineStyle:{color:Mt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Mt.textSecondary},splitLine:{lineStyle:{color:Mt.split}}},series:[{data:bt,type:"line",smooth:!0,lineStyle:{color:Mt.primary,width:2},itemStyle:{color:Mt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:R("--primary-rgb")?"rgba("+R("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:R("--primary-rgb")?"rgba("+R("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Qt.length>0?{data:Qt}:void 0}]}),Ot[V]=Xt};Se?Se().then(Ee).catch(()=>{}):Ee()}function za(){Object.keys(wa).forEach(i=>{const V=wa[i];if(!(!V||!V.el)){if(Ot[i]){try{Ot[i].dispose()}catch{}delete Ot[i]}Ea(V.el,i,V.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(za));async function ka(i){Q.value=i,S.value=!1,l();try{const V=await fetch(`/api/calendar/stock/${i.stock_code}?date=${w.value}`);o.value=await V.json()}catch{o.value={stock:i.stock_code,name:i.stock_name||i.stock_code,total_days:0,history:[]}}x.value=!0,C.value="ai"}async function _(){if(!J.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const i=J.value.split(/[,，\s]+/).filter(Ue=>Ue.trim());if(i.length===0)return;Z.value=!0,ne.value=i.length,ee.value=0,L.value="",s.value={},h.value={},n.value={},i.forEach(Ue=>{s.value[Ue]="pending",h.value[Ue]=null});const V={"Content-Type":"application/json"};let oe=0,Se=0,Ee=!1;try{const Ue=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:V,body:JSON.stringify({stock_codes:i})});if(Ue.ok&&Ue.body){Ee=!0;const bt=Ue.body.getReader(),Jt=new TextDecoder("utf-8");let Mt="",Qt=!1;for(;!Qt;){const{value:Xt,done:wt}=await bt.read();Qt=wt,Mt+=Jt.decode(Xt||new Uint8Array,{stream:!Qt});let et;for(;(et=Mt.indexOf(`

`))>=0;){const jt=Mt.slice(0,et);Mt=Mt.slice(et+2);const fa=jt.split(`
`).find(Ia=>Ia.startsWith("data: "));if(!fa)continue;let gt;try{gt=JSON.parse(fa.slice(6))}catch{continue}gt.type==="start"?gt.total&&(ne.value=gt.total):gt.type==="item"?(ee.value++,L.value=gt.stock_code,gt.success?(s.value[gt.stock_code]="success",h.value[gt.stock_code]=gt,oe++):(s.value[gt.stock_code]="error",n.value[gt.stock_code]=gt.error||"评估失败",Se++)):gt.type==="done"&&(typeof gt.success=="number"&&(oe=gt.success),typeof gt.fail=="number"&&(Se=gt.fail))}}if(Mt.trim()){const Xt=Mt.split(`
`).find(wt=>wt.startsWith("data: "));if(Xt)try{const wt=JSON.parse(Xt.slice(6));wt.type==="item"?(ee.value++,L.value=wt.stock_code,wt.success?(s.value[wt.stock_code]="success",h.value[wt.stock_code]=wt,oe++):(s.value[wt.stock_code]="error",n.value[wt.stock_code]=wt.error||"评估失败",Se++)):wt.type==="done"&&(typeof wt.success=="number"&&(oe=wt.success),typeof wt.fail=="number"&&(Se=wt.fail))}catch{}}}}catch{Ee=!1}if(!Ee){oe=0,Se=0,ee.value=0;for(const Ue of i){L.value=Ue,s.value[Ue]="running";try{const Jt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:V,body:JSON.stringify({stock_code:Ue.trim(),stock_name:Ue.trim()})})).json();Jt.success?(s.value[Ue]="success",h.value[Ue]=Jt.data,oe++):(s.value[Ue]="error",n.value[Ue]=Jt.message&&Jt.message!=="success"?Jt.message:"评估失败",Se++)}catch(bt){s.value[Ue]="error",n.value[Ue]="网络错误: "+(bt&&bt.message?bt.message:bt),Se++}ee.value++}}L.value="",await Y();const ut=i.length;setTimeout(()=>{Se===0?ElementPlus.ElMessage.success(`评估完成 成功 ${oe}/${ut}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${oe}/${ut} · 失败 ${Se}`),Z.value=!1},500)}return{quickEvalStock:le,evalStrategy:G,watchlistSort:M,watchlist:W,watchlistCodes:ie,sortedWatchlist:$,getWatchlistScore:ce,getLatestScore:Re,addSearchResult:se,evaluatedCodes:pe,klineLoadedCodes:Te,markKlineLoaded:ve,watchlistSearch:be,watchlistResults:qe,watchlistSearching:re,dataRefreshConfig:ae,dataRefreshReloading:fe,dataRefreshSaving:Ne,aiHistoryLoading:ue,aiHistoryError:Me,aiHistoryTotal:Ke,aiHistoryLoadingMore:dt,hasMoreAiHistory:st,loadMoreAiHistory:ge,watchlistLoading:Kt,doAiEvaluate:yt,loadAiHistory:Y,deleteSingleHistory:Xe,toggleSelectHistory:mt,clearSelection:tt,clearWatchlistSelection:It,batchReevaluateHistory:We,batchAddToWatchlist:Ct,batchAddToPortfolio:Ft,batchRemoveWatchlist:zt,toggleSelectWatchlist:lt,selectAllHistory:qt,selectAllWatchlist:Ht,deleteSelectedHistory:Gt,loadAutoEvaluateConfig:ft,saveAutoEvaluateConfig:rt,loadWatchlist:Et,addToWatchlist:$t,removeFromWatchlist:Yt,clearWatchlist:ta,toggleWatchlist:pt,showStockKline:aa,preloadingKline:sa,preloadWatchlistKline:ma,watchlistEvaluate:ha,batchEvaluateWatchlist:la,batchEvaluateSelected:H,searchStockForWatchlist:_e,loadDataRefreshConfig:Oe,saveDataRefreshConfig:De,triggerDataReload:nt,triggerDataPull:Pt,dataPullRunning:Ze,groupedByDate:Nt,aiHistoryByStock:Bt,groupedByMonth:pa,aiHistoryStockCount:ya,scoreDistribution:ba,quickEvaluate:na,toggleDateExpand:Pa,toggleSelectDate:oa,toggleSelectMonth:Ra,toggleStockExpand:ra,toggleSelectStock:qa,registerTrendChart:Ea,viewAiResult:ka,doBatchEvaluate:_,realtimeQuotes:we,realtimeDegraded:Le,realtimeWsState:Pe,connectRealtimeQuotes:Ve,disconnectRealtimeQuotes:Ae,quoteWarningFor:ht,realtimeQuoteColor:vt,realtimePriceText:Dt,realtimePctText:ea,realtimeRatioText:z,REALTIME_DEGRADED_TEXT:Be,REALTIME_FALLBACK_TEXT:xt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:b}=Vue,e=t([]),d=t(null),g=t([]),A=t(!1),y=t(!1),c=t(!1),w=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),C=t(!1),x=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),T=t(!1),S=t("positions"),q=t(30),P=t(!1),E=t(""),v=t(!1),l=t({dates:[],equity:[],values:[]}),m=b(()=>e.value.length),O=t("metrics"),K=t(!1),B=t(""),U=t(!1),Q=t({metrics:null,rules:[],rebalance:null}),I=b(function(){const u=Q.value.metrics;if(!u)return[];const R=function(G){return G==null?"--":Number(G).toFixed(2)+"%"},le=function(G){return G==null?"--":Number(G).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:R(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:R(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:R(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:R(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:R(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:R(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:le(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:le(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:le(u.calmar_ratio)},{key:"beta",label:"Beta",value:le(u.beta)}]});async function N(){K.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),R=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),le=u&&u.success?u.risk:null,G=R&&R.success?R.rules||[]:[],M=R&&R.success?R.rebalance:null;Q.value={metrics:le,rules:G,rebalance:M},U.value=!!(le&&Object.keys(le).length>0),B.value=u&&u.note||R&&R.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),U.value=!1,B.value="风险数据加载失败"}finally{K.value=!1}}async function F(){A.value=!0,y.value=!1;try{const R=await(await fetch("/api/portfolio")).json();R.success?(e.value=R.positions||[],d.value=R.summary||null):y.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),y.value=!0}finally{A.value=!1}}async function J(){const u=w.value,R=(u.stock_code||"").trim();if(!R){ElementPlus.ElMessage.warning("请输入股票代码");return}const le=Number(u.cost_price),G=Number(u.quantity);if(!(le>0)||!(G>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const W=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R,stock_name:(u.stock_name||"").trim(),cost_price:le,quantity:G})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"持仓已更新"),c.value=!1,w.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await F(),D(q.value)):ElementPlus.ElMessage.error(W.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function Z(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const le=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();le.success?(ElementPlus.ElMessage.success("已删除持仓"),await F(),L(),D(q.value)):ElementPlus.ElMessage.error(le.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function ne(u,R){x.value={stock_code:u,stock_name:R||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},C.value=!0}async function ee(){const u=x.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const R=Number(u.price),le=Number(u.quantity);if(!(R>0)||!(le>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}T.value=!0;try{const M=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:R,quantity:le,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();M.success?(ElementPlus.ElMessage.success(M.message||"调仓已记录"),C.value=!1,await F(),await L(),D(q.value)):ElementPlus.ElMessage.error(M.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{T.value=!1}}async function L(){try{const R=await(await fetch("/api/portfolio/trades")).json();R.success&&(g.value=R.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const s=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function h(u){if(!u||!u.length)return[];let R=u[0]||0;const le=[];for(let G=0;G<u.length;G++){const M=u[G]||0;M>R&&(R=M),le.push(R>0?Math.round((M-R)/R*1e3)/10:0)}return le}function n(){const u={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},R=l.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(le){const G=le[0]?le[0].dataIndex:-1,M=R.dates[G]||"",W=R.equity[G],ie=R.values[G];let ue=M||"";return W!=null&&(ue+="<br/>组合净值: "+W),ie!=null&&(ue+="<br/>组合市值: "+ie),ue}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:R.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:R.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:h(R.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function f(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(u,R,le){l.value={dates:u||[],equity:R||[],values:le||[]},v.value=!!u&&u.length>0,v.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",n,{key:"portfolio-equity"}):f()}async function D(u){P.value=!0,E.value="";const R=Number(u)||q.value||30;q.value=R;try{const G=await(await fetch("/api/portfolio/equity_curve?days="+R)).json();G.success?(E.value=G.note||"",X(G.dates||[],G.equity||[],G.values||[])):(E.value="数据暂不可用",f())}catch(le){console.warn("[portfolio] 加载收益曲线失败:",le),E.value="数据暂不可用",f()}finally{P.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function p(u,R){if(u==null||u===""||isNaN(Number(u)))return"--";const le=Number(u),G=R??2;return(le>=0?"+":"")+le.toFixed(G)}function r(u,R){if(u==null||u===""||isNaN(Number(u)))return"--";const le=Number(u),G=R??2;return(le>=0?"+":"")+le.toFixed(G)+"%"}function k(u){if(u==null||u===""||isNaN(Number(u)))return"";const R=Number(u);return R>0?"portfolio-up":R<0?"portfolio-down":""}return{positions:e,summary:d,trades:g,loading:A,loadError:y,showAddForm:c,addForm:w,addSaving:o,tradeFormVisible:C,tradeForm:x,tradeSaving:T,portfolioTab:S,equityDays:q,equityLoading:P,equityNote:E,equityHasData:v,portfolioCount:m,loadPortfolio:F,addPosition:J,removePosition:Z,openTradeForm:ne,submitTrade:ee,loadTrades:L,loadEquity:D,fmtSigned:p,fmtSignedPct:r,signClass:k,riskTab:O,riskLoading:K,riskNote:B,riskHasData:U,riskData:Q,riskMetricList:I,loadRisk:N}}}})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(c,w){var o=Number(c);return isFinite(o)?o:typeof w=="number"?w:0}function t(c){var w=Array.isArray(c)?c:[];if(w.length<2)return null;for(var o=-1/0,C=0,x=0,T=0,S=0,q=0;q<w.length;q++){var P=a(w[q].equity!=null?w[q].equity:w[q].value);P>o&&(o=P,C=q);var E=o>0?(o-P)/o*100:0;E>x&&(x=E,T=C,S=q)}function v(l){return w[l]&&w[l].date?w[l].date:""}return{maxDrawdown:Math.round(x*100)/100,peakIndex:T,troughIndex:S,peakDate:v(T),troughDate:v(S)}}function b(c){for(var w=c||{},o={},C=Object.keys(w).sort(),x=0;x<C.length;x++){var T=C[x],S=String(T).slice(0,4);/^\d{4}$/.test(S)&&(o[S]=(o[S]||0)+a(w[T]))}var q=Object.keys(o).sort();return q.map(function(P){return{year:P,return:Math.round(o[P]*100)/100}})}function e(c){var w=Array.isArray(c)?c:[],o={};w.forEach(function(T){(T.points||[]).forEach(function(S){S&&S.date&&(o[S.date]=1)})});var C=Object.keys(o).sort(),x=w.map(function(T){var S={};return(T.points||[]).forEach(function(q){q&&q.date&&(S[q.date]=a(q.value!=null?q.value:q.equity))}),{name:T.name||"",data:C.map(function(q){return q in S?S[q]:null})}});return{dates:C,series:x}}function d(c){var w=c||{},o=function(x){return a(x)},C=function(x,T){var S=o(x);return isFinite(S)?S.toFixed(T):"--"};return[{key:"total_return",label:"总收益",value:C(w.total_return,2),suffix:"%",dir:o(w.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:C(w.annual_return,2),suffix:"%",dir:o(w.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:C(w.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:C(w.sharpe_ratio,2),suffix:"",dir:o(w.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:C(w.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:C(w.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(w.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:C(w.volatility,2),suffix:"%",dir:""}]}function g(c){var w=c==null?"":String(c);return/[",\n]/.test(w)?'"'+w.replace(/"/g,'""')+'"':w}function A(c){var w=c||{},o=[];o.push("回测指标"),o.push("指标,数值"),(w.metrics||[]).forEach(function(v){o.push(g(v.label)+","+g((v.value||"")+(v.suffix||"")))}),o.push(""),o.push("净值曲线");var C=["日期"].concat((w.series||[]).map(function(v){return v.name}));o.push(C.map(g).join(","));for(var x=w.dates||[],T=w.series||[],S=0;S<x.length;S++){for(var q=[x[S]],P=0;P<T.length;P++){var E=T[P].data&&T[P].data[S];q.push(E??"")}o.push(q.map(g).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(w.trades||[]).forEach(function(v){o.push(g(v.date)+","+g(v.stock)+","+g(v.action)+","+g(v.reason))}),o.join(`
`)}function y(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:b,buildNavSeries:e,buildMetrics:d,buildBacktestCsv:A,tradeActionText:y}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:b}=Vue,e=window.QuantBacktest||{},d=a||{},g=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],y=(Array.isArray(d.backtestStrategies)&&d.backtestStrategies.length?d.backtestStrategies:g).map(s=>({id:s.id,name:s.name})),c=t(y.length?[y[0].id]:[]),w=t(P()),o=t(1e5),C=t(3e-4),x=t(!1),T=t(!1),S=t(null),q=t("");function P(){const s=new Date,h=new Date;h.setFullYear(h.getFullYear()-1);const n=f=>f.getFullYear()+"-"+String(f.getMonth()+1).padStart(2,"0")+"-"+String(f.getDate()).padStart(2,"0");return[n(h),n(s)]}function E(s){const h=c.value.indexOf(s);h>=0?c.value.length>1&&c.value.splice(h,1):c.value.push(s)}function v(s){const h=y.find(n=>n.id===s);return h?h.name:s}function l(s){const h=s.summary||s;return{strategy_id:h.strategy_id,start_date:h.start_date,end_date:h.end_date,total_days:h.total_days,total_return:h.total_return,annual_return:h.annual_return,max_drawdown:h.max_drawdown,volatility:h.volatility,sharpe_ratio:h.sharpe_ratio,sortino_ratio:h.sortino_ratio,win_rate:h.win_rate,profit_loss_ratio:h.profit_loss_ratio,avg_positions:h.avg_positions!=null?h.avg_positions:h.avg_positions_per_day,total_trades:h.total_trades,turnover_rate:h.turnover_rate,success:h.success!==!1,message:h.message||"",insample_total_return:h.insample_total_return!=null?h.insample_total_return:null,outsample_total_return:h.outsample_total_return!=null?h.outsample_total_return:null,out_sample_ratio:h.out_sample_ratio!=null?h.out_sample_ratio:.2,overfit_warning:!!h.overfit_warning,overfit_reason:h.overfit_reason||""}}function m(s){return(Array.isArray(s)?s:[]).map(h=>({date:h.date,value:h.equity!=null?h.equity:h.value}))}function O(s,h){const n=l(h),f=m(h.equity_curve),X=h.monthly_returns||{},D=Array.isArray(h.trade_history)?h.trade_history:[],p={id:s,name:v(s),summary:n,equityCurve:f,monthlyReturns:X,trades:D};let r=null;if(x.value){const k=Number(o.value)||1e5;r={name:"现金基准",points:f.map(u=>({date:u.date,value:k}))}}return{success:!0,mode:"single",strategies:[p],primary:p,benchmark:r,period:(n.start_date||"")+" ~ "+(n.end_date||"")}}function K(s,h){const n=h.strategy_results||{},f=s.map(p=>{const r=n[p];if(!r)return null;const k=l(r);return{id:p,name:v(p),summary:k,equityCurve:m(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(p=>p&&p.summary.success!==!1),X=f.length?f[0]:null;let D=null;return x.value&&(D={name:"等权组合基准",points:m(h.portfolio_equity)}),{success:f.length>0,mode:"multi",strategies:f,primary:X,benchmark:D,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const B=b(()=>{const s=S.value;return!s||!s.primary?[]:e.buildMetrics?e.buildMetrics(s.primary.summary):[]}),U=b(()=>{const s=S.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(s.primary.monthlyReturns):[]}),Q=b(()=>{const s=S.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((h,n)=>String(n.date||"").localeCompare(String(h.date||"")))}),I=b(()=>{const s=S.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(h=>({name:h.name,metrics:e.buildMetrics?e.buildMetrics(h.summary):[]}))}),N=b(()=>{const s=S.value;return!s||!s.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function F(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const h=c.value;if(!h.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const n=w.value,f={start_date:n&&n[0]||void 0,end_date:n&&n[1]||void 0},X={"Content-Type":"application/json"};T.value=!0,S.value=null,q.value="";try{if(h.length===1){const D=Object.assign({},f,{initial_capital:Number(o.value)||1e5,commission_rate:Number(C.value)||3e-4}),p=await fetch("/api/backtest/"+encodeURIComponent(h[0]),{method:"POST",headers:X,body:JSON.stringify(D)});if(!p.ok){const k=await p.json().catch(()=>({}));throw new Error(k.detail||"回测失败")}const r=await p.json();if(!r.success)throw new Error(r.message||"回测失败");S.value=O(h[0],r)}else{const D=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},f,{strategy_ids:h}))});if(!D.ok){const r=await D.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const p=await D.json();if(!p.success)throw new Error(p.message||"多策略回测失败");if(S.value=K(h,p.data||{}),!S.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(D){q.value=D&&D.message?D.message:"回测失败",ElementPlus.ElMessage.error(q.value)}finally{T.value=!1}}function J(){const s=S.value,h={dates:[],series:[]};if(!s)return h;const n=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&n.push({name:s.benchmark.name,points:s.benchmark.points});const f=e.buildNavSeries?e.buildNavSeries(n):h;return Z(f,s)}function Z(s,h){const n=R=>(getComputedStyle(document.documentElement).getPropertyValue(R)||"").trim(),f={primary:n("--qc-primary-600")||"#b8922a",success:n("--color-success")||"#4CAF50",accent:n("--color-accent")||"#F59E0B",info:n("--color-info")||"#1976d2",ai:n("--color-ai")||"#6366f1",textPrimary:n("--text-primary")||"#1f2937",textSecondary:n("--text-secondary")||"#6b7280",border:n("--border-light")||"#e5e7eb",up:n("--color-rise")||"#E63946",down:n("--color-fall")||"#2E7D32",bg:n("--bg-card")||"#ffffff"},X=[f.primary,f.success,f.accent,f.info,f.ai],p=f.bg.length===7&&parseInt(f.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(h.primary?h.primary.equityCurve:[]):null,k=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:f.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:f.down}},{xAxis:r.troughDate}]]}:void 0,u=s.series.map((R,le)=>{const G=h.benchmark&&R.name===h.benchmark.name,M=X[le%X.length];return{name:R.name,type:"line",data:R.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:G?2:2.4,type:G?"dashed":"solid",color:M},itemStyle:{color:M},emphasis:{focus:"series"},...le===0&&k?{markArea:k}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:p,borderColor:f.border,textStyle:{color:f.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:f.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:f.border}},axisLabel:{color:f.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:f.textSecondary,fontSize:11},splitLine:{lineStyle:{color:f.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:f.border,textStyle:{color:f.textSecondary,fontSize:10}}],series:u}}function ne(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",J,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ee(){const s=S.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const h=s.strategies.map(u=>({name:u.name,points:u.equityCurve}));s.benchmark&&h.push({name:s.benchmark.name,points:s.benchmark.points});const n=e.buildNavSeries?e.buildNavSeries(h):{dates:[],series:[]},f=e.tradeActionText||(u=>u),X=Q.value.map(u=>({date:u.date,stock:u.stock,action:f(u.action),reason:u.reason})),D=e.buildBacktestCsv?e.buildBacktestCsv({metrics:B.value,dates:n.dates,series:n.series,trades:X}):"",p=new Blob(["\uFEFF"+D],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(p),k=document.createElement("a");k.href=r,k.download="backtest-"+s.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",k.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function L(s,h){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(h??2)}return{btStrategyOptions:y,btSelectedStrategies:c,toggleBtStrategy:E,btDateRange:w,btCapital:o,btCommissionRate:C,btIncludeBenchmark:x,btRunning:T,btResult:S,btError:q,btMetrics:B,btAnnualReturns:U,btTrades:Q,btStrategyMetricsRows:I,btDrawdownRegion:N,runBacktestWorkbench:F,exportBacktestCSV:ee,registerBacktestNavChart:ne,btFmtNum:L}}}})();(function(){const{ref:a,computed:t,watch:b,onUnmounted:e}=Vue,d=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),g=72,A={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},y={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},c={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},w={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),C=a({}),x=a(!1),T=a({}),S=a({cycles:[]}),q=a([]),P=a(0),E=a(!1),v=a({autoRefresh:!0,refreshInterval:300}),l=a(""),m=a(""),O=a(!1),K=a("");let B=null;const U={x:0,y:0},Q=t(()=>{const $=C.value;return["recession","recovery","overheat","stagflation"].map(Re=>{const se=$[Re]||{};return{key:Re,name:se.name||Re,icon:c[se.icon]||"bar-chart-3",color:se.color||d("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&w[Re]||""}})}),I=t(()=>{var ce,Re,se,pe;const $=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ce=$.pmi)==null?void 0:ce.toFixed(2),color:$.pmi>=50?d("--color-success")||"#43a047":d("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Re=$.gdp_growth)==null?void 0:Re.toFixed(2))+"%",color:d("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=$.cpi)==null?void 0:se.toFixed(2))+"%",color:$.cpi>1.2?d("--color-danger")||"#E53935":d("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((pe=$.m2_growth)==null?void 0:pe.toFixed(2))+"%",color:d("--color-success")||"#43a047"}]}),N=$=>{$=$||{};const ce=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Re=()=>d("--color-success")||"#43a047",se=()=>d("--color-danger")||"#E53935",pe=()=>d("--color-warning")||"#FF9800",Te={宽松:Re(),中位:pe(),偏低:se(),高增长:Re(),承压:se(),不利:se()};return ce.map(ve=>{const be=$[ve.key]||{},qe=be.score||0,re=Math.min(100,Math.max(5,(qe+2)*25)),ae=qe>=.3?"var(--state-success-solid)":qe>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",fe=qe>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ve.key,label:ve.label,scoreStr:qe.toFixed(2),level:be.level||"—",barWidth:re,barColor:ae,scoreColor:fe,color:Te[be.level]||"var(--text-tertiary)"}})},F=t(()=>N(o.value.dimension_scores)),J=t(()=>N(T.value._dimensions)),Z=t(()=>{var ce;const $=((ce=o.value.confidence)==null?void 0:ce.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),ne=t(()=>{var se,pe,Te,ve;const $=C.value,ce={recovery:0,overheat:1,stagflation:2,recession:3},Re={};for(const[be,qe]of Object.entries($))Re[be]={name:qe.name,icon:qe.icon,color:qe.color,lightColor:qe.bg_color,duration:"~"+(((se=qe.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:ce[be]||0,period:((Te=(pe=qe.case_studies)==null?void 0:pe[0])==null?void 0:Te.split("：")[0])||"",avgMonths:((ve=qe.historical_stats)==null?void 0:ve.avg_duration_months)||18};return Re}),ee=t(()=>{var qe,re;const $=o.value.stage,Re={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},se=o.value.dimension_scores||{},pe=((qe=se.growth)==null?void 0:qe.score)||0,Te=((re=se.inflation)==null?void 0:re.score)||0,ve=Math.max(-30,Math.min(30,pe*15)),be=Math.max(-30,Math.min(30,-Te*15));return{x:Re.x+ve,y:Re.y+be,prevX:U.x,prevY:U.y}}),L=t(()=>{var se;const $=Math.min(100,((se=o.value.timing)==null?void 0:se.progress_percent)||0),ce=o.value.color||"var(--state-success-solid)",Re=$>100?"linear-gradient(90deg, "+ce+", var(--state-warning-solid))":ce;return{width:$+"%",background:Re}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function h(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.progress_percent)||0}function n(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.duration_months)||0}function f(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.avg_duration_months)||18}function X($){var pe,Te;const ce=ne.value,Re=((pe=ce[o.value.stage])==null?void 0:pe.order)||0;return(((Te=ce[$])==null?void 0:Te.order)||0)<Re}function D($){return A[$]||$}function p($){return y[$]||$}function r($){const ce=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ce[$-1]||ce[3]}async function k(){try{const ce=await(await fetch("/api/market/merrill-clock/stages")).json();ce.success&&ce.data&&(C.value=ce.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function u(){E.value=!0;try{le();const ce=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ce.success&&ce.data){const Re=Array.isArray(ce.data.cycles)?ce.data.cycles.slice().reverse():[];S.value={cycles:Re}}}catch{console.warn("获取美林时钟时间轴失败")}finally{E.value=!1}}async function R($){await M($)}async function le(){try{const ce=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ce&&ce.success&&ce.data&&(q.value=ce.data.items||[],P.value=ce.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function G(){var $,ce;try{const se=await(await fetch("/api/market/merrill-clock")).json(),pe=se.stage||"recovery",Te=C.value[pe]||{};if(o.value={...Te,...se,stage_cn:se.stage_cn||Te.stage_cn||"",stage_name:se.stage_name||Te.name||"",name:se.name||Te.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),K.value&&K.value!==pe){const ve=C.value,be=(($=ve[K.value])==null?void 0:$.name)||K.value,qe=((ce=ve[pe])==null?void 0:ce.name)||pe;ElementPlus.ElMessage({message:"美林时钟阶段切换："+be+" → "+qe,type:"warning",duration:6e3,showClose:!0})}K.value=pe}catch(Re){console.error("获取美林时钟失败:",Re);const se=C.value.recovery||{};o.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function M($){var Re;x.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",T.value=C.value[$]||C.value.recovery||{};const ce=((Re=o.value)==null?void 0:Re.stage)===$;T.value._isCurrent=ce,ce&&o.value&&(T.value._nextPrediction=o.value.next_stage_prediction,T.value._confidence=o.value.confidence,T.value._stage=o.value.stage,T.value._dimensions=o.value.dimension_scores);try{const pe=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(pe.success&&pe.data){const Te={...C.value[$],...pe.data};Te._is_current!==void 0&&(Te._isCurrent=Te._is_current),Te._current_timing&&(Te._currentTiming=Te._current_timing),Te._last_period&&(Te._lastPeriod=Te._last_period),T.value._nextPrediction&&(Te._nextPrediction=T.value._nextPrediction),T.value._confidence&&(Te._confidence=T.value._confidence),T.value._stage&&(Te._stage=T.value._stage),T.value._dimensions&&(Te._dimensions=T.value._dimensions),Object.assign(T.value,Te)}}catch(se){console.warn("获取阶段详情失败:",se)}}function W(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:v.value.autoRefresh,refreshInterval:v.value.refreshInterval})),v.value.autoRefresh?(clearInterval(B),B=setInterval(G,v.value.refreshInterval*1e3)):clearInterval(B),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){O.value=!0,m.value="";try{const ce=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ce.success?(m.value="重评估完成："+(ce.stage_name||ce.stage),await G(),ElementPlus.ElMessage.success("重评估完成")):(m.value=ce.message||"重评估失败",ElementPlus.ElMessage.error(ce.message||"重评估失败"))}catch{m.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{O.value=!1}}function ue(){const $=localStorage.getItem("merrill_clock_config");if($)try{const ce=JSON.parse($);v.value={...v.value,...ce}}catch{}v.value.autoRefresh&&(B=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),G()},v.value.refreshInterval*1e3))}function Me(){B&&clearInterval(B)}return e(()=>{Me()}),{merrillData:o,merrillStagesConfig:C,showMerrillDetail:x,merrillDetailData:T,merrillTimeline:S,merrillSnapshots:q,merrillSnapshotsTotal:P,fetchMerrillSnapshots:le,timelineLoading:E,merrillClockConfig:v,merrillClockLastUpdated:l,merrillReevalResult:m,merrillReevalLoading:O,stages:Q,indicatorList:I,dimensionScoreList:F,detailDimensionScoreList:J,confidenceColor:Z,timelineStages:ne,clockPosition:ee,merrillProgressStyle:L,FULL_CYCLE_MONTHS:g,getStageAngle:s,getCycleProgress:h,getCurrentStageMonths:n,getStageTotalMonths:f,isStageCompleted:X,getCharLabel:D,getAssetName:p,getRankColor:r,fetchMerrillStages:k,fetchMerrillClock:G,loadMerrillTimeline:u,showTimelineStage:R,showStageDetail:M,saveMerrillClockConfig:W,doMerrillReevaluate:ie,startAutoRefresh:ue,stopAutoRefresh:Me}}})();(function(){function a(y){return getComputedStyle(document.documentElement).getPropertyValue(y).trim()}var t=[210,28,165,290,348,190,52,250];function b(){var y=!1;try{y=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var c=y?62:58,w=y?62:40;return t.map(function(o){return"hsl("+o+", "+c+"%, "+w+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:b(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const d=[];function g(y){typeof y=="function"&&d.push(y)}function A(){d.slice().forEach(function(y){try{y()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:b,registerChart:g,refreshAllCharts:A,init(){return{getEChartsTheme:e,registerChart:g,refreshAllCharts:A}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const b=t("qcState");try{const g=localStorage.getItem("quant_sidebar_collapsed");g!==null&&b.sidebarCollapsed&&(b.sidebarCollapsed.value=g==="1")}catch{}if(!b)return{};const e=async g=>{if(window.__quantGoPage){await window.__quantGoPage(g.key,g.subPages[0]||"");return}b.currentPage.value=g.key,b.currentSubPage.value=g.subPages[0]||""},d=()=>{b.sidebarCollapsed.value=!b.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",b.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:b.menus,currentPage:b.currentPage,sidebarCollapsed:b.sidebarCollapsed,navigate:e,toggle:d,sanitizeHtml:b.sanitizeHtml,keyClick:b.keyClick,t:b.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,b={"layout-dashboard":Hv,calendar:Fv,bot:Vv,"flask-conical":jv,zap:Ov,settings:Nv,"chevron-down":Iv,"chevron-right":Lv,"chevron-left":Av,menu:zv,search:Rv,bell:Pv,sun:Dv,moon:Tv,user:Mv,"user-round":Ev,home:qv,x:Cv,database:Sv,activity:xv,clock:_v,"bar-chart-3":kv,shield:wv,"hard-drive":bv,"file-text":yv,users:hv,cpu:gv,"pie-chart":fv,info:pv,"log-out":mv,palette:vv,languages:uv,refresh:dv,download:cv,"external-link":rv,command:ov,sparkles:lv,"trending-up":iv,"trending-down":nv,"circle-dot":sv,check:av,"alert-triangle":tv,loader:ev,"arrow-left":Zu,"arrow-right":Xu,eye:$u,"eye-off":Qu,lock:Ju,"sliders-horizontal":Yu,play:Gu,history:Uu,layers:Wu,"line-chart":Ku,target:Bu,"search-check":Hu,star:Fu,"message-circle":Vu,"calendar-days":ju,"calendar-range":Ou,"calendar-check":Nu,brain:Iu,lightbulb:Lu,"octagon-x":Au,flag:zu,package:Ru,"clipboard-list":Pu,pin:Du,"radio-tower":Tu,gauge:Mu,landmark:Eu,"candlestick-chart":qu,wallet:Cu,"badge-check":Su,key:xu,factory:_u,trophy:ku,rocket:wu,flame:bu,"map-pin":yu,"scroll-text":hu,"book-open":gu,dna:fu,"bar-chart":pu,plus:mu,"star-off":vu,upload:uu,gem:du,"folder-open":cu,link:ru,save:ou,"trash-2":lu,pause:iu,"help-circle":nu,"play-circle":su,pencil:au,folder:tu,code:eu,sprout:Zd,wheat:Xd,snowflake:$d,fuel:Qd,banknote:Jd,send:Yd,inbox:Gd,"wifi-off":Ud,"check-circle-2":Wd,"x-circle":Kd},e=()=>b[t.name]||b["circle-dot"];return(d,g)=>(me(),ua(Pd(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,t)=>{const b=a.__vccOpts||a;for(const[e,d]of t)b[e]=d;return b},Bv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=at(()=>a.menus&&a.menus.value||[]),b=at(()=>a.currentPage&&a.currentPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),d=at({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:E=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=E)}}),g=Rt({}),A={research:"量化投研",platform:"平台管理"},y=["research","platform"],c=E=>b.value===E.key,w=(E,v)=>b.value===E.key&&a.currentSubPage&&a.currentSubPage.value===v,o=E=>Array.isArray(E.subPages)&&E.subPages.length>1,C=(E,v)=>a.subPageNames&&a.subPageNames[v]||v;function x(E){!o(E)||d.value||(g.value[E.key]=!g.value[E.key])}function T(){t.value.forEach(E=>{g.value[E.key]===void 0&&(g.value[E.key]=c(E))})}async function S(E,v){const l=v||E.subPages&&E.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(E.key,l):(a.currentPage.value=E.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(E.key,l)}function q(){d.value=!d.value;try{localStorage.setItem("sidebar_collapsed",d.value?"1":"0")}catch{}}function P(E){if(E.ctrlKey&&E.key.toLowerCase()==="b"&&(E.preventDefault(),q()),!E.ctrlKey&&!E.metaKey&&!E.altKey&&(E.key==="ArrowDown"||E.key==="ArrowUp")){const v=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=v.indexOf(document.activeElement);if(l>=0){E.preventDefault();const m=v[(l+(E.key==="ArrowDown"?1:v.length-1))%v.length];m&&m.focus()}}}return Ka(()=>{T(),document.addEventListener("keydown",P)}),rs(()=>document.removeEventListener("keydown",P)),{state:a,menus:t,currentPage:b,navMode:e,sidebarCollapsed:d,expandedMenus:g,GROUP_LABELS:A,GROUPS:y,isActive:c,isChildActive:w,hasChildren:o,subLabel:C,toggleSubmenu:x,navigate:S,toggleCollapse:q}}},Kv={class:"qc-sidebar-logo"},Wv={key:0,class:"qc-logo-text"},Uv={class:"qc-sidebar-nav"},Gv={key:0,class:"qc-nav-group"},Yv={key:0,class:"qc-nav-group-label"},Jv=["href","aria-current","onClick"],Qv={key:0,class:"qc-sidebar-label"},$v={key:1,class:"qc-nav-badge"},Xv=["aria-expanded","aria-controls","onClick"],Zv=["id"],em=["href","aria-current","onClick"],tm={class:"qc-sidebar-child-label"},am={class:"qc-sidebar-footer"},sm=["aria-expanded","aria-label","title"];function nm(a,t,b,e,d,g){const A=Ut("AppIcon"),y=Ut("el-tooltip");return me(),he("nav",{class:it(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[Ce("div",Kv,[t[1]||(t[1]=Rd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?He("",!0):(me(),he("span",Wv,Fe(e.state.t("login.title")),1))]),Ce("div",Uv,[(me(!0),he(ot,null,_t(e.GROUPS,c=>(me(),he(ot,{key:c},[e.menus.some(w=>w.group===c)?(me(),he("div",Gv,[e.sidebarCollapsed?He("",!0):(me(),he("span",Yv,Fe(e.GROUP_LABELS[c]),1)),(me(!0),he(ot,null,_t(e.menus.filter(w=>w.group===c),w=>(me(),he(ot,{key:w.key},[Ce("div",{class:it(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(w),"is-child-open":e.navMode==="tree"&&e.expandedMenus[w.key]}])},[ct(y,{content:w.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:da(()=>[Ce("a",{class:it(["qc-sidebar-link",{"is-active":e.isActive(w)}]),href:"#"+w.key,"aria-current":e.isActive(w)?"page":null,onClick:Lt(o=>e.navigate(w),["prevent"])},[ct(A,{name:w.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?He("",!0):(me(),he("span",Qv,Fe(w.name),1)),!e.sidebarCollapsed&&w.badge?(me(),he("span",$v,Fe(w.badge),1)):He("",!0)],10,Jv)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(w)?(me(),he("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":e.expandedMenus[w.key]}]),"aria-expanded":!!e.expandedMenus[w.key],"aria-controls":"submenu-"+w.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(w)},[ct(A,{name:"chevron-down",size:14})],10,Xv)):He("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(w)&&e.expandedMenus[w.key]?(me(),he("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+w.key},[(me(!0),he(ot,null,_t(w.subPages,o=>(me(),he("a",{key:o,class:it(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(w,o)}]),href:"#"+w.key+"-"+o,"aria-current":e.isChildActive(w,o)?"page":null,onClick:Lt(C=>e.navigate(w,o),["prevent"])},[Ce("span",tm,Fe(e.subLabel(w,o)),1)],10,em))),128))],8,Zv)):He("",!0)],64))),128))])):He("",!0)],64))),128))]),Ce("div",am,[Ce("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...c)=>e.toggleCollapse&&e.toggleCollapse(...c))},[ct(A,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,sm)])],2)}const im=Ca(Bv,[["render",nm]]),lm={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Rt(!1),b=at(()=>a.currentUser&&a.currentUser.value||null),e=at(()=>a.navMode&&a.navMode.value||"subnav"),d=at(()=>{const se=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return!!(pe&&pe.subPages&&pe.subPages.length)}),g=at(()=>{const se=a.currentPage&&a.currentPage.value,pe=a.currentPageName&&a.currentPageName.value;if(pe)return pe;const Te=(a.menus&&a.menus.value||[]).find(ve=>ve.key===se);return Te&&Te.name||se||""}),A=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),y=Rt(typeof window<"u"?window.innerWidth<768:!1);function c(){y.value=window.innerWidth<768}Ka(()=>window.addEventListener("resize",c)),rs(()=>window.removeEventListener("resize",c));const w=Rt(!1),o=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),C=at(()=>{const se=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return(pe&&pe.subPages||[]).map(Te=>({key:Te,label:a.subPageNames&&a.subPageNames[Te]||Te}))});function x(){w.value=!w.value}function T(){w.value=!1}function S(se){w.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const q=at(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),P=Rt(!1),E=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],v=at(()=>{const se=E.find(pe=>pe.value===e.value);return se&&se.label||e.value});function l(){P.value=!P.value}function m(){P.value=!1}function O(se){P.value=!1,a.setNavMode&&a.setNavMode(se)}const K=at({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),B=Rt(!1),U=Rt([]),Q=Rt(!1),I=Rt(!1);function N(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function F(){Q.value=!0,I.value=!1;try{const pe=await(await fetch("/api/alerts/history?limit=8",{headers:N()})).json();pe&&pe.success?U.value=pe.history||[]:U.value=[]}catch{I.value=!0,U.value=[]}finally{Q.value=!1}}function J(){B.value=!B.value,B.value&&F()}function Z(){B.value=!1}function ne(){B.value=!1,a.activateTab&&a.activateTab("system","notification")}const ee=Rt(!1),L=a.themeHues||[45,220,0,140,270,320,-1],s=at(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),h=at(()=>a.themeMode&&a.themeMode.value||"system"),n=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],f=at(()=>a.density&&a.density.value||"comfortable");function X(se){a.changeDensity&&a.changeDensity(se)}function D(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const p={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function r(se){return a.hueName?a.hueName(se):p[se]||"自定义 "+se}function k(){ee.value=!ee.value}function u(){ee.value=!1}function R(se){a.changeThemeMode&&a.changeThemeMode(se)}function le(se){a.changeThemeHue&&a.changeThemeHue(se)}function G(){a.changeThemeMode&&a.changeThemeMode(q.value?"light":"dark")}function M(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function W(){t.value=!t.value}function ie(){t.value=!1}function ue(se){return()=>{ie(),se&&se()}}function Me(){ie(),a.handleLogout&&a.handleLogout()}const $=at(()=>a.marketData&&a.marketData.value||{}),ce=Rt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:$,bannerDismissed:ce,dismissBanner:()=>{ce.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:b,isDark:q,searchQuery:K,navMode:e,crumbRoot:g,crumbSub:A,hasToptabs:d,toggleThemeQuick:G,toggleSidebar:M,openUserMenu:W,closeUserMenu:ie,menuItem:ue,handleLogout:Me,openBellMenu:B,notifItems:U,notifLoading:Q,notifError:I,toggleBell:J,closeBell:Z,goNotificationCenter:ne,openThemeMenu:ee,themeHues:L,themeHue:s,themeMode:h,hueColor:D,hueName:r,toggleThemeMenu:k,closeThemeMenu:u,pickThemeMode:R,pickThemeHue:le,DENSITY_MODES:n,density:f,pickDensity:X,openNavModeMenu:P,NAV_MODES:E,navModeLabel:v,toggleNavModeMenu:l,closeNavModeMenu:m,pickNavMode:O,isMobile:y,openSubnavPicker:w,currentSubLabel:o,subnavOptions:C,toggleSubnavPicker:x,closeSubnavPicker:T,pickSubnav:S}}},om={class:"qc-header-wrap"},rm={key:0,class:"non-trading-banner",role:"status"},cm={class:"qc-header"},dm={class:"qc-header-left"},um=["aria-label"],vm={key:0,class:"qc-header-subnav"},mm=["aria-expanded"],pm={class:"qc-subnav-picker-label"},fm={key:0,class:"qc-subnav-picker-menu",role:"menu"},gm=["onClick"],hm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},ym={class:"qc-crumb qc-crumb-root"},bm={class:"qc-crumb qc-crumb-sub"},wm={key:1,class:"qc-crumb qc-crumb-root"},km={class:"qc-header-center"},_m={key:0,class:"qc-search-sublabel"},xm={class:"qc-header-right"},Sm={class:"qc-hdr-pop"},Cm=["aria-expanded"],qm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Em={key:0,class:"qc-bell-state"},Mm={key:1,class:"qc-bell-state"},Tm={key:2,class:"qc-bell-state"},Dm={key:3,class:"qc-bell-list"},Pm={class:"qc-bell-item-title"},Rm={class:"qc-bell-item-meta"},zm={key:0},Am={class:"qc-bell-item-time"},Lm={class:"qc-hdr-pop"},Im=["aria-expanded"],Nm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Om={class:"qc-theme-modes"},jm=["onClick"],Vm={class:"qc-theme-swatches"},Fm=["title","aria-label","onClick"],Hm={key:0,class:"qc-theme-swatch-check"},Bm={class:"qc-theme-custom-label"},Km={class:"qc-theme-modes"},Wm=["onClick"],Um={key:0,class:"qc-navmode-switch"},Gm=["aria-label","title","aria-expanded"],Ym={key:0,class:"qc-navmode-menu",role:"menu"},Jm=["onClick","onKeydown"],Qm={class:"qc-navmode-item-main"},$m={class:"qc-user-menu"},Xm=["aria-label","aria-expanded"],Zm={key:0,class:"qc-user-dropdown",role:"menu"},ep={class:"qc-user-dropdown-header"},tp={class:"qc-user-dropdown-name"},ap={key:0,class:"qc-user-dropdown-chip"};function sp(a,t,b,e,d,g){var C,x,T,S,q,P,E;const A=Ut("AppIcon"),y=Ut("qc-top-tabs"),c=Ut("el-autocomplete"),w=Ut("el-slider"),o=zd("click-outside");return me(),he("div",om,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(me(),he("div",rm,[ct(A,{name:"alert-triangle",size:14}),t[15]||(t[15]=Ce("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Ce("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...v)=>e.dismissBanner&&e.dismissBanner(...v)),"aria-label":"关闭提示"},"×")])):He("",!0),Ce("header",cm,[Ce("div",dm,[Ce("button",{class:"qc-icon-btn","aria-label":(C=e.state.sidebarCollapsed)!=null&&C.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...v)=>e.toggleSidebar&&e.toggleSidebar(...v))},[ct(A,{name:"menu",size:20})],8,um),e.isMobile?La((me(),he("div",vm,[Ce("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...v)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...v))},[Ce("span",pm,Fe(e.currentSubLabel||"二级"),1),ct(A,{name:"chevron-down",size:14})],8,mm),e.openSubnavPicker?(me(),he("div",fm,[(me(!0),he(ot,null,_t(e.subnavOptions,v=>(me(),he("div",{key:v.key,class:it(["qc-subnav-picker-item",{"is-active":v.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>e.pickSubnav(v.key)},Fe(v.label),11,gm))),128))])):He("",!0)])),[[o,e.closeSubnavPicker]]):He("",!0),e.navMode==="tree"&&!e.isMobile?(me(),he("div",hm,[Ce("span",ym,Fe(e.crumbRoot),1),e.crumbSub?(me(),he(ot,{key:0},[t[16]||(t[16]=Ce("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ce("span",bm,Fe(e.crumbSub),1)],64)):He("",!0)])):He("",!0),e.navMode==="toptab"&&!e.isMobile?(me(),he(ot,{key:2},[e.hasToptabs?(me(),ua(y,{key:0})):(me(),he("span",wm,Fe(e.crumbRoot),1))],64)):He("",!0)]),Ce("div",km,[ct(c,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=v=>e.searchQuery=v),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:da(()=>[ct(A,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:da(()=>[...t[17]||(t[17]=[Ce("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:da(v=>{var l,m,O,K,B;return[Ce("span",null,Fe((l=v==null?void 0:v.item)==null?void 0:l.icon)+" "+Fe(((m=v==null?void 0:v.item)==null?void 0:m.label)||((O=v==null?void 0:v.item)==null?void 0:O.name)),1),(K=v==null?void 0:v.item)!=null&&K.subLabel?(me(),he("span",_m,Fe((B=v==null?void 0:v.item)==null?void 0:B.subLabel),1)):He("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ce("div",xm,[La((me(),he("div",Sm,[Ce("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...v)=>e.toggleBell&&e.toggleBell(...v))},[ct(A,{name:"bell",size:20})],8,Cm),e.openBellMenu?(me(),he("div",qm,[t[18]||(t[18]=Ce("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(me(),he("div",Em,"加载中...")):e.notifError?(me(),he("div",Mm,"加载失败")):e.notifItems.length?(me(),he("div",Dm,[(me(!0),he(ot,null,_t(e.notifItems,(v,l)=>(me(),he("div",{key:v.id||l,class:it(["qc-bell-item",{"is-fail":v.ok===0}])},[Ce("div",Pm,Fe(v.title||v.event_type||"事件"),1),Ce("div",Rm,[xa(Fe(v.channel||""),1),v.recipient?(me(),he("span",zm," · "+Fe(v.recipient),1)):He("",!0),Ce("span",Am,Fe(v.created_at||""),1)])],2))),128))])):(me(),he("div",Tm,"暂无通知")),Ce("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...v)=>e.goNotificationCenter&&e.goNotificationCenter(...v))},"前往通知中心 →")])):He("",!0)])),[[o,e.closeBell]]),La((me(),he("div",Lm,[Ce("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...v)=>e.toggleThemeMenu&&e.toggleThemeMenu(...v))},[ct(A,{name:"palette",size:20})],8,Im),e.openThemeMenu?(me(),he("div",Nm,[t[19]||(t[19]=Ce("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ce("div",Om,[(me(),he(ot,null,_t([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],v=>Ce("button",{key:v.k,class:it(["qc-theme-mode",{"is-active":e.themeMode===v.k}]),onClick:l=>e.pickThemeMode(v.k)},Fe(v.n),11,jm)),64))]),t[20]||(t[20]=Ce("div",{class:"qc-theme-section-label"},"主题色",-1)),Ce("div",Vm,[(me(!0),he(ot,null,_t(e.themeHues,v=>(me(),he("button",{key:v,class:it(["qc-theme-swatch",{"is-active":e.themeHue===v}]),style:Ad({background:e.hueColor(v)}),title:e.hueName(v),"aria-label":e.hueName(v),onClick:l=>e.pickThemeHue(v)},[e.themeHue===v?(me(),he("span",Hm,"✓")):He("",!0)],14,Fm))),128))]),ct(w,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ce("div",Bm,"自定义 "+Fe(e.themeHue)+"°",1),t[21]||(t[21]=Ce("div",{class:"qc-theme-section-label"},"信息密度",-1)),Ce("div",Km,[(me(!0),he(ot,null,_t(e.DENSITY_MODES,v=>(me(),he("button",{key:v.k,class:it(["qc-theme-mode",{"is-active":e.density===v.k}]),onClick:l=>e.pickDensity(v.k)},Fe(v.n),11,Wm))),128))])])):He("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?He("",!0):La((me(),he("div",Um,[Ce("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...v)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...v))},[ct(A,{name:"layers",size:20})],8,Gm),e.openNavModeMenu?(me(),he("div",Ym,[(me(!0),he(ot,null,_t(e.NAV_MODES,v=>(me(),he("div",{key:v.value,class:it(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===v.value}]),role:"menuitem",tabindex:"0",onClick:l=>e.pickNavMode(v.value),onKeydown:[ca(Lt(l=>e.pickNavMode(v.value),["prevent"]),["enter"]),ca(Lt(l=>e.pickNavMode(v.value),["prevent"]),["space"])]},[Ce("div",Qm,[Ce("span",null,Fe(v.label),1),e.navMode===v.value?(me(),ua(A,{key:0,name:"check",size:14})):He("",!0)])],42,Jm))),128))])):He("",!0)])),[[o,e.closeNavModeMenu]]),La((me(),he("div",$m,[Ce("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((x=e.currentUser)==null?void 0:x.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...v)=>e.openUserMenu&&e.openUserMenu(...v))},Fe((((T=e.currentUser)==null?void 0:T.username)||"A").charAt(0).toUpperCase()),9,Xm),e.showUserMenu?(me(),he("div",Zm,[Ce("div",ep,[Ce("span",tp,Fe((S=e.currentUser)==null?void 0:S.username),1),((q=e.currentUser)==null?void 0:q.role)==="guest"?(me(),he("span",ap,"访客")):He("",!0)]),((P=e.currentUser)==null?void 0:P.role)==="admin"?(me(),he("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=v=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=ca(Lt(v=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ct(A,{name:"settings",size:16}),t[22]||(t[22]=xa(" 重新运行初始化向导 ",-1))],32)):He("",!0),((E=e.currentUser)==null?void 0:E.role)!=="guest"?(me(),he("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=ca(Lt(v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ct(A,{name:"lock",size:16}),t[23]||(t[23]=xa(" 修改密码 ",-1))],32)):He("",!0),t[25]||(t[25]=Ce("div",{class:"qc-user-dropdown-divider"},null,-1)),Ce("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...v)=>e.handleLogout&&e.handleLogout(...v)),onKeydown:t[14]||(t[14]=ca(Lt((...v)=>e.handleLogout&&e.handleLogout(...v),["prevent"]),["enter"]))},[ct(A,{name:"log-out",size:16}),t[24]||(t[24]=xa(" 退出登录 ",-1))],32)])):He("",!0)])),[[o,e.closeUserMenu]])])])])}const np=Ca(lm,[["render",sp]]),ip=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],lp={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),b=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),d=Rt({}),g=at(()=>a.menus&&a.menus.value||[]),A=at(()=>g.value.find(E=>E.key===t.value)||null),y=at(()=>A.value&&A.value.subPages||[]),c=at(()=>a.currentPageName&&a.currentPageName.value||t.value),w=E=>a.subPageNames&&a.subPageNames[E]||E,o=E=>b.value===E;function C(E){a.openTab?a.openTab(t.value,E):a.currentSubPage&&(a.currentSubPage.value=E);try{localStorage.setItem("quant_last_subpage",E)}catch{}}function x(E){a.openTab?a.openTab(t.value,E.key):a.currentSubPage&&(a.currentSubPage.value=E.key);try{localStorage.setItem("quant_last_subpage",E.key)}catch{}}function T(E){d.value[E]=!d.value[E]}const S={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:b,navMode:e,subPages:y,currentMenu:A,collapsedGroups:d,pageTitle:c,subLabel:w,isSubActive:o,goSub:C,goSystemItem:x,toggleGroup:T,SYSTEM_GROUPS:ip,subIcon:(E,v)=>S[E]&&S[E][v]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},op={key:0,class:"qc-subnav-column","aria-label":"二级导航"},rp={class:"qc-subnav-column-header"},cp={class:"qc-subnav-current-label"},dp={class:"qc-subnav-column-body"},up=["onClick"],vp=["href","onClick"],mp={class:"qc-subnav-group-label"},pp=["href","onClick"],fp=["href","onClick"];function gp(a,t,b,e,d,g){const A=Ut("AppIcon");return e.navMode==="subnav"?(me(),he("aside",op,[Ce("div",rp,[Ce("span",cp,Fe(e.pageTitle),1)]),Ce("div",dp,[e.currentPage==="system"?(me(!0),he(ot,{key:0},_t(e.SYSTEM_GROUPS,y=>(me(),he("div",{key:y.label,class:"qc-subnav-group"},[Ce("div",{class:"qc-subnav-group-label",onClick:c=>e.toggleGroup(y.label)},[Ce("span",null,Fe(y.label),1),ct(A,{name:"chevron-down",size:12,class:it({"is-open":!e.collapsedGroups[y.label]})},null,8,["class"])],8,up),e.collapsedGroups[y.label]?He("",!0):(me(!0),he(ot,{key:0},_t(y.items,c=>(me(),he("a",{key:c.key,class:it(["qc-subnav-item",{"is-active":e.isSubActive(c.key)}]),href:"#"+c.key,onClick:Lt(w=>e.goSystemItem(c),["prevent"])},[ct(A,{name:c.icon,size:16},null,8,["name"]),Ce("span",null,Fe(c.label),1)],10,vp))),128))]))),128)):e.currentPage==="shortterm"?(me(!0),he(ot,{key:1},_t(e.SHORTTERM_GROUPS,y=>(me(),he("div",{key:y.label,class:"qc-subnav-group"},[Ce("div",mp,[Ce("span",null,Fe(y.label),1)]),(me(!0),he(ot,null,_t(y.items,c=>(me(),he("a",{key:c,class:it(["qc-subnav-item",{"is-active":e.isSubActive(c)}]),href:"#"+e.currentPage+"/"+c,onClick:Lt(w=>e.goSub(c),["prevent"])},[ct(A,{name:e.subIcon(e.currentPage,c),size:16},null,8,["name"]),Ce("span",null,Fe(e.subLabel(c)),1)],10,pp))),128))]))),128)):(me(!0),he(ot,{key:2},_t(e.subPages,y=>(me(),he("a",{key:y,class:it(["qc-subnav-item",{"is-active":e.isSubActive(y)}]),href:"#"+e.currentPage+"/"+y,onClick:Lt(c=>e.goSub(y),["prevent"])},[ct(A,{name:e.subIcon(e.currentPage,y),size:16},null,8,["name"]),Ce("span",null,Fe(e.subLabel(y)),1)],10,fp))),128))])])):He("",!0)}const hp=Ca(lp,[["render",gp]]),yp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],bp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Rt(!1),b=Rt(null),e=Rt({}),d=at(()=>a.menus&&a.menus.value||[]),g=at(()=>a.currentPage&&a.currentPage.value||""),A={research:"量化投研",platform:"平台管理"},y=["research","platform"];function c(v){return Array.isArray(v.subPages)&&v.subPages.length>0}function w(v){c(v)&&(e.value[v.key]=!e.value[v.key])}function o(v,l){return g.value===v.key&&a.currentSubPage&&a.currentSubPage.value===l}function C(v){return a.subPageNames&&a.subPageNames[v]||v}async function x(v){const l=d.value.find(O=>O.key===v.key),m=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(v.key,m):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(v.key,m)}function T(v,l){t.value=!1;const m=l||v.subPages&&v.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(v.key,m):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(v.key,m)}function S(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function q(){t.value=!1;const v=document.querySelector(".qc-header .qc-icon-btn");v&&v.focus()}function P(v){v.detail&&v.detail.open&&S()}function E(v){t.value&&v.key==="Escape"&&q()}return Ka(()=>{window.addEventListener("qc:drawer",P),document.addEventListener("keydown",E)}),rs(()=>{window.removeEventListener("qc:drawer",P),document.removeEventListener("keydown",E)}),{state:a,TABS:yp,menus:d,currentPage:g,drawerOpen:t,drawerFocusRef:b,drawerExpanded:e,GROUP_LABELS:A,GROUPS:y,hasSub:c,toggleDrawerMenu:w,isDrawerSubActive:o,subLabel:C,goTab:x,goMenu:T,openDrawer:S,closeDrawer:q}}},wp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},kp=["aria-current","onClick"],_p={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},xp={class:"qc-drawer-header"},Sp={class:"qc-drawer-brand"},Cp={class:"qc-drawer-body"},qp={key:0},Ep={class:"qc-nav-group-label"},Mp=["href","aria-current","onClick"],Tp={class:"qc-sidebar-label"},Dp=["aria-expanded","onClick"],Pp={key:0,class:"qc-drawer-children"},Rp=["href","onClick"],zp={class:"qc-drawer-footer"},Ap=["title"];function Lp(a,t,b,e,d,g){var y,c;const A=Ut("AppIcon");return me(),he(ot,null,[Ce("nav",wp,[(me(!0),he(ot,null,_t(e.TABS,w=>(me(),he("button",{key:w.key,class:it(["qc-mobile-tab",{"is-active":e.currentPage===w.key}]),"aria-current":e.currentPage===w.key?"page":null,onClick:o=>e.goTab(w)},[ct(A,{name:w.icon,size:22},null,8,["name"]),Ce("span",null,Fe(w.label),1)],10,kp))),128))]),(me(),ua(Ld,{to:"body"},[e.drawerOpen?(me(),he("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...w)=>e.closeDrawer&&e.closeDrawer(...w))})):He("",!0),e.drawerOpen?(me(),he("div",_p,[Ce("div",xp,[Ce("div",Sp,[t[4]||(t[4]=Ce("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ce("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ce("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ce("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ce("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ce("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ce("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ce("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ce("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ce("span",null,Fe(e.state.t("login.title")),1)]),Ce("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...w)=>e.closeDrawer&&e.closeDrawer(...w))},[ct(A,{name:"x",size:18})])]),Ce("div",Cp,[(me(!0),he(ot,null,_t(e.GROUPS,w=>(me(),he(ot,{key:w},[e.menus.some(o=>o.group===w)?(me(),he("div",qp,[Ce("div",Ep,Fe(e.GROUP_LABELS[w]),1),(me(!0),he(ot,null,_t(e.menus.filter(o=>o.group===w),o=>(me(),he("div",{key:o.key,class:"qc-drawer-menu"},[Ce("div",{class:it(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[Ce("a",{class:it(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:Lt(C=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[ct(A,{name:o.iconName||"",size:18},null,8,["name"]),Ce("span",Tp,Fe(o.name),1)],10,Mp),e.hasSub(o)?(me(),he("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:C=>e.toggleDrawerMenu(o)},[ct(A,{name:"chevron-down",size:14})],10,Dp)):He("",!0)],2),e.drawerExpanded[o.key]?(me(),he("div",Pp,[(me(!0),he(ot,null,_t(o.subPages,C=>(me(),he("a",{key:C,class:it(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,C)}]),href:"#"+o.key+"/"+C,onClick:Lt(x=>e.goMenu(o,C),["prevent"])},[Ce("span",null,Fe(e.subLabel(C)),1)],10,Rp))),128))])):He("",!0)]))),128))])):He("",!0)],64))),128))]),Ce("div",zp,[Ce("button",{class:"qc-icon-btn",title:((y=e.state.currentTheme)==null?void 0:y.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=w=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[ct(A,{name:((c=e.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Ap),Ce("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=w=>e.state.handleLogout&&e.state.handleLogout())},[ct(A,{name:"log-out",size:18})])])])):He("",!0)]))],64)}const Ip=Ca(bp,[["render",Lp]]),Np={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:b}){const e=Da("qcState");function d(o){t("select",o)}function g(o){const C=o.strategy_names||o.strategies||[],x=C.slice(0,3),T=C.length>3?C.length-3:0,S=x.map(q=>({text:q,more:!1}));return T&&S.push({text:"+"+T,more:!0}),S}function A(o){const C=Number(o);return isFinite(C)?C.toFixed(2):"—"}function y(o){const C=Number(o);return isFinite(C)?(C>0?"+":"")+C.toFixed(2)+"%":"—"}function c(o){const C=Number(o.consensus_level);return isFinite(C)?Math.round(C*100):0}function w(o){const C=Number(o&&o.consensus_level);return isFinite(C)&&C>0}return{state:e,slots:b,select:d,displayTags:g,fmtPrice:A,fmtChange:y,pctOf:c,hasConsensus:w}}},Op={class:"qc-stock-list"},jp=["data-copy-code","aria-label","onClick","onKeydown"],Vp={key:0,class:"qc-stock-rank"},Fp={class:"qc-stock-info"},Hp={class:"qc-stock-code"},Bp={class:"qc-stock-code-num"},Kp={key:0,class:"qc-stock-status is-new"},Wp={key:1,class:"qc-stock-status is-out"},Up={class:"qc-stock-name"},Gp={key:0,class:"qc-stock-consensus"},Yp={key:1,class:"qc-stock-tags"},Jp={key:2,class:"qc-stock-badge"},Qp={key:3,class:"qc-stock-data"},$p={class:"qc-stock-price"},Xp={key:4,class:"qc-stock-extra"},Zp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},ef=["data-copy-code","aria-label","onClick","onKeydown"],tf={key:0,class:"qc-stock-rank"},af={class:"qc-stock-info"},sf={class:"qc-stock-code"},nf={class:"qc-stock-code-num"},lf={key:0,class:"qc-stock-status is-new"},of={key:1,class:"qc-stock-status is-out"},rf={class:"qc-stock-name"},cf={key:0,class:"qc-stock-consensus"},df={key:1,class:"qc-stock-tags"},uf={key:2,class:"qc-stock-badge"},vf={key:3,class:"qc-stock-data"},mf={class:"qc-stock-price"},pf={key:4,class:"qc-stock-extra"},ff={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function gf(a,t,b,e,d,g){const A=Ut("qc-state-panel"),y=Ut("qc-virtual-list");return me(),he("div",Op,[b.loading?(me(),ua(A,{key:0,type:"loading"})):b.items.length?(me(),he(ot,{key:2},[b.virtual?(me(),ua(y,{key:0,items:b.items,"row-height":b.rowHeight},{default:da(({item:c,index:w})=>[Ce("div",{class:it(["qc-stock-row",{"is-active":b.activeCode===c.code}]),"data-copy-code":b.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:o=>e.select(c),onKeydown:[ca(Lt(o=>e.select(c),["prevent"]),["enter"]),ca(Lt(o=>e.select(c),["prevent"]),["space"])]},[b.showRank?(me(),he("div",Vp,Fe(w+1),1)):He("",!0),Ce("div",Fp,[Ce("div",Hp,[Ce("span",Bp,Fe(c.code),1),c.status==="new"?(me(),he("span",Kp,Fe(b.statusText.new),1)):c.status==="out"?(me(),he("span",Wp,Fe(b.statusText.out),1)):He("",!0)]),Ce("div",Up,[xa(Fe(c.name)+" ",1),ia(a.$slots,"name-suffix",{item:c,index:w})]),b.showConsensus&&e.hasConsensus(c)?(me(),he("span",Gp,Fe(e.pctOf(c))+"% 共识",1)):He("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),he("div",Yp,[(me(!0),he(ot,null,_t(e.displayTags(c),o=>(me(),he("span",{key:o.text,class:it(["qc-stock-tag",{"is-more":o.more}])},Fe(o.text),3))),128))])):He("",!0),b.showConsensus?(me(),he("span",Jp,Fe(c.strategy_count||0)+" 策略",1)):He("",!0),b.showPrice&&c.price!=null?(me(),he("div",Qp,[Ce("span",$p,Fe(e.fmtPrice(c.price)),1),Ce("span",{class:it(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Fe(e.fmtChange(c.change_pct)),3)])):He("",!0),e.slots.extra?(me(),he("div",Xp,[ia(a.$slots,"extra",{item:c,index:w})])):He("",!0),e.slots.actions?(me(),he("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:c,index:w})])):He("",!0),e.slots.footer?(me(),he("div",Zp,[ia(a.$slots,"footer",{item:c,index:w})])):He("",!0)],42,jp)]),_:3},8,["items","row-height"])):(me(!0),he(ot,{key:1},_t(b.items,(c,w)=>(me(),he("div",{key:c.code,class:it(["qc-stock-row",{"is-active":b.activeCode===c.code}]),"data-copy-code":b.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:o=>e.select(c),onKeydown:[ca(Lt(o=>e.select(c),["prevent"]),["enter"]),ca(Lt(o=>e.select(c),["prevent"]),["space"])]},[b.showRank?(me(),he("div",tf,Fe(w+1),1)):He("",!0),Ce("div",af,[Ce("div",sf,[Ce("span",nf,Fe(c.code),1),c.status==="new"?(me(),he("span",lf,Fe(b.statusText.new),1)):c.status==="out"?(me(),he("span",of,Fe(b.statusText.out),1)):He("",!0)]),Ce("div",rf,[xa(Fe(c.name)+" ",1),ia(a.$slots,"name-suffix",{item:c,index:w})]),b.showConsensus&&e.hasConsensus(c)?(me(),he("span",cf,Fe(e.pctOf(c))+"% 共识",1)):He("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),he("div",df,[(me(!0),he(ot,null,_t(e.displayTags(c),o=>(me(),he("span",{key:o.text,class:it(["qc-stock-tag",{"is-more":o.more}])},Fe(o.text),3))),128))])):He("",!0),b.showConsensus?(me(),he("span",uf,Fe(c.strategy_count||0)+" 策略",1)):He("",!0),b.showPrice&&c.price!=null?(me(),he("div",vf,[Ce("span",mf,Fe(e.fmtPrice(c.price)),1),Ce("span",{class:it(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Fe(e.fmtChange(c.change_pct)),3)])):He("",!0),e.slots.extra?(me(),he("div",pf,[ia(a.$slots,"extra",{item:c,index:w})])):He("",!0),e.slots.actions?(me(),he("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:c,index:w})])):He("",!0),e.slots.footer?(me(),he("div",ff,[ia(a.$slots,"footer",{item:c,index:w})])):He("",!0)],42,ef))),128))],64)):(me(),ua(A,{key:1,type:"empty",title:b.emptyText},null,8,["title"]))])}const hf=Ca(Np,[["render",gf]]),yf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},bf={key:0,class:"split-divider","data-split-resize":""};function wf(a,t,b,e,d,g){return me(),he("div",{class:it(["detail-split-wrap",[b.rootClass,{"detail-split":b.enabled}]]),"data-split-root":""},[Ce("div",{class:it(["detail-split-list",[b.listClass,{"w-100":!b.enabled}]])},[ia(a.$slots,"list")],2),b.enabled?(me(),he("div",bf)):He("",!0),b.enabled?(me(),he("div",{key:1,class:it(["detail-split-pane",b.paneClass])},[ia(a.$slots,"pane")],2)):He("",!0)],2)}const kf=Ca(yf,[["render",wf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},_f=200,xf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),b=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.menus&&a.menus.value||[]),d=at(()=>{const l=e.value.find(m=>m.key===t.value);return l&&l.subPages||[]}),g=at(()=>d.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:cn[t.value]&&cn[t.value][l]||"circle-dot"}))),A=Rt(null),y=Rt(!1),c=Rt(!1),w=Rt(!1);let o=null,C=null;function x(){const l=A.value;l&&(c.value=l.scrollLeft>2,w.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function T(){const l=A.value;l&&(y.value=l.scrollWidth>l.clientWidth+2,x())}function S(l){const m=A.value;m&&m.scrollBy({left:l*_f,behavior:"smooth"})}function q(l){a.openTab?a.openTab(t.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function P(l){q(l),Nd(()=>{const m=A.value;if(!m)return;const O=m.querySelector('[data-tab-key="'+l+'"]');O&&O.scrollIntoView({block:"nearest",inline:"nearest"})})}const E=at(()=>{if(!y.value)return[];const l=A.value;if(!l)return[];const m=l.getBoundingClientRect(),O=new Set;return l.querySelectorAll(".qc-top-tab").forEach(K=>{const B=K.getBoundingClientRect();B.left>=m.left-2&&B.left<m.right-24&&O.add(K.getAttribute("data-tab-key"))}),g.value.filter(K=>!O.has(K.key))});function v(l,m){l.key==="ArrowLeft"?(l.preventDefault(),S(-1)):l.key==="ArrowRight"?(l.preventDefault(),S(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),q(m.key))}return Ka(()=>{T(),o=new ResizeObserver(()=>{clearTimeout(C),C=setTimeout(T,100)}),A.value&&o.observe(A.value),window.addEventListener("resize",T)}),Id(()=>{o&&o.disconnect(),window.removeEventListener("resize",T),clearTimeout(C)}),{state:a,tabs:g,currentSubPage:b,go:q,scrollRef:A,hasOverflow:y,canScrollLeft:c,canScrollRight:w,scrollByStep:S,scrollToTab:P,hiddenTabs:E,onTabKeydown:v,updateScrollState:x}}},Sf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Cf=["disabled"],qf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Ef={class:"qc-top-tab-label"},Mf=["disabled"];function Tf(a,t,b,e,d,g){const A=Ut("AppIcon"),y=Ut("el-dropdown-item"),c=Ut("el-dropdown-menu"),w=Ut("el-dropdown");return e.tabs.length?(me(),he("div",Sf,[e.hasOverflow?(me(),he("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,Cf)):He("",!0),Ce("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(me(!0),he(ot,null,_t(e.tabs,o=>(me(),he("div",{key:o.key,"data-tab-key":o.key,class:it(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:C=>e.go(o.key),onKeydown:C=>e.onTabKeydown(C,o)},[ct(A,{name:o.icon,size:14},null,8,["name"]),Ce("span",Ef,Fe(o.label),1)],42,qf))),128))],544),e.hasOverflow?(me(),he("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Mf)):He("",!0),e.hasOverflow&&e.hiddenTabs.length?(me(),ua(w,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:da(()=>[ct(c,null,{default:da(()=>[(me(!0),he(ot,null,_t(e.hiddenTabs,o=>(me(),ua(y,{key:o.key,command:o.key,class:it({"is-active":e.currentSubPage===o.key})},{default:da(()=>[ct(A,{name:o.icon,size:14},null,8,["name"]),xa(" "+Fe(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:da(()=>[t[3]||(t[3]=Ce("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):He("",!0)])):He("",!0)}const Df=Ca(xf,[["render",Tf]]);(function(){const{ref:a,computed:t,inject:b}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=b("qcState");if(!e)return{};const d=a(!1),g=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),A=()=>{g.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},y=t(()=>e.marketData&&e.marketData.value||{}),c=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:y,bannerDismissed:g,dismissBanner:A,goMerrill:c,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:d,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(w,o){const C="sub."+w.key+"."+o,x=e.t(C);if(x!==C)return x;const T="sub."+o,S=e.t(T);return S!==T&&S?S:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:b,computed:e}=Vue,d=b(0),g=b(0),A=b(!1),y=e(()=>{const B={day:"date",week:"week",month:"month",year:"year"},U=t.currentView&&t.currentView.value||"day";return B[U]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function w(B){return t.t&&t.t("view."+B)||c[B]||B}function o(B){t.switchView?t.switchView(B):t.currentView&&(t.currentView.value=B)}let C=null;function x(B){const U=B.touches&&B.touches[0];U&&(d.value=U.clientX,g.value=U.clientY)}async function T(){if(!A.value){A.value=!0;try{await t.refreshCalendarData()}catch{}C&&clearTimeout(C),C=setTimeout(()=>{A.value=!1},500)}}function S(B){if(!(window.innerWidth<=768))return;const U=B.changedTouches&&B.changedTouches[0];if(!U)return;const Q=window.__quantModules&&window.__quantModules.gestures||{};if((typeof Q.judgePullToRefresh=="function"?Q.judgePullToRefresh(g.value,U.clientY):U.clientY-g.value>=60)&&(window.scrollY||0)<=0){B.stopPropagation(),T();return}if(t.currentSubPage.value==="pool")return;const N=U.clientX-d.value,F=U.clientY-g.value;Math.abs(N)>50&&Math.abs(N)>Math.abs(F)*1.2&&(t.navigateDate(N<0?1:-1),B.stopPropagation())}const q=b(!1),P=b(!1),E=b(""),v=b(null),l=b([]);function m(B){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[B]||B}async function O(){if(t.selectedDate.value){q.value=!0,P.value=!0,E.value="",v.value=null,l.value=[];try{const B=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),U=await B.json();if(!B.ok)throw new Error(U.detail||"HTTP "+B.status);v.value=U;const Q=U&&U.comparison||{},I=[];for(const N of Object.keys(Q)){if(N==="all_intersection")continue;const F=Q[N]||{},J=N.split("_vs_");I.push({label:m(J[0])+" ↔ "+m(J[1]),interCount:F.intersection_count||0,inter:(F.intersection||[]).join(", "),onlyS1Count:F.only_s1_count||0,onlyS1:(F.only_s1||[]).join(", "),onlyS2Count:F.only_s2_count||0,onlyS2:(F.only_s2||[]).join(", ")})}l.value=I}catch(B){E.value=String(B&&B.message?B.message:B)}finally{P.value=!1}}}let K="";return Vue.watch(()=>{const B=t.stockPool,U=B&&B.value||[];return{n:U.length,first:U[0]&&U[0].code,split:!!t.detailSplitEnabled.value}},(B,U)=>{if(!B.split||!B.first||B.n===0)return;const Q=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,I=(t.stockPool.value||[]).some(N=>N.code===Q);if(!Q||!I){if(K===B.first&&Q&&I===!1&&B.n>1)return;K=B.first,t.showStockDetail&&t.showStockDetail(B.first)}},{immediate:!0}),{...t,calType:y,pullRefreshing:A,onCalTouchStart:x,onCalTouchEnd:S,viewLabel:w,switchViewLocal:o,compareVisible:q,compareLoading:P,compareError:E,compareData:v,comparePairs:l,openStrategyCompare:O}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const t=a("qcState"),b=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let d=0;const g=e(()=>{var z;return((z=t.merrillData)==null?void 0:z.value)||{}}),A=e(()=>{var z;return((z=t.marketData)==null?void 0:z.value)||{}}),y=e(()=>{var z;return((z=t.dashboardData)==null?void 0:z.value)||{}}),c=e(()=>{var z;return((z=t.healthMetrics)==null?void 0:z.value)||[]}),w=e(()=>{var z;return((z=t.filteredConsensusRank)==null?void 0:z.value)||[]}),o=e(()=>{const z={};for(const te of w.value)te.code&&te.name&&(z[te.code]=te.name);return z}),C={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function x(z){return C[z]||z}const T=e(()=>A.value.date||y.value.latest_date||"-"),S=e(()=>{const z=A.value;return!z||Object.keys(z).length===0?"数据加载中...":z.is_trading_day&&z.in_trading_hours?"● 交易中":z.is_trading_day?"已收盘":"○ 非交易日"}),q=e(()=>{const z=g.value.next_stage_prediction;return z&&z.next_stage_name&&z.transition_probability>.2?`→${z.next_stage_name} ${(z.transition_probability*100).toFixed(2)}%`:""}),P=e(()=>{const z=[],te=y.value.pool_changes||{},xe=te.new_count||0;if(xe>0){const yt=te.new_stock_names||{},Ye=(te.new_stocks||[]).map(Ke=>yt[Ke]||o.value[Ke]||Ke).slice(0,4).join("、");z.push({icon:"sparkles",level:"new",text:`今日新入池 ${xe} 只${Ye?" · "+Ye:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const yt of c.value.filter(Ye=>Ye.degraded))z.push({icon:"alert-triangle",level:"warn",text:`数据源 ${x(yt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Ae=g.value.timing;Ae&&Ae.progress_percent&&Ae.progress_percent>100?z.push({icon:"clock",level:"warn",text:`美林「${g.value.name}」已超期 ${Ae.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Ae&&Ae.maturity&&g.value.name&&z.push({icon:"clock",level:"info",text:`美林「${g.value.name}」阶段成熟度 ${Ae.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const Ve=A.value;return Ve&&Ve.is_trading_day===!1&&Ve.date&&z.push({icon:"calendar",level:"info",text:`${Ve.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),z}),E=e(()=>{const z=[],te=g.value.name||"",xe=g.value.timing||{},Ae=["复苏","成长","过热"],Ve=["滞胀","衰退"];Ae.some(st=>te.includes(st))&&z.push({kind:"opportunity",source:"美林",text:te+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),Ve.some(st=>te.includes(st))&&z.push({kind:"risk",source:"美林",text:te+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),xe.progress_percent&&xe.progress_percent>100&&z.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const yt=y.value.pool_changes||{},Ye=(yt.new_count||0)-(yt.out_count||0);Ye>=3?z.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ye,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):Ye<=-3&&z.push({kind:"risk",source:"池变动",text:"净出池 "+Ye,action:()=>{t.currentSubPage.value="consensus"}});const Ke=A.value.market_sentiment,dt=Ke&&Ke.text||"";(dt.includes("乐观")||dt.includes("积极")||dt.includes("亢奋"))&&z.push({kind:"opportunity",source:"情绪",text:dt,action:()=>{t.currentSubPage.value="market"}}),(dt.includes("悲观")||dt.includes("恐慌")||dt.includes("低迷"))&&z.push({kind:"risk",source:"情绪",text:dt,action:()=>{t.currentSubPage.value="market"}});for(const st of c.value.filter(Y=>Y.degraded))z.push({kind:"risk",source:"数据",text:x(st.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return z}),v=e(()=>{var z;return((z=t.merrillTimeline)==null?void 0:z.value)||t.merrillTimeline||{cycles:[]}}),l=e(()=>{var z;return((z=t.timelineLoading)==null?void 0:z.value)||!1});function m(z){const te=t.showStageDetail;typeof te=="function"&&te(z)}function O(z){const te=t.merrillStagesConfig,Ae=(te&&te.value?te.value:te||{})[z]||{};return Ae.color||Ae.bg_color||"var(--color-primary)"}function K(z){const te=t.merrillStagesConfig,xe=te&&te.value?te.value:te||{};return xe[z]&&xe[z].name||""}function B(){const z=t.merrillStagesConfig;return z&&z.value?z.value:z||{}}function U(z){return B()[z]&&B()[z].description||""}const Q=Vue.ref([]),I=Vue.ref(null),N=Vue.ref(!1),F=Vue.ref(!1),J=Vue.ref(7),Z=Vue.ref(""),ne=Vue.ref(""),ee=Vue.computed(()=>{const z=new Set;return(Q.value||[]).forEach(function(te){te.task&&z.add(te.task)}),Array.from(z).sort()}),L=Vue.computed(function(){const z=I.value&&I.value.success_rate||0;return z>=80?"color-success":z>=50?"color-warning":"color-danger"});function s(z,te){return z>0&&te/z>=.8?"status-ok":z>0&&te/z>=.5?"status-warn":"status-bad"}async function h(){const z=++d;N.value=!0,F.value=!1;try{const te=window.__quantModules&&window.__quantModules.core||{},xe=typeof te.authHeaders=="function"?te.authHeaders():{},Ae=new URLSearchParams({days:String(J.value)});Z.value&&Ae.set("task",Z.value),ne.value&&Ae.set("status",ne.value);const[Ve,yt]=await Promise.all([fetch("/api/system/execution-history?"+Ae.toString(),{headers:xe}).then(function(Ye){return Ye.json()}),fetch("/api/system/execution-summary?days="+J.value,{headers:xe}).then(function(Ye){return Ye.json()})]);if(z!==d)return;Q.value=Ve&&Ve.data||[],I.value=yt&&yt.data||null}catch(te){console.error("[execution] 执行数据加载失败:",te),F.value=!0}finally{z===d&&(N.value=!1)}}const n=window.__quantModules&&window.__quantModules.i18n||{},f=typeof n.t=="function"?n.t:function(z){return String(z)},X=Vue.ref([]),D=Vue.ref(null),p=Vue.ref(null),r=Vue.ref(""),k=Vue.ref([]),u=Vue.ref(!1);let R=null;const le=Vue.computed(function(){const z=p.value&&p.value.dates||[];return z.length&&!r.value&&(r.value=z[z.length-1].date),z}),G=Vue.computed(function(){const z=(X.value||[]).find(function(xe){return xe.enabled});if(!z||z.countdown_seconds==null)return"—";const te=z.countdown_seconds;return Math.floor(te/3600)+"h"+String(Math.floor(te%3600/60)).padStart(2,"0")+"m"}),M=Vue.computed(function(){const z=(X.value||[]).find(function(te){return te.enabled});if(!z||z.countdown_seconds==null||z.countdown_seconds<0)return"";try{return new Date(Date.now()+z.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),W=Vue.computed(function(){const z=D.value;return!z||z.phase==="idle"?f("exec.waiting"):z.phase==="running"?f("exec.running")+(z.current_sid?" · "+z.current_sid:""):z.phase==="done"?f("exec.done"):f("exec.failed")}),ie=Vue.computed(function(){return D.value&&D.value.phase==="running"?"loader":"check-circle-2"}),ue=Vue.computed(function(){const z=p.value&&p.value.dates||[];return z.length?z[z.length-1].date:"—"}),Me=Vue.computed(function(){const z=p.value&&p.value.dates||[],te=z[z.length-1];return te&&te.visible?"color-success":"color-danger"}),$=Vue.computed(function(){const z=p.value&&p.value.dates||[],te=z[z.length-1];return te?te.day_view_total:"—"});function ce(z){const te=window.__quantModules&&window.__quantModules.core||{},xe=typeof te.authHeaders=="function"?te.authHeaders():{};return fetch(z,{headers:xe}).then(function(Ae){return Ae.json()})}async function Re(){const z=++d;try{const[te,xe,Ae]=await Promise.all([ce("/api/strategies/execution/plan"),ce("/api/strategies/execution/status"),ce("/api/strategies/execution/results?days=7")]);if(z!==d)return;X.value=te&&te.data&&te.data.plans||[],D.value=xe&&xe.data||null,p.value=Ae&&Ae.data||null,D.value&&D.value.phase==="running"?se():pe()}catch(te){console.error("[execution-monitor] 监控数据加载失败:",te)}}function se(){pe(),R=setInterval(function(){ce("/api/strategies/execution/status").then(function(z){D.value=z&&z.data||null,D.value&&D.value.phase!=="running"&&(pe(),Re())}).catch(function(){})},5e3)}function pe(){R&&(clearInterval(R),R=null)}async function Te(z){if(!z)return;const te=++d;u.value=!0;try{const xe=await ce("/api/strategies/execution/trace/"+encodeURIComponent(z));if(te!==d)return;const Ae=xe&&xe.data||null;k.value=Ae&&Ae.steps||[]}catch(xe){console.error("[execution-trace] 追溯加载失败:",xe)}finally{te===d&&(u.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(z){z==="execution"?(h(),Re()):pe()},{immediate:!0}),Vue.watch(function(){const z=t.currentSubPage&&t.currentSubPage.value,te=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],xe=t.marketData&&t.marketData.value||{};return{sub:z,split:!!t.detailSplitEnabled.value,top5:te.slice(0,5),rank:te,indices:(xe.indices||[]).map(function(Ae){return Ae})}},function(z,te){if(z.split){if(z.sub==="overview"){if(!z.top5.length)return;const xe=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ae=z.top5.some(function(Ve){return Ve.code===xe});(!xe||!Ae)&&t.showStockDetail&&t.showStockDetail(z.top5[0].code)}else if(z.sub==="consensus"){if(!z.rank.length)return;const xe=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ae=z.rank.some(function(Ve){return Ve.code===xe});(!xe||!Ae)&&t.showStockDetail&&t.showStockDetail(z.rank[0].code)}else if(z.sub==="market"){if(!z.indices.length)return;const xe=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Ae=z.indices.some(function(Ve){return Ve.code===xe});(!xe||!Ae)&&t.showIndexDetail&&t.showIndexDetail(z.indices[0])}}},{immediate:!0});const ve=Vue.ref("band"),be=["recession","recovery","overheating","stagflation"];function qe(z){if(!z)return null;const te=String(z).split("-"),xe=parseInt(te[0],10),Ae=parseInt(te[1]||"1",10);return isFinite(xe)?xe+(Ae-1)/12:null}function re(z){const te=Math.floor(z);let xe=Math.round((z-te)*12)+1;return xe>12&&(xe=12),xe<1&&(xe=1),te+"-"+(xe<10?"0"+xe:""+xe)}function ae(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function fe(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Ne(z,te){const xe=ae(),Ae=Number(xe.avg_duration_months)||0,Ve=Math.min(100,Number(xe.progress_percent)||0),yt=qe(xe.current_stage_start_date),Ye=[];let Ke=null;if((z||[]).forEach(function(We){const Ct=qe(We.start);Ke==null&&Ct!=null&&(Ke=Ct);const Ft=!!(We.is_current||yt!=null&&Ct===yt&&!We.duration_months),zt=We.name||K(We.stage);if(Ft&&Ae>0){const lt=Ae*Ve/100;lt>.5&&Ye.push({stage:We.stage,name:zt,months:lt,live:!0,start:We.start});const qt=Ae-lt;qt>.5&&Ye.push({stage:We.stage,name:"剩余(预测)",months:qt,ghost:!0,start:We.start})}else{let lt=Number(We.duration_months)||0;if(!lt&&Ct!=null){const qt=qe(We.end);qt!=null&&qt>Ct&&(lt=Math.max(1,Math.round((qt-Ct)*12)))}lt||(lt=1),Ye.push({stage:We.stage,name:zt,months:lt,live:Ft,start:We.start,end:We.end})}if(Ft&&te&&Ae>0){const lt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;lt&&Ye.push({stage:lt.next_stage,name:(lt.next_stage_name||"下一阶段")+" (预测)",months:Ae,ghost:!0,prob:lt.transition_probability})}}),!Ye.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const dt=Ye.reduce(function(We,Ct){return We+Ct.months},0)||1,st=Ke??0;let Y=0,ge=0;const Xe=Ye.map(function(We){const Ct=Y;We.ghost||(ge+=We.months),Y+=We.months;const Ft={stage:We.stage,name:We.name,months:Math.round(We.months),ghost:!!We.ghost,live:!!We.live,prob:We.prob,left:Ct/dt*100,width:Math.max(2,We.months/dt*100)},zt=qe(We.start),lt=qe(We.end);return Ft.start=zt!=null?re(zt):re(st+Ct/12),Ft.end=lt!=null?re(lt):"",Ft.predicted=zt==null,Ft}),mt=Ye[Ye.length-1],tt=Ye.some(function(We){return We.ghost}),It=mt&&mt.end?mt.end:re(st+dt/12);return{segs:Xe,axisStart:re(st),axisEnd:It,nowPct:tt?ge/dt*100:null}}function ze(z){return(z.stages||[]).some(function(te){return te.is_current})}const Be=Vue.computed(function(){const z=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!z.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let te=null;for(let xe=z.length-1;xe>=0;xe--)if(ze(z[xe])){te=z[xe];break}return te||(te=z[z.length-1]),Ne(te.stages,!0)});function xt(z){const te=z&&z.stages?z.stages:[];if(!te.length)return"";const xe=te[0]&&te[0].start?String(te[0].start).slice(0,4):"",Ae=te[te.length-1]||{},Ve=Ae.end?String(Ae.end).slice(0,4):Ae.start?String(Ae.start).slice(0,4):"";return xe||Ve?xe?xe+"–"+Ve:Ve:""}const Tt=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(te){return!ze(te)}).map(function(te){return{label:te.label,years:xt(te),segs:Ne(te.stages,!1).segs}})}),kt=be,ke=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(te){const xe={};be.forEach(function(Ve){xe[Ve]=0});let Ae=null;return(te.stages||[]).forEach(function(Ve){xe[Ve.stage]!=null&&(xe[Ve.stage]+=Number(Ve.duration_months)||0),Ve.is_current&&(Ae=Ve.stage)}),{label:te.label,sum:xe,cur:Ae}})}),we=Vue.computed(function(){let z=0;return ke.value.forEach(function(te){be.forEach(function(xe){te.sum[xe]>z&&(z=te.sum[xe])})}),z||1}),Le=Vue.computed(function(){const z=t.merrillSnapshots&&t.merrillSnapshots.value||[],te=[];return z.forEach(function(xe){const Ae=te[te.length-1];Ae&&Ae.stage===xe.stage?(Ae.count++,Ae.last=xe.timestamp):te.push({stage:xe.stage,name:xe.stage_name||K(xe.stage),count:1,first:xe.timestamp,last:xe.timestamp})}),te}),Pe=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Je=Vue.computed(function(){const z=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,z/Pe.value*100))+"%",background:z>100?"linear-gradient(90deg, "+fe()+", var(--color-warning))":fe()}}),Qe=Vue.computed(function(){return 100/Pe.value*100}),$e=Vue.computed(function(){const z=ae().predicted_end;if(!z)return"";if(typeof z=="string")return z;const te=z.optimistic||z.earliest||"",xe=z.pessimistic||z.latest||"";return te&&xe?te+" ~ "+xe:z.base||z.mid||te||xe||""});var St=22;function ht(z){return"color-mix(in srgb, "+z+" "+St+"%, var(--surface-card))"}function vt(z){const te=O(z.stage);return z.ghost?{left:z.left+"%",width:z.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+te,background:"repeating-linear-gradient(45deg, "+ht(te)+" 0, "+ht(te)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:z.left+"%",width:z.width+"%",background:ht(te),color:"var(--text-primary)",borderLeft:"3px solid "+te}}function Dt(z){const te=[z.name];return z.start&&te.push((z.predicted?"预计起始 ":"起始 ")+z.start+(z.end?" → "+z.end:"")),z.months&&te.push("约 "+z.months+" 个月"),z.ghost&&te.push("预测(尚未发生)"),z.prob!=null&&te.push("转移概率 "+(z.prob*100).toFixed(0)+"%"),te.join(" · ")}function ea(z,te){const xe=O(z),Ae=Math.max(.28,te/we.value),Ve=Math.round(14+30*Ae);return{background:"color-mix(in srgb, "+xe+" "+Ve+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...t,todayText:T,tradingStatus:S,merrillNext:q,todayFocus:P,todaySignals:E,merrillConfigOpen:b,getTimelineStageColor:O,getTimelineStageName:K,getTimelineStageDesc:U,mcHistView:ve,mcCurrentBand:Be,mcHistoryBands:Tt,mcStageKeys:kt,mcMatrix:ke,mcTrailRuns:Le,mcProgStyle:Je,mcAvgMark:Qe,mcEndRange:$e,mcSegStyle:vt,mcSegTitle:Dt,mcMxCellStyle:ea,merrillTimeline:v,timelineLoading:l,showTimelineStage:m,execHistory:Q,execSummary:I,execLoading:N,execError:F,execDays:J,execTaskFilter:Z,execStatusFilter:ne,execTaskOptions:ee,execSuccessClass:L,loadExecutionData:h,execRateClass:s,execPlan:X,execStatus:D,execResults:p,execTraceDate:r,execTraceSteps:k,execTraceLoading:u,execResultsDates:le,execCountdownText:G,execNextRunText:M,execPhaseText:W,execStatusIcon:ie,execLastDate:ue,execVisibleClass:Me,execVisibleText:$,loadExecutionTrace:Te}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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

                    <!-- v3.16 (FR-3.16.1): 数据同步入口 (syncStockData) -->
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
                    </div>
    `,setup(){const t=a("qcState");if(!t)return{};function b(Y){t.currentSubPage.value=Y}function e(){ve(),be(),qe()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,Y=>{Y==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),Y==="datadict"&&k(),Y==="health"&&f(),Y==="notification"&&e()});const d=t.themeHues||[45,220,0,140,270,320,-1],g=t.themeHueNames||{},A=t.themeMode||Vue.computed(()=>"light"),y=t.themeHue||Vue.ref(45);function c(Y){t.changeThemeMode&&t.changeThemeMode(Y)}function w(Y){t.changeThemeHue&&t.changeThemeHue(parseInt(Y,10))}function o(Y){return t.hueColor?t.hueColor(Y):Y<0?"hsl(0, 0%, 46%)":"hsl("+Y+", 75%, 42%)"}function C(Y){return t.hueName?t.hueName(Y):g[Y]||"自定义 "+Y}function x(Y){t.setNavMode&&t.setNavMode(Y)}const T=Vue.ref([]),S=Vue.ref(""),q=Vue.ref("read"),P=Vue.ref(""),E=Vue.ref(!1),v=()=>window.__quantModules&&window.__quantModules.core||{},l=Vue.ref([]),m=Vue.ref(!1);async function O(){m.value=!0;try{const Y=await fetch("/api/audit/logs?limit=20",{headers:v().authHeaders?v().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});l.value=Y&&Y.logs||[]}catch(Y){console.error("[system] 审计加载失败:",Y),l.value=[]}finally{m.value=!1}}const K=Vue.ref(!1),B=Vue.ref(null),U=Vue.ref(null),Q=Vue.ref([]),I=Vue.ref(null);function N(Y){return Y==="completed"?"完成":Y==="running"?"运行中":Y==="pending"?"排队中":Y==="cancelled"?"已取消":"失败"}async function F(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(Q.value=ge.data&&ge.data.tasks||[])}catch(Y){console.warn("[system] 加载任务队列失败:",Y)}}async function J(Y){try{await fetch("/api/jobs/"+Y+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),F()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function Z(){F(),I.value=window.setInterval(F,15e3)}const ne=Vue.ref({items:[]}),ee=Vue.ref([]),L=Vue.ref(null),s=Vue.ref({data_sources:[],alerts:[]}),h=function(){return v().authHeaders?v().authHeaders():{}},n=function(Y){return fetch(Y,{headers:h()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function f(){K.value=!0,B.value=null;try{const[Y,ge,Xe,mt]=await Promise.all([n("/api/reliability/freshness"),n("/api/reliability/heal-history?limit=20"),n("/api/reliability/startup-report"),n("/api/reliability/source-health")]);ne.value=Y&&Y.data||{items:[]},ee.value=ge&&ge.data||[],L.value=Xe&&Xe.data||null,s.value=mt||{data_sources:[],alerts:[]},U.value=new Date().toLocaleTimeString()}catch(Y){console.warn("[health] 加载失败:",Y),B.value="健康数据加载失败: "+(Y.message||""),ne.value={items:[]},ee.value=[]}finally{K.value=!1}}const X=Vue.ref(!1),D=Vue.ref(""),p=Vue.ref(""),r=Vue.ref({fields:[]});async function k(){X.value=!0,D.value="";try{const Y="/api/data-dict"+(p.value?"?category="+p.value:""),ge=await n(Y);r.value=ge&&ge.data||{fields:[]}}catch(Y){console.warn("[dict] 加载失败:",Y),D.value="数据字典加载失败: "+(Y.message||""),r.value={fields:[]}}finally{X.value=!1}}function u(Y){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Y]||"var(--text-secondary)"}function R(Y){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Y]||Y}const le=Vue.computed(()=>(ne.value?ne.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),G=Vue.ref("rules"),M=Vue.ref([]),W=Vue.ref([]),ie=Vue.ref([]),ue=Vue.ref(!1),Me=Vue.ref(""),$=Vue.ref("price_above"),ce=Vue.ref(""),Re=Vue.ref(!1),se=Vue.ref(60),pe=Vue.ref("");function Te(Y){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Y]||Y}async function ve(){ue.value=!0;try{const Y=await(await fetch("/api/alerts/rules")).json();M.value=Y&&Y.rules||[]}catch(Y){pe.value="规则加载失败: "+Y}finally{ue.value=!1}}async function be(){ue.value=!0;try{const Y=await(await fetch("/api/alerts/history?limit=50")).json();W.value=Y&&Y.history||[]}catch(Y){pe.value="历史加载失败: "+Y}finally{ue.value=!1}}async function qe(){ue.value=!0;try{const Y=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();ie.value=Y&&Y.channels||[],Re.value=!!(ge&&ge.silenced)}catch(Y){pe.value="通道状态加载失败: "+Y}finally{ue.value=!1}}function re(Y){G.value=Y,Y==="rules"?ve():Y==="history"?be():qe()}async function ae(){const Y=Me.value.trim();if(!Y){pe.value="请填写股票代码";return}ue.value=!0;try{const ge={stock_code:Y,rule_type:$.value};if($.value!=="new_pool"){const mt=Number(ce.value);if(isNaN(mt)){pe.value="阈值必须为数值";return}ge.threshold=mt}const Xe=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();Xe&&Xe.rule?(pe.value="规则已添加",Me.value="",ce.value="",ve()):pe.value=Xe&&Xe.detail||"添加失败"}catch(ge){pe.value="添加失败: "+ge}finally{ue.value=!1}}async function fe(Y){try{await fetch("/api/alerts/rules/"+Y.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Y.enabled})}),Y.enabled=!Y.enabled}catch(ge){pe.value="切换失败: "+ge}}async function Ne(Y){try{const ge=await(await fetch("/api/alerts/rules/"+Y.id,{method:"DELETE"})).json();ge&&ge.success?(pe.value="规则已删除",ve()):pe.value="删除失败"}catch(ge){pe.value="删除失败: "+ge}}async function ze(){try{const Y=Re.value?se.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Y})})).json();Re.value=!!(ge&&ge.silenced),pe.value=Re.value?"已静默":"已恢复推送"}catch(Y){pe.value="静默设置失败: "+Y}}async function Be(){Re.value=!1,await ze()}function xt(Y){return!!Y&&!Y.degraded}const Tt=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((ge,Xe)=>Math.max(ge,Xe.views||0),0)||1),kt=()=>v().OPENAPI_ROUTE_BASE||"/api/openapi";async function ke(){E.value=!0;try{const Y=await v().apiFetch(kt()+"/keys");T.value=Y&&Y.data||[]}catch(Y){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Y.message||""))}finally{E.value=!1}}async function we(){try{const Y=await v().apiFetch(kt()+"/keys",{method:"POST",body:JSON.stringify({name:S.value||"未命名",role:q.value||"read",expire_days:365})});Y&&Y.success?(P.value=Y.api_key||"",S.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await ke()):ElementPlus.ElMessage.error(Y&&(Y.detail||Y.message)||"生成失败")}catch(Y){ElementPlus.ElMessage.error("生成失败: "+(Y.message||""))}}async function Le(){if(P.value)try{await navigator.clipboard.writeText(P.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Pe(Y){try{const ge=await v().apiFetch(kt()+"/keys/"+Y.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),P.value&&Y.prefix&&P.value.includes(Y.prefix)&&(P.value=""),await ke()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const Je={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Qe(Y){return Je[Y]||Y}const $e=computed(()=>{var Y;return(((Y=t.healthMetrics)==null?void 0:Y.value)||[]).map(ge=>({name:Qe(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function St(Y){return Y.degraded?"degraded":Y.success_rate==null?"unknown":Y.success_rate>=90?"ok":Y.success_rate>=60?"warn":"bad"}function ht(Y){return Y==null?"":Y<1?"刚刚":Y<24?Math.round(Y)+"小时前":Math.floor(Y/24)+"天前"}const vt=t.aiUsage||Vue.ref({}),Dt=Vue.computed(()=>{const Y=vt.value&&vt.value.by_model||{};return Object.entries(Y).map(([ge,Xe])=>({name:ge,count:Xe})).sort((ge,Xe)=>Xe.count-ge.count)}),ea=Vue.computed(()=>Dt.value.reduce((Y,ge)=>Math.max(Y,ge.count),0)||1),z=Vue.computed(()=>Dt.value.reduce((Y,ge)=>Y+ge.count,0)||1),te=Vue.computed(()=>xe.value.reduce((Y,ge)=>Math.max(Y,ge.count),0)||0),xe=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ge=[],Xe=new Date;for(let mt=29;mt>=0;mt--){const tt=new Date(Xe.getFullYear(),Xe.getMonth(),Xe.getDate()-mt),It=tt.getFullYear()+"-"+String(tt.getMonth()+1).padStart(2,"0")+"-"+String(tt.getDate()).padStart(2,"0");ge.push({day:It,count:Y[It]||0})}return ge}),Ae=Vue.computed(()=>xe.value.reduce((Y,ge)=>Math.max(Y,ge.count),0)||1),Ve=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ge=new Date,Xe=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return Y[Xe]||0}),yt=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ge=Object.keys(Y).filter(Xe=>(Y[Xe]||0)>0);return ge.length?ge[ge.length-1]:""});function Ye(Y){t.analyticsDays&&(t.analyticsDays.value=Y),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const Ke='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',dt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function st(Y){return Y?dt:Ke}return Z(),{...t,themeHues:d,themeHueNames:g,themeMode:A,themeHue:y,onThemeModeChange:c,setThemeHue:w,hueColor:o,hueName:C,onNavModeChange:x,analyticsMaxViews:Tt,aiModelRank:Dt,aiModelMax:ea,aiDayTrend:xe,aiDayMax:Ae,todayAiCalls:Ve,lastAiCallDay:yt,aiTotal:z,aiDayPeak:te,setAnalyticsDays:Ye,viewIcon:st,openApiKeys:T,openApiKeyName:S,openApiKeyRole:q,newOpenApiKey:P,openApiLoading:E,loadOpenApiKeys:ke,generateOpenApiKey:we,copyOpenApiKey:Le,revokeOpenApiKey:Pe,healthRows:$e,healthClass:St,fmtAge:ht,staleAssetCount:le,jobQueue:Q,loadJobQueue:F,cancelJob:J,jobStatusText:N,auditLogs:l,auditLoading:m,loadAuditLogs:O,healthLoading:K,healthError:B,healthUpdatedAt:U,freshnessData:ne,healHistory:ee,startupReport:L,sourceHealth:s,refreshHealth:f,statusColor:u,statusLabel:R,sourceOk:xt,dictLoading:X,dictError:D,dictCategory:p,dictData:r,loadDataDict:k,ncTab:G,ncRules:M,ncHistory:W,ncChannels:ie,ncLoading:ue,ncNewCode:Me,ncNewType:$,ncNewThreshold:ce,ncSilence:Re,ncSilenceMinutes:se,ncMsg:pe,ncTypeLabel:Te,onNcTab:re,loadAlertRules:ve,loadAlertHistory:be,loadAlertChannels:qe,addAlertRule:ae,toggleAlertRule:fe,removeAlertRule:Ne,applySilence:ze,clearSilence:Be,goSystemSub:b}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:b,onUnmounted:e}=Vue,d=a("qcState");if(!d)return{};function g(){if(!d.hasMoreAiHistory||!d.loadMoreAiHistory||d.currentPage.value!=="ai"||d.currentSubPage.value!=="history")return;const ue=document.documentElement;ue.scrollTop+window.innerHeight>=ue.scrollHeight-300&&d.loadMoreAiHistory()}window.addEventListener("scroll",g,{passive:!0}),e(()=>window.removeEventListener("scroll",g));const A=t(null),y=t(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function w(ue){return!ue||ue.total===0||ue.rate===null||ue.rate===void 0?"--":ue.rate.toFixed(2)+"%"}const o=t(5);function C(ue){o.value=ue}function x(ue,Me){if(!ue)return"--";if(ue.available===!1)return"— 数据不可达";const $=ue["hit_n"+Me];return $===!0?"✓ 命中":$===!1?"✗ 未中":"– 中性/待验证"}async function T(){y.value=!0;try{const Me=await(await fetch("/api/ai/track")).json();A.value=Me&&Me.success?Me.data:null}catch(ue){console.warn("[eval-track] 评估命中率加载失败:",ue),A.value=null}finally{y.value=!1}}b(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(ue){ue==="ai/evaluation-analysis"&&T()},{immediate:!0});const S=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:q,summary:P,trades:E,loading:v,loadError:l,showAddForm:m,addForm:O,addSaving:K,tradeFormVisible:B,tradeForm:U,tradeSaving:Q,portfolioTab:I,equityDays:N,equityLoading:F,equityNote:J,equityHasData:Z,loadPortfolio:ne,addPosition:ee,removePosition:L,openTradeForm:s,submitTrade:h,loadTrades:n,loadEquity:f,fmtSigned:X,fmtSignedPct:D,signClass:p,riskTab:r,riskLoading:k,riskNote:u,riskHasData:R,riskData:le,riskMetricList:G,loadRisk:M}=S;b(q,function(ue){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((ue||[]).map(function(Me){return{code:Me.stock_code,name:Me.stock_name||Me.stock_code}}))},{deep:!0}),b(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(ue){ue==="ai/portfolio"?(ne(),n(),f(N?N.value:30),typeof M=="function"&&M()):ue==="ai/overview"&&ne()},{immediate:!0});let W="",ie=!1;return b(function(){const ue=d.currentSubPage&&d.currentSubPage.value,Me=!!(d.detailSplitEnabled&&d.detailSplitEnabled.value),$={sub:ue,split:Me,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(ue==="history"){const ce=d.aiHistoryView&&d.aiHistoryView.value||"date",Re=ce==="date"?d.groupedByDate:ce==="month"?d.groupedByMonth:d.aiHistoryByStock,se=Re&&Re.value||{},pe=Object.keys(se);$.kind="history",$.view=ce,$.key=pe.length?pe[0]:"",$.first=pe.length&&(se[pe[0]]||[])[0]||null,$.expandList=ce==="date"?d.expandedDates:ce==="month"?d.expandedMonths:d.expandedStocks,$.expandFn=ce==="date"?d.toggleDateExpand:ce==="month"?d.toggleMonthExpand:d.toggleStockExpand}else if(ue==="chat_history"){const ce=d.chatHistoryView&&d.chatHistoryView.value||"date",Re=ce==="date"?d.chatGroupedByDate:ce==="month"?d.chatGroupedByMonth:d.chatGroupedByStock,se=Re&&Re.value||{},pe=Object.keys(se);$.kind="chat",$.view=ce,$.key=pe.length?pe[0]:"",$.first=pe.length&&(se[pe[0]]||[])[0]||null,$.expandList=ce==="date"?d.expandedChatDates:ce==="month"?d.expandedChatMonths:d.expandedChatStocks,$.expandFn=ce==="date"?d.toggleChatDateExpand:ce==="month"?d.toggleChatMonthExpand:d.toggleChatStockExpand}return $},function(ue){if(!ue.split||!ue.first||!ue.kind)return;const Me=ue.sub!==W,$=d.stockDetail&&d.stockDetail.value,ce=!!($&&$.stock);if(!Me&&ce||ie)return;W=ue.sub,ie=!0;try{ue.key&&ue.expandList&&ue.expandFn&&ue.expandList.value&&ue.expandList.value.indexOf(ue.key)<0&&ue.expandFn(ue.key)}catch{}const Re=ue.kind==="history"?d.viewAiResult(ue.first):d.viewChatSession(ue.first);Re&&typeof Re.finally=="function"?Re.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...d,trackData:A,trackLoading:y,trackWindows:c,fmtTrackRate:w,loadTrack:T,trackWindow:o,setTrackWindow:C,trackHitText:x,positions:q,summary:P,trades:E,loading:v,loadError:l,showAddForm:m,addForm:O,addSaving:K,tradeFormVisible:B,tradeForm:U,tradeSaving:Q,portfolioTab:I,equityDays:N,equityLoading:F,equityNote:J,equityHasData:Z,loadPortfolio:ne,addPosition:ee,removePosition:L,openTradeForm:s,submitTrade:h,loadTrades:n,loadEquity:f,fmtSigned:X,fmtSignedPct:D,signClass:p,riskTab:r,riskLoading:k,riskNote:u,riskHasData:R,riskData:le,riskMetricList:G,loadRisk:M}}}})();(function(){const{ref:a,computed:t,watch:b,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const d=e("qcState"),g=Vue.ref(!1),A=Vue.ref(!1);let y=0;if(!d)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function w(_){c.value=_;try{localStorage.setItem("quant_strategy_mode",_)}catch{}d.currentSubPage.value="strategy-manage"}const o=a([]),C=a(!1),x=a(!1),T=a(""),S=a(null),q=a(!1),P=a(!1);async function E(){const _=++y;C.value=!0,x.value=!1;try{const i=await fetch("/api/market/reviews?limit=30",{headers:Y()}).then(V=>V.json());if(_!==y)return;i&&i.success?o.value=Array.isArray(i.data)?i.data:[]:x.value=!0}catch(i){console.error("[market-review] 复盘列表加载失败:",i),x.value=!0}finally{_===y&&(C.value=!1)}}function v(_){T.value=_,B(_)}function l(_){T.value===_?K():v(_)}function m(_){return _==null||isNaN(Number(_))?"—":(Number(_)>=0?"+":"")+Number(_).toFixed(2)+"%"}function O(_){return _==null||isNaN(Number(_))?"—":Number(_).toFixed(2)}function K(){T.value="",S.value=null,P.value=!1}async function B(_){const i=++y;q.value=!0,P.value=!1,S.value=null;try{const V=_?"/api/market/review?date="+encodeURIComponent(_):"/api/market/review",oe=await fetch(V,{headers:Y()}).then(Se=>Se.json());if(i!==y)return;oe&&oe.success?S.value=oe.data:P.value=!0}catch(V){console.error("[market-review] 复盘详情加载失败:",V),P.value=!0}finally{i===y&&(q.value=!1)}}function U(_){return _>0?"up":_<0?"down":"flat"}function Q(_){return _==null||isNaN(Number(_))?"—":(_>0?"+":"")+Number(_).toFixed(2)+"%"}function I(_){const i={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(_||{}).map(function(V){const oe=V[0],Se=V[1],Ee=!Se||Se==="unavailable"||Se==="数据不可达";return{label:i[oe]||oe,value:Ee?"数据不可达":Se,unavailable:Ee}})}const N=a([]),F=a(!1),J=a(!1),Z=a(""),ne=a(""),ee=a(""),L=a({}),s=a(!1),h=a(""),n=a(""),f=a([]),X=a([]),D=a(""),p=a(""),r=a(!0),k=a(!0),u=a("20:00"),R=a("default"),le=a(!1),G=a(""),M=t(function(){return N.value.find(function(_){return _.id===ee.value})||null});async function W(_,i){i=i||{},i.headers=Object.assign({},i.headers||{});const V=localStorage.getItem("quant_token")||"";return V&&(i.headers.Authorization="Bearer "+V),fetch(_,i)}async function ie(){const _=++y;F.value=!0,J.value=!1,Z.value="",ne.value="";try{const i=await W("/api/strategies").then(function(oe){return oe.json()});if(_!==y)return;let V=null;Array.isArray(i)?V=i:i&&Array.isArray(i.strategies)?(V=i.strategies,i.warn&&(ne.value=String(i.warn))):(J.value=!0,Z.value=i&&i.detail?String(i.detail):"策略列表加载失败（接口返回异常）"),V!==null&&(N.value=V,N.value.length&&!ee.value&&(ee.value=N.value[0].id,ue()))}catch(i){console.error("[research] 策略列表加载失败:",i),J.value=!0,Z.value="策略列表加载失败: "+(i&&i.message||"网络错误")}finally{_===y&&(F.value=!1)}}function ue(){const _=M.value;_&&(L.value={},_.schema.forEach(function(i){L.value[i.key]=i.default}),n.value="",re(),Me(),se())}async function Me(){if(!ee.value){X.value=[];return}try{const _=await W("/api/strategies/"+ee.value+"/profiles").then(function(i){return i.json()});X.value=_&&_.data&&_.data.profiles||[],D.value=""}catch(_){console.error("[research] 方案列表加载失败:",_),X.value=[]}}async function $(){g.value=!0;const _=(p.value||"").trim();if(!_){window._core&&window._core.showToast("请输入方案名称");return}try{const i=await W("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:L.value})}).then(function(V){return V.json()});if(i&&i.detail){window._core&&window._core.showToast(String(i.detail));return}p.value="",await Me(),window._core&&window._core.showToast("方案已保存")}catch(i){console.error("[research] 方案保存失败:",i),window._core&&window._core.showToast("方案保存失败")}}function ce(){const _=X.value.find(function(i){return i.id===D.value});_&&(Object.keys(_.params||{}).forEach(function(i){L.value[i]=_.params[i]}),window._core&&window._core.showToast("已应用方案: "+_.name))}async function Re(){if(D.value)try{await W("/api/strategies/"+ee.value+"/profiles/"+D.value,{method:"DELETE"}).then(function(_){return _.json()}),await Me(),window._core&&window._core.showToast("方案已删除")}catch(_){console.error("[research] 方案删除失败:",_)}}async function se(){try{const _=await W("/api/strategies/governance").then(function(oe){return oe.json()}),V=(_&&_.data&&_.data.strategies||{})[ee.value]||{};r.value=V.enabled!==!1,u.value=V.schedule||"20:00",R.value=V.universe==="all"?"all":"default",k.value=V.show_in_calendar!==!1,G.value=V.last_holdings||""}catch(_){console.error("[research] 纳管状态加载失败:",_)}}async function pe(){try{await W("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const _={};return _[ee.value]={enabled:r.value,schedule:u.value,universe:R.value,show_in_calendar:k.value},_}()})}).then(function(_){return _.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(_){console.error("[research] 纳管更新失败:",_)}}async function Te(){if(ee.value){le.value=!0;try{const _=await W("/api/strategies/"+ee.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:h.value||void 0})}).then(function(i){return i.json()});if(_&&_.detail){window._core&&window._core.showToast(String(_.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(_){console.error("[research] run-once 失败:",_),window._core&&window._core.showToast("持仓生成失败")}finally{le.value=!1}}}function ve(){G.value&&window.open(G.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function be(){const _=M.value;if(!_)return;const i=(p.value||"").trim()||_.name+"-副本";qe(i,Object.assign({},L.value)),window._core&&window._core.showToast("已复制为副本方案: "+i)}async function qe(_,i){try{await W("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:i})}).then(function(V){return V.json()}),await Me()}catch(V){console.error("[research] 副本保存失败:",V)}}async function re(){const _=++y;if(ee.value)try{const i=await W("/api/strategies/"+ee.value+"/runs?limit=5").then(function(V){return V.json()});if(_!==y)return;f.value=Array.isArray(i)?i:[]}catch{f.value=[]}}async function ae(){if(ee.value){s.value=!0;try{const _=await W("/api/strategies/"+ee.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:L.value,as_of:h.value||void 0})}).then(function(i){return i.json()});_&&_.status==="success"?re():alert("运行失败: "+(_.detail||JSON.stringify(_)))}catch(_){console.error("[research] 策略运行失败:",_),alert("运行失败: "+_.message)}finally{s.value=!1}}}async function fe(){if(ee.value)try{const _=Object.keys(L.value).map(function(V){return encodeURIComponent(V)+"="+encodeURIComponent(L.value[V])}).join("&"),i=await W("/api/strategies/"+ee.value+"/ptrade-code?"+_).then(function(V){return V.json()});i&&i.code?n.value=i.code:alert("导出失败: "+(i.detail||JSON.stringify(i)))}catch(_){console.error("[research] PTrade 导出失败:",_),alert("导出失败: "+_.message)}}function Ne(){if(!n.value)return;const _=document.createElement("textarea");_.value=n.value,document.body.appendChild(_),_.select();try{document.execCommand("copy")}catch{}document.body.removeChild(_)}b(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(_){_==="research/research-overview"&&(ie(),E(),ge(),ta()),(_==="research/market-review"||_==="shortterm/market-review")&&!T.value&&E(),_==="research/quant-research"&&ie(),_==="research/backtest-history"&&De()},{immediate:!0});const ze=a("mom20"),Be=a(!1),xt=a(!1),Tt=a(null),kt=a(null),ke=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],we=a('{"top_n":[10,20,30]}'),Le=a(null),Pe=a(""),Je=a(!1),Qe=a(null);async function $e(){if(!ee.value){ElementPlus.ElMessage.warning("请先选择策略");return}let _;try{_=JSON.parse(we.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!_||Object.keys(_).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Je.value=!0,Le.value=null,Pe.value="";try{const i=await fetch("/api/strategies/"+ee.value+"/sweep",{method:"POST",headers:Y(),body:JSON.stringify({param_grid:_})}).then(function(V){return V.json()});i&&Array.isArray(i.results)?(Le.value=i.results,Pe.value="完成 "+i.count+" 组"+(i.data_degraded?" (数据不可达, 结果降级)":""),Qe.value=i.param_stability||null):Pe.value=i&&i.detail||"扫描失败"}catch(i){console.error("[sweep]",i),Pe.value="扫描失败: "+i.message}finally{Je.value=!1}}async function St(){const _=++y;Be.value=!0;try{const i=await W("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:ze.value,params:L.value||{}})}).then(function(oe){return oe.json()}),V=i&&i.report?i.report.n1||{}:{};Tt.value=V}catch(i){console.error("[research] 因子IC分析失败:",i),alert("因子 IC 分析失败: "+i.message)}finally{_===y&&(Be.value=!1)}}async function ht(){const _=++y;xt.value=!0;try{const i=await W("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:ze.value,params:L.value||{}})}).then(function(V){return V.json()});i&&i.layers?kt.value=i:alert("分层回测: "+(i.message||"无数据"))}catch(i){console.error("[research] 分层回测失败:",i),alert("分层回测失败: "+i.message)}finally{_===y&&(xt.value=!1)}}const vt=a(null),Dt=a(!1);async function ea(){const _=++y;Dt.value=!0,vt.value=null;try{const i=await W("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:ze.value,params:L.value||{}})}).then(function(V){return V.json()});i&&i.detail?vt.value=i.detail:alert("因子详情: "+(i.message||"无数据"))}catch(i){console.error("[research] 因子详情失败:",i),alert("因子详情失败: "+i.message)}finally{_===y&&(Dt.value=!1)}}const z=a([]),te=a(null),xe=a(null),Ae=a(null),Ve=a(""),yt=a(!1),Ye=a(!1),Ke=a(""),dt=a(""),st=a("");function Y(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ge(){const _=++y;try{const i=await fetch("/api/strategies/variants",{headers:Y()}).then(function(V){return V.json()});if(_!==y)return;z.value=i&&i.data&&i.data.variants||[]}catch(i){console.error("[i3a] 加载 variants 失败:",i)}}async function Xe(){if(!ee.value){Ke.value="请先在量化研究选择母本策略";return}Ye.value=!0,Ke.value="";try{const _=await fetch("/api/strategies/"+ee.value+"/clone",{method:"POST",headers:Y(),body:JSON.stringify({name:(p.value||"").trim()||void 0,params:Object.assign({},L.value)})}).then(function(V){return V.json()});if(_&&_.detail){Ke.value=String(_.detail);return}const i=_&&_.data;i&&i.sid&&(te.value=i.sid,Ke.value="已复制为新策略: "+i.name,await ge(),await tt(i.sid))}catch(_){console.error("[i3a] 复制失败:",_),Ke.value="复制失败: "+_.message}finally{Ye.value=!1}}async function mt(_){te.value=_,Ke.value="",Ve.value="",await tt(_)}async function tt(_){try{const i=await fetch("/api/strategies/"+_+"/selection-spec",{headers:Y()}).then(function(V){return V.json()});i&&i.data&&i.data.spec&&(xe.value=Object.assign({},i.data.spec),Ae.value=i.data.fields,dt.value=(i.data.spec.industry_scope||[]).join(","),st.value=(i.data.spec.market_cap_range||[]).join(","))}catch(i){console.error("[i3a] 加载 spec 失败:",i)}}async function It(){if(A.value=!0,!(!te.value||!xe.value))try{xe.value.industry_scope=dt.value?dt.value.split(/[,，]/).map(function(i){return i.trim()}).filter(Boolean):[],xe.value.market_cap_range=st.value?st.value.split(/[,，]/).map(Number).filter(function(i){return!isNaN(i)}):[];const _=await fetch("/api/strategies/"+te.value+"/selection-spec",{method:"PUT",headers:Y(),body:JSON.stringify({spec:xe.value})}).then(function(i){return i.json()});_&&_.data&&_.data.spec&&(xe.value=_.data.spec,Ke.value="SelectionSpec 已保存")}catch(_){console.error("[i3a] 保存 spec 失败:",_),Ke.value="保存失败"}}async function We(){if(!te.value){Ke.value="请先选择/创建微调策略";return}Ye.value=!0,Ke.value="";try{const _=await fetch("/api/strategies/"+te.value+"/run-once",{method:"POST",headers:Y(),body:"{}"}).then(function(i){return i.json()});Ke.value=_&&_.detail?String(_.detail):"持仓已生成: "+(_&&_.data&&_.data.symbols||0)+" 只"}catch(_){console.error("[i3a] run-once 失败:",_),Ke.value="生成持仓失败"}finally{Ye.value=!1}}async function Ct(){if(!te.value){Ke.value="请先选择/创建微调策略";return}xe.value||await tt(te.value),yt.value=!0,Ke.value="";try{const _=await fetch("/api/strategies/"+te.value+"/ai-trade-code",{method:"POST",headers:Y(),body:JSON.stringify({spec:xe.value})}).then(function(i){return i.json()});if(_&&_.detail){Ke.value=String(_.detail);return}_&&_.data&&(Ve.value=_.data.code||"",_.data.api_errors&&_.data.api_errors.length?Ke.value="生成成功(含 API 校验告警 "+_.data.api_errors.length+" 条)":Ke.value="AI 交易码已生成, 已通过矩阵内校验")}catch(_){console.error("[i3a] AI 交易码失败:",_),Ke.value="AI 生成失败: "+_.message}finally{yt.value=!1}}function Ft(){if(Ve.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ve.value).then(function(){Ke.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Ve.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),Ke.value="代码已复制"}}const zt=a(""),lt=a(""),qt=a([]),Ht=a(""),Gt=a(""),ft=a(""),rt=a(null),Kt=a(!1),Et=a(!1),$t=a(!1);function Yt(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ta(){const _=++y;try{const i=await fetch("/api/strategies/custom",{headers:Yt()}).then(function(V){return V.json()});if(_!==y)return;qt.value=i&&i.data&&i.data.customs||[]}catch(i){console.error("[i3b] 加载自定义策略失败:",i)}}async function pt(){if(!lt.value.trim()){ft.value="请描述策略思路";return}Kt.value=!0,ft.value="";try{const _=await fetch("/api/strategies/custom",{method:"POST",headers:Yt(),body:JSON.stringify({name:zt.value.trim()||"自定义策略",prompt:lt.value})}).then(function(i){return i.json()});if(_&&_.detail){ft.value=String(_.detail);return}_&&_.data&&(Gt.value=_.data.code||"",ft.value="AI 代写成功: "+_.data.sid+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"),await ta())}catch(_){console.error("[i3b] AI 代写失败:",_),ft.value="AI 代写失败: "+_.message}finally{Kt.value=!1}}async function aa(){if(Ht.value)try{const _=await fetch("/api/strategies/custom/"+Ht.value+"/code",{headers:Yt()}).then(function(i){return i.json()});_&&_.data&&(Gt.value=_.data.code||"",ft.value="")}catch(_){console.error("[i3b] 读取代码失败:",_)}}async function sa(){if(!Ht.value){ft.value="请先选择自定义策略";return}Et.value=!0,ft.value="";try{const _=await fetch("/api/strategies/custom/"+Ht.value+"/backtest",{method:"POST",headers:Yt(),body:"{}"}).then(function(i){return i.json()});if(_&&_.detail){ft.value=String(_.detail);return}_&&_.data&&(rt.value=_.data,ft.value="回测完成")}catch(_){console.error("[i3b] 回测失败:",_),ft.value="回测失败: "+_.message}finally{Et.value=!1}}async function ma(){if(!Ht.value){ft.value="请先选择自定义策略";return}$t.value=!0,ft.value="";try{const _=await fetch("/api/strategies/custom/"+Ht.value+"/ai-optimize",{method:"POST",headers:Yt(),body:JSON.stringify({backtest:rt.value})}).then(function(i){return i.json()});if(_&&_.detail){ft.value=String(_.detail);return}_&&_.data&&(Gt.value=_.data.code||"",ft.value="AI 优化完成"+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"))}catch(_){console.error("[i3b] AI 优化失败:",_),ft.value="AI 优化失败: "+_.message}finally{$t.value=!1}}function ha(){if(Gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Gt.value).then(function(){ft.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Gt.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),ft.value="代码已复制"}}const la=Vue.ref([]),H=Vue.ref(!1),_e=Vue.ref(!1),Oe=Vue.ref(30);async function De(){const _=++y;H.value=!0,_e.value=!1;try{const i=window.__quantModules&&window.__quantModules.core||{},V=typeof i.authHeaders=="function"?i.authHeaders():{},oe=await fetch("/api/backtest/history?days="+Oe.value,{headers:V}).then(function(Se){return Se.json()});if(_!==y)return;la.value=oe&&oe.data||[]}catch(i){console.error("[backtest] 回测历史加载失败:",i),_e.value=!0}finally{_===y&&(H.value=!1)}}const nt=Vue.ref([]),Ze=Vue.ref(!1),Pt=Vue.ref(!1),Nt=Vue.ref(""),Bt=Vue.ref([]),pa=Vue.ref(""),ya=Vue.ref([]),ba=Vue.ref(!1),na=Vue.ref(!1),Pa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function oa(_){return Pa[_]||_||"—"}function Ra(_){d&&d.navigateTo&&d.navigateTo("shortterm",_)}function ra(){d.currentSubPage.value="research-history",qa()}async function qa(){const _=++y;Ze.value=!0,Pt.value=!1;try{const i=window.__quantModules&&window.__quantModules.core||{},V=typeof i.authHeaders=="function"?i.authHeaders():{},oe=Nt.value?"?type="+encodeURIComponent(Nt.value):"",Se=await fetch("/api/strategies/research-history"+oe,{headers:V}).then(function(Ee){return Ee.json()});if(_!==y)return;nt.value=Se&&Se.items||[]}catch(i){console.error("[research-history] 加载失败:",i),Pt.value=!0}finally{_===y&&(Ze.value=!1)}}async function Ot(){const _=++y;na.value=!0;try{const i=window.__quantModules&&window.__quantModules.core||{},V=typeof i.authHeaders=="function"?i.authHeaders():{},oe=Nt.value?"?type="+encodeURIComponent(Nt.value):"",Se=await fetch("/api/strategies/research-history/export"+oe,{headers:V});if(!Se.ok)throw new Error("HTTP "+Se.status);const Ee=await Se.blob(),ut=URL.createObjectURL(Ee),Ue=document.createElement("a");Ue.href=ut,Ue.download="research_history.csv",document.body.appendChild(Ue),Ue.click(),document.body.removeChild(Ue),URL.revokeObjectURL(ut)}catch(i){console.error("[research-history] 导出失败:",i)}finally{_===y&&(na.value=!1)}}function wa(_){const i=Bt.value.indexOf(_);i>=0?Bt.value.splice(i,1):Bt.value.length<10&&Bt.value.push(_)}function Ea(_){pa.value=pa.value===_?"":_}async function za(){const _=++y,i=Bt.value;if(!(i.length<2)){ba.value=!0;try{const V=window.__quantModules&&window.__quantModules.core||{},oe=typeof V.authHeaders=="function"?V.authHeaders():{},Se=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},oe),body:JSON.stringify({ids:i})}).then(function(Ee){return Ee.json()});ya.value=Se&&Se.items||[]}catch(V){console.error("[research-history] 对比失败:",V)}finally{_===y&&(ba.value=!1)}}}async function ka(_){try{const i=window.__quantModules&&window.__quantModules.core||{},V=typeof i.authHeaders=="function"?i.authHeaders():{},oe=await fetch("/api/strategies/research-history/"+_,{method:"DELETE",headers:V}).then(function(Se){return Se.json()});if(oe&&oe.deleted){nt.value=nt.value.filter(function(Ee){return Ee.id!==_});const Se=Bt.value.indexOf(_);Se>=0&&Bt.value.splice(Se,1)}}catch(i){console.error("[research-history] 删除失败:",i)}}return{...d,strategyManageMode:c,openStrategyManage:w,btHistory:la,btHistoryLoading:H,btHistoryError:_e,btHistoryDays:Oe,loadBtHistory:De,researchHistory:nt,researchHistoryLoading:Ze,researchHistoryError:Pt,researchHistoryType:Nt,researchHistorySelected:Bt,researchDetailId:pa,researchCompareRows:ya,researchCompareLoading:ba,researchTypeLabel:oa,goShortterm:Ra,openResearchHistory:ra,loadResearchHistory:qa,researchExportLoading:na,exportResearchHistory:Ot,toggleResearchSelect:wa,toggleResearchDetail:Ea,runResearchCompare:za,deleteResearchHistory:ka,marketReviews:o,marketReviewLoading:C,marketReviewError:x,selectedReviewDate:T,marketReviewDetail:S,marketReviewDetailLoading:q,marketReviewDetailError:P,loadMarketReviews:E,openMarketReview:v,toggleMarketReviewDate:l,backToMarketReviewList:K,loadMarketReviewDetail:B,marketReviewChgClass:U,marketReviewChgText:Q,marketReviewSrcEntries:I,fmtPct:m,fmtEmotion:O,strategies:N,strategiesLoading:F,strategiesError:J,strategiesErrorText:Z,strategiesWarn:ne,activeStrategyId:ee,activeStrategy:M,paramValues:L,strategyRunning:s,ptradeCode:n,strategyRuns:f,savingProfile:g,variantSaving:A,loadStrategies:ie,onStrategyChange:ue,runActiveStrategy:ae,exportActivePtradeCode:fe,copyPtradeCode:Ne,profiles:X,profileSelect:D,profileName:p,loadProfiles:Me,saveProfile:$,applyProfile:ce,deleteProfile:Re,govEnabled:r,govSchedule:u,govUniverse:R,govRunning:le,lastHoldings:G,loadGov:se,updateGov:pe,runOnceActive:Te,openLastHoldings:ve,cloneStrategy:be,govShowCalendar:k,factorKey:ze,factorIcLoading:Be,factorLayerLoading:xt,factorIcReport:Tt,factorLayerResult:kt,factorOptions:ke,runFactorIc:St,runFactorLayer:ht,factorDetail:vt,factorDetailLoading:Dt,runFactorDetail:ea,variants:z,variantSelected:te,variantSpec:xe,specFields:Ae,aiCode:Ve,aiCodeLoading:yt,variantBusy:Ye,variantMsg:Ke,loadVariants:ge,cloneNewStrategy:Xe,selectVariant:mt,loadVariantSpec:tt,saveVariantSpec:It,runVariantOnce:We,genVariantAiCode:Ct,copyVariantCode:Ft,customName:zt,customPrompt:lt,customs:qt,customSelected:Ht,customCode:Gt,customMsg:ft,customBtResult:rt,customGenLoading:Kt,customBtLoading:Et,customOptLoading:$t,loadCustoms:ta,genCustomCode:pt,loadCustomCode:aa,runCustomBacktest:sa,runCustomOptimize:ma,copyCustomCode:ha,sweepGrid:we,sweepResult:Le,sweepMessage:Pe,sweepLoading:Je,sweepStability:Qe,runSweep:$e}}}})();(function(){const{inject:a,ref:t,onMounted:b,computed:e,nextTick:d}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const g=a("qcState");if(!g)return{};const A=g.currentPage,y=g.currentSubPage,c=t(""),w=t(null),o=t(!1),C=t(!1),x=t("数据加载失败"),T=t("请检查服务后重试"),S=t(null),q=t(null),P=t(!1),E=t(!1),v=t("数据加载失败"),l=t("请检查服务后重试"),m=t(null),O=t(1),K=50,B=e(function(){const H=q.value||[];if(H.length<=200)return H;const _e=(O.value-1)*K;return H.slice(_e,_e+K)}),U=t(null),Q=t(!1),I=t(!1),N=t("数据加载失败"),F=t("请检查服务后重试"),J=t([]),Z=t(!1);async function ne(){Z.value=!0;try{const H=await be("/api/shortterm/dates/summary",!1);H&&H.success&&(J.value=H.dates||[])}catch{J.value=[]}finally{Z.value=!1}}function ee(H){H!==c.value&&(c.value=H,tt(!0))}const L=t("行业资金流"),s=t("今日"),h=t(""),n=t(null),f=t(1),X=t(!1),D=t(!1),p=t("数据加载失败"),r=t("请检查服务后重试"),k=t(""),u=t(null),R=t(!1),le=t(null),G=t(!1),M=t(!1),W=t(""),ie=t(""),ue=t(!1);function Me(){const H=localStorage.getItem("quant_token")||"";return H?{Authorization:"Bearer "+H,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},ce=[],Re=50,se=60*1e3;let pe=0,Te=0,ve=0;function be(H,_e){const Oe=Date.now(),De=$[H];return!_e&&De&&Oe-De.ts<se?Promise.resolve(De.data):fetch(H,{headers:Me()}).then(function(nt){return nt.json()}).then(function(nt){if($[H]||ce.push(H),$[H]={ts:Date.now(),data:nt},ce.length>Re){const Ze=ce.shift();delete $[Ze]}return nt})}async function qe(H){const _e=++pe;o.value=!0,C.value=!1;try{const Oe="/api/shortterm/pools"+(c.value?"?date="+c.value:""),De=await be(Oe,H);if(_e!==pe)return;De&&De.success?(w.value=De,d(ge)):De&&De.detail?(C.value=!0,x.value=String(De.detail),T.value="请先登录后再查看"):(C.value=!0,x.value="数据加载失败",T.value="请检查服务后重试")}catch{if(_e!==pe)return;C.value=!0,x.value="数据加载失败",T.value="请检查服务后重试"}finally{_e===pe&&(o.value=!1)}}async function re(H){const _e=++pe;P.value=!0,E.value=!1;try{const Oe="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),De=await be(Oe,H);if(_e!==pe)return;De&&De.success?(q.value=Array.isArray(De.rows)?De.rows:null,m.value=De.available===!1&&De.reason||null,O.value=1):De&&De.detail?(E.value=!0,v.value=String(De.detail),l.value="请先登录后再查看"):(E.value=!0,v.value="数据加载失败",l.value="请检查服务后重试")}catch{if(_e!==pe)return;E.value=!0,v.value="数据加载失败",l.value="请检查服务后重试"}finally{_e===pe&&(P.value=!1)}}const ae=e(function(){const H=w.value&&w.value.ladder&&w.value.ladder.tiers;return!H||!Object.keys(H).length?"—":Object.keys(H).sort(function(_e,Oe){return _e-Oe}).map(function(_e){return _e+"板:"+H[_e]}).join(" ")}),fe=e(function(){const H=w.value&&w.value.zt||[];return S.value?H.filter(function(_e){return _e.boards===S.value}):H});function Ne(){S.value=null}const ze=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.money_effect;return!H||!H.available?"—":H.source==="settled"?"定稿记录":H.source==="realtime"?H.partial?"实时(样本不全)":"实时":"—"}),Be=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.promotion&&U.value.emotion.promotion.tiers&&U.value.emotion.promotion.tiers["1进2"];return H?H.rate:null}),xt=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.sentiment_cycle;return H&&H.available&&H.current_score!=null?H.current_score.toFixed(2):"—"}),Tt=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.sentiment_cycle;return!H||!H.available?"—":(H.trend||"—")+(H.day_n!=null?" · 距低谷"+H.day_n+"天":"")});e(function(){const H=U.value&&U.value.emotion;if(!H)return"";const _e=[];for(const Oe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const De=H[Oe];De&&De.available===!1&&De.reason&&_e.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")}),e(function(){const H=U.value&&U.value.facts;if(!H)return"";const _e=[];for(const Oe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const De=H[Oe];De&&De.available===!1&&De.reason&&_e.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")});function kt(H){return H==null||isNaN(H)?"—":(H*100).toFixed(0)+"%"}function ke(H,_e){return H==null?"—":(typeof H=="number"?Math.round(H*100)/100:H)+(_e||"")}function we(H){return"tag-chip mr-4"}function Le(H){return H==null?"":H>0?"is-rise":H<0?"is-fall":""}function Pe(H){return H==="机构"?"is-institution":H==="游资"?"is-hotmoney":H==="主力"?"is-main":""}const Je=e(function(){const H=U.value&&U.value.session_status;if(!H)return"—";const _e=U.value.date;return _e===H.latest_session&&H.settled?"已收盘":_e===H.today&&H.is_trade_day&&!H.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Qe=e(function(){const H=U.value&&U.value.session_status;if(!H)return"";const _e=U.value.date;return _e===H.latest_session&&H.settled?"is-institution":_e===H.today&&H.is_trade_day&&!H.settled?"is-main":""});function $e(H){H&&H.ts_code&&g&&g.showStockDetail&&g.showStockDetail(H.ts_code)}const St=e(function(){return(q.value||[]).filter(function(H){return(H.tags||[]).indexOf("机构")>=0}).reduce(function(H,_e){return H+(_e.net_buy||0)},0)}),ht=e(function(){return(q.value||[]).filter(function(H){return(H.tags||[]).indexOf("游资")>=0}).length}),vt=e(function(){const H=(n.value||[]).filter(function(_e){return _e.main_net_inflow!=null});return H.length?H.reduce(function(_e,Oe){return _e.main_net_inflow>=Oe.main_net_inflow?_e:Oe}):null}),Dt=e(function(){const H=vt.value;return H?H.name:"—"}),ea=e(function(){const H=vt.value;return H?H.main_net_inflow:null}),z=e(function(){return k.value||"东财"}),te=e(function(){const H=(h.value||"").trim(),_e=n.value||[];return H?_e.filter(function(Oe){return Oe.name&&String(Oe.name).indexOf(H)>=0}):_e});function xe(H){h.value=H||"",g&&g.currentSubPage&&(g.currentSubPage.value="sector")}const Ae=e(function(){const H=te.value;if(H.length<=200)return H;const _e=(f.value-1)*K;return H.slice(_e,_e+K)}),Ve=["09:25","09:35","10:00","11:30","14:00","15:00"],yt=e(function(){const H={};return(le.value||[]).forEach(function(_e){H[_e.slot]=!0}),H});function Ye(H){return yt.value[H]?"is-done":H===Ke.value?"is-current":"is-empty"}const Ke=e(function(){const H=new Date,_e=(H.getHours()<10?"0":"")+H.getHours(),Oe=(H.getMinutes()<10?"0":"")+H.getMinutes(),De=_e+":"+Oe;for(var nt=0;nt<Ve.length;nt++)if(De===Ve[nt])return Ve[nt];for(var Ze=0;Ze<Ve.length-1;Ze++){var Pt=Ve[Ze],Nt=new Date;Nt.setHours(Number(Pt.split(":")[0]),Number(Pt.split(":")[1]),0,0);var Bt=new Date(Nt.getTime()+8*6e4);if(H>=Nt&&H<=Bt)return Pt}return""}),dt=e(function(){const H=new Date,_e=Ke.value;if(_e)return"当前处于快照窗口 "+_e+" (前后 8 分钟) — 可采集";const Oe=H.getHours(),De=H.getMinutes();let nt="";for(let Ze=0;Ze<Ve.length;Ze++){const Pt=Ve[Ze].split(":");if(Number(Pt[0])>Oe||Number(Pt[0])===Oe&&Number(Pt[1])>De){nt=Ve[Ze];break}}return nt?"下一快照时点 "+nt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),st=t(""),Y=t("info");function ge(){const H=w.value&&w.value.ladder&&w.value.ladder.tiers;if(!H||!Object.keys(H).length)return;const _e=window.__quantModules&&window.__quantModules.charts;if(!_e||!_e.renderSimpleChartTo)return;const Oe=S.value,De=_e.renderSimpleChartTo("shorttermLadderChart",function(){const nt=Object.keys(H).sort(function(Ze,Pt){return Number(Ze)-Number(Pt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:nt.map(function(Ze){return Ze+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Ze){return Oe&&Number(nt[Ze.dataIndex])===Oe?"var(--color-accent)":"var(--chart-split)"}},data:nt.map(function(Ze){return H[Ze]})}]}},{key:"shortterm-ladder"});De&&De.off&&(De.off("click"),De.on("click",function(nt){if(!nt||!nt.name)return;const Ze=parseInt(nt.name,10);isNaN(Ze)||(S.value=S.value===Ze?null:Ze)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ge);function Xe(H){if(H==null)return"—";const _e=Math.abs(H);return _e>=1e8?(H/1e8).toFixed(2)+"亿":_e>=1e4?(H/1e4).toFixed(0)+"万":H.toFixed(0)}function mt(H){return H==null?"—":(H>=0?"+":"")+H.toFixed(2)+"%"}async function tt(H){const _e=++Te;Q.value=!0,I.value=!1;try{const Oe="/api/shortterm/overview"+(c.value?"?date="+c.value:""),De=await be(Oe,H);if(_e!==Te)return;De&&De.success?U.value=De:De&&De.detail?(I.value=!0,N.value=String(De.detail),F.value="请先登录后再查看"):(I.value=!0,N.value="数据加载失败",F.value="请检查服务后重试")}catch{if(_e!==Te)return;I.value=!0,N.value="数据加载失败",F.value="请检查服务后重试"}finally{_e===Te&&(Q.value=!1)}}async function It(H){const _e=++pe;X.value=!0,D.value=!1;try{const Oe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(L.value),De=await be(Oe,H);if(_e!==pe)return;De&&De.success&&De.available?(n.value=De.rows||[],k.value=De.source||(De.note?"同花顺":"东财"),f.value=1):De&&De.reason?(D.value=!0,p.value="数据加载失败",r.value=String(De.reason).replace(/^\[[^\]]*\]\s*/,"")):De&&De.detail?(D.value=!0,p.value=String(De.detail),r.value="请先登录后再查看"):(D.value=!0,p.value="数据加载失败",r.value="请检查服务后重试")}catch{if(_e!==pe)return;D.value=!0,p.value="数据加载失败",r.value="请检查服务后重试"}finally{_e===pe&&(X.value=!1)}}async function We(H){const _e=++ve;try{const Oe="/api/shortterm/review"+(c.value?"?date="+c.value:""),De=await be(Oe,H);if(_e!==ve)return;De&&De.success&&(u.value=De.review||null)}catch{}}async function Ct(){R.value=!0;try{const H="/api/shortterm/review"+(c.value?"?date="+c.value:""),_e=await fetch(H,{method:"POST",headers:Me()}).then(function(Oe){return Oe.json()});_e&&_e.success&&(u.value=_e,$[H]={ts:Date.now(),data:_e})}catch{}finally{R.value=!1}}async function Ft(){const H=W.value.trim();if(H){ue.value=!0,ie.value="";try{const Oe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Me(),body:JSON.stringify({date:overviewDate.value,question:H})}).then(function(De){return De.json()});ie.value=Oe.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{ue.value=!1}}}async function zt(H){const _e=++pe;G.value=!0;try{const Oe="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),De=await be(Oe,H);if(_e!==pe)return;De&&De.success&&(le.value=De.snapshots||[])}catch{}finally{_e===pe&&(G.value=!1)}}async function lt(){M.value=!0;try{const H="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),_e=await fetch(H,{method:"POST",headers:Me()}).then(function(Oe){return Oe.json()});_e&&_e.success?(_e.accepted?(st.value="已采集 "+_e.slot+" 快照"+(_e.pools_available&&!_e.pools_available.zt?" (池源部分不可用)":""),Y.value="ok"):(st.value="⏱ "+(_e.reason||"非快照时点"),Y.value="warn"),zt()):st.value="采集失败, 请稍后重试"}catch{st.value="采集失败, 请稍后重试"}finally{M.value=!1}}function qt(){return be("/api/shortterm/latest-session",!1).then(function(H){H&&H.date&&(c.value||(c.value=H.date))}).catch(function(){})}function Ht(){const H=y.value;H==="ztpool"?qe():H==="lhb"?re():H==="overview"?(tt(),We()):H==="sector"?It():H==="intraday"&&zt()}function Gt(){const H=c.value?"?date="+c.value:"";["/api/shortterm/overview"+H,"/api/shortterm/pools"+H,"/api/shortterm/lhb"+H].forEach(function(Oe){be(Oe,!1).catch(function(){})})}function ft(){const H=y.value;H==="ztpool"?qe(!0):H==="lhb"?re(!0):H==="overview"?(tt(!0),We(!0)):H==="sector"?It(!0):H==="intraday"&&zt(!0)}b(function(){qt(),Ht(),Gt(),sa(),ne()}),Vue.watch(function(){return y.value},function(H){Ht(),H==="overview"&&sa()});const rt=window.QuantOnboarding,Kt=t(!1),Et=t(rt?rt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),$t=e(function(){return rt&&rt.shorttermTourSteps()[Et.value.stepIndex]||{key:"",title:"",desc:""}}),Yt=e(function(){return rt?rt.shorttermTourProgress(Et.value):{done:0,total:3,pct:0}}),ta=e(function(){return Et.value.stepIndex>=2});function pt(){if(rt){var H=null;try{H=localStorage.getItem("qc_shortterm_tour")}catch{}if(H){var _e=rt.parseState(H);_e&&(Et.value=_e)}}}function aa(){if(rt){var H=JSON.stringify(Et.value);try{localStorage.setItem("qc_shortterm_tour",H)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:H}})}).catch(function(){})}catch{}}}function sa(){window.__quantGuideModalsEnabled===!0&&rt&&y.value==="overview"&&(pt(),rt.shorttermTourShouldShow(Et.value)&&(Kt.value=!0))}function ma(){Et.value=rt.shorttermTourNext(Et.value),aa()}function ha(){Et.value=rt.shorttermTourComplete(Et.value),aa(),Kt.value=!1}function la(){Et.value=rt.shorttermTourDismiss(Et.value),aa(),Kt.value=!1}return{currentPage:A,currentSubPage:y,shortDate:c,pools:w,poolLoading:o,poolError:C,ztBoardFilter:S,filteredZt:fe,clearBoardFilter:Ne,lhbRows:q,lhbLoading:P,lhbError:E,lhbReason:m,lhbPageRows:B,lhbPage:O,overview:U,overviewLoading:Q,overviewError:I,dateList:J,dateListLoading:Z,loadDateList:ne,pickDate:ee,sectorType:L,sectorIndicator:s,sectorKeyword:h,sectorRows:n,filteredSectorRows:te,sectorPageRows:Ae,sectorPage:f,sectorLoading:X,sectorError:D,sectorFlowSource:k,PAGE_SIZE:K,gotoSector:xe,review:u,reviewRunning:R,intradaySnapshots:le,intradayLoading:G,intradayCollecting:M,intradaySlots:Ve,intradayMsg:st,slotClass:Ye,intradayStatus:dt,chatQuestion:W,chatAnswer:ie,chatLoading:ue,loadPools:qe,loadLhb:re,loadOverview:tt,loadSectorFlow:It,loadReview:We,runReview:Ct,sendChat:Ft,loadIntraday:zt,collectSnapshot:lt,refreshCurrent:ft,ladderText:ae,fmtAmount:Xe,fmtPct:mt,riseFall:Le,tagClass:Pe,openStock:$e,lhbInstitutionNetBuy:St,lhbHotMoneyCount:ht,sectorTopName:Dt,sectorTopInflow:ea,sectorSource:z,moneySource:ze,promotion1to2:Be,cycleScore:xt,cycleTrend:Tt,pct:kt,fmtCond:ke,verdictClass:we,sessionStatusText:Je,sessionStatusClass:Qe,shorttermTourVisible:Kt,shorttermTourState:Et,shorttermTourStep:$t,shorttermTourProg:Yt,shorttermTourIsLast:ta,shorttermTourNext:ma,shorttermTourFinish:ha,shorttermTourSkip:la}}}})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(y,c,w,o,C){var x=w>0?w:1,T=typeof C=="number"&&C>=0?C:a,S=Math.max(0,o),q=Math.max(0,y),P=Math.max(0,c),E=Math.max(0,Math.floor(q/x)-T),v=Math.min(S,Math.ceil((q+P)/x)+T);return{startIndex:E,endIndex:v}}function b(y,c){return Math.max(0,y||0)*(c>0?c:0)}function e(y,c,w,o,C){var x=y||[],T=t(c,w,o,x.length,C),S=x.slice(T.startIndex,T.endIndex);return{visible:S,startIndex:T.startIndex,endIndex:T.endIndex,offsetY:T.startIndex*(o>0?o:1),totalHeight:b(x.length,o)}}function d(y,c){if(y){if(y.code!=null)return y.code;if(y.id!=null)return y.id;if(y.ts_code!=null)return y.ts_code}return c}function g(y,c,w){var o=y||[];if(!o.length)return c>0?c:1;for(var C=Math.min(w||50,o.length),x=0,T=0,S=0;S<C;S++){var q=o[S]&&o[S].rowHeight;typeof q=="number"&&q>0&&(x+=q,T++)}return T?x/T:c>0?c:1}function A(y,c,w,o,C){var x=t(y,c,w,o,C),T=Math.max(0,o);return T?(x.endIndex-x.startIndex)/T:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:b,sliceVisible:e,getRowKey:d,estimateDynamicRowHeight:g,renderedRatio:A}});(function(){const{ref:a,computed:t,onMounted:b,onBeforeUnmount:e}=Vue,d=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:d.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(g){const A=a(null),y=a(0),c=a(400),w=t(()=>(d.computeVisibleRange||function(l,m,O,K,B){const U=O>0?O:1,Q=B>=0?B:8,I=Math.max(0,K);return{startIndex:Math.max(0,Math.floor(l/U)-Q),endIndex:Math.min(I,Math.ceil((l+m)/U)+Q)}})(y.value,c.value,g.rowHeight,g.items.length,g.buffer)),o=t(()=>g.items.length*g.rowHeight),C=t(()=>w.value.startIndex),x=t(()=>w.value.endIndex),T=t(()=>g.items.slice(C.value,x.value));function S(){A.value&&(y.value=A.value.scrollTop)}function q(){A.value&&(c.value=A.value.clientHeight||400)}function P(v,l){return d.getRowKey?d.getRowKey(v,l):v&&v.code!=null?v.code:v&&v.id!=null?v.id:l}let E=null;return b(()=>{q(),A.value&&typeof ResizeObserver<"u"&&(E=new ResizeObserver(()=>q()),E.observe(A.value))}),e(()=>{E&&E.disconnect()}),{scrollEl:A,totalHeight:o,startIndex:C,endIndex:x,visibleItems:T,onScroll:S,keyOf:P}}}})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,b=60,e=500,d=10,g=88,A=350;function y(l,m,O,K,B){B=B||{};var U=typeof B.threshold=="number"?B.threshold:a,Q=typeof B.bias=="number"?B.bias:t,I=O-l,N=K-m;return Math.abs(I)<U||Math.abs(I)<Math.abs(N)*Q?"none":I<0?"left":"right"}function c(l,m,O){O=O||{};var K=typeof O.threshold=="number"?O.threshold:b;return m-l>=K}function w(l,m){m=m||{};var O=typeof m.threshold=="number"?m.threshold:e;return l>=O}var o=!1;function C(l,m){return l&&typeof l.closest=="function"?l.closest(m):null}function x(l){if(!l)return"";var m=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(m){var O=m.getAttribute&&m.getAttribute("data-copy-code");if(O)return O.trim();var K=(m.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(K)return K[0]}var B=l.getAttribute&&l.getAttribute("data-copy-code");return B?B.trim():""}function T(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return S(l)}):Promise.resolve(S(l))}function S(l){try{var m=document.createElement("textarea");return m.value=l,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),!0}catch{return!1}}function q(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function P(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function E(){var l=null,m=null,O=null;function K(){m&&(m.timer&&clearTimeout(m.timer),m=null)}function B(Z){O={el:Z,until:Date.now()+A}}function U(Z){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(ne){ne!==Z&&ne.classList.remove("swipe-open")}),l&&l.el!==Z&&(l=null)}function Q(Z){var ne=Z.touches&&Z.touches[0];if(ne){var ee=C(Z.target,".swipe-reveal");ee&&(l={el:ee,x:ne.clientX,y:ne.clientY,moved:!1},Z.stopPropagation());var L=C(Z.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");L&&(K(),m={el:L,x:ne.clientX,y:ne.clientY,timer:setTimeout(function(){var s=x(L);m=null,s&&(B(L),T(s).then(function(){P(),q("已复制代码 "+s)}))},e)})}}function I(Z){if(l){var ne=Z.touches&&Z.touches[0];if(ne){var ee=ne.clientX-l.x,L=ne.clientY-l.y;if(Math.abs(ee)>8&&Math.abs(ee)>Math.abs(L)*1.2){Z.cancelable&&Z.preventDefault(),l.moved=!0;var s=l.el.querySelector(".swipe-reveal-main")||l.el,h=Math.max(-g,Math.min(0,ee));s.style.transition="none",s.style.transform="translateX("+h+"px)",Z.stopPropagation()}if(m){var n=ne.clientX-m.x,f=ne.clientY-m.y;(Math.abs(n)>d||Math.abs(f)>d)&&K()}}}}function N(Z){if(K(),!!l){var ne=l.el,ee=Z.changedTouches&&Z.changedTouches[0],L=l.x,s=l.y,h="none";ee&&(h=y(L,s,ee.clientX,ee.clientY));var n=l.moved;l=null;var f=ne.querySelector(".swipe-reveal-main")||ne;f.style.transform="",f.style.transition="",h==="left"?(U(ne),ne.classList.add("swipe-open"),B(ne)):(h==="right"||n)&&ne.classList.remove("swipe-open"),Z.stopPropagation()}}function F(){K(),l=null}function J(Z){if(O&&Date.now()<O.until){var ne=O.el.contains(Z.target)||Z.target===O.el,ee=Z.target.closest&&Z.target.closest(".swipe-reveal-actions");ne&&!ee&&(Z.preventDefault(),Z.stopPropagation(),O=null)}}document.addEventListener("touchstart",Q,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",N,!0),document.addEventListener("touchcancel",F,!0),document.addEventListener("click",J,!0)}function v(){o||typeof document>"u"||(o=!0,E())}return{judgeSwipe:y,judgePullToRefresh:c,judgeLongPress:w,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:b,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:d,REVEAL_WIDTH:g,initGestures:v,_codeFromRow:x}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function b(g){return a[g]||a.empty}function e(){const g=[];for(const A of t){const y=a[A];y.title||g.push(A+".title"),A!=="loading"&&!y.icon&&g.push(A+".icon"),typeof y.retry!="boolean"&&g.push(A+".retry"),typeof y.skeleton!="boolean"&&g.push(A+".skeleton")}return{ok:g.length===0,errors:g}}const d={VARIANTS:a,KEYS:t,resolve:b,validate:e};typeof window<"u"&&(window.QuantStatePanel=d),typeof Ie<"u"&&Ie.exports&&(Ie.exports=d)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(b){const e=a(()=>typeof t.resolve=="function"?t.resolve(b.type):{}),d=a(()=>b.icon||e.value.icon||""),g=a(()=>b.title||e.value.title||""),A=a(()=>b.desc||e.value.desc||""),y=a(()=>!!e.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(d.value||"")));return{icon:d,title:g,desc:A,retryable:y,isIconName:c}}}})();(function(a,t){typeof Ie=="object"&&Ie.exports?Ie.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function t(l,m){if(!l)return!0;const O=l.split(/\s+/).filter(Boolean);if(!O.length)return!0;const K=String(m||"").toLowerCase();return O.every(function(B){return K.indexOf(B)!==-1})}function b(){return{visible:!1,query:"",activeIndex:0}}function e(l,m){return m===void 0&&(m=!l.visible),l.visible=m,m&&(l.query="",l.activeIndex=0),l.visible}function d(l,m,O){const K=a(l);if(!m||!m.length)return[];const B=[];return m.forEach(function(U){const Q=t(K,U.name)||t(K,U.key),I=(U.subPages||[]).filter(function(N){const F=O&&O[N]||N;return t(K,F)||t(K,N)});Q&&B.push({type:"menu",menuKey:U.key,subPage:U.subPages&&U.subPages[0]||"",label:U.name,subLabel:"页面",icon:U.icon||"file-text"}),I.forEach(function(N){B.push({type:"menu",menuKey:U.key,subPage:N,label:O&&O[N]||N,subLabel:U.name,icon:U.icon||"file-text"})})}),B.slice(0,8)}function g(l,m){const O=a(l);return!m||!m.length?[]:m.filter(function(K){return!!(!O||t(O,K.label)||t(O,K.key)||K.keywords&&t(O,K.keywords))}).slice(0,8)}function A(l,m){const O=a(l);return!O||!m||!m.length?[]:m.filter(function(K){return t(O,K.code)||t(O,K.name)}).slice(0,8).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}})}function y(l,m,O){const K=[],B=[];return O&&O.length&&(K.push({key:"stock",label:"股票",items:O}),B.push.apply(B,O)),l&&l.length&&(K.push({key:"menu",label:"菜单",items:l}),B.push.apply(B,l)),m&&m.length&&(K.push({key:"command",label:"指令",items:m}),B.push.apply(B,m)),{groups:K,flat:B}}function c(l,m,O){if(m<=0)return 0;const K=((l||0)+O)%m;return K<0?m-1:K}function w(l,m,O,K){const B=d(l,m,O).map(function(Q){return{type:"menu",menuKey:Q.menuKey,subPage:Q.subPage,label:Q.label,subLabel:Q.subLabel,icon:Q.icon,iconName:Q.icon,value:Q.icon+" "+Q.label+" · "+Q.subLabel}}),U=g(l,K||[]).map(function(Q){return{type:"command",key:Q.key,label:Q.label,icon:Q.icon,iconName:Q.icon,subLabel:"指令",value:Q.icon+" "+Q.label}});return B.concat(U)}function o(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const C=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var x={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function T(l){if(!l||typeof l!="string")return null;var m=l.split("+").map(function(B){return B.trim()}).filter(Boolean);if(!m.length)return null;var O=m.pop().toLowerCase();if(!O)return null;var K={ctrl:!1,alt:!1,shift:!1,meta:!1};return m.forEach(function(B){var U=B.toLowerCase();x.ctrl.indexOf(U)!==-1?K.ctrl=!0:x.alt.indexOf(U)!==-1?K.alt=!0:x.shift.indexOf(U)!==-1?K.shift=!0:x.meta.indexOf(U)!==-1&&(K.meta=!0)}),{ctrl:K.ctrl,alt:K.alt,shift:K.shift,meta:K.meta,key:O}}function S(l,m){if(!l||!m)return!1;var O=String(m.key||m.code||"").toLowerCase();return l.key!==O?!1:l.ctrl===!!m.ctrlKey&&l.alt===!!m.altKey&&l.shift===!!m.shiftKey&&l.meta===!!m.metaKey}function q(l){if(!l)return"";var m=[];return l.ctrl&&m.push("Ctrl"),l.alt&&m.push("Alt"),l.shift&&m.push("Shift"),l.meta&&m.push("Meta"),m.push(l.key.toUpperCase()),m.join("+")}function P(){var l={};return{register:function(m){if(!m||!m.key)throw new Error("命令 key 必填");if(l[m.key])throw new Error("命令重复注册: "+m.key);return l[m.key]=Object.assign({},m),m.key},list:function(){return Object.keys(l).map(function(m){return l[m]})},get:function(m){return l[m]||null},remove:function(m){delete l[m]},has:function(m){return!!l[m]},count:function(){return Object.keys(l).length}}}function E(){var l={},m={};return{register:function(O,K,B){var U=T(O);if(!U)throw new Error("无效快捷键: "+O);var Q=q(U);if(l[Q])throw new Error("快捷键冲突: "+O);if(K!=null&&m[K]!==void 0)throw new Error("动作重复绑定: "+K);return l[Q]={combo:O,action:K,description:B||"",parsed:U},m[K]=Q,Q},resolve:function(O){for(var K in l)if(S(l[K].parsed,O))return l[K].action;return null},list:function(){return Object.keys(l).map(function(O){return l[O]})},unregister:function(O){var K=q(T(O));l[K]&&(delete m[l[K].action],delete l[K])},count:function(){return Object.keys(l).length}}}function v(){var l=E();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:b,toggleVisible:e,searchMenus:d,searchCommands:g,filterStocksLocal:A,mergeResults:y,moveIndex:c,buildSearchSuggestions:w,dispatchSearchSelection:o,DEFAULT_COMMANDS:C,parseKeyCombo:T,matchShortcut:S,canonicalCombo:q,createCommandRegistry:P,createShortcutRegistry:E,createDefaultShortcuts:v}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Ie<"u"&&Ie.exports?Ie.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var b=t();typeof Ie=="object"&&Ie.exports&&(Ie.exports=b),a.QuantOnboarding=b})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],t=a.length,b=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=b.length;function d(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function g(){return b.slice()}function A(N){return N<0?0:N>=e?e-1:N}function y(N){return{stepIndex:N.stepIndex,completed:!!N.completed,dismissed:!!N.dismissed,updatedAt:N.updatedAt||0}}function c(N){return y(Object.assign({},N,{stepIndex:A((N.stepIndex||0)+1),updatedAt:Date.now()}))}function w(N){return y(Object.assign({},N,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(N){return y(Object.assign({},N,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function C(N){var F=Math.min(N&&N.stepIndex||0,e);return{done:F,total:e,pct:Math.round(F/e*100)}}function x(N){return!!(N&&!N.completed&&!N.dismissed)}function T(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function S(){return a.slice()}function q(){return t}function P(N){return N<0?0:N>=t?t-1:N}function E(N){return{stepIndex:N.stepIndex,completed:!!N.completed,dismissed:!!N.dismissed,updatedAt:N.updatedAt||0}}function v(N){return E(Object.assign({},N,{stepIndex:P((N.stepIndex||0)+1),updatedAt:Date.now()}))}function l(N){return E(Object.assign({},N,{stepIndex:P((N.stepIndex||0)-1),updatedAt:Date.now()}))}function m(N,F){return E(Object.assign({},N,{stepIndex:P(F),updatedAt:Date.now()}))}function O(N){return E(Object.assign({},N,{completed:!0,updatedAt:Date.now()}))}function K(N){return E(Object.assign({},N,{dismissed:!0,updatedAt:Date.now()}))}function B(N){return!!(N&&N.completed)}function U(N){var F=Math.min(N&&N.stepIndex||0,t);return{done:F,total:t,pct:Math.round(F/t*100)}}function Q(N){var F=N||T();return JSON.stringify({stepIndex:F.stepIndex,completed:!!F.completed,dismissed:!!F.dismissed,updatedAt:F.updatedAt||0})}function I(N){var F=T();if(!N||typeof N!="string")return F;try{var J=JSON.parse(N);if(!J||typeof J!="object")return F;var Z=parseInt(J.stepIndex,10);return isNaN(Z)?F:{stepIndex:P(Z),completed:!!J.completed,dismissed:!!J.dismissed,updatedAt:J.updatedAt||0}}catch{return F}}return{ONBOARDING_STEPS:a,steps:S,stepCount:q,createOnboardingState:T,next:v,prev:l,jumpTo:m,complete:O,dismiss:K,isComplete:B,progress:U,persistState:Q,parseState:I,SHORTTERM_TOUR_STEPS:b,shorttermTourSteps:g,createShorttermTourState:d,shorttermTourNext:c,shorttermTourComplete:w,shorttermTourDismiss:o,shorttermTourProgress:C,shorttermTourShouldShow:x}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:b}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const d=a(!1),g=a(e.createOnboardingState()),A=t(function(){return e.steps()[g.value.stepIndex]}),y=t(function(){return e.progress(g.value)}),c=t(function(){return g.value.stepIndex>=e.stepCount()-1}),w=t(function(){return"onboarding.step."+A.value.key});function o(){const P=e.persistState(g.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:P}})}).then(function(E){return E.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",P)}catch{}})}function C(){g.value=e.next(g.value)}function x(){g.value=e.prev(g.value)}function T(){g.value=e.complete(g.value),o(),d.value=!1}function S(){g.value=e.dismiss(g.value),o(),d.value=!1}function q(){fetch("/api/user_config/preferences").then(function(P){return P.json()}).then(function(P){const E=P&&P.preferences&&P.preferences.onboarding_progress;return E&&(g.value=e.parseState(E)),E}).catch(function(){return null}).then(function(P){if(!P)try{const E=localStorage.getItem("qc_onboarding_progress");E&&(g.value=e.parseState(E))}catch{}!e.isComplete(g.value)&&!g.value.dismissed&&(d.value=!0)})}return b(q),{visible:d,st:g,step:A,prog:y,isLast:c,stepKey:w,next:C,prev:x,finish:T,skip:S}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(t){try{const b=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(b)return b(t)||""}catch{}return t}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(t){try{const b=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(b)return b(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:b,nextTick:e,inject:d,onMounted:g}=Vue,A=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const y=d("qcState");if(!y)return{};const c=a(""),w=t({get:()=>y.commandPaletteVisible.value,set:L=>{y.commandPaletteVisible.value=L}}),o=a(0),C=a([]),x=a(null),T=t(()=>{const L=(A.DEFAULT_COMMANDS||[]).map(function(h){return Object.assign({},h)});return Object.keys(y.themes.value||{}).forEach(function(h){const n=y.themes.value[h];L.push({key:"theme:"+h,label:"切换主题 · "+(n.name||h),icon:"palette",keywords:"theme 主题"})}),L});function S(L){return typeof L=="string"&&/^[a-z][a-z0-9-]*$/.test(L)}const q=t(()=>y.menus.value||[]);function P(){const L=window.__quantModules&&window.__quantModules.pinyin;if(!L)return[];const s=[];return(y.watchlist&&y.watchlist.value||[]).forEach(function(h){s.push({code:h.code,name:h.name})}),(y.aiHistory&&y.aiHistory.value||[]).forEach(function(h){h&&h.stock_code&&s.push({code:h.stock_code,name:h.stock_name||h.stock_code})}),s.push.apply(s,L.getExtraStocks()),L.buildStockIndex(s)}function E(L){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(L,P()).map(function(h){return{type:"stock",code:h.code,name:h.name,label:h.name,subLabel:h.code,icon:"trending-up"}}):[]}function v(){const L=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(n){L.push({type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"最近查看 · "+n.code,icon:"trending-up"})});const h=(y.watchlist&&y.watchlist.value||[]).slice(0,8).map(function(n){return{type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"我的自选 · "+n.code,icon:"trending-up"}});return L.concat(h)}const l=t(()=>{const L=c.value;if(!L)return A.mergeResults([],[],v());const s=A.searchMenus(L,q.value,y.subPageNames),h=A.searchCommands(L,T.value),n=C.value;return A.mergeResults(s,h,n)}),m=t(()=>l.value);function O(L){return m.value.flat[o.value]===L}function K(L){o.value=m.value.flat.indexOf(L)}function B(L){return(L.type||"")+":"+(L.code||L.menuKey||L.key||L.label)}let U=null;function Q(){const L=c.value.trim();if(L.length<1){C.value=[];return}U&&clearTimeout(U),U=setTimeout(function(){const s=E(L);C.value=s,o.value=0,y.searchStocks(L,function(h){if(c.value.trim()!==L)return;const n=(h||[]).filter(function(D){return D&&D.code&&D.name}).map(function(D){return{type:"stock",code:D.code,name:D.name,label:D.name,subLabel:D.code,icon:"trending-up"}}),f={},X=[];s.forEach(function(D){f[D.code]||(f[D.code]=!0,X.push(D))}),n.forEach(function(D){f[D.code]||(f[D.code]=!0,X.push(D))}),C.value=X,o.value=0})},200)}function I(){o.value=A.moveIndex(o.value,m.value.flat.length,1)}function N(){o.value=A.moveIndex(o.value,m.value.flat.length,-1)}function F(){const L=m.value.flat[o.value];L&&J(L)}function J(L){y.commandPaletteVisible.value=!1,L.type==="menu"?y.navigateTo(L.menuKey,L.subPage):L.type==="stock"?y.showStockDetail(L.code,L.name):L.type==="command"&&Z(L.key)}function Z(L){if(L==="refresh"){const s=y.currentPage.value;s==="strategies"?y.loadDashboardData().catch(function(){}):s==="calendar"?y.refreshCalendarData().catch(function(){}):s==="ai"&&y.loadAiHistory().catch(function(){})}else L==="export"?y.exportCSV():L==="batch"?y.showBatchEvaluate.value=!0:L==="ai"?y.openAiFab():L==="sidebar"?y.toggleSidebar():L==="today"?y.navigateTo("strategies","overview"):L==="add-portfolio"?(y.currentPage.value="ai",y.currentSubPage.value="portfolio"):L==="open-system"?y.navigateTo("system","status"):L==="open-shortterm"?y.navigateTo("shortterm","overview"):L==="open-research"?y.navigateTo("research","overview"):L==="open-calendar"?y.navigateTo("calendar",""):L==="refresh-data-source"?y.navigateTo("system","datasource"):L.indexOf("theme:")===0&&y.changeTheme(L.slice(6))}b(w,function(L){L&&(c.value="",C.value=[],o.value=0,e(function(){x.value&&x.value.focus&&x.value.focus()}))}),b(c,Q);function ne(L){L==="toggle-palette"?y.commandPaletteVisible.value=!y.commandPaletteVisible.value:L==="toggle-sidebar"?y.toggleSidebar():L==="open-ai"?y.openAiFab():L==="refresh"?Z("refresh"):L==="open-today"?Z("today"):L==="batch-eval"?Z("batch"):L==="add-portfolio"&&Z("add-portfolio")}function ee(L){if(!A.createDefaultShortcuts||!A.createShortcutRegistry)return;const h=A.createDefaultShortcuts().resolve({key:L.key,ctrlKey:L.ctrlKey,altKey:L.altKey,shiftKey:L.shiftKey,metaKey:L.metaKey});h&&(L.preventDefault(),ne(h))}return g(function(){document.addEventListener("keydown",ee)}),{visible:w,query:c,results:m,inputEl:x,sanitizeHtml:y.sanitizeHtml,isIconName:S,onDown:I,onUp:N,onEnter:F,execute:J,isActive:O,setActive:K,itemKey:B,onGlobalKeydown:ee}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
                    <el-button type="primary" @click="doBatchEvaluate" :loading="batchRunning" :disabled="batchRunning">开始评估</el-button>
                </div>
            </div>
        </el-dialog>
    `,setup(){const t=a("qcState");if(!t)return{};const b=Vue.ref(0);let e=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,d=>{d?(b.value=0,e=setInterval(()=>{b.value++},1e3)):e&&(clearInterval(e),e=null)}),{...t,batchElapsed:b}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a,computed:t,ref:b,watch:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const d=a("qcState");if(!d)return{};const g={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},A=t(()=>g[d.aiEvalStage.value]||""),y=t(()=>{const F=d.aiResult&&d.aiResult.value&&d.aiResult.value.result&&d.aiResult.value.result.level;return F?F==="强烈推荐"||F==="推荐"?"var(--success-text)":F==="谨慎推荐"?"var(--warning-text)":F==="中性"||F==="观望"?"var(--text-secondary)":F==="评估失败"||F==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function c(F){const J=document.createElement("textarea");J.value=F,J.style.position="fixed",J.style.opacity="0",document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J)}async function w(){const F=d.aiResult&&d.aiResult.value;if(!F||!F.result)return;const J=F.result.dimensions||{},Z=Object.entries(J).map(([ee,L])=>`${ee} ${Math.round(L)}分`).join(`
`),ne=`【AI 智能评估】${F.result.level||""} ${F.result.total_score!=null?F.result.total_score:"—"}分
模型：${F.model_used||F.result.provider||"—"}

${F.result.detailed_report||""}

九维度评分：
${Z||"无"}`;try{await navigator.clipboard.writeText(ne),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c(ne),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=b(!1),C=b(!1),x=b(null),T=b([]),S={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function q(F){return S[F]||"factor-sem-none"}async function P(){const F=d.stockDetail.value&&d.stockDetail.value.stock;if(F){o.value=!0,C.value=!1,T.value=[],x.value=null;try{const J=d.selectedDate.value?`?date=${d.selectedDate.value}`:"",Z=await fetch(`/api/calendar/stock/${F}/factors${J}`).then(s=>s.json()),ne=Z&&Array.isArray(Z.factors)?Z.factors:[],ee=[],L={};ne.forEach(s=>{L[s.category]||(L[s.category]={category:s.category,items:[]},ee.push(L[s.category])),L[s.category].items.push(s)}),T.value=ee,x.value=Z&&Z.summary||null}catch{C.value=!0}finally{o.value=!1}}}e(d.stockDetailTab,F=>{F==="factor"&&d.stockDetail.value&&d.stockDetailVisible.value&&(P(),v())});const E=b(null);async function v(){try{const F=await fetch("/api/market/factor-ic").then(J=>J.json());E.value=F&&F.success&&F.data?F.data:{}}catch{E.value={}}}function l(F){if(!F||!F.n5)return"—";const J=F.n5.icir!=null?"ICIR "+F.n5.icir:"ICIR —";return F.n5.grade+" ("+J+")"}const m=b(!1),O=b(!1),K=b([]),B=b([]);function U(F){if(F==null)return"—";const J=Number(F);return Number.isNaN(J)?"—":Math.abs(J)>=1e8?(J/1e8).toFixed(2)+"亿":Math.abs(J)>=1e4?(J/1e4).toFixed(1)+"万":String(J)}async function Q(){const F=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(F){m.value=!0,O.value=!1;try{const J=await fetch("/api/market/performance/"+encodeURIComponent(F)).then(Z=>Z.json());J&&J.success?(K.value=J.forecast||[],B.value=J.express||[]):O.value=!0}catch{O.value=!0}finally{m.value=!1}}}e(d.stockDetailTab,F=>{F==="performance"&&Q()});const I=b(null);async function N(){const F=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(!F){I.value=null;return}try{const J=await fetch("/api/focus/stock/"+encodeURIComponent(F)+"/pool").then(Z=>Z.json());I.value=J&&J.success&&J.data?J.data:null}catch{I.value=null}}return e(()=>d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock,F=>{F&&d.stockDetailVisible.value?N():I.value=null}),e(()=>d.stockDetailVisible.value,F=>{F?N():I.value=null}),{...d,aiStageText:A,levelRingColor:y,copyAiReport:w,factorLoading:o,factorError:C,factorSummary:x,factorGroups:T,factorSemClass:q,loadFactorPanel:P,factorIc:E,loadFactorIc:v,factorIcGrade:l,perfLoading:m,perfError:O,perfForecast:K,perfExpress:B,fmtY:U,loadPerformance:Q,poolInfo:I,loadPoolInfo:N}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(b){const e=t("qcState");if(!e)return{};const d=a(()=>b.type==="history"?e.selectedHistoryIds.value.includes(b.item.id):e.selectedChatIds.value.includes(b.item.id)),g=a(()=>{const S=e.watchlistCodes.value.has(b.item.stock_code);return{icon:"star",isWatched:S,label:S?"取消收藏":"加入收藏"}}),A=a(()=>b.type==="history"?"bot":"message-circle"),y=a(()=>{var S;return b.type==="history"?((S=b.item.result)==null?void 0:S.provider)||"":b.item.first_msg||""}),c=a(()=>{var S,q;return`${((q=(S=b.item.result)==null?void 0:S.dimensions)==null?void 0:q.length)||9}维度分析`}),w=a(()=>{var q,P;const S=b.type==="history"?b.item.evaluate_time:b.item.created_at||"";return S?b.timeFormat==="datetime"?b.type==="history"?`${S.split("T")[0]} ${(S.split("T")[1]||"").split(".")[0]}`:`${S.split("T")[0]} ${((q=S.split("T")[1])==null?void 0:q.substring(0,5))||""}`:b.type==="history"?(S.split("T")[1]||"").split(".")[0]||S:((P=S.split("T")[1])==null?void 0:P.substring(0,5))||"":""});function o(){b.type==="history"?e.toggleSelectHistory(b.item.id):e.toggleSelectChat(b.item.id)}function C(){b.type==="history"?e.viewAiResult(b.item):e.viewChatSession(b.item)}async function x(){try{await ElementPlus.ElMessageBox.confirm(b.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}b.type==="history"?e.deleteSingleHistory(b.item.id):e.deleteChatSession(b.item.id)}function T(S,q){e.toggleWatchlist(S,q)}return{isSelected:d,watchState:g,providerIcon:A,providerText:y,dimsText:c,timeText:w,toggleSelect:o,view:C,remove:x,toggleWatchlist:T,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:b,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const d=["买入","持有","观望","减仓","卖出"],g={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},A={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},y=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],c={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},w=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(x){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(x).then(q=>q.json?q.json():q)}function C(){const x=new Date,T=S=>S<10?"0"+S:""+S;return x.getFullYear()+"-"+T(x.getMonth()+1)+"-"+T(x.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const x=e("qcState"),T=a(C()),S=a("after_close"),q=a({rows:[],actions:{},total:0,groups:{}}),P=a({sessions:{},total:0}),E=a(null),v=a(!1),l=a(""),m=a(!1),O=a([]),K=a(""),B=a(null),U={},Q=a({});let I=0;const N=a(null),F=t(function(){const M=q.value&&q.value.groups||{};return Object.keys(M).length?M:q.value&&q.value.rows&&q.value.rows.length?{全部:q.value.rows}:{}}),J=t(function(){const M=N.value;return!M||!M.date||M.date!==T.value?"":"已加载最近一次评估: "+M.date+" · "+(c[M.session]||M.session)}),Z=t(function(){const M=q.value&&q.value.base_date;return M?M===T.value?"评分范围: "+M+" 收盘池 + 自选":"评分范围: "+M+" 收盘池(前一交易日算好) + 自选":""});function ne(M){if(M==null)return"—";const W=Number(M);return W===Math.floor(W)?String(W):W.toFixed(1)}function ee(M){const W=q.value.total||0,ie=(q.value.actions||{})[M]||0;if(!W)return"0%";const ue=ie/W*100;return ue>0&&ue<4?"4%":ue.toFixed(1)+"%"}function L(M){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[M]||"info"}function s(M){const W=E.value&&E.value.overall&&E.value.overall[M]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"info":W.rate>=60?"success":W.rate>=40?"warning":"danger"}function h(M){const W=E.value&&E.value.overall&&E.value.overall[M]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"样本不足":W.rate.toFixed(1)+"% ("+W.total+" 样本)"}function n(){return c[S.value]||S.value}function f(M){const W=O.value.indexOf(M);W>=0?O.value.splice(W,1):O.value.push(M)}function X(M){if(!M||!M.raw_json)return{};if(U[M.stock_code+M.session+M.trade_date])return U[M.stock_code+M.session+M.trade_date];let W={};try{W=JSON.parse(M.raw_json)||{}}catch{W={}}return U[M.stock_code+M.session+M.trade_date]=W,W}async function D(){try{const M=await o("/api/focus/latest"),W=M&&M.success&&M.data;W&&W.date&&(N.value=W,T.value=W.date,W.session&&(S.value=W.session))}catch(M){console.warn("[focus] 最近一次评估解析失败:",M)}}async function p(){m.value=!0;try{const M=await o("/api/focus/results?date="+T.value+"&session="+S.value);q.value=M&&M.success&&M.data||{rows:[],actions:{},total:0,groups:{}},r((q.value.rows||[]).map(function(W){return W.stock_code}))}catch(M){console.warn("[focus] 结果加载失败:",M),q.value={rows:[],actions:{},total:0,groups:{}}}finally{m.value=!1}}async function r(M){const W=Q.value||{},ie=(M||[]).filter(function($){return $&&!W[$]});if(!ie.length)return;const ue=++I,Me=ie.map(function($){return o("/api/focus/stock/"+encodeURIComponent($)+"/pool?date="+T.value).then(function(ce){ce&&ce.success&&ce.data?W[$]=ce.data:W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Me)}catch{}ue===I&&(Q.value=Object.assign({},W))}function k(M){const W=x&&x.showStockDetail;if(typeof W=="function"){W(M);return}const ue=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ue&&ue.info("请从其他页面打开股票详情: "+M)}async function u(){try{const M=await o("/api/focus/history?date="+T.value);P.value=M&&M.success&&M.data||{sessions:{},total:0}}catch(M){console.warn("[focus] 历史加载失败:",M),P.value={sessions:{},total:0}}}async function R(){v.value=!0;try{const M=await o("/api/ai/track");M&&M.success&&M.data?(E.value=M.data,l.value=(M.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):E.value=null}catch(M){console.warn("[focus] 效果块加载失败:",M),E.value=null}finally{v.value=!1}}async function le(){const M=(K.value||"").trim();if(M){B.value=null;try{const W=await o("/api/focus/stock/"+encodeURIComponent(M));B.value=W&&W.success&&W.data&&W.data.rows||[]}catch(W){console.warn("[focus] 单股历史加载失败:",W),B.value=[]}}}async function G(){await p(),await u(),await R()}return b(async function(){await D(),await G()}),{curDate:T,session:S,results:q,history:P,track:E,trackLoading:v,trackNote:l,detailSplitEnabled:x.detailSplitEnabled,stockDetail:x.stockDetail,loading:m,expanded:O,stockCode:K,stockHistory:B,SESSIONS:y,ACTION_ORDER:d,TRACK_WINDOWS:w,ACTION_DOT:g,TIER_DOT:A,SESSION_LABELS:c,displayGroups:F,latestNote:J,baseNote:Z,sessionLabel:n,fmtScore:ne,tagType:L,rateTagType:s,fmtRate:h,toggle:f,detailOf:X,loadResults:p,loadHistory:u,loadTrack:R,loadStockHistory:le,loadAll:G,poolStatus:Q,openStockDetail:k,actionPct:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:b}=Vue,{currentView:e,statusFilter:d,dashboardData:g,loadHealthMetrics:A,getLoadDashboardData:y,getLastRefreshTime:c,getFetchPoolSignals:w}=a,o=t(!1),C=t(""),x=new Map,T=t([]),S=t(""),q=t(""),P=t([]),E=t(""),v=window.__quantModules.core||{},l=typeof v.createTtlCache=="function"?v.createTtlCache(15e3):null;let m=0;function O(){const J=Date.now();J-m<5e3||(m=J,ElementPlus.ElMessage.success("有新数据，已更新"))}function K(J,Z,ne,ee){!l||!Z||typeof v.silentRefresh!="function"||v.silentRefresh({cache:l,key:Z,fetchFn:async()=>{const L=await fetch(J);if(!L.ok)throw new Error("HTTP "+L.status);const s=await L.json();return ne?ne(s):s},ttl:l.defaultTtl,apply:ee,onChanged:O,onError:()=>{}})}const B=new Set;async function U(){var J;try{const ne=await(await fetch("/api/dates")).json();T.value=((J=ne.data)==null?void 0:J.dates)||ne.dates||[],T.value.length>0&&(S.value=T.value[T.value.length-1]),q.value=new Date().toLocaleTimeString()}catch(Z){console.error(Z)}}async function Q(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),q.value="刷新中...",x.clear(),await U(),await N(),q.value=new Date().toLocaleTimeString()}catch(J){console.error("数据刷新失败",J)}}function I(){if(!S.value)return;const Z="/api/view/"+(e.value||"day")+"/"+S.value+"?status="+(d.value||"all")+"&format=csv";window.open(Z,"_blank")}async function N(){if(!S.value)return;const J=`${e.value}_${S.value}`;if(B.has(J))return;B.add(J);const Z=`/api/view/${e.value}/${S.value}?status=all`,ne=l&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET",`/api/view/${e.value}/${S.value}`,{status:"all"}):null,ee=(h,n)=>{P.value=h,E.value=n||"",x.set(J,{stocks:h,note:n||""})},L=h=>{ee(h&&h.stocks||[],h&&h.note||"")};if(x.has(J)){L(x.get(J)),K(Z,ne,h=>h,L),B.delete(J);return}const s=ne&&l?l.get(ne):void 0;if(s!==void 0){L(s),K(Z,ne,h=>h,L),B.delete(J);return}o.value=!0,C.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const n=await(await fetch(Z)).json(),f=n.stocks||[];ee(f,n.note||""),l&&ne&&l.set(ne,{stocks:f,note:n.note||""})}catch{try{const f=await(await fetch(`/api/calendar/${S.value}/consensus`)).json();P.value=(f.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}w(),B.delete(J)}async function F(){const J=l&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const Z=l.get(J);if(Z!==void 0){g.value=Z,A().catch(()=>{}),K("/api/dashboard",J,ne=>ne.data||ne,ne=>{g.value=ne,c().value=Date.now()});return}}await y()(),A().catch(()=>{}),l&&l.set(J,g.value)}return{loading:o,loadingView:C,viewCache:x,dates:T,selectedDate:S,lastLoadTime:q,consensus:P,viewNote:E,loadDates:U,refreshCalendarData:Q,exportCSV:I,loadConsensusData:N,loadDashboardCached:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:b,loadIndexKline:e,rememberDialogTrigger:d,menus:g,currentPage:A,currentSubPage:y,stockDetail:c,selectedDate:w}=a,o=ref({indices:[],market_sentiment:null});let C=null;const x=ref(!1),T=ref(null),S=ref(null),q=ref(!1);function P(){window.__quantModules.charts.disposeKline("stockKlineChart")}const E=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{E.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const v=ref(!1),l=ref(null),m=ref(!1),O=ref(0),K=ref(0);async function B(){try{const n=await(await fetch("/api/market/overview")).json();o.value=n,U(n)}catch(h){console.error("获取市场行情失败:",h)}}function U(h){C&&clearInterval(C),h&&h.in_trading_hours&&(C=setInterval(B,6e5))}function Q(h){d(),T.value=h,S.value=null,b.value="daily",I(h.code),window.__quantModules.charts.disposeKline("indexKlineChart"),x.value=!0,setTimeout(async()=>{await e("daily")},500)}async function I(h){try{const f=await(await fetch("/api/ai/index-eval/"+h)).json();f.success&&f.data&&(S.value=f.data)}catch(n){console.warn("[getIndexAiScore] cache check failed:",n)}}async function N(){if(T.value){q.value=!0;try{const n=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:T.value.code,index_name:T.value.name,current_price:T.value.close,pct_chg:T.value.pct_chg})})).json();n.success?S.value=n.data:ElementPlus.ElMessage.error(n.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{q.value=!1}}}function F(h){window.__quantModules.charts.zoomKline("stockKlineChart",h)}function J(){m.value=!0,setTimeout(()=>{m.value=!1},600)}function Z(h,n){if(h===n){J();return}const f=800,X=performance.now(),D=n-h;v.value=!0,l.value={value:D,dir:D>0?"up":"down"},m.value=!0,setTimeout(()=>{m.value=!1},600),setTimeout(()=>{l.value=null},2300);function p(r){const k=r-X,u=Math.min(k/f,1),R=1-Math.pow(1-u,3),le=Math.round(h+D*R);c.value&&c.value.score_data&&(c.value.score_data.score=le),u<1?requestAnimationFrame(p):(c.value&&c.value.score_data&&(c.value.score_data.score=n),v.value=!1)}requestAnimationFrame(p)}function ne(){if(!c.value||!c.value.score_data)return;const h=c.value.score_data.score;if(h==null)return;const n=600,f=performance.now();m.value=!0,setTimeout(()=>{m.value=!1},600);function X(D){const p=Math.min((D-f)/n,1),r=1-Math.pow(1-p,3),k=Math.round(h*r);c.value&&c.value.score_data&&(c.value.score_data.score=k),p<1?requestAnimationFrame(X):c.value&&c.value.score_data&&(c.value.score_data.score=h)}requestAnimationFrame(X)}async function ee(){var f;if(!c.value||!c.value.stock)return;const h=c.value.stock,n=(f=c.value.score_data)==null?void 0:f.score;try{const X=new Date().toISOString().split("T")[0],D=w.value||X,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(h)}/score?date=${D}`)).json();if(r.success&&r.score_data){const k=r.score_data.score;c.value&&(c.value.score_data=r.score_data),n!=null&&k!==n?Z(n,k):J()}else J()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function L(h){E.value&&(O.value=h.touches[0].clientX,K.value=h.touches[0].clientY)}function s(h){if(!E.value)return;const n=O.value-h.changedTouches[0].clientX,f=K.value-h.changedTouches[0].clientY;if(Math.abs(n)>Math.abs(f)&&Math.abs(n)>80){const X=g.value.map(function(p){return p.key}),D=X.indexOf(A.value);if(n>0&&D<X.length-1){const p=X[D+1],r=window.__quantGoPage;r?r(p,""):(A.value=p,y.value="")}else if(n<0&&D>0){const p=X[D-1],r=window.__quantGoPage;r?r(p,""):(A.value=p,y.value="")}}}return{marketData:o,marketRefreshTimer:C,fetchMarketData:B,indexDetailVisible:x,indexDetail:T,indexAiResult:S,indexAiLoading:q,showIndexDetail:Q,loadCachedIndexEval:I,doIndexAiEvaluate:N,disposeStockKline:P,isMobile:E,zoomKlineRange:F,scoreAnimating:v,scoreDelta:l,scorePulse:m,triggerScorePulse:J,animateScoreChange:Z,animateScoreEntrance:ne,refreshStockScore:ee,touchStartX:O,touchStartY:K,onTouchStart:L,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:b,currentSubPage:e}=a,d=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),g=ref("idle"),A=ref("");async function y(){if(!d.value.webhook_url){A.value="请先输入Webhook地址";return}g.value="testing",A.value="";try{const M=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:d.value.webhook_url})})).json();M.success||M.status==="ok"?(A.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(A.value=M.message||"测试失败",ElementPlus.ElMessage.error(A.value))}catch{A.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}g.value="idle"}const c=Vue.ref(!1);async function w(){c.value=!0;try{const M=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const o=ref(!1);function C(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const G=document.querySelector('input[placeholder*="输入问题"]');G&&G.focus()})}const x=ref([]),T=ref({});async function S(){try{const M=await(await fetch("/api/ai/recommend-strategies")).json();M.success&&(x.value=M.recommendations||[])}catch(G){console.warn("[loadStrategyRecommendations] failed:",G)}}async function q(){try{const M=await(await fetch("/api/ai/usage-stats")).json();M.success&&(T.value=M)}catch(G){console.warn("loadAiUsage failed:",G)}}const P=ref({}),E=ref([]),v=ref(7);async function l(){try{const M=await(await fetch("/api/system/monitor")).json();M.success&&(P.value=M)}catch(G){console.warn("loadSysMonitor failed:",G)}}const m=ref({});async function O(){try{const M=await(await fetch("/api/system/health-detail")).json();M.success&&(m.value=M)}catch(G){console.warn("loadHealthDetail failed:",G)}}async function K(){try{const M=await(await fetch(`/api/analytics/rank?days=${v.value}`)).json();M.success&&(E.value=M.rank||[])}catch(G){console.warn("loadAnalytics failed:",G)}}const B=ref(!1);async function U(){if(!B.value){B.value=!0;try{const M=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return M&&M.success?M.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${M.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${M.date}）`):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"生成复盘失败"),O(),M}catch(G){ElementPlus.ElMessage.error("生成复盘失败: "+(G.message||""))}finally{B.value=!1}}}const Q=ref(null),I=ref(!1);async function N(){try{const M=await(await fetch("/api/ai/fact-check/latest")).json();Q.value=M&&M.success&&M.data||null}catch(G){console.warn("loadFactCheck failed:",G)}}async function F(){if(!I.value){I.value=!0;try{const M=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return M&&M.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${M.data.pass_rate!=null?M.data.pass_rate+"%":"--"} (${M.data.checked} 个数字)`),N()):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"事实护栏抽查失败"),M}catch(G){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(G.message||""))}finally{I.value=!1}}}const J=ref([]),Z=ref(!1);async function ne(){try{const M=await(await fetch("/api/backup/list")).json();M.success&&(J.value=M.backups||[])}catch(G){console.error("加载备份列表失败",G)}}async function ee(){Z.value=!0;try{const M=await(await fetch("/api/backup/create",{method:"POST"})).json();M.success?(ElementPlus.ElMessage.success(M.message||"备份成功"),ne()):ElementPlus.ElMessage.error(M.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{Z.value=!1}}const L=ref(""),s=ref("");async function h(G){L.value=G,s.value="";try{const M=window.__quantModules&&window.__quantModules.core||{},W=typeof M.authHeaders=="function"?M.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(G),{headers:W});if(!ie.ok)throw new Error("HTTP "+ie.status);const ue=await ie.blob(),Me=URL.createObjectURL(ue),$=document.createElement("a");$.href=Me;const ce=new Date().toISOString().slice(0,10);$.download="report_"+ce+"."+G,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(Me),s.value="报表已导出 ("+G.toUpperCase()+")"}catch(M){s.value="报表导出失败: "+(M.message||M)}finally{L.value=""}}async function n(G){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${G} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(M){console.warn("[restoreBackup] confirm cancelled:",M);return}try{const W=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(W.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const f=ref(!1),X=ref(0),D=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function p(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,f.value=!0},800)}function r(){f.value=!1,localStorage.setItem("quant_tour_done","1")}function k(){f.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),R=ref(!1);async function le(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}R.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:b.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{R.value=!1}}return{feishuConfig:d,feishuTestStatus:g,feishuTestMessage:A,feishuSaving:c,testFeishuWebhook:y,saveFeishuConfig:w,aiFabHidden:o,openAiFab:C,strategyRecommendations:x,aiUsage:T,loadStrategyRecommendations:S,loadAiUsage:q,sysMonitor:P,analyticsRank:E,analyticsDays:v,loadSysMonitor:l,loadAnalytics:K,healthDetail:m,loadHealthDetail:O,reviewTriggering:B,triggerMarketReview:U,factCheck:Q,factCheckRunning:I,loadFactCheck:N,triggerFactCheck:F,backups:J,backupCreating:Z,loadBackups:ne,createBackup:ee,restoreBackup:n,reportExporting:L,reportExportMsg:s,exportReport:h,tourVisible:f,tourStep:X,tourSteps:D,maybeShowTour:p,skipTour:r,finishTour:k,feedbackText:u,feedbackSubmitting:R,submitFeedback:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:b,selectedDate:e,dates:d,loadConsensusData:g,hapticFeedback:A}=a,y=t(()=>({day:"天",week:"周",month:"月",year:"年"})[b.value]||"天"),c=t(()=>({day:"date",week:"week",month:"month",year:"year"})[b.value]||"date"),w=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[b.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!d.value||d.value.length===0?!1:e.value>d.value[0]),C=t(()=>!e.value||!d.value||d.value.length===0?!1:e.value<d.value[d.value.length-1]);function x(P){A("light"),b.value=P;let E=e.value||d.value[d.value.length-1];if(P==="year"){const v=E.substring(0,4),l=d.value.find(m=>m.startsWith(v));e.value=l||E}else if(P==="month"){const v=E.substring(0,7),l=d.value.find(m=>m.startsWith(v));e.value=l||E}setTimeout(g,50)}function T(P){A("light");const E=e.value,v=d.value,l=v.indexOf(E);if(l<0)return;let m=1;b.value==="week"&&(m=5),b.value==="month"&&(m=22),b.value==="year"&&(m=250);const O=l+P*m;if(O>=0&&O<v.length){const K=v[O];if(b.value==="month"){const B=K.substring(0,7),U=v.find(Q=>Q.startsWith(B));e.value=U||K}else if(b.value==="year"){const B=K.substring(0,4),U=v.find(Q=>Q.startsWith(B));e.value=U||K}else e.value=K;g()}}function S(P){if(!d.value||d.value.length===0)return!1;const E=P.getFullYear(),v=String(P.getMonth()+1).padStart(2,"0"),l=String(P.getDate()).padStart(2,"0"),m=`${E}-${v}-${l}`;return!d.value.includes(m)}function q(P){P&&P.length>10&&(e.value=P.substring(0,10)),g()}return{viewUnit:y,datePickerType:c,dateFormat:w,canNavPrev:o,canNavNext:C,switchView:x,navigateDate:T,disabledDate:S,onDateChange:q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:b,navigateTo:e,currentPage:d,currentView:g,navigateDate:A,switchView:y,getLoadDashboardData:c,refreshCalendarData:w,getLoadAiHistory:o,exportCSV:C,getShowBatchEvaluate:x,openAiFab:T,toggleSidebar:S,showStockDetail:q}=a,P=ref("");async function E(I,N){if(!I||I.trim().length<1){N([]);return}const F=window.QuantCommandPanel;let J=[];F&&t.value&&(J=F.buildSearchSuggestions(I,t.value,b,F.DEFAULT_COMMANDS));const Z=window.__quantModules&&window.__quantModules.pinyin;Z&&Z.searchCoreStocks(I).forEach(function(ne){J.push({value:ne.code+" "+ne.name,type:"stock",code:ne.code,name:ne.name,label:ne.name,subLabel:ne.code,icon:"trending-up",iconName:"trending-up"})});try{const ee=await(await fetch("/api/search?q="+encodeURIComponent(I))).json();if(ee.success&&ee.results){const L=ee.results.map(function(h){return{value:h.code+" "+h.name,type:"stock",code:h.code,name:h.name,label:h.name,subLabel:h.code,icon:"trending-up",iconName:"trending-up"}}),s=[];(ee.groups||[]).forEach(function(h){(h.items||[]).forEach(function(n){n.type==="sector"?s.push({value:n.name+" · "+n.subLabel,type:"sector",name:n.name,label:n.name,subLabel:"板块",icon:"layers",iconName:"layers"}):n.type==="strategy"?s.push({value:n.name+" · 策略",type:"strategy",id:n.id,name:n.name,label:n.name,subLabel:"策略",icon:"target",iconName:"target"}):n.type==="menu"&&s.push({value:n.name,type:"menu",menuKey:n.menuKey,name:n.name,label:n.name,subLabel:n.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),N(J.concat(L,s))}else N(J)}catch(ne){console.warn("[searchStocks] fetch failed:",ne),N(J)}}function v(I){return I?I.type==="menu"?{action:"menu",menuKey:I.menuKey,subPage:I.subPage}:I.type==="command"?{action:"command",key:I.key}:I.type==="sector"?{action:"sector",name:I.name}:I.type==="strategy"?{action:"strategy",id:I.id,name:I.name}:I.type==="stock"||I.code&&I.name?{action:"stock",code:I.code,name:I.name}:null:null}function l(I){P.value="";const N=window.QuantCommandPanel,F=N?N.dispatchSearchSelection(I):v(I);if(F){if(F.action==="menu"){e(F.menuKey,F.subPage);return}if(F.action==="command"){m(F.key);return}if(F.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(F.name);return}if(F.action==="strategy"){e("research","overview");return}F.action==="stock"&&typeof q=="function"&&q(F.code,F.name)}}function m(I){if(I==="refresh"){const N=d.value;N==="strategies"?c().catch(function(){}):N==="calendar"?w().catch(function(){}):N==="ai"&&o().catch(function(){})}else I==="export"?C():I==="batch"?x().value=!0:I==="ai"?T():I==="sidebar"?S():I==="open-eval-history"?e("ai","history"):I==="open-shortterm"&&e("shortterm","overview")}const O=ref(!1),K=ref(!1);function B(I){if(!I)return!1;const N=I.tagName;return N==="INPUT"||N==="TEXTAREA"||N==="SELECT"||I.isContentEditable}function U(I){if(B(I.target))return;const N=I.key.toLowerCase();if(I.ctrlKey&&N==="k"){I.preventDefault(),K.value=!0;return}if(I.ctrlKey&&N==="/"){I.preventDefault(),O.value=!O.value;return}if(I.ctrlKey&&N==="h"){I.preventDefault(),e("ai","history");return}if(I.ctrlKey&&I.shiftKey&&N==="s"){I.preventDefault(),e("shortterm","overview");return}if(!(I.ctrlKey||I.metaKey||I.altKey)){if(N>="1"&&N<="5"){const F=parseInt(N)-1,J=t.value[F];J&&e(J.key,J.subPages[0]||"");return}if(N==="r"&&Q(),(N==="arrowleft"||N==="arrowright"||N==="arrowup"||N==="arrowdown")&&d.value==="calendar")if(I.preventDefault(),N==="arrowleft"||N==="arrowright")A(N==="arrowleft"?-1:1);else{const F=["day","week","month","year"].indexOf(g.value),J=["day","week","month","year"][(F+(N==="arrowup"?-1:1)+4)%4];y(J)}}}function Q(){const I=d.value;I==="strategies"?c().catch(()=>{}):I==="calendar"?w().catch(()=>{}):I==="ai"&&o().catch(()=>{})}return{searchQuery:P,searchStocks:E,onSearchSelect:l,runGlobalCommand:m,shortcutHelpVisible:O,commandPaletteVisible:K,isTypingTarget:B,handleGlobalKeydown:U,refreshCurrentPage:Q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:b,loadDates:e,loadDashboardData:d,loadDashboardCached:g,loadHealthMetrics:A,loadConsensusData:y,applyTheme:c,maybeShowTour:w,loadAiVendors:o,loadGroupConfig:C,groupsConfig:x}=a,T=function(ee){const L=window.__quantModules&&window.__quantModules.themes;return L&&L.applyLegacyTheme?L.applyLegacyTheme(ee):c(ee)},S="qc_login_username";let q="";try{q=localStorage.getItem(S)||""}catch{q=""}const P=ref({username:q,password:""}),E=ref(!1),v=ref(!1),l=ref(!1),m=ref({oldPassword:"",newPassword:"",confirmPassword:""}),O=ref(!1),K=ref(!1),B=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),U=ref(1);async function Q(){try{(await(await fetch("/api/setup/status")).json()).needed&&(B.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},U.value=1,K.value=!0)}catch(ee){console.warn("[checkSetupWizard] failed:",ee)}}async function I(){try{const ee={new_password:B.value.newPassword,ai_key:B.value.aiKey,ai_provider:B.value.aiProvider,ai_model:B.value.aiModel,ai_endpoint:B.value.aiEndpoint,tushare_token:B.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)})).json();s.success?(K.value=!1,ElementPlus.ElMessage.success("初始化完成"),await b()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function N(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(K.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function F(){if(!P.value.username||!P.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}E.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P.value)})).json();if(L.success){t.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),T(L.user.theme||"gold");try{localStorage.setItem(S,P.value.username||"")}catch{}typeof C=="function"&&await C().catch(function(){}),typeof o=="function"&&o(),await b(),await e(),await Promise.all([g(),y(),A().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),L.data&&L.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),w(),L.user.role==="admin"&&setTimeout(Q,500)}else ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{E.value=!1}}async function J(){v.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();L.success?(t.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),T(L.user.theme||"gold"),typeof C=="function"&&await C().catch(function(){}),await b(),await e(),await d(),A().catch(()=>{}),await y(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{v.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{x&&(x.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function ne(){if(!m.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!m.value.newPassword||m.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(m.value.newPassword!==m.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}O.value=!0;try{const ee=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:m.value.oldPassword,new_password:m.value.newPassword})}),L=await ee.json();ee.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,m.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(L.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{O.value=!1}}return{loginForm:P,logining:E,guestLogining:v,showChangePassword:l,changePasswordForm:m,changingPassword:O,showSetupWizard:K,setupForm:B,setupStep:U,checkSetupWizard:Q,completeSetupWizard:I,resetSetupWizard:N,handleLogin:F,handleGuestLogin:J,handleLogout:Z,doChangePassword:ne}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let b=null;const{strategyFilter:e,currentView:d,statusFilter:g,currentPage:A,currentSubPage:y,menus:c,currentUser:w,strategyFilterCounts:o,lazyTick:C,dates:x,selectedDate:T,consensus:S,loadConsensusData:q,fetchMerrillClock:P,fetchMarketData:E,loadWatchlist:v,loadAiHistory:l,preloadWatchlistKline:m,loadChatHistory:O,loadSystemStatus:K,checkTushareConnection:B,loadSysMonitor:U,loadAnalytics:Q,loadHealthDetail:I,loadHealthMetrics:N,loadAiUsage:F,loadFactCheck:J,loadAutoEvaluateConfig:Z,loadDatasourceConfig:ne,loadFeishuConfig:ee,loadAiConfig:L,loadAiVendors:s,loadRateLimit:h,loadDataRefreshConfig:n,loadBackups:f,loadAllGroups:X,loadUsers:D,stockDetailTab:p,stockDetailVisible:r,stockKlineLoaded:k,loadStockKline:u,currentKlinePeriod:R,showMerrillDetail:le,indexDetailVisible:G,restoreDialogFocus:M}=a;t(e,W=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(W.selected)),localStorage.setItem("quant_strategy_filter_mode",W.mode)},{deep:!0}),t([d,g],(W,ie)=>{W[0]!==ie[0]&&q()}),t([A,y],([W,ie])=>{var ue;try{const $=!(W==="calendar"&&ie==="calendar")&&ie||"",ce=$?"#"+W+"/"+$:"#"+W;window.location.hash!==ce&&(window.location.hash=ce)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&c.value.find(Me=>Me.key===W)){const Me=c.value.find($=>$.key===W);Me&&Me.subPages.length>0&&(y.value=Me.subPages[0])}if(W==="shortterm"&&ie==="market-review"){const Me=window.__lazyLoaders&&window.__lazyLoaders.research;Me&&Me().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function($){$&&$.name&&!$.__quantRegistered&&(window.__quantApp.component($.name,$),$.__quantRegistered=!0)}),C&&C.value++}).catch(function($){console.warn("[lazy] research 组件补加载失败",$)})}W==="calendar"&&ie==="calendar"&&(!S.value||S.value.length===0)&&(x.value.length>0&&!T.value&&(T.value=x.value[x.value.length-1]||""),setTimeout(q,50)),W==="calendar"&&ie==="pool"&&(!S.value||S.value.length===0)&&(x.value.length>0&&!T.value&&(T.value=x.value[x.value.length-1]||""),setTimeout(q,50)),W==="strategies"&&(ie==="merrill"&&P(),ie==="market"&&E(),ie==="consensus"&&(!S.value||S.value.length===0)&&setTimeout(q,50)),W==="ai"&&(ie==="watchlist"&&(v(),l(),setTimeout(m,500)),ie==="history"&&l(),ie==="overview"&&(l(),v()),ie==="chat_history"&&O()),(W==="system"||W==="ops")&&((ue=w.value)==null?void 0:ue.role)==="admin"&&(ie==="status"&&(K(),B()),ie==="health"&&(I(),N()),ie==="schedule"&&I(),ie==="guard"&&J(),ie==="usage"&&(U(),Q(),I(),N(),F(),J()),ie==="autoeval"&&(Z(),s()),ie==="datasource"&&ne(),ie==="feature"&&(ee(),L(),h(),n(),f()),ie==="user"&&(X(),D())),(W==="system"||W==="ops")&&ie==="usage"?b||(b=setInterval(()=>{U(),Q(),I(),N(),F()},3e4)):b&&(clearInterval(b),b=null)}),t(p,(W,ie)=>{W==="kline"&&ie&&ie!=="kline"&&r.value&&(k.value=!1,setTimeout(async()=>{!await u(R.value)&&r.value&&p.value==="kline"&&setTimeout(()=>u(R.value),800)},50))}),t(le,W=>{W||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([r,G],([W,ie])=>{!W&&!ie&&M()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:b,menus:e,currentPage:d,currentSubPage:g,currentView:A,currentKlinePeriod:y,selectedDate:c,dates:w,loadDates:o,loadConsensusData:C,loadDashboardCached:x,appVersion:T,themes:S,fetchMarketData:q,fetchMerrillStages:P,fetchMerrillClock:E,loadAiConfig:v,loadAiVendors:l,loadAiCatalog:m,currentUser:O,loadUserConfig:K,loadAutoEvaluateConfig:B,loadGroupConfig:U,loadUsers:Q,loadAllGroups:I,loadAiHistory:N}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function F(D,p){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(D==="calendar"&&r[p])return d.value="calendar",g.value="calendar",r[p]&&(A.value=r[p]),!0;if(D==="research"&&(p==="strategy-write"||p==="custom-write")){d.value="research",g.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",p==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const D=window.location.hash||"";if(!D||D==="#")return;const p=D.replace(/^#\/?/,"").split("/"),r=p[0],k=p[1]||"",u=e.value.find(function(R){return R.key===r});if(u&&!F(r,k)){if(!k)d.value=r,g.value=u.subPages[0]||"";else if(u.subPages.indexOf(k)>=0)d.value=r,g.value=k;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,g.value).catch(function(){})}});const J=(D,p=3e3,r="")=>{const k=new Promise((u,R)=>setTimeout(()=>R(new Error("timeout")),p));return Promise.race([D,k]).catch(u=>{console.warn(`[init] ${r||"task"} failed:`,u.message)})},Z=localStorage.getItem("quant_theme"),ne=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const D=window.__quantModules.themes;let p=ne.theme||"system",r=ne.theme_hue!=null&&ne.theme_hue!==""?ne.theme_hue:null;const k=typeof D.migrateLegacyTheme=="function"?D.migrateLegacyTheme():null;r==null&&k&&(p=k.mode,r=k.hue),r==null&&(r=45),b(p,r)}else Z&&b(Z);await U().catch(function(){}),function(){var D=window.location.hash||"",p=!1;if(D&&D!=="#"){var r=D.replace(/^#\/?/,"").split("/"),k=r[0],u=r[1]||"",R=e.value.find(function(ie){return ie.key===k});R&&(F(k,u)||(d.value=k,u&&R.subPages.indexOf(u)>=0?g.value=u:u||(g.value=R.subPages[0]||"")),p=!0)}if(!p){var le=localStorage.getItem("quant_last_page");le&&e.value.some(function(ie){return ie.key===le})?d.value=le:ne.default_view&&e.value.some(function(ie){return ie.key===ne.default_view})&&(d.value=ne.default_view);var G=localStorage.getItem("quant_last_subpage");G&&(g.value=G)}var M=localStorage.getItem("quant_last_date");M&&(c.value=M);var W=localStorage.getItem("quant_last_view");W&&(A.value=W),window.__lazyLoaders&&window.__lazyLoaders[d.value]&&window.__quantGoPage&&window.__quantGoPage(d.value,g.value).catch(function(){})}(),fetch("/api/health").then(D=>D.json()).then(D=>{D.version&&(T.value=D.version)}).catch(()=>{});const ee=localStorage.getItem("quant_user"),L=localStorage.getItem("quant_token"),s=!!(ee&&L),h=Promise.all([Promise.resolve().then(()=>{S.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),J(q(),3e3,"marketData"),J(P(),2e3,"merrillStages")]).then(()=>{J(E(),3e3,"merrillClock")});if(v(),m(),s&&O.value&&l(),!s||!O.value){await h;return}let n=!0;try{n=(await fetch("/api/users/me")).ok}catch{n=!1}if(!n){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),O.value=null;return}if(O.value){const D=O.value.theme||"",p=window.__quantModules&&window.__quantModules.themes;let r=ne.theme||"system",k=ne.theme_hue!=null&&ne.theme_hue!==""?ne.theme_hue:null;if(k==null&&p&&typeof p.migrateLegacyTheme=="function"){const u=p.migrateLegacyTheme();if(u)r=u.mode,k=u.hue;else if(D&&p.LEGACY_MAP&&p.LEGACY_MAP[D]){const R=p.LEGACY_MAP[D];r=R[0],k=R[1]}}k==null&&(k=45),b(r,k)}if(window.__quantModules&&window.__quantModules.preferences){const p=await window.__quantModules.preferences.loadPreferences();var f=localStorage.getItem("quant_last_page");!f&&p.default_view&&e.value.some(function(r){return r.key===p.default_view})&&(d.value=p.default_view),p.theme&&b(p.theme,p.theme_hue!=null&&p.theme_hue!==""?p.theme_hue:null),y&&(p.chart_period==="weekly"||p.chart_period==="monthly")&&(y.value=p.chart_period)}await Promise.all([J(K(),2e3,"userConfig"),J(o(),2e3,"dates")]),B().catch(()=>{}),U().catch(()=>{});const X=d.value==="strategies"?J(x(),2e3,"dashboard"):J(C(),2e3,"consensus");await Promise.all([X,J(Q(),2e3,"users"),J(N(),2e3,"aiHistory")]),I().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:b,onUnmounted:e,watch:d,nextTick:g}=Vue,A=a(!1),y=window.__quantModules&&window.__quantModules.i18n||{},c=y.SUPPORTED_LOCALES||["zh-CN","en"],w=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(c.indexOf(w)!==-1?w:"zh-CN");typeof y.bindLocale=="function"&&y.bindLocale(o);const C=typeof y.t=="function"?y.t:function(j){return String(j)};function x(j){c.indexOf(j)!==-1&&(o.value=j,typeof y.setLocale=="function"&&y.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function T(j,de){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,de):j==null?"":String(j)}function S(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let q=null;function P(){document.activeElement&&document.activeElement!==document.body&&(q=document.activeElement)}function E(){if(q&&q.isConnected)try{q.focus()}catch{}q=null}const v=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{v.value=!0}),window.addEventListener("offline",()=>{v.value=!1})),window.addEventListener("beforeunload",j=>{if(A.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function l(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const m=useMerrillClock(),{merrillData:O,merrillStagesConfig:K,showMerrillDetail:B,merrillDetailData:U,merrillClockConfig:Q,merrillClockLastUpdated:I,merrillReevalResult:N,merrillReevalLoading:F,stages:J,indicatorList:Z,dimensionScoreList:ne,detailDimensionScoreList:ee,confidenceColor:L,timelineStages:s,clockPosition:h,merrillProgressStyle:n,FULL_CYCLE_MONTHS:f,getStageAngle:X,getCycleProgress:D,getCurrentStageMonths:p,getStageTotalMonths:r,isStageCompleted:k,getCharLabel:u,getAssetName:R,getRankColor:le,fetchMerrillStages:G,fetchMerrillClock:M,loadMerrillTimeline:W,showTimelineStage:ie,merrillTimeline:ue,timelineLoading:Me,showStageDetail:$,saveMerrillClockConfig:ce,doMerrillReevaluate:Re,startAutoRefresh:se,stopAutoRefresh:pe,merrillSnapshots:Te,merrillSnapshotsTotal:ve,fetchMerrillSnapshots:be}=m,qe=a(localStorage.getItem("sidebar_collapsed")==="1");function re(){qe.value=!qe.value,localStorage.setItem("sidebar_collapsed",qe.value?"1":"0")}const ae=a(null),fe=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ne=t(()=>{var Ge,Vt,Wt;const j=((Ge=ge.value)==null?void 0:Ge.role)||"guest",de=((Vt=ge.value)==null?void 0:Vt.group)||j,ye=((Wt=ae.value)==null?void 0:Wt[de])||null;return fe.map(At=>{if(ye&&ye.visible_menus&&At.key in ye.visible_menus&&!ye.visible_menus[At.key])return null;const ga={...At,name:C("nav."+At.key)||At.name};return ye!=null&&ye.visible_sub_pages&&(ga.subPages=At.subPages.filter(os=>{const Md=At.key+"."+os;return ye.visible_sub_pages[Md]!==!1})),At.key==="system"&&j==="guest"&&At.guestSubPages&&(ga.subPages=At.guestSubPages),ga}).filter(Boolean)});async function ze(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups/my");if(de.ok){const ye=await de.json();ae.value={[ye.group_id]:ye.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const Be=a("strategies"),xt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Tt=a(xt.navMode);function kt(j){const de=window.__quantModules&&window.__quantModules.navModeCore;Tt.value=de?de.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",de&&de.writePrefs({navMode:Tt.value})}const ke=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function we(j,de=""){l("light"),Be.value=j,te.value=de,localStorage.setItem("quant_last_subpage",de)}function Le(){const j=Ne.value;if(!j||!j.length)return;if(!j.some(function(je){return je.key===Be.value})){const je=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",je.key),Be.value=je.key,te.value=je.subPages&&je.subPages[0]||"";return}const ye=j.find(function(je){return je.key===Be.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(te.value)&&(te.value=ye.subPages[0])}const Pe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Je=a("multifactor"),Qe=a(null),$e=a(1e5),St=a(!1),ht=a(null);let vt=null,Dt=null;async function ea(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const de={initial_capital:$e.value||1e5};Qe.value&&Qe.value.length===2&&(de.start_date=Qe.value[0],de.end_date=Qe.value[1]),St.value=!0,ht.value=null;try{const ye=await fetch("/api/strategies/"+Je.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)});if(!ye.ok){const Vt=await ye.json().catch(()=>({}));throw new Error(Vt.detail||"回测失败")}const je=await ye.json(),Ge=je.result||{};if(!Ge.success)throw new Error(Ge.message||"回测失败");je.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),ht.value={total_return_pct:((Ge.total_return??0)*100).toFixed(2),annual_return_pct:((Ge.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ge.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ge.sharpe_ratio??0).toFixed(2),win_rate:((Ge.win_rate??0)*100).toFixed(2),out_sample:Ge.outsample_total_return===void 0?"":((Ge.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ge.overfit_warning||!1,message:Ge.message||""},z(Ge.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{St.value=!1}}function z(j){const de=document.getElementById("backtestEquityChart");if(!de||!j||j.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,je=()=>{Dt=j,vt&&(vt.dispose(),vt=null),vt=echarts.init(de),vt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ge=j.map(Wt=>Wt.date||Wt[0]),Vt=j.map(Wt=>Wt.value??Wt[1]);vt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ge,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Vt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(je).catch(()=>{}):je()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Dt&&z(Dt)}));const te=a("overview"),xe=t(()=>{const j=fe.find(de=>de.key===Be.value);return j?j.name:Be.value}),Ae=a(0),Ve=t(()=>{Ae.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},de=te.value;return Be.value==="shortterm"&&de==="market-review"?"qc-research-page":Be.value==="ops"&&de==="execution"?"qc-strategies-page":j[Be.value]||""}),yt=a(!1),Ye=a({}),Ke=a([]);a("");const dt=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),st=a("day"),Y=a("all"),ge=a(null);d(Ne,function(){Le()}),d([Be,te],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),de=localStorage.getItem("quant_token");if(j&&de)try{ge.value=JSON.parse(j)}catch{}}();const Xe=a(!1),mt=a("kline"),tt=a(null),It=a(!1),We=a(localStorage.getItem("qc_detail_mode")||"split"),Ct=a(window.innerWidth<=1024),Ft=t(()=>We.value==="split"&&!Ct.value);function zt(j){We.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{Ct.value=window.innerWidth<=1024});const lt=35,qt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Ht(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",qt.value?qt.value+"px":lt+"%")}Ht();function Gt(j){const de=Math.max(1,Math.min(j,2e3));qt.value=de,Ht();try{localStorage.setItem("qc_split_width",String(de))}catch{}}function ft(j){if(qt.value)return qt.value;const de=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(de*lt/100))}let rt=null;function Kt(j,de){if(!de||Ct.value)return;j.preventDefault();const ye=de.getBoundingClientRect().width;rt={startX:j.clientX,startW:ft(de),minW:Math.max(200,Math.floor(ye*lt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function Et(j){if(!rt)return;const de=j.clientX-rt.startX;let ye=rt.startW+de;ye=Math.max(rt.minW,Math.min(ye,rt.maxW)),qt.value=ye,Ht();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function $t(){rt&&(rt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Et),document.addEventListener("mouseup",$t));function Yt(j){const de=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!de)return;const ye=de.closest("[data-split-root]");Kt(j,ye)}typeof document<"u"&&document.addEventListener("mousedown",Yt,!0);const ta={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},pt=a({});function aa(j,de){return ta[de]||de}function sa(j){const de=fe.find(je=>je.key===j);if(!de||!de.subPages||!de.subPages.length)return;if(!(pt.value[j]||[]).length){const je=de.subPages[0];pt.value=Object.assign({},pt.value,{[j]:[{subPage:je,title:aa(j,je)}]})}}function ma(j,de){const ye=window.__quantModules&&window.__quantModules.tabsCore,je=aa(j,de);if(ye){const Ge=ye.openTab(pt.value,j,de,je);pt.value=Ge.groups}else{const Ge=pt.value[j]||[];Ge.some(Vt=>Vt.subPage===de)||(pt.value=Object.assign({},pt.value,{[j]:Ge.concat([{subPage:de,title:je}])}))}we(j,de)}function ha(j,de){const ye=window.__quantModules&&window.__quantModules.tabsCore,je=te.value;let Ge=null;if(ye)Ge=ye.closeTab(pt.value,j,de,je),pt.value=Ge.groups;else{const At=pt.value[j]||[];pt.value=Object.assign({},pt.value,{[j]:At.filter(ga=>ga.subPage!==de)})}if(!(pt.value[j]||[]).length){sa(j);const At=fe.find(os=>os.key===j),ga=At&&At.subPages&&At.subPages[0];ga&&we(j,ga);return}const Wt=Ge?Ge.nextActive:null;Wt&&we(j,Wt)}function la(j,de){if(!(pt.value[j]||[]).some(je=>je.subPage===de)){ma(j,de);return}we(j,de)}d([Be,te],([j,de])=>{sa(j);const ye=pt.value[j]||[];de&&!ye.some(je=>je.subPage===de)&&(pt.value=Object.assign({},pt.value,{[j]:ye.concat([{subPage:de,title:aa(j,de)}])}))},{immediate:!0});const H=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const de=Be.value,ye=pt.value[de]||[];if(ye.length<=1)return;j.preventDefault();const je=te.value,Ge=Math.max(0,ye.findIndex(At=>At.subPage===je)),Vt=j.shiftKey?(Ge-1+ye.length)%ye.length:(Ge+1)%ye.length,Wt=ye[Vt];Wt&&la(de,Wt.subPage)};window.addEventListener("keydown",H);const _e=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),Oe=a("light"),De=[45,220,0,140,270,320,-1],nt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},Ze=a(45),Pt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,de=j&&j.getPreference&&j.getPreference("theme_hue");de!=null&&de!==""&&(Ze.value=parseInt(de,10))})();const Nt=a("comfortable");(function(){const j=window.__quantModules&&window.__quantModules.preferences;j&&j.applyDensity&&(Nt.value=j.applyDensity()||"comfortable")})();function Bt(j){return j<0?"hsl(0, 0%, 46%)":"hsl("+j+", 75%, 42%)"}function pa(j){return nt[j]||"自定义 "+j}const ya=a(""),ba=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),na=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Pa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],oa=a({day:[],week:[],month:[],year:[]}),Ra=a({});function ra(j,de){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(j,de)),Oe.value=ye&&ye.mode?ye.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function qa(j,de){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:j}),de!=null&&de!==""&&ye.setPreferences({theme_hue:parseInt(de,10)})}catch{}}function Ot(j,de){ra(j,de),de!=null&&de!==""&&(Ze.value=parseInt(de,10));const ye=window.__quantModules&&window.__quantModules.themes;let je=j;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[j]&&(je=ye.LEGACY_MAP[j][0]),je==="light"||je==="dark"||je==="system"?Pt.value=je:Pt.value=Oe.value,je==="system"&&(je=Oe.value),qa(je,de),ge.value&&(fetch(`/api/users/${ge.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:je})}),ge.value.theme=je,localStorage.setItem("quant_user",JSON.stringify(ge.value)))}function wa(j){const de=window.__quantModules&&window.__quantModules.preferences,ye=de&&de.getPreference?de.getPreference("theme_hue"):null;Ot(j,ye)}function Ea(j){const de=window.__quantModules&&window.__quantModules.preferences;!de||!de.applyDensity||(Nt.value=de.applyDensity(j)||"comfortable",de.setPreference&&de.setPreference("info_density",Nt.value))}function za(j){Ze.value=parseInt(j,10);const de=window.__quantModules&&window.__quantModules.preferences,ye=de&&de.getPreference&&de.getPreference("theme")||"light";Ot(ye,Ze.value)}const ka=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function _(j){ka.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const i=t(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ka.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),V=a("daily");(function(){try{const de=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(de==="weekly"||de==="monthly")&&(V.value=de)}catch{}})();const oe=a(!1),Se=a(""),Ee=a(!1),ut=a(!1),Ue=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),bt=["MA5","MA10","MA20","MA60"],Jt=a(!1);let Mt=0;async function Qt(j){if(!tt.value)return!1;const de=++Mt;oe.value=!0,V.value=j;try{const je=await(await fetch(`/api/market/kline/${tt.value.stock}?period=${j}&limit=60`)).json();if(!je.success||!je.data)throw new Error(je.message||"数据获取失败");return Se.value=je.degraded_from?"分钟数据("+je.degraded_from+")暂不可用, 已降级展示日线":"",$s(tt.value.stock),de!==Mt?!1:(mt.value!=="kline"||(ut.value=!0,await g(),window.__quantModules.charts.renderKlineTo("stockKlineChart",je.data,j,!1,{isMobile:ms.value,onLegend:Ge=>{Object.keys(Ue.value).forEach(Vt=>{Vt in Ge&&(Ue.value[Vt]=!!Ge[Vt])})}}),fa()),!0)}catch(ye){return console.error("[kline] 加载失败:",tt.value&&tt.value.stock,j,ye),mt.value==="kline"&&(ut.value=!1,Se.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{oe.value=!1}}async function Xt(j){if(Ua.value){Ee.value=!0,V.value=j;try{const ye=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${j}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");Jt.value=!0,await g(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,j,!0,{isMobile:ms.value,onLegend:je=>{Object.keys(Ue.value).forEach(Ge=>{Ge in je&&(Ue.value[Ge]=!!je[Ge])})}}),fa()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Ee.value=!1}}}async function wt(j){if(!ut.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Qt(j)}async function et(j){if(!Jt.value){ElementPlus.ElMessage.info("请先加载K线");return}await Xt(j)}function jt(j){const de=(Xe.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);de&&de.dispatchAction({type:"legendToggleSelect",name:j})}function fa(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{Ue.value[j]=!0})}async function gt(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const de=await j.json(),ye=Array.isArray(de)?de:de&&de.data_sources||[];Ke.value=ye}const Ia=()=>ls,dn=()=>Es,un=()=>Bo,vn=()=>Aa,mn=()=>ts,pn=window.__quantAppLogic.data.create({currentView:st,statusFilter:Y,dashboardData:Ye,loadHealthMetrics:gt,getLoadDashboardData:Ia,getLastRefreshTime:dn,getFetchPoolSignals:un}),{loading:fn,loadingView:gn,viewCache:hn,dates:Na,selectedDate:Zt,lastLoadTime:yn,consensus:_a,viewNote:bn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ma,loadDashboardCached:Oa}=pn,wn=window.__quantAppLogic.market.create({currentKlinePeriod:V,loadIndexKline:Xt,rememberDialogTrigger:P,menus:Ne,currentPage:Be,currentSubPage:te,stockDetail:tt,selectedDate:Zt}),{marketData:kn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,fetchMarketData:Ga,showIndexDetail:Sn,loadCachedIndexEval:Cn,doIndexAiEvaluate:qn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:En,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Pn,onTouchEnd:Rn}=wn,zn=window.__quantAppLogic.ops.create({navigateTo:we,currentPage:Be,currentSubPage:te}),{feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,testFeishuWebhook:In,saveFeishuConfig:Nn,aiFabHidden:On,openAiFab:fs,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,tourVisible:si,tourStep:ni,tourSteps:ii,maybeShowTour:li,skipTour:oi,finishTour:ri,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui}=zn,vi=window.__quantAppLogic.nav.create({currentView:st,selectedDate:Zt,dates:Na,loadConsensusData:Ma,hapticFeedback:l}),{viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,switchView:_s,navigateDate:xs,disabledDate:yi,onDateChange:bi}=vi,wi=window.__quantAppLogic.keys.create({menus:Ne,subPageNames:ta,navigateTo:we,currentPage:Be,currentView:st,navigateDate:xs,switchView:_s,getLoadDashboardData:Ia,refreshCalendarData:ds,getLoadAiHistory:vn,exportCSV:us,getShowBatchEvaluate:mn,openAiFab:fs,toggleSidebar:re,showStockDetail:Cs}),{searchQuery:ki,searchStocks:_i,onSearchSelect:xi,shortcutHelpVisible:Si,commandPaletteVisible:Ci,handleGlobalKeydown:Ss}=wi;let ja=0;async function Cs(j){const de=++ja;P(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),Xa.value=null,V.value="daily",ut.value=!1,mt.value="kline",tt.value=null,It.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Xe.value=!0,g(()=>Ja());try{const ye=await fetch(`/api/calendar/stock/${j}?date=${Zt.value}`);if(de!==ja)return;tt.value=await ye.json(),tt.value&&tt.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,tt.value.name)}catch{if(de!==ja)return;ElementPlus.ElMessage.error("加载失败"),tt.value={stock:j,name:"",total_days:0}}finally{de===ja&&(It.value=!1)}setTimeout(async()=>{await Qt("daily"),Ya()},500),as(j)}const qi={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ei={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Mi(j){return qi[j]||"var(--text-tertiary)"}function Ti(j){return Ei[j]||"var(--bg-hover)"}const Di=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ut,stockDetailVisible:Xe,stockDetailTab:mt,stockDetail:tt,disposeStockKline:vs}):{},{chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll}=Di,ol=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ge,applyTheme:ra,allMenuDefs:fe,loadGroupConfig:ze}):{},{userList:rl,userSearch:cl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,filteredUsers:pl,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,editingGroup:xl,menuConfigDialog:Sl,memberDialog:Cl,groupEditForm:ql,subPageCache:El,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,allGroups:Jl,getGroupName:Ql,loadAllGroups:$a,loadUsers:Va,editUser:$l,saveUser:Xl,deleteUser:Zl,toggleUserEnabled:eo,resetUserPassword:to}=ol,ao=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Be,currentSubPage:te,dashboardData:Ye,searchKeyword:ya,statusFilter:Y,strategyFilter:na,strategyFilterCounts:oa}):{},{applyStrategyFilter:Rf,statusCounts:so,stockPool:no,strategyDistribution:io,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,poolChangeBadge:vo,timeBarPercent:mo,lastRefreshTime:Es,navigateToStrategyFilter:po}=ao,fo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:A,consensus:_a}):{},{aiResult:Xa,lastEvalTime:go,evalHistoryComparison:ho,checklistItems:yo,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ds,expandedMonths:bo,expandedStocks:Ps,poolSignals:wo,toggleMonthExpand:ko,aiHistoryView:_o,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:xo,aiCatalog:So,aiModelsError:Co,testingAllModels:qo,savingAiModels:Eo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Mo,testVendorModel:To,testAllVendorModels:Do,fetchVendorModels:Po,addVendorFromCatalog:Ro,addCustomVendor:zo,addVendorModel:Ao,removeVendorModel:Lo,removeVendor:Io,toggleVendorKeyReveal:No,toggleVendorEdit:Oo,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:jo,providerInfo:Vo,aiPresets:zf,applyPreset:Fo,onProviderChange:Ho,fetchPoolSignals:Bo,cancelPoolSignals:Qs,loadLastEvaluation:as}=fo,Ko=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ge,selectedDate:Zt,stockDetail:tt,stockDetailTab:mt,stockDetailVisible:Xe,stockDetailLoading:It,stockKlineLoaded:ut,viewCache:hn,animateScoreEntrance:Ja,loadStockKline:Qt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ds,expandedStocks:Ps,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Wo,evalStrategy:Uo,watchlistSort:Go,watchlist:Yo,watchlistCodes:Jo,sortedWatchlist:Qo,getWatchlistScore:$o,getLatestScore:Af,addSearchResult:Xo,evaluatedCodes:Zo,klineLoadedCodes:er,markKlineLoaded:$s,watchlistSearch:tr,watchlistResults:ar,watchlistSearching:sr,dataRefreshConfig:nr,dataRefreshReloading:ir,dataRefreshSaving:lr,aiHistoryLoading:or,aiHistoryError:rr,aiHistoryTotal:cr,aiHistoryLoadingMore:dr,hasMoreAiHistory:ur,loadMoreAiHistory:vr,watchlistLoading:mr,doAiEvaluate:pr,loadAiHistory:Aa,deleteSingleHistory:fr,toggleSelectHistory:gr,clearSelection:hr,clearWatchlistSelection:yr,batchReevaluateHistory:br,batchAddToWatchlist:wr,batchRemoveWatchlist:kr,toggleSelectWatchlist:_r,selectAllHistory:xr,selectAllWatchlist:Sr,deleteSelectedHistory:Cr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:qr,loadWatchlist:Zs,addToWatchlist:Er,removeFromWatchlist:Mr,clearWatchlist:Tr,toggleWatchlist:Dr,showStockKline:Pr,preloadingKline:Rr,preloadWatchlistKline:en,watchlistEvaluate:zr,batchEvaluateWatchlist:Ar,batchEvaluateSelected:Lr,searchStockForWatchlist:Ir,loadDataRefreshConfig:tn,saveDataRefreshConfig:Nr,triggerDataReload:Or,triggerDataPull:jr,dataPullRunning:Vr,groupedByDate:Fr,aiHistoryByStock:Hr,groupedByMonth:Br,aiHistoryStockCount:Kr,scoreDistribution:Wr,quickEvaluate:Ur,toggleDateExpand:Gr,toggleSelectDate:Yr,toggleSelectMonth:Jr,toggleStockExpand:Qr,toggleSelectStock:$r,registerTrendChart:Xr,viewAiResult:Zr,doBatchEvaluate:ec,realtimeQuotes:tc,realtimeDegraded:ac,realtimeWsState:sc,connectRealtimeQuotes:nc,disconnectRealtimeQuotes:ic,quoteWarningFor:lc,realtimeQuoteColor:oc,realtimePriceText:rc,realtimePctText:cc,realtimeRatioText:dc,REALTIME_DEGRADED_TEXT:uc,REALTIME_FALLBACK_TEXT:vc}=Ko,mc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Pe}):{},{btStrategyOptions:pc,btSelectedStrategies:fc,toggleBtStrategy:gc,btDateRange:hc,btCapital:yc,btCommissionRate:bc,btIncludeBenchmark:wc,btRunning:kc,btResult:_c,btError:xc,btMetrics:Sc,btAnnualReturns:Cc,btTrades:qc,btStrategyMetricsRows:Ec,btDrawdownRegion:Mc,runBacktestWorkbench:Tc,exportBacktestCSV:Dc,registerBacktestNavChart:Pc,btFmtNum:Rc}=mc,zc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:A,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Oe,changeTheme:Ot,autoEvaluateConfig:Za,currentUser:ge,strategyFilter:na,applyTheme:ra,dashboardData:Ye,lastRefreshTime:Es,saveAiModels:Mo}):{},{configSaving:Ac,globalConfigDirty:Lc,lastSavedTime:Ic,feishuConfigOriginal:Lf,aiConfigOriginal:If,tushareConfigOriginal:Nf,tushareConfig:Nc,tushareStatus:Oc,datasourceConfig:jc,datasourceStatus:Vc,syncingData:Fc,stockCount:Hc,tradeDateCount:Bc,aiStatus:Kc,appVersion:an,showImportDialog:Wc,rateLimitConfig:Uc,rateLimitDirty:Gc,rateLimitSaving:Yc,loadRateLimit:ss,saveRateLimit:Jc,saveAiConfig:Qc,testAiApi:$c,exportConfig:Xc,importConfig:Zc,saveAllConfig:ed,resetAllConfig:td,testTushareConnection:ad,checkTushareConnection:Ha,syncStockData:sd,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:nd,testDatasource:id,toggleDatasourceKeyReveal:ld,toggleDatasourceEdit:od,loadFeishuConfig:ns,loadAiConfig:Ba,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=zc,rd=window.__quantAppLogic.auth.create({currentUser:ge,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Oa,loadHealthMetrics:gt,loadConsensusData:Ma,applyTheme:ra,maybeShowTour:li,loadAiVendors:Fa,loadGroupConfig:ze,groupsConfig:ae}),{loginForm:cd,logining:dd,guestLogining:ud,showChangePassword:vd,changePasswordForm:md,changingPassword:pd,showSetupWizard:fd,setupForm:gd,setupStep:hd,checkSetupWizard:yd,completeSetupWizard:bd,resetSetupWizard:wd,handleLogin:kd,handleGuestLogin:_d,handleLogout:xd,doChangePassword:Sd}=rd;window.__quantAppLogic.watch.register({strategyFilter:na,currentView:st,statusFilter:Y,currentPage:Be,currentSubPage:te,menus:Ne,currentUser:ge,strategyFilterCounts:oa,lazyTick:Ae,dates:Na,selectedDate:Zt,consensus:_a,loadConsensusData:Ma,fetchMerrillClock:M,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Ha,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:gt,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ba,loadAiVendors:Fa,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:Va,stockDetailTab:mt,stockDetailVisible:Xe,stockKlineLoaded:ut,loadStockKline:Qt,currentKlinePeriod:V,showMerrillDetail:B,indexDetailVisible:Wa,restoreDialogFocus:E});const Cd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ra,menus:Ne,currentPage:Be,currentSubPage:te,currentView:st,currentKlinePeriod:V,selectedDate:Zt,dates:Na,loadDates:cs,loadConsensusData:Ma,loadDashboardCached:Oa,appVersion:an,themes:_e,fetchMarketData:Ga,fetchMerrillStages:G,fetchMerrillClock:M,loadMerrillTimeline:W,showTimelineStage:ie,merrillTimeline:ue,timelineLoading:Me,loadAiConfig:Ba,loadAiVendors:Fa,loadAiCatalog:Is,currentUser:ge,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:ze,loadUsers:Va,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:qd}=Cd;window.__quantGoPage=async(j,de)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[j];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",j,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Ae&&Ae.value++,Be.value=j,de&&(te.value=de)};let Ta;d(Be,async j=>{var de;l("light");try{const ye=fe.find(function(je){return je.key===j});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Ta&&(clearInterval(Ta),Ta=null),j==="strategies")await Oa(),Ta=setInterval(()=>{Oa().catch(()=>{})},5*60*1e3);else if(j==="calendar")Zt.value&&await Ma();else if(j==="ai")gs(),Qa(),await Aa();else if(j==="system"){if(!Zt.value){const je=await(await fetch("/api/dashboard")).json(),Ge=je.data||je;Ge.latest_date&&(Zt.value=Ge.latest_date)}if(Zt.value){const ye=["day","week","month","year"];for(const je of ye)try{const Vt=await(await fetch(`/api/view/${je}/${Zt.value}?status=all`)).json();oa.value[je]=Vt.stocks||[]}catch(Ge){console.warn("loadConsensusData view load failed:",Ge)}(!_a.value||_a.value.length===0)&&(_a.value=oa.value.day||[])}((de=ge.value)==null?void 0:de.role)==="admin"&&(await Va(),await ns(),await sn(),await is(),await Ba(),await ss(),Ha(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ha,36e5)))}}),b(async()=>{await qd()}),se(),W(),e(()=>{Ta&&clearInterval(Ta),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",H)});function Ed(j,de=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(de)}return{currentPage:Be,pageComp:Ve,currentSubPage:te,sidebarCollapsed:qe,menus:Ne,navMode:Tt,setNavMode:kt,tabGroups:pt,openTab:ma,closeTab:ha,activateTab:la,fmtNum:Ed,sanitizeHtml:T,keyClick:S,isOnline:v,currentUser:ge,allMenuDefs:fe,t:C,locale:o,changeLanguage:x,currentPageName:xe,subPageNames:ta,searchQuery:ki,searchStocks:_i,onSearchSelect:xi,selectedDate:Zt,onDateChange:bi,disabledDate:yi,refreshCalendarData:ds,exportCSV:us,viewNote:bn,loading:fn,lastLoadTime:yn,resetSetupWizard:wd,showChangePassword:vd,themes:_e,currentTheme:Oe,changeTheme:Ot,changeThemeMode:wa,changeThemeHue:za,handleLogout:xd,themeHues:De,themeHueNames:nt,themeHue:Ze,themeMode:Pt,hueColor:Bt,hueName:pa,density:Nt,changeDensity:Ea,marketData:kn,merrillData:O,merrillTimeline:ue,timelineLoading:Me,merrillStagesConfig:K,fetchMerrillStages:G,merrillSnapshots:Te,merrillSnapshotsTotal:ve,healthMetrics:Ke,feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,shortcutHelpVisible:Si,shortcutHelpItems:ke,commandPaletteVisible:Ci,tourVisible:si,tourStep:ni,tourSteps:ii,skipTour:oi,finishTour:ri,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:On,openAiFab:fs,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui,backtestStrategies:Pe,backtestStrategy:Je,backtestRange:Qe,backtestCapital:$e,backtestRunning:St,backtestResult:ht,runBacktest:ea,btStrategyOptions:pc,btSelectedStrategies:fc,toggleBtStrategy:gc,btDateRange:hc,btCapital:yc,btCommissionRate:bc,btIncludeBenchmark:wc,btRunning:kc,btResult:_c,btError:xc,btMetrics:Sc,btAnnualReturns:Cc,btTrades:qc,btStrategyMetricsRows:Ec,btDrawdownRegion:Mc,runBacktestWorkbench:Tc,exportBacktestCSV:Dc,registerBacktestNavChart:Pc,btFmtNum:Rc,fetchMarketData:Ga,fetchMerrillClock:M,testFeishuWebhook:In,saveFeishuConfig:Nn,merrillClockConfig:Q,merrillClockLastUpdated:I,merrillReevalResult:N,merrillReevalLoading:F,saveMerrillClockConfig:ce,doMerrillReevaluate:Re,dataRefreshConfig:nr,dataRefreshReloading:ir,dataRefreshSaving:lr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Nr,triggerDataReload:Or,triggerDataPull:jr,dataPullRunning:Vr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,loadCachedIndexEval:Cn,showIndexDetail:Sn,doIndexAiEvaluate:qn,klinePeriods:i,currentKlinePeriod:V,klineLoading:oe,indexKlineLoading:Ee,stockKlineLoaded:ut,indexKlineLoaded:Jt,klineDegradeNote:Se,klineShowMinutes:ka,toggleKlineShowMinutes:_,loadStockKline:Qt,switchKlinePeriod:wt,loadIndexKline:Xt,switchIndexKlinePeriod:et,zoomKlineRange:En,MA_LINES:bt,klineMaVisible:Ue,toggleKlineMa:jt,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:B,merrillDetailData:U,showStageDetail:$,getCharLabel:u,getAssetName:R,getRankColor:le,levelColor:Mi,levelBg:Ti,timelineStages:s,getStageAngle:X,getCycleProgress:D,getCurrentStageMonths:p,getStageTotalMonths:r,isStageCompleted:k,stages:J,indicatorList:Z,dimensionScoreList:ne,confidenceColor:L,views:dt,currentView:st,statusFilter:Y,loginForm:cd,logining:dd,guestLogining:ud,dashboardData:Ye,loadingView:gn,dates:Na,consensus:_a,searchKeyword:ya,stockDetailVisible:Xe,stockDetailTab:mt,stockDetail:tt,stockDetailLoading:It,detailDisplayMode:We,setDetailDisplayMode:zt,isNarrow:Ct,detailSplitEnabled:Ft,splitWidth:qt,setSplitWidth:Gt,SPLIT_DEFAULT_PCT:lt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:rl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,userSearch:cl,filteredUsers:pl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,statusCounts:so,stockPool:no,poolSignals:wo,aiResult:Xa,aiHistory:Ms,groupedByDate:Fr,groupedByMonth:Br,expandedDates:Ds,expandedMonths:bo,aiHistoryByStock:Hr,aiHistoryStockCount:Kr,expandedStocks:Ps,aiHistoryView:_o,aiHistoryLoading:or,aiHistoryError:rr,aiHistoryTotal:cr,aiHistoryLoadingMore:dr,hasMoreAiHistory:ur,loadMoreAiHistory:vr,watchlistLoading:mr,scoreDistribution:Wr,quickEvalStock:Wo,evalStrategy:Uo,checklistItems:yo,evalHistoryComparison:ho,quickEvaluate:Ur,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:ba,toggleDateExpand:Gr,toggleMonthExpand:ko,toggleSelectDate:Yr,toggleSelectMonth:Jr,toggleSelectStock:$r,toggleStockExpand:Qr,registerTrendChart:Xr,selectedWatchlistCodes:Rs,clearWatchlistSelection:yr,toggleSelectWatchlist:_r,selectAllHistory:xr,selectAllWatchlist:Sr,batchRemoveWatchlist:kr,batchEvaluateSelected:Lr,batchReevaluateHistory:br,batchAddToWatchlist:wr,viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,handleLogin:kd,handleGuestLogin:_d,switchView:_s,navigateDate:xs,navigateTo:we,loadDashboardData:ls,loadConsensusData:Ma,showStockDetail:Cs,doAiEvaluate:pr,doBatchEvaluate:ec,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:go,viewAiResult:Zr,saveAiConfig:Qc,testAiApi:$c,exportConfig:Xc,importConfig:Zc,configSaving:Ac,configChanged:A,watchlist:Yo,watchlistCodes:Jo,watchlistSearch:tr,watchlistResults:ar,watchlistSearching:sr,watchlistSort:Go,sortedWatchlist:Qo,getWatchlistScore:$o,addSearchResult:Xo,evaluatedCodes:Zo,klineLoadedCodes:er,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:Er,removeFromWatchlist:Mr,clearWatchlist:Tr,searchStockForWatchlist:Ir,toggleWatchlist:Dr,batchEvaluateWatchlist:Ar,watchlistEvaluate:zr,showStockKline:Pr,preloadWatchlistKline:en,preloadingKline:Rr,realtimeQuotes:tc,realtimeDegraded:ac,realtimeWsState:sc,connectRealtimeQuotes:nc,disconnectRealtimeQuotes:ic,quoteWarningFor:lc,realtimeQuoteColor:oc,realtimePriceText:rc,realtimePctText:cc,realtimeRatioText:dc,REALTIME_DEGRADED_TEXT:uc,REALTIME_FALLBACK_TEXT:vc,toggleSelectHistory:gr,clearSelection:hr,deleteSingleHistory:fr,deleteSelectedHistory:Cr,saveAutoEvaluateConfig:qr,editUser:$l,saveUser:Xl,deleteUser:Zl,loadUsers:Va,allGroups:Jl,loadAllGroups:$a,getGroupName:Ql,toggleUserEnabled:eo,resetUserPassword:to,selectedPreset:jo,applyPreset:Fo,onProviderChange:Ho,providerInfo:Vo,globalConfigDirty:Lc,lastSavedTime:Ic,tushareConfig:Nc,tushareStatus:Oc,syncingData:Fc,stockCount:Hc,tradeDateCount:Bc,aiStatus:Kc,appVersion:an,showImportDialog:Wc,rateLimitConfig:Uc,rateLimitDirty:Gc,rateLimitSaving:Yc,loadRateLimit:ss,saveRateLimit:Jc,saveAllConfig:ed,resetAllConfig:td,testTushareConnection:ad,syncStockData:sd,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ba,aiVendors:xo,aiCatalog:So,aiModelsError:Co,testingAllModels:qo,savingAiModels:Eo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:To,testAllVendorModels:Do,fetchVendorModels:Po,addVendorFromCatalog:Ro,addCustomVendor:zo,addVendorModel:Ao,removeVendorModel:Lo,removeVendor:Io,toggleVendorKeyReveal:No,toggleVendorEdit:Oo,checkTushareConnection:Ha,datasourceConfig:jc,datasourceStatus:Vc,loadDatasourceConfig:nn,saveDatasourceConfig:nd,testDatasource:id,toggleDatasourceKeyReveal:ld,toggleDatasourceEdit:od,strategyFilter:na,strategyFilterOptions:Pa,strategyFilterCounts:oa,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,strategyDistribution:io,expandedStrategies:Ra,poolChangeBadge:vo,timeBarPercent:mo,navigateToStrategyFilter:po,showUserMenu:yt,toggleSidebar:re,groupsConfig:ae,loadGroupConfig:ze,editingGroup:xl,groupEditForm:ql,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,menuConfigDialog:Sl,memberDialog:Cl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,subPageCache:El,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,changePasswordForm:md,changingPassword:pd,doChangePassword:Sd,showSetupWizard:fd,setupForm:gd,setupStep:hd,checkSetupWizard:yd,completeSetupWizard:bd,chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll,onTouchStart:Pn,onTouchEnd:Rn,hapticFeedback:l}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=im;window.__quantComponents.Header=np;window.__quantComponents.SubNav=hp;window.__quantComponents.MobileNav=Ip;window.__quantComponents.StockList=hf;window.__quantComponents.DetailSplit=kf;window.__quantComponents.TopTabs=Df;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Pf();
