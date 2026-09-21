var Rd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as zd,L as ve,O as ga,Z as Ad,au as Vt,M as pe,P as he,aW as Ld,a0 as Le,_ as Ke,F as it,al as Ct,S as ot,a1 as st,X as ta,ai as jt,q as Ra,o as za,a8 as us,r as bt,e as tt,av as Id,Y as ja,$ as qa,R as Nd,aC as pa,T as Od,Q as oa,p as jd,n as Vd}from"./vendor-vue-DDF9zi1T.js";import{e as Fd,E as Hd,a as Bd,b as Kd,c as Wd,z as Ud}from"./vendor-ep-VOop1zGa.js";import{C as Gd,a as Yd,W as Jd,I as Qd,S as $d,B as Xd,F as Zd,b as eu,c as tu,d as au,e as su,f as nu,P as lu,g as iu,h as ou,i as ru,T as cu,j as du,L as uu,k as vu,G as mu,U as fu,l as pu,m as gu,n as hu,D as yu,o as bu,p as wu,M as ku,q as _u,R as xu,r as Su,s as Cu,K as qu,t as Eu,u as Mu,v as Tu,w as Pu,x as Du,y as Ru,z as zu,A as Au,E as Lu,H as Iu,O as Nu,J as Ou,N as ju,Q as Vu,V as Fu,X as Hu,Y as Bu,Z as Ku,_ as Wu,$ as Uu,a0 as Gu,a1 as Yu,a2 as Ju,a3 as Qu,a4 as $u,a5 as Xu,a6 as Zu,a7 as ev,a8 as tv,a9 as av,aa as sv,ab as nv,ac as lv,ad as iv,ae as ov,af as rv,ag as cv,ah as dv,ai as uv,aj as vv,ak as mv,al as fv,am as pv,an as gv,ao as hv,ap as yv,aq as bv,ar as wv,as as kv,at as _v,au as xv,av as Sv,aw as Cv,ax as qv,ay as Ev,az as Mv,aA as Tv,aB as Pv,aC as Dv,aD as Rv,aE as zv,aF as Av,aG as Lv,aH as Iv,aI as Nv,aJ as Ov,aK as jv,aL as Vv,aM as Fv,aN as Hv,aO as Bv,aP as Kv,aQ as Wv}from"./vendor-lucide-DidEUx9K.js";var ig=Rd((yg,Te)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))e(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const k of d.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&e(k)}).observe(document,{childList:!0,subtree:!0});function m(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(c){if(c.ep)return;c.ep=!0;const d=m(c);fetch(c.href,d)}})();window.Vue=zd;const ha=Fd||{};window.ElementPlus=ha;ha.ElMessage=ha.ElMessage||Hd;ha.ElMessageBox=ha.ElMessageBox||Bd;ha.ElNotification=ha.ElNotification||Kd;ha.ElLoading=ha.ElLoading||Wd;window.ElementPlusLocaleZhCn={default:Ud};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},m={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,y,i){return"hsl("+s+", "+y+"%, "+i+"%)"}function c(s,y,i){y=y/100,i=i/100;const h=function(w){return(w+s/30)%12},X=y*Math.min(i,1-i),z=function(w){return i-X*Math.max(-1,Math.min(h(w)-3,Math.min(9-h(w),1)))};return Math.round(255*z(0))+", "+Math.round(255*z(8))+", "+Math.round(255*z(4))}const d=5;function k(s,y,i){return c(s,y,i).split(",").map(function(h){return parseInt(h,10)})}function r(s){const y=function(i){return i=i/255,i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*y(s[0])+.7152*y(s[1])+.0722*y(s[2])}function n(s,y){const i=r(s),h=r(y),X=Math.max(i,h),z=Math.min(i,h);return(X+.05)/(z+.05)}function p(s,y,i){for(var h=8,X=92,z=0;z<26;z++){var w=(h+X)/2;r(k(s,y,w))<i?h=w:X=w}return Math.round(X*10)/10}function o(s,y,i,h,X){let z=38,w=76;for(let f=0;f<24;f++){const C=(z+w)/2;n(k(s,h,C),k(s,y,i))>=X?w=C:z=C}return Math.round(w*10)/10}function _(s,y){var i={};return y==="light"?(i["--qc-neutral-50"]=e(s,18,98),i["--qc-neutral-100"]=e(s,16,95),i["--qc-neutral-200"]=e(s,14,90),i["--qc-neutral-300"]=e(s,12,83),i["--qc-neutral-400"]=e(s,10,68),i["--qc-neutral-500"]=e(s,10,53),i["--qc-neutral-600"]=e(s,10,40),i["--qc-neutral-700"]=e(s,10,30),i["--qc-neutral-800"]=e(s,10,20),i["--qc-neutral-900"]=e(s,10,12),i["--qc-background"]=e(s,18,98),i["--qc-muted"]=e(s,16,95),i["--qc-border"]=e(s,12,72),i["--chart-axis"]=e(s,12,55),i["--chart-split"]=e(s,10,88),i["--qc-foreground"]=e(s,10,12),i["--qc-muted-foreground"]=e(s,9,38),i["--qc-nav-item-default"]=e(s,9,38),i["--qc-nav-item-hover"]=e(s,10,12),i["--qc-nav-group-label"]=e(s,9,40),i["--qc-nav-bg"]="#ffffff",i["--bg-page"]=e(s,20,97),i["--bg-stripe"]=e(s,20,97),i["--bg-card-header"]=e(s,24,96),i["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",i["--bg-hover"]=e(s,26,94),i["--bg-tertiary"]=e(s,14,93),i["--badge-gold-bg"]=e(s,26,96),i["--gold-bg"]=e(s,20,97),i["--border-light"]=e(s,22,89),i["--border-base"]=e(s,24,79),i["--border-color"]=e(s,14,88),i["--text-primary"]=e(s,12,12),i["--text-secondary"]=e(s,12,32),i["--text-tertiary"]=e(s,14,40),i["--text-disabled"]=e(s,9,M(s,9,V(s,18,98),25,70,!0,3.2)),i["--qc-card"]="#ffffff",i["--qc-popover"]="#ffffff",i["--qc-nav-border"]=e(s,12,72),i["--qc-nav-item-hover-bg"]=e(s,16,95),i["--qc-overlay"]="rgba(31, 29, 26, 0.5)",i["--bg-card"]="#ffffff",i["--surface"]="#ffffff",i["--border-heavy"]=e(s,22,72),i["--surface-canvas"]=e(s,18,98),i["--surface-card"]="#ffffff",i["--surface-raised"]="#ffffff",i["--surface-sunken"]=e(s,16,96),i["--surface-input"]="#ffffff",i["--surface-hover"]=e(s,26,94),i["--border-strong"]=e(s,22,72),i["--scrollbar-thumb"]="rgba("+c(s,12,72)+", 0.5)",i["--bg-page-rgb"]=c(s,20,97)):(i["--qc-background"]=e(s,10,8),i["--qc-card"]=e(s,11,11),i["--qc-popover"]=e(s,11,11),i["--qc-muted"]=e(s,12,14),i["--qc-border"]=e(s,14,30),i["--chart-axis"]=e(s,16,52),i["--chart-split"]=e(s,14,26),i["--qc-nav-bg"]=e(s,10,9),i["--qc-nav-border"]=e(s,13,22),i["--qc-nav-item-hover-bg"]=e(s,12,14),i["--bg-page"]=e(s,10,8),i["--bg-card"]=e(s,11,11),i["--bg-card-header"]=e(s,12,14),i["--bg-stripe"]=e(s,10,9),i["--bg-hover"]=e(s,12,14),i["--bg-tertiary"]=e(s,12,14),i["--border-light"]=e(s,13,18),i["--border-base"]=e(s,14,26),i["--border-heavy"]=e(s,16,38),i["--border-color"]=e(s,13,22),i["--surface"]=e(s,11,11),i["--surface-canvas"]=e(s,10,8),i["--surface-card"]=e(s,11,11),i["--surface-raised"]=e(s,12,14),i["--surface-sunken"]=e(s,12,9),i["--surface-input"]=e(s,12,9),i["--surface-hover"]=e(s,12,15),i["--border-strong"]=e(s,16,42),i["--scrollbar-thumb"]="rgba("+c(s,16,52)+", 0.5)",i["--bg-page-rgb"]=c(s,10,8),i["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),i}const b=4.6;var S=[255,255,255];function x(s){return c(s,10,8).split(",").map(function(y){return parseInt(y,10)})}function M(s,y,i,h,X,z,w){for(var f=w||b,C=h,u=X,O=0;O<24;O++){var oe=(C+u)/2,J=n(k(s,y,oe),i)>=f;z?J?C=oe:u=oe:J?u=oe:C=oe}return Math.round((z?C:u)*10)/10}function V(s,y,i){return c(s,y,i).split(",").map(function(h){return parseInt(h,10)})}function P(s){const y=p(s,75,.18),i=p(s,75,.26),h=p(s,70,.36),X=p(s,85,.12),z=c(s,75,y),w=M(s,68,S,14,62,!0),f=Math.max(12,w-5),C=Math.max(10,w-11),u=c(s,16,95).split(",").map(function(U){return parseInt(U,10)}),O=c(s,85,92).split(",").map(function(U){return parseInt(U,10)}),oe=M(s,78,u,10,58,!0,4.6),J=M(s,80,O,10,58,!0,4.6),T=Math.min(32,M(s,80,S,8,60,!0,4.6));return{..._(s,"light"),"--primary-color":e(s,75,y),"--primary-rgb":z,"--color-primary":e(s,75,y),"--qc-primary":e(s,75,y),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,h),"--qc-primary-500":e(s,75,i),"--qc-primary-600":e(s,80,y),"--qc-primary-700":e(s,85,X),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--text-link":e(s,78,oe),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+z+", 0.08)","--btn-primary-bg":e(s,80,T),"--btn-primary-border":e(s,80,T),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+z+", 0.08)","--btn-primary-plain-border":"rgba("+z+", 0.25)","--btn-primary-plain-color":e(s,80,oe),"--btn-primary-plain-hover-bg":"rgba("+z+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,oe),"--gradient":"linear-gradient(135deg, "+e(s,80,C)+" 0%, "+e(s,76,f)+" 50%, "+e(s,70,w)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,f)+" 0%, "+e(s,85,C)+" 100%)","--primary-text":e(s,78,oe),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,d)+5))+" 0%, "+e(s,58,o(s,45,14,58,d))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,J),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,J),"--qc-ring":e(s,75,M(s,75,V(s,18,98),25,70,!0,3.2)),"--brand-soft-text":e(s,80,M(s,80,V(s,80,84),10,58,!0,4.6)),"--border-control":e(s,16,M(s,16,V(s,18,98),30,80,!0,3.2))}}function v(s){const y=p(s,85,.34),i=p(s,85,.46),h=c(s,85,y),X=M(s,80,x(s),30,92,!1),z=Math.min(94,X+8),w=Math.min(96,X+16),f=V(s,55,22),C=V(s,10,9),u=h.split(",").map(function(ie){return parseInt(ie,10)}),O=[0,1,2].map(function(ie){return Math.round(u[ie]*.12+C[ie]*.88)}),oe=M(s,85,O,45,96,!1,4.6),J=M(s,85,f,45,96,!1,4.6),T=Math.min(94,M(s,92,f,45,96,!1,4.6)),U=Math.min(96,T+6);return{..._(s,"dark"),"--primary-color":e(s,85,y),"--primary-rgb":h,"--color-primary":e(s,85,y),"--qc-primary":e(s,90,y),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,i),"--qc-primary-600":e(s,90,y),"--qc-primary-700":e(s,92,T),"--qc-primary-800":e(s,90,U),"--qc-primary-900":e(s,92,Math.min(98,U+8)),"--text-link":e(s,85,J),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":e(s,85,J),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,J),"--gradient":"linear-gradient(135deg, "+e(s,80,X)+" 0%, "+e(s,85,z)+" 50%, "+e(s,85,w)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,w)+" 0%, "+e(s,80,X)+" 100%)","--primary-text":e(s,85,J),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,d)+5))+" 0%, "+e(s,55,o(s,40,12,55,d))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,oe),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":e(s,85,oe),"--border-control":e(s,16,M(s,16,V(s,11,11),25,70,!1,3.2)),"--brand-soft-text":e(s,85,M(s,85,V(s,55,26),45,96,!1,4.6)),"--qc-ring":e(s,85,65)}}var l=[],g={mode:"light",hue:45},I=!1;function W(s,y){try{var i=document.querySelector('meta[name="theme-color"]');if(!i)return;var h=y?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];h&&i.setAttribute("content",h)}catch{}}function E(){if(!(I||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),y=function(){g.mode==="system"&&$("system",g.hue)};s.addEventListener?s.addEventListener("change",y):s.addListener&&s.addListener(y),I=!0}}function N(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var K=-1;function A(s){return s=parseInt(s,10),isNaN(s)?45:s<0?K:Math.max(0,Math.min(359,s))}function L(s){return Object.keys(s).forEach(function(y){var i=s[y];if(typeof i=="string"){i.indexOf("hsl(")>=0&&(i=i.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(f,C){return"hsl("+C+", 0%"}));var h=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(i);if(h){var X=Math.round(.2126*+h[1]+.7152*+h[2]+.0722*+h[3]);i="rgba("+X+", "+X+", "+X+(h[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(i)){var z=i.split(",").map(function(f){return parseInt(f,10)}),w=Math.round(.2126*z[0]+.7152*z[1]+.0722*z[2]);i=w+", "+w+", "+w}s[y]=i}}),s}function H(s,y){var i=V(45,0,y?22:95),h=V(45,0,y?8:98),X=V(45,0,y?11:100),z=y?M(45,0,i,45,96,!1,4.6):M(45,0,i,10,58,!0,4.6),w=V(45,0,y?22:92),f=y?M(45,0,w,45,96,!1,4.6):M(45,0,w,10,58,!0,4.6),C=y?M(45,0,h,45,96,!1,3.2):M(45,0,h,25,70,!0,3.2),u=y?M(45,0,X,25,70,!1,3.2):M(45,0,h,30,80,!0,3.2),O=y?M(45,0,V(45,0,26),45,96,!1,4.6):M(45,0,V(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+O+"%)";var oe="hsl(45, 0%, "+z+"%)";if(s["--primary-text"]=oe,s["--text-link"]=oe,s["--btn-primary-text-color"]=oe,s["--btn-primary-plain-color"]=oe,s["--qc-nav-item-active"]="hsl(45, 0%, "+f+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+f+"%)",s["--qc-ring"]="hsl(45, 0%, "+C+"%)",s["--border-control"]="hsl(45, 0%, "+u+"%)",y){var J=M(45,0,V(45,0,8),30,92,!1,4.6),T=Math.min(94,J+8),U=Math.min(96,J+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+J+"%) 0%, hsl(45, 0%, "+T+"%) 50%, hsl(45, 0%, "+U+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+U+"%) 0%, hsl(45, 0%, "+J+"%) 100%)"}else{var ie=M(45,0,S,14,62,!0,4.6),ge=Math.max(12,ie-5),qe=Math.max(10,ie-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+qe+"%) 0%, hsl(45, 0%, "+ge+"%) 50%, hsl(45, 0%, "+ie+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ge+"%) 0%, hsl(45, 0%, "+qe+"%) 100%)"}var Q=o(45,0,14,0,d);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Q+5)+"%) 0%, hsl(45, 0%, "+Q+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function $(s,y){let i=s||"light",h=y==null||y===""?null:y;if(t[s]){const O=t[s];i=O[0],h==null&&(h=O[1])}i==="system"&&(i=N()?"dark":"light");const X=i==="dark";h=A(h??45);const z=h===K,w=document.documentElement;w.setAttribute("data-theme",X?"dark-pro":"gold"),w.setAttribute("data-theme-mode",X?"dark":"light"),w.setAttribute("data-theme-neutral",z?"true":"false");let f=X?v(z?45:h):P(z?45:h);z&&(f=H(L(f),X));for(var C=Object.keys(f),u=0;u<l.length;u++)C.indexOf(l[u])===-1&&w.style.removeProperty(l[u]);C.forEach(function(O){w.style.setProperty(O,f[O])}),l=C,g.mode=typeof s=="string"&&s?s:"light",g.hue=h,W(f,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(h))}catch{}return{mode:X?"dark":"light",hue:h}}function ee(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return A(s)}catch{}var y=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(y&&y.getPreference){var i=y.getPreference("theme_hue");if(i!=null&&i!=="")return A(i)}return null}function le(s){var y=ee();return $(s,y??void 0)}function ae(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const y=t[s];return{mode:y[0],hue:y[1]}}function D(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let y=s.theme||"system",i=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const h=ae();return i==null&&h&&(y=h.mode,i=h.hue),i==null&&(i=45),E(),$(y,i)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:m,NEUTRAL_HUE:K,generateLightTokens:P,generateDarkTokens:v,migrateLegacyTheme:ae,persistedHue:ee,applyLegacyTheme:le,applyTheme:$,init:D},typeof queueMicrotask=="function"?queueMicrotask(D):D()})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],m={};let e=a,c=null;function d(){return c&&typeof c=="object"&&"value"in c?c.value||a:e}function k(b,S){return t.indexOf(b)===-1?!1:(m[b]=S&&typeof S=="object"?S:{},!0)}function r(b){const S=t.indexOf(b)!==-1?b:a;return e=S,c&&typeof c=="object"&&"value"in c&&(c.value=S),typeof document<"u"&&document.documentElement.setAttribute("lang",S),e}function n(){return d()}function p(b){if(b&&typeof b=="object"&&"value"in b){c=b;const S=t.indexOf(b.value)!==-1?b.value:a;b.value=S,e=S}return e}function o(b,S){const x=d(),M=m[x]||{};let V=b in M?M[b]:null;if(V==null&&x!=="en"){const P=m.en||{};V=b in P?P[b]:null}return V==null&&(V=String(b)),S&&typeof S=="object"&&Object.keys(S).forEach(function(P){V=V.replace(new RegExp("\\{"+P+"\\}","g"),String(S[P]))}),V}const _={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:m,registerLocale:k,setLocale:r,getLocale:n,bindLocale:p,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=_),_});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let m=[];function e(x){const M=String(x||"");let V="";for(const P of M){const v=a[P];v?V+=v.charAt(0):/[a-zA-Z0-9]/.test(P)&&(V+=P.toLowerCase())}return V}function c(x){const M=String(x||"");let V="";for(const P of M){const v=a[P];v?V+=v:/[a-zA-Z0-9]/.test(P)&&(V+=P.toLowerCase())}return V}function d(x){return String(x||"").trim().toLowerCase()}function k(x,M){const V=(M.code||"").toLowerCase();return/^\d+$/.test(x)?V.indexOf(x)!==-1:/[\u4e00-\u9fa5]/.test(x)?(M.name||"").toLowerCase().indexOf(x)!==-1:V.indexOf(x)!==-1||(M.initials||e(M.name)).indexOf(x)!==-1||(M.pinyin||c(M.name)).indexOf(x)!==-1}function r(x){const M={},V=[],P=function(v,l,g){!v||M[v]||(M[v]=!0,V.push({code:v,name:l||v,source:g||"core",initials:e(l||v),pinyin:c(l||v)}))};return t.forEach(function(v){P(v.code,v.name,"core")}),(x||[]).forEach(function(v){P(v.code,v.name,"extra")}),V}function n(x,M){const V=d(x);if(!V||!M||!M.length)return[];const P=V.split(/[\s,，、;；]+/).filter(Boolean);return P.length?M.filter(function(v){return P.every(function(l){return k(l,v)})}).slice(0,20).map(function(v){return{code:v.code,name:v.name,source:v.source||"core"}}):[]}function p(x){Array.isArray(x)&&(m=m.concat(x))}function o(){return m.slice()}function _(){return r(m)}function b(x){return n(x,_())}const S={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:c,normalizeQuery:d,matchToken:k,buildStockIndex:r,searchStocksByQuery:n,registerExtraStocks:p,getExtraStocks:o,getStockIndex:_,searchCoreStocks:b};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=S),S});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},m=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function c(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const d={light:"classic-white",dark:"dark-pro"};function k(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const g=JSON.parse(l);return g&&typeof g=="object"?g:{}}catch{return{}}}function r(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function n(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function p(){const l=Object.assign({},t,k()),g={};return m.forEach(function(I){const W=l[I];g[I]=I==="theme_hue"?c(W)?parseInt(W,10):t[I]:e[I].indexOf(W)!==-1?W:t[I]}),g}function o(l){if(m.indexOf(l)!==-1)return p()[l]}function _(l,g){return m.indexOf(l)===-1?!1:l==="theme_hue"?c(g):e[l].indexOf(g)!==-1}function b(l,g){if(!_(l,g))return!1;const I=k();return I[l]=g,r(I),n()&&x({[l]:g}),!0}function S(l){if(!l||typeof l!="object")return!1;const g={};if(Object.keys(l).forEach(function(W){_(W,l[W])&&(g[W]=l[W])}),!Object.keys(g).length)return!1;const I=Object.assign({},k(),g);return r(I),n()&&x(g),!0}function x(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function M(){const l=p();if(!n()||typeof fetch>"u")return l;try{const g=await fetch("/api/user_config/preferences");if(g.ok){const I=await g.json();if(I.success&&I.preferences){const W=I.preferences;m.forEach(function(E){const N=W[E];if(E==="theme_hue"){c(N)&&(l[E]=parseInt(N,10));return}e[E].indexOf(N)!==-1&&(l[E]=N)}),r(l)}}}catch(g){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",g&&g.message)}return l}function V(l){const g=l||o("info_density")||"comfortable",I=e.info_density.indexOf(g)!==-1?g:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",I),I}function P(l){const g=l||o("theme")||"system";if(g==="system"){let I=!1;return typeof window<"u"&&window.matchMedia&&(I=window.matchMedia("(prefers-color-scheme: dark)").matches),I?"dark":"light"}return g==="dark"||g==="light"?g:"light"}const v={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:m,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:d,getLocal:p,getPreference:o,isValidValue:_,setPreference:b,setPreferences:S,saveToBackend:x,loadPreferences:M,resolveTheme:P,applyDensity:V};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=v),v});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function m(){if(typeof localStorage>"u")return[];try{const p=localStorage.getItem(a);if(!p)return[];const o=JSON.parse(p);return Array.isArray(o)?o:[]}catch{return[]}}function e(p){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(p))}catch{}}function c(p,o){if(!p)return!1;let _=m().filter(function(b){return b.code!==p});return _.unshift({code:p,name:(o||"").toString().slice(0,32),ts:Date.now()}),_.length>10&&(_=_.slice(0,10)),e(_),!0}function d(){return m().slice(0,10)}function k(p){e(m().filter(function(o){return o.code!==p}))}function r(){e([])}const n={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:c,getRecentViewed:d,removeRecent:k,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=n),n});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:m,watch:e,onMounted:c,nextTick:d}=a;function k(f,C={}){if(typeof f=="string"&&f.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...C,headers:{...C.headers||{},Authorization:"Bearer "+u}}}return C}async function r(f,C={}){const u=k(f,C),O={"Content-Type":"application/json",...u.headers},oe=(C.method||"GET").toUpperCase(),J=oe+"|"+f,T=async()=>{const U=await fetch(f,{...u,headers:O});if(U.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!U.ok){let ie="";try{const ge=await U.json();ie=ge&&ge.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+U.status+"）"),{status:U.status})}return await U.json()};try{const U=C.noLoading?T:()=>g(T);return oe==="GET"&&!C.noDedupe?await V(J,U):await U()}catch(U){throw U.message==="登录已过期"?U:(console.error("[apiFetch] "+f+":",U.message),Object.assign(U,{_formatted:I(U,U.status)}))}}function n(){return new Date().toISOString().split("T")[0]}function p(f){return f?f.split("T")[0]:""}function o(f,C="info",u=3e3){let O=document.querySelector(".toast-container");O||(O=document.createElement("div"),O.className="toast-container",document.body.appendChild(O));const oe=document.createElement("div");oe.className=`toast toast-${C}`,oe.textContent=f,O.appendChild(oe),setTimeout(()=>{oe.classList.add("leaving"),setTimeout(()=>oe.remove(),300)},u)}function _(f,C=300){let u;return function(...O){clearTimeout(u),u=setTimeout(()=>f.apply(this,O),C)}}function b(f,C=300){let u=!1;return function(...O){u||(f.apply(this,O),u=!0,setTimeout(()=>{u=!1},C))}}async function S(f,C=3e3,u=""){const O=new Promise((oe,J)=>setTimeout(()=>J(new Error("timeout")),C));try{return await Promise.race([f,O])}catch(oe){console.warn(`[timeout] ${u||"task"} failed:`,oe.message)}}const x=new Map;function M(){return x.clear(),!0}function V(f,C){if(!f||typeof C!="function")return Promise.reject(new Error("bad dedupe args"));if(x.has(f))return x.get(f);const u=Promise.resolve().then(C).finally(()=>{x.delete(f)});return x.set(f,u),u}let P=0;function v(){return P=0,!0}function l(){return P}async function g(f){P++;try{return await f()}finally{P--}}function I(f,C){if(!f)return"请求失败";if(f&&typeof f=="object"&&f.detail)return String(f.detail);if(typeof f=="string"&&f)return f;if(f&&f.message){const u=String(f.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return C?"请求失败（HTTP "+C+"）":"请求失败"}function W(f,C){if(f===C)return!0;try{return JSON.stringify(f)===JSON.stringify(C)}catch{return!1}}function E(f,C,u){const O=(f||"GET").toUpperCase();let oe="";if(u)try{const J={};Object.keys(u).sort().forEach(T=>{J[T]=u[T]}),oe=JSON.stringify(J)}catch{oe=""}return O+"|"+C+"|"+oe}class N{constructor(){this._map=new Map,this._exp=new Map}get(C){const u=this._exp.get(C);if(u!=null){if(Date.now()>u){this.delete(C);return}return this._map.get(C)}}set(C,u,O){return this._map.set(C,u),this._exp.set(C,Date.now()+(O>0?O:-1)),u}delete(C){this._map.delete(C),this._exp.delete(C)}clear(){this._map.clear(),this._exp.clear()}has(C){return this.get(C)!==void 0}get size(){return this._map.size}}function K(f){const C=new N,u=f!=null&&f>0?f:15e3;return{store:C,defaultTtl:u,get:O=>C.get(O),set:(O,oe,J)=>C.set(O,oe,J??u),delete:O=>C.delete(O),clear:()=>C.clear(),size:()=>C.size}}const A=new Set;async function L(f){const C=f&&f.cache,u=f&&f.key,O=f&&(f.fetchFn||f.fetcher),oe=f&&f.ttl;if(!C||!u||typeof O!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(A.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};A.add(u);try{const J=C.get(u);let T;try{T=await O()}catch(ie){return f.onError&&f.onError(ie),{ok:!1,changed:!1,fresh:null}}const U=J!==void 0&&!W(J,T);return C.set(u,T,oe),f.apply&&f.apply(T,J),J!==void 0&&(U?f.onChanged&&f.onChanged(T,J):f.onUnchanged&&f.onUnchanged(T,J)),{ok:!0,changed:U,fresh:T}}finally{A.delete(u)}}const H=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function $(f,C={}){if(f==null)return"";const u=C&&C.allow||H,O=new Set(u.map(U=>String(U).toUpperCase()));let oe;try{oe=new DOMParser().parseFromString(String(f),"text/html")}catch{return String(f).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const J=oe.body||oe;function T(U){Array.from(U.childNodes).forEach(ie=>{if(ie.nodeType===1){const ge=String(ie.tagName).toUpperCase();if(O.has(ge))Array.from(ie.attributes).forEach(qe=>{const Q=qe.name.toLowerCase(),ue=(qe.value||"").trim().toLowerCase();(Q.startsWith("on")||(Q==="href"||Q==="src"||Q==="xlink:href")&&ue.startsWith("javascript:")||Q==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ue))&&ie.removeAttribute(qe.name),Q==="href"&&!/^(https?:|mailto:|#|\/)/.test(ue)&&ie.removeAttribute("href")}),ge==="A"&&ie.setAttribute("rel","noopener noreferrer"),T(ie);else{const qe=ie.parentNode;for(;ie.firstChild;)qe.insertBefore(ie.firstChild,ie);qe.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const ge=oe.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(ge,ie)}}})}return T(J),J.innerHTML}const ee="/api/openapi",le="/api/market/ws/quotes",ae=1,D=2.5,s="数据不可达",y="实时不可用，不刷新";function i(){const f=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",C=typeof location<"u"?location.host:"localhost:8001";return f+"//"+C+le}function h(f,C){if(!f)return null;const u=C||{riseSpeed:ae,volumeRatio:D},O=u.riseSpeed!=null?u.riseSpeed:ae,oe=u.volumeRatio!=null?u.volumeRatio:D,J=parseFloat(f.rise_speed);if(!isNaN(J)&&Math.abs(J)>O)return J>0?"涨速预警":"跌速预警";const T=parseFloat(f.volume_ratio);return!isNaN(T)&&T>oe?"放量预警":null}function X(f){const C=Number(f);return f==null||isNaN(C)?null:C}const w={apiFetch:r,withAuthHeaders:k,getToday:n,formatDate:p,withTimeout:S,showToast:o,debounce:_,throttle:b,resetInFlight:M,dedupeRequest:V,resetLoading:v,loadingCount:l,withLoading:g,formatApiError:I,jsonEquals:W,makeCacheKey:E,CacheStore:N,createTtlCache:K,silentRefresh:L,sanitizeHtml:$,OPENAPI_ROUTE_BASE:ee,REALTIME_WS_PATH:le,WARN_RISE_SPEED_THRESHOLD:ae,WARN_VOLUME_RATIO_THRESHOLD:D,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:y,buildRealtimeWsUrl:i,checkQuoteWarning:h,quoteFmt:{price:function(f){const C=X(f);return C===null?"--":C.toFixed(2)},pct:function(f){const C=X(f);return C===null?"--":(C>0?"+":"")+C.toFixed(2)+"%"},num:function(f){const C=X(f);return C===null?"--":C.toFixed(2)},color:function(f){const C=f?f.change_pct:null,u=X(C);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=w),typeof Te<"u"&&Te.exports&&(Te.exports=w)})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(_,b){return _+"/"+b}function m(_,b,S,x){var M=_[b]||[],V=M.findIndex(function(l){return l.subPage===S});if(V!==-1)return{groups:_,activeKey:t(b,S)};var P=M.concat([{subPage:S,title:x}]);P.length>a&&(P=c(P));var v=Object.assign({},_,e({},b,P));return{groups:v,activeKey:t(b,S)}}function e(_,b,S){return _[b]=S,_}function c(_){if(_.length<=a)return _;var b=_.length>1?1:0;return _.filter(function(S,x){return x!==b})}function d(_,b,S,x){var M=_[b]||[],V=M.findIndex(function(g){return g.subPage===S});if(V===-1)return{groups:_,nextActive:null};var P=M.filter(function(g){return g.subPage!==S}),v=Object.assign({},_,e({},b,P)),l=null;return S===x&&(P[V]?l=P[V].subPage:P[V-1]?l=P[V-1].subPage:l=null),{groups:v,nextActive:l}}function k(_){return _&&_.length?_[0]:""}function r(_,b){return _[b]||[]}function n(_,b,S){var x=_[b]||[],M=x.filter(function(P){return P.subPage===S}),V=Object.assign({},_,e({},b,M));return{groups:V,activeKey:M.length?t(b,M[0].subPage):null}}function p(_,b){var S=Object.assign({},_,e({},b,[]));return{groups:S,activeKey:null}}function o(_,b,S,x){var M=(_[b]||[]).slice();if(S<0||S>=M.length)return{groups:_};var V=M.splice(S,1)[0];return M.splice(Math.max(0,Math.min(x,M.length)),0,V),{groups:Object.assign({},_,e({},b,M))}}return{MAX_TABS:a,openTab:m,closeTab:d,getDefaultTab:k,tabsOf:r,evictOldest:c,closeOthers:n,closeAll:p,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var un=typeof Te=="object"&&Te.exports?Te.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;un&&(window.__quantModules.tabsCore=un)}(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",m="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function c(o){return e(o)==="subnav"}function d(o){return e(o)==="tree"}function k(o){return e(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function n(){var o=r(),_=t;if(o)try{_=e(o.getItem(m))}catch{}return{navMode:_}}function p(o){var _=r();if(!(!_||!o))try{o.navMode!==void 0&&_.setItem(m,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:c,treeChildrenVisible:d,topTabsVisible:k,readPrefs:n,writePrefs:p}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var vn=typeof Te=="object"&&Te.exports?Te.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;vn&&(window.__quantModules.navModeCore=vn)}(function(){function t(i,h){if(!Array.isArray(i)||i.length<=h)return i;const X=[],z=i.length/h*2;for(let w=0;w<i.length;w+=z){const f=Math.floor(w),C=Math.min(i.length,Math.ceil(w+z));let u=1/0,O=-1,oe=-1/0,J=-1;for(let T=f;T<C;T++){const U=i[T];if(!U)continue;const ie=U[3]!=null?Number(U[3]):1/0,ge=U[4]!=null?Number(U[4]):-1/0;ie<u&&(u=ie,O=T),ge>oe&&(oe=ge,J=T)}O>=0&&X.push(i[O]),J>=0&&J!==O&&X.push(i[J])}return X}let m=null;function e(){return typeof echarts<"u"?Promise.resolve():(m||(m=new Promise(function(i,h){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?i():h(new Error("echarts 加载后未定义"))},X.onerror=function(){h(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),m)}function c(){const i=getComputedStyle(document.documentElement);return{primary:i.getPropertyValue("--primary-color").trim()||"#2563eb",up:i.getPropertyValue("--color-up").trim()||"#43e97b",down:i.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:i.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:i.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=i=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim()}catch{return""}};function k(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function r(i,h,X,z=!1,w=!1){if(!h||h.length===0)return;h.length>2e3&&(h=t(h,2e3));const f=h.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),C=c(),u={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},O=h.map(se=>[se[1],se[2],se[3],se[4]]),oe=h.map(se=>se[5]),J=h.map(se=>se[6]),T=h.map(se=>se[7]),U=h.map(se=>se[8]),ie=h.map(se=>se[9]),ge=h.map(se=>se[10]),Q=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ue=C.borderLight,De={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:C.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Q,borderColor:ue,textStyle:{color:C.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const be=se[0].dataIndex,Pe=h[be];if(!Pe)return"";const me=i.getOption(),we=me.legend&&me.legend[0]&&me.legend[0].selected||{},xe=Ne=>we[Ne]!==!1,ce=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),te=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",fe=['<div style="font-weight:600;color:'+C.textSecondary+';">'+f[be]+"</div>"];return fe.push("开: "+ce(Pe[1])+"　收: "+ce(Pe[2])),fe.push("低: "+ce(Pe[3])+"　高: "+ce(Pe[4])),fe.push("成交量: "+te(Pe[5])),Pe[6]!=null&&xe("MA5")&&fe.push("MA5: "+ce(Pe[6])),Pe[7]!=null&&xe("MA10")&&fe.push("MA10: "+ce(Pe[7])),Pe[8]!=null&&xe("MA20")&&fe.push("MA20: "+ce(Pe[8])),Pe[9]!=null&&xe("MA60")&&fe.push("MA60: "+ce(Pe[9])),Pe[10]!=null&&fe.push("VOL_MA5: "+te(Pe[10])),fe.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:w?0:8,textStyle:{color:C.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:w?30:40,height:w?"48%":"52%"},{left:56,right:16,top:w?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:f,boundaryGap:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:C.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:f,axisLabel:{show:!1},axisLine:{lineStyle:{color:ue}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:C.textSecondary,fontSize:11,formatter:function(se){const be=Math.round(se*100)/100;return be%1===0?String(Math.round(be)):be.toFixed(2)}},splitLine:{lineStyle:{color:ue,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ue}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,h.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ue,textStyle:{color:C.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:O,itemStyle:{color:C.up,color0:C.down,borderColor:C.up,borderColor0:C.down}},{name:"MA5",type:"line",data:J,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:T,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:U,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:oe,itemStyle:{color:function(se){const be=se.dataIndex;return h[be][1]>=h[be][2]?C.up:C.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ge,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};i.setOption(De,!0)}const n=new Map;function p(i){return n.has(i)||n.set(i,{chart:null,cache:null}),n.get(i)}async function o(i,h,X,z=!1,w={}){await e();const f=p(i);let C=document.getElementById(i);if(!C)for(let u=0;u<16&&(await new Promise(O=>setTimeout(O,50)),C=document.getElementById(i),!C);u++);if(!C)throw new Error("无法找到图表容器: "+i);if(C.offsetWidth<50&&(C.style.minWidth="600px",C.style.minHeight="300px"),!f.chart||f.chart.isDisposed()||f.chart.getDom()!==C){if(f.chart)try{f.chart.dispose()}catch{}f.chart=echarts.init(C),f.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=w.onLegend;typeof u=="function"&&f.chart.on("legendselectchanged",O=>{O&&O.selected&&u(O.selected)})}return r(f.chart,h,X,z,!!w.isMobile),f.cache={data:h,period:X,isIndex:z,isMobile:!!w.isMobile},f.chart}function _(i){const h=n.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function b(i){const h=n.get(i);h&&h.chart&&h.chart.resize()}function S(i,h){const X=n.get(i),z=X&&X.chart;if(z)if(h<=0)z.dispatchAction({type:"dataZoom",start:0,end:100});else{const C=Math.max(0,(60-h)/60*100);z.dispatchAction({type:"dataZoom",start:Math.round(C),end:100})}}function x(i){var z,w,f;const h=n.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=((f=(w=(z=h.chart.getOption())==null?void 0:z.legend)==null?void 0:w[0])==null?void 0:f.selected)||null;r(h.chart,h.cache.data,h.cache.period,h.cache.isIndex,h.cache.isMobile),X&&h.chart.setOption({legend:{selected:X}})}function M(i){const h=n.get(i);return h&&h.chart}const V=new Map;function P(i){return V.has(i)||V.set(i,{chart:null,cache:null}),V.get(i)}function v(i,h,X={}){return e().then(function(){const z=P(i),w=document.getElementById(i);if(!w)throw new Error("无法找到图表容器: "+i);if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),z.chart&&z.chart.getDom&&z.chart.getDom()!==w){try{z.chart.dispose()}catch{}z.chart=null}z.chart||(z.chart=echarts.init(w),z.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),z.resizeBound||(z.resizeBound=!0,window.addEventListener("resize",function(){z.chart&&!z.chart.isDisposed()&&z.chart.resize()})));const f=typeof h=="function"?h():h;return z.chart.setOption(f,!0),z.cache={buildOption:h,key:X.key||""},z.chart})}function l(i){var w,f,C;const h=V.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=((C=(f=(w=h.chart.getOption())==null?void 0:w.legend)==null?void 0:f[0])==null?void 0:C.selected)||null,z=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(z,!0),X&&z&&z.legend&&z.legend.selected&&h.chart.setOption({legend:{selected:X}})}function g(i){const h=V.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function I(i){const h=V.get(i);h&&h.chart&&h.chart.resize()}const W=new Map;function E(i){return W.has(i)||W.set(i,{chart:null,cache:null}),W.get(i)}function N(i,h,X={}){return e().then(function(){const z=E(i),w=document.getElementById(i);if(!w)return null;if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),z.chart&&z.chart.getDom&&z.chart.getDom()!==w){try{z.chart.dispose()}catch{}z.chart=null}z.chart||(z.chart=echarts.init(w),z.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),z.resizeBound||(z.resizeBound=!0,window.addEventListener("resize",function(){z.chart&&!z.chart.isDisposed()&&z.chart.resize()})));const f=typeof h=="function"?h():h;return z.chart.setOption(f,!0),z.cache={buildOption:h,key:X.key||""},z.chart})}function K(i){const h=W.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(X,!0)}function A(i){const h=W.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function L(i){const h=W.get(i);h&&h.chart&&h.chart.resize()}const H=N,$=K,ee=A,le=L;function ae(i,h,X,z){z=z||{};const w=z.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[z.navLabel||"净值",z.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:z.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:z.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:z.navLabel||"净值",type:"line",data:i||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:z.ddLabel||"回撤",type:"line",yAxisIndex:1,data:h||[],showSymbol:!1,areaStyle:{opacity:.25,color:w},lineStyle:{color:w,type:"solid",width:1.5}}]}}function D(i,h){h=h||{};const X=h.bandColor||d("--state-info-solid")||"#1976d2",z=i&&i.dates||[],w=i&&i.median||[],f=i&&i.q25||[],C=i&&i.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[h.medianLabel||"中位IC",h.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:z,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:h.medianLabel||"中位IC",type:"line",data:w,showSymbol:!1,lineStyle:{width:2,color:X}},{name:h.bandLabel||"25–75分位",type:"line",data:f,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:C.map(function(u,O){return u-(f[O]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(i,h){h=h||{};const X=h.color||d("--color-ai")||"#7c3aed",z=i&&i.dates||[],w=i&&i.value||[],f=i&&i.upper||[],C=i&&i.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[h.valueLabel||"情绪",h.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:z,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:h.valueLabel||"情绪",type:"line",data:w,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:h.bandLabel||"过热/冰点带",type:"line",data:f,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:C.map(function(u,O){return(f[O]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const y={renderKlineChart:r,renderKlineTo:o,disposeKline:_,resizeKline:b,zoomKline:S,redrawKline:x,getKlineChart:M,renderBacktestTo:v,redrawBacktest:l,disposeBacktest:g,resizeBacktest:I,renderPortfolioTo:N,redrawPortfolio:K,disposePortfolio:A,resizePortfolio:L,renderSimpleChartTo:H,redrawSimpleChart:$,disposeSimpleChart:ee,resizeSimpleChart:le,buildNavDrawdownOption:ae,buildIcBandOption:D,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:k,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:_,resizeKline:b,zoomKline:S,redrawKline:x,getKlineChart:M,renderBacktestTo:v,redrawBacktest:l,disposeBacktest:g,resizeBacktest:I,renderPortfolioTo:N,redrawPortfolio:K,disposePortfolio:A,resizePortfolio:L,renderSimpleChartTo:H,redrawSimpleChart:$,disposeSimpleChart:ee,resizeSimpleChart:le,buildNavDrawdownOption:ae,buildIcBandOption:D,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:k}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=y),typeof Te<"u"&&Te.exports&&(Te.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ae,buildIcBandOption:D,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:m}=Vue,{configChanged:e,consensus:c}=a,d=t(null),k=t(""),r=t(null),n=t([]),p=t([]),o=t([]),_=t([]),b=t([]),S=t([]),x=t({});function M(Se){const Ee=b.value.indexOf(Se);Ee>=0?b.value.splice(Ee,1):b.value.push(Se)}const V=t("date"),P=t([]),v=t(!1),l=t(!1),g=t("watchlist"),I=t([]),W=t({vendors:[]}),E=t(""),N=t(!1),K=t(!1);function A(Se){if(!Se)return"";const Ee=String(Se),Ve=Ee.length;if(Ve<=4)return Ee[0]+"*".repeat(Ve-1);const Oe=Ve<=8?2:4;return Ee.slice(0,Oe)+"*".repeat(Ve-Oe-Oe)+Ee.slice(-Oe)}async function L(Se){let Ee;try{Ee=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Ee,target:Se})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(Ve){ElementPlus.ElMessage.error("查看失败: "+Ve.message)}return null}async function H(Se){if(Se._revealed){Se._revealed=!1,Se._masked=A(Se.api_key);return}const Ee=await L("ai:"+Se.vendor_key);Ee!==null&&(Se.api_key=Ee,Se._revealed=!0)}async function $(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=A(Se.api_key));return}Se._editing=!0;try{const Ve=await(await fetch("/api/ai/models?full=1")).json();if(Ve.success){const Oe=(Ve.data.vendors||[]).find($e=>$e.vendor_key===Se.vendor_key);Oe&&(Se.api_key=Oe.api_key||"")}else Ve.message&&ElementPlus.ElMessage.error(String(Ve.message))}catch(Ee){ElementPlus.ElMessage.error("解锁失败: "+Ee.message)}}function ee(Se){const{_fetching:Ee,_testing:Ve,_revealed:Oe,_masked:$e,_editing:Xe,...Ye}=Se;return Xe||(Ye.api_key=""),Ye.models=(Se.models||[]).map(nt=>{const{_testing:yt,testResult:Et,...Ft}=nt;return Ft}),Ye}async function le(){var Se;try{E.value="";const Ee=await fetch("/api/ai/models");if(Ee.status===401){E.value="请先登录后再查看模型配置";return}if(!Ee.ok){E.value=`服务器错误 (${Ee.status})`;return}const Ve=await Ee.json();Ve.success?(I.value=(((Se=Ve.data)==null?void 0:Se.vendors)||[]).map(Oe=>({...Oe,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Oe.api_key||"",models:(Oe.models||[]).map($e=>({...$e,_testing:!1,testResult:void 0}))})),E.value=""):E.value=Ve.message||"加载失败"}catch(Ee){E.value="网络错误: "+Ee.message}}async function ae(){try{const Ee=await(await fetch("/api/ai/catalog")).json();Ee.success&&Ee.data&&(W.value=Ee.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function D(){K.value=!0;try{const Ve=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:I.value.map(ee)})})).json();Ve.success?(I.value.forEach(Oe=>{Oe._editing=!1,Oe._revealed=!1,Oe.api_key&&(Oe._masked=A(Oe.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ve.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}K.value=!1}async function s(Se,Ee){Ee._testing=!0;try{const Oe=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:Ee.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});Ee.testResult=await Oe.json()}catch(Ve){Ee.testResult={success:!1,message:Ve.message}}Ee._testing=!1}async function y(){N.value=!0;for(const Se of I.value)for(const Ee of Se.models||[])Se.api_key?await s(Se,Ee):Ee.testResult={success:!1,message:"未配置 API Key"};N.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function i(Se){Se._fetching=!0;try{const Oe=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Oe.success&&Array.isArray(Oe.models)){const $e=new Set((Se.models||[]).map(Xe=>Xe.name));for(const Xe of Oe.models)$e.has(Xe)||Se.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Oe.models.length} 个模型`)}else ElementPlus.ElMessage.error(Oe.message||"获取模型列表失败")}catch(Ee){ElementPlus.ElMessage.error("获取模型列表失败: "+Ee.message)}Se._fetching=!1}function h(Se){const Ee=(W.value.vendors||[]).find(Ve=>Ve.vendor_key===Se);if(Ee){if(I.value.some(Ve=>Ve.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}I.value.push({vendor_key:Ee.vendor_key,name:Ee.name,kind:Ee.kind,base_url:Ee.base_url,api_key:"",timeout:60,tier:Ee.tier||"",website:Ee.website||"",locked:!!Ee.locked,models:(Ee.models||[]).map(Ve=>({name:Ve,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${Ee.name}」，配置 API Key 后保存生效`)}}function X(){I.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function z(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function w(Se,Ee){const Ve=Se.models[Ee];if(!(!Ve||Ve.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ve.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(Ee,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function f(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const Ee=I.value.indexOf(Se);Ee>=0&&I.value.splice(Ee,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const C=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=t(!1),O=t(""),oe=t(0),J=t(""),T=t(!1),U=t(""),ie=t(!1),ge=t(0),qe=t(0),Q=t(""),ue=t({}),De=t({}),se=t({}),be=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Pe=t("manual"),me=m(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[be.value.provider]||Se.custom}),we={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function xe(Se){if(Se==="manual")return;const Ee=we[Se];Ee&&(be.value.endpoint=Ee.endpoint,be.value.model=Ee.model,e.value=!0)}function ce(){if(e.value=!0,be.value.provider!=="codingplan"&&be.value.provider!=="custom"){const Se=me.value;Se&&(be.value.endpoint=Se.endpoint,be.value.model=Se.model)}else be.value.provider==="codingplan"&&(be.value.endpoint||(be.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),be.value.model||(be.value.model="ark-code-latest"))}let te=null;const fe=8;async function Ne(){te&&(te.abort(),te=null);const Ee=(c.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!x.value[Ye.code]);if(Ee.length===0)return;const Ve=new AbortController;te=Ve;let Oe=0;const $e=async()=>{for(;Oe<Ee.length;){const Ye=Ee[Oe++];try{const yt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Ve.signal})).json();yt.success&&yt.signal&&(x.value={...x.value,[Ye.code]:yt.signal})}catch(nt){if(nt.name==="AbortError")return}}},Xe=Array.from({length:Math.min(fe,Ee.length)},()=>$e());await Promise.all(Xe)}function Be(){te&&(te.abort(),te=null)}let We=0;async function qt(Se){const Ee=++We;try{const Oe=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(Ee!==We)return;Oe.success&&Oe.data&&(d.value=Oe.data,k.value=Oe.data.evaluate_time,gt(Se,Oe.data),Tt(Oe.data))}catch{}}async function gt(Se,Ee){var Ve,Oe;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const Ye=Xe.data[1],nt=((Ve=Ee.result)==null?void 0:Ve.total_score)||0,yt=((Oe=Ye.result)==null?void 0:Oe.total_score)||0;nt>0&&yt>0&&(r.value={prevScore:yt,currScore:nt,diff:nt-yt})}}catch($e){console.warn("[refreshStrategyData] autoPoll failed:",$e)}}function Tt(Se){var $e;const Ee=(($e=Se.result)==null?void 0:$e.dimensions)||{},Ve=[],Oe=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of Oe){const Ye=Ee[Xe.key];Ye!==void 0&&Ve.push({icon:Ye>=Xe.good?"check-circle-2":Ye>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(Ye)}分`})}n.value=Ve}return{aiResult:d,lastEvalTime:k,evalHistoryComparison:r,checklistItems:n,aiHistory:p,selectedHistoryIds:o,expandedDates:_,expandedMonths:b,expandedStocks:S,poolSignals:x,toggleMonthExpand:M,aiHistoryView:V,selectedWatchlistCodes:P,showAutoEvaluateSettings:v,savingConfig:l,autoEvaluateScope:g,aiVendors:I,aiCatalog:W,aiModelsError:E,testingAllModels:N,savingAiModels:K,loadAiVendors:le,loadAiCatalog:ae,saveAiVendors:D,saveAiModels:D,testVendorModel:s,testAllVendorModels:y,fetchVendorModels:i,addVendorFromCatalog:h,addCustomVendor:X,addVendorModel:z,removeVendorModel:w,removeVendor:f,toggleVendorKeyReveal:H,toggleVendorEdit:$,autoEvaluateConfig:C,aiLoading:u,aiEvalStage:O,aiEvalElapsed:oe,aiEvalError:J,showBatchEvaluate:T,batchStocks:U,batchRunning:ie,batchTotal:ge,batchCompleted:qe,batchCurrent:Q,batchStatuses:ue,batchResults:De,batchEvalErrors:se,aiConfig:be,selectedPreset:Pe,providerInfo:me,aiPresets:we,applyPreset:xe,onProviderChange:ce,fetchPoolSignals:Ne,cancelPoolSignals:Be,loadLastEvaluation:qt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:m,watch:e}=Vue,{configChanged:c,aiConfig:d,aiLoading:k,feishuConfig:r,currentTheme:n,changeTheme:p,autoEvaluateConfig:o,currentUser:_,strategyFilter:b,applyTheme:S,dashboardData:x,lastRefreshTime:M,saveAiModels:V}=a,P=function(ce){const te=window.__quantModules&&window.__quantModules.themes;return te&&te.applyLegacyTheme?te.applyLegacyTheme(ce):S(ce)},v=t(!1),l=t(!1),g=t(null),I=t(null),W=t(null),E=t(null),N=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),K=t("disconnected"),A=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),L=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),H=t(!1),$=t(null),ee=t(null),le=t("pending"),ae=t("..."),D=t(!1),s=t({api_limit:600}),y=t(!1),i=t(!1);async function h(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(s.value=te.data)}catch(ce){console.warn("loadRateLimit failed:",ce)}}async function X(){i.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();te.success?(y.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}e(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{c.value=!0},{deep:!0});async function z(){v.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(c.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ce){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ce)}finally{v.value=!1}}async function w(){k.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{k.value=!1}}function f(){const ce={ai:d.value,feishu:r.value,theme:n.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(ce,null,2)],{type:"application/json"}),fe=URL.createObjectURL(te),Ne=document.createElement("a");Ne.href=fe,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(fe),ElementPlus.ElMessage.success("配置已导出")}function C(ce){const te=ce.target.files[0];if(!te)return;const fe=new FileReader;fe.onload=async Ne=>{try{const Be=JSON.parse(Ne.target.result);Be.ai&&(d.value={...d.value,...Be.ai},await z()),Be.feishu&&(Object.assign(r.value,Be.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Be.feishu)})),Be.theme&&(n.value=Be.theme,p(Be.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},fe.readAsText(te),ce.target.value=""}async function u(){v.value=!0;const ce=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:N.value,feishu:r.value,ai:d.value,rate_limit:s.value,auto_evaluate:o.value,theme:n.value}})}).then(Be=>["userConfig",Be.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)}).then(Be=>["tushare",Be.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:A.value})}).then(Be=>["datasource",Be.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(Be=>["feishu",Be.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Be=>["ai",Be.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Be=>["rateLimit",Be.ok]),V().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(ce),fe=te.filter(Be=>Be.status==="fulfilled"&&Be.value[1]).length,Ne=te.filter(Be=>Be.status==="rejected"||Be.status==="fulfilled"&&!Be.value[1]).length;y.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(b.value.selected)),localStorage.setItem("quant_strategy_filter_mode",b.value.mode),_.value&&fetch(`/api/users/${_.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:n.value})}).catch(()=>{}),l.value=!1,g.value=new Date().toLocaleString("zh-CN"),v.value=!1,Ne>0&&console.error(`[saveAllConfig] ${fe}/${fe+Ne} 项保存成功，${Ne} 项失败`)}async function O(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const fe=te.config;fe.tushare&&(N.value={...N.value,...fe.tushare}),fe.feishu&&(r.value={...r.value,...fe.feishu}),fe.ai&&(d.value={...d.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate}),fe.theme&&!localStorage.getItem("quant_theme")&&P(fe.theme)}l.value=!1,y.value=!1}catch(ce){console.error("[resetAllConfig] 重新加载配置失败:",ce),l.value=!1}}async function oe(){K.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(K.value=te.success?"connected":"disconnected",te.success){const fe=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+fe)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{K.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function J(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();K.value=te.success?"connected":"disconnected"}catch{K.value="disconnected"}}async function T(){var ce;H.value=!0;try{const fe=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();fe.success?($.value=parseInt(((ce=fe.message.match(/\d+/))==null?void 0:ce[0])||"0"),ElementPlus.ElMessage.success(fe.message)):ElementPlus.ElMessage.error(fe.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{H.value=!1}}async function U(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(N.value={...N.value,...te.config})}catch(ce){console.warn("loadTushareConfig failed:",ce)}}function ie(ce){if(!ce)return"";const te=String(ce),fe=te.length;if(fe<=4)return te[0]+"*".repeat(fe-1);const Ne=fe<=8?2:4;return te.slice(0,Ne)+"*".repeat(fe-Ne-Ne)+te.slice(-Ne)}async function ge(ce){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:ce})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(fe){ElementPlus.ElMessage.error("查看失败: "+fe.message)}return null}async function qe(ce){const te=A.value[ce];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=ie(te.token);return}const fe=await ge(ce);fe!==null&&(te.token=fe,te._revealed=!0)}async function Q(ce){const te=A.value[ce];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=ie(te.token));return}te._editing=!0;try{const fe=await ge(ce);if(fe===null){te._editing=!1;return}te.token=fe,te._revealed=!0}catch(fe){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+fe.message)}}}async function ue(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const fe=te.config.sources,Ne=Be=>{const We={...A.value[Be],...fe[Be]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};A.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...A.value.akshare,...fe.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Be,We]of Object.entries(Ne.status))L.value[Be]=We.connected?"connected":"disconnected"}catch{}}catch(ce){console.warn("loadDatasourceConfig failed:",ce)}}async function De(){try{const ce={};for(const[te,fe]of Object.entries(A.value)){const{_revealed:Ne,_masked:Be,_editing:We,...qt}=fe;!We&&te!=="akshare"&&(qt.token=""),ce[te]=qt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ce})}),l.value=!0}catch(ce){console.warn("saveDatasourceConfig failed:",ce)}}async function se(ce){L.value[ce]="testing";try{const te=A.value[ce];te&&te._editing&&await De();const Ne=await(await fetch(`/api/market/datasource/test/${ce}`,{method:"POST"})).json();L.value[ce]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ce} 连接成功`):ElementPlus.ElMessage.error(`${ce}: ${Ne.message}`)}catch{L.value[ce]="disconnected",ElementPlus.ElMessage.error(`${ce} 连接失败`)}}async function be(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(r.value={...r.value,...te},I.value=JSON.parse(JSON.stringify(r.value)))}catch(ce){console.warn("loadFeishuConfig failed:",ce)}}async function Pe(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)d.value={...d.value,...te.data};else{const fe=localStorage.getItem("quant_ai_config");fe&&(d.value=JSON.parse(fe))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(d.value=JSON.parse(te))}}async function me(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const fe=te.config;fe.tushare&&(N.value={...N.value,...fe.tushare}),fe.datasource&&fe.datasource.sources&&(A.value={sxsc_tushare:{...A.value.sxsc_tushare,...fe.datasource.sources.sxsc_tushare||{}},tushare:{...A.value.tushare,...fe.datasource.sources.tushare||{}},akshare:{...A.value.akshare,...fe.datasource.sources.akshare||{}}}),fe.feishu&&(r.value={...r.value,...fe.feishu},I.value=JSON.parse(JSON.stringify(r.value))),fe.ai&&(d.value={...d.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.theme&&!localStorage.getItem("quant_theme")&&P(fe.theme),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate})}}catch(ce){console.warn("加载用户配置失败，使用本地缓存",ce)}}async function we(){var ce,te,fe,Ne;try{const We=await(await fetch("/api/dashboard")).json(),qt=We.success?We.data:We;$.value=((ce=qt==null?void 0:qt.stats)==null?void 0:ce.total_stocks_covered)||null;const Tt=await(await fetch("/api/dates")).json();ee.value=((te=Tt==null?void 0:Tt.data)==null?void 0:te.total)||((Ne=(fe=Tt==null?void 0:Tt.data)==null?void 0:fe.dates)==null?void 0:Ne.length)||null;const Ee=await(await fetch("/api/ai/history")).json();le.value="ok"}catch{le.value="pending"}}async function xe(){try{const te=await(await fetch("/api/dashboard")).json();x.value=te.success?te.data:te,M.value=Date.now()}catch(ce){console.error("加载总览数据失败",ce)}}return{configSaving:v,configChanged:c,globalConfigDirty:l,lastSavedTime:g,feishuConfigOriginal:I,aiConfigOriginal:W,tushareConfigOriginal:E,tushareConfig:N,tushareStatus:K,datasourceConfig:A,datasourceStatus:L,syncingData:H,stockCount:$,tradeDateCount:ee,aiStatus:le,appVersion:ae,showImportDialog:D,rateLimitConfig:s,rateLimitDirty:y,rateLimitSaving:i,loadRateLimit:h,saveRateLimit:X,saveAiConfig:z,testAiApi:w,exportConfig:f,importConfig:C,saveAllConfig:u,resetAllConfig:O,testTushareConnection:oe,checkTushareConnection:J,syncStockData:T,loadTushareConfig:U,loadDatasourceConfig:ue,saveDatasourceConfig:De,testDatasource:se,toggleDatasourceKeyReveal:qe,toggleDatasourceEdit:Q,loadFeishuConfig:be,loadAiConfig:Pe,loadUserConfig:me,loadSystemStatus:we,loadDashboardData:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:m}=Vue,{currentUser:e,applyTheme:c,allMenuDefs:d,loadGroupConfig:k}=a,r=function(me){const we=window.__quantModules&&window.__quantModules.themes;return we&&we.applyLegacyTheme?we.applyLegacyTheme(me):c(me)},n=t([]),p=t(""),o=t(""),_=t("users"),b=t({}),S=t({}),x=m(()=>{let me=n.value;if(o.value&&(me=me.filter(xe=>(xe.group||xe.role)===o.value)),!p.value)return me;const we=p.value.toLowerCase();return me.filter(xe=>xe.username.toLowerCase().includes(we))});function M(me){b.value={...b.value,[me]:!b.value[me]}}async function V(me,we){try{const ce=await(await fetch("/api/groups/"+we+"/members/"+me,{method:"DELETE"})).json();ce.success?(await Q(),await ge()):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function P(me){const we=S.value[me];if(we)try{const ce=await(await fetch("/api/groups/"+me+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:we})})).json();ce.success?(await Q(),await ge(),S.value={...S.value,[me]:""}):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function v(me,we){try{const ce=await(await fetch("/api/users/"+me.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:we})})).json();ce.success?await Q():ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=t(!1),g=t(null),I=t({username:"",password:"",role:"user",theme:"tech-blue"}),W=t(!1),E=t(null),N=t(!1),K=t(!1),A=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),L=t({}),H=t(!1),$=t({group_id:"",name:"",description:""}),ee=t(!1),le=t([]),ae=t(""),D=t(""),s=t({});function y(me){s.value={...s.value,[me]:!s.value[me]}}function i(me){return!n.value||!n.value.length?0:n.value.filter(we=>(we.group||we.role)===me).length}function h(me){const we=(me==null?void 0:me.visible_menus)||{};return Object.values(we).filter(Boolean).length}const X=m(()=>Object.keys(ie.value).length);async function z(me){D.value=me,K.value=!0,await w(me)}async function w(me){try{const xe=await(await fetch("/api/groups/"+me+"/members")).json();xe.success&&(le.value=xe.members||[])}catch(we){le.value=[],console.error("[loadGroupMembers]",we)}}async function f(){if(!(!ae.value||!D.value)){ee.value=!0;try{const we=await(await fetch("/api/groups/"+D.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ae.value})})).json();we.success?(await w(D.value),await Q(),ae.value=""):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{ee.value=!1}}}async function C(me){try{const xe=await(await fetch("/api/groups/"+D.value+"/members/"+me,{method:"DELETE"})).json();xe.success?(await w(D.value),await Q()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const u=m(()=>{if(!n.value)return[];const me=new Set(le.value.map(we=>we.username));return n.value.filter(we=>we.username!=="admin"&&we.username!=="guest"&&!me.has(we.username))});function O(me){const we=A.value.visible_menus[me],xe=d.find(ce=>ce.key===me);if(xe)if(we){const ce=L.value[me]||{};xe.subPages.forEach(te=>{const fe=me+"."+te;A.value.visible_sub_pages[fe]=ce[te]!==void 0?ce[te]:!0})}else{const ce={};xe.subPages.forEach(te=>{const fe=me+"."+te;ce[te]=A.value.visible_sub_pages[fe],A.value.visible_sub_pages[fe]=!1}),L.value[me]=ce}}function oe(me){E.value=me;const we=ie.value[me]||{};A.value={name:we.name||me,description:we.description||"",visible_menus:{...we.visible_menus||{}},visible_sub_pages:{...we.visible_sub_pages||{}}},L.value={},d.forEach(xe=>{const ce={};xe.subPages.forEach(te=>{ce[te]=A.value.visible_sub_pages[xe.key+"."+te]}),L.value[xe.key]=ce}),N.value=!0}async function J(){ee.value=!0;try{const we=await(await fetch("/api/groups/"+E.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)})).json();we.success?(N.value=!1,E.value=null,await ge(),await k()):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{ee.value=!1}}async function T(me){var we;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((we=ie.value[me])==null?void 0:we.name)||me)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+me,{method:"DELETE"})).json();te.success?await ge():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function U(){if($.value.group_id){ee.value=!0;try{const we=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($.value)})).json();we.success?(H.value=!1,$.value={group_id:"",name:"",description:""},await ge()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{ee.value=!1}}}const ie=t({});async function ge(){try{if(!localStorage.getItem("quant_token"))return;const we=await fetch("/api/groups");if(we.ok){const xe=await we.json();ie.value=xe.groups||{}}}catch(me){console.warn("loadAllGroups:",me)}}function qe(me){var we;return((we=ie.value[me])==null?void 0:we.name)||me||"--"}async function Q(){try{if(!localStorage.getItem("quant_token")){n.value=[];return}const we=await fetch("/api/users");if(we.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const xe=await we.json();n.value=xe.users||[]}catch(me){n.value=[],console.error("[loadUsers] error:",me)}}function ue(me){g.value=me,I.value={username:me.username,password:"",role:me.role,theme:me.theme||"tech-blue",group:me.group||me.role},l.value=!0}async function De(){if(I.value.username){W.value=!0;try{const me=g.value?"PUT":"POST",we=g.value?`/api/users/${I.value.username}`:"/api/users",ce=await(await fetch(we,{method:me,headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();if(ce.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&I.value.username===e.value.username){const te=I.value.theme;te&&te!==e.value.theme&&(e.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(e.value)),r(te))}l.value=!1,g.value=null,await Q()}else ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{W.value=!1}}}async function se(me){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${me}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await Q())}catch(we){console.error("[deleteUser]",we)}}async function be(me){try{const xe=await(await fetch(`/api/users/${me.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:me.enabled})})).json();xe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(xe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Pe(me){try{const{value:we}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${me.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(we){const ce=await(await fetch(`/api/users/${me.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:we})})).json();ce.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ce.message||"重置失败")}}catch{}}return{userList:n,userSearch:p,groupFilter:o,userPageTab:_,expandedGroups:b,addMemberGroupMap:S,filteredUsers:x,toggleGroupExpand:M,removeMemberFromGroupInline:V,addMemberToGroupInline:P,changeUserGroup:v,showAddUser:l,editingUser:g,userForm:I,savingUser:W,editingGroup:E,menuConfigDialog:N,memberDialog:K,groupEditForm:A,subPageCache:L,showAddGroup:H,addGroupForm:$,savingGroup:ee,groupMembers:le,addMemberUsername:ae,selectedMemberGroup:D,subPageSectionExpanded:s,toggleSubPageSection:y,getGroupMemberCount:i,getMenuEnabledCount:h,groupCount:X,openMemberManager:z,loadGroupMembers:w,addMemberToGroup:f,removeMemberFromGroup:C,availableUsersForGroup:u,onParentToggle:O,openMenuConfig:oe,saveMenuConfig:J,deleteGroupConfig:T,createGroup:U,allGroups:ie,getGroupName:qe,loadAllGroups:ge,loadUsers:Q,editUser:ue,saveUser:De,deleteUser:se,toggleUserEnabled:be,resetUserPassword:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:m}=Vue,{stockKlineLoaded:e,stockDetailVisible:c,stockDetailTab:d,stockDetail:k,disposeStockKline:r}=a,n=t([]),p=t(!1),o=t(!1),_=t("date"),b=t([]),S=t([]),x=t([]),M=t([]),V=m(()=>{var f,C;const w=[];for(const u of n.value){if(!u||u.id==null)continue;const O=u.stock_name||u.stock_code||"",oe=Array.isArray(u.messages)?u.messages:[];w.push({id:u.id,stock_code:u.stock_code,stock_name:O,first_msg:u.first_msg||((C=(f=oe[0])==null?void 0:f.content)==null?void 0:C.substring(0,50))||"",msg_count:u.msg_count||oe.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:oe})}return w}),P=m(()=>{const w={};for(const C of V.value){const u=C.date||"未知";w[u]||(w[u]=[]),w[u].push(C)}const f={};return Object.keys(w).sort((C,u)=>u.localeCompare(C)).forEach(C=>f[C]=w[C]),f}),v=m(()=>{const w={};for(const C of V.value){const u=C.month||"未知";w[u]||(w[u]=[]),w[u].push(C)}const f={};return Object.keys(w).sort((C,u)=>u.localeCompare(C)).forEach(C=>f[C]=w[C]),f}),l=m(()=>{const w={};for(const f of V.value){const C=`${f.stock_name}(${f.stock_code})`;w[C]||(w[C]=[]),w[C].push(f)}return w});function g(w){const f=b.value.indexOf(w);f>=0?b.value.splice(f,1):b.value.push(w)}function I(w){const f=P.value[w]||[];if(f.every(u=>b.value.includes(u.id)))b.value=b.value.filter(u=>!f.some(O=>O.id===u));else for(const u of f)b.value.includes(u.id)||b.value.push(u.id)}function W(w){const f=v.value[w]||[];if(f.every(u=>b.value.includes(u.id)))b.value=b.value.filter(u=>!f.some(O=>O.id===u));else for(const u of f)b.value.includes(u.id)||b.value.push(u.id)}function E(w){const f=l.value[w]||[];if(f.every(u=>b.value.includes(u.id)))b.value=b.value.filter(u=>!f.some(O=>O.id===u));else for(const u of f)b.value.includes(u.id)||b.value.push(u.id)}function N(w){const f=S.value.indexOf(w);f>=0?S.value.splice(f,1):S.value.push(w)}function K(w){const f=x.value.indexOf(w);f>=0?x.value.splice(f,1):x.value.push(w)}function A(w){const f=M.value.indexOf(w);f>=0?M.value.splice(f,1):M.value.push(w)}function L(){b.value.length===V.value.length?b.value=[]:b.value=V.value.map(w=>w.id)}async function H(){if(b.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const w of[...b.value])await X(w);b.value=[]}}const $={};async function ee(w){k.value={stock:w.stock_code,name:w.stock_name},c.value=!0,d.value="chat",e.value=!1,r(),D.value=!0,s.value="",ae.value=[];try{let f=$[w.id];if(!f){const C=await fetch("/api/ai/chat/history/"+w.id);if(!C.ok)throw new Error("load history failed");f=(await C.json()).messages||[],$[w.id]=f}ae.value=f.map(C=>({role:C.role,content:C.content}))}catch{s.value="历史消息加载失败，请重试"}finally{D.value=!1}}const le=t(""),ae=t([]),D=t(!1),s=t("");async function y(){var C;const w=le.value.trim();if(!w||D.value)return;s.value="",ae.value.push({role:"user",content:w}),le.value="",D.value=!0;const f=ae.value.length;ae.value.push({role:"assistant",content:""});try{const oe=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((C=k.value)==null?void 0:C.stock)||"",message:w})})).body.getReader(),J=new TextDecoder;let T="";for(;;){const{done:U,value:ie}=await oe.read();if(U)break;T+=J.decode(ie,{stream:!0});const ge=T.split(`
`);T=ge.pop()||"";for(const qe of ge)if(qe.startsWith("data: "))try{const Q=JSON.parse(qe.slice(6));Q.token?ae.value[f].content+=Q.token:Q.done?console.log("Stream done:",Q.session_id):Q.error&&(s.value=Q.error)}catch(Q){console.warn("SSE parse error:",Q)}}}catch(u){ae.value[f].content||(ae.value[f].content="网络错误: "+u.message)}D.value=!1}async function i(w){var C;s.value="",D.value=!0;const f={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ae.value.push({role:"user",content:f[w]||f.comprehensive});try{const O=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((C=k.value)==null?void 0:C.stock)||"",mode:w})});if(O.ok){const oe=await O.json();ae.value.push({role:"assistant",content:oe.reply||"无回复"})}}catch(u){s.value="网络错误: "+u.message}D.value=!1}async function h(){p.value=!0,o.value=!1;try{const w=await fetch("/api/ai/chat/history?view=date");if(w.ok){const f=await w.json(),C=[];for(const u of f)for(const O of u.items||[])C.push(O);n.value=C}else o.value=!0}catch(w){console.error(w),o.value=!0}finally{p.value=!1}}async function X(w){try{await fetch("/api/ai/chat/history/"+w,{method:"DELETE"}),n.value=n.value.filter(f=>f.id!==w)}catch(f){console.error("deleteChatSession:",f)}}function z(w){if(!w)return"";const f=String(w).split(`
`),C=[],u=[];let O=0;for(;O<f.length;){if(/^\s*\|.*\|\s*$/.test(f[O])){let J=O;const T=[];for(;J<f.length&&/^\s*\|.*\|\s*$/.test(f[J]);)T.push(f[J]),J++;const U=qe=>qe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Q=>Q.trim()),ie=T.map(U);if(ie.length>1&&ie[1].every(qe=>/^:?-{3,}:?$/.test(qe))){const qe=Math.max(...ie.map(se=>se.length)),Q=ie[0].slice(0,qe),ue=ie.slice(2);let De="<table>";ue.length?(De+="<thead><tr>"+Q.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",De+="<tbody>"+ue.map(se=>"<tr>"+se.slice(0,qe).map(be=>"<td>"+be+"</td>").join("")+"</tr>").join("")+"</tbody>"):De+="<tbody><tr>"+Q.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",De+="</table>",C.push(De),u.push("\0T"+(C.length-1)+"\0"),O=J;continue}for(;O<J;)u.push(f[O]),O++;continue}u.push(f[O]),O++}let oe=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return C.forEach((J,T)=>{oe=oe.split("\0T"+T+"\0").join(J)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(oe=window.__quantModules.core.sanitizeHtml(oe)),oe}return{chatSessions:n,chatHistoryView:_,selectedChatIds:b,expandedChatDates:S,expandedChatMonths:x,expandedChatStocks:M,chatHistoryLoading:p,chatHistoryError:o,allChatSessionsFlat:V,chatGroupedByDate:P,chatGroupedByMonth:v,chatGroupedByStock:l,toggleSelectChat:g,toggleSelectChatDate:I,toggleSelectChatMonth:W,toggleSelectChatStock:E,toggleChatDateExpand:N,toggleChatMonthExpand:K,toggleChatStockExpand:A,selectAllChatSessions:L,deleteSelectedChatSessions:H,viewChatSession:ee,loadChatHistory:h,deleteChatSession:X,renderMarkdown:z,stockChatInput:le,stockChatMessages:ae,stockChatLoading:D,stockChatError:s,askStockSend:y,askStockQuick:i}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantUndoCore=t()})(typeof self<"u"?self:void 0,function(){function a(){var t={},m=0;function e(r,n,p){if(typeof r!="function")return"";var o="undo-"+ ++m,_={fn:r,label:n||"",timer:null,active:!0};return t[o]=_,p&&p>0&&(_.timer=setTimeout(function(){d(o)},p)),o}function c(r){var n=t[r];if(!n||!n.active)return!1;n.timer&&clearTimeout(n.timer),delete t[r],n.active=!1;try{n.fn()}catch{}return!0}function d(r){var n=t[r];n&&(n.timer&&clearTimeout(n.timer),delete t[r],n.active=!1)}function k(){var r=0;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r++;return r}return{register:e,undo:c,remove:d,activeCount:k}}return{createUndoStack:a}});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantFormMemory=t()})(typeof self<"u"?self:void 0,function(){function a(d,k,r){return"qc_fm_"+(d||"guest")+"_"+k+"_v"+(r||1)}function t(){return typeof localStorage<"u"&&localStorage?localStorage:null}function m(d,k,r,n){var p=t();if(!p||!d||k===void 0||k===null)return!1;try{return p.setItem(a(r,d,n),JSON.stringify(k)),!0}catch{return!1}}function e(d,k,r){var n=t();if(!n||!d)return null;try{var p=n.getItem(a(k,d,r));return p?JSON.parse(p):null}catch{return null}}function c(d,k,r){var n=t();if(!(!n||!d))try{n.removeItem(a(k,d,r))}catch{}}return{saveForm:m,loadForm:e,clearForm:c}});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantSessionRestore=t()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function t(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function m(d){var k=t();if(!k||!d)return!1;try{return k.setItem(a,JSON.stringify(d)),!0}catch{return!1}}function e(){var d=t();if(!d)return null;try{var k=d.getItem(a);return k?JSON.parse(k):null}catch{return null}}function c(){var d=t();if(d)try{d.removeItem(a)}catch{}}return{save:m,restore:e,clear:c,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function t(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function m(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function e(){if(!document.getElementById("qc-install-bar")){var c=document.createElement("div");c.id="qc-install-bar",c.className="qc-install-bar",c.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var k=document.createElement("span");k.className="qc-install-actions";var r=document.createElement("button");r.className="qc-install-btn",r.type="button",r.textContent="安装";var n=document.createElement("button");n.className="qc-install-close",n.type="button",n.setAttribute("aria-label","关闭"),n.textContent="×",k.appendChild(r),k.appendChild(n),c.appendChild(d),c.appendChild(k),document.body.appendChild(c),r.addEventListener("click",function(){a&&(a.prompt(),a=null),c.remove()}),n.addEventListener("click",function(){m(),c.remove()})}}window.addEventListener("beforeinstallprompt",function(c){c.preventDefault(),a=c,t()||e()}),window.addEventListener("appinstalled",function(){a=null;var c=document.getElementById("qc-install-bar");c&&c.remove()})})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantBatchAdd=t()})(typeof self<"u"?self:void 0,function(){function a(m){var e=[];return(m||[]).forEach(function(c){if(c){var d=typeof c=="string"?c:c.code||"",k=typeof c=="object"&&c.name?String(c.name):"";d&&e.push(k&&k!==d?d+" "+k:d)}}),e.join(`
`)}function t(m){if(!m||m.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var e=m.added||0,c=m.existed||0,d=m.invalid||0,k=m.total||0;return{added:e,existed:c,invalid:d,total:k,failed:d,message:"已加入 "+e+" 只"+(c?"，"+c+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:a,summarize:t}});(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantContextMenu=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(d,k,r,n,p,o,_){var b=_??a,S=d,x=k;return S+r>p-b&&(S=Math.max(b,p-b-r)),x+n>o-b&&(x=Math.max(b,o-b-n)),{left:Math.round(S),top:Math.round(x)}}var m=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function e(){return m.map(function(d){return{key:d.key,label:d.label}})}function c(d,k,r){var n=r??500;return!d||!k?!1:k-d>=n}return{positionMenu:t,getActions:e,isLongPress:c}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,onMounted:t,onBeforeUnmount:m}=Vue,e=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function c(d){let k=d;for(;k&&k!==document.body;){if(k.hasAttribute&&k.hasAttribute("data-ctx-code"))return k;k=k.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
      <teleport to="body">
        <div v-if="visible" class="qc-ctx" :style="{ left: pos.left + 'px', top: pos.top + 'px' }"
             role="menu" @contextmenu.prevent>
          <div v-for="a in actions" :key="a.key" class="qc-ctx-item" role="menuitem" @click="run(a)">
            <span>{{ a.label }}</span>
          </div>
        </div>
      </teleport>
    `,setup(){const d=a(!1),k=a({left:0,top:0}),r=a(e?e.getActions():[]),n=a({});function p(){d.value=!1}function o(l,g,I){if(n.value=I||{},e){const W=window.innerWidth||document.documentElement.clientWidth,E=window.innerHeight||document.documentElement.clientHeight,N=180,K=r.value.length*32+12;k.value=e.positionMenu(l,g,N,K,W,E)}else k.value={left:l,top:g};d.value=!0}function _(l){p(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:l.key,payload:n.value}}))}function b(l){const g=c(l.target);g&&(l.preventDefault(),o(l.clientX,l.clientY,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""}))}let S=null,x=0;function M(l){const g=c(l.target);g&&(x=Date.now(),S=setTimeout(function(){if(e&&e.isLongPress(x,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const I=l.touches&&l.touches[0];o(I?I.clientX:0,I?I.clientY:0,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}},520))}function V(){S&&(clearTimeout(S),S=null)}function P(l){if(l.key==="Escape"){p();return}if(l.shiftKey&&l.key==="F10"){const g=c(document.activeElement);if(g){l.preventDefault();const I=g.getBoundingClientRect();o(I.left+I.width/2,I.bottom,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}}}function v(l){d.value&&!(l.target&&l.target.closest&&l.target.closest(".qc-ctx"))&&p()}return t(function(){document.addEventListener("contextmenu",b,!0),document.addEventListener("touchstart",M,{passive:!0}),document.addEventListener("touchend",V,!0),document.addEventListener("keydown",P,!0),document.addEventListener("mousedown",v,!0)}),m(function(){document.removeEventListener("contextmenu",b,!0),document.removeEventListener("touchstart",M,!0),document.removeEventListener("touchend",V,!0),document.removeEventListener("keydown",P,!0),document.removeEventListener("mousedown",v,!0)}),{visible:d,pos:k,actions:r,run:_}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantRequestCore=t()})(typeof self<"u"?self:void 0,function(){function a(){var t=0,m={};function e(n){var p=++t;if(n&&m[n])return{deduped:!0,id:m[n].seq,controller:m[n].controller};var o=typeof AbortController<"u"?new AbortController:null;return m[n]={seq:p,controller:o},{deduped:!1,id:p,controller:o}}function c(n,p){var o=m[n];return!o||o.seq!==p}function d(n){var p=m[n];if(p&&p.controller)try{p.controller.abort()}catch{}}function k(n,p){var o=m[n];o&&o.seq===p&&delete m[n]}function r(){var n=0;for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&n++;return n}return{begin:e,isStale:c,abort:d,finish:k,activeCount:r}}return{createRequestGuard:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:m,watch:e}=Vue,{consensus:c,currentPage:d,currentSubPage:k,dashboardData:r,searchKeyword:n,statusFilter:p,strategyFilter:o,strategyFilterCounts:_}=a;function b(K){const A=o.value.selected;if(!A||A.length===0)return K;const L=o.value.mode;return K.filter(H=>{const $=H.strategy_names||H.strategies||[];return L==="union"?A.some(ee=>$.includes(ee)):A.every(ee=>$.includes(ee))})}const S=m(()=>{const K=b(c.value||[]);return{all:K.length,newCount:K.filter(A=>A.status==="new").length,current:K.filter(A=>A.status==="current").length,out:K.filter(A=>A.status==="out").length}}),x=m(()=>{let K=c.value||[];if(p.value!=="all"&&(K=K.filter(A=>A.status===p.value)),K=b(K),n.value){const A=n.value.toLowerCase();K=K.filter(L=>L.code.toLowerCase().includes(A)||L.name&&L.name.toLowerCase().includes(A))}return K}),M=m(()=>{const K=c.value||[],A={},L={};for(const H of K)H.code&&H.name&&(L[H.code]=H.name);for(const H of K){const $=H.strategy_names||H.strategies||[];for(const ee of $)A[ee]||(A[ee]={strategy:ee,count:0,codes:[],names:[]}),A[ee].count++,A[ee].codes.includes(H.code)||(A[ee].codes.push(H.code),A[ee].names.push({code:H.code,name:L[H.code]||H.code}))}return Object.values(A).sort((H,$)=>$.count-H.count)}),V=m(()=>{const K=o.value.selected,A=o.value.mode,L={};for(const[H,$]of Object.entries(_.value)){const ee=$||[];!K||K.length===0?L[H]=ee.length:A==="union"?L[H]=ee.filter(le=>le.strategies&&K.some(ae=>le.strategies.includes(ae))).length:L[H]=ee.filter(le=>le.strategies&&K.every(ae=>le.strategies.includes(ae))).length}return L});function P(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const v=m(()=>{const K=(r.value||{}).consensus_rank||[];return b(K)}),l=m(()=>{const K=c.value||_.value.day||[];return b(K).length}),g=m(()=>{const K=(r.value||{}).strategy_counts||[],A=c.value||_.value.day||[];if(A.length===0)return K;const L=b(A),H={};L.forEach(ee=>{(ee.strategy_names||ee.strategies||[]).forEach(ae=>{H[ae]=(H[ae]||0)+1})});const $=L.length||1;return K.map(ee=>{const le=ee.strategy_name||ee.strategy_id,ae=H[le]||0;return{...ee,count:ae,percentage:Math.round(ae/$*1e3)/10}})}),I=m(()=>{const K=(r.value||{}).pool_changes||{},A=(K.new_count||0)-(K.out_count||0);return A>0?{dir:"up",text:"↑"+A}:A<0?{dir:"down",text:"↓"+Math.abs(A)}:{dir:"flat",text:"→0"}}),W=m(()=>{const K=(r.value||{}).time_coverage||{},A=new Date(K.start_date),L=new Date(K.end_date),H=new Date;if(!A.getTime()||!L.getTime()||H>=L)return 100;if(H<=A)return 0;const $=L-A,ee=H-A;return Math.round(ee/$*100)}),E=t(null);function N(K){o.value.selected=[K],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([K])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",k.value="calendar"}return{applyStrategyFilter:b,statusCounts:S,stockPool:x,strategyDistribution:M,strategyPreviewCount:V,saveStrategyFilter:P,filteredConsensusRank:v,currentPoolSize:l,filteredStrategyCounts:g,poolChangeBadge:I,timeBarPercent:W,lastRefreshTime:E,navigateToStrategyFilter:N}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function m(r){return a[r]||"var(--text-tertiary)"}function e(r){return t[r]||"var(--bg-hover)"}const c=window.QuantUndoCore,d=c?c.createUndoStack():null;function k(r,n){if(!d||!window.Vue||!window.Vue.h)return;const p=window.Vue.h;ElementPlus.ElMessage.success({message:p("span",null,[r,p("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(n)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(r){const{ref:n,computed:p,watch:o}=Vue,{currentUser:_,selectedDate:b,stockDetail:S,stockDetailTab:x,stockDetailVisible:M,stockDetailLoading:V,stockKlineLoaded:P,viewCache:v,animateScoreEntrance:l,loadStockKline:g,refreshStockScore:I,disposeStockKline:W,aiHistory:E,aiLoading:N,aiEvalStage:K,aiEvalElapsed:A,aiEvalError:L,aiResult:H,loadLastEvaluation:$,autoEvaluateConfig:ee,autoEvaluateScope:le,batchStocks:ae,batchRunning:D,batchTotal:s,batchCompleted:y,batchCurrent:i,batchStatuses:h,batchResults:X,batchEvalErrors:z,expandedDates:w,expandedStocks:f,savingConfig:C,selectedHistoryIds:u,selectedWatchlistCodes:O,showAutoEvaluateSettings:oe,showBatchEvaluate:J}=r,T=R=>(getComputedStyle(document.documentElement).getPropertyValue(R)||"").trim(),U=n(""),ie=n("default"),ge=n("default"),qe=n([]),Q=p(()=>new Set(qe.value.map(R=>R.code))),ue=n(!1),De=n(!1),se=p(()=>{const R=[...qe.value];return ge.value==="name"?R.sort((ne,de)=>ne.name.localeCompare(de.name,"zh")):ge.value==="added"?R.sort((ne,de)=>(de.added_at||"").localeCompare(ne.added_at||"")):ge.value==="score"&&R.sort((ne,de)=>{const Me=Pe(ne.code);return Pe(de.code)-Me}),R});function be(R){const ne=E.value.filter(Me=>Me.stock_code===R);if(ne.length===0)return null;const de=ne.reduce((Me,Re)=>Me.evaluate_time>Re.evaluate_time?Me:Re);return{score:de.result.total_score,color:m(de.result.level),bg:e(de.result.level)}}function Pe(R){const ne=be(R);return ne?ne.score:0}function me(R){dt(R.code,R.name),fe.value=fe.value.filter(ne=>ne.code!==R.code),te.value=""}const we=p(()=>new Set(E.value.map(R=>R.stock_code))),xe=n(new Set);function ce(R){xe.value.add(R)}const te=n(""),fe=n([]),Ne=n(!1),Be=n({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),We=n(!1),qt=n(!1),gt=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};gt.REALTIME_WS_PATH;const Tt=gt.REALTIME_DEGRADED_TEXT||"数据不可达",Se=gt.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";gt.WARN_RISE_SPEED_THRESHOLD!=null&&gt.WARN_RISE_SPEED_THRESHOLD,gt.WARN_VOLUME_RATIO_THRESHOLD!=null&&gt.WARN_VOLUME_RATIO_THRESHOLD;const Ee=gt.quoteFmt||{price:R=>R==null?"--":Number(R).toFixed(2),pct:R=>R==null?"--":Number(R).toFixed(2)+"%",num:R=>R==null?"--":Number(R).toFixed(2),color:R=>""},Ve=3,Oe=5e3,$e=n({}),Xe=n(!1),Ye=n("idle");let nt=null,yt=null,Et=0;function Ft(R){return gt.checkQuoteWarning?gt.checkQuoteWarning(R):null}function aa(R){return Ft($e.value[R])}function j(R){return Ee.color($e.value[R])}function Z(R){return Ee.price($e.value[R]&&$e.value[R].price)}function Ce(R){return Ee.pct($e.value[R]&&$e.value[R].change_pct)}function Ie(R,ne){return Ee.num($e.value[R]&&$e.value[R][ne])}function Ue(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function wt(){if(!nt||nt.readyState!==1)return;const R=(qe.value||[]).map(ne=>ne.code);R.length!==0&&nt.send(JSON.stringify({subscribe:R}))}function Je(){if(yt&&(clearTimeout(yt),yt=null),nt){try{nt.onopen=null,nt.onmessage=null,nt.onerror=null,nt.onclose=null,nt.close()}catch{}nt=null}$e.value={},Xe.value=!1,Ye.value="idle"}function Ge(){const R=Ue();if(!R||!gt.buildRealtimeWsUrl||Ye.value==="open"||Ye.value==="connecting")return;let ne;try{ne=gt.buildRealtimeWsUrl()+"?token="+encodeURIComponent(R)}catch{Ye.value="offline",Xe.value=!0;return}Ye.value="connecting";let de=null;try{de=new WebSocket(ne)}catch{Ye.value="offline",Xe.value=!0;return}nt=de,de.onopen=function(){Ye.value="open",Et=0,wt()},de.onmessage=function(Me){let Re=null;try{Re=JSON.parse(Me.data||"{}")}catch{return}if(!Re||Re.type!=="quotes")return;if(Xe.value=!!Re.degraded,Re.degraded||!Array.isArray(Re.data)){$e.value={};return}const At={};Re.data.forEach(function(at){at&&at.code&&(At[at.code]=at)}),$e.value=At},de.onerror=function(){Ye.value="offline",Xe.value=!0},de.onclose=function(){Ye.value="offline",Et<Ve?(Et++,yt=setTimeout(function(){Ye.value!=="open"&&Ge()},Oe*Et)):Xe.value=!0}}o(qe,function(){Ye.value==="open"&&wt()}),Ue()&&setTimeout(Ge,500);async function kt(){if(!S.value)return;N.value=!0,H.value=null,L.value="",K.value="fetching",A.value=0;const R=Date.now(),ne=setInterval(()=>{N.value&&(A.value=Math.round((Date.now()-R)/1e3))},500);try{const de=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:S.value.stock,stock_name:S.value.name||S.value.stock,strategy:ie.value})});K.value="calculating";const Me=await de.json();K.value="analyzing",Me.success?(await nextTick(),H.value=Me.data,x.value="ai",_t()):(L.value=Me.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch(de){L.value=de&&de.message&&!String(de.message).includes("Failed to fetch")?de.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{clearInterval(ne),N.value=!1,A.value=0,L.value?K.value="":(K.value="done",setTimeout(()=>{K.value==="done"&&(K.value="")},800))}}const rt=50,ft=n(0),lt=n(!1),Ht=p(()=>E.value.length<ft.value);async function _t(){ue.value=!0,De.value=!1;try{if(!localStorage.getItem("quant_token")){E.value=[];return}const ne=await fetch(`/api/ai/history?limit=${rt}&offset=0`);if(ne.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),_.value=null;return}const de=await ne.json();de.success?(E.value=de.data||[],ft.value=de.total!=null?de.total:E.value.length):De.value=!0}catch(R){console.error("[loadAiHistory] error:",R),De.value=!0}finally{ue.value=!1}}async function G(){if(!(lt.value||!Ht.value)){lt.value=!0;try{const ne=await(await fetch(`/api/ai/history?limit=${rt}&offset=${E.value.length}`)).json();if(ne.success&&Array.isArray(ne.data)){const de=new Set(E.value.map(Re=>Re.id)),Me=ne.data.filter(Re=>!de.has(Re.id));E.value=E.value.concat(Me),ne.total!=null&&(ft.value=ne.total)}}catch(R){console.warn("[loadMoreAiHistory] error:",R)}finally{lt.value=!1}}}async function ke(R){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const de=await(await fetch(`/api/ai/history/${R}`,{method:"DELETE"})).json();if(de.success){ElementPlus.ElMessage.success("删除成功"),_t();const Me=u.value.indexOf(R);Me>=0&&u.value.splice(Me,1)}else ElementPlus.ElMessage.error(de.message||"删除失败")}catch{}}function je(R){const ne=u.value.indexOf(R);ne>=0?u.value.splice(ne,1):u.value.push(R)}function ct(){u.value=[]}function zt(){O.value=[]}async function Pt(){const R=u.value;if(R.length===0)return;const ne=E.value.filter(de=>R.includes(de.id)).map(de=>de.stock_code);J.value=!0,ae.value=[...new Set(ne)].join(",")}async function vt(){const R=u.value;if(R.length===0)return;const ne=E.value.filter(Re=>R.includes(Re.id)),de=[...new Map(ne.map(Re=>[Re.stock_code,Re])).values()];let Me=0;for(const Re of de)Q.value.has(Re.stock_code)||(await dt(Re.stock_code,Re.stock_name||Re.stock_code),Me++);Me>0?ElementPlus.ElMessage.success(`已加入 ${Me} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Dt(){const R=u.value;if(R.length===0)return;const ne=E.value.filter(Me=>R.includes(Me.id)),de=[...new Map(ne.map(Me=>[Me.stock_code,Me])).values()];try{const Re=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:de.map(At=>({stock_code:At.stock_code,stock_name:At.stock_name||""}))})})).json();Re&&Re.success?ElementPlus.ElMessage.success(`已登记 ${Re.count||de.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Re&&Re.detail||"批量加入组合失败")}catch(Me){console.warn("batchAddToPortfolio failed:",Me),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Kt(){if(O.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${O.value.length} 只股票？`,"提示",{type:"warning"});for(const R of O.value)await $t(R);O.value=[],ElementPlus.ElMessage.success("已移除")}catch(R){R&&R.message!=="cancel"&&console.warn("batchRemoveWatchlist:",R)}}function Jt(R){const ne=O.value.indexOf(R);ne>=0?O.value.splice(ne,1):O.value.push(R)}function xt(){u.value.length===E.value.length?u.value=[]:u.value=E.value.map(R=>R.id)}function pt(){O.value.length===qe.value.length?O.value=[]:O.value=qe.value.map(R=>R.code)}async function Zt(){if(u.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${u.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const ne=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:u.value})})).json();ne.success?(ElementPlus.ElMessage.success(ne.message),u.value=[],_t()):ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{}}async function Rt(){try{const ne=await(await fetch("/api/ai/auto-config")).json();ne.success&&(ee.value=ne.data,ne.data.evaluate_scope&&(le.value=ne.data.evaluate_scope))}catch(R){console.warn("loadAutoEvaluateConfig failed:",R)}}async function ra(){C.value=!0;try{ee.value.evaluate_scope=le.value;const ne=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee.value)})).json();ne.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),oe.value=!1):ElementPlus.ElMessage.error(ne.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{C.value=!1}}const Qt=n(!1);async function sa(){Qt.value=!0;try{const ne=await(await fetch("/api/watchlist")).json();ne.success&&(qe.value=ne.stocks||[])}catch(R){console.warn("loadWatchlist failed:",R)}finally{Qt.value=!1}}async function dt(R,ne){try{const Me=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:R,name:ne})})).json();if(Me.success)return Me.existed||qe.value.push({code:R,name:ne,added_at:new Date().toISOString()}),!0}catch(de){console.warn("addToWatchlist failed:",de)}return!1}async function $t(R){try{const ne=qe.value.find(Me=>Me.code===R),de=ne&&ne.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(R)}`,{method:"DELETE"}),qe.value=qe.value.filter(Me=>Me.code!==R),Q.value&&Q.value.delete&&Q.value.delete(R),d){const Me=d.register(()=>{dt(R,de)},"移除自选",5e3);k("已移除自选",Me)}else ElementPlus.ElMessage.info("已移除自选")}catch(ne){console.warn("removeFromWatchlist failed:",ne)}}async function ca(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const R=qe.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),qe.value=[],Q.value&&Q.value.clear&&Q.value.clear(),ElementPlus.ElMessage.success("自选已清空"),d&&R.length){const ne=d.register(()=>{R.forEach(de=>dt(de.code,de.name||""))},"清空自选",5e3);k("自选已清空",ne)}}catch(R){console.warn("clearWatchlist failed:",R)}}async function ya(R,ne){Q.value.has(R)?(await $t(R),ElementPlus.ElMessage.info("已移除自选")):await dt(R,ne)&&ElementPlus.ElMessage.success("已加入自选")}async function _a(R,ne){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(R,ne||"");const de=new Date().toISOString().split("T")[0],Me=b.value||de;x.value="kline",H.value=null,L.value="",W("stockKlineChart"),S.value=null,V.value=!0,P.value=!1,M.value=!0,nextTick(()=>l());try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(R)}?date=${Me}`);S.value=await Re.json()}catch{S.value={stock:R,name:ne,total_days:0}}finally{V.value=!1}await nextTick(),await g("daily"),I(),$(R)}const na=n(!1);async function B(){var R;if(qe.value.length!==0){na.value=!0;try{const de=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();de.success&&de.loaded>0?(((R=de.details)==null?void 0:R.loaded)||[]).forEach(Me=>xe.value.add(Me.code)):de.loaded===0&&de.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(ne){console.error("预加载K线失败:",ne)}finally{na.value=!1}}}async function _e(R,ne){N.value=!0,H.value=null,L.value="",K.value="fetching",P.value=!1,W();const de=new Date().toISOString().split("T")[0],Me=b.value||de;try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(R)}?date=${Me}`);S.value=await Re.json()}catch{S.value={stock:R,name:ne,total_days:0}}x.value="ai",M.value=!0,await nextTick();try{const At=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R,stock_name:ne})})).json();At.success?(H.value=At.data,_t()):(L.value=At.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch{L.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{N.value=!1,K.value=""}}async function He(){qe.value.length!==0&&(J.value=!0,ae.value=qe.value.map(R=>R.code).join(","))}async function ze(){O.value.length!==0&&(J.value=!0,ae.value=O.value.join(","))}async function ut(){if(!te.value.trim()){fe.value=[];return}Ne.value=!0;try{const ne=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(te.value)}`)).json();fe.value=(ne.results||[]).filter(de=>!Q.value.has(de.code))}catch(R){console.warn("searchStockForWatchlist failed:",R)}finally{Ne.value=!1}}async function et(){try{const ne=await(await fetch("/api/data-refresh/config")).json();Be.value=ne}catch(R){console.error("加载数据刷新配置失败:",R)}}async function It(){qt.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Be.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{qt.value=!1}}async function Wt(){var R;We.value=!0;try{const de=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();de.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((R=de.parser_stats)==null?void 0:R.dates_count)||0}交易日`),v.clear(),await et()):ElementPlus.ElMessage.error(de.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{We.value=!1}}const Ut=n(!1);async function xa(){Ut.value=!0;try{const ne=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(ne.success){const de=ne.result||{},Me=ne.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${de.pulled||0}/${de.total||0}, 财务 ${Me.pulled||0}/${Me.total||0}`),v.clear(),await et()}else ElementPlus.ElMessage.error(ne.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Ut.value=!1}}const ba=p(()=>{const R={};for(const ne of E.value){const de=(ne.evaluate_time||"").split("T")[0];R[de]||(R[de]=[]),R[de].push(ne)}for(const ne in R)R[ne].sort((de,Me)=>Me.evaluate_time.localeCompare(de.evaluate_time));return R}),da=p(()=>{const R={};for(const ne of E.value){const de=ne.stock_code;R[de]||(R[de]=[]),R[de].push(ne)}for(const ne in R)R[ne].sort((de,Me)=>Me.evaluate_time.localeCompare(de.evaluate_time));return R}),la=p(()=>{const R={};for(const ne of E.value){const de=(ne.evaluate_time||"").split("T")[0].slice(0,7);R[de]||(R[de]=[]),R[de].push(ne)}for(const ne in R)R[ne].sort((de,Me)=>Me.evaluate_time.localeCompare(de.evaluate_time));return R}),Aa=p(()=>Object.keys(da.value).length),ua=p(()=>{const R=E.value.length;return R===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(de=>{const Me=E.value.filter(Re=>Re.result.total_score>=de.min&&Re.result.total_score<=de.max).length;return{...de,count:Me,pct:Math.round(Me/R*100)}})});async function La(){if(!U.value)return;const R=qe.value.find(ne=>ne.code===U.value);if(R){N.value=!0,H.value=null,L.value="",K.value="fetching";try{S.value={stock:R.code,name:R.name,total_days:0},M.value=!0,x.value="ai",await nextTick();const de=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R.code,stock_name:R.name,strategy:ie.value})})).json();de.success?(H.value=de.data,_t(),U.value=""):(L.value=de.message||"评估失败",ElementPlus.ElMessage.error(L.value))}catch{L.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(L.value)}finally{N.value=!1,K.value=""}}}function va(R){const ne=w.value.indexOf(R);ne>=0?w.value.splice(ne,1):w.value.push(R)}function Ta(R){const de=(ba.value[R]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}function wa(R){const de=(la.value[R]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}function Ia(R){const ne=f.value.indexOf(R);ne>=0?f.value.splice(ne,1):f.value.push(R)}function Na(R){const de=(da.value[R]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}const Gt={},ma={};function q(R,ne,de){if(!R||(de&&(ma[ne]={el:R,records:de}),Gt[ne]===R))return;const Me=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Re=()=>{Object.keys(Gt).forEach(Ze=>{if(Gt[Ze]&&Gt[Ze]!==R){try{Gt[Ze].dispose()}catch{}delete Gt[Ze]}});const At=[...de].sort((Ze,Nt)=>Ze.evaluate_time.localeCompare(Nt.evaluate_time)),at=At.map(Ze=>(Ze.evaluate_time||"").split("T")[0]),ht=At.map(Ze=>{var Nt;return((Nt=Ze.result)==null?void 0:Nt.total_score)??null}),Xt=At.map(Ze=>{var Nt;return((Nt=Ze.result)==null?void 0:Nt.level)??""}),Lt={primary:T("--qc-primary-600")||"#b8922a",textPrimary:T("--text-primary")||"#1f2937",textSecondary:T("--text-secondary")||"#6b7280",border:T("--chart-axis")||"#b9b2a6",axis:T("--chart-axis")||"#b9b2a6",split:T("--chart-split")||"#e7e1d6",up:T("--qc-market-up")||"#e63946",down:T("--qc-market-down")||"#2e7d32"},fa=[];for(let Ze=1;Ze<ht.length;Ze++)ht[Ze]!=null&&ht[Ze-1]!=null&&Math.abs(ht[Ze]-ht[Ze-1])>=15&&fa.push({name:"大幅变化",coord:[at[Ze],ht[Ze]],value:(ht[Ze]-ht[Ze-1]>0?"↑":"↓")+Math.abs(ht[Ze]-ht[Ze-1]),symbol:"pin",symbolSize:32,itemStyle:{color:ht[Ze]-ht[Ze-1]>0?Lt.up:Lt.down}});const ia=echarts.init(R),St=window.__quantModules&&window.__quantModules.echartsTheme;St&&typeof St.getEChartsTheme=="function"&&ia.setOption(St.getEChartsTheme()),ia.setOption({tooltip:{trigger:"axis",backgroundColor:T("--bg-card")||"#ffffff",borderColor:Lt.border,textStyle:{color:Lt.textPrimary},formatter:function(Ze){var Mt;const Nt=(Mt=Ze[0])==null?void 0:Mt.dataIndex,Sa=Nt!=null?Xt[Nt]:"";return at[Nt]+"<br/>得分: "+ht[Nt]+(Sa?" ("+Sa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:at,axisLabel:{fontSize:10,rotate:30,color:Lt.textSecondary},axisLine:{lineStyle:{color:Lt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Lt.textSecondary},splitLine:{lineStyle:{color:Lt.split}}},series:[{data:ht,type:"line",smooth:!0,lineStyle:{color:Lt.primary,width:2},itemStyle:{color:Lt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:fa.length>0?{data:fa}:void 0}]}),Gt[ne]=ia};Me?Me().then(Re).catch(()=>{}):Re()}function Y(){Object.keys(ma).forEach(R=>{const ne=ma[R];if(!(!ne||!ne.el)){if(Gt[R]){try{Gt[R].dispose()}catch{}delete Gt[R]}q(ne.el,R,ne.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Y));async function Ae(R){H.value=R,P.value=!1,W();try{const ne=await fetch(`/api/calendar/stock/${R.stock_code}?date=${b.value}`);S.value=await ne.json()}catch{S.value={stock:R.stock_code,name:R.stock_name||R.stock_code,total_days:0,history:[]}}M.value=!0,x.value="ai"}async function mt(){if(!ae.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const R=ae.value.split(/[,，\s]+/).filter(at=>at.trim());if(R.length===0)return;D.value=!0,s.value=R.length,y.value=0,i.value="",h.value={},X.value={},z.value={},R.forEach(at=>{h.value[at]="pending",X.value[at]=null});const ne={"Content-Type":"application/json"};let de=0,Me=0,Re=!1;try{const at=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:ne,body:JSON.stringify({stock_codes:R})});if(at.ok&&at.body){Re=!0;const ht=at.body.getReader(),Xt=new TextDecoder("utf-8");let Lt="",fa=!1;for(;!fa;){const{value:ia,done:St}=await ht.read();fa=St,Lt+=Xt.decode(ia||new Uint8Array,{stream:!fa});let Ze;for(;(Ze=Lt.indexOf(`

`))>=0;){const Nt=Lt.slice(0,Ze);Lt=Lt.slice(Ze+2);const Sa=Nt.split(`
`).find(Ga=>Ga.startsWith("data: "));if(!Sa)continue;let Mt;try{Mt=JSON.parse(Sa.slice(6))}catch{continue}Mt.type==="start"?Mt.total&&(s.value=Mt.total):Mt.type==="item"?(y.value++,i.value=Mt.stock_code,Mt.success?(h.value[Mt.stock_code]="success",X.value[Mt.stock_code]=Mt,de++):(h.value[Mt.stock_code]="error",z.value[Mt.stock_code]=Mt.error||"评估失败",Me++)):Mt.type==="done"&&(typeof Mt.success=="number"&&(de=Mt.success),typeof Mt.fail=="number"&&(Me=Mt.fail))}}if(Lt.trim()){const ia=Lt.split(`
`).find(St=>St.startsWith("data: "));if(ia)try{const St=JSON.parse(ia.slice(6));St.type==="item"?(y.value++,i.value=St.stock_code,St.success?(h.value[St.stock_code]="success",X.value[St.stock_code]=St,de++):(h.value[St.stock_code]="error",z.value[St.stock_code]=St.error||"评估失败",Me++)):St.type==="done"&&(typeof St.success=="number"&&(de=St.success),typeof St.fail=="number"&&(Me=St.fail))}catch{}}}}catch{Re=!1}if(!Re){de=0,Me=0,y.value=0;for(const at of R){i.value=at,h.value[at]="running";try{const Xt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:ne,body:JSON.stringify({stock_code:at.trim(),stock_name:at.trim()})})).json();Xt.success?(h.value[at]="success",X.value[at]=Xt.data,de++):(h.value[at]="error",z.value[at]=Xt.message&&Xt.message!=="success"?Xt.message:"评估失败",Me++)}catch(ht){h.value[at]="error",z.value[at]="网络错误: "+(ht&&ht.message?ht.message:ht),Me++}y.value++}}i.value="",await _t();const At=R.length;setTimeout(()=>{Me===0?ElementPlus.ElMessage.success(`评估完成 成功 ${de}/${At}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${de}/${At} · 失败 ${Me}`),D.value=!1},500)}return{quickEvalStock:U,evalStrategy:ie,watchlistSort:ge,watchlist:qe,watchlistCodes:Q,sortedWatchlist:se,getWatchlistScore:be,getLatestScore:Pe,addSearchResult:me,evaluatedCodes:we,klineLoadedCodes:xe,markKlineLoaded:ce,watchlistSearch:te,watchlistResults:fe,watchlistSearching:Ne,dataRefreshConfig:Be,dataRefreshReloading:We,dataRefreshSaving:qt,aiHistoryLoading:ue,aiHistoryError:De,aiHistoryTotal:ft,aiHistoryLoadingMore:lt,hasMoreAiHistory:Ht,loadMoreAiHistory:G,watchlistLoading:Qt,doAiEvaluate:kt,loadAiHistory:_t,deleteSingleHistory:ke,toggleSelectHistory:je,clearSelection:ct,clearWatchlistSelection:zt,batchReevaluateHistory:Pt,batchAddToWatchlist:vt,batchAddToPortfolio:Dt,batchRemoveWatchlist:Kt,toggleSelectWatchlist:Jt,selectAllHistory:xt,selectAllWatchlist:pt,deleteSelectedHistory:Zt,loadAutoEvaluateConfig:Rt,saveAutoEvaluateConfig:ra,loadWatchlist:sa,addToWatchlist:dt,removeFromWatchlist:$t,clearWatchlist:ca,toggleWatchlist:ya,showStockKline:_a,preloadingKline:na,preloadWatchlistKline:B,watchlistEvaluate:_e,batchEvaluateWatchlist:He,batchEvaluateSelected:ze,searchStockForWatchlist:ut,loadDataRefreshConfig:et,saveDataRefreshConfig:It,triggerDataReload:Wt,triggerDataPull:xa,dataPullRunning:Ut,groupedByDate:ba,aiHistoryByStock:da,groupedByMonth:la,aiHistoryStockCount:Aa,scoreDistribution:ua,quickEvaluate:La,toggleDateExpand:va,toggleSelectDate:Ta,toggleSelectMonth:wa,toggleStockExpand:Ia,toggleSelectStock:Na,registerTrendChart:q,viewAiResult:Ae,doBatchEvaluate:mt,realtimeQuotes:$e,realtimeDegraded:Xe,realtimeWsState:Ye,connectRealtimeQuotes:Ge,disconnectRealtimeQuotes:Je,quoteWarningFor:aa,realtimeQuoteColor:j,realtimePriceText:Z,realtimePctText:Ce,realtimeRatioText:Ie,REALTIME_DEGRADED_TEXT:Tt,REALTIME_FALLBACK_TEXT:Se}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:m}=Vue,e=t([]),c=t(null),d=t([]),k=t(!1),r=t(!1),n=t(!1),p=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),_=t(!1),b=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),S=t(!1),x=t("positions"),M=t(30),V=t(!1),P=t(""),v=t(!1),l=t({dates:[],equity:[],values:[]}),g=m(()=>e.value.length),I=t("metrics"),W=t(!1),E=t(""),N=t(!1),K=t({metrics:null,rules:[],rebalance:null}),A=m(function(){const u=K.value.metrics;if(!u)return[];const O=function(J){return J==null?"--":Number(J).toFixed(2)+"%"},oe=function(J){return J==null?"--":Number(J).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:O(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:O(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:O(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:O(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:O(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:O(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:oe(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:oe(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:oe(u.calmar_ratio)},{key:"beta",label:"Beta",value:oe(u.beta)}]});async function L(){W.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),O=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),oe=u&&u.success?u.risk:null,J=O&&O.success?O.rules||[]:[],T=O&&O.success?O.rebalance:null;K.value={metrics:oe,rules:J,rebalance:T},N.value=!!(oe&&Object.keys(oe).length>0),E.value=u&&u.note||O&&O.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),N.value=!1,E.value="风险数据加载失败"}finally{W.value=!1}}async function H(){k.value=!0,r.value=!1;try{const O=await(await fetch("/api/portfolio")).json();O.success?(e.value=O.positions||[],c.value=O.summary||null):r.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),r.value=!0}finally{k.value=!1}}async function $(){const u=p.value,O=(u.stock_code||"").trim();if(!O){ElementPlus.ElMessage.warning("请输入股票代码");return}const oe=Number(u.cost_price),J=Number(u.quantity);if(!(oe>0)||!(J>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const U=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:(u.stock_name||"").trim(),cost_price:oe,quantity:J})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"持仓已更新"),n.value=!1,p.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await H(),z(M.value)):ElementPlus.ElMessage.error(U.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function ee(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const oe=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();oe.success?(ElementPlus.ElMessage.success("已删除持仓"),await H(),D(),z(M.value)):ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function le(u,O){b.value={stock_code:u,stock_name:O||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},_.value=!0}async function ae(){const u=b.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const O=Number(u.price),oe=Number(u.quantity);if(!(O>0)||!(oe>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}S.value=!0;try{const T=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:O,quantity:oe,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();T.success?(ElementPlus.ElMessage.success(T.message||"调仓已记录"),_.value=!1,await H(),await D(),z(M.value)):ElementPlus.ElMessage.error(T.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{S.value=!1}}async function D(){try{const O=await(await fetch("/api/portfolio/trades")).json();O.success&&(d.value=O.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const s=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function y(u){if(!u||!u.length)return[];let O=u[0]||0;const oe=[];for(let J=0;J<u.length;J++){const T=u[J]||0;T>O&&(O=T),oe.push(O>0?Math.round((T-O)/O*1e3)/10:0)}return oe}function i(){const u={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},O=l.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(oe){const J=oe[0]?oe[0].dataIndex:-1,T=O.dates[J]||"",U=O.equity[J],ie=O.values[J];let ge=T||"";return U!=null&&(ge+="<br/>组合净值: "+U),ie!=null&&(ge+="<br/>组合市值: "+ie),ge}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:O.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:y(O.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function h(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(u,O,oe){l.value={dates:u||[],equity:O||[],values:oe||[]},v.value=!!u&&u.length>0,v.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",i,{key:"portfolio-equity"}):h()}async function z(u){V.value=!0,P.value="";const O=Number(u)||M.value||30;M.value=O;try{const J=await(await fetch("/api/portfolio/equity_curve?days="+O)).json();J.success?(P.value=J.note||"",X(J.dates||[],J.equity||[],J.values||[])):(P.value="数据暂不可用",h())}catch(oe){console.warn("[portfolio] 加载收益曲线失败:",oe),P.value="数据暂不可用",h()}finally{V.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function w(u,O){if(u==null||u===""||isNaN(Number(u)))return"--";const oe=Number(u),J=O??2;return(oe>=0?"+":"")+oe.toFixed(J)}function f(u,O){if(u==null||u===""||isNaN(Number(u)))return"--";const oe=Number(u),J=O??2;return(oe>=0?"+":"")+oe.toFixed(J)+"%"}function C(u){if(u==null||u===""||isNaN(Number(u)))return"";const O=Number(u);return O>0?"portfolio-up":O<0?"portfolio-down":""}return{positions:e,summary:c,trades:d,loading:k,loadError:r,showAddForm:n,addForm:p,addSaving:o,tradeFormVisible:_,tradeForm:b,tradeSaving:S,portfolioTab:x,equityDays:M,equityLoading:V,equityNote:P,equityHasData:v,portfolioCount:g,loadPortfolio:H,addPosition:$,removePosition:ee,openTradeForm:le,submitTrade:ae,loadTrades:D,loadEquity:z,fmtSigned:w,fmtSignedPct:f,signClass:C,riskTab:I,riskLoading:W,riskNote:E,riskHasData:N,riskData:K,riskMetricList:A,loadRisk:L}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(n,p){var o=Number(n);return isFinite(o)?o:typeof p=="number"?p:0}function t(n){var p=Array.isArray(n)?n:[];if(p.length<2)return null;for(var o=-1/0,_=0,b=0,S=0,x=0,M=0;M<p.length;M++){var V=a(p[M].equity!=null?p[M].equity:p[M].value);V>o&&(o=V,_=M);var P=o>0?(o-V)/o*100:0;P>b&&(b=P,S=_,x=M)}function v(l){return p[l]&&p[l].date?p[l].date:""}return{maxDrawdown:Math.round(b*100)/100,peakIndex:S,troughIndex:x,peakDate:v(S),troughDate:v(x)}}function m(n){for(var p=n||{},o={},_=Object.keys(p).sort(),b=0;b<_.length;b++){var S=_[b],x=String(S).slice(0,4);/^\d{4}$/.test(x)&&(o[x]=(o[x]||0)+a(p[S]))}var M=Object.keys(o).sort();return M.map(function(V){return{year:V,return:Math.round(o[V]*100)/100}})}function e(n){var p=Array.isArray(n)?n:[],o={};p.forEach(function(S){(S.points||[]).forEach(function(x){x&&x.date&&(o[x.date]=1)})});var _=Object.keys(o).sort(),b=p.map(function(S){var x={};return(S.points||[]).forEach(function(M){M&&M.date&&(x[M.date]=a(M.value!=null?M.value:M.equity))}),{name:S.name||"",data:_.map(function(M){return M in x?x[M]:null})}});return{dates:_,series:b}}function c(n){var p=n||{},o=function(b){return a(b)},_=function(b,S){var x=o(b);return isFinite(x)?x.toFixed(S):"--"};return[{key:"total_return",label:"总收益",value:_(p.total_return,2),suffix:"%",dir:o(p.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:_(p.annual_return,2),suffix:"%",dir:o(p.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:_(p.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:_(p.sharpe_ratio,2),suffix:"",dir:o(p.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:_(p.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:_(p.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(p.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:_(p.volatility,2),suffix:"%",dir:""}]}function d(n){var p=n==null?"":String(n);return/[",\n]/.test(p)?'"'+p.replace(/"/g,'""')+'"':p}function k(n){var p=n||{},o=[];o.push("回测指标"),o.push("指标,数值"),(p.metrics||[]).forEach(function(v){o.push(d(v.label)+","+d((v.value||"")+(v.suffix||"")))}),o.push(""),o.push("净值曲线");var _=["日期"].concat((p.series||[]).map(function(v){return v.name}));o.push(_.map(d).join(","));for(var b=p.dates||[],S=p.series||[],x=0;x<b.length;x++){for(var M=[b[x]],V=0;V<S.length;V++){var P=S[V].data&&S[V].data[x];M.push(P??"")}o.push(M.map(d).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(p.trades||[]).forEach(function(v){o.push(d(v.date)+","+d(v.stock)+","+d(v.action)+","+d(v.reason))}),o.join(`
`)}function r(n){return n==="buy"?"买入":n==="sell"?"卖出":n||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:m,buildNavSeries:e,buildMetrics:c,buildBacktestCsv:k,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:m}=Vue,e=window.QuantBacktest||{},c=a||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(c.backtestStrategies)&&c.backtestStrategies.length?c.backtestStrategies:d).map(s=>({id:s.id,name:s.name})),n=t(r.length?[r[0].id]:[]),p=t(V()),o=t(1e5),_=t(3e-4),b=t(!1),S=t(!1),x=t(null),M=t("");function V(){const s=new Date,y=new Date;y.setFullYear(y.getFullYear()-1);const i=h=>h.getFullYear()+"-"+String(h.getMonth()+1).padStart(2,"0")+"-"+String(h.getDate()).padStart(2,"0");return[i(y),i(s)]}function P(s){const y=n.value.indexOf(s);y>=0?n.value.length>1&&n.value.splice(y,1):n.value.push(s)}function v(s){const y=r.find(i=>i.id===s);return y?y.name:s}function l(s){const y=s.summary||s;return{strategy_id:y.strategy_id,start_date:y.start_date,end_date:y.end_date,total_days:y.total_days,total_return:y.total_return,annual_return:y.annual_return,max_drawdown:y.max_drawdown,volatility:y.volatility,sharpe_ratio:y.sharpe_ratio,sortino_ratio:y.sortino_ratio,win_rate:y.win_rate,profit_loss_ratio:y.profit_loss_ratio,avg_positions:y.avg_positions!=null?y.avg_positions:y.avg_positions_per_day,total_trades:y.total_trades,turnover_rate:y.turnover_rate,success:y.success!==!1,message:y.message||"",insample_total_return:y.insample_total_return!=null?y.insample_total_return:null,outsample_total_return:y.outsample_total_return!=null?y.outsample_total_return:null,out_sample_ratio:y.out_sample_ratio!=null?y.out_sample_ratio:.2,overfit_warning:!!y.overfit_warning,overfit_reason:y.overfit_reason||""}}function g(s){return(Array.isArray(s)?s:[]).map(y=>({date:y.date,value:y.equity!=null?y.equity:y.value}))}function I(s,y){const i=l(y),h=g(y.equity_curve),X=y.monthly_returns||{},z=Array.isArray(y.trade_history)?y.trade_history:[],w={id:s,name:v(s),summary:i,equityCurve:h,monthlyReturns:X,trades:z};let f=null;if(b.value){const C=Number(o.value)||1e5;f={name:"现金基准",points:h.map(u=>({date:u.date,value:C}))}}return{success:!0,mode:"single",strategies:[w],primary:w,benchmark:f,period:(i.start_date||"")+" ~ "+(i.end_date||"")}}function W(s,y){const i=y.strategy_results||{},h=s.map(w=>{const f=i[w];if(!f)return null;const C=l(f);return{id:w,name:v(w),summary:C,equityCurve:g(f.equity_curve),monthlyReturns:f.monthly_returns||{},trades:Array.isArray(f.trade_history)?f.trade_history:[]}}).filter(w=>w&&w.summary.success!==!1),X=h.length?h[0]:null;let z=null;return b.value&&(z={name:"等权组合基准",points:g(y.portfolio_equity)}),{success:h.length>0,mode:"multi",strategies:h,primary:X,benchmark:z,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const E=m(()=>{const s=x.value;return!s||!s.primary?[]:e.buildMetrics?e.buildMetrics(s.primary.summary):[]}),N=m(()=>{const s=x.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(s.primary.monthlyReturns):[]}),K=m(()=>{const s=x.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((y,i)=>String(i.date||"").localeCompare(String(y.date||"")))}),A=m(()=>{const s=x.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(y=>({name:y.name,metrics:e.buildMetrics?e.buildMetrics(y.summary):[]}))}),L=m(()=>{const s=x.value;return!s||!s.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function H(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const y=n.value;if(!y.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const i=p.value,h={start_date:i&&i[0]||void 0,end_date:i&&i[1]||void 0},X={"Content-Type":"application/json"};S.value=!0,x.value=null,M.value="";try{if(y.length===1){const z=Object.assign({},h,{initial_capital:Number(o.value)||1e5,commission_rate:Number(_.value)||3e-4}),w=await fetch("/api/backtest/"+encodeURIComponent(y[0]),{method:"POST",headers:X,body:JSON.stringify(z)});if(!w.ok){const C=await w.json().catch(()=>({}));throw new Error(C.detail||"回测失败")}const f=await w.json();if(!f.success)throw new Error(f.message||"回测失败");x.value=I(y[0],f)}else{const z=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},h,{strategy_ids:y}))});if(!z.ok){const f=await z.json().catch(()=>({}));throw new Error(f.detail||"回测失败")}const w=await z.json();if(!w.success)throw new Error(w.message||"多策略回测失败");if(x.value=W(y,w.data||{}),!x.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(z){M.value=z&&z.message?z.message:"回测失败",ElementPlus.ElMessage.error(M.value)}finally{S.value=!1}}function $(){const s=x.value,y={dates:[],series:[]};if(!s)return y;const i=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&i.push({name:s.benchmark.name,points:s.benchmark.points});const h=e.buildNavSeries?e.buildNavSeries(i):y;return ee(h,s)}function ee(s,y){const i=O=>(getComputedStyle(document.documentElement).getPropertyValue(O)||"").trim(),h={primary:i("--qc-primary-600")||"#b8922a",success:i("--color-success")||"#4CAF50",accent:i("--color-accent")||"#F59E0B",info:i("--color-info")||"#1976d2",ai:i("--color-ai")||"#6366f1",textPrimary:i("--text-primary")||"#1f2937",textSecondary:i("--text-secondary")||"#6b7280",border:i("--border-light")||"#e5e7eb",up:i("--color-rise")||"#E63946",down:i("--color-fall")||"#2E7D32",bg:i("--bg-card")||"#ffffff"},X=[h.primary,h.success,h.accent,h.info,h.ai],w=h.bg.length===7&&parseInt(h.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",f=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(y.primary?y.primary.equityCurve:[]):null,C=f&&f.peakDate&&f.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:h.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+f.maxDrawdown+"%",xAxis:f.peakDate,itemStyle:{color:h.down}},{xAxis:f.troughDate}]]}:void 0,u=s.series.map((O,oe)=>{const J=y.benchmark&&O.name===y.benchmark.name,T=X[oe%X.length];return{name:O.name,type:"line",data:O.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:J?2:2.4,type:J?"dashed":"solid",color:T},itemStyle:{color:T},emphasis:{focus:"series"},...oe===0&&C?{markArea:C}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:w,borderColor:h.border,textStyle:{color:h.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:h.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:h.border}},axisLabel:{color:h.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:h.textSecondary,fontSize:11},splitLine:{lineStyle:{color:h.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:h.border,textStyle:{color:h.textSecondary,fontSize:10}}],series:u}}function le(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",$,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ae(){const s=x.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const y=s.strategies.map(u=>({name:u.name,points:u.equityCurve}));s.benchmark&&y.push({name:s.benchmark.name,points:s.benchmark.points});const i=e.buildNavSeries?e.buildNavSeries(y):{dates:[],series:[]},h=e.tradeActionText||(u=>u),X=K.value.map(u=>({date:u.date,stock:u.stock,action:h(u.action),reason:u.reason})),z=e.buildBacktestCsv?e.buildBacktestCsv({metrics:E.value,dates:i.dates,series:i.series,trades:X}):"",w=new Blob(["\uFEFF"+z],{type:"text/csv;charset=utf-8"}),f=URL.createObjectURL(w),C=document.createElement("a");C.href=f,C.download="backtest-"+s.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",C.click(),URL.revokeObjectURL(f),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function D(s,y){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(y??2)}return{btStrategyOptions:r,btSelectedStrategies:n,toggleBtStrategy:P,btDateRange:p,btCapital:o,btCommissionRate:_,btIncludeBenchmark:b,btRunning:S,btResult:x,btError:M,btMetrics:E,btAnnualReturns:N,btTrades:K,btStrategyMetricsRows:A,btDrawdownRegion:L,runBacktestWorkbench:H,exportBacktestCSV:ae,registerBacktestNavChart:le,btFmtNum:D}}}})();(function(){const{ref:a,computed:t,watch:m,onUnmounted:e}=Vue,c=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),d=72,k={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},n={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},p={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),_=a({}),b=a(!1),S=a({}),x=a({cycles:[]}),M=a([]),V=a(0),P=a(!1),v=a({autoRefresh:!0,refreshInterval:300}),l=a(""),g=a(""),I=a(!1),W=a("");let E=null;const N={x:0,y:0},K=t(()=>{const Q=_.value;return["recession","recovery","overheat","stagflation"].map(De=>{const se=Q[De]||{};return{key:De,name:se.name||De,icon:n[se.icon]||"bar-chart-3",color:se.color||c("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&p[De]||""}})}),A=t(()=>{var ue,De,se,be;const Q=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ue=Q.pmi)==null?void 0:ue.toFixed(2),color:Q.pmi>=50?c("--color-success")||"#43a047":c("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((De=Q.gdp_growth)==null?void 0:De.toFixed(2))+"%",color:c("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=Q.cpi)==null?void 0:se.toFixed(2))+"%",color:Q.cpi>1.2?c("--color-danger")||"#E53935":c("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((be=Q.m2_growth)==null?void 0:be.toFixed(2))+"%",color:c("--color-success")||"#43a047"}]}),L=Q=>{Q=Q||{};const ue=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],De=()=>c("--color-success")||"#43a047",se=()=>c("--color-danger")||"#E53935",be=()=>c("--color-warning")||"#FF9800",Pe={宽松:De(),中位:be(),偏低:se(),高增长:De(),承压:se(),不利:se()};return ue.map(me=>{const we=Q[me.key]||{},xe=we.score||0,ce=Math.min(100,Math.max(5,(xe+2)*25)),te=xe>=.3?"var(--state-success-solid)":xe>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",fe=xe>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:me.key,label:me.label,scoreStr:xe.toFixed(2),level:we.level||"—",barWidth:ce,barColor:te,scoreColor:fe,color:Pe[we.level]||"var(--text-tertiary)"}})},H=t(()=>L(o.value.dimension_scores)),$=t(()=>L(S.value._dimensions)),ee=t(()=>{var ue;const Q=((ue=o.value.confidence)==null?void 0:ue.level)||"";return Q==="高"?"var(--state-success-text)":Q==="中"?"var(--state-warning-text)":Q==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),le=t(()=>{var se,be,Pe,me;const Q=_.value,ue={recovery:0,overheat:1,stagflation:2,recession:3},De={};for(const[we,xe]of Object.entries(Q))De[we]={name:xe.name,icon:xe.icon,color:xe.color,lightColor:xe.bg_color,duration:"~"+(((se=xe.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:ue[we]||0,period:((Pe=(be=xe.case_studies)==null?void 0:be[0])==null?void 0:Pe.split("：")[0])||"",avgMonths:((me=xe.historical_stats)==null?void 0:me.avg_duration_months)||18};return De}),ae=t(()=>{var xe,ce;const Q=o.value.stage,De={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Q]||{x:150,y:150},se=o.value.dimension_scores||{},be=((xe=se.growth)==null?void 0:xe.score)||0,Pe=((ce=se.inflation)==null?void 0:ce.score)||0,me=Math.max(-30,Math.min(30,be*15)),we=Math.max(-30,Math.min(30,-Pe*15));return{x:De.x+me,y:De.y+we,prevX:N.x,prevY:N.y}}),D=t(()=>{var se;const Q=Math.min(100,((se=o.value.timing)==null?void 0:se.progress_percent)||0),ue=o.value.color||"var(--state-success-solid)",De=Q>100?"linear-gradient(90deg, "+ue+", var(--state-warning-solid))":ue;return{width:Q+"%",background:De}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function y(){var Q,ue;return((ue=(Q=o.value)==null?void 0:Q.timing)==null?void 0:ue.progress_percent)||0}function i(){var Q,ue;return((ue=(Q=o.value)==null?void 0:Q.timing)==null?void 0:ue.duration_months)||0}function h(){var Q,ue;return((ue=(Q=o.value)==null?void 0:Q.timing)==null?void 0:ue.avg_duration_months)||18}function X(Q){var be,Pe;const ue=le.value,De=((be=ue[o.value.stage])==null?void 0:be.order)||0;return(((Pe=ue[Q])==null?void 0:Pe.order)||0)<De}function z(Q){return k[Q]||Q}function w(Q){return r[Q]||Q}function f(Q){const ue=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ue[Q-1]||ue[3]}async function C(){try{const ue=await(await fetch("/api/market/merrill-clock/stages")).json();ue.success&&ue.data&&(_.value=ue.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function u(){P.value=!0;try{oe();const ue=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ue.success&&ue.data){const De=Array.isArray(ue.data.cycles)?ue.data.cycles.slice().reverse():[];x.value={cycles:De}}}catch{console.warn("获取美林时钟时间轴失败")}finally{P.value=!1}}async function O(Q){await T(Q)}async function oe(){try{const ue=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ue&&ue.success&&ue.data&&(M.value=ue.data.items||[],V.value=ue.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function J(){var Q,ue;try{const se=await(await fetch("/api/market/merrill-clock")).json(),be=se.stage||"recovery",Pe=_.value[be]||{};if(o.value={...Pe,...se,stage_cn:se.stage_cn||Pe.stage_cn||"",stage_name:se.stage_name||Pe.name||"",name:se.name||Pe.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),W.value&&W.value!==be){const me=_.value,we=((Q=me[W.value])==null?void 0:Q.name)||W.value,xe=((ue=me[be])==null?void 0:ue.name)||be;ElementPlus.ElMessage({message:"美林时钟阶段切换："+we+" → "+xe,type:"warning",duration:6e3,showClose:!0})}W.value=be}catch(De){console.error("获取美林时钟失败:",De);const se=_.value.recovery||{};o.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function T(Q){var De;b.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",S.value=_.value[Q]||_.value.recovery||{};const ue=((De=o.value)==null?void 0:De.stage)===Q;S.value._isCurrent=ue,ue&&o.value&&(S.value._nextPrediction=o.value.next_stage_prediction,S.value._confidence=o.value.confidence,S.value._stage=o.value.stage,S.value._dimensions=o.value.dimension_scores);try{const be=await(await fetch("/api/market/merrill-clock/stage/"+Q)).json();if(be.success&&be.data){const Pe={..._.value[Q],...be.data};Pe._is_current!==void 0&&(Pe._isCurrent=Pe._is_current),Pe._current_timing&&(Pe._currentTiming=Pe._current_timing),Pe._last_period&&(Pe._lastPeriod=Pe._last_period),S.value._nextPrediction&&(Pe._nextPrediction=S.value._nextPrediction),S.value._confidence&&(Pe._confidence=S.value._confidence),S.value._stage&&(Pe._stage=S.value._stage),S.value._dimensions&&(Pe._dimensions=S.value._dimensions),Object.assign(S.value,Pe)}}catch(se){console.warn("获取阶段详情失败:",se)}}function U(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:v.value.autoRefresh,refreshInterval:v.value.refreshInterval})),v.value.autoRefresh?(clearInterval(E),E=setInterval(J,v.value.refreshInterval*1e3)):clearInterval(E),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){I.value=!0,g.value="";try{const ue=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ue.success?(g.value="重评估完成："+(ue.stage_name||ue.stage),await J(),ElementPlus.ElMessage.success("重评估完成")):(g.value=ue.message||"重评估失败",ElementPlus.ElMessage.error(ue.message||"重评估失败"))}catch{g.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{I.value=!1}}function ge(){const Q=localStorage.getItem("merrill_clock_config");if(Q)try{const ue=JSON.parse(Q);v.value={...v.value,...ue}}catch{}v.value.autoRefresh&&(E=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),J()},v.value.refreshInterval*1e3))}function qe(){E&&clearInterval(E)}return e(()=>{qe()}),{merrillData:o,merrillStagesConfig:_,showMerrillDetail:b,merrillDetailData:S,merrillTimeline:x,merrillSnapshots:M,merrillSnapshotsTotal:V,fetchMerrillSnapshots:oe,timelineLoading:P,merrillClockConfig:v,merrillClockLastUpdated:l,merrillReevalResult:g,merrillReevalLoading:I,stages:K,indicatorList:A,dimensionScoreList:H,detailDimensionScoreList:$,confidenceColor:ee,timelineStages:le,clockPosition:ae,merrillProgressStyle:D,FULL_CYCLE_MONTHS:d,getStageAngle:s,getCycleProgress:y,getCurrentStageMonths:i,getStageTotalMonths:h,isStageCompleted:X,getCharLabel:z,getAssetName:w,getRankColor:f,fetchMerrillStages:C,fetchMerrillClock:J,loadMerrillTimeline:u,showTimelineStage:O,showStageDetail:T,saveMerrillClockConfig:U,doMerrillReevaluate:ie,startAutoRefresh:ge,stopAutoRefresh:qe}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var t=[210,28,165,290,348,190,52,250];function m(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var n=r?62:58,p=r?62:40;return t.map(function(o){return"hsl("+o+", "+n+"%, "+p+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:m(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const c=[];function d(r){typeof r=="function"&&c.push(r)}function k(){c.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:m,registerChart:d,refreshAllCharts:k,init(){return{getEChartsTheme:e,registerChart:d,refreshAllCharts:k}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const m=t("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&m.sidebarCollapsed&&(m.sidebarCollapsed.value=d==="1")}catch{}if(!m)return{};const e=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}m.currentPage.value=d.key,m.currentSubPage.value=d.subPages[0]||""},c=()=>{m.sidebarCollapsed.value=!m.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",m.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:m.menus,currentPage:m.currentPage,sidebarCollapsed:m.sidebarCollapsed,navigate:e,toggle:c,sanitizeHtml:m.sanitizeHtml,keyClick:m.keyClick,t:m.t}}}})();const Ea={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,m={"layout-dashboard":Wv,calendar:Kv,bot:Bv,"flask-conical":Hv,zap:Fv,settings:Vv,"chevron-down":jv,"chevron-right":Ov,"chevron-left":Nv,menu:Iv,search:Lv,bell:Av,sun:zv,moon:Rv,user:Dv,"user-round":Pv,home:Tv,x:Mv,database:Ev,activity:qv,clock:Cv,"bar-chart-3":Sv,shield:xv,"hard-drive":_v,"file-text":kv,users:wv,cpu:bv,"pie-chart":yv,info:hv,"log-out":gv,palette:pv,languages:fv,refresh:mv,download:vv,"external-link":uv,command:dv,sparkles:cv,"trending-up":rv,"trending-down":ov,"circle-dot":iv,check:lv,"alert-triangle":nv,loader:sv,"arrow-left":av,"arrow-right":tv,eye:ev,"eye-off":Zu,lock:Xu,"sliders-horizontal":$u,play:Qu,history:Ju,layers:Yu,"line-chart":Gu,target:Uu,"search-check":Wu,star:Ku,"message-circle":Bu,"calendar-days":Hu,"calendar-range":Fu,"calendar-check":Vu,brain:ju,lightbulb:Ou,"octagon-x":Nu,flag:Iu,package:Lu,"clipboard-list":Au,pin:zu,"radio-tower":Ru,gauge:Du,landmark:Pu,"candlestick-chart":Tu,wallet:Mu,"badge-check":Eu,key:qu,factory:Cu,trophy:Su,rocket:xu,flame:_u,"map-pin":ku,"scroll-text":wu,"book-open":bu,dna:yu,"bar-chart":hu,plus:gu,"star-off":pu,upload:fu,gem:mu,"folder-open":vu,link:uu,save:du,"trash-2":cu,pause:ru,"help-circle":ou,"play-circle":iu,pencil:lu,folder:nu,code:su,sprout:au,wheat:tu,snowflake:eu,fuel:Zd,banknote:Xd,send:$d,inbox:Qd,"wifi-off":Jd,"check-circle-2":Yd,"x-circle":Gd},e=()=>m[t.name]||m["circle-dot"];return(c,d)=>(ve(),ga(Ad(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ma=(a,t)=>{const m=a.__vccOpts||a;for(const[e,c]of t)m[e]=c;return m},Uv={name:"qc-sidebar",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=tt(()=>a.menus&&a.menus.value||[]),m=tt(()=>a.currentPage&&a.currentPage.value||""),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),c=tt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:P=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=P)}}),d=bt({}),k={research:"量化投研",platform:"平台管理"},r=["research","platform"],n=P=>m.value===P.key,p=(P,v)=>m.value===P.key&&a.currentSubPage&&a.currentSubPage.value===v,o=P=>Array.isArray(P.subPages)&&P.subPages.length>1,_=(P,v)=>a.subPageNames&&a.subPageNames[v]||v;function b(P){!o(P)||c.value||(d.value[P.key]=!d.value[P.key])}function S(){t.value.forEach(P=>{d.value[P.key]===void 0&&(d.value[P.key]=n(P))})}async function x(P,v){const l=v||P.subPages&&P.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(P.key,l):(a.currentPage.value=P.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(P.key,l)}function M(){c.value=!c.value;try{localStorage.setItem("sidebar_collapsed",c.value?"1":"0")}catch{}}function V(P){if(P.ctrlKey&&P.key.toLowerCase()==="b"&&(P.preventDefault(),M()),!P.ctrlKey&&!P.metaKey&&!P.altKey&&(P.key==="ArrowDown"||P.key==="ArrowUp")){const v=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=v.indexOf(document.activeElement);if(l>=0){P.preventDefault();const g=v[(l+(P.key==="ArrowDown"?1:v.length-1))%v.length];g&&g.focus()}}}return za(()=>{S(),document.addEventListener("keydown",V)}),us(()=>document.removeEventListener("keydown",V)),{state:a,menus:t,currentPage:m,navMode:e,sidebarCollapsed:c,expandedMenus:d,GROUP_LABELS:k,GROUPS:r,isActive:n,isChildActive:p,hasChildren:o,subLabel:_,toggleSubmenu:b,navigate:x,toggleCollapse:M}}},Gv={class:"qc-sidebar-logo"},Yv={key:0,class:"qc-logo-text"},Jv={class:"qc-sidebar-nav"},Qv={key:0,class:"qc-nav-group"},$v={key:0,class:"qc-nav-group-label"},Xv=["href","aria-current","onClick"],Zv={key:0,class:"qc-sidebar-label"},em={key:1,class:"qc-nav-badge"},tm=["aria-expanded","aria-controls","onClick"],am=["id"],sm=["href","aria-current","onClick"],nm={class:"qc-sidebar-child-label"},lm={class:"qc-sidebar-footer"},im=["aria-expanded","aria-label","title"];function om(a,t,m,e,c,d){const k=Vt("AppIcon"),r=Vt("el-tooltip");return ve(),pe("nav",{class:ot(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[he("div",Gv,[t[1]||(t[1]=Ld('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Ke("",!0):(ve(),pe("span",Yv,Le(e.state.t("login.title")),1))]),he("div",Jv,[(ve(!0),pe(it,null,Ct(e.GROUPS,n=>(ve(),pe(it,{key:n},[e.menus.some(p=>p.group===n)?(ve(),pe("div",Qv,[e.sidebarCollapsed?Ke("",!0):(ve(),pe("span",$v,Le(e.GROUP_LABELS[n]),1)),(ve(!0),pe(it,null,Ct(e.menus.filter(p=>p.group===n),p=>(ve(),pe(it,{key:p.key},[he("div",{class:ot(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(p),"is-child-open":e.navMode==="tree"&&e.expandedMenus[p.key]}])},[st(r,{content:p.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:ta(()=>[he("a",{class:ot(["qc-sidebar-link",{"is-active":e.isActive(p)}]),href:"#"+p.key,"aria-current":e.isActive(p)?"page":null,onClick:jt(o=>e.navigate(p),["prevent"])},[st(k,{name:p.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Ke("",!0):(ve(),pe("span",Zv,Le(p.name),1)),!e.sidebarCollapsed&&p.badge?(ve(),pe("span",em,Le(p.badge),1)):Ke("",!0)],10,Xv)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(p)?(ve(),pe("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":e.expandedMenus[p.key]}]),"aria-expanded":!!e.expandedMenus[p.key],"aria-controls":"submenu-"+p.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(p)},[st(k,{name:"chevron-down",size:14})],10,tm)):Ke("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(p)&&e.expandedMenus[p.key]?(ve(),pe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+p.key},[(ve(!0),pe(it,null,Ct(p.subPages,o=>(ve(),pe("a",{key:o,class:ot(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(p,o)}]),href:"#"+p.key+"-"+o,"aria-current":e.isChildActive(p,o)?"page":null,onClick:jt(_=>e.navigate(p,o),["prevent"])},[he("span",nm,Le(e.subLabel(p,o)),1)],10,sm))),128))],8,am)):Ke("",!0)],64))),128))])):Ke("",!0)],64))),128))]),he("div",lm,[he("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...n)=>e.toggleCollapse&&e.toggleCollapse(...n))},[st(k,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,im)])],2)}const rm=Ma(Uv,[["render",om]]),cm={name:"qc-header",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=bt(!1),m=tt(()=>a.currentUser&&a.currentUser.value||null),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),c=tt(()=>{const se=a.currentPage&&a.currentPage.value,be=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===se);return!!(be&&be.subPages&&be.subPages.length)}),d=tt(()=>{const se=a.currentPage&&a.currentPage.value,be=a.currentPageName&&a.currentPageName.value;if(be)return be;const Pe=(a.menus&&a.menus.value||[]).find(me=>me.key===se);return Pe&&Pe.name||se||""}),k=tt(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),r=bt(typeof window<"u"?window.innerWidth<768:!1);function n(){r.value=window.innerWidth<768}za(()=>window.addEventListener("resize",n)),us(()=>window.removeEventListener("resize",n));const p=bt(!1),o=tt(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),_=tt(()=>{const se=a.currentPage&&a.currentPage.value,be=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===se);return(be&&be.subPages||[]).map(Pe=>({key:Pe,label:a.subPageNames&&a.subPageNames[Pe]||Pe}))});function b(){p.value=!p.value}function S(){p.value=!1}function x(se){p.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const M=tt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),V=bt(!1),P=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],v=tt(()=>{const se=P.find(be=>be.value===e.value);return se&&se.label||e.value});function l(){V.value=!V.value}function g(){V.value=!1}function I(se){V.value=!1,a.setNavMode&&a.setNavMode(se)}const W=tt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),E=bt(!1),N=bt([]),K=bt(!1),A=bt(!1);function L(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function H(){K.value=!0,A.value=!1;try{const be=await(await fetch("/api/alerts/history?limit=8",{headers:L()})).json();be&&be.success?N.value=be.history||[]:N.value=[]}catch{A.value=!0,N.value=[]}finally{K.value=!1}}function $(){E.value=!E.value,E.value&&H()}function ee(){E.value=!1}function le(){E.value=!1,a.activateTab&&a.activateTab("system","notification")}const ae=bt(!1),D=a.themeHues||[45,220,0,140,270,320,-1],s=tt(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),y=tt(()=>a.themeMode&&a.themeMode.value||"system"),i=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],h=tt(()=>a.density&&a.density.value||"comfortable");function X(se){a.changeDensity&&a.changeDensity(se)}function z(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const w={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function f(se){return a.hueName?a.hueName(se):w[se]||"自定义 "+se}function C(){ae.value=!ae.value}function u(){ae.value=!1}function O(se){a.changeThemeMode&&a.changeThemeMode(se)}function oe(se){a.changeThemeHue&&a.changeThemeHue(se)}function J(){a.changeThemeMode&&a.changeThemeMode(M.value?"light":"dark")}function T(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function U(){t.value=!t.value}function ie(){t.value=!1}function ge(se){return()=>{ie(),se&&se()}}function qe(){ie(),a.handleLogout&&a.handleLogout()}const Q=tt(()=>a.marketData&&a.marketData.value||{}),ue=bt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Q,bannerDismissed:ue,dismissBanner:()=>{ue.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:m,isDark:M,searchQuery:W,navMode:e,crumbRoot:d,crumbSub:k,hasToptabs:c,toggleThemeQuick:J,toggleSidebar:T,openUserMenu:U,closeUserMenu:ie,menuItem:ge,handleLogout:qe,openBellMenu:E,notifItems:N,notifLoading:K,notifError:A,toggleBell:$,closeBell:ee,goNotificationCenter:le,openThemeMenu:ae,themeHues:D,themeHue:s,themeMode:y,hueColor:z,hueName:f,toggleThemeMenu:C,closeThemeMenu:u,pickThemeMode:O,pickThemeHue:oe,DENSITY_MODES:i,density:h,pickDensity:X,openNavModeMenu:V,NAV_MODES:P,navModeLabel:v,toggleNavModeMenu:l,closeNavModeMenu:g,pickNavMode:I,isMobile:r,openSubnavPicker:p,currentSubLabel:o,subnavOptions:_,toggleSubnavPicker:b,closeSubnavPicker:S,pickSubnav:x}}},dm={class:"qc-header-wrap"},um={key:0,class:"non-trading-banner",role:"status"},vm={class:"qc-header"},mm={class:"qc-header-left"},fm=["aria-label"],pm={key:0,class:"qc-header-subnav"},gm=["aria-expanded"],hm={class:"qc-subnav-picker-label"},ym={key:0,class:"qc-subnav-picker-menu",role:"menu"},bm=["onClick"],wm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},km={class:"qc-crumb qc-crumb-root"},_m={class:"qc-crumb qc-crumb-sub"},xm={key:1,class:"qc-crumb qc-crumb-root"},Sm={class:"qc-header-center"},Cm={key:0,class:"qc-search-sublabel"},qm={class:"qc-header-right"},Em={class:"qc-hdr-pop"},Mm=["aria-expanded"],Tm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Pm={key:0,class:"qc-bell-state"},Dm={key:1,class:"qc-bell-state"},Rm={key:2,class:"qc-bell-state"},zm={key:3,class:"qc-bell-list"},Am={class:"qc-bell-item-title"},Lm={class:"qc-bell-item-meta"},Im={key:0},Nm={class:"qc-bell-item-time"},Om={class:"qc-hdr-pop"},jm=["aria-expanded"],Vm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Fm={class:"qc-theme-modes"},Hm=["onClick"],Bm={class:"qc-theme-swatches"},Km=["title","aria-label","onClick"],Wm={key:0,class:"qc-theme-swatch-check"},Um={class:"qc-theme-custom-label"},Gm={class:"qc-theme-modes"},Ym=["onClick"],Jm={key:0,class:"qc-navmode-switch"},Qm=["aria-label","title","aria-expanded"],$m={key:0,class:"qc-navmode-menu",role:"menu"},Xm=["onClick","onKeydown"],Zm={class:"qc-navmode-item-main"},ef={class:"qc-user-menu"},tf=["aria-label","aria-expanded"],af={key:0,class:"qc-user-dropdown",role:"menu"},sf={class:"qc-user-dropdown-header"},nf={class:"qc-user-dropdown-name"},lf={key:0,class:"qc-user-dropdown-chip"};function of(a,t,m,e,c,d){var _,b,S,x,M,V,P;const k=Vt("AppIcon"),r=Vt("qc-top-tabs"),n=Vt("el-autocomplete"),p=Vt("el-slider"),o=Id("click-outside");return ve(),pe("div",dm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ve(),pe("div",um,[st(k,{name:"alert-triangle",size:14}),t[15]||(t[15]=he("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),he("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...v)=>e.dismissBanner&&e.dismissBanner(...v)),"aria-label":"关闭提示"},"×")])):Ke("",!0),he("header",vm,[he("div",mm,[he("button",{class:"qc-icon-btn","aria-label":(_=e.state.sidebarCollapsed)!=null&&_.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...v)=>e.toggleSidebar&&e.toggleSidebar(...v))},[st(k,{name:"menu",size:20})],8,fm),e.isMobile?ja((ve(),pe("div",pm,[he("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...v)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...v))},[he("span",hm,Le(e.currentSubLabel||"二级"),1),st(k,{name:"chevron-down",size:14})],8,gm),e.openSubnavPicker?(ve(),pe("div",ym,[(ve(!0),pe(it,null,Ct(e.subnavOptions,v=>(ve(),pe("div",{key:v.key,class:ot(["qc-subnav-picker-item",{"is-active":v.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>e.pickSubnav(v.key)},Le(v.label),11,bm))),128))])):Ke("",!0)])),[[o,e.closeSubnavPicker]]):Ke("",!0),e.navMode==="tree"&&!e.isMobile?(ve(),pe("div",wm,[he("span",km,Le(e.crumbRoot),1),e.crumbSub?(ve(),pe(it,{key:0},[t[16]||(t[16]=he("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),he("span",_m,Le(e.crumbSub),1)],64)):Ke("",!0)])):Ke("",!0),e.navMode==="toptab"&&!e.isMobile?(ve(),pe(it,{key:2},[e.hasToptabs?(ve(),ga(r,{key:0})):(ve(),pe("span",xm,Le(e.crumbRoot),1))],64)):Ke("",!0)]),he("div",Sm,[st(n,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=v=>e.searchQuery=v),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:ta(()=>[st(k,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ta(()=>[...t[17]||(t[17]=[he("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ta(v=>{var l,g,I,W,E;return[he("span",null,Le((l=v==null?void 0:v.item)==null?void 0:l.icon)+" "+Le(((g=v==null?void 0:v.item)==null?void 0:g.label)||((I=v==null?void 0:v.item)==null?void 0:I.name)),1),(W=v==null?void 0:v.item)!=null&&W.subLabel?(ve(),pe("span",Cm,Le((E=v==null?void 0:v.item)==null?void 0:E.subLabel),1)):Ke("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),he("div",qm,[ja((ve(),pe("div",Em,[he("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...v)=>e.toggleBell&&e.toggleBell(...v))},[st(k,{name:"bell",size:20})],8,Mm),e.openBellMenu?(ve(),pe("div",Tm,[t[18]||(t[18]=he("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ve(),pe("div",Pm,"加载中...")):e.notifError?(ve(),pe("div",Dm,"加载失败")):e.notifItems.length?(ve(),pe("div",zm,[(ve(!0),pe(it,null,Ct(e.notifItems,(v,l)=>(ve(),pe("div",{key:v.id||l,class:ot(["qc-bell-item",{"is-fail":v.ok===0}])},[he("div",Am,Le(v.title||v.event_type||"事件"),1),he("div",Lm,[qa(Le(v.channel||""),1),v.recipient?(ve(),pe("span",Im," · "+Le(v.recipient),1)):Ke("",!0),he("span",Nm,Le(v.created_at||""),1)])],2))),128))])):(ve(),pe("div",Rm,"暂无通知")),he("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...v)=>e.goNotificationCenter&&e.goNotificationCenter(...v))},"前往通知中心 →")])):Ke("",!0)])),[[o,e.closeBell]]),ja((ve(),pe("div",Om,[he("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...v)=>e.toggleThemeMenu&&e.toggleThemeMenu(...v))},[st(k,{name:"palette",size:20})],8,jm),e.openThemeMenu?(ve(),pe("div",Vm,[t[19]||(t[19]=he("div",{class:"qc-theme-section-label"},"外观模式",-1)),he("div",Fm,[(ve(),pe(it,null,Ct([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],v=>he("button",{key:v.k,class:ot(["qc-theme-mode",{"is-active":e.themeMode===v.k}]),onClick:l=>e.pickThemeMode(v.k)},Le(v.n),11,Hm)),64))]),t[20]||(t[20]=he("div",{class:"qc-theme-section-label"},"主题色",-1)),he("div",Bm,[(ve(!0),pe(it,null,Ct(e.themeHues,v=>(ve(),pe("button",{key:v,class:ot(["qc-theme-swatch",{"is-active":e.themeHue===v}]),style:Nd({background:e.hueColor(v)}),title:e.hueName(v),"aria-label":e.hueName(v),onClick:l=>e.pickThemeHue(v)},[e.themeHue===v?(ve(),pe("span",Wm,"✓")):Ke("",!0)],14,Km))),128))]),st(p,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),he("div",Um,"自定义 "+Le(e.themeHue)+"°",1),t[21]||(t[21]=he("div",{class:"qc-theme-section-label"},"信息密度",-1)),he("div",Gm,[(ve(!0),pe(it,null,Ct(e.DENSITY_MODES,v=>(ve(),pe("button",{key:v.k,class:ot(["qc-theme-mode",{"is-active":e.density===v.k}]),onClick:l=>e.pickDensity(v.k)},Le(v.n),11,Ym))),128))])])):Ke("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?Ke("",!0):ja((ve(),pe("div",Jm,[he("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...v)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...v))},[st(k,{name:"layers",size:20})],8,Qm),e.openNavModeMenu?(ve(),pe("div",$m,[(ve(!0),pe(it,null,Ct(e.NAV_MODES,v=>(ve(),pe("div",{key:v.value,class:ot(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===v.value}]),role:"menuitem",tabindex:"0",onClick:l=>e.pickNavMode(v.value),onKeydown:[pa(jt(l=>e.pickNavMode(v.value),["prevent"]),["enter"]),pa(jt(l=>e.pickNavMode(v.value),["prevent"]),["space"])]},[he("div",Zm,[he("span",null,Le(v.label),1),e.navMode===v.value?(ve(),ga(k,{key:0,name:"check",size:14})):Ke("",!0)])],42,Xm))),128))])):Ke("",!0)])),[[o,e.closeNavModeMenu]]),ja((ve(),pe("div",ef,[he("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((b=e.currentUser)==null?void 0:b.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...v)=>e.openUserMenu&&e.openUserMenu(...v))},Le((((S=e.currentUser)==null?void 0:S.username)||"A").charAt(0).toUpperCase()),9,tf),e.showUserMenu?(ve(),pe("div",af,[he("div",sf,[he("span",nf,Le((x=e.currentUser)==null?void 0:x.username),1),((M=e.currentUser)==null?void 0:M.role)==="guest"?(ve(),pe("span",lf,"访客")):Ke("",!0)]),((V=e.currentUser)==null?void 0:V.role)==="admin"?(ve(),pe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=v=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=pa(jt(v=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[st(k,{name:"settings",size:16}),t[22]||(t[22]=qa(" 重新运行初始化向导 ",-1))],32)):Ke("",!0),((P=e.currentUser)==null?void 0:P.role)!=="guest"?(ve(),pe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=pa(jt(v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[st(k,{name:"lock",size:16}),t[23]||(t[23]=qa(" 修改密码 ",-1))],32)):Ke("",!0),t[25]||(t[25]=he("div",{class:"qc-user-dropdown-divider"},null,-1)),he("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...v)=>e.handleLogout&&e.handleLogout(...v)),onKeydown:t[14]||(t[14]=pa(jt((...v)=>e.handleLogout&&e.handleLogout(...v),["prevent"]),["enter"]))},[st(k,{name:"log-out",size:16}),t[24]||(t[24]=qa(" 退出登录 ",-1))],32)])):Ke("",!0)])),[[o,e.closeUserMenu]])])])])}const rf=Ma(cm,[["render",of]]),cf=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],df={name:"qc-subnav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=tt(()=>a.currentPage&&a.currentPage.value||""),m=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),c=bt({}),d=tt(()=>a.menus&&a.menus.value||[]),k=tt(()=>d.value.find(P=>P.key===t.value)||null),r=tt(()=>k.value&&k.value.subPages||[]),n=tt(()=>a.currentPageName&&a.currentPageName.value||t.value),p=P=>a.subPageNames&&a.subPageNames[P]||P,o=P=>m.value===P;function _(P){a.openTab?a.openTab(t.value,P):a.currentSubPage&&(a.currentSubPage.value=P);try{localStorage.setItem("quant_last_subpage",P)}catch{}}function b(P){a.openTab?a.openTab(t.value,P.key):a.currentSubPage&&(a.currentSubPage.value=P.key);try{localStorage.setItem("quant_last_subpage",P.key)}catch{}}function S(P){c.value[P]=!c.value[P]}const x={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:m,navMode:e,subPages:r,currentMenu:k,collapsedGroups:c,pageTitle:n,subLabel:p,isSubActive:o,goSub:_,goSystemItem:b,toggleGroup:S,SYSTEM_GROUPS:cf,subIcon:(P,v)=>x[P]&&x[P][v]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},uf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},vf={class:"qc-subnav-column-header"},mf={class:"qc-subnav-current-label"},ff={class:"qc-subnav-column-body"},pf=["onClick"],gf=["href","onClick"],hf={class:"qc-subnav-group-label"},yf=["href","onClick"],bf=["href","onClick"];function wf(a,t,m,e,c,d){const k=Vt("AppIcon");return e.navMode==="subnav"?(ve(),pe("aside",uf,[he("div",vf,[he("span",mf,Le(e.pageTitle),1)]),he("div",ff,[e.currentPage==="system"?(ve(!0),pe(it,{key:0},Ct(e.SYSTEM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[he("div",{class:"qc-subnav-group-label",onClick:n=>e.toggleGroup(r.label)},[he("span",null,Le(r.label),1),st(k,{name:"chevron-down",size:12,class:ot({"is-open":!e.collapsedGroups[r.label]})},null,8,["class"])],8,pf),e.collapsedGroups[r.label]?Ke("",!0):(ve(!0),pe(it,{key:0},Ct(r.items,n=>(ve(),pe("a",{key:n.key,class:ot(["qc-subnav-item",{"is-active":e.isSubActive(n.key)}]),href:"#"+n.key,onClick:jt(p=>e.goSystemItem(n),["prevent"])},[st(k,{name:n.icon,size:16},null,8,["name"]),he("span",null,Le(n.label),1)],10,gf))),128))]))),128)):e.currentPage==="shortterm"?(ve(!0),pe(it,{key:1},Ct(e.SHORTTERM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[he("div",hf,[he("span",null,Le(r.label),1)]),(ve(!0),pe(it,null,Ct(r.items,n=>(ve(),pe("a",{key:n,class:ot(["qc-subnav-item",{"is-active":e.isSubActive(n)}]),href:"#"+e.currentPage+"/"+n,onClick:jt(p=>e.goSub(n),["prevent"])},[st(k,{name:e.subIcon(e.currentPage,n),size:16},null,8,["name"]),he("span",null,Le(e.subLabel(n)),1)],10,yf))),128))]))),128)):(ve(!0),pe(it,{key:2},Ct(e.subPages,r=>(ve(),pe("a",{key:r,class:ot(["qc-subnav-item",{"is-active":e.isSubActive(r)}]),href:"#"+e.currentPage+"/"+r,onClick:jt(n=>e.goSub(r),["prevent"])},[st(k,{name:e.subIcon(e.currentPage,r),size:16},null,8,["name"]),he("span",null,Le(e.subLabel(r)),1)],10,bf))),128))])])):Ke("",!0)}const kf=Ma(df,[["render",wf]]),_f=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],xf={name:"qc-mobile-nav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=bt(!1),m=bt(null),e=bt({}),c=tt(()=>a.menus&&a.menus.value||[]),d=tt(()=>a.currentPage&&a.currentPage.value||""),k={research:"量化投研",platform:"平台管理"},r=["research","platform"];function n(v){return Array.isArray(v.subPages)&&v.subPages.length>0}function p(v){n(v)&&(e.value[v.key]=!e.value[v.key])}function o(v,l){return d.value===v.key&&a.currentSubPage&&a.currentSubPage.value===l}function _(v){return a.subPageNames&&a.subPageNames[v]||v}async function b(v){const l=c.value.find(I=>I.key===v.key),g=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(v.key,g):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(v.key,g)}function S(v,l){t.value=!1;const g=l||v.subPages&&v.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(v.key,g):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(v.key,g)}function x(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function M(){t.value=!1;const v=document.querySelector(".qc-header .qc-icon-btn");v&&v.focus()}function V(v){v.detail&&v.detail.open&&x()}function P(v){t.value&&v.key==="Escape"&&M()}return za(()=>{window.addEventListener("qc:drawer",V),document.addEventListener("keydown",P)}),us(()=>{window.removeEventListener("qc:drawer",V),document.removeEventListener("keydown",P)}),{state:a,TABS:_f,menus:c,currentPage:d,drawerOpen:t,drawerFocusRef:m,drawerExpanded:e,GROUP_LABELS:k,GROUPS:r,hasSub:n,toggleDrawerMenu:p,isDrawerSubActive:o,subLabel:_,goTab:b,goMenu:S,openDrawer:x,closeDrawer:M}}},Sf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Cf=["aria-current","onClick"],qf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Ef={class:"qc-drawer-header"},Mf={class:"qc-drawer-brand"},Tf={class:"qc-drawer-body"},Pf={key:0},Df={class:"qc-nav-group-label"},Rf=["href","aria-current","onClick"],zf={class:"qc-sidebar-label"},Af=["aria-expanded","onClick"],Lf={key:0,class:"qc-drawer-children"},If=["href","onClick"],Nf={class:"qc-drawer-footer"},Of=["title"];function jf(a,t,m,e,c,d){var r,n;const k=Vt("AppIcon");return ve(),pe(it,null,[he("nav",Sf,[(ve(!0),pe(it,null,Ct(e.TABS,p=>(ve(),pe("button",{key:p.key,class:ot(["qc-mobile-tab",{"is-active":e.currentPage===p.key}]),"aria-current":e.currentPage===p.key?"page":null,onClick:o=>e.goTab(p)},[st(k,{name:p.icon,size:22},null,8,["name"]),he("span",null,Le(p.label),1)],10,Cf))),128))]),(ve(),ga(Od,{to:"body"},[e.drawerOpen?(ve(),pe("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...p)=>e.closeDrawer&&e.closeDrawer(...p))})):Ke("",!0),e.drawerOpen?(ve(),pe("div",qf,[he("div",Ef,[he("div",Mf,[t[4]||(t[4]=he("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[he("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),he("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),he("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),he("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),he("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),he("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),he("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),he("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),he("span",null,Le(e.state.t("login.title")),1)]),he("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...p)=>e.closeDrawer&&e.closeDrawer(...p))},[st(k,{name:"x",size:18})])]),he("div",Tf,[(ve(!0),pe(it,null,Ct(e.GROUPS,p=>(ve(),pe(it,{key:p},[e.menus.some(o=>o.group===p)?(ve(),pe("div",Pf,[he("div",Df,Le(e.GROUP_LABELS[p]),1),(ve(!0),pe(it,null,Ct(e.menus.filter(o=>o.group===p),o=>(ve(),pe("div",{key:o.key,class:"qc-drawer-menu"},[he("div",{class:ot(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[he("a",{class:ot(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:jt(_=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[st(k,{name:o.iconName||"",size:18},null,8,["name"]),he("span",zf,Le(o.name),1)],10,Rf),e.hasSub(o)?(ve(),pe("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:_=>e.toggleDrawerMenu(o)},[st(k,{name:"chevron-down",size:14})],10,Af)):Ke("",!0)],2),e.drawerExpanded[o.key]?(ve(),pe("div",Lf,[(ve(!0),pe(it,null,Ct(o.subPages,_=>(ve(),pe("a",{key:_,class:ot(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,_)}]),href:"#"+o.key+"/"+_,onClick:jt(b=>e.goMenu(o,_),["prevent"])},[he("span",null,Le(e.subLabel(_)),1)],10,If))),128))])):Ke("",!0)]))),128))])):Ke("",!0)],64))),128))]),he("div",Nf,[he("button",{class:"qc-icon-btn",title:((r=e.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=p=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[st(k,{name:((n=e.state.currentTheme)==null?void 0:n.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Of),he("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=p=>e.state.handleLogout&&e.state.handleLogout())},[st(k,{name:"log-out",size:18})])])])):Ke("",!0)]))],64)}const Vf=Ma(xf,[["render",jf]]),Ff={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:m}){const e=Ra("qcState");function c(o){t("select",o)}function d(o){const _=o.strategy_names||o.strategies||[],b=_.slice(0,3),S=_.length>3?_.length-3:0,x=b.map(M=>({text:M,more:!1}));return S&&x.push({text:"+"+S,more:!0}),x}function k(o){const _=Number(o);return isFinite(_)?_.toFixed(2):"—"}function r(o){const _=Number(o);return isFinite(_)?(_>0?"+":"")+_.toFixed(2)+"%":"—"}function n(o){const _=Number(o.consensus_level);return isFinite(_)?Math.round(_*100):0}function p(o){const _=Number(o&&o.consensus_level);return isFinite(_)&&_>0}return{state:e,slots:m,select:c,displayTags:d,fmtPrice:k,fmtChange:r,pctOf:n,hasConsensus:p}}},Hf={class:"qc-stock-list"},Bf=["data-copy-code","aria-label","onClick","onKeydown"],Kf={key:0,class:"qc-stock-rank"},Wf={class:"qc-stock-info"},Uf={class:"qc-stock-code"},Gf={class:"qc-stock-code-num"},Yf={key:0,class:"qc-stock-status is-new"},Jf={key:1,class:"qc-stock-status is-out"},Qf={class:"qc-stock-name"},$f={key:0,class:"qc-stock-consensus"},Xf={key:1,class:"qc-stock-tags"},Zf={key:2,class:"qc-stock-badge"},ep={key:3,class:"qc-stock-data"},tp={class:"qc-stock-price"},ap={key:4,class:"qc-stock-extra"},sp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},np=["data-copy-code","aria-label","onClick","onKeydown"],lp={key:0,class:"qc-stock-rank"},ip={class:"qc-stock-info"},op={class:"qc-stock-code"},rp={class:"qc-stock-code-num"},cp={key:0,class:"qc-stock-status is-new"},dp={key:1,class:"qc-stock-status is-out"},up={class:"qc-stock-name"},vp={key:0,class:"qc-stock-consensus"},mp={key:1,class:"qc-stock-tags"},fp={key:2,class:"qc-stock-badge"},pp={key:3,class:"qc-stock-data"},gp={class:"qc-stock-price"},hp={key:4,class:"qc-stock-extra"},yp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function bp(a,t,m,e,c,d){const k=Vt("qc-state-panel"),r=Vt("qc-virtual-list");return ve(),pe("div",Hf,[m.loading?(ve(),ga(k,{key:0,type:"loading"})):m.items.length?(ve(),pe(it,{key:2},[m.virtual?(ve(),ga(r,{key:0,items:m.items,"row-height":m.rowHeight},{default:ta(({item:n,index:p})=>[he("div",{class:ot(["qc-stock-row",{"is-active":m.activeCode===n.code}]),"data-copy-code":m.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>e.select(n),onKeydown:[pa(jt(o=>e.select(n),["prevent"]),["enter"]),pa(jt(o=>e.select(n),["prevent"]),["space"])]},[m.showRank?(ve(),pe("div",Kf,Le(p+1),1)):Ke("",!0),he("div",Wf,[he("div",Uf,[he("span",Gf,Le(n.code),1),n.status==="new"?(ve(),pe("span",Yf,Le(m.statusText.new),1)):n.status==="out"?(ve(),pe("span",Jf,Le(m.statusText.out),1)):Ke("",!0)]),he("div",Qf,[qa(Le(n.name)+" ",1),oa(a.$slots,"name-suffix",{item:n,index:p})]),m.showConsensus&&e.hasConsensus(n)?(ve(),pe("span",$f,Le(e.pctOf(n))+"% 共识",1)):Ke("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",Xf,[(ve(!0),pe(it,null,Ct(e.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:ot(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Ke("",!0),m.showConsensus?(ve(),pe("span",Zf,Le(n.strategy_count||0)+" 策略",1)):Ke("",!0),m.showPrice&&n.price!=null?(ve(),pe("div",ep,[he("span",tp,Le(e.fmtPrice(n.price)),1),he("span",{class:ot(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(e.fmtChange(n.change_pct)),3)])):Ke("",!0),e.slots.extra?(ve(),pe("div",ap,[oa(a.$slots,"extra",{item:n,index:p})])):Ke("",!0),e.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:n,index:p})])):Ke("",!0),e.slots.footer?(ve(),pe("div",sp,[oa(a.$slots,"footer",{item:n,index:p})])):Ke("",!0)],42,Bf)]),_:3},8,["items","row-height"])):(ve(!0),pe(it,{key:1},Ct(m.items,(n,p)=>(ve(),pe("div",{key:n.code,class:ot(["qc-stock-row",{"is-active":m.activeCode===n.code}]),"data-copy-code":m.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>e.select(n),onKeydown:[pa(jt(o=>e.select(n),["prevent"]),["enter"]),pa(jt(o=>e.select(n),["prevent"]),["space"])]},[m.showRank?(ve(),pe("div",lp,Le(p+1),1)):Ke("",!0),he("div",ip,[he("div",op,[he("span",rp,Le(n.code),1),n.status==="new"?(ve(),pe("span",cp,Le(m.statusText.new),1)):n.status==="out"?(ve(),pe("span",dp,Le(m.statusText.out),1)):Ke("",!0)]),he("div",up,[qa(Le(n.name)+" ",1),oa(a.$slots,"name-suffix",{item:n,index:p})]),m.showConsensus&&e.hasConsensus(n)?(ve(),pe("span",vp,Le(e.pctOf(n))+"% 共识",1)):Ke("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",mp,[(ve(!0),pe(it,null,Ct(e.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:ot(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Ke("",!0),m.showConsensus?(ve(),pe("span",fp,Le(n.strategy_count||0)+" 策略",1)):Ke("",!0),m.showPrice&&n.price!=null?(ve(),pe("div",pp,[he("span",gp,Le(e.fmtPrice(n.price)),1),he("span",{class:ot(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(e.fmtChange(n.change_pct)),3)])):Ke("",!0),e.slots.extra?(ve(),pe("div",hp,[oa(a.$slots,"extra",{item:n,index:p})])):Ke("",!0),e.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:n,index:p})])):Ke("",!0),e.slots.footer?(ve(),pe("div",yp,[oa(a.$slots,"footer",{item:n,index:p})])):Ke("",!0)],42,np))),128))],64)):(ve(),ga(k,{key:1,type:"empty",title:m.emptyText},null,8,["title"]))])}const wp=Ma(Ff,[["render",bp]]),kp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},_p={key:0,class:"split-divider","data-split-resize":""};function xp(a,t,m,e,c,d){return ve(),pe("div",{class:ot(["detail-split-wrap",[m.rootClass,{"detail-split":m.enabled}]]),"data-split-root":""},[he("div",{class:ot(["detail-split-list",[m.listClass,{"w-100":!m.enabled}]])},[oa(a.$slots,"list")],2),m.enabled?(ve(),pe("div",_p)):Ke("",!0),m.enabled?(ve(),pe("div",{key:1,class:ot(["detail-split-pane",m.paneClass])},[oa(a.$slots,"pane")],2)):Ke("",!0)],2)}const Sp=Ma(kp,[["render",xp]]),mn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},Cp=200,qp={name:"qc-top-tabs",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=tt(()=>a.currentPage&&a.currentPage.value||""),m=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=tt(()=>a.menus&&a.menus.value||[]),c=tt(()=>{const l=e.value.find(g=>g.key===t.value);return l&&l.subPages||[]}),d=tt(()=>c.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:mn[t.value]&&mn[t.value][l]||"circle-dot"}))),k=bt(null),r=bt(!1),n=bt(!1),p=bt(!1);let o=null,_=null;function b(){const l=k.value;l&&(n.value=l.scrollLeft>2,p.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function S(){const l=k.value;l&&(r.value=l.scrollWidth>l.clientWidth+2,b())}function x(l){const g=k.value;g&&g.scrollBy({left:l*Cp,behavior:"smooth"})}function M(l){a.openTab?a.openTab(t.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function V(l){M(l),Vd(()=>{const g=k.value;if(!g)return;const I=g.querySelector('[data-tab-key="'+l+'"]');I&&I.scrollIntoView({block:"nearest",inline:"nearest"})})}const P=tt(()=>{if(!r.value)return[];const l=k.value;if(!l)return[];const g=l.getBoundingClientRect(),I=new Set;return l.querySelectorAll(".qc-top-tab").forEach(W=>{const E=W.getBoundingClientRect();E.left>=g.left-2&&E.left<g.right-24&&I.add(W.getAttribute("data-tab-key"))}),d.value.filter(W=>!I.has(W.key))});function v(l,g){l.key==="ArrowLeft"?(l.preventDefault(),x(-1)):l.key==="ArrowRight"?(l.preventDefault(),x(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),M(g.key))}return za(()=>{S(),o=new ResizeObserver(()=>{clearTimeout(_),_=setTimeout(S,100)}),k.value&&o.observe(k.value),window.addEventListener("resize",S)}),jd(()=>{o&&o.disconnect(),window.removeEventListener("resize",S),clearTimeout(_)}),{state:a,tabs:d,currentSubPage:m,go:M,scrollRef:k,hasOverflow:r,canScrollLeft:n,canScrollRight:p,scrollByStep:x,scrollToTab:V,hiddenTabs:P,onTabKeydown:v,updateScrollState:b}}},Ep={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Mp=["disabled"],Tp=["data-tab-key","aria-selected","title","onClick","onKeydown"],Pp={class:"qc-top-tab-label"},Dp=["disabled"];function Rp(a,t,m,e,c,d){const k=Vt("AppIcon"),r=Vt("el-dropdown-item"),n=Vt("el-dropdown-menu"),p=Vt("el-dropdown");return e.tabs.length?(ve(),pe("div",Ep,[e.hasOverflow?(ve(),pe("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,Mp)):Ke("",!0),he("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(ve(!0),pe(it,null,Ct(e.tabs,o=>(ve(),pe("div",{key:o.key,"data-tab-key":o.key,class:ot(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:_=>e.go(o.key),onKeydown:_=>e.onTabKeydown(_,o)},[st(k,{name:o.icon,size:14},null,8,["name"]),he("span",Pp,Le(o.label),1)],42,Tp))),128))],544),e.hasOverflow?(ve(),pe("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Dp)):Ke("",!0),e.hasOverflow&&e.hiddenTabs.length?(ve(),ga(p,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:ta(()=>[st(n,null,{default:ta(()=>[(ve(!0),pe(it,null,Ct(e.hiddenTabs,o=>(ve(),ga(r,{key:o.key,command:o.key,class:ot({"is-active":e.currentSubPage===o.key})},{default:ta(()=>[st(k,{name:o.icon,size:14},null,8,["name"]),qa(" "+Le(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ta(()=>[t[3]||(t[3]=he("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Ke("",!0)])):Ke("",!0)}const zp=Ma(qp,[["render",Rp]]),Ap=["title"],Lp={class:"qc-glossary-trigger",role:"button",tabindex:"0","aria-label":"术语解释"},Ip={class:"qc-glossary-card"},Np={class:"qc-glossary-head"},Op={class:"qc-glossary-term"},jp={class:"qc-glossary-cat"},Vp={class:"qc-glossary-row"},Fp={class:"qc-glossary-label"},Hp={class:"qc-glossary-text"},Bp={class:"qc-glossary-row"},Kp={class:"qc-glossary-label"},Wp={class:"qc-glossary-text"},Up={class:"qc-glossary-foot"},fn={__name:"GlossaryHint",props:{gkey:{type:String,required:!0},size:{type:[Number,String],default:14}},setup(a){const t=a;let m=null;function e(){return m||(m=fetch("/api/meta/glossary").then(n=>n.ok?n.json():null).then(n=>n&&n.success?n.items:null).catch(()=>null)),m}const c=bt(!0),d=bt(null);za(async()=>{const n=await e();if(n){const p=n.find(o=>o.key===t.gkey);p&&(d.value=p,c.value=!1)}});function k(){window.__quantGoPage?window.__quantGoPage("system","glossary"):window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value="system",window.__quantState.currentSubPage.value="glossary")}const r=tt(()=>!c.value&&!!d.value);return(n,p)=>{const o=Vt("qc-icon"),_=Vt("el-popover");return r.value?(ve(),pe("span",{key:0,class:"qc-glossary-hint",title:d.value.term},[st(_,{placement:"bottom-start",width:340,trigger:"hover","popper-class":"qc-glossary-pop"},{reference:ta(()=>[he("span",Lp,[st(o,{name:"help-circle",size:a.size},null,8,["size"])])]),default:ta(()=>[he("div",Ip,[he("div",Np,[he("span",Op,Le(n.t("glossary.term."+d.value.key)),1),he("span",jp,Le(n.t("glossary.cat."+d.value.category)),1)]),he("div",Vp,[he("span",Fp,Le(n.t("glossary.definition")),1),he("span",Hp,Le(d.value.definition),1)]),he("div",Bp,[he("span",Kp,Le(n.t("glossary.calc")),1),he("span",Wp,Le(d.value.calc),1)]),he("div",Up,[he("span",{class:"qc-glossary-link",onClick:k},Le(n.t("glossary.title"))+" →",1)])])]),_:1})],8,Ap)):Ke("",!0)}}},Gp={class:"card qc-glossary-page"},Yp={class:"card-title flex-between"},Jp={class:"qc-glossary-tabs",role:"tablist"},Qp=["onClick"],$p={key:0,class:"qc-glossary-loading"},Xp={key:1,class:"qc-glossary-empty"},Zp={key:2,class:"qc-glossary-list"},eg={class:"qc-glossary-item-head"},tg={class:"qc-glossary-term"},ag={class:"qc-glossary-cat"},sg={class:"qc-glossary-item-def"},ng={class:"qc-glossary-item-calc"},lg={class:"qc-glossary-label"},pn={__name:"GlossaryPage",setup(a){const t=bt([]),m=bt([]),e=bt("all"),c=bt(""),d=bt(!0);za(async()=>{try{const p=await(await fetch("/api/meta/glossary")).json();p&&p.success&&(t.value=p.items||[],m.value=p.categories||[])}catch{}finally{d.value=!1}});const k=tt(()=>{let n=t.value;e.value!=="all"&&(n=n.filter(o=>o.category===e.value));const p=(c.value||"").trim().toLowerCase();return p&&(n=n.filter(o=>(o.term||"").toLowerCase().includes(p)||(o.definition||"").toLowerCase().includes(p))),n}),r=["宏观","策略","因子","技术","短线","数据源","产品"];return(n,p)=>{const o=Vt("qc-icon"),_=Vt("el-input");return ve(),pe("div",Gp,[he("div",Yp,[he("span",null,Le(n.t("glossary.title")),1),st(_,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=b=>c.value=b),class:"qc-glossary-search",placeholder:n.t("glossary.search"),clearable:"",size:"small"},{prefix:ta(()=>[st(o,{name:"search",size:14})]),_:1},8,["modelValue","placeholder"])]),he("div",Jp,[(ve(!0),pe(it,null,Ct(["all"].concat(r),b=>(ve(),pe("span",{key:b,class:ot(["qc-glossary-tab",{"is-active":e.value===b}]),role:"tab",onClick:S=>e.value=b},Le(b==="all"?n.t("glossary.title"):n.t("glossary.cat."+b)),11,Qp))),128))]),d.value?(ve(),pe("div",$p,Le(n.t("common.loading")),1)):k.value.length?(ve(),pe("div",Zp,[(ve(!0),pe(it,null,Ct(k.value,b=>(ve(),pe("div",{key:b.key,class:"qc-glossary-item"},[he("div",eg,[he("span",tg,Le(n.t("glossary.term."+b.key)),1),he("span",ag,Le(n.t("glossary.cat."+b.category)),1)]),he("div",sg,Le(b.definition),1),he("div",ng,[he("span",lg,Le(n.t("glossary.calc"))+":",1),he("span",null,Le(b.calc),1)])]))),128))])):(ve(),pe("div",Xp,Le(n.t("glossary.empty")),1))])}}};(function(){const{ref:a,computed:t,inject:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=m("qcState");if(!e)return{};const c=a(!1),d=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),k=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=t(()=>e.marketData&&e.marketData.value||{}),n=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:r,bannerDismissed:d,dismissBanner:k,goMerrill:n,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:c,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(p,o){const _="sub."+p.key+"."+o,b=e.t(_);if(b!==_)return b;const S="sub."+o,x=e.t(S);return x!==S&&x?x:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:m,computed:e}=Vue,c=m(0),d=m(0),k=m(!1),r=e(()=>{const E={day:"date",week:"week",month:"month",year:"year"},N=t.currentView&&t.currentView.value||"day";return E[N]||"date"}),n={day:"日",week:"周",month:"月",year:"年"};function p(E){return t.t&&t.t("view."+E)||n[E]||E}function o(E){t.switchView?t.switchView(E):t.currentView&&(t.currentView.value=E)}let _=null;function b(E){const N=E.touches&&E.touches[0];N&&(c.value=N.clientX,d.value=N.clientY)}async function S(){if(!k.value){k.value=!0;try{await t.refreshCalendarData()}catch{}_&&clearTimeout(_),_=setTimeout(()=>{k.value=!1},500)}}function x(E){if(!(window.innerWidth<=768))return;const N=E.changedTouches&&E.changedTouches[0];if(!N)return;const K=window.__quantModules&&window.__quantModules.gestures||{};if((typeof K.judgePullToRefresh=="function"?K.judgePullToRefresh(d.value,N.clientY):N.clientY-d.value>=60)&&(window.scrollY||0)<=0){E.stopPropagation(),S();return}if(t.currentSubPage.value==="pool")return;const L=N.clientX-c.value,H=N.clientY-d.value;Math.abs(L)>50&&Math.abs(L)>Math.abs(H)*1.2&&(t.navigateDate(L<0?1:-1),E.stopPropagation())}const M=m(!1),V=m(!1),P=m(""),v=m(null),l=m([]);function g(E){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[E]||E}async function I(){if(t.selectedDate.value){M.value=!0,V.value=!0,P.value="",v.value=null,l.value=[];try{const E=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),N=await E.json();if(!E.ok)throw new Error(N.detail||"HTTP "+E.status);v.value=N;const K=N&&N.comparison||{},A=[];for(const L of Object.keys(K)){if(L==="all_intersection")continue;const H=K[L]||{},$=L.split("_vs_");A.push({label:g($[0])+" ↔ "+g($[1]),interCount:H.intersection_count||0,inter:(H.intersection||[]).join(", "),onlyS1Count:H.only_s1_count||0,onlyS1:(H.only_s1||[]).join(", "),onlyS2Count:H.only_s2_count||0,onlyS2:(H.only_s2||[]).join(", ")})}l.value=A}catch(E){P.value=String(E&&E.message?E.message:E)}finally{V.value=!1}}}let W="";return Vue.watch(()=>{const E=t.stockPool,N=E&&E.value||[];return{n:N.length,first:N[0]&&N[0].code,split:!!t.detailSplitEnabled.value}},(E,N)=>{if(!E.split||!E.first||E.n===0)return;const K=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,A=(t.stockPool.value||[]).some(L=>L.code===K);if(!K||!A){if(W===E.first&&K&&A===!1&&E.n>1)return;W=E.first,t.showStockDetail&&t.showStockDetail(E.first)}},{immediate:!0}),{...t,calType:r,pullRefreshing:k,onCalTouchStart:b,onCalTouchEnd:x,viewLabel:p,switchViewLocal:o,compareVisible:M,compareLoading:V,compareError:P,compareData:v,comparePairs:l,openStrategyCompare:I}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const t=a("qcState"),m=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let c=0;const d=e(()=>{var j;return((j=t.merrillData)==null?void 0:j.value)||{}}),k=e(()=>{var j;return((j=t.marketData)==null?void 0:j.value)||{}}),r=e(()=>{var j;return((j=t.dashboardData)==null?void 0:j.value)||{}}),n=e(()=>{var j;return((j=t.healthMetrics)==null?void 0:j.value)||[]}),p=e(()=>{var j;return((j=t.filteredConsensusRank)==null?void 0:j.value)||[]}),o=e(()=>{const j={};for(const Z of p.value)Z.code&&Z.name&&(j[Z.code]=Z.name);return j}),_={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function b(j){return _[j]||j}const S=e(()=>k.value.date||r.value.latest_date||"-"),x=e(()=>{const j=k.value;return!j||Object.keys(j).length===0?"数据加载中...":j.is_trading_day&&j.in_trading_hours?"● 交易中":j.is_trading_day?"已收盘":"○ 非交易日"}),M=e(()=>{const j=d.value.next_stage_prediction;return j&&j.next_stage_name&&j.transition_probability>.2?`→${j.next_stage_name} ${(j.transition_probability*100).toFixed(2)}%`:""}),V=e(()=>{const j=[],Z=r.value.pool_changes||{},Ce=Z.new_count||0;if(Ce>0){const wt=Z.new_stock_names||{},Je=(Z.new_stocks||[]).map(Ge=>wt[Ge]||o.value[Ge]||Ge).slice(0,4).join("、");j.push({icon:"sparkles",level:"new",text:`今日新入池 ${Ce} 只${Je?" · "+Je:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const wt of n.value.filter(Je=>Je.degraded))j.push({icon:"alert-triangle",level:"warn",text:`数据源 ${b(wt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Ie=d.value.timing;Ie&&Ie.progress_percent&&Ie.progress_percent>100?j.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${Ie.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Ie&&Ie.maturity&&d.value.name&&j.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${Ie.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const Ue=k.value;return Ue&&Ue.is_trading_day===!1&&Ue.date&&j.push({icon:"calendar",level:"info",text:`${Ue.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),j}),P=e(()=>{const j=[],Z=d.value.name||"",Ce=d.value.timing||{},Ie=["复苏","成长","过热"],Ue=["滞胀","衰退"];Ie.some(rt=>Z.includes(rt))&&j.push({kind:"opportunity",source:"美林",text:Z+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),Ue.some(rt=>Z.includes(rt))&&j.push({kind:"risk",source:"美林",text:Z+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),Ce.progress_percent&&Ce.progress_percent>100&&j.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const wt=r.value.pool_changes||{},Je=(wt.new_count||0)-(wt.out_count||0);Je>=3?j.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Je,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):Je<=-3&&j.push({kind:"risk",source:"池变动",text:"净出池 "+Je,action:()=>{t.currentSubPage.value="consensus"}});const Ge=k.value.market_sentiment,kt=Ge&&Ge.text||"";(kt.includes("乐观")||kt.includes("积极")||kt.includes("亢奋"))&&j.push({kind:"opportunity",source:"情绪",text:kt,action:()=>{t.currentSubPage.value="market"}}),(kt.includes("悲观")||kt.includes("恐慌")||kt.includes("低迷"))&&j.push({kind:"risk",source:"情绪",text:kt,action:()=>{t.currentSubPage.value="market"}});for(const rt of n.value.filter(ft=>ft.degraded))j.push({kind:"risk",source:"数据",text:b(rt.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return j}),v=e(()=>{var j;return((j=t.merrillTimeline)==null?void 0:j.value)||t.merrillTimeline||{cycles:[]}}),l=e(()=>{var j;return((j=t.timelineLoading)==null?void 0:j.value)||!1});function g(j){const Z=t.showStageDetail;typeof Z=="function"&&Z(j)}function I(j){const Z=t.merrillStagesConfig,Ie=(Z&&Z.value?Z.value:Z||{})[j]||{};return Ie.color||Ie.bg_color||"var(--color-primary)"}function W(j){const Z=t.merrillStagesConfig,Ce=Z&&Z.value?Z.value:Z||{};return Ce[j]&&Ce[j].name||""}function E(){const j=t.merrillStagesConfig;return j&&j.value?j.value:j||{}}function N(j){return E()[j]&&E()[j].description||""}const K=Vue.ref([]),A=Vue.ref(null),L=Vue.ref(!1),H=Vue.ref(!1),$=Vue.ref(7),ee=Vue.ref(""),le=Vue.ref(""),ae=Vue.computed(()=>{const j=new Set;return(K.value||[]).forEach(function(Z){Z.task&&j.add(Z.task)}),Array.from(j).sort()}),D=Vue.computed(function(){const j=A.value&&A.value.success_rate||0;return j>=80?"color-success":j>=50?"color-warning":"color-danger"});function s(j,Z){return j>0&&Z/j>=.8?"status-ok":j>0&&Z/j>=.5?"status-warn":"status-bad"}async function y(){const j=++c;L.value=!0,H.value=!1;try{const Z=window.__quantModules&&window.__quantModules.core||{},Ce=typeof Z.authHeaders=="function"?Z.authHeaders():{},Ie=new URLSearchParams({days:String($.value)});ee.value&&Ie.set("task",ee.value),le.value&&Ie.set("status",le.value);const[Ue,wt]=await Promise.all([fetch("/api/system/execution-history?"+Ie.toString(),{headers:Ce}).then(function(Je){return Je.json()}),fetch("/api/system/execution-summary?days="+$.value,{headers:Ce}).then(function(Je){return Je.json()})]);if(j!==c)return;K.value=Ue&&Ue.data||[],A.value=wt&&wt.data||null}catch(Z){console.error("[execution] 执行数据加载失败:",Z),H.value=!0}finally{j===c&&(L.value=!1)}}const i=window.__quantModules&&window.__quantModules.i18n||{},h=typeof i.t=="function"?i.t:function(j){return String(j)},X=Vue.ref([]),z=Vue.ref(null),w=Vue.ref(null),f=Vue.ref(""),C=Vue.ref([]),u=Vue.ref(!1);let O=null;const oe=Vue.computed(function(){const j=w.value&&w.value.dates||[];return j.length&&!f.value&&(f.value=j[j.length-1].date),j}),J=Vue.computed(function(){const j=(X.value||[]).find(function(Ce){return Ce.enabled});if(!j||j.countdown_seconds==null)return"—";const Z=j.countdown_seconds;return Math.floor(Z/3600)+"h"+String(Math.floor(Z%3600/60)).padStart(2,"0")+"m"}),T=Vue.computed(function(){const j=(X.value||[]).find(function(Z){return Z.enabled});if(!j||j.countdown_seconds==null||j.countdown_seconds<0)return"";try{return new Date(Date.now()+j.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),U=Vue.computed(function(){const j=z.value;return!j||j.phase==="idle"?h("exec.waiting"):j.phase==="running"?h("exec.running")+(j.current_sid?" · "+j.current_sid:""):j.phase==="done"?h("exec.done"):h("exec.failed")}),ie=Vue.computed(function(){return z.value&&z.value.phase==="running"?"loader":"check-circle-2"}),ge=Vue.computed(function(){const j=w.value&&w.value.dates||[];return j.length?j[j.length-1].date:"—"}),qe=Vue.computed(function(){const j=w.value&&w.value.dates||[],Z=j[j.length-1];return Z&&Z.visible?"color-success":"color-danger"}),Q=Vue.computed(function(){const j=w.value&&w.value.dates||[],Z=j[j.length-1];return Z?Z.day_view_total:"—"});function ue(j){const Z=window.__quantModules&&window.__quantModules.core||{},Ce=typeof Z.authHeaders=="function"?Z.authHeaders():{};return fetch(j,{headers:Ce}).then(function(Ie){return Ie.json()})}async function De(){const j=++c;try{const[Z,Ce,Ie]=await Promise.all([ue("/api/strategies/execution/plan"),ue("/api/strategies/execution/status"),ue("/api/strategies/execution/results?days=7")]);if(j!==c)return;X.value=Z&&Z.data&&Z.data.plans||[],z.value=Ce&&Ce.data||null,w.value=Ie&&Ie.data||null,z.value&&z.value.phase==="running"?se():be()}catch(Z){console.error("[execution-monitor] 监控数据加载失败:",Z)}}function se(){be(),O=setInterval(function(){ue("/api/strategies/execution/status").then(function(j){z.value=j&&j.data||null,z.value&&z.value.phase!=="running"&&(be(),De())}).catch(function(){})},5e3)}function be(){O&&(clearInterval(O),O=null)}async function Pe(j){if(!j)return;const Z=++c;u.value=!0;try{const Ce=await ue("/api/strategies/execution/trace/"+encodeURIComponent(j));if(Z!==c)return;const Ie=Ce&&Ce.data||null;C.value=Ie&&Ie.steps||[]}catch(Ce){console.error("[execution-trace] 追溯加载失败:",Ce)}finally{Z===c&&(u.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(j){j==="execution"?(y(),De()):be()},{immediate:!0}),Vue.watch(function(){const j=t.currentSubPage&&t.currentSubPage.value,Z=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],Ce=t.marketData&&t.marketData.value||{};return{sub:j,split:!!t.detailSplitEnabled.value,top5:Z.slice(0,5),rank:Z,indices:(Ce.indices||[]).map(function(Ie){return Ie})}},function(j,Z){if(j.split){if(j.sub==="overview"){if(!j.top5.length)return;const Ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=j.top5.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&t.showStockDetail&&t.showStockDetail(j.top5[0].code)}else if(j.sub==="consensus"){if(!j.rank.length)return;const Ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=j.rank.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&t.showStockDetail&&t.showStockDetail(j.rank[0].code)}else if(j.sub==="market"){if(!j.indices.length)return;const Ce=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Ie=j.indices.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&t.showIndexDetail&&t.showIndexDetail(j.indices[0])}}},{immediate:!0});const me=Vue.ref("band"),we=["recession","recovery","overheating","stagflation"];function xe(j){if(!j)return null;const Z=String(j).split("-"),Ce=parseInt(Z[0],10),Ie=parseInt(Z[1]||"1",10);return isFinite(Ce)?Ce+(Ie-1)/12:null}function ce(j){const Z=Math.floor(j);let Ce=Math.round((j-Z)*12)+1;return Ce>12&&(Ce=12),Ce<1&&(Ce=1),Z+"-"+(Ce<10?"0"+Ce:""+Ce)}function te(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function fe(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Ne(j,Z){const Ce=te(),Ie=Number(Ce.avg_duration_months)||0,Ue=Math.min(100,Number(Ce.progress_percent)||0),wt=xe(Ce.current_stage_start_date),Je=[];let Ge=null;if((j||[]).forEach(function(je){const ct=xe(je.start);Ge==null&&ct!=null&&(Ge=ct);const zt=!!(je.is_current||wt!=null&&ct===wt&&!je.duration_months),Pt=je.name||W(je.stage);if(zt&&Ie>0){const vt=Ie*Ue/100;vt>.5&&Je.push({stage:je.stage,name:Pt,months:vt,live:!0,start:je.start});const Dt=Ie-vt;Dt>.5&&Je.push({stage:je.stage,name:"剩余(预测)",months:Dt,ghost:!0,start:je.start})}else{let vt=Number(je.duration_months)||0;if(!vt&&ct!=null){const Dt=xe(je.end);Dt!=null&&Dt>ct&&(vt=Math.max(1,Math.round((Dt-ct)*12)))}vt||(vt=1),Je.push({stage:je.stage,name:Pt,months:vt,live:zt,start:je.start,end:je.end})}if(zt&&Z&&Ie>0){const vt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;vt&&Je.push({stage:vt.next_stage,name:(vt.next_stage_name||"下一阶段")+" (预测)",months:Ie,ghost:!0,prob:vt.transition_probability})}}),!Je.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const kt=Je.reduce(function(je,ct){return je+ct.months},0)||1,rt=Ge??0;let ft=0,lt=0;const Ht=Je.map(function(je){const ct=ft;je.ghost||(lt+=je.months),ft+=je.months;const zt={stage:je.stage,name:je.name,months:Math.round(je.months),ghost:!!je.ghost,live:!!je.live,prob:je.prob,left:ct/kt*100,width:Math.max(2,je.months/kt*100)},Pt=xe(je.start),vt=xe(je.end);return zt.start=Pt!=null?ce(Pt):ce(rt+ct/12),zt.end=vt!=null?ce(vt):"",zt.predicted=Pt==null,zt}),_t=Je[Je.length-1],G=Je.some(function(je){return je.ghost}),ke=_t&&_t.end?_t.end:ce(rt+kt/12);return{segs:Ht,axisStart:ce(rt),axisEnd:ke,nowPct:G?lt/kt*100:null}}function Be(j){return(j.stages||[]).some(function(Z){return Z.is_current})}const We=Vue.computed(function(){const j=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!j.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let Z=null;for(let Ce=j.length-1;Ce>=0;Ce--)if(Be(j[Ce])){Z=j[Ce];break}return Z||(Z=j[j.length-1]),Ne(Z.stages,!0)});function qt(j){const Z=j&&j.stages?j.stages:[];if(!Z.length)return"";const Ce=Z[0]&&Z[0].start?String(Z[0].start).slice(0,4):"",Ie=Z[Z.length-1]||{},Ue=Ie.end?String(Ie.end).slice(0,4):Ie.start?String(Ie.start).slice(0,4):"";return Ce||Ue?Ce?Ce+"–"+Ue:Ue:""}const gt=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(Z){return!Be(Z)}).map(function(Z){return{label:Z.label,years:qt(Z),segs:Ne(Z.stages,!1).segs}})}),Tt=we,Se=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(Z){const Ce={};we.forEach(function(Ue){Ce[Ue]=0});let Ie=null;return(Z.stages||[]).forEach(function(Ue){Ce[Ue.stage]!=null&&(Ce[Ue.stage]+=Number(Ue.duration_months)||0),Ue.is_current&&(Ie=Ue.stage)}),{label:Z.label,sum:Ce,cur:Ie}})}),Ee=Vue.computed(function(){let j=0;return Se.value.forEach(function(Z){we.forEach(function(Ce){Z.sum[Ce]>j&&(j=Z.sum[Ce])})}),j||1}),Ve=Vue.computed(function(){const j=t.merrillSnapshots&&t.merrillSnapshots.value||[],Z=[];return j.forEach(function(Ce){const Ie=Z[Z.length-1];Ie&&Ie.stage===Ce.stage?(Ie.count++,Ie.last=Ce.timestamp):Z.push({stage:Ce.stage,name:Ce.stage_name||W(Ce.stage),count:1,first:Ce.timestamp,last:Ce.timestamp})}),Z}),Oe=Vue.computed(function(){return Math.max(100,Math.min(200,Number(te().progress_percent)||0))}),$e=Vue.computed(function(){const j=Number(te().progress_percent)||0;return{width:Math.max(0,Math.min(100,j/Oe.value*100))+"%",background:j>100?"linear-gradient(90deg, "+fe()+", var(--color-warning))":fe()}}),Xe=Vue.computed(function(){return 100/Oe.value*100}),Ye=Vue.computed(function(){const j=te().predicted_end;if(!j)return"";if(typeof j=="string")return j;const Z=j.optimistic||j.earliest||"",Ce=j.pessimistic||j.latest||"";return Z&&Ce?Z+" ~ "+Ce:j.base||j.mid||Z||Ce||""});var nt=22;function yt(j){return"color-mix(in srgb, "+j+" "+nt+"%, var(--surface-card))"}function Et(j){const Z=I(j.stage);return j.ghost?{left:j.left+"%",width:j.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+Z,background:"repeating-linear-gradient(45deg, "+yt(Z)+" 0, "+yt(Z)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:j.left+"%",width:j.width+"%",background:yt(Z),color:"var(--text-primary)",borderLeft:"3px solid "+Z}}function Ft(j){const Z=[j.name];return j.start&&Z.push((j.predicted?"预计起始 ":"起始 ")+j.start+(j.end?" → "+j.end:"")),j.months&&Z.push("约 "+j.months+" 个月"),j.ghost&&Z.push("预测(尚未发生)"),j.prob!=null&&Z.push("转移概率 "+(j.prob*100).toFixed(0)+"%"),Z.join(" · ")}function aa(j,Z){const Ce=I(j),Ie=Math.max(.28,Z/Ee.value),Ue=Math.round(14+30*Ie);return{background:"color-mix(in srgb, "+Ce+" "+Ue+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...t,todayText:S,tradingStatus:x,merrillNext:M,todayFocus:V,todaySignals:P,merrillConfigOpen:m,getTimelineStageColor:I,getTimelineStageName:W,getTimelineStageDesc:N,mcHistView:me,mcCurrentBand:We,mcHistoryBands:gt,mcStageKeys:Tt,mcMatrix:Se,mcTrailRuns:Ve,mcProgStyle:$e,mcAvgMark:Xe,mcEndRange:Ye,mcSegStyle:Et,mcSegTitle:Ft,mcMxCellStyle:aa,merrillTimeline:v,timelineLoading:l,showTimelineStage:g,execHistory:K,execSummary:A,execLoading:L,execError:H,execDays:$,execTaskFilter:ee,execStatusFilter:le,execTaskOptions:ae,execSuccessClass:D,loadExecutionData:y,execRateClass:s,execPlan:X,execStatus:z,execResults:w,execTraceDate:f,execTraceSteps:C,execTraceLoading:u,execResultsDates:oe,execCountdownText:J,execNextRunText:T,execPhaseText:U,execStatusIcon:ie,execLastDate:ge,execVisibleClass:qe,execVisibleText:Q,loadExecutionTrace:Pe}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};function m(G){t.currentSubPage.value=G}function e(){te(),fe(),Ne()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,G=>{G==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),G==="datadict"&&J(),G==="health"&&f(),G==="notification"&&e(),G==="datasource"&&V(),G!=="usage"&&s()});const c=t.themeHues||[45,220,0,140,270,320,-1],d=t.themeHueNames||{},k=t.themeMode||Vue.computed(()=>"light"),r=t.themeHue||Vue.ref(45);function n(G){t.changeThemeMode&&t.changeThemeMode(G)}function p(G){t.changeThemeHue&&t.changeThemeHue(parseInt(G,10))}function o(G){return t.hueColor?t.hueColor(G):G<0?"hsl(0, 0%, 46%)":"hsl("+G+", 75%, 42%)"}function _(G){return t.hueName?t.hueName(G):d[G]||"自定义 "+G}function b(G){t.setNavMode&&t.setNavMode(G)}const S=Vue.ref([]),x=Vue.ref([]),M=Vue.ref(!1);async function V(){M.value=!0;try{const ke=await(await fetch("/api/meta/freshness")).json();ke&&ke.success&&(x.value=ke.items||[])}catch{}M.value=!1}const P=Vue.ref(""),v=Vue.ref("read"),l=Vue.ref(""),g=Vue.ref(!1),I=()=>window.__quantModules&&window.__quantModules.core||{},W=Vue.ref([]),E=Vue.ref(!1);async function N(){E.value=!0;try{const G=await fetch("/api/audit/logs?limit=20",{headers:I().authHeaders?I().authHeaders():{}}).then(function(ke){if(!ke.ok)throw new Error("HTTP "+ke.status);return ke.json()});W.value=G&&G.logs||[]}catch(G){console.error("[system] 审计加载失败:",G),W.value=[]}finally{E.value=!1}}const K=Vue.ref(!1),A=Vue.ref(null),L=Vue.ref(null),H=Vue.ref([]),$=Vue.ref(null);function ee(G){return G==="completed"?"完成":G==="running"?"运行中":G==="pending"?"排队中":G==="cancelled"?"已取消":"失败"}async function le(){try{const ke=await(await fetch("/api/jobs?limit=20")).json();ke&&ke.success&&(H.value=ke.data&&ke.data.tasks||[])}catch(G){console.warn("[system] 加载任务队列失败:",G)}}async function ae(G){try{await fetch("/api/jobs/"+G+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),le()}catch(ke){console.warn("[system] 取消任务失败:",ke)}}function D(){le(),$.value=window.setInterval(le,15e3)}function s(){$.value&&(clearInterval($.value),$.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){s()});const y=Vue.ref({items:[]}),i=Vue.ref([]),h=Vue.ref(null),X=Vue.ref({data_sources:[],alerts:[]}),z=function(){return I().authHeaders?I().authHeaders():{}},w=function(G){return fetch(G,{headers:z()}).then(function(ke){if(!ke.ok)throw new Error("HTTP "+ke.status);return ke.json()})};async function f(){K.value=!0,A.value=null;try{const[G,ke,je,ct]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);y.value=G&&G.data||{items:[]},i.value=ke&&ke.data||[],h.value=je&&je.data||null,X.value=ct||{data_sources:[],alerts:[]},L.value=new Date().toLocaleTimeString()}catch(G){console.warn("[health] 加载失败:",G),A.value="健康数据加载失败: "+(G.message||""),y.value={items:[]},i.value=[]}finally{K.value=!1}}const C=Vue.ref(!1),u=Vue.ref(""),O=Vue.ref(""),oe=Vue.ref({fields:[]});async function J(){C.value=!0,u.value="";try{const G="/api/data-dict"+(O.value?"?category="+O.value:""),ke=await w(G);oe.value=ke&&ke.data||{fields:[]}}catch(G){console.warn("[dict] 加载失败:",G),u.value="数据字典加载失败: "+(G.message||""),oe.value={fields:[]}}finally{C.value=!1}}function T(G){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[G]||"var(--text-secondary)"}function U(G){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[G]||G}const ie=Vue.computed(()=>(y.value?y.value.items||[]:[]).filter(ke=>ke.status==="stale"||ke.status==="missing").length),ge=Vue.ref("rules"),qe=Vue.ref([]),Q=Vue.ref([]),ue=Vue.ref([]),De=Vue.ref(!1),se=Vue.ref(""),be=Vue.ref("price_above"),Pe=Vue.ref(""),me=Vue.ref(!1),we=Vue.ref(60),xe=Vue.ref("");function ce(G){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[G]||G}async function te(){De.value=!0;try{const G=await(await fetch("/api/alerts/rules")).json();qe.value=G&&G.rules||[]}catch(G){xe.value="规则加载失败: "+G}finally{De.value=!1}}async function fe(){De.value=!0;try{const G=await(await fetch("/api/alerts/history?limit=50")).json();Q.value=G&&G.history||[]}catch(G){xe.value="历史加载失败: "+G}finally{De.value=!1}}async function Ne(){De.value=!0;try{const G=await(await fetch("/api/alerts/channels")).json(),ke=await(await fetch("/api/alerts/silence")).json();ue.value=G&&G.channels||[],me.value=!!(ke&&ke.silenced)}catch(G){xe.value="通道状态加载失败: "+G}finally{De.value=!1}}function Be(G){ge.value=G,G==="rules"?te():G==="history"?fe():Ne()}async function We(){const G=se.value.trim();if(!G){xe.value="请填写股票代码";return}De.value=!0;try{const ke={stock_code:G,rule_type:be.value};if(be.value!=="new_pool"){const ct=Number(Pe.value);if(isNaN(ct)){xe.value="阈值必须为数值";return}ke.threshold=ct}const je=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)})).json();je&&je.rule?(xe.value="规则已添加",se.value="",Pe.value="",te()):xe.value=je&&je.detail||"添加失败"}catch(ke){xe.value="添加失败: "+ke}finally{De.value=!1}}async function qt(G){try{await fetch("/api/alerts/rules/"+G.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!G.enabled})}),G.enabled=!G.enabled}catch(ke){xe.value="切换失败: "+ke}}async function gt(G){try{const ke=await(await fetch("/api/alerts/rules/"+G.id,{method:"DELETE"})).json();ke&&ke.success?(xe.value="规则已删除",te()):xe.value="删除失败"}catch(ke){xe.value="删除失败: "+ke}}async function Tt(){try{const G=me.value?we.value:0,ke=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:G})})).json();me.value=!!(ke&&ke.silenced),xe.value=me.value?"已静默":"已恢复推送"}catch(G){xe.value="静默设置失败: "+G}}async function Se(){me.value=!1,await Tt()}function Ee(G){return!!G&&!G.degraded}const Ve=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((ke,je)=>Math.max(ke,je.views||0),0)||1),Oe=()=>I().OPENAPI_ROUTE_BASE||"/api/openapi";async function $e(){g.value=!0;try{const G=await I().apiFetch(Oe()+"/keys");S.value=G&&G.data||[]}catch(G){ElementPlus.ElMessage.error("加载 API Key 失败: "+(G.message||""))}finally{g.value=!1}}async function Xe(){try{const G=await I().apiFetch(Oe()+"/keys",{method:"POST",body:JSON.stringify({name:P.value||"未命名",role:v.value||"read",expire_days:365})});G&&G.success?(l.value=G.api_key||"",P.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await $e()):ElementPlus.ElMessage.error(G&&(G.detail||G.message)||"生成失败")}catch(G){ElementPlus.ElMessage.error("生成失败: "+(G.message||""))}}async function Ye(){if(l.value)try{await navigator.clipboard.writeText(l.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function nt(G){try{const ke=await I().apiFetch(Oe()+"/keys/"+G.id,{method:"DELETE"});ke&&ke.success?(ElementPlus.ElMessage.success("Key 已吊销"),l.value&&G.prefix&&l.value.includes(G.prefix)&&(l.value=""),await $e()):ElementPlus.ElMessage.error(ke&&(ke.detail||ke.message)||"吊销失败")}catch(ke){ElementPlus.ElMessage.error("吊销失败: "+(ke.message||""))}}const yt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Et(G){return yt[G]||G}const Ft=computed(()=>{var G;return(((G=t.healthMetrics)==null?void 0:G.value)||[]).map(ke=>({name:Et(ke.name),source:ke.name,success_rate:ke.success_rate,avg_latency_ms:ke.avg_latency_ms,calls:ke.calls||0,degraded:!!ke.degraded,data_age_hours:ke.data_age_hours!=null?ke.data_age_hours:null,stale:!!ke.stale,last_fetch:ke.last_fetch||ke.last_success||null}))});function aa(G){return G.degraded?"degraded":G.success_rate==null?"unknown":G.success_rate>=90?"ok":G.success_rate>=60?"warn":"bad"}function j(G){return G==null?"":G<1?"刚刚":G<24?Math.round(G)+"小时前":Math.floor(G/24)+"天前"}const Z=t.aiUsage||Vue.ref({}),Ce=Vue.computed(()=>{const G=Z.value&&Z.value.by_model||{};return Object.entries(G).map(([ke,je])=>({name:ke,count:je})).sort((ke,je)=>je.count-ke.count)}),Ie=Vue.computed(()=>Ce.value.reduce((G,ke)=>Math.max(G,ke.count),0)||1),Ue=Vue.computed(()=>Ce.value.reduce((G,ke)=>G+ke.count,0)||1),wt=Vue.computed(()=>Je.value.reduce((G,ke)=>Math.max(G,ke.count),0)||0),Je=Vue.computed(()=>{const G=Z.value&&Z.value.by_day||{},ke=[],je=new Date;for(let ct=29;ct>=0;ct--){const zt=new Date(je.getFullYear(),je.getMonth(),je.getDate()-ct),Pt=zt.getFullYear()+"-"+String(zt.getMonth()+1).padStart(2,"0")+"-"+String(zt.getDate()).padStart(2,"0");ke.push({day:Pt,count:G[Pt]||0})}return ke}),Ge=Vue.computed(()=>Je.value.reduce((G,ke)=>Math.max(G,ke.count),0)||1),kt=Vue.computed(()=>{const G=Z.value&&Z.value.by_day||{},ke=new Date,je=ke.getFullYear()+"-"+String(ke.getMonth()+1).padStart(2,"0")+"-"+String(ke.getDate()).padStart(2,"0");return G[je]||0}),rt=Vue.computed(()=>{const G=Z.value&&Z.value.by_day||{},ke=Object.keys(G).filter(je=>(G[je]||0)>0);return ke.length?ke[ke.length-1]:""});function ft(G){t.analyticsDays&&(t.analyticsDays.value=G),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const lt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ht='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function _t(G){return G?Ht:lt}return D(),{...t,themeHues:c,themeHueNames:d,themeMode:k,themeHue:r,onThemeModeChange:n,setThemeHue:p,hueColor:o,hueName:_,onNavModeChange:b,analyticsMaxViews:Ve,aiModelRank:Ce,aiModelMax:Ie,aiDayTrend:Je,aiDayMax:Ge,todayAiCalls:kt,lastAiCallDay:rt,aiTotal:Ue,aiDayPeak:wt,setAnalyticsDays:ft,viewIcon:_t,openApiKeys:S,openApiKeyName:P,openApiKeyRole:v,newOpenApiKey:l,openApiLoading:g,loadOpenApiKeys:$e,generateOpenApiKey:Xe,copyOpenApiKey:Ye,revokeOpenApiKey:nt,healthRows:Ft,healthClass:aa,fmtAge:j,staleAssetCount:ie,jobQueue:H,loadJobQueue:le,cancelJob:ae,jobStatusText:ee,auditLogs:W,auditLoading:E,loadAuditLogs:N,healthLoading:K,healthError:A,healthUpdatedAt:L,freshnessData:y,healHistory:i,startupReport:h,sourceHealth:X,refreshHealth:f,statusColor:T,statusLabel:U,sourceOk:Ee,dictLoading:C,dictError:u,dictCategory:O,dictData:oe,loadDataDict:J,ncTab:ge,ncRules:qe,ncHistory:Q,ncChannels:ue,ncLoading:De,ncNewCode:se,ncNewType:be,ncNewThreshold:Pe,ncSilence:me,ncSilenceMinutes:we,ncMsg:xe,ncTypeLabel:ce,onNcTab:Be,loadAlertRules:te,loadAlertHistory:fe,loadAlertChannels:Ne,addAlertRule:We,toggleAlertRule:qt,removeAlertRule:gt,applySilence:Tt,clearSilence:Se,freshnessItems:x,freshnessLoading:M,loadFreshness:V,goSystemSub:m}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:m,onUnmounted:e}=Vue,c=a("qcState");if(!c)return{};function d(){if(!c.hasMoreAiHistory||!c.loadMoreAiHistory||c.currentPage.value!=="ai"||c.currentSubPage.value!=="history")return;const ge=document.documentElement;ge.scrollTop+window.innerHeight>=ge.scrollHeight-300&&c.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),e(()=>window.removeEventListener("scroll",d));const k=t(null),r=t(!1),n=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function p(ge){return!ge||ge.total===0||ge.rate===null||ge.rate===void 0?"--":ge.rate.toFixed(2)+"%"}const o=t(5);function _(ge){o.value=ge}function b(ge,qe){if(!ge)return"--";if(ge.available===!1)return"— 数据不可达";const Q=ge["hit_n"+qe];return Q===!0?"✓ 命中":Q===!1?"✗ 未中":"– 中性/待验证"}async function S(){r.value=!0;try{const qe=await(await fetch("/api/ai/track")).json();k.value=qe&&qe.success?qe.data:null}catch(ge){console.warn("[eval-track] 评估命中率加载失败:",ge),k.value=null}finally{r.value=!1}}m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(ge){ge==="ai/evaluation-analysis"&&S()},{immediate:!0});const x=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:M,summary:V,trades:P,loading:v,loadError:l,showAddForm:g,addForm:I,addSaving:W,tradeFormVisible:E,tradeForm:N,tradeSaving:K,portfolioTab:A,equityDays:L,equityLoading:H,equityNote:$,equityHasData:ee,loadPortfolio:le,addPosition:ae,removePosition:D,openTradeForm:s,submitTrade:y,loadTrades:i,loadEquity:h,fmtSigned:X,fmtSignedPct:z,signClass:w,riskTab:f,riskLoading:C,riskNote:u,riskHasData:O,riskData:oe,riskMetricList:J,loadRisk:T}=x;m(M,function(ge){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((ge||[]).map(function(qe){return{code:qe.stock_code,name:qe.stock_name||qe.stock_code}}))},{deep:!0}),m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(ge){ge==="ai/portfolio"?(le(),i(),h(L?L.value:30),typeof T=="function"&&T()):ge==="ai/overview"&&le()},{immediate:!0});let U="",ie=!1;return m(function(){const ge=c.currentSubPage&&c.currentSubPage.value,qe=!!(c.detailSplitEnabled&&c.detailSplitEnabled.value),Q={sub:ge,split:qe,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(ge==="history"){const ue=c.aiHistoryView&&c.aiHistoryView.value||"date",De=ue==="date"?c.groupedByDate:ue==="month"?c.groupedByMonth:c.aiHistoryByStock,se=De&&De.value||{},be=Object.keys(se);Q.kind="history",Q.view=ue,Q.key=be.length?be[0]:"",Q.first=be.length&&(se[be[0]]||[])[0]||null,Q.expandList=ue==="date"?c.expandedDates:ue==="month"?c.expandedMonths:c.expandedStocks,Q.expandFn=ue==="date"?c.toggleDateExpand:ue==="month"?c.toggleMonthExpand:c.toggleStockExpand}else if(ge==="chat_history"){const ue=c.chatHistoryView&&c.chatHistoryView.value||"date",De=ue==="date"?c.chatGroupedByDate:ue==="month"?c.chatGroupedByMonth:c.chatGroupedByStock,se=De&&De.value||{},be=Object.keys(se);Q.kind="chat",Q.view=ue,Q.key=be.length?be[0]:"",Q.first=be.length&&(se[be[0]]||[])[0]||null,Q.expandList=ue==="date"?c.expandedChatDates:ue==="month"?c.expandedChatMonths:c.expandedChatStocks,Q.expandFn=ue==="date"?c.toggleChatDateExpand:ue==="month"?c.toggleChatMonthExpand:c.toggleChatStockExpand}return Q},function(ge){if(!ge.split||!ge.first||!ge.kind)return;const qe=ge.sub!==U,Q=c.stockDetail&&c.stockDetail.value,ue=!!(Q&&Q.stock);if(!qe&&ue||ie)return;U=ge.sub,ie=!0;try{ge.key&&ge.expandList&&ge.expandFn&&ge.expandList.value&&ge.expandList.value.indexOf(ge.key)<0&&ge.expandFn(ge.key)}catch{}const De=ge.kind==="history"?c.viewAiResult(ge.first):c.viewChatSession(ge.first);De&&typeof De.finally=="function"?De.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...c,trackData:k,trackLoading:r,trackWindows:n,fmtTrackRate:p,loadTrack:S,trackWindow:o,setTrackWindow:_,trackHitText:b,positions:M,summary:V,trades:P,loading:v,loadError:l,showAddForm:g,addForm:I,addSaving:W,tradeFormVisible:E,tradeForm:N,tradeSaving:K,portfolioTab:A,equityDays:L,equityLoading:H,equityNote:$,equityHasData:ee,loadPortfolio:le,addPosition:ae,removePosition:D,openTradeForm:s,submitTrade:y,loadTrades:i,loadEquity:h,fmtSigned:X,fmtSignedPct:z,signClass:w,riskTab:f,riskLoading:C,riskNote:u,riskHasData:O,riskData:oe,riskMetricList:J,loadRisk:T}}}})();(function(){const{ref:a,computed:t,watch:m,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const c=e("qcState"),d=Vue.ref(!1),k=Vue.ref(!1);let r=0;if(!c)return{};const n=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function p(q){n.value=q;try{localStorage.setItem("quant_strategy_mode",q)}catch{}c.currentSubPage.value="strategy-manage"}const o=a([]),_=a(!1),b=a(!1),S=a(""),x=a(null),M=a(!1),V=a(!1);async function P(){const q=++r;_.value=!0,b.value=!1;try{const Y=await fetch("/api/market/reviews?limit=30",{headers:ft()}).then(Ae=>Ae.json());if(q!==r)return;Y&&Y.success?o.value=Array.isArray(Y.data)?Y.data:[]:b.value=!0}catch(Y){console.error("[market-review] 复盘列表加载失败:",Y),b.value=!0}finally{q===r&&(_.value=!1)}}function v(q){S.value=q,E(q)}function l(q){S.value===q?W():v(q)}function g(q){return q==null||isNaN(Number(q))?"—":(Number(q)>=0?"+":"")+Number(q).toFixed(2)+"%"}function I(q){return q==null||isNaN(Number(q))?"—":Number(q).toFixed(2)}function W(){S.value="",x.value=null,V.value=!1}async function E(q){const Y=++r;M.value=!0,V.value=!1,x.value=null;try{const Ae=q?"/api/market/review?date="+encodeURIComponent(q):"/api/market/review",mt=await fetch(Ae,{headers:ft()}).then(R=>R.json());if(Y!==r)return;mt&&mt.success?x.value=mt.data:V.value=!0}catch(Ae){console.error("[market-review] 复盘详情加载失败:",Ae),V.value=!0}finally{Y===r&&(M.value=!1)}}function N(q){return q>0?"up":q<0?"down":"flat"}function K(q){return q==null||isNaN(Number(q))?"—":(q>0?"+":"")+Number(q).toFixed(2)+"%"}function A(q){const Y={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(q||{}).map(function(Ae){const mt=Ae[0],R=Ae[1],ne=!R||R==="unavailable"||R==="数据不可达";return{label:Y[mt]||mt,value:ne?"数据不可达":R,unavailable:ne}})}const L=a([]),H=a(!1),$=a(!1),ee=a(""),le=a(""),ae=a(""),D=a({}),s=a(!1),y=a(""),i=a(""),h=a([]),X=a([]),z=a(""),w=a(""),f=a(!0),C=a(!0),u=a("20:00"),O=a("default"),oe=a(!1),J=a(""),T=t(function(){return L.value.find(function(q){return q.id===ae.value})||null});async function U(q,Y){Y=Y||{},Y.headers=Object.assign({},Y.headers||{});const Ae=localStorage.getItem("quant_token")||"";return Ae&&(Y.headers.Authorization="Bearer "+Ae),fetch(q,Y)}async function ie(){const q=++r;H.value=!0,$.value=!1,ee.value="",le.value="";try{const Y=await U("/api/strategies").then(function(mt){return mt.json()});if(q!==r)return;let Ae=null;Array.isArray(Y)?Ae=Y:Y&&Array.isArray(Y.strategies)?(Ae=Y.strategies,Y.warn&&(le.value=String(Y.warn))):($.value=!0,ee.value=Y&&Y.detail?String(Y.detail):"策略列表加载失败（接口返回异常）"),Ae!==null&&(L.value=Ae,L.value.length&&!ae.value&&(ae.value=L.value[0].id,ge()))}catch(Y){console.error("[research] 策略列表加载失败:",Y),$.value=!0,ee.value="策略列表加载失败: "+(Y&&Y.message||"网络错误")}finally{q===r&&(H.value=!1)}}function ge(){const q=T.value;q&&(D.value={},q.schema.forEach(function(Y){D.value[Y.key]=Y.default}),i.value="",ce(),qe(),se())}async function qe(){if(!ae.value){X.value=[];return}try{const q=await U("/api/strategies/"+ae.value+"/profiles").then(function(Y){return Y.json()});X.value=q&&q.data&&q.data.profiles||[],z.value=""}catch(q){console.error("[research] 方案列表加载失败:",q),X.value=[]}}async function Q(){d.value=!0;const q=(w.value||"").trim();if(!q){window._core&&window._core.showToast("请输入方案名称");return}try{const Y=await U("/api/strategies/"+ae.value+"/profiles",{method:"POST",body:JSON.stringify({name:q,params:D.value})}).then(function(Ae){return Ae.json()});if(Y&&Y.detail){window._core&&window._core.showToast(String(Y.detail));return}w.value="",await qe(),window._core&&window._core.showToast("方案已保存")}catch(Y){console.error("[research] 方案保存失败:",Y),window._core&&window._core.showToast("方案保存失败")}}function ue(){const q=X.value.find(function(Y){return Y.id===z.value});q&&(Object.keys(q.params||{}).forEach(function(Y){D.value[Y]=q.params[Y]}),window._core&&window._core.showToast("已应用方案: "+q.name))}async function De(){if(z.value)try{await U("/api/strategies/"+ae.value+"/profiles/"+z.value,{method:"DELETE"}).then(function(q){return q.json()}),await qe(),window._core&&window._core.showToast("方案已删除")}catch(q){console.error("[research] 方案删除失败:",q)}}async function se(){try{const q=await U("/api/strategies/governance").then(function(mt){return mt.json()}),Ae=(q&&q.data&&q.data.strategies||{})[ae.value]||{};f.value=Ae.enabled!==!1,u.value=Ae.schedule||"20:00",O.value=Ae.universe==="all"?"all":"default",C.value=Ae.show_in_calendar!==!1,J.value=Ae.last_holdings||""}catch(q){console.error("[research] 纳管状态加载失败:",q)}}async function be(){try{await U("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const q={};return q[ae.value]={enabled:f.value,schedule:u.value,universe:O.value,show_in_calendar:C.value},q}()})}).then(function(q){return q.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(q){console.error("[research] 纳管更新失败:",q)}}async function Pe(){if(ae.value){oe.value=!0;try{const q=await U("/api/strategies/"+ae.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:y.value||void 0})}).then(function(Y){return Y.json()});if(q&&q.detail){window._core&&window._core.showToast(String(q.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(q){console.error("[research] run-once 失败:",q),window._core&&window._core.showToast("持仓生成失败")}finally{oe.value=!1}}}function me(){J.value&&window.open(J.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function we(){const q=T.value;if(!q)return;const Y=(w.value||"").trim()||q.name+"-副本";xe(Y,Object.assign({},D.value)),window._core&&window._core.showToast("已复制为副本方案: "+Y)}async function xe(q,Y){try{await U("/api/strategies/"+ae.value+"/profiles",{method:"POST",body:JSON.stringify({name:q,params:Y})}).then(function(Ae){return Ae.json()}),await qe()}catch(Ae){console.error("[research] 副本保存失败:",Ae)}}async function ce(){const q=++r;if(ae.value)try{const Y=await U("/api/strategies/"+ae.value+"/runs?limit=5").then(function(Ae){return Ae.json()});if(q!==r)return;h.value=Array.isArray(Y)?Y:[]}catch{h.value=[]}}async function te(){if(ae.value){s.value=!0;try{const q=await U("/api/strategies/"+ae.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:D.value,as_of:y.value||void 0})}).then(function(Y){return Y.json()});q&&q.status==="success"?ce():alert("运行失败: "+(q.detail||JSON.stringify(q)))}catch(q){console.error("[research] 策略运行失败:",q),alert("运行失败: "+q.message)}finally{s.value=!1}}}async function fe(){if(ae.value)try{const q=Object.keys(D.value).map(function(Ae){return encodeURIComponent(Ae)+"="+encodeURIComponent(D.value[Ae])}).join("&"),Y=await U("/api/strategies/"+ae.value+"/ptrade-code?"+q).then(function(Ae){return Ae.json()});Y&&Y.code?i.value=Y.code:alert("导出失败: "+(Y.detail||JSON.stringify(Y)))}catch(q){console.error("[research] PTrade 导出失败:",q),alert("导出失败: "+q.message)}}function Ne(){if(!i.value)return;const q=document.createElement("textarea");q.value=i.value,document.body.appendChild(q),q.select();try{document.execCommand("copy")}catch{}document.body.removeChild(q)}m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(q){q==="research/research-overview"&&(ie(),P(),lt(),sa()),(q==="research/market-review"||q==="shortterm/market-review")&&!S.value&&P(),q==="research/quant-research"&&ie(),q==="research/backtest-history"&&ze()},{immediate:!0});const Be=a("mom20"),We=a(!1),qt=a(!1),gt=a(null),Tt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],Ee=a('{"top_n":[10,20,30]}'),Ve=a(null),Oe=a(""),$e=a(!1),Xe=a(null);async function Ye(){if(!ae.value){ElementPlus.ElMessage.warning("请先选择策略");return}let q;try{q=JSON.parse(Ee.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!q||Object.keys(q).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}$e.value=!0,Ve.value=null,Oe.value="";try{const Y=await fetch("/api/strategies/"+ae.value+"/sweep",{method:"POST",headers:ft(),body:JSON.stringify({param_grid:q})}).then(function(Ae){return Ae.json()});Y&&Array.isArray(Y.results)?(Ve.value=Y.results,Oe.value="完成 "+Y.count+" 组"+(Y.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=Y.param_stability||null):Oe.value=Y&&Y.detail||"扫描失败"}catch(Y){console.error("[sweep]",Y),Oe.value="扫描失败: "+Y.message}finally{$e.value=!1}}async function nt(){const q=++r;We.value=!0;try{const Y=await U("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ae.value||"multi_factor",factor_key:Be.value,params:D.value||{}})}).then(function(mt){return mt.json()}),Ae=Y&&Y.report?Y.report.n1||{}:{};gt.value=Ae}catch(Y){console.error("[research] 因子IC分析失败:",Y),alert("因子 IC 分析失败: "+Y.message)}finally{q===r&&(We.value=!1)}}async function yt(){const q=++r;qt.value=!0;try{const Y=await U("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ae.value||"multi_factor",factor_key:Be.value,params:D.value||{}})}).then(function(Ae){return Ae.json()});Y&&Y.layers?Tt.value=Y:alert("分层回测: "+(Y.message||"无数据"))}catch(Y){console.error("[research] 分层回测失败:",Y),alert("分层回测失败: "+Y.message)}finally{q===r&&(qt.value=!1)}}const Et=a(null),Ft=a(!1);async function aa(){const q=++r;Ft.value=!0,Et.value=null;try{const Y=await U("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ae.value||"multi_factor",factor_key:Be.value,params:D.value||{}})}).then(function(Ae){return Ae.json()});Y&&Y.detail?Et.value=Y.detail:alert("因子详情: "+(Y.message||"无数据"))}catch(Y){console.error("[research] 因子详情失败:",Y),alert("因子详情失败: "+Y.message)}finally{q===r&&(Ft.value=!1)}}const j=a([]),Z=a(null),Ce=a(null),Ie=a(null),Ue=a(""),wt=a(!1),Je=a(!1),Ge=a(""),kt=a(""),rt=a("");function ft(){const q=localStorage.getItem("quant_token")||"";return q?{Authorization:"Bearer "+q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function lt(){const q=++r;try{const Y=await fetch("/api/strategies/variants",{headers:ft()}).then(function(Ae){return Ae.json()});if(q!==r)return;j.value=Y&&Y.data&&Y.data.variants||[]}catch(Y){console.error("[i3a] 加载 variants 失败:",Y)}}async function Ht(){if(!ae.value){Ge.value="请先在量化研究选择母本策略";return}Je.value=!0,Ge.value="";try{const q=await fetch("/api/strategies/"+ae.value+"/clone",{method:"POST",headers:ft(),body:JSON.stringify({name:(w.value||"").trim()||void 0,params:Object.assign({},D.value)})}).then(function(Ae){return Ae.json()});if(q&&q.detail){Ge.value=String(q.detail);return}const Y=q&&q.data;Y&&Y.sid&&(Z.value=Y.sid,Ge.value="已复制为新策略: "+Y.name,await lt(),await G(Y.sid))}catch(q){console.error("[i3a] 复制失败:",q),Ge.value="复制失败: "+q.message}finally{Je.value=!1}}async function _t(q){Z.value=q,Ge.value="",Ue.value="",await G(q)}async function G(q){try{const Y=await fetch("/api/strategies/"+q+"/selection-spec",{headers:ft()}).then(function(Ae){return Ae.json()});Y&&Y.data&&Y.data.spec&&(Ce.value=Object.assign({},Y.data.spec),Ie.value=Y.data.fields,kt.value=(Y.data.spec.industry_scope||[]).join(","),rt.value=(Y.data.spec.market_cap_range||[]).join(","))}catch(Y){console.error("[i3a] 加载 spec 失败:",Y)}}async function ke(){if(k.value=!0,!(!Z.value||!Ce.value))try{Ce.value.industry_scope=kt.value?kt.value.split(/[,，]/).map(function(Y){return Y.trim()}).filter(Boolean):[],Ce.value.market_cap_range=rt.value?rt.value.split(/[,，]/).map(Number).filter(function(Y){return!isNaN(Y)}):[];const q=await fetch("/api/strategies/"+Z.value+"/selection-spec",{method:"PUT",headers:ft(),body:JSON.stringify({spec:Ce.value})}).then(function(Y){return Y.json()});q&&q.data&&q.data.spec&&(Ce.value=q.data.spec,Ge.value="SelectionSpec 已保存")}catch(q){console.error("[i3a] 保存 spec 失败:",q),Ge.value="保存失败"}}async function je(){if(!Z.value){Ge.value="请先选择/创建微调策略";return}Je.value=!0,Ge.value="";try{const q=await fetch("/api/strategies/"+Z.value+"/run-once",{method:"POST",headers:ft(),body:"{}"}).then(function(Y){return Y.json()});Ge.value=q&&q.detail?String(q.detail):"持仓已生成: "+(q&&q.data&&q.data.symbols||0)+" 只"}catch(q){console.error("[i3a] run-once 失败:",q),Ge.value="生成持仓失败"}finally{Je.value=!1}}async function ct(){if(!Z.value){Ge.value="请先选择/创建微调策略";return}Ce.value||await G(Z.value),wt.value=!0,Ge.value="";try{const q=await fetch("/api/strategies/"+Z.value+"/ai-trade-code",{method:"POST",headers:ft(),body:JSON.stringify({spec:Ce.value})}).then(function(Y){return Y.json()});if(q&&q.detail){Ge.value=String(q.detail);return}q&&q.data&&(Ue.value=q.data.code||"",q.data.api_errors&&q.data.api_errors.length?Ge.value="生成成功(含 API 校验告警 "+q.data.api_errors.length+" 条)":Ge.value="AI 交易码已生成, 已通过矩阵内校验")}catch(q){console.error("[i3a] AI 交易码失败:",q),Ge.value="AI 生成失败: "+q.message}finally{wt.value=!1}}function zt(){if(Ue.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ue.value).then(function(){Ge.value="代码已复制"});else{const q=document.createElement("textarea");q.value=Ue.value,document.body.appendChild(q),q.select(),document.execCommand("copy"),document.body.removeChild(q),Ge.value="代码已复制"}}const Pt=a(""),vt=a(""),Dt=a([]),Kt=a(""),Jt=a(""),xt=a(""),pt=a(null),Zt=a(!1),Rt=a(!1),ra=a(!1);function Qt(){const q=localStorage.getItem("quant_token")||"";return q?{Authorization:"Bearer "+q,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function sa(){const q=++r;try{const Y=await fetch("/api/strategies/custom",{headers:Qt()}).then(function(Ae){return Ae.json()});if(q!==r)return;Dt.value=Y&&Y.data&&Y.data.customs||[]}catch(Y){console.error("[i3b] 加载自定义策略失败:",Y)}}async function dt(){if(!vt.value.trim()){xt.value="请描述策略思路";return}Zt.value=!0,xt.value="";try{const q=await fetch("/api/strategies/custom",{method:"POST",headers:Qt(),body:JSON.stringify({name:Pt.value.trim()||"自定义策略",prompt:vt.value})}).then(function(Y){return Y.json()});if(q&&q.detail){xt.value=String(q.detail);return}q&&q.data&&(Jt.value=q.data.code||"",xt.value="AI 代写成功: "+q.data.sid+(q.data.api_errors&&q.data.api_errors.length?" (API 告警 "+q.data.api_errors.length+" 条)":" (校验通过)"),await sa())}catch(q){console.error("[i3b] AI 代写失败:",q),xt.value="AI 代写失败: "+q.message}finally{Zt.value=!1}}async function $t(){if(Kt.value)try{const q=await fetch("/api/strategies/custom/"+Kt.value+"/code",{headers:Qt()}).then(function(Y){return Y.json()});q&&q.data&&(Jt.value=q.data.code||"",xt.value="")}catch(q){console.error("[i3b] 读取代码失败:",q)}}async function ca(){if(!Kt.value){xt.value="请先选择自定义策略";return}Rt.value=!0,xt.value="";try{const q=await fetch("/api/strategies/custom/"+Kt.value+"/backtest",{method:"POST",headers:Qt(),body:"{}"}).then(function(Y){return Y.json()});if(q&&q.detail){xt.value=String(q.detail);return}q&&q.data&&(pt.value=q.data,xt.value="回测完成")}catch(q){console.error("[i3b] 回测失败:",q),xt.value="回测失败: "+q.message}finally{Rt.value=!1}}async function ya(){if(!Kt.value){xt.value="请先选择自定义策略";return}ra.value=!0,xt.value="";try{const q=await fetch("/api/strategies/custom/"+Kt.value+"/ai-optimize",{method:"POST",headers:Qt(),body:JSON.stringify({backtest:pt.value})}).then(function(Y){return Y.json()});if(q&&q.detail){xt.value=String(q.detail);return}q&&q.data&&(Jt.value=q.data.code||"",xt.value="AI 优化完成"+(q.data.api_errors&&q.data.api_errors.length?" (API 告警 "+q.data.api_errors.length+" 条)":" (校验通过)"))}catch(q){console.error("[i3b] AI 优化失败:",q),xt.value="AI 优化失败: "+q.message}finally{ra.value=!1}}function _a(){if(Jt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Jt.value).then(function(){xt.value="代码已复制"});else{const q=document.createElement("textarea");q.value=Jt.value,document.body.appendChild(q),q.select(),document.execCommand("copy"),document.body.removeChild(q),xt.value="代码已复制"}}const na=Vue.ref([]),B=Vue.ref(!1),_e=Vue.ref(!1),He=Vue.ref(30);async function ze(){const q=++r;B.value=!0,_e.value=!1;try{const Y=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Y.authHeaders=="function"?Y.authHeaders():{},mt=await fetch("/api/backtest/history?days="+He.value,{headers:Ae}).then(function(R){return R.json()});if(q!==r)return;na.value=mt&&mt.data||[]}catch(Y){console.error("[backtest] 回测历史加载失败:",Y),_e.value=!0}finally{q===r&&(B.value=!1)}}const ut=Vue.ref([]),et=Vue.ref(!1),It=Vue.ref(!1),Wt=Vue.ref(""),Ut=Vue.ref([]),xa=Vue.ref(""),ba=Vue.ref([]),da=Vue.ref(!1),la=Vue.ref(!1),Aa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ua(q){return Aa[q]||q||"—"}function La(q){c&&c.navigateTo&&c.navigateTo("shortterm",q)}function va(){c.currentSubPage.value="research-history",Ta()}async function Ta(){const q=++r;et.value=!0,It.value=!1;try{const Y=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Y.authHeaders=="function"?Y.authHeaders():{},mt=Wt.value?"?type="+encodeURIComponent(Wt.value):"",R=await fetch("/api/strategies/research-history"+mt,{headers:Ae}).then(function(ne){return ne.json()});if(q!==r)return;ut.value=R&&R.items||[]}catch(Y){console.error("[research-history] 加载失败:",Y),It.value=!0}finally{q===r&&(et.value=!1)}}async function wa(){const q=++r;la.value=!0;try{const Y=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Y.authHeaders=="function"?Y.authHeaders():{},mt=Wt.value?"?type="+encodeURIComponent(Wt.value):"",R=await fetch("/api/strategies/research-history/export"+mt,{headers:Ae});if(!R.ok)throw new Error("HTTP "+R.status);const ne=await R.blob(),de=URL.createObjectURL(ne),Me=document.createElement("a");Me.href=de,Me.download="research_history.csv",document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(de)}catch(Y){console.error("[research-history] 导出失败:",Y)}finally{q===r&&(la.value=!1)}}function Ia(q){const Y=Ut.value.indexOf(q);Y>=0?Ut.value.splice(Y,1):Ut.value.length<10&&Ut.value.push(q)}function Na(q){xa.value=xa.value===q?"":q}async function Gt(){const q=++r,Y=Ut.value;if(!(Y.length<2)){da.value=!0;try{const Ae=window.__quantModules&&window.__quantModules.core||{},mt=typeof Ae.authHeaders=="function"?Ae.authHeaders():{},R=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},mt),body:JSON.stringify({ids:Y})}).then(function(ne){return ne.json()});ba.value=R&&R.items||[]}catch(Ae){console.error("[research-history] 对比失败:",Ae)}finally{q===r&&(da.value=!1)}}}async function ma(q){try{const Y=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Y.authHeaders=="function"?Y.authHeaders():{},mt=await fetch("/api/strategies/research-history/"+q,{method:"DELETE",headers:Ae}).then(function(R){return R.json()});if(mt&&mt.deleted){ut.value=ut.value.filter(function(ne){return ne.id!==q});const R=Ut.value.indexOf(q);R>=0&&Ut.value.splice(R,1)}}catch(Y){console.error("[research-history] 删除失败:",Y)}}return{...c,strategyManageMode:n,openStrategyManage:p,btHistory:na,btHistoryLoading:B,btHistoryError:_e,btHistoryDays:He,loadBtHistory:ze,researchHistory:ut,researchHistoryLoading:et,researchHistoryError:It,researchHistoryType:Wt,researchHistorySelected:Ut,researchDetailId:xa,researchCompareRows:ba,researchCompareLoading:da,researchTypeLabel:ua,goShortterm:La,openResearchHistory:va,loadResearchHistory:Ta,researchExportLoading:la,exportResearchHistory:wa,toggleResearchSelect:Ia,toggleResearchDetail:Na,runResearchCompare:Gt,deleteResearchHistory:ma,marketReviews:o,marketReviewLoading:_,marketReviewError:b,selectedReviewDate:S,marketReviewDetail:x,marketReviewDetailLoading:M,marketReviewDetailError:V,loadMarketReviews:P,openMarketReview:v,toggleMarketReviewDate:l,backToMarketReviewList:W,loadMarketReviewDetail:E,marketReviewChgClass:N,marketReviewChgText:K,marketReviewSrcEntries:A,fmtPct:g,fmtEmotion:I,strategies:L,strategiesLoading:H,strategiesError:$,strategiesErrorText:ee,strategiesWarn:le,activeStrategyId:ae,activeStrategy:T,paramValues:D,strategyRunning:s,ptradeCode:i,strategyRuns:h,savingProfile:d,variantSaving:k,loadStrategies:ie,onStrategyChange:ge,runActiveStrategy:te,exportActivePtradeCode:fe,copyPtradeCode:Ne,profiles:X,profileSelect:z,profileName:w,loadProfiles:qe,saveProfile:Q,applyProfile:ue,deleteProfile:De,govEnabled:f,govSchedule:u,govUniverse:O,govRunning:oe,lastHoldings:J,loadGov:se,updateGov:be,runOnceActive:Pe,openLastHoldings:me,cloneStrategy:we,govShowCalendar:C,factorKey:Be,factorIcLoading:We,factorLayerLoading:qt,factorIcReport:gt,factorLayerResult:Tt,factorOptions:Se,runFactorIc:nt,runFactorLayer:yt,factorDetail:Et,factorDetailLoading:Ft,runFactorDetail:aa,variants:j,variantSelected:Z,variantSpec:Ce,specFields:Ie,aiCode:Ue,aiCodeLoading:wt,variantBusy:Je,variantMsg:Ge,loadVariants:lt,cloneNewStrategy:Ht,selectVariant:_t,loadVariantSpec:G,saveVariantSpec:ke,runVariantOnce:je,genVariantAiCode:ct,copyVariantCode:zt,customName:Pt,customPrompt:vt,customs:Dt,customSelected:Kt,customCode:Jt,customMsg:xt,customBtResult:pt,customGenLoading:Zt,customBtLoading:Rt,customOptLoading:ra,loadCustoms:sa,genCustomCode:dt,loadCustomCode:$t,runCustomBacktest:ca,runCustomOptimize:ya,copyCustomCode:_a,sweepGrid:Ee,sweepResult:Ve,sweepMessage:Oe,sweepLoading:$e,sweepStability:Xe,runSweep:Ye}}}})();(function(){const{inject:a,ref:t,onMounted:m,computed:e,nextTick:c}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const d=a("qcState");if(!d)return{};const k=d.currentPage,r=d.currentSubPage,n=t(""),p=t(null),o=t(!1),_=t(!1),b=t("数据加载失败"),S=t("请检查服务后重试"),x=t(null),M=t(null),V=t(!1),P=t(!1),v=t("数据加载失败"),l=t("请检查服务后重试"),g=t(null),I=t(1),W=50,E=e(function(){const B=M.value||[];if(B.length<=200)return B;const _e=(I.value-1)*W;return B.slice(_e,_e+W)}),N=t(null),K=t(!1),A=t(!1),L=t("数据加载失败"),H=t("请检查服务后重试"),$=t([]),ee=t(!1);async function le(){ee.value=!0;try{const B=await we("/api/shortterm/dates/summary",!1);B&&B.success&&($.value=B.dates||[])}catch{$.value=[]}finally{ee.value=!1}}function ae(B){B!==n.value&&(n.value=B,G(!0))}const D=t("行业资金流"),s=t("今日"),y=t(""),i=t(null),h=t(1),X=t(!1),z=t(!1),w=t("数据加载失败"),f=t("请检查服务后重试"),C=t(""),u=t(null),O=t(!1),oe=t(null),J=t(!1),T=t(!1),U=t(""),ie=t(""),ge=t(!1);function qe(){const B=localStorage.getItem("quant_token")||"";return B?{Authorization:"Bearer "+B,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Q={},ue=[],De=50,se=60*1e3;let be=0,Pe=0,me=0;function we(B,_e){const He=Date.now(),ze=Q[B];return!_e&&ze&&He-ze.ts<se?Promise.resolve(ze.data):fetch(B,{headers:qe()}).then(function(ut){return ut.json()}).then(function(ut){if(Q[B]||ue.push(B),Q[B]={ts:Date.now(),data:ut},ue.length>De){const et=ue.shift();delete Q[et]}return ut})}async function xe(B){const _e=++be;o.value=!0,_.value=!1;try{const He="/api/shortterm/pools"+(n.value?"?date="+n.value:""),ze=await we(He,B);if(_e!==be)return;ze&&ze.success?(p.value=ze,c(lt)):ze&&ze.detail?(_.value=!0,b.value=String(ze.detail),S.value="请先登录后再查看"):(_.value=!0,b.value="数据加载失败",S.value="请检查服务后重试")}catch{if(_e!==be)return;_.value=!0,b.value="数据加载失败",S.value="请检查服务后重试"}finally{_e===be&&(o.value=!1)}}async function ce(B){const _e=++be;V.value=!0,P.value=!1;try{const He="/api/shortterm/lhb"+(n.value?"?date="+n.value:""),ze=await we(He,B);if(_e!==be)return;ze&&ze.success?(M.value=Array.isArray(ze.rows)?ze.rows:null,g.value=ze.available===!1&&ze.reason||null,I.value=1):ze&&ze.detail?(P.value=!0,v.value=String(ze.detail),l.value="请先登录后再查看"):(P.value=!0,v.value="数据加载失败",l.value="请检查服务后重试")}catch{if(_e!==be)return;P.value=!0,v.value="数据加载失败",l.value="请检查服务后重试"}finally{_e===be&&(V.value=!1)}}const te=e(function(){const B=p.value&&p.value.ladder&&p.value.ladder.tiers;return!B||!Object.keys(B).length?"—":Object.keys(B).sort(function(_e,He){return _e-He}).map(function(_e){return _e+"板:"+B[_e]}).join(" ")}),fe=e(function(){const B=p.value&&p.value.zt||[];return x.value?B.filter(function(_e){return _e.boards===x.value}):B});function Ne(){x.value=null}const Be=e(function(){const B=N.value&&N.value.emotion&&N.value.emotion.money_effect;return!B||!B.available?"—":B.source==="settled"?"定稿记录":B.source==="realtime"?B.partial?"实时(样本不全)":"实时":"—"}),We=e(function(){const B=N.value&&N.value.emotion&&N.value.emotion.promotion&&N.value.emotion.promotion.tiers&&N.value.emotion.promotion.tiers["1进2"];return B?B.rate:null}),qt=e(function(){const B=N.value&&N.value.emotion&&N.value.emotion.sentiment_cycle;return B&&B.available&&B.current_score!=null?B.current_score.toFixed(2):"—"}),gt=e(function(){const B=N.value&&N.value.emotion&&N.value.emotion.sentiment_cycle;return!B||!B.available?"—":(B.trend||"—")+(B.day_n!=null?" · 距低谷"+B.day_n+"天":"")});e(function(){const B=N.value&&N.value.emotion;if(!B)return"";const _e=[];for(const He of["money_effect","promotion","consec_premium","sentiment_cycle"]){const ze=B[He];ze&&ze.available===!1&&ze.reason&&_e.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")}),e(function(){const B=N.value&&N.value.facts;if(!B)return"";const _e=[];for(const He of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const ze=B[He];ze&&ze.available===!1&&ze.reason&&_e.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")});function Tt(B){return B==null||isNaN(B)?"—":(B*100).toFixed(0)+"%"}function Se(B,_e){return B==null?"—":(typeof B=="number"?Math.round(B*100)/100:B)+(_e||"")}function Ee(B){return"tag-chip mr-4"}function Ve(B){return B==null?"":B>0?"is-rise":B<0?"is-fall":""}function Oe(B){return B==="机构"?"is-institution":B==="游资"?"is-hotmoney":B==="主力"?"is-main":""}const $e=e(function(){const B=N.value&&N.value.session_status;if(!B)return"—";const _e=N.value.date;return _e===B.latest_session&&B.settled?"已收盘":_e===B.today&&B.is_trade_day&&!B.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=e(function(){const B=N.value&&N.value.session_status;if(!B)return"";const _e=N.value.date;return _e===B.latest_session&&B.settled?"is-institution":_e===B.today&&B.is_trade_day&&!B.settled?"is-main":""});function Ye(B){B&&B.ts_code&&d&&d.showStockDetail&&d.showStockDetail(B.ts_code)}const nt=e(function(){return(M.value||[]).filter(function(B){return(B.tags||[]).indexOf("机构")>=0}).reduce(function(B,_e){return B+(_e.net_buy||0)},0)}),yt=e(function(){return(M.value||[]).filter(function(B){return(B.tags||[]).indexOf("游资")>=0}).length}),Et=e(function(){const B=(i.value||[]).filter(function(_e){return _e.main_net_inflow!=null});return B.length?B.reduce(function(_e,He){return _e.main_net_inflow>=He.main_net_inflow?_e:He}):null}),Ft=e(function(){const B=Et.value;return B?B.name:"—"}),aa=e(function(){const B=Et.value;return B?B.main_net_inflow:null}),j=e(function(){return C.value||"东财"}),Z=e(function(){const B=(y.value||"").trim(),_e=i.value||[];return B?_e.filter(function(He){return He.name&&String(He.name).indexOf(B)>=0}):_e});function Ce(B){y.value=B||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Ie=e(function(){const B=Z.value;if(B.length<=200)return B;const _e=(h.value-1)*W;return B.slice(_e,_e+W)}),Ue=["09:25","09:35","10:00","11:30","14:00","15:00"],wt=e(function(){const B={};return(oe.value||[]).forEach(function(_e){B[_e.slot]=!0}),B});function Je(B){return wt.value[B]?"is-done":B===Ge.value?"is-current":"is-empty"}const Ge=e(function(){const B=new Date,_e=(B.getHours()<10?"0":"")+B.getHours(),He=(B.getMinutes()<10?"0":"")+B.getMinutes(),ze=_e+":"+He;for(var ut=0;ut<Ue.length;ut++)if(ze===Ue[ut])return Ue[ut];for(var et=0;et<Ue.length-1;et++){var It=Ue[et],Wt=new Date;Wt.setHours(Number(It.split(":")[0]),Number(It.split(":")[1]),0,0);var Ut=new Date(Wt.getTime()+8*6e4);if(B>=Wt&&B<=Ut)return It}return""}),kt=e(function(){const B=new Date,_e=Ge.value;if(_e)return"当前处于快照窗口 "+_e+" (前后 8 分钟) — 可采集";const He=B.getHours(),ze=B.getMinutes();let ut="";for(let et=0;et<Ue.length;et++){const It=Ue[et].split(":");if(Number(It[0])>He||Number(It[0])===He&&Number(It[1])>ze){ut=Ue[et];break}}return ut?"下一快照时点 "+ut+" — 非窗口期不可采集":"今日快照时点已全部结束"}),rt=t(""),ft=t("info");function lt(){const B=p.value&&p.value.ladder&&p.value.ladder.tiers;if(!B||!Object.keys(B).length)return;const _e=window.__quantModules&&window.__quantModules.charts;if(!_e||!_e.renderSimpleChartTo)return;const He=x.value,ze=_e.renderSimpleChartTo("shorttermLadderChart",function(){const ut=Object.keys(B).sort(function(et,It){return Number(et)-Number(It)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ut.map(function(et){return et+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(et){return He&&Number(ut[et.dataIndex])===He?"var(--color-accent)":"var(--chart-split)"}},data:ut.map(function(et){return B[et]})}]}},{key:"shortterm-ladder"});ze&&ze.off&&(ze.off("click"),ze.on("click",function(ut){if(!ut||!ut.name)return;const et=parseInt(ut.name,10);isNaN(et)||(x.value=x.value===et?null:et)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(lt);function Ht(B){if(B==null)return"—";const _e=Math.abs(B);return _e>=1e8?(B/1e8).toFixed(2)+"亿":_e>=1e4?(B/1e4).toFixed(0)+"万":B.toFixed(0)}function _t(B){return B==null?"—":(B>=0?"+":"")+B.toFixed(2)+"%"}async function G(B){const _e=++Pe;K.value=!0,A.value=!1;try{const He="/api/shortterm/overview"+(n.value?"?date="+n.value:""),ze=await we(He,B);if(_e!==Pe)return;ze&&ze.success?N.value=ze:ze&&ze.detail?(A.value=!0,L.value=String(ze.detail),H.value="请先登录后再查看"):(A.value=!0,L.value="数据加载失败",H.value="请检查服务后重试")}catch{if(_e!==Pe)return;A.value=!0,L.value="数据加载失败",H.value="请检查服务后重试"}finally{_e===Pe&&(K.value=!1)}}async function ke(B){const _e=++be;X.value=!0,z.value=!1;try{const He="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(D.value),ze=await we(He,B);if(_e!==be)return;ze&&ze.success&&ze.available?(i.value=ze.rows||[],C.value=ze.source||(ze.note?"同花顺":"东财"),h.value=1):ze&&ze.reason?(z.value=!0,w.value="数据加载失败",f.value=String(ze.reason).replace(/^\[[^\]]*\]\s*/,"")):ze&&ze.detail?(z.value=!0,w.value=String(ze.detail),f.value="请先登录后再查看"):(z.value=!0,w.value="数据加载失败",f.value="请检查服务后重试")}catch{if(_e!==be)return;z.value=!0,w.value="数据加载失败",f.value="请检查服务后重试"}finally{_e===be&&(X.value=!1)}}async function je(B){const _e=++me;try{const He="/api/shortterm/review"+(n.value?"?date="+n.value:""),ze=await we(He,B);if(_e!==me)return;ze&&ze.success&&(u.value=ze.review||null)}catch{}}async function ct(){O.value=!0;try{const B="/api/shortterm/review"+(n.value?"?date="+n.value:""),_e=await fetch(B,{method:"POST",headers:qe()}).then(function(He){return He.json()});_e&&_e.success&&(u.value=_e,Q[B]={ts:Date.now(),data:_e})}catch{}finally{O.value=!1}}async function zt(){const B=U.value.trim();if(B){ge.value=!0,ie.value="";try{const He=await fetch("/api/shortterm/review/chat",{method:"POST",headers:qe(),body:JSON.stringify({date:overviewDate.value,question:B})}).then(function(ze){return ze.json()});ie.value=He.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{ge.value=!1}}}async function Pt(B){const _e=++be;J.value=!0;try{const He="/api/shortterm/intraday"+(n.value?"?date="+n.value:""),ze=await we(He,B);if(_e!==be)return;ze&&ze.success&&(oe.value=ze.snapshots||[])}catch{}finally{_e===be&&(J.value=!1)}}async function vt(){T.value=!0;try{const B="/api/shortterm/intraday/snapshot"+(n.value?"?date="+n.value:""),_e=await fetch(B,{method:"POST",headers:qe()}).then(function(He){return He.json()});_e&&_e.success?(_e.accepted?(rt.value="已采集 "+_e.slot+" 快照"+(_e.pools_available&&!_e.pools_available.zt?" (池源部分不可用)":""),ft.value="ok"):(rt.value="⏱ "+(_e.reason||"非快照时点"),ft.value="warn"),Pt()):rt.value="采集失败, 请稍后重试"}catch{rt.value="采集失败, 请稍后重试"}finally{T.value=!1}}function Dt(){return we("/api/shortterm/latest-session",!1).then(function(B){B&&B.date&&(n.value||(n.value=B.date))}).catch(function(){})}function Kt(){const B=r.value;B==="ztpool"?xe():B==="lhb"?ce():B==="overview"?(G(),je()):B==="sector"?ke():B==="intraday"&&Pt()}function Jt(){const B=n.value?"?date="+n.value:"";["/api/shortterm/overview"+B,"/api/shortterm/pools"+B,"/api/shortterm/lhb"+B].forEach(function(He){we(He,!1).catch(function(){})})}function xt(){const B=r.value;B==="ztpool"?xe(!0):B==="lhb"?ce(!0):B==="overview"?(G(!0),je(!0)):B==="sector"?ke(!0):B==="intraday"&&Pt(!0)}m(function(){Dt(),Kt(),Jt(),ca(),le()}),Vue.watch(function(){return r.value},function(B){Kt(),B==="overview"&&ca()});const pt=window.QuantOnboarding,Zt=t(!1),Rt=t(pt?pt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ra=e(function(){return pt&&pt.shorttermTourSteps()[Rt.value.stepIndex]||{key:"",title:"",desc:""}}),Qt=e(function(){return pt?pt.shorttermTourProgress(Rt.value):{done:0,total:3,pct:0}}),sa=e(function(){return Rt.value.stepIndex>=2});function dt(){if(pt){var B=null;try{B=localStorage.getItem("qc_shortterm_tour")}catch{}if(B){var _e=pt.parseState(B);_e&&(Rt.value=_e)}}}function $t(){if(pt){var B=JSON.stringify(Rt.value);try{localStorage.setItem("qc_shortterm_tour",B)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:B}})}).catch(function(){})}catch{}}}function ca(){window.__quantGuideModalsEnabled===!0&&pt&&r.value==="overview"&&(dt(),pt.shorttermTourShouldShow(Rt.value)&&(Zt.value=!0))}function ya(){Rt.value=pt.shorttermTourNext(Rt.value),$t()}function _a(){Rt.value=pt.shorttermTourComplete(Rt.value),$t(),Zt.value=!1}function na(){Rt.value=pt.shorttermTourDismiss(Rt.value),$t(),Zt.value=!1}return{currentPage:k,currentSubPage:r,shortDate:n,pools:p,poolLoading:o,poolError:_,ztBoardFilter:x,filteredZt:fe,clearBoardFilter:Ne,lhbRows:M,lhbLoading:V,lhbError:P,lhbReason:g,lhbPageRows:E,lhbPage:I,overview:N,overviewLoading:K,overviewError:A,dateList:$,dateListLoading:ee,loadDateList:le,pickDate:ae,sectorType:D,sectorIndicator:s,sectorKeyword:y,sectorRows:i,filteredSectorRows:Z,sectorPageRows:Ie,sectorPage:h,sectorLoading:X,sectorError:z,sectorFlowSource:C,PAGE_SIZE:W,gotoSector:Ce,review:u,reviewRunning:O,intradaySnapshots:oe,intradayLoading:J,intradayCollecting:T,intradaySlots:Ue,intradayMsg:rt,slotClass:Je,intradayStatus:kt,chatQuestion:U,chatAnswer:ie,chatLoading:ge,loadPools:xe,loadLhb:ce,loadOverview:G,loadSectorFlow:ke,loadReview:je,runReview:ct,sendChat:zt,loadIntraday:Pt,collectSnapshot:vt,refreshCurrent:xt,ladderText:te,fmtAmount:Ht,fmtPct:_t,riseFall:Ve,tagClass:Oe,openStock:Ye,lhbInstitutionNetBuy:nt,lhbHotMoneyCount:yt,sectorTopName:Ft,sectorTopInflow:aa,sectorSource:j,moneySource:Be,promotion1to2:We,cycleScore:qt,cycleTrend:gt,pct:Tt,fmtCond:Se,verdictClass:Ee,sessionStatusText:$e,sessionStatusClass:Xe,shorttermTourVisible:Zt,shorttermTourState:Rt,shorttermTourStep:ra,shorttermTourProg:Qt,shorttermTourIsLast:sa,shorttermTourNext:ya,shorttermTourFinish:_a,shorttermTourSkip:na}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(r,n,p,o,_){var b=p>0?p:1,S=typeof _=="number"&&_>=0?_:a,x=Math.max(0,o),M=Math.max(0,r),V=Math.max(0,n),P=Math.max(0,Math.floor(M/b)-S),v=Math.min(x,Math.ceil((M+V)/b)+S);return{startIndex:P,endIndex:v}}function m(r,n){return Math.max(0,r||0)*(n>0?n:0)}function e(r,n,p,o,_){var b=r||[],S=t(n,p,o,b.length,_),x=b.slice(S.startIndex,S.endIndex);return{visible:x,startIndex:S.startIndex,endIndex:S.endIndex,offsetY:S.startIndex*(o>0?o:1),totalHeight:m(b.length,o)}}function c(r,n){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return n}function d(r,n,p){var o=r||[];if(!o.length)return n>0?n:1;for(var _=Math.min(p||50,o.length),b=0,S=0,x=0;x<_;x++){var M=o[x]&&o[x].rowHeight;typeof M=="number"&&M>0&&(b+=M,S++)}return S?b/S:n>0?n:1}function k(r,n,p,o,_){var b=t(r,n,p,o,_),S=Math.max(0,o);return S?(b.endIndex-b.startIndex)/S:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:m,sliceVisible:e,getRowKey:c,estimateDynamicRowHeight:d,renderedRatio:k}});(function(){const{ref:a,computed:t,onMounted:m,onBeforeUnmount:e}=Vue,c=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:c.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const k=a(null),r=a(0),n=a(400),p=t(()=>(c.computeVisibleRange||function(l,g,I,W,E){const N=I>0?I:1,K=E>=0?E:8,A=Math.max(0,W);return{startIndex:Math.max(0,Math.floor(l/N)-K),endIndex:Math.min(A,Math.ceil((l+g)/N)+K)}})(r.value,n.value,d.rowHeight,d.items.length,d.buffer)),o=t(()=>d.items.length*d.rowHeight),_=t(()=>p.value.startIndex),b=t(()=>p.value.endIndex),S=t(()=>d.items.slice(_.value,b.value));function x(){k.value&&(r.value=k.value.scrollTop)}function M(){k.value&&(n.value=k.value.clientHeight||400)}function V(v,l){return c.getRowKey?c.getRowKey(v,l):v&&v.code!=null?v.code:v&&v.id!=null?v.id:l}let P=null;return m(()=>{M(),k.value&&typeof ResizeObserver<"u"&&(P=new ResizeObserver(()=>M()),P.observe(k.value))}),e(()=>{P&&P.disconnect()}),{scrollEl:k,totalHeight:o,startIndex:_,endIndex:b,visibleItems:S,onScroll:x,keyOf:V}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,m=60,e=500,c=10,d=88,k=350;function r(l,g,I,W,E){E=E||{};var N=typeof E.threshold=="number"?E.threshold:a,K=typeof E.bias=="number"?E.bias:t,A=I-l,L=W-g;return Math.abs(A)<N||Math.abs(A)<Math.abs(L)*K?"none":A<0?"left":"right"}function n(l,g,I){I=I||{};var W=typeof I.threshold=="number"?I.threshold:m;return g-l>=W}function p(l,g){g=g||{};var I=typeof g.threshold=="number"?g.threshold:e;return l>=I}var o=!1;function _(l,g){return l&&typeof l.closest=="function"?l.closest(g):null}function b(l){if(!l)return"";var g=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(g){var I=g.getAttribute&&g.getAttribute("data-copy-code");if(I)return I.trim();var W=(g.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(W)return W[0]}var E=l.getAttribute&&l.getAttribute("data-copy-code");return E?E.trim():""}function S(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return x(l)}):Promise.resolve(x(l))}function x(l){try{var g=document.createElement("textarea");return g.value=l,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),!0}catch{return!1}}function M(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function V(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function P(){var l=null,g=null,I=null;function W(){g&&(g.timer&&clearTimeout(g.timer),g=null)}function E(ee){I={el:ee,until:Date.now()+k}}function N(ee){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(le){le!==ee&&le.classList.remove("swipe-open")}),l&&l.el!==ee&&(l=null)}function K(ee){var le=ee.touches&&ee.touches[0];if(le){var ae=_(ee.target,".swipe-reveal");ae&&(l={el:ae,x:le.clientX,y:le.clientY,moved:!1},ee.stopPropagation());var D=_(ee.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");D&&(W(),g={el:D,x:le.clientX,y:le.clientY,timer:setTimeout(function(){var s=b(D);g=null,s&&(E(D),S(s).then(function(){V(),M("已复制代码 "+s)}))},e)})}}function A(ee){if(l){var le=ee.touches&&ee.touches[0];if(le){var ae=le.clientX-l.x,D=le.clientY-l.y;if(Math.abs(ae)>8&&Math.abs(ae)>Math.abs(D)*1.2){ee.cancelable&&ee.preventDefault(),l.moved=!0;var s=l.el.querySelector(".swipe-reveal-main")||l.el,y=Math.max(-d,Math.min(0,ae));s.style.transition="none",s.style.transform="translateX("+y+"px)",ee.stopPropagation()}if(g){var i=le.clientX-g.x,h=le.clientY-g.y;(Math.abs(i)>c||Math.abs(h)>c)&&W()}}}}function L(ee){if(W(),!!l){var le=l.el,ae=ee.changedTouches&&ee.changedTouches[0],D=l.x,s=l.y,y="none";ae&&(y=r(D,s,ae.clientX,ae.clientY));var i=l.moved;l=null;var h=le.querySelector(".swipe-reveal-main")||le;h.style.transform="",h.style.transition="",y==="left"?(N(le),le.classList.add("swipe-open"),E(le)):(y==="right"||i)&&le.classList.remove("swipe-open"),ee.stopPropagation()}}function H(){W(),l=null}function $(ee){if(I&&Date.now()<I.until){var le=I.el.contains(ee.target)||ee.target===I.el,ae=ee.target.closest&&ee.target.closest(".swipe-reveal-actions");le&&!ae&&(ee.preventDefault(),ee.stopPropagation(),I=null)}}document.addEventListener("touchstart",K,!0),document.addEventListener("touchmove",A,!0),document.addEventListener("touchend",L,!0),document.addEventListener("touchcancel",H,!0),document.addEventListener("click",$,!0)}function v(){o||typeof document>"u"||(o=!0,P())}return{judgeSwipe:r,judgePullToRefresh:n,judgeLongPress:p,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:m,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:c,REVEAL_WIDTH:d,initGestures:v,_codeFromRow:b}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function m(d){return a[d]||a.empty}function e(){const d=[];for(const k of t){const r=a[k];r.title||d.push(k+".title"),k!=="loading"&&!r.icon&&d.push(k+".icon"),typeof r.retry!="boolean"&&d.push(k+".retry"),typeof r.skeleton!="boolean"&&d.push(k+".skeleton")}return{ok:d.length===0,errors:d}}const c={VARIANTS:a,KEYS:t,resolve:m,validate:e};typeof window<"u"&&(window.QuantStatePanel=c),typeof Te<"u"&&Te.exports&&(Te.exports=c)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(m){const e=a(()=>typeof t.resolve=="function"?t.resolve(m.type):{}),c=a(()=>m.icon||e.value.icon||""),d=a(()=>m.title||e.value.title||""),k=a(()=>m.desc||e.value.desc||""),r=a(()=>!!e.value.retry),n=a(()=>/^[a-z][a-z0-9-]*$/.test(String(c.value||"")));return{icon:c,title:d,desc:k,retryable:r,isIconName:n}}}})();(function(a,t){typeof Te=="object"&&Te.exports?Te.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function t(l,g){if(!l)return!0;const I=l.split(/\s+/).filter(Boolean);if(!I.length)return!0;const W=String(g||"").toLowerCase();return I.every(function(E){return W.indexOf(E)!==-1})}function m(){return{visible:!1,query:"",activeIndex:0}}function e(l,g){return g===void 0&&(g=!l.visible),l.visible=g,g&&(l.query="",l.activeIndex=0),l.visible}function c(l,g,I){const W=a(l);if(!g||!g.length)return[];const E=[];return g.forEach(function(N){const K=t(W,N.name)||t(W,N.key),A=(N.subPages||[]).filter(function(L){const H=I&&I[L]||L;return t(W,H)||t(W,L)});K&&E.push({type:"menu",menuKey:N.key,subPage:N.subPages&&N.subPages[0]||"",label:N.name,subLabel:"页面",icon:N.icon||"file-text"}),A.forEach(function(L){E.push({type:"menu",menuKey:N.key,subPage:L,label:I&&I[L]||L,subLabel:N.name,icon:N.icon||"file-text"})})}),E.slice(0,8)}function d(l,g){const I=a(l);return!g||!g.length?[]:g.filter(function(W){return!!(!I||t(I,W.label)||t(I,W.key)||W.keywords&&t(I,W.keywords))}).slice(0,8)}function k(l,g){const I=a(l);return!I||!g||!g.length?[]:g.filter(function(W){return t(I,W.code)||t(I,W.name)}).slice(0,8).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}})}function r(l,g,I){const W=[],E=[];return I&&I.length&&(W.push({key:"stock",label:"股票",items:I}),E.push.apply(E,I)),l&&l.length&&(W.push({key:"menu",label:"菜单",items:l}),E.push.apply(E,l)),g&&g.length&&(W.push({key:"command",label:"指令",items:g}),E.push.apply(E,g)),{groups:W,flat:E}}function n(l,g,I){if(g<=0)return 0;const W=((l||0)+I)%g;return W<0?g-1:W}function p(l,g,I,W){const E=c(l,g,I).map(function(K){return{type:"menu",menuKey:K.menuKey,subPage:K.subPage,label:K.label,subLabel:K.subLabel,icon:K.icon,iconName:K.icon,value:K.icon+" "+K.label+" · "+K.subLabel}}),N=d(l,W||[]).map(function(K){return{type:"command",key:K.key,label:K.label,icon:K.icon,iconName:K.icon,subLabel:"指令",value:K.icon+" "+K.label}});return E.concat(N)}function o(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const _=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-glossary",label:"打开术语表",icon:"help-circle",keywords:"glossary 术语 词条 解释"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var b={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function S(l){if(!l||typeof l!="string")return null;var g=l.split("+").map(function(E){return E.trim()}).filter(Boolean);if(!g.length)return null;var I=g.pop().toLowerCase();if(!I)return null;var W={ctrl:!1,alt:!1,shift:!1,meta:!1};return g.forEach(function(E){var N=E.toLowerCase();b.ctrl.indexOf(N)!==-1?W.ctrl=!0:b.alt.indexOf(N)!==-1?W.alt=!0:b.shift.indexOf(N)!==-1?W.shift=!0:b.meta.indexOf(N)!==-1&&(W.meta=!0)}),{ctrl:W.ctrl,alt:W.alt,shift:W.shift,meta:W.meta,key:I}}function x(l,g){if(!l||!g)return!1;var I=String(g.key||g.code||"").toLowerCase();return l.key!==I?!1:l.ctrl===!!g.ctrlKey&&l.alt===!!g.altKey&&l.shift===!!g.shiftKey&&l.meta===!!g.metaKey}function M(l){if(!l)return"";var g=[];return l.ctrl&&g.push("Ctrl"),l.alt&&g.push("Alt"),l.shift&&g.push("Shift"),l.meta&&g.push("Meta"),g.push(l.key.toUpperCase()),g.join("+")}function V(){var l={};return{register:function(g){if(!g||!g.key)throw new Error("命令 key 必填");if(l[g.key])throw new Error("命令重复注册: "+g.key);return l[g.key]=Object.assign({},g),g.key},list:function(){return Object.keys(l).map(function(g){return l[g]})},get:function(g){return l[g]||null},remove:function(g){delete l[g]},has:function(g){return!!l[g]},count:function(){return Object.keys(l).length}}}function P(){var l={},g={};return{register:function(I,W,E){var N=S(I);if(!N)throw new Error("无效快捷键: "+I);var K=M(N);if(l[K])throw new Error("快捷键冲突: "+I);if(W!=null&&g[W]!==void 0)throw new Error("动作重复绑定: "+W);return l[K]={combo:I,action:W,description:E||"",parsed:N},g[W]=K,K},resolve:function(I){for(var W in l)if(x(l[W].parsed,I))return l[W].action;return null},list:function(){return Object.keys(l).map(function(I){return l[I]})},unregister:function(I){var W=M(S(I));l[W]&&(delete g[l[W].action],delete l[W])},count:function(){return Object.keys(l).length}}}function v(){var l=P();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:m,toggleVisible:e,searchMenus:c,searchCommands:d,filterStocksLocal:k,mergeResults:r,moveIndex:n,buildSearchSuggestions:p,dispatchSearchSelection:o,DEFAULT_COMMANDS:_,parseKeyCombo:S,matchShortcut:x,canonicalCombo:M,createCommandRegistry:V,createShortcutRegistry:P,createDefaultShortcuts:v}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Te<"u"&&Te.exports?Te.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var m=t();typeof Te=="object"&&Te.exports&&(Te.exports=m),a.QuantOnboarding=m})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],t=a.length,m=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=m.length;function c(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return m.slice()}function k(L){return L<0?0:L>=e?e-1:L}function r(L){return{stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0}}function n(L){return r(Object.assign({},L,{stepIndex:k((L.stepIndex||0)+1),updatedAt:Date.now()}))}function p(L){return r(Object.assign({},L,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(L){return r(Object.assign({},L,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function _(L){var H=Math.min(L&&L.stepIndex||0,e);return{done:H,total:e,pct:Math.round(H/e*100)}}function b(L){return!!(L&&!L.completed&&!L.dismissed)}function S(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function x(){return a.slice()}function M(){return t}function V(L){return L<0?0:L>=t?t-1:L}function P(L){return{stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0}}function v(L){return P(Object.assign({},L,{stepIndex:V((L.stepIndex||0)+1),updatedAt:Date.now()}))}function l(L){return P(Object.assign({},L,{stepIndex:V((L.stepIndex||0)-1),updatedAt:Date.now()}))}function g(L,H){return P(Object.assign({},L,{stepIndex:V(H),updatedAt:Date.now()}))}function I(L){return P(Object.assign({},L,{completed:!0,updatedAt:Date.now()}))}function W(L){return P(Object.assign({},L,{dismissed:!0,updatedAt:Date.now()}))}function E(L){return!!(L&&L.completed)}function N(L){var H=Math.min(L&&L.stepIndex||0,t);return{done:H,total:t,pct:Math.round(H/t*100)}}function K(L){var H=L||S();return JSON.stringify({stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0})}function A(L){var H=S();if(!L||typeof L!="string")return H;try{var $=JSON.parse(L);if(!$||typeof $!="object")return H;var ee=parseInt($.stepIndex,10);return isNaN(ee)?H:{stepIndex:V(ee),completed:!!$.completed,dismissed:!!$.dismissed,updatedAt:$.updatedAt||0}}catch{return H}}return{ONBOARDING_STEPS:a,steps:x,stepCount:M,createOnboardingState:S,next:v,prev:l,jumpTo:g,complete:I,dismiss:W,isComplete:E,progress:N,persistState:K,parseState:A,SHORTTERM_TOUR_STEPS:m,shorttermTourSteps:d,createShorttermTourState:c,shorttermTourNext:n,shorttermTourComplete:p,shorttermTourDismiss:o,shorttermTourProgress:_,shorttermTourShouldShow:b}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:m}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const c=a(!1),d=a(e.createOnboardingState()),k=t(function(){return e.steps()[d.value.stepIndex]}),r=t(function(){return e.progress(d.value)}),n=t(function(){return d.value.stepIndex>=e.stepCount()-1}),p=t(function(){return"onboarding.step."+k.value.key});function o(){const v=e.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:v}})}).then(function(l){return l.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",v)}catch{}})}function _(v){v&&window.__quantGoPage?window.__quantGoPage(v,""):v&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=v,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function b(){d.value=e.next(d.value);const v=e.steps()[d.value.stepIndex];v&&v.target&&_(v.target)}function S(){d.value=e.prev(d.value);const v=e.steps()[d.value.stepIndex];v&&v.target&&_(v.target)}function x(){d.value=e.complete(d.value),o(),c.value=!1}function M(){d.value=e.dismiss(d.value),o(),c.value=!1}function V(){d.value=e.createOnboardingState(),o(),c.value=!0}function P(){fetch("/api/user_config/preferences").then(function(v){return v.json()}).then(function(v){const l=v&&v.preferences&&v.preferences.onboarding_progress;return l&&(d.value=e.parseState(l)),l}).catch(function(){return null}).then(function(v){if(!v)try{const l=localStorage.getItem("qc_onboarding_progress");l&&(d.value=e.parseState(l))}catch{}!e.isComplete(d.value)&&!d.value.dismissed&&(c.value=!0)}),window.addEventListener("qc:onboarding-replay",V)}return m(P),{visible:c,st:d,step:k,prog:r,isLast:n,stepKey:p,next:b,prev:S,finish:x,skip:M,replay:V}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(t){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(t)||""}catch{}return t}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(t){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:m,nextTick:e,inject:c,onMounted:d}=Vue,k=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const r=c("qcState");if(!r)return{};const n=a(""),p=t({get:()=>r.commandPaletteVisible.value,set:D=>{r.commandPaletteVisible.value=D}}),o=a(0),_=a([]),b=a(null),S=t(()=>{const D=(k.DEFAULT_COMMANDS||[]).map(function(y){return Object.assign({},y)});return Object.keys(r.themes.value||{}).forEach(function(y){const i=r.themes.value[y];D.push({key:"theme:"+y,label:"切换主题 · "+(i.name||y),icon:"palette",keywords:"theme 主题"})}),D});function x(D){return typeof D=="string"&&/^[a-z][a-z0-9-]*$/.test(D)}const M=t(()=>r.menus.value||[]);function V(){const D=window.__quantModules&&window.__quantModules.pinyin;if(!D)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(y){s.push({code:y.code,name:y.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(y){y&&y.stock_code&&s.push({code:y.stock_code,name:y.stock_name||y.stock_code})}),s.push.apply(s,D.getExtraStocks()),D.buildStockIndex(s)}function P(D){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(D,V()).map(function(y){return{type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up"}}):[]}function v(){const D=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(i){D.push({type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"最近查看 · "+i.code,icon:"trending-up"})});const y=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(i){return{type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"我的自选 · "+i.code,icon:"trending-up"}});return D.concat(y)}const l=t(()=>{const D=n.value;if(!D)return k.mergeResults([],[],v());const s=k.searchMenus(D,M.value,r.subPageNames),y=k.searchCommands(D,S.value),i=_.value;return k.mergeResults(s,y,i)}),g=t(()=>l.value);function I(D){return g.value.flat[o.value]===D}function W(D){o.value=g.value.flat.indexOf(D)}function E(D){return(D.type||"")+":"+(D.code||D.menuKey||D.key||D.label)}let N=null;function K(){const D=n.value.trim();if(D.length<1){_.value=[];return}N&&clearTimeout(N),N=setTimeout(function(){const s=P(D);_.value=s,o.value=0,r.searchStocks(D,function(y){if(n.value.trim()!==D)return;const i=(y||[]).filter(function(z){return z&&z.code&&z.name}).map(function(z){return{type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up"}}),h={},X=[];s.forEach(function(z){h[z.code]||(h[z.code]=!0,X.push(z))}),i.forEach(function(z){h[z.code]||(h[z.code]=!0,X.push(z))}),_.value=X,o.value=0})},200)}function A(){o.value=k.moveIndex(o.value,g.value.flat.length,1)}function L(){o.value=k.moveIndex(o.value,g.value.flat.length,-1)}function H(){const D=g.value.flat[o.value];D&&$(D)}function $(D){r.commandPaletteVisible.value=!1,D.type==="menu"?r.navigateTo(D.menuKey,D.subPage):D.type==="stock"?r.showStockDetail(D.code,D.name):D.type==="command"&&ee(D.key)}function ee(D){if(D==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else D==="export"?r.exportCSV():D==="batch"?r.showBatchEvaluate.value=!0:D==="ai"?r.openAiFab():D==="sidebar"?r.toggleSidebar():D==="today"?r.navigateTo("strategies","overview"):D==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):D==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):D==="open-system"?r.navigateTo("system","status"):D==="open-shortterm"?r.navigateTo("shortterm","overview"):D==="open-research"?r.navigateTo("research","overview"):D==="open-calendar"?r.navigateTo("calendar",""):D==="refresh-data-source"?r.navigateTo("system","datasource"):D==="open-watchlist"?r.navigateTo("ai","watchlist"):D==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):D==="open-focus"?r.navigateTo("ai","focus"):D==="open-portfolio"?r.navigateTo("ai","portfolio"):D==="open-backtest"?r.navigateTo("research","backtest"):D==="open-market-review"?r.navigateTo("shortterm","market-review"):D==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):D==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):D==="open-status"?r.navigateTo("ops","status"):D==="open-health"?r.navigateTo("ops","health"):D==="open-schedule"?r.navigateTo("ops","schedule"):D==="open-guard"?r.navigateTo("ops","guard"):D==="open-usage"?r.navigateTo("ops","usage"):D==="open-datadict"?r.navigateTo("ops","datadict"):D==="open-notification"?r.navigateTo("system","notification"):D==="open-users"?r.navigateTo("system","user"):D==="open-autoeval"?r.navigateTo("system","autoeval"):D==="open-feature"?r.navigateTo("system","feature"):D==="open-config"?r.navigateTo("system","config"):D==="open-glossary"?r.navigateTo("system","glossary"):D==="theme-dark"?r.changeTheme("dark-pro"):D==="theme-light"?r.changeTheme("gold"):D.indexOf("theme:")===0&&r.changeTheme(D.slice(6))}m(p,function(D){D&&(n.value="",_.value=[],o.value=0,e(function(){b.value&&b.value.focus&&b.value.focus()}))}),m(n,K);function le(D){D==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:D==="toggle-sidebar"?r.toggleSidebar():D==="open-ai"?r.openAiFab():D==="refresh"?ee("refresh"):D==="open-today"?ee("today"):D==="batch-eval"?ee("batch"):D==="add-portfolio"&&ee("add-portfolio")}function ae(D){if(!k.createDefaultShortcuts||!k.createShortcutRegistry)return;const y=k.createDefaultShortcuts().resolve({key:D.key,ctrlKey:D.ctrlKey,altKey:D.altKey,shiftKey:D.shiftKey,metaKey:D.metaKey});y&&(D.preventDefault(),le(y))}return d(function(){document.addEventListener("keydown",ae)}),{visible:p,query:n,results:g,inputEl:b,sanitizeHtml:r.sanitizeHtml,isIconName:x,onDown:A,onUp:L,onEnter:H,execute:$,isActive:I,setActive:W,itemKey:E,onGlobalKeydown:ae}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};const m=window.QuantFormMemory;function e(){const r=t.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>t.showBatchEvaluate&&t.showBatchEvaluate.value||!1,r=>{if(r&&m){const n=m.loadForm("batch-evaluate",e(),1);n&&n.batchStocks&&!(t.batchStocks&&t.batchStocks.value)&&(t.batchStocks.value=n.batchStocks)}});function c(){return m&&m.saveForm("batch-evaluate",{batchStocks:t.batchStocks&&t.batchStocks.value||""},e(),1),t.doBatchEvaluate()}const d=Vue.ref(0);let k=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,r=>{r?(d.value=0,k=setInterval(()=>{d.value++},1e3)):k&&(clearInterval(k),k=null)}),{...t,batchElapsed:d,onBatchEvaluate:c}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:m}=Vue;window.__quantComponents=window.__quantComponents||{};const e=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const c=a(!1),d=a(!1),k=a(!1),r=a([]),n=a({}),p=a(""),o=a(""),_=a("");function b(E,N){N=N||{},N.headers=Object.assign({},N.headers||{});const K=localStorage.getItem("quant_token")||"";return K&&(N.headers.Authorization="Bearer "+K),fetch(E,N)}async function S(){d.value=!0;try{const N=await(await b("/api/watchlist/groups")).json();N&&N.success&&(r.value=N.groups||[],n.value=N.mapping||{})}catch{}d.value=!1}function x(E){return Object.values(n.value).filter(function(N){return N===E}).length}function M(E){const N=r.value[E],K=e.indexOf(N.color);N.color=e[(K+1)%e.length]}function V(E){if(E<=0)return;const N=r.value.slice(),K=N[E-1];N[E-1]=N[E],N[E]=K,r.value=N}function P(E){if(E>=r.value.length-1)return;const N=r.value.slice(),K=N[E+1];N[E+1]=N[E],N[E]=K,r.value=N}function v(){const E=p.value.trim();E&&(r.value.some(function(N){return N.name===E})||(r.value.push({name:E,color:e[r.value.length%e.length],sort_order:r.value.length,expanded:!0}),p.value=""))}function l(E){o.value=E,_.value=E}function g(E){const N=_.value.trim();if(!N||N===E||r.value.some(function(A){return A.name===N})){o.value="";return}r.value=r.value.map(function(A){return A.name===E?Object.assign({},A,{name:N}):A});const K={};Object.keys(n.value).forEach(function(A){K[A]=n.value[A]===E?N:n.value[A]}),n.value=K,o.value=""}function I(E){r.value=r.value.filter(function(K){return K.name!==E});const N={};Object.keys(n.value).forEach(function(K){N[K]=n.value[K]===E?"默认分组":n.value[K]}),n.value=N}async function W(){k.value=!0;try{await b("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:r.value,mapping:n.value})}),ElementPlus.ElMessage.success("分组已保存"),c.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}k.value=!1}return m(function(){window.addEventListener("qc:show-watch-groups",function(){c.value=!0,S()})}),{visible:c,loading:d,saving:k,groups:r,mapping:n,newName:p,renaming:o,renameVal:_,load:S,countIn:x,cycleColor:M,moveUp:V,moveDown:P,addGroup:v,startRename:l,commitRename:g,remove:I,save:W}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a,computed:t,ref:m,watch:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const c=a("qcState");if(!c)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},k=t(()=>d[c.aiEvalStage.value]||""),r=t(()=>{const H=c.aiResult&&c.aiResult.value&&c.aiResult.value.result&&c.aiResult.value.result.level;return H?H==="强烈推荐"||H==="推荐"?"var(--success-text)":H==="谨慎推荐"?"var(--warning-text)":H==="中性"||H==="观望"?"var(--text-secondary)":H==="评估失败"||H==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function n(H){const $=document.createElement("textarea");$.value=H,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}async function p(){const H=c.aiResult&&c.aiResult.value;if(!H||!H.result)return;const $=H.result.dimensions||{},ee=Object.entries($).map(([ae,D])=>`${ae} ${Math.round(D)}分`).join(`
`),le=`【AI 智能评估】${H.result.level||""} ${H.result.total_score!=null?H.result.total_score:"—"}分
模型：${H.model_used||H.result.provider||"—"}

${H.result.detailed_report||""}

九维度评分：
${ee||"无"}`;try{await navigator.clipboard.writeText(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{n(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=m(!1),_=m(!1),b=m(null),S=m([]),x={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function M(H){return x[H]||"factor-sem-none"}async function V(){const H=c.stockDetail.value&&c.stockDetail.value.stock;if(H){o.value=!0,_.value=!1,S.value=[],b.value=null;try{const $=c.selectedDate.value?`?date=${c.selectedDate.value}`:"",ee=await fetch(`/api/calendar/stock/${H}/factors${$}`).then(s=>s.json()),le=ee&&Array.isArray(ee.factors)?ee.factors:[],ae=[],D={};le.forEach(s=>{D[s.category]||(D[s.category]={category:s.category,items:[]},ae.push(D[s.category])),D[s.category].items.push(s)}),S.value=ae,b.value=ee&&ee.summary||null}catch{_.value=!0}finally{o.value=!1}}}e(c.stockDetailTab,H=>{H==="factor"&&c.stockDetail.value&&c.stockDetailVisible.value&&(V(),v())});const P=m(null);async function v(){try{const H=await fetch("/api/market/factor-ic").then($=>$.json());P.value=H&&H.success&&H.data?H.data:{}}catch{P.value={}}}function l(H){if(!H||!H.n5)return"—";const $=H.n5.icir!=null?"ICIR "+H.n5.icir:"ICIR —";return H.n5.grade+" ("+$+")"}const g=m(!1),I=m(!1),W=m([]),E=m([]);function N(H){if(H==null)return"—";const $=Number(H);return Number.isNaN($)?"—":Math.abs($)>=1e8?($/1e8).toFixed(2)+"亿":Math.abs($)>=1e4?($/1e4).toFixed(1)+"万":String($)}async function K(){const H=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(H){g.value=!0,I.value=!1;try{const $=await fetch("/api/market/performance/"+encodeURIComponent(H)).then(ee=>ee.json());$&&$.success?(W.value=$.forecast||[],E.value=$.express||[]):I.value=!0}catch{I.value=!0}finally{g.value=!1}}}e(c.stockDetailTab,H=>{H==="performance"&&K()});const A=m(null);async function L(){const H=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(!H){A.value=null;return}try{const $=await fetch("/api/focus/stock/"+encodeURIComponent(H)+"/pool").then(ee=>ee.json());A.value=$&&$.success&&$.data?$.data:null}catch{A.value=null}}return e(()=>c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock,H=>{H&&c.stockDetailVisible.value?L():A.value=null}),e(()=>c.stockDetailVisible.value,H=>{H?L():A.value=null}),{...c,aiStageText:k,levelRingColor:r,copyAiReport:p,factorLoading:o,factorError:_,factorSummary:b,factorGroups:S,factorSemClass:M,loadFactorPanel:V,factorIc:P,loadFactorIc:v,factorIcGrade:l,perfLoading:g,perfError:I,perfForecast:W,perfExpress:E,fmtY:N,loadPerformance:K,poolInfo:A,loadPoolInfo:L}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(m){const e=t("qcState");if(!e)return{};const c=a(()=>m.type==="history"?e.selectedHistoryIds.value.includes(m.item.id):e.selectedChatIds.value.includes(m.item.id)),d=a(()=>{const x=e.watchlistCodes.value.has(m.item.stock_code);return{icon:"star",isWatched:x,label:x?"取消收藏":"加入收藏"}}),k=a(()=>m.type==="history"?"bot":"message-circle"),r=a(()=>{var x;return m.type==="history"?((x=m.item.result)==null?void 0:x.provider)||"":m.item.first_msg||""}),n=a(()=>{var x,M;return`${((M=(x=m.item.result)==null?void 0:x.dimensions)==null?void 0:M.length)||9}维度分析`}),p=a(()=>{var M,V;const x=m.type==="history"?m.item.evaluate_time:m.item.created_at||"";return x?m.timeFormat==="datetime"?m.type==="history"?`${x.split("T")[0]} ${(x.split("T")[1]||"").split(".")[0]}`:`${x.split("T")[0]} ${((M=x.split("T")[1])==null?void 0:M.substring(0,5))||""}`:m.type==="history"?(x.split("T")[1]||"").split(".")[0]||x:((V=x.split("T")[1])==null?void 0:V.substring(0,5))||"":""});function o(){m.type==="history"?e.toggleSelectHistory(m.item.id):e.toggleSelectChat(m.item.id)}function _(){m.type==="history"?e.viewAiResult(m.item):e.viewChatSession(m.item)}async function b(){try{await ElementPlus.ElMessageBox.confirm(m.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}m.type==="history"?e.deleteSingleHistory(m.item.id):e.deleteChatSession(m.item.id)}function S(x,M){e.toggleWatchlist(x,M)}return{isSelected:c,watchState:d,providerIcon:k,providerText:r,dimsText:n,timeText:p,toggleSelect:o,view:_,remove:b,toggleWatchlist:S,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:m,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const c=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},k={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],n={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},p=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(b){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(b).then(M=>M.json?M.json():M)}function _(){const b=new Date,S=x=>x<10?"0"+x:""+x;return b.getFullYear()+"-"+S(b.getMonth()+1)+"-"+S(b.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const b=e("qcState"),S=a(_()),x=a("after_close"),M=a({rows:[],actions:{},total:0,groups:{}}),V=a({sessions:{},total:0}),P=a(null),v=a(!1),l=a(""),g=a(!1),I=a([]),W=a(""),E=a(null),N={},K=a({});let A=0;const L=a(null),H=t(function(){const T=M.value&&M.value.groups||{};return Object.keys(T).length?T:M.value&&M.value.rows&&M.value.rows.length?{全部:M.value.rows}:{}}),$=t(function(){const T=L.value;return!T||!T.date||T.date!==S.value?"":"已加载最近一次评估: "+T.date+" · "+(n[T.session]||T.session)}),ee=t(function(){const T=M.value&&M.value.base_date;return T?T===S.value?"评分范围: "+T+" 收盘池 + 自选":"评分范围: "+T+" 收盘池(前一交易日算好) + 自选":""});function le(T){if(T==null)return"—";const U=Number(T);return U===Math.floor(U)?String(U):U.toFixed(1)}function ae(T){const U=M.value.total||0,ie=(M.value.actions||{})[T]||0;if(!U)return"0%";const ge=ie/U*100;return ge>0&&ge<4?"4%":ge.toFixed(1)+"%"}function D(T){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[T]||"info"}function s(T){const U=P.value&&P.value.overall&&P.value.overall[T]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"info":U.rate>=60?"success":U.rate>=40?"warning":"danger"}function y(T){const U=P.value&&P.value.overall&&P.value.overall[T]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"样本不足":U.rate.toFixed(1)+"% ("+U.total+" 样本)"}function i(){return n[x.value]||x.value}function h(T){const U=I.value.indexOf(T);U>=0?I.value.splice(U,1):I.value.push(T)}function X(T){if(!T||!T.raw_json)return{};if(N[T.stock_code+T.session+T.trade_date])return N[T.stock_code+T.session+T.trade_date];let U={};try{U=JSON.parse(T.raw_json)||{}}catch{U={}}return N[T.stock_code+T.session+T.trade_date]=U,U}async function z(){try{const T=await o("/api/focus/latest"),U=T&&T.success&&T.data;U&&U.date&&(L.value=U,S.value=U.date,U.session&&(x.value=U.session))}catch(T){console.warn("[focus] 最近一次评估解析失败:",T)}}async function w(){g.value=!0;try{const T=await o("/api/focus/results?date="+S.value+"&session="+x.value);M.value=T&&T.success&&T.data||{rows:[],actions:{},total:0,groups:{}},f((M.value.rows||[]).map(function(U){return U.stock_code}))}catch(T){console.warn("[focus] 结果加载失败:",T),M.value={rows:[],actions:{},total:0,groups:{}}}finally{g.value=!1}}async function f(T){const U=K.value||{},ie=(T||[]).filter(function(Q){return Q&&!U[Q]});if(!ie.length)return;const ge=++A,qe=ie.map(function(Q){return o("/api/focus/stock/"+encodeURIComponent(Q)+"/pool?date="+S.value).then(function(ue){ue&&ue.success&&ue.data?U[Q]=ue.data:U[Q]={stock_code:Q,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){U[Q]={stock_code:Q,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(qe)}catch{}ge===A&&(K.value=Object.assign({},U))}function C(T){const U=b&&b.showStockDetail;if(typeof U=="function"){U(T);return}const ge=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ge&&ge.info("请从其他页面打开股票详情: "+T)}async function u(){try{const T=await o("/api/focus/history?date="+S.value);V.value=T&&T.success&&T.data||{sessions:{},total:0}}catch(T){console.warn("[focus] 历史加载失败:",T),V.value={sessions:{},total:0}}}async function O(){v.value=!0;try{const T=await o("/api/ai/track");T&&T.success&&T.data?(P.value=T.data,l.value=(T.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):P.value=null}catch(T){console.warn("[focus] 效果块加载失败:",T),P.value=null}finally{v.value=!1}}async function oe(){const T=(W.value||"").trim();if(T){E.value=null;try{const U=await o("/api/focus/stock/"+encodeURIComponent(T));E.value=U&&U.success&&U.data&&U.data.rows||[]}catch(U){console.warn("[focus] 单股历史加载失败:",U),E.value=[]}}}async function J(){await w(),await u(),await O()}return m(async function(){await z(),await J()}),{curDate:S,session:x,results:M,history:V,track:P,trackLoading:v,trackNote:l,detailSplitEnabled:b.detailSplitEnabled,stockDetail:b.stockDetail,loading:g,expanded:I,stockCode:W,stockHistory:E,SESSIONS:r,ACTION_ORDER:c,TRACK_WINDOWS:p,ACTION_DOT:d,TIER_DOT:k,SESSION_LABELS:n,displayGroups:H,latestNote:$,baseNote:ee,sessionLabel:i,fmtScore:le,tagType:D,rateTagType:s,fmtRate:y,toggle:h,detailOf:X,loadResults:w,loadHistory:u,loadTrack:O,loadStockHistory:oe,loadAll:J,poolStatus:K,openStockDetail:C,actionPct:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:m}=Vue,{currentView:e,statusFilter:c,dashboardData:d,loadHealthMetrics:k,getLoadDashboardData:r,getLastRefreshTime:n,getFetchPoolSignals:p}=a,o=t(!1),_=t(""),b=new Map,S=t([]),x=t(""),M=t(""),V=t([]),P=t(""),v=window.__quantModules.core||{},l=typeof v.createTtlCache=="function"?v.createTtlCache(15e3):null;let g=0;function I(){const $=Date.now();$-g<5e3||(g=$,ElementPlus.ElMessage.success("有新数据，已更新"))}function W($,ee,le,ae){!l||!ee||typeof v.silentRefresh!="function"||v.silentRefresh({cache:l,key:ee,fetchFn:async()=>{const D=await fetch($);if(!D.ok)throw new Error("HTTP "+D.status);const s=await D.json();return le?le(s):s},ttl:l.defaultTtl,apply:ae,onChanged:I,onError:()=>{}})}const E=new Set;async function N(){var $;try{const le=await(await fetch("/api/dates")).json();S.value=(($=le.data)==null?void 0:$.dates)||le.dates||[],S.value.length>0&&(x.value=S.value[S.value.length-1]),M.value=new Date().toLocaleTimeString()}catch(ee){console.error(ee)}}async function K(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),M.value="刷新中...",b.clear(),await N(),await L(),M.value=new Date().toLocaleTimeString()}catch($){console.error("数据刷新失败",$)}}function A(){if(!x.value)return;const ee="/api/view/"+(e.value||"day")+"/"+x.value+"?status="+(c.value||"all")+"&format=csv";window.open(ee,"_blank")}async function L(){if(!x.value)return;const $=`${e.value}_${x.value}`;if(E.has($))return;E.add($);const ee=`/api/view/${e.value}/${x.value}?status=all`,le=l&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET",`/api/view/${e.value}/${x.value}`,{status:"all"}):null,ae=(y,i)=>{V.value=y,P.value=i||"",b.set($,{stocks:y,note:i||""})},D=y=>{ae(y&&y.stocks||[],y&&y.note||"")};if(b.has($)){D(b.get($)),W(ee,le,y=>y,D),E.delete($);return}const s=le&&l?l.get(le):void 0;if(s!==void 0){D(s),W(ee,le,y=>y,D),E.delete($);return}o.value=!0,_.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const i=await(await fetch(ee)).json(),h=i.stocks||[];ae(h,i.note||""),l&&le&&l.set(le,{stocks:h,note:i.note||""})}catch{try{const h=await(await fetch(`/api/calendar/${x.value}/consensus`)).json();V.value=(h.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}p(),E.delete($)}async function H(){const $=l&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const ee=l.get($);if(ee!==void 0){d.value=ee,k().catch(()=>{}),W("/api/dashboard",$,le=>le.data||le,le=>{d.value=le,n().value=Date.now()});return}}await r()(),k().catch(()=>{}),l&&l.set($,d.value)}return{loading:o,loadingView:_,viewCache:b,dates:S,selectedDate:x,lastLoadTime:M,consensus:V,viewNote:P,loadDates:N,refreshCalendarData:K,exportCSV:A,loadConsensusData:L,loadDashboardCached:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:m,loadIndexKline:e,rememberDialogTrigger:c,menus:d,currentPage:k,currentSubPage:r,stockDetail:n,selectedDate:p}=a,o=ref({indices:[],market_sentiment:null});let _=null;const b=ref(!1),S=ref(null),x=ref(null),M=ref(!1);function V(){window.__quantModules.charts.disposeKline("stockKlineChart")}const P=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{P.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const v=ref(!1),l=ref(null),g=ref(!1),I=ref(0),W=ref(0);async function E(){try{const i=await(await fetch("/api/market/overview")).json();o.value=i,N(i)}catch(y){console.error("获取市场行情失败:",y)}}function N(y){_&&clearInterval(_),y&&y.in_trading_hours&&(_=setInterval(E,6e5))}function K(y){c(),S.value=y,x.value=null,m.value="daily",A(y.code),window.__quantModules.charts.disposeKline("indexKlineChart"),b.value=!0,setTimeout(async()=>{await e("daily")},500)}async function A(y){try{const h=await(await fetch("/api/ai/index-eval/"+y)).json();h.success&&h.data&&(x.value=h.data)}catch(i){console.warn("[getIndexAiScore] cache check failed:",i)}}async function L(){if(S.value){M.value=!0;try{const i=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:S.value.code,index_name:S.value.name,current_price:S.value.close,pct_chg:S.value.pct_chg})})).json();i.success?x.value=i.data:ElementPlus.ElMessage.error(i.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{M.value=!1}}}function H(y){window.__quantModules.charts.zoomKline("stockKlineChart",y)}function $(){g.value=!0,setTimeout(()=>{g.value=!1},600)}function ee(y,i){if(y===i){$();return}const h=800,X=performance.now(),z=i-y;v.value=!0,l.value={value:z,dir:z>0?"up":"down"},g.value=!0,setTimeout(()=>{g.value=!1},600),setTimeout(()=>{l.value=null},2300);function w(f){const C=f-X,u=Math.min(C/h,1),O=1-Math.pow(1-u,3),oe=Math.round(y+z*O);n.value&&n.value.score_data&&(n.value.score_data.score=oe),u<1?requestAnimationFrame(w):(n.value&&n.value.score_data&&(n.value.score_data.score=i),v.value=!1)}requestAnimationFrame(w)}function le(){if(!n.value||!n.value.score_data)return;const y=n.value.score_data.score;if(y==null)return;const i=600,h=performance.now();g.value=!0,setTimeout(()=>{g.value=!1},600);function X(z){const w=Math.min((z-h)/i,1),f=1-Math.pow(1-w,3),C=Math.round(y*f);n.value&&n.value.score_data&&(n.value.score_data.score=C),w<1?requestAnimationFrame(X):n.value&&n.value.score_data&&(n.value.score_data.score=y)}requestAnimationFrame(X)}async function ae(){var h;if(!n.value||!n.value.stock)return;const y=n.value.stock,i=(h=n.value.score_data)==null?void 0:h.score;try{const X=new Date().toISOString().split("T")[0],z=p.value||X,f=await(await fetch(`/api/calendar/stock/${encodeURIComponent(y)}/score?date=${z}`)).json();if(f.success&&f.score_data){const C=f.score_data.score;n.value&&(n.value.score_data=f.score_data),i!=null&&C!==i?ee(i,C):$()}else $()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function D(y){P.value&&(I.value=y.touches[0].clientX,W.value=y.touches[0].clientY)}function s(y){if(!P.value)return;const i=I.value-y.changedTouches[0].clientX,h=W.value-y.changedTouches[0].clientY;if(Math.abs(i)>Math.abs(h)&&Math.abs(i)>80){const X=d.value.map(function(w){return w.key}),z=X.indexOf(k.value);if(i>0&&z<X.length-1){const w=X[z+1],f=window.__quantGoPage;f?f(w,""):(k.value=w,r.value="")}else if(i<0&&z>0){const w=X[z-1],f=window.__quantGoPage;f?f(w,""):(k.value=w,r.value="")}}}return{marketData:o,marketRefreshTimer:_,fetchMarketData:E,indexDetailVisible:b,indexDetail:S,indexAiResult:x,indexAiLoading:M,showIndexDetail:K,loadCachedIndexEval:A,doIndexAiEvaluate:L,disposeStockKline:V,isMobile:P,zoomKlineRange:H,scoreAnimating:v,scoreDelta:l,scorePulse:g,triggerScorePulse:$,animateScoreChange:ee,animateScoreEntrance:le,refreshStockScore:ae,touchStartX:I,touchStartY:W,onTouchStart:D,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:m,currentSubPage:e}=a,c=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),k=ref("");async function r(){if(!c.value.webhook_url){k.value="请先输入Webhook地址";return}d.value="testing",k.value="";try{const T=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:c.value.webhook_url})})).json();T.success||T.status==="ok"?(k.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(k.value=T.message||"测试失败",ElementPlus.ElMessage.error(k.value))}catch{k.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const n=Vue.ref(!1);async function p(){n.value=!0;try{const T=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}const o=ref(!1);function _(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const J=document.querySelector('input[placeholder*="输入问题"]');J&&J.focus()})}const b=ref([]),S=ref({});async function x(){try{const T=await(await fetch("/api/ai/recommend-strategies")).json();T.success&&(b.value=T.recommendations||[])}catch(J){console.warn("[loadStrategyRecommendations] failed:",J)}}async function M(){try{const T=await(await fetch("/api/ai/usage-stats")).json();T.success&&(S.value=T)}catch(J){console.warn("loadAiUsage failed:",J)}}const V=ref({}),P=ref([]),v=ref(7);async function l(){try{const T=await(await fetch("/api/system/monitor")).json();T.success&&(V.value=T)}catch(J){console.warn("loadSysMonitor failed:",J)}}const g=ref({});async function I(){try{const T=await(await fetch("/api/system/health-detail")).json();T.success&&(g.value=T)}catch(J){console.warn("loadHealthDetail failed:",J)}}async function W(){try{const T=await(await fetch(`/api/analytics/rank?days=${v.value}`)).json();T.success&&(P.value=T.rank||[])}catch(J){console.warn("loadAnalytics failed:",J)}}const E=ref(!1);async function N(){if(!E.value){E.value=!0;try{const T=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return T&&T.success?T.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${T.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${T.date}）`):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"生成复盘失败"),I(),T}catch(J){ElementPlus.ElMessage.error("生成复盘失败: "+(J.message||""))}finally{E.value=!1}}}const K=ref(null),A=ref(!1);async function L(){try{const T=await(await fetch("/api/ai/fact-check/latest")).json();K.value=T&&T.success&&T.data||null}catch(J){console.warn("loadFactCheck failed:",J)}}async function H(){if(!A.value){A.value=!0;try{const T=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return T&&T.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${T.data.pass_rate!=null?T.data.pass_rate+"%":"--"} (${T.data.checked} 个数字)`),L()):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"事实护栏抽查失败"),T}catch(J){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(J.message||""))}finally{A.value=!1}}}const $=ref([]),ee=ref(!1);async function le(){try{const T=await(await fetch("/api/backup/list")).json();T.success&&($.value=T.backups||[])}catch(J){console.error("加载备份列表失败",J)}}async function ae(){ee.value=!0;try{const T=await(await fetch("/api/backup/create",{method:"POST"})).json();T.success?(ElementPlus.ElMessage.success(T.message||"备份成功"),le()):ElementPlus.ElMessage.error(T.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ee.value=!1}}const D=ref(""),s=ref("");async function y(J){D.value=J,s.value="";try{const T=window.__quantModules&&window.__quantModules.core||{},U=typeof T.authHeaders=="function"?T.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(J),{headers:U});if(!ie.ok)throw new Error("HTTP "+ie.status);const ge=await ie.blob(),qe=URL.createObjectURL(ge),Q=document.createElement("a");Q.href=qe;const ue=new Date().toISOString().slice(0,10);Q.download="report_"+ue+"."+J,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(qe),s.value="报表已导出 ("+J.toUpperCase()+")"}catch(T){s.value="报表导出失败: "+(T.message||T)}finally{D.value=""}}async function i(J){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${J} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(T){console.warn("[restoreBackup] confirm cancelled:",T);return}try{const U=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(U.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const h=ref(!1),X=ref(0),z=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function w(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,h.value=!0},800)}function f(){h.value=!1,localStorage.setItem("quant_tour_done","1")}function C(){h.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),O=ref(!1);async function oe(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}O.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:m.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{O.value=!1}}return{feishuConfig:c,feishuTestStatus:d,feishuTestMessage:k,feishuSaving:n,testFeishuWebhook:r,saveFeishuConfig:p,aiFabHidden:o,openAiFab:_,strategyRecommendations:b,aiUsage:S,loadStrategyRecommendations:x,loadAiUsage:M,sysMonitor:V,analyticsRank:P,analyticsDays:v,loadSysMonitor:l,loadAnalytics:W,healthDetail:g,loadHealthDetail:I,reviewTriggering:E,triggerMarketReview:N,factCheck:K,factCheckRunning:A,loadFactCheck:L,triggerFactCheck:H,backups:$,backupCreating:ee,loadBackups:le,createBackup:ae,restoreBackup:i,reportExporting:D,reportExportMsg:s,exportReport:y,tourVisible:h,tourStep:X,tourSteps:z,maybeShowTour:w,skipTour:f,finishTour:C,feedbackText:u,feedbackSubmitting:O,submitFeedback:oe}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:m,selectedDate:e,dates:c,loadConsensusData:d,hapticFeedback:k}=a,r=t(()=>({day:"天",week:"周",month:"月",year:"年"})[m.value]||"天"),n=t(()=>({day:"date",week:"week",month:"month",year:"year"})[m.value]||"date"),p=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[m.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!c.value||c.value.length===0?!1:e.value>c.value[0]),_=t(()=>!e.value||!c.value||c.value.length===0?!1:e.value<c.value[c.value.length-1]);function b(V){k("light"),m.value=V;let P=e.value||c.value[c.value.length-1];if(V==="year"){const v=P.substring(0,4),l=c.value.find(g=>g.startsWith(v));e.value=l||P}else if(V==="month"){const v=P.substring(0,7),l=c.value.find(g=>g.startsWith(v));e.value=l||P}setTimeout(d,50)}function S(V){k("light");const P=e.value,v=c.value,l=v.indexOf(P);if(l<0)return;let g=1;m.value==="week"&&(g=5),m.value==="month"&&(g=22),m.value==="year"&&(g=250);const I=l+V*g;if(I>=0&&I<v.length){const W=v[I];if(m.value==="month"){const E=W.substring(0,7),N=v.find(K=>K.startsWith(E));e.value=N||W}else if(m.value==="year"){const E=W.substring(0,4),N=v.find(K=>K.startsWith(E));e.value=N||W}else e.value=W;d()}}function x(V){if(!c.value||c.value.length===0)return!1;const P=V.getFullYear(),v=String(V.getMonth()+1).padStart(2,"0"),l=String(V.getDate()).padStart(2,"0"),g=`${P}-${v}-${l}`;return!c.value.includes(g)}function M(V){V&&V.length>10&&(e.value=V.substring(0,10)),d()}return{viewUnit:r,datePickerType:n,dateFormat:p,canNavPrev:o,canNavNext:_,switchView:b,navigateDate:S,disabledDate:x,onDateChange:M}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:m,navigateTo:e,currentPage:c,currentView:d,navigateDate:k,switchView:r,getLoadDashboardData:n,refreshCalendarData:p,getLoadAiHistory:o,exportCSV:_,getShowBatchEvaluate:b,openAiFab:S,toggleSidebar:x,showStockDetail:M}=a,V=ref("");async function P(A,L){if(!A||A.trim().length<1){L([]);return}const H=window.QuantCommandPanel;let $=[];H&&t.value&&($=H.buildSearchSuggestions(A,t.value,m,H.DEFAULT_COMMANDS));const ee=window.__quantModules&&window.__quantModules.pinyin;ee&&ee.searchCoreStocks(A).forEach(function(le){$.push({value:le.code+" "+le.name,type:"stock",code:le.code,name:le.name,label:le.name,subLabel:le.code,icon:"trending-up",iconName:"trending-up"})});try{const ae=await(await fetch("/api/search?q="+encodeURIComponent(A))).json();if(ae.success&&ae.results){const D=ae.results.map(function(y){return{value:y.code+" "+y.name,type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up",iconName:"trending-up"}}),s=[];(ae.groups||[]).forEach(function(y){(y.items||[]).forEach(function(i){i.type==="sector"?s.push({value:i.name+" · "+i.subLabel,type:"sector",name:i.name,label:i.name,subLabel:"板块",icon:"layers",iconName:"layers"}):i.type==="strategy"?s.push({value:i.name+" · 策略",type:"strategy",id:i.id,name:i.name,label:i.name,subLabel:"策略",icon:"target",iconName:"target"}):i.type==="menu"&&s.push({value:i.name,type:"menu",menuKey:i.menuKey,name:i.name,label:i.name,subLabel:i.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),L($.concat(D,s))}else L($)}catch(le){console.warn("[searchStocks] fetch failed:",le),L($)}}function v(A){return A?A.type==="menu"?{action:"menu",menuKey:A.menuKey,subPage:A.subPage}:A.type==="command"?{action:"command",key:A.key}:A.type==="sector"?{action:"sector",name:A.name}:A.type==="strategy"?{action:"strategy",id:A.id,name:A.name}:A.type==="stock"||A.code&&A.name?{action:"stock",code:A.code,name:A.name}:null:null}function l(A){V.value="";const L=window.QuantCommandPanel,H=L?L.dispatchSearchSelection(A):v(A);if(H){if(H.action==="menu"){e(H.menuKey,H.subPage);return}if(H.action==="command"){g(H.key);return}if(H.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(H.name);return}if(H.action==="strategy"){e("research","overview");return}H.action==="stock"&&typeof M=="function"&&M(H.code,H.name)}}function g(A){if(A==="refresh"){const L=c.value;L==="strategies"?n().catch(function(){}):L==="calendar"?p().catch(function(){}):L==="ai"&&o().catch(function(){})}else A==="export"?_():A==="batch"?b().value=!0:A==="ai"?S():A==="sidebar"?x():A==="open-eval-history"?e("ai","history"):A==="open-shortterm"&&e("shortterm","overview")}const I=ref(!1),W=ref(!1);function E(A){if(!A)return!1;const L=A.tagName;return L==="INPUT"||L==="TEXTAREA"||L==="SELECT"||A.isContentEditable}function N(A){if(E(A.target))return;const L=A.key.toLowerCase();if(A.ctrlKey&&L==="k"){A.preventDefault(),W.value=!0;return}if(A.ctrlKey&&L==="/"){A.preventDefault(),I.value=!I.value;return}if(A.ctrlKey&&L==="h"){A.preventDefault(),e("ai","history");return}if(A.ctrlKey&&A.shiftKey&&L==="s"){A.preventDefault(),e("shortterm","overview");return}if(!(A.ctrlKey||A.metaKey||A.altKey)){if(L>="1"&&L<="5"){const H=parseInt(L)-1,$=t.value[H];$&&e($.key,$.subPages[0]||"");return}if(L==="r"&&K(),(L==="arrowleft"||L==="arrowright"||L==="arrowup"||L==="arrowdown")&&c.value==="calendar")if(A.preventDefault(),L==="arrowleft"||L==="arrowright")k(L==="arrowleft"?-1:1);else{const H=["day","week","month","year"].indexOf(d.value),$=["day","week","month","year"][(H+(L==="arrowup"?-1:1)+4)%4];r($)}}}function K(){const A=c.value;A==="strategies"?n().catch(()=>{}):A==="calendar"?p().catch(()=>{}):A==="ai"&&o().catch(()=>{})}return{searchQuery:V,searchStocks:P,onSearchSelect:l,runGlobalCommand:g,shortcutHelpVisible:I,commandPaletteVisible:W,isTypingTarget:E,handleGlobalKeydown:N,refreshCurrentPage:K}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:m,loadDates:e,loadDashboardData:c,loadDashboardCached:d,loadHealthMetrics:k,loadConsensusData:r,applyTheme:n,maybeShowTour:p,loadAiVendors:o,loadGroupConfig:_,groupsConfig:b}=a,S=function(ae){const D=window.__quantModules&&window.__quantModules.themes;return D&&D.applyLegacyTheme?D.applyLegacyTheme(ae):n(ae)},x="qc_login_username";let M="";try{M=localStorage.getItem(x)||""}catch{M=""}const V=ref({username:M,password:""}),P=ref(!1),v=ref(!1),l=ref(!1),g=ref({oldPassword:"",newPassword:"",confirmPassword:""}),I=ref(!1),W=ref(!1),E=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),N=ref(1);async function K(){try{(await(await fetch("/api/setup/status")).json()).needed&&(E.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},N.value=1,W.value=!0)}catch(ae){console.warn("[checkSetupWizard] failed:",ae)}}async function A(){try{const ae={new_password:E.value.newPassword,ai_key:E.value.aiKey,ai_provider:E.value.aiProvider,ai_model:E.value.aiModel,ai_endpoint:E.value.aiEndpoint,tushare_token:E.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae)})).json();s.success?(W.value=!1,ElementPlus.ElMessage.success("初始化完成"),await m()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function L(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(W.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function H(){if(!V.value.username||!V.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}P.value=!0;try{const D=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V.value)})).json();if(D.success){t.value=D.user,localStorage.setItem("quant_user",JSON.stringify(D.user)),localStorage.setItem("quant_token",D.data.access_token),S(D.user.theme||"gold");try{localStorage.setItem(x,V.value.username||"")}catch{}typeof _=="function"&&await _().catch(function(){}),typeof o=="function"&&o(),await m(),await e(),await Promise.all([d(),r(),k().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),D.data&&D.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),p(),D.user.role==="admin"&&setTimeout(K,500)}else ElementPlus.ElMessage.error(D.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{P.value=!1}}async function $(){v.value=!0;try{const D=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();D.success?(t.value=D.user,localStorage.setItem("quant_user",JSON.stringify(D.user)),localStorage.setItem("quant_token",D.data.access_token),S(D.user.theme||"gold"),typeof _=="function"&&await _().catch(function(){}),await m(),await e(),await c(),k().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(D.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{v.value=!1}}function ee(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{b&&(b.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function le(){if(!g.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!g.value.newPassword||g.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(g.value.newPassword!==g.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}I.value=!0;try{const ae=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:g.value.oldPassword,new_password:g.value.newPassword})}),D=await ae.json();ae.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,g.value={oldPassword:"",newPassword:"",confirmPassword:""},ee()):ElementPlus.ElMessage.error(D.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{I.value=!1}}return{loginForm:V,logining:P,guestLogining:v,showChangePassword:l,changePasswordForm:g,changingPassword:I,showSetupWizard:W,setupForm:E,setupStep:N,checkSetupWizard:K,completeSetupWizard:A,resetSetupWizard:L,handleLogin:H,handleGuestLogin:$,handleLogout:ee,doChangePassword:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let m=null;const{strategyFilter:e,currentView:c,statusFilter:d,currentPage:k,currentSubPage:r,menus:n,currentUser:p,strategyFilterCounts:o,lazyTick:_,dates:b,selectedDate:S,consensus:x,loadConsensusData:M,fetchMerrillClock:V,fetchMarketData:P,loadWatchlist:v,loadAiHistory:l,preloadWatchlistKline:g,loadChatHistory:I,loadSystemStatus:W,checkTushareConnection:E,loadSysMonitor:N,loadAnalytics:K,loadHealthDetail:A,loadHealthMetrics:L,loadAiUsage:H,loadFactCheck:$,loadAutoEvaluateConfig:ee,loadDatasourceConfig:le,loadFeishuConfig:ae,loadAiConfig:D,loadAiVendors:s,loadRateLimit:y,loadDataRefreshConfig:i,loadBackups:h,loadAllGroups:X,loadUsers:z,stockDetailTab:w,stockDetailVisible:f,stockKlineLoaded:C,loadStockKline:u,currentKlinePeriod:O,showMerrillDetail:oe,indexDetailVisible:J,restoreDialogFocus:T}=a;t(e,U=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(U.selected)),localStorage.setItem("quant_strategy_filter_mode",U.mode)},{deep:!0}),t([c,d],(U,ie)=>{U[0]!==ie[0]&&M()}),t([k,r],([U,ie])=>{var ge;try{const Q=!(U==="calendar"&&ie==="calendar")&&ie||"",ue=Q?"#"+U+"/"+Q:"#"+U;window.location.hash!==ue&&(window.location.hash=ue)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&n.value.find(qe=>qe.key===U)){const qe=n.value.find(Q=>Q.key===U);qe&&qe.subPages.length>0&&(r.value=qe.subPages[0])}if(U==="shortterm"&&ie==="market-review"){const qe=window.__lazyLoaders&&window.__lazyLoaders.research;qe&&qe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Q){Q&&Q.name&&!Q.__quantRegistered&&(window.__quantApp.component(Q.name,Q),Q.__quantRegistered=!0)}),_&&_.value++}).catch(function(Q){console.warn("[lazy] research 组件补加载失败",Q)})}U==="calendar"&&ie==="calendar"&&(!x.value||x.value.length===0)&&(b.value.length>0&&!S.value&&(S.value=b.value[b.value.length-1]||""),setTimeout(M,50)),U==="calendar"&&ie==="pool"&&(!x.value||x.value.length===0)&&(b.value.length>0&&!S.value&&(S.value=b.value[b.value.length-1]||""),setTimeout(M,50)),U==="strategies"&&(ie==="merrill"&&V(),ie==="market"&&P(),ie==="consensus"&&(!x.value||x.value.length===0)&&setTimeout(M,50)),U==="ai"&&(ie==="watchlist"&&(v(),l(),setTimeout(g,500)),ie==="history"&&l(),ie==="overview"&&(l(),v()),ie==="chat_history"&&I()),(U==="system"||U==="ops")&&((ge=p.value)==null?void 0:ge.role)==="admin"&&(ie==="status"&&(W(),E()),ie==="health"&&(A(),L()),ie==="schedule"&&A(),ie==="guard"&&$(),ie==="usage"&&(N(),K(),A(),L(),H(),$()),ie==="autoeval"&&(ee(),s()),ie==="datasource"&&le(),ie==="feature"&&(ae(),D(),y(),i(),h()),ie==="user"&&(X(),z())),(U==="system"||U==="ops")&&ie==="usage"?m||(m=setInterval(()=>{N(),K(),A(),L(),H()},3e4)):m&&(clearInterval(m),m=null)}),t(w,(U,ie)=>{U==="kline"&&ie&&ie!=="kline"&&f.value&&(C.value=!1,setTimeout(async()=>{!await u(O.value)&&f.value&&w.value==="kline"&&setTimeout(()=>u(O.value),800)},50))}),t(oe,U=>{U||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([f,J],([U,ie])=>{!U&&!ie&&T()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:m,menus:e,currentPage:c,currentSubPage:d,currentView:k,currentKlinePeriod:r,selectedDate:n,dates:p,loadDates:o,loadConsensusData:_,loadDashboardCached:b,appVersion:S,themes:x,fetchMarketData:M,fetchMerrillStages:V,fetchMerrillClock:P,loadAiConfig:v,loadAiVendors:l,loadAiCatalog:g,currentUser:I,loadUserConfig:W,loadAutoEvaluateConfig:E,loadGroupConfig:N,loadUsers:K,loadAllGroups:A,loadAiHistory:L}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function H(z,w){const f={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(z==="calendar"&&f[w])return c.value="calendar",d.value="calendar",f[w]&&(k.value=f[w]),!0;if(z==="research"&&(w==="strategy-write"||w==="custom-write")){c.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",w==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const z=window.location.hash||"";if(!z||z==="#")return;const w=z.replace(/^#\/?/,"").split("/"),f=w[0],C=w[1]||"",u=e.value.find(function(O){return O.key===f});if(u&&!H(f,C)){if(!C)c.value=f,d.value=u.subPages[0]||"";else if(u.subPages.indexOf(C)>=0)c.value=f,d.value=C;else return;window.__lazyLoaders&&window.__lazyLoaders[f]&&window.__quantGoPage&&window.__quantGoPage(f,d.value).catch(function(){})}});const $=(z,w=3e3,f="")=>{const C=new Promise((u,O)=>setTimeout(()=>O(new Error("timeout")),w));return Promise.race([z,C]).catch(u=>{console.warn(`[init] ${f||"task"} failed:`,u.message)})},ee=localStorage.getItem("quant_theme"),le=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const z=window.__quantModules.themes;let w=le.theme||"system",f=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;const C=typeof z.migrateLegacyTheme=="function"?z.migrateLegacyTheme():null;f==null&&C&&(w=C.mode,f=C.hue),f==null&&(f=45),m(w,f)}else ee&&m(ee);await N().catch(function(){}),function(){var z=window.location.hash||"",w=!1;if(z&&z!=="#"){var f=z.replace(/^#\/?/,"").split("/"),C=f[0],u=f[1]||"",O=e.value.find(function(ie){return ie.key===C});O&&(H(C,u)||(c.value=C,u&&O.subPages.indexOf(u)>=0?d.value=u:u||(d.value=O.subPages[0]||"")),w=!0)}if(!w){var oe=localStorage.getItem("quant_last_page");oe&&e.value.some(function(ie){return ie.key===oe})?c.value=oe:le.default_view&&e.value.some(function(ie){return ie.key===le.default_view})&&(c.value=le.default_view);var J=localStorage.getItem("quant_last_subpage");J&&(d.value=J)}var T=localStorage.getItem("quant_last_date");T&&(n.value=T);var U=localStorage.getItem("quant_last_view");U&&(k.value=U),window.__lazyLoaders&&window.__lazyLoaders[c.value]&&window.__quantGoPage&&window.__quantGoPage(c.value,d.value).catch(function(){})}(),fetch("/api/health").then(z=>z.json()).then(z=>{z.version&&(S.value=z.version)}).catch(()=>{});const ae=localStorage.getItem("quant_user"),D=localStorage.getItem("quant_token"),s=!!(ae&&D),y=Promise.all([Promise.resolve().then(()=>{x.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),$(M(),3e3,"marketData"),$(V(),2e3,"merrillStages")]).then(()=>{$(P(),3e3,"merrillClock")});if(v(),g(),s&&I.value&&l(),!s||!I.value){await y;return}let i=!0;try{i=(await fetch("/api/users/me")).ok}catch{i=!1}if(!i){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),I.value=null;return}if(I.value){const z=I.value.theme||"",w=window.__quantModules&&window.__quantModules.themes;let f=le.theme||"system",C=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;if(C==null&&w&&typeof w.migrateLegacyTheme=="function"){const u=w.migrateLegacyTheme();if(u)f=u.mode,C=u.hue;else if(z&&w.LEGACY_MAP&&w.LEGACY_MAP[z]){const O=w.LEGACY_MAP[z];f=O[0],C=O[1]}}C==null&&(C=45),m(f,C)}if(window.__quantModules&&window.__quantModules.preferences){const w=await window.__quantModules.preferences.loadPreferences();var h=localStorage.getItem("quant_last_page");!h&&w.default_view&&e.value.some(function(f){return f.key===w.default_view})&&(c.value=w.default_view),w.theme&&m(w.theme,w.theme_hue!=null&&w.theme_hue!==""?w.theme_hue:null),r&&(w.chart_period==="weekly"||w.chart_period==="monthly")&&(r.value=w.chart_period)}await Promise.all([$(W(),2e3,"userConfig"),$(o(),2e3,"dates")]),E().catch(()=>{}),N().catch(()=>{});const X=c.value==="strategies"?$(b(),2e3,"dashboard"):$(_(),2e3,"consensus");await Promise.all([X,$(K(),2e3,"users"),$(L(),2e3,"aiHistory")]),A().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:m,onUnmounted:e,watch:c,nextTick:d}=Vue,k=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},n=r.SUPPORTED_LOCALES||["zh-CN","en"],p=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(n.indexOf(p)!==-1?p:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const _=typeof r.t=="function"?r.t:function(F){return String(F)};function b(F){n.indexOf(F)!==-1&&(o.value=F,typeof r.setLocale=="function"&&r.setLocale(F),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",F))}function S(F,re){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(F,re):F==null?"":String(F)}function x(F){(F.key==="Enter"||F.key===" "||F.key==="Spacebar")&&(F.preventDefault(),F.currentTarget&&typeof F.currentTarget.click=="function"&&F.currentTarget.click())}let M=null;function V(){document.activeElement&&document.activeElement!==document.body&&(M=document.activeElement)}function P(){if(M&&M.isConnected)try{M.focus()}catch{}M=null}const v=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{v.value=!0}),window.addEventListener("offline",()=>{v.value=!1})),window.addEventListener("beforeunload",F=>{if(k.value)return F.preventDefault(),F.returnValue="您有未保存的配置变更，确定要离开吗？",F.returnValue});function l(F="light"){typeof navigator<"u"&&navigator.vibrate&&(F==="light"?navigator.vibrate(10):F==="medium"?navigator.vibrate(20):F==="heavy"&&navigator.vibrate([10,30,10]))}const g=useMerrillClock(),{merrillData:I,merrillStagesConfig:W,showMerrillDetail:E,merrillDetailData:N,merrillClockConfig:K,merrillClockLastUpdated:A,merrillReevalResult:L,merrillReevalLoading:H,stages:$,indicatorList:ee,dimensionScoreList:le,detailDimensionScoreList:ae,confidenceColor:D,timelineStages:s,clockPosition:y,merrillProgressStyle:i,FULL_CYCLE_MONTHS:h,getStageAngle:X,getCycleProgress:z,getCurrentStageMonths:w,getStageTotalMonths:f,isStageCompleted:C,getCharLabel:u,getAssetName:O,getRankColor:oe,fetchMerrillStages:J,fetchMerrillClock:T,loadMerrillTimeline:U,showTimelineStage:ie,merrillTimeline:ge,timelineLoading:qe,showStageDetail:Q,saveMerrillClockConfig:ue,doMerrillReevaluate:De,startAutoRefresh:se,stopAutoRefresh:be,merrillSnapshots:Pe,merrillSnapshotsTotal:me,fetchMerrillSnapshots:we}=g,xe=a(localStorage.getItem("sidebar_collapsed")==="1");function ce(){xe.value=!xe.value,localStorage.setItem("sidebar_collapsed",xe.value?"1":"0")}const te=a(null),fe=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","glossary","notification"],guestSubPages:["config","about"]}],Ne=t(()=>{var Qe,Bt,Yt;const F=((Qe=lt.value)==null?void 0:Qe.role)||"guest",re=((Bt=lt.value)==null?void 0:Bt.group)||F,ye=((Yt=te.value)==null?void 0:Yt[re])||null;return fe.map(Ot=>{if(ye&&ye.visible_menus&&Ot.key in ye.visible_menus&&!ye.visible_menus[Ot.key])return null;const ka={...Ot,name:_("nav."+Ot.key)||Ot.name};return ye!=null&&ye.visible_sub_pages&&(ka.subPages=Ot.subPages.filter(ds=>{const Dd=Ot.key+"."+ds;return ye.visible_sub_pages[Dd]!==!1})),Ot.key==="system"&&F==="guest"&&Ot.guestSubPages&&(ka.subPages=Ot.guestSubPages),ka}).filter(Boolean)});async function Be(){try{if(!localStorage.getItem("quant_token"))return;const re=await fetch("/api/groups/my");if(re.ok){const ye=await re.json();te.value={[ye.group_id]:ye.group}}}catch(F){console.warn("loadGroupConfig:",F)}}const We=a("strategies"),qt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},gt=a(qt.navMode);function Tt(F){const re=window.__quantModules&&window.__quantModules.navModeCore;gt.value=re?re.normalizeNavMode(F):F==="tree"||F==="toptab"?F:"toptab",re&&re.writePrefs({navMode:gt.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Ee(F,re=""){l("light"),We.value=F,Z.value=re,localStorage.setItem("quant_last_subpage",re)}function Ve(){const F=Ne.value;if(!F||!F.length)return;if(!F.some(function(Fe){return Fe.key===We.value})){const Fe=F[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),We.value=Fe.key,Z.value=Fe.subPages&&Fe.subPages[0]||"";return}const ye=F.find(function(Fe){return Fe.key===We.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(Z.value)&&(Z.value=ye.subPages[0])}const Oe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],$e=a("multifactor"),Xe=a(null),Ye=a(1e5),nt=a(!1),yt=a(null);let Et=null,Ft=null;async function aa(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const re={initial_capital:Ye.value||1e5};Xe.value&&Xe.value.length===2&&(re.start_date=Xe.value[0],re.end_date=Xe.value[1]),nt.value=!0,yt.value=null;try{const ye=await fetch("/api/strategies/"+$e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(!ye.ok){const Bt=await ye.json().catch(()=>({}));throw new Error(Bt.detail||"回测失败")}const Fe=await ye.json(),Qe=Fe.result||{};if(!Qe.success)throw new Error(Qe.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),yt.value={total_return_pct:((Qe.total_return??0)*100).toFixed(2),annual_return_pct:((Qe.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Qe.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Qe.sharpe_ratio??0).toFixed(2),win_rate:((Qe.win_rate??0)*100).toFixed(2),out_sample:Qe.outsample_total_return===void 0?"":((Qe.outsample_total_return??0)*100).toFixed(2),overfit_warning:Qe.overfit_warning||!1,message:Qe.message||""},j(Qe.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{nt.value=!1}}function j(F){const re=document.getElementById("backtestEquityChart");if(!re||!F||F.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{Ft=F,Et&&(Et.dispose(),Et=null),Et=echarts.init(re),Et.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Qe=F.map(Yt=>Yt.date||Yt[0]),Bt=F.map(Yt=>Yt.value??Yt[1]);Et.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Qe,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Bt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Ft&&j(Ft)}));const Z=a("overview");(function(){const F=window.QuantSessionRestore;if(F){const re=F.restore();re&&re.page&&(We.value=re.page,re.sub&&(Z.value=re.sub))}})(),Vue.watch(Z,function(){dn()});const Ce=t(()=>{const F=fe.find(re=>re.key===We.value);return F?F.name:We.value}),Ie=a(0),Ue=t(()=>{Ie.value;const F={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},re=Z.value;return We.value==="shortterm"&&re==="market-review"?"qc-research-page":We.value==="ops"&&re==="execution"?"qc-strategies-page":F[We.value]||""}),wt=a(!1),Je=a({}),Ge=a([]);a("");const kt=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),rt=a("day"),ft=a("all"),lt=a(null);c(Ne,function(){Ve()}),c([We,Z],function(){const F=document.querySelector(".main-content");F&&(F.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const F=localStorage.getItem("quant_user"),re=localStorage.getItem("quant_token");if(F&&re)try{lt.value=JSON.parse(F)}catch{}}();const Ht=a(!1),_t=a("kline"),G=a(null),ke=a(!1),je=a(localStorage.getItem("qc_detail_mode")||"split"),ct=a(window.innerWidth<=1024),zt=t(()=>je.value==="split"&&!ct.value);function Pt(F){je.value=F;try{localStorage.setItem("qc_detail_mode",F)}catch{}}window.addEventListener("resize",()=>{ct.value=window.innerWidth<=1024});const vt=35,Dt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Kt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Dt.value?Dt.value+"px":vt+"%")}Kt();function Jt(F){const re=Math.max(1,Math.min(F,2e3));Dt.value=re,Kt();try{localStorage.setItem("qc_split_width",String(re))}catch{}}function xt(F){if(Dt.value)return Dt.value;const re=F?F.getBoundingClientRect().width:0;return Math.max(200,Math.floor(re*vt/100))}let pt=null;function Zt(F,re){if(!re||ct.value)return;F.preventDefault();const ye=re.getBoundingClientRect().width;pt={startX:F.clientX,startW:xt(re),minW:Math.max(200,Math.floor(ye*vt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function Rt(F){if(!pt)return;const re=F.clientX-pt.startX;let ye=pt.startW+re;ye=Math.max(pt.minW,Math.min(ye,pt.maxW)),Dt.value=ye,Kt();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function ra(){pt&&(pt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Rt),document.addEventListener("mouseup",ra));function Qt(F){const re=F.target&&F.target.closest?F.target.closest("[data-split-resize]"):null;if(!re)return;const ye=re.closest("[data-split-root]");Zt(F,ye)}typeof document<"u"&&document.addEventListener("mousedown",Qt,!0);const sa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于",glossary:"术语表"},dt=a({});function $t(F,re){return sa[re]||re}function ca(F){const re=fe.find(Fe=>Fe.key===F);if(!re||!re.subPages||!re.subPages.length)return;if(!(dt.value[F]||[]).length){const Fe=re.subPages[0];dt.value=Object.assign({},dt.value,{[F]:[{subPage:Fe,title:$t(F,Fe)}]})}}function ya(F,re){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=$t(F,re);if(ye){const Qe=ye.openTab(dt.value,F,re,Fe);dt.value=Qe.groups}else{const Qe=dt.value[F]||[];Qe.some(Bt=>Bt.subPage===re)||(dt.value=Object.assign({},dt.value,{[F]:Qe.concat([{subPage:re,title:Fe}])}))}Ee(F,re)}function _a(F,re){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=Z.value;let Qe=null;if(ye)Qe=ye.closeTab(dt.value,F,re,Fe),dt.value=Qe.groups;else{const Ot=dt.value[F]||[];dt.value=Object.assign({},dt.value,{[F]:Ot.filter(ka=>ka.subPage!==re)})}if(!(dt.value[F]||[]).length){ca(F);const Ot=fe.find(ds=>ds.key===F),ka=Ot&&Ot.subPages&&Ot.subPages[0];ka&&Ee(F,ka);return}const Yt=Qe?Qe.nextActive:null;Yt&&Ee(F,Yt)}function na(F,re){if(!(dt.value[F]||[]).some(Fe=>Fe.subPage===re)){ya(F,re);return}Ee(F,re)}c([We,Z],([F,re])=>{ca(F);const ye=dt.value[F]||[];re&&!ye.some(Fe=>Fe.subPage===re)&&(dt.value=Object.assign({},dt.value,{[F]:ye.concat([{subPage:re,title:$t(F,re)}])}))},{immediate:!0});const B=function(F){if(!(F.ctrlKey&&F.key==="Tab"))return;const re=We.value,ye=dt.value[re]||[];if(ye.length<=1)return;F.preventDefault();const Fe=Z.value,Qe=Math.max(0,ye.findIndex(Ot=>Ot.subPage===Fe)),Bt=F.shiftKey?(Qe-1+ye.length)%ye.length:(Qe+1)%ye.length,Yt=ye[Bt];Yt&&na(re,Yt.subPage)};window.addEventListener("keydown",B);const _e=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),He=a("light"),ze=[45,220,0,140,270,320,-1],ut={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},et=a(45),It=a(function(){const F=window.__quantModules&&window.__quantModules.preferences;return F&&F.getPreference&&F.getPreference("theme")||"system"}());(function(){const F=window.__quantModules&&window.__quantModules.preferences,re=F&&F.getPreference&&F.getPreference("theme_hue");re!=null&&re!==""&&(et.value=parseInt(re,10))})();const Wt=a("comfortable");(function(){const F=window.__quantModules&&window.__quantModules.preferences;F&&F.applyDensity&&(Wt.value=F.applyDensity()||"comfortable")})();function Ut(F){return F<0?"hsl(0, 0%, 46%)":"hsl("+F+", 75%, 42%)"}function xa(F){return ut[F]||"自定义 "+F}const ba=a(""),da=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),la=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Aa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ua=a({day:[],week:[],month:[],year:[]}),La=a({});function va(F,re){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(F,re)),He.value=ye&&ye.mode?ye.mode:F==="dark"||F==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ta(F,re){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:F}),re!=null&&re!==""&&ye.setPreferences({theme_hue:parseInt(re,10)})}catch{}}function wa(F,re){va(F,re),re!=null&&re!==""&&(et.value=parseInt(re,10));const ye=window.__quantModules&&window.__quantModules.themes;let Fe=F;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[F]&&(Fe=ye.LEGACY_MAP[F][0]),Fe==="light"||Fe==="dark"||Fe==="system"?It.value=Fe:It.value=He.value,Fe==="system"&&(Fe=He.value),Ta(Fe,re),lt.value&&(fetch(`/api/users/${lt.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),lt.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(lt.value)))}function Ia(F){const re=window.__quantModules&&window.__quantModules.preferences,ye=re&&re.getPreference?re.getPreference("theme_hue"):null;wa(F,ye)}function Na(F){const re=window.__quantModules&&window.__quantModules.preferences;!re||!re.applyDensity||(Wt.value=re.applyDensity(F)||"comfortable",re.setPreference&&re.setPreference("info_density",Wt.value))}function Gt(F){et.value=parseInt(F,10);const re=window.__quantModules&&window.__quantModules.preferences,ye=re&&re.getPreference&&re.getPreference("theme")||"light";wa(ye,et.value)}const ma=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function q(F){ma.value=!!F;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",F?"show":"hide")}catch{}}const Y=t(()=>{const F=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ma.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...F]:F}),Ae=a("daily");(function(){try{const re=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(re==="weekly"||re==="monthly")&&(Ae.value=re)}catch{}})();const mt=a(!1),R=a(""),ne=a(!1),de=a(!1),Me=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Re=["MA5","MA10","MA20","MA60"],At=a(!1);let at=0;async function ht(F){if(!G.value)return!1;const re=++at;mt.value=!0,Ae.value=F;try{const Fe=await(await fetch(`/api/market/kline/${G.value.stock}?period=${F}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return R.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",en(G.value.stock),re!==at?!1:(_t.value!=="kline"||(de.value=!0,await d(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,F,!1,{isMobile:gs.value,onLegend:Qe=>{Object.keys(Me.value).forEach(Bt=>{Bt in Qe&&(Me.value[Bt]=!!Qe[Bt])})}}),St()),!0)}catch(ye){return console.error("[kline] 加载失败:",G.value&&G.value.stock,F,ye),_t.value==="kline"&&(de.value=!1,R.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{mt.value=!1}}async function Xt(F){if(Ja.value){ne.value=!0,Ae.value=F;try{const ye=await(await fetch(`/api/market/kline/${Ja.value.code}?period=${F}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");At.value=!0,await d(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,F,!0,{isMobile:gs.value,onLegend:Fe=>{Object.keys(Me.value).forEach(Qe=>{Qe in Fe&&(Me.value[Qe]=!!Fe[Qe])})}}),St()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ne.value=!1}}}async function Lt(F){if(!de.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await ht(F)}async function fa(F){if(!At.value){ElementPlus.ElMessage.info("请先加载K线");return}await Xt(F)}function ia(F){const re=(Ht.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ya.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);re&&re.dispatchAction({type:"legendToggleSelect",name:F})}function St(){["K线","MA5","MA10","MA20","MA60"].forEach(F=>{Me.value[F]=!0})}async function Ze(){const F=await fetch("/api/system/metrics");if(!F.ok)throw new Error("metrics "+F.status);const re=await F.json(),ye=Array.isArray(re)?re:re&&re.data_sources||[];Ge.value=ye}const Nt=()=>cs,Sa=()=>Ps,Mt=()=>Uo,Ga=()=>Oa,gn=()=>ns,hn=window.__quantAppLogic.data.create({currentView:rt,statusFilter:ft,dashboardData:Je,loadHealthMetrics:Ze,getLoadDashboardData:Nt,getLastRefreshTime:Sa,getFetchPoolSignals:Mt}),{loading:yn,loadingView:bn,viewCache:wn,dates:Va,selectedDate:ea,lastLoadTime:kn,consensus:Ca,viewNote:_n,loadDates:vs,refreshCalendarData:ms,exportCSV:fs,loadConsensusData:Pa,loadDashboardCached:Fa}=hn,xn=window.__quantAppLogic.market.create({currentKlinePeriod:Ae,loadIndexKline:Xt,rememberDialogTrigger:V,menus:Ne,currentPage:We,currentSubPage:Z,stockDetail:G,selectedDate:ea}),{marketData:Sn,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:Cn,indexAiLoading:qn,fetchMarketData:Qa,showIndexDetail:En,loadCachedIndexEval:Mn,doIndexAiEvaluate:Tn,disposeStockKline:ps,isMobile:gs,zoomKlineRange:Pn,scoreAnimating:Dn,scoreDelta:Rn,scorePulse:zn,refreshStockScore:$a,animateScoreEntrance:Xa,onTouchStart:An,onTouchEnd:Ln}=xn,In=window.__quantAppLogic.ops.create({navigateTo:Ee,currentPage:We,currentSubPage:Z}),{feishuConfig:hs,feishuTestStatus:Nn,feishuTestMessage:On,testFeishuWebhook:jn,saveFeishuConfig:Vn,aiFabHidden:Fn,openAiFab:ys,strategyRecommendations:Hn,aiUsage:Bn,loadStrategyRecommendations:bs,loadAiUsage:Za,sysMonitor:Kn,analyticsRank:Wn,analyticsDays:Un,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Gn,loadHealthDetail:_s,reviewTriggering:Yn,triggerMarketReview:Jn,factCheck:Qn,factCheckRunning:$n,loadFactCheck:xs,triggerFactCheck:Xn,backups:Zn,backupCreating:el,loadBackups:Ss,createBackup:tl,restoreBackup:al,reportExporting:sl,reportExportMsg:nl,exportReport:ll,tourVisible:il,tourStep:ol,tourSteps:rl,maybeShowTour:cl,skipTour:dl,finishTour:ul,feedbackText:vl,feedbackSubmitting:ml,submitFeedback:fl}=In,pl=window.__quantAppLogic.nav.create({currentView:rt,selectedDate:ea,dates:Va,loadConsensusData:Pa,hapticFeedback:l}),{viewUnit:gl,datePickerType:hl,dateFormat:yl,canNavPrev:bl,canNavNext:wl,switchView:Cs,navigateDate:qs,disabledDate:kl,onDateChange:_l}=pl,xl=window.__quantAppLogic.keys.create({menus:Ne,subPageNames:sa,navigateTo:Ee,currentPage:We,currentView:rt,navigateDate:qs,switchView:Cs,getLoadDashboardData:Nt,refreshCalendarData:ms,getLoadAiHistory:Ga,exportCSV:fs,getShowBatchEvaluate:gn,openAiFab:ys,toggleSidebar:ce,showStockDetail:Ms}),{searchQuery:Sl,searchStocks:Cl,onSearchSelect:ql,shortcutHelpVisible:El,commandPaletteVisible:Ml,handleGlobalKeydown:Es}=xl;let Ha=0;async function Ms(F){const re=++Ha;V(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(F,""),ts.value=null,Ae.value="daily",de.value=!1,_t.value="kline",G.value=null,ke.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ht.value=!0,d(()=>Xa());try{const ye=await fetch(`/api/calendar/stock/${F}?date=${ea.value}`);if(re!==Ha)return;G.value=await ye.json(),G.value&&G.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(F,G.value.name)}catch{if(re!==Ha)return;ElementPlus.ElMessage.error("加载失败"),G.value={stock:F,name:"",total_days:0}}finally{re===Ha&&(ke.value=!1)}setTimeout(async()=>{await ht("daily"),$a()},500),ls(F)}const Tl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Pl={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Dl(F){return Tl[F]||"var(--text-tertiary)"}function Rl(F){return Pl[F]||"var(--bg-hover)"}const zl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:de,stockDetailVisible:Ht,stockDetailTab:_t,stockDetail:G,disposeStockKline:ps}):{},{chatSessions:Al,chatHistoryView:Ll,selectedChatIds:Il,expandedChatDates:Nl,expandedChatMonths:Ol,expandedChatStocks:jl,chatHistoryLoading:Vl,chatHistoryError:Fl,allChatSessionsFlat:Hl,chatGroupedByDate:Bl,chatGroupedByMonth:Kl,chatGroupedByStock:Wl,toggleSelectChat:Ul,toggleSelectChatDate:Gl,toggleSelectChatMonth:Yl,toggleSelectChatStock:Jl,toggleChatDateExpand:Ql,toggleChatMonthExpand:$l,toggleChatStockExpand:Xl,selectAllChatSessions:Zl,deleteSelectedChatSessions:ei,viewChatSession:ti,loadChatHistory:Ts,deleteChatSession:ai,renderMarkdown:si,stockChatInput:ni,stockChatMessages:li,stockChatLoading:ii,stockChatError:oi,askStockSend:ri,askStockQuick:ci}=zl,di=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:lt,applyTheme:va,allMenuDefs:fe,loadGroupConfig:Be}):{},{userList:ui,userSearch:vi,groupFilter:mi,userPageTab:fi,expandedGroups:pi,addMemberGroupMap:gi,filteredUsers:hi,toggleGroupExpand:yi,removeMemberFromGroupInline:bi,addMemberToGroupInline:wi,changeUserGroup:ki,showAddUser:_i,editingUser:xi,userForm:Si,savingUser:Ci,editingGroup:qi,menuConfigDialog:Ei,memberDialog:Mi,groupEditForm:Ti,subPageCache:Pi,showAddGroup:Di,addGroupForm:Ri,savingGroup:zi,groupMembers:Ai,addMemberUsername:Li,selectedMemberGroup:Ii,subPageSectionExpanded:Ni,toggleSubPageSection:Oi,getGroupMemberCount:ji,getMenuEnabledCount:Vi,groupCount:Fi,openMemberManager:Hi,loadGroupMembers:Bi,addMemberToGroup:Ki,removeMemberFromGroup:Wi,availableUsersForGroup:Ui,onParentToggle:Gi,openMenuConfig:Yi,saveMenuConfig:Ji,deleteGroupConfig:Qi,createGroup:$i,allGroups:Xi,getGroupName:Zi,loadAllGroups:es,loadUsers:Ba,editUser:eo,saveUser:to,deleteUser:ao,toggleUserEnabled:so,resetUserPassword:no}=di,lo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:Ca,currentPage:We,currentSubPage:Z,dashboardData:Je,searchKeyword:ba,statusFilter:ft,strategyFilter:la,strategyFilterCounts:ua}):{},{applyStrategyFilter:og,statusCounts:io,stockPool:oo,strategyDistribution:ro,strategyPreviewCount:co,saveStrategyFilter:uo,filteredConsensusRank:vo,currentPoolSize:mo,filteredStrategyCounts:fo,poolChangeBadge:po,timeBarPercent:go,lastRefreshTime:Ps,navigateToStrategyFilter:ho}=lo,yo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:k,consensus:Ca}):{},{aiResult:ts,lastEvalTime:bo,evalHistoryComparison:wo,checklistItems:ko,aiHistory:Ds,selectedHistoryIds:Rs,expandedDates:zs,expandedMonths:_o,expandedStocks:As,poolSignals:xo,toggleMonthExpand:So,aiHistoryView:Co,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateScope:Os,aiVendors:qo,aiCatalog:Eo,aiModelsError:Mo,testingAllModels:To,savingAiModels:Po,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Do,testVendorModel:Ro,testAllVendorModels:zo,fetchVendorModels:Ao,addVendorFromCatalog:Lo,addCustomVendor:Io,addVendorModel:No,removeVendorModel:Oo,removeVendor:jo,toggleVendorKeyReveal:Vo,toggleVendorEdit:Fo,autoEvaluateConfig:as,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ns,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,selectedPreset:Ho,providerInfo:Bo,aiPresets:rg,applyPreset:Ko,onProviderChange:Wo,fetchPoolSignals:Uo,cancelPoolSignals:Zs,loadLastEvaluation:ls}=yo,Go=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:lt,selectedDate:ea,stockDetail:G,stockDetailTab:_t,stockDetailVisible:Ht,stockDetailLoading:ke,stockKlineLoaded:de,viewCache:wn,animateScoreEntrance:Xa,loadStockKline:ht,refreshStockScore:$a,disposeStockKline:ps,aiHistory:Ds,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,aiResult:ts,loadLastEvaluation:ls,autoEvaluateConfig:as,autoEvaluateScope:Os,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,expandedDates:zs,expandedStocks:As,savingConfig:Ns,selectedHistoryIds:Rs,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,showBatchEvaluate:ns}):{},{quickEvalStock:Yo,evalStrategy:Jo,watchlistSort:Qo,watchlist:$o,watchlistCodes:Xo,sortedWatchlist:Zo,getWatchlistScore:er,getLatestScore:cg,addSearchResult:tr,evaluatedCodes:ar,klineLoadedCodes:sr,markKlineLoaded:en,watchlistSearch:nr,watchlistResults:lr,watchlistSearching:ir,dataRefreshConfig:or,dataRefreshReloading:rr,dataRefreshSaving:cr,aiHistoryLoading:dr,aiHistoryError:ur,aiHistoryTotal:vr,aiHistoryLoadingMore:mr,hasMoreAiHistory:fr,loadMoreAiHistory:pr,watchlistLoading:gr,doAiEvaluate:hr,loadAiHistory:Oa,deleteSingleHistory:yr,toggleSelectHistory:br,clearSelection:wr,clearWatchlistSelection:kr,batchReevaluateHistory:_r,batchAddToWatchlist:xr,batchRemoveWatchlist:Sr,toggleSelectWatchlist:Cr,selectAllHistory:qr,selectAllWatchlist:Er,deleteSelectedHistory:Mr,loadAutoEvaluateConfig:tn,saveAutoEvaluateConfig:Tr,loadWatchlist:an,addToWatchlist:Pr,removeFromWatchlist:Dr,clearWatchlist:Rr,toggleWatchlist:zr,showStockKline:Ar,preloadingKline:Lr,preloadWatchlistKline:sn,watchlistEvaluate:Ir,batchEvaluateWatchlist:Nr,batchEvaluateSelected:Or,searchStockForWatchlist:jr,loadDataRefreshConfig:nn,saveDataRefreshConfig:Vr,triggerDataReload:Fr,triggerDataPull:Hr,dataPullRunning:Br,groupedByDate:Kr,aiHistoryByStock:Wr,groupedByMonth:Ur,aiHistoryStockCount:Gr,scoreDistribution:Yr,quickEvaluate:Jr,toggleDateExpand:Qr,toggleSelectDate:$r,toggleSelectMonth:Xr,toggleStockExpand:Zr,toggleSelectStock:ec,registerTrendChart:tc,viewAiResult:ac,doBatchEvaluate:sc,realtimeQuotes:nc,realtimeDegraded:lc,realtimeWsState:ic,connectRealtimeQuotes:oc,disconnectRealtimeQuotes:rc,quoteWarningFor:cc,realtimeQuoteColor:dc,realtimePriceText:uc,realtimePctText:vc,realtimeRatioText:mc,REALTIME_DEGRADED_TEXT:fc,REALTIME_FALLBACK_TEXT:pc}=Go,gc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Oe}):{},{btStrategyOptions:hc,btSelectedStrategies:yc,toggleBtStrategy:bc,btDateRange:wc,btCapital:kc,btCommissionRate:_c,btIncludeBenchmark:xc,btRunning:Sc,btResult:Cc,btError:qc,btMetrics:Ec,btAnnualReturns:Mc,btTrades:Tc,btStrategyMetricsRows:Pc,btDrawdownRegion:Dc,runBacktestWorkbench:Rc,exportBacktestCSV:zc,registerBacktestNavChart:Ac,btFmtNum:Lc}=gc,Ic=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:k,aiConfig:Xs,aiLoading:ss,feishuConfig:hs,currentTheme:He,changeTheme:wa,autoEvaluateConfig:as,currentUser:lt,strategyFilter:la,applyTheme:va,dashboardData:Je,lastRefreshTime:Ps,saveAiModels:Do}):{},{configSaving:Nc,globalConfigDirty:Oc,lastSavedTime:jc,feishuConfigOriginal:dg,aiConfigOriginal:ug,tushareConfigOriginal:vg,tushareConfig:Vc,tushareStatus:Fc,datasourceConfig:Hc,datasourceStatus:Bc,syncingData:Kc,stockCount:Wc,tradeDateCount:Uc,aiStatus:Gc,appVersion:ln,showImportDialog:Yc,rateLimitConfig:Jc,rateLimitDirty:Qc,rateLimitSaving:$c,loadRateLimit:is,saveRateLimit:Xc,saveAiConfig:Zc,testAiApi:ed,exportConfig:td,importConfig:ad,saveAllConfig:sd,resetAllConfig:nd,testTushareConnection:ld,checkTushareConnection:Wa,syncStockData:id,loadTushareConfig:on,loadDatasourceConfig:rn,saveDatasourceConfig:od,testDatasource:rd,toggleDatasourceKeyReveal:cd,toggleDatasourceEdit:dd,loadFeishuConfig:os,loadAiConfig:Ua,loadUserConfig:cn,loadSystemStatus:rs,loadDashboardData:cs}=Ic,ud=window.__quantAppLogic.auth.create({currentUser:lt,loadUserConfig:cn,loadDates:vs,loadDashboardData:cs,loadDashboardCached:Fa,loadHealthMetrics:Ze,loadConsensusData:Pa,applyTheme:va,maybeShowTour:cl,loadAiVendors:Ka,loadGroupConfig:Be,groupsConfig:te}),{loginForm:vd,logining:md,guestLogining:fd,showChangePassword:pd,changePasswordForm:gd,changingPassword:hd,showSetupWizard:yd,setupForm:bd,setupStep:wd,checkSetupWizard:kd,completeSetupWizard:_d,resetSetupWizard:xd,handleLogin:Sd,handleGuestLogin:Cd,handleLogout:qd,doChangePassword:Ed}=ud;window.__quantAppLogic.watch.register({strategyFilter:la,currentView:rt,statusFilter:ft,currentPage:We,currentSubPage:Z,menus:Ne,currentUser:lt,strategyFilterCounts:ua,lazyTick:Ie,dates:Va,selectedDate:ea,consensus:Ca,loadConsensusData:Pa,fetchMerrillClock:T,fetchMarketData:Qa,loadWatchlist:an,loadAiHistory:Oa,preloadWatchlistKline:sn,loadChatHistory:Ts,loadSystemStatus:rs,checkTushareConnection:Wa,loadSysMonitor:ws,loadAnalytics:ks,loadHealthDetail:_s,loadHealthMetrics:Ze,loadAiUsage:Za,loadFactCheck:xs,loadAutoEvaluateConfig:tn,loadDatasourceConfig:rn,loadFeishuConfig:os,loadAiConfig:Ua,loadAiVendors:Ka,loadRateLimit:is,loadDataRefreshConfig:nn,loadBackups:Ss,loadAllGroups:es,loadUsers:Ba,stockDetailTab:_t,stockDetailVisible:Ht,stockKlineLoaded:de,loadStockKline:ht,currentKlinePeriod:Ae,showMerrillDetail:E,indexDetailVisible:Ya,restoreDialogFocus:P});const Md=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Es,applyTheme:va,menus:Ne,currentPage:We,currentSubPage:Z,currentView:rt,currentKlinePeriod:Ae,selectedDate:ea,dates:Va,loadDates:vs,loadConsensusData:Pa,loadDashboardCached:Fa,appVersion:ln,themes:_e,fetchMarketData:Qa,fetchMerrillStages:J,fetchMerrillClock:T,loadMerrillTimeline:U,showTimelineStage:ie,merrillTimeline:ge,timelineLoading:qe,loadAiConfig:Ua,loadAiVendors:Ka,loadAiCatalog:js,currentUser:lt,loadUserConfig:cn,loadAutoEvaluateConfig:tn,loadGroupConfig:Be,loadUsers:Ba,loadAllGroups:es,loadAiHistory:Oa}),{runOnMounted:Td}=Md;window.__quantGoPage=async(F,re)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[F];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",F,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Ie&&Ie.value++,We.value=F,re&&(Z.value=re)};let Da;function dn(){const F=window.QuantSessionRestore;F&&F.save({page:We.value,sub:Z.value||""})}c(We,async F=>{var re;l("light"),dn();try{const ye=fe.find(function(Fe){return Fe.key===F});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",F),F!=="calendar"&&typeof Zs=="function"&&Zs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:F})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Da&&(clearInterval(Da),Da=null),F==="strategies")await Fa(),Da=setInterval(()=>{Fa().catch(()=>{})},5*60*1e3);else if(F==="calendar")ea.value&&await Pa();else if(F==="ai")bs(),Za(),await Oa();else if(F==="system"){if(!ea.value){const Fe=await(await fetch("/api/dashboard")).json(),Qe=Fe.data||Fe;Qe.latest_date&&(ea.value=Qe.latest_date)}if(ea.value){const ye=["day","week","month","year"];for(const Fe of ye)try{const Bt=await(await fetch(`/api/view/${Fe}/${ea.value}?status=all`)).json();ua.value[Fe]=Bt.stocks||[]}catch(Qe){console.warn("loadConsensusData view load failed:",Qe)}(!Ca.value||Ca.value.length===0)&&(Ca.value=ua.value.day||[])}((re=lt.value)==null?void 0:re.role)==="admin"&&(await Ba(),await os(),await on(),await rs(),await Ua(),await is(),Wa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Wa,36e5)))}}),m(async()=>{await Td()}),se(),U(),e(()=>{Da&&clearInterval(Da),window.removeEventListener("keydown",Es),window.removeEventListener("keydown",B)});function Pd(F,re=2){return F==null||F===""||isNaN(Number(F))?"--":Number(F).toFixed(re)}return{currentPage:We,pageComp:Ue,currentSubPage:Z,sidebarCollapsed:xe,menus:Ne,navMode:gt,setNavMode:Tt,tabGroups:dt,openTab:ya,closeTab:_a,activateTab:na,fmtNum:Pd,sanitizeHtml:S,keyClick:x,isOnline:v,currentUser:lt,allMenuDefs:fe,t:_,locale:o,changeLanguage:b,currentPageName:Ce,subPageNames:sa,searchQuery:Sl,searchStocks:Cl,onSearchSelect:ql,selectedDate:ea,onDateChange:_l,disabledDate:kl,refreshCalendarData:ms,exportCSV:fs,viewNote:_n,loading:yn,lastLoadTime:kn,resetSetupWizard:xd,showChangePassword:pd,themes:_e,currentTheme:He,changeTheme:wa,changeThemeMode:Ia,changeThemeHue:Gt,handleLogout:qd,themeHues:ze,themeHueNames:ut,themeHue:et,themeMode:It,hueColor:Ut,hueName:xa,density:Wt,changeDensity:Na,marketData:Sn,merrillData:I,merrillTimeline:ge,timelineLoading:qe,merrillStagesConfig:W,fetchMerrillStages:J,merrillSnapshots:Pe,merrillSnapshotsTotal:me,healthMetrics:Ge,feishuConfig:hs,feishuTestStatus:Nn,feishuTestMessage:On,shortcutHelpVisible:El,shortcutHelpItems:Se,commandPaletteVisible:Ml,tourVisible:il,tourStep:ol,tourSteps:rl,skipTour:dl,finishTour:ul,backups:Zn,backupCreating:el,loadBackups:Ss,createBackup:tl,restoreBackup:al,reportExporting:sl,reportExportMsg:nl,exportReport:ll,sysMonitor:Kn,analyticsRank:Wn,analyticsDays:Un,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Gn,loadHealthDetail:_s,reviewTriggering:Yn,triggerMarketReview:Jn,factCheck:Qn,factCheckRunning:$n,loadFactCheck:xs,triggerFactCheck:Xn,strategyRecommendations:Hn,aiUsage:Bn,loadStrategyRecommendations:bs,loadAiUsage:Za,aiFabHidden:Fn,openAiFab:ys,feedbackText:vl,feedbackSubmitting:ml,submitFeedback:fl,backtestStrategies:Oe,backtestStrategy:$e,backtestRange:Xe,backtestCapital:Ye,backtestRunning:nt,backtestResult:yt,runBacktest:aa,btStrategyOptions:hc,btSelectedStrategies:yc,toggleBtStrategy:bc,btDateRange:wc,btCapital:kc,btCommissionRate:_c,btIncludeBenchmark:xc,btRunning:Sc,btResult:Cc,btError:qc,btMetrics:Ec,btAnnualReturns:Mc,btTrades:Tc,btStrategyMetricsRows:Pc,btDrawdownRegion:Dc,runBacktestWorkbench:Rc,exportBacktestCSV:zc,registerBacktestNavChart:Ac,btFmtNum:Lc,fetchMarketData:Qa,fetchMerrillClock:T,testFeishuWebhook:jn,saveFeishuConfig:Vn,merrillClockConfig:K,merrillClockLastUpdated:A,merrillReevalResult:L,merrillReevalLoading:H,saveMerrillClockConfig:ue,doMerrillReevaluate:De,dataRefreshConfig:or,dataRefreshReloading:rr,dataRefreshSaving:cr,loadDataRefreshConfig:nn,saveDataRefreshConfig:Vr,triggerDataReload:Fr,triggerDataPull:Hr,dataPullRunning:Br,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:Cn,indexAiLoading:qn,loadCachedIndexEval:Mn,showIndexDetail:En,doIndexAiEvaluate:Tn,klinePeriods:Y,currentKlinePeriod:Ae,klineLoading:mt,indexKlineLoading:ne,stockKlineLoaded:de,indexKlineLoaded:At,klineDegradeNote:R,klineShowMinutes:ma,toggleKlineShowMinutes:q,loadStockKline:ht,switchKlinePeriod:Lt,loadIndexKline:Xt,switchIndexKlinePeriod:fa,zoomKlineRange:Pn,MA_LINES:Re,klineMaVisible:Me,toggleKlineMa:ia,scoreAnimating:Dn,scoreDelta:Rn,scorePulse:zn,refreshStockScore:$a,animateScoreEntrance:Xa,showMerrillDetail:E,merrillDetailData:N,showStageDetail:Q,getCharLabel:u,getAssetName:O,getRankColor:oe,levelColor:Dl,levelBg:Rl,timelineStages:s,getStageAngle:X,getCycleProgress:z,getCurrentStageMonths:w,getStageTotalMonths:f,isStageCompleted:C,stages:$,indicatorList:ee,dimensionScoreList:le,confidenceColor:D,views:kt,currentView:rt,statusFilter:ft,loginForm:vd,logining:md,guestLogining:fd,dashboardData:Je,loadingView:bn,dates:Va,consensus:Ca,searchKeyword:ba,stockDetailVisible:Ht,stockDetailTab:_t,stockDetail:G,stockDetailLoading:ke,detailDisplayMode:je,setDetailDisplayMode:Pt,isNarrow:ct,detailSplitEnabled:zt,splitWidth:Dt,setSplitWidth:Jt,SPLIT_DEFAULT_PCT:vt,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ns,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,userList:ui,showAddUser:_i,editingUser:xi,userForm:Si,savingUser:Ci,userSearch:vi,filteredUsers:hi,groupFilter:mi,userPageTab:fi,expandedGroups:pi,addMemberGroupMap:gi,toggleGroupExpand:yi,removeMemberFromGroupInline:bi,addMemberToGroupInline:wi,changeUserGroup:ki,statusCounts:io,stockPool:oo,poolSignals:xo,aiResult:ts,aiHistory:Ds,groupedByDate:Kr,groupedByMonth:Ur,expandedDates:zs,expandedMonths:_o,aiHistoryByStock:Wr,aiHistoryStockCount:Gr,expandedStocks:As,aiHistoryView:Co,aiHistoryLoading:dr,aiHistoryError:ur,aiHistoryTotal:vr,aiHistoryLoadingMore:mr,hasMoreAiHistory:fr,loadMoreAiHistory:pr,watchlistLoading:gr,scoreDistribution:Yr,quickEvalStock:Yo,evalStrategy:Jo,checklistItems:ko,evalHistoryComparison:wo,quickEvaluate:Jr,selectedHistoryIds:Rs,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateConfig:as,autoEvaluateScope:Os,strategyList:da,toggleDateExpand:Qr,toggleMonthExpand:So,toggleSelectDate:$r,toggleSelectMonth:Xr,toggleSelectStock:ec,toggleStockExpand:Zr,registerTrendChart:tc,selectedWatchlistCodes:Ls,clearWatchlistSelection:kr,toggleSelectWatchlist:Cr,selectAllHistory:qr,selectAllWatchlist:Er,batchRemoveWatchlist:Sr,batchEvaluateSelected:Or,batchReevaluateHistory:_r,batchAddToWatchlist:xr,viewUnit:gl,datePickerType:hl,dateFormat:yl,canNavPrev:bl,canNavNext:wl,handleLogin:Sd,handleGuestLogin:Cd,switchView:Cs,navigateDate:qs,navigateTo:Ee,loadDashboardData:cs,loadConsensusData:Pa,showStockDetail:Ms,doAiEvaluate:hr,doBatchEvaluate:sc,loadAiHistory:Oa,loadLastEvaluation:ls,lastEvalTime:bo,viewAiResult:ac,saveAiConfig:Zc,testAiApi:ed,exportConfig:td,importConfig:ad,configSaving:Nc,configChanged:k,watchlist:$o,watchlistCodes:Xo,watchlistSearch:nr,watchlistResults:lr,watchlistSearching:ir,watchlistSort:Qo,sortedWatchlist:Zo,getWatchlistScore:er,addSearchResult:tr,evaluatedCodes:ar,klineLoadedCodes:sr,markKlineLoaded:en,loadWatchlist:an,addToWatchlist:Pr,removeFromWatchlist:Dr,clearWatchlist:Rr,searchStockForWatchlist:jr,toggleWatchlist:zr,batchEvaluateWatchlist:Nr,watchlistEvaluate:Ir,showStockKline:Ar,preloadWatchlistKline:sn,preloadingKline:Lr,realtimeQuotes:nc,realtimeDegraded:lc,realtimeWsState:ic,connectRealtimeQuotes:oc,disconnectRealtimeQuotes:rc,quoteWarningFor:cc,realtimeQuoteColor:dc,realtimePriceText:uc,realtimePctText:vc,realtimeRatioText:mc,REALTIME_DEGRADED_TEXT:fc,REALTIME_FALLBACK_TEXT:pc,toggleSelectHistory:br,clearSelection:wr,deleteSingleHistory:yr,deleteSelectedHistory:Mr,saveAutoEvaluateConfig:Tr,editUser:eo,saveUser:to,deleteUser:ao,loadUsers:Ba,allGroups:Xi,loadAllGroups:es,getGroupName:Zi,toggleUserEnabled:so,resetUserPassword:no,selectedPreset:Ho,applyPreset:Ko,onProviderChange:Wo,providerInfo:Bo,globalConfigDirty:Oc,lastSavedTime:jc,tushareConfig:Vc,tushareStatus:Fc,syncingData:Kc,stockCount:Wc,tradeDateCount:Uc,aiStatus:Gc,appVersion:ln,showImportDialog:Yc,rateLimitConfig:Jc,rateLimitDirty:Qc,rateLimitSaving:$c,loadRateLimit:is,saveRateLimit:Xc,saveAllConfig:sd,resetAllConfig:nd,testTushareConnection:ld,syncStockData:id,loadTushareConfig:on,loadFeishuConfig:os,loadSystemStatus:rs,loadAiConfig:Ua,aiVendors:qo,aiCatalog:Eo,aiModelsError:Mo,testingAllModels:To,savingAiModels:Po,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Vs,testVendorModel:Ro,testAllVendorModels:zo,fetchVendorModels:Ao,addVendorFromCatalog:Lo,addCustomVendor:Io,addVendorModel:No,removeVendorModel:Oo,removeVendor:jo,toggleVendorKeyReveal:Vo,toggleVendorEdit:Fo,checkTushareConnection:Wa,datasourceConfig:Hc,datasourceStatus:Bc,loadDatasourceConfig:rn,saveDatasourceConfig:od,testDatasource:rd,toggleDatasourceKeyReveal:cd,toggleDatasourceEdit:dd,strategyFilter:la,strategyFilterOptions:Aa,strategyFilterCounts:ua,strategyPreviewCount:co,saveStrategyFilter:uo,filteredConsensusRank:vo,currentPoolSize:mo,filteredStrategyCounts:fo,strategyDistribution:ro,expandedStrategies:La,poolChangeBadge:po,timeBarPercent:go,navigateToStrategyFilter:ho,showUserMenu:wt,toggleSidebar:ce,groupsConfig:te,loadGroupConfig:Be,editingGroup:qi,groupEditForm:Ti,showAddGroup:Di,addGroupForm:Ri,savingGroup:zi,menuConfigDialog:Ei,memberDialog:Mi,groupMembers:Ai,addMemberUsername:Li,selectedMemberGroup:Ii,subPageSectionExpanded:Ni,toggleSubPageSection:Oi,getGroupMemberCount:ji,getMenuEnabledCount:Vi,groupCount:Fi,openMemberManager:Hi,loadGroupMembers:Bi,addMemberToGroup:Ki,removeMemberFromGroup:Wi,availableUsersForGroup:Ui,subPageCache:Pi,onParentToggle:Gi,openMenuConfig:Yi,saveMenuConfig:Ji,deleteGroupConfig:Qi,createGroup:$i,changePasswordForm:gd,changingPassword:hd,doChangePassword:Ed,showSetupWizard:yd,setupForm:bd,setupStep:wd,checkSetupWizard:kd,completeSetupWizard:_d,chatSessions:Al,chatHistoryView:Ll,selectedChatIds:Il,expandedChatDates:Nl,expandedChatMonths:Ol,expandedChatStocks:jl,chatHistoryLoading:Vl,chatHistoryError:Fl,allChatSessionsFlat:Hl,chatGroupedByDate:Bl,chatGroupedByMonth:Kl,chatGroupedByStock:Wl,toggleSelectChat:Ul,toggleSelectChatDate:Gl,toggleSelectChatMonth:Yl,toggleSelectChatStock:Jl,toggleChatDateExpand:Ql,toggleChatMonthExpand:$l,toggleChatStockExpand:Xl,selectAllChatSessions:Zl,deleteSelectedChatSessions:ei,viewChatSession:ti,loadChatHistory:Ts,deleteChatSession:ai,renderMarkdown:si,stockChatInput:ni,stockChatMessages:li,stockChatLoading:ii,stockChatError:oi,askStockSend:ri,askStockQuick:ci,onTouchStart:An,onTouchEnd:Ln,hapticFeedback:l}}})();Ea.name="qc-icon";fn.name="qc-glossary-hint";pn.name="qc-glossary-page";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=rm;window.__quantComponents.Header=rf;window.__quantComponents.SubNav=kf;window.__quantComponents.MobileNav=Vf;window.__quantComponents.StockList=wp;window.__quantComponents.DetailSplit=Sp;window.__quantComponents.TopTabs=zp;window.__quantComponents.AppIcon=Ea;window.__quantComponents.GlossaryHint=fn;window.__quantComponents.GlossaryPage=pn;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default ig();
